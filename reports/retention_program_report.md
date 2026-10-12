# Retention program: final report

Written Oct 12, 2026. Covers the six-phase brief ("content pages exist to keep people on the
website"), as corrected by your answers on Oct 11.

## Where things stand

| Phase | What | Status |
|---|---|---|
| 1 | "Next" and "Related" link boxes inside articles | Live (commit `d189699`) |
| 2 | "Next article" bar on articles that have no Amazon bar | Live (`b5d12f4`) |
| 3 | Amazon.ca picks on the product hubs | Live (`a031e33`) |
| 4 | Browser notifications (OneSignal) | Built and live, but **switched off** until you add one ID |
| 5 | Speed check of the article template | Measured. Nothing needed changing. Two decisions for you. |
| 6 | "What bug is this?" quiz | Live at `/tools/what-bug-is-this`, **without photos** (see below) |

Your corrections were followed throughout: no Amazon link was removed from any article, Amazon
stays off the 86 North American guides, the 298 articles with the Amazon buy bar got no second
bar, and service, city, pricing and quote pages were not touched.

## Phase 3: Amazon.ca on the product hubs

Two of the six hubs (bed bugs, tick gear) already had Amazon links. The other four now have the
same pattern: the disclosure, one "Start Here" pick, and two buttons at the bottom. 16 links.

| Hub | Start Here pick | Second button |
|---|---|---|
| Ant control | TERRO Liquid Ant Baits | Combat ant bait stations |
| Cockroach control | Combat Roach Killing Bait Stations | Glue-board monitors |
| Mosquito gear | Summit Mosquito Dunks | Thermacell E90 |
| Mouse and rat control | Victor M325 snap traps | Victor rat traps |

Every one of these is a product the hub's own lead guide already recommends, with the same
search words. I chose nothing new. Boric acid dust was left out on purpose (Health Canada
cancelled it for home use).

All links go to Amazon.ca, open in a new tab and carry `rel="sponsored nofollow noopener"`.
The build now fails if anyone ever adds an amazon.com link, or any Amazon link to one of the 86
North American guides.

Proof nothing else moved: 631 of 635 pages were identical before and after, and all 4,564
existing Amazon links were byte-for-byte the same.

## Phase 4: browser notifications. Built, waiting for your ID

**What a reader will see once it is on:** on an article, after 30 seconds or half-way down, a
slim strip slides out from under the header: "Notify you when we publish a new guide?" with
"Yes, notify me" and "No thanks". Only if they press Yes does the browser's own permission box
appear. Nothing ever appears on page load. No email address is asked for.

**Where:** all 416 articles. Never on service, city, pricing or quote pages, the product hubs,
or the 33 local posts.

**Ad safety:** the strip sits under the header, not at the bottom, where your own bars and
Mediavine's sticky ad and video player live. It checks on every scroll whether an ad is
underneath it and slides away if one is. Tested with a stand-in ad.

**Cost to everyone else:** none. OneSignal's code is not loaded at all until a reader says yes.

**Nothing is sent automatically.** No welcome message. A notification goes out only when you
write one in OneSignal's dashboard.

**I checked Mediavine first**, as the brief asked: their Grow tool has favourites, sharing,
search, recommended content and email sign-up, but no browser notifications. So this is a gap.

### Your steps to switch it on

1. Go to onesignal.com and create a free account.
2. Click **New App/Website**, name it BuzzSkito, choose **Web**.
3. Choose **Custom Code** (not "Typical Site", not "WordPress"). This matters: with Typical
   Site, OneSignal adds its own pop-ups on top of ours.
4. Site name: `BuzzSkito`. Site URL: `https://buzzskito.ca`. Turn **Auto Resubscribe** on. Save.
5. Open **Settings → Keys & IDs** and copy the **App ID** (it looks like
   `1a2b3c4d-1234-1234-1234-1a2b3c4d5e6f`). It is not a password; it is safe to paste to me.
6. In Vercel: project **buzzskito-website → Settings → Environment Variables → Add**.
   Name `NEXT_PUBLIC_ONESIGNAL_APP_ID`, value = the App ID, environment = Production. Save.
7. In Vercel: **Deployments → the top one → ⋯ → Redeploy**.
8. Tell me. I will check it live and update the date on the privacy policy.

The privacy policy gains a short "Browser Notifications" paragraph by itself the moment the ID
is set. Mediavine's own section is untouched.

One limit to know: on iPhones, Safari only allows notifications for sites saved to the Home
Screen, so most iPhone readers will not see the prompt. It hides itself where it cannot work.

## Phase 5: speed

### The numbers (live site, simulated mid-range phone on slow 4G, median of 3 runs)

| Article | Score | Main content shown (LCP) | First paint | Blocked time | Layout shift (CLS) |
|---|---|---|---|---|---|
| /blog/alaska-mosquitoes | 81 | 3.17 s | 1.75 s | 442 ms | 0.000 |
| /blog/best-mosquito-trap | 77 | 3.19 s | 1.79 s | 616 ms | 0.000 |
| /learn/tick-identification-chart | 80 | 3.17 s | 1.72 s | 476 ms | 0.000 |

With real (not simulated) slow-phone throttling the same pages showed their main content in
about 2.5 to 2.8 seconds. On a fast connection and computer it is 0.3 to 0.5 seconds.

**After:** the same. I shipped no speed change, because the tests below showed there was
nothing safe to change that would move the number.

### What I tested

| Test | Result |
|---|---|
| Block every third-party script (Google, Facebook, Clarity, Ahrefs, Mediavine) | LCP unchanged (3.22 s). Blocked time fell from about 640–900 ms to about 5 ms. |
| Remove the two decorative fonts | LCP 0.14 s better |
| Remove all of the site's own JavaScript | LCP still 2.4–2.7 s |
| Load Google Analytics as a low-priority script | No LCP gain in 12 throttled runs (6 each way). Reverted. |

### What that means

- **Nothing you added is slowing the main content.** The largest element is the headline, which
  is plain text. There is no hero image to optimise and nothing shifts while the page loads.
- The 3.2 seconds in PageSpeed-style tests is the page framework itself under a pessimistic
  simulation. It cannot be fixed with a tweak.
- **What does cost you is responsiveness.** Third-party scripts account for all of the time the
  phone is too busy to respond: Facebook Pixel 230–480 ms, Google tag 200–380 ms, Clarity
  45–200 ms per page view on a mid-range phone.

### Two decisions for you

1. **Facebook Pixel.** It is the single heaviest script on every page. If you are not running
   Facebook ads, tell me and I will remove it. If you are, I can delay it a few seconds instead.
2. **Microsoft Clarity** (session recordings). Same question, smaller cost.

I did not touch either: they are your tools and removing them is not my call.

### Two things I could not measure

- **Responsiveness for real visitors (INP)** only exists as real-visitor data. Look at Vercel →
  your project → **Speed Insights**. It shows real LCP, INP and CLS for phones. If LCP there is
  under 2.5 s you are passing, whatever a lab test says.
- **Ads.** Mediavine is not serving yet. Ads will change all of these numbers. Re-measure the
  week ads start: `node scripts/measure-speed.mjs after-ads 3 https://buzzskito.ca/blog/alaska-mosquitoes`

A warning for whoever measures next: my first numbers said 9 seconds. That was the test browser
drawing its hidden window once a second, not the site. The script above has the fix built in.

## Phase 6: "What bug is this?" quiz

Live at **buzzskito.ca/tools/what-bug-is-this**, linked from the Learning Centre.

- Five questions: where you found it, how big, how it moves, what it looks like, what it left
  behind.
- Eight results: bed bug, tick, mosquito, ant, cockroach, mice, plant insects (fungus gnat,
  whitefly, aphid), and "not clear yet".
- Each result gives three ways to confirm it and links to two identification guides and one
  "what to do" guide. If a linked guide is ever deleted, the build fails instead of the reader
  hitting a dead link.
- It never claims certainty: every result says it is a starting point from five answers.
- Tested: the answers a person with each pest would give name that pest (13 cases), and I ran
  all 5,880 possible answer combinations. One in four ends in "not clear yet", by design: a
  wrong name is worse than no name.

### The one thing missing: photos

The brief asked for a photo on each question. **The site has no pest photographs at all**: only
your service photos, the ten infographics and the diagrams. You ruled out AI-generated images,
and I will not draw or generate any.

So the quiz runs on words for now, and every answer has a slot waiting for a photo. Your choice:

- **A. Send me your own photos**, or
- **B. Let me use public-domain photos** from the US CDC's Public Health Image Library and the
  USDA. I would send you the list first, each with its source and licence, and download nothing
  until you say yes.

The quiz page shows no ads (it is not on the ad allow-list, which I only change when you say
so). Its job is to send readers to articles, which do.

## Measurement: what to look for in GA4

| Event | Tells you | Details sent |
|---|---|---|
| `recirculation_click` | A reader clicked through to another article | `location` = in_content, keep_reading, sticky_bar or quiz_result; `target_slug`; `link_kind` |
| `amazon_click` | A reader left for Amazon | `page_slug`, `placement`, `search_term` |
| `push_prompt_view` | The notification prompt was shown | |
| `push_subscribe` | What they answered | `outcome` = accepted, dismissed or error; `step` |
| `quiz_step` | Each quiz answer and the final result | `step` 1–5 or "result"; `choice` |

No new analytics vendor. The older `affiliate_click` event is unchanged.

**One-time setup so these show in reports:** GA4 → Admin → Custom definitions → Create custom
dimension (scope: Event) for each of: `location`, `target_slug`, `link_kind`, `page_slug`,
`outcome`, `step`, `choice`.

## Files changed, by phase

- **Phase 1:** `components/NextUp.tsx`, `RelatedLinks.tsx`, `RecircClickTracker.tsx`,
  `GuidePage.tsx`, `ReadNext.tsx`; `lib/recirculation.ts`, `lib/recirculation.json`;
  `data/recirculation-overrides.json`; `scripts/backfill-recirculation.mjs`,
  `insert-recirculation.mjs`, `check-recirculation.mjs`; one or two added lines in about 330
  article pages.
- **Phase 2:** `components/KeepReadingBar.tsx`, `KeepReadingBarShell.tsx`, `LeadBarGate.tsx`;
  `lib/keep-reading-bar-routes.ts`; `app/globals.css`.
- **Phase 3:** the four hub pages under `app/pest-product-guides/`;
  `components/AffiliateClickTracker.tsx`; `scripts/check-amazon.mjs`.
- **Phase 4:** `lib/push.ts`, `components/PushPrompt.tsx`, `components/ReadNext.tsx`,
  `public/OneSignalSDKWorker.js`, `app/privacy-policy/page.tsx`, `scripts/check-push.mjs`,
  `package.json`, `reports/mediavine_launch_checklist.md`.
- **Phase 5:** `scripts/measure-speed.mjs`, `.gitignore`. No site code.
- **Phase 6:** `app/tools/what-bug-is-this/page.tsx`, `components/BugQuiz.tsx`,
  `lib/bug-quiz.ts`, `lib/tool-routes.ts`, `components/LeadBarGate.tsx`,
  `components/ExitIntentPopup.tsx`, `app/learn/page.tsx`, `app/sitemap.ts`,
  `scripts/check-recirculation.mjs`.

## Checks and build results

Final build, Oct 12, 2026: `next build` succeeded, 636 pages. All eight build checks pass.

| Check | Result |
|---|---|
| `check:amazon` | 1,932 files scanned. Every Amazon link carries a valid tag. Amazon.ca only. The 86 North American guides carry no Amazon link. |
| `check:registered` | 432 blog pages, all registered |
| `check:ads` | Ads on 445 allow-listed pages. Homepage has the script with ads off. 190 other pages have no Mediavine script. |
| `check:guides` | 86 guides, 0 errors |
| `check:article-ctas` | 416 articles end with "Keep reading". 33 local posts keep their quote button. |
| `check:recirculation` | "Next" on 407 of 415 articles (98%), "Related" on 376 (91%), 1,245 of 1,245 cards tracked |
| `check:sitemap` | 619 addresses listed, all built, indexable and correctly self-referencing |
| `check:push` (new) | Notifications off: no prompt on any page, and OneSignal's script in no page |

**Before and after, every page:** compared with the build from before phase 3, 630 of 635 pages
are identical in text, links and Amazon links. The five that differ are the four hubs (phase 3)
and the Learning Centre (the new link to the quiz). One new page, the quiz. All 4,564 earlier
Amazon links are unchanged.

**Tried in a browser** at phone width and on desktop: the hub picks; the notification prompt
(appearing, hiding itself over a stand-in ad, "No thanks", "Yes" then allowed, "Yes" then
blocked, and not asking again on the next visit); and the quiz (all five questions, a result,
"not clear yet", start again). With a temporary test ID the prompt check passed on all 416
articles. The test ID was then removed, and it was never committed.

## Your to-do list

1. **Re-send the 10 corrected infographics** in a normal message (not while I am mid-task: those
   never reach the disk). The matching page text is ready and waiting on a side branch. The live
   pictures are still the first versions.
2. **OneSignal App ID** (the eight steps above) to switch notifications on.
3. **Quiz photos:** A or B above.
4. **GA4 custom dimensions** (the one-time setup above).
5. **Facebook Pixel and Clarity:** keep, delay or remove.
6. **Mediavine note** (`reports/mediavine_launch_checklist.md`): decide phone sticky ad ON or
   OFF before you send it, and include the new point 10 only if notifications are on.
7. **Vercel Speed Insights:** tell me the phone LCP and INP figures it shows.
8. Still open from before: about 100 quote boxes in the middle of articles; 10 small
   differences between the corrected infographics and their sources; three older guides that
   still recommend boric acid dust; nobody has yet read the 86 guides.
