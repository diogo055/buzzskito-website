# US SERP Teardown — "what temperature do mosquitoes die"

**Date:** 2026-09-02
**Market:** google.com, US (`gl=us`, `hl=en`)
**US volume:** 800 (head term, Ahrefs) · **~5,900/mo across the full US temperature cluster**
**Our position:** organic ~12 in this live snapshot; ~8.1 GSC average; **organic #4 on the sibling term "what temperature kills mosquitoes" (500/mo)**
**Our page:** `app/blog/what-temperature-kills-mosquitoes/page.tsx` (250 lines)
**Source:** Ahrefs `serp-overview` live US SERP (3 query variants) + direct fetches of every ranking page.

---

## HEADLINE: we are already inside the AI Overview

On the live US SERP for "what temperature do mosquitoes die", the AI Overview cites **nine** sources. One of them is us:

> `https://buzzskito.ca/blog/what-temperature-kills-mosquitoes` — "BuzzSkito"

A DR 2 Canadian domain with **zero referring domains to the page** is being cited by Google's AI Overview on a US commercial query, sitting alongside Army.mil (DR 90), Mosquito Joe (DR 58) and Terminix (DR 73). This is not a page that needs to earn the right to compete in the US. It already has it. Everything below is about closing the specific content gaps that keep it at organic #12 instead of top 3 — and, more importantly, keeping the AIO citation as the answer gets re-generated.

Note also that our AIO citation is the **only one of the nine without an image thumbnail** (`image_th`). Every other cited source has one. We ship no image on this page at all.

---

## 1. SERP features above the organic results

| Slot | Feature |
|---|---|
| Position 1 | **AI OVERVIEW** — occupies the entire first screen |
| Position 1 | **9 AI Overview citations** (below) |
| Position 2 | **People Also Ask** — 4 questions, sits ABOVE the first organic result |
| Position 9 | **Video pack** — 2 entries (YouTube + Facebook, both local-TV weather segments) |
| Position 12 | YouTube organic result with `video_th` |
| — | No classic featured snippet (the AIO has absorbed it) |
| — | No image pack, no shopping pack |

### AI Overview citations, in order

| # | Source | Type | `image_th`? |
|---|---|---|---|
| 1 | army.mil/article/283270 | **US federal — Defense Health Agency** | yes |
| 2 | mosquitojoe.com/blog/what-temperature-kills-mosquitoes | US franchise service blog | yes |
| 3 | westernexterminator.com/western-answers/when-do-mosquitoes-go-away | US franchise service blog | yes |
| 4 | insectshield.com/blogs/blog/where-do-mosquitoes-go-in-the-winter | US product brand blog | yes |
| 5 | **buzzskito.ca/blog/what-temperature-kills-mosquitoes** | **us** | **no** |
| 6 | facebook.com/TulsaHealth/posts/... | **US county health department** (Tulsa) | yes |
| 7 | rowlandpest.com/blog/what-temperature-kills-mosquitoes | US regional pest co. — **Florida-framed** | yes |
| 8 | youtube.com/shorts/ltxb9eWJIJI | **NBC DFW** (local TV, Dallas) | yes |
| 9 | terminix.com/blog/science-nature/mosquitoes-in-the-fall | US franchise service blog | yes |

**Read the shape of that list.** Three of the nine are US *local* voices — a Tulsa county health department, an NBC Dallas segment, a Florida pest company. Google is assembling a regionally-hedged answer because the true answer changes by US region. That is the single largest strategic signal on this SERP.

### AI Overview citations on the sibling query "what temperature do mosquitoes go away" (500/mo)

Same shape, plus one we do not compete with at all:

- **mosquitomagnet.com/articles/mosquito-season** — "When Is Mosquito Season In Your State?"
- **rowlandpest.com** — titled "What Temperature Kills Mosquitoes? | **Florida Pest Tips**"

State-level and region-level framing is being pulled into the AIO on the temperature cluster. We have none.

---

## 2. Top 10 organic — page type and authority

