---
title: Connector
description: A connector gives the agent new tools for one more system, such as your calendar, your mail or your CRM. The name of the standard behind it is MCP.
aliases:
  - connectors
  - MCP
  - MCP server
  - MCP servers
  - Model Context Protocol
  - integration
tags:
  - concept
---

A connector is a plug. On one side is your agent, on the other side is a system you already use, and plugging them together gives the agent a few new [[Tool|tools]] for that system.

Connect your calendar and it gains "list my meetings" and "create an event". Connect your CRM and it gains "find a contact", "update a deal", "add a note". The [[Model|model]] does not change at all. It just has more buttons.

The standard behind this is called **MCP**, the Model Context Protocol. Its makers describe it like this: "Think of MCP like a USB-C port for AI applications." One plug shape, so any AI app and any service that has it fit together. That also means it is shared between AI products: a connector built for one AI app usually works in others too, such as ChatGPT or VS Code, so the calendar you plug in today is not wasted if you move to a different AI product next year. MCP is an open standard, looked after by a foundation, not by Anthropic alone.

People say "connector", "MCP server" and "MCP" for the same thing.

## Someone made it

A connector is a small program between Claude and a service's [[API]]. Someone built it for AI, and they chose which actions to offer. That list is all Claude gets.

The Gmail connector, for example, has about 30 buttons. The Gmail API underneath has about 80 actions. The connector can search, read, reply, draft, label and send. It cannot attach a PDF from your folder, and it cannot save an attachment into a folder.

Connectors are made by the service itself, by Anthropic, or by anybody on the internet. Check who made one before you switch it on: a connector from a stranger works with your login and your data.

## Where connectors live

This is the part that confuses people, so learn it early. Connectors come from two different places, and both of them show up in your session.

| Where you set it up | Where it applies | Who manages it |
| --- | --- | --- |
| **On the web**, in your settings at claude.ai | Your account, so every session you sign in to: Chat, Work and [[Claude Code]] | Anthropic provides the list, you switch them on |
| **On your computer**, where you start Claude Code, for example one that Claude added for you | This machine. Either all your folders, or one [[Project\|project]] | You |

Both lists arrive together, and `/mcp` in Claude Code shows you everything from both. If you have set up the same service in both places, the one on your computer wins, and `/mcp` tells you the web one is hidden.

The connectors on the web are the easy way in: you switch one on, sign in to the service in your browser, and it is there. Worth knowing who made each one. The Gmail, Google Calendar and Google Drive connectors are made by Google. The HubSpot connector is made by HubSpot. Others are made by Anthropic or by someone else, and some do less than the service's own programs. The connector directory at [claude.com/connectors](https://claude.com/connectors) says who made each one.

## How to connect

- **The easy way:** at claude.ai, open Customize, then Connectors. Pick one, switch it on, sign in. It then shows up in Chat, Work and Code: same account, same connectors. In Claude Code they appear by themselves when you log in with your claude.ai account (not with an API key).
- **A custom connector:** a web address you add yourself, under Customize, Connectors, then +. The service or your admin gives you the address. The Free plan allows one.
- **In Claude Code:** ask Claude to add one for you. It uses `claude mcp add`, and the new connector shows up in `/mcp`.
- **Programs with their own connector** run on your computer, next to the program. Blender, a 3D drawing program, is one example. These work in the desktop app, in Work and in Code, not in the web chat.

On a company plan (Team or Enterprise), an Owner decides which connectors you can switch on, and only Owners add custom ones. Ask who manages your company's Claude plan.

Try it: type `/mcp` in Claude Code, pick a connector, and look at its list of tools.

## Switch off what you are not using

Claude Code does not describe every connected tool to the model in full. At the start of a session the model sees only the tool names. It looks up the details of a tool when it needs that tool. So a connector you do not use costs you very little [[Context window|context]].

What does fill your context is what a connector sends back. Ask for 300 emails and all 300 land in the conversation. Claude Code warns you when one answer is bigger than 10,000 [[Token|tokens]].

Switch off the ones you do not use anyway, for two reasons. Each one is real access to your data (see below). And every extra tool is one more way for the model to pick the wrong one.

Keep on all the time: the two or three you really use every day. The rest you can switch off in the folders that do not need them: open Claude Code in that folder, type `/mcp`, and toggle the connector off. It stays off in that folder only, and stays on everywhere else.

## Through the context, or past it

Everything a connector answers lands in the [[Context window|context window]]. For a quick look that is fine. For a big job it is the problem: "Export all our CRM contacts" means every page of contacts passes through the context, and then Claude types each row again into a file. Slow, it uses up your [[Usage limits|limit]], and a row can go missing.

A [[Command-line program|command-line program]] or a [[Script|script]] for the [[API]] sends the data straight into `contacts.csv` instead. Claude sees one line: "saved 4,812 contacts".

## Good and less good

- **Good:** switch on, sign in, nothing to install. Made for AI: clear buttons, clear boxes. Works in Chat, Work and Code, and in other AI apps. Only the actions on the list, so fewer ways to go wrong.
- **Less good:** only the actions on the list, so the rest is out of reach. Everything goes through the context, so big jobs are slow. Changes often go one at a time: relabel 2,000 emails, and that is 2,000 calls. And it is still real access: it acts as you.

A connector is best as a quick way in: look around, and do small things. What is on my calendar tomorrow? Find the email from the accountant about the September invoice. Look up one customer in the CRM.

## Other ways in

Many services also have a [[Command-line program|command-line program]]: `gws` for Google Workspace, `hubspot` for HubSpot. It usually does far more than the connector, and it works only in Claude Code, where the programs on your own computer are within reach. [[Connect Google Workspace]] shows the Gmail connector and `gws` side by side. [[03-gearing-up|Gearing up]] shows all the ways in, and which one fits which job.

## Example

Without a connector, "what is on my calendar tomorrow?" gets you an apology.

With the calendar connector: it reads tomorrow, finds two meetings with no agenda, looks in your [[Project|project]] folder for the notes that belong to them, and writes the agendas. One request, two different tools, nothing copied by hand.

## Why it matters for you

When the agent cannot do something you need, the reason is almost never that it is not clever enough. It is that nothing gave it a tool for that job. A connector is the easiest way to fix it, and the list of them grows every month.

Two things to be careful about:

- **A connector is real access.** Whatever you plug in, the agent can read, and often write. Plug in what the job needs and nothing more.
- **Text that comes in through a connector is just text.** A ticket, an email or a document arrives in the [[Context window|context window]] like anything else. If it contains something that reads like an instruction, treat it the way you would treat an instruction from a stranger who emailed you. This is called [[Prompt injection|prompt injection]]. See also [[Verification]].

## Related

- [[Tool]] - what a connector hands over
- [[Command-line program]] and [[API]] - the other ways into the same systems
- [[Script]] - how big data goes past the context instead of through it
- [[Computer use]] - the screen, which Claude tries only after connectors and commands
- [[Prompt injection]] - orders hidden in the text a connector brings in
- [[Connect Google Workspace]] - the Gmail connector and `gws` compared
- [[Permission mode]] - how much a connected tool may do on its own
- [[Image generation]] - a missing tool, solved by a connector
- [[Skill]] - teaching the agent a way of working, the other way to extend it
- [[Context window]] - why switching off unused connectors helps
