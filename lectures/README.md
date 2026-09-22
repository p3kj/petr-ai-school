# Lectures

One Markdown file per lecture, flat in this folder, numbered in order. Each file is a complete Marp deck on its own. Images live in a single shared [`assets/`](assets/) folder so the same picture can be reused across lectures without copies.

```
lectures/
  00-workbench.md               reference deck, draft: never published
  01-introduction-to-ai.md
  assets/
    thinking.gif
    ...
```

| # | Lecture | Published |
| --- | --- | --- |
| 00 | [Slide Workbench](00-workbench.md) - every formatting feature and slide template, ready to copy | no (`draft: true`) |
| 01 | [Introduction to AI](01-introduction-to-ai.md) | [wiki page](../wiki/lectures/01-introduction-to-ai.md) |
| 02 | [Meet Claude Code](02-meet-claude-code.md) - hands-on tour of the controls | not yet (`draft: true`) |

## Naming and publishing

- Filenames are lowercase kebab-case with a two-digit prefix: `02-where-ai-runs.md`. The build refuses anything else.
- The website build renders every deck that has `marp: true` and does **not** have `draft: true` in its frontmatter. Add `draft: true` while a deck is in progress. Remember the repository itself is public.
- Every published deck gets a page in `../wiki/lectures/` that embeds it, plus a row in `../wiki/lectures/index.md`.

## Images

Reference an asset relatively: `![w:420](assets/image-1.png)`. Use URL-friendly names: lowercase, no spaces or special characters. The build copies `assets/` next to the rendered decks so the paths keep working on the website.

**No remote images.** Download anything external into `assets/` instead of hotlinking it. Remote images break offline, break behind firewalls, and silently vanish from PDF and PPTX exports, which fetch them at build time.

```sh
curl -L -o assets/thinking.gif https://i.giphy.com/75ZaxapnyMp2w.gif
```

Giphy's short form is `i.giphy.com/<id>.gif`. The long `media4.giphy.com/media/v1.<base64>/…` URLs carry a session tracking token that is validated on request, so they can break while the plain form keeps working.

## The workbench

`00-workbench.md` is a catalogue of every formatting feature and slide template: text formatting, layout blocks (columns, claim, stats, callouts, comparison) and every image placement Marp supports. Find the slide you want and copy the block between the `---` separators.

## Themes

Decks use the custom themes in [`../themes/`](../themes/). Pick one with `theme: sketch` in the frontmatter.

**Do not redefine theme classes in a deck's `style:` block.** Deck styles are injected after the theme and override it, so redefining `.box` there turns every callout into a plain frame.

## Previewing

**VS Code:** install the **Marp for VS Code** extension and open any lecture file - it renders live in a side panel. Themes come from `markdown.marp.themes` in [`.vscode/settings.json`](../.vscode/settings.json); reload the window after changing that file.

**Any other editor (PhpStorm, IntelliJ, Obsidian, a second browser window):** run a local preview server from the repository root:

```sh
npm run watch                        # http://localhost:4321/
npm run watch -- 02-meet-claude-code # also prints the direct deck URL
npm run watch -- --port 5000         # if 4321 is taken
```

It serves every deck in this folder, rendered on each request with the repo themes, including drafts. Open `http://localhost:4321/<deck-name>.md` in the editor's built-in browser panel; saving the file reloads the page (Marp injects a livereload script). Nothing is written to disk, so it never touches the rendered decks under `site/`.

**Plain HTML file instead of a server:** the same script can render into this folder and keep it up to date.

```sh
npm run watch:html -- 02-meet-claude-code  # writes lectures/02-meet-claude-code.html
npm run watch:html                         # every deck in this folder
```

Open that `.html` file in the editor's browser panel (or any browser). Each save re-renders it and the open page reloads itself, as long as the command keeps running. `lectures/*.html` is gitignored, and the file sits next to `assets/` so images resolve. This is preview output only; the site is still built by `npm run lectures`.

**Reading view (all slides under each other):** the presentation views show one slide at a time. For proofreading, this one stacks every slide at full size in a single scrolling page, like the pages of a PDF.

```sh
npm run watch:scroll -- 02-meet-claude-code   # http://localhost:4321/02-meet-claude-code
npm run watch:scroll -- --width 1400          # wider slides (default 1000px)
```

Slide width is also a URL parameter, so you can try sizes without restarting: `?w=1400`. Saving a deck, an asset or a theme reloads the page and keeps your scroll position. It renders with Marp's `bare` template (no presentation JavaScript, no arrow keys) and writes nothing to disk.

## Building for the website

From the repository root:

```sh
npm run lectures        # HTML + PDF for every published deck
npm run lectures:html   # HTML only (no Chromium needed)
```

Output lands in `site/quartz/static/slides/` (kept out of git by the script through `.git/info/exclude`) and is picked up by the Quartz build. `npm run dev` runs the HTML step and then serves the whole site.

## Manual exports

The root `.marprc.yml` registers the themes folder, so Marp CLI works from anywhere in the repository:

```sh
npx marp lectures/01-introduction-to-ai.md -o 01-introduction-to-ai.html
npx marp lectures/01-introduction-to-ai.md --pdf  --allow-local-files -o 01-introduction-to-ai.pdf
npx marp lectures/01-introduction-to-ai.md --pptx --allow-local-files -o 01-introduction-to-ai.pptx
```

`--allow-local-files` is required for PDF, PNG and PPTX whenever the deck uses a local image, otherwise the image is silently dropped. Exports written into this folder (`*.html`, `*.pdf`, `*.pptx`) are ignored by git. Add `--watch` to rebuild on save, or `-s lectures` to serve the folder at <http://localhost:8080>.

## Conventions

- `---` on its own line separates slides. So do `***` and `___`, so use the HTML tag `<hr>` for a rule *inside* a slide.
- `<!-- _class: … -->` with a leading underscore applies to that slide only; without it the setting applies from there onwards.
- Keep one idea per slide; if it needs a scrollbar, split it.
