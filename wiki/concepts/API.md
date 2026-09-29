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

API stands for "application programming interface". It is the door a service keeps for other programs. Gmail has one, most CRMs have one, the Czech business register (ARES) has one. The service's own website and apps often use the same API underneath.

Most APIs have a manual, and the manual is a web page too. The [[Agent|agent]] reads it and writes a short script that calls the API. You do not need to learn the API. You need to know it exists, and ask for it.

## API keys

Most APIs want to know who is calling. The usual way is an **API key**: a long secret text the service gives you. It works like a password, so treat it like one.

- **Never paste it into the chat.** Everything you type is sent to the [[Model|model]] and saved in the session files on your disk.
- **Keep it in one file that only the script reads.** Tell Claude not to open that file, and keep it out of folders you share. Ask the service for a key with only the rights the job needs.
- **Delete it at the service** when you no longer need it. This is called revoking it.

Some tools let you log in through the browser instead, like `gws auth login` for Google. Then there is no key to copy around. The login is still saved in a file on your computer, so treat that file like a password. See [[Connect Google Workspace]].

## Example

`Look up our company in the ARES register and save its name, address and ID to company.csv.` ARES needs no key. The agent finds the API manual, calls one address, and writes the answer into a file in your folder. Open the folder in Explorer: the file is there.

## Why it matters for you

When there is no [[Connector|connector]] for a system, there is often an API. And when there is a connector but the job is big, the API is usually the better door. A script sends the data straight into a file, and the agent sees one line: "saved 4,812 contacts". Through a connector, every one of those contacts would pass through the [[Context window|context window]] first.

## Related

- [[Connector]] - the door made for AI, usually built on top of an API
- [[Command-line tool]] - many of them are a friendly front for an API
- [[Working safely]] - why secrets never go into the prompt
- [[Connect Google Workspace]] - Gmail's API reached through a connector and through `gws`
