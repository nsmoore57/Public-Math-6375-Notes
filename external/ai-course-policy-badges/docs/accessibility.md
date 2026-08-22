# Accessibility Notes

This badge system is designed so that color and iconography are supplementary.

## Requirements met in this version

- Each badge includes visible text with the exact policy label.
- Each SVG has a `<title>` and `<desc>` for accessible naming in contexts that preserve SVG semantics.
- Platform snippets include alt text that repeats both the label and meaning.
- Every image snippet is paired with visible surrounding prose.
- Colors are restrained and selected for strong contrast against the badge surface.
- The policy meaning remains understandable if printed in grayscale because the text label and prose carry the meaning.
- No JavaScript, animation, external fonts, or remote CSS are required.

## Alt text guidance

Use concise alt text that includes both the label and the practical meaning.

Example:

> AI Debugging Only. Students may use AI to understand errors, diagnose problems, and ask guiding questions, but not to generate a full solution.

Do not use vague alt text such as "badge" or "AI icon."

## Plain-text fallback

When images are not available, use the snippets in `snippets/markdown/`. The fallback should begin with:

```text
AI Use: [badge label]
```

followed by the policy meaning.

## Canvas caution

Canvas may sanitize HTML and CSS. The Canvas snippets intentionally use simple `<p>`, `<img>`, and `<strong>` elements with minimal inline styling.

## Review checklist before course use

- [ ] Badge image displays correctly.
- [ ] Alt text is present and meaningful.
- [ ] Visible prose repeats the policy label and meaning.
- [ ] The image is not the only source of information.
- [ ] PDF/print output remains understandable.
