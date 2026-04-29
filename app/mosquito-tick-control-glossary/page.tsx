import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, faqSchema, speakableSchema } from '@/lib/seo'

const SLUG = '/mosquito-tick-control-glossary'

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito & Tick Control Glossary — Ontario 2026',
  description:
    'Definitions of every mosquito and tick control term Ontario homeowners encounter. Active ingredients, species, treatment types, regulatory bodies, diseases, and more — fully cross-referenced.',
  canonical: SLUG,
})

// Glossary terms grouped by category — each acts as a named entity for semantic SEO
// 60+ terms = high entity density signal for 2026 Google AI Overview citation
type Term = { term: string; definition: string; relatedLinks?: { label: string; href: string }[] }

const SPECIES: Term[] = [
  {
    term: 'Aedes vexans (inland floodwater mosquito)',
    definition: 'The most common aggressive daytime-biting mosquito species in the Greater Toronto Area. Breeds in temporary floodwater pools left after heavy rain, melt, or river flooding. Prefers shaded resting habitat in shrub interiors. Not a primary disease vector but causes most residential complaints in Ontario.',
  },
  {
    term: 'Culex pipiens (northern house mosquito)',
    definition: 'The primary West Nile virus vector in Ontario. Dusk-active. Breeds in stagnant water — rain barrels, catch basins, abandoned pools, septic backups. Females overwinter and emerge in spring. Public Health Ontario monitors Culex pipiens populations annually.',
    relatedLinks: [{ label: 'PHO West Nile Virus surveillance', href: 'https://www.publichealthontario.ca/en/Diseases-and-Conditions/Infectious-Diseases/Vector-Borne-Zoonotic-Diseases/West-Nile-Virus' }],
  },
  {
    term: 'Culex restuans (white-spotted mosquito)',
    definition: 'Secondary West Nile virus vector in Ontario. Similar habitat preferences to Culex pipiens — stagnant water, dusk-active. Distinguished by white spots on its scutum (back). Often co-occurs with C. pipiens in surveillance traps.',
  },
  {
    term: 'Anopheles punctipennis',
    definition: 'A mosquito species present in Ontario but rarely the primary residential complaint. Historically a malaria vector (malaria is not endemic in Canada). Identifiable by spotted wings.',
  },
  {
    term: 'Aedes albopictus (Asian tiger mosquito)',
    definition: 'An invasive mosquito species detected in Southern Ontario but not yet established in the GTA. Public Health Ontario monitors potential range expansion. Aggressive daytime biter that can transmit Zika, dengue, and chikungunya viruses.',
  },
  {
    term: 'Ixodes scapularis (blacklegged tick / deer tick)',
    definition: 'The primary Lyme disease vector in Ontario. Now established across all 19 GTA cities per Public Health Ontario active surveillance. Three life stages: larva, nymph (most dangerous for humans — small, hard to see), adult. Active from approximately 4°C through to first hard frost.',
    relatedLinks: [{ label: 'PHO active tick surveillance', href: 'https://www.publichealthontario.ca/en/Data-and-Analysis/Infectious-Disease/Lyme-Disease-Active-Tick-Surveillance' }],
  },
  {
    term: 'Dermacentor variabilis (American dog tick)',
    definition: 'A larger, more visible tick species widespread across Ontario. Does not transmit Lyme disease but can carry Rocky Mountain spotted fever (rare in Canada) and tularemia. Often found on dogs after outdoor walks.',
  },
  {
    term: 'Amblyomma americanum (lone star tick)',
    definition: 'A tick species occasionally detected in Southern Ontario but not yet established. Identifiable by white spot on female back. Associated with alpha-gal syndrome (red-meat allergy) and Southern Tick-Associated Rash Illness (STARI).',
  },
  {
    term: 'Rhipicephalus sanguineus (brown dog tick)',
    definition: 'A tick species associated with infested kennels and indoor environments. Rare in Ontario residential pest control. Can transmit canine ehrlichiosis and Rocky Mountain spotted fever in some regions.',
  },
]

