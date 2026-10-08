# Writer brief: North American pest guides (October 2026)

You are writing ONE page for buzzskito.ca, the site of a licensed mosquito and tick control
company. The page is for a reader in the **United States** who typed a question into Google.
It will carry display ads, so it earns only if it is the page that best answers that question.
It carries **no affiliate links and sells nothing**.

Your page is one JSON file. A shared template renders it, so you write content, not code.

## What "quality" means here (read this twice)

1. **Answer first.** The first sentence under every H2 answers that heading's question. No
   warm-up, no "many homeowners wonder". A reader who only reads the first sentence of each
   section should leave with the right answer.
2. **Every hard fact is checked against a source you actually opened.** A hard fact is any
   number, size, time, temperature, percentage, dose, species range, legal or regulatory
   statement, health statement, or product ingredient. Open the source with WebFetch, find
   the fact on the page, then write it. If you cannot find support, soften the claim to what
   the source does say, or cut it. Never write a number from memory.
3. **Sources are primary and authoritative**: CDC, EPA, FDA, USDA, NIH, state health and
   agriculture departments, university extension services (.edu), the National Pesticide
   Information Center (npic.orst.edu), peer-reviewed journals, veterinary and medical bodies.
   Not pest control company blogs, not content farms, not Wikipedia, not retailers.
4. **Paraphrase; do not quote.** Do not put words in quotation marks and attribute them to a
   source unless you copied them character for character from the page you fetched. A
   misquoted regulator is the worst error you can make here.
5. **Say what is not known.** Where evidence is thin or mixed, say so plainly. "There is no
   good evidence that X repels mice" is a strong, useful sentence.
6. **Specific beats general.** Sizes in inches, temperatures in Fahrenheit, timelines in days,
   species by name, which states. Tables where a reader would compare things.
7. **Original.** Write this page from the sources, for this question. Do not pad. Do not
   restate the same point in three sections. Stay inside your page's scope so it does not
   duplicate its sibling pages; link to them instead.

## Hard rules (the validator rejects the file if you break these)

- **US reader**: US spelling (color, odor, gray, mold, labeled, traveling, fiber, meter),
  Fahrenheit (Celsius may follow in parentheses), inches and feet (millimeters may follow in
  parentheses), US dollars, US agencies and US law.
- **No Canada-specific content**: no Canadian regulators, provinces, cities, or products. A
  passing range note ("the northern US and southern Canada") is the limit, twice at most.
- **No affiliate or retailer links, and no retailer names** (no Amazon, Walmart, Home Depot,
  Chewy, and so on). You may name a product or brand editorially when it helps. Never link
  it, never give its price, star rating or review count.
- **The only external links allowed are your citations**, and every source you list must be
  linked inline at the point where you use it.
- **No testing claims.** BuzzSkito does not test products and does not treat bed bugs, ants,
  mice or cockroaches. Never write "we tested", "in our experience", "our technicians find".
  The voice is a careful researcher reporting what the evidence says.
- **No absolute claims**: not "100% effective", "completely safe", "non-toxic",
  "chemical-free", "guaranteed". Say what a source says about risk, and "when used as the
  label directs".
- **Pesticides**: the label is the law. Never advise an off-label use. Name active
  ingredients and product classes; refer the reader to the label for rates and intervals.
- **Health**: describe what CDC or a medical source says; never diagnose, never promise an
  outcome, tell the reader when to contact a healthcare provider or veterinarian.
- **No prices for products.** Service cost ranges are allowed on the cost-related pages, each
  with its source and "as of" year, described as estimates.
- No "Conclusion", "Introduction", "Final thoughts" or "Related posts" headings. No "in
  conclusion", "when it comes to", "it's important to note", "delve", "look no further".

## Links (this is how the page gets found, so do it properly)

Read `data/us-pages/context-<your cluster>.md`. It lists every new page, the hub pages and
the existing pages you may link to. Use those exact addresses and nothing else.

Your entry in `data/us-pages/plan.json` has a `required` object. In the **body text** (inside
paragraphs, list items or table cells, never in headings or FAQ answers) you must link to:

- `required.pillar`: your hub page, once, in context, in the first half of the page.
- every address in `required.ring`: your neighbouring guides.
- at least `required.minSiblings` guides from your own cluster in total (4 to 8 is the aim).
- 2 to 4 **pre-existing** pages that are real topical matches.
- `required.category`, if it is not null: the product guide hub for your topic.

