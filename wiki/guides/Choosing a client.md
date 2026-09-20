---
title: Choosing a client
description: "Terminal, VS Code, desktop app, JetBrains or the web: five windows onto the same Claude Code agent. How they differ, which one fits where you work, and why it barely matters."
aliases:
  - clients
  - client overview
  - which client
tags:
  - guide
---

You can talk to [[Claude Code]] from five different places. They are not five products. They are five windows onto the same [[Agent|agent]] with the same [[Tool|tools]], the same [[Prompt|prompts]] and the same [[Folder|folders]]. Pick the window that fits where you already work, learn the fundamentals there, and switch later without losing anything. This page is the overview; each client has its own guide.

## The five clients

| Client | What it looks like | Good for | Guide |
| --- | --- | --- | --- |
| **Terminal (CLI)** | A text window. You type, Claude answers, everything happens in your current folder. | The full toolbox, automation, people who like keyboards. Where the course demos run. | [[Install Claude Code on Windows]], [[Install Claude Code on Mac]], [[Claude Code in the terminal]] |
| **VS Code extension** | A free editor with a file tree on the left and a Claude chat panel on the right. Changes show up as before/after comparisons. | Seeing your files while Claude works on them. A great middle ground. | [[Claude Code in VS Code]] |
| **Desktop app** | The Claude app you may already have, with a third tab called Code. Pick a folder, type a task, review changes. No terminal at all. | The gentlest start. Also has Chat and Cowork in the same window. | [[Claude Code in the desktop app]] |
| **JetBrains plugin** | Same idea as VS Code, inside IntelliJ, PhpStorm, PyCharm and friends. | People who already live in a JetBrains IDE. | [[Claude Code in JetBrains]] |
| **Web** ([claude.ai/code](https://claude.ai/code)) | Claude works in the cloud on a project stored on GitHub, from your browser or phone. | Later in the course, once your work lives in a shared repository. | Covered in the Git weeks |

All of them need the same thing: a paid Claude plan (Pro, Max, Team or Enterprise; the free plan does not include Claude Code) and a sign-in through your browser the first time.

## Which one should I start with?

- **Never opened a terminal and slightly nervous?** Start with the [[Claude Code in the desktop app|desktop app]]. Same agent, buttons instead of commands. Move on when you are curious.
- **Want to see the files as Claude touches them?** [[Claude Code in VS Code|VS Code]]. The file explorer on the left makes the [[Mental models|files-first]] idea visible, and every edit shows as a before/after.
- **Want the whole thing, and to follow the lectures exactly?** The [[Claude Code in the terminal|terminal]]. It looks bare, but there is nothing to learn beyond typing and pressing Enter, and every advanced feature we will meet later works here first.

Whatever you choose, do not be afraid of the other two. A terminal is a chat window without the decoration. VS Code is a folder view with a chat next to it. Try each for ten minutes once; you will be surprised how little changes.

## On Windows: use the Terminal app with PowerShell

Most of us are on Windows 11. The smoothest way to run the command-line client there is the **Terminal** app that comes with Windows 11 (the one with tabs), with **PowerShell** as the tab inside it. The older blue "Windows PowerShell" window and the black "Command Prompt" (CMD) can also work, but you will hit odd behaviour sooner. The [[Install Claude Code on Windows|Windows guide]] shows exactly how to open the right one.

## Petr's own setup, for the curious

Petr runs the terminal client on Linux, in Konsole or in [Okena](https://www.okena.dev/), a terminal app that keeps several agent sessions side by side and restores them after a restart. Tools like that ([tmux](https://github.com/tmux/tmux/wiki) and [Zellij](https://zellij.dev/) are the classics) are a nice-to-have once you run more than one agent at a time. Not needed for the course.

## Official documentation

Anthropic's own pages, if you prefer the source:

- [Claude Code overview](https://code.claude.com/docs/en/overview) and [Terminal guide for new users](https://code.claude.com/docs/en/terminal-guide)
- [Quickstart (CLI)](https://code.claude.com/docs/en/quickstart) and [Advanced setup](https://code.claude.com/docs/en/setup)
- [VS Code](https://code.claude.com/docs/en/vs-code), [JetBrains](https://code.claude.com/docs/en/jetbrains), [Desktop app](https://code.claude.com/docs/en/desktop-quickstart), [Cloud sessions](https://code.claude.com/docs/en/claude-code-on-the-web)
- [Troubleshoot installation and login](https://code.claude.com/docs/en/troubleshoot-install)

## Related

- [[Chat Work and Code|Chat, Work and Code]] - the three Claude products, of which Code is one
- [[Your first session]] - what to do once any client is running
