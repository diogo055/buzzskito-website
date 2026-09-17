import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import CityHero from '@/components/CityHero'
import QuickAnswer from '@/components/QuickAnswer'
import TypicalPrices from '@/components/TypicalPrices'
import CityPriceCard from '@/components/CityPriceCard'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema, howToSchema } from '@/lib/seo'
import { BUSINESS, TICK_BLOGS, PROMISES } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Vaughan Tick Control 2026 · From $99 · Boyd Conservation Specialist',
  description:
    'Vaughan tick spray · 150+ five-star reviews. Targets blacklegged ticks across Woodbridge, Kleinburg, Maple, Thornhill, Concord. Rain-back guarantee. (289) 216-5030.',
  canonical: '/vaughan-tick-spray',
})

const CITY = 'Vaughan'
const NEIGHBOURHOODS = ['Woodbridge','Kleinburg','Maple','Concord','Thornhill','Patterson','Vellore Village','Islington Woods','Sonoma Heights']
const FAQS = [
  {
    question: 'How much does tick spray cost in Vaughan?',
    answer: 'Tick spray in Vaughan starts from $99 per application. Properties near Boyd Conservation Area, the Kortright Centre, or the Humber River valley benefit most from the full seasonal program — five treatments spread roughly monthly from May through September — at $597 standalone, or $497 when added to any mosquito plan, plus HST. No contracts. Call (289) 216-5030.',
  },
  {
    question: 'Where are ticks most common in Vaughan?',
    answer: 'Tick activity in Vaughan is highest near Boyd Conservation Area, the Kortright Centre for Conservation, and along the Humber River corridor. Wooded estate lots in Kleinburg and the forest edges in Islington Woods and Woodbridge are consistently high-risk zones. Properties with mature trees backing onto conservation land face annual tick exposure.',
  },
  {
    question: 'Has York Region issued tick warnings for Vaughan?',
    answer: 'Yes. York Region Public Health issues tick advisories covering Vaughan\'s conservation lands, including Boyd and Kortright. They recommend avoiding tall grass and brush, checking for ticks after outdoor activity, and using insect repellent, particularly for people living next to forested or naturalized areas.',
  },
  {
    question: 'How many tick treatments does a Vaughan property need per year?',
    answer: 'BuzzSkito recommends five treatments per season for most Vaughan properties — one roughly every month from May through September. The residual on treated vegetation wears down over a few weeks, so monthly visits keep the treated zones renewed through the May–July nymph peak and continue into the autumn, when adult ticks re-emerge and stay active into November in mild years. Public Health Ontario notes nymphs are poppy-seed sized and easy to miss, so do a tick check after time outdoors. Repeat applications matter because the acaricide residual is temporary and deer, mice, and birds continuously reintroduce ticks from the adjacent conservation woodland — an occasional one-off visit cannot hold that barrier. The seasonal tick program is $597 standalone, or $497 added to any mosquito plan, plus HST.',
  },
  {
    question: 'What should my family and pets do after a tick treatment in Vaughan?',
    answer: 'Keep children and pets off treated areas until the spray has dried, as the product label directs. Ontario technicians are licensed under the Pesticides Act, and BuzzSkito holds Ontario Pesticide Operator Licence L-240-2436835197. Every product is applied according to its label directions, to the lawn edges, leaf litter and fence lines where ticks rest rather than across open lawn. If you have specific concerns about children or pets, tell us before the visit and we can adjust application zones.',
  },
  {
    question: 'What does BuzzSkito actually treat on my Vaughan property for ticks?',
    answer: 'Ticks concentrate at specific micro-habitats — not randomly across open lawn. We treat the 1–3 metre transition zone between your maintained lawn and any natural vegetation, garden bed edges, leaf litter areas, fence lines, under-deck surfaces, woodpile surroundings, and dense ornamental plantings. For Vaughan properties near the Humber River or Boyd, we pay particular attention to the property boundary facing the natural corridor.',
  },
  {
    question: 'Do ticks in Vaughan carry Lyme disease?',
    answer: 'Yes. Blacklegged ticks (deer ticks) in Vaughan and across York Region are known to carry Borrelia burgdorferi, the bacterium that causes Lyme disease. York Region Public Health conducts passive tick surveillance and has confirmed Lyme-carrying ticks in the Boyd Conservation Area and surrounding corridors. Ontario Lyme disease case numbers have increased annually, with York Region reporting cases every year. The risk is real and present in residential Vaughan neighbourhoods, not just remote trails.',
  },
  {
    question: 'Should Kleinburg homeowners be especially concerned about ticks?',
    answer: 'Yes. Kleinburg sits at the northern edge of the Oak Ridges Moraine — one of Ontario\'s most significant tick activity corridors — and is threaded by the Humber River valley. Estate properties in Kleinburg back directly onto forested ravine systems with established deer populations that distribute ticks year-round. The village\'s older tree canopy, combined with its conservation land adjacency, creates some of the highest residential tick exposure in Vaughan. We offer dedicated service to all Kleinburg addresses — see our Kleinburg mosquito control page for related coverage.',
  },
]