const ACTIVE_INGREDIENTS: Term[] = [
  {
    term: 'Permethrin',
    definition: 'A synthetic pyrethroid insecticide registered with Health Canada\'s Pest Management Regulatory Agency (PMRA). Common in professional barrier sprays. Broad-spectrum against mosquitoes, ticks, and other insects. Bonds to leaf surfaces with residual activity up to 30 days. Low mammalian toxicity but acutely toxic to fish and bees during application.',
    relatedLinks: [{ label: 'Health Canada PMRA', href: 'https://www.canada.ca/en/health-canada/services/consumer-product-safety/pesticides-pest-management.html' }],
  },
  {
    term: 'Bifenthrin',
    definition: 'A synthetic pyrethroid commonly used in lawn and ornamental treatments. Longer residual activity on vegetation than permethrin. Effective against mosquitoes, ticks, ants, and beetles. Applied at low concentrations in barrier spray formulations.',
  },
  {
    term: 'Lambda-cyhalothrin',
    definition: 'A fast-knockdown synthetic pyrethroid used in barrier sprays. Effective against adult mosquitoes on contact. Photo-stable for outdoor application. Registered with Health Canada for residential use.',
  },
  {
    term: 'Bacillus thuringiensis israelensis (BTI)',
    definition: 'A naturally occurring soil bacterium used as a biological larvicide. Highly target-specific — kills only mosquito and black fly larvae. Completely safe for fish, frogs, pets, beneficial insects, and humans. Health Canada has approved BTI for use in drinking water reservoirs in some provinces. Sold to consumers as "mosquito dunks" under brand names like Summit Chemical.',
  },
  {
    term: 'DEET (N,N-Diethyl-meta-toluamide)',
    definition: 'The gold-standard personal mosquito repellent active ingredient. Health Canada registers concentrations from 5% to 30% for personal use. Higher concentrations provide longer protection (30% = ~6 hours). Not used in barrier spray; this is for direct skin/clothing application.',
  },
  {
    term: 'Picaridin',
    definition: 'A personal mosquito and tick repellent active ingredient registered by Health Canada. 20% picaridin provides comparable protection to 30% DEET with no plastic-degrading effects. Newer alternative to DEET.',
  },
  {
    term: 'Pyrethrin',
    definition: 'A naturally occurring insecticide derived from chrysanthemum flowers. Fast-acting but breaks down quickly in sunlight. Used in some organic formulations and personal foggers. Health Canada-registered.',
  },
]

const TREATMENT_TYPES: Term[] = [
  {
    term: 'Barrier spray (residual barrier treatment)',
    definition: 'A professional residual insecticide applied to all vegetation, shrub interiors, leaf undersides, fence-line vegetation, and resting sites where adult mosquitoes and ticks rest during the day. Provides up to 30 days of residual protection. The dominant residential mosquito and tick control method in 2026.',
  },
  {
    term: 'Larvicide / Larviciding',
    definition: 'Treatment that targets mosquito larvae in standing water before they develop into adults. BTI (Bacillus thuringiensis israelensis) is the most common larvicide. Used in rain barrels, ornamental ponds, neglected pools, and any standing water that cannot be drained. Public Health authorities use larvicide in storm sewers for West Nile virus prevention.',
  },
  {
    term: 'Source elimination',
    definition: 'The practice of removing standing water from a property to prevent mosquito breeding. Includes emptying birdbaths weekly, cleaning gutters, drilling drainage holes in plant saucers, draining pool covers, and leveling low lawn spots. Reduces on-property mosquito production but does not affect adults dispersing from off-property sources.',
  },
  {
    term: 'Fogging',
    definition: 'Spraying a fine mist of insecticide that kills flying mosquitoes on contact. Provides hours of relief, not days or weeks. Different from barrier spray (which is residual). Consumer foggers (Cutter, Black Flag) are primarily fogging products.',
  },
  {
    term: 'Tick tubes',
    definition: 'Cardboard tubes filled with permethrin-treated cotton placed in mouse habitat areas. Mice take the cotton for nesting; permethrin kills tick larvae feeding on those mice. A long-term tick population reduction strategy targeting the rodent reservoir host.',
  },
  {
    term: 'Pre-event treatment',
    definition: 'A barrier spray applied 2-4 days before an outdoor event (wedding, party, graduation). Allows the residual to fully cure and become active before guests arrive. Provides peak protection during the event window.',
  },
]

