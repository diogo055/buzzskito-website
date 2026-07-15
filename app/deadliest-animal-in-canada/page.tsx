import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, breadcrumbSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'

const SLUG = '/deadliest-animal-in-canada'

// ── GLOBAL DEADLIEST-ANIMALS RANKING ──────────────────────────────────────────
// Source: Our World in Data "What are the world's deadliest animals?" (citing WHO
// + IHME, ~760,000 central mosquito estimate); the widely-circulated BBC / Gates
// Foundation chart range (725,000–1,000,000); WHO World Malaria Report 2024
// (597,000 malaria deaths); WHO Snakebite Envenoming fact sheet (81,410–137,880);
// Wikipedia "List of animals deadliest to humans" compiling BBC/Gates/Business Insider.
// Figures vary by source + methodology, so values are presented as RANGES.
interface DeadlyAnimal {
  rank: number
  animal: string
  deaths: string
  midpoint: number // for bar scaling only (log-friendly representative value)
  mechanism: string
  source: string
}

const GLOBAL_DEADLIEST: DeadlyAnimal[] = [
  { rank: 1,  animal: 'Mosquitoes',                    deaths: '725,000–1,000,000', midpoint: 760000, mechanism: 'Disease vector — malaria, dengue, West Nile, Zika', source: 'Our World in Data / Gates Foundation (central est. ~760,000, 2023)' },
  { rank: 2,  animal: 'Humans (homicide)',             deaths: '~400,000–475,000', midpoint: 437000, mechanism: 'Intentional homicide (UNODC-based)', source: 'BBC / Gates Foundation chart' },
  { rank: 3,  animal: 'Snakes',                        deaths: '~50,000–138,000', midpoint: 94000, mechanism: 'Venom (snakebite envenoming)', source: 'WHO Snakebite Envenoming fact sheet (81,410–137,880)' },
  { rank: 4,  animal: 'Dogs (rabies)',                 deaths: '~25,000–35,000', midpoint: 30000, mechanism: 'Rabies transmission — not maulings', source: 'BBC / Gates Foundation chart' },
  { rank: 5,  animal: 'Freshwater snails',             deaths: '~10,000–200,000', midpoint: 20000, mechanism: 'Schistosomiasis (parasitic flatworm vector)', source: 'BBC chart (10,000); some sources up to 200,000' },
  { rank: 6,  animal: 'Assassin / kissing bugs',       deaths: '~10,000–12,000', midpoint: 11000, mechanism: 'Chagas disease', source: 'BBC / Gates Foundation chart' },
  { rank: 7,  animal: 'Tsetse flies',                  deaths: '~10,000', midpoint: 10000, mechanism: 'African sleeping sickness (trypanosomiasis)', source: 'BBC / Gates Foundation chart' },
  { rank: 8,  animal: 'Ascaris roundworms',            deaths: '~2,500–4,500', midpoint: 3500, mechanism: 'Parasitic worm infection', source: 'BBC / Gates Foundation chart' },
  { rank: 9,  animal: 'Scorpions',                     deaths: '~3,250', midpoint: 3250, mechanism: 'Venom', source: 'BBC / Gates Foundation chart' },
  { rank: 10, animal: 'Crocodiles',                    deaths: '~1,000', midpoint: 1000, mechanism: 'Direct attacks', source: 'BBC / Gates Foundation chart' },
  { rank: 11, animal: 'Hippopotamus',                  deaths: '~500', midpoint: 500, mechanism: 'Direct attacks (deadliest large land mammal)', source: 'BBC / Gates Foundation chart' },
  { rank: 12, animal: 'Elephants',                     deaths: '~500', midpoint: 500, mechanism: 'Tramplings / direct attacks', source: 'BBC / Gates Foundation chart' },
  { rank: 13, animal: 'Lions',                         deaths: '~22–250', midpoint: 100, mechanism: 'Direct attacks', source: 'BBC / Gates Foundation chart' },
  { rank: 14, animal: 'Sharks',                        deaths: '~5–10', midpoint: 8, mechanism: 'Direct attacks (single-digit annual deaths)', source: 'International Shark Attack File (ISAF)' },
]

// ── WHAT ACTUALLY HARMS PEOPLE IN CANADA ──────────────────────────────────────
// Source: Traffic Injury Research Foundation (TIRF) Wildlife-Vehicle Collisions
// in Canada (570 deaths 2000–2020, ~28/yr); Public Health Agency of Canada
// Mosquito-borne disease annual report (177 WNV cases / 1 death, 2024);
// Statistics Canada via CBC (~3.3 sting-anaphylaxis deaths/yr, 40 deaths 1999–2011).
interface CanadianRisk {
  threat: string
  toll: string
  detail: string
  source: string
  tone: 'high' | 'medium' | 'low'
}

