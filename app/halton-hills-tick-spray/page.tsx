import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import CityHero from '@/components/CityHero'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema, howToSchema } from '@/lib/seo'
import { TICK_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Halton Hills Tick Control 2026 · From $99 · 150+ Five-Star Reviews',
  description:
    "Halton Hills tick spray for Niagara Escarpment, Bruce Trail, and Hilton Falls Conservation properties. Health Canada-approved, from $99/treatment, BuzzSkito Bite-Free Guarantee. Georgetown, Acton, Glen Williams, Limehouse. Call (289) 216-5030.",
  canonical: '/halton-hills-tick-spray',
})

const CITY = 'Halton Hills'
const NEIGHBOURHOODS = ['Georgetown','Acton','Glen Williams','Norval','Limehouse','Ballinafad','Esquesing']
const FAQS = [
  {
    question: 'How much does tick spray cost in Halton Hills?',
    answer: 'Tick spray in Halton Hills starts from $99 per application. Given the high tick activity near the Credit River, Niagara Escarpment, and Hilton Falls Conservation Area, most Halton Hills properties are better served by the full seasonal program — five treatments spread roughly monthly from May through September — at $597 standalone, or $497 when added to any mosquito plan. No contracts. Call (289) 216-5030.',
  },
  {
    question: 'Why does Halton Hills have such high tick risk compared to other GTA communities?',
    answer: 'Halton Hills sits at the convergence of three significant natural systems: the Credit River watershed, Silver Creek, and the Niagara Escarpment. All three host well-established blacklegged tick populations confirmed by Halton Region Public Health. Unlike communities where ticks are limited to one ravine or creek, Halton Hills has multiple overlapping tick corridors covering both Georgetown and Acton, making it one of the consistently highest-risk areas in the western GTA.',
  },
  {
    question: 'Is Acton as high-risk for ticks as Georgetown?',
    answer: 'Yes. Acton sits near natural areas in the northern part of Halton Hills, with agricultural and forested land edges that support tick populations. While Georgetown\'s risk is tied to the Credit River and Silver Creek, Acton\'s risk comes from its rural fringe, farm field edges, and proximity to natural corridors. Both communities fall within Halton Region\'s tick awareness zone, and residents of both areas should consider professional tick control for their properties.',
  },
  {
    question: 'How does professional tick spray work differently from store-bought tick repellent?',
    answer: 'Store-bought repellents like DEET or permethrin products are personal repellents — they protect you while you\'re wearing them, but they don\'t reduce tick populations in your yard. Professional barrier spray is applied to your property\'s high-risk zones — lawn edges, leaf litter, garden borders, under decks — creating a treated zone that kills ticks before they can reach your family. BuzzSkito\'s treatment provides up to 30 days of yard-level protection per application.',
  },
]

