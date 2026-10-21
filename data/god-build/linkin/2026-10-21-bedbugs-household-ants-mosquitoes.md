# Link-in round, 2026-10-21: bed bugs, household, ants, mosquitoes

Rules: `data/god-build/LINK_IN_BRIEF.md`. Each link is one plain sentence added as a new paragraph
right after the paragraph that discusses the target. No existing text was deleted, reworded or moved;
no dates, sitemap, components, lib or plan files were touched; nothing was built, staged or committed.

- **34 links on 27 source pages:** 14 links in 10 guide JSON files (each validated, then amended in
  `data/us-pages/checked/`), 20 links in 17 hand-written TSX pages.
- **A, today's new pages:** `/blog/bed-bug-bites-but-no-bed-bugs` 6 links, `/blog/signs-of-carpet-beetles` 6 links.
- **B, climbers:** what-do-bed-bugs-look-like 3, does-alcohol-kill-bed-bugs 2, how-to-get-rid-of-bed-bugs 2,
  tiny-black-bugs 3, bugs-that-look-like-fleas 2, how-many-ants-are-in-the-world 3, do-ants-bite 1,
  alaska-mosquitoes 3, are-mosquitoes-attracted-to-light 3.

How to read the table: **Sentence** is the exact text added. On TSX pages it is shown as the reader sees
it, with the `<Link>` written as a markdown link and HTML entities decoded (`&rsquo;` shown as ’).
**Where** is file:line of the new line in the working tree on 2026-10-21. **Source impr. 28d** is the
source page's Google impressions from 2026-09-23 to 2026-10-20 (coordinator's Search Console pull,
`gsc-climbers-2026-10-20.json`); 0 means none in that window (`/learn/bug-bites` went live Oct 16,
`/blog/bed-bug-poop` Oct 20).

## Links added

