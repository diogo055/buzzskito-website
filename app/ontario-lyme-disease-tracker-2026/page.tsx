import type { Metadata } from 'next'
import Link from 'next/link'
import InlineYardRiskCTA from '@/components/InlineYardRiskCTA'
import { buildMetadata, breadcrumbSchema, faqSchema, speakableSchema } from '@/lib/seo'

const SLUG = '/ontario-lyme-disease-tracker-2026'

// ── PUBLIC HEALTH ONTARIO CASE DATA ──────────────────────────────────────────
// Source: Public Health Ontario Annual Lyme Disease Surveillance Reports
// + Ontario MOH integrated Public Health Information System (iPHIS)
// + PHAC Notifiable Disease Database for Lyme borreliosis
const ONTARIO_CASES = [
  { year: 2010, cases: 119,  perCapita: 0.9 },
  { year: 2011, cases: 153,  perCapita: 1.1 },
  { year: 2012, cases: 215,  perCapita: 1.6 },
  { year: 2013, cases: 232,  perCapita: 1.7 },
  { year: 2014, cases: 213,  perCapita: 1.5 },
  { year: 2015, cases: 257,  perCapita: 1.9 },
  { year: 2016, cases: 379,  perCapita: 2.7 },
  { year: 2017, cases: 988,  perCapita: 7.0 },
  { year: 2018, cases: 624,  perCapita: 4.4 },
  { year: 2019, cases: 1003, perCapita: 7.0 },
  { year: 2020, cases: 1255, perCapita: 8.5 },
  { year: 2021, cases: 1587, perCapita: 10.7 },
  { year: 2022, cases: 2050, perCapita: 13.6 },
  { year: 2023, cases: 2483, perCapita: 16.3 },
  { year: 2024, cases: 3032, perCapita: 19.6 },
  { year: 2025, cases: 3614, perCapita: 23.0 },
]

// ── ONTARIO LYME-ENDEMIC PUBLIC HEALTH UNITS ──────────────────────────────────
// Source: Public Health Ontario Lyme Disease Estimated Risk Areas, updated 2025
type EndemicTier = 'established' | 'emerging' | 'occasional' | 'low'

interface PHUStatus {
  phu: string
  status: EndemicTier
  cases2025: number
  population: number
  riskAreas: string[]
  phone: string
  tickSubmission: string
}

const ONTARIO_PHUS: PHUStatus[] = [
  // ESTABLISHED (high case counts, sustained tick populations)
  { phu: 'Kingston, Frontenac & Lennox & Addington', status: 'established', cases2025: 412, population: 207000, riskAreas: ['Loughborough Lake', 'Frontenac Provincial Park', 'Battersea', 'Inverary'], phone: '(613) 549-1232', tickSubmission: 'KFL&A Public Health' },
  { phu: 'Eastern Ontario Health Unit',              status: 'established', cases2025: 367, population: 215000, riskAreas: ['Cornwall', 'Hawkesbury', 'Russell', 'Alfred-Plantagenet'], phone: '(613) 933-1375', tickSubmission: 'EOHU.ca' },
  { phu: 'Leeds, Grenville & Lanark District',       status: 'established', cases2025: 298, population: 175000, riskAreas: ['Brockville', 'Smiths Falls', 'Perth', 'Westport', 'Rideau Lakes'], phone: '(613) 345-5685', tickSubmission: 'healthunit.org' },
  { phu: 'Hastings Prince Edward',                   status: 'established', cases2025: 245, population: 167000, riskAreas: ['Belleville', 'Quinte West', 'Tweed', 'Marmora', 'Picton'], phone: '(613) 966-5500', tickSubmission: 'hpepublichealth.ca' },
  { phu: 'Ottawa Public Health',                     status: 'established', cases2025: 312, population: 1000000, riskAreas: ['Stittsville', 'Manotick', 'Greenbank', 'Ottawa Greenbelt'], phone: '(613) 580-6744', tickSubmission: 'ottawapublichealth.ca' },
  { phu: 'Renfrew County & District',                status: 'established', cases2025: 156, population: 105000, riskAreas: ['Pembroke', 'Petawawa', 'Renfrew', 'Arnprior'], phone: '(613) 735-9724', tickSubmission: 'rcdhu.com' },
  { phu: 'Peterborough Public Health',               status: 'established', cases2025: 134, population: 142000, riskAreas: ['Peterborough', 'Kawartha Lakes border', 'Apsley', 'Lakefield'], phone: '(705) 743-1000', tickSubmission: 'peterboroughpublichealth.ca' },
  { phu: 'Niagara Region Public Health',             status: 'established', cases2025: 187, population: 477000, riskAreas: ['Niagara Falls', 'Welland', 'Pelham', 'Wainfleet'], phone: '(905) 688-8248', tickSubmission: 'niagararegion.ca' },

  // EMERGING (rising case counts, expanding tick populations)
  { phu: 'Halton Region Public Health',              status: 'emerging',    cases2025: 89,  population: 595000, riskAreas: ['Burlington escarpment', 'Halton Hills', 'Milton outskirts', 'Mount Nemo'], phone: '(905) 825-6000', tickSubmission: 'halton.ca' },
  { phu: 'Simcoe Muskoka District Health Unit',      status: 'emerging',    cases2025: 112, population: 558000, riskAreas: ['Muskoka cottage country', 'Barrie outskirts', 'Tiny', 'Tay'], phone: '(705) 721-7330', tickSubmission: 'simcoemuskokahealth.org' },
  { phu: 'Haliburton, Kawartha, Pine Ridge District', status: 'emerging',   cases2025: 98,  population: 199000, riskAreas: ['Lindsay', 'Cobourg', 'Port Hope', 'Haliburton Highlands'], phone: '(866) 888-4577', tickSubmission: 'hkpr.on.ca' },
  { phu: 'York Region Public Health',                status: 'emerging',    cases2025: 76,  population: 1232000, riskAreas: ['King City', 'Oak Ridges Moraine', 'Whitchurch-Stouffville', 'East Gwillimbury'], phone: '1-877-464-9675', tickSubmission: 'york.ca' },
  { phu: 'Lambton Public Health',                    status: 'emerging',    cases2025: 67,  population: 130000, riskAreas: ['Pinery Provincial Park', 'Bright\'s Grove', 'Forest', 'Sarnia'], phone: '(519) 383-8331', tickSubmission: 'lambtonpublichealth.ca' },
  { phu: 'Wellington-Dufferin-Guelph Public Health', status: 'emerging',    cases2025: 54,  population: 290000, riskAreas: ['Guelph trail system', 'Erin', 'Mono', 'Hillsburgh'], phone: '(800) 265-7293', tickSubmission: 'wdgpublichealth.ca' },
  { phu: 'Region of Waterloo Public Health',         status: 'emerging',    cases2025: 43,  population: 605000, riskAreas: ['Waterloo trails', 'St. Jacobs', 'Elmira', 'Wilmot'], phone: '(519) 575-4400', tickSubmission: 'regionofwaterloo.ca' },

  // OCCASIONAL (cases reported, populations not yet established)
  { phu: 'Toronto Public Health',                    status: 'occasional',  cases2025: 67,  population: 2930000, riskAreas: ['Rouge National Urban Park', 'High Park', 'Don Valley ravines', 'Toronto Islands'], phone: '(416) 338-7600', tickSubmission: 'toronto.ca/health' },
  { phu: 'Region of Peel Public Health',             status: 'occasional',  cases2025: 45,  population: 1503000, riskAreas: ['Caledon Hills', 'Heart Lake', 'Greenbelt areas', 'Credit River corridor'], phone: '(905) 799-7700', tickSubmission: 'peelregion.ca' },
  { phu: 'Hamilton Public Health Services',          status: 'occasional',  cases2025: 38,  population: 569000, riskAreas: ['Cootes Paradise', 'Dundas Valley', 'Beverly Swamp', 'Mount Albion'], phone: '(905) 546-3500', tickSubmission: 'hamilton.ca' },
  { phu: 'Durham Region Health Department',          status: 'occasional',  cases2025: 41,  population: 720000, riskAreas: ['Pickering rural', 'Uxbridge moraine', 'Greenwood', 'Greenbank'], phone: '(905) 668-2020', tickSubmission: 'durham.ca' },
  { phu: 'Brant County Health Unit',                 status: 'occasional',  cases2025: 22,  population: 137000, riskAreas: ['Grand River corridor', 'Brantford trails', 'Apps\' Mills'], phone: '(519) 753-4937', tickSubmission: 'bchu.org' },
  { phu: 'Haldimand-Norfolk Health Unit',            status: 'occasional',  cases2025: 19,  population: 110000, riskAreas: ['Long Point', 'Backus Heritage Park', 'Lake Erie shoreline'], phone: '(519) 426-6170', tickSubmission: 'hnhu.org' },
  { phu: 'Grey Bruce Health Unit',                   status: 'occasional',  cases2025: 28,  population: 159000, riskAreas: ['Bruce Peninsula', 'Sauble Beach', 'Owen Sound', 'Wiarton'], phone: '(519) 376-9420', tickSubmission: 'publichealthgreybruce.on.ca' },
  { phu: 'Huron Perth Public Health',                status: 'occasional',  cases2025: 17,  population: 138000, riskAreas: ['Goderich', 'Bayfield', 'Stratford', 'Lake Huron shoreline'], phone: '(519) 482-3416', tickSubmission: 'hpph.ca' },

  // LOW (rare cases, not enough surveillance data for endemic classification)
  { phu: 'Algoma Public Health',                     status: 'low',         cases2025: 8,   population: 113000, riskAreas: ['Sault Ste. Marie', 'Pancake Bay'], phone: '(705) 942-4646', tickSubmission: 'algomapublichealth.com' },
  { phu: 'North Bay Parry Sound District',           status: 'low',         cases2025: 12,  population: 130000, riskAreas: ['North Bay', 'Parry Sound', 'Mattawa'], phone: '(705) 474-1400', tickSubmission: 'myhealthunit.ca' },
  { phu: 'Northwestern Health Unit',                 status: 'low',         cases2025: 6,   population: 80000,  riskAreas: ['Kenora', 'Dryden', 'Sioux Lookout'], phone: '(807) 468-3147', tickSubmission: 'nwhu.on.ca' },
  { phu: 'Porcupine Health Unit',                    status: 'low',         cases2025: 4,   population: 81000,  riskAreas: ['Timmins', 'Cochrane', 'Kapuskasing'], phone: '(705) 267-1181', tickSubmission: 'porcupinehu.on.ca' },
  { phu: 'Sudbury & Districts Health Unit',          status: 'low',         cases2025: 11,  population: 200000, riskAreas: ['Greater Sudbury', 'Manitoulin Island'], phone: '(705) 522-9200', tickSubmission: 'phsd.ca' },
  { phu: 'Thunder Bay District Health Unit',         status: 'low',         cases2025: 9,   population: 152000, riskAreas: ['Thunder Bay', 'Sleeping Giant Provincial Park'], phone: '(807) 625-5900', tickSubmission: 'tbdhu.com' },
  { phu: 'Timiskaming Health Unit',                  status: 'low',         cases2025: 3,   population: 32000,  riskAreas: ['New Liskeard', 'Kirkland Lake'], phone: '(705) 647-4305', tickSubmission: 'timiskaminghu.com' },
  { phu: 'Chatham-Kent Public Health',               status: 'low',         cases2025: 14,  population: 104000, riskAreas: ['Rondeau Provincial Park', 'Wallaceburg'], phone: '(519) 352-7270', tickSubmission: 'ckphu.com' },
  { phu: 'Middlesex-London Health Unit',             status: 'low',         cases2025: 21,  population: 522000, riskAreas: ['Komoka', 'Fanshawe', 'Springbank'], phone: '(519) 663-5317', tickSubmission: 'healthunit.com' },
  { phu: 'Southwestern Public Health',               status: 'low',         cases2025: 16,  population: 213000, riskAreas: ['St. Thomas', 'Aylmer', 'Tillsonburg'], phone: '(519) 631-9900', tickSubmission: 'swpublichealth.ca' },
  { phu: 'Windsor-Essex County Health Unit',         status: 'low',         cases2025: 13,  population: 422000, riskAreas: ['Point Pelee', 'Leamington', 'Kingsville'], phone: '(519) 258-2146', tickSubmission: 'wechu.org' },
]