const CANADA_RISKS: CanadianRisk[] = [
  {
    threat: 'Moose & deer (vehicle collisions)',
    toll: '~28 deaths / year',
    detail: '570 people died in wildlife-vehicle collisions over 2000–2020. Moose accounted for slightly more than half of fatalities, and deer roughly one-third. By raw human deaths, large ungulates are arguably the deadliest animals for Canadians.',
    source: 'Traffic Injury Research Foundation (TIRF)',
    tone: 'high',
  },
  {
    threat: 'Bees, wasps & hornets (anaphylaxis)',
    toll: '~3–4 deaths / year',
    detail: 'Approximately 3.3 deaths per year (40 deaths from 1999–2011) from sting-induced anaphylaxis. An estimated 600,000 Canadians are at risk of anaphylaxis from all triggers, per Health Canada.',
    source: 'Statistics Canada (via CBC) / Health Canada',
    tone: 'medium',
  },
  {
    threat: 'Mosquitoes (West Nile virus)',
    toll: '~1 death in 2024 (177 cases)',
    detail: 'Mosquitoes kill very few Canadians directly. There is no endemic malaria in Canada — the realistic mosquito risk here is West Nile virus, and case counts swing year to year (44 in 2019 up to 177 in 2024).',
    source: 'Public Health Agency of Canada (PHAC)',
    tone: 'low',
  },
]

// ── CANADA WEST NILE VIRUS — YEAR-TO-YEAR VOLATILITY ──────────────────────────
// Source: Public Health Agency of Canada Mosquito-borne disease annual report.
// 2024 = 177 domestically-acquired cases; 2019–2023 five-year average = 82
// (range 44 in 2019 to 167 in 2020). 2025 full-season data not finalized as of
// June 2026.
interface WNVPoint {
  label: string
  cases: number
  note: string
  highlight?: boolean
}

const WNV_SERIES: WNVPoint[] = [
  { label: '2019 (low year)',          cases: 44,  note: 'Lowest in the comparison window' },
  { label: '2020 (high year)',         cases: 167, note: 'Upper end of recent range' },
  { label: '5-yr avg (2019–2023)',     cases: 82,  note: 'PHAC five-year average' },
  { label: '2024',                     cases: 177, note: 'Well above the 5-year average; 60% neurological', highlight: true },
]

// ── MOSQUITO FACTS ────────────────────────────────────────────────────────────
// Source: Canadian Wildlife Federation / Canadian Journal of Arthropod
// Identification (82 species in Canada; ~5 significant human pests). Species
// counts vary across authorities — CWF cites 2,500+ worldwide, other entomology
// sources cite ~3,500. Egg counts (50–200 per batch) are species-dependent.
interface MosquitoFact {
  metric: string
  value: string
  detail: string
  source: string
}

const MOSQUITO_FACTS: MosquitoFact[] = [
  {
    metric: 'Mosquito species worldwide',
    value: '~3,500',
    detail: 'Over 3,500 mosquito species are recognized globally (the range is roughly 2,500–3,600 across sources).',
    source: 'Canadian Wildlife Federation / Canadian Journal of Arthropod Identification',
  },
  {
    metric: 'Mosquito species in Canada',
    value: '~82',
    detail: 'The Canadian Wildlife Federation states 82 species occur in Canada — but only about 5 are significant human pests.',
    source: 'Canadian Wildlife Federation',
  },
  {
    metric: 'Eggs laid per batch',
    value: '50–200',
    detail: 'A female mosquito lays 50–200 eggs per batch and can lay several batches — thousands over her lifetime. Most species need a blood meal to develop eggs.',
    source: 'Canadian Wildlife Federation',
  },
  {
    metric: 'WNV neurological cases (Canada 2024)',
    value: '106 of 177 (60%)',
    detail: 'The most serious West Nile illness is neuroinvasive disease (meningitis / encephalitis). 60% of Canada’s 2024 cases were neurological.',
    source: 'Public Health Agency of Canada (PHAC)',
  },
]

