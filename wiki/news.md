---
title: What is new
description: Everything added to this wiki, newest first. One entry per week, so you can see what changed since you last looked.
aliases:
  - Changelog
  - What's new
  - Updates
tags:
  - course
---

This wiki grows every week. So that you do not have to go looking, everything new is listed here, newest first. Read the top entry, follow the links in it, and you are up to date.

> [!tip] Linking to one week
> Every entry has its own address, made from its date. The one below is at `/news#2026-09-28`. That is the link in the weekly email, so you can go straight to the week you missed.

## 2026-09-28

**Reading the screen, working safely, and a new Opus.**

- [[Working safely]] - the dos and don'ts: work on a copy, plan first, or say "do not change anything yet, just talk about it". Also what Esc Esc can and cannot undo. Read it before the homework: Esc Esc cannot undo moving files into folders.
- [[Reading the Claude Code screen]] - the screen looks like programmer text, but you only need the plain sentences. Which lines to read, and when to press Esc.
- [[Agent loop]] - gather context, take action, check the result, repeat. The diagram from the lecture, and where you fit in.
- [[Compaction]] - what happens when a session gets too long, and why in normal work you should never get there.
- [[Benchmark]] - how AI models are tested, the sites that show who leads right now, and how not to be fooled by a chart.

**Changed:** Anthropic released Opus 5.5 on 22 September. It is now the model Claude Code starts with, at medium effort, and it is cheaper than Opus 5. [[Claude model family]] and [[Effort]] have the new facts and a chart of effort against cost against score. [[Chat Work and Code|Chat, Work and Code]] now says where Cowork runs: in Anthropic's cloud by default. [[Context window]] had one thing slightly wrong: when it is full, Claude Code does not simply drop old content. It clears old tool results and then summarises.

**Coming next: connecting your systems, then making tasks repeat.**

- [[Roadmap]] - weeks 03 and 04 are now fixed. Week 03 is about reaching the systems you use at work: connectors, command-line programs and APIs, and when to use which. Week 04 turns a task you do every week into one that repeats, and shows why a skill alone is not automation. The other topics are all still coming, in an order we will pick as we go.
- Week 05 is now on the [[Roadmap]] too: running several agents at once. Instead of waiting for one agent, you hand out the work, let helpers do the side jobs, and check what comes back.

**Ready for week 03: the ways into your systems.**

- [[Connect Google Workspace]] - Gmail, Drive and Calendar two ways: the connector you switch on, and the `gws` command-line tool. Six Gmail jobs show where the connector stops: saving attachments into a folder, sending a file, changing 2,000 emails at once, setting your out-of-office.
- [[Command-line program|Command-line tool]] - a program you run by typing one line instead of clicking. Claude reads its built-in manual and types the command for you.
- [[API]] - a web address for programs, and why an API key is a password.

**Lecture 03: Gearing up.**

- [[03-gearing-up|Lecture 03: Gearing up]] - the slides, what we covered, your turn and the homework. What a tool is, and every way to give Claude more.
- [[Tool]] - rewritten. A tool is a button the harness gives the model. How one tool call works, step by step, and the names you see on the ⏺ lines.
- [[Connector]] - now says who makes a connector, how to connect one, and what it is good and less good at. Great for a quick look. For big jobs, everything it sends back fills your context.
- [[API]] - now with a real answer from the Czech business register, so you can see what programs get back.
- [[Script]] - a small file with steps that Claude writes and runs. You keep it, and it does the same thing every time.
- [[Sandbox]] - the closed box where Chat and Work run their programs, and why it cannot see the programs on your computer.
- [[Computer use]] - Claude using a program through its window, like you do. It works with anything, but it is slow, so it is the last way to try.
- [[Prompt injection]] - an email, a document or a web page can contain orders for Claude, and Claude may follow them. What to watch for.
- [[Chat Work and Code|Chat, Work and Code]] - a new table of what each one can reach. Only Code uses the programs and logins on your own computer.
- [[Mental models]] - two more corrected beliefs: that a program is its window, and that no connector means no way in.

**Also, for lecture 03:** the Command-line tool page is now called [[Command-line program]], because in this course a tool is a button the harness gives the model, and a program is something Claude runs with one of those buttons. It also lists a few little programs that do big jobs. [[Working safely]] has a new part on connecting things: keys, who made a connector, and emails that contain orders for Claude. [[Reading the Claude Code screen]] and the [[Claude Code cheat sheet]] list the tool names on the ⏺ lines, including `PowerShell` on Windows. [[Connect Google Workspace]] now says why `gws` works only in Code. [[Sandbox]] now explains how a sandbox works inside. [[Chat Work and Code|Chat, Work and Code]] notes that Chat and Cowork are becoming one Claude.

**Also:** [[Connector]] had two things out of date. Claude Code does not describe every connected tool to the model in full at the start. It sees only the names and looks up the rest when needed. What still fills your context is what a connector sends back. And not every web connector is Anthropic's own: the Gmail, Calendar and Drive ones are made by Google.

