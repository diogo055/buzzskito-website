import type { Metadata } from 'next'
import Link from 'next/link'
import InlineYardRiskCTA from '@/components/InlineYardRiskCTA'
import { buildMetadata, breadcrumbSchema, faqSchema, speakableSchema } from '@/lib/seo'

const SLUG = '/ontario-lyme-disease-tracker-2026'

// Every figure on this page must trace to a source in the SOURCES array below.
// Do not add a number here without a fetched, citable primary source.
const ACCESSED = '30 July 2026'

// ── ONTARIO LYME CASES — PHAC NATIONAL SURVEILLANCE ──────────────────────────
// Source: Public Health Agency of Canada, Health Infobase, "Annual report:
// Lyme disease and other tick-borne diseases surveillance in Canada".
// Case definition: confirmed + probable cases, as reported by provinces and
// territories to PHAC. 2024 is the most recent published year.
const ONTARIO_CASES = [
  { year: 2022, cases: 1478, nationalTotal: 2525, note: 'Ontario was the largest single contributor to the national total.' },
  { year: 2023, cases: 1859, nationalTotal: 4785, note: '39% of the Canadian total.' },
  { year: 2024, cases: 2369, nationalTotal: 5809, note: '41% of the Canadian total. Up 27% over 2023.' },
]

// ── EARLIER ONTARIO FIGURES PUBLISHED BY PUBLIC HEALTH ONTARIO ───────────────
// Kept separate from the PHAC series above on purpose: these come from a
// different surveillance product with a different reporting cut, so the two
// sets should not be plotted as one continuous line.
const PHO_EARLIER = [
  {
    label: '2017',
    value: '959 cases',
    detail: 'Probable and confirmed Ontario cases, an incidence of 6.7 per 100,000 and three times the 2012–2016 average of 313.',
    source: 'Nelder MP et al., Canada Communicable Disease Report 2018;44(10):231–236 (Public Health Ontario authors)',
  },
  {
    label: '2018',
    value: '612 cases',
    detail: 'Reported Ontario cases, drawn from Public Health Ontario’s Monthly Infectious Diseases Surveillance Report (February 2019).',
    source: 'ClimateData.ca, "Lyme disease in Ontario", citing Public Health Ontario',
  },
  {
    label: '2015–2022',
    value: '7,762 cases',
    detail: 'Total Ontario cases across the eight-year period — 7,213 (92.9%) confirmed and 549 (7.1%) probable, from Ontario’s iPHIS reporting system.',
    source: 'Adams JA et al., Emerging Infectious Diseases 2024;30(10):2006–2015',
  },
]

// ── ONTARIO PUBLIC HEALTH UNIT CONTACT DIRECTORY ─────────────────────────────
// This is a contact directory, not a surveillance dataset. It carries no case
// counts. Names, phone numbers and tick-submission contacts only.
interface PHUContact {
  phu: string
  phone: string
  tickSubmission: string
}

