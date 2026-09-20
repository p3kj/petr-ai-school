---
title: Token
description: The small chunk of text a model reads and writes in, roughly three quarters of a word. Tokens are also what you pay for.
aliases:
  - tokens
tags:
  - concept
---

A [[Model|model]] does not read letters or words. It reads tokens: pieces of text about three quarters of a word long on average. "Hello" is one token. "Unbelievable" might be three. A page of text is roughly 500 tokens.

Two things follow from this:

1. **Size limits are measured in tokens.** The [[Context window|context window]] holds a fixed number of them.
2. **Cost is measured in tokens.** Every token the model reads and every token it writes is counted. Reading is cheap, writing costs more, and bigger models cost more per token.

Analogy: a translator paid by the word. Long documents cost more to translate, long answers cost more to write, and a top translator charges more per word than a junior one.

## Example

You ask an [[Agent|agent]] to summarise a 40-page PDF. It reads about 20,000 tokens and writes 300. Most of the cost is the reading. Ask it to summarise only chapter 3, and it reads a tenth of that.

## Why it matters for you

You do not need to count tokens. You need the instinct that **more text in equals more cost and less room**. Point the agent at the file it needs, not the whole folder. Ask for the answer you want, not a novel. Watch the usage numbers occasionally, the way you glance at a taxi meter.

## Related

- [[Context window]] - the token budget for one conversation
- [[Model]] - what reads and writes tokens
