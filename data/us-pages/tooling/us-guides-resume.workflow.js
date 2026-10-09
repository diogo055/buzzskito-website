export const meta = {
  name: 'us-guides-resume',
  description: 'Resumable run: fact-check written guides, finish existing-page edits, then write and fact-check the remaining guides, eight agents at a time',
  phases: [
    { title: 'Fact-check', detail: 'independent checker re-opens every source and corrects the page' },
    { title: 'Existing pages', detail: 'additive edits to live pages, then a fact-check of what was added' },
    { title: 'Write', detail: 'one writer per new guide: research primary sources, write the JSON, pass the validator' },
  ],
}

const SNAP = args.snap
const CONCURRENCY = args.concurrency || 8
const TOP = new Set(args.topWriters || [])
// pages on health or pesticide subjects get the checker at full reasoning effort; the rest at medium
const CAREFUL = new Set(args.carefulChecks || [])

const WRITE_SCHEMA = {
  type: 'object',
  properties: { slug: { type: 'string' }, validatorPassed: { type: 'boolean' }, bodyWords: { type: 'number' }, sourcesFetched: { type: 'array', items: { type: 'string' } }, notes: { type: 'string' } },
  required: ['slug', 'validatorPassed', 'bodyWords', 'notes'],
}
const CHECK_SCHEMA = {
  type: 'object',
  properties: {
    slug: { type: 'string' }, validatorPassed: { type: 'boolean' }, recorded: { type: 'boolean' },
    claimsChecked: { type: 'number' }, claimsCorrected: { type: 'number' }, claimsRemovedOrSoftened: { type: 'number' },
    corrections: { type: 'array', items: { type: 'object', properties: { was: { type: 'string' }, now: { type: 'string' }, source: { type: 'string' } }, required: ['was', 'now'] } },
    stillUnverified: { type: 'array', items: { type: 'string' } },
    qualityVerdict: { type: 'string', enum: ['publish', 'publish-after-my-fixes', 'needs-rewrite'] },
    notes: { type: 'string' },
  },
  required: ['slug', 'validatorPassed', 'recorded', 'claimsChecked', 'claimsCorrected', 'claimsRemovedOrSoftened', 'qualityVerdict', 'notes'],
}
const EDIT_SCHEMA = {
  type: 'object',
  properties: { id: { type: 'string' }, checkPassed: { type: 'boolean' }, wordsAdded: { type: 'number' }, linksAdded: { type: 'array', items: { type: 'string' } }, productFindings: { type: 'array', items: { type: 'object', properties: { product: { type: 'string' }, status: { type: 'string' }, evidence: { type: 'string' } }, required: ['product', 'status'] } }, notes: { type: 'string' } },
  required: ['id', 'checkPassed', 'notes'],
}
const XCHECK_SCHEMA = {
  type: 'object',
  properties: {
    id: { type: 'string' }, checkPassed: { type: 'boolean' }, recorded: { type: 'boolean' },
    claimsChecked: { type: 'number' }, claimsCorrected: { type: 'number' }, claimsRemovedOrSoftened: { type: 'number' },
    corrections: { type: 'array', items: { type: 'object', properties: { was: { type: 'string' }, now: { type: 'string' }, source: { type: 'string' } }, required: ['was', 'now'] } },
    originalContentUntouched: { type: 'boolean' }, notes: { type: 'string' },
  },
  required: ['id', 'checkPassed', 'recorded', 'claimsChecked', 'claimsCorrected', 'claimsRemovedOrSoftened', 'originalContentUntouched', 'notes'],
}

const ref = (p) => (p.kind === 'pillar' ? `pillar:${p.slug}` : p.slug)
const base = (p) => `${p.kind === 'pillar' ? 'pillar-' : ''}${p.slug}`
const file = (p) => `content/guides/${base(p)}.json`

