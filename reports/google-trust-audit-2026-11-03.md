# Making Google trust buzzskito.ca: audit and clean-up (Nov 3, 2026)

## Update, Nov 3 evening: your answers and what changed

**Your answers, and what they meant for the site:**
- **Customer quotes are all real:** unchanged.
- **"Alex Francisco" is your public name, and Nick is the other co-owner:** bylines unchanged. The one "one owner (Alex Francisco)" line now says two co-owners.
- **The ~330 older articles were written with AI help, and you don't want a label:** unchanged. Neither Google nor Mediavine's written policy requires one. Mediavine's sentence covers "low-quality, mass-produced, unedited or undisclosed AI content that is scraped from other websites".
- **The equipment and scale claims are true:** unchanged.
- **Durham Region is not served:** fixed (item 2 below).

**Done and live (commit `c310c32c`):**
1. **50 template location pages are out of Google's index but still on the site.** They are marked "noindex, follow", taken out of the sitemap and llms.txt, and still linked from `/service-areas`.
   - 17 "pest control [city]" pages. North York and Etobicoke stay in: they have their own writing and 25 clicks this season.
   - 33 neighbourhood pages with under 50 impressions and 0 clicks this season, including Summerhill, which Google never indexed.
2. **Ajax and Pickering pages removed.** Both now redirect to `/service-areas`. The Scarborough, Ontario and history pages say the area ends at Scarborough. The yard-risk and Lyme tools treat Ajax and Pickering addresses as outside the area.
3. **"One owner" now reads "two co-owners".**

**Search Console, checked in your browser:**
- Manual actions: none. Security issues: none.
- Both sitemaps: Success (790 and 375 pages).
- The Ad Experience Report page and its help page now return "not found", so there is nothing to check there.
- **One thing for you:** a robot account named `indexing-api` (`indexing-api@buzzskito-gsc-reader.iam.gserviceaccount.com`) still has **Owner** access. Its key was never added to Vercel, so it never sent anything to Google.
  - To remove it: Search Console → Settings → Users and permissions → the ⋮ next to "indexing-api" → Remove access.
  - Don't delete the Google Cloud project "buzzskito-gsc-reader": it also holds the connection Claude uses to read your Search Console data.

**Still open from the nine decisions below:**
- 3: the "best companies" city copies.
- 4: release pace (the new traffic research covers this).
- 5: human review.
- 6: the 9.1/10 scores.
- 7: the star-rating markup.
- 8: the Mediavine docked video.

## The short answer

- **The technical side is clean.**
  - All 5,456 Amazon links are labelled as paid links.
  - No page hides text or shows Google something different from visitors.
  - Canonicals, US/Canada pairs and both sitemaps are correct.
- **The risks are in what some pages claim and how many look alike.**
  - These are the things Google's 2025-2026 updates punished.
  - They are also the most likely reason AdSense answered "low value content".
- **What I did today:** fixed everything that was safe to fix (below).
- **What needs you:**
  - six questions only you can answer;
  - nine decisions, each with my recommendation.

## Fixed today

1. **Google Indexing API removed.**
   - A build step would have sent about 190 article addresses to Google's Indexing API on every deploy, as soon as a key was added.
   - Google allows that tool only for job and livestream pages and treats misuse as spam.
2. **Misleading "how our service works" markup removed from 124 pages.**
   - It described our spray service as step-by-step instructions for the reader.
   - Google stopped showing this kind of result in 2023, so we lose nothing.
3. **Three false "we tested" sentences corrected.** They covered the Katchy trap, the Victor mouse trap and the Goodnature A24. Our own Katchy review says "No trap was tested".
4. **Guide box wording.** The 48 guide pages that showed "Written by a mosquito and tick control company" now say "Published by", matching their note that AI helped draft them.
5. **Link and markup tidy-up.**
   - The footer's two "near me" links no longer go through a redirect on every page.
   - One redirect chain is collapsed.
   - The 2026 GTA report's markup names its real address.
6. **Duplicate pages merged** (earlier today): ant traps into best ant killer, and basement dehumidifiers into the large-capacity guide.
7. **US "bed bug bites" page moved** from Nov 11 to Nov 24, so its pairing can't disturb the title test that ends Nov 23.

## Six questions only you can answer

1. **Customer quotes on the city pages.** Are they real customers?
   - There are 66 quotes from 19 names on 25 city pages.
   - The same name appears in different neighbourhoods: Raj P. in Springdale and in Castlemore, Greg W. in Aldershot and in Headon Forest.
   - The same James K. and Priya R. quotes repeat on 14-16 tick pages.
   - Only three are marked as word-for-word Google reviews: Katharine M., Anthony and Matt Santos.
   - Why it matters:
     - Google added a rule against fake reviews in July 2026.
     - Canada's Competition Act forbids testimonials that aren't genuine.
   - **My recommendation:** replace every quote we can't match to a real review with real Google reviews, quoted exactly, or remove it.
2. **"Alex Francisco": is that the name you use publicly** (Google Business Profile, invoices, press)?
   - The site says "one owner (Alex Francisco)".
   - Press coverage noted in the repo quotes "Nick Dudlak, co-owner".
   - Google warned against made-up author names in October 2026.