Write each link the way a good editor would: inside a sentence that gives the reader a reason
to click, with anchor text that describes the destination ("how to tell a deer mouse from a
house mouse", not "click here", not the bare page title every time). Vary your anchors. Do
not build a "related posts" list. A short "what to read next" paragraph near the end is fine
if each link sits in its own real sentence.

Do not link to service, city or quote pages. The template adds the company box itself.

## The JSON file

Path: `content/guides/<slug>.json` (a pillar is `content/guides/pillar-<slug>.json`).
Text fields in `body`, `quickAnswer` and `facts` accept three inline marks and nothing else:
`**bold**`, `*italic*` (use for species names) and `[anchor text](address)`.
No HTML, no headings marks, no bare URLs.

```json
{
  "slug": "example-slug",
  "kind": "spoke",
  "cluster": "mice",
  "keyword": "the exact primary keyword from the plan",
  "alsoTargets": ["any near-identical searches from the plan"],
  "metaTitle": "Keyword First: The Answer or the Angle",
  "metaDescription": "110 to 155 characters. Lead with the answer, then what the page covers. No brand name.",
  "h1": "The On-Page Headline (may be longer and more natural than the title)",
  "dek": "One or two sentences under the headline that say what the reader will get.",
  "breadcrumb": "Short Name",
  "excerpt": "90 to 185 characters for the blog index card.",
  "datePublished": "2026-10-07",
  "quickAnswer": {
    "lead": "22 to 75 words. The complete answer to the search in plain words. **Bold the one-sentence answer.** Link one source here if it carries the key fact.",
    "bullets": ["3 to 6 single-sentence facts with numbers", "…", "…"]
  },
  "facts": { "title": "At a glance", "rows": [["Label", "Value"], ["Label", "Value"], ["Label", "Value"], ["Label", "Value"]] },
  "body": [
    { "type": "h2", "text": "A heading phrased the way a person would ask it" },
    { "type": "p", "text": "Answer sentence first. Then the detail, citing [the CDC's rodent control guidance](https://www.cdc.gov/...) where the fact comes from." },
    { "type": "media", "needed": "Close-up photo of an adult house mouse beside a US quarter for scale, side view, showing ear and tail proportions" },
    { "type": "h3", "text": "A sub-point" },
    { "type": "ul", "items": ["**Lead-in.** A full sentence.", "**Lead-in.** A full sentence."] },
    { "type": "table", "head": ["Thing", "How to tell", "What it means"], "rows": [["A", "…", "…"], ["B", "…", "…"]], "caption": "Optional one-line note or source." },
    { "type": "callout", "tone": "warning", "title": "Short label", "text": "One or two sentences. Tones: tip, warning, note." },
    { "type": "ol", "items": ["Step one in a full sentence.", "Step two."] }
  ],
  "howTo": { "name": "How to …", "steps": [{ "name": "Short step name", "text": "Plain text, 12+ words, no links." }] },
  "faqs": [{ "question": "A real follow-up question?", "answer": "35 to 120 words of plain text. No links, no bold. A complete answer that stands alone." }],
  "sources": [{ "title": "Exact title of the page you read", "publisher": "Organization name", "url": "https://…" }],
  "disclaimer": "health"
}
```

Field notes:

- `metaTitle`: 48 characters or fewer (the site appends " | BuzzSkito"). Start with the
  keyword or its natural form. Add the answer or a concrete hook, not a year.
- `facts`: optional but wanted on any page with a clear set of numbers.
- `media`: placeholders for photos or diagrams the owner will add later. They are not shown.
  Describe exactly what the image should show. Identification pages need at least 2.
- `howTo`: only if your plan entry has the `howto` flag. 4 to 10 steps that mirror the body.
- `faqs`: 4 to 6 (a pillar: 6 to 8). Real follow-up questions a searcher asks next, not the
  H2s reworded. Answers must be consistent with the body and equally well sourced.
- `sources`: 3 to 6 (a pillar: 5 to 8). At least 3 must be government, university or
  scientific. The maker's own page for a named product, or a published cost survey, is allowed
  as an extra with `"kind": "manufacturer"` or `"kind": "cost-survey"`.
- `disclaimer`: "health", "pesticide" or "both", matching your plan flags; omit otherwise.
- Minimum body length is `minWords` in your plan entry (FAQs and quick answer not counted).
  Go as long as the question needs and no longer.

## How to work

1. Read your plan entry and your cluster context file.
2. Research. Use WebSearch to find the authoritative pages, then WebFetch each one you intend
   to cite and read it. Budget: about 6 to 12 fetches. Prefer one strong extension fact sheet
   over five thin pages. Keep a note of which fact came from which page.
3. Outline the H2s as the questions a searcher has, in the order they have them.
4. Write the JSON file with the Write tool.
5. Run `node scripts/validate-guide.mjs <slug>` and fix every ERROR. Read the warnings and fix
   the ones that are real. Repeat until it passes.
6. Re-read your page once as the reader. Cut anything that is filler or that you could not
   point to a source for.

Do not edit any file other than your own JSON file. Do not run `next build`, `git` or any
install command.
