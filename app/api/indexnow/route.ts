import { NextResponse } from 'next/server'
import sitemap from '@/app/sitemap'

const INDEXNOW_KEY = '855fb831a76f01df649d905dd72478b0'
const HOST = 'buzzskito.ca'

// Runs once per build (the GET is prerendered), so it sends what changed in that deploy.
// Since Nov 3, 2026 it sends only sitemap pages whose date moved in the last WINDOW_DAYS, and only
// from Vercel's production build. Before, it sent every page folder (about 800 addresses, noindex
// pages included) on every build, local test builds too: 15,300 notices in one day, against
// IndexNow's own advice to send only added or changed pages. A sitemap date moves only on a real
// content change ("A lastmod must be a true date" in CLAUDE.md), so this is the changed list.
const WINDOW_DAYS = 2

export async function GET() {
  try {
    const since = Date.now() - WINDOW_DAYS * 864e5
    const urls = sitemap()
      .filter((e) => e.lastModified && new Date(e.lastModified).getTime() >= since)
      .map((e) => e.url)

    const production = process.env.VERCEL_ENV === 'production'
    if (!production || !urls.length) {
      return NextResponse.json({
        submitted: 0,
        changed: urls.length,
        reason: production ? `no page changed in the last ${WINDOW_DAYS} days` : 'not a Vercel production build',
        urls: urls.slice(0, 20),
      })
    }

    // Submit to multiple IndexNow endpoints
    const payload = JSON.stringify({
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
      urlList: urls.slice(0, 10000),
    })

    const endpoints = [
      'https://yandex.com/indexnow',
      'https://search.seznam.cz/indexnow',
      'https://www.bing.com/indexnow',
    ]

    const results = await Promise.allSettled(
      endpoints.map(async (ep) => {
        const r = await fetch(ep, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: payload })
        // a refusal's reason is in the body (Bing's errorCode), not in the status text
        return { endpoint: ep, status: r.status, statusText: r.statusText, ...(!r.ok && { body: (await r.text()).slice(0, 300) }) }
      })
    )

    return NextResponse.json({
      submitted: urls.length,
      results: results.map(r => r.status === 'fulfilled' ? r.value : { error: 'failed' }),
      urls: urls.slice(0, 20),
    })
  } catch (error) {
    console.error('IndexNow error:', error)
    return NextResponse.json({ error: 'Failed to submit' }, { status: 500 })
  }
}