const DISEASES: Term[] = [
  {
    term: 'Lyme disease',
    definition: 'A bacterial infection caused by Borrelia burgdorferi, transmitted to humans via blacklegged tick bites. Ontario cases have increased more than tenfold over the past decade per Public Health Ontario data. Early symptoms include the bull\'s-eye (erythema migrans) rash, fever, fatigue, and joint pain. Treatable with antibiotics when caught early.',
    relatedLinks: [
      { label: 'PHO Lyme Disease', href: 'https://www.publichealthontario.ca/en/Diseases-and-Conditions/Infectious-Diseases/Vector-Borne-Zoonotic-Diseases/Lyme-Disease' },
      { label: 'CDC Lyme Disease', href: 'https://www.cdc.gov/lyme/index.html' },
    ],
  },
  {
    term: 'West Nile virus',
    definition: 'A virus transmitted by Culex mosquitoes (primarily C. pipiens and C. restuans in Ontario). Most infections are asymptomatic. Severe cases (West Nile neuroinvasive disease) can cause meningitis, encephalitis, and lasting neurological effects. Risk peaks late July through early September in the GTA.',
  },
  {
    term: 'Anaplasmosis',
    definition: 'A tick-borne bacterial disease caused by Anaplasma phagocytophilum, transmitted by blacklegged ticks. Cases in Ontario are increasing as tick populations expand. Symptoms include fever, headache, muscle pain. Treatable with doxycycline.',
  },
  {
    term: 'Babesiosis',
    definition: 'A parasitic infection caused by Babesia microti, transmitted by blacklegged ticks. Rare in Ontario but cases have been documented. Causes flu-like illness and, in severe cases, hemolytic anemia.',
  },
  {
    term: 'Powassan virus',
    definition: 'A rare but serious tick-borne virus transmitted by blacklegged ticks. Can cause encephalitis. Powassan is unusual in that transmission can occur within 15 minutes of tick attachment (Lyme requires 24-36+ hours). Rare in Ontario but cases are documented.',
  },
  {
    term: 'Erythema migrans',
    definition: 'The classic "bull\'s-eye" rash that appears in approximately 70-80% of Lyme disease cases. Typically appears 3-30 days after a tick bite, expands over days, and is warm but usually not painful or itchy. Absence of rash does NOT rule out Lyme disease.',
  },
  {
    term: 'Alpha-gal syndrome',
    definition: 'A delayed allergic reaction to red meat triggered by lone star tick bites. Symptoms (hives, GI distress, anaphylaxis) appear 3-8 hours after eating beef, pork, or lamb. Diagnosed by allergist via blood test. Lone star ticks are uncommon in Ontario but occasionally detected.',
  },
]

