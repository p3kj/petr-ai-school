---
title: Sandbox
description: A closed box where Chat and Work (Cowork) run programs. Your own programs and logins stay out of reach, but a folder you connect is real, and so are the changes made in it.
aliases:
  - sandboxes
  - sandboxed
  - virtual machine
  - virtual machines
  - VM
  - container
  - containers
tags:
  - concept
---

The contractor from [[Chat Work and Code|Work (Cowork)]] has his own closed workshop with his own tools, and what happens in there does not touch your office. He gets into your office only through the doors you open for him, and what he does there is real.

A sandbox is that workshop: a closed space where programs can run without touching anything outside it. Claude uses one when it should be able to run programs, but not on your own computer. It can install things, make files and try things inside. Your programs and logins stay outside, out of reach. Your files come in only when you upload them or connect a [[Folder|folder]], and changes in a connected folder are real changes to your files.

## How a sandbox works inside

A sandbox is not one special program. It is a way of working: give programs a closed space with limits, such as which files they may touch and which websites they may reach. There are three common ways to build one:

- **A virtual machine (VM):** a whole pretend computer made of software, with its own Windows or Linux. It runs on your real computer or on a server, and the real computer keeps it walled off (on Windows this part is called Hyper-V). Strong walls, but heavy: it starts up like a computer.
- **A container:** a closed room inside one operating system (the base program of a computer, like Windows). The programs in it see only their own files, their own programs and a controlled network. Lighter than a VM: it starts in a second or two.
- **A fence around each command:** no second computer at all. The operating system checks every command against a list: these folders may be changed, these websites may be reached.

### The one rule

A sandbox can use only what is inside it. The programs you installed on your own computer, and the logins those programs keep, are outside. That is why `gws` or `hubspot`, installed and logged in on your laptop, work in Code and not in Chat or Work. Only Code runs the programs on your computer. Work can see and click them on the screen, slowly, with [[Computer use|computer use]], on Pro and Max plans.

## Where each product stands (September 2026)

- **Chat** (claude.ai) runs programs in a container in the cloud. It can make files you download. It sees only the files you upload. How much of the internet it may reach is a setting under Settings, Capabilities: from nothing, to only the websites programs are downloaded from, to named websites, to almost everything. On company plans the default is small: Team allows only the download websites, Enterprise nothing.
- **Work (Cowork)** runs in Anthropic's cloud by default. Each session gets its own closed box, made when the session starts and deleted when it ends. Traffic to the internet goes through a checkpoint that lets through only websites on an allowed list; on a company plan the admin sets that list. It reaches the folders you connect through the Claude desktop app on your computer, and only while that app is online. It can install programs inside its box, but not use yours.
- **Work on your own computer:** the older way. Enterprise plans still use it by default, and some older installs too. The box is then a virtual machine on your own computer (on Windows with Hyper-V). Only the folders you connect are shared into it.
- **Code** (Claude Code) runs programs on your own computer, as you, with no box. It can reach what you can reach. It has an optional fence around each command, switched on with `/sandbox`, but only on a Mac, on Linux and in WSL2 (Linux running inside Windows), not on normal Windows. So on Windows, Code runs with no box, and the [[Permission mode|permission mode]] is your control.

Since 16 September 2026 Anthropic is merging Chat and Cowork into one "Claude", starting with Pro and Max. On your account the two may already be one. In this course we keep calling the part that works on tasks in a sandbox "Work".

> [!note]
> These details change often. Anthropic decides what each sandbox may reach, and the settings above may look different next month. The rule does not change: a sandbox can use only what is inside it.

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
