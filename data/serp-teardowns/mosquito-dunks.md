# US SERP Teardown — "mosquito dunks"

**Date of teardown:** 2026-09-02
**SERP crawl date (Ahrefs live index):** 2026-08-28
**US volume:** 22,000/mo (Ahrefs US) · **Keyword Difficulty: 5**
**Our page:** `/blog/mosquito-dunks-canada-guide` — `app/blog/mosquito-dunks-canada-guide/page.tsx`
**Our live US performance (GSC, 2026-06-03 → 2026-08-31):** 328 impressions, 2 clicks, avg position **5.3**, CTR 0.61%
**Same page, Canada:** 27,290 impressions, 294 clicks, avg position 6.9

---

## 1. SERP features above and among the organic results

| Position | Feature | Detail |
|---|---|---|
| 1 | **AI Overview** | Present. Cites exactly **two** sources as sitelinks, both with image thumbnails. |
| 1 | AI Overview sitelink #1 | `summitchemical.com/products/mosquito-dunks/` — the manufacturer's own product page |
| 1 | AI Overview sitelink #2 | `southernliving.com/does-mosquito-bucket-of-doom-work-11766413` — **"I Tried The Mosquito 'Bucket Of Doom' To See If It Actually Works"** |
| 3 | **People Also Ask** | 4 questions (verbatim in §3) |
| 5 | **Shopping pack** (`organic_shopping`) | ~9 product tiles, image thumbnails — Summit 6-pack, 20-pack, 2-pack, Dunk Chunks, combo pack |
| 7 | **Video** | YouTube Short embedded in an organic slot |
| 10 | **News / social pack** | An X/Twitter post (viral bucket-of-doom explainer), a **Mississippi State University Extension** Facebook video with an urban entomologist, and a Reddit r/ponds thread |
| 11, 13, 15 | More shopping tiles | Shopping dominates the middle of page 1 |
| 18, 24 | More video | Facebook video, YouTube tutorial |

**Read on the feature set:** this is a *commercial + explainer hybrid*. Shopping and PDPs take the transactional half; the informational half is won by (a) the manufacturer, (b) a lifestyle publisher doing a first-person test of the bucket method, and (c) university extension services. There is **no traditional featured snippet** — the AI Overview has absorbed that slot, and it is citing only two pages. One of those two is a bucket-of-doom article.

---

## 2. Top organic results and page types

| # | URL | Page type | DR | UR | RefDomains | Est. traffic |
|---|---|---|---|---|---|---|
| 2 | amazon.com/…/dp/B0000AH849 | Retail PDP | 96 | 6 | 11 | 4,835 |
| 4 | summitchemical.com/products/mosquito-dunks/ | Manufacturer product page | **44** | 9 | 172 | 3,307 |
| 6 | pestmanagementsupply.com/mosquito-dunks-100-cs.html | Small B2B e-comm PDP | **28** | **0** | **0** | 1,062 |
| 7 | youtube.com/shorts/Qp-s2tvp0sI | Video ("Do mosquito dunks actually help?") | 99 | 0 | — | 859 |
| 8 | reddit.com/r/lawncare/…/mosquito_dunks_for_lawn_mosquito_control/ | Forum thread | 95 | 4 | 1 | 1,152 |
| 9 | southernliving.com/does-mosquito-bucket-of-doom-work-11766413 | First-person editorial test | 86 | 6 | 11 | 1,655 |
| 12 | thewoodlandstownship-tx.gov/…/Dont-Get-Dunked-by-a-Mosquito-Myth | Municipal myth-busting article | 67 | **0** | **0** | 319 |
| 14 | homedepot.com/p/Summit-12-in-Mosquito-Dunks-6-Pack…/100334779 | Retail PDP (US) | 90 | 4 | 15 | 661 |
| 16 | newhanover.ces.ncsu.edu/…/managingmosquitos/ | **NC State Extension** county page | 90 | **0** | 3 | 382 |
| 17 | lowes.com/pd/…/3047384 | Retail PDP (US) | 88 | 4 | 18 | 198 |
| 19 | homegardenandhomestead.com/how-do-mosquito-dunks-work/ | Small hobby blog | **27** | 4 | **2** | 57 |
| 20 | upmd.org/DocumentCenter/View/1797 | Municipal PDF handout | 30 | 0 | — | 391 |
| 21 | johnson.k-state.edu/…/nature-friendly-mosquito-control-build-own-dunk-bucket.html | **K-State Extension** how-to | 83 | 4 | 4 | 158 |
| 22 | lynnhavenrivernow.org/…/try-mosquito-dunks-for-a-mosquito-free-summer/ | Small non-profit blog | 45 | 0 | 1 | 31 |
| 25 | hyattsville.org/DocumentCenter/View/7247 | Municipal PDF | 54 | 4 | 1 | 126 |

