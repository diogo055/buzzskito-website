# US SERP Teardown — "dynatrap"

**Market:** United States (google.com, US)
**Keyword:** `dynatrap` — 7,600/mo US, 10,000 global, KD **89**, CPC $20
**Our position:** ~4.8
**Our page:** `app/blog/dynatrap-canada-review/page.tsx` (512 lines) → `/blog/dynatrap-canada-review`
**Teardown date:** 2026-09-02
**Sources:** live Ahrefs SERP overview (US), Ahrefs Keywords Explorer (US), Bing/Brave live SERPs, Google autocomplete, and direct fetches of dynatrap.com, bobvila.com, reviewed.com, todayshomeowner.com, mosquitoreviews.com, mosquito.org, cdc.gov, epa.gov.

---

## 0. The strategic read (this changes what we should optimise for)

The head term `dynatrap` is **brand-navigational and effectively closed**. KD 89, and 8 of the 10 organic slots are the manufacturer or a big-box retailer. There is exactly **one** editorial slot in the top 20 (Bob Vila, position 10). We will not win `dynatrap` and should not shape the page around it.

The winnable volume sits one layer down, in the **review cluster** — where difficulty collapses to near zero and *every top-5 page has a URL Rating of 0–5*:

| Keyword | US volume | KD | AI Overview? |
|---|---|---|---|
| dynatrap mosquito trap | 1,400 | 3 | no |
| dynatrap reviews | 1,200 | **1** | **yes** |
| dynatrap mosquito | 1,200 | 1 | — |
| dynatrap insect trap | 1,100 | 1 | — |
| dynatrap 1/2 acre | 900 | 1 | — |
| dynatrap 1/2 acre outdoor insect trap | 800 | 0 | — |
| dynatrap 1 acre outdoor insect trap | 800 | — | — |
| dynatrap outdoor insect trap | 700 | 1 | — |
| dynatrap 1 acre | 350 | 0 | — |
| dynatrap costco | 250 | 1 | no |
| dynatrap replacement bulb | 250 | 0 | — |
| does dynatrap work | 200 | **0** | **yes** |
| dynatrap review | 200 | **0** | **yes** |
| dynatrap bulb replacement | 200 | 0 | no |
| dynatrap dt1050 | 200 | 0 | — |
| is dynatrap worth it | 20 | 0 | **yes** |
| dynatrap vs mosquito magnet | 20 | 1 | **yes** |

That is **~11,000+/mo of near-zero-difficulty US volume** adjacent to a head term we can't have. Additive sections should be aimed here.

---

## 1. SERP features above the organic results

### Head term `dynatrap` (7,600/mo)

Feature stack, in render order:

1. **Position 1 — dynatrap.com with a 6-pack of sitelinks**: Outdoor Traps · Indoor Traps · DynaTrap Product Store · "Dynatrap® 1 Acre LED …" · "Placing, Using and …". The brand owns the entire first screen.
2. **Position 2 — Shopping pack (`organic_shopping`), 8 product tiles with images.** Repeats again at positions 9, 11 and 14 — roughly **35 shopping tiles** across the page. This SERP is overwhelmingly transactional.
3. **Position 3 — People Also Ask (4 questions).** See §3.
4. **Position 6 — News/video carousel**, mixing YouTube and Reddit.
5. **Positions 7, 15, 18 — video thumbnails** on organic results (all YouTube, DR 99).

**No AI Overview on the head term.** Ahrefs `serp_features` for `dynatrap` returns `sitelink, organic_shopping, image_th, question, news, video_th` — no `ai_overview`. Google is treating the bare brand query as shopping, not as a question.

### Review cluster `dynatrap reviews` (1,200/mo, KD 1) — **this one has an AI Overview**

- **Position 1 — AI Overview**, and its citation carousel surfaces exactly one source: **the Reddit r/Costco thread "Do DynaTraps work? Idk if its worth the 70 bucks."**
- **Position 3 — People Also Ask (4 questions)**, a partly different set. See §3.
- News/video block at 9 (Popular Mechanics, a Facebook group post, a YouTube DT1130SR unboxing).

