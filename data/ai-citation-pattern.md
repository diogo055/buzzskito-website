# What actually earns an AI citation on this site

Measured 2026-09-03 by testing **18 real queries** and observing which produced a verbatim
lift from our pages. The discriminator held **18/18**. This is the most useful analytical
finding of the programme so far, and it contradicts what the brief assumed.

---

## The gate is the ANSWER FIELD, not our page

| Cited (9) | Not cited (9) |
|---|---|
| bugs that look like ticks | deer tick vs dog tick |
| tick bite vs mosquito bite | how long do ticks live |
| do cedar trees attract mosquitoes | how long can ticks live without a host |
| what temperature kills mosquitoes | how long do mosquito bites last |
| deer fly vs horse fly **Ontario** | why do mosquito bites itch |
| what does mosquito larvae look like | can ticks jump or fly |
| spider beetle vs tick | how many times can a mosquito bite you |
| tick vs bed bug | mosquito bits vs mosquito dunks |
| worst areas for ticks in Ontario *(two pages at once)* | deer fly vs horse fly *(unqualified)* |

**Every cited query had a field of peer commercial blogs** — Terminix, MosquitoSquad,
MosquitoJoe, Angi, LawnSavers, GardenGuides.

**Every non-cited query had an institution already owning the canonical answer** — CDC,
Cleveland Clinic, NCBI, Britannica, Healthline, PetMD, a state health department, a
land-grant extension service, or the manufacturer itself (Summit Chemical owns Bits vs Dunks).

## Two hypotheses died in the testing

**Structure is not the differentiator.** Quick Answer capsules, speakable classes, faqSchema,
FAQ counts and comparison tables were counted across cited and non-cited pages. **Identical.**
Every page already carries the full kit. More schema will not move a non-cited page.

**Position is not the gate.** "deer fly vs horse fly" at US position **2.1** was NOT cited,
while "tick bite vs mosquito bite" at **6.7** and "tick vs bed bug" at **#6** were.

## The cleanest experiment on the site

`/blog/deer-flies-horse-flies-ontario` was **not** cited for *"deer fly vs horse fly"* but
**was** cited for *"deer fly vs horse fly Ontario"* — same page, same capsule, same day, with
a word-for-word lift.

**The Canadian qualifier is a retrieval filter.** It wins geo-tagged queries and loses the
much larger unqualified version of the same question. Scale of that trade, measured across
64,152 query rows: unqualified answerable-shape queries carry **193,215 impressions at 0.46%
CTR**; geo-qualified ones carry **7,683 at 1.04%**. Twenty-five times the volume at 0.44× the
click rate.

---

## The extractable unit: the atomic contrast sentence

Every one of the nine observed lifts had the same shape — **one self-contained sentence
carrying both sides of a comparison plus the discriminating number or rule, depending on no
neighbouring sentence.**

> "The fastest way to tell any of them from a real tick is to count the legs: ticks are
> arachnids with 8 legs and no antennae, while every common look-alike is an insect with 6
> legs and visible antennae."

> "Deer flies are small (about 1 cm) with dark-banded wings and patterned eyes; horse flies
> are much larger (2–3 cm) with clearer wings and solid dark eyes."

Four properties recur in all nine:
1. A **superlative frame** marking the sentence as the answer — "the fastest way", "the
   single most reliable way", "the classic offender".
2. **Both entities named inside one sentence**, never split across two.
3. The **discriminating number or rule inline**.
4. **No pronoun** depending on prior text.

## Three negative findings, each directly actionable

**1. No table content was ever extracted.** All nine cited pages carry comparison tables — 4
to 39 header cells each. **Not one table value appeared in any answer.** Everything lifted
came from capsule prose and bullets. *A fact that lives only in a table is invisible.*

**2. Metric-only numbers get passed over.** Our mosquito-larvae capsule says "5–8 mm". The US
answer used "1/4 inch" from Missouri Dept of Conservation instead — *despite our page being
in the retrieved set at #5.* But "1 cm vs 2–3 cm" from the deer-fly capsule **was** lifted,
because it sat inside a contrast sentence rather than standing alone.

**3. A geo token welded into a portable fact destroys its liftability.** This explains the
worst-performing page on the site. `/blog/deer-tick-vs-dog-tick-canada` has **8,721
impressions and 7 clicks — 0.08% CTR**, in a completely institution-free field, with an
excellent capsule. Its discriminating sentence ends *"…the only one of the two that transmits
Lyme disease in Canada."* The size-and-colour half is universally true, but it is welded to a
jurisdictional clause, so no engine answering an unqualified query can lift it.

---

## What this means for strategy

**Stop trying to win institution-owned fields.** "Why do mosquito bites itch" belongs to
Cleveland Clinic. "How long do ticks live" belongs to an extension service. No amount of
schema, structure or position moves us in, and effort spent there is wasted.

**Concentrate on institution-free fields**, where we already win: look-alike identification,
gear and product comparison, folk-belief correction ("do cedar trees attract mosquitoes"),
and geo-qualified questions.

**On ticksafety.com** — the DR 33 micro-site the brief holds up as the model — it appeared
beside us in both tick-lookalike fields and in *neither* medical field. It is running the
same play by the same mechanism, at 474 citations to our 1,624. **We are not behind it. We
already run its play, 3.4× harder.**

## Applied 2026-09-03 to six pages

`bugs-that-look-like-ticks`, `how-many-times-can-a-mosquito-bite-you`,
`why-do-mosquito-bites-itch`, `what-temperature-kills-mosquitoes`, `how-long-do-ticks-live`,
`red-ticks-and-clover-mites` — 407 insertions, **zero deletions**, and every affiliate
element count identical before and after.

**Honest caveat:** four of those six sit in institution-owned fields, so by this page's own
logic they are unlikely to win citations. The additions still improve them as pages — direct
answers above the fold, dual units, named attribution — but they should not be counted as
citation wins. **The next wave should target institution-free fields only.**

## One-word fix left for the owner

`red-ticks-and-clover-mites` gives the clover mite binomial as *"Bromobia praetiosa"* in two
places. The accepted name is **Bryobia praetiosa**. The agent deliberately avoided the
binomial in all new text so the error was not propagated, and left the existing instances
untouched because correcting them means rewriting existing content.
