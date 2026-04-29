import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema, howToSchema } from '@/lib/seo'
import { BUSINESS, TICK_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Tick Spray Georgetown | From $99',
  description:
    'Professional tick spray in Georgetown, Halton Hills. Protect your yard from blacklegged ticks. From $99. Call (289) 216-5030.',
  canonical: '/georgetown-tick-spray',
})

const CITY = 'Georgetown'
const NEIGHBOURHOODS = ['Old Georgetown','Glen Williams','Norval','Stewarttown','Limehouse','Silver Creek','Halton Hills']
const FAQS = [
  {
    question: 'How much does tick spray cost in Georgetown?',
    answer: 'Tick spray in Georgetown starts from $99 per application. Properties near the Credit River valley, Silver Creek Conservation Area, or any wooded area benefit most from both spring and fall treatments. No contracts. Call (289) 216-5030.',
  },
  {
    question: 'Is the Credit River valley near Georgetown a tick risk?',
    answer: 'Yes — the Credit River valley through Georgetown and Glen Williams is confirmed blacklegged tick habitat throughout the season. The valley provides cool, moist, forested conditions that ticks require, and the Credit River corridor connects Georgetown\'s tick habitat to a much larger regional system. Halton Region includes Georgetown in its tick monitoring program, and residents along the Credit River are encouraged to take tick precautions.',
  },
  {
    question: 'What is Silver Creek Conservation Area\'s role in Georgetown tick risk?',
    answer: 'Silver Creek Conservation Area is a significant local tick habitat. Its forested and meadow sections provide ideal conditions for blacklegged ticks throughout the questing season from April to November. Properties near Silver Creek or backing onto any forested section of the conservation area face direct tick exposure risk, particularly in the nymph season of May through July.',
  },
  {
    question: 'Does the Niagara Escarpment trail through Halton Hills add to Georgetown\'s tick risk?',
    answer: 'Yes. The Niagara Escarpment and its associated trail corridors running through Halton Hills create additional tick habitat beyond the Credit River valley. Limehouse and the rural edges of Georgetown are adjacent to escarpment trail sections. Deer movement along the escarpment corridor carries ticks throughout the area, extending risk to properties well beyond the immediate trail edges.',
  },
]

export default function GeorgetownTickPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Tick Spray ${CITY}`, description: `Professional tick barrier spray service in ${CITY}, Ontario. Kills ticks at all life stages.`, slug: '/georgetown-tick-spray', city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Tick Control', url: '/tick-control' }, { name: CITY, url: '/georgetown-tick-spray' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema({ service: 'tick', city: 'Georgetown' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/georgetown-tick-spray')) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-amber-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/tick-control" className="hover:text-white">Tick Control</Link><span>/</span>
            <span className="text-white">{CITY}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Tick Control in {CITY}</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            Georgetown's Credit River valley and Silver Creek Conservation Area are confirmed blacklegged tick habitat throughout the season. The Niagara Escarpment corridor adds further exposure risk. BuzzSkito protects your family from Lyme disease.
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
          <span>✓ Lyme Disease Prevention</span>
          <span>✓ 5-Star Rated · 129 Reviews</span>
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
          <h2 className="text-2xl font-extrabold text-brand-900 mb-8 text-center">How BuzzSkito Tick Control Works</h2>
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
          <h2>Why Tick Spray Is Crucial in Georgetown</h2>
          <p>Georgetown is surrounded by some of the richest natural habitats in Halton Region — and that makes it one of the higher-risk communities in the western GTA for blacklegged tick exposure. The Credit River valley runs directly through Georgetown and into Glen Williams, creating a continuous forested and riparian corridor that is confirmed blacklegged tick habitat. Halton Region includes Georgetown in its formal tick monitoring program, recognizing the risk this landscape poses to local residents.</p>
          <p>Silver Creek Conservation Area is another significant local risk zone. Its mixture of forest, meadow, and wetland edges create the kind of varied habitat where tick populations establish and persist. The Niagara Escarpment trail corridor through Halton Hills — including the Limehouse area — provides additional forested movement routes for deer (the primary adult tick host), extending tick exposure beyond the immediate river valley to a broader swath of the community. For Georgetown homeowners, professional barrier spray applied in late May and again in late August is the most effective seasonal protection strategy.</p>

          <h2>Tick Hotspots in Georgetown</h2>
          <ul>
            <li>Credit River valley corridor through Georgetown and Glen Williams</li>
            <li>Silver Creek Conservation Area forest and meadow edges</li>
            <li>Niagara Escarpment trail corridor through Limehouse and rural Halton Hills</li>
            <li>Norval village Credit River floodplain edges</li>
            <li>Stewarttown and rural property woodlot margins</li>
          </ul>

          <h2>Georgetown Neighbourhoods We Serve for Tick Control</h2>
          <div className="not-prose flex flex-wrap gap-2 mb-6">
            {NEIGHBOURHOODS.map((n) => <span key={n} className="text-sm bg-amber-50 border border-amber-200 text-amber-700 px-3 py-1.5 rounded-full">{n}</span>)}
          </div>

          <h2>What Our Georgetown Tick Treatment Includes</h2>
          <ul>
            <li>Barrier spray targeting lawn edges, leaf litter, garden beds, fence lines, under decks, and woodpiles</li>
            <li>Up to 30 days of tick protection per treatment</li>
            <li>Kills adult ticks, nymphs, and larvae on contact</li>
            <li>Health Canada–approved formula, safe for children and pets after 30 minutes</li>
            <li>Free reapplication guarantee if ticks return</li>
          </ul>

          <h2>Also Providing Mosquito Control in Georgetown</h2>
          <p>Many Georgetown homeowners combine tick and mosquito control in the same visit. See our <Link href="/georgetown-mosquito-control" className="text-brand-700 hover:underline">Georgetown mosquito control service</Link>.</p>


          <h2>Compare Georgetown Pest Control Options</h2>
          <p>Georgetown has confirmed blacklegged tick exposure — see our specialist pest control guide: <Link href="/pest-control-georgetown" className="text-brand-700 hover:underline font-semibold">Pest Control in Georgetown</Link> for why a mosquito and tick specialist delivers better Lyme disease prevention than a general pest company.</p>
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
          <h2 className="text-2xl font-extrabold text-brand-900 mb-2 text-center">What GTA Homeowners Say About Our Tick Control</h2>
          <p className="text-center text-gray-500 text-sm mb-8">From our 129 five-star Google reviews</p>
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
            <a href="https://g.page/r/CYytaw5LxucdEAE/review" target="_blank" rel="noopener noreferrer" className="text-brand-700 font-semibold text-sm hover:underline">Read all 129 reviews on Google &rarr;</a>
          </div>
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
