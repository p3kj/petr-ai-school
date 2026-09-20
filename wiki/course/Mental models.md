---
title: Mental models
description: The four ideas the whole course builds on, and the common beliefs about AI they replace.
tags:
  - course
---

Most confusion about AI comes from a few wrong pictures in our heads, usually picked up from chat websites. This page replaces them with four simple ones. Everything else in the course refers back here.

## 1. Files first

Your work lives in files, and files live in [[Folder|folders]]. A contract, a spreadsheet, a presentation, a photo: each is a file somewhere on a disk.

Here is the part that matters: **a folder is the same folder no matter which program opens it.** Windows Explorer shows it as icons. VS Code shows it as a tree on the left. Claude Code reads it and writes into it. Three windows, one folder. Create a file in one and it appears in the others instantly, because there is only one.

Analogy: a filing cabinet in the office. You can look at it, a colleague can look at it, the office assistant can pull documents from it. The cabinet does not change depending on who opens the drawer.

## 2. Tools change, fundamentals stay

Today we use Claude. Next year it may be something else. That is fine. Everything you learn here about [[Folder|folders]], [[Context window|context]], [[Tool|tools]] and [[Prompt|prompts]] works the same with any capable AI. Being able to switch is the skill, not loyalty to one product.

Agnostic does not mean shallow, though. **Pick one and master it before you switch.** Go deep with one tool until it feels natural; every other tool will then come far easier, because you will recognise the same parts under a different coat of paint.

## 3. Same agent, different windows

You can talk to [[Claude Code]] in a terminal, in a desktop app, inside VS Code, or inside JetBrains. These are different windows onto the **same** [[Agent|agent]]. Pick whatever feels comfortable. Nothing you learn is wasted if you switch later.

## 4. AI = model + harness + tools

This is the big one. What people call "the AI" is really three parts:

- The [[Model|model]] thinks. It reads text and writes text. That is all it can do on its own.
- The [[Harness|harness]] runs the loop: it gives the model your request, watches what the model wants to do next, asks you for permission, and keeps going until the job is done.
- The [[Tool|tools]] do the actual work: read a file, write a file, run a program, search the web, open your calendar.

A chat website is a model with almost no tools. It can only talk. Claude Code is the same kind of model with a harness and many tools, so it can act. **More tools, more it can do for you.** That is the real difference between "chatting with AI" and "working with AI". See [[Chat Work and Code|Chat, Work and Code]] for the three products side by side.

Analogy: a brilliant advisor on the phone versus the same person sitting at your desk with access to your computer. Same brain. Very different usefulness.

## Common beliefs, corrected

> [!question] "The AI on the website can do everything."
> It can only produce text. It cannot see your files, send an email or fill in a spreadsheet unless a tool for that is connected. When it seems to do more, a tool is doing it. Even [[Image generation|generating a picture]] is a separate model wired in as a tool.

> [!question] "AI on my computer is a different, riskier kind of AI."
> Same model. The difference is the tools it is allowed to use, and you approve each of them. The [[Harness|harness]] asks before it acts.

> [!question] "It remembers everything I ever told it."
> It sees only what is in the [[Context window|context window]] right now. Memory features exist, but they are a tool built on top, not the default.

> [!question] "If I tell it not to do something, it will drop the idea."
> Whatever you mention stays in the context and keeps pulling the answer toward it, forbidden or not. Say what to do instead. See [[Attractor effect]].

> [!question] "This is for programmers."
> Claude Code is good at code because code is text in files. Your documents, notes and spreadsheets are also text in files. It works the same way for them.

## Related

- [[Roadmap]] - how these ideas map to the weekly sessions
- [[Chat Work and Code|Chat, Work and Code]] - the three products compared
- [[concepts/index|Glossary]]
