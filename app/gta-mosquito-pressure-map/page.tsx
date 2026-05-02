import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, breadcrumbSchema, faqSchema, speakableSchema } from '@/lib/seo'

const SLUG = '/gta-mosquito-pressure-map'

type PressureTier = 'severe' | 'high' | 'moderate' | 'lower'

interface CityPressure {
  city: string
  slug: string
  tier: PressureTier
  score: number
  primaryDriver: string
  topNeighbourhoods: string[]
  peakWeeks: string
  ticksRelevant: boolean
  notes: string
}

const PRESSURE: CityPressure[] = [
  { city: 'Toronto',          slug: '/toronto-mosquito-control',         tier: 'severe',   score: 92, primaryDriver: 'Don Valley ravine system + Humber/Don river corridors', topNeighbourhoods: ['High Park', 'Rosedale', 'Forest Hill', 'Leaside', 'East York', 'The Beaches', 'Riverdale'], peakWeeks: 'Jun 13 – Aug 22', ticksRelevant: true,  notes: 'Toronto contains the largest urban ravine network in North America (11,000+ acres). Properties within 500m of any ravine see 3-5x average city pressure.' },
  { city: 'Hamilton',         slug: '/hamilton-mosquito-control',        tier: 'severe',   score: 90, primaryDriver: 'Niagara Escarpment forests + Cootes Paradise wetlands', topNeighbourhoods: ['Stoney Creek', 'Dundas', 'Ancaster', 'Waterdown', 'Flamborough'], peakWeeks: 'Jun 8 – Aug 17', ticksRelevant: true, notes: 'Hamilton sits at the junction of the escarpment, Cootes Paradise (one of Ontario\'s largest urban wetlands), and the Beverly Swamp. Highest combined mosquito + tick burden of any GTA city.' },
  { city: 'Burlington',       slug: '/burlington-mosquito-spray',        tier: 'severe',   score: 89, primaryDriver: 'Cootes Paradise + Mount Nemo Escarpment', topNeighbourhoods: ['Aldershot', 'Tyandaga', 'Roseland', 'Millcroft', 'Orchard'], peakWeeks: 'Jun 13 – Aug 22', ticksRelevant: true, notes: 'Lakefront + escarpment double-pressure. Tyandaga and Aldershot are particularly high — escarpment forests + Cootes Paradise within 1 km.' },
  { city: 'Caledon',          slug: '/caledon-mosquito-control',         tier: 'severe',   score: 88, primaryDriver: 'Oak Ridges Moraine + Forks of the Credit', topNeighbourhoods: ['Caledon East', 'Bolton', 'Inglewood', 'Belfountain'], peakWeeks: 'Jun 5 – Aug 14', ticksRelevant: true, notes: 'Oak Ridges Moraine is one of Ontario\'s highest blacklegged tick density zones. Caledon East area flagged by Public Health Ontario as Lyme-endemic since 2019.' },
  { city: 'Mississauga',      slug: '/mississauga-mosquito-control',     tier: 'high',     score: 82, primaryDriver: 'Credit River corridor + Rattray Marsh', topNeighbourhoods: ['Streetsville', 'Meadowvale', 'Erin Mills', 'Port Credit', 'Lorne Park', 'Cooksville'], peakWeeks: 'Jun 13 – Aug 22', ticksRelevant: true, notes: 'Credit River runs the full length of the city. Properties within 500m of the river see 3-5x city-average mosquito populations from May to October.' },
  { city: 'Oakville',         slug: '/oakville-mosquito-control',        tier: 'high',     score: 81, primaryDriver: 'Sixteen Mile Creek + Bronte Creek + Lake Ontario humidity', topNeighbourhoods: ['Bronte', 'Glen Abbey', 'Joshua Creek', 'River Oaks', 'Eastlake', 'West Oak Trails'], peakWeeks: 'Jun 13 – Aug 22', ticksRelevant: true, notes: 'Two major creek systems plus lakefront humidity extend the mosquito season 1-2 weeks longer than inland properties. Bronte Creek Provincial Park drives heavy tick pressure for adjacent neighbourhoods.' },
  { city: 'Halton Hills',     slug: '/halton-hills-mosquito-control',    tier: 'high',     score: 79, primaryDriver: 'Niagara Escarpment + Bruce Trail + Hilton Falls', topNeighbourhoods: ['Georgetown', 'Acton', 'Glen Williams'], peakWeeks: 'Jun 5 – Aug 14', ticksRelevant: true, notes: 'Bruce Trail and Hilton Falls Conservation Area drive significant tick pressure across the municipality. Inland location means slightly earlier season than lakefront cities.' },
  { city: 'Milton',           slug: '/milton-mosquito-control',          tier: 'high',     score: 78, primaryDriver: 'Niagara Escarpment edge + Crawford Lake + Halton Greenbelt', topNeighbourhoods: ['Old Milton', 'Beaty', 'Coates', 'Willmott', 'Scott', 'Bowes'], peakWeeks: 'Jun 8 – Aug 17', ticksRelevant: true, notes: 'Mount Nemo, Rattlesnake Point, and Crawford Lake conservation areas border Milton. Properties on the western edge see escarpment pressure equivalent to Burlington.' },
  { city: 'Scarborough',      slug: '/scarborough-mosquito-control',     tier: 'high',     score: 78, primaryDriver: 'Rouge National Urban Park + Highland Creek', topNeighbourhoods: ['Rouge', 'Centennial', 'Guildwood', 'West Hill', 'Morningside'], peakWeeks: 'Jun 13 – Aug 22', ticksRelevant: true, notes: 'Rouge National Urban Park (over 79 km²) is the largest urban park in Canada and a confirmed tick reservoir. Eastern Scarborough properties see the highest tick burden in the GTA.' },
  { city: 'Markham',          slug: '/markham-mosquito-control',         tier: 'high',     score: 76, primaryDriver: 'Rouge National Urban Park watershed', topNeighbourhoods: ['Unionville', 'Cornell', 'Markham Village', 'Box Grove', 'Cathedraltown'], peakWeeks: 'Jun 8 – Aug 17', ticksRelevant: true, notes: 'Western Markham is moderate; eastern Markham (closer to Rouge Park) flips to high. Box Grove and Cornell are particularly affected.' },
  { city: 'Brampton',         slug: '/brampton-mosquito-control',        tier: 'moderate', score: 68, primaryDriver: 'Humber River + Etobicoke Creek + Heart Lake', topNeighbourhoods: ['Heart Lake', 'Castlemore', 'Springdale', 'Mount Pleasant', 'Bramalea', 'Fletcher\'s Meadow'], peakWeeks: 'Jun 8 – Aug 17', ticksRelevant: true, notes: 'Multiple creek and stormwater pond systems create variable pressure across the city. Heart Lake area is severe; downtown Brampton is moderate.' },
  { city: 'Vaughan',          slug: '/vaughan-mosquito-control',         tier: 'moderate', score: 67, primaryDriver: 'Humber River + Don River West', topNeighbourhoods: ['Kleinburg', 'Maple', 'Concord', 'Woodbridge'], peakWeeks: 'Jun 8 – Aug 17', ticksRelevant: false, notes: 'Mostly suburban, but Kleinburg estate properties on the Humber River edge see pressure equivalent to Mississauga\'s Credit River corridor.' },
  { city: 'Richmond Hill',    slug: '/richmond-hill-mosquito-control',   tier: 'moderate', score: 66, primaryDriver: 'Oak Ridges Moraine (north) + Rouge River', topNeighbourhoods: ['Oak Ridges', 'Bayview Hill', 'South Richvale'], peakWeeks: 'Jun 8 – Aug 17', ticksRelevant: true, notes: 'Northern Richmond Hill is on the Oak Ridges Moraine — high tick density. Southern Richmond Hill is suburban moderate.' },
  { city: 'North York',       slug: '/north-york-mosquito-control',      tier: 'moderate', score: 64, primaryDriver: 'Don River West Branch + Black Creek', topNeighbourhoods: ['Willowdale', 'York Mills', 'Don Mills', 'Bridle Path'], peakWeeks: 'Jun 13 – Aug 22', ticksRelevant: false, notes: 'Properties along Don River West see ravine-equivalent pressure. Bridle Path estates with mature canopy and creek access flip to high.' },
  { city: 'Etobicoke',        slug: '/etobicoke-mosquito-control',       tier: 'moderate', score: 62, primaryDriver: 'Humber River corridor', topNeighbourhoods: ['The Kingsway', 'Mimico', 'Long Branch', 'Etobicoke Creek'], peakWeeks: 'Jun 13 – Aug 22', ticksRelevant: false, notes: 'Western Etobicoke along the Humber River sees significant pressure. Eastern lakefront flats are lower.' },
  { city: 'Woodbridge',       slug: '/woodbridge-mosquito-control',      tier: 'moderate', score: 61, primaryDriver: 'Humber River corridor', topNeighbourhoods: ['Sonoma Heights', 'West Woodbridge', 'East Woodbridge'], peakWeeks: 'Jun 8 – Aug 17', ticksRelevant: false, notes: 'Suburban with the Humber running through — pressure varies sharply by lot proximity to the river.' },
  { city: 'Kleinburg',        slug: '/kleinburg-mosquito-control',       tier: 'moderate', score: 60, primaryDriver: 'Humber River valley estate setting', topNeighbourhoods: ['Kleinburg Village', 'Copperwood'], peakWeeks: 'Jun 8 – Aug 17', ticksRelevant: true, notes: 'Estate properties on large lots adjacent to the Humber. River-front properties flip to high pressure.' },
  { city: 'King City',        slug: '/king-city-mosquito-control',       tier: 'moderate', score: 58, primaryDriver: 'Oak Ridges Moraine forests', topNeighbourhoods: ['King City', 'Schomberg', 'Nobleton'], peakWeeks: 'Jun 5 – Aug 14', ticksRelevant: true, notes: 'Moraine forests support high tick density relative to city average. Mosquitoes are moderate; ticks are the bigger concern.' },
  { city: 'Georgetown',       slug: '/georgetown-mosquito-control',      tier: 'moderate', score: 57, primaryDriver: 'Credit River edge + Hungry Hollow ravine', topNeighbourhoods: ['Glen Williams', 'Park District', 'Devereux'], peakWeeks: 'Jun 5 – Aug 14', ticksRelevant: false, notes: 'Most properties are suburban-moderate. Properties adjacent to Hungry Hollow or the Credit River edge are high.' },
  { city: 'Thornhill',        slug: '/thornhill-mosquito-control',       tier: 'lower',    score: 52, primaryDriver: 'Bayview ravines + Pomona Mills Park', topNeighbourhoods: ['Royal Orchard', 'Beverley Glen', 'German Mills'], peakWeeks: 'Jun 13 – Aug 22', ticksRelevant: false, notes: 'Mostly suburban with localized ravine pressure. Bayview-adjacent properties flip moderate.' },
]

