import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import CityHero from '@/components/CityHero'
import TypicalPrices from '@/components/TypicalPrices'
import CityPriceCard from '@/components/CityPriceCard'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema, howToSchema } from '@/lib/seo'
import { BUSINESS, CITIES, PROMISES } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Tick Control Ontario | From $99',
  description:
    'Tick control across Ontario\'s GTA. Label-directed barrier spray targets ticks at all life stages. 19 cities served, licensed technicians. (289) 216-5030.',
  canonical: '/tick-control-ontario',
})

const FAQS = [
  {
    question: 'What is professional tick control in Ontario?',
    answer: 'Professional tick control in Ontario involves applying a residual barrier spray, according to its label directions, to the specific areas of your residential property where ticks concentrate: the 1–3 metre transition zone between lawn and any natural vegetation, garden bed edges, leaf litter, fence lines, under-deck areas, and woodpile surroundings. Ticks do not distribute randomly across your yard — they aggregate in these humid, shaded micro-habitats. The treatment targets ticks at all life stages — adults, nymphs, and larvae — and is repeated roughly every 30 days because the residual wears down and wildlife keeps bringing new ticks in.',
  },
  {
    question: 'Is professional tick spray legal and safe in Ontario?',
    answer: 'Professional tick spray is legal in Ontario when it is applied by a licensed operator. Commercial pesticide application is regulated under Ontario\'s Pesticides Act, which requires training, certification, and licensing. BuzzSkito holds Ontario Pesticide Operator Licence L-240-2436835197, and every product is applied according to its label directions. Keep children and pets off treated areas until the spray has dried, as the product label directs.',
  },
  {
    question: 'What Ontario cities does BuzzSkito serve for tick control?',
    answer: 'BuzzSkito serves 19 cities across the Greater Toronto Area and Southern Ontario for tick control: Mississauga, Toronto, Brampton, Oakville, Burlington, Hamilton, Vaughan, Richmond Hill, Markham, Etobicoke, Scarborough, North York, Caledon, Milton, Georgetown, Halton Hills, King City, Woodbridge, and Thornhill. We also serve communities including Kleinburg, Nobleton, Ancaster, Dundas, Stoney Creek, and Flamborough. Call (289) 216-5030 to confirm service at your specific address.',
  },
  {
    question: 'What tick species are in Ontario and which carry Lyme disease?',
    answer: 'The blacklegged tick (deer tick, Ixodes scapularis) is the primary concern in Ontario — it is the only species that transmits Lyme disease (Borrelia burgdorferi). Blacklegged tick populations are established across Southern Ontario and are expanding northward each year. The American dog tick is also common in Ontario but rarely transmits Lyme disease. The lone star tick is occasionally found but is not established in Ontario. Because of that Lyme disease link, the blacklegged tick is the species professional tick control focuses on.',
  },
  {
    question: 'When is tick season in Ontario?',
    answer: 'Blacklegged tick nymphs — the life stage responsible for most Lyme disease transmissions — are most active from May through July. This is the highest-risk period for Ontario homeowners. Adult ticks are active in early spring (March–April) and fall (October–November) whenever temperatures are above 4°C. Unlike mosquitoes, blacklegged ticks remain active on warm winter days above 4°C. Because that active window stretches from spring into late autumn, the recommended treatment schedule is five applications spread roughly monthly from May through September — covering the entire nymph peak without a gap, then treating again as fall adults become active.',
  },
  {
    question: 'Which Ontario areas have the highest tick risk in the GTA?',
    answer: 'The highest tick risk in Ontario\'s GTA region is concentrated along: the Oak Ridges Moraine (King City, Caledon, Richmond Hill, Vaughan) — Ontario\'s most significant tick corridor; the Humber River valley (Vaughan, Woodbridge, Etobicoke); Bronte Creek Provincial Park (Oakville); Rouge National Urban Park (Scarborough, Markham); Credit River corridor (Mississauga, Georgetown, Halton Hills); Niagara Escarpment (Hamilton, Burlington); Don River headwaters (Richmond Hill, Markham); and Cootes Paradise (Hamilton). All 19 cities we serve have meaningful tick populations during the active season.',
  },
  {
    question: 'How many tick treatments does an Ontario property need per season?',
    answer: 'A full Ontario tick season is five treatments — roughly one a month from May through September. The reason is residual: the acaricide left on treated vegetation wears down over a few weeks, so five visits roughly a month apart keep the treated zones renewed across the whole May-to-September season. The May, June and July applications sit directly over the blacklegged tick nymph peak, the stage responsible for most Lyme disease transmission because nymphs are poppy-seed sized and routinely missed on a body check. The August and September applications cover adult ticks, which re-emerge in autumn and stay active into November in mild years. Repetition matters because the acaricide residual is temporary and deer, mice and birds continuously reintroduce ticks from adjacent woodland — a twice-yearly schedule leaves the middle of nymph season completely uncovered. BuzzSkito prices the tick season at $597 on its own, or $497 when added to any mosquito plan, plus HST; single one-off treatments start from $99 on a standard lot under 10,000 sq ft.',
  },
]

