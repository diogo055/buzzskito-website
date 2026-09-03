# BuzzSkito Affiliate Revenue Programme — session handoff

**Written 2026-09-03.** Single source of truth for anyone picking this up. Read this before
`data/progress.json` or `reports/latest.md` — those are narrower.

---

## 1. The one-paragraph version

The site earns ~$653/month (August peak) from Amazon.ca affiliate links across 358 blog
pages. The programme brief targets $4,000–5,000/month at the 2027 peak. Stages A–D are done,
E is 17/20, F is blocked on the owner's Levanta approval, G and I are done, H is partial. **The honest forecast is that the work shipped so far is worth about +23%
(+$1,415/yr), and that $4,500/month requires BOTH ~2.5× traffic AND ~3× revenue per order —
neither alone gets there.** The single biggest constraint is that the average basket is
$46.53 and only 4 of the top 39 pages sell anything above $100.

---

## 2. Measured facts — do NOT re-derive these

| Fact | Value | Source |
|---|---|---|
| August 2026 earnings | **$653** | Associates dashboard |
| August blog clicks | 8,663 | GSC |
| Click-out to Amazon | **32.7%** (2,832 clicks) | derived |
| Purchase conversion | **10.4%** (295 orders) | Associates |
| AOV | $46.53 | Associates |
| Revenue per order | **$2.21** | derived |
| Revenue per blog visit | **$0.0754** | derived |
| US share of clicks (Aug) | **15.2%** — NOT the 33% in the brief | GSC country dimension |
| US share trend | 3.5% May → 15.2% Aug | GSC |
| AI citations, all platforms | **1,624 across 216 pages** | Ahrefs, 2026-09-03 |
| Pages with ASIN pins | **30** | repo |
| Total affiliate links | ~2,365 | `data/affiliate-links.json` |

**Two terms are already maxed out.** Click-out at 32.7% is ~16× the ~2% industry benchmark;
conversion at 10.4% is strong. The funnel was never the problem. Revenue per order is.

---

## 3. Stage status against the brief

| Stage | Status | Notes |
|---|---|---|
| **A** Inventory | ✅ Done | 12 artifacts + `reports/stage-a-gate.md` |
| **B** Technical baseline | ✅ Done | Indexation clean; 4 recommendations rejected after verification |
| **C** Link infrastructure | ✅ Done | Per-link click tracking shipped (`components/AffiliateClickTracker.tsx`) |
| **D** Monetization sweep | ✅ Done | Only 3 pages qualified (~$12/mo) — NOT the workstream the brief expected |
| **E** Striking distance | 🟡 17/20 US pages expanded | 3 remain |
| **F** Levanta | ⛔ Blocked on owner | Queue + catalogue findings ready |
| **G** Commercial pages | ✅ Done (reframed) | Premise was wrong — 72 high-basket pages already exist, starved. Routed instead of built. See `data/stage-g-finding.md` |
| **H** Vertical expansion | 🟡 6 fall pages shipped | |
| **I** AI search | ✅ Done | Baseline + citation pattern found + applied to 6 pages |
| **J** Conversion/maintenance | 🟡 Tracking live | Measures 2026-09-30 |

---

## 4. What shipped (all live on `main`, pushed to `diogo` remote)

- **971 hidden FAQ answers made visible** across 107 pages. They emitted FAQPage schema for
  content that did not render — a Google guidelines violation across 459,484 impressions.
- **20 pages given original diagrams.** The site had **zero images across all 358 blog
  pages**. Nine SVGs, 59KB total, all measurement-accurate, logged in `data/image-licenses.json`.
- **30 pages ASIN-pinned** across 5 waves. Hit rate fell 39% → 28% → 22% → 5.5%; the well is
  dry. Remaining pages are unpinnable because the product genuinely is not on amazon.ca.
- **17 US pages expanded** with PAA-targeted H2s and US species/agency coverage, additively.
- **6 new fall-demand pages** (wasp, roach, spider, cluster fly, earwig).
- **Per-link affiliate click tracking** — revenue per click is now measurable per page.
- **Two recalled products removed**, plus a full 23-product safety sweep.

---

## 5. SAFETY — the most important thread in this session

**Two live pages were recommending a recalled product as "Best Overall".**

The **Dupray Neat Steam Cleaner** (B07C44DM6D) is under an active Health Canada + US CPSC
recall (2026-02-26): boiler rupture, 15 ruptures, 4 injuries including a broken wrist,
~97,000 units in Canada, guidance is "stop using immediately". It passed every Amazon-side
check — In Stock, 4.4 stars, 22,998 ratings, sold by the brand's own storefront.
**A recall is invisible from an Amazon listing.**

Fixed: pins removed from both pages, recall notices added (unpinning alone is insufficient —
the search still surfaces the machine and Amazon offers no batch selection).

