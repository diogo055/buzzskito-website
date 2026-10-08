import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import BuyLink from '@/components/BuyLink'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import SpecialistDisclosure from '@/components/SpecialistDisclosure'
import FreshnessStamp from '@/components/FreshnessStamp'
import AuthorByline from '@/components/AuthorByline'
import TopPick from '@/components/TopPick'
import StickyBuyBar from '@/components/StickyBuyBar'
import AdjacentPestCTA from '@/components/AdjacentPestCTA'
import { tagForSlug } from '@/lib/amazon-clusters'

const SLUG = 'how-to-get-rid-of-mice-canada'
const DATE = '2026-07-16'
const UPDATED = '2026-07-16'
const TITLE = 'How to Get Rid of Mice in Canada 2026 — The 4-Step Plan That Actually Works'
const META_TITLE = 'How to Get Rid of Mice: 4 Steps (US & Canada)'

const FAQS = [
  {
    question: 'How do you get rid of mice fast in Canada?',
    answer: 'Run all four steps at once: strip the kitchen of accessible food the same day, deploy at least 12 snap traps along walls on night one (trap-line research shows the first night out-catches every night after), seal every exterior gap of 6 mm or more with coarse steel wool backed by caulk, and keep sentinel traps down for 7–10 quiet nights. Homes that trap without sealing re-catch new mice every fall; doing both at once is what ends the cycle instead of repeating it each autumn.',
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
  {
    question: 'What is the best way to get rid of mice in the United States?',
    answer: 'The CDC’s three-step sequence: seal up, trap up, clean up. Seal holes as small as 1/4 inch with steel wool held in place by caulk, set traditional snap traps baited with a small amount of chunky peanut butter with the baited end against the wall, and wet-clean droppings with disinfectant rather than sweeping. The CDC advises against glue traps and live traps, and says poison or bait stations are only for infestations that persist.',
  },
  {
    question: 'Can you still buy mouse poison pellets in the US?',
    answer: 'Not as a consumer product. Under EPA rules, rodenticides sold to consumers must come with a ready-to-use bait station and bait in block or paste form, and pelleted bait is no longer permitted in consumer products. The EPA says the four second-generation anticoagulants (brodifacoum, bromadiolone, difenacoum and difethialone) are registered only for the commercial and structural pest control markets. Some states add their own limits, so check with your state pesticide agency and follow the label.',
  },
  {
    question: 'Which mice carry hantavirus in the United States?',
    answer: 'According to the CDC, the most common hantavirus that causes hantavirus pulmonary syndrome in the United States is spread by the deer mouse. CDC case data show 94 percent of reported US cases occurred west of the Mississippi River. People are exposed through rodent urine, droppings and saliva, which is why the CDC says never to sweep or vacuum them. Anyone who suspects hantavirus disease should see a physician immediately and mention the rodent exposure.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'Get rid of mice in four steps: cut off food, trap heavily on night one, seal every 1/4-inch (6 mm) gap, then confirm. US and Canadian poison rules covered.',
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
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">To get rid of mice in Canada, run four steps simultaneously: strip accessible food from the kitchen the same day, deploy 12 or more snap traps along walls on night one (the Victor M325 is our standing pick), seal every exterior gap of 6 mm or more with coarse steel wool backed by caulk plus door sweeps, and keep sentinel traps down until you log 7–10 consecutive quiet nights. Trapping without sealing just restocks the house every fall; done together, they remove the animals already inside and close the openings that let the next wave in.</p>
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
          <p>Run sanitation, trapping, exclusion, and monitoring <em>simultaneously</em> — not as an escalation ladder. Most DIY failures follow the same script: two traps catch two mice, the traps go quiet, everyone relaxes, and the droppings return with the next cold snap because the entry gap was never sealed. The four steps only work as a package: Repellents are conspicuously absent from that list, and deliberately so: <Link href="/blog/mouse-repellent-canada" className="text-brand-700 underline">what actually repels a mouse versus what merely sells well</Link> sets out which shelf products have any evidence behind them at all.</p>
          <div className="not-prose rounded-xl border border-navy-100 overflow-x-auto bg-white shadow-sm my-6 overflow-x-auto">
            <table className="min-w-[560px] w-full text-sm">
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
          <p>Done together, the four steps close out the problem instead of leaving it to repeat each autumn. Each step gets its own section below.</p>

          <h2>Step 1 — How Do You Cut Off Their Food? (The Kitchen Sanitation Triangle)</h2>
          <p>Deny the three things a mouse needs within its 3–9 metre foraging range: <strong>food, water, and harbourage</strong>. This is the sanitation triangle, and you can close most of it in an afternoon:</p>
          <ul>
            <li><strong>Food:</strong> Move everything in gnawable packaging — cereal, rice, flour, pet kibble, birdseed — into glass, metal, or hard plastic containers. Vacuum the crumb zones behind the stove and fridge, and lift pet food bowls overnight; kibble left out is a commonly reported draw in Canadian homes, and it is a far easier meal than anything a mouse has to gnaw its way into.</li>
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

          <AffiliateDisclosure />
          <TopPick tag={AMZ_TAG}
            label="Our Top Pick for the trap line"
            name="Victor M325 Wood Snap Trap"
            blurb="The workhorse of DIY mouse control: cheap enough to buy by the dozen so you can flood night one with 12+ traps, with a fast, reliable kill bar. Bait a pea-sized smear of peanut butter, set it trigger-to-baseboard, and let the first-night catch do the heavy lifting."
            search="victor mouse trap 4 pack"
            score={8.7}
            pros={['Cheap enough to deploy a dozen at once', 'Fast, decisive kill bar', 'No batteries, no setup — reusable season after season']}
            cons={['Must be handled and re-set by hand', 'Too small to kill rats — check dropping size first']}
          />

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
          <p>Then leave 2–3 baited sentinel traps in place permanently — behind the stove, in the garage, by the furnace. They cost nothing to maintain and convert next fall&rsquo;s first scout from the start of an infestation into a one-mouse event. When cleaning up droppings afterward, wet-clean with disinfectant and gloves rather than sweeping dry — details in the FAQ below. Read them by the droppings as much as the catches: <Link href="/blog/what-does-mouse-poop-look-like-canada" className="text-brand-700 underline">fresh mouse droppings look different from old ones</Link>, and that difference is what tells you whether the problem is live or historic.</p>

          <h2>Should You Use Poison for Mice in Canada?</h2>
          <p>Traps first — and in most Canadian homes, traps only. The second-generation anticoagulant rodenticides (brodifacoum, bromadiolone, difethialone) that dominate American advice are <strong>not sold as domestic-class products in Canada</strong>: Health Canada&rsquo;s PMRA restricts them to commercial applicators, and British Columbia has permanently banned most SGAR uses since 2023 over secondary poisoning of owls and hawks. Any US site telling Canadians to &ldquo;just grab d-CON pellets&rdquo; is recommending products you cannot legally buy here — we map the whole legal landscape in <Link href="/blog/rat-poison-canada-what-is-legal">what rat poison is actually legal in Canada</Link>.</p>
          <p>The main PMRA-registered consumer option is the <strong>Tomcat bromethalin disposable bait station</strong> — a sealed, tamper-resistant unit with a legitimate role for exterior pressure and inaccessible voids, covered in our <Link href="/blog/mouse-bait-station-canada">mouse bait station guide</Link>. But even where bait is legal, it is the wrong first move indoors: poisoned mice routinely die inside wall voids, where the smell lasts 2–3 weeks. Traps give you a body count — the only honest metric of progress — with zero secondary risk to pets and raptors.</p>

          <h2>What About Ultrasonic Repellers, Peppermint Oil, and Other Shortcuts?</h2>
          <p>Skip all of them. Plug-in ultrasonic repellers are the most heavily marketed &ldquo;effortless&rdquo; option in Canada, and the controlled evidence is uniformly poor: mice habituate to the sound within days, ultrasound does not pass through walls or furniture, and regulators — including the US FTC, repeatedly since 2001 — have challenged manufacturers over unsupported claims. We went through the published studies one by one in our <Link href="/blog/ultrasonic-pest-repellers-do-they-work">ultrasonic repeller evidence review</Link>. Peppermint oil and mothballs fail the same way: mice nest happily centimetres from strong odours, and scattering mothballs for rodents is an off-label pesticide use in Canada anyway. Every dollar spent on repellents is a dollar not spent on the traps and steel wool that actually end the problem.</p>

          <h2>When Should You Call a Professional?</h2>
          <p>DIY wins most Canadian mouse problems, but escalate when the evidence says so: fresh droppings or ongoing catches after 3–4 weeks of a properly run 12-trap line with sealed gaps, entry points you cannot find (common with complex brick veneer and attached garages), activity concentrated in wall voids you cannot reach, or droppings over 1 cm long — which means rats and a different toolkit. Licensed operators bring commercial-class rodenticides and structural exclusion experience. For what that service typically costs across Canada, see our <Link href="/pest-control-cost-canada">pest control cost guide</Link>. One caveat on identification: if the animal is stocky with a blunt nose, small ears and a short tail, and the damage is outdoors in the lawn, it is not a mouse at all &mdash; <Link href="/blog/how-to-get-rid-of-voles-canada" className="text-brand-700 underline">vole versus mouse</Link> explains why that changes the entire approach.</p>

          <h2>How to Get Rid of Mice in the United States: What Is Different</h2>
          <p>The best way to get rid of mice in the United States is the three-part sequence the CDC publishes for homeowners: seal up the holes, trap up the mice already inside with snap traps, and clean up droppings and nests wet, with disinfectant instead of a broom. The sealing, snap trapping and wet cleanup match the plan this guide lays out for Canada; what changes for a US reader is the rodenticide law, the hantavirus picture west of the Mississippi, and the timing of the fall wave. The wider US picture, from species to cost, sits in the <Link href="/learn/mice">complete mouse control reference</Link>.</p>

          <h3>What Is the CDC&rsquo;s Seal Up, Trap Up, Clean Up Sequence?</h3>
          <p>It is three jobs: close the entry holes, kill the mice that are already indoors, and disinfect what they left behind. Each step comes with short, specific instructions:</p>
          <ul>
            <li><strong>Seal up.</strong> The <a href="https://www.cdc.gov/healthy-pets/rodent-control/seal-up.html" target="_blank" rel="noopener noreferrer">CDC&rsquo;s seal-up guidance</a> says a mouse can fit through a hole the width of a pencil, 1/4 inch across. It advises filling small holes with steel wool held in place with caulk, and repairing larger ones with lath screen, cement, hardware cloth or metal sheeting. It also tells homeowners to seal garages and outbuildings, not only the house. The guide to <Link href="/blog/steel-wool-for-mice">packing steel wool so mice cannot pull it out</Link> goes through the materials gap by gap.</li>
            <li><strong>Trap up.</strong> The <a href="https://www.cdc.gov/healthy-pets/rodent-control/trap-up.html" target="_blank" rel="noopener noreferrer">CDC&rsquo;s trapping page</a> recommends traditional snap traps, baited with a small amount of chunky peanut butter and set with the baited end against the wall so the trap forms a T with it. It advises against glue traps and live traps, because a frightened rodent may urinate and that can raise the chance of getting sick, and it reserves poison and bait stations for infestations that persist. The trade-offs between designs are laid out in the comparison of <Link href="/blog/mice-traps">mouse trap types and where to set them</Link>, and readers weighing the kindest option can start with <Link href="/blog/how-to-get-rid-of-mice-humanely">what humane mouse control means in practice</Link>.</li>
            <li><strong>Clean up.</strong> The <a href="https://www.cdc.gov/healthy-pets/rodent-control/clean-up.html" target="_blank" rel="noopener noreferrer">CDC&rsquo;s cleanup instructions</a> say not to sweep or vacuum droppings, urine or nesting material. Open doors and windows for 30 minutes first, put on rubber or plastic gloves, spray the mess until it is very wet with an EPA-registered disinfectant or a fresh bleach solution of 1.5 cups of household bleach in 1 gallon of water, let it soak for 5 minutes, and wipe it up with paper towels. For attics, wall voids, crawl spaces and vehicles, see the walkthrough of <Link href="/blog/mice-removal">mouse removal and cleanup by location</Link>.</li>
          </ul>

          <h3>Which Mouse Poisons Can US Consumers Buy?</h3>
          <p>Only bait sold with a ready-to-use bait station, in block or paste form. Under the <a href="https://www.epa.gov/rodenticides/restrictions-rodenticide-products" target="_blank" rel="noopener noreferrer">EPA&rsquo;s restrictions on rodenticide products</a>, pelleted bait is no longer permitted in products aimed at consumers, a refillable station may be packaged with up to one pound of bait, and consumer products are labeled for use indoors, or indoors and outdoors within 50 feet of buildings. The same page names bromethalin, chlorophacinone and diphacinone as active ingredients in consumer-use products.</p>
          <p>The four second-generation anticoagulants (brodifacoum, bromadiolone, difenacoum and difethialone) are no longer registered in consumer products; the EPA says they are registered only for the commercial and structural pest control markets. The agency&rsquo;s <a href="https://www.epa.gov/rodenticides/rodent-control-pesticide-safety-review" target="_blank" rel="noopener noreferrer">rodenticide safety review</a> traces these rules to a 2008 risk mitigation decision whose measures were meant to reduce risks to human health and to non-target animals. So the loose pellets and second-generation baits that older advice still mentions are no longer permitted in US consumer products either, which puts the US consumer rules closer to the Canadian ones described above than many readers expect.</p>
          <p>Bait stations are not all rated alike. The <a href="https://www.epa.gov/rodenticides/choosing-bait-station-product-household-use" target="_blank" rel="noopener noreferrer">EPA&rsquo;s guide to choosing a bait station</a> sorts them into four tiers. Tier 1 stations resist tampering by young children and dogs and are weather-resistant, so they may be used indoors and outdoors within 50 feet of buildings. Tier 2 stations resist children and dogs but are for indoor use only. Tier 3 stations resist young children only and belong indoors where pets have no access. Tier 4 stations have not been shown to be tamper-resistant and may be used only indoors where neither young children nor pets can reach them. Read and follow the label, which sets where and how each product may be used.</p>
          <p>States can go further than the federal rules. In California, the <a href="https://www.cdpr.ca.gov/cac-letter/chlorophacinone-and-warfarin-restricted-material-status-prohibitions-allowed-uses-and-questions-and-answers/" target="_blank" rel="noopener noreferrer">Department of Pesticide Regulation</a> reports that most uses of the first-generation anticoagulants chlorophacinone and warfarin have been prohibited since January 1, 2025, residential use included, so check with your state&rsquo;s pesticide agency before buying. On risk, the <a href="https://npic.orst.edu/factsheets/rodenticides.html" target="_blank" rel="noopener noreferrer">National Pesticide Information Center</a> notes that single-dose anticoagulants pose the greater danger to animals that eat poisoned rodents, advises keeping every rodenticide out of reach of children and pets in use and in storage, and gives the Poison Control Center number as 800-222-1222. Active ingredients, pet and wildlife risk, and what to do after an exposure are covered in the guide to <Link href="/blog/mice-poison">mouse poison rules and risks in the US</Link>.</p>

          <h3>Do Mice in the Western US Carry Hantavirus?</h3>
          <p>Deer mice can, and that is the main reason cleanup deserves extra care in the West. The <a href="https://www.cdc.gov/hantavirus/about/index.html" target="_blank" rel="noopener noreferrer">CDC&rsquo;s hantavirus overview</a> says the most common hantavirus that causes hantavirus pulmonary syndrome (HPS) in the United States is spread by the deer mouse, that people are infected through contact with rodent urine, droppings and saliva, and that symptoms usually begin 1 to 8 weeks after contact, starting with fatigue, fever and muscle aches. It reports that 38 percent of people who develop respiratory symptoms may die, and it advises anyone who suspects hantavirus disease to see a physician immediately and mention the possible rodent exposure.</p>
          <p>The geography is lopsided. The <a href="https://www.cdc.gov/hantavirus/data-research/cases/index.html" target="_blank" rel="noopener noreferrer">CDC&rsquo;s case data</a> count 890 reported cases of hantavirus disease in the United States from the start of surveillance in 1993 through the end of 2023, with 94 percent of them west of the Mississippi River. <a href="https://extension.usu.edu/pests/ipm/notes_nuisance/deer-mouse.php" target="_blank" rel="noopener noreferrer">Utah State University Extension</a> describes the deer mouse as brown to gray with a white belly, a rural animal of fields, pastures and vegetation around buildings that moves indoors when it gets cold. <a href="https://extension.arizona.edu/publication/hantavirus-and-disease-prevention" target="_blank" rel="noopener noreferrer">University of Arizona Cooperative Extension</a> adds that people are exposed by breathing contaminated dust after rodent droppings are disturbed or cleaned, and it flags unused buildings as one place that happens.</p>
          <p>For a cabin, shed or garage that has sat closed, that means the wet-cleaning method above, and the CDC notes that buildings with heavy infestations call for special precautions. Identification is covered in <Link href="/blog/deer-mice">how to tell a deer mouse from a house mouse</Link>, the wider cast of look-alikes in the guide to <Link href="/blog/types-of-mice">the types of mice found in US homes</Link>, and the loose everyday name in <Link href="/blog/field-mice">what people mean by field mice</Link>.</p>

          <h3>When Do Mice Move Indoors in Different Parts of the US?</h3>
          <p>When the nights turn cold, so the timing follows local weather and not a fixed calendar date. <a href="https://ipm.ucanr.edu/PMG/PESTNOTES/pn7483.html" target="_blank" rel="noopener noreferrer">University of California Integrated Pest Management</a> puts the trigger plainly: where house mice live outdoors, they frequently enter homes in autumn as nighttime temperatures become colder. Extension services in very different climates describe the same movement:</p>
          <ul>
            <li><strong>Northeast.</strong> <a href="https://extension.unh.edu/blog/2018/10/how-can-i-get-rid-mice-my-house" target="_blank" rel="noopener noreferrer">University of New Hampshire Extension</a>, in an October post, ties the influx to the arrival of cooler fall weather, when mice look for a protected place to spend the winter.</li>
            <li><strong>Ohio Valley.</strong> <a href="https://entomology.mgcafe.uky.edu/ef617" target="_blank" rel="noopener noreferrer">University of Kentucky Entomology</a> says homeowners are especially likely to notice mice in winter, after a fall migration indoors for warmth, food and shelter.</li>
            <li><strong>Deep South.</strong> <a href="https://extension.msstate.edu/blog/critter-the-month-house-mouse" target="_blank" rel="noopener noreferrer">Mississippi State University Extension</a> describes mice feeding outdoors on seeds, insects, plants and berries through the warmer months, then seeking heat and food as cooler weather arrives.</li>
            <li><strong>Interior West.</strong> Utah State University Extension, cited above, says deer mice move indoors when it gets cold outside.</li>
          </ul>
          <p>None of these sources publishes a national calendar, so treat the first run of cold nights where you live as the deadline for sealing, not a month on the page. One point holds in every region: UC IPM notes that house mice with plentiful, stable resources can reproduce year-round, so a heated house has no off-season once mice are inside. Why they come in when they do is tied to food and daily rhythm, covered in <Link href="/blog/what-do-mice-eat">what mice eat indoors and out</Link> and <Link href="/blog/are-mice-nocturnal">the hours when mice are active</Link>.</p>

          <h3>US Measurements for the Numbers in This Guide</h3>
          <p>Every metric figure above converts to a familiar US one, and the key ones match what US sources publish. The CDC gives the pencil-width gap as 1/4 inch, and UC IPM reports that house mice seldom venture more than 30 feet from the nest, can jump up to 12 inches from the floor, and are best trapped with traps spaced no more than about 10 feet apart.</p>
          <div className="not-prose my-6 overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm min-w-[560px]">
              <thead className="bg-brand-50">
                <tr>
                  <th className="px-3 py-2 text-left">Metric figure in this guide</th>
                  <th className="px-3 py-2 text-left">US equivalent</th>
                  <th className="px-3 py-2 text-left">What it measures</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['6 mm', 'About 1/4 inch', 'The gap a mouse can squeeze through, and the mesh size of the hardware cloth'],
                  ['6–10 mm', 'About 1/4 to 3/8 inch', 'The gap under a worn garage door seal'],
                  ['1 cm', 'About 3/8 inch', 'Dropping length above which to suspect rats'],
                  ['30 cm', 'About 12 inches', 'How high a mouse can jump'],
                  ['2–3 m', 'About 6.5 to 10 feet', 'Spacing between traps along a wall'],
                  ['3–9 m', 'About 10 to 30 feet', 'How far a mouse forages from its nest'],
                  ['10°C', '50°F', 'Overnight temperature that marks the fall entry wave'],
                ].map(([metric, usUnit, measures]) => (
                  <tr key={metric} className="border-t border-gray-100 align-top">
                    <td className="px-3 py-2 font-semibold text-brand-800">{metric}</td>
                    <td className="px-3 py-2 text-gray-700">{usUnit}</td>
                    <td className="px-3 py-2 text-gray-700">{measures}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>How those jumping and squeezing numbers play out on brick, siding, pipes and wires is the subject of <Link href="/blog/can-mice-climb-walls">how mice climb walls and reach attics</Link>.</p>

          <h2>Where to Go Next on Mouse Control: Breeding, Repellents and Hiring Help</h2>
          <p>Start with the <Link href="/learn/mice">mouse control hub</Link>, which gathers species, health risks, the control sequence and cost in one place and points to each detailed guide.</p>
          <p>If you found a nest, <Link href="/blog/baby-mice">what baby mice look like week by week</Link> helps you judge how long the mice have been breeding, and <Link href="/blog/how-long-do-mice-live">how long mice live and how long they last without food or water</Link> explains why waiting a problem out rarely ends it.</p>
          <p>Scent products are the most common detour. The overview of <Link href="/blog/mice-repellent">mouse repellents by type and the evidence for each</Link> is the place to begin, with separate pages on <Link href="/blog/peppermint-oil-for-mice">whether peppermint oil does anything for mice</Link>, <Link href="/blog/what-smells-do-mice-hate">the smells mice are said to hate</Link>, <Link href="/blog/do-mothballs-keep-mice-away">why mothballs are the wrong tool for mice</Link> and <Link href="/blog/vamoose-for-mice">what the Vamoose repellent is and what its maker claims</Link>.</p>
          <p>And if traps and sealing have not ended it, <Link href="/blog/mice-exterminator">what a mouse exterminator does and how to check a license in your state</Link> sets out what to expect before you call one.</p>

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

        <StickyBuyBar tag={AMZ_TAG} name="Victor M325 Wood Snap Trap" search="victor mouse trap 4 pack" label="Best trap" />
        <AdjacentPestCTA pest="rodents" />
      </article>
    </>
  )
}
