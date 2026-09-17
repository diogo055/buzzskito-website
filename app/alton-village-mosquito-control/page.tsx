import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import CityHero from '@/components/CityHero'
import TypicalPrices from '@/components/TypicalPrices'
import CityPriceCard from '@/components/CityPriceCard'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema, howToSchema } from '@/lib/seo'
import { BUSINESS, MOSQUITO_BLOGS, PROMISES } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Control Alton Village | From $99',
  description:
    'Professional mosquito control in Alton Village, Burlington. Barrier spray from $99. Licensed Ontario operator. Call (289) 216-5030.',
  canonical: '/alton-village-mosquito-control',
})

const NEIGHBOURHOOD = 'Alton Village'
const CITY = 'Burlington'
const SLUG = '/alton-village-mosquito-control'

const FAQS = [
  {
    question: 'Why does Alton Village have a mosquito problem?',
    answer: "Alton Village is a newer north Burlington development that contains multiple stormwater management ponds — built to handle drainage from the development's large impervious surface area. These ponds maintain water year-round and develop the shallow, warm margins and aquatic vegetation that mosquitoes require for breeding. Many Alton Village homeowners are surprised by the intensity of mosquito pressure in their first season, particularly those with pond-facing backyards.",
  },
  {
    question: 'How significant is the stormwater pond issue in Alton Village?',
    answer: "Stormwater ponds are one of the most consistent mosquito sources in newer GTA developments. In Alton Village, these ponds are distributed throughout the community, meaning virtually every home is within the dispersal range of at least one pond breeding site. The City of Burlington manages these ponds for drainage and stormwater quality — not for mosquito control. For homeowners, property-level barrier spray treats the part they control: their own yard.",
  },
  {
    question: 'When is mosquito season in Alton Village?',
    answer: "Alton Village's mosquito season runs from early May through September. The stormwater ponds warm quickly in spring, often producing emergence earlier than at natural water bodies. Peak activity is from late May through July. Activity remains meaningful through September due to the ponds' year-round water availability.",
  },
  {
    question: 'How many treatments does an Alton Village home need per season?',
    answer: "Season plans run May through September: Basic (5 sprays, monthly), Standard (10 sprays, every 2 weeks) or Exclusive (20+ sprays, weekly). For pond-adjacent Alton Village properties, the monthly Basic plan is a reasonable starting point; properties directly backing onto a stormwater pond may benefit from Standard's two-week spacing. Call (289) 216-5030 for a free assessment at your specific Alton Village address.",
  },
  {
    question: 'Does BuzzSkito serve all of Alton Village and Millcroft?',
    answer: "Yes. We serve all Alton Village, Millcroft, and The Orchard streets in north Burlington. We also serve all surrounding Burlington communities. Call (289) 216-5030 to confirm service at your specific address.",
  },
]

