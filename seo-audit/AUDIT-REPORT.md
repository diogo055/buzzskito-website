# BuzzSkito.ca — Forensic SEO Audit & Remediation Report

**Date:** June 11, 2026 · **Branch:** `seo-audit-2026-06` (NOT deployed — push only)
**Auditor:** Claude Code · **Data sources:** GSC API (28d + 16wk), full local-build crawl (256 URLs), source-level code review

---

## Executive Summary

**Site health grade: A−** (the minus is entirely CTR-capture and legacy-canonical lag, not technical debt)

This site is in the top percentile of technical SEO health for a small-business site. The full 256-URL crawl found **zero** broken pages, **zero** schema errors, **zero** missing titles/descriptions/canonicals, **zero** thin pages, and **zero** missing image alts. All 258 routes are statically prerendered server components (no client-rendered SEO content anywhere), page payloads are ~97 kB first-load, fonts are self-hosted via next/font, and all analytics load `afterInteractive`. Core Web Vitals are near-certainly green on every template.

Traffic context (re-verified live): **~1,280 clicks/week** (vs ~870 stated in the brief — the site grew ~47% during early June), 28d totals of 3,978 clicks / 241K impressions trailing-16-weeks, position ~7.4, with zero sign of decline. The protected list (every clicked page) covers 133 live pages + 22 legacy redirect URLs.

### The 5 highest-impact findings

