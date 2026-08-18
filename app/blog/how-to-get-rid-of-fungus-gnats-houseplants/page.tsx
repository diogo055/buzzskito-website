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

const SLUG = 'how-to-get-rid-of-fungus-gnats-houseplants'
const DATE = '2026-07-21'
const UPDATED = '2026-07-21'
const TITLE = 'How to Get Rid of Fungus Gnats in Houseplants — The Fix That Actually Works'
const META_TITLE = 'Fungus Gnats in Houseplants: The 3-Step Fix'

const FAQS = [
  {
    question: 'What kills fungus gnats the fastest?',
    answer: 'The fastest complete kill is the combo: yellow sticky cards to knock down the flying adults immediately, plus a BTI larvicide (such as Summit Mosquito Bits steeped into your watering can) to kill the larvae in the soil — the part every quick fix misses. Adults live only about a week and die off on their own; the infestation persists because larvae in the potting mix keep producing new adults every few days. Kill the larvae with BTI, intercept the adults on sticky cards, let the top of the soil dry out, and a typical infestation collapses within two to four weeks — roughly one full life cycle.',
  },
  {
    question: 'Where do fungus gnats come from in the first place?',
    answer: 'Almost always one of three doors: a newly purchased plant whose nursery soil already contained eggs or larvae, a bag of potting mix that was stored open or damp, or adults slipping in through screens toward light on humid days. Greenhouse-grown plants are the most common source — commercial growing conditions (warm, damp, peat-rich media) are ideal fungus gnat habitat. That is why quarantining new plants away from your collection for two weeks, and storing potting soil sealed in a tote, prevents most infestations before they start.',
  },
  {
    question: 'How do I tell fungus gnats from fruit flies?',
    answer: 'Location and look. Fungus gnats are mosquito-like — slender dark grey-black bodies, long legs, weak clumsy flight — and hover around potted plants, running when you disturb the soil surface. Fruit flies are stockier, tan-to-brown with red eyes, fly more strongly, and cluster around fruit, drains, and recycling bins rather than plants. The fix is completely different: fruit flies need the food source removed and a vinegar-style trap, while fungus gnats need the soil dried out and larvae killed. If your swarm is in the kitchen and ignores your plants, see our fruit fly guide instead.',
  },
  {
    question: 'Do fungus gnats actually damage houseplants?',
    answer: 'Adults are harmless — annoying, but they do not bite people or pets and do not chew leaves. The larvae are the real issue: they feed primarily on fungi and decaying organic matter in the soil, but in heavy infestations they also graze on root hairs and tender young roots. Mature, established plants usually shrug this off. Seedlings, cuttings, and stressed plants can be visibly set back — yellowing, wilting, and slow growth — and larval feeding wounds can open the door to root-rot pathogens. A light infestation is a nuisance; a heavy one in a propagation tray is a genuine plant-health problem.',
  },
  {
    question: 'Does hydrogen peroxide kill fungus gnats?',
    answer: 'Partially — and only the larvae it touches. A drench of 3% hydrogen peroxide diluted about 1 part peroxide to 4 parts water kills larvae on contact as it fizzes through the top layer of soil, and at that dilution it will not harm most established plants. But it has zero residual effect: eggs that hatch the next day are unaffected, larvae deeper in the pot or in the drainage layer survive, and adults are untouched entirely. Treat it as a one-time knockdown that reduces the population, not a cure. BTI does the same job better because it keeps killing larvae for days and reaches the whole root zone through normal watering.',
  },
  {
    question: 'Do sticky traps alone get rid of fungus gnats?',
    answer: 'No — and this is the most common reason people conclude nothing works. Yellow sticky cards are excellent at two jobs: telling you how bad the infestation is (monitoring) and removing egg-laying adults before they reproduce (knockdown). But every adult on a card came from a larva in your soil, and the soil keeps producing replacements. Cards plus nothing is a treadmill. Cards plus a larval kill (BTI drench, dry-out protocol, bottom watering) is a pincer that ends the infestation. Use the cards as your scoreboard: when a fresh card stays nearly empty for a week, you have won.',
  },
  {
    question: 'Is BTI safe for houseplants, pets, and kids?',
    answer: 'BTI (Bacillus thuringiensis israelensis) is a naturally occurring soil bacterium and one of the most species-specific insect controls ever developed — it affects the larvae of fungus gnats, mosquitoes, and blackflies, and essentially nothing else. It does not harm humans, cats, dogs, birds, fish, earthworms, bees, or the plants themselves, which is why it is approved for residential use by both Health Canada’s PMRA and the US EPA, and why the same bacterium is used in drinking-water reservoirs in some jurisdictions. As with any pest control product, check the label of the specific product you buy — in Canada, look for the PCP registration number on the package — and follow its directions for houseplant use.',
  },
  {
    question: 'How do I use Mosquito Bits on houseplants for fungus gnats?',
    answer: 'Two ways. The steep method (our preference): add roughly 4 tablespoons of Bits per gallon (about 4 litres) of water, let them soak 30 minutes to release the BTI, strain if you like, and use that water for your normal watering. Repeat with each watering for 2 to 3 weeks so every hatch of larvae meets treated soil. The top-dress method: sprinkle Bits on the soil surface and water through them — simpler, but the corn-cob granules can briefly grow a harmless white fuzz as they break down, which alarms people. Either way, verify the directions on your package’s label, since label rates are the ones actually tested and approved.',
  },
  {
    question: 'Does a sand or gravel top dressing stop fungus gnats?',
    answer: 'Mostly no, despite being the most-shared tip on plant social media. The theory is sound — adults lay eggs in the top layer of moist soil, so a dry barrier should stop them — but in practice a thin sand layer cracks, pulls away from the pot rim, and stays moist underneath, and gnats exploit every gap. Worse, they will happily lay eggs through drainage holes at the bottom of the pot, bypassing the barrier entirely. A deep (2–3 cm) layer of coarse, fast-drying grit helps somewhat as one layer of a bigger strategy, but as a standalone fix it fails often enough that we can’t recommend it. Fix the moisture and kill the larvae instead.',
  },
  {
    question: 'How long does it take to get rid of fungus gnats completely?',
    answer: 'Plan on two to four weeks — roughly one full life cycle plus a margin. The egg-to-adult cycle runs about 3 to 4 weeks at typical room temperature (eggs hatch in ~3 days, larvae feed for ~2 weeks, pupae emerge as adults ~4 days later), and no treatment kills every stage at once. BTI kills larvae but not eggs, pupae, or adults; sticky cards catch adults but nothing in the soil. That is why the combo needs to run continuously for 2–3 weeks: each stage gets intercepted as it arrives at the stage you can kill. Seeing a few adults in week two is normal, not failure.',
  },
  {
    question: 'Can fungus gnats survive winter? Why do I get them in December?',
    answer: 'Outdoors in a northern winter, no. Indoors, your home is a year-round greenhouse: warm rooms, moist potting soil, and reduced light that slows plant water use (so soil stays wet longer) make winter the peak season for fungus gnats in Canada and the northern US. The winter spike almost always traces to the same root cause — watering on a summer schedule while plants are drinking at a winter rate. Halving your watering frequency from November to March prevents most winter infestations by itself, and it is better for the plants too.',
  },
  {
    question: 'When should I just repot instead of treating?',
    answer: 'Repot when the soil itself is the problem: the mix stays soggy for a week or more after watering, smells sour or mushroomy, has visibly broken down into dense muck, or the infestation persists after a full 3-week combo treatment. Slide the plant out, shake and gently rinse the old soil off the roots, trim any brown mushy roots, wash the pot with hot soapy water, and repot into fresh mix straight from a sealed bag — ideally cut with extra perlite for drainage. Bag the old soil and get it out of the house; a bin of infested soil indoors will re-seed every plant you just cleaned.',
  },
  {
    question: 'Do fungus gnat sprays work?',
    answer: 'Aerosol sprays kill the adults you hit and nothing else — the larvae in the soil are untouched, so the swarm is back within days. They are the least useful tool for this pest, and spraying insecticides repeatedly around indoor living spaces is exactly the kind of overkill this problem does not need. Regulations also differ by country: products marketed for gnats in US stores are not necessarily registered for sale in Canada, so Canadian readers should check for a PCP registration number on any insecticide label before buying. The good news is you almost certainly do not need a spray at all — moisture control, sticky cards, and BTI beat sprays on every axis.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'How to get rid of fungus gnats in houseplants for good: the dry-out and bottom-watering protocol, yellow sticky cards, BTI (Mosquito Bits) as the larval kill, the honest truth about sand top-dressing and hydrogen peroxide, and when to repot. Works in Canada and the US.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug('how-to-get-rid-of-fungus-gnats-houseplants')

export default function FungusGnatsHouseplantsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Independent guide to eliminating fungus gnats from houseplants: soil lifecycle, overwatering as root cause, bottom-watering and dry-out protocol, yellow sticky cards, BTI larvicide, sand and peroxide myth-busting, and repotting triggers.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'How to Get Rid of Fungus Gnats', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Fungus Gnats in Houseplants</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">The tiny black flies around your houseplants breed in the soil, not the air — which is why sprays and sticky cards alone never end it. Here is the two-front protocol that does: dry the soil, trap the adults, and kill the larvae with BTI.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <StickyBuyBar tag={AMZ_TAG} name="Summit Mosquito Bits (BTI larvicide granules)" search="summit mosquito bits" label="The larval kill" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">To get rid of fungus gnats in houseplants, attack both life stages at once: hang yellow sticky cards to remove the egg-laying adults, and water with a BTI larvicide (Summit Mosquito Bits steeped in your watering can) to kill the larvae living in the top few centimetres of potting soil. Let the top 3&ndash;5 cm of soil dry fully between waterings &mdash; overwatering is what created the habitat &mdash; and switch to bottom-watering so the surface stays dry. Run the combo for 2&ndash;3 weeks and the infestation collapses within one life cycle.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>Fungus gnat larvae live in the top 3&ndash;5 cm of moist soil eating fungi, decaying matter &mdash; and, in heavy infestations, root hairs.</li>
              <li>Adults live only about a week; the infestation persists because soil larvae produce a new wave every few days.</li>
              <li>Yellow sticky cards are your monitor and adult knockdown; BTI is the larval kill that actually ends the cycle.</li>
              <li>BTI is a naturally occurring bacterium that targets gnat and mosquito larvae only &mdash; it does not harm people, pets, or plants.</li>
              <li>Sand top-dressing and hydrogen peroxide drenches only partially work &mdash; honest breakdowns of both below.</li>
              <li>Expect 2&ndash;4 weeks to full elimination &mdash; one complete egg-to-adult cycle at room temperature.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito Pest Product Guides &middot; independent Canadian research</p>
          </div>
          <SpecialistDisclosure pest="fungus gnats" />
        </div>
      </section>

      <section className="bg-white px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <AwardRow tag={AMZ_TAG}
            heading="The Fungus Gnat Kit — What Actually Earns a Spot"
            awards={[
              {
                badge: 'The Larval Kill',
                name: 'Summit Mosquito Bits (BTI granules)',
                why: 'The tool that ends the infestation rather than trimming it. Steep the granules in your watering can and every watering delivers BTI to the larvae in the soil — the stage every other quick fix misses. A small container treats a whole plant collection for many rounds.',
                search: 'summit mosquito bits',
                score: 9.3,
                featured: true,
                pros: ['Kills the larvae — the actual source of new gnats', 'Targets gnat/mosquito larvae only; safe around kids, pets, and the plants themselves', 'One inexpensive container lasts a full multi-week protocol and beyond'],
                cons: ['Takes 2–3 weeks of repeat waterings to break the full cycle', 'Granules top-dressed on soil can grow a harmless (but alarming) white fuzz'],
              },
              {
                badge: 'Monitor + Knockdown',
                name: 'Yellow Sticky Trap Cards (multi-pack)',
                why: 'Fungus gnat adults are strongly drawn to yellow. Cards staked at soil level remove egg-laying adults on contact and double as your scoreboard — a fresh card that stays clean for a week is how you know you have won.',
                search: 'yellow sticky traps fungus gnats houseplants',
                score: 8.4,
                pros: ['Instant, visible progress — catches start within hours', 'Zero chemicals, zero odour; safe in any room', 'Dirt-cheap per card and the best monitoring tool available'],
                cons: ['Cannot end an infestation alone — the soil keeps producing adults', 'Glue catches dust and curious cat noses; place them thoughtfully'],
              },
              {
                badge: 'Device Supplement',
                name: 'Katchy Indoor Insect Trap',
                why: 'A UV-light-plus-fan-plus-glue-board device that quietly pulls flying adults out of the air overnight. Overkill for a light infestation, genuinely useful when a heavy one has gnats drifting across the whole room — and it earns its counter space against fruit flies too.',
                search: 'katchy indoor insect trap',
                score: 7.6,
                pros: ['Passive overnight capture of adults across a whole room', 'Quiet, low-power, no zapping — bedroom-friendly', 'Doubles against fruit flies and other small fliers year-round'],
                cons: ['Premium price for a supplement, not a cure', 'Does nothing about larvae — never buy it as the only fix'],
              },
            ]}
            whichToBuy={
              <>
                <strong>Everyone with an active infestation</strong> should run the same core combo: <em>Mosquito Bits</em> in the watering can plus <em>yellow sticky cards</em> at soil level &mdash; larval kill plus adult knockdown, for less than the cost of replacing one dead plant. <strong>Gnats drifting through the whole room, or a big plant collection?</strong> Add the <em>Katchy</em> to sweep adults from the air overnight &mdash; our <Link href="/blog/katchy-indoor-insect-trap-review-canada">full Katchy review</Link> covers where it shines and where it doesn&rsquo;t. <strong>Only seeing one or two gnats a week?</strong> Skip the device, buy the cards and Bits, and fix the watering habit below &mdash; that is the actual cure.
              </>
            }
          />
        </div>
      </section>

      <section className="bg-gradient-to-br from-emerald-50 to-white border-b border-emerald-200 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Every Method Compared &middot; Updated July 2026</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">Every Fungus Gnat Fix, Ranked Honestly</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            The internet offers a dozen fungus gnat cures. Most treat one life stage and ignore the other &mdash; which is why so many people cycle through all of them and conclude nothing works. Here is what each method actually does.
          </p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Method</th>
                  <th className="px-4 py-3 text-left">Kills larvae?</th>
                  <th className="px-4 py-3 text-left">Kills adults?</th>
                  <th className="px-4 py-3 text-left">Verdict</th>
                  <th className="px-4 py-3 text-left">Get it</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">Dry-out + bottom-watering<br /><span className="font-normal text-xs text-gray-500">Free — change how you water</span></td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Yes</strong> — removes the moist habitat eggs and larvae need</td>
                  <td className="px-4 py-3 text-gray-700">No</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Non-negotiable foundation</strong> — every other method fails without it</td>
                  <td className="px-4 py-3 text-xs text-gray-400">Free</td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">BTI larvicide<br /><span className="font-normal text-xs text-gray-500">Summit Mosquito Bits</span></td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Yes</strong> — biological kill of every larva that feeds on treated soil</td>
                  <td className="px-4 py-3 text-gray-700">No</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">The actual fix</strong> — repeat for 2&ndash;3 weeks to break the cycle</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="summit mosquito bits" block>Check price →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">Yellow sticky cards<br /><span className="font-normal text-xs text-gray-500">Staked at soil level</span></td>
                  <td className="px-4 py-3 text-gray-700">No</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Yes</strong> — removes egg-layers and shows you the trend</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Essential partner</strong> — knockdown + your progress scoreboard</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="yellow sticky traps fungus gnats houseplants" block>Check price →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">UV trap device<br /><span className="font-normal text-xs text-gray-500">Katchy</span></td>
                  <td className="px-4 py-3 text-gray-700">No</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Yes</strong> — passive room-wide capture overnight</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">Supplement</strong> — worth it for heavy infestations and big collections</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="katchy indoor insect trap" block>Check price →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">Hydrogen peroxide drench<br /><span className="font-normal text-xs text-gray-500">3% diluted 1:4 in water</span></td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">Partially</strong> — contact kill only, zero residual</td>
                  <td className="px-4 py-3 text-gray-700">No</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">One-time knockdown</strong> — reduces, never eliminates</td>
                  <td className="px-4 py-3 text-xs text-gray-400">Pharmacy staple</td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">Sand / gravel top-dress<br /><span className="font-normal text-xs text-gray-500">The social-media favourite</span></td>
                  <td className="px-4 py-3 text-gray-700">No — blocks some egg-laying at best</td>
                  <td className="px-4 py-3 text-gray-700">No</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-red-700">Mostly fails</strong> — gnats use gaps and drainage holes</td>
                  <td className="px-4 py-3 text-xs text-gray-400">Skip it</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-bold text-brand-800">Aerosol gnat spray<br /><span className="font-normal text-xs text-gray-500">Any brand</span></td>
                  <td className="px-4 py-3 text-gray-700">No</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">Only the ones you hit</strong></td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-red-700">Least useful tool</strong> — swarm returns within days</td>
                  <td className="px-4 py-3 text-xs text-gray-400">Skip it</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            In Canada, Mosquito Bits and yellow sticky cards are stocked at Canadian Tire, Home Depot Canada, Rona, garden centres, and Amazon.ca; in the US at the same big-box equivalents and Amazon.com. If a specific listing is out of stock it is a supply hiccup, not a ban &mdash; BTI products are approved for residential use on both sides of the border.
          </p>
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Fungus Gnats — Key Facts</h2>
          <div className="rounded-xl border border-navy-100 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['What they are', 'Tiny (3–4 mm) dark, mosquito-like flies; weak, clumsy fliers'],
                  ['Where larvae live', 'Top 3–5 cm of moist potting soil, eating fungi and organic matter'],
                  ['Plant damage', 'Larvae graze root hairs — seedlings and cuttings most at risk'],
                  ['Adult lifespan', 'About 1 week — they die fast; the soil keeps making more'],
                  ['Full life cycle', 'Roughly 3–4 weeks at room temperature'],
                  ['Root cause', 'Chronically moist soil surface — i.e., overwatering'],
                  ['The larval kill', 'BTI (Mosquito Bits steeped into watering water), repeated 2–3 weeks'],
                  ['The adult kill', 'Yellow sticky cards at soil level; UV trap device for heavy pressure'],
                  ['Partial fixes', 'Hydrogen peroxide drench (contact only), sand top-dress (usually fails)'],
                  ['When to repot', 'Soil stays soggy 7+ days, smells sour, or combo fails after 3 weeks'],
                  ['Prevention', 'Bottom-water, dry top layer between waterings, quarantine new plants, seal soil bags'],
                  ['Regulatory note', 'BTI is approved for home use in Canada and the US — in Canada, check for the PCP number on the label'],
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

          <h2>Know Your Enemy: The Life Cycle That Explains Everything</h2>
          <p>Every failed fungus gnat treatment fails for the same reason: it attacks the flies you can see and ignores the population you cannot. So before the protocol, thirty seconds of biology &mdash; because once you see the life cycle, the whole strategy becomes obvious.</p>
          <p>Adult fungus gnats are the tiny (3&ndash;4 mm) grey-black flies drifting weakly around your pots and, maddeningly, toward your face and screens &mdash; they are drawn to light and to the CO2 you exhale. Each female lives only about a week, but in that week she lays up to two hundred eggs in the top layer of moist potting soil. The eggs hatch in about three days into translucent, black-headed larvae that spend roughly two weeks in the top 3&ndash;5 centimetres of soil eating what the species is named for: fungi and decaying organic matter. In a heavily infested pot, they also graze root hairs and tender young roots &mdash; harmless to a robust monstera, genuinely damaging to seedlings, cuttings, and anything already stressed. After a brief pupal stage, a new generation of adults emerges, and the wheel turns again. The full cycle runs three to four weeks at room temperature, with all generations present at once. If a fly of the same size is fuzzy rather than mosquito-like, and keeps turning up at a floor drain or shower instead of a pot, it is a drain fly &mdash; <Link href="/blog/how-to-get-rid-of-drain-flies-canada" className="text-brand-700 underline">the overnight tape test</Link> identifies exactly which drain is producing them.</p>
          <p>Two strategic facts fall out of this. First, <strong>the adults are a symptom</strong> &mdash; they live a week and die on their own; killing them without killing larvae just makes room for the next wave. Second, <strong>everything depends on surface moisture</strong>. Eggs and larvae need the top layer of soil consistently damp. Let it truly dry and the habitat collapses. That is why the cure starts not at the store but at your watering can.</p>

          <h2>Step 1 — Fix the Water: The Dry-Out and Bottom-Watering Protocol</h2>
          <p>Fungus gnats are, bluntly, an overwatering symptom with wings. Nurseries keep soil damp because it is their job to grow plants fast; homes keep soil damp out of love. Either way, a permanently moist soil surface is a fungus gnat nursery, and no product ends an infestation while the habitat persists. The fix costs nothing:</p>
          <ul>
            <li><strong>Let the top 3&ndash;5 cm dry completely between waterings.</strong> Push a finger in to the second knuckle; if you feel any moisture, wait. Most common houseplants &mdash; pothos, monstera, snake plants, ZZs, ficus &mdash; prefer this anyway. The larvae, which cannot survive in dry soil, do not.</li>
            <li><strong>Switch to bottom-watering during treatment.</strong> Set the nursery pot in a few centimetres of water for 15&ndash;30 minutes and let the root zone drink from below, keeping the surface layer &mdash; the egg-laying zone &mdash; dry. You get hydrated roots and hostile real estate at the same time.</li>
            <li><strong>Empty saucers and cache pots.</strong> Standing water under the pot keeps the drainage layer wet and gives females a second egg-laying site through the drainage holes.</li>
            <li><strong>Halve your watering frequency in winter.</strong> Lower light means plants drink at a fraction of their summer rate. Watering on a summer schedule from November to March is the single biggest reason fungus gnats are a winter pest in Canadian and northern-US homes.</li>
          </ul>
          <p>For a light infestation &mdash; a few gnats a week &mdash; this step plus sticky cards is often the entire cure. For anything more established, add the larvicide.</p>

          <AffiliateDisclosure />

          <h2>Step 2 — Trap the Adults: Yellow Sticky Cards</h2>
          <p>Fungus gnat adults orient strongly to the colour yellow, and the humble yellow sticky card exploits it perfectly. Stake or clip cards horizontally or at a low angle just above the soil surface &mdash; that is where adults cruise, land, and lay &mdash; with one card per affected pot and a couple of extras near the worst cluster. Catches start within hours, which is satisfying, but the card&rsquo;s real value is strategic: every female stuck to a card is up to two hundred eggs that never enter your soil, and the card itself is your <strong>scoreboard</strong>. Count roughly what a fresh card catches in its first two days at the start of treatment, then compare a fresh card two weeks in. Falling numbers mean the protocol is working; a card that stays nearly clean for a week means you are done.</p>
          <p>What cards cannot do is finish the job alone. The soil is producing new adults every few days, and cards only intercept a fraction before they lay. Cards without a larval kill is a treadmill &mdash; which brings us to the tool that actually ends infestations.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="yellow sticky traps fungus gnats houseplants">Check yellow sticky trap cards on Amazon →</BuyLink>
          </div>

          <h2>Step 3 — Kill the Larvae: BTI, the Actual Fix</h2>
          <p>BTI &mdash; <em>Bacillus thuringiensis israelensis</em> &mdash; is a naturally occurring soil bacterium and one of the most precisely targeted pest controls ever brought to market. When the larvae of fungus gnats, mosquitoes, and blackflies ingest it, a protein specific to their gut chemistry destroys the gut lining and the larva dies within hours to a day. That protein does nothing to humans, cats, dogs, birds, fish, earthworms, bees, or plants &mdash; the mode of action simply does not exist outside those larval guts. This specificity is why BTI is approved for residential use by Health Canada&rsquo;s Pest Management Regulatory Agency and the US EPA alike, and why the same bacterium is trusted in some jurisdictions&rsquo; drinking-water reservoirs. Whatever product you buy, the label is your contract: in Canada, look for the PCP registration number on the package and follow its houseplant directions rather than a stranger&rsquo;s recipe &mdash; including ours &mdash; where they differ.</p>
          <p>The most widely available consumer BTI product on both sides of the border is <strong>Summit Mosquito Bits</strong> &mdash; BTI-coated corn-cob granules sold in the familiar orange-and-green container at Canadian Tire, Home Depot, Rona, garden centres, and Amazon in Canada, and the equivalent big-box stores in the US. (Periodic stock gaps on specific listings cause a recurring &ldquo;is this banned?&rdquo; rumour in Canada; it is not &mdash; it is a supply hiccup. Our <Link href="/blog/mosquito-bits-canada-vs-dunks">Mosquito Bits vs Dunks guide</Link> covers Canadian retail availability in detail.)</p>
          <p>For houseplants, use the <strong>steep method</strong>: add about four tablespoons of Bits per gallon (roughly four litres) of water, let them soak for thirty minutes so the BTI releases into the water, strain out the granules if you like, and water your plants normally with it. Every watering now delivers the larvicide directly into the larval feeding zone. The alternative is top-dressing granules onto the soil and watering through them &mdash; it works, but the corn-cob carrier sometimes sprouts a harmless white fuzz as it breaks down, which tends to cause more panic than the gnats did. The slower-release sibling product, Mosquito Dunks, can also be broken into quarters and steeped the same way; our <Link href="/blog/mosquito-dunks-canada-guide">Mosquito Dunks guide</Link> covers when the 30-day format makes more sense.</p>
          <p><strong>The critical detail: repeat for two to three weeks.</strong> BTI kills larvae &mdash; not eggs, not pupae, not adults. On day one, every larva feeding in treated soil dies, but eggs keep hatching for days and pupae keep emerging as adults for a week or more. Treat with every watering for two to three weeks and each new hatch meets lethal soil the moment it starts feeding. Seeing some adults in week two is not failure; it is the tail of the pipeline emptying. The sticky-card scoreboard will show the curve bending.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="summit mosquito bits">Check Mosquito Bits on Amazon →</BuyLink>
          </div>

          <h2>The Sand Top-Dress: An Honest Verdict</h2>
          <p>The most-shared fungus gnat tip on plant social media is a centimetre of sand or decorative gravel on the soil surface: adults supposedly cannot lay through the dry barrier, larvae supposedly cannot emerge. The logic is genuinely sound &mdash; and in practice it usually fails, for reasons that are obvious in hindsight. A thin sand layer cracks as soil shrinks and swells, pulls away from the pot rim leaving a perfect egg-laying moat, and wicks moisture upward so its underside stays damp. And fungus gnats do not need the front door anyway: females will happily lay through the <strong>drainage holes</strong> at the bottom of the pot, where the soil is dampest of all. Add that a top-dress makes the finger-test of soil moisture impossible &mdash; encouraging exactly the blind-schedule watering that causes gnats &mdash; and the verdict writes itself. A deep layer (2&ndash;3 cm) of coarse, sharp, fast-draining grit can contribute as one layer of a real protocol; as a standalone cure, it earns its reputation among frustrated plant owners, not its reputation on social media.</p>

          <h2>The Hydrogen Peroxide Drench: Partially True, Honestly Framed</h2>
          <p>The other famous home remedy actually does something &mdash; it just does far less than advertised. Ordinary 3% hydrogen peroxide, diluted about one part peroxide to four parts water and used to drench the pot, kills larvae on contact as it fizzes through the top layer of soil, then breaks down into water and oxygen within minutes. At that dilution it will not harm established plants (some sensitive seedlings disagree), and the brief oxygen release is, if anything, mildly pleasant for compacted soil.</p>
          <p>Here is what the viral posts leave out: peroxide has <strong>zero residual effect</strong>. It kills the larvae it physically touches in the seconds before it decomposes &mdash; larvae deeper in the pot, in the drainage layer, or sheltered in dense root mass survive, every unhatched egg survives, and every adult survives. Tomorrow&rsquo;s hatch lands in untreated soil. Used once, it is a decent population knockdown while you wait for sticky cards and Bits to arrive; used as the whole plan, it is a subscription to spraying your plants forever. It also indiscriminately kills soil microbes &mdash; a real cost if you keep living soil for aroids or use beneficial-microbe amendments. Fine tool, wrong job title.</p>

          <h2>Heavy Infestation? Add Air Support</h2>
          <p>When an infestation has been building for months &mdash; typically a big plant collection, a propagation shelf, or that one enormous planter that never dries &mdash; adults stop hovering politely around pots and start drifting across the room, toward lamps, screens, and wine glasses. The soil protocol above still does the curing, but a plug-in UV trap meaningfully shortens the misery window. The <strong>Katchy</strong> &mdash; a UV lure, a quiet fan, and a glue board in a tidy cylinder &mdash; runs overnight near the worst shelf and pulls flying adults out of the air passively while the BTI shuts down the source. We tested it across a full season against fruit flies and fungus gnats in our <Link href="/blog/katchy-indoor-insect-trap-review-canada">full Katchy review</Link>; the short version is that it is a genuinely effective <em>supplement</em> with one hard rule attached: never buy it as the only fix, because no air-side device touches the larvae in the soil.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="katchy indoor insect trap">Check the Katchy on Amazon →</BuyLink>
          </div>

          <h2>When Treatment Isn&rsquo;t Enough: The Repotting Trigger</h2>
          <p>Sometimes the soil itself has failed, and no protocol fixes broken potting mix. Repot &mdash; do not just keep treating &mdash; when you see any of these: the mix stays soggy for a week or more after a normal watering; it smells sour or mushroomy (active decay, i.e., unlimited larval food); it has visibly collapsed into dense black muck that no longer drains; larvae are visible in numbers when you scratch the surface; or a properly run three-week combo has not bent the sticky-card curve. Old peat-based mixes break down into exactly the fungus-rich sludge this insect evolved for &mdash; at that point you are farming gnats, not growing plants.</p>
          <p>Do the repot properly: slide the plant out, shake and gently rinse the old mix off the roots, trim anything brown and mushy (healthy roots are firm and pale), scrub the pot with hot soapy water, and repot into fresh mix straight from a <em>sealed</em> bag, ideally cut with extra perlite for drainage. Then get the old soil out of the house immediately &mdash; a bag of infested mix in the corner will happily re-seed every plant you just cleaned. Which is also the prevention lesson: store potting soil sealed in a lidded tote, quarantine every new plant two weeks away from the collection with a sticky card staked in its pot, and bottom-water by default. Do those three things and you will likely never read a fungus gnat guide again.</p>

          <h2>Fungus Gnats vs Fruit Flies: Make Sure You&rsquo;re Fighting the Right Bug</h2>
          <p>One last check, because the fixes do not transfer. If your tiny flies are stocky, tan-brown with red eyes, and clustered around the fruit bowl, the sink drain, or the recycling &mdash; those are fruit flies, and drying out your plants will accomplish nothing. Fruit flies breed in fermenting food residue and need a different playbook entirely: our <Link href="/blog/how-to-get-rid-of-fruit-flies-canada">fruit fly elimination guide</Link> and <Link href="/blog/best-fruit-fly-trap-canada">fruit fly trap comparison</Link> cover it. Fungus gnats are slimmer, darker, longer-legged, fly like they are slightly drunk, and always lead you back to a pot. Ten seconds of identification saves two weeks of treating the wrong insect.</p>

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
            <li><Link href="/blog/mosquito-bits-canada-vs-dunks">Mosquito Bits vs Dunks — Which BTI Format to Buy in Canada</Link></li>
            <li><Link href="/blog/mosquito-dunks-canada-guide">Mosquito Dunks — The Complete Canadian Guide</Link></li>
            <li><Link href="/blog/katchy-indoor-insect-trap-review-canada">Katchy Indoor Insect Trap Review — A Full Season of Testing</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-fruit-flies-canada">How to Get Rid of Fruit Flies — Full Playbook</Link></li>
            <li><Link href="/blog/best-fruit-fly-trap-canada">Best Fruit Fly Trap — Tested and Compared</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-silverfish-canada">How to Get Rid of Silverfish — The Other Damp-Loving Indoor Pest</Link></li>
            <li><Link href="/pest-control-cost-canada">Pest Control Cost Canada — What Professionals Charge</Link></li>
          </ul>

          <div className="not-prose mt-10 rounded-xl border border-navy-100 bg-brand-50 px-5 py-4">
            <p className="text-sm text-brand-900">
              <Link href="/pest-product-guides" className="font-bold text-emerald-700 hover:text-emerald-800 underline">More independent Canadian pest product research →</Link>
            </p>
          </div>
        </div>
        <AdjacentPestCTA pest="ants" />
      </article>
    </>
  )
}