### Lowest-authority page in the top 5 — the achievability proof

Within the top 5 **positions**, the weakest domain is **summitchemical.com, DR 44** at #4 — but that page has 172 referring domains and brand-name advantage, so it is a poor proof point.

The real proof sits one slot below and is far more useful:

> **`pestmanagementsupply.com` — DR 28, URL Rating 0, zero backlinks to the ranking URL, 5 total ranking keywords — sits at position 6 for a 22,000/mo head term.**

Corroborating evidence that this SERP does not gate on authority at all:
- **#12** The Woodlands Township TX — URL Rating **0**, **0** backlinks, **0** referring domains.
- **#16** NC State Extension county page — URL Rating **0**, 3 referring domains.
- **#19** `homegardenandhomestead.com` — **DR 27**, 2 backlinks, 2 total ranking keywords.

**Conclusion: relevance and phrasing win this SERP, not links.** Keyword Difficulty is **5** for the head term, and **0** for `do mosquito dunks work`, `how to use mosquito dunks`, `mosquito dunks for fungus gnats`, and nearly every safety long-tail. We are already at **US position 5.3**. Nothing about our authority is blocking us.

---

## 3. People Also Ask — verbatim (these become H2s)

Captured from the live SERP at position 3:

1. **"Do mosquito dunks really work?"**
2. **"Do mosquito dunks kill anything else?"**
3. **"What is the difference between mosquito bites and mosquito dunks?"**
4. **"Are mosquito dunks harmful to humans?"**

