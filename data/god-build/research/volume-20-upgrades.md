# Volume-20: live-page upgrades (planner, Oct 23, 2026)

Two of the 20 volume-20 pages are **live guides re-aimed at a bigger search**, so they get no plan entry: a writer edits the live JSON. Section 3 lists three one-field trims on other live guides that the new pages need, and section 4 the link repoints that wait for the freeze to end.

Evidence: `data/god-build/research/volume-20-2026-10-23.md` (Ahrefs US pulled Oct 23; Search Console, 28 days Sep 23 to Oct 20). The method is `data/god-build/RETROFIT_BRIEF.md`, "Guides" section.

**Rules for both re-aims:**
- These are first-batch (Oct 7) guides. **Keep `datePublished: "2026-10-07"`**: the validator requires it for non-scheduled pages. Add `"dateModified": "<the day it lands>"` after it, and run `node scripts/retrofit-date.mjs /blog/<slug> <that day>` (a real content change).
- **Keep every existing internal link.** The validator checks their ring links and pillar link (listed under each page). Keep every existing fact and FAQ, and the slug and URL.
- First-batch guides may cite up to 10 sources (raised Oct 23, f6ba31bf). Both have 6 now.
- FAQs: append up to 8-10 in total, never more than 10. Do not touch the existing ones.
- Then run `node scripts/validate-guide.mjs content/guides/<slug>.json` and fix every error, and `node scripts/us-pages-mark-checked.mjs amend <slug> "<what changed and its sources>"`. An independent checker then reads the changes.
- US spelling. Facts only from the page's sources or new ones you cite. No product names beyond the existing pick. No quote prompt.

---

## 1. `/blog/water-bugs-vs-cockroaches`: re-aim at "water bug"

**Why:** research rank 3 of 20. "water bug" gets 60,000 searches a month (KD 5, traffic potential 19,000). Related searches: "water bugs" 29,000, "toe biter" 13,000 (KD 2, TP 5,400, parent topic "giant water bug") and "giant water bug" 8,600 (KD 6), for a cluster of 110,600. The results page (Ahrefs, US) has **Orkin's "how to tell cockroaches and waterbugs apart" at #2** (13.8K visits), which is this page's format. UMN's giant water bug page is #4, Wikipedia (Belostomatidae) #6, and Western Exterminator #7 with 0 referring domains. Score 34,649; model about 346 clicks a month (a ceiling).

**Search Console, 28 days:** 222 water-bug query impressions on the page, 0 clicks, at about 10.8 for its own searches. Queries:
- "do water bugs fly" 22 at 9.5 (all US)
- "water bugs vs cockroaches" 16 at 11.3
- "water bug vs cockroach" 13 at 22.3
- "water bugs" 13 at 16.1
- "explain the differences between water bugs and other common household pests" 12 at 10.1
- "house water bug vs cockroaches" 10 at 10.4
- "can water bugs fly" 6 at 7.7
- "difference between water bug and cockroach" 5 at 24.2

