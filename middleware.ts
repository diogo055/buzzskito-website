import { NextResponse, type NextRequest } from 'next/server'

// Bot block (Oct 19, 2026). Google Analytics showed ~20% of all sessions coming from Singapore and
// China at 2-4 seconds each: automated traffic, not readers (Canada averages 152 s, the US 93 s). Ad
// networks count such visits as invalid traffic, so they are turned away at the edge before Mediavine
// ads go live. Anything that openly says it is a crawler or a link preview still passes, whatever its
// country: Google's ad systems discount declared crawlers by themselves. The visits that hurt an ad
// account are the undeclared ones, headless browsers posing as people.
const BLOCKED_COUNTRIES = new Set(['SG', 'CN'])
const DECLARED_CRAWLER = /bot|crawl|spider|slurp|google|bing|yandex|baidu|duckduck|facebookexternalhit|facebookcatalog|meta-externalagent|pinterest|mediavine|grapeshot|proximic|admantx|integralads|doubleverify|lighthouse|whatsapp|preview/i

export function middleware(request: NextRequest) {
  const country = request.headers.get('x-vercel-ip-country') || ''
  if (BLOCKED_COUNTRIES.has(country) && !DECLARED_CRAWLER.test(request.headers.get('user-agent') || '')) {
    return new NextResponse('Not available', { status: 403, headers: { 'cache-control': 'private, no-store' } })
  }
  return NextResponse.next()
}

// Pages only: never static files, images, the API, robots, sitemaps or ads.txt. Link prefetches are
// skipped too (only a page that already loaded can send one), which keeps the run count low.
export const config = {
  matcher: [
    {
      source: '/((?!_next/|api/|guides/|diagrams/|favicon|robots.txt|sitemap|ads.txt|llms.txt|.*\\.(?:png|jpe?g|webp|avif|gif|svg|ico|xml|txt|js|css|json|woff2?|pdf|mp4|webm|webmanifest)$).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
}
