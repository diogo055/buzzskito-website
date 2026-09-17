'use client'

import { usePathname } from 'next/navigation'
import { ADJACENT_PEST_ROUTES } from '@/lib/adjacent-pest-routes'

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
  if (path && except?.includes(path)) return null
  return <>{children}</>
}
