# AI Course Policy Badges

Reusable AI-use policy badges for university course materials.

Maintainer: **Nicholas S. Moore, PhD**, Assistant Professor of Mathematics, West Texas A&M University.

These badges provide a consistent visual language for marking AI-use expectations on activities, problems, notebooks, assignments, course-note sections, and handouts across online and hybrid courses beginning Fall 2026.

## Badge set

| Badge | Meaning | Visual accent |
|---|---|---|
| **AI Not Permitted** | Students must complete the marked work without AI assistance. | solid restrained maroon/red with lock icon |
| **AI Debugging Only** | Students may use AI to understand errors, diagnose problems, and ask guiding questions, but not to generate a full solution. | solid WT-style blue with wrench/debug icon |
| **AI Permitted with Disclosure** | Students may use AI as a tutor, assistant, brainstorming partner, or reviewer, but must disclose its use and understand submitted work. | solid restrained green with disclosure-note icon |

Core principle:

> AI may be used as a tutor or teammate when permitted, but not as an easy button. Students are responsible for understanding, checking, and explaining all submitted work.

## Files

```text
badges/                    SVG visual source of truth
snippets/pretext/           PreTeXt fragments
snippets/canvas/            Canvas-safe HTML fragments
snippets/jupyter/           Markdown cells for Jupyter notebooks
snippets/markdown/          plain Markdown fallbacks
examples/                   examples showing all three badges together
templates/pretext/           reusable PreTeXt problem-document template and CSS
docs/                       usage, accessibility, and design notes
```

## Quick use

### Canvas

Upload the SVG files to Canvas Files or another course-controlled location, then paste the corresponding `snippets/canvas/*.html` fragment into the Canvas HTML editor and replace `*_IMAGE_URL` with the uploaded image URL.

### PreTeXt

Copy this repository into course assets, or add it as a submodule such as:

```bash
git submodule add https://github.com/nsmoore57/ai-course-policy-badges.git assets/ai-course-policy-badges
```

Then adapt the `source="assets/ai-course-policy-badges/badges/...svg"` path in `snippets/pretext/*.xml` to match the course build layout.

For a fuller problem-set layout, see:

- `templates/pretext/problem-document-template.ptx`
- `templates/pretext/ai-badge-problem-document.css`
- `examples/example-pretext-problem-document.ptx`

The CSS can be attached to a course HTML target with a PreTeXt project string parameter such as:

```xml
<stringparams html.css.extra="external/ai-badge-problem-document.css" />
```

### Jupyter

Copy or submodule the repository into the notebook project, then paste a Markdown snippet from `snippets/jupyter/*.md` into a Markdown cell. Adjust the relative image path if needed.

### Plain Markdown / PDF fallback

Use `snippets/markdown/*.md` when images are inconvenient or when a text-only format is required.

## Accessibility baseline

- Meaning is present in visible text, image alt text, and surrounding prose.
- Icons and colors are supplemental, not the only signal.
- SVGs use built-in system fonts only; no JavaScript or external web fonts.
- Badges are readable at small sizes and have high-contrast text.
- The label remains visible in grayscale/print contexts.

See `docs/accessibility.md` and `docs/design-notes.md` for details.

## Version

Initial working version for Fall 2026 course materials.
