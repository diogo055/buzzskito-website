// Checks the North American pest guides (content/guides/<slug>.json) against the rules
// they were commissioned under. Wired into `npm run build` as check:guides, so a guide
// that breaks a rule fails the deploy.
//
//   node scripts/validate-guide.mjs <slug> [<slug> ...]   check named guides
//   node scripts/validate-guide.mjs path/to/<slug>.json   check a draft wherever it is (outside
//                                                         content/guides/ it counts as not yet live)
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
//   - every photo is a real one whose source, credit and licence are on record
//     (data/god-build/photos.json), charts add up, and maps have their shapes (data/geo/)
//   - "confused" photo cards link real (or planned) pages and use photos on record
//   - the photo-ID formula (Oct 16, 2026; data/god-build/WRITER_BRIEF_PHOTO_ID.md): 8 to 10 FAQs
//     on every scheduled page released from Oct 20, 2026 (see FORMULA_FROM below)
//
// Pages of the scheduled "god" batch (data/god-build/plan.src.json) wait in
// content/guides-scheduled/ until their release date; name them to check them there, or pass
// --scheduled to check them all.
import { readFileSync, readdirSync, existsSync } from 'fs'
import { join, resolve } from 'path'
import { LINK, blockTexts, blockHrefs, factsTexts, internalLinks, inboundNeeded } from './guide-links.mjs'