| Organic # | Ahrefs pos | URL | Page type | DR | UR | RefDomains | Page traffic |
|---|---|---|---|---|---|---|---|
| 1 | 3 | mosquitojoe.com/blog/what-temperature-kills-mosquitoes | Franchise service blog — our direct analogue | 58 | **6** | **3** | 769 |
| 2 | 4 | army.mil/article/283270 | **US federal agency** article | 90 | 4 | 5 | 2,427 |
| 3 | 5 | reddit.com/r/Entomology/... | **Forum thread** (+3 Reddit sitelinks) | 95 | **0** | — | 200 |
| 4 | 6 | vdci.net/blog/how-cold-is-too-cold-for-mosquitoes | **Mosquito-control contractor blog (~520 words)** | **47** | 6 | 5 | 845 |
| 5 | 7 | terminix.com/blog/science-nature/mosquitoes-in-the-fall | Franchise service blog | 73 | 4 | 28 | 513 |
| 6 | 8 | westernexterminator.com/western-answers/when-do-mosquitoes-go-away | Franchise Q&A page | 50 | 4 | **0** | 92 |
| 7 | 10 | quora.com/How-cold-does-it-have-to-get... | Q&A forum | 92 | 0 | — | 160 |
| 8 | 11 | mosquitohero.com/en-ca/blog/how-hot-weather-affects-mosquitoes | **Canadian** service blog | **29** | **0** | 1 | 154 |
| 9 | 12 | youtube.com/watch?v=5xs2V0CcorM | Local-TV "Verify" video | 99 | 4 | 0 | 10 |
| 10 | 13 | mosquitosquad.com/blog/how-cold-does-it-have-to-be... | Franchise service blog | 55 | 4 | 3 | 125 |
| 11 | 14 | cbsnews.com/sacramento/news/return-high-heat-fewer-mosquitoes | **Local news — heat angle** | 92 | 0 | 0 | 27 |
| **12** | **15** | **buzzskito.ca/blog/what-temperature-kills-mosquitoes** | **us** | **2** | **4** | **0** | **65** |

### The lowest-authority page in the top 5 — the proof of what is achievable

**VDCI — `vdci.net/blog/how-cold-is-too-cold-for-mosquitoes` — DR 47, UR 6, 5 referring domains, ~520 words.**

This is the single most important row in this document. Break down what it actually is:

- **Roughly one-third of our word count.** ~520 words to our ~2,000+.
- **Three H2s total.** ("Where Do Mosquitoes Go in the Winter?", "Understanding Mosquito Temperature Tolerance", "How Mosquito Temperature Tolerance Affects Mosquito Management")
- **No table.** We have a six-row temperature table.
- **No FAQ block, no FAQ schema.** We have eleven FAQ entries with schema.
- **Two temperature numbers in the entire article** — 50°F and 32°F. We publish six thresholds.
- **No species named.** Not one, not even a common name.

And it beats us by eight organic positions.

It has exactly two things we do not: it is written natively in Fahrenheit for an American reader, and it **cites CDC, EPA and AMCA by name in the body**. That is the whole delta. This is not a link-authority problem — VDCI's page has five referring domains and MosquitoJoe's #1 has three. Our page-level authority (UR 4) is within a rounding error of the #1 result's (UR 6). **The gap is US relevance, not links.**

Secondary proof: **Western Exterminator ranks organic #6 with DR 50 and literally zero backlinks and zero referring domains to the page.** And **mosquitohero.com ranks organic #8 at DR 29 / UR 0 — on an `/en-ca/` Canadian URL path.** A Canadian page already sits in the US top 10 here. Canadian origin is not the barrier.

---

## 3. People Also Ask — VERBATIM

These become H2s. Captured live from three sibling SERPs in the same cluster.

### From "what temperature do mosquitoes die" (the target)

