---
title: Effort
description: "How long the model thinks before it answers. A dial from low to max, set with /effort. Smaller than the model dial, but often the one to try first."
aliases:
  - effort level
  - thinking
  - reasoning effort
  - "/effort"
tags:
  - concept
---

Asking a colleague for a quick answer versus a considered one. "Off the top of your head, roughly how many?" gets an answer in a second. "Take the afternoon and check it properly" gets a better answer, later. Same person, different effort.

Effort is that dial for a [[Model|model]]. The bigger Claude models think before they write, and effort sets how long they may think. In [[Claude Code]] you set it with the [[Slash command|slash command]] `/effort`, which opens a slider, or directly: `/effort low`, `/effort medium`, `/effort high`, `/effort xhigh`, `/effort max`.

- **High** is the default and right for normal work.
- **Low** for chores: reformat this, rename that, quick lookups. Faster and cheaper.
- **xhigh** and **max** when the task is genuinely hard and you can wait. `max` lasts for the current [[Session|session]] only.

Thinking costs [[Token|tokens]], so higher effort uses more of your [[Usage limits|allowance]] and takes longer. The model tier is the bigger dial. Effort is the smaller one, and Anthropic's own advice is to try turning it before switching models.

## Example

You ask for a table of every deadline in a folder of contracts. At high effort it finds them and gets one date wrong, because two contracts refer to the same clause. You type `/effort xhigh` and ask again, and it notices the overlap and flags it. Same model, one more minute.

## Why it matters for you

Two dials give you more room than one. When a result disappoints, the order to try is: a clearer [[Prompt|prompt]], then more effort, then a stronger model from the [[Claude model family]]. Most of the time you never reach the third step.

## Related

- [[Claude model family]] - the bigger dial, and what each tier is for
- [[Model]] - what is doing the thinking
- [[Token]] - what thinking costs
- [[Slash command]] - `/effort` and its neighbours