const TIER_STYLES: Record<PressureTier, { label: string; color: string; bg: string; border: string; ring: string }> = {
  severe:   { label: 'SEVERE',   color: 'text-rose-700',    bg: 'bg-rose-50',    border: 'border-rose-300',    ring: 'bg-rose-500' },
  high:     { label: 'HIGH',     color: 'text-orange-700',  bg: 'bg-orange-50',  border: 'border-orange-300',  ring: 'bg-orange-500' },
  moderate: { label: 'MODERATE', color: 'text-amber-700',   bg: 'bg-amber-50',   border: 'border-amber-300',   ring: 'bg-amber-500' },
  lower:    { label: 'LOWER',    color: 'text-emerald-700', bg: 'bg-emerald-50', border: 'border-emerald-300', ring: 'bg-emerald-500' },
}

const FAQS = [
  {
    question: 'What is the GTA Mosquito Pressure Map?',
    answer: 'A free public reference showing mosquito and tick pressure levels for every city in the Greater Toronto Area, calculated from a combination of geographic factors (ravine systems, water sources, conservation areas, escarpment proximity), Public Health Ontario tick surveillance data, and observed pressure across 200+ GTA properties BuzzSkito has assessed since 2024. Updated annually for the May–September season.',
  },
  {
    question: 'How is GTA mosquito pressure calculated?',
    answer: 'Pressure scores combine four data inputs: (1) proximity to permanent flowing water (rivers, creeks) which sustains continuous breeding May through October; (2) proximity to standing water sources (ponds, wetlands, conservation areas); (3) tree canopy and humidity microclimate factors; (4) Public Health Ontario tick surveillance data for blacklegged tick density. The result is a 0-100 score, where any score above 75 represents above-average pressure for the GTA.',
  },
  {
    question: 'Which GTA city has the worst mosquito problem?',
    answer: 'Toronto, Hamilton, Burlington, and Caledon are tied at the top of the pressure index — each for different reasons. Toronto\'s Don Valley ravine system is the largest urban mosquito reservoir in any North American city. Hamilton sits at the convergence of the Niagara Escarpment, Cootes Paradise wetlands, and the Beverly Swamp. Burlington has Cootes Paradise plus the Mount Nemo Escarpment edge. Caledon contains the Oak Ridges Moraine — one of Ontario\'s highest blacklegged tick density zones.',
  },
  {
    question: 'Where in the GTA are ticks the worst?',
    answer: 'Public Health Ontario tick surveillance flags four GTA zones as Lyme-endemic: (1) Oak Ridges Moraine (Caledon, King City, north Richmond Hill); (2) Rouge National Urban Park (Scarborough, east Markham); (3) Niagara Escarpment edge (Burlington, Halton Hills, Milton); (4) Hamilton-Wentworth conservation lands. Properties within 500m of any of these zones see significantly elevated blacklegged tick burden.',
  },
  {
    question: 'How accurate are the pressure scores?',
    answer: 'Scores are calibrated against observed mosquito pressure at 200+ BuzzSkito-assessed properties since 2024 and validated against Public Health Ontario tick surveillance reports. Within each city the score represents an average — individual properties can swing 30+ points based on neighbourhood and yard features. The free yard risk assessment at /yard-risk-report calculates the actual score for any specific GTA address using the same methodology applied to your individual property factors.',
  },
  {
    question: 'When does mosquito season start in the GTA?',
    answer: 'Mosquito activity in the GTA typically begins late April when daytime temperatures consistently exceed 10°C. Peak activity runs early June through mid-August. Lake-adjacent cities (Toronto, Mississauga, Oakville, Burlington) have a 1-2 week longer season because Lake Ontario humidity sustains pressure into late September. Inland cities (Caledon, King City, Halton Hills) front-load their season with peak activity in late May and a smaller late-August surge.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: 'GTA Mosquito & Tick Pressure Map 2026 — Toronto, Mississauga, Burlington, Hamilton, Brampton',
  description: 'Free interactive pressure map showing 2026 mosquito and tick risk levels for every GTA city. Backed by Public Health Ontario tick surveillance data + 200+ BuzzSkito property assessments. Find your area\'s pressure score and the specific factors driving it.',
  canonical: SLUG,
})

