// Builds lib/article-index.json: every article on the site (everything under /blog and /learn
// that shows display ads) with its title, a one-line hook, its topic cluster and an image if
// it has one. components/ReadNext.tsx reads it to show three same-cluster "Keep reading" cards
// at the end of each article.
//
//   node scripts/build-article-index.mjs        (also run by scripts/us-pages-register.mjs)
//
// Why a generated file: ReadNext is rendered on the server, so none of this reaches the
// reader's browser, and the choice of cards is fixed at build time.
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'fs'
import { join } from 'path'

const ROOT = process.cwd()
const routes = JSON.parse(readFileSync(join(ROOT, 'lib', 'ad-routes.json'), 'utf8'))
const AD_FREE = new Set(routes.adFree)
const constants = readFileSync(join(ROOT, 'lib', 'constants.ts'), 'utf8')

// registered title + excerpt for blog posts: { slug: "...", title: "...", excerpt: "..." }
const reg = {}
for (const m of constants.matchAll(/slug:\s*(['"])([^'"]+)\1\s*,\s*title:\s*(['"`])((?:\\.|(?!\3).)*)\3\s*,\s*excerpt:\s*(['"`])((?:\\.|(?!\5).)*)\5/g)) {
  const un = (s) => s.replace(/\\u([0-9a-fA-F]{4})/g, (_, h) => String.fromCharCode(parseInt(h, 16))).replace(/\\(['"`\\])/g, '$1')
  reg[m[2]] = { title: un(m[4]), hook: un(m[6]) }
}

const CLUSTERS = [
  ['bed-bugs', /bed-bug|punaises|zappbug|packtite|thermalstrike|cimexa|crossfire|encasement|dupray|mcculloch|vapamore|ecoraider|harris-bed|knock-down|konk|sleep-tight|steamer-vs-heater/],
  ['ticks', /(^|-)ticks?(-|$)|lyme|alpha-gal/], // whole word: "stickers" is not a tick
  ['mice', /(^|-)(mice|mouse|rodent|rats?|voles?)(-|$)|goodnature|squirrel/],
  ['ants', /(^|-)ants?(-|$)|termite/],
  ['cockroaches', /roach/],
  ['garden', /whitefl|aphid|fungus-gnat|weed-control|garden-pest|june-bug|cedars|deer-fence/],
  ['wasps', /wasp|hornet|yellow-jacket|carpenter-bee|why-trap/],
  ['flies', /(^|-)(fly|flies|gnats?)(-|$)|no-see-um|midge|chigger|black-flies/],
  ['moisture', /dehumidifier|sump-pump|crawl-space|vapour-barrier/],
  ['equipment', /fogger|sprayer|misting|steam-cleaner|steam-mop|pest-control-equipment|brush-cutter|leaf-blower/],
  ['wildlife', /raccoon|skunk|live-animal|deer-|sprinkler/],
  ['mosquitoes', /mosquito|deet|picaridin|citronella|thermacell|west-nile|dynatrap|bug-zapper|flowtron|permethrin|bug-spray|repellent|gazebo|screen|patio|pergola|fire-pit|outdoor-fan|bug-protective|katchy|rain-barrel|pond-aerator|gutter-guard|standing-water|green-pool/],
  ['crawlers', /silverfish|centipede|earwig|spider|stink-bug|boxelder|carpet-beetle|pantry-moth|flea|dust-mite/],
  ['pest-control', /pest-control|ultrasonic|diatomaceous|ortho-home|wondercide|doktor-doom|natural|diy/],
]
// a cluster too small to fill three cards borrows from its nearest relative
const FALLBACK = { cockroaches: 'crawlers', crawlers: 'cockroaches', wasps: 'flies', flies: 'mosquitoes', garden: 'pest-control', 'pest-control': 'mice', wildlife: 'mice', moisture: 'equipment', equipment: 'mosquitoes', ants: 'cockroaches', general: 'mosquitoes' }
const clusterOf = (slug) => (CLUSTERS.find(([, re]) => re.test(slug)) || ['general'])[0]

const strConst = (src, name) => {
  const m = src.match(new RegExp(`const ${name}\\s*=\\s*(['"\`])((?:\\\\.|(?!\\1).)*)\\1`))
  return m ? m[2].replace(/\\(['"`])/g, '$1') : ''
}
const firstImage = (src) => {
  const m = src.match(/<Figure[\s\S]{0,80}?src="(\/[^"]+\.(?:png|jpe?g|webp|svg))"/) || src.match(/<Image[\s\S]{0,80}?src="(\/[^"]+\.(?:png|jpe?g|webp))"/)
  return m && existsSync(join(ROOT, 'public', m[1].slice(1))) ? m[1] : null
}
const ENT = { amp: '&', rsquo: '’', lsquo: '‘', rdquo: '”', ldquo: '“', mdash: '—', ndash: '–', nbsp: ' ', quot: '"', apos: "'", hellip: '…', deg: '°', eacute: 'é', times: '×', middot: '·', rarr: '→' }
// "Yard &amp; Family" -> "Yard & Family": these strings are printed as text, not as HTML
const decode = (s) => String(s || '').replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n))).replace(/&([a-z]+);/gi, (m, n) => (n.toLowerCase() in ENT ? ENT[n.toLowerCase()] : m))
const clip = (s, n) => { const t = String(s || '').replace(/\s+/g, ' ').trim(); if (t.length <= n) return t; const cut = t.slice(0, n); return `${cut.slice(0, cut.lastIndexOf(' '))}…` }

const heroes = existsSync(join(ROOT, 'lib', 'us-guide-heroes.json')) ? JSON.parse(readFileSync(join(ROOT, 'lib', 'us-guide-heroes.json'), 'utf8')) : {}
const guideByPath = {}
const GD = join(ROOT, 'content', 'guides')
if (existsSync(GD)) for (const f of readdirSync(GD).filter((x) => x.endsWith('.json'))) {
  try { const g = JSON.parse(readFileSync(join(GD, f), 'utf8')); guideByPath[`/${g.section || (g.kind === 'pillar' ? 'learn' : 'blog')}/${g.slug}`] = g } catch { /* a draft mid-write */ }
}

const out = []
for (const section of ['blog', 'learn']) {
  const dir = join(ROOT, 'app', section)
  for (const d of readdirSync(dir, { withFileTypes: true })) {
    if (!d.isDirectory()) continue
    const file = join(dir, d.name, 'page.tsx')
    if (!existsSync(file)) continue
    const path = `/${section}/${d.name}`
    if (AD_FREE.has(path)) continue // local service and pricing posts: lead pages, not part of the reading loop
    const src = readFileSync(file, 'utf8')
    const g = guideByPath[path]
    const r = reg[d.name] || {}
    const title = g ? g.h1 : r.title || strConst(src, 'TITLE') || strConst(src, 'META_TITLE')
    const metaDesc = (src.match(/description:\s*\n?\s*(['"`])((?:\\.|(?!\1).)*)\1/) || [])[2] || ''
    const hook = g ? g.excerpt : r.hook || metaDesc.replace(/\\(['"`])/g, '$1')
    if (!title) continue
    const fullTitle = decode(title)
    // `title` is clipped for the "Keep reading" cards; `full` is the whole title, for the in-content "Next" headline
    out.push({ path, title: clip(fullTitle, 90), full: fullTitle.replace(/\s+/g, ' ').trim(), hook: clip(decode(hook), 120), cluster: g ? g.cluster : clusterOf(d.name), image: (heroes[path] && heroes[path].src) || (g ? null : firstImage(src)) })
  }
}
out.sort((a, b) => a.path.localeCompare(b.path))
writeFileSync(join(ROOT, 'lib', 'article-index.json'), JSON.stringify({ fallback: FALLBACK, articles: out }, null, 0))
const counts = {}
for (const a of out) counts[a.cluster] = (counts[a.cluster] || 0) + 1
console.log(`article index: ${out.length} articles | ${Object.entries(counts).sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k} ${v}`).join(', ')} | with image: ${out.filter((a) => a.image).length}`)
