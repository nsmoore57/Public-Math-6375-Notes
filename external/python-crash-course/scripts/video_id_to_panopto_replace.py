#!/usr/bin/env python3
"""
Replace Video ID placeholders with real Panopto IDs using a Notion ledger.

What it does:
  1. Queries a Notion database/data source for rows with both a Video ID and a Panopto ID.
  2. Builds a mapping: {"VID-YYYY-NNNN": "real-panopto-id"}.
  3. Recursively replaces every Video ID occurrence in a target directory with its Panopto ID.

Safe default: this script performs a dry run unless --apply is passed.

Requirements:
  - Python 3.9+
  - A Notion integration token in NOTION_TOKEN or NOTION_API_KEY
  - The Notion database/data-source ID passed with --notion-database-id
  - By default, the script reads the ledger property named "Panopto ID (pending)"

Example dry run:
  python video_id_to_panopto_replace.py \
    --notion-database-id "$NOTION_VIDEO_LEDGER_ID" \
    --directory /path/to/course/repo/source

Example apply:
  python video_id_to_panopto_replace.py \
    --notion-database-id "$NOTION_VIDEO_LEDGER_ID" \
    --directory /path/to/course/repo/source \
    --apply --backup-suffix .bak

Offline test using a mapping JSON file instead of Notion:
  python video_id_to_panopto_replace.py \
    --mapping-json mapping.json \
    --directory /tmp/test-course \
    --apply
"""

from __future__ import annotations

import argparse
import json
import os
import re
import shutil
import sys
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path
from typing import Any, Dict, Iterable, List, Mapping, Optional, Sequence, Tuple

NOTION_VERSION = "2022-06-28"
DEFAULT_SKIP_DIRS = {
    ".git",
    ".hg",
    ".svn",
    ".venv",
    "venv",
    "env",
    "node_modules",
    "__pycache__",
    ".pytest_cache",
    ".mypy_cache",
    ".ruff_cache",
    "dist",
    "build",
    "media",
    "slides",
}
DEFAULT_TEXT_EXTENSIONS = {
    ".bib",
    ".cfg",
    ".css",
    ".csv",
    ".html",
    ".ini",
    ".ipynb",
    ".js",
    ".json",
    ".md",
    ".pre",
    ".ptx",
    ".py",
    ".rst",
    ".tex",
    ".toml",
    ".txt",
    ".xml",
    ".yaml",
    ".yml",
}
VIDEO_ID_RE = re.compile(r"^VID-\d{4}-\d{4}$")
PANOPTO_GUID_RE = re.compile(
    r"[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}"
)


def parse_args(argv: Optional[Sequence[str]] = None) -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Replace VID-YYYY-NNNN placeholders with Panopto IDs from Notion."
    )
    source = parser.add_argument_group("mapping source")
    source.add_argument(
        "--notion-database-id",
        "--notion-data-source-id",
        dest="notion_database_id",
        help="Notion database/data-source ID to query. Required unless --mapping-json is used.",
    )
    source.add_argument(
        "--mapping-json",
        help=(
            "Optional offline mapping JSON. Accepts either "
            "{\"VID-2026-0001\": \"panopto-id\"} or a list of objects."
        ),
    )
    source.add_argument(
        "--token-env",
        default="NOTION_TOKEN,NOTION_API_KEY,VIDEO_NOTION_API_KEY",
        help="Comma-separated environment variable names to check for a Notion token.",
    )
    source.add_argument("--video-id-property", default="Video ID")
    source.add_argument(
        "--panopto-id-property",
        default="Panopto ID (pending)",
        help=(
            "Notion property containing the Panopto ID. Default matches Dr. Moore's "
            "ledger: 'Panopto ID (pending)'."
        ),
    )
    source.add_argument(
        "--panopto-id-property-alias",
        action="append",
        default=["Panopto ID", "Panopto ID (pending)"],
        help=(
            "Additional Notion property name to try when the main Panopto property is empty. "
            "Can be repeated. Defaults include 'Panopto ID' and 'Panopto ID (pending)'."
        ),
    )
    source.add_argument(
        "--include-archived",
        action="store_true",
        help="Include archived Notion pages. Default: skip archived pages.",
    )
    source.add_argument(
        "--save-mapping",
        help="Optional path to write the constructed mapping JSON for inspection.",
    )

    target = parser.add_argument_group("replacement target")
    target.add_argument(
        "--directory",
        required=True,
        help="Directory in which to recursively replace Video IDs.",
    )
    target.add_argument(
        "--apply",
        action="store_true",
        help="Actually write replacements. Without this flag, only report what would change.",
    )
    target.add_argument(
        "--backup-suffix",
        default="",
        help="If set with --apply, write a copy of each changed file before editing, e.g. .bak.",
    )
    target.add_argument(
        "--extensions",
        default=",".join(sorted(DEFAULT_TEXT_EXTENSIONS)),
        help="Comma-separated text file extensions to scan. Use '*' to scan all non-binary files.",
    )
    target.add_argument(
        "--skip-dirs",
        default=",".join(sorted(DEFAULT_SKIP_DIRS)),
        help="Comma-separated directory names to skip.",
    )
    target.add_argument(
        "--max-file-mb",
        type=float,
        default=10.0,
        help="Skip files larger than this many MB. Default: 10.",
    )
    target.add_argument(
        "--fail-on-unmapped-video-ids",
        action="store_true",
        help=(
            "Exit nonzero if VID-YYYY-NNNN tokens are found in target files but are not in "
            "the Notion/mapping JSON replacement map."
        ),
    )
    return parser.parse_args(argv)


