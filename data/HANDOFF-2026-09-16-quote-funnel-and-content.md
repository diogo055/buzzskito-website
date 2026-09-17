# Session handoff — quote funnel rebuild + social content engine

**Written 2026-09-16.** Covers the work done in the Sep 15–16 session across three tracks:
the website/Hub quote-funnel rebuild (built, not pushed), the Higgsfield + real-footage video
pipeline (first video shipped), and the open questions the owner has asked for next.

---

## 1. State in one screen

| Track | Where it is | What is blocking |
|---|---|---|
| Website rebuild | branch `conv/quote-funnel-rebuild`, **406 files changed, uncommitted** | owner has not approved a push; nothing is live |
| Hub rebuild | branch `conv/quote-funnel-rebuild`, committed `edd991f` | same; SQL migration written but NOT applied |
| Video engine | v13 shipped to `Ready to Post`, 53.5 Higgsfield credits spent, **226.5 left** | owner wants a much stronger, more cinematic next video |
| GSC access | **BROKEN** — `C:/Users/buzzs/Documents/mcp-gsc/token.json` is gone | owner must re-auth (§6) |

---

## 2. Website + Hub rebuild (built, never pushed)

Built by 19 parallel builder agents, then reviewed by a separate 8-reviewer pass with
adversarial verification, then fixed. **Verified before the owner paused it:**

- `npx next build` exit 0, `npx tsc --noEmit` clean, `check:amazon` and `check:registered` pass.
- SEO parity gate (`scratchpad/conv-gates.mjs` pattern, baseline in `data/conv-baseline/`):
  161 live pages compared; every remaining title / H1 / meta-description change is a claim fix.
- Rendered-HTML claim scans: the DIR2016-01 phrases are gone from visible text and JSON-LD,
  except the accepted exceptions logged in the session (blog titles that name a topic, reader
  questions, third-party product facts).

**What changed, in short:** one shared quote form on both pages, first-touch attribution
(landing page, referrer, UTM, GA client id) flowing into `leads.answers.attribution`, GA4 lead
events, typical-price blocks and price cards on city pages, claim cleanup across 331 files,
Hub lead workflow (called/texted, never-quoted flag, paid matching) and compliant email copy.

**Owner-confirmed facts that were restored after the owner pushed back (do not remove again):**
same-week service, first tick treatment within 3–5 business days, "As Featured In Toronto Star ·
CityNews · TorontoToday". See memory `feedback_dont_remove_business_facts.md`. The owner
accepted only the Health Canada "approved/registered" removal, after the DIR2016-01 citation.

**Open owner decisions:** `/mosquito-control` says "treated within 24 to 48 hours" while the
near-me pages say "first treatment within 3–5 business days" — pick one; whether Exclusive
includes tick (currently left exactly as it was); the unapplied Hub migration; the GBP link UTM.

---

## 3. Video engine (this is the live workstream)

**Pipeline that produced v13 "Cedar Hedge Zoom"** (in `BuzzSkito Content/Ready to Post`):
AI still ladder → approve at 200% → animate leg by leg with start/end frames → local assembly
(transitions, push-ins, slow motion, sound design, captions) → content factory adds music,
end card and −14 LUFS. Full recipe, verified credit costs and the two bugs that cost a rebuild
are in memory `project_content_factory.md`.

**Owner's verdict on v13 (2026-09-16), taken seriously:**
- 40 views in a day. **Diagnosis: distribution, not creative** — the Facebook page has ~30
  followers, there is no ad spend, and it is the end of the season. No creative read is
  reliable at that sample size.
- "Music cuts off" — measured: it never stops; the blower at `footageLevel 0.6` buried it.
  Fixed to 0.32 / music 1.0 and re-rendered. **The same fix should be applied to v01–v12.**
- "Footage is blurry" — real cause: every source clip is landscape 1080p, so a 9:16 crop is a
  608 px sliver upscaled to 1080. Only 4K reshoots or more native-resolution AI footage fix it.
- "Not cinematic enough" — true, and it is a budget choice I made without asking: the video
  used 7.5-credit shots. The cinematic tier is 45–58 credits per shot.

**The decision waiting on the owner:** spend ~44.5 credits generating one hero shot twice
(Veo 3.1 vs Seedance 2.0 at 1080p) — an extreme macro of a mosquito landing and biting a
forearm at dusk — to establish what the account can actually produce at its best, then build
the next video around 3–4 premium shots (~150–180 credits).

**Concepts 2 and 3** (Don't Hire Us Yet; The Mosquito Critic) are fully specced in the
artifact "BuzzSkito Reel Room" (https://claude.ai/artifact/6qb1njr9sbKnHbaar8miES). Both need
a 45-minute shoot at the owner's own property, which also fills the biggest gap in the footage
library: a normal suburban yard.

---

## 4. Distribution truths to act on before judging any more creative

- Facebook page ≈ 30 followers: organic reach is capped by the follower graph. Paid reach
  (CA$10–20/day inside a GTA radius) or platforms that are not follower-gated (TikTok,
  YouTube Shorts, Instagram Trial Reels) are the only ways to get a real read.
- Hashtags are close to irrelevant on Facebook. Do not spend effort there.
- Mosquito content sells in April, not September. Build the library now; spend in spring.
- Judge on booked jobs → quotes/calls/DMs → sends → watch time. Views are a diagnostic only.

---

## 5. The owner's current question (open): keyword data

He asked whether Google Keyword Planner (and Reddit language mining) is the better source of
demand data, and wants today's GSC numbers. Honest position to carry forward:

- **Our own GSC is the truest data we have** for this market — it is what real people typed and
  what Google actually showed us. `buzzskito-ops` rule 3 already proved Ahrefs volumes are
  fiction for Canadian long-tail pest terms.
- **Keyword Planner is better than Ahrefs but still modelled**: bucketed ranges, close variants
  merged, advertiser-oriented. Good for terms we do NOT yet rank for; bad for precision.
- **Reddit / forum mining is for language, not volume** — how people actually phrase the
  problem, which is what wins the title and the first line of a page.
- Access options: Google Ads API (needs a developer token + an active Ads account), a CSV
  export from Keyword Planner dropped in a folder, or driving the owner's own Chrome session.

---

## 6. GSC access is broken — fix first

`C:/Users/buzzs/Documents/mcp-gsc/token.json` no longer exists, so both the `gscServer` MCP
tools and the pull scripts fail. The newest cached data is `gsc_full_scan.json`
(window **2026-08-03 → 2026-08-30**), which is what any "current state" claim must be based on
until this is fixed.

To re-auth (owner runs this once, a browser window opens):

```powershell
cd C:\Users\buzzs\Documents\mcp-gsc; .\.venv\Scripts\python.exe auth_setup.py
```

Then `pull_buzzskito.py` and the `gscServer` MCP tools work again.

---

## 7. Do not repeat

- Do not remove statements about how the business operates because they look unverified.
- Do not add a second film-grain pass over AI clips; cross-dissolves turn to mush.
- Force slow-motion clips back to CFR or later `xfade`s silently drop the remaining shots.
- The ASS style block must be interpolated into the caption header or libass falls back to a
  tiny default font.
- Push the website to `diogo`, the Hub to `origin`, and only with explicit approval.
