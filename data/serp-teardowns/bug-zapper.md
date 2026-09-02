# US SERP Teardown — "bug zapper"

**Date pulled:** 2026-09-02
**Market:** United States (google.com, gl=us)
**Our page:** `/blog/bug-zappers-canada-do-they-work` — current US position ~16.7
**Sources:** Ahrefs SERP Overview (live pull, US), Ahrefs Keywords Explorer (US), Bing US SERP, direct WebFetch of ranking pages. Google's own SERP HTML blocked the fetch (served the "trouble accessing Google Search" interstitial), so the organic order and SERP-feature list below come from the Ahrefs live SERP snapshot, cross-checked against Bing.

---

## 0. The keyword, in numbers

| Metric | Value |
|---|---|
| US volume | 28,000/mo (Ahrefs) |
| Global volume | 38,000/mo |
| US clicks | 22,646/mo |
| Keyword Difficulty | **6** |
| Traffic potential (parent topic) | 5,800/mo |
| CPC | $30 |
| Parent topic | `bug zapper` (it is its own parent — no consolidation risk) |
| Intent flags | informational **+ commercial + transactional** |

KD 6 against 28K volume is the whole story. This is not a hard keyword. We rank 16.7 because of **format and intent mismatch**, not because of authority.

---

## 1. SERP features above the organic results

Ordered as they appear:

1. **Popular Products / Shopping carousel** — position 1, ~15 product tiles. Occupies the entire first screen. Tiles observed: HBUDS Solar Bug Zapper, "4000v Bug Zapper", Anysun Solar Bug Zapper 3-in-1 (4200V, 2,100 sq ft, IPX5), LiBa Electric Bug Zapper, Black Flag Handheld ZR-7936, Eliminator Handheld Racket, Black Flag 1/2-Acre Outdoor, Poloma 30W Indoor, PIC Bulb LED Insect Killer, Harbor Freight electric fly swatter.
2. **People Also Ask** — position 2. Four questions (verbatim in §3).
3. **Sitelinks** — under the Amazon result (position 4), incl. a Google store-pages link showing 9.6K.
4. **Local Pack** — position 5. **Westlake Ace Hardware, Harbor Freight, The Home Depot.** Physical-store buying intent is being served explicitly.
5. **Top Stories / news + video block** — position 7. Four slots, **three of them video**:
   - Facebook video — Allen Pan, "Mosquito Season Has NOTHING On This #bugzapper"
   - HGTV — "The 9 Best Bug Zappers for Chemical-Free Pest Control" (article)
   - YouTube — "Does a gun-shaped bug zapper work?"
   - Instagram Reel — "Bug zappers do more harm than good"
6. **Second Shopping block** — position 9, another ~20 tiles (Flowtron x5, DynaTrap, TECHKO solar, NEBO, Bell & Howell, Aspectek, PIC, Anysun).
7. **Third Shopping block** — position 15.
8. **Image thumbnails** attached to most tiles; **video thumbnails** on the video slots.

### AI Overview

**Not observed.** Ahrefs' feature list for this keyword returns `organic_shopping, image_th, question, sitelink, local_pack, news, video_th, image` — **no AI Overview entry**. The Bing US SERP also returned no AI answer box. Treat as "not present / not consistently triggered" rather than proven absent, since Google blocked a direct read.

**Strategic consequence:** there is no AIO citation to win here. The **PAA block at position 2 is the highest-leverage feature on this SERP** and it is the one thing a DR-0.5 site can realistically take. Everything else above position 8 is either shopping inventory or a marketplace.

---

## 2. Top organic results and what kind of page each is