`ai_overview` also fires on `does dynatrap work`, `dynatrap review`, `is dynatrap worth it`, `dynatrap vs mosquito magnet` and `dynatrap xl`. **A knowledge panel** appears on `dynatrap xl` and `dynatrap bulb replacement`; a **local pack** appears on `dynatrap mosquito trap` and `dynatrap xl`.

**The finding that matters:** on the review cluster, Google's AI Overview is citing *a forum thread*, not a publisher. It wants lived owner experience and a price-worth verdict. Our page offers neither.

---

## 2. Top 10 organic + authority

### `dynatrap` (head term)

| # | Result | Type | DR | UR | Ref. domains |
|---|---|---|---|---|---|
| 1 | dynatrap.com | Manufacturer home | **42** | 4 | 492 |
| 4 | amazon.com/stores/DynaTrap | Retail brand store | 96 | **0** | — |
| 5 | costco.com (½-acre LED listing) | Retail PDP | 86 | 50 | 24,491 |
| 8 | qvc.com (½-acre LED listing) | Retail PDP | 78 | 41 | 5,370 |
| 10 | bobvila.com — "Bug Battle? My Experience Testing…" | **Editorial, first-hand test** | 85 | **4** | **1** |
| 12–13 | tractorsupply.com (½-acre) | Retail PDP | 80 | 46 | 5,524 |
| 16 | reddit.com — r/HoustonGardening | Forum | 99 | 0 | — |
| 17 | woodstream.com/our-brands/dynatrap | Parent-company brand page | **41** | **0** | **2** |
| 19 | homedepot.com/b/Dynatrap | Retail category | 90 | 0 | — |
| 20 | lowes.com | Retail category | 88 | 50 | 21,013 |
| 7, 15, 18 | YouTube reviews | Video | 99 | 0 | — |
| 10 (alt) | solutionsstores.com — DT2000XLP | Retail PDP | — | — | — |

**Lowest-authority page in the top 5: dynatrap.com itself, DR 42.** The manufacturer's own domain is *weaker than every retailer ranking beneath it*. It holds position 1 purely on brand-entity match.

**Page-level, the whole SERP is soft.** In the top 5, the Amazon brand store sits at **URL Rating 0**, and dynatrap.com's homepage at **UR 4**. Woodstream at position 17 is **DR 41 / UR 0 with 2 backlinks**. Nothing here is defended by links — it's defended by being the brand or being a retailer Google trusts for shopping intent.

### `dynatrap reviews` (1,200/mo, KD 1) — the achievable SERP

| # | Result | Type | DR | UR | Ref. domains | Traffic |
|---|---|---|---|---|---|---|
| 2 | reddit.com r/Costco — "worth the 70 bucks" | Forum thread | 95 | **0** | **1** | 1,245 |
| 4 | amazon.com — DT160 ¼-acre PDP | Retail PDP | 96 | 5 | 4 | 282 |
| 5 | **bobvila.com — DynaTrap test** | **Editorial** | 85 | **4** | **2** | **163** |
| 6 | facebook.com group post (+3 sitelinks) | Social | 100 | 0 | — | 64 |
| 7 | homedepot.com — DT1050 *reviews* tab | Retail UGC | 90 | 0 | 1 | 6 |
| 8 | houzz.com — "Does Dynatrap Work?" | Forum thread | 92 | 0 | — | 35 |
| 9 | popularmechanics.com — best mosquito traps | Editorial (news) | — | — | — | — |
| 10 | reviewed.com — "Bites galore" | **Editorial, negative** | 79 | **0** | 6 | 77 |

**This is the proof of what's achievable.** The lowest-authority page in this top 5 is **Bob Vila at URL Rating 4 with 2 referring domains** — and it outranks Amazon's own product page and beats Reviewed.com. **Every single result in this top 10 has a URL Rating between 0 and 5.** Not one page in the cluster we actually want has earned its position with links. They rank on domain trust plus *first-hand experience* — and half the SERP is user forums, which have no domain-topical authority at all.

Five of the ten results (Reddit ×1, Facebook ×1+3 sitelinks, Houzz ×1, Home Depot reviews tab ×1) are **user-generated opinion**. Google has decided this query is answered by people who owned one.

---

## 3. People Also Ask — VERBATIM (these become H2s)

