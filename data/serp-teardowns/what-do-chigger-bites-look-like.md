# US SERP Teardown — "what do chigger bites look like"

**Target page:** `/blog/chigger-bites` (`app/blog/chigger-bites/page.tsx`)
**Market:** United States (google.com, US)
**Captured:** 2026-09-02 — live Ahrefs SERP overview + WebFetch of ranking pages + GSC US-filtered query data
**US volume:** 7,300/mo (KD 28, traffic potential 60,000, parent topic `chiggers`)
**Cluster context:** `chigger bites` 129,000/mo · `chiggers` 178,000/mo · `what do chiggers look like` 7,400/mo · `how long do chigger bites last` 3,600/mo · `chigger bites vs bed bug bites` 2,700/mo (KD **1**)
**Our live US position:** ~10.1 for this exact query (GSC, 28d) · position 16 in the Ahrefs SERP snapshot · DR 2

---

## 1. SERP features above the organic results

Ordered as Google renders them:

| Slot | Feature | Detail |
|---|---|---|
| 1 | **AI Overview** | Present. Occupies the entire first screen. |
| 1 | AI Overview sitelinks (3, all with image thumbnails) | **WebMD** — "Chigger Bites – What They Look Like and How To Treat Them"<br>**Cleveland Clinic** — "Chigger Bites: What they Look Like, Treatment & Prevention"<br>**Nemours KidsHealth** — "Chigger Bites: Signs, Causes & Treatment" |
| 2 | **People Also Ask** | 4 questions (verbatim in §3) |
| 3+ | Organic, with **image thumbnails on 7 of the top 20** | positions 4, 5, 7, 11, 13, 18, 19 |
| 8 | **News / short-video carousel** | 3 cards, two of them "chiggers don't burrow" myth-busting posts (Nature Reliance School video) + one "Bright red misshapen bug bites on legs" |
| 11 | Sitelinks under thehealthy.com | "Chigger Bites Vs. Bed Bug…", "Bed Bug Bites", "Chigger Reaction" |
| 17 | YouTube video | "CHIGGERS BITE: Everything You Need To Know" |

**No featured snippet. No image pack. No shopping.**

Two things follow from that:

- **The AI Overview is the ranking prize, not position 1.** All three AIO citations are medical/health institutional pages whose titles are near-identical to ours — WebMD and Cleveland Clinic both literally use "What They Look Like" + "Treatment". Our title already matches that pattern. What separates them from us is not phrasing, it is **structured, self-contained answer blocks the AIO can lift**.
- **There is no image pack, but there are image thumbnails everywhere.** Google is picking a representative image off the page and showing it inline. Seven competitors get one; we get none, because our only visual is an SVG line diagram (`/diagrams/bite-pattern-comparison.svg`) and Google does not thumbnail SVG. This is the single largest CTR leak on the page — see §6.

---

## 2. Top 10 organic — and the proof of achievability

