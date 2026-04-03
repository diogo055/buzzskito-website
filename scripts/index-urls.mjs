/**
 * BuzzSkito — Google Indexing API submission script
 *
 * Runs automatically after `npm run build` via the "postbuild" script.
 *
 * SETUP (one-time):
 * 1. Go to Google Search Console → Settings → Ownership verification → API access
 * 2. Create a Service Account in Google Cloud Console with "Indexing API" enabled
 * 3. Download the JSON key and save it as `scripts/google-service-account.json`
 *    (this file is .gitignored — never commit it)
 * 4. In Search Console, add the service account email as a "Full User" owner
 * 5. npm install google-auth-library   (run once)
 *
 * The script skips gracefully if the key file is missing so dev builds still work.
 */

import { readFileSync, existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const KEY_PATH = resolve(__dirname, 'google-service-account.json')
const SITE_URL = 'https://buzzskito.ca'

// All canonical URLs — keep in sync with app/sitemap.ts
const URLS = [
  // Core pages
  `${SITE_URL}/`,
  `${SITE_URL}/mosquito-control`,
  `${SITE_URL}/tick-control`,
  `${SITE_URL}/service-areas`,
  `${SITE_URL}/contact`,
  `${SITE_URL}/buzzskito-history`,
  `${SITE_URL}/frequently-asked-question`,
  `${SITE_URL}/blog`,

  // Mosquito city pages
  `${SITE_URL}/mosquito-control-sauga`,
  `${SITE_URL}/toronto-mosquito-control`,
  `${SITE_URL}/brampton-mosquito-control`,
  `${SITE_URL}/oakville-mosquito-control`,
  `${SITE_URL}/burlington-mosquito-spray`,
  `${SITE_URL}/hamilton-mosquito-control`,
  `${SITE_URL}/vaughan-mosquito-control`,
  `${SITE_URL}/richmond-hill-mosquito-control`,
  `${SITE_URL}/markham-mosquito-control`,
  `${SITE_URL}/etobicoke-mosquito-control`,
  `${SITE_URL}/scarborough-mosquito-control`,
  `${SITE_URL}/north-york-mosquito-control`,
  `${SITE_URL}/caledon-mosquito-control`,
  `${SITE_URL}/milton-mosquito-control`,
  `${SITE_URL}/georgetown-mosquito-control`,
  `${SITE_URL}/halton-hills-mosquito-control`,
  `${SITE_URL}/king-city-mosquito-control`,
  `${SITE_URL}/woodbridge-mosquito-control`,
  `${SITE_URL}/thornhill-mosquito-control`,

  // Tick city pages
  `${SITE_URL}/mississauga-tick-spray`,
  `${SITE_URL}/toronto-tick-spray-1`,
  `${SITE_URL}/brampton-tick-spray-1`,
  `${SITE_URL}/oakville-tick-spray-1`,
  `${SITE_URL}/burlington-tick-spray`,
  `${SITE_URL}/hamilton-tick-spray-1`,
  `${SITE_URL}/vaughan-tick-spray`,
  `${SITE_URL}/richmond-hill-tick-spray`,
  `${SITE_URL}/markham-tick-spray`,
  `${SITE_URL}/etobicoke-tick-spray`,
  `${SITE_URL}/scarborough-tick-spray`,
  `${SITE_URL}/north-york-tick-spray`,
  `${SITE_URL}/caledon-tick-spray`,
  `${SITE_URL}/milton-tick-spray`,
  `${SITE_URL}/georgetown-tick-spray`,
  `${SITE_URL}/halton-hills-tick-spray`,
  `${SITE_URL}/king-city-tick-spray`,
  `${SITE_URL}/woodbridge-tick-spray`,
  `${SITE_URL}/thornhill-tick-spray`,

  // Mosquito blogs
  `${SITE_URL}/blog/ultimate-backyard-mosquito-control-guide`,
  `${SITE_URL}/blog/mosquito-season-gta-when-does-it-start`,
  `${SITE_URL}/blog/how-long-does-mosquito-spray-last`,
  `${SITE_URL}/blog/mosquito-vs-diy-vs-professional-control`,
  `${SITE_URL}/blog/west-nile-virus-mosquito-risk-ontario`,
  `${SITE_URL}/blog/how-to-prevent-mosquitoes-in-your-backyard`,

  // Tick blogs
  `${SITE_URL}/blog/ultimate-tick-control-guide-ontario`,
  `${SITE_URL}/blog/lyme-disease-tick-prevention-ontario`,
  `${SITE_URL}/blog/what-ticks-look-like-ontario`,
  `${SITE_URL}/blog/how-to-remove-tick-safely`,
  `${SITE_URL}/blog/best-tick-control-yard-treatment`,
  `${SITE_URL}/blog/tick-season-ontario-when-are-ticks-active`,

  // City-targeting blogs
  `${SITE_URL}/blog/mosquito-control-vaughan-york-region`,
  `${SITE_URL}/blog/tick-control-richmond-hill-markham`,
  `${SITE_URL}/blog/mosquito-control-etobicoke-north-york`,
  `${SITE_URL}/blog/mosquito-season-scarborough-east-toronto`,
  `${SITE_URL}/blog/tick-prevention-caledon-halton-hills`,
  `${SITE_URL}/blog/mosquito-control-milton-georgetown`,
  `${SITE_URL}/blog/is-mosquito-spray-safe-kids-pets`,
  `${SITE_URL}/blog/how-to-choose-mosquito-control-company-gta`,
  `${SITE_URL}/blog/mosquito-control-near-water-ravines-gta`,
  `${SITE_URL}/blog/when-to-schedule-first-mosquito-treatment-ontario`,
]

async function submitUrls() {
  if (!existsSync(KEY_PATH)) {
    console.log('ℹ️  Google Indexing API: service account key not found — skipping.')
    console.log('   Add scripts/google-service-account.json to enable auto-indexing.')
    return
  }

  // Dynamically import so the script doesn't hard-fail without google-auth-library
  let GoogleAuth
  try {
    const mod = await import('google-auth-library')
    GoogleAuth = mod.GoogleAuth
  } catch {
    console.log('ℹ️  google-auth-library not installed — skipping indexing API.')
    console.log('   Run: npm install google-auth-library')
    return
  }

  const keyFile = JSON.parse(readFileSync(KEY_PATH, 'utf-8'))
  const auth = new GoogleAuth({
    credentials: keyFile,
    scopes: ['https://www.googleapis.com/auth/indexing'],
  })

  const client = await auth.getClient()
  const endpoint = 'https://indexing.googleapis.com/v3/urlNotifications:publish'

  console.log(`\n🚀 Submitting ${URLS.length} URLs to Google Indexing API...\n`)

  let success = 0
  let failed = 0

  for (const url of URLS) {
    try {
      const res = await client.request({
        url: endpoint,
        method: 'POST',
        data: { url, type: 'URL_UPDATED' },
      })
      if (res.status === 200) {
        console.log(`  ✅ ${url}`)
        success++
      } else {
        console.log(`  ⚠️  ${url} — status ${res.status}`)
        failed++
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err)
      console.log(`  ❌ ${url} — ${msg}`)
      failed++
    }

    // Respect API rate limit: 200 requests/day, pace at ~1/sec
    await new Promise((r) => setTimeout(r, 500))
  }

  console.log(`\n✅ Done — ${success} submitted, ${failed} failed.\n`)
}

submitUrls()
