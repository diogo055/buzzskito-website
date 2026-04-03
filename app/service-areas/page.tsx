import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema } from '@/lib/seo'
import { CITIES } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito & Tick Control Service Areas – GTA | BuzzSkito',
  description:
    'BuzzSkito serves 19 cities across the GTA with professional mosquito and tick control. Mississauga, Toronto, Brampton, Oakville, Burlington, Vaughan, Richmond Hill, Markham, and more.',
  canonical: '/service-areas',
})

const PRIMARY = CITIES.slice(0, 6)
const EXTENDED = CITIES.slice(6)

export default function ServiceAreasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Service Areas', url: '/service-areas' }])) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex items-center gap-1">
            <Link href="/" className="hover:text-white">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white">Service Areas</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Mosquito &amp; Tick Control Across the GTA</h1>
          <p className="text-xl text-brand-100 max-w-2xl">
            BuzzSkito provides professional mosquito and tick barrier spray for residential homeowners across 19 cities within 50km of Mississauga. If you're in the GTA, we service your neighbourhood.
          </p>
        </div>
      </section>

      {/* Primary cities */}
      <section aria-labelledby="primary-cities" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 id="primary-cities" className="text-3xl font-extrabold text-brand-900 mb-3 text-center">Core Service Cities</h2>
          <p className="text-center text-gray-500 mb-10 max-w-xl mx-auto">Our highest-volume service areas — we have deep local knowledge of mosquito and tick pressure in each.</p>
          <div className="space-y-10">
            {PRIMARY.map((city) => (
              <div key={city.name} className="border border-gray-200 rounded-3xl overflow-hidden">
                <div className="bg-brand-800 text-white px-8 py-5">
                  <h3 className="text-2xl font-extrabold">{city.name}, Ontario</h3>
                </div>
                <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-extrabold text-brand-900 text-lg mb-2">Mosquito Control in {city.name}</h4>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{city.mosquitoBlurb}</p>
                    <Link href={city.mosquitoSlug} className="inline-block bg-brand-700 hover:bg-brand-600 text-white font-bold px-5 py-2.5 rounded-full text-sm transition-colors">
                      {city.name} Mosquito Control →
                    </Link>
                  </div>
                  <div>
                    <h4 className="font-extrabold text-brand-900 text-lg mb-2">Tick Control in {city.name}</h4>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{city.tickBlurb}</p>
                    <Link href={city.tickSlug} className="inline-block bg-amber-600 hover:bg-amber-500 text-white font-bold px-5 py-2.5 rounded-full text-sm transition-colors">
                      {city.name} Tick Control →
                    </Link>
                  </div>
                </div>
                <div className="bg-gray-50 border-t border-gray-100 px-8 py-4">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Neighbourhoods Served</p>
                  <div className="flex flex-wrap gap-2">
                    {city.neighbourhoods.map((n) => (
                      <span key={n} className="text-xs bg-white border border-gray-200 text-gray-600 px-3 py-1 rounded-full">{n}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extended GTA cities */}
      <section aria-labelledby="extended-cities" className="py-16 px-4 bg-brand-50">
        <div className="max-w-6xl mx-auto">
          <h2 id="extended-cities" className="text-3xl font-extrabold text-brand-900 mb-3 text-center">Extended GTA Service Cities</h2>
          <p className="text-center text-gray-500 mb-10 max-w-xl mx-auto">We cover every city within 50km of Mississauga. Click your city for local mosquito and tick control information.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXTENDED.map((city) => (
              <div key={city.name} className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="font-extrabold text-brand-900 text-lg mb-3">{city.name}, Ontario</h3>
                <div className="space-y-2 mb-4">
                  <Link href={city.mosquitoSlug} className="flex items-center gap-2 text-sm text-brand-700 hover:text-brand-500 font-semibold">
                    <span className="w-5 h-5 bg-brand-100 rounded-full flex items-center justify-center text-xs" aria-hidden="true">🦟</span>
                    Mosquito Control in {city.name}
                  </Link>
                  <Link href={city.tickSlug} className="flex items-center gap-2 text-sm text-amber-700 hover:text-amber-500 font-semibold">
                    <span className="w-5 h-5 bg-amber-100 rounded-full flex items-center justify-center text-xs" aria-hidden="true">🕷️</span>
                    Tick Control in {city.name}
                  </Link>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {city.neighbourhoods.slice(0, 4).map((n) => (
                    <span key={n} className="text-xs bg-gray-50 border border-gray-200 text-gray-500 px-2 py-0.5 rounded-full">{n}</span>
                  ))}
                  {city.neighbourhoods.length > 4 && (
                    <span className="text-xs text-gray-400 px-2 py-0.5">+{city.neighbourhoods.length - 4} more</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All city quick links */}
      <section aria-labelledby="all-links" className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 id="all-links" className="text-2xl font-extrabold text-brand-900 mb-6 text-center">All Service Area Links</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-2 text-sm">
            <div>
              <p className="font-bold text-brand-900 mb-2 uppercase text-xs tracking-wide">Mosquito Control</p>
              <ul className="space-y-1.5">
                {CITIES.map((c) => (
                  <li key={c.mosquitoSlug}>
                    <Link href={c.mosquitoSlug} className="text-brand-700 hover:underline">{c.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-bold text-brand-900 mb-2 uppercase text-xs tracking-wide">Tick Control</p>
              <ul className="space-y-1.5">
                {CITIES.map((c) => (
                  <li key={c.tickSlug}>
                    <Link href={c.tickSlug} className="text-amber-700 hover:underline">{c.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-bold text-brand-900 mb-2 uppercase text-xs tracking-wide">Quick Links</p>
              <ul className="space-y-1.5">
                <li><Link href="/mosquito-control" className="text-brand-700 hover:underline">Mosquito Control Hub</Link></li>
                <li><Link href="/tick-control" className="text-brand-700 hover:underline">Tick Control Hub</Link></li>
                <li><Link href="/contact" className="text-brand-700 hover:underline">Get a Free Quote</Link></li>
                <li><Link href="/frequently-asked-question" className="text-brand-700 hover:underline">FAQ</Link></li>
                <li><Link href="/blog" className="text-brand-700 hover:underline">Pest Control Blog</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection heading="Don't See Your Neighbourhood?" subtext="Call us to confirm service availability. We're always expanding our coverage across the GTA." />
    </>
  )
}
