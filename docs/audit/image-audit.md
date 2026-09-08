# Image audit — Phase 4

Run 2026-09-08 on `feat/affiliate-content-sept26`.

**Every diagram below was rendered in a real Chromium at 720px and looked at — before and after
any change.** Nothing here is marked done from reading source. Where my first-pass rasteriser and
the browser disagreed, the browser won; that mattered twice and is recorded under "Method notes".

## Inventory

| Class | Count | Verdict |
|---|---|---|
| Generated diagram SVGs in `/public/diagrams` | 13 | 9 FIXED, 3 OK, 1 NEEDS-DIOGO (orphan) |
| Inline `<svg>` in `app/` and `components/` | 360 | OK — all icons, see below |
| Raster images in `/public` | 19 | 3 NEEDS-DIOGO, rest OK |

**The 360 inline SVGs were checked and cleared as a class, not individually.** Not one contains a
`<text>` element, so none can exhibit the defects this phase targets — text over text, clipped
labels, unreadable labels. They are decorative icons: checks, arrows, chevrons.

## Diagram results

| Diagram | Pages using it | Verdict |
|---|---|---|
| `bed-bug-evidence-chart` | 3 | **FIXED** |
| `bugs-that-look-like-ticks` | 2 | **FIXED** |
| `crane-fly-vs-mosquito` | 1 | **FIXED** |
| `horse-fly-vs-deer-fly` | 2 | **FIXED** |
| `mosquito-bite-mechanism` | 3 | **FIXED** |
| `mosquito-larvae-identification` | 1 | **FIXED** |
| `mouse-vs-rat-droppings` | 1 | **FIXED** |
| `tick-species-ontario` | 3 | **FIXED** |
| `tick-vs-bed-bug-size` | 1 | **FIXED** |
| `bite-pattern-comparison` | 5 | OK |
| `mosquito-activity-24-hour-clock` | 1 | OK |
| `mosquito-temperature-scale-fahrenheit` | 1 | OK |
| `us-tick-species-vs-bed-bug` | **0** | **NEEDS-DIOGO** — renders perfectly, used nowhere |

### What was wrong, in plain language

**`mouse-vs-rat-droppings` — the worst of the set.** Six separate collisions. Each rodent
descriptor line such as "rice-grain sized, scattered" printed directly on top of the next rodent
name and its measurements, and two descriptors printed through the millimetre ruler. Three rows
were pitched about 100px apart while holding about 117px of content. Rows re-pitched, ruler moved
down into unused margin, and the pink safety callout fourth line — which was on a 12px baseline
step while its siblings used 15px — was re-spaced. It now reads cleanly as name / size / shape /
description.

**`bugs-that-look-like-ticks`.** Three of the four row labels ran underneath their own insect
drawings. Row 1 was clean only because the word "TICK" is short enough to stop before the artwork
begins. All four drawings moved right into the empty gap between the labels and the LEGS column.

**`bed-bug-evidence-chart`.** A pink "What is NOT evidence" callout sat on top of two full-width
prose lines, and the first of those lines was clipped off the right edge. The prose now wraps into
the free space under the mattress illustration and never enters the callout column.

**`crane-fly-vs-mosquito`.** Four separate runs of text ran off the right edge. The green box lost
the end of two sentences — readers never saw "The two never meet." Lines split; all text now fits.

**`mosquito-larvae-identification`.** The pupa label crossed the larvae drawings, and the bottom
prose line was both clipped and printing underneath the green callout. Pupa moved into empty water,
prose split across three lines.

**`mosquito-bite-mechanism`.** The mouthparts caption ran out of its panel and printed across step
4 heading and body. Caption moved to the panel left gutter and dropped from 11px to 10px.

**`tick-vs-bed-bug-size`.** The bed bug spec lines, the millimetre ruler and the italic caption
were all competing for one horizontal band. Bed bug row pulled up 14px, ruler pushed down 6px.

**`horse-fly-vs-deer-fly`.** The amber box single long line was clipped. Split into three — which
revealed an entire third sentence about DEET that no reader had ever been able to see.

**`tick-species-ontario`.** Footnote clipped mid-sentence. Split into two lines; it now reads
through to "check the same day you come in from long grass."

## Constraint respected: no viewBox changed