*(Note on #3: this is Google's own rendering — it is the garbled "Bits vs Dunks" question. Match it as written; it is a live PAA string and an AI Overview target.)*

### Secondary question set — from US search suggestions, treat as FAQ additions

| Query | US vol | KD | Covered on our page? |
|---|---|---|---|
| mosquito dunks for fungus gnats | 500 | 0 | 1 FAQ paragraph only |
| do mosquito dunks work | 450 | 0 | Yes (different phrasing) |
| mosquito dunks how to use | 400 | 6 | Partial |
| what are mosquito dunks | 350 | 2 | Yes |
| mosquito dunks home depot | 300 | 0 | **Canada-only** |
| how to use mosquito dunks | 300 | 0 | Partial |
| **are mosquito dunks safe for birds** | 250 | 0 | Bundled into one paragraph |
| **are mosquito dunks safe for pets** | 200 | 0 | Bundled |
| **are mosquito dunks safe for dogs** | 150 | 0 | Bundled — **CPC $350**, highest-value term in the cluster |
| how to use mosquito dunks for fungus gnats | 150 | 0 | Partial |
| mosquito dunks bucket | 150 | 8 | **No — zero coverage** |
| **do mosquito dunks expire** | 100 | 0 | **No — zero coverage** |
| do mosquito dunks kill fungus gnats | 100 | 0 | Partial |
| mosquito dunks vs bits | 100 | 0 | Yes |
| are mosquito dunks safe for bees | 80 | 0 | Bundled |
| how long do mosquito dunks last | 80 | 0 | Yes |
| how to use mosquito dunks in potted plants | 70 | 0 | Partial |
| mosquito dunks ingredients | 70 | 0 | Yes (Health Canada only) |
| are mosquito dunks safe for plants | 50 | 0 | **No** |
| mosquito dunks bucket method | 50 | — | **No** |
| are mosquito dunks safe for fish | 40 | 0 | Bundled |
| mosquito dunks in bird bath | 40 | — | Partial |
| are mosquito dunks safe for cats | 40 | — | **No** |
| 5 gallon bucket mosquito dunks | 30 | — | **No** |
| mosquito dunks near me | 30 | 3 | **Canada-only** |

Plus **`mosquito dunk bucket` at 1,900/mo** (surfaced as the top keyword of the K-State result at #21).

**Fungus gnat / houseplant cluster totals ~945/mo** across seven variants — larger than `do mosquito dunks work`. It is also entirely **market-neutral**: houseplants have no nationality, so building it costs zero Canadian relevance.

---

## 4. What the top pages have that ours does not

**Summit Chemical (#4, AIO-cited):** EPA-registered identity and label-grade specifics. The listed use sites go far beyond ours — *tree holes, elevator shafts, planter reservoirs, rain gutters, flower pots, water gardens, koi ponds, animal watering troughs*. Two claims we lack entirely: **"approved for use in organic production"**, and **labeled for use in animal watering troughs**. It also states a dunk works whether floating or sunk.

**Southern Living (#9, the other AIO citation):** a first-person "I tried it" test of the **Mosquito Bucket of Doom**. Editorial format, personal verdict, seasonal peg. This is the format the AI Overview chose to cite alongside the manufacturer.

**Reddit r/lawncare (#8):** unvarnished practical debate — does a dunk do anything for a *lawn* (as opposed to a container), how many you actually need, whether it is worth it. Real objections, plainly stated.

**University extension services (#16 NC State, #21 K-State, #10 Mississippi State):** the dosing and method detail that consumers actually search for and that our page does not carry:
- **K-State Extension (Johnson County):** the full bucket build — 2–5 gallon bucket, filled ½ to ⅔, a handful or two of straw or grass clippings, **one quarter of a dunk per 5-gallon bucket**, refreshed **every 30 days**; overflow holes drilled ~6 inches from the top; hardware cloth cover with a stick as an escape ramp; sited in shade, low traffic. Attributed to **Doug Tallamy, University of Delaware entomologist**.
- **NC State Extension (New Hanover County):** "Dunks will last around 3-4 weeks before they need to be replaced" — a *shorter* interval than the label's 30 days.
- The **quarter-dunk cost-saving trick** appears repeatedly across US results. Ours says only "1 dunk per 50 gallons."

**Video (#7, #18, #24) and images (AIO sitelinks, entire shopping pack):** we have neither.

---

## 5. What a US reader needs that our Canadian page omits

### US agencies — we cite only Health Canada
Our page cites **Health Canada PCP #18158** (correct and load-bearing for Canada — keep it). A US reader gets no regulatory anchor at all. The US identity is:
- **EPA Reg. No. 6218-47**, Summit Chemical Company, Baltimore, MD. Signal word **CAUTION**; label notes moderate eye irritation.
- **EPA (Bti for Mosquito Control fact sheet):** Bti toxins affect only the larvae of **mosquitoes, black flies and fungus gnats**; EPA has registered five Bti strains across 48 pesticide products for residential, commercial and agricultural use; Bti **has no toxicity to people**; it is approved for pest control in **organic farming operations**; and there is **no documented resistance to Bti as a larvicide** even in populations treated for decades.
- **State extension services** are the trusted local voice in the US — NC State, K-State, Mississippi State all rank here. Naming them is a US-native authority signal Canadian pages never carry.

### US species and ranges — our page names none
Canada frames dunks as *nuisance + black fly*. The US frames them as *disease vector control*, which is a far stronger case for the product and one we make nowhere:
- **CDC:** West Nile virus is the **leading cause of mosquito-borne disease in the contiguous United States**; more than 1,300 people develop severe neuroinvasive illness and more than 130 die annually. Primary vectors: **Cx. pipiens** (northern states), **Cx. quinquefasciatus** (southern states), **Cx. tarsalis** (western states). *Culex breeds in exactly the foul, organic-rich standing water a dunk treats* — rain barrels, buckets, clogged gutters, catch basins. This is the single most persuasive US argument for a dunk and it is absent.
- **CDC:** *Aedes aegypti* spreads **dengue, chikungunya and Zika**, present in **Florida, Hawaii, Texas, Puerto Rico, the U.S. Virgin Islands and American Samoa**.
- **CDC:** *Anopheles* (*An. freeborni*, *An. quadrimaculatus*) across **most of the continental United States**; malaria vector.
- ***Aedes albopictus*** (Asian tiger mosquito) — the classic US container breeder, now across the Southeast, Mid-Atlantic and lower Midwest. The most dunk-relevant species in the country and we never name it.

### US seasonality — our page hard-codes May–September
"May through September" appears in the Quick Answer bullets, the FAQ, the retail-table footnote and the strategy section. For a reader in **Florida, the Gulf Coast, south Texas, southern California, Arizona, Hawaii or Puerto Rico** that is simply wrong — season runs most or all of the year, and the arithmetic changes with it: a 6-pack does **not** cover a season there. A US reader also needs to know the northern-US window (roughly April/May–October, later than Canada's) and the mid-Atlantic/Midwest window.

### US retail — our where-to-buy table is 100% Canadian
The table lists Canadian Tire, Home Depot Canada, Rona, Lowe's Canada with CAD prices. The US SERP carries **Home Depot US (#14), Lowe's US (#17), Walmart (#23)**, and US suggestions want **Ace Hardware** (40/mo), Target (30/mo), plus Tractor Supply. `mosquito dunks home depot` alone is **300/mo** in the US.

---

## 6. Where `app/blog/mosquito-dunks-canada-guide/page.tsx` falls short — precisely

The page is **352 lines**, well-built, and already ranks **US position 5.3**. It is not thin. It is *geo-locked*. Findings in priority order:

**1. Head-term invisibility is the whole problem.** Across 90 days of US GSC data, **not one impression** came from the bare head term `mosquito dunks` (22,000/mo). Every US query it surfaces on is Canada-qualified: *mosquito dunks canada, summit mosquito dunks canada, are mosquito dunks available in canada, canadian tire mosquito dunks, bti canada, buy mosquito dunks canada, bti mosquito dunks canada*. 328 US impressions against a 22,000/mo head term. Position 5.3 is real but it is 5.3 on the wrong queries.
*Constraint:* the title, meta description, H1, slug and Quick Answer are frozen. The fix therefore has to be **body passages and FAQ entries** that give Google US-relevant, US-phrased text to rank on within the same URL — passage ranking plus FAQPage schema. Do not touch lines 81–86 (metadata) or 132 (H1) or the Quick Answer block at lines 130–140.

**2. The Mosquito Bucket of Doom is completely absent — the single largest gap.** The string "bucket" does not appear anywhere in the file. Meanwhile the method occupies: one of only **two AI Overview citations** (Southern Living), position 9, the viral X post at position 10, the Mississippi State Extension video at position 10, and K-State Extension at position 21. Keyword value: `mosquito dunk bucket` **1,900/mo**, plus `mosquito dunks bucket` 150, `mosquito dunks in buckets` 60, `mosquito dunks bucket method` 50, `5 gallon bucket mosquito dunks` 30.
> **Editorial hazard — read before writing this section.** The canonical framing of the bucket method (Doug Tallamy, University of Delaware) is explicitly **hostile to barrier spray**: the widely-quoted line is that sprays kill only ~10% of adult mosquitoes while killing butterflies, bees and fireflies as collateral. Cover the *method*, do **not** import that framing, and do **not** quote or rebut the 10% figure — rebutting it amplifies it. Our honest and consistent angle is the one the page already argues elsewhere: a bucket is an oviposition sink for water **you** control; it does nothing about adults arriving from a neighbour's yard, a ravine or a creek, which is what a barrier spray handles. That framing is true in both countries and does not attack the method.

**3. PAA question #2 — "Do mosquito dunks kill anything else?" — is not answered anywhere.** Every safety passage on the page states what Bti is *safe for*. None states what it *also kills*. The correct, EPA-sourced answer (black fly larvae, fungus gnat larvae, and nothing else) is a distinct question with no matching H2 or FAQ. This is a clean AI Overview target.

**4. PAA #4 — "Are mosquito dunks harmful to humans?"** The page answers only the positive phrasing ("Are mosquito dunks safe for pets, fish, and humans?", line 27). The negative phrasing is a separate PAA string and needs its own entry.

**5. The safety cluster is one paragraph doing eight jobs.** Line 27–28 bundles pets, fish, humans, frogs, beneficial insects, pollinators and birds into a single answer. The US long tail wants each as its own answerable passage: birds (250), pets (200), **dogs (150 — CPC $350)**, bees (80), plants (50), fish (40), cats (40), humans (30). Roughly **840/mo** currently compressed into one un-snippetable block.

**6. No EPA, no US regulatory identity.** Health Canada PCP #18158 appears twice (lines 57, 73) and the key-facts table row reads "Health Canada approval — Yes." Nothing anywhere gives a US reader **EPA Reg. No. 6218-47**, the "approved for use in organic production" claim, or the EPA no-documented-resistance finding. Additive fix, both markets served on one line.

**7. Retail table and pricing are Canada-only** (lines 141–190). Five rows, all Canadian retailers, all CAD. Add a US row set or a second sibling table — **do not modify or remove the Canadian one**; it is carrying 27,290 Canadian impressions.

**8. Seasonality assumes a Canadian calendar.** May–September appears at lines 37, 55, 63, 185 and in the strategy section. A "how many dunks does your season actually need" block keyed to US regions (year-round Gulf/Florida/Hawaii/Puerto Rico; ~March–November Southeast/Southwest; ~April–October Mid-Atlantic/Midwest; ~May–September northern tier and Canada) resolves it additively and leaves every existing Canadian line intact.

**9. Dosing is thinner than the extension services ranking above us.** The page gives "1 dunk per 50 gallons" for a rain barrel (line 31) and nothing else. Missing: the **quarter-dunk per 5-gallon bucket** rate from K-State, the **break-a-dunk-into-four-pieces** cost-saving trick that recurs across the US SERP, and NC State's **3–4 week** real-world replacement interval versus the label's 30 days.

**10. `do mosquito dunks expire` (100/mo) has zero coverage.** A real question for anyone buying a 20-pack, and unanswered anywhere on the page.

**11. Fungus gnats is one FAQ paragraph against ~945/mo of demand** (line 67–68). This is the highest-leverage additive section available: large US volume, KD 0, and completely market-neutral — it takes nothing away from Canada. It deserves a full H2 with the steeping method, the potting-soil application, the repeat cadence, and the Bits-vs-Dunks recommendation.

**12. The "does it still work once it sinks?" question is missing.** Both Summit and the US retailer Q&A pages address it; it is a common real-world worry and a natural snippet. Not on our page.

**13. No image, no video, no HowTo schema.** The SERP carries video at 7, 18 and 24 and image thumbnails throughout. The page already ships BlogPosting + Breadcrumb + FAQPage + Speakable (lines 93–96) — well set up. Adding **HowTo schema for the bucket build** is the obvious additive win; Ahrefs types the K-State result as `/Article/How_to`.

### What must not change
Title, meta description, H1, slug and the Quick Answer capsule are frozen. Do not touch the Canadian retail table, the Health Canada citations, PCP #18158, `CTASection`, `BlogPostCTA`, `InlineYardRiskCTA`, `StickyBuyBar`, `AwardRow`, `AffiliateDisclosure`, or any internal link to `/mosquito-control`, `/mosquito-control-cost`, `/toronto-mosquito-control`, `/mississauga-mosquito-control` or the three related blog posts. The existing `asin="B005UTKT0W"` on `StickyBuyBar` (line 123) and in `AwardRow` must stay; every new affiliate link uses `search=` only.
