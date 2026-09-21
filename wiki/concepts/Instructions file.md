---
title: Instructions file
description: A file called CLAUDE.md that the agent reads at the start of every session. The standing rules you should never have to give twice.
aliases:
  - CLAUDE.md
  - instructions files
  - project instructions
  - AGENTS.md
tags:
  - concept
---

The page a new hire reads on their first morning: how we name things here, which template we use, who to ask, what we never do. You write it once and then stop repeating yourself at every desk.

An instructions file is a plain text file called `CLAUDE.md`. [[Claude Code]] reads it at the start of every session, before you type anything. Whatever is in it is simply true for the agent from then on.

## The three places rules can live

They are not alternatives. **All of them load, and they add up.**

| What | Where exactly | Applies to |
| --- | --- | --- |
| **Project rules** | `CLAUDE.md` in your [[Project\|project]] folder | That folder. Travels with it to colleagues |
| **Your own rules** | Windows: `%USERPROFILE%\.claude\CLAUDE.md`<br>Mac: `~/.claude/CLAUDE.md` | Every folder, on this computer |
| **Your profile** | Settings on claude.ai, in your browser | Your whole account, so every device and every session |

Those two forms are the same place written two ways. `%USERPROFILE%` is how Windows writes your own user folder, and `~` is how a Mac writes it. Both point at a folder called `.claude` inside it.

What goes where:

- **Project rules** are about the work: the house style, how files are named, what this client wants, the three things that always go wrong here. Because the file sits in the folder, a colleague who opens that folder gets the same rules without being told.
- **Your own rules** are about you: what language you want answers in, how much explanation you like, which tools you always use. They follow you into every project on that machine.
- **Your profile** is the same idea one level up, set in the browser instead of in a file. Useful for things that are true of you everywhere.

There is a fourth file worth knowing if you share a folder through Git: `CLAUDE.local.md`, next to `CLAUDE.md`, for your own notes on a shared project. Add it to `.gitignore` and your colleagues never see it.

## How to open and edit them

**The easy way, and the one to use: type `/memory` in a session.** It lists every one of these files, including the ones you have not created yet, and opens the one you pick in your editor. If the file does not exist, picking it creates it. You never have to go looking for the folder at all.

Even easier: just tell the agent. "Add that to CLAUDE.md" works, and it is how most rules actually get written.

To check which files loaded in the session you are in, type `/context` and look at the list of memory files.

> [!question]- I want to open the `.claude` folder myself. Where is it?
> **On Windows.** You will not find it by clicking through folders, so do not try. Open Explorer, press **Ctrl + L** to jump to the address bar, type this and press Enter:
>
> ```text
> %USERPROFILE%\.claude
> ```
>
> Explorer works out your username for you and opens the folder. The Windows key + **R** box takes the same text if you prefer. Once you are there, drag the folder onto **Quick access** in the sidebar, and next time it is one click.
>
> **On a Mac.** In Finder press **Cmd + Shift + G**, type `~/.claude` and press Enter. Folders starting with a dot are hidden in Finder, so this is the way in. **Cmd + Shift + .** toggles hidden files on and off if you want to see it in the normal list.

## Write it like a briefing, and keep it short

Be specific. "Dates as 2026-09-21" gets followed. "Be careful with formatting" does not, because it does not say what to do.

Keep it short. This file is read every single time, so a page of general advice takes up [[Context window|context window]] you wanted for the actual work. Ten sharp lines beat a page of good intentions.

The easiest way to start one is not to sit down and write it. Work for a week. Every time you correct the agent on something it should have known already, say "add that to CLAUDE.md". After a week the file writes itself, and it contains exactly the things that actually came up.

## Example

A `CLAUDE.md` in a reporting folder:

```
- Figures come from exports/latest.csv, never from an older export.
- Money in CZK, thousands separated by a space, no decimals.
- Client names as they appear in the contract, not the short versions.
- Drafts go in drafts/. Never overwrite a file in final/.
```

Four lines. Every summary from now on gets those right without you asking, and so does your colleague's.

## Why it matters for you

Files last; conversations do not. Everything you explain in a chat is gone next week, and explaining it again is the single biggest waste of time people hit in their first month with an agent.

Moving those explanations into a file in the folder is the fix. It is also the clearest example of the file-first idea this course keeps coming back to.

> [!note] AGENTS.md
> Some teams use a file called `AGENTS.md` instead. It is the same idea, agreed between several AI vendors so other tools read it too. Claude Code reads it as well. If a folder already has one, you do not need a second file.

## Related

- [[Skill]] - a longer set of steps, read only when that job comes up
- [[Project]] - the folder the project rules belong to
- [[Context window]] - why short instructions beat long ones
- [[Prompt]] - what you still have to say each time
