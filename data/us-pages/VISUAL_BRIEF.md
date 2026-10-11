# Writer brief addendum: visual guides (October 2026, second batch)

Read `data/us-pages/WRITER_BRIEF.md` first. Everything in it applies, except where this page
says otherwise. These ten pages are built to be pinned on Pinterest and found in search, so
they are more practical and more scannable than the first batch: recipes, checklists, charts
and printable cards.

## What is different for this batch

- **Audience: the United States and Canada.** US spelling, Fahrenheit and inches still lead
  (metric may follow in parentheses). You MAY mention Canada and Ontario where the plan asks
  for it (the tick chart must). You may cite Canadian government sources alongside US ones.
- **One H1 that matches the keyword.** Use the `h1Hint` in your plan entry or stay very close
  to it. The keyword must appear in the H1.
- **Every page carries pet and child safety notes.** Include one H2 whose heading contains
  the words "pets" or "children" (for example "Is this safe around pets and children?"), and
  give the risk for each remedy on the page, cited to a veterinary, poison-control or
  government source. Never call a remedy simply "safe". Say what the source says about risk,
  and "when used as directed".
- **Exact ratios come from a source, with the source named.** A recipe's measurements must be
  the ones a university extension, government or peer-reviewed source publishes. If sources
  give different ratios, say so and give the range. If no authoritative source gives a ratio
  for a popular remedy, say that plainly and do not invent one. Do not write "tested",
  "we tested" or "tried and tested": BuzzSkito has not tested these. Say who publishes it.
- **Honest limits.** Each remedy says what it does not do and when it fails. A reader should
  finish knowing when to stop and try something else.
- **Links.** Your plan entry has `mustLink`: every address in it must be linked in the body,
  in a real sentence, with a descriptive anchor. Add 2 to 4 more links to related pages from
  your cluster context file where they help. No required hub or neighbour links beyond that.
- **Two extra top-level fields.** `"section"`: copy it from your plan entry (`"learn"` or
  `"blog"`). `"heroAlt"`: 80 to 420 characters describing the hero infographic for someone who
  cannot see it (what it is, and the main items on it).
- **Media.** Add `media` placeholders only for additional photos or diagrams that would
  really help. The hero is handled for you.

## Your hero infographic (read this carefully)

Each page opens with a one-page infographic the owner supplied. Its words are in your plan
entry as `heroText` (a title and a list of items). Readers arrive from Pinterest having seen
that graphic, so the page must match it and must also be right.

1. **Cover every item on the graphic, in the same order.** Use the graphic's own names for
   its items as your H2 or H3 headings where that reads naturally, so a reader can find each
   one.
2. **Check every claim on the graphic against a source**, exactly as you would your own:
   every ratio, size, time, count, temperature, species range, disease and safety label.
3. **Where a source supports the graphic, say so and cite it.**
4. **Where sources say something different, the page states the sourced fact**, and you add
   ONE callout (tone `"note"`, title `"Where the one-page guide differs"`) listing each
   difference in plain words: what the graphic shows, what the source says, and which to
   follow. Be matter-of-fact. Do not mock the graphic and do not hide the difference.
   Examples of things to check hard: a recipe ratio stronger or weaker than extension
   advice, a size comparison assigned to the wrong life stage, a remedy with no evidence
   behind it, and any "safe" label.
5. **Recipes:** put the SOURCED measurements in the `recipe` block. If the graphic's ratio
   differs, mention the graphic's version in that recipe's `limits` and in the callout.
6. **Safety labels:** the graphic uses short labels such as "safe", "low", "unsafe". The page
   never repeats "safe" as a fact. Say what the source says the risk is.
7. The graphic may say the recipes are "tested". BuzzSkito has not tested them. Do not repeat
   the word; say who publishes each recipe.
8. In your final report, list every item where the graphic and the sources differ
   (`graphicIssues`: what the graphic says, what the source says, the source). The owner
   uses that list to correct the artwork.

## Three new block types

Use them in `body`, alongside the blocks in the main brief.

A recipe, one per remedy with measurements:

```json
{ "type": "recipe", "title": "Borax and sugar liquid bait",
  "makes": "About 1 cup, enough for 6 to 8 bait stations",
  "ingredients": ["1 cup warm water", "1/2 cup sugar", "1 1/2 teaspoons borax"],
  "steps": ["Stir the sugar and borax into the warm water until both dissolve.", "Soak cotton balls and set them in a lidded container with holes punched in the side."],
  "works": "Kills the colony slowly as workers carry it home. Expect 1 to 2 weeks.",
  "limits": "Protein-feeding ants ignore it. A stronger mix kills workers before they share it.",
  "safety": { "tier": "caution", "pets": "One sentence on the risk to cats and dogs, from your source.", "children": "One sentence on the risk to children and how to place it out of reach." },
  "source": "[University of Example Extension](https://example.edu/...)" }
```

`safety.tier` is one of `"lower-risk"`, `"caution"` or `"keep-away"`. Pick it from what your
source says, and explain it in the two sentences.

A checklist the reader works through:

```json
{ "type": "checklist", "title": "Check tonight: 10 minutes with a flashlight",
  "items": ["**Mattress seams.** Run a card along the piping, top and bottom.", "**Box spring.** Lift the corner guards."] }
```

A printable card (a recipe card, cheat sheet or routine the reader can print or save):

```json
{ "type": "card", "title": "Fall mouse-proofing checklist",
  "intro": "Print this and walk the outside of the house once before the first frost.",
  "items": ["Utility and pipe openings: pack with steel wool, then seal with caulk.", "Garage door corners: replace worn bottom and side seals."],
  "note": "One line of safety or timing advice, optional." }
```

Each page needs **exactly one `card`** (the printable). Give it 6 to 12 items that stand on
their own without the rest of the page, because it will be printed and pinned.

## Lengths

- Body: at least the `minWords` in your plan entry (recipes, checklists and cards count).
- FAQs: 4 to 6. Sources: 4 to 7, at least 3 government, university, veterinary or
  peer-reviewed.
- `metaTitle`: 48 characters or fewer, starting with the keyword.

## How to work

1. Run `node scripts/us-pages-entry.mjs <slug>` for your plan entry, and read your cluster
   context file `data/us-pages/context-<cluster>.md` for link addresses (the garden cluster
   uses `context-garden.md`).
2. Research in few large steps: send your searches together in one turn, then your fetches
   together in one or two turns. Open every page you cite and find each fact on it.
3. Write `content/guides/<slug>.json` with the Write tool, then run
   `node scripts/validate-guide.mjs <slug>` and fix every error until it prints a check mark.
4. Do not edit any other file. Do not run `next build`, `git` or installs.
