import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import AuthorByline from '@/components/AuthorByline'
import BuyLink from '@/components/BuyLink'
import FreshnessStamp from '@/components/FreshnessStamp'
import Figure from '@/components/Figure'
import TopPick from '@/components/TopPick'
import StickyBuyBar from '@/components/StickyBuyBar'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { tagForSlug } from '@/lib/amazon-clusters'

const SLUG = 'when-are-mosquitoes-most-active'
const DATE = '2026-07-13'
const UPDATED = '2026-09-02'
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
  {
    question: 'What time do mosquitoes stop biting at night?',
    answer: 'Most mosquitoes have stopped biting, or fallen to a fraction of their peak, by roughly 2 to 4 a.m. Culex biting climbs steeply around sunset, peaks in the first one to two hours after dark, holds until about midnight, then tapers through the small hours before a smaller rise near dawn. Anopheles hold a broader plateau across the night. Aedes daytime biters mostly quiet down within an hour or two of full dark. They are not watching a clock: activity falls as the air cools toward 10 C (50 F) and as their internal daily rhythm winds down.',
  },
  {
    question: 'Do mosquitoes sleep?',
    answer: 'Not the way people do, but they do rest. Mosquitoes run on a strong daily rhythm and spend their inactive hours in a quiescent state — motionless on a cool, humid, shaded surface, less responsive to light and movement, with metabolism dialled down. Day-biting Aedes rest at night; night-biting Culex rest through the day under decks, inside dense shrubs, and along shaded fence lines. Those resting surfaces are exactly what a residual barrier treatment targets, which is why treatment is not timed to a bite window.',
  },
  {
    question: 'What smell do mosquitoes hate most?',
    answer: 'The scent with the strongest evidence behind it is oil of lemon eucalyptus (OLE) and its refined form PMD — the plant-derived active that the CDC lists alongside DEET, picaridin, IR3535 and 2-undecanone among EPA-registered repellent ingredients. Citronella, peppermint, lavender and garlic do repel mosquitoes, but weakly and briefly, because the vapour drifts away in minutes. Mosquitoes find you by exhaled carbon dioxide, body heat and skin odour, so masking one smell rarely stops them. A registered repellent on skin does.',
  },
  {
    question: 'Do mosquitoes prefer fat or skinny people?',
    answer: 'Body size is not the trait mosquitoes read. They home in on exhaled carbon dioxide, body heat and skin odour, as the American Mosquito Control Association describes. A larger body generally exhales more carbon dioxide and radiates more heat, so it can attract more mosquitoes on average — but that effect is small next to skin bacteria, sweat and lactic acid, recent exercise, and pregnancy, which raises both carbon dioxide output and skin temperature. Blood-type claims circulate widely; the evidence behind them is thin and inconsistent.',
  },
  {
    question: 'What month is worst for mosquitoes?',
    answer: 'Across most of the United States, July and August are the worst months. By region: the Gulf Coast, Florida and Hawaii run roughly February to November and peak May through September; the South and Southwest run March to September; the Mid-Atlantic, Midwest and West run April to September; New England, the northern Midwest and the Pacific Northwest run May to September and peak in July. Alaska compresses into late June and early July. In the Greater Toronto Area, the worst stretch is late June through early August.',
  },
  {
    question: 'What will keep mosquitoes from biting you?',
    answer: 'The CDC lists the same short set: an EPA-registered repellent containing DEET, picaridin, IR3535, oil of lemon eucalyptus (OLE), para-menthane-diol (PMD) or 2-undecanone; loose long sleeves and pants; permethrin-treated clothing and gear (never applied to skin); screens and air conditioning indoors; and emptying standing water weekly so the next generation never hatches. A patio fan is the underrated one — mosquitoes are weak fliers, and moving air makes a seating area close to bite-proof at dusk.',
  },
  {
    question: 'When is mosquito season in Florida?',
    answer: 'Close to year-round. In south Florida mosquitoes stay active every month; statewide the season runs roughly February or March through November, with the heaviest biting from June through September when summer rain refills container and floodwater habitat. Florida hosts both Aedes aegypti and Aedes albopictus, so daytime biting is normal there rather than the exception, and Culex quinquefasciatus carries West Nile virus after dark. University of Florida IFAS Extension and county mosquito control districts publish local activity updates.',
  },
  {
    question: 'When is mosquito season in Texas?',
    answer: 'Roughly March through October, and closer to year-round in the Rio Grande Valley and along the Gulf Coast. Peak biting runs May through September, with large floodwater broods appearing about a week to ten days after heavy rain. Texas carries one of the longest mosquito species lists in the country, including Culex quinquefasciatus (the southern house mosquito and the main West Nile carrier there), plus Aedes aegypti and Aedes albopictus as daytime biters. Texas A&M AgriLife Extension tracks regional activity.',
  },
  {
    question: 'When is mosquito season in Alaska?',
    answer: 'Short and intense. Mosquitoes emerge as snowmelt pools thaw in May, peak from mid-June to mid-July, and drop off through August. Because sub-arctic summer twilight lasts for hours, the dusk window stretches and biting can continue through most of the so-called night in June. Alaska mosquitoes are overwhelmingly snowmelt and floodwater species — abundant and aggressive, but West Nile virus is not established in Alaska, so the problem there is nuisance biting rather than disease risk.',
  },
  {
    question: 'How does mosquito season compare between the United States and Canada?',
    answer: 'The daily pattern is identical; the calendar is not. Most of Canada runs a compressed May-to-September season that peaks from late June through early August and ends with the first hard frost. Much of the southern United States runs from February or March into November, and south Florida, Hawaii and south Texas are effectively year-round. Same species groups, same temperature thresholds — the difference is simply how many months a year the thermometer sits above them.',
  },
]

