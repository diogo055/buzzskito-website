import Link from 'next/link'
import { CITIES } from '@/lib/constants'

/**
 * CityFooterLinks — template-enforced internal linking block for the footer.
 *
 * Renders a compact, crawlable grid of links to every GTA city's mosquito-control
 * page. Uses each city's real `mosquitoSlug` from lib/constants (some differ from
 * the `/[city]-mosquito-control` pattern, e.g. Burlington → /burlington-mosquito-spray),
 * so links never 404. Server component — no client JS.
 *
 * Styled for the dark footer band (ink-band / text-brand-*).
 */
export default function CityFooterLinks() {
  return (
    <nav
      className="border-t border-white/10 pt-6 pb-4"
      aria-label="Mosquito control by city"
    >
      <p className="text-xs text-brand-500 text-center mb-3 font-semibold uppercase tracking-wider">
        Mosquito Control Across the GTA
      </p>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-1.5 text-xs">
        {CITIES.map((city) => (
          <li key={city.mosquitoSlug}>
            <Link
              href={city.mosquitoSlug}
              className="text-brand-400 hover:text-white transition-colors"
            >
              {city.name} Mosquito Control
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