const ROOT = process.cwd()
const GUIDES = join(ROOT, 'content', 'guides')
const SCHEDULED = join(ROOT, 'content', 'guides-scheduled')
const DIR = join(ROOT, 'data', 'us-pages')
// REHEARSAL_DATE is set only by .github/workflows/release-rehearsal.yml: it checks the site as it
// will stand on that release day, so pages dated for that day are not "in the future" yet.
const REHEARSAL = /^\d{4}-\d{2}-\d{2}$/.test(process.env.REHEARSAL_DATE || '') ? process.env.REHEARSAL_DATE : ''
const TODAY = REHEARSAL || new Date().toISOString().slice(0, 10)
const PHOTOS_FILE = join(ROOT, 'data', 'god-build', 'photos.json')
const PHOTOS = existsSync(PHOTOS_FILE) ? Object.fromEntries(JSON.parse(readFileSync(PHOTOS_FILE, 'utf8')).photos.map((x) => [x.file, x])) : {}
// the same records by id: the file name without /guides/photos/ and .webp (lib/photos.ts)
const PHOTO_IDS = Object.fromEntries(Object.values(PHOTOS).map((x) => [String(x.file).replace(/^\/guides\/photos\//, '').replace(/\.webp$/, ''), x]))
// The photo-ID formula (Oct 16, 2026, from data/god-build/bettertermite-teardown.md): a scheduled
// page whose plan releaseOn is FORMULA_FROM or later carries 8 to 10 FAQs. Pages fact-checked by
// FORMULA_CHECKED_BY were written to the earlier brief (4 to 6) and keep it: on Oct 16 that is
// mosquitoes-in-texas, the one page then waiting in content/guides-scheduled/. Every live page has
// releaseOn before FORMULA_FROM or is outside the scheduled batch, so none of them changes.
const FORMULA_FROM = '2026-10-20', FORMULA_CHECKED_BY = '2026-10-16'
const CHECKED_DIR = join(ROOT, 'data', 'us-pages', 'checked')
const checkedOn = (base) => { try { return String(JSON.parse(readFileSync(join(CHECKED_DIR, `${base}.json`), 'utf8')).checkedOn || '') } catch { return '' } }
const LICENSES = new Set(['public-domain', 'CC0-1.0', 'CC-BY-2.0', 'CC-BY-2.5', 'CC-BY-3.0', 'CC-BY-4.0', 'CC-BY-SA-2.0', 'CC-BY-SA-2.5', 'CC-BY-SA-3.0', 'CC-BY-SA-4.0'])
const STATE_CODES = new Set('AL AK AZ AR CA CO CT DE DC FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI WY'.split(' '))
// map scopes: "us" (states), "canada" (provinces and territories; not "ca", which is California),
// a state code (its counties), a province code (its census divisions)
const MAP_SCOPES = new Set(['us', 'canada', ...STATE_CODES, ...'BC AB SK MB ON QC NB NS PE NL YT NT NU'.split(' ')])
// pixel size of a WebP, PNG or JPEG file, read from its header
function imageSize(file) {
  const b = readFileSync(file)
  if (b.toString('ascii', 0, 4) === 'RIFF' && b.toString('ascii', 8, 12) === 'WEBP') {
    const tag = b.toString('ascii', 12, 16)
    if (tag === 'VP8X') return { width: 1 + b.readUIntLE(24, 3), height: 1 + b.readUIntLE(27, 3) }
    if (tag === 'VP8 ') return { width: b.readUInt16LE(26) & 0x3fff, height: b.readUInt16LE(28) & 0x3fff }
    if (tag === 'VP8L') { const n = b.readUInt32LE(21); return { width: (n & 0x3fff) + 1, height: ((n >> 14) & 0x3fff) + 1 } }
  }
  if (b.readUInt32BE(0) === 0x89504e47) return { width: b.readUInt32BE(16), height: b.readUInt32BE(20) }
  if (b[0] === 0xff && b[1] === 0xd8) {
    for (let i = 2; i < b.length - 9;) {
      if (b[i] !== 0xff) { i++; continue }
      const m = b[i + 1]
      if (m >= 0xc0 && m <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(m)) return { width: b.readUInt16BE(i + 7), height: b.readUInt16BE(i + 5) }
      i += 2 + b.readUInt16BE(i + 2)
    }
  }
  return null
}
const geoCache = {}
const geoFor = (scope) => {
  const f = join(ROOT, 'data', 'geo', `${String(scope).toLowerCase()}.json`)
  if (!(scope in geoCache)) geoCache[scope] = existsSync(f) ? JSON.parse(readFileSync(f, 'utf8')) : null
  return geoCache[scope]
}
const plan = JSON.parse(readFileSync(join(DIR, 'plan.json'), 'utf8'))
const routes = JSON.parse(readFileSync(join(DIR, 'routes.json'), 'utf8'))
const EXISTING = new Set(routes.existing), PLANNED = new Set(routes.planned)
const planBySlug = Object.fromEntries(plan.pages.map((p) => [`${p.kind}:${p.slug}`, p]))
const NEW_PATHS = new Set(plan.pages.map((p) => p.path))

const args = process.argv.slice(2)
const ALL = args.includes('--all'), REPORT = args.includes('--report')
const names = args.filter((a) => !a.startsWith('--'))

// ── text helpers ────────────────────────────────────────────────────────────────
// LINK and blockTexts come from ./guide-links.mjs (shared with the release job)
const strip = (s) => String(s).replace(LINK, '$1').replace(/\*+/g, '')
const words = (s) => (strip(s).match(/[A-Za-z0-9][A-Za-z0-9'’%°/.-]*/g) || []).length

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
// Canadian governments and universities do not use .gov / .edu (the province pages cite them)
const CA_AUTH = [
  'canada.ca', 'gc.ca', 'novascotia.ca', 'alberta.ca', 'saskatchewan.ca', 'quebec.ca', 'gnb.ca', 'princeedwardisland.ca', 'ontario.ca',
  'publichealthontario.ca', 'inspq.qc.ca', 'bccdc.ca', 'gov.bc.ca', 'gov.mb.ca', 'gov.nl.ca', 'gov.pe.ca', 'gov.yk.ca', 'gov.nt.ca', 'gov.nu.ca',
  'donneesquebec.ca', 'winnipeg.ca', 'edmonton.ca', 'calgary.ca', 'regina.ca', 'saskatoon.ca', 'etick.ca', 'ubishops.ca', 'mun.ca', 'mta.ca',
  'dal.ca', 'unb.ca', 'upei.ca', 'mcgill.ca', 'umontreal.ca', 'ulaval.ca', 'utoronto.ca', 'uoguelph.ca', 'uwaterloo.ca', 'yorku.ca', 'umanitoba.ca',
  'usask.ca', 'ualberta.ca', 'ucalgary.ca', 'ubc.ca', 'sfu.ca', 'uvic.ca', 'climate.weather.gc.ca', 'statcan.gc.ca',
]
const isAuth = (host) => /\.(gov|edu|mil)$/.test(host) || /\.(gov|edu)\.[a-z]{2}$/.test(host) || AUTH_HOSTS.some((h) => host === h || host.endsWith(`.${h}`)) || CA_AUTH.some((h) => host === h || host.endsWith(`.${h}`))
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
  // proper nouns that happen to use a British form (Centre County and Centre Hall, Pennsylvania)
  const PROPER = /\bCentre (County|Hall|Region)\b/g
  for (const w of strip(text).replace(PROPER, '').toLowerCase().match(/[a-z]+/g) || []) if (set.has(w)) out.push(w)
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
  // A scheduled page carries its release date; scripts/release-scheduled.mjs moves the date to
  // the day it actually goes live if that is later, so a released one may be later, never earlier.
  const god = p.batch === 'god'
  // waiting: in content/guides-scheduled/, or a draft checked by its path outside content/guides/
  const inScheduled = file.replace(/\\/g, '/').includes('/content/guides-scheduled/')
  const waiting = inScheduled || !file.replace(/\\/g, '/').includes('/content/guides/')
  if (!god && g.datePublished !== p.datePublished) err(`"datePublished" must be "${p.datePublished}"`)
  if (god && waiting && g.datePublished !== p.datePublished) err(`"datePublished" must be the release date "${p.datePublished}" (data/god-build/plan.src.json)`)
  if (god && !waiting && !(g.datePublished >= p.datePublished && g.datePublished <= TODAY)) err(`"datePublished" ${g.datePublished} must fall between the release date ${p.datePublished} and today`)
  if (god && inScheduled && existsSync(join(GUIDES, file.replace(/\\/g, '/').split('/').pop()))) err('this page is in both content/guides and content/guides-scheduled')
  if (god && p.parent && !(g.parent && g.parent.href === p.parent.href && g.parent.name === p.parent.name)) err(`"parent" must be ${JSON.stringify(p.parent)}`)
  if (god && g.section !== p.section && !(p.section === 'blog' && g.section === undefined)) err(`"section" must be "${p.section}"`)
  if (typeof g.metaTitle === 'string' && /buzzskito/i.test(g.metaTitle)) err('"metaTitle" must not include the brand; the site appends " | BuzzSkito"')
  if (typeof g.metaTitle === 'string' && /\b20\d\d\b/.test(g.metaTitle)) warn('"metaTitle" contains a year; only keep it if the page is genuinely about that year')

  if (!g.quickAnswer || typeof g.quickAnswer.lead !== 'string' || !Array.isArray(g.quickAnswer.bullets)) err('"quickAnswer" needs { lead, bullets[] }')
  else {
    const n = words(g.quickAnswer.lead)
    if (n < 22 || n > 75) err(`quickAnswer.lead is ${n} words; it must be 22 to 75`)
    if (g.quickAnswer.bullets.length < 3 || g.quickAnswer.bullets.length > 6) err('quickAnswer.bullets must have 3 to 6 items')
  }
  if (g.facts) {
    // two shapes: the "at a glance" list (rows of [label, value]) or, with "head", a quick-ID table
    const head = g.facts.head
    if (head !== undefined) {
      if (!Array.isArray(head) || head.length < 2 || head.length > 5 || head.some((h) => typeof h !== 'string' || !h.trim() || /\]\(/.test(h))) err('"facts.head" (a quick-ID table) needs 2 to 5 column headings, plain text without links')
      else if (typeof g.facts.title !== 'string' || !Array.isArray(g.facts.rows) || g.facts.rows.some((r) => !Array.isArray(r) || r.length !== head.length || r.some((c) => typeof c !== 'string' || !c.trim()))) err(`"facts" with a "head" needs { title, head, rows }: every row has ${head.length} non-empty cells, one per heading`)
      else if (g.facts.rows.length < 4 || g.facts.rows.length > 12) err('"facts.rows" must have 4 to 12 rows')
    } else if (typeof g.facts.title !== 'string' || !Array.isArray(g.facts.rows) || g.facts.rows.some((r) => !Array.isArray(r) || r.length !== 2)) err('"facts" needs { title, rows: [[label, value], ...] }')
    else if (g.facts.rows.length < 4 || g.facts.rows.length > 12) err('"facts.rows" must have 4 to 12 rows')
    if (g.facts.caption !== undefined && (typeof g.facts.caption !== 'string' || g.facts.caption.trim().length < 10 || g.facts.caption.length > 300)) err('"facts.caption" must be 10 to 300 characters (name the sources the box is drawn from)')
  }

  // ── body ──────────────────────────────────────────────────────────────────────
  const TYPES = new Set(['h2', 'h3', 'p', 'ul', 'ol', 'table', 'callout', 'media', 'recipe', 'checklist', 'card', 'figure', 'chart', 'map', 'confused'])
  const visual = p.batch === 'visual'
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
    if (b.type === 'recipe') {
      if (!b.title || !Array.isArray(b.ingredients) || b.ingredients.length < 1 || !Array.isArray(b.steps) || b.steps.length < 1) err(`body[${i}] (recipe) needs title, ingredients[] and steps[]`)
      if (!b.safety || !['lower-risk', 'caution', 'keep-away'].includes(b.safety.tier) || !b.safety.pets || !b.safety.children) err(`body[${i}] (recipe) needs safety { tier: lower-risk | caution | keep-away, pets, children }`)
      if (!b.source || !/\]\(https:\/\//.test(b.source)) err(`body[${i}] (recipe) needs "source": a link to the page that publishes these measurements`)
      if (!b.limits) err(`body[${i}] (recipe) needs "limits": what it does not do`)
    }
    if (b.type === 'checklist' && (!Array.isArray(b.items) || b.items.length < 3)) err(`body[${i}] (checklist) needs 3 or more items`)
    if (b.type === 'card' && (!b.title || !Array.isArray(b.items) || b.items.length < 6 || b.items.length > 12)) err(`body[${i}] (card) needs a title and 6 to 12 items`)
    if (b.type === 'media' && (typeof b.needed !== 'string' || b.needed.length < 25)) err(`body[${i}] (media) needs a "needed" description of the photo or diagram (25+ characters)`)
    if (b.type === 'callout' && b.tone && !['tip', 'warning', 'note'].includes(b.tone)) err(`body[${i}] (callout) tone must be tip, warning or note`)
    if (b.type === 'figure') {
      // a real photograph whose origin is on record; never an AI image or a drawing
      const where = `body[${i}] (figure ${b.src})`
      if (typeof b.src !== 'string' || !b.src.startsWith('/guides/photos/') || !/\.(webp|jpe?g|png)$/.test(b.src)) err(`${where}: "src" must be a file under /guides/photos/ (webp, jpg or png)`)
      else {
        const f = join(ROOT, 'public', b.src)
        if (!existsSync(f)) err(`${where}: the file public${b.src} does not exist`)
        else { const d = imageSize(f); if (!d || d.width !== b.width || d.height !== b.height) err(`${where}: width/height must be the file's real size${d ? ` (${d.width} x ${d.height})` : ''}`) }
        const rec = PHOTOS[b.src]
        if (!rec) err(`${where}: not in data/god-build/photos.json, the record of where each photo came from`)
        else if (rec.license !== b.license || rec.credit !== b.credit || rec.sourceUrl !== b.sourceUrl) err(`${where}: license, credit and sourceUrl must match its record in data/god-build/photos.json`)
      }
      if (!LICENSES.has(b.license)) err(`${where}: licence "${b.license}" is not allowed (public domain, CC0, CC BY or CC BY-SA only)`)
      if (typeof b.credit !== 'string' || b.credit.trim().length < 3) err(`${where}: "credit" is required, exactly as the source asks`)
      if (typeof b.sourceUrl !== 'string' || !/^https:\/\//.test(b.sourceUrl)) err(`${where}: "sourceUrl" must be the https page the photo came from`)
      if (typeof b.alt !== 'string' || b.alt.length < 15 || b.alt.length > 220) err(`${where}: "alt" must describe the photo in 15 to 220 characters`)
      if (/\b(ai|a\.i\.)[- ]generated|illustration|rendering\b/i.test(`${b.alt} ${b.caption || ''}`)) err(`${where}: figures are photographs; generated or drawn images are not allowed`)
    }
    if (b.type === 'chart') {
      const where = `body[${i}] (chart)`
      const n = Array.isArray(b.x) ? b.x.length : 0
      if (typeof b.title !== 'string' || b.title.length < 10 || b.title.length > 120) err(`${where}: "title" must be 10 to 120 characters`)
      if (n < 2 || n > 40 || b.x.some((x) => typeof x !== 'string' || !x)) err(`${where}: "x" needs 2 to 40 labels`)
      if (!Array.isArray(b.series) || b.series.length < 1 || b.series.length > 3) err(`${where}: "series" needs 1 to 3 series`)
      else for (const s of b.series) {
        if (!s.name || !Array.isArray(s.values) || s.values.length !== n) err(`${where}: series "${s.name}" needs a name and exactly ${n} values`)
        else if (s.values.some((v) => v !== null && !(typeof v === 'number' && Number.isFinite(v) && v >= 0))) err(`${where}: series "${s.name}" values must be numbers of 0 or more, or null for no data`)
      }
      if (typeof b.source !== 'string' || b.source.length < 5) err(`${where}: "source" is required (name the publisher; link it if it is one of the page's sources)`)
    }
    if (b.type === 'map') {
      const where = `body[${i}] (map ${b.scope})`
      const scope = String(b.scope || '')
      if (!MAP_SCOPES.has(scope)) err(`${where}: "scope" must be "us", "canada", a two-letter state code or a province code`)
      const geo = geoFor(scope)
      if (!geo) err(`${where}: no shapes for this map yet (data/geo/${scope.toLowerCase()}.json; run scripts/build-geo.mjs)`)
      if (typeof b.title !== 'string' || b.title.length < 10 || b.title.length > 120) err(`${where}: "title" must be 10 to 120 characters`)
      const keys = new Set((b.categories || []).map((c) => c.key))
      if (!Array.isArray(b.categories) || b.categories.length < 1 || b.categories.length > 4 || b.categories.some((c) => !c.key || !c.label)) err(`${where}: "categories" needs 1 to 4 { key, label } entries`)
      const ids = geo ? new Set(geo.features.map((f) => f.id)) : null
      for (const [k, v] of Object.entries(b.values || {})) {
        if (ids && !ids.has(k)) err(`${where}: "${k}" is not a place on this map`)
        if (!keys.has(v)) err(`${where}: "${k}" has category "${v}", which is not in "categories"`)
      }
      if (!Object.keys(b.values || {}).length) err(`${where}: "values" is empty`)
      for (const [k, h] of Object.entries(b.links || {})) {
        if (ids && !ids.has(k)) err(`${where}: link for "${k}", which is not a place on this map`)
        if (typeof h !== 'string' || !h.startsWith('/') || (!EXISTING.has(h) && !PLANNED.has(h))) err(`${where}: link for "${k}" must be a page on this site: ${h}`)
      }
      if (typeof b.source !== 'string' || b.source.length < 5) err(`${where}: "source" is required`)
    }
    if (b.type === 'confused') {
      // "Commonly confused with": 2 to 6 photo cards, each linking the look-alike's own page. The
      // hrefs are checked below with the page's other internal links (exist or planned, not this
      // page, no service or city page) and count toward its links; the photos must be on record.
      const where = `body[${i}] (confused)`
      const plain = (s, min, max) => typeof s === 'string' && s.trim().length >= min && s.length <= max && !/\]\(|[*<>]|https?:\/\//.test(s)
      if (b.title !== undefined && !plain(b.title, 3, 80)) err(`${where}: "title" must be plain text, 3 to 80 characters (leave it out for "Commonly confused with")`)
      if (!Array.isArray(b.items) || b.items.length < 2 || b.items.length > 6) err(`${where}: "items" needs 2 to 6 cards`)
      else {
        const hrefs = new Set(), photos = new Set()
        b.items.forEach((c, j) => {
          const at = `${where} items[${j}]`
          if (!c || typeof c !== 'object') return err(`${at}: a card is { href, name, photo, note }`)
          if (typeof c.href !== 'string' || !/^\/(blog|learn)\/[a-z0-9-]+$/.test(c.href)) err(`${at}: "href" must be the address of a guide on this site, such as /blog/springtails`)
          else if (hrefs.has(c.href)) err(`${at}: two cards link ${c.href}`)
          else hrefs.add(c.href)
          if (!plain(c.name, 3, 40)) err(`${at}: "name" must be plain text, 3 to 40 characters`)
          if (!plain(c.note, 15, 120)) err(`${at}: "note" (the one feature that tells it apart) must be plain text, 15 to 120 characters, without links or bold`)
          if (c.alt !== undefined && !plain(c.alt, 15, 220)) err(`${at}: "alt", when given, must describe the photo in 15 to 220 characters of plain text`)
          if (/\b(ai|a\.i\.)[- ]generated|illustration|rendering\b/i.test(`${c.alt || ''} ${c.note || ''}`)) err(`${at}: cards show photographs; generated or drawn images are not allowed`)
          const rec = typeof c.photo === 'string' ? PHOTO_IDS[c.photo] : undefined
          if (!rec) err(`${at}: "photo" must be the id of a photo in data/god-build/photos.json (its file name without .webp)${typeof c.photo === 'string' && c.photo.startsWith('/') ? `, e.g. "${c.photo.replace(/^\/guides\/photos\//, '').replace(/\.webp$/, '')}"` : ''}`)
          else {
            if (!existsSync(join(ROOT, 'public', rec.file))) err(`${at}: photo "${c.photo}" is on record but public${rec.file} does not exist`)
            if (!LICENSES.has(rec.license)) err(`${at}: photo "${c.photo}" has licence "${rec.license}" (public domain, CC0, CC BY or CC BY-SA only)`)
            if (typeof rec.credit !== 'string' || rec.credit.trim().length < 3 || !/^https:\/\//.test(rec.sourceUrl || '')) err(`${at}: photo "${c.photo}" has no credit or source page on record`)
            if (photos.has(c.photo)) err(`${at}: photo "${c.photo}" is on two cards`)
            photos.add(c.photo)
          }
        })
      }
    }
    if (['h2', 'h3'].includes(b.type) && /\]\(/.test(b.text)) err(`body[${i}] (${b.type}) must not contain a link`)
    if (b.type === 'p' && words(b.text) > 130) warn(`body[${i}] is a ${words(b.text)}-word paragraph; split it`)
  })
  if (g.body[0].type !== 'h2') err('body must start with an h2')
  if (g.body.filter((b) => b && b.type === 'confused').length > 1) err('a page carries one "confused" card row; merge them')
  const h2s = g.body.filter((b) => b.type === 'h2').map((b) => strip(b.text))
  if (h2s.length < (pillar ? 9 : 5)) err(`body has ${h2s.length} h2 sections; it needs at least ${pillar ? 9 : 5}`)
  if (new Set(h2s.map((h) => h.toLowerCase())).size !== h2s.length) err('two h2 headings are identical')
  if (h2s.some((h) => /^(conclusion|final thoughts|in summary|introduction|related (posts|reading|articles))$/i.test(h.trim()))) err('remove generic headings such as "Conclusion", "Introduction" or "Related posts"')

  const bodyText = g.body.flatMap(blockTexts)
  // facts headings and card alt text are not body words, but they are checked like everything else
  const extras = [...(g.facts && Array.isArray(g.facts.head) ? g.facts.head : []), ...g.body.flatMap((b) => (b && b.type === 'confused' && Array.isArray(b.items) ? b.items.map((c) => (c && c.alt) || '') : []))]
  const everything = [...bodyText, g.quickAnswer?.lead || '', ...(g.quickAnswer?.bullets || []), ...factsTexts(g), ...extras, g.h1 || '', g.dek || '', g.metaTitle || '', g.metaDescription || '', g.excerpt || '',
    ...(g.faqs || []).flatMap((f) => [f.question, f.answer]), ...(g.howTo ? [g.howTo.name, g.howTo.description || '', ...g.howTo.steps.flatMap((s) => [s.name, s.text])] : [])].filter((s) => typeof s === 'string')
  const bodyWords = bodyText.reduce((n, t) => n + words(t), 0)
  if (bodyWords < p.minWords) err(`body is ${bodyWords} words; this page needs at least ${p.minWords} (FAQs and the quick answer do not count)`)
  if (bodyWords > p.minWords * 2.2) warn(`body is ${bodyWords} words, more than twice the minimum; make sure it is not padded`)

  // the photo-ID formula (FORMULA_FROM at the top): scheduled pages released from Oct 20, 2026,
  // except those fact-checked under the earlier brief
  const base = file.replace(/\\/g, '/').split('/').pop().replace(/\.json$/, '')
  const checkedBy = checkedOn(base)
  const formula = god && String(p.releaseOn || '') >= FORMULA_FROM && !(checkedBy && checkedBy <= FORMULA_CHECKED_BY)

  const figures = g.body.filter((b) => b.type === 'figure').length
  const media = g.body.filter((b) => b.type === 'media').length + figures
  if (p.flags.includes('id') && media < 2) err(`this is an identification page: add at least 2 { "type": "media", "needed": "..." } placeholders where a photo or diagram would help (found ${media})`)
  if (pillar && media < 2) err('a pillar needs at least 2 media placeholders')
  if (god && p.flags.includes('id') && figures < 2) err(`this page needs at least 2 real photos ("figure" blocks); found ${figures}`)
  if (god && p.series && p.role !== 'hub' && !g.body.some((b) => b.type === 'chart' || b.type === 'map')) err('a state page needs at least one chart or map drawn from its data')
  // warnings, not errors: a photo the ledger does not have yet must not hold a page back
  if (formula && p.flags.includes('id') && !p.series && p.role !== 'hub') {
    if (figures < 3) warn(`the photo-ID formula asks for at least 3 photos, 2 of them showing the pest where people find it; found ${figures} "figure" blocks`)
    if (!g.body.some((b) => b && b.type === 'confused')) warn('the photo-ID formula adds a "confused" card row linking 2 to 6 sibling pages (data/god-build/WRITER_BRIEF_PHOTO_ID.md)')
  }

  if (visual) {
    const cards = g.body.filter((b) => b.type === 'card').length
    if (cards !== 1) err(`a visual guide needs exactly one "card" block (the printable); found ${cards}`)
    if (!h2s.some((h) => /\b(pets?|children|child|kids?)\b/i.test(h))) err('add an H2 about safety around pets and children (the heading must contain "pets" or "children")')
    if (typeof g.heroAlt !== 'string' || g.heroAlt.length < 80 || g.heroAlt.length > 420) err('"heroAlt" must describe the hero infographic in 80 to 420 characters')
    const norm = (x) => String(x).toLowerCase().replace(/[-–—]/g, ' ').replace(/\s+/g, ' ')
    if (!norm(g.h1).includes(norm(p.keyword))) err(`the h1 must contain the keyword "${p.keyword}"`)
    if (g.section !== p.section) err(`"section" must be "${p.section}"`)
  }

  // ── FAQ, how-to, disclaimer ───────────────────────────────────────────────────
  // up to 10 on any page; at least 8 under the photo-ID formula (searchers' own questions)
  const [fMin, fMax] = formula ? [8, 10] : pillar ? [6, 10] : [4, 10]
  if (!Array.isArray(g.faqs) || g.faqs.length < fMin || g.faqs.length > fMax) err(`"faqs" must have ${fMin} to ${fMax} questions${formula ? ` (photo-ID formula: scheduled pages released from ${FORMULA_FROM})` : ''}`)
  else g.faqs.forEach((f, i) => {
    if (typeof f.question !== 'string' || !f.question.trim().endsWith('?')) err(`faqs[${i}].question must be a question ending in "?"`)
    const n = words(f.answer || '')
    if (n < 35 || n > 120) err(`faqs[${i}].answer is ${n} words; it must be 35 to 120`)
    if (/\]\(|\*\*/.test(f.answer || '')) err(`faqs[${i}].answer must be plain text (no links or bold): it is used as structured data`)
  })
  // the template keys each FAQ by its question, and a repeat adds nothing for the reader
  if (Array.isArray(g.faqs) && new Set(g.faqs.map((f) => String((f && f.question) || '').trim().toLowerCase())).size !== g.faqs.length) err('two FAQs ask the same question')
  if (p.flags.includes('howto')) {
    if (!g.howTo || !Array.isArray(g.howTo.steps) || g.howTo.steps.length < 4 || g.howTo.steps.length > 10) err('this is a how-to page: "howTo" needs { name, steps[4 to 10] }')
    else g.howTo.steps.forEach((s, i) => { if (!s.name || words(s.text || '') < 12) err(`howTo.steps[${i}] needs a name and 12+ words of text`); if (/\]\(|\*\*/.test(s.text || '')) err(`howTo.steps[${i}].text must be plain text`) })
  } else if (g.howTo) warn('"howTo" is present on a page that is not flagged as a how-to; remove it unless the page really is step-by-step')
  const wantHealth = p.flags.includes('health'), wantPest = p.flags.includes('pesticide')
  const want = wantHealth && wantPest ? 'both' : wantHealth ? 'health' : wantPest ? 'pesticide' : null
  if (want && g.disclaimer !== want && g.disclaimer !== 'both') err(`"disclaimer" must be "${want}"`)

  // ── sources and links ─────────────────────────────────────────────────────────
  const [sMin, sMax] = pillar ? [5, 8] : visual ? [4, 7] : god ? [4, 20] : [3, 6]
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
    else if (s.kind === 'government') auth++ // an official government site on a non-.gov domain (e.g. a county on .org); the fact-check confirms it
    else if (!['manufacturer', 'cost-survey', 'industry', 'news'].includes(s.kind)) err(`source ${host} is not a government, university or recognised scientific/medical source. If it is an official government site on another domain, add "kind": "government"; if it is the product maker's own page or a published cost survey, add "kind": "manufacturer" or "cost-survey"; otherwise replace it.`)
  }
  if (auth < 3) err(`only ${auth} government / university / scientific sources; at least 3 are required`)

  const internal = [], external = []
  for (const t of [...bodyText, g.quickAnswer?.lead || '', ...(g.quickAnswer?.bullets || []), ...factsTexts(g)]) {
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
  // links drawn into a map count as links from the page (the hubs link every state that way), and
  // so do "confused" photo cards (the same list ./guide-links.mjs gives the release job)
  for (const b of g.body) for (const h of blockHrefs(b)) internal.push({ text: b.type === 'confused' ? String((b.items.find((c) => c && c.href === h) || {}).name || 'card') : 'map', href: h })
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
  } else if (god) {
    for (const s of p.required.mustLink) if (!uniq.has(s)) err(`must link to ${s}`)
    const nb = p.required.neighbors.filter((h) => uniq.has(h)).length
    const wantNb = Math.min(p.required.minNeighbors, p.required.neighbors.length)
    if (nb < wantNb) err(`links to ${nb} of its neighboring states' pages (${p.required.neighbors.join(', ')}); it needs at least ${wantNb}`)
    for (const s of p.required.seriesAll) if (!uniq.has(s)) err(`a hub must link to every page in its series; missing ${s}`)
    const ex = [...uniq].filter((h) => EXISTING.has(h) && h !== '/' && (h.startsWith('/blog/') || h.startsWith('/learn') || h.startsWith('/pest-product-guides')))
    if (ex.length < p.required.minExisting) err(`links to ${ex.length} pre-existing pages; it needs at least ${p.required.minExisting} real topical matches`)
    const svc = [...uniq].filter((h) => EXISTING.has(h) && !h.startsWith('/blog/') && !h.startsWith('/learn') && !h.startsWith('/pest-product-guides') && h !== '/pest-control-cost-canada' && !/-(statistics|tracker)/.test(h))
    if (svc.length) err(`do not link to service or city pages from these guides: ${svc.join(', ')}`)
  } else if (visual) {
    for (const s of p.required.mustLink) if (!uniq.has(s)) err(`must link to ${s} in the body text`)
    const svc = [...uniq].filter((h) => EXISTING.has(h) && !h.startsWith('/blog/') && !h.startsWith('/learn') && !h.startsWith('/pest-product-guides') && h !== '/pest-control-cost-canada' && !/-(statistics|tracker)/.test(h))
    if (svc.length) err(`do not link to service or city pages from these guides: ${svc.join(', ')}`)
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
  // Canadian pages (audience "ca", the province series) are written for Canadians: Canadian
  // spelling is fine, Canadian bodies and places are the point, and Celsius / metric come first.
  const CA = p.audience === 'ca'
  if (god && CA !== (g.locale === 'en-CA')) err(CA ? '"locale" must be "en-CA" on a Canadian page' : '"locale" must be left out (or "en-US") on a US page')
  const sp = CA ? [] : usSpellingProblems(joined)
  if (sp.length) err(`non-US spelling: ${sp.join(', ')}`)
  // US places that share a Canadian name are not Canadian references (Oct 15: the New York page
  // could not name Lake Ontario or Ontario County)
  const US_NAMESAKES = /\b(Lake Ontario|Ontario County|Ontario, (California|Oregon))\b/g
  const hard = CA ? null : visible.replace(US_NAMESAKES, '').match(new RegExp(CANADA_HARD.source, 'g'))
  if (hard && p.audience !== 'na') err(`Canada-specific reference: ${[...new Set(hard)].join(', ')}`)
  const canad = (visible.match(/Canad/g) || []).length
  if (canad > 2 && p.audience !== 'na' && !CA) err(`"Canada/Canadian" appears ${canad} times; these pages are for US readers (a passing range note such as "the northern US and southern Canada" is the limit)`)
  for (const t of everything) {
    const v = strip(t)
    if (CA) {
      if (/\d\s?°\s?F\b/.test(v) && !/°\s?C\b/.test(v)) err(`Fahrenheit without Celsius on a Canadian page: "${v.slice(0, 90)}…"`)
    } else {
      if (/\d\s?°\s?C\b/.test(v) && !/°\s?F\b/.test(v)) err(`Celsius without Fahrenheit: "${v.slice(0, 90)}…"`)
      if (/\b\d+(\.\d+)?\s?(mm|cm|millimeters?|centimeters?)\b/.test(v) && !/\binch(es)?\b|\bin\.\s|"/.test(v)) err(`metric size without inches: "${v.slice(0, 90)}…"`)
      if (/\b\d+(\.\d+)?\s?(km|kilometers?|kg|kilograms?|hectares?)\b/.test(v) && !/\b(miles?|pounds?|lbs?|acres?|feet|ft)\b/.test(v)) err(`metric unit without a US equivalent: "${v.slice(0, 90)}…"`)
    }
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

  // links: the same list the release job counts (./guide-links.mjs), so the two always agree
  return { errors, warnings, stats: { path: p.path, cluster: p.cluster, bodyWords, faqs: (g.faqs || []).length, sources: srcUrls.size, auth, media, links: internalLinks(g), metaTitle: g.metaTitle } }
}

// ── run ─────────────────────────────────────────────────────────────────────────
const fileFor = (name) => {
  // a path to a draft (e.g. a scratch copy): used as it is
  if (name.endsWith('.json') && existsSync(name)) return resolve(name)
  const direct = join(GUIDES, `${name}.json`), pil = join(GUIDES, `pillar-${name}.json`), later = join(SCHEDULED, `${name}.json`)
  return existsSync(direct) ? direct : existsSync(pil) ? pil : existsSync(later) ? later : direct
}
const jsonIn = (dir) => (existsSync(dir) ? readdirSync(dir).filter((f) => f.endsWith('.json')).map((f) => join(dir, f)) : [])
const files = args.includes('--scheduled') ? jsonIn(SCHEDULED) : ALL ? jsonIn(GUIDES) : names.map(fileFor)
if (!files.length) { console.error(args.includes('--scheduled') ? 'no scheduled pages in content/guides-scheduled' : 'usage: node scripts/validate-guide.mjs <slug> | --all [--report] | --scheduled'); process.exit(args.includes('--scheduled') ? 0 : 1) }

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
  // --complete covers the first batch (76 pages); the visual guides are added by --complete-visual.
  // The scheduled "god" batch is never "missing": its pages go live on their release dates
  // (scripts/release-scheduled.mjs), and until then they wait in content/guides-scheduled/.
  const wantVisual = args.includes('--complete-visual')
  const missing = plan.pages.filter((p) => !have.has(p.path) && p.batch !== 'god' && (p.batch !== 'visual' || wantVisual)).map((p) => p.path)
  // inbound links from OTHER new pages
  const inbound = Object.fromEntries(plan.pages.map((p) => [p.path, 0]))
  for (const r of built) for (const h of r.stats.links) if (h in inbound && h !== r.stats.path) inbound[h]++
  const planByPath = Object.fromEntries(plan.pages.map((p) => [p.path, p]))
  // a scheduled page needs its hub's link (pages released later add more over the weeks)
  const need = (path) => inboundNeeded(planByPath[path])
  const starved = Object.entries(inbound).filter(([path, n]) => have.has(path) && n < need(path))
  if (REPORT) {
    console.log('\npath | body words | sources (gov/edu) | FAQs | media | inbound from new pages')
    for (const r of built.sort((a, b) => a.stats.path.localeCompare(b.stats.path))) console.log(`${r.stats.path} | ${r.stats.bodyWords} | ${r.stats.sources} (${r.stats.auth}) | ${r.stats.faqs} | ${r.stats.media} | ${inbound[r.stats.path]}`)
  }
  const titles = {}
  for (const r of built) (titles[r.stats.metaTitle] ||= []).push(r.stats.path)
  const dupTitles = Object.entries(titles).filter(([, v]) => v.length > 1)
  for (const [t, v] of dupTitles) { console.log(`✗ duplicate metaTitle "${t}": ${v.join(', ')}`); bad++ }
  for (const [path, n] of starved) { console.log(`✗ ${path} has only ${n} inbound links from other new pages (needs ${need(path)})`); bad++ }
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
