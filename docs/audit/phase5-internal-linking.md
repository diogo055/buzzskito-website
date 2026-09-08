# Phase 5 — internal linking

Run 2026-09-08 on `feat/affiliate-content-sept26`.

The phase has five items. **Two shipped, one was already complete, and two are recommended
against** — with the evidence below rather than as a preference.

| # | Item | Outcome |
|---|---|---|
| 1 | `<RelatedProducts>` inline at ~40% depth | **SHIPPED** |
| 2 | `/pests/*` hub taxonomy (6 new pages) | **NOT BUILT — recommend against** |
| 3 | Route 3 high-traffic pages into commercial pages | **SHIPPED** |
| 4 | Breadcrumb schema on all blog and pest pages | **ALREADY DONE — no work needed** |
| 5 | Max 4 internal links per 1,000 words | **NOT ENFORCED — recommend against** |

## 1 & 3 — what shipped

`components/RelatedProducts.tsx` renders an inline `<aside>` of three contextual links, each with
a one-line reason to follow it. It is placed mid-article, not in the footer, because measured
scroll depth on this site is 19.74% and a footer module is seen by almost nobody.

Placed on the three pages the brief names, at 32%, 39% and 38% of article body:

| Source page | Routes to |
|---|---|
| `/blog/bugs-that-look-like-ticks` | tick-removal-tool-guide, permethrin-canada-yard-clothing-spray, are-ticks-dangerous-ontario |
| `/blog/black-flies-ontario-when-they-come-out` | mosquito-repellent-guide-ontario-2026, best-mosquito-repellent-device-canada, no-see-um-bites |
| `/blog/horse-fly-and-deer-fly-bite-treatment` | black-flies-ontario-when-they-come-out, best-mosquito-repellent-device-canada, no-see-um-bites |

Every destination carries affiliate elements (4 to 22 each) and each block contains at least one
Tier 2 page. Destinations already linked from the source page were skipped so the block adds
reach rather than repeating existing links.

**Experiment note.** All three source pages are in title wave 1, which reports 2026-10-15. That
experiment measures CTR, and these are *outbound* links added to pages that already carry 28-62
internal links — the effect on the source page's own position is negligible. Recorded so the
readout is not misread, but it does not invalidate the wave.

## 4 — already complete

359 of 359 blog pages already emit breadcrumb schema, and 544 of 546 routes site-wide. There was
nothing to do. Flagging it rather than reporting it as work.

## 2 — why the `/pests/*` hubs were not built

Three independent reasons, any one of which is sufficient.

**It would put new pages head-to-head with protected service pages.** `/pests/mosquitoes/` and
`/pests/ticks/` would compete directly with `/mosquito-control` and `/tick-control` — both on the
**protected list**, both service pages on the $1,222 side of the business. If cannibalisation
appeared I would not be permitted to fix it by touching the incumbent. Self-cannibalisation is
already documented as this site's single largest structural problem; deliberately creating six
more instances of it is the wrong direction.

**Hubs already exist under different names.** `/pest-product-guides/` (3 hubs) and `/learn/`
(5 pages) already do this job, and `/pest-product-guides/mosquito-gear` and
`/learn/how-to-combat-mosquitoes` are also protected. A `/pests/` taxonomy would be a third
parallel hierarchy over the same content.

**It is bulk page creation, which guardrail 5 forbids without the Phase 6 gate** — and the
measured return does not support it anyway: the July cohort of 215 new pages produced a median of
$0.16 per page per month, with 40% earning nothing.

If you want the hub structure later, the defensible version is to strengthen
`/pest-product-guides/` rather than build `/pests/` beside it. That needs no new URLs, which also
keeps it legal before 2026-10-15.

## 5 — why the 4-links-per-1,000-words cap was not enforced

**The site already fails it almost everywhere, and enforcing it would mean deleting links, not
adding them.**

Measured across all 358 blog pages:

| | links per 1,000 words |
|---|---|
| minimum | 1.8 |
| 25th percentile | 4.5 |
| **median** | **5.4** |
| 75th percentile | 7.1 |
| 90th percentile | 8.4 |
| maximum | 23.1 (`bed-bug-control-canada-hub`) |

**Only 60 of 358 pages (17%) are under the cap.** Enforcing it would require stripping internal
links from 298 pages — which would also undo the internal-link pass approved and shipped in the
previous session (commit `de5aa6b`, "18 starved pages gained links").

There is also an internal contradiction in the phase: items 1 and 3 add three links per page to
pages that were already over the cap. The three pages this phase touched now sit at 5.4, 8.6 and
8.0 per 1,000 words.

**Recommendation:** treat 4/1,000 as a target for pages that are *under* it and as a ceiling for
*new* additions, not as a mandate to strip 298 live pages. If link dilution is the real concern,
the higher-value fix is the 78-page city-service cluster consolidation already on the pending
list, not thinning blog body links.

## Mobile diagram legibility — resolved

Carried over from Phase 4 and approved this session: tap-to-zoom.

`components/FigureZoom.tsx` wraps the figure image in a button that opens a full-screen overlay
rendering the asset at its natural width in a pannable container. Verified live at a 375px
viewport: the diagram renders inline at **341px against a 720px natural width (47%)**, and the
overlay restores it to **720px — 2.1x** — so every label is back at the size it was drawn.

Escape closes it, the backdrop closes it, body scroll is locked while open and restored on close,
the close button takes focus, and the dialog carries `role="dialog"` / `aria-modal` with the
figure's alt text as its label. `<Figure>` stays a server component, so ImageObject schema is
unaffected — `FigureZoom` is the only client component in the path.

This applies to every `<Figure>` on the site, not only the 13 diagrams.
