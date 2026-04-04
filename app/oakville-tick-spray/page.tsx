import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema } from '@/lib/seo'
import { BUSINESS, TICK_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Tick Spray Oakville | BuzzSkito – Free Quotes',
  description:
    'Professional tick spray in Oakville. Serving Glen Abbey, Bronte, Joshua Creek, West Oak Trails & all Oakville neighbourhoods. Health Canada–approved. Call (289) 216-5030.',
  canonical: '/oakville-tick-spray',
})

const CITY = 'Oakville'
const SLUG = '/oakville-tick-spray'
const NEIGHBOURHOODS = ['Bronte','Glen Abbey','Joshua Creek','West Oak Trails','Clearview','Palermo','River Oaks','Kerr Village','Old Oakville','North Oakville']

const FAQS = [
  {
    question: 'Is Bronte Creek Provincial Park a tick risk for Oakville homeowners?',
    answer: "Yes. Bronte Creek Provincial Park is established blacklegged tick habitat and one of the most significant tick risk sites in Halton Region. The creek valley itself extends north through West Oak Trails and River Oaks, creating a tick dispersal corridor into residential properties. Homes adjacent to the park or creek system — particularly in Bronte, West Oak Trails, and River Oaks — have the highest exposure in Oakville.",
  },
  {
    question: 'What tick species are found in Oakville?',
    answer: "The blacklegged tick (deer tick, Ixodes scapularis) is the primary species of concern in Oakville and is the only species that transmits Lyme disease. American dog ticks are also present throughout the area but rarely transmit Lyme. Both species favour the humid, wooded environments common along Oakville's creeks and ravine systems.",
  },
  {
    question: 'Which Oakville neighbourhoods have the highest tick risk?',
    answer: "Bronte, West Oak Trails, and River Oaks face the highest risk due to direct adjacency to Bronte Creek Provincial Park. Glen Abbey properties backing onto the golf course ravines and 16 Mile Creek also have elevated tick exposure. North Oakville new-build developments near conservation corridors should treat as a precaution given proximity to Bronte Creek and Sixteen Mile Creek headwaters.",
  },
  {
    question: 'How many tick treatments does my Oakville property need per season?',
    answer: "We recommend two treatments per season: one in late May or early June targeting spring nymphs (peak risk, May–July), and one in August or September for adult tick emergence. Properties directly adjacent to Bronte Creek Provincial Park, wooded ravines, or properties with confirmed deer movement may benefit from a third visit. Each treatment provides up to 30 days of residual protection.",
  },
  {
    question: "Is tick spray safe near Oakville's creeks and wetlands?",
    answer: "Yes. Our Health Canada–approved, water-based formula is designed for residential use near water features. We do not apply product to water or shoreline areas directly. Once dry (approximately 30 minutes), the formula does not leach into waterways. We maintain safe buffer zones around any sensitive riparian areas on your property.",
  },
  {
    question: 'Does BuzzSkito offer mosquito control in Oakville as well?',
    answer: "Yes. Oakville's lakefront properties, Bronte Creek, 16 Mile Creek, and rain-garden landscaping create significant annual mosquito pressure. Many Oakville homeowners bundle mosquito and tick treatments for complete yard protection through the season. Ask about seasonal package pricing when you call.",
  },
  {
    question: 'What areas of my Oakville property should be treated for ticks?',
    answer: "Ticks concentrate at the transition zones on your property — the edge where maintained lawn meets any natural vegetation, garden beds, wooded areas, or fence lines. We also treat leaf litter accumulation areas, under decks, woodpile areas, and any ornamental beds with mulch. These specific zones account for the vast majority of tick exposure for Oakville homeowners.",
  },
]

