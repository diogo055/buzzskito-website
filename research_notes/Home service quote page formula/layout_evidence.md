# Landing page and quote form evidence for a local home-service company

Researched Nov 1, 2026. Scope: what large datasets and controlled tests show about page layouts and quote forms, applied to BuzzSkito (about 1,600 local visits in May-June, 10-16% become leads, 64% of sessions on phones).

**Grades used on every claim:** [A] controlled test across many sites. [B] single controlled test. [C] correlation across many pages. [D] vendor claim (the publisher sells the thing measured, or shows no method). [E] unsupported, cannot be traced to an origin. A vendor reporting a real A/B test is graded [B/D].

**How each source was read:** "(opened)" means I fetched the page. "(summary)" means I saw only a search tool's summary of the page, so numbers need checking before they are quoted as fact. Budget note: about 55 tool calls were used against a target of about 40. Items not finished are listed under Gaps and marked NOT DONE.

## Which page and form decisions rank highest on evidence strength and measured effect?

### Takeaway
No element has both strong evidence and a large proven effect. The best-proven item (speed) has a modest effect, while the biggest published lifts (fewer fields, phone field, message match, showing price) rest on single unreplicated tests, and the best replication work shows published lifts usually shrink a lot.

### Cited Findings
Ranked by evidence strength first, then measured size. Dates are the date of the data where known. Details and all links are in the "measured effect" section below.

| Rank | Decision | Best evidence | Measured effect | Applies to a local quote page? |
|---|---|---|---|---|
| 1 | Page speed on phones | [A] replication exists but only the abstract was readable; [C/D] Google-paid study, 2019 data | 0.1 s faster: +5.5% home to form, +21.6% form step to submission on lead-gen sites | Direction yes, size no |
| 2 | Plain, easy words | [C/D] Unbounce 2024, 41K+ pages | Grade 5-7 copy 11.1% vs professional-level 5.3%; difficult words correlate -24.3% | Direction yes |
| 3 | Fewer form fields | [B] scattered single tests, [D] Baymard checkout research | 11 to 4 fields: 5.4% to 11.9% (secondhand); field count matters more than step count | Yes, if the form has fields it does not need |
| 4 | Phone field optional or removed | [B] single tests, none tied to sales | Removing an optional phone field +77.1% (donation page); adding one -48% (ebook form) | Partly. Phone is how the sale closes, so judge on booked jobs |
| 5 | Message match with the ad or search | [B] one clean test, rest [D] | 25.0% to 34.8%, 3,687 people (nonprofit offer) | Yes for ads; by analogy for city pages |
| 6 | Price or price range before the form | [B/D] one test with stated size | +15% leads on about 22,000 visitors (filtration products) | Plausible; no home-service test exists |
| 7 | Removing navigation | [B/D] one company, 5 pages | Top-funnel pages 0-4%, mid-funnel 16% and 28%; no sample stated | Low to medium; never tested on organic local pages |
| 8 | Sticky mobile call or quote bar | [A] replicated at scale (add-to-cart version, result unread); [B/D] case studies | +8% minimum in one vendor test; all eight replications came in smaller than earlier claims | Medium; BuzzSkito already has one |
| 9 | Multi-step vs single-step form | [B/D] vendor tests; 32 randomized survey experiments on progress bars | +21.4% with "very small" deviation; a steady progress bar does not help | Only if the form has about 6+ fields (no data behind that cut-off) |
| 10 | Reviews visible | [C] natural experiment on Yelp, 2003-2009 | One extra star: 5-9% more revenue, Seattle independent restaurants | Having reviews yes; placement unknown |
| 11 | Offering call and form together | [C/D] Unbounce, older data | Mixed-CTA pages 4% vs 2.6% median | Yes; no controlled call-vs-form test found |
| 12 | Headline wording | [A-like] 32,487 Upworthy tests, 2013-2015 | Effect sizes not read; outcome is clicks on news, not quotes | Low |
| 13 | Guarantee near the button | [B/D] e-commerce only | +30.33% unconfirmed; no home-service test | Low to medium |
| 14 | Page length | Conflict | Word count correlates -18.6% overall, but pest control pages peak at 400-500 words | Not settled |
| 15 | Testimonials next to the form | [D] | +18%, no method shown | Unknown |
| 16 | Video | [E] | No controlled result I could pin to a source | Unknown |
| 17 | Instant quote or calculator | [E] | No controlled test found | Unknown |
| 18 | Field order, text-first contact | NOT DONE / nothing found | None | Unknown |

### Inferences
- **Safe to adopt without testing, because the downside is small and the direction is supported:** fast phone pages, plain words, no needless form fields, call and text and form all available, real reviews visible.
- **Worth a test only if the change is big, because 1,600 visits cannot see small effects:** phone optional vs required, price shown beside the form vs not, an instant-price flow vs the form, a much shorter form.
- **Not worth testing at this traffic:** headline rewording, button styling, testimonial placement, guarantee wording. They may help but the effect would be invisible (see the traffic section).
- **Do not apply a fixed discount to published lifts.** The evidence shows shrinkage varies: rounded corners collapsed about 100-fold, and the other replications are described only as "substantially smaller". Treat any single published lift as an upper bound, not an expectation.
- Rank 1 is first because of evidence quality, not because it is the biggest lever. If BuzzSkito's service pages are already fast, its value is low.

### Gaps
- The full text of the KDD 2026 replication paper returned 403, so per-pattern results for sticky bars and page speed are unknown. This is the single most useful unread source.
- No ranked evidence exists specifically for home-service quote pages. Every rank above is borrowed from other industries.
- **Speed caveat:** rank 1 leans on the controlled slowdown experiments at Microsoft and Google that I know of from memory and did not re-read this session, plus a replication whose speed result I could not read. On the sources actually read, speed is only [C/D] and would rank below plain wording. Those older experiments should be checked before rank 1 is quoted.

## Which large datasets exist, what do they show, and who published them?

