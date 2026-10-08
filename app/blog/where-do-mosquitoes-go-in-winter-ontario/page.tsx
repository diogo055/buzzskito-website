import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import AuthorByline from '@/components/AuthorByline'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'

const SLUG = 'where-do-mosquitoes-go-in-winter-ontario'
const DATE = '2026-07-12'
const UPDATED = '2026-07-12'
const TITLE = 'Where Do Mosquitoes Go in Winter? (Ontario Explained)'
const META_TITLE = 'Where Do Mosquitoes Go in Winter? US & Canada'

const FAQS = [
  {
    question: 'Where do mosquitoes go in winter in Ontario?',
    answer: 'They do not go anywhere — they overwinter in place. Depending on the species, mosquitoes survive an Ontario winter as cold-hardy eggs waiting in dry soil, as mated adult females hibernating in a dormant state called diapause, or as larvae resting at the bottom of unfrozen water. Common shelters for diapausing females include culverts, sewers, hollow logs, animal burrows, sheds, garages, crawl spaces, and basements.',
  },
  {
    question: 'Do mosquitoes die in winter?',
    answer: 'Most individual mosquitoes you see in summer do die by fall — all the males and most of the females live only a few weeks. But the species survives. Mated Culex and Anopheles females that entered diapause survive the winter, and Aedes species survive as frost-tolerant eggs. So the population is not wiped out by cold; it simply pauses and waits for spring.',
  },
  {
    question: 'What do mosquitoes do in winter?',
    answer: 'They enter diapause, a hormone-driven dormancy similar to hibernation. Triggered by shortening daylight and falling temperatures in fall, diapausing female mosquitoes stop seeking blood, build up fat reserves, slow their metabolism almost to a standstill, and shelter in a protected spot. They produce cryoprotectant compounds like glycerol that act as a natural antifreeze, letting them survive months of cold until spring.',
  },
  {
    question: 'What temperature kills mosquitoes or stops them?',
    answer: 'Mosquitoes become sluggish and mostly stop flying once sustained temperatures drop below about 10°C (50°F). Below roughly 15°C their activity, biting, and breeding slow sharply. Cold itself does not reliably kill overwintering mosquitoes, because diapausing females and Aedes eggs are cold-adapted and produce antifreeze compounds. A hard, sustained deep freeze can kill some exposed individuals, but sheltered females and buried eggs routinely survive an Ontario winter.',
  },
  {
    question: 'At what temperature do mosquitoes come back and become active?',
    answer: 'Overwintered mosquitoes wake and resume activity when temperatures stay above about 10°C (50°F), with biting and breeding ramping up above 15–20°C. In the GTA that typically means the first mosquitoes reappear in April, with the season building through May and peaking in June and July. Longer spring days and spring meltwater are the cues that end diapause and hatch overwintered eggs.',
  },
  {
    question: 'Where do mosquitoes hide during the winter?',
    answer: 'Diapausing female mosquitoes seek dark, humid, frost-protected shelter: storm sewers, culverts, hollow trees and logs, rodent and animal burrows, leaf litter, wood piles, and human structures such as sheds, garages, crawl spaces, unheated basements, and attics. Aedes eggs, by contrast, are not hidden in shelters — they sit glued to the walls of dry containers, tree holes, and low spots that will flood in spring.',
  },
  {
    question: 'Why do mosquitoes come back in May in Ontario?',
    answer: 'Two things happen in spring. Overwintered Culex and Anopheles females emerge from shelter, take a first blood meal, and lay the first eggs of the year. At the same time, Aedes eggs that survived winter in dry low spots hatch as soon as snowmelt and spring rain flood them. Together these produce the first generation, which is why mosquitoes seem to appear all at once in late April and May.',
  },
  {
    question: 'Can mosquitoes survive freezing temperatures?',
    answer: 'Yes. Overwintering Aedes eggs tolerate freezing and can survive well below 0°C, and diapausing adult females survive subfreezing conditions in sheltered spots thanks to glycerol and other cryoprotectants that lower the temperature at which their tissues freeze. This cold tolerance is exactly why a harsh Ontario winter does not eliminate next summer’s mosquitoes.',
  },
  {
    question: 'Do mosquitoes hibernate?',
    answer: 'In a sense, yes — mated female Culex and Anopheles mosquitoes survive winter in a hibernation-like dormancy called diapause. Triggered by shortening fall daylight, they stop biting, build up fat reserves, slow their metabolism to a crawl, and shelter in culverts, sewers, sheds, and basements until spring. Other Ontario mosquitoes skip this entirely and overwinter as frost-hardy Aedes eggs or as dormant larvae instead. Every male mosquito dies in the fall; only mated females hibernate.',
  },
  {
    question: 'How do mosquitoes survive winter?',
    answer: 'Ontario mosquitoes survive winter using one of three strategies, depending on the species. Mated Culex and Anopheles females hibernate as adults in a dormant state called diapause, sheltering in culverts, sheds, and basements. Aedes species overwinter as frost-tolerant eggs glued to dry surfaces, which hatch when spring meltwater floods them. A few species ride out the cold as dormant larvae in unfrozen water. Diapausing females also produce glycerol, a natural antifreeze that keeps their tissues from freezing.',
  },
  {
    question: 'What happens to mosquitoes in the winter?',
    answer: 'Most of the mosquitoes you see in summer die by fall — all the males and many females live only a week or two. But the species does not disappear: mated Culex and Anopheles females survive by hibernating in diapause, Aedes species persist as frost-hardy eggs, and some species overwinter as dormant larvae underwater. Cold pauses the population rather than erasing it, which is why mosquitoes reliably return the following spring once temperatures climb past about 10°C.',
  },
  {
    question: 'Where do mosquitoes go in the winter in the United States?',
    answer: 'It depends on how cold the winter is. In the northern states many species overwinter as dormant eggs, house mosquitoes (Culex) and Anopheles overwinter as mated adult females in culverts, basements and other sheltered places, and a few species overwinter as larvae in mud or attached to plant roots. In south Florida, along the Gulf Coast and in Hawaii, mosquitoes stay present all year and simply become less active during cool spells.',
  },
  {
    question: 'Are there mosquitoes in Florida and Texas in the winter?',
    answer: 'Yes. In southwest Florida the local mosquito control district reports that mosquitoes can be found 12 months of the year, with breeding slowing when temperatures drop below 55°F. On the Texas Gulf Coast, researchers report that the southern house mosquito does not enter a true winter dormancy: adults become relatively inactive during cold periods and fly again during warm ones. Winter numbers are lower, but repellent and standing-water checks still matter.',
  },
  {
    question: 'At what temperature in Fahrenheit do mosquitoes stop flying?',
    answer: 'About 50°F. University of Florida IFAS Extension states that mosquito flight activity is reduced at around 60°F and that mosquitoes are inactive at 50°F and lower. That number describes activity, not survival: overwintering eggs and sheltered adult females live through much colder weather, and activity resumes once temperatures climb back above about 50°F in spring.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'Where mosquitoes go in winter: frost-hardy eggs, hibernating females or dormant larvae, by species. When they return, by US region and in Ontario.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

export default function WhereDoMosquitoesGoInWinterOntarioPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'How mosquitoes overwinter in Ontario and why they return in spring.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Where Do Mosquitoes Go in Winter?', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Where Do Mosquitoes Go in Winter?</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">They don&rsquo;t disappear — they overwinter as eggs, hibernating females, or dormant larvae, then come back in May. Here&rsquo;s exactly how.</p>
        </div>
      </section>

      {/* Quick Answer — AI-extraction capsule */}
      <section className="bg-white pt-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-base text-gray-800 leading-relaxed">
              <strong>Ontario mosquitoes don&rsquo;t die out in winter — they survive it.</strong> Depending on the species, cold-hardy Aedes eggs wait in dry soil, mated Culex females hibernate in a dormant state called diapause inside sheltered spots, and some larvae overwinter underwater. When spring warms past about 10&deg;C, they wake, breed, and return in May. That is why a harsh winter never wipes out next summer&rsquo;s mosquitoes.
            </p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>Mated Culex females (the West Nile vector) overwinter as adults in diapause inside sewers, culverts, sheds, and basements.</li>
              <li>Aedes and floodwater mosquitoes survive as frost-tolerant eggs in dry soil, tree holes, and container walls.</li>
              <li>Some species, such as Coquillettidia, overwinter as larvae attached to plant roots in unfrozen water.</li>
              <li>Mosquitoes wake and resume breeding once temperatures stay above about 10&deg;C, usually in May.</li>
              <li>All male mosquitoes die in fall and do not overwinter; their lifespan is only about 1&ndash;2 weeks.</li>
              <li>Because eggs and hibernating females survive, a harsh winter never wipes out the next summer&rsquo;s population.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito, GTA mosquito &amp; tick control &middot; 150+ five-star Google reviews</p>
          </div>
        </div>
      </section>

      {/* Overwintering strategy table */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">How Ontario Mosquitoes Survive Winter (by Type)</h2>
          <div className="rounded-xl border border-gray-200 overflow-x-auto">
            <table className="min-w-[560px] w-full text-sm">
              <thead className="bg-brand-50">
                <tr>
                  <th className="px-3 py-2 text-left">Mosquito group</th>
                  <th className="px-3 py-2 text-left">Overwinters as</th>
                  <th className="px-3 py-2 text-left">Where</th>
                  <th className="px-3 py-2 text-left">What wakes it</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Culex (e.g. C. pipiens — West Nile vector)', 'Mated adult female in diapause', 'Sewers, culverts, sheds, basements, crawl spaces', 'Sustained warmth above ~10°C + longer days'],
                  ['Anopheles', 'Mated adult female in diapause', 'Hollow logs, animal burrows, structures', 'Spring warmth; first blood meal'],
                  ['Aedes / floodwater mosquitoes', 'Cold-hardy eggs (frost-tolerant)', 'Dry soil, tree holes, container walls, low spots', 'Spring meltwater and rain flooding the eggs'],
                  ['Coquillettidia / some others', 'Larvae', 'Attached to plant roots in unfrozen water', 'Water warming in late spring'],
                  ['All male mosquitoes', 'Do not overwinter', '—', 'They die in fall (lifespan ~1–2 weeks)'],
                ].map(([grp, stage, where, wake]) => (
                  <tr key={grp} className="border-t border-gray-100 align-top">
                    <td className="px-3 py-2 font-semibold text-brand-800">{grp}</td>
                    <td className="px-3 py-2 text-gray-700">{stage}</td>
                    <td className="px-3 py-2 text-gray-700">{where}</td>
                    <td className="px-3 py-2 text-gray-700">{wake}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">Overwintering strategies and cold behaviour per the <a href="https://www.cdc.gov/mosquitoes/" target="_blank" rel="noopener" className="underline hover:text-brand-700">U.S. Centers for Disease Control and Prevention (CDC) — Mosquitoes</a>.</p>
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />

          <h2>Three Ways Mosquitoes Beat the Cold</h2>
          <p>People assume the first hard frost ends the mosquito problem for good. It doesn&rsquo;t. The individual mosquitoes biting you in July are gone by October, but the species has three separate survival strategies that carry it through an Ontario winter and straight into next spring.</p>
          <p><strong>1. Hibernating adult females (diapause).</strong> This is the strategy of <em>Culex</em> mosquitoes — including <em>Culex pipiens</em>, the main West Nile virus carrier in Ontario &mdash; and <em>Anopheles</em>. In late summer, mated females stop laying eggs, gorge on plant sugars to build fat, and slip into a protected shelter. Only mated females do this; every male dies in the fall. These females don&rsquo;t breed over winter — they simply survive, then lay the first eggs of the year in spring.</p>
          <p><strong>2. Cold-hardy eggs.</strong> <em>Aedes</em> mosquitoes (including the aggressive daytime-biting floodwater species) take a completely different approach. The female glues her eggs to the dry sides of tree holes, containers, tires, clogged gutters, and low spots in the yard. Those eggs are frost-tolerant — they can survive freezing and months of cold, then hatch the moment spring meltwater or rain floods them. The eggs, not the adults, are what carry the population through winter.</p>
          <p><strong>3. Overwintering larvae.</strong> A few species ride out winter as larvae, dormant at the bottom of ponds and marshes or attached to plant roots in water that never fully freezes. They resume development once the water warms in late spring.</p>

          <h2>Diapause: A Mosquito&rsquo;s Version of Hibernation</h2>
          <p>Diapause is not just &ldquo;getting sleepy in the cold.&rdquo; It is a programmed dormancy triggered mainly by <strong>shortening daylight</strong> in late summer and early fall, reinforced by dropping temperatures. Once a female mosquito reads those cues, her body changes: she stops seeking blood, her ovaries pause, her metabolism slows to a crawl, and she stockpiles fat to live on for months.</p>
          <p>Crucially, diapausing mosquitoes also produce <strong>cryoprotectants</strong> — compounds such as glycerol that behave like a natural antifreeze, lowering the temperature at which their tissues would freeze and rupture. This is why a cold snap that would kill an active summer mosquito doesn&rsquo;t reliably kill a hibernating one. The female is chemically and behaviourally built to survive subfreezing conditions in her sheltered spot.</p>
          <p>It also explains the mosquito that turns up indoors out of season. A diapausing <em>Culex</em> female sheltering in a heated basement, crawl space, or attached garage sits in far warmer conditions than the shed she was aiming for, and a warm stretch can rouse her into flying around the house in the middle of winter. If one is circling your bedroom in February, our guide to <Link href="/blog/how-to-get-rid-of-mosquitoes-in-the-house">getting rid of mosquitoes inside the house</Link> covers where to look for her and what actually works indoors.</p>

          <h2>What Temperature Stops — and Wakes — Mosquitoes</h2>
          <p>Mosquito activity is governed by temperature more than by the calendar. Here are the practical thresholds for the GTA:</p>
          <table className="not-prose w-full text-sm border-collapse border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead className="bg-brand-50">
              <tr><th className="px-3 py-2 text-left">Temperature</th><th className="px-3 py-2 text-left">What mosquitoes do</th></tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-100"><td className="px-3 py-2 font-semibold">Below ~10&deg;C (50&deg;F)</td><td className="px-3 py-2">Flight mostly stops; adults become sluggish. Diapause conditions.</td></tr>
              <tr className="border-t border-gray-100"><td className="px-3 py-2 font-semibold">10–15&deg;C</td><td className="px-3 py-2">Overwintered females stir; limited activity, little biting.</td></tr>
              <tr className="border-t border-gray-100"><td className="px-3 py-2 font-semibold">15–20&deg;C</td><td className="px-3 py-2">Biting and egg-laying begin; first generation gets going.</td></tr>
              <tr className="border-t border-gray-100"><td className="px-3 py-2 font-semibold">Above 20&deg;C</td><td className="px-3 py-2">Peak activity and fast breeding — the summer swarm.</td></tr>
            </tbody>
          </table>
          <p>Notice what&rsquo;s missing: a &ldquo;kill&rdquo; temperature. Cold pauses mosquitoes; it doesn&rsquo;t dependably kill the overwintering ones. Sheltered diapausing females and buried Aedes eggs are cold-adapted, so even a brutal Ontario winter leaves plenty of survivors to restart the population. The takeaway isn&rsquo;t &ldquo;wait for winter to solve it&rdquo; — it&rsquo;s that the reset button never really gets pressed.</p>
          <p>There is a number for the adults you can see, mind you: a sustained hard frost around -2&deg;C finishes off active adults, while a light frost near 0&deg;C only stuns them. We put the full threshold table together in <Link href="/blog/what-temperature-kills-mosquitoes">what temperature kills mosquitoes</Link>.</p>

          <aside aria-label="Professional mosquito control" className="not-prose my-8 rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-white p-6 sm:p-7 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-extrabold text-brand-900 mb-2 leading-tight">Hit the first generation before it multiplies</h3>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">Because overwintered females and eggs restart the population every spring, an early-season barrier spray knocks out the first generation before it explodes into the July swarm. BuzzSkito protects GTA yards with seasonal programs and single treatments from $99.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/free-yard-assessment" className="btn-primary-sm">Get a Free Quote →</Link>
              <a href="tel:+12892165030" className="font-bold text-brand-800 hover:text-brand-600 transition-colors">(289) 216-5030</a>
            </div>
          </aside>

          <h2>Why Mosquitoes Come Back in May</h2>
          <p>The spring rebound happens on two fronts at once. First, the overwintered <em>Culex</em> and <em>Anopheles</em> females leave their shelters as the weather warms, take a first blood meal, and lay the season&rsquo;s first batch of eggs. Second, the frost-hardy <em>Aedes</em> eggs that spent winter glued to dry surfaces hatch as soon as snowmelt and spring rain flood the low spots they were laid in.</p>
          <p>Both waves land within a few weeks of each other, which is why mosquitoes seem to appear &ldquo;out of nowhere&rdquo; in late April and May. From there it compounds fast: each female lays 100–300 eggs, a generation completes in as little as 8–10 days in warm weather, and populations climb steadily toward the June–July peak. For the full GTA timeline, see our guide on <Link href="/blog/mosquito-season-gta-when-does-it-start">when mosquito season starts in the GTA</Link>.</p>

          <h2>What Winter Survival Means for Spring Yard Prep</h2>
          <p>If mosquitoes overwinter right in your yard, the smartest thing you can do is deny that first generation the water it needs — before it ever hatches. A little work in April pays off for the entire season:</p>
          <ol>
            <li><strong>Drain standing water early.</strong> Snowmelt pools, clogged gutters, tarps, buckets, planters, tires, and toys are where overwintered Aedes eggs hatch and where the first Culex females lay. Empty or cover them before the yard warms up. Our list of <Link href="/blog/hidden-mosquito-breeding-spots-backyard">hidden mosquito breeding spots</Link> shows the ones most people miss.</li>
            <li><strong>Clear leaf litter and yard debris.</strong> Damp leaf piles, wood stacks, and overgrown edges give diapausing females somewhere to shelter and hold the humidity mosquitoes love.</li>
            <li><strong>Refresh or flush water features weekly.</strong> Bird baths, plant saucers, and unfiltered ponds turn into nurseries the moment the water warms.</li>
            <li><strong>Book barrier treatment early.</strong> Starting a <Link href="/mosquito-control">professional mosquito control</Link> program at the start of the season targets the first emerging generation, so populations never get the running start that makes July miserable.</li>
          </ol>
          <p>You can&rsquo;t change the fact that mosquitoes survive winter — but you can decide how big a head start they get in spring. The homeowners who prep in April, not July, are the ones enjoying their yards during peak season.</p>

          <h2>Where Mosquitoes Go in Winter in the United States: What Is Different</h2>
          <p>In the United States the answer depends on latitude: across the northern states mosquitoes overwinter the same three ways they do in Ontario (as dormant eggs, as sheltered adult females or as larvae), while in south Florida, along the Gulf Coast and in Hawaii many of them never fully stop. The biology described above is the same on both sides of the border. What changes is how long the cold lasts, which species dominate, and whether winter is cold enough to force a real shutdown at all. With about 180 mosquito species in the country, according to <a href="https://extension.arizona.edu/sites/default/files/pubs/az1706-2019.pdf" target="_blank" rel="noopener noreferrer">University of Arizona Cooperative Extension</a>, no single winter story covers them all, so the sections below take it one region at a time.</p>

          <h3>The 50&deg;F line: when mosquitoes stop flying</h3>
          <p>Mosquitoes stop flying at about 50&deg;F. University of Florida IFAS Extension describes it in two steps in the <a href="https://ask.ifas.ufl.edu/publication/IN1045" target="_blank" rel="noopener noreferrer">UF/IFAS guide to mosquito control around homes</a>: flight activity is reduced at temperatures around 60&deg;F, and mosquitoes are inactive at 50&deg;F and lower. <a href="https://extension.msstate.edu/blog/tips-for-reducing-mosquito-bites" target="_blank" rel="noopener noreferrer">Mississippi State University Extension</a> gives the same number from the other direction, describing mosquitoes as often most active when the temperature is above 50&deg;F. A veterinary entomologist with <a href="https://research.entomology.tamu.edu/2020/06/25/agrilife-extension-experts-time-to-say-no-to-mosquitoes/" target="_blank" rel="noopener noreferrer">Texas A&amp;M AgriLife Extension</a> sets the practical cutoff slightly higher, noting that mosquitoes typically are not around once the thermometer dips below the mid-50s, because they are cold-blooded and cannot regulate their own body temperature.</p>
          <p>For a US reader the useful point is that this is a temperature rule, not a calendar rule. Where winter days stay below that line for months, the outdoor shutdown lasts for months too. Where a January afternoon regularly climbs into the 60s, the same threshold predicts flying, biting mosquitoes in midwinter, which is what researchers on the Gulf Coast have recorded (see below). The 50&deg;F figure also describes activity, not survival: it marks the point where adults stop moving, not the point where overwintering eggs or sheltered females die.</p>

          <h3>Northern states: which species overwinter as eggs, adults or larvae</h3>
          <p>In the northern states many mosquito species overwinter as eggs, others overwinter as mated adult females, and a few pass the winter as larvae. <a href="https://www.extension.entm.purdue.edu/publichealth/insects/mosquito.html" target="_blank" rel="noopener noreferrer">Purdue University&rsquo;s medical entomology program</a> describes the vast majority of Indiana mosquitoes as spending winter dormant in one of two forms: delayed-hatching eggs laid in sites that will flood the following spring and summer, or mated females sheltering in places such as caves, culverts and human dwellings. Purdue puts the state&rsquo;s documented total at approximately 55 species, of which only about 12 to 15 matter for public health. Its genus-by-genus notes, together with one Alaskan exception, give a clear picture of who does what:</p>
          <div className="not-prose my-6 overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-brand-50">
                <tr>
                  <th className="px-3 py-2 text-left">Mosquito group (US)</th>
                  <th className="px-3 py-2 text-left">Overwinters as</th>
                  <th className="px-3 py-2 text-left">What the source reports</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100 align-top">
                  <td className="px-3 py-2 font-semibold text-brand-800">Aedes and Ochlerotatus (includes floodwater and container mosquitoes)</td>
                  <td className="px-3 py-2 text-gray-700">Eggs</td>
                  <td className="px-3 py-2 text-gray-700">Every Indiana species in these two genera overwinters as eggs; the adult females do not survive the winter.</td>
                </tr>
                <tr className="border-t border-gray-100 align-top">
                  <td className="px-3 py-2 font-semibold text-brand-800">Psorophora</td>
                  <td className="px-3 py-2 text-gray-700">Eggs</td>
                  <td className="px-3 py-2 text-gray-700">All Psorophora species overwinter as eggs.</td>
                </tr>
                <tr className="border-t border-gray-100 align-top">
                  <td className="px-3 py-2 font-semibold text-brand-800">Culex (house mosquitoes)</td>
                  <td className="px-3 py-2 text-gray-700">Mated adult females</td>
                  <td className="px-3 py-2 text-gray-700">All species overwinter as mated females and become active again from late spring to midsummer, depending on the species.</td>
                </tr>
                <tr className="border-t border-gray-100 align-top">
                  <td className="px-3 py-2 font-semibold text-brand-800">Anopheles</td>
                  <td className="px-3 py-2 text-gray-700">Mated adult females</td>
                  <td className="px-3 py-2 text-gray-700">Females become active the following spring and are among the first mosquitoes to bite people each year.</td>
                </tr>
                <tr className="border-t border-gray-100 align-top">
                  <td className="px-3 py-2 font-semibold text-brand-800">Culiseta inornata</td>
                  <td className="px-3 py-2 text-gray-700">Mated adult females</td>
                  <td className="px-3 py-2 text-gray-700">Among the earliest mosquitoes to appear the following April.</td>
                </tr>
                <tr className="border-t border-gray-100 align-top">
                  <td className="px-3 py-2 font-semibold text-brand-800">Culiseta melanura</td>
                  <td className="px-3 py-2 text-gray-700">Larvae</td>
                  <td className="px-3 py-2 text-gray-700">Larvae overwinter in the mud at the bottom of the ground-level tree holes where they develop.</td>
                </tr>
                <tr className="border-t border-gray-100 align-top">
                  <td className="px-3 py-2 font-semibold text-brand-800">Coquillettidia perturbans (develops among cattails)</td>
                  <td className="px-3 py-2 text-gray-700">Larvae</td>
                  <td className="px-3 py-2 text-gray-700">Larvae overwinter attached to plant roots and stems in subsurface mud.</td>
                </tr>
                <tr className="border-t border-gray-100 align-top">
                  <td className="px-3 py-2 font-semibold text-brand-800">Snow mosquito, Culiseta alaskaensis (Alaska)</td>
                  <td className="px-3 py-2 text-gray-700">Adults, under the snow</td>
                  <td className="px-3 py-2 text-gray-700">Overwinters as an adult in leaf litter, beneath loose tree bark or in dead stumps, while most Alaskan mosquitoes spend the winter as eggs.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500">Indiana rows: Purdue University medical entomology (linked above). Alaska row: <a href="https://www.gi.alaska.edu/alaska-science-forum/how-mosquitoes-overwinter-alaska" target="_blank" rel="noopener noreferrer">University of Alaska Fairbanks Geophysical Institute</a>.</p>
          <p>Cold is part of the mechanism, not only an obstacle. Purdue explains that an extended period of cold, equivalent to the passage of winter, is required before delayed-hatching eggs that have dried can hatch, and that the same is true before overwintering females are able to develop eggs. In the cold states, in other words, dormancy is built to outlast the whole winter instead of ending at the first mild spell.</p>
          <p>For the northern house mosquito, <em>Culex pipiens</em>, <a href="https://vectorbio.rutgers.edu/outreach/species/cxpip.htm" target="_blank" rel="noopener noreferrer">Rutgers University&rsquo;s Center for Vector Biology</a> lays out the sequence. The last generation of adult females each year mates and builds up fat by feeding on carbohydrates. Those mated females then take refuge in culverts, basements and other protected places that stay above freezing, where their metabolism slows considerably and they spend the winter in a state of torpor. The ones that survive take a blood meal in spring and lay the eggs that produce the summer population.</p>
          <p>Those hibernating females matter for disease as well as for nuisance. In January and February 2000, after the 1999 West Nile outbreak in New York, researchers collected 2,383 overwintering adult mosquitoes in Queens and the Bronx and tested them in 91 pools. Three pools carried West Nile viral RNA and live virus was isolated from one of them, according to <a href="https://wwwnc.cdc.gov/eid/article/7/4/01-7426" target="_blank" rel="noopener noreferrer">a study in the CDC journal Emerging Infectious Diseases</a>, which concluded that the virus had persisted in mosquitoes at least through midwinter.</p>
          <p>The larval strategy has been measured directly in New England. Scientists at the Connecticut Agricultural Experiment Station sampled a forested swamp every week from December 13, 2011 to May 31, 2012 and collected 8,626 immature <em>Culiseta melanura</em> from water-filled cavities under tree roots. Ice formed over the entrance holes, yet the water inside stayed above freezing through January and February, and second-, third- and fourth-stage larvae all came through the winter without developing and without measurable losses. Development resumed in mid-April as the water warmed to 9&deg;C (about 48&deg;F), the team reported in the <a href="https://portal.ct.gov/-/media/caes/documents/biographies/andreadis/andreadisetaljamca2012pdf.pdf" target="_blank" rel="noopener noreferrer">Journal of the American Mosquito Control Association</a>. The species gets that attention because it is the primary mosquito that keeps eastern equine encephalitis virus circulating among wild animals.</p>

          <h3>The Asian tiger mosquito: one species, two winter strategies</h3>
          <p>The Asian tiger mosquito, <em>Aedes albopictus</em>, overwinters as dormant eggs in the northern part of its US range and is often active through the winter in the southern part. A <a href="https://about.illinoisstate.edu/sajulian/files/2019/10/leisnham-et-al-11-ANNALS-geog-var-lif-hist.pdf" target="_blank" rel="noopener noreferrer">study in the Annals of the Entomological Society of America</a> follows the species from its arrival through a port in Houston, Texas in the mid-1980s to a range spanning 14 degrees of latitude. In temperate areas, the authors report, almost all adults die in winter and the population survives almost exclusively as diapausing eggs. In subtropical areas, as far south as the southernmost counties of Florida, larvae and adults are often active during the winter.</p>
          <p>The same paper measured the difference in the laboratory. Under short, fall-like day lengths, dormant eggs made up 81.9 to 92.1 percent of the viable eggs laid by females from northern populations in New Jersey, Illinois and Missouri, about twice the 35.9 to 42.7 percent laid by females from Florida. The authors read that as an evolutionary loss of the diapause response in southern populations since the species arrived.</p>
          <p>At the cold edge of the range, the adaptation runs the other way. A <a href="https://profiles.wustl.edu/en/publications/rapid-local-adaptation-to-northern-winters-in-the-invasive-asian-/" target="_blank" rel="noopener noreferrer">2019 study in the Journal of Applied Ecology</a> found that eggs produced by mosquitoes from the northern range edge survived range-edge winters better than eggs from the core of the range, that this local adaptation arose in roughly three decades, and that no eggs survived a winter spent beyond the current northern range limit. <a href="https://www.cdc.gov/mosquitoes/php/toolkit/potential-range-of-aedes.html" target="_blank" rel="noopener noreferrer">CDC</a> likewise describes <em>Aedes albopictus</em> as able to live in a broader temperature range, and at cooler temperatures, than the yellow fever mosquito, <em>Aedes aegypti</em>. Its page on the <a href="https://www.cdc.gov/mosquitoes/about/life-cycle-of-aedes-mosquitoes.html" target="_blank" rel="noopener noreferrer">life cycle of Aedes mosquitoes</a> adds that the eggs of these container mosquitoes can survive drying out for up to 8 months and can even survive a winter in the southern United States.</p>

          <h3>South Florida, the Gulf Coast and Hawaii: where mosquitoes are active year-round</h3>
          <p>In the warmest parts of the United States mosquitoes do not go anywhere in winter; they slow down during cool spells and resume as soon as it warms up. Three regions stand out, with a transition zone between them and the cold states.</p>
          <p><strong>South Florida.</strong> Florida has more than 80 mosquito species, according to the UF/IFAS guide cited above. In the southwest corner of the state, the <a href="https://cmcd.org/when-is-mosquito-season-in-southwest-florida/" target="_blank" rel="noopener noreferrer">Collier Mosquito Control District</a>, an independent special district of the State of Florida, counts 42 biting species in its area and says they can be found 12 months of the year; when temperatures drop below 55&deg;F, breeding decreases and the insects shelter until it warms up again. Statewide, the main season is long instead of endless: the <a href="https://epi.ufl.edu/2024/05/01/floridas-mosquitoes-can-make-you-sick-heres-how-to-protect-yourself/" target="_blank" rel="noopener noreferrer">University of Florida Emerging Pathogens Institute</a> describes mosquito season as running from March to October, with the most activity when temperatures are in the upper 70s to 90s.</p>
          <p>Farther north, around Gainesville, University of Florida researchers trapped more than 28,000 mosquitoes of 18 species at more than 70 sites and tested about 1,000 of them in the laboratory. <a href="https://blogs.ifas.ufl.edu/news/2021/06/10/as-climates-change-prepare-for-more-mosquitoes-in-winter-new-study-shows/" target="_blank" rel="noopener noreferrer">UF/IFAS reports</a> that the range of temperatures the insects tolerate stretches and contracts with the time of year, and that the team concluded mosquitoes in temperate regions are well prepared to be active in fall and winter as those seasons warm.</p>
          <p><strong>The Gulf Coast.</strong> The southern house mosquito, <em>Culex quinquefasciatus</em>, does not enter a true diapause the way its northern counterpart <em>Culex pipiens</em> does. In a <a href="https://wwwnc.cdc.gov/eid/article/10/9/04-0203_article" target="_blank" rel="noopener noreferrer">study published in Emerging Infectious Diseases</a>, researchers working in Harris County, Texas (the Houston metropolitan area) observed that adults become relatively inactive during cold periods, resting under buildings and in storm drains and sewers, and then become active again during warm periods in the winter months. During the winter of 2003 to 2004 they detected West Nile virus in 11 dead birds and two pools of mosquitoes from east Texas and southern Louisiana, and took that as evidence that the virus is active year-round in Harris County. Texas as a whole has 85 identified mosquito species, according to the Texas A&amp;M AgriLife article cited above.</p>
          <p><strong>Hawaii.</strong> In Hawaii mosquito control does not pause for winter: the <a href="https://health.hawaii.gov/vcb/mosquitoes/" target="_blank" rel="noopener noreferrer">Hawaii Department of Health</a> calls it a year-round task because of the tropical climate and the steady flow of visitors. Mosquitoes are not native to the islands. The <a href="https://www.nlm.nih.gov/nativevoices/timeline/694.html" target="_blank" rel="noopener noreferrer">National Library of Medicine&rsquo;s Native Voices timeline</a> dates the first arrival to 1826, when European and American ships carried the first mosquitoes to islands that until then had no blood-sucking insects, and the <a href="https://www.nps.gov/articles/mosquitoes-on-maui.htm" target="_blank" rel="noopener noreferrer">National Park Service</a> describes the eight mosquito species now found in the state as invasive.</p>
          <p><strong>The transition zone.</strong> Between the year-round regions and the cold states, winter is a partial shutdown. <a href="https://site.extension.uga.edu/colquitthomeowners/2023/02/wet-winter-weather-points-to-active-mosquito-season-ahead/" target="_blank" rel="noopener noreferrer">University of Georgia Cooperative Extension</a> reports that most mosquitoes there still overwinter as eggs that will not hatch until warmer temperatures, longer days and the right wetting conditions arrive, and that some overwinter as adults hiding in protected places such as catch basins, storm drains, culverts, barns and sheds. Even so, some mosquito activity can occur nearly year-round in the southern and coastal parts of Georgia, a state with at least 63 species. Mississippi State University Extension, cited above, similarly describes mosquitoes as being around in Mississippi for a large part of the year.</p>

          <h3>When mosquito season restarts, by US region</h3>
          <p>Mosquito season restarts when temperatures hold above about 50&deg;F and overwintering sites fill with water, which ranges from late February in Georgia and northern California to April in Indiana, Connecticut and Alaska. The table gathers what agencies, extension services and published studies report for their own areas.</p>
          <div className="not-prose my-6 overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-brand-50">
                <tr>
                  <th className="px-3 py-2 text-left">Region</th>
                  <th className="px-3 py-2 text-left">When activity resumes</th>
                  <th className="px-3 py-2 text-left">Reported by</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100 align-top">
                  <td className="px-3 py-2 font-semibold text-brand-800">Southwest Florida</td>
                  <td className="px-3 py-2 text-gray-700">No true off-season; mosquitoes are found 12 months of the year, with less breeding in cool spells.</td>
                  <td className="px-3 py-2 text-gray-700">Collier Mosquito Control District</td>
                </tr>
                <tr className="border-t border-gray-100 align-top">
                  <td className="px-3 py-2 font-semibold text-brand-800">Hawaii</td>
                  <td className="px-3 py-2 text-gray-700">Mosquito control is described as a year-round task because of the tropical climate.</td>
                  <td className="px-3 py-2 text-gray-700">Hawaii Department of Health</td>
                </tr>
                <tr className="border-t border-gray-100 align-top">
                  <td className="px-3 py-2 font-semibold text-brand-800">Houston area and the western Gulf Coast</td>
                  <td className="px-3 py-2 text-gray-700">Southern house mosquitoes rest during cold periods and fly again during warm periods all winter.</td>
                  <td className="px-3 py-2 text-gray-700">Emerging Infectious Diseases (CDC)</td>
                </tr>
                <tr className="border-t border-gray-100 align-top">
                  <td className="px-3 py-2 font-semibold text-brand-800">Southern and coastal Georgia</td>
                  <td className="px-3 py-2 text-gray-700">Some activity nearly year-round.</td>
                  <td className="px-3 py-2 text-gray-700">University of Georgia Cooperative Extension</td>
                </tr>
                <tr className="border-t border-gray-100 align-top">
                  <td className="px-3 py-2 font-semibold text-brand-800">Central and northern Georgia</td>
                  <td className="px-3 py-2 text-gray-700">The warmer days of late February and March.</td>
                  <td className="px-3 py-2 text-gray-700">University of Georgia Cooperative Extension</td>
                </tr>
                <tr className="border-t border-gray-100 align-top">
                  <td className="px-3 py-2 font-semibold text-brand-800">Contra Costa County, California</td>
                  <td className="px-3 py-2 text-gray-700">Overwintering Culex and Anopheles females leave their shelters in late February or early March; tree hole mosquitoes emerge as adults in April or May.</td>
                  <td className="px-3 py-2 text-gray-700"><a href="https://www.contracostamosquito.gov/where-do-mosquitoes-go-in-winter" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-700">Contra Costa Mosquito and Vector Control District</a></td>
                </tr>
                <tr className="border-t border-gray-100 align-top">
                  <td className="px-3 py-2 font-semibold text-brand-800">Indiana</td>
                  <td className="px-3 py-2 text-gray-700">Culiseta inornata females appear in April and Culex restuans larvae are found by mid-April; larvae of the northern house mosquito usually are not found until midsummer.</td>
                  <td className="px-3 py-2 text-gray-700">Purdue University medical entomology</td>
                </tr>
                <tr className="border-t border-gray-100 align-top">
                  <td className="px-3 py-2 font-semibold text-brand-800">Connecticut</td>
                  <td className="px-3 py-2 text-gray-700">Overwintering Culiseta melanura larvae resume development in mid-April, followed by at least five weeks of pupation and a staggered emergence of adults.</td>
                  <td className="px-3 py-2 text-gray-700">Connecticut Agricultural Experiment Station</td>
                </tr>
                <tr className="border-t border-gray-100 align-top">
                  <td className="px-3 py-2 font-semibold text-brand-800">Vermont</td>
                  <td className="px-3 py-2 text-gray-700">Mosquitoes are active from spring through fall.</td>
                  <td className="px-3 py-2 text-gray-700"><a href="https://healthvermont.gov/mosquitoes" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-700">Vermont Department of Health</a></td>
                </tr>
                <tr className="border-t border-gray-100 align-top">
                  <td className="px-3 py-2 font-semibold text-brand-800">Alaska</td>
                  <td className="px-3 py-2 text-gray-700">The snow mosquito is the first species out each spring, usually from mid- to late April.</td>
                  <td className="px-3 py-2 text-gray-700">University of Alaska Fairbanks Geophysical Institute</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>Two cautions keep that table honest. First, a restart date is not a peak. <a href="https://www.cdc.gov/west-nile-virus/about/index.html" target="_blank" rel="noopener noreferrer">CDC</a> describes the season in which people are infected with West Nile virus as starting in the summer and continuing through fall, typically June through October, with diagnoses usually peaking in late August to early September, and notes that every state in the contiguous United States has reported cases. Second, not every species follows the summer pattern. The Contra Costa district describes <em>Culiseta inornata</em>, which it calls the winter mosquito, as most active during the winter months and absent or rare in summer.</p>
          <p>Once warmth and water return, numbers can build quickly. <a href="https://www.epa.gov/mosquitocontrol/mosquito-life-cycle" target="_blank" rel="noopener noreferrer">EPA</a> puts the full life cycle at typically up to two weeks, with a range from 4 days to as long as a month depending on conditions, so the gap between the first mosquitoes of spring and a noticeable population can be short.</p>

          <h3>This page&rsquo;s Celsius temperatures in Fahrenheit</h3>
          <p>The Ontario sections above give temperatures in Celsius; this table restates the same thresholds in Fahrenheit. These are straight conversions of figures already used on this page, not new measurements.</p>
          <div className="not-prose my-6 overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-brand-50">
                <tr>
                  <th className="px-3 py-2 text-left">Celsius figure used above</th>
                  <th className="px-3 py-2 text-left">Fahrenheit</th>
                  <th className="px-3 py-2 text-left">What it marks on this page</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100 align-top">
                  <td className="px-3 py-2 font-semibold text-brand-800">About 10&deg;C</td>
                  <td className="px-3 py-2 text-gray-700">About 50&deg;F</td>
                  <td className="px-3 py-2 text-gray-700">Flight mostly stops below it; overwintered mosquitoes resume activity above it.</td>
                </tr>
                <tr className="border-t border-gray-100 align-top">
                  <td className="px-3 py-2 font-semibold text-brand-800">10 to 15&deg;C</td>
                  <td className="px-3 py-2 text-gray-700">50 to 59&deg;F</td>
                  <td className="px-3 py-2 text-gray-700">Overwintered females stir, with limited activity and little biting.</td>
                </tr>
                <tr className="border-t border-gray-100 align-top">
                  <td className="px-3 py-2 font-semibold text-brand-800">15 to 20&deg;C</td>
                  <td className="px-3 py-2 text-gray-700">59 to 68&deg;F</td>
                  <td className="px-3 py-2 text-gray-700">Biting and egg-laying begin and the first generation gets going.</td>
                </tr>
                <tr className="border-t border-gray-100 align-top">
                  <td className="px-3 py-2 font-semibold text-brand-800">Above 20&deg;C</td>
                  <td className="px-3 py-2 text-gray-700">Above 68&deg;F</td>
                  <td className="px-3 py-2 text-gray-700">Peak activity and fast breeding.</td>
                </tr>
                <tr className="border-t border-gray-100 align-top">
                  <td className="px-3 py-2 font-semibold text-brand-800">0&deg;C</td>
                  <td className="px-3 py-2 text-gray-700">32&deg;F</td>
                  <td className="px-3 py-2 text-gray-700">A light frost, which only stuns active adults.</td>
                </tr>
                <tr className="border-t border-gray-100 align-top">
                  <td className="px-3 py-2 font-semibold text-brand-800">Around -2&deg;C</td>
                  <td className="px-3 py-2 text-gray-700">About 28&deg;F</td>
                  <td className="px-3 py-2 text-gray-700">A sustained hard frost, which finishes off active adults but not sheltered females or buried eggs.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>From Winter Dormancy to Spring Control: Where to Go Next</h2>
          <p>Winter and early spring are a practical time to cut next season&rsquo;s numbers, because overwintering eggs are sitting still. The CDC life cycle page cited above explains that <em>Aedes</em> eggs stick to the inner walls of containers like glue, above the waterline, and the agency&rsquo;s <a href="https://www.cdc.gov/mosquitoes/mosquito-control/mosquito-control-at-home.html" target="_blank" rel="noopener noreferrer">advice on mosquito control at home</a> is to empty and scrub, turn over, cover or throw out any items that hold water once a week. Our step-by-step guide on <Link href="/blog/how-to-get-rid-of-mosquitoes">how to get rid of mosquitoes in a yard</Link> puts that work in order, including larvicide options for water that cannot be drained and when a local mosquito control district is the right call. For the whole plan in one place, the <Link href="/blog/ultimate-backyard-mosquito-control-guide">complete backyard mosquito control guide</Link> ties source removal, yard treatment and personal protection together.</p>
          <p>If you live where mosquitoes fly on warm winter days, personal protection is a twelve-month habit instead of a summer one. Our guide to <Link href="/blog/how-to-keep-mosquitoes-away">keeping mosquitoes away from you and your patio</Link> compares the EPA-registered repellents and explains which popular gadgets do not hold up. When the first warm evenings bring mosquitoes back to the porch, it also helps to know <Link href="/blog/are-mosquitoes-attracted-to-light">whether mosquitoes are really attracted to light</Link>, since that decides whether a bug zapper or a different bulb is worth the money.</p>
          <p>Year-round activity matters for pets as well as people. The Contra Costa district identifies the tree hole mosquito, <em>Aedes sierrensis</em>, which spends most of the winter as a slowly developing larva, as the carrier of dog heartworm, so dog owners in mild-winter regions may want to read <Link href="/blog/do-mosquitoes-bite-dogs">what mosquito bites mean for dogs</Link> and ask a veterinarian about prevention. And if the snow mosquito made you curious about the far north, our guide to <Link href="/blog/alaska-mosquitoes">mosquitoes in Alaska</Link> explains why a state with such long winters is known for so many of them.</p>

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/mosquito-season-gta-when-does-it-start">When Does Mosquito Season Start in the GTA?</Link></li>
            <li><Link href="/blog/hidden-mosquito-breeding-spots-backyard">Hidden Mosquito Breeding Spots in Your Backyard</Link></li>
            <li><Link href="/blog/west-nile-virus-mosquito-risk-ontario">West Nile Virus Mosquito Risk in Ontario</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-mosquitoes-in-yard-ontario">How to Get Rid of Mosquitoes in Your Yard</Link></li>
            <li><Link href="/mosquito-control">BuzzSkito Professional Mosquito Control Service</Link></li>
          </ul>
        <h2>Frequently Asked Questions</h2>
        <div className="not-prose space-y-4">
          {FAQS.map(({ question, answer }) => (
            <details key={question} className="group rounded-xl border border-navy-100 bg-white p-4">
              <summary className="cursor-pointer font-bold text-brand-900 list-none flex justify-between items-center gap-3">
                {question}
                <span className="text-emerald-600 group-open:rotate-45 transition-transform text-xl leading-none">+</span>
              </summary>
              <p className="mt-3 text-sm text-gray-700 leading-relaxed">{answer}</p>
            </details>
          ))}
        </div>

        </div>
      </article>

      <CTASection heading="Beat Next Season Before It Starts" subtext="Overwintered mosquitoes restart every spring. An early barrier spray stops the first generation cold. From $99." variant="dark" />
    </>
  )
}
