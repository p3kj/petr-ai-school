---
title: Claude Code in JetBrains
description: "For people who already use IntelliJ, PhpStorm, PyCharm or WebStorm: install the terminal client, add the Claude Code plugin, press Ctrl+Esc."
aliases:
  - JetBrains
  - IntelliJ
  - PhpStorm
  - PyCharm
tags:
  - guide
---

Only relevant if you already work in a JetBrains IDE (IntelliJ IDEA, PhpStorm, PyCharm, WebStorm, GoLand, Android Studio). If not, [[Claude Code in VS Code|VS Code]] gives you the same experience with less setup.

The JetBrains plugin does not bring its own Claude Code. It runs the terminal client inside the IDE's terminal and adds integration on top: changes open in the IDE's diff viewer and your current selection is shared with Claude automatically.

## Steps

1. Install the terminal client first: [[Install Claude Code on Windows]] or [[Install Claude Code on Mac]]. Check with `claude --version`.
2. In your IDE, open **Settings**, **Plugins**, search the Marketplace for **Claude Code [Beta]** by Anthropic, install, restart. Or open the [plugin page](https://plugins.jetbrains.com/plugin/27310-claude-code-beta-).
3. Open your project. Press **Ctrl + Esc** (Mac: Cmd + Esc) or click the Claude Code button. Claude starts in the IDE terminal with the project folder as its [[Folder|folder]].
4. Sign in through the browser the first time, then work exactly as in [[Claude Code in the terminal]].

If the plugin reports "Cannot launch Claude Code", the IDE cannot find the `claude` command: set its full path under **Settings**, **Tools**, **Claude Code [Beta]**.

## Official documentation

- [JetBrains IDEs](https://code.claude.com/docs/en/jetbrains)

## Related

- [[Choosing a client]]
