import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema, howToSchema } from '@/lib/seo'
import { BUSINESS, MOSQUITO_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Control York Mills Toronto | BuzzSkito',
  description:
    'Mosquito control in York Mills, Toronto. Barrier spray near Don Valley from $99. No contracts. Call (289) 216-5030.',
  canonical: '/york-mills-mosquito-control',
})

const NEIGHBOURHOOD = 'York Mills'
const CITY = 'Toronto'
const SLUG = '/york-mills-mosquito-control'

const FAQS = [
  {
    question: 'Why are mosquitoes a problem in York Mills?',
    answer: "York Mills sits directly above the Don Valley ravine, one of Toronto's most productive mosquito breeding corridors. The neighbourhood's most desirable properties — large-lot estates with sweeping ravine views — are also the most exposed to mosquito dispersal from the valley below. The Don River and its tributaries provide permanent breeding habitat, while York Mills' exceptional tree canopy creates ideal daytime resting conditions for arriving mosquitoes.",
  },
  {
    question: 'Which York Mills streets have the most mosquito activity?',
    answer: "Properties directly backing onto the Don Valley ravine — particularly along Old Yonge Street, Fifeshire Road, and the private estates on the ravine edge — experience the most intense mosquito pressure. Streets within 600 metres of the ravine edge on both sides of Yonge Street also see meaningful activity. Even properties further from the valley benefit from barrier spray given mosquitoes' documented 3 km dispersal range from Don Valley source populations.",
  },
  {
    question: 'How many treatments does a York Mills property need?',
    answer: "For ravine-adjacent York Mills properties, we recommend 4–5 treatments from May through September, spaced 21–28 days apart. Larger estate lots with extensive perimeter vegetation may require more thorough treatment than smaller residential lots — our technician will assess your property and recommend accordingly. Call (289) 216-5030 for a free quote.",
  },
  {
    question: "Is BuzzSkito's treatment safe for York Mills' established estate gardens?",
    answer: "Yes. Our Health Canada–approved, water-based formula is safe for application around all established plantings including mature specimen trees, formal hedges, perennial borders, and ornamental gardens. We apply it to resting surfaces — leaf undersides and shrub foliage — not to open blooms, bare soil, or tree trunks. After a 30-minute drying period, the area is fully safe for children, pets, and all garden pollinators.",
  },
  {
    question: 'Does BuzzSkito serve all of York Mills and surrounding North York?',
    answer: "Yes. We serve all of York Mills, Lawrence Park, Hoggs Hollow, and surrounding North York neighbourhoods. We also serve the full Toronto area. Call (289) 216-5030 to confirm service at your specific address and book your free assessment.",
  },
]