| # | Source | Target | Section | Sentence | Where | Source impr. 28d |
|---|---|---|---|---|---|---|
| 1 | /learn/bug-bites | /blog/bed-bug-bites-but-no-bed-bugs | What if you still cannot tell what bit you? | If the bites keep appearing in bed but a careful search finds no bed bugs, the guide to [bites with no sign of bed bugs](/blog/bed-bug-bites-but-no-bed-bugs) works through the other bugs and mites that bite at night, and the rashes that only look like bites, with photos. | `content/guides/bug-bites.json:150` | 0 |
| 2 | /blog/bugs-that-look-like-bed-bugs | /blog/bed-bug-bites-but-no-bed-bugs | Can you identify the bug from the bites? | When the bites continue and no bed bug turns up, [what else bites at night when there are no bed bugs](/blog/bed-bug-bites-but-no-bed-bugs) covers how to check the bed properly, the other biters to rule out and when to see a doctor. | `content/guides/bugs-that-look-like-bed-bugs.json:110` | 345 |
| 3 | /blog/bed-bug-poop | /blog/bed-bug-bites-but-no-bed-bugs | Bed bug poop but no bugs? | If the bites go on and no bed bug ever turns up, the guide to [bites when no bed bugs can be found](/blog/bed-bug-bites-but-no-bed-bugs) sorts the other suspects, from fleas and bird mites to rashes that are not bites at all, by the clues around the bites. | `content/guides/bed-bug-poop.json:105` | 0 |
| 4 | /blog/signs-of-bed-bugs-checklist | /blog/bed-bug-bites-but-no-bed-bugs | How many signs mean you have bed bugs? | If you have bites but no physical evidence, [what can cause bites when no bed bugs are found](/blog/bed-bug-bites-but-no-bed-bugs) covers the other night biters, the rashes mistaken for bites and how to get a culprit identified. | `content/guides/signs-of-bed-bugs-checklist.json:125` | 162 |
| 5 | /blog/bed-bug-bites | /blog/bed-bug-bites-but-no-bed-bugs | What else could have bitten you? | And if the bites keep coming but a careful search turns up no bed bugs at all, our guide to [bites with no bed bugs in sight](/blog/bed-bug-bites-but-no-bed-bugs) works through the other night-time biters, from fleas and mites to bat bugs, and the rashes that only look like bites. | `app/blog/bed-bug-bites/page.tsx:205` | 2521 |
| 6 | /blog/flea-bites-on-humans | /blog/bed-bug-bites-but-no-bed-bugs | What is biting me at night, if it’s not bed bugs? | For the same question set out with photos, see our guide to [night-time bites when no bed bugs turn up](/blog/bed-bug-bites-but-no-bed-bugs): how to check the bed properly, the other biters to rule out, and when the bites need a doctor. | `app/blog/flea-bites-on-humans/page.tsx:467` | 8911 |
| 7 | /blog/bugs-that-look-like-bed-bugs | /blog/signs-of-carpet-beetles | How do carpet beetles and their larvae differ from bed bugs? | If what you found is a shed skin, droppings or damaged fabric rather than a live insect, the guide to the [signs of a carpet beetle problem](/blog/signs-of-carpet-beetles) shows each one with photos and compares them with the stains and shed skins bed bugs leave. | `content/guides/bugs-that-look-like-bed-bugs.json:83` | 345 |
| 8 | /blog/signs-of-bed-bugs-checklist | /blog/signs-of-carpet-beetles | 4. Live bugs | If you suspect carpet beetles instead, [the signs carpet beetles leave](/blog/signs-of-carpet-beetles), from shed larval skins and droppings to damaged wool, are shown in photos, along with how each differs from bed bug evidence. | `content/guides/signs-of-bed-bugs-checklist.json:76` | 162 |
| 9 | /blog/tiny-black-bugs | /blog/signs-of-carpet-beetles | Carpet beetles and their larvae | Photos of what the larvae leave behind, from shed skins and droppings to grazed patches in wool, and where to look for each, are in the guide to [carpet beetle signs](/blog/signs-of-carpet-beetles). | `content/guides/tiny-black-bugs.json:113` | 1912 |
| 10 | /blog/bugs-that-look-like-fleas | /blog/signs-of-carpet-beetles | Could it be a carpet beetle larva? | To check a room for them, the guide on [where to look for carpet beetle signs](/blog/signs-of-carpet-beetles) shows the shed skins, droppings and fabric damage the larvae leave, with photos. | `content/guides/bugs-that-look-like-fleas.json:139` | 1038 |
| 11 | /blog/black-bed-bugs | /blog/signs-of-carpet-beetles | Which small black bugs are mistaken for bed bugs? | If carpet beetles are the likelier suspect, [the telltale signs of carpet beetles](/blog/signs-of-carpet-beetles), from bristly shed skins to damaged wool, are shown in photos alongside how they differ from bed bug signs. | `content/guides/black-bed-bugs.json:105` | 725 |
| 12 | /blog/bed-bug-shells-casings-shed-skins-canada | /blog/signs-of-carpet-beetles | The Carpet Beetle Problem — Why Half of These Finds Are the Wrong Insect | Photos of the other signs a carpet beetle problem leaves, from droppings to grazed patches in wool, and where to look for each, are in [what a carpet beetle infestation leaves behind](/blog/signs-of-carpet-beetles). | `app/blog/bed-bug-shells-casings-shed-skins-canada/page.tsx:424` | 1966 |
| 13 | /blog/tick-vs-bed-bug | /blog/what-do-bed-bugs-look-like | Why They Get Confused | For the bed bug side of the comparison, [what bed bugs look like from egg to adult](/blog/what-do-bed-bugs-look-like) sets out size, shape and colour stage by stage, and how a blood meal changes them. | `app/blog/tick-vs-bed-bug/page.tsx:238` | 4911 |
| 14 | /blog/bugs-that-look-like-bed-bugs-canada | /blog/what-do-bed-bugs-look-like | Start With the Bed Bug Itself: Five Features That Settle It | The size, shape and colour of a bed bug at each stage, from the egg through all five nymphs to the adult before and after a meal, are laid out in [what bed bugs look like at every life stage](/blog/what-do-bed-bugs-look-like). | `app/blog/bugs-that-look-like-bed-bugs-canada/page.tsx:395` | 2866 |
| 15 | /blog/bed-bug-stains-poop-droppings-canada | /blog/what-do-bed-bugs-look-like | The Other Evidence Sitting Next to the Stains | To match a shell, an egg or a live bug against each life stage, [what a bed bug looks like at each stage](/blog/what-do-bed-bugs-look-like) gives the size, shape and colour of the egg, every nymph stage and the adult before and after a meal. | `app/blog/bed-bug-stains-poop-droppings-canada/page.tsx:440` | 5536 |
| 16 | /blog/tick-vs-bed-bug | /blog/does-alcohol-kill-bed-bugs | What Instantly Kills Bed Bugs? | Whether rubbing alcohol is worth trying at all is answered in [our guide to rubbing alcohol and bed bugs](/blog/does-alcohol-kill-bed-bugs), which goes through the university studies on adults, nymphs and eggs and the fire risk around a bed. | `app/blog/tick-vs-bed-bug/page.tsx:375` | 4911 |
| 17 | /blog/baby-bed-bugs-nymphs | /blog/does-alcohol-kill-bed-bugs | What Not to Buy | For rubbing alcohol in particular, the university tests on adults, nymphs and eggs, and the fire risk around a bed, are covered in [whether rubbing alcohol kills bed bugs](/blog/does-alcohol-kill-bed-bugs). | `app/blog/baby-bed-bugs-nymphs/page.tsx:500` | 4300 |
| 18 | /blog/tick-vs-bed-bug | /blog/how-to-get-rid-of-bed-bugs | Buying the Right Product in the Right Country | Reading this in the United States? [Our US plan for getting rid of bed bugs](/blog/how-to-get-rid-of-bed-bugs) takes the EPA’s do-it-yourself steps in order, from confirming the bug to inspecting until the traps stay empty. | `app/blog/tick-vs-bed-bug/page.tsx:474` | 4911 |
| 19 | /blog/best-bed-bug-spray-for-mattress-canada | /blog/how-to-get-rid-of-bed-bugs | Where the Mattress Spray Fits in the Bigger Plan | Reading from the United States? [The US step-by-step plan for getting rid of bed bugs](/blog/how-to-get-rid-of-bed-bugs) follows the EPA’s do-it-yourself sequence, from confirming and containing the bugs to heat, steam, registered products and follow-up inspections. | `app/blog/best-bed-bug-spray-for-mattress-canada/page.tsx:626` | 4065 |
| 20 | /blog/black-bed-bugs | /blog/tiny-black-bugs | Why can a bed bug look black? | For a black bug that turns out not to be a bed bug, the guide to [tiny black bugs in the house](/blog/tiny-black-bugs) sorts the usual suspects by where you found it and whether it crawls, jumps or flies. | `content/guides/black-bed-bugs.json:67` | 725 |
| 21 | /blog/no-see-um-bites | /blog/tiny-black-bugs | No-see-ums in the house: getting them out and keeping them out | To work out which tiny dark insect you do have, [our guide to identifying tiny black bugs indoors](/blog/tiny-black-bugs) sorts the usual suspects by the room you found them in, with photos and sizes. | `app/blog/no-see-um-bites/page.tsx:405` | 13567 |
| 22 | /blog/how-to-get-rid-of-fruit-flies | /blog/tiny-black-bugs | Not Fruit Flies? Fungus Gnats Get a Different Fix | If the small dark flies match neither, [tiny black bugs, room by room](/blog/tiny-black-bugs) sorts the other suspects, such as drain flies and phorid flies, by where in the house you find them. | `app/blog/how-to-get-rid-of-fruit-flies/page.tsx:318` | 1630 |
| 23 | /blog/bugs-that-look-like-bed-bugs | /blog/bugs-that-look-like-fleas | Fleas | If you are not sure the bug is a flea at all, [the bugs most often mistaken for fleas](/blog/bugs-that-look-like-fleas) are compared one by one, from springtails and booklice to bird mites, with the clue that sets each apart from a real flea. | `content/guides/bugs-that-look-like-bed-bugs.json:101` | 345 |
| 24 | /blog/bugs-that-look-like-bed-bugs-canada | /blog/bugs-that-look-like-fleas | Cockroach Nymphs, Fleas, Ticks and Clover Mites | If you are not sure the insect you caught is a flea at all, [the insects people most often take for fleas](/blog/bugs-that-look-like-fleas) are compared one by one, from springtails and booklice to bird mites, with the clue that rules each one out. | `app/blog/bugs-that-look-like-bed-bugs-canada/page.tsx:454` | 2866 |
| 25 | /blog/carpenter-ants-canada | /blog/how-many-ants-are-in-the-world | When Do Carpenter Ants Swarm in the US? | For the bigger picture, [how many ants are alive on Earth](/blog/how-many-ants-are-in-the-world) explains how researchers estimated the global number at any one time and what that estimate leaves out. | `app/blog/carpenter-ants-canada/page.tsx:436` | 1612 |
| 26 | /blog/flying-ants | /blog/how-many-ants-are-in-the-world | Why do flying ants suddenly appear? | How many ants a single colony can hold, and how researchers estimated the number alive on Earth at one time, are covered in the guide to [how many ants there are in the world](/blog/how-many-ants-are-in-the-world). | `content/guides/flying-ants.json:53` | 548 |
| 27 | /blog/bullet-ants | /blog/how-many-ants-are-in-the-world | How does a bullet ant colony live? | For ants as a whole, [how many ants are in the world](/blog/how-many-ants-are-in-the-world) walks through the global estimate, how it was made and how many ant species have been named. | `content/guides/bullet-ants.json:88` | 437 |
| 28 | /blog/sugar-ants | /blog/do-ants-bite | Are sugar ants harmful? | Which ants bite, which sting and what a reaction looks like are set out species by species in the guide to [ant bites and stings](/blog/do-ants-bite), along with first aid and when to get medical care. | `content/guides/sugar-ants.json:100` | 374 |
| 29 | /blog/when-are-mosquitoes-most-active | /blog/alaska-mosquitoes | Alaska | Why Alaska breeds so many mosquitoes, how big they really get and how visitors protect themselves are covered in [our guide to Alaska mosquitoes](/blog/alaska-mosquitoes). | `app/blog/when-are-mosquitoes-most-active/page.tsx:405` | 50899 |
| 30 | /blog/what-temperature-kills-mosquitoes | /blog/alaska-mosquitoes | What temperature do mosquitoes stop coming out? | How that short Alaska season plays out by region, and why it brings so many mosquitoes, is covered in [the guide to mosquitoes in Alaska](/blog/alaska-mosquitoes). | `app/blog/what-temperature-kills-mosquitoes/page.tsx:527` | 58743 |
| 31 | /blog/why-do-mosquitoes-exist | /blog/alaska-mosquitoes | Do we actually need mosquitoes, and are they important? | For a closer look at the far north, [Alaska’s mosquito swarms](/blog/alaska-mosquitoes) have a guide of their own: why there are so many, and what they do to caribou and other wildlife. | `app/blog/why-do-mosquitoes-exist/page.tsx:188` | 1679 |
| 32 | /blog/what-colors-attract-mosquitoes | /blog/are-mosquitoes-attracted-to-light | Why Colour Is the Weakest Lever (and What Actually Works) | Whether light itself draws mosquitoes, and what lab and field studies found about lamps, bulb colours and bug zappers, is covered in [our guide to mosquitoes and light](/blog/are-mosquitoes-attracted-to-light). | `app/blog/what-colors-attract-mosquitoes/page.tsx:199` | 15831 |
| 33 | /blog/laser-mosquito-killer-photon-matrix-review | /blog/are-mosquitoes-attracted-to-light | Laser Bug Zapper vs. Traditional Bug Zapper: Not the Same Thing | The research behind that, from a lab study of how mosquitoes respond to light to university counts of what bug zappers actually catch, is set out in [whether mosquitoes are attracted to light](/blog/are-mosquitoes-attracted-to-light). | `app/blog/laser-mosquito-killer-photon-matrix-review/page.tsx:575` | 5995 |
| 34 | /blog/dynatrap-canada-review | /blog/are-mosquitoes-attracted-to-light | How the DynaTrap Mosquito Trap Works (and Why That Matters) | How mosquitoes actually find people, and what lab and field research says about light and bug zappers, is laid out in [how mosquitoes respond to light](/blog/are-mosquitoes-attracted-to-light). | `app/blog/dynatrap-canada-review/page.tsx:510` | 4240 |

