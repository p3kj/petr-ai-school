# Writing for the students

Applies to everything a student can read: `wiki/`, `lectures/`, README files.

## Who reads this

Smart professionals from any department who are not programmers. They have used AI chat websites and want to get real work done with an agent. Assume no programming knowledge and no prior mental model of how AI systems are built. Never talk down; treat basics as a shared refresher, not a gap.

## Four ideas to reinforce everywhere

1. **Files first.** Work lives in files and folders. The same folder can be opened by Explorer, VS Code or Claude Code; it is one folder.
2. **Tool-agnostic.** Fundamentals transfer between AI products. Teach the idea, then show it in Claude.
3. **Client-agnostic.** Terminal, desktop app, VS Code and JetBrains are windows onto the same agent.
4. **AI = model + harness + tools.** The model thinks, the harness runs the loop, the tools act. More tools, more the agent can do. A chat website is a model with almost no tools.

## Simple English, always

Most readers are not native English speakers. Many are very capable and would cope with harder words; easier words still serve them better, because reading costs them attention they should be spending on the idea.

- **Short, common words.** Write "look over" not "skim", "use" not "leverage", "happens" not "occurs", "enough" not "sufficient", "start" not "commence", "about" not "regarding". If a word would not appear in a spoken sentence at work, replace it.
- **Short sentences.** One clause, then a full stop. Split anything with two commas and a semicolon.
- **No idioms.** "Paying for itself", "leap of faith", "the ceiling moves", "rubber-stamp" and similar phrases do not translate. Say the plain thing.
- **No rare words for effect.** Not "consequential", "diagnosis", "suspiciously convenient", "crowds out". Plain verbs beat clever nouns.
- **Keep technical terms.** `CLAUDE.md`, token, context window and the rest stay exactly as they are; they are the vocabulary of the course. It is the English around them that gets simpler.
- Read a paragraph aloud. If you run out of breath or have to go back to the start, rewrite it.

## Windows first, always

Most students are on Windows, a few on Mac, effectively nobody on Linux. `~/.claude` is a Linux and Mac way of writing a path and means nothing to a Windows user, so it must never stand alone.

- **Windows path first, Mac second.** In tables, lists and prose, in that order. Skip Linux unless the page is about Linux.
- **Write the Windows path as `%USERPROFILE%\.claude`**, not `C:\Users\yourname\.claude`. It is shorter, it is correct for every user, and it can be pasted straight into Explorer or the Run box.
- **Mac form is `~/.claude`**, and say once on the page that `~` means the home folder.
- A path with forward slashes and no drive letter looks broken to a Windows reader. Use backslashes in the Windows form.
- `%USERPROFILE%` is for paths a reader types into Explorer, the Run box or prose. It is cmd syntax and does **not** work in PowerShell, so inside a ```powershell block write `$HOME\...` instead.

### Getting to a hidden config folder on Windows

Nobody finds `%USERPROFILE%\.claude` by clicking. Whenever a page sends a reader there, give them one of these, in this order:

1. **Do not go there at all.** `/memory` inside Claude Code lists the instructions files and opens the one you pick in your editor, creating it if it does not exist. Prefer this to any file-browsing instructions.
2. **Explorer address bar.** Press Ctrl + L, type `%USERPROFILE%\.claude`, press Enter. Explorer expands the variable and jumps there.
3. **The Run box.** Windows key + R, same text, Enter.

Then tell them to pin it to Quick access so they never need the trick twice.

## How to write

- Analogy from everyday work first, then the concept, then a concrete example the reader can try on their own machine.
- Petr writes the opening analogy on many pages himself. Keep his wording and his voice; fix only real spelling and grammar mistakes, and do not smooth it into something more polished.
- When a common belief is wrong, state the belief, then the correction, then the reason. Phrase it as "many people believe", never "you probably think".
- One idea per page or slide. If it needs a scrollbar, split it.
- Plain English. Short sentences. Every technical term links to its concept note on first mention: `[[Context window]]`.
- Prefer "what this means for your work" over "how it works inside".
- Hands-on steps: show the action in at least two clients when they differ (terminal and VS Code).
- No em dashes. Use a plain dash, a colon, or a new sentence.
- Petr leaves notes in the source as HTML comments (`<!-- ... -->`). They are instructions for the next edit. Act on them, then delete the comment; never publish one.
- No jokes at the reader's expense. Humour is fine when it is about the technology.