def get_token(token_env: str) -> str:
    for name in [item.strip() for item in token_env.split(",") if item.strip()]:
        token = os.environ.get(name)
        if token:
            return token
    raise SystemExit(
        f"No Notion token found. Set one of these environment variables: {token_env}"
    )


class NotionApiError(RuntimeError):
    def __init__(self, status: int, url: str, detail: str) -> None:
        super().__init__(f"Notion API error {status} for {url}: {detail}")
        self.status = status
        self.url = url
        self.detail = detail
        try:
            parsed = json.loads(detail)
        except json.JSONDecodeError:
            parsed = {}
        self.code = str(parsed.get("code", ""))


def notion_request(token: str, method: str, url: str, payload: Optional[Mapping[str, Any]] = None) -> Dict[str, Any]:
    body = None if payload is None else json.dumps(payload).encode("utf-8")
    request = urllib.request.Request(
        url,
        data=body,
        method=method,
        headers={
            "Authorization": f"Bearer {token}",
            "Notion-Version": NOTION_VERSION,
            "Content-Type": "application/json",
        },
    )
    try:
        with urllib.request.urlopen(request, timeout=60) as response:
            return json.loads(response.read().decode("utf-8"))
    except urllib.error.HTTPError as exc:
        detail = exc.read().decode("utf-8", errors="replace")
        raise NotionApiError(exc.code, url, detail) from exc
    except urllib.error.URLError as exc:
        raise SystemExit(f"Could not reach Notion API: {exc}") from exc


def notion_query_urls(database_or_data_source_id: str) -> List[str]:
    clean_id = database_or_data_source_id.strip().replace("-", "")
    quoted = urllib.parse.quote(clean_id)
    # Some workspaces/API versions expose ledgers as databases; newer API versions may
    # expose the underlying object as a data source. Try both forms so an otherwise
    # correct ledger ID does not fail solely because it belongs to the other endpoint.
    return [
        f"https://api.notion.com/v1/databases/{quoted}/query",
        f"https://api.notion.com/v1/data_sources/{quoted}/query",
    ]


def fetch_notion_rows_from_url(token: str, url: str) -> List[Dict[str, Any]]:
    rows: List[Dict[str, Any]] = []
    payload: Dict[str, Any] = {"page_size": 100}
    while True:
        data = notion_request(token, "POST", url, payload)
        rows.extend(data.get("results", []))
        if not data.get("has_more"):
            break
        payload["start_cursor"] = data.get("next_cursor")
    return rows


def fetch_notion_rows(token: str, database_id: str) -> List[Dict[str, Any]]:
    errors: List[NotionApiError] = []
    for url in notion_query_urls(database_id):
        try:
            return fetch_notion_rows_from_url(token, url)
        except NotionApiError as exc:
            errors.append(exc)
            if exc.status not in {400, 404} and exc.code not in {"invalid_request_url", "object_not_found"}:
                break
    error_text = "\n".join(f"  - {error}" for error in errors)
    raise SystemExit(
        "Could not query the Notion ledger with either supported endpoint.\n"
        "Check that the ID is the database/data-source ID and that the integration has access.\n"
        f"Tried:\n{error_text}"
    )


def plain_text_from_rich_text(items: Iterable[Mapping[str, Any]]) -> str:
    return "".join(str(item.get("plain_text", "")) for item in items).strip()


def extract_property_text(prop: Optional[Mapping[str, Any]]) -> str:
    """Extract a usable string from common Notion property value shapes."""
    if not prop:
        return ""
    prop_type = prop.get("type")
    if prop_type in {"title", "rich_text"}:
        return plain_text_from_rich_text(prop.get(prop_type, []))
    if prop_type in {"url", "email", "phone_number"}:
        return str(prop.get(prop_type) or "").strip()
    if prop_type == "select":
        selected = prop.get("select") or {}
        return str(selected.get("name") or "").strip()
    if prop_type == "multi_select":
        return ", ".join(item.get("name", "") for item in prop.get("multi_select", [])).strip()
    if prop_type == "formula":
        return extract_property_text(prop.get("formula"))
    if prop_type == "rollup":
        rollup = prop.get("rollup", {})
        if rollup.get("type") == "array":
            return ", ".join(extract_property_text(item) for item in rollup.get("array", [])).strip(", ")
        return extract_property_text(rollup)
    if prop_type in {"string", "number", "boolean"}:
        value = prop.get(prop_type)
        return "" if value is None else str(value).strip()
    # Last-resort handling for API variants or MCP-exported JSON.
    for key in ("plain_text", "name", "content", "value"):
        if key in prop and prop[key] is not None:
            return str(prop[key]).strip()
    return ""


