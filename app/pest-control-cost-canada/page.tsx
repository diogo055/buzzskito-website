import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, breadcrumbSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'

const SLUG = '/pest-control-cost-canada'

// ── ANCHOR STATISTICS ─────────────────────────────────────────────────────────
// Every figure below is a TYPICAL RANGE drawn from the named industry/platform
// source. Pest control is unregulated on price in Canada — there is no government
// price statistic — so all numbers are representative quoting-platform estimates,
// not official data. Attribution is shown inline beside each figure.
interface AnchorStat {
  label: string
  value: string
  source: string
  sourceUrl: string
  asOf: string
  note: string
  gradient: string
}

const ANCHOR_STATS: AnchorStat[] = [
  {
    label: 'Average single pest-control visit in Canada',
    value: '$414–$617',
    source: 'HomeStars Pest & Animal Control Cost Guide (Canada)',
    sourceUrl: 'https://www.homestars.com/pest-control/price-guides/pest-animal-control-cost',
    asOf: '2026',
    note: 'HomeStars&rsquo; nationwide average band for a single professional visit (ants, rodents, general bugs). City averages run higher — Toronto ~$617, Ottawa ~$695, Calgary ~$825 — and individual jobs are reported from ~$100 to $50,000 for severe or very large cases.',
    gradient: 'from-rose-500 to-red-700',
  },
  {
    label: 'Typical GTA single treatment',
    value: '$200–$450',
    source: 'PestQuotes Ontario Pest Control Cost Guide 2026',
    sourceUrl: 'https://pestquotes.ca/blog/pest-control-cost-ontario',
    asOf: '2026',
    note: 'Most common out-the-door price for a standard single treatment in the Greater Toronto Area before severity or size add-ons. Cross-checked against HomeStars Toronto data.',
    gradient: 'from-orange-500 to-amber-600',
  },
  {
    label: 'Mosquito control (per visit · per season)',
    value: 'From $99 / visit',
    source: 'HomeGuide & LawnStarter 2026 + BuzzSkito live pricing',
    sourceUrl: 'https://homeguide.com/costs/mosquito-control-cost',
    asOf: '2026',
    note: 'North American industry bands run $80–$150 per visit and $350–$1,000 per season. BuzzSkito&rsquo;s own single mosquito treatment starts From $99 CAD for a standard residential lot.',
    gradient: 'from-amber-500 to-yellow-600',
  },
  {
    label: 'Bed bug treatment (most expensive common pest)',
    value: '$300–$3,000+',
    source: 'PestQuotes Ontario 2026 + HomeStars bed-bug guide',
    sourceUrl: 'https://www.homestars.com/pest-control/price-guides/bed-bug-treatment-cost',
    asOf: '2026',
    note: 'Chemical treatment $300–$900; whole-home heat treatment $1,000–$3,000. HomeStars cites Canadian averages of $1,200–$4,000+ for large or complex jobs. Method and severity are the biggest drivers.',
    gradient: 'from-purple-600 to-indigo-700',
  },
]

// ── PRICE SERIES (grouped) — for CSS bar charts & tables ───────────────────────
// All CAD. Industry mosquito/tick bands were originally quoted in USD by major
// North American guides; Canadian pricing is broadly comparable, so they are
// presented as CAD-equivalent representative ranges, not exact conversions.
interface PriceRow {
  label: string
  value: string
  note: string
  group: string
  lo: number // low end of range in CAD, for bar scaling
  hi: number // high end of range in CAD, for bar scaling
}

