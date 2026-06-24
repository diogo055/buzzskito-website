import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, breadcrumbSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'

const SLUG = '/west-nile-virus-ontario-tracker'

// ── ANCHOR STATISTICS ─────────────────────────────────────────────────────────
// Every figure on this page is sourced to a named primary authority and stamped
// with the latest available reporting year. The most recent FULL-YEAR official
// totals are 2024 (Ontario 81 / Canada 177). The 2025 season was still being
// reported when these sources were captured — treat 2025/2026 figures as
// in-season / preliminary.
interface AnchorStat {
  label: string
  value: string
  source: string
  sourceUrl: string
  asOf: string
  note: string
}

const ANCHOR_STATS: AnchorStat[] = [
  {
    label: 'Confirmed human WNV cases in Ontario (2024, full year)',
    value: '81 cases',
    source: 'Public Health Agency of Canada — Annual WNV & mosquito-borne disease surveillance report',
    sourceUrl: 'https://health-infobase.canada.ca/zoonoses/mosquito/annual-report.html',
    asOf: '2024',
    note: 'Ontario accounted for 46% of all 177 locally-acquired Canadian cases in 2024 — the highest of any province. Ontario incidence rate was 0.74 per 100,000, also the highest nationally.',
  },
  {
    label: 'Infections that are asymptomatic (no symptoms)',
    value: '~80% (4 in 5)',
    source: 'U.S. CDC — West Nile Virus clinical signs & symptoms',
    sourceUrl: 'https://www.cdc.gov/west-nile-virus/hcp/clinical-signs/index.html',
    asOf: '2025',
    note: 'About 1 in 5 infected people develop febrile illness (West Nile fever); roughly 1 in 150 develop severe neuroinvasive disease (encephalitis/meningitis).',
  },
  {
    label: 'Severe (neuroinvasive) WNV case-fatality rate',
    value: '~10%',
    source: 'U.S. CDC — West Nile Virus symptoms, diagnosis & treatment',
    sourceUrl: 'https://www.cdc.gov/west-nile-virus/symptoms-diagnosis-treatment/index.html',
    asOf: '2025',
    note: 'About 1 in 10 people who develop neuroinvasive WNV die. In Canada in 2024, 60% of reported cases (106 of 177) were neurological; there was 1 death (<1% of all reported cases).',
  },
  {
    label: "Canada's first human WNV case of 2025",
    value: 'Toronto resident (confirmed July 31, 2025)',
    source: 'Global News / Public Health Agency of Canada',
    sourceUrl: 'https://globalnews.ca/news/11314100/west-nile-virus-canada-toronto-case-phac/',
    asOf: '2025',
    note: 'A Toronto adult with no travel history — locally acquired. Toronto confirmed its first WNV-positive mosquito batches of 2025 on July 18 (3 positive batches).',
  },
]

// ── ONTARIO HUMAN CASES BY YEAR ───────────────────────────────────────────────
// Source: PLOS One 12-year analysis (2002-2013) + PHAC annual report (2024).
// WNV is highly weather-driven, so annual counts swing widely between epidemic
// years (324 in 2002, 239 in 2012) and single/low-double digits in cool, wet
// years. A high or low single-year number is not a long-term trend.
interface YearRow {
  year: string
  cases: number | null
  display: string
  note: string
  era: 'epidemic' | 'recent' | 'inprogress'
}

const ONTARIO_CASES_BY_YEAR: YearRow[] = [
  { year: '2002', cases: 324, display: '324', era: 'epidemic', note: 'Ontario confirmed human cases; 478 WNV-positive Culex pools. First major outbreak year (PLOS One).' },
  { year: '2012', cases: 239, display: '239', era: 'epidemic', note: 'Ontario confirmed human cases; 440 WNV-positive Culex pools. Second-largest outbreak (PLOS One).' },
  { year: '2024', cases: 81, display: '81', era: 'recent', note: 'Ontario full-year confirmed cases (46% of Canada’s 177 locally-acquired cases); incidence 0.74 per 100,000 — highest province (PHAC).' },
  { year: '2025', cases: null, display: 'In progress', era: 'inprogress', note: 'Toronto confirmed Canada’s first 2025 human case July 31. Full-year Ontario total not yet published as of mid-2026.' },
]

// 12-year cumulative context (separate from the by-year bars above).
const ONTARIO_12YR_TOTAL = 900 // 2002-2013 total confirmed Ontario human cases (PLOS One)

// ── CANADA NATIONAL CASES BY YEAR ─────────────────────────────────────────────
const CANADA_CASES_BY_YEAR = [
  { year: '2022', cases: 45, note: 'Locally-acquired human cases nationwide (low season).' },
  { year: '2024', cases: 177, note: 'Locally-acquired cases (+13 travel-related). Ontario 81 (46%), Quebec ~78 (44%).' },
]

// ── 2024 CANADA CASE-SEVERITY BREAKDOWN ───────────────────────────────────────
// Source: PHAC annual report. NOTE: the 7% "asymptomatic" line below refers ONLY
// to incidentally-detected reported cases (e.g. blood-donor screening) — NOT the
// population-wide asymptomatic rate, which the CDC puts at ~80%.
interface SeverityRow {
  label: string
  count: number
  pct: number
  note: string
}

const CANADA_SEVERITY_2024: SeverityRow[] = [
  { label: 'Neurological (neuroinvasive)', count: 106, pct: 60, note: 'Most common presentation among reported Canadian cases in 2024.' },
  { label: 'Non-neurological', count: 41, pct: 23, note: 'West Nile fever / milder reported cases.' },
  { label: 'Unspecified', count: 17, pct: 10, note: 'Severity not classified in reporting.' },
  { label: 'Asymptomatic (incidentally detected)', count: 13, pct: 7, note: 'Caught via blood-donor screening, etc. Population-wide ~80% of infections are asymptomatic (CDC).' },
]

// ── GTA REGION SURVEILLANCE (2025 / recent) ───────────────────────────────────
// IMPORTANT: PHO/PHAC report by province and public health unit, NOT by the
// marketing "GTA" boundary. Toronto, Peel, York, Durham, Halton and Hamilton are
// separate health units; these per-unit figures should NOT be summed into a
// single "GTA total" without noting reporting-period differences. Pool / case
// numbers are FIRST-detection / point-in-time announcements from each health
// unit's press releases, not full-season cumulative totals.
interface RegionRow {
  region: string
  finding: string
  detail: string
  source: string
  sourceUrl: string
  year: string
  level: 'detected' | 'human' | 'monitoring'
}

