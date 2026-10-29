import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import CityHero from '@/components/CityHero'
import TypicalPrices from '@/components/TypicalPrices'
import CityPriceCard from '@/components/CityPriceCard'
import { Icon } from '@/components/Icon'
import { buildMetadata, breadcrumbSchema, speakableSchema } from '@/lib/seo'
import { CITIES } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito & Tick Control Service Areas – GTA',
  description:
    'BuzzSkito serves 19 GTA cities with mosquito & tick control. From $99/treatment. Find your city and get a free quote.',
  canonical: '/service-areas',
})

const PRIMARY = CITIES.slice(0, 6)
const EXTENDED = CITIES.slice(6)

// Neighbourhood service pages, grouped by city. Bolton is not repeated here: it is already in Quick Links.
const NEIGHBOURHOOD_PAGES: { city: string; neighbourhoods: { name: string; href: string }[] }[] = [
  {
    city: 'Toronto',
    neighbourhoods: [
      { name: 'The Annex', href: '/the-annex-mosquito-control' },
      { name: 'Baby Point', href: '/baby-point-mosquito-control' },
      { name: 'The Beaches', href: '/the-beaches-mosquito-control' },
      { name: 'the Bridle Path', href: '/bridle-path-mosquito-control' },
      { name: 'Casa Loma', href: '/casa-loma-mosquito-control' },
      { name: 'the Danforth', href: '/danforth-mosquito-control' },
      { name: 'Davisville Village', href: '/davisville-mosquito-control' },
      { name: 'Don Mills', href: '/don-mills-mosquito-control' },
      { name: 'East York', href: '/east-york-mosquito-control' },
      { name: 'Forest Hill', href: '/forest-hill-mosquito-control' },
      { name: 'High Park', href: '/high-park-mosquito-control' },
      { name: 'The Kingsway', href: '/the-kingsway-mosquito-control' },
      { name: 'Lawrence Park', href: '/lawrence-park-mosquito-control' },
      { name: 'Leaside', href: '/leaside-mosquito-control' },
      { name: 'Leslieville', href: '/leslieville-mosquito-control' },
      { name: 'Moore Park', href: '/moore-park-mosquito-control' },
      { name: 'Riverdale', href: '/riverdale-mosquito-control' },
      { name: 'Rosedale', href: '/rosedale-mosquito-control' },
      { name: 'Summerhill', href: '/summerhill-mosquito-control' },
      { name: 'Sunnybrook', href: '/sunnybrook-mosquito-control' },
      { name: 'Willowdale', href: '/willowdale-mosquito-control' },
      { name: 'York Mills', href: '/york-mills-mosquito-control' },
    ],
  },
  {
    city: 'Brampton',
    neighbourhoods: [
      { name: 'Bram West', href: '/bram-west-mosquito-control' },
      { name: 'Bramalea', href: '/bramalea-mosquito-control' },
      { name: 'Castlemore', href: '/castlemore-mosquito-control' },
      { name: 'Credit Valley', href: '/credit-valley-mosquito-control' },
      { name: "Fletcher's Meadow", href: '/fletcher-meadows-mosquito-control' },
      { name: 'Heart Lake', href: '/heart-lake-mosquito-control' },
      { name: 'Mount Pleasant', href: '/mount-pleasant-mosquito-control' },
      { name: 'Sandalwood', href: '/sandalwood-mosquito-control' },
      { name: 'Snelgrove', href: '/snelgrove-mosquito-control' },
      { name: 'Springdale', href: '/springdale-mosquito-control' },
    ],
  },
  {
    city: 'Oakville',
    neighbourhoods: [
      { name: 'Bronte', href: '/bronte-mosquito-control' },
      { name: 'Clearview', href: '/clearview-mosquito-control' },
      { name: 'College Park', href: '/college-park-mosquito-control' },
      { name: 'Eastlake', href: '/eastlake-mosquito-control' },
      { name: 'Falgarwood', href: '/falgarwood-mosquito-control' },
      { name: 'Glen Abbey', href: '/glen-abbey-mosquito-control' },
      { name: 'Joshua Creek', href: '/joshua-creek-mosquito-control' },
      { name: 'North Oakville', href: '/north-oakville-mosquito-control' },
      { name: 'Old Oakville', href: '/old-oakville-mosquito-control' },
      { name: 'River Oaks', href: '/river-oaks-mosquito-control' },
      { name: 'West Oak Trails', href: '/west-oak-trails-mosquito-control' },
    ],
  },
  {
    city: 'Burlington',
    neighbourhoods: [
      { name: 'Aldershot', href: '/aldershot-mosquito-control' },
      { name: 'Alton Village', href: '/alton-village-mosquito-control' },
      { name: 'Millcroft', href: '/millcroft-mosquito-control' },
      { name: 'Palmer', href: '/palmer-mosquito-control' },
      { name: 'Roseland', href: '/roseland-mosquito-control' },
      { name: 'The Orchard', href: '/orchard-mosquito-control' },
      { name: 'Tyandaga', href: '/tyandaga-mosquito-control' },
    ],
  },
  {
    city: 'Hamilton',
    neighbourhoods: [
      { name: 'Ancaster', href: '/ancaster-mosquito-control' },
      { name: 'Dundas', href: '/dundas-mosquito-control' },
      { name: 'Flamborough', href: '/flamborough-mosquito-control' },
      { name: 'Stoney Creek', href: '/stoney-creek-mosquito-control' },
      { name: 'Waterdown', href: '/waterdown-mosquito-control' },
    ],
  },
  {
    city: 'Caledon',
    neighbourhoods: [
      { name: 'Caledon East', href: '/caledon-east-mosquito-control' },
    ],
  },
  {
    city: 'Durham Region',
    neighbourhoods: [
      { name: 'Ajax', href: '/ajax-mosquito-control' },
      { name: 'Pickering', href: '/pickering-mosquito-control' },
    ],
  },
]

