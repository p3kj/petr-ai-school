---
title: Claude model family
description: "Fable, Opus, Sonnet, Haiku: what each tier is for, how fast and how expensive it is, which one you get without choosing, and the OpenAI and Google equivalents."
aliases:
  - Claude models
  - model tiers
  - which model
  - Fable
  - Mythos
  - Opus
  - Sonnet
  - Haiku
tags:
  - concept
---

Think of a consulting firm. The intern is quick and cheap and fine for routine work. The consultant handles most projects well. The senior partner takes the hard, long engagements. And there is one world expert the firm keeps on retainer for the problems nobody else can crack. Same firm, same way of working, very different depth, speed and price.

Anthropic sells its [[Model|models]] in exactly those four tiers. Every tier reads text and images, writes text, and works as the brain of [[Claude Code]]. What changes is how deep it thinks, how fast it answers and what it costs. Facts below are as of 23 September 2026; names and prices move every few months, sources are at the bottom.

## The four tiers at a glance

| Tier | In one line | Best for | Speed | Price per million [[Token\|tokens]] (in / out) | Sees at once |
| --- | --- | --- | --- | --- | --- |
| **Claude Fable 5.1** | The most capable model you can get | Hours-long agent runs, deep research, analysis carried through to a finished document | Slowest | $10 / $50 | 1M tokens |
| **Claude Opus 5.5** | The one to start with, and strong at hard work | Complex multi-step tasks, planning, large projects, anything with many files | Moderate | $4 / $20 | 1M tokens |
| **Claude Sonnet 5** | Speed and intelligence in balance | Everyday work: drafting, summarising, data analysis, most agent tasks | Fast | $2 / $10 | 1M tokens |
| **Claude Haiku 4.5** | Fastest, near-frontier | Quick simple tasks, high volume, helper jobs inside bigger tasks | Fastest | $1 / $5 | 200K tokens |

"Sees at once" is the [[Context window|context window]]. One million tokens is roughly 555,000 words, so the top three tiers can hold a shelf of documents in one conversation.

## Each tier in detail

### Claude Fable 5.1 (and Mythos 5.1)

Anthropic's most capable widely available model, built for "the hardest knowledge work and coding problems" and for work that runs a long time on its own. It always thinks before it answers and thinks longer than the others. Use it when Opus at high effort still falls short: a research task that should end in a finished report, an agent that has to work through a hundred files without losing the thread, a decision where being wrong is expensive.

Since 22 September there is a catch: on the general test below, the new Opus 5.5 scores higher than Fable 5.1, for much less. Anthropic now positions Fable for "demanding reasoning and long-horizon agentic work", and for when Opus 5.5 at higher effort still falls short. Try Opus 5.5 first.

Not worth it for quick questions or routine drafting. You wait longer and burn through your usage allowance faster for no visible gain.

**Mythos 5.1** is the same model without the safety filters, available only to vetted organisations through Anthropic's trusted access programmes (mainly cyber-defence research). Fable is the public version: identical brain, plus safeguards that route questions in dangerous areas such as cybersecurity and biology to a less capable model. If you see "Mythos" in the news, that is what it means. OpenAI does the same with GPT-6 Astra, see below.

### Claude Opus 5.5

Released on 22 September 2026, replacing Opus 5 (still available as an older model). Anthropic now says to start with it "for most workloads": "long-running agentic coding and knowledge work", deep reasoning, long tasks. In practice: a project with many files, a plan you want challenged, a document that must be right the first time, an agent left to work for an hour. It is the default in Claude Code on every paid plan.

Two things are new. It is cheaper than Opus 5 was ($4 / $20 instead of $5 / $25). And its default [[Effort|effort]] is **medium**, not high: it gets as far at medium as older models did at high. On the independent chart below it matches Fable 5.1 for a fraction of the cost.

Not worth it for one-line questions or reformatting a table. Sonnet or Haiku do those as well and faster.

### Claude Sonnet 5

"The best combination of speed and intelligence." Good for writing and editing, summarising documents, analysing a spreadsheet, running everyday agent tasks. It is fast, and half the price of Opus 5.5 per token. But the price per token is not the whole story: on the chart below, Opus 5.5 finishes the same test for about the same money, because it needs fewer tokens. Pick Sonnet when speed matters, or when you want to see if a lighter model is enough.

### Claude Haiku 4.5

"The fastest model with near-frontier intelligence." Half the price of Sonnet and noticeably quicker, at the cost of some depth and a smaller context window. Good for short, clear tasks in bulk: classify these 500 emails, extract dates from these forms, answer a quick lookup. Claude Code also uses Haiku behind the scenes for helper jobs. You will rarely pick it by hand; in Claude Code you can with `/model haiku`.

## Which one you get without choosing

- **claude.ai and the desktop app**: every paid plan (Pro, Max, Team, Enterprise) can use Fable, Opus and Sonnet; pick in the model menu next to the prompt. Max does not unlock extra models, it buys more usage.
- **Claude Code**: starts with Opus 5.5 at medium effort on Pro, Max, Team and Enterprise. Type the [[Slash command|slash command]] `/model` to see the picker, or `/model opus`, `/model sonnet`, `/model haiku`, `/model fable` to switch. `/model opusplan` uses Opus to plan and Sonnet to execute, a sensible money-saver.
- **Subscriptions do not bill per token.** The prices above matter if you pay for the [[API]] directly. On a subscription they still matter indirectly: a bigger model uses up your usage allowance faster.

## The second dial: effort

Since 2026 the bigger models have an **[[Effort|effort]]** setting (low, medium, high, xhigh, max) that controls how long they think before answering. Anthropic's own advice: "tuning effort is often a better lever than switching models". In Claude Code, `/effort` opens a slider. Low for quick chores, the default for normal work (medium on Opus 5.5, high on the others), xhigh or max when the task is genuinely hard and you can wait.

