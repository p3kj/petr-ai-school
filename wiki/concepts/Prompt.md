---
title: Prompt
description: What you tell the AI, meaning your request plus any context you include. Clear prompts describe the outcome, the constraints and where to look.
aliases:
  - prompts
  - prompting
tags:
  - concept
---

A brief to a new colleague on their first day. Good briefs say what a finished result looks like, what to avoid, and where the relevant material is. Bad briefs say "sort out the thing".

A prompt is everything you type to the [[Model|model]] in one turn. With an [[Agent|agent]] it is also implicitly the [[Folder|folder]] you opened, because the agent can read it. There is no magic vocabulary. Plain sentences work best.

Three parts make a prompt land:

- **Outcome.** "A one-page summary for the board" beats "summarise this".
- **Constraints.** Length, tone, format, what not to touch.
- **Where to look.** Name the file or folder. Do not make the agent guess.

## Example

Weak: "Fix the report."
Better: "In `q3-report.md`, correct the totals in the table using the numbers from `q3-sales.xlsx`. Keep the wording; change only the numbers. Tell me which cells you changed."

## Why it matters for you

Most disappointing results come from thin prompts, not from a weak model. A minute spent writing the outcome and pointing at the right files saves ten minutes of back and forth. Later in the course you will save good prompts as reusable instructions so you write them once.

## Related

- [[Context window]] - the prompt is part of what the model sees
- [[Folder]] - the files your prompt can refer to
