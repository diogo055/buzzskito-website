import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import InlineYardRiskCTA from '@/components/InlineYardRiskCTA'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema, howToSchema } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'

const SLUG = '/pool-backyard-mosquito-control'

const FAQS = [
  {
    question: 'Is mosquito spray safe to use around a swimming pool?',
    answer: 'Yes — when applied correctly. BuzzSkito uses Health Canada-approved water-based barrier formulas applied as a fine mist to vegetation surrounding the pool deck (shrubs, garden beds, tree canopy, fence-line plantings). We do not apply product to pool water, the pool deck surface itself, or to any treated water surface. Once the mist dries on vegetation (approximately 30 minutes), it bonds to leaf surfaces and does not leach into pool water during rain. Maintaining a 1-2 metre buffer from the pool edge during application prevents any product drift onto the water.',
  },
  {
    question: 'Why do backyard pools attract more mosquitoes than yards without pools?',
    answer: "Three reasons: (1) Surrounding vegetation — pool landscaping (mature shrubs, ornamental gardens, trees for shade and privacy) provides ideal adult mosquito resting habitat. (2) Standing water sources — pool covers that collect rainwater, decorative fountains, koi or goldfish ponds adjacent to pool decks, water features in landscaping, and even large outdoor dog water bowls all become breeding habitat. (3) Microclimate — pools and surrounding hardscape create humidity and heat retention that mosquitoes prefer. Even a properly chlorinated, well-maintained swimming pool itself doesn't breed mosquitoes (chlorine kills larvae) — but everything around it does.",
  },
  {
    question: 'Should I treat my pool cover for mosquitoes?',
    answer: 'Pool covers — particularly mesh safety covers and tarp covers — collect rainwater that becomes prime mosquito breeding habitat within 5-7 days. We recommend either: (1) regularly removing standing water from the cover surface, (2) using pool cover pumps to keep cover water below 1 inch, or (3) treating standing water on covers with Health Canada-approved BTI larvicide which kills mosquito larvae but is safe for the pool water if accidentally introduced (BTI is the same active ingredient used in municipal mosquito control programs over drinking water reservoirs). BuzzSkito treats pool cover water as part of our standard pool property service.',
  },
  {
    question: 'Can mosquitoes breed in a properly maintained swimming pool?',
    answer: "No. Active mosquito breeding requires standing, stagnant water with adequate organic material for larvae to feed on. A properly maintained pool with active filtration, regular chlorine treatment, and routine vacuuming creates conditions that kill mosquito larvae before they can develop. Pools become mosquito breeding grounds only when they are abandoned, partially drained with stagnant water remaining, or when filtration is disabled (e.g., during a winterization gap). The mosquito problem in pool yards almost always comes from surrounding vegetation, water features, and pool covers — not the pool itself.",
  },
  {
    question: 'Do you treat hot tubs, swim spas, and outdoor jacuzzis?',
    answer: "Hot tubs and swim spas have their own dynamics. Active hot tubs with chlorine/bromine sanitization don't breed mosquitoes (high temperatures kill larvae). However, the surrounding deck vegetation, pergola or gazebo overhead structures, and any landscape features around hot tubs do require treatment. Our standard pool service extends to all hot tub, swim spa, and outdoor jacuzzi installations on the property.",
  },
  {
    question: 'How does mosquito control work for a property with a koi pond or fish pond?',
    answer: "Koi and fish ponds present a unique challenge: ponds with active fish populations don't typically need treatment because fish eat mosquito larvae. However, the pond margins (vegetation, rocks, water plants) and the surrounding garden vegetation provide adult mosquito habitat that needs barrier spray treatment. We use Health Canada-approved formulas safe for fish, and maintain documented 2-metre buffer zones around water surfaces. For ponds without fish that hold standing water (decorative water features without fish, dry creek beds with seasonal pooling), we apply BTI larvicide which is safe for any aquatic ecology but lethal to mosquito larvae.",
  },
  {
    question: 'How much does pool yard mosquito control cost in the GTA?',
    answer: 'Pool yard mosquito treatment in the GTA starts from $99 per visit for properties under 10,000 sq ft. Pool properties typically benefit from the full 5-treatment seasonal program ($549) due to the elevated breeding pressure pool environments create. Many pool clients add tick protection as a bundle ($497) for full season coverage of both. No contracts, BuzzSkito Bite-Free Guarantee, free re-treatment if pests return inside the protection window. Call (289) 216-5030 for a free pool property assessment.',
  },
  {
    question: 'Is mosquito spray safe for my dog and kids if they go in the pool right after?',
    answer: "Yes. Once the spray has dried on vegetation (approximately 30 minutes), the property is fully safe for children and dogs to use the pool, deck, and yard normally. The product does not transfer from leaves to swimsuits, towels, or skin. We schedule pool yard applications for early morning (before pool use) to ensure the drying window is complete before the family is using the yard. We do not apply product to pool water, the pool deck, or any surface that direct skin contact occurs on.",
  },
]

