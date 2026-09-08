# Session state — read this first

**Written 2026-09-08.** Live handoff for the affiliate-content project. Read this, then
`.claude/skills/buzzskito-ops/SKILL.md` (the durable rules), then `data/HANDOFF.md` (older
programme state).

---

## 1. Where we are right now

**Branch:** `feat/affiliate-content-sept26` (off `main` at `de5aa6b`). **Never push to main on
this project** — guardrail 3 of the brief.

**Brief:** `docs/godprompts/affiliate-content-2026-09.md` — 8 phases, gated. **Do not pass a
phase gate without explicit approval from Diogo.**

| Phase | Status |
|---|---|
| 0 — Protected pages | **DONE & APPROVED.** `docs/audit/protected-pages.md`, commit `264bf8b` |
| 1 — Classify every page | **STARTED, BLOCKED** — see §2 |
| 2–7 | Not started. Each needs its own approval. |

**Revert path:** `git checkout main && git branch -D feat/affiliate-content-sept26`

### Phase 0 result
185 protected routes, 361 in scope (358 blog articles + 3 `/pest-product-guides/*` hubs).
Classified by **signal inside each file**, not URL pattern — that caught 7 city service pages
carrying no LocalBusiness schema, and 3 `/pest-product-guides` routes that look like service
pages but are the affiliate hubs.

**Standing condition recorded at Phase 0:** 222 blog pages contain a `CTASection` linking to the
quote funnel. Those pages are in scope for content work, but **no phase may remove, move or
weaken that CTA.** It is the route from an affiliate reader to a $1,222 service customer. This
is the one way the project could do real damage while appearing to succeed.

---

## 2. BLOCKER — GSC authentication failed

The last call returned:

```
Authentication failed. Please either:
1. Set up OAuth by placing a client_secrets.json file in the script directory, or
2. Set GSC_CREDENTIALS_PATH or place a service account credentials file at
   C:\Users\buzzs\Documents\mcp-gsc\service_account_credentials.json
   or C:\Users\buzzs\buzzskito-website\service_account_credentials.json
```

**It worked earlier the same session** (several successful pulls), so this is a token expiry or
a dropped credential, not a permissions change. Phase 1 requires a fresh 180-day
page + query pull and cannot proceed without it.

**Before asking Diogo to re-auth, try:** `mcp__gscServer__reauthenticate`. If that fails, he
needs to restore the credentials file at one of the paths above. He is not a developer — give
him the exact path and what the file is.

**Do NOT substitute Ahrefs for this.** The brief says explicitly that Ahrefs' GSC integration
returns incomplete data for this property, and separately `keywords-explorer-overview` and
`keywords-explorer-matching-terms` are **down entirely** (they fail on the free `ahrefs` test
keyword). `serp-overview` and `site-explorer-organic-keywords` do still work.

**Fallback if re-auth is slow:** `data/gsc/` holds an 84-day Canadian pull already validated as
95.8% impression-complete. It is not the 180 days the brief asks for, and it is Canada-only, so
say so plainly rather than passing it off as the requested dataset.

---

## 3. Phase 1 spec, and the one thing I promised to test

Build `docs/audit/page-classification.csv`, one row per URL:
`intent` (commercial / question / other), `expected_ctr` from the brief's benchmark table,
`ctr_residual` = actual − expected, `lost_clicks` = residual × impressions,
`has_affiliate_link`, `word_count`.

**Method note that matters:** pull `page` alone for the metrics (single-dimension pulls are
complete) and `page+query` for intent classification. Multi-dimension pulls silently drop rows —
measured at 59% of clicks missing on one window. Do not compute residuals off the pruned pull.

**The commitment made to Diogo, in writing, before he approved Phase 0:**

The brief's Finding 1 says query type beats title wording and that question-format queries are
unrecoverable. That exact hypothesis was tested on this site last week and **did not survive a
control**. Pooled, the gap is ~3x. Holding the PAGE constant — the 18 Canadian pages carrying
both query types — it collapses to **1.3x**, and question queries won outright on 8 of 18.
Live SERP checks found AI Overviews on **100% of both groups**, so AIO cannot be the
discriminator. See `data/query-shape-finding.md`.

**So Phase 1 must compute residuals BOTH pooled and within-page, and report if they disagree.**
If they do, Tier 4 may be parking recoverable impressions. Diogo knows this is coming and
approved on that basis. Do not quietly skip it.