1. **Will a cold room kill mosquitoes?**
2. **What do mosquitoes hate the most?**
3. **Can a mosquito die from heat?**
4. **Do mosquitos die in AC?** *(note: Google's own spelling — "mosquitos", not "mosquitoes")*

### From "what temperature kills mosquitoes" (500/mo — where we are already organic #4)

5. **Are mosquitoes out in 100 degree weather?**
6. **What kills mosquitoes instantly?**
7. *(repeat)* Do mosquitos die in AC?
8. *(repeat)* What do mosquitoes hate the most?

### From "what temperature do mosquitoes go away" (500/mo)

9. **What temperature do mosquitoes stop coming out?**
10. **What smell do mosquitoes hate most?**
11. **Do mosquitoes bite less if you shower?**
12. **What's the worst month for mosquitoes?**

**The pattern is unmissable.** Of twelve PAA slots, **five are about heat or indoor/AC temperature** (3, 4, 5, 1, and the heat half of the cluster). Our page devotes a single short H2 to heat, opening with the words "Rarely, in Ontario" — and contains the string "AC" or "air conditioning" **zero times**. Google is asking, five different ways, a question we have almost entirely declined to answer.

"Do mosquitos die in AC?" appears in **two separate SERPs** in this cluster. It is the most persistent unanswered question on the whole board.

---

## 4. What the top 3 pages have that we do not

### MosquitoJoe (organic #1, DR 58, UR 6, 3 refdomains, ~1,300 words)

| They have | We have |
|---|---|
| **46°F** — the temperature at which *Aedes aegypti* **larvae** die | "larvae die when the water freezes solid" — no number |
| FAQ: **"Can mosquitoes survive in AC?"** | nothing on indoor temperature |
| FAQ: "Do mosquitoes die off completely during winter?" | equivalent covered |
| H2 "The Preferred Mosquito Temperature Range" — **70–80°F stated as the optimum band** | we state ">26°C (80°F)" as peak — we never name a preferred *range*, and 70–80°F is the number Americans are searching for |
| **80°F+ framed as a dehydration/death risk** | we frame 80°F+ as peak activity — an outright contradiction of the #1 result that we should address explicitly, not silently |
| 9 named US metro service areas (Chicago, Dallas, Fort Worth, Houston, Nashville, Phoenix, Richmond, Charlotte, Atlanta) | 19 GTA cities |
| *Aedes aegypti* named | no US species named |

### Army.mil (organic #2, DR 90, ~1,200 words)

| They have | We have |
|---|---|
| **Named human experts with credentials** — 1st Lt. Curran P. Atkinson and Kevin Harkins, DHA Public Health Entomologists | "BuzzSkito's GTA technicians" — unnamed |
| **Diapause and quiescence described as two DISTINCT mechanisms** — diapause = adult female metabolic pause; quiescence = adult dies, eggs stay dormant until reactivated by warm water | **we conflate both under "diapause."** This is an accuracy defect, not just a gap |
| Shelter list: "underground sewer drains, sheds, garages, basements, inside logs, woodpiles and animal burrows" | similar list — we match here |
| 50°F given as the point mosquitoes **cease flying** | we match (10°C/50°F) |

The diapause/quiescence split is the highest-value single correction available. It is the one thing the DR 90 federal source has that nobody else on the SERP does, it is technically correct, and adding it is purely additive — a new subsection under the existing overwintering H2, not a rewrite.

### Reddit r/Entomology (organic #3, DR 95, **UR 0**)

A forum thread with zero page authority is beating us. Google is explicitly rewarding first-hand, experiential, non-corporate answers on this query. We have a genuine field-crew perspective and currently spend 100% of it on Ontario. That is our unique asset, aimed at the wrong country.

### VDCI (organic #4, DR 47, ~520 words) — covered above

Cites **CDC, EPA and AMCA** inline. We mention "CDC, American Mosquito Control Association" once, in 12px grey small-print under the table, in a hedge sentence ("widely reported by..."). It is not an inline citation and it carries no link.

### Terminix (organic #5, DR 73, ~1,100 words)

| They have | We have |
|---|---|
| **"two consecutive hours below 28°F"** — the precise NWS killing-frost definition | "sustained temperatures at or below roughly -2°C (28°F)" — vaguer, harder for an AIO to lift verbatim |
| **Three species with Latin names**: *Aedes aegypti*, *Aedes albopictus* (Zika), *Culex pipiens* (West Nile) | genus-level only: "Culex, Anopheles and Culiseta" |
| **Ohio State University** cited | no US university, no state extension service |
| "in warm, southern climates, mosquitoes may even be active in the winter" | **nothing — see §5** |
| "Key takeaways" summary block | our Quick Answer capsule is stronger here |

**The "two consecutive hours below 28°F" phrasing is the exact spec the AI Overview is repeating.** Both MosquitoJoe and Terminix carry it. We carry a fuzzier version of the same fact. Adding the precise NWS definition alongside our existing wording is the cheapest AIO-durability win on the page.

---

## 5. What a US reader needs that our Canadian page omits

### 5.1 The page's core thesis is silently wrong for the southern third of the US

This is the most serious finding in the teardown.

Our entire page is architected around one narrative: **frost ends the season.** "The first hard frost ends the active season." "Don't wait for frost." "Waiting for frost isn't a mosquito plan." The CTA headline is "Don't wait for frost — get ahead of mosquito season."

**Large parts of the US never get a killing frost.** South Florida, the Gulf Coast, South Texas, coastal Southern California, Hawaii, southern Arizona. Rowland Pest — cited in the AIO — wins partly on exactly this sentence: *Central Florida doesn't get cold enough for a true off-season.* The mosquitomagnet state page, also AIO-cited, says South Florida season starts in **early February** and in the extreme south and Hawaii "has been known to last throughout the year."

A reader in Tampa or Houston lands on our page and every organising claim is false where they live. This is why Google is hedging the AIO with a Florida source and a Tulsa health department. **Additive fix:** a "Does this change where you live in the US?" section that keeps the frost narrative intact for the North and adds the no-frost regions as a named exception. Nothing is removed; the Ontario framing stays and becomes the northern case rather than the universal case.

### 5.2 US species — we name none

CDC's own "About Mosquitoes in the United States" names the vectors that matter: ***Aedes aegypti***, ***Culex pipiens***, ***Cx. tarsalis***, ***Cx. quinquefasciatus***, ***Anopheles freeborni***, ***An. quadrimaculatus***. Add ***Aedes albopictus*** (Asian tiger mosquito) — the mosquitomagnet AIO source names it, Terminix names it.

Our page names Culex, Anopheles, Culiseta and "the aggressive Aedes group" at genus level only. Every top-5 competitor that names anything names it at species level. The overwintering strategy genuinely differs by species (Aedes overwinter as freeze-tolerant eggs; Culex as diapausing mated females) — so species-level naming is not decoration, it is the mechanism our page already describes but leaves unattributed.

### 5.3 US seasonality and regions — nothing

Our page's geographic content is 100% Ontario: "Ontario winter", "GTA autumn", "downtown Toronto backyard", "Caledon acreage", "mid-to-late October". A US reader gets no anchor at all.

The AIO is already pulling state-level content in from mosquitomagnet. Ranges available and citable: Alaska mid-June–late July; Maine and northern states early May; Pennsylvania late April; northern California early April; Arizona and North Florida early March; South Florida early February; Hawaii and extreme south year-round. The universal trigger — **50°F** — is the same number we already publish, which makes this a natural extension of content we have rather than a new claim.

**Load-bearing constraint:** all Ontario/GTA content, the Toronto and Caledon internal links, and the frost timing for the North must stay exactly as they are. The US layer sits alongside, framed as "if you're reading this from the US."

### 5.4 US agencies — we cite none inline

Every serious competitor cites federal or academic authority by name in the body:

- VDCI → CDC, EPA, AMCA
- Terminix → Ohio State University
- Rowland → CDC (linked)
- Army.mil → **is** the federal source

We have a grey small-print hedge under a table. For a US audience the standard citation set is **CDC**, **EPA** (which runs the mosquito-control public information programme), **AMCA / mosquito.org**, and **state cooperative extension services** — Texas A&M AgriLife, UF/IFAS, Penn State Extension. Not one appears on our page. Health Canada and provincial public health can stay; this is additive.

### 5.5 Heat — a whole US intent we have nearly abandoned

Five of twelve PAA slots are heat- or AC-related. CBS Sacramento ranks organic #11 with a pure heat story. `what temperature is too hot for mosquitoes` (50/mo), `what temperature do mosquitoes die in summer` (50/mo), and PAA "Are mosquitoes out in 100 degree weather?" all point the same way.

Our heat H2 is four sentences and opens by dismissing the question as an Ontario non-issue. For a Phoenix, Las Vegas, Dallas or Sacramento reader this is *the* question — and note that MosquitoJoe, the #1 result, actually asserts that **above 80°F mosquitoes risk dehydration and death**, which directly contradicts our "peak activity above 26°C (80°F)". Both can be true (activity peak vs. survival ceiling), and reconciling them explicitly with sourced numbers is a strong differentiating section nobody on the SERP currently has.

### 5.6 Indoor / AC — zero coverage, two PAA slots

"Do mosquitos die in AC?" and "Will a cold room kill mosquitoes?" are both live PAA questions, and MosquitoJoe carries "Can mosquitoes survive in AC?" as an FAQ. Our page contains nothing about indoor temperature. US homes are air-conditioned to roughly 72–78°F, comfortably inside the mosquito activity band — which is precisely why the question is asked and why the honest answer ("no, AC does not kill them, it slows them") is worth stating plainly.

### 5.7 Unit order — °C first, everywhere

Every threshold on the page leads with Celsius: "-2°C (28°F)", "10°C (50°F)", "26°C (80°F)". The table's **first column is °C**; °F is column two. The `<title>`, meta description and Quick Answer all lead °C.

A US reader scanning for a number sees the wrong unit first, every time. The title tag, meta description, H1 and Quick Answer capsule are all locked by the prime directive and must not change — but the **table column order is not locked**, and new sections can be written °F-first with °C in parentheses. That alone materially changes how the page reads to the 15.2% of traffic now arriving from the US.

### 5.8 No image, no video

The video pack sits at organic position 9 and a YouTube result at 12. Eight of nine AIO citations carry an image thumbnail; ours is the only one that does not. The page ships no image whatsoever.

---

## 6. Where our page falls short — precise, line by line

`app/blog/what-temperature-kills-mosquitoes/page.tsx`

| # | Location | Shortfall | Additive fix |
|---|---|---|---|
| 1 | Whole page | **Zero US species.** Genus-only ("Culex, Anopheles and Culiseta", "the aggressive Aedes group") | Name *Aedes aegypti*, *Ae. albopictus*, *Culex pipiens*, *Cx. tarsalis*, *Cx. quinquefasciatus*, *Anopheles quadrimaculatus* per CDC, attached to the overwintering mechanism each uses |
| 2 | Whole page | **Zero US geography.** Ontario/GTA only | New "If you're reading this in the US" section: 50°F trigger + season windows by region |
| 3 | H2 "What temperature is too cold for mosquitoes?" and the CTA | **Frost-ends-the-season thesis is false in the no-frost South** | New subsection naming FL, Gulf Coast, South TX, coastal S. CA, HI, southern AZ as year-round; keep the northern narrative untouched |
| 4 | H2 "Do mosquitoes die in winter?" bullet 2 | **Diapause and quiescence conflated.** We call all adult-female overwintering "diapause" | Split per Army.mil/DHA: diapause = female metabolic pause; quiescence = adult dies, eggs dormant until warm water reactivates them |
| 5 | Table caption (grey small print) | **CDC/AMCA mentioned once, not cited, not linked, below the fold of the table** | Inline named citations in body prose: CDC, EPA, AMCA, plus a state extension service (UF/IFAS or Texas A&M AgriLife) |
| 6 | H2 "What temperature kills mosquitoes?" | **"Sustained" is vague** where competitors are precise | Add the NWS killing-frost spec — *two consecutive hours at or below 28°F* — alongside existing wording |
| 7 | H2 "Do mosquitoes die in winter?" | **No larval temperature number.** "Water freezes solid" only | Add the ~46°F *Aedes aegypti* larval threshold (MosquitoJoe carries it; verify against a citable source before publishing) |
| 8 | H2 "Does hot weather kill mosquitoes?" | **Four sentences, opens "Rarely, in Ontario."** Five PAA slots point here | Expand substantially: the 80°F activity-peak vs. dehydration-risk tension, behaviour at 100°F+, Southwest/Gulf reality |
| 9 | Whole page | **"AC" appears zero times.** Two live PAA slots | New H2 "Do mosquitos die in AC?" — AC (72–78°F) slows, does not kill |
| 10 | Whole page | **No answer to "Will a cold room kill mosquitoes?"** | Fold into the AC section or give its own H2 |
| 11 | FAQS array (11 entries) | Missing every verbatim PAA phrasing | Add PAA questions 1–6 and 9 verbatim as new FAQ entries — array is append-only, schema regenerates automatically |
| 12 | Temperature table | **°C is column 1, °F is column 2** | Reorder columns to °F-first, or add an "°F" emphasis; the table is not locked by the prime directive |
| 13 | Whole page | **No image** — the only AIO citation of nine without a thumbnail | Add one licensed image with alt text |
| 14 | Quick Answer capsule | Locked — **do not touch** | New content goes below it |
| 15 | Title / meta / H1 / slug | Locked — **do not touch** | — |

---

## 7. Cluster the expansion should target

| Keyword | US vol | KD |
|---|---|---|
| what temperature do mosquitoes die | 800 | 1 |
| what temperature do mosquitoes go away at night | 800 | — |
| at what temperature do mosquitoes die | 700 | 2 |
| what temperature kills mosquitoes | 500 | 1 |
| what temperature do mosquitoes go away | 500 | 1 |
| do mosquitoes die in the winter | 400 | 0 |
| what temp kills mosquitoes | 300 | 1 |
| what temperature is too cold for mosquitoes | 250 | 0 |
| at what temperature do mosquitoes go away | 200 | 1 |
| what temperature do mosquitoes come out | 200 | 2 |
| how cold is too cold for mosquitoes | 150 | 0 |
| at what temperature do mosquitoes become inactive | 150 | 1 |
| what temperature do mosquitoes die at | 150 | 1 |
| *(+ ~20 long-tail variants, 30–90/mo each)* | ~800 | — |
| **Cluster total** | **~5,900/mo** | **KD 0–2** |

Difficulty across the entire cluster is **0–2**. Combined with the VDCI proof (DR 47, 520 words, top-5) and our existing AIO citation, this is the lowest-resistance US expansion on the blog.

Note **"what temperature do mosquitoes go away at night" (800/mo)** — equal-largest term in the cluster, and we serve it nowhere. It merges temperature with the dusk/dawn activity intent already covered on `/blog/when-are-mosquitoes-most-active`, which this page already links to.

---

## 8. Constraint check for the writer

- Strictly additive. No existing section reordered, rewritten or removed.
- Title tag, meta description, H1, slug, Quick Answer capsule: **untouched**.
- All Ontario/GTA content, `CTASection`, the aside CTA, and the Toronto/Caledon/blog internal links: **untouched**. The US layer sits alongside.
- One URL, both markets. The northern-US case and the Ontario case are the same physics — the US layer extends the page, it does not convert it.
- Every new medical or vector claim sourced inline to CDC, EPA, AMCA, or a named state extension service.
- No affiliate products belong on this page; if any are ever added, `search=` only, never `asin=`.
- Tick treatments, if mentioned anywhere: **5 sprays per season.**
- Item 7 (the 46°F larval figure) is currently single-sourced to a competitor — verify against CDC/AMCA/extension literature before it goes on the page.
