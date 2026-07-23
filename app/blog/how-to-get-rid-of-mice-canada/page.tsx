import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import BuyLink from '@/components/BuyLink'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import SpecialistDisclosure from '@/components/SpecialistDisclosure'
import FreshnessStamp from '@/components/FreshnessStamp'
import AuthorByline from '@/components/AuthorByline'
import TopPick from '@/components/TopPick'
import { tagForSlug } from '@/lib/amazon-clusters'

const SLUG = 'how-to-get-rid-of-mice-canada'
const DATE = '2026-07-16'
const UPDATED = '2026-07-16'
const TITLE = 'How to Get Rid of Mice in Canada 2026 — The 4-Step Plan That Actually Works'

const FAQS = [
  {
    question: 'How do you get rid of mice fast in Canada?',
    answer: 'Run all four steps at once: strip the kitchen of accessible food the same day, deploy at least 12 snap traps along walls on night one (trap-line research shows the first night out-catches every night after), seal every exterior gap of 6 mm or more with coarse steel wool backed by caulk, and keep sentinel traps down for 7–10 quiet nights. Homes that trap without sealing re-catch new mice every fall; homes that do both are typically mouse-free in 1–3 weeks.',
  },
  {
    question: 'What time of year do mice enter houses in Canada?',
    answer: 'September through November is the entry wave across most of Canada. Mice spend summer outdoors where food is abundant, then push indoors as overnight temperatures drop toward 10°C and seed sources dry up — in southern Ontario the first droppings typically appear within weeks of Thanksgiving. Mice that get in stay all winter; they do not leave in spring, because an insulated house with a stocked pantry beats a field in every season.',
  },
  {
    question: 'How small a gap can a mouse fit through?',
    answer: 'About 6 mm — the width of a standard pencil. A mouse skull is the only rigid part of its body; if the head fits, the body follows. That is why exclusion checklists obsess over gaps that look absurdly small: worn garage-door seals, the hole where a gas line or AC lineset enters the wall, brick weep vents, and dryer vents with broken flaps. Anything you can slide a pencil into needs steel wool, metal mesh, or a proper cover.',
  },
  {
    question: 'Does seeing one mouse mean I have an infestation?',
    answer: 'Usually, yes — treat one sighting as several residents. Mice are nocturnal and avoid open spaces, so a mouse crossing your kitchen in daylight generally means the population is large enough to push individuals out of the safest runways. One female produces 5–10 litters per year of 5–6 pups, and pups breed at 6–8 weeks, so two mice in October can be 30+ by January. Deploy a full trap line immediately, not a single trap.',
  },
  {
    question: 'How many traps do I need to get rid of mice?',
    answer: 'Twelve or more on the first night for a typical active problem — under-trapping is the most common reason DIY control fails. Space snap traps every 2–3 metres along walls with droppings, trigger end touching the baseboard, doubled up behind the stove, under the sink, and at corners. Field research is consistent: more mice are caught on night one than any night after, before survivors turn trap-shy. Twelve traps for three nights beats two traps for three weeks.',
  },
  {
    question: 'What is the kitchen sanitation triangle?',
    answer: 'Food, water, and harbourage — the three things a mouse needs within its 3–9 metre foraging range. Food: move everything gnawable into glass, metal, or hard plastic, clear crumbs behind appliances, and lift pet bowls overnight. Water: fix dripping taps and wipe sinks dry — mice need very little. Harbourage: get storage off the floor and break down cardboard, which mice shred for nesting. Sanitation alone rarely evicts mice, but it makes your trap bait the most interesting food in the room.',
  },
  {
    question: 'What should I seal mouse holes with?',
    answer: 'Coarse stainless steel wool or copper mesh packed tightly into the gap, then sealed over with exterior caulk so it cannot be pulled out — mice cannot chew through the metal fibres. Fit door sweeps or new bottom seals on exterior and garage doors, and screw 6 mm galvanized hardware cloth over larger openings. Never rely on expanding foam alone: mice chew through cured foam easily, so foam is only a cosmetic layer over a metal core.',
  },
  {
    question: 'Do mice go away on their own in summer?',
    answer: 'No — an established indoor population does not pack up and leave. A house offers stable warmth, no predators, and reliable food in every season. Summer is actually the best time for exclusion work: activity is at its annual low, caulk cures properly in warm weather, and every 6 mm gap you close in July is a mouse that never gets in during the September–November entry wave.',
  },
  {
    question: 'Is it safe to clean up mouse droppings?',
    answer: 'Only with wet-cleaning precautions — never sweep or vacuum dry droppings, because the dust can carry pathogens, including hantavirus from deer mouse droppings in parts of Canada. Ventilate for 30 minutes, wear disposable gloves, soak droppings with a 1:10 bleach solution for 5 minutes, wipe up with paper towels, double-bag the waste, and wash hands afterward. For heavy accumulations in attics or crawl spaces, follow your public health unit’s guidance or hire a professional.',
  },
  {
    question: 'Do peppermint oil, mothballs, or ultrasonic repellers keep mice away?',
    answer: 'No — all three fail controlled testing. Mice routinely nest centimetres from strong odours; peppermint oil dissipates within days, and scattering mothballs for rodents is an off-label pesticide use in Canada. Ultrasonic plug-ins fare no better: mice habituate to the sound within days, ultrasound does not pass through walls or furniture, and regulators have repeatedly challenged manufacturers over unsupported claims. Repellent money is better spent on traps and steel wool.',
  },
  {
    question: 'Will getting a cat get rid of mice?',
    answer: 'Not reliably. Many cats are indifferent hunters, and even a keen one cannot reach mice travelling inside wall voids and behind appliances — where most of the population lives. Studies of urban rodents show established mouse populations persist comfortably in homes with cats. Ironically, cat food left out overnight is one of the most common mouse food sources; a cat is a companion that occasionally intercepts a mouse, not a control program.',
  },
  {
    question: 'When should I call a professional exterminator for mice?',
    answer: 'Call in a professional when a properly run DIY program fails: fresh droppings or ongoing catches after 3–4 weeks of a 12-trap line plus sealed gaps, entry points you cannot locate, activity in wall voids you cannot reach, or droppings over 1 cm long — which means rats, a different problem entirely. Licensed operators can use commercial-class rodenticides and do structural exclusion consumers cannot. Typical Canadian pricing is covered in our pest control cost guide.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: 'The complete Canadian playbook for getting rid of mice: fall entry-wave timing, the 6 mm gap rule, the kitchen sanitation triangle, a 12-trap night-one deployment, and exclusion with steel wool and door sweeps. Updated 2026.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
})

