# Design Notes

## Design language

The badges are compact horizontal SVGs with:

- a solid restrained accent bar;
- a simple supplementary icon;
- a small `AI USE` eyebrow label;
- the exact policy label in large text;
- neutral surfaces suitable for light and dark surrounding pages.

The goal is a professional university-course look rather than a playful sticker style.

## Branding approach

The colors are WTAMU-adjacent accents rather than large saturated color fields:

- muted maroon/red for **AI Not Permitted**;
- WT-style blue for **AI Debugging Only**;
- restrained green for **AI Permitted with Disclosure**.

The badges avoid heavy maroon saturation and should sit cleanly in Canvas pages, PreTeXt notes, notebooks, and handouts.

## Icons

Icons are intentionally simple and supplementary:

- lock for **AI Not Permitted**;
- wrench/debug symbol for **AI Debugging Only**;
- document/check mark for **AI Permitted with Disclosure**.

The text label and surrounding prose carry the meaning, so the icons are not required for interpretation.

## Optical alignment

The icons are optically centered inside their white circles rather than merely centered by equal coordinate gaps. Asymmetric forms such as a wrench or document/check mark can look off-center when placed by geometric bounding boxes alone, so the icon artwork is nudged until the visual weight appears balanced.

## Technical choices

- SVG is the source of truth.
- System fonts only: Arial/Helvetica fallback stack.
- No JavaScript.
- No external web fonts.
- No external CSS.
- Badge dimensions are fixed for predictable rendering in LMS and notebook contexts.
