export const meta = {
  name: 'visual-guides-write',
  description: 'Write and independently fact-check the 10 visual guides, reconciling each page with its hero infographic',
  phases: [
    { title: 'Write', detail: 'one writer per guide: research primary sources, reconcile the infographic, write the JSON' },
    { title: 'Fact-check', detail: 'an independent checker re-opens every source and corrects the page' },
  ],
}

const pages = args.pages
const CONCURRENCY = args.concurrency || 5

const ISSUES = { type: 'array', items: { type: 'object', properties: { graphicSays: { type: 'string' }, sourcesSay: { type: 'string' }, source: { type: 'string' } }, required: ['graphicSays', 'sourcesSay'] } }
const WRITE_SCHEMA = {
  type: 'object',
  properties: { slug: { type: 'string' }, validatorPassed: { type: 'boolean' }, bodyWords: { type: 'number' }, graphicIssues: ISSUES, notes: { type: 'string' } },
  required: ['slug', 'validatorPassed', 'bodyWords', 'graphicIssues', 'notes'],
}
const CHECK_SCHEMA = {
  type: 'object',
  properties: {
    slug: { type: 'string' }, validatorPassed: { type: 'boolean' }, recorded: { type: 'boolean' },
    claimsChecked: { type: 'number' }, claimsCorrected: { type: 'number' }, claimsRemovedOrSoftened: { type: 'number' },
    corrections: { type: 'array', items: { type: 'object', properties: { was: { type: 'string' }, now: { type: 'string' }, source: { type: 'string' } }, required: ['was', 'now'] } },
    graphicIssues: ISSUES,
    qualityVerdict: { type: 'string', enum: ['publish', 'publish-after-my-fixes', 'needs-rewrite'] },
    notes: { type: 'string' },
  },
  required: ['slug', 'validatorPassed', 'recorded', 'claimsChecked', 'claimsCorrected', 'claimsRemovedOrSoftened', 'graphicIssues', 'qualityVerdict', 'notes'],
}

const file = (p) => `content/guides/${p.slug}.json`

const writePrompt = (p) => `You are writing ONE visual guide for buzzskito.ca. Your working directory is the website repository.

YOUR PAGE: "${p.slug}" (cluster "${p.cluster}"). Output file: ${file(p)}

Do this in order:
1. Read data/us-pages/WRITER_BRIEF.md in full, then data/us-pages/VISUAL_BRIEF.md in full. The second one changes several rules of the first for this batch and adds three block types. Follow both exactly.
2. Run: node scripts/us-pages-entry.mjs ${p.slug}
   It prints your plan entry: keyword, h1Hint, section, scope, minWords, flags, required.mustLink, and heroText (the words printed on this page's hero infographic).
3. Read data/us-pages/context-${p.cluster}.md for the exact addresses you may link to.
4. Skim content/guides/german-cockroaches.json as the model for sourcing: every figure tied to a named source, disagreements between sources stated, links inside real sentences.
5. Research with WebSearch and WebFetch in few large steps (send your searches together in one turn, then your fetches together in one or two turns). Open every page you cite and find each fact on it. You must check EVERY claim printed on the hero infographic against a source: each ratio, size, time, count, species range, disease and safety label.
6. Write the JSON file with the Write tool as soon as research is done, then improve it with Edit. Include "section" and "heroAlt". Cover every item on the infographic in the same order. Where sources differ from the infographic, state the sourced fact and add the single callout titled "Where the one-page guide differs" as the visual brief describes.
7. Run: node scripts/validate-guide.mjs ${p.slug}   Fix every ERROR and every real warning. Repeat until it prints a check mark.
8. Re-read the page once as a reader who arrived from Pinterest having seen the infographic: can they find each item, and is every instruction specific enough to follow?

Only create or edit ${file(p)}. Do not touch any other file. Do not run next build, git, or installs.

Return: the slug, whether the validator passed, the body word count, graphicIssues (EVERY item where the infographic and your sources differ: what the graphic says, what the sources say, the source URL; an empty list only if you verified every claim on the graphic), and notes for the fact-checker.`

