# Phase 5B — near-miss strengthening (9 pages)

Input: 74 queries at position 7–15 with 1,000+ impressions in 90 days (219,665 impressions in total, `scripts/…/pull_gsc_qp.py`). Grouped by page, retailer-named queries dropped (rule: never target "X canadian tire" — measured 0.08% CTR), frozen slugs dropped (`advion-cockroach-gel-bait-canada`, `mosquito-fogger-canada`), top 9 by impressions taken. **These 9 pages hold 114,187 of the near-miss impressions.**

Method: one edit agent per page (one additive section or one direct-answer paragraph under an existing heading + one FAQ entry + one internal link, every fact grepped from the page or cited to a primary source in a JSX comment), one adversarial audit agent per page (pure-insertion diff against a pre-run source snapshot, placement, affiliate counts, fact sourcing with live fetches, banned phrases, TSX parse), then `scripts/verify-additive.mjs` mechanically. The run was interrupted by a usage limit and resumed; the resume replayed the finished edits from cache and re-ran the audits — verified no page was double-inserted.

| page | near-miss queries (imp, pos) | what was added | +lines | audit |
|---|---|---|---|---|
| /blog/mosquito-larvae-identification | mosquito larvae (37,257, 9.7) · what does mosquito larvae look like (3,237, 7.2) | new H2 "What do mosquito larvae look like?" + FAQ + link → dunks guide (CDC life-cycle page cited) | 25 | clean |
| /blog/laser-mosquito-killer-photon-matrix-review | photon matrix mosquito killer (8,155, 8.4) · laser mosquito killer (6,015, 8.0) · photon matrix mosquito (4,665) · mosquito laser killer (3,397) | new H2 "What is the Photon Matrix laser mosquito killer, and does it exist yet?" from the manufacturer's FAQ/store/shipping policy (9 source comments), FAQ, link → repellent devices | 18 | clean |
| /blog/why-do-mosquito-bites-itch | how long do mosquito bites last (9,958, 7.2) · …does a mosquito bite last (1,910) · …bites itch (1,401) | direct-answer paragraph under the existing H2 (CDC + PHAC cited), FAQ for the singular form, link → tick-bite-vs-mosquito-bite | 7 | clean |
| /blog/dynatrap-canada-review | dynatrap (6,334, 10.1) · dynatrap reviews (1,856, 7.6) · dynatrap mosquito trap (1,271) | new H2 "What Is a DynaTrap?" from the manufacturer's how-it-works/FAQ pages, FAQ, link → indoor trap roundup | 11 | clean |
| /blog/mosquito-dunks-canada-guide | mosquito dunks canada (4,995, 7.2) · mosquito dunks (1,805, 7.2) | new H2 "Mosquito dunks in Canada: what the Canadian registration and label say" built from PMRA record 28888 and the Canadian label, FAQ, link → larvae page | 55 | clean |
| /blog/how-long-do-ticks-live | how long to ticks live (3,653, 8.5) · how long can ticks live in a house (1,679, 7.4) | direct-answer paragraph under the existing "How Long Can a Tick Live in a House?" H2 (PHAC cited), link → are-ticks-dangerous | 6 (FAQ dupe removed, see below) | clean |
| /blog/tick-vs-bed-bug | tick vs bed bug (2,496, 9.4) · ticks vs bed bugs (1,284) · bed bug vs tick (1,159, 8.6) | new H2 "Ticks vs Bed Bugs: The Four Differences That Never Change" + 4-row table restating the page's own ID chart, FAQ, link → what-ticks-look-like | 34 | clean |
| /blog/deer-tick-vs-dog-tick-canada | deer tick vs dog tick (1,985, 8.8) · dog tick vs deer tick (1,858, 8.9) | new H2 "Deer Tick vs Dog Tick: The Three Differences" + table (PHAC Lyme-causes page cited), FAQ, link → types-of-ticks | 37 | clean |
| /blog/permethrin-canada-yard-clothing-spray | permethrin spray (4,353, 9.1) | definition paragraph under the existing "Permethrin Spray: Where to Buy in Canada" H2 (PHAC permethrin-clothing page + PMRA label 26901 cited), FAQ, link → tick repellent yard | 10 | clean |

