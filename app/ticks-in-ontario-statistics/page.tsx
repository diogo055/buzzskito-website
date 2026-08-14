import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, breadcrumbSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'

const SLUG = '/ticks-in-ontario-statistics'

// ── ANCHOR STATISTICS ─────────────────────────────────────────────────────────
// Every figure is sourced. Sources cited inline in the JSX and aggregated in
// the SOURCES array at the bottom of this file (mirrors the source captions).
const ANCHOR_STATS = [
  {
    label: 'Blacklegged ticks infected with Lyme bacteria in established risk areas',
    value: '~20%',
    detail: 'Over 20% in Toronto & NW Ontario',
    source: 'Northwestern Health Unit / City of Toronto (2023)',
    sourceUrl: 'https://www.nwhu.on.ca/for-professionals/for-health-care-professionals/tick-borne-disease-information-for-health-care-professionals/',
    gradient: 'from-rose-500 to-red-700',
  },
  {
    label: 'Human Lyme disease cases in Ontario (2024)',
    value: '2,369',
    detail: '▲ 27% over 2023 — most of any province',
    source: 'Public Health Agency of Canada',
    sourceUrl: 'https://health-infobase.canada.ca/zoonoses/ticks/annual-report.html',
    gradient: 'from-orange-500 to-amber-600',
  },
  {
    label: 'Tick species recorded in Ontario',
    value: '43',
    detail: '12 established · only 1 spreads Lyme',
    source: 'Public Health Ontario',
    sourceUrl: 'https://www.publichealthontario.ca/-/media/Documents/T/2023/tick-species-ontario-lyme.pdf',
    gradient: 'from-amber-500 to-yellow-600',
  },
  {
    label: 'Temperature at which ticks become active',
    value: '4°C',
    detail: 'Active any day above freezing',
    source: 'Public Health Ontario',
    sourceUrl: '',
    gradient: 'from-emerald-600 to-teal-700',
  },
] as const

// ── CANADA-WIDE LYME CASES BY YEAR ────────────────────────────────────────────
// Source: Public Health Agency of Canada — Lyme disease & tick-borne diseases
// surveillance annual report (Health Infobase, updated Jan 16, 2026).
const CANADA_LYME = [
  { year: '2020', cases: 1617, note: 'Lowest recent year (pandemic-era underreporting suspected)' },
  { year: '2021', cases: 3147, note: 'Up 94.6% YoY — largest annual increase on record at the time' },
  { year: '2022', cases: 2525, note: 'PHAC preliminary national total' },
  { year: '2023', cases: 4785, note: 'National total' },
  { year: '2024', cases: 5809, note: 'Latest year — annual growth over 20%' },
] as const

// ── ONTARIO LYME CASES BY YEAR ────────────────────────────────────────────────
// Source: Public Health Agency of Canada (Health Infobase). Ontario consistently
// reports the most Lyme cases of any province.
const ONTARIO_LYME = [
  { year: '2022', cases: 1478, note: '~58% of national cases that year' },
  { year: '2023', cases: 1799, note: 'Confirmed cases — incidence 11.7 per 100,000' },
  { year: '2024', cases: 2369, note: 'Up 27% vs 2023 — most of any province' },
] as const

// ── ONTARIO TICK INFECTION PREVALENCE (Borrelia burgdorferi) ──────────────────
// Source: PHO passive surveillance (2008, 2012); Northwestern Health Unit drag
// sampling (2023). Province shifted from a single provincial rate to mapping
// established risk areas, so 2023 is reported for endemic areas only.
const INFECTION_PREVALENCE = [
  { period: '2008', value: 8.4, label: '8.4%', note: 'PHO passive surveillance, province-wide' },
  { period: '2012', value: 19.1, label: '19.1%', note: 'PHO passive surveillance — more than doubled in 4 years' },
  { period: '2023', value: 20, label: '>20%', note: 'Established/endemic risk areas (NW Ontario, Toronto)' },
] as const

// ── TICK SPECIES IN ONTARIO ───────────────────────────────────────────────────
// Submission shares from PHO passive surveillance (what people submit, not true
// population proportions). Only the blacklegged tick transmits Lyme.
interface TickSpecies {
  common: string
  scientific: string
  share: string
  sharePct: number | null
  lyme: boolean
  status: 'most common' | 'second' | 'rare'
  carries: string
  note: string
}

const TICK_SPECIES: TickSpecies[] = [
  {
    common: 'Blacklegged tick',
    scientific: 'Ixodes scapularis',
    share: '~55% of submissions',
    sharePct: 55,
    lyme: true,
    status: 'most common',
    carries: 'Lyme disease, anaplasmosis, babesiosis, Powassan virus',
    note: 'The PRIMARY Lyme disease vector and the most commonly encountered tick in Ontario.',
  },
  {
    common: 'American dog tick',
    scientific: 'Dermacentor variabilis',
    share: '~36% of submissions',
    sharePct: 36,
    lyme: false,
    status: 'second',
    carries: 'Tularemia, Rocky Mountain spotted fever (both rare in Ontario)',
    note: 'Second most commonly submitted tick. Does NOT carry Lyme disease.',
  },
  {
    common: 'Lone Star tick',
    scientific: 'Amblyomma americanum',
    share: 'Not established (rare)',
    sharePct: null,
    lyme: false,
    status: 'rare',
    carries: 'Ehrlichiosis, tularemia; linked to alpha-gal red-meat allergy',
    note: 'Occasional, carried by migratory birds. Found in southern pockets (London, Waterloo, Wellington).',
  },
  {
    common: 'Brown dog tick',
    scientific: 'Rhipicephalus sanguineus',
    share: 'Not established (rare)',
    sharePct: null,
    lyme: false,
    status: 'rare',
    carries: 'Canine diseases (rarely bites humans)',
    note: 'Indoor/kennel tick, usually travel-related.',
  },
]

