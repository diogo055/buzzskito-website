// Checks the North American pest guides (content/guides/<slug>.json) against the rules
// they were commissioned under. Wired into `npm run build` as check:guides, so a guide
// that breaks a rule fails the deploy.
//
//   node scripts/validate-guide.mjs <slug> [<slug> ...]   check named guides
//   node scripts/validate-guide.mjs --all                 check every guide + the link graph
//   node scripts/validate-guide.mjs --all --report        also print word counts and inbound links
//
// What it enforces, and why:
//   - written for a US reader (spelling, Fahrenheit, inches); no Canadian regulators or places
//   - NO affiliate or retailer links: the only external links allowed are the page's own sources
//   - 3 to 6 sources, mostly government / university, each linked where it is used
//   - every internal link resolves; the links the plan requires are present
//   - length, FAQ and schema inputs are complete
//   - no invented testing claims and no absolute safety claims
import { readFileSync, readdirSync, existsSync } from 'fs'
import { join } from 'path'

const ROOT = process.cwd()
const GUIDES = join(ROOT, 'content', 'guides')
const DIR = join(ROOT, 'data', 'us-pages')
const plan = JSON.parse(readFileSync(join(DIR, 'plan.json'), 'utf8'))
const routes = JSON.parse(readFileSync(join(DIR, 'routes.json'), 'utf8'))
const EXISTING = new Set(routes.existing), PLANNED = new Set(routes.planned)
const planBySlug = Object.fromEntries(plan.pages.map((p) => [`${p.kind}:${p.slug}`, p]))
const NEW_PATHS = new Set(plan.pages.map((p) => p.path))

const args = process.argv.slice(2)
const ALL = args.includes('--all'), REPORT = args.includes('--report')
const names = args.filter((a) => !a.startsWith('--'))

