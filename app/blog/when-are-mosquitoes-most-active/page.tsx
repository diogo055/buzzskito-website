import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import AuthorByline from '@/components/AuthorByline'
import BuyLink from '@/components/BuyLink'
import FreshnessStamp from '@/components/FreshnessStamp'
import TopPick from '@/components/TopPick'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'

const SLUG = 'when-are-mosquitoes-most-active'
const DATE = '2026-07-13'
const UPDATED = '2026-07-13'
const TITLE = 'When Are Mosquitoes Most Active? Time of Day & Temperature'

const FAQS = [
  {
    question: 'What time of day are mosquitoes most active?',
    answer: 'Most mosquitoes are most active at dawn and dusk — the low-light hours when temperatures and wind speeds drop and humidity rises. Culex mosquitoes (the main West Nile virus carriers) peak from dusk into the night, which is why bites cluster on the patio after sunset. But not every species follows this pattern: Aedes mosquitoes, including the aggressive Asian tiger mosquito, are daytime biters that will attack in shade throughout the afternoon. If something bit you at noon in the shade, it was almost certainly an Aedes.',
  },
  {
    question: 'At what temperature do mosquitoes become active?',
    answer: 'Mosquitoes generally need temperatures above about 10 C (50 F) to become active, with feeding and flight ramping up sharply once it passes 15 C (60 F). Their sweet spot is roughly 24-28 C (75-82 F). Above about 35 C (95 F) they slow down and seek shade or resting spots, which is why the hottest, sunniest part of a summer afternoon can feel bite-free even in mosquito season. Below 10 C most mosquitoes stop flying, and a hard frost ends the active season.',
  },
  {
    question: 'Why do mosquitoes come out at dusk?',
    answer: 'At dusk three conditions line up at once: the air cools, wind usually calms, and humidity climbs. Mosquitoes are small and lose body water quickly, so they avoid hot, dry, breezy midday conditions and become active when the risk of drying out drops. Low light also helps them avoid predators. This overlap of falling temperature, still air, and rising humidity is exactly why dawn and dusk are the highest-bite windows for most species.',
  },
  {
    question: 'Are mosquitoes active during the day?',
    answer: 'Some are. While Culex and Anopheles mosquitoes are mainly crepuscular (dawn/dusk) and nocturnal, Aedes species — including Aedes aegypti and the Asian tiger mosquito (Aedes albopictus) — are daytime biters. They rest in shaded, humid spots like under decks, in dense shrubs, and along fence lines, then bite in the shade throughout the day. A shady, humid backyard can therefore have a daytime mosquito problem even when the open lawn feels fine.',
  },
  {
    question: 'Do mosquitoes bite at night?',
    answer: 'Yes. Culex and Anopheles mosquitoes remain active well into the night, and Culex in particular will feed through the dark hours near lights, open windows, and outdoor seating areas. Aedes daytime biters mostly quiet down after dark. If you are woken by that high-pitched whine indoors, it is usually a Culex that entered around dusk. Screens, reducing indoor lighting near open windows, and eliminating standing water are the most effective night-time defences.',
  },
  {
    question: 'What weather makes mosquitoes most active?',
    answer: 'Warm, humid, still, overcast conditions are peak mosquito weather. Temperatures of 24-28 C (75-82 F), high humidity, little to no wind, and a few days after rain (which refills the standing water where they breed) create ideal activity. Wind above about 16 km/h (10 mph) grounds most mosquitoes because they are weak fliers, and bright, hot, dry midday sun pushes them into shaded resting spots. Cloudy, muggy evenings after a rain are the worst.',
  },
  {
    question: 'When is the best time to spray for mosquitoes?',
    answer: 'Professional barrier sprays are typically applied to resting surfaces — the undersides of leaves, dense shrubs, fence lines, and shaded borders where mosquitoes wait out the day — rather than timed to a single bite window. Because the residual formula keeps killing mosquitoes that land on treated foliage for weeks, coverage runs day and night. For personal protection, the key windows to apply repellent and take precautions are the dawn and dusk peaks, plus daytime in shaded yards where Aedes are present.',
  },
  {
    question: 'Does mosquito activity change through the season?',
    answer: 'Yes. Activity builds as spring temperatures climb past 10 C, peaks in the hottest, most humid stretch of summer (in much of North America that is roughly June through August), and tapers as nights cool in fall. The daily dawn/dusk pattern holds throughout, but the size of each peak grows and shrinks with the season. See our guide to mosquito season and when it starts for the month-by-month picture.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: 'Mosquitoes are most active at dawn and dusk, when heat and wind drop and humidity rises. See a time-of-day and temperature-threshold table, why Culex bite at dusk while Aedes bite midday, and the best time to spray or avoid bites.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

export default function WhenAreMosquitoesMostActivePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'When mosquitoes are most active by time of day and temperature, and how it differs by species.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'When Are Mosquitoes Most Active?', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">When Are Mosquitoes Most Active?</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">The exact hours, temperatures, and weather when mosquitoes bite most — and why it depends on the species in your yard.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      {/* Quick Answer — AI-extraction capsule */}
      <section className="bg-white pt-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-base text-gray-800 leading-relaxed">
              <strong>Most mosquitoes are most active at dawn and dusk, when temperature and wind drop and humidity rises.</strong> Culex mosquitoes — the main West Nile carriers — peak from dusk into the night, while Aedes species (including the Asian tiger mosquito) are daytime biters that attack in shade all afternoon. Activity switches on above about 10 C (50 F) and peaks around 24-28 C (75-82 F); above ~35 C (95 F) mosquitoes retreat to shade. Warm, humid, still, overcast conditions a few days after rain are the worst. The practical takeaway: avoid the dawn/dusk peaks in the open, watch for daytime bites in shaded yards, and treat the shaded resting spots where mosquitoes wait out the day.
            </p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>Dusk (roughly the hour around sunset) is the single highest-bite window for most mosquitoes.</li>
              <li>Culex mosquitoes, the main West Nile carriers, peak from dusk into the night; Aedes species bite in shade all day.</li>
              <li>Mosquito activity switches on above about 10&deg;C (50&deg;F).</li>
              <li>Biting peaks in the 24&ndash;28&deg;C (75&ndash;82&deg;F) sweet spot, when development is fastest.</li>
              <li>Above about 35&deg;C (95&deg;F), mosquitoes retreat to cool, shaded resting spots.</li>
              <li>Warm, humid, still, overcast conditions a few days after rain drive the worst biting.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito, GTA mosquito &amp; tick control &middot; 150+ five-star Google reviews</p>
          </div>
        </div>
      </section>

      {/* Time-of-day + temperature table */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Mosquito Activity by Time of Day &amp; Temperature</h2>
          <div className="rounded-xl border border-gray-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-brand-50">
                <tr>
                  <th className="px-3 py-2 text-left">Time / Condition</th>
                  <th className="px-3 py-2 text-left">Activity level</th>
                  <th className="px-3 py-2 text-left">What is happening</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Dawn (roughly 1 hr around sunrise)', 'High', 'Cool, calm, humid air after the night — a top biting window for most species'],
                  ['Late morning', 'Low–moderate', 'Rising heat and light push most species to shaded rest; Aedes still bite in shade'],
                  ['Midday (hot, sunny, open lawn)', 'Low', 'Heat and dryness suppress flight; mosquitoes shelter in shade and dense plants'],
                  ['Midday (shaded, humid yard)', 'Moderate–high', 'Aedes daytime biters stay active under decks, in shrubs, and along fence lines'],
                  ['Dusk (roughly 1 hr around sunset)', 'Peak', 'Falling temperature, calming wind, and rising humidity align — highest-bite window'],
                  ['Night', 'Moderate–high', 'Culex and Anopheles feed after dark, near lights and open windows'],
                  ['Below ~10 C (50 F)', 'Very low', 'Most mosquitoes stop flying and feeding'],
                  ['15–23 C (60–74 F)', 'Building', 'Flight and biting ramp up as it warms'],
                  ['24–28 C (75–82 F)', 'Peak', 'The activity sweet spot — fastest development and most biting'],
                  ['Above ~35 C (95 F)', 'Declining', 'Too hot and dry; mosquitoes retreat to cool, shaded resting spots'],
                ].map(([when, level, why]) => (
                  <tr key={when} className="border-t border-gray-100 align-top">
                    <td className="px-3 py-2 font-semibold text-brand-800">{when}</td>
                    <td className="px-3 py-2 text-gray-700">{level}</td>
                    <td className="px-3 py-2 text-gray-700">{why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">General activity thresholds; exact behaviour varies by species and region. Mosquito biology and West Nile timing per the <a href="https://www.cdc.gov/mosquitoes/" target="_blank" rel="noopener" className="underline hover:text-brand-700">U.S. Centers for Disease Control and Prevention (CDC) — Mosquitoes</a>.</p>
        </div>
      </section>

      {/* Species differences table */}
      <section className="py-10 px-4 bg-brand-50/40">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Species Differences: Culex vs Aedes vs Anopheles</h2>
          <div className="rounded-xl border border-gray-200 overflow-hidden bg-white">
            <table className="w-full text-sm">
              <thead className="bg-brand-50">
                <tr>
                  <th className="px-3 py-2 text-left">Group</th>
                  <th className="px-3 py-2 text-left">Peak biting time</th>
                  <th className="px-3 py-2 text-left">Behaviour</th>
                  <th className="px-3 py-2 text-left">Disease note</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Culex (house mosquito)', 'Dusk into night', 'Comes to lights and open windows; the classic bedroom whine', 'Main West Nile virus vector in North America'],
                  ['Aedes (tiger / yellow-fever)', 'Daytime, esp. dawn & late afternoon', 'Aggressive shade biter; rests under decks and in shrubs', 'Can carry Zika, dengue, chikungunya where established'],
                  ['Anopheles', 'Dusk to dawn / night', 'Prefers dark hours; enters homes to feed', 'Malaria vector in endemic regions (rare in Canada/US)'],
                ].map(([group, time, behav, disease]) => (
                  <tr key={group} className="border-t border-gray-100 align-top">
                    <td className="px-3 py-2 font-semibold text-brand-800">{group}</td>
                    <td className="px-3 py-2 text-gray-700">{time}</td>
                    <td className="px-3 py-2 text-gray-700">{behav}</td>
                    <td className="px-3 py-2 text-gray-700">{disease}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">Because your yard may host more than one group, both dawn/dusk and daytime bites are possible in the same season.</p>
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />

          <AffiliateDisclosure />

          <h2>Why Dawn and Dusk Are the Peak Windows</h2>
          <p>Mosquitoes are tiny and lose body water fast, so their whole daily schedule is built around avoiding hot, dry, windy conditions. At <strong>dawn and dusk</strong> three things line up at once: the air cools, the wind usually calms, and humidity rises. That combination lets them fly and feed without drying out, and the low light helps them dodge predators. For most species — including the <strong>Culex</strong> house mosquitoes that carry West Nile virus — this makes the hour around sunrise and the hour around sunset the highest-bite windows of the day.</p>
          <p>It also explains why a hot, sunny, open lawn at noon can feel bite-free even in peak season. The midday sun is too hot and dry for most mosquitoes, so they tuck into cool, shaded, humid resting spots — under your deck, inside dense shrubs, along the shady side of the fence — and wait for the evening.</p>

          <h2>The Daytime Exception: Aedes Mosquitoes</h2>
          <p>Not every mosquito waits for dusk. <strong>Aedes</strong> species — including <em>Aedes aegypti</em> and the Asian tiger mosquito (<em>Aedes albopictus</em>) — are <strong>daytime biters</strong>. They are aggressive, they target the lower legs and ankles, and they happily bite in the shade all afternoon. If you have ever been eaten alive at a shady midday backyard barbecue, that was almost certainly an Aedes. Because they rest in the same cool, humid, shaded microclimates during the day and don&rsquo;t need to wait for evening, a leafy, damp yard can have a genuine daytime mosquito problem while the open lawn nearby feels fine.</p>

          <aside aria-label="Professional mosquito control" className="not-prose my-8 rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-white p-6 sm:p-7 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-extrabold text-brand-900 mb-2 leading-tight">Mosquitoes rest where you can&rsquo;t see them — we treat exactly those spots</h3>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">Whether they bite at dusk or midday, mosquitoes wait out the heat in shaded shrubs, under decks, and along fence lines. A professional barrier spray coats those resting surfaces so mosquitoes are killed day and night — not just during one bite window. BuzzSkito protects GTA yards with seasonal programs and single treatments from $99.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/mosquito-control" className="btn-primary-sm">Explore Mosquito Control →</Link>
              <a href="tel:+12892165030" className="font-bold text-brand-800 hover:text-brand-600 transition-colors">(289) 216-5030</a>
            </div>
          </aside>

          <h2>The Temperature Thresholds That Switch Mosquitoes On and Off</h2>
          <p>Temperature is the master switch. Mosquitoes are cold-blooded, so their flight and feeding track the thermometer:</p>
          <ul>
            <li><strong>Below ~10 C (50 F):</strong> most mosquitoes stop flying and feeding. This is why the season ends with the first hard frosts.</li>
            <li><strong>15–23 C (60–74 F):</strong> activity ramps up steadily — the warmer it gets, the more they fly and bite.</li>
            <li><strong>24–28 C (75–82 F):</strong> the sweet spot. Development from egg to adult is fastest and biting is heaviest.</li>
            <li><strong>Above ~35 C (95 F):</strong> too hot and dry — mosquitoes slow down and shelter in shade until conditions ease.</li>
          </ul>
          <p>Layer weather on top of temperature and you can almost predict a bad night: warm, humid, still, and overcast, a few days after rain (which refills the standing water where they lay eggs), is peak mosquito weather. Wind is your friend — a breeze above roughly 16 km/h (10 mph) grounds these weak fliers almost entirely.</p>

          <h2>Why the Timing Matters for Bites — and for Spraying</h2>
          <p>Knowing when mosquitoes are active changes how you protect yourself and your yard:</p>
          <ol>
            <li><strong>Time your personal protection.</strong> Apply repellent and cover up before the dawn and dusk peaks, and again during the day if you have shaded Aedes territory. Reach for a repellent with an EPA/Health Canada–recognized active ingredient — <strong>DEET</strong>, <strong>picaridin</strong>, or oil of lemon eucalyptus. <BuyLink search="picaridin insect repellent spray">Check repellent options on Amazon →</BuyLink></li>
            <li><strong>Treat the resting spots, not just the bite window.</strong> Because mosquitoes shelter in shade between meals, the highest-value target is those cool, humid resting surfaces — shrub undersides, fence lines, shaded borders. A residual barrier spray applied there keeps killing mosquitoes around the clock for weeks, so it does not matter whether your problem species bites at dusk or at noon.</li>
            <li><strong>Kill the next generation at the source.</strong> Empty standing water weekly so eggs never hatch, and use a larvicide (BTI) in water you cannot drain. Fewer larvae today means smaller dawn and dusk swarms in two weeks.</li>
            <li><strong>Use wind and screens.</strong> A patio fan makes a seating area nearly bite-proof at dusk, and good window screens block the Culex that come to indoor lights after dark.</li>
          </ol>

          <TopPick
            label="Best for Peak-Hour Protection"
            name="Picaridin Insect Repellent (20%)"
            blurb="For the dawn and dusk bite windows — and shaded midday Aedes territory — a picaridin repellent is the simplest personal defence. Unlike DEET it is odourless and won't damage plastics or gear, and it protects for hours from a single application."
            search="picaridin insect repellent 20 percent"
            score={8.7}
            pros={['Odourless and non-greasy', 'Safe on plastics, watches, and sunglasses', 'Long-lasting protection from one application']}
            cons={['Reapply after heavy sweating or swimming', 'Personal protection only — does not treat the yard']}
          />
          <p>For a room-by-room and yard-by-yard plan, see our full guide on <Link href="/blog/how-to-get-rid-of-mosquitoes-in-yard-ontario">how to get rid of mosquitoes in your yard</Link>. To understand how these daily peaks scale up and down across the summer, read <Link href="/blog/mosquito-season-gta-when-does-it-start">when mosquito season starts and how long it lasts</Link>.</p>

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/mosquito-season-gta-when-does-it-start">When Does Mosquito Season Start?</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-mosquitoes-in-yard-ontario">How to Get Rid of Mosquitoes in Your Yard</Link></li>
            <li><Link href="/mosquito-control">BuzzSkito Professional Mosquito Control Service</Link></li>
            <li><Link href="/free-yard-assessment">Get a Free Yard Assessment</Link></li>
          </ul>
        </div>
      </article>

      <CTASection heading="Bite-Free at Dawn, Dusk, and Every Hour Between" subtext="A residual barrier spray treats the shaded spots where mosquitoes rest, so they are killed around the clock. From $99." variant="dark" />
    </>
  )
}
