# Protected pages — do not modify

Generated 2026-09-08 for branch `feat/affiliate-content-sept26`, Phase 0.

Guardrail 2: never touch local service pages — GTA location pages, neighbourhood pages,
quote/contact/pricing, the homepage, or anything with a quote form or LocalBusiness schema.

**Every page below was classified by a signal found inside the file, not by its URL pattern.**
That matters because several city pages carry no LocalBusiness schema and would have been
missed by a name-based rule, while three `/pest-product-guides/*` routes look like service
pages by name but are actually the affiliate hubs.

## Summary

| | Count |
|---|---|
| **PROTECTED — do not modify** | **184** |
| In scope: `/blog/*` articles | 358 |
| In scope: affiliate hubs (`/pest-product-guides`, `/bed-bug-control`, `/rodent-control`) | 3 |
| Total routes on the site | 546 |

| Reason protected | Pages |
|---|---|
| LocalBusiness schema | 134 |
| Service or brand page | 29 |
| City service page | 13 |
| Captures leads | 5 |
| Legal | 2 |
| Homepage | 1 |

## Two findings you should know before approving

**1. No blog page carries a protected signal.** I checked all 358 for LocalBusiness schema and
for embedded lead forms — zero have either. The blog is cleanly separable from the service side,
so the affiliate work can proceed without any risk of touching the service business.

**2. But 222 blog pages contain a `CTASection` that links to the quote funnel.** That is a link,
not a form, so those pages stay in scope for content work — **with one standing condition: no
later phase may remove, move, or weaken that CTA.** It is the route from an affiliate reader to
a $1,222 service customer, and one service customer is worth roughly 368 affiliate orders.
I am flagging it here rather than in a later phase because it is the single way this project
could do real damage while appearing to succeed.

## Full list

### LocalBusiness schema (134)

- `/ajax-mosquito-control`
- `/aldershot-mosquito-control`
- `/alton-village-mosquito-control`
- `/ancaster-mosquito-control`
- `/baby-point-mosquito-control`
- `/bolton-mosquito-control`
- `/bram-west-mosquito-control`
- `/bramalea-mosquito-control`
- `/brampton-mosquito-control`
- `/brampton-tick-spray`
- `/bridle-path-mosquito-control`
- `/bronte-mosquito-control`
- `/burlington-mosquito-spray`
- `/burlington-tick-spray`
- `/buzzskito-history`
- `/caledon-east-mosquito-control`
- `/caledon-mosquito-control`
- `/caledon-tick-spray`
- `/casa-loma-mosquito-control`
- `/castlemore-mosquito-control`
- `/clearview-mosquito-control`
- `/college-park-mosquito-control`
- `/commercial-mosquito-control`
- `/credit-valley-mosquito-control`
- `/danforth-mosquito-control`
- `/davisville-mosquito-control`
- `/daycare-camp-mosquito-tick-control`
- `/don-mills-mosquito-control`
- `/dundas-mosquito-control`
- `/east-york-mosquito-control`
- `/eastlake-mosquito-control`
- `/estate-property-mosquito-control`
- `/etobicoke-mosquito-control`
- `/etobicoke-tick-spray`
- `/falgarwood-mosquito-control`
- `/flamborough-mosquito-control`
- `/fletcher-meadows-mosquito-control`
- `/forest-hill-mosquito-control`
- `/georgetown-mosquito-control`
- `/georgetown-tick-spray`
- `/glen-abbey-mosquito-control`
- `/golf-course-mosquito-control`
- `/halton-hills-mosquito-control`
- `/halton-hills-tick-spray`
- `/hamilton-mosquito-control`
- `/hamilton-tick-spray`
- `/heart-lake-mosquito-control`
- `/high-park-mosquito-control`
- `/hoa-condo-community-mosquito-control`
- `/joshua-creek-mosquito-control`
- `/king-city-mosquito-control`
- `/king-city-tick-spray`
- `/kleinburg-mosquito-control`
- `/lawrence-park-mosquito-control`
- `/leaside-mosquito-control`
- `/leslieville-mosquito-control`
- `/markham-mosquito-control`
- `/markham-tick-spray`
- `/millcroft-mosquito-control`
- `/milton-mosquito-control`
- `/milton-tick-spray`
- `/mississauga-mosquito-control`
- `/mississauga-tick-spray`
- `/moore-park-mosquito-control`
- `/mosquito-control-near-me`
- `/mosquito-control-ontario`
- `/mount-pleasant-mosquito-control`
- `/north-oakville-mosquito-control`
- `/north-york-mosquito-control`
- `/north-york-tick-spray`
- `/oakville-mosquito-control`
- `/oakville-tick-spray`
- `/old-oakville-mosquito-control`
- `/orchard-mosquito-control`
- `/palmer-mosquito-control`
- `/pest-control-brampton`
- `/pest-control-burlington`
- `/pest-control-caledon`
- `/pest-control-etobicoke`
- `/pest-control-georgetown`
- `/pest-control-gta`
- `/pest-control-halton-hills`
- `/pest-control-hamilton`
- `/pest-control-king-city`
- `/pest-control-markham`
- `/pest-control-milton`
- `/pest-control-mississauga`
- `/pest-control-north-york`
- `/pest-control-oakville`
- `/pest-control-richmond-hill`
- `/pest-control-scarborough`
- `/pest-control-thornhill`
- `/pest-control-toronto`
- `/pest-control-vaughan`
- `/pest-control-woodbridge`
- `/pickering-mosquito-control`
- `/pool-backyard-mosquito-control`
- `/property-manager-mosquito-tick-control`
- `/restaurant-patio-mosquito-control`
- `/reviews`
- `/richmond-hill-mosquito-control`
- `/richmond-hill-tick-spray`
- `/river-oaks-mosquito-control`
- `/riverdale-mosquito-control`
- `/rosedale-mosquito-control`
- `/roseland-mosquito-control`
- `/sandalwood-mosquito-control`
- `/scarborough-mosquito-control`
- `/scarborough-tick-spray`
- `/snelgrove-mosquito-control`
- `/springdale-mosquito-control`
- `/stoney-creek-mosquito-control`
- `/summerhill-mosquito-control`
- `/sunnybrook-mosquito-control`
- `/the-annex-mosquito-control`
- `/the-beaches-mosquito-control`
- `/the-kingsway-mosquito-control`
- `/thornhill-mosquito-control`
- `/thornhill-tick-spray`
- `/tick-control-near-me`
- `/tick-control-ontario`
- `/toronto-mosquito-control`
- `/toronto-tick-spray`
- `/tyandaga-mosquito-control`
- `/vaughan-mosquito-control`
- `/vaughan-tick-spray`
- `/waterdown-mosquito-control`
- `/wedding-mosquito-control`
- `/west-oak-trails-mosquito-control`
- `/willowdale-mosquito-control`
- `/woodbridge-mosquito-control`
- `/woodbridge-tick-spray`
- `/york-mills-mosquito-control`
- `/york-region-mosquito-control`