1. **`/blog/bugs-that-look-like-ticks` is the single biggest revenue lever on the site** — 35,420 impressions/28d (site's highest) at position 8.8 with 0.65% CTR. The query family ("bugs that look like ticks", "insects that look like ticks", "bug that looks like a tick", +12 variants) is worth ~650 additional clicks/month if CTR reaches the ~2.5% expected curve. → Tier 3 proposal #1.
2. **Six pages were complete internal-link orphans while earning clicks** — including `/blog/how-to-keep-ticks-out-of-yard-ontario` (9 clicks/28d with ZERO internal links pointing at it). Root cause: 4 posts were in the sitemap's `extraBlogSlugs` but never registered in the constants arrays the /blog index renders. **FIXED (Tier 2)** — all 6 orphans now have inbound links; site has 0 orphans.
3. **Fake-freshness schema signal sitewide** — `speakableSchema()` stamped every page `dateModified: <today>` on every build, telling Google every page changes daily (a signal it detects and discounts, eroding trust in the site's real dates). **FIXED (Tier 2)** — dateModified now only emitted when real.
4. **`/blog/deer-tick-vs-dog-tick-canada` CTR catastrophe** — 3,707 impressions at position 8.8 earning 4 clicks (0.11% CTR vs ~2.5% expected). Title leads with "deer tick vs dog tick" while the searched phrasing is "dog tick vs deer tick" (850 imp). → Tier 3 proposal #2 (~90-110 clicks/mo upside).
5. **www-canonical lag (not a code bug)** — Google still holds `www.` as its chosen canonical for several pages (confirmed via URL Inspection on /mississauga-mosquito-control). The www→non-www 301 deployed June 3 is correct; Google simply hasn't reprocessed. No action beyond monitoring + optional re-inspection requests. Expect resolution within 2-4 weeks.

---

## What was auto-fixed (Tier 1 — zero risk)

| Commit | Fix | Files |
|---|---|---|
| `ca799ee` | Duplicate H1 on /yard-risk-report (quiz component rendered a 2nd `<h1>`; demoted to `<h2>`, identical styling) | `components/YardRiskQuiz.tsx` |
| `728b653` | robots.ts comment mislabeled Applebot-Extended as "Microsoft Copilot" (it's Apple's AI crawler). Comment-only; emitted robots.txt byte-identical | `app/robots.ts` |
| *(untracked dirs)* | Removed 18 empty route directories (`app/about`, `app/toronto`, `app/port-credit`, etc.) — never had page.tsx, never served, pure repo hygiene | `app/*` (empty dirs — not in git history) |

## What was applied with monitoring (Tier 2 — low risk, logged prominently)

| Commit | Fix | Why | Risk |
|---|---|---|---|
| `dbf5490` | **speakable fake-freshness**: `dateModified` now only emitted when a real date is passed (was `new Date()` fallback = "modified today" on every page, every build) | Schema accuracy; Google discounts detectable fake freshness | Near-zero — removes a misleading field. Watch AI Overview citations 14d |
| `e7ab4a8` | **4 orphaned blog posts registered** in new `NEW_BLOGS_12` constants array → they now render on /blog index (sitemap dedupe auto-adjusts) | They earned clicks with zero internal links; /blog listing is purely additive | Low. Watch the 4 posts' positions 14d (expect improvement) |
| `efdaa28` | **Footer "Free Tools" column** (5 links: yard-risk-report, am-i-a-mosquito-magnet, pressure map, lyme calculator, lyme tracker) + **pool-backyard card** on commercial page's related-services grid | Fixed remaining orphans (am-i-a-mosquito-magnet, pool-backyard had 0 inbound links); tools earning 40-96 clicks/28d deserved sitewide link equity | Low — additive nav links. Watch tool pages' impressions 14d |

**Verification after all changes:** `node seo-audit/verify-protected.mjs` → **133 live protected pages intact** (200 status, unchanged title/H1/canonical, valid JSON-LD, no noindex), **22 legacy redirects working**, **0 failures**. Full re-crawl: 0 issues in every category.

---

## Tier 3 Proposals (NOT executed — require your approval)

Ranked by expected revenue impact. Every change below touches a protected (revenue-bearing) page.

### Proposal 1 — Title/meta CTR rewrite: `/blog/bugs-that-look-like-ticks`
- **Evidence:** 35,420 imp/28d, pos 8.8, CTR 0.65% (expected ~2.5% at this position). Query family ~4,500 imp on tracked variants alone.
- **Current title:** "Bugs That Look Like Ticks — ID Guide With Pictures (Ontario)" *(verify exact at execution)*
- **Proposed direction:** Lead with the count + the searcher's anxiety: "11 Bugs That Look Like Ticks (But Aren't) — Photo ID Chart". "But aren't" matches the 218-imp variant verbatim; numbers+chart raise SERP CTR.
- **Expected upside:** +400-650 clicks/mo. **Worst case:** Google re-evaluates the page on recrawl and position dips 1-2 spots for 1-2 weeks.
- **Rollback:** revert single commit; title restores on next crawl.

### Proposal 2 — Title/meta rewrite: `/blog/deer-tick-vs-dog-tick-canada`
- **Evidence:** 3,707 imp at 0.11% CTR. "dog tick vs deer tick" (searched order) = 850 imp; title uses reverse order.
- **Proposed direction:** "Dog Tick vs Deer Tick: 4 Differences That Matter (Canada 2026)" — match query order, concrete number.
- **Upside:** +90-110 clicks/mo. Same rollback profile.

### Proposal 3 — Toronto money-query consolidation strategy
- **Evidence:** "mosquito control toronto" (453 imp, the most valuable commercial query in the dataset) splits across /toronto-mosquito-control (pos 17.7), /best-mosquito-control-companies-toronto (pos 19.9), and the homepage. Neither dedicated page cracks page 1.
- **Proposal:** (a) retitle the listicle to clearly differentiate intent ("Best Mosquito Control Companies in Toronto — 2026 Rankings" — comparison intent only); (b) add a tight answer-block to /toronto-mosquito-control opening with the commercial answer; (c) point 3-5 high-authority internal anchors ("mosquito control Toronto") from Toronto-cluster blog posts to the service page only.
- **Upside:** Toronto is the largest TAM in the service area; pos 17→8 ≈ +60-100 clicks/mo of pure commercial intent. **Risk:** medium — touching two indexed pages' titles simultaneously; do sequentially, 2 weeks apart.

### Proposal 4 — Title/meta rewrite: `/blog/thermacell-canada-where-to-buy` (694 imp, 0.14% CTR) and `/blog/do-cedar-trees-attract-mosquitoes` (4,989 imp, 0.44% CTR, pos 6.5 — ~150 clicks/mo upside)
Same playbook as #1/#2.

### Proposal 5 — pest-control-* series decision
- **Evidence:** 20 pages, 16-week total of ~23 clicks; positions 9-49. Weakest series on the site (e.g. pest-control-milton pos 43-48, pest-control-woodbridge pos 42). They target "pest control [city]" — queries where searchers want general pest control (ants/rodents/wasps) that BuzzSkito doesn't offer.
- **Proposal:** Do NOT delete (they're additive, some rank top-10: etobicoke 9.8, gta 7.3). Instead pick the 4 with real impressions (etobicoke 337, thornhill 243, toronto 325, hamilton 153-208) and differentiate them with genuinely local content + "we only do mosquito/tick" positioning that converts mispointed searchers. Leave the rest untouched. Revisit post-season.

### Proposal 6 — Internal links from protected top-earners to money pages
The top 5 blog earners (bits, black-flies, bugs-look-like-ticks, are-ticks-dangerous, dunks) have enormous authority but conservative link-outs to money pages. Adding one contextual link from each post body to /mosquito-control-cost or the matching city service page is the highest-authority internal linking available. Withheld because it edits protected page content — approve per-page and I'll do them one commit each.

---

## Striking-Distance Query Table (full data: `striking-distance.json`)

| Query | Imp/28d | Pos | Page | Action |
|---|---|---|---|---|
| bugs that look like ticks (+family) | ~4,500 | 9-11 | /blog/bugs-that-look-like-ticks | **Proposal 1** |
| mosquito dunks canada | 2,269 | 8.5 | dunks guide (split w/ bits page) | Done: registered posts cross-resolve; monitor |
| dog tick vs deer tick | 850 | 8.4 | /blog/deer-tick-vs-dog-tick-canada | **Proposal 2** |
| tick map ontario 2026 | 901 | 7.9 | split across 3 pages | Monitor post-fixes |
| mosquito control toronto | 453 | 9.4 | split across 3 pages | **Proposal 3** |
| thermacell canada | 694 | 9.6 | thermacell post | **Proposal 4** |
| mosquito control near me | 608 | 12.6 | /mosquito-control-near-me | Footer links now help; monitor |
| dynatrap reviews (+family) | ~800 | 9.9 | dynatrap review | Proposal 4 batch |
| mosquito magnet (+canada) | ~1,160 | 7.6-9.0 | mosquito-magnet post | Monitor |
| permethrin canada (+family) | ~1,100 | 9.4-9.9 | permethrin post | Monitor |

## AI Overview / GEO readiness — verified strong
- Every page template carries a leading "Quick Answer" extractable block ✓ (verified on top earners + city template + tools)
- Chunkable structures (retailer pricing tables, FAQ accordions, key-facts tables) ✓
- `llms.txt` present, 330 lines, current ✓
- robots.txt explicitly allows OAI-SearchBot/ChatGPT-User/PerplexityBot/ClaudeBot/Google-Extended; blocks GPTBot/CCBot ✓
- Speakable schema sitewide ✓ (now with honest dateModified)
- Entity clarity: Organization schema carries business registration, pesticide licence, 35-topic knowsAbout graph ✓

## Performance — verified strong (build-level)
- 256/256 routes statically prerendered; zero client-rendered SEO content (no `'use client'` in any page.tsx)
- First-load JS 87.3-110 kB across templates (excellent; typical local-service sites run 200-400 kB)
- next/font self-hosted Inter (no render-blocking font CSS), analytics all `afterInteractive`, images next/image WebP with explicit dimensions
- INP risk: minimal — interactivity is isolated to 4 quiz/tool client components
- *Not verifiable locally:* real-user CrUX numbers. Recommend checking PageSpeed Insights for / and one blog post after this deploys, but no red flags exist in the build.

## Indexing spot-checks (URL Inspection API)
| URL | Verdict |
|---|---|
| Legacy /f/, /mosquito-mississauga, /hamilton-tick-spray-1 | "Page with redirect" ✓ working as designed |
| /home/f/tick-repellent-... | "Crawled - not indexed" — stale crawl predates redirect; will clear on recrawl |
| www.buzzskito.ca/mississauga-mosquito-control | ⚠ Google-selected canonical still www — June 3 redirect not yet reprocessed. **Monitor; no code action** |
| danforth/davisville/fletcher-meadows neighbourhoods | Indexed but ranking 40-54 — relevance/authority, not indexing. Tier 3 #5 territory |

---

## 14-Day Monitoring Checklist (post-deploy)

Check GSC every 2-3 days. **Revert triggers** (any one):
- Any protected top-20 page drops >15% week-over-week clicks beyond normal Tue-Thu vs weekend swing
- Sitewide impressions drop >10% WoW (seasonal baseline is RISING ~10-15%/wk right now, so flat = soft warning)
- The 4 newly-registered blog posts LOSE position (would suggest the /blog listing diluted something — extremely unlikely)
- AI Overview citations vanish for queries that currently cite the site (spot-check "mosquito bits canada", "worst areas for ticks in ontario", "black fly season ontario")

What you should EXPECT to see instead:
- Tool pages (+pressure map, lyme tracker) impressions up 10-30% within 14d from footer links
- The 4 registered posts gain 1-3 positions within 14d
- www-canonical conflicts resolve themselves by late June
- No movement on anything else — that's success; the Tier 2 set was deliberately conservative

**Re-verify protected pages after every future deploy:**
```
npx next build && npx next start -p 3344 &
node seo-audit/verify-protected.mjs http://localhost:3344
```

---

## Artifacts in this directory
- `protected-pages.json` — 155 protected URLs with rules (the contract for all future changes)
- `striking-distance.json` — query opportunities with evidence + CTR-gap table
- `crawl-results.json` — full per-page crawl facts (256 URLs)
- `crawl-site.mjs` — re-runnable full-site crawler
- `verify-protected.mjs` — re-runnable protected-page verifier (CI-safe, exits non-zero on failure)
