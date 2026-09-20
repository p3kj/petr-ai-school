---
marp: true
draft: true
theme: sketch
paginate: true
size: 16:9
title: Slide Workbench
description: Reference deck - every formatting feature and slide template, ready to copy.
author: Petr Jaroš
header: 'workbench'
footer: 'petr-ai-school'
math: katex
---

<!-- _paginate: false -->
<!-- _header: '' -->

# Slide Workbench

Every block below is copy-paste ready

`lectures/00-workbench.md`

---

<!-- _class: left -->

## How to use this

1. Find a slide that looks like what you want
2. Open this file, copy the block between the `---` separators
3. Paste it into your lecture

Utility classes (`.cols`, `.claim`, `.stat`, `.box`, …) come from the
theme, so there is nothing else to copy.

**Careful:** a `style:` block in your own frontmatter is injected *after*
the theme and overrides it. Redefining `.box` there is what turns every
callout into a plain black frame.

---

<!-- _class: left -->

## Theme and global settings

```md
---
marp: true
theme: sketch       # sketch | ember | circuit | console
paginate: true      # built-in: default | gaia | uncover
size: 16:9          # or 4:3
header: 'workbench'
footer: 'petr-ai-school'
math: katex
---
```

This deck uses **sketch**. All four custom themes define the same utility
classes, so changing that one line restyles the whole deck.

---

<!-- _class: left -->

## Directives: global, local, spot

```md
<!-- paginate: false -->    <!-- from here on -->
<!-- _paginate: false -->   <!-- this slide only (underscore) -->
<!-- _class: left -->
<!-- _backgroundColor: #10233b -->
<!-- _color: white -->
<!-- _header: '' -->
<!-- _footer: 'CC BY-SA 4.0' -->
```

The underscore prefix means **spot**: applies to the current slide only.
Without it, the setting applies from this slide onwards.

---

<!-- _class: left -->

## Speaker notes

Any HTML comment that is not a directive becomes a presenter note.

```md
<!--
Remember to mention the 2017 transformer paper here.
Not shown on the slide.
-->
```

<!--
This is a real speaker note. Open presenter view with `p` in the browser,
or export with --notes to get them as a PDF.
-->

Visible only in presenter view and `--notes` exports.

---

<!-- _paginate: false -->
<!-- _header: '' -->

# Text formatting

---

<!-- _class: left -->

## Inline formatting

**bold** · *italic* · ***bold italic*** · ~~strikethrough~~

