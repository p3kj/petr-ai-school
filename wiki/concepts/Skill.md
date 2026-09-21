---
title: Skill
description: A recipe you save for later. Nothing more than a detailed prompt kept in a file, so the agent follows the same steps every time.
aliases:
  - skills
  - SKILL.md
  - custom command
tags:
  - concept
---

A skill is just a recipe you save for later. It is nothing more than a prepared, detailed prompt.

That is worth saying plainly, because the word sounds bigger than it is. A skill is a rulebook. You write down how a job is done, and the agent follows it, the same way any new colleague could follow it if you handed them the sheet.

## What is actually in one

A skill is a folder with a file called `SKILL.md` inside. That file has a line saying when to use it, then the steps in plain English: what to do, in what order, what the result should look like, and the things people always forget.

It does not have to be only that one file. The folder can hold whatever the job needs:

- **Examples.** Two good past reports teach the format better than a paragraph describing it.
- **A template** to fill in.
- **Longer instructions** split into their own file, so `SKILL.md` stays readable.
- **A small program** to run, if part of the job is always the same mechanical step.

The agent reads `SKILL.md` first and opens the other files when it needs them.

## Two ways it starts

- **You call it**, by typing `/` and its name. Like saying "do the month-end thing".
- **It calls itself**, when what you asked matches the description at the top. Ask "what changed today?" and a skill described as "summarises what changed" will load on its own.

## How it differs from an instructions file

Both are text files you write once. The difference is *when* they are read.

An [[Instructions file|instructions file]] is read at the start of every session, so it has to stay short and always relevant. A skill is read only when that job comes up, so it can be as long and detailed as the work deserves and costs you no [[Context window|context]] the rest of the time.

Skills live in one of two places:

| Where | The folder | Applies to |
| --- | --- | --- |
| **Yours** | Windows: `%USERPROFILE%\.claude\skills\`<br>Mac: `~/.claude/skills/` | Every project, on this computer |
| **The project's** | `.claude\skills\` inside the [[Project\|project]] folder | That folder, and anyone you share it with |

You do not have to go there by hand to make one. Ask the agent to write the skill and it puts the folder in the right place. If you do want to look, see the same question on the [[Instructions file|instructions file]] page: the trick for finding `.claude` on Windows is the same one.

> [!warning] Nobody's downloaded skill will fix your work
> There are collections of skills online, and some of them promise a lot. Be careful with them. A skill is only as good as the knowledge written in it, and the knowledge you need is about *your* job: your clients, your format, your rules. A stranger cannot write that down for you.
>
> Read a downloaded skill before you use it, the same way you would read any file before running it. Treat it as a starting point to edit, never as a thing that works because someone published it.

## Example

Your team writes client updates the same way every two weeks: take the hours from the spreadsheet, list what was finished, mark anything at risk, keep it under one page, never promise a date.

That is a skill. Write it down once, with last month's update in the folder as an example. From then on, "do the Acme update" gives you the house format instead of a generic summary you have to rewrite.

## Why it matters for you

In your first week with an agent you will type the same context again and again: who the client is, what the format is, what to leave out. A skill is where that stops.

It is also how knowledge leaves one person's head. The colleague who knows how the month-end report really works writes it down once, and then everyone's agent knows it too.

Do not start writing skills on day one. Work normally for two weeks. Notice which instructions you have now typed three times. Those are your first skills, and the easiest way to write one is to ask the agent to do it, from the conversation where you explained the job properly.

## Related

- [[Instructions file]] - standing rules, read at the start of every session
- [[Prompt]] - what a skill is made of
- [[Connector]] - new tools, the other way to extend an agent
- [[Project]] - where a shared skill lives