const writePrompt = (p) => `You are writing ONE page of the BuzzSkito North American pest guides. Your working directory is the website repository.

YOUR PAGE: ${p.kind} "${p.slug}" in the "${p.cluster}" cluster. Output file: ${file(p)}

Do this in order:
1. Read data/us-pages/WRITER_BRIEF.md in full. It is the specification; follow it exactly.
2. Run: node scripts/us-pages-entry.mjs ${ref(p)}
   That prints your plan entry: the keyword, any other searches the page must also answer, the scope, the minimum length, the flags and the links you are required to include.
3. Read data/us-pages/context-${p.cluster}.md for the exact addresses you may link to.${p.kind === 'pillar' ? `
   You are writing the HUB page for this cluster. It must link, in real sentences inside the body, to EVERY address in required.spokes, required.clusterExisting, required.pillarRing and required.category. Work each link into the section where that subtopic is discussed, with one sentence that tells the reader what they will find there. Organise the page as a complete reference (identification, biology, risks, prevention, treatment, when to call a professional) at 3,000+ words, with 6 to 8 FAQs and 5 to 8 sources.` : ''}
4. For a model of the standard expected, skim content/guides/german-cockroaches.json (a finished, fact-checked page): note how every figure is tied to a named source, how disagreements between sources are stated, and how links sit inside real sentences.
5. Research with WebSearch and WebFetch. Open every page you intend to cite and find each fact on it before you write it. Government, university extension and peer-reviewed sources only (see the brief). Research budget: decide on your 4 to 6 strongest sources early; aim for roughly 8 searches and 10 to 18 page fetches in total, and stop researching once your outline is covered. Work in a few large steps: send your web searches together in ONE turn (several tool calls at once), then send your page fetches together in one or two turns, each WebFetch prompt asking for the exact facts and figures you need from that page. Do not fetch one page per turn.
6. Write the JSON file with the Write tool as soon as your research is done (do not hold it back to polish in your head), then improve it with Edit.
7. Run: node scripts/validate-guide.mjs ${p.slug}
   Fix every ERROR and every real warning. Repeat until it prints a check mark.
8. Re-read the finished page once as the reader and cut filler.

Only create or edit ${file(p)}. Do not touch any other file. Do not run next build, git, or installs.

Return: the slug, whether the validator passed on your final run, the body word count it reported, the URLs you actually fetched and cite, and short notes on anything the fact-checker should know (a fact where sources disagree, a required link that was hard to place, anything you softened or cut).`

