# Brief: adding real photos to a hand-written article

Used for the October 2026 near-miss upgrade: articles that rank 5th to 10th for "what does X
look like" searches and had no photograph at all. A real, credited photo next to the text it
illustrates is what those searches want, and it is what Google shows as a result thumbnail.

## What you have

- **The photo ledger:** `data/god-build/photos.json`. Every usable photo, by id (the file name
  in `public/guides/photos/` without `.webp`), with `subject`, `sourceDescription` (what the
  photo's own source says it shows), `license`, `credit`, `width`, `height`. Use only these.
  Nothing AI-generated, nothing from anywhere else.
- **`<Photo>`** (`components/Photo.tsx`):
  ```tsx
  import Photo from '@/components/Photo'
  <Photo id="culex-larvae" alt="..." caption="..." />
  ```
  It renders the photo with its credit and licence (pulled from the ledger), tap-to-enlarge and
  ImageObject schema. `caption` is plain text and required. `alt` is optional (defaults to the
  ledger subject). Do not pass `priority`: the photos sit below the first screen.
- **`shareImage(id)`** (`lib/photos.ts`): the page's lead photo for its share card and schema.
  Only a `public-domain` or `CC0-1.0` photo is accepted (it throws otherwise).
  ```tsx
  import { shareImage } from '@/lib/photos'
  export const metadata = buildMetadata({ ...existing fields..., image: shareImage('culex-larvae') })
  blogPostingSchema({ ...existing fields..., image: shareImage('culex-larvae') })
  ```

## Rules

1. **Edit only the page files you were given.** Not components, lib, the sitemap, constants or
   any other page.
2. **Additive only.** Do not delete, reword or move existing text. The only existing lines you
   may change are: the import block (add lines), the `buildMetadata({...})` call and the
   `blogPostingSchema({...})` call (add the `image` field). Leave `UPDATED`, `DATE`, titles and
   descriptions alone; dates and titles are set separately.
3. **Never touch an affiliate or recirculation line**: anything containing `BuyLink`, `TopPick`,
   `StickyBuyBar`, `AffiliateDisclosure`, `AwardRow`, `AwardCard`, `AmazonLink`, `asin=`,
   `search=`, `NextUp`, `RelatedLinks` or `ReadNext`. Do not put a photo between a
   `<TopPick>` / `<BuyLink>` and the text that introduces it.
4. **Captions say only what the photo shows.** Take the facts from the ledger's
   `sourceDescription`, then add at most one sentence on what the reader should look for, using
   only facts the page already states. No new numbers, no new claims. Never use a photo for
   something it does not show (a red velvet mite is not a chigger; a clover mite is not a tick).
   No double quotes inside a caption.
5. **Alt text** describes the photo in plain words and may use the search phrase naturally
   ("Mosquito larvae hanging head-down from the water surface") but must stay true.
6. **Placement:** each photo goes right after the paragraph or heading it illustrates, inside the
   article body: never inside a table, a list, an FAQ answer string or a `<Figure>`, and not
   directly next to an existing diagram. If the page has no natural spot for its key photos you
   may add ONE short new section (an `<h2>` plus the photos, styled like the page's other h2s),
   as close to the top of the article body as fits.
7. **How many:** 2 to 6 photos a page, each used once. Fewer good ones beat more weak ones.
8. **The lead photo** (the first one on the page, which is also the share image) should show the
   thing the page's main search asks about. It must be public-domain or CC0.
9. **Sensitive photos:** ordinary bites and rashes are fine anywhere on a page about them,
   including as the lead. A photo of tissue damage or anything graphic goes lower on the page,
   never as the lead or share image.
10. **A photo whose species rests only on its uploader's word** (for example
   `brown-recluse-penny`) is not an identification photo: skip it, or caption it as what it is
   (a spider its photographer identified as a brown recluse, shown for size).

## Check before you report

Run from the repo root (Git Bash):

```bash
f=app/blog/<slug>/page.tsx
for t in "<BuyLink" "<AwardRow" "<AwardCard" "<StickyBuyBar" "<AmazonLink" "<TopPick" "asin=" "search=" "<NextUp" "<RelatedLinks" "<ReadNext" "<Figure"; do
  a=$(git show HEAD:"$f" | grep -o -- "$t" | wc -l); b=$(grep -o -- "$t" "$f" | wc -l)
  [ "$a" = "$b" ] || echo "MISMATCH $t: $a -> $b"
done
git diff -U0 "$f" | grep '^-[^-]'      # every removed line: only the metadata/schema lines you extended
node scripts/check-photos.mjs
npx tsc --noEmit
```

Do NOT run `next build` or `npm run build` (other pages are being edited at the same time), and
do NOT `git add` or commit. If `tsc` reports errors only in files you did not edit, say so and
move on.

## Report

For each page: every photo placed (id, the heading it sits under, the caption), the share-image
id, and the removed lines from `git diff` quoted exactly.