**Then swept all 23 pinned products** (`data/recall-sweep-2026-09.md`): 17 clear, 6 "related
but not this product", **0 recalled**. Mosquito Magnet pages got a serial-check note (2018
CPSC recall, serial-scoped, zero injuries — a note, not a pull).

**A mandatory pre-pin regulator check is now in `seo-audit/asin-pilot.md`.** Re-run the sweep
quarterly. Bed-bug heaters deserve extra attention — PackTite and ThermalStrike both had
fire-hazard recalls in that class from other manufacturers.

**Still open, owner decided to leave it:** `best-wasp-nest-spray-canada` keeps recalled Raid
Max Wasp & Hornet Foam (PCP 30746) as Best Overall, under the notice added.

---

## 5b. THE BEST ANALYTICAL FINDING — read `data/ai-citation-pattern.md`

Tested 18 real queries; the discriminator held **18/18**.

**The gate on AI citation is the ANSWER FIELD, not our page.** We get cited when the field is
peer commercial blogs. We never get cited when an institution already owns the canonical
answer (CDC, Cleveland Clinic, an extension service, or the manufacturer).

**Two hypotheses died.** Structure is NOT the differentiator — cited and non-cited pages have
identical capsules, schema and FAQ counts. Position is NOT the gate — position 2.1 was not
cited while position 6.7 was.

**The cleanest experiment:** `/blog/deer-flies-horse-flies-ontario` was NOT cited for "deer
fly vs horse fly" but WAS cited for "deer fly vs horse fly **Ontario**" — same page, same
capsule, same day. The Canadian qualifier is a retrieval filter: it wins 7,683 geo-qualified
impressions and loses 193,215 unqualified ones.

**Three actionable negatives:** no table content was EVER extracted (9 cited pages, zero table
lifts); metric-only numbers get passed over for imperial; and a geo token welded into a
portable fact kills it — which explains the site's worst page, `deer-tick-vs-dog-tick-canada`
at 8,721 impressions and 7 clicks (0.08% CTR).

**Strategy: stop contesting institution-owned fields.** Concentrate on look-alike
identification, gear comparison, folk-belief correction and geo-qualified questions — where
we already beat ticksafety.com 3.4×.

---

## 6. Levanta — read `data/levanta-catalogue-findings.md`

Account **pending approval**. API key is also gated behind approval.

**Canadian listings EXIST but are NOT ACTIVATED.** Every pest product resolves on amazon.ca
with a real price and rate, but reads *"This product has not been activated on Levanta for
Amazon Attribution."* Harris bed bug killer is CA$84.07 at 20% = **CA$16.81/conversion, 7.6×
our $2.21**. The blocker is a brand-side switch.

**The ask to make on every application:** *"My audience is 85% Canadian — about 8,600 organic
visits/month to pest buying guides. Your amazon.ca listings show in Levanta but aren't
activated for Amazon Attribution. Can you enable the CA marketplace?"*

**Rate corrections to the brief:** "3–5× Amazon's rate" is not general. Thermacell 7%,
DynaTrap 8%, **Summit Mosquito Dunks 3% — BELOW Amazon**, on our widest product footprint
(19 hero placements). Good rows: Premo Guard $22.49/conversion, Flowtron 2-acre $40, Rugged
Ranch $37.70, Harris $12–17.

---

## 7. Hard-won gotchas — these will bite again

1. **GSC prunes multi-dimension queries.** `page+country` returned 3,747 clicks vs 9,123 for
   `page` alone on an identical window — 59% missing. Use single dimensions with country
   *filters*. All six filtered datasets in `data/gsc/` carry a `_WARNING` field. An agent
   already fell into this once and computed US share as 5.8% instead of 15.2%.
2. **Health Canada's recall database is incomplete.** It returns nothing for the Mosquito
   Magnet recall despite a Canadian distributor letter existing. Absence ≠ safety.
3. **US and Canadian recall notices use DIFFERENT model numbers for the same machine**
   (Executive MM3300 US / MM3302 CA). Match on the machine, not the string.
4. **Matching brand + model is NOT sufficient to pin.** A ClimbUp listing passed every
   identity check and was correctly skipped on buy-box economics — $9.25/cup vs ~$5 retail,
   reseller-held buy box. Seller identity and per-unit price are mandatory checks.
5. **Never run `next build` while agents are writing.** It produces phantom prerender
   failures. Wait for the workflow.
6. **Never `git add -A` while agents are writing.** It swept three in-flight files into a
   commit before their audits ran.
7. **Windows/CRLF:** Python string matching on these files needs `.replace('\\r\\n','\\n')`.
   Bash heredocs with nested quotes fail — use the Write tool for scripts.
8. **Blog pages live at `app/blog/`, not `src/app/blog/`.** A wrong-path grep reads as
   "page does not exist".

---

## 8. Standing constraints — never violate

