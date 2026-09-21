---
title: Folder
description: A container for files on your disk. It is the same folder whether Windows Explorer, VS Code or Claude Code opens it, and it is where an agent's work lives.
aliases:
  - folders
  - directory
  - directories
  - files and folders
tags:
  - concept
---

A drawer in a filing cabinet. Documents go inside. You can label it, put drawers inside drawers, and anyone with access to the cabinet sees the same documents.

A folder (programmers say "directory") is exactly that on your computer. A file is one document: a spreadsheet, a contract, a photo, a note. Folders hold files and other folders. Every file has one address, its **path**, such as `Documents/Clients/Acme/contract-2026.docx`.

The one idea worth repeating until it is boring: **a folder does not belong to a program.** Windows Explorer shows it as icons. VS Code shows it as a tree. [[Claude Code]] reads it and writes into it. Open the same folder in all three and create a file in one; it appears in the others immediately, because there is only one folder.

When you point an [[Agent|agent]] at a folder, that folder becomes its [[Project|project]]. Everything it needs should be inside, and everything it produces lands inside. That is the file-first way of working.

## Example

Create a folder called `ai-school-homework`. Put three files in it: a short text note, a spreadsheet, a PDF. Open the folder in Explorer, then in VS Code, then start Claude Code inside it. Ask "what is in this folder?". Same three files, three windows.

## Why it matters for you

Files persist; conversations do not. Anything you want the agent to know next week belongs in a file in the project folder, not in a chat. Anything you want a colleague to reuse belongs there too. Get the folder right and most of the rest of the course becomes easy.

## Related

- [[Project]] - a folder with an agent pointed at it
- [[Context window]] - why files, not chat, are your real memory
- [[Mental models]] - files first
