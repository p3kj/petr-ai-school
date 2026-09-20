# Wiki conventions (`wiki/`)

`wiki/` is an Obsidian vault rendered by Quartz 5 (`site/`). Open the folder in Obsidian; build with `npm run dev`.

## Structure

| Folder | Holds | Index page |
| --- | --- | --- |
| `concepts/` | One note per term (the glossary) | `concepts/index.md`, a table with one line per term |
| `guides/` | Hands-on how-tos, one task each | `guides/index.md` |
| `lectures/` | One page per session with the deck embedded | `lectures/index.md`, table of sessions |
| `course/` | Cross-cutting pages: `Mental models.md`, `Roadmap.md` | |
| `attachments/` | Images pasted from Obsidian (configured as the attachment folder) | |
| `templates/` | Obsidian templates (`Concept.md`); not published | |
| `drafts/` | Work in progress; not published but visible on GitHub | |

Root pages: `index.md` (home), `about.md`.

## Notes

- **Atomic.** One concept per note. Structure: analogy, plain definition with links, `## Example`, `## Why it matters for you`, `## Related`.
- **Filename = the term in natural case**, e.g. `Context window.md`, so `[[Context window]]` reads like prose. Folder index pages are `index.md`.
- **Wikilinks everywhere.** First mention of any term links to its note. Use the alias form for grammar: `[[Token|tokens]]`. Prefer linking the real filename over an alias so popovers show the note, not a redirect.
- **Frontmatter** on every note: `title`, `description` (one sentence; shown in popovers, search and link previews), `tags` (`concept`, `guide`, `lecture`, `course`), `aliases` for plurals and synonyms, optional `draft: true`.
- Do not hard-wrap paragraphs. Obsidian and the site both treat a single newline as a line break.
- Callouts use Obsidian syntax: `> [!note]`, `> [!tip]`, `> [!question]`, `> [!warning]`.
- Never ignore anything under `wiki/` in any `.gitignore` (root or nested). Quartz applies gitignore rules to the content it builds and would drop those pages.
- Link resolution is `shortest` in both Obsidian and Quartz: `[[Token]]` works from any folder as long as the filename is unique.

## Embedding a lecture deck

Decks are rendered by `npm run lectures` into `site/quartz/static/slides/<slug>.html` and `.pdf`. Reference them with root-absolute `/static/slides/...` paths (Quartz rewrites them for the deployed base path). Deck links must opt out of the SPA router and popovers:

```html
<iframe src="/static/slides/<slug>.html" title="Slides: <title>" loading="lazy" allow="fullscreen" allowfullscreen style="width:100%;aspect-ratio:16/9;border:0;border-radius:6px;background:#fff"></iframe>

<p><a href="/static/slides/<slug>.html" target="_blank" rel="noopener" data-router-ignore data-no-popover="true">Open slides full screen</a> · <a href="/static/slides/<slug>.pdf" data-router-ignore data-no-popover="true">Download PDF</a> <small>(click the slides once, then use the arrow keys)</small></p>
```

Keep blank lines around raw HTML blocks. After adding a new deck, restart `npm run dev`; the dev server only watches static files that existed at startup.

## Site configuration

`site/quartz.config.yaml` is the only file in `site/` we own. Colours and fonts mirror `themes/sketch.css`. Plugins deliberately disabled: `@quartz-themes/core`, `cname`, `obsidian-plugin-excalidraw`, `note-properties`, `encrypted-pages`, analytics. `ignorePatterns: [drafts, templates, .obsidian]`.