## Effort, price and score together

Tier and effort are two dials, and each turn costs money. An independent [[Benchmark|benchmark]] shows what you get for it:

![[effort-score-cost-claude-2026-09.png]]
*Score against cost for each Claude model and effort level. Chart: petr-ai-school, from Artificial Analysis data, 23 September 2026.*

And the price per token, the number on the price list, does not tell you the price of a job:

![[price-vs-task-cost-claude-2026-09.png]]
*Left: list price. Right: what the same test cost at each model's default effort. Chart: petr-ai-school, from Anthropic and Artificial Analysis data, 23 September 2026.*

| Model | low | medium | high | xhigh | max |
| --- | --- | --- | --- | --- | --- |
| Opus 5.5 | 42 / $860 | **51 / $1,627** | 54 / $2,172 | 56 / $4,057 | 58 / $8,708 |
| Fable 5.1 | 47 / $3,158 | 49 / $3,983 | **51 / $5,242** | 53 / $9,063 | 53 / $13,129 |
| Sonnet 5 | 24 / $653 | 28 / $1,218 | **32 / $2,086** | 34 / $3,255 | 38 / $6,998 |
| Haiku 4.5 | **17 / $524** (no effort setting) | | | | |

*Score on the Artificial Analysis Intelligence Index / cost to run the whole test. Bold: the default in Claude Code.*

Three things to take from it:

- **Stay at the default** for normal work. On this chart, the default sits about where the line starts to flatten.
- **One or two steps up** when a task is hard. Max costs a lot more and buys little.
- **Judge a model by the cost of the job, not the price per token.** A model that needs fewer tokens can be cheaper per job even when its price list says otherwise.

## The same roles at other labs

Every lab sells the same ladder under different names. Same role does not mean identical ability; check the [[Model#Who makes them|benchmark snapshot]] for that. Prices are list prices per million tokens, September 2026, and they change often.

| Role | Anthropic | OpenAI | Google |
| --- | --- | --- | --- |
| Top model, restricted variant exists | Fable 5.1 ($10 / $50); Mythos 5.1 for vetted organisations | GPT-6 Astra (about $10 / $50); enterprise access first, off by default in many workspaces | Gemini 3 Deep Think (a slow "think longer" mode on the top plan) |
| Flagship for hard work | Opus 5.5 ($4 / $20) | GPT-5.6 Sol (about $5 / $30) | Gemini 3.1 Pro ($2 / $12) |
| Balanced everyday default | Sonnet 5 ($2 / $10) | GPT-5.6 Terra (about $2 / $12) | Gemini 3.8 Flash ($0.75 / $3.75 until end of 2026, then $1.50 / $7.50) |
| Fast and cheap | Haiku 4.5 ($1 / $5) | GPT-5.6 Luna (about $0.20 / $1.20) | Gemini 3.5 Flash-Lite ($0.30 / $2.50) |

Three things to notice:

- **OpenAI's naming flipped in 2026.** The number is the generation (5.6), the name is the tier (Sol, Terra, Luna). Same idea as Fable, Opus, Sonnet, Haiku.
- **Google's Flash is not the small model.** Gemini 3.8 Flash is Google's recommended default and beats many larger models; Flash-Lite is the cheap one. Google is also the price leader.
- **The top tier is gated everywhere.** Mythos and GPT-6 Astra both exist as "the same model with fewer safety limits" for approved organisations. What you and I can use is the filtered public version, and that is plenty.

## Rules of thumb

1. Start with what your tool gives you by default. In Claude Code that is Opus 5.5 at medium effort, a good choice. Elsewhere it is usually the balanced tier (Terra, Flash). Move up when the result disappoints, not before.
2. Hard or long task, many files, decisions that cost money if wrong: go to the flagship (Opus, Sol, Pro).
3. Something must be researched or produced end to end without you watching: Fable, and give it time.
4. Hundreds of small identical jobs: the fast tier (Haiku, Luna, Flash-Lite).
5. Before switching models, try turning effort up or down.

> [!question] "Bigger is always better, so I should always use the top model."
> Bigger is slower, costs more and eats your usage allowance faster, and for simple tasks the answer is not better. The top model earns its price on hard problems only.

## Sources

- Anthropic: [Models overview](https://platform.claude.com/docs/en/models/overview), [Choosing the right model](https://platform.claude.com/docs/en/about-claude/models/choosing-a-model), [Claude Fable](https://www.anthropic.com/claude/fable), [Claude Code model configuration](https://code.claude.com/docs/en/model-config)
- Google: [Gemini models](https://ai.google.dev/gemini-api/docs/models), [Gemini API pricing](https://ai.google.dev/gemini-api/docs/pricing)
- OpenAI: [GPT-5.6 Sol preview](https://openai.com/index/previewing-gpt-5-6-sol/), [API pricing](https://openai.com/api/pricing/); tier prices above via [DataCamp](https://www.datacamp.com/blog/gpt-5-6-sol-luna-terra) and [Vellum](https://www.vellum.ai/blog/gpt-5-6-sol-terra-luna-explained) after the July 2026 price cut
- Independent ranking and cost per effort level: [Artificial Analysis Intelligence Index](https://artificialanalysis.ai/), read 23 September 2026

## Related

- [[Model]] - what a model is and who makes them
- [[Token]] and [[Context window]] - what the prices and the "sees at once" column measure
- [[Effort]] - the second dial in detail
- [[Benchmark]] - where the charts come from, and how to read one
- [[Claude Code in the terminal]] - `/model` and `/effort` in practice