---

## 4. Live experiments — do not contaminate these

Four registered measurements are running. Anything that changes a title, meta description or
slug on these pages destroys a comparison.

| Experiment | Pages | File | Measures |
|---|---|---|---|
| Slug A/B test | 12 renamed + 12 matched controls | `data/exp-slug-test.json` | **2026-10-15** |
| Title wave 1 | 16 | `data/exp-title-test.json` | 2026-10-15 |
| Title wave 2 | 14 | same file, `wave2` | 2026-10-15 |
| Title wave 3 | 18 | `data/audit-upgrade-targets.json` | 2026-10-15 |

**Pre-committed stop rules.** Slug test: if treatment does not beat control by >=25% on Canadian
clicks per page at six weeks, revert all 12 redirects and `git mv` back. Title waves: if CTR
does not lift >=25% relative, revert.

**No URL may change anywhere on the site before 2026-10-15.** Google's own instruction is
"change only one thing at a time," and the slug test is the only site-specific data that will
ever exist about what renaming costs here.

---

## 5. Pending decisions Diogo owes an answer on

1. **Service-page consolidation.** 78 city pages across 22 cities, most with 4–6 near-duplicates
   (`{city}-mosquito-control`, `{city}-tick-spray`, `pest-control-{city}`,
   `best-mosquito-control-companies-{city}`). Nine URLs compete for "mosquito control toronto";
   42 pages across ten cities produce 4,116 impressions and almost no clicks at positions 15–92.
   **Highest-value structural fix available, and it is on the $1,222 side.** Blocked until
   2026-10-15 because it requires URL changes. Offered to prepare the per-city winner list now.
2. **The Sawyer AwardRow** on `permethrin-canada-yard-clothing-spray`. Health Canada does not
   approve consumer permethrin clothing sprays; the page's false retail claims were corrected
   but the product is still presented as "Best Overall". Commercial call, not a factual one.
3. **Levanta approval** — still the only measured 5x lever in the business
   (CA$16.81/conversion vs $3.32/order). Blocked solely on him.
4. **Amazon reports** — received 2026-09-03, analysed in `data/amazon-reports-2026-09.md`.

---

## 6. What shipped this session (all on `main`, pushed to `diogo`)

| Commit | What |
|---|---|
| `c196573` | Stage E complete — last 3 US pages; fixed 2 pages serving broken images |
| `52ab693` | Killed my own query-shape thesis; measured the CTR-vs-position curve |
| `a1f552b` | Slug A/B test live; fixed 14 pages stranded out of the XML sitemap |
| `fa40753` | Title wave 1 (16 pages) |
| `ad2641f` | Amazon reports analysed — funnel confirmed, Levanta priority overturned |
| `5443860` | Title wave 2 (14) + fixed a cluster-attribution bug |
| `383ef37` | Measured that building pages does not pay (median $0.16/page/month) |
| `fc0e574` | Rank work on 5 pages + corrected a false regulatory claim on the #2 earner |
| `9bc8c43` | Regulatory audit — 333 claims checked, **79 false**, all corrected |
| `68e3c05` | Extracted the 119 verified-false claims as a reusable seed set |
| `05d88ef` | Created the `buzzskito-ops` skill |
| `932f4c4` | Title wave 3 (18) — and killed two approved items that were Ahrefs artifacts |
| `3171bac` | Recorded the URL-structure verdict in the skill |
| `de5aa6b` | Internal link pass wave 1 — 18 starved pages gained links |

Hub repo (`origin`): `45c503e` — lead-source panel answering whether the blog produces customers.

---

## 7. The five things most likely to trip up a fresh session

1. **Ahrefs volume is fiction here.** We rank #1 for "springtails" and get one impression a
   quarter against a claimed 4,300/mo. Size from GSC, always.
2. **Rendered title = META_TITLE + 12 chars** (`| BuzzSkito` template). Measure the built HTML,
   not the source constant — and decode HTML entities first, an apostrophe renders as `&#x27;`
   and inflates a naive count by 5.
3. **Building pages does not pay.** July cohort: 215 pages, median $0.16/month, 40% earn zero.
4. **Never run `next build` or `git add -A` while agents are writing.**
5. **Count affiliate elements before and after every single page edit**, and byte-diff the
   affiliate-bearing lines. Revenue is live and daily.

Full detail on all of these: `.claude/skills/buzzskito-ops/SKILL.md`.
