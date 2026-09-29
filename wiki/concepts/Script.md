---
title: Script
description: A small file with exact steps that Claude writes and runs for you. You keep it, and it does the same thing every time you run it.
aliases:
  - scripts
tags:
  - concept
---

A program on a washing machine. You pick "cotton, 40 degrees" once and press start. The machine runs the same steps every time: fill, wash, rinse, spin. It does not think.

A script is that for a computer: a small text file with exact steps, for example a list of PowerShell commands. PowerShell is the command line built into Windows. The difference from the washing machine: Claude writes this program new, for your job. It runs it with its "run a program" [[Tool|tool]], and reads what it shows. The file stays in your [[Folder|folder]]. You can open it, keep it, and run it again next month.

A [[Command-line program|command-line program]] is ready-made by someone else. A script is the small one Claude writes when there is no ready program for your job.

## When Claude writes one

- **There is no ready program or [[Connector|connector]] for the job,** but the service has an [[API]]. Claude reads the API's manual and writes a script that calls it.
- **The job is big.** A script can take all 4,812 contacts from a service and write them straight into a file. Claude sees one line: "saved 4,812 contacts to contacts.csv". The data goes past the [[Context window|context window]], not through it.
- **The same steps will be needed again.** A script does them the same way every time.

You do not need to read the script. You need to know that it exists, where it is, and what it did. Ask: `Explain in plain words what this script does, step by step.`

If the script calls an API that needs a key, the key goes into its own file that the script reads. Never into the chat. See [[API]].

## Script or skill?

A [[Skill|skill]] is a recipe the model reads and follows each time: it thinks, and it can adapt to what it finds. A script does not think. It runs the same steps every time, and when you run it yourself it uses no AI at all.

A simple rule: a job that needs judgement is a skill. A job with the same fixed steps is a script. Week 04 on the [[Roadmap]] puts the two together.

## Example

`Look up these 50 companies in the ARES register and save their names and addresses to companies.csv.` Claude writes a short script that asks ARES 50 times and writes the answers into the file. It runs it, and `companies.csv` appears in Explorer. Next month you have a new list: `Run the same script with the new list.`

## Why it matters for you

A script turns a one-time answer into something you keep. It is also the way past the context: big data goes straight into files instead of onto the whiteboard. It acts as you, like any program, so plan first, then Auto, and ask for the plain-words explanation before a script changes or deletes anything.

## Related

- [[API]] - what many scripts talk to
- [[Command-line program]] - a ready-made program; a script is the one Claude writes when there is none
- [[Skill]] - the saved prompt; the other half of repeating a task
- [[Context window]] - what a script lets big data skip
- [[Tool]] - the "run a program" tool runs the script
- [[03-gearing-up|Gearing up]] - the lecture where scripts first appear