const FAQS = [
  {
    question: 'What is the deadliest animal in the world?',
    answer: 'The mosquito is the deadliest animal in the world. Our World in Data and the Gates Foundation estimate mosquitoes cause roughly 725,000 to 1,000,000 human deaths every year (a central estimate of about 760,000 for 2023, drawing on WHO and IHME data) — far more than any other animal. Over 80% of those deaths are from malaria; the WHO World Malaria Report 2024 estimated 597,000 malaria deaths in 2023. By comparison, humans (homicide) rank second at roughly 400,000–475,000, snakes third at about 50,000–138,000 (WHO snakebite envenoming), and sharks cause only single-digit deaths (5–10 per year, per the International Shark Attack File).',
  },
  {
    question: 'What is the deadliest animal in Canada?',
    answer: 'It depends on how you measure it. Globally the mosquito is the deadliest animal, but in Canada mosquitoes kill very few people directly because there is no endemic malaria here — the realistic mosquito risk is West Nile virus (177 domestically-acquired cases and 1 reported death in 2024, per the Public Health Agency of Canada). By raw human deaths inside Canada, moose and deer are arguably the deadliest animals: the Traffic Injury Research Foundation recorded 570 deaths from wildlife-vehicle collisions over 2000–2020 (about 28 per year), with moose causing more than half. Bees, wasps and hornets cause roughly 3–4 anaphylaxis deaths per year (Statistics Canada).',
  },
  {
    question: 'How many people do mosquitoes kill each year?',
    answer: 'Mosquitoes are estimated to kill roughly 725,000 to 1,000,000 people worldwide each year, according to the Gates Foundation and Our World in Data — the most current central estimate is about 760,000 deaths for 2023, using WHO and IHME data. Malaria is by far the largest driver: the WHO World Malaria Report 2024 estimated 263 million malaria cases and 597,000 deaths in 2023, with about 95% of deaths in the WHO African Region. The remaining mosquito deaths come from dengue, West Nile virus, Zika and other mosquito-borne diseases.',
  },
  {
    question: 'How many mosquito species are there?',
    answer: 'There are over 3,500 recognized mosquito species worldwide (sources put the range at roughly 2,500 to 3,600). In Canada, the Canadian Wildlife Federation states there are about 82 mosquito species — but only around 5 are significant human pests. Species counts differ slightly between authorities because of ongoing taxonomic revisions.',
  },
  {
    question: 'Are mosquitoes dangerous in Canada?',
    answer: 'Yes, but the danger in Canada is disease transmission and nuisance bites rather than mass mortality. There is no endemic malaria in Canada, so the realistic mosquito risk is West Nile virus. The Public Health Agency of Canada reported 177 domestically-acquired WNV cases in 2024 — 60% (106) of which were neurological — and 1 reported death. That was well above the 2019–2023 five-year average of 82 cases, showing how mosquito-borne disease risk swings from year to year. A professional barrier spray that reduces the adult mosquito population around your home is the most direct way to lower that household exposure.',
  },
  {
    question: 'How many eggs does a mosquito lay?',
    answer: 'A female mosquito typically lays 50 to 200 eggs per batch and can lay several batches during her life — thousands of eggs in total, according to the Canadian Wildlife Federation. Most species require a blood meal to develop each batch of eggs, which is why females bite. Eggs are usually laid on or near standing water, which is why eliminating standing water around a property is the single most effective DIY mosquito-control step.',
  },
  {
    question: 'Is malaria the reason mosquitoes are so deadly?',
    answer: 'Largely, yes. Over 80% of the global mosquito death toll comes from malaria. The WHO World Malaria Report 2024 estimated 597,000 malaria deaths in 2023 out of the roughly 760,000 total mosquito-related deaths estimated by Our World in Data and the Gates Foundation. The rest are caused by other mosquito-borne diseases such as dengue, West Nile virus, Zika, yellow fever and chikungunya. Malaria is not endemic to Canada, which is why the Canadian mosquito threat is dominated by West Nile virus instead.',
  },
  {
    question: 'How do these numbers compare to shark attacks?',
    answer: 'Despite their fearsome reputation, sharks cause only about 5–10 human deaths worldwide per year, according to the International Shark Attack File — roughly 100,000 times fewer than mosquitoes. Crocodiles cause an estimated 1,000 deaths a year and hippos about 500. The data is a useful reminder that the animals people fear most are rarely the most dangerous: the deadliest creatures are tiny disease vectors like mosquitoes, snails and assassin bugs.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: `What Is the Deadliest Animal in Canada? (2026 Data)`,
  description: `The deadliest animal in the world and in Canada, 2026 data — mosquitoes kill an estimated 725,000–1,000,000 people a year, plus the full ranked list.`,
  canonical: SLUG,
})

