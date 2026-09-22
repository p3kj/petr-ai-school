# petr-ai-school

Learning resource for Petr's AI School: a course teaching non-programmers to work with AI agents (Claude Code first). Public repo, public site: https://p3kj.github.io/petr-ai-school/

**This repository is public.** Everything committed here is visible on GitHub, including pages the site does not publish. Notes about people, teaching tactics or unfinished thinking do not belong here. Maintainers keep those in a separate private repo, linked locally through the gitignored `CLAUDE.local.md`.

## Layout

| Path | What | Edited with |
| --- | --- | --- |
| `lectures/` | Marp slide decks, one `.md` per lecture, shared `assets/` | VS Code / JetBrains |
| `themes/` | Custom Marp themes (`sketch` is the default) | rarely |
| `wiki/` | Obsidian vault: the student-facing wiki | Obsidian |
| `site/` | Quartz 5 engine (git subtree of jackyzha0/quartz@v5, MIT). Only `site/quartz.config.yaml` is ours | rarely |
| `scripts/build-lectures.mjs` | Renders decks to HTML + PDF into `site/quartz/static/slides/` (excluded from git via `.git/info/exclude`, maintained by the script) | |
| `.github/workflows/deploy.yml` | Builds and deploys to GitHub Pages on push to `main` | |
| `.claude/rules/` | Detailed conventions: `audience.md`, `wiki.md`, `lectures.md` | |

## Commands

```sh
npm run setup      # npm ci here and in site/ (first time or after pulling)
npm run lectures   # render decks (HTML + PDF); add --no-pdf via npm run lectures:html
npm run watch      # live deck preview at http://localhost:4321/<deck>.md (reloads on save)
npm run watch:html # same, but rendering lectures/<deck>.html next to the source (gitignored)
npm run watch:scroll # reading view: all slides stacked vertically, one scrollbar
npm run dev        # render decks (HTML only) then serve the site at http://localhost:8080
npm run build      # full production build into site/public
npm run site:upgrade   # pull newer Quartz via git subtree, then npm install in site/
```

Preview only through `npm run dev` (the dev server uses no base path). A plain `build` bakes `/petr-ai-school` into links, which is correct for GitHub Pages and wrong for a local file viewer.

## Hard rules

- Do not edit `lectures/01-introduction-to-ai.md` or `themes/sketch.css` unless explicitly asked. They are curated by hand.
- Never run `npx quartz upgrade`, `npx quartz sync` or `npx quartz create` here. They operate on the whole git repo, not on `site/`. Upgrade with `npm run site:upgrade`, which needs the `upstream` remote once per clone: `git remote add upstream https://github.com/jackyzha0/quartz.git`.
- When you add a concept note, guide or lecture page, wire it in before calling it done: Glossary row, wikilinks from every page that mentions the term, the Roadmap row for its week, the lecture page terms list, the guides or lectures index, and a bullet in the current week's entry on `wiki/news.md`. A page nobody links to does not exist for a student.
- The Quartz build applies every `.gitignore` it can see, including the root one, to the files it copies. Never ignore anything under `wiki/` or `site/quartz/static/` in any `.gitignore`. The rendered decks are excluded through `.git/info/exclude`, which `npm run lectures` maintains.
- Deck filenames are lowercase kebab-case. Images live in `lectures/assets/`, never remote URLs.
- `draft: true` in frontmatter (wiki page or deck) keeps it off the site. It does not hide it on GitHub.
- No em dashes in any student-facing text (wiki, slides, README). Use a plain dash, a colon, or two sentences.
- Student-facing content is English, plain, analogy-first. See `.claude/rules/audience.md` before writing any of it.
- Commit only when asked. Do not commit `brain`, `CLAUDE.local.md`, `node_modules/`, `site/public/` or rendered decks.

## Where to read more

`lectures/README.md` (deck conventions, manual exports), `themes/README.md` (theme classes), `site/docs/` (Quartz documentation for the exact vendored version).
