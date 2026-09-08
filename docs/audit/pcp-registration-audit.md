# PCP registration audit — Phase 6, item 3

Run 2026-09-08. **Every result below came from Health Canada's own PMRA Pesticide Label Search**
(`pr-rp.hc-sc.gc.ca/ls-re/`), queried directly. Nothing here is from a retailer listing, a search
engine, or a product page.

## Method, and why it can be trusted

The PMRA search form posts by GET, so results are URL-addressable and repeatable:

```
https://pr-rp.hc-sc.gc.ca/ls-re/result-eng.php?searchfield1=PRO&operator1=CONTAIN
  &criteria1=<product>&p_status_reg=REGISTERED&p_status_hist=HISTORICAL...
```

Both `REGISTERED` and `HISTORICAL` are requested deliberately. That distinction is the whole point
— a discontinued registration still returns a PCP number, and treating one as current is exactly
the error that put a US-only Ortho SKU on two of our pages.

**The method was validated against a known-good before any conclusion was drawn.** Querying
registration number 29776 returns `RAID WASP & HORNET BUG KILLER 7 / REGISTERED / S. C. JOHNSON
AND SON, LIMITED` — matching the independently established fact. So a zero-result is a real
absence, not a malformed query.

## Results

| Product / brand searched | PMRA result | Verdict |
|---|---|---|
| Mosquito Dunks | **PCP 28888**, Summit Chemical, REGISTERED | OK |
| Summit B.T.I. Briquets | **PCP 28995**, REGISTERED | OK |
| Tomcat Rat Killer Disposable Bait Station | **PCP 31970**, REGISTERED | OK |
| Tomcat Mouse Killer Disposable Bait Station | **PCP 31437**, REGISTERED | OK |
| Tomcat (brand, all) | 28 records — 17 REGISTERED, 11 historical | OK |
| Raid Wasp & Hornet Bug Killer 7 | **PCP 29776**, REGISTERED | OK (control) |
| **Summit Mosquito Bits** | **no registration** | **PROBLEM** |
| **Wondercide** | **0 records** | **PROBLEM** |
| **Cedarcide** | **0 records** | **PROBLEM** |
| **Black Flag** | **35 records, every one HISTORICAL** | **PROBLEM** |

### The four problems, in order of exposure

**1. Summit Mosquito Bits is not registered in Canada — recommended on 3 pages.**
Searching the registrant rather than the product name closes this off properly: Summit Chemical
Company holds exactly three Canadian registrations — Mosquito Dunks (28888), B.T.I. Briquets
(28995), and a historical fungicide. Mosquito Bits is not among them. One of the three pages is
`/blog/mosquito-bits-canada-vs-dunks`, whose entire premise is comparing the two for a Canadian
reader. The Dunks half is fine; the Bits half recommends a product with no Canadian registration.

**2. Black Flag has no current Canadian registration at all — 35 registrations, all historical.**
That includes `BLACK FLAG FOG INSECTICIDE` (28121) and `BLACK FLAG OUTDOOR FOGGER` (16709). The
brand has left the Canadian market. `/blog/mosquito-fogger-canada` recommends three Black Flag
products (`black flag propane fogger`, `black flag fogging insecticide`, `black flag fogger fuel`).

**3. Wondercide — zero records.** Recommended on `/blog/best-tick-repellent-yard-canada` as
`wondercide tick yard spray`.

**4. Cedarcide — zero records.** Recommended on the same page as `cedarcide tick yard spray`.

A caveat worth stating on 3 and 4: cedar-oil products can qualify for exemption from registration
in some circumstances, so "no PCP record" is not automatically "illegal". It IS enough to say we
cannot show a Canadian registration for them, which is what the brief asks for. They should not be
presented as PMRA-registered, and the honest framing is that they are minimum-risk-class products
rather than registered pesticides — but **that framing itself needs verification before it ships.**

## Still unverified

Not yet queried: Cutter, Repel, OFF! Deep Woods, Doktor Doom, KONK, Burgess, Murphy's Naturals,
Watkins. Generic searches that name no brand (`picaridin insect repellent`, `propane mosquito
fogger`, `oil of lemon eucalyptus insect repellent`) do not need a product lookup — the active
ingredients icaridin and OLE are registered in Canada — but the pages should not imply a specific
product is registered when the link is a generic search.

## What this changes about Phase 6 item 3

The brief asked to "confirm and display the Canadian PMRA/PCP number for every pesticide
recommended". Confirming came first, and it found that **4 of the 10 products checked cannot be
displayed with a PCP number because they do not have a current one.** Displaying numbers is the
easy half; the audit is the half that matters, and it is not finished.

**Nothing on these pages was changed on the strength of this audit yet.** Removing or re-pointing
product recommendations is a commercial decision on live earning pages, and the Wondercide and
Cedarcide exemption question needs its own verification. Flagged for Diogo.
