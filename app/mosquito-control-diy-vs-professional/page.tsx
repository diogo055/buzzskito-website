import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, faqSchema, speakableSchema, howToSchema } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'DIY vs Professional Mosquito Control — Is It Worth It? | BuzzSkito',
  description:
    'DIY vs professional mosquito control — cost, effectiveness & safety compared. See when DIY makes sense vs hiring a pro. From $99/treatment.',
  canonical: '/mosquito-control-diy-vs-professional',
})

const FAQS = [
  {
    question: 'Is professional mosquito control worth the cost?',
    answer: 'For most GTA properties, yes. A single professional barrier spray treatment (from $99) provides up to 30 days of full-property protection. DIY foggers cost $50-$90 plus refills and provide only 2-4 hours of partial coverage. When you factor in time spent reapplying, limited effectiveness, and safety risks of consumer chemicals, professional treatment is typically more cost-effective per hour of actual protection delivered.',
  },
  {
    question: 'Do citronella candles actually work for mosquitoes?',
    answer: 'Citronella candles provide minimal protection. Studies show they reduce mosquito landings by only 40-50% within a very small radius (a few feet from the flame). They only work while burning, they are ineffective in wind, and they do not address the mosquito population — only mask your scent temporarily. For a dining table they may help slightly; for a full backyard or event, they are not a meaningful solution.',
  },
  {
    question: 'Are DIY mosquito foggers safe to use?',
    answer: 'Consumer foggers from hardware stores contain similar active ingredients to professional products, but homeowners typically lack the training and equipment to apply them safely and effectively. Common risks include: over-application (using more product than necessary), spraying in windy conditions that cause drift, applying near water features or vegetable gardens without proper buffer zones, and inhaling product during application. Professional applicators are licensed and trained to avoid these issues.',
  },
  {
    question: 'What about natural mosquito repellents like essential oils?',
    answer: 'Essential oil-based repellents (lemongrass, peppermint, eucalyptus) provide very short-duration protection — typically 30-60 minutes — and only in the immediate area of application. They do not kill mosquitoes or reduce the population. They can be useful as a personal repellent supplement but are not a property-level solution. No essential oil product provides the residual 30-day barrier that professional treatment delivers.',
  },
  {
    question: 'When does DIY mosquito control actually make sense?',
    answer: 'DIY approaches make sense in three scenarios: (1) Very low mosquito pressure — if your property is inland, well away from water features, and you only occasionally see mosquitoes, source reduction (eliminating standing water) may be sufficient. (2) Personal repellent for hiking or camping — DEET or picaridin-based personal repellents are effective for individual protection in the wilderness. (3) Supplementing professional treatment — eliminating standing water on your property between professional treatments extends the effectiveness of the barrier spray.',
  },
]

