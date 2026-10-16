# Sites like bettertermite.com: who else grew, who collapsed, and what to copy

Written 2026-10-16. **Analysis only.** Nothing on our site was changed; this file is the only repo edit. Read it with `bettertermite-teardown.md` (method, hit rates by page type) and `path-to-50k.md` section 3 (the bigger comparables).

Sources: the Ahrefs API (estimates; traffic histories are all countries, top pages are US; **11,687 units used of the 15,000 allowed**, confirmed on the account's usage counter), the sites' live pages and sitemaps (read with a script, and in the built-in browser where a site blocked scripts), the Internet Archive's capture index, and Google's update dates (2023-2024 from Google's Search Status Dashboard, 2025-2026 as listed in the teardown). On our own site Ahrefs traffic lands within x0.8-1.4 of Search Console.

## Summary for the owner

**What I looked for.** Small pest companies or independent pest websites (US or Canada) whose Google traffic grew at least five-fold within a year in 2024-2026, starting from a weak domain (Domain Rating under about 25), mostly with "what is this bug" pages. Plus pest websites that collapsed.

**What I found**
- **Eight more sites that grew like bettertermite.** Four meet every condition: All U Need Pest Control (Florida), Romex Pest Control (Texas, Oklahoma, Louisiana), Healthy Home Pest Control (Georgia) and cockroachcare.com (a new website about cockroaches only). Two grew the same way from a very weak domain but mostly with question and how-to posts rather than identification: 1st Choice Pest Solutions (Wisconsin) and Pest Patrol PDX (Oregon). Two are near-misses I kept because they teach something: Presto-X (a brand owned by Rentokil, Domain Rating about 30) and pestcontrolcalifornia.us (a new referral website whose Domain Rating jumped to about 50 before it grew).
- **No Canadian site fits.** The Canadian pest companies that compete with us in Google (Poulin's, Environmental Pest Control) have been flat since 2024.
- **Four real collapses** (Pest Samurai, Pest Seek, Pest Pointers, What's That Bug), all starting with Google's September 2023 update. **Two of the "known collapses" were not collapses at all:** insectcop.net and peststrategies.com were bought and redirected into This Old House (May 2023) and Today's Homeowner (September 2023). path-to-50k caveat 4 should drop them.

**What the winners have in common, strongest first**
1. **Their best pages help someone name a common US household pest from what they see.** Droppings, eggs, babies, bites, "X vs Y", look-alikes. Across the 9 winners (bettertermite included): **a cockroach page is among the top pages of 8, a bite page of 7, an "X vs Y" page of 7, a droppings page of 5, a termite-signs page of 5.** Three of the four collapsed sites were built mostly on home remedies, "keep X away from Y" lists, endless "ants in [place]" variations and product roundups; the fourth (What's That Bug) was the original bug-ID site and lost its character when it was repurposed.
2. **Their winning pages have no links of their own.** 76 of the 79 top information pages I checked have 0-2 other websites linking to them. When they took off, 6 of the 7 whose history I pulled had **fewer** linking websites than we have today (29-217, against our 374), and 1st Choice had a Domain Rating of 3. **Links are probably not what holds us back most; our .ca domain and our topic mix matter more.**
3. **They published a lot in a short window, and traffic followed 1-4 months later.** Where dates could be read: about 200-700 new articles in 2-8 months (All U Need added 2,131 town pages in one month).
4. **They are written for the US** (every one is a .com or .us, with US species and US places).
5. **A real pest company stands behind 7 of the 9.** That does not predict growth (the two sites with no company grew fastest) but it goes with keeping it (next point).

**The new warning: fast growth often does not last.** Four of the eight new winners lost 59-79% of their peak within 3-7 months. The normal summer-to-fall drop for pest sites is 20-55%, cockroaches are a year-round topic, and two of the four fell in spring, so the season does not explain it.
- **cockroachcare.com, -69%:** a new website, every picture made by AI (one "droppings" picture shows droppings with legs), and an invented "Dr. Michael Turner, PhD" on an About page that ends with a "Final Note for Readers and Google".
- **pestcontrolcalifornia.us, -69%:** a new referral website, 455 city pages and 86 "best companies" lists added in about two months, photos copied from university sites, and a Domain Rating pushed from 14 to 49 in two months.
- **All U Need, -79%:** a real company with credentialed authors, but about 3,000 near-identical "service in [town]" pages. It fell with Google's March 2026 core update.
- **1st Choice, -59%:** short question posts (about 600 words) with AI pictures.

The five that held or are still rising (bettertermite, Presto-X, Romex, Pest Patrol PDX, Healthy Home) are all real, operating pest companies. The sample is small, so treat this as a pattern, not a law. bettertermite itself carries some of the fallers' habits and has lost 42% of its top-3 rankings since March.

**What this means for us.** The teardown's advice stands: identification page types, whole families, published fast but fact-checked, real photos with credits. The new evidence adds three things: **an order** (cockroaches, bites, droppings and termite signs first, because they win on almost every site), **one picture format we do not have** (labelled side-by-side comparison photos), and **a safer way to release** (family by family, with a 30-day check, and a firm "do not build" list taken from the sites that fell).

### The 5 most actionable changes (beyond the teardown's)

1. **Re-order the queue: cockroaches first, then bites, then droppings and termite signs.** Move `cockroach-droppings` and `rat-droppings` (both scheduled last, for Jan 4, 2027, and not yet written) into the November 16-23 batches. Add the cockroach pages that win on two or more of these sites and that we neither have nor plan: baby cockroach vs bed bug, cockroach eggs vs poop, white (albino) cockroach, wood roach vs German cockroach, roach droppings vs mouse droppings (or as a section of `cockroach-droppings`), German vs American cockroach (the taxonomy's `american-cockroaches` page can carry it); and check that `do-cockroaches-bite` answers "what does a cockroach bite look like" with photos (the search cockroachcare's #2 page ranks for). Finish the cockroach family by mid-December: it is year-round, so it also pays in Mediavine's Q4. Put the termite-signs pages (signs of termites, termite droppings, mud tubes, damage in walls and ceilings) live by early March, before swarm season. *Evidence: section 4.*
2. **Add a labelled comparison strip to the guide template.** Two to four credited photos side by side at the same scale, one label or arrow on the feature that tells them apart, one short caption each. Use it on every life-stage page (egg case, nymph, adult) and every look-alike or "vs" page. pestcontrolcalifornia's page that ranks **#1 for "baby roaches"** (about 30,000 US searches a month in Ahrefs) is built around six such images. Keep our licence rules: public-domain and CC0 photos can be labelled freely; CC BY needs the credit plus "modified"; a labelled CC BY-SA photo must itself be shared CC BY-SA. Never reuse university photos without permission (the California site printed Rutgers' source line on a copied photo). *Evidence: section 3, pestcontrolcalifornia.us.*
3. **Release the extra pages family by family, with a 30-day check and a "do not build" list.** After each family goes live, read its first 30 days of Search Console impressions before releasing more pages of the same type, and pause a page type whose first 10 pages get almost none. Do not build: US city or state service pages, "best pest control companies in X" lists, pest-by-room or pest-by-object variations without measured demand ("ants in laptop", "ants in hot tub"), AI images, invented experts, home-remedy and "keep X away from Y" lists. *Evidence: sections 3 and 5.*
4. **Keep a monthly "weather panel" of these nine sites.** One Ahrefs batch call a month (current traffic and top-3 keyword count, about 34 units a site, under 500 units for these nine plus five collapsed ones). After each Google update, it shows within weeks whether fast-published identification sites are rising or being hit, before our own pages show it, which tells us whether to speed up or slow the November-March burst. Every 2026 winner jumped in June 2026 (May core update plus season); the new ones fell after the August and September 2026 spam updates. *Evidence: sections 2 and 6.*
5. **Test five "method vs method" pages for US readers** (no products, no shop links, extension sources only): roach bombs vs gel bait, boric acid vs diatomaceous earth, snap traps vs glue traps, do ultrasonic repellers work, heat vs chemical bed bug treatment (US edition). pestcontrolcalifornia's #2 page is "roach bombs vs gel baits" (about 590 US visits a month), and bettertermite's best-mice-repellent page earns about 1,300. **Speculative:** only two sites support it, so test five and judge them at 60 days. Watch our regulatory rules (no efficacy or absolute-safety claims). *Evidence: section 3.*

---

## 1. The sites and their numbers

Ahrefs estimates, all countries, monthly. "Start" is the month before the climb. Referring domains are given at the start only: every one of these sites shows a jump in May and again in September 2026, at the same time, which looks like automated spam links or an Ahrefs counting change rather than link building (the teardown found the same on bettertermite).

| Site | What it is | Climb (visits a month) | Multiple | Oct 2026, change from peak | Domain Rating: start → now | Linking sites at start | Pages | Publishing before the climb | What carries the traffic |
|---|---|---|---|---|---|---|---|---|---|
| bettertermite.com (teardown) | family pest co., VA, since 1968 | 1,081 (Jun 2025) → 73,622 (Nov 2025); peak 105,715 (Jun 2026) | 68x in 5 months | 81,311, -23% | 14-26 → 24 | about 450 | 2,224 URLs, about 370 articles | about 220 posts in Jul-Aug 2025 | photo ID: droppings, babies, eggs, bites, bugs in a room, X vs Y |
| alluneedpest.com | pest co., Fort Myers FL and Houston | 1,136 (Jan 2024) → 9,494 (Oct 2024); 5,655 (Jan 2025) → 43,401 (Jul 2025) | 8x in 9 months, then 7.7x in 6 | 9,323, -79% | 15 → 32 | 102 | 3,344 URLs: 342 posts, 2,985 service-in-town pages | 2,131 service-in-town pages (Oct 2024), 704 more (Sep 2025) | baby cockroaches, rat vs lizard droppings, flea bites, maggots, stings, termite mud tubes; plus brand and town pages |
| 1stchoicepestsolutions.com | pest co., Eau Claire WI | 467 (Jun 2025) → 9,642 (Mar 2026) | 21x in 9 months | 3,990, -59% | 3.3 → 10 (peak 17) | 46 | 732 URLs, about 490 posts | about 200 posts, Sep 2025 - Apr 2026 | yes/no questions (do moles have eyes, do squirrels carry rabies) and bites, every title naming Wisconsin |
| romexpest.com | pest co., TX, OK, LA | 768 (Jan 2026) → 15,662 (Jul 2026) | 20x in 6 months | 9,572, -39% | 8-11 → 12 | 145-184 | not readable; 251 pages in the top 10 at peak | not readable | insect bite ID chart, chiggers, termite signs and cost, German cockroach ID, Oklahoma scorpions |
| pestpatrolpdx.com | pest co., Portland OR | 506 (Apr 2026) → 3,165 (Sep 2026); 19 in Jul 2024 | 6x in 5 months | 2,879, -9% (still near its high) | not pulled → 8 | not pulled | not readable | not readable | when are wasps least active, fruit fly vs drain fly, what attracts roaches, spiders in the house |
| healthyhomepestga.com | pest co., Acworth GA | 0 (Jan 2026) → 1,776 (Oct 2026) | 14x in 7 months (from Mar) | 1,776, still rising | not pulled → 14 | not pulled | not readable (server errors) | not readable | wolf spider vs brown recluse, small brown house spider, seed tick bites, termite signs, Georgia spiders and roaches |
| cockroachcare.com | new site, cockroaches only, no company | 86 (Feb 2026) → 23,786 (Jul 2026) | about 280x in 5 months | 7,313, -69% | 6-12 → 13 | 48-57 | 368 URLs: 255 English posts, 84 Spanish | about 190 English posts, Mar-Jun 2026 | droppings pictures, bites, eggs, baby cockroach vs bed bug, eggs vs poop, wood vs German cockroach |
| prestox.com (near-miss) | Presto-X, Rentokil brand, Midwest | 939 (Jun 2025) → 24,809 (Aug 2026) | 26x in 14 months | 15,435, -38% | 31 → 28 | 201-217 | 425 URLs, 186 species guides | not readable (all sitemap dates are 2026 re-saves) | species guides (boxelder bug, red paper wasp, drain fly, lacewings, human fleas), signs of bed bugs and termites |
| pestcontrolcalifornia.us (near-miss) | new referral site, no company | 75 (Feb 2026) → 23,531 (Jul 2026) | about 310x in 5 months | 7,228, -69% | 14 (Oct 2025) → 52 (Feb 2026) → 55 | 29-43 | about 910 URLs: 455 city, 168 species and ID, 86 "best companies", 39 comparisons | about 700 URLs dated Mar-May 2026 | baby cockroaches (#1), roach bombs vs gel baits, look-alikes, termite and pest control cost, droppings |
| **buzzskito.ca (us)** | | 6,461 (Ahrefs, Oct 2026) | | | **1.9** | **374 (55 followed)** | | | mosquito and tick facts, Canadian product reviews, bites |

**Visits per page in Google's top 10, at each site's peak:** bettertermite 272, All U Need 207, Presto-X 113, cockroachcare 96, pestcontrolcalifornia 85, Romex 70, 1st Choice 59, Pest Patrol 41, Healthy Home 21. **Ours: 24 (October).** Same story as path-to-50k: our pages reach the top 10 but earn little, because most serve Canadian, mosquito or tick searches at positions 6-8.

## 2. What all the winners share, and what the collapsed sites lacked

| Trait | Winners (of 9) | Collapsed sites (of 4) | How strongly it goes with success |
|---|---|---|---|
| Identification of a common US household pest is most of the top pages | 7 (not 1st Choice or Pest Patrol PDX) | 1 (What's That Bug, originally) | **Strongest.** In every growth story; the main thing the losers lacked |
| A cockroach page in the top pages | 8 (all but Presto-X) | 0 as a core topic | Strong, and the clearest topic signal |
| A bite page in the top pages | 7 | 1-2 | Strong |
| An "X vs Y" page in the top pages | 7 | 0 | Strong (confirms the teardown) |
| Top information pages with 0-2 linking sites | 9 (76 of 79 pages) | n/a | Links are not needed for a page to win |
| Domain Rating under 25 when the climb began | 7 | n/a | Low authority is no barrier |
| A burst of 200+ pages just before the climb | 5 of the 5 with readable dates | 2-3 also scaled up fast | Necessary, not sufficient: the losers had volume too |
| Written for the US | 9 | 4 | Cannot copy (.ca) |
| A real pest company behind it | 7 | 0 | Weak for growth, strong for **keeping** it: all 5 that held are companies |
| Built mostly on home remedies, "keep X away from Y", "ants in [place]" variations, product roundups | 0 | 3 | The clearest marker of the losers |

**Page anatomy does not separate the winners** (13 pages measured, section 3):
- **Length:** 578 to 4,517 words (median about 2,000).
- **Photos:** AI-made (cockroachcare, 1st Choice, Pest Patrol), stock (All U Need, Presto-X), copied university photos (pestcontrolcalifornia) and phone photos (bettertermite) all grew.
- **Authors:** an invented PhD, credentialed staff entomologists, a named owner, a "research team" and no author at all all grew.
- **Structure:** FAQ structured data on 3 of the 6 sites read; a summary box on 3. Titles run 48-98 characters.

What wins is **which question the page answers**. What looks like it decides **whether the gain lasts** is whether a real business is behind the site and whether the site stays clear of mass-produced page sets.

## 3. Winners: per-site notes and evidence

### All U Need Pest Control (alluneedpest.com)
- **Growth:** two climbs. 1,136 (Jan 2024) → 9,494 (Oct 2024), dip to 5,655 (Jan 2025), then 43,401 (Jul 2025), holding 28,000-40,000 until March 2026. **Fell to 28,004 in April and 13,055 in May 2026** (Google's March 2026 core update ran Mar 27 - Apr 8; the May core update May 21 - Jun 1), and 7,355-9,323 in Sep-Oct.
- **Authority:** Domain Rating 15 → 27 between January and April 2024, 25-28 through 2025, 32 now. 102 linking sites in January 2024.
- **Pages:** 342 blog posts plus **2,985 "service in [town]" pages** (2,131 dated October 2024, 704 September 2025) and 12 location pages.
- **Top US pages (Oct 2026):** homepage 2,468 (brand); baby cockroaches 702 (#4 "bed bug baby cockroach", 2 linking sites); rat vs lizard droppings 505 (39); flea bites on humans 418 (#2 "can fleas bite humans", 0); Fort Myers and Cape Coral pages; maggots 255 and 178; bumblebee sting 229; brown recluse bite 204; termite mud tubes 160.
- **Anatomy (3 posts):** "Topic: promise | All "U" Need Pest Control", 74-88 characters. 1,290-4,517 words. Table of contents, no summary box. 2-6 stock photos (iStock, Adobe Stock) with captions, one carrying the photographer's name; one cover image generated in their publishing tool (StoryChief). 0-1 tables. No FAQ structured data, but 11 question headings on two of them. Named authors with a real credential ("Kris Bagnara, ACE", "Sean Hearn, ACE": Associate Certified Entomologist), Person structured data. About 190 internal links per page, 3-9 inside the text. 0-3 outside sources (a state health department, NCBI, WebMD, AVMA). 3 phone links.
- **Lesson:** credentialed authors did not protect a site carrying 3,000 templated town pages.

### 1st Choice Pest Solutions (1stchoicepestsolutions.com)
- **Growth:** 125-300 a month through 2024; 467 (Jun 2025) → 1,307 (Jul) → 5,321 (Dec) → **9,642 (Mar 2026)**; then 6,837 (May), 5,521 (Jul), 3,749 (Aug), 3,990 (Oct).
- **Authority:** Domain Rating **3.2-3.4** in January-April 2025, 13-17 during the climb, 10 now. 46 linking sites in February 2025.
- **Pages:** about 490 posts (452 in the blog section). About 200 blog posts dated September 2025 - April 2026 (33, 52, 29, 16, 18, 17, 17, 19 a month; sitemap dates are upper bounds).
- **Top US pages:** wolf spider bite (Wisconsin) 494; do cockroaches bite 385 (#4 "roach bites"); do moles have eyes 221 and 146; do rats carry rabies 206 (#2); what do moths eat 174 (#2); do squirrels carry rabies 169; how long do squirrels live 153; stink bugs 92 and 84. 0-2 linking sites each.
- **Anatomy (2 posts):** "Wolf Spider Bite: What Wisconsin Homeowners Should Know" (55), "Do Cockroaches Bite? Signs and What to Watch For" (48). **578-693 words.** A scenario intro ("You're in the basement grabbing something from storage when..."). No photos in the text; the featured image is AI-looking (a wolf spider with too many legs). No tables, no FAQ data, company as author, LocalBusiness (PestControlService) data, about 110 internal links (7-8 in the text), 3 phone links.
- **Lesson:** short local question posts can climb from Domain Rating 3, but this is the winner with the least identification and it has lost the most of any company.

### Romex Pest Control (romexpest.com)
- **Growth:** 3,500-4,500 in mid-2024, down to 768 by January 2026, then 1,328 (Apr) → 3,181 (May) → **12,996 (Jun)** → 15,662 (Jul) → 9,572 (Oct). Pages in the top 10: 75 (Feb 2026) → 251 (Jun).
- **Authority:** Domain Rating 21-27 in 2024-2025, **8-11 during the 2026 climb**, 12 now. 145-184 linking sites at the start.
- **Top US pages:** insect bite identification chart, photos and treatment **2,029** (#6 for "identifying insect bites pictures", about 41,000 searches); chiggers identification 652; termite treatment cost in TX/OK/LA 441 (#2); chigger pest library 368 (#2); 10 early warning signs of termites 321; German cockroach vs other species 296 (#2); German cockroach life cycle 281; chiggers on pets 254; Oklahoma scorpion identification 236 (#2 "scorpions in oklahoma"); signs of termites in walls and ceilings 216. 0-2 linking sites each.
- **Anatomy:** not readable. The site shows "services available in the United States only" to Canadian visitors, refuses fetch tools (403), and the Internet Archive refused our requests that day.
- **Lesson:** one chart page for a whole family (bites) carries about a sixth of the site's US traffic, and the other topics are the region's own pests (chiggers, scorpions, termites).

### Pest Patrol PDX (pestpatrolpdx.com)
- **Growth:** 14-25 a month in 2024 → 645 (Sep 2025) → 506 (Apr 2026) → 1,698 (Jun) → **3,165 (Sep)** → 2,879 (Oct). Pages in the top 10: 2-3 (2024) → 82 (Oct 2026). Still rising when the others fell.
- **Authority:** Domain Rating 8 now (history not pulled).
- **Top US pages:** when are wasps least active 909 (#2); fruit fly vs drain fly 489; foods that attract roaches 343; boxelder bugs 118; seeing more spiders in the house 93 (#1); roaches through drains 80. 0-2 linking sites each.
- **Anatomy (2 posts):** "Fruit Fly vs. Drain Fly: How to Tell Which One You Have and How to Get Rid of It - Pest Patrol PDX" (98). 1,417-2,201 words. "Key Takeaways" box or table of contents. Images made by AI in what looks like an automated blogging tool (alt text "Professional image illustrating..."; a wasp comb drawn as an open ball, which paper wasps do not build), plus four Google-review images in every post. No tables, no FAQ data. Named author (Gabe Seymour), Person data. 35-39 internal links (4-8 in the text), 3 phone links.
- **Lesson:** a small company can grow with AI-assisted posts, so far. It is the counter-example to "AI pictures cause the fall"; its size (3,000 a month) is below the level where the others were hit.

### Healthy Home Pest Control (healthyhomepestga.com)
- **Growth:** 0 (Jan 2026) → 432 (Jun) → 1,047 (Aug) → **1,776 (Oct)**, still rising. Pages in the top 10: 5 (Feb) → 90 (Sep).
- **Authority:** Domain Rating 14 now (history not pulled).
- **Top US pages:** wolf spider vs brown recluse 533; small brown house spider 180; seed tick bites 157; early signs of termites in the ceiling 96; roaches in Georgia 80; spiders native to Georgia 76. 0-2 linking sites each.
- **Anatomy:** not readable (the server returned errors on Oct 16).
- **Lesson:** the bettertermite mix (X vs Y, look-alikes, bites, termite signs, a state ID page) works for a brand-new small company blog too.

### cockroachcare.com (independent, cockroaches only)
- **Growth:** first ranking October 2025; 86 (Feb 2026) → 339 (Mar) → 3,377 (Apr) → 11,812 (May) → 21,450 (Jun) → **23,786 (Jul)** → 20,787 (Aug) → 12,697 (Sep) → **7,313 (Oct)**. Pages in the top 10 kept rising (276 in September): rankings slipped down the page rather than disappearing.
- **Authority:** Domain Rating 6-12 during the climb, 15-18 at the peak, 13 now. 48-57 linking sites at the start.
- **Pages:** 255 English posts and 84 Spanish. A sample of 30 English posts: 37% dated March 2026, 73% March-June 2026, so about 190 posts in four months.
- **Top US pages (after the fall):** cockroach poop pictures 459 (#2 "roach poop pictures"); cockroach bite symptoms 407; baby cockroach vs bed bug 282; cockroach eggs identification 226 (#2 "american cockroach egg"); cockroach bite marks 192; "can cockroaches live in your penis" 119; cockroaches in the bedroom 116; cockroach eggs vs poop 113; do cockroaches make noise 96; wood vs German cockroach 94 (#2). 0-1 linking sites each.
- **Anatomy (3 posts):** "Cockroach Poop Pictures: Visual Guide to Identifying Droppings - Cockroach Care" (70-87 characters). 2,016-2,740 words. "Key Takeaways" box and table of contents. 1-2 tables. 6-9 images, **all AI-made** (file names generated from prompts; droppings drawn with legs; an egg case rendered as glossy orange flesh). FAQ data on 1 of 3 (5 questions); 5-7 question headings. Byline "Dr. Michael Turner", described on the About page as "PhD – Entomologist & Pest Control Specialist", next to "Susan Jones – Home Health & Pest Safety Writer"; the WordPress author account is called "techienerd". 37-40 internal links (3-6 in the text). Its outside links go to other pest companies' blogs (bettertermite among them). No phone, no business.
- **Lesson:** one pest, every angle, about 300 posts: zero to 24,000 in five months on a new domain, then -69% in three months across Google's August and September 2026 spam updates.

### Presto-X (prestox.com), near-miss
- A Rentokil brand (its pages link to rentokil-initial.com, Ehrlich and Ambius), so not a small company; Domain Rating 28-31 throughout.
- **Growth:** about 600-1,100 a month in 2024 to mid-2025 → 2,618 (Sep 2025) → 6,434 (Mar 2026) → 10,013 (May) → 20,256 (Jun) → **24,809 (Aug)** → 15,435 (Oct). Pages in the top 10: 60 (Jun 2025) → 300 (Apr 2026).
- **Pages:** 425 URLs: 186 species guides, 75 service pages, 37 branch pages, 36 blog posts.
- **Top US pages:** boxelder bug 1,260 (#5 "boisea trivittata"); red paper wasp 1,193 (#2 "red paper wasp nest"); signs of bed bugs 1,121; drain fly 871; signs of termites 778; termite droppings 738; lacewings 711; human fleas 611 (#2 "fleas on humans"); house sparrows 546; sand fly 339. 0 linking sites each.
- **Anatomy (2 species guides):** "Boxelder Bug (Boisea trivittata) | Presto-X Pest Control" (56). About 570-830 words including menus. A "Quick facts" section first (red paper wasp), stock photos (2 on the red paper wasp page), 3-7 sections, a 4-question FAQ with FAQ data, no author, no date, 4 phone links, a branch finder.
- **Lesson:** short species pages can work on an old brand domain, unlike bettertermite's 757-page encyclopedia (2% hit rate). We are not an old brand domain.

### pestcontrolcalifornia.us, near-miss
- A referral website ("a free service to assist homeowners in connecting with local service providers") with a Texas sister site, pestcontroltexas.us, ranking since June 2026.
- **Growth:** 10 (Jan 2026) → 343 (Mar) → 3,199 (May) → 13,303 (Jun) → **23,531 (Jul)** → 17,363 (Aug) → 10,715 (Sep) → **7,228 (Oct)**.
- **Authority:** Domain Rating 14 (Oct 2025) → 37 (Nov) → 49-56 from December, with only 19-43 linking sites at the time: a few very strong links, not a broad profile. The best followed links today include slides.com, legalclarity.org, grokipedia.com, cheapinsurance.com, wikihow.com (Sep 2026) and a run of gaming and spam domains.
- **Pages (sitemap dates):** 455 city pages (433 in May 2026), 168 "Pestopedia" ID pages (116 in Mar-Apr 2026), 86 "best pest control companies" pages (79 in April), 39 head-to-head comparisons, 46 news posts, 17 active-ingredient pages, 12 renter-rights pages.
- **Top US pages:** baby cockroaches 1,133 (**#1 "baby roaches"**); roach bombs vs gel baits 592; bugs that look like cockroaches 516; termite treatment cost 511; water bug vs cockroach 431 (#2 "california water bug"); California pest control cost 425; pictures of bed bugs on a mattress 310; roach vs mouse droppings 282; is boric acid safe for pets 231 (#2); white cockroaches 170 (#2). 0-1 linking sites each (one has 4).
- **Anatomy (baby cockroaches):** "Baby Cockroaches (Nymphs): What They Look Like & How to Eradicate Them" (96 with brand). 1,284 words. Six question-style headings, including "Visual Guide: Cockroach Life Stages" and "Bugs That Look Like Baby Roaches". **Six labelled comparison photos with captions:** a nymph next to the adult, and egg-to-adult strips for the German, American and Oriental cockroach. At least one is a university photo (Rutgers) with labels and arrows added, the source line still printed on it. A "Last Updated: July 2026 | Reviewed by The PCC Research Team" line at the top, FAQ data (5), Organization author, 21 internal links in the text, no outside links, one soft link to a cost page, no phone.
- **Lesson:** the labelled life-stage strips are the most copyable idea here. Everything around them (city pages, "best companies" lists, borrowed photos, engineered authority) is what we must not copy.

## 4. Topics that win across sites (the queue order in change 1)

Counted from each winner's top 10-12 US pages (bettertermite from the teardown's top 40).

| Topic | Sites with it in their top pages | Examples |
|---|---|---|
| Cockroaches (babies, droppings, eggs, bites, look-alikes, species vs species) | **8 of 9** | baby roaches (#1 pestcontrolcalifornia; #6 page at bettertermite); roach poop (bettertermite #2 page, cockroachcare's #1); German vs American (Romex #2) |
| Bites and stings | **7 of 9** | insect bite ID chart (Romex's top page); flea bites (All U Need, Presto-X); wolf spider and brown recluse bites; cockroach bites |
| X vs Y | **7 of 9** | baby cockroach vs bed bug; fruit fly vs drain fly; wolf spider vs brown recluse; rat vs lizard droppings; water bug vs cockroach |
| Droppings | **5 of 9** | roach poop; roach vs mouse droppings; rat vs lizard droppings; termite droppings |
| Termite signs and cost | **5 of 9** | signs of termites; mud tubes; termite damage in the ceiling; termite treatment cost |
| Spiders (house, look-alikes, bites, state lists) | 5 of 9 | house spiders (bettertermite's biggest page); small brown house spider; Georgia spiders |
| Cost of treatment | 4 of 9 | termite treatment cost; pest control cost; cockroach exterminator cost (we already have Canadian cost pages) |
| Yes/no and curiosity questions | 4 of 9 | do moles have eyes; when are wasps least active; do roaches make noise; should I kill a black widow |

**Our coverage:** cockroaches 8 guides live plus the cockroach hub (look-alikes, eggs, babies, bites, can they fly, water bugs vs cockroaches, German cockroaches, where they come from); `cockroach-droppings` and `rat-droppings` scheduled for Jan 4, 2027; `animal-droppings` and `how-to-get-rid-of-cockroaches` Oct 20; the `bug-bites` identification hub went live Oct 16, targeting the same search as Romex's top page.

## 5. Losers: what collapsed, when, and probably why

| Site | Peak (Ahrefs) | Collapse | Today | Probably why |
|---|---|---|---|---|
| pestsamurai.com | 47,290 a month (Jul 2023); 485 pages in the top 10 (Dec 2022) | 28,140 (Sep 2023) → 11,271 (Oct) → 974 (Jan 2024) → 0 (Aug 2024) | Online, no rankings | Independent affiliate site ("affiliate disclosure" page). Mass "ants in [place]" variations (ants in laptop, hot tub, well water, grill, RV, electrical outlet...) plus species and product pages |
| pestseek.com | 17,093 (Jul 2023) | 13,228 (Sep 2023) → 4,721 (Oct) → 339 (Jan 2024) → 0 (Sep 2024) | Down (server error 522) | Independent affiliate site: home remedies ("does ammonia kill bed bugs", "borax for fleas", "vinegar to trap fruit flies"), bite questions, "best flea collar for cats" |
| pestpointers.com | 57,440 (Jul 2023); 652 pages in the top 10 (Sep 2023) | 42,328 (Sep 2023) → 26,957 (Oct) → 5,112 (Jan 2024) → 114 (Dec 2024); rebound to 2,117 (Aug 2025), down to 26 (May 2026); 882 (Oct 2026) | Not reachable from here | "Keep [animal] away from [thing]" listicles ("7 best scents to keep mice out of your RV", "keep frogs out of your swimming pool", "coffee grounds to repel gnats") and "best X" product posts |
| whatsthatbug.com | 3,538 pages in the top 10 (Oct 2022) | 2,450 (Sep 2023) → 1,128 (Dec 2023) → 226 (Oct 2024); 671 (Aug 2025); 112 (Aug 2026); 261 (Oct 2026) | Online but repurposed: a pest-control template with placeholder contact details ("+321 123 4567", "info@test.com") | The famous reader-submission ID site lost its original character. When it changed hands could not be checked (the Internet Archive refused our page requests) |
| insectcop.net | 723 pages in the top 10 (Jan 2023) | July-August 2023 | Redirects to thisoldhouse.com, since May 2023 | **Not a penalty:** bought and folded into This Old House |
| peststrategies.com | 1,964 pages in the top 10 (Sep 2022) | September 2023 | Redirects to todayshomeowner.com, since early September 2023 | **Not a penalty:** bought and folded into Today's Homeowner |

- **When:** every real collapse started with Google's helpful content update (Sep 14-28, 2023) and finished by the March 2024 core update (Mar 5 - Apr 19, 2024). That update folded the helpful-content system into Google's core ranking, and the spam update that ran with it introduced the "scaled content abuse" policy. They fell site-wide, not page by page.
- **What they shared:** no business behind them, affiliate income, topics chosen for volume (remedies, repellents, "keep away" lists, room-by-room variations) more than to help someone identify a pest, and no first-hand experience.
- **The 2026 fallers** (section 3) show the same mechanism a format later: fast mass publishing without a business (cockroachcare, pestcontrolcalifornia), or a real business with a templated page mass (All U Need), dropping with the March 2026 core update or the August and September 2026 spam updates.

## 6. New beyond the bettertermite teardown

1. **The formula works on brand-new domains, and fails there too.** cockroachcare and pestcontrolcalifornia went from zero to about 23,500 a month in five months with identification families, then lost 69% in three. Growth does not prove a site is safe.
2. **There is a cross-site topic order:** cockroaches (8 of 9), bites (7), X vs Y (7), droppings (5), termite signs (5). The teardown ranked page types; this ranks topics.
3. **Page anatomy is not the lever.** Winners range from 578 to 4,517 words, from AI pictures to phone photos, from invented authors to no author. Our template is not what holds us back; topic choice and the .ca domain are.
4. **Durability goes with a real business and no mass page sets.** All five holders are real, operating pest companies; the four fallers had no business, an invented expert and AI pictures, thousands of templated town pages, or engineered authority.
5. **Labelled life-stage and look-alike strips** carry pestcontrolcalifornia's #1 page. We have nothing like them.
6. **Links:** 6 of the 7 winners whose history I pulled started with fewer linking sites than we have. Every site's Ahrefs referring-domain count jumped in May and September 2026 at once, so "links now" figures are not evidence of link building.
7. **Update timing moves everyone together.** Every 2026 winner jumped in June 2026 (May core update plus season): Romex 3,181 → 12,996, Presto-X 10,013 → 20,256, cockroachcare 11,812 → 21,450, pestcontrolcalifornia 3,199 → 13,303. Read our own cohorts against that background.
8. **Two "collapses" in our own notes were acquisitions** (Insect Cop, Pest Strategies). Correct path-to-50k caveat 4.

### Winning structures we do not have yet
- A labelled comparison strip (life stages, nymph next to adult, look-alikes at the same scale).
- A complete cockroach family: missing baby cockroach vs bed bug, eggs vs poop, roach vs mouse droppings, German vs American, white cockroach, wood roach vs German cockroach; droppings is planned last.
- A droppings family for US readers (we have only the Canadian mouse-poop and bed-bug-stains pages).
- "Method vs method" pages for US readers.
- Already in place and not worth changing on this evidence: a summary box, FAQ, cost pages for our own service, honest authorship, credited photos.

## 7. Method and limits

- **Finding candidates:** Ahrefs organic competitors of bettertermite, buzzskito.ca (US and Canada), cockroachcare, insectidentification.org and romexpest.com; the results pages for 23 identification searches (roach poop, baby roaches, tiny black bugs in bathroom, bugs that look like bed bugs or cockroaches, flying ants vs termites, wasp vs hornet, mouse droppings, bed bug eggs, termite droppings, carpet beetle larvae and bites, drain flies vs fruit flies, tiny white bugs, wolf spider vs brown recluse, baby German cockroach, black ants with wings, mud dauber vs wasp, cellar spider vs daddy long legs, fleas in hair, little black beetles in house, cockroach eggs, tiny brown bugs in kitchen); the stored results-page checks in path-to-50k.json. About 50 candidate domains were screened; most low-authority pest companies on page 1 were flat or grew slowly (Active, Insects Limited, Rottler, Wayne's, Itch, Limmer, Colonial, Frontline, Forterra, Arrow, Joshua's, Rocklin, Justice, insect.com, cockroachfacts.com).
- **Screening:** Ahrefs "pages in the top 10" history (cheap) first, then the traffic history for sites that grew five-fold. "Within a year" is judged on Ahrefs monthly estimates, which lag about a month.
- **Seasonality:** pest traffic peaks in June-August. Established sites run 1.3-2.2x higher in July than in October (path-to-50k section 3). Declines were called "falls" only when they exceeded that or started in spring.
- **Publishing dates:** from sitemaps ("last modified", an upper bound), the posts' own published dates (cockroachcare: a 30-post sample) and Ahrefs page counts. Presto-X's sitemap dates are all 2026 re-saves. Romex's and Healthy Home's could not be read.
- **Pages read:** 13 pages on 6 sites with a script (word counts include no menus, except Presto-X) and in the built-in browser where a site blocked scripts. Photo origin was judged by eye from downloaded files (AI: anatomical errors and prompt-style file names). Not proof.
- **Causes:** update dates line up with the falls; that is not proof that an update caused them.
- **Ahrefs units:**

| Call | Units |
|---|---|
| Organic competitors (7 calls) | 650 |
| Results pages (23 searches) | 1,220 |
| Batch metrics for 42 domains | 1,428 |
| Pages-in-top-10 histories (35 sites) | 2,578 |
| Traffic histories (8 winners, 3 losers) | 3,069 |
| Domain Rating histories (6) | 354 |
| Referring-domain histories (6) | 672 |
| Top pages (8 sites) | 1,656 |
| Referring domains list (pestcontrolcalifornia) | 60 |
| **Total** | **11,687** (account counter 143,700 → 155,387) |
