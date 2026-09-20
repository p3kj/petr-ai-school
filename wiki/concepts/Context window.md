---
title: Context window
description: "Everything the model can see at this moment: your messages, its answers, files it read. Fixed size; when full, older content drops out."
aliases:
  - context
  - context size
  - context length
tags:
  - concept
---

Picture a whiteboard in a meeting room. Everything written on it is visible to everyone. When it is full, someone wipes the oldest notes to make room. Nothing on the wall outside the room counts.

The context window is that whiteboard for a [[Model|model]]. It holds your [[Prompt|prompts]], the model's answers, every file the [[Agent|agent]] read and every result a [[Tool|tool]] returned in the current conversation. Its size is measured in [[Token|tokens]] and it is fixed for a given model. Today that is roughly the size of a thick book, which sounds like a lot until you paste in a few long documents.

What is **not** in the window does not exist for the model. Not yesterday's chat, not the file it did not open, not your company's internal wiki. It knows only what it was trained on plus what is on the whiteboard right now.

## Example

You spend an hour with an agent on a report. Later you ask "what was the number from the spreadsheet we looked at earlier?" and it gets it wrong. The spreadsheet scrolled off the whiteboard. Ask it to open the file again and it answers correctly.

## Why it matters for you

Three habits come from this:

- **Give it what it needs.** Point to the file. Do not assume it remembers.
- **Start fresh for a new task.** A clean window is faster, cheaper and less confused than a crowded one.
- **Write things down in files.** Files persist; the window does not. Notes in a [[Folder|folder]] the agent can read are your real memory.

## Related

- [[Token]] - how the window is measured
- [[Folder]] - where durable memory lives
- [[Mental models]] - the belief "it remembers everything" and why it is wrong
