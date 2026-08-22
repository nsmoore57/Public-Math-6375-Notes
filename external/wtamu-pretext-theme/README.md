# WTAMU PreTeXt Theme

Shared WTAMU-branded PreTeXt HTML theme assets for Dr. Nicholas Moore's course-note repositories.

## Files

```text
wtamu-theme.css
SpiritWT-NewDigital.png
SpiritWT-white.png
```

The CSS file expects the two Spirit WT images to live in the same directory as `wtamu-theme.css` because it uses relative `url(...)` references.

## Intended use as a course submodule

Course repositories should include this repository as a Git submodule at:

```text
assets/wtamu-pretext-theme
```

Then the course `project.ptx` HTML targets should reference:

```xml
<stringparams html.css.extra="external/wtamu-pretext-theme/wtamu-theme.css" />
```

PreTeXt copies the course `assets/` directory into the generated HTML `external/` directory. With this submodule path, the generated CSS path becomes:

```text
output/<target>/external/wtamu-pretext-theme/wtamu-theme.css
```

and the image references remain valid relative to that stylesheet.

## Updating the theme

To update the theme itself:

```bash
cd ~/HermesProjects/wtamu-pretext-theme
# edit wtamu-theme.css or image assets
git add .
git commit -m "Describe theme change"
git push
```

Then update each course repository's submodule pointer:

```bash
cd ~/HermesProjects/Math-4362-Course-Notes   # or another course repo
git submodule update --remote assets/wtamu-pretext-theme
git add assets/wtamu-pretext-theme
git commit -m "Update WTAMU PreTeXt theme"
git push
```