3. **Who writes the ~330 hand-written articles?**
   - They are credited "By Alex and The Mosquito Team" (304 pages), and the markup names Alex Francisco as author on 363 pages.
   - The repo history shows 571 of 606 blog files were added with AI help, and those pages say nothing about how they were made.
   - The 255 newer guides already handle this honestly.
4. **Which equipment does your crew actually use?**
   - 31 product pages say "This is the gear we actually run", including sump pumps, dehumidifiers, patio heaters, gazebos, foggers and a leaf blower. The site also says you use barrier spray, not fogging.
   - 119 pages say "nobody else in Canada was testing this gear properly".
5. **Are these claims true?**
   - "Our technicians" (41 pages; you have one technician).
   - "200+ property assessments since 2024".
   - "ATV-mounted units".
   - "Every visit documented with a written service log by SMS".
   - "Personalized report written by Alex, emailed within 60 seconds".
6. **Do you serve Ajax, Pickering and Whitby (Durham Region)?** The Ajax page says you do; your service-area list doesn't include them.

## Nine decisions (my recommendation first)

1. **The 19 "pest control [city]" pages.**
   - They are about 85-90% the same text with the city name swapped.
   - They target a service you don't offer (general pest control).
   - They got about 70 clicks between them all season.
   - This is Google's own example of "doorway pages".
   - **Recommend:** remove them from Google's index now (they stay on the site for anyone who has the link), or merge them into `/pest-control-gta`.
2. **The 61 neighbourhood pages.**
   - They are 60-71% the same template.
   - They got about 20 clicks between them all season, and Google already refuses to index 6 of them.
   - **Recommend:**
     - Remove the 32 with no traffic from Google's index now.
     - Over the winter, fold the rest into their city pages, or give them real local proof: job photos and reviews from that area.
3. **The 13 "best mosquito control companies" pages that rank BuzzSkito #1.**
   - They carry a "Factual & Honest Comparison" badge and are linked from the footer of every page.
   - Self-ranking lists lost rankings in Google's early-2026 updates.
   - **Recommend:** keep one page, clearly labelled as BuzzSkito's own comparison. Remove the city copies from Google's index, or merge them into that page.
4. **Slow down new pages.**
   - 545 of our 790 pages were added since July, 262 of them in October alone.
   - Google says speed alone isn't spam. But mass-produced pages without human review is the pattern that collapsed in 2025-2026, and it matches the AdSense verdict.
   - **Recommend:**
     - At most 20-25 new pages a week, never more than 10 in a day.
     - Hold the remaining 82 state and province pages until spring.
     - Keep the top-100 build paused.
     - Add a build check that blocks near-duplicate pages.
   - This answers your open question on pausing new pages: yes, slow down.
5. **Human review of AI-drafted pages.**
   - Google now says AI-drafted content needs human fact-checking. Our guides say only a second AI pass checked them.
   - **Recommend:** you, or a paid expert, review the 20 most-visited pages first, then 5-10 a week. A page shows "Reviewed by Alex" only after you have actually read it.
6. **The "9.1/10 BuzzSkito rating" scores on about 260 pages.** Nothing explains how they are scored, and nothing was tested.
   - **Recommend:** remove the numbers, and keep labels like "Best overall".
7. **The star-rating markup** on the homepage and `/reviews` is built from your Google reviews.
   - Google's rules forbid this and never show it for a business's own site.
   - **Recommend:** remove the hidden markup. The visible "150 five-star Google reviews" stays.
8. **Mediavine on phones.**
   - The sticky ad plus the docked video can cover about 41% of an iPhone screen. Google's ad standard flags anything over 30%.
   - **Recommend:** ask Mediavine to turn off the mobile docked video. Your launch checklist already recommended this, and their 90-day set-up period means asking them first.
9. **Off-topic product pages** (sump pumps, nine dehumidifier pages, patio heaters, leaf blower, brush cutter).
   - **Recommend:** leave them for now and decide in spring, with season data.

## Three checks for you in Search Console (about 5 minutes)

1. **Security & Manual Actions → Manual actions** should say "No issues detected".
2. **The Ad Experience Report** (under Legacy tools, or search Google for "Ad Experience Report") should show no mobile problems.
3. **Only if you ever created a Google Cloud key for the "Indexing API":**
   - delete `GOOGLE_INDEXING_SERVICE_ACCOUNT_JSON` in Vercel;
   - remove that service account from Search Console users;
   - delete the key in Google Cloud.

## What is fine, so you don't worry about it

- **Amazon links:** all labelled as paid, on every page.
- **Same page for Google and visitors:** no hidden text, and the Singapore/China block shows Google the same page a visitor gets.
- **Indexing settings:** canonicals, US/Canada pairs and sitemaps are correct, and no internal link is broken.
- **State and province tick pages:** genuinely different from each other (about 5% shared wording).
- **Product pages:** not copies of each other.
- **Pages Google rarely shows:** almost all are seasonal service pages. Judge them next summer, not now.

## How we found this

Four independent checks on Nov 3:
- Google's current rules (spam policies, the 2025-2026 updates, AdSense's low-value reasons);
- the code and the markup Google reads;
- how alike page families are, measured on the built pages;
- traffic per page from Search Console, plus every byline and claim on the site.

Google's latest guidance (Oct 1-2, 2026) added warnings about deceptive authorship and about accuracy on health topics. No core update has run since May 2026; four spam updates ran this year.
