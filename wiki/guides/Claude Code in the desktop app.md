---
title: Claude Code in the desktop app
description: "No terminal at all: the Claude desktop app has a Code tab. Pick a folder, type a task, approve changes with buttons. The gentlest way to start."
aliases:
  - desktop app
  - Claude desktop
  - Code tab
tags:
  - guide
---

The Claude desktop app you may already use for chatting has three tabs: **Chat**, **Cowork** and **Code**. The Code tab is [[Claude Code]] with a graphical face: buttons instead of commands, a folder picker instead of `cd`, a change viewer instead of text. Same [[Agent|agent]], same [[Tool|tools]], same [[Folder|folders]]. If a terminal feels like too much on day one, start here.

%% TODO screenshot: desktop app Code tab on Windows (Petr) %%

## Step 1: Install and sign in

Download the app from [claude.com/download](https://claude.com/download) (Windows and macOS) and run the installer. Open it from the Start menu or Applications and sign in with your work account.

## Step 2: Open the Code tab

Click **Code** at the top of the window. If it asks you to upgrade, your account is on the free plan; ask Petr about the work subscription. If it asks you to sign in online, do so and restart the app.

## Step 3: Pick a folder and a model

In the prompt area:

- Keep **Local** selected. That means Claude works on your machine, in a folder you choose. (**Cloud**, **SSH** and **WSL** are for later.)
- Click **Select folder** and choose your project folder, for example `Documents\ai-school`.
- The dropdown next to the send button picks the [[Model|model]]. The default is fine.
- The mode selector next to it sets how much Claude does without asking. Choose **Plan** for your first sessions: Claude tells you what it means to do before it does any of it. See [[Permission mode]].

## Step 4: Type a task and review

Type what you want and press Enter. In **Plan** mode you get a written plan first and nothing is touched; approve it with **"Yes, and use auto mode"** to let Claude carry it out.

In **Manual** mode every proposed change appears as a before/after comparison with **Accept** and **Reject** buttons, and your files do not change until you accept. In **Auto** or **Accept edits** the changes land directly and a small `+12 -1` indicator appears; click it to see what changed, file by file.

You can interrupt with the stop button, or just type a correction and send it.

## Good to know

- Type `@` and a filename to point Claude at a file, or drag a file into the prompt box. See [[File mention]].
- Each session is its own conversation. **+ New Session** (Ctrl + N) starts another, even in another folder.
- **Ctrl + `** opens a terminal pane inside the app, if you get curious about what the [[Claude Code in the terminal|terminal client]] looks like.
- The app includes Claude Code itself; you do not need to install anything else for the Code tab. The terminal command `claude` is a separate install.
- Cowork, the middle tab, is the "Work" in [[Chat Work and Code|Chat, Work and Code]].

## Official documentation

- [Get started with the desktop app](https://code.claude.com/docs/en/desktop-quickstart) and [Use Claude Code Desktop](https://code.claude.com/docs/en/desktop)
- [Install Claude Desktop](https://support.claude.com/en/articles/10065433-install-claude-desktop) (Help Center)

## Related

- [[Choosing a client]]
- [[Your first session]]
