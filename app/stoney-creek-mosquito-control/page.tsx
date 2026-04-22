import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema, howToSchema } from '@/lib/seo'
import { BUSINESS, MOSQUITO_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Control Stoney Creek | From $99',
  description:
    'Professional mosquito control in Stoney Creek, Hamilton. Barrier spray near Lake Ontario from $99. Safe for kids & pets. Call (289) 216-5030.',
  canonical: '/stoney-creek-mosquito-control',
})

const NEIGHBOURHOOD = 'Stoney Creek'
const CITY = 'Hamilton'
const SLUG = '/stoney-creek-mosquito-control'

const FAQS = [
  {
    question: 'Why does Stoney Creek have significant mosquito pressure?',
    answer: "Stoney Creek faces mosquito pressure from multiple geographic sources. The Lake Ontario shoreline runs along the community's north side, generating waterfront mosquito activity from shoreline vegetation and high-humidity coastal conditions. Stoney Creek Conservation Area and Battlefield Park contain mature forest, wetlands, and stream corridors that produce inland mosquito populations. The Niagara Escarpment cuts through upper Stoney Creek, adding escarpment seepage and ravine habitat to the mix.",
  },
  {
    question: 'How does the Lake Ontario shoreline affect Stoney Creek mosquitoes?',
    answer: "The Lake Ontario waterfront along lower Stoney Creek creates a high-humidity coastal zone that extends mosquito activity later into evening hours. Shoreline vegetation, the Fifty Point Conservation Area to the east, and the Confederation Park area to the west all contain waterfront breeding habitat. Properties in lower Stoney Creek — particularly those south of the QEW near the lake — experience the most direct waterfront-related pressure.",
  },
  {
    question: 'How many treatments does a Stoney Creek property need?',
    answer: "Most Stoney Creek properties benefit from 4–5 treatments spaced 21–28 days apart from May through September. Waterfront properties near Lake Ontario and those adjacent to Stoney Creek Conservation Area may benefit from the full 5-treatment program. Upper Stoney Creek properties near the escarpment face similar pressure from ravine sources. Call (289) 216-5030 for a free assessment.",
  },
  {
    question: 'Does Battlefield Park create mosquito issues for nearby homes?',
    answer: "Battlefield Park — the site of the historic Battle of Stoney Creek — contains mature trees, dense vegetation, and low-lying areas that provide mosquito resting and breeding habitat. Properties adjacent to the park experience elevated mosquito activity, particularly during evening hours when mosquitoes disperse from the park's sheltered vegetation into surrounding residential areas.",
  },
  {
    question: 'Does BuzzSkito serve all of Stoney Creek?',
    answer: "Yes. We serve all Stoney Creek from the Lake Ontario waterfront through to upper Stoney Creek on the escarpment. This includes properties near Battlefield Park, Stoney Creek Conservation Area, and all residential streets. Call (289) 216-5030 to confirm service at your specific address.",
  },
]