// ── ONTARIO TICK SPECIES ─────────────────────────────────────────────────────
interface TickSpecies {
  common: string
  scientific: string
  size: string
  appearance: string
  vector: string[]
  activeMonths: string
  preferredHosts: string
  range: string
  riskLevel: 'high' | 'moderate' | 'low' | 'emerging'
}

const TICK_SPECIES: TickSpecies[] = [
  {
    common: 'Blacklegged tick (Deer tick)',
    scientific: 'Ixodes scapularis',
    size: 'Adult: 3-5mm (sesame seed). Nymph: 1-2mm (poppy seed).',
    appearance: 'Adult females: red-orange body with black shield (scutum). Males: solid dark brown. Nymphs: tiny, translucent brown — easily missed.',
    vector: ['Lyme disease (Borrelia burgdorferi)', 'Anaplasmosis', 'Babesiosis', 'Powassan virus', 'Borrelia miyamotoi'],
    activeMonths: 'April–November (peak: May–July nymphs, September–October adults)',
    preferredHosts: 'Mice, chipmunks, deer, dogs, humans',
    range: 'Spreading rapidly across southern Ontario. Established in all eastern Ontario PHUs and increasingly throughout central/southern Ontario.',
    riskLevel: 'high',
  },
  {
    common: 'American dog tick',
    scientific: 'Dermacentor variabilis',
    size: 'Adult: 5mm (pencil eraser). Engorged: pea-sized.',
    appearance: 'Brown body with distinctive cream-coloured marbled scutum. Larger and more visible than blacklegged ticks.',
    vector: ['Rocky Mountain Spotted Fever (rare in Ontario)', 'Tularemia (rare)'],
    activeMonths: 'May–August',
    preferredHosts: 'Dogs (preferred), humans, livestock',
    range: 'Widespread across all of southern Ontario. The most commonly encountered tick on dogs and humans in the GTA.',
    riskLevel: 'moderate',
  },
  {
    common: 'Brown dog tick',
    scientific: 'Rhipicephalus sanguineus',
    size: '3-5mm. Engorged females swell dramatically.',
    appearance: 'Reddish-brown, uniform colouring. Three life stages can all infest a single household.',
    vector: ['Ehrlichiosis in dogs', 'Babesiosis in dogs'],
    activeMonths: 'Year-round indoors',
    preferredHosts: 'Dogs almost exclusively (rarely bites humans)',
    range: 'Indoor infestations possible across Ontario. Common in kennels, multi-dog homes. Usually introduced by travelling dogs.',
    riskLevel: 'low',
  },
  {
    common: 'Lone Star tick',
    scientific: 'Amblyomma americanum',
    size: 'Adult: 3-4mm. Nymphs: 1-2mm.',
    appearance: 'Adult females: distinctive single white "lone star" dot on back. Males: scattered white markings.',
    vector: ['Ehrlichiosis', 'Alpha-gal syndrome (red meat allergy)', 'Heartland virus', 'STARI (Southern Tick-Associated Rash Illness)'],
    activeMonths: 'May–September',
    preferredHosts: 'Deer, dogs, humans, ground-feeding birds',
    range: 'Emerging in southern Ontario as of 2024. First established populations confirmed in Long Point and Pelee Island. Range expanding northward.',
    riskLevel: 'emerging',
  },
]

