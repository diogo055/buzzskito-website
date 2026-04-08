import type { MetadataRoute } from 'next'
import { SITE_URL, CITIES, MOSQUITO_BLOGS, TICK_BLOGS, NEW_BLOGS, NEW_BLOGS_2, NEW_BLOGS_3, NEW_BLOGS_4, NEW_BLOGS_5, NEW_BLOGS_6 } from '@/lib/constants'

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

  // ── High-intent pages ───────────────────────────────────────────────────────
  const highIntent: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/how-it-works`,                    lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${SITE_URL}/commercial-mosquito-control`,     lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${SITE_URL}/mosquito-control-near-me`,        lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${SITE_URL}/mosquito-control-ontario`,        lastModified: now, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${SITE_URL}/york-region-mosquito-control`,    lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${SITE_URL}/kleinburg-mosquito-control`,      lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
  ]

  // ── Toronto neighbourhood pages ─────────────────────────────────────────────
  const torontoNeighbourhoods: MetadataRoute.Sitemap = [
    '/forest-hill-mosquito-control',
    '/rosedale-mosquito-control',
    '/leaside-mosquito-control',
    '/east-york-mosquito-control',
    '/don-mills-mosquito-control',
    '/willowdale-mosquito-control',
    '/york-mills-mosquito-control',
    '/the-beaches-mosquito-control',
  ].map((slug) => ({
    url: `${SITE_URL}${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // ── Brampton neighbourhood pages ────────────────────────────────────────────
  const bramptonNeighbourhoods: MetadataRoute.Sitemap = [
    '/heart-lake-mosquito-control',
    '/castlemore-mosquito-control',
    '/springdale-mosquito-control',
    '/fletcher-meadows-mosquito-control',
  ].map((slug) => ({
    url: `${SITE_URL}${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // ── Oakville neighbourhood pages ────────────────────────────────────────────
  const oakvilleNeighbourhoods: MetadataRoute.Sitemap = [
    '/glen-abbey-mosquito-control',
    '/bronte-mosquito-control',
    '/west-oak-trails-mosquito-control',
    '/old-oakville-mosquito-control',
    '/north-oakville-mosquito-control',
  ].map((slug) => ({
    url: `${SITE_URL}${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // ── Burlington neighbourhood pages ──────────────────────────────────────────
  const burlingtonNeighbourhoods: MetadataRoute.Sitemap = [
    '/alton-village-mosquito-control',
    '/aldershot-mosquito-control',
    '/roseland-mosquito-control',
  ].map((slug) => ({
    url: `${SITE_URL}${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

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

  // ── Additional SEO blog posts (batch 2) ─────────────────────────────────────
  const newBlogs2: MetadataRoute.Sitemap = NEW_BLOGS_2.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // ── Keyword-gap blog posts (batch 3) ─────────────────────────────────────────
  const newBlogs3: MetadataRoute.Sitemap = NEW_BLOGS_3.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // ── Keyword-gap blog posts (batch 4) ─────────────────────────────────────────
  const newBlogs4: MetadataRoute.Sitemap = NEW_BLOGS_4.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // ── Keyword-gap blog posts (batch 5) ─────────────────────────────────────────
  const newBlogs5: MetadataRoute.Sitemap = NEW_BLOGS_5.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // ── Keyword-gap blog posts (batch 6) ─────────────────────────────────────────
  const newBlogs6: MetadataRoute.Sitemap = NEW_BLOGS_6.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    ...core,
    ...cityPages,
    ...highIntent,
    ...torontoNeighbourhoods,
    ...bramptonNeighbourhoods,
    ...oakvilleNeighbourhoods,
    ...burlingtonNeighbourhoods,
    ...mosquitoBlogs,
    ...tickBlogs,
    ...newBlogs,
    ...newBlogs2,
    ...newBlogs3,
    ...newBlogs4,
    ...newBlogs5,
    ...newBlogs6,
  ]
}
