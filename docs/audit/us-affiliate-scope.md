# What standing up the US affiliate side would actually take

Scoped 2026-09-09. Short version: **it is buildable, it is legal, and it is not worth doing this
season.** The reasoning is below, including the two things that turned out to be wrong in our own
notes.

---

## 1. First correction — this is not a US breakout

The Ahrefs screen showing US at 39.6% of traffic is an estimate. GSC, measured:

| | 90d to 2026-06-10 | 90d to 2026-09-08 | growth |
|---|---|---|---|
| Canada | 3,657 clicks | 17,319 | +374% |
| **United States** | **181** | **3,041** | **+1,580%** |
| United Kingdom | 23 | 390 | +1,596% |

The US grew 16.8x — but **the UK grew faster**, and Canada nearly quintupled. The whole site went
international; the US over-indexed by roughly 3.6x, not 17x. US share of clicks went 4.7% → 14.2%,
not 39.6%.

The honest description is "our identification-intent content is being picked up internationally."
Germany, France and the Netherlands are also in the top six — and each of those, like the UK, sits
behind its own separate Associates locale. A US-only project addresses part of a wider pattern.

## 2. The prize, measured against our own numbers

US traffic lands overwhelmingly on our worst-monetising clusters. Applying the August per-cluster
`$/blog click` to the US page mix:

| Cluster | US clicks (90d) | our $/blog click | value |
|---|---|---|---|
| mosquito | 620 | $0.164 | $101.68 |
| **tick** | **286** | **$0.000** | **$0.00** |
| flies | 116 | $0.067 | $7.77 |
| general | 53 | $0.320 | $16.96 |

Scaled to all 3,041 US clicks: **≈ $119/month gross**, and that assumes US traffic monetises
exactly like Canadian traffic, for which we have zero measured evidence. Then subtract the
measured 7% returns haircut and up to 30% US withholding absent a valid treaty claim.

Call it **$80–$137/month best case**, against **CA$656/month** of existing income that the US
agreement can reach (see §4).

**Caveat on the composition figures:** the per-page US numbers come from a country-filtered GSC
pull, which is the documented pruning trap — it captured about 37% of US clicks. Use the mix for
relative comparison, not as absolute totals.

## 3. Second correction — the ban was not OneLink, and it is documented

`data/HANDOFF.md` says a prior account was "banned over a US/OneLink setup". That is wrong, and
the real cause has been sitting in `AMAZON_AUDIT.md` at the repo root since 2026-07-13.

What actually happened, in Amazon's own quoted words: *"not using tracking IDs associated with
your store … unable to determine the source of traffic."*

The mechanism was **our own code**. `components/BuyLink.tsx` was a client component that
server-rendered the Canadian link with `buzzskito20-20`, then in a `useEffect` swapped it to
`amazon.com` with `buzzskito200d-20`. Amazon's reviewer is US-based; the swap fired when they
loaded the page, so every visible link carried a tag that did not belong to the account under
review. All 78 client chunks carried both `amazon.com` and the US tag.

Two things follow:

- **OneLink was never involved.** It is Amazon's own product and was not the culprit.
- **It was a rejection during application review, not a violation-termination of an earning
  account** — and commit `b6467a7` (2026-07-14) records that a compliant re-application was
  approved the next day, issuing `buzzskito200b-20`. We are not sitting behind an uncleared
  re-join gate.

**The instruction's substance was right for the wrong reason.** "Never geo-swap the links" is
exactly the correct lesson. "Never use OneLink" is a misattribution. Keep the first; know the
second is folklore.

## 4. The real risk, and it is not the one we were guarding against

Section 2 of both the Canadian and US Operating Agreements, verbatim and identical:

> "If you violate this Agreement, **or if you violate terms and conditions of any other applicable
> Amazon marketing agreement**, then … we reserve the right to permanently … cease payment of …
> any and all commission income otherwise payable to you under this Agreement, **whether or not
> directly related to such violation**."

So a mistake on a future US account can forfeit the Canadian income. The CA$656/month is exposed
to US-side conduct **even with zero cross-locale linking**. That asymmetry — $137/month of upside
against $656/month of downside — is the whole decision.

