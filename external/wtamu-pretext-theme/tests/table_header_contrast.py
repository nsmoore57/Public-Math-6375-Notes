#!/usr/bin/env python3
"""Rendered regression check for WTAMU PreTeXt mathematical table headers.

Run against a locally served PreTeXt fixture after copying this repository's
CSS into the fixture's external asset directory.
"""
from __future__ import annotations

import argparse
import json
from pathlib import Path

from playwright.sync_api import sync_playwright


def capture(page: object, mode: str, screenshot_dir: Path) -> dict:
    page.evaluate("""mode => {
        document.documentElement.classList.toggle('dark-mode', mode === 'dark');
    }""", mode)
    page.wait_for_timeout(150)
    result = page.evaluate("""() => {
        const table = document.querySelector('#contrast-table');
        const headers = [...table.querySelectorAll('th')];
        const bodyMath = table.querySelector('td mjx-container');
        const style = node => getComputedStyle(node);
        return {
          header_count: headers.length,
          header_backgrounds: headers.map(node => style(node).backgroundColor),
          header_text_colors: headers.map(node => style(node).color),
          header_math_colors: headers.map(node =>
            [...node.querySelectorAll('mjx-container')].map(math => style(math).color)
          ),
          header_mathjax_outputs: headers.map(node =>
            [...node.querySelectorAll('mjx-container')].map(math => math.getAttribute('jax'))
          ),
          body_math_color: style(bodyMath).color,
          mathjax_rendered: Boolean(headers[0].querySelector('mjx-container')),
        };
    }""")
    page.locator('#contrast-table').screenshot(path=str(screenshot_dir / f'table-{mode}.png'))
    return result


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument('--url', required=True)
    parser.add_argument('--screenshot-dir', type=Path, required=True)
    parser.add_argument('--evidence-json', type=Path, required=True)
    args = parser.parse_args()
    args.screenshot_dir.mkdir(parents=True, exist_ok=True)
    expected = 'rgb(255, 255, 255)'

    with sync_playwright() as playwright:
        browser = playwright.chromium.launch(headless=True)
        page = browser.new_page(viewport={'width': 1024, 'height': 768}, device_scale_factor=1)
        page.goto(args.url, wait_until='networkidle')
        page.locator('#contrast-table th').first.wait_for()
        page.wait_for_function("document.querySelector('#contrast-table th mjx-container') !== null")
        evidence = {mode: capture(page, mode, args.screenshot_dir) for mode in ('light', 'dark')}
        browser.close()

    args.evidence_json.write_text(json.dumps(evidence, indent=2) + '\n', encoding='utf-8')
    for mode, result in evidence.items():
        assert result['header_count'] == 3, f'{mode}: expected three headers: {result}'
        assert result['mathjax_rendered'], f'{mode}: MathJax did not render: {result}'
        assert set(result['header_backgrounds']) == {'rgb(69, 0, 18)'}, f'{mode}: incorrect header backgrounds: {result}'
        assert set(result['header_text_colors']) == {expected}, f'{mode}: incorrect plain header color: {result}'
        math_colors = {color for colors in result['header_math_colors'] for color in colors}
        mathjax_outputs = {output for outputs in result['header_mathjax_outputs'] for output in outputs}
        assert math_colors == {expected}, f'{mode}: mathematical headers are not white: {result}'
        assert mathjax_outputs == {'CHTML'}, f'{mode}: unexpected MathJax output: {result}'
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
