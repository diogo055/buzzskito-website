# AI search baseline — 2026-09-03

Brief §12 task 61. This is the number nobody on this project had ever looked at.

## The headline

**buzzskito.ca is cited 1,624 times across AI answer engines, on 216 distinct pages.**

Measured via Ahrefs `site-explorer-ai-responses-count`, `mode=subdomains`, 2026-09-03.

| Platform | Citations | Pages cited |
|---|---|---|
| **All platforms** | **1,624** | **216** |
| Perplexity | 259 | 86 |
| Gemini | 257 | 83 |
| Google AI Overviews | 188 | 66 |
| Google AI Mode | 184 | 74 |
| ChatGPT | 175 | 70 |
| Copilot | 107 | 55 |
| Grok | 0 | 0 |
| *(Google AIO keyword-level)* | *454* | *121* |

## Against the competitive set

| Site | Citations | Pages | ChatGPT | Context |
|---|---|---|---|---|
| orkin.com | 45,841 | 1,732 | 769 | DR 75, 1,019 indexed pages |
| **buzzskito.ca** | **1,624** | **216** | **175** | DR ~2, 358 blog pages |
| ticksafety.com | 474 | 31 | **0** | DR 33 — the micro-site the brief holds up as the model |

Two things fall out of that table:

**1. We already out-cite the model site 3.4×.** The brief names ticksafety.com as the
template to emulate — DR 33, thirty pages, beating its authority through topical focus. On
AI citations we are ahead of it by a wide margin and it earns **zero** ChatGPT citations
against our 175.

**2. We earn 23% of Orkin's ChatGPT citations with ~2% of their domain authority.** Orkin
leads on Perplexity (2,595) and Google AI Mode (2,029) where scale tells. But ChatGPT
citation is far less authority-gated, and that is where a small site can compete.

## What this changes

Stage I was scoped in the brief as *start* optimising for AI. That was the wrong premise.
The site is already a well-cited source and has simply never been measured or deliberately
shaped for it. The work is optimisation, not entry — which makes it much cheaper.

**Grok at 0 is worth noting** but is more likely a coverage artifact of the data source than
a real gap; it should not drive work on its own.

## Where the citations are NOT coming from

GSC gives no AI-surface breakout for this property. Checked every `searchType` (28d):

| Type | Clicks | Impressions |
|---|---|---|
| web | 9,262 | 947,480 |
| news | 0 | 12 |
| image | 1 | 408 |
| discover / googleNews / video | 0 | 0 |

So the AI citation data has to come from Ahrefs; Google is not exposing it here. **Track the
Ahrefs number monthly** — it is the only instrument available.

## Baseline to re-measure against

Re-run the same call on **2026-10-03** and compare:

```
site-explorer-ai-responses-count
  target = buzzskito.ca
  mode   = subdomains
  select = all_platforms,chatgpt,google_ai_overviews,google_ai_mode,gemini,perplexity,copilot
```

| Metric | 2026-09-03 baseline |
|---|---|
| All-platform citations | 1,624 |
| Distinct pages cited | 216 |
| ChatGPT citations | 175 |
| Citations per cited page | 7.5 |

**Citations per cited page is the more honest progress metric than the raw total**, because
the total moves with page count. Orkin sits at 26.5, ticksafety at 15.3, us at 7.5 — so the
gap is depth of citation per page, not breadth of coverage.
