---
title: Computer use
description: Claude uses a program through its window, like a person does. It takes a screenshot, decides, clicks, and looks again. It works with any program, but it is slow, so it is the last way to try.
aliases:
  - screen control
  - the screen
  - Claude in Chrome
tags:
  - concept
---

IT support taking over your screen from far away. They see what you see, move your mouse and type for you. It works with any program, but you watch every slow click.

Computer use means Claude works a program through its window, the way a person does. It takes a screenshot, thinks, moves the mouse or presses keys, and takes another screenshot to see what happened. Then it does it again. It is a set of [[Tool|tools]] like the others. In Claude Code it comes built in, as a connector, and it stays off until you switch it on.

## The last way to try

Clicking works with any program, even one with no [[Command-line program|command-line program]], no [[API]] and no [[Connector|connector]]. But it is very slow, and it stops working when something on the screen moves or looks different.

Claude knows this and tries it last. Anthropic's documentation says the same: the screen reaches the most programs but is the slowest, so Claude tries the most exact way first. The order is a connector if there is one, then a command, then Claude in Chrome for websites, and the screen only for what nothing else can reach.

## Where you can use it (September 2026)

| | Pro and Max | Team and Enterprise (company plans) |
| --- | --- | --- |
| Chat | no | no |
| Work (Cowork) | yes, as a beta | no |
| Code in the Claude desktop app, Windows or Mac | yes | no |
| Code in the terminal | Mac only | no |

On Windows that means: only in the Claude desktop app, in the Code tab or in Work. Switch it on under Settings, General. See [[Claude Code in the desktop app]].

The first time Claude wants to use a program, it asks you. You allow each program for this session only, and you can stop it at any time.

## Claude in Chrome

For websites there is a lighter way: **Claude in Chrome**, an extension for the Chrome browser. Claude reads the page and clicks in it, inside your own browser. It is not the same as computer use: it works only in the browser, and it is on all paid plans.

It uses your browser, so it uses your logins. On every website where you are logged in, it acts as you.

## Be careful

- It sees the programs you allow, and whatever is in them. Close anything private before you start.
- It acts as you, in every program and on every website it touches.
- A web page or a document can contain text written to give Claude orders. Read its plan before you say yes. See [[Prompt injection]].

## Example

An old program at work has no export, no connector and no command line. You ask: `Open the program, go to the monthly report, and copy the September numbers into september.csv.` Claude clicks through it, one screenshot at a time. It takes minutes for what a command would do in a second. But there is no command, so this is the way.

## Why it matters for you

When you hear "the AI can use any program", this is how. It is real, and it is the slowest and most fragile way in. Before you ask for it, ask: `Is there a faster way into this program: a file export, a command-line program, an API?`

## Related

- [[Tool]] - the screen is one more set of tools
- [[Connector]] - the way Claude tries first
- [[Command-line program]] and [[API]] - the faster ways into most programs
- [[Chat Work and Code]] - which product can use the screen
- [[Claude Code in the desktop app]] - where to switch it on on Windows
- [[Prompt injection]] - orders hidden in a web page or a document
- [[Working safely]] - it acts as you
- [[03-gearing-up|Gearing up]] - the lecture that puts the screen last