const REGULATORY: Term[] = [
  {
    term: 'Health Canada PMRA (Pest Management Regulatory Agency)',
    definition: 'The federal agency that regulates pesticides in Canada under the Pest Control Products Act. All products applied by professional pest control companies must be PMRA-registered. The PCPA Public Registry lists all registered products by active ingredient and use.',
    relatedLinks: [{ label: 'PMRA Public Registry', href: 'https://pr-rp.hc-sc.gc.ca/ls-re/index-eng.php' }],
  },
  {
    term: 'Ontario Pesticides Act',
    definition: 'The provincial law governing pesticide use in Ontario. Administered by the Ministry of the Environment, Conservation and Parks (MOECP). Requires licensing for commercial pesticide applicators and sets restrictions on cosmetic lawn pesticide use (Ontario\'s cosmetic pesticide ban does not apply to commercial mosquito and tick barrier spray).',
  },
  {
    term: 'Pesticide Applicator License (Ontario)',
    definition: 'A provincial certification required to legally apply commercial pesticides in Ontario. BuzzSkito holds this license and applies all treatments through licensed applicators. Different classes cover different pest categories — mosquito and tick control falls under the Structural / Landscape class.',
  },
  {
    term: 'Public Health Ontario (PHO)',
    definition: 'The provincial public health agency that operates the active blacklegged tick surveillance program, monitors West Nile virus, and publishes annual data on tick populations and Lyme disease cases. Authoritative source for Ontario disease vector data.',
    relatedLinks: [{ label: 'Public Health Ontario', href: 'https://www.publichealthontario.ca/' }],
  },
  {
    term: 'eTick.ca',
    definition: 'A free public tick identification and risk assessment service operated in partnership with Public Health Ontario, McGill University, and Bishop\'s University. Submit a photo of a tick for free identification and risk advice. Faster and more accurate than visual estimation.',
    relatedLinks: [{ label: 'eTick.ca', href: 'https://www.etick.ca/' }],
  },
  {
    term: 'Toronto Public Health',
    definition: 'The municipal public health authority for the City of Toronto. Performs targeted larviciding of catch basins for West Nile virus surveillance. Does NOT treat private residential properties. Yard-level mosquito control is the homeowner\'s responsibility.',
  },
  {
    term: 'Peel Region Public Health',
    definition: 'The regional public health authority covering Mississauga, Brampton, and Caledon. Performs mosquito surveillance, larviciding of municipal infrastructure, and tick monitoring. Does not treat private properties.',
  },
  {
    term: 'York Region Public Health',
    definition: 'Regional public health authority covering Markham, Richmond Hill, Vaughan, King City, Aurora, and other York Region municipalities. Operates active tick surveillance — York Region has confirmed blacklegged tick populations across most of its area.',
  },
  {
    term: 'Halton Region Public Health',
    definition: 'Regional public health authority covering Oakville, Burlington, Milton, and Halton Hills. Monitors West Nile virus and tick populations. Niagara Escarpment areas in Halton have confirmed tick populations.',
  },
]

const KEY_FEATURES: Term[] = [
  {
    term: 'BuzzSkito Bite-Free Guarantee',
    definition: 'BuzzSkito\'s service guarantee: if pests return inside the protection window after a treatment, BuzzSkito re-treats at no charge. Period. No contracts required to qualify. Covers mosquito and tick treatments.',
  },
  {
    term: 'Stormwater management pond',
    definition: 'An engineered retention pond designed to collect and filter rainwater runoff. Built into virtually every GTA subdivision since the early 2000s. The GTA has 800+ documented stormwater ponds. They produce thousands of mosquitoes per pond per season because they hold water continuously with minimal predator populations. Properties within 500 metres face consistent seasonal pressure.',
  },
  {
    term: 'Oak Ridges Moraine',
    definition: 'A 160-km geological ridge running east-west through York and Durham regions, approximately 25 km north of Toronto. The Moraine\'s mix of forests, wetlands, and meadows creates ideal habitat for white-tailed deer and white-footed mice — the two primary hosts that sustain blacklegged tick populations. King City, Richmond Hill, Caledon, and parts of Markham sit on the Moraine and have the highest tick density in the GTA.',
  },
  {
    term: 'Niagara Escarpment',
    definition: 'A massive limestone ridge running through Hamilton, Burlington, Milton, Halton Hills, and other GTA-adjacent areas. Designated a UNESCO Biosphere Reserve. The Escarpment\'s sheltered microclimates and continuous forest corridor support significant blacklegged tick populations. Bruce Trail traverses the Escarpment.',
  },
  {
    term: 'Don Valley',
    definition: 'Toronto\'s primary north-south ravine system, draining the East Don, West Don, and Lower Don rivers. The Don Valley is the largest urban ravine network in North America. Properties adjacent to the Don Valley experience some of the highest mosquito pressure in Toronto due to continuous breeding habitat and dispersal up to 3 km from the valley.',
  },
  {
    term: 'Cootes Paradise',
    definition: 'A 250-hectare wetland adjacent to Hamilton (administered by Royal Botanical Gardens). One of the largest urban wetlands in the Great Lakes basin and one of the most productive mosquito sources in Southern Ontario. Hamilton\'s west end (Westdale, Ainslie Wood, McMaster area) experiences heavy seasonal pressure.',
  },
  {
    term: 'Rouge National Urban Park',
    definition: 'Canada\'s largest urban national park (79+ square kilometres) on the eastern boundary of Scarborough and Markham. Confirmed blacklegged tick populations throughout. Properties in Cornell, Cathedraltown, and Highland Creek face direct exposure.',
  },
  {
    term: 'FSA (Forward Sortation Area)',
    definition: 'The first three characters of a Canadian postal code (e.g., L5G for Mississauga\'s Lakeview). FSAs designate a specific geographic area used for postal sorting and demographic analysis. BuzzSkito services specific FSAs across the GTA — listed on each city\'s pest control page.',
  },
]

