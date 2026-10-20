"""Holiday check: Amazon.ca earnings per 1,000 Canadian visits, Nov 20 - Dec 31, 2026 against October.

Read-only. Pulls Canadian sessions and Amazon clicks from GA4 (property 463652856) for both windows;
the money comes from the owner's Amazon Associates numbers (his screenshots or the Tracking ID CSV).

    python -I scripts/holiday-amazon-compare.py --oct-earnings 290.15 --oct-clicks 1490 \
        --hol-earnings 610.40 --hol-clicks 2050

    (or --oct-csv / --hol-csv <Tracking ID report CSV> instead of the four numbers)

When: run it on or after Jan 15, 2027. Amazon books earnings when items ship, so late-December
orders are only counted in early January; read October again at the same time so both windows
are equally settled. Use the Associates numbers for exactly Oct 1-31 and Nov 20-Dec 31.

Why per 1,000 CANADIAN sessions: Amazon.ca pays on Canadian carts, and the Canada filter is not
affected by the Oct 19-20 bot block (Singapore and China), which cut all-country sessions ~20%.

What each line means:
  - $ per 1,000 Canadian sessions  = the headline (October 2026 ran about $68).
  - Amazon clicks per 1,000         = how often readers go to Amazon (layout: the top box).
  - $ per Amazon click (EPC)        = what each trip is worth (season: holiday carts).
  The headline is the product of the last two, so a change can be read as "more trips" or
  "bigger carts". The per-page block shows the 30 winter pages + the 5 pages boxed on Oct 20.
"""
import argparse
import csv
import os
import sys

from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from googleapiclient.discovery import build

TOKEN = r"C:\Users\buzzs\Documents\mcp-gsc\ga4_token.json"
PROP = "properties/463652856"
OCT = ("2026-10-01", "2026-10-31")
HOL = ("2026-11-20", "2026-12-31")

# The 30 winter pages with the most Canadian Amazon clicks in Oct 1-19, 2026 (all carry the top box
# since Oct 20, c86dbc38) and the 5 pages that got it on Oct 20 evening.
WINTER_30 = """advion-cockroach-gel-bait best-dehumidifier-for-cold-garage-canada best-bed-bug-steamer-canada
motion-activated-sprinkler-canada best-rat-trap-canada how-to-get-rid-of-drain-flies-canada best-fruit-fly-trap-canada
how-to-get-rid-of-cockroaches-canada best-bed-bug-detector-canada best-hepa-vacuum-for-bed-bugs-and-fleas-canada
raccoon-deterrent best-flea-spray-for-home-canada best-raccoon-live-trap-canada best-cockroach-spray-canada
bed-bug-mattress-encasement-canada bed-bug-interceptor-traps-canada best-rodent-repellent-for-cars-canada
cimexa-bed-bug-review-canada best-bed-bug-powder-canada rat-poison-canada-what-is-legal how-to-get-rid-of-centipedes-canada
bed-bug-spray-canada best-mouse-trap-canada bed-bug-heater-canada rodent-exclusion-kit-canada
ecoraider-bed-bug-spray-review-canada best-whole-room-bed-bug-heater-canada how-to-get-rid-of-cluster-flies-canada
mouse-proof-garage-door-seal-canada mouse-repellent-canada""".split()
WINTER_30 = ["/blog/" + s for s in WINTER_30]
BOXED_OCT20 = ["/blog/bed-bug-heat-treatment-diy-canada", "/blog/cluster-flies-in-house-canada",
               "/pest-product-guides/bed-bug-control", "/pest-product-guides/rodent-control",
               "/pest-product-guides/cockroach-control"]


def ga4():
    creds = Credentials.from_authorized_user_file(TOKEN, ["https://www.googleapis.com/auth/analytics.readonly"])
    if not creds.valid:
        creds.refresh(Request())
    return build("analyticsdata", "v1beta", credentials=creds, cache_discovery=False)


def canada(extra=None):
    f = {"filter": {"fieldName": "country", "stringFilter": {"matchType": "EXACT", "value": "Canada"}}}
    return {"andGroup": {"expressions": [f, extra]}} if extra else f


def report(svc, body):
    r = svc.properties().runReport(property=PROP, body=dict(body, limit=100000)).execute()
    return r.get("rows", [])


def window(svc, start, end):
    dr = [{"startDate": start, "endDate": end}]
    tot = report(svc, {"dateRanges": dr, "metrics": [{"name": "sessions"}], "dimensionFilter": canada()})
    sessions = int(tot[0]["metricValues"][0]["value"]) if tot else 0
    click_filter = {"filter": {"fieldName": "eventName", "stringFilter": {"matchType": "EXACT", "value": "affiliate_click"}}}
    clicks = {}
    for r in report(svc, {"dateRanges": dr, "dimensions": [{"name": "pagePath"}], "metrics": [{"name": "eventCount"}],
                          "dimensionFilter": canada(click_filter)}):
        clicks[r["dimensionValues"][0]["value"]] = int(r["metricValues"][0]["value"])
    views = {}
    for r in report(svc, {"dateRanges": dr, "dimensions": [{"name": "pagePath"}], "metrics": [{"name": "screenPageViews"}],
                          "dimensionFilter": canada()}):
        views[r["dimensionValues"][0]["value"]] = int(r["metricValues"][0]["value"])
    topbox = 0
    try:
        for r in report(svc, {"dateRanges": dr, "dimensions": [{"name": "customEvent:placement"}], "metrics": [{"name": "eventCount"}],
                              "dimensionFilter": canada(click_filter)}):
            if r["dimensionValues"][0]["value"] == "TopBox":
                topbox = int(r["metricValues"][0]["value"])
    except Exception:  # the placement dimension is registered (Sep 16, 2026); never fail the check on it
        topbox = None
    return {"sessions": sessions, "clicks": clicks, "views": views, "topbox": topbox}


