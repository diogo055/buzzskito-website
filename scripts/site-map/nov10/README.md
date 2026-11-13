# Site map refresh, Nov 10, 2026 version (read-only scripts)

Feeds the owner's site map dashboard (https://claude.ai/artifact/BjoM5C1kcLqJaAhsbSskwA). Since Nov 10 the page needs
three attached files: `buzzskito-pages.json` (dataset `pages`: Google clicks AND GA4 views per page for h48, d7, last28,
summer, year_2026, plus monthly Google clicks), `buzzskito-new-pages.json` (dataset `newpages`: URL Inspection status of
recent releases) and `buzzskito-48-hours.json` (dataset `site_windows`). The older `../gsc_pull.py` + `../assemble.py`
make only the first file without views, which the Nov 10 page cannot draw.

The scripts write next to themselves, so COPY THIS FOLDER OUTSIDE THE REPO (a scratchpad) and run it there:

1. Edit the dates: `END_ET` in `pull.py` (end of the 48 hours, Toronto time; use Search Console's last complete hour),
   the 7/28-day and year windows in `pull.py` and `pull2.py`, the release cut-off in `inspect_new.py`, `CHECKED` and the
   build checkout path in `assemble2.py`.
2. `python pull2.py` (imports and runs `pull.py` first), `python inspect_new.py`, then `python assemble2.py` after a
   fresh `npm run build` in the build checkout. Output goes to `upload/`.
3. Upload the three files as assets of the artifact, then `set` datasets `pages`, `newpages`, `site_windows` with the
   new `/_blob/` urls, `updated` and `edit`. If the dates changed, update the page's words and the `days`/`DAYS` (Nov)
   counts in `files/index.html`.
