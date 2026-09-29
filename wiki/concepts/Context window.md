---
title: Context window
description: "Everything the model can see at this moment: your messages, its answers, files it read. Fixed size; when it fills up, old details are cleared or summarised."
aliases:
  - context
  - context size
  - context length
tags:
  - concept
---

Picture a whiteboard in a meeting room. Everything written on it is visible to everyone. When it is full, someone wipes old notes to make room, and the details on them are gone. Nothing on the wall outside the room counts.

The context window is that whiteboard for a [[Model|model]]. It holds your [[Prompt|prompts]], the model's answers, every file the [[Agent|agent]] read and every result a [[Tool|tool]] returned in the current conversation. Its size is measured in [[Token|tokens]] and it is fixed for a given model. Today that is roughly the size of a thick book, which sounds like a lot until you paste in a few long documents.

What is **not** in the window does not exist for the model. Not yesterday's chat, not the file it did not open, not your company's internal wiki. It knows only what it was trained on plus what is on the whiteboard right now.

When the window gets close to full, [[Claude Code]] makes room: it clears old tool results first, then replaces the conversation with a summary. That is called [[Compaction|compaction]], and details from early in the conversation can get lost on the way. In normal work you should never get there; the note on compaction explains how.

## Example

You spend an hour with an agent on a report. Later you ask "what was the number from the spreadsheet we looked at earlier?" and it gets it wrong. The spreadsheet was cleared from the whiteboard to make room. Ask it to open the file again and it answers correctly.

## Why it matters for you

Four habits come from this:

- **Give it what it needs.** Point to the file. Do not assume it remembers.
- **Start fresh for a new task.** A clean window is faster, cheaper and less confused than a crowded one. `/clear` starts a new [[Session|session]]; the old one is kept.
- **Write things down in files.** Files persist; the window does not. Notes in a [[Folder|folder]] the agent can read are your real memory.
- **Send big data past it, not through it.** Everything a [[Connector|connector]] answers lands on the whiteboard. A [[Command-line program|command-line program]] or a [[Script|script]] can save all 4,812 contacts from your CRM straight into a file, and Claude sees one line: "saved 4,812 contacts".

## Related

- [[Token]] - how the window is measured
- [[Session]] - one window per conversation, and how to start a new one
- [[Compaction]] - what happens when the window is full, and how to avoid it
- [[Folder]] - where durable memory lives
- [[Script]] - how big data goes into a file without filling the window
- [[Mental models]] - the belief "it remembers everything" and why it is wrong
