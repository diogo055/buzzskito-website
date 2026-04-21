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
      // Microsoft Copilot
      {
        userAgent: 'Applebot-Extended',
        allow: '/',
      },
      // Block pure training bots (scraping for model training, no citation benefit)
      {
        userAgent: 'GPTBot',
        disallow: '/',
      },
      {
        userAgent: 'CCBot',
        disallow: '/',
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
