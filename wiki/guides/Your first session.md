---
title: Your first session
description: "The homework after lecture 01: a folder with three files, one question, one small change. Works in any client. Twenty minutes."
aliases:
  - first session
  - homework 01
  - first steps
tags:
  - guide
---

You have [[Choosing a client|a client]] running. This is the exercise from the first lecture. It takes about twenty minutes and teaches the two things everything else builds on: Claude works in a [[Folder|folder]], and it asks before it acts.

## 1. Make a folder and put three files in it

Using Windows Explorer or Finder, not Claude:

1. Create a folder `ai-school` in your Documents.
2. Copy three files into it: a short text or Word document, a spreadsheet, a PDF. Anything harmless from your work or private life.

## 2. Open the same folder in your client

- **Terminal:** Windows: right-click the folder in Explorer, **Open in Terminal**, then type `claude`. Mac: drag the folder onto the Terminal icon in the Dock, then type `claude`. (Or `cd` into it, if you like typing.)
- **VS Code:** File, Open Folder, pick `ai-school`, click the Spark icon.
- **Desktop app:** Code tab, Select folder, pick `ai-school`.

Leave the [[Permission mode|permission mode]] alone for now. Today the tasks are small and you want to watch what happens. From the next session on, the habit to build is Plan first, then Auto.

## 3. Ask three things

Type each, press Enter, read the answer, and watch what Claude does before it answers.

```text
what is in this folder?
```

It lists the files. It had to look; notice whether it asked permission or just read them (reading inside the [[Project|project]] folder is usually allowed, changing is not).

```text
summarise the document in three bullet points, in plain language
```

Claude opens the file and reads it. Check the summary against what you know is in there.

```text
create a file called notes.md with today's date and the three bullet points
```

Now it wants to write. Depending on the mode you are in it either shows you the file and asks, or writes it and tells you what it did. Either way, look in Explorer or Finder afterwards: `notes.md` is there. You did not click anything in Explorer; the folder is simply the same folder.

## 4. Break it a little

Try one of these, just to see:

- Ask about a file that is not in the folder. Notice it cannot see it, and how it tells you.
- Ask it to rename the PDF to something sensible based on its content. This one is a command, not a text answer, so watch what it reports doing.
- Type `/clear` and ask "what did we just do?". It does not know: the whiteboard was wiped. See [[Context window]] and [[Session]].

## 5. Write a proper prompt

Finish with one prompt built the way the [[Prompt]] page describes: Role, Context, Command, Format.

```text
You are a careful assistant. In this folder there is a spreadsheet. Tell me what each column seems to contain and flag anything that looks like a mistake. Answer as a short table.
```

## What to bring to the next session

The answer to one question: *what surprised you?* That it needed permission, that it could not see your other files, that it read a PDF, that it made a mistake. All of those are the lesson.

Stuck at any step? Note where, and bring the laptop. The [[Install Claude Code on Windows#If something goes wrong|Windows]] and [[Install Claude Code on Mac#If something goes wrong|Mac]] guides cover the common errors.

## Related

- [[Mental models]] - files first, and why "same folder, different window" matters
- [[Claude Code in the terminal]] - the essential commands
- [[Claude Code cheat sheet]] - every key and command on one page
- [[Attractor effect]] - why `/clear` between tasks is a good habit
