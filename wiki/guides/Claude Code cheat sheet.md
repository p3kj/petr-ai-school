---
title: Claude Code cheat sheet
description: "One printable page: the keys, the slash commands, the permission modes and their labels, and how to start Claude Code from the terminal."
aliases:
  - cheat sheet
  - keyboard shortcuts
  - shortcuts
  - hotkeys
tags:
  - guide
---

Everything from lecture 02 on one page. Print it or keep it open next to the [[Claude Code in the terminal|terminal]]. The keys work the same in [[Claude Code in VS Code|VS Code]] and the [[Claude Code in the desktop app|desktop app]] unless a button replaces them.

Inside Claude Code, `?` on an empty line shows the same list, and `/help` lists every command.

## Keys

The six to learn first:

| Key | Does |
| --- | --- |
| **Esc** | Stops Claude mid-work. Nothing breaks. Type what you want instead. |
| **Esc Esc** | Clears what you have typed. On an empty line: opens the rewind menu to undo file changes. See [[Session]]. |
| **Shift + Tab** | Switches the [[Permission mode\|permission mode]]. Windows fallback if the terminal swallows it: Alt + M. |
| **↑ ↓** | Your previous prompts. |
| **Tab** | Accepts the suggested completion, for a command or a [[File mention\|file name]]. |
| **?** | On an empty line: shows every shortcut. |

Nice to know:

| Key | Does | Windows | Mac |
| --- | --- | --- | --- |
| **Ctrl + C** | Clears the input. Pressed twice: exits. | | |
| **Ctrl + L** | Redraws the screen if it looks broken. | | |
| **Ctrl + R** | Searches your prompt history. | | |
| **Ctrl + O** | Opens the transcript: every message and every [[Tool\|tool]] call. | | |
| **New line** | A line break without sending. | Shift + Enter in Windows Terminal. `\` then Enter anywhere. | Shift + Enter in Terminal. `\` then Enter anywhere. |
| **Paste an image** | Puts a screenshot into the context. | Alt + V (also in WSL) | Ctrl + V; Cmd + V in iTerm2 |
| **@** | Mentions a file or folder. See [[File mention]]. | | |
| **/** | Opens the command menu. See [[Slash command]]. | | |
| **!** | At the start of a line: runs a terminal command yourself, without Claude. | | |
| **Alt + P** | Switches the model, same as `/model`. | | Option + P |

## Slash commands

The ten to know first:

| Type | Does |
| --- | --- |
| `/help` | Lists every command and shortcut. |
| `/clear` | Starts a new [[Session\|session]]. The old one is saved. |
| `/resume` | Picks a saved session in this folder. |
| `/model` | Picks the model tier. See [[Claude model family]]. |
| `/effort` | Sets how long the model thinks: `low`, `medium`, `high` (default), `xhigh`, `max`. See [[Effort]]. |
| `/context` | Shows what is in the [[Context window\|context window]] and how full it is. |
| `/usage` | Shows how much of your five-hour and weekly allowance is left. `/cost` does the same. See [[Usage limits]]. |
| `/memory` | Lists your [[Instructions file\|instructions files]] and opens the one you pick. |
| `/statusline` | Sets up the status line in plain English. See [[Set up a status line]]. |
| `/exit` | Leaves Claude Code. |

The next ones you will meet:

| Type | Does |
| --- | --- |
| `/compact` | Summarises the conversation so far to make room in the context. Add a focus: `/compact keep the list of deadlines`. |
| Esc Esc | Rewinds file changes to an earlier point. There is no typed command for it. |
| `/permissions` | Shows and edits which tools may run without asking. |
| `/status` | Shows the version, the model, the account and the folder. |
| `/doctor` | Checks the installation and fixes common problems. |
| `/export` | Saves the conversation as a text file. |
| `/login` | Signs in again or switches accounts. |
| `/init` | Creates a starter [[Instructions file\|CLAUDE.md]] for the folder. Week 08. |

## Permission modes

Shift + Tab cycles through them. The label at the bottom of the screen tells you which one is on. See [[Permission mode]] for when to use which.

| Mode | Label | Runs without asking |
| --- | --- | --- |
| Manual | `⏸ manual mode on` | Reading only. Every change and every command asks. |
| Accept edits | `⏵⏵ accept edits on` | Reading and file edits. Other commands ask. |
| Plan | `⏸ plan mode on` | Reading. Instead of working, it writes a plan and waits. |
| Auto | `⏵⏵ auto mode on` | Everything a second, smaller model judges safe. |

On Pro, Max and Team plans a new session starts in Auto. The habit to build is Plan, then Auto: switch to Plan, describe the task, read the plan, and choose "Yes, and use auto mode".

## Starting from the terminal

Open a terminal in your project folder first (Windows: right-click the folder, Open in Terminal; Mac: drag the folder onto Terminal), then:

| Type | Does |
| --- | --- |
| `claude` | Starts a new session in this folder. |
| `claude -c` | Continues the most recent session in this folder. |
| `claude -r` | Shows the session picker before starting. |
| `claude "what is in this folder?"` | Starts and asks the first question in one go. |

## Official documentation

- [Interactive mode: keyboard shortcuts](https://code.claude.com/docs/en/interactive-mode)
- [Built-in commands](https://code.claude.com/docs/en/commands)
- [Permission modes](https://code.claude.com/docs/en/permission-modes)
- [CLI reference](https://code.claude.com/docs/en/cli-reference)

## Related

- [[Claude Code in the terminal]] - the same things explained, not just listed
- [[Slash command]], [[Session]], [[File mention]], [[Effort]], [[Permission mode]] - the terms behind the tables
