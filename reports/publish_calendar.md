# Phase 5 — publish calendar for new wildlife / bed bug / cockroach pages

Companion to `reports/new_pages_plan.csv`. Written 2026-09-22 from Google Search Console,
Canada, 2026-06-16 → 2026-09-13 (90 days). Ahrefs was not usable this session (API key at
99,996 / 100,000 units; resets 2026-09-26), so KD is a GSC-position proxy and SERP
composition came from web search rather than serp-overview.

## The honest finding first

The brief asked for the 10 highest-value new pages. **Only four intents clear the demand
bar** (200+ Canadian impressions per quarter that no purpose-built page already owns), and
**none of them is wildlife** — the topic with the best EPC.

| # | Page | GSC imp / 90d | Priority | Season |
|---|------|--------------:|---------:|--------|
| 1 | Cockroach gel bait Canada: what's registered | 3,563 | 83.4 | year-round |
| 2 | German cockroaches in Canada: how to get rid | 366 | 8.6 | year-round (heating-season peak) |
| 3 | Bed bug heat treatment in Toronto: cost & prep | 545 | 8.1 | year-round (Dec–Feb peak) |
| 4 | Cockroach exterminator cost in Ontario | 617 | 7.2 | year-round |

Everything else the site sees in these three topics is either already owned by a
purpose-built page (60 bed bug pages, 5 roach pages, 11 wildlife pages cover ~95% of the
impressions), below 200 impressions, retailer-named (never target), a service query for
something BuzzSkito does not sell, or outside the three topics (Advion *ant* gel, ~300 imp).

Expected affiliate earnings, stated plainly per the operating rules: page 1 is worth roughly
**$1–3/month**; pages 2–4 are **under $1/month each** on affiliate. Pages 3 and 4 only make
sense if a referral CTA exists for a bed bug / cockroach provider — that value is unmeasured.
The site's own cost page (`bed-bug-treatment-cost-canada`) turns 937 impressions into 1 click
per quarter, and that is the shape to expect from any cost page.

## Why the wildlife column is empty

Measured Canadian demand the site sees, by wildlife sub-topic (90 days):

| Sub-topic | Impressions | Owned by |
|---|---:|---|
| Raccoon deterrent / repellent | ~2,900 | `raccoon-deterrent` (pos 8) |
| Motion-activated sprinkler | ~2,500 | `motion-activated-sprinkler-canada` (pos 8) |
| Raccoon trap / cage | 1,059 | `best-raccoon-live-trap-canada` (pos 10) |
| Squirrel-proof bird feeder | ~355 | `best-squirrel-proof-bird-feeder-canada` (pos 15–18) |
| Raccoon electric fence | ~300 | `best-electric-fence-for-raccoons-canada` |
| Deer fence | ~281 | `best-deer-fence-for-gardens-canada` (pos 17–25) |
| Wildlife *removal service*, templated "[city] [animal] prevention" | ~700 | city pages, zero clicks, pos 15–40 — probable rank-tracker noise, and not a service BuzzSkito sells |
| Squirrels in attic / squirrel repellent / deterrent | ~20 | — |
| Skunk (non-service) | ~25 | — |
| Chipmunk | 26 | — |
| Groundhog | 17 | — |
| Mole | 20 | — |
| Pigeon / bird spikes | 2 | — |
| Rabbit | 2 | — |

Two things are true at once. First, by the brief's rule there is no wildlife candidate.
Second, the rule cannot see demand for an animal the site has **no page about** — GSC only
reports impressions where a page already ranks. So "17 groundhog impressions" is not
evidence that nobody in Ontario searches for groundhog traps; it is evidence that we have
never been shown for it. That blind spot is structural and should be said out loud rather
than papered over with Ahrefs volume (which is banned for good reason).