const AMZ_TAG = tagForSlug('how-to-get-rid-of-mice-canada')

export default function HowToGetRidOfMiceCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Independent Canadian guide to eliminating house mice: seasonality, the 6 mm gap rule, sanitation, mass trapping, exclusion materials, and Canadian rodenticide law.', slug: SLUG, datePublished: DATE })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'How to Get Rid of Mice in Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">How to Get Rid of Mice in Canada</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">Why mice pour into Canadian houses every fall, the 6 mm gap rule that decides whether they get in, and the four-step playbook — sanitation, mass trapping, exclusion, monitoring — that actually ends the problem.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">To get rid of mice in Canada, run four steps simultaneously: strip accessible food from the kitchen the same day, deploy 12 or more snap traps along walls on night one (the Victor M325 is our standing pick), seal every exterior gap of 6 mm or more with coarse steel wool backed by caulk plus door sweeps, and keep sentinel traps down until you log 7–10 consecutive quiet nights. Trapping without sealing just restocks the house every fall; done together, most Canadian homes are clear in 1–3 weeks.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>A mouse can squeeze through a 6 mm gap — the width of a standard pencil.</li>
              <li>The Canadian entry wave runs September–November, as overnight temperatures drop toward 10°C.</li>
              <li>Trap-line research shows night one out-catches every subsequent night — deploy 12+ traps at once, spaced 2–3 m along walls.</li>
              <li>One female house mouse produces 5–10 litters per year of 5–6 pups, and pups breed at 6–8 weeks.</li>
              <li>Mice forage only 3–9 metres from the nest — cluster traps where the droppings are.</li>
              <li>Second-generation anticoagulant rodenticides are not consumer-legal in Canada — traps first; the Tomcat bromethalin disposable station is the main PMRA-registered consumer bait option.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">— BuzzSkito Pest Product Guides · independent Canadian research</p>
          </div>
          <SpecialistDisclosure pest="mice" />
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />
          <h2>Why Do Mice Get Into Canadian Houses Every Fall?</h2>
          <p>Because a Canadian house in October is the best real estate a mouse will ever see: stable warmth, no owls, and a pantry that never runs out. From September through November — as overnight temperatures slide toward 10°C and outdoor seed and insect food dries up — house mice and deer mice push indoors in a predictable entry wave. In southern Ontario the first scratching in the walls typically starts within a few weeks of Thanksgiving, and the same pattern repeats from Halifax to Victoria.</p>
          <p>Two facts about that wave shape the whole playbook. First, mice that get in do not leave in spring — a fall arrival is a permanent resident until you remove it. Second, the population compounds fast: one female produces 5–10 litters per year of 5–6 pups, and those pups breed at 6–8 weeks old. Two mice in October is 30 or more by January. Speed matters more than perfection — which is why the plan below runs every step at once.</p>

          <h2>How Do Mice Get In? (The 6 mm Gap Rule)</h2>
          <p>Through gaps you would swear were too small. A mouse&rsquo;s skull is the only rigid part of its body — if the head fits, the rest follows — and an adult house mouse fits through a gap of about <strong>6 mm, the width of a standard pencil</strong>. Walk your foundation with a pencil in hand: anywhere it slides in, a mouse can too. The classic Canadian entry points, roughly in order of frequency:</p>
          <ul>
            <li><strong>Under the garage door</strong> — a worn bottom seal leaves a 6–10 mm gap across the widest door in the house.</li>
            <li><strong>Utility penetrations</strong> — gas line, AC lineset, dryer vent, and cable entries are almost always oversized holes plugged with crumbling caulk or foam.</li>
            <li><strong>Exterior door thresholds</strong> — daylight under a back or side door is an open invitation all winter.</li>
            <li><strong>Brick weep vents</strong> — the drainage openings in brick veneer are mouse-width by design and need ventilated covers, never caulk.</li>
            <li><strong>Attached garages</strong> — once a mouse is in the garage, the gap under the interior door or along the sill plate finishes the trip.</li>
          </ul>
          <p>Mice also climb rough brick and stucco and jump about 30 cm, so soffit gaps and low roof intersections count too. The 6 mm rule is why exclusion, in step three, is measured with a pencil rather than an eyeball.</p>

          <h2>What Is the Fastest Way to Get Rid of Mice?</h2>
          <p>Run sanitation, trapping, exclusion, and monitoring <em>simultaneously</em> — not as an escalation ladder. Most DIY failures follow the same script: two traps catch two mice, the traps go quiet, everyone relaxes, and the droppings return with the next cold snap because the entry gap was never sealed. The four steps only work as a package:</p>
          <div className="not-prose rounded-xl border border-navy-100 overflow-hidden bg-white shadow-sm my-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Step</th>
                  <th className="px-4 py-3 text-left">What it does</th>
                  <th className="px-4 py-3 text-left">Timeline</th>
                  <th className="px-4 py-3 text-left">If you skip it</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { step: '1. Sanitation', does: 'Removes competing food so trap bait wins', time: 'Same day', skip: 'Well-fed mice ignore your traps for weeks' },
                  { step: '2. Mass trapping', does: '12+ snap traps on walls kill the resident population', time: 'Nights 1–10', skip: 'Population out-breeds any slower method' },
                  { step: '3. Exclusion', does: 'Steel wool + caulk + door sweeps close every 6 mm gap', time: 'First week', skip: 'New mice restock the house every fall' },
                  { step: '4. Monitoring', does: 'Sentinel traps + flour patches confirm zero activity', time: '7–10 quiet nights', skip: 'Survivors rebuild unnoticed inside walls' },
                ].map(({ step, does, time, skip }) => (
                  <tr key={step} className="border-b border-navy-50 last:border-0 align-top">
                    <td className="px-4 py-3 font-bold text-brand-800 whitespace-nowrap">{step}</td>
                    <td className="px-4 py-3 text-gray-700">{does}</td>
                    <td className="px-4 py-3 text-gray-700 whitespace-nowrap">{time}</td>
                    <td className="px-4 py-3 text-xs text-gray-600">{skip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>Done together, a typical Canadian house problem is over in 1–3 weeks. Each step gets its own section below.</p>

          <h2>Step 1 — How Do You Cut Off Their Food? (The Kitchen Sanitation Triangle)</h2>
          <p>Deny the three things a mouse needs within its 3–9 metre foraging range: <strong>food, water, and harbourage</strong>. This is the sanitation triangle, and you can close most of it in an afternoon:</p>
          <ul>
            <li><strong>Food:</strong> Move everything in gnawable packaging — cereal, rice, flour, pet kibble, birdseed — into glass, metal, or hard plastic containers. Vacuum the crumb zones behind the stove and fridge, and lift pet food bowls overnight; kibble left out is one of the most common mouse food sources in Canadian homes.</li>
            <li><strong>Water:</strong> Mice need very little free water, so small sources matter — fix dripping taps, wipe sinks dry at night, address condensation around the hot water tank.</li>
            <li><strong>Harbourage:</strong> Get stored boxes off the floor onto shelving, break down loose cardboard (mice shred it for nesting), and open up cluttered corners in the basement and garage.</li>
          </ul>
          <p>Be clear about what sanitation does: it almost never evicts an established population on its own, but it converts your trap line into the only restaurant in town. A pea-sized smear of peanut butter is dramatically more attractive in a kitchen with nothing else on offer.</p>

          <h2>Step 2 — How Many Traps, Where, and Which Ones?</h2>
          <p><strong>Twelve or more traps, all deployed on night one.</strong> This is the most research-backed rule in rodent control: field studies of trap lines consistently show the first night catches more mice than any night after, because mice investigate new objects quickly and then turn neophobic — trap-shy. Under-trapping is the number-one reason DIY control fails. Twelve traps for three nights beats two traps for three weeks, every time.</p>
          <p>Placement rules, all grounded in how mice actually move:</p>
          <ul>
            <li><strong>Against walls, always.</strong> Mice are thigmotactic — they run with their whiskers brushing a vertical surface and almost never cross open floor. Set traps perpendicular to the wall, trigger end touching the baseboard.</li>
            <li><strong>Every 2–3 metres</strong> along walls with droppings, doubled up (triggers facing opposite directions) behind the stove, under the sink, and at corners.</li>
            <li><strong>Within 3–9 metres of the evidence.</strong> Mice forage close to the nest — the droppings map the territory, so cluster traps there.</li>
            <li><strong>Pea-sized peanut butter, pressed into the trigger.</strong> A big glob lets a mouse lick from the edge and leave. In fall and winter, a cotton ball tied to the trigger exploits nesting drive instead.</li>
            <li><strong>Gloves on, then leave them alone.</strong> Keep human scent off the traps and skip the hourly flashlight checks.</li>
          </ul>
          <p>On trap choice: the classic Victor M325 wood snap trap remains the workhorse because it is cheap enough to deploy by the dozen — our <Link href="/blog/best-mouse-trap-canada">best mouse trap in Canada comparison</Link> covers snap vs electronic vs catch-and-release in depth. For no-see, no-touch disposal in the kitchen, the Victor M250S electronic trap kills in under 5 seconds and handles up to 100 kills per set of AA batteries; we tore down its real-world reliability in our <Link href="/blog/victor-electronic-mouse-trap-review-canada">Victor electronic trap review</Link>. And if droppings are over 1 cm long, stop — you have rats, mouse traps physically cannot kill them, and you want the <Link href="/blog/best-rat-trap-canada">best rat trap guide</Link> instead.</p>

          <TopPick tag={AMZ_TAG}
            label="Our Top Pick for the trap line"
            name="Victor M325 Wood Snap Trap"
            blurb="The workhorse of DIY mouse control: cheap enough to buy by the dozen so you can flood night one with 12+ traps, with a fast, reliable kill bar. Bait a pea-sized smear of peanut butter, set it trigger-to-baseboard, and let the first-night catch do the heavy lifting."
            search="victor mouse trap 4 pack"
            score={8.7}
            pros={['Cheap enough to deploy a dozen at once', 'Fast, decisive kill bar', 'No batteries, no setup — reusable season after season']}
            cons={['Must be handled and re-set by hand', 'Too small to kill rats — check dropping size first']}
          />

          <AffiliateDisclosure />
          <p className="not-prose text-sm text-gray-600 mb-1">Check current Canadian availability of the trap-line staples:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="victor mouse trap 4 pack">Victor M325 snap traps →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="victor electronic mouse trap">Victor M250S electronic →</BuyLink>
          </div>

          <h2>Step 3 — How Do You Seal Mice Out for Good? (Exclusion)</h2>
          <p>Trapping is half the job; exclusion is the half that makes it permanent. Until every opening is metal-blocked, you are running a catch-and-refill program against an infinite outdoor supply. Work the pencil test around the full exterior — foundation line, doors, utility penetrations, vents — and close what you find with materials mice cannot chew:</p>
          <ul>
            <li><strong>Coarse stainless steel wool or copper mesh</strong>, packed tightly into gaps, then sealed over with exterior caulk so it cannot be pulled out. Mice gnaw through wood, plastic, and foam — but not bunched steel fibres.</li>
            <li><strong>Door sweeps and new bottom seals</strong> on exterior and garage doors. If you can see daylight under a door, fit a sweep the same week — the garage door seal alone closes the widest entry gap most houses have.</li>
            <li><strong>6 mm galvanized hardware cloth</strong> screwed over larger openings — damaged vents, sill-plate gaps, openings under decks.</li>
            <li><strong>Ventilated weep-vent covers</strong> for brick veneer — never caulk weep holes shut; they are drainage.</li>
          </ul>
          <p><strong>The one material warning:</strong> expanding foam by itself is not exclusion — mice chew through cured foam almost recreationally. Foam is only a draft layer over a steel wool or mesh core. Full seasonal timing and a room-by-room checklist are in our companion guide to <Link href="/blog/how-to-keep-mice-out-of-your-house-winter">keeping mice out of your house over winter</Link>.</p>
          <p className="not-prose text-sm text-gray-600 mb-1">The two exclusion materials that do most of the work:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="steel wool mice">Coarse steel wool for gaps →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="door sweep draft stopper">Door sweeps →</BuyLink>
          </div>

          <h2>Step 4 — How Do You Know the Mice Are Actually Gone?</h2>
          <p>Track evidence, not gut feeling. You are done when all of the following hold at once:</p>
          <ul>
            <li><strong>7–10 consecutive nights with zero catches</strong> on a still-baited trap line.</li>
            <li><strong>No fresh droppings</strong> on floors you swept clean — fresh ones are dark and glossy, old ones grey and crumbly. An active mouse leaves 50–75 per day, so a clean floor staying clean is a strong signal.</li>
            <li><strong>A flour patch stays printless.</strong> Dust a light band of flour across a suspected runway at night; footprints will tell you in one morning what a week of guessing cannot.</li>
            <li><strong>No new gnaw marks, no night scratching</strong> in walls and ceilings.</li>
          </ul>
          <p>Then leave 2–3 baited sentinel traps in place permanently — behind the stove, in the garage, by the furnace. They cost nothing to maintain and convert next fall&rsquo;s first scout from the start of an infestation into a one-mouse event. When cleaning up droppings afterward, wet-clean with disinfectant and gloves rather than sweeping dry — details in the FAQ below.</p>

          <h2>Should You Use Poison for Mice in Canada?</h2>
          <p>Traps first — and in most Canadian homes, traps only. The second-generation anticoagulant rodenticides (brodifacoum, bromadiolone, difethialone) that dominate American advice are <strong>not sold as domestic-class products in Canada</strong>: Health Canada&rsquo;s PMRA restricts them to commercial applicators, and British Columbia has permanently banned most SGAR uses since 2023 over secondary poisoning of owls and hawks. Any US site telling Canadians to &ldquo;just grab d-CON pellets&rdquo; is recommending products you cannot legally buy here — we map the whole legal landscape in <Link href="/blog/rat-poison-canada-what-is-legal">what rat poison is actually legal in Canada</Link>.</p>
          <p>The main PMRA-registered consumer option is the <strong>Tomcat bromethalin disposable bait station</strong> — a sealed, tamper-resistant unit with a legitimate role for exterior pressure and inaccessible voids, covered in our <Link href="/blog/mouse-bait-station-canada">mouse bait station guide</Link>. But even where bait is legal, it is the wrong first move indoors: poisoned mice routinely die inside wall voids, where the smell lasts 2–3 weeks. Traps give you a body count — the only honest metric of progress — with zero secondary risk to pets and raptors.</p>

          <h2>What About Ultrasonic Repellers, Peppermint Oil, and Other Shortcuts?</h2>
          <p>Skip all of them. Plug-in ultrasonic repellers are the most heavily marketed &ldquo;effortless&rdquo; option in Canada, and the controlled evidence is uniformly poor: mice habituate to the sound within days, ultrasound does not pass through walls or furniture, and regulators — including the US FTC, repeatedly since 2001 — have challenged manufacturers over unsupported claims. We went through the published studies one by one in our <Link href="/blog/ultrasonic-pest-repellers-do-they-work">ultrasonic repeller evidence review</Link>. Peppermint oil and mothballs fail the same way: mice nest happily centimetres from strong odours, and scattering mothballs for rodents is an off-label pesticide use in Canada anyway. Every dollar spent on repellents is a dollar not spent on the traps and steel wool that actually end the problem.</p>

          <h2>When Should You Call a Professional?</h2>
          <p>DIY wins most Canadian mouse problems, but escalate when the evidence says so: fresh droppings or ongoing catches after 3–4 weeks of a properly run 12-trap line with sealed gaps, entry points you cannot find (common with complex brick veneer and attached garages), activity concentrated in wall voids you cannot reach, or droppings over 1 cm long — which means rats and a different toolkit. Licensed operators bring commercial-class rodenticides and structural exclusion experience. For what that service typically costs across Canada, see our <Link href="/pest-control-cost-canada">pest control cost guide</Link>.</p>

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

          <h2>Related Rodent Guides</h2>
          <ul>
            <li><Link href="/blog/best-mouse-trap-canada">Best Mouse Trap Canada — Snap vs Electronic vs Catch-and-Release</Link></li>
            <li><Link href="/blog/victor-electronic-mouse-trap-review-canada">Victor Electronic Mouse Trap Review — Canada</Link></li>
            <li><Link href="/blog/how-to-keep-mice-out-of-your-house-winter">How to Keep Mice Out of Your House This Winter</Link></li>
            <li><Link href="/blog/mouse-bait-station-canada">Mouse Bait Stations in Canada — What&rsquo;s Legal and When to Use Them</Link></li>
            <li><Link href="/blog/rat-poison-canada-what-is-legal">Rat Poison in Canada — What Is Actually Legal</Link></li>
            <li><Link href="/blog/best-rat-trap-canada">Best Rat Trap Canada — When Mouse Traps Aren&rsquo;t Enough</Link></li>
            <li><Link href="/blog/ultrasonic-pest-repellers-do-they-work">Ultrasonic Pest Repellers — Do They Actually Work?</Link></li>
          </ul>

          <div className="not-prose mt-10 rounded-xl border border-navy-100 bg-brand-50 px-5 py-4">
            <p className="text-sm text-brand-900">
              <Link href="/pest-product-guides" className="font-bold text-emerald-700 hover:text-emerald-800 underline">More independent Canadian pest product research →</Link>
            </p>
          </div>
        </div>
      </article>
    </>
  )
}
