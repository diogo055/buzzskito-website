import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/constants'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Allow all standard crawlers.
      // /_next/ is NOT blocked (changed Oct 11, 2026). It holds every page's CSS and JavaScript
      // and the address of almost every image on the site (/_next/image?url=...). While it was
      // blocked, Google and Bing rendered every page unstyled and could not index the images,
      // and Pinterest's crawler could not fetch them either. Google's own guidance is to never
      // block the files a page needs to render. Nothing private lives under /_next/.
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      // ── AI Search Bots — explicitly allow for citation opportunities ──
      // ChatGPT real-time search (NOT training — we want to appear in answers)
      {
        userAgent: 'OAI-SearchBot',
        allow: '/',
      },
      // ChatGPT user-requested browsing
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
      },
      // Perplexity AI search
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      // Claude AI search
      {
        userAgent: 'ClaudeBot',
        allow: '/',
      },
      // Google AI (Gemini)
      {
        userAgent: 'Google-Extended',
        allow: '/',
      },
      // Apple Intelligence / Siri (citation-capable)
      {
        userAgent: 'Applebot-Extended',
        allow: '/',
      },
      // Training bots — ALLOWED as of Jul 16 2026 (owner decision): presence in
      // ChatGPT/Common Crawl training corpora compounds answer-engine citations;
      // scraping trade-off accepted. (mosquitojoe.com allowlists every AI bot.)
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        userAgent: 'CCBot',
        allow: '/',
      },
    ],
    // image-sitemap.xml lists each page's photos and diagrams for Google Images and Lens (Oct 24, 2026).
    sitemap: [`${SITE_URL}/sitemap.xml`, `${SITE_URL}/image-sitemap.xml`],
    host: SITE_URL,
  }
}
