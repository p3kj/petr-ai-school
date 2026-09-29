---
title: Command-line tool
description: A program you run by typing one line instead of clicking through windows. The agent reads its built-in manual and runs it for you.
aliases:
  - command-line tools
  - command-line program
  - command-line programs
  - CLI
  - CLI tool
  - CLI tools
tags:
  - concept
---

A command-line tool (CLI, short for "command-line interface") is a program you run by typing its name and a few words in a [[Terminal|terminal]]. Some programs work only this way. Others have a window and a command line side by side.

```text
ffmpeg -i talk.mp4 -vn talk.mp3
```

This one line turns a video into an MP3. In a program with a window, the same job is five clicks and a progress bar.

Most programs you are used to are GUI programs - with a Graphical User Interface. You see windows, click buttons and navigate the program like a human. An [[Agent|AI agent]] can do it too (with some additional tools to click for you), but it's very tedious and slow. Many programs have a CLI version built right in, which you can use more directly. And AI is very capable and fast with CLI programs, because AI likes text and understands it well. CLI programs are way faster for an AI agent to use.

## The agent types the commands, not you

Many people believe the command line is only for programmers, because you have to learn the commands. That used to be true. Now the agent does that part:

- **It already has the tool to run them.** [[Claude Code]] has a [[Tool|tool]] for running commands. On screen it shows as a `⏺ Bash(...)` line. No [[Connector|connector]] is needed.
- **Almost every tool carries its own manual.** Type a tool's name and `--help`, and it prints how to use it. The agent reads that in seconds and works out the command.
- **It can install them.** On Windows with `winget`, on a Mac with `brew`. It asks you first.

What is left for you: know that the tool exists, ask for it by name, and check the result.

## Some worth knowing

| Tool | Does |
| --- | --- |
| `ffmpeg` | Video and audio: cut, convert, make smaller. |
| `pandoc` | Word to Markdown to PDF, and back. |
| ImageMagick | Resize or convert 200 photos at once. |
| `pdftotext` | Pulls the text out of a PDF. |
| `gws` | Gmail, Drive, Calendar, Sheets and the rest of Google Workspace. See [[Connect Google Workspace]]. |
| `gh` | GitHub. |

Not sure there is one for your job? Ask: `Is there a command-line tool that can ...?`

## Example

You have 40 Word files and need them as PDFs. By hand: open each one, Save as, PDF, close, forty times. With a command-line tool you type one sentence: `Turn every .docx in this folder into a PDF.` The agent finds LibreOffice, reads its help, runs one command for the whole folder, and the PDFs appear in Explorer.

## Why it matters for you

A [[Connector|connector]] gives the agent only the actions its author chose. A command-line tool often gives it the whole program. It can also save a result straight into a file, so the data does not have to pass through the [[Context window|context window]] first. [[Connect Google Workspace]] shows the same mailbox reached both ways, and what each one can do.

A command acts as you, like any other tool. A file it moves or deletes is not brought back by Esc Esc. See [[Working safely]].

## Related

- [[Terminal]] - the window where commands are typed
- [[Tool]] - running a command is one of the agent's own tools
- [[Connector]] - the other way to reach a system
- [[API]] - what many command-line tools talk to underneath
- [[Connect Google Workspace]] - `gws` and the Gmail connector side by side
