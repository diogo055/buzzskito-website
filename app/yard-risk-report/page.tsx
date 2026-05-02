import type { Metadata } from 'next'
import Link from 'next/link'
import YardRiskQuiz from '@/components/YardRiskQuiz'
import { buildMetadata, breadcrumbSchema, faqSchema, speakableSchema } from '@/lib/seo'

const SLUG = '/yard-risk-report'

const FAQS = [
  {
    question: 'What is the BuzzSkito Yard Risk Report?',
    answer: 'A free 60-second assessment that calculates your property&rsquo;s mosquito and tick pressure score (1-100) using your address, neighbourhood data, ravine and water-source proximity, lot size, and family situation. You receive an instant on-page score plus a detailed custom report emailed to you within 60 seconds.',
  },
  {
    question: 'How does BuzzSkito calculate my yard risk score?',
    answer: 'The scoring algorithm weighs four factors: (1) geographic pressure based on your specific neighbourhood and proximity to known breeding sources like the Credit River, Don Valley ravines, Niagara Escarpment, or conservation areas; (2) yard features you select (ravine-adjacent, creek-adjacent, pond, wooded lot, etc.); (3) lot size; and (4) family stake (kids, pets, elderly). Each factor adjusts your base score on a 1-100 scale.',
  },
  {
    question: 'Is the Yard Risk Report really free?',
    answer: 'Yes — completely free, no credit card, no obligation. We invest in this tool because it helps homeowners understand their actual risk profile and make informed decisions about mosquito and tick protection. Even if you decide not to hire BuzzSkito, the report includes useful DIY recommendations and a peak-weeks calendar specific to your area.',
  },
  {
    question: 'What service area does BuzzSkito cover?',
    answer: 'BuzzSkito services 19 cities across the Greater Toronto Area: Mississauga, Toronto, Brampton, Oakville, Burlington, Hamilton, Vaughan, Richmond Hill, Markham, Etobicoke, Scarborough, North York, Caledon, Milton, Georgetown, Halton Hills, King City, Woodbridge, and Thornhill — plus 30+ neighbourhoods within these cities. Addresses outside the GTA still receive a general report by email but are not eligible for service.',
  },
  {
    question: 'How accurate is the score?',
    answer: 'The score reflects real geographic and environmental factors validated against Public Health Ontario tick surveillance data, GTA neighbourhood pressure observations, and 129 customer outcomes across the 19 cities BuzzSkito serves. It&rsquo;s designed as a relative pressure indicator (your yard vs. similar yards), not an absolute predictor of bite count. Most properties scoring 70+ benefit significantly from professional barrier spray.',
  },
  {
    question: 'What happens after I submit my email?',
    answer: 'Three things happen instantly: (1) your custom report is emailed to you within 60 seconds; (2) if you opted in for a callback, Alex (BuzzSkito&rsquo;s owner) calls you within 30 minutes to walk through your specific recommendations; (3) your report is saved so you can reference it later. We never sell your information and we never auto-charge anything.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: 'Free GTA Yard Mosquito & Tick Risk Report — Get Your 1-100 Score by Address',
  description: 'Enter your GTA address (Toronto, Mississauga, Oakville, Burlington, Brampton, Vaughan, Hamilton, +) and get an instant 1-100 mosquito and tick pressure score for your yard. 60-second assessment, free custom report emailed in 60 seconds. Owner-operated · 129 five-star reviews · Health Canada approved.',
  canonical: SLUG,
})

