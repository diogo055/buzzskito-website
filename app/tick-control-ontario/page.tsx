import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema, howToSchema } from '@/lib/seo'
import { BUSINESS, CITIES } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Tick Control Ontario | GTA Service | BuzzSkito',
  description:
    'Professional tick control across Ontario\'s Greater Toronto Area. Serving 19 cities in Southern Ontario. Health Canada–approved barrier spray kills ticks at all life stages. Licensed Ontario technicians. Call (289) 216-5030.',
  canonical: '/tick-control-ontario',
})

const FAQS = [
  {
    question: 'What is professional tick control in Ontario?',
    answer: 'Professional tick control in Ontario involves applying a Health Canada–approved residual barrier spray to the specific areas of your residential property where ticks concentrate: the 1–3 metre transition zone between lawn and any natural vegetation, garden bed edges, leaf litter, fence lines, under-deck areas, and woodpile surroundings. Ticks do not distribute randomly across your yard — they aggregate in these humid, shaded micro-habitats. The formula kills ticks on contact at all life stages — adults, nymphs, and larvae — and provides up to 30 days of continuous protection per treatment.',
  },
  {
    question: 'Is professional tick spray legal and safe in Ontario?',
    answer: 'Yes. All products BuzzSkito uses are registered with Health Canada under the Pest Control Products Act — Canada\'s federal pesticide safety framework. Our technicians are licensed under Ontario\'s Pesticides Act, which requires training, certification, and annual renewal for all commercial pesticide applications. Ontario\'s pesticide regulations are among the strictest in North America. The formula is safe for children and pets after a 30-minute drying period.',
  },
  {
    question: 'What Ontario cities does BuzzSkito serve for tick control?',
    answer: 'BuzzSkito serves 19 cities across the Greater Toronto Area and Southern Ontario for tick control: Mississauga, Toronto, Brampton, Oakville, Burlington, Hamilton, Vaughan, Richmond Hill, Markham, Etobicoke, Scarborough, North York, Caledon, Milton, Georgetown, Halton Hills, King City, Woodbridge, and Thornhill. We also serve communities including Kleinburg, Nobleton, Ancaster, Dundas, Stoney Creek, and Flamborough. Call (289) 216-5030 to confirm service at your specific address.',
  },
  {
    question: 'What tick species are in Ontario and which carry Lyme disease?',
    answer: 'The blacklegged tick (deer tick, Ixodes scapularis) is the primary concern in Ontario — it is the only species that transmits Lyme disease (Borrelia burgdorferi). Blacklegged tick populations are established across Southern Ontario and are expanding northward each year. The American dog tick is also common in Ontario but rarely transmits Lyme disease. The lone star tick is occasionally found but is not established in Ontario. For Lyme disease prevention, blacklegged tick control is the priority.',
  },
  {
    question: 'When is tick season in Ontario?',
    answer: 'Blacklegged tick nymphs — the life stage responsible for most Lyme disease transmissions — are most active from May through July. This is the highest-risk period for Ontario homeowners. Adult ticks are active in early spring (March–April) and fall (October–November) whenever temperatures are above 4°C. Unlike mosquitoes, blacklegged ticks remain active on warm winter days above 4°C. The recommended treatment window is late May for nymph season, with a second treatment in August or September for adult activity.',
  },
  {
    question: 'Which Ontario areas have the highest tick risk in the GTA?',
    answer: 'The highest tick risk in Ontario\'s GTA region is concentrated along: the Oak Ridges Moraine (King City, Caledon, Richmond Hill, Vaughan) — Ontario\'s most significant tick corridor; the Humber River valley (Vaughan, Woodbridge, Etobicoke); Bronte Creek Provincial Park (Oakville); Rouge National Urban Park (Scarborough, Markham); Credit River corridor (Mississauga, Georgetown, Halton Hills); Niagara Escarpment (Hamilton, Burlington); Don River headwaters (Richmond Hill, Markham); and Cootes Paradise (Hamilton). All 19 cities we serve have meaningful tick populations during the active season.',
  },
  {
    question: 'How many tick treatments does an Ontario property need per season?',
    answer: 'Most Ontario residential properties benefit from two tick treatments per season: one in late May or early June targeting nymph peak activity (May–July), and one in August or September for fall adult tick emergence. High-exposure properties — those adjacent to conservation lands, ravines, the Oak Ridges Moraine, or with confirmed deer movement — benefit from three treatments for continuous protection through the season. Each treatment provides up to 30 days of residual protection.',
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/tick-control-ontario')) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-amber-900 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/tick-control" className="hover:text-white">Tick Control</Link><span>/</span>
            <span className="text-white">Ontario</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">
            Tick Control<br />
            <span className="text-amber-400">across Ontario</span>
          </h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            BuzzSkito provides Health Canada–approved tick barrier spray across 19 cities in Southern Ontario&apos;s Greater Toronto Area. Licensed technicians, kills all life stages, guaranteed results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get a Free Quote</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      <section className="bg-amber-900 text-white py-4 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-medium text-amber-200">
          <span>✓ Health Canada–Approved Formula</span>
          <span>✓ Ontario Pesticides Act Licensed</span>
          <span>✓ Kills Adults, Nymphs &amp; Larvae</span>
          <span>✓ Up to 30-Day Protection</span>
          <span>✓ Safe for Kids &amp; Pets (30 min)</span>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-brand-900 text-white py-4 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-medium text-brand-200">
          <span>✓ Health Canada–Approved Formula</span>
          <span>✓ Safe for Kids &amp; Pets (30 min dry)</span>
          <span>✓ Up to 30-Day Protection</span>
          <span>✓ Lyme Disease Prevention</span>
          <span>✓ 5-Star Rated · 126 Reviews</span>
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
        <div className="max-w-5xl mx-auto prose-brand">
          <h2>Professional Tick Control across Southern Ontario</h2>
          <p>BuzzSkito is a Mississauga-based mosquito and tick control company specializing in barrier spray treatments for residential properties across the Greater Toronto Area. Our tick control service applies a Health Canada–approved residual insecticide to the specific zones of your property where blacklegged ticks concentrate — lawn edges, leaf litter, garden bed borders, fence lines, and under-deck areas — eliminating ticks at all life stages and providing up to 30 days of continuous protection.</p>
          <p>Our technicians are licensed under Ontario&apos;s Pesticides Act and all products are registered with Health Canada under the Pest Control Products Act. Every treatment includes a written service log delivered by SMS after each visit.</p>

          <h2>Ontario Tick Season and Lyme Disease Risk</h2>
          <p>Blacklegged tick populations are established across Southern Ontario and continue to expand northward. The Oak Ridges Moraine — running through Richmond Hill, Vaughan, King Township, and Caledon — is Ontario&apos;s highest-density tick corridor and the primary route by which tick populations spread from rural to suburban landscapes. The Niagara Escarpment, Credit River, Humber River, and Don River systems create additional corridors distributing ticks into residential neighbourhoods throughout the GTA.</p>
          <p>The two-treatment seasonal approach covers the full active window: a late May treatment targets nymph peak season (May–July, the highest Lyme disease transmission period), and an August treatment addresses fall adult emergence. High-exposure properties adjacent to conservation lands or with confirmed deer movement benefit from three seasonal treatments.</p>

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
            <li><strong>Kills all life stages</strong> — Adults, nymphs, and larvae eliminated on contact</li>
            <li><strong>Up to 30-day residual protection</strong> — Formula bonds to surfaces and works continuously between visits</li>
            <li><strong>Health Canada–approved formula</strong> — Registered under the Pest Control Products Act, safe for children and pets after 30 minutes</li>
            <li><strong>Free re-spray guarantee</strong> — If ticks return within the protection window, we come back at no charge</li>
            <li><strong>SMS service log</strong> — Written documentation delivered after every visit</li>
          </ul>

          <h2>Also Providing Mosquito Control across Ontario</h2>
          <p>Bundle tick and mosquito control for complete seasonal yard protection — one visit covers both. See our <Link href="/mosquito-control-ontario" className="text-brand-700 hover:underline">Ontario mosquito control service</Link>.</p>
        </div>
      </section>

      <section className="py-10 px-4 bg-amber-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">FAQ – Tick Control in Ontario</h2>
          <div className="space-y-3">
            {FAQS.map(({ question, answer }) => (
              <details key={question} className="bg-white rounded-xl border border-amber-100 group">
                <summary className="cursor-pointer px-5 py-4 font-semibold text-brand-900 list-none flex justify-between items-center">
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

      <CTASection heading="Get a Free Quote for Your Ontario Property" subtext="Serving 19 GTA cities. No contracts, guaranteed results, Health Canada–approved tick spray." variant="dark" />
    </>
  )
}
