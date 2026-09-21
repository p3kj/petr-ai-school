---
title: Usage limits
description: Paid plans give you an amount of work per five hours and per week. When you run out, the agent stops until the window resets. Why it happens and how to avoid it.
aliases:
  - usage limit
  - rate limit
  - quota
  - running out of usage
tags:
  - concept
---

You are not charged per message or per task when you are on a subscription plan. You have limits instead.

It works like a mobile data plan. Nobody counts your messages, but you have an allowance, heavy use finishes it faster than light use, and when it is gone you wait for it to reset.

## The two windows

On Pro and Max plans your usage is measured in two windows at the same time:

- **Five hours.** It starts with your first message and resets five hours later. This is the one you will meet on a busy afternoon.
- **One week.** A bigger allowance covering all models. It resets at a fixed time each week, set for your account.

What gets counted is [[Token|tokens]], not messages. One short question inside a long conversation costs more than the same question in a fresh one, because the whole [[Context window|context window]] is read again on every turn. Agent work costs more than chatting, because reading ten files and running four commands is ten files and four commands of text.

The [[Model|model]] you choose matters most. Opus uses much more of your allowance than [[Sonnet]] for the same job, and [[Haiku]] uses the least. Max plans come in two sizes, 5x and 20x the Pro allowance.

Type `/usage` in [[Claude Code]] to see where you stand. On claude.ai the same thing is under Settings, then Usage, with progress bars.

## What to avoid

- **Do not go back to a long old conversation.** Picking up a big conversation from yesterday, or from several hours ago, is the fastest way to empty your allowance. Everything in it has to be read again from the start, so the bigger it was, the more it costs to say one more sentence to it. Start a new conversation and point it at the files instead.
- **Do not use a strong model for simple work.** Reformatting text, renaming files, tidying a list: use [[Sonnet]] or even [[Haiku]]. They are fast and cheap. You do not need the deep thinking of [[Opus]] or [[Fable]] to change a date format.
- **Do not keep one conversation open all day.** Type `/clear` when you move to a different task. It costs nothing and it drops the pile of context you are otherwise paying for on every single turn. See [[Attractor effect]] for the other, bigger reason to do this.
- **Do not paste long documents into the chat.** Put the file in the [[Project|project]] folder and say "read the contract in this folder". Pasted text sits in the conversation and is paid for again on every turn after that. A file is read when it is needed.
- **Do not ask for work that is already done.** If the result is in a file, point at the file. Asking the agent to redo it from memory pays twice for the same thing.
- **Do not send a vague request to an expensive model.** A vague question to Opus is the worst of both: it costs the most and comes back needing three rounds of correction. A clear [[Prompt|prompt]] to Sonnet usually beats a lazy one to Opus, and costs a fraction.
- **Do not run several sessions at once without meaning to.** The allowance belongs to your account, not to the window. Three agents working in three folders spend it three times as fast.

## Example

Monday afternoon, three hours into a big job, the agent stops and tells you the limit resets at 18:40.

Nothing is broken and nothing is lost. The [[Project|project]] folder has everything finished so far, and you can carry on later. Looking back, the cause is usually easy to see: one conversation ran from lunch until the afternoon and was still carrying every file it had read in that time.

## Why it matters for you

This catches people in their first week and feels like a punishment. It is not. Three habits remove most of it: start a new conversation for a new task, match the model to the job, and keep your standing context in an [[Instructions file|instructions file]] rather than retyping it.

If you reach the limit often on Pro, that is useful information about how much you are getting out of this. Look at the Max plan before you look for tricks.

## Related

- [[Token]] - the unit being counted
- [[Context window]] - why long conversations cost more
- [[Claude model family]] - what each tier costs you
- [[Attractor effect]] - the other reason to start fresh conversations
- [[Instructions file]] - context you pay for once per session, not per turn
