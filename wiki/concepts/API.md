---
title: API
description: A web address for programs. Instead of a page for people, it answers with data for other programs. Most need a key, and a key is a password.
aliases:
  - APIs
  - API key
  - API keys
  - application programming interface
tags:
  - concept
---

You open a web address and get a page, made for your eyes. A program opens an API address and gets data, made for a program: no pictures, no buttons, only the facts in a fixed format.

API stands for "application programming interface". It is the way in that a service keeps for other programs. Gmail has one, most CRMs have one, the Czech business register (ARES) has one. The service's own website and apps often use the same API underneath.

Most APIs have a manual, and the manual is a web page too. The [[Agent|agent]] reads it and writes a short [[Script|script]] that calls the API, or opens the address itself with its `Fetch` [[Tool|tool]]. You do not need to learn the API. You need to know it exists, and ask for it.

## What it looks like

This is the ARES address for one company, and what comes back:

```text
ares.gov.cz/ekonomicke-subjekty-v-be/rest/ekonomicke-subjekty/45274649
```

```json
{ "ico": "45274649",
  "obchodniJmeno": "ČEZ, a. s.",
  "sidlo": { "textovaAdresa": "Duhová 1444/2, Michle, 14000 Praha 4" },
  "datumVzniku": "1992-05-06" }
```

No design, no buttons. Only the facts, each with a name: the company ID, the name, the address, the date it was founded. A program can read that without guessing, and so can Claude.

## One service, several ways in

For an online service, every other way in usually goes through the API:

```text
You     →  gmail.com (the window)      →  your mailbox

Claude  →  the Gmail connector (MCP)   →  Gmail API  →  your mailbox
Claude  →  gws (command line)          →  Gmail API  →  your mailbox
Claude  →  a small script              →  Gmail API  →  your mailbox
```

The [[Connector|connector]], the [[Command-line program|command-line program]] and the script all reach the same mailbox. They differ in what they let Claude do. A connector offers only the actions its maker chose. The API has everything the service offers.

## API keys

Most APIs want to know who is calling. The usual way is an **API key**: a long secret text the service gives you. It works like a password, so treat it like one.

- **Never paste it into the chat.** Everything you type is sent to the [[Model|model]] and saved in the session files on your disk.
- **Keep it in one file that only the script reads.** Keep that file out of folders you share. Ask the service for a key with only the rights the job needs.
- **Delete it at the service** when you no longer need it. This is called revoking it.

### How to put a key into a file

1. Ask Claude: `Make an empty file called key.txt in this folder. I will put an API key in it. Do not open it after that.`
2. Open `key.txt` in Notepad (on a Mac, TextEdit), paste the key, save, close.
3. Then: `The key is in key.txt. Write the script so it reads the key from that file. Do not open the file and do not show the key.`

Claude usually keeps to this, but it is a request, not a lock. Keep the key file only in the folder that needs it, and delete the key at the service when the job is done.

Some programs let you log in through the browser instead, like `gws auth login` for Google or `hubspot auth login` for HubSpot. Then there is no key to copy around. The login is still saved in a file on your computer, so treat that file like a password. See [[Connect Google Workspace]].

Keys can change names. HubSpot, for example, now calls new keys service keys. Ask the service's admin for one, and let Claude look up the current steps.

## Example

`Look up our company in the ARES register and save its name, address and ID to company.csv.` ARES needs no key. The agent finds the API manual, calls one address, and writes the answer into a file in your folder. Open the folder in Explorer: the file is there.

## Why it matters for you

When there is no [[Connector|connector]] for a system, there is often an API. And when there is a connector but the job is big, the API is usually the better way in. A script sends the data straight into a file, and the agent sees one line: "saved 4,812 contacts". Through a connector, every one of those contacts would pass through the [[Context window|context window]] first.

## Related

- [[Connector]] - the way in made for AI, usually built on top of an API
- [[Command-line program]] - many of them use an API underneath
- [[Script]] - the small file Claude writes to call an API
- [[Working safely]] - why secrets never go into the prompt
- [[Connect Google Workspace]] - Gmail's API reached through a connector and through `gws`
- [[03-gearing-up|Gearing up]] - the lecture with the ARES exercise