Section 6(g) separately lets Amazon terminate where it "previously terminated … with respect to
you or other persons that we determine are affiliated with you". Whether Amazon internally links
the old rejected IDs to the current account is invisible to us and unresolvable from outside.

## 5. What the build would actually be

**Account.** Holding both a `.ca` and a `.com` account is explicitly normal — verified from
Amazon's own documentation: *"Your Amazon Associates tag works only in the locale in which you
register. If you want to be an Amazon Associate in more than one locale, you must register
separately for each locale."* There is no exclusivity term in either agreement; a full-text search
of all four documents (both agreements, both policy sets) found none.

**Tax.** W-8BEN as a Canadian entity, treaty claim to avoid up to 30% withholding. Accountant
question, not a developer one — do not model US net revenue without it.

**The 3-sales-in-180-days gate.** Not a real constraint at ~1,014 US clicks/month. Ignore it as a
blocker.

**Link architecture — only one option is safe.** Show **both storefronts as two visible buttons**
("Buy on Amazon.ca / Buy on Amazon.com") with no detection and no redirect. Every other pattern —
client geo-swap, server geo-detection, OneLink — makes what a visitor sees differ from what a
reviewer or crawler sees, and *that divergence is precisely what got us rejected*. Crawler parity
is not a style preference here; it is the documented failure mode.

The cost of two buttons is some conversion friction. The benefit is that the static HTML, the
crawler, the reviewer and the visitor all see the same thing.

**The one absolute rule:** never ship an `amazon.com` href carrying a tag not registered to an
approved US account. That reproduces the 2026-07 failure exactly. `scripts/check-amazon.mjs` is
fail-closed and will block it — leave that guard alone.

## 6. Do not write to Amazon to ask

The tempting first move is a "free" support enquiry about the prior closure. It is not free. It
volunteers a resolved prior rejection, in writing, to a human reviewer, against the account that
is currently paying — and §6(g) turns on whether Amazon *determines* affiliation, a determination
that enquiry invites. It is irreversible, the reply binds nobody, and the question it asks was
already answered in practice by the approved July re-application.

## 7. Recommendation

**Do not stand up the US Amazon side this season.** $137/month best case, unproven, against
CA$656/month that the US agreement can legally reach.

**Do this instead — it is worth more and carries no account risk.** The tick cluster is the
problem in both markets:

| Cluster | blog clicks | → Amazon clicks | pass-through | earned |
|---|---|---|---|---|
| mosquito | 1,310 | 973 | 74% | $215.15 |
| wasp | 383 | 375 | 98% | $38.12 |
| **tick** | **219** | **25** | **11%** | **$0.00** |

Tick pages are read and then abandoned — an 11% pass-through against 74% for mosquito. They are
identification content that never asks. And **286 of our US clicks (27% of the sampled mix) land
in that cluster.** Fixing tick monetisation earns in Canada *and* captures the largest single
slice of US traffic, with zero exposure to Amazon account risk.

If US revenue is wanted sooner, the minimal-exposure step is one non-Amazon US affiliate or brand
link on `laser-mosquito-killer-photon-matrix-review` — our largest US destination at 430 clicks /
90 days. One page, one link, one revert to undo, and every `amazon.ca` link left byte-for-byte
untouched.

## 8. Open questions nobody should guess at

- The US withholding rate for BuzzSkito LTD — accountant.
- Whether the July event was recorded by Amazon as a rejection or a termination. The internal
  evidence says rejection, but Amazon's own classification is not visible to us and §6(g) reads
  differently for each. The original Amazon email would settle it.
- Whether `amazon.ca` fulfils to US addresses (the primary page returned 503 when checked).
- Whether US identification/scam-check traffic converts on substitute products at all. The top US
  page ranks for "is photon matrix real" and "photon matrix reviews and complaints" — the reviewed
  device is not an Amazon product, so all 10 of its affiliate elements point at substitutes. That
  is unmeasured, and it is 38% of the sampled US clicks.
