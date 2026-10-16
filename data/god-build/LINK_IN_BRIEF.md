# Brief: linking strong existing articles to newly released pages

A new page is found and ranked faster when pages Google already trusts link to it. On this site
pages with 10-19 internal links in average 3.4x the impressions of pages with 0-4
(`.claude/skills/buzzskito-ops`, rule 11). So after each release, a few of the site's strongest
articles on the same subject get ONE plain, useful sentence pointing at the new page. You get a
list: source page, target page, and where the link belongs.

## Rules

1. **Edit only the pages on your list.** Not components, lib, the sitemap, constants or any other
   page.
2. **The target must be live.** Check that `app/<path>/page.tsx` exists for every target before
   linking it. A target that is not live yet: skip it and say so.
3. **Additive only.** Add one new sentence (or a short new paragraph) right after the paragraph
   that discusses the target's subject. Do not delete, reword or move existing text. The one
   exception is a sentence your list names as "now false" (for example "covered here rather than
   at their own page" once that page exists): change only what makes it false, and quote the old
   and new wording in your report.
4. **One link per target per page, at most 3 new links per page,** never in a heading, a table,
   a list item that is a product pick, an FAQ answer string (those feed structured data), a
   caption, the quick-answer box or the first screen of the article.
5. **Never touch an affiliate or recirculation line**: anything containing `BuyLink`, `TopPick`,
   `StickyBuyBar`, `AffiliateDisclosure`, `AwardRow`, `AwardCard`, `AmazonLink`, `asin=`,
   `search=`, `NextUp`, `RelatedLinks` or `ReadNext`. Do not put a sentence between a
   `<TopPick>` / `<BuyLink>` and the text that introduces it.
6. **The sentence states no new facts.** It tells the reader what the linked page offers ("Photos
   of the spiders most often mistaken for a brown recluse, and the one check that rules each out,
   are in our [guide to brown recluse look-alikes]"), in the page's own voice and spelling
   (Canadian pages keep Canadian spelling). Descriptive anchor text naming the target's subject,
   not "click here", not the exact same anchor on every page.
7. **Audience:** the target's `audience` is in `data/god-build/plan.src.json` ("us", "na"). From
   a Canadian article, link a "us" page only when it truly helps a Canadian reader (a range map,
   a photo guide), and say it is for North America or the US where that matters.
8. **Link markup:** copy the page's own internal-link pattern (usually `<Link href="/blog/...">`
   from `next/link`, already imported; add the import only if the page has none). In guide JSON
   (`content/guides/<slug>.json`) use the markdown form `[anchor](/blog/slug)` inside a body
   paragraph.
9. **Guide JSON pages are fact-checked records.** After editing one: `node
   scripts/validate-guide.mjs <slug>` must pass, then `node scripts/us-pages-mark-checked.mjs
   amend <slug> "<one line: link to /blog/x added in section Y>"`. Without the amend the next
   morning release fails.
10. **Dates stay.** Adding a link is not a content change: do not touch `UPDATED`, `DATE`,
    `dateModified` or the sitemap.

## Check before you report

```bash
f=app/blog/<slug>/page.tsx
for t in "<BuyLink" "<AwardRow" "<AwardCard" "<StickyBuyBar" "<AmazonLink" "<TopPick" "asin=" "search=" "<NextUp" "<RelatedLinks" "<ReadNext" "<Photo"; do
  a=$(git show HEAD:"$f" | grep -o -- "$t" | wc -l); b=$(grep -o -- "$t" "$f" | wc -l)
  [ "$a" = "$b" ] || echo "MISMATCH $t: $a -> $b"
done
git diff -U0 "$f" | grep '^-[^-]'   # removed lines: none, except a "now false" sentence on your list
npx tsc --noEmit
```

Do NOT run `next build` or `npm run build`, and do NOT `git add` or commit.

## Report

For each page: each link added (target, the section it sits in, the full new sentence), any
removed line quoted exactly, targets skipped and why, and the result of the checks above.
