# US SERP Teardown — "what blood type do mosquitoes like"

- **Target page:** `app/blog/what-blood-type-do-mosquitoes-bite/page.tsx`
- **Live URL:** https://buzzskito.ca/blog/what-blood-type-do-mosquitoes-bite
- **Market:** United States (google.com, US)
- **Date of teardown:** 2026-09-02
- **Sources:** Ahrefs SERP Overview (live US pull), Ahrefs Keywords Explorer, live WebFetch of the ranking pages

---

## 0. Keyword economics

| Metric | Value |
|---|---|
| US volume (Ahrefs) | **6,400/mo** (brief cited 9,202 — treat 6.4K as the conservative floor) |
| Global volume | 10,000/mo |
| **Keyword Difficulty** | **0** |
| CPC | $1.00 |
| Clicks on SERP | 4,199 (so ~66% of searches still click through despite the AI Overview) |
| Intent | Informational, non-branded, non-local |
| Parent topic | itself (this query IS the cluster head) |

**Cluster size.** The ABO/mosquito phrasing variants add up to roughly **25,000+ US searches/month** against a single URL. The head term and several fat variants carry **KD 0**:

| Keyword | US vol | KD |
|---|---|---|
| what blood type do mosquitoes like | 6,400 | **0** |
| what blood type do mosquitoes like the most | 3,200 | **0** |
| what blood type are mosquitoes most attracted to | 2,000 | 24 |
| are mosquitoes attracted to certain blood types | 1,800 | 26 |
| do mosquitoes prefer a certain blood type | 1,400 | 26 |
| what type of blood do mosquitoes like | 1,100 | **0** |
| what blood type attracts mosquitoes | 1,000 | 34 |
| which blood type do mosquitoes hate | 1,000 | 32 |
| do mosquitoes like a certain blood type | 900 | 30 |
| what blood type do mosquitoes prefer | 700 | **0** |
| why do mosquitoes like type o blood | 500 | 16 |
| what blood type do mosquitoes not like | 450 | 22 |
| what blood type do mosquitoes hate | 400 | **0** |
| how do mosquitoes know your blood type | 150 | n/a |
| can mosquitoes smell blood type | 100 | 35 |

KD 0 on a 6,400-volume US head term is the headline. This is not an authority problem. It is an answer-completeness problem.

---

## 1. SERP features above the organic results

Pulled live from the US SERP. In display order:

### Position 1 — AI Overview (present)

Carries **image thumbnails** and **three sitelink citations**. The AIO cites:

1. **Our Blood Institute** (ourbloodinstitute.org) — a regional blood bank, DR 56
2. **Smithsonian Magazine** (smithsonianmag.com) — DR 90
3. **AgriLife Today** (agrilifetoday.tamu.edu) — **Texas A&M AgriLife Extension Service**, DR 90

