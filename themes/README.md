# Themes

Custom Marp themes for this repo. Pick one per deck with `theme: <name>` in
the frontmatter.

| Theme | Ground | Accent | Type | For |
| :--- | :--- | :--- | :--- | :--- |
| `sketch` | white | red `#e3253d` | Inter + Caveat | lecture slides built around hand-drawn art |
| `ember` | cream `#faf9f5` | terracotta `#d97757` | Inter + JetBrains Mono | warm, calm, Claude-ish |
| `circuit` | near-white + dot grid | indigo `#4f46e5` | Inter + JetBrains Mono | technical, engineering-doc feel |
| `console` | warm paper | terracotta `#cc6a45` | JetBrains Mono only | light-terminal look, `$` prompts |

`preview.md` renders the same content in whichever theme its frontmatter
names, so you can compare them side by side.

## sketch

The one built for drawings. White ground, clean sans for reading, a
handwriting face for anything personal, and a single red accent taken from
the *Konec prokrastinace* palette.

Extra classes beyond the shared set:

| Class | Does |
| :--- | :--- |
| `ink` | `mix-blend-mode: multiply` on images, so a white-background PNG or scan sits on the paper with no visible box. Put it on the image or on a wrapping `div`. |
| `hand` | handwriting face, for an aside in your own voice |
| `margin-note` | a note pencilled in beside the text: handwriting, red, rule down the left |

`doodle-sample.svg` is a placeholder drawing in roughly the intended weight
(2.4px lines, one red accent). Replace it with your own.

## Callouts

`box` is the callout block. On its own it is a plain frame; add a variant and
it gets an icon, a coloured frame, a tinted ground and a label.

```md
<div class="box tip">

Ask for the reasoning **before** the answer.

</div>
```

| Variant | Label | Colour | Icon |
| :--- | :--- | :--- | :--- |
| `box` | none | theme accent | none |
| `box note` | Note | blue | circled i |
| `box tip` | Tip | green | lightbulb |
| `box warn` | Warning | red | triangle |
| `box key` | Key point | ochre | star |
| `box task` | Your turn | graphite | checked box |

Keep the blank lines inside the `div`, otherwise the Markdown in it is not
parsed.

**Changing the label.** Marp strips `data-*` and `style` attributes from raw
HTML, so the wording cannot be set on the element. Two ways instead:

- add `cs` for the Czech set: `<div class="box task cs">` gives Poznámka,
  Tip, Pozor, Klíčové, Úkol
- set `--label` from the deck's own frontmatter, which is injected after the
  theme and so wins:

  ```yaml
  style: |
    .box.task { --label: 'Cvičení 3'; }
  ```

The icons are inline SVG masked to the variant colour, so there are no image
files to keep track of and they follow the colour into `invert`.

## Vertical alignment

Slides start at the **top**. Marp's built-in `default` theme, which all four
import, sets `place-content: safe center center` and Chromium honours
`align-content` on block containers, so every slide would otherwise be
vertically centred. Each theme overrides that with `align-content: start`.

- `<!-- _class: middle -->` centres one slide vertically
- `<!-- _class: lead -->` centres it and the text, for titles and dividers

## Fitting more on a slide

Marp has no automatic body-text scaling. Its `@auto-scaling` metadata only
covers three things: headings marked `<!-- fit -->`, code blocks, and maths.
Ordinary text and lists just overflow.

So density is a per-slide choice. Every size in these themes is in `em`, so
changing the section font-size scales headings, lists, spacing, callouts and
all the rest together:

| Class | sketch / ember / circuit | console |
| :--- | ---: | ---: |
| `roomy` | 29px | 27px |
| *(default)* | 26px | 24px |
| `tight` | 23px | 21px |
| `tighter` | 20px | 18px |
| `tiny` | 17px | 16px |

```md
<!-- _class: tight -->
```

For a single oversized heading, `# <!-- fit -->` shrinks it to the slide
width automatically.

## Shared classes

Every theme here defines the same layout utilities, so a deck moves between
them without edits:

`left` · `lead` · `middle` · `invert` · `overlay` · `roomy` · `tight` ·
`tighter` · `tiny` · `cols` · `cols-3` · `claim` · `stat` · `stat-label` ·
`caption` · `chip` · `box` and its variants (`note` `tip` `warn` `key`
`task`, plus `cs`)

They live in the theme, not in each deck, so a deck using these themes does
not need its own `style:` block. (`00-workbench.md` still carries one because
it is written against the built-in `uncover` theme.)

## Registering a theme

A custom theme has to be declared once per tool:

- **VS Code** reads `markdown.marp.themes` in
  [`.vscode/settings.json`](../.vscode/settings.json). It does not
  auto-discover `.css` files. Reload the window after editing it.
- **Marp CLI** needs `--theme-set themes/` on every invocation:

  ```sh
  cd lectures
  npx @marp-team/marp-cli@latest 01-introduction-to-ai.md \
    --theme-set ../themes/ --pdf --allow-local-files
  ```

## Fonts

All four pull webfonts from Google Fonts, so the first render needs a network
connection. Each has a local fallback stack, and all chosen faces cover Latin
Extended, so Czech diacritics (ř, ě, š, č, ž, ů, ď) render correctly.