export default function YorkMillsMosquitoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: `${NEIGHBOURHOOD}, ${CITY}` })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Mosquito Control ${NEIGHBOURHOOD}`, description: `Professional mosquito barrier spray for residential properties in ${NEIGHBOURHOOD}, ${CITY}.`, slug: SLUG, city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: 'Toronto', url: '/toronto-mosquito-control' }, { name: NEIGHBOURHOOD, url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema({ service: 'mosquito', city: 'Toronto' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/york-mills-mosquito-control')) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1 flex-wrap">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/mosquito-control" className="hover:text-white">Mosquito Control</Link><span>/</span>
            <Link href="/toronto-mosquito-control" className="hover:text-white">Toronto</Link><span>/</span>
            <span className="text-white">{NEIGHBOURHOOD}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Mosquito Control in {NEIGHBOURHOOD}, Toronto</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            York Mills' prestigious ravine-adjacent estates face some of North York's most intense mosquito pressure from the Don Valley below. BuzzSkito provides professional barrier spray so York Mills families can enjoy their grounds all season.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get a Free Quote</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-brand-900 text-white py-4 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-medium text-brand-200">
          <span>✓ Health Canada–Approved Formula</span>
          <span>✓ Safe for Kids &amp; Pets (30 min dry)</span>
          <span>✓ Up to 30-Day Protection</span>
          <span>✓ Rain-Back Guarantee</span>
          <span>✓ 5-Star Rated · 126 Reviews</span>
        </div>
      </section>

      
      {/* How It Works */}
      <section className="py-12 px-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-8 text-center">How BuzzSkito Mosquito Control Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Free Property Assessment', desc: 'We evaluate your property — identifying water features, dense vegetation, and mosquito pressure zones specific to your area.' },
              { step: '2', title: 'Professional Barrier Spray', desc: 'Our licensed technician applies Health Canada-approved formula to all vegetation, shrub interiors, leaf undersides, and fence lines using a precision backpack sprayer.' },
              { step: '3', title: '30-Day Protection Guarantee', desc: 'The barrier kills mosquitoes on contact and repels new ones for up to 30 days. If pests return within the window, we re-treat at no cost.' },
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
          <h2>The York Mills Mosquito Challenge</h2>
          <p>York Mills shares the same dynamic as Rosedale and Forest Hill: the neighbourhood's most desirable properties are the most exposed to mosquitoes. The Don Valley ravine that creates the dramatic topography and privacy of York Mills' estate lots also sustains the mosquito populations that affect those same properties each summer. The valley's permanent streams, seasonal wet areas, and sheltered microclimate produce reliable, season-long mosquito breeding habitat directly below York Mills' residential areas.</p>
          <p>BuzzSkito treats all resting vegetation on your York Mills property — shrubs, ornamental hedges, garden borders, the underside of accessible tree canopy, and any fence lines adjacent to ravine edges. For larger estate lots, we give particular attention to the property's ravine-facing perimeter and any naturalized transition zones between maintained grounds and the valley edge.</p>

          <h2>Part of Our Toronto Mosquito Control Network</h2>
          <p>We serve all of York Mills and North York. See our <Link href="/toronto-mosquito-control" className="text-brand-700 hover:underline">Toronto mosquito control</Link> page for city-wide coverage, or our pages for <Link href="/willowdale-mosquito-control" className="text-brand-700 hover:underline">Willowdale</Link> and <Link href="/rosedale-mosquito-control" className="text-brand-700 hover:underline">Rosedale</Link>.</p>


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
          <p className="text-sm text-gray-500 not-prose">Pricing is for standard residential lots up to 10,000 sq ft. Larger properties receive custom quotes. <Link href="/mosquito-control-pricing" className="text-brand-700 hover:underline">See full pricing details</Link> or <Link href="/contact" className="text-brand-700 hover:underline">get a free quote</Link>.</p>

          <h2>Why Professional Treatment Outperforms DIY</h2>
          <p>Citronella candles, essential oil sprays, and consumer foggers provide temporary relief in a small radius — typically 30 minutes to 2 hours in the immediate area of use. Professional barrier spray treats every resting surface on your entire property, creating a residual barrier that kills mosquitoes on contact for up to 30 days. The difference is coverage and duration: DIY products address symptoms; barrier spray addresses the source of activity on your lot.</p>
          <p>For a detailed comparison, see our <Link href="/mosquito-control-diy-vs-professional" className="text-brand-700 hover:underline">DIY vs Professional Mosquito Control</Link> guide.</p>

          <h2>When to Start Treatment</h2>
          <p>In the GTA, mosquito season typically runs from late April through September. The best time to book your first treatment is early-to-mid May, before populations peak. Starting early establishes a protective barrier before breeding cycles accelerate in June and July. <Link href="/blog/mosquito-season-gta-when-does-it-start" className="text-brand-700 hover:underline">Read our full seasonal timing guide</Link>.</p>


          <h2>Related Guides</h2>
          <ul>
            <li><Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{MOSQUITO_BLOGS.pillar.title}</Link></li>
            <li><Link href="/blog/mosquito-control-near-water-ravines-gta" className="text-brand-700 hover:underline">Mosquito Control Near Water: Ravines &amp; Waterfront Properties</Link></li>
            <li><Link href="/blog/is-mosquito-spray-safe-kids-pets" className="text-brand-700 hover:underline">Is Mosquito Spray Safe for Kids and Pets?</Link></li>
          </ul>
        </div>
      </section>


      {/* Testimonials */}
      <section className="py-12 px-4 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-2 text-center">What GTA Homeowners Say</h2>
          <p className="text-center text-gray-500 text-sm mb-8">From our 126 five-star Google reviews</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { author: 'Sarah M.', text: 'BuzzSkito treated our backyard and we noticed a huge difference immediately. No mosquitoes at our outdoor birthday party! The technician was professional and on time. Highly recommend.' },
              { author: 'Mike T.', text: 'Second year using BuzzSkito for the season package. Consistent, reliable, and actually works. Our backyard used to be unbearable by July — now we\u2019re out there every evening.' },
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
            <a href="https://g.page/r/CYytaw5LxucdEAE/review" target="_blank" rel="noopener noreferrer" className="text-brand-700 font-semibold text-sm hover:underline">Read all 126 reviews on Google &rarr;</a>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">FAQ – Mosquito Control in {NEIGHBOURHOOD}</h2>
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

      <CTASection heading={`Get a Free Mosquito Control Quote in ${NEIGHBOURHOOD}`} subtext="Protecting York Mills properties from Don Valley mosquitoes. No contracts." />
    </>
  )
}