// ── TICK ACTIVITY SEASON (ONTARIO) ────────────────────────────────────────────
// Source: Public Health Ontario — Let's Talk About Ticks.
const TICK_SEASON = [
  {
    window: 'May–July',
    headline: 'Peak human-biting season',
    detail: 'Nymph blacklegged ticks emerge — tiny (about poppy-seed size) and responsible for most Lyme transmission.',
    accent: 'bg-rose-600',
  },
  {
    window: 'September–October',
    headline: 'Second peak',
    detail: 'Adult blacklegged ticks are most active.',
    accent: 'bg-orange-500',
  },
  {
    window: 'Above 4°C',
    headline: 'Year-round risk',
    detail: 'Ticks are active any day above freezing, including mild winter days.',
    accent: 'bg-emerald-600',
  },
] as const

// ── SOURCES ───────────────────────────────────────────────────────────────────
interface SourceRef {
  name: string
  publisher: string
  url: string
  supports: string
}

const SOURCES: SourceRef[] = [
  {
    name: 'Annual report: Lyme disease and other tick-borne diseases surveillance in Canada (Health Infobase)',
    publisher: 'Public Health Agency of Canada',
    url: 'https://health-infobase.canada.ca/zoonoses/ticks/annual-report.html',
    supports: 'Canada 2022–2024 national totals (2,525 / 4,785 / 5,809); Ontario 2,369 cases in 2024 (41% of national) and +27% vs 2023; national incidence 6.5 → 11.9 → 14.1 per 100,000',
  },
  {
    name: 'Lyme disease surveillance in Canada: Annual edition 2021',
    publisher: 'Public Health Agency of Canada',
    url: 'https://www.canada.ca/en/public-health/services/publications/diseases-conditions/lyme-disease-surveillance-canada-annual-edition-2021.html',
    supports: '2020 total 1,617 (1,204 confirmed + 413 probable); 2021 total 3,147 (2,595 + 552), a 94.6% year-over-year increase',
  },
  {
    name: 'Ontario Vector-Borne Disease Tool (blacklegged tick established risk areas)',
    publisher: 'Public Health Ontario',
    url: 'https://www.publichealthontario.ca/en/data-and-analysis/infectious-disease/vbd-tool',
    supports: 'Established risk-area mapping; 13 newly identified risk areas across 6 public health units in the 2025 map (MSL 2, NIA 1, PEL 2, REN 3, SEH 3, WAT 2)',
  },
  {
    name: 'Public Health Ontario Launches New Ontario Vector-Borne Disease Tool (June 2025)',
    publisher: 'Public Health Ontario',
    url: 'https://www.publichealthontario.ca/en/About/News/2025/06/VBD-Tool-Launch',
    supports: 'Launch of the current risk-area mapping tool and its weekly in-season update cadence',
  },
  {
    name: 'The Ticks of Ontario Synthesis (2nd Edition) — PDF',
    publisher: 'Public Health Ontario',
    url: 'https://www.publichealthontario.ca/-/media/Documents/T/2023/tick-species-ontario-lyme.pdf',
    supports: '43 tick species recorded in Ontario: 12 established, 17 adventive, 14 travel-related',
  },
  {
    name: "Let's Talk About Ticks",
    publisher: 'Public Health Ontario',
    url: 'https://www.publichealthontario.ca/en/About/News/2022/Tick-Season',
    supports: 'Approximately 70% of Ontario Lyme cases reported in June, July and August; ticks can be found any time of year when the temperature is above freezing',
  },
  {
    name: 'Tick-borne Disease Information for Health Care Professionals',
    publisher: 'Northwestern Health Unit',
    url: 'https://www.nwhu.on.ca/for-professionals/for-health-care-professionals/tick-borne-disease-information-for-health-care-professionals/',
    supports: '"More than 20% of black-legged ticks in our area are positive for Borrelia burgdorferi" (fall 2023 tick-dragging); the >20% threshold as the post-exposure prophylaxis criterion',
  },
  {
    name: 'Nelder MP, Russell C, Lindsay LR, et al. "Population-Based Passive Tick Surveillance and Detection of Expanding Foci of Blacklegged Ticks Ixodes scapularis and the Lyme Disease Agent Borrelia burgdorferi in Ontario, Canada." PLoS One. 2014;9(8):e105358',
    publisher: 'PLoS One (peer-reviewed)',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4149368/',
    supports: 'B. burgdorferi prevalence in submitted I. scapularis rising from 8.4% (2008) to 19.1% (2012); species submission shares — I. scapularis 54.6%, D. variabilis 35.6% of 14,369 ticks',
  },
  {
    name: 'Important Change to Passive Tick Surveillance in Ontario (health-professional advisory)',
    publisher: 'Public Health Sudbury & Districts',
    url: 'https://www.phsd.ca/professionals/health-professionals/advisory-alerts-health-care-professionals/important-change-to-passive-tick-surveillance-in-ontario/',
    supports: 'The National Microbiology Laboratory stopped accepting blacklegged ticks for Borrelia burgdorferi testing as of September 20, 2021',
  },
  {
    name: 'eTick.ca — public tick identification and population monitoring platform',
    publisher: 'eTick / Bishop’s University (NCCEH overview)',
    url: 'https://ncceh.ca/resources/blog/etickca-public-platform-image-based-identification-and-population-monitoring-ticks',
    supports: 'Free public photo-based tick identification now used in place of specimen submission',
  },
]