**Read this carefully.** The AI Overview does **not** cite Pfizer (which ranks #3 organic), does **not** cite Healthline (DR 92, ranks #10), and does **not** cite the PMC paper (DR 95, ranks #5). It cites a small blood bank, a general-science magazine, and **a US state land-grant extension service**. Domain authority is not what is getting cited here — *entity coverage* is. All three cited pages carry the blood-bank / prevalence / extension-entomologist angles that our page has zero of.

### Position 2 — People Also Ask (4 questions)

See section 3 for verbatim.

### Position 6 — News carousel (3 items, with image + video thumbnails)

Mixed news and short-form social video. Live items include:

- "If you're one of these blood types, you might be a mosquitoes favorite."
- "Why do mosquitoes prefer certain blood types?"
- A short-form video item whose caption reads, in part: *"Mosquitoes land on Type O blood people nearly TWICE as often as Type A… They also love: Beer drinkers. Pregnant women…"*

Related news coverage on this query is **regional and event-driven in the US** — e.g. the Austin *American-Statesman*, July 2025: *"Texas sees surge of mosquitoes after recent floods — and they prefer this blood type."* US news pegs this topic to floods, storms and state outbreaks. Canada has no equivalent news hook.

### Video presence

Video thumbnails appear attached to the news block and to a DR 99 organic result at position 19 ("Clothing color, blood type can attract mosquitoes"). On the sibling SERP a DR 99 video result ranks **#9** ("if you're an O blood type, mosquitos really do like you more…").

### Not present

- **No featured snippet** (the AI Overview has absorbed it)
- **No standalone image pack** (images ride on the AIO and news block)
- **No shopping / product carousel** — despite CPC $1.00. This is informational, not commercial. Affiliate monetisation here is a *downstream* play, not a SERP-match play.

---

## 2. Top 10 organic results + the achievability proof

| # | URL | Page type | DR | UR | Backlinks / RefDomains |
|---|---|---|---|---|---|
| 3 | pfizer.com/news/articles | Pharma corporate editorial | 86 | 4 | 6 / 6 |
| **4** | **ourbloodinstitute.org/blood-matters** | **Regional blood-bank blog** | **56** | **0** | **0 / 0** |
| 5 | pmc.ncbi.nlm.nih.gov/articles/PMC8692623 | **RETRACTED** primary research | 95 | 0 | 1 / 1 |
| 7 | smithsonianmag.com/science-nature | Science magazine listicle | 90 | 7 | 63 / 22 |
| 8 | (DR 99 platform — video/social) | UGC video | 99 | 0 | – |
| 9 | agrilifetoday.tamu.edu | **State extension service** news | 90 | 0 | 0 / 0 |
| 10 | healthline.com/health | Health publisher | 92 | 6 | 280 / 177 |
| 11 | insectshield.com/what-attracts-mosquitoes | Apparel brand content | 56 | 0 | 0 / 0 |
| 12 | mosquitonix.com/blogs/news | **Mosquito-control company blog** | **38** | 9 | 1 / 1 |
| 13 | (DR 99 platform — forum thread) | UGC discussion | 99 | 0 | – |
| 14 | mosquitojoe.com/Blog | **Mosquito-control franchise blog** | 58 | 0 | 0 / 0 |
| 15 | mosquitosquad.com/triad/blog | **Mosquito-control franchise blog** | 55 | 0 | 0 / 0 |
| 16 | stories.uq.edu.au/contact-magazine | University magazine | 87 | 0 | 0 / 0 |
| 17 | aarp.org/health | Consumer health | 91 | 0 | 0 / 0 |
| 18/20 | pci-hicare.com | **Pest-control company blog** | **19** | 0 | 0 / 0 |

### THE PROOF OF ACHIEVABILITY

**`ourbloodinstitute.org/blood-matters/mosquitoes-blood-type/` — position 4, DR 56, URL Rating 0, zero backlinks, zero referring domains.**

The whole domain draws only ~1,585 est. monthly organic visits across 60 keywords, with an Ahrefs Rank of **390,675**. It is a regional blood bank. Its ranking page has *no link equity of its own whatsoever*.

It ranks **above** the retracted NIH/PMC paper (DR 95), above Smithsonian (DR 90), above the Texas A&M extension service (DR 90), and above Healthline (DR 92).

And on the sibling keyword **"which blood type do mosquitoes hate" (1,000/mo) it ranks #1 outright** — ahead of Pfizer (DR 86), Healthline (DR 92) and PMC (DR 95).

That page is ~1,100 words. It is not long, not linked-to, and not authoritative. It wins on one thing: **its H2s are exact-match answers to the four highest-volume phrasings of the question**, and it answers each one plainly.

**Second proof point:** mosquito-control *company* blogs rank throughout — MosquitoNix at **DR 38** (#12), Mosquito Joe DR 58 (#14), Mosquito Squad DR 55 (#15), and pci-hicare at **DR 19** (#18 and #20). There is no editorial-only gate on this SERP. A pest-control brand is a native result type here. BuzzSkito is exactly the same kind of publisher as four pages already ranking.

**Conclusion: nothing about our domain is holding this page back. Coverage is.**

---

## 3. People Also Ask — VERBATIM

### From the head SERP, "what blood type do mosquitoes like":

1. **"Does O+ attract mosquitoes?"**
2. **"Why am I so prone to mosquito bites?"**
3. **"Do mosquitoes like fat or skinny people?"**
4. **"Is blood type O+ rare?"**

### From the sibling SERP, "which blood type do mosquitoes hate":

5. **"What blood type do mosquitoes avoid?"**
6. **"Which smell do mosquitoes hate?"**
7. **"Are mosquitoes attracted to the O+ blood group?"**
8. **"Which country has 0 mosquitos?"**

### What these reveal

**Two of eight PAA questions are about the Rh factor** — "O+", not "O". Our page mentions Rh **exactly zero times**. It never distinguishes ABO from Rh, never says "positive"/"negative", never tells a reader that the Shirai study grouped by ABO and did not test Rh. Two live PAA slots hinge on a concept our page does not contain.

**"Is blood type O+ rare?" is a prevalence question and it is the most valuable one on the list.** Our page has no blood-type distribution data at all. O+ is the **most common** blood type in the United States (~38% of the population per American Red Cross figures). That single fact supports the best insight available on this entire SERP and nobody is making it:

> *The "mosquito magnet blood type" is also the most common blood type. If Type O people report more bites, part of that is a base-rate illusion — there are simply more of them.*

That is a genuinely novel, quotable, AIO-baitable line, it is arithmetic rather than a claim about biology, and it strengthens our existing sceptical framing instead of contradicting it.

**"Do mosquitoes like fat or skinny people?"** — we have one table row ("Body size & metabolism") and no H2 and no direct answer.

**"Which country has 0 mosquitos?"** — Iceland (and Antarctica). Forty words of trivia occupying a live PAA slot we are not competing for.

---

## 4. What the top 3 have that we do not

### #3 — Pfizer, "Why Are Some People Tastier to Mosquitoes Than Others?" (DR 86, ~1,100 words, 3 images)

Headings: *The Rules of Mosquito Attraction* → *The Mosquito Twin Test* → *Mosquitoes Can Be More Than a Nuisance* → *Common Sense Mosquito Advice*

What it has that we lack:

- **The twin study.** A 2015 *PLOS ONE* study run at the London School of Hygiene & Tropical Medicine comparing identical vs fraternal twins for mosquito attractiveness.
- **"~67% of attraction is attributable to DNA."** A hard, specific, memorable number. This is the single most AI-Overview-quotable statistic on the SERP. Our page's entire genetics content is one unsourced clause: *"Genetics plays a large role in that scent."*
- Roberts et al. (2005) body-odour work, cited by name.
- A **disease-consequence section** naming West Nile, Zika, dengue and chikungunya, with the CDC "deadliest animal" framing.
- Three images.

### #4 — Our Blood Institute, "Yes, Mosquitoes Can Tell Your Blood Type" (DR 56, UR 0, ~1,100 words)

Headings, in order: *What Blood Type Do Mosquitoes Like?* → *What Blood Type Do Mosquitoes Not Like?* → *What Else Attracts Mosquitoes?* → *How to Prevent Mosquito Bites* → *One More Way to Avoid Mosquitoes*

What it has that we lack:

- **Exact-match H2s straight off the keyword list.** "What Blood Type Do Mosquitoes Not Like?" is a 450/mo US keyword rendered verbatim as a heading. Ours is *"What blood type do mosquitoes hate or bite the least?"* — a compound that matches neither variant cleanly.
- A **distinctive angle** that no competitor can copy: donate your blood to a blood bank instead of to mosquitoes. It is not better information; it is a *memorable* page. That is what got it into the AI Overview.
- Expandable accordion sections for prevention.
- It cites the **"American Journal of Entomology" (2019)** study — see §5, this citation is the load-bearing weakness of the entire SERP.

### #5 — PMC, "RETRACTED ARTICLE: Human blood type influences…" (DR 95)

**This is the biggest opportunity on the page and we currently say nothing about it.**

- Full citation: *Human blood type influences the host-seeking behavior and fecundity of the Asian malaria vector* Anopheles stephensi, **Scientific Reports**, December 2021.
- **Retracted 17 June 2022.**
- **Retraction reason, per the retraction note:** concerns were raised about overlaps with a previously published article — Figures 2, 3, 5, 7 and 8b overlapped with Figures 4, 5, 2, 6 and 7 in the earlier publication. A review of the images and data in those figures identified **errors and discrepancies that could not be resolved**, and the **authors lost confidence in the integrity of the data**. The authors retracted it themselves.
- **What it had claimed:** *Type B*, not Type O — strongest host-seeking preference and highest fecundity on Group B (216.3 eggs) versus AB (104.06) and O (98.01).
- **Entomology Today**, the Entomological Society of America's outlet, published a write-up of it ("Let It Be B") and has since **pulled the post and replaced it with a retraction notice**.

A **retracted paper is ranking #5 in the United States on a 6,400/mo query**, and *not one page in the top 20 tells the reader it was retracted*. Meanwhile the retracted "some species prefer Type B" claim is actively propagating through the US short-form video results in the news carousel ("it also depends on the mosquito species. Some prefer Type B!").

Being the only page on the SERP that names the retraction, dates it, states the reason, and explains why the Type B claim keeps resurfacing is a permanent, un-copyable differentiator that costs us one added section and violates nothing in the additive constraint.

---

## 5. The citation the whole SERP is standing on

Half the top 20 — Our Blood Institute, Smithsonian, Native Pest Management, Mosquito Squad, MosquitoNix — cite a **"2019 study in the American Journal of Entomology"** in which mosquitoes chose the Group O feeder most often.

The study is real: *Blood Feeding Preference of Female* Aedes aegypti *Mosquitoes for Human Blood Group Types and Its Impact on Their Fecundity*, **American Journal of Entomology** 3(2):43–48, 2019 (DOI 10.11648/j.aje.20190302.13).

But the journal is published by **Science Publishing Group**, a publisher **widely flagged as predatory** (including by Jeffrey Beall, originator of Beall's List). The journal is **not indexed in PubMed/MEDLINE** and **not in the Clarivate/Web of Science Master Journal List**, under either ISSN (2640-0529 print / 2640-0537 online).

So the two most-cited pieces of evidence on this SERP are:

1. A paper in a journal widely flagged as predatory and indexed nowhere reputable (2019), and
2. A paper that was **retracted for data-integrity failures** (2021/2022).

The only well-indexed, non-retracted study in the mix is **Shirai et al. 2004** — which we already cite, and which we cite *slightly wrong* (see §7).

That is the gap in one sentence: **this SERP has an evidence-quality vacuum, and evidence quality is exactly what our page is already built to deliver.** We are one section away from being the only trustworthy page on it.

---

## 6. What a US reader needs that our Canadian page omits

### 6a. Repellent nomenclature — an active US failure

Our page says: *"use a Health Canada-registered repellent with DEET or icaridin."*

- **"Icaridin" is the Canadian/ISO name. The US label name is "picaridin."** A US reader scanning a shelf at Walmart or reading a CVS label will not find the word "icaridin" anywhere. This is a live, concrete failure — not a nicety.
- **"Health Canada-registered" has no US meaning.** The US equivalent is an **EPA registration number (EPA Reg. No.)** printed on the label, plus the EPA's repellent search tool.
- **The CDC's actual approved list is broader than ours:** DEET, **picaridin**, IR3535, oil of lemon eucalyptus (OLE), **para-menthane-diol (PMD)**, and **2-undecanone**. We name only DEET, icaridin and PMD.
- **CDC age guidance we omit:** DEET, picaridin and IR3535 are appropriate for children 2 months and older; **OLE/PMD should not be used on children under 3 years**.
- **CDC application guidance we omit:** sunscreen first, repellent second.
- CDC states EPA-registered repellents are safe and effective when used as directed, **including for pregnant and breastfeeding women** — directly relevant since our page raises pregnancy as an attraction factor and then never resolves the "so what do I do about it" question for a pregnant US reader.

### 6b. US species and ranges — currently absent

We name exactly one species (*Aedes albopictus*, via Shirai). A US reader gets nothing on:

- ***Aedes aegypti*** — yellow fever mosquito, established across the southern US.
- ***Aedes albopictus*** — Asian tiger mosquito, cold-tolerant, established well further north; listed by the National Invasive Species Information Center. **The CDC publishes estimated potential range maps for both** across the contiguous US.
- ***Culex pipiens / Culex quinquefasciatus*** — the primary **West Nile** vectors across most of the US, and also vectors of St. Louis encephalitis.
- ***Anopheles stephensi*** — an **Asian** malaria vector, **not established in the US**. Worth one line purely to defuse the retracted study: the paper US readers are being shown at #5 tested a mosquito that does not live in America.

**The genuinely useful US-specific point nobody is making:** the blood-type studies used ***Aedes*** and ***Anopheles***. The mosquito biting most Americans in most of the country is ***Culex***, **and no blood-type preference study has tested it.** That is a real, checkable, high-value caveat and it is ours for free.

### 6c. Biting-time — we are currently giving a US reader partly wrong advice

Our page says: *"Cover up… at dawn and dusk when mosquitoes peak."*

That is *Culex*-typical behaviour and it is correct for Ontario. But **Aedes aegypti and Aedes albopictus are aggressive daytime biters**. For a reader in Florida, Texas, Arizona or southern California, "dawn and dusk" is actively incomplete advice. This can be fixed purely additively — keep the existing line, add the *Aedes* daytime qualifier alongside it.

### 6d. US seasonality, regions and disease

Our "Why this matters in Ontario" section (Public Health Ontario, PHAC, West Nile) is correct, is a load-bearing local signal, and **must stay untouched**. But a US reader needs a parallel:

- **West Nile virus** is the most common mosquito-borne disease in the continental US; the CDC tracks it through **ArboNET**.
- **Eastern equine encephalitis (EEE)** — rare, severe, cyclical, concentrated in the Northeast and Gulf states.
- **Locally acquired dengue** — recurring in Florida and Texas, and an unprecedented cluster of locally acquired cases in **Los Angeles County, California**. Over 500 US dengue cases reported in 2026.
- **August and September are the peak months for US mosquito-borne illness** — later than the Ontario framing implies, and directly useful.
- **US mosquito season runs by state**, from effectively year-round in south Florida and south Texas to a short June–August window in the northern tier — versus our single May–September Ontario frame.
- *Aedes* range is expanding northward, putting previously unaffected northern states into play.

### 6e. US institutional voice

The AI Overview cites **Texas A&M AgriLife Extension**. US readers and US search alike trust **land-grant university extension services** — the structural analogue of our provincial public-health citations. Naming an extension entomologist (e.g. Sonja Swiger, Ph.D., Texas A&M AgriLife Extension, quoted in the AIO-cited AgriLife piece to the effect that in comparative studies there is always a winner, which does not make it the absolute winner every time) puts a US authority voice on the page that harmonises perfectly with our existing scepticism. Add **CDC** and **EPA** alongside — never in place of — Health Canada, PHO and PHAC.

### 6f. US retail context

The page currently has **zero affiliate links** — no `BuyLink`, no `AwardRow`, no `StickyBuyBar`. Its only purchase path is an internal link to the Ontario repellent guide. A US reader has no route to a product at all. Permitted `search=` BuyLinks for DEET / picaridin repellent are entirely absent and would be purely additive.

---

## 7. Where `app/blog/what-blood-type-do-mosquitoes-bite/page.tsx` falls short

The page is genuinely good: correct sceptical framing, a strong Quick Answer capsule, secretor-status coverage that most of the SERP lacks, a factor-ranking table that puts blood type last, and a medical-advice notice. **Nothing below asks for a rewrite.** All of it is additive.

### A. Citation precision errors (fix by adding qualifiers, not by rewriting)

1. **Shirai's journal is never named.** Line 107 says *"a 2004 laboratory study by Shirai and colleagues in Japan."* It was published in the **Journal of Medical Entomology 41(4):796–799 (2004)** — the journal of the **Entomological Society of America**. Naming it converts a foreign-sounding citation into a **US-institution** citation at zero cost and zero risk.

2. **"Fewer than 100 people" is a loose paraphrase.** Lines 18, 91, 107. The paper reports **64 human landing tests**. Give the real number.

3. **The 83% / 46% figures are missing the secretor qualifier.** Lines 18, 90, 107, 122, 125 and the Quick Answer all report "~83% for Type O vs ~46% for Type A" unqualified. The paper's 83.3% vs 46.5% figures are specifically for **group O secretors vs group A secretors**. Our own secretor section (lines 131–134) makes this correction land beautifully — the numbers just need the qualifier attached.

4. **The study's own strongest sceptical findings are unused.** Shirai et al. also reported that (a) Type O was significantly more attractive **only versus Type A** — not versus B or AB — and (b) **ABH antigens did not, in general, influence landing preference** among ABO groups. That is the single best evidence-quality finding available anywhere on this topic, it comes from the *pro*-Type-O study, and we are not using it.

### B. Missing content that the SERP demands

5. **No retraction section.** The page never mentions *Anopheles stephensi*, *Scientific Reports*, the June 2022 retraction, or the Type B claim. This is the #5 US result and our single largest differentiator. (§4)
6. **No treatment of the 2019 "American Journal of Entomology" study.** It is the citation every competitor leans on. Silently omitting it means we cannot adjudicate the SERP. Add it *and* rate it. (§5)
7. **No Rh factor content anywhere.** Two of eight PAA questions are "O+" questions. (§3)
8. **No blood-type prevalence data.** Blocks the "O+ is the most common US type, so this is partly a base-rate illusion" insight — the strongest original argument available. (§3)
9. **No twin study / no heritability number.** Pfizer's ~67%-genetic figure is the most quotable stat on the SERP; we have one unsourced clause. (§4)
10. **No skin-microbiome persistence content.** The carboxylic-acid / "mosquito magnets stay magnets for years" thread is what the US video and social results are pushing. Our table mentions carboxylic acids in one cell and never develops it.
11. **Secretor percentage unsourced.** We say ~80% (lines 26, 30, 93, 133); Smithsonian and the US news items say ~85%. Ours is defensible — it needs a named source attached, not a change.

### C. PAA coverage

12. Ten FAQ entries, and **not one matches a live PAA phrasing**. In substance we partly cover ~3 of 8. Uncovered outright: "Does O+ attract mosquitoes?", "Are mosquitoes attracted to the O+ blood group?", "Is blood type O+ rare?", "Do mosquitoes like fat or skinny people?", "What blood type do mosquitoes avoid?", "Which country has 0 mosquitos?". Partly covered but not phrase-matched: "Why am I so prone to mosquito bites?", "Which smell do mosquitoes hate?" (we link out to `/blog/smells-mosquitoes-hate` instead of answering inline).

### D. US-market gaps

13. **"Icaridin" with no "picaridin" synonym** (lines 38, 186) — a live failure for US readers. (§6a)
14. **"Health Canada-registered" with no EPA equivalent** (lines 38, 50, 186). (§6a)
15. **Incomplete CDC repellent list** — missing IR3535 and 2-undecanone; missing age guidance and sunscreen-order guidance. (§6a)
16. **"Dawn and dusk" without the *Aedes* daytime-biter qualifier** (lines 22, 187) — incomplete advice for the southern US. (§6c)
17. **Only one species named on the entire page.** No *Ae. aegypti*, no *Culex*, no CDC range maps, and no note that no blood-type study has ever tested *Culex*. (§6b)
18. **No US disease/seasonality parallel** to the Ontario section — no West Nile/ArboNET, EEE, locally acquired dengue in FL/TX/LA County, or the Aug–Sep US peak. (§6d)
19. **No US institutional voice** — no CDC, no EPA, no state extension service, while the AI Overview is citing Texas A&M AgriLife. (§6e)

### E. Format and monetisation

20. **Zero media.** No images, no diagram, no video. Pfizer runs 3 images; the SERP carries image thumbnails on the AIO and news block and video thumbnails on two organic results. We have three tables and nothing visual.
21. **Zero affiliate links.** No `BuyLink` / `AwardRow` / `StickyBuyBar` anywhere on the page. Permitted `search=` links for DEET/picaridin repellent are entirely absent, and a US reader has no purchase path at all.
22. **Every internal link is Ontario-framed.** Correct, load-bearing, and must stay — but there is no market-neutral internal destination for a US reader.

### F. Things that are correct — do not touch

- Title, meta description, H1, slug and the Quick Answer capsule.
- "Why this matters in Ontario" (Public Health Ontario, PHAC, West Nile) — load-bearing local signal.
- The not-medical-advice notice at line 195. Already present and correctly worded; keep verbatim.
- The `CTASection`, the $99 pricing reference, and all five Related-reading internal links.
- The factor-ranking table that puts blood type dead last — this is the page's best structural asset and it is exactly what the rest of the SERP gets wrong.

---

## 8. The one-line summary

**Nothing about our domain is blocking this page — KD is 0, and a DR 56 blood bank with a zero-backlink URL outranks Pfizer, PMC and Healthline on it.** We are short on coverage, not authority. The three highest-leverage additions, in order: **(1)** be the only page on the SERP that reports the June 2022 retraction of the #5 result and grades the predatory-journal 2019 study everyone else cites; **(2)** add the Rh/"O+" and US blood-type-prevalence content that four of eight PAA questions demand, and land the base-rate insight nobody has made; **(3)** add a US layer alongside — never instead of — the Canadian one: picaridin as the US name for icaridin, EPA registration numbers, the full CDC repellent list, *Culex* and the *Aedes* daytime-biting correction, and CDC/EPA/state-extension voices to sit beside Health Canada, PHO and PHAC.