| Pos | URL | Page type | DR | UR | RDs | Backlinks |
|---|---|---|---|---|---|---|
| 1 | *(Shopping carousel)* | Product tiles | — | — | — | — |
| 2 | *(People Also Ask)* | Question block | — | — | — | — |
| 3 | flowtron.com/collections/outdoor-residential-use | **Manufacturer collection page** | **26** | **4** | **3** | **21** |
| 4 | amazon.com/Bug-Zappers/b (+ sitelinks) | Marketplace category | 96 | 4 | 6 | 19 |
| 5 | *(Local Pack — Ace Hardware / Harbor Freight / Home Depot)* | Local | — | — | — | — |
| 6 | stemforbugs.com/products/stem-flying-insects-zapper | **Single product page** | **32** | **4** | **0** | **0** |
| 7 | *(News + video block — FB / HGTV / YouTube / Instagram)* | Video-led | — | — | — | — |
| 8 | en.wikipedia.org/wiki/Bug_zapper | Encyclopedia | 97 | 7 | 159 | 319 |
| 9 | *(Shopping block #2)* | Product tiles | — | — | — | — |
| 10 | homedepot.com/b/...Bug-Zappers | Retailer category | 90 | 5 | 10 | 30 |
| 11 | nytimes.com/wirecutter/blog/do-bug-zappers-work/ | **Editorial explainer** | 94 | 8 | 112 | 222 |
| 12 | youtube.com/watch?v=QScHm7_3IxQ — "Which Bug Zapper Is The Best?" | Video | 99 | 5 | 7 | 7 |
| 13 | walmart.com/browse/...bug-zappers | Retailer category | 92 | 6 | 6 | 26 |
| 14 | bobvila.com/reviews/best-bug-zapper/ | **Editorial roundup** | 85 | 6 | 4 | 4 |

Bing's US SERP corroborates the same cast and adds **Better Homes & Gardens — "The Winners of Our Best Bug Zapper Tests"** and **Lowe's** in the top 10.

### The proof of achievability

> **#3 organic — flowtron.com — DR 26, URL Rating 4, 21 backlinks, 3 referring domains.** It ranks above Amazon (DR 96), Wikipedia (DR 97) and Wirecutter (DR 94).
>
> **#6 organic — stemforbugs.com — DR 32, URL Rating 4, ZERO backlinks, ZERO referring domains.**

Two of the first three non-marketplace organic results have essentially no link equity. Combined with KD 6, this proves the barrier on this query is **relevance and format, not domain authority**. A DR-0.5 site is not structurally locked out.

**But read the caveat honestly:** both of those low-DR winners are *commercial* pages (a collection page and a product page) that match the shopping intent. Every *editorial* page on this SERP sits at 11 or below — Wirecutter DR 94 at #11, Bob Vila DR 85 at #14. So the realistic organic ceiling for our explainer is the **8–14 band**, and the genuine prize is the **PAA block at position 2**, which is format-driven and authority-cheap.

---

## 3. People Also Ask — VERBATIM

These are the exact four questions in the live US PAA block. They should become H2s (or verbatim FAQ entries) on our page.

1. **"Do bug zappers actually work?"**
2. **"Why did people stop using bug zappers?"**
3. **"What is the most effective bug zapper?"**
4. **"What is the best bug zapper for a screened-in porch?"**

### Our current coverage of those four

| PAA question | Our page | Verdict |
|---|---|---|
| Do bug zappers actually work? | Nearest is FAQ *"Do bug zappers actually kill mosquitoes?"* and H2 *"Do bug zappers actually work for mosquitoes?"* | **Near-miss.** Both add "mosquitoes", so neither is a verbatim match. The general form of the question is unanswered. |
| Why did people stop using bug zappers? | **Nothing.** Page has the inverse ("Why does it FEEL like bug zappers work if they don't?") | **Zero coverage.** |
| What is the most effective bug zapper? | AwardRow + ranked table exist, but no heading uses this phrasing | **Partial, unlabelled.** |
| What is the best bug zapper for a screened-in porch? | The string "screened" **does not appear anywhere on the page.** One passing mention of "covered porch" (Aspectek). | **Zero coverage — and this is the most US-specific of the four.** |

### Secondary question set (Ahrefs US, questions match — real standalone volume)

Operational ownership questions the page does not touch at all. Combined these are well over 1,500/mo of US volume at KD 0–5:

- how does a bug zapper work (150) / how does a bug zapper work to kill insects (50)
- how to clean a bug zapper (150) + how to clean bug zapper (100) + how do you clean a bug zapper (40) + how to clean a black flag bug zapper (60+30) — **~380/mo cluster**
- can a bug zapper kill you (100) / what happens if you touch a bug zapper (50)
- will a bug zapper kill flies (100) / does a bug zapper work on flies (80) / does a bug zapper kill flies (50) / will bug zapper kill flies (30) / will flies go to a bug zapper (30)
- will a bug zapper kill gnats (70) · wasps (70) · fruit flies (40) · fleas (40) · bees (30)
- can you use a bug zapper indoors (80) / can you put a bug zapper in the house (30) / can i use a bug zapper indoors (30)
- how many volts is a bug zapper (60)
- how much electricity does a bug zapper use (40) / how much power does a bug zapper use (20)
- can a bug zapper start a fire (40)
- how to hang a bug zapper (40) / where to place bug zapper (30)
- does a bug zapper work during the day (40)
- can you leave bug zapper on all night (30)
- bug zapper uv light dangerous (30)
- how to attract mosquitoes to bug zapper (40+20)
- how to test a bug zapper (50+20)

---

## 4. What the top pages contain that ours does not

### flowtron.com (#3 — the low-DR winner)

Nothing but a **model sizing ladder**, stated plainly and repeatedly:

- **BK-15D** — 15W — **½ acre**
- **BK-40D** — 40W — **1 acre**
- **BK-80D** — 80W — **1.5 acres**

Filterable by coverage, availability and price. That is the entire page. It beats Amazon and Wikipedia on this query because it answers "which size do I need" faster than anyone else.

**Our gap:** we name the BK-40D but the wattage→acreage ladder lives on a *different* URL (`/blog/flowtron-bug-zapper-canada`). This page carries none of it.

### Bob Vila (#14 — the editorial template)

Section order: Comparison table → Our Top Picks → 5 award picks → **How We Tested** → **What to Consider When Choosing a Bug Zapper** → FAQs → **Meet the Tester**.

Buying-guide subsections we have **no equivalent of**:

- **Power Source** (corded / solar / battery)
- **Outdoor vs. Indoor**
- **Shock Value** (grid voltage)
- **Bait** (octenol / CO₂ attractant cartridges)
- **Coverage Area** (sq ft and acres)

Their FAQ set (verbatim), none of which we answer:

- "How do bug zappers work?"
- "What kind of bugs does a bug zapper kill?"
- "Do bug zappers work in daylight?"
- "Should I leave a bug zapper on all night?"
- "Do some bug zappers use a lot of electricity?"
- "What are the disadvantages of a bug zapper?"
- "Should I turn my bug zapper off in the rain?"
- "Is black light or white light better for bug zappers?"

They also cite **the EPA classifying bug zappers as "pesticide devices"** and note testing "during the height of bug season in the South."

Their picks: Flowtron BK40DK (Best Overall), Black+Decker BDPC941 (Best Bang for the Buck), Zap It! rechargeable rackets (Best Handheld), Pic Solar Insect Killer Torch (Best Solar-Powered), Aspectek HR292-1 20W (Best for Indoors).

### Wirecutter (#11) — "Do Bug Zappers Work?"

Direct fetch blocked by nytimes.com. Confirmed from the SERP: it is the single *editorial* page ranking on this transactional SERP, on exactly our thesis, with 112 referring domains. Its existence is the evidence that our angle can rank — just not above the shopping inventory.

### Wikipedia (#8)

Carries the **terminology and history** we lack: "electrical discharge insect control system", "electric insect killer", "(insect) electrocutor trap"; the mechanism; the shift from fluorescent UV tubes to **long-life LEDs** in newer models; and octenol-baited variants.

### The video block (#7)

Three of four slots are video (Facebook, YouTube, Instagram). We have **no video or embedded media of any kind**.

---

## 5. What a US reader needs that our Canadian page omits

This is where the page is weakest. It is not "insufficiently detailed" — it is **denominated in the wrong country** end to end.

### 5a. Units — the page speaks metric and acres; the US SERP speaks square feet and volts

Every shopping tile on this SERP leads with **sq ft and grid voltage**: "2,100 sq ft", "800 SQFT", "6,000 sq ft", "3000V", "4000V", "4200V", "4500V". Our page contains **zero square-foot figures and zero voltage figures**. Worse, our distance figures are metric — "4.5m repellent zone", "at least 3 metres from where people sit" — which a US reader has to convert (15 ft and 10 ft).

Sizing anchor a US reader needs and we never state: **1 acre = 43,560 sq ft.**

### 5b. Currency and retail — 100% Canadian

Two full retailer tables (Canadian Tire, Home Depot Canada, Rona, Costco Canada, Walmart Canada, Lowe's Canada, Dollarama), all prices in CAD, and every affiliate CTA reads "**on Amazon.ca**". A US reader lands on a foreign price list.

The US SERP tells us exactly which retailers matter — the **local pack is Westlake Ace Hardware, Harbor Freight, The Home Depot**, and Bing adds **Lowe's** and **Walmart**. **Harbor Freight** and **Ace Hardware** have no Canadian analogue and appear nowhere on our page; **Tractor Supply** is the rural-US equivalent of the Canadian Tire slot. Rona and Dollarama mean nothing to a US reader.

### 5c. US species — the page names zero mosquito species

For a US reader this is the difference between a generic argument and a correct one:

- ***Culex quinquefasciatus*** — southern house mosquito; primary **West Nile** vector across the South. Mississippi State University Extension covers it as the region's key species.
- ***Culex pipiens*** — northern house mosquito; the WNV vector in the northern US (and the species that maps most closely onto our Ontario experience).
- ***Aedes aegypti*** and ***Aedes albopictus*** (Asian tiger mosquito) — vectors of **dengue, Zika, chikungunya**; established across the Southeast; range is pushing north. **Critically, these are aggressive daytime biters.** That is a US-specific reason a night-running UV zapper is *even more* useless in Houston or Miami than in Mississauga — and it is an argument our page cannot currently make because it names no species.
- Species-count spread (AMCA): **Texas has 85 mosquito species; Hawaii has 6.** **At least 43 US species carry West Nile virus.**

### 5d. US seasonality and regions — the page is implicitly May–September Ontario

The whole page assumes a five-month northern season. US reality:

- **Gulf Coast / Florida / South Texas / southern California:** effectively year-round. Miami-Dade data shows *Aedes aegypti* peaking in the summer wet season and *Culex quinquefasciatus* peaking in the **winter** dry season, with both present all year.
- **Southeast / mid-Atlantic:** roughly March–November.
- **Midwest:** April–October.
- **Northeast / Upper Midwest:** May–September — the only band where our existing Canadian framing transfers unchanged.

2026 US season context (CDC): the **earliest start to the West Nile season on record**, with the highest case count by that point in the year since 2004 — 48 cases by June 30, 38 of them severe neuroinvasive disease — plus **500+ US dengue cases** reported in 2026.

### 5e. US agencies and authorities — we cite none of the right ones

Our page's only regulatory anchor is "**Health Canada-approved**". For a US reader that is a foreign regulator. Missing, in rough order of value:

- **American Mosquito Control Association (AMCA)** — the definitive US body on this exact question, and the highest-value citation available. Their published position: mosquitoes were **4.1% and 6.4%** of daily catch in the Notre Dame work; **"there was no significant difference in the number of mosquitoes found in yards with or without bug zappers"**; and **an estimated 71 billion to 350 billion beneficial insects may be killed annually in the United States by electrocuting devices.** That last number is a US-specific, quotable, linkable fact and we do not have it.
- **US EPA** — bug zappers are regulated as **"pesticide devices"** under FIFRA, *not* registered pesticides: no efficacy pre-approval, but they must be made in an EPA-registered establishment, carry an EPA establishment number, and hold data supporting any efficacy claim. A unit sold *with* an attractant (octenol) crosses into registered-pesticide territory. Bob Vila already cites this; we don't. **This is the natural US mirror of our existing "Health Canada approved" line — additive, not a replacement.**
- **CDC** — Integrated Mosquito Management; the source-reduction-first hierarchy; WNV and dengue prevention guidance.
- **NPIC** (National Pesticide Information Center, Oregon State University) — "Non-Chemical Pest Control Devices"; consumer hotline 1-800-858-7378.
- **UF/IFAS Extension** — our page says "University of Florida studies" generically. The citable US artifact is the UF/IFAS Extension release ("Snap! Crackle! Pop! Electric Bug Zappers Are Useless For Controlling Mosquitoes"). **Land-grant extension services are the trusted US equivalent of provincial public health** and we reference none of them by name.
- **Kansas State University (Urban & Broce)** — the bacteria/virus **aerosolization** finding: electrocution ruptures the insect and disperses its microbial load as a fine mist around the unit. Our page gestures at this ("zapped insects scatter as fine particles ... can be inhaled") **with no source at all** — a sourcing hole on a health claim.
- **Xerces Society** and **Audubon** — already on the page, both US organisations, but framed for "ecologically-conscious Canadian homeowners".

---

## 6. Where our page falls short — precise audit

File: `C:/Users/buzzs/buzzskito-website/app/blog/bug-zappers-canada-do-they-work/page.tsx`

**What is already strong and must not be touched:** the Quick Answer capsule (L112–127), the title/meta/H1/slug, the 0.13–4% research spine, the Delaware (Frick & Tallamy, 1996) citation, the Xerces/Audubon pollinator argument, the "racket zapper exception" honesty, the cost-effectiveness table, all internal links and city links, `CTASection`, `AffiliateDisclosure`, and all `search=`-only BuyLink/AwardRow/StickyBuyBar props.

### The shortfalls

1. **Intent mismatch is the primary ranking cause, not thin content.** Ahrefs flags this query as informational **+ commercial + transactional**, and positions 1–10 are almost entirely shopping carousel, manufacturer store, Amazon, local pack, product page and retailer categories. Our page's entire architecture argues *against* purchase. Wirecutter proves the honest angle can rank — at #11. We are at 16.7 because we carry the thesis **without** the buyer scaffolding (sizing, voltage, placement, use-case) that this SERP rewards. Additive fix: keep every word of the thesis, add the buying scaffolding around it.

2. **PAA #2 "Why did people stop using bug zappers?" — zero coverage.** No history, no cultural decline, no retail-availability angle. We have the inverse question instead.

3. **PAA #4 "What is the best bug zapper for a screened-in porch?" — zero coverage.** The word "screened" appears nowhere in the file. Screened porches are a standard US housing feature (and near-absent in the GTA), which is exactly why a Canadian page omits it. This is the cleanest single US gap on the page.

4. **PAA #1 and #3 are near-misses, not hits.** L180 asks "Do bug zappers actually work **for mosquitoes**?" and FAQ L21 asks "Do bug zappers actually **kill mosquitoes**?" Neither matches the verbatim PAA string. Same for "What is the most effective bug zapper?" — the ranked table at L297–326 answers it but no heading says it.

5. **No sizing/coverage guidance in US units.** No sq ft anywhere; no 1 acre = 43,560 sq ft anchor; coverage given only as "¼ – ½ acre", "½ acre", "Up to 1 acre". The #3-ranking page wins on precisely this.

6. **No voltage anywhere.** Every shopping tile leads with 3000V/4000V/4200V/4500V and "how many volts is a bug zapper" is a standing US query. The page never mentions grid voltage.

7. **Metric distances in a US context.** "4.5m repellent zone" (L46, L382), "at least 3 metres" (L50). No feet equivalents.

8. **No buying-guide criteria section at all.** The page jumps from the research table straight to picks. Bob Vila's five criteria — power source, indoor vs outdoor, shock value, bait/octenol, coverage area — have no counterpart here. Octenol is mentioned only as a pointer to another URL (L370).

9. **No operational / ownership content.** Nothing on cleaning, hanging height, placement distance from seating, weather/rain, running cost in kWh, bulb replacement timing, fire safety, or what happens on contact. That is ~1,500/mo of US long-tail at KD 0–5 sitting unclaimed.

10. **No US retailers.** Two Canadian retailer tables (L138–168, L343–369) and no US equivalent. The SERP's own local pack names Ace Hardware, Harbor Freight and Home Depot; Lowe's, Walmart and Tractor Supply are missing too.

11. **Every affiliate CTA says "Amazon.ca".** L125, L284, L329, L337, L373–374, L405. A US visitor is sent to a Canadian storefront. (Handle via the existing OneLink/US-tag process — do **not** improvise ASINs or new tags here.)

12. **Zero US regulatory anchor.** Only "Health Canada-approved" (L381). No EPA pesticide-device framing, no CDC, no NPIC.

13. **Zero species named** — so the page cannot make the strongest US argument available to it: that *Aedes aegypti* and *Aedes albopictus* bite in daylight, which makes a nocturnal UV device even less relevant across the US South.

14. **Seasonality is implicitly Ontario's May–September.** No year-round Gulf/Florida framing, no regional season bands.

15. **Sourcing hole on a health claim.** L50 states zapped insects "scatter as fine particles ... can be inhaled if you stand close" with **no citation**. The Kansas State (Urban & Broce) aerosolization work is the source. Under the medical-accuracy rule this must be attributed.

16. **No "not medical advice" notice.** The page already makes health-adjacent claims (UV exposure, inhalation, child/pet safety, L49–50). If we add WNV/dengue content, the notice becomes mandatory.

17. **The Xerces/Audubon paragraph is framed Canadian-only** ("For ecologically-conscious Canadian homeowners", L38). Both are US organisations. The AMCA's **71–350 billion beneficial insects killed annually in the United States** figure is the US-scaled version of the same argument and is absent.

18. **No media of any kind.** Three of the four slots in the SERP's news/video block are video. The page has no image, diagram or embed.

19. **Flowtron model ladder is off-page.** BK-15D/BK-40D/BK-80D wattage→acreage sizing — the exact thing the #3 result ranks on — lives at `/blog/flowtron-bug-zapper-canada`, not here.

20. **No terminology coverage.** Wikipedia ranks #8 partly on the alternate names ("electrical discharge insect control system", "electrocutor trap") and on the fluorescent-UV → LED shift. Neither appears on our page.

---

## 7. Recommended additive plan (strictly additive; nothing removed)

Keep title, meta, H1, slug and Quick Answer capsule **exactly as they are**. Keep every Canadian table, retailer, price, source, internal link, service CTA and affiliate component untouched. Add, in this order of expected return:

1. **Four verbatim PAA H2s** — "Do bug zappers actually work?", "Why did people stop using bug zappers?", "What is the most effective bug zapper?", "What is the best bug zapper for a screened-in porch?" — each with a 40–60 word direct answer up top. Mirror them into `FAQS` so they enter the FAQPage schema. This is the position-2 play.
2. **A "What size bug zapper do you need?" section in both units** — sq ft *and* acres, with 1 acre = 43,560 sq ft, the 15W/40W/80W → ½/1/1.5-acre ladder, and grid voltage explained (3000V–4500V, what it does and doesn't tell you).
3. **A US section that sits alongside the Canadian ones** — "Where to buy in the United States" (Home Depot, Lowe's, Walmart, Ace Hardware, Harbor Freight, Tractor Supply, Amazon.com) as a **new** table beside the existing Canadian tables, plus USD ranges.
4. **A US authorities block** — AMCA (the 71–350 billion figure and the "no significant difference between yards with and without zappers" line), EPA "pesticide device" status under FIFRA as the US mirror of the existing Health Canada line, CDC Integrated Mosquito Management, UF/IFAS Extension, NPIC. Every claim attributed inline by name.
5. **A US species + season section** — *Culex quinquefasciatus*, *Culex pipiens*, *Aedes aegypti*, *Aedes albopictus*, the daytime-biter point, the regional season bands, Texas 85 / Hawaii 6, 43 WNV-carrying species. Add the "not medical advice" notice with this block.
6. **An ownership/operations section** — cleaning, hanging height, placement distance (in feet *and* metres), rain, electricity cost, bulb life, fire safety, what happens on contact — sweeping the ~1,500/mo long-tail cluster.
7. **A buying-criteria section** matching Bob Vila's five axes (power source, indoor vs outdoor, voltage, octenol/bait, coverage) — framed honestly, no fabricated testing language.
8. **Source the aerosolization claim** to Kansas State (Urban & Broce) at L50.
9. **Add feet alongside every metric distance** (4.5 m ≈ 15 ft; 3 m ≈ 10 ft).

Affiliate handling: any new `BuyLink` / `AwardRow` / `StickyBuyBar` uses `search=` only — no `asin=`. No prices, star ratings, review counts, best-seller rank or product images from Amazon. No `AggregateRating` schema. No claims of having tested anything.

---

## 8. Sources consulted

- Ahrefs SERP Overview — "bug zapper", US, live pull 2026-09-02
- Ahrefs Keywords Explorer overview + questions match — "bug zapper", US
- https://www.mosquito.org/faqs/ — American Mosquito Control Association
- https://www.bobvila.com/reviews/best-bug-zapper/
- https://flowtron.com/collections/outdoor-residential-use
- https://www.epa.gov/pesticides/pesticide-devices-guide-consumers
- https://npic.orst.edu/reg/devices.html
- https://www.cdc.gov/mosquitoes/php/toolkit/integrated-mosquito-management-1.html
- https://www.cdc.gov/mosquitoes/mosquito-control/adulticides.html
- https://blogs.ifas.ufl.edu/news/?p=104 and https://archive.news.ufl.edu/articles/1997/07/snap-crackle-pop-electric-bug-zappers-are-useless-for-controlling-mosquitoes.html
- https://extension.msstate.edu/publications/the-southern-house-mosquito-and-related-species-biology-and-control
- https://journals.plos.org/ploscompbiol/article?id=10.1371%2Fjournal.pcbi.1007369
- https://en.wikipedia.org/wiki/Bug_zapper
- Bing US SERP for "bug zapper" (cross-check)