const PRICE_SERIES: PriceRow[] = [
  // General pest control (CAD)
  { label: 'Single visit — national average', value: '$414–$617', note: 'HomeStars Canada average band for one professional visit', group: 'General pest control (CAD)', lo: 414, hi: 617 },
  { label: 'Single visit — typical GTA / Ontario', value: '$200–$450', note: 'Most common standard treatment price in the GTA', group: 'General pest control (CAD)', lo: 200, hi: 450 },
  { label: 'Recurring — quarterly contract (annual total)', value: '$400–$800', note: 'Per-visit cost ~20–40% lower than one-time when on contract', group: 'General pest control (CAD)', lo: 400, hi: 800 },
  { label: 'Recurring — monthly program (annual total)', value: '$600–$1,200', note: 'Higher frequency for ongoing or severe pressure', group: 'General pest control (CAD)', lo: 600, hi: 1200 },

  // By pest type — Ontario 2026 (CAD)
  { label: 'Wasps / hornets', value: '$100–$500', note: 'Single nest removal at the low end; multiple or large nests higher', group: 'By pest type — Ontario 2026 (CAD)', lo: 100, hi: 500 },
  { label: 'Ants (general)', value: '$150–$400', note: 'Carpenter ants higher at $300–$800', group: 'By pest type — Ontario 2026 (CAD)', lo: 150, hi: 400 },
  { label: 'Spiders', value: '$150–$350', note: 'Often bundled into general perimeter treatments', group: 'By pest type — Ontario 2026 (CAD)', lo: 150, hi: 350 },
  { label: 'Mice', value: '$200–$500', note: 'Multi-visit baiting/exclusion; annual monitoring $150–$300/yr', group: 'By pest type — Ontario 2026 (CAD)', lo: 200, hi: 500 },
  { label: 'Cockroaches', value: '$200–$600', note: 'Severe infestations can run higher with multiple visits', group: 'By pest type — Ontario 2026 (CAD)', lo: 200, hi: 600 },
  { label: 'Ticks / fleas', value: '$200–$500', note: 'Per yard treatment; seasonal tick plans $300–$900', group: 'By pest type — Ontario 2026 (CAD)', lo: 200, hi: 500 },
  { label: 'Rats', value: '$300–$800', note: 'More complex than mice; exclusion work adds cost', group: 'By pest type — Ontario 2026 (CAD)', lo: 300, hi: 800 },
  { label: 'Bed bugs (chemical)', value: '$300–$900', note: 'Per-room or per-visit; multiple treatments usually needed', group: 'By pest type — Ontario 2026 (CAD)', lo: 300, hi: 900 },
  { label: 'Bed bugs (heat treatment)', value: '$1,000–$3,000', note: 'Whole-home heat; HomeStars cites $1,200–$4,000+ for large jobs', group: 'By pest type — Ontario 2026 (CAD)', lo: 1000, hi: 3000 },

  // Mosquito & tick (industry, CAD-equiv)
  { label: 'Mosquitoes — per treatment', value: '$80–$150', note: 'BuzzSkito starts From $99; first visit often slightly higher', group: 'Mosquito & tick (industry, CAD-equiv)', lo: 80, hi: 150 },
  { label: 'Mosquitoes — full season', value: '$350–$1,000', note: 'Recurring sprays every 3–4 weeks, roughly May–Sep', group: 'Mosquito & tick (industry, CAD-equiv)', lo: 350, hi: 1000 },
  { label: 'Ticks — per treatment', value: '$100–$500', note: 'National average ~$200; yard sprays $150–$600', group: 'Mosquito & tick (industry, CAD-equiv)', lo: 100, hi: 500 },
  { label: 'Ticks — full season', value: '$300–$900', note: '3–5 treatments per season typical', group: 'Mosquito & tick (industry, CAD-equiv)', lo: 300, hi: 900 },
]

// ── BUZZSKITO REAL PRICING (CAD) — transparent business benchmark ──────────────
interface BuzzRow {
  plan: string
  price: string
  detail: string
}

const BUZZSKITO_PRICING: BuzzRow[] = [
  { plan: 'Single mosquito treatment', price: 'From $99', detail: 'Standard residential lot; scales by lot size for larger properties.' },
  { plan: 'Basic Season — 5 sprays (monthly)', price: '$549', detail: 'Monthly sprays May–September.' },
  { plan: 'Standard Season — 10 sprays (bi-weekly)', price: '$994', detail: 'Most popular plan; bi-weekly sprays May–September.' },
  { plan: 'Exclusive Season — 20+ sprays (weekly)', price: '$2,049', detail: 'Weekly sprays for maximum-pressure properties.' },
  { plan: 'Tick standalone — 5 sprays / season', price: '$597', detail: 'Dedicated tick program for the full season.' },
  { plan: 'Tick bundle (added to any mosquito plan)', price: '$497', detail: 'Saves $100 versus standalone when bundled.' },
]

// ── WHAT DRIVES PRICE ──────────────────────────────────────────────────────────
interface PriceDriver {
  factor: string
  effect: string
  detail: string
}

const PRICE_DRIVERS: PriceDriver[] = [
  { factor: 'Infestation severity', effect: '+20–50% the longer you wait', detail: 'Delay raises the eventual treatment cost; a severe or established infestation needs more visits and more product.' },
  { factor: 'Property size', effect: 'Higher for larger lots', detail: 'More product and labour. Yard sprays roughly scale at about $0.08–$0.15 per square foot.' },
  { factor: 'Recurring vs one-time', effect: 'Contracts ~20–40% cheaper per visit', detail: 'Seasonal or quarterly plans lower the per-visit rate compared with calling for a one-off treatment.' },
  { factor: 'Treatment method', effect: 'Heat costs multiples of chemical', detail: 'For bed bugs especially, whole-home heat treatment is several times the price of a chemical application.' },
  { factor: 'Location', effect: 'GTA ~10–25% above rural Ontario', detail: 'Urban labour rates and travel time add a premium in the Greater Toronto Area versus rural Ontario.' },
]

