---
title: Tool
description: An action an agent can take in the real world, such as reading a file, running a program, searching the web or opening your calendar. Tools are the most important part.
aliases:
  - tools
tags:
  - concept
---

Hands. A [[Model|model]] is a mind with no hands. Tools are the hands.

A tool is one specific action the [[Harness|harness]] can perform on the model's behalf: read this file, write that file, list a [[Folder|folder]], run a command, search the web, fetch a web page, look at the calendar, send a message. Each tool is described to the model so it knows when to ask for it. The model asks; the harness (often after checking with you) does it and reports back.

**More tools, more the agent can do.** An AI with only a "talk" tool is a chat. Add "read file" and it can answer questions about your documents. Add "write file" and it can produce them. Add "run program" and it can automate. Add connectors to your company systems and it can work inside them. Same model throughout; the tools make the difference.

## Example

"What is on my calendar tomorrow and which of those meetings has no agenda in the shared folder?" needs two tools: one that reads the calendar, one that reads files. A chat website with neither can only guess.

## Why it matters for you

When something "does not work", the first question is no longer "is the AI smart enough?" but "**does it have a tool for that?**". Often the fix is to connect one. Later in the course you will add tools yourself through connectors (MCP). Until then, notice which tool the agent asks to use each time it asks for permission.

## Related

- [[Harness]] - what runs the tools
- [[Agent]] - what you get when tools are in a loop
- [[Mental models]] - the belief "web AI can do everything" and why tools are the answer
