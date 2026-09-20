---
title: Claude Code
description: The AI agent used in this course. Anthropic's Claude models inside a harness with many tools, available in a terminal, a desktop app, VS Code and JetBrains.
aliases:
  - Code
tags:
  - concept
---

Claude Code is the [[Agent|agent]] we use in this course. Despite the name, it is not only for programmers. It is a general-purpose agent that happens to be very good with files, and your work is made of files.

Take it apart with the [[Mental models|four-part picture]]:

- **Model:** one of Anthropic's Claude [[Model|models]]. You can switch between them.
- **Harness:** the Claude Code program itself. It runs the loop, shows you what the model wants to do and asks before it changes anything.
- **Tools:** reading and writing files, running programs, searching the web, and connectors to other systems you add later.

You can use it from several windows, all onto the same agent: a terminal, the Claude desktop app, an extension in VS Code, a plugin in JetBrains, or the web. Pick the one you find comfortable. The course shows the terminal and VS Code side by side.

## Example

Open a [[Folder|folder]] with last month's meeting notes, start Claude Code there and type: "Read all the notes and list every decision that still has no owner." It reads the files, thinks, and answers with a list, citing which note each item came from.

## Why it matters for you

Anthropic sells the same model in three products, see [[Chat Work and Code|Chat, Work and Code]]. Chat is an advisor on the phone. Work is a contractor you hand a folder and a task. Code is a colleague at the next desk with access to what you have. Once you are comfortable at the Code level, every other AI product is a simpler version of the same thing.

## Related

- [[Agent]], [[Harness]], [[Tool]] - the parts it is made of
- [[Roadmap]] - when we install it and what we do first