// ── SOURCES ─────────────────────────────────────────────────────────────────────
const SOURCES = [
  { name: 'HomeStars — Pest & Animal Control Cost Guide (Canada)', url: 'https://www.homestars.com/pest-control/price-guides/pest-animal-control-cost', desc: 'Homeowner-reported quotes aggregated nationally. National single-visit average band.' },
  { name: 'HomeStars — Bed Bug Treatment Cost (Canada)', url: 'https://www.homestars.com/pest-control/price-guides/bed-bug-treatment-cost', desc: 'Canadian bed-bug averages; heat vs chemical pricing.' },
  { name: 'HomeStars — Pest & Animal Control Cost Guide Toronto', url: 'https://www.homestars.com/pest-control/price-guides/pest-animal-control-cost-toronto', desc: 'Toronto-specific average single-visit cost.' },
  { name: 'PestQuotes — Ontario Pest Control Cost Guide 2026 (by pest type)', url: 'https://pestquotes.ca/blog/pest-control-cost-ontario', desc: 'Canadian quoting platform; Ontario by-pest-type ranges for 2026.' },
  { name: 'HomeGuide — Mosquito Control Cost (2026)', url: 'https://homeguide.com/costs/mosquito-control-cost', desc: 'Per-visit and seasonal mosquito control bands.' },
  { name: 'LawnStarter — Mosquito Treatment Cost (2026)', url: 'https://www.lawnstarter.com/blog/cost/mosquito-treatment-price/', desc: 'Mosquito treatment pricing and seasonal totals.' },
  { name: 'Angi — Mosquito Control Service Cost (2026 Data)', url: 'https://www.angi.com/articles/cost-mosquito-treatment.htm', desc: 'Mosquito service cost data set.' },
  { name: 'Angi — Tick Extermination Cost (2026 Data)', url: 'https://www.angi.com/articles/tick-treatment-cost.htm', desc: 'Tick extermination cost data set; national tick average.' },
  { name: 'Fixr — Tick Extermination Cost', url: 'https://www.fixr.com/costs/tick-extermination', desc: 'Per-treatment tick pricing reference.' },
  { name: 'Angi — Pest Control Cost (2026 Data)', url: 'https://www.angi.com/articles/how-much-does-pest-control-service-cost.htm', desc: 'General pest control cost overview.' },
  { name: 'BuzzSkito — Mosquito Control Cost Ontario 2026 (live business pricing)', url: 'https://buzzskito.ca/mosquito-control-cost', desc: 'Actual published BuzzSkito pricing for the GTA.' },
]

const FAQS = [
  {
    question: 'How much does pest control cost in Canada?',
    answer: 'According to HomeStars&rsquo; Pest & Animal Control Cost Guide, the average single professional pest-control visit in Canada runs about $414 to $617 — though city averages are higher (Toronto roughly $617, Ottawa ~$695, Calgary ~$825) and individual jobs are reported anywhere from about $100 to $50,000 for severe or large infestations. In the Greater Toronto Area, PestQuotes&rsquo; 2026 Ontario guide puts the most common single standard treatment at $200 to $450 before severity or size add-ons. Pest control is unregulated on price in Canada, so these are typical ranges, not official statistics — always get a free on-site quote for your exact situation.',
  },
  {
    question: 'How much does mosquito control cost?',
    answer: 'Mosquito control typically costs $80 to $150 per visit and $350 to $1,000 for a full season of recurring sprays (every 3–4 weeks, roughly May to September), per HomeGuide, LawnStarter, and Angi 2026 cost guides — figures originally quoted in USD, with Canadian pricing broadly comparable. As a real Canadian benchmark, BuzzSkito&rsquo;s single mosquito treatment starts From $99 CAD for a standard residential lot and scales with lot size. For a full GTA pricing breakdown, see our dedicated mosquito-control cost page.',
  },
  {
    question: 'How much does tick control cost?',
    answer: 'Professional tick (and flea) yard treatment typically costs $100 to $500 per treatment — with the national average around $200 per Angi and Fixr — and $300 to $900 for a full season of 3 to 5 treatments. Method, yard size, and severity drive the range. BuzzSkito offers a dedicated tick program at $597 for a 5-spray season standalone, or $497 when bundled with a mosquito plan (saving $100). See our Ontario tick-treatment cost guide for the detailed breakdown.',
  },
  {
    question: 'What is the average cost of pest control?',
    answer: 'The most widely cited Canadian figure is HomeStars&rsquo; national single-visit average of $414 to $617, while the typical GTA single standard treatment sits at $200 to $450 (PestQuotes 2026). Costs vary widely by pest: wasp nests $100–$500, ants $150–$400, mice $200–$500, rats $300–$800, cockroaches $200–$600, and bed bugs $300–$900 for chemical or $1,000–$3,000 for heat treatment (PestQuotes Ontario 2026 + HomeStars). Recurring or seasonal contracts usually lower the per-visit rate by about 20–40% versus a one-time call.',
  },
  {
    question: 'Why does pest control pricing vary?',
    answer: 'Five factors drive most of the variation. (1) Infestation severity — costs can climb 20–50% the longer you wait, because a worse problem needs more visits and more product. (2) Property size — yard treatments roughly scale at $0.08–$0.15 per square foot. (3) Recurring vs one-time — seasonal or quarterly contracts run about 20–40% cheaper per visit. (4) Treatment method — heat treatment (e.g. for bed bugs) costs several times more than chemical. (5) Location — GTA prices run about 10–25% above rural Ontario due to urban labour and travel premiums. Because pricing is unregulated, two companies can quote very different numbers for the same job.',
  },
  {
    question: 'Is professional pest control worth the cost?',
    answer: 'For most homeowners, yes — particularly for pests that are hard to eliminate with retail products or that carry health risks. Mosquitoes and ticks are a clear case: ticks can transmit Lyme disease, and a professional barrier spray reduces yard pressure far more reliably than DIY foggers or candles. Recurring or seasonal plans also lower the per-visit cost by roughly 20–40% versus repeated one-off calls, and acting early avoids the 20–50% cost escalation that comes with letting an infestation establish. The honest answer: published ranges are starting points — get a free on-site quote, compare guarantees, and confirm the company is licensed before you book.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: 'How Much Does Pest Control Cost in Canada? (2026 Price Data)',
  description:
    'Free 2026 pest control price data for Canada. Average cost of a single visit ($414–$617), GTA treatment pricing, cost by pest type (ants, mice, rats, cockroaches, bed bugs, wasps), and mosquito & tick rates. Sourced from HomeStars, PestQuotes, HomeGuide, Angi & Fixr. Free to cite.',
  canonical: SLUG,
})

