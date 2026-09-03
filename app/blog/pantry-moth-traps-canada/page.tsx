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

const SLUG = 'pantry-moth-traps-canada'
const DATE = '2026-07-30'
const UPDATED = '2026-07-30'
// One page for the whole pantry-moth intent — the trap decision AND the purge that
// the trap cannot do. Deliberately NOT split into a "how to get rid of pantry moths"
// sibling: at this domain's authority a second URL would only split the cluster.
const TITLE = 'Pantry Moth Traps in Canada — What They Actually Catch, What They Cannot, and the Cupboard Purge That Ends It'
const META_TITLE = 'Pantry Moth Traps Canada: What They Catch'

const FAQS = [
  {
    question: 'Do pantry moth traps actually work?',
    answer: 'They work perfectly at the job they are built for and not at all at the job most people buy them for. A pantry moth trap is a sticky card baited with the female moth’s sex pheromone, so it attracts and catches adult males. It does not catch females, it does not touch eggs, and it has no effect whatsoever on the larvae that are doing the actual damage inside your flour. What the trap gives you is information and time: it tells you whether you still have a live population, which cupboard or room it is centred on, and — once you have done the purge — whether you are genuinely finished. Buy it as an instrument and a mating-disruption layer, not as a treatment. If you buy nothing else, buy this, because without it you are guessing.',
  },
  {
    question: 'What is the fastest way to get rid of pantry moths?',
    answer: 'Find the package they came in and throw it out, then empty and vacuum the cupboard the same day. That single act ends most household infestations, and nothing you can buy substitutes for it. Pantry moths do not wander in from outside or breed in a clean cupboard — they arrive inside a sealed food package and the population lives in that food. Pull everything out, hunt for webbing and clumping in flour, cereal, oats, rice, nuts, dried fruit, spices, chocolate, pet food and birdseed, bag the infested items and put them in an outdoor bin, then vacuum the empty shelves including corners, shelf-support holes, and the underside lip of each shelf. Traps confirm the result; the bin does the work.',
  },
  {
    question: 'Where do pantry moths come from in the first place?',
    answer: 'From the grocery store, almost always — the eggs or larvae were already in the package when you carried it home. Infestation happens somewhere upstream in growing, milling, packing, warehousing or shipping, and the package sits in your cupboard until the larvae mature. This matters emotionally as much as practically: pantry moths are not a sign of a dirty kitchen, and immaculate homes get them at the same rate as cluttered ones. The one preventable version is bulk-bin and warehouse-club buying, where a large bag sits open for months. If you regularly buy big bags of flour, rice, nuts, birdseed or dog kibble, that is where to start looking.',
  },
  {
    question: 'How many pantry moth traps do I need, and where do they go?',
    answer: 'One or two per affected room is the right starting quantity, not a dozen. These lures are potent, and over-trapping a small kitchen simply saturates the space and blurs the signal you are trying to read. Place them near — not inside — the affected cupboard: on top of the fridge, on a high shelf, on the counter beside the pantry door, and one in any other room where you have seen an adult flying (moths get carried around a house on clothing and in bags more often than people expect). Keep them out of direct sunlight and away from cooking steam, which shortens lure life. Replace on the manufacturer’s schedule; a lure that has quietly expired reads exactly like an infestation that is over.',
  },
  {
    question: 'Why do I still see moths after setting traps?',
    answer: 'Because the trap only removes males, and everything else in the life cycle continues without them. Females that already mated keep laying, eggs that were laid before the trap went up keep hatching, and larvae that have already left the food to pupate keep emerging as adults for weeks. A trap line with no purge behind it produces exactly this: a steady, discouraging trickle that never quite stops. The other common explanation is a second source you have not found — a forgotten bag of birdseed in the garage, a spilled cup of rice behind the toaster, a bag of dog kibble in the basement, or an open box in a cupboard you did not empty because it "looked fine".',
  },
  {
    question: 'Do I need to throw out food that looks fine?',
    answer: 'No, and you should not — that is where this problem gets expensive unnecessarily. Throw out anything with visible webbing, clumping, silk threads, larvae, or a musty smell. For unopened, undamaged, factory-sealed items in rigid containers or glass, inspect and keep. For anything in between — a half-used bag of flour from the same shelf that looks clean but you are unsure about — freezing is the middle path: seal it and hold it at about −18°C for several days, which kills eggs and larvae, then move it into an airtight rigid container. That takes the guesswork out without emptying your kitchen into a garbage bag.',
  },
  {
    question: 'Can pantry moth larvae get through sealed bags and plastic containers?',
    answer: 'Through thin ones, yes. Pantry moth larvae chew through paper, cardboard, cellophane and thin plastic film, which is why finding them inside an unopened box is normal rather than surprising, and why zipper bags and the original packaging are not protection. They also crawl into cracks and under lids that do not actually seal. What excludes them is rigid and gasketed: glass jars with clamp or screw lids, thick plastic canisters with a silicone seal, metal tins with a tight lid. This is the single purchase that stops the problem recurring, and it is the reason a container set is worth more of your money than a bigger box of traps.',
  },
  {
    question: 'Should I spray insecticide in my pantry?',
    answer: 'Almost certainly not, and the label usually settles it before the argument starts. Most crawling-insect sprays sold in Canada are labelled for cracks and crevices and specifically direct you to keep them off food, food-contact surfaces, and food-preparation areas — which is the entire room you are proposing to treat. Beyond legality, it does not solve anything: the larvae are inside packages the spray cannot enter, and the pupae are in cocoons tucked into shelf-support holes and the ceiling–wall junction. Vacuuming reaches those; a spray mist does not. If you decide to use any pest product near a food storage area, confirm the Canadian label carries a PCP registration number and that food storage areas are actually a listed use site rather than a prohibited one.',
  },
  {
    question: 'Do mothballs, cedar blocks or lavender work on pantry moths?',
    answer: 'No — and mothballs are genuinely the wrong answer near food. Cedar and lavender belong to clothes-moth folklore, which is a different insect entirely: clothes moths eat wool and keratin, pantry moths eat starch and oil, and the smells associated with one have no established effect on the other. Mothballs are a real pesticide — naphthalene or paradichlorobenzene — whose Canadian labels are written for fabric articles in sealed containers, not open food cupboards, and their entire mechanism is saturating an enclosed space with a volatile chemical your food will absorb. Do not put them in a pantry. Bay leaves, cloves, peppermint and the rest of the internet’s deterrent list are harmless, and no substitute for an airtight jar.',
  },
  {
    question: 'Will a bug bomb or fogger clear pantry moths?',
    answer: 'No, and it is one of the worse purchases available for this pest. Total-release foggers push an aerosol through open air; it settles on surfaces and never penetrates the sealed cereal box where the larvae live, nor the silk cocoons wedged into shelf-support holes and the corner where the ceiling meets the wall. You get the residue everywhere you prepare food and none of it where the insects are. The same reasoning applies to ultrasonic plug-in repellers, which have no credible evidence behind them for any household pest. Money that goes into either of these is money not spent on the container set that actually ends the recurrence.',
  },
  {
    question: 'How long does it take to get rid of pantry moths?',
    answer: 'Expect roughly four to six weeks from a thorough purge to a genuinely quiet kitchen, and do not read the intervening sightings as failure. Larvae that had already crawled off to pupate before your purge complete their development on their own schedule and emerge as adults afterwards, so an occasional moth in weeks two and three is normal. What you are watching is the trend on the trap card, not any single moth. A monitoring trap catching nothing for three to four consecutive weeks is a defensible all-clear. If catches are still steady after six weeks, you have a second source you have not found — go back through the garage, the basement, the pet-food bin and the birdseed.',
  },
  {
    question: 'Is it worth paying a pest control company for pantry moths?',
    answer: 'For a normal household, no — and we would rather say so than send you a referral. Pantry moths are a stored-product problem, and the cure is finding an infested package and buying airtight containers, which no company can do for you and which costs less than a single service call. There is nothing a technician can spray into a sealed bag of flour. The genuine exceptions are worth naming: a restaurant, bakery, grocery or other food premises where any insect presence is a compliance matter and a stored-product specialist is the right call; a multi-unit building where the source is in someone else’s suite; or a household that has done two complete purges and is still catching moths steadily, where a professional inspection is really being hired to find the hiding source rather than to treat anything.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'Pantry moth traps in Canada: what a pheromone trap actually catches (adult males only), how many to buy, and the cupboard purge that genuinely ends it.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug(SLUG)

export default function PantryMothTrapsCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Independent Canadian guide to pantry moth traps: how pheromone traps work and what they cannot do, Indianmeal moth identification, how many traps to buy and where to place them, the full cupboard purge protocol, why airtight rigid containers are the real fix, freezing salvageable food, and the products to avoid near food.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Pantry Moth Traps Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Pantry Moth Traps</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">A pheromone trap catches adult males and nothing else &mdash; no females, no eggs, and none of the larvae actually eating your flour. Buy one anyway, because it is the only way to know where the population is and when you are finished. Then do the part that ends it.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <AffiliateDisclosure />
      <StickyBuyBar tag={AMZ_TAG} name="TERRO Pantry Moth Traps (pheromone monitor)" search="terro pantry moth traps" label="Buy this first" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">Pantry moth traps work &mdash; at catching adult males. The sticky card is baited with the female&rsquo;s sex pheromone, so it pulls in males, tells you which room the population is in, and tells you when the problem is genuinely over. It does not catch females, eggs, or the larvae doing the damage. <strong>Buy one or two traps per affected room, then do the purge:</strong> find and bin the infested package, empty and vacuum the cupboard including the shelf-support holes and the ceiling corner, and move everything you keep into rigid airtight containers. The containers, not the traps, are what stops it happening again.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li><strong>Traps catch males only</strong> &mdash; a monitor and a mating-disruption layer, never a treatment on its own.</li>
              <li><strong>One or two per room</strong>, placed near the cupboard rather than inside it. More traps do not mean faster.</li>
              <li><strong>They came in with the food.</strong> This is a packaging problem from upstream, not a housekeeping failure.</li>
              <li><strong>Larvae chew through bags, boxes and thin film</strong> &mdash; only rigid, gasketed containers exclude them.</li>
              <li><strong>Do not spray the pantry.</strong> Most crawling-insect labels in Canada direct you to keep the product out of food-preparation areas.</li>
              <li><strong>Do not buy:</strong> mothballs near food, foggers or bug bombs, ultrasonic repellers, cedar blocks and lavender (those are clothes-moth folklore, a different insect).</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito Pest Product Guides &middot; independent Canadian research</p>
          </div>

          <SpecialistDisclosure pest="pantry moths" />
        </div>
      </section>

      <section className="bg-white px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Decision Table</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">Pick in 60 Seconds: Your Situation &rarr; What to Buy</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            Pantry-moth spending goes wrong in one predictable way: people buy more traps when the traps keep catching. That is the trap doing its job and telling you the source is still in the cupboard. Find your row instead.
          </p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm">
            <table className="min-w-[560px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Your situation</th>
                  <th className="px-4 py-3 text-left">Buy this</th>
                  <th className="px-4 py-3 text-left">Do not buy</th>
                  <th className="px-4 py-3 text-left">Get it</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">One small moth flying near the ceiling, nothing found yet</td>
                  <td className="px-4 py-3 text-gray-700">A single pheromone trap. Give it a week and let the catch rate tell you whether there is a population or a stowaway</td>
                  <td className="px-4 py-3 text-gray-700">Anything else, yet</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="terro pantry moth traps" block>Pheromone traps &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">You found webbing and clumping in the flour or cereal</td>
                  <td className="px-4 py-3 text-gray-700">Nothing &mdash; bin that package outdoors right now, then empty and vacuum the whole cupboard</td>
                  <td className="px-4 py-3 text-gray-700">A spray for the shelves</td>
                  <td className="px-4 py-3 text-xs text-gray-400">Free &mdash; a bin bag and a vacuum</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Purge done, you want it to never happen again</td>
                  <td className="px-4 py-3 text-gray-700">A rigid airtight container set &mdash; glass or gasketed plastic for every dry good you keep</td>
                  <td className="px-4 py-3 text-gray-700">Zipper bags, clip-shut bags</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="airtight glass food storage containers set" block>Airtight containers &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Cocoons and silk in shelf-support holes and corners</td>
                  <td className="px-4 py-3 text-gray-700">A crevice tool for the vacuum you already own. Cocoons come out mechanically, not chemically</td>
                  <td className="px-4 py-3 text-gray-700">A fogger</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="handheld vacuum crevice tool attachment" block>Crevice tool &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Big bags of birdseed, dog kibble or bulk flour in the garage</td>
                  <td className="px-4 py-3 text-gray-700">A gasketed storage bin per bag. This is the most common source people never check</td>
                  <td className="px-4 py-3 text-gray-700">More kitchen traps</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="airtight pet food storage container with gasket lid" block>Sealed bins &rarr;</BuyLink></td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Still catching moths six weeks after a full purge</td>
                  <td className="px-4 py-3 text-gray-700">Nothing. Go hunting again &mdash; there is a second source, usually outside the kitchen</td>
                  <td className="px-4 py-3 text-gray-700">A stronger product</td>
                  <td className="px-4 py-3 text-xs text-gray-400">Free &mdash; a flashlight</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <AwardRow tag={AMZ_TAG}
            heading="Our Picks — The Pantry Moth Kit Worth Buying in Canada"
            awards={[
              {
                badge: 'Buy This First',
                name: 'TERRO Pantry Moth Traps (Pheromone Monitor)',
                why: 'The instrument the whole job runs on. A pheromone-baited sticky card tells you whether you still have a live population, which room it is centred on, and — after the purge — when you are actually finished. TERRO and Safer’s Pantry Pest are the two lines you will most often find stocked in Canada. Buy one or two per affected room, not a wall of them.',
                search: 'terro pantry moth traps',
                featured: true,
                pros: ['The only way to know whether the problem is over', 'No toxicant — a lure and glue, fine in a kitchen', 'Cheap enough to run continuously as an early-warning system'],
                cons: ['Catches adult males only — no females, eggs or larvae', 'Cannot end an infestation without the cupboard purge'],
              },
              {
                badge: 'The Actual Fix',
                name: 'Rigid Airtight Container Set (Glass or Gasketed)',
                why: 'Pantry moth larvae chew through paper, cardboard, cellophane and thin plastic film, which is why they turn up inside unopened boxes. A rigid container with a gasketed clamp or screw lid is a wall they cannot cross — and it also contains any infestation that arrives inside a future package instead of letting it spread down the shelf.',
                search: 'airtight glass food storage containers set',
                pros: ['Ends the recurrence rather than managing it', 'Contains a future infested package to one jar', 'You can see a problem starting through glass'],
                cons: ['The largest purchase on this page', 'Only helps once everything is actually transferred'],
              },
              {
                badge: 'Best for the Purge',
                name: 'Vacuum Crevice Tool + Shelf-Liner Replacement',
                why: 'Mature larvae leave the food to spin cocoons in shelf-support holes, under shelf lips, along the ceiling–wall junction and behind loose liner. Those pupae are the reason moths keep appearing after you binned the flour, and they come out mechanically — a narrow crevice nozzle run into every hole and seam, then the bag emptied outside.',
                search: 'handheld vacuum crevice tool attachment',
                pros: ['Reaches the cocoons no spray can touch', 'No chemistry in a food-preparation room', 'Uses a vacuum you already own'],
                cons: ['Tedious — this is the hour nobody enjoys', 'Empty the canister or bag outdoors, or you have moved the problem'],
              },
              {
                badge: 'Best Overlooked Buy',
                name: 'Gasketed Bins for Pet Food, Birdseed and Bulk Bags',
                why: 'The single most common source people never inspect. A sack of birdseed in the garage, a bulk bag of kibble in the basement, or a warehouse-club bag of flour will quietly sustain a population that keeps reseeding a kitchen you have already purged twice. A sealed bin per bag solves it and keeps the feed fresher.',
                search: 'airtight pet food storage container with gasket lid',
                pros: ['Closes the reservoir that defeats most repeat purges', 'Also excludes mice and keeps feed dry', 'One-time buy per bag'],
                cons: ['Does nothing if the bag is already infested — freeze or bin first', 'Bulky to store'],
              },
            ]}
            whichToBuy={
              <>
                <strong>Only buying one thing?</strong> The <em>Buy This First</em> pheromone trap &mdash; not because it fixes anything, but because without it you cannot tell an infestation from a stowaway, or a finished job from a quiet week. <strong>Already found the webbing?</strong> Skip straight to the <em>Best for the Purge</em> crevice work; the bin bag and the vacuum are what actually end it. <strong>Never want to do this again?</strong> The <em>Actual Fix</em> container set is the only purchase on this page that changes the odds permanently. <strong>Second or third round in the same kitchen?</strong> The <em>Best Overlooked Buy</em> is where your source almost certainly is.
              </>
            }
          />
        </div>
      </section>

      <section className="bg-gradient-to-br from-emerald-50 to-white border-b border-emerald-200 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Know Your Moth &middot; Updated July 2026</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">Pantry Moth or Clothes Moth? The Thirty-Second ID That Changes Everything You Buy</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            Most wasted money on this problem comes from buying for the wrong insect. Cedar blocks, lavender sachets and wool-safe sprays are all built for clothes moths &mdash; a different family with a different diet living in a different room. Here is how to tell which one you have before you spend anything.
          </p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm">
            <table className="min-w-[560px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Insect</th>
                  <th className="px-4 py-3 text-left">Looks like</th>
                  <th className="px-4 py-3 text-left">Where it lives</th>
                  <th className="px-4 py-3 text-left">What it eats</th>
                  <th className="px-4 py-3 text-left">What to buy</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Indianmeal moth<br /><span className="font-normal text-xs text-gray-500">Plodia interpunctella &mdash; the usual Canadian pantry moth</span></td>
                  <td className="px-4 py-3 text-gray-700">Small moth with a distinctly <strong>two-tone wing</strong>: pale grey-cream near the body, coppery reddish-bronze on the outer half. Flutters weakly, often near the ceiling</td>
                  <td className="px-4 py-3 text-gray-700">Kitchen cupboards, pantry, garage feed bags. Cocoons in shelf-support holes and the ceiling corner</td>
                  <td className="px-4 py-3 text-gray-700">Starches and oils &mdash; flour, cereal, rice, oats, nuts, dried fruit, spices, chocolate, pet food, birdseed</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Pheromone traps + purge + airtight containers</strong></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Mediterranean flour moth<br /><span className="font-normal text-xs text-gray-500">Ephestia kuehniella</span></td>
                  <td className="px-4 py-3 text-gray-700">Uniform pale grey with fine dark zigzag markings &mdash; no copper band</td>
                  <td className="px-4 py-3 text-gray-700">Same cupboards; more associated with flour and milled grain</td>
                  <td className="px-4 py-3 text-gray-700">Flour and milled products above all</td>
                  <td className="px-4 py-3 text-gray-700">Same plan &mdash; most retail lures target this group too</td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Clothes moth<br /><span className="font-normal text-xs text-gray-500">Tineola bisselliella and relatives</span></td>
                  <td className="px-4 py-3 text-gray-700">Smaller, plain straw-gold or buff, no pattern. Avoids light and prefers to scuttle rather than fly</td>
                  <td className="px-4 py-3 text-gray-700">Closets, drawers, under furniture, stored woollens &mdash; <strong>not</strong> the food cupboard</td>
                  <td className="px-4 py-3 text-gray-700">Keratin &mdash; wool, cashmere, silk, felt, fur, feathers</td>
                  <td className="px-4 py-3 text-gray-700">A completely different kit. A pantry lure will not attract it</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            The practical shortcut: if the moth came out of a cupboard with food in it, treat it as a pantry moth. If it came out of a wardrobe, it is not the insect this page is about, and nothing on this page will help you.
          </p>
          <div className="mt-5 rounded-xl bg-amber-50 border-l-4 border-amber-400 p-4">
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong className="text-amber-900">Why this matters for your cart:</strong> cedar blocks and lavender sachets are sold on the strength of clothes-moth tradition. There is no established repellent effect on Indianmeal moths, and there is no scenario where a scented block competes with a sealed glass jar. If a listing is vague about which moth it is for, that vagueness is the product.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Pantry Moth Buying Checklist &mdash; Quick Reference</h2>
          <div className="rounded-xl border border-navy-100 overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['What a trap actually catches', 'Adult males only — drawn by the female sex pheromone'],
                  ['What a trap never touches', 'Females, eggs, and the larvae eating your food'],
                  ['How many to buy', 'One or two per affected room — over-trapping blurs the signal'],
                  ['Where to place them', 'Near the cupboard, not inside it. Out of sunlight and cooking steam'],
                  ['The step that ends it', 'Find and bin the infested package, then empty and vacuum the cupboard'],
                  ['Where the cocoons hide', 'Shelf-support holes, under shelf lips, ceiling–wall junction, behind loose liner'],
                  ['The purchase that prevents recurrence', 'Rigid airtight containers — glass or gasketed plastic, for every dry good'],
                  ['Why bags fail', 'Larvae chew paper, cardboard, cellophane and thin plastic film'],
                  ['Salvaging borderline food', 'Freeze sealed at about −18°C for several days, then transfer to a rigid container'],
                  ['Where they came from', 'Inside a food package, from upstream in the supply chain — not from your housekeeping'],
                  ['Most-missed source', 'Birdseed, pet kibble and bulk bags in the garage or basement'],
                  ['Spray in the pantry', 'Generally the wrong tool — most Canadian labels direct you away from food-preparation areas'],
                  ['Label check if you use any pesticide', 'A PCP registration number, and a use site that includes where you intend to apply it'],
                  ['Realistic timeline', 'Four to six weeks from purge to quiet; three to four empty trap weeks = all-clear'],
                  ['Peak season in Canada', 'Autumn into November — fall baking stock plus a summer’s worth of population growth'],
                  ['Waste of money', 'Mothballs near food, foggers and bug bombs, ultrasonic repellers, cedar and lavender'],
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

          <h2>What a Pantry Moth Trap Is, Mechanically</h2>
          <p>Strip the packaging away and a pantry moth trap is two things: a card coated in glue, and a small impregnated lure releasing a synthetic copy of the scent a female Indianmeal moth emits when she is ready to mate. Male moths follow that scent upwind, land on the card, and stay there. That is the entire mechanism, and understanding it tells you precisely what the product can and cannot do for you.</p>
          <p>It cannot catch females, because females are not looking for the female pheromone. It cannot affect eggs, which are laid in and around the food. And it has no reach at all into the larval stage &mdash; the cream-coloured, dark-headed caterpillars that are doing every bit of the damage, tunnelling through your rice and leaving the silk webbing that made you go looking in the first place. By the time an adult moth is flying around your kitchen light, it has already finished eating; adult Indianmeal moths barely feed at all. <strong>The moth you see is the symptom. The larva you have not found is the problem.</strong></p>
          <p>So why buy one? Because a pantry moth infestation is invisible for weeks at a time and you cannot manage what you cannot measure. The trap answers three questions nothing else will: is there a breeding population here or did one moth hitch a ride in a grocery bag; which room is it centred on, when moths have been drifting through three of them; and &mdash; the question that actually matters &mdash; is it over. There is also a secondary benefit worth having: removing males continuously suppresses successful mating over time, which slows a population down while your purge does the real work. That is a helpful side effect, not a strategy.</p>

          <p className="not-prose text-sm text-gray-600 mb-1">Check current Canadian availability of the short list worth buying:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="terro pantry moth traps">Pantry moth traps &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="airtight glass food storage containers set">Airtight containers &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="airtight pet food storage container with gasket lid">Sealed feed bins &rarr;</BuyLink>
          </div>

          <h2>How Many Traps, and Where They Go</h2>
          <p>One or two per affected room. This is the opposite of the instinct most people have, which is to blanket the kitchen once they realise there is a problem, and the reason to resist it is that these lures are strong. Saturate a small kitchen with pheromone and every card catches something, which feels productive and tells you nothing about where the source is. A sparse, deliberate trap line is a measuring instrument. A dense one is a fog.</p>
          <p>Placement rules that make the readings usable:</p>
          <ul>
            <li><strong>Near the cupboard, not inside it.</strong> A trap sealed in a cupboard only samples that cupboard&rsquo;s air. On top of the fridge, on an open shelf, or on the counter beside the pantry door lets the lure disperse and pulls males in from the room.</li>
            <li><strong>One per additional room where you have seen a moth.</strong> Adults get carried around a house on clothing, in tote bags and on packaging far more than people expect, and a catch in the spare bedroom is meaningful information about a second source.</li>
            <li><strong>Away from direct sun, heat vents and cooking steam</strong>, all of which shorten lure life and give you a false all-clear.</li>
            <li><strong>Label the card with the date you set it.</strong> Sounds fussy, works: an expired lure and an eliminated infestation produce the identical empty card, and this is the single most common way people conclude they are finished when they are not.</li>
            <li><strong>Do not put a trap next to the food you are trying to protect.</strong> You are drawing moths toward it. Keep a metre or two of separation from open shelving.</li>
          </ul>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="terro pantry moth traps">Check pantry moth traps on Amazon.ca &rarr;</BuyLink>
          </div>

          <h2>The Purge: The Hour That Actually Ends It</h2>
          <p>Nothing on the shelf substitutes for this, so here it is in order. Set aside an hour and do the whole cupboard in one pass &mdash; a partial purge is why people end up doing three of them.</p>
          <ol>
            <li><strong>Empty the cupboard completely.</strong> Everything out onto the counter. Not &ldquo;the shelf where the problem is&rdquo; &mdash; all of it. Larvae wander, and the box that looks fine is frequently the one with eggs on the fold of the liner.</li>
            <li><strong>Inspect every dry good.</strong> You are looking for silk webbing, clumped or matted grains, tiny cream caterpillars with a dark head, fine sand-like frass, or a musty smell. Check the folds of bag seams and under cardboard flaps &mdash; that is where eggs sit. Nuts, dried fruit, birdseed, pet food, spices, rice, oats, flour, pasta, chocolate, and anything with a grain or seed component.</li>
            <li><strong>Bag the infested items and take them outside.</strong> Into an outdoor bin, immediately. A bag left under the kitchen sink until bin day is a nursery with a view of your cupboard.</li>
            <li><strong>Vacuum the empty cupboard properly.</strong> This is the step that decides whether you are back here in three weeks. Mature larvae leave the food and crawl &mdash; often several metres &mdash; to spin cocoons somewhere dry and tight. Run a crevice nozzle into every shelf-support hole, along the underside lip of each shelf, into the back corners, along the seam where the cupboard meets the wall, and across the ceiling&ndash;wall junction of the room. Lift and discard loose shelf liner rather than vacuuming around it.</li>
            <li><strong>Empty the vacuum outdoors</strong>, or bag and bin the vacuum bag. Otherwise you have relocated the pupae to your hall closet.</li>
            <li><strong>Wipe the shelves</strong> with hot soapy water or a vinegar solution and let them dry. This is housekeeping, not pest control &mdash; it removes egg residue and frass. It is not a treatment and does not need to be a chemical.</li>
            <li><strong>Restock into rigid airtight containers only.</strong> Anything that goes back in a paper bag or cardboard box is a future infestation waiting for a delivery.</li>
          </ol>
          <p>Then reset a fresh trap and read the card weekly. You are watching a trend line, not a single moth.</p>

          <h2>Why Containers Are the Real Product, Not the Traps</h2>
          <p>Pantry moth larvae chew through paper, cardboard, cellophane, and thin plastic film. That is not a rare event or an exceptional infestation &mdash; it is ordinary behaviour, and it is why finding larvae inside a factory-sealed box is normal. They also crawl under lids that do not truly seal and into the threads of a screw top that is not gasketed.</p>
          <p>What excludes them is rigid and sealed: glass jars with clamp or gasketed screw lids, thick plastic canisters with a silicone seal, metal tins with a positive-closing lid. Zipper bags, chip clips, folded-over bag tops and the original packaging are all permeable to this insect. This is the reason a container set deserves more of your budget than a bigger box of traps, and it does two jobs at once: it keeps an outside infestation out, and it contains the next one that arrives inside a package to a single jar instead of letting it spread down an entire shelf. Glass has a further advantage that sounds trivial and is not &mdash; you can see the webbing start.</p>
          <p>Extend the same thinking past the kitchen. The bulk bag of birdseed in the garage, the sack of dog kibble in the basement, and the warehouse-club flour on the utility shelf are the three sources that defeat repeat purges, because nobody thinks of them as food. A gasketed bin per bag closes the reservoir.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="airtight glass food storage containers set">Check airtight container sets on Amazon.ca &rarr;</BuyLink>
          </div>

          <h2>Salvaging Food You Do Not Want to Throw Out</h2>
          <p>The purge does not have to be expensive. Bin anything with visible webbing, clumping, larvae, or a musty smell &mdash; that food is finished, and the calculation is not close. But for undamaged items you are simply unsure about, freezing is the middle path: seal the item and hold it at about &minus;18&deg;C for several days, which kills eggs and larvae, then move it into a rigid airtight container. A standalone chest freezer holds that temperature reliably; a self-defrosting fridge-freezer cycles warmer, so give it extra days if that is what you have.</p>
          <p>Some people run new bulk purchases through the freezer as a matter of routine before they go in the jar. If you buy large bags of flour, rice or birdseed, that habit costs nothing and removes the most likely way this happens to you again.</p>

          <h2>What Not to Buy for Pantry Moths</h2>
          <p>Not buying these is worth more than most of what you could buy:</p>
          <ul>
            <li><strong>Mothballs, anywhere near food.</strong> Naphthalene and paradichlorobenzene are genuine pesticides whose Canadian labels are written for fabric articles in sealed containers, and whose whole mechanism is filling an enclosed space with a volatile chemical. A food cupboard is the wrong place for that by every measure &mdash; legality, taste, and health. This is the one item on the list that is not merely useless.</li>
            <li><strong>Bug bombs and total-release foggers.</strong> The aerosol settles on open surfaces. The larvae are inside sealed packages and the pupae are in cocoons wedged into shelf-support holes. You get residue on every surface you prepare food on and nothing where the insects live. Our <Link href="/blog/best-flea-bomb-canada">breakdown of why foggers fail</Link> covers the same physics in a different pest.</li>
            <li><strong>Ultrasonic plug-in repellers.</strong> No credible evidence for any household pest, and we have <Link href="/blog/ultrasonic-pest-repellers-do-they-work">taken this category apart in detail</Link>.</li>
            <li><strong>Cedar blocks, cedar rings and lavender sachets.</strong> Clothes-moth tradition, aimed at a different insect with a different diet. No established effect on Indianmeal moths.</li>
            <li><strong>Bay leaves, cloves, peppermint oil and the rest of the deterrent lists.</strong> Harmless, pleasant, and no substitute for a sealed jar. If a scent worked, the food industry would not be spending its money on pheromone monitoring.</li>
            <li><strong>A general crawling-insect spray for the shelves.</strong> Read the Canadian label before you consider it: these products routinely direct you to keep them off food, food-contact surfaces and food-preparation areas, which describes the room. It also cannot reach inside a package. If you use any pest product near food storage, check for a PCP registration number and confirm your intended use site is actually listed.</li>
            <li><strong>More traps, as an answer to steady catches.</strong> A trap that keeps catching is not failing. It is telling you the source is still in the building, and that is a purge problem, not a purchasing one.</li>
          </ul>

          <h2>Timing: Why This Is an Autumn Problem in Canada</h2>
          <p>Interest in pantry moths climbs through the fall and peaks around November in Canada, and the pattern has three ordinary causes stacked on top of each other. A population that arrived in a spring or summer package has had a warm house and several generations to build up by autumn. Fall is also when Canadian kitchens fill with exactly the goods these moths specialise in &mdash; baking flour, nuts, dried fruit, holiday chocolate, bulk grain &mdash; and when the birdseed comes back out. And heating season keeps a house comfortably warm, so development never slows the way it would in an unheated space.</p>
          <p>The practical version: if you are reading this in late summer, the cheapest possible intervention is to run a trap for two weeks before you restock the pantry for the fall, and to buy the containers before the flour rather than after the moths.</p>

          <h2>When to Stop Buying and Call Someone</h2>
          <p>For a normal household, pantry moths do not warrant a paid pest-control program, and we would rather lose the referral than pretend otherwise &mdash; BuzzSkito treats mosquitoes and ticks and does not sell pantry-moth service. The cure here is finding an infested package and buying containers, and no technician can spray into a sealed bag of flour. A quote for recurring kitchen treatment is answering a question you do not have.</p>
          <p>The situations that genuinely justify a call: a restaurant, bakery, grocery or any food premises, where insect presence is a compliance matter and the right professional is a stored-product specialist rather than a general exterminator; a multi-unit building where catches stay steady and the source is plausibly in a neighbouring suite or a shared storage room; or a household that has completed two thorough purges and is still catching moths week after week, in which case what you are actually hiring is an inspection to find the hidden reservoir. For what general-pest work typically costs in Canada, so you can sanity-check any quote you are given, see our <Link href="/pest-control-cost-canada">Canadian pest control cost guide</Link>.</p>

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

          <h2>Related Guides</h2>
          <ul>
            <li><Link href="/blog/how-to-get-rid-of-fruit-flies">How to Get Rid of Fruit Flies in Canada — Find the Source, Break the 8-Day Cycle</Link></li>
            <li><Link href="/blog/best-fruit-fly-trap-canada">Best Fruit Fly Trap in Canada — What Actually Catches Them</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-fungus-gnats-houseplants">Fungus Gnats in Houseplants — The Watering Fix</Link></li>
            <li><Link href="/blog/best-silverfish-traps">Silverfish Traps in Canada — Which Type, How Many, Where They Go</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-mice-canada">How to Get Rid of Mice in Canada — Exclusion First</Link></li>
            <li><Link href="/blog/ultrasonic-pest-repellers-do-they-work">Do Ultrasonic Pest Repellers Work? The Honest Answer</Link></li>
            <li><Link href="/blog/diatomaceous-earth-canada-buyers-guide">Diatomaceous Earth in Canada — Which Brands Are PMRA-Registered</Link></li>
            <li><Link href="/pest-control-cost-canada">Pest Control Cost Canada — What Professionals Charge</Link></li>
          </ul>

          <div className="not-prose mt-10 rounded-xl border border-navy-100 bg-brand-50 px-5 py-4">
            <p className="text-sm text-brand-900">
              <Link href="/pest-product-guides" className="font-bold text-emerald-700 hover:text-emerald-800 underline">More independent Canadian pest product research &rarr;</Link>
            </p>
          </div>
        </div>
      </article>

      <CTASection
        heading="Mosquitoes and Ticks Are Our Actual Job"
        subtext="We don't treat pantry moths — but if it's your yard rather than your cupboard that's the problem, we cover 19 GTA cities with a free assessment."
      />
    </>
  )
}