### From `dynatrap` (head term), PAA block at position 3:

1. **Does Dynatrap actually work?**
2. **Why does Dynatrap have to be 20 feet away?**
3. **Should I leave my Dynatrap on all the time?**
4. **What are people saying about the Dynatrap insect trap at Costco?**

### From `dynatrap reviews`, PAA block at position 3:

5. **Does DynaTrap actually work?** *(repeat — highest-priority question on the SERP)*
6. **Which is better, DynaTrap or Thermacell?**
7. **What are people saying about the DynaTrap insect trap at Costco?** *(repeat)*
8. **Should I leave my DynaTrap on all the time?** *(repeat)*

**Deduplicated H2 set (5):**
- Does DynaTrap actually work?
- Why does DynaTrap have to be 20 feet away?
- Should I leave my DynaTrap on all the time?
- What are people saying about the DynaTrap insect trap at Costco?
- Which is better, DynaTrap or Thermacell?

### Supporting question demand (Google autocomplete, US)

`does dynatrap` → work · work on mosquitoes · work on wasps · work on flies · kill bees · **work during the day** · mosquito trap work · kill mosquitoes · really work for mosquitoes · catch mosquitoes

`is dynatrap` → effective · **worth it** · waterproof · good · effective for mosquitoes · **safe for indoor use** · good for mosquitoes · **safe for bees** · **safe for pets** · **solar powered**

`how does a dynatrap` → work · mosquito trap work · xl work · **how long does a dynatrap last** · **how long does a dynatrap bulb last** · **how much does a dynatrap cost** · how much does a dynatrap weigh

`dynatrap vs` → **thermacell** · **mosquito magnet** · **flowtron** · **bug zapper** · thermacell reddit · **zevo** · zapper · **katchy** · **gootop**

`dynatrap` → reviews · mosquito trap · insect trap · **xl** · **costco** · **bulb replacement** · bulbs · canada · mosquito

Note that `dynatrap vs thermacell` is the **#1** comparison autocomplete and also a PAA question — and our page links to a Thermacell article but never compares the two head-to-head.

---

## 4. What the top 3 have that ours does not

The three pages that actually matter for the winnable cluster are the Reddit thread (pos 2 + sole AIO citation), Bob Vila (pos 5), and Reviewed.com (pos 10).

### 4.1 First-hand testing, with a named tester and a methodology

**Bob Vila** — tested the **¾-acre DT1750**. Emptied the basin every morning. Documented that "several dozen bugs" escaped during emptying even with preventative measures. Logged the species: mosquitoes, moths, flies, gnats, fruit flies, stink bugs, **and honey bees** (flagged as a problem). Scored it **8.75/10**. Has a dedicated **"Meet the Tester"** section. Structures the whole article as questions: *"How far does the DynaTrap's coverage range extend?"*, *"Can the captured insects escape from the trap? If so, can escape be prevented?"*, *"Is the DynaTrap an eco-friendly way to kill mosquitoes?"*