`inline code` · [a link](https://marp.app/) · H<sub>2</sub>O · x<sup>2</sup>

<mark>highlighted</mark> · <kbd>Ctrl</kbd> + <kbd>C</kbd> · :rocket: :bulb: :warning:

<span class="chip">tag</span> <span class="chip">another tag</span>

```md
**bold** *italic* ~~strike~~ `code` [link](url)
H<sub>2</sub>O x<sup>2</sup> <mark>highlight</mark> <kbd>Ctrl</kbd> :rocket:
```

---

<!-- _class: left -->

## Headings

# H1 heading
## H2 heading
### H3 heading
#### H4 heading

Built-in themes auto-shrink an H1 that would otherwise overflow.

---

<!-- _class: left -->

## Lists

- Unordered item
- Another item
  - Nested item
    - Deeper still

1. Ordered item
2. Second item
   1. Nested ordered

Checkbox task lists are *not* supported by Marp - `- [x]` renders literally.

---

<!-- _class: left -->

## Fragmented lists

Use `*` instead of `-` and items appear one at a time:

* First this appears
* then this
* then this

```md
* First this appears
* then this
```

For ordered fragments use `1)` instead of `1.`

---

<!-- _class: left -->

## Blockquote and rule

> Machines take me by surprise with great frequency.
>
> *Alan Turing*

<hr>

**Careful:** `---`, `***` and `___` all start a *new slide* in Marp.
For a rule inside a slide, write the HTML tag `<hr>`.

---

<!-- _class: left -->

## Table

| Model   | Year | Params | Open  |
| :------ | ---: | -----: | :---: |
| BERT    | 2018 |   340M |  yes  |
| GPT-3   | 2020 |   175B |  no   |
| Llama 3 | 2024 |   405B |  yes  |

`:---` left · `---:` right · `:---:` centre

---

<!-- _class: left -->

## Code block

```python
def attention(q, k, v):
    scores = q @ k.T / math.sqrt(q.shape[-1])
    return softmax(scores) @ v
```

Fence with a language name for syntax highlighting.
Built-in themes shrink long code to fit.

---

<!-- _class: left -->

## Math

Inline: the loss is $\mathcal{L} = -\sum_i y_i \log \hat{y}_i$

Block:

$$
\text{Attention}(Q,K,V) = \text{softmax}\!\left(\frac{QK^\top}{\sqrt{d_k}}\right)V
$$

Enable with `math: katex` in the frontmatter.

---

<!-- _paginate: false -->
<!-- _header: '' -->

# Layout templates

---

<!-- _class: lead -->
<!-- _paginate: false -->
<!-- _header: '' -->

# Section divider

A title, nothing else

---

<!-- _backgroundColor: #10233b -->
<!-- _color: #ffffff -->
<!-- _header: '' -->
<!-- _paginate: false -->

<div class="claim">

Attention is all you need.

</div>

<span class="caption">Claim slide - one idea, coloured background</span>

---

<!-- _class: left -->

## Two columns

<div class="cols">
<div>

**Left column**

- Works in any theme
- Plain CSS grid
- Put anything in it

</div>
<div>

**Right column**

- Text, lists, code
- Or an image
- Or both

</div>
</div>

---

<!-- _class: left -->

## Three columns

<div class="cols-3">
<div>

### Data
The internet made huge corpora available.

</div>
<div>

### Compute
GPUs and dedicated accelerators.

</div>
<div>

### Architecture
Transformers scale where older models stalled.

</div>
</div>

---

<!-- _class: left -->

## Stats row

<div class="cols-3">
<div>

<span class="stat">175B</span>
<span class="stat-label">GPT-3 parameters</span>

</div>
<div>

<span class="stat">2017</span>
<span class="stat-label">transformer paper</span>

</div>
<div>

<span class="stat">~4</span>
<span class="stat-label">chars per token</span>

</div>
</div>

---

<!-- _class: left -->

## Callout box

<div class="box">

A plain `box` is just a frame. Wrap anything in
`<div class="box">` with blank lines around the content, otherwise the
Markdown inside is not parsed.

</div>

---

<!-- _class: left -->

## Callout variants

<div class="box note">

`box note` for something worth pausing on.

</div>

<div class="box tip">

`box tip` for advice that makes the task easier.

</div>

<div class="box warn">

`box warn` for the trap people fall into.

</div>

---

<!-- _class: left -->

## Callout variants, continued

<div class="box key">

`box key` for the one thing to take away.

</div>

<div class="box task cs">

`box task` for an exercise. Adding `cs` switches the label to Czech.

</div>

To reword a label, set `--label` from your own frontmatter:
`style: |` then `.box.task { --label: 'Cvičení 3'; }`

---

<!-- _class: left -->

## Comparison

<div class="cols">
<div>

### Works well
- Summarising
- Rewriting
- Drafting code

</div>
<div>

### Needs care
- Hallucination
- No private data
- Non-deterministic

</div>
</div>

---

<!-- _paginate: false -->
<!-- _header: '' -->

# Images

---

<!-- _class: left -->

## Inline image, default size

![](assets/image.png)

<span class="caption">935 × 644 px at natural size - it overflows. Almost always size it.</span>

---

<!-- _class: left -->

## Inline image, sized

![w:420](assets/image.png)

```md
![w:420](assets/image.png)        # width in px
![h:300](assets/image.png)        # height in px
![w:420 h:200](assets/image.png)  # both (distorts)
```

---

<!-- _class: left -->

## Inline image with filters

![w:300 grayscale](assets/image.png) ![w:300 sepia blur:2px](assets/image.png)

```md
![w:300 grayscale](assets/image.png)
![w:300 sepia blur:2px](assets/image.png)
```

Available: `blur` `brightness` `contrast` `drop-shadow` `grayscale`
`hue-rotate` `invert` `opacity` `saturate` `sepia`

---

<!-- _class: left -->

## Image beside text

<div class="cols">
<div>

### Neon and rain

The image sits in one grid cell, the text in the other. Size it with
`w:` so it fits the column.

</div>
<div>

![w:420](assets/image.png)

</div>
</div>

---

![bg](assets/image.png)

<!-- _class: overlay -->
<!-- _header: '' -->
<!-- _footer: '' -->

## Full-bleed background

`![bg](assets/image.png)`

---

![bg brightness:0.35](assets/image.png)

<!-- _class: overlay left -->
<!-- _header: '' -->

## Darkened background

Text stays readable over a busy photo.

```md
![bg brightness:0.35](assets/image.png)
```

---

![bg blur:6px brightness:0.5](assets/image.png)

<!-- _class: overlay -->
<!-- _header: '' -->

## Blurred background

```md
![bg blur:6px brightness:0.5](assets/image.png)
```

---

![bg fit](assets/image.png)

<!-- _class: overlay -->
<!-- _header: '' -->
<!-- _footer: '' -->

## `bg fit`

Whole image visible, letterboxed

---

![bg 60%](assets/image.png)

<!-- _class: overlay -->
<!-- _header: '' -->
<!-- _footer: '' -->

## `bg 60%`

Scaled to a percentage of the slide

---

![bg left](assets/image.png)

<!-- _class: left -->

## Split: image left

```md
![bg left](assets/image.png)
```

Content keeps the other half. Default split is 50%.

---

![bg right](assets/image.png)

<!-- _class: left -->

## Split: image right

```md
![bg right](assets/image.png)
```

---

![bg left:33%](assets/image.png)

<!-- _class: left -->

## Split with a custom ratio

```md
![bg left:33%](assets/image.png)
![bg right:60%](assets/image.png)
```

Any percentage works. Useful when the text needs more room than the
picture.

---

![bg left:40% 80%](assets/image.png)

<!-- _class: left -->

## Split, image not full-bleed

```md
![bg left:40% 80%](assets/image.png)
```

The second value scales the image inside its half, leaving a margin.

---

![bg](assets/image.png)
![bg](assets/image.png)

<!-- _class: overlay -->
<!-- _header: '' -->
<!-- _footer: '' -->

## Two backgrounds

Side by side automatically

---

![bg vertical](assets/image.png)
![bg](assets/image.png)

<!-- _class: overlay -->
<!-- _header: '' -->
<!-- _footer: '' -->

## Stacked backgrounds

`![bg vertical]` on the first one

---

![bg left:45% blur:3px brightness:.6](assets/image.png)

<!-- _class: left -->

## Split + filters

Filters combine with any background keyword:

```md
![bg left:45% blur:3px brightness:.6](assets/image.png)
```

---

<!-- _backgroundColor: #10233b -->
<!-- _color: #ffffff -->
<!-- _class: left -->

## Background colour, no image

```md
<!-- _backgroundColor: #10233b -->
<!-- _color: #ffffff -->
```

Use for section dividers and claim slides when a photo would be noise.

---

<!-- _class: left -->

## Image with a credit line

![w:520](assets/image.png)

<span class="caption">Source: local file, `assets/image.png`</span>

---

<!-- _class: left -->

## Gotcha: local images on export

Local files are blocked by default when exporting to PDF, PNG or PPTX -
the slide renders with the image silently missing.

```sh
npx @marp-team/marp-cli@latest deck.md --pdf --allow-local-files
```

Not needed for HTML output or the VS Code preview.

---

<!-- _class: invert -->

## `invert` class

Every built-in theme ships an inverted colour scheme:

`<!-- _class: invert -->`

---

<!-- _class: left -->

## Quick reference

| Want               | Write                        |
| :----------------- | :--------------------------- |
| New slide          | `---` on its own line        |
| Full background    | `![bg](img)`                 |
| Half background    | `![bg left:40%](img)`        |
| Sized inline image | `![w:400](img)`              |
| Filtered image     | `![blur:4px grayscale](img)` |
| This slide only    | `<!-- _class: … -->`         |
| Speaker note       | plain HTML comment           |

---

<!-- _paginate: false -->
<!-- _header: '' -->

# End of workbench

Copy what you need
