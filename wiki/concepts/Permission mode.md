---
title: Permission mode
description: The setting that decides how much the agent may do without asking you first. Four modes, and why Plan and Auto are the two that matter.
aliases:
  - permission modes
  - Manual mode
  - Plan mode
  - Auto mode
  - approval mode
tags:
  - concept
---

How much you let a new colleague do without checking with you first. On day one you read everything before it goes out. A month later you say "just send it" for the easy things, but you still want to see anything that goes to a client. A permission mode is that same dial, and you set it yourself.

The [[Harness|harness]] stops before every action a [[Tool|tool]] would take and asks one question: may I? The permission mode is your answer, given in advance. In [[Claude Code]] you change it with **Shift + Tab**, and the mode you are in is shown next to the box where you type, in every [[Client|client]].

| Mode | Runs without asking | Use it when |
| --- | --- | --- |
| **Manual** | Reading only. Every change and every command waits for you to say yes. | You can read the commands it wants to run. |
| **Accept edits** | Changes to files. Other commands still ask. | You trust it inside one [[Project\|project]] folder. |
| **Plan** | Reading only. Instead of doing the work, it writes a plan and waits. | Any task big enough to go wrong. Start here. |
| **Auto** | Everything, but a second, smaller [[Model\|model]] checks each action first and stops the risky ones. | Doing the work, once you agree with the plan. |

On Pro, Max and Team plans a new session starts in **Auto**. Two more modes exist for servers and scripts. You will not need them in this course.

## Manual mode does not give you the control it looks like

Many people believe Manual mode is the safe choice, because it asks about everything. Try it for an hour and you will see the problem. What it asks looks like this:

```
Claude wants to run:
  find . -name "*.pdf" -newermt "2026-09-01" -exec mv {} ../archive/ \;
Allow?
```

If you do not read shell commands, you cannot tell whether that line tidies your folder or empties it. So after the fifth prompt you start saying yes without reading. That is not control. It is a habit of clicking yes, and it is worse than no prompt at all, because it feels safe.

Manual mode is for people who can read the command. If that is not you yet, you get real control from the two modes below.

## Plan, then Auto

**Plan mode** asks for your approval in a language you do read: plain English. The agent looks at your files, then writes out what it intends to do, step by step, and changes nothing. You read it the way you would read a colleague's proposal, and you argue with it.

When you agree, the approval question gives you a choice, and **"Yes, and use auto mode"** is the one you want. The agent starts working, and from then on a second model checks each action before it happens. That model *can* read shell commands. You have handed the job of spotting a dangerous command to something able to do it, and kept for yourself the job you are actually good at: deciding whether the plan is right.

To plan again later, press Shift + Tab back to Plan mode.

## Set the limits in your words

The other half of control is not a mode at all. It is one sentence in your [[Prompt|prompt]].

- "We are only thinking about this now. Do not change any files."
- "Work only inside this folder. Do not touch anything in `final/`."
- "Show me the list first. Do not send anything."

Say what you want, not what you fear. "Do not delete anything" puts the word delete in front of the model, and everything in the [[Context window|context window]] pulls the answer toward it: see [[Attractor effect]]. "Only read the files and report back" says the same thing and pulls the right way.

One more thing that helps and surprises people: a stronger model makes fewer mistakes. If a task feels risky, that is a reason to use a better tier rather than a cheaper one. See [[Claude model family]].

## Example

You ask for "rename every PDF in this folder to match what is inside it".

In **Plan** mode you get a list of the forty old and new names, and nothing has moved yet. You spot that three invoices would lose their number, say so, and get a corrected plan. You approve it with auto mode, and the renaming runs while you read your mail.

In **Manual** mode you would have approved forty commands you could not read, and found the three broken names afterwards.

## Why it matters for you

This is the dial that turns "AI on my computer" from an act of faith into a decision you make for each task. The safe way to work is not to watch every single action. It is to agree on the plan first, and then let it work.

> [!tip] The question is not "is this dangerous"
> It is "if this goes wrong, how hard is it to undo". Keep your original files somewhere else, or keep a copy, and most mistakes cost you a minute. That is worth more than any permission mode.

## Related

- [[Harness]] - the part that stops and asks
- [[Tool]] - what it is asking permission to use
- [[Project]] - the folder the permission applies inside
- [[Prompt]] - where you set the limits in your own words
- [[Claude Code in the terminal]] - where to find the mode indicator
- [[Claude Code cheat sheet]] - the four modes with the label each one shows
