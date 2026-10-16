// How many product guides the site has, counted from the articles themselves at build time,
// so the numbers on /pest-product-guides never go stale (they said "280+" long after the site
// passed 320). A product guide is a blog article that carries Amazon product picks. Server-only:
// it reads app/blog/*/page.tsx with fs while the page is being built.
import { readdirSync, readFileSync, existsSync } from 'fs'
import { join } from 'path'
import { clusterForSlug, type Cluster } from './amazon-clusters'

const PICKS = /<BuyLink|<TopPick|<AwardRow|<AmazonLink|<StickyBuyBar|<AwardCard/

let cache: string[] | null = null
/** Slugs of blog articles that carry Amazon product picks. */
export function productGuideSlugs(): string[] {
  if (cache) return cache
  const dir = join(process.cwd(), 'app', 'blog')
  cache = readdirSync(dir).filter((slug) => {
    const f = join(dir, slug, 'page.tsx')
    return existsSync(f) && PICKS.test(readFileSync(f, 'utf8'))
  })
  return cache
}

/**
 * Product guides in a category: articles whose Amazon cluster is one of `clusters`, plus
 * articles in the catch-all 'general' cluster whose slug matches `general` (crawlers, fleas,
 * carpenter bees and yard equipment ride the general tracking tag).
 */
export function productGuideCount(clusters: Cluster[], general?: RegExp): number {
  return productGuideSlugs().filter((slug) => {
    const c = clusterForSlug(slug)
    return clusters.includes(c) || (c === 'general' && !!general && general.test(slug))
  }).length
}