| # | Page | Type | DR | UR | Ref domains |
|---|---|---|---|---|---|
| 3 | webmd.com — *Chigger Bites – What They Look Like and How To Treat Them* | Health publisher | 92 | 42 | 56,645 (domain-wide) |
| 4 | kidshealth.org/parents/chiggers — *Signs, Causes & Treatment* | Non-profit paediatric health (Nemours) | 87 | **0** | — |
| 5 | **insectshield.com/blogs/blog/midge-bites-vs-chigger-bites** | **Commercial pest-gear brand blog** | **56** | **10** | **5** |
| 6 | cedars-sinai.org — *Flea, Mite, or Chigger Bites* | Hospital system | 82 | 0 | — |
| 7 | ph.health.mil — *Chiggers, Defense Centers for Public Health* | US government / military entomology | 81 | 0 | — |
| 9 | my.clevelandclinic.org/health/diseases/23267 | Hospital system | 92 | 29 | 214 |
| 10 | rchsd.org — *Chigger Bites* (Rady Children's) | Children's hospital | 74 | 4 | **0 backlinks** |
| 11/13 | thehealthy.com — *How to Tell Chigger Bites and Bed Bug Bites Apart* | Consumer health | 79 | 0 | — |
| 12 | today.com — *Photos & Symptoms To Identify Them* | News/lifestyle | 90 | 46 | 1,383 |
| 14 | carilionclinic.org | Hospital system | 69 | 0 | — |
| 15 | baptisthealth.com | Hospital system | 71 | 25 | 0 |
| **16** | **buzzskito.ca/blog/chigger-bites** | **Us** | **2** | **0** | — |
| 18 | healthline.com | Health publisher | 92 | 5 | 75 |
| 19 | osmosis.org | Medical education | 75 | 5 | 2 |
| 20 | nollahealth.com | Small health site | **33** | 0 | — |

### The achievability datapoint

**Insect Shield at position 5 — DR 56, URL Rating 10, five referring domains to the whole blog.**

This matters more than any other line in the teardown:

- It is a **commercial pest-product brand**, structurally identical to what we are. Not a hospital, not a medical publisher. Google is willing to rank a company that sells bug-repellent clothing above **Cleveland Clinic (#9), Healthline (#18) and Today.com (#12)** on a health-adjacent bite-identification query.
- It ranks on a **comparison angle** — *Midges vs. Chigger Bites* — not a head-on "what do chigger bites look like" page. Its own top keyword is **"no see um bites" (16,000/mo)**. It won this SERP by owning the adjacent-bite comparison cluster and letting that authority spill onto the main query. **We already have `/blog/no-see-um-bites`, `/blog/bed-bug-bites` and `/blog/flea-bites-on-humans`** — we have the same cluster Insect Shield used, and we are not converting it.
- Position 10 (**rchsd.org**) has literally **zero backlinks and UR 4**, ranking on 16 keywords and pulling ~17k traffic.

**Conclusion: link equity is not the barrier on this SERP.** DR 33 (#20) and UR 0–10 pages hold top-10 slots. What the winners have is topical completeness, comparison depth, and a thumbnailable image. All three are additive fixes.

---

## 3. People Also Ask — VERBATIM

These are the four PAA questions as Google renders them. They become H2s / FAQ entries on our page word-for-word:

1. **How do I know if my bites are chigger bites?**
2. **What is the fastest way to cure chigger bites?**
3. **What could be mistaken for chigger bites?**
4. **Will chiggers live in your bed?**

Coverage audit against our current page:

| PAA question | Our current state |
|---|---|
| How do I know if my bites are chigger bites? | **Answered, but not addressable.** The content exists across the "What do chigger bites look like" H2 and the comparison table, but no heading, FAQ entry or answer block uses this phrasing. Nothing for the AIO to lift. |
| What is the fastest way to cure chigger bites? | **Near-miss.** Our FAQ says *"What is the fastest way to get **relief from** chigger bites?"* — Google asks *"cure"*. Add the exact phrasing (answering honestly that there is no cure, only relief — which is also the correct medical answer). |
| What could be mistaken for chigger bites? | **Content exists, heading does not.** Our comparison H2 is framed the other way round ("Chigger bites vs mosquito bites vs bed bug bites"). The reverse-direction question — *what else could this be* — is unserved, and it is the highest-intent question on the list for a panicking reader. |
| Will chiggers live in your bed? | **Answered in FAQ** ("Do chiggers get in your bed or live on you?"). Closest match we have. Worth adding the exact wording. |

---

## 4. What the top 3 have that we do not

### WebMD (#3, AIO-cited)
- **Adult-vs-larva disambiguation as a distinct block**: *"Adult chiggers are bigger and bright red, with eight legs instead of six."* We mention adults only in passing ("nymph and adult trombiculid mites eat soil insects"). We never say **six legs vs eight legs**, which is the actual identification test.
- A clear "**you may be able to see tiny red dots, either moving quickly or attached to your skin**" — visibility guidance we contradict slightly by saying they're effectively invisible.
- **Steroid shots** named as a rare escalation. We stop at antihistamines.
- Explicit **"Chiggers in the U.S. don't spread disease, though they can in other parts of the world"** — we have this, correctly sourced to CDC. Parity here.
- Sits inside a dense internal cluster: scrub typhus, mites, tick bites, mosquito bites, bad-bugs slideshow.

### Nemours KidsHealth (#4, AIO-cited, image thumbnail)
Headings, in order: Overview · What Are Chiggers? · **Where Do They Live?** · **Top Things to Know** · Signs & Symptoms · What Do Chigger Bites Look and Feel Like? · When Should I Call the Doctor? · Causes & Prevention · **How Do Chigger Bites Happen?** · **Are They Contagious?** · Can They Be Prevented? · **Diagnosis** · How Are Chigger Bites Diagnosed? · Treatment & Home Care · **Risks of Scratching** · What Else Should I Know?

What we lack:
- **"Are They Contagious?"** as a standalone section. (GSC shows us at position 18–32 for *are chigger bites contagious*, *can chiggers spread to other people*, *are chiggers spreadable*, *can you spread chiggers*.)
- **A "Diagnosis" / "How are chigger bites diagnosed?" section.** Neither we nor most competitors' readers realise diagnosis is clinical-by-history; both AIO-cited pages carry it.
- **A US seasonality sentence**: *"In the United States, chigger bites happen most often in late spring, summer, and early fall."* We have no US season statement at all.
- **A concrete repellent concentration**: *"10%–30% DEET"*. We say "DEET or picaridin… concentration varies by label" — softer and less liftable.
- **An image** (illustration of blister-like bites around the ankle) — earns the thumbnail.

### Cleveland Clinic (#9 organic but **AIO-cited**, so functionally top-3)
28 headings. The structural gaps versus us:
- **"Who do chigger bites affect?"** and **"How common are chigger bites?"** — prevalence/epidemiology framing we skip entirely.
- **"How soon after treatment will I feel better?"** — a distinct expectation-setting question separate from "how long do they last".
- **"Outlook / Prognosis — What can I expect if I have chigger bites?"**
- **"What questions should I ask my doctor?"** — a liftable list; we have "when to see a doctor" but not "what to ask".
- **A four-way bite comparison** including **flea** in the main table. Ours is a three-way table (chigger/mosquito/bed bug) with fleas relegated to a prose paragraph — and *"chigger bites vs flea bites"* is a 7,900/mo keyword (it is Healthline's top keyword for its chigger page).
- Explicit **humidity threshold** ("80% or over") alongside temperature. We give temperature only.

### Insect Shield (#5 — the achievability case)
- **Comparison-first architecture.** A whole family of `X bites vs Y bites` posts (midge vs chigger, chigger vs mosquito, midge vs mosquito) plus a `/pages/chiggers` hub and a `how-to-get-rid-of-chiggers` post, all interlinked.
- **EPA-registered repellent** framing (US regulator) rather than generic "registered repellent".
- Commercial CTA integrated without demotion — proof our affiliate/service blocks are not what is holding us back.

---

## 5. What a US reader needs that a Canadian page naturally omits

This is where our page is most exposed, and GSC proves it. We rank **4.0–9.0 for every Canadian geography query** and **15–62 for every US geography query**:

| Query | Our US position |
|---|---|
| chiggers in ontario | **1.0** |
| are there chiggers in ontario canada | **4.0** |
| are there chiggers in canada | **4.2** |
| chiggers in canada | 7.0 |
| chiggers in alberta | 8.0 |
| — | — |
| are there chiggers in wisconsin | 15.0 |
| are there chiggers in montana | 17.0 |
| are there chiggers in new mexico | 18.0 |
| chiggers in san diego | 19.0 |
| chiggers in utah | 20.0 |
| chiggers in northern california | 22.0 |
| chiggers in nevada | 24.0 |
| chiggers in pa | 29.0 |
| are there chiggers in minnesota | 30.0 |
| chiggers in south dakota | 30.5 |
| chiggers in north dakota | 31.0 |
| chiggers in wisconsin | 30.0 |
| chiggers in minnesota | 36.0 |
| chiggers in florida | 39.0 |
| chiggers in oklahoma | 41.2 |
| chiggers in washington state | 48.0 |
| chiggers in louisiana | 62.0 |
| chiggers in tennessee | 3.0 *(outlier — thin SERP)* |

Our "Where do chiggers live?" section resolves geography as *"across most cold-winter regions — including nearly all of Canada — established chigger populations are rare to absent."* That is correct, load-bearing for our Canadian service intent, and **must stay**. But for a US reader it answers nothing: it tells them where chiggers *aren't* using Canada as the example, and gives them no US map.

### Specifically missing — US facts to ADD alongside the Canadian content

**Species (we name none):**
- ***Eutrombicula alfreddugesi*** — the dominant US chigger, "the common North American chigger" (StatPearls/NCBI; Texas A&M AgriLife). Also called *Trombicula (Eutrombicula) alfreddugesi*.
- ***Eutrombicula splendens*** — second Texas/Gulf species (Texas A&M).
- Kansas State Extension notes **46+ chigger mite species in Kansas alone**, only some of which bite humans.

**US range (we give none):**
- Range runs **from the Atlantic coast west to the Midwest and south to Mexico**; **rare in the dry Western states** because the species needs humidity (StatPearls; K-State Extension). That single sentence answers *chiggers in utah / nevada / washington state / northern california* — all queries where we sit 20–48.
- Heaviest pressure across the **South and Southeast**; StatPearls: predominant "in the south of the United States."

**US seasonality (we give none — we give a temperature rule instead):**
- **Late spring, summer, and early fall** (KidsHealth) — the plain-language US answer.
- Egg-laying begins once **soil surface temperature is regularly above 60°F**; larvae are present **April through cold fall weather** (Missouri/K-State Extension). Our page gives 25–30°C/77–86°F and a 16°C/60°F floor — correct, but metric-first and expressed as ground temperature rather than a US calendar.
- Life cycle **40–70 days, up to four generations per year**; complete cycle 7–10 weeks (Texas A&M; K-State).
- **June–September** is when larvae mature in the Northern Hemisphere, so "nearly all instances of trombiculiasis occur in the summer and fall" (StatPearls). This is the counter-seasonal note for our May–September service window.

**US agencies (we cite CDC and Health Canada; the US-side set is thinner than it should be):**
- **CDC** — already cited for the no-disease-transmission line. Keep.
- **EPA** — the US regulator for repellents. Insect Shield uses "EPA-approved repellents"; we say "registered insect repellent" and then explain Health Canada's PMRA. A US reader needs **EPA-registered** named, and **DEET 10–30%** as the concentration (KidsHealth).
- **State Cooperative Extension services** — the US equivalent of provincial guidance and the actual authority US readers land on: **Texas A&M AgriLife Extension**, **University of Missouri Extension (G7398)**, **Kansas State Research and Extension**. Citing these is a genuine E-E-A-T and entity win no Canadian page would think to make.
- **Defense Centers for Public Health (ph.health.mil)** ranks #7 — US military entomology is a live authority on this SERP.

**A US medical nuance worth adding carefully:**
CDC's *Emerging Infectious Diseases* (Vol. 29, No. 8, Aug 2023) reported **molecular detection of *Orientia* spp. bacteria in free-living *Eutrombicula* chiggers collected in North Carolina**. This does **not** change the CDC's standing guidance — there are no confirmed locally acquired human scrub typhus cases from US chiggers, and our current line ("in North America, chiggers are not known to transmit disease to humans, per the CDC") stays accurate and stays on the page. But a US reader in 2026 may well have seen the North Carolina headline, and the page that addresses it *and* correctly de-escalates it earns the trust. Frame as: standing guidance unchanged, surveillance finding noted, scrub typhus remains an Asia-Pacific travel exposure.

**US retail context:**
Our retail language is currently neutral-to-Canadian ("check what is registered and available where you live before buying treatment kits"). A US reader can buy permethrin clothing treatment freely and EPA-registered repellents by concentration. Existing `BuyLink` search terms (`calamine lotion`, `chigger bite itch relief cream`, `insectguard permethrin gaiters`) work in both markets via search links — **no product changes needed**, but the surrounding copy can name EPA registration so US readers know the category is regulator-approved for them.

---

## 6. Where `app/blog/chigger-bites/page.tsx` falls short — precisely

The page is genuinely strong: 11 FAQs, a six-row comparison table, correct stylostome mechanism, an honest myth-debunk, correct CDC sourcing, a medical disclaimer already present, and correct internal links to the flea/bed bug/no-see-um cluster. Nothing here needs removing. Every item below is **additive**.

### Ranked by lost opportunity

**1. No photographic or thumbnailable image — the biggest single CTR leak.**
The only visual is `<Figure src="/diagrams/bite-pattern-comparison.svg">`. Google is not thumbnailing it. Seven of the top 20 carry image thumbnails; both AIO-cited pages do. GSC US shows the cost:

| Query | Impressions | Clicks | Position |
|---|---|---|---|
| chigger bite images | 10 | 0 | 15.0 |
| chigger bite pictures | 7 | 0 | 22.3 |
| chigger bite image | 5 | 0 | 7.6 |
| chigger bite photos | 3 | 0 | 34.3 |
| chigger bite pictures on humans | 2 | 0 | 28.0 |
| *"can you show me pictures of chigger bites and bed bug bites?"* | 1 | 0 | 8.0 |

Position 7.6 on *chigger bite image* with a 0% CTR is Google offering us the click and the page failing to look like it has a picture. `chigger bites pictures` alone is 1,700/mo US with 60,000 traffic potential. **Fix: add raster imagery/diagrams (PNG/JPG/WebP) — a bite-distribution body map and a chigger-scale illustration are both original assets we can author without any fabricated-testing claim.**

**2. `how long do chigger bites itch` — 396 impressions, 1 click, 0.25% CTR, position 10.7.**
This is our largest impression pool on the whole page and it converts at effectively zero. We answer "how long do they *last*" (1–2 weeks) but the reader is asking about the **itch specifically**, which has a different answer: peaks 24–48h, *"itching generally subsides within 72 hours"* while lesions heal 1–2 weeks (StatPearls). We never separate itch duration from lesion duration. Needs its own H2 and its own FAQ.

**3. `how big are chiggers` — 228 impressions, 2 clicks, 0.88% CTR, position 10.2.**
The 0.15–0.3 mm figure is present but buried mid-paragraph under "What are chigger bites?". Related unserved queries: *size of a chigger* (11.5), *chigger actual size* (33), *can you see a chigger* (29.3), *can you see chiggers on your skin* (15.0), *can you see chiggers with your eyes* (21.0), *can i see chiggers* (30). **Needs a dedicated size/visibility H2** with a real-world scale comparison and the six-legs-vs-eight-legs adult/larva distinction WebMD uses.

**4. No healing-stages / day-by-day progression section.**
GSC: *chigger bite timeline* (18 impressions, pos 8.0), *chigger bite stages* (39.5), *chigger bite progression* (31), *chigger bite healing process* (29), *chigger bite duration* (27). We have a timeline in one prose sentence under "How long do chigger bites last?". Competitors are titling on it outright ("…Symptoms, **Healing Stages** & Treatment"). **Needs a structured day-by-day block** — hours 0–3/3–6 onset, day 1–2 peak, day 2–4 papule, week 1–2 fade, plus the *not-normal* escalation markers we already have.

**5. Symptom-location queries: strong topical fit, weak addressability.**
A dense cluster we mention only inside a bullet list:

| Query | Position |
|---|---|
| bites around waistband | 12.2 |
| bites around sock line | 11.5 |
| bites along underwear line | 13.5 |
| bites around underwear line | 14.0 |
| bug bites in skin folds | 17.7 |
| bug bites around groin | 24.0 |
| bug bites on panty line | 19.0 |
| bug bites at waistband | 21.0 |
| bug bites from grass | 24.0 |

This is *our* territory — pattern-based identification is the page's core thesis — and we sit 11–27 across all of it with 0 clicks. **Needs the locations promoted from bullets to an addressable section** (a body-map figure plus per-location subheads or a location table).

**6. Missing sections the AIO-cited pages both carry:**
- **"Are chigger bites contagious / can they spread to other people?"** — GSC: *are chigger bites contagious* (2.0), *can chiggers spread* (6.5), *can you spread chiggers* (17.5), *are chiggers spreadable* (29.5), *chigger bites are spreading* (29.3), *can chigger bites spread* (16.5). KidsHealth and Cleveland Clinic both have it as a heading. We have nothing. Note the query *"how do chigger bites spread"* already ranks **2.8** — Google wants this from us.
- **"How are chigger bites diagnosed?"** — both AIO-cited pages carry it; we have none.
- **"Can chigger bites appear/show up days later?"** — *can chigger bites appear days later* (17.0), *can chigger bites show up days later* (14.0), *can chigger bites be delayed* (12.0), *chigger bites a week later* (12.0), *chigger bites 2 weeks later* (3.0). We handle it in a single clause ("New-feeling welts a day later are usually earlier bites…"). Deserves its own answer block.
- **"Can chiggers bite through clothes?"** — *through clothes* (41.0), *through clothing* (49.0), *through socks* (27.0). Completely unserved, and it directly sets up the permethrin-treated-clothing recommendation we already make.
- **"Can chiggers live in your couch / furniture / clothes / house?"** — *can chiggers live in your couch* (30.5), *on furniture* (41.0), *in your clothes* (49.0), *chiggers in bed sheets* (44.0), *chiggers in bedroom* (49.0). Our bed FAQ answers the principle; the specific surfaces are unserved. Directly relevant to PAA #4.
- **"Can chigger bites blister?"** — *can chigger bites blister* (16.0), *blistering chigger bites* (37.0), *chigger bite white head* (25.0), *chigger bite turning purple* (27.0). StatPearls supports this: lesions may progress to "surrounding dark red to violaceous macules or into vesicles." We mention "tiny central blister" once. Needs the vesicle/violaceous progression stated properly and sourced.
- **"What could be mistaken for chigger bites?"** (PAA #3) — reverse-direction differential. StatPearls' list for a US clinical audience: **scabies, bedbug bites, mosquito bites, ant bites, flea bites**. We cover mosquito/bed bug/flea/no-see-um and mention scabies; **ant bites are absent**, and the reverse framing is absent.

**7. Flea is under-weighted in the comparison table.**
*chigger bites vs flea bites* is 7,900/mo US (Healthline's top keyword for its chigger page). Cleveland Clinic runs a four-way comparison. Our table is three-way with fleas in prose below. **Add a flea column** — additive, no restructuring, and the internal link to `/blog/flea-bites-on-humans` already exists to carry it.

**8. "Berry bug" — an unserved synonym with real impressions.**
*berry bug bites* (18 impressions, pos 11.4), *berry bugs bites* (9, pos 12.3), *berry bugs* (2.0), *berry bugs location* (1.0). We name "berry bugs" once in a synonym list and never again. Also unserved: *are chiggers and red bugs the same* (31.0), *are chiggers red bugs* (49.0), *are red bugs and chiggers the same* (42.0), *are chiggers and jiggers the same thing* (48.0) — **chiggers vs jiggers (*Tunga penetrans*, the actual burrowing sand flea) is the cleanest possible way to reinforce our no-burrowing thesis**, since the confusion between the two names is *why* the burrowing myth survives.

**9. Two PAA questions need exact-phrase parity.**
Our FAQ says *"fastest way to get relief from"*; Google asks *"fastest way to **cure**"*. Our FAQ says *"Do chiggers get in your bed or live on you?"*; Google asks *"**Will chiggers live in your bed?**"*. Add the verbatim forms as additional FAQ entries.

**10. Zero US geographic or species content** — the whole of §5. No species named, no US range, no US season calendar, no state-level answer, no EPA, no extension services. Our Canadian geography answer stays (it ranks 1st–4th and is load-bearing for service intent); the US answer sits beside it.

### What is already right and must not be touched
Title, meta description, H1, slug, Quick Answer capsule, the Canadian/cold-climate paragraph in "Where do chiggers live?", the CDC no-transmission line, the medical disclaimer, `SpecialistDisclosure`, `AffiliateDisclosure`, `TopPick`, both `BuyLink` blocks and the `StickyBuyBar` (all `search=` only, no `asin=`), `AdjacentPestCTA`, the `/pest-product-guides` and `/pest-control-cost-canada` links, and every internal link to the flea/bed bug/no-see-um cluster — that cluster is precisely the asset Insect Shield used to reach position 5.

---

## 7. Priority order for the additive edit

1. Add raster imagery (bite-distribution body map + chigger scale) — unlocks the thumbnail and the entire `pictures/images/photos` cluster.
2. New H2: **"How do I know if my bites are chigger bites?"** (PAA #1) — checklist format, AIO-liftable.
3. New H2: **"What could be mistaken for chigger bites?"** (PAA #3) — reverse differential incl. ant bites, scabies, jiggers.
4. New H2: **"How long does the itch last?"** — separated from lesion healing. Targets the 396-impression pool.
5. New H2: **Day-by-day healing stages.**
6. New H2: **"Where do chiggers live in the United States?"** — species, range, states, season calendar, extension services. Placed *after* and *alongside* the existing cold-climate/Canada paragraph, not replacing it.
7. New H2: **"How big are chiggers and can you see them?"** — size, scale comparison, six vs eight legs.
8. New H2: **"Are chigger bites contagious?"**
9. Add a **flea column** to the existing comparison table.
10. Add FAQ entries verbatim: *"What is the fastest way to cure chigger bites?"*, *"Will chiggers live in your bed?"*, *"Can chiggers bite through clothes?"*, *"Can chigger bites show up days later?"*, *"Can chigger bites blister?"*, *"How are chigger bites diagnosed?"*, *"Are chiggers and jiggers the same thing?"*, *"Are chiggers and red bugs the same thing?"*
11. Name **EPA** alongside Health Canada's PMRA, and add **DEET 10–30%** per CDC/KidsHealth.

---

## Sources consulted

- Ahrefs SERP Overview, `what do chigger bites look like`, country US, 2026-09-02 (live)
- Ahrefs Keywords Explorer, US volumes/KD/traffic potential
- Google Search Console, `sc-domain:buzzskito.ca`, page contains `chigger`, country = USA, 2026-08-05 → 2026-09-02
- [Nemours KidsHealth — Chigger Bites](https://kidshealth.org/en/parents/chiggers.html) (AIO-cited)
- [Cleveland Clinic — Chigger Bites](https://my.clevelandclinic.org/health/diseases/23267-chigger-bites) (AIO-cited)
- [WebMD — Chigger Bites](https://www.webmd.com/skin-problems-and-treatments/prevent-treat-chigger-bites) (AIO-cited)
- [Insect Shield — Midge Bites vs Chigger Bites](https://www.insectshield.com/blogs/blog/midge-bites-vs-chigger-bites) (position 5, achievability case)
- [StatPearls / NCBI — Chigger Bites and Trombiculiasis](https://www.ncbi.nlm.nih.gov/books/NBK538528/)
- [Texas A&M AgriLife — Chiggers](https://texasinsects.tamu.edu/chiggers/)
- [University of Missouri Extension G7398](https://extension.missouri.edu/publications/g7398)
- [Kansas State Research and Extension — Chiggers](https://hnr.k-state.edu/extension/horticulture-resource-center/common-pest-problems/documents/Chiggers.pdf)
- [CDC Emerging Infectious Diseases 29(8), Aug 2023 — Orientia spp. in Eutrombicula chiggers, United States](https://wwwnc.cdc.gov/eid/article/29/8/23-0528_article)
- [Defense Centers for Public Health — Chiggers](https://ph.health.mil/topics/entomology/what/Pages/Chiggers.aspx) (position 7)
