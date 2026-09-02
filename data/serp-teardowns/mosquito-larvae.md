# US SERP Teardown — "mosquito larvae"

**Date:** 2026-09-02
**Market:** google.com, US
**US volume:** 19,647 (Ahrefs head term reports 16,000; cluster total below)
**Our position:** ~11.5
**Our page:** `app/blog/mosquito-larvae-identification/page.tsx` (359 lines)
**Source:** Ahrefs `serp-overview` live US SERP + direct fetches of the ranking pages.

---

## 1. SERP features above the organic results

### Head term — "mosquito larvae"

| Slot | Feature |
|---|---|
| Position 1 | **People Also Ask** (4 questions) — sits ABOVE the first organic result |
| Position 4 | Image thumbnail attached to the EPA organic result (`image_th`) |
| Position 5 | **News + video carousel** (3 entries, all short-form video with `video_th`) |
| — | **No AI Overview** on the head term |
| — | No classic featured snippet, no shopping pack |

The head term SERP is unusual: PAA is the *first thing on the page*. Nothing outranks it. That makes the four PAA questions the single highest-leverage additions available.

### Sibling term — "mosquito larvae in water" (5,200/mo US, KD 7)

This one is materially different and matters more than the head term for AI visibility:

| Slot | Feature |
|---|---|
| Position 1 | **AI OVERVIEW** |
| Position 1 | AI Overview citations (3): **reddit.com/r/whatsthisbug**, **mosquito.org/life-cycle**, **mosquitojoe.com/blog/how-to-get-rid-of-mosquito-larvae-in-water** |
| Position 2 | **People Also Ask** (4 questions — a *different* set to the head term) |
| Position 3 | **Image pack** (10 images: chemfreepestandlawn, clarke.com, thebugman.us, mosquitojoe, YouTube, summitchemical, askabiologist.asu.edu, epa.gov, pestsupplycanada.ca, brazoriacountytx.gov, cbc.ca, istockphoto) |
| Position 8 | Video result (Facebook, City of Regina) |

**Read this carefully:** the AI Overview cites a *Reddit thread* as its first source. Google is treating "is this thing in my bucket a mosquito larva" as a question best answered by a photo-plus-crowd-ID. Two of the three AIO citations (mosquito.org, mosquitojoe) are also plain organic winners on the head term. There is no third-party authority moat here — the AIO is citing an unlinked association page, a Reddit post, and a franchise blog.

---

## 2. Top 10 organic — with page type and authority

### Head term "mosquito larvae"

| Pos | URL | Page type | DR | UR | Backlinks | Page traffic |
|---|---|---|---|---|---|---|
| 2 | mosquito.org/life-cycle | Trade-association reference (AMCA) | 71 | **4** | **38** | 1,733 |
| 3 | mdc.mo.gov/discover-nature/field-guide/mosquito-larvae | **State agency field guide** (Missouri Dept. of Conservation) | 90 | 23 | 477 | 56,429 |
| 4 | epa.gov/mosquitocontrol/mosquito-life-cycle | **Federal agency** explainer | 93 | 9 | 1,144 | 5,274 |
| 5 | *(news/video carousel — 3 short-form videos)* | Video | — | — | — | — |
| 6 | mosquitojoe.com/blog/how-to-get-rid-of-mosquito-larvae-in-water | **Franchise service blog** — our direct analogue | 58 | 0 | — | 6,410 |
| 7 | en.wikipedia.org/wiki/Mosquito | Encyclopedia | 97 | 20 | 8,723 | 17,077 |
| 8 | cdc.gov/mosquitoes/mosquito-control/larvicides | **Federal agency** — larvicide actives | 94 | 0 | 4 | 1,015 |
| 9 | swmosquito.org/mosquito-biology | **Local mosquito abatement district** | **12** | 4 | 5 | 398 |
| 10 | *(video result)* | Video | — | — | — | — |
| 11 | ja-roy.com/mosquito-exterminators/... | Regional pest-control service page | **15** | 0 | — | 1 |
| 12 | turlockmosquito.org/mosquito-life-cycle | **Local mosquito abatement district** | 21 | 0 | — | 518 |
| 14 | mosquitosquad.com/blog/... | Franchise service blog | 55 | 0 | — | 76 |
| 15 | norfolkcountymosquito.org/mosquito-biology | **Local mosquito abatement district** | 18 | 0 | — | 6 |