const GTA_SURVEILLANCE: RegionRow[] = [
  {
    region: 'Toronto',
    finding: '3 positive mosquito batches (first of 2025)',
    detail: 'Confirmed July 18, 2025. Toronto runs 22 traps weekly, mid-June to mid-September. A Toronto resident was Canada’s first 2025 human case (confirmed July 31).',
    source: 'City of Toronto — Toronto Public Health',
    sourceUrl: 'https://www.toronto.ca/news/toronto-public-health-confirms-first-mosquitoes-to-test-positive-for-west-nile-virus-in-2025/',
    year: '2025',
    level: 'human',
  },
  {
    region: 'Peel (Mississauga / Brampton / Caledon)',
    finding: '1st positive pool July 22; 6 positive traps week of July 27',
    detail: '33 traps across Mississauga, Brampton and Caledon, tested weekly mid-June to September. Peel’s first 2025 human case was a Mississauga resident (Sept 9, 2025).',
    source: 'Peel Region — Peel Public Health',
    sourceUrl: 'https://peelregion.ca/press-releases/peel-public-health-confirms-first-west-nile-virus-positive-mosquitoes-2025',
    year: '2025',
    level: 'human',
  },
  {
    region: 'York Region',
    finding: 'Positive pools + 1st human case (City of Vaughan)',
    detail: 'York reported its first human case in 2024 in Vaughan; positive mosquito pools have been confirmed across the region.',
    source: 'York Region — Public Health',
    sourceUrl: 'https://www.york.ca/newsroom/media-release/york-region-reports-first-human-case-west-nile-virus-3',
    year: '2024',
    level: 'human',
  },
  {
    region: 'Hamilton',
    finding: '7 confirmed human cases (2024)',
    detail: 'WNV risk moved to “high” in Hamilton during peak season.',
    source: 'City of Hamilton — Public Health',
    sourceUrl: 'https://www.hamilton.ca/people-programs/public-health/environmental-health-hazards/animal-insect-related-diseases/west-nile',
    year: '2024',
    level: 'human',
  },
]

// ── ONTARIO WNV-POSITIVE MOSQUITO POOLS ───────────────────────────────────────
const ONTARIO_POOLS = [
  {
    label: 'Ontario WNV-positive mosquito pools, 2002–2013',
    value: '2,175 total',
    note: 'Of these, 1,892 (87%) were Culex pipiens/restuans — the primary urban vector.',
    source: 'PLOS One',
    sourceUrl: 'https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0183568',
  },
  {
    label: 'Ontario 2025 (early season, as of Jul 12)',
    value: '2 positive pools',
    note: 'PHAC national surveillance map showed 2 WNV-positive pools in Ontario + 1 in Manitoba as of July 12, 2025; the count rose quickly through late July across the GTA.',
    source: 'PHAC national surveillance map',
    sourceUrl: 'https://health-infobase.canada.ca/zoonoses/mosquito/annual-report.html',
  },
]

const FAQS = [
  {
    question: 'How many West Nile virus cases are there in Ontario?',
    answer: 'The most recent full-year official figure is 81 confirmed human West Nile virus cases in Ontario in 2024, according to the Public Health Agency of Canada. That was 46% of all 177 locally-acquired Canadian cases that year — the highest of any province — at an incidence of 0.74 per 100,000. Annual counts swing widely with the weather: epidemic years saw 324 Ontario cases in 2002 and 239 in 2012, while cool, wet years produce single or low-double digits. Ontario’s 2025 season total has not yet been published by Public Health Ontario or PHAC as of mid-2026.',
  },
  {
    question: 'Has West Nile virus been found in Toronto?',
    answer: 'Yes. Toronto Public Health confirmed the city’s first WNV-positive mosquito batches of 2025 on July 18 (3 positive batches), and a Toronto resident with no travel history became Canada’s first locally-acquired human case of 2025, confirmed July 31, 2025 (Global News / PHAC). Toronto operates 22 mosquito traps tested weekly from mid-June to mid-September. WNV-positive mosquitoes are detected in Toronto most summers.',
  },
  {
    question: 'How many West Nile cases in Ontario in 2025?',
    answer: 'Ontario’s full-year 2025 case total had not yet been published by Public Health Ontario or the Public Health Agency of Canada as of mid-2026, so any 2025 figure should be treated as in-season / preliminary. What is confirmed: a Toronto resident became Canada’s first locally-acquired human case of 2025 (July 31), Peel’s first 2025 human case was a Mississauga resident (Sept 9), and positive mosquito pools were detected across the GTA from mid-July onward. The most recent complete-year Ontario total remains 81 cases (2024, PHAC).',
  },
  {
    question: 'What mosquito carries West Nile virus in Ontario?',
    answer: 'The Culex pipiens / Culex restuans complex is the primary West Nile virus vector in Ontario and the dominant urban vector in the GTA. In a 12-year PLOS One analysis (2002–2013), 1,892 of 2,175 WNV-positive mosquito pools in Ontario (87%) were the Culex pipiens/restuans complex. These mosquitoes breed in stagnant, organically-rich standing water — catch basins, clogged gutters, unused pools, bird baths and containers — and bite most actively at dusk and dawn.',
  },
  {
    question: 'Is West Nile virus deadly?',
    answer: 'It can be, but death is rare. About 80% of infected people have no symptoms at all, roughly 1 in 5 develop a febrile illness (West Nile fever), and about 1 in 150 develop severe neuroinvasive disease such as encephalitis or meningitis (U.S. CDC). Among those who develop neuroinvasive disease, the case-fatality rate is about 10% — about 1 in 10. In Canada in 2024, 60% of the 177 reported cases were neurological and there was 1 death (under 1% of all reported cases), per PHAC.',
  },
  {
    question: 'When is West Nile virus season in Ontario?',
    answer: 'West Nile virus risk in Ontario runs through the warm months, with human-risk concentrated from mid-July through September — after Culex pipiens/restuans populations have amplified the virus through the summer. Public health units including Toronto and Peel run mosquito-trap surveillance weekly from mid-June to mid-September. In 2025, Toronto’s first positive batches were confirmed July 18 and Canada’s first human case July 31, with Peel’s first human case in early September — a typical late-summer pattern. Hot, dry summers favour Culex breeding and virus amplification, raising risk.',
  },
  {
    question: 'How does professional mosquito control reduce West Nile virus risk in my yard?',
    answer: 'Yard-level mosquito control targets the Culex mosquitoes that transmit West Nile virus by attacking both the adults and their breeding sites. A professional barrier spray treats the shaded vegetation, fence lines and resting areas where adult Culex shelter during the day, while source reduction — eliminating standing water in gutters, containers, bird baths and unused pools — removes the stagnant water Culex need to breed. This complements, and does not replace, municipal catch-basin larviciding and personal protection (repellent, dusk/dawn cover-up). It is a risk-reduction measure, not a medical treatment.',
  },
  {
    question: 'Is this tracker a substitute for medical advice?',
    answer: 'No. This page aggregates publicly available surveillance data for educational purposes and is not medical advice or diagnostic. If you develop a high fever, severe headache, stiff neck, confusion, muscle weakness or any neurological symptoms during mosquito season, contact your family doctor, Telehealth Ontario (1-866-797-0000), or seek emergency care. Most people who are infected have no symptoms, but severe neuroinvasive disease is a medical emergency.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: `West Nile Virus in Ontario & the GTA: 2026 Tracker`,
  description: `Free 2026 tracker for West Nile virus in Ontario and the GTA — confirmed human case counts by year, Toronto and Peel mosquito surveillance, and risk.`,
  canonical: SLUG,
})