Pages embed these through `<Figure>` with **hardcoded** `width={720} height={N}` props. Changing an
SVG viewBox without updating every embedding page would have produced letterboxing or distortion —
the exact skewed-geometry defect this phase exists to remove. **All 13 files still carry their
original viewBox and width/height attributes**, verified against git HEAD, so no page prop needed
touching. Every repair was made inside the existing canvas.

## Text integrity

Visible text was extracted before and after with `scripts/diagram-text.mjs` and diffed.

- **11 of 13 diagrams: byte-identical text.**
- `crane-fly-vs-mosquito`: no word added or removed — 18 strings became 20 purely from line breaks.
- `mouse-vs-rat-droppings`: **one word changed**, "below" to "above", in the caption
  "Every dropping ___ is drawn on this scale."

That one wording change is a correction, not a rewrite. The caption sits at the bottom beside the
ruler and every dropping is drawn above it, so "below" pointed at empty canvas and was wrong in the
original file. Verified by looking at the rendered result. No number, measurement, species name or
claim was altered anywhere in the set.

## NEEDS-DIOGO

**1. Mobile legibility — affects all 13 diagrams, unresolved.**

`Figure` renders at `sizes="(max-width: 768px) 100vw, 720px"` with `className="w-full h-auto"`, so
on a 380px phone every diagram scales to about 53%. An 11px label becomes roughly 6px. I rendered
them at 380px and looked: the spec lines and footnotes are genuinely unreadable. This is inherent
to putting 720px-wide dense diagrams on a phone, not a per-file defect, and fixing it is a design
decision — mobile-specific layouts, or making diagrams tappable to zoom. **Mitigating factor: every
diagram carries genuinely descriptive alt text and a caption**, so the information is not lost to a
phone reader or a screen reader, only the visual. Not attempted; it is your call.

**2. `us-tick-species-vs-bed-bug.svg` is an orphan.** 880x336, renders perfectly, covers seven US
tick species plus a bed bug. It is referenced by no page and is not tracked in git. It looks built
for a US page that never shipped. Either wire it up or delete it — I did neither.

**3. Three oversized raster images.**

| File | Size | Status |
|---|---|---|
| `og-image.jpg` | **2.7 MB** | **used on 2 pages** — this is the social-share image |
| `spray-pool.jpg` | 5.6 MB | used on 1 page |
| `spray-backyard.jpg`, `spray-front.jpg`, `van-service.jpg`, `team.jpg` | 5.1 / 4.7 / 3.8 / 2.7 MB | **used on 0 pages** — the `.webp` versions are what the site serves |

A 2.7 MB Open Graph image is slow to fetch on every social scrape and some platforms will skip it.
About 22 MB of unused JPEGs sit in `/public` alongside the `.webp` files actually in use. Deleting
files is destructive and outside an image-*repair* phase, so I have only measured it.

## Alt text

Checked on all 12 live diagrams. Every one is specific and descriptive — none is generic or
missing. No action needed. Example, the 24-hour clock:

> "Twenty-four hour chart of mosquito biting activity by species group, showing the Culex peak in
> the one to two hours after local sunset, the Aedes daytime plateau with a midday heat dip, the
> broad Anopheles overnight plateau, and biting falling away between about 2 and 4 a.m."

## Method notes — where my first pass was wrong

I rasterised the SVGs with `sharp` first, because reading a PNG is a better look than a screenshot.
But librsvg substitutes a wider serif for parts of the `system-ui` stack, which **invents overflow
that does not exist in a browser**. That cost me one wrong call in each direction:

- I dismissed a genuine collision in `bugs-that-look-like-ticks` — the BODY column printing through
  "bright red" — as a rasteriser artifact, because the browser screenshot I checked had scrolled
  past that row. The repair agent found it, produced a before-render showing it, and fixed it.
- Conversely the COLOUR and TRUE SIZE columns looked collided in the raster and were merely tight
  in the browser. Left alone, correctly.

**Rasterise to find candidates; confirm every one in a browser before changing anything.** Tools
kept for re-running: `scripts/raster-diagrams.mjs` and `scripts/diagram-text.mjs`.

## Verification performed

- All 13 rendered in Chromium at 720px before changes, all 13 again after.
- All 13 parse as well-formed XML.
- viewBox and width/height byte-compared against git HEAD: unchanged on all 13.
- Visible text extracted and diffed before/after: one intentional word, documented above.
- `npx next build` clean, 553 static pages generated.