export default function PestControlCostCanadaPage() {
  const generalRows = PRICE_SERIES.filter((r) => r.group === 'General pest control (CAD)')
  const byPestRows = PRICE_SERIES.filter((r) => r.group === 'By pest type — Ontario 2026 (CAD)')
  const mosqTickRows = PRICE_SERIES.filter((r) => r.group === 'Mosquito & tick (industry, CAD-equiv)')
  const maxByPestHi = Math.max(...byPestRows.map((r) => r.hi))

  const citation = `BuzzSkito (2026). How Much Does Pest Control Cost in Canada? (2026 Price Data). Retrieved from https://buzzskito.ca${SLUG}`

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Pest Control Cost in Canada', url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(SLUG)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Dataset',
        name: 'Pest Control Cost in Canada 2026 — Price Data',
        description: 'Aggregated typical-range pricing for professional pest control in Canada (2026): average single-visit cost, Greater Toronto Area treatment pricing, cost by pest type (ants, mice, rats, cockroaches, bed bugs, wasps, spiders), and mosquito & tick rates per treatment and per season.',
        url: `https://buzzskito.ca${SLUG}`,
        license: 'https://creativecommons.org/licenses/by/4.0/',
        creator: {
          '@type': 'Organization',
          name: 'BuzzSkito',
          url: 'https://buzzskito.ca',
        },
        spatialCoverage: { '@type': 'Place', name: 'Canada (Greater Toronto Area focus)' },
        temporalCoverage: '2026',
        keywords: ['pest control cost', 'pest control cost Canada', 'mosquito control cost', 'tick control cost', 'bed bug treatment cost', 'exterminator cost Ontario', 'pest control pricing GTA'],
        isBasedOn: [
          'https://www.homestars.com/pest-control/price-guides/pest-animal-control-cost',
          'https://www.homestars.com/pest-control/price-guides/bed-bug-treatment-cost',
          'https://pestquotes.ca/blog/pest-control-cost-ontario',
          'https://homeguide.com/costs/mosquito-control-cost',
          'https://www.lawnstarter.com/blog/cost/mosquito-treatment-price/',
          'https://www.angi.com/articles/cost-mosquito-treatment.htm',
          'https://www.angi.com/articles/tick-treatment-cost.htm',
          'https://www.fixr.com/costs/tick-extermination',
          'https://www.angi.com/articles/how-much-does-pest-control-service-cost.htm',
        ],
      }) }} />

      {/* HERO */}
      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs font-extrabold text-amber-400 uppercase tracking-widest mb-3">Free data resource · Updated for 2026 · Sourced</p>
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-5 leading-tight">
            How Much Does Pest Control<br className="hidden sm:block" /> Cost in Canada? <span className="text-amber-400">(2026 Price Data)</span>
          </h1>
          <p className="text-lg text-brand-100 max-w-3xl mx-auto leading-relaxed mb-6">
            A free, sourced price hub aggregating 2026 pest-control cost data for Canada into one place — the average cost of a single visit, Greater Toronto Area treatment pricing, cost by pest type, and mosquito &amp; tick rates. Every figure is a typical range with its source named inline, drawn from HomeStars, PestQuotes, HomeGuide, Angi, and Fixr. For mosquito and tick pricing specifically, this hub routes you to our detailed cost pages.
          </p>
          <div className="flex flex-wrap gap-2 justify-center text-xs">
            <span className="bg-white/10 px-3 py-1 rounded-full">📊 HomeStars</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">🇨🇦 PestQuotes Ontario 2026</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">🛠️ HomeGuide</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">📐 Angi &amp; Fixr</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">💲 CC-BY 4.0 · free to cite</span>
          </div>
        </div>
      </section>

      {/* QUICK ANSWER */}
      <section className="bg-amber-50 border-y-4 border-amber-300 py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-extrabold text-amber-700 uppercase tracking-wider mb-2">Quick Answer</p>
          <h2 className="text-xl sm:text-2xl font-extrabold text-brand-900 mb-3">How much does pest control cost in Canada?</h2>
          <p className="text-base text-gray-800 leading-relaxed">
            <span className="speakable"><strong>The average single professional pest-control visit in Canada costs roughly $414 to $617 CAD, according to HomeStars, while a typical single treatment in the Greater Toronto Area runs about $200 to $450 (PestQuotes 2026).</strong></span> Costs swing widely by pest — from about $100 for a wasp nest up to $1,000–$3,000 for whole-home bed-bug heat treatment — and by severity, property size, and whether you book a one-time visit or a recurring plan. Pest control is unregulated on price in Canada, so there is no official government statistic: these are typical ranges, and the only way to get a firm number is a free on-site quote.
          </p>
        </div>
      </section>

      {/* BIG STAT TILES */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold text-brand-900 mb-2">Canada pest-control pricing — the anchor numbers</h2>
          <p className="text-base text-gray-600 mb-8">The four figures most journalists, homeowners, and AI engines ask for. Each is a typical range from the named source — not an official statistic, because pest-control pricing is unregulated in Canada.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ANCHOR_STATS.map((s) => (
              <div key={s.label} className={`rounded-2xl bg-gradient-to-br ${s.gradient} text-white p-5 shadow-lg flex flex-col`}>
                <p className="text-[11px] font-bold uppercase tracking-widest opacity-90">{s.label}</p>
                <p className="text-3xl sm:text-4xl font-black mt-2">{s.value}<span className="text-base font-bold opacity-80"> CAD</span></p>
                <p className="text-xs mt-3 opacity-90 leading-snug flex-1" dangerouslySetInnerHTML={{ __html: s.note }} />
                <p className="text-[10px] mt-3 pt-2 border-t border-white/25 opacity-80">Source: {s.source} ({s.asOf})</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COST BY PEST TYPE — CSS BAR CHART */}
      <section className="bg-gradient-to-br from-emerald-50 via-teal-50 to-amber-50 py-14 px-4 border-y-4 border-emerald-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold text-brand-900 mb-2">Pest control cost by pest type (Ontario, 2026)</h2>
          <p className="text-base text-gray-700 mb-8 max-w-3xl">Typical price ranges for the most common pests, ordered from least to most expensive. Bars show the full low-to-high range; the most expensive common pest by a wide margin is bed bugs treated with heat.</p>

          <div className="rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-extrabold text-brand-900 mb-1">Typical cost range by pest (CAD)</h3>
            <p className="text-xs text-gray-500 mb-5">Source: PestQuotes Ontario Pest Control Cost Guide 2026 + HomeStars bed-bug guide</p>
            <div className="space-y-2.5">
              {byPestRows.map((r) => {
                const leftPct = (r.lo / maxByPestHi) * 100
                const widthPct = ((r.hi - r.lo) / maxByPestHi) * 100
                const isBedBugHeat = r.label.includes('heat')
                return (
                  <div key={r.label} className="flex items-center gap-3">
                    <span className="text-[11px] sm:text-xs font-bold text-gray-700 w-32 sm:w-44 shrink-0">{r.label}</span>
                    <div className="flex-1 h-7 bg-gray-100 rounded-md overflow-hidden relative">
                      <div
                        className={`h-full rounded-md absolute top-0 ${isBedBugHeat ? 'bg-gradient-to-r from-purple-500 to-indigo-700' : 'bg-gradient-to-r from-emerald-400 to-teal-600'}`}
                        style={{ left: `${leftPct}%`, width: `${Math.max(widthPct, 2)}%` }}
                      />
                    </div>
                    <span className="text-[11px] sm:text-xs font-bold text-gray-700 w-24 sm:w-28 shrink-0 text-right">{r.value}</span>
                  </div>
                )
              })}
            </div>
            <p className="text-xs text-gray-500 mt-5 italic">Bars are scaled to the $3,000 high end of whole-home bed-bug heat treatment. Carpenter ants run higher than general ants ($300–$800). All figures are typical ranges, not fixed prices — severity and property size move every estimate.</p>
          </div>

          {/* Full by-pest table */}
          <div className="mt-8 rounded-2xl border border-gray-200 overflow-hidden bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm">
                <thead className="bg-gray-100 text-gray-700">
                  <tr>
                    <th className="text-left px-3 py-2 font-extrabold">Pest</th>
                    <th className="text-right px-3 py-2 font-extrabold whitespace-nowrap">Typical cost (CAD)</th>
                    <th className="text-left px-3 py-2 font-extrabold hidden sm:table-cell">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {byPestRows.map((r) => (
                    <tr key={r.label} className="border-t border-gray-100 hover:bg-gray-50">
                      <td className="px-3 py-2 text-gray-800 font-semibold">{r.label}</td>
                      <td className="text-right px-3 py-2 font-bold text-emerald-700 whitespace-nowrap">{r.value}</td>
                      <td className="px-3 py-2 text-gray-600 text-[11px] hidden sm:table-cell">{r.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 px-3 py-2 bg-gray-50 border-t border-gray-100 italic">Source: PestQuotes Ontario Pest Control Cost Guide 2026; bed-bug heat figures cross-checked against HomeStars (which cites $1,200–$4,000+ for large jobs).</p>
          </div>
        </div>
      </section>

      {/* SINGLE VISIT vs RECURRING */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold text-brand-900 mb-2">Single visit vs recurring plans (general pest control)</h2>
          <p className="text-base text-gray-700 mb-8 max-w-3xl">One-time visits cost more per treatment than recurring contracts. Across the industry, seasonal or quarterly plans lower the per-visit rate by roughly 20–40%.</p>

          <div className="rounded-2xl border border-gray-200 overflow-hidden bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm">
                <thead className="bg-gray-100 text-gray-700">
                  <tr>
                    <th className="text-left px-3 py-2 font-extrabold">Service structure</th>
                    <th className="text-right px-3 py-2 font-extrabold whitespace-nowrap">Typical cost (CAD)</th>
                    <th className="text-left px-3 py-2 font-extrabold hidden sm:table-cell">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {generalRows.map((r) => (
                    <tr key={r.label} className="border-t border-gray-100 hover:bg-gray-50">
                      <td className="px-3 py-2 text-gray-800 font-semibold">{r.label}</td>
                      <td className="text-right px-3 py-2 font-bold text-brand-700 whitespace-nowrap">{r.value}</td>
                      <td className="px-3 py-2 text-gray-600 text-[11px] hidden sm:table-cell">{r.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 px-3 py-2 bg-gray-50 border-t border-gray-100 italic">Source: HomeStars Canada single-visit average + Angi 2026 pest control cost data. National single-visit average $414–$617; GTA standard treatment $200–$450 (PestQuotes 2026).</p>
          </div>
        </div>
      </section>

      {/* MOSQUITO & TICK — routes to detail pages */}
      <section className="bg-brand-950 text-white py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-extrabold text-amber-400 uppercase tracking-widest mb-3">Our specialty</p>
          <h2 className="text-3xl font-extrabold mb-2">Mosquito &amp; tick control cost</h2>
          <p className="text-base text-brand-100 mb-8 max-w-3xl">BuzzSkito specializes in mosquito and tick barrier spray for the GTA. Below are the industry ranges; for the full Canadian and GTA breakdowns, follow the dedicated cost pages linked under each table.</p>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Industry ranges */}
            <div className="rounded-2xl bg-white/10 backdrop-blur p-6">
              <h3 className="text-lg font-extrabold mb-4">Industry ranges (CAD-equivalent)</h3>
              <div className="space-y-2">
                {mosqTickRows.map((r) => (
                  <div key={r.label} className="flex items-baseline justify-between gap-3 border-b border-white/10 pb-2">
                    <span className="text-sm text-brand-100">{r.label}</span>
                    <span className="text-sm font-extrabold text-amber-400 whitespace-nowrap">{r.value}</span>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-brand-300 mt-4 italic">Source: HomeGuide, LawnStarter, Angi &amp; Fixr 2026 guides. Originally quoted in USD; Canadian pricing is broadly comparable. National tick average ~$200 (Angi/Fixr).</p>
              <div className="mt-5 flex flex-col gap-2 text-sm font-bold">
                <Link href="/mosquito-control-cost" className="text-amber-400 hover:text-amber-300 underline">→ Mosquito control cost (full GTA breakdown)</Link>
                <Link href="/blog/how-much-does-tick-treatment-cost-ontario" className="text-amber-400 hover:text-amber-300 underline">→ How much does tick treatment cost in Ontario?</Link>
              </div>
            </div>

            {/* BuzzSkito real pricing */}
            <div className="rounded-2xl bg-gradient-to-br from-amber-500 to-yellow-600 text-brand-950 p-6 shadow-lg">
              <h3 className="text-lg font-extrabold mb-1">BuzzSkito real pricing (CAD)</h3>
              <p className="text-xs font-semibold opacity-80 mb-4">Live, published business pricing — a transparent Canadian benchmark.</p>
              <div className="space-y-2">
                {BUZZSKITO_PRICING.map((b) => (
                  <div key={b.plan} className="flex items-baseline justify-between gap-3 border-b border-brand-950/15 pb-2">
                    <span className="text-sm font-semibold">{b.plan}</span>
                    <span className="text-sm font-black whitespace-nowrap">{b.price}</span>
                  </div>
                ))}
              </div>
              <p className="text-[11px] mt-4 italic opacity-80">Single treatment From $99 for a standard residential lot; seasonal plans scale by lot size and frequency. Tick bundle saves $100 versus standalone.</p>
              <div className="mt-5 flex flex-col gap-2 text-sm font-bold">
                <Link href="/mosquito-control-pricing" className="underline hover:opacity-80">→ See full mosquito control pricing</Link>
                <Link href="/blog/mosquito-control-cost-ontario" className="underline hover:opacity-80">→ Mosquito control cost in Ontario (guide)</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT DRIVES PRICE */}
      <section className="bg-emerald-50 py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-brand-900 mb-2">Why does pest control pricing vary?</h2>
          <p className="text-base text-gray-700 mb-8 max-w-3xl">Because pest control is unregulated on price, two companies can quote very different numbers for the same job. Five factors explain most of the variation.</p>

          <div className="grid md:grid-cols-2 gap-5">
            {PRICE_DRIVERS.map((d, i) => (
              <div key={d.factor} className="rounded-2xl bg-white p-6 shadow-sm border-l-4 border-emerald-500">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-emerald-600 text-white font-extrabold flex items-center justify-center">{i + 1}</div>
                  <div>
                    <h3 className="text-lg font-extrabold text-brand-900">{d.factor}</h3>
                    <p className="text-sm font-bold text-emerald-700 mb-1">{d.effect}</p>
                    <p className="text-sm text-gray-700 leading-relaxed">{d.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-6 italic">Source: synthesized from PestQuotes Ontario 2026, HomeStars, and Angi/HomeGuide 2026 cost guides. Yard-spray per-square-foot figures are representative industry estimates.</p>
        </div>
      </section>

      {/* PULL QUOTE — Alex of BuzzSkito */}
      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <blockquote className="border-l-4 border-amber-400 pl-6">
            <p className="text-xl sm:text-2xl font-bold leading-relaxed">
              &ldquo;The single biggest variable in any pest-control bill isn&rsquo;t the company you call — it&rsquo;s how long you waited. A wasp nest or a few mice is a $200 job; left for a season it becomes a $600 one. The cheapest pest control is the early phone call.&rdquo;
            </p>
            <footer className="mt-4 text-sm text-amber-400 font-semibold not-italic">— Alex, BuzzSkito Mosquito &amp; Tick Control</footer>
          </blockquote>
        </div>
      </section>

      {/* CITE THIS PAGE */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl border-2 border-amber-300 bg-amber-50 p-6 sm:p-8 shadow-md">
            <h2 className="text-2xl font-extrabold text-brand-900 mb-2">📊 Cite this page</h2>
            <p className="text-sm text-gray-700 mb-5">This is a free, openly licensed data resource. Journalists, bloggers, and researchers are welcome to reference these figures. <strong>Free to cite or embed with a link back to this page.</strong></p>

            <p className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Suggested citation</p>
            <div className="rounded-xl bg-white border border-amber-200 p-4 font-mono text-xs sm:text-sm text-gray-800 leading-relaxed break-words">
              {citation}
            </div>

            <div className="mt-5 grid sm:grid-cols-3 gap-3 text-xs">
              <div className="rounded-lg bg-white border border-amber-200 p-3">
                <p className="font-extrabold text-brand-900">License</p>
                <p className="text-gray-600 mt-0.5">Creative Commons CC-BY 4.0 — reuse freely with attribution.</p>
              </div>
              <div className="rounded-lg bg-white border border-amber-200 p-3">
                <p className="font-extrabold text-brand-900">Coverage</p>
                <p className="text-gray-600 mt-0.5">Canada, with a Greater Toronto Area focus. Year: 2026.</p>
              </div>
              <div className="rounded-lg bg-white border border-amber-200 p-3">
                <p className="font-extrabold text-brand-900">Data type</p>
                <p className="text-gray-600 mt-0.5">Typical price ranges aggregated from industry sources — not official statistics.</p>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-4 italic">Linking back helps us keep this resource free and updated each year. Questions about a figure? Call {BUSINESS.phone}.</p>
          </div>
        </div>
      </section>

      {/* SOURCES & METHOD */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-2">Sources &amp; method</h2>
          <p className="text-sm text-gray-600 mb-6">All figures on this page are typical ranges aggregated from publicly available industry and quoting-platform guides. Pest control is unregulated on price in Canada, and no public-health or government agency publishes pest-control prices — so there is no official statistic for this topic. Links provided for transparency and verification. Last updated 2026.</p>

          <div className="grid md:grid-cols-2 gap-4 text-sm">
            {SOURCES.map((s) => (
              <a key={s.url} href={s.url} target="_blank" rel="noopener" className="rounded-xl bg-white p-4 border border-gray-200 hover:border-brand-500 transition">
                <p className="font-extrabold text-brand-900">{s.name}</p>
                <p className="text-xs text-gray-600 mt-0.5">{s.desc}</p>
              </a>
            ))}
          </div>

          <div className="mt-8 rounded-xl bg-white p-5 border border-gray-200">
            <p className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Method &amp; caveats</p>
            <ul className="space-y-1.5 text-xs text-gray-700">
              <li>• All numbers are <strong>typical ranges, not official statistics</strong>. Pest control is unregulated on price; quotes vary by company, property, and infestation severity.</li>
              <li>• The strongest Canadian anchors come from HomeStars (homeowner-reported quotes aggregated nationally) and PestQuotes&rsquo; Ontario 2026 by-pest-type guide — both industry/platform estimates.</li>
              <li>• Mosquito and tick per-treatment and seasonal bands come from major North American guides (HomeGuide, Angi, LawnStarter, Fixr), originally quoted in USD; Canadian pricing is broadly comparable, so treat them as CAD-equivalent representative ranges.</li>
              <li>• BuzzSkito&rsquo;s seasonal plan prices and single-treatment &ldquo;From $99&rdquo; anchor are confirmed live business pricing.</li>
              <li>• Latest verified data year: 2026. Always recommend readers get a free on-site quote — published ranges are starting points, not guaranteed prices.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-3">Get a real number for your property — free</h2>
          <p className="text-base text-brand-100 mb-7 leading-relaxed">Published ranges are a starting point. The only way to know what mosquito or tick control will cost at your address is a free, no-obligation on-site assessment. BuzzSkito serves Mississauga, Toronto, and 19+ GTA cities — single treatments start From $99.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link href="/free-yard-assessment" className="inline-block bg-amber-400 hover:bg-amber-300 text-brand-950 font-extrabold text-base px-8 py-4 rounded-full shadow-lg transition-all">
              Get a Free Quote →
            </Link>
            <a href={BUSINESS.phoneHref} className="inline-block bg-white/10 hover:bg-white/15 text-white font-bold text-base px-8 py-4 rounded-full transition-all">
              📞 Call {BUSINESS.phone}
            </a>
          </div>
          <p className="text-xs text-brand-300 mt-5">BuzzSkito Mosquito &amp; Tick Control · Mississauga, ON · serving the GTA · Health Canada-approved · Bite-Free Guarantee</p>
        </div>
      </section>

      {/* RELATED RESOURCES */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-2">Related resources</h2>
          <p className="text-sm text-gray-600 mb-6">This page is the broad Canada all-pest cost hub. For mosquito- and tick-specific pricing, follow the detailed guides below.</p>
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <Link href="/mosquito-control-cost" className="rounded-xl bg-gray-50 p-4 border border-gray-200 hover:border-brand-500 transition block">
              <p className="font-extrabold text-brand-900">Mosquito Control Cost (GTA)</p>
              <p className="text-xs text-gray-600 mt-0.5">Full breakdown of single-treatment and seasonal mosquito pricing, with lot-size scaling.</p>
            </Link>
            <Link href="/mosquito-control-pricing" className="rounded-xl bg-gray-50 p-4 border border-gray-200 hover:border-brand-500 transition block">
              <p className="font-extrabold text-brand-900">Mosquito Control Pricing</p>
              <p className="text-xs text-gray-600 mt-0.5">BuzzSkito&rsquo;s mosquito plans, frequencies, and what each tier includes.</p>
            </Link>
            <Link href="/blog/mosquito-control-cost-ontario" className="rounded-xl bg-gray-50 p-4 border border-gray-200 hover:border-brand-500 transition block">
              <p className="font-extrabold text-brand-900">How Much Does Mosquito Control Cost in Ontario?</p>
              <p className="text-xs text-gray-600 mt-0.5">2026 Ontario pricing guide — one-time spray, seasonal packages, and yard size.</p>
            </Link>
            <Link href="/blog/how-much-does-tick-treatment-cost-ontario" className="rounded-xl bg-gray-50 p-4 border border-gray-200 hover:border-brand-500 transition block">
              <p className="font-extrabold text-brand-900">How Much Does Tick Treatment Cost in Ontario?</p>
              <p className="text-xs text-gray-600 mt-0.5">Per-treatment and seasonal tick yard-spray pricing for Ontario homeowners.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">Frequently asked questions</h2>
          <div className="space-y-3">
            {FAQS.map((f, i) => (
              <details key={i} className="group rounded-xl border border-gray-200 bg-white p-4">
                <summary className="cursor-pointer font-bold text-brand-900 list-none flex justify-between items-start gap-3">
                  <span>{f.question}</span>
                  <span className="text-brand-700 group-open:rotate-180 transition shrink-0">▾</span>
                </summary>
                <p className="text-sm text-gray-700 mt-3 leading-relaxed" dangerouslySetInnerHTML={{ __html: f.answer }} />
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
