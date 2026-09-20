---
title: Claude Code in VS Code
description: "The middle ground: a free editor with your folder on the left and Claude on the right. Install VS Code, add the Claude Code extension, open a folder, review changes as before/after comparisons."
aliases:
  - VS Code
  - VS Code extension
  - Visual Studio Code
tags:
  - guide
---

VS Code (Visual Studio Code) is a free editor from Microsoft. Programmers use it for code, but it is really a very good folder viewer with a text editor attached, and the Claude Code extension puts the [[Agent|agent]] in a panel next to your files. For many people this is the most comfortable client: you see every file Claude touches, and every change appears as a side-by-side before/after.

![[vs-code-extension-interface.jpg]]
*VS Code with the Claude Code panel on the right. Screenshot: Anthropic, Claude Code docs.*

## Step 1: Install VS Code

Download it from [code.visualstudio.com](https://code.visualstudio.com/) and run the installer with the defaults. Windows and Mac both work.

## Step 2: Open a folder

VS Code works on a [[Folder|folder]], the same way Claude Code does. **File** menu, **Open Folder**, pick your project folder (for example `Documents\ai-school`). The folder's files appear in the Explorer on the left. This is the same folder you see in Windows Explorer or Finder; nothing was copied.

## Step 3: Install the Claude Code extension

1. Press **Ctrl + Shift + X** (Mac: Cmd + Shift + X) to open Extensions.
2. Search for `Claude Code`. The one you want is **Claude Code for VS Code** by **Anthropic**.
3. Click **Install**. If nothing appears afterwards, restart VS Code.

Or install it directly from the [Marketplace page](https://marketplace.visualstudio.com/items?itemName=anthropic.claude-code). The extension brings its own copy of Claude Code, so you do not need the terminal installation for this to work.

## Step 4: Open Claude and sign in

Look for the **Spark icon** (a small four-pointed star). It sits in the top-right toolbar when a file is open, and in the left Activity Bar always.

![[vs-code-editor-icon.png]]
*The Spark icon in the editor toolbar. Screenshot: Anthropic, Claude Code docs.*

Click it. A panel opens with a **Sign in** button; your browser opens, you sign in with your work account, and you are back. A short "Learn Claude Code" checklist appears afterwards; it is worth the two minutes.

## Step 5: Ask, then review

Type in the prompt box at the bottom of the panel and press Enter. Select some text in a file first and Claude sees the selection; press **Alt + K** (Mac: Option + K) to paste a reference to it into your prompt.

![[vs-code-send-prompt.png]]
*Asking about selected lines. Screenshot: Anthropic, Claude Code docs.*

When Claude wants to change a file, what happens depends on the **permission mode** shown at the bottom of the prompt box. Click it to switch. In **Manual** mode you get a before/after comparison and an approve button for every change. Start there.

![[vs-code-edits.png]]
*Reviewing a proposed edit in Manual mode. Screenshot: Anthropic, Claude Code docs.*

## Good to know

- **Ctrl + Esc** (Mac: Cmd + Esc) jumps between the editor and the Claude panel.
- **Plan mode** opens Claude's plan as a document you can comment on before it starts.
- Several conversations can run in separate tabs. A blue dot on the Spark icon means one of them is waiting for your approval.
- The panel can be dragged anywhere: right side, bottom, its own window.
- VS Code also has a built-in terminal (**Ctrl + `**). If you installed the terminal client, `claude` works there too. Same agent, third window.

## Official documentation

- [Use Claude Code in VS Code](https://code.claude.com/docs/en/vs-code)
- [VS Code download](https://code.visualstudio.com/) and [VS Code basics](https://code.visualstudio.com/docs/getstarted/getting-started) (Microsoft)

## Related

- [[Choosing a client]]
- [[Your first session]]
- [[Folder]] - why the Explorer on the left matters