def from_csv(path):
    """Sum Clicks and Total Earnings over every tag row of an Associates Tracking ID CSV."""
    with open(path, newline="", encoding="utf-8-sig") as fh:
        rows = list(csv.reader(fh))
    head_i = next(i for i, r in enumerate(rows) if any(c.strip().lower() == "clicks" for c in r))
    head = [c.strip().lower() for c in rows[head_i]]
    ic, ie = head.index("clicks"), next(i for i, c in enumerate(head) if "earnings" in c)
    num = lambda s: float(str(s).replace("$", "").replace(",", "").replace("CA", "").strip() or 0)
    body = [r for r in rows[head_i + 1:] if len(r) > max(ic, ie) and r[ic].strip()]
    return sum(num(r[ie]) for r in body), sum(num(r[ic]) for r in body)


def group(w, paths):
    v = sum(w["views"].get(p, 0) for p in paths)
    c = sum(w["clicks"].get(p, 0) for p in paths)
    return v, c, (c / v * 1000 if v else 0)


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    for k in ("oct", "hol"):
        ap.add_argument(f"--{k}-earnings", type=float)
        ap.add_argument(f"--{k}-clicks", type=float, help="Amazon's own click count for the window")
        ap.add_argument(f"--{k}-csv")
        ap.add_argument(f"--{k}-window", help="override the dates as START,END (YYYY-MM-DD)")
    a = ap.parse_args()
    global OCT, HOL
    if a.oct_window:
        OCT = tuple(a.oct_window.split(","))
    if a.hol_window:
        HOL = tuple(a.hol_window.split(","))
    money = {}
    for k in ("oct", "hol"):
        if getattr(a, f"{k}_csv"):
            money[k] = from_csv(getattr(a, f"{k}_csv"))
        elif getattr(a, f"{k}_earnings") is not None and getattr(a, f"{k}_clicks") is not None:
            money[k] = (getattr(a, f"{k}_earnings"), getattr(a, f"{k}_clicks"))
        else:
            sys.exit(f"Give --{k}-earnings and --{k}-clicks (Amazon.ca, from the Associates dashboard) or --{k}-csv.")

    svc = ga4()
    w = {"oct": window(svc, *OCT), "hol": window(svc, *HOL)}
    if not w["oct"]["sessions"] or not w["hol"]["sessions"]:
        sys.exit("GA4 returned no Canadian sessions for one window (dates in the future, or a typo).")
    label = {"oct": f"October ({OCT[0]} to {OCT[1]})", "hol": f"Holiday ({HOL[0]} to {HOL[1]})"}
    print(f"{'':34}{'October':>14}{'Holiday':>14}{'change':>10}")
    line = lambda name, o, h, fmt: print(f"{name:34}{fmt.format(o):>14}{fmt.format(h):>14}{(h / o - 1) * 100 if o else 0:>+9.0f}%")
    s = {k: w[k]["sessions"] for k in w}
    e = {k: money[k][0] for k in w}
    c = {k: money[k][1] for k in w}
    ga = {k: sum(w[k]["clicks"].values()) for k in w}
    line("Canadian sessions (GA4)", s["oct"], s["hol"], "{:,.0f}")
    line("Amazon.ca earnings ($)", e["oct"], e["hol"], "{:,.2f}")
    line("$ per 1,000 Canadian sessions", e["oct"] / s["oct"] * 1000, e["hol"] / s["hol"] * 1000, "{:,.2f}")
    line("Amazon clicks per 1,000 sessions", c["oct"] / s["oct"] * 1000, c["hol"] / s["hol"] * 1000, "{:,.1f}")
    line("$ per Amazon click (EPC)", e["oct"] / c["oct"], e["hol"] / c["hol"], "{:,.3f}")
    line("GA4 Amazon clicks per 1,000 (CA)", ga["oct"] / s["oct"] * 1000, ga["hol"] / s["hol"] * 1000, "{:,.1f}")
    print()
    for name, paths in (("30 winter pages", WINTER_30), ("5 pages boxed Oct 20 evening", BOXED_OCT20)):
        (vo, co, ro), (vh, ch, rh) = group(w["oct"], paths), group(w["hol"], paths)
        print(f"{name}: GA4 Amazon clicks per 1,000 Canadian views {ro:,.0f} -> {rh:,.0f}  ({co}/{vo} -> {ch}/{vh})")
    for k in w:
        tb = w[k]["topbox"]
        if tb is not None and ga[k]:
            print(f"{label[k]}: top box share of Canadian GA4 Amazon clicks {tb / ga[k] * 100:.0f}% ({tb} of {ga[k]})")
    print("\nOctober had the top box only from Oct 20 (12 of 31 days on the 214 pages, none on the 5): read the")
    print("click lines as 'mostly without' vs 'with'. Note any Mediavine ad start date inside the window.")


if __name__ == "__main__":
    main()
