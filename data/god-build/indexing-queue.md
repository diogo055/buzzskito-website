# Daily "Request indexing" queue

Owner, Oct 29, 2026: "request indexing on the most important ones... every day around the same time when it resets. It's important to do this manually every day."

## Rules

- **Daily limit:** Search Console allows about 10-12 requests a day, so do the top 10-12 not-yet-done URLs each day.
- **Skip pages already indexed.** Check each URL first with the URL Inspection API: `scratchpad gsc/inspect_urls.py`, or Search Console's inspection box. Mark them "indexed".
- **Order:** most important first. That means the biggest search demand (god list Trends volume), new pages before old, and bite and identification pages first.
- **After every run:** add new releases at the right priority, and mark each line `requested YYYY-MM-DD` or `indexed`.

## Procedure

Use the owner's Chrome (Claude in Chrome), signed in to Search Console:

1. Open https://search.google.com/search-console?resource_id=sc-domain%3Abuzzskito.ca.
2. Paste the full URL into the top "Inspect any URL" box and press Enter. Wait for the result.
3. If it says "URL is on Google", mark the line `indexed` and move on.
4. Otherwise click **Request indexing**: the newest matching button on the page. Wait about 40 seconds for the live test.
5. When "Indexing requested" shows, click **Dismiss**.
6. If you see "Quota exceeded" or "Oops! Something went wrong" twice, stop for the day.

Never change any Search Console setting, and never remove or submit sitemaps.

## Queue (in priority order)

1. https://buzzskito.ca/blog/maggots (requested 2026-10-29)
2. https://buzzskito.ca/blog/black-widow-spiders (indexed)
3. https://buzzskito.ca/blog/black-widow-bite (indexed)
4. https://buzzskito.ca/blog/dust-mites (requested 2026-10-29)
5. https://buzzskito.ca/blog/lice-eggs (indexed)
6. https://buzzskito.ca/blog/fleas-on-humans (requested 2026-10-29)
7. https://buzzskito.ca/blog/wasp-vs-hornet (indexed)
8. https://buzzskito.ca/blog/fire-ant-stings (indexed)
9. https://buzzskito.ca/blog/bed-bug-eggs (indexed)
10. https://buzzskito.ca/blog/kissing-bug-bites (indexed)
11. https://buzzskito.ca/blog/what-do-lice-look-like (requested 2026-10-29)
12. https://buzzskito.ca/blog/no-see-ums (indexed)
13. https://buzzskito.ca/blog/japanese-beetles (requested 2026-10-29)
14. https://buzzskito.ca/blog/june-bugs (indexed)
15. https://buzzskito.ca/blog/hobo-spiders (indexed)
16. https://buzzskito.ca/blog/mite-bites (indexed)
17. https://buzzskito.ca/blog/sand-fleas (indexed)
18. https://buzzskito.ca/blog/wasp-nest-identification (indexed)
19. https://buzzskito.ca/blog/rabbit-poop (indexed)
20. https://buzzskito.ca/blog/spider-mites (requested 2026-10-29)
21. https://buzzskito.ca/blog/baby-rats
22. https://buzzskito.ca/blog/rat-nest
23. https://buzzskito.ca/blog/bugs-in-carpet
24. https://buzzskito.ca/blog/tiny-white-bugs
25. https://buzzskito.ca/blog/bugs-in-bathroom
26. https://buzzskito.ca/blog/bugs-in-kitchen
27. https://buzzskito.ca/blog/crickets-in-house
28. https://buzzskito.ca/blog/stick-bugs
29. https://buzzskito.ca/blog/possum-vs-opossum (requested 2026-10-28)
30. https://buzzskito.ca/blog/how-long-do-rats-live (requested 2026-10-28)
31. https://buzzskito.ca/blog/carpet-beetle-rash (requested 2026-10-28)
32. https://buzzskito.ca/blog/pseudoscorpions (requested 2026-10-28)

Days 4-5 (released Oct 29) go here when they go live.