const checkPrompt = (p) => `You are the independent fact-checker and editor for ONE page of the BuzzSkito North American pest guides. You did not write it. Assume it contains errors: an audit of this site's older pages found that roughly one hard claim in four was wrong, and on the first three pages of this batch the checker corrected or softened about one claim in six. Reviewers have also introduced new errors while fixing old ones. Your job is to make this page correct, not to approve it.

THE PAGE: ${file(p)} (${p.kind} "${p.slug}", cluster "${p.cluster}"). Your working directory is the website repository.

1. Read data/us-pages/WRITER_BRIEF.md (the rules the page must meet) and run: node scripts/us-pages-entry.mjs ${ref(p)} (the page's scope and required links).
2. Read ${file(p)} in full.
3. List every HARD CLAIM in the page: every number, size, time span, temperature, percentage, dose or concentration, species name and range, statement about what a law, agency or label says, health statement, and product ingredient. Include the quick answer, the facts table, every FAQ answer and every how-to step, not only the body.
4. For each claim, open the source the page cites for it with WebFetch and find the claim on that page. Do this in ONE turn: send one WebFetch call per cited source, all together, and in each prompt list every claim you need that source to confirm, asking for the page's exact wording and figures. Only fetch again for a claim that came back unsupported or unclear. If the cited source does not support it:
   - search for an authoritative source that does (government, university extension, peer-reviewed), fetch it, and cite that instead; or
   - correct the claim to what the sources actually say; or
   - soften it to what can be supported, or remove it.
   Watch especially for a claim credited to the wrong source, a writer's own inference presented as a source's statement, and a figure stated without saying whose figure it is. Whatever you write as a correction needs the same proof as the claim it replaces: fetch it, find it, then write it. Never correct from memory.
5. Any text inside quotation marks attributed to a source must be word for word on that source's page. If not, paraphrase without quotation marks.
6. Check every source URL loads and is the page its title says it is. Replace dead or wrong URLs.
7. Editorial checks: the search query is answered in the quick answer and again in the first section; each H2's first sentence answers its heading; nothing is padded or repeated; the page stays inside its scope; US spelling, Fahrenheit and inches; no testing or first-hand claims ("we tested", "in our experience"); no absolute safety claims; no retailer names; pesticide advice never goes beyond "use as the label directs"; health content never diagnoses. Internal links must read naturally inside real sentences with descriptive anchors. Fix what fails.
8. Edit ${file(p)} directly to apply every fix. Keep the JSON structure. If your cuts take the body below its minimum length, add verified material rather than filler.
9. Run: node scripts/validate-guide.mjs ${p.slug}  and repeat until it prints a check mark.
10. LAST, after your final edit, record the result (this must be your final command, because it fingerprints the file):
    node scripts/us-pages-mark-checked.mjs guide ${base(p)} <verdict> <claimsChecked> <claimsCorrected> <claimsRemovedOrSoftened>
    where <verdict> is publish (clean), publish-after-my-fixes (you fixed real problems and it is now sound) or needs-rewrite (structurally poor, off-scope or mostly unsupported even after your fixes).

Only edit ${file(p)}. Do not touch any other file (the record in step 10 is written by the script). Do not run next build, git, or installs.

Return an honest count: claims checked, claims corrected, claims removed or softened, the list of corrections (what it said, what it says now, the source), anything you could not verify and left in (with why), whether the validator passes, whether step 10 printed "recorded", and your verdict.`

const RULES = (t) => `RULES (strict: this page earns money today, and editors on this site have previously deleted or moved revenue elements while reporting that nothing changed, so your edit is checked mechanically against a snapshot)
- ADDITIVE ONLY. Do not delete, reorder, reword or reformat ANY existing line. Do not change imports, except to add a new import line if one is truly needed (check whether Link is already imported before using it).
- Never touch an affiliate element (BuyLink, AwardRow, AwardCard, TopPick, StickyBuyBar, AmazonLink, RelatedProducts), its props or its position. Never add one. Never link to a retailer. US products may be named in plain text only: no links, no prices, no ratings.
- Put new body content in ONE place: directly above the line holding the "Frequently Asked Questions" heading, or above the "Related ..." heading if that one comes first. You may also append new entries at the END of the FAQS array. Nothing goes above the first affiliate element.
- Every hard fact you add must come from a primary source you opened with WebFetch and found the fact on: EPA, CDC, FDA, USDA, state agencies, university extension (.edu), the National Pesticide Information Center, peer-reviewed journals. Cite it in the sentence with a link: <a href="https://..." target="_blank" rel="noopener noreferrer">the source's name</a>. Paraphrase; do not quote. If you cannot verify something, leave it out.
- No first-hand or testing claims. No absolute claims ("completely safe", "non-toxic", "guaranteed"). Pesticides: use as the label directs. Health: report what CDC or a medical body says, never diagnose.
- Inside the new US material use US spelling, Fahrenheit and inches or feet. Answer first under each new heading.
- JSX safety: in JSX text write apostrophes as &rsquo;, quotes as &ldquo; and &rdquo;, ampersands as &amp;. In JavaScript strings copy the quoting and escaping style of the neighbouring entries exactly.
- Internal links: <Link href="/blog/...">descriptive anchor</Link> inside a real sentence. Vary anchors. No bare lists of titles.
- Verify with:  node scripts/us-pages-check-edit.mjs ${t.route} "${SNAP}"   It must print a check mark.
- Edit only app/${t.route}/page.tsx. Do not run next build, git or installs.`

