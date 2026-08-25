import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import BuyLink from '@/components/BuyLink'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import SpecialistDisclosure from '@/components/SpecialistDisclosure'
import AwardRow from '@/components/AwardRow'
import StickyBuyBar from '@/components/StickyBuyBar'
import FreshnessStamp from '@/components/FreshnessStamp'
import AuthorByline from '@/components/AuthorByline'
import CTASection from '@/components/CTASection'
import { tagForSlug } from '@/lib/amazon-clusters'

const SLUG = 'how-to-get-rid-of-centipedes-canada'
const DATE = '2026-07-27'
const UPDATED = '2026-07-27'
// H1 keeps the long descriptive form. SERP title is trimmed to 44 chars so it
// survives Google's ~60-char cap once the " | BuzzSkito" template (12 chars) is
// appended. Head terms: "centipede" (18K/mo CA) + "house centipede" (12K/mo CA).
const TITLE = 'How to Get Rid of House Centipedes in Canada — Kill the Prey, Not the Predator'
const META_TITLE = 'Get Rid of House Centipedes in Canada (2026)'

const FAQS = [
  {
    question: 'How do I get rid of house centipedes permanently?',
    answer: 'Remove the two things they need: humid harbourage and prey. House centipedes have no waxy waterproofing layer on their cuticle, so they dry out fast and can only live where the air stays damp — hold a basement at 45–50% relative humidity with a properly sized dehumidifier and you have made most of your house uninhabitable for them. Then starve them: centipedes are predators, so a persistent population means a persistent population of silverfish, cockroach nymphs, spiders, ants, drain flies, or moth larvae feeding them. Fix the moisture, sort out the prey insect, seal the entry gaps at the foundation and around basement windows and floor drains, and the centipedes leave on their own. Spraying alone fails because it kills the individuals you can see while leaving the damp void and the food supply completely intact.',
  },
  {
    question: 'Are house centipedes dangerous to humans?',
    answer: 'No. Scutigera coleoptrata is harmless to people and pets in any practical sense. They have modified front legs (forcipules) that inject venom into prey, and a large adult can technically pinch a human, but bites are genuinely rare because their instinct is to flee, and their forcipules often cannot break adult human skin. When a bite does happen it is usually described as similar to a bee sting — brief pain, local redness, resolving on its own. House centipedes do not transmit disease, do not chew wood or wiring, do not eat your food or your books, and do not infest bedding. They are startling, and that is close to the whole of the harm.',
  },
  {
    question: 'Why do I suddenly have house centipedes in my basement?',
    answer: 'Almost always a moisture change plus a food source. A damp spell, a failed sump pump, a slow leak under the laundry sink, a dried-out floor-drain trap, or a stretch of humid GTA August weather pushes basement relative humidity into the 60–80% range, which is exactly what a centipede needs. At the same time, whatever they eat — silverfish, cockroach nymphs, spiders, ants, drain flies, carpet-beetle and moth larvae — has been building up unnoticed. The centipedes are the visible symptom of a population you never saw. That is why the useful reaction to a sudden centipede appearance is a humidity reading and a week of glue-board monitoring, not a can of spray.',
  },
  {
    question: 'Do house centipedes eat other bugs?',
    answer: 'Yes, and that is the single most important fact on this page. House centipedes are active nocturnal predators that hunt silverfish, firebrats, cockroach nymphs, spiders, ants, moth and carpet-beetle larvae, drain flies, and other soft-bodied insects — including, in infested homes, bed bugs. An individual centipede running your baseboards at night is doing unpaid pest control. This is why exterminating them as a first move is backwards: you remove a predator while leaving its prey to multiply, and the underlying insect problem gets worse, not better. Treat a centipede sighting as free intelligence that something else is living in your house.',
  },
  {
    question: 'What humidity level do house centipedes need?',
    answer: 'They need consistently damp harbourage, which in practice means anywhere holding above roughly 60% relative humidity — damp basements, crawl spaces, under bathroom vanities, behind laundry tubs, inside sump pits, under mulch and landscape timbers outdoors. The practical control target for a Canadian home is 45–50% RH in summer, verified with an inexpensive hygrometer placed away from the dehumidifier itself. That sits at the upper end of the 30–50% summer indoor range Health Canada publishes in its residential indoor air quality guidance on mould, so the same machine that evicts centipedes is doing several other jobs at the same time. Below 50% RH, both the centipedes and most of their prey run out of habitat.',
  },
  {
    question: 'Does bug spray kill house centipedes?',
    answer: 'A direct contact spray will kill the centipede you hit, but residual perimeter sprays are unreliable against them and never solve the problem. Two reasons. First, physics: centipedes run on fifteen pairs of long legs that hold the body well clear of the treated surface, so they pick up far less residue than a flat-bodied insect crossing the same band — the same reason residual barriers underperform against long-legged spiders. Second, and more important, the breeding harbourage is in wall voids, under the slab edge, inside the sump pit and beneath the mulch outside, and the prey population that draws them in is untouched by any of it. Chemical-first centipede control is the definition of treating the symptom.',
  },
  {
    question: 'What is the difference between a house centipede and a millipede?',
    answer: 'Legs, speed, and behaviour. A house centipede has one pair of long, delicate legs per body segment — fifteen pairs on an adult — moves in fast bursts across walls and floors, and is a predator. A millipede has two pairs of short legs per segment, a rounded cylindrical body, moves slowly, curls into a spiral when disturbed, and eats decaying plant matter rather than insects. Millipedes in a Canadian home are almost always accidental invaders from damp leaf litter or mulch against the foundation, usually in wet spring or fall weather, and they die indoors within days because it is too dry for them. Both point at the same underlying issue: moisture at the foundation.',
  },
  {
    question: 'Do house centipedes live outside in Canada?',
    answer: 'They can, but Canadian winters push them indoors. Scutigera coleoptrata is a Mediterranean species that spread across North America, and in our climate it is overwhelmingly an indoor animal — heated buildings are what let it survive here year-round. In summer it will also use damp outdoor harbourage right against the house: mulch beds, leaf litter, stacked firewood, landscape timbers, flagstone, window wells, and the gap under a deck. That outdoor reservoir matters because it is the source of the autumn migration indoors. Pulling mulch back from the foundation and clearing leaf litter and stored wood off the wall does more for the fall centipede season than spraying the perimeter does, because it removes the reservoir rather than treating the surface it sits on.',
  },
  {
    question: 'Do sticky traps work for centipedes?',
    answer: 'Yes — but use them as instruments first and control second. Flat glue boards laid tight against basement walls, behind the furnace, under the laundry tub, beside the sump pit, and behind bathroom vanities will catch centipedes, because centipedes hunt along wall-floor junctions at night. Their real value is the rest of the catch: the silverfish, roach nymphs, ants, spiders, and moth larvae on the same board tell you what has been feeding the centipedes, which is the actual problem to fix. Boards also give you a trend line, so you can tell whether the dehumidifier is working instead of guessing from sightings. What they will not do is clear an infestation on their own.',
  },
  {
    question: 'Do ultrasonic pest repellers get rid of centipedes?',
    answer: 'No. Plug-in ultrasonic devices have failed repeatedly against household pests in controlled testing, and there is no plausible mechanism by which an ultrasonic tone drives a centipede out of a damp wall void it needs to survive in. The same applies to the wider category of shortcut fixes marketed for centipedes: peppermint or tea-tree sprays, cayenne, cedar oil, and coffee grounds do not empty a harbourage; total-release foggers coat open surfaces where centipedes are not and drive survivors deeper into voids. If a product promises to solve a moisture-driven predator problem without touching the moisture or the prey, it is selling the feeling of doing something.',
  },
  {
    question: 'Are US centipede sprays legal to use in Canada?',
    answer: 'Not necessarily, and the label is the test. Under the Pest Control Products Act, conventional insecticides sold or used in Canada must be registered with Health Canada’s Pest Management Regulatory Agency (PMRA) and carry a Canadian PCP registration number on the label. (A narrow list of minimum-risk products — mostly certain essential-oil formulations — is exempt from registration and sells here legally without a PCP number; that exemption is about paperwork, not about whether the product works.) A great many of the perimeter and "home defense" insecticides that dominate American centipede advice are US EPA-registered products with no Canadian counterpart, and marketplace listings routinely blur that line for Canadian buyers. Before buying any conventional insecticide online, zoom the label photo and look for a PCP registration number; if there is not one, you have no Canadian directions standing behind how you use it. In practice you do not need it — a dehumidifier, glue boards, and an afternoon of sealing do more here than any of it, because they take away the damp harbourage and the prey rather than treating a surface the centipede barely touches.',
  },
  {
    question: 'How long do house centipedes live?',
    answer: 'Much longer than people assume — commonly reported at three years or more, which is extraordinary for something the size of a house centipede and explains why the same handful can haunt a basement season after season. They also develop unusually: hatchlings emerge with four pairs of legs and add pairs at each moult until they reach the adult fifteen, so the small, short-legged "baby centipedes" people find in bathtubs are the same species, not a different one. The long lifespan is a practical argument against wait-them-out strategies and in favour of changing the environment: an animal that lives for years in your wall void is not going to be outlasted.',
  },
  {
    question: 'Why do I keep finding centipedes in my bathtub or sink?',
    answer: 'Not because they came up the drain — because they fell in and cannot climb out. Centipedes hunt at night across bathroom floors and vanity voids, where humidity is highest, and a smooth porcelain or acrylic tub is a pit trap: the fine claws that let them sprint across drywall get no purchase on a glazed surface. It is one of the most useful diagnostic signs in the house. Repeated tub or sink finds mean the bathroom is running humid, so run the exhaust fan during every shower and for twenty minutes after, check for a weeping trap under the vanity, and put a hygrometer in the room. Fix the bathroom humidity and the tub finds stop.',
  },
  {
    question: 'Should I kill house centipedes or leave them alone?',
    answer: 'If you can tolerate them, leaving them is genuinely the better pest-control decision — they are harmless, they eat insects that are not harmless, and one or two in a basement is a sign the house is doing its own housekeeping. The honest answer for most households, though, is that nobody wants to share a bathroom with one, and that is a legitimate reason to act. The distinction that matters: act on the environment, not on the animal. Dehumidify, seal, and eliminate the prey and the centipedes leave permanently. Squash the ones you see and you keep the damp void, keep the insects, and keep meeting new centipedes.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description:
    'How to get rid of house centipedes in Canada: they are harmless predators, so the real fix is drying the basement to 45-50% RH and killing their prey.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug('how-to-get-rid-of-centipedes-canada')

export default function HowToGetRidOfCentipedesCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Independent Canadian guide to house centipedes: identification, why they are predators worth understanding before you kill them, the basement humidity mechanism, dehumidifier sizing, exclusion at gaps, drains and weep holes, glue-board monitoring, and why chemical-first control fails.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'How to Get Rid of House Centipedes in Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Get Rid of House Centipedes</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">House centipedes are harmless predators that eat the pests you actually have a problem with. That makes them the most useful pest in your house &mdash; and the one worth reading about before you reach for a spray can.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <AffiliateDisclosure />
      <StickyBuyBar tag={AMZ_TAG} name="Energy Star basement dehumidifier (50-pint class)" search="50 pint dehumidifier basement energy star" label="The actual fix" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">To get rid of house centipedes in Canada, take away the damp and take away the prey. Centipedes have no waterproof cuticle, so they can only live where humidity stays high &mdash; hold your basement at 45&ndash;50% RH with a dehumidifier and most of the house stops being habitat. Then find what they have been eating: lay glue boards for a week and read the catch, because a persistent centipede population nearly always means a persistent silverfish, roach, ant, spider, or fly-larvae population underneath it. Finish with exclusion &mdash; seal foundation cracks, screen weep holes, refill dried-out floor-drain traps, cover the sump pit, and pull mulch back from the wall. Spray is not where the money should go.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>House centipedes are <strong>harmless to people and pets</strong> &mdash; no disease, no damage to the building, bites are rare and minor.</li>
              <li>They are <strong>predators</strong>: silverfish, cockroach nymphs, spiders, ants, drain flies, moth and carpet-beetle larvae, even bed bugs.</li>
              <li>Seeing them regularly is a <strong>diagnostic</strong>: you have another insect population, and a moisture problem feeding both.</li>
              <li>The one purchase that ends it is a properly sized <strong>dehumidifier</strong> held at 45&ndash;50% RH &mdash; not an insecticide.</li>
              <li><strong>Residual sprays underperform</strong>: fifteen pairs of long legs hold the body clear of the treated band, and the harbourage is in voids.</li>
              <li>Repeated <strong>bathtub finds</strong> mean the bathroom is running humid &mdash; they fall in and cannot climb the glaze.</li>
              <li>Conventional insecticides sold in Canada must carry a <strong>PCP registration number</strong> &mdash; many US &ldquo;home defense&rdquo; products do not.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito Pest Product Guides &middot; independent Canadian research</p>
          </div>
          <div className="not-prose rounded-xl border-l-4 border-emerald-500 bg-emerald-50/60 p-5 mb-6">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Already decided to buy something?</p>
            <p className="text-sm text-gray-800 leading-relaxed">
              This page is the diagnosis and the plan &mdash; what a house centipede is, why it is in your basement, and the order the work goes in. The purchase side is a separate job: <Link href="/blog/best-centipede-killer-canada" className="text-emerald-700 underline font-semibold">what to buy for centipedes in Canada</Link> covers the buying order, how to size and spec the dehumidifier, which registered diatomaceous earth carries a PCP number, how many glue boards you actually need, and the two label checks to run before you add anything to a cart.
            </p>
          </div>

          <SpecialistDisclosure pest="centipedes" />
        </div>
      </section>

      <section className="bg-white px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <AwardRow tag={AMZ_TAG}
            heading="Our Picks — The House Centipede Kit (None of These Are Insecticides)"
            awards={[
              {
                badge: 'Best Overall',
                name: 'Energy Star Basement Dehumidifier (50-Pint Class)',
                why: 'The only item here that removes the condition centipedes physically require. Held at 45–50% RH, a damp Canadian basement stops being habitat for the centipedes and for most of what they eat — and you get mould and dust-mite control for free.',
                search: '50 pint dehumidifier basement energy star',
                featured: true,
                pros: ['Attacks the cause, not the sighting', 'Also starves silverfish, mites and mould', 'Set the humidistat, run a drain hose, forget it'],
                cons: ['The expensive item on this page', 'Compressor units struggle in cold crawl spaces — check the low-temp rating'],
              },
              {
                badge: 'Best Diagnostic',
                name: 'Flat Insect Glue Boards (Multi-Pack)',
                why: 'The simplest way to find out what is actually living in your basement. Centipedes hunt along wall-floor junctions, so boards catch them — but the silverfish, roach nymphs, ants and larvae on the same board are the real report.',
                search: 'insect glue board traps multi pack',
                pros: ['Tells you what the centipedes have been eating', 'Gives a weekly trend line instead of guesswork', 'No pesticide — fine in kids-and-pets homes'],
                cons: ['A monitor, not a cure', 'Boards die in dust and damp — replace them'],
              },
              {
                badge: 'Best Verification',
                name: 'Digital Hygrometer (2-Pack)',
                why: 'You cannot manage humidity you are not measuring, and a dehumidifier reports the air at its own intake, which flatters it. Put one across the basement and one in the worst bathroom, and you will know within a day where the problem actually is.',
                search: 'digital hygrometer indoor humidity monitor',
                pros: ['Costs almost nothing and settles the argument', 'Finds the humid room you did not suspect', 'Confirms when the dehumidifier is holding target'],
                cons: ['Cheap units drift — check them against each other', 'Measures the room, not the wall void'],
              },
              {
                badge: 'Best Exclusion',
                name: 'Door Sweeps + Silicone Caulk + Weep-Hole Screens',
                why: 'Centipedes walk in at ground level: under doors, through foundation cracks, up through brick-veneer weep holes, around dryer vents and hose bibs. An afternoon of sealing is permanent, chemical-free, and pays you back in heating season.',
                search: 'door sweep silicone caulk gap sealant',
                pros: ['Permanent, and cuts spider and cluster-fly entry too', 'Cheap materials, one afternoon of work', 'Saves winter heat in an older GTA house'],
                cons: ['Does nothing about the ones already inside', 'Older foundations need annual touch-ups'],
              },
            ]}
            whichToBuy={
              <>
                <strong>Buying one thing?</strong> The <em>Best Overall</em> dehumidifier, without hesitation &mdash; it is the only item that removes the condition centipedes need, and it works on their prey at the same time. <strong>Not sure how bad it is, or what is feeding them?</strong> Start with the <em>Best Diagnostic</em> glue boards for a week; the catch decides your whole plan. <strong>Already own a dehumidifier and still seeing them?</strong> Buy the <em>Best Verification</em> hygrometers before anything else &mdash; usually the machine is not actually holding target, or the humid room is somewhere you never checked. <strong>Autumn migration, or a house that gets them every September?</strong> Spend the money on <em>Best Exclusion</em> sealing instead of product. Full sizing and drainage detail lives in our <Link href="/blog/best-dehumidifier-for-basement-canada">basement dehumidifier guide for Canada</Link>.
              </>
            }
          />
        </div>
      </section>

      <section className="bg-gradient-to-br from-emerald-50 to-white border-b border-emerald-200 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Methods Compared &middot; Updated July 2026</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">What Actually Works on House Centipedes — and What Does Nothing</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            The centipede aisle sells a lot of things. Almost none of them touch the reason centipedes are in your house. Here is the honest hierarchy for Canadian homes.
          </p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm">
            <table className="min-w-[560px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Method</th>
                  <th className="px-4 py-3 text-left">What it actually does</th>
                  <th className="px-4 py-3 text-left">Verdict</th>
                  <th className="px-4 py-3 text-left">Availability</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Dehumidification<br /><span className="font-normal text-xs text-gray-500">45&ndash;50% RH target</span></td>
                  <td className="px-4 py-3 text-gray-700">Removes the damp harbourage centipedes and their prey both require</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">The fix</strong> &mdash; the only one that removes the cause</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="50 pint dehumidifier basement energy star" block>Check price on Amazon.ca →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Prey elimination<br /><span className="font-normal text-xs text-gray-500">Silverfish, roaches, ants, flies</span></td>
                  <td className="px-4 py-3 text-gray-700">Closes the food supply, so the predator has no reason to stay</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Essential</strong> &mdash; the half everyone skips</td>
                  <td className="px-4 py-3 text-xs text-gray-500">Depends on the prey &mdash; see guides below</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Exclusion &amp; sealing<br /><span className="font-normal text-xs text-gray-500">Gaps, weep holes, drains, sump lid</span></td>
                  <td className="px-4 py-3 text-gray-700">Physically stops the ground-level walk-in and the autumn migration</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">High value</strong> &mdash; permanent, no chemicals</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="door sweep silicone caulk gap sealant" block>Check price on Amazon.ca →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Glue boards<br /><span className="font-normal text-xs text-gray-500">Flat monitors along walls</span></td>
                  <td className="px-4 py-3 text-gray-700">Catches centipedes and, more usefully, reveals the prey population</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Start here</strong> &mdash; measurement, not control</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="insect glue board traps multi pack" block>Check price on Amazon.ca →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Diatomaceous earth<br /><span className="font-normal text-xs text-gray-500">Thin dust in dry cracks</span></td>
                  <td className="px-4 py-3 text-gray-700">Abrades the cuticle of anything that walks through it &mdash; while it stays dry</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">Useful supplement</strong> &mdash; inert once damp, so sequence it after the dehumidifier; buy a registered insecticidal DE with a PCP number, not food-grade</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="safers diatomaceous earth" block>Check price on Amazon.ca →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Residual perimeter spray<br /><span className="font-normal text-xs text-gray-500">Consumer barrier products</span></td>
                  <td className="px-4 py-3 text-gray-700">Kills some crossings; long legs hold the body clear of the residue band</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">Marginal</strong> &mdash; symptom only, and check for a PCP number</td>
                  <td className="px-4 py-3 text-xs text-gray-400">Not our recommendation</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Total-release foggers<br /><span className="font-normal text-xs text-gray-500">&ldquo;Bug bombs&rdquo;</span></td>
                  <td className="px-4 py-3 text-gray-700">Coats open surfaces where centipedes are not; drives survivors deeper into voids</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-red-700">Avoid</strong> &mdash; real fire and inhalation hazards for no benefit</td>
                  <td className="px-4 py-3 text-xs text-gray-400">Skip these</td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Ultrasonic repellers, peppermint oil, cayenne<br /><span className="font-normal text-xs text-gray-500">The shortcut aisle</span></td>
                  <td className="px-4 py-3 text-gray-700">Nothing measurable. No mechanism that empties a damp wall void</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-red-700">Don&rsquo;t bother</strong> &mdash; money that should have gone to the dehumidifier</td>
                  <td className="px-4 py-3 text-xs text-gray-400">Skip these</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-5 rounded-xl bg-amber-50 border-l-4 border-amber-400 p-4">
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong className="text-amber-900">The reframe that saves you money:</strong> a house centipede is a predator, and a predator does not stay where there is nothing to hunt. Every dollar spent killing centipedes is a dollar not spent on the prey population and the damp that supports both. Kill the buffet, and the guest leaves on its own.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">House Centipedes in Canada — Key Facts</h2>
          <div className="rounded-xl border border-navy-100 overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Species', 'House centipede — Scutigera coleoptrata (introduced, now common indoors across Canada)'],
                  ['Legs', '15 pairs on an adult; hatchlings start with 4 pairs and add pairs at each moult'],
                  ['Size', 'Body roughly 25–35 mm; legs and antennae make it look several times larger'],
                  ['Danger to humans', 'None in practice — no disease, no structural damage, bites rare and minor'],
                  ['Diet', 'Silverfish, firebrats, cockroach nymphs, spiders, ants, moth and carpet-beetle larvae, drain flies, bed bugs'],
                  ['Why they are indoors', 'No waterproof cuticle — they desiccate quickly and need damp harbourage'],
                  ['Humidity they need', 'Damp harbourage, broadly above 60% RH'],
                  ['Control target', '45–50% RH held by a dehumidifier, verified with a separate hygrometer'],
                  ['Lifespan', 'Commonly reported at three years or more — you will not outlast them'],
                  ['Seasonal pattern', 'Humidity-driven: basements peak in the hot, humid mid-summer stretch (typically July–August here). Temperature-driven: indoor migration follows the first cool nights (typically September–October)'],
                  ['Where to start', 'Glue boards for a week to read the prey population; the dehumidifier is the purchase that fixes it'],
                  ['Why spray fails', 'Long legs hold the body off the residue band; harbourage and prey are untouched'],
                  ['Bathtub finds', 'They fall in and cannot climb glaze — a sign the bathroom is running humid'],
                  ['Canadian legal check', 'Conventional insecticides sold here need a PCP registration number on the label'],
                ].map(([k, v]) => (
                  <tr key={k} className="border-b border-navy-50 last:border-0">
                    <td className="px-4 py-2 font-semibold text-brand-800 bg-brand-50 w-1/3">{k}</td>
                    <td className="px-4 py-2 text-gray-700">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />

          <h2>How Do You Actually Get Rid of House Centipedes?</h2>
          <p>By taking away the damp and taking away the food &mdash; in that order, and without buying an insecticide at all if you would rather not. That answer frustrates people, because the animal in question is genuinely startling: thirty legs, a body that seems to pour across the drywall, and a habit of appearing at eye level in a bathroom at eleven at night. The reflex is to reach for a spray can. But a house centipede is not a pest in the ordinary sense. It does not eat your food, your books, your wiring or your house. It does not bite you in your sleep or carry disease. It is a nocturnal predator that came into your basement because your basement was damp and full of insects, and it will leave when one of those two things stops being true.</p>
          <p>That is the reframe this whole page is built on, and it is worth sitting with before you spend money. If you are seeing house centipedes regularly &mdash; not one in April, but several a month &mdash; you do not have a centipede problem. You have a moisture problem and an insect problem, and the centipedes are the only visible evidence of either. Killing them removes your early-warning system and your unpaid predator while leaving the silverfish, roach nymphs, ants, spiders, or fly larvae underneath to keep breeding. Before long the damp void produces more centipedes, and you conclude that nothing works.</p>
          <p>So here is the plan, in one paragraph. Confirm what you are looking at. Lay glue boards for a week and read the whole catch, because the non-centipedes on those boards are your actual diagnosis. Put a dehumidifier in the basement, set it to 45&ndash;50% relative humidity, and verify with a separate hygrometer. Deal with whatever prey the boards revealed. Then spend an afternoon on exclusion &mdash; foundation cracks, door sweeps, brick weep holes, the dried-out floor-drain trap, the open sump pit, the mulch piled against the wall. Everything below is that plan in detail, plus an honest account of what the shortcut products do and do not do.</p>

          <p className="not-prose text-sm text-gray-600 mb-1">Check current Canadian availability of the kit:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="50 pint dehumidifier basement energy star">Basement dehumidifier →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="insect glue board traps multi pack">Glue board monitors →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="digital hygrometer indoor humidity monitor">Hygrometers →</BuyLink>
          </div>

          <h2>Identification: Is It Actually a House Centipede?</h2>
          <p>Almost every centipede a Canadian homeowner meets indoors is <em>Scutigera coleoptrata</em>, the house centipede. It is unmistakable once you know it: a flattened, yellowish-grey body about 25 to 35 mm long with three dark stripes running its length, fifteen pairs of extremely long, delicate, banded legs, and antennae and rear legs so long that the animal appears several times bigger than it is. It moves in fast, jerky bursts across walls and ceilings, freezes, then bolts again. If it startled you badly enough that you are now reading a website about it at midnight, it was almost certainly a house centipede.</p>
          <p>Three lookalikes get confused with it, and the distinction changes what you do:</p>
          <ul>
            <li><strong>Millipedes</strong> have two pairs of short legs per segment on a rounded, cylindrical body, move slowly, and curl into a spiral when disturbed. They eat decaying plant matter, not insects. Indoors in Canada they are accidental invaders from mulch and leaf litter during wet spring or autumn weather, and they die within days because the house is too dry for them. Same root cause, gentler animal.</li>
            <li><strong>Soil and garden centipedes</strong> &mdash; the smaller, reddish-brown, short-legged kinds you turn up under a flagstone or a landscape timber &mdash; are outdoor animals that occasionally wander in at ground level. They are also harmless and also a sign of damp at the foundation.</li>
            <li><strong>Silverfish and firebrats</strong> get mistaken for centipedes at a glance in a dark basement, but they are wingless, three-tailed, and slow-wiggling rather than sprinting on visible legs. If that is what you actually have, our <Link href="/blog/how-to-get-rid-of-silverfish-canada">silverfish guide for Canada</Link> is the right page &mdash; and silverfish are also one of the likeliest things your centipedes have been eating.</li>
          </ul>
          <p>One more identification note, because it is a common question: the small, stubby, short-legged &ldquo;baby centipedes&rdquo; people find in bathtubs are the same species. House centipedes hatch with four pairs of legs and add pairs at each moult until they reach the adult fifteen, so a house with a breeding population produces a whole size range. Finding small ones is meaningful &mdash; it tells you they are reproducing indoors, which tells you the harbourage is permanently damp, which points you straight at the dehumidifier.</p>

          <h2>The Part Nobody Tells You: They Are Eating Your Actual Pests</h2>
          <p>House centipedes are predators, and they are good at it. Their diet is essentially the guest list of a damp Canadian basement: silverfish and firebrats, cockroach nymphs, spiders, ants, moth and carpet-beetle larvae, drain and fungus flies, and &mdash; in homes unlucky enough to have them &mdash; bed bugs. They hunt at night, mostly along wall-floor junctions and in the voids behind and beneath things, using those long legs to run down prey and modified front legs to subdue it. The one on your bathroom wall is on a night shift.</p>
          <p>This is not a cute fact. It is the operational core of the page, for two reasons.</p>
          <p><strong>First, it tells you what to fix.</strong> Predators do not colonise empty rooms. A steady centipede presence is direct evidence of a steady insect population you have not noticed, because the things centipedes eat are mostly nocturnal, small, and good at hiding. If centipedes have been turning up for two summers running, the useful question is never &ldquo;what do I spray?&rdquo; &mdash; it is &ldquo;what has been feeding them for two summers, and where is the water coming from?&rdquo;</p>
          <p><strong>Second, it means killing them is often counterproductive.</strong> Every centipede you remove is a small amount of free pest suppression removed with it, while the prey population continues undisturbed. In a house with a low-level silverfish or roach-nymph problem, an aggressive centipede campaign can leave the underlying problem worse off than it was, because you have taken out the predator and changed nothing else. If silverfish are the prey species you keep finding, running <Link href="/blog/best-silverfish-traps-canada">a silverfish trap line</Link> alongside the dehumidifier will tell you how big that hidden population really is. Earwigs turn up in the same damp perimeter for the same reason, and the products that work on them are covered in <Link href="/blog/best-earwig-killer-canada">our earwig killer guide</Link>.</p>
          <p>We are not going to tell you to love them. Most people cannot, and that is fine &mdash; nobody has to share a bathroom with an arthropod they find horrifying. But the honest version of the advice is this: act on the environment rather than the animal, and you will get rid of the centipedes <em>and</em> whatever they were eating, permanently. Act on the animal and you get a temporary gap in the wildlife and a bill.</p>

          <h2>Why Basements and Bathrooms — the Moisture Mechanism</h2>
          <p>House centipedes lack the waxy, water-retaining outer layer that lets a beetle or an ant cross a dry floor without consequence. They lose water through the cuticle quickly, which means an individual caught in dry air is on a clock. Everything about their behaviour follows from that constraint: they hunt at night when humidity is highest and evaporation lowest, they shelter in damp voids by day, and they cannot establish anywhere that stays genuinely dry.</p>
          <p>Which is why a damp Canadian basement is close to ideal centipede habitat. Foundation walls stay cool year-round; when warm, humid July and August air meets them, moisture condenses and basement relative humidity drifts into the 60&ndash;80% range. Add the usual suspects &mdash; a sump pit with an open lid evaporating into the room, a laundry tub with a weeping trap, a dryer vented poorly, a cold-water line sweating, a floor drain whose trap dried out, boxes stacked on a slab that wicks &mdash; and you have a permanently humid microclimate with plenty of harbourage. Bathrooms are the upstairs version of the same story: an exhaust fan that is not used, or one that vents into an attic instead of outdoors, keeps the room humid enough to hold a small population indefinitely.</p>
          <p>This is also why the bathtub finding is such a good diagnostic. Centipedes do not come up drains &mdash; a functioning P-trap holds water, and there is nothing for them down there. They fall into tubs and sinks while hunting the humid floor and vanity void at night, and then cannot climb the glazed surface, which is slick to claws that grip drywall and concrete perfectly well. Repeated tub finds mean the room is humid. That is the whole message.</p>

          <h2>Step 1 — The Dehumidifier, and How to Size It Without Guessing</h2>
          <p>If you buy one thing from this page, buy this, and understand why: it is the only item that changes the condition the animal requires. There is no adaptation available to a house centipede that lets it live in dry air, no resistance to develop, and no hidden void that ambient humidity does not eventually reach. Hold the basement at 45&ndash;50% RH through the summer and the centipedes leave, along with a good share of what they were hunting.</p>
          <p><strong>Sizing, with the one detail that trips Canadians up.</strong> Dehumidifier capacity is quoted in pints per day, and the rating standard changed in 2019 &mdash; capacities are now measured under cooler test conditions, so a modern 50-pint machine corresponds roughly to what used to be sold as a 70-pint. If you are comparing an old model in your garage against a new listing, or reading an American guide written before the change, the numbers do not line up. For a typical damp full basement in the GTA, the 50-pint class (modern rating) is the safe default; a small, only-slightly-damp finished area can do with less; a large, wet, or open-plan basement wants more capacity rather than a smaller unit running around the clock and never reaching target.</p>
          <p><strong>Cold rooms need a different machine.</strong> Standard compressor dehumidifiers lose efficiency as temperature drops and can frost their coils in a cold basement or crawl space. If the space runs cool, look specifically for a unit rated for low-temperature operation with auto-defrost, or a desiccant model, which keeps working in cold air where a compressor unit stalls. An unheated crawl space is the classic case where people buy the wrong machine, watch it ice up, and decide dehumidifiers do not work.</p>
          <p><strong>Setup that decides whether it actually runs all season.</strong> Set the humidistat to 45&ndash;50% &mdash; going lower buys nothing extra against centipedes and costs more to run. Place the unit centrally with clearance around the intake, not jammed against a wall. Run a continuous-drain hose to a floor drain, or use a condensate pump, because a machine that needs its bucket emptied daily during a humid August is a machine that gets switched off in week three. Then verify with a separate hygrometer placed across the room: the dehumidifier reads the air at its own intake and flatters itself. Give it several weeks at target before you judge the result, and use your glue-board counts &mdash; not sightings &mdash; as the scoreboard. Our full <Link href="/blog/best-dehumidifier-for-basement-canada">Canadian basement dehumidifier guide</Link> covers pint-to-square-footage sizing, drainage options and cold-basement models in depth.</p>
          <p>Two free moves in the same spirit, worth doing the same day: run the bathroom exhaust fan during every shower and for twenty minutes afterwards (centipedes in an upstairs bathroom are a ventilation problem far more often than a basement problem), and fix the slow drips &mdash; a weeping trap under a vanity or a sweating cold line creates a permanently humid pocket that no room-level dehumidifier fully dries.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="50 pint dehumidifier basement energy star">Check basement dehumidifiers on Amazon.ca →</BuyLink>
          </div>

          <h2>Step 2 — Glue Boards: Read the Catch, Not Just the Count</h2>
          <p>A dozen flat glue boards cost a few dollars and buy you more information than anything else on this page. They are not the purchase that ends the problem &mdash; the dehumidifier is &mdash; but laying them for a week before you spend anything else tells you what you are actually dealing with. Lay them tight against the wall-floor junction &mdash; centipedes and their prey both travel edges, not open floor &mdash; along the exterior basement walls, behind the furnace and hot water tank, under the laundry tub, beside the sump pit, at the base of the stairs, and behind each bathroom vanity. Number them and date them with a marker.</p>
          <p>Then check weekly, and pay more attention to what <em>else</em> is on the board than to the centipedes:</p>
          <ul>
            <li><strong>Silverfish and firebrats</strong> &mdash; a common centipede food in Canadian basements. Same humidity fix, plus decluttering cardboard. See the <Link href="/blog/how-to-get-rid-of-silverfish-canada">silverfish guide</Link>.</li>
            <li><strong>Small striped cockroach nymphs</strong> &mdash; treat this as urgent and switch to the <Link href="/blog/how-to-get-rid-of-cockroaches-canada">cockroach bait plan</Link>; the centipedes are the least of it.</li>
            <li><strong>Spiders</strong> &mdash; usually themselves a sign of a flying-insect food supply, and evidence of the same ground-level entry gaps. Our <Link href="/blog/how-to-keep-spiders-out-of-your-house">spider exclusion guide</Link> shares most of the sealing work with this page.</li>
            <li><strong>Ants</strong> &mdash; a trail into a damp basement usually means moisture-damaged wood somewhere, which is a building problem, not a bug problem.</li>
            <li><strong>Small flies and larvae</strong> &mdash; drain flies point at a dirty or dry floor drain; fungus gnats at overwatered plants or genuinely wet soil under the slab.</li>
            <li><strong>Almost nothing at all</strong> &mdash; genuinely good news. It means you have a couple of stray centipedes and a humidity issue, not an ecosystem.</li>
          </ul>
          <p>The count matters too, as a trend line. Once the dehumidifier has been holding target for several weeks, the boards should be trending down. If they are not, you have a humid pocket you have not found &mdash; check the crawl space, the cold room, behind finished walls near the sump, and the bathroom you assumed was fine.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="insect glue board traps multi pack">Check glue board multi-packs on Amazon.ca →</BuyLink>
          </div>

          <h2>Step 3 — Exclusion: Where They Walk In</h2>
          <p>House centipedes enter at ground level, on foot, through gaps most people never look at. The heaviest push indoors comes once outdoor temperatures start dropping &mdash; in southern Ontario that is usually September and October &mdash; because everything living in the mulch bed against the foundation goes looking for somewhere warmer at the same time. An afternoon of sealing before that happens is the highest-value unpaid work on this page &mdash; and every gap you close is also a heating-bill fix in a Canadian house.</p>
          <p>The list, in the order worth working around a house:</p>
          <ul>
            <li><strong>Mulch, leaf litter and firewood against the wall.</strong> This is the reservoir. Pull organic mulch back to leave a dry strip along the foundation, rake leaf litter out of the beds and window wells, and get stacked firewood off the wall and up on a rack. Landscape timbers and flagstone lying directly on soil next to the house are prime centipede harbourage.</li>
            <li><strong>Foundation cracks and the sill-plate line.</strong> Silicone or polyurethane sealant on cracks at and just above grade, and on the gap where the framing meets the foundation from the inside.</li>
            <li><strong>Brick-veneer weep holes.</strong> Most Canadian brick homes have deliberate open weep holes in the bottom course; they must stay open for drainage, so do not caulk them &mdash; fit purpose-made weep-hole screens or covers that block insects while letting water and air through.</li>
            <li><strong>Door sweeps and thresholds.</strong> Exterior doors, the garage entry door, and the basement walkout. If you can see daylight, a centipede can walk through it.</li>
            <li><strong>Utility penetrations.</strong> Hose bibs, dryer vents (check the flap actually closes), gas and electrical entries, AC line sets, cable and telecom drops. Seal around them, and screen the dryer vent hood without restricting airflow.</li>
            <li><strong>Basement windows and window wells.</strong> Repair torn screens, seal frame gaps, and clear the well of leaves &mdash; a leaf-filled window well is a damp insect hotel pressed against your glass. Well covers help.</li>
            <li><strong>Floor drains with dried-out traps.</strong> A seldom-used basement floor drain evaporates its water seal and becomes an open pipe. Pour a couple of litres of water down every seldom-used drain monthly; adding a small amount of mineral oil slows evaporation. This also stops sewer odour and drain flies.</li>
            <li><strong>The sump pit.</strong> An open pit is an evaporation source and a harbourage in one. A sealed or gasketed lid closes both, and takes a standing source of moisture out of the room.</li>
            <li><strong>Grading and downspouts.</strong> The unglamorous one, and the one that keeps paying off long after the caulk gun is put away: soil should slope away from the house, and downspouts should discharge well clear of the foundation rather than dumping beside it. Chronic basement damp is very often a gutter problem wearing a pest costume.</li>
          </ul>
          <p>This same exclusion pass is the one our guides to <Link href="/blog/how-to-get-rid-of-cluster-flies-canada">cluster flies</Link> and <Link href="/blog/how-to-keep-spiders-out-of-your-house">keeping spiders out</Link> call for &mdash; the autumn home-invader crowd all exploits the identical gaps, so one afternoon of work pays three times.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="door sweep silicone caulk gap sealant">Check door sweeps and sealant on Amazon.ca →</BuyLink>
          </div>

          <h2>What Actually Kills a Centipede — and Why Chemical-First Fails</h2>
          <p>Let us be straightforward about the killing, because plenty of readers want the option.</p>
          <p><strong>A shoe, a vacuum, or a jar and a piece of card.</strong> For an individual centipede, this is the entire technology required. A vacuum with a hose is the least unpleasant version for the squeamish, and there is no reason to buy a product for a one-off encounter.</p>
          <p><strong>Diatomaceous earth,</strong> applied as a thin, barely visible film in dry cracks, along the sill-plate gap, behind appliances and under storage shelving, will kill centipedes and their prey by abrading the cuticle and dehydrating them. The catch is built into the situation: DE only works while dry, and centipedes live where it is damp. The sequence that works is dehumidifier first, then dust &mdash; and in the meantime, apply only in sheltered dry voids. Visible piles get walked around; a whisper-thin film does the work. One Canadian compliance point that most DE advice skips: buy DE that is <em>sold as an insecticide</em> and carries a PCP registration number on the label. &ldquo;Food-grade&rdquo; DE is sold as an anti-caking agent or feed additive &mdash; it carries no pesticide registration, no PCP number and no legal application directions, so using it against insects is off-label use of an unregistered product, and the registered version costs only a few dollars more. Never use pool-grade DE for pest control either: it is calcined and contains crystalline silica, which is a genuine respiratory hazard rather than a scare story. Technique, the grade distinctions, and Canadian product selection are covered in our <Link href="/blog/diatomaceous-earth-canada-buyers-guide">diatomaceous earth buyer&rsquo;s guide</Link>.</p>
          <p><strong>Residual perimeter sprays</strong> are where a lot of centipede money goes, and they underdeliver for a specific physical reason. A residual barrier works by depositing insecticide on a surface an insect must drag its body across. A house centipede crosses that band on fifteen pairs of long legs with its body held well clear, picking up a fraction of the dose a flat-bodied silverfish would &mdash; the same reason barrier products have a poor reputation against long-legged spiders. Layer on the fact that the breeding harbourage is inside wall voids, under the slab edge, in the sump pit and beneath outdoor mulch, and that nothing in the can touches the prey population, and you have a treatment that dents the sighting count for a while and changes nothing structural.</p>
          <p><strong>Total-release foggers</strong> are worse than useless here. They deposit on open surfaces, which is precisely where centipedes are not, they push survivors deeper into voids, and they carry real fire and inhalation hazards in an enclosed basement. Fogging has no place in a centipede plan.</p>
          <p><strong>Ultrasonic plug-ins, peppermint and tea-tree sprays, cayenne, cedar oil, coffee grounds.</strong> None of these empties a damp harbourage. Ultrasonic repellers in particular have failed repeatedly in controlled testing across pest categories &mdash; we went through the evidence in our <Link href="/blog/ultrasonic-pest-repellers-do-they-work">ultrasonic pest repeller review</Link>. If a product claims to solve a moisture-driven predator problem without touching the moisture or the prey, the claim is the product.</p>
          <p>The honest summary: chemicals are a symptom tool for a structural problem. If you use one anyway &mdash; and there are legitimate reasons to knock down a bad autumn migration while you get the sealing done &mdash; treat it as a stopgap running alongside the dehumidifier and the exclusion, not instead of them. If you want that stopgap chosen properly rather than grabbed off a shelf, we ranked <Link href="/blog/best-centipede-killer-canada">what actually kills centipedes in Canada</Link> product by product, including which dusts carry a PCP number and which whole categories are simply selling you a feeling.</p>

          <h2>The Canadian Product Reality: PMRA, PCP Numbers, and Cross-Border Listings</h2>
          <p>Most centipede advice online is written for an American audience with an American shelf, and that shelf is not our shelf. Under the Pest Control Products Act, conventional insecticides sold or used in Canada must be registered with Health Canada&rsquo;s Pest Management Regulatory Agency and carry a Canadian PCP registration number on the label. That number is your one-glance test. There is one real exception worth knowing: a narrow list of minimum-risk products &mdash; largely certain essential-oil formulations &mdash; is exempt from registration and sells legally here without a PCP number. That exemption says nothing about whether those products work on centipedes, and as the table above says, they do not. What it does mean is that a missing PCP number on an essential-oil spray is not by itself a legality problem, while a missing PCP number on a conventional perimeter insecticide is. A great many of the perimeter and &ldquo;home defense&rdquo; insecticides that dominate US centipede threads have no Canadian registration, and marketplace listings routinely surface US-market stock to Canadian buyers without flagging it. Before buying any conventional insecticide online, zoom the label photo and look for the PCP number; if it is not there, there are no Canadian directions standing behind how you use it.</p>
          <p>The practical Canadian shelf for this job is refreshingly boring. Dehumidifiers, hygrometers, glue boards, weep-hole screens, door sweeps, sealant, sump lids and drain covers are all stocked at Canadian Tire, Home Depot Canada, Rona and Home Hardware, none of them are pesticides, and none of them require a registration check. If you do want a chemical component, look for a domestic-class product whose Canadian label lists centipedes, and follow that label &mdash; the label is the law, not a suggestion. Note as well that provincial cosmetic-pesticide rules, including Ontario&rsquo;s, restrict what can be used on lawns and gardens, which is another reason the outdoor half of this job is best done with a rake and a caulk gun rather than a sprayer. We applied exactly this PCP-number test across the category in <Link href="/blog/best-centipede-killer-canada">our centipede product breakdown</Link>, which is the short way to find out whether the thing in your cart is legal to use here at all.</p>

          <h2>Seasonality: When Ontario Homes Get Centipedes</h2>
          <p>Centipede activity is not really a calendar; it is two environmental variables, humidity and temperature, that happen to move on a predictable schedule in a climate like ours. That produces two pressure points a year, and they call for different responses.</p>
          <p><strong>The humidity pressure point &mdash; the hot, muggy stretch of summer.</strong> Warm, humid air meeting cool foundation walls drives basement RH to its annual high, which is the condition indoor populations breed best in and when people start finding them in bathtubs. In southern Ontario that stretch is usually July and August. This is dehumidifier season: the machine acts on the humidity that is driving the problem right now, rather than on next year&rsquo;s.</p>
          <p><strong>The temperature pressure point &mdash; the first cool nights of autumn.</strong> As nights cool, everything living in the mulch, leaf litter, woodpile and window wells against your foundation starts looking for somewhere warmer, and centipedes come in at ground level along with cluster flies, spiders, boxelder bugs and the rest of the autumn crowd. In southern Ontario that is typically September and October. This is exclusion season: sealing, sweeps, weep-hole screens, and clearing organic material away from the wall. Doing that work before the cold snap is far easier than dealing with what walks in after it.</p>
          <p>Winter is the quiet season in the sense that entry stops, but heated indoor air is dry, so any centipedes that overwintered inside concentrate hard in the few rooms that stay humid &mdash; bathrooms, laundry rooms, the utility corner. A winter sighting in the bathroom is a very specific message about that room&rsquo;s ventilation.</p>

          <h2>When DIY Is the Wrong Call</h2>
          <p>House centipedes are a genuinely DIY-solvable problem, because the cause is environmental and every tool the job needs is a hardware-store item. There is no honest scenario where the right answer is a recurring spray contract for centipedes alone, and we would tell you that even if we sold one &mdash; which, to be clear, we do not; BuzzSkito treats mosquitoes and ticks, and this page is our publishing team&rsquo;s independent research.</p>
          <p>Bring in help in three situations. <strong>The moisture source is structural.</strong> If humidity will not come down after several weeks of a correctly sized dehumidifier running at target, you may be dealing with a foundation leak, failed weeping tile, a plumbing leak inside a wall, or ground water &mdash; and the right call is a waterproofing or plumbing contractor, not an exterminator. <strong>The glue boards found something else.</strong> Cockroach nymphs, bed bugs, or a heavy carpet-beetle catch are their own problems with their own programs, and a licensed pest professional is worth it for those; our <Link href="/pest-control-cost-canada">Canadian pest control cost guide</Link> covers what interior general-pest work typically runs so you can sanity-check a quote. <strong>You rent, or you are in a condo.</strong> If the damp is coming from a unit or a common element you do not control, document it in writing to the landlord or property manager rather than buying equipment for someone else&rsquo;s building.</p>
          <p>And be suspicious of any contractor who quotes a centipede spray program without once mentioning humidity, drainage or prey. That quote is for the symptom.</p>

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

          <h2>Related Household Pest Guides</h2>
          <ul>
            <li><Link href="/blog/how-to-get-rid-of-silverfish-canada">How to Get Rid of Silverfish in Canada — The Humidity Fix</Link></li>
            <li><Link href="/blog/best-dehumidifier-for-basement-canada">Best Dehumidifier for a Basement in Canada — Sizing &amp; Drainage</Link></li>
            <li><Link href="/blog/how-to-keep-spiders-out-of-your-house">How to Keep Spiders Out of Your House</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-cockroaches-canada">How to Get Rid of Cockroaches in Canada</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-cluster-flies-canada">How to Get Rid of Cluster Flies in Canada</Link></li>
            <li><Link href="/blog/diatomaceous-earth-canada-buyers-guide">Diatomaceous Earth in Canada — Buyer&rsquo;s Guide &amp; Technique</Link></li>
            <li><Link href="/blog/ultrasonic-pest-repellers-do-they-work">Do Ultrasonic Pest Repellers Actually Work?</Link></li>
            <li><Link href="/pest-control-cost-canada">Pest Control Cost Canada — What Professionals Charge</Link></li>
          </ul>

          <div className="not-prose mt-10 rounded-xl border border-navy-100 bg-brand-50 px-5 py-4">
            <p className="text-sm text-brand-900">
              <Link href="/pest-product-guides" className="font-bold text-emerald-700 hover:text-emerald-800 underline">More independent Canadian pest product research →</Link>
            </p>
          </div>
        </div>
      </article>

      <CTASection
        variant="light"
        heading="Mosquitoes and Ticks Are Our Actual Job"
        subtext="Centipedes we research; mosquitoes and ticks we treat. If your yard in the GTA is unusable in summer, we spray it — 150 five-star reviews and a free re-spray guarantee."
      />
    </>
  )
}
