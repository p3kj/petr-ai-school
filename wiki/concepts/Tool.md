---
title: Tool
description: A button the harness gives the model, one per action - read a file, run a program, search the web, open your calendar. The model picks it and fills it in, the harness presses it. No tool, no action.
aliases:
  - tools
  - tool call
  - tool calls
  - built-in tools
tags:
  - concept
---

Hands. A [[Model|model]] is a mind with no hands. Tools are the hands.

In practice the [[Harness|harness]] gives the model buttons. The model picks a button and fills in the boxes. The harness presses it.

A tool is one of these buttons: one specific action the harness can perform for the model. Read this file, write that file, list a [[Folder|folder]], run a program, search the web, fetch a web page, look at the calendar, send a message. Each button has a label and a few boxes to fill in: which file, what to search for, which day in the calendar. Each tool is described to the model so it knows when to ask for it. In the words of Anthropic's documentation: "Claude determines when to call a tool based on the user's request and the tool's description."

**More tools, more the agent can do.** An AI with no tools can only talk. Add "read file" and it can answer questions about your documents. Add "write file" and it can produce them. Add "run program" and it can automate. Add [[Connector|connectors]] to your company systems and it can work inside them. Same model throughout; the tools make the difference.

**No tool, no action.** Claude reaches only what its tools reach. No tool for your CRM? Then it cannot see your CRM.

## A tool call, step by step

Using a button is called a **tool call**. Here is one, with the Gmail connector:

```text
What the model sees:   Tool:  search_threads
                       Does:  searches your Gmail
                       Boxes: query (the search words)

What the model writes: search_threads(query: "invoice from:accountant")
```

1. The harness gives the model the list of tools.
2. The model writes a request: which tool, what to fill in.
3. The harness presses the button. Often it asks you first, depending on the [[Permission mode|permission mode]].
4. The answer comes back **as text**, into the [[Context window|context window]].
5. The model reads it and picks the next step.

Then the loop starts again. That is the [[Agent loop|agent loop]]. The model never touches anything itself.

For connector tools, the model first gets only the names. It looks up the rest, what the tool does and what to fill in, when it needs one. So a connector you do not use takes almost no space in the context.

## Built-in tools

[[Claude Code]] comes with its own buttons, ready on day one. These are the ones you will see most, with the name shown on the ⏺ line:

| On the ⏺ line | Does |
| --- | --- |
| `Read` | reads a file: text, PDF, picture |
| `Write` | makes a new file |
| `Update` | changes part of a file |
| `Search` | finds files, or finds text inside files |
| `PowerShell`, `Bash` | runs a program or a command |
| `Web Search` | searches the internet |
| `Fetch` | opens one web page |
| `Agent` | sends a helper off with a task of its own |

PowerShell is the command line built into Windows. In Claude Code the tool that runs it is also called `PowerShell`, and that is the line you will see on Windows. `Bash` is the same kind of tool on a Mac. If you installed Git on Windows, you may see `Bash` lines too. Same job.

There are about 45 built-in tools in total. The others you will rarely see. "Run a program" is the big one: it reaches your whole computer.

## Where more tools come from

| Way in | New buttons? | How Claude uses it | On the ⏺ line |
| --- | --- | --- | --- |
| [[Connector]] (MCP) | yes, a ready set for one service | presses the connector's buttons | `claude.ai Gmail - search_threads (MCP)` |
| [[Command-line program]] | no | runs it with "run a program" | `PowerShell(ffmpeg ...)` |
| [[API]] | no | opens its web address, or writes a [[Script\|script]] and runs it | `Fetch(https://ares.gov.cz/...)` |
| The screen ([[Computer use\|computer use]]) | yes, a connector that comes with Claude, off until you switch it on | takes screenshots and clicks | tried last |

Only a connector adds new buttons. Programs, scripts and APIs use the built-in ones.

[[Chat Work and Code|Chat, Work and Code]] use the same model with different tools. Only Code can run the programs on your own computer.

## Example

"What is on my calendar tomorrow and which of those meetings has no agenda in the shared folder?" needs two tools: one that reads the calendar, one that reads files. A chat website with neither can only guess.

## Why it matters for you

When something "does not work", the first question is no longer "is the AI smart enough?" but "**does it have a tool for that?**". Often the fix is to connect one, or to let Claude run a program that can do the job. [[03-gearing-up|Gearing up]] shows every way to give it more, and which one fits which job. Notice which tool the agent asks to use each time it asks for permission, and which [[Permission mode|permission mode]] you are in. In [[Claude Code]] every tool call shows as a ⏺ line in the conversation, so you can watch every step. [[Reading the Claude Code screen]] shows which of those lines to read.

What a tool brings back is text, and text can contain orders for the AI. See [[Prompt injection]].

## Related

- [[Harness]] - what presses the buttons
- [[Agent]] - what you get when tools are in a loop
- [[Agent loop]] - each round of the loop uses a tool
- [[Reading the Claude Code screen]] - what a tool call looks like on screen
- [[Connector]] - how to give it a tool it does not have
- [[Command-line program]] - a program the agent runs with the tool it already has
- [[Script]] and [[API]] - how Claude reaches a service with no connector
- [[Computer use]] - the screen, the last way in
- [[Prompt injection]] - when the text a tool brings back gives orders
- [[Chat Work and Code]] - same model, different tools
- [[Mental models]] - the belief "web AI can do everything" and why tools are the answer