const editPrompt = (t) => {
  if (t.type === 'hub-new') return `You are creating ONE new product-guide hub page for buzzskito.ca: app/${t.route}/page.tsx. Your working directory is the website repository.

First run:  node scripts/us-pages-task.mjs ${t.id}
It prints your task: the pest, the existing guides on the site about it (existing: path and title) and the new North American guides (linkTo).

Then read app/pest-product-guides/rodent-control/page.tsx in full. Your page must be modelled on it exactly: the same imports, the same schema scripts, the same <GuideHub> props (breadcrumb, badge, title, subtitle, heroStats, adjacentPest, quickAnswer, howWeRank, sections, bottomLine, faqs, cta), the same voice. Also read components/GuideHub.tsx to see what each prop does, and read the quick answer and key sections of each existing guide in your task (app/blog/<slug>/page.tsx) so you know what the site already says.

TASK: write the hub for the pest named in your task.
- SLUG '${t.route}', DATE '2026-10-07'. Breadcrumb Home / Pest Product Guides / <name>. adjacentPest is the pest name from your task.
- SECTIONS: group the existing guides first (products and treatment), then one or two sections of the new North American identification and how-to guides. Every path in existing and in linkTo appears exactly once. One-sentence blurbs. Use tone 'top' for at most one guide.
- quickAnswer, howWeRank, bottomLine, FAQS (6 or 7): every factual statement must either restate what the existing guides on this site already say, or be something you verified at a primary source you opened (Health Canada, EPA, CDC, university extension). This hub keeps the site's Canadian product-research voice for the product guides and describes the new guides as references for readers anywhere in North America. Include the FAQ asking whether BuzzSkito treats this pest, answered the way the rodent hub answers its equivalent (no: mosquitoes and ticks only).
- bottomLine links to /pest-product-guides and to the hub page /learn/${t.cluster}.
- No affiliate elements, no Amazon or retailer links, no prices, no star ratings, no testing claims, no absolute safety claims.
- JSX safety: apostrophes as &rsquo; in JSX text; in JavaScript strings escape apostrophes exactly as the rodent hub does.
- Verify with:  node scripts/us-pages-check-edit.mjs ${t.route} --new   It must print a check mark.
- Create only app/${t.route}/page.tsx. Do not run next build, git or installs.

Return: your task id, whether the check passed, the links you included, and notes for the fact-checker.`
  return `You are editing ONE existing page of buzzskito.ca (Next.js, a .tsx file): app/${t.route}/page.tsx. Your working directory is the website repository.

First run:  node scripts/us-pages-task.mjs ${t.id}
It prints your task: the search the page must serve, what the US material should cover (usFocus), how many words to add (addWords), the hub page, and the new guides to link to (linkTo).
Then read app/${t.route}/page.tsx in full.

TASK: this page already answers its search, so no new page was created for it. Give it what a US reader needs and connect it to the new guides. Add, in the one allowed place:
1. ONE H2 section of 250 to 450 words for US readers covering the usFocus from your task. Do not repeat what the page already says.
2. A short closing paragraph (or two) inside that section that links, in real sentences, to the hub page and to at least 4 of the guides in linkTo that are most relevant to this page.
3. One or two new FAQ entries a US searcher would ask, appended to the END of the FAQS array (if the page has a FAQS array).

${RULES(t)}

Return: your task id, whether the check script passed, roughly how many words you added, the internal links you added, and notes for the fact-checker.`
}

