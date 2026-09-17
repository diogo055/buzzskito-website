import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import CityHero from '@/components/CityHero'
import TypicalPrices from '@/components/TypicalPrices'
import CityPriceCard from '@/components/CityPriceCard'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema, howToSchema } from '@/lib/seo'
import { BUSINESS, CITIES, PROMISES } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Tick Control Near Me · GTA | 5★ · From $99',
  description:
    'Tick control near you · 150+ five-star GTA reviews. Mississauga, Toronto, Brampton, Oakville + 19 cities. Yard spray from $99. (289) 216-5030.',
  canonical: '/tick-control-near-me',
})

const FAQS = [
  {
    question: 'How do I know if BuzzSkito provides tick control near me?',
    answer: "BuzzSkito serves approximately a 50 km radius from Mississauga, covering most of the GTA and York Region. Confirmed service areas include Mississauga, Toronto, Brampton, Oakville, Burlington, Hamilton, Vaughan, Richmond Hill, Markham, Etobicoke, Scarborough, North York, Caledon, Milton, Georgetown, Halton Hills, King City, Woodbridge, Thornhill, and Kleinburg. Call (289) 216-5030 to confirm tick control availability at your specific address.",
  },
  {
    question: 'Do you provide mosquito control near me as well as tick control?',
    answer: "Yes — we provide both tick and mosquito control across all 19+ GTA service areas. Many homeowners bundle both services so the tick treatment is done on the same visit as a mosquito treatment: tick control is $497 per season (5 sprays) added to any mosquito plan, or $597 on its own, plus HST. Tick treatment is especially important for properties in York Region, near the Oak Ridges Moraine, and along the Credit, Humber, and Don River corridors where blacklegged tick populations are established.",
  },
  {
    question: 'How quickly can BuzzSkito treat my property for ticks?',
    answer: "In most cases we can schedule your first tick treatment within 3–5 business days. During peak season (May–July) availability may be slightly longer. Call (289) 216-5030 to check current availability and get on the schedule before tick nymph season peaks.",
  },
  {
    question: 'What precautions apply for children and pets during a tick treatment?',
    answer: "Keep kids and pets off the treated area during application and until the spray has dried, as the product label directs. Our licensed technician applies the tick barrier spray according to its label directions, to lawn edges, leaf litter and fence lines rather than across open play areas. If you have specific concerns, tell us before the visit and we can adjust application zones.",
  },
  {
    question: 'What does a tick control treatment near me actually include?',
    answer: "Every BuzzSkito tick treatment covers the specific micro-habitats where ticks concentrate on your property: the lawn-edge transition zone between maintained grass and any natural vegetation, garden bed borders, leaf litter, fence lines, woodpile surroundings, and under-deck areas. We do not simply spray the open lawn — we target where ticks actually live. Treatments are repeated roughly every 30 days, 5 sprays per season, because the residual wears down and wildlife keeps bringing new ticks in.",
  },
  {
    question: 'Which tick species are active near me in the GTA?',
    answer: "The blacklegged tick (deer tick, Ixodes scapularis) is the primary concern across the GTA — it's the only species that transmits Lyme disease, and it's present in all 19 cities we serve. American dog ticks are also common but rarely transmit Lyme disease. Tick populations are highest near conservation areas, ravines, the Oak Ridges Moraine, and any property backing onto wooded or naturalized green space.",
  },
  {
    question: 'When is tick season near me in Ontario?',
    answer: "Blacklegged tick nymphs — responsible for most Lyme disease cases — are most active May through July. Adult ticks are active in early spring (March–April) and fall (October–November) whenever temperatures exceed 4°C. Unlike mosquitoes, ticks remain active on warm winter days above 4°C. Book your first tick treatment in late May to target nymph peak season before it begins.",
  },
]

