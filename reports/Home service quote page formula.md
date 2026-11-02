# The quote page formula: what to copy, what to test

**Verdict:** nobody has a proven winning layout for a mosquito company. The large studies show results rarely carry from one site to another, and none of the 18 leading brands I checked publishes a conversion rate. So there's no formula to copy with proof behind it. What does exist is a sensible default that the experts and leaders mostly agree on. Your pages already have much of it, and you're ahead of them in places. The plan is to fix what's clearly broken, adopt the low-risk pieces, and test one big idea next season.

All your rates are from the 2026 season or later, and today's layouts have never run through a spring.

## Why there's no single winner

- **Most tests don't win.** [Optimizely's tally](https://www.optimizely.com/insights/top-10-takeaways-from-running-127000-experiments) of about 127,000 tests found 12% won. It sells testing software.
- **Many effects are zero.** [One independent study](https://econpapers.repec.org/RePEc:inm:ormnsc:v:68:y:2022:i:9:p:6762-6782) of 2,766 experiments estimated about 70% of effects are truly zero, and about 1 in 5 "winners" are false.
- **Famous lifts shrink.** [Eight large repeat tests](https://www.lukasvermeer.nl/publications/paper/2026/09/02/trustworthy-ab-patterns-and-the-winners-curse.html) all came in smaller than claimed, and one went the wrong way.
- **Home services:** I found no study comparing whole layouts. The one split test with raw counts is a vendor's: [Fox Pest Control's text widget](../research_notes/Home%20service%20quote%20page%20formula/competitor_page_teardown.md), 298 leads against 99, with no close rates.
- **1 in 3 across all visits isn't credible.** At typical phone completion rates, about 74% of phone visitors would have to start the form. Your 10-16% is already strong: Unbounce's home improvement figures are [2.6% at the median and 19.5% at the top](https://unbounce.com/industry/home-improvement/), though they count differently.

## What Hormozi actually says

His one home-service page rewrite I could read is [Ep 971](https://podscripts.co/podcasts/the-game-with-alex-hormozi/watch-this-if-you-own-a-service-business-ep-971), for an HVAC cleaning company's ad page:

- A named free offer and the town in the headline. He says changing "free estimate" to "18-point inspection" worked, with no numbers.
- Phone number at the top and near the form, with the form below the offer.
- No site navigation and a small logo. Locations on the page, and FAQs only if the common questions are known.

It rests on his experience, and the page was for paid ads. He says nothing there about showing price or adding reviews. **So the price-first design I showed you was my idea, not his.** Peers disagree too: Sabri Suby wants long pages with price after the value stack, and Hormozi's is short.

## How you compare with 18 leading brands

| | Leaders | You |
|---|---|---|
| Form fields | Median 6 | 5 |
| Plan prices shown | 0 of 18 | Yes |
| Text button on the first screen | None seen | Yes |
| Guarantee | 18 of 18 | Yes |
| Phone route on the first screen | 15 of 18 | Yes |
| Review count on the first screen | 6 of 18 | Yes |
| Named owner or licence on the first screen | None seen | Licence, on service pages |

Their offer-style pages (Aptive, Orkin, Mosquito Squad) do have a stronger offer, the form higher up and a shorter page, and that part is worth copying. I couldn't confirm any of them as real ad pages, and none proves it works.

## Fix or adopt now (no test needed)

| # | Change | Where | Why |
|---:|---|---|---|
| 1 | Make the submit button visible above the sticky bar | Quote page | It sits behind the bar on an 812 px phone |
| 2 | Show the headline right away and the button above the bar | Homepage | In a test browser only a photo showed for 4+ seconds, so **check your own phone** |
| 3 | Speed up the hero photo | Homepage | About 9.6 s to load on simulated slow 4G, one run |
| 4 | Put the same-day line on the first screen | Service and city pages | Now 5-16 screens down |
| 5 | Review line above the headline | All service pages | Aptive and Mosquito Joe do this. It's cheap |
| 6 | Headline: a named real offer plus the city | Quote and city pages | Hormozi's one concrete fix. Only if the checks are real |
| 7 | One plan offer paid in sprays, with a real deadline | First screen | Same shape as [Mosquito Squad's offer](https://www.mosquitosquad.com/services/free-treatment/). About $16 in product for two sprays |
| 8 | Remove the menu and footer links | Quote page only | Hormozi's advice, and Weed Man's quote flow. Evidence is thin, but the page's only job is the form |
| 9 | Plain words, about grade 5-7 | All service pages | [Unbounce](https://unbounce.com/industry/home-improvement/) correlation: 11.1% against 5.3%. Direction only |
| 10 | Quote every lead | Hub and your process | **The biggest one.** 32% of July and 50% of August leads never got a quote. Those never quoted bought at 4.0%, against 18.5% quoted (phone given) |
| 11 | Track properly: form errors by field, page version on each lead | GA4 and Hub | Right now we can't see which field fails |

Keep the sticky Call, Text and Get price bar, and keep your published prices, because nobody has shown hiding them helps. Don't cut the long city pages for this: they carry your search rankings.

**Below the first screen, in order:** reviews from that city, plans and prices, what we check and the three steps, guarantees, the common worries, then the button again.

## Test one big idea next season

Price first against today's form, by coin flip, from mid-April. At about 1,600 visits a season, only big changes can be seen:

| Lift | Extra leads on 400 | Revenue | Visits to read by quote requests | Visits to read by paying customers |
|---:|---:|---:|---:|---:|
| +25% | 100 | CA$9,000-15,500 | 2,888-5,007 | 22,903-64,313 |
| +50% | 200 | CA$18,000-31,000 | 777-1,365 | 6,336-17,839 |
| +100% | 400 | CA$36,000-62,100 | 215-392 | 1,883-5,334 |

So one season can read a big lift in quote requests, but not paying customers unless the lift is huge. Revenue assumes CA$1,031 a customer at your 8.7-15% close rates. Keep watching lead quality, because a +30% lift is wiped out if the close rate falls 23%. Popup leads closed at 6.2% against 14.8% from the form, so easier isn't always better. There's no controlled evidence for instant quotes anywhere, which is why it's a test.

## Skip

- Testing button colours, headline wording or testimonial placement. The effects can't be seen at your traffic.
- Countdown timers and fake scarcity. No evidence, and a real deadline does the job.
- Video on the quote page. I found no support for it.
- A separate ad page, unless you run ads. Then Hormozi's page is the template.

## Wording limits

Keep to the approved lines in `lib/constants.ts`: rain-back on every plan, Bite-Free on Standard and Exclusive only, the licence number, and "Most requests get a price the same day". Don't copy US pages' "safe", "eco" or "approved" wording, because Health Canada's directive bars those in pesticide advertising. A qualified person should confirm how the directive applies to a service company. Mosquito Man uses "safe and effective", and that isn't a reason to copy it.

## Where the page isn't the limit

- **Traffic:** `/mosquito-control` and `/tick-control` had only 48 Ontario landing sessions in season.
- **Timing:** homepage form starts fell from 27.8 per 100 in April to 6.3 in July, so the page has to be right by April.
- **Calls:** about a third of real spring leads started with a phone call.
- **Capacity:** at 5 stops a day, one van fills at about 60 bi-weekly customers. Your stops-per-day number decides how many more leads you can serve.

## What this research could not see

Hormozi's books were not read, only free episodes and summaries. His Mint Mobile page critique and Mello's and Goodrich's own words on websites were not reachable. About half the study figures came from search summaries, so check them before quoting. No page here is a confirmed paid-ad page. The audit used an emulated phone in a pane that may have been hidden, so the homepage timing needs your phone. The audit added about 25 page views and 4 form starts to GA4 on Nov 1, and no form was submitted.

Notes: `research_notes/Home service quote page formula/`.