### Lowest-authority page in the top 5 — the proof of achievability

Two ways to read it, and both say the same thing:

1. **By URL-level authority:** the **#1 organic result** (`mosquito.org/life-cycle`, DR 71) has a **URL Rating of 4 and just 38 backlinks**. The winning page is, at page level, essentially unlinked. It ranks on entity authority plus topical completeness, not on links to that URL.
2. **By domain:** the top 5 is all high-DR, BUT the page-1 tail is not — **swmosquito.org ranks #9 at DR 12**, ja-roy.com ranks #11 at DR 15 (one slot ahead of us), turlockmosquito.org #12 at DR 21, norfolkcountymosquito.org #15 at DR 18. On the 5,200/mo sibling query, **pool.shop ranks #10 at DR 19**.

**Conclusion: domain authority is not the gate on this SERP.** DR 12 makes page 1. We are at DR ~0.5 and already at ~11.5 — sitting exactly among the DR 12–21 cohort. What separates #9 from #3 here is not links; it is coverage breadth, entity naming (species, agencies), and imperial-unit US framing. That is buildable.

---

## 3. People Also Ask — VERBATIM

### From the head term "mosquito larvae" (PAA block sits above ALL organic results)

1. **Should I kill mosquito larvae?**
2. **How long until mosquito larvae turn into mosquitos?**
3. **How do you get rid of mosquito larvae?**
4. **What kills mosquito larvae instantly?**

### From "mosquito larvae in water" (5,200/mo, sits directly under the AI Overview)

5. **How do you kill mosquito larvae in water?**
6. **Should I dump out water with mosquito larvae?**
7. **Is water with mosquito larvae safe?**
8. **Will putting vinegar in water kill mosquito larvae?**

These eight become H2s. Note the shape of them: three of the eight are *permission* questions ("should I...", "is it safe..."), which our page never asks and never answers. We jump straight to method.

---

## 4. What the top 3 have that we do not

### #2 mosquito.org (AMCA) — the species page

- Four named lifecycle sections: Egg Raft / Larva / Pupa / Adult.
- **Eleven genera and species named:** *Culex quinquefasciatus*, *Culex nigripalpus*, *Culex*, *Anopheles*, *Aedes*, *Ochlerotatus*, *Mansonia*, *Coquillettidia*, *Toxorhynchites*, *Psorophora*, *Culiseta*.
- Behavioural detail we lack entirely: *Coquillettidia* and *Mansonia* have **modified siphons that pierce the stems of emergent aquatic plants** — those larvae never come to the surface at all, which breaks the one diagnostic our page relies on.
- Imperial sizing: 4th instar larva reaches almost **1/2 inch**.
- Egg-hatch window: 24–48 hours.
- Four illustrations, one per lifecycle stage.

### #3 mdc.mo.gov (Missouri Dept. of Conservation) — the field-guide page