### Takeaway
Very large datasets exist, but they are of two kinds: vendors' correlation reports across pages, and vendors' or researchers' tallies of A/B tests. The first cannot show cause, and the second show that most changes do little. None identifies a winning layout.

### Cited Findings

| Dataset | Publisher, and stake | Sample | Method | Date | Main result | Read |
|---|---|---|---|---|---|---|
| [Conversion Benchmark Report 2024](https://unbounce.com/conversion-benchmark-report/) | Unbounce, sells page builder | 41K+ pages, 464M+ visitors, 57M+ conversions | Correlation, machine learning on page text [C/D] | "Past year"; no exact range given | Median 6.6%; 83% of visits mobile; desktop converts 8% higher than mobile | Opened |
| [Benchmark Report 2020](https://unbounce.com/conversion-benchmark-report-2020/) and [method](https://unbounce.com/industry/methodology/) | Unbounce | About 34K pages, 186M visits, 19M conversions | Correlation; drops pages under 500 visitors or with zero conversions [C/D] | Oct 28, 2018 to Oct 28, 2019 | Median 3.2%, mean 9.7%, top-quartile median 25% | Opened |
| [Home improvement section](https://unbounce.com/industry/home-improvement/) | Unbounce | 4,372 pages, 977,200 conversions | Correlation [C/D] | Unclear; the 3.2% baseline it shows matches the 2020 report | Median 2.6%, "top performers" 19.5%, mixed-CTA 4% | Opened |
| [Google Ads benchmarks](https://www.wordstream.com/blog/conversion-rate-benchmarks) | LocaliQ/WordStream, sell ad management | Not seen | Advertiser accounts, advertisers define "conversion" [C/D] | 2025; later Apr 2025-Mar 2026 | Home and home improvement search 7.33%; later 8.05%; all-industry 7.52% | Summary; primary returned 403 |
| [GoodUI tests](https://www.goodui.org/tests/tag/button/page3) and [prediction post](https://goodui.org/blog/can-winning-a-b-tests-be-predicted-with-past-results/) | Jakub Linowski, sells access (disclosed) | About 630 logged tests; 51 tracked predictions | Library of logged A/B tests, sizes vary [B] | Prediction post Jan 2019 | 36 of 51 pattern tests positive at stop (71%), not a winners count | Prediction post opened; library paywalled |
| [Optimizely benchmark](https://www.optimizely.com/insights/evolution-of-experimentation-bloomwild) and [takeaways](https://www.optimizely.com/insights/top-10-takeaways-from-running-127000-experiments) | Optimizely, sells testing software | 127,000 experiments; takeaways page now says 173,000 | Tally of customer A/B tests [A/D] | 2018-2023 | 12% win; about 60% inconclusive; 0.4% average revenue lift per experiment | Takeaways opened; date range from summary |
| [What Works in E-commerce](https://www.convert.com/blog/a-b-testing/what-is-meta-analysis-in-ab-testing/) | Browne and Jones, Qubit staff (vendor) | 6,700 large e-commerce tests, 29 change types | Meta-analysis [A/D] | June 2017 | Effects centred near zero, 5th and 95th percentile about ±1.2-1.3% ([reanalysis](https://arxiv.org/pdf/1909.03457)) | Summary |
| [False Discovery in A/B Testing](https://econpapers.repec.org/RePEc:inm:ormnsc:v:68:y:2022:i:9:p:6762-6782) | Berman and Van den Bulte, Wharton (independent) | 4,964 effects, 2,766 experiments | Statistical estimate on commercial platform data [A] | Published 2022 | About 70% of effects truly null; 18-25% of wins at 5% significance are false | Opened (abstract) |
| [Eight large replications](https://www.lukasvermeer.nl/publications/paper/2026/09/02/trustworthy-ab-patterns-and-the-winners-curse.html) | Vermeer, Kohavi, Linowski et al., KDD 2026 (community project) | Median 2.4M users per test | New pre-planned A/B tests [A] | Published 2026 | All eight smaller than claimed; two significant as expected; one significant the wrong way | Opened (abstract) |
| [E-commerce A/B meta-analysis](https://mackinstitute.wharton.upenn.edu/2020/empirical-meta-analysis-e-commerce-a-b-testing-practices/) | Miller and Hosanagar, Wharton | Nearly 2,000 tests, 200+ firms, 7 industries | Meta-analysis [A] | 2020 | Price promotions and category or listing pages show largest effects | Summary |
| [Form benchmarks](https://www.zuko.io/benchmarking/form-type-benchmarking) | Zuko, sells form analytics | 93M form sessions; enquiry forms 4.8M; comparison/quote 7.6M | Form analytics; sampling not described [C/D] | Not stated | Enquiry forms 47.7% desktop, 37.7% mobile | Opened |
| [Checkout research](https://baymard.com/blog/checkout-flow-average-form-fields) | Baymard, sells research | Not read | Described as usability research; method not read [D] | 2024 figure | Average 11.3 fields; most sites need about 8; fields matter more than steps | Summary |
| [Milliseconds Make Millions](https://web.dev/case-studies/milliseconds-make-millions) | Commissioned by Google, run by 55 and Deloitte | 37 brands, 30M+ sessions | Reads as observational (inference); no redesigns during study [C/D] | 30 days, end of 2019 | Lead-gen: +5.5% and +21.6% funnel steps per 0.1 s | Opened |
| [Upworthy Research Archive](https://pmc.ncbi.nlm.nih.gov/articles/PMC8329003) | Matias, Munger, Aubin Le Quere, Ebersole, Scientific Data 2021 | 32,487 tests, 538M assignments | Randomized headline tests on one site [A-like] | Jan 2013-Apr 2015 | Public dataset. [7,004 tests, 22%, may have imbalance](https://pure.psu.edu/en/publications/correction-to-the-upworthy-research-archive-a-time-series-of-3248/) | Summary |
| [Call benchmarks 2025](https://www.invoca.com/report/the-invoca-call-conversion-benchmarks-report-home-services-2025) and [2026](https://invoca.com/reports/the-invoca-home-services-lead-conversion-benchmarks-report-2026) | Invoca, sells call tracking | Not seen | Customer call data [C/D] | 2025, 2026 | 46% of home-service phone leads convert; paid search 48% | Summary |
| [Professional services report](https://www.ruleranalytics.com/wp-content/uploads/professional-services-conversion-benchmark-report-ruler-analytics.pdf) | Ruler Analytics, sells attribution | Not seen | Customer data [C/D] | Not seen | Average 9.3%, top up to 21.7%; forms 76%, calls 24% (not home services) | Summary |

### Inferences
- The owner is right that a great many tests and pages have been studied. Counted in full, it is hundreds of thousands. He is wrong if he expects that to yield a formula, because the tallies show the opposite.
- Almost every benchmark is published by a company selling the remedy. Independent work (Berman, Vermeer and Kohavi, Miller and Hosanagar) is the source most worth trusting, and it is the most pessimistic about big lifts.
- Unbounce's own overall median doubled between editions (3.2% to 6.6%). That is more likely a change in the mix or the method than pages getting twice as good, so its editions should not be compared as a trend. This is my reading; Unbounce does not explain it on the pages I read.

### Gaps
- NOT DONE: Nielsen Norman Group (one combined search returned nothing from NN/g). It is qualitative usability research in any case, so it would not supply effect sizes.
- NOT DONE: CXL Institute (reduce-form-fields page returned 403), MECLABS/MarketingExperiments (searches surfaced nothing from them), Invesp (not searched), VWO's experiment database (only a reader comment citing roughly 1 in 8 winning tests was seen), HubSpot's form data beyond the navigation test.
- HubSpot's often-cited 40,000 landing pages form analysis by Dan Zarrella was seen only [secondhand](https://medium.com/swlh/sales-lead-forms-choosing-the-optimal-size-according-to-the-research-results-6e080febfb37). Its numbers are unverified.
- The Unbounce home improvement page says its 4,372 pages are about 6% of the report, which does not fit 34K pages (it would be 13%). The edition of that page is unclear.
- The Ruler main benchmark PDF exceeded the fetch size limit, so any home-service row in it is unread.

## Is there one winning layout, or do results depend on traffic and offer? Why do tests fail to carry over?

### Takeaway
No source I read identifies a layout that wins across sites, and no study compares whole layouts across a set of home-service businesses. Results vary by offer, page type and audience, and many published wins are partly or wholly statistical luck.

### Cited Findings
- Eight new replications of four popular patterns (rounded buttons, page performance, coupon-code field, sticky call to action), median 2.4M users per test, 80% power at effects of 0.3-2.2%. All eight effects were substantially smaller than earlier claims, only two were significant in the expected direction, and one was significant in the opposite direction. The authors think many earlier numbers came from tests with under 50% power, which exaggerate effects. [A], 2026 — [Vermeer et al., KDD 2026](https://www.lukasvermeer.nl/publications/paper/2026/09/02/trustworthy-ab-patterns-and-the-winners-curse.html)
- A 2023 Journal of Consumer Research paper claimed rounding button corners lifted clicks by 55% (p = 0.037). Three tests with over 2,000 times more users found effects about two orders of magnitude smaller, with confidence intervals including zero. [A], 2025-26 — [Kohavi, Linowski, Vermeer, Gelman, Imbens et al.](https://arxiv.org/abs/2512.24521v2)
- About 70% of effects on a commercial testing platform are truly zero. Between 18% and 25% of results significant at 5% are false, so about one in five "winners" will not work when deployed. [A], 2022 — [Berman and Van den Bulte, Management Science](https://econpapers.repec.org/RePEc:inm:ormnsc:v:68:y:2022:i:9:p:6762-6782)
- 12% of experiments win on the primary metric, negative and positive results occur at about equal rates, and roughly 60% of tests are inconclusive. [A/D], 2018-2023 — [Optimizely](https://www.optimizely.com/insights/top-10-takeaways-from-running-127000-experiments)
- 6,700 e-commerce tests had effects centred near zero, with the 5th and 95th percentiles around ±1.2-1.3%. [A/D], 2017, secondary and summary only — [arXiv reanalysis](https://arxiv.org/pdf/1909.03457); study described by [Convert](https://www.convert.com/blog/a-b-testing/what-is-meta-analysis-in-ab-testing/) (one source calls the authors Browne and Jones, the other Browne and Johnson).
- Effect size depends on type of change and page: price promotions and category or listing pages had the largest effects across nearly 2,000 tests. [A], 2020, e-commerce, summary — [Miller and Hosanagar](https://mackinstitute.wharton.upenn.edu/2020/empirical-meta-analysis-e-commerce-a-b-testing-practices/)
- The same change differed by offer on one company's own pages: removing links gave 0-4% on three top-of-funnel pages and 16% and 28% on two mid-funnel pages. [B/D], undated, updated 2025 — [HubSpot](https://blog.hubspot.com/marketing/landing-page-navigation-ht)
- Best copy length differs inside home services: HVAC best under 200 words, general home services about 300, pest control 400-500. [C/D], probably 2018-19 data — [Unbounce](https://unbounce.com/industry/home-improvement/)
- The same interface element can have opposite effects: in 32 randomized web-survey experiments, a fast-to-slow progress bar cut drop-off, a slow-to-fast one raised it, and a steady one did not significantly help. [A], 2013, surveys not lead forms, summary — [Villar, Callegaro and Yang](https://research.google/pubs/where-am-i-a-meta-analysis-of-experiments-on-the-effects-of-progress-indicators-for-web-surveys/)
- GoodUI's best case for patterns: 36 of 51 pattern-driven tests ended positive (71%), but scored as positive or negative at stopping rather than as significant wins. The author notes a small sample and low power, and sells access. [B/D], about 2018 — [GoodUI](https://goodui.org/blog/can-winning-a-b-tests-be-predicted-with-past-results/)
- The replication project's own planning document says many pattern pages rest on small tests, for example a pattern whose largest test had 12K visits and p = 0.09. Summary — [pre-registration document](https://www.socialscienceregistry.org/versions/286700/docs/version/file)
- Even a form-analytics vendor concedes neither form format consistently wins and tells readers to run their own test. [D], page updated Oct 2026 — [Zuko](https://zuko.io/blog/single-page-or-multi-step-form)

### Inferences
**Why tests fail to carry over (my synthesis of the above):**
1. Small tests that reach significance overstate the true effect, and those are the ones that get published.
2. Most changes truly do nothing, so a meaningful share of "wins" are false.
3. Audience and offer differ. A warm local searcher with a mosquito problem is not a cold ad click on a free ebook.
4. Page type differs. E-commerce product-page results are the bulk of the evidence, and a quote page has a different job.
5. Many cases change several things at once, so the winning ingredient is unknown (HubSpot itself notes one cited case changed the form layout too).
6. Metrics differ. Clicks, add-to-carts and form fills are stand-ins, and they are not sales.

**Answer to the owner's belief:**
- **Truly established:** most page changes have small or no effects; published lifts shrink on replication.
- **Well supported but not controlled:** phone forms finish less often than desktop forms (two large vendor datasets agree); faster pages do better (size disputed, and see the speed caveat in the first section).
- **Mostly vendor claims:** nearly every specific lift for form length, multi-step, phone field, price display, sticky bars, guarantees and testimonials.
- **No support found:** any "winning formula" or single layout for home services.
- What can honestly be copied is a checklist of low-risk basics, not a formula. Testing his own big changes is the only way to learn what works for his traffic, within the limits in the traffic section.

### Gaps
- I found no study comparing full layouts across many local service businesses. Absence in this search is not proof that none exists, and private agency data may hold some.
- "A/B Testing with Fat Tails" (Azevedo et al.), which addresses whether big swings beat small tweaks, was NOT DONE; the search did not return it.

## What is the measured effect of each element?

### Takeaway
Almost all element-level numbers come from single tests or vendors, with no home-service controlled tests found. The table above is the summary; this section holds the detail and sources.

### Cited Findings

**Form length**
- 11 to 4 fields: 5.4% to 11.9% (+120%), Imagescape, one company, reported secondhand. [B/D], old, summary — [lead-form roundup](https://medium.com/swlh/sales-lead-forms-choosing-the-optimal-size-according-to-the-research-results-6e080febfb37)
- Cutting fields usually helps "but it's not always the case", from a 2013 summary of tests. [D], 2013, summary — [Online Marketing Institute](https://www.onlinemarketinginstitute.org/blog/2013/02/conversion-optimization-trends)
- Field count affects checkout usability far more than step count. Average 11.3 fields in 2024; most sites need about 8. 22% of users report abandoning over complexity. Checkouts, not lead forms. [D], usability research with method not read, 2024, summary — [Baymard](https://baymard.com/blog/checkout-flow-average-form-fields); [Baymard articles](https://baymard.com/checkout-usability/articles)
- Share of form starters who finish: enquiry forms 47.7% desktop, 37.7% mobile; comparison or quote forms 48.2% desktop, 44.9% mobile; all forms 54.5% desktop, 47.5% mobile. The table is labelled "overall conversion" while the page defines starter-to-completion separately; the all-forms figure matches Zuko's quoted starter-to-completion, so I read it that way. [C/D], undated — [Zuko](https://www.zuko.io/benchmarking/form-type-benchmarking)

**Field order**
- Nothing controlled found. NOT DONE beyond the general searches.

**Multi-step vs single-step**
- Multi-step +21.4% with 25,500+ visitors per variation, though the page calls the deviation very small. [B/D], Instapage sells this, undated, summary — [Instapage](https://instapage.com/blog/multi-step-form-part-2/)
- Vendio +214% leads; Conversion Fanatics found rates "fairly similar". [B/D], undated, summary — [FormKeep](https://blog.formkeep.com/should-you-use-single-step-or-multi-step-forms/)
- Zuko cites HubSpot's 86% figure with no sample, method or date, and notes up to 10% from saving inputs on back-navigation. Neither format consistently wins. It suggests single-step for 2-5 fields and multi-step for 6+, without data. [D] — [Zuko](https://zuko.io/blog/single-page-or-multi-step-form)
- It can lift or tank conversion depending on audience, offer and channels; high-intent visitors often convert better on one scannable form (opinion, no data). [D], summary — [Pedowitz Group](https://www.pedowitzgroup.com/measure-multi-step-vs.-single-step-form-impact?hsLang=en)
- Progress bars: a steady bar does not help, and a slow-to-fast bar hurts. [A], 2013, surveys, summary — [Villar et al.](https://research.google/pubs/where-am-i-a-meta-analysis-of-experiments-on-the-effects-of-progress-indicators-for-web-surveys/)

**Phone field**
- Removing an optional phone field: +77.1% at 98.4% confidence, on a Dallas Theological Seminary donation page. [B/D], undated, summary — [NextAfter](https://www.nextafter.com/?p=28979)
- Removal +75.1%, lead quality "did not appear to change", no sample or significance stated. [D], summary — [Conversion Fanatics](https://conversionfanatics.com/?p=324)
- Adding a phone field to an ebook form: -48%. [B/D], summary — [Vital Design](https://vitaldesign.com/phone-number-form-field-case-study/)
- 77.8% of phone numbers in 1,000 recent trial sign-ups were judged fake when required. This is a proposal text, not a test result, and it is SaaS. Summary — [GitLab issue](https://gitlab.com/gitlab-org/gitlab/-/issues/196799)
- Text-first contact: no controlled evidence found.

**Price or range before the form**
- A/B/C test, about 22,000 visitors over 4 weeks at 95% significance, two "starting at" prices vs no price: the case-study title reports a 15% lift in lead conversion. Filtration products. [B/D], undated, summary — [Convert/iProspect](https://www.casestudies.com/company/convertcom/case-study/the-pricing-strategy-that-led-to-a-15-increase-in-conversion-rate-for-high-ticket-filtration-products)
- Software company, price next to the form: +100% form fills, no sample in the results, and one write-up labels it hypothetical. [D], summary — [VWO SafeSoft](https://vwo.com/blog/prominent-price-display-increases-leads-generated-by-100/)
- Home services: leads who saw a price range converted 18% more and closed 22% faster, with no test shown. [D], vendor, summary — [Dolead](https://www.dolead.com/growth-hub/plumbing-marketing-pre-framing-leads-eliminate-sales-friction-84068)

**Instant quote or calculator**
- No controlled test found in search. The results were vendor guidance only.

**Headline wording**
- Largest controlled set in existence: 32,487 tests, 150,817 arms, 538,272,878 assignments, Jan 2013-Apr 2015. Clicks only, no sales data. [A-like, one site], summary — [Upworthy Archive](https://pmc.ncbi.nlm.nih.gov/articles/PMC8329003)
- Analyses of it exist on [negative words](https://www.nature.com/articles/s41562-023-01538-4) and [language features](https://econpapers.repec.org/RePEc:inm:ormksc:v:44:y:2025:i:3:p:566-592). I could not read their effect sizes (see Gaps).

**Message match**
- Hoover Institution landing page congruence: 25.0% to 34.8% (+39.2%), 3,687 participants. Free-offer nonprofit. [B/D], summary — [NextAfter](https://www.nextafter.com/?p=11434)
- Financial company, aligned pages vs homepage: +63% at 99% confidence. [B/D], summary — [3Q Digital](https://www.casestudies.com/company/3q-digital/case-study/landing-page-destination-optimization-for-a-leading-financial-company)
- Matching headline to ad: +77%. [D], summary — [Mutiny](https://www.mutinyhq.com/playbooks/attentive-message-matching)
- A widely repeated 66% figure traces to agency case studies that sites copy from one another. [E], summary — [example](https://foundrycro.com/blog/google-ads-clicks-not-converting-2026/)
- No peer-reviewed study surfaced in the one search run.

**Reviews and testimonials**
- One extra Yelp star brought 5-9% more revenue, driven by independents, using the half-star rounding as a natural experiment. Seattle restaurants 2003-2009, published 2011, revised 2016. [C, quasi-experimental], summary — [Luca, HBS](https://econpapers.repec.org/RePEc:hbs:wpaper:12-016); a journalist [questioned its robustness](https://motherjones.com/kevin-drum/2011/10/breaking-good-reviews-are-good-business)
- Testimonials near the button +18%; 3 vs 12 testimonials no significant difference. No method shown. [D], summary — [Over The Top SEO](https://www.overthetopseo.com/?p=53463)
- GoodUI logs a test of video testimonials on a lead form page, but the result is paywalled. Summary — [GoodUI](https://www.goodui.org/tests/page10)

**Guarantee near the button**
- Money-back guarantee under add-to-cart: +30.33% on a health brand, no sample seen. [B/D], e-commerce, summary — [Blend Commerce](https://blendcommerce.com/blogs/ab-tests-shopify/30-33-increase-in-conversion-rate)
- A 30-day guarantee icon raised sign-ups; number not seen. [B/D], summary — [VWO](https://vwo.com/blog/adding-trust-badge-increases-sales/)
- "Average 29%" from guarantees, no method. [D], summary — [Over The Top SEO](https://www.overthetopseo.com/?p=53463)

**Sticky mobile call or quote bar**
- Sticky call to action was one of four patterns replicated at scale; all eight replications came in smaller than earlier claims. The sticky-specific number is unread. [A], 2026 — [Vermeer et al.](https://www.lukasvermeer.nl/publications/paper/2026/09/02/trustworthy-ab-patterns-and-the-winners-curse.html). The project describes that pattern as a sticky add-to-cart on product pages, so it is not a call bar. [Summary](https://goodui.org/coaching/)
- Sticky button on mobile after scrolling past the sales form: minimum lift 8%, headline 25% more sales. [B/D], summary — [Conversion Rate Experts](https://conversion-rate-experts.com/sticky-cta-win-report/)
- Sticky mobile button: +122% alert clicks (clicks, not leads). [B/D], summary — [AB Tasty/Foncia](https://www.casestudies.com/company/ab-tasty/case-study/turning-call-to-action-buttons-sticky-on-mobile)
- Healthcare lead-gen: sticky bar on desktop only, combined +42.32% form submissions, so no mobile answer. [B/D], summary — [Convertica](https://convertica.org/lead-gen-assisted-living-conversion-optimization/)

**Click-to-call vs form**
- Mixed-CTA pages (clicks, forms and calls) 4% vs 2.6% median in home improvement. [C/D] — [Unbounce](https://unbounce.com/industry/home-improvement/)
- 46% of home-service phone leads convert (call to booking, a later stage than visit to lead, so not comparable with form rates). [D], 2025, summary — [Invoca](https://www.invoca.com/report/the-invoca-call-conversion-benchmarks-report-home-services-2025); [trade coverage](https://www.pmmag.com/articles/print/106597-home-services-call-performance-report-46-lead-conversion-rate-segment-benchmarks)
- No controlled call-vs-form test found.

**Video**
- No controlled test from a reputable source could be pinned. See Gaps for the figures I rejected.

**Page length**
- Word count correlates at -18.6% with conversion and reading time at -19.4%. [C/D], 2024 — [Unbounce](https://unbounce.com/conversion-benchmark-report/)
- Pest control pages convert best at 400-500 words, HVAC under 200, general home services around 300. [C/D], probably 2018-19 data — [Unbounce](https://unbounce.com/industry/home-improvement/); [Unbounce 2020](https://unbounce.com/conversion-benchmark-report-2020/)

**Removing navigation (attention ratio)**
- Removing top nav, footer and social links on 5 pages: 0-4% top-of-funnel, 16% and 28% mid-funnel. No sample, duration or significance stated. [B/D], HubSpot sells landing pages — [HubSpot](https://blog.hubspot.com/marketing/landing-page-navigation-ht)
- Same post cites Yuppiechef 3% to 6%, Career Point College +336% (form layout also changed) and SparkPage 9.2% to 17.6% (month-long test, no stated controls). [D], confounded or unverified — [HubSpot](https://blog.hubspot.com/marketing/landing-page-navigation-ht)
- Nothing tests "attention ratio" as a metric. The search surfaced no controlled study of it. [E]

**Page speed**
- Lead-gen sites, each 0.1 s improvement: home to form step 1 +5.5%, form step 1 to submission +21.6%, page views +7%. Retail conversion +8.4%, travel +10.1%. Every page in the journey had to improve all four metrics. Commissioned by Google. [C/D], end of 2019 — [web.dev](https://web.dev/case-studies/milliseconds-make-millions). A secondary source also quotes an 8.3% bounce-rate figure that is [not on Google's page](https://www.seozoom.com/?p=4559).
- Page performance was among the patterns in the eight replications; the group result was "substantially smaller than claimed". [A], 2026 — [Vermeer et al.](https://www.lukasvermeer.nl/publications/paper/2026/09/02/trustworthy-ab-patterns-and-the-winners-curse.html). The plan's power calculation assumed about 1% revenue for a 250 ms slowdown (an assumption, not a result). Summary — [pre-registration](https://www.socialscienceregistry.org/versions/286700/docs/version/file)

**Reading level**
- Grade 5-7 copy converts at 11.1%, 56% above grade 8-9, and professional-level copy at 5.3%. Difficult words correlate at -24.3%. Financial services is an exception. Unbounce calls it a strong correlation. [C/D], 2024 — [Unbounce](https://unbounce.com/conversion-benchmark-report/)

### Inferences
- The Google speed study's +21.6% is too big to read as cause. Sites and hours with faster loads probably also differ in other ways, and the page does not say how the study handled that. The direction is believable; the size is not.
- For reading level, confounding is likely too: simple offers need simple words and also convert better. Plain wording is still free and low-risk, so nothing is lost by following it.
- Price evidence is thin. BuzzSkito has pricing pages and a "From $99" price (project notes, `CLAUDE.md`), so the live question is probably how visible the price is near the form, not whether to publish one. I did not check the live pages.
- BuzzSkito's service pages already keep the phone bar under project rules and carry no ads (`CLAUDE.md`). Nothing here gives a reason to remove the bar, and nothing proves how much it adds.

### Gaps
- Headline effect sizes: the [registered report on headline language](https://pmc.ncbi.nlm.nih.gov/articles/PMC10038272/) hit a cookie wall and the Nature paper's figure was not confirmed. NOT DONE.
- Rejected listicle figures: a vendor blog in the search results pairs an "86% lift" for multi-step with "13.85% vs 4.53%", which is +206% by my arithmetic, not +86%, so at least one number is wrong (page not pinned). "+86% from video" has no traceable origin (page not pinned). Do not use either.
- A Data36 test (1,500-word page vs 4,000-word page: +96% for long) and a product-page video test (2.54% vs 2.37%, beaten by a 3D image at 3.17%) appeared in search summaries, but I could not pin the page. Treat as unverified.
- A blog critique of the Villar meta-analysis' coding surfaced in search; I did not read it.
- Field order, text-first, instant quote: no controlled results. Portent's speed study was NOT DONE.

## What are honest benchmarks for home services on phones, by traffic source, and how credible is a 1-in-3 rate?

### Takeaway
A credible paid benchmark for home services is roughly 3-8% typical, with the upper tail in the teens to about 20%. No trustworthy organic benchmark was found. A 1-in-3 rate across all visits is not credible for a quote form, and BuzzSkito's 10-16% already looks strong, though its filtered denominator makes it not like-for-like.

### Cited Findings

**Paid landing pages**
- Home improvement landing pages: median 2.6%, "top performers" 19.5%, on 4,372 pages. The cross-industry baseline it shows, 3.2%, matches the 2020 report, so this is probably Oct 2018-Oct 2019 data, pre-COVID. [C/D] — [Unbounce](https://unbounce.com/industry/home-improvement/); [Unbounce 2020](https://unbounce.com/conversion-benchmark-report-2020/)
- "Top 25%" in that method means the median of the top quarter of pages, so about the top 12.5% mark, not the entry level of the top quarter. Pages with under 500 visitors or no conversions were excluded. Method [C/D] — [Unbounce methodology](https://unbounce.com/industry/methodology/)
- An earlier report gave a 3.3% median for home improvement. [C/D], older, summary — [ProRemodeler](https://www.proremodeler.com/keep-it-simple-stupid-trick-converting-online-leads)
- All-industry median 6.6%, 2024. Top-quartile median 25% in the 2020 report. [C/D] — [Unbounce 2024](https://unbounce.com/conversion-benchmark-report/); [Unbounce 2020](https://unbounce.com/conversion-benchmark-report-2020/)
- Google Ads, home and home improvement search: 7.33% in 2025, down about 15% year over year; 8.05% for Apr 2025-Mar 2026 with $90.92 cost per lead; all-industry 7.52%, though [another outlet reports 8.18%](https://www.shopifreaks.com/google-ads-cpcs-rose-to-5-42-in-2025-with-87-of-industries-seeing-increases-but-conversion-rates-climbed-to-8-18-as-automation-improves/). A contractor article gives 10.22% for the vertical, an unverified outlier. [C/D], summary; primary blocked — [WordStream](https://www.wordstream.com/blog/conversion-rate-benchmarks); [contractor article](https://pipeline-marketing.pages.dev/blog/google-ads-for-contractors-statistics/)
- Top performers up to 21.7% in professional services (not home services), average 9.3%. [C/D], summary — [Ruler Analytics](https://www.ruleranalytics.com/wp-content/uploads/professional-services-conversion-benchmark-report-ruler-analytics.pdf)

**Organic website pages**
- Only weak sources: one plumbing guide lists organic search at 15-20%, and a contractor site calls 5-8% good when all conversion types are counted. [E/D], summary, both unverified — [OnePath](https://onepath.ai/blog/plumbing-conversion-rates-ultimate-guide); [ProPage](https://propage-ai.pages.dev/resources/good-conversion-rate-contractor-websites/)

**Phones**
- 83% of visits on Unbounce pages are mobile, and desktop converts 8% higher. [C/D], 2024, all industries — [Unbounce](https://unbounce.com/conversion-benchmark-report/)
- On enquiry forms, 37.7% of mobile starters finish vs 47.7% on desktop, about a fifth fewer. On comparison/quote forms 44.9% vs 48.2%. Desktop beats mobile in every industry except gambling. [C/D], undated — [Zuko forms](https://www.zuko.io/benchmarking/form-type-benchmarking); [Zuko industries](https://www.zuko.io/benchmarking/industry-benchmarking)

**High rates that exist**
- 34.8% on a free-offer nonprofit landing page, a low-commitment action. [B/D] — [NextAfter](https://www.nextafter.com/?p=11434)
- Click-through pages "convert best for many industries", and the report counts them alongside forms without defining how, so some benchmark "conversions" may be button clicks. [C/D] — [Unbounce 2020](https://unbounce.com/conversion-benchmark-report-2020/)

### Inferences
**How credible is 1 in 3?**
- From BuzzSkito's rate it would take +156% from 13%, +108% from 16%, or +233% from 10% (my arithmetic). Published single-test wins that large exist, but the replication record says to distrust them.
- The form itself caps the rate. With 45% of phone starters finishing (Zuko quote-type forms), a 33% visit-to-lead rate needs about 74% of all phone visitors to start the form. Even at 75% finishing, 44% must start. That can be true for a page visited mainly by people already looking to buy, and is hard to believe for all visits to service pages.
- So a 1-in-3 claim is credible only for a narrow slice: a single peak-week page, brand-search or tightly matched ad traffic, low-commitment offers, or a count that includes clicks. It should not be used as a season target for all service-page traffic.

**Where BuzzSkito stands**
- Its 10-16% sits well above the home improvement median and below the 19.5% figure. It is flattered by a filtered denominator (local visits only, peak season, partly brand searches), while benchmarks count all visitors to ad pages, mostly cold. The two are not the same measure.
- A sensible working goal is a sustained rate in the high teens to about 20%, if "lead" stays defined the same way. This is judgement, not a sourced benchmark.
- Before any comparison, BuzzSkito should state whether its "lead" counts calls and texts as well as forms and whether "visits" are sessions or people, because the benchmarks differ on both.

### Gaps
- No credible dataset gives visitor-to-lead rate for home services on phones by traffic source. This is the core question and it remains unanswered; every figure above is borrowed or mixed.
- Unverified percentile figures seen only in a search summary with the page not pinned: Unbounce home improvement 2017 at 25th percentile 1.4%, median 3.3%, 75th 6.9%, 90th 11.7%; and a top-25% figure of 7.4%+ attributed to a 2023 report. If true, 1-in-3 would be far past the top decile of that era. A home-service landing page average of 7-8.5% from a 2026 agency report was also unpinned.
- WordStream's classic "top 25% 5.31%, top 10% 11.45%" figures could not be checked because its blog returned 403. They come from my memory, so do not quote them without verification.
- CallRail's "calls are over 52% of home-service conversions" was seen only secondhand and is not traced.
- Sample sizes for Invoca, LocaliQ and Ruler were not seen.

## What is known about lead quality when forms get easier?

### Takeaway
I found no published study linking a form change to closed sales that shows lead volume up and sales down. The trade-off is widely asserted and logically plausible, but it remains unmeasured in public, so BuzzSkito must measure it itself.

### Cited Findings
- Removing fields raises conversion but can lower lead quality, and a lift means little if the leads do not sell. Practitioner statement, no data. [D], summary — [Leadgen Economy](https://www.leadgen-economy.com/blog/ab-testing-lead-forms-guide/)
- Multi-step may raise submissions while producing fewer sales-ready leads. Statement, no data. [D], summary — [Pedowitz Group](https://www.pedowitzgroup.com/measure-multi-step-vs.-single-step-form-impact?hsLang=en)
- Opposite claim: multi-step often raises completion without hurting quality. [D], form vendor, summary — [Reform](https://www.reform.app/blog/ab-test-multi-step-forms)
- Removing a phone field: quality "did not appear to change", with no data shown. [D], summary — [Conversion Fanatics](https://conversionfanatics.com/?p=324)
- Required phone may yield junk: 77.8% of numbers in 1,000 trial sign-ups were judged fake. Proposal text, SaaS, not a test. Summary — [GitLab issue](https://gitlab.com/gitlab-org/gitlab/-/issues/196799)
- Even with a median of 2.4M users per test, replication authors could not get enough power for revenue per user or purchase rate and fell back on clicks and add-to-carts. [A], 2026 — [Vermeer et al.](https://www.lukasvermeer.nl/publications/paper/2026/09/02/trustworthy-ab-patterns-and-the-winners-curse.html)

### Inferences
- The absence of public studies is partly a measurement problem: if millions of users cannot power a sales metric, almost no one publishes one for leads. It should not be read as "no trade-off exists".
- Simple break-even: a form change that lifts leads by 30% is wiped out if the close rate falls by 23% (1 ÷ 1.30). A 50% lift is wiped out by a 33% fall. BuzzSkito should score any form change on booked season plans per visit, not leads per visit.
- Its Hub already has win/loss tracking with a lost-reason dropdown (project notes, `CLAUDE.md`), so tagging each lead with the form version would give the numbers. They will be directional, not proof (see next section).
- The likely direction differs by change. Removing a field that nobody uses should cost little quality. Removing the phone field may cost more, because a call is how quotes get closed in this business. That is reasoning, not evidence.

### Gaps
- I ran two searches on this and found only vendor material. Academic work on lead quality may exist under other terms (for example, lead ads vs landing pages). NOT DONE.
- MECLABS may have friction-and-quality tests, but its site did not surface in search.

## How much traffic is needed to test each kind of change at about 1,600 visits, and what can a small business learn?

### Takeaway
At 1,600 visits split in two, a standard test can only reliably detect a lift of about +39% (13% to 18%). Small changes are untestable, so BuzzSkito should adopt low-risk basics outright, test only big swings, and decide by best-guess rather than by statistical significance.

### Cited Findings
- Tactical tests can be treated as a trade-off between lost customers during the test and the cost of rolling out the wrong version. Standard significance sample sizes reduce profit, and profit-maximizing samples scale with the square root of the available population, so the approach suits small audiences. Formula per arm: n* = √((N/4)(s/σ)² + ((3/4)(s/σ)²)²) − (3/4)(s/σ)². Its web example at N = 100,000 used 2,284 per arm against 18,468 for a standard test and gained about 476 more conversions, accepting about 10% wrong rollouts. The authors say tests that never reach significance can still raise expected profit when N is limited, and that results depend on the priors. [Peer-reviewed method], Marketing Science 2019 — [Feit and Berman](https://ar5iv.arxiv.org/html/1811.00457)
- About one in five significant results is false, and the authors recommend two-stage designs with multiple variations. [A], 2022 — [Berman and Van den Bulte](https://econpapers.repec.org/RePEc:inm:ormnsc:v:68:y:2022:i:9:p:6762-6782)
- The median company on one testing platform runs 34 experiments a year; four-variation tests are said to give 3.5x the expected impact. [D], vendor with a stake in more testing — [Optimizely](https://www.optimizely.com/insights/top-10-takeaways-from-running-127000-experiments)
- The authors of the replications attribute inflated claims to tests under 50% power. [A], 2026 — [Vermeer et al.](https://www.lukasvermeer.nl/publications/paper/2026/09/02/trustworthy-ab-patterns-and-the-winners-curse.html)

### Inferences
All numbers below are my calculations: two proportions, two-sided 5% significance, 80% power, equal split, normal approximation. "Seasons" assumes 1,600 visits per season and does not count later months.

**Detectable lift on a 1,600-visit test (800 per version):**

| Baseline lead rate | Smallest lift detected | As a rate |
|---|---|---|
| 10% | +46% | 10% to 14.6% |
| 13% | +39% | 13% to 18.1% |
| 16% | +34% | 16% to 21.5% |
| 5% (illustrative paid customers per visit; 40% close rate is my assumption) | +70% | 5% to 8.5% |

**Visits needed at a 13% baseline, by kind of change.** The "plausible lift" column is judgement, not a sourced figure.

| Kind of change | Plausible true lift | Total visits needed | Seasons | Chance a 1,600-visit test catches it | If it does reach significance, it will look |
|---|---|---|---|---|---|
| Button styling, small wording | +3% | 236,418 | 148 | 6% | about 10x too big |
| Testimonial placement, guarantee, headline tweak | +5% | 85,816 | 54 | 7% | about 6x too big |
| Same, if stronger | +10% | 21,890 | 14 | 12% | about 3.2x too big |
| Cutting fields, price shown, phone optional | +20% | 5,684 | 3.6 | 32% | about 1.8x too big |
| Same, if stronger | +30% | 2,618 | 1.6 | 59% | about 1.3x too big |
| New flow (instant price instead of form) | +50% | 1,004 | 0.6 | 94% | about right |
| Very large change | +100% | 284 | 0.2 | 100% | about right |

**Whether a change lifts paying customers (illustrative 5% baseline):** +30% needs 7,556 visits (4.7 seasons); +50% needs 2,936 (1.8 seasons). Sales cannot be proven within one season except for huge effects.

**Other limits:**
- A single season's rate is itself uncertain: 13% on 1,600 visits is ±1.65 points (about 11.4% to 14.6%). Year-on-year moves smaller than that may be noise.
- Before-and-after comparisons are unsafe: the site's leads per 1,000 sessions were 40 in May and 0.3 in September (project memory, `feedback_season_data.md`). Versions must run at the same time, with visitors randomly assigned.
- Four-way tests are out: 400 visits per version can only detect about +56%. Optimizely's multi-variation advice and Berman's two-stage designs need far more traffic than this.

**Decide-by-best-guess approach (Feit and Berman formula, 13% baseline, N = 1,600, s = 0.336).** σ is how far a version's true rate usually sits from the average, and it is unknown here, so several values are shown. The chance of picking the better version is my derivation from the same assumptions; it reproduces the paper's roughly 10% error on its web example.

| Assumed σ | Visits per version | Total test visits | Chance of picking the better version | Visits left for the winner |
|---|---|---|---|---|
| 1 point | 234 | 468 | 64% | 1,132 |
| 2 points | 186 | 372 | 72% | 1,228 |
| 3 points | 149 | 298 | 76% | 1,302 |
| 5 points | 105 | 210 | 82% | 1,390 |

This gives no proof of anything. It is a sensible way to spend a limited season: test for about 1-3 weeks in May-June (1,600 visits over those two months is roughly 180 a week), keep the leader, and accept being wrong about a quarter of the time, since a wrong call costs little when the versions are close. At σ = 1 point the paper's regret condition (N > 4(s/σ)²) is not met, so that row is less reliable.

**What a small business can actually learn:**
1. Whether one big change is much better or much worse, roughly one per season.
2. Where people quit, from field-level form analytics and session recordings. This needs no split and few visits, and it shows problems rather than estimates effects.
3. Why people hesitate, from a handful of real phone-user sessions and from asking leads what nearly stopped them. The call and win/loss records already exist.
4. Whether close rate moved sharply after a change, by tagging leads with the form version.

**What it cannot learn:** the effect of a headline, testimonial placement, guarantee wording or button change; whether a small lift in leads turned into sales; or anything that holds across future seasons from one test. Results from May-June may also not apply to other months. Paid traffic could enlarge the sample, but paid visitors may behave differently from organic ones.

### Gaps
- Real values for σ on local quote pages do not exist in anything I read. The table's rows are assumptions, so a test plan should say so plainly.
- BuzzSkito's real lead-to-sale rate was not in my brief. The 40% used for the 5% baseline is illustrative and should be replaced with Hub data.
- Multi-season pooling (combining 2027 and 2028 seasons) was not assessed, and seasons may differ enough to weaken it.
