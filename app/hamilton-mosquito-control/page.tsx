import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS, MOSQUITO_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Control Hamilton | From $99, No Contracts | BuzzSkito',
  description:
    'Professional mosquito barrier spray in Hamilton. Cootes Paradise, Dundas Valley, and Red Hill Creek drive intense mosquito pressure. Serving Ancaster, Dundas, Stoney Creek, Waterdown, Westdale & all Hamilton. Call (289) 216-5030.',
  canonical: '/hamilton-mosquito-control',
})

const CITY = 'Hamilton'
const SLUG = '/hamilton-mosquito-control'
const TICK_SLUG = '/hamilton-tick-spray'
const NEIGHBOURHOODS = ['Stoney Creek','Dundas','Ancaster','Westdale','Waterdown','Ainslie Wood','Downtown Hamilton','Mount Hope','Binbrook','Flamborough','Rymal','Glanbrook']

const FAQS = [
  {
    question: 'How much does mosquito control cost in Hamilton?',
    answer: 'BuzzSkito mosquito control in Hamilton starts from $99 per application. Properties near Cootes Paradise, the Niagara Escarpment, or Red Hill Creek Valley typically benefit most from the full seasonal package for continuous protection. No contracts. Call (289) 216-5030 for a free Hamilton quote.',
  },
  {
    question: 'Why does Hamilton have such a significant mosquito problem?',
    answer: "Hamilton's geography creates a perfect combination of mosquito breeding habitat. Cootes Paradise — one of the Great Lakes basin's largest urban wetlands — sits directly adjacent to Hamilton's west end residential areas, producing enormous quantities of mosquitoes from May through September. Red Hill Creek, Spencer Creek, and the dozens of smaller watercourses that flow through Hamilton neighbourhoods provide additional breeding sites. The Niagara Escarpment channels moisture into the lower city, keeping vegetation wet and creating the cool, humid microclimate adult mosquitoes prefer for resting. Neighbourhoods in Westdale, Ainslie Wood, Dundas, and Ancaster — which back onto ravines, creeks, or conservation land — experience the most intense annual pressure.",
  },
  {
    question: 'What areas of Hamilton have the worst mosquito problems?',
    answer: "The highest mosquito pressure in Hamilton is found in areas immediately adjacent to Cootes Paradise (Westdale, Ainslie Wood, Ancaster), along Red Hill Creek (east Hamilton), along Spencer Creek (Dundas, Greensville), and near Binbrook Conservation Area in Glanbrook. Flamborough and Waterdown also face meaningful pressure due to proximity to Spencer Creek headwaters and rural wetlands. Even interior Hamilton neighbourhoods that aren't directly adjacent to watercourses see significant mosquito activity because adult mosquitoes can travel 3–5 km from breeding sites.",
  },
  {
    question: 'What is residential mosquito spray service in Hamilton?',
    answer: "Residential mosquito spray — also called barrier spray or barrier treatment — is a professional service where a licensed technician applies a fine residual insecticide mist to all the vegetation on your property: shrubs, hedges, garden beds, fence lines, and the underside of leaves up to 10 feet high. This is where mosquitoes rest during the day. The formula kills mosquitoes on contact and remains active on treated surfaces for up to 30 days, continuously eliminating mosquitoes that enter the treated zone. BuzzSkito's residential mosquito spray service in Hamilton uses Health Canada–approved, water-based formulas that are safe for children and pets after a 30-minute drying period.",
  },
  {
    question: 'How many mosquito treatments does a Hamilton property need per season?',
    answer: "Most Hamilton properties benefit from five treatments spaced 21–28 days apart, running from May through September. Properties immediately adjacent to Cootes Paradise, Red Hill Creek, or Spencer Creek — which face continuous re-pressure from large adjacent breeding areas — may benefit from a sixth treatment during the peak July–August window. Hamilton's season typically starts earlier in the spring than outer GTA communities because the lower city's microclimate warms faster than the Escarpment.",
  },
  {
    question: 'How much does professional mosquito spray cost in Hamilton?',
    answer: "Mosquito spray pricing varies by property size and the number of treatments in a seasonal program. BuzzSkito provides free quotes for all Hamilton properties — call (289) 216-5030 or use our online contact form. There are no contracts: you can book individual treatments or a full seasonal program. Our free re-spray guarantee means if mosquitoes return before your next scheduled treatment, we come back at no cost.",
  },
  {
    question: 'Is the mosquito spray safe for children and pets in Hamilton?',
    answer: "Yes. BuzzSkito uses Health Canada–approved, water-based barrier spray formulas for all residential treatments in Hamilton. Children and pets can return to the treated yard 30 minutes after the spray has dried. The product bonds to leaf surfaces and vegetation where mosquitoes rest — not to grass at ground level where children play. We observe buffer zones around vegetable gardens, sandboxes, and pet areas on every property we treat.",
  },
  {
    question: 'Does BuzzSkito provide tick control in Hamilton too?',
    answer: "Yes. Hamilton's Dundas Valley, Escarpment trail system, and conservation areas are established blacklegged tick habitat. The Dundas Valley Conservation Area, Westfield Heritage Village trails, and the Bruce Trail through the Escarpment all carry tick risk. Many Hamilton homeowners bundle mosquito and tick control in a single visit for complete yard protection. See our Hamilton tick spray service for details.",
  },
]

