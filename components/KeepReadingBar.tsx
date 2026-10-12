import Link from 'next/link'
import KeepReadingBarShell from '@/components/KeepReadingBarShell'
import { KEEP_READING_BAR_ENABLED, hasKeepReadingBar, nextArticle, headline, slugOf } from '@/lib/recirculation'

/**
 * The fixed "keep reading" bar: one destination, the page's "Next" article. A slim bar along the
 * bottom edge at every screen width (the old quote bar was phones only).
 *
 * Why (owner's brief, Oct 2026): articles exist to keep readers on the site, and on articles the
 * Call / Text / Get price bar is a dead end (11,757 blog readers, 0 leads). So on articles this
 * bar takes that bar's place. components/LeadBarGate.tsx hides the quote bar on exactly the pages
 * listed in lib/keep-reading-bar-routes.ts, which is generated together with the picks.
 *
 * Where it is NOT (owner's rules):
 *   - any page with the fixed Amazon buy bar (two stacked bars; the buy bar stays)
 *   - service, city, pricing and quote pages and the local posts: they keep Call / Text / Get price
 *
 * Why a bar on the edge and not a floating card (the brief allowed either on desktop): nothing of
 * ours may sit over, under or in front of a Mediavine unit. A card floating over the page would
 * cover the text column, and with it any in-content ad scrolling through; the bottom-right corner
 * is also where Mediavine's video player floats. So the bar keeps to the bottom edge, its
 * distance from that edge is set in app/globals.css with the --mv-* variables exactly like the
 * other fixed bars (it steps above the band reserved for Mediavine's bottom ad), and on desktop
 * it is not shown while Mediavine's video player is floating.
 *
 * Rendered by components/ReadNext.tsx at the top level of the page (never inside the article
 * column), so no ancestor can capture its fixed position. Server component; the client shell
 * only shows and hides it. Clicks are counted as recirculation_click with location=sticky_bar.
 *
 * To switch our bar off (for example if Mediavine's own Grow "What's Next" unit is turned on),
 * set KEEP_READING_BAR_ENABLED to false in lib/recirculation.ts. The quote bar stays hidden on
 * articles either way.
 */
export default function KeepReadingBar({ path }: { path: string }) {
  if (!KEEP_READING_BAR_ENABLED || !hasKeepReadingBar(path)) return null
  const next = nextArticle(path)
  if (!next) return null
  return (
    <KeepReadingBarShell>
      <Link
        href={next.path}
        prefetch={false}
        data-recirc="sticky_bar"
        data-recirc-kind="bar"
        data-recirc-target={slugOf(next.path)}
        className="flex min-h-[60px] min-w-0 flex-1 items-center gap-3 py-2.5 pl-4 pr-1 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-white"
      >
        <span className="min-w-0 flex-1">
          <span className="block text-[10px] font-extrabold uppercase tracking-widest text-brand-300">Next article</span>
          {/* no `block` here: line-clamp sets its own display */}
          <span className="text-sm font-bold leading-snug text-white line-clamp-2">{headline(next)}</span>
        </span>
        <span aria-hidden="true" className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-to-b from-amber-500 to-amber-600 text-base font-bold text-white">→</span>
      </Link>
    </KeepReadingBarShell>
  )
}
