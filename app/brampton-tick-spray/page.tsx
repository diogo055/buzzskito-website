import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS, TICK_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Tick Spray Brampton | BuzzSkito – Free Quotes',
  description:
    "Professional tick spray in Brampton. Serving Castlemore, Heart Lake, Mount Pleasant, Fletcher's Meadow & all Brampton neighbourhoods. 30-day protection. Call (289) 216-5030.",
  canonical: '/brampton-tick-spray',
})

const CITY = 'Brampton'
const SLUG = '/brampton-tick-spray'
const NEIGHBOURHOODS = ["Mount Pleasant","Gore Meadows","Castlemore","Springdale","Bramalea","Creditview","Fletcher's Meadow","Heart Lake","Sandringham","Credit Valley"]

const FAQS = [
  {
    question: 'How much does tick spray cost in Brampton?',
    answer: 'Tick spray in Brampton starts from $99 per application. A 2-treatment seasonal program (spring + fall) starts from $179. Properties near Heart Lake Conservation Area, Humber River tributaries, or any wooded ravine typically benefit from both spring and fall treatments. No contracts. Call (289) 216-5030.',
  },
  {
    question: 'Are ticks a real problem in Brampton?',
    answer: "Yes. Brampton's ravines, creeks, and conservation lands are confirmed blacklegged tick habitat. Heart Lake Conservation Area, the Etobicoke Creek valley, and the Humber River tributaries running through Castlemore and Credit Valley support established tick populations. Properties adjacent to these natural corridors — particularly those with wooded edges or backing onto green space — face meaningful annual tick exposure risk.",
  },
  {
    question: 'Which Brampton neighbourhoods have the highest tick risk?',
    answer: "Heart Lake and Castlemore face the highest exposure due to proximity to Heart Lake Conservation Area. Credit Valley and Springdale properties that back onto Etobicoke Creek also have elevated risk. Gore Meadows and northern Brampton properties near Humber River tributaries should prioritize annual tick treatment.",
  },
  {
    question: 'When should Brampton homeowners schedule tick treatment?',
    answer: "We recommend your first tick treatment in late May or early June to target nymphs — the most dangerous tick life stage because they're tiny and easily missed during tick checks. The second treatment in August or September addresses adult tick activity. Together these two visits provide protection throughout the active season. High-exposure properties near conservation lands may benefit from a third treatment.",
  },
  {
    question: 'How does BuzzSkito treat for ticks in Brampton?',
    answer: "We apply a residual barrier spray to the specific micro-habitats where ticks concentrate on your property: the 1–3 metre transition zone between your lawn and any natural vegetation, garden bed edges, leaf litter areas, woodpiles, fence lines, and under decks. Ticks are not randomly distributed — they aggregate in these specific zones, so targeted treatment is far more effective than broadcast spraying.",
  },
  {
    question: 'Is tick spray safe for my kids and pets in Brampton?',
    answer: "Yes. Our Health Canada–approved formula is safe for children and pets once dry, which takes approximately 30 minutes after application. We recommend keeping people and pets off treated areas for that initial drying period. After that, your family can use the yard as normal with full protection active.",
  },
  {
    question: 'Does BuzzSkito also provide mosquito control in Brampton?',
    answer: "Yes. Brampton's stormwater ponds, Etobicoke Creek, and numerous green spaces also create significant mosquito pressure each season. Many Brampton homeowners bundle both mosquito and tick treatments for complete yard protection. See our Brampton mosquito control service for details.",
  },
  {
    question: 'What is Lyme disease and how real is the risk in Brampton?',
    answer: "Lyme disease is a bacterial infection transmitted by blacklegged tick bites. Ontario has seen steadily increasing case numbers each year as tick populations expand. Heart Lake Conservation Area and the Humber River corridor in Brampton are both documented tick surveillance areas. Early Lyme symptoms include a bulls-eye rash, fever, fatigue, and joint pain — but up to 30% of cases present without the classic rash, making prevention the safest approach.",
  },
]

