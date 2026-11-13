// check:hero-video (Nov 13, 2026) — the hero video may never cost page speed or show up for Google.
// Fails the build when, in any prerendered page:
//   - a hero <video data-hero-video> carries autoplay, poster or src, or has a <source> in the server HTML
//     (any of these makes the browser fetch the video during page load, and autoplay makes Low Power Mode
//     iPhones draw a play button over the hero);
//   - a crew clip <video> inside [data-crew-video] carries a <source> or src in the server HTML;
//   - a page with a hero video has no hero still (img[data-hero-still]) with fetchpriority="high";
//   - a page carries VideoObject structured data (decorative clips must not claim to be the page's content).
// Rules and research: reports/Hero video for service pages.md; switches: lib/hero-video.ts.
import { readdirSync, readFileSync, statSync } from 'fs'
import { join } from 'path'

const ROOT = join(process.cwd(), '.next', 'server', 'app')
const files = []
const walk = (d) => {
  for (const n of readdirSync(d)) {
    const p = join(d, n)
    const s = statSync(p)
    if (s.isDirectory()) walk(p)
    else if (n.endsWith('.html')) files.push(p)
  }
}
walk(ROOT)

const errors = []
let heroPages = 0
let crewClips = 0
for (const f of files) {
  const html = readFileSync(f, 'utf8')
  const page = f.slice(ROOT.length).replace(/\\/g, '/').replace(/\.html$/, '') || '/'

  // Hero videos
  const heroTags = html.match(/<video[^>]*data-hero-video=[^>]*>[\s\S]*?<\/video>/g) || []
  if (heroTags.length) heroPages++
  for (const tag of heroTags) {
    const open = tag.match(/<video[^>]*>/)[0]
    if (/\sautoplay(=|\s|>)/i.test(open)) errors.push(`${page}: hero video has autoplay`)
    if (/\sposter=/i.test(open)) errors.push(`${page}: hero video has a poster attribute`)
    if (/\ssrc=/i.test(open)) errors.push(`${page}: hero video has a src attribute`)
    if (/<source/i.test(tag)) errors.push(`${page}: hero video has <source> in the server HTML`)
  }
  if (heroTags.length && !/<img[^>]*data-hero-still[^>]*>/.test(html)) errors.push(`${page}: hero video without a hero still`)
  if (heroTags.length) {
    const still = (html.match(/<img[^>]*data-hero-still[^>]*>/) || [''])[0]
    if (still && !/fetchpriority="high"/i.test(still)) errors.push(`${page}: hero still is not fetchpriority="high"`)
  }

  // Crew clips: the <video> right after a data-crew-video box
  const crew = html.match(/data-crew-video="[^"]+"[\s\S]*?<\/video>/g) || []
  crewClips += crew.length
  for (const block of crew) {
    const vid = block.slice(block.lastIndexOf('<video'))
    if (/<source/i.test(vid) || /<video[^>]*\ssrc=/i.test(vid)) errors.push(`${page}: crew clip has a source in the server HTML`)
  }

  if (/"@type"\s*:\s*"VideoObject"/.test(html)) errors.push(`${page}: VideoObject structured data`)
}

if (errors.length) {
  console.error(`check:hero-video FAILED (${errors.length}):\n  ` + errors.slice(0, 40).join('\n  '))
  process.exit(1)
}
console.log(`✓ check:hero-video passed: ${files.length} pages, hero video on ${heroPages}, ${crewClips} crew clip(s); no video loads with the page, no VideoObject markup.`)
