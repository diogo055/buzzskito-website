import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, breadcrumbSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'

const SLUG = '/lyme-disease-canada-statistics'

// ── CANADA LYME DISEASE — REPORTED CASES BY YEAR ──────────────────────────────
// Source: Public Health Agency of Canada (PHAC) — Lyme disease: Monitoring +
// Health Infobase annual surveillance report + Canadian LDES (PLOS One / PMC).
// Only the verified anchor years are charted (2009, 2019–2024). Intervening
// single-year values 2010–2018 exist in PHAC annual editions but were not
// individually pinned in source research, so they are intentionally omitted.
interface YearPoint {
  year: number
  cases: number
  note: string
}

const CANADA_CASES_BY_YEAR: YearPoint[] = [
  { year: 2009, cases: 144,   note: 'First full year of national surveillance; 65.3% locally acquired' },
  { year: 2019, cases: 2636,  note: '93.6% locally acquired; end of the 2009–2019 enhanced-surveillance study' },
  { year: 2020, cases: 1617,  note: '1,204 confirmed + 413 probable; dip attributed to reduced COVID-19-era testing' },
  { year: 2021, cases: 3147,  note: '2,595 confirmed + 552 probable; +94.6% vs 2020 — a record annual high at the time' },
  { year: 2022, cases: 2525,  note: 'Reported cases' },
  { year: 2023, cases: 4785,  note: 'Incidence 11.9 per 100,000' },
  { year: 2024, cases: 5239,  note: 'Preliminary; incidence 14.1 per 100,000 (fuller dashboard figure: 5,809)' },
]

// ── CANADA LYME DISEASE — CASES BY PROVINCE / TERRITORY (2024) ─────────────────
// Source: PHAC Health Infobase annual surveillance dashboard, 2024 data.
// Absolute counts sum close to the fuller 5,809 figure rather than the
// preliminary 5,239 total — another reason to treat the larger value as the
// fuller 2024 count. Quebec & Saskatchewan report via CNDSS (less detailed).
type ProvinceTier = 'highest' | 'high' | 'moderate' | 'low' | 'none'

interface ProvincePoint {
  region: string
  cases: number
  display: string
  share?: string
  incidence?: string
  tier: ProvinceTier
  note: string
}

const CANADA_CASES_BY_PROVINCE: ProvincePoint[] = [
  { region: 'Ontario',                     cases: 2369, display: '2,369', share: '41%', tier: 'highest',  note: 'Largest absolute case count in Canada in 2024' },
  { region: 'Nova Scotia',                 cases: 2350, display: '2,350', share: '40%', incidence: '~217 / 100k', tier: 'highest',  note: 'Highest per-capita incidence in Canada — roughly 217 per 100,000' },
  { region: 'Quebec',                      cases: 834,  display: '834',   share: '14%', tier: 'high',     note: 'Third-highest; range expanding northward from the U.S. border' },
  { region: 'New Brunswick',               cases: 111,  display: '111',   tier: 'moderate', note: 'Atlantic Canada endemic zone' },
  { region: 'Manitoba',                    cases: 84,   display: '84',    tier: 'moderate', note: 'Established risk areas in the southeast' },
  { region: 'Alberta',                     cases: 31,   display: '31',    tier: 'low',      note: 'Mostly travel-related; few established tick populations' },
  { region: 'British Columbia',            cases: 21,   display: '21',    tier: 'low',      note: 'Western blacklegged tick (Ixodes pacificus); low infection prevalence' },
  { region: 'Prince Edward Island',        cases: 4,    display: '4',     tier: 'low',      note: 'Sparse reporting' },
  { region: 'Newfoundland and Labrador',   cases: 3,    display: '3',     tier: 'low',      note: 'Sparse reporting' },
  { region: 'Saskatchewan',                cases: 2,    display: '2',     tier: 'low',      note: 'Reports limited data via CNDSS, not enhanced surveillance' },
  { region: 'Yukon / NWT / Nunavut',       cases: 0,    display: '0',     tier: 'none',     note: 'No established tick populations in the territories' },
]

// ── CLIMATE-DRIVEN RANGE EXPANSION (peer-reviewed modelling, not surveillance) ─
interface ExpansionPoint {
  metric: string
  value: string
  source: string
  note: string
}

const RANGE_EXPANSION: ExpansionPoint[] = [
  {
    metric: 'Blacklegged tick range expansion rate',
    value: '~35–55 km / year',
    source: 'Climate-vector modelling (PMC, peer-reviewed)',
    note: 'Ixodes scapularis spreading northward; roughly 46 km per year in modelled estimates.',
  },
  {
    metric: 'Locally-acquired infections, 2009 → 2019',
    value: '65.3% → 93.6%',
    source: 'Canadian LDES (PLOS One / PMC)',
    note: 'Share of cases acquired in Canada (not travel) — proof the tick is now established domestically.',
  },
  {
    metric: 'Projected northward habitat shift',
    value: '~200 km by the 2020s; ~1,000 km by the 2080s',
    source: 'Risk-map modelling, high-emission scenario (PMC)',
    note: 'Projected establishment range for Ixodes scapularis under continued warming.',
  },
]