export default function OakvilleTickSprayPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Tick Spray ${CITY}`, description: `Professional tick barrier spray in ${CITY}, Ontario. Health Canada–approved. Up to 30-day protection.`, slug: SLUG, city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Tick Control', url: '/tick-control' }, { name: CITY, url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-amber-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/tick-control" className="hover:text-white">Tick Control</Link><span>/</span>
            <span className="text-white">{CITY}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Tick Control in {CITY}</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            Bronte Creek Provincial Park, Glen Abbey's wooded ravines, and Oakville's natural trail systems are prime blacklegged tick habitat. BuzzSkito provides professional tick spray to protect Oakville families from Lyme disease.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get a Free Quote</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Tick Risk in Oakville</h2>
          <p>Oakville's picturesque wooded landscape — Bronte Creek Provincial Park, the 16 Mile Creek corridor, and the many ravines woven through Glen Abbey, Joshua Creek, and West Oak Trails — creates significant blacklegged tick habitat. Halton Region Public Health conducts annual tick surveillance and has documented established blacklegged tick populations in Bronte Creek Provincial Park and adjacent areas. Oakville's proximity to the Niagara Escarpment means tick populations from the escarpment spread into adjacent residential neighbourhoods through deer movement along creek corridors.</p>
          <p>The critical point for Oakville homeowners: you don't need a forest to have ticks. A property backing onto any ravine, creek, or green space — even a thin strip — can have tick activity at its edges. A professional barrier treatment at your property's transition zones is the most effective prevention available.</p>

          <h2>High-Risk Zones by Oakville Neighbourhood</h2>
          <ul>
            <li><strong>Bronte</strong> — directly adjacent to Bronte Creek Provincial Park and Lake Ontario shoreline</li>
            <li><strong>West Oak Trails</strong> — borders Bronte Creek corridor; documented deer movement through the area</li>
            <li><strong>Glen Abbey</strong> — ravines and creek features through the golf course create tick habitat alongside residential lots</li>
            <li><strong>River Oaks</strong> — Bronte Creek runs through the neighbourhood, creating consistent exposure</li>
            <li><strong>North Oakville</strong> — newer developments near Sixteen Mile Creek headwaters and Bronte Creek conservation buffer</li>
          </ul>

          <h2>Oakville Neighbourhoods We Serve for Tick Control</h2>
          <div className="not-prose flex flex-wrap gap-2 mb-6">
            {NEIGHBOURHOODS.map((n) => (
              <span key={n} className="text-sm bg-amber-50 border border-amber-200 text-amber-700 px-3 py-1.5 rounded-full">{n}</span>
            ))}
          </div>

          <h2>Also Providing Mosquito Control in Oakville</h2>
          <p>Bundle tick and mosquito protection for complete seasonal coverage. See our <Link href="/oakville-mosquito-control" className="text-brand-700 hover:underline">Oakville mosquito control service</Link>.</p>

          <h2>Related Guides</h2>
          <ul>
            <li><Link href={`/blog/${TICK_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{TICK_BLOGS.pillar.title}</Link></li>
            <li><Link href="/blog/best-tick-control-yard-treatment" className="text-brand-700 hover:underline">Best Tick Control for Your Yard</Link></li>
            <li><Link href="/blog/lyme-disease-tick-prevention-ontario" className="text-brand-700 hover:underline">Lyme Disease Prevention in Ontario</Link></li>
            <li><Link href="/blog/tick-bite-symptoms-what-to-do-ontario" className="text-brand-700 hover:underline">Tick Bite Symptoms &amp; What to Do in Ontario</Link></li>
          </ul>
        </div>
      </section>

      <section className="py-10 px-4 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">FAQ – Tick Spray in {CITY}</h2>
          <div className="space-y-3">
            {FAQS.map(({ question, answer }) => (
              <details key={question} className="bg-white rounded-xl border border-brand-100 group">
                <summary className="cursor-pointer px-5 py-4 font-semibold text-brand-900 list-none flex justify-between items-center">
                  <span>{question}</span>
                  <svg className="w-5 h-5 shrink-0 group-open:rotate-180 transition-transform text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-5 pb-4 text-gray-600 text-sm">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading={`Get a Free Tick Spray Quote in ${CITY}`} subtext="Protecting Oakville families from Lyme disease. No contracts." variant="dark" />
    </>
  )
}
