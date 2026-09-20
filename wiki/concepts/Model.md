---
title: Model
description: The part of an AI system that actually thinks. It reads text in and writes text out, and on its own it can do nothing else.
aliases:
  - models
  - AI model
  - language model
  - LLM
tags:
  - concept
---

Think of a very well-read person locked in a room with a letterbox. You slide a note in, they slide an answer out. They cannot leave the room, open a drawer or make a phone call. That person is the model.

A model is a program trained on enormous amounts of text. Given some text (your [[Prompt|prompt]] and whatever else is in the [[Context window|context window]]), it predicts what text should come next, one [[Token|token]] at a time. That is the whole trick, and it is powerful enough to write, summarise, translate, reason and plan.

Models have names and versions, like Claude Opus 5 or Claude Sonnet 5. Bigger models are usually smarter and slower; smaller ones are faster and cheaper. The companies that make them (Anthropic, OpenAI, Google and others) release new ones every few months.

## Example

You paste a long email thread into a chat and ask "what did we agree on?". The model reads the thread and writes a summary. It did not open your mailbox; you brought the text to it.

## Why it matters for you

When a chat website "cannot access your files", that is not a limitation of intelligence. The model simply has no hands. Give the same model [[Tool|tools]] through a [[Harness|harness]] and it becomes an [[Agent|agent]] that can act. Knowing this stops you from blaming the model for things it was never given the means to do.

## Related

- [[Harness]] and [[Tool]] - what turns a model into something useful
- [[Token]] - what a model reads and writes
- [[Context window]] - how much it can see at once