const FAQS = [
  {
    question: 'What percentage of ticks carry Lyme disease in Ontario?',
    answer: 'In Ontario’s established (endemic) blacklegged tick risk areas, approximately 20% of blacklegged ticks carry the Lyme disease bacterium Borrelia burgdorferi — and the rate exceeds 20% in Toronto and Northwestern Ontario, according to the Northwestern Health Unit’s 2023 drag sampling and City of Toronto Public Health. Province-wide infection prevalence rose from 8.4% in 2008 to 19.1% in 2012 (Public Health Ontario passive surveillance). The 20% threshold is also the clinical cutoff used to determine eligibility for post-exposure prophylaxis. Outside established risk areas, infection prevalence is near zero — so the figure should always be framed as applying to risk areas, not the whole province.',
  },
  {
    question: 'Which ticks in Ontario carry Lyme disease?',
    answer: 'Only one tick species in Ontario transmits Lyme disease: the blacklegged tick (Ixodes scapularis), sometimes called the deer tick. It accounts for roughly 55% of ticks submitted to Public Health Ontario’s passive surveillance program and also carries anaplasmosis, babesiosis and Powassan virus. The American dog tick (Dermacentor variabilis), Ontario’s second most commonly submitted tick at about 36% of submissions, does NOT carry Lyme disease, though it can rarely transmit tularemia and Rocky Mountain spotted fever.',
  },
  {
    question: 'How many tick species are in Ontario?',
    answer: '43 tick species have been recorded in Ontario, according to Public Health Ontario’s The Ticks of Ontario Synthesis (2nd Edition). Of those, 12 are established, 17 are adventive (carried in by migratory birds and wildlife) and 14 are travel-related. Only the blacklegged tick transmits Lyme disease, and the blacklegged tick and American dog tick are the two species you are most likely to actually encounter.',
  },
  {
    question: 'When is tick season in Ontario?',
    answer: 'Blacklegged ticks can be active any day the temperature rises above 4°C, including mild winter spells, according to Public Health Ontario. The peak human-biting season is May through July, when tiny poppy-seed-sized nymphs emerge and cause most Lyme disease transmission. A second peak occurs in September and October when adult blacklegged ticks are most active. In practice, Ontario residents should check for ticks after any outdoor activity from early spring through late fall.',
  },
  {
    question: 'Are ticks spreading in Ontario?',
    answer: 'Yes. Blacklegged tick established risk areas have expanded steadily since 2015 — from isolated Great Lakes shoreline pockets to most of southern Ontario plus pockets in the northwest, according to Public Health Ontario’s Vector-Borne Disease Tool. In 2025 alone, 13 new risk areas were added across 6 of Ontario’s 34 public health units. Human Lyme cases reflect the same trend: Ontario reported 2,369 cases in 2024, up 27% over 2023, and the most of any province (PHAC).',
  },
  {
    question: 'Where are the worst areas for ticks in Ontario?',
    answer: 'The highest blacklegged tick infection rates are reported in Toronto and Northwestern Ontario, where more than 20% of ticks test positive for the Lyme bacterium (Northwestern Health Unit, City of Toronto). Established risk areas now cover most of southern Ontario, with notable concentrations along the Great Lakes shorelines, the Oak Ridges Moraine, the Niagara Escarpment, and eastern Ontario. For a detailed neighbourhood-level breakdown of the worst tick areas, see our guide on whether ticks are dangerous in Ontario.',
  },
  {
    question: 'How long does a blacklegged tick need to be attached to transmit Lyme disease?',
    answer: 'Blacklegged ticks generally need to be attached for 24–36 hours before they can transmit the Lyme bacterium Borrelia burgdorferi, which is why daily tick checks after outdoor activity dramatically reduce risk. If a blacklegged tick is found attached for 24 or more hours in an established risk area where infection prevalence exceeds 20%, a doctor may prescribe a single preventive dose of doxycycline within 72 hours (post-exposure prophylaxis). This page is educational and not a substitute for medical advice — contact your doctor, Telehealth Ontario, or your local public health unit after a tick bite.',
  },
  {
    question: 'Is this page a substitute for medical advice?',
    answer: 'No. This page aggregates publicly available tick and Lyme disease statistics from Public Health Ontario, the Public Health Agency of Canada, and other official sources for educational purposes. It is not diagnostic. If you have a tick bite, a bullseye rash, or unexplained symptoms after possible tick exposure, contact your family doctor, Telehealth Ontario (1-866-797-0000), or your local public health unit. In an emergency (facial drooping, irregular heartbeat, or severe headache with neck stiffness), go to an Emergency Room.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: `Ticks in Ontario 2026: What % Carry Lyme?`,
  description: `Over 20% of ticks in Toronto and northwestern Ontario carry Lyme — the province's highest rates. Where risk areas are, 2,369 cases in 2024, 43 species.`,
  canonical: SLUG,
})

export default function TicksInOntarioStatisticsPage() {
  const maxCanada = Math.max(...CANADA_LYME.map((y) => y.cases))
  const maxOntario = Math.max(...ONTARIO_LYME.map((y) => y.cases))
  const citation = `BuzzSkito (2026). Ticks in Ontario: 2026 Statistics, Species & Risk Data. Retrieved from https://buzzskito.ca${SLUG}`

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Ticks in Ontario Statistics', url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(SLUG)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Dataset',
        name: 'Ticks in Ontario: 2026 Statistics, Species & Risk Data',
        description: 'Aggregated statistics on ticks in Ontario for 2026: blacklegged tick Lyme infection prevalence in established risk areas, human Lyme disease case counts (Ontario and Canada, 2020-2024), recorded tick species, species submission shares, and tick activity season.',
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
        spatialCoverage: { '@type': 'Place', name: 'Ontario, Canada' },
        temporalCoverage: '2008-01-01/2026-12-31',
        keywords: ['ticks', 'Ontario', 'Lyme disease', 'blacklegged tick', 'Ixodes scapularis', 'tick species', 'Borrelia burgdorferi', 'public health', 'tick season'],
        isBasedOn: [
          'https://health-infobase.canada.ca/zoonoses/ticks/annual-report.html',
          'https://www.publichealthontario.ca/en/Data-and-Analysis/Infectious-Disease/VBD-Tool',
          'https://www.publichealthontario.ca/-/media/Documents/T/2023/tick-species-ontario-lyme.pdf',
          'https://www.nwhu.on.ca/for-professionals/for-health-care-professionals/tick-borne-disease-information-for-health-care-professionals/',
          'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4149368/',
        ],
      }) }} />

      {/* HERO */}
      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs font-extrabold text-amber-400 uppercase tracking-widest mb-3">Free data resource &middot; Updated for 2026 &middot; Sourced</p>
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-5 leading-tight">
            Ticks in Ontario:<br className="hidden sm:block" /> <span className="text-amber-400">2026 Statistics, Species &amp; Risk Data</span>
          </h1>
          <p className="text-lg text-brand-100 max-w-3xl mx-auto leading-relaxed mb-6">
            How common are ticks in Ontario, where is the risk highest, which species carry Lyme disease, and how fast is it spreading? The short version: infection rates are highest in Toronto and northwestern Ontario, where more than 20% of blacklegged ticks carry the Lyme bacterium. This free resource aggregates the latest available tick and Lyme disease statistics from Public Health Ontario, the Public Health Agency of Canada, and provincial surveillance into one citable page for journalists, researchers, and Ontario residents.
          </p>
          <div className="flex flex-wrap gap-2 justify-center text-xs">
            <span className="bg-white/10 px-3 py-1 rounded-full">📊 Public Health Ontario</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">🇨🇦 PHAC Surveillance</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">🩺 Northwestern Health Unit</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">🔬 eTick.ca</span>
          </div>
        </div>
      </section>

      {/* QUICK ANSWER */}
      <section className="bg-amber-50 border-y-4 border-amber-300 py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-extrabold text-amber-700 uppercase tracking-wider mb-2">Quick Answer</p>
          <h2 className="text-xl sm:text-2xl font-extrabold text-brand-900 mb-3">What percentage of ticks carry Lyme disease in Ontario?</h2>
          <p className="speakable text-base text-gray-800 leading-relaxed">