const xcheckPrompt = (t) => `You are the independent fact-checker for an edit another editor made to ONE page of buzzskito.ca: app/${t.route}/page.tsx. You did not write it. Assume the new material contains errors: an audit of this site's older pages found roughly one hard claim in four was wrong, and reviewers have introduced new errors while fixing old ones.

${t.type === 'hub-new' ? `This is a brand-new file. Read it in full. Read app/pest-product-guides/rodent-control/page.tsx to see the model it follows.` : `See exactly what was added with:  diff --strip-trailing-cr "${SNAP}/${t.route.replace(/\//g, '__')}.tsx" app/${t.route}/page.tsx
Lines starting with ">" are new. Lines starting with "<" are original lines that were removed or changed: there must be NONE. If there are any, restore them exactly from the snapshot file.`}

Run:  node scripts/us-pages-task.mjs ${t.id}   to see what the edit was supposed to do. The editor may have been cut off before finishing: if the edit is plainly incomplete (for example a section that stops mid-way, or fewer internal links than the task asked for), complete it to the task's standard under the same rules.

For the NEW material only:
1. List every hard claim: numbers, temperatures, sizes, time spans, percentages, species and ranges, statements about what a law, agency or product label says, health statements, product ingredients and product availability.
2. Open the source cited for each with WebFetch (fetch each source once and check all of its claims together) and find the claim on that page. If it is not supported: find an authoritative source that does support it and cite that, or correct the claim to what the sources say, or soften or remove it. Never correct from memory: fetch, find, then write.
3. Anything in quotation marks attributed to a source must be word for word on that source. Otherwise paraphrase without quotation marks.
4. Check every cited URL loads and is what the text says it is.
5. Editorial: answer-first sentences, no padding, US spelling and units in the US material, no first-hand or testing claims, no absolute safety claims, no retailer names or links, no product prices, pesticide advice never beyond "as the label directs", internal links sit in real sentences with descriptive anchors and point at addresses listed in the task.
6. Do not touch any original line or any affiliate element. Edit only inside the newly added material. JSX safety: apostrophes as &rsquo; in JSX text.
7. Re-run:  node scripts/us-pages-check-edit.mjs ${t.route} ${t.type === 'hub-new' ? '--new' : `"${SNAP}"`}   until it prints a check mark.
8. LAST, after your final edit, record the result (this must be your final command, because it fingerprints the file):
   node scripts/us-pages-mark-checked.mjs existing ${t.route} <verdict> <claimsChecked> <claimsCorrected> <claimsRemovedOrSoftened>
   where <verdict> is publish or publish-after-my-fixes.

Edit only app/${t.route}/page.tsx. Do not run next build, git or installs.

Return honest counts: claims checked, corrected, removed or softened; the corrections (was, now, source); whether the original content is untouched; whether the check script passes; whether step 8 printed "recorded"; and notes.`

// ── jobs, in priority order ─────────────────────────────────────────────────────
const out = { guideChecks: [], existing: [], written: [], failed: [] }
let halt = false
let emptyRuns = 0