**Reviewed.com** — tested the **DT1050 ($74.99)** for **14 days** in a backyard adjacent to a county water overflow lake, deliberately placed ~10 ft from the seating area (*below* the manufacturer's 20–40 ft spec) — and still got bitten **within five minutes** of going outside. Headline verdict: *"No, this does not effectively reduce outdoor pests."*

**Ours has zero first-hand testing.** It is pure research synthesis. We cannot fabricate testing (hard constraint), but we can add a structured, attributed **"What hands-on testers found"** section reporting exactly the above — named outlet, model, duration, conditions, result. That is the single largest gap and it is fillable honestly.

### 4.2 Real US prices, and the current US SKU lineup

Direct from **dynatrap.com/store/outdoor** (fetched live):

| Model | Coverage | US price |
|---|---|---|
| DT2030 / DT2030-GR — 1 Acre **LED** | 1 acre | **$99.00** |
| DT1130SR / DT1130-GR — ½ Acre **LED** | ½ acre | **$79.99** |
| DT030 — ¼ Acre **LED** portable | ¼ acre | **$59.99** |

Third-party US prices from the ranking pages: Bob Vila's ¾-acre unit at **Amazon $175 / Home Depot $159 / Walmart $146.06**; Reviewed's DT1050 at **$74.99**; the Reddit thread that the AI Overview cites is literally titled **"worth the 70 bucks."**

**Our page prices the 1-acre unit at $199–$279 and the DT3050 at $249–$329, with no currency marker anywhere.** A US reader sees a 1-acre trap quoted at $199–$279 against a $99 sticker on the manufacturer's own site and concludes the page is wrong about everything, including the research.

### 4.3 Owner consensus from forums

Half the winnable SERP is UGC, and the AI Overview's only citation is a forum thread. Live threads visible on the SERP:

- r/Costco — *"Do DynaTraps work? Idk if its worth the 70 bucks."*
- r/Costco — *"Thoughts on the Dynatrap 1/2 acre insect trap?"*
- r/MosquitoHating — *"Here is my catch in a Dynatrap after 1 week of using the Atrakta pouch. It seems to be mostly moths and gnats?"*
- r/HoustonGardening — *"Has anyone here tried Dynatraps? I'm getting eaten alive by mosquitoes in my garden"*
- Houzz — *"Mosquito Control: Does Dynatrap Work?"*
- Facebook groups ×3

The consensus in those threads independently confirms our thesis (*"mostly moths and gnats"*, *"killing 95 harmless bugs for every mosquito"*, *"left it in an area swarming with mosquitoes for 6–8 hours and it caught 0"*, coverage-acreage claims disputed by owners of 3.5-acre lots). **Reporting that public consensus with attribution is free credibility we are not collecting.**

### 4.4 Engagement with the manufacturer's actual claim

Every ranking page describes the mechanism as **three-way**: UV + fan + **a TiO2 (titanium dioxide) coated surface that photocatalytically produces trace CO2**. Bob Vila states it. Reviewed states it ("emits a warm UV light and a small amount of CO2 to mimic a person's breath"). Today's Homeowner states it. The #1 organic result's own title is **"DynaTrap® 3-Way Insect Control."**

**Our page flatly asserts DynaTrap "produces no CO₂ at all," with no source and no acknowledgement that the manufacturer claims otherwise.** Our conclusion is defensible; our argument is not, because we never engage the counter-claim. MosquitoReviews (also ranking) does it properly: it names the photocatalytic claim *and* rebuts it with **University of Wisconsin testing that detected no CO2**. That is the citation we're missing.

### 4.5 Video

Four video results in the top 20 for the head term and a video block on the review cluster (all YouTube, DR 99). Out of scope for a text edit, but it's why the SERP feels crowded above position 10.

---

## 5. What a US reader needs that our Canadian page omits

### 5.1 US species — the page names **none**

Not one mosquito species appears in 512 lines. Every US authority organises around species. Per **CDC** ("About Mosquitoes in the United States"): *"Over 200 types of mosquitoes live in the continental United States and U.S. territories. About 12 types spread germs that can make people sick."*

| Genus | Species CDC names | Spreads | US range |
|---|---|---|---|
| *Culex* | *Cx. pipiens*, *Cx. tarsalis*, *Cx. quinquefasciatus* | **West Nile virus**, St. Louis encephalitis | Continental US |
| *Aedes* | *Ae. aegypti* (and *Ae. albopictus*) | Dengue, chikungunya, Zika | FL, HI, TX, PR, USVI, American Samoa; *albopictus* expanding north |
| *Anopheles* | *An. freeborni*, *An. quadrimaculatus* | Malaria | "Most of the continental United States" |

CDC also lists EEE, La Crosse encephalitis, Jamestown Canyon and Cache Valley as US mosquito-borne diseases. **West Nile is the most common mosquito-borne disease in the continental US** — and it is spread by *Culex*, which is exactly the genus a UV trap is worst at catching.

### 5.2 US seasonality — the page hard-codes a Canadian season

Our page says "the May–September Canadian outdoor season," schedules the deep clean for "October," and tells the reader to "store the device dry indoors over winter." It computes bulb life *against that assumption* ("~3,000 hours … approximately 4 months of 24/7 use during the May–September Canadian outdoor season").

The US has no single season:

- **South Florida** — activity from early February; **Gulf Coast, Florida and Hawaii run February–November, year-round in places**
- **Texas / Louisiana** — season opens around early March
- **Northeast (NY, NJ, PA, New England)** — April–October, peak mid-May to end of June
- **Northern tier** — May–September, ending at first frost

A Houston or Tampa reader runs the unit 9–12 months, not 5. Bulb budget, lure budget and running-cost maths all change. DynaTrap's own guidance is temperature-based, not calendar-based: *"Mosquitoes typically hatch when the weather reaches over 45 degrees."*

### 5.3 US agencies — the page cites **zero**

Currently the page rests on two university studies (UF Day 2002, Notre Dame 2017) and no agency at all. Available and strong:

**AMCA (American Mosquito Control Association)** — the US authority, and it says our conclusion in stronger words than we do:
- Bug zappers are not effective at controlling biting mosquitoes.
- Two University of Notre Dame studies: mosquitoes were *"merely **4.1%** and **6.4%** respectively of the daily catch over an entire season."*
- *"No significant difference in the number of mosquitoes found in yards with or without bug zappers."*
- Only **0.13%** of insects killed were female mosquitoes (the ones that bite).
- An estimated *"**71 billion to 350 billion** beneficial insects may be killed annually"* by electrocuting devices — plus songbird-population impact.
- On traps generally: *"Please be cautioned against putting too much faith in traps as your sole means of control."*
- Flight range: *"Most species have flight ranges of 1–3 miles."* Peak activity *"usually dawn and dusk."*

> Note: AMCA's 4.1%/6.4% figures are **more specific and more quotable than our own vague "under 5%"** — and they're the primary source for the Notre Dame number the page already cites second-hand.

**University of Delaware** — bug-zapper study: of >13,000 insects collected over 10 weeks, only **31 were biting flies (0.22%)**.

**Colorado State University Extension** — same conclusion on zappers.

**University of Wisconsin** — detected **no CO2** from the TiO2 photocatalytic surface. Direct rebuttal to the "3-way" claim.

**University of Florida IFAS Extension** — on garden pests attracted to UV light (also the home of the Day 2002 study we already cite).

**EPA** — the genuinely differentiating, US-only regulatory angle nobody else on this SERP has. Under FIFRA, DynaTrap is a **pesticide "device"**, not a registered pesticide: devices work by physical/mechanical means and contain no active ingredient, so they are **exempt from EPA pesticide registration**. They must be made in an EPA-registered establishment, bear an EPA establishment number, and hold data supporting efficacy claims — **but no EPA review of effectiveness happens before sale.** Exempt device labels also may not link a pest to a specific disease ("controls mosquitoes" is allowed; "controls mosquitoes that transmit West Nile" is not). This explains, in one paragraph, how a device can be sold nationally as a mosquito trap without ever proving to a regulator that it reduces mosquito bites. **No competitor page covers it.**

**CDC** — species, disease, and the "200 species / about 12 spread germs" framing.

### 5.4 US ticks — the page's tick content is Canadian-framed

Our page's tick argument ("DynaTraps do nothing for ticks") is correct and is one of our best differentiators, but it's written for a Canadian reader ("blacklegged ticks"). For a US reader:

- **Lyme vectors:** *Ixodes scapularis* (eastern North America) and *Ixodes pacificus* (western). Highest risk in the **Northeast and Upper Midwest**; range expanding south, west and north.
- **Lone star tick** (*Amblyomma americanum*) — Eastern, Southeastern and South-Central US, aggressively moving north.
- **CDC scale:** over **89,000** Lyme cases reported by state health departments in 2023; other CDC estimation methods put it at approximately **476,000 people diagnosed and treated each year**.

Same argument, far more force. (Reminder for the edit: **tick treatments are 5 sprays per season**, never 2.)

### 5.5 US retailers — our table is 100% Canadian

Our retailer table lists Costco Canada, Canadian Tire, Home Depot Canada, Lee Valley Tools, Cabela's Canada, plus Amazon.ca links throughout. Canadian Tire and Lee Valley are meaningless to a US reader, and Amazon.ca is a dead end.

The US SERP's own retail set: **dynatrap.com direct, Home Depot, Amazon, Walmart, Costco, Lowe's, Tractor Supply, QVC, Solutions Stores.** `dynatrap costco` is a 250/mo US keyword with its own PAA question, and `qvc dynatrap` / `dynatrap qvc` together carry 150/mo.

### 5.6 Units are metric-first

"10–12 metres (30–40 feet)", "4.5m zone", "at least 1 metre off the ground." US readers need feet first. Also our numbers drift from the manufacturer's: DynaTrap specifies **20–40 feet** from the activity area and **3–6 feet** off the ground; we say 30–40 feet and "at least 1 metre" (3.3 ft).

---

## 6. Where `app/blog/dynatrap-canada-review/page.tsx` falls short — precisely

File: `C:\Users\buzzs\buzzskito-website\app\blog\dynatrap-canada-review\page.tsx` (512 lines, 18 FAQ entries)

**Ranked by damage to a US reader.**

1. **The page's central recommendation, the DT3050, does not exist.** This is the carried-forward editorial warning, and the US teardown makes it worse than "amazon.ca doesn't sell it": **DT3050 appears nowhere in DynaTrap's US outdoor store, nowhere in DynaTrap's own FAQ model list, and in none of the ~35 US shopping tiles on the SERP.** It is currently the `StickyBuyBar` product, the `TopPick`, the "Best for Mosquitoes" `AwardRow` entry, the first row of the models table, the answer to FAQ #2 ("Which DynaTrap is best for mosquitoes?"), and the target of two `BuyLink search=` terms. **Do not make it worse and do not build any new US section on top of it.** The real US mosquito-relevant differentiator is the **Atrakta lure** (which the FAQ confirms is a universal add-on, ~8 weeks per lure), not a phantom attractant-fan SKU.

2. **"Produces no CO₂ at all" is asserted without a source and without engaging the manufacturer's claim.** Appears in the Quick Answer, the Key Facts table ("Adds CO₂? No"), the "Do DynaTrap mosquito traps work?" H3, and the "How the DynaTrap Mosquito Trap Works" H2. Every ranking competitor and DynaTrap's own #1-ranked homepage say "3-Way … TiO2 … trace CO2." Our verdict is right; our argument reads as uninformed. **Fix by naming the claim and rebutting it with the University of Wisconsin no-CO2 finding** — additive, and it strengthens rather than softens the verdict.

3. **Bulb guidance assumes fluorescent; the current US lineup is LED.** The page says "UV fluorescent bulb", "~3,000 hours", "replace bulbs at the start of each new season", "$15–$25 each", and puts "UV bulbs need replacement every 4 months" in FAQ #4 and again in FAQ #8. The Key Facts table contradicts itself in one cell: *"Power | Plug-in 110V (most models) · LED runtime ~3,000 hours."* DynaTrap's entire current US outdoor line (DT2030, DT1130SR, DT030) is sold as **"LED Mosquito & Insect Trap."** A US buyer of a current LED unit is being told to budget for bulbs they will never buy. **Note the honest fix is to split by generation, not delete** — legacy fluorescent models really do take bulbs (DT2000XL → 32050; ½-acre models → 41050; DT1700 series → 43050; Flylight → 21050), and `dynatrap bulb replacement` + `dynatrap replacement bulb` + `dynatrap bulb` + `dynatrap light bulb replacement` + `dynatrap xl bulb replacement` is **~810/mo of US volume at KD 0** we currently serve with a wrong blanket answer.

4. **Prices are CAD, unmarked, and roughly 2–3× the US figures.** No "CAD" appears anywhere on the page. "$249–$329", "$199–$279", "$149–$199", "$79–$129", and the "First-year cost … $290–$380" line all read as USD. Against DynaTrap's own $99 / $79.99 / $59.99 US pricing and a Reddit thread titled "worth the 70 bucks," this is the fastest way to lose a US reader's trust.

5. **Zero named mosquito species in 512 lines.** No *Culex*, no *Aedes*, no *Anopheles*, no West Nile. The page says "mosquitoes" throughout. The strongest available US argument — *Culex* is the main US disease vector and is precisely what a UV trap is worst at catching — is sitting unused.

6. **Zero US agency citations.** No CDC, no EPA, no AMCA, no US extension service. And the Notre Dame study we already cite is cited *vaguely* ("under 5%") when AMCA publishes the actual figures (**4.1% and 6.4%**, plus **0.13%** female mosquitoes, plus "no significant difference … with or without bug zappers"). We are citing a weaker version of a source that a US authority states more forcefully.

7. **Season is hard-coded Canadian.** "May–September Canadian outdoor season" (FAQ #8), "At the end of season (October)" and "store the device dry indoors over winter" (FAQ #10). Wrong for FL, TX, the Gulf Coast and HI, where the unit runs 9–12 months — which also invalidates the operating-cost and lure-budget maths for those readers.

8. **Four of the five PAA questions are not answered as headings.**
   - *"Why does DynaTrap have to be 20 feet away?"* — **completely absent as a concept.** The page gives placement distance metric-first inside a collapsed FAQ ("10–12 metres (30–40 feet)") and never explains the *why*: the trap must not have to out-compete you as an attractant. This is the highest-value unanswered question on the SERP.
   - *"Should I leave my DynaTrap on all the time?"* — answered in passing inside FAQ #9, never as a heading.
   - *"What are people saying about the DynaTrap insect trap at Costco?"* — **no answer anywhere.** The page has a "DynaTrap at Costco Canada" H3 about Canadian spring sales; the US question is about *owner opinion*, not price.
   - *"Which is better, DynaTrap or Thermacell?"* — **no head-to-head section.** Thermacell appears only as a link and one row in a 4-row comparison table. `dynatrap vs thermacell` is the #1 comparison autocomplete *and* a PAA question.
   - *"Does DynaTrap actually work?"* — this one we do answer well, and it's the page's strength.

9. **No first-hand testing and no owner-consensus reporting** — the two things every ranking competitor has, and the two things the AI Overview is citing.

10. **Retailer table is entirely Canadian** (5 rows, none purchasable from the US), and every `BuyLink` is framed "Check price on Amazon.ca."

11. **US tick numbers absent.** The tick differentiator is real and defensible but is framed for Canada. *Ixodes scapularis/pacificus*, lone star tick, and CDC's 89,000 reported / ~476,000 estimated annual Lyme figures would make the same point land far harder.

12. **US SKUs with their own search volume are entirely uncovered:** DT160, DT1210, DT1130SR, DT2030SR, DT2000XL, DT2000XLP, DT1775, DT152, DT030, plus the Sonata, Decora, DOT, Willow, Luxe, Ultralight and Flylight series — all present in the shopping tiles. Standalone US volume includes `dynatrap dt2000xlp` 100, `dynatrap dt2000xl` 100, `dynatrap dt152` 100, `dynatrap dt1775` 80, `dynatrap dt1130sr` 80, `dynatrap dt2030sr` 80.

13. **Metric-first units throughout** ("10–12 metres", "4.5m zone", "1 metre off the ground", "43,000 sq ft"), and placement figures that drift from the manufacturer's stated 20–40 ft / 3–6 ft.

---

## 7. Constraints reminder for whoever writes the edit

- **Strictly additive.** Do not touch the title tag, meta description, H1, slug, or Quick Answer capsule. Do not remove Canadian pricing, Canadian retailers, `CTASection`, service CTAs, or any internal link.
- **One URL, both markets.** Every added section must serve a Canadian reader too — add US columns/rows and US-labelled subsections alongside the Canadian ones, never in place of them.
- **Affiliate:** `search=` only. Never add `asin=`. Never remove an existing `asin=`. No Amazon prices, star ratings, review counts, BSR, or product images. No `AggregateRating` schema.
- **No fabricated testing.** Report other outlets' hands-on tests *with attribution* (Bob Vila, Reviewed.com) — never imply we tested one.
- **Medical claims** sourced inline by name to CDC, Mayo Clinic, Health Canada or provincial public health. AMCA/EPA/university sources are fine for efficacy and regulatory claims.
- **Do not "fix" the DT3050 problem** — just don't extend it. Anchor new US content on the Atrakta lure and the real US SKUs instead.
- **Tick treatments = 5 sprays per season.** Never 2.
- Do not touch shared files (`lib/`, `components/`, `app/sitemap.ts`, `app/blog/page.tsx`).
