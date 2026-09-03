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
import AdjacentPestCTA from '@/components/AdjacentPestCTA'
import { tagForSlug } from '@/lib/amazon-clusters'

const SLUG = 'earwig-traps-indoor-canada'
const DATE = '2026-08-31'
const UPDATED = '2026-08-31'
const TITLE = 'Earwig Traps for Indoors in Canada — The Oil-Dish Trap That Works, and Why Sprays Do Not'
const META_TITLE = 'Indoor Earwig Traps Canada: What Works'

const FAQS = [
  {
    question: 'What is the best indoor earwig trap?',
    answer: 'A shallow dish of vegetable oil with a splash of soy sauce, set at floor level against the wall where you have been finding earwigs — it outperforms everything you can buy for this specific insect. The soy sauce is the attractant (earwigs track the fermented smell), the oil is the trap (they climb in and cannot climb back out), and the whole thing costs pennies. Empty and refill every few days. Back it up with flat sticky traps along baseboards and door thresholds to intercept wanderers, and a rolled damp newspaper as a shelter trap you shake out each morning. Indoors, that trio removes the earwigs that are already inside faster than any spray, because indoor earwigs are transient visitors rather than a breeding colony.',
  },
  {
    question: 'How do I make the oil and soy sauce earwig trap?',
    answer: 'Take a shallow container — a tuna can, a jar lid, a small plastic tub with the sides trimmed to a couple of centimetres — and pour in vegetable oil to about a centimetre deep, then add a teaspoon or so of soy sauce. Set it flush against the wall at floor level in the room where earwigs turn up: the basement, the kitchen kick space, beside the door they enter under. Earwigs forage at night, follow the fermented smell, climb in, and the oil holds them. Check it every morning, empty it into the compost or toilet every few days, and refill. Outdoors the same trap works sunk into garden soil so the rim sits at ground level — the classic version gardeners have used for decades.',
  },
  {
    question: 'Why are earwigs coming inside my house?',
    answer: 'Because conditions outside pushed them in. Earwigs live outdoors — in mulch, garden soil, leaf litter, and the damp zone along your foundation — and they enter houses in two predictable waves: during hot, dry midsummer spells, when their outdoor shelter dries out and they follow cool damp air under doors and through foundation gaps, and again in fall as temperatures drop. They are accidental guests, not settlers: an earwig indoors is usually a moisture refugee that wandered in overnight through a gap at floor level. That is why the durable fix is outside — managing the mulch and moisture band around your foundation and sealing the floor-level entries — while the traps handle the ones already in.',
  },
  {
    question: 'Do earwigs really pinch? Does it hurt?',
    answer: 'They can, and it is nothing. The pincers (cerci) at an earwig’s rear are used against other insects and for courtship, and an earwig picked up and held will sometimes give a defensive squeeze. From a large male it registers as a brief pinch that rarely breaks skin; there is no venom, no sting, and no medical follow-up to think about — soap and water covers it. Earwigs do not seek people out, do not bite unprovoked, and are not dangerous to children or pets. The menacing look of the pincers is the entire basis of the insect’s bad reputation, and it writes cheques the animal cannot cash.',
  },
  {
    question: 'Do earwigs crawl into your ears?',
    answer: 'No — the name is folklore, centuries old, and no more true of earwigs than of any other small insect. Earwigs have no interest in human ears; they want cool, damp, tight spaces with organic matter, which describes your garden mulch precisely and your ear canal not at all. On the extremely rare occasions any insect wanders into a sleeping person’s ear, an earwig is no more likely a culprit than a fly or a beetle. They also do not burrow into brains, lay eggs in people, or any of the rest of the folklore. The real case against indoor earwigs is simply that nobody wants to share a kitchen with them — which the traps on this page solve.',
  },
  {
    question: 'Do sticky traps work for earwigs?',
    answer: 'Yes, as the interception layer. Earwigs travel at floor level along the wall edge, the same highway as silverfish and centipedes, so flat glue boards flush against the baseboard — especially just inside exterior doors, along the basement perimeter, and under sinks — catch the ones commuting through. In the pattern reported across Ontario homes and gardens, the oil-dish trap out-catches sticky boards for earwigs specifically because the soy sauce actively draws them, while a glue board only intercepts. Run both: the dish where earwigs concentrate, boards along the routes. Sticky boards also double as a census of everything else walking your baseboards, which is worth having anyway.',
  },
  {
    question: 'Why is spraying indoors pointless for earwigs?',
    answer: 'Because indoor earwigs are visitors, not residents. An earwig in your kitchen almost certainly hatched in the garden, wandered in under a door within the last day or two, and would have died or wandered back out within days — indoor Canada is too dry for them, and they do not breed in the house. Spraying a residual insecticide along your baseboards to kill transient individuals is using a permanent tool on a temporary problem: you add chemical to your living space and the next hot week pushes a fresh batch under the same unsealed door. The leverage is at the entry (door sweeps, sealed gaps) and outside (the moisture band at the foundation), with traps mopping up indoors.',
  },
  {
    question: 'When is earwig season in Ontario?',
    answer: 'Indoor sightings cluster in two windows. The first is high summer — July and August — when hot dry spells desiccate the mulch and soil where earwigs shelter, and they migrate toward the cool damp air leaking from under your doors. The second is fall, September into October, as night temperatures drop and earwigs, along with boxelder bugs, cluster flies, and other overwintering opportunists, probe the warm side of the building envelope. Populations also swing year to year: a mild winter followed by a damp spring produces the big earwig years. The practical calendar: run traps and check door seals in July, and re-check the seals in September as part of general fall pest-proofing.',
  },
  {
    question: 'How do I keep earwigs out of the house permanently?',
    answer: 'Work the band of ground touching your foundation, because that is where your indoor earwigs all come from. Pull mulch back so a hand-width of bare, dry ground separates it from the wall — mulch piled against the foundation is an earwig dormitory with an adjoining door. Water gardens in the morning rather than the evening so the perimeter is dry by night, fix downspouts that dump beside the wall, lift stored firewood and stepping stones near entrances, and trim ground covers back from the sill line. Then close the entries: exterior-grade door sweeps on any door showing daylight underneath, silicone sealant in foundation cracks and around pipe penetrations, and repaired window-well screens. That combination ends the indoor problem in almost every house.',
  },
  {
    question: 'Do earwigs lay eggs or start an infestation inside the house?',
    answer: 'Practically never. Earwigs nest in soil — females dig a small chamber, overwinter in it, and tend their eggs there in spring, which is behaviour a heated Canadian house with no soil simply cannot host. Indoor conditions are also too dry for earwigs to thrive long-term. What can happen is a steady stream that looks like an infestation: if the foundation band outside is damp and sheltering hundreds, and a door gap keeps admitting a few each night, you can find earwigs daily all summer without a single one breeding indoors. The response is the one this page describes — traps inside, sealing at the threshold, and drying the perimeter — not an interior treatment program.',
  },
  {
    question: 'What are earwigs doing in my kitchen and bathroom specifically?',
    answer: 'Following moisture, which is the only thing an earwig indoors is ever doing. Kitchens and bathrooms hold the dampest microclimates in the house — the sink cabinet with its faint plumbing humidity, the dishcloth over the tap, potted plants, the bathmat, condensation zones behind the toilet — and an earwig that came in under the front door will end up wherever the moisture gradient leads it. A dish trap in the sink cabinet and a sticky board behind the toilet cover the two classic discovery points. If you are finding them in numbers in these rooms, also check for the slow leak that is keeping a cabinet damp — the earwigs are, in their way, reporting it.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'Indoor earwig traps that work in Canada: the oil-and-soy-sauce dish trap, rolled damp newspaper, sticky boards — and why indoor sprays are usually pointless.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug(SLUG)

export default function EarwigTrapsIndoorCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Independent Canadian guide to trapping earwigs indoors — the oil-and-soy-sauce dish trap, rolled damp newspaper shelter traps, sticky boards at the thresholds, why earwigs come in during hot spells and fall, the pincer fear versus reality, and why the durable fix is the foundation band outside.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Indoor Earwig Traps Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Indoor Earwig Traps</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">The trap that beats every product on the shelf is a dish of oil with a splash of soy sauce. Here is how to run it, the newspaper trick that clears a room by morning, where sticky boards fit, why earwigs are coming in at all — and why the can of spray is the one purchase to skip.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <AffiliateDisclosure />
      <StickyBuyBar tag={AMZ_TAG} name="Crawling insect sticky traps (multi-pack)" search="sticky traps crawling insects indoor" label="The interception layer" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">The best indoor earwig trap is a <strong>shallow dish of vegetable oil with a splash of soy sauce</strong>, set at floor level against the wall where earwigs appear — the soy sauce draws them, the oil keeps them, and it costs pennies. Support it with <strong>flat sticky traps</strong> just inside exterior doors and along the basement baseboards, and a <strong>rolled damp newspaper</strong> left out overnight as a shelter trap you shake into soapy water each morning. Skip indoor sprays: earwigs indoors are <strong>transient moisture refugees, not a breeding colony</strong>, so the lasting fix is a door sweep at the threshold and a drier band of ground along the foundation — pull the mulch back a hand-width and water in the morning, not at night.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li><strong>Oil dish where they gather, sticky boards where they travel</strong> — the dish attracts, the boards intercept.</li>
              <li><strong>They come in during hot dry spells and again in fall</strong> — July–August and September–October are the two waves.</li>
              <li><strong>The pincers are theatre.</strong> A defensive squeeze at worst, no venom — and the ear thing is pure folklore.</li>
              <li><strong>No indoor breeding.</strong> Earwigs nest in soil; a house cannot host an earwig colony, only a stream of visitors.</li>
              <li><strong>The permanent fix is outside:</strong> mulch pulled back from the foundation, morning watering, sealed floor-level gaps.</li>
              <li><strong>Total spend can be under $40</strong> — traps and a door sweep; the dish trap is free.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito Pest Product Guides &middot; independent Canadian research</p>
          </div>
          <SpecialistDisclosure pest="earwigs" />
        </div>
      </section>

      <section className="bg-white px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <AwardRow tag={AMZ_TAG}
            heading="Our Picks — The Indoor Earwig Kit"
            awards={[
              {
                badge: 'Best Interception',
                name: 'Flat Sticky Traps, Multi-Pack',
                why: 'The bought half of the trap plan. Laid flush along baseboards and just inside exterior doors, glue boards intercept earwigs commuting at floor level — and double as a census of the silverfish and centipedes often using the same routes. The oil dish out-attracts them; the boards out-cover them.',
                search: 'sticky traps crawling insects indoor',
                score: 8.5,
                featured: true,
                pros: ['Covers every entry threshold cheaply', 'Doubles as a monitor for other basement crawlers', 'No setup beyond peeling a liner'],
                cons: ['Intercepts rather than attracts — placement is everything', 'Dusty floors reduce the tack quickly'],
              },
              {
                badge: 'Best Entry Fix',
                name: 'Exterior Door Sweep',
                why: 'Nearly every indoor earwig arrived under a door. A weatherproof sweep on any exterior door showing daylight at the threshold ends the nightly admissions in ten minutes of screwdriver work — the highest-leverage ten dollars in this entire topic, and it pays again in drafts, dust, and mice-scale gaps.',
                search: 'exterior door sweep weatherproof',
                score: 9.0,
                pros: ['Cuts off the main entry route outright', 'Also excludes silverfish, centipedes, and fall invaders', 'Ten-minute install with a screwdriver'],
                cons: ['Uneven old sills need the adjustable style', 'Garage-to-house doors are often the forgotten one'],
              },
              {
                badge: 'Best Residual',
                name: 'Food-Grade Diatomaceous Earth',
                why: 'For the gaps you cannot caulk shut, a barely-visible film of DE at the threshold line and along the sill plate desiccates earwigs that squeeze through. Physical action, no resistance, months of life — as long as it stays bone dry, which indoors at the door line it usually does.',
                search: 'diatomaceous earth food grade',
                score: 8.1,
                pros: ['Months of passive protection at entry lines', 'Also works on the other floor-level crawlers', 'One bag does the whole house many times over'],
                cons: ['Inert if it gets damp', 'Needs a thin, deliberate application — not a poured ribbon'],
              },
              {
                badge: 'Best Diagnostic',
                name: 'Digital Hygrometer (2-Pack)',
                why: 'Earwigs indoors follow moisture gradients, so persistent sightings in one room are worth a number. A hygrometer in the basement or under-sink zone that reads high explains the traffic and flags the slow leak or damp corner the earwigs found before you did.',
                search: 'digital hygrometer indoor humidity',
                score: 8.0,
                pros: ['Explains why one room keeps producing earwigs', 'Flags the damp that also invites silverfish', 'Cheapest diagnostic in pest control'],
                cons: ['A tool for persistent cases, not a first purchase', 'Reads air, not the inside of the wall'],
              },
            ]}
            whichToBuy={
              <>
                <strong>Finding an earwig or two a week in summer?</strong> Make the free oil-dish trap tonight and buy nothing yet. <strong>Finding them daily, or in several rooms?</strong> The <em>Best Interception</em> sticky boards for the thresholds and basement run, and the <em>Best Entry Fix</em> door sweep for whichever door shows daylight &mdash; that pairing ends most Ontario earwig problems inside two weeks. <strong>Old house with gaps you cannot all seal?</strong> Add the <em>Best Residual</em> DE at the sill line. <strong>One room that never stops producing them?</strong> The <em>Best Diagnostic</em> hygrometer &mdash; persistent earwigs are usually reporting a damp problem worth knowing about anyway.
              </>
            }
          />
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />

          <h2>The Trap That Works Is the One You Make</h2>
          <p>Earwig control is a rare corner of pest control where the best tool cannot be bought, because it is a dish from your recycling bin. A shallow container — tuna can, jar lid, margarine tub with the sides trimmed down — filled with a centimetre of vegetable oil and a teaspoon of soy sauce, set flush against the wall at floor level, will out-catch any product on the shelf for this specific insect. The soy sauce is the engine: earwigs are scavengers with a strong nose for fermented, savoury odours, and they will track it across a room. The oil is the exit problem: an earwig that climbs in cannot climb back out through it.</p>
          <p>Run the dish where earwigs concentrate rather than where you happen to have space: the under-sink cabinet, the basement floor beside the walkout, the kick space near the door they come in under, behind the toilet. Check it in the morning — a working dish in earwig season collects overnight — empty it every few days, and refill. Total cost, effectively zero; total technique, none. Gardeners have run the same trap sunk into the soil for decades, and the indoor version loses nothing in translation.</p>

          <p className="not-prose text-sm text-gray-600 mb-1">Check current Canadian availability of the bought half of the kit:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="sticky traps crawling insects indoor">Sticky trap multi-packs &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="exterior door sweep weatherproof">Exterior door sweeps &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="diatomaceous earth food grade">Food-grade DE &rarr;</BuyLink>
          </div>

          <h2>The Newspaper Trick, and Where Sticky Boards Fit</h2>
          <p>Two supporting traps round out the indoor line. The first is the oldest one in the book: a sheet of newspaper, dampened, rolled loosely into a tube, and left on the floor overnight where earwigs have been active. Earwigs spend their days wedged into tight, damp crevices, and a damp paper roll is a purpose-built one — by morning it is a dormitory. Pick it up wearing the healthy scepticism the moment deserves, and shake it out into a bucket of soapy water or a sealed bag. A section of damp corrugated cardboard works identically, the corrugations playing the crevices. It is a harvesting trap: cheap, oddly satisfying, and at its best during a July surge when a room is producing several earwigs a night.</p>
          <p>The second is the flat sticky trap, and its role is interception rather than attraction. Earwigs travel at floor level along the wall edge — the same baseboard highway as <Link href="/blog/best-silverfish-traps">silverfish</Link> and <Link href="/blog/how-to-get-rid-of-centipedes-canada">house centipedes</Link> — and glue boards flush against that route, especially just inside every exterior door, catch the commuters. In the pattern reported across Ontario homes, the oil dish out-catches boards head-to-head for earwigs because it actively draws them, but boards cover ground the dish cannot: every threshold, the full basement perimeter, under both sinks. Run both, and read the boards as a census while you are at it — what else is stuck to them tells you what else is using your baseboards.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="sticky traps crawling insects indoor">Check sticky trap multi-packs on Amazon.ca &rarr;</BuyLink>
          </div>

          <h2>Why They Are Coming In: Two Waves, Both Predictable</h2>
          <p>Earwigs are outdoor animals. They live in the damp organic layer — garden mulch, leaf litter, soil crevices, the shaded strip along your foundation — and a Canadian house interior is, from an earwig&rsquo;s point of view, a desert with unfortunate lighting. They come inside anyway in two predictable waves, and both are about moisture, not food.</p>
          <p><strong>The midsummer wave</strong> arrives during hot, dry spells in July and August. When a heat wave desiccates the mulch and the top layer of soil, the resident earwig population loses its habitat and follows the gradient of cool, damp air — which leaks conveniently from under your exterior doors. This is the wave that produces the classic experience of an earwig in the kitchen sink every morning for two weeks, and it ends when the weather breaks or the door gets a sweep, whichever comes first.</p>
          <p><strong>The fall wave</strong> runs September into October, as night temperatures drop and earwigs probe the warm side of the building envelope along with the season&rsquo;s other opportunists — <Link href="/blog/how-to-get-rid-of-boxelder-bugs-canada">boxelder bugs</Link> and <Link href="/blog/how-to-get-rid-of-cluster-flies-canada">cluster flies</Link> among them. The same floor-level gaps admit all of them, which is why the sealing work below pays for itself several pests over.</p>
          <p>Populations also swing hard year to year — a mild winter followed by a damp spring sets up the big earwig summers — so a bad year on your street is weather, not a verdict on your housekeeping.</p>

          <h2>The Pincer Question, Answered Honestly</h2>
          <p>No insect in a Canadian house carries a worse reputation-to-reality ratio. The rear pincers — cerci, properly — are genuine equipment: earwigs use them against other insects and in courtship displays. Against a human they amount to a defensive squeeze from an animal a centimetre and a half long. A large male earwig, picked up and held, can deliver a pinch you will feel; it has no venom, almost never breaks skin, and calls for nothing beyond soap and water. Earwigs do not attack, do not seek people out, and are harmless to children and pets in any realistic scenario.</p>
          <p>As for the name: the ear story is centuries-old folklore, and false. Earwigs want cool, damp, tight spaces lined with organic matter — a description your garden mulch matches perfectly and your ear does not. They do not burrow into ears, brains, or anything else attached to you. The honest case against indoor earwigs is simply that they are unwelcome — they can nibble houseplants and stored produce at the margins, and nobody wants them in the dishcloth — and the traps on this page are the proportionate response to that honest case.</p>

          <h2>Why Indoor Sprays Are Usually Pointless</h2>
          <p>Here is the reasoning, because it changes where you spend. A residual insecticide earns its keep against pests that live indoors — a trail, a nest, a harbourage that treated surfaces can work on over weeks. Indoor earwigs have none of that. Each one you see hatched outdoors, came in under a door within the past day or two, and is on a dead-end excursion: the house is too dry for it, there is no soil to nest in, and earwigs do not establish indoor colonies — the female needs a soil chamber to overwinter and brood her eggs, which no heated Canadian house provides.</p>
          <p>Spray the baseboards and you have applied a weeks-long chemical answer to individuals with a days-long indoor lifespan, while the unsealed door keeps admitting replacements every warm night. The leverage sits at the threshold and outside it. If you want a residual anyway for gaps you cannot seal, a thin film of food-grade diatomaceous earth at the sill line is the defensible version — physical action, no odour, months of life indoors where it stays dry — and our <Link href="/blog/best-earwig-killer-canada">earwig traps and killers guide</Link> covers the PMRA-registered options for the outdoor perimeter, which is the only place a labelled product makes strategic sense.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="diatomaceous earth food grade">Check food-grade DE on Amazon.ca &rarr;</BuyLink>
          </div>

          <h2>The Permanent Fix Is the Metre of Ground Outside Your Wall</h2>
          <p>Every earwig you trap indoors was manufactured in the damp band where your garden meets your foundation, so the durable work happens there. Four adjustments, one weekend:</p>
          <p><strong>Pull the mulch back.</strong> Mulch piled against the foundation is an earwig dormitory with an adjoining door to your house. Rake it back so a hand-width of bare, dry ground separates mulch from wall — the dry strip is a desert earwigs are reluctant to cross, and it also takes pressure off the house from millipedes, sowbugs, and ants.</p>
          <p><strong>Water in the morning.</strong> Evening watering leaves the perimeter damp through the hours earwigs forage; morning watering lets it dry by dusk. Same water, different pest pressure. While you are at it, fix the downspout that dumps beside the wall and the dripping outdoor tap — permanent wet spots are permanent earwig habitat.</p>
          <p><strong>Lift the shelter.</strong> Firewood stacked at the back door, stepping stones and board edging beside thresholds, dense ground cover grown over the sill line — each is daytime earwig housing within a metre of an entrance. Move the wood up and away, and open a gap between plantings and the wall.</p>
          <p><strong>Close the entries.</strong> An exterior-grade door sweep on every door that shows daylight underneath — the garage-to-house door is the one everybody forgets — silicone sealant in foundation cracks and around pipe penetrations, and intact screens in the basement window wells. This is the same afternoon of work that excludes the rest of the floor-level cast, and the full walkthrough lives in our <Link href="/blog/how-to-get-rid-of-earwigs-canada">complete earwig guide</Link>.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="exterior door sweep weatherproof">Check exterior door sweeps on Amazon.ca &rarr;</BuyLink>
          </div>

          <h2>Indoor Earwig Control — Key Facts</h2>
          <div className="not-prose rounded-xl border border-navy-100 overflow-x-auto my-6">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Best indoor trap', 'Shallow dish of vegetable oil + a splash of soy sauce, at floor level against the wall'],
                  ['Best harvesting trap', 'Rolled damp newspaper or corrugated cardboard, shaken out each morning'],
                  ['Best bought trap', 'Flat sticky boards flush along baseboards and inside every exterior door'],
                  ['Why they come in', 'Moisture refugees — hot dry spells in July–August, then the September–October cool-down'],
                  ['Do they breed indoors?', 'No — females need a soil chamber; a house gets visitors, never a colony'],
                  ['The pincers', 'Defensive squeeze at worst; no venom, no medical significance'],
                  ['The ear myth', 'Folklore, centuries old, false'],
                  ['Why skip indoor sprays', 'Days-long transient visitors give a weeks-long residual nothing to work on'],
                  ['Defensible residual', 'Thin film of food-grade DE at sill and threshold lines — dry spots only'],
                  ['The permanent fix', 'Mulch pulled back a hand-width, morning watering, shelter lifted, door sweeps on'],
                  ['Typical spend', 'Under $40 bought (boards + sweep); the best trap is free'],
                ].map(([k, v]) => (
                  <tr key={k} className="border-b border-navy-50 last:border-0">
                    <td className="px-4 py-2 font-semibold text-brand-800 bg-brand-50 w-1/3">{k}</td>
                    <td className="px-4 py-2 text-gray-700">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

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
            <li><Link href="/blog/how-to-get-rid-of-earwigs-canada">How to Get Rid of Earwigs in Canada &mdash; The Complete Guide</Link></li>
            <li><Link href="/blog/best-earwig-killer-canada">Earwig Traps and Killers in Canada &mdash; What to Buy, What to Make Instead</Link></li>
            <li><Link href="/blog/best-silverfish-traps">Silverfish Traps in Canada &mdash; The Other Baseboard Crawler</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-centipedes-canada">House Centipedes in Canada &mdash; Kill the Prey, Not the Predator</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-boxelder-bugs-canada">How to Get Rid of Boxelder Bugs in Canada</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-cluster-flies-canada">How to Get Rid of Cluster Flies in Canada</Link></li>
          </ul>

          <div className="not-prose mt-10 rounded-xl border border-navy-100 bg-brand-50 px-5 py-4">
            <p className="text-sm text-brand-900">
              <Link href="/pest-product-guides" className="font-bold text-emerald-700 hover:text-emerald-800 underline">More independent Canadian pest product research &rarr;</Link>
            </p>
          </div>
        </div>
        <AdjacentPestCTA pest="earwigs" />
      </article>
    </>
  )
}
