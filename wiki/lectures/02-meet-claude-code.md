---
title: "02 · Meet Claude Code"
description: "Second session. A hands-on tour of Claude Code: start it in a folder, watch it use tools, learn the commands, keys and modes, and set up a status line."
tags:
  - lecture
draft: true
---

<iframe src="/static/slides/02-meet-claude-code.html" title="Slides: Meet Claude Code" loading="lazy" allow="fullscreen" allowfullscreen style="width:100%;aspect-ratio:16/9;border:0;border-radius:6px;background:#fff"></iframe>

<p><a href="/static/slides/02-meet-claude-code.html" target="_blank" rel="noopener" data-router-ignore data-no-popover="true">Open slides full screen</a> · <a href="/static/slides/02-meet-claude-code.pdf" data-router-ignore data-no-popover="true">Download PDF</a> <small>(click the slides once, then use the arrow keys)</small></p>

## What we covered

- What surprised you in [[Your first session|homework 01]]: it asked before writing, it could not see other files, it read the PDF, it made a mistake. All of those are the lesson.
- Myth of the week: "AI on my computer is a different, scarier AI." Same [[Model|model]] as the website. The difference is the [[Tool|tools]] it may use, and you watched every one of them.
- Starting [[Claude Code]] in a folder, in four [[Client|clients]]: [[Claude Code in the terminal|terminal]] (Windows: right-click, Open in Terminal; Mac: drag the folder onto Terminal), [[Claude Code in VS Code|VS Code]], the [[Claude Code in the desktop app|desktop app]]. Same folder, different window.
- Reading the screen: the model and folder at the top, the `>` line where you type, the [[Permission mode|mode]] label at the bottom.
- Watching the tools. Every ⏺ line in the conversation is a tool the model asked for and the [[Harness|harness]] ran. Ctrl + O shows the full transcript.
- [[Chat Work and Code|Chat, Work and Code]] seen live: Chat is the model alone, Work is the model with tools inside one folder, Code is the model with every tool on your computer and you set the mode.
- [[Slash command|Slash commands]]: type `/` and a menu opens. The ten to know first are on the [[Claude Code cheat sheet|cheat sheet]].
- Six keys: Esc, Esc Esc, Shift + Tab, arrow up, Tab and `?`.
- [[File mention|Pointing at files]] with `@`, by dragging a file in, or by pasting a screenshot.
- Live demo: [[Set up a status line|a status line]] in one sentence with `/statusline`. It set itself up by writing two files, and you saw each step.
- Models and [[Effort|effort]]: `/model` picks the brain from the [[Claude model family]], `/effort` sets how long it thinks. A risky task gets a stronger model, not a cheaper one.
- The [[Context window|context window]] as a whiteboard: `/context`, `/clear`, `/resume` and `/compact`. A [[Session|session]] is one whiteboard, and the old ones are kept.
- [[Permission mode|Permission modes]] with Shift + Tab: Manual, Accept edits, Plan, Auto, and the label each one shows. The habit is Plan, then Auto.
- Your turn: a plan for `index.md`, approved with "Yes, and use auto mode", then undone with Esc Esc.

## Key takeaway

Every ⏺ line is a tool. The model thinks, the harness acts, and you set how much it may do. Once you have watched that loop run on your own files, there is nothing left to be afraid of. Esc stops it, Esc Esc undoes file edits, and it works only in the folder you opened.

## Homework

1. Make the status line yours. Tell `/statusline` what you want to see, in your own words. The guide [[Set up a status line]] has the manual way if the command does not work for you.
2. One real task. Copy a messy folder of your own, open Claude Code in the copy, switch to Plan mode and ask it to sort the files into subfolders and to put anything it is unsure about into a folder called `_review`. Read the plan, then choose "Yes, and use auto mode".
3. Find one [[Slash command|slash command]] we did not cover and bring what it does. `/help` lists them all.
4. Bring one answer to the next session: which tool call surprised you?

> [!tip] Work on a copy
> Copy the folder first and let Claude work in the copy. The original stays where it is. Esc Esc can undo file edits inside a session, but a copy costs nothing and covers every case.

## Terms from this lecture

[[Slash command]] · [[Session]] · [[Effort]] · [[File mention]] · [[Permission mode]] · [[Context window]] · [[Tool]] · [[Harness]] · [[Model]] · [[Claude model family]] · [[Chat Work and Code|Chat, Work and Code]] · [[Terminal]] · [[Project]]