## Per target: links added, linking pages, Google baseline

"Linking pages" = distinct pages whose own text links the target (hand-written pages and guide JSON,
including "commonly confused with" cards). The automatic Next / Related / Keep reading units are not
counted. Before = after minus this round (every link went to a page that did not link the target yet).
Google baseline = the 7 days 2026-10-14 to 2026-10-20 from the same Search Console pull.

| Target | Links added | Linking pages before → after | Impressions 7d | Avg position 7d | Clicks 7d |
|---|---|---|---|---|---|
| /blog/bed-bug-bites-but-no-bed-bugs | 6 | 2 → 8 | new, live 2026-10-21 | | |
| /blog/signs-of-carpet-beetles | 6 | 2 → 8 | new, live 2026-10-21 | | |
| /blog/what-do-bed-bugs-look-like | 3 | 28 → 31 | 2,755 | 10.3 | 8 |
| /blog/does-alcohol-kill-bed-bugs | 2 | 6 → 8 | 881 | 7.9 | 1 |
| /blog/how-to-get-rid-of-bed-bugs | 2 | 22 → 24 | 721 | 6.8 | 5 |
| /blog/tiny-black-bugs | 3 | 11 → 14 | 1,912 | 9.6 | 9 |
| /blog/bugs-that-look-like-fleas | 2 | 6 → 8 | 1,038 | 6.2 | 14 |
| /blog/how-many-ants-are-in-the-world | 3 | 6 → 9 | 2,244 | 6.8 | 4 |
| /blog/do-ants-bite | 1 | 16 → 17 | 1,027 | 9.8 | 4 |
| /blog/alaska-mosquitoes | 3 | 9 → 12 | 1,320 | 7.7 | 5 |
| /blog/are-mosquitoes-attracted-to-light | 3 | 10 → 13 | 895 | 8.2 | 1 |

