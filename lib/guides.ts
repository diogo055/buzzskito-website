// North American pest guides (Oct 2026).
//
// These pages are data, not hand-written TSX: each one is a JSON file in
// content/guides/<slug>.json, rendered by components/GuidePage.tsx. A spoke lives at
// /blog/<slug>, a pillar at /learn/<slug>. To edit a page, edit its JSON file.
//
// Why data: 76 pages written at once in hand-rolled JSX is 76 chances for an unescaped
// apostrophe to break the build, and it makes the rules below impossible to check.
// scripts/validate-guide.mjs enforces them on every file (wired into `npm run build`):
//   - written for a US reader: US spelling, Fahrenheit, inches and feet, US dollars
//   - no affiliate or retailer links of any kind (products are named, never linked)
//   - 3 to 6 authoritative sources, each one linked in the text where it is used
//   - every internal link points at a page that exists
import type { Metadata } from 'next'
import { buildMetadata, blogPostingSchema, breadcrumbSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { SITE_URL, BUSINESS } from '@/lib/constants'
import heroes from '@/lib/us-guide-heroes.json'

export type GuideCluster = 'bed-bugs' | 'ants' | 'mice' | 'cockroaches' | 'mosquitoes' | 'ticks' | 'pest-control' | 'garden'

export type GuideBlock =
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'p'; text: string }
  | { type: 'ul' | 'ol'; items: string[] }
  | { type: 'table'; caption?: string; head: string[]; rows: string[][] }
  | { type: 'callout'; tone?: 'tip' | 'warning' | 'note'; title?: string; text: string }
  /** A photo or diagram the page still needs. Not rendered; listed in reports/us_pages_media_needed.md. */
  | { type: 'media'; needed: string }
  /** One remedy with exact measurements, what it does and does not do, and a pet/child safety tier. */
  | {
      type: 'recipe'
      title: string
      makes?: string
      ingredients: string[]
      steps: string[]
      works?: string
      limits?: string
      safety: { tier: 'lower-risk' | 'caution' | 'keep-away'; pets: string; children: string }
      source?: string
    }
  /** A list the reader works through, item by item. */
  | { type: 'checklist'; title?: string; items: string[] }
  /** The printable: a cheat sheet, recipe card or routine that stands on its own. */
  | { type: 'card'; title: string; intro?: string; items: string[]; note?: string }

export interface Guide {
  slug: string
  kind: 'spoke' | 'pillar'
  /** Where the page lives when that is not implied by `kind` (the visual guides under /learn). */
  section?: 'learn' | 'blog'
  /** Describes the hero infographic for screen readers and search engines (visual guides). */
  heroAlt?: string
  cluster: GuideCluster
  /** The search this page answers, and any near-identical searches folded into it. */
  keyword: string
  alsoTargets?: string[]
  /** Rendered as "<metaTitle> | BuzzSkito", so 48 characters is the ceiling. */
  metaTitle: string
  metaDescription: string
  h1: string
  dek: string
  breadcrumb: string
  excerpt: string
  datePublished: string
  dateModified?: string
  quickAnswer: { lead: string; bullets: string[] }
  facts?: { title: string; rows: [string, string][] }
  body: GuideBlock[]
  howTo?: { name: string; description?: string; totalTime?: string; steps: { name: string; text: string }[] }
  faqs: { question: string; answer: string }[]
  sources: { title: string; publisher: string; url: string }[]
  disclaimer?: 'health' | 'pesticide' | 'both'
  /**
   * Set ONLY when a named person has actually read and approved this page: their name and
   * the date (YYYY-MM-DD). The byline then reads "Reviewed by <name>" and the note at the
   * foot of the page says so. Leave both out otherwise.
   */
  reviewedBy?: string
  reviewedOn?: string
}

export const guidePath = (g: Pick<Guide, 'slug' | 'kind' | 'section'>) => `/${g.section ?? (g.kind === 'pillar' ? 'learn' : 'blog')}/${g.slug}`

/** Hero images that exist in public/guides, by page address. Written by scripts/us-pages-register.mjs. */
export const GUIDE_HEROES = heroes as Record<string, { src: string; width: number; height: number }>

export const CLUSTER_LABEL: Record<GuideCluster, string> = {
  'bed-bugs': 'bed bugs',
  ants: 'ants',
  mice: 'mice',
  cockroaches: 'cockroaches',
  mosquitoes: 'mosquitoes',
  ticks: 'ticks',
  'pest-control': 'pest control',
  garden: 'garden pests',
}

/** The pillar each cluster reports to. Mosquito and tick guides use the two existing pillar guides. */
export const CLUSTER_PILLAR: Partial<Record<GuideCluster, { href: string; name: string }>> = {
  'bed-bugs': { href: '/learn/bed-bugs', name: 'Bed Bugs' },
  ants: { href: '/learn/ants', name: 'Ants' },
  mice: { href: '/learn/mice', name: 'Mice' },
  cockroaches: { href: '/learn/cockroaches', name: 'Cockroaches' },
  mosquitoes: { href: '/blog/ultimate-backyard-mosquito-control-guide', name: 'Mosquito Control Guide' },
  ticks: { href: '/blog/ultimate-tick-control-guide-ontario', name: 'Tick Control Guide' },
  garden: { href: '/learn/natural-garden-pest-control', name: 'Garden Pest Control' },
}