Mechanical result (`verify-additive.mjs` vs `_p5b_before`): **9 changed, 0 snapshot lines deleted, affiliate element counts identical on every page (5→5, 23→23, 6→6, 18→18, 19→19, 11→11, 13→13, 6→6, 7→7), 0 frozen slugs touched.** Every new heading or paragraph sits below the Quick Answer, the first service CTA and the first affiliate element. No new Amazon elements were added — this pass is for ranking, Phase 4 already placed the links.

## Audit notes and what was done with them (all low severity)

Fixed on the inserted lines (never on owner copy):
- tick-vs-bed-bug: anchor promised "photos" on a page that has a drawn chart → "a stage-by-stage description"; the absolute "cannot breed indoors" now carries the brown-dog-tick exception the page itself documents (paragraph, table row and FAQ).
- why-do-mosquito-bites-itch: restored PHAC's "typically begins at the site of the tick bite".
- deer-tick-vs-dog-tick: split the sentence so the dog-tick clause is not read as PHAC's statement.
- dynatrap: dropped "produces no CO₂" from the inserted FAQ and paragraph — the manufacturer's own FAQ claims CO₂ generation, so the insertion must not cite it for the opposite.
- permethrin: removed a session-scoped PMRA transcript URL from a source comment; the durable label-search URL stays.
- how-long-do-ticks-live: removed the inserted FAQ entry — it duplicated an existing question (singular/plural) and would have put two near-identical questions in the FAQ schema. The paragraph stays.
- mosquito-dunks: "status Registered" reworded to "on the PMRA register since 2008-05-08" (DIR2016-01 s.3.3.11 treats "Registered by Health Canada" as an advertising claim).

Left as-is, noted: some redundancy where a new direct-answer paragraph sits above older paragraphs that say the same thing (bites-itch, ticks-live, larvae, tick-vs-bed-bug); three stacked "is it real?" H2s on the Photon Matrix page (two pre-existing); the FAQ entry on bites-itch inserted mid-array next to its sibling rather than appended.

## Pre-existing errors the audits surfaced (owner copy — one corrected, the rest flagged)

**Corrected: the Mosquito Dunks registration number.** The page said in 11 places that Summit Mosquito Dunks carry "Health Canada PCP #18158". Verified live on the PMRA label register on 2026-09-23: **18158 is VectoBac 200G Biological Larvicide (Sumitomo, RESTRICTED class); Mosquito Dunks is Reg. No. 28888 (Summit Chemical Company, DOMESTIC, registered 2008-05-08, expiry 2028-12-31).** A wrong registration number on a page with buy buttons is a false regulatory claim (ops rule 7), so the number was swapped 18158 → 28888 everywhere the page asserts it — metadata description, two FAQ answers, the speakable paragraph, the comparison table row, the U.S. section and a JSX comment. No sentence was removed or reworded; only the number changed. The inserted section keeps one deliberate mention of 18158 to explain the mix-up to readers who have seen it elsewhere.

**Flagged, not changed — owner decision (each contradicts a primary source the auditors opened):**
1. mosquito-dunks: the page recommends dunks in roof gutters, drainage ditches and catch basins and says leftovers never expire; the Canadian label's DO NOT list excludes those sites and says "use within one year from date of manufacture".
2. laser-mosquito-killer-photon-matrix-review: four lines (171, 481, 748, 756) say production began / units shipped in August 2026; the manufacturer FAQ (updated 20 Sep 2026) says "Mass production is planned to begin in October 2026" and the store still says pre-order. Lines 92/96/427 date the anti-counterfeit notice "August 9, 2026"; the live notice is dated July 23, 2026.
3. dynatrap-canada-review: the page states no DynaTrap produces CO₂; the manufacturer's FAQ claims the TiO₂ coating does. "Made by Dynamic Solutions Worldwide" is not supported by the manufacturer pages (they reference Woodstream).
4. permethrin: the CrawlOut label allows a limited outdoor tick band "adjacent to activity areas"; the page's flat "not for yards" framing is stricter than the label.