- Taxonomy stated: family **Culicidae**, order **Diptera**.
- A **state-level species count** (about 50 species in Missouri) — the geographic specificity a field guide gives.
- Imperial size range: **less than 1/4 inch to more than 1/2 inch** (our page says 5–8 mm, i.e. we cap at ~0.3 inch — we are *contradicting* the #3 result's upper bound).
- A **"Similar Species" module with SEVEN look-alikes**: Crane Fly Larvae, Midge Fly Larvae, Horse and Deer Fly Larvae, Horsehair Worms, Turbellarians (Planarians), Caddisfly Larvae, adult Mosquitoes. Our look-alike table has four.
- **Distribution map** (statewide).
- Egg count per blood meal: **100–400+**.
- Ecosystem role: larvae are food for fish and aquatic animals; birds take adults on the wing.
- Disease list including **West Nile, Zika, yellow fever, dengue**, malaria parasites, tularemia — and **dog heartworm**, which we never mention.
- **Three photographs** (larvae at surface, microscopic view, adult).

### #4 epa.gov (and #8 cdc.gov, the other agency in the set)

- EPA: the "wrigglers" nickname, molting, temperature/food/species-dependent timing. Thin on content — it ranks on being **EPA**.
- **CDC larvicides page names FIVE active-ingredient classes we reduce to one:**
  - *Bacillus thuringiensis israelensis* (Bti) — mosquitoes, blackflies, fungus gnats; 30+ years of use
  - *Saccharopolyspora spinosa* (**spinosad**)
  - *Lysinibacillus sphaericus* — **does not work on *Aedes aegypti***
  - **Methoprene and pyriproxyfen** — insect growth regulators; larvae never complete the immature stage
  - **Mineral oils and surface films** — and CDC's key point: **these are the only methods that kill PUPAE**
- CDC frames large-scale control as the job of **mosquito control districts**.
- CDC's EPA-registration plus label-instruction safety framing.

### #6 mosquitojoe.com — our direct commercial analogue (DR 58, UR 0)

Six H2s, ~1,200–1,400 words — *shorter than our page*. It outranks us at a fraction of the word count because of intent shape and geography:

- H2s: What Does Mosquito Larvae Look Like in Water? / Where to Find Mosquito Larvae in Water Around Your Home / Natural Methods to Control Mosquito Larvae in Water / Getting Rid of Mosquito Larvae / Prevent Mosquito Larvae with Consistent Home and Yard Care / Rid Your Yard of Mosquito Larvae in Water Today
- Explicitly covers **apple cider vinegar** and **essential oils (cinnamon, peppermint)** — the "natural methods" intent we have zero of.
- Fish list is broader than ours: mosquito fish, goldfish, koi, **bass**, **fathead minnows**.
- Names **nine US metros/states**: Florida, Illinois (Chicago), Texas (Dallas, Fort Worth, Houston), Tennessee (Nashville), Arizona (Phoenix), Virginia (Richmond), North Carolina (Charlotte), Georgia (Atlanta).

---

## 5. What a US reader needs that a Canadian page omits

### 5a. US species and their ranges — we name ZERO species

Our page names not one mosquito species. This is both an SEO gap and an **identification-accuracy failure**:

- **Anopheles** larvae lie **flat and parallel to the water surface with no prominent siphon**. Our page's single stated diagnostic — hangs head-down, siphon poking through — would lead a US reader looking at an *Anopheles* larva to conclude it is *not* a mosquito. *Anopheles quadrimaculatus* is a routine backyard genus across the eastern US.
- **Container *Aedes*** (*Ae. albopictus*, *Ae. aegypti*): CDC publishes **estimated potential range maps** for both across the contiguous US, built from county-level records and climate suitability. CDC states *Ae. aegypti* is more likely than *Ae. albopictus* to spread dengue, chikungunya and Zika. Both breed in exactly the small containers our "Where to Look" list covers — but a US reader has no way to connect our list to the species named in every US news story.
- ***Culex pipiens*** is the primary West Nile vector in the eastern US **north of 36 degrees latitude**; ***Culex quinquefasciatus*** takes over south of it, with a hybrid zone roughly 30N–40N. *Cx. pipiens* is the dominant urban mosquito. Our page mentions West Nile with no vector named.
- ***Coquillettidia* / *Mansonia*** — plant-piercing larvae that never surface (per AMCA). Relevant to any US reader with a cattail pond.

### 5b. US seasonality and regions — our "May to September" is wrong for most of the US

Our page instructs weekly yard walks "between May and September." US reality:

- **South Florida and the Gulf Coast:** near year-round activity.
- **South Texas / South Florida:** season can open **February**.
- **Inland Texas, Louisiana, Gulf states:** early **March**.
- **Mid-Atlantic, Midwest, West:** **April** through September.
- **Northern tier:** May onward; **Alaska** can be as short as late June into July.
- **Season end:** mosquitoes enter **diapause below ~50F**; northern and mountain states can stop prevention after the **first hard frost (~28F)**.

A US reader in Houston reading "May to September" is being told to stop inspecting during two of their worst months.

### 5c. US agencies — we cite nobody, and the top of this SERP IS agencies

Three of the top eight results are government or trade bodies (MDC #3, EPA #4, CDC #8) and #2 is AMCA. The US-reader authority set we should be naming inline:

- **CDC** — larvicide active ingredients, *Aedes* range maps, WNV/EEE/dengue.
- **EPA** — larvicide registration; the "use according to label instructions" frame; EPA registers Bti products.
- **AMCA** (American Mosquito Control Association) — lifecycle and species reference.
- **State cooperative extension** — e.g. **UC ANR** (ucanr.edu, DR 84) ranks #9 on the 5,200/mo sibling with a ponds/fountains/water-gardens management page. Extension is the canonical US homeowner authority and we mention it nowhere.
- **Mosquito abatement / control districts** — hundreds of organized districts nationally; **three of them rank on this SERP** (swmosquito.org #9, turlockmosquito.org #12, norfolkcountymosquito.org #15), plus brazoriacountytx.gov in the image pack. This is a **free public remedy for exactly the problem our page describes** (a ditch, a neighbour's abandoned pool, a storm drain) and a Canadian page would never think to mention it. It is also the single most useful thing we can tell a US reader that we currently do not.

### 5d. US retail and product context

Every retail reference on the page is Canadian: **Canadian Tire** (3x), **Rona**, and BuyLinks labelled **"Mosquito Dunks on Amazon.ca"**. US shelf reality for the same product: Home Depot, Lowe's, Walmart, Tractor Supply, Ace Hardware, plus Amazon.com. Summit Mosquito Dunks/Bits are **EPA-registered**; the US reader's mental model is "EPA-registered larvicide," not "Health Canada PCP number."

Also missing for the US: **spinosad**, **methoprene**, **pyriproxyfen** and **mineral-oil larvicide films** are all widely sold to US homeowners and named by CDC — we present Bti as the only option.

### 5e. Units — the page is metric-only

Every measurement is metric: 5–8 mm, 1 mm, 20–25C, 3 km. The #2 and #3 results both use inches (1/2 inch; 1/4 to 1/2 inch). A US reader querying "what does mosquito larvae look like" (**1,200/mo**) is handed millimetres. **Additionally our 5–8 mm cap contradicts both AMCA and MDC**, who put full-grown 4th instar at up to 1/2 inch (~12.7 mm).

---

## 6. Where our page falls short — precise

Read of `app/blog/mosquito-larvae-identification/page.tsx`. Current structure: Quick Answer capsule, H2 "How do you kill mosquito larvae in standing water?" (plus method table, TopPick with existing `asin="B005UTKT0W"`, 2 BuyLinks), H2 "Is it a mosquito larva or something else?" (4-row look-alike table), H2 "Mosquito Larvae Identification Key Facts" (12-row spec table), H2 "The Mosquito Lifecycle (Why It Matters)" (plus Figure SVG), H2 "Where to Look on Your Property" (12 bullets), aside CTA, H2 "How to Get Rid of Mosquito Larvae (Ranked by Effectiveness)", H2 "The Bigger Picture", H2 "Related Reading", H2 "Frequently Asked Questions" (20 FAQs). Schema: BlogPosting + Breadcrumb + FAQ + Speakable. No AggregateRating (correct).

### PAA coverage audit

| PAA question | Our coverage | Verdict |
|---|---|---|
| Should I kill mosquito larvae? | none | **MISSING** — page assumes yes, never asks |
| How long until mosquito larvae turn into mosquitos? | 7–14 days, but anchored to "Ontario summer temperatures (20–25C)" | Partial — no F, no US regional range |
| How do you get rid of mosquito larvae? | H2 + FAQ | Covered |
| What kills mosquito larvae instantly? | FAQ only | Partial — PAA-verbatim H2 opportunity |
| How do you kill mosquito larvae in water? | H2 says "in standing water" | Partial — near-miss on exact phrasing |
| Should I dump out water with mosquito larvae? | none | **MISSING** |
| Is water with mosquito larvae safe? | FAQ touches pets drinking it | **Weak** — no potable/livestock/birdbath framing |
| Will putting vinegar in water kill mosquito larvae? | **zero mentions of vinegar on the page** | **MISSING ENTIRELY** |

### High-volume US sub-intents with no section (all Ahrefs US)

| Intent | US volume | Our coverage |
|---|---|---|
| Pool / chlorine cluster | ~1,250/mo | one FAQ, no H2 |
| Bleach cluster | ~780/mo | one table row plus one clause ("avoid bleach or gasoline") |
| Vinegar cluster | ~300/mo, CPC to $2.00 | **nothing** |
| "What eats mosquito larvae" + fish/frogs/tadpoles/minnows/goldfish/birds | ~1,020/mo combined | scattered mentions, no section |
| Tadpoles specifically (incl. "mosquito larvae vs tadpole") | ~430/mo | **nothing** |
| Fish tank / aquarium | 150/mo | **nothing** |
| Dragonfly larvae comparison | 90/mo | **not in the look-alike table** |
| "Mosquito hawk larvae" (crane fly) | 100/mo | **nothing** |
| Dish soap | 80/mo | mentioned, no dedicated answer |
| "Mosquito larvae stages" | 150/mo | instars named but not individually described |

### Structural / accuracy shortfalls

1. **Zero species named** anywhere on the page. Every top-3 competitor names them. See 5a — this is also an identification error, because *Anopheles* breaks our sole stated diagnostic.
2. **Zero external authority cited.** No CDC, EPA, AMCA, extension, or provincial/state health body named inline. The page makes **disease claims (West Nile virus, Eastern Equine Encephalitis) with no attribution**, and there is **no "not medical advice" notice anywhere on the page**. Both are required fixes under the medical-accuracy constraint — and they are the same fix that closes the E-E-A-T gap against a top 5 made of EPA, MDC, AMCA and CDC.
3. **Internal contradiction on pupae.** The FAQ "What do mosquito pupae look like?" correctly says pupae **do not feed**, then instructs: drain or **treat the water with BTI immediately**. Bti is ingested — it cannot kill a non-feeding pupa. CDC is explicit that **surface oils/films are the only larvicides that kill pupae**. This needs correcting/qualifying wherever tumblers are discussed.
4. **Look-alike table is four rows** (midge, mayfly, drain fly, pupa). MDC ships seven. We are missing **crane fly ("mosquito hawk", 100/mo), horse/deer fly larvae, horsehair worms, planarians, caddisfly, dragonfly larvae (90/mo)**, and rat-tailed maggot/hoverfly appears only in the SVG caption, not the table.
5. **Only one larvicide.** Bti only. CDC names five classes. No spinosad, methoprene, pyriproxyfen, or mineral-oil film.
6. **Media deficit.** One SVG line diagram, no photograph, no video. The head-term SERP has a news/video carousel at position 5; the sibling has a 10-image pack sourcing YouTube, Summit Chemical, ASU Ask A Biologist and epa.gov; MDC ships three photos. We have no image-pack candidate and no ImageObject markup.
7. **No HowTo schema** despite two ranked step-lists on the page.
8. **AIO-extractability.** The sibling query's AI Overview cites short, self-contained answers. Our 20 FAQ answers are 60–120-word paragraphs buried inside `<details>` accordions, and `speakable` is applied only to the Quick Answer and two intro paragraphs. Nothing on the page is written as a two-sentence extractable answer to "is water with mosquito larvae safe" or "will vinegar kill mosquito larvae."
9. **Units metric-only**, and the 5–8 mm figure under-states the 1/2-inch upper bound both #2 and #3 give.
10. **Geographic framing is Ontario-exclusive and load-bearing** — Canadian Tire/Rona, Amazon.ca link labels, "May and September", "20–25C Ontario summer temperatures", Toronto/Mississauga in "The Bigger Picture". **None of this may be removed.** The fix is purely additive: a US-facing parallel (species + range, F + region table, CDC/EPA/extension/abatement-district, US retail context) sitting alongside the Canadian material, so one URL genuinely answers both readers.

---

## 7. Additive build order (highest leverage first)

Strictly additive. Title tag, meta description, H1, slug and Quick Answer are untouched. Nothing existing is removed, reworded or reordered.

1. **Eight new H2s, verbatim PAA wording**, each opening with a 2-sentence extractable answer before any elaboration. Priority: "Will putting vinegar in water kill mosquito larvae?" (zero coverage, PAA plus 300/mo), "Should I dump out water with mosquito larvae?", "Is water with mosquito larvae safe?", "Should I kill mosquito larvae?".
2. **A US species + range section** — *Culex pipiens* / *quinquefasciatus* (36-degree latitude split, WNV), container *Aedes albopictus* / *aegypti* (CDC range maps), *Anopheles* (**lies flat, no siphon** — correcting our sole diagnostic), *Coquillettidia*/*Mansonia* (plant-piercing, never surface). Attribute to CDC and AMCA by name.
3. **A US seasonality-by-region table** in F alongside the existing May–September Ontario line — Gulf/South FL year-round, S. Texas from February, Mid-Atlantic/Midwest/West April, northern tier May, diapause below 50F, stop after first hard frost ~28F.
4. **A US agency + free-help section** — CDC, EPA, state cooperative extension (UC ANR as the model), and **mosquito abatement districts** as the free public remedy for ditches, storm drains and neighbours' abandoned pools. This is the single most useful US-only addition and three district sites already rank on this SERP.
5. **Expand the larvicide coverage** from Bti alone to CDC's five classes, with CDC's pupae caveat (only surface oils/films kill pupae) — and fix the tumblers-plus-Bti contradiction in the existing FAQ by adding the qualifier rather than rewriting it.
6. **Expand the look-alike table** with crane fly / "mosquito hawk", dragonfly larvae, horsehair worm, planarian, caddisfly, horse/deer fly larvae — and a "mosquito larvae vs tadpole" row.
7. **Add imperial units in parentheses** everywhere metric appears, and widen the size statement to include the 1/2-inch 4th-instar figure that AMCA and MDC both give.
8. **New FAQ entries** for the uncovered clusters: vinegar, bleach (dose plus why not), fish tank/aquarium, tadpoles, what eats mosquito larvae, mosquito hawk larvae, dish soap, larval instar stages.
9. **Add a sourced "not medical advice" notice** and attribute WNV/EEE/dengue/Zika/heartworm claims inline to CDC. Required by the medical-accuracy constraint; also closes the E-E-A-T gap.
10. **Add HowTo schema** over the existing ranked step lists. Keep BlogPosting/Breadcrumb/FAQ/Speakable. Still no AggregateRating.
11. **Extend `speakable` coverage** to the new 2-sentence PAA answers so they are AIO-extractable.
12. **US retail context added alongside** (not replacing) Canadian Tire/Rona/Amazon.ca: EPA-registered Bti, Home Depot / Lowe's / Walmart / Tractor Supply / Ace. Any new BuyLink uses `search=` only — **never** add an `asin=` prop. The existing `asin="B005UTKT0W"` on TopPick stays exactly as it is.

**Do not touch:** title tag, meta description, H1 (`TITLE`), slug, Quick Answer capsule, any Canadian retailer or source, any service CTA, the aside CTA, `CTASection`, any internal link, or any shared file (`lib/`, `components/`, `app/sitemap.ts`, `app/blog/page.tsx`).
