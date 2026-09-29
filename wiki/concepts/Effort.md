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

- **The default** is right for normal work. It is **medium** on Opus 5.5, the model Claude Code starts with, and **high** on the other models.
- **Low** for chores: reformat this, rename that, quick lookups. Faster and cheaper.
- **xhigh** and **max** when the task is genuinely hard and you can wait. `max` lasts for the current [[Session|session]] only.

Thinking costs [[Token|tokens]], so higher effort uses more of your [[Usage limits|allowance]] and takes longer. The model tier is the bigger dial. Effort is the smaller one, and Anthropic's own advice is to try turning it before switching models.

## What each step costs and buys

An independent [[Benchmark|benchmark]] shows it well. Each line is one model, each point one effort level, from low on the left to max on the right:

![[effort-score-cost-claude-2026-09.png]]
*Score against cost per task for each Claude model and effort level. Chart: petr-ai-school, from Artificial Analysis data, 29 September 2026.*

- **Each step up costs more, often about twice as much as the step before.** On Opus 5.5, one task at max costs more than four times what it costs at medium.
- **The score rises less and less.** On Opus 5.5, from low to medium is a big jump and from xhigh to max a small one. Fable 5.1 hardly gains anything from xhigh to max, and on some tests max is even a little worse than xhigh.
- **A stronger model at lower effort often matches a lighter model at max, for less.** Opus 5.5 at xhigh scores the same as Sonnet 5.5 at max (56), for less than half the cost per task.

So: stay at the default, go one or two steps up when a task is hard, and use max only when being right matters more than time and allowance.

## Example

You ask for a table of every deadline in a folder of contracts. At high effort it finds them and gets one date wrong, because two contracts refer to the same clause. You type `/effort xhigh` and ask again, and it notices the overlap and flags it. Same model, one more minute.

## Why it matters for you

Two dials give you more room than one. When a result disappoints, the order to try is: a clearer [[Prompt|prompt]], then more effort, then a stronger model from the [[Claude model family]]. Most of the time you never reach the third step.

## Related

- [[Claude model family]] - the bigger dial, and what each tier is for
- [[Benchmark]] - where the chart comes from, and how to read one
- [[Model]] - what is doing the thinking
- [[Token]] - what thinking costs
- [[Slash command]] - `/effort` and its neighbours
