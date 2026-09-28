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
| Where | Web, desktop and mobile app | Desktop app | Terminal, VS Code, JetBrains, desktop app, web |
| Sees your files? | Only what you paste or upload | The folders you connect | The project folder you open, and anything else you allow |
| Where the work runs | Anthropic's servers | Anthropic's servers by default, in a sandbox made for each session. It reaches your folders through the desktop app | Your own computer |
| Tools | Few: web search, [[Connector\|connectors]] you enable | Files in connected folders, a sandboxed shell, connectors | Everything: files, programs, web, connectors, plus your own skills and automations |
| Control | You edit the answer yourself | You choose the folders and connectors and an approval mode: approve each step, approve automatically, or skip approvals | You set a [[Permission mode\|permission mode]] and approve individual actions, or set rules for what runs on its own |
| Best at | Thinking, drafting, quick questions | Finishing a self-contained task in a folder without a terminal | Anything that needs many tools, repetition, sharing with colleagues, or automation |

## When to use which

- **Chat** when there are no files involved and you want to think out loud: a question, a draft, a comparison, a translation. Iterate on the answer yourself.
- **Work** when the task lives entirely in a folder and you want a finished result without opening a terminal: "go through these 40 invoices and make a table", "tidy these meeting notes into one summary". You set the boundary (which folders, which connectors) and how often it should ask before acting.
- **Code** when you want the full toolbox: several folders, programs, the web, connectors, saved [[Instructions file|instructions]], repeatable [[Skill|skills]], and work you share with colleagues through [[Folder|folders]] and Git. Also when you want to see and approve each step.

## Do we need Work at all?

Fair question. Work is the same engine as Code with a friendlier wrapper. It exists for people who will not open a terminal, and for tasks that fit neatly inside one folder. If you finish this course you will be comfortable in Code, and Work becomes a convenience rather than a necessity: pick it when the folder-boundary and the desktop app make a task simpler, pick Code when you need more.

**Where the work happens.** Code runs on your computer: the tools act on your disk, in the folder you opened. Work runs in Anthropic's cloud by default. Each session gets its own sandbox on Anthropic's servers, and when it needs a file from your folder it asks the desktop app on your computer for it. So the files it works on pass through Anthropic's servers. For most work that is fine, but it is worth knowing when a folder holds something your company is careful about. A local mode also exists, where the work runs in a virtual machine on your computer.

Why the course aims at Code: it shows the machinery. Once you have watched an [[Agent|agent]] read a file, ask permission and write a result, Chat and Work stop being mysterious. They are the same thing with fewer tools.

## Sources

- Anthropic: [Claude Cowork architecture overview](https://support.claude.com/en/articles/14479288-claude-cowork-architecture-overview), [How Claude Code works](https://code.claude.com/docs/en/how-claude-code-works)

## Related

- [[Mental models]] - AI = model + harness + tools
- [[Connector]] - what "connectors" means in the table above
- [[Permission mode]] - the approval dial, in Code and in Work
- [[Claude Code]]
- [[Tool]] - the real difference between the three
