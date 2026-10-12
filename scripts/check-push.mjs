// Build check for browser notifications (lib/push.ts, components/PushPrompt.tsx).
// Reads the built site, so it describes what a visitor is actually served.
//
//   - OneSignal's script is never in a page's HTML. It is loaded only after a reader allows
//     notifications, so a <script> for it in the build means someone made it load for everyone.
//   - The prompt is on articles only: pages that end with the "Keep reading" block. Never on a
//     service, city, pricing or quote page, a product hub, or a local post that keeps its quote CTA.
//   - With no app ID set (the state until the owner adds NEXT_PUBLIC_ONESIGNAL_APP_ID), the
//     prompt is on no page at all.
//   - The service worker file is exactly OneSignal's one line, at the site root.
//   - The privacy policy describes notifications exactly when they are on.
import { readFileSync, readdirSync, statSync, existsSync } from 'fs'
import { join } from 'path'

const APP = join('.next', 'server', 'app')
if (!existsSync(APP)) { console.error('✗ check:push: no build output under .next. Run the build first.'); process.exit(1) }

const problems = []
const WORKER = 'importScripts("https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js");'
const worker = existsSync(join('public', 'OneSignalSDKWorker.js')) ? readFileSync(join('public', 'OneSignalSDKWorker.js'), 'utf8').trim() : null
if (worker !== WORKER) problems.push('public/OneSignalSDKWorker.js must contain exactly OneSignal\'s one importScripts line')

const files = []
const walk = (dir, rel) => { for (const n of readdirSync(dir)) { const f = join(dir, n); if (statSync(f).isDirectory()) walk(f, `${rel}${n}/`); else if (n.endsWith('.html')) files.push(`${rel}${n}`) } }
walk(APP, '')

let withPrompt = 0, articles = 0
const wrong = []
for (const rel of files) {
  const path = '/' + rel.replace(/\.html$/, '').replace(/(^|\/)index$/, '').replace(/\/$/, '')
  const html = readFileSync(join(APP, rel), 'utf8')
  if (/<script[^>]+src="[^"]*onesignal[^"]*"/i.test(html)) problems.push(`${path}: OneSignal's script is in the page HTML. It must load only after a reader allows notifications`)
  const isArticle = /^\/(blog|learn)\/[^/]+$/.test(path) && html.includes('data-read-next')
  if (isArticle) articles++
  if (html.includes('data-push-prompt')) {
    withPrompt++
    if (!isArticle) wrong.push(path)
  }
}
if (wrong.length) problems.push(`the notification prompt is on ${wrong.length} page(s) that are not articles: ${wrong.slice(0, 8).join(' ')}`)
if (withPrompt && withPrompt !== articles) problems.push(`the notification prompt is on ${withPrompt} articles but ${articles} articles end with "Keep reading"; it should be all of them or none`)

const privacy = existsSync(join(APP, 'privacy-policy.html')) ? readFileSync(join(APP, 'privacy-policy.html'), 'utf8') : ''
const described = privacy.includes('Browser Notifications')
if (withPrompt && !described) problems.push('notifications are on but the privacy policy does not describe them')
if (!withPrompt && described) problems.push('the privacy policy describes notifications but they are off')

if (problems.length) {
  console.error(`✗ check:push FAILED: ${problems.length} problem(s)`)
  for (const p of problems) console.error(`   - ${p}`)
  process.exit(1)
}
console.log(`✓ check:push passed: ${files.length} pages. ${withPrompt ? `Notification prompt on ${withPrompt} articles and on nothing else; privacy policy describes it.` : 'Notifications are OFF (no OneSignal app ID set): no prompt on any page.'} OneSignal's script is in no page's HTML.`)
