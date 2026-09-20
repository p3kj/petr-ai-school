# Lectures

One Markdown file per lecture, flat in this folder, numbered in order. Each
file is a complete lecture on its own. Images live in a single shared
[`assets/`](assets/) folder so the same picture can be reused across lectures
without copies.

```
lectures/
  00-workbench.md
  01-introduction-to-ai.md
  01-introduction-to-ai.html    exported, browsable in place
  assets/
    image-1.png
    thinking.gif
```

| # | Lecture |
| --- | --- |
| 00 | [Slide Workbench](00-workbench.md) - reference deck, not a lecture |
| 01 | [Introduction to AI](01-introduction-to-ai.md) |

Reference an asset relatively: `![w:420](assets/image-1.png)`. Exported HTML
lands next to the deck, so the same paths resolve when you open it in a
browser.

## No remote images

Download anything external into `assets/` instead of hotlinking it. Remote
images break offline, break behind firewalls, and silently vanish from PDF
and PPTX exports, which fetch them at build time.

```sh
curl -L -o assets/thinking.gif https://i.giphy.com/75ZaxapnyMp2w.gif
```

Giphy's short form is `i.giphy.com/<id>.gif`. The long
`media4.giphy.com/media/v1.<base64>/…` URLs carry a session tracking token
that is validated on request, so they can break while the plain form keeps
working.

## The workbench

`00-workbench.md` is a catalogue of every formatting feature and slide
template: text formatting, layout blocks (columns, claim, stats, callouts,
comparison) and every image placement Marp supports. Find the slide you want
and copy the block between the `---` separators.

## Themes

Decks use the custom themes in [`../themes/`](../themes/). Pick one with
`theme: sketch` in the frontmatter.

**Do not redefine theme classes in a deck's `style:` block.** Deck styles are
injected after the theme and override it, so redefining `.box` there turns
every callout into a plain frame.

## Previewing

Install the **Marp for VS Code** extension and open any lecture file - it
renders live in a side panel. Themes come from `markdown.marp.themes` in
[`.vscode/settings.json`](../.vscode/settings.json); reload the window after
changing that file.

## Exporting

Run from inside this folder so relative asset paths resolve:

```sh
cd lectures
npx @marp-team/marp-cli@latest 01-introduction-to-ai.md --theme-set ../themes/ -o 01-introduction-to-ai.html
npx @marp-team/marp-cli@latest 01-introduction-to-ai.md --theme-set ../themes/ --pdf  --allow-local-files
npx @marp-team/marp-cli@latest 01-introduction-to-ai.md --theme-set ../themes/ --pptx --allow-local-files
```

`--theme-set ../themes/` loads all custom themes at once; the CLI ignores the
VS Code setting. `--allow-local-files` is required for PDF, PNG and PPTX
whenever the deck uses a local image, otherwise the image is silently
dropped. HTML export and the VS Code preview do not need it.

Add `--watch` to rebuild on save, or `-s .` to serve the folder at
<http://localhost:8080>.

## Conventions

- `---` on its own line separates slides. So do `***` and `___`, so use the
  HTML tag `<hr>` for a rule *inside* a slide.
- `<!-- _class: … -->` with a leading underscore applies to that slide only;
  without it the setting applies from there onwards.
- Keep one idea per slide; if it needs a scrollbar, split it.
