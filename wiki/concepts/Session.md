---
title: Session
description: "One conversation with Claude Code in one folder. Start a new one with /clear, come back to an old one with /resume, and undo file changes inside it with Esc Esc."
aliases:
  - sessions
  - conversation
  - checkpoint
  - checkpoints
  - rewind
tags:
  - concept
---

One whiteboard per meeting. When the meeting ends, the board is photographed and stored, and the next meeting starts with a clean one. You can always pull out yesterday's photo and carry on from it.

A session is one conversation with [[Claude Code]] in one [[Project|project]] folder. Everything in it, your [[Prompt|prompts]], the answers, every file it read and every [[Tool|tool]] result, sits in the [[Context window|context window]] for that session and nowhere else. The [[Harness|harness]] saves the whole conversation to your disk as you go, so nothing is lost when you close the window.

Three things you do with sessions:

- **Start a new one.** Type `/clear`. The whiteboard is wiped and the old session is saved. Do this every time you change to an unrelated task; see [[Attractor effect]] for why.
- **Come back to an old one.** Type `/resume` and pick from the list. From the [[Terminal|terminal]], `claude -c` continues the most recent session in this folder and `claude -r` shows the picker before Claude starts.
- **Undo file changes.** Before it edits a file, the harness takes a snapshot of it. Press Esc twice on an empty line and a rewind menu appears. Pick a point in the conversation and the files go back to how they were then. This works only for files it changed itself; it cannot undo an email it sent or a change in a system outside your folder.

## Example

Monday you start a session in `Documents\ai-school` and work on a summary. Tuesday you open the same folder, type `claude -c`, and the summary conversation is back, with everything it read still in the context. You decide the summary took a wrong turn after the second draft. Esc Esc, pick the point after the first draft, and the file is back to that version.

## Why it matters for you

Sessions take the fear out of trying things. A wrong turn costs a `/clear`. A file edit you regret costs an Esc Esc. Nothing you do in a session reaches outside the folder unless you asked for it and approved it.

One caution from [[Usage limits]]: coming back to a very long session is expensive, because the whole whiteboard is read again on every turn. For a new task, a new session is faster and cheaper than an old one.

## Related

- [[Context window]] - what a session holds
- [[Attractor effect]] - why a new task deserves a new session
- [[Slash command]] - `/clear`, `/resume` and the rest
- [[Usage limits]] - why long old sessions cost more
- [[Claude Code cheat sheet]] - the keys and starters in one place