export default function StoneyCreekMosquitoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: `${NEIGHBOURHOOD}, ${CITY}` })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Mosquito Control ${NEIGHBOURHOOD}`, description: `Professional mosquito barrier spray for residential properties in ${NEIGHBOURHOOD}, ${CITY}.`, slug: SLUG, city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: 'Hamilton', url: '/hamilton-mosquito-control' }, { name: NEIGHBOURHOOD, url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema({ service: 'mosquito', city: 'Hamilton' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/stoney-creek-mosquito-control')) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1 flex-wrap">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/mosquito-control" className="hover:text-white">Mosquito Control</Link><span>/</span>
            <Link href="/hamilton-mosquito-control" className="hover:text-white">Hamilton</Link><span>/</span>
            <span className="text-white">{NEIGHBOURHOOD}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Mosquito Control in {NEIGHBOURHOOD}, {CITY}</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            Stoney Creek's Lake Ontario shoreline, conservation areas, and escarpment ravines create multi-source mosquito pressure from waterfront to escarpment. BuzzSkito's barrier spray gives Stoney Creek families 30-day protection per treatment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/free-yard-assessment" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get a Free Quote</Link>
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
          <h2>Stoney Creek's Waterfront-to-Escarpment Mosquito Problem</h2>
          <p>Stoney Creek stretches from the <strong>Lake Ontario shoreline</strong> south to the <strong>Niagara Escarpment</strong>, and mosquito pressure exists across this entire elevation range. Along the waterfront, shoreline vegetation and the high-humidity coastal microclimate sustain mosquito activity that extends well into evening hours. <strong>Battlefield Park</strong> — the historic site of the Battle of Stoney Creek — contains mature trees and dense understory vegetation that provide prime mosquito resting habitat in the heart of the community.</p>
          <p>Inland, <strong>Stoney Creek Conservation Area</strong> encompasses wooded ravines, seasonal streams, and wetland pockets that produce mosquito populations dispersing into adjacent residential areas. Upper Stoney Creek properties near the escarpment face additional pressure from escarpment seepage and ravine corridors. BuzzSkito's barrier spray creates a treated zone around your property — targeting all resting vegetation on your lot — providing up to 30 days of protection between treatments regardless of which source is driving pressure on your property.</p>

          <h2>Part of Our Hamilton Mosquito Control Network</h2>
          <p>We serve all of Stoney Creek and surrounding Hamilton. See our <Link href="/hamilton-mosquito-control" className="text-brand-700 hover:underline">Hamilton mosquito control</Link> page for city-wide coverage, or our pages for <Link href="/ancaster-mosquito-control" className="text-brand-700 hover:underline">Ancaster</Link> and <Link href="/dundas-mosquito-control" className="text-brand-700 hover:underline">Dundas</Link>.</p>


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
          <p className="text-sm text-gray-500 not-prose">Pricing is for standard residential lots up to 10,000 sq ft. Larger properties receive custom quotes. <Link href="/mosquito-control-pricing" className="text-brand-700 hover:underline">See full pricing details</Link> or <Link href="/free-yard-assessment" className="text-brand-700 hover:underline">get a free quote</Link>.</p>

          <h2>Why Professional Treatment Outperforms DIY</h2>
          <p>Citronella candles, essential oil sprays, and consumer foggers provide temporary relief in a small radius — typically 30 minutes to 2 hours in the immediate area of use. Professional barrier spray treats every resting surface on your entire property, creating a residual barrier that kills mosquitoes on contact for up to 30 days. The difference is coverage and duration: DIY products address symptoms; barrier spray addresses the source of activity on your lot.</p>
          <p>For a detailed comparison, see our <Link href="/mosquito-control-diy-vs-professional" className="text-brand-700 hover:underline">DIY vs Professional Mosquito Control</Link> guide.</p>

          <h2>When to Start Treatment</h2>
          <p>In the GTA, mosquito season typically runs from late April through September. The best time to book your first treatment is early-to-mid May, before populations peak. Starting early establishes a protective barrier before breeding cycles accelerate in June and July. <Link href="/blog/mosquito-season-gta-when-does-it-start" className="text-brand-700 hover:underline">Read our full seasonal timing guide</Link>.</p>


          
          <h2>Tick Control Also Available</h2>
          <p>We also offer professional tick control in this area. Protect your family from Lyme disease with our targeted tick barrier spray. See our <Link href="/stoney-creek-tick-spray" className="text-brand-700 hover:underline">tick spray service</Link> or <Link href="/tick-control" className="text-brand-700 hover:underline">learn about tick control</Link>.</p>

          <h2>Related Guides</h2>
          <ul>
            <li><Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{MOSQUITO_BLOGS.pillar.title}</Link></li>
            <li><Link href="/blog/mosquito-control-near-water-ravines-gta" className="text-brand-700 hover:underline">Mosquito Control Near Water: Ravines &amp; Waterfront Properties</Link></li>
            <li><Link href="/blog/mosquito-season-gta-when-does-it-start" className="text-brand-700 hover:underline">When Does Mosquito Season Start in the GTA?</Link></li>
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

      <CTASection heading={`Get a Free Mosquito Control Quote in ${NEIGHBOURHOOD}`} subtext="Protecting Stoney Creek properties from waterfront and conservation area mosquitoes. No contracts." />
    </>
  )
}
