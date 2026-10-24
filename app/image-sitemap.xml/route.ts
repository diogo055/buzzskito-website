// /image-sitemap.xml: the photos and diagrams on each page, for Google Images and Lens
// (owner, Oct 24, 2026: image search sent 117 clicks and Lens 34 in one week). Next.js 14 cannot
// emit image entries from app/sitemap.ts, so this is its own sitemap, listed in robots.txt.
// The page -> images map comes from lib/page-images.json (scripts/build-image-index.mjs, run
// at the start of every build). Only pages the main sitemap lists are included.
import sitemap from '../sitemap'
import pageImages from '@/lib/page-images.json'
import { SITE_URL } from '@/lib/constants'

export const dynamic = 'force-static'

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

export function GET() {
  const listed = new Set(sitemap().map((e) => e.url.replace(/\/$/, '')))
  const map = pageImages as Record<string, string[]>
  const entries = Object.keys(map)
    .map((path) => ({ loc: path === '/' ? SITE_URL : `${SITE_URL}${path}`, images: map[path].slice(0, 1000) }))
    .filter((e) => listed.has(e.loc.replace(/\/$/, '')) && e.images.length)
  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
    ...entries.map((e) =>
      `<url><loc>${esc(e.loc)}</loc>${e.images.map((src) => `<image:image><image:loc>${esc(SITE_URL + src)}</image:loc></image:image>`).join('')}</url>`),
    '</urlset>',
  ].join('\n')
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } })
}
