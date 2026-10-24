# Beat the top 3: "wasp powder canada" / "wasp dust" (Oct 23, 2026)

Page: `/blog/wasp-dust-canada`.
- **Type:** behaves like a product page (named after a product type); 170 Canadian Amazon clicks per 1,000 views.
- **Traffic, Jul 23 to Oct 20, all countries:** 9,307 impressions, 394 clicks, position 5.2.
- **Published Aug 31, 2026,** so it missed the June to August peak. In that window the ground-wasp page took every
  dust query (see `wasp-cluster.md`).

Its searches (queries-b.md):

| Search | Impressions | Position |
|---|---|---|
| wasp dust | 741 | 6.1 |
| wasp powder canada | 733 | 5.4 |
| delta dust canada | 276 | 5.0 |
| wasp powder | 271 | |
| wasp dust canada | 247 | |
| wasp dust killer | 129 | |
| insecticide / insecticidal dust for wasps | 107 / 98 | |
| delta dust | 84 | 3.0 |
| wasp killer powder (canada) | 64 / 34 | |
| delta dust canada where to buy | 30 | |

## The results page (Ahrefs, Google Canada, Oct 17, "wasp powder canada")
- **AI Overview:** cites a Reddit r/Winnipeg thread (wasps in wood siding), this page and the ground-wasp page.
- **#2 organic:** this page.
- **Shopping grid:**
  - Rentokil Wasp Killer Powder (a UK product);
  - "Raid Outdoor Wasp Ground Nest Killer 24 oz" (a US product);
  - a wasp-trap refill;
  - Blaze Pro Wasp & Hornet Defence 500 g. Its PMRA record (PCP 34241) carries the "nests located underground or in
    voids" exclusion;
  - Konk Hornet & Wasp 325 g.
- **People also ask:**
  - What is the best powder for killing wasps?
  - Does wasp powder really work?
  - What is the best wasp killer in Canada?
  - Where can I buy wasp killer powder?
- **Organic below:**
  - #5 amazon.ca search "wasp dust";
  - #6 Canadian Tire wasp category;
  - #7 Reddit r/Winnipeg, with sitelinks r/fuckwasps "Where the heck can I buy wasp insecticide powder in ..." and
    r/pestcontrol;
  - #8 Facebook "Wasp Insecticide Powder Canada";
  - #9 poulins.ca "Wasps in Canada";
  - #10 Home Depot Canada wasp control.