- **The owner's revenue is live and daily. Do not touch any affiliate link, BuyLink,
  AwardRow, StickyBuyBar, `asin=` or `search=` prop without counting before and after.**
- Push website to `diogo` remote (`git push diogo main`), NOT `origin`. Git user `diogo055`.
- Verify before pushing: `npx tsc --noEmit`, `npx next build`, `node scripts/check-amazon.mjs`,
  `node scripts/check-registered.mjs`.
- No title-tag changes. No AggregateRating outside homepage and `/reviews`.
- No Amazon prices, star ratings, review counts, or product images.
- No fabricated testing claims — this company does not test products.
- Tick treatments are **5 sprays per season**, never 2.
- Do NOT apply to Levanta brands or contact anyone — the owner does that.
- No new Amazon Associates accounts, no OneLink/geo-redirects (a prior account was banned
  over a US/OneLink setup).

---

## 9. What to do next, in order

1. **Finish Stage I** — 6-page application running. Baseline in `data/ai-search-baseline.md`.
2. **Stage G — commercial pages.** The revenue-per-order fix and the biggest untouched lever.
   Only 4 of the top 39 pages sell anything above $100; that is why the basket is $46.
3. **Finish Stage E** — 3 US pages remain.
4. **2026-09-30: measure.** Two experiments are registered with pre-committed stop rules:
   - `data/experiment-diagrams.md` — 20 treated pages vs 8 controls. If CTR does not move
     ≥30% relative, the image programme STOPS at 20 pages.
   - `data/seo-changelog.json` — Stage E positions. If the first 5 pages average <3 positions
     gained after 4 weeks, HALT Stage E and diagnose.
5. **2026-10-03: re-measure AI citations** with the exact call in `data/ai-search-baseline.md`.

---


## 9b. Stage G was reframed — read `data/stage-g-finding.md`

The brief said "build commercial pages". The site **already has 72** (20% of pages) earning
980 of 8,663 clicks — 13.6 clicks/page vs a 24.2 average. They are built and starved, because
high-basket queries are the hardest to rank (best mosquito trap KD 93, dynatrap 89, thermacell
63, on a DR ~2 domain).

The real bottleneck was that **13 of the top 25 pages had zero internal route** to any of
them: 2,172 clicks/month landing where the ceiling is a $15 item. Fixed by routing, not
building — 13 insertions, zero deletions, affiliate counts identical on all 9 pages.

**The refusals are the quality signal**, not the additions. `rat-poison-canada-what-is-legal`
got nothing (rats chew through insect mesh — a "screen door for exclusion" link would be
actively wrong). The `advion` dehumidifier link was added by the writer and **removed by the
auditor**: roaches drink liquid water from a leak, not ambient humidity.

**~~Gap found: air purifier page~~ — CORRECTED 2026-09-03. Do NOT rebuild it.** The agents
were right that it does not exist, and I was wrong to call it a gap. Eight air-purifier and
appliance pages were **deliberately retired** on 2026-07-27 (commit `a63d273`) as "off-moat":

> "These 8 posts drifted into generic consumer air-quality/allergy appliance reviews — a
> category BuzzSkito, a licensed mosquito & tick control company, has no business publishing."

That is a sound E-E-A-T decision — the site's defence against reading as a thin affiliate
shell is that it is a genuine licensed service business. The retired URLs still show 7,330
residual impressions in GSC (allergies 5,287, large-room 1,195, hepa-vacuum 848) at 0.3% CTR,
308-redirecting to `/pest-product-guides`. That is the redirect doing its job on decaying
URLs, not a bug. **Leave it. Rebuilding would undo deliberate moat work for a $150–600
basket in a category with no service tie.**

## 10. Needed from the owner

| Item | Asked | Impact |
|---|---|---|
| **Amazon Top-Sellers + Linked-Product reports** | 5× | Would replace inference about what actually sells — the weakest part of the current picture |
| **Levanta approval** | pending | Unblocks Stage F and the API key |
| Raid Best Overall decision | answered — leave it | closed |

---

## 11. Key files

| File | What |
|---|---|
| `data/HANDOFF.md` | this |
| `reports/stage-a-gate.md` | Stage A findings |
| `reports/latest.md` | §17 status report |
| `data/forecast.mjs` · `data/gap-to-target.mjs` · `data/path-to-10k.mjs` | earnings models |
| `data/levanta-catalogue-findings.md` | Levanta truth |
| `data/levanta-application-queue.md` | ranked brand list (has a correction banner) |
| `data/recall-sweep-2026-09.md` | product safety |
| `data/ai-search-baseline.md` | AI citation baseline |
| `data/experiment-diagrams.md` | registered CTR experiment |
| `data/content-inventory.json` · `data/striking-distance.csv` · `data/affiliate-links.json` | core datasets |
| `seo-audit/asin-pilot.md` | append-only pinning log + pre-pin checklist |
