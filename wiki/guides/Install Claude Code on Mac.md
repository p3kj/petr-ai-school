---
title: Install Claude Code on Mac
description: "Open Terminal, paste one command, sign in, start your first session. Ten minutes on macOS 13 or newer."
aliases:
  - Mac install
  - install on macOS
tags:
  - guide
---

Ten minutes. One command to install, one browser sign-in. If you would rather skip the terminal, the [[Claude Code in the desktop app|desktop app]] is the same agent with buttons.

## Before you start

- macOS 13 (Ventura) or newer. Apple menu, **About This Mac** shows your version.
- A paid Claude plan through work (Pro, Max, Team or Enterprise). The free plan does not include Claude Code.

## Step 1: Open Terminal

Press **Cmd + Space**, type `Terminal`, press Enter. A window with a blinking cursor appears. That is the [[Terminal|terminal]]: you type a command, press Enter, the computer answers in text.

## Step 2: Install Claude Code

Copy this line, paste it into Terminal (Cmd + V) and press Enter:

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

Text scrolls for a while and ends with "Claude Code successfully installed!". Then check:

```bash
claude --version
```

You should see a version number followed by `(Claude Code)`. Claude Code keeps itself up to date from now on.

If you use Homebrew, `brew install --cask claude-code` works too, but it does not update itself; run `brew upgrade claude-code` now and then.

## Step 3: Go to a folder

Claude Code works inside the [[Folder|folder]] you start it from. Make a fresh one for the course:

```bash
mkdir -p ~/Documents/ai-school
cd ~/Documents/ai-school
```

`mkdir` creates the folder, `cd` moves you into it. Open Finder and you will find the same folder under Documents. Same folder, two windows.

## Step 4: Start Claude Code and sign in

```bash
claude
```

The first time, Claude Code asks you to log in. Choose the Claude account option, press Enter, and a browser window opens. Sign in with your work account and confirm. Back in Terminal you see a welcome screen with the version, the [[Model|model]] and your folder.

## Step 5: Say something

```text
what is in this folder?
```

It is empty, so Claude says so. Drop any document into `Documents/ai-school` with Finder and ask again. Continue with [[Your first session]].

## If something goes wrong

> [!question]- "command not found: claude"
> The install worked but the terminal does not know where to look yet. Close Terminal completely and open it again. If it still fails, paste these two lines and press Enter:
> ```bash
> echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.zshrc
> source ~/.zshrc
> ```

> [!question]- "dyld: cannot load" or "built for Mac OS X 13.0"
> Your macOS is older than 13. Update it through System Settings, Software Update.

> [!question]- The page shows HTML code or "syntax error near unexpected token"
> The download returned a web page instead of the installer. Try again in a minute, or use Homebrew as above.

Anything else: the official [installation troubleshooting](https://code.claude.com/docs/en/troubleshoot-install) page, or bring your laptop to the next session.

## Official documentation

- [Terminal guide for new users, macOS section](https://code.claude.com/docs/en/terminal-guide#macos-and-linux)
- [Advanced setup](https://code.claude.com/docs/en/setup)
- [Open or quit Terminal on Mac](https://support.apple.com/guide/terminal/open-or-quit-terminal-apd5265185d-f365-44cb-8b09-71a064a42125/mac) (Apple)

## Related

- [[Choosing a client]]
- [[Claude Code in the terminal]]
