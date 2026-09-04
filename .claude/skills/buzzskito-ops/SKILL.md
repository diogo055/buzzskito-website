---
name: buzzskito-ops
description: Measured operating rules for the BuzzSkito website (buzzskito.ca) and Hub. Use this skill whenever working on this repo or the Hub — any SEO work, content edit, new page, title or meta change, affiliate link, internal linking, GSC or Ahrefs analysis, earnings forecast, regulatory or product claim, or dashboard change. Also use it whenever someone proposes building pages, chasing keyword volume, or estimating what a change is worth, even if they do not mention SEO. The rules here were measured on this site and several of them contradict standard SEO advice, so following generic best practice instead will produce wrong work and, in the case of the affiliate and regulatory rules, can cost real money or create liability.
---

# BuzzSkito operating rules

This site earns money two ways, and they are not equal:

| | Per conversion | Monthly |
|---|---|---|
| **Service** (season plans $549–$2,049) | **$1,222 average customer** | seasonal |
| **Affiliate** (amazon.ca links) | **$3.32 per order** | ~$656 |

**One service customer is worth 368 affiliate orders.** When a decision affects both, the
service side wins. Blog-to-lead attribution has never been measured — `landing_page` is sent
with every quote request and stored in Supabase, but nothing aggregates it. That remains the
single largest unmeasured thing in the business.

Detailed figures live in `data/` — see [references/measured-economics.md](references/measured-economics.md).

---

## 1. The affiliate integrity protocol — do this every time

The owner's affiliate revenue is live and daily. A silently broken link earns nothing and
nobody notices for weeks. Before and after **any** edit to a page under `app/blog/`:

```bash
# count every affiliate token, HEAD vs working
for t in "<BuyLink" "<AwardRow" "<AwardCard" "<StickyBuyBar" "<AmazonLink" "<TopPick" "asin=" "search="; do
  a=$(git show HEAD:"$f" | grep -o -- "$t" | wc -l)
  b=$(grep -o -- "$t" "$f" | wc -l)
  [ "$a" = "$b" ] || echo "MISMATCH $t: $a -> $b"
done
```

Counting is not enough on its own. Also diff the affiliate-bearing **lines** byte for byte,
because a changed `search=` term redirects revenue while the count stays identical. If prose on
the same line legitimately changed, compare the **attributes** (`search=`, `asin=`, `tag=`,
`href=`) instead and confirm those are unchanged.

Never move, retarget or remove an affiliate element as a side effect of other work. If a
correction genuinely means a recommended product should be dropped, say so and leave the
element in place — that is the owner's commercial decision.

## 2. Building more pages does not pay here

The July 2026 cohort — 215 pages built by this exact process, on this domain, old enough to
have ranked — earns **$367/month between them. Mean $1.71 per page. Median $0.16. Forty
percent earn nothing.** The top 10 pages hold 62.6% of all blog clicks; the bottom 250 hold 4.3%.

So a proposal to "build 20 pages in the category that converts best" is worth about $3/month at
the median. Per-cluster "$/page" averages look much better than this and are an averaging
artifact: the dehumidifier cluster's headline $7.69/page is three pages carrying 95% of the
impressions and seven corpses. **A new page joins the corpses, not the outliers.**

Before writing any new page, check demand in GSC (rule 3) and say plainly what it is expected
to earn. If the honest answer is under a few dollars a month, say so and do not build it.

## 3. Ahrefs volume is fiction for Canadian long-tail pest terms

Verified against this site's own GSC data, in both directions:

| Term | Ahrefs Canada | GSC reality (84 days) | Our position |
|---|---|---|---|
| grub control | 1,800/mo | **8 impressions** | **1.0** |
| springtails | 4,300/mo | **1 impression** | **1.0** |
| dehumidifier | 26,000/mo | **20 impressions** | 4.3 |
| silverfish | 36,000/mo | **5 impressions** | 5.2 |
| bti canada | 20/mo | **2,695/month** | — |

Ranking **first** on "springtails" produces one impression per quarter. The strongest possible
signal that an Ahrefs figure is invented is a term with claimed volume where this site already
holds a top-5 position and still sees nothing — position cannot explain that.

**Size demand from GSC, never from Ahrefs.** Ahrefs is still useful for SERP composition,
competitor pages and keyword difficulty; it is not useful for Canadian volume.

## 4. GSC data has a pruning trap

Multi-dimension pulls (query × page × country) silently drop rows. Measured on an identical
window: `page + country` returned 3,747 clicks against 9,123 for `page` alone — 59% missing.

Use **single dimensions with country filters**. The files in `data/gsc/` carry a `_WARNING`
field where this applies. For the Canadian 84-day file the bias is small (95.8% of impressions,
91.6% of clicks) and it is fine for relative comparisons; do not use it for absolute totals.

## 5. Titles: the rendered length is your string plus 12

`app/layout.tsx` applies `template: '%s | BuzzSkito'`. `buildMetadata` passes a plain string,
so the template applies and the rendered SERP title is **META_TITLE + 12 characters**.