The other climbers in the same list (cockroach and mice pages) belonged to other agents' rounds on the
same day; see their logs before using them as an unlinked comparison group.

## Skipped, and why

1. **signs-of-carpet-beetles, four listed sources not used** (the brief asked for the best 5 or 6 of
   10): `/blog/moths-in-house`, `/blog/beetles-in-house` and `/blog/tiny-brown-bugs` went live
   2026-10-20 and had no Google impressions yet; `/blog/bugs-in-house-in-winter` had 55 in 28 days. The
   six used are the strongest on the list (1,966, 1,912, 1,038, 725, 345 and 162 impressions).
2. **do-ants-bite got 1 link, not 2 or 3.** The two strong Canadian ant pages (`carpenter-ants-canada`,
   `how-to-get-rid-of-ants-canada`) already link it, and `best-ant-killer` (2,058 impressions) has no
   paragraph about bites or stings. Of the ant guides that do not link it yet, only `sugar-ants` has a
   paragraph about bites and stings; `what-do-ants-eat`, `how-long-do-ants-live`, `borax-for-ants` and
   `ant-killer-recipes` mention fire ants only for diet, lifespan or bait. The one other mention found
   (`mosquito-bite-vs-spider-bite`) is inside an FAQ answer string, which the brief rules out.
3. **how-to-get-rid-of-bed-bugs got 2 links.** It has a Canadian edition
   (`/blog/how-to-get-rid-of-bed-bugs-canada`, hreflang pair in `REGIONAL_PAIRS`), so on Canadian
   articles it was linked only inside paragraphs addressed to US readers (brief rule 7), and almost every
   US bed bug guide already links it. `tiny-black-bugs` was considered and rejected: that page says bed
   bugs are not black, so a removal link would not belong to any of its paragraphs.
