---
title: Sandbox
description: A closed box where Chat and Work run programs. Your own programs and logins stay out of reach, but a folder you connect is real, and so are the changes made in it.
aliases:
  - sandboxes
  - sandboxed
tags:
  - concept
---

The contractor from [[Chat Work and Code|Work]] has his own closed workshop with his own tools, and what happens in there does not touch your office. He gets into your office only through the doors you open for him, and what he does there is real.

A sandbox is that workshop: a closed space where programs can run without touching anything outside it. Claude uses one when it should be able to run programs, but not on your own computer. It can install things, make files and try things inside. Your programs and logins stay outside, out of reach. Your files come in only when you upload them or connect a [[Folder|folder]], and changes in a connected folder are real changes to your files.

## Where you meet one

| Product | Its sandbox | What it cannot reach |
| --- | --- | --- |
| **Chat** (claude.ai) | A small computer in the cloud. It runs short programs and makes files you can download. | Your computer. Only the files you upload. Your programs and logins. The internet only as far as your settings allow. |
| **Work** (Cowork) | A closed computer in Anthropic's cloud, one for each task. It reaches the folders you connect through the Claude desktop app, while the app is open, and it can install programs inside. On some company plans it runs in a closed box on your own computer instead. | The programs and logins on your computer. Files outside the folders you connect. The internet only through a list of allowed websites; on a company plan the admin sets that list. |
| **Code** (Claude Code) | No box. It runs programs on your own computer, as you. | It can reach what you can reach. That is why [[Permission mode\|permission modes]] matter. |

This is the main difference between the three products. All three get the same [[Connector|connectors]]. Only Code runs the programs on your computer. Work can see and click them on the screen, slowly, with [[Computer use|computer use]], on Pro and Max plans.

## Example

In Chat you upload a spreadsheet and ask for a chart. Claude runs a small program in its sandbox and gives you an image to download. Then you ask it to open the report in your Documents folder. It cannot: that folder is not in the box. Upload the file, connect the folder in Work, or open the folder in Code.

## Why it matters for you

A sandbox is safe because it is closed, and limited for the same reason. When Chat or Work says it cannot use a program you have, or cannot log in to something you are logged in to, the sandbox is usually why. A folder you connect is the open door: Work can change and delete the files in it, so connect a copy when you are not sure. For the full gear, use [[Claude Code]], and decide how much it may do on its own with the [[Permission mode|permission mode]].

## Related

- [[Chat Work and Code]] - the three products and what each can reach
- [[Command-line program]] - programs Chat and Work can run only inside their sandbox
- [[Script]] - small programs Claude writes and runs, in a sandbox or on your computer
- [[Permission mode]] - the control you have in Code instead of a closed box
- [[Computer use]] - how Work can still click your programs on the screen
- [[Working safely]] - how to work without a box around you
