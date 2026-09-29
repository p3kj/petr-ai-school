---
title: Command-line program
description: A program you use by typing one line instead of clicking through windows. Claude runs it with its own "run a program" tool and reads the program's built-in manual itself.
aliases:
  - command-line programs
  - command-line tool
  - command-line tools
  - CLI
  - CLI program
  - CLI tool
  - CLI tools
tags:
  - concept
---

A command-line program (CLI, short for "command-line interface") is a program you run by typing its name and a few words in a [[Terminal|terminal]]. Some programs work only this way. Others have a window and a command line side by side.

```text
ffmpeg -i talk.mp4 -vn talk.mp3
```

This one line turns a video into an MP3. In a program with a window, the same job is five clicks and a progress bar.

Most programs you are used to are GUI programs - with a Graphical User Interface. You see windows, click buttons and navigate the program like a human. An [[Agent|AI agent]] can do it too (with some additional [[Computer use|tools to click for you]]), but it's very tedious and slow. Many programs have a CLI version built right in, which you can use more directly. And AI is very capable and fast with CLI programs, because AI likes text and understands it well. CLI programs are way faster for an AI agent to use.

## Claude runs it with a tool it already has

In this course a [[Tool|tool]] is a button the [[Harness|harness]] gives the model. A command-line program is not a new button. Claude runs it with a button it already has: "run a program".

PowerShell is the command line built into Windows. In Claude Code the tool that runs it is also called PowerShell, so on Windows you see a `⏺ PowerShell(...)` line. On a Mac the same job shows as `⏺ Bash(...)`, and if you installed Git on Windows you may see `Bash` lines too.

So a new program needs no [[Connector|connector]]. Once it is installed, the "run a program" button simply has one more thing it can run.

## Claude types the commands, not you

Many people believe the command line is only for programmers, because you have to learn the commands. That used to be true. Now Claude does that part:

- **Almost every program carries its own manual.** Type a program's name and `--help`, and it shows how to use it. Claude reads that in seconds and works out the command.
- **It can install them.** On Windows with `winget`, which is the Windows app store, but by typing. On a Mac with `brew` (Claude may need to install `brew` first). It asks you first. If Claude says a new program is "not recognized" right after installing it, close Claude Code and start it again.

What is left for you: know that the program exists, ask for it by name, and check the result.

## Some worth knowing

| Program | Does |
| --- | --- |
| `ffmpeg` | Video and audio: cut, convert, make smaller. |
| `yt-dlp` | Downloads a video, or only its sound. Only what you are allowed to download. |
| ImageMagick | Resizes or converts 200 photos at once. |
| `pandoc` | Word to Markdown (plain text with simple marks for headings and lists) and back. For PDF it needs one more program. |
| LibreOffice | Turns a folder of Word files into PDFs without opening them. |
| `pdftotext` | Pulls the text out of a PDF. |
| `gws` | Gmail, Drive, Calendar, Sheets, Docs. See [[Connect Google Workspace]]. |
| `hubspot` | The HubSpot Agent CLI: CRM records in bulk. Beta. |

Not sure there is one for your job? Ask: `Is there a command-line program that can ...?`

## Programs for online services

Some programs do not work on your files but talk to an online service, through its [[API]]. You log in once, often through the browser, and the program keeps the login on your computer.

- **`gws`** does Gmail, Drive, Calendar, Sheets and Docs. It can save attachments into a folder and change 2,000 emails with a few commands. You need one file from your admin or teacher first. [[Connect Google Workspace]] has the steps.
- **The HubSpot Agent CLI** (`hubspot`) is made by HubSpot for AI agents such as Claude Code. See below.

The big win: the data goes **straight into a file**. Claude sees one line, "saved 4,812 contacts", instead of every contact passing through the [[Context window|context window]].

## HubSpot: the Agent CLI

- **What it does that the connectors cannot:** delete, merge duplicates, edit workflows and pipelines, and save every record into a file. It has been in public beta since June 2026.
- **Try first, then do:** it deletes for real. Ask for `--dry-run` first. It shows what would change, and changes nothing.
- **Ask first:** talk to your HubSpot admin before you install it. It is not the older HubSpot program `hs`, which is for developers.

## Good and less good

- **Good:** it usually does far more than the matching connector. Big data goes into files, past the context. A thousand items in one command. The manual is built in.
- **Less good:** some setup: install, log in, sometimes a file from your admin. Not every program is official, so ask Claude who makes it.
- **Only in Code.** The programs and logins on your own computer are reachable only from [[Claude Code]]. Work (Cowork) can install programs in its own [[Sandbox|sandbox]], but not use yours. Chat cannot run your programs at all. See [[Chat Work and Code|Chat, Work and Code]].

## Example

You have 40 Word files and need them as PDFs. By hand: open each one, Save as, PDF, close, forty times. With a command-line program you type one sentence: `Turn every .docx in this folder into a PDF.` Claude finds LibreOffice, reads its help, runs one command for the whole folder, and the PDFs appear in Explorer.

## Why it matters for you

A [[Connector|connector]] gives the agent only the actions its maker chose. A command-line program often gives it the whole program. It can also save a result straight into a file, so the data does not have to pass through the [[Context window|context window]] first. [[Connect Google Workspace]] shows the same mailbox reached both ways, and what each one can do.

A command acts as you, like any other tool call. A file it moves or deletes is not brought back by Esc Esc. Plan first, then Auto. See [[Working safely]].

## Related

- [[Terminal]] - the window where commands are typed
- [[Tool]] - "run a program" is one of the agent's own tools
- [[Connector]] - the other way to reach a system
- [[API]] - what the service programs talk to underneath
- [[Script]] - when there is no program for the job, Claude writes a small one
- [[Sandbox]] - where Chat and Work run programs instead of on your computer
- [[Connect Google Workspace]] - `gws` and the Gmail connector side by side
- [[03-gearing-up|Gearing up]] - the lecture that shows all the ways in
