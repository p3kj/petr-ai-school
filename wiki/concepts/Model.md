---
title: Model
description: "The part of an AI system that actually thinks: reads text in, writes text out, nothing else on its own. Who makes the frontier models, how they differ, which one to pick."
aliases:
  - models
  - AI model
  - language model
  - LLM
  - frontier models
tags:
  - concept
---

Think of a very well-read person locked in a room with a letterbox. You slide a note in, they slide an answer out. They cannot leave the room, open a drawer or make a phone call. That person is the model.

A model is a program trained on enormous amounts of text. Given some text (your [[Prompt|prompt]] and whatever else is in the [[Context window|context window]]), it predicts what text should come next, one [[Token|token]] at a time. That is the whole trick, and it is powerful enough to write, summarise, translate, reason and plan. Give the same model [[Tool|tools]] through a [[Harness|harness]] and it becomes an [[Agent|agent]] that can act.

## Who makes them

A handful of labs build the **frontier** models, the most capable ones at any moment. As of September 2026:

| Lab | Model family | Note |
| --- | --- | --- |
| Anthropic | Claude (Fable 5.1, Opus 5, Sonnet 5, Haiku 4.5) | What we use in this course |
| OpenAI | GPT (GPT-6 Astra, GPT-5.6) | Powers ChatGPT |
| Google | Gemini | Built into Google's products |
| Meta | Muse | |
| xAI | Grok | Built into X |
| Zhipu, Moonshot, Alibaba, DeepSeek | GLM, Kimi, Qwen, DeepSeek | Chinese labs, often released as open weights you can run yourself |

Names and rankings change every few months. The picture below is one independent snapshot, the Artificial Analysis Intelligence Index, which averages ten tests. Use it to see who is at the frontier, not to pick a model for a task.

![[artificial-analysis-intelligence-index-2026-09-15.png]]

*Source: [Artificial Analysis](https://artificialanalysis.ai/), 15 September 2026. The top four scores were within three points of each other.*

## How models differ

- **Tiers inside a family.** Every lab sells a big, a medium and a small model (for Claude: Opus, Sonnet, Haiku). Bigger is smarter and slower and costs more per [[Token|token]]; smaller is fast and cheap. Day to day, this choice matters more than which lab.
- **Thinking effort.** Many models can be told to think longer before answering. More thinking, better reasoning, higher cost.
- **Context size.** How much they can see at once. See [[Context window]].
- **Tool use.** How reliably they operate as an [[Agent|agent]]: reading files, running programs, checking their own work. This is where the frontier labs pull ahead.
- **What they can produce.** All frontier models read images. Only some products generate them, and that is a separate model wired in as a tool. See [[Image generation]].

## Which one to use

Start with the medium tier of whatever product you have; it handles most work. Move up to the big model for hard reasoning, long documents or when the medium one keeps getting it wrong. Move down to the small one for quick, repetitive tasks. Switch labs only for a reason: a capability you need, a price, a policy at work.

## Example

You paste a long email thread into a chat and ask "what did we agree on?". The model reads the thread and writes a summary. It did not open your mailbox; you brought the text to it.

## Why it matters for you

When a chat website "cannot access your files", that is not a limitation of intelligence. The model simply has no hands. Knowing this stops you from blaming the model for things it was never given the means to do, and knowing the tiers stops you from paying for a big model to do a small model's job.

## Related

- [[Harness]] and [[Tool]] - what turns a model into something useful
- [[Chat Work and Code|Chat, Work and Code]] - same models, three products
- [[Token]] - what a model reads and writes
- [[Context window]] - how much it can see at once