export default function YardRiskReportPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Free Yard Risk Report', url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(SLUG)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-extrabold text-amber-400 uppercase tracking-widest mb-2">Free · 60 Seconds · No Obligation</p>
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 leading-tight">
            What&rsquo;s your yard&rsquo;s <span className="text-amber-400">mosquito &amp; tick risk score</span>?
          </h1>
          <p className="text-lg text-brand-100 max-w-2xl mx-auto">Personalized to your address, neighbourhood, lot, and family. Used by 129 five-star GTA homeowners.</p>
        </div>
      </section>

      <YardRiskQuiz />

      {/* ── INVERTED PYRAMID SUMMARY (AI Overview / featured snippet bait) ──────── */}
      <section className="bg-amber-50 border-y-4 border-amber-300 py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-extrabold text-amber-700 uppercase tracking-wider mb-2">Quick Answer</p>
          <h2 className="text-xl font-extrabold text-brand-900 mb-3">What is the BuzzSkito Yard Risk Report?</h2>
          <p className="text-base text-gray-800 leading-relaxed">
            <strong>The BuzzSkito Yard Risk Report is a free 60-second online assessment that calculates a 1-to-100 mosquito and tick pressure score for any property in the Greater Toronto Area.</strong> The score combines your specific address (neighbourhood pressure data, ravine and water-source proximity), lot size, yard features, family situation, and last-summer experience. After you complete the 10-question assessment, your score appears instantly on screen and a detailed personalized report — written by Alex, BuzzSkito&rsquo;s owner — is emailed to you within 60 seconds. No credit card, no contracts, no obligation. Available across all 19 GTA cities BuzzSkito services: Toronto, Mississauga, Oakville, Burlington, Brampton, Vaughan, Hamilton, Richmond Hill, Markham, Etobicoke, Scarborough, North York, Caledon, Milton, Georgetown, Halton Hills, King City, Woodbridge, and Thornhill.
          </p>
        </div>
      </section>

      {/* ── HOW IT WORKS — Educational depth for SEO ──────────────────────────── */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-3xl mx-auto prose-brand">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-3">How the BuzzSkito Yard Risk Score Works</h2>
          <p className="text-gray-700 mb-5">The risk score weighs four categories of factors that determine actual mosquito and tick pressure on a residential GTA property. The algorithm draws on neighbourhood-specific data we&rsquo;ve collected across 200+ GTA properties since launch.</p>

          <h3 className="text-lg font-extrabold text-brand-900 mt-6 mb-3">1. Geographic pressure (up to 30 points)</h3>
          <p className="text-gray-700 mb-3">Your property&rsquo;s location is the single largest factor. Specific GTA neighbourhoods score higher because they sit within mosquito and tick reservoirs:</p>
          <ul className="text-gray-700 mb-5 space-y-1">
            <li><strong>Credit River corridor</strong> (Streetsville, Meadowvale, Erin Mills, Port Credit) — permanent flowing water = continuous mosquito breeding May-October</li>
            <li><strong>Don Valley ravine system</strong> (Rosedale, Forest Hill, Leaside, East York, Don Mills) — Toronto&rsquo;s 11,000-acre ravine network is the largest mosquito and tick reservoir in any North American city</li>
            <li><strong>Niagara Escarpment edge</strong> (Burlington, Hamilton, Halton Hills, Milton) — escarpment forests support both mosquito populations and the deer/rodent hosts that ticks ride into yards</li>
            <li><strong>Oak Ridges Moraine</strong> (Caledon, King City, Richmond Hill north) — one of Ontario&rsquo;s highest tick-density zones</li>
            <li><strong>Lake Ontario shoreline</strong> (Toronto, Mississauga, Oakville, Burlington) — humidity extends the mosquito season 1-2 weeks longer than inland properties</li>
            <li><strong>Rouge National Urban Park</strong> (Scarborough, Markham) — protected park habitat, high tick density</li>
            <li><strong>Conservation areas</strong> (Sixteen Mile Creek, Bronte Creek, Cootes Paradise) — buffer zones around protected lands</li>
          </ul>

          <h3 className="text-lg font-extrabold text-brand-900 mt-6 mb-3">2. Yard features (up to 30 points)</h3>
          <p className="text-gray-700 mb-3">What your property backs onto changes the equation more than what city you&rsquo;re in. A wooded lot in Etobicoke can outscore an open suburban lot in Hamilton. The features that matter most:</p>
          <ul className="text-gray-700 mb-5 space-y-1">
            <li><strong>Ravine-adjacent lot</strong> — humid microclimate, mosquito resting habitat, tick host travel corridor</li>
            <li><strong>Creek or river frontage</strong> — continuous flowing water = continuous breeding</li>
            <li><strong>Pond on or near property</strong> — a standard backyard pond can produce 10,000+ mosquitoes per untreated season</li>
            <li><strong>Conservation area boundary</strong> — highest tick burden of any GTA setting</li>
            <li><strong>Heavily wooded lot</strong> — mature canopy creates the humid microclimate mosquitoes prefer</li>
            <li><strong>Lake-adjacent</strong> — extended season due to humidity</li>
          </ul>

          <h3 className="text-lg font-extrabold text-brand-900 mt-6 mb-3">3. Lot size and exposure</h3>
          <p className="text-gray-700 mb-5">Larger lots have more vegetation surface area and more potential breeding sites. The score scales with lot size, but only up to a point — even a small Toronto semi can score in the high range if it backs onto a ravine.</p>

          <h3 className="text-lg font-extrabold text-brand-900 mt-6 mb-3">4. Family stake and history</h3>
          <p className="text-gray-700 mb-5">Properties with young kids, pets (especially dogs), or elderly household members get an adjusted recommendation tier. Past experience matters too — &ldquo;last summer was unbearable&rdquo; is the strongest single signal that structural property factors are driving year-over-year pressure, not bad luck.</p>

          <h2 className="text-2xl font-extrabold text-brand-900 mt-10 mb-3">What&rsquo;s in the personalized report email</h2>
          <p className="text-gray-700 mb-3">Within 60 seconds of completing the assessment, your custom report arrives in your inbox. It includes:</p>
          <ul className="text-gray-700 mb-5 space-y-1">
            <li><strong>Property snapshot</strong> — your specific address with the exact pressure factors driving your score</li>
            <li><strong>Neighbourhood profile</strong> — what&rsquo;s happening in your specific GTA neighbourhood (water sources, ravine systems, tick density data)</li>
            <li><strong>Peak risk weeks for your area</strong> — calibrated to lakefront-vs-inland season variations</li>
            <li><strong>Tick situation specific to your setup</strong> — Public Health Ontario data for your region, Lyme disease context, blacklegged tick population trends</li>
            <li><strong>Honest assessment of what you&rsquo;ve already tried</strong> — why dunks alone don&rsquo;t solve adult populations, why citronella has 5-15% efficacy at 1 metre, etc.</li>
            <li><strong>5 zero-cost weekend fixes</strong> — practical DIY actions ranked by impact</li>
            <li><strong>What to expect in the follow-up quote</strong> — Alex sends a custom protection plan with specific pricing within 24 hours</li>
          </ul>

          <h2 className="text-2xl font-extrabold text-brand-900 mt-10 mb-3">Why a personalized assessment beats a generic quote form</h2>
          <p className="text-gray-700 mb-3">Most pest control companies use a simple &ldquo;Request a Quote&rdquo; form. You enter your name and address, then wait. The pricing they send back is template pricing — same numbers as everyone else in your city, regardless of whether your specific yard backs onto a ravine or sits on an open lot 2 km from any water source.</p>
          <p className="text-gray-700 mb-5">The BuzzSkito Yard Risk Report inverts that. You see your custom risk profile FIRST. Then Alex reviews your specific property factors and quotes individually. Same-sized lot in two different Mississauga neighbourhoods can need very different treatment plans — and the only way to price honestly is to look at the actual factors first.</p>

          <h2 className="text-2xl font-extrabold text-brand-900 mt-10 mb-3">Common GTA mosquito and tick risk factors</h2>
          <p className="text-gray-700 mb-3">After 200+ GTA property assessments, the patterns are clear. The single biggest predictor of mosquito pressure isn&rsquo;t which city you live in — it&rsquo;s your distance to flowing water and your lot&rsquo;s vegetation density. Specifically:</p>
          <ul className="text-gray-700 mb-5 space-y-1">
            <li>Properties within <strong>500 metres of a river or major creek</strong> see 3-5x higher mosquito populations than the city average</li>
            <li>Properties within <strong>200 metres of a pond or stormwater pond</strong> see 2-4x higher pressure</li>
            <li><strong>Wooded lots</strong> have 2-3x higher tick burden than open lawns, regardless of city</li>
            <li><strong>Properties bordering conservation areas</strong> have the highest combined mosquito + tick pressure of any setting in the GTA</li>
            <li><strong>Lakefront properties</strong> in Toronto, Mississauga, Oakville, and Burlington run a 1-2 week longer mosquito season than inland Brampton, Vaughan, or Markham</li>
          </ul>

          <h2 className="text-2xl font-extrabold text-brand-900 mt-10 mb-3">How accurate is the score?</h2>
          <p className="text-gray-700 mb-5">The score is a relative pressure indicator validated against three data sources: Public Health Ontario tick surveillance, observed mosquito pressure across BuzzSkito&rsquo;s 200+ treated properties, and the Ontario Ministry of Natural Resources GTA wetland mapping. It&rsquo;s designed to predict your yard&rsquo;s pressure relative to other yards in your area — not to predict an exact bite count. Most properties scoring 70+ benefit significantly from professional barrier spray; properties scoring 40-70 typically do well with hybrid DIY-plus-spot-treatment plans; properties scoring under 40 can often manage with diligent water control alone.</p>

          <h2 className="text-2xl font-extrabold text-brand-900 mt-10 mb-3">Trusted by 129 GTA homeowners</h2>
          <p className="text-gray-700 mb-3">BuzzSkito is owner-operated by Alex out of Mississauga. We service 19 cities across the Greater Toronto Area with a Health Canada-approved formulation, applied by an Ontario-licensed pesticide operator (Licence #L-240-2436835197).</p>
          <ul className="text-gray-700 mb-5 space-y-1">
            <li>129 verified Google reviews · 5.0-star average · zero negative reviews</li>
            <li>Bite-Free Guarantee — if pests come back inside the protection window, we re-treat free</li>
            <li>Same-week scheduling during peak season</li>
            <li>No contracts — book single treatments or seasonal plans, your choice</li>
          </ul>

          <h2 className="text-2xl font-extrabold text-brand-900 mt-10 mb-3">Related reading</h2>
          <ul className="text-gray-700 mb-5 space-y-1">
            <li><Link href="/blog/mosquito-season-gta-when-does-it-start" className="text-brand-700 underline">When Does Mosquito Season Start in the GTA?</Link></li>
            <li><Link href="/blog/ultimate-tick-control-guide-ontario" className="text-brand-700 underline">Ultimate Tick Control Guide for Ontario</Link></li>
            <li><Link href="/blog/mosquito-dunks-canada-guide" className="text-brand-700 underline">Mosquito Dunks Canada — Where to Buy &amp; How They Work</Link></li>
            <li><Link href="/mosquito-control" className="text-brand-700 underline">BuzzSkito Mosquito Control Service</Link></li>
            <li><Link href="/tick-control" className="text-brand-700 underline">BuzzSkito Tick Control Service</Link></li>
            <li><Link href="/reviews" className="text-brand-700 underline">All 129 BuzzSkito Customer Reviews</Link></li>
          </ul>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6 text-center">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {FAQS.map(({ question, answer }) => (
              <details key={question} className="bg-white rounded-xl border border-brand-100 group">
                <summary className="cursor-pointer px-5 py-4 font-semibold text-brand-900 list-none flex justify-between items-center">
                  <span>{question}</span>
                  <svg className="w-5 h-5 shrink-0 group-open:rotate-180 transition-transform text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-5 pb-4 text-gray-600 text-sm" dangerouslySetInnerHTML={{ __html: answer }} />
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related cities — internal linking for city-query rankings ──────────── */}
      <section className="bg-white py-12 px-4 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-2 text-center">Yard risk assessment available across the GTA</h2>
          <p className="text-sm text-gray-600 text-center mb-6">The BuzzSkito Yard Risk Report works for any address in our 19-city service area</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-sm">
            {[
              ['Mississauga', '/mississauga-mosquito-control'],
              ['Toronto', '/toronto-mosquito-control'],
              ['Oakville', '/oakville-mosquito-control'],
              ['Burlington', '/burlington-mosquito-spray'],
              ['Brampton', '/brampton-mosquito-control'],
              ['Vaughan', '/vaughan-mosquito-control'],
              ['Hamilton', '/hamilton-mosquito-control'],
              ['Richmond Hill', '/richmond-hill-mosquito-control'],
              ['Markham', '/markham-mosquito-control'],
              ['Etobicoke', '/etobicoke-mosquito-control'],
              ['Scarborough', '/scarborough-mosquito-control'],
              ['North York', '/north-york-mosquito-control'],
              ['Caledon', '/caledon-mosquito-control'],
              ['Milton', '/milton-mosquito-control'],
              ['Georgetown', '/georgetown-mosquito-control'],
              ['Halton Hills', '/halton-hills-mosquito-control'],
              ['King City', '/king-city-mosquito-control'],
              ['Woodbridge', '/woodbridge-mosquito-control'],
              ['Thornhill', '/thornhill-mosquito-control'],
            ].map(([city, href]) => (
              <Link key={href} href={href} className="bg-brand-50 hover:bg-brand-100 border border-brand-100 rounded-lg px-3 py-2 text-brand-800 font-medium transition-colors text-center">
                {city}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