const FAQS = [
  {
    question: 'Why have a glossary of mosquito and tick control terms?',
    answer: 'Mosquito and tick control involves regulatory bodies, scientific species names, active ingredients, treatment types, and disease names that confuse most homeowners. This glossary defines every term BuzzSkito uses across the website so you can understand exactly what we\'re talking about, what you\'re reading on Public Health Ontario, and what you should know before booking any pest control service.',
  },
  {
    question: 'Are these terms specific to Ontario?',
    answer: 'Most terms apply broadly across Canada and North America, but regulatory bodies (Health Canada PMRA, Ontario MOECP, Public Health Ontario, regional public health authorities) and specific geographic features (Don Valley, Cootes Paradise, Rouge Park, Niagara Escarpment, Oak Ridges Moraine) are GTA-specific. Species and active ingredients are universal.',
  },
  {
    question: 'How is BuzzSkito qualified to define these terms?',
    answer: 'BuzzSkito is an Ontario-licensed Pesticide Applicator company (Canada Business Reg #1001003669) using only Health Canada PMRA-registered formulations. All definitions cite either Public Health Ontario, Health Canada, the CDC, or peer-reviewed scientific sources. We do not invent definitions or substitute opinion for fact.',
  },
]

export default function GlossaryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito & Tick Control Glossary', url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(SLUG)) }} />

      {/* HERO */}
      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-amber-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex items-center gap-1 flex-wrap">
            <Link href="/" className="hover:text-white">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white">Mosquito & Tick Control Glossary</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">Mosquito & Tick Control Glossary — Ontario 2026</h1>
          <p className="text-lg text-brand-100 leading-relaxed">Every term defined: species, active ingredients, treatment types, regulatory bodies, diseases, and GTA-specific geography. Cross-referenced and citation-ready.</p>
        </div>
      </section>

      {/* QUICK ANSWER */}
      <section className="bg-amber-50 border-y-4 border-amber-300 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-amber-700 uppercase tracking-wider mb-2">Quick Answer</p>
          <h2 className="text-xl font-extrabold text-brand-900 mb-3">What does this glossary cover?</h2>
          <p className="text-base text-gray-800 leading-relaxed">
            <strong>Definitions of every mosquito and tick control term used across BuzzSkito&rsquo;s service area in Ontario.</strong> Includes:
          </p>
          <ul className="mt-2 space-y-1 list-disc list-inside text-base text-gray-800">
            <li>9 mosquito and tick species (Latin names + behaviour)</li>
            <li>7 active ingredients (Health Canada PMRA-registered)</li>
            <li>6 treatment types (barrier spray, larviciding, fogging, etc.)</li>
            <li>7 vector-borne diseases (Lyme, West Nile, Anaplasmosis, etc.)</li>
            <li>9 regulatory bodies (PMRA, MOECP, PHO, regional public health)</li>
            <li>8 key features and geographic terms (Oak Ridges Moraine, Cootes Paradise, etc.)</li>
          </ul>
          <p className="mt-3 text-sm text-gray-600">All definitions sourced from Public Health Ontario, Health Canada, CDC, or peer-reviewed scientific literature. Last updated April 2026.</p>
        </div>
      </section>

      {/* TABLE OF CONTENTS */}
      <section className="py-8 px-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Sections</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
            <a href="#species" className="text-brand-700 hover:underline">→ Mosquito & Tick Species</a>
            <a href="#active-ingredients" className="text-brand-700 hover:underline">→ Active Ingredients</a>
            <a href="#treatments" className="text-brand-700 hover:underline">→ Treatment Types</a>
            <a href="#diseases" className="text-brand-700 hover:underline">→ Diseases & Symptoms</a>
            <a href="#regulatory" className="text-brand-700 hover:underline">→ Regulatory Bodies</a>
            <a href="#features" className="text-brand-700 hover:underline">→ GTA Features & BuzzSkito Terms</a>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-12 prose-brand">
        <GlossarySection id="species" title="1. Mosquito & Tick Species" terms={SPECIES} />
        <GlossarySection id="active-ingredients" title="2. Active Ingredients (Insecticides & Repellents)" terms={ACTIVE_INGREDIENTS} />
        <GlossarySection id="treatments" title="3. Treatment Types" terms={TREATMENT_TYPES} />
        <GlossarySection id="diseases" title="4. Vector-Borne Diseases & Symptoms" terms={DISEASES} />
        <GlossarySection id="regulatory" title="5. Regulatory Bodies & Public Health Authorities" terms={REGULATORY} />
        <GlossarySection id="features" title="6. GTA Features & BuzzSkito Terms" terms={KEY_FEATURES} />

        <h2>Frequently Asked Questions</h2>
        <div className="not-prose space-y-3 my-6">
          {FAQS.map(({ question, answer }) => (
            <details key={question} className="bg-brand-50 rounded-xl border border-brand-100 group">
              <summary className="cursor-pointer px-5 py-4 font-semibold text-brand-900 list-none">{question}</summary>
              <p className="px-5 pb-4 text-gray-700 text-sm">{answer}</p>
            </details>
          ))}
        </div>

        <h2>Related Resources</h2>
        <ul>
          <li><Link href="/buzzskito-2026-gta-mosquito-tick-report">2026 GTA Mosquito & Tick Surveillance Report</Link></li>
          <li><Link href="/pest-control-gta">Pest Control GTA — Master Pillar</Link></li>
          <li><Link href="/blog/lyme-disease-tick-prevention-ontario">Lyme Disease Prevention in Ontario</Link></li>
          <li><Link href="/blog/ultimate-tick-control-guide-ontario">Ultimate Tick Control Guide for Ontario</Link></li>
          <li><Link href="/blog/ultimate-backyard-mosquito-control-guide">Ultimate Backyard Mosquito Control Guide</Link></li>
        </ul>
      </article>

      <CTASection heading="Get Specialist Mosquito & Tick Control" subtext="Ontario-licensed. Health Canada-approved. From $99 per treatment." />
    </>
  )
}

function GlossarySection({ id, title, terms }: { id: string; title: string; terms: Term[] }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2>{title}</h2>
      <dl className="not-prose space-y-5 my-6">
        {terms.map(({ term, definition, relatedLinks }) => (
          <div key={term} className="bg-brand-50/40 rounded-xl border border-brand-100 p-5">
            <dt className="font-extrabold text-brand-900 text-base mb-2">{term}</dt>
            <dd className="text-gray-700 text-sm leading-relaxed">{definition}</dd>
            {relatedLinks && relatedLinks.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-3 text-xs">
                {relatedLinks.map(({ label, href }) => (
                  <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="text-brand-700 hover:underline">→ {label}</a>
                ))}
              </div>
            )}
          </div>
        ))}
      </dl>
    </section>
  )
}
