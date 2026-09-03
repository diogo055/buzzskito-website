# The "-canada" slug is costing us traffic in BOTH markets

Measured 2026-09-03 from GSC single-dimension page pulls with country filters
(`data/gsc/monthly_pages_can.json`, `monthly_pages_usa.json`), August 2026.

## The setup

**203 of 359 blog slugs end in `-canada`** — 57% of the site. 201 of those also carry a geo
token in the title. That gives three real variants on the site, and the third one is the
natural experiment:

| Variant | Slug | Title | Pages |
|---|---|---|---|
| **A** | `-canada` | geo | 201 |
| **B** | neutral | geo | 54 |
| **C** | neutral | neutral | 101 |

## The result, holding content type constant

Restricted to the one content category with enough pages in all three groups ("other" —
excludes product roundups, which are 36% of A and 2% of B and would otherwise drive the gap):

| | US impr/page | US clicks/page | CA impr/page | CA clicks/page |
|---|---|---|---|---|
| **A** slug + title geo | 37 | 0.1 | 479 | 5.5 |
| **B** title geo only | **277** | **0.8** | **1,421** | **13.1** |
| **C** fully neutral | **953** | **8.7** | 475 | 4.6 |

Three things fall out, and the third is the surprise:

**1. The effect is a dose response, not a threshold.** Two geo tokens → 37 US impressions per
page. One → 277. Zero → 953. Each token costs roughly 3.5–7.5× US *retrieval*. This is not a
CTR effect — geo pages convert their impressions at a normal or better rate. Google simply
does not show them.

**2. It is a retrieval filter, exactly as `data/ai-citation-pattern.md` predicted.** That file
found the same mechanism on the content side: `/blog/deer-flies-horse-flies-ontario` was cited
for "deer fly vs horse fly **Ontario**" and not for the unqualified version — same page, same
day. Two independent measurements, same conclusion.

**3. The best configuration is B, and B wins in CANADA too — by 2.4×.** This is the part that
reframes the whole thing. The geo *title* earns its keep at home (B 13.1 vs C 4.6 clicks/page).
The geo *slug* does not: it costs 5.5 vs 13.1 in Canada and 0.1 vs 0.8 in the US.

**So this is not primarily a US play. It is a Canadian one.** Canada is where the money is —
every affiliate link on the site points to amazon.ca, OneLink is forbidden, and 85% of the
audience is Canadian. Doubling Canadian clicks per page on 188 pages is worth far more than
US traffic we currently cannot monetize.

## Attribution is safe — verified, not assumed

Renaming a slug could silently break revenue attribution, because `lib/amazon-clusters.ts`
maps slug → Amazon tracking ID by regex. Checked: **no cluster rule mentions "canada" and none
anchors to end-of-string**, so a suffix strip cannot change an earlier match. Ran all 203 slugs
through the parsed rule set with and without the suffix — **all 203 keep the same cluster tag.**

## What is NOT established

This is observational. Content type is controlled; **page age, backlink profile and intrinsic
topic volume are not.** B pages may simply be better pages. The dose-response across three
variants and the independent content-side replication both argue for a real effect, but
neither is a controlled test — and a 200-URL migration on a live-revenue site is far too
expensive to run on correlational evidence.

## The test that would settle it

Take the 24 highest-impression A-pages, **randomize 12 to rename and 12 to hold as controls**,
matched on August impressions. 1:1 308 redirects, slug only — no title, no content, no
affiliate element moves.

**Pre-committed stop rule:** measure at 6 weeks. If the renamed set does not beat its matched
controls by ≥25% on Canadian clicks per page, **revert all 12 and abandon the idea.** If it
does, roll out in waves of 25.

**Risk to accept going in:** a renamed URL loses ranking while Google reprocesses it, so
expect a 2–4 week dip. The 12 test pages carry ~600 Canadian clicks/month between them, so
the worst realistic case is a temporary loss of a few hundred clicks — recoverable by
redirecting back. That is why it is a randomized 12, not a migration of 201.

**This needs the owner's go-ahead.** It changes URLs on live revenue pages, which is outside
the additive-content mandate the rest of this programme has run under.
