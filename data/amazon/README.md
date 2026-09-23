# Amazon tracking-ID reports

Drop the monthly Tracking ID CSV here. `scripts/monthly_review.mjs` reads the newest file
in this folder (by modified time) and recomputes earnings-per-click per cluster from it.

How to get it (about a minute):
1. affiliate-program.amazon.ca → Reports
2. Report type: **Tracking ID** · date range: last 30 days (or the previous calendar month)
3. Download → CSV → save it here as `tracking-id-YYYY-MM-DD.csv`

The CSV needs the columns Amazon already gives you: `Tracking ID`, `Clicks`, `Total Earnings`.
Nothing in this folder is published — it is only read by the review script.

Then run, from the website folder:

    python scripts/pull-gsc-90d.py
    node scripts/monthly_review.mjs

and read `reports/monthly_review_YYYY-MM.md`.
