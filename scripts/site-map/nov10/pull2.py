"""Extra pulls for the site map refresh (read-only): previous-48h Google hourly totals, GA4 views for summer,
all of 2026 and since Oct 27, Google web clicks per page per month of 2026 (Jan 1 - Nov 9), and day Oct 27."""
import calendar, json, os, datetime as dt
import pull  # re-uses the sessions, window and helpers (runs pull.py's pulls with END_ET = 3 pm)
from pull import ga_run, gsc_run, START_ET, OUT

H_PT_PREV = {(START_ET - dt.timedelta(hours=51) + dt.timedelta(hours=i)).strftime("%Y-%m-%dT%H:00:00-08:00") for i in range(48)}
gsc_run("hourly_prev", "2026-11-06", "2026-11-08", ["hour"], "hourly_all", keep=lambda x: x["keys"][0] in H_PT_PREV)
D = ["pagePath", "country", "sessionDefaultChannelGroup"]
ga_run("pages_summer", ["pagePath"], ["screenPageViews"], "2026-05-01", "2026-09-30")
ga_run("pages_year", ["pagePath"], ["screenPageViews"], "2026-01-01", "2026-11-09")
ga_run("pages_since", ["pagePath"], ["screenPageViews"], "2026-10-27", "2026-11-10")
gsc_run("day_2026-10-27", "2026-10-27", "2026-10-27", ["page"])
months = {}
for m in range(1, 12):
    a = f"2026-{m:02d}-01"
    b = min(f"2026-{m:02d}-{calendar.monthrange(2026, m)[1]:02d}", "2026-11-09")
    months[f"{m:02d}"] = {"start": a, "end": b, "rows": {x["keys"][0]: [x["clicks"], x["impressions"]] for x in gsc_run(f"month_{m:02d}", a, b, ["page"])}}
json.dump(months, open(os.path.join(OUT, "gsc_months.json"), "w", encoding="utf-8"))
print("prev48 PT hours:", min(H_PT_PREV), "->", max(H_PT_PREV))
