---
title: Slash command
description: "A command you type into Claude Code that starts with a slash, like /clear or /model. Type / alone and the whole menu opens."
aliases:
  - slash commands
  - commands
  - "/ commands"
  - built-in commands
tags:
  - concept
---

The menu bar of a program you cannot click. In Word you open the File menu with the mouse. In [[Claude Code]] there is no mouse, so the menu opens when you type `/`.

A slash command is an instruction to the [[Harness|harness]], not to the [[Model|model]]. When you type `/clear`, no AI is involved. The program itself does something: wipes the conversation, shows a picker, changes a setting. Everything you type without a slash goes to the model as a [[Prompt|prompt]].

Type `/` on an empty line and the full menu appears. Keep typing to filter it: `/mo` leaves `/model`. Press Enter to run the highlighted one, Esc to close the menu.

## The ten to know first

| Type | Does |
| --- | --- |
| `/help` | Lists every command and shortcut. |
| `/clear` | Starts a new [[Session\|session]] in the same folder. The old one is saved. |
| `/resume` | Shows your saved sessions in this folder so you can pick one up again. |
| `/model` | Picks the model tier. See [[Claude model family]]. |
| `/effort` | Sets how long the model thinks before it answers. See [[Effort]]. |
| `/context` | Shows how full the [[Context window\|context window]] is and what is in it. |
| `/usage` | Shows how much of your five-hour and weekly allowance is left. See [[Usage limits]]. `/cost` is the same command. |
| `/memory` | Lists your [[Instructions file\|instructions files]] and opens the one you pick. |
| `/statusline` | Sets up a status line under the prompt in plain English. See [[Set up a status line]]. |
| `/exit` | Leaves Claude Code. |

The full list, with the ones you will meet later, is on the [[Claude Code cheat sheet]].

## Example

You have been working on a report for an hour and want to switch to sorting invoices. You type `/clear`. The whiteboard is wiped and the invoices get a clean start. Tomorrow you type `/resume`, pick the report session from the list, and carry on where you left off.

## Why it matters for you

Slash commands are how you steer the program around the model: which brain, how much it thinks, how full the whiteboard is, when to start fresh. Once `/clear` and `/model` are in your fingers, most of the "the AI is being strange" moments have a one-word fix. And when you forget one, `/` shows you the whole menu.

## Related

- [[Claude Code cheat sheet]] - every command and key on one page
- [[Session]] - what `/clear` and `/resume` act on
- [[Claude Code in the terminal]] - where you type them
- [[Harness]] - the program these commands talk to
