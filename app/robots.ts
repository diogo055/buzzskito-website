import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/constants'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Allow all standard crawlers
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
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
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