export default function VaughanTickPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Tick Spray ${CITY}`, description: `Professional tick barrier spray service in ${CITY}, Ontario. Targets ticks at all life stages.`, slug: '/vaughan-tick-spray', city: CITY, price: null })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Tick Control', url: '/tick-control' }, { name: CITY, url: '/vaughan-tick-spray' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema({ service: 'tick', city: 'Vaughan' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/vaughan-tick-spray', '2026-07-01')) }} />

      <CityHero
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Tick Control', href: '/tick-control' }, { label: CITY }]}
        title={<>Vaughan Tick Control</>}
        titleAccent={<>From $99 · 150+ Five-Star Reviews</>}
        subtitle={<>Licensed Ontario pesticide operator treating Vaughan yards near Boyd Conservation Area and the Kortright Centre, established blacklegged tick habitat. Treatments applied according to label directions.</>}
        service="tick"
        image="/spray-front.webp"
        imageAlt="BuzzSkito technician treating lawn edges and garden borders for ticks"
      />

      
      {/* Trust bar */}
      <section className="bg-brand-900 text-white py-4 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-medium text-brand-200">
          <span>✓ {PROMISES.licence}</span>
          <span>✓ {PROMISES.labelLine}</span>
          <span>✓ {PROMISES.rainBackShort}</span>
          <span>✓ 5 Sprays per Season</span>
          <span>✓ 5-Star Rated · 150+ Reviews</span>
        </div>
      </section>

      {/* QUICK ANSWER */}
      <QuickAnswer question="What is the best tick control company in Vaughan?">
        <p>
          <strong>BuzzSkito provides specialist tick barrier spray across all Vaughan neighbourhoods — Woodbridge, Kleinburg, Maple, Concord, Thornhill, Patterson, Vellore Village, Islington Woods, Sonoma Heights.</strong> Treatments are applied by a licensed Ontario pesticide operator, according to label directions, to the specific 1–3 metre zones where blacklegged ticks concentrate — lawn-to-woods transitions, leaf litter, garden bed edges, and fence-line vegetation. Single treatments start at <strong>$99</strong>; the 5-spray tick season is $597 on its own or $497 added to any mosquito plan (plus HST). With <strong>150+ five-star Google reviews</strong>, no contracts, and a <strong>rain-back guarantee on every plan</strong>, BuzzSkito treats ravine, conservation-area, and wooded-edge properties across Vaughan. Call (289) 216-5030.
        </p>
      </QuickAnswer>

      {/* KEY FACTS */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Vaughan Tick Control Key Facts</h2>
          <div className="rounded-xl border border-navy-100 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Service area', 'All Vaughan neighbourhoods (Woodbridge, Kleinburg, Maple, Concord, Thornhill, Patterson, Vellore Village, Islington Woods, Sonoma Heights)'],
                  ['Specialization', 'Blacklegged tick (Ixodes scapularis) and American dog tick barrier spray'],
                  ['Pricing', 'From $99 per treatment · tick season $597 standalone or $497 with any mosquito plan (plus HST)'],
                  ['Treatment season', 'May through September (nymph peak May–July, adult activity resuming into autumn)'],
                  ['Licence', PROMISES.licence],
                  ['Re-entry', 'Stay off treated areas until the spray has dried, as the product label directs'],
                  ['Recommended schedule', '5 treatments per season for ravine- or conservation-area-adjacent properties'],
                  ['Highest tick zones', 'Boyd Conservation Area · Kortright Centre · Humber River valley · Oak Ridges Moraine edge'],
                  ['Lyme disease vector', 'Yes — blacklegged tick populations confirmed by Public Health Ontario'],
                  ['Application zones', 'Lawn-to-woods edge · leaf litter · garden bed perimeters · fence-line vegetation · woodpiles'],
                  ['Booking lead time', 'Same-week service typical'],
                  ['Contract required', 'No — single treatments and seasonal programs both available'],
                  ['Guarantee', 'Rain-back on every plan; Bite-Free on Standard & Exclusive'],
                  ['Google reviews', '150+ reviews · 5.0 average · 0 negative'],
                  ['Phone', '(289) 216-5030'],
                ].map(([k, v]) => (
                  <tr key={k} className="border-b border-navy-50 last:border-0">
                    <td className="px-4 py-2.5 font-semibold text-brand-900 bg-gray-50 w-1/3">{k}</td>
                    <td className="px-4 py-2.5 text-gray-800">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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

      
      <TypicalPrices service="tick" city={CITY} />

      {/* How It Works */}
      <section className="py-12 px-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <p className="kicker mb-3 text-center">How It Works</p>
          <h2 className="h2-display text-brand-950 mb-8 text-center">How BuzzSkito Tick Control Works</h2>
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
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Why Tick Spray Is Crucial in Vaughan</h2>
          <p>Vaughan residents living near Boyd Conservation Area or the Kortright Centre for Conservation are in close proximity to two of York Region's most well-documented blacklegged tick (Ixodes scapularis) habitats. These aren't distant wilderness areas — they are woven into the urban fabric of Woodbridge and Kleinburg, with residential lots backing directly onto forested conservation land. York Region Public Health has issued tick advisories specifically covering these areas, noting increasing Lyme disease case counts across the region.</p>
          <p>The Humber River corridor that threads through Vaughan creates a continuous green corridor where ticks can move from deep forest to suburban backyards. Estate lots in Kleinburg and Woodbridge with mature oak and maple canopy are particularly high-risk environments. Ticks quest from low vegetation at the lawn's edge — which means your yard, not the trail, is the primary exposure zone. Professional barrier spray applied before and during peak season is a practical way to reduce tick encounters where they start.</p>

          <h2>Tick Hotspots in Vaughan</h2>
          <ul>
            <li>Boyd Conservation Area (Woodbridge) — confirmed blacklegged tick habitat</li>
            <li>Kortright Centre for Conservation — tick monitoring site for York Region</li>
            <li>Humber River valley corridor through Woodbridge and Kleinburg</li>
            <li>Wooded estate lots in Kleinburg village edges</li>
            <li>Islington Woods naturalized areas and ravine edges</li>
          </ul>

          <CityPriceCard city={CITY} service="tick" />

          <h2>Vaughan Neighbourhoods We Serve for Tick Control</h2>
          <div className="not-prose flex flex-wrap gap-2 mb-6">
            {NEIGHBOURHOODS.map((n) => <span key={n} className="text-sm bg-amber-50 border border-amber-200 text-amber-700 px-3 py-1.5 rounded-full">{n}</span>)}
          </div>

          <h2>What Our Vaughan Tick Treatment Includes</h2>
          <ul>
            <li>Barrier spray targeting lawn edges, leaf litter, garden beds, fence lines, under decks, and woodpiles</li>
            <li>5 sprays per season, roughly monthly, renewing the treated zones</li>
            <li>Targets adult ticks, nymphs, and larvae</li>
            <li>{PROMISES.labelLine}, by a licensed operator; stay off treated areas until the spray has dried</li>
            <li>{PROMISES.rainBack}</li>
          </ul>

          <h2>Also Providing Mosquito Control in Vaughan</h2>
          <p>Many Vaughan homeowners combine tick and mosquito control in the same visit. See our <Link href="/vaughan-mosquito-control" className="text-brand-700 hover:underline">Vaughan mosquito control service</Link>.</p>


          <h2>Compare Vaughan Pest Control Options</h2>
          <p>Vaughan has confirmed blacklegged tick exposure — see our specialist pest control guide: <Link href="/pest-control-vaughan" className="text-brand-700 hover:underline font-semibold">Pest Control in Vaughan</Link> for why a mosquito and tick specialist is a better fit for conservation-edge yards than a general pest company. See our full mosquito programme for the same property: <Link href="/vaughan-mosquito-control" className="text-brand-700 hover:underline font-semibold">Mosquito Control in Vaughan</Link>.</p>
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
          <h2 className="h2-display text-brand-950 mb-2 text-center">What GTA Homeowners Say About Our Tick Control</h2>
          <p className="text-center text-gray-500 text-sm mb-8">From our 150+ five-star Google reviews</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { author: 'James K.', text: 'We had a tick problem near our garden border. BuzzSkito came out quickly, treated the whole yard, and gave us a detailed service log. Great experience and the kids can play outside again.' },
              { author: 'Priya R.', text: 'The technician explained exactly what product they were using. Treated the perimeter where ticks were coming from. Couldn\u2019t be happier with the results.' },
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
        <CityPriceCard city={CITY} service="tick" location="price_card_faq" />
      </div>

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
      <CTASection heading={`Get a Free Tick Spray Quote in ${CITY}`} subtext="Licensed tick spray for Vaughan conservation-edge yards. No contracts, rain-back guarantee on every plan." variant="dark" />
    </>
  )
}
