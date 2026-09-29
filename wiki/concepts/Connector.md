---
title: Connector
description: A connector gives the agent access to one more system, such as your calendar, your mail or your ticket tracker. The name of the standard behind it is MCP.
aliases:
  - connectors
  - MCP
  - MCP server
  - Model Context Protocol
  - integration
tags:
  - concept
---

A connector is a plug. On one side is your agent, on the other side is a system you already use, and plugging them together gives the agent a few new [[Tool|tools]] for that system.

Connect your calendar and it gains "list my meetings" and "create an event". Connect your ticket tracker and it gains "read ticket", "add a comment", "close ticket". The [[Model|model]] does not change at all. It just has more hands.

The standard behind this is called **MCP**, the Model Context Protocol. One thing about it is worth knowing: it is shared between AI products. A connector built for one works with the others, so the calendar you plug in today is not wasted if you move to a different tool next year. People say "MCP server" and "connector" for the same thing.

## Where connectors live

This is the part that confuses people, so learn it early. Connectors come from two different places, and both of them show up in your session.

| Where you set it up | Where it applies | Who manages it |
| --- | --- | --- |
| **On the web**, in your settings at claude.ai | Your account, so every session you sign in to, including [[Claude Code]] | Anthropic provides the list, you switch them on |
| **On your computer**, where you start Claude Code | This machine. Either all your folders, or one [[Project\|project]] | You |

Both lists arrive together, and `/mcp` in Claude Code shows you everything from both. If you have set up the same service in both places, the one on your computer wins, and `/mcp` tells you the web one is hidden.

The connectors on the web are the easy way in: you switch one on, sign in to the service in your browser, and it is there. Worth knowing who made each one. Some are built by the service itself: the Gmail, Google Calendar and Google Drive connectors are made by Google. Others are Anthropic's own versions, and those are sometimes simpler than what the service offers, with fewer actions. The connector directory at [claude.com/connectors](https://claude.com/connectors) says who made each one. If a web connector cannot do the thing you need, look for another way in (see below).

## Switch off what you are not using

Claude Code does not describe every connected tool to the model in full. At the start of a session the model sees only the tool names. It looks up the details of a tool when it needs that tool. So a connector you do not use costs you very little [[Context window|context]].

What does fill your context is what a connector sends back. Ask for 300 emails and all 300 land in the conversation. Claude Code warns you when one answer is bigger than 10,000 [[Token|tokens]].

Switch off the ones you do not use anyway, for two reasons. Each one is real access to your data (see below). And every extra tool is one more way for the model to pick the wrong one.

Keep on all the time: the two or three you really use every day. Everything else is better switched on for the folder that needs it. Type `/mcp` and toggle one off, and it stays off for that project only.

## The other way: command-line tools

A connector is not the only way to reach a system. Many services also ship a [[Command-line tool|command-line tool]], a small program you run in the [[Terminal|terminal]]: `gh` for GitHub, `glab` for GitLab, `gws` for Google Workspace, and so on. The agent already has a tool for running programs, so it can use these without any connector at all. Under both there is usually the service's [[API]].

This is week 03 on the [[Roadmap]], and it needs a bit more setup. It is worth it, because these programs usually do far more than the matching connector does, and the agent reads their built-in help to work out how to use them.

[[Connect Google Workspace]] shows the two side by side on Gmail. The connector is the quickest way to find and answer one email. `gws` can also save attachments into a folder, change 2,000 emails with two commands and set your out-of-office.

## Example

Without a connector, "what is on my calendar tomorrow?" gets you an apology.

With the calendar connector: it reads tomorrow, finds two meetings with no agenda, looks in your [[Project|project]] folder for the notes that belong to them, and writes the agendas. One request, two different tools, nothing copied by hand.

## Why it matters for you

This is where the limit moves. When the agent cannot do something you need, the reason is almost never that it is not clever enough. It is that nothing gave it a tool for that job. A connector is how you fix it, and the list of them grows every month.

Two things to be careful about:

- **A connector is real access.** Whatever you plug in, the agent can read, and often write. Plug in what the job needs and nothing more.
- **Text that comes in through a connector is just text.** A ticket, an email or a document arrives in the [[Context window|context window]] like anything else. If it contains something that reads like an instruction, treat it the way you would treat an instruction from a stranger who emailed you. See [[Verification]].

## Related

- [[Tool]] - what a connector hands over
- [[Command-line tool]] and [[API]] - the other doors into the same systems
- [[Connect Google Workspace]] - the Gmail connector and `gws` compared
- [[Permission mode]] - how much a connected tool may do on its own
- [[Image generation]] - a missing tool, solved by a connector
- [[Skill]] - teaching the agent a way of working, the other way to extend it
- [[Context window]] - why switching off unused connectors helps