def normalize_panopto_id(raw_value: str) -> str:
    """Return a Panopto GUID when embedded in a URL, otherwise the trimmed value."""
    value = raw_value.strip()
    if not value:
        return ""
    parsed = urllib.parse.urlparse(value)
    query = urllib.parse.parse_qs(parsed.query)
    for key in ("id", "sessionID", "sessionId"):
        if query.get(key):
            candidate = query[key][0].strip()
            if candidate:
                return candidate
    guid = PANOPTO_GUID_RE.search(value)
    return guid.group(0) if guid else value


def first_property_text(properties: Mapping[str, Any], preferred_name: str, aliases: Sequence[str]) -> str:
    """Return text from the first matching Notion property name with a nonempty value."""
    names: List[str] = []
    for name in [preferred_name, *aliases]:
        if name and name not in names:
            names.append(name)
    for name in names:
        value = extract_property_text(properties.get(name))
        if value:
            return value
    return ""


def build_mapping_from_notion(
    rows: Iterable[Mapping[str, Any]],
    video_id_property: str,
    panopto_id_property: str,
    panopto_id_aliases: Sequence[str],
    include_archived: bool,
) -> Dict[str, str]:
    mapping: Dict[str, str] = {}
    duplicate_video_ids: Dict[str, List[str]] = {}
    malformed_video_ids: List[Tuple[str, str]] = []

    for row in rows:
        if row.get("archived") and not include_archived:
            continue
        properties = row.get("properties", {})
        video_id = extract_property_text(properties.get(video_id_property))
        panopto_id = normalize_panopto_id(
            first_property_text(properties, panopto_id_property, panopto_id_aliases)
        )
        if not video_id or not panopto_id:
            continue
        page_id = str(row.get("id", "unknown-page"))
        if not VIDEO_ID_RE.match(video_id):
            malformed_video_ids.append((page_id, video_id))
            continue
        if video_id in mapping and mapping[video_id] != panopto_id:
            duplicate_video_ids.setdefault(video_id, [mapping[video_id]]).append(panopto_id)
            continue
        mapping[video_id] = panopto_id

    if malformed_video_ids:
        sample = "; ".join(f"{page_id}: {value!r}" for page_id, value in malformed_video_ids[:5])
        raise SystemExit(f"Found malformed Video IDs in Notion rows: {sample}")
    if duplicate_video_ids:
        detail = "; ".join(
            f"{video_id}: {sorted(set(values))}" for video_id, values in duplicate_video_ids.items()
        )
        raise SystemExit(f"Conflicting Panopto IDs for the same Video ID: {detail}")
    return dict(sorted(mapping.items()))


def load_mapping_json(path: str) -> Dict[str, str]:
    with open(path, "r", encoding="utf-8") as handle:
        data = json.load(handle)
    if isinstance(data, dict):
        mapping = {str(key): normalize_panopto_id(str(value)) for key, value in data.items() if value}
    elif isinstance(data, list):
        mapping = {}
        for item in data:
            if not isinstance(item, Mapping):
                continue
            video_id = str(item.get("Video ID") or item.get("video_id") or "").strip()
            panopto_id = normalize_panopto_id(str(item.get("Panopto ID") or item.get("panopto_id") or ""))
            if video_id and panopto_id:
                mapping[video_id] = panopto_id
    else:
        raise SystemExit("Mapping JSON must be an object or a list of objects.")

    bad = [key for key in mapping if not VIDEO_ID_RE.match(key)]
    if bad:
        raise SystemExit(f"Mapping JSON contains malformed Video IDs: {bad[:10]}")
    return dict(sorted(mapping.items()))


def looks_binary(path: Path, sample_size: int = 8192) -> bool:
    try:
        with path.open("rb") as handle:
            sample = handle.read(sample_size)
    except OSError:
        return True
    return b"\x00" in sample


def should_scan(path: Path, root: Path, extensions: set[str], scan_all_text: bool, max_file_bytes: int) -> bool:
    try:
        if not path.is_file() or path.stat().st_size > max_file_bytes:
            return False
    except OSError:
        return False
    if not scan_all_text and path.suffix.lower() not in extensions:
        return False
    return not looks_binary(path)


