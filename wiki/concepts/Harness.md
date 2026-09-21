---
title: Harness
description: The program wrapped around a model that runs the work loop, asks you for permission and calls tools. It is what turns a chat into an agent.
aliases:
  - harnesses
  - agent loop
tags:
  - concept
---

A [[Model|model]] on its own is a brilliant advisor locked in a room. The harness is the assistant standing outside the door: it carries your request in, reads what the advisor wants done next, does it (or asks you first), carries the result back in, and repeats until the job is finished.

Concretely, the harness:

- sends your [[Prompt|prompt]] and the current [[Context window|context]] to the model,
- notices when the model says "I need to read this file" or "run this command",
- **asks you for permission** when the action could change something, as far as the [[Permission mode|permission mode]] requires,
- performs the action using a [[Tool|tool]] and gives the result back to the model,
- loops until the model says it is done, then shows you the outcome.

This loop, gather context then act then check, is what the word [[Agent|agentic]] means. [[Claude Code]] is a harness. The desktop and web chat apps are much thinner harnesses with very few tools.

## Example

You ask for "a summary of every invoice in this folder as a table". The harness lets the model list the [[Folder|folder]], read each file, and write a new file with the table. You approve the first write. The model never touched your disk; the harness did, on its instructions and with your consent.

## Why it matters for you

The harness is where safety and control live. It decides which tools exist, what needs your approval and what runs automatically. When you understand that, "AI on my computer" stops sounding like magic or a threat: it is a program that does exactly the actions you allow.

## Related

- [[Tool]] - the actions a harness can perform
- [[Permission mode]] - the dial that decides when it stops to ask
- [[Agent]] - model plus harness plus tools, working in a loop
- [[Mental models]] - AI = model + harness + tools
