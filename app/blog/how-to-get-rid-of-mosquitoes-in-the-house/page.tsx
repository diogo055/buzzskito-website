import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'

const SLUG = 'how-to-get-rid-of-mosquitoes-in-the-house'
const DATE = '2026-07-15'
const TITLE = 'How to Get Rid of Mosquitoes in the House (Fast) — 2026 Indoor Guide'
const META_TITLE = 'How to Get Rid of Mosquitoes in the House Fast'

const FAQS = [
  {
    question: 'How do you get rid of mosquitoes in the house?',
    answer: 'Do four things in order: (1) Run a fan on the seating or sleeping area — mosquitoes are weak fliers and can’t hold course in moving air, so it both protects you and pushes them into the open. (2) Hunt the ones already inside at dusk, checking dark low corners, under and behind furniture, closets, and behind curtains. (3) Kill the indoor breeding source — dump any standing water in plant saucers, vases, and unused drains, since a forgotten cup of water can hatch dozens of new mosquitoes indoors. (4) Seal the entry points (torn screens, gaps under doors) so no more get in. For a lasting fix, treat the yard so they die outside before they ever reach the house.',
  },
  {
    question: 'How do I get rid of mosquitoes in my house naturally?',
    answer: 'Without any spray: run a box or ceiling fan continuously (the single most effective no-chemical tactic indoors), eliminate every source of standing water — plant saucers, vases, pet bowls, clogged drains, the tray under the fridge — and let a bit of daytime sunlight and airflow into dark rooms, because mosquitoes rest in cool, humid, shadowed spots. A cup of soapy water or a shallow dish of apple cider vinegar with a drop of dish soap acts as a simple homemade trap by breaking the water’s surface tension. Screens, door sweeps and keeping unscreened windows shut at dusk stop new ones entering.',
  },
  {
    question: 'How do you kill mosquitoes inside the house?',
    answer: 'The most reliable kill is a manual swat with a magazine or an electric bug-racket, done at dusk or dawn when indoor mosquitoes are active. Wait until one lands — usually on a wall or ceiling near a light — and strike. Plug-in indoor traps that use UV light or heat plus a suction fan work overnight to reduce numbers while you sleep. A short blast from a Health Canada (PCP) registered indoor flying-insect spray, used strictly per the label, kills on contact; ventilate the room afterward and keep it away from food, pets and children.',
  },
  {
    question: 'How do I get a mosquito out of my room?',
    answer: 'Turn off the room light and turn on a light in the hallway or next room with the door open — mosquitoes drift toward light and warmth, so many will follow it out. If that fails, wait until dusk when it becomes active, watch a bright wall (mosquitoes rest on walls and ceilings between feeds), and swat it. Running a fan aimed at your bed makes the room hard for it to navigate so you can sleep undisturbed while you keep hunting. Checking behind curtains, under the bed and in the closet corners usually reveals where it is resting.',
  },
  {
    question: 'How do I keep mosquitoes away at night while I sleep?',
    answer: 'Point an oscillating fan at the bed — the airflow physically prevents a mosquito from landing and disperses the carbon dioxide plume it homes in on. A fitted bed net (mosquito net) is the gold standard used worldwide and gives complete physical protection. Keep the bedroom window closed at dusk or make sure the screen has no tears, switch off the lamp you read by once you’re settled, and remove any standing water from the room. A Health Canada approved repellent with DEET or icaridin on exposed skin adds a personal barrier if bites continue.',
  },
  {
    question: 'Where do mosquitoes hide in a room during the day?',
    answer: 'Mosquitoes rest in cool, dark, humid, sheltered spots during daylight and get active at dusk. Indoors that means: under beds and furniture, inside closets and wardrobes, behind curtains and drapes, in dark low corners near the floor, behind picture frames and wall hangings, under sinks, in laundry piles and hanging clothes, behind the toilet, and in the bathroom generally (the humidity draws them). They favour the lower half of the room and shaded walls, rarely the bright ceiling centre until they are hunting at night.',
  },
  {
    question: 'How do I find a mosquito in my room?',
    answer: 'Wait for dusk when it starts flying, then dim the room and shine a phone light along the walls and ceiling — a resting mosquito shows as a small dark dot with legs splayed. Check the classic resting spots first: behind curtains, under the bed, closet corners, behind the door and around the bathroom. Clap your hands near your ear if you hear the whine to locate the direction, or sit still with a bare arm exposed under a lamp; the mosquito will often come to you within minutes, giving you a clear shot.',
  },
  {
    question: 'Why do I keep getting mosquitoes in my house?',
    answer: 'Two reasons: they’re getting in, or they’re breeding inside. Entry points are torn window or door screens, gaps under exterior doors, and open unscreened windows at dusk. Indoor breeding happens in any water that sits for over a week — plant saucers, vases, forgotten glasses, the drip tray under the fridge or a dehumidifier, slow-draining sink and floor drains. If numbers stay high no matter what you do indoors, the source is almost always the yard next to the house — standing water, dense shade, and unmanaged breeding sites push a constant supply toward your doors.',
  },
  {
    question: 'Do indoor mosquito traps and plug-ins actually work?',
    answer: 'UV-light plus suction-fan traps and heat-lure traps do catch mosquitoes indoors, and they help most overnight in a closed bedroom where there is no competing carbon dioxide or heat source drawing the mosquito elsewhere. They reduce numbers gradually rather than clearing a room instantly, so pair them with a fan and physical swatting for a bad night. Bug zappers are a poor choice indoors — research shows they kill mostly harmless moths and beetles and very few biting mosquitoes.',
  },
  {
    question: 'Does a fan really keep mosquitoes away indoors?',
    answer: 'Yes — it is one of the best-supported no-chemical tactics. Mosquitoes are weak fliers that cruise at roughly 1 to 2 km/h, so even a modest breeze from a box or ceiling fan makes it hard for them to approach, land and bite. The moving air also scatters the plume of carbon dioxide and body heat they track to find you. Aim the fan across the bed or seating area; you get personal protection and you make the whole room harder for them to hunt in.',
  },
  {
    question: 'What is the fastest way to get rid of mosquitoes in the house?',
    answer: 'For tonight: switch on a fan aimed at where you sit or sleep, dim the room, watch the walls and ceiling at dusk, and swat the ones that land. For the next few days: empty every source of standing water indoors, fix torn screens and add a door sweep so no more get in, and run an indoor UV or heat-lure trap overnight. For a permanent fix: kill them outside before they reach the house with a professional yard barrier treatment, because indoor tactics only manage the few that get in — they don’t address the outdoor population producing them.',
  },
  {
    question: 'How long will a mosquito live trapped in my house?',
    answer: 'An adult mosquito indoors typically lives one to two weeks, though a female that finds a blood meal and a spot of standing water can survive longer and lay eggs inside. That is why removing indoor water sources matters: a single female laying in a plant saucer or drain can turn one nuisance mosquito into dozens within one to two weeks. Do not wait it out — remove the water, run a fan and trap or swat the adults.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'How to get rid of mosquitoes in the house fast — the fan trick, where mosquitoes hide in a room, how to find and kill them, natural methods, sleep protection, and finding the indoor breeding source. Ontario 2026 guide.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
})

export default function GetRidOfMosquitoesInHousePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'A complete 2026 indoor playbook for getting rid of mosquitoes in the house, room and bedroom — where they hide, how to find them, the fan trick, natural methods and the breeding source.', slug: SLUG, datePublished: DATE })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'How to Get Rid of Mosquitoes in the House', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Mosquitoes in the House</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">The indoor playbook for the &ldquo;there&rsquo;s a mosquito in my bedroom at night&rdquo; problem — where they hide, how to find and kill the one buzzing your ear, natural methods that actually work, and how to stop them getting in at all.</p>
        </div>
      </section>

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
              To get rid of mosquitoes in the house, run a fan on your seating or sleeping area (mosquitoes are weak fliers and can&rsquo;t hold course in moving air), hunt the ones already inside at dusk by checking dark low corners, under furniture, closets and behind curtains, and kill the indoor breeding source by dumping any standing water in plant saucers, vases and drains. Then seal torn screens and door gaps so no more get in.
            </p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>Mosquitoes fly at only about 1&ndash;2 km/h, so a box or ceiling fan aimed at your bed or seat stops them landing and biting.</li>
              <li>Mosquitoes lay eggs in water that sits about a week &mdash; a single forgotten cup can hatch a dozen mosquitoes indoors.</li>
              <li>Indoors they rest in cool, dark, humid spots: under beds and furniture, closets, behind curtains, and in the bathroom.</li>
              <li>An adult mosquito indoors typically lives one to two weeks.</li>
              <li>A fitted bed net gives complete physical protection while you sleep, with no chemicals.</li>
              <li>Bug zappers are a poor indoor choice &mdash; research shows they kill mostly moths and beetles and very few biting mosquitoes.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito, GTA mosquito &amp; tick control &middot; 150+ five-star Google reviews</p>
          </div>
        </div>
      </section>

      <article className="py-6 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">

          <p>You&rsquo;ve turned off the light, you&rsquo;re almost asleep, and then you hear it — that thin high whine circling your ear. A mosquito indoors is a different problem from mosquitoes in the backyard, and most advice online is written for the yard. This guide is the indoor version: how to deal with the one in your room tonight, and how to stop them getting in at all. It&rsquo;s written for Ontario and GTA homes and reflects guidance from Public Health Ontario and Health Canada on the small number of mosquito species active in our region.</p>

          <h2>How do you get rid of mosquitoes inside the house?</h2>
          <p>There are four moves, and doing them in order matters. First, deny them the air: a fan aimed at where you sit or sleep protects you immediately. Second, hunt the adults already inside. Third, kill the breeding source so no new ones hatch. Fourth, seal the entry points so the problem doesn&rsquo;t come back. Everything below is detail on those four steps.</p>
          <p>The most important mindset shift: the mosquito buzzing your bedroom did not spawn there. It either flew in through a gap or hatched from water sitting somewhere in your home. If you only swat the adult, another one shows up the next night. You have to close the door <em>and</em> drain the water. If it flew in, the gap is usually a door that is propped or slow to close, which is exactly the job <Link href="/blog/best-magnetic-screen-door-canada" className="text-brand-700 underline">a magnetic screen door</Link> is built for.</p>

          <div className="not-prose my-6 rounded-xl bg-emerald-50 border-l-4 border-emerald-400 p-4">
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong className="text-emerald-900">The 30-second version:</strong> Fan on. Lights dimmed. Watch the walls at dusk and swat what lands. Then, over the next day, empty every dish of standing water indoors and fix your screens. If mosquitoes keep coming no matter what you do inside, the source is the yard — kill them outside before they reach the house.
            </p>
          </div>

          <h2>How to get rid of mosquitoes inside the house naturally</h2>
          <p>You can clear most indoor mosquito problems without a single chemical. Natural indoor control comes down to airflow, water, and light:</p>
          <ul>
            <li><strong>Run a fan continuously.</strong> This is the single most effective no-chemical tactic indoors. Mosquitoes cruise at only 1&ndash;2 km/h, so even a box or ceiling fan on low makes it hard for them to fly toward you, land, and bite. The moving air also scatters the carbon dioxide and body-heat plume they track to find you.</li>
            <li><strong>Kill the water.</strong> Mosquitoes need standing water to breed. Indoors that means plant saucers, vases, forgotten glasses, pet bowls, the drip tray under the fridge or a dehumidifier, and slow drains. Dump it, scrub it, keep it dry. A cup of water left a week can hatch a dozen mosquitoes.</li>
            <li><strong>Open up dark, humid rooms.</strong> Mosquitoes rest in cool, shadowed, humid spots. A little daytime airflow and light in bathrooms, basements and closets makes them less inviting as hideouts.</li>
            <li><strong>Use scent they dislike.</strong> Certain plant oils repel mosquitoes at close range — see our guide to the <Link href="/blog/smells-mosquitoes-hate">smells mosquitoes hate</Link> for what genuinely works versus what&rsquo;s a myth. Treat these as a mild personal deterrent, not a whole-room fix.</li>
            <li><strong>Homemade trap.</strong> A shallow dish of apple cider vinegar (or sugar water) with a single drop of dish soap breaks the surface tension so mosquitoes that land drown. It&rsquo;s slow, but it costs nothing.</li>
          </ul>

          <h2>How to kill mosquitoes inside</h2>
          <p>When you need something dead now rather than deterred, you have three reliable options, from most to least targeted:</p>
          <ol>
            <li><strong>Manual swat.</strong> The highest-percentage kill in a house. Wait until dusk or dawn when the mosquito is active, watch a bright wall or the ceiling near a light, and strike when it lands with a magazine, a flip-flop, or an electric bug-racket. Patience beats chasing — a resting mosquito is a still target.</li>
            <li><strong>Indoor trap.</strong> A plug-in UV-light or heat-lure trap with a suction fan works overnight to pull numbers down while you sleep, especially in a closed bedroom where nothing else is competing for the mosquito&rsquo;s attention. Our roundup of the <Link href="/blog/best-indoor-fly-mosquito-trap-canada">best indoor fly and mosquito traps in Canada</Link> covers which types actually catch mosquitoes.</li>
            <li><strong>Registered indoor spray.</strong> A short, targeted burst of a Health Canada (PCP)-registered indoor flying-insect spray kills on contact. Use it strictly per the label, ventilate the room afterward, and keep it away from food-prep surfaces, pets and children. This is a spot tool, not something to fog a bedroom with.</li>
          </ol>
          <p><strong>Skip the indoor bug zapper.</strong> Research consistently shows electric UV zappers kill mostly harmless moths and beetles and very few biting mosquitoes — indoors they&rsquo;re noise and light with little payoff.</p>

          <h2>Where do mosquitoes hide in a room?</h2>
          <p>Mosquitoes are not out in the open during the day — they rest in cool, dark, humid, sheltered places and only get active at dusk. If you can&rsquo;t find the one that bit you last night, you&rsquo;re probably looking in the wrong half of the room. They favour the lower, shaded areas, not the bright centre of the ceiling. Here&rsquo;s where to look:</p>

          <div className="not-prose my-6 rounded-xl border border-navy-100 overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Hiding spot</th>
                  <th className="px-4 py-3 text-left">Why they rest there</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Under the bed &amp; furniture', 'Dark, still, sheltered from air currents'],
                  ['Inside closets &amp; wardrobes', 'Cool, dark, humid from stored fabric'],
                  ['Behind curtains &amp; drapes', 'Vertical dark surface out of the light'],
                  ['Dark low corners near the floor', 'Shadowed and undisturbed'],
                  ['Behind picture frames / wall art', 'Snug gap against a shaded wall'],
                  ['The bathroom (behind toilet, under sink)', 'Highest indoor humidity — a magnet'],
                  ['Laundry piles &amp; hanging clothes', 'Dark folds hold moisture and shade'],
                  ['Behind doors &amp; in room corners', 'Still air, easy to overlook'],
                ].map(([spot, why]) => (
                  <tr key={spot} className="border-b border-navy-50 last:border-0">
                    <td className="px-4 py-2 font-semibold text-brand-800 bg-brand-50 w-1/2" dangerouslySetInnerHTML={{ __html: spot }} />
                    <td className="px-4 py-2 text-gray-700" dangerouslySetInnerHTML={{ __html: why }} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>How to find a mosquito in your room</h2>
          <p>Finding a single mosquito feels impossible until you use its own behaviour against it. Wait for dusk, when it starts to fly, then work through this sequence:</p>
          <ul>
            <li><strong>Dim the room and use a phone light.</strong> Sweep the beam slowly along the walls and ceiling. A resting mosquito shows as a small dark dot with legs splayed out — it stands out against a plain painted wall.</li>
            <li><strong>Check the classic resting spots first</strong> (see the table above): behind curtains, under the bed, closet corners, behind the door, and around the bathroom.</li>
            <li><strong>Become the bait.</strong> Sit still under a lamp with a bare arm or leg exposed. Mosquitoes home in on carbon dioxide, body heat and skin scent — within a few minutes it will usually come to you, giving you a clear, close shot.</li>
            <li><strong>Follow the whine.</strong> If you hear it near your ear in the dark, hold still and listen for the direction, then turn on the light and watch where it settles.</li>
          </ul>

          <h2>How do I get a mosquito out of my room?</h2>
          <p>If you&rsquo;d rather evict it than kill it, exploit the fact that mosquitoes drift toward light and warmth. Turn off the light in your room and turn on a light in the hallway or the next room with the door open — many will follow the light out, and you close the door behind them. It doesn&rsquo;t work every time, but it&rsquo;s worth 60 seconds before you resort to hunting.</p>
          <p>While you work, run a fan aimed at your bed. The airflow makes the room hard for the mosquito to navigate and keeps it off you, so you can either sleep undisturbed or keep looking without getting bitten.</p>

          <h2>How to keep mosquitoes away at night</h2>
          <p>The bedroom at night is where indoor mosquitoes cause the most misery, so it&rsquo;s worth setting up properly:</p>
          <ul>
            <li><strong>Fan on the bed.</strong> An oscillating fan pointed across the bed physically stops a mosquito landing and disperses the CO&#8322; plume it follows. This alone solves most single-mosquito nights.</li>
            <li><strong>Bed net.</strong> A fitted mosquito net over the bed is the gold standard used worldwide — complete physical protection, no chemicals, and it works while you sleep. Ideal for cottages, nurseries and anyone bitten repeatedly.</li>
            <li><strong>Close the window at dusk.</strong> Dusk and dawn are peak activity. Keep bedroom windows shut then, or make sure the screen has zero tears. One small hole is an open door.</li>
            <li><strong>Kill the bedside light once you&rsquo;re settled.</strong> Light draws them in from other rooms.</li>
            <li><strong>Remove water from the room</strong> — vases, a humidifier reservoir, a pet&rsquo;s water bowl left overnight.</li>
            <li><strong>Personal repellent if bites continue.</strong> A Health Canada&ndash;approved repellent with DEET or icaridin on exposed skin adds a barrier. Follow the label for the concentration and re-application, and use age-appropriate products for children per Health Canada guidance.</li>
          </ul>

          <h2>Find and kill the indoor breeding source</h2>
          <p>If mosquitoes keep appearing indoors, something inside is breeding them, or something just outside your door is. Mosquitoes lay eggs in water that sits undisturbed for about a week, and they need remarkably little of it. Do a walk-through and empty or dry every one of these:</p>
          <ul>
            <li>Plant saucers and self-watering pot reservoirs (the most common indoor culprit)</li>
            <li>Vases and cut-flower water</li>
            <li>The drip tray under the fridge, a dehumidifier, or an AC unit</li>
            <li>Slow or unused sink and floor drains (basement and laundry drains especially)</li>
            <li>Pet water bowls left standing, and the bottom of recycling bins</li>
            <li>Forgotten glasses and bottles with a little liquid left in them</li>
          </ul>
          <p>The same water-hunting logic applies right outside your walls, where the real supply usually comes from. Our guide to <Link href="/blog/hidden-mosquito-breeding-spots-backyard">hidden mosquito breeding spots in the backyard</Link> shows the outdoor water sources — clogged gutters, tarps, saucers, corrugated drainpipe, kids&rsquo; toys — that quietly produce the mosquitoes ending up in your bedroom.</p>

          <h2>Why do I keep getting mosquitoes in my house?</h2>
          <p>It comes down to two questions: how are they getting in, and what&rsquo;s producing them? Run this quick diagnostic table.</p>

          <div className="not-prose my-6 rounded-xl border border-navy-100 overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Symptom</th>
                  <th className="px-4 py-3 text-left">Likely cause</th>
                  <th className="px-4 py-3 text-left">Fix</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['One or two at dusk near windows', 'Getting in through screens/doors', 'Patch screens, add a door sweep, shut windows at dusk'],
                  ['Steady trickle all summer', 'Yard breeding right outside', 'Treat the yard barrier + remove outdoor water'],
                  ['They appear far from any door', 'Breeding indoors', 'Dump standing water in saucers, drains, trays'],
                  ['Worst in the bathroom/basement', 'Humidity + a floor drain', 'Dry the room, flush and screen the drain'],
                ].map(([symptom, cause, fix]) => (
                  <tr key={symptom} className="border-b border-navy-50 last:border-0">
                    <td className="px-4 py-2 font-semibold text-brand-800 bg-brand-50">{symptom}</td>
                    <td className="px-4 py-2 text-gray-700">{cause}</td>
                    <td className="px-4 py-2 text-gray-700">{fix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>The real fix: stop them outside before they get in</h2>
          <p>Every tactic above manages the mosquitoes that already made it indoors. That&rsquo;s essential for a bad night, but it&rsquo;s a losing game if a fresh supply keeps arriving from outside. In most GTA homes, the mosquito in your bedroom flew in from your own yard — from standing water, dense shade and unmanaged breeding sites a few metres from your door.</p>
          <p>The durable solution is to lower the outdoor population so far fewer ever reach the house. That means eliminating outdoor standing water and, for a real reduction, treating the vegetation around the home so mosquitoes die on contact before they drift indoors. A professional yard <Link href="/mosquito-control">barrier spray from $99</Link> coats the shaded leaf surfaces where mosquitoes rest and keeps working for weeks per treatment — the outdoor half of the equation this indoor guide can&rsquo;t solve on its own.</p>
          <p>For the full outdoor system — water management, barrier treatment, personal protection and the order to do them in — see our <Link href="/blog/ultimate-backyard-mosquito-control-guide">ultimate backyard mosquito control guide</Link>.</p>

          <aside aria-label="Professional mosquito control" className="not-prose my-8 rounded-2xl border-2 border-emerald-300 bg-gradient-to-br from-emerald-50 to-white p-6 sm:p-7 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-extrabold text-brand-900 mb-2 leading-tight">Tired of mosquitoes finding their way inside?</h3>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">BuzzSkito&rsquo;s licensed barrier spray knocks down the outdoor population feeding your indoor problem — whole-yard coverage from $99, backed by 150 five-star reviews across 19 GTA cities.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/free-yard-assessment" className="btn-primary-sm">Get a Free Quote →</Link>
              <a href="tel:+12892165030" className="font-bold text-brand-800 hover:text-brand-600 transition-colors">(289) 216-5030</a>
            </div>
          </aside>

          <h2>Indoor mosquito control: quick reference</h2>
          <div className="not-prose my-6 rounded-xl border border-navy-100 overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Method</th>
                  <th className="px-4 py-3 text-left">Speed</th>
                  <th className="px-4 py-3 text-left">Best for</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Fan on the bed/seating', 'Instant', 'Personal protection tonight'],
                  ['Manual swat at dusk', 'Instant', 'Killing the one in the room'],
                  ['Bed net', 'Instant', 'Guaranteed sleep protection'],
                  ['Remove standing water', '1–2 weeks', 'Stopping indoor breeding'],
                  ['Fix screens / door sweep', 'Same day', 'Stopping new entries'],
                  ['Indoor UV / heat-lure trap', 'Overnight', 'Reducing numbers passively'],
                  ['Yard barrier spray', 'Same day, weeks of residual', 'Cutting the source outside'],
                ].map(([method, speed, best]) => (
                  <tr key={method} className="border-b border-navy-50 last:border-0">
                    <td className="px-4 py-2 font-semibold text-brand-800 bg-brand-50">{method}</td>
                    <td className="px-4 py-2 text-gray-700">{speed}</td>
                    <td className="px-4 py-2 text-gray-700">{best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-500 italic">This article is general information for Ontario homeowners, not medical or pest-control advice for a specific infestation. Always follow the label on any registered insecticide or repellent, and consult Health Canada and Public Health Ontario guidance for the current mosquito-borne disease situation in your area.</p>

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/best-indoor-fly-mosquito-trap-canada">Best Indoor Fly &amp; Mosquito Trap in Canada</Link></li>
            <li><Link href="/blog/hidden-mosquito-breeding-spots-backyard">Hidden Mosquito Breeding Spots in Your Backyard</Link></li>
            <li><Link href="/blog/smells-mosquitoes-hate">Smells Mosquitoes Hate (What Actually Works)</Link></li>
            <li><Link href="/blog/ultimate-backyard-mosquito-control-guide">The Ultimate Backyard Mosquito Control Guide</Link></li>
            <li><Link href="/mosquito-control">BuzzSkito Professional Mosquito Control Service</Link></li>
          </ul>
        </div>
      </article>

      <CTASection heading="Kill Them Outside Before They Get In" subtext="Get a free quote for licensed yard barrier spray. From $99. Same-day protection, weeks of residual. Serving 19 GTA cities." variant="dark" />
    </>
  )
}