// ── CANADA vs UNITED STATES ───────────────────────────────────────────────────
interface ComparisonPoint {
  label: string
  value: string
  detail: string
  source: string
}

const CANADA_US_COMPARISON: ComparisonPoint[] = [
  {
    label: 'Canada — reported cases (2024, preliminary)',
    value: '~5,239',
    detail: 'PHAC surveillance count; fuller dashboard figure of 5,809 also published.',
    source: 'PHAC Health Infobase',
  },
  {
    label: 'United States — reported cases (2023)',
    value: '89,000+',
    detail: 'Routine surveillance only — roughly one-fifth of the estimated true total.',
    source: 'U.S. CDC',
  },
  {
    label: 'United States — estimated cases each year',
    value: '~476,000',
    detail: 'CDC estimate from health-insurance claims (2010–2018) — true burden is multiples of reported counts.',
    source: 'U.S. CDC',
  },
]

// ── SOURCES ───────────────────────────────────────────────────────────────────
const SOURCES = [
  { name: 'PHAC — Lyme disease: Monitoring (surveillance overview)', url: 'https://www.canada.ca/en/public-health/services/diseases/lyme-disease/surveillance-lyme-disease.html' },
  { name: 'PHAC Health Infobase — Annual report: Lyme disease and other tick-borne diseases surveillance in Canada', url: 'https://health-infobase.canada.ca/zoonoses/ticks/annual-report.html' },
  { name: 'Epidemiology and clinical manifestations of reported Lyme disease cases (Canadian LDES, PLOS One / PMC)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10723709/' },
  { name: 'PHAC — Surveillance for Lyme disease in Canada, 2009–2019 (CCDR)', url: 'https://www.canada.ca/content/dam/phac-aspc/documents/services/reports-publications/canada-communicable-disease-report-ccdr/monthly-issue/2022-48/issue-5-may-2022/ccdrv48i05a05-eng.pdf' },
  { name: 'U.S. CDC — Lyme Disease Surveillance and Data (facts & stats)', url: 'https://www.cdc.gov/lyme/data-research/facts-stats/index.html' },
  { name: 'Rapid Northward Expansion of the Blacklegged Tick in Response to Climate Change (PMC)', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12590538/' },
  { name: 'Risk maps for range expansion of Ixodes scapularis in Canada with climate change (PMC)', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2412857/' },
]

const FAQS = [
  {
    question: 'How many Lyme disease cases are there in Canada?',
    answer: 'Canada recorded approximately 5,239 reported Lyme disease cases in 2024 (the latest year), according to the Public Health Agency of Canada (PHAC) surveillance dashboard. A fuller, updated figure of 5,809 cases also appears in the same dashboard, because preliminary surveillance counts are routinely revised upward as late lab and clinical reports arrive. Since national surveillance began in 2009, PHAC has logged a cumulative 28,033 reported human cases through 2025. Important caveat: these are reported cases only — the true number of infections is believed to be several times higher, because many cases are never diagnosed, lab-confirmed, or reported to public health.',
  },
  {
    question: 'Which province has the most Lyme disease?',
    answer: 'Ontario had the most reported Lyme disease cases of any province in 2024 — 2,369 cases, about 41% of the national total, according to PHAC. Nova Scotia was a very close second with 2,350 cases (roughly 40%), and Quebec was third with 834 cases (about 14%). However, by per-capita incidence rather than raw count, Nova Scotia is by far the highest-risk province, at approximately 217 cases per 100,000 people — far above the national average of 14.1 per 100,000.',
  },
  {
    question: 'How many people get Lyme disease each year in Canada?',
    answer: 'In 2024, Canada reported approximately 5,239 Lyme disease cases — a national incidence rate of 14.1 per 100,000 population, up from 11.9 per 100,000 in 2023, according to PHAC. Annual reported cases have climbed steeply, from just 144 in 2009 to 2,636 in 2019 (a roughly 18-fold increase in a decade) and into the 4,000–5,800 range in 2023–2024. These figures count only diagnosed and reported cases, so the actual number of people infected each year is widely believed to be substantially higher.',
  },
  {
    question: 'Is Lyme disease increasing in Canada?',
    answer: 'Yes — Lyme disease is increasing sharply in Canada. Reported cases rose from 144 in 2009 to 2,636 in 2019 (about an 18-fold increase), then to roughly 5,239 in 2024, according to PHAC. The national incidence rate climbed from 11.9 per 100,000 in 2023 to 14.1 per 100,000 in 2024. Crucially, the share of cases acquired locally in Canada (rather than during travel) rose from 65.3% in 2009 to 93.6% in 2019 — clear evidence the blacklegged tick is now firmly established domestically rather than merely imported.',
  },
  {
    question: 'Where are the Lyme disease risk areas in Canada?',
    answer: 'The highest-risk areas are in Ontario, Nova Scotia, Quebec, New Brunswick, Manitoba (southeast), and parts of British Columbia, according to PHAC. Nova Scotia has the highest per-capita incidence in the country (~217 per 100,000). Risk is concentrated where blacklegged ticks (Ixodes scapularis) are established — generally southern and eastern Canada — and is expanding northward at an estimated 35–55 km per year as the climate warms. The three territories (Yukon, Northwest Territories, Nunavut) reported zero cases in 2024 and have no established tick populations.',
  },
  {
    question: 'How does Canada compare to the US for Lyme disease?',
    answer: 'The United States reports far more Lyme disease than Canada in absolute terms. The U.S. CDC recorded over 89,000 reported cases in 2023 and estimates approximately 476,000 cases are actually diagnosed and treated each year (based on health-insurance claims, 2010–2018), compared with Canada’s roughly 5,239 reported cases in 2024. The gap reflects both the larger U.S. population and longer-established tick range. The CDC comparison also reveals that true Lyme burden runs several times higher than routine surveillance captures — underreporting that researchers say applies to Canada as well.',
  },
  {
    question: 'Are reported Lyme disease cases the same as total infections?',
    answer: 'No. Surveillance counts only cases that are diagnosed, lab-confirmed or probable, and reported to public health. The U.S. CDC comparison — approximately 476,000 estimated cases versus about 89,000 reported — shows that true incidence can run roughly 5 to 10 times higher than reported counts, and Canadian researchers note the same underreporting applies here. For that reason, all Canadian figures on this page should be read as reported cases, not as a complete count of every infection.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: `Lyme Disease Canada: Cases by Province, Ranked`,
  description: `Lyme disease cases in Canada reached 5,239 in 2024, up from 144 in 2009. Every province and territory ranked: Ontario leads on count, Nova Scotia on rate.`,
  canonical: SLUG,
})

export default function LymeDiseaseCanadaStatisticsPage() {
  const cases2024 = 5239
  const cases2023 = 4785
  const cases2009 = 144
  const cases2019 = 2636
  const cumulativeAllTime = 28033
  const foldIncrease = Math.round(cases2019 / cases2009) // ~18×
  const maxYearCases = Math.max(...CANADA_CASES_BY_YEAR.map((y) => y.cases))
  const maxProvinceCases = Math.max(...CANADA_CASES_BY_PROVINCE.map((p) => p.cases))
  const citation = `BuzzSkito (2026). Lyme Disease in Canada: Cases by Province (2026 Statistics). Retrieved from https://buzzskito.ca${SLUG}`

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Lyme Disease in Canada Statistics', url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(SLUG)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Dataset',
        name: 'Lyme Disease in Canada: Reported Cases by Province (2026)',
        description: 'Aggregated reported Lyme disease case counts for Canada by year (2009–2024) and by province/territory (2024), national incidence rates, climate-driven tick range-expansion estimates, and a Canada-versus-United-States comparison. Compiled from Public Health Agency of Canada surveillance and U.S. CDC data.',
        url: `https://buzzskito.ca${SLUG}`,
        datePublished: '2026-06-19',
        dateModified: '2026-07-01',
        distribution: { '@type': 'DataDownload', encodingFormat: 'text/html', contentUrl: `https://buzzskito.ca${SLUG}` },
        license: 'https://creativecommons.org/licenses/by/4.0/',
        creator: {
          '@type': 'Organization',
          name: 'BuzzSkito',
          url: 'https://buzzskito.ca',
        },
        spatialCoverage: { '@type': 'Place', name: 'Canada' },
        temporalCoverage: '2009-01-01/2024-12-31',
        keywords: ['Lyme disease', 'Canada', 'cases by province', 'tick', 'public health', 'epidemiology', 'borreliosis', 'Ixodes scapularis', 'PHAC', 'surveillance'],
        isBasedOn: [
          'https://www.canada.ca/en/public-health/services/diseases/lyme-disease/surveillance-lyme-disease.html',
          'https://health-infobase.canada.ca/zoonoses/ticks/annual-report.html',
          'https://pmc.ncbi.nlm.nih.gov/articles/PMC10723709/',
          'https://www.cdc.gov/lyme/data-research/facts-stats/index.html',
        ],
      }) }} />

      {/* HERO */}
      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs font-extrabold text-amber-400 uppercase tracking-widest mb-3">Free data resource · Updated for 2026 · Sourced</p>
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-5 leading-tight">
            Lyme Disease in Canada:<br className="hidden sm:block" /> <span className="text-amber-400">Cases by Province</span> (2026 Statistics)
          </h1>
          <p className="text-lg text-brand-100 max-w-3xl mx-auto leading-relaxed mb-6">
            How many Lyme disease cases does Canada report, which provinces carry the most, and how fast is the disease spreading? This page compiles the latest reported case counts from the Public Health Agency of Canada &mdash; by year (2009&ndash;2024) and by province (2024) &mdash; alongside national incidence rates, climate-driven tick range expansion, and a Canada-versus-United-States comparison. All figures are sourced and free to cite.
          </p>
          <div className="flex flex-wrap gap-2 justify-center text-xs">
            <span className="bg-white/10 px-3 py-1 rounded-full">🇨🇦 Public Health Agency of Canada</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">📊 PHAC Health Infobase</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">🔬 Canadian LDES (peer-reviewed)</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">🇺🇸 U.S. CDC</span>
          </div>
        </div>
      </section>

      {/* QUICK ANSWER */}
      <section className="bg-amber-50 border-y-4 border-amber-300 py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-extrabold text-amber-700 uppercase tracking-wider mb-2">Quick Answer</p>
          <h2 className="text-xl sm:text-2xl font-extrabold text-brand-900 mb-3">How many Lyme disease cases are there in Canada?</h2>
          <p className="text-base text-gray-800 leading-relaxed">
            <span className="speakable"><strong>Canada reported approximately {cases2024.toLocaleString()} Lyme disease cases in 2024 &mdash; the latest year &mdash; a national incidence of 14.1 per 100,000 people, and an 18-fold increase from just 144 cases in 2009, according to the Public Health Agency of Canada.</strong></span>{' '}
            By province, Ontario had the most reported cases (2,369, about 41% of the national total), with Nova Scotia a very close second (2,350, roughly 40%) and Quebec third (834, about 14%). Note that these are reported cases only: the true number of infections is believed to be several times higher, because many cases are never diagnosed or reported &mdash; the same underreporting the U.S. CDC documents, where an estimated 476,000 cases occur each year versus about 89,000 reported.
          </p>
          <p className="text-xs text-gray-500 mt-3 italic">A fuller, revised 2024 figure of 5,809 cases also appears in PHAC&rsquo;s dashboard; preliminary counts are updated upward as late reports arrive. We use 5,239 as the conservative number throughout.</p>
        </div>
      </section>

      {/* SECTION 1: BIG STAT TILES + BY-THE-NUMBERS */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold text-brand-900 mb-2">Lyme Disease in Canada &mdash; by the Numbers</h2>
          <p className="text-base text-gray-600 mb-8">Reported case counts and incidence rates from the Public Health Agency of Canada surveillance program and Health Infobase dashboard, with a U.S. comparison from the CDC.</p>

          {/* Big stat tiles */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            <div className="rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 text-white p-5 shadow-lg">
              <p className="text-[11px] font-bold uppercase tracking-widest opacity-90">2024 reported cases</p>
              <p className="text-4xl sm:text-5xl font-black mt-2">{cases2024.toLocaleString()}</p>
              <p className="text-xs mt-2 opacity-90">Preliminary (PHAC) · latest year</p>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white p-5 shadow-lg">
              <p className="text-[11px] font-bold uppercase tracking-widest opacity-90">National incidence 2024</p>
              <p className="text-4xl sm:text-5xl font-black mt-2">14.1</p>
              <p className="text-xs mt-2 opacity-90">per 100k · ▲ from 11.9 in 2023</p>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-rose-500 to-red-700 text-white p-5 shadow-lg">
              <p className="text-[11px] font-bold uppercase tracking-widest opacity-90">Growth 2009 → 2019</p>
              <p className="text-4xl sm:text-5xl font-black mt-2">{foldIncrease}×</p>
              <p className="text-xs mt-2 opacity-90">144 → 2,636 cases / year</p>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-700 text-white p-5 shadow-lg">
              <p className="text-[11px] font-bold uppercase tracking-widest opacity-90">Cumulative 2009&ndash;2025</p>
              <p className="text-4xl sm:text-5xl font-black mt-2">{(cumulativeAllTime / 1000).toFixed(1)}K</p>
              <p className="text-xs mt-2 opacity-90">{cumulativeAllTime.toLocaleString()} reported (PHAC)</p>
            </div>
          </div>

          {/* Trend chart */}
          <div className="rounded-2xl border-2 border-gray-200 bg-gradient-to-b from-gray-50 to-white p-6 shadow-sm">
            <h3 className="text-lg font-extrabold text-brand-900 mb-1">Reported Lyme disease cases in Canada, by year</h3>
            <p className="text-xs text-gray-500 mb-5">Source: Public Health Agency of Canada &mdash; Lyme disease: Monitoring + Health Infobase annual surveillance report + Canadian LDES (PLOS One). Verified anchor years shown; 2010&ndash;2018 omitted where single-year values were not individually confirmed.</p>
            <div className="space-y-1.5">
              {CANADA_CASES_BY_YEAR.map((y) => (
                <div key={y.year} className="flex items-center gap-3">
                  <span className="text-xs font-bold text-gray-600 w-12 shrink-0">{y.year}</span>
                  <div className="flex-1 h-7 bg-gray-100 rounded-md overflow-hidden relative">
                    <div
                      className={`h-full rounded-md ${y.year >= 2023 ? 'bg-gradient-to-r from-emerald-500 to-teal-600' : y.year >= 2020 ? 'bg-gradient-to-r from-amber-400 to-orange-500' : 'bg-gradient-to-r from-rose-400 to-rose-500'}`}
                      style={{ width: `${(y.cases / maxYearCases) * 100}%` }}
                    />
                    <span className="absolute inset-0 flex items-center pl-3 text-xs font-bold text-white drop-shadow">{y.cases.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-5 italic">Reported cases climbed from 144 (2009) to 2,636 (2019) &mdash; roughly an 18&times; increase &mdash; and into the 4,800&ndash;5,800 range by 2023&ndash;2024. The 2020 dip (1,617) is widely attributed to reduced COVID-19-era testing and reporting, not a real decline; cases rebounded +94.6% in 2021. The 2024 bar uses the conservative preliminary count of 5,239 (PHAC&rsquo;s fuller revised figure is 5,809).</p>
          </div>
        </div>
      </section>

      {/* SECTION 2: CASES BY PROVINCE */}
      <section className="bg-gradient-to-br from-emerald-50 via-teal-50 to-amber-50 py-14 px-4 border-y-4 border-emerald-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold text-brand-900 mb-2">Which province has the most Lyme disease?</h2>
          <p className="text-base text-gray-700 mb-8 max-w-3xl">
            In 2024, Ontario reported the most Lyme disease cases of any province by raw count, with Nova Scotia a remarkably close second, according to the Public Health Agency of Canada&rsquo;s Health Infobase dashboard. But by per-capita risk, Nova Scotia is in a league of its own. The bars below show reported cases by province and territory for 2024.
          </p>

          {/* Province bar chart */}
          <div className="rounded-2xl border-2 border-emerald-200 bg-white p-6 shadow-sm mb-6">
            <h3 className="text-lg font-extrabold text-brand-900 mb-1">Reported Lyme disease cases by province / territory, 2024</h3>
            <p className="text-xs text-gray-500 mb-5">Source: Public Health Agency of Canada &mdash; Health Infobase annual surveillance dashboard, 2024 data.</p>
            <div className="space-y-2">
              {CANADA_CASES_BY_PROVINCE.map((p) => {
                const barColor =
                  p.tier === 'highest' ? 'bg-gradient-to-r from-emerald-500 to-teal-600' :
                  p.tier === 'high' ? 'bg-gradient-to-r from-amber-400 to-orange-500' :
                  p.tier === 'moderate' ? 'bg-gradient-to-r from-amber-300 to-amber-400' :
                  p.tier === 'low' ? 'bg-gradient-to-r from-gray-300 to-gray-400' :
                  'bg-gray-200'
                // Floor non-zero bars at a small width so tiny counts stay visible.
                const pct = p.cases === 0 ? 0 : Math.max((p.cases / maxProvinceCases) * 100, 1.5)
                return (
                  <div key={p.region} className="flex items-center gap-3">
                    <span className="text-xs font-bold text-gray-700 w-28 sm:w-44 shrink-0 leading-tight">{p.region}</span>
                    <div className="flex-1 h-7 bg-gray-100 rounded-md overflow-hidden relative">
                      <div className={`h-full rounded-md ${barColor}`} style={{ width: `${pct}%` }} />
                      <span className={`absolute inset-0 flex items-center text-xs font-bold ${p.tier === 'low' || p.tier === 'none' || p.tier === 'moderate' ? 'pl-2 text-gray-700' : 'pl-3 text-white drop-shadow'}`}>
                        {p.display}{p.share ? ` (${p.share})` : ''}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
            <p className="text-xs text-gray-500 mt-5 italic">Provincial counts sum close to PHAC&rsquo;s fuller 5,809 figure rather than the preliminary 5,239 total &mdash; a further reason to treat the larger value as the more complete 2024 count. Quebec and Saskatchewan report through the CNDSS system (less detailed) rather than the enhanced LDES program.</p>
          </div>

          {/* Highest-count vs highest-incidence callout */}
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 text-white p-6 shadow-lg">
              <p className="text-xs font-extrabold uppercase tracking-widest mb-2 opacity-90">Most cases (raw count)</p>
              <h3 className="text-2xl font-extrabold mb-2">Ontario &mdash; 2,369</h3>
              <p className="text-sm opacity-95 leading-relaxed">About 41% of all reported Canadian cases in 2024. Ontario&rsquo;s large population and its extensive established tick range across southern and eastern parts of the province drive the highest absolute count in the country.</p>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white p-6 shadow-lg">
              <p className="text-xs font-extrabold uppercase tracking-widest mb-2 opacity-90">Highest per-capita risk</p>
              <h3 className="text-2xl font-extrabold mb-2">Nova Scotia &mdash; ~217 / 100k</h3>
              <p className="text-sm opacity-95 leading-relaxed">Nova Scotia reported 2,350 cases (about 40% of the national total) but, with a far smaller population, carries by far the highest per-capita incidence in Canada &mdash; roughly 217 per 100,000, more than 15&times; the national rate of 14.1.</p>
            </div>
          </div>

          <div className="mt-6 rounded-xl bg-white border-l-4 border-emerald-500 p-4 text-sm text-gray-700">
            <strong className="text-brand-900">Reading these numbers correctly:</strong> raw case counts favour big provinces, while incidence (cases per 100,000 people) shows true per-person risk. Ontario leads on count; Nova Scotia leads on incidence. Both views come from PHAC. The three territories (Yukon, NWT, Nunavut) reported zero cases in 2024 and have no established tick populations.
          </div>
        </div>
      </section>

      {/* SECTION 3: IS IT INCREASING / RISK AREAS */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-brand-900 mb-2">Is Lyme disease increasing in Canada?</h2>
          <p className="text-base text-gray-700 mb-6 max-w-3xl">
            Yes &mdash; and not by a little. The trend is one of the clearest in Canadian public-health surveillance, and researchers attribute it primarily to a warming climate pushing blacklegged tick habitat northward.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            <div className="rounded-2xl border-2 border-gray-200 bg-gradient-to-b from-gray-50 to-white p-5 shadow-sm">
              <p className="text-3xl font-black text-emerald-600">18×</p>
              <p className="text-sm text-gray-700 mt-1">increase in annual reported cases, 2009 (144) to 2019 (2,636)</p>
              <p className="text-[11px] text-gray-500 mt-2 italic">Canadian LDES (PLOS One)</p>
            </div>
            <div className="rounded-2xl border-2 border-gray-200 bg-gradient-to-b from-gray-50 to-white p-5 shadow-sm">
              <p className="text-3xl font-black text-amber-600">65% → 94%</p>
              <p className="text-sm text-gray-700 mt-1">share of cases acquired locally in Canada, 2009 to 2019</p>
              <p className="text-[11px] text-gray-500 mt-2 italic">Canadian LDES (PLOS One)</p>
            </div>
            <div className="rounded-2xl border-2 border-gray-200 bg-gradient-to-b from-gray-50 to-white p-5 shadow-sm">
              <p className="text-3xl font-black text-rose-600">11.9 → 14.1</p>
              <p className="text-sm text-gray-700 mt-1">national incidence per 100,000, 2023 to 2024</p>
              <p className="text-[11px] text-gray-500 mt-2 italic">PHAC Health Infobase</p>
            </div>
          </div>

          <div className="rounded-2xl bg-emerald-50 border-l-4 border-emerald-500 p-6 shadow-sm">
            <h3 className="text-lg font-extrabold text-brand-900 mb-3">Why the rise? Climate-driven tick range expansion</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">The single most important driver is the northward spread of the blacklegged tick (Ixodes scapularis) as winters warm. Peer-reviewed climate-vector modelling documents the pace:</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="text-left border-b-2 border-emerald-200">
                    <th className="py-2 pr-4 font-extrabold text-brand-900">Metric</th>
                    <th className="py-2 pr-4 font-extrabold text-brand-900">Estimate</th>
                    <th className="py-2 font-extrabold text-brand-900">Detail &amp; source</th>
                  </tr>
                </thead>
                <tbody>
                  {RANGE_EXPANSION.map((r) => (
                    <tr key={r.metric} className="border-b border-emerald-100 align-top">
                      <td className="py-3 pr-4 font-bold text-gray-800">{r.metric}</td>
                      <td className="py-3 pr-4 font-extrabold text-emerald-700 whitespace-nowrap">{r.value}</td>
                      <td className="py-3 text-gray-600">{r.note} <span className="italic text-gray-500">({r.source})</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-4 italic">Range-expansion rates and habitat-shift projections come from peer-reviewed climate-vector modelling, not government surveillance &mdash; cite them as research estimates. The causal link between climate warming, northward Ixodes scapularis expansion, and rising Canadian Lyme incidence is well established in the literature.</p>
          </div>

          <h3 className="text-2xl font-extrabold text-brand-900 mt-12 mb-3">Where are the Lyme disease risk areas in Canada?</h3>
          <p className="text-base text-gray-700 mb-4 max-w-3xl">
            Risk is concentrated where blacklegged ticks are established &mdash; broadly across southern and eastern Canada &mdash; and is expanding northward each year, according to PHAC. The highest-risk provinces in 2024 were:
          </p>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-700 mb-4">
            <li className="flex gap-2"><span className="text-emerald-500">●</span><strong>Nova Scotia</strong> &mdash; highest per-capita incidence in Canada (~217 / 100k)</li>
            <li className="flex gap-2"><span className="text-emerald-500">●</span><strong>Ontario</strong> &mdash; highest absolute count (2,369), established range across the south and east</li>
            <li className="flex gap-2"><span className="text-emerald-500">●</span><strong>Quebec</strong> &mdash; range expanding northward from the U.S. border (834 cases)</li>
            <li className="flex gap-2"><span className="text-emerald-500">●</span><strong>New Brunswick</strong> &mdash; Atlantic Canada endemic zone (111 cases)</li>
            <li className="flex gap-2"><span className="text-emerald-500">●</span><strong>Manitoba</strong> &mdash; established risk areas in the southeast (84 cases)</li>
            <li className="flex gap-2"><span className="text-emerald-500">●</span><strong>British Columbia</strong> &mdash; western blacklegged tick, low infection prevalence (21 cases)</li>
          </ul>
          <p className="text-sm text-gray-600 italic">By contrast, Alberta&rsquo;s cases are mostly travel-related, and the three territories reported zero cases in 2024 with no established tick populations (PHAC, 2024).</p>

          <div className="mt-8 rounded-xl bg-blue-50 border-l-4 border-blue-400 p-4 text-sm text-blue-900">
            <strong>Ontario reader?</strong> For province-level Ontario case counts by Public Health Unit, endemic-zone maps, and a tick-species identification guide, see our dedicated{' '}
            <Link href="/ontario-lyme-disease-tracker-2026" className="underline font-bold">Ontario Lyme Disease Tracker 2026</Link>. For Ontario tick population and surveillance data, see{' '}
            <Link href="/ticks-in-ontario-statistics" className="underline font-bold">Ticks in Ontario Statistics</Link>.
          </div>
        </div>
      </section>

      {/* SECTION 4: CANADA vs US */}
      <section className="bg-brand-950 text-white py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-2">How does Canada compare to the US for Lyme disease?</h2>
          <p className="text-base text-brand-100 mb-8 max-w-3xl">
            The United States reports far more Lyme disease than Canada in absolute terms &mdash; reflecting its larger population and longer-established tick range &mdash; but the U.S. data also exposes how badly reported counts understate the true number of infections on both sides of the border.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {CANADA_US_COMPARISON.map((c) => (
              <div key={c.label} className="rounded-2xl bg-white/5 border border-white/10 p-5">
                <p className="text-[11px] font-bold uppercase tracking-widest text-amber-400 mb-2">{c.label}</p>
                <p className="text-3xl sm:text-4xl font-black">{c.value}</p>
                <p className="text-xs text-brand-200 mt-2 leading-relaxed">{c.detail}</p>
                <p className="text-[11px] text-brand-300 mt-2 italic">Source: {c.source}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl bg-amber-400/10 border border-amber-400/30 p-6">
            <h3 className="text-lg font-extrabold text-amber-400 mb-2">The reported-vs-true-burden gap</h3>
            <p className="text-sm text-brand-100 leading-relaxed">
              In the United States, the CDC estimates approximately 476,000 Lyme cases are diagnosed and treated each year (from health-insurance claims, 2010&ndash;2018), versus the 89,000+ reported through routine surveillance in 2023 &mdash; meaning roughly one in five true cases is captured by surveillance. Canadian researchers note the same underreporting applies here. So while Canada&rsquo;s ~5,239 reported cases (2024) look modest beside the U.S. total, the real number of Canadian infections is almost certainly several times higher. Treat every figure on this page as <strong className="text-white">reported cases</strong>, not a complete count of infections.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: PULL-QUOTE */}
      <section className="bg-emerald-50 border-y-4 border-emerald-200 py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <blockquote className="relative">
            <span className="absolute -top-6 -left-2 text-7xl text-emerald-300 font-serif leading-none" aria-hidden="true">&ldquo;</span>
            <p className="text-xl sm:text-2xl font-bold text-brand-900 leading-snug relative z-10">
              An 18-fold jump in reported Lyme cases in a single decade isn&rsquo;t a blip &mdash; it&rsquo;s a blacklegged tick that has moved in and settled down across Canada. And because most infections are never reported, the real number is far higher than the official count. The good news is that yard-level risk is one of the few parts of this you can actually control.
            </p>
          </blockquote>
          <div className="mt-5 flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-emerald-600 text-white flex items-center justify-center font-extrabold text-lg shrink-0">A</div>
            <div>
              <p className="font-extrabold text-brand-900">Alex</p>
              <p className="text-xs text-gray-600">BuzzSkito Mosquito &amp; Tick Control &mdash; GTA tick-control specialist</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: CITE THIS PAGE */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl border-4 border-amber-300 bg-gradient-to-br from-amber-50 to-yellow-50 p-7 shadow-md">
            <h2 className="text-2xl font-extrabold text-brand-900 mb-2">📊 Cite this page</h2>
            <p className="text-sm text-gray-700 mb-5">
              Journalists, bloggers, researchers, and AI engines are welcome to use this data. <strong>Free to cite or embed with a link back to this page.</strong> Please attribute BuzzSkito and link to the underlying primary sources where possible.
            </p>

            <div className="mb-5">
              <p className="text-xs font-extrabold text-amber-700 uppercase tracking-wider mb-2">Suggested citation</p>
              <div className="rounded-lg bg-brand-950 text-emerald-200 p-4 font-mono text-xs sm:text-sm break-words leading-relaxed">
                {citation}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div className="rounded-lg bg-white border border-amber-200 p-4">
                <p className="font-extrabold text-brand-900 mb-1">Key figures to quote</p>
                <ul className="space-y-1 text-gray-700 text-xs">
                  <li>• ~5,239 reported cases in Canada (2024, PHAC)</li>
                  <li>• 14.1 per 100,000 national incidence (2024)</li>
                  <li>• Ontario 2,369 (41%) · Nova Scotia 2,350 (40%) · Quebec 834 (14%)</li>
                  <li>• 18× growth, 2009 (144) → 2019 (2,636)</li>
                  <li>• 28,033 cumulative reported cases, 2009&ndash;2025</li>
                </ul>
              </div>
              <div className="rounded-lg bg-white border border-amber-200 p-4">
                <p className="font-extrabold text-brand-900 mb-1">Always note</p>
                <p className="text-gray-700 text-xs leading-relaxed">These are <strong>reported</strong> cases, not total infections. PHAC&rsquo;s 2024 count appears as both 5,239 (preliminary) and 5,809 (revised). Re-check the live PHAC dashboard before publishing.</p>
              </div>
            </div>
          </div>

          {/* Primary sources */}
          <div className="mt-8">
            <h3 className="text-lg font-extrabold text-brand-900 mb-3">Primary sources &amp; further reading</h3>
            <ul className="space-y-2 text-sm">
              {SOURCES.map((s) => (
                <li key={s.url} className="flex gap-2">
                  <span className="text-emerald-500 shrink-0">→</span>
                  <a href={s.url} target="_blank" rel="noopener" className="text-blue-700 underline break-words">{s.name}</a>
                </li>
              ))}
            </ul>
            <p className="text-xs text-gray-500 mt-4 italic">Data compiled July 2026. All case counts are reported cases from the Public Health Agency of Canada unless otherwise attributed. U.S. comparison figures are from the U.S. CDC. Range-expansion estimates are from peer-reviewed climate-vector modelling. Figures are subject to revision as PHAC updates preliminary counts.</p>
          </div>
        </div>
      </section>

      {/* SECTION 7: FAQ */}
      <section className="bg-gray-50 py-14 px-4 border-t border-gray-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-brand-900 mb-8">Frequently asked questions</h2>
          <div className="space-y-4">
            {FAQS.map((f) => (
              <details key={f.question} className="group rounded-2xl bg-white border-2 border-gray-200 p-5 shadow-sm">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-base sm:text-lg font-extrabold text-brand-900 pr-4">{f.question}</h3>
                  <span className="text-amber-500 text-2xl font-bold shrink-0 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="text-sm text-gray-700 leading-relaxed mt-3">{f.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: CLOSING CTA */}
      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-extrabold text-amber-400 uppercase tracking-widest mb-3">Protect your yard</p>
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-4">Reduce the tick risk you can actually control</h2>
          <p className="text-base text-brand-100 max-w-2xl mx-auto mb-7 leading-relaxed">
            You can&rsquo;t change the climate, but you can change your own backyard. BuzzSkito&rsquo;s Health Canada-approved tick barrier spray targets the lawn-edge, leaf-litter, and fence-line zones where blacklegged ticks concentrate &mdash; across Mississauga, Toronto, and the wider GTA. Get a free, no-obligation quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link
              href="/free-yard-assessment"
              className="inline-block bg-amber-400 hover:bg-amber-300 text-brand-950 font-extrabold text-base px-8 py-4 rounded-full shadow-lg transition-all"
            >
              Get a Free Quote →
            </Link>
            <a
              href={BUSINESS.phoneHref}
              className="inline-block bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-base px-8 py-4 rounded-full transition-all"
            >
              Call {BUSINESS.phone}
            </a>
          </div>
          <p className="text-xs text-brand-300 mt-5">Educational resource &mdash; not medical advice. For a confirmed tick bite or symptoms, contact your doctor or local public health unit.</p>
        </div>
      </section>

      {/* SECTION 9: RELATED RESOURCES */}
      <section className="bg-white py-14 px-4 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-2">Related resources</h2>
          <p className="text-sm text-gray-600 mb-6">More free, sourced data and guides from BuzzSkito on ticks and Lyme disease.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/ontario-lyme-disease-tracker-2026" className="group rounded-2xl border-2 border-gray-200 hover:border-emerald-300 bg-gradient-to-b from-gray-50 to-white p-5 shadow-sm transition-all">
              <p className="text-xs font-extrabold text-emerald-600 uppercase tracking-wider mb-1">Ontario deep-dive</p>
              <h3 className="text-lg font-extrabold text-brand-900 group-hover:text-emerald-700">Ontario Lyme Disease Tracker 2026 →</h3>
              <p className="text-sm text-gray-600 mt-1">Province-level case counts by Public Health Unit, endemic-zone expansion map, tick-species ID guide, and a full PHU directory.</p>
            </Link>
            <Link href="/ticks-in-ontario-statistics" className="group rounded-2xl border-2 border-gray-200 hover:border-emerald-300 bg-gradient-to-b from-gray-50 to-white p-5 shadow-sm transition-all">
              <p className="text-xs font-extrabold text-emerald-600 uppercase tracking-wider mb-1">Data resource</p>
              <h3 className="text-lg font-extrabold text-brand-900 group-hover:text-emerald-700">Ticks in Ontario Statistics →</h3>
              <p className="text-sm text-gray-600 mt-1">Tick population trends, surveillance data, and risk-area breakdowns for Ontario.</p>
            </Link>
            <Link href="/deadliest-animal-in-canada" className="group rounded-2xl border-2 border-gray-200 hover:border-emerald-300 bg-gradient-to-b from-gray-50 to-white p-5 shadow-sm transition-all">
              <p className="text-xs font-extrabold text-emerald-600 uppercase tracking-wider mb-1">Data resource</p>
              <h3 className="text-lg font-extrabold text-brand-900 group-hover:text-emerald-700">The Deadliest Animal in Canada →</h3>
              <p className="text-sm text-gray-600 mt-1">Where ticks and mosquitoes rank among Canada&rsquo;s most dangerous animals, by the numbers.</p>
            </Link>
            <Link href="/tick-control" className="group rounded-2xl border-2 border-gray-200 hover:border-emerald-300 bg-gradient-to-b from-gray-50 to-white p-5 shadow-sm transition-all">
              <p className="text-xs font-extrabold text-emerald-600 uppercase tracking-wider mb-1">Our service</p>
              <h3 className="text-lg font-extrabold text-brand-900 group-hover:text-emerald-700">Professional Tick Control →</h3>
              <p className="text-sm text-gray-600 mt-1">Health Canada-approved tick barrier spray for GTA yards. Free quotes, Bite-Free Guarantee.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