The cheap way to fill the spring slots without building a corpse: add a skunk section and a
groundhog section to `raccoon-and-skunk-proofing-under-a-deck-canada` (10 impressions today,
pos 8.5) and a squirrel section to `raccoon-deterrent` in October, then read GSC in
February. If either section draws 200+ impressions over the winter, that is the first real
evidence a standalone page could exist. Until then there is nothing to schedule.

## Calendar

Pages need 6–10 weeks to settle before their demand window, so the dates below are
**publish-by** dates, not season dates.

### Now — fall / winter (indoor pests; heating season is peak for German roaches and bed bugs)

| Publish by | Page | Why this order |
|---|---|---|
| **2026-10-06** | #1 Cockroach gel bait Canada: what's registered | Largest gap on the site (3,563 imp on a page built for a different question). Needs the PMRA verification pass first (every PCP number checked in the Health Canada database; domestic vs commercial class). Do this before #2 and #4 because both link into it. **Decide first whether this is a new URL or an expansion of the Advion page's "Compliant Toolkit" section** — the Advion page already ranks 7–12 for the cluster and a second URL can split it. |
| **2026-10-20** | #2 German cockroaches in Canada: how to get rid | Same product list as #1, so the regulatory work is already done. Aim to be ranking by early December when apartment roach complaints rise with the heat on. |
| **2026-11-03** | #3 Bed bug heat treatment in Toronto: cost & prep | Bed bug heat-treatment searches peak Dec–Feb. Only build if there is a referral CTA; otherwise expect the existing cost page's 1-click-per-quarter shape. Ontario tenancy claims must be verified against the RTA / LTB before publishing. |
| **2026-11-17** | #4 Cockroach exterminator cost in Ontario | Lowest priority of the four; the SERP is already full of 2026 price guides. The only angle that earns its place is "what the pro uses vs what you can legally buy", which is why it comes after #1. |

### Spring — publish by March (groundhog, skunk, deer)

No candidate clears the bar. Nothing scheduled. See the section above for the
adjacent-section test that could produce evidence by February; if it does, a March page is
possible for the 2027 season, not this one.

### Not scheduled, on purpose

- **Squirrel-proof bird feeder** (~355 imp) and **deer fence** (~281 imp): existing pages at
  positions 15–25. Title / internal-link fixes, not new pages.
- **Bed bug bites** (710 imp) and **bed bug treatment cost** (937 imp): existing
  purpose-built pages. Same.
- **Retailer-named queries** ("… canadian tire", 357 roach imp + 273 bed bug imp): never
  target (measured 0.08% CTR).
- **Advion ant gel Canada** (~300 imp, position 1.8–3.7 on the cockroach page): clears the
  bar but is an ant topic; flag to whoever owns that cluster.
- **"[City] [animal] prevention" service queries** (~700 imp): not affiliate pages, and the
  templated phrasing with zero clicks at deep positions is the fingerprint of a competitor's
  rank tracker rather than people.

## Data caveats that affect these numbers

1. `gsc_fresh.json → queries_90_ca` is capped at 25,000 rows sorted by clicks, so its
   zero-click tail is truncated. "squirrel proof bird feeder" (112 imp) and "squirrel removal
   north york" (250 imp) are absent from it. Every number above comes from fresh
   single-dimension GSC pulls with a Canada filter, one search term at a time, not from that
   file.
2. Query × page pulls prune rows (rule 4). They were used only to identify *which* page
   catches an intent, never for totals.
3. "german cockroach" shows 177 impressions at position 2.2 with zero clicks. That is not a
   blue-link ranking; it is almost certainly an image or PAA-type impression. The priority
   for #2 used the real get-rid position (7.3), not 2.2.
4. Ahrefs: 0 units consumed this session. One subscription-info call (free) and one
   4-keyword `keywords-explorer-overview` attempt, refused because it needed 84 units against
   4 remaining. Re-run the KD step after 2026-09-26 if a real KD is wanted; the ranking of
   the four candidates is unlikely to change, because #1 leads by a factor of ten on demand.