**Change:**
- `keyword`: `"water bug"`.
- `alsoTargets`: `["water bugs", "water bugs vs cockroaches", "water bug vs cockroach", "giant water bug", "toe biter", "water bug bite", "do water bugs fly", "what is a water bug"]`.
- `metaTitle` (48 or fewer characters; it starts with the searcher's words): **"Water Bug vs Cockroach: How to Tell Them Apart"** (46). Put the old title in your report.
- `metaDescription` (110-155 characters), leading with "water bug". For example: "A true water bug is a pond insect, the toe biter, with a painful bite. The water bug in a basement is usually a cockroach. How to tell them apart." Check the length.
- `h1`: keep it ("Water Bugs vs Cockroaches: How to Tell Which One You Found" already contains the words).
- `quickAnswer.lead`: open with the two meanings of "water bug", within 22-75 words.

**Add, in this order:**
1. **Quick-ID table** (`facts` with a `head`). Restructure the 7-row "at a glance" box into one row per suspect: giant water bug (toe biter), Oriental cockroach, American cockroach (palmetto bug), and a smokybrown cockroach or backswimmer only if a source covers it. Use 4-5 columns: size, color and shape, where found, flies to lights?, bites? **Every fact in the old rows must survive** (diff the old and new rows), and add a `caption` naming the sources.
2. **h2 "What is a toe biter?"** Cover the giant water bug's common names (only names a source uses), why it flies to porch lights and pools, and the bite at the sources' strength. Sources: UMN Extension (giant water bugs), UF/IFAS Featured Creatures, Missouri Department of Conservation (already cited in the table).
3. **h2 "Why does the male carry eggs on its back?"** Cover the Belostoma and Abedus males that carry the eggs, only as a source describes them.
4. **h2 "Why is there a water bug in my pool?"** Cover lights, how to remove one, and no pesticide advice for pools beyond the label rule.
5. **Photos:** at least 3 `figure` blocks, 2 showing the insect where people find it.
   - The first figure is the share image. It must be public domain or CC0, show a giant water bug, and sit within the first three body blocks.
   - **No giant water bug is on record:** ask the photo scout for a Lethocerus or Belostoma adult, a toe biter by a pool, porch light or driveway, and a male carrying eggs.
   - Cockroaches in hand: oriental-cockroach (CC0), oriental-cockroach-garage-floor (CC BY 4.0), oriental-cockroaches-manhole (CC BY 4.0), american-cockroach (CC0), smokybrown-cockroach (CC0).
6. **`confused` cards** before the "What should you do" h2: Oriental cockroach (/blog/oriental-cockroaches), American cockroach or palmetto bug (/blog/palmetto-bugs), German cockroach (/blog/german-cockroaches), and beetles that look like cockroaches (/blog/bugs-that-look-like-cockroaches).
7. **FAQs** to 8-10. Add "What is a water bug?", "Do water bugs bite?", "Are water bugs and palmetto bugs the same thing?", "Why do I have water bugs in my house?" and "What does a water bug look like?". The page has 5 now.

**Keep (validated):**
- Ring links: /blog/can-cockroaches-fly, /blog/do-cockroaches-bite, /blog/bugs-that-look-like-cockroaches.
- Pillar link: /learn/cockroaches.

**Do not take:**
- "big black cockroach" and "black cockroach": `/blog/oriental-cockroaches` (live Oct 21) owns them.
- The palmetto bug comparisons: `/blog/palmetto-bugs` owns them.

**No edits to:** `/blog/bugs-that-look-like-cockroaches` (an Oct 16 pilot, still under measurement).

**Link-ins:** 11 live guides already link this page. Candidates for more: `/blog/cockroach-eggs` (one mention, no link) and `/learn/bug-bites`, for the toe biter bite.

---

## 2. `/blog/do-ants-bite`: re-aim at "ant bites"

**Why:** research rank 9 of 20. "ant bites" gets 40,000 searches a month (KD 9, TP 12,000) and "ant bite" 24,000 (KD 10), for a cluster of 64,000. Score 13,825; model about 138 clicks a month (spring and summer; fire ants all year). The page answers "do ants bite?" but **gets no "ant bite" impressions at all**.

**Search Console, 28 days:** 350 ant-bite query impressions on the page, 0 clicks:
- "do ants bite or sting" 35 at 9.5
- "do ants bite" 33 at 8.5
- "do all ants bite" 15 at 9.5
- "do normal ants bite" 15 at 8.3
- "different ant bites" 14 at 9.0 (13 US)

**Change:**
- `keyword`: `"ant bites"`.
- `alsoTargets`: `["ant bite", "do ants bite", "what do ant bites look like", "ant bites on humans", "ant bite treatment", "red ant bite", "black ant bite", "do ants bite or sting"]`.
- `metaTitle`: **"Ant Bites: What They Look Like and What to Do"** (45).
- `metaDescription` leading with "ant bites", 110-155 characters.
- `h1`: keep it ("Do Ants Bite? Which US Ants Bite, Which Sting and What to Do" contains "ants" and "bite").
- `quickAnswer.lead`: open with what an ant bite looks and feels like, then bite vs sting, within 22-75 words.

**Fire ant searches stay with the planned `fire-ant-stings`** (2026-12-14): "fire ant bite", "fire ant sting", "fire ant bites pictures", "fire ant bite treatment". Keep the fire ant h3 as a summary, add no fire-ant alsoTargets, and link it once it is live.

**Add:**
1. **Photos for "What does an ant bite or sting look like?"** (the h2 already exists).
   - In hand: fire-ant-sting-pustule (public domain); it can be the share image if it comes first, because it shows the main subject of the page's most searched reaction.
   - Needed: an ant bite from a non-stinging ant (a small red mark), a harvester ant, a carpenter ant biting, and ants on skin. Ask the photo scout.
   - The formula wants at least 3 figures, 2 where people find them. Cards in hand: red-imported-fire-ant (CC0), european-fire-ant-worker (CC0), carpenter-ant-winged-queen (CC0).
2. **h2 "Ant bite or another bug bite?"** A body `table` (keep the two-column `facts` box: a page about one thing may keep it). Rows: fire ant sting, harvester ant sting, carpenter ant bite, other household ant bite, mosquito bite, flea bite, bed bug bite. Columns: what it looks like, how it feels, how long it lasts. Only facts the page's sources or new cited sources give: CDC, MedlinePlus, AAD, Mayo Clinic or Cleveland Clinic.
3. **`confused` cards:** fire ant sting (fire-ant-stings, no link until live), flea bites (flea-bites, from 2026-10-31), bed bug bites (what-do-bed-bug-bites-look-like, from 2026-10-24), spider bite (/blog/what-does-a-spider-bite-look-like: link only, no edit; frozen to Oct 30), chigger bites (/blog/chigger-bites). Cards for planned pages show without a link until the page is live.
4. **FAQs** to 8-10. Add "What do ant bites look like?", "How do you treat an ant bite?", "How long do ant bites last?" (MedlinePlus's fire ant times are already on the page) and "Why do ant bites itch?". The page has 6 now. Keep all medical lines at the sources' strength, with no medicine doses.

**Keep (validated):**
- Ring links: /blog/how-to-get-rid-of-ants-in-the-house, /blog/how-to-get-rid-of-ants-in-the-kitchen, /blog/do-carpenter-ants-bite.
- Pillar link: /learn/ants.

**Do not take:**
- "do carpenter ants bite" and "carpenter ant bite": `/blog/do-carpenter-ants-bite` owns them (36 and 35 impressions).
- The bullet ant sting searches: `/blog/bullet-ants` owns them.
- "velvet ant sting": velvet ants are wasps, and the planned `velvet-ants` page owns it.

**Link-ins:** 14 live guides already link this page.

---

## 3. One-field trims on three live guides (the `alsoTargets` field only)

These go with the new plan entries, and their taxonomy entries were already trimmed on Oct 23. They are side-target edits, not content changes: **do not move any date**. For each one, edit the field, run `node scripts/validate-guide.mjs content/guides/<slug>.json`, then `node scripts/us-pages-mark-checked.mjs amend <slug> "alsoTargets: <change> (volume-20, Oct 23)"`.

| Live guide | Remove from `alsoTargets` | Now owned by | Keep |
|---|---|---|---|
| `content/guides/kissing-bug-look-alikes.json` | "assassin bug" | `/blog/wheel-bugs`, re-aimed at "assassin bug" (2026-10-24) | "assassin bug vs kissing bug", "wheel bug vs kissing bug", "kissing bug vs assassin bug" and the rest; its two links to /blog/wheel-bugs |
| `content/guides/pantry-pests.json` | "weevils in rice" | `/blog/weevils` (2026-10-24) | "bugs in flour", "bugs in rice", "drugstore beetle", "pantry moths"; add one link to /blog/weevils from its weevil section (that is the new page's link-in) |
| `content/guides/how-to-get-rid-of-carpet-beetles.json` | "carpet beetle larvae" | `/blog/carpet-beetle-larvae` (2026-10-24) | "carpet beetles", "carpet beetles in house", "how to get rid of carpet beetles in bed"; one link to /blog/carpet-beetle-larvae from the identification section is a link-in candidate |

---

## 4. Link repoints that wait for the freeze to end (link-in step)

US guides link the Canadian editions today. Repoint them to the US editions, but only after the reads, so the frozen pages' measurement is not disturbed. Validate and amend each guide you edit.

| After | Change | Guides |
|---|---|---|
| Oct 31 (`flea-bites` live) | /blog/flea-bites-on-humans to /blog/flea-bites | 12: bed-bug-bites-but-no-bed-bugs, bed-bug-poop, bug-bites, bugs-that-look-like-bed-bugs, bugs-that-look-like-fleas, flea-dirt, flea-eggs, how-to-get-rid-of-carpet-beetles, how-to-get-rid-of-fleas, springtails, tiny-brown-bugs, what-do-fleas-look-like |
| Oct 31 (`fruit-flies` live) | /blog/how-to-get-rid-of-fruit-flies to /blog/fruit-flies | 6: flies-in-house, houseplant-bugs, how-to-get-rid-of-gnats, moths-in-house, pantry-pests, tiny-black-bugs |
| Oct 31 (`how-to-get-rid-of-drain-flies` live) | /blog/how-to-get-rid-of-drain-flies-canada to /blog/how-to-get-rid-of-drain-flies | 1: how-to-get-rid-of-gnats |
| Nov 10 (the Nov 3-10 read of the Oct 20 retrofits) | /blog/bed-bug-bites to /blog/what-do-bed-bug-bites-look-like | 14: bed-bug-bites-but-no-bed-bugs, bed-bug-poop, bed-bugs-in-hotels, brown-recluse-bite, bug-bites, bugs-that-look-like-bed-bugs, does-lysol-kill-bed-bugs, how-to-get-rid-of-bed-bugs, kissing-bug-look-alikes, pillar-bed-bugs, signs-of-bed-bugs-checklist, tiny-brown-bugs, what-do-bed-bugs-look-like, where-do-bed-bugs-hide |

**Bed bug bites on Oct 24:** add one or two new links without removing any (bed-bug-bites-but-no-bed-bugs, /learn/bug-bites), so the new page has its inbound link.

**Canadian pages** keep linking the Canadian editions.