Before the homework, read [[Working safely]]. If you wonder which model to use, look at the chart on [[Effort]]. For week 03, start with [[Connect Google Workspace]]. After lecture 03, read [[Tool]] and [[Chat Work and Code|Chat, Work and Code]] first.

## 2026-09-21

**Permission modes, projects, and how to check the agent's work.**

Seven new pages in the [[concepts/index|Glossary]], covering the terms that come up in weeks 04 to 08:

- [[Permission mode]] - how much the agent may do without asking you. Read this one even if you read nothing else: the mode most people think is the safe choice is not.
- [[Project]] - a project is just a folder. The one you open the agent in, and why choosing it well changes your answers.
- [[Connector]] - how the agent gets access to your calendar, your mail or your ticket tracker. Where connectors live, and why you should switch off the ones you do not use.
- [[Skill]] - a recipe you save for later. Nothing more than a detailed prompt in a file.
- [[Instructions file]] - the `CLAUDE.md` file the agent reads at the start of every session. The three places these files live, and how to open them.
- [[Usage limits]] - why the agent sometimes stops for a few hours, and seven things not to do if you want to avoid it.
- [[Verification]] - what to check in an answer, and how to make the agent check itself.

**Changed:** the advice on permission modes has changed across the whole wiki. We used to say start in Manual mode. We now say plan first, then let Auto do the work. [[Permission mode]] explains why in full, and the four client guides, the [[Roadmap]] and the glossary all say the new thing.

[[Mental models]] also gained two corrected beliefs, one about confidence not being proof and one about what the agent actually remembers.

**The site now counts page visits.** A cookie-free counter, nothing stored in your browser, no profile of you. The numbers are public, so you can see exactly what is recorded: [petr-ai-school.goatcounter.com](https://petr-ai-school.goatcounter.com). The [[about#What this site counts|About page]] lists what it does and does not collect, and how to block it if you would rather not be counted.

**Later in the week: the controls of Claude Code**, ready for lecture 02.

- [[02-meet-claude-code|Lecture 02: Meet Claude Code]] - the slides, the notes on what we covered and the homework. Watch it full screen or download the PDF.
- [[Claude Code cheat sheet]] - every key, slash command and permission mode on one printable page. Keep it next to the terminal.
- [[Set up a status line]] - a line under the prompt with the model, the folder and how full the context is. One sentence sets it up, and you watch Claude write the two files itself.
- [[Slash command]] - what the `/` menu is, and the ten commands to know first.
- [[Session]] - one conversation in one folder. Why `/clear` loses nothing, how `/resume` brings a session back, and how Esc Esc undoes file changes.
- [[Effort]] - the second dial next to the model: how long it thinks before it answers.
- [[File mention]] - pointing at a file with `@`, dragging it in, or pasting a screenshot.

**Changed:** the [[Roadmap]] moved. Week 02 is now "Meet Claude Code", a hands-on tour of the controls, since everyone installed it for homework. Week 04 becomes your first real task instead of the install.

If you are installing Claude Code this week, read [[Permission mode]] and [[Usage limits]]. Those two are what surprise people first. Once it runs, print the [[Claude Code cheat sheet]].

## 2026-09-20

**The wiki opens.**

Everything from the first session, written up:

- [[Mental models]] - the four ideas the course is built on. The page to read first.
- [[01-introduction-to-ai|Lecture 01: Introduction to AI]] - slides, what we covered, and the homework.
- [[Roadmap]] - the week-by-week plan.
- The [[concepts/index|Glossary]]: [[Model]], [[Harness]], [[Tool]], [[Agent]], [[Client]], [[Terminal]], [[Folder]], [[Prompt]], [[Token]], [[Context window]], [[Attractor effect]], [[Image generation]], [[Claude model family]] and [[Claude Code]].
- [[guides/index|Guides]]: [[Choosing a client]], installing on [[Install Claude Code on Windows|Windows]] and [[Install Claude Code on Mac|Mac]], and one guide per window: [[Claude Code in the terminal|terminal]], [[Claude Code in VS Code|VS Code]], [[Claude Code in the desktop app|desktop app]], [[Claude Code in JetBrains|JetBrains]].
- [[Your first session]] - the homework after lecture 01. Twenty minutes, any client.
- [[Chat Work and Code|Chat, Work and Code]] - the three Claude products compared.

## How to follow this page

Three ways, pick one:

- **The weekly email.** A short reminder with a link to the newest entry. You do not need to do anything: if you are in the course, you are on the list.
- **This page.** Bookmark it. The newest entry is always at the top.
- **The feed.** If you use a feed reader, the site has one at [index.xml](/index.xml). Every new and changed page shows up there.

Found a mistake, or a page that does not make sense? The [[about|About]] page says how to tell us. Doing so counts as homework.

## Related

- [[Roadmap]] - what is coming, rather than what is already here
- [[concepts/index|Glossary]] - every term, one line each
- [[index|Home]] - where to start if this is your first visit
