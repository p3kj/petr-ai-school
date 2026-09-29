---
marp: true
theme: sketch
paginate: true
size: 16:9
title: Becoming the orchestrator
description: Fifth lecture - stop waiting for one agent. Hand smaller tasks to helpers, run several sessions at once, let Claude run a whole team, and learn the five habits of the person in charge.
author: Petr Jaroš
header: 'petr-ai-school'
footer: 'AI School - #5 Becoming the orchestrator | CC BY-SA 4.0'
draft: true
---

<!-- _class: lead -->
<!-- _paginate: false -->
<!-- _header: '' -->

# Petr's AI School

## 05 - Becoming the orchestrator

---

## What happened?

### Homework 04

- Which weekly task did you turn into a skill?
- Which step became a script?
- Did anything run on a schedule? Did it work?

---

<!-- _class: lead -->

## The orchestrator

The person who hands out the work, keeps it moving and checks what comes back.

Like a conductor: plays no instrument, but gives every player a part and listens to all of them.

Today, the agents play. You conduct.

<!--
If you want an opening clip, like the Commando clip in lecture 03, pick one and play it from YouTube. No still from a film in the deck: the deck is CC BY-SA.
-->

---

## Myth of the week

> "Working with AI is one conversation. I type, I wait, I read."

- The agent works on its own for minutes. You saw the loop in lecture 02.
- While it works, you can start the next one.
- Your job moves from **doing** the work to **handing it out** and **checking** it.

---

## Where most of us are today

<div class="cols-3">
<div>

<span class="stat">1 min</span>
<span class="stat-label">you type the task</span>

</div>
<div>

<span class="stat">8 min</span>
<span class="stat-label">you watch it work</span>

</div>
<div>

<span class="stat">3 min</span>
<span class="stat-label">you read the result</span>

</div>
</div>

Two thirds of that time, you are waiting.

<span class="caption">One typical task, as an example. Not a measurement.</span>

---

<!-- _class: tight -->

## Four steps up

| Step | You | The agents |
| --- | --- | --- |
| 1. Walk away | start it, come back when called | one agent, one task |
| 2. Helpers | one conversation | one agent hands smaller tasks to helpers |
| 3. Several sessions | you run each one | several agents, several tasks |
| 4. A team | you give the goal | Claude runs many agents for you |

<div class="box key">

Every step keeps you a little further from the keyboard, and a little more in charge.

</div>

---

<!-- _class: tighter -->

## Who is who

| Word | What it is | Who starts it |
| --- | --- | --- |
| **Agent** | one Claude working on a task: think, use a tool, look, repeat | you |
| **Session** | one conversation with one agent. A new window or tab is a new session | you |
| **Helper** (subagent) | an agent that your Claude starts for one smaller task. Only its result comes back | your Claude |
| **Workflow** | a small program Claude writes that runs many helpers and compares their answers | your Claude, when you ask |
| **Agent team** | a lead agent and a few teammates that message each other | your Claude (switched off by default) |

<div class="box tip">

You start sessions. Your Claude starts helpers.

</div>

---

## Step 1: walk away

- Plan first, then Auto. You know this from lecture 02.
- Then **do something else**. Answer an email. Get a coffee.
- Let it tell you when it finishes or needs you.

<div class="cols">
<div>

**Desktop app:** a Windows notification comes by itself when a session finishes while you are looking at something else.

</div>
<div>

**Terminal:** ask Claude once: `Set preferredNotifChannel to terminal_bell in my Claude Code user settings.` From then on the terminal gives a signal when Claude finishes or waits for you.

</div>
</div>

<!--
The documented setting is preferredNotifChannel: "terminal_bell" in the user settings (%USERPROFILE%\.claude\settings.json, Mac: ~/.claude/settings.json). Claude Code sends a desktop notification by itself only in Ghostty, Kitty and iTerm2.
Test on the teaching laptop first: what the bell does in Windows Terminal (a sound, or the tab or taskbar flashes), and with the sound off.
-->

---

## Step 2: helpers

> You ask an assistant to read twelve offers. The assistant comes back with one page, not twelve folders on your desk.

- A **subagent** is a helper agent with its own clean whiteboard.
- It does the smaller task. Only the result comes back to you.
- The helper's whiteboard fills up. Yours stays clean.

<div class="box tip">

Ask for it: `Use a subagent to ...` or `one subagent per file`.

</div>

---

<!-- _class: tight -->

## Live demo: twelve offers, twelve helpers

<div class="box">

`In the offers folder there are twelve supplier offers. Use one subagent per offer. Each one returns: supplier, total price, delivery date, payment terms, anything unusual. Then put it all in comparison.csv and tell me which three to look at first.`

