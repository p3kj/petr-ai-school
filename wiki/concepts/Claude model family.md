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

Anthropic sells its [[Model|models]] in exactly those four tiers. Every tier reads text and images, writes text, and works as the brain of [[Claude Code]]. What changes is how deep it thinks, how fast it answers and what it costs. Facts below are as of 29 September 2026; names and prices move every few months, sources are at the bottom.

## The four tiers at a glance

| Tier | In one line | Best for | Speed | Price per million [[Token\|tokens]] (in / out) | Sees at once |
| --- | --- | --- | --- | --- | --- |
| **Claude Fable 5.1** | The most capable model you can get | Hours-long agent runs, deep research, analysis carried through to a finished document | Slowest | $10 / $50 | 1M tokens |
| **Claude Opus 5.5** | The one to start with, and strong at hard work | Complex multi-step tasks, planning, large projects, anything with many files | Moderate | $4 / $20 | 1M tokens |
| **Claude Sonnet 5.5** | Speed and intelligence in balance | Everyday work: drafting, summarising, data analysis, most agent tasks | Fast | $2 / $10 | 1M tokens |
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

### Claude Sonnet 5.5

Released on 28 September 2026, replacing Sonnet 5 (still available as an older model). Anthropic's line for it: "The best combination of speed and intelligence." And from the announcement: "a clear upgrade over Claude Sonnet 5, runs 30%+ faster, and costs up to 30% less for most work." Good for writing and editing, summarising documents, analysing a spreadsheet, running everyday agent tasks. Its default [[Effort|effort]] in Claude Code and the Claude apps is **medium**, like Opus 5.5.

On most of Anthropic's own tests it comes close to Opus 5.5. On the independent test below, at the default effort, Opus 5.5 is 10 points higher (51 against 41) and costs about 2.3 times as much per task. Opus 5.5 reaches 56 at xhigh effort. Sonnet 5.5 reaches 56 only at max, and then costs more than twice as much per task. So: pick Sonnet 5.5 for everyday work, when speed matters, or to see if a lighter model is enough. For a hard task, on this test, moving up to Opus 5.5 was cheaper than turning Sonnet 5.5 up to max.

### Claude Haiku 4.5

"The fastest model with near-frontier intelligence." Half the price of Sonnet 5.5 and noticeably quicker, at the cost of some depth and a smaller context window. Good for short, clear tasks in bulk: classify these 500 emails, extract dates from these forms, answer a quick lookup. Claude Code also uses Haiku behind the scenes for helper jobs. You will rarely pick it by hand; in Claude Code you can with `/model haiku`.

A successor is coming: on 22 September Anthropic said "Claude Sonnet 5.5 and Claude Haiku 5.5 will follow in the coming weeks". Sonnet 5.5 has arrived; Haiku 5.5 is announced, not released yet. Anthropic lists Haiku 4.5 as retiring not sooner than 15 October 2026.

## Which one you get without choosing

- **claude.ai and the desktop app**: every paid plan (Pro, Max, Team, Enterprise) can use Fable, Opus and Sonnet; pick in the model menu next to the prompt. Max does not unlock extra models, it buys more usage.
- **Claude Code**: starts with Opus 5.5 at medium effort on Pro, Max, Team and Enterprise. Type the [[Slash command|slash command]] `/model` to see the picker, or `/model opus`, `/model sonnet`, `/model haiku`, `/model fable` to switch. `/model sonnet` gives you Sonnet 5.5. `/model opusplan` uses Opus 5.5 to plan and Sonnet 5.5 to do the work, a sensible money-saver. The default stays Opus 5.5.
- **Subscriptions do not bill per token.** The prices above matter if you pay for the [[API]] directly. On a subscription they still matter indirectly: a bigger model uses up your usage allowance faster.

## The second dial: effort

Since 2026 the bigger models have an **[[Effort|effort]]** setting (low, medium, high, xhigh, max) that controls how long they think before answering. Anthropic's own advice: "tuning effort is often a better lever than switching models". In Claude Code, `/effort` opens a slider. Low for quick chores, the default for normal work (medium on Opus 5.5 and Sonnet 5.5, high on Fable 5.1), xhigh or max when the task is genuinely hard and you can wait.

## Effort, price and score together

Tier and effort are two dials, and each turn costs money. An independent [[Benchmark|benchmark]] shows what you get for it:

![[effort-score-cost-claude-2026-09.png]]
*Score against cost per task for each Claude model and effort level. Chart: petr-ai-school, from Artificial Analysis data, 29 September 2026.*

And the price per token, the number on the price list, does not tell you the price of a job:

![[price-vs-task-cost-claude-2026-09.png]]
*Left: list price. Right: what one task of the test cost when both models reach the same score (56). Chart: petr-ai-school, from Anthropic and Artificial Analysis data, 29 September 2026.*

"Cost per task" is what one task of the test cost on average, in US dollars.

