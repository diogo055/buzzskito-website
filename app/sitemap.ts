import type { MetadataRoute } from 'next'
import { SITE_URL, CITIES, MOSQUITO_BLOGS, TICK_BLOGS, NEW_BLOGS } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString()

  // ── Core pages ──────────────────────────────────────────────────────────────
  const core: MetadataRoute.Sitemap = [
    { url: SITE_URL,                                    lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${SITE_URL}/mosquito-control`,              lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/tick-control`,                  lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/service-areas`,                 lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/contact`,                       lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/buzzskito-history`,             lastModified: now, changeFrequency: 'yearly',  priority: 0.6 },
    { url: `${SITE_URL}/frequently-asked-question`,     lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/blog`,                          lastModified: now, changeFrequency: 'weekly',  priority: 0.8 },
  ]

  // ── All city pages — generated from CITIES array ────────────────────────────
  const cityPages: MetadataRoute.Sitemap = CITIES.flatMap((city) => [
    {
      url: `${SITE_URL}${city.mosquitoSlug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${SITE_URL}${city.tickSlug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
  ])

  // ── Mosquito blog hub & spokes ──────────────────────────────────────────────
  const mosquitoBlogs: MetadataRoute.Sitemap = [
    MOSQUITO_BLOGS.pillar,
    ...MOSQUITO_BLOGS.supporting,
  ].map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // ── Tick blog hub & spokes ──────────────────────────────────────────────────
  const tickBlogs: MetadataRoute.Sitemap = [
    TICK_BLOGS.pillar,
    ...TICK_BLOGS.supporting,
  ].map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // ── New city-targeting blog posts ───────────────────────────────────────────
  const newBlogs: MetadataRoute.Sitemap = NEW_BLOGS.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    ...core,
    ...cityPages,
    ...mosquitoBlogs,
    ...tickBlogs,
    ...newBlogs,
  ]
}