export default function BramptonTickSprayPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Tick Spray ${CITY}`, description: `Professional tick barrier spray service in ${CITY}, Ontario.`, slug: SLUG, city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Tick Control', url: '/tick-control' }, { name: CITY, url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/brampton-tick-spray')) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-amber-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/tick-control" className="hover:text-white">Tick Control</Link><span>/</span>
            <span className="text-white">{CITY}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Tick Control in {CITY}</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            Brampton's ravines, conservation areas, and greenbelt corridors harbour blacklegged ticks. Protect your family from Lyme disease with BuzzSkito's professional 30-day tick barrier spray.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get a Free Quote</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      {/* Pricing bar */}
      <section className="bg-amber-50 border-y border-amber-200 py-5 px-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            <p className="font-extrabold text-brand-900 text-base">Tick Spray Pricing in {CITY}</p>
            <p className="text-gray-600 text-sm mt-0.5">Single treatment from <strong className="text-amber-700">$99</strong> · 2-treatment seasonal program from <strong className="text-amber-700">$179</strong> · No contracts</p>
          </div>
          <Link href="/contact" className="shrink-0 bg-amber-500 hover:bg-amber-400 text-white font-bold px-6 py-2.5 rounded-full text-sm transition-colors">Get a Free Quote</Link>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Tick Risk in Brampton</h2>
          <p>Brampton's rapid residential expansion has pushed subdivisions right up against conservation lands, ravines, and creek corridors — all of which are prime blacklegged tick habitat. <strong>Heart Lake Conservation Area</strong> is the most significant tick-risk site in the city, with documented surveillance populations and deer movement patterns that distribute ticks throughout adjacent neighbourhoods. The <strong>Etobicoke Creek valley</strong> and Humber River tributaries running through Castlemore, Credit Valley, and northern Brampton create additional corridors where tick exposure is consistently elevated.</p>
          <p>The key risk period in Brampton is May through July for tick nymphs (the most dangerous stage — tiny, hard to see, and responsible for the majority of Lyme disease transmissions) and October through November for adult ticks. A professionally treated yard dramatically reduces the chance of a tick reaching your family.</p>

          <h2>High-Risk Brampton Areas</h2>
          <ul>
            <li><strong>Heart Lake area</strong> — directly adjacent to Heart Lake Conservation Area; highest confirmed risk zone in Brampton</li>
            <li><strong>Castlemore / Countryside Drive corridor</strong> — near Humber River tributaries and undeveloped greenbelt</li>
            <li><strong>Credit Valley</strong> — backs onto Etobicoke Creek system with consistent deer movement</li>
            <li><strong>Springdale</strong> — open space corridors and conservation areas along northern Brampton</li>
            <li><strong>Gore Meadows / Claireville</strong> — Claireville Conservation Area borders generate real tick exposure</li>
          </ul>

          <h2>Brampton Neighbourhoods We Serve</h2>
          <div className="not-prose flex flex-wrap gap-2 mb-6">
            {NEIGHBOURHOODS.map((n) => (
              <span key={n} className="text-sm bg-amber-50 border border-amber-200 text-amber-700 px-3 py-1.5 rounded-full">{n}</span>
            ))}
          </div>

          <h2>Also Providing Mosquito Control in Brampton</h2>
          <p>Bundle tick and mosquito control for complete yard protection. See our <Link href="/brampton-mosquito-control" className="text-brand-700 hover:underline">Brampton mosquito control service</Link>.</p>

          <h2>Related Guides</h2>
          <ul>
            <li><Link href={`/blog/${TICK_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{TICK_BLOGS.pillar.title}</Link></li>
            <li><Link href="/blog/tick-season-ontario-when-are-ticks-active" className="text-brand-700 hover:underline">When Are Ticks Active in Ontario?</Link></li>
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

      <CTASection heading={`Get a Free Tick Spray Quote in ${CITY}`} subtext="Protect your Brampton family from Lyme disease this season. No contracts." variant="dark" />
    </>
  )
}
