---
title: Project
description: "A project is just a folder. The one you open the agent in: what it sees, what it changes, and where its instructions live."
aliases:
  - projects
  - project folder
  - working directory
tags:
  - concept
---

A desk. When you sit down to a task you put the papers you need on the desk and leave the rest of the office alone. The agent works the same way, and its desk is a [[Folder|folder]].

**Project = folder.** There is nothing else to it. You do not create a project, register one or fill anything in. You start [[Claude Code]] inside a folder, and that folder is the project. The same folder is a project in Claude Code, a row of icons in Explorer and a tree in VS Code, all at the same time, because there is only one folder.

What the boundary gives you:

- **It reads what is inside.** Files in the project are open to it without asking.
- **It writes inside.** Results land in the project folder, next to the files they came from.
- **It reads its instructions from inside.** An [[Instructions file|instructions file]] in the folder is loaded at the start of every session, so the rules for this work travel with the folder.

## The boundary is a boundary, not a wall

The agent can reach outside the folder. It is allowed to, and sometimes it should. But that is a separate, visible step, the way a colleague stands up from their desk and walks to another part of the office to check something. It asks first, you see it happen, and it goes back to the desk afterwards.

So the folder is not a cage that keeps the agent in. It is the answer to "where does this work live", and everything in this course follows from getting that answer right.

## Keep your folders tidy

This is the boring advice your filing habits already know, and it matters more now than it used to.

One task, one folder. A folder with this week's job in it gives you good answers. A folder with four years of unrelated documents gives you slow, worse answers, because the agent reads its way through the pile and fills the [[Context window|context window]] with things that have nothing to do with your question.

Do not point the agent at your whole home folder or your whole Documents folder. Make a folder for the job.

## Example

Make a folder called `ai-school-homework`. Put this week's spreadsheet and two PDFs in it. Open a [[Terminal|terminal]] there and run `claude`. Ask "what is in this folder?" and you get those three files. Not your Downloads, not your desktop. Ask for a summary, and the summary appears next to the originals, where you will still be able to find it in a month.

## Why it matters for you

Which folder you open is the most important choice you make before you type anything, and most people never think about it at all.

When the job is done, the folder is the result. It holds what you started with, what came out, and the instructions that produced it. You can hand the whole folder to a colleague and they have everything. That is the file-first way of working, and a project is where it starts.

## Related

- [[Folder]] - what a folder is, and why it belongs to no program
- [[Instructions file]] - the standing rules that live in the project
- [[Permission mode]] - how much the agent may do inside it
- [[Context window]] - why a messy folder gives worse answers
- [[Your first session]] - making your first project folder, step by step
