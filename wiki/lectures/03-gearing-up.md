---
title: "03 · Gearing up"
description: "Third session. Everything Claude does, it does with a tool. What a tool is and how a tool call works, then the ways to give Claude more: connectors (MCP), command-line programs, APIs and scripts, and the screen. And why only Code gets all of them."
tags:
  - lecture
---

<iframe src="/static/slides/03-gearing-up.html" title="Slides: Gearing up" loading="lazy" allow="fullscreen" allowfullscreen style="width:100%;aspect-ratio:16/9;border:0;border-radius:6px;background:#fff"></iframe>

<p><a href="/static/slides/03-gearing-up.html" target="_blank" rel="noopener" data-router-ignore data-no-popover="true">Open slides full screen</a> · <a href="/static/slides/03-gearing-up.pdf" data-router-ignore data-no-popover="true">Download PDF</a> <small>(click the slides once, then use the arrow keys)</small></p>

## What we covered

Notes for anyone who missed the session, or wants to go through it again at their own pace.

### The opening

- What happened in [[02-meet-claude-code|homework 02]]: what you achieved, which [[Tool|tool]] call surprised you, which [[Slash command|slash command]] you found.
- The opening clip was a film scene where the hero puts on all his gear, one piece after another, before a mission. In this lecture, Code is the one with the full gear.
- In the slides, Chat was phone support: it knows a lot and can talk, and it can also search the web, use connectors and run small programs in a [[Sandbox|sandbox]] in the cloud. Work was a contractor who gets only the folders you open for it: the other doors stay locked. Code had the full gear: your whole computer. [[Chat Work and Code|Chat, Work and Code]] describes the same three as an advisor on the phone, a contractor you hand a folder, and a colleague at the next desk.
- The [[Model|model]] is the same in all three. What changes is how much it can reach.

### What a tool is

- The model can only think and write. It has no hands. So the [[Harness|harness]] gives it buttons. Each button does one job and has a few boxes to fill in, for example which file or which search words.
- A tool is one button. In a tool call, the model picks a button and fills in the boxes. The harness presses it, often after asking you. The answer comes back as text, into the [[Context window|context]]. The model reads it and picks the next step.
- The model never touches anything itself. No tool, no action.
- The names you see on the ⏺ lines: `Read`, `Write`, `Update`, `Search`, `PowerShell` or `Bash`, `Web Search`, `Fetch` and `Agent`. See [[Reading the Claude Code screen]].
- "Run a program" (`PowerShell` or `Bash`) is the big one. With it, Claude can use your whole computer, as far as you allow.

### Ways to give Claude more

- A [[Connector|connector]] adds new buttons for one service. People also call it an MCP server, or MCP.
- For everything else, Claude uses the buttons it already has. It runs a [[Command-line program|command-line program]]: a program you use by typing one line instead of clicking, CLI for short. It writes and runs a [[Script|script]]: a small file with steps, which you keep. Or it reaches a service's [[API]]: the service's own way in for programs.
- The screen is the last way in, when nothing else works: [[Computer use|computer use]].
- One service, several ways in. You use Gmail through its website. Claude can use the Gmail connector, `gws` (a free command-line program for Gmail, Drive, Calendar and more), or a small script. All of them reach the same mailbox through Gmail's API. They differ in what they let Claude do.

| Way in | What it is | Good for |
| --- | --- | --- |
| **Connector (MCP)** | Buttons someone built for one service | A quick look, small jobs |
| **Command-line program** | A program on your computer. Claude types one line | Big jobs, results in files |
| **Script** | A small file with steps. Claude writes it and runs it. You keep it | When there is no ready program |
| **API** | The service's way in for programs. The three above all use it | Everything the service offers |

The window is still there, for you.

### Connectors up close

- "Think of MCP like a USB-C port for AI applications" (modelcontextprotocol.io): one plug for every AI app and every service. Built for AI: every button comes with a description the model reads. Built for convenience: switch it on, sign in, done.
- Someone made it, and they chose which actions to offer. That list is all Claude gets. The Gmail connector has about 30 buttons. The Gmail API has about 80 actions.
- Check who made a connector. It works with your login and your data.
- Everything a connector sends back lands in the context. Ask for 300 emails and you get 300 emails on the whiteboard. A connector you do not use takes almost no space in the context.
- Best for a quick look and small jobs: tomorrow's meetings, one email, one customer in the CRM.

### Programs, APIs and scripts

- Myth of the week: "to use a program, someone has to open its window and click through it." The window is the way in for people. Most programs also have ways in for other programs: files, the command line, an API. Claude can write an Excel file without opening Excel. See [[Mental models]].
- Little programs for big jobs: `ffmpeg` for video and sound, `yt-dlp` for downloads, ImageMagick for 200 photos at once, `pandoc` for Word files, LibreOffice to turn a folder of Word files into PDFs, `pdftotext` for the text in a PDF. You do not need to learn the commands. You need to know the program exists. Claude reads its manual.
- An API is a web address for programs. We asked the Czech business register (ARES) about a company and got only the facts, each with a name. No design, no buttons. Most APIs need a key: a password for programs.
- Through the context, or past it. To export all the contacts from the CRM through the connector, every contact passes through the context, and then Claude types each row again into a file. That is slow, uses up your limit, and a row can go missing. With a command-line program or a script, the data goes straight into a file, and Claude sees one line: "saved 4,812 contacts".

### The screen

- [[Computer use]] takes a screenshot, thinks, clicks, and takes another screenshot. It works with any program, but it is very slow, and it stops working when something on the screen moves.
- On Windows, only the Claude desktop app can do it: Settings, General, Computer use. On a Mac, Claude Code in the terminal can do it too. Pro and Max plans only.
- For websites there is Claude in Chrome, an extension for your browser. It uses your logins, so it acts as you.