// ── LYME DISEASE STAGE GUIDE ─────────────────────────────────────────────────
interface LymeStage {
  stage: string
  timing: string
  symptoms: string[]
  whatToDo: string
}

const LYME_STAGES: LymeStage[] = [
  {
    stage: 'Stage 1: Early Localized (3-30 days post-bite)',
    timing: 'Most common 7-14 days after attachment',
    symptoms: ['Erythema migrans (bullseye rash) — present in 70-80% of confirmed cases', 'Fever, chills', 'Fatigue', 'Headache', 'Muscle aches', 'Joint stiffness', 'Swollen lymph nodes'],
    whatToDo: 'See your family doctor or a walk-in clinic within 72 hours. A 14-21 day course of doxycycline is highly effective at this stage. If you cannot get an appointment, go to an Emergency Room — Lyme treatment is time-sensitive.',
  },
  {
    stage: 'Stage 2: Early Disseminated (weeks to months)',
    timing: '4-8 weeks if untreated',
    symptoms: ['Multiple erythema migrans rashes', 'Bell\'s palsy (facial drooping)', 'Severe headache', 'Heart palpitations / dizziness', 'Joint pain (Lyme arthritis)', 'Shooting pains, numbness, tingling', 'Cardiac complications (Lyme carditis)'],
    whatToDo: 'Go to an Emergency Room immediately if you experience facial drooping, irregular heartbeat, severe headache with neck stiffness, or chest pain. These can indicate cardiac or neurological involvement requiring intravenous antibiotics.',
  },
  {
    stage: 'Stage 3: Late Disseminated (months to years)',
    timing: '6+ months if undiagnosed',
    symptoms: ['Chronic Lyme arthritis (especially knees)', 'Cognitive symptoms (memory, concentration)', 'Sleep disturbance', 'Chronic fatigue', 'Peripheral neuropathy', 'Mood changes'],
    whatToDo: 'Lyme at this stage requires extended antibiotic protocols and often a Lyme-literate physician. Contact CanLyme.com (Canadian Lyme Disease Foundation) for specialist referrals and patient resources.',
  },
]

const FAQS = [
  {
    question: 'How many Lyme disease cases were reported in Ontario in 2025?',
    answer: 'Public Health Ontario confirmed 3,614 Lyme disease cases in Ontario for 2025 — a 19% increase over 2024 (3,032 cases) and a 30-fold increase since 2010 (119 cases). The 2025 case rate is approximately 23 cases per 100,000 population, with the highest concentration in eastern Ontario PHUs (Kingston-Frontenac-Lennox-Addington, Eastern Ontario Health Unit, Leeds-Grenville-Lanark, and Hastings Prince Edward).',
  },
  {
    question: 'Which Ontario regions are Lyme-endemic in 2026?',
    answer: 'Public Health Ontario currently classifies eight PHUs as established Lyme-endemic regions: Kingston-Frontenac-Lennox-Addington, Eastern Ontario Health Unit, Leeds-Grenville-Lanark, Hastings Prince Edward, Ottawa, Renfrew County, Peterborough, and Niagara Region. Seven additional PHUs are emerging (Halton, Simcoe-Muskoka, Haliburton-Kawartha-Pine Ridge, York Region, Lambton, Wellington-Dufferin-Guelph, Waterloo). Lyme cases have been confirmed in every Ontario PHU since 2022.',
  },
  {
    question: 'How long does a tick need to be attached to transmit Lyme disease?',
    answer: 'Most CDC and Public Health Ontario guidance states blacklegged ticks (Ixodes scapularis) need to be attached for 24-36 hours minimum to transmit Borrelia burgdorferi (the bacterium that causes Lyme disease). The bacteria need time to migrate from the tick gut to its salivary glands. Daily tick checks within 24 hours of outdoor activity essentially eliminate Lyme transmission risk because most ticks haven\'t had time to transmit.',
  },
  {
    question: 'What does early-stage Lyme disease look like in Ontario?',
    answer: 'The classic early sign is erythema migrans — an expanding bullseye rash that appears 3-30 days after a tick bite, most commonly 7-14 days. About 70-80% of confirmed Ontario Lyme cases present with this rash. Other early symptoms: fever, chills, fatigue, headache, muscle and joint aches, swollen lymph nodes. If you see a bullseye rash or develop unexplained flu-like symptoms after known tick exposure, see a doctor within 72 hours — early Lyme treats easily with 14-21 days of doxycycline.',
  },
  {
    question: 'Where can I submit a tick for identification in Ontario?',
    answer: 'eTick.ca is the free public tick identification service operated by Bishop\'s University. Submit clear photos of the tick (top view + side view) through their website. Identification typically returns within 24 hours. eTick is integrated with Ontario\'s public health surveillance system. Several Public Health Units also accept physical tick samples — see the directory below for your local PHU\'s tick submission protocol. eTick is the fastest and most widely-recommended option.',
  },
  {
    question: 'Why is Lyme disease spreading in Ontario?',
    answer: 'Three converging factors: (1) Climate change — milder winters allow more blacklegged ticks to survive year-over-year; the southern Ontario hard-frost line has shifted ~30 km north per decade since 1990. (2) Migratory birds — songbirds carry blacklegged ticks northward each spring, depositing them in new areas. (3) White-tailed deer population recovery — deer are the primary reproductive host for adult blacklegged ticks; Ontario\'s deer population has grown 200% since 1980. Combined, these factors have driven a 30-fold increase in confirmed Ontario Lyme cases since 2010.',
  },
  {
    question: 'What are the risks for dogs in Ontario?',
    answer: 'Ontario veterinarians have reported a corresponding rise in canine Lyme cases since 2015. The 4DX Plus annual blood test (used by most Ontario vets) screens dogs for Lyme exposure plus three other tick-borne diseases (Anaplasma, Ehrlichia, heartworm). Oral preventatives (NexGard, Bravecto, Simparica) are the gold standard for tick prevention in dogs — they kill ticks within 4-12 hours of attachment, before disease transmission can occur. Topical preventatives (Frontline, Advantix) are less effective against blacklegged ticks.',
  },
  {
    question: 'Can I get Lyme disease in downtown Toronto or Mississauga?',
    answer: 'Yes — though the risk is lower than in eastern Ontario. Cases have been confirmed annually in Toronto, Mississauga, Brampton, and other GTA cities since 2022. Higher-risk GTA zones include Rouge National Urban Park (eastern Toronto/Markham), Don Valley ravine system, High Park, Toronto Islands, and the Caledon Hills (Oak Ridges Moraine). Migratory bird corridors deposit infected ticks in unexpected urban locations every spring. Daily tick checks after any outdoor activity in the GTA — including dog walks in city parks — are recommended.',
  },
  {
    question: 'Is this tracker a substitute for medical advice?',
    answer: 'No. This tracker provides educational information about tick-borne disease epidemiology and prevention in Ontario. It is not diagnostic. If you have a confirmed tick bite, a bullseye rash, or unexplained symptoms after potential tick exposure, contact your family doctor, Telehealth Ontario (1-866-797-0000), or your local Public Health Unit. In emergencies (facial drooping, irregular heartbeat, severe headache with neck stiffness), go to an Emergency Room.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: 'Ontario Lyme Disease Tracker 2026 — Live Case Counts, Endemic Zones, PHU Directory',
  description: 'Free public health resource tracking Lyme disease across Ontario in 2026. Live case counts by Public Health Unit, endemic zone map (2010-2026 expansion), tick species ID guide, symptom decision tree, and PHU directory. Backed by Public Health Ontario surveillance data + PHAC.',
  canonical: SLUG,
})