## The three non-ours organic results, taken apart
1. **amazon.ca "wasp dust" search (#5).** A store results page mixing US and UK dusts with Canadian cans, with no
   registration information. Not fetched.
2. **Canadian Tire wasp category (#6).** The product grid loads by script, so WebFetch saw no products. It sells
   sprays, foams and traps; no dust was found.
3. **Reddit r/Winnipeg (#7).** Not fetchable. The sitelink is the searcher's question: where can I buy wasp powder.
- Also looked at: **poulins.ca (#9)**, a pest company blog. It says dust in the entry points of hidden nests works
  best, but never says which dust is legal in Canada or who may use it.

## What the page now does that none of them do
It answers the searcher's actual question from Health Canada's database: no domestic-class dust lists a wasp nest as a
use site. The new table, "Every dust Canadians ask about, on Health Canada's record", has six rows:

| Dust (PCP) | Class and status | Use sites on the record |
|---|---|---|
| DeltaDust Powder (33495) | RESTRICTED, current | Black-tailed prairie dog burrows only, for fleas |
| DeltaDust Insecticide (29862) | Restricted, cancelled | — |
| Drione Insecticide Dust (15255) | COMMERCIAL, current | 36 sites, including wasp nests |
| Knock Down Dust Devil (31143) | DOMESTIC | Indoor and outdoor sites; wasps among its pests; no nest site |
| Indoor and Outdoor Insect Stop (21038) | DOMESTIC | Indoor and outdoor sites; wasps among its pests; no nest site |
| Tempo Dust | No Canadian record | — |

- Drione's actives: pyrethrins 1.0%, piperonyl butoxide 9.7%, silica aerogel 40.0%.
- Knock Down Dust Devil is pyrethrins and piperonyl butoxide on diatomaceous earth; Indoor and Outdoor Insect Stop is
  diatomaceous earth.

The first screen now says it plainly: no homeowner dust for wasp nests. It also names the kit pick with its real scope.

Three new FAQs, in the queries' and People also ask's words:
- Where can I buy wasp powder in Canada?
- Where can I buy Delta Dust in Canada?
- Does wasp powder really work?

## Corrected (false against the primary source)
- **"Delta Dust is a commercial-class product here, restricted to licensed applicators."** It appeared in the quick
  answer, FAQ 2, a bullet, the body and the key facts. PMRA shows RESTRICTED class, prairie dog burrows only.
  - Fixed everywhere it appeared.
  - FAQ 1 now says the US benchmark is Delta Dust, and that in Canada the registered wasp-nest dust is Drione.
- **"Domestic dusts are labelled for crawling-insect work" / "Canadian labels are written for crawling-insect uses."**
  Several domestic DE dusts and Dust Devil list wasps as a pest, with general sites. Fixed in the body, FAQ 6 and the
  key facts.
- **"The legitimate DIY lane is jet foam into a single-entrance ground nest; Wilson OneShot is the Canadian standard."**
  - The evidence: PMRA records the exclusion "nests located underground or in voids" for PCP 31899 and 12 other
    domestic cans. The Raid Max foam directions say the same.
  - Fixed in the quick answer, a bullet, FAQs 3, 4 and 9, the playbook paragraph, the "two consequences" paragraph and
    the key facts.
  - FAQ 9 also lost "a domestic-class foam can under twenty dollars" (a price).
- **Timing.** FAQ 8 now quotes the Raid directions: "Spray nest at sunrise or sunset when insects are least active."

## Title
- 'Wasp Dust Canada — Legality & What Works' became 'Wasp Dust & Powder Canada: Is Delta Dust Legal?' (47 characters),
  with a TITLE NOTE above it.
- The page's own searches include "delta dust canada" (276) and "delta dust" (84). The ground page's head term (ground
  wasps) is not touched.
- Description rewritten (159 characters). `UPDATED` set to 2026-10-23.

## Affiliate check
- Counts identical to HEAD: 4 `<BuyLink`, 1 `<AwardRow`, 1 `<StickyBuyBar`, 1 `<TopBox`, 1 `<AffiliateDisclosure`,
  `search=` 6, `search:` 4, `tag=` 7.
- Every affiliate and recirculation line is byte-identical, and so is the AwardRow block.

## Flags for the owner (affiliate elements untouched)
- **The pick's label line.** StickyBuyBar and TopBox carry the label "Legal ground-nest fix", and AwardRow #1 is "Best
  Legal Ground-Nest Fix", both on Wilson OneShot Jet Foam (PCP 31899). PMRA's record excludes "nests located underground
  or in voids", so the label is now contradicted by the page text.
  - Option 1: relabel, for example "Legal exposed-nest foam".
  - Option 2: repoint the pick.
- **The AwardRow "which to buy" text**: "Wasps streaming in and out of one hole in the lawn? ... foam at dusk is the whole
  answer". Same problem.
- **The other picks are fine:** bulb duster, DE dust and bee suit.

## Sources opened (Oct 23, 2026)
- **Health Canada Pesticide Product Information Database** (public API): records for 33495, 29862, 15255, 31143, 21038,
  25599, 28098, 29813, 29411, 35036, 28106, 31899, 25673. Name searches for "DELTA", "DRIONE", "TEMPO" and "FREEZE".
  Survey of all 140 current domestic products that list wasps.
- **S.C. Johnson raid.ca:** Raid Max Wasp & Hornet Foam Bug Killer 2 directions.
- **Pest Control Products Act** s.6(1) and 6(5).
- **Competitors and search data:** poulins.ca; Ahrefs SERP overview (CA, Oct 17).
- **Not fetchable:** Reddit, amazon.ca, Canadian Tire product grid.
- Label PDFs could not be decoded (see the ground-wasp note).
