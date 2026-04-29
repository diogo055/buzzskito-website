import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'

const CITY = 'Milton'
const SLUG = '/pest-control-milton'

export const metadata: Metadata = buildMetadata({
  title: `${CITY} Pest Control · Mosquito & Tick Specialist`,
  description: `${CITY} pest control specialist focused on mosquitoes and ticks. From $99/treatment, no contracts, BuzzSkito Bite-Free Guarantee. 129 five-star reviews.`,
  canonical: SLUG,
})

const FAQS = [
  {
    question: `What kind of pest control does BuzzSkito offer in ${CITY}?`,
    answer: `BuzzSkito is a specialist pest control company in ${CITY} focused exclusively on mosquitoes and ticks — the two outdoor pests that affect ${CITY} backyards most. We don't treat ants, rodents, cockroaches, bed bugs, or wildlife. We do mosquito and tick barrier spray better than generalists who cover everything, because that's all we do. Single treatments start at $99. Health Canada-approved formula. Safe for kids and pets in 30 minutes.`,
  },
  {
    question: `How is a specialist pest control company different from a general one in ${CITY}?`,
    answer: `General pest control companies offer 10–20 services — ants, mice, wasps, spiders, mosquitoes, ticks, etc. They train technicians on a wide catalogue and rotate between treatment types. A specialist (like BuzzSkito for mosquitoes and ticks) does one thing repeatedly. Our technicians know exactly where mosquitoes and ticks rest in ${CITY} backyards (Sixteen Mile Creek, conservation areas, Niagara Escarpment edge) and apply targeted barrier spray to those specific zones. The result: better kills, longer protection, fewer return visits.`,
  },
  {
    question: `What pests does BuzzSkito NOT treat?`,
    answer: `We don't treat ants, mice, rats, raccoons, bed bugs, cockroaches, wasps, hornets, spiders, fleas (without ticks), or any indoor pest. If you need general pest control in ${CITY}, look for a licensed company like Orkin, Aetna Pest Control, or your preferred local provider. For mosquitoes and ticks specifically, our specialty focus delivers better results than a generalist treating one of 20 different pests.`,
  },
  {
    question: `How much does pest control cost in ${CITY}?`,
    answer: `General pest control in ${CITY} for a one-time treatment typically runs $150–$400 depending on pest type and property size. BuzzSkito's specialty mosquito or tick barrier spray starts at $99 per treatment for a standard residential lot. We don't quote general pest control because we don't do it — but for mosquitoes and ticks, our pricing is among the most transparent in the GTA. Call (289) 216-5030 for a free quote.`,
  },
  {
    question: `Is BuzzSkito licensed for pest control in Ontario?`,
    answer: `Yes. BuzzSkito uses only Health Canada–approved barrier spray formulations applied by licensed Ontario pesticide applicators. We meet all provincial requirements under the Pesticides Act. Our specialty (mosquito + tick barrier spray) requires the same licensing as general pest control — we just don't extend our practice beyond what we're best at.`,
  },
  {
    question: `Why focus only on mosquitoes and ticks?`,
    answer: `Mosquitoes and ticks are the two outdoor pests that actually keep ${CITY} families inside during summer. Other pests are seasonal nuisances or indoor problems. By specializing, we built deeper knowledge of ${CITY}'s specific mosquito and tick pressure zones, the exact 1–3 metre transition habitats where ticks concentrate, and the leaf-underside resting sites where mosquitoes hide during the day. A jack-of-all-trades pest company can't focus that deeply.`,
  },
  {
    question: `What areas of ${CITY} does BuzzSkito serve?`,
    answer: `BuzzSkito serves all of ${CITY} for mosquito and tick control, with particular expertise in properties exposed to Sixteen Mile Creek, conservation areas, Niagara Escarpment edge. Same-week service is typical during the May–September season. Call (289) 216-5030 to confirm your specific address.`,
  },
  {
    question: `What's the BuzzSkito Bite-Free Guarantee?`,
    answer: `If pests return inside the protection window after a BuzzSkito treatment, we re-treat at no charge. Period. This applies to every visit in ${CITY}, no contracts required, no fine print. It's how we've built 129 five-star Google reviews with zero negative reviews — we stand behind every treatment.`,
  },
  {
    question: `When should ${CITY} homeowners book pest control for mosquitoes and ticks?`,
    answer: `Book your first mosquito barrier spray in mid-May for most ${CITY} properties — properties adjacent to Sixteen Mile Creek, conservation areas, Niagara Escarpment edge benefit from an early-May start. Tick treatments should target late May (nymph emergence) and again in August/September (adult activity). We'll help schedule your first appointment when you call (289) 216-5030.`,
  },
  {
    question: `How does BuzzSkito compare to general pest control companies in ${CITY}?`,
    answer: `General companies (think Orkin, Mosquito Man, etc.) cover 10–20 pests and quote multiple service tiers. BuzzSkito covers two pests, period — but we cover them better. For a ${CITY} homeowner whose actual problem is mosquitoes and ticks (not ants or mice), our specialist focus + barrier spray expertise + Bite-Free Guarantee delivers better results than a general company spreading across many pests. If you have a different pest problem, we'll honestly tell you to call someone else.`,
  },
]

