import roles from '@/lib/page-roles.json'

/**
 * Service side vs traffic pages (owner's direction, Oct 14, 2026).
 *
 * TRAFFIC pages are read mostly by people BuzzSkito cannot serve (other provinces, the US, or
 * pests we do not treat). Their job is views, display ads and Amazon clicks, so they carry no
 * quote prompts: no phone Call / Text / Get price bar, no desktop exit popup, no quote boxes.
 * SERVICE pages (homepage, service, city, pricing, quote, about, lead tools, and the posts and
 * Ontario mosquito/tick pages listed in lib/page-roles.json) keep every quote prompt.
 *
 * Small on purpose: it ships to the browser with LeadBarGate and ExitIntentPopup.
 * scripts/check-page-roles.mjs applies the same rule to the built site.
 */
const CONTENT_SECTIONS = ['/blog', '/learn', '/pest-product-guides', '/tools']
const LEAD_POSTS = new Set<string>(roles.leadPosts)
const LOCAL_INFO = new Set<string>(roles.localInfo)
const NATIONAL_DATA = new Set<string>(roles.nationalDataPages)

export function isTrafficPage(pathname: string | null | undefined): boolean {
  if (!pathname) return false
  const path = pathname.replace(/\/$/, '') || '/'
  if (LEAD_POSTS.has(path) || LOCAL_INFO.has(path)) return false
  if (NATIONAL_DATA.has(path)) return true
  return CONTENT_SECTIONS.some((s) => path === s || path.startsWith(s + '/'))
}