export default function WestNileVirusOntarioTrackerPage() {
  const maxYearCases = Math.max(...ONTARIO_CASES_BY_YEAR.map(y => y.cases ?? 0))
  const maxCanada = Math.max(...CANADA_CASES_BY_YEAR.map(y => y.cases))
  const citation = `BuzzSkito (2026). West Nile Virus in Ontario & the GTA: 2026 Case Tracker. Retrieved from https://buzzskito.ca${SLUG}`

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'West Nile Virus Ontario Tracker', url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(SLUG)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Dataset',
        name: 'West Nile Virus in Ontario & the GTA — 2026 Case Tracker',
        description: 'Aggregated West Nile virus human case counts, mosquito-surveillance findings, case-severity breakdowns and vector data for the Province of Ontario and the Greater Toronto Area, 2002-2026. Sourced to the Public Health Agency of Canada, Public Health Ontario, the U.S. CDC, and peer-reviewed surveillance literature.',
        url: `https://buzzskito.ca${SLUG}`,
        license: 'https://creativecommons.org/licenses/by/4.0/',
        creator: {
          '@type': 'Organization',
          name: 'BuzzSkito',
          url: 'https://buzzskito.ca',
        },
        spatialCoverage: { '@type': 'Place', name: 'Ontario, Canada (including the Greater Toronto Area)' },
        temporalCoverage: '2002-01-01/2026-12-31',
        keywords: ['West Nile virus', 'Ontario', 'GTA', 'Toronto', 'mosquito', 'Culex pipiens', 'public health', 'epidemiology', 'surveillance', 'mosquito-borne disease'],
        isBasedOn: [
          'https://health-infobase.canada.ca/zoonoses/mosquito/annual-report.html',
          'https://www.publichealthontario.ca/en/data-and-analysis/infectious-disease/west-nile-virus',
          'https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0183568',
          'https://www.cdc.gov/west-nile-virus/hcp/clinical-signs/index.html',
          'https://www.cdc.gov/west-nile-virus/symptoms-diagnosis-treatment/index.html',
          'https://www.toronto.ca/news/toronto-public-health-confirms-first-mosquitoes-to-test-positive-for-west-nile-virus-in-2025/',
          'https://globalnews.ca/news/11314100/west-nile-virus-canada-toronto-case-phac/',
          'https://peelregion.ca/press-releases/peel-public-health-confirms-first-west-nile-virus-positive-mosquitoes-2025',
        ],
      }) }} />

      {/* HERO */}
      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs font-extrabold text-amber-400 uppercase tracking-widest mb-3">Free data resource · Updated for 2026 · Sourced</p>
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-5 leading-tight">
            West Nile Virus in Ontario &amp; the GTA<br className="hidden sm:block" /> <span className="text-amber-400">2026 Case Tracker</span>
          </h1>
          <p className="text-lg text-brand-100 max-w-3xl mx-auto leading-relaxed mb-6">
            A consumer-friendly tracker of West Nile virus (WNV) in Ontario and the Greater Toronto Area &mdash; confirmed human case counts, Toronto &amp; Peel mosquito surveillance, the mosquito vector that carries it, severity and fatality rates, and season timing. Every figure on this page is attributed to a named primary source: the Public Health Agency of Canada, Public Health Ontario, the U.S. CDC, and peer-reviewed surveillance literature.
          </p>
          <div className="flex flex-wrap gap-2 justify-center text-xs">
            <span className="bg-white/10 px-3 py-1 rounded-full">🇨🇦 Public Health Agency of Canada</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">📊 Public Health Ontario</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">⚕️ U.S. CDC</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">🔬 PLOS One surveillance study</span>
          </div>
        </div>
      </section>

      {/* QUICK ANSWER */}
      <section className="bg-amber-50 border-y-4 border-amber-300 py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-extrabold text-amber-700 uppercase tracking-wider mb-2">Quick Answer</p>
          <h2 className="text-xl sm:text-2xl font-extrabold text-brand-900 mb-3">How many West Nile virus cases are there in Ontario?</h2>
          <p className="text-base text-gray-800 leading-relaxed speakable">
            <strong>Ontario recorded 81 confirmed human West Nile virus cases in 2024 &mdash; 46% of all 177 locally-acquired Canadian cases that year, the highest of any province (Public Health Agency of Canada).</strong> The 2025 season was still in progress when these data were captured: a Toronto resident became Canada&rsquo;s first locally-acquired human case of 2025 on July 31, and Ontario&rsquo;s full-year 2025 total has not yet been published as of mid-2026. About 80% of infections cause no symptoms (CDC), but roughly 1 in 150 infected people develop severe neuroinvasive disease, which carries an approximately 10% case-fatality rate. WNV is highly weather-driven, so annual counts swing widely &mdash; from epidemic years (324 Ontario cases in 2002) to single digits in cool, wet years.
          </p>
        </div>
      </section>

      {/* SECTION 1: BIG STAT TILES */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold text-brand-900 mb-2">West Nile Virus in Ontario &mdash; by the Numbers</h2>
          <p className="text-base text-gray-600 mb-8">The anchor figures, each attributed to a named primary source and stamped with its latest available reporting year.</p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white p-5 shadow-lg">
              <p className="text-[11px] font-bold uppercase tracking-widest opacity-90">Ontario human cases (2024)</p>
              <p className="text-4xl sm:text-5xl font-black mt-2">81</p>
              <p className="text-xs mt-2 opacity-90">46% of Canada&rsquo;s 177 cases · PHAC</p>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-5 shadow-lg">
              <p className="text-[11px] font-bold uppercase tracking-widest opacity-90">Infections with no symptoms</p>
              <p className="text-4xl sm:text-5xl font-black mt-2">~80%</p>
              <p className="text-xs mt-2 opacity-90">4 in 5 · U.S. CDC</p>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-rose-500 to-red-700 text-white p-5 shadow-lg">
              <p className="text-[11px] font-bold uppercase tracking-widest opacity-90">Neuroinvasive fatality rate</p>
              <p className="text-4xl sm:text-5xl font-black mt-2">~10%</p>
              <p className="text-xs mt-2 opacity-90">1 in 10 severe cases · CDC</p>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white p-5 shadow-lg">
              <p className="text-[11px] font-bold uppercase tracking-widest opacity-90">Primary GTA vector</p>
              <p className="text-2xl sm:text-3xl font-black mt-2 leading-tight">Culex pipiens / restuans</p>
              <p className="text-xs mt-2 opacity-90">87% of positive pools · PLOS One</p>
            </div>
          </div>

          {/* Source-attributed detail cards for each anchor stat */}
          <div className="grid md:grid-cols-2 gap-4">
            {ANCHOR_STATS.map((s) => (
              <div key={s.label} className="rounded-xl border border-gray-200 bg-gradient-to-b from-gray-50 to-white p-5 shadow-sm">
                <div className="flex items-start justify-between gap-3 mb-1">
                  <p className="text-sm font-bold text-brand-900">{s.label}</p>
                  <span className="shrink-0 text-[10px] font-extrabold uppercase tracking-wider text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">As of {s.asOf}</span>
                </div>
                <p className="text-2xl font-black text-emerald-700 mb-2">{s.value}</p>
                <p className="text-sm text-gray-700 leading-relaxed mb-2">{s.note}</p>
                <p className="text-xs text-gray-500">Source: <a href={s.sourceUrl} target="_blank" rel="noopener" className="underline hover:text-emerald-700">{s.source}</a></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: CASES BY YEAR (CSS BAR CHART) */}
      <section className="bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50 py-14 px-4 border-y-4 border-emerald-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold text-brand-900 mb-2">Ontario human WNV cases by year</h2>
          <p className="text-base text-gray-700 mb-8 max-w-3xl">West Nile virus is highly weather-driven &mdash; hot, dry summers favour Culex breeding and virus amplification &mdash; so annual case counts swing widely between epidemic years and quiet years. The bars below are not consecutive years; they contrast the two historical epidemic peaks with the most recent full-year total and the in-progress 2025 season.</p>

          <div className="rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-extrabold text-brand-900 mb-1">Confirmed human cases in Ontario: epidemic peaks vs. recent years</h3>
            <p className="text-xs text-gray-500 mb-5">Source: PLOS One 12-year analysis (2002 &amp; 2012 epidemic years) and the Public Health Agency of Canada annual report (2024). 2025 in progress.</p>
            <div className="space-y-3">
              {ONTARIO_CASES_BY_YEAR.map((y) => (
                <div key={y.year} className="flex items-center gap-3">
                  <span className="text-xs font-bold text-gray-600 w-10 shrink-0">{y.year}</span>
                  <div className="flex-1 h-8 bg-gray-100 rounded-md overflow-hidden relative">
                    {y.cases !== null ? (
                      <>
                        <div
                          className={`h-full rounded-md ${y.era === 'epidemic' ? 'bg-gradient-to-r from-rose-500 to-red-600' : 'bg-gradient-to-r from-emerald-500 to-teal-600'}`}
                          style={{ width: `${Math.max((y.cases / maxYearCases) * 100, 6)}%` }}
                        />
                        <span className="absolute inset-0 flex items-center pl-3 text-xs font-bold text-white drop-shadow">{y.display} cases</span>
                      </>
                    ) : (
                      <div className="h-full w-full flex items-center pl-3 bg-gray-50 border border-dashed border-gray-300 rounded-md">
                        <span className="text-xs font-bold text-gray-500">{y.display} &mdash; full-year total not yet published</span>
                      </div>
                    )}
                  </div>
                  <span className="text-[10px] uppercase font-extrabold tracking-wider w-20 shrink-0 text-right text-gray-400">{y.era === 'epidemic' ? 'Epidemic' : y.era === 'recent' ? 'Recent' : 'In progress'}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-5 italic">Across the full 2002&ndash;2013 study period, Ontario recorded approximately {ONTARIO_12YR_TOTAL} confirmed human cases in total (PLOS One). A high or low single-year number is not a long-term trend &mdash; WNV activity tracks summer weather.</p>
          </div>

          {/* Canada national comparison */}
          <div className="mt-6 rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-extrabold text-brand-900 mb-1">Canada national locally-acquired human cases</h3>
            <p className="text-xs text-gray-500 mb-5">Source: Public Health Agency of Canada annual surveillance report.</p>
            <div className="space-y-3">
              {CANADA_CASES_BY_YEAR.map((y) => (
                <div key={y.year} className="flex items-center gap-3">
                  <span className="text-xs font-bold text-gray-600 w-10 shrink-0">{y.year}</span>
                  <div className="flex-1 h-8 bg-gray-100 rounded-md overflow-hidden relative">
                    <div
                      className="h-full rounded-md bg-gradient-to-r from-blue-500 to-indigo-600"
                      style={{ width: `${Math.max((y.cases / maxCanada) * 100, 8)}%` }}
                    />
                    <span className="absolute inset-0 flex items-center pl-3 text-xs font-bold text-white drop-shadow">{y.cases} cases</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-5 italic">In 2024, Ontario (81) and Quebec (an estimated 78, derived from a stated 44% share) together accounted for roughly 90% of Canada&rsquo;s 177 locally-acquired cases (PHAC). 2022 was a notably low season at 45 cases nationwide.</p>
          </div>

          <div className="mt-6 rounded-xl bg-white border-l-4 border-amber-400 p-5 text-sm text-gray-800 shadow-sm">
            <strong className="text-brand-900">Why case counts understate infections.</strong> Surveillance counts only lab-confirmed and reported cases. Because about 80% of WNV infections are asymptomatic (CDC) and mild cases often go untested, the true number of infections is many times higher than the reported case count. Treat reported totals as the visible tip of a much larger iceberg.
          </div>
        </div>
      </section>

      {/* SECTION 3: HAS WNV BEEN FOUND IN TORONTO + GTA SURVEILLANCE TABLE */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold text-brand-900 mb-2">Has West Nile virus been found in Toronto?</h2>
          <p className="text-base text-gray-700 mb-3 max-w-3xl">Yes. Toronto Public Health confirmed the city&rsquo;s first WNV-positive mosquito batches of 2025 on July 18, and a Toronto resident with no travel history became Canada&rsquo;s first locally-acquired human case of 2025, confirmed July 31 (Global News / PHAC). The table below summarizes recent per-health-unit findings across the GTA.</p>
          <p className="text-xs text-gray-500 mb-8 italic">Note: Public health authorities report by province and public health unit, not by the marketing &ldquo;GTA&rdquo; boundary. Toronto, Peel, York and Hamilton are separate health units. Figures below are first-detection or point-in-time announcements from each unit&rsquo;s press releases &mdash; not full-season cumulative totals &mdash; and should not be summed into a single &ldquo;GTA total.&rdquo;</p>

          <div className="rounded-xl border border-gray-200 overflow-hidden bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm">
                <thead className="bg-gray-100 text-gray-700">
                  <tr>
                    <th className="text-left px-3 py-2 font-extrabold">Health unit</th>
                    <th className="text-left px-3 py-2 font-extrabold">Reported finding</th>
                    <th className="text-left px-3 py-2 font-extrabold whitespace-nowrap">Year</th>
                    <th className="text-left px-3 py-2 font-extrabold hidden lg:table-cell">Source</th>
                  </tr>
                </thead>
                <tbody>
                  {GTA_SURVEILLANCE.map((r) => (
                    <tr key={r.region} className="border-t border-gray-100 align-top hover:bg-gray-50">
                      <td className="px-3 py-3 text-gray-900 font-bold whitespace-nowrap">
                        {r.region}
                        <span className={`block mt-1 text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full w-fit ${r.level === 'human' ? 'bg-rose-100 text-rose-700' : r.level === 'detected' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'}`}>{r.level === 'human' ? 'Human case' : r.level === 'detected' ? 'Mosquito detection' : 'Monitoring'}</span>
                      </td>
                      <td className="px-3 py-3 text-gray-800">
                        <span className="font-semibold text-emerald-800">{r.finding}</span>
                        <span className="block text-gray-600 mt-1">{r.detail}</span>
                      </td>
                      <td className="px-3 py-3 text-gray-600 font-bold">{r.year}</td>
                      <td className="px-3 py-3 hidden lg:table-cell"><a href={r.sourceUrl} target="_blank" rel="noopener" className="text-brand-700 hover:text-emerald-700 underline text-[11px]">{r.source}</a></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-3 italic">Sources: City of Toronto, Peel Region, York Region and City of Hamilton public health press releases (see links). Hamilton&rsquo;s 2024 case figure comes from a local-health-unit report rather than a Public Health Ontario data table.</p>

          <div className="mt-8 grid md:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-emerald-50 border-l-4 border-emerald-500 p-5">
              <h3 className="text-lg font-extrabold text-brand-900 mb-2">Toronto surveillance, in brief</h3>
              <p className="text-sm text-gray-700 leading-relaxed">Toronto Public Health runs 22 mosquito traps tested weekly from mid-June to mid-September. The first 2025 positive batches (3) were confirmed July 18, and the city&rsquo;s resident was Canada&rsquo;s first locally-acquired 2025 human case (July 31). For Toronto-specific habitat and yard guidance, see our <Link href="/toronto-mosquito-control" className="text-emerald-700 underline font-semibold">Toronto mosquito control</Link> page.</p>
            </div>
            <div className="rounded-2xl bg-emerald-50 border-l-4 border-emerald-500 p-5">
              <h3 className="text-lg font-extrabold text-brand-900 mb-2">Peel surveillance, in brief</h3>
              <p className="text-sm text-gray-700 leading-relaxed">Peel Public Health tests 33 traps weekly across Mississauga, Brampton and Caledon. The first 2025 positive pool was confirmed July 22, with 6 positive traps the week of July 27; Peel&rsquo;s first 2025 human case was a Mississauga resident (Sept 9). See our deeper local explainer, <Link href="/blog/west-nile-virus-mississauga-2026" className="text-emerald-700 underline font-semibold">West Nile virus in Mississauga 2026</Link>.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: HOW MANY WNV CASES IN ONTARIO IN 2025 */}
      <section className="bg-brand-950 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-amber-400 uppercase tracking-widest mb-3">Data timing</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">How many West Nile cases in Ontario in 2025?</h2>
          <p className="text-base text-brand-100 leading-relaxed mb-5">
            As of mid-2026, Ontario&rsquo;s full-year 2025 case total had <strong className="text-white">not yet been published</strong> by Public Health Ontario or the Public Health Agency of Canada. Any 2025 figure circulating before then should be treated as in-season or preliminary. Here is what is confirmed about the 2025 season:
          </p>
          <ul className="space-y-3 text-sm text-brand-100">
            <li className="flex gap-3"><span className="text-amber-400 font-black shrink-0">Jul 12</span><span>PHAC&rsquo;s national surveillance map showed 2 WNV-positive mosquito pools in Ontario (plus 1 in Manitoba) &mdash; an early-season baseline before the late-July rise.</span></li>
            <li className="flex gap-3"><span className="text-amber-400 font-black shrink-0">Jul 18</span><span>Toronto Public Health confirmed the city&rsquo;s first 3 WNV-positive mosquito batches of 2025.</span></li>
            <li className="flex gap-3"><span className="text-amber-400 font-black shrink-0">Jul 22</span><span>Peel Public Health confirmed its first WNV-positive mosquito pool of 2025; 6 positive traps followed the week of July 27.</span></li>
            <li className="flex gap-3"><span className="text-amber-400 font-black shrink-0">Jul 31</span><span>A Toronto resident with no travel history was confirmed as <strong className="text-white">Canada&rsquo;s first locally-acquired human WNV case of 2025</strong> (Global News / PHAC).</span></li>
            <li className="flex gap-3"><span className="text-amber-400 font-black shrink-0">Sep 9</span><span>Peel confirmed its first 2025 human case &mdash; a Mississauga resident.</span></li>
          </ul>
          <p className="text-sm text-brand-200 mt-5 italic">The most recent complete-year Ontario total remains 81 cases (2024, PHAC). We will update this tracker when Public Health Ontario and PHAC publish final 2025 figures.</p>
        </div>
      </section>

      {/* SECTION 5: WHAT MOSQUITO CARRIES WNV + POOLS */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold text-brand-900 mb-2">What mosquito carries West Nile virus in Ontario?</h2>
          <p className="text-base text-gray-700 mb-8 max-w-3xl">The <em>Culex pipiens / Culex restuans</em> complex is the primary WNV vector in Ontario and the dominant urban vector in the GTA. In a 12-year PLOS One analysis (2002&ndash;2013), 1,892 of 2,175 WNV-positive mosquito pools in Ontario &mdash; 87% &mdash; were the Culex pipiens/restuans complex.</p>

          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            <div className="rounded-2xl border-2 border-gray-200 bg-gradient-to-b from-white to-gray-50 p-6 shadow-sm">
              <h3 className="text-xl font-extrabold text-brand-900 mb-1">Culex pipiens / Culex restuans</h3>
              <p className="text-xs text-gray-500 italic mb-4">The northern house mosquito complex &mdash; primary WNV vector</p>
              <dl className="space-y-2.5 text-sm">
                <div><dt className="font-bold text-gray-700 inline">Breeds in: </dt><dd className="text-gray-700 inline">Stagnant, organically-rich standing water &mdash; storm-sewer catch basins, clogged gutters, unused pools, bird baths, buckets, tarps and any container holding water for a week or more.</dd></div>
                <div><dt className="font-bold text-gray-700 inline">Bites: </dt><dd className="text-gray-700 inline">Most actively at dusk and dawn.</dd></div>
                <div><dt className="font-bold text-gray-700 inline">Amplification: </dt><dd className="text-gray-700 inline">The virus cycles between Culex mosquitoes and birds through the summer; human cases concentrate after that amplification peaks &mdash; typically mid-July onward.</dd></div>
                <div><dt className="font-bold text-gray-700 inline">Share of positive pools: </dt><dd className="text-gray-700 inline">87% of Ontario&rsquo;s 2,175 WNV-positive pools, 2002&ndash;2013 (PLOS One).</dd></div>
              </dl>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white p-6 shadow-lg flex flex-col justify-center">
              <p className="text-xs font-extrabold uppercase tracking-widest opacity-90 mb-2">The headline number</p>
              <p className="text-6xl font-black mb-2">87%</p>
              <p className="text-sm opacity-95 leading-relaxed">of Ontario&rsquo;s WNV-positive mosquito pools (1,892 of 2,175) were the <em>Culex pipiens/restuans</em> complex across 2002&ndash;2013. Source: PLOS One 12-year analysis.</p>
            </div>
          </div>

          {/* Pools table */}
          <div className="rounded-xl border border-gray-200 overflow-hidden bg-white shadow-sm">
            <table className="w-full text-xs sm:text-sm">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="text-left px-3 py-2 font-extrabold">Ontario WNV-positive mosquito pools</th>
                  <th className="text-left px-3 py-2 font-extrabold whitespace-nowrap">Figure</th>
                  <th className="text-left px-3 py-2 font-extrabold hidden md:table-cell">Source</th>
                </tr>
              </thead>
              <tbody>
                {ONTARIO_POOLS.map((p) => (
                  <tr key={p.label} className="border-t border-gray-100 align-top hover:bg-gray-50">
                    <td className="px-3 py-3 text-gray-800">
                      <span className="font-semibold">{p.label}</span>
                      <span className="block text-gray-600 mt-1">{p.note}</span>
                    </td>
                    <td className="px-3 py-3 font-black text-emerald-700 whitespace-nowrap">{p.value}</td>
                    <td className="px-3 py-3 hidden md:table-cell"><a href={p.sourceUrl} target="_blank" rel="noopener" className="text-brand-700 hover:text-emerald-700 underline text-[11px]">{p.source}</a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3 italic">Because Culex breeds in standing water close to homes, removing that water &mdash; and treating the shaded resting areas where adults shelter by day &mdash; is the core of yard-level WNV risk reduction. See the <Link href="/gta-mosquito-pressure-map" className="text-emerald-700 underline font-semibold">GTA mosquito pressure map</Link> for neighbourhood-level context.</p>
        </div>
      </section>

      {/* SECTION 6: IS WNV DEADLY — SEVERITY BREAKDOWN */}
      <section className="bg-rose-50 py-14 px-4 border-y-4 border-rose-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-brand-900 mb-2">Is West Nile virus deadly?</h2>
          <p className="text-base text-gray-700 mb-8 max-w-3xl">It can be, but serious illness and death are rare. The U.S. CDC&rsquo;s clinical ratios &mdash; the standard reference used in Canadian public-health communications &mdash; describe how a typical group of infected people breaks down.</p>

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            <div className="rounded-2xl bg-white p-6 shadow-sm border-l-4 border-emerald-500">
              <p className="text-4xl font-black text-emerald-600">~80%</p>
              <p className="text-sm font-bold text-brand-900 mt-1">No symptoms</p>
              <p className="text-xs text-gray-600 mt-2">About 4 in 5 infected people have no symptoms at all (CDC).</p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm border-l-4 border-amber-500">
              <p className="text-4xl font-black text-amber-600">~1 in 5</p>
              <p className="text-sm font-bold text-brand-900 mt-1">West Nile fever</p>
              <p className="text-xs text-gray-600 mt-2">Develop a febrile illness &mdash; fever, headache, body aches, sometimes a rash (CDC).</p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm border-l-4 border-rose-600">
              <p className="text-4xl font-black text-rose-600">~1 in 150</p>
              <p className="text-sm font-bold text-brand-900 mt-1">Neuroinvasive disease</p>
              <p className="text-xs text-gray-600 mt-2">Severe encephalitis or meningitis; about 10% of these cases are fatal (CDC).</p>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-md border-2 border-gray-200">
            <h3 className="text-lg font-extrabold text-brand-900 mb-1">2024 Canada reported-case severity breakdown</h3>
            <p className="text-xs text-gray-500 mb-5">Source: Public Health Agency of Canada annual report (n = 177 reported cases, 2024). Percentages are of reported cases, not of all infections.</p>
            <div className="space-y-3">
              {CANADA_SEVERITY_2024.map((s) => (
                <div key={s.label}>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="font-semibold text-gray-800">{s.label}</span>
                    <span className="font-bold text-gray-700">{s.count} <span className="text-gray-400 font-normal">({s.pct}%)</span></span>
                  </div>
                  <div className="h-5 bg-gray-100 rounded-md overflow-hidden">
                    <div
                      className={`h-full rounded-md ${s.label.startsWith('Neuro') ? 'bg-gradient-to-r from-rose-500 to-red-600' : s.label.startsWith('Non') ? 'bg-gradient-to-r from-amber-400 to-orange-500' : 'bg-gradient-to-r from-gray-300 to-gray-400'}`}
                      style={{ width: `${s.pct}%` }}
                    />
                  </div>
                  <p className="text-[11px] text-gray-500 mt-1 italic">{s.note}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-5 italic">Canada recorded 1 death among the 177 reported cases in 2024 (under 1% of all reported cases). The high neurological share (60%) partly reflects that severe cases are far more likely to be tested and reported &mdash; mild and asymptomatic infections are systematically undercounted.</p>
          </div>

          <div className="mt-6 rounded-2xl bg-rose-700 text-white p-6 shadow-lg">
            <h3 className="text-lg font-extrabold mb-2">⚠️ When to seek medical care</h3>
            <p className="text-sm mb-3">Most infected people never know they had WNV. But severe neuroinvasive disease is a medical emergency. During mosquito season, seek care promptly if you develop:</p>
            <ul className="space-y-1.5 text-sm">
              <li>• High fever with severe headache and a stiff neck</li>
              <li>• Confusion, disorientation, or sudden cognitive changes</li>
              <li>• Muscle weakness, tremors, or difficulty walking</li>
              <li>• Vision changes, seizures, or loss of consciousness</li>
            </ul>
            <p className="text-xs mt-3 opacity-90 italic">Adults over 60 and people with weakened immune systems are at higher risk of severe disease. Contact your family doctor, Telehealth Ontario (1-866-797-0000), or seek emergency care. There is no specific antiviral treatment &mdash; care is supportive, which makes early recognition important.</p>
          </div>
        </div>
      </section>

      {/* SECTION 7: WHEN IS WNV SEASON */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-brand-900 mb-2">When is West Nile virus season in Ontario?</h2>
          <p className="text-base text-gray-700 mb-6">WNV risk runs through Ontario&rsquo;s warm months, but human-case risk is concentrated in <strong>mid-July through September</strong> &mdash; after Culex pipiens/restuans populations have spent the summer amplifying the virus in the bird-mosquito cycle. Public health units including Toronto and Peel run mosquito-trap surveillance weekly from mid-June to mid-September.</p>

          <div className="rounded-2xl border-2 border-gray-200 bg-gradient-to-b from-gray-50 to-white p-6 shadow-sm">
            <h3 className="text-lg font-extrabold text-brand-900 mb-4">Typical Ontario WNV season timeline</h3>
            <ol className="space-y-4 text-sm text-gray-700">
              <li className="flex gap-3">
                <span className="shrink-0 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-xs h-fit">May&ndash;Jun</span>
                <div><strong className="text-brand-900">Build-up.</strong> Culex mosquitoes emerge and begin breeding in standing water. Public health units start weekly trap surveillance around mid-June. Human risk is low but this is the window to eliminate breeding sites.</div>
              </li>
              <li className="flex gap-3">
                <span className="shrink-0 px-3 py-1 rounded-full bg-amber-100 text-amber-800 font-extrabold text-xs h-fit">Jul</span>
                <div><strong className="text-brand-900">First positives.</strong> Positive mosquito pools typically appear in mid-July. In 2025, Toronto&rsquo;s first positive batches were July 18 and Canada&rsquo;s first human case was July 31 (Global News / PHAC).</div>
              </li>
              <li className="flex gap-3">
                <span className="shrink-0 px-3 py-1 rounded-full bg-rose-100 text-rose-800 font-extrabold text-xs h-fit">Aug&ndash;Sep</span>
                <div><strong className="text-brand-900">Peak human risk.</strong> Amplification peaks and most human cases are reported. Peel&rsquo;s first 2025 human case (a Mississauga resident) was September 9. Hot, dry summers raise risk further.</div>
              </li>
              <li className="flex gap-3">
                <span className="shrink-0 px-3 py-1 rounded-full bg-blue-100 text-blue-800 font-extrabold text-xs h-fit">Oct+</span>
                <div><strong className="text-brand-900">Wind-down.</strong> Cooler temperatures end mosquito activity and the season closes. Final case totals are compiled and published by PHO/PHAC the following year.</div>
              </li>
            </ol>
            <p className="text-xs text-gray-500 mt-5 italic">For BuzzSkito&rsquo;s service-season context, our mosquito barrier-spray program runs May through September &mdash; deliberately spanning the full Culex risk window.</p>
          </div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="bg-gradient-to-br from-emerald-900 via-brand-900 to-brand-950 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="text-2xl sm:text-3xl font-extrabold leading-snug">
            &ldquo;Most people who catch West Nile virus never feel a thing &mdash; but the one mosquito that carries it, Culex, breeds in the stagnant water sitting in your own backyard. Tip out the standing water, treat the shady spots where they rest, and you&rsquo;ve cut your family&rsquo;s risk before the season even peaks.&rdquo;
          </blockquote>
          <p className="mt-6 text-sm text-emerald-300 font-bold uppercase tracking-widest">Alex &middot; BuzzSkito Mosquito &amp; Tick Control</p>
        </div>
      </section>

      {/* CITE THIS PAGE */}
      <section className="bg-amber-50 border-y-4 border-amber-300 py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl bg-white border-2 border-amber-400 p-6 sm:p-8 shadow-lg">
            <p className="text-3xl mb-2">📊</p>
            <h2 className="text-2xl font-extrabold text-brand-900 mb-2">Cite this page</h2>
            <p className="text-base text-gray-700 mb-5">Writing about West Nile virus in Ontario or the GTA? You are free to cite or embed any figure on this page, with a link back to this page as the source.</p>

            <div className="rounded-xl bg-gray-900 text-gray-100 p-4 font-mono text-xs sm:text-sm leading-relaxed mb-4 break-words">
              {citation}
            </div>

            <div className="rounded-lg bg-emerald-50 border-l-4 border-emerald-500 p-4">
              <p className="text-sm text-emerald-900"><strong>Free to cite or embed with a link back to this page.</strong> Data is released under a Creative Commons CC BY 4.0 licence. We ask only that you attribute &ldquo;BuzzSkito&rdquo; and link to <span className="font-mono">buzzskito.ca{SLUG}</span>. Underlying figures belong to their original sources (PHAC, Public Health Ontario, the U.S. CDC, PLOS One), which are linked inline throughout.</p>
            </div>

            <p className="text-xs text-gray-500 mt-4">Journalists and researchers: for clarification on any figure, methodology, or a fresh comment, reach BuzzSkito at <a href={`mailto:${BUSINESS.email}`} className="underline">{BUSINESS.email}</a> or <a href={BUSINESS.phoneHref} className="underline">{BUSINESS.phone}</a>.</p>
          </div>
        </div>
      </section>

      {/* SOURCES & REFERENCES */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-2">Sources &amp; References</h2>
          <p className="text-sm text-gray-600 mb-6">All data on this page is aggregated from publicly available government and peer-reviewed sources. Direct links provided for transparency and verification. The most recent full-year official totals are for 2024; 2025/2026 figures are in-season or preliminary.</p>

          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <a href="https://health-infobase.canada.ca/zoonoses/mosquito/annual-report.html" target="_blank" rel="noopener" className="rounded-xl bg-white p-4 border border-gray-200 hover:border-emerald-500 transition">
              <p className="font-extrabold text-brand-900">Public Health Agency of Canada</p>
              <p className="text-xs text-gray-600 mt-0.5">Annual WNV &amp; mosquito-borne disease surveillance report (2024 data).</p>
            </a>
            <a href="https://www.publichealthontario.ca/en/data-and-analysis/infectious-disease/west-nile-virus" target="_blank" rel="noopener" className="rounded-xl bg-white p-4 border border-gray-200 hover:border-emerald-500 transition">
              <p className="font-extrabold text-brand-900">Public Health Ontario</p>
              <p className="text-xs text-gray-600 mt-0.5">Ontario Vector-Borne Disease Tool (West Nile virus).</p>
            </a>
            <a href="https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0183568" target="_blank" rel="noopener" className="rounded-xl bg-white p-4 border border-gray-200 hover:border-emerald-500 transition">
              <p className="font-extrabold text-brand-900">PLOS One</p>
              <p className="text-xs text-gray-600 mt-0.5">West Nile virus in Ontario: a twelve-year analysis of human cases, mosquito surveillance &amp; climate data.</p>
            </a>
            <a href="https://www.cdc.gov/west-nile-virus/hcp/clinical-signs/index.html" target="_blank" rel="noopener" className="rounded-xl bg-white p-4 border border-gray-200 hover:border-emerald-500 transition">
              <p className="font-extrabold text-brand-900">U.S. CDC — Clinical signs</p>
              <p className="text-xs text-gray-600 mt-0.5">Asymptomatic / febrile / neuroinvasive ratios.</p>
            </a>
            <a href="https://www.cdc.gov/west-nile-virus/symptoms-diagnosis-treatment/index.html" target="_blank" rel="noopener" className="rounded-xl bg-white p-4 border border-gray-200 hover:border-emerald-500 transition">
              <p className="font-extrabold text-brand-900">U.S. CDC — Symptoms &amp; treatment</p>
              <p className="text-xs text-gray-600 mt-0.5">Case-fatality of neuroinvasive disease (~10%).</p>
            </a>
            <a href="https://globalnews.ca/news/11314100/west-nile-virus-canada-toronto-case-phac/" target="_blank" rel="noopener" className="rounded-xl bg-white p-4 border border-gray-200 hover:border-emerald-500 transition">
              <p className="font-extrabold text-brand-900">Global News / PHAC</p>
              <p className="text-xs text-gray-600 mt-0.5">Canada&rsquo;s first human WNV case of 2025 (Toronto, July 31).</p>
            </a>
            <a href="https://www.toronto.ca/news/toronto-public-health-confirms-first-mosquitoes-to-test-positive-for-west-nile-virus-in-2025/" target="_blank" rel="noopener" className="rounded-xl bg-white p-4 border border-gray-200 hover:border-emerald-500 transition">
              <p className="font-extrabold text-brand-900">City of Toronto — Toronto Public Health</p>
              <p className="text-xs text-gray-600 mt-0.5">First WNV-positive mosquitoes of 2025 (3 batches, July 18).</p>
            </a>
            <a href="https://peelregion.ca/press-releases/peel-public-health-confirms-first-west-nile-virus-positive-mosquitoes-2025" target="_blank" rel="noopener" className="rounded-xl bg-white p-4 border border-gray-200 hover:border-emerald-500 transition">
              <p className="font-extrabold text-brand-900">Peel Region — Peel Public Health</p>
              <p className="text-xs text-gray-600 mt-0.5">First WNV-positive mosquitoes &amp; first human case, 2025.</p>
            </a>
            <a href="https://www.york.ca/newsroom/media-release/york-region-reports-first-human-case-west-nile-virus-3" target="_blank" rel="noopener" className="rounded-xl bg-white p-4 border border-gray-200 hover:border-emerald-500 transition">
              <p className="font-extrabold text-brand-900">York Region — Public Health</p>
              <p className="text-xs text-gray-600 mt-0.5">First human case of West Nile virus (City of Vaughan).</p>
            </a>
            <a href="https://www.hamilton.ca/people-programs/public-health/environmental-health-hazards/animal-insect-related-diseases/west-nile" target="_blank" rel="noopener" className="rounded-xl bg-white p-4 border border-gray-200 hover:border-emerald-500 transition">
              <p className="font-extrabold text-brand-900">City of Hamilton — Public Health</p>
              <p className="text-xs text-gray-600 mt-0.5">West Nile virus information &amp; local case reporting.</p>
            </a>
            <a href="https://ncceh.ca/resources/evidence-reviews/impacts-canadas-changing-climate-west-nile-virus-vectors" target="_blank" rel="noopener" className="rounded-xl bg-white p-4 border border-gray-200 hover:border-emerald-500 transition">
              <p className="font-extrabold text-brand-900">NCCEH</p>
              <p className="text-xs text-gray-600 mt-0.5">Impacts of Canada&rsquo;s changing climate on West Nile virus vectors.</p>
            </a>
          </div>

          <div className="mt-8 rounded-xl bg-white p-5 border border-gray-200">
            <p className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Data notes &amp; caveats</p>
            <ul className="space-y-1.5 text-xs text-gray-700">
              <li>• <strong>Data timing:</strong> the most recent full-year official figures are 2024 (Ontario 81; Canada 177). Ontario&rsquo;s final 2025 total was not yet published by PHO/PHAC as of mid-2026. Treat 2025/2026 figures as in-season / preliminary.</li>
              <li>• <strong>Reporting geography:</strong> PHO/PHAC report by province and public health unit, not by the marketing &ldquo;GTA&rdquo; boundary. Per-unit figures should not be summed into a single GTA total without noting reporting-period differences.</li>
              <li>• <strong>Approximate figures:</strong> the Quebec 2024 figure (~78) is derived from a stated 44% share of 177. Hamilton&rsquo;s 7 cases (2024) comes from a local-health-unit report, not a PHO table. GTA pool/case figures are first-detection or point-in-time announcements, not full-season cumulative totals.</li>
              <li>• <strong>CDC ratios:</strong> the 80% asymptomatic, 1-in-5 febrile, 1-in-150 neuroinvasive, and ~10% neuroinvasive case-fatality figures are U.S. surveillance-derived but are the standard reference used in Canadian public-health communications, including by Ontario health units.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-3">Cut your yard&rsquo;s West Nile risk this season</h2>
          <p className="text-base text-brand-100 mb-8 max-w-2xl mx-auto leading-relaxed">The mosquito that carries West Nile virus &mdash; Culex &mdash; breeds in standing water on your own property and rests in shady vegetation by day. BuzzSkito&rsquo;s Health Canada-approved barrier spray targets both, while we help you find and eliminate the breeding sites Culex needs. It is risk reduction, not a medical treatment &mdash; but it is the single most practical thing you can do at the yard level.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/free-yard-assessment" className="inline-block bg-amber-400 hover:bg-amber-300 text-brand-950 font-extrabold text-base px-8 py-4 rounded-full shadow-lg transition-all">
              Get a Free Quote →
            </Link>
            <a href={BUSINESS.phoneHref} className="inline-block bg-white/10 hover:bg-white/20 border border-white/30 text-white font-extrabold text-base px-8 py-4 rounded-full transition-all">
              Call {BUSINESS.phone}
            </a>
          </div>
          <p className="text-xs text-brand-300 mt-5">BuzzSkito Mosquito &amp; Tick Control &middot; Mississauga, ON &middot; serving 19+ GTA cities. Health Canada-approved formulas, safe for kids and pets after drying.</p>
          <p className="mt-6 text-xs italic text-brand-300 max-w-2xl mx-auto">
            This page provides educational information aggregated from public sources. It is not medical advice or diagnostic. For suspected symptoms, contact your family doctor, Telehealth Ontario (1-866-797-0000), or seek emergency care.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">Frequently asked questions</h2>
          <div className="space-y-3">
            {FAQS.map((f, i) => (
              <details key={i} className="group rounded-xl border border-gray-200 bg-gray-50 p-4">
                <summary className="cursor-pointer font-bold text-brand-900 list-none flex justify-between items-start gap-3">
                  <span>{f.question}</span>
                  <span className="text-brand-700 group-open:rotate-180 transition shrink-0">▾</span>
                </summary>
                <p className="text-sm text-gray-700 mt-3 leading-relaxed">{f.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED RESOURCES */}
      <section className="bg-gray-50 py-12 px-4 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-2">Related resources</h2>
          <p className="text-sm text-gray-600 mb-6">More BuzzSkito data hubs and explainers on mosquito-borne and tick-borne disease in Ontario and the GTA.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/blog/west-nile-virus-ontario-2026" className="rounded-xl bg-white p-5 border border-gray-200 hover:border-emerald-500 transition block">
              <p className="font-extrabold text-brand-900">West Nile Virus in Ontario 2026 (explainer)</p>
              <p className="text-xs text-gray-600 mt-1">The plain-language guide: transmission, symptoms, and family protection.</p>
            </Link>
            <Link href="/blog/west-nile-virus-mosquito-risk-ontario" className="rounded-xl bg-white p-5 border border-gray-200 hover:border-emerald-500 transition block">
              <p className="font-extrabold text-brand-900">West Nile Virus &amp; Mosquito Risk in Ontario</p>
              <p className="text-xs text-gray-600 mt-1">Risk by city, transmission, and how barrier spray fits in.</p>
            </Link>
            <Link href="/gta-mosquito-pressure-map" className="rounded-xl bg-white p-5 border border-gray-200 hover:border-emerald-500 transition block">
              <p className="font-extrabold text-brand-900">GTA Mosquito Pressure Map</p>
              <p className="text-xs text-gray-600 mt-1">Neighbourhood-level mosquito pressure across the Greater Toronto Area.</p>
            </Link>
            <Link href="/ticks-in-ontario-statistics" className="rounded-xl bg-white p-5 border border-gray-200 hover:border-emerald-500 transition block">
              <p className="font-extrabold text-brand-900">Ticks in Ontario — Statistics Hub</p>
              <p className="text-xs text-gray-600 mt-1">Tick populations, Lyme-disease vectors, and surveillance data for Ontario.</p>
            </Link>
            <Link href="/deadliest-animal-in-canada" className="rounded-xl bg-white p-5 border border-gray-200 hover:border-emerald-500 transition block">
              <p className="font-extrabold text-brand-900">The Deadliest Animal in Canada</p>
              <p className="text-xs text-gray-600 mt-1">Why the mosquito ranks among the most dangerous animals to humans &mdash; the data.</p>
            </Link>
            <Link href="/mosquito-control" className="rounded-xl bg-white p-5 border border-gray-200 hover:border-emerald-500 transition block">
              <p className="font-extrabold text-brand-900">Professional Mosquito Control</p>
              <p className="text-xs text-gray-600 mt-1">Health Canada-approved barrier spray for GTA yards &mdash; plans &amp; pricing.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