export default function TickControlOntarioPage() {
  const primaryCities = CITIES.slice(0, 6)
  const extendedCities = CITIES.slice(6)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: 'Tick Control Ontario', description: 'Professional tick barrier spray service across Southern Ontario\'s Greater Toronto Area.', slug: '/tick-control-ontario' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Tick Control', url: '/tick-control' }, { name: 'Ontario', url: '/tick-control-ontario' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema({ service: 'tick' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/tick-control-ontario', '2026-07-01')) }} />

      <CityHero
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Tick Control', href: '/tick-control' }, { label: 'Ontario' }]}
        title={<>Tick Control</>}
        titleAccent={<>across Ontario</>}
        subtitle={<>Licensed Ontario pesticide operator treating tick habitat across 19 cities in Southern Ontario&apos;s Greater Toronto Area. Treatments applied according to label directions.</>}
        service="tick"
        image="/spray-front.webp"
        imageAlt="BuzzSkito technician treating lawn edges and garden borders for ticks"
      />

      <section className="bg-amber-900 text-white py-4 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-medium text-amber-200">
          <span>✓ 5 Sprays per Season</span>
          <span>✓ Ontario Pesticides Act Licensed</span>
          <span>✓ Targets Adults, Nymphs &amp; Larvae</span>
          <span>✓ 19 GTA Cities</span>
          <span>✓ Mississauga-Based &amp; Owner-Operated</span>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-brand-900 text-white py-4 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-medium text-brand-200">
          <span>✓ {PROMISES.licence}</span>
          <span>✓ {PROMISES.labelLine}</span>
          <span>✓ {PROMISES.rainBackShort}</span>
          <span>✓ 5-Star Rated · 150+ Reviews</span>
        </div>
      </section>

      <TypicalPrices service="tick" city="Ontario" />

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
        <div className="max-w-5xl mx-auto prose-brand">
          <h2>Professional Tick Control across Southern Ontario</h2>
          <p>BuzzSkito is a Mississauga-based mosquito and tick control company specializing in barrier spray treatments for residential properties across the Greater Toronto Area. Our tick control service applies a residual product, according to its label directions, to the specific zones of your property where blacklegged ticks concentrate — lawn edges, leaf litter, garden bed borders, fence lines, and under-deck areas — targeting ticks at all life stages, with visits repeated roughly every 30 days through the season.</p>
          <p>Our technicians are licensed under Ontario&apos;s Pesticides Act ({PROMISES.licence}), and every product is applied according to its label directions. Every treatment includes a written service log delivered by SMS after each visit.</p>

          <h2>Ontario Tick Season and Lyme Disease Risk</h2>
          <p>Blacklegged tick populations are established across Southern Ontario and continue to expand northward. The Oak Ridges Moraine — running through Richmond Hill, Vaughan, King Township, and Caledon — is Ontario&apos;s highest-density tick corridor and the primary route by which tick populations spread from rural to suburban landscapes. The Niagara Escarpment, Credit River, Humber River, and Don River systems create additional corridors distributing ticks into residential neighbourhoods throughout the GTA.</p>
          <p>Our five-treatment season covers that full active window with visits spaced roughly monthly from May through September. The May, June and July applications sit on top of nymph peak season — the highest Lyme disease transmission period, because nymphs are poppy-seed sized and routinely missed on a body check — while the August and September visits carry the barrier into fall adult emergence, which can run into November in mild years. The residual on treated vegetation wears down over a few weeks, and deer, mice and birds keep reintroducing ticks from neighbouring woodland all season, so monthly repetition is what keeps the treated zones renewed instead of leaving a multi-month gap at the worst point in the year. Tick control is $597 for the season on its own, or $497 added to any mosquito plan.</p>

          <CityPriceCard city="Ontario" service="tick" />

          <h2>Tick Control by City</h2>
          <div className="not-prose grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
            {primaryCities.map((city) => (
              <div key={city.name} className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <div className="font-bold text-brand-900 mb-2">{city.name}</div>
                <div className="flex flex-col gap-1">
                  <Link href={city.tickSlug} className="text-xs text-amber-700 hover:underline">Tick spray →</Link>
                  <Link href={city.mosquitoSlug} className="text-xs text-brand-700 hover:underline">Mosquito control →</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="not-prose flex flex-wrap gap-2 mb-6">
            {extendedCities.map((city) => (
              <Link key={city.name} href={city.tickSlug} className="text-sm bg-amber-50 border border-amber-200 text-amber-700 hover:bg-amber-700 hover:text-white px-3 py-1.5 rounded-full transition-colors font-medium">{city.name}</Link>
            ))}
          </div>
          <p>Also serving York Region communities including Kleinburg, Nobleton, and Schomberg. See our <Link href="/york-region-mosquito-control" className="text-brand-700 hover:underline">York Region hub</Link> and <Link href="/service-areas" className="text-brand-700 hover:underline">full service areas page</Link>.</p>

          <h2>What&apos;s Included in Every Ontario Tick Treatment</h2>
          <ul>
            <li><strong>Targeted micro-habitat spray</strong> — Lawn-edge transition zones, leaf litter, garden bed borders, fence lines, woodpiles, under-deck areas — the specific locations where ticks aggregate</li>
            <li><strong>Targets all life stages</strong> — Adults, nymphs, and larvae</li>
            <li><strong>Visits roughly every 30 days</strong> — 5 sprays per season keep the treated zones renewed as the residual wears down</li>
            <li><strong>Label-directed application</strong> — Applied by a licensed Ontario operator; keep children and pets off treated areas until the spray has dried</li>
            <li><strong>Rain-back guarantee</strong> — {PROMISES.rainBack}</li>
            <li><strong>SMS service log</strong> — Written documentation delivered after every visit</li>
          </ul>

          <h2>Also Providing Mosquito Control across Ontario</h2>
          <p>Bundle tick and mosquito control so both pests are covered through the season — both can be treated on the same visit. See our <Link href="/mosquito-control-ontario" className="text-brand-700 hover:underline">Ontario mosquito control service</Link>.</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4">
        <CityPriceCard city="Ontario" service="tick" location="price_card_faq" />
      </div>

      <section className="py-10 px-4 bg-amber-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">FAQ – Tick Control in Ontario</h2>
          <div className="space-y-3">
            {FAQS.map(({ question, answer }) => (
              <details key={question} className="bg-white rounded-xl border border-amber-100 group open:shadow-md transition-shadow">
                <summary className="cursor-pointer px-5 py-4 font-semibold text-brand-900 list-none flex justify-between items-center rounded-xl hover:bg-brand-100/60 transition-colors">
                  <span>{question}</span>
                  <svg className="w-5 h-5 shrink-0 group-open:rotate-180 transition-transform text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <p className="px-5 pb-4 text-gray-600 text-sm">{answer}</p>
              </details>
            ))}
          </div>
          <p className="text-center mt-6 text-sm text-gray-500">
            More questions? Call <a href={BUSINESS.phoneHref} className="text-amber-700 underline">{BUSINESS.phone}</a> or see our <Link href="/frequently-asked-question" className="text-amber-700 underline">full FAQ</Link>.
          </p>
        </div>
      </section>

      <CTASection heading="Get a Free Quote for Your Ontario Property" subtext="Serving 19 GTA cities. No contracts, rain-back guarantee on every plan, licensed Ontario pesticide operator." variant="dark" />
    </>
  )
}