// ── text helpers ────────────────────────────────────────────────────────────────
const LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g
const strip = (s) => String(s).replace(LINK, '$1').replace(/\*+/g, '')
const words = (s) => (strip(s).match(/[A-Za-z0-9][A-Za-z0-9'’%°/.-]*/g) || []).length
const blockTexts = (b) => {
  switch (b.type) {
    case 'h2': case 'h3': case 'p': return [b.text]
    case 'ul': case 'ol': return b.items || []
    case 'table': return [...(b.head || []), ...(b.rows || []).flat(), b.caption || '']
    case 'callout': return [b.title || '', b.text]
    default: return []
  }
}

const AUTH_HOSTS = [
  'pnas.org', 'nature.com', 'science.org', 'cell.com', 'sciencedirect.com', 'academic.oup.com', 'wiley.com', 'onlinelibrary.wiley.com', 'springer.com',
  'link.springer.com', 'biomedcentral.com', 'frontiersin.org', 'journals.plos.org', 'plos.org', 'royalsocietypublishing.org', 'bioone.org', 'tandfonline.com',
  'jstor.org', 'mdpi.com', 'entsoc.org', 'who.int', 'avma.org', 'heartwormsociety.org', 'capcvet.org', 'merckvetmanual.com', 'aspca.org', 'aspcapro.org',
  'poison.org', 'pestworld.org', 'npmapestworld.org', 'amnh.org', 'mayoclinic.org', 'clevelandclinic.org', 'aad.org', 'aaaai.org', 'acaai.org', 'lung.org',
  'antwiki.org', 'antweb.org', 'nwf.org', 'xerces.org', 'aafa.org', 'akc.org', 'petpoisonhelpline.com', 'humanesociety.org', 'humaneworld.org', 'ufaw.org.uk',
  'nationalgeographic.com', 'smithsonianmag.com', 'britannica.com', 'animaldiversity.org', 'inaturalist.org', 'bugguide.net', 'tickencounter.org',
  'lymedisease.org', 'globallymealliance.org', 'mosquito.org', 'naccho.org', 'nfpa.org', 'aapcc.org', 'poisonhelp.org', 'healthychildren.org', 'aap.org',
  'ipminstitute.org', 'ecoipm.org', 'stoppests.org', 'ncipmc.org', 'neipmc.org', 'npirspublic.ceris.purdue.edu',
]
const isAuth = (host) => /\.(gov|edu|mil)$/.test(host) || /\.(gov|edu)\.[a-z]{2}$/.test(host) || AUTH_HOSTS.some((h) => host === h || host.endsWith(`.${h}`))
const RETAIL = /amazon\.|amzn\.|walmart\.|homedepot\.|lowes\.|target\.com|chewy\.|ebay\.|domyown|doyourownpestcontrol|acehardware|tractorsupply|petco\.|petsmart\.|costco\.|menards\.|wayfair\./i

// Canadian regulators and places, invented testing, absolute claims, retail language.
const CANADA_HARD = /\b(PMRA|Health Canada|Ontario|Toronto|GTA|Mississauga|Brampton|Oakville|Quebec|Québec|British Columbia|Alberta|Manitoba|Saskatchewan|Nova Scotia|New Brunswick|Canadian Tire|loonie|CAD)\b|C\$/
const TESTING = /\b(we|our team|i)\s+(tested|test|tried|trialed|field[- ]tested|put .{0,30} to the test)\b|\bour (own )?(testing|tests|lab|field trials?)\b|\bhands[- ]on (test|review)/i
const ABSOLUTE = /\b(100% (safe|effective|natural)|completely safe|totally safe|perfectly safe|non-?toxic|chemical[- ]free|guaranteed to|kills? (them )?instantly every|never fails)\b/i
// "Amazon" alone is fine (the rainforest); a store reference is not.
const RETAIL_WORD = /\bamazon[.](com|ca)\b|\b(on|at|from|via|through) amazon\b(?! (basin|rainforest|river|region))|\b(buy (it )?(now|here|online)|check price|add to cart|affiliate link)\b/i

function usSpellingProblems(text) {
  const out = []
  // explicit non-US forms only (the SPELLING regex is permissive on purpose; test exact words here)
  const BAD = ['colour', 'colours', 'coloured', 'odour', 'odours', 'neighbour', 'neighbours', 'neighbourhood', 'favourite', 'favourites', 'behaviour', 'behaviours',
    'harbour', 'harbours', 'harbourage', 'vapour', 'vapours', 'labour', 'honour', 'rumour', 'tumour', 'tumours', 'centre', 'centres', 'metre', 'metres', 'litre',
    'litres', 'fibre', 'fibres', 'kilometre', 'kilometres', 'millimetre', 'millimetres', 'centimetre', 'centimetres', 'mould', 'moulds', 'mouldy', 'catalogue',
    'defence', 'programme', 'labelled', 'labelling', 'travelled', 'travelling', 'traveller', 'travellers', 'modelled', 'modelling', 'cancelled', 'cancelling',
    'tonne', 'tonnes', 'grey', 'greyish', 'aluminium', 'sulphur', 'faecal', 'faeces', 'paediatric', 'analyse', 'analysed', 'sanitise', 'sanitised', 'sanitiser',
    'recognise', 'recognised', 'organise', 'organised', 'organisation', 'minimise', 'minimised', 'specialise', 'specialised', 'licence', 'practise', 'storey',
    'kerb', 'tyre', 'tyres', 'plough', 'cosy', 'draught', 'draughts', 'skilful', 'fulfil', 'enrol', 'sceptical', 'manoeuvre', 'whilst', 'eavestrough', 'eavestroughs']
  const set = new Set(BAD)
  for (const w of strip(text).toLowerCase().match(/[a-z]+/g) || []) if (set.has(w)) out.push(w)
  return [...new Set(out)]
}

function validate(file) {
  const errors = [], warnings = []
  const err = (m) => errors.push(m), warn = (m) => warnings.push(m)
  let g
  try { g = JSON.parse(readFileSync(file, 'utf8')) } catch (e) { return { errors: [`not valid JSON: ${e.message}`], warnings, stats: {} } }

  const p = planBySlug[`${g.kind}:${g.slug}`]
  if (!p) { err(`no plan entry for kind="${g.kind}" slug="${g.slug}" (the file name, slug and kind must match data/us-pages/plan.json)`); return { errors, warnings, stats: {} } }
  if (!file.replace(/\\/g, '/').endsWith(`/${g.kind === 'pillar' ? 'pillar-' : ''}${g.slug}.json`)) err(`file name must be ${g.kind === 'pillar' ? 'pillar-' : ''}${g.slug}.json`)
  if (g.cluster !== p.cluster) err(`cluster must be "${p.cluster}"`)
  const pillar = g.kind === 'pillar'

  // ── required fields and lengths ───────────────────────────────────────────────
  const str = (k, min, max) => {
    const v = g[k]
    if (typeof v !== 'string' || !v.trim()) return err(`"${k}" is missing`)
    if (v.length < min || v.length > max) err(`"${k}" is ${v.length} characters; it must be ${min} to ${max}`)
    if (/[<>]/.test(v)) err(`"${k}" contains < or >`)
  }
  str('keyword', 3, 80); str('metaTitle', 25, 48); str('metaDescription', 110, 155); str('h1', 20, 80); str('dek', 60, 230); str('breadcrumb', 3, 42); str('excerpt', 90, 185)
  if (g.datePublished !== p.datePublished) err(`"datePublished" must be "${p.datePublished}"`)
  if (typeof g.metaTitle === 'string' && /buzzskito/i.test(g.metaTitle)) err('"metaTitle" must not include the brand; the site appends " | BuzzSkito"')
  if (typeof g.metaTitle === 'string' && /\b20\d\d\b/.test(g.metaTitle)) warn('"metaTitle" contains a year; only keep it if the page is genuinely about that year')

  if (!g.quickAnswer || typeof g.quickAnswer.lead !== 'string' || !Array.isArray(g.quickAnswer.bullets)) err('"quickAnswer" needs { lead, bullets[] }')
  else {
    const n = words(g.quickAnswer.lead)
    if (n < 22 || n > 75) err(`quickAnswer.lead is ${n} words; it must be 22 to 75`)
    if (g.quickAnswer.bullets.length < 3 || g.quickAnswer.bullets.length > 6) err('quickAnswer.bullets must have 3 to 6 items')
  }
  if (g.facts) {
    if (typeof g.facts.title !== 'string' || !Array.isArray(g.facts.rows) || g.facts.rows.some((r) => !Array.isArray(r) || r.length !== 2)) err('"facts" needs { title, rows: [[label, value], ...] }')
    else if (g.facts.rows.length < 4 || g.facts.rows.length > 12) err('"facts.rows" must have 4 to 12 rows')
  }

  // ── body ──────────────────────────────────────────────────────────────────────
  const TYPES = new Set(['h2', 'h3', 'p', 'ul', 'ol', 'table', 'callout', 'media'])
  if (!Array.isArray(g.body) || !g.body.length) { err('"body" is missing'); return { errors, warnings, stats: {} } }
  g.body.forEach((b, i) => {
    if (!b || !TYPES.has(b.type)) return err(`body[${i}] has unknown type "${b && b.type}"`)
    if (['h2', 'h3', 'p', 'callout'].includes(b.type) && (typeof b.text !== 'string' || !b.text.trim())) err(`body[${i}] (${b.type}) has no text`)
    if (['ul', 'ol'].includes(b.type) && (!Array.isArray(b.items) || b.items.length < 2 || b.items.some((x) => typeof x !== 'string' || !x.trim()))) err(`body[${i}] (${b.type}) needs 2 or more text items`)
    if (b.type === 'table') {
      if (!Array.isArray(b.head) || b.head.length < 2 || !Array.isArray(b.rows) || b.rows.length < 2) err(`body[${i}] (table) needs a head of 2+ columns and 2+ rows`)
      else if (b.rows.some((r) => !Array.isArray(r) || r.length !== b.head.length)) err(`body[${i}] (table) has a row whose cell count differs from the head`)
      else if (b.head.length > 5) err(`body[${i}] (table) has ${b.head.length} columns; keep tables to 5 or fewer so they fit a phone`)
    }
    if (b.type === 'media' && (typeof b.needed !== 'string' || b.needed.length < 25)) err(`body[${i}] (media) needs a "needed" description of the photo or diagram (25+ characters)`)
    if (b.type === 'callout' && b.tone && !['tip', 'warning', 'note'].includes(b.tone)) err(`body[${i}] (callout) tone must be tip, warning or note`)
    if (['h2', 'h3'].includes(b.type) && /\]\(/.test(b.text)) err(`body[${i}] (${b.type}) must not contain a link`)
    if (b.type === 'p' && words(b.text) > 130) warn(`body[${i}] is a ${words(b.text)}-word paragraph; split it`)
  })
  if (g.body[0].type !== 'h2') err('body must start with an h2')
  const h2s = g.body.filter((b) => b.type === 'h2').map((b) => strip(b.text))
  if (h2s.length < (pillar ? 9 : 5)) err(`body has ${h2s.length} h2 sections; it needs at least ${pillar ? 9 : 5}`)
  if (new Set(h2s.map((h) => h.toLowerCase())).size !== h2s.length) err('two h2 headings are identical')
  if (h2s.some((h) => /^(conclusion|final thoughts|in summary|introduction|related (posts|reading|articles))$/i.test(h.trim()))) err('remove generic headings such as "Conclusion", "Introduction" or "Related posts"')

  const bodyText = g.body.flatMap(blockTexts)
  const everything = [...bodyText, g.quickAnswer?.lead || '', ...(g.quickAnswer?.bullets || []), ...(g.facts ? g.facts.rows.flat() : []), g.h1 || '', g.dek || '', g.metaTitle || '', g.metaDescription || '', g.excerpt || '',
    ...(g.faqs || []).flatMap((f) => [f.question, f.answer]), ...(g.howTo ? [g.howTo.name, g.howTo.description || '', ...g.howTo.steps.flatMap((s) => [s.name, s.text])] : [])].filter((s) => typeof s === 'string')
  const bodyWords = bodyText.reduce((n, t) => n + words(t), 0)
  if (bodyWords < p.minWords) err(`body is ${bodyWords} words; this page needs at least ${p.minWords} (FAQs and the quick answer do not count)`)
  if (bodyWords > p.minWords * 2.2) warn(`body is ${bodyWords} words, more than twice the minimum; make sure it is not padded`)

  const media = g.body.filter((b) => b.type === 'media').length
  if (p.flags.includes('id') && media < 2) err(`this is an identification page: add at least 2 { "type": "media", "needed": "..." } placeholders where a photo or diagram would help (found ${media})`)
  if (pillar && media < 2) err('a pillar needs at least 2 media placeholders')

  // ── FAQ, how-to, disclaimer ───────────────────────────────────────────────────
  const [fMin, fMax] = pillar ? [6, 8] : [4, 6]
  if (!Array.isArray(g.faqs) || g.faqs.length < fMin || g.faqs.length > fMax) err(`"faqs" must have ${fMin} to ${fMax} questions`)
  else g.faqs.forEach((f, i) => {
    if (typeof f.question !== 'string' || !f.question.trim().endsWith('?')) err(`faqs[${i}].question must be a question ending in "?"`)
    const n = words(f.answer || '')
    if (n < 35 || n > 120) err(`faqs[${i}].answer is ${n} words; it must be 35 to 120`)
    if (/\]\(|\*\*/.test(f.answer || '')) err(`faqs[${i}].answer must be plain text (no links or bold): it is used as structured data`)
  })
  if (p.flags.includes('howto')) {
    if (!g.howTo || !Array.isArray(g.howTo.steps) || g.howTo.steps.length < 4 || g.howTo.steps.length > 10) err('this is a how-to page: "howTo" needs { name, steps[4 to 10] }')
    else g.howTo.steps.forEach((s, i) => { if (!s.name || words(s.text || '') < 12) err(`howTo.steps[${i}] needs a name and 12+ words of text`); if (/\]\(|\*\*/.test(s.text || '')) err(`howTo.steps[${i}].text must be plain text`) })
  } else if (g.howTo) warn('"howTo" is present on a page that is not flagged as a how-to; remove it unless the page really is step-by-step')
  const wantHealth = p.flags.includes('health'), wantPest = p.flags.includes('pesticide')
  const want = wantHealth && wantPest ? 'both' : wantHealth ? 'health' : wantPest ? 'pesticide' : null
  if (want && g.disclaimer !== want && g.disclaimer !== 'both') err(`"disclaimer" must be "${want}"`)

  // ── sources and links ─────────────────────────────────────────────────────────
  const [sMin, sMax] = pillar ? [5, 8] : [3, 6]
  const srcUrls = new Set()
  let auth = 0
  if (!Array.isArray(g.sources) || g.sources.length < sMin || g.sources.length > sMax) err(`"sources" must list ${sMin} to ${sMax} sources`)
  for (const s of g.sources || []) {
    if (!s.title || !s.publisher || !s.url) { err('every source needs title, publisher and url'); continue }
    let host = ''
    try { const u = new URL(s.url); host = u.hostname.replace(/^www\./, ''); if (u.protocol !== 'https:') err(`source must be https: ${s.url}`) } catch { err(`source url is not a valid URL: ${s.url}`); continue }
    if (RETAIL.test(s.url)) err(`a retailer cannot be a source: ${s.url}`)
    if (srcUrls.has(s.url)) err(`duplicate source: ${s.url}`)
    srcUrls.add(s.url)
    if (isAuth(host)) auth++
    else if (!['manufacturer', 'cost-survey', 'industry', 'news'].includes(s.kind)) err(`source ${host} is not a government, university or recognised scientific/medical source. If it is the product maker's own page or a published cost survey, add "kind": "manufacturer" or "cost-survey"; otherwise replace it.`)
  }
  if (auth < 3) err(`only ${auth} government / university / scientific sources; at least 3 are required`)

  const internal = [], external = []
  for (const t of [...bodyText, g.quickAnswer?.lead || '', ...(g.quickAnswer?.bullets || []), ...(g.facts ? g.facts.rows.flat() : [])]) {
    for (const m of String(t).matchAll(LINK)) (m[2].startsWith('/') ? internal : external).push({ text: m[1], href: m[2] })
    const leftover = String(t).replace(LINK, '')
    if (/\]\(|\[[^\]]*\]\s*\(/.test(leftover) || /https?:\/\//.test(leftover)) err(`malformed link or bare URL in: "${String(t).slice(0, 90)}…"`)
    if ((String(t).match(/\*\*/g) || []).length % 2) err(`unbalanced ** in: "${String(t).slice(0, 90)}…"`)
    if (/<\/?[a-z][^>]*>/i.test(t)) err(`HTML tag in text: "${String(t).slice(0, 90)}…"`)
  }
  for (const l of external) {
    if (!/^https:\/\//.test(l.href)) err(`external link must be https: ${l.href}`)
    if (!srcUrls.has(l.href)) err(`external link is not one of this page's sources (the only external links allowed are citations): ${l.href}`)
  }
  for (const u of srcUrls) if (!external.some((l) => l.href === u)) err(`source is listed but never linked in the text where it is used: ${u}`)
  if (external.some((l) => /^(here|this|source|link|click here|study|this study)$/i.test(l.text.trim()))) err('a citation link uses a vague anchor ("here", "source", "this study"); name the organisation or the finding instead')

  const self = p.path
  const hrefs = internal.map((l) => l.href.replace(/[#?].*$/, ''))
  for (const h of hrefs) {
    if (h !== '/' && h.endsWith('/')) err(`internal link has a trailing slash: ${h}`)
    else if (!EXISTING.has(h) && !PLANNED.has(h)) err(`internal link points at a page that does not exist: ${h}`)
    if (h === self) err('the page links to itself')
  }
  const uniq = new Set(hrefs)
  const anchorsByHref = {}
  for (const l of internal) (anchorsByHref[l.href] ||= []).push(l.text.toLowerCase())
  if (internal.some((l) => /^(here|click here|this (page|guide|article|post)|read more|learn more|more)$/i.test(l.text.trim()))) err('an internal link uses a generic anchor ("here", "read more"); use words that describe the destination')

  if (pillar) {
    for (const s of p.required.spokes) if (!uniq.has(s)) err(`pillar must link to every guide in its cluster; missing ${s}`)
    for (const s of p.required.clusterExisting) if (!uniq.has(s)) err(`pillar must link to the existing cluster page ${s}`)
    for (const s of p.required.pillarRing) if (!uniq.has(s)) err(`pillar must link to ${s} (the other hub pages)`)
    if (p.required.category && !uniq.has(p.required.category)) err(`pillar must link to its product guide hub ${p.required.category}`)
  } else {
    if (p.required.pillar && !uniq.has(p.required.pillar)) err(`must link to its hub page ${p.required.pillar} in the body text`)
    for (const s of p.required.ring) if (!uniq.has(s)) err(`must link to the neighbouring guide ${s} in the body text`)
    const sib = [...uniq].filter((h) => NEW_PATHS.has(h) && h.startsWith('/blog/') && planBySlug[`spoke:${h.slice(6)}`]?.cluster === p.cluster)
    if (sib.length < p.required.minSiblings) err(`links to ${sib.length} guides in its own cluster; it needs at least ${p.required.minSiblings}`)
    if (sib.length > 8) warn(`links to ${sib.length} guides in its own cluster; the brief asks for 4 to 8`)
    const ex = [...uniq].filter((h) => EXISTING.has(h) && h !== p.required.pillar && h !== '/' && (h.startsWith('/blog/') || h.startsWith('/learn') || h.startsWith('/pest-product-guides') || h === '/pest-control-cost-canada' || /-(statistics|tracker)/.test(h)))
    if (ex.length < p.required.minExisting) err(`links to ${ex.length} pre-existing pages; it needs 2 to 4 real topical matches`)
    if (p.required.category && !uniq.has(p.required.category)) err(`must link to the product guide hub ${p.required.category}`)
    const svc = [...uniq].filter((h) => EXISTING.has(h) && !h.startsWith('/blog/') && !h.startsWith('/learn') && !h.startsWith('/pest-product-guides') && h !== '/pest-control-cost-canada' && !/-(statistics|tracker)/.test(h))
    if (svc.length) err(`do not link to service or city pages from these guides: ${svc.join(', ')}`)
  }

  // ── US reader, honesty and compliance ─────────────────────────────────────────
  const joined = everything.join('\n')
  const visible = strip(joined)
  const sp = usSpellingProblems(joined)
  if (sp.length) err(`non-US spelling: ${sp.join(', ')}`)
  const hard = visible.match(new RegExp(CANADA_HARD.source, 'g'))
  if (hard) err(`Canada-specific reference: ${[...new Set(hard)].join(', ')}`)
  const canad = (visible.match(/Canad/g) || []).length
  if (canad > 2) err(`"Canada/Canadian" appears ${canad} times; these pages are for US readers (a passing range note such as "the northern US and southern Canada" is the limit)`)
  for (const t of everything) {
    const v = strip(t)
    if (/\d\s?°\s?C\b/.test(v) && !/°\s?F\b/.test(v)) err(`Celsius without Fahrenheit: "${v.slice(0, 90)}…"`)
    if (/\b\d+(\.\d+)?\s?(mm|cm|millimeters?|centimeters?)\b/.test(v) && !/\binch(es)?\b|\bin\.\s|"/.test(v)) err(`metric size without inches: "${v.slice(0, 90)}…"`)
    if (/\b\d+(\.\d+)?\s?(km|kilometers?|kg|kilograms?|hectares?)\b/.test(v) && !/\b(miles?|pounds?|lbs?|acres?|feet|ft)\b/.test(v)) err(`metric unit without a US equivalent: "${v.slice(0, 90)}…"`)
    if (TESTING.test(v)) err(`claims testing that did not happen: "${v.slice(0, 90)}…"`)
    if (ABSOLUTE.test(v)) err(`absolute safety or performance claim (${v.match(ABSOLUTE)[0]}): "${v.slice(0, 90)}…"`)
    if (RETAIL_WORD.test(v)) err(`retail or affiliate language (${v.match(RETAIL_WORD)[0]}): "${v.slice(0, 90)}…"`)
    if (RETAIL.test(t)) err(`retailer reference or link: "${v.slice(0, 90)}…"`)
    if (/\bas an AI\b|\blorem ipsum\b|\bTODO\b|\bTK\b|\[citation needed\]|\bXX+\b/i.test(v)) err(`placeholder text: "${v.slice(0, 90)}…"`)
    if (/[“"][^”"]{25,}[”"]\s*(,|\.)?\s*(says|said|according to|states|wrote|notes)\b/i.test(v) || /(says|said|states|wrote|notes|according to [^,.]{3,60}),?\s*[“"][^”"]{25,}[”"]/i.test(v)) warn(`quoted statement attributed to a source; it must be word-for-word from the page you read, otherwise paraphrase: "${v.slice(0, 90)}…"`)
  }
  if (/\b(in conclusion|in today's world|when it comes to|it's important to note that|look no further|delve)\b/i.test(visible)) warn('filler phrasing found ("in conclusion", "when it comes to", "it\'s important to note"); tighten it')
  const kwd = p.keyword.toLowerCase()
  if (!pillar && !(`${g.h1} ${g.metaTitle}`.toLowerCase().includes(kwd)) ) {
    const toks = kwd.split(' ').filter((w) => w.length > 2)
    const hay = `${g.h1} ${g.metaTitle}`.toLowerCase()
    if (toks.filter((w) => hay.includes(w.replace(/s$/, ''))).length < Math.ceil(toks.length * 0.75)) warn(`the keyword "${p.keyword}" is not clearly present in the h1 or metaTitle`)
  }

  return { errors, warnings, stats: { path: p.path, cluster: p.cluster, bodyWords, faqs: (g.faqs || []).length, sources: srcUrls.size, auth, media, links: [...uniq], metaTitle: g.metaTitle } }
}

// ── run ─────────────────────────────────────────────────────────────────────────
const fileFor = (name) => {
  const direct = join(GUIDES, `${name}.json`), pil = join(GUIDES, `pillar-${name}.json`)
  return existsSync(direct) ? direct : existsSync(pil) ? pil : direct
}
const files = ALL ? (existsSync(GUIDES) ? readdirSync(GUIDES).filter((f) => f.endsWith('.json')).map((f) => join(GUIDES, f)) : []) : names.map(fileFor)
if (!files.length) { console.error('usage: node scripts/validate-guide.mjs <slug> | --all [--report]'); process.exit(1) }

let bad = 0
const results = {}
for (const f of files) {
  const name = f.replace(/\\/g, '/').split('/').pop().replace(/\.json$/, '')
  if (!existsSync(f)) { console.error(`✗ ${name}: file not found (${f})`); bad++; continue }
  const r = validate(f)
  results[name] = r
  if (r.errors.length) bad++
  if (!ALL || r.errors.length) {
    console.log(`${r.errors.length ? '✗' : '✓'} ${name}${r.stats.bodyWords ? `  (${r.stats.bodyWords} body words, ${r.stats.sources} sources, ${r.stats.faqs} FAQs)` : ''}`)
    for (const e of r.errors) console.log(`   ERROR  ${e}`)
    if (!ALL) for (const w of r.warnings) console.log(`   warn   ${w}`)
  }
}

if (ALL) {
  const built = Object.values(results).filter((r) => r.stats.path)
  const have = new Set(built.map((r) => r.stats.path))
  const missing = plan.pages.filter((p) => !have.has(p.path)).map((p) => p.path)
  // inbound links from OTHER new pages
  const inbound = Object.fromEntries(plan.pages.map((p) => [p.path, 0]))
  for (const r of built) for (const h of r.stats.links) if (h in inbound && h !== r.stats.path) inbound[h]++
  const starved = Object.entries(inbound).filter(([path, n]) => have.has(path) && n < 3)
  if (REPORT) {
    console.log('\npath | body words | sources (gov/edu) | FAQs | media | inbound from new pages')
    for (const r of built.sort((a, b) => a.stats.path.localeCompare(b.stats.path))) console.log(`${r.stats.path} | ${r.stats.bodyWords} | ${r.stats.sources} (${r.stats.auth}) | ${r.stats.faqs} | ${r.stats.media} | ${inbound[r.stats.path]}`)
  }
  const titles = {}
  for (const r of built) (titles[r.stats.metaTitle] ||= []).push(r.stats.path)
  const dupTitles = Object.entries(titles).filter(([, v]) => v.length > 1)
  for (const [t, v] of dupTitles) { console.log(`✗ duplicate metaTitle "${t}": ${v.join(', ')}`); bad++ }
  for (const [path, n] of starved) { console.log(`✗ ${path} has only ${n} inbound links from other new pages (needs 3)`); bad++ }
  // A temporary redirect (next.config.mjs, US-GUIDES-PENDING block) must never sit over a guide
  // that exists: it would hide the page. The register script keeps the block in step; this
  // catches the case where someone added a guide and forgot to run it.
  const cfgFile = join(ROOT, 'next.config.mjs')
  if (existsSync(cfgFile)) {
    const cfg = readFileSync(cfgFile, 'utf8')
    const from = cfg.indexOf('US-GUIDES-PENDING:START'), to = cfg.indexOf('US-GUIDES-PENDING:END')
    if (from >= 0 && to > from) {
      for (const m of cfg.slice(from, to).matchAll(/source: '([^']+)'/g)) {
        // "published" means the route file exists, not merely that a draft JSON is on disk
        if (existsSync(join(ROOT, 'app', m[1].slice(1), 'page.tsx'))) { console.log(`✗ ${m[1]} is published but next.config.mjs still redirects it away. Run: node scripts/us-pages-register.mjs`); bad++ }
      }
    }
  }
  const strict = args.includes('--complete')
  if (missing.length) { console.log(`${strict ? '✗' : '…'} ${missing.length} planned pages not written yet${missing.length <= 12 ? `: ${missing.join(', ')}` : ''}`); if (strict) bad++ }
  console.log(`\n${bad ? '✗' : '✓'} check:guides: ${built.length} guides checked, ${Object.values(results).filter((r) => r.errors.length).length} with errors, ${starved.length} short of inbound links, ${missing.length} not written`)
}
process.exit(bad ? 1 : 0)
