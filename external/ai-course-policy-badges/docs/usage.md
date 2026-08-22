# Usage Guide

## Recommended asset strategy

Use the SVG files in `badges/` as the visual source of truth. For each course repository, either:

1. Add this repository as a submodule under the course assets directory, or
2. Copy the needed SVG files into that course's asset folder.

Avoid relying on a single live HTML widget. Canvas, PreTeXt, Jupyter, and PDF workflows sanitize or render HTML differently, so platform-specific snippets are safer.

## Canvas

1. Upload the selected SVG badge to Canvas Files or another course-controlled asset location.
2. Open the page/assignment in the Canvas HTML editor.
3. Paste the corresponding file from `snippets/canvas/`.
4. Replace `AI_..._IMAGE_URL` with the uploaded image URL.
5. Keep the prose below the badge. The image must not be the only source of meaning.

## PreTeXt

1. Make the badge SVG available in the PreTeXt project, commonly under `assets/ai-course-policy-badges/`.
2. Insert the relevant fragment from `snippets/pretext/` into a section, exercise, or activity.
3. Adjust the `source` path for your repository layout.
4. Build and inspect both HTML and PDF outputs.

## Jupyter notebooks

1. Put the badge SVGs in a relative path accessible from the notebook.
2. Paste the relevant Markdown snippet into a Markdown cell.
3. Adjust the relative path if needed.
4. Keep the visible text explanation under the image.

## Plain Markdown fallback

Use the snippets in `snippets/markdown/` for contexts where images are not available, for plain-text LMS descriptions, or as PDF/handout fallback language.
