"""Site traffic map, Nov 10, 2026 (read-only): GA4 page views + Search Console web clicks per page for the
last 48 hours (to 7 pm Toronto, Nov 10), the last 7 days and the last 28 days. Bots excluded in GA4
(city Ashburn, Singapore/China), as in every read since Oct 19."""
import json, os, datetime as dt
from google.oauth2.credentials import Credentials
from google.auth.transport.requests import Request, AuthorizedSession

OUT = os.path.dirname(os.path.abspath(__file__))


def session(tok):
    c = Credentials.from_authorized_user_file(tok)
    if not c.valid:
        c.refresh(Request())
    return AuthorizedSession(c)


ga = session(r"C:\Users\buzzs\Documents\mcp-gsc\ga4_token.json")
gs = session(r"C:\Users\buzzs\Documents\mcp-gsc\token.json")
GA = "https://analyticsdata.googleapis.com/v1beta/properties/463652856:runReport"
GSC = "https://searchconsole.googleapis.com/webmasters/v3/sites/sc-domain%3Abuzzskito.ca/searchAnalytics/query"
BOTS = [{"notExpression": {"filter": {"fieldName": "city", "stringFilter": {"matchType": "EXACT", "value": "Ashburn"}}}},
        {"notExpression": {"filter": {"fieldName": "country", "inListFilter": {"values": ["Singapore", "China"]}}}}]

# 48-hour window in Toronto time (EST, UTC-5): Nov 8 7:00 pm -> Nov 10 7:00 pm. Pacific (GSC) = Toronto - 3 h.
END_ET = dt.datetime(2026, 11, 10, 15, 0)
START_ET = END_ET - dt.timedelta(hours=48)
H_ET = [(START_ET + dt.timedelta(hours=i)).strftime("%Y%m%d%H") for i in range(48)]
H_PT = {(START_ET - dt.timedelta(hours=3) + dt.timedelta(hours=i)).strftime("%Y-%m-%dT%H:00:00-08:00") for i in range(48)}
HOURF = [{"filter": {"fieldName": "dateHour", "inListFilter": {"values": H_ET}}}]


def ga_run(name, dims, mets, a, b, extra=None):
    ex = BOTS + (extra or [])
    out, off = [], 0
    while True:
        body = {"dateRanges": [{"startDate": a, "endDate": b}], "dimensions": [{"name": d} for d in dims],
                "metrics": [{"name": m} for m in mets], "dimensionFilter": {"andGroup": {"expressions": ex}},
                "limit": 100000, "offset": off}
        r = ga.post(GA, json=body, timeout=180)
        r.raise_for_status()
        j = r.json(); rows = j.get("rows", [])
        out += [dict({d: x["dimensionValues"][i]["value"] for i, d in enumerate(dims)},
                     **{m: float(x["metricValues"][i]["value"]) for i, m in enumerate(mets)}) for x in rows]
        off += len(rows)
        if not rows or off >= j.get("rowCount", 0):
            break
    json.dump(out, open(os.path.join(OUT, f"ga_{name}.json"), "w", encoding="utf-8"))
    print(f"GA4 {name}: {len(out)} rows", f"views={sum(r.get('screenPageViews', 0) for r in out):.0f}" if out and 'screenPageViews' in out[0] else "")
    return out


def gsc_run(name, a, b, dims, state="all", keep=None):
    rows, start = [], 0
    while True:
        body = {"startDate": a, "endDate": b, "type": "web", "dataState": state, "dimensions": dims,
                "rowLimit": 25000, "startRow": start}
        r = gs.post(GSC, json=body, timeout=180)
        r.raise_for_status()
        got = r.json().get("rows", []); rows += got; start += len(got)
        if len(got) < 25000:
            break
    if keep:
        rows = [x for x in rows if keep(x)]
    json.dump(rows, open(os.path.join(OUT, f"gsc_{name}.json"), "w", encoding="utf-8"))
    print(f"GSC {name}: {len(rows)} rows, clicks={sum(x['clicks'] for x in rows):.0f}, impressions={sum(x['impressions'] for x in rows):.0f}")
    return rows


# ---- GA4 ----
ga_run("tot48", [], ["sessions", "totalUsers", "screenPageViews"], "2026-11-08", "2026-11-10", HOURF)
ga_run("hourly48", ["dateHour"], ["screenPageViews", "sessions"], "2026-11-08", "2026-11-10", HOURF)
D = ["pagePath", "country", "sessionDefaultChannelGroup"]
ga_run("pages48", D, ["screenPageViews"], "2026-11-08", "2026-11-10", HOURF)
ga_run("pages7", D, ["screenPageViews"], "2026-11-03", "2026-11-09")
ga_run("pages28", D, ["screenPageViews"], "2026-10-13", "2026-11-09")
ga_run("tot7", [], ["sessions", "totalUsers", "screenPageViews"], "2026-11-03", "2026-11-09")
ga_run("tot28", [], ["sessions", "totalUsers", "screenPageViews"], "2026-10-13", "2026-11-09")
ga_run("prev48", [], ["sessions", "totalUsers", "screenPageViews"], "2026-11-06", "2026-11-08",
       [{"filter": {"fieldName": "dateHour", "inListFilter": {"values": [
           (START_ET - dt.timedelta(hours=48) + dt.timedelta(hours=i)).strftime("%Y%m%d%H") for i in range(48)]}}}])

# ---- Search Console (web) ----
gsc_run("h48", "2026-11-08", "2026-11-10", ["hour", "page"], "hourly_all", keep=lambda x: x["keys"][0] in H_PT)
gsc_run("hourly", "2026-11-08", "2026-11-10", ["hour"], "hourly_all", keep=lambda x: x["keys"][0] in H_PT)
gsc_run("p7", "2026-11-03", "2026-11-09", ["page"])
gsc_run("p28", "2026-10-13", "2026-11-09", ["page"])
d = dt.date(2026, 10, 28)
while d <= dt.date(2026, 11, 10):
    gsc_run(f"day_{d.isoformat()}", d.isoformat(), d.isoformat(), ["page"])
    d += dt.timedelta(days=1)
print("window ET:", START_ET, "->", END_ET, "| PT hours:", min(H_PT), "->", max(H_PT))