export default function AltonVillageMosquitoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: `${NEIGHBOURHOOD}, ${CITY}` })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Mosquito Control ${NEIGHBOURHOOD}`, description: `Professional mosquito barrier spray for residential properties in ${NEIGHBOURHOOD}, ${CITY}.`, slug: SLUG, city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: 'Burlington', url: '/burlington-mosquito-spray' }, { name: NEIGHBOURHOOD, url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema({ service: 'mosquito', city: 'Burlington' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/alton-village-mosquito-control', '2026-07-01')) }} />

      <CityHero
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Mosquito Control', href: '/mosquito-control' },
          { label: 'Burlington', href: '/burlington-mosquito-spray' },
          { label: NEIGHBOURHOOD },
        ]}
        title={<>Mosquito Control in {NEIGHBOURHOOD}, {CITY}</>}
        subtitle={<>Alton Village's stormwater management ponds create reliable seasonal mosquito breeding in this north Burlington community. Licensed Ontario pesticide operator, with treatments applied according to label directions.</>}
        image="/spray-backyard.webp"
      />

      {/* Trust bar */}
      <section className="bg-brand-900 text-white py-4 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-medium text-brand-200">
          <span>✓ {PROMISES.licence}</span>
          <span>✓ {PROMISES.labelLine}</span>
          <span>✓ {PROMISES.rainBackShort}</span>
          <span>✓ {PROMISES.biteFreeScope}</span>
          <span>✓ 5-Star Rated · 150+ Reviews</span>
        </div>
      </section>

      
      <TypicalPrices service="mosquito" city={NEIGHBOURHOOD} />

      {/* How It Works */}
      <section className="py-12 px-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <p className="kicker mb-3 text-center">How It Works</p>
          <h2 className="h2-display text-brand-900 mb-8 text-center">How BuzzSkito Mosquito Control Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Free Property Assessment', desc: 'We evaluate your property — identifying water features, dense vegetation, and mosquito pressure zones specific to your area.' },
              { step: '2', title: 'Professional Barrier Spray', desc: 'Our licensed technician applies the product according to its label directions to vegetation, shrub interiors, leaf undersides, and fence lines using a precision backpack sprayer. Stay off treated areas until the spray has dried, as the label directs.' },
              { step: '3', title: 'Repeat Visits & Guarantees', desc: `Treatments repeat on your plan's schedule through the season. ${PROMISES.rainBack} On Standard & Exclusive plans, if mosquitoes come back between scheduled treatments, we re-treat at no charge.` },
            ].map(({ step, title, desc }) => (
              <div key={step} className="text-center">
                <div className="w-14 h-14 bg-brand-800 text-white rounded-full flex items-center justify-center text-2xl font-extrabold mx-auto mb-4">{step}</div>
                <h3 className="font-bold text-brand-900 text-lg mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Stormwater Ponds and Mosquitoes in Alton Village</h2>
          <p>Alton Village was built with stormwater management ponds distributed throughout the development — a requirement in newer Burlington communities to handle drainage from large paved areas. While these ponds serve an important infrastructure function, they also create predictable, season-long mosquito breeding habitat. Ponds warm quickly in spring, maintain water year-round, and develop the shallow aquatic margins that support mosquito larval development from May through September.</p>
          <p>BuzzSkito's barrier spray treats all resting vegetation around your Alton Village property — shrubs, fence lines, garden borders — the places where mosquitoes arriving from nearby ponds settle before they reach your outdoor living spaces. Each scheduled visit renews the treatment.</p>

          <h2>Part of Our Burlington Mosquito Control Network</h2>
          <p>We serve all of Alton Village and surrounding Burlington. See our <Link href="/burlington-mosquito-spray" className="text-brand-700 hover:underline">Burlington mosquito control</Link> page for city-wide coverage, or our pages for <Link href="/aldershot-mosquito-control" className="text-brand-700 hover:underline">Aldershot</Link> and <Link href="/roseland-mosquito-control" className="text-brand-700 hover:underline">Roseland</Link>.</p>


        </div>
      </section>

      {/* Price card sits between prose sections: .prose-brand link styles would override its buttons */}
      <div className="max-w-4xl mx-auto px-4">
        <CityPriceCard city={NEIGHBOURHOOD} service="mosquito" location="price_card_mid" />
      </div>

      <section className="pb-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Pricing — Treatments from $99</h2>
          <p>BuzzSkito offers flexible pricing for every budget. No contracts, no cancellation fees.</p>
          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-800 text-white">
                  <th className="px-4 py-3 text-left">Plan</th>
                  <th className="px-4 py-3 text-left">Price</th>
                  <th className="px-4 py-3 text-left">Treatments</th>
                  <th className="px-4 py-3 text-left">Frequency</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200"><td className="px-4 py-3 font-semibold">Single Treatment</td><td className="px-4 py-3 font-extrabold text-brand-700">From $99</td><td className="px-4 py-3">1</td><td className="px-4 py-3">One-time</td></tr>
                <tr className="border-b border-gray-200 bg-gray-50"><td className="px-4 py-3 font-semibold">Basic Season</td><td className="px-4 py-3 font-extrabold text-brand-700">$549</td><td className="px-4 py-3">5</td><td className="px-4 py-3">Monthly (May–Sep)</td></tr>
                <tr className="border-b border-gray-200"><td className="px-4 py-3 font-semibold">Standard Season</td><td className="px-4 py-3 font-extrabold text-brand-700">$994</td><td className="px-4 py-3">10</td><td className="px-4 py-3">Every 2 weeks</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-semibold">Exclusive Season</td><td className="px-4 py-3 font-extrabold text-brand-700">$2,049</td><td className="px-4 py-3">20+</td><td className="px-4 py-3">Weekly</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 not-prose">Pricing is for standard residential lots under 10,000 sq ft, plus HST. Larger properties receive custom quotes. <Link href="/mosquito-control-pricing" className="text-brand-700 hover:underline">See full pricing details</Link> or <Link href="/free-yard-assessment" className="text-brand-700 hover:underline">get a free quote</Link>.</p>

          <h2>Why Professional Treatment Outperforms DIY</h2>
          <p>Citronella candles, essential oil sprays, and consumer foggers provide temporary relief in a small radius — typically 30 minutes to 2 hours in the immediate area of use. Professional barrier spray treats the resting surfaces across your property, leaving a residual barrier that is renewed at each scheduled visit. The difference is coverage and duration: DIY products address symptoms; barrier spray addresses the source of activity on your lot.</p>
          <p>For a detailed comparison, see our <Link href="/mosquito-control-diy-vs-professional" className="text-brand-700 hover:underline">DIY vs Professional Mosquito Control</Link> guide.</p>

          <h2>When to Start Treatment</h2>
          <p>In the GTA, mosquito season typically runs from late April through September. The best time to book your first treatment is early-to-mid May, before populations peak. Starting early establishes a protective barrier before breeding cycles accelerate in June and July. <Link href="/blog/mosquito-season-gta-when-does-it-start" className="text-brand-700 hover:underline">Read our full seasonal timing guide</Link>.</p>


          
          <h2>Tick Control Also Available</h2>
          <p>We also offer professional tick control in this area. Our tick barrier spray targets the lawn edges, leaf litter and wooded borders where ticks wait: 5 sprays per season, $597 on its own or $497 with any mosquito plan. See our <Link href="/burlington-tick-spray" className="text-brand-700 hover:underline">tick spray service</Link> or <Link href="/tick-control" className="text-brand-700 hover:underline">learn about tick control</Link>.</p>

          <h2>Related Guides</h2>
          <ul>
            <li><Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{MOSQUITO_BLOGS.pillar.title}</Link></li>
            <li><Link href="/blog/hidden-mosquito-breeding-spots-backyard" className="text-brand-700 hover:underline">Hidden Mosquito Breeding Spots in Your GTA Backyard</Link></li>
            <li><Link href="/blog/mosquito-tick-control-hamilton-burlington" className="text-brand-700 hover:underline">Hamilton &amp; Burlington Mosquito &amp; Tick Control Guide</Link></li>
          </ul>
        </div>
      </section>


      {/* Testimonials */}
      <section className="py-12 px-4 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <p className="kicker mb-3 text-center">Reviews</p>
          <h2 className="h2-display text-brand-900 mb-2 text-center">What GTA Homeowners Say</h2>
          <p className="text-center text-gray-500 text-sm mb-8">From our 150+ five-star Google reviews</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { author: 'Katharine M.', text: 'Fantastic experience with the mosquito control last summer! We\u2019re re-signing for this season once again \u2014 we can finally enjoy our yard again in Mississauga.' },
              { author: 'Anthony', text: 'Highly recommend this company for mosquito control. I got my house in Milton serviced recently and loved the end result!' },
            ].map(({ author, text }) => (
              <div key={author} className="bg-brand-50 rounded-2xl p-6 border border-brand-100">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-gray-700 text-sm mb-3 italic">&ldquo;{text}&rdquo;</p>
                <p className="text-brand-800 font-semibold text-sm">{author}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <a href="https://g.page/r/CYytaw5LxucdEAE/review" target="_blank" rel="noopener noreferrer" className="text-brand-700 font-semibold text-sm hover:underline">Read all 150+ reviews on Google &rarr;</a>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4">
        <CityPriceCard city={NEIGHBOURHOOD} service="mosquito" />
      </div>

      <section className="py-10 px-4 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">FAQ – Mosquito Control in {NEIGHBOURHOOD}</h2>
          <div className="space-y-3">
            {FAQS.map(({ question, answer }) => (
              <details key={question} className="bg-white rounded-xl border border-brand-100 group open:shadow-md transition-shadow">
                <summary className="cursor-pointer px-5 py-4 font-semibold text-brand-900 list-none flex justify-between items-center rounded-xl hover:bg-brand-100/60 transition-colors">
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

      <CTASection heading={`Get a Free Mosquito Control Quote in ${NEIGHBOURHOOD}`} subtext="Protecting Alton Village properties from stormwater pond mosquitoes. No contracts." />
    </>
  )
}