const checkGuide = async (p) => {
  const c = await agent(checkPrompt(p), { label: `check:${p.slug}`, phase: 'Fact-check', schema: CHECK_SCHEMA, ...(p.kind === 'pillar' || CAREFUL.has(p.slug) ? {} : { effort: 'medium' }) })
  if (!c) { out.failed.push(`check:${p.slug}`); return null }
  out.guideChecks.push({ page: base(p), verdict: c.qualityVerdict, recorded: c.recorded, checked: c.claimsChecked, corrected: c.claimsCorrected, removed: c.claimsRemovedOrSoftened, stillUnverified: c.stillUnverified, notes: c.notes })
  return c
}
const writeGuide = async (p) => {
  const strong = p.kind === 'pillar' || TOP.has(p.slug)
  let w = await agent(writePrompt(p), { label: `write:${p.slug}`, phase: 'Write', schema: WRITE_SCHEMA, ...(strong ? {} : { model: 'sonnet' }) })
  if (!w || !w.validatorPassed || !w.bodyWords) {
    // nothing usable was written (usually the usage limit): do not spend a checker on it, and stop
    // starting new pages once this has happened three times in a row
    out.failed.push(`write:${p.slug}`)
    if (++emptyRuns >= 3 && !halt) { halt = true; log('three pages in a row produced nothing: stopping new work (usage limit?)') }
    return
  }
  emptyRuns = 0
  out.written.push({ page: base(p), words: w.bodyWords, passed: w.validatorPassed, writer: strong ? 'main' : 'sonnet' })
  const c = await checkGuide(p)
  if (c && c.qualityVerdict === 'needs-rewrite') {
    log(`${p.slug}: checker asked for a rewrite; rewriting on the main model`)
    w = await agent(`${writePrompt(p)}\n\nNOTE: a first draft of this page exists at ${file(p)} and an independent checker judged it not good enough: ${c.notes}\nRead it, keep what is sound, and rewrite the page to the standard of content/guides/german-cockroaches.json.`, { label: `rewrite:${p.slug}`, phase: 'Write', schema: WRITE_SCHEMA })
    if (w) await checkGuide(p)
  }
}
const existingCheck = async (t) => {
  const c = await agent(xcheckPrompt(t), { label: `check:${t.id}`, phase: 'Existing pages', schema: XCHECK_SCHEMA })
  if (!c) { out.failed.push(`check:${t.id}`); return }
  out.existing.push({ id: t.id, recorded: c.recorded, checkPassed: c.checkPassed, checked: c.claimsChecked, corrected: c.claimsCorrected, removed: c.claimsRemovedOrSoftened, untouched: c.originalContentUntouched, corrections: c.corrections, notes: c.notes })
}
const existingEdit = async (t) => {
  const e = await agent(editPrompt(t), { label: `edit:${t.id}`, phase: 'Existing pages', schema: EDIT_SCHEMA })
  if (!e) { out.failed.push(`edit:${t.id}`); return }
  await existingCheck(t)
}

const jobs = [
  ...(args.guidesToCheck || []).map((p) => () => checkGuide(p)),
  ...(args.existingToEdit || []).map((t) => () => existingEdit(t)),
  ...(args.existingToCheck || []).map((t) => () => existingCheck(t)),
  ...(args.guidesToWrite || []).map((p) => () => writeGuide(p)),
]
log(`${jobs.length} jobs queued, ${CONCURRENCY} at a time`)

let next = 0
const worker = async () => {
  while (next < jobs.length && !halt) {
    const k = next++
    try { await jobs[k]() } catch (e) { out.failed.push(`job ${k}: ${e && e.message ? e.message : e}`) }
  }
}
await Promise.all(Array.from({ length: CONCURRENCY }, () => worker()))

log(`done: ${out.written.length} written, ${out.guideChecks.length} guide checks, ${out.existing.length} existing-page checks, ${out.failed.length} failed`)
return {
  written: out.written.length,
  guideChecks: out.guideChecks.length,
  existingChecks: out.existing.length,
  failed: out.failed,
  needsRewrite: out.guideChecks.filter((c) => c.verdict === 'needs-rewrite').map((c) => c.page),
  totals: {
    claimsChecked: out.guideChecks.reduce((n, c) => n + (c.checked || 0), 0) + out.existing.reduce((n, c) => n + (c.checked || 0), 0),
    claimsCorrected: out.guideChecks.reduce((n, c) => n + (c.corrected || 0), 0) + out.existing.reduce((n, c) => n + (c.corrected || 0), 0),
    claimsRemovedOrSoftened: out.guideChecks.reduce((n, c) => n + (c.removed || 0), 0) + out.existing.reduce((n, c) => n + (c.removed || 0), 0),
  },
  writtenBy: out.written.map((w) => `${w.page}:${w.writer}:${w.words}`),
  guideCheckSummary: out.guideChecks.map((c) => `${c.page} ${c.verdict} ${c.checked}/${c.corrected}/${c.removed}${c.recorded ? '' : ' NOT-RECORDED'}`),
  existingSummary: out.existing.map((c) => `${c.id} ${c.checked}/${c.corrected}/${c.removed}${c.untouched ? '' : ' ORIGINAL-TOUCHED'}${c.recorded ? '' : ' NOT-RECORDED'}`),
}