export const metadata: Metadata = buildMetadata({
  title: 'Pool & Backyard Mosquito Control GTA · From $99 · Pool-Safe Application',
  description: "Specialist mosquito and tick spray for pool yards across the GTA. Health Canada-approved water-based formula, pool-safe application, BTI larvicide for pond/cover water. 150+ five-star reviews, BuzzSkito Bite-Free Guarantee. Call (289) 216-5030.",
  canonical: SLUG,
})

export default function PoolBackyardMosquitoControlPage() {
  const lbSchema = localBusinessSchema({ description: 'Pool yard mosquito and tick barrier spray for residential pool, hot tub, and water-feature properties across the Greater Toronto Area.' })
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: 'Pool Yard Mosquito Control', description: 'Specialist mosquito and tick barrier spray for residential pool yards across the GTA.', slug: SLUG })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: 'Pool Yard', url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema({ service: 'mosquito' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(SLUG)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-blue-900 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/mosquito-control" className="hover:text-white">Mosquito Control</Link><span>/</span>
            <span className="text-white">Pool Yard</span>
          </nav>
          <p className="text-xs font-extrabold text-amber-400 uppercase tracking-widest mb-3">Pool-Safe Application · Health Canada Approved · GTA-Wide</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5 leading-tight">
            Pool &amp; Backyard Mosquito Control GTA<br/>
            <span className="text-amber-400">From $99 · 150+ Five-Star Reviews</span>
          </h1>
          <p className="text-xl text-brand-100 max-w-3xl mb-8 leading-relaxed">
            Specialist mosquito and tick barrier spray for backyards with pools, hot tubs, koi ponds, or water features. Pool-safe water-based formula. BTI larvicide for cover water and ponds. Designed to protect your family without compromising pool chemistry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/free-yard-assessment" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get Pool Yard Quote</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-brand-900 text-white py-4 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-medium text-brand-200">
          <span>✓ Pool-Safe Water-Based Formula</span>
          <span>✓ Pool Cover &amp; Pond BTI Larvicide</span>
          <span>✓ Safe for Kids &amp; Dogs (30 min dry)</span>
          <span>✓ Health Canada-Approved</span>
          <span>✓ 5-Star Rated · 150+ Reviews</span>
        </div>
      </section>

      <section className="bg-amber-50 border-y-4 border-amber-300 py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-extrabold text-amber-700 uppercase tracking-wider mb-2">Quick Answer</p>
          <h2 className="text-xl sm:text-2xl font-extrabold text-brand-900 mb-3">Why do pool yards have more mosquitoes than yards without pools?</h2>
          <p className="text-base text-gray-800 leading-relaxed">
            <strong>Pool yards consistently have higher mosquito populations than non-pool yards because of three structural factors: surrounding vegetation (pool landscaping = adult resting habitat), water sources (pool covers, koi ponds, decorative fountains, dog bowls), and microclimate (humidity and heat retention from hardscape).</strong> The pool itself usually isn&rsquo;t the problem — chlorinated, properly maintained pools kill mosquito larvae. The problem is everything around the pool. BuzzSkito&rsquo;s pool yard service treats the surrounding vegetation with Health Canada-approved water-based barrier spray (no contact with pool water), applies BTI larvicide to cover water and any non-fish ponds, and provides 21-30 days of residual protection per visit. Most GTA pool yards benefit from the full 5-treatment seasonal program from May through September.
          </p>
        </div>
      </section>

      {/* WHY POOL YARDS ATTRACT MOSQUITOES */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-brand-900 mb-3">Why pool yards attract more mosquitoes</h2>
          <p className="text-base text-gray-700 mb-8 max-w-3xl">Most pool homeowners blame the pool itself. The pool is almost never the source. Here&rsquo;s what actually drives mosquito populations on pool properties:</p>

          <div className="grid md:grid-cols-2 gap-5 mb-10">
            <div className="rounded-2xl border-2 border-blue-200 bg-blue-50/30 p-6">
              <h3 className="text-lg font-extrabold text-brand-900 mb-3">🌿 Pool landscaping</h3>
              <p className="text-sm text-gray-700">Mature privacy hedges, ornamental shrub borders, garden beds with thick foliage, climbing vines on pergolas — pool landscaping creates dense vegetation cover that adult mosquitoes use to rest during the day. The same features that make your pool yard beautiful and private make it ideal mosquito habitat.</p>
            </div>
            <div className="rounded-2xl border-2 border-blue-200 bg-blue-50/30 p-6">
              <h3 className="text-lg font-extrabold text-brand-900 mb-3">💧 Pool covers</h3>
              <p className="text-sm text-gray-700">Mesh safety covers and solid tarp covers both collect rainwater. Within 5-7 days of standing water, mosquitoes can complete a full breeding cycle on the surface of your pool cover — without ever touching the pool itself. Cover pumps reduce this risk; BTI larvicide eliminates it entirely.</p>
            </div>
            <div className="rounded-2xl border-2 border-blue-200 bg-blue-50/30 p-6">
              <h3 className="text-lg font-extrabold text-brand-900 mb-3">🐟 Koi ponds &amp; water features</h3>
              <p className="text-sm text-gray-700">Decorative fountains, ornamental pools, dry creek beds, and even bird baths within 50 metres of your pool can sustain mosquito breeding. Koi and goldfish ponds with active fish typically don&rsquo;t need direct treatment (fish eat larvae), but their margins create adult resting habitat.</p>
            </div>
            <div className="rounded-2xl border-2 border-blue-200 bg-blue-50/30 p-6">
              <h3 className="text-lg font-extrabold text-brand-900 mb-3">☀️ Microclimate</h3>
              <p className="text-sm text-gray-700">Pool decks and surrounding hardscape retain heat and humidity, especially in evening hours when mosquitoes are most active. The temperature differential between pool decks and shaded vegetation creates the exact thermal conditions mosquitoes prefer for blood-feeding.</p>
            </div>
          </div>
        </div>
      </section>

      <InlineYardRiskCTA pretext="Free 60-second yard score · No obligation" />

      {/* HOW WE TREAT POOL YARDS */}
      <section className="bg-gray-50 py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-brand-900 mb-3">How BuzzSkito treats pool yards safely</h2>
          <p className="text-base text-gray-700 mb-8">Pool-safe application is fundamentally different from standard yard treatment. Three principles guide our pool yard work:</p>
          <ol className="space-y-4">
            <li className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="text-lg font-extrabold text-brand-900 mb-1">1. Maintain pool buffer zones</h3>
              <p className="text-sm text-gray-700">We maintain a documented 1-2 metre buffer from any pool edge, deck surface, or hardscape directly adjacent to water. The barrier spray is applied to vegetation only — never to pool decks, hardscape, or any surface that has direct human contact.</p>
            </li>
            <li className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="text-lg font-extrabold text-brand-900 mb-1">2. BTI for cover and pond water</h3>
              <p className="text-sm text-gray-700">For pool covers with collected rainwater, decorative ponds without fish, and seasonal standing water, we use Bacillus thuringiensis israelensis (BTI) — the same biological larvicide used in municipal mosquito control programs over drinking water reservoirs. BTI is lethal to mosquito larvae but safe for fish, frogs, birds, and human swimming.</p>
            </li>
            <li className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="text-lg font-extrabold text-brand-900 mb-1">3. Application timing for pool families</h3>
              <p className="text-sm text-gray-700">We schedule pool yard treatments for early morning (typically 7-10 AM), allowing the 30-minute drying window to complete before peak family pool use. By midday, treatment is fully cured and the yard is completely safe for swimming, sunbathing, and play.</p>
            </li>
          </ol>
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-brand-900 mb-3">Pool yard treatment pricing</h2>
          <p className="text-base text-gray-700 mb-6">Pool yard treatment is priced by lot size, same as standard residential service. Most GTA pool properties fall in the 6,000-15,000 sq ft range.</p>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="rounded-2xl border-2 border-gray-200 p-5">
              <p className="text-xs font-bold text-gray-500 uppercase">Single Treatment</p>
              <p className="text-3xl font-black text-brand-900 mt-1">$99-$159</p>
              <p className="text-sm text-gray-600 mt-2">For pool properties under 10,000 sq ft. Includes pool cover BTI treatment if needed. Rain-back guarantee.</p>
            </div>
            <div className="rounded-2xl border-2 border-amber-400 bg-amber-50/40 p-5 relative">
              <span className="absolute top-3 right-3 text-[9px] bg-amber-500 text-white font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Most Popular</span>
              <p className="text-xs font-bold text-amber-700 uppercase">Mosquito Season Plan</p>
              <p className="text-3xl font-black text-brand-900 mt-1">$549</p>
              <p className="text-sm text-gray-600 mt-2">5 treatments May-September. Bi-weekly during peak season. Best value for the standard pool property.</p>
            </div>
            <div className="rounded-2xl border-2 border-brand-200 p-5">
              <p className="text-xs font-bold text-brand-700 uppercase">Mosquito + Tick Combo</p>
              <p className="text-3xl font-black text-brand-900 mt-1">$1,046</p>
              <p className="text-sm text-gray-600 mt-2">5 mosquito + 5 tick treatments. Save $100 vs separate plans. Recommended for pool yards backing onto ravines.</p>
            </div>
          </div>
          <p className="text-xs text-gray-500 italic">Pricing reflects standard residential pool properties. Estate pool properties (1+ acre lots, multiple water features) are quoted separately — see our <Link href="/estate-property-mosquito-control" className="underline">Estate Property service</Link>.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">Frequently asked questions</h2>
          <div className="space-y-3">
            {FAQS.map(({ question, answer }) => (
              <details key={question} className="bg-white rounded-xl border border-gray-200 group">
                <summary className="cursor-pointer px-5 py-4 font-bold text-brand-900 list-none flex justify-between items-start gap-3">
                  <span>{question}</span>
                  <span className="text-brand-700 group-open:rotate-180 transition shrink-0">▾</span>
                </summary>
                <p className="px-5 pb-5 text-sm text-gray-700 leading-relaxed">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Get your pool yard quote" subtext="Free assessment · Pool-safe application · Same-week scheduling" />
    </>
  )
}