### Which gear each one gets

| | Chat | Work | Code |
| --- | --- | --- | --- |
| Connectors from claude.ai | ✓ | ✓ | ✓ |
| Runs programs | In a sandbox in the cloud | In its own sandbox, usually in the cloud | On your computer, as you |
| Your installed programs and logins | ✗ | ✗ | ✓ every one |
| An API with your own key | Hard: the key would go into the chat | Hard: the key would go into the chat | ✓ from a script on your computer |
| The screen | ✗ | ✓ Pro and Max | ✓ Pro and Max. On Windows only in the desktop app |

All three get connectors. Only Code uses the programs and logins on your own computer. That is the full gear.

> [!note] On a company plan
> - An Owner decides which connectors you can switch on.
> - Computer use (the screen) is not on Team or Enterprise plans.
> - Not sure what you have? Ask who manages your company's Claude plan.

### Gmail and HubSpot

- Gmail: the connector compared with `gws`. The connector cannot attach a PDF from your folder, save attachments into a folder, or change your settings. `gws` can. See [[Connect Google Workspace]].
- The meme in the slides shows Claude Code wanting to send an attachment from Gmail, and MCP holding it back. The connector simply has no button for a file from your folder.
- HubSpot has several ways in. The HubSpot connector from the claude.ai list and HubSpot's own MCP server are both made by HubSpot. The buttons you get depend on your HubSpot plan, your permissions and what you allowed when you connected. New permissions need a reconnect. On our account the claude.ai one showed no buttons for marketing emails (newsletters) and HubSpot's own server did, which is why the course uses both. Both change up to 10 records at a time, and everything they send back goes through the context.
- The HubSpot Agent CLI (beta) is a command-line program for the big jobs: delete, merge duplicates, save every record into a file. Ask for `--dry-run` first: it shows what would change, and changes nothing. Ask your HubSpot admin before you install it.
- The HubSpot API does everything, with a key from your HubSpot admin and a script Claude writes.

### Which way to ask for

- Small, quick, only once: the connector.
- A lot of data (more than about 50 items), or a file at the end: a command-line program or a script.
- The same thing every week: next lecture.
- Nothing else works: the screen, and patience.
- You can always export a file yourself and give it to Claude.

Claude tries the connector first. For a big job, name the way yourself: `use gws`, `use the HubSpot CLI`, `write a script for the API`.

### Careful

- Whatever you connect, Claude can read and often change. It acts as you, through every way in.
- A key is a password. Never paste it into the chat: the chat is saved in your history and sent to the model.
- An email can contain orders for Claude, like "ignore your instructions". Claude may follow them. This is called [[Prompt injection|prompt injection]]. Read its plan before you say yes.
- Before you connect a company system, ask who manages your company's Claude plan. See [[Working safely]].

## Key takeaways

1. Everything Claude does, it does with a tool: a button the harness gives the model. No tool, no action.
2. Learn what MCP is: a ready set of buttons for one service. Know what makes it easy and where it stops: great for a quick look and small jobs, and everything goes through the context.
3. A **CLI** is a program you use by typing. An **API** is a service's way in for programs.
4. Claude Code can use your computer and all its programs way more effectively. It is more about learning how a computer works and letting the AI do the hard work for you.
5. Small job: the connector. Big job, or a file at the end: a command-line program or a script. Only Code has all of it.

## Your turn

Ask an API. Nothing to install, no key needed:

```text
Look up ČEZ in the ARES register and save its name, address and company ID to company.csv.
```

Then do the same for a company you know. Watch the ⏺ lines: which tool does it use? `company.csv` is in the folder you opened Claude Code in. Find it in Explorer and open it. If Czech letters look broken in Excel, ask Claude: `Save it again so Excel shows Czech letters correctly.`

Then pick one:

1. `What are all the ways you could work with Excel on this computer? Which one would you pick to fill 1,000 rows, and why?`
2. `Which of my connectors could save my Gmail attachments into a folder? If none can, what would you use instead?`
3. `Is there a command-line program that can make all the photos in this folder smaller? Tell me first. Do not install anything yet.`

No connectors yet? Pick 1 or 3. Watch which way it picks, and which tools it calls.

## Homework

1. Pick one program or service you use every day. Ask Claude for every way in it has. Try one that needs nothing from an admin: a file export, a public API, a small program.
2. Switch on the Google Calendar or Drive connector, if your plan lets you ([[Connector#How to connect|how to connect]]). Do one small task. Then ask how Claude would do a big version, for example every meeting of the last three months in a spreadsheet, and which way it would use.
3. One real task from your own work, in a [[Project|project]] folder: [[Permission mode|Plan, then Auto]].
4. Bring one task you do every week. Next time we make it repeat.

> [!tip] Want more?
> [[Connect Google Workspace]] sets up `gws`, the command-line program for Gmail, Drive and Calendar. You need one file from your admin or teacher first.

## Terms from this lecture

[[Tool]] · [[Harness]] · [[Connector]] · [[Command-line program]] · [[API]] · [[Script]] · [[Sandbox]] · [[Computer use]] · [[Prompt injection]] · [[Context window]] · [[Chat Work and Code|Chat, Work and Code]] · [[Permission mode]]

Guides for this lecture: [[Connect Google Workspace]] · [[Working safely]] · [[Reading the Claude Code screen]]

## Related

- [[02-meet-claude-code|Lecture 02: Meet Claude Code]] - the lecture before: watching the tools work
- [[Mental models]] - the belief "a program is its window", corrected
- [[Roadmap]] - what comes next: making a task repeat
