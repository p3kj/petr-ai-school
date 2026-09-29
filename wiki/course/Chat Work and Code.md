---
title: Chat, Work and Code
description: "Three ways to use the same Claude: the chat app, Cowork (\"Work\") and Claude Code. Same model, different amount of tools and control. When to use which."
aliases:
  - Chat, Work and Code
  - Cowork
  - Claude Cowork
  - Claude Chat
  - Chat Work Code
tags:
  - course
---

Anthropic ships three products, and they all run the same [[Model|models]]. What changes is the [[Harness|harness]] around the model, how many [[Tool|tools]] it has, and how much control you keep. In this course we call them **Chat, Work and Code**. Anthropic's names are Claude (the app), Claude Cowork and Claude Code.

| | Chat | Work (Cowork) | Code (Claude Code) |
| --- | --- | --- | --- |
| Analogy | An advisor on the phone | A contractor you hand a folder and a task | A colleague at the next desk with your keyboard |
| Where | Web, desktop and mobile app | Desktop app; web and mobile in beta | Terminal, VS Code, JetBrains, desktop app, web |
| Sees your files? | Only what you paste or upload | The folders you connect | The project folder you open, and anything else you allow |
| Where the work runs | Anthropic's servers | Anthropic's servers by default, in a [[Sandbox\|sandbox]] made for each session. It reaches your folders through the desktop app | Your own computer |
| Tools | Few: web search, [[Connector\|connectors]] you enable, small programs in a sandbox in the cloud | Files in connected folders, programs in its own sandbox, connectors | Everything: files, the programs and logins on your computer, web, connectors, plus your own skills and automations |
| Control | You edit the answer yourself | You choose the folders and connectors and an approval mode: approve each step, approve automatically, or skip approvals | You set a [[Permission mode\|permission mode]] and approve individual actions, or set rules for what runs on its own |
| Best at | Thinking, drafting, quick questions | Finishing a self-contained task in a folder without a terminal | Anything that needs many tools, repetition, sharing with colleagues, or automation |

## When to use which

- **Chat** when there are no files involved and you want to think out loud: a question, a draft, a comparison, a translation. Improve the answer yourself, step by step.
- **Work** when the task lives entirely in a folder and you want a finished result without opening a terminal: "go through these 40 invoices and make a table", "tidy these meeting notes into one summary". You set the boundary (which folders, which connectors) and how often it should ask before acting.
- **Code** when you want the full toolbox: several folders, programs, the web, connectors, saved [[Instructions file|instructions]], repeatable [[Skill|skills]], and work you share with colleagues through [[Folder|folders]] and Git. Also when you want to see and approve each step.

## What each one can reach

The model is the same in all three. The gear is not. This is the table from [[03-gearing-up|lecture 03]].

| | Chat | Work | Code |
| --- | --- | --- | --- |
| [[Connector\|Connectors]] from claude.ai | ✓ | ✓ | ✓ |
| Runs programs | In a sandbox in the cloud | In its own sandbox | On your computer, as you |
| Your installed programs and logins, such as `gws` | ✗ | ✗ | ✓ every one |
| An [[API]] with your own key | Hard: the key would go into the chat | Hard: the key would go into the chat | ✓ from a [[Script\|script]] on your computer |
| The screen ([[Computer use\|computer use]]) | ✗ | ✓ Pro and Max plans | ✓ Pro and Max plans. On Windows only in the desktop app |

- **All three get connectors.** Switch one on at claude.ai and it shows up in Chat, Work and Code, because they share your account.
- **Only Code uses the programs on your own computer.** A [[Command-line program|command-line program]] you installed and logged in to, like `gws`, works in Code. Work can install programs too, but only inside its own sandbox. That sandbox cannot see the programs on your computer, and it reaches only the websites on its allowed list. Chat runs small programs in a sandbox in the cloud.
- **On a company Team plan** an owner decides which connectors you can switch on, and none of the three can use the screen.

## Do we need Work at all?

Fair question. Work is the same engine as Code, with a simpler window around it. It exists for people who will not open a terminal, and for tasks that fit neatly inside one folder. If you finish this course you will be comfortable in Code, and Work becomes a convenience rather than a necessity: pick it when working inside one folder and the desktop app make a task simpler, pick Code when you need more.

**Where the work happens.** Code runs on your computer: the tools act on your disk, in the folder you opened. Work runs in Anthropic's cloud by default. Each session gets its own sandbox on Anthropic's servers, and when it needs a file from your folder it asks the desktop app on your computer for it. So the files it works on pass through Anthropic's servers. For most work that is fine, but it is worth knowing when a folder holds something your company is careful about. A local mode also exists, where the work runs in a closed box on your own computer (a virtual machine). Either way, Work can read and change the real files in the folders you connect.

Why the course aims at Code: it shows the machinery. Once you have watched an [[Agent|agent]] read a file, ask permission and write a result, Chat and Work stop being mysterious. They are the same thing with fewer tools.

## Sources

- Anthropic: [Claude Cowork architecture overview](https://support.claude.com/en/articles/14479288-claude-cowork-architecture-overview), [How Claude Code works](https://code.claude.com/docs/en/how-claude-code-works)

## Related

- [[Mental models]] - AI = model + harness + tools
- [[Connector]] - what "connectors" means in the table above
- [[Permission mode]] - the approval dial, in Code and in Work
- [[Claude Code]]
- [[Tool]] - the real difference between the three
- [[Sandbox]] - the closed box Chat and Work run their programs in
- [[Computer use]] - Claude using the screen, when nothing else works
- [[03-gearing-up|Lecture 03: Gearing up]] - which gear each one gets