4. **red-ants (for how-many-ants-are-in-the-world): added, then removed before its amend.** The sentence
   took `red-ants` to 9 same-cluster guide links (a validator warning), so the link went to
   `flying-ants` instead (548 vs 460 impressions in 28 days, genuine colony-size paragraph). `red-ants`
   is byte-identical to HEAD and its fact-check record was not changed.
5. **when-are-mosquitoes-most-active, for are-mosquitoes-attracted-to-light:** its only paragraph about
   mosquitoes and lights is a list item directly above a `TopPick`; a sentence there would sit between
   the pick and the text that introduces it (rule 5). The page got the Alaska link instead.
6. **how-to-get-rid-of-drain-flies-canada, for tiny-black-bugs:** its identification block is a styled
   table and photo section with no prose paragraph to attach a sentence to.
7. **mosquito-hawk-explained and katchy-indoor-insect-trap-review-canada, for
   are-mosquitoes-attracted-to-light:** their light paragraphs are about crane flies and small flies;
   mosquitoes appear only in passing.
8. **Good spots outside the assigned source lists, left for a later round:**
   `/blog/bed-bug-stains-poop-droppings-canada` (5,536 impressions), the paragraph "And one thing that is
   not evidence... bites" (line 440 before this round), fits `/blog/bed-bug-bites-but-no-bed-bugs`;
   `/blog/baby-bed-bugs-nymphs` (4,300), after the list that opens "Bristly shed skins point to carpet
   beetles", and `/blog/bugs-that-look-like-bed-bugs-canada` (2,866), section "Carpet Beetles: The
   Classic Bed Bug Look-Alike", fit `/blog/signs-of-carpet-beetles`.

