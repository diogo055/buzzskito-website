import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema, howToSchema } from '@/lib/seo'
import { BUSINESS, MOSQUITO_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Control Alton Village Burlington | BuzzSkito',
  description:
    'Professional mosquito control in Alton Village, Burlington. Health Canada-approved barrier spray from $99. Safe for kids & pets. Call (289) 216-5030.',
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
    answer: "Stormwater ponds are one of the most consistent mosquito sources in newer GTA developments. In Alton Village, these ponds are distributed throughout the community, meaning virtually every home is within the dispersal range of at least one pond breeding site. The City of Burlington manages these ponds for drainage and stormwater quality — not for mosquito control. Property-level barrier spray is the most effective residential solution.",
  },
  {
    question: 'When is mosquito season in Alton Village?',
    answer: "Alton Village's mosquito season runs from early May through September. The stormwater ponds warm quickly in spring, often producing emergence earlier than at natural water bodies. Peak activity is from late May through July. Activity remains meaningful through September due to the ponds' year-round water availability.",
  },
  {
    question: 'How many treatments does an Alton Village home need per season?',
    answer: "For pond-adjacent Alton Village properties, we recommend 4 treatments from May through September, spaced 21–28 days apart. Properties directly backing onto a stormwater pond may benefit from 5 treatments. Call (289) 216-5030 for a free assessment at your specific Alton Village address.",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/alton-village-mosquito-control')) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1 flex-wrap">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/mosquito-control" className="hover:text-white">Mosquito Control</Link><span>/</span>
            <Link href="/burlington-mosquito-spray" className="hover:text-white">Burlington</Link><span>/</span>
            <span className="text-white">{NEIGHBOURHOOD}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Mosquito Control in {NEIGHBOURHOOD}, {CITY}</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            Alton Village's stormwater management ponds create reliable seasonal mosquito breeding in this north Burlington community. BuzzSkito's professional barrier spray gives you up to 30 days of protection per treatment.
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
          <h2>Stormwater Ponds and Mosquitoes in Alton Village</h2>
          <p>Alton Village was built with stormwater management ponds distributed throughout the development — a requirement in newer Burlington communities to handle drainage from large paved areas. While these ponds serve an important infrastructure function, they also create predictable, season-long mosquito breeding habitat. Ponds warm quickly in spring, maintain water year-round, and develop the shallow aquatic margins that support mosquito larval development from May through September.</p>
          <p>BuzzSkito's barrier spray treats all resting vegetation around your Alton Village property — shrubs, fence lines, garden borders — providing a protective layer that eliminates mosquitoes arriving from nearby ponds before they reach your outdoor living spaces. Treatment delivers up to 30 days of residual protection per visit.</p>

          <h2>Part of Our Burlington Mosquito Control Network</h2>
          <p>We serve all of Alton Village and surrounding Burlington. See our <Link href="/burlington-mosquito-spray" className="text-brand-700 hover:underline">Burlington mosquito control</Link> page for city-wide coverage, or our pages for <Link href="/aldershot-mosquito-control" className="text-brand-700 hover:underline">Aldershot</Link> and <Link href="/roseland-mosquito-control" className="text-brand-700 hover:underline">Roseland</Link>.</p>

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

      <CTASection heading={`Get a Free Mosquito Control Quote in ${NEIGHBOURHOOD}`} subtext="Protecting Alton Village properties from stormwater pond mosquitoes. No contracts." />
    </>
  )
}