Target 60 rendered, so **META_TITLE must be 48 characters or fewer.** Measure the real
`<title>` from the built HTML (`.next/server/app/blog/<slug>.html`), not the source constant —
some pages declare the title inside `buildMetadata` rather than as a `META_TITLE` const, and a
source-only check misses them.

## 6. The geo token goes in the TITLE, never the slug

203 of 359 slugs end in `-canada`. Holding content type constant, the three variants that exist
on the site show a dose response — each geo token costs retrieval:

| | US impressions/page | CA clicks/page |
|---|---|---|
| slug + title geo | 37 | 5.5 |
| **title geo only** | **277** | **13.1** |
| fully neutral | 953 | 4.6 |

The geo title earns its keep in Canada; the geo slug does not. **New pages: geo token in the
title, neutral slug.** Existing slugs are a separate, riskier question — a randomized 12-page
test is running (`data/exp-slug-test.json`), measuring 2026-10-15. Do not rename more slugs
until it reports.

Do not weld a geo token onto a universally true fact. Measured: unqualified answerable queries
carry ~25× the volume of geo-qualified ones.

## 7. Regulatory and product claims need a primary source

This is a **licensed pest control operator** (Ontario Pesticide Operator Licence
L-240-2436835197). A false statement about what is legal or approved is a liability problem,
not a style problem.

An audit of the 10 highest-traffic pages checked 333 hard claims and found **79 false** —
contradicting Health Canada, PMRA, EPA or the manufacturer's own label. 157 pages making such
claims remain unaudited. The confirmed-false claims are in `data/false-claims-seed.json`.

Verify against the primary source, in this order:
- Health Canada / PMRA — the Pesticide Product Information Database, re-evaluation decisions
  (`RVD…`), and the "Personal insect repellents" page
- Public Health Agency of Canada for disease and prevention
- EPA, CPSC, CDC for US claims
- The manufacturer's own current label

Never cite a secondary blog for a regulatory fact. If a claim cannot be sourced, soften it to
what can be supported or attribute it honestly — do not delete a true claim because a source
was slow to load.

**Watch for the failure mode this audit exposed:** correcting a false claim while introducing a
new one. Three auditors did exactly that — one misquoted a regulator inside quotation marks in
four places. Whatever you assert as the correction needs the same standard of proof as the
claim you are removing.

## 8. Standing content rules

- **No Amazon prices, star ratings, review counts, best-seller rank, or product images.**
  Prices go stale and become false claims; a fabricated retail price table was found on the #2
  earner for a product not legally sold in Canada.
- **No AggregateRating** outside the homepage and `/reviews` (self-serving-review policy).
- **No fabricated testing claims.** This company does not test products. If a page needs a
  methodology note, it must say what was actually done — usually label and registry research —
  and state plainly that no controlled testing was performed.
- **Tick treatments are 5 sprays per season, never 2.** This has been a recurring error.
- Sign customer-facing copy as **"Alex & The BuzzSkito Team"**, never Diogo's real name.
- Never auto-send emails to customers. Quote emails go manually from the dashboard.
- **Never target a retailer-named query** ("X canadian tire"). Measured 0.08% CTR — the
  searcher wants the retailer's own site and will not click you.

## 9. Before pushing

```bash
npx tsc --noEmit
npx next build
node scripts/check-amazon.mjs
node scripts/check-registered.mjs
```

`check-registered` passes on the **import** alone, so it will not catch an array that is
imported but never spread into the sitemap URL list. That exact bug stranded 14 pages,
including the site's two best-converting ones. When touching `lib/constants.ts` or
`app/sitemap.ts`, confirm the new slugs actually appear in the built
`.next/server/app/sitemap.xml.body`.

Push the website to the **`diogo` remote** (`git push diogo main`), not `origin`. Push the Hub
to `origin`.

## 10. Two traps that have already cost real work

**Never run `next build` or `git add -A` while agents are writing.** The build produces phantom
prerender failures, and `git add -A` has swept in-flight files into a commit before their audits
ran. Stage by explicit path.

**A finding needs a control before it becomes a decision.** A query-shape thesis here survived
four adversarial reviewers and still died on a missing control: holding the **page** constant
collapsed a 3.9× effect to 1.3×. It was a page effect wearing a query-shape costume. Before
acting on a pattern in aggregate data, ask what varies alongside the thing you are measuring —
and prefer within-page or within-country comparisons.

## Where the numbers live

| File | What |
|---|---|
| `data/HANDOFF.md` | session state, stage status, standing constraints |
| `data/does-building-pages-pay.md` | the per-cohort page economics behind rule 2 |
| `data/where-the-ceiling-actually-is.md` | funnel decomposition; why the commission rate is the ceiling |
| `data/amazon-reports-2026-09.md` | earnings by content cluster, from the Amazon reports |
| `data/geo-slug-finding.md` | the slug/title measurement behind rule 6 |
| `data/false-claims-seed.json` | 119 verified-false claims, for triaging the unaudited pages |
| `data/ai-citation-pattern.md` | what earns an AI-engine citation here |