According to BuzzSkito&rsquo;s analysis of Northwestern Health Unit and City of Toronto surveillance data, <strong>in Ontario&rsquo;s established risk areas, approximately 20% of blacklegged ticks carry the Lyme disease bacterium &mdash; with rates exceeding 20% in Toronto and Northwestern Ontario.</strong> Only the blacklegged tick (Ixodes scapularis) spreads Lyme; it is 1 of 43 tick species recorded in Ontario and roughly 55% of all ticks submitted to surveillance. Human Lyme cases are climbing fast: Ontario reported 2,369 cases in 2024 &mdash; up 27% over 2023 and the most of any province (Public Health Agency of Canada). Outside established risk areas, infection prevalence is near zero, so the &ldquo;~20%&rdquo; figure should always be read as applying to risk areas.
          </p>
        </div>
      </section>

      {/* BIG STAT TILES */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold text-brand-900 mb-2">Ticks in Ontario &mdash; by the Numbers (2026)</h2>
          <p className="text-base text-gray-600 mb-8">The anchor figures every Ontario tick story comes back to. Each number is sourced below and aggregated from official surveillance data.</p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {ANCHOR_STATS.map((s) => (
              <div key={s.label} className={`rounded-2xl bg-gradient-to-br ${s.gradient} text-white p-5 shadow-lg`}>
                <p className="text-4xl sm:text-5xl font-black">{s.value}</p>
                <p className="text-xs mt-2 font-bold opacity-95">{s.detail}</p>
                <p className="text-[11px] mt-3 opacity-90 leading-snug">{s.label}</p>
                <p className="text-[10px] mt-2 opacity-75 italic">
                  Source:{' '}
                  {s.sourceUrl
                    ? <a href={s.sourceUrl} target="_blank" rel="noopener" className="underline hover:opacity-100">{s.source}</a>
                    : s.source}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-xl bg-amber-50 border-l-4 border-amber-400 p-4 text-sm text-gray-800">
            <strong>Why &ldquo;in risk areas&rdquo; matters:</strong> Public Health Ontario shifted from publishing a single province-wide infection rate to <a href="https://www.publichealthontario.ca/en/data-and-analysis/infectious-disease/vbd-tool" target="_blank" rel="noopener" className="underline font-semibold">mapping established risk areas</a>, and the National Microbiology Laboratory <a href="https://www.phsd.ca/professionals/health-professionals/advisory-alerts-health-care-professionals/important-change-to-passive-tick-surveillance-in-ontario/" target="_blank" rel="noopener" className="underline font-semibold">stopped accepting blacklegged ticks for bacterial testing on September 20, 2021</a>. The latest published province-wide prevalence figure was <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4149368/" target="_blank" rel="noopener" className="underline font-semibold">19.1% in 2012 (up from 8.4% in 2008)</a>. Infection prevalence is near zero outside established areas &mdash; so a single province-wide percentage can mislead. Always frame the figure as &ldquo;in established risk areas.&rdquo;
          </div>
        </div>
      </section>

      {/* SECTION: HUMAN LYME CASES — CSS BAR CHARTS */}
      <section className="bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50 py-14 px-4 border-y-4 border-rose-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold text-brand-900 mb-2">Are ticks spreading in Ontario?</h2>
          <p className="text-base text-gray-700 mb-8 max-w-3xl">Yes &mdash; and human Lyme disease cases track the spread. Ontario consistently reports the most Lyme cases of any province, and national totals have more than tripled since 2020. Below are the latest available case counts from the Public Health Agency of Canada (Health Infobase, updated January 16, 2026).</p>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Canada chart */}
            <div className="rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-extrabold text-brand-900 mb-1">Lyme disease cases in Canada, 2020&ndash;2024</h3>
              <p className="text-xs text-gray-500 mb-5">Source: <a href="https://health-infobase.canada.ca/zoonoses/ticks/annual-report.html" target="_blank" rel="noopener" className="underline hover:text-brand-900">Public Health Agency of Canada &mdash; Annual report: Lyme disease and other tick-borne diseases surveillance in Canada (Health Infobase)</a>. 2020&ndash;2021 counts from <a href="https://www.canada.ca/en/public-health/services/publications/diseases-conditions/lyme-disease-surveillance-canada-annual-edition-2021.html" target="_blank" rel="noopener" className="underline hover:text-brand-900">PHAC Lyme disease surveillance in Canada: Annual edition 2021</a>.</p>
              <div className="space-y-2">
                {CANADA_LYME.map((y) => (
                  <div key={y.year} className="flex items-center gap-3">
                    <span className="text-xs font-bold text-gray-600 w-10 shrink-0">{y.year}</span>
                    <div className="flex-1 h-7 bg-gray-100 rounded-md overflow-hidden relative">
                      <div
                        className={`h-full rounded-md ${y.year === '2024' ? 'bg-gradient-to-r from-red-500 to-rose-600' : 'bg-gradient-to-r from-orange-400 to-orange-500'}`}
                        style={{ width: `${(y.cases / maxCanada) * 100}%` }}
                      />
                      <span className="absolute inset-0 flex items-center pl-3 text-xs font-bold text-white drop-shadow">{y.cases.toLocaleString()}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-4 italic">National total reached 5,809 cases in 2024 &mdash; annual growth over 20%.</p>
            </div>

            {/* Ontario chart */}
            <div className="rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-extrabold text-brand-900 mb-1">Lyme disease cases in Ontario, 2022&ndash;2024</h3>
              <p className="text-xs text-gray-500 mb-5">Source: <a href="https://health-infobase.canada.ca/zoonoses/ticks/annual-report.html" target="_blank" rel="noopener" className="underline hover:text-brand-900">Public Health Agency of Canada &mdash; Health Infobase, annual tick-borne disease surveillance report (Ontario provincial breakdown)</a>. <span className="italic">Definition note: the 2022 and 2024 figures are PHAC counts (confirmed + probable); the 2023 figure of 1,799 is Public Health Ontario&rsquo;s confirmed-case count. PHAC reports 1,859 for Ontario in 2023, and its stated +27% year-over-year change is calculated on that basis.</span></p>
              <div className="space-y-2">
                {ONTARIO_LYME.map((y) => (
                  <div key={y.year} className="flex items-center gap-3">
                    <span className="text-xs font-bold text-gray-600 w-10 shrink-0">{y.year}</span>
                    <div className="flex-1 h-7 bg-gray-100 rounded-md overflow-hidden relative">
                      <div
                        className={`h-full rounded-md ${y.year === '2024' ? 'bg-gradient-to-r from-red-500 to-rose-600' : 'bg-gradient-to-r from-amber-400 to-amber-500'}`}
                        style={{ width: `${(y.cases / maxOntario) * 100}%` }}
                      />
                      <span className="absolute inset-0 flex items-center pl-3 text-xs font-bold text-white drop-shadow">{y.cases.toLocaleString()}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-4 italic">Ontario&rsquo;s 2,369 cases in 2024 were up 27% over 2023 &mdash; the most of any province.</p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl bg-white border-l-4 border-rose-500 p-6 shadow-sm">
            <h3 className="text-lg font-extrabold text-brand-900 mb-3">Tick range expansion</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">Blacklegged tick established risk areas have expanded steadily since 2015 &mdash; from isolated Great Lakes shoreline pockets to most of southern Ontario plus pockets in the northwest, according to <a href="https://www.publichealthontario.ca/en/data-and-analysis/infectious-disease/vbd-tool" target="_blank" rel="noopener" className="underline font-semibold text-rose-700">Public Health Ontario&rsquo;s Ontario Vector-Borne Disease Tool</a>. In 2025 alone, <strong>13 new risk areas were added across 6 of Ontario&rsquo;s 34 public health units</strong> &mdash; MSL (2), NIA (1), PEL (2), REN (3), SEH (3) and WAT (2).</p>
            <p className="text-xs text-gray-500 italic">Sources: <a href="https://www.publichealthontario.ca/en/data-and-analysis/infectious-disease/vbd-tool" target="_blank" rel="noopener" className="underline">Public Health Ontario &mdash; Ontario Vector-Borne Disease Tool (blacklegged tick established risk areas)</a> and <a href="https://www.publichealthontario.ca/en/About/News/2025/06/VBD-Tool-Launch" target="_blank" rel="noopener" className="underline">Public Health Ontario Launches New Ontario Vector-Borne Disease Tool (June 2025)</a>. For Ontario&rsquo;s full year-by-year Lyme case history and a public-health-unit directory, see our <Link href="/ontario-lyme-disease-tracker-2026" className="underline font-semibold text-rose-700">Ontario Lyme Disease Tracker 2026</Link>.</p>
          </div>
        </div>
      </section>

      {/* SECTION: INFECTION PREVALENCE TREND */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-brand-900 mb-2">What percentage of ticks carry Lyme disease in Ontario?</h2>
          <p className="text-base text-gray-700 mb-8">The share of blacklegged ticks infected with the Lyme bacterium (Borrelia burgdorferi) has risen sharply. Province-wide passive surveillance recorded a jump from 8.4% to 19.1% in just four years; the latest endemic-area sampling now reports over 20%.</p>

          <div className="rounded-2xl border-2 border-gray-200 bg-gradient-to-b from-gray-50 to-white p-6 shadow-sm">
            <h3 className="text-lg font-extrabold text-brand-900 mb-1">Blacklegged tick infection prevalence in Ontario</h3>
            <p className="text-xs text-gray-500 mb-5">Sources: <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4149368/" target="_blank" rel="noopener" className="underline hover:text-brand-900">Nelder MP et al., &ldquo;Population-Based Passive Tick Surveillance and Detection of Expanding Foci of Blacklegged Ticks <em>Ixodes scapularis</em> and the Lyme Disease Agent <em>Borrelia burgdorferi</em> in Ontario, Canada,&rdquo; PLoS One 2014;9(8):e105358</a> (2008 and 2012 figures) &middot; <a href="https://www.nwhu.on.ca/for-professionals/for-health-care-professionals/tick-borne-disease-information-for-health-care-professionals/" target="_blank" rel="noopener" className="underline hover:text-brand-900">Northwestern Health Unit &mdash; Tick-borne Disease Information for Health Care Professionals</a> (fall 2023 tick-dragging, established risk areas)</p>
            <div className="space-y-3">
              {INFECTION_PREVALENCE.map((p) => (
                <div key={p.period} className="flex items-center gap-3">
                  <span className="text-xs font-bold text-gray-600 w-12 shrink-0">{p.period}</span>
                  <div className="flex-1 h-8 bg-gray-100 rounded-md overflow-hidden relative">
                    <div
                      className={`h-full rounded-md ${p.period === '2023' ? 'bg-gradient-to-r from-red-500 to-rose-600' : 'bg-gradient-to-r from-amber-400 to-orange-500'}`}
                      style={{ width: `${(p.value / 25) * 100}%` }}
                    />
                    <span className="absolute inset-0 flex items-center pl-3 text-xs font-bold text-white drop-shadow">{p.label}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 space-y-1.5 text-xs text-gray-600">
              {INFECTION_PREVALENCE.map((p) => (
                <p key={p.period}><span className="font-bold text-gray-800">{p.period} ({p.label}):</span> {p.note}</p>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-4 italic">The &gt;20% threshold is the clinical cutoff for post-exposure prophylaxis eligibility. The 2008&ndash;2012 figures are province-wide; the 2023 figure applies to established/endemic risk areas, where most exposure occurs.</p>
          </div>
        </div>
      </section>

      {/* SECTION: WHICH TICKS CARRY LYME + HOW MANY SPECIES */}
      <section className="bg-gradient-to-br from-emerald-50 via-teal-50 to-white py-14 px-4 border-y-4 border-emerald-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold text-brand-900 mb-2">Which ticks in Ontario carry Lyme disease?</h2>
          <p className="text-base text-gray-700 mb-2 max-w-3xl">Only one Ontario tick transmits Lyme disease: the blacklegged tick (Ixodes scapularis). The American dog tick is more visible and second most common, but does not carry Lyme. The figures below are shares of ticks submitted to Public Health Ontario passive surveillance &mdash; they reflect what people submit, not the true wild population.</p>

          <h3 className="text-xl font-extrabold text-brand-900 mt-8 mb-4">How many tick species are in Ontario?</h3>
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            <div className="rounded-2xl bg-gradient-to-br from-brand-900 to-brand-950 text-white p-5 shadow-lg text-center">
              <p className="text-4xl font-black text-amber-400">43</p>
              <p className="text-xs mt-2 opacity-90">species recorded in Ontario</p>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white p-5 shadow-lg text-center">
              <p className="text-4xl font-black">12</p>
              <p className="text-xs mt-2 opacity-90">established species</p>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-rose-500 to-red-700 text-white p-5 shadow-lg text-center">
              <p className="text-4xl font-black">1</p>
              <p className="text-xs mt-2 opacity-90">species transmits Lyme disease</p>
            </div>
          </div>
          <p className="text-xs text-gray-500 -mt-6 mb-10 italic">Source: <a href="https://www.publichealthontario.ca/-/media/Documents/T/2023/tick-species-ontario-lyme.pdf" target="_blank" rel="noopener" className="underline hover:text-brand-900">Public Health Ontario &mdash; The Ticks of Ontario Synthesis (2nd Edition), PDF</a>. Of 43 recorded species: 12 established, 17 adventive (carried in by migratory birds and wildlife), 14 travel-related.</p>

          {/* Species submission share bar chart */}
          <div className="rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-sm mb-8">
            <h3 className="text-lg font-extrabold text-brand-900 mb-1">Share of ticks submitted to Ontario surveillance, by species</h3>
            <p className="text-xs text-gray-500 mb-5">Source: <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4149368/" target="_blank" rel="noopener" className="underline hover:text-brand-900">Nelder MP et al., PLoS One 2014;9(8):e105358 &mdash; Ontario passive tick surveillance</a>, in which <em>Ixodes scapularis</em> was 54.6% (7,842) and <em>Dermacentor variabilis</em> 35.6% (5,117) of 14,369 submitted ticks. Submission shares reflect what people submit, not true population proportions.</p>
            <div className="space-y-3">
              {TICK_SPECIES.filter((t) => t.sharePct !== null).map((t) => (
                <div key={t.scientific} className="flex items-center gap-3">
                  <span className="text-xs font-bold text-gray-700 w-36 shrink-0 leading-tight">{t.common}</span>
                  <div className="flex-1 h-8 bg-gray-100 rounded-md overflow-hidden relative">
                    <div
                      className={`h-full rounded-md ${t.lyme ? 'bg-gradient-to-r from-rose-500 to-red-600' : 'bg-gradient-to-r from-blue-400 to-blue-500'}`}
                      style={{ width: `${t.sharePct}%` }}
                    />
                    <span className="absolute inset-0 flex items-center pl-3 text-xs font-bold text-white drop-shadow">{t.share}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-4 italic">Red = transmits Lyme disease. Blue = does not. The Lone Star and Brown dog ticks are not established in Ontario and appear only rarely.</p>
          </div>

          {/* Species detail cards */}
          <div className="grid lg:grid-cols-2 gap-5">
            {TICK_SPECIES.map((t) => {
              const badge = t.lyme
                ? 'bg-rose-100 text-rose-800 border-rose-300'
                : t.status === 'second'
                ? 'bg-blue-100 text-blue-800 border-blue-300'
                : 'bg-gray-100 text-gray-700 border-gray-300'
              return (
                <div key={t.scientific} className="rounded-2xl border-2 border-gray-200 bg-gradient-to-b from-white to-gray-50 p-6 shadow-sm">
                  <div className="flex items-start justify-between mb-2 gap-2">
                    <div>
                      <h3 className="text-xl font-extrabold text-brand-900">{t.common}</h3>
                      <p className="text-xs text-gray-500 italic">{t.scientific}</p>
                    </div>
                    <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full border ${badge}`}>{t.lyme ? 'Lyme vector' : 'No Lyme'}</span>
                  </div>
                  <dl className="space-y-1.5 text-sm">
                    <div><dt className="font-bold text-gray-700 inline">Surveillance share: </dt><dd className="text-gray-700 inline">{t.share}</dd></div>
                    <div><dt className="font-bold text-gray-700 inline">Carries: </dt><dd className="text-gray-700 inline">{t.carries}</dd></div>
                    <div><dt className="font-bold text-gray-700 inline">Notes: </dt><dd className="text-gray-700 inline">{t.note}</dd></div>
                  </dl>
                </div>
              )
            })}
          </div>
          <div className="mt-6 rounded-xl bg-blue-50 border-l-4 border-blue-400 p-4 text-sm text-blue-900">
            <strong>Not sure what you found?</strong> Our visual guide on <Link href="/blog/what-ticks-look-like-ontario" className="underline font-bold">what ticks look like in Ontario</Link> walks through size, colour, and the nymph-vs-adult difference, or you can submit a photo to <a href="https://www.etick.ca/" target="_blank" rel="noopener" className="underline font-bold">eTick.ca</a> for free identification.
          </div>
        </div>
      </section>

      {/* SECTION: TICK SEASON */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-brand-900 mb-2">When is tick season in Ontario?</h2>
          <p className="text-base text-gray-700 mb-8 max-w-3xl">Ticks are not just a summer problem. Blacklegged ticks can be active any day the temperature climbs above 4&deg;C, including mild winter spells, according to Public Health Ontario. Human-biting risk follows a two-peak pattern.</p>

          <div className="grid sm:grid-cols-3 gap-5">
            {TICK_SEASON.map((s) => (
              <div key={s.window} className="rounded-2xl border-2 border-gray-200 bg-gradient-to-b from-white to-gray-50 p-6 shadow-sm">
                <span className={`inline-block text-[11px] font-extrabold uppercase tracking-wider text-white px-3 py-1 rounded-full ${s.accent} mb-3`}>{s.window}</span>
                <h3 className="text-lg font-extrabold text-brand-900 mb-2">{s.headline}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{s.detail}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-5 italic">Source: <a href="https://www.publichealthontario.ca/en/About/News/2022/Tick-Season" target="_blank" rel="noopener" className="underline hover:text-brand-900">Public Health Ontario &mdash; Let&rsquo;s Talk About Ticks</a>, which reports that approximately 70% of Ontario Lyme cases are reported in June, July and August, coinciding with the poppy-seed-sized nymph stage, and that &ldquo;ticks can be found any time of year when the temperature is above freezing.&rdquo; The September&ndash;October adult peak and the 4&deg;C activity threshold are widely cited by Ontario public health units; they are not stated in this specific PHO release.</p>
        </div>
      </section>

      {/* SECTION: WORST AREAS — links out, does not compete */}
      <section className="bg-gradient-to-br from-rose-50 to-orange-50 py-14 px-4 border-y-4 border-rose-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-brand-900 mb-2">Where are the worst areas for ticks in Ontario?</h2>
          <p className="text-base text-gray-700 mb-4">The highest blacklegged tick infection rates are reported in <strong>Toronto and Northwestern Ontario</strong>, where more than 20% of ticks test positive for the Lyme bacterium (<a href="https://www.nwhu.on.ca/for-professionals/for-health-care-professionals/tick-borne-disease-information-for-health-care-professionals/" target="_blank" rel="noopener" className="underline font-semibold text-rose-700">Northwestern Health Unit</a>; City of Toronto). Established risk areas now cover most of southern Ontario, with notable concentrations along the Great Lakes shorelines, the Oak Ridges Moraine, the Niagara Escarpment, and eastern Ontario.</p>
          <p className="text-base text-gray-700 mb-4">For a homeowner the practical version of that map is the property line: a yard backing onto ravine, moraine or escarpment land carries more exposure than one in the middle of a subdivision. That pattern shows up right across the GTA: in the ravine network Toronto is built around, which is why <Link href="/toronto-tick-spray" className="underline font-semibold text-rose-700">tick spray in Toronto</Link> concentrates on ravine-edge yards rather than open lawn; along the Oak Ridges Moraine and Bruce Trail lands behind <Link href="/caledon-tick-spray" className="underline font-semibold text-rose-700">Caledon tick control</Link>; and on the escarpment-to-lakeshore corridor covered by <Link href="/burlington-tick-spray" className="underline font-semibold text-rose-700">Burlington tick treatment</Link>.</p>
          <div className="rounded-2xl bg-white border-l-4 border-rose-500 p-6 shadow-sm">
            <p className="text-sm text-gray-700 leading-relaxed">For a detailed, neighbourhood-level breakdown of the worst tick areas in Ontario &mdash; including specific parks, trails, and GTA hot spots &mdash; read our companion guide: <Link href="/blog/are-ticks-dangerous-ontario" className="underline font-bold text-rose-700">Are ticks dangerous in Ontario? Worst areas &amp; risk explained</Link>.</p>
          </div>
        </div>
      </section>

      {/* PULL QUOTE — Alex of BuzzSkito */}
      <section className="bg-brand-950 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <blockquote className="relative">
            <span className="absolute -top-8 -left-2 text-7xl text-amber-400/40 font-serif leading-none">&ldquo;</span>
            <p className="text-xl sm:text-2xl font-semibold leading-relaxed text-brand-50 relative z-10">
              When more than one in five ticks in our risk areas is carrying the Lyme bacterium, the homeowner question isn&rsquo;t &lsquo;will I ever find a tick?&rsquo; &mdash; it&rsquo;s &lsquo;what&rsquo;s my plan when I do?&rsquo; A daily tick check after time outdoors and a treated yard barrier are the two highest-leverage things a GTA family can do.
            </p>
            <footer className="mt-5 text-sm text-amber-400 font-bold">&mdash; Alex, BuzzSkito Mosquito &amp; Tick Control</footer>
          </blockquote>
        </div>
      </section>

      {/* CITE THIS PAGE */}
      <section className="bg-amber-50 border-y-4 border-amber-300 py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl bg-white border-2 border-amber-300 p-6 sm:p-8 shadow-md">
            <h2 className="text-2xl font-extrabold text-brand-900 mb-2">📊 Cite this page</h2>
            <p className="text-sm text-gray-700 mb-5">This is a free, sourced data resource. <strong>You are free to cite or embed this data with a link back to this page.</strong> Journalists, bloggers, and researchers are welcome to reference these figures &mdash; please attribute BuzzSkito and link to the original.</p>

            <p className="text-xs font-extrabold text-gray-500 uppercase tracking-wider mb-2">Ready-to-use citation</p>
            <div className="rounded-lg bg-brand-950 text-brand-50 p-4 text-sm font-mono leading-relaxed mb-5 break-words">
              {citation}
            </div>

            <p className="text-xs font-extrabold text-gray-500 uppercase tracking-wider mb-2">Primary sources used on this page</p>
            <ul className="space-y-3 text-xs text-gray-600">
              {SOURCES.map((src) => (
                <li key={src.url} className="flex gap-1.5">
                  <span className="text-amber-500 shrink-0">›</span>
                  <span className="break-words">
                    <a href={src.url} target="_blank" rel="noopener" className="underline font-semibold text-brand-900 hover:text-amber-700 break-words">{src.name}</a>
                    {' — '}
                    <span className="italic">{src.publisher}</span>
                    <span className="block text-[11px] text-gray-500 mt-0.5">Supports: {src.supports}</span>
                    <span className="block text-[10px] text-gray-400 mt-0.5 break-all">{src.url}</span>
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-gray-500 mt-5 italic">Licensed under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener" className="underline">CC BY 4.0</a>. Latest verified Lyme case year is 2024 (PHAC Health Infobase, updated Jan 16, 2026). Infection-prevalence figures apply to established risk areas as noted; province-wide testing of submitted ticks was reduced after September 2021.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-brand-900 mb-8">Frequently asked questions about ticks in Ontario</h2>
          <div className="space-y-4">
            {FAQS.map((f) => (
              <details key={f.question} className="group rounded-2xl border-2 border-gray-200 bg-gradient-to-b from-white to-gray-50 p-5 shadow-sm">
                <summary className="cursor-pointer list-none flex items-start justify-between gap-3">
                  <h3 className="text-base sm:text-lg font-extrabold text-brand-900">{f.question}</h3>
                  <span className="text-amber-500 text-xl font-black shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-sm text-gray-700 leading-relaxed mt-3">{f.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-extrabold text-amber-400 uppercase tracking-widest mb-3">Protect your yard</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">Worried about ticks in your yard?</h2>
          <p className="text-base text-brand-100 max-w-2xl mx-auto mb-7 leading-relaxed">
            BuzzSkito provides professional, Health Canada&ndash;approved tick barrier spray for residential properties across the GTA &mdash; targeting the lawn-to-woods edges, leaf litter, and fence lines where blacklegged ticks concentrate. Get a free, no-obligation quote for your property.
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
          <p className="text-xs text-brand-300 mt-5">
            Learn more about our <Link href="/tick-control" className="underline">professional tick control service</Link>. Educational data, not medical advice.
          </p>
        </div>
      </section>

      {/* RELATED RESOURCES */}
      <section className="bg-gray-50 py-14 px-4 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">Related resources</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/ontario-lyme-disease-tracker-2026" className="block rounded-2xl bg-white border-2 border-gray-200 hover:border-amber-300 p-5 shadow-sm transition-colors">
              <p className="text-sm font-extrabold text-brand-900">Ontario Lyme Disease Tracker 2026</p>
              <p className="text-xs text-gray-600 mt-1">Year-by-year Ontario case counts, endemic-zone expansion, and a directory of all 34 public health units.</p>
            </Link>
            <Link href="/lyme-disease-canada-statistics" className="block rounded-2xl bg-white border-2 border-gray-200 hover:border-amber-300 p-5 shadow-sm transition-colors">
              <p className="text-sm font-extrabold text-brand-900">Lyme Disease in Canada: Statistics</p>
              <p className="text-xs text-gray-600 mt-1">National Lyme case trends, provincial comparisons, and what the surveillance data shows for 2026.</p>
            </Link>
            <Link href="/blog/are-ticks-dangerous-ontario" className="block rounded-2xl bg-white border-2 border-gray-200 hover:border-amber-300 p-5 shadow-sm transition-colors">
              <p className="text-sm font-extrabold text-brand-900">Are Ticks Dangerous in Ontario?</p>
              <p className="text-xs text-gray-600 mt-1">The worst areas for ticks in Ontario, the real health risks, and neighbourhood-level hot spots.</p>
            </Link>
            <Link href="/blog/what-ticks-look-like-ontario" className="block rounded-2xl bg-white border-2 border-gray-200 hover:border-amber-300 p-5 shadow-sm transition-colors">
              <p className="text-sm font-extrabold text-brand-900">What Ticks Look Like in Ontario</p>
              <p className="text-xs text-gray-600 mt-1">Visual identification guide: blacklegged, dog, and Lone Star ticks, plus nymph-vs-adult size.</p>
            </Link>
            <Link href="/deadliest-animal-in-canada" className="block rounded-2xl bg-white border-2 border-gray-200 hover:border-amber-300 p-5 shadow-sm transition-colors">
              <p className="text-sm font-extrabold text-brand-900">The Deadliest Animal in Canada</p>
              <p className="text-xs text-gray-600 mt-1">Where ticks and mosquitoes rank among Canada&rsquo;s most dangerous animals, by the data.</p>
            </Link>
            <Link href="/tick-control" className="block rounded-2xl bg-white border-2 border-gray-200 hover:border-amber-300 p-5 shadow-sm transition-colors">
              <p className="text-sm font-extrabold text-brand-900">Professional Tick Control</p>
              <p className="text-xs text-gray-600 mt-1">How BuzzSkito&rsquo;s Health Canada&ndash;approved tick barrier spray protects GTA yards.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
