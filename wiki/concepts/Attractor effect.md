---
title: Attractor effect
description: "Everything in the context pulls the answer toward it for the rest of the conversation: earlier messages, files, examples, even the things you tell the AI not to do."
aliases:
  - attractor
  - context steering
  - priming
tags:
  - concept
---

Try this: do not think about a pink elephant. Too late. Naming a thing puts it in your head, and a [[Model|model]] works the same way.

Everything inside the [[Context window|context window]] steers what comes next. Your earlier messages, the files the [[Agent|agent]] read, an example you pasted, the tone of your last sentence, and yes, the thing you asked it to avoid. The model does not have an "ignore this" switch. Whatever is on the whiteboard shapes the answer, and it keeps shaping every answer for the rest of that conversation. It stops only when the material leaves the context: you start a fresh session, or it scrolls out of the window.

Two consequences:

- **Forbidding is weak, redirecting is strong.** "Don't use corporate jargon" still puts jargon on the whiteboard. "Write the way you would explain it to a friend over coffee" gives the model something to move toward. Modern models do follow a "don't" reasonably well, but you get more reliable results by saying what to do instead.
- **Bad examples are contagious.** Paste a clumsy draft and ask for "something like this but better" and you will get something clumsy. Paste the best example you have.

## Example

You spend twenty minutes arguing with the agent about a wrong approach, then finally say "forget all that, do it the simple way". The wrong approach is still in the context and keeps leaking into the result. Start a new conversation, state the simple way in one clear [[Prompt|prompt]], and it works first time.

## Why it matters for you

Treat the context like a whiteboard in a meeting: put on it what you want the model to copy, keep off it what you do not, and wipe it (new session) when the conversation has gone sideways. This single habit fixes a large share of "the AI is being stubborn" moments.

## Related

- [[Context window]] - where the pull comes from
- [[Prompt]] - how to phrase what you want