export default function ServiceAreasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Service Areas', url: '/service-areas' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/service-areas', '2026-07-01')) }} />

      {/* Hero */}
      <CityHero
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Service Areas' },
        ]}
        title={<>Mosquito &amp; Tick Control Across the GTA</>}
        subtitle={<>BuzzSkito provides professional mosquito and tick barrier spray for residential homeowners across 19 cities within 50km of Mississauga. If you're in the GTA, we service your neighbourhood.</>}
        image="/spray-pool.webp"
        imageAlt="BuzzSkito technician applying barrier spray beside a backyard pool"
      />

      {/* Primary cities */}
      <section aria-labelledby="primary-cities" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="kicker mb-3 text-center">Where We Work</p>
          <h2 id="primary-cities" className="h2-display text-brand-950 mb-3 text-center">Core Service Cities</h2>
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

      <TypicalPrices service="mosquito" city="GTA" />

      {/* Extended GTA cities */}
      <section aria-labelledby="extended-cities" className="py-16 px-4 bg-brand-50">
        <div className="max-w-6xl mx-auto">
          <p className="kicker mb-3 text-center">Full Coverage</p>
          <h2 id="extended-cities" className="h2-display text-brand-950 mb-3 text-center">Extended GTA Service Cities</h2>
          <p className="text-center text-gray-500 mb-10 max-w-xl mx-auto">We cover every city within 50km of Mississauga. Click your city for local mosquito and tick control information.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXTENDED.map((city) => (
              <div key={city.name} className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="font-extrabold text-brand-900 text-lg mb-3">{city.name}, Ontario</h3>
                <div className="space-y-2 mb-4">
                  <Link href={city.mosquitoSlug} className="flex items-center gap-2 text-sm text-brand-700 hover:text-brand-500 font-semibold">
                    <span className="w-5 h-5 bg-brand-100 rounded-full flex items-center justify-center" aria-hidden="true"><Icon name="mosquito" className="w-3.5 h-3.5 text-brand-700" /></span>
                    Mosquito Control in {city.name}
                  </Link>
                  <Link href={city.tickSlug} className="flex items-center gap-2 text-sm text-amber-700 hover:text-amber-500 font-semibold">
                    <span className="w-5 h-5 bg-amber-100 rounded-full flex items-center justify-center" aria-hidden="true"><Icon name="tick" className="w-3.5 h-3.5 text-amber-700" /></span>
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

      <div className="max-w-4xl mx-auto px-4">
        <CityPriceCard city="GTA" service="mosquito" />
      </div>

      {/* Neighbourhood pages */}
      <section aria-labelledby="neighbourhood-pages" className="py-16 px-4 bg-brand-50">
        <div className="max-w-6xl mx-auto">
          <p className="kicker mb-3 text-center">Neighbourhoods</p>
          <h2 id="neighbourhood-pages" className="h2-display text-brand-950 mb-3 text-center">Neighbourhoods We Serve</h2>
          <p className="text-center text-gray-500 mb-10 max-w-xl mx-auto">Many GTA neighbourhoods have their own page, covering the local creeks, ravines and parks that drive mosquito pressure there.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {NEIGHBOURHOOD_PAGES.map(({ city, neighbourhoods }) => {
              const wide = neighbourhoods.length > 12
              return (
                <div key={city} className={`bg-white border border-gray-200 rounded-2xl p-6${wide ? ' sm:col-span-2 lg:col-span-3' : ''}`}>
                  <h3 className="font-extrabold text-brand-900 text-lg mb-3">{city}</h3>
                  <ul className={`text-sm${wide ? ' sm:columns-2 lg:columns-3 gap-x-8' : ''}`}>
                    {neighbourhoods.map(({ name, href }) => (
                      <li key={href} className="mb-1.5 break-inside-avoid">
                        <Link href={href} className="text-brand-700 hover:underline">{`Mosquito control in ${name}`}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
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
                <li><Link href="/mosquito-control-ontario" className="text-brand-700 hover:underline">Ontario Coverage Hub</Link></li>
                <li><Link href="/tick-control-ontario" className="text-brand-700 hover:underline">Ontario Tick Control Hub</Link></li>
                <li><Link href="/york-region-mosquito-control" className="text-brand-700 hover:underline">York Region Hub</Link></li>
                <li><Link href="/kleinburg-mosquito-control" className="text-brand-700 hover:underline">Kleinburg Mosquito Control</Link></li>
                <li><Link href="/bolton-mosquito-control" className="text-brand-700 hover:underline">Bolton Mosquito Control</Link></li>
                <li><Link href="/golf-course-mosquito-control" className="text-brand-700 hover:underline">Golf Course Mosquito Control</Link></li>
                <li><Link href="/restaurant-patio-mosquito-control" className="text-brand-700 hover:underline">Restaurant Patio Mosquito Control</Link></li>
                <li><Link href="/buzzskito-2026-gta-mosquito-tick-report" className="text-brand-700 hover:underline">2026 GTA Mosquito &amp; Tick Report</Link></li>
                <li><Link href="/free-yard-assessment" className="text-brand-700 hover:underline">Get a Free Quote</Link></li>
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
