---
title: Compaction
description: "When the context window is almost full, Claude Code replaces the conversation with a short summary. It keeps the work going, but details get lost. In this course, treat it as a warning light."
aliases:
  - compact
  - compacting
  - auto-compact
  - "/compact"
tags:
  - concept
---

The whiteboard in the meeting room is full. Instead of starting a new meeting, someone wipes everything and writes a short summary of the last two hours in one corner. The meeting goes on. But the exact numbers, the side comments and the rule someone said at the start are gone. Only what made it into the summary is left.

That is compaction. When the [[Context window|context window]] of a [[Session|session]] gets close to full, [[Claude Code]] makes room in two steps:

1. It clears old [[Tool|tool]] results first, for example the full text of a file it read an hour ago.
2. If that is not enough, it summarises the whole conversation so far and continues from the summary.

Your requests and the main results are kept. Details are not, and **instructions you gave early in the conversation may be lost**. It happens on its own (auto-compact), and you can also start it yourself with the [[Slash command|slash command]] `/compact`, with an optional focus: `/compact keep the list of deadlines`.

## You should never need it

Many people see compaction as a normal part of a long day with the agent. In this course we see it differently: **if your session reaches compaction, something went wrong earlier.** Opus, Sonnet and Fable hold about a million [[Token|tokens]], a shelf of books. Filling that with normal office work takes a lot of mixing.

The usual causes:

- **Many tasks in one session.** The budget, then an email, then the budget again. Each task leaves its notes on the whiteboard, and they pull the next answer toward them (see [[Attractor effect]]). One task, one session. `/clear` costs nothing; the old session is saved.
- **Pasting instead of pointing.** A long document pasted into the prompt sits on the whiteboard for good. Point at the file with `@` instead (see [[File mention]]).
- **No notes in files.** If the only record of a long job is the conversation, the conversation has to stay huge. Ask the agent to keep its progress in a file, and a new session can pick up from there.

The exception: a very long job that the agent runs on its own for hours, for example with [[Claude model family|Fable]], can reach compaction honestly. That is not normal office work, and you will know when you are doing it.

## What to do instead

Keep an eye on the number. `/context` shows how full the whiteboard is, and a [[Set up a status line|status line]] shows the % all the time. When it gets past about half and the task is not done:

```text
Write a short handoff note to handoff.md: what the task is, what is done,
what is left, and any rules I gave you. Then stop.
```

Then `/clear`, and start the new session with `read handoff.md and continue`. This is better than `/compact` for two reasons. You can read the note and fix it before the agent continues. And the note is a file, so it is still there tomorrow.

## Example

You spend the morning in one session: a budget table, then three emails, then back to the budget. Around noon Claude Code shows that it compacted the conversation. After that, the budget suddenly uses the old exchange rate again. The rule "use the rate from 1 September" was said at 9:00 and did not make it into the summary. If a rule must last, put it in the [[Instructions file|instructions file]] or in the handoff note. Both are read again after a new start.

## Why it matters for you

Compaction explains why a long session "forgets" something it knew an hour ago. It is not getting tired. The details were summarised away. Short sessions, one task each, with the important facts written in files, never reach this point. That is also cheaper: every turn sends the whole whiteboard to the model again (see [[Usage limits]]).

## Related

- [[Context window]] - the whiteboard that fills up
- [[Session]] - `/clear` and `/resume`, the better way to make room
- [[Attractor effect]] - why mixing tasks in one session hurts
- [[Instructions file]] - where rules that must last belong
- [[Set up a status line]] - see the % without asking
