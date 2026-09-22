---
title: File mention
description: "Pointing Claude Code at a specific file or folder by typing @ and its name, dragging it in, or pasting a screenshot. The file goes straight into the context."
aliases:
  - "@ mention"
  - mention
  - mentions
  - at-mention
  - "@"
tags:
  - concept
---

Pointing at a document on the desk instead of describing it. "Look at this one" beats "the blue folder from last week's meeting, the one with the coffee stain".

A file mention puts a file in front of the [[Model|model]]. Type `@` followed by the first letters of the name and a list of matching files in your [[Project|project]] appears. Pick one with the arrow keys and Tab. The file is read into the [[Context window|context window]] as part of your [[Prompt|prompt]], so the model does not have to guess which file you mean or search for it.

Four ways to do it:

- **Type `@`** and part of the name: `summarise @notes.md in three bullets`. Fuzzy matching helps; `@bud` finds `budget-2026.xlsx`.
- **Mention a folder**: `@invoices/` gives it the list of files in that folder.
- **Drag a file** from Explorer or Finder into the window. The path is typed for you.
- **Paste a screenshot** with Ctrl + V (Windows and WSL: Alt + V, iTerm2 on Mac: Cmd + V). The image goes into the context and the model can read it.

Without a mention the model still finds files. It lists the folder, guesses, and reads the likely one. A mention saves that round trip and removes the guess.

## Example

A folder holds twelve meeting notes. "Summarise the last meeting" makes the model list the folder and pick the newest by date, which is wrong when someone saved an old file yesterday. `summarise @2026-09-18-planning.md` gets exactly the file you meant, first time.

## Why it matters for you

Most disappointing answers come from the model looking at the wrong thing. A mention is the cheapest fix there is: one character and a few letters, and the right file is on the whiteboard. It also keeps the whiteboard tidy, because the model reads one file instead of five to find it.

## Related

- [[Project]] - the folder the mention searches in
- [[Context window]] - where the file lands
- [[Prompt]] - the Context part of Role, Context, Command, Format
- [[Claude Code cheat sheet]] - the paste shortcut per system