export default function GTAMosquitoPressureMapPage() {
  const sortedCities = [...PRESSURE].sort((a, b) => b.score - a.score)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'GTA Mosquito Pressure Map', url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(SLUG)) }} />

      {/* HERO */}
      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-rose-900 text-white py-14 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs font-extrabold text-amber-400 uppercase tracking-widest mb-3">Free public reference · Updated for 2026 season · Data-backed</p>
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 leading-tight">
            GTA Mosquito &amp; Tick<br className="hidden sm:block" /> <span className="text-amber-400">Pressure Map 2026</span>
          </h1>
          <p className="text-lg text-brand-100 max-w-3xl mx-auto leading-relaxed">Pressure scores for every GTA city, calculated from Public Health Ontario tick surveillance data, geographic features (ravines, wetlands, escarpment), and 200+ BuzzSkito property assessments since 2024.</p>
        </div>
      </section>

      {/* QUICK ANSWER */}
      <section className="bg-amber-50 border-y-4 border-amber-300 py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-extrabold text-amber-700 uppercase tracking-wider mb-2">Quick Answer</p>
          <h2 className="text-xl font-extrabold text-brand-900 mb-3">Which GTA city has the worst mosquito and tick pressure?</h2>
          <p className="text-base text-gray-800 leading-relaxed">
            <strong>Toronto, Hamilton, Burlington, and Caledon are the four highest-pressure cities in the Greater Toronto Area for 2026, each scoring 88–92 out of 100 on the GTA Pressure Index.</strong> Toronto&rsquo;s Don Valley ravine network (largest urban ravine system in North America), Hamilton&rsquo;s Cootes Paradise wetlands + Niagara Escarpment, Burlington&rsquo;s escarpment edge, and Caledon&rsquo;s Oak Ridges Moraine all create severe mosquito and tick conditions. Mississauga, Oakville, Halton Hills, Milton, Scarborough, and Markham score in the high range (76–82). Brampton, Vaughan, Richmond Hill, North York, Etobicoke, Woodbridge, Kleinburg, King City, and Georgetown score moderate (57–68). Thornhill is the only GTA city in the lower-pressure tier (52). Within any city, individual properties swing ±30 points based on neighbourhood and yard features — see your specific property&rsquo;s score below.
          </p>
        </div>
      </section>

      {/* MAP / LEGEND */}
      <section className="bg-white py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-2">Pressure tiers across the GTA</h2>
          <p className="text-sm text-gray-600 mb-6">Sorted from highest to lowest. Click any city to expand its profile, top neighbourhoods, and peak weeks.</p>
          <div className="flex flex-wrap gap-3 mb-6 text-xs">
            {(['severe', 'high', 'moderate', 'lower'] as const).map((tier) => (
              <div key={tier} className={`flex items-center gap-2 ${TIER_STYLES[tier].bg} ${TIER_STYLES[tier].border} border rounded-full px-3 py-1.5`}>
                <span className={`w-3 h-3 rounded-full ${TIER_STYLES[tier].ring}`}></span>
                <span className={`font-bold ${TIER_STYLES[tier].color}`}>{TIER_STYLES[tier].label}</span>
                <span className="text-gray-500">{tier === 'severe' ? '85+' : tier === 'high' ? '75–84' : tier === 'moderate' ? '55–74' : 'Under 55'}</span>
              </div>
            ))}
          </div>

          {/* CITY GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
            {sortedCities.map((c) => {
              const style = TIER_STYLES[c.tier]
              return (
                <details key={c.city} className={`group ${style.bg} ${style.border} border-2 rounded-2xl overflow-hidden transition-all hover:shadow-md`}>
                  <summary className="cursor-pointer px-5 py-4 list-none flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className={`w-12 h-12 rounded-full ${style.ring} text-white flex items-center justify-center font-black text-sm shrink-0`}>
                        {c.score}
                      </div>
                      <div className="min-w-0">
                        <p className="font-extrabold text-brand-900 truncate">{c.city}</p>
                        <p className={`text-[10px] font-bold uppercase tracking-wide ${style.color}`}>{style.label} pressure</p>
                      </div>
                    </div>
                    <svg className="w-5 h-5 text-brand-400 shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </summary>
                  <div className="px-5 pb-5 space-y-3 text-sm">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-gray-600 mb-1">Primary pressure driver</p>
                      <p className="text-gray-800">{c.primaryDriver}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-gray-600 mb-1">Top high-pressure neighbourhoods</p>
                      <p className="text-gray-700 text-xs">{c.topNeighbourhoods.join(' · ')}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-gray-600 mb-1">Peak risk window</p>
                      <p className="text-gray-700 text-xs">{c.peakWeeks}</p>
                    </div>
                    {c.ticksRelevant && (
                      <div className="bg-rose-50 border border-rose-200 rounded-lg px-3 py-2">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-rose-700 mb-0.5">⚠️ Lyme-relevant tick density</p>
                        <p className="text-rose-800 text-[11px]">Public Health Ontario flags this area for blacklegged tick surveillance.</p>
                      </div>
                    )}
                    <p className="text-xs text-gray-700 leading-relaxed pt-1">{c.notes}</p>
                    <div className="flex flex-col sm:flex-row gap-2 pt-2">
                      <Link href="/yard-risk-report" className="inline-block bg-amber-500 hover:bg-amber-400 text-white text-center font-bold px-4 py-2 rounded-full text-xs transition-colors">Get YOUR specific score (60s) →</Link>
                      <Link href={c.slug} className="inline-block bg-white border border-brand-200 hover:bg-brand-50 text-brand-800 text-center font-semibold px-4 py-2 rounded-full text-xs transition-colors">{c.city} mosquito control →</Link>
                    </div>
                  </div>
                </details>
              )
            })}
          </div>

          {/* PRIMARY CTA */}
          <div className="rounded-2xl bg-gradient-to-br from-brand-900 to-brand-950 text-white p-7 sm:p-9 text-center shadow-xl">
            <p className="text-xs font-extrabold text-amber-400 uppercase tracking-widest mb-2">Free 60-second tool</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">City averages don&rsquo;t tell your yard&rsquo;s story.</h2>
            <p className="text-brand-200 max-w-2xl mx-auto mb-5 leading-relaxed">A &ldquo;moderate&rdquo; Brampton home backing onto Heart Lake outscores a &ldquo;severe&rdquo; Toronto home in an open neighbourhood. Get your <strong className="text-white">specific 1-100 pressure score</strong> based on your address, lot, and yard features.</p>
            <Link href="/yard-risk-report" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-2xl transition-colors">Get My Yard&rsquo;s Free Score →</Link>
            <p className="text-[11px] text-brand-300 mt-3">🔒 No credit card · Used by 129 five-star GTA homeowners</p>
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-3xl mx-auto prose-brand">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-3">How GTA pressure scores are calculated</h2>
          <p className="text-gray-700 mb-4">The GTA Mosquito &amp; Tick Pressure Index combines four input categories. Scores are calibrated against observed pressure at BuzzSkito-treated properties and cross-referenced with Public Health Ontario tick surveillance data updated annually.</p>

          <h3 className="text-lg font-extrabold text-brand-900 mt-6 mb-2">1. Permanent flowing water proximity</h3>
          <p className="text-gray-700 mb-4">Rivers and major creeks support continuous mosquito breeding from May through October. The Credit River, Don Valley system, Humber River, Sixteen Mile Creek, Bronte Creek, and Etobicoke Creek are the largest contributors. Properties within 500m of permanent flowing water see 3–5x average city pressure.</p>

          <h3 className="text-lg font-extrabold text-brand-900 mt-6 mb-2">2. Standing water and wetland systems</h3>
          <p className="text-gray-700 mb-4">Cootes Paradise, Beverly Swamp, Heart Lake Conservation Area, Rattray Marsh, and dozens of stormwater management ponds across the GTA produce localized severe mosquito populations. Stormwater ponds in particular are an under-recognized driver in newer suburban neighbourhoods.</p>

          <h3 className="text-lg font-extrabold text-brand-900 mt-6 mb-2">3. Tree canopy and humidity microclimate</h3>
          <p className="text-gray-700 mb-4">Mature tree canopy + lake-adjacent humidity creates the still-air resting habitat adult mosquitoes prefer during the day. Toronto&rsquo;s Old Forest neighbourhoods (Forest Hill, Rosedale, Lawrence Park) and Mississauga&rsquo;s Lorne Park / Mineola see canopy-driven elevated pressure regardless of water proximity.</p>

          <h3 className="text-lg font-extrabold text-brand-900 mt-6 mb-2">4. Public Health Ontario tick surveillance data</h3>
          <p className="text-gray-700 mb-4">PHO publishes annual blacklegged tick (<em>Ixodes scapularis</em>) surveillance reports identifying Lyme-endemic zones. The four GTA Lyme-endemic zones are: Oak Ridges Moraine (Caledon, King City, north Richmond Hill); Rouge National Urban Park (Scarborough, east Markham); Niagara Escarpment edge (Burlington, Halton Hills, Milton); and the Hamilton-Wentworth conservation lands. Cities containing or bordering these zones have elevated tick scores.</p>

          <h2 className="text-2xl font-extrabold text-brand-900 mt-10 mb-3">Why pressure varies dramatically within a single city</h2>
          <p className="text-gray-700 mb-4">A &ldquo;moderate&rdquo; Brampton score reflects a city average — but Heart Lake-adjacent properties in north Brampton score in the severe range, while open suburban lots in Mount Pleasant score in the lower range. The city average is useful for general planning, but actual property pressure can swing 30+ points based on:</p>
          <ul className="text-gray-700 mb-4 space-y-1">
            <li><strong>Distance to nearest flowing water</strong> (river or major creek)</li>
            <li><strong>Distance to standing water</strong> (pond, conservation wetland, stormwater pond)</li>
            <li><strong>Lot vegetation density</strong> (wooded vs. open)</li>
            <li><strong>Proximity to ravine systems</strong></li>
            <li><strong>Neighbouring property water features</strong> (a neighbour&rsquo;s pond affects you)</li>
          </ul>
          <p className="text-gray-700 mb-4">For an actual property-level score, the <Link href="/yard-risk-report" className="text-brand-700 underline font-semibold">free 60-second yard risk assessment</Link> calculates your specific 1-100 score based on your address, lot, features, and family situation.</p>

          <h2 className="text-2xl font-extrabold text-brand-900 mt-10 mb-3">Sources &amp; methodology</h2>
          <ul className="text-gray-700 mb-4 space-y-1 text-sm">
            <li><a href="https://www.publichealthontario.ca/en/Data-and-Analysis/Infectious-Disease/Lyme-Disease-Active-Tick-Surveillance" target="_blank" rel="noopener noreferrer" className="text-brand-700 underline">Public Health Ontario — Lyme Disease Active Tick Surveillance</a></li>
            <li><a href="https://www.publichealthontario.ca/en/Diseases-and-Conditions/Infectious-Diseases/Vector-Borne-Zoonotic-Diseases/West-Nile-Virus" target="_blank" rel="noopener noreferrer" className="text-brand-700 underline">PHO — West Nile Virus surveillance</a></li>
            <li><a href="https://www.cdc.gov/lyme/index.html" target="_blank" rel="noopener noreferrer" className="text-brand-700 underline">CDC — Lyme Disease (cross-border tick density data)</a></li>
            <li><a href="https://www.etick.ca/" target="_blank" rel="noopener noreferrer" className="text-brand-700 underline">eTick.ca — citizen-science tick identification (Bishop&rsquo;s University)</a></li>
            <li>200+ BuzzSkito property assessments across the 19 GTA cities (proprietary data, May 2024 – May 2026)</li>
          </ul>
          <p className="text-xs text-gray-500 mt-4">This map is updated annually before the start of each mosquito season. Last updated May 2026 for the 2026 season. Pressure scores are advisory only — for medical concerns about Lyme disease or West Nile virus, contact your local public health unit.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-12 px-4 border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6 text-center">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {FAQS.map(({ question, answer }) => (
              <details key={question} className="bg-gray-50 rounded-xl border border-brand-100 group">
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
    </>
  )
}
