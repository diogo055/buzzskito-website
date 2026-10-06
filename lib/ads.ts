import routes from './ad-routes.json'

/**
 * Mediavine display ads: where they are allowed to show.
 *
 * The business rule (owner, 2026-10-06): ads on informational pages, NEVER on
 * service pages. A seasonal customer is worth about $1,222 and a display ad on a
 * city or service page is most likely a competitor's, so the rule is enforced by
 * an ALLOW-LIST that fails closed: a route shows ads only if lib/ad-routes.json
 * says so. A new page added anywhere else is ad-free by default; nobody has to
 * remember to exclude it.
 *
 * How the rule is carried out:
 *   - <MediavineScript> (root layout <head>) emits the script on ad pages, so on a
 *     city, service, pricing or quote page it is simply not in the HTML.
 *   - The homepage is the one exception: Mediavine checks for its script at the
 *     domain root, so the homepage carries it with every ad switched off.
 *   - <MediavinePageSettings> puts Mediavine's own "no ads on this page" setting on
 *     every page that is not an ad page. That is what silences the homepage, and it
 *     is a second lock everywhere else.
 *   - <AdNavigationGuard> turns any navigation that starts or ends on an ad page
 *     into a full page load, so a running ad script can never ride a client-side
 *     route change from a blog post onto a service page.
 *   - scripts/check-ads.mjs re-checks the built HTML on every build and fails the
 *     deploy if any of the above is not true.
 */

/** The site's Mediavine script wrapper (the tag issued in the Mediavine dashboard). */
export const MEDIAVINE_TAG_SRC = '//scripts.mediavine.com/tags/5cb2e89b-2d2f-47ba-9cbf-599f203df724.js'

/** Kill switch: false removes the script from every page on the next deploy. */
export const ADS_ENABLED = true

const SECTIONS: readonly string[] = routes.sections
const PAGES: ReadonlySet<string> = new Set(routes.pages)
const AD_FREE: ReadonlySet<string> = new Set(routes.adFree)
const SCRIPT_ONLY: ReadonlySet<string> = new Set(routes.scriptOnly)

/** '/blog/foo/?x=1#y' -> '/blog/foo'; '/' stays '/'. */
export function normalizePath(pathname: string): string {
  const path = pathname.split(/[?#]/)[0].replace(/\/+$/, '')
  return path === '' ? '/' : path
}

/** May this path SHOW ads? True only for paths the allow-list names; anything unknown is ad-free. */
export function isAdPath(pathname: string | null | undefined): boolean {
  if (!ADS_ENABLED || !pathname || !pathname.startsWith('/')) return false
  const path = normalizePath(pathname)
  if (AD_FREE.has(path)) return false
  if (PAGES.has(path)) return true
  return SECTIONS.some((section) => path === section || path.startsWith(`${section}/`))
}

/** Does this path carry the Mediavine script? Every ad page, plus the homepage (with ads off). */
export function hasAdScript(pathname: string | null | undefined): boolean {
  if (!ADS_ENABLED || !pathname || !pathname.startsWith('/')) return false
  return isAdPath(pathname) || SCRIPT_ONLY.has(normalizePath(pathname))
}
