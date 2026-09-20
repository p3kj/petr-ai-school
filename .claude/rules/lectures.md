# Lecture conventions (`lectures/`, `themes/`)

Full authoring notes live in `lectures/README.md` and `themes/README.md`. The essentials:

- One Marp deck per lecture, flat in `lectures/`, named `NN-lowercase-kebab-case.md`. Frontmatter starts with `marp: true`, `theme: sketch`, `paginate: true`, `size: 16:9`, `title`, `description`, `author`.
- `draft: true` in the frontmatter keeps a deck off the site. `00-workbench.md` (the formatting reference deck) is a permanent draft.
- Images go in `lectures/assets/` with URL-friendly names (lowercase, no spaces). Never hotlink remote images; PDF export drops them.
- Use the theme's classes (`lead`, `cols`, `box tip`, `tight`...) instead of a `style:` block. Copy slide skeletons from `00-workbench.md`.
- Frozen: `lectures/01-introduction-to-ai.md` and `themes/sketch.css`. Change them only when explicitly asked.
- Each published deck needs a wiki page in `wiki/lectures/` (see `.claude/rules/wiki.md`) and a row in `wiki/lectures/index.md`.

## Building

- `npm run lectures` renders every non-draft deck to `site/quartz/static/slides/<slug>.html` and `.pdf` (Chromium needed for PDF; `npm run lectures:html` skips it). The folder is wiped on each run and kept out of git through `.git/info/exclude` (the script adds the rule; a `.gitignore` rule would also hide the decks from the Quartz build).
- Manual exports from anywhere in the repo pick up the themes through `.marprc.yml`: `npx marp lectures/01-introduction-to-ai.md -o out.html`. PDF/PPTX also need `--allow-local-files`.
- CI runs the same script before the Quartz build on every push to `main`.

## Content

Follow `.claude/rules/audience.md`. One idea per slide, analogy before concept, a hands-on demo or exercise in every lecture, and a recap slide that links the terms introduced to their wiki pages.
