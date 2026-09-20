---
title: Claude Code in the terminal
description: "What the command-line client looks like once it runs: the welcome screen, how to type, stop, switch permission modes, continue yesterday's conversation, and the six commands you actually need."
aliases:
  - CLI
  - Claude Code CLI
  - command line client
tags:
  - guide
---

The terminal client is Claude Code with nothing in the way: a text window, your [[Folder|folder]], and a conversation. It looks bare, and that is the point. Everything you learn here works identically in the other [[Choosing a client|clients]].

![[claude-code-cli-demo.gif]]
*Claude Code in a terminal. Animation: Anthropic, from the official repository.*

Not installed yet? [[Install Claude Code on Windows]] or [[Install Claude Code on Mac]].

## Starting

Open a terminal, move into your project folder, and type `claude`:

```text
cd Documents\ai-school      (Windows)
cd ~/Documents/ai-school    (Mac)
claude
```

The welcome screen shows the version, the current [[Model|model]] and the folder you are in. Whatever is in that folder, Claude can read. Nothing outside it, unless you allow it when asked.

## Talking

- Type a sentence, press **Enter**. That is a [[Prompt|prompt]].
- Claude answers in text, and when it wants to act (read a file, write a file, run a command) it either asks you first or shows you what it did, depending on the permission mode below.
- **Esc** interrupts Claude mid-work. Nothing breaks; type what you want instead.
- **Arrow up** brings back your previous prompt. You cannot click on things in a terminal; use the arrow keys.
- Type `@` and the start of a filename to point Claude at a specific file: `summarise @notes.md`.

## Permission modes: who approves what

Press **Shift + Tab** to cycle through modes. The current one is shown above the prompt line.

| Mode | What happens | When to use |
| --- | --- | --- |
| **Manual** | Claude asks before every edit and every command. You press Enter to approve. | Learning. You see exactly what the [[Harness|harness]] does. |
| **Accept edits** | File edits happen without asking; other commands still ask. | Once you trust it with a folder. |
| **Plan** | Claude only reads and proposes a plan. Nothing changes until you approve. | Big tasks. Look before you leap. |
| **Auto** | A second, small model reviews each action in the background and lets safe ones through. | Long tasks, fewer interruptions. |

On paid plans a fresh session starts in **Auto**. For the first weeks of the course, switch to **Manual** with Shift + Tab. Watching every permission prompt is the fastest way to understand what an [[Agent|agent]] actually does.

## The six commands you need

| Type | Does |
| --- | --- |
| `/help` | Lists everything available. |
| `/clear` | Starts a fresh conversation in the same folder. Use it between unrelated tasks; see [[Attractor effect]]. |
| `/exit` | Leaves Claude Code. Ctrl + D twice does the same. |
| `/login` | Signs in again or switches accounts. |
| `/model` | Picks a different model tier. |
| `/context` | Shows how full the [[Context window|context window]] is. |

Back in the terminal (after `/exit`), two starters worth knowing: `claude -c` continues your most recent conversation in this folder, `claude -r` lets you pick an older one.

## Several things at once

One terminal tab is one conversation. Open a second tab (Ctrl + Shift + T in Windows Terminal, Cmd + T on Mac) and start `claude` in another folder to run two agents side by side. People who do this a lot use a terminal that remembers layouts, such as [Okena](https://www.okena.dev/) or [tmux](https://github.com/tmux/tmux/wiki); Petr runs Konsole and Okena on Linux. Optional.

## Official documentation

- [Quickstart](https://code.claude.com/docs/en/quickstart) and [Terminal guide for new users](https://code.claude.com/docs/en/terminal-guide)
- [Permission modes](https://code.claude.com/docs/en/permission-modes)
- [Built-in commands](https://code.claude.com/docs/en/commands) and [CLI reference](https://code.claude.com/docs/en/cli-reference)
- [Terminal configuration](https://code.claude.com/docs/en/terminal-config) for a nicer-looking terminal

## Related

- [[Terminal]] - what a terminal is, in plain words
- [[Your first session]] - the homework exercise
- [[Choosing a client]]
