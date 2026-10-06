// Build guard: Mediavine display ads show on allow-listed pages ONLY.
//
// The owner's rule is "ads on informational pages, never on service pages". The
// runtime enforces it with an allow-list (lib/ad-routes.json -> lib/ads.ts). This
// script re-checks the result where it actually matters, in the prerendered HTML,
// and fails the build (and so the deploy) unless every page is in exactly one of
// three states:
//
//   AD PAGE       the Mediavine script, once, in <head>, and NO "ads off" setting
//   HOMEPAGE      the Mediavine script AND Mediavine's "ads off" setting
//                 (Mediavine checks for its script at the domain root)
//   EVERY OTHER   no Mediavine script at all, plus the "ads off" setting as a
//                 second lock
//
// It also refuses an allow-list that names anything shaped like a service page.
// That check is deliberately independent of the allow-list: it is a second
// opinion written as patterns, so a bad edit to the JSON cannot approve itself.
//
//   node scripts/check-ads.mjs        (run after `next build`; wired into `npm run build`)
import { readFileSync, readdirSync, existsSync, statSync } from 'fs'
import { join, relative, sep } from 'path'

const ROOT = process.cwd()
const APP_OUT = join(ROOT, '.next', 'server', 'app')
const routes = JSON.parse(readFileSync(join(ROOT, 'lib', 'ad-routes.json'), 'utf8'))
const ads = readFileSync(join(ROOT, 'lib', 'ads.ts'), 'utf8')

const fail = (msg) => { console.error(`✗ check:ads: ${msg}`); process.exit(1) }
if (!existsSync(APP_OUT)) fail('no build output found under .next/server/app. Run the build first.')

const TAG_HOST = 'scripts.mediavine.com'
const tagSrc = (ads.match(/MEDIAVINE_TAG_SRC\s*=\s*'([^']+)'/) || [])[1]
if (!tagSrc || !tagSrc.includes(`${TAG_HOST}/tags/`)) fail('could not read MEDIAVINE_TAG_SRC from lib/ads.ts')
const enabled = /ADS_ENABLED\s*=\s*true/.test(ads)

// ── the allow-list, mirrored from lib/ads.ts (keep the two in step) ─────────────
const SECTIONS = routes.sections, PAGES = new Set(routes.pages), AD_FREE = new Set(routes.adFree)
const SCRIPT_ONLY = new Set(routes.scriptOnly)
const isAdPath = (path) =>
  enabled && !AD_FREE.has(path) && (PAGES.has(path) || SECTIONS.some((s) => path === s || path.startsWith(`${s}/`)))

// ── second opinion: what a service / lead page looks like, as patterns ──────────
const SERVICE_PATTERNS = [
  /^[/]$/,                                                  // homepage
  /^[/][^/]+-(mosquito|tick)-(control|spray)$/,             // root-level city, neighbourhood and vertical pages
  /^[/](mosquito|tick)-control(-|$)/,                       // service hubs, pricing, cost, near-me, ontario
  /^[/]pest-control-(?!cost-canada$)/,                      // local "pest control <city>" pages
  /^[/]best-mosquito-control-companies-/,
  /^[/]buzzskito-/,                                         // brand pages: comparisons, history, the GTA report
  /^[/](contact|free-yard-assessment|reviews|how-it-works|service-areas|frequently-asked-question|terms|privacy-policy)$/,
  /^[/](yard-risk-report|am-i-a-mosquito-magnet|lyme-disease-risk-calculator|gta-mosquito-pressure-map)$/, // lead tools
  /^[/]mosquito-spray-safety$/,
]
const looksLikeService = (path) => SERVICE_PATTERNS.some((re) => re.test(path))

const problems = []
for (const p of [...routes.sections, ...routes.pages]) {
  if (!p.startsWith('/') || p.endsWith('/')) problems.push(`allow-list entry "${p}" must start with "/" and have no trailing slash`)
  if (looksLikeService(p)) problems.push(`allow-list entry "${p}" matches a service-page pattern. Service pages never show ads.`)
}
for (const p of routes.adFree) {
  if (!SECTIONS.some((s) => p.startsWith(`${s}/`))) problems.push(`adFree entry "${p}" is not under an ad section, so it is already ad-free: remove it or fix the path`)
}
for (const p of routes.scriptOnly) {
  if (p !== '/') problems.push(`scriptOnly may contain only "/" (the homepage). "${p}" would put the Mediavine script on another service page.`)
}