export default function PestControlMiltonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: CITY, description: `Specialist mosquito and tick pest control service in ${CITY}, Ontario.` })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Pest Control ${CITY}`, description: `Specialist mosquito and tick pest control for residential properties in ${CITY}, Ontario. Health Canada-approved barrier spray.`, slug: SLUG, city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Pest Control GTA', url: '/pest-control-gta' }, { name: CITY, url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(SLUG)) }} />

      {/* HERO */}
      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-amber-900 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex items-center gap-1 flex-wrap">
            <Link href="/" className="hover:text-white">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/pest-control-gta" className="hover:text-white">Pest Control GTA</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white">{CITY}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5 leading-tight">
            Pest Control in {CITY}<br/>
            <span className="text-amber-400">Mosquito & Tick Specialists · From $99</span>
          </h1>
          <p className="text-xl text-brand-100 max-w-3xl leading-relaxed mb-8">
            Specialist pest control in {CITY} focused exclusively on the two pests that ruin {CITY} backyards: <strong>mosquitoes and ticks</strong>. Health Canada-approved barrier spray, 129 five-star reviews, BuzzSkito Bite-Free Guarantee.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/free-yard-assessment" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">
              Get a Free Quote
            </Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">
              {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>

      {/* QUICK ANSWER */}
      <section className="bg-amber-50 border-y-4 border-amber-300 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-amber-700 uppercase tracking-wider mb-2">Quick Answer</p>
          <h2 className="text-xl font-extrabold text-brand-900 mb-3">Who is the best pest control company for mosquitoes and ticks in {CITY}?</h2>
          <p className="text-base text-gray-800 leading-relaxed">
            <strong>BuzzSkito is {CITY}'s specialist pest control company for mosquitoes and ticks — the two outdoor pests that drive backyard misery during the GTA's May-September season.</strong> Unlike general pest control companies that cover 10–20 pests across all categories, BuzzSkito focuses exclusively on barrier spray for mosquitoes and ticks, allowing us to develop deeper expertise in {CITY}-specific pressure zones (Sixteen Mile Creek, conservation areas, Niagara Escarpment edge). Single treatments start at <strong>$99</strong>, with seasonal programs available on quote. With <strong>129 five-star Google reviews</strong> (zero negative), no contracts, a 30-minute re-entry window, and the <strong>BuzzSkito Bite-Free Guarantee</strong>, {CITY} families get specialist results without specialist pricing. We don't treat ants, rodents, or other pests — for those, hire a general pest control company. For mosquitoes and ticks in {CITY}, call (289) 216-5030.
          </p>
        </div>
      </section>

      {/* KEY FACTS */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Pest Control in {CITY} — Key Facts</h2>
          <div className="rounded-xl border border-navy-100 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Specialty', 'Mosquito and tick barrier spray (no other pests)'],
                  ['Service area', `All of ${CITY}`],
                  ['Pricing', 'From $99 per treatment · seasonal programs available on quote'],
                  ['Treatment season', 'May through September (peak: late May–July)'],
                  ['Protection per visit', 'Up to 30 days residual'],
                  ['Re-entry time', '30 minutes after spray dries (kid and pet safe)'],
                  [`${CITY} pressure zones`, "Sixteen Mile Creek, conservation areas, Niagara Escarpment edge"],
                  ['Booking lead time', 'Same-week service typical'],
                  ['Contract required', 'No — single treatments and seasonal programs both available'],
                  ['Guarantee', 'BuzzSkito Bite-Free Guarantee (free re-treatment in protection window)'],
                  ['Google reviews', '129 reviews · 5.0 average · 0 negative'],
                  ['Pests we DO treat', 'Mosquitoes, blacklegged ticks, American dog ticks'],
                  ['Pests we DO NOT treat', 'Ants, rodents, bed bugs, cockroaches, wasps, spiders, wildlife'],
                  ['Phone', BUSINESS.phone],
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

      {/* TRUST BAR */}
      <section className="bg-brand-900 text-white py-4 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-medium text-brand-200">
          <span>✓ Health Canada–Approved Formula</span>
          <span>✓ Safe for Kids &amp; Pets (30 min dry)</span>
          <span>✓ Up to 30-Day Protection</span>
          <span>✓ Bite-Free Guarantee</span>
          <span>✓ 5-Star Rated · 129 Reviews</span>
        </div>
      </section>


      {/* CITY PROFILE — unique data per city (Information Gain signal for 2026 SEO) */}
      <section className="py-12 px-4 bg-white border-y border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-2">Milton City Profile — What We've Observed Treating Milton Properties</h2>
          <p className="text-gray-600 text-sm mb-6">Data and observations specific to Milton, drawn from BuzzSkito field experience and public surveillance records (not generic content recycled across our city pages).</p>

          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            <div className="bg-brand-50 rounded-xl p-4">
              <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Population</p>
              <p className="text-lg font-extrabold text-brand-900 mt-1">147,000</p>
            </div>
            <div className="bg-brand-50 rounded-xl p-4">
              <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Households</p>
              <p className="text-lg font-extrabold text-brand-900 mt-1">~50,000</p>
            </div>
            <div className="bg-brand-50 rounded-xl p-4">
              <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Public Health</p>
              <p className="text-sm font-bold text-brand-900 mt-1 leading-tight">Halton Region Public Health</p>
            </div>
            <div className="bg-brand-50 rounded-xl p-4">
              <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Drive Time</p>
              <p className="text-sm font-bold text-brand-900 mt-1 leading-tight">~40–50 min from Mississauga HQ via 401/407</p>
            </div>
          </div>

          <h3 className="text-lg font-extrabold text-brand-900 mb-2">Milton FSAs (Postal Code Areas) We Service</h3>
          <p className="text-sm text-gray-700 mb-6 font-mono break-words">L9E, L9T</p>

          <h3 className="text-lg font-extrabold text-brand-900 mb-2">Specific Milton Landmarks Near Our Treatment Zones</h3>
          <p className="text-sm text-gray-700 mb-6">Sixteen Mile Creek, Niagara Escarpment, Crawford Lake Conservation Area, Mount Nemo Conservation Area, Kelso Conservation Area, Rattlesnake Point</p>

          <h3 className="text-lg font-extrabold text-brand-900 mb-3">Milton Mosquito & Tick Pressure by Neighborhood Tier</h3>
          <div className="rounded-xl border border-navy-100 overflow-hidden mb-6">
            <table className="w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-2 text-left">Pressure Tier</th>
                  <th className="px-4 py-2 text-left">Milton Neighborhoods</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50 last:border-0">
                  <td className="px-4 py-2 font-semibold text-brand-900 bg-gray-50 w-1/4">Tier 1 (highest)</td>
                  <td className="px-4 py-2 text-gray-800">Beaty Trail, Hampton Heights, Hawthorne Village — Escarpment edge</td>
                </tr>
                <tr className="border-b border-navy-50 last:border-0">
                  <td className="px-4 py-2 font-semibold text-brand-900 bg-gray-50 w-1/4">Tier 2 (high)</td>
                  <td className="px-4 py-2 text-gray-800">Bronte Meadows, Coates, Clarke — Sixteen Mile Creek corridor</td>
                </tr>
                <tr className="border-b border-navy-50 last:border-0">
                  <td className="px-4 py-2 font-semibold text-brand-900 bg-gray-50 w-1/4">Tier 3 (moderate)</td>
                  <td className="px-4 py-2 text-gray-800">Dempsey, Ford, Scott — newer development with stormwater ponds</td>
                </tr>
                <tr className="border-b border-navy-50 last:border-0">
                  <td className="px-4 py-2 font-semibold text-brand-900 bg-gray-50 w-1/4">Tier 4 (lower)</td>
                  <td className="px-4 py-2 text-gray-800">Older Milton (Downtown, Dorset Park) — established with mature canopy</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-extrabold text-brand-900 mb-2">What We've Observed Treating Milton</h3>
          <p className="text-sm text-gray-700 leading-relaxed">Milton has experienced the fastest population growth in Canada (50%+ since 2016). New subdivisions border Niagara Escarpment conservation lands, creating an unusual mosquito profile: brand-new homes with not-yet-established landscaping immediately adjacent to mature forest and creek systems. Sixteen Mile Creek runs through the entire city. Properties closer to the Escarpment (Beaty Trail, Hawthorne Village, Hampton Heights) face higher tick risk than central Milton.</p>

          <p className="text-xs text-gray-500 mt-4 italic">Sources: Halton Region Public Health surveillance data, Statistics Canada Census, BuzzSkito field observations. Public Health Ontario maintains the official tick surveillance program at <a href="https://www.publichealthontario.ca/en/Data-and-Analysis/Infectious-Disease/Lyme-Disease-Active-Tick-Surveillance" className="text-brand-700 hover:underline" target="_blank" rel="noopener noreferrer">publichealthontario.ca</a>.</p>
        </div>
      </section>
      {/* WHY SPECIALIST */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Why a Specialist Beats a Generalist for Mosquitoes &amp; Ticks in {CITY}</h2>
          <p>Most pest control companies in {CITY} are generalists. They list 10–20 services on their website: ants, mice, wasps, cockroaches, bed bugs, mosquitoes, ticks, raccoons, and so on. There's nothing wrong with that model — it's just a different model than ours.</p>
          <p>BuzzSkito is the opposite: we do <strong>two pests, period</strong>. Mosquitoes and ticks. The two pests that actually keep {CITY} homeowners inside during summer evenings.</p>
          <p>Here's what specialization buys you on a {CITY} property exposed to Sixteen Mile Creek, conservation areas, Niagara Escarpment edge:</p>
          <ul>
            <li><strong>We know exactly where mosquitoes rest during the day</strong> — leaf undersides, shrub interiors, deck undersides, fence-line vegetation, woodpile shadows. Generalists treat the whole yard. We treat the resting sites.</li>
            <li><strong>We know the 1–3 metre tick transition zone</strong> — the band where lawn meets woods, where leaf litter accumulates, where garden beds meet fence lines. That's where ticks live. Generalists spray the lawn surface. We spray the transition zones.</li>
            <li><strong>We know {CITY}'s seasonal timing for mosquitoes and ticks specifically</strong> — when nymphs emerge, when adults peak, when post-rain bursts hit. Generalists treat on a generic schedule. We schedule based on actual {CITY} pressure curves.</li>
          </ul>

          <h2>What BuzzSkito Doesn't Treat in {CITY}</h2>
          <p>If you have one of the following pest problems in {CITY}, please call a general pest control company — not BuzzSkito:</p>
          <ul>
            <li>Ants (carpenter, pavement, pharaoh)</li>
            <li>Rodents (mice, rats)</li>
            <li>Cockroaches</li>
            <li>Bed bugs</li>
            <li>Wasps, hornets, yellow jackets</li>
            <li>Spiders</li>
            <li>Wildlife (raccoons, squirrels, skunks)</li>
            <li>Indoor flies, gnats, fruit flies</li>
            <li>Fleas (without simultaneous tick problem)</li>
            <li>Termites</li>
          </ul>
          <p>For these issues, search "{CITY} pest control" and pick a licensed general company. We're happy to recommend approaches if you call us — but we won't take the job ourselves because we'd rather refer you than do mediocre work outside our specialty.</p>

          <h2>What BuzzSkito Does Treat in {CITY}</h2>
          <ul>
            <li><strong>Mosquito barrier spray</strong> — Health Canada-approved residual formula applied to all vegetation, shrub interiors, and resting sites. Up to 30-day protection. <Link href="/milton-mosquito-control">See {CITY} mosquito control →</Link></li>
            <li><strong>Tick barrier spray</strong> — targeted treatment of the 1–3 metre lawn-to-woods transition zone where blacklegged ticks and dog ticks concentrate. <Link href="/milton-tick-spray">See {CITY} tick control →</Link></li>
            <li><strong>Pre-event treatment</strong> for backyard weddings, parties, and outdoor gatherings — book 2–4 days before your event for peak protection.</li>
            <li><strong>Commercial mosquito and tick service</strong> — restaurants, golf courses, event venues, corporate campuses.</li>
          </ul>

          <h2>How to Choose Pest Control in {CITY}: Specialist vs Generalist Decision Tree</h2>
          <p>Here's the honest framework for {CITY} homeowners deciding between a specialist (BuzzSkito) and a generalist:</p>
          <ul>
            <li><strong>Call a generalist if:</strong> you have multiple different pest problems (ants AND mice AND mosquitoes), you want one-stop scheduling, or your primary concern is indoor pests.</li>
            <li><strong>Call BuzzSkito if:</strong> your primary concern is mosquito-driven backyard misery, you want Lyme disease prevention from ticks, you have a backyard event coming up, or you want the best possible mosquito/tick result rather than the most pests covered.</li>
          </ul>
          <p>Most {CITY} backyards in the Sixteen Mile Creek, conservation areas, Niagara Escarpment edge exposure zone are squarely in the "call BuzzSkito" category. Mosquitoes and ticks are the dominant pests in residential GTA properties — everything else is rarer or seasonal.</p>

          <h2>Pest Control Pricing in {CITY}: What to Expect</h2>
          <p>For mosquito and tick barrier spray specifically, BuzzSkito treatments in {CITY} start at <strong>$99 per visit</strong>. We don't quote multi-pest packages because we don't do multi-pest work. Seasonal programs are available on quote.</p>
          <p>For comparison: typical {CITY} general pest control pricing runs $150–$400 per visit depending on pest type, with bed bug or rodent jobs higher. We focus on transparent flat-rate pricing for our specialty: $99 minimum, custom quote for larger properties.</p>
          <p>Call (289) 216-5030 for a free quote. No contracts, no obligations, no upsell pressure.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">Pest Control in {CITY} — Frequently Asked Questions</h2>
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

      {/* RELATED */}
      <section className="py-12 px-4 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Related Services in {CITY}</h2>
          <ul className="space-y-2">
            <li>→ <Link href="/milton-mosquito-control" className="text-brand-700 hover:underline font-semibold">{CITY} Mosquito Control</Link> — our specialty barrier spray for mosquitoes</li>
            <li>→ <Link href="/milton-tick-spray" className="text-brand-700 hover:underline font-semibold">{CITY} Tick Control</Link> — Lyme disease prevention and yard tick spray</li>
            <li>→ <Link href="/pest-control-gta" className="text-brand-700 hover:underline">Pest Control GTA Pillar</Link> — overview of mosquito + tick specialist services across the GTA</li>
            <li>→ <Link href="/mosquito-control" className="text-brand-700 hover:underline">All Mosquito Control Services</Link></li>
            <li>→ <Link href="/tick-control" className="text-brand-700 hover:underline">All Tick Control Services</Link></li>
            <li>→ <Link href="/free-yard-assessment" className="text-brand-700 hover:underline">Free Yard Assessment</Link> — start here for a custom quote</li>
          </ul>
        </div>
      </section>

      <CTASection heading={`Get a Free Mosquito & Tick Quote in ${CITY}`} subtext={`Specialist barrier spray for ${CITY} backyards. Same-week service.`} />
    </>
  )
}