// ── Regional editions ───────────────────────────────────────────────────────────
// Where a Canadian guide already answers the same question with Canadian product rules
// and Canadian retailers, the new guide is its US edition rather than a competitor. Each
// pair points at the other with hreflang so Google shows Canadians the Canadian page and
// Americans this one, and each page carries a visible link to its counterpart.
export const REGIONAL_PAIRS: { us: string; ca: string }[] = [
  { us: '/blog/how-to-get-rid-of-bed-bugs', ca: '/blog/how-to-get-rid-of-bed-bugs-canada' },
  { us: '/blog/bugs-that-look-like-bed-bugs', ca: '/blog/bugs-that-look-like-bed-bugs-canada' },
  { us: '/blog/mice-repellent', ca: '/blog/mouse-repellent-canada' },
  { us: '/blog/mice-traps', ca: '/blog/best-mouse-trap-canada' },
  { us: '/blog/what-do-ticks-look-like', ca: '/blog/what-ticks-look-like-ontario' },
  { us: '/blog/seed-ticks', ca: '/blog/baby-ticks-nymphs-seed-ticks-ontario' },
  { us: '/blog/how-much-is-pest-control', ca: '/pest-control-cost-canada' },
]

export const regionalPair = (path: string) => REGIONAL_PAIRS.find((p) => p.us === path || p.ca === path)

/** hreflang map for a page that has a regional counterpart. Pass to buildMetadata's result. */
export function regionalLanguages(path: string): Record<string, string> | undefined {
  const pair = regionalPair(path)
  if (!pair) return undefined
  return {
    'en-CA': `${SITE_URL}${pair.ca}`,
    'en-US': `${SITE_URL}${pair.us}`,
    'x-default': `${SITE_URL}${pair.us}`,
  }
}

/** Adds the hreflang pair to an existing page's metadata without touching anything else in it. */
export function withRegionalAlternates(meta: Metadata, path: string): Metadata {
  const languages = regionalLanguages(path)
  if (!languages) return meta
  return { ...meta, alternates: { ...meta.alternates, languages } }
}

export function guideMetadata(g: Guide): Metadata {
  const path = guidePath(g)
  const meta = buildMetadata({
    title: g.metaTitle,
    description: g.metaDescription,
    canonical: path,
    type: 'article',
    publishedTime: g.datePublished,
    modifiedTime: g.dateModified,
  })
  const hero = GUIDE_HEROES[path]
  // a guide with its own infographic uses it as the share image (this is what a Pinterest pin shows)
  const images = hero ? [{ url: hero.src, width: hero.width, height: hero.height, alt: g.heroAlt || g.h1 }] : meta.openGraph?.images
  return withRegionalAlternates({ ...meta, openGraph: { ...meta.openGraph, locale: 'en_US', images }, ...(hero && { twitter: { ...meta.twitter, images: [hero.src] } }) }, path)
}

export function guideSchemas(g: Guide): Record<string, unknown>[] {
  const path = guidePath(g)
  const pillar = CLUSTER_PILLAR[g.cluster]
  const inLearn = path.startsWith('/learn/')
  const hub = g.kind === 'pillar' || !pillar || pillar.href === path ? [] : [{ name: pillar.name, url: pillar.href }]
  const crumbs = [
    { name: 'Home', url: '/' },
    inLearn ? { name: 'Learning Centre', url: '/learn' } : { name: 'Blog', url: '/blog' },
    ...hub,
    { name: g.breadcrumb, url: path },
  ]
  const hero = GUIDE_HEROES[path]
  const article = {
    ...blogPostingSchema({
      title: g.h1,
      description: g.metaDescription,
      slug: g.slug,
      datePublished: g.datePublished,
      dateModified: g.dateModified,
    }),
    url: `${SITE_URL}${path}`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}${path}` },
    // The author of record is the company, not a named person: these guides were drafted
    // with AI assistance, and the page says so. Naming a human author here would misstate
    // who wrote them. (The visible byline handles a human reviewer, when there is one.)
    author: { '@type': 'Organization', '@id': `${SITE_URL}/#organization`, name: BUSINESS.legalName, url: SITE_URL },
    inLanguage: 'en-US',
    ...(hero && { image: { '@type': 'ImageObject', url: `${SITE_URL}${hero.src}`, width: hero.width, height: hero.height } }),
    about: { '@type': 'Thing', name: CLUSTER_LABEL[g.cluster] },
    citation: g.sources.map((s) => ({ '@type': 'CreativeWork', name: s.title, publisher: s.publisher, url: s.url })),
  }
  const out: Record<string, unknown>[] = [article, breadcrumbSchema(crumbs), faqSchema(g.faqs), speakableSchema(path, g.dateModified)]
  if (g.howTo) {
    out.push({
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: g.howTo.name,
      ...(g.howTo.description && { description: g.howTo.description }),
      ...(g.howTo.totalTime && { totalTime: g.howTo.totalTime }),
      step: g.howTo.steps.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.name, text: s.text })),
    })
  }
  return out
}

export const slugifyHeading = (text: string) =>
  text.toLowerCase().replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