def iter_candidate_files(
    root: Path,
    extensions: set[str],
    scan_all_text: bool,
    skip_dirs: set[str],
    max_file_bytes: int,
) -> Iterable[Path]:
    for current_root, dirnames, filenames in os.walk(root):
        dirnames[:] = [name for name in dirnames if name not in skip_dirs]
        current = Path(current_root)
        for filename in filenames:
            path = current / filename
            if should_scan(path, root, extensions, scan_all_text, max_file_bytes):
                yield path


def replace_in_file(path: Path, mapping: Mapping[str, str], apply: bool, backup_suffix: str) -> Tuple[int, List[str]]:
    original = path.read_text(encoding="utf-8", errors="surrogateescape")
    updated = original
    replaced_ids: List[str] = []
    for video_id, panopto_id in mapping.items():
        if video_id in updated:
            count = updated.count(video_id)
            updated = updated.replace(video_id, panopto_id)
            replaced_ids.extend([video_id] * count)
    if updated == original:
        return 0, []
    if apply:
        if backup_suffix:
            backup_path = path.with_name(path.name + backup_suffix)
            shutil.copy2(path, backup_path)
        path.write_text(updated, encoding="utf-8", errors="surrogateescape")
    return len(replaced_ids), replaced_ids


def find_unmapped_video_ids(path: Path, mapped_ids: set[str]) -> List[str]:
    text = path.read_text(encoding="utf-8", errors="surrogateescape")
    found = set(re.findall(r"VID-\d{4}-\d{4}", text))
    return sorted(found - mapped_ids)


def run_replacements(args: argparse.Namespace, mapping: Mapping[str, str]) -> int:
    root = Path(args.directory).expanduser().resolve()
    if not root.exists() or not root.is_dir():
        raise SystemExit(f"Target directory does not exist or is not a directory: {root}")

    scan_all_text = args.extensions.strip() == "*"
    extensions = {ext.strip().lower() for ext in args.extensions.split(",") if ext.strip()}
    if not scan_all_text:
        extensions = {ext if ext.startswith(".") else f".{ext}" for ext in extensions}
    skip_dirs = {item.strip() for item in args.skip_dirs.split(",") if item.strip()}
    max_file_bytes = int(args.max_file_mb * 1024 * 1024)

    changed_files: List[Tuple[Path, int, List[str]]] = []
    unmapped: Dict[Path, List[str]] = {}
    candidates = list(iter_candidate_files(root, extensions, scan_all_text, skip_dirs, max_file_bytes))
    mapped_ids = set(mapping)

    for path in candidates:
        if args.fail_on_unmapped_video_ids:
            missing = find_unmapped_video_ids(path, mapped_ids)
            if missing:
                unmapped[path] = missing
        count, replaced = replace_in_file(path, mapping, args.apply, args.backup_suffix)
        if count:
            changed_files.append((path, count, sorted(set(replaced))))

    if unmapped:
        print("Unmapped Video IDs found:", file=sys.stderr)
        for path, ids in sorted(unmapped.items()):
            print(f"  {path.relative_to(root)}: {', '.join(ids)}", file=sys.stderr)
        return 2

    mode = "APPLY" if args.apply else "DRY RUN"
    print(f"Mode: {mode}")
    print(f"Mapping entries: {len(mapping)}")
    print(f"Files scanned: {len(candidates)}")
    print(f"Files with replacements: {len(changed_files)}")
    print(f"Total replacements: {sum(count for _, count, _ in changed_files)}")
    for path, count, ids in changed_files:
        print(f"  {path.relative_to(root)}: {count} replacement(s) [{', '.join(ids)}]")
    if not args.apply and changed_files:
        print("Dry run only. Re-run with --apply to write changes.")
    return 0


def main(argv: Optional[Sequence[str]] = None) -> int:
    args = parse_args(argv)

    if args.mapping_json:
        mapping = load_mapping_json(args.mapping_json)
    else:
        if not args.notion_database_id:
            raise SystemExit("Either --notion-database-id or --mapping-json is required.")
        token = get_token(args.token_env)
        rows = fetch_notion_rows(token, args.notion_database_id)
        mapping = build_mapping_from_notion(
            rows,
            args.video_id_property,
            args.panopto_id_property,
            args.panopto_id_property_alias,
            args.include_archived,
        )

    if args.save_mapping:
        output = Path(args.save_mapping).expanduser().resolve()
        output.parent.mkdir(parents=True, exist_ok=True)
        output.write_text(json.dumps(mapping, indent=2, sort_keys=True) + "\n", encoding="utf-8")
        print(f"Saved mapping: {output}")

    if not mapping:
        raise SystemExit("No Video ID → Panopto ID mappings were found; no replacements made.")

    return run_replacements(args, mapping)


if __name__ == "__main__":
    raise SystemExit(main())
