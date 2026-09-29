---
title: Glossary
description: Every term used in the course, one line each, linking to a short plain-English page.
---

Hover over a term for the short version, click for the full page. Terms are added as the course goes on.

| Term | In one line |
| --- | --- |
| [[Agent]] | An AI that can act, not just talk: it uses tools in a loop until a task is done. |
| [[Agent loop]] | Gather context, take action, check the result, repeat. You can step in at any point. |
| [[API]] | A web address for programs: data instead of a page. Most need a key, and a key is a password. |
| [[Attractor effect]] | Everything in the context pulls the answer toward it for the rest of the conversation, even what you forbid. |
| [[Benchmark]] | A standard test many models take, so scores can be compared. Where to see who leads, and how not to be fooled. |
| [[Claude Code]] | The agent we use in this course. A model, a harness and many tools, in a terminal or an editor. |
| [[Claude model family]] | Fable, Opus, Sonnet, Haiku: what each tier is for, what it costs, and the OpenAI and Google equivalents. |
| [[Client]] | The window you talk to the agent through: terminal, VS Code, desktop app, JetBrains, web. Same agent underneath. |
| [[Command-line program]] | A program you use by typing one line instead of clicking (CLI). Claude reads its `--help` and runs it with its "run a program" tool. |
| [[Compaction]] | When the context is nearly full, the conversation is replaced by a summary. In this course: a warning light. |
| [[Computer use]] | Claude works a program through its window: screenshot, click, look again. Any program, very slow, the last way to try. |
| [[Connector]] | A plug that gives the agent new tools for one service: calendar, mail, CRM. Also called MCP or MCP server. |
| [[Context window]] | Everything the model can see right now. Fixed size; when it is full, old details are cleared or summarised. |
| [[Effort]] | How long the model thinks before it answers. A dial from low to max, set with `/effort`. |
| [[File mention]] | Pointing the agent at a file with `@`, by dragging it in, or by pasting a screenshot. |
| [[Folder]] | A container for files on your disk. The same folder no matter which program opens it. |
| [[Harness]] | The program around the model that runs the loop, asks permission and calls tools. |
| [[Image generation]] | Pictures come from a separate model wired in as a tool. Claude does not have one built in; ChatGPT does. |
| [[Instructions file]] | A CLAUDE.md file in your project. Standing rules the agent reads at the start of every session. |
| [[Model]] | The part that actually thinks: reads text in, writes text out. Who makes them, how they differ. |
| [[Permission mode]] | How much the agent may do without asking. Plan the work first, then let Auto do it. |
| [[Project]] | The folder you opened the agent in. What it can see, what it may change, where its instructions live. |
| [[Prompt]] | What you tell the AI. Role, Context, Command, Format, and optionally how to check. |
| [[Prompt injection]] | Orders for the AI hidden in an email, a web page or a file. Claude may follow them, so read its plan first. |
| [[Sandbox]] | A closed box where Chat and Work run programs. Your programs and logins stay out of reach; a folder you connect is real. |
| [[Script]] | A small file with exact steps that Claude writes and runs. You keep it; it does the same thing every time. |
| [[Session]] | One conversation in one folder. `/clear` starts a new one, `/resume` brings an old one back, Esc Esc undoes file changes. |
| [[Skill]] | A saved procedure for a recurring task. Written once in a file, followed every time. |
| [[Slash command]] | A command to the program itself, typed with a slash: `/clear`, `/model`, `/help`. Type `/` for the menu. |
| [[Terminal]] | A window where you type a command and the computer answers in text. Where the command-line client lives. |
| [[Token]] | The unit AI reads and writes text in, roughly three quarters of a word. Also what you pay for. |
| [[Tool]] | A button the harness gives the model: read a file, run a program, search the web, open your calendar. No tool, no action. |
| [[Usage limits]] | Paid plans include an amount of work per five hours and per week. Why the agent sometimes stops. |
| [[Verification]] | Checking AI output: which claims are worth checking and how to make the agent check itself. |

Related: [[Mental models]] shows how these fit together; [[Chat Work and Code|Chat, Work and Code]] compares the three Claude products; [[news|What is new]] lists the terms added most recently.