// The floating yard-risk card (components/StickyRiskCTA.tsx) is pinned bottom-right, exactly
// where Mediavine pins its ad and video. Mediavine does not allow a site element over its ad,
// so no page that shows the card may be an ad page. The card never shows under /blog/.
const riskCard = readFileSync(join(ROOT, 'components', 'StickyRiskCTA.tsx'), 'utf8')
const showOn = ((riskCard.match(/SHOW_ON_PATHS\s*=\s*\[([^\]]*)\]/) || [])[1] || '').match(/'[^']+'/g) || []
const riskCardPaths = showOn.map((s) => s.slice(1, -1))
if (!riskCardPaths.length) problems.push('could not read SHOW_ON_PATHS from components/StickyRiskCTA.tsx (the ad / yard-risk-card overlap check needs it)')
const showsRiskCard = (path) => !path.startsWith('/blog/') && riskCardPaths.some((p) => path.includes(p))

// ── walk the prerendered HTML ───────────────────────────────────────────────────
const htmlFiles = []
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name)
    if (statSync(full).isDirectory()) walk(full)
    else if (name.endsWith('.html')) htmlFiles.push(full)
  }
}
walk(APP_OUT)

const routeOf = (file) => {
  const rel = relative(APP_OUT, file).split(sep).join('/').replace(/[.]html$/, '')
  return rel === 'index' ? '/' : `/${rel.replace(/[/]index$/, '')}`
}

// Mediavine's per-page "no ads" setting: <div id="mediavine-settings" data-blocklist-all="1">
const hasAdsOffSetting = (html) => {
  const el = (html.match(/<div[^>]*id="mediavine-settings"[^>]*>/) || [])[0]
  return !!el && el.includes('data-blocklist-all="1"')
}

const checkTag = (route, html, tags) => {
  if (tags.length !== 1) { problems.push(`${route}: expected exactly 1 Mediavine script, found ${tags.length}`); return }
  const tag = tags[0]
  if (!tag.includes(tagSrc)) problems.push(`${route}: script src is not ${tagSrc}`)
  for (const attr of ['async', 'data-noptimize="1"', 'data-cfasync="false"']) {
    if (!tag.includes(attr)) problems.push(`${route}: script is missing ${attr} (Mediavine issues the tag with it)`)
  }
  const headEnd = html.indexOf('</head>')
  if (headEnd < 0 || html.indexOf(tag) > headEnd) problems.push(`${route}: Mediavine script is not inside <head>`)
}

let adPages = 0, homepage = 0, adFree = 0
const seen = new Set()
for (const file of htmlFiles) {
  const route = routeOf(file)
  seen.add(route)
  const html = readFileSync(file, 'utf8')
  const tags = html.match(/<script[^>]*scripts[.]mediavine[.]com[^>]*>/g) || []
  const adsOff = hasAdsOffSetting(html)
  const notFound = route === '/_not-found' || route === '/404'

  if (!notFound && isAdPath(route)) {
    // AD PAGE
    if (looksLikeService(route)) problems.push(`${route}: allow-listed but matches a service-page pattern`)
    if (showsRiskCard(route)) problems.push(`${route}: is an ad page but also shows the floating yard-risk card, which would cover Mediavine's bottom ad. Take it off one list or the other.`)
    checkTag(route, html, tags)
    if (adsOff) problems.push(`${route}: an ad page carries the "ads off" setting, so it would never show an ad`)
    adPages++
  } else if (enabled && !notFound && SCRIPT_ONLY.has(route)) {
    // HOMEPAGE: script present for Mediavine's install check, every ad switched off
    checkTag(route, html, tags)
    if (!adsOff) problems.push(`${route}: carries the Mediavine script WITHOUT the "ads off" setting. This page must never show an ad.`)
    homepage++
  } else {
    // EVERY OTHER PAGE: the ad host must not appear in the markup at all, not even as a
    // preload hint. (Page copy that merely mentions Mediavine by name is fine.)
    if (tags.length || /<link[^>]*scripts[.]mediavine[.]com/.test(html)) {
      problems.push(`${route}: carries the Mediavine script but is NOT allow-listed${looksLikeService(route) ? ' (and it is a SERVICE page)' : ''}`)
    }
    if (!adsOff) problems.push(`${route}: missing the "ads off" setting (second lock on ad-free pages)`)
    adFree++
  }
}

// every explicitly listed page must exist as a built page
for (const p of [...routes.pages, ...routes.adFree, ...routes.scriptOnly]) {
  if (!seen.has(p)) problems.push(`"${p}" is listed in lib/ad-routes.json but was not built. Stale entry?`)
}

if (problems.length) {
  console.error(`✗ check:ads failed: ${problems.length} problem(s)`)
  for (const p of problems.slice(0, 40)) console.error(`   - ${p}`)
  if (problems.length > 40) console.error(`   … and ${problems.length - 40} more`)
  process.exit(1)
}
console.log(
  `✓ check:ads passed: ${htmlFiles.length} prerendered pages. Ads on ${adPages} allow-listed pages; ` +
  `homepage carries the script with ads switched off (${homepage}); ${adFree} other pages have no Mediavine script at all` +
  `${enabled ? '' : '. ADS_ENABLED is false, so the script is off everywhere'}.`,
)