| Model | low | medium | high | xhigh | max |
| --- | --- | --- | --- | --- | --- |
| Opus 5.5 | 42 / $0.55 | **51 / $1.34** | 54 / $1.82 | 56 / $3.46 | 58 / $5.98 |
| Fable 5.1 | 47 / $2.37 | 49 / $2.98 | **51 / $3.91** | 53 / $5.98 | 53 / $7.63 |
| Sonnet 5.5 | 36 / $0.41 | **41 / $0.59** | 47 / $1.08 | 52 / $2.74 | 56 / $7.60 |
| Sonnet 5 (older) | 24 / $0.51 | 28 / $1.00 | **32 / $1.79** | 34 / $2.87 | 38 / $5.09 |
| Haiku 4.5 | **17 / $0.28** (no effort setting) | | | | |

*Score on the Artificial Analysis Intelligence Index / cost per task in US dollars, read 29 September 2026. Bold: the default in Claude Code.*

Three things to take from it:

- **Stay at the default** for normal work. For Opus 5.5 and Fable 5.1 the default sits about where the line starts to flatten.
- **One or two steps up** when a task is hard. Max costs a lot more and buys little.
- **Judge a model by the cost of the job, not the price per token.** Sonnet 5.5 is half the price of Opus 5.5 per token. But to reach 56 it needs max effort and costs $7.60 a task, while Opus 5.5 gets there at xhigh for $3.46.

## The same roles at other labs

Every lab sells the same ladder under different names. Same role does not mean identical ability; check the [[Model#Who makes them|benchmark snapshot]] for that. Prices are list prices per million tokens, September 2026, and they change often.

| Role | Anthropic | OpenAI | Google |
| --- | --- | --- | --- |
| Top model, restricted variant exists | Fable 5.1 ($10 / $50); Mythos 5.1 for vetted organisations | GPT-6 Astra (about $10 / $50); enterprise access first, off by default in many workspaces | Gemini 3 Deep Think (a slow "think longer" mode on the top plan) |
| Flagship for hard work | Opus 5.5 ($4 / $20) | GPT-6 Sol (about $2 / $10), released 22 September 2026 | Gemini 3.1 Pro ($2 / $12) |
| Balanced everyday default | Sonnet 5.5 ($2 / $10) | GPT-6 Sol covers this tier too; there is no GPT-6 Terra yet | Gemini 3.8 Flash ($0.75 / $3.75 until end of 2026, then $1.50 / $7.50) |
| Fast and cheap | Haiku 4.5 ($1 / $5) | GPT-6 Luna (about $0.10 / $0.50) | Gemini 3.5 Flash-Lite ($0.30 / $2.50) |

Three things to notice:

- **OpenAI's naming flipped in 2026.** The number is the generation (6), the name is the tier (Astra, Sol, Luna). Same idea as Fable, Opus, Sonnet, Haiku. OpenAI's prices here come from news reports, so they are marked "about".
- **Google's Flash is not the small model.** Gemini 3.8 Flash is Google's recommended default and beats many larger models; Flash-Lite is the cheap one. Google is also the price leader.
- **The top tier is gated everywhere.** Mythos and GPT-6 Astra both exist as "the same model with fewer safety limits" for approved organisations. What you and I can use is the filtered public version, and that is plenty.

## Rules of thumb

1. Start with what your tool gives you by default. In Claude Code that is Opus 5.5 at medium effort, a good choice. Elsewhere it is usually the balanced tier (Sol, Flash). Move up when the result disappoints, not before.
2. Hard or long task, many files, decisions that cost money if wrong: go to the flagship (Opus, Sol, Pro).
3. Something must be researched or produced end to end without you watching: Fable, and give it time.
4. Hundreds of small identical jobs: the fast tier (Haiku, Luna, Flash-Lite).
5. Before switching models, try turning effort up or down.

> [!question] "Bigger is always better, so I should always use the top model."
> Bigger is slower, costs more and eats your usage allowance faster, and for simple tasks the answer is not better. The top model earns its price on hard problems only.

## Sources

- Anthropic: [Models overview](https://platform.claude.com/docs/en/models/overview), [Claude Sonnet 5.5](https://www.anthropic.com/claude-sonnet-5-5), [Choosing the right model](https://platform.claude.com/docs/en/about-claude/models/choosing-a-model), [Claude Fable](https://www.anthropic.com/claude/fable), [Claude Code model configuration](https://code.claude.com/docs/en/model-config)
- Google: [Gemini models](https://ai.google.dev/gemini-api/docs/models), [Gemini API pricing](https://ai.google.dev/gemini-api/docs/pricing)
- OpenAI: [GPT-6 Sol and GPT-6 Luna announcement](https://community.openai.com/t/announcing-gpt-6-sol-and-gpt-6-luna/1399925) (22 September 2026), [API pricing](https://openai.com/api/pricing/); the prices above via VentureBeat, a news site, because OpenAI's own page could not be read
- Independent ranking and cost per task for each effort level: [Artificial Analysis Intelligence Index](https://artificialanalysis.ai/), read 29 September 2026

## Related

- [[Model]] - what a model is and who makes them
- [[Token]] and [[Context window]] - what the prices and the "sees at once" column measure
- [[Effort]] - the second dial in detail
- [[Benchmark]] - where the charts come from, and how to read one
- [[Claude Code in the terminal]] - `/model` and `/effort` in practice
