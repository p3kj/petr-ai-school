---
title: Verification
description: "Checking what the AI gave you: which parts are worth checking, how to make the agent check its own work, and why sounding right proves nothing."
aliases:
  - verify
  - verifying
  - fact-checking
  - checking AI output
tags:
  - concept
---

AI is like a junior colleague on steroids. Very fast, reads everything, eager to deliver. You would not pass their work straight to the customer though, would you? You also do not want to read every line of it yourself. That balance comes with time: you learn what to check and what to let through.

Verification is learning that on purpose instead of by accident.

A [[Model|model]] writes the words that fit best after the words that came before. Fitting well is not the same as being true.

And you cannot hear the difference. A wrong answer comes out just as calm and well organised as a right one. There is no nervous voice and no hesitation to warn you. So the question is never "does this sound right". It is "which part of this would cost me if it were wrong", and then you check that part.

## What to check almost every time

- **Numbers.** Totals, dates, percentages, anything it added up. Check two of them against the source.
- **Names and links.** People, companies, article titles, web addresses, paragraph numbers in a contract. This is where an invented answer is most likely, and where being wrong looks worst.
- **Anything that is exactly what you hoped for.** If the answer is very convenient, check that one first. The way you asked the question may have produced it: see [[Attractor effect]].

## Make the agent do the checking

This is the part that changes with an [[Agent|agent]], and it is the reason this page exists.

A chat model asked to check itself can only think again. An agent can go and look. "Read the source file again and confirm that every number in your table is really there" is a job it can carry out, with [[Tool|tools]], against the actual file.

So you do not have to choose between trusting it and doing the work yourself. You ask it to prove the part that matters.

## Example

You ask for a summary of four contracts, with the notice period for each one in a table.

Then you ask: "Go through each contract again and quote the exact sentence you took the notice period from."

It reads the files again and quotes four sentences. On the third one it tells you the contract counts the period in working days, which its table had not said. The check took you eight seconds to ask for and saved you a wrong answer to a client.

## Why it matters for you

Whatever you send out has your name on it, not the AI's.

That does not mean checking everything. Checking everything would take longer than doing the work, and then there was no point. It means knowing where mistakes actually happen and spending thirty seconds there.

Best of all, ask for the check up front, as part of the request. That is the optional fifth part of the [[Prompt|prompt]] structure, **Check**: say how the agent should confirm it is finished. An agent that checks before it reports back catches most of its own mistakes. The ones it misses are the ones that needed your judgement anyway.

## Related

- [[Prompt]] - Role, Context, Command, Format and Check
- [[Attractor effect]] - why the answer you hinted at comes back to you
- [[Model]] - why true and false come out sounding the same
- [[Tool]] - what lets an agent look instead of guessing again
- [[Connector]] - text that arrives from outside needs the same suspicion
