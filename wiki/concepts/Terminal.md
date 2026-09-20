---
title: Terminal
description: "A window where you type a command and the computer answers in text. PowerShell, Terminal, Konsole and bash are all terminals or the shells inside them. Not scary, just undecorated."
aliases:
  - terminals
  - command line
  - CLI
  - shell
  - PowerShell
  - console
tags:
  - concept
---

A chat window with your computer. You type a short instruction, press Enter, and the computer replies in text. No icons, no menus, no mouse. That is all a terminal is.

Two words get mixed up:

- The **terminal** is the window (Windows Terminal, macOS Terminal, Konsole on Linux).
- The **shell** is the program inside it that understands your commands (PowerShell on Windows, zsh or bash on Mac and Linux). The line ending in `>` or `$` where you type is the shell's prompt. `PS C:\Users\You>` means PowerShell.

Programmers use terminals because they are fast and precise. You will use one because [[Claude Code]] lives in it, and because three commands cover everything the course needs:

| Command | Means | Example |
| --- | --- | --- |
| `cd` | change directory: move into a [[Folder|folder]] | `cd Documents\ai-school` |
| `mkdir` | make a folder | `mkdir ai-school` |
| `claude` | start Claude Code in the current folder | `claude` |

Everything else you type is a sentence to Claude, not a command.

## Example

You open Terminal, type `cd Documents\ai-school`, then `claude`. The prompt changes into Claude Code's welcome screen. From here on you are talking to the [[Agent|agent]], and the shell is behind it, running the commands the agent asks to run, after you approve.

## Why it matters for you

The terminal is the client where nothing is hidden: every file read, every command, every permission prompt is visible as text. The graphical [[Choosing a client|clients]] wrap the same thing in buttons. Ten minutes in a terminal removes most of the mystery about "AI on my computer".

## Related

- [[Claude Code in the terminal]] - the practical guide
- [[Install Claude Code on Windows]] - which terminal to open on Windows 11 and why
- [[Harness]] - what runs the commands you approve