export default function HaltonHillsTickPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Tick Spray ${CITY}`, description: `Professional tick barrier spray service in ${CITY}, Ontario. Kills ticks at all life stages.`, slug: '/halton-hills-tick-spray', city: CITY, price: null })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Tick Control', url: '/tick-control' }, { name: CITY, url: '/halton-hills-tick-spray' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema({ service: 'tick', city: 'Halton Hills' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/halton-hills-tick-spray', '2026-07-01')) }} />

      <CityHero
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Tick Control', href: '/tick-control' }, { label: CITY }]}
        title={<>{CITY} Tick Control</>}
        titleAccent={<>From $99 · 150+ Five-Star Reviews</>}
        subtitle={<>Halton Hills has among the highest tick risk in the western GTA. Credit River, Silver Creek, and the Niagara Escarpment trail system all host established blacklegged tick populations. BuzzSkito protects your family from Lyme disease.</>}
        image="/spray-front.webp"
        imageAlt="BuzzSkito technician treating lawn edges and garden borders for ticks"
      />

      
      {/* Trust bar */}
      <section className="bg-brand-900 text-white py-4 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-medium text-brand-200">
          <span>✓ Health Canada–Approved Formula</span>
          <span>✓ Safe for Kids &amp; Pets (30 min dry)</span>
          <span>✓ Up to 30-Day Protection</span>
          <span>✓ Lyme Disease Prevention</span>
          <span>✓ 5-Star Rated · 150+ Reviews</span>
        </div>
      </section>

      {/* Pricing bar */}
      <section className="bg-amber-50 border-y border-amber-200 py-5 px-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            <p className="font-extrabold text-brand-900 text-base">Tick Spray Pricing in {CITY}</p>
            <p className="text-gray-600 text-sm mt-0.5">Professional tick spray service from <strong className="text-amber-700">$99</strong> per treatment · No contracts</p>
          </div>
          <Link href="/free-yard-assessment" className="shrink-0 bg-amber-500 hover:bg-amber-400 text-white font-bold px-6 py-2.5 rounded-full text-sm transition-colors">Get a Free Quote</Link>
        </div>
      </section>

      
      {/* How It Works */}
      <section className="py-12 px-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <p className="kicker mb-3 text-center">Our Process</p>
          <h2 className="h2-display text-brand-900 mb-8 text-center">How BuzzSkito Tick Control Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Property Tick Assessment', desc: 'We identify tick habitat zones — lawn-to-woods transitions, leaf litter, garden bed edges, and fence lines on your property.' },
              { step: '2', title: 'Targeted Barrier Spray', desc: 'Our licensed technician applies Health Canada-approved formula to the specific 1-3 metre zones where ticks concentrate — precision treatment, not broadcast spraying.' },
              { step: '3', title: '30-Day Protection', desc: 'The residual formula kills ticks on contact and creates a barrier for up to 30 days. If ticks return within the window, we re-treat at no cost.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="text-center">
                <div className="w-14 h-14 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-extrabold mx-auto mb-4">{step}</div>
                <h3 className="font-bold text-brand-900 text-lg mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Why Tick Spray Is Crucial in Halton Hills</h2>
          <p>Halton Hills is one of the most tick-exposed municipalities in the western GTA, and Halton Region Public Health consistently flags it as a high-risk area. The reason is geography: Halton Hills is crossed by the Credit River from north to south, intersected by Silver Creek, and bordered on the west by the Niagara Escarpment — three separate natural systems that all independently host established blacklegged tick populations. The convergence of these habitats means tick exposure isn't limited to one corner of the municipality. It's region-wide.</p>
          <p>For Georgetown residents near the Credit River or Silver Creek, and for Acton residents near rural field edges, the risk is not hypothetical. Halton Region's tick surveillance program documents blacklegged tick activity across these areas every season. Ticks in Halton Hills are active from early April through late November — a full eight months of exposure if untreated. For families with children or pets who use the backyard regularly, the most effective annual defence against Lyme disease is a full seasonal barrier program — five treatments spread roughly monthly from May through September. Each application leaves a temporary residual, and deer, mice, and birds keep reintroducing ticks from the escarpment woodlots and river corridors next door, so the barrier has to be renewed rather than set once. Monthly coverage means no multi-month gap through the May–July nymph peak — the stage responsible for most Lyme transmission, and the one homeowners miss because nymphs are the size of a poppy seed — and it carries protection into the autumn, when adult ticks re-emerge and stay active into November in mild years.</p>

          <h2>Tick Hotspots in Halton Hills</h2>
          <ul>
            <li>Credit River valley corridor (Georgetown and Glen Williams)</li>
            <li>Silver Creek Conservation Area and surrounding forest edges</li>
            <li>Niagara Escarpment trail corridor (Limehouse and Ballinafad)</li>
            <li>Acton rural fringe and agricultural land edges</li>
            <li>Esquesing rural property woodlot margins</li>
          </ul>

          <h2>Halton Hills Neighbourhoods We Serve for Tick Control</h2>
          <div className="not-prose flex flex-wrap gap-2 mb-6">
            {NEIGHBOURHOODS.map((n) => <span key={n} className="text-sm bg-amber-50 border border-amber-200 text-amber-700 px-3 py-1.5 rounded-full">{n}</span>)}
          </div>

          <h2>What Our Halton Hills Tick Treatment Includes</h2>
          <ul>
            <li>Barrier spray targeting lawn edges, leaf litter, garden beds, fence lines, under decks, and woodpiles</li>
            <li>Up to 30 days of tick protection per treatment</li>
            <li>Kills adult ticks, nymphs, and larvae on contact</li>
            <li>Health Canada–approved formula, safe for children and pets after 30 minutes</li>
            <li>Free reapplication guarantee if ticks return</li>
          </ul>

          <h2>Also Providing Mosquito Control in Halton Hills</h2>
          <p>Many Halton Hills homeowners combine tick and mosquito control in the same visit. See our <Link href="/halton-hills-mosquito-control" className="text-brand-700 hover:underline">Halton Hills mosquito control service</Link>.</p>


          <h2>Compare Halton Hills Pest Control Options</h2>
          <p>Halton Hills has confirmed blacklegged tick exposure — see our specialist pest control guide: <Link href="/pest-control-halton-hills" className="text-brand-700 hover:underline font-semibold">Pest Control in Halton Hills</Link> for why a mosquito and tick specialist delivers better Lyme disease prevention than a general pest company.</p>
          <h2>Related Tick Control Guides</h2>
          <ul>
            <li><Link href={`/blog/${TICK_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{TICK_BLOGS.pillar.title}</Link></li>
            {TICK_BLOGS.supporting.slice(0, 2).map(b => <li key={b.slug}><Link href={`/blog/${b.slug}`} className="text-brand-700 hover:underline">{b.title}</Link></li>)}
          </ul>
        </div>
      </section>


      {/* Testimonials */}
      <section className="py-12 px-4 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <p className="kicker mb-3 text-center">Customer Reviews</p>
          <h2 className="h2-display text-brand-900 mb-2 text-center">What GTA Homeowners Say About Our Tick Control</h2>
          <p className="text-center text-gray-500 text-sm mb-8">From our 150+ five-star Google reviews</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { author: 'James K.', text: 'We had a tick problem near our garden border. BuzzSkito came out quickly, treated the whole yard, and gave us a detailed service log. Great experience and the kids can play outside again.' },
              { author: 'Priya R.', text: 'The technician explained exactly what product they were using and why it\u2019s safe for our dog. Treated the perimeter where ticks were coming from. Couldn\u2019t be happier with the results.' },
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

      <section className="py-10 px-4 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">FAQ – Tick Spray in {CITY}</h2>
          <div className="space-y-3">
            {FAQS.map(({ question, answer }) => (
              <details key={question} className="bg-white rounded-xl border border-brand-100 group open:shadow-md transition-shadow">
                <summary className="cursor-pointer px-5 py-4 font-semibold text-brand-900 list-none flex justify-between items-center rounded-xl hover:bg-brand-100/60 transition-colors">
                  <span>{question}</span>
                  <svg className="w-5 h-5 shrink-0 group-open:rotate-180 transition-transform text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <p className="px-5 pb-4 text-gray-600 text-sm">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <CTASection heading={`Get a Free Tick Spray Quote in ${CITY}`} subtext="Protect your family from Lyme disease. No contracts, guaranteed results." variant="dark" />
    </>
  )
}
