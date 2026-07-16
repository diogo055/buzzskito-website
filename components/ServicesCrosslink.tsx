import Link from 'next/link'

/**
 * ServicesCrosslink — a horizontal "All BuzzSkito Services" link row.
 *
 * A single template component that surfaces the core service, service-area,
 * conversion, and free-tool pages as inline <Link>s. Designed to be dropped
 * into content pages (blog posts, city pages, resource pages) to enforce
 * consistent internal linking to money + tool pages.
 *
 * NOT auto-injected sitewide — place it manually where it fits (see the
 * component's suggested placement notes in the ship report). Server component.
 */

const SERVICE_LINKS: { href: string; label: string }[] = [
  { href: '/mosquito-control', label: 'Mosquito Control' },
  { href: '/tick-control', label: 'Tick Control' },
  { href: '/service-areas', label: 'Service Areas' },
  { href: '/free-yard-assessment', label: 'Free Yard Assessment' },
  { href: '/mosquito-control-cost', label: '2026 Pricing Guide' },
  { href: '/yard-risk-report', label: 'Yard Risk Report' },
  { href: '/am-i-a-mosquito-magnet', label: 'Mosquito Magnet Quiz' },
  { href: '/gta-mosquito-pressure-map', label: 'GTA Pressure Map' },
  { href: '/lyme-disease-risk-calculator', label: 'Lyme Risk Calculator' },
]

export default function ServicesCrosslink() {
  return (
    <nav
      className="my-8 rounded-2xl border border-gray-100 bg-brand-50/60 px-5 py-4"
      aria-label="All BuzzSkito services"
    >
      <p className="text-xs font-bold uppercase tracking-wider text-brand-700 mb-2.5">
        All BuzzSkito Services
      </p>
      <ul className="flex flex-wrap items-center gap-x-2.5 gap-y-2 text-sm">
        {SERVICE_LINKS.map((link, i) => (
          <li key={link.href} className="flex items-center gap-2.5">
            <Link
              href={link.href}
              className="font-medium text-brand-800 hover:text-brand-600 transition-colors"
            >
              {link.label}
            </Link>
            {i < SERVICE_LINKS.length - 1 && (
              <span className="text-brand-300" aria-hidden="true">
                ·
              </span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}