### Service or brand page (29)

- `/blog`
- `/buzzskito-2026-gta-mosquito-tick-report`
- `/buzzskito-vs-lawnsavers`
- `/buzzskito-vs-mosquito-buzz`
- `/buzzskito-vs-mosquitoman`
- `/deadliest-animal-in-canada`
- `/frequently-asked-question`
- `/gta-mosquito-pressure-map`
- `/how-it-works`
- `/learn`
- `/learn/how-to-combat-mosquitoes`
- `/learn/how-to-combat-ticks`
- `/learn/mosquito-life-cycle`
- `/learn/ontario-mosquito-tick-diseases`
- `/learn/tick-life-cycle`
- `/lyme-disease-canada-statistics`
- `/mosquito-control`
- `/mosquito-control-cost`
- `/mosquito-control-diy-vs-professional`
- `/mosquito-control-pricing`
- `/mosquito-spray-safety`
- `/mosquito-tick-control-glossary`
- `/ontario-lyme-disease-tracker-2026`
- `/pest-product-guides/mosquito-gear`
- `/pest-product-guides/tick-gear`
- `/service-areas`
- `/tick-control`
- `/ticks-in-ontario-statistics`
- `/west-nile-virus-ontario-tracker`

### City service page (13)

- `/best-mosquito-control-companies-brampton`
- `/best-mosquito-control-companies-burlington`
- `/best-mosquito-control-companies-etobicoke`
- `/best-mosquito-control-companies-gta`
- `/best-mosquito-control-companies-hamilton`
- `/best-mosquito-control-companies-markham`
- `/best-mosquito-control-companies-mississauga`
- `/best-mosquito-control-companies-north-york`
- `/best-mosquito-control-companies-oakville`
- `/best-mosquito-control-companies-richmond-hill`
- `/best-mosquito-control-companies-scarborough`
- `/best-mosquito-control-companies-toronto`
- `/best-mosquito-control-companies-vaughan`

### Captures leads (5)

- `/am-i-a-mosquito-magnet`
- `/contact`
- `/free-yard-assessment`
- `/lyme-disease-risk-calculator`
- `/yard-risk-report`

### Legal (2)

- `/privacy-policy`
- `/terms`

### Homepage (1)

- `/`

## Amendment — 2026-09-08

`/pest-control-cost-canada` was **unprotected on Diogo's explicit instruction** and moved into
scope for Phase 3.

It was originally protected by my Phase 0 catch-all for non-blog routes, not by a real signal:
the file carries **no LocalBusiness schema and no lead form**. Guardrail 2's word "pricing" is
what made it ambiguous, but BuzzSkito's own pricing lives at `/mosquito-control-pricing`; this
page is a national cost-guide content page. The brief itself named it as a Tier 1 member, which
is why the conflict was raised rather than resolved silently.

**One caveat carried forward:** it ranks at position 2.1 for "pest control near me" and 2.4 for
"pest control". Those are local-intent queries feeding the $1,222 service side, not the affiliate
side. Any future work on this page must not weaken that. Phase 3 changes the description only.

### Detector gap found while unprotecting it

The Phase 0 detector looked for `CTASection`, `LocalBusiness` schema and `QuoteForm`.
`/pest-control-cost-canada` has none of those — but it **does** capture leads, through a
hand-rolled CTA block at lines 512-515 linking to `/free-yard-assessment` and `BUSINESS.phoneHref`.
So the "captures leads (5)" count in the summary above is an undercount of bespoke CTAs.

I re-scanned all 546 routes for `free-yard-assessment|phoneHref|BUSINESS.phone` without
`CTASection`. **Exactly one in-scope page matches, and it is this one.** Every other in-scope
route is either a `/blog/*` article or one of the three `/pest-product-guides` hubs. The guardrail
is intact; the gap had a blast radius of one.

The Phase 0 standing condition now extends to this page: **no phase may remove, move or weaken
the `/free-yard-assessment` CTA at lines 512-515.** It ranks 2.1 for "pest control near me",
which is service-side demand, not affiliate demand.