export default function TickControlNearMePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: 'Greater Toronto Area, Ontario' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: 'Tick Control Near Me', description: 'Professional tick barrier spray service near you — serving the Greater Toronto Area including Mississauga, Toronto, Brampton, Oakville, Burlington, Hamilton, and all GTA cities.', slug: '/tick-control-near-me' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Tick Control', url: '/tick-control' }, { name: 'Near Me', url: '/tick-control-near-me' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema({ service: 'tick' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/tick-control-near-me', '2026-07-01')) }} />

      <CityHero
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Tick Control', href: '/tick-control' }, { label: 'Near Me' }]}
        title={<>Tick Control Near You — GTA &amp; York Region</>}
        subtitle={<>Licensed Ontario pesticide operator treating the lawn edges, leaf litter and fence lines where blacklegged ticks wait, across 19 GTA cities. Treatments applied according to label directions.</>}
        service="tick"
        image="/spray-front.webp"
        imageAlt="BuzzSkito technician treating lawn edges and garden borders for ticks"
      />

      <section className="bg-amber-900 text-white py-4 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-medium text-amber-200">
          <span>✓ {PROMISES.licence}</span>
          <span>✓ Targets Adults, Nymphs &amp; Larvae</span>
          <span>✓ {PROMISES.labelLine}</span>
          <span>✓ {PROMISES.rainBackShort}</span>
          <span>✓ 5-Star Rated · 150+ Reviews</span>
        </div>
      </section>

      <TypicalPrices service="tick" city="GTA" />

      {/* How It Works */}
      <section className="py-12 px-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-8 text-center">How BuzzSkito Tick Control Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Property Tick Assessment', desc: 'We identify tick habitat zones — lawn-to-woods transitions, leaf litter, garden bed edges, and fence lines on your property.' },
              { step: '2', title: 'Targeted Barrier Spray', desc: 'Our licensed technician applies a barrier product, according to its label directions, to the specific 1-3 metre zones where ticks concentrate — precision treatment, not broadcast spraying.' },
              { step: '3', title: 'Rain-Back Guarantee', desc: `Five sprays per season, roughly every 30 days, keep the treated zones renewed. ${PROMISES.rainBack}` },
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
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">Find Tick Control in Your City</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {CITIES.map((city) => (
              <Link
                key={city.name}
                href={city.tickSlug}
                className="flex items-center gap-3 bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-800 hover:text-amber-900 px-4 py-3 rounded-xl text-sm font-medium transition-colors"
              >
                <svg className="w-4 h-4 text-amber-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Tick Control — {city.name}
              </Link>
            ))}
          </div>

          <div className="mt-10 bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <h2 className="text-xl font-extrabold text-brand-900 mb-3">Don&apos;t See Your City?</h2>
            <p className="text-gray-600 text-sm mb-4">Our tick control service area covers approximately 50 km from Mississauga. If your city isn&apos;t listed above, call us — we may still be able to serve you.</p>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-bold px-6 py-3 rounded-full text-sm transition-colors">
              Call to Check Your Area — {BUSINESS.phone}
            </a>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-extrabold text-brand-900 mb-4">Mosquito Control Near Me — Also Available</h2>
            <p className="text-gray-600 mb-4">BuzzSkito provides mosquito control alongside tick control in all service areas. Tick and mosquito treatments can be done on the same visit. See our <Link href="/mosquito-control-near-me" className="text-brand-700 underline">mosquito control near me</Link> page or ask about bundling when you call.</p>
          </div>

          <div className="mt-6">
            <h2 className="text-2xl font-extrabold text-brand-900 mb-4">Why GTA Homeowners Need Professional Tick Control</h2>
            <p className="text-gray-600 mb-4">Blacklegged tick populations are established across the GTA and expanding. The Oak Ridges Moraine (Richmond Hill, Vaughan, King City, Caledon), the Humber River valley, Don River corridor, Bronte Creek, and Rouge National Urban Park are the highest-density tick zones — but all 19 cities we serve have meaningful tick activity during the season.</p>
            <p className="text-gray-600 mb-4">Tick nymphs — the life stage responsible for most Lyme disease transmissions in Ontario — are poppy-seed sized and easily missed during skin checks. They are most active May through July, the same period children spend the most time outdoors. Professional barrier spray applied to your yard&apos;s transition zones before peak nymph season is a practical way to reduce tick encounters at home.</p>
            <p className="text-gray-600">BuzzSkito&apos;s licensed technician applies tick spray according to label directions to create a treated barrier around your property. Keep children and pets off treated areas until the spray has dried. No contracts. {PROMISES.rainBack}</p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4">
        <CityPriceCard city="GTA" service="tick" location="price_card_faq" />
      </div>

      <section className="py-10 px-4 bg-amber-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">Frequently Asked Questions — Tick Control Near Me</h2>
          <div className="space-y-3">
            {FAQS.map(({ question, answer }) => (
              <details key={question} className="bg-white rounded-xl border border-amber-100 group open:shadow-md transition-shadow">
                <summary className="cursor-pointer px-5 py-4 font-semibold text-brand-900 list-none flex justify-between items-center rounded-xl hover:bg-brand-100/60 transition-colors">
                  <span>{question}</span>
                  <svg className="w-5 h-5 shrink-0 group-open:rotate-180 transition-transform text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-5 pb-4 text-gray-600 text-sm">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Find Professional Tick Control Near You" subtext="Serving 19+ GTA cities. Free quotes, no contracts, licensed Ontario pesticide operator." variant="dark" />
    </>
  )
}
