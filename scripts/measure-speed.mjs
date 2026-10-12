// Speed check for one or more pages: runs Lighthouse (mobile profile: mid-range phone, slow 4G,
// the same profile PageSpeed Insights uses) several times per URL and prints the median run.
//
//   node scripts/measure-speed.mjs <label> <runs> <url> [<url> ...]
//   node scripts/measure-speed.mjs live 3 https://buzzskito.ca/blog/alaska-mosquitoes
//   THROTTLE=devtools node scripts/measure-speed.mjs ...   real (applied) throttling, not simulated
//
// Reports are saved under .lighthouse/<label>/ (git-ignored).
//
// WHY THE CHROME FLAGS MATTER (found Oct 12, 2026): on this Windows machine a headless Chrome
// window counts as hidden, and Chrome draws a hidden window about once a second. Without the
// flags below the first paint was recorded 1 to 2 seconds late and Lighthouse reported an LCP
// of 9 seconds for pages whose real figure is 3. If a result looks absurd, check the
// "observed" first paint in the saved report before believing it.
//
// Google's PageSpeed Insights API without a key answers "quota exceeded", so this is the tool.
import { execFileSync } from 'child_process'
import { readFileSync, mkdirSync } from 'fs'
import { join } from 'path'

const [label, runsArg, ...urls] = process.argv.slice(2)
if (!label || !urls.length) { console.error('usage: node scripts/measure-speed.mjs <label> <runs> <url> [<url> ...]'); process.exit(1) }
const RUNS = Number(runsArg) || 3
const THROTTLE = process.env.THROTTLE === 'devtools' ? 'devtools' : 'simulate'
const outDir = join('.lighthouse', label)
mkdirSync(outDir, { recursive: true })
const FLAGS = '--headless=new --no-first-run --disable-backgrounding-occluded-windows --disable-renderer-backgrounding --disable-background-timer-throttling --disable-features=CalculateNativeWinOcclusion'
const ms = (v) => (v == null ? '-' : `${Math.round(v)}ms`)
const median = (a) => [...a].sort((x, y) => x - y)[Math.floor(a.length / 2)]

for (const url of urls) {
  const slug = new URL(url).pathname.replace(/\W+/g, '_')
  const reports = []
  for (let i = 1; i <= RUNS; i++) {
    const out = join(outDir, `${slug}_${i}.json`)
    try {
      execFileSync('npx', ['-y', 'lighthouse@12', url, '--only-categories=performance', `--throttling-method=${THROTTLE}`, '--output=json', `--output-path=${out}`, '--quiet', `--chrome-flags="${FLAGS}"`], { stdio: ['ignore', 'ignore', 'pipe'], shell: true, timeout: 300000 })
      reports.push(JSON.parse(readFileSync(out, 'utf8')))
    } catch (e) { console.log(`${url} run ${i} failed: ${String(e.stderr || e.message).slice(0, 200)}`) }
  }
  if (!reports.length) continue
  const m = (r) => r.audits.metrics.details.items[0]
  const lcps = reports.map((r) => m(r).largestContentfulPaint)
  const mid = reports[lcps.indexOf(median(lcps))]
  const x = m(mid)
  console.log(`\n${url}  (${THROTTLE === 'devtools' ? 'real' : 'simulated'} throttling, median of ${reports.length}; LCP per run: ${lcps.map(ms).join(', ')})`)
  console.log(`   score ${Math.round(mid.categories.performance.score * 100)} | LCP ${ms(x.largestContentfulPaint)} | FCP ${ms(x.firstContentfulPaint)} | blocking time ${ms(x.totalBlockingTime)} | CLS ${(x.cumulativeLayoutShift ?? 0).toFixed(3)}`)
  console.log(`   observed without throttling: first paint ${ms(x.observedFirstContentfulPaint)}, LCP ${ms(x.observedLargestContentfulPaint)}${x.observedFirstContentfulPaint > 800 && THROTTLE === 'simulate' ? '   <-- suspiciously late: see the note at the top of this script' : ''}`)
  const el = mid.audits['largest-contentful-paint-element']
  const node = el && el.details && el.details.items[0] && el.details.items[0].items[0] && el.details.items[0].items[0].node
  if (node) console.log(`   LCP element: ${(node.snippet || '').slice(0, 160)}`)
  const third = mid.audits['third-party-summary']
  if (third && third.details) console.log(`   third-party blocking: ${third.details.items.slice(0, 5).map((it) => `${it.entity} ${ms(it.blockingTime)}`).join(' ; ')}`)
}
