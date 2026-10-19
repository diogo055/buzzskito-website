import { NextResponse, type NextRequest } from 'next/server'

// Bot block (Oct 19, 2026). Google Analytics showed ~20% of all sessions coming from Singapore and
// China at 2-4 seconds each: automated traffic, not readers (Canada averages 152 s, the US 93 s). Ad
// networks count such visits as invalid traffic, so they are turned away at the edge before Mediavine
// ads go live. Search-engine and ad-network crawlers are always let through, whatever their country.
const BLOCKED_COUNTRIES = new Set(['SG', 'CN'])
const ALLOWED_CRAWLERS = /googlebot|google-inspectiontool|googleother|adsbot-google|mediapartners-google|storebot-google|bingbot|bingpreview|duckduckbot|applebot|yandex|baiduspider|slurp|facebookexternalhit|pinterest|mediavine/i

export function middleware(request: NextRequest) {
  const country = request.headers.get('x-vercel-ip-country') || ''
  if (BLOCKED_COUNTRIES.has(country) && !ALLOWED_CRAWLERS.test(request.headers.get('user-agent') || '')) {
    return new NextResponse('Not available', { status: 403 })
  }
  return NextResponse.next()
}

// pages only: never static files, images, the API, robots, sitemaps or ads.txt
export const config = {
  matcher: ['/((?!_next/|api/|guides/photos/|images/|favicon|robots.txt|sitemap|ads.txt|llms.txt|.*\\.(?:png|jpg|jpeg|webp|svg|ico|xml|txt|js|css)$).*)'],
}