</div>

Watch:

- The helpers start **at the same time**, each in its own colour.
- Terminal: `/tasks` lists them, Enter opens one. Desktop app: the Tasks pane.
- `/context` afterwards: the twelve PDFs never landed on your whiteboard.

<!--
Needs the sample folder (brain issue #25). Replace this slide with a real screenshot after the dry run.
In the dry run, note how much of the 5-hour limit the demo used (status line), and say that number on the costs slide.
-->

---

## Why helpers work

<div class="cols">
<div>

### A clean whiteboard
Each helper reads its own files.
You get one page back.
Everything on your whiteboard affects your next answers. What a helper read stays on its own whiteboard.

</div>
<div>

### At the same time
Up to 20 helpers at once in one session.
Twelve offers take as long as the slowest one.

</div>
</div>

<div class="box warn">

Every helper uses your usage limit on its own. More helpers, faster to the limit.

</div>

<!--
The first column is the attractor effect from the wiki: whatever is in the context pulls the answers toward it.
-->

---

## Claude has helpers built in

| Helper | Does | Can change files? |
| --- | --- | --- |
| **Explore** | looks through a folder and reports back | no |
| **Plan** | looks things up for Claude while you are in Plan mode. A helper, not the mode itself | no |
| **General-purpose** | any smaller task | yes |

You do not have to name them. Claude picks one by itself when a task needs a lot of reading. Now you know what the name on the ⏺ line means.

---

<!-- _class: tighter -->

## Your own helper

A helper is described in a file, like a job description. Ask Claude to write it: `Make me a subagent called fact-checker that ...`

```markdown
---
name: fact-checker
description: Checks every number, date and name in a draft against
  the files in this folder. Use before anything goes to a client.
tools: Read, Grep, Glob
model: sonnet
---
For every number, date and name in the draft, find where it comes
from in this folder. List what you could not find. Never change the draft.
```

**In every folder:** `%USERPROFILE%\.claude\agents\` (Mac: `~/.claude/agents/`, `~` is your home folder) · **This project only:** `.claude\agents\` in the folder

Then use it: `Use the fact-checker on draft.md.`

<!--
Test on the teaching laptop first: whether a new helper shows up without restarting Claude Code, and whether a helper with only Read, Grep and Glob can read a .docx file. If not, leave out the tools line for Word drafts, or use Markdown drafts in the demo.
-->

---

## Skill or helper?

| | Skill | Helper (subagent) |
| --- | --- | --- |
| What it is | a recipe | another cook |
| Whiteboard | yours | its own, clean |
| What you see | every step | only the result |
| Good for | how we do this job | a smaller task, or a check by someone new |

<div class="box tip">

They work together: a helper can follow a skill.

</div>

---

## Let someone new check it

> The person who wrote it is the worst person to check it.

- The writer has the whole story on its whiteboard. It sees what it meant, not what it wrote.
- A reviewer helper starts clean. It sees only the text and your checklist.

<div class="box task">

`When the draft is done, give it to a new subagent to check against checklist.md. Fix what it finds. Show me the list of problems and the fixed draft.`

</div>

<span class="caption">checklist.md: a short list of what to check, written by you.</span>

---

## Step 3: several sessions

Three pots on the stove. Each one cooks by itself. You walk between them.

<div class="cols">
<div>

**Desktop app:** **+ New session** or <kbd>Ctrl</kbd> + <kbd>N</kbd> (Mac: <kbd>Cmd</kbd> + <kbd>N</kbd>). The sidebar shows them all. <kbd>Ctrl</kbd> + click: two side by side.

</div>
<div>

**Terminal:** right-click the folder again, **Open in Terminal**, then `claude`. A new tab with <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>T</kbd> opens in your home folder, not in your project.

</div>
</div>

<div class="box tip">

Give each one a name. Terminal: `/rename invoices`. Desktop app: click the session title. Three sessions called "New session" are hard to tell apart.

</div>

---

<!-- _class: tighter -->

## One screen for all of them

`claude agents`, typed in the terminal, opens the **agent view**. (Not the same as `/agents` inside Claude, which lists your helpers.)

| Group | Means |
| --- | --- |
| Needs input | it has a question or needs your yes |
| Working | it is busy |
| Ready for review | finished, waiting for you to check |
| Completed | done |

- Type a task at the bottom: a new agent starts in the background.
- <kbd>Space</kbd>: a quick look, and you can answer. <kbd>Enter</kbd>: open the whole session. <kbd>←</kbd>: back.
- `/bg` inside a session: it keeps working in the background, and you get your screen back.

<span class="caption">Terminal only; in the desktop app the sidebar does this job. Early version, September 2026: the keys may change.</span>

<!--
There is also a Pinned group. On Windows, pressing ← within about half a second of opening a session shows "Ambiguous ←, press again to detach".
Test on the teaching laptop first: claude agents on Windows.
-->

---

<!-- _class: tight -->

## Live demo: three jobs at once

1. `Save every invoice PDF from September into invoices\2026-09.` Uses `gws` from lecture 03.
2. `/acme-update` The skill from lecture 04.
3. `Find five public webinars on AI for sales teams this autumn. Save them to webinars.md with dates and links.`

Then: which one needs you? Answer it. Which one finished? Check it.

<!--
Run from the agent view so the groups are visible. Internal data only on the live screen, never in the slides.
-->

---

## One agent, one set of files

- Two agents editing the same file: the last one to save wins.
- In a normal folder (without Git), all sessions write into the same place. Nothing keeps them apart.
- So give each one **its own files** or **its own folder**.
- On Windows, close the file in Excel first. While it is open, Claude cannot save it.

<div class="box note">

With Git, each agent can get its own copy of the folder (a worktree). That comes with the Git week.

</div>

---

## Your gear goes with every agent

- Every new session starts with your instructions file (`CLAUDE.md`), your skills and your connectors.
- Most helpers read `CLAUDE.md` too, and can be given a skill.
- What you built in weeks 03 and 04 now works in every session at once.

<div class="box warn">

And every one of them acts as you, through every way in.

</div>

<!--
The built-in Explore and Plan helpers do not read CLAUDE.md. Every other helper does.
-->

---

<!-- _class: tight -->

## Step 4: let Claude run the team

<div class="cols">
<div>

### Workflow
Claude writes a small program that runs many helpers, compares their answers, and gives you one result.
Put the word `ultracode` in your request, or say `use a workflow`.
Watch it with `/workflows`.
Save a good one: it becomes your own slash command.

</div>
<div>

### Agent team
A lead and a few teammates. They message each other and share one task list.
**Experimental**, switched off by default.
Uses a lot: every teammate is a full session.

</div>
</div>

<span class="caption">On Pro, switch workflows on first: `/config`, the Dynamic workflows row.</span>

<!--
Skill vs saved workflow, if asked: a skill is instructions your one Claude follows. A saved workflow runs many helpers.
Agent teams: the docs give about 7 times the tokens of a normal session when teammates run in Plan mode. On Team and Enterprise plans an admin can switch workflows off.
-->

---

## Live demo: `/deep-research`

<div class="box">

`/deep-research Which EU rules on AI apply to a 50-person events company in 2026, and what do we have to do?`

</div>

- It searches the web from several angles at once.
- Several helpers check each claim against the sources. A claim that fails the check is left out.
- You get one report with sources. Like Research on claude.ai, but you can watch every step.

`/workflows`: every phase, how many agents, how many tokens.

<!--
Uses a lot of the usage limit. Start it early in the lecture and come back to it. Have a finished report ready in case it runs long.
It needs the Web Search tool. On Pro, workflows must be switched on in /config first, and the default size is small.
-->

---

## The orchestrator's five habits

1. **Split.** Only parts that do not need each other.
2. **Brief.** Every helper starts with an empty whiteboard. Give your Claude enough detail to write each helper a full task.
3. **Separate.** One agent, one set of files.
4. **Check.** A new helper reviews. You check the end result.
5. **Budget.** Ten agents use your usage limit about ten times as fast.

---

<!-- _class: tighter -->

## A brief, not a hint

A **brief** is the full task description a helper gets. Your main Claude writes one for each helper. Your job: give it enough detail to do that.

<div class="cols">
<div>

### A hint
`Look into the suppliers.`

</div>
<div>

### A brief
`Read only offers\alfa.pdf. Return supplier, total price, delivery date and payment terms as one line of CSV. If a value is missing, write "missing". Do not open other files.`

</div>
</div>

Anthropic's own research helpers once got briefs that were too short. The task was about 2025. One helper studied 2021 instead. Two others searched for the same thing.

<span class="caption">Anthropic Engineering, "How we built our multi-agent research system", June 2025</span>

<div class="box tip">

Role, Context, Command, Format from lecture 04: a helper needs all four. It knows nothing else.

</div>

---

## When more agents do not help

- **Each step needs the one before.** Write the offer, then the email about the offer.
- **The job is small.** Explaining it takes longer than doing it.
- **You cannot check as fast as they finish.** The pile of results just grows.

The Claude Code docs say it too: three helpers with one clear job each often do better than five without one.

<!--
Exact wording (agent teams docs): "Three focused teammates often outperform five scattered ones."
-->

---

<!-- _class: tight -->

## You are the slow part now

> "I run 5 Claudes in parallel in my terminal. I number my tabs 1-5, and use system notifications to know when a Claude needs input." <span class="caption">Boris Cherny, who created Claude Code, January 2026</span>

- He builds software all day. You do not need five.
- The agents are fast. Your attention is not.
- An agent waiting for your yes is an agent doing nothing.
- Start with **two**. Then three. Grow when checking feels easy.

<div class="box tip">

Check in batches: let three finish, then review all three.

</div>

---

## What it costs

- Every agent uses your usage limit on its own.
- One rule: ten agents at once use it about ten times as fast.
- Worth it when the job is worth it. Not for renaming three files.
- `/usage` shows how much went to helpers.

<div class="box tip">

Helpers do not need the strongest model. `model: sonnet` or `haiku` in the helper's file.

</div>

<!--
Say the real number from the dry run of the twelve-offer demo: how much of the 5-hour limit it used.
Background for questions: Anthropic Engineering (June 2025) measured an agent at about 4 times the tokens of a chat, and a team of agents at about 15 times. The "ten times as fast" rule is from the agent view docs.
-->

---

## Everyone is building this

- **Microsoft 365 Copilot:** runs many tasks at once in the background. (Its "Cowork" is Microsoft's, not Claude's Work.)
- **ChatGPT desktop app:** "Run projects in parallel."
- **GitHub, Cursor, Google Antigravity:** apps for programmers, each with one screen to start many agents and watch them.

<div class="box key">

The names differ. The habits are the same: split, brief, separate, check, budget.

</div>

<span class="caption">Microsoft 365 blog, March 2026 · OpenAI, ChatGPT desktop app page, 2026</span>

<!--
Cut if short on time.
-->

---

## Where this goes next (not today)

- **Cloud sessions:** agents that keep working when your laptop is off. They need a Git repository, usually on GitHub, so they come after the Git week.
- **Claude Code Projects** (not the Projects you know from claude.ai): one conversation where Claude starts and tracks the sessions for you. Beta, Pro and Max only, opening slowly (waitlist).
- **Remote Control:** check and answer your sessions from the phone. On company plans, an owner must switch it on.

<!--
Cut if short on time.
-->

---

<!-- _class: tight -->

## Which one when?

| The job | Use |
| --- | --- |
| a smaller task with a lot of reading | a helper (subagent) |
| the same small job many times: per file, per customer | one helper each, or a workflow when it is dozens |
| a draft that needs checking | a new reviewer helper |
| different tasks of your own | several sessions, the agent view |
| a question that needs its sources checked | `/deep-research` |
| each step needs the one before | one session. Parallel does not help |

---

## Careful

<div class="box warn">

- Every agent acts as you, through every way in: files, programs, connectors.
- Plan each task first, then let them run in Auto. Never start Claude with the setting that skips every question (`--dangerously-skip-permissions`) to save clicks.
- An agent waiting for your yes is not working. Its question shows in your main session or under Needs input.
- Two agents, one file: the last one wins.
- Watch `/usage`.

</div>

---

<!-- _class: tighter -->

## Your turn

<div class="box task">

Pick one:

1. In a small local folder (not OneDrive, a few hundred files at most): `Use three subagents at the same time. One lists the files older than a year, one finds duplicates, one finds files over 50 MB. Do not change anything. Give me one short report.` A small job on purpose: just to see the helpers start.
2. Open a second session (Desktop: <kbd>Ctrl</kbd> + <kbd>N</kbd>; terminal: right-click the folder, Open in Terminal) and give each one a different task, for example one sorts files and one writes a summary. Switch between them.
3. `Make me a subagent called reviewer that checks a text for unclear sentences and for dates or deadlines we promised. It must not change the file.` Use it on something you wrote.

</div>

<!--
Test on the teaching laptop first: whether the new reviewer helper shows up without a restart, and whether it can read a .docx file.
-->

---

<!-- _class: tight -->

## Homework

1. Pick one job from your work with parts that do not need each other: 10 documents, 5 competitors, 20 customers. One helper each, then one table.
2. For one day, keep two sessions running on different tasks. Write down every time you waited for an agent, and every time an agent waited for you.
3. Make one helper of your own: a reviewer with your checklist.
4. Bring one job where more agents did not help, and why.

---

## Terms from today

Subagent (helper) · Session · Agent view · Workflow · Agent team · Orchestrator · Context window · Attractor effect · Skill · Connector · Usage limits · Permission mode · Verification (checking)

All of them are linked from the lecture page in the wiki.

---

<!-- _class: lead -->
<!-- _paginate: false -->
<!-- _header: '' -->

# Hand out the work. Check what comes back.

## Questions?