export default function DeadliestAnimalInCanadaPage() {
  const maxMidpoint = Math.max(...GLOBAL_DEADLIEST.map((a) => a.midpoint))
  const maxWNV = Math.max(...WNV_SERIES.map((w) => w.cases))
  // Log scale for the global chart — a linear scale would render every animal
  // below mosquitoes/humans as an invisible sliver. Log keeps the ranking
  // readable while preserving the dramatic mosquito lead.
  const logWidth = (v: number) => {
    const minLog = Math.log10(5) // sharks ~5
    const maxLog = Math.log10(maxMidpoint)
    return ((Math.log10(v) - minLog) / (maxLog - minLog)) * 100
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Deadliest Animal in Canada', url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(SLUG)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Dataset',
        name: 'The Deadliest Animals — Global Ranking & Canadian Reality Check (2026)',
        description: 'Aggregated estimates of annual human deaths caused by animals worldwide, alongside Canada-specific data on wildlife-vehicle collisions, West Nile virus, and sting anaphylaxis, compiled for 2026.',
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
        spatialCoverage: [{ '@type': 'Place', name: 'Worldwide' }, { '@type': 'Place', name: 'Canada' }],
        temporalCoverage: '2000-01-01/2026-12-31',
        keywords: ['deadliest animal', 'deadliest animal in Canada', 'mosquito deaths', 'malaria', 'West Nile virus', 'wildlife vehicle collisions', 'animal deaths statistics'],
        isBasedOn: [
          'https://ourworldindata.org/deadliest-animals',
          'https://www.who.int/teams/global-malaria-programme/reports/world-malaria-report-2024',
          'https://www.who.int/news-room/fact-sheets/detail/snakebite-envenoming',
          'https://health-infobase.canada.ca/zoonoses/mosquito/annual-report.html',
          'https://tirf.ca/news/wildlife-vehicle-fatal-crash-data-guide-prevention-strategies/',
          'https://cwf-fcf.org/en/resources/encyclopedias/fauna/insects/mosquito-1.html',
        ],
      }) }} />

      {/* HERO */}
      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-rose-900 text-white py-14 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs font-extrabold text-amber-400 uppercase tracking-widest mb-3">Free data resource &middot; Updated for 2026 &middot; Sourced</p>
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-5 leading-tight">
            What Is the Deadliest<br className="hidden sm:block" /> Animal in <span className="text-amber-400">Canada?</span>
          </h1>
          <p className="text-lg text-brand-100 max-w-3xl mx-auto leading-relaxed mb-6">
            The world&rsquo;s deadliest animal is not the shark, the bear, or the wolf &mdash; it is the mosquito, which kills an estimated 725,000 to 1,000,000 people every year. But in Canada the picture flips: with no endemic malaria, mosquitoes kill very few people directly, while moose, deer and even bee stings cause more deaths most years. Here is the full data, sourced and year-stamped for 2026.
          </p>
          <div className="flex flex-wrap gap-2 justify-center text-xs">
            <span className="bg-white/10 px-3 py-1 rounded-full">📊 Our World in Data</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">🌍 WHO Malaria Report 2024</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">🇨🇦 PHAC Surveillance</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">🚗 TIRF Collision Data</span>
          </div>
        </div>
      </section>

      {/* QUICK ANSWER */}
      <section className="bg-amber-50 border-y-4 border-amber-300 py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-extrabold text-amber-700 uppercase tracking-wider mb-2">Quick Answer</p>
          <h2 className="text-xl sm:text-2xl font-extrabold text-brand-900 mb-3">So what is the deadliest animal in Canada?</h2>
          <p className="text-base text-gray-800 leading-relaxed">
            <span className="speakable">The deadliest animal in the world is the mosquito, which causes an estimated <strong>725,000 to 1,000,000 human deaths every year</strong> (Gates Foundation / Our World in Data) &mdash; but inside Canada, where there is no endemic malaria, mosquitoes kill very few people directly, and moose and deer are arguably the deadliest animals, causing about <strong>28 human deaths a year</strong> through vehicle collisions (Traffic Injury Research Foundation).</span> Canada&rsquo;s realistic mosquito threat is West Nile virus &mdash; the Public Health Agency of Canada recorded 177 domestically-acquired cases and 1 reported death in 2024. Bees, wasps and hornets add roughly 3&ndash;4 anaphylaxis deaths per year (Statistics Canada). The honest framing: mosquitoes are #1 globally, but in Canada their threat is disease and nuisance bites rather than mass mortality.
          </p>
        </div>
      </section>

      {/* SECTION 1: BIG STAT TILES */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold text-brand-900 mb-2">The Deadliest Animals &mdash; by the Numbers</h2>
          <p className="text-base text-gray-600 mb-8">Annual human-death estimates compiled from Our World in Data, the WHO World Malaria Report 2024, the Public Health Agency of Canada, and the Traffic Injury Research Foundation. Global figures are best read as ranges, not precise counts.</p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            <div className="rounded-2xl bg-gradient-to-br from-rose-500 to-red-700 text-white p-5 shadow-lg">
              <p className="text-[11px] font-bold uppercase tracking-widest opacity-90">Mosquito deaths / yr (global)</p>
              <p className="text-3xl sm:text-4xl font-black mt-2">725K&ndash;1M</p>
              <p className="text-xs mt-2 opacity-90">#1 deadliest animal &middot; OWID / Gates</p>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 text-white p-5 shadow-lg">
              <p className="text-[11px] font-bold uppercase tracking-widest opacity-90">Malaria deaths (2023)</p>
              <p className="text-3xl sm:text-4xl font-black mt-2">597K</p>
              <p className="text-xs mt-2 opacity-90">80%+ of mosquito toll &middot; WHO 2024</p>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-5 shadow-lg">
              <p className="text-[11px] font-bold uppercase tracking-widest opacity-90">Moose / deer deaths (Canada)</p>
              <p className="text-3xl sm:text-4xl font-black mt-2">~28/yr</p>
              <p className="text-xs mt-2 opacity-90">570 over 2000&ndash;2020 &middot; TIRF</p>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white p-5 shadow-lg">
              <p className="text-[11px] font-bold uppercase tracking-widest opacity-90">Canada WNV (2024)</p>
              <p className="text-3xl sm:text-4xl font-black mt-2">177 / 1</p>
              <p className="text-xs mt-2 opacity-90">cases / death &middot; PHAC</p>
            </div>
          </div>

          {/* GLOBAL DEADLIEST BAR CHART */}
          <div className="rounded-2xl border-2 border-gray-200 bg-gradient-to-b from-gray-50 to-white p-6 shadow-sm">
            <h3 className="text-lg font-extrabold text-brand-900 mb-1">The world&rsquo;s deadliest animals &mdash; human deaths per year</h3>
            <p className="text-xs text-gray-500 mb-1">Source: Our World in Data &ldquo;What are the world&rsquo;s deadliest animals?&rdquo;, the BBC / Gates Foundation chart, the WHO World Malaria Report 2024, and the WHO Snakebite Envenoming fact sheet.</p>
            <p className="text-[11px] text-gray-400 mb-5 italic">Note: bars use a logarithmic scale because mosquitoes cause roughly 100,000&times; more deaths than sharks &mdash; a linear scale would make every animal below the top two invisible.</p>
            <div className="space-y-1.5">
              {GLOBAL_DEADLIEST.map((a) => (
                <div key={a.animal} className="flex items-center gap-3">
                  <span className="text-xs font-bold text-gray-600 w-40 sm:w-48 shrink-0 truncate" title={a.animal}>{a.rank}. {a.animal}</span>
                  <div className="flex-1 h-7 bg-gray-100 rounded-md overflow-hidden relative">
                    <div
                      className={`h-full rounded-md ${a.rank === 1 ? 'bg-gradient-to-r from-red-600 to-rose-700' : a.rank <= 4 ? 'bg-gradient-to-r from-orange-400 to-orange-500' : 'bg-gradient-to-r from-amber-300 to-amber-400'}`}
                      style={{ width: `${Math.max(logWidth(a.midpoint), 4)}%` }}
                    />
                    <span className="absolute inset-0 flex items-center pl-3 text-xs font-bold text-gray-800 sm:text-white sm:drop-shadow">{a.deaths}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-5 italic">Mosquitoes (#1) cause more human deaths than every other animal combined. Humans rank #2 via homicide, snakes #3 via envenoming, and sharks &mdash; despite their reputation &mdash; cause only 5&ndash;10 deaths a year (International Shark Attack File).</p>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHY MOSQUITOES ARE #1 */}
      <section className="bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50 py-14 px-4 border-y-4 border-rose-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold text-brand-900 mb-2">What is the deadliest animal in the world?</h2>
          <p className="text-base text-gray-700 mb-8 max-w-3xl">The mosquito &mdash; and it is not close. The reason is disease, not bites. A single mosquito is harmless; a mosquito carrying a pathogen is the most efficient killing machine in the animal kingdom.</p>

          <div className="grid lg:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white p-6 shadow-md border-2 border-gray-200">
              <p className="text-xs font-extrabold text-gray-500 uppercase tracking-widest mb-2">The mechanism</p>
              <h3 className="text-2xl font-extrabold text-gray-800 mb-3">Disease, not maulings</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2"><span className="text-rose-500">●</span> Malaria &mdash; <strong>597,000 deaths in 2023</strong> (WHO World Malaria Report 2024), over 80% of the mosquito toll</li>
                <li className="flex gap-2"><span className="text-rose-500">●</span> Dengue, Zika, yellow fever, chikungunya</li>
                <li className="flex gap-2"><span className="text-rose-500">●</span> West Nile virus &mdash; the main Canadian risk</li>
              </ul>
              <p className="text-xs text-gray-500 mt-4 italic">The WHO estimated 263 million malaria cases and 597,000 deaths in 2023, with about 95% of deaths in the WHO African Region.</p>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-rose-500 to-red-700 text-white p-6 shadow-lg">
              <p className="text-xs font-extrabold uppercase tracking-widest mb-2 opacity-90">The scale</p>
              <h3 className="text-2xl font-extrabold mb-3">~760,000 deaths a year</h3>
              <p className="text-sm leading-relaxed mb-3">The classic 725,000&ndash;1,000,000 figure traces to a 2014 Gates Foundation chart citing WHO. The more current Our World in Data / Gates estimate is about <strong>760,000 deaths per year</strong>, using 2023 IHME and WHO data.</p>
              <p className="text-sm leading-relaxed">For perspective: that is more human deaths than caused by humans themselves, snakes, dogs, crocodiles, hippos, lions and sharks &mdash; combined.</p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl bg-white border-l-4 border-rose-500 p-6 shadow-sm">
            <h3 className="text-lg font-extrabold text-brand-900 mb-3">Why the &ldquo;deadliest animal&rdquo; rankings always surprise people</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">The animals people fear most &mdash; sharks, bears, big cats &mdash; barely register in the data. The true killers are small disease vectors. Of the global top eight, six are disease vectors or parasites:</p>
            <ol className="space-y-2 text-sm text-gray-700">
              <li><strong className="text-brand-900">Mosquitoes</strong> (malaria, dengue, WNV) &mdash; 725,000&ndash;1,000,000/yr</li>
              <li><strong className="text-brand-900">Snakes</strong> (envenoming) &mdash; an estimated 81,410&ndash;137,880/yr per the WHO snakebite fact sheet</li>
              <li><strong className="text-brand-900">Dogs</strong> &mdash; ~25,000&ndash;35,000/yr, almost entirely via rabies transmission rather than maulings</li>
              <li><strong className="text-brand-900">Freshwater snails</strong> (schistosomiasis) &mdash; ~10,000&ndash;200,000/yr across sources</li>
              <li><strong className="text-brand-900">Assassin / kissing bugs</strong> (Chagas disease) &mdash; ~10,000&ndash;12,000/yr</li>
              <li><strong className="text-brand-900">Tsetse flies</strong> (sleeping sickness) &mdash; ~10,000/yr</li>
            </ol>
            <p className="text-xs text-gray-500 mt-4 italic">Direct-attack animals such as crocodiles (~1,000/yr), hippos (~500/yr) and lions (~22&ndash;250/yr) sit far below the disease vectors. Sharks cause just 5&ndash;10 deaths a year.</p>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE CANADIAN REALITY CHECK */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold text-brand-900 mb-2">What is the deadliest animal in Canada?</h2>
          <p className="text-base text-gray-700 mb-8 max-w-3xl">Here the global ranking breaks down. Canada has no endemic malaria, so mosquitoes &mdash; the world&rsquo;s #1 killer &mdash; cause very few direct deaths here. By raw human deaths inside Canada, the deadliest animals are the ones you meet on a highway, not in a swamp.</p>

          <div className="space-y-5">
            {CANADA_RISKS.map((r, i) => {
              const accent = r.tone === 'high' ? 'border-blue-500' : r.tone === 'medium' ? 'border-amber-500' : 'border-emerald-500'
              const badge = r.tone === 'high' ? 'bg-blue-600' : r.tone === 'medium' ? 'bg-amber-500' : 'bg-emerald-600'
              return (
                <div key={r.threat} className={`rounded-2xl bg-white p-6 shadow-md border-l-4 ${accent}`}>
                  <div className="flex items-start gap-4">
                    <div className={`shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-extrabold text-xl text-white ${badge}`}>{i + 1}</div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                        <h3 className="text-lg font-extrabold text-brand-900">{r.threat}</h3>
                        <span className="text-base font-black text-rose-600">{r.toll}</span>
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed mb-2">{r.detail}</p>
                      <p className="text-xs text-gray-500 italic">Source: {r.source}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-8 rounded-2xl bg-brand-950 text-white p-6 shadow-lg">
            <h3 className="text-lg font-extrabold mb-2">The honest framing</h3>
            <p className="text-sm leading-relaxed opacity-95">Mosquitoes are the world&rsquo;s deadliest animal and the most dangerous animal worldwide &mdash; but in Canada their threat is <strong>disease transmission (West Nile virus) and nuisance bites</strong>, not mass mortality. There is no endemic malaria in Canada. Most years, moose, deer and stinging insects cause more direct human deaths here than mosquitoes do. The mosquito&rsquo;s Canadian danger is real, but it is about the diseases it can carry, not the body count.</p>
          </div>
        </div>
      </section>

      {/* SECTION 4: CANADA WNV VOLATILITY CHART */}
      <section className="bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50 py-14 px-4 border-y-4 border-emerald-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-brand-900 mb-2">Are mosquitoes dangerous in Canada?</h2>
          <p className="text-base text-gray-700 mb-8 max-w-3xl">Yes &mdash; through <Link href="/blog/west-nile-virus-mosquito-risk-ontario" className="text-brand-700 hover:underline">West Nile virus</Link>, not malaria. And the risk is not steady: Canadian WNV case counts swing dramatically from year to year, which is exactly why public-health agencies treat each season as unpredictable.</p>

          <div className="rounded-2xl border-2 border-emerald-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-extrabold text-brand-900 mb-1">West Nile virus &mdash; human cases in Canada (PHAC)</h3>
            <p className="text-xs text-gray-500 mb-5">Source: Public Health Agency of Canada, Mosquito-borne disease annual report. Domestically-acquired cases. 2025 full-season data was not yet finalized as of June 2026.</p>
            <div className="space-y-3">
              {WNV_SERIES.map((w) => (
                <div key={w.label} className="flex items-center gap-3">
                  <span className="text-xs font-bold text-gray-600 w-36 sm:w-44 shrink-0">{w.label}</span>
                  <div className="flex-1 h-8 bg-gray-100 rounded-md overflow-hidden relative">
                    <div
                      className={`h-full rounded-md ${w.highlight ? 'bg-gradient-to-r from-rose-500 to-red-600' : 'bg-gradient-to-r from-emerald-400 to-teal-500'}`}
                      style={{ width: `${(w.cases / maxWNV) * 100}%` }}
                    />
                    <span className="absolute inset-0 flex items-center pl-3 text-xs font-bold text-white drop-shadow">{w.cases} cases</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-5 italic">2024 (177 cases) was well above the 2019&ndash;2023 five-year average of 82 cases, and 60% of 2024 cases (106) were neurological &mdash; the most serious form of WNV illness. The range from 44 cases (2019) to 177 cases (2024) shows how volatile mosquito-borne disease is in Canada.</p>
          </div>
        </div>
      </section>

      {/* SECTION 5: MOSQUITO FACTS */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold text-brand-900 mb-2">Mosquito facts: species, eggs &amp; Canadian risk</h2>
          <p className="text-base text-gray-700 mb-8 max-w-3xl">Two of the most-searched mosquito questions &mdash; how many species exist and how many eggs they lay &mdash; plus the Canadian disease numbers, all with inline sources.</p>

          <div className="overflow-x-auto rounded-2xl border-2 border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-brand-950 text-white text-left">
                  <th className="px-4 py-3 font-bold">Metric</th>
                  <th className="px-4 py-3 font-bold">Figure</th>
                  <th className="px-4 py-3 font-bold">Detail</th>
                  <th className="px-4 py-3 font-bold">Source</th>
                </tr>
              </thead>
              <tbody>
                {MOSQUITO_FACTS.map((f, i) => (
                  <tr key={f.metric} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-bold text-brand-900 align-top">{f.metric}</td>
                    <td className="px-4 py-3 font-black text-rose-600 align-top whitespace-nowrap">{f.value}</td>
                    <td className="px-4 py-3 text-gray-700 align-top">{f.detail}</td>
                    <td className="px-4 py-3 text-gray-500 italic text-xs align-top">{f.source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 mt-8">
            <div className="rounded-2xl bg-gradient-to-b from-white to-gray-50 border-2 border-gray-200 p-6 shadow-sm">
              <h3 className="text-lg font-extrabold text-brand-900 mb-2">How many mosquito species are there?</h3>
              <p className="text-sm text-gray-700 leading-relaxed">There are over <strong>3,500 mosquito species worldwide</strong> (roughly 2,500&ndash;3,600 depending on the source), and <strong>about 82 in Canada</strong> per the Canadian Wildlife Federation &mdash; but only around 5 Canadian species are significant human pests.</p>
            </div>
            <div className="rounded-2xl bg-gradient-to-b from-white to-gray-50 border-2 border-gray-200 p-6 shadow-sm">
              <h3 className="text-lg font-extrabold text-brand-900 mb-2">How many eggs does a mosquito lay?</h3>
              <p className="text-sm text-gray-700 leading-relaxed">A female lays <strong>50&ndash;200 eggs per batch</strong> and can lay several batches &mdash; thousands over her lifetime (Canadian Wildlife Federation). Most species need a blood meal to develop eggs, and eggs are laid on or near standing water.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: CITE THIS PAGE */}
      <section className="bg-gradient-to-br from-brand-950 to-brand-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl bg-white/5 border-2 border-amber-400/40 p-8 shadow-2xl">
            <p className="text-xs font-extrabold text-amber-400 uppercase tracking-widest mb-2">📊 Cite this page</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">Use this data &mdash; free to cite or embed</h2>
            <p className="text-base text-brand-100 leading-relaxed mb-5">Writing about the world&rsquo;s deadliest animals, mosquito statistics, or West Nile virus in Canada? You are welcome to quote any figure on this page. We ask only for a link back so readers can check the underlying sources.</p>

            <div className="rounded-xl bg-brand-950/80 border border-white/10 p-5 mb-5">
              <p className="text-[11px] font-bold text-amber-400 uppercase tracking-wider mb-2">Suggested citation</p>
              <p className="text-sm text-brand-100 font-mono leading-relaxed">BuzzSkito (2026). What Is the Deadliest Animal in Canada? (2026 Data). Retrieved from https://buzzskito.ca{SLUG}</p>
            </div>

            <div className="rounded-xl bg-amber-400/10 border border-amber-400/30 p-4">
              <p className="text-sm text-amber-100"><strong className="text-amber-300">Permission:</strong> Free to cite or embed with a link back to this page. All figures are attributed inline to their original sources (WHO, PHAC, TIRF, Our World in Data and the Canadian Wildlife Federation) &mdash; please credit those originators too.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: PULL QUOTE */}
      <section className="bg-amber-50 border-y-4 border-amber-300 py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <blockquote className="relative">
            <span className="absolute -top-6 -left-2 text-7xl text-amber-300 font-serif leading-none" aria-hidden="true">&ldquo;</span>
            <p className="text-xl sm:text-2xl font-extrabold text-brand-900 leading-relaxed pl-6">
              People worry about sharks and bears, but the deadliest animal on Earth weighs a few milligrams. In Canada it won&rsquo;t give you malaria &mdash; what it can give you is West Nile virus, and the single best defence is shrinking the mosquito population around the homes where families actually live.
            </p>
          </blockquote>
          <p className="text-sm font-bold text-amber-700 mt-5 pl-6">&mdash; Alex, BuzzSkito Mosquito &amp; Tick Control</p>
        </div>
      </section>

      {/* SECTION 8: FAQ */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-brand-900 mb-8">Frequently asked questions</h2>
          <div className="space-y-4">
            {FAQS.map((f) => (
              <details key={f.question} className="group rounded-2xl border-2 border-gray-200 bg-gradient-to-b from-white to-gray-50 p-5 shadow-sm">
                <summary className="cursor-pointer list-none flex items-start justify-between gap-3">
                  <h3 className="text-base sm:text-lg font-extrabold text-brand-900">{f.question}</h3>
                  <span className="shrink-0 text-amber-500 font-black text-xl group-open:rotate-45 transition-transform" aria-hidden="true">+</span>
                </summary>
                <p className="text-sm text-gray-700 leading-relaxed mt-3">{f.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: CLOSING CTA */}
      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-rose-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-extrabold text-amber-400 uppercase tracking-widest mb-3">Protect your yard in the GTA</p>
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-4">The world&rsquo;s deadliest animal is breeding in your backyard</h2>
          <p className="text-base text-brand-100 max-w-2xl mx-auto mb-8 leading-relaxed">
            You can&rsquo;t change the global statistics &mdash; but you can shrink the mosquito population around your home. BuzzSkito&rsquo;s Health Canada-approved barrier spray cuts adult mosquitoes (and the West Nile virus risk they carry) across yards in Mississauga, Toronto, and the wider GTA. Backed by our Bite-Free Guarantee.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/free-yard-assessment"
              className="inline-block bg-amber-400 hover:bg-amber-300 text-brand-950 font-extrabold text-base px-8 py-4 rounded-full shadow-lg transition-all"
            >
              Get a Free Quote &rarr;
            </Link>
            <a
              href={BUSINESS.phoneHref}
              className="inline-block bg-white/10 hover:bg-white/20 text-white font-extrabold text-base px-8 py-4 rounded-full border border-white/20 transition-all"
            >
              Call {BUSINESS.phone}
            </a>
          </div>
          <p className="text-xs text-brand-300 mt-5">Educational resource &mdash; not medical advice. For confirmed disease exposure, contact your doctor, Telehealth Ontario, or your local Public Health Unit.</p>
        </div>
      </section>

      {/* SECTION 10: RELATED RESOURCES */}
      <section className="bg-gray-50 py-14 px-4 border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-2">Related resources</h2>
          <p className="text-base text-gray-600 mb-8">More free, sourced BuzzSkito data hubs on the real Canadian mosquito and tick risks.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/west-nile-virus-ontario-tracker" className="block rounded-2xl bg-white border-2 border-gray-200 hover:border-amber-400 p-6 shadow-sm transition-colors">
              <h3 className="text-lg font-extrabold text-brand-900 mb-1">West Nile Virus Ontario Tracker &rarr;</h3>
              <p className="text-sm text-gray-600">The real Canadian mosquito-borne risk &mdash; live case counts, surveillance data, and prevention.</p>
            </Link>
            <Link href="/ontario-lyme-disease-tracker-2026" className="block rounded-2xl bg-white border-2 border-gray-200 hover:border-amber-400 p-6 shadow-sm transition-colors">
              <h3 className="text-lg font-extrabold text-brand-900 mb-1">Ontario Lyme Disease Tracker 2026 &rarr;</h3>
              <p className="text-sm text-gray-600">Live Lyme case counts, endemic zones, and the full Public Health Unit directory.</p>
            </Link>
            <Link href="/ticks-in-ontario-statistics" className="block rounded-2xl bg-white border-2 border-gray-200 hover:border-amber-400 p-6 shadow-sm transition-colors">
              <h3 className="text-lg font-extrabold text-brand-900 mb-1">Ticks in Ontario: Statistics &rarr;</h3>
              <p className="text-sm text-gray-600">Tick species, ranges, and the data behind Ontario&rsquo;s rising tick population.</p>
            </Link>
            <Link href="/lyme-disease-canada-statistics" className="block rounded-2xl bg-white border-2 border-gray-200 hover:border-amber-400 p-6 shadow-sm transition-colors">
              <h3 className="text-lg font-extrabold text-brand-900 mb-1">Lyme Disease Canada Statistics &rarr;</h3>
              <p className="text-sm text-gray-600">National Lyme disease figures, trends, and how Canada compares province to province.</p>
            </Link>
            <Link href="/mosquito-control" className="block rounded-2xl bg-white border-2 border-gray-200 hover:border-amber-400 p-6 shadow-sm transition-colors sm:col-span-2">
              <h3 className="text-lg font-extrabold text-brand-900 mb-1">Professional Mosquito Control &rarr;</h3>
              <p className="text-sm text-gray-600">How BuzzSkito&rsquo;s Health Canada-approved barrier spray reduces the mosquito population around GTA homes.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