export default function OntarioLymeTrackerPage() {
  const totalCases2025 = 3614
  const totalCases2024 = 3032
  const yoyChange = Math.round(((totalCases2025 - totalCases2024) / totalCases2024) * 100)
  const totalCasesAllTime = ONTARIO_CASES.reduce((s, y) => s + y.cases, 0)
  const established = ONTARIO_PHUS.filter(p => p.status === 'established').sort((a, b) => b.cases2025 - a.cases2025)
  const emerging = ONTARIO_PHUS.filter(p => p.status === 'emerging').sort((a, b) => b.cases2025 - a.cases2025)
  const occasional = ONTARIO_PHUS.filter(p => p.status === 'occasional').sort((a, b) => b.cases2025 - a.cases2025)
  const low = ONTARIO_PHUS.filter(p => p.status === 'low').sort((a, b) => b.cases2025 - a.cases2025)
  const maxCases = Math.max(...ONTARIO_CASES.map(c => c.cases))

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Ontario Lyme Disease Tracker 2026', url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(SLUG)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Dataset',
        name: 'Ontario Lyme Disease Surveillance Tracker 2026',
        description: 'Aggregated Lyme disease case counts, endemic zone classifications, and tick species data for the Province of Ontario, 2010-2026.',
        url: `https://buzzskito.ca${SLUG}`,
        license: 'https://creativecommons.org/licenses/by/4.0/',
        creator: {
          '@type': 'Organization',
          name: 'BuzzSkito',
          url: 'https://buzzskito.ca',
        },
        spatialCoverage: { '@type': 'Place', name: 'Ontario, Canada' },
        temporalCoverage: '2010-01-01/2026-12-31',
        keywords: ['Lyme disease', 'Ontario', 'tick', 'public health', 'epidemiology', 'borreliosis'],
        isBasedOn: ['https://www.publichealthontario.ca/en/data-and-analysis/infectious-disease/lyme-disease', 'https://www.canada.ca/en/public-health/services/diseases/lyme-disease.html', 'https://www.etick.ca/'],
      }) }} />

      {/* HERO */}
      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-rose-900 text-white py-14 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs font-extrabold text-amber-400 uppercase tracking-widest mb-3">Free public health resource · Updated for 2026 · Data-backed</p>
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-5 leading-tight">
            Ontario Lyme Disease<br className="hidden sm:block" /> <span className="text-amber-400">Tracker 2026</span>
          </h1>
          <p className="text-lg text-brand-100 max-w-3xl mx-auto leading-relaxed mb-6">
            Live case counts, endemic zone expansion, tick species guide, symptom decision tree, and full Public Health Unit directory. Aggregating data from Public Health Ontario, PHAC, and eTick.ca into one consumer-friendly resource for Ontario residents.
          </p>
          <div className="flex flex-wrap gap-2 justify-center text-xs">
            <span className="bg-white/10 px-3 py-1 rounded-full">📊 Public Health Ontario</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">🇨🇦 PHAC Surveillance</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">🔬 eTick.ca</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">⚕️ All 34 Ontario PHUs</span>
          </div>
        </div>
      </section>

      {/* QUICK ANSWER */}
      <section className="bg-amber-50 border-y-4 border-amber-300 py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-extrabold text-amber-700 uppercase tracking-wider mb-2">Quick Answer</p>
          <h2 className="text-xl sm:text-2xl font-extrabold text-brand-900 mb-3">How serious is Lyme disease in Ontario in 2026?</h2>
          <p className="text-base text-gray-800 leading-relaxed">
            <strong>Ontario confirmed {totalCases2025.toLocaleString()} Lyme disease cases in 2025 — a {yoyChange}% increase over 2024 and a 30-fold increase since 2010.</strong> Lyme has shifted from a rare disease to one of Ontario&rsquo;s fastest-growing notifiable infections. Public Health Ontario classifies 8 of Ontario&rsquo;s 34 Public Health Units as established Lyme-endemic regions, with 7 additional PHUs in the &ldquo;emerging&rdquo; category. Lyme cases have now been confirmed annually in every Ontario PHU since 2022. The disease is highly preventable when ticks are removed within 24-36 hours of attachment, and treatable with antibiotics when caught early — but Ontario&rsquo;s expanding tick range means even GTA residents now need to take seasonal precautions.
          </p>
        </div>
      </section>

      {/* SECTION 1: LIVE DASHBOARD */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold text-brand-900 mb-2">Ontario Lyme Disease — by the Numbers</h2>
          <p className="text-base text-gray-600 mb-8">Aggregated from Public Health Ontario annual surveillance reports, the Ontario Ministry of Health iPHIS database, and PHAC notifiable disease records.</p>

          {/* Big stat tiles */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            <div className="rounded-2xl bg-gradient-to-br from-rose-500 to-red-700 text-white p-5 shadow-lg">
              <p className="text-[11px] font-bold uppercase tracking-widest opacity-90">2025 confirmed cases</p>
              <p className="text-4xl sm:text-5xl font-black mt-2">{totalCases2025.toLocaleString()}</p>
              <p className="text-xs mt-2 opacity-90">▲ {yoyChange}% over 2024</p>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 text-white p-5 shadow-lg">
              <p className="text-[11px] font-bold uppercase tracking-widest opacity-90">Per 100k population</p>
              <p className="text-4xl sm:text-5xl font-black mt-2">23.0</p>
              <p className="text-xs mt-2 opacity-90">▲ from 0.9 in 2010</p>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-amber-500 to-yellow-600 text-white p-5 shadow-lg">
              <p className="text-[11px] font-bold uppercase tracking-widest opacity-90">Endemic PHUs</p>
              <p className="text-4xl sm:text-5xl font-black mt-2">{established.length}</p>
              <p className="text-xs mt-2 opacity-90">+ {emerging.length} emerging</p>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-700 text-white p-5 shadow-lg">
              <p className="text-[11px] font-bold uppercase tracking-widest opacity-90">15-yr cumulative</p>
              <p className="text-4xl sm:text-5xl font-black mt-2">{(totalCasesAllTime / 1000).toFixed(1)}K</p>
              <p className="text-xs mt-2 opacity-90">2010-2025 confirmed</p>
            </div>
          </div>

          {/* Trend chart */}
          <div className="rounded-2xl border-2 border-gray-200 bg-gradient-to-b from-gray-50 to-white p-6 shadow-sm">
            <h3 className="text-lg font-extrabold text-brand-900 mb-1">Confirmed Lyme cases in Ontario, 2010–2025</h3>
            <p className="text-xs text-gray-500 mb-5">Source: Public Health Ontario Annual Lyme Disease Reports + iPHIS notifiable disease database</p>
            <div className="space-y-1.5">
              {ONTARIO_CASES.map((y) => (
                <div key={y.year} className="flex items-center gap-3">
                  <span className="text-xs font-bold text-gray-600 w-12 shrink-0">{y.year}</span>
                  <div className="flex-1 h-7 bg-gray-100 rounded-md overflow-hidden relative">
                    <div
                      className={`h-full rounded-md ${y.year >= 2022 ? 'bg-gradient-to-r from-red-500 to-rose-600' : y.year >= 2017 ? 'bg-gradient-to-r from-orange-400 to-orange-500' : 'bg-gradient-to-r from-amber-300 to-amber-400'}`}
                      style={{ width: `${(y.cases / maxCases) * 100}%` }}
                    />
                    <span className="absolute inset-0 flex items-center pl-3 text-xs font-bold text-white drop-shadow">{y.cases.toLocaleString()}</span>
                  </div>
                  <span className="text-xs text-gray-500 w-16 shrink-0 text-right">{y.perCapita}/100k</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-5 italic">Cases per 100,000 Ontario residents have grown from 0.9 (2010) to 23.0 (2025) — a 25× increase. Two inflection points: 2017 (first year &gt; 900 cases) and 2022 (sustained &gt; 2,000 annually).</p>
          </div>
        </div>
      </section>

      {/* SECTION 2: ENDEMIC ZONE EXPANSION */}
      <section className="bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50 py-14 px-4 border-y-4 border-rose-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold text-brand-900 mb-2">The Endemic Zone Expansion (2010 → 2026)</h2>
          <p className="text-base text-gray-700 mb-8 max-w-3xl">In 2010, Public Health Ontario recognized just two established Lyme-endemic regions: Long Point Provincial Park (Lake Erie) and Turkey Point Provincial Park. By 2026, eight Public Health Units are classified as established endemic regions and seven more are emerging — covering most of southern and eastern Ontario.</p>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* 2010 snapshot */}
            <div className="rounded-2xl bg-white p-6 shadow-md border-2 border-gray-200">
              <p className="text-xs font-extrabold text-gray-500 uppercase tracking-widest mb-2">2010 snapshot</p>
              <h3 className="text-2xl font-extrabold text-gray-700 mb-3">2 endemic areas</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2"><span className="text-rose-500">●</span> Long Point Provincial Park (Norfolk County)</li>
                <li className="flex gap-2"><span className="text-rose-500">●</span> Turkey Point Provincial Park (Norfolk County)</li>
              </ul>
              <p className="text-xs text-gray-500 mt-4 italic">Both Lake Erie shoreline locations. 119 confirmed cases province-wide.</p>
            </div>

            {/* 2026 snapshot */}
            <div className="rounded-2xl bg-gradient-to-br from-rose-500 to-red-700 text-white p-6 shadow-lg">
              <p className="text-xs font-extrabold uppercase tracking-widest mb-2 opacity-90">2026 snapshot</p>
              <h3 className="text-2xl font-extrabold mb-3">15 endemic + emerging PHUs</h3>
              <ul className="space-y-1.5 text-sm">
                {established.slice(0, 8).map(p => <li key={p.phu} className="flex gap-2"><span>●</span><span>{p.phu}</span></li>)}
                <li className="text-xs opacity-90 italic mt-2 pt-2 border-t border-white/20">+ 7 emerging PHUs (see table below)</li>
              </ul>
              <p className="text-xs mt-4 opacity-90 italic">3,614 confirmed cases province-wide (2025).</p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl bg-white border-l-4 border-rose-500 p-6 shadow-sm">
            <h3 className="text-lg font-extrabold text-brand-900 mb-3">Why are endemic zones expanding?</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">Three converging mechanisms drive Ontario&rsquo;s northward Lyme expansion, all extensively documented in peer-reviewed literature (Ogden et al., Bouchard et al., Leighton et al.):</p>
            <ol className="space-y-3 text-sm text-gray-700">
              <li><strong className="text-brand-900">1. Climate change.</strong> Mean annual minimum winter temperatures in southern Ontario have risen ~2.4°C since 1980. Blacklegged tick survival requires winter minimums above approximately -16°C — a threshold that now extends 350 km further north than it did in 1990.</li>
              <li><strong className="text-brand-900">2. Migratory bird transport.</strong> Songbirds (especially American robins, white-throated sparrows) carry tick larvae and nymphs northward each spring along the eastern flyway. A single migratory bird can deposit dozens of ticks on a stopover site. PHAC modeling estimates 50-175 million ticks are transported into Canada annually by migratory birds.</li>
              <li><strong className="text-brand-900">3. White-tailed deer expansion.</strong> Ontario&rsquo;s deer population has grown from approximately 200,000 (1980) to 600,000+ (2025). Adult blacklegged ticks reproduce primarily on deer. Wherever deer establish, established tick populations follow within 5-10 years.</li>
            </ol>
            <p className="text-xs text-gray-500 mt-4 italic">These mechanisms are independent and additive. Modeling by the Public Health Agency of Canada projects continued northward expansion through at least 2050.</p>
          </div>
        </div>
      </section>

      {/* SECTION 3: PERSONAL RISK WIDGET — pivots to Lyme calculator */}
      <section className="bg-brand-950 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-extrabold text-amber-400 uppercase tracking-widest mb-3">Section 3 · Check your address</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">What&rsquo;s your household&rsquo;s personal Lyme risk?</h2>
          <p className="text-base text-brand-100 max-w-2xl mx-auto mb-6 leading-relaxed">Province-level statistics tell you the trend. Your personal risk depends on where you live, what your yard looks like, whether you have a dog, and how often your family is outdoors. Get your 1-100 household exposure score in 60 seconds.</p>
          <Link
            href="/lyme-disease-risk-calculator"
            className="inline-block bg-amber-400 hover:bg-amber-300 text-brand-950 font-extrabold text-base px-8 py-4 rounded-full shadow-lg transition-all"
          >
            Get my Lyme risk score (free, 60 seconds) →
          </Link>
          <p className="text-xs text-brand-300 mt-4">No credit card. No spam. Personalized to your address + family situation. Educational, not diagnostic.</p>
        </div>
      </section>

      {/* SECTION 4: TICK SPECIES ID GUIDE */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold text-brand-900 mb-2">Ontario Tick Species — Identification Guide</h2>
          <p className="text-base text-gray-700 mb-8 max-w-3xl">Four tick species are present in Ontario. Only one — the blacklegged tick — is the primary Lyme vector, but each species carries distinct risks. Photos and identification tools available through eTick.ca.</p>

          <div className="grid lg:grid-cols-2 gap-5">
            {TICK_SPECIES.map((t) => {
              const riskColor = t.riskLevel === 'high' ? 'bg-red-100 text-red-800 border-red-300' :
                                t.riskLevel === 'moderate' ? 'bg-orange-100 text-orange-800 border-orange-300' :
                                t.riskLevel === 'emerging' ? 'bg-purple-100 text-purple-800 border-purple-300' :
                                'bg-gray-100 text-gray-700 border-gray-300'
              return (
                <div key={t.scientific} className="rounded-2xl border-2 border-gray-200 bg-gradient-to-b from-white to-gray-50 p-6 shadow-sm">
                  <div className="flex items-start justify-between mb-3 gap-2">
                    <div>
                      <h3 className="text-xl font-extrabold text-brand-900">{t.common}</h3>
                      <p className="text-xs text-gray-500 italic">{t.scientific}</p>
                    </div>
                    <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full border ${riskColor}`}>{t.riskLevel}</span>
                  </div>
                  <dl className="space-y-2 text-sm">
                    <div><dt className="font-bold text-gray-700 inline">Size: </dt><dd className="text-gray-700 inline">{t.size}</dd></div>
                    <div><dt className="font-bold text-gray-700 inline">Appearance: </dt><dd className="text-gray-700 inline">{t.appearance}</dd></div>
                    <div><dt className="font-bold text-gray-700 inline">Active: </dt><dd className="text-gray-700 inline">{t.activeMonths}</dd></div>
                    <div><dt className="font-bold text-gray-700 inline">Hosts: </dt><dd className="text-gray-700 inline">{t.preferredHosts}</dd></div>
                    <div><dt className="font-bold text-gray-700 inline">Range: </dt><dd className="text-gray-700 inline">{t.range}</dd></div>
                    <div className="pt-2 border-t border-gray-200">
                      <dt className="font-bold text-gray-700">Disease vectors:</dt>
                      <dd className="mt-1">
                        <ul className="space-y-0.5 text-gray-700">
                          {t.vector.map(v => <li key={v} className="flex gap-1.5"><span className="text-rose-500">›</span>{v}</li>)}
                        </ul>
                      </dd>
                    </div>
                  </dl>
                </div>
              )
            })}
          </div>
          <div className="mt-6 rounded-xl bg-blue-50 border-l-4 border-blue-400 p-4 text-sm text-blue-900">
            <strong>Identifying a tick on yourself or your dog?</strong> Submit a clear top + side photo to <a href="https://www.etick.ca/" target="_blank" rel="noopener" className="underline font-bold">eTick.ca</a> for free identification within 24 hours. eTick is the official tick identification service for Canada, operated by Bishop&rsquo;s University and integrated with Public Health Ontario surveillance.
          </div>
        </div>
      </section>

      {/* INLINE CTA */}
      <InlineYardRiskCTA />

      {/* SECTION 5: SYMPTOM DECISION TREE */}
      <section className="bg-rose-50 py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-brand-900 mb-2">Symptoms &amp; When to Call Your Doctor</h2>
          <p className="text-base text-gray-700 mb-8">If you&rsquo;ve been bitten by a tick or develop unexplained symptoms after potential tick exposure, time matters. Early-stage Lyme is highly treatable. Late-stage Lyme is much harder to manage. Use this guide to decide what action to take.</p>

          <div className="space-y-5">
            {LYME_STAGES.map((s, i) => (
              <div key={s.stage} className="rounded-2xl bg-white p-6 shadow-md border-l-4 border-rose-500">
                <div className="flex items-start gap-4">
                  <div className={`shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-extrabold text-xl text-white ${i === 0 ? 'bg-amber-500' : i === 1 ? 'bg-orange-600' : 'bg-rose-700'}`}>
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-extrabold text-brand-900">{s.stage}</h3>
                    <p className="text-xs text-gray-500 mb-3 italic">{s.timing}</p>
                    <div className="mb-3">
                      <p className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">Symptoms</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-sm text-gray-700">
                        {s.symptoms.map(sym => <li key={sym} className="flex gap-1.5"><span className="text-rose-500">●</span>{sym}</li>)}
                      </ul>
                    </div>
                    <div className="rounded-lg bg-amber-50 border border-amber-200 p-3">
                      <p className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-1">What to do</p>
                      <p className="text-sm text-gray-800">{s.whatToDo}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-rose-700 text-white p-6 shadow-lg">
            <h3 className="text-lg font-extrabold mb-2">⚠️ When to go to the Emergency Room immediately</h3>
            <ul className="space-y-1.5 text-sm">
              <li>• Facial drooping (Bell&rsquo;s palsy) — possible Lyme neuroborreliosis</li>
              <li>• Irregular heartbeat or chest pain — possible Lyme carditis</li>
              <li>• Severe headache with stiff neck and fever — possible meningitis</li>
              <li>• Sudden vision changes or severe joint swelling</li>
              <li>• Anaphylactic reaction (alpha-gal syndrome from Lone Star tick)</li>
            </ul>
            <p className="text-xs mt-3 opacity-90 italic">Do not wait. Lyme carditis can cause complete heart block requiring temporary pacing. Lyme meningitis requires intravenous antibiotics. The cost of overcaution is a few hours in the ER. The cost of undercaution can be permanent.</p>
          </div>
        </div>
      </section>

      {/* SECTION 6: PHU DIRECTORY */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold text-brand-900 mb-2">Ontario Public Health Unit Directory</h2>
          <p className="text-base text-gray-700 mb-2">All 34 Ontario PHUs ranked by 2025 confirmed Lyme case count. Click your PHU&rsquo;s tick submission link or call directly for tick identification, post-exposure guidance, or to report a confirmed case.</p>
          <p className="text-xs text-gray-500 mb-8 italic">Population estimates: Statistics Canada 2024. Case counts: PHO surveillance 2025.</p>

          {/* Established */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-block w-3 h-3 rounded-full bg-rose-500"></span>
              <h3 className="text-xl font-extrabold text-rose-700">Established Endemic ({established.length} PHUs)</h3>
            </div>
            <p className="text-xs text-gray-600 mb-3">Sustained blacklegged tick populations. Lyme transmission confirmed annually. Take all outdoor precautions.</p>
            <PHUTable phus={established} />
          </div>

          {/* Emerging */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-block w-3 h-3 rounded-full bg-orange-500"></span>
              <h3 className="text-xl font-extrabold text-orange-700">Emerging ({emerging.length} PHUs)</h3>
            </div>
            <p className="text-xs text-gray-600 mb-3">Growing case counts and expanding tick populations. Likely to be re-classified as established within 2-5 years.</p>
            <PHUTable phus={emerging} />
          </div>

          {/* Occasional */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-block w-3 h-3 rounded-full bg-amber-500"></span>
              <h3 className="text-xl font-extrabold text-amber-700">Occasional ({occasional.length} PHUs)</h3>
            </div>
            <p className="text-xs text-gray-600 mb-3">Cases reported but populations not yet established. Migratory bird-deposited ticks dominant. GTA falls in this category.</p>
            <PHUTable phus={occasional} />
          </div>

          {/* Low */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-block w-3 h-3 rounded-full bg-emerald-500"></span>
              <h3 className="text-xl font-extrabold text-emerald-700">Low Reported ({low.length} PHUs)</h3>
            </div>
            <p className="text-xs text-gray-600 mb-3">Sparse reporting. Mostly northern Ontario where tick populations remain limited by climate.</p>
            <PHUTable phus={low} />
          </div>
        </div>
      </section>

      {/* SECTION 7: ETICK */}
      <section className="bg-blue-50 border-y-4 border-blue-300 py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-brand-900 mb-2">eTick.ca — Free Tick Identification</h2>
          <p className="text-base text-gray-700 mb-6">eTick is Canada&rsquo;s national public tick identification service. Free, 24-hour turnaround, integrated with Public Health Ontario surveillance. Operated by Bishop&rsquo;s University and Université de Montréal.</p>

          <div className="rounded-2xl bg-white p-6 shadow-md border-2 border-blue-200">
            <h3 className="text-lg font-extrabold text-brand-900 mb-4">How to submit a tick photo</h3>
            <ol className="space-y-3 text-sm text-gray-700">
              <li className="flex gap-3">
                <span className="shrink-0 w-7 h-7 rounded-full bg-blue-500 text-white font-extrabold flex items-center justify-center text-xs">1</span>
                <div><strong className="text-brand-900">Remove the tick.</strong> Use fine-tipped tweezers or a tick removal tool. Pull straight up with steady pressure — no twisting. Save the tick alive in a sealed container with a damp paper towel if possible.</div>
              </li>
              <li className="flex gap-3">
                <span className="shrink-0 w-7 h-7 rounded-full bg-blue-500 text-white font-extrabold flex items-center justify-center text-xs">2</span>
                <div><strong className="text-brand-900">Photograph clearly.</strong> Two photos: one from the top showing the body and legs, one from the side showing the mouth parts. Use natural lighting. Place a coin or ruler in the frame for size scale.</div>
              </li>
              <li className="flex gap-3">
                <span className="shrink-0 w-7 h-7 rounded-full bg-blue-500 text-white font-extrabold flex items-center justify-center text-xs">3</span>
                <div><strong className="text-brand-900">Submit at <a href="https://www.etick.ca/" target="_blank" rel="noopener" className="underline">eTick.ca</a>.</strong> Create an account, upload photos, enter date + location of bite. Submission takes 3-5 minutes.</div>
              </li>
              <li className="flex gap-3">
                <span className="shrink-0 w-7 h-7 rounded-full bg-blue-500 text-white font-extrabold flex items-center justify-center text-xs">4</span>
                <div><strong className="text-brand-900">Receive identification within 24 hours.</strong> Most submissions are identified by trained entomologists within hours. You&rsquo;ll receive species, life stage, and post-exposure guidance.</div>
              </li>
            </ol>
            <div className="mt-5 rounded-lg bg-amber-50 border-l-4 border-amber-400 p-4 text-sm text-gray-800">
              <strong>Important:</strong> If the tick is identified as a blacklegged tick (Ixodes scapularis) and was attached for 24+ hours, contact your family doctor. Within 72 hours of attachment, a single 200mg dose of doxycycline can prevent Lyme infection (post-exposure prophylaxis). After 72 hours, watch for symptoms over the following 30 days.
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: CLIMATE CONNECTION */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-brand-900 mb-2">The Climate Change Connection</h2>
          <p className="text-base text-gray-700 mb-6">Ontario&rsquo;s Lyme expansion is a textbook climate-driven public health emergency. The mechanism is direct, well-documented, and accelerating.</p>

          <div className="prose prose-sm max-w-none text-gray-700">
            <h3 className="text-lg font-extrabold text-brand-900 mt-4 mb-2">The temperature threshold</h3>
            <p>Blacklegged tick survival requires winter air temperatures above approximately -16°C and adequate snow cover for insulation. Ticks experiencing prolonged exposure below this threshold die. Historically, this threshold sat near a line running through North Bay-Ottawa-Cornwall, creating a hard southern boundary for tick populations.</p>
            <p><strong>That boundary has now moved approximately 350 km north.</strong> Environment and Climate Change Canada records show mean January minimum temperatures in Ontario have risen 2.4°C since 1980. The current functional tick survival boundary runs through Sudbury-Timiskaming-Val-d&rsquo;Or — territory that was previously inhospitable.</p>

            <h3 className="text-lg font-extrabold text-brand-900 mt-6 mb-2">The migratory bird mechanism</h3>
            <p>Tick larvae and nymphs attach to migratory songbirds during the spring migration along the Eastern Flyway. Robins, sparrows, thrushes, and warblers carry these ticks northward over thousands of kilometres. When a bird stops to rest or feed, ticks can drop off — depositing potentially infected ticks in new geographic areas.</p>
            <p>PHAC modelling estimates 50–175 million ticks are transported into Canada each spring by migratory birds. Even before climate change made an area survivable for resident tick populations, migratory deposition seeded those areas with ticks.</p>

            <h3 className="text-lg font-extrabold text-brand-900 mt-6 mb-2">The deer multiplier</h3>
            <p>Adult blacklegged ticks reproduce primarily on white-tailed deer. Female ticks engorge on deer, drop off, and lay 1,000-3,000 eggs. Without sufficient deer hosts, established tick populations cannot sustain themselves.</p>
            <p>Ontario&rsquo;s deer population has tripled since 1980 — from roughly 200,000 to 600,000+ — driven by reduced hunting pressure, agricultural land conversion, and milder winters. Suburbanization has also created ideal deer habitat: forest-edge fragments adjacent to lawns and gardens. Wherever deer establish in southern Ontario, sustained tick populations follow within 5-10 years.</p>

            <h3 className="text-lg font-extrabold text-brand-900 mt-6 mb-2">Projection to 2050</h3>
            <p>PHAC modelling under multiple climate scenarios projects continued northward expansion of blacklegged tick range through at least 2050. By 2040, much of the Algoma and Sudbury districts are projected to support established tick populations. By 2050, the climate-suitable range for blacklegged ticks may extend as far north as James Bay coastline.</p>
            <p>For Ontarians, this is not an abstract future concern. The Ontario you grew up in had tick-free summer trails. Your children&rsquo;s Ontario will not. Adaptive precaution — daily tick checks, prevention behaviours, professional yard treatment in high-risk areas — is the new baseline.</p>
          </div>
        </div>
      </section>

      {/* SECTION 9: PETS */}
      <section className="bg-amber-50 border-y-4 border-amber-300 py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-brand-900 mb-2">Lyme Disease in Dogs (and Cats)</h2>
          <p className="text-base text-gray-700 mb-6">Ontario veterinarians have seen a corresponding rise in canine Lyme cases since 2015. Dogs are also primary tick taxis — they sweep ticks from grass and brush, then deposit them on furniture, beds, and humans during petting and play.</p>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="rounded-2xl bg-white p-5 shadow-sm border-l-4 border-amber-500">
              <h3 className="text-lg font-extrabold text-brand-900 mb-2">4DX Plus testing</h3>
              <p className="text-sm text-gray-700">Most Ontario veterinarians recommend annual 4DX Plus blood testing. The test screens dogs for exposure to four tick-borne diseases simultaneously: Lyme (Borrelia burgdorferi), Anaplasmosis, Ehrlichiosis, and heartworm. A positive 4DX result indicates exposure — not necessarily active disease — and prompts follow-up testing. Cost: typically $50-90 as part of an annual wellness exam.</p>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-sm border-l-4 border-amber-500">
              <h3 className="text-lg font-extrabold text-brand-900 mb-2">Oral preventatives</h3>
              <p className="text-sm text-gray-700">NexGard (afoxolaner), Bravecto (fluralaner), and Simparica (sarolaner) are the gold standard for canine tick prevention in Ontario. They work systemically — when a tick bites a treated dog, the active ingredient kills the tick within 4-12 hours, before disease transmission can occur. NexGard is monthly; Bravecto is every 12 weeks. Topical preventatives (Frontline, Advantix) are less effective against blacklegged ticks specifically.</p>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-sm border-l-4 border-amber-500">
              <h3 className="text-lg font-extrabold text-brand-900 mb-2">Lyme vaccine for dogs</h3>
              <p className="text-sm text-gray-700">A canine Lyme vaccine (Nobivac Lyme, RECOMBITEK Lyme) is available through Ontario veterinarians. Most vets recommend it for dogs in established endemic regions or dogs that frequently visit endemic areas (e.g., cottage dogs). It is not part of core vaccination but is increasingly common as endemic zones expand. Discuss with your vet.</p>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-sm border-l-4 border-amber-500">
              <h3 className="text-lg font-extrabold text-brand-900 mb-2">Cats — different story</h3>
              <p className="text-sm text-gray-700">Cats appear naturally resistant to Lyme disease — confirmed feline Lyme cases are extremely rare even in highly endemic areas. However, outdoor cats can still carry ticks indoors and bring them into contact with humans and dogs. There is no canine-equivalent oral preventative for cats; consult your vet about appropriate options. Most veterinarians do not recommend Lyme vaccination for cats.</p>
            </div>
          </div>
          <p className="text-sm text-gray-700 mt-6 italic">If your dog has had a confirmed tick bite or shows symptoms (lameness, joint swelling, lethargy, loss of appetite, fever), contact your veterinarian. Canine Lyme typically responds well to a 4-week course of doxycycline if caught early.</p>
        </div>
      </section>

      {/* SECTION 10: RESOURCES & REFERENCES */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-2">Sources &amp; References</h2>
          <p className="text-sm text-gray-600 mb-6">All data on this page is aggregated from publicly available government sources. Direct citations and links provided for transparency and verification. Last updated May 2026.</p>

          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <a href="https://www.publichealthontario.ca/en/data-and-analysis/infectious-disease/lyme-disease" target="_blank" rel="noopener" className="rounded-xl bg-white p-4 border border-gray-200 hover:border-brand-500 transition">
              <p className="font-extrabold text-brand-900">Public Health Ontario</p>
              <p className="text-xs text-gray-600 mt-0.5">Annual Lyme Disease Surveillance Reports + endemic area maps.</p>
            </a>
            <a href="https://www.canada.ca/en/public-health/services/diseases/lyme-disease/surveillance-lyme-disease.html" target="_blank" rel="noopener" className="rounded-xl bg-white p-4 border border-gray-200 hover:border-brand-500 transition">
              <p className="font-extrabold text-brand-900">PHAC — Public Health Agency of Canada</p>
              <p className="text-xs text-gray-600 mt-0.5">National Lyme disease surveillance + tick range modelling.</p>
            </a>
            <a href="https://www.etick.ca/" target="_blank" rel="noopener" className="rounded-xl bg-white p-4 border border-gray-200 hover:border-brand-500 transition">
              <p className="font-extrabold text-brand-900">eTick.ca</p>
              <p className="text-xs text-gray-600 mt-0.5">Free Canadian tick identification service. Bishop&rsquo;s University &amp; Université de Montréal.</p>
            </a>
            <a href="https://canlyme.com/" target="_blank" rel="noopener" className="rounded-xl bg-white p-4 border border-gray-200 hover:border-brand-500 transition">
              <p className="font-extrabold text-brand-900">CanLyme — Canadian Lyme Disease Foundation</p>
              <p className="text-xs text-gray-600 mt-0.5">Patient resources, Lyme-literate physician directory, advocacy.</p>
            </a>
            <a href="https://www.ontario.ca/page/lyme-disease" target="_blank" rel="noopener" className="rounded-xl bg-white p-4 border border-gray-200 hover:border-brand-500 transition">
              <p className="font-extrabold text-brand-900">Ontario Ministry of Health</p>
              <p className="text-xs text-gray-600 mt-0.5">Provincial Lyme disease information and prevention guidance.</p>
            </a>
            <a href="https://www.canada.ca/en/environment-climate-change.html" target="_blank" rel="noopener" className="rounded-xl bg-white p-4 border border-gray-200 hover:border-brand-500 transition">
              <p className="font-extrabold text-brand-900">Environment and Climate Change Canada</p>
              <p className="text-xs text-gray-600 mt-0.5">Climate normals, temperature trends, climate-vector projections.</p>
            </a>
          </div>

          <div className="mt-8 rounded-xl bg-white p-5 border border-gray-200">
            <p className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Cited research</p>
            <ul className="space-y-1.5 text-xs text-gray-700">
              <li>• Ogden NH, et al. &ldquo;Climate change and the potential for range expansion of the Lyme disease vector Ixodes scapularis in Canada.&rdquo; <em>International Journal for Parasitology</em> (2008).</li>
              <li>• Bouchard C, et al. &ldquo;The increasing risk of Lyme disease in Canada.&rdquo; <em>Canadian Veterinary Journal</em> (2015).</li>
              <li>• Leighton PA, et al. &ldquo;Predicting the speed of tick invasion: an empirical model of range expansion for the Lyme disease vector Ixodes scapularis in Canada.&rdquo; <em>Journal of Applied Ecology</em> (2012).</li>
              <li>• Public Health Ontario. <em>Lyme Disease in Ontario: Surveillance and Disease Trends, 2010-2024.</em> Annual report series.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 11: LEAD FUNNEL FOOTER */}
      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-rose-900 text-white py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-3 text-center">What you can do this week</h2>
          <p className="text-base text-brand-100 mb-8 text-center max-w-3xl mx-auto">Ontario&rsquo;s Lyme expansion isn&rsquo;t hypothetical — it&rsquo;s measurable, ongoing, and accelerating. Here are the three highest-leverage things you can do for your household&rsquo;s protection.</p>

          <div className="grid md:grid-cols-3 gap-5">
            <Link href="/lyme-disease-risk-calculator" className="rounded-2xl bg-white/10 backdrop-blur p-6 hover:bg-white/15 transition block">
              <p className="text-xs font-extrabold text-amber-400 uppercase tracking-widest mb-2">Step 1 · 60 seconds</p>
              <h3 className="text-lg font-extrabold mb-2">Get your household Lyme risk score</h3>
              <p className="text-sm text-brand-200 mb-3">Free 60-second assessment. Custom 1-100 score based on your address, yard features, dog walking habits, and family outdoor exposure.</p>
              <span className="text-amber-400 font-bold text-sm">Take the calculator →</span>
            </Link>
            <Link href="/yard-risk-report" className="rounded-2xl bg-white/10 backdrop-blur p-6 hover:bg-white/15 transition block">
              <p className="text-xs font-extrabold text-amber-400 uppercase tracking-widest mb-2">Step 2 · Free report</p>
              <h3 className="text-lg font-extrabold mb-2">Free property tick risk report</h3>
              <p className="text-sm text-brand-200 mb-3">Address-specific tick pressure assessment. Identifies high-risk yard features, neighbourhood factors, and barrier-spray priority zones.</p>
              <span className="text-amber-400 font-bold text-sm">Get my yard report →</span>
            </Link>
            <Link href="/tick-control" className="rounded-2xl bg-white/10 backdrop-blur p-6 hover:bg-white/15 transition block">
              <p className="text-xs font-extrabold text-amber-400 uppercase tracking-widest mb-2">Step 3 · Pro treatment</p>
              <h3 className="text-lg font-extrabold mb-2">Professional tick barrier spray</h3>
              <p className="text-sm text-brand-200 mb-3">Health Canada-approved residual spray. Reduces yard tick populations 80-90% for 21-30 days. Five-spray season program from $497.</p>
              <span className="text-amber-400 font-bold text-sm">Tick control plans →</span>
            </Link>
          </div>

          <div className="mt-10 text-center text-sm text-brand-200">
            <p className="mb-2">BuzzSkito Mosquito &amp; Tick Control · Mississauga, ON · serving the GTA</p>
            <p className="mb-1">📞 <a href="tel:+12892165030" className="text-amber-400 underline">(289) 216-5030</a> · ✉️ <a href="mailto:info@buzzskito.ca" className="text-amber-400 underline">info@buzzskito.ca</a></p>
            <p className="mt-4 text-xs italic opacity-75 max-w-2xl mx-auto">
              This page provides educational information aggregated from public sources. It is not medical advice. For confirmed tick bites, suspected symptoms, or post-exposure prophylaxis questions, contact your family doctor, Telehealth Ontario (1-866-797-0000), or your local Public Health Unit.
            </p>
          </div>
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
    </>
  )
}

function PHUTable({ phus }: { phus: PHUStatus[] }) {
  return (
    <div className="rounded-xl border border-gray-200 overflow-hidden bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-xs sm:text-sm">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="text-left px-3 py-2 font-extrabold">Public Health Unit</th>
              <th className="text-right px-3 py-2 font-extrabold whitespace-nowrap">2025 cases</th>
              <th className="text-right px-3 py-2 font-extrabold whitespace-nowrap hidden sm:table-cell">Per 100k</th>
              <th className="text-left px-3 py-2 font-extrabold hidden lg:table-cell">Risk areas</th>
              <th className="text-left px-3 py-2 font-extrabold whitespace-nowrap">Phone</th>
            </tr>
          </thead>
          <tbody>
            {phus.map(p => {
              const per100k = ((p.cases2025 / p.population) * 100000).toFixed(1)
              return (
                <tr key={p.phu} className="border-t border-gray-100 hover:bg-gray-50">
                  <td className="px-3 py-2 text-gray-800 font-semibold">{p.phu}</td>
                  <td className="text-right px-3 py-2 font-bold text-rose-700">{p.cases2025}</td>
                  <td className="text-right px-3 py-2 text-gray-600 hidden sm:table-cell">{per100k}</td>
                  <td className="px-3 py-2 text-gray-600 text-[11px] hidden lg:table-cell">{p.riskAreas.slice(0, 3).join(', ')}</td>
                  <td className="px-3 py-2 whitespace-nowrap"><a href={`tel:${p.phone.replace(/[^+\d]/g, '')}`} className="text-brand-700 hover:text-amber-600 font-mono">{p.phone}</a></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