## Removed lines

None. Every edited file shows only added lines in `git diff` (the red-ants trial edit in item 4 was
fully reverted).

## Checks (run 2026-10-21, after the last edit)

**Affiliate and recirculation guard, all 17 TSX pages** (brief's script, HEAD vs working tree): counts
of `<BuyLink`, `<AwardRow`, `<AwardCard`, `<StickyBuyBar`, `<AmazonLink`, `<TopPick`, `asin=`,
`search=`, `<NextUp`, `<RelatedLinks`, `<ReadNext`, `<Photo` unchanged on every page; every line
containing BuyLink, TopPick, StickyBuyBar, TopBox, AwardRow, AwardCard, AmazonLink,
AffiliateDisclosure, asin=, search=, NextUp, RelatedLinks or ReadNext is byte-identical and in the same
order; removed lines: none. `<AwardCard` and `<AmazonLink` are 0 on all 17.

| TSX page | BuyLink | StickyBuyBar | TopPick | AwardRow | asin= | search= | NextUp / RelatedLinks / ReadNext | Photo | Guarded lines identical | Lines added / deleted |
|---|---|---|---|---|---|---|---|---|---|---|
| bed-bug-bites | 4 | 1 | 1 | 0 | 0 | 6 | 1 / 1 / 1 | 2 | 18 | 1 / 0 |
| flea-bites-on-humans | 8 | 1 | 1 | 0 | 0 | 10 | 1 / 1 / 1 | 4 | 22 | 1 / 0 |
| tick-vs-bed-bug | 4 | 1 | 1 | 0 | 0 | 6 | 1 / 1 / 1 | 4 | 18 | 3 / 0 |
| bugs-that-look-like-bed-bugs-canada | 6 | 1 | 0 | 1 | 0 | 7 | 1 / 1 / 1 | 6 | 19 | 2 / 0 |
| bed-bug-stains-poop-droppings-canada | 10 | 1 | 0 | 1 | 0 | 11 | 1 / 1 / 1 | 2 | 24 | 1 / 0 |
| baby-bed-bugs-nymphs | 5 | 1 | 0 | 1 | 0 | 6 | 1 / 1 / 1 | 4 | 18 | 1 / 0 |
| best-bed-bug-spray-for-mattress-canada | 16 | 1 | 0 | 1 | 0 | 18 | 1 / 1 / 1 | 0 | 31 | 1 / 0 |
| bed-bug-shells-casings-shed-skins-canada | 9 | 1 | 0 | 1 | 0 | 10 | 1 / 1 / 1 | 5 | 22 | 1 / 0 |
| no-see-um-bites | 11 | 1 | 1 | 0 | 0 | 13 | 1 / 1 / 1 | 3 | 27 | 1 / 0 |
| how-to-get-rid-of-fruit-flies | 5 | 1 | 1 | 0 | 0 | 8 | 1 / 1 / 1 | 3 | 21 | 1 / 0 |
| carpenter-ants-canada | 6 | 1 | 0 | 1 | 0 | 7 | 1 / 1 / 1 | 0 | 19 | 1 / 0 |
| when-are-mosquitoes-most-active | 3 | 1 | 1 | 0 | 0 | 5 | 1 / 1 / 1 | 0 | 17 | 1 / 0 |
| what-temperature-kills-mosquitoes | 0 | 0 | 0 | 0 | 0 | 0 | 1 / 1 / 1 | 0 | 6 | 1 / 0 |
| why-do-mosquitoes-exist | 0 | 0 | 0 | 0 | 0 | 0 | 1 / 1 / 1 | 0 | 6 | 1 / 0 |
| what-colors-attract-mosquitoes | 0 | 0 | 0 | 0 | 0 | 0 | 1 / 1 / 1 | 0 | 6 | 1 / 0 |
| laser-mosquito-killer-photon-matrix-review | 16 | 1 | 1 | 1 | 1 | 18 | 1 / 1 / 1 | 0 | 31 | 1 / 0 |
| dynatrap-canada-review | 20 | 1 | 1 | 1 | 0 | 23 | 1 / 1 / 1 | 0 | 38 | 1 / 0 |

**Line endings:** unchanged on all 27 files (the six CRLF TSX files are still pure CRLF, the rest LF).

**Guide JSON (10 files):** `node scripts/validate-guide.mjs <slug>` passes on bug-bites,
bugs-that-look-like-bed-bugs, bed-bug-poop, signs-of-bed-bugs-checklist, tiny-black-bugs,
bugs-that-look-like-fleas, black-bed-bugs, bullet-ants, sugar-ants and flying-ants.
`node scripts/us-pages-mark-checked.mjs amend <slug> "<note>"` recorded on all 10, and `isChecked`
is true for each (the record's sha matches the file), so the next morning release re-registers them.
Each diff is additions only (1 line each; 3 for bugs-that-look-like-bed-bugs; 2 for
signs-of-bed-bugs-checklist and black-bed-bugs).

**New validator warnings (non-blocking; `check:guides` prints errors only):** bed-bug-poop (2,198 →
2,244 body words) and signs-of-bed-bugs-checklist (3,297 → 3,365) each crossed the "more than twice the
minimum" length note by one sentence; sugar-ants now links 9 same-cluster guides ("the brief asks for 4
to 8"), kept because it is the only genuine source for do-ants-bite. tiny-black-bugs already had the
length note at HEAD.

**`npm run check:guides`** (`validate-guide.mjs --all --complete --complete-visual`): 178 guides
checked, 0 with errors, 0 short of inbound links.

**`npx tsc --noEmit`:** exit 0, no output.

**Not run, per the brief:** `next build` / `npm run build`; nothing staged or committed. The build-time
checks that read the built `.next` output (check:amazon, check:recirculation, check:page-roles,
check:article-ctas) were not run, since without a build they would test stale HTML.
