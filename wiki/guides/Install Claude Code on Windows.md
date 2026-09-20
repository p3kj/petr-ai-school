---
title: Install Claude Code on Windows
description: "Step by step for Windows 11: open the Terminal app with PowerShell, run one install command, sign in, start your first session straight from a folder in Explorer. Includes the errors people actually hit."
aliases:
  - Windows install
  - install on Windows
tags:
  - guide
---

Twenty minutes, one command to install, one browser sign-in. You do not need to know anything about terminals; this guide shows every step, and you will never have to type a folder path. If you would rather avoid the terminal entirely, the [[Claude Code in the desktop app|desktop app]] is the same agent with buttons.

## Before you start

- Windows 10 (version 1809 or newer) or Windows 11. Almost certainly what you have.
- A paid Claude plan through work (Pro, Max, Team or Enterprise). The free plan does not include Claude Code.
- About 20 minutes and a network connection.

## Step 1: Install Git for Windows (optional, recommended)

Git is a tool programmers use to track file changes. You will not use it yourself yet, but installing it gives Claude an extra [[Tool|tool]] (a second kind of command shell) and we will meet Git properly later in the course.

1. Go to [git-scm.com/downloads/win](https://git-scm.com/downloads/win) and download the installer.
2. Run it and click **Next** on every screen. The installer has many screens; the defaults are fine.

If you already have Git, or would rather skip this, skip it. Claude Code works without it.

## Step 2: Open the Terminal app with PowerShell

Windows 11 comes with an app called **Terminal**. It is a window with tabs, and each tab runs a command shell. We want a **PowerShell** tab.

1. Press **Win + X** and choose **Terminal**. Or press the **Windows key**, type `Terminal` and press Enter.
2. Look at the start of the line in the window. It should read something like `PS C:\Users\YourName>`. The `PS` means PowerShell. Good.

![[windows-terminal.png]]
*Windows Terminal with a PowerShell tab. Screenshot: Wikimedia Commons, MIT licensed.*

> [!tip] Use the Terminal app, not the old windows
> Windows also has an older blue "Windows PowerShell" window and a black "Command Prompt" (CMD). Both can technically run Claude Code, but in our testing on Windows 11 the Terminal app with a PowerShell tab is the one that behaves. If the line starts with `C:\Users\YourName>` without `PS`, you are in CMD: close it and open Terminal.

If your Windows does not have the Terminal app, install it free from the [Microsoft Store](https://apps.microsoft.com/detail/9n0dx20hk701). To make PowerShell the default tab, open Terminal's **Settings**, choose **Startup**, and set **Default profile** to PowerShell.

![[windows-terminal-default-profile.png]]
*Setting the default profile. Screenshot: Microsoft Learn, CC BY 4.0.*

## Step 3: Install Claude Code

Copy this line, paste it into the Terminal window (right-click pastes, or Ctrl + V) and press Enter:

```powershell
irm https://claude.ai/install.ps1 | iex
```

Text scrolls for a while. It ends with "Claude Code successfully installed!". If you see an error instead, jump to [[#If something goes wrong]].

Check it worked:

```powershell
claude --version
```

You should see a version number followed by `(Claude Code)`. Claude Code keeps itself up to date from now on. You can close this window.

## Step 4: Open a folder in Terminal, the Explorer way

Claude Code works inside the [[Folder|folder]] you start it from. That folder is your project. You do not need to navigate to it with commands; Explorer does it for you.

1. Open **Explorer**, go to **Documents** and create a new folder called `ai-school` (right-click, **New**, **Folder**).
2. Right-click the new folder and choose **Open in Terminal**.

![[windows-explorer-open-in-terminal.png]]
*Right-click a folder in Explorer and choose Open in Terminal. On Windows 11 the item is in the first menu; on older Explorer versions it is in the classic menu. Screenshot: Petr.*

A Terminal window opens already inside that folder: the line ends with `\ai-school>`. That is the whole trick. Whenever you want Claude to work in a folder, right-click it and pick **Open in Terminal**. Same folder, two windows: Explorer shows it as icons, Terminal as a path.

> [!note]- Prefer typing? The command way
> In any Terminal window, `cd` moves you into a folder and `mkdir` creates one:
> ```powershell
> mkdir $HOME\Documents\ai-school
> cd $HOME\Documents\ai-school
> ```
> You can also type `cd `, then drag a folder from Explorer into the Terminal window; Windows pastes the path for you.

## Step 5: Start Claude Code and sign in

In that Terminal window, type:

```powershell
claude
```

The first time, Claude Code asks you to log in. Choose the Claude account option, press Enter, and a browser window opens. Sign in with your work account and confirm. Back in the Terminal, you see a welcome screen with the version, the [[Model|model]] and your folder. You are in.

## Step 6: Say something

Type a sentence and press Enter:

```text
what is in this folder?
```

It is empty, so Claude tells you so. Now put something in it: copy any document into `Documents\ai-school` using Explorer, then ask again. Continue with [[Your first session]] for the homework exercise and the essentials (Esc stops Claude, `/help` lists commands, `/exit` leaves).

## If something goes wrong

> [!question]- "irm is not recognized"
> You are in CMD, not PowerShell. Close the window and open **Terminal** (Win + X). The line must start with `PS`.

> [!question]- "claude is not recognized" after installing
> The install worked, but Windows does not yet know where to find it. Close the Terminal window completely, open a new one, and try `claude` again. If it still fails, paste these two lines, press Enter, then open a new window once more:
> ```powershell
> $currentPath = [Environment]::GetEnvironmentVariable('PATH', 'User')
> [Environment]::SetEnvironmentVariable('PATH', "$currentPath;$env:USERPROFILE\.local\bin", 'User')
> ```

> [!question]- "Open in Terminal" is missing from the right-click menu
> Your Terminal app is missing or old. Install or update it from the [Microsoft Store](https://apps.microsoft.com/detail/9n0dx20hk701). Until then, use the command way from Step 4.

> [!question]- "Could not create SSL/TLS secure channel"
> Usually an older Windows 10. Paste this line first, then run the install command again:
> ```powershell
> [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
> ```

> [!question]- "Claude Code does not support 32-bit Windows"
> You opened "Windows PowerShell (x86)". Close it and open the entry without "(x86)", or better, the Terminal app.

> [!question]- The browser sign-in says I need to upgrade
> Your account is on the free plan. Ask Petr about the work subscription.

Anything else: the official [installation troubleshooting](https://code.claude.com/docs/en/troubleshoot-install) page lists every known error with its fix, or bring your laptop to the next session.

## Official documentation

- [Terminal guide for new users, Windows section](https://code.claude.com/docs/en/terminal-guide#windows)
- [Advanced setup: Set up on Windows](https://code.claude.com/docs/en/setup#set-up-on-windows)
- [Windows Terminal installation](https://learn.microsoft.com/en-us/windows/terminal/install) (Microsoft)

## Related

- [[Choosing a client]] - the other ways to run the same agent
- [[Terminal]] - what this text window actually is
- [[Claude Code in the terminal]] - living in the CLI day to day
