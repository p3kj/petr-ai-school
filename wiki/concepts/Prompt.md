---
title: Prompt
description: "What you tell the AI. A good prompt has four parts: Role, Context, Command, Format. Add a fifth, Check, when an agent should verify its own work."
aliases:
  - prompts
  - prompting
  - how to prompt
tags:
  - concept
---

A brief to a new colleague on their first day. Good briefs say who they are acting as, what they need to know, what to do, and what the result should look like. Bad briefs say "sort out the thing".

A prompt is everything you type to the [[Model|model]] in one turn. With an [[Agent|agent]] it also includes, implicitly, the [[Folder|folder]] you opened, because the agent can read it. There is no magic vocabulary. Plain sentences work best.

## The four parts

| Part | Question it answers | Example |
| --- | --- | --- |
| **Role** | Who should the AI be while doing this? | "You are an experienced HR manager reviewing a job ad." |
| **Context** | What does it need to know, and where is it? | "The draft is in `job-ad.md`. Our tone guide is in `tone.md`. It is for a junior role." |
| **Command** | What exactly should it do? | "Rewrite the ad so it is clearer and shorter, keep every requirement." |
| **Format** | What should the result look like? | "Return the new ad as Markdown, under 250 words, then a bullet list of what you changed." |

An optional fifth part, **Check**, tells an agent how to know it is done: "Read the result once more and confirm every requirement from the original is still there." Agents use it to verify their own work before reporting back.

You do not need all parts every time. A quick question needs only a Command. A task you will hand off needs all of them.

## Example

Weak: "Fix the report."

Better: "Role: you are a careful finance analyst. Context: `q3-report.md` has wrong totals; the correct numbers are in `q3-sales.xlsx`. Command: correct the totals, change nothing else. Format: keep the file as is and give me a list of the cells you changed. Check: recompute each total from the spreadsheet before you finish."

## Why it matters for you

Most disappointing results come from thin prompts, not from a weak model. A minute spent on Context and Format saves ten minutes of back and forth. Two things to know about agents: **Role** matters less than in a chat window, because the [[Harness|harness]] already gives the agent one, and **Context** mostly means pointing at the right files. Later in the course you will save good prompts as reusable instructions so you write them once.

## Related

- [[Attractor effect]] - why every word in the prompt steers the answer, including the things you forbid
- [[Context window]] - the prompt is part of what the model sees
- [[Folder]] - the files your prompt can refer to