export default function DIYvsProfessionalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: 'DIY vs Professional', url: '/mosquito-control-diy-vs-professional' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema({ service: 'mosquito' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/mosquito-control-diy-vs-professional')) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/mosquito-control" className="hover:text-white">Mosquito Control</Link><span>/</span>
            <span className="text-white">DIY vs Professional</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">DIY vs Professional Mosquito Control &mdash; Is It Worth It?</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            Citronella candles, home foggers, essential oils, and yard sprays compared to professional barrier treatment. An honest breakdown of cost, effectiveness, and safety.
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
          <span>&#10003; Health Canada&ndash;Approved Formula</span>
          <span>&#10003; Safe for Kids &amp; Pets (30 min dry)</span>
          <span>&#10003; Up to 30-Day Protection</span>
          <span>&#10003; Rain-Back Guarantee</span>
          <span>&#10003; 5-Star Rated &middot; 126 Reviews</span>
        </div>
      </section>

      {/* Main content */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>The Real Comparison: DIY vs Professional Mosquito Control</h2>
          <p>Every spring, GTA homeowners face the same question: should I try to handle mosquitoes myself, or hire a professional? The answer depends on your property, your mosquito pressure, and what you&rsquo;re actually trying to achieve. Here&rsquo;s an honest comparison.</p>

          {/* Main comparison table */}
          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-800 text-white">
                  <th className="px-4 py-3 text-left">Method</th>
                  <th className="px-4 py-3 text-left">Cost</th>
                  <th className="px-4 py-3 text-left">Protection Duration</th>
                  <th className="px-4 py-3 text-left">Coverage Area</th>
                  <th className="px-4 py-3 text-left">Effectiveness</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { method: 'Citronella candles/torches', cost: '$20-$60/season', duration: 'Only while burning', area: '2-3 foot radius', eff: 'Low — masks scent only' },
                  { method: 'Essential oil sprays', cost: '$15-$40/bottle', duration: '30-60 minutes', area: 'Immediate spray zone', eff: 'Very low — no residual' },
                  { method: 'Consumer fogger (Home Depot)', cost: '$50-$90 + refills', duration: '2-4 hours', area: 'Open air only', eff: 'Moderate — misses resting sites' },
                  { method: 'DIY yard concentrate spray', cost: '$30-$70/bottle', duration: '1-2 weeks (if applied correctly)', area: 'Wherever you spray', eff: 'Moderate — application skill matters' },
                  { method: 'Mosquito traps (propane/CO2)', cost: '$200-$600 upfront', duration: 'Continuous (while running)', area: '~1 acre radius claim', eff: 'Moderate — catches some, not all' },
                  { method: 'Professional barrier spray', cost: 'From $99/treatment', duration: 'Up to 30 days', area: 'Full property — all vegetation', eff: 'High — kills + residual barrier' },
                ].map(({ method, cost, duration, area, eff }) => (
                  <tr key={method} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-3 font-semibold text-gray-800">{method}</td>
                    <td className="px-4 py-3 text-brand-700 font-semibold">{cost}</td>
                    <td className="px-4 py-3 text-gray-600">{duration}</td>
                    <td className="px-4 py-3 text-gray-600">{area}</td>
                    <td className="px-4 py-3 text-gray-600">{eff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>Citronella Candles &amp; Torches</h2>
          <p><strong>Cost:</strong> $20&ndash;$60 per season for a set of candles or tiki torches.</p>
          <p><strong>How they work:</strong> Citronella oil produces a scent that partially masks the CO2 and body odours that attract mosquitoes. The effect is limited to a small radius around each flame.</p>
          <p><strong>Reality:</strong> Studies show citronella candles reduce mosquito landings by about 40&ndash;50% within a few feet of the flame. That sounds decent until you realize: the effect disappears the moment the candle goes out, wind eliminates the scent barrier, and they do nothing about the mosquito population on your property. They&rsquo;re a supplement at best &mdash; not a solution.</p>

          <h2>Essential Oil Sprays &amp; Natural Repellents</h2>
          <p><strong>Cost:</strong> $15&ndash;$40 per bottle for lemongrass, peppermint, or eucalyptus-based sprays.</p>
          <p><strong>How they work:</strong> Plant-based oils create a temporary scent barrier on treated surfaces.</p>
          <p><strong>Reality:</strong> Essential oil-based products provide 30&ndash;60 minutes of limited repellency. They do not kill mosquitoes, they have no residual effect, and they wash away with the first rain or watering. They can smell pleasant, which is their main advantage. They are not a property-level mosquito control solution.</p>

          <h2>Consumer Foggers (Home Hardware, Home Depot)</h2>
          <p><strong>Cost:</strong> $50&ndash;$90 for the unit, plus $15&ndash;$30 per refill canister.</p>
          <p><strong>How they work:</strong> Battery or propane-powered units create a visible fog of insecticide that kills mosquitoes on contact in the air.</p>
          <p><strong>Reality:</strong> Foggers kill mosquitoes that are currently flying in the open air &mdash; but most mosquitoes aren&rsquo;t. Mosquitoes spend 90% of their time resting on the undersides of leaves, inside shrub interiors, and in shaded vegetation. A fogger misses all of those resting sites. The fog dissipates in 2&ndash;4 hours, leaving no residual barrier. You&rsquo;re also applying pesticide without training, which creates safety risks around children, pets, and neighbours.</p>

          <h2>DIY Yard Concentrate Sprays</h2>
          <p><strong>Cost:</strong> $30&ndash;$70 per bottle of concentrated permethrin or bifenthrin product from a hardware store.</p>
          <p><strong>How they work:</strong> You dilute the concentrate in a pump sprayer and apply it to vegetation around your yard &mdash; essentially the same concept as professional barrier spray.</p>
          <p><strong>Reality:</strong> This is the closest DIY equivalent to professional treatment, and it can work &mdash; if you apply it correctly. The challenges:</p>
          <ul>
            <li><strong>Application technique matters</strong> &mdash; you need to treat the undersides of leaves, not just the tops. Most homeowners spray surfaces rather than penetrating vegetation.</li>
            <li><strong>Dilution rates</strong> &mdash; incorrect mixing leads to under-application (ineffective) or over-application (wasteful and potentially harmful).</li>
            <li><strong>Equipment</strong> &mdash; a $30 pump sprayer doesn&rsquo;t produce the fine mist of a professional backpack sprayer. Droplet size affects coverage and adhesion.</li>
            <li><strong>Safety</strong> &mdash; without training, you may not maintain proper buffer zones around water features, vegetable gardens, or areas where children play.</li>
            <li><strong>Time</strong> &mdash; treating a typical GTA backyard takes 30&ndash;45 minutes with a consumer sprayer. A professional does it in 15&ndash;20 minutes with better coverage.</li>
          </ul>

          <h2>Mosquito Traps (Propane/CO2)</h2>
          <p><strong>Cost:</strong> $200&ndash;$600 for the unit, plus ongoing propane and attractant costs.</p>
          <p><strong>How they work:</strong> Traps emit CO2, heat, and attractants to lure mosquitoes into a collection chamber where they die.</p>
          <p><strong>Reality:</strong> Traps can catch meaningful numbers of mosquitoes over time, but they don&rsquo;t eliminate the breeding population. Studies show mixed results &mdash; some properties see reduction, others don&rsquo;t. They require continuous operation, ongoing cost for fuel and attractants, and they don&rsquo;t address ticks at all. Best used as a supplement to other control methods, not a standalone solution.</p>

          <h2>Professional Barrier Spray</h2>
          <p><strong>Cost:</strong> From $99 per treatment at BuzzSkito.</p>
          <p><strong>How it works:</strong> A licensed technician applies Health Canada-approved formula to all vegetation on your property using a professional backpack sprayer. The product kills mosquitoes on contact where they rest &mdash; undersides of leaves, shrub interiors, fence lines, and structural perimeters &mdash; and leaves a residual barrier for up to 30 days.</p>
          <p><strong>Reality:</strong> Professional barrier spray is the most effective single approach to mosquito control for residential properties. It targets the places where mosquitoes actually spend their time, provides weeks of residual protection per treatment, and is applied safely by trained, licensed applicators. The per-treatment cost is competitive with a season&rsquo;s worth of DIY supplies, but the results are significantly better.</p>

          {/* Cost comparison table */}
          <h2>Season Cost Comparison</h2>
          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-800 text-white">
                  <th className="px-4 py-3 text-left">Approach</th>
                  <th className="px-4 py-3 text-left">Season Cost (May-Sep)</th>
                  <th className="px-4 py-3 text-left">Your Time</th>
                  <th className="px-4 py-3 text-left">Days of Protection</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { approach: 'Citronella candles (weekly use)', cost: '$60-$120', time: '10+ hours setup/refuel', days: '0 — only works while burning' },
                  { approach: 'Consumer fogger (weekly use)', cost: '$150-$250', time: '15+ hours of fogging', days: '0 — 2-4 hours per use' },
                  { approach: 'DIY concentrate (5 applications)', cost: '$100-$200 + sprayer', time: '10-15 hours total', days: '35-70 days (if applied correctly)' },
                  { approach: 'BuzzSkito Basic (3 treatments)', cost: '$549', time: '0 — we do everything', days: '~90 days of protection' },
                  { approach: 'BuzzSkito Standard (4 treatments)', cost: '$994', time: '0 — we do everything', days: '~120 days of protection' },
                ].map(({ approach, cost, time, days }) => (
                  <tr key={approach} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-3 font-semibold text-gray-800">{approach}</td>
                    <td className="px-4 py-3 text-brand-700 font-semibold">{cost}</td>
                    <td className="px-4 py-3 text-gray-600">{time}</td>
                    <td className="px-4 py-3 text-gray-600">{days}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>Safety: DIY vs Professional</h2>
          <p>The most important difference between DIY and professional mosquito control is safety. Consumer pesticide products contain the same types of active ingredients as professional products &mdash; but without training, homeowners face real risks:</p>
          <ul>
            <li><strong>Over-application</strong> &mdash; using more product than the label specifies, especially near play areas</li>
            <li><strong>Drift</strong> &mdash; spraying in wind, sending product onto neighbouring properties or into water features</li>
            <li><strong>Inadequate buffer zones</strong> &mdash; spraying too close to vegetable gardens, fish ponds, or children&rsquo;s play equipment</li>
            <li><strong>Inhalation</strong> &mdash; not wearing proper PPE during application</li>
            <li><strong>Storage</strong> &mdash; keeping concentrated chemicals accessible to children or pets</li>
          </ul>
          <p>Licensed professional applicators are trained to manage all of these risks. Ontario law requires a Pesticide Applicator&rsquo;s Licence for commercial application &mdash; that training exists for good reason.</p>

          <h2>When DIY Makes Sense</h2>
          <p>Professional treatment isn&rsquo;t necessary for every property. DIY approaches can be sufficient when:</p>
          <ul>
            <li>Your property is well away from water features, ravines, or conservation areas</li>
            <li>You only occasionally see mosquitoes &mdash; not regular evening swarms</li>
            <li>Source reduction (eliminating standing water) is enough to keep populations low</li>
            <li>You&rsquo;re comfortable with pesticide application safety and follow label directions precisely</li>
          </ul>
          <p>For GTA properties near the Credit River, Humber Valley, Don Valley, Lake Ontario shoreline, or any stormwater management pond &mdash; DIY approaches typically cannot match the sustained protection that professional barrier spray provides.</p>

          <h2>The Best Approach: Professional + Source Reduction</h2>
          <p>The most effective mosquito control combines professional barrier spray with basic DIY source reduction:</p>
          <ul>
            <li>Professional barrier spray every 21&ndash;28 days for population knockdown and residual protection</li>
            <li>Eliminate standing water in plant saucers, bird baths, clogged gutters, and pool covers between treatments</li>
            <li>Keep vegetation trimmed to reduce shaded resting habitat</li>
          </ul>
          <p>This combination provides the best results and extends the effectiveness of each professional treatment.</p>

          <h2>Related Pages</h2>
          <ul>
            <li><Link href="/mosquito-control-pricing" className="text-brand-700 hover:underline">Mosquito Control Pricing 2026</Link> &mdash; transparent pricing by property size and program</li>
            <li><Link href="/best-mosquito-control-companies-gta" className="text-brand-700 hover:underline">Best Mosquito Control Companies GTA</Link> &mdash; compare providers</li>
            <li><Link href="/mosquito-control-cost" className="text-brand-700 hover:underline">Mosquito Control Cost Ontario</Link> &mdash; what affects pricing</li>
            <li><Link href="/contact" className="text-brand-700 hover:underline">Contact BuzzSkito</Link> &mdash; get a free quote</li>
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
              { author: 'Mike T.', text: 'Second year using BuzzSkito for the season package. Consistent, reliable, and actually works. Our backyard used to be unbearable by July \u2014 now we\u2019re out there every evening.' },
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

      {/* FAQ */}
      <section className="py-10 px-4 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">DIY vs Professional Mosquito Control &mdash; FAQ</h2>
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

      <CTASection heading="Ready to Skip the DIY?" subtext="Professional mosquito control from $99/treatment. No contracts. Health Canada-approved. Free quotes." />
    </>
  )
}