const checkPrompt = (p) => `You are the independent fact-checker and editor for ONE visual guide on buzzskito.ca. You did not write it. Assume it contains errors: on the first 76 pages of this project the checker corrected or softened roughly one claim in seven. This page gives people recipes and safety advice for their homes, pets and children, so an error here matters more than usual.

THE PAGE: ${file(p)} ("${p.slug}", cluster "${p.cluster}"). Your working directory is the website repository.

1. Read data/us-pages/WRITER_BRIEF.md and data/us-pages/VISUAL_BRIEF.md (the rules), and run: node scripts/us-pages-entry.mjs ${p.slug} (scope, required links, and heroText: the words on the page's hero infographic).
2. Read ${file(p)} in full.
3. List every HARD CLAIM: every measurement and ratio in every recipe, every size, time, temperature, percentage, count, species name and range, statement about what a law, agency or label says, health or veterinary statement, and safety tier. Include the quick answer, facts table, recipes, checklist, card, every FAQ answer and every how-to step.
4. In ONE turn, send one WebFetch per cited source, each prompt listing every claim you need that source to confirm and asking for its exact wording and figures. Fetch again only for claims that came back unsupported or unclear. If a source does not support a claim: find an authoritative source that does and cite it, or correct the claim to what sources say, or soften or remove it. Never correct from memory.
5. Recipes get the strictest check: the ingredients and amounts in each recipe block must be exactly what the linked source publishes. If they are not, fix them to the source or remove the recipe.
6. Safety: every pet and child statement must come from a veterinary, poison-control or government source the page cites. Nothing may be called simply "safe". Each recipe's safety tier must match what its source says.
7. Compare the page against heroText item by item. Every claim on the infographic that the sources do not support must be (a) stated correctly in the page and (b) listed in the callout "Where the one-page guide differs". Add any difference the writer missed. Remove any "difference" that is not real.
8. Editorial: the keyword is in the H1 and answered in the quick answer; each H2's first sentence answers its heading; no padding; no "tested" or first-hand claims; no retailer names or links; pesticide advice never beyond "as the label directs"; links sit in real sentences with descriptive anchors; the printable card stands on its own.
9. Edit ${file(p)} directly to apply every fix, keeping the JSON structure. Run: node scripts/validate-guide.mjs ${p.slug}  until it prints a check mark.
10. LAST, after your final edit, record the result (this fingerprints the file, so it must be your final command):
    node scripts/us-pages-mark-checked.mjs guide ${p.slug} <verdict> <claimsChecked> <claimsCorrected> <claimsRemovedOrSoftened>
    where <verdict> is publish, publish-after-my-fixes or needs-rewrite.

Only edit ${file(p)}. Do not touch any other file. Do not run next build, git, or installs.

Return honest counts, the corrections (was, now, source), the FINAL graphicIssues list (every item where the infographic differs from the sources: what the graphic says, what sources say, source URL), whether the validator passes, whether step 10 printed "recorded", and your verdict.`

const out = { done: [], failed: [] }
const job = async (p) => {
  const w = await agent(writePrompt(p), { label: `write:${p.slug}`, phase: 'Write', schema: WRITE_SCHEMA })
  if (!w || !w.validatorPassed || !w.bodyWords) { out.failed.push(`write:${p.slug}`); return }
  const c = await agent(checkPrompt(p), { label: `check:${p.slug}`, phase: 'Fact-check', schema: CHECK_SCHEMA })
  if (!c) { out.failed.push(`check:${p.slug}`); return }
  out.done.push({ page: p.slug, words: w.bodyWords, verdict: c.qualityVerdict, recorded: c.recorded, checked: c.claimsChecked, corrected: c.claimsCorrected, removed: c.claimsRemovedOrSoftened, graphicIssues: c.graphicIssues, notes: c.notes })
}
let next = 0
const worker = async () => { while (next < pages.length) { const k = next++; try { await job(pages[k]) } catch (e) { out.failed.push(`job ${pages[k].slug}`) } } }
await Promise.all(Array.from({ length: CONCURRENCY }, () => worker()))
log(`${out.done.length} of ${pages.length} guides written and checked; ${out.failed.length} failed`)
return out
