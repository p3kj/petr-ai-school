---
title: Working safely
description: "The dos and don'ts of working with an agent on your own files: work on a copy, plan before it acts, talk before it touches anything, and know what Esc Esc can and cannot undo."
aliases:
  - safety
  - dos and don'ts
  - work on a copy
  - backup
tags:
  - guide
---

A new assistant starts on Monday and gets the keys to the office. You trust them. You still do not hand them the only signed copy of a contract on the first day, and you still ask "what are you going to do?" before they reorganise the archive.

Working with an [[Agent|agent]] is the same. Nothing here is about fear. [[Claude Code]] works only in the folder you open, asks before risky steps, and stops when you press Esc. These habits make sure that when it does get something wrong, fixing it costs you a minute.

## Do

1. **Work on a copy.** Before a task that changes files, copy the folder in Explorer or Finder and open Claude Code in the copy. The original stays where it is. This is what Petr does himself, every time it matters.
2. **Plan first, then let it act.** Switch to [[Permission mode|Plan mode]] with Shift + Tab, describe the task, and read the plan before anything happens. When you agree, choose "Yes, and use auto mode". You know what is coming, so nothing surprises you.
3. **Or just talk first.** For a quick idea you do not need a full plan. Start with: `Do not change anything yet, just talk about it.` Then discuss the task like you would with a colleague, and say "go ahead" when you agree. See the note below.
4. **Open the smallest folder that holds the task.** A [[Project|project]] folder with the files for this job, not your whole Documents folder.
5. **Say the limits in the prompt, in positive words.** "Work only inside this folder." "Put anything you are not sure about into `_review`." See [[Prompt]].
6. **Watch the first steps.** Read the plain sentences on the screen, and press Esc as soon as they go the wrong way. See [[Reading the Claude Code screen]].
7. **Check the result where you normally would.** Open the folder in Explorer or Finder and look. See [[Verification]].

## Don't

1. **Don't work on the only copy of something precious.** Signed contracts, the final version of a report, photos you cannot get back.
2. **Don't say yes to a question you did not understand.** Say no and ask: `Explain in plain words what this would do.`
3. **Don't mix tasks in one session.** One task, then `/clear`. See [[Session]] and [[Attractor effect]].
4. **Don't count on Esc Esc for everything.** It undoes some changes, not all. The table below shows which.
5. **Don't paste passwords or secrets into the prompt.** They land in the conversation and in the files Claude Code saves on your disk.
6. **Don't switch off the safety checks.** Claude Code has modes that skip every question, meant for servers and scripts. You do not need them in this course.

## "Just talk about it" versus Plan mode

Both keep the agent from acting before you are ready. They are not the same thing.

| | Plan mode | "Do not change anything yet, just talk about it" |
| --- | --- | --- |
| What stops it | The [[Harness\|harness]]. It cannot edit files until you approve. | Your sentence. The model follows it, but it is a request, not a lock. |
| What you get | A written plan, step by step | A conversation. Good when you are not sure yet what you want. |
| Use it for | A task that changes many files | Thinking out loud, trying an idea, asking "how would you do this?" |

Claude follows the sentence well in practice. For anything that would be hard to undo, use Plan mode: then it is the program that holds back, not just the model.

## What Esc Esc can and cannot undo

Esc twice on an empty line opens the rewind menu (see [[Session]]). Before Claude edits a file with its editing tools, the harness keeps a copy of it. That is what rewind brings back.

| Rewind brings back | Rewind does **not** bring back |
| --- | --- |
| Files Claude wrote or edited itself, shown on screen as `Write(...)` or `Update(...)` | Files moved, renamed or deleted by a command, shown as `Bash(...)`: for example sorting files into folders |
| | Changes you made yourself, or made in another session |
| | Anything outside your computer: an email it sent, a calendar entry, a change on a website through a [[Connector\|connector]] |

This matters for the homework from [[02-meet-claude-code|lecture 02]]. Sorting a folder into subfolders is done with move commands, so rewind cannot undo it. The copy is your undo.

> [!note] Coming soon: Git
> Copying folders works, and it is the right habit for now. Later in the course we cover Git: save points for a whole folder, so you can go back to any earlier version of any file, see exactly what changed, and share the work with colleagues without emailing zip files. It is the real answer to "how do I back up my work", and it is how Petr works. See [[Roadmap|week 09]].

## Why this is enough

Most mistakes with an agent are small and caught early: a wrong folder, a misunderstood task, one file too many. Plan first, work on a copy, watch the first steps, and those mistakes cost you nothing. What remains is rare, and a copy covers it.

## Official documentation

- [Checkpointing: what rewind tracks](https://code.claude.com/docs/en/checkpointing)
- [Permission modes](https://code.claude.com/docs/en/permission-modes)
- [Best practices: explore, then plan, then act](https://code.claude.com/docs/en/best-practices)

## Related

- [[Permission mode]] - Plan, then Auto, and why Manual is not the safe choice it looks like
- [[Session]] - rewind, `/clear` and `/resume`
- [[Reading the Claude Code screen]] - which lines to watch, and when to press Esc
- [[Project]] - choosing the folder
- [[Verification]] - checking the result
