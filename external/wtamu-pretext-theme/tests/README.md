# Rendered table-header regression

`table_header_contrast.py` checks the shared CSS against the generated HTML of
the representative PreTeXt fixture maintained outside this repository at:

`/home/hermes/HermesProjects/wtamu-pretext-theme-review/table-header-contrast`

After copying `wtamu-theme.css` and the logo assets into that fixture's
`assets/wtamu-pretext-theme/`, build and serve the `web` target, then run:

```bash
pretext build web --clean
python3 -m http.server 4173 --directory output/web
~/.local/share/uv/tools/playwright/bin/python \
  /home/hermes/HermesProjects/wtamu-pretext-theme/tests/table_header_contrast.py \
  --url http://127.0.0.1:4173/table-header-contrast-section.html \
  --screenshot-dir /home/hermes/HermesProjects/wtamu-pretext-theme-review/table-header-contrast/review \
  --evidence-json /home/hermes/HermesProjects/wtamu-pretext-theme-review/table-header-contrast/review/rendered-style-evidence.json
```

The test verifies the actual rendered table DOM in light and dark modes:
plain header text is white on `#450012`, MathJax CHTML header containers are
white, and MathJax has rendered. It writes native-resolution table screenshots
and machine-readable computed-style evidence for visual QA.
