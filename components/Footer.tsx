import Link from 'next/link'
import Image from 'next/image'
import { BUSINESS, CITIES, MOSQUITO_BLOGS, TICK_BLOGS } from '@/lib/constants'

export default function Footer() {
  const year = new Date().getFullYear()

  const mosquitoCities = CITIES.map((c) => ({ name: c.name, href: c.mosquitoSlug }))
  const tickCities = CITIES.map((c) => ({ name: c.name, href: c.tickSlug }))

  return (
    <footer className="bg-brand-950 text-brand-300" role="contentinfo">
      {/* localBusinessSchema is emitted per-page (with city-specific areaServed) — not in Footer to avoid duplicate aggregateRating. */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <Image
                src="/logo.webp"
                alt="BuzzSkito Mosquito and Tick Control - GTA's 5-star pest control company"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="font-extrabold text-xl text-white">Buzz<span className="text-amber-400">Skito</span></span>
            </Link>
            <p className="text-sm leading-relaxed mb-5 text-brand-400 max-w-xs">
              Professional mosquito and tick barrier spray for GTA homeowners. Health Canada–approved. Safe for kids and pets after 30 minutes. Serving 19 cities across the GTA.
            </p>
            <address className="not-italic text-sm space-y-2 text-brand-300">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand-500 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <a href={BUSINESS.phoneHref} className="hover:text-white transition-colors font-semibold text-white">
                  {BUSINESS.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${BUSINESS.email}`} className="hover:text-white transition-colors">
                  {BUSINESS.email}
                </a>
              </div>
              <div className="text-brand-400 text-xs mt-1">{BUSINESS.hoursDisplay}</div>
            </address>
            <div className="mt-4 flex gap-3">
              <a
                href={BUSINESS.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-400 hover:text-white transition-colors"
                aria-label="BuzzSkito on Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href={BUSINESS.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-400 hover:text-white transition-colors text-xs font-medium self-center flex items-center gap-1"
                aria-label="Leave a Google review for BuzzSkito"
              >
                ⭐ Leave a Google Review
              </a>
            </div>
          </div>

          {/* Mosquito Services — all 19 cities */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Mosquito Control</h3>
            <ul className="space-y-1.5 text-sm">
              <li><Link href="/mosquito-control" className="hover:text-white transition-colors font-semibold">All Cities →</Link></li>
              {mosquitoCities.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="hover:text-white transition-colors">{c.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tick Services — all 19 cities */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Tick Control</h3>
            <ul className="space-y-1.5 text-sm">
              <li><Link href="/tick-control" className="hover:text-white transition-colors font-semibold">All Cities →</Link></li>
              {tickCities.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="hover:text-white transition-colors">{c.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company + Blog */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2 text-sm mb-6">
              <li><Link href="/buzzskito-history" className="hover:text-white transition-colors">About BuzzSkito</Link></li>
              <li><Link href="/reviews" className="hover:text-white transition-colors">Reviews (129 ★★★★★)</Link></li>
              <li><Link href="/buzzskito-2026-gta-mosquito-tick-report" className="hover:text-white transition-colors">2026 GTA Mosquito & Tick Report</Link></li>
              <li><Link href="/mosquito-tick-control-glossary" className="hover:text-white transition-colors">Mosquito & Tick Glossary</Link></li>
              <li><Link href="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
              <li><Link href="/pest-control-gta" className="hover:text-white transition-colors">Pest Control GTA</Link></li>
              <li><Link href="/best-mosquito-control-companies-gta" className="hover:text-white transition-colors">Best Mosquito Companies</Link></li>
              <li><Link href="/frequently-asked-question" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/mosquito-control-cost" className="hover:text-white transition-colors">2026 Pricing Guide</Link></li>
              <li><Link href="/mosquito-control-near-me" className="hover:text-white transition-colors">Mosquito Control Near Me</Link></li>
              <li><Link href="/tick-control-near-me" className="hover:text-white transition-colors">Tick Control Near Me</Link></li>
              <li><Link href="/commercial-mosquito-control" className="hover:text-white transition-colors">Commercial Services</Link></li>
              <li><Link href="/service-areas" className="hover:text-white transition-colors">All Service Areas</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact / Get a Quote</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms &amp; Conditions</Link></li>
            </ul>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Latest Posts</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="hover:text-white transition-colors line-clamp-2">Ultimate Mosquito Control Guide</Link></li>
              <li><Link href={`/blog/${TICK_BLOGS.pillar.slug}`} className="hover:text-white transition-colors line-clamp-2">Ultimate Tick Control Guide</Link></li>
              <li><Link href="/blog" className="text-brand-400 hover:text-white transition-colors">View All Posts →</Link></li>
            </ul>
          </div>
        </div>

        {/* Credentials bar */}
        <div className="border-t border-brand-900 mt-10 pt-6 pb-4">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-brand-400">
            <span><strong className="text-brand-300">Canada Business Reg#</strong> {BUSINESS.canadaBusinessReg}</span>
            <span aria-hidden="true">·</span>
            <span><strong className="text-brand-300">Ontario Pesticide Operator Licence</strong> #{BUSINESS.licenseNumber}</span>
            <span aria-hidden="true">·</span>
            <span><strong className="text-brand-300">Health Canada</strong>–Approved Formulations</span>
            <span aria-hidden="true">·</span>
            <span><strong className="text-brand-300">5.0 ★</strong> Google Rating · 129 Reviews · 0 Negative</span>
          </div>
        </div>

        {/* Trusted Resources — outbound authority citations boost AI Overview eligibility */}
        <div className="border-t border-brand-900 pt-5 pb-4">
          <p className="text-xs text-brand-500 text-center mb-2 font-semibold uppercase tracking-wider">Trusted Public Health & Regulatory Resources</p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-brand-400">
            <a href="https://www.canada.ca/en/health-canada/services/consumer-product-safety/pesticides-pest-management.html" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Health Canada — Pesticides &amp; Pest Management</a>
            <a href="https://pr-rp.hc-sc.gc.ca/ls-re/index-eng.php" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">PCPA Public Registry</a>
            <a href="https://www.publichealthontario.ca/en/Data-and-Analysis/Infectious-Disease/Lyme-Disease-Active-Tick-Surveillance" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Public Health Ontario — Tick Surveillance</a>
            <a href="https://www.publichealthontario.ca/en/Diseases-and-Conditions/Infectious-Diseases/Vector-Borne-Zoonotic-Diseases/West-Nile-Virus" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">PHO — West Nile Virus</a>
            <a href="https://www.cdc.gov/lyme/index.html" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">CDC — Lyme Disease</a>
            <a href="https://www.etick.ca/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">eTick.ca — Tick Identification</a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-brand-900 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-brand-500">
          <p>© {year} {BUSINESS.legalName}. All rights reserved. · Mississauga, ON</p>
          <p className="hidden sm:block text-center">Serving 19 cities across the Greater Toronto Area</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-brand-300 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-brand-300 transition-colors">Terms</Link>
            <Link href="/contact" className="hover:text-brand-300 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