export const metadata: Metadata = buildMetadata({
  // AI Overview answers "dawn and dusk" outright, so the SERP title now sells the
  // thing the snippet has no room for: the time-of-day + temperature table.
  title: 'What Time Are Mosquitoes Most Active? Temp Table',
  description: 'Dawn and dusk are peak — the hour around sunrise and sunset — but Aedes bite in shade all day. Time-of-day table plus the 24-28 C activity sweet spot.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug('when-are-mosquitoes-most-active')

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
          <div className="rounded-xl border border-gray-200 overflow-x-auto">
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
          <div className="rounded-xl border border-gray-200 overflow-x-auto bg-white">
            <table className="min-w-[560px] w-full text-sm">
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
          <p>Not every mosquito waits for dusk. <strong>Aedes</strong> species — including <em>Aedes aegypti</em> and the Asian tiger mosquito (<em>Aedes albopictus</em>) — are <strong>daytime biters</strong>. They are aggressive, they target the lower legs and ankles, and they happily bite in the shade all afternoon. If you have ever been eaten alive at a shady midday backyard barbecue, that was almost certainly an Aedes. Because they rest in the same cool, humid, shaded microclimates during the day and don&rsquo;t need to wait for evening, a leafy, damp yard can have a genuine daytime mosquito problem while the open lawn nearby feels fine. Mature, tree-lined neighbourhoods are the classic case, which is why a treatment on a shaded lot follows the shade line and the shrub interiors rather than the open grass &mdash; the approach behind our <Link href="/oakville-mosquito-control">mosquito control in Oakville</Link> and the other older-canopy suburbs we cover.</p>

          <aside aria-label="Professional mosquito control" className="not-prose my-8 rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-white p-6 sm:p-7 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-extrabold text-brand-900 mb-2 leading-tight">Mosquitoes rest where you can&rsquo;t see them — we treat exactly those spots</h3>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">Whether they bite at dusk or midday, mosquitoes wait out the heat in shaded shrubs, under decks, and along fence lines. A professional barrier spray coats those resting surfaces so mosquitoes are killed day and night — not just during one bite window. BuzzSkito protects GTA yards with seasonal programs and single treatments from $99.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/mosquito-control" className="btn-primary-sm">Explore Mosquito Control →</Link>
              <a href="tel:+12892165030" className="font-bold text-brand-800 hover:text-brand-600 transition-colors">(289) 216-5030</a>
            </div>
          </aside>

          <h2>When Do Mosquitoes Stop Biting at Night?</h2>
          <p><strong>Most mosquitoes have stopped biting, or dropped to a fraction of their peak, by roughly 2 to 4 a.m.</strong> Biting does not switch off at midnight. It decays. <strong>Culex</strong> house mosquitoes climb steeply in the half hour before sunset, peak in the first one to two hours of darkness, hold that pressure until around midnight, then fade through the small hours &mdash; and by the 2&ndash;4 a.m. window most of them have settled onto resting surfaces. A smaller second rise follows around dawn. <strong>Anopheles</strong> hold a flatter plateau right across the night, which is why they are the group most likely to bite you at 3 a.m. <strong>Aedes</strong> daytime biters mostly quiet down within an hour or two of full dark.</p>
          <p>They are not reading a clock. Two things wind them down together: the air keeps cooling toward the ~10&nbsp;C (50&nbsp;F) floor where flight stops, and their own circadian rhythm &mdash; the internal daily clock that sets when each species flies &mdash; runs out its evening programme. That is why a warm, muggy night with no cooling keeps biting going far later than a night that drops sharply after sunset, and why the same yard can be unbearable at 11 p.m. in July and quiet at 11 p.m. in September.</p>

          <Figure
            src="/diagrams/mosquito-activity-24-hour-clock.svg"
            alt="Twenty-four hour chart of mosquito biting activity by species group, showing the Culex peak in the one to two hours after local sunset, the Aedes daytime plateau with a midday heat dip, the broad Anopheles overnight plateau, and biting falling away between about 2 and 4 a.m."
            caption="Relative biting pressure across 24 hours. The clock is anchored to local sunrise and sunset, which shift by hours between June and September and between Miami and Anchorage — so read the shape, not the tick labels."
            width={720}
            height={420}
          />

          <h3>The bite clock, anchored to local sunset</h3>
          <p>Sunset is the only anchor that travels. A fixed clock time is useless across a continent &mdash; 8 p.m. is full dark in Miami in November and broad daylight in Anchorage in June &mdash; so the windows below are given relative to <em>your</em> local sunrise and sunset. Look up either for your ZIP or postal code and the rest of the table falls into place.</p>
          <div className="not-prose my-6 rounded-xl border border-gray-200 overflow-x-auto">
            <table className="min-w-[560px] w-full text-sm">
              <thead className="bg-brand-50">
                <tr>
                  <th className="px-3 py-2 text-left">Window (relative to local sun)</th>
                  <th className="px-3 py-2 text-left">Biting pressure</th>
                  <th className="px-3 py-2 text-left">Which mosquitoes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['60 min before sunrise → 60 min after', 'High', 'Culex tapering off, Aedes switching on — the two overlap'],
                  ['Mid-morning → early afternoon', 'Low in sun, moderate in shade', 'Aedes only; Culex and Anopheles are resting'],
                  ['Hottest 2–3 hrs of the afternoon', 'Dips', 'Even Aedes retreat deeper into shade above ~35 C (95 F)'],
                  ['Late afternoon → 30 min before sunset', 'Rising fast', 'Aedes second peak, Culex beginning to move'],
                  ['30 min before sunset → 90 min after', 'PEAK', 'Culex surge; the single worst window of the day'],
                  ['2 hrs after sunset → midnight', 'High, slowly falling', 'Culex still feeding; Anopheles ramping up'],
                  ['Midnight → 2 a.m.', 'Moderate', 'Anopheles plateau; Culex thinning out'],
                  ['2 a.m. → 4 a.m.', 'Low — the nightly floor', 'Most mosquitoes have settled onto resting surfaces'],
                ].map(([window, level, who]) => (
                  <tr key={window} className="border-t border-gray-100 align-top">
                    <td className="px-3 py-2 font-semibold text-brand-800">{window}</td>
                    <td className="px-3 py-2 text-gray-700">{level}</td>
                    <td className="px-3 py-2 text-gray-700">{who}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 not-prose">Sunset-anchored windows shift with latitude and month. Far-north summers (Alaska, northern Canada) hold long twilight, which stretches the dusk peak for hours; low-latitude sunsets are abrupt, which compresses it.</p>

          <h2>Do Mosquitoes Sleep?</h2>
          <p>Not the way you do &mdash; but yes, they rest, and the rest period is the mirror image of the bite window. Mosquitoes have no eyelids and nothing resembling mammalian sleep architecture, but they run on a strong circadian rhythm and pass their inactive hours in a <strong>quiescent state</strong>: motionless on a cool, humid, shaded surface, metabolism dialled down, noticeably slower to respond to light and movement. Nudge a resting Culex at noon and it is sluggish in a way the same insect never is at 9 p.m.</p>
          <p>Which half of the day they spend resting depends on the species. Day-biting <em>Aedes</em> rest at night. Night-biting <em>Culex</em> and <em>Anopheles</em> rest through the daylight hours, tucked under decks, inside dense shrubs, in tall grass, and along the shaded side of a fence. This is the single most useful fact on this page for anyone actually trying to reduce bites: <strong>you always know where they are for roughly half of every day</strong>, which is why a residual barrier treatment targets resting surfaces rather than chasing a bite window.</p>

          <h2>The Temperature Thresholds That Switch Mosquitoes On and Off</h2>
          <p>Temperature is the master switch. Mosquitoes are cold-blooded, so their flight and feeding track the thermometer:</p>
          <ul>
            <li><strong>Below ~10 C (50 F):</strong> most mosquitoes stop flying and feeding. This is why the season ends with the first hard frosts.</li>
            <li><strong>15–23 C (60–74 F):</strong> activity ramps up steadily — the warmer it gets, the more they fly and bite.</li>
            <li><strong>24–28 C (75–82 F):</strong> the sweet spot. Development from egg to adult is fastest and biting is heaviest.</li>
            <li><strong>Above ~35 C (95 F):</strong> too hot and dry — mosquitoes slow down and shelter in shade until conditions ease.</li>
          </ul>
          <p>Layer weather on top of temperature and you can almost predict a bad night: warm, humid, still, and overcast, a few days after rain (which refills the standing water where they lay eggs), is peak mosquito weather. Wind is your friend — a breeze above roughly 16 km/h (10 mph) grounds these weak fliers almost entirely.</p>
          <p>Cold does more than ground them once it gets far enough down the scale. A sustained hard frost near -2 C kills active adults outright, though eggs and hibernating females come through it fine — the whole scale, from dormancy to die-off, is laid out in <Link href="/blog/what-temperature-kills-mosquitoes">our cold-versus-heat breakdown</Link>.</p>

          <h3>The same thresholds in Fahrenheit</h3>
          <p>If you are checking a U.S. forecast, here is the same scale with Fahrenheit first. Nothing changes but the units &mdash; mosquitoes respond to the temperature, not the scale you read it on.</p>
          <div className="not-prose my-6 rounded-xl border border-gray-200 overflow-x-auto">
            <table className="min-w-[560px] w-full text-sm">
              <thead className="bg-brand-50">
                <tr>
                  <th className="px-3 py-2 text-left">Temperature (&deg;F / &deg;C)</th>
                  <th className="px-3 py-2 text-left">Activity</th>
                  <th className="px-3 py-2 text-left">What you notice outside</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Below 50 °F (10 °C)', 'Effectively off', 'No flight, no biting — the floor the whole season is built on'],
                  ['50–60 °F (10–15 °C)', 'Barely on', 'A few sluggish fliers at dusk; an evening in this range feels bite-free'],
                  ['60–74 °F (15–23 °C)', 'Building', 'Biting ramps up steadily; dusk starts to matter'],
                  ['75–82 °F (24–28 °C)', 'PEAK', 'The sweet spot — fastest egg-to-adult development, heaviest biting'],
                  ['83–94 °F (28–34 °C)', 'High, but shade-shifted', 'Still biting hard, but in shade and at the edges of the day'],
                  ['Above 95 °F (35 °C)', 'Declining', 'Too hot and dry; mosquitoes retreat to cool, humid resting spots'],
                  ['Wind above 10 mph (16 km/h)', 'Grounded', 'Weak fliers — a breezy patio is close to bite-free at any temperature'],
                ].map(([temp, level, note]) => (
                  <tr key={temp} className="border-t border-gray-100 align-top">
                    <td className="px-3 py-2 font-semibold text-brand-800">{temp}</td>
                    <td className="px-3 py-2 text-gray-700">{level}</td>
                    <td className="px-3 py-2 text-gray-700">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>One practical use for that table on either side of the border: the season <em>opens</em> when daily highs hold above 50&nbsp;&deg;F (10&nbsp;C) for about a week, and closes at the first hard frost. That is why the calendar answer below differs so much between Minneapolis and Miami while the thermometer answer is identical.</p>

          <h2>Why the Timing Matters for Bites — and for Spraying</h2>
          <p>Knowing when mosquitoes are active changes how you protect yourself and your yard:</p>
          <ol>
            <li><strong>Time your personal protection.</strong> Apply repellent and cover up before the dawn and dusk peaks, and again during the day if you have shaded Aedes territory. Reach for a repellent with an EPA/Health Canada–recognized active ingredient — <strong>DEET</strong>, <strong>picaridin</strong>, or oil of lemon eucalyptus. <BuyLink tag={AMZ_TAG} search="picaridin insect repellent spray">Check repellent options on Amazon →</BuyLink></li>
            <li><strong>Treat the resting spots, not just the bite window.</strong> Because mosquitoes shelter in shade between meals, the highest-value target is those cool, humid resting surfaces — shrub undersides, fence lines, shaded borders. A residual barrier spray applied there keeps killing mosquitoes around the clock for weeks, so it does not matter whether your problem species bites at dusk or at noon. This is the opposite of how <Link href="/blog/mosquito-fogger-canada">mosquito foggers</Link> work: fog droplets only kill mosquitoes that are already airborne when the cloud drifts through, which is why fogging has to be timed to the dawn and dusk peaks and why it stops protecting you the moment the fog settles. Properties backing onto a woodlot or ravine hold the most of that shaded resting habitat, so the treed edge of the lot is the first thing we treat &mdash; see <Link href="/vaughan-mosquito-control">mosquito control in Vaughan</Link> for how a ravine-backed yard is handled.</li>
            <li><strong>Kill the next generation at the source.</strong> Empty standing water weekly so eggs never hatch, and use a larvicide (BTI) in water you cannot drain. Granular <Link href="/blog/mosquito-bits-canada-vs-dunks">mosquito bits</Link> start releasing BTI within about 30 minutes and clear treated water inside 24 hours, but only hold for 7–14 days; a slow-release Dunk is the one to use in a rain barrel or pond you leave alone, since it covers roughly 30 days. Neither touches the adults already flying at dusk. Fewer larvae today means smaller dawn and dusk swarms in two weeks.</li>
            <li><strong>Use wind and screens.</strong> A patio fan makes a seating area nearly bite-proof at dusk, and good window screens block the Culex that come to indoor lights after dark.</li>
          </ol>

          <TopPick tag={AMZ_TAG}
            label="Best for Peak-Hour Protection"
            name="Picaridin Insect Repellent (20%)"
            blurb="For the dawn and dusk bite windows — and shaded midday Aedes territory — a picaridin repellent is the simplest personal defence. Unlike DEET it is odourless and won't damage plastics or gear, and it protects for hours from a single application."
            search="picaridin insect repellent 20 percent"
            score={8.7}
            pros={['Odourless and non-greasy', 'Safe on plastics, watches, and sunglasses', 'Long-lasting protection from one application']}
            cons={['Reapply after heavy sweating or swimming', 'Personal protection only — does not treat the yard']}
          />
          <p>For a room-by-room and yard-by-yard plan, see our full guide on <Link href="/blog/how-to-get-rid-of-mosquitoes-in-yard-ontario">how to get rid of mosquitoes in your yard</Link>. To understand how these daily peaks scale up and down across the summer, read <Link href="/blog/mosquito-season-gta-when-does-it-start">when mosquito season starts and how long it lasts</Link>.</p>

          <h2>When Are Mosquitoes Most Active in the United States? Season by Region</h2>
          <p>The daily clock above is the same everywhere. The <em>calendar</em> is not. Mosquito season opens when daily temperatures hold above roughly 50&nbsp;&deg;F (10&nbsp;C) and closes at the first hard frost, so the length of the season is really a map of how long your local thermometer stays above that line. In the United States that ranges from about ten months on the Gulf Coast to about six weeks in interior Alaska. The <a href="https://www.cdc.gov/mosquitoes/" target="_blank" rel="noopener">U.S. Centers for Disease Control and Prevention (CDC)</a> notes that more than 200 mosquito species live in the continental United States and its territories, of which only about a dozen spread germs that make people sick &mdash; the rest are nuisance biters.</p>
          <div className="not-prose my-6 rounded-xl border border-gray-200 overflow-x-auto">
            <table className="min-w-[640px] w-full text-sm">
              <thead className="bg-brand-50">
                <tr>
                  <th className="px-3 py-2 text-left">Region</th>
                  <th className="px-3 py-2 text-left">Representative states</th>
                  <th className="px-3 py-2 text-left">Season</th>
                  <th className="px-3 py-2 text-left">Worst stretch</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Gulf Coast, Florida & Hawaii', 'S. Florida, coastal Louisiana, Mississippi, Alabama, coastal Texas, Hawaii', 'Roughly Feb–Nov; effectively year-round in south Florida and Hawaii', 'Jun–Sep'],
                  ['South & Southwest', 'Georgia, the Carolinas, Tennessee, Arkansas, Oklahoma, most of Texas, New Mexico, Arizona, southern California', 'Roughly Mar–Oct', 'May–Sep'],
                  ['Mid-Atlantic, Midwest & West', 'Virginia, Maryland, Ohio, Indiana, Illinois, Missouri, Kansas, Nebraska, Colorado, Utah, Nevada, most of California', 'Roughly Apr–Sep', 'Jun–Aug'],
                  ['New England, N. Midwest & Pacific NW', 'Maine, Vermont, New Hampshire, Massachusetts, New York, Michigan, Wisconsin, Minnesota, the Dakotas, Montana, Idaho, Washington, Oregon', 'Roughly May–Sep', 'Jul'],
                  ['Alaska', '—', 'Roughly late May–Aug', 'Mid-Jun to mid-Jul'],
                  ['Canada (for comparison)', 'Ontario, Quebec, the Prairies, interior British Columbia', 'Roughly May–Sep, ending at the first hard frost', 'Late Jun–early Aug'],
                ].map(([region, states, season, worst]) => (
                  <tr key={region} className="border-t border-gray-100 align-top">
                    <td className="px-3 py-2 font-semibold text-brand-800">{region}</td>
                    <td className="px-3 py-2 text-gray-700">{states}</td>
                    <td className="px-3 py-2 text-gray-700">{season}</td>
                    <td className="px-3 py-2 text-gray-700">{worst}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 not-prose">Regional bands are typical, not guaranteed. A warm spring or a late frost moves both ends by weeks, and elevation matters as much as latitude &mdash; Flagstaff and Phoenix are in the same state and not in the same mosquito season.</p>

          <h3>Florida</h3>
          <p>Close to year-round. South Florida never really closes; statewide, expect roughly February or March through November, with the heaviest biting from June through September when the summer rains refill container and floodwater habitat. Florida is one of the few places where <em>both</em> <em>Aedes aegypti</em> and <em>Aedes albopictus</em> are common, so daytime biting in the shade is the norm rather than the exception, while <em>Culex quinquefasciatus</em> takes over after dark. <a href="https://edis.ifas.ufl.edu/" target="_blank" rel="noopener">University of Florida IFAS Extension</a> and the county mosquito control districts publish local activity updates worth checking before an outdoor event.</p>

          <h3>Texas</h3>
          <p>Roughly March through October, and close to year-round in the Rio Grande Valley and along the Gulf Coast. Peak biting runs May through September, and the defining feature of a Texas season is the flood brood: about a week to ten days after heavy rain, floodwater species emerge in numbers that make a normal evening unusable. <em>Culex quinquefasciatus</em> is the main West Nile carrier in the state, biting from dusk into the night, while <em>Aedes aegypti</em> and <em>Aedes albopictus</em> handle the daylight hours. <a href="https://agrilifeextension.tamu.edu/" target="_blank" rel="noopener">Texas A&amp;M AgriLife Extension</a> tracks regional activity.</p>

          <h3>California and Southern California</h3>
          <p>Most of California runs roughly April through October. Southern California stretches longer &mdash; March into November in the coastal and desert-adjacent counties, and mild winters can leave <em>Aedes aegypti</em> and <em>Aedes albopictus</em> biting into December in the Los Angeles and San Diego basins. Both of those invasive daytime species have established across large parts of the state since the 2010s, which is why Southern Californians increasingly report ankle bites at midday, a pattern the state did not have a generation ago. Inland and in the Central Valley, <em>Culex tarsalis</em> is the West Nile mosquito to watch, and it peaks at dusk around irrigated farmland.</p>

          <h3>Arizona</h3>
          <p>Roughly March through October, with a sharp twist: the monsoon. Mosquito numbers in Phoenix and Tucson track the July&ndash;September monsoon rains far more closely than they track the calendar, because the desert has little standing water until a storm creates it. Expect a lull through the driest, hottest pre-monsoon weeks &mdash; sustained days above 95&nbsp;&deg;F (35&nbsp;C) suppress activity &mdash; then a hard surge within one to two weeks of the first heavy rains. <em>Aedes aegypti</em> is established in both metro areas and bites during the day.</p>

          <h3>Minnesota</h3>
          <p>Roughly May through September, peaking in late June and July. Minnesota is the classic snowmelt-and-floodwater state: the first big brood emerges from thawing spring pools, and every substantial summer rain produces another wave about a week later. <em>Aedes vexans</em> is the mosquito most Minnesotans are actually swatting, and <em>Culex tarsalis</em> is the West Nile concern in the western and central parts of the state. The season closes abruptly &mdash; one hard frost and it is over.</p>

          <h3>Alaska</h3>
          <p>Short and intense: mosquitoes emerge as the snowmelt pools thaw in May, peak from mid-June to mid-July, and drop away through August. Alaska&rsquo;s particular quirk is light. Sub-arctic summer twilight lasts for hours and never fully darkens in the north, which stretches the dusk window so far that biting can continue through most of what passes for night in June. The upside: West Nile virus is not established in Alaska, so the problem is nuisance biting rather than disease risk.</p>

          <h2>What Month Is Worst for Mosquitoes?</h2>
          <p><strong>July and August, across most of the United States and Canada.</strong> The exceptions run in both directions: the Gulf Coast, Florida and Hawaii peak from June through September inside a February-to-November season, while Alaska compresses its entire worst stretch into mid-June to mid-July. Southern Ontario peaks from late June through early August.</p>
          <p>The reason July and August win almost everywhere is that two curves overlap there. Temperature sits in or near the 75&ndash;82&nbsp;&deg;F (24&ndash;28&nbsp;C) sweet spot, so egg-to-adult development is at its fastest &mdash; roughly a week in warm weather instead of two or three. At the same time, several generations have already stacked up since spring, so the population is at its largest at exactly the moment it is reproducing fastest. Add the humid, still, overcast evenings typical of late summer and you get the worst biting of the year. For the month-by-month picture in southern Ontario specifically, see <Link href="/blog/mosquito-season-gta-when-does-it-start">when mosquito season starts and how long it lasts</Link>.</p>

          <h2>U.S. Mosquito Species and When Each One Bites</h2>
          <p>&ldquo;When are mosquitoes most active&rdquo; has a different answer in Minneapolis than in Miami largely because the species mix is different. The three genera in the table further up are the framework; below are the specific U.S. species that framework resolves into, and the hours each one keeps.</p>
          <div className="not-prose my-6 rounded-xl border border-gray-200 overflow-x-auto">
            <table className="min-w-[680px] w-full text-sm">
              <thead className="bg-brand-50">
                <tr>
                  <th className="px-3 py-2 text-left">Species</th>
                  <th className="px-3 py-2 text-left">Where in the U.S.</th>
                  <th className="px-3 py-2 text-left">When it bites</th>
                  <th className="px-3 py-2 text-left">Why it matters</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Culex pipiens — northern house mosquito', 'Northern U.S.: Midwest, Northeast, Pacific NW (and across southern Canada)', 'Dusk into the night', 'The principal West Nile virus vector in the north'],
                  ['Culex quinquefasciatus — southern house mosquito', 'The South, Gulf Coast, Southwest, southern California', 'Dusk into the night', 'The principal West Nile virus vector in the South'],
                  ['Culex tarsalis — western encephalitis mosquito', 'Western and central U.S., especially irrigated farmland and the Great Plains', 'Dusk and the first hours of darkness', 'The key West Nile vector across the West — the species most Western readers have never heard of'],
                  ['Aedes albopictus — Asian tiger mosquito', 'Southeast and Mid-Atlantic, pushing north into the Midwest and Northeast', 'Daytime, with dawn and late-afternoon peaks', 'Aggressive shade biter; breeds in containers, so it is a backyard problem'],
                  ['Aedes aegypti — yellow fever mosquito', 'Gulf Coast, Florida, south Texas, Arizona, parts of southern California', 'Daytime, often indoors and close to homes', 'Dengue, Zika and chikungunya vector where established'],
                  ['Aedes sollicitans — eastern saltmarsh mosquito', 'Atlantic and Gulf coastal marshes', 'Peaks at dusk; will bite in shade by day', 'A strong flier that travels miles inland — why a coastal town gets swarmed days after a high tide'],
                  ['Aedes vexans — inland floodwater mosquito', 'Across the U.S. and Canada', 'Dusk peak', 'The "after the rain" mosquito; enormous broods roughly a week after flooding'],
                  ['Psorophora ciliata — gallinipper', 'Gulf Coast, Southeast, Mississippi Valley', 'Dusk, and in numbers after floods', 'Very large and painfully aggressive; appears in floodwater broods'],
                  ['Anopheles quadrimaculatus — common malaria mosquito', 'Eastern U.S.', 'Dusk to dawn, through the night', 'Historic malaria vector; malaria is not established in the U.S. today'],
                ].map(([species, where, when, why]) => (
                  <tr key={species} className="border-t border-gray-100 align-top">
                    <td className="px-3 py-2 font-semibold text-brand-800">{species}</td>
                    <td className="px-3 py-2 text-gray-700">{where}</td>
                    <td className="px-3 py-2 text-gray-700">{when}</td>
                    <td className="px-3 py-2 text-gray-700">{why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>Two cautions on ranges. The CDC builds its estimated potential-range maps for <em>Aedes aegypti</em> and <em>Aedes albopictus</em> from county-level and historical collection records combined with climate suitability, and they are explicitly maps of where the species could survive if introduced during the months mosquitoes are locally active &mdash; not maps of disease risk. The CDC also cautions that a species may turn up in an area the map does not shade, simply because nobody has trapped and reported it there. Second, ranges move. <em>Aedes albopictus</em> has been expanding northward for three decades; a species list that was right for your county in 2005 may be incomplete now. For current local surveillance, the <a href="https://www.mosquito.org/" target="_blank" rel="noopener">American Mosquito Control Association (AMCA)</a> maintains a directory of member districts, and most U.S. states run a public arbovirus surveillance page.</p>

          <h2>In Canada: The Same Behaviour, a Much Shorter Calendar</h2>
          <p>Canadian readers get the same daily clock &mdash; dusk peak, 2&ndash;4 a.m. floor, Aedes biting in shade at midday &mdash; inside a season that runs roughly May through September and ends decisively at the first hard frost. In the Greater Toronto Area the practical window is early May to late September, with the worst biting from late June through early August. The compressed season is the whole difference: southern Ontario simply does not spend February above 50&nbsp;&deg;F (10&nbsp;C), so there is no February mosquito.</p>
          <p>The species mix is narrower but familiar. <em>Culex pipiens</em> and <em>Culex restuans</em> are the West Nile carriers <a href="https://www.publichealthontario.ca/en/Diseases-and-Conditions/Infectious-Diseases/Vector-Borne-Zoonotic-Diseases/West-Nile-Virus" target="_blank" rel="noopener">Public Health Ontario</a> tracks through its summer trapping programme, and they bite from dusk into the night &mdash; the reason WNV risk in Ontario is an evening-and-night risk, not a midday one. <em>Aedes vexans</em> is the floodwater mosquito behind the wave that shows up a week after a heavy summer rain. <em>Aedes albopictus</em>, the daytime shade biter, has been detected in southernmost Ontario in recent years but is nowhere near as established as it is in the U.S. Southeast. National West Nile updates are published by the <a href="https://www.canada.ca/en/public-health/services/diseases/west-nile-virus.html" target="_blank" rel="noopener">Public Health Agency of Canada</a>, and repellent active ingredients sold in Canada are registered by <a href="https://www.canada.ca/en/health-canada/services/consumer-product-safety/pesticides-pest-management.html" target="_blank" rel="noopener">Health Canada&rsquo;s Pest Management Regulatory Agency (PMRA)</a>.</p>
          <p className="text-sm text-gray-600 not-prose">A note on who we are: BuzzSkito treats yards in the Greater Toronto Area only &mdash; <Link href="/mosquito-control" className="underline">mosquito control</Link> across 19+ GTA cities. If you are reading this from the United States, everything above about timing, temperature and species applies to your yard too; for treatment, the AMCA directory linked above will point you to a licensed operator or mosquito control district near you.</p>

          <h2>What Smell Do Mosquitoes Hate Most?</h2>
          <p><strong>Oil of lemon eucalyptus (OLE), and its refined form PMD, is the scent with the strongest evidence behind it</strong> &mdash; the plant-derived active the CDC lists alongside DEET, picaridin, IR3535 and 2-undecanone among EPA-registered repellent ingredients. Citronella, peppermint, lavender and garlic do repel mosquitoes, but weakly and briefly, because the vapour drifts away within minutes.</p>
          <p>The reason scent-based folk remedies disappoint is that they are trying to beat a three-channel sensor. Mosquitoes locate you first by the plume of <strong>carbon dioxide</strong> you exhale, from tens of metres away; then by <strong>body heat</strong> and moisture as they get close; and finally by <strong>skin odour</strong> &mdash; the lactic acid, ammonia and bacterial by-products on your skin. A citronella candle perfumes a small volume of moving air. It does not remove your CO&#8322; plume, your body heat, or your skin.</p>
          <p>What genuinely works on the smell channel is a repellent applied to skin, because it interferes with the mosquito&rsquo;s receptors right where it would land. Choose an active ingredient registered by the <a href="https://www.epa.gov/insect-repellents" target="_blank" rel="noopener">U.S. Environmental Protection Agency (EPA)</a> &mdash; its repellent search tool filters by protection time and by the pest you want to repel &mdash; or, in Canada, one registered by Health Canada&rsquo;s PMRA. <BuyLink tag={AMZ_TAG} search="oil of lemon eucalyptus insect repellent">Check oil of lemon eucalyptus repellents on Amazon &rarr;</BuyLink></p>
          <p className="text-sm text-gray-600 not-prose">One safety note carried straight from the CDC: OLE and PMD products are not recommended for children under three years old. DEET and picaridin have their own age guidance on the label &mdash; read it, since the concentration determines how long a single application lasts, not how strong the protection is.</p>

          <h2>What Will Keep Mosquitoes From Biting You?</h2>
          <p><strong>An EPA-registered repellent on exposed skin is the single most reliable defence</strong> &mdash; DEET, picaridin, IR3535, oil of lemon eucalyptus, PMD or 2-undecanone. Layer on loose long sleeves, permethrin-treated clothing and gear (never applied to skin), screens indoors, a fan on the patio, and weekly emptying of standing water so the next generation never hatches.</p>
          <p>In practice these stack, and each one covers a gap the others leave:</p>
          <ul>
            <li><strong>Repellent on skin</strong> &mdash; the only measure that works on a mosquito already at your ankle. Concentration governs duration, not strength: a higher-percentage DEET lasts longer, it does not repel harder.</li>
            <li><strong>Clothing</strong> &mdash; loose long sleeves and pants beat tight ones, because <em>Aedes</em> will bite straight through fabric stretched against skin. Permethrin-treated clothing is widely sold in the United States and is applied to garments, never to skin; in Canada, consumer permethrin clothing sprays are not registered the way they are stateside, so factory-treated garments are the usual route &mdash; check the PMRA listing before buying.</li>
            <li><strong>Moving air</strong> &mdash; the most underrated item on the list. Mosquitoes are weak fliers, and a breeze above roughly 10 mph (16 km/h) grounds them, so an oscillating fan makes a patio close to bite-proof during the dusk peak with no chemistry at all. <BuyLink tag={AMZ_TAG} search="outdoor oscillating patio fan">Check outdoor patio fans on Amazon &rarr;</BuyLink></li>
            <li><strong>Screens and timing</strong> &mdash; intact window screens stop the <em>Culex</em> that follow indoor light after dark, which is the entire mechanism behind the 2 a.m. whine in a bedroom.</li>
            <li><strong>Standing water, weekly</strong> &mdash; a bottle cap of water is enough for some container breeders. Emptying saucers, toys, tarps and clogged gutters every week is the one action that shrinks next fortnight&rsquo;s dusk swarm rather than tonight&rsquo;s.</li>
          </ul>

          <h2>Do Mosquitoes Prefer Fat or Skinny People?</h2>
          <p><strong>Neither, directly &mdash; body shape is not a signal mosquitoes can read.</strong> They track exhaled carbon dioxide, body heat and skin odour. A larger body generally exhales more carbon dioxide and radiates more heat, so it can attract somewhat more mosquitoes, but skin bacteria, sweat, recent exercise and pregnancy shift the odds far more than size does.</p>
          <p>The American Mosquito Control Association describes the same three cues, and the practical consequence is that the &ldquo;mosquito magnet&rdquo; in your household is usually explained by something other than build. Anyone who has just exercised is exhaling more CO&#8322;, running hotter, and carrying more lactic acid on the skin &mdash; three signals raised at once. Pregnancy raises both CO&#8322; output and skin temperature. Skin microbiome composition varies a lot between people and appears to matter more than most single factors. Alcohol is commonly reported to increase attractiveness, though the evidence is modest. Blood-type claims circulate constantly online; the studies behind them are small and inconsistent, and it is not a finding to plan an evening around.</p>
          <p>The useful takeaway is that none of these traits are worth worrying about, because all of them are overridden by the same intervention. Whatever your CO&#8322; output, an EPA- or PMRA-registered repellent on exposed skin closes the gap between the most-bitten person at the table and the least-bitten one.</p>

          <div className="not-prose my-8 rounded-2xl border-2 border-emerald-200 bg-emerald-50/60 p-6">
            <h2 className="text-xl font-extrabold text-brand-900 mb-3 mt-0">Key Takeaways</h2>
            <ul className="space-y-2 text-sm text-gray-800 list-disc pl-5">
              <li><strong>Dusk is the peak</strong> &mdash; from about 30 minutes before local sunset to 90 minutes after it is the worst window of the day for most mosquitoes.</li>
              <li><strong>Biting stops between roughly 2 and 4 a.m.</strong>, then rises again briefly at dawn. Anopheles are the group most likely to be biting in the middle of the night.</li>
              <li><strong>Aedes break the rule.</strong> The Asian tiger mosquito and <em>Aedes aegypti</em> bite in shade all day, which is why a leafy yard can be miserable at noon.</li>
              <li><strong>The thermometer sets the season:</strong> activity switches on above 50&nbsp;&deg;F (10&nbsp;C), peaks at 75&ndash;82&nbsp;&deg;F (24&ndash;28&nbsp;C), and declines above 95&nbsp;&deg;F (35&nbsp;C). Wind above 10 mph (16 km/h) grounds them.</li>
              <li><strong>The calendar is regional.</strong> Gulf Coast and Florida run February to November; the Midwest and Mid-Atlantic April to September; New England and the northern Midwest May to September; Alaska mid-June to mid-July; southern Ontario May to September, worst late June to early August.</li>
              <li><strong>July and August are the worst months</strong> across most of the U.S. and Canada, because peak temperature and peak accumulated population coincide.</li>
              <li><strong>Species determine the hours.</strong> <em>Culex</em> (all three U.S. species) bite dusk into night and carry West Nile virus; <em>Aedes</em> bite by day; <em>Anopheles</em> hold the overnight plateau.</li>
              <li><strong>Treat resting spots, not bite windows.</strong> Mosquitoes spend half of every day motionless in shaded, humid cover &mdash; that is the target that works around the clock.</li>
            </ul>
          </div>

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/mosquito-season-gta-when-does-it-start">When Does Mosquito Season Start?</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-mosquitoes-in-yard-ontario">How to Get Rid of Mosquitoes in Your Yard</Link></li>
            <li><Link href="/mosquito-control">BuzzSkito Professional Mosquito Control Service</Link></li>
            <li><Link href="/free-yard-assessment">Get a Free Yard Assessment</Link></li>
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

      <StickyBuyBar tag={AMZ_TAG} name="Picaridin 20% insect repellent" search="picaridin insect repellent 20 percent" label="For peak hours" />

      <CTASection heading="Bite-Free at Dawn, Dusk, and Every Hour Between" subtext="A residual barrier spray treats the shaded spots where mosquitoes rest, so they are killed around the clock. From $99." variant="dark" />
    </>
  )
}