const ONTARIO_PHUS: PHUContact[] = [
  { phu: 'Algoma Public Health',                        phone: '(705) 942-4646',  tickSubmission: 'algomapublichealth.com' },
  { phu: 'Brant County Health Unit',                    phone: '(519) 753-4937',  tickSubmission: 'bchu.org' },
  { phu: 'Chatham-Kent Public Health',                  phone: '(519) 352-7270',  tickSubmission: 'ckphu.com' },
  { phu: 'Durham Region Health Department',             phone: '(905) 668-2020',  tickSubmission: 'durham.ca' },
  { phu: 'Eastern Ontario Health Unit',                 phone: '(613) 933-1375',  tickSubmission: 'eohu.ca' },
  { phu: 'Grey Bruce Health Unit',                      phone: '(519) 376-9420',  tickSubmission: 'publichealthgreybruce.on.ca' },
  { phu: 'Haldimand-Norfolk Health Unit',               phone: '(519) 426-6170',  tickSubmission: 'hnhu.org' },
  { phu: 'Haliburton, Kawartha, Pine Ridge District',   phone: '(866) 888-4577',  tickSubmission: 'hkpr.on.ca' },
  { phu: 'Halton Region Public Health',                 phone: '(905) 825-6000',  tickSubmission: 'halton.ca' },
  { phu: 'Hamilton Public Health Services',             phone: '(905) 546-3500',  tickSubmission: 'hamilton.ca' },
  { phu: 'Hastings Prince Edward Public Health',        phone: '(613) 966-5500',  tickSubmission: 'hpepublichealth.ca' },
  { phu: 'Huron Perth Public Health',                   phone: '(519) 482-3416',  tickSubmission: 'hpph.ca' },
  { phu: 'Kingston, Frontenac & Lennox & Addington',    phone: '(613) 549-1232',  tickSubmission: 'KFL&A Public Health' },
  { phu: 'Lambton Public Health',                       phone: '(519) 383-8331',  tickSubmission: 'lambtonpublichealth.ca' },
  { phu: 'Leeds, Grenville & Lanark District',          phone: '(613) 345-5685',  tickSubmission: 'healthunit.org' },
  { phu: 'Middlesex-London Health Unit',                phone: '(519) 663-5317',  tickSubmission: 'healthunit.com' },
  { phu: 'Niagara Region Public Health',                phone: '(905) 688-8248',  tickSubmission: 'niagararegion.ca' },
  { phu: 'North Bay Parry Sound District',              phone: '(705) 474-1400',  tickSubmission: 'myhealthunit.ca' },
  { phu: 'Northwestern Health Unit',                    phone: '(807) 468-3147',  tickSubmission: 'nwhu.on.ca' },
  { phu: 'Ottawa Public Health',                        phone: '(613) 580-6744',  tickSubmission: 'ottawapublichealth.ca' },
  { phu: 'Peterborough Public Health',                  phone: '(705) 743-1000',  tickSubmission: 'peterboroughpublichealth.ca' },
  { phu: 'Porcupine Health Unit',                       phone: '(705) 267-1181',  tickSubmission: 'porcupinehu.on.ca' },
  { phu: 'Region of Peel Public Health',                phone: '(905) 799-7700',  tickSubmission: 'peelregion.ca' },
  { phu: 'Region of Waterloo Public Health',            phone: '(519) 575-4400',  tickSubmission: 'regionofwaterloo.ca' },
  { phu: 'Renfrew County & District Health Unit',       phone: '(613) 735-9724',  tickSubmission: 'rcdhu.com' },
  { phu: 'Simcoe Muskoka District Health Unit',         phone: '(705) 721-7330',  tickSubmission: 'simcoemuskokahealth.org' },
  { phu: 'Southwestern Public Health',                  phone: '(519) 631-9900',  tickSubmission: 'swpublichealth.ca' },
  { phu: 'Sudbury & Districts Health Unit',             phone: '(705) 522-9200',  tickSubmission: 'phsd.ca' },
  { phu: 'Thunder Bay District Health Unit',            phone: '(807) 625-5900',  tickSubmission: 'tbdhu.com' },
  { phu: 'Timiskaming Health Unit',                     phone: '(705) 647-4305',  tickSubmission: 'timiskaminghu.com' },
  { phu: 'Toronto Public Health',                       phone: '(416) 338-7600',  tickSubmission: 'toronto.ca/health' },
  { phu: 'Wellington-Dufferin-Guelph Public Health',    phone: '(800) 265-7293',  tickSubmission: 'wdgpublichealth.ca' },
  { phu: 'Windsor-Essex County Health Unit',            phone: '(519) 258-2146',  tickSubmission: 'wechu.org' },
  { phu: 'York Region Public Health',                   phone: '1-877-464-9675',  tickSubmission: 'york.ca' },
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
    activeMonths: 'Spring through late autumn, and any mild day when temperatures are above freezing',
    preferredHosts: 'Mice, chipmunks, deer, dogs, humans',
    range: 'The Lyme vector in Ontario. Public Health Ontario maps where established populations have been found — see the Vector-Borne Disease Tool for the current risk-area map rather than relying on a regional summary.',
    riskLevel: 'high',
  },
  {
    common: 'American dog tick',
    scientific: 'Dermacentor variabilis',
    size: 'Adult: 5mm (pencil eraser). Engorged: pea-sized.',
    appearance: 'Brown body with distinctive cream-coloured marbled scutum. Larger and more visible than blacklegged ticks.',
    vector: ['Rocky Mountain Spotted Fever (rare in Ontario)', 'Tularemia (rare)'],
    activeMonths: 'Late spring through summer',
    preferredHosts: 'Dogs (preferred), humans, livestock',
    range: 'Widespread across southern Ontario and commonly encountered on dogs and humans. Not a Lyme disease vector.',
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
    range: 'Indoor infestations possible. Common in kennels and multi-dog homes, usually introduced by travelling dogs.',
    riskLevel: 'low',
  },
  {
    common: 'Lone Star tick',
    scientific: 'Amblyomma americanum',
    size: 'Adult: 3-4mm. Nymphs: 1-2mm.',
    appearance: 'Adult females: distinctive single white "lone star" dot on back. Males: scattered white markings.',
    vector: ['Ehrlichiosis', 'Alpha-gal syndrome (red meat allergy)', 'Heartland virus', 'STARI (Southern Tick-Associated Rash Illness)'],
    activeMonths: 'Late spring through summer',
    preferredHosts: 'Deer, dogs, humans, ground-feeding birds',
    range: 'Occasionally recorded in southern Ontario and not considered established province-wide. If you think you have found one, submit the photo to eTick.ca so it is captured in surveillance.',
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
    symptoms: ['Erythema migrans (bullseye rash) — a single EM rash was reported in 76.4% of Canadian cases (PHAC Canadian Lyme Disease Enhanced Surveillance, 2009–2019)', 'Fever, chills', 'Fatigue', 'Headache', 'Muscle aches', 'Joint stiffness', 'Swollen lymph nodes'],
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

// ── SOURCES ──────────────────────────────────────────────────────────────────
interface SourceRef {
  publisher: string
  title: string
  url: string
  supports: string
}

const SOURCES: SourceRef[] = [
  {
    publisher: 'Public Health Agency of Canada — Health Infobase',
    title: 'Annual report: Lyme disease and other tick-borne diseases surveillance in Canada',
    url: 'https://health-infobase.canada.ca/zoonoses/ticks/annual-report.html',
    supports: 'Ontario 2,369 cases in 2024 and 1,859 in 2023, a 27% year-over-year increase; Ontario at 41% of the national total in 2024 and 39% in 2023; Canada 5,809 cases in 2024 at 14.1 per 100,000 and 4,785 in 2023 at 11.9; Canada 2,525 in 2022. 2024 is the most recent year published.',
  },
  {
    publisher: 'Public Health Agency of Canada',
    title: 'Lyme disease surveillance, 2022 reporting year (national surveillance summary)',
    url: 'https://www.canada.ca/en/public-health/services/diseases/lyme-disease/surveillance-lyme-disease.html',
    supports: 'Ontario 1,478 cases in 2022, the largest provincial share of the 2,525 confirmed and probable cases reported nationally that year.',
  },
  {
    publisher: 'Public Health Ontario (Nelder MP, Wijayasri S, Russell CB, et al.)',
    title: 'The continued rise of Lyme disease in Ontario, Canada: 2017 — Canada Communicable Disease Report 2018;44(10):231–236',
    url: 'https://pubmed.ncbi.nlm.nih.gov/31524884/',
    supports: '959 probable and confirmed Ontario cases in 2017, an incidence of 6.7 per 100,000, three times the 2012–2016 average of 313.',
  },
  {
    publisher: 'ClimateData.ca (citing Public Health Ontario)',
    title: 'Lyme disease in Ontario',
    url: 'https://climatedata.ca/lyme-disease-in-ontario/',
    supports: '612 Ontario cases reported in 2018, from Public Health Ontario’s Monthly Infectious Diseases Surveillance Report (February 2019). The same page cites a Public Health Ontario extract giving 1,003 cases for 2017 — see the provenance note about why that differs from the 959 in the peer-reviewed report.',
  },
  {
    publisher: 'Adams JA, Osasah V, Paphitis K, et al. — Emerging Infectious Diseases',
    title: 'Age- and Sex-Specific Differences in Lyme Disease Health-Related Behaviors, Ontario, Canada, 2015–2022. Emerg Infect Dis. 2024;30(10):2006–2015',
    url: 'https://wwwnc.cdc.gov/eid/article/30/10/24-0191_article',
    supports: '7,762 Ontario cases reported over 2015–2022, of which 7,213 (92.9%) confirmed and 549 (7.1%) probable, from Ontario’s iPHIS system; roughly a three-fold rise in incidence over that period.',
  },
  {
    publisher: 'Public Health Ontario',
    title: 'Ontario Vector-Borne Disease Tool',
    url: 'https://www.publichealthontario.ca/en/data-and-analysis/infectious-disease/vbd-tool',
    supports: 'The authoritative Ontario source for human case counts (updated weekly) and for the blacklegged tick risk-area map, which is redrawn annually — the 2026 map reflects newly identified or expanded tick risk areas based on 2025 data. Risk areas are mapped as geographic areas, not as public health units.',
  },
  {
    publisher: 'Ghanbari H, Siebels K, Dumas A, et al. — PLOS One',
    title: 'A machine learning framework for estimating the probability of blacklegged tick population establishment in eastern Canada using Earth observation data. PLoS One 2025;20(9):e0332582',
    url: 'https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0332582',
    supports: 'The degree-day mechanism: "Below an approximate threshold of 2800 DD > 0°C, I. scapularis populations cannot establish or persist because the temperatures are too cold for the ticks to complete their lifecycle." Cites Ogden et al. 2005 for the threshold.',
  },
  {
    publisher: 'Ogden NH, Bigras-Poulin M, O’Callaghan CJ, et al. — International Journal for Parasitology',
    title: 'A dynamic population model to investigate effects of climate on geographic range and seasonality of the tick Ixodes scapularis. Int J Parasitol 2005;35(4):375–389',
    url: 'https://pubmed.ncbi.nlm.nih.gov/15777914/',
    supports: 'The original population model behind the 2,800–3,100 cumulative annual degree-days above 0°C requirement for blacklegged tick population persistence.',
  },
  {
    publisher: 'Ogden NH, Maarouf A, Barker IK, et al. — International Journal for Parasitology',
    title: 'Climate change and the potential for range expansion of the Lyme disease vector Ixodes scapularis in Canada. Int J Parasitol 2006;36(1):63–70 (PMID 16229849)',
    url: 'https://pubmed.ncbi.nlm.nih.gov/16229849/',
    supports: 'Mapping of annual degree-days >0°C limits for I. scapularis establishment using temperatures projected for the 2020s, 2050s and 2080s. The paper reports results in general geographic terms and does not name individual Ontario districts or years such as 2040.',
  },
  {
    publisher: 'Ogden NH et al. — Applied and Environmental Microbiology',
    title: 'Role of Migratory Birds in Introduction and Range Expansion of Ixodes scapularis Ticks and of Borrelia burgdorferi and Anaplasma phagocytophilum in Canada (2008)',
    url: 'https://journals.asm.org/doi/full/10.1128/aem.01982-07',
    supports: 'An estimated 50–175 million I. scapularis ticks dispersed into Canada each spring by migratory birds.',
  },
  {
    publisher: 'Public Health Agency of Canada (PLOS One)',
    title: 'Canadian Lyme Disease Enhanced Surveillance system, 2009–2019',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10723709/',
    supports: 'A single erythema migrans rash was the most reported clinical manifestation, present in 76.4% of Canadian cases.',
  },
  {
    publisher: 'Bishop’s University & Université de Montréal',
    title: 'eTick.ca — public tick image identification platform',
    url: 'https://www.etick.ca/',
    supports: 'The free national route for having a tick identified from photographs.',
  },
  {
    publisher: 'Government of Ontario',
    title: 'Lyme disease',
    url: 'https://www.ontario.ca/page/lyme-disease',
    supports: 'Provincial prevention guidance and what to do after a tick bite.',
  },
  {
    publisher: 'Canadian Lyme Disease Foundation',
    title: 'CanLyme',
    url: 'https://canlyme.com/',
    supports: 'Patient resources and physician referral information referenced in the stage guide.',
  },
]

const FAQS = [
  {
    question: 'How many Lyme disease cases were reported in Ontario in 2024?',
    answer: 'Ontario reported 2,369 confirmed and probable Lyme disease cases in 2024, according to the Public Health Agency of Canada’s Health Infobase annual tick-borne disease report. That is a 27% increase over the 1,859 cases reported in 2023, and it represents 41% of Canada’s national total of 5,809 cases. 2024 is the most recent year for which a final provincial figure has been published.',
  },
  {
    question: 'Is there an Ontario Lyme disease case count for 2025?',
    answer: 'No. As of July 2026, neither Public Health Ontario nor the Public Health Agency of Canada had published a final 2025 Lyme disease case count for Ontario. The latest published provincial year is 2024. Public Health Ontario’s Vector-Borne Disease Tool does publish weekly year-to-date counts during the season, but those are provisional and are revised as cases are investigated and classified — they are not a substitute for a finalised annual figure. If you see a 2025 Ontario total quoted anywhere, check whether it traces back to one of those two agencies.',
  },
  {
    question: 'Where is the Ontario tick map for 2026?',
    answer: 'The authoritative tick map for Ontario is the blacklegged tick risk-area layer inside Public Health Ontario’s Ontario Vector-Borne Disease Tool. It is free to consult, it is redrawn every year, and the 2026 version reflects field surveillance collected during the 2025 season. Two things matter when you read it. First, risk areas are drawn as geographic areas built from field data, not along municipal or public health unit lines, so a single health unit can contain both risk areas and areas with no identified risk — you have to look up your own address rather than your city. Second, the same tool publishes weekly in-season human case counts for Lyme, anaplasmosis, babesiosis, Powassan virus and West Nile virus, but those weekly figures are provisional and get revised. BuzzSkito does not publish a competing map: any third-party tick map of Ontario is a redraw of PHO’s, and it is usually a year or more out of date.',
  },
  {
    question: 'Which parts of Ontario have the highest Lyme disease risk?',
    answer: 'Public Health Ontario maps blacklegged tick risk areas through its Ontario Vector-Borne Disease Tool, and those risk areas are drawn as geographic areas rather than along public health unit boundaries — a single health unit can contain risk areas and non-risk areas at the same time. The 2026 map reflects newly identified or expanded risk areas based on 2025 field data. Because the boundaries move every year and do not follow municipal lines, the honest answer is to check the current map for your own address rather than rely on any third-party regional ranking, including ours. BuzzSkito does not publish a regional risk ranking of its own.',
  },
  {
    question: 'How long does a tick need to be attached to transmit Lyme disease?',
    answer: 'Standard public health guidance in Canada and the United States is that blacklegged ticks (Ixodes scapularis) generally need to be attached for at least 24 to 36 hours to transmit Borrelia burgdorferi, the bacterium that causes Lyme disease. The bacteria need time to migrate from the tick gut to its salivary glands. Doing a full tick check within 24 hours of outdoor activity, and removing anything you find, greatly reduces the chance of transmission.',
  },
  {
    question: 'What does early-stage Lyme disease look like?',
    answer: 'The classic early sign is erythema migrans — an expanding rash, often but not always with a bullseye pattern, appearing 3 to 30 days after a tick bite and most commonly at 7 to 14 days. In the Canadian Lyme Disease Enhanced Surveillance data for 2009–2019, a single erythema migrans rash was the most frequently reported clinical manifestation, present in 76.4% of cases. Other early symptoms include fever, chills, fatigue, headache, muscle and joint aches, and swollen lymph nodes. If you see an expanding rash or develop unexplained flu-like symptoms after possible tick exposure, see a doctor promptly — early Lyme responds well to a 14 to 21 day course of doxycycline.',
  },
  {
    question: 'Where can I submit a tick for identification in Ontario?',
    answer: 'eTick.ca is the free public tick identification platform operated by Bishop’s University and the Université de Montréal. You submit clear photos of the tick — one from the top and one from the side — through the website, and trained identifiers return a species identification, usually within about a day. Several Ontario public health units also field tick questions directly; the directory further down this page lists phone numbers and the health unit contact for each one.',
  },
  {
    question: 'Why is Lyme disease spreading in Ontario?',
    answer: 'Two mechanisms are well documented in the peer-reviewed literature. First, temperature: blacklegged tick populations need enough accumulated warmth to complete their life cycle, and the published models use cumulative annual degree-days above 0°C rather than a single winter-cold threshold. Below roughly 2,800 degree-days above 0°C, Ixodes scapularis populations cannot establish or persist (Ghanbari et al., PLOS One 2025, citing Ogden et al. 2005). As accumulated degree-days rise, areas that were previously unsuitable become suitable. Second, dispersal: migratory songbirds carry tick larvae and nymphs north each spring — Ogden and colleagues estimated 50 to 175 million Ixodes scapularis ticks are dispersed into Canada annually by migratory birds (Applied and Environmental Microbiology, 2008). Together these mean ticks are constantly being seeded into new areas, and a growing share of those areas can now support them year-round.',
  },
  {
    question: 'What are the risks for dogs in Ontario?',
    answer: 'Ontario veterinarians commonly recommend annual 4DX Plus blood testing, which screens dogs for exposure to Lyme (Borrelia burgdorferi), Anaplasma, Ehrlichia and heartworm in a single test. Oral preventatives (NexGard, Bravecto, Simparica) work systemically and kill ticks shortly after they bite a treated dog; topical products are generally considered less effective against blacklegged ticks. A canine Lyme vaccine is available in Ontario and is usually discussed for dogs that spend time in areas where blacklegged ticks are established. Talk to your veterinarian about what is appropriate for your dog.',
  },
  {
    question: 'Can I get Lyme disease in the GTA?',
    answer: 'Yes. Blacklegged ticks are present in parts of southern Ontario including the Greater Toronto Area, and migratory birds deposit ticks well outside established populations every spring. Rather than relying on a general statement about a city, check Public Health Ontario’s Vector-Borne Disease Tool risk-area map for your own area, and do a tick check after any outdoor activity — including dog walks in city parks and ravines.',
  },
  {
    question: 'Is this tracker a substitute for medical advice?',
    answer: 'No. This page provides educational information about tick-borne disease surveillance and prevention in Ontario. It is not diagnostic. If you have a confirmed tick bite, an expanding rash, or unexplained symptoms after potential tick exposure, contact your family doctor, Health811 / Telehealth Ontario (1-866-797-0000), or your local public health unit. In emergencies (facial drooping, irregular heartbeat, severe headache with neck stiffness), go to an Emergency Room.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: 'Ontario Lyme Disease Data 2024 + PHU Directory',
  description: "Ontario's tick risk map is redrawn each year by Public Health Ontario — how to read the 2026 version, 2,369 Lyme cases in 2024, and health unit contacts.",
  canonical: SLUG,
})

export default function OntarioLymeTrackerPage() {
  const latest = ONTARIO_CASES[ONTARIO_CASES.length - 1]
  const prior = ONTARIO_CASES[ONTARIO_CASES.length - 2]
  const maxCases = Math.max(...ONTARIO_CASES.map(c => c.cases))

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Ontario Lyme Disease Tracker', url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(SLUG)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Dataset',
        name: 'Ontario Lyme Disease Surveillance Figures and Public Health Unit Tick-Submission Directory',
        description: 'Published Ontario Lyme disease case counts for 2022-2024 as reported by the Public Health Agency of Canada, earlier Public Health Ontario figures, and a contact directory of Ontario public health units for tick submission. Contains no unpublished or estimated case counts.',
        url: `https://buzzskito.ca${SLUG}`,
        datePublished: '2026-05-01',
        dateModified: '2026-07-30',
        distribution: { '@type': 'DataDownload', encodingFormat: 'text/html', contentUrl: `https://buzzskito.ca${SLUG}` },
        license: 'https://creativecommons.org/licenses/by/4.0/',
        creator: {
          '@type': 'Organization',
          name: 'BuzzSkito',
          url: 'https://buzzskito.ca',
        },
        spatialCoverage: { '@type': 'Place', name: 'Ontario, Canada' },
        temporalCoverage: '2015-01-01/2024-12-31',
        keywords: ['Lyme disease', 'Ontario', 'tick', 'public health', 'epidemiology', 'borreliosis'],
        isBasedOn: SOURCES.map(s => s.url),
      }) }} />

      {/* HERO */}
      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-rose-900 text-white py-14 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs font-extrabold text-amber-400 uppercase tracking-widest mb-3">Free public health resource · Every figure sourced · Reviewed {ACCESSED}</p>
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-5 leading-tight">
            Ontario Lyme Disease<br className="hidden sm:block" /> <span className="text-amber-400">Data &amp; Tick Directory</span>
          </h1>
          <p className="text-lg text-brand-100 max-w-3xl mx-auto leading-relaxed mb-6">
            Published Ontario case counts, what they do and do not cover, a tick species guide, a symptom decision tree, and phone and tick-submission contacts for Ontario&rsquo;s public health units. Every number on this page names the agency that published it.
          </p>
          <div className="flex flex-wrap gap-2 justify-center text-xs">
            <span className="bg-white/10 px-3 py-1 rounded-full">🇨🇦 PHAC Health Infobase</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">📊 Public Health Ontario</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">🔬 eTick.ca</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">☎️ Health unit directory</span>
          </div>
        </div>
      </section>

      {/* QUICK ANSWER */}
      <section className="bg-amber-50 border-y-4 border-amber-300 py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-extrabold text-amber-700 uppercase tracking-wider mb-2">Quick Answer</p>
          <h2 className="text-xl sm:text-2xl font-extrabold text-brand-900 mb-3">How much Lyme disease is there in Ontario?</h2>
          <p className="text-base text-gray-800 leading-relaxed">
            <strong>Ontario reported {latest.cases.toLocaleString()} confirmed and probable Lyme disease cases in {latest.year}</strong> — a 27% increase over the {prior.cases.toLocaleString()} cases reported in {prior.year}, and 41% of Canada&rsquo;s national total of {latest.nationalTotal.toLocaleString()} cases. Those figures come from the <a href="https://health-infobase.canada.ca/zoonoses/ticks/annual-report.html" target="_blank" rel="noopener" className="underline font-semibold text-rose-700">Public Health Agency of Canada&rsquo;s annual tick-borne disease surveillance report</a>. <strong>{latest.year} is the most recent year published — there is no released Ontario figure for 2025.</strong> Lyme is highly preventable when ticks are removed within 24 to 36 hours of attachment, and treatable with antibiotics when caught early.
          </p>
        </div>
      </section>

      {/* PROVENANCE */}
      <section className="bg-white pt-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl border-2 border-brand-200 bg-brand-50/40 p-6">
            <h2 className="text-lg font-extrabold text-brand-900 mb-2">Provenance note — read this before citing anything here</h2>
            <ul className="space-y-2 text-sm text-gray-800 leading-relaxed">
              <li>• <strong>The latest published Ontario year is 2024.</strong> No 2025 Ontario or national Lyme disease figure has been released by Public Health Ontario or by the Public Health Agency of Canada as of {ACCESSED}.</li>
              <li>• <strong>This page publishes no estimates.</strong> Every case count below is a number an agency published, attributed to that agency. Where a year has no published figure, that year is simply absent. An earlier version of this page carried a modelled Ontario series including a 2025 total; those figures were not published by any agency and have been removed.</li>
              <li>• <strong>Case definitions differ between sources.</strong> The PHAC series counts confirmed <em>and probable</em> cases as reported by the provinces. Public Health Ontario&rsquo;s own products use a provincial classification and a different reporting cut, so PHO and PHAC totals for the same year can differ. The two sets are shown separately below for that reason and should not be joined into one trend line.</li>
              <li>• <strong>The health unit table is a contact directory, not surveillance data.</strong> It contains no case counts, because none are published at that level for recent years.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 1: PUBLISHED FIGURES */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold text-brand-900 mb-2">Ontario Lyme Disease — the Published Figures</h2>
          <p className="text-base text-gray-600 mb-8">Reported by the Public Health Agency of Canada in its annual tick-borne disease surveillance report. Confirmed and probable cases, as submitted by provinces and territories.</p>

          {/* Big stat tiles */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            <div className="rounded-2xl bg-gradient-to-br from-rose-500 to-red-700 text-white p-5 shadow-lg">
              <p className="text-[11px] font-bold uppercase tracking-widest opacity-90">Ontario cases, {latest.year}</p>
              <p className="text-4xl sm:text-5xl font-black mt-2">{latest.cases.toLocaleString()}</p>
              <p className="text-xs mt-2 opacity-90">Latest published year</p>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 text-white p-5 shadow-lg">
              <p className="text-[11px] font-bold uppercase tracking-widest opacity-90">Change on {prior.year}</p>
              <p className="text-4xl sm:text-5xl font-black mt-2">+27%</p>
              <p className="text-xs mt-2 opacity-90">{prior.cases.toLocaleString()} cases in {prior.year}</p>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-amber-500 to-yellow-600 text-white p-5 shadow-lg">
              <p className="text-[11px] font-bold uppercase tracking-widest opacity-90">Share of Canada</p>
              <p className="text-4xl sm:text-5xl font-black mt-2">41%</p>
              <p className="text-xs mt-2 opacity-90">Ontario&rsquo;s share of the {latest.year} total</p>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-700 text-white p-5 shadow-lg">
              <p className="text-[11px] font-bold uppercase tracking-widest opacity-90">Canada, {latest.year}</p>
              <p className="text-4xl sm:text-5xl font-black mt-2">{latest.nationalTotal.toLocaleString()}</p>
              <p className="text-xs mt-2 opacity-90">14.1 per 100,000 nationally</p>
            </div>
          </div>

          {/* Trend chart */}
          <div className="rounded-2xl border-2 border-gray-200 bg-gradient-to-b from-gray-50 to-white p-6 shadow-sm">
            <h3 className="text-lg font-extrabold text-brand-900 mb-1">Ontario Lyme disease cases, 2022–2024 (PHAC)</h3>
            <p className="text-xs text-gray-500 mb-5">Confirmed and probable cases. Source: <a href="https://health-infobase.canada.ca/zoonoses/ticks/annual-report.html" target="_blank" rel="noopener" className="underline font-semibold">PHAC Health Infobase, annual tick-borne disease surveillance report</a>, accessed {ACCESSED}. Only years with a published Ontario figure are shown.</p>
            <div className="space-y-2">
              {ONTARIO_CASES.map((y) => (
                <div key={y.year} className="flex items-center gap-3">
                  <span className="text-xs font-bold text-gray-600 w-12 shrink-0">{y.year}</span>
                  <div className="flex-1 h-7 bg-gray-100 rounded-md overflow-hidden relative">
                    <div
                      className="h-full rounded-md bg-gradient-to-r from-red-500 to-rose-600"
                      style={{ width: `${(y.cases / maxCases) * 100}%` }}
                    />
                    <span className="absolute inset-0 flex items-center pl-3 text-xs font-bold text-white drop-shadow">{y.cases.toLocaleString()}</span>
                  </div>
                  <span className="text-xs text-gray-500 w-32 shrink-0 text-right hidden sm:block">of {y.nationalTotal.toLocaleString()} nationally</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-5 italic">Ontario cases rose 27% between 2023 and 2024, the change PHAC reports for the province. Canada&rsquo;s national incidence was 14.1 per 100,000 in 2024, up from 11.9 in 2023. PHAC does not publish a separate Ontario incidence rate in this report, so none is shown here.</p>
          </div>

          {/* Earlier PHO figures */}
          <div className="mt-6 rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-extrabold text-brand-900 mb-1">Earlier Ontario figures published by Public Health Ontario</h3>
            <p className="text-xs text-gray-500 mb-5">Shown separately from the PHAC chart above because they come from a different surveillance product with a different reporting cut. Do not plot them as one continuous series with the PHAC numbers.</p>
            <div className="grid sm:grid-cols-3 gap-4">
              {PHO_EARLIER.map((p) => (
                <div key={p.label} className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-gray-500">{p.label}</p>
                  <p className="text-2xl font-black text-brand-900 mt-1">{p.value}</p>
                  <p className="text-xs text-gray-700 mt-2 leading-relaxed">{p.detail}</p>
                  <p className="text-[11px] text-gray-500 mt-2 italic">{p.source}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-600 mt-4 leading-relaxed"><strong>A worked example of why case definitions matter:</strong> the peer-reviewed Public Health Ontario report gives 959 probable and confirmed Ontario cases for 2017, while a later Public Health Ontario extract quoted by ClimateData.ca gives 1,003 for the same year. Neither is wrong — they are different extracts taken at different times under different classifications. It is the reason this page does not merge sources into a single line.</p>
          </div>
        </div>
      </section>

      {/* SECTION 2: HOW ONTARIO MAPS TICK RISK */}
      <section className="bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50 py-14 px-4 border-y-4 border-rose-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold text-brand-900 mb-2">How Ontario Actually Maps Tick Risk</h2>
          <p className="text-base text-gray-700 mb-8 max-w-3xl">There is a widespread misconception — one this page previously repeated — that Ontario classifies public health units as &ldquo;endemic&rdquo; or &ldquo;emerging.&rdquo; It does not. Here is how the province really publishes tick risk, and what that means for reading any map you find online.</p>

          <div className="grid lg:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white p-6 shadow-md border-2 border-gray-200">
              <p className="text-xs font-extrabold text-gray-500 uppercase tracking-widest mb-2">What Public Health Ontario publishes</p>
              <h3 className="text-xl font-extrabold text-brand-900 mb-3">Blacklegged tick risk areas, drawn as geographic areas</h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                Public Health Ontario maps blacklegged tick risk areas through the <a href="https://www.publichealthontario.ca/en/data-and-analysis/infectious-disease/vbd-tool" target="_blank" rel="noopener" className="underline font-semibold text-rose-700">Ontario Vector-Borne Disease Tool</a>. These are geographic areas built from field surveillance, and they do not follow public health unit or municipal boundaries — a single health unit can contain both risk areas and areas with no identified risk.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                The map is redrawn each year. The 2026 map reflects newly identified or expanded tick risk areas based on 2025 field data. The same tool publishes human case counts for Lyme disease, anaplasmosis, babesiosis, Powassan virus and West Nile virus, updated weekly during the season.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-md border-2 border-amber-300">
              <p className="text-xs font-extrabold text-amber-700 uppercase tracking-widest mb-2">What this page no longer claims</p>
              <h3 className="text-xl font-extrabold text-brand-900 mb-3">No endemic tier list, no per-health-unit counts</h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                A previous version of this page sorted Ontario&rsquo;s health units into &ldquo;established endemic,&rdquo; &ldquo;emerging,&rdquo; &ldquo;occasional&rdquo; and &ldquo;low&rdquo; tiers and attributed that grouping to Public Health Ontario. That classification was our own editorial construct, it was driven by case counts that were never published, and it has been removed rather than relabelled.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                If you need to know the risk where you live, the risk-area map is the only authoritative answer, and it is free to consult. We would rather send you there than rank regions ourselves.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                For a plain-language walkthrough of what Public Health Ontario has already classified across the GTA &mdash; the Don Valley, Rouge Park, Credit River, Bronte Creek, 16 Mile Creek and the Oak Ridges Moraine among them &mdash; see our summary of <Link href="/blog/lyme-disease-risk-areas-ontario-2026" className="underline font-semibold text-rose-700">blacklegged tick risk areas in Ontario</Link>. It reports PHO&rsquo;s classifications; it is not a ranking of our own.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl bg-white border-l-4 border-rose-500 p-6 shadow-sm">
            <h3 className="text-lg font-extrabold text-brand-900 mb-3">Why the suitable range is growing</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">Two mechanisms are documented in the peer-reviewed literature. Both are about where ticks can complete a life cycle and how they get there — not about any single cold-snap temperature.</p>
            <ol className="space-y-3 text-sm text-gray-700">
              <li><strong className="text-brand-900">1. Accumulated warmth, measured in degree-days.</strong> Blacklegged tick establishment is modelled using cumulative annual degree-days above 0°C, not winter minimum temperatures. <a href="https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0332582" target="_blank" rel="noopener" className="underline font-semibold text-rose-700">Ghanbari et al. (PLOS One, 2025)</a> state it directly: &ldquo;Below an approximate threshold of 2800 DD &gt; 0°C, <em>I. scapularis</em> populations cannot establish or persist because the temperatures are too cold for the ticks to complete their lifecycle&rdquo; — citing <a href="https://pubmed.ncbi.nlm.nih.gov/15777914/" target="_blank" rel="noopener" className="underline font-semibold text-rose-700">Ogden et al. (Int J Parasitol, 2005)</a>, the population model that produced the roughly 2,800–3,100 degree-day requirement. As accumulated degree-days rise, places that previously could not hold a population can.</li>
              <li><strong className="text-brand-900">2. Migratory bird transport.</strong> Songbirds carry tick larvae and nymphs northward each spring along the eastern flyway, dropping them at stopover sites. Ogden and colleagues estimate that <a href="https://journals.asm.org/doi/full/10.1128/aem.01982-07" target="_blank" rel="noopener" className="underline font-semibold text-rose-700">migratory birds disperse 50 million to 175 million Ixodes scapularis ticks into Canada each spring</a> (Applied and Environmental Microbiology, 2008). Ticks therefore arrive in places that cannot yet sustain them — which is why a tick bite outside a mapped risk area is still possible.</li>
            </ol>
            <p className="text-xs text-gray-500 mt-4 italic"><a href="https://pubmed.ncbi.nlm.nih.gov/16229849/" target="_blank" rel="noopener" className="underline">Ogden et al. (Int J Parasitol, 2006)</a> mapped these degree-day limits using temperatures projected for the 2020s, 2050s and 2080s. That paper reports its results in general geographic terms; it does not name individual Ontario districts or dates, and this page no longer attributes any such projection to it.</p>
          </div>
        </div>
      </section>

      {/* SECTION 3: PERSONAL RISK WIDGET */}
      <section className="bg-brand-950 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-extrabold text-amber-400 uppercase tracking-widest mb-3">Section 3 · Check your address</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">What&rsquo;s your household&rsquo;s personal Lyme risk?</h2>
          <p className="text-base text-brand-100 max-w-2xl mx-auto mb-6 leading-relaxed">Province-level statistics tell you the trend. Your personal exposure depends on where you live, what your yard looks like, whether you have a dog, and how often your family is outdoors. Get your 1-100 household exposure score in 60 seconds.</p>
          <Link
            href="/lyme-disease-risk-calculator"
            className="inline-block bg-amber-400 hover:bg-amber-300 text-brand-950 font-extrabold text-base px-8 py-4 rounded-full shadow-lg transition-all"
          >
            Get my Lyme risk score (free, 60 seconds) →
          </Link>
          <p className="text-xs text-brand-300 mt-4">No credit card. No spam. This is an exposure questionnaire, not a surveillance product — educational, not diagnostic.</p>
        </div>
      </section>

      {/* SECTION 4: TICK SPECIES ID GUIDE */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold text-brand-900 mb-2">Ontario Tick Species — Identification Guide</h2>
          <p className="text-base text-gray-700 mb-8 max-w-3xl">These are the tick species Ontario residents encounter most often. Only one — the blacklegged tick — is the Lyme vector, but each carries distinct risks. Photos and identification tools are available free through eTick.ca.</p>

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
            <strong>Identifying a tick on yourself or your dog?</strong> Submit a clear top and side photo to <a href="https://www.etick.ca/" target="_blank" rel="noopener" className="underline font-bold">eTick.ca</a> for free identification. eTick is the Canadian public tick image identification platform, operated by Bishop&rsquo;s University and the Université de Montréal.
          </div>
        </div>
      </section>

      {/* INLINE CTA */}
      <section className="bg-white px-4 pb-4">
        <div className="max-w-4xl mx-auto">
          <InlineYardRiskCTA pretext="Free 60-second tool · No obligation" />
        </div>
      </section>

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
            <p className="text-xs mt-3 opacity-90 italic">Do not wait. Lyme carditis can cause heart block requiring temporary pacing. Lyme meningitis requires intravenous antibiotics. The cost of overcaution is a few hours in the ER.</p>
          </div>
        </div>
      </section>

      {/* SECTION 6: PHU DIRECTORY */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold text-brand-900 mb-2">Where to Submit a Tick — Ontario Health Unit Directory</h2>
          <p className="text-base text-gray-700 mb-2 max-w-3xl">Ontario&rsquo;s public health units answer tick questions, advise on post-exposure care, and can direct you to the right submission route for your area. This is a contact directory only — it carries no case counts, because no agency publishes recent Lyme case counts at the health unit level.</p>
          <div className="rounded-xl border-2 border-blue-300 bg-blue-50 p-4 mb-6">
            <p className="text-sm text-blue-900"><strong>Fastest route for most people:</strong> photograph the tick and submit it to <a href="https://www.etick.ca/" target="_blank" rel="noopener" className="underline font-semibold">eTick.ca</a>, the free national identification platform. Use the health unit below when you need local advice, when you have questions about post-exposure prophylaxis, or when eTick directs you to your local unit.</p>
          </div>
          <p className="text-xs text-gray-500 mb-8 italic">Listed alphabetically. Ontario health unit names, mergers and phone lines change periodically — confirm before publishing this directory onward. Verified {ACCESSED}.</p>

          <PHUTable phus={ONTARIO_PHUS} />

          <p className="text-sm text-gray-700 mt-6">For the current blacklegged tick risk-area map covering all of these areas, use Public Health Ontario&rsquo;s <a href="https://www.publichealthontario.ca/en/data-and-analysis/infectious-disease/vbd-tool" target="_blank" rel="noopener" className="underline font-semibold text-rose-700">Ontario Vector-Borne Disease Tool</a>.</p>
          <p className="text-sm text-gray-700 mt-3">If that map shows risk where you live, the next question is usually about your own yard rather than the province. In Peel, the Credit River corridor runs from the escarpment down through Brampton and Mississauga and brings tick habitat to the back of a lot of residential lots &mdash; our <Link href="/mississauga-tick-spray" className="underline font-semibold text-rose-700">Mississauga tick control</Link> and <Link href="/brampton-tick-spray" className="underline font-semibold text-rose-700">Brampton tick spray</Link> pages explain which zones a yard-edge treatment actually covers, and which it does not.</p>
        </div>
      </section>

      {/* SECTION 7: ETICK */}
      <section className="bg-blue-50 border-y-4 border-blue-300 py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-brand-900 mb-2">eTick.ca — Free Tick Identification</h2>
          <p className="text-base text-gray-700 mb-6">eTick is Canada&rsquo;s public tick image identification platform. It is free, and it is operated by Bishop&rsquo;s University and the Université de Montréal.</p>

          <div className="rounded-2xl bg-white p-6 shadow-md border-2 border-blue-200">
            <h3 className="text-lg font-extrabold text-brand-900 mb-4">How to submit a tick photo</h3>
            <ol className="space-y-3 text-sm text-gray-700">
              <li className="flex gap-3">
                <span className="shrink-0 w-7 h-7 rounded-full bg-blue-500 text-white font-extrabold flex items-center justify-center text-xs">1</span>
                <div><strong className="text-brand-900">Remove the tick.</strong> Use fine-tipped tweezers or a tick removal tool. Pull straight up with steady pressure — no twisting. Keep the tick in a sealed container.</div>
              </li>
              <li className="flex gap-3">
                <span className="shrink-0 w-7 h-7 rounded-full bg-blue-500 text-white font-extrabold flex items-center justify-center text-xs">2</span>
                <div><strong className="text-brand-900">Photograph clearly.</strong> Two photos: one from the top showing the body and legs, one from the side showing the mouth parts. Use natural lighting. Place a coin or ruler in the frame for size scale.</div>
              </li>
              <li className="flex gap-3">
                <span className="shrink-0 w-7 h-7 rounded-full bg-blue-500 text-white font-extrabold flex items-center justify-center text-xs">3</span>
                <div><strong className="text-brand-900">Submit at <a href="https://www.etick.ca/" target="_blank" rel="noopener" className="underline">eTick.ca</a>.</strong> Create an account, upload photos, enter the date and location of the bite.</div>
              </li>
              <li className="flex gap-3">
                <span className="shrink-0 w-7 h-7 rounded-full bg-blue-500 text-white font-extrabold flex items-center justify-center text-xs">4</span>
                <div><strong className="text-brand-900">Receive an identification.</strong> Submissions are reviewed by trained identifiers, who return the species and life stage along with guidance on what to do next.</div>
              </li>
            </ol>
            <div className="mt-5 rounded-lg bg-amber-50 border-l-4 border-amber-400 p-4 text-sm text-gray-800">
              <strong>Important:</strong> identification is not medical care. If the tick is a blacklegged tick and was attached for a prolonged period, contact your family doctor or your public health unit promptly — post-exposure prophylaxis is time-limited and the decision to offer it depends on local risk, attachment time and your own medical history. Watch for symptoms over the following 30 days regardless.
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: PETS */}
      <section className="bg-amber-50 border-y-4 border-amber-300 py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-brand-900 mb-2">Lyme Disease in Dogs (and Cats)</h2>
          <p className="text-base text-gray-700 mb-6">Dogs are efficient tick taxis — they sweep ticks from grass and brush, then carry them onto furniture, beds and people. Prevention protects the household, not just the dog.</p>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="rounded-2xl bg-white p-5 shadow-sm border-l-4 border-amber-500">
              <h3 className="text-lg font-extrabold text-brand-900 mb-2">4DX Plus testing</h3>
              <p className="text-sm text-gray-700">Many Ontario veterinarians recommend annual 4DX Plus blood testing. The test screens dogs for exposure to four tick-borne diseases simultaneously: Lyme (Borrelia burgdorferi), Anaplasmosis, Ehrlichiosis, and heartworm. A positive result indicates exposure — not necessarily active disease — and prompts follow-up testing. Ask your clinic what it charges as part of an annual wellness exam.</p>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-sm border-l-4 border-amber-500">
              <h3 className="text-lg font-extrabold text-brand-900 mb-2">Oral preventatives</h3>
              <p className="text-sm text-gray-700">NexGard (afoxolaner), Bravecto (fluralaner), and Simparica (sarolaner) are widely used for canine tick prevention in Ontario. They work systemically — when a tick bites a treated dog, the active ingredient kills it. NexGard is monthly; Bravecto is every 12 weeks. Topical products (Frontline, Advantix) are generally considered less effective against blacklegged ticks specifically. Your veterinarian will match the product to your dog.</p>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-sm border-l-4 border-amber-500">
              <h3 className="text-lg font-extrabold text-brand-900 mb-2">Lyme vaccine for dogs</h3>
              <p className="text-sm text-gray-700">A canine Lyme vaccine (Nobivac Lyme, RECOMBITEK Lyme) is available through Ontario veterinarians. It is usually discussed for dogs that spend time where blacklegged ticks are established — cottage dogs, hiking dogs, rural dogs. It is not a core vaccine. Discuss it with your vet.</p>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-sm border-l-4 border-amber-500">
              <h3 className="text-lg font-extrabold text-brand-900 mb-2">Cats — different story</h3>
              <p className="text-sm text-gray-700">Clinical Lyme disease is rarely reported in cats. However, outdoor cats can still carry ticks indoors and bring them into contact with humans and dogs. Do not use dog tick products on cats — several are toxic to them. Ask your veterinarian what is safe.</p>
            </div>
          </div>
          <p className="text-sm text-gray-700 mt-6 italic">If your dog has had a confirmed tick bite or shows symptoms (lameness, joint swelling, lethargy, loss of appetite, fever), contact your veterinarian. Canine Lyme typically responds well to doxycycline when caught early.</p>
        </div>
      </section>

      {/* SECTION 9: SOURCES */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-2">Sources</h2>
          <p className="text-sm text-gray-600 mb-6">
            Every statistic on this page traces to one of the sources below. Each entry names the publisher, the exact document, its URL, and the figures it supports. <strong>All sources accessed and verified {ACCESSED}.</strong> If you find a number on this page that you cannot trace to one of these, tell us at <a href="mailto:info@buzzskito.ca" className="underline font-semibold">info@buzzskito.ca</a> and we will correct or remove it.
          </p>

          <div className="grid md:grid-cols-2 gap-4 text-sm">
            {SOURCES.map((s) => (
              <a key={s.url} href={s.url} target="_blank" rel="noopener" className="rounded-xl bg-white p-4 border border-gray-200 hover:border-brand-500 transition">
                <p className="text-[11px] font-bold uppercase tracking-wider text-gray-500">{s.publisher}</p>
                <p className="font-extrabold text-brand-900 mt-0.5">{s.title}</p>
                <p className="text-xs text-gray-600 mt-1"><strong>Supports:</strong> {s.supports}</p>
                <p className="text-[10px] text-gray-400 mt-1 break-all">{s.url} · accessed {ACCESSED}</p>
              </a>
            ))}
          </div>

          <div className="mt-8 rounded-xl bg-white p-5 border-2 border-brand-200">
            <p className="text-xs font-bold text-brand-900 uppercase tracking-wider mb-2">Corrections log</p>
            <p className="text-xs text-gray-700 leading-relaxed">
              In July 2026 this page was rebuilt after an internal audit found that its year-by-year Ontario case series, its per-health-unit case counts and several of its climate figures could not be traced to any publishing agency. Most seriously, the page had carried a 2025 Ontario provincial total that no agency has ever released, and that figure had begun circulating online with this page as its only source. Every one of those numbers has been deleted rather than revised or softened, along with a four-tier &ldquo;endemic / emerging / occasional / low&rdquo; classification of health units that had been wrongly attributed to Public Health Ontario. We are not restating the withdrawn figures here, because reprinting them is how they spread. What remains on this page is limited to numbers published by the Public Health Agency of Canada, Public Health Ontario, or the peer-reviewed literature, each named in the source list above.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 10: LEAD FUNNEL FOOTER */}
      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-rose-900 text-white py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-3 text-center">What you can do this week</h2>
          <p className="text-base text-brand-100 mb-8 text-center max-w-3xl mx-auto">Ontario reported 27% more Lyme cases in 2024 than in 2023. Here are three practical things you can do for your household.</p>

          <div className="grid md:grid-cols-3 gap-5">
            <Link href="/lyme-disease-risk-calculator" className="rounded-2xl bg-white/10 backdrop-blur p-6 hover:bg-white/15 transition block">
              <p className="text-xs font-extrabold text-amber-400 uppercase tracking-widest mb-2">Step 1 · 60 seconds</p>
              <h3 className="text-lg font-extrabold mb-2">Get your household Lyme risk score</h3>
              <p className="text-sm text-brand-200 mb-3">Free 60-second questionnaire. A 1-100 exposure score based on your address, yard features, dog walking habits, and family outdoor exposure.</p>
              <span className="text-amber-400 font-bold text-sm">Take the calculator →</span>
            </Link>
            <Link href="/yard-risk-report" className="rounded-2xl bg-white/10 backdrop-blur p-6 hover:bg-white/15 transition block">
              <p className="text-xs font-extrabold text-amber-400 uppercase tracking-widest mb-2">Step 2 · Free report</p>
              <h3 className="text-lg font-extrabold mb-2">Free property tick risk report</h3>
              <p className="text-sm text-brand-200 mb-3">Address-specific assessment. Identifies high-risk yard features, neighbourhood factors, and where a barrier treatment would go first.</p>
              <span className="text-amber-400 font-bold text-sm">Get my yard report →</span>
            </Link>
            <Link href="/tick-control" className="rounded-2xl bg-white/10 backdrop-blur p-6 hover:bg-white/15 transition block">
              <p className="text-xs font-extrabold text-amber-400 uppercase tracking-widest mb-2">Step 3 · Pro treatment</p>
              <h3 className="text-lg font-extrabold mb-2">Professional tick barrier spray</h3>
              <p className="text-sm text-brand-200 mb-3">Health Canada-registered residual product, applied to the yard-edge and leaf-litter zones where ticks sit. Five-spray season program from $497.</p>
              <span className="text-amber-400 font-bold text-sm">Tick control plans →</span>
            </Link>
          </div>

          <div className="mt-10 text-center text-sm text-brand-200">
            <p className="mb-2">BuzzSkito Mosquito &amp; Tick Control · Mississauga, ON · serving the GTA</p>
            <p className="mb-1">📞 <a href="tel:+12892165030" className="text-amber-400 underline">(289) 216-5030</a> · ✉️ <a href="mailto:info@buzzskito.ca" className="text-amber-400 underline">info@buzzskito.ca</a></p>
            <p className="mt-4 text-xs italic opacity-75 max-w-2xl mx-auto">
              This page provides educational information aggregated from published government and peer-reviewed sources. It is not medical advice. For confirmed tick bites, suspected symptoms, or post-exposure prophylaxis questions, contact your family doctor, Health811 / Telehealth Ontario (1-866-797-0000), or your local public health unit.
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

function PHUTable({ phus }: { phus: PHUContact[] }) {
  return (
    <div className="rounded-xl border border-gray-200 overflow-hidden bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-xs sm:text-sm">
          <caption className="sr-only">Ontario public health units with phone numbers and tick-submission contacts. Contains no case counts.</caption>
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th scope="col" className="text-left px-3 py-2 font-extrabold">Public Health Unit</th>
              <th scope="col" className="text-left px-3 py-2 font-extrabold whitespace-nowrap">Phone</th>
              <th scope="col" className="text-left px-3 py-2 font-extrabold">Tick questions &amp; submission</th>
            </tr>
          </thead>
          <tbody>
            {phus.map(p => {
              const isDomain = p.tickSubmission.includes('.')
              return (
                <tr key={p.phu} className="border-t border-gray-100 hover:bg-gray-50">
                  <th scope="row" className="text-left px-3 py-2 text-gray-800 font-semibold">{p.phu}</th>
                  <td className="px-3 py-2 whitespace-nowrap"><a href={`tel:${p.phone.replace(/[^+\d]/g, '')}`} className="text-brand-700 hover:text-amber-600 font-mono">{p.phone}</a></td>
                  <td className="px-3 py-2 text-gray-700">
                    {isDomain
                      ? <a href={`https://${p.tickSubmission}`} target="_blank" rel="noopener" className="text-brand-700 hover:text-amber-600 underline">{p.tickSubmission}</a>
                      : p.tickSubmission}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