export default function HamiltonMosquitoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: CITY, description: `Professional mosquito control service in ${CITY}, Ontario. Barrier spray for residential lawns serving all ${CITY} neighbourhoods.` })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Mosquito Control ${CITY}`, description: `Professional mosquito barrier spray for residential properties in ${CITY}, Ontario.`, slug: SLUG, city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: CITY, url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(SLUG)) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/mosquito-control" className="hover:text-white">Mosquito Control</Link><span>/</span>
            <span className="text-white">{CITY}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Mosquito Control in {CITY}</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            Cootes Paradise, the Dundas Valley, and Hamilton&apos;s extensive creek system create some of Southern Ontario&apos;s most intense mosquito pressure. BuzzSkito delivers professional barrier spray across all Hamilton neighbourhoods — up to 30 days of protection per visit.
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

      {/* Pricing bar */}
      <section className="bg-amber-50 border-y border-amber-200 py-5 px-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            <p className="font-extrabold text-brand-900 text-base">Mosquito Control Pricing in {CITY}</p>
            <p className="text-gray-600 text-sm mt-0.5">Professional mosquito control from <strong className="text-brand-700">$99</strong> per treatment · No contracts</p>
          </div>
          <Link href="/contact" className="shrink-0 bg-amber-500 hover:bg-amber-400 text-white font-bold px-6 py-2.5 rounded-full text-sm transition-colors">Get a Free Quote</Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-14 px-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-8 text-center">How BuzzSkito Mosquito Control Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Free Property Assessment', desc: 'We evaluate your Hamilton property — identifying Escarpment exposure, creek proximity, and mosquito pressure zones specific to your neighbourhood.' },
              { step: '2', title: 'Professional Barrier Spray', desc: 'Our licensed technician applies Health Canada-approved formula to all vegetation, shrub interiors, leaf undersides, fence lines, and property perimeters using a precision backpack sprayer.' },
              { step: '3', title: '30-Day Protection Guarantee', desc: 'The barrier kills mosquitoes on contact and repels new ones for up to 30 days. If pests return within the protection window, we re-treat at no cost.' },
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
          <h2>Why Hamilton Has Intense Mosquito Pressure</h2>
          <p>Hamilton is one of the GTA&apos;s most challenging cities for mosquito control because of its unique combination of natural features. Cootes Paradise — a 250-hectare wetland complex at the western end of Hamilton Harbour — is one of the largest urban wetlands in the Great Lakes basin. It generates enormous quantities of mosquitoes from May through September, and its proximity to Westdale, Ainslie Wood, and Ancaster means that residents in Hamilton&apos;s west end face continuous re-pressure from this massive breeding source throughout the season.</p>
          <p>Red Hill Creek runs north through the east end from Glanbrook to the Harbour, providing a second major mosquito corridor. Spencer Creek drains the Dundas Valley and flows through Dundas, Greensville, and Ancaster. The Niagara Escarpment channels moisture and creates cool, humid air pockets in the lower city that adult mosquitoes exploit as daytime resting habitat. Combined, these features give Hamilton a mosquito season that often starts earlier than other GTA cities and lasts well into September.</p>
          <p>For Hamilton homeowners, professional mosquito barrier spray is the most reliable way to reclaim backyard space. BuzzSkito&apos;s service targets every surface on your property where mosquitoes rest — shrubs, hedges, under-deck vegetation, fence lines, and garden bed borders — providing up to 30 days of continuous protection after each treatment.</p>

          <h2>Hamilton Neighbourhoods We Serve for Mosquito Control</h2>
          <div className="not-prose flex flex-wrap gap-2 mb-6">
            {NEIGHBOURHOODS.map((n) => <span key={n} className="text-sm bg-brand-50 border border-brand-200 text-brand-700 px-3 py-1.5 rounded-full">{n}</span>)}
          </div>
          <p>We serve all Hamilton addresses — from the Mountain to the Harbourfront, from Flamborough to Stoney Creek. Call <a href={BUSINESS.phoneHref} className="text-brand-700 hover:underline font-semibold">{BUSINESS.phone}</a> to confirm service at your specific address.</p>

          <h2>What&apos;s Included in Every Hamilton Mosquito Treatment</h2>
          <ul>
            <li><strong>Full-yard barrier spray</strong> — We treat all vegetation, shrubs, hedges, garden beds, fence lines, and under-canopy surfaces where mosquitoes rest during the day. Coverage up to 10 feet high.</li>
            <li><strong>Up to 30-day residual protection</strong> — The formula bonds to leaf surfaces as it dries and continues killing mosquitoes for up to 30 days after application.</li>
            <li><strong>Rain-resistance guarantee</strong> — Significant rain within one hour of application? We return and re-treat at no cost.</li>
            <li><strong>Safe for kids and pets</strong> — Health Canada–approved water-based formula. Children and pets can return to the yard 30 minutes after the spray has dried.</li>
            <li><strong>Free re-spray guarantee</strong> — If mosquitoes return within the protection window, we come back at no additional charge.</li>
            <li><strong>Written service documentation</strong> — Every visit includes a detailed service log delivered by SMS after treatment.</li>
          </ul>

          <h2>Recommended Hamilton Mosquito Treatment Schedule</h2>
          <p>We recommend five treatments per season for most Hamilton properties: early May, June, July, August, and September. Properties adjacent to Cootes Paradise, Red Hill Creek, or Spencer Creek may benefit from a sixth treatment during the peak July–August window. Early May treatment is especially important in Hamilton because the lower city&apos;s microclimate means mosquitoes emerge earlier here than in many GTA suburbs.</p>

          <h2>Tick Control in Hamilton</h2>
          <p>Hamilton&apos;s Dundas Valley Conservation Area, Escarpment trails, and the Bruce Trail corridor are established blacklegged tick habitat. Many Hamilton homeowners bundle mosquito and tick control in a single visit. See our <Link href={TICK_SLUG} className="text-brand-700 hover:underline">Hamilton tick spray service</Link> for details.</p>

          <h2>Related Guides</h2>
          <ul>
            <li><Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{MOSQUITO_BLOGS.pillar.title}</Link></li>
            <li><Link href="/blog/west-nile-virus-mosquito-risk-ontario" className="text-brand-700 hover:underline">West Nile Virus &amp; Mosquito Risk in Ontario</Link></li>
            <li><Link href="/blog/mosquito-tick-control-hamilton-burlington" className="text-brand-700 hover:underline">Mosquito &amp; Tick Control in Hamilton and Burlington</Link></li>
            {MOSQUITO_BLOGS.supporting.slice(0, 2).map(b => <li key={b.slug}><Link href={`/blog/${b.slug}`} className="text-brand-700 hover:underline">{b.title}</Link></li>)}
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-14 px-4 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-2 text-center">What Hamilton Homeowners Say</h2>
          <p className="text-center text-gray-500 text-sm mb-8">From our 126 five-star Google reviews</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { author: 'Steve R.', location: 'Westdale', text: 'Living near Cootes Paradise means mosquitoes are a given every summer. BuzzSkito is the first thing that actually made a difference. Professional service, great communication, and our yard is usable again.' },
              { author: 'Karen L.', location: 'Dundas', text: 'The Spencer Creek valley makes our neighbourhood a mosquito hotspot. After the first BuzzSkito treatment the change was dramatic — we can actually sit outside in the evening now.' },
              { author: 'Paul G.', location: 'Ancaster', text: 'Tried citronella, bug zappers, everything. One BuzzSkito treatment did more than years of DIY attempts. The technician was knowledgeable about our specific area and the results speak for themselves.' },
              { author: 'Jennifer W.', location: 'Stoney Creek', text: 'Our backyard backs onto the Escarpment and mosquitoes were terrible. BuzzSkito treated it thoroughly and the difference was immediate. Signed up for the full season package.' },
            ].map(({ author, location, text }) => (
              <div key={author} className="bg-brand-50 rounded-2xl p-6 border border-brand-100">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-gray-700 text-sm mb-3 italic">&ldquo;{text}&rdquo;</p>
                <p className="text-brand-800 font-semibold text-sm">{author} — <span className="text-gray-500 font-normal">{location}, Hamilton</span></p>
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
          <p className="text-center mt-6 text-sm text-gray-500">
            More questions? Call <a href={BUSINESS.phoneHref} className="text-brand-700 underline">{BUSINESS.phone}</a> or see our <Link href="/frequently-asked-question" className="text-brand-700 underline">full FAQ</Link>.
          </p>
        </div>
      </section>

      <CTASection heading={`Get a Free Mosquito Control Quote in ${CITY}`} subtext="Serving all Hamilton neighbourhoods from Flamborough to Stoney Creek. No contracts, guaranteed results." />
    </>
  )
}
