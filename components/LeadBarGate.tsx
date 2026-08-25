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
 */
export default function LeadBarGate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  if (pathname && ADJACENT_PEST_ROUTES.has(pathname.replace(/\/$/, ''))) return null
  return <>{children}</>
}
