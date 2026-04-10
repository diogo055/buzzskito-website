import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema, howToSchema } from '@/lib/seo'
import { BUSINESS, MOSQUITO_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Control Milton | From $99 | BuzzSkito',
  description:
    'Mosquito control in Milton, ON. Professional barrier spray from $99. No contracts. Health Canada-approved. Call (289) 216-5030.',
  canonical: '/milton-mosquito-control',
})

const CITY = 'Milton'
const SLUG = '/milton-mosquito-control'
const TICK_SLUG = '/milton-tick-spray'
const NEIGHBOURHOODS = ['Bronte Meadows','Clarke','Coates','Dempsey','Dorset Park','Ford','Harrison','Hawthorne Village','Scott','Timberlea']
const FAQS = [
  {
    question: 'Do new Milton subdivisions near conservation areas have mosquito problems?',
    answer: "Yes — and often more than established neighbourhoods. New subdivisions in Milton's Coates, Harrison, and Scott communities are frequently built adjacent to engineered stormwater management ponds that are mandated by Halton Region conservation authority requirements. These ponds, designed to manage runoff from new development, provide excellent standing-water mosquito breeding habitat, particularly in early years before they are fully naturalized. Properties backing onto these ponds — which are in essentially every new Milton neighbourhood — benefit strongly from early-season barrier spray treatment.",
  },
  {
    question: 'Does Sixteen Mile Creek affect mosquito activity in Milton?',
    answer: "Sixteen Mile Creek runs through the western and central parts of Milton, with a wooded ravine system that supports active mosquito populations from May through September. The creek's floodplain is widest near Bronte Meadows and Clarke, where older established neighbourhoods back onto the valley. Milton's Conservation Halton lands along the creek corridor add further moist forest habitat. Properties within a few blocks of the creek ravine see higher early-season pressure than those further inland.",
  },
  {
    question: 'Are Rattlesnake Point and Crawford Lake a mosquito issue for Milton homeowners?',
    answer: "The Niagara Escarpment conservation areas — Rattlesnake Point, Crawford Lake, and Kelso — are primarily a tick concern rather than a direct mosquito source for most Milton homeowners, since the escarpment lands are largely upland and well-drained. However, the low-lying areas between the escarpment and Milton's developed communities do contribute to regional mosquito movement. If you spend time hiking these areas and then return to your yard, the risk is from exposure during recreation rather than from escarpment mosquitoes invading your property.",
  },
]

export default function MiltonMosquitoPage() {
  const lbSchema = localBusinessSchema({ areaServed: CITY, description: `Professional mosquito control service in ${CITY}, Ontario. Barrier spray for residential lawns serving all ${CITY} neighbourhoods.` })
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Mosquito Control ${CITY}`, description: `Professional mosquito barrier spray for residential properties in ${CITY}, Ontario.`, slug: SLUG, city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: CITY, url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema({ service: 'mosquito', city: 'Milton' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/milton-mosquito-control')) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/mosquito-control" className="hover:text-white">Mosquito Control</Link><span>/</span>
            <span className="text-white">{CITY}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Mosquito Control in {CITY}</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            From Sixteen Mile Creek&apos;s ravine corridor to stormwater ponds in Hawthorne Village — BuzzSkito delivers professional mosquito barrier spray to every Milton neighbourhood.
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
          <h2>Why Mosquito Pressure Is High in Milton</h2>
          <p>Milton is one of Canada&apos;s fastest-growing municipalities, and that rapid development has created a unique mosquito challenge. As new subdivisions are carved from agricultural and natural land, Conservation Halton requires developers to build stormwater management ponds throughout new communities. These ponds — visible in virtually every Milton subdivision from Coates to Scott to Harrison — are engineered to manage runoff, but they also function as effective mosquito breeding sites, particularly in their first few years before they naturalize. Milton homeowners in newer communities often have a stormwater pond within view of their backyard fence.</p>
          <p>On the western side of the city, Sixteen Mile Creek runs through a forested ravine corridor that generates natural mosquito pressure for established neighbourhoods like Bronte Meadows and Clarke. The combined effect of engineered ponds in new areas and natural creek habitat in older ones means mosquito pressure is present across all of Milton&apos;s communities throughout the season.</p>

          <h2>Milton Neighbourhoods We Serve</h2>
          <p>BuzzSkito provides mosquito control across all Milton communities, including:</p>
          <div className="not-prose flex flex-wrap gap-2 mb-6">
            {NEIGHBOURHOODS.map((n) => <span key={n} className="text-sm bg-brand-50 border border-brand-200 text-brand-700 px-3 py-1.5 rounded-full">{n}</span>)}
          </div>

          <h2>Our Milton Mosquito Treatment Process</h2>
          <ul>
            <li><strong>Stormwater pond proximity assessment</strong> — We map the distance and orientation of any nearby ponds or creek frontage relative to your yard.</li>
            <li><strong>Full-yard barrier spray</strong> — All vegetation, hedges, ornamental grasses, fence lines, and shrub borders treated on every visit.</li>
            <li><strong>28-day residual protection</strong> — Health Canada–approved formula works continuously between visits; safe for kids and pets after 30 minutes.</li>
            <li><strong>Seasonal program</strong> — Five visits May through September, timed to Sixteen Mile Creek and pond-edge emergence patterns.</li>
          </ul>

          <h2>Also Providing Tick Control in Milton</h2>
          <p>Milton&apos;s proximity to Halton Hills conservation areas and the Niagara Escarpment trail corridors places homeowners at real tick risk, particularly those in western and southern Milton communities. Ask about our <Link href={TICK_SLUG} className="text-brand-700 hover:underline">Milton tick spray service</Link> — combining both treatments provides complete yard protection through the season.</p>

          <h2>Related Guides</h2>
          <ul>
            <li><Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{MOSQUITO_BLOGS.pillar.title}</Link></li>
            {MOSQUITO_BLOGS.supporting.slice(0, 2).map(b => <li key={b.slug}><Link href={`/blog/${b.slug}`} className="text-brand-700 hover:underline">{b.title}</Link></li>)}
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
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">FAQ – Mosquito Control in {CITY}</h2>
          <div className="space-y-3">
            {FAQS.map(({ question, answer }) => (
              <details key={question} className="bg-white rounded-xl border border-brand-100 group">
                <summary className="cursor-pointer px-5 py-4 font-semibold text-brand-900 list-none flex justify-between items-center">
                  <span>{question}</span>
                  <svg className="w-5 h-5 shrink-0 group-open:rotate-180 transition-transform text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <p className="px-5 pb-4 text-gray-600 text-sm">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading={`Get a Free Mosquito Control Quote in ${CITY}`} subtext="Protect your Milton property from mosquitoes this season. No contracts." />
    </>
  )
}
