'use client'

import { usePathname } from 'next/navigation'
import { ADJACENT_PEST_ROUTES } from '@/lib/adjacent-pest-routes'
import { US_GUIDE_ADJACENT_ROUTES } from '@/lib/us-guide-routes'
import { KEEP_READING_BAR_ROUTES } from '@/lib/keep-reading-bar-routes'
import { READER_TOOL_ROUTES } from '@/lib/tool-routes'

/**
 * Route gate for the mobile lead bar in the root layout.
 *
 * The bar pitches a GTA mosquito/tick quote from the prime bottom-thumb
 * position. On the 145 adjacent-pest product pages that is doubly wrong: the
 * page's own disclosure says we do not treat that pest, and the bar sits
 * exactly where the StickyBuyBar — the surface that actually earns on those
 * pages — needs to be. Suppress it there; render everywhere else unchanged.
 *
 * Deliberately a MINIMAL gate (adjacent-pest routes only, not all of /blog):
 * mosquito and tick posts genuinely produce service leads, and a lost $994
 * seasonal customer costs more than any affiliate click the bar displaces.
 *
 * `except` hides the children on extra exact paths as well. The layout uses it
 * to drop the bar's "Get price" button on /free-yard-assessment and /contact,
 * where the visitor is already looking at the form, while Call and Text stay.
 * usePathname resolves during server rendering too, so the button is absent
 * from the initial HTML on those pages rather than flashing in and out.
 */
export default function LeadBarGate({
  children,
  except,
}: {
  children: React.ReactNode
  except?: readonly string[]
}) {
  const pathname = usePathname()
  const path = pathname ? pathname.replace(/\/$/, '') || '/' : ''
  if (path && ADJACENT_PEST_ROUTES.has(path)) return null
  // The Oct 2026 North American guides on bed bugs, ants, mice, cockroaches and general
  // pest control: same reasoning, a separate generated list (see lib/us-guide-routes.ts).
  if (path && US_GUIDE_ADJACENT_ROUTES.has(path)) return null
  // Articles that show the fixed "keep reading" bar instead (Oct 2026, owner's brief: articles
  // are for keeping readers on the site, and 11,757 blog readers produced 0 leads). The list is
  // generated with the picks (npm run recirculation:backfill) and never contains a service, city
  // or quote page, a local post, or a page with the Amazon buy bar.
  if (path && KEEP_READING_BAR_ROUTES.has(path)) return null
  // Reader tools for a national audience (the pest identifier quiz), see lib/tool-routes.ts.
  if (path && READER_TOOL_ROUTES.has(path)) return null
  if (path && except?.includes(path)) return null
  return <>{children}</>
}
