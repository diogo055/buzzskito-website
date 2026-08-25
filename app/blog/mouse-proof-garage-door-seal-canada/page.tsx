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

const SLUG = 'mouse-proof-garage-door-seal-canada'
const DATE = '2026-08-22'
const UPDATED = '2026-08-22'
const TITLE = 'Mouse-Proof Your Garage Door (Canada) — Sealing the Corner Gap'
const META_TITLE = 'Mouse-Proof Your Garage Door (Canada)'

const FAQS = [
  {
    question: 'How are mice getting into my garage?',
    answer: 'Under the garage door, almost always, and almost always at the two bottom corners rather than the middle. A garage door seal compresses hardest where the door is heaviest and least where it meets the vertical track weatherstripping, so the corners hold a small triangular void even when the door looks shut. Add a chipped or sloped concrete slab and that void becomes a permanent open doorway. Close the door on a bright day and look along the bottom from outside at ground level: any daylight you can see is an opening a mouse can walk through, because a mouse needs only about 6 mm.',
  },
  {
    question: 'What is the difference between a garage door bottom seal and a threshold seal?',
    answer: 'A bottom seal is the rubber astragal that slides into a retainer channel on the underside of the door and travels with it. A threshold seal is a separate rubber ramp bonded to the garage floor that the door closes onto, raising the sealing plane. They solve different problems. If the floor is flat and only the rubber has perished, a replacement bottom seal is the whole job and costs very little. If the slab is sloped, cracked, or worn so the door cannot make contact across its width, the threshold seal is what actually closes the gap — and it is the fix that also stops meltwater and drifting snow running in.',
  },
  {
    question: 'What size garage door bottom seal do I need?',
    answer: 'Three measurements, and getting any of them wrong is the most common return in this category. First, the retainer profile on the underside of your door: single-T, double-T, or bead/bulb — look at the end of the existing seal and match the shape exactly, because a T-end will not slide into a bead channel. Second, the retainer channel width, usually measured across the opening in the aluminum track. Third, the door width, plus 15 to 30 cm of extra length so you can trim rather than come up short — single garage doors typically run 8 to 9 ft and doubles 16 ft. Photograph the existing seal end-on before you shop.',
  },
  {
    question: 'Can mice chew through a rubber garage door seal?',
    answer: 'Yes, and they routinely do once they have found an edge. Standard EPDM or vinyl astragal is soft enough for a rodent to work through in a night or two, but the important detail is that mice rarely chew a fresh hole in the middle of a flat seal — they enlarge an existing corner gap where they can get teeth around an edge. That is why the durable fix is geometric rather than material: close the corner void with mesh or a corner insert so there is no edge to start on. Copper mesh packed into the corner before the insert goes on is the professional version of that repair.',
  },
  {
    question: 'Can I install a garage door threshold seal in winter in Canada?',
    answer: 'Not well. Threshold seals bond to concrete with an adhesive that generally needs a dry slab above roughly 10 degrees Celsius to cure properly, and a cold, damp, or salt-dusted floor is the single most common reason a threshold seal peels up by February. If the mice are already coming in and it is December, do the reversible fixes now — replacement bottom seal, corner inserts, brush weatherstrip on the jambs, copper mesh in the voids — and schedule the threshold bonding for a dry stretch in spring or late summer. That timing constraint is exactly why the work belongs in September, not November.',
  },
  {
    question: 'Is spray foam enough to seal a gap under my garage door frame?',
    answer: 'No. Bare cured polyurethane foam takes a rodent minutes, and a foamed gap is worse than an open one because it hides the hole from you while the tunnel through the middle stays invisible. Foam has exactly one legitimate role: as a weatherproofing carrier applied over a metal core. Stuff the void with copper mesh or stainless wool first, then foam or seal over it. The metal stops the teeth, the foam stops the draft. The same rule applies everywhere on a house, which is why our exclusion guide leads with metal.',
  },
  {
    question: 'Do I need to seal the sides and top of the garage door too?',
    answer: 'The sides matter, the top rarely does for rodents. Vertical jamb weatherstripping — the vinyl or brush strip on the door stops — is what closes the gap between the door face and the frame, and when it has shrunk or torn near the bottom it hands a mouse a route around the astragal entirely. Brush weatherstrip is worth knowing about here: the bristles conform to an uneven or out-of-plumb jamb far better than a rigid vinyl flap, which is common on older Ontario garages that have settled. The top seal is mostly a weather and energy item, though it is worth checking if you have squirrels or birds in the neighbourhood.',
  },
  {
    question: 'What temperature rating should a garage door seal have for Ontario?',
    answer: 'Look for EPDM or a thermoplastic rubber rather than rigid PVC. The practical difference shows up in January: quality rubber compounds stay flexible well below minus 30 degrees Celsius, while cheap vinyl stiffens, stops conforming to the floor, and cracks along the fold. A stiff seal in February is a seal that no longer touches the slab at the corners — which is the same gap you set out to close, arriving by a different route. Packaging that quotes a cold-temperature rating is telling you something useful; packaging that says only "all weather" is telling you nothing.',
  },
];

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'The garage door is the biggest gap in most Ontario homes. Threshold seals, bottom seal profiles, corner inserts, and the mesh fix that keeps mice out.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug(SLUG)

export default function MouseProofGarageDoorSealCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Independent Canadian guide to mouse-proofing a garage door — threshold seals versus bottom seals, matching the retainer profile, corner inserts and copper mesh for the triangular corner void, brush jamb weatherstrip, cold-weather rubber compounds, and the autumn timing that makes the work stick.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Mouse-Proof Garage Door Seal Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Mouse-Proof Garage Door Seal</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">The two bottom corners of a garage door are the largest unsealed opening in most Ontario houses &mdash; and the entry point behind a large share of autumn mouse calls. Here is what closes them, what size to buy, and what not to waste money on.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <AffiliateDisclosure />
      <StickyBuyBar tag={AMZ_TAG} name="Garage door threshold seal kit" search="garage door threshold seal kit" label="Best overall" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">Mice get into an Ontario garage under the door, at the two bottom corners, where the rubber astragal meets the vertical jamb weatherstripping and never quite closes. The fix is a rubber threshold seal bonded to the floor if the slab is uneven, or a fresh bottom seal in the correct retainer profile if the slab is flat &mdash; and in both cases copper mesh or quarter-inch hardware cloth packed into the corner voids, plus brush weatherstrip on the jambs. Do it in late summer, while the adhesive can still cure.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>A mouse passes any gap of roughly 6 mm &mdash; a pencil width. Close the door on a sunny day: visible daylight along the bottom is a doorway.</li>
              <li><strong>Threshold seal</strong> = bonded to the floor, fixes uneven or chipped concrete. <strong>Bottom seal</strong> = rides on the door, fixes perished rubber. They are not interchangeable.</li>
              <li>Match three specs before you order: retainer profile (single-T, double-T or bead), channel width, and door width plus extra length.</li>
              <li>Buy EPDM or thermoplastic rubber, not rigid vinyl &mdash; vinyl stiffens in an Ontario January and stops touching the slab exactly when you need it.</li>
              <li>Never use spray foam alone. Metal first, foam over top: the mesh stops the teeth, the foam stops the draft.</li>
              <li>If the floor is flat and the jambs are sound, the cheap replacement seal is genuinely the right buy. We say so below.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito Pest Product Guides &middot; independent Canadian research</p>
          </div>
          <SpecialistDisclosure pest="mice and rats" />
        </div>
      </section>

      <section className="bg-white px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <AwardRow tag={AMZ_TAG}
            heading="Our Picks — Garage Door Exclusion Hardware for Canada"
            awards={[
              {
                badge: 'Best Overall',
                name: 'Rubber Garage Door Threshold Seal Kit',
                why: 'The fix for the real problem on most Canadian garages: a slab that is chipped, sloped for drainage, or worn low at the centre so the door cannot touch it across the full width. A bonded rubber ramp raises the sealing plane to meet the door, closes the corners, and keeps meltwater and drifting snow out at the same time.',
                search: 'garage door threshold seal kit',
                score: 9.1,
                featured: true,
                pros: ['Closes gaps a bottom seal physically cannot reach', 'Also stops water, snow and blown leaves', 'Works with the door seal you already have'],
                cons: ['Adhesive needs a dry slab above about 10 degrees C', 'A raised ramp can catch a snow shovel'],
              },
              {
                badge: 'Best Basic Fix',
                name: 'Replacement Bottom Seal (T-End or Bead)',
                why: 'When the concrete is flat and the rubber has simply gone hard and cracked, this is the entire job — slide the old astragal out of the retainer, slide the new one in, done in under an hour. Match the profile and the channel width exactly and it is one of the highest-value repairs on a house.',
                search: 'garage door bottom seal t end rubber',
                score: 8.7,
                pros: ['Cheapest credible fix by a wide margin', 'No adhesive, no cure time, installable in winter', 'Restores the seal across the full door width'],
                cons: ['Does nothing about an uneven floor', 'Wrong profile is the number-one buying mistake'],
              },
              {
                badge: 'Best for the Corners',
                name: 'Garage Door Corner Seal Inserts',
                why: 'The corners are where mice actually walk in, and neither a bottom seal nor a threshold fully closes the triangular void that opens where the astragal meets the vertical stop. Wedge-shaped corner inserts fill it. Pack copper mesh in behind them and there is no edge left for teeth to start on.',
                search: 'garage door corner seal inserts',
                score: 8.4,
                pros: ['Targets the exact failure point', 'Cheap and reversible', 'Pairs with any bottom or threshold seal'],
                cons: ['Fit varies by door make — measure the void', 'Not a substitute for a sound bottom seal'],
              },
              {
                badge: 'Best Side-Jamb Fix',
                name: 'Brush Weatherstrip for Door Jambs',
                why: 'Bristle strip conforms to an out-of-plumb or settled jamb far better than a rigid vinyl flap, which is the common condition on older Ontario garages. It closes the vertical gap that lets a mouse walk around the astragal entirely, and it does not stiffen in the cold.',
                search: 'garage door side jamb brush weather stripping',
                score: 8.0,
                pros: ['Conforms to warped or settled framing', 'Stays flexible through a Canadian winter', 'Screws or staples on in an afternoon'],
                cons: ['Bristles wear and want replacing every few years', 'Less airtight than a well-fitted vinyl stop'],
              },
              {
                badge: 'Best Retainer Upgrade',
                name: 'Aluminum Bottom Seal Retainer Track',
                why: 'If the existing retainer is bent, rusted through, or missing on an older wood door, no seal will hold its shape. A new aluminum retainer gives the astragal a straight, true channel to sit in — and lets you move to a modern double-T profile that is easier to source in Canada than obscure legacy shapes.',
                search: 'garage door bottom seal retainer aluminum track',
                score: 7.8,
                pros: ['Fixes the root cause on old or damaged doors', 'Standardizes to an easily replaced profile', 'Aluminum will not rust out again'],
                cons: ['Drilling and fastening into the door bottom', 'Overkill if the existing retainer is straight'],
              },
              {
                badge: 'Best Finishing Layer',
                name: 'Concrete Crack Filler and Construction Adhesive',
                why: 'The unglamorous prep that decides whether the rest holds. Spalled concrete under the threshold leaves permanent voids no rubber will bridge, and a threshold seal bonded to crumbling surface will lift by spring. Fill, cure, then bond.',
                search: 'concrete crack filler self leveling',
                score: 7.4,
                pros: ['Gives the threshold a flat surface to bond to', 'Closes voids under the seal permanently', 'Cheap relative to what it protects'],
                cons: ['Adds a day of cure time to the project', 'Temperature-limited — a late-summer job'],
              },
            ]}
            whichToBuy={
              <>
                <strong>Daylight visible under the door across its width, or a floor that slopes and pools?</strong> The <em>Best Overall</em> threshold seal is the only fix that closes that, because the problem is the floor and not the door. <strong>Floor flat, rubber cracked and hard?</strong> Buy the <em>Best Basic Fix</em> replacement bottom seal and stop &mdash; you do not need the threshold kit, and we would rather say so than sell you one. <strong>Seeing droppings on the garage floor but the seal looks fine?</strong> Check the corners: the <em>Best for the Corners</em> inserts plus copper mesh are almost certainly your answer. <strong>Gap visible up the sides of the door?</strong> The <em>Best Side-Jamb Fix</em> brush weatherstrip. <strong>Old door with a bent or rusted channel?</strong> Start with the <em>Best Retainer Upgrade</em>, because nothing else will sit straight. And if mice are already inside the garage, seal second: trap first, using our <Link href="/blog/best-mouse-trap-canada">mouse trap guide</Link>.
              </>
            }
          />
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Garage Door Seals Compared — What Each One Actually Fixes</h2>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm">
            <table className="w-full min-w-[760px] text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Fix</th>
                  <th className="px-4 py-3 text-left">Stops mice?</th>
                  <th className="px-4 py-3 text-left">Canadian winter</th>
                  <th className="px-4 py-3 text-left">Use it when</th>
                  <th className="px-4 py-3 text-left">Buy</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">Rubber threshold seal (floor-bonded)</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Yes</strong> &mdash; with corners packed</td>
                  <td className="px-4 py-3 text-gray-700">Excellent &mdash; bond it in warm, dry weather</td>
                  <td className="px-4 py-3 text-gray-700">Slab is sloped, chipped or worn low</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="garage door threshold seal kit" block>Check price on Amazon.ca &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">Replacement bottom seal (astragal)</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Yes</strong> &mdash; on a flat floor</td>
                  <td className="px-4 py-3 text-gray-700">Good if EPDM/TPE; poor if rigid vinyl</td>
                  <td className="px-4 py-3 text-gray-700">Rubber is cracked, hard or torn</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="garage door bottom seal t end rubber" block>Check price on Amazon.ca &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">Corner seal inserts + copper mesh</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Yes</strong> &mdash; the actual entry point</td>
                  <td className="px-4 py-3 text-gray-700">Excellent &mdash; no cure time</td>
                  <td className="px-4 py-3 text-gray-700">Always. Every door has corner voids</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="garage door corner seal inserts" block>Check price on Amazon.ca &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">Brush weatherstrip, side jambs</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Yes</strong> &mdash; closes the side route</td>
                  <td className="px-4 py-3 text-gray-700">Excellent &mdash; bristles do not stiffen</td>
                  <td className="px-4 py-3 text-gray-700">Jambs are settled, warped or gapped</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="garage door side jamb brush weather stripping" block>Check price on Amazon.ca &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">Quarter-inch hardware cloth</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Yes</strong> &mdash; for larger voids</td>
                  <td className="px-4 py-3 text-gray-700">Excellent &mdash; galvanized</td>
                  <td className="px-4 py-3 text-gray-700">Gaps at the frame, block wall or slab edge</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="hardware cloth 1/4 inch galvanized" block>Check price on Amazon.ca &rarr;</BuyLink></td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-bold text-brand-800">Spray foam used alone</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-red-700">No</strong> &mdash; chewed in minutes</td>
                  <td className="px-4 py-3 text-gray-700">Irrelevant &mdash; not a barrier</td>
                  <td className="px-4 py-3 text-gray-700">Only ever as a carrier over metal mesh</td>
                  <td className="px-4 py-3 text-xs text-gray-400">Metal first, always</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            A complete garage-door exclusion package &mdash; threshold kit, corner inserts, jamb weatherstrip, mesh and adhesive &mdash; typically lands in the <strong>$80&ndash;$250 CAD</strong> range in Canada. A replacement bottom seal on its own is a fraction of that. Stocked at Canadian Tire, Home Depot Canada, Rona, Princess Auto and Amazon.ca; seals move fast in October.
          </p>
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Garage Door Exclusion — Key Specs</h2>
          <div className="rounded-xl border border-navy-100 overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Mouse entry threshold', 'About 6 mm — a pencil width. Rats need a quarter-sized opening'],
                  ['The actual entry point', 'The two bottom corners, where the astragal meets the vertical jamb stop'],
                  ['Three specs to match', 'Retainer profile (single-T / double-T / bead), channel width, door width'],
                  ['Typical door widths', 'Single 8–9 ft, double 16 ft — buy 15–30 cm long and trim'],
                  ['Rubber to buy', 'EPDM or thermoplastic rubber — flexible far below freezing'],
                  ['Rubber to avoid', 'Rigid PVC/vinyl — stiffens and cracks in an Ontario January'],
                  ['Threshold adhesive', 'Needs a dry slab above roughly 10 °C — a late-summer job'],
                  ['Corner void filler', 'Copper mesh or quarter-inch galvanized hardware cloth, then a corner insert'],
                  ['Never use alone', 'Spray foam — a rodent is through cured foam in minutes'],
                  ['Side jambs', 'Brush weatherstrip conforms to settled framing better than vinyl'],
                  ['Garage-to-house door', 'Treat as an exterior door: sweep plus full weatherstripping'],
                  ['Timing', 'September — mice move indoors from October as nights hold below 10 °C'],
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

          <h2>Why the Garage Door Is the Biggest Hole in Your House</h2>
          <p>Mice get into an Ontario house through the garage more often than through any single opening people actually think about, and they do it at the bottom corners of the overhead door. The reason is mechanical rather than mysterious. A garage door is a heavy panel that seals against the floor with a compressible rubber astragal, and it compresses that rubber hardest where the weight is &mdash; along the middle. At each end, where the astragal runs out and meets the vertical jamb weatherstripping, the two seals meet at right angles and never quite marry. What is left is a small triangular void, open to the outside, at ground level, on both sides of an opening that is otherwise several metres wide.</p>
          <p>Then Canadian conditions make it worse. Slabs are usually poured sloping toward the door for drainage, so the door contacts the high side first and leaves daylight on the low side. Freeze-thaw and road salt spall the concrete under the seal into pits a rubber lip cannot bridge. And twenty winters of cycling leave a hardened, shrunken astragal that has lost height it cannot give back.</p>
          <p>A mouse needs about 6 mm. That is the whole equation. Close the door on a bright afternoon, walk outside, and look along the bottom from ground level with the sun behind the building: any daylight is an opening a mouse has already found. Do the same at the two vertical edges. It is the fastest inspection on the entire house, and it takes thirty seconds.</p>
          <p>The stakes are higher than the garage itself. An attached garage is a staging area, not a destination: warm relative to outdoors, sheltered, often storing birdseed, pet food or bulk dry goods, and sharing a wall and a doorway with your living space. A great many autumn calls that start &ldquo;we heard something in the wall&rdquo; began with an animal that got into the garage in October. Sealing this door is upstream of most of the rest of the work.</p>

          <p className="not-prose text-sm text-gray-600 mb-1">Check current Canadian availability of the hardware this guide recommends:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="garage door threshold seal kit">Threshold seal kit &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="garage door bottom seal t end rubber">Bottom seal (astragal) &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="garage door corner seal inserts">Corner inserts &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="copper mesh rodent control">Copper mesh &rarr;</BuyLink>
          </div>

          <h2>Threshold Seal or Bottom Seal? Diagnose Before You Buy</h2>
          <p>These two get shelved next to each other and solve different problems; buying the wrong one is the most common way people spend money without closing the gap.</p>
          <p>A <strong>bottom seal</strong> &mdash; the astragal &mdash; lives in a retainer channel on the underside of the door and travels with it. Replace it when the rubber has gone hard, cracked, torn, or flattened, which on a Canadian door is usually somewhere between year eight and year fifteen. If your concrete is flat and true and the only problem is perished rubber, this is the entire repair, it costs very little, and it is installable in any weather because no adhesive is involved.</p>
          <p>A <strong>threshold seal</strong> is a separate rubber ramp bonded to the garage floor, which the door then closes onto. It raises the sealing plane up to meet the door instead of asking the door to reach down to an uneven floor. This is the fix when the slab is sloped, spalled, cracked, or worn low in the middle &mdash; conditions no astragal can compensate for, because the gap is not on the door. It has the useful side effect of stopping meltwater, drifting snow, and blown leaves, which on a driveway that slopes toward the house is worth as much as the rodent exclusion.</p>
          <p>The diagnostic is simple. Close the door and slide a sheet of paper under it at five points across the width. Where the paper slides freely, the door is not touching. If the failures are at the corners only, you need corner treatment. If the paper slides at several points across the middle, you have a floor problem and you want the threshold. If nothing slides anywhere but the rubber is visibly cracked, replace the astragal on general principle before it fails in January.</p>

          <h2>The Three Measurements That Decide Whether It Fits</h2>
          <p>More garage door seals get returned for fitment than for quality, and it is always one of the same three numbers.</p>
          <p><strong>Retainer profile.</strong> Look at the end of the seal currently in your door and note its cross-section shape. The common families are single-T, double-T (two T-shaped ribs that slide into two channels), and bead or bulb (a round rib in a C-shaped channel). A T-end will not go into a bead channel, and no amount of persuasion changes that. Photograph the end of the existing seal before you shop &mdash; a straight-on photo tells you everything a product listing needs to be matched against.</p>
          <p><strong>Channel width.</strong> Measure across the opening in the aluminum retainer. Seals are sold to fit specific channel widths, and a seal slightly too narrow will pull out under its own weight over a winter of thermal cycling.</p>
          <p><strong>Door width, plus extra.</strong> Single doors in Canadian housing are typically 8 or 9 ft, doubles 16 ft. Always buy 15 to 30 cm longer than the door and trim to fit; trimming is thirty seconds with a utility knife, whereas coming up short means the ends &mdash; the exact place mice enter &mdash; are unsealed. If your retainer itself is bent, corroded, or missing sections, replace the retainer first with an <BuyLink tag={AMZ_TAG} search="garage door bottom seal retainer aluminum track">aluminum retainer track</BuyLink>; a new seal in a warped channel will sit crooked and leak at the ends by design.</p>

          <h2>The Corner Fix Nobody Sells as a Product</h2>
          <p>Here is the part most guides skip, and it is the part that actually matters for rodents. Even a brand-new astragal on a perfect floor leaves a void at each end where it meets the vertical jamb weatherstripping. It is small, it is triangular, and it is exactly the shape and size a house mouse is looking for.</p>
          <p>Close it in two layers. First, pack the void with <BuyLink tag={AMZ_TAG} search="copper mesh rodent control">copper mesh</BuyLink> or stainless wool, pushed in tight with a screwdriver so it fills the full depth rather than plugging the face. Copper is the right choice outdoors in Canada because ordinary steel wool rusts through in a season, shrinks as it corrodes, stains the concrete, and eventually falls out and reopens the hole. Second, cover the packed void with a corner seal insert or a wedge of rubber so weather and UV are kept off the mesh and there is no exposed edge for a rodent to get its teeth around. Where the gap is larger &mdash; a chunk missing from the slab edge, a void where the frame meets a block wall &mdash; go to <BuyLink tag={AMZ_TAG} search="hardware cloth 1/4 inch galvanized">quarter-inch galvanized hardware cloth</BuyLink> cut oversize and fastened into solid material.</p>
          <p>What not to do: do not fill the corner with spray foam and call it sealed. Cured polyurethane offers a rodent almost no resistance, and a foamed corner is worse than an open one because you can no longer see the tunnel through the middle of it. Foam is a weather layer applied over a metal core, never a barrier. That rule is the same everywhere on the building, and it is the backbone of our <Link href="/blog/rodent-exclusion-kit-canada">rodent exclusion kit guide</Link>.</p>
          <p>Finish with the sides. Vertical jamb weatherstripping shrinks, tears at the bottom, and pulls away from a settled frame &mdash; and a mouse that cannot get under the door will happily walk around it. <BuyLink tag={AMZ_TAG} search="garage door side jamb brush weather stripping">Brush weatherstrip</BuyLink> is worth the upgrade over rigid vinyl on any older Ontario garage: the bristles conform to a jamb that is no longer plumb, and they do not stiffen in the cold. Then treat the door between the garage and the house like the exterior door it functionally is &mdash; a proper <BuyLink tag={AMZ_TAG} search="door sweep exterior door weatherstrip">door sweep</BuyLink> and intact weatherstripping turn the garage into an airlock rather than a corridor.</p>

          <h2>Cold-Weather Materials: What Ontario Does to a Cheap Seal</h2>
          <p>Buy the rubber compound, not the picture on the package. EPDM and thermoplastic rubber stay pliable far below freezing, which means the seal is still conforming to your slab in February. Rigid PVC and cheap vinyl stiffen as temperatures drop, stop following the small irregularities in the concrete, and eventually crack along a fold. The failure mode is quietly perfect: the seal looks intact all winter while the corners have lifted off the floor by a few millimetres &mdash; and a few millimetres is the entire specification a mouse cares about.</p>
          <p>Adhesives carry the same constraint from the other direction. Threshold seals bond to concrete with construction adhesive or a supplied tape system, and those generally want a clean, dry slab above roughly 10&nbsp;&deg;C to cure. A cold, damp, salt-dusted January floor is why so many threshold seals are peeling by spring. If the slab is spalled, fill and cure it with a <BuyLink tag={AMZ_TAG} search="concrete crack filler self leveling">concrete crack filler</BuyLink> first, then bond to a flat surface with <BuyLink tag={AMZ_TAG} search="polyurethane construction adhesive concrete">polyurethane construction adhesive</BuyLink>, and where the frame needs mechanical fixing into masonry use proper <BuyLink tag={AMZ_TAG} search="concrete anchor screws masonry">concrete anchor screws</BuyLink> rather than hoping tape holds through a freeze-thaw cycle.</p>
          <p>A garage that runs damp accelerates all of this &mdash; corroding retainers, softening concrete, rotting wood jambs. If yours sweats through shoulder season, the companion problem is covered in our guide to <Link href="/blog/best-dehumidifier-for-cold-garage-canada">dehumidifiers for a cold garage</Link>.</p>

          <h2>When the Cheap Fix Is the Right Fix</h2>
          <p>We would rather you spent less and closed the gap than spent more and did not. If the paper test shows the door making contact across its full width, the concrete is sound, and the jambs are straight, then a replacement bottom seal in the correct profile plus a few dollars of copper mesh in the two corners is the complete, correct, permanent job. Skip the threshold kit. It would sit on top of a floor that did not need it, add a lip your snow shovel will find every January, and close nothing that was open.</p>
          <p>The threshold kit earns its money in three situations: a slab that slopes or has worn low, a driveway that runs water toward the door, and a bottom rail racked out of straight. Two of those are as much a water problem as a rodent problem, which makes the spend easy to justify. If the door itself is bowed or the panels no longer close square, no seal is the answer &mdash; that is a door service call. Our <Link href="/pest-control-cost-canada">Canadian pest control cost guide</Link> is the useful check against the alternative: paying a pest company to keep trapping what a one-time repair excludes for good.</p>

          <h2>Do It in September, Not November</h2>
          <p>Rodent entry into Canadian buildings is sharply seasonal. Through the summer, mice live outdoors on abundant food. As overnight temperatures start holding below about 10&nbsp;&deg;C and that food collapses, they probe structures for warmth, and the indoor migration runs hard from early October into December.</p>
          <p>That gives the garage door a deadline. Sealing in late summer means bonding adhesive to a warm dry slab, working in daylight after supper, buying from an aisle not yet converted to Christmas stock, and &mdash; most importantly &mdash; closing a garage that is still empty. Sealing in December risks trapping animals inside, and locks you out of the threshold option until spring.</p>
          <p>If you are already hearing something in the garage, reverse the order: trap first, seal second. Run a snap-trap line from our <Link href="/blog/best-mouse-trap-canada">best mouse trap guide</Link> until you get five to seven quiet nights, then do the sealing pass. And if vehicles live in that garage, know that a parked car is its own nesting site with its own damage bill &mdash; the wiring and cabin-filter side of that story is in <Link href="/blog/how-to-keep-mice-out-of-your-car">how to keep mice out of your car</Link>. The rest of the building envelope, gap by gap, is walked through in <Link href="/blog/how-to-keep-mice-out-of-your-house-winter">how to keep mice out of your house this winter</Link>.</p>
          <p>One regulatory note, since it is a pleasant one: none of this hardware is a pest control product. Seals, mesh, brush strip and adhesive need no Health Canada PMRA registration and can be installed by anyone, in any building, rentals included. Unlike anything you spray, the only homework is measuring correctly.</p>

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
            <li><Link href="/blog/rodent-exclusion-kit-canada">Rodent Exclusion Kit Canada — Seal Mice Out Before October</Link></li>
            <li><Link href="/blog/how-to-keep-mice-out-of-your-house-winter">How to Keep Mice Out of Your House This Winter</Link></li>
            <li><Link href="/blog/how-to-keep-mice-out-of-your-car">How to Keep Mice Out of Your Car</Link></li>
            <li><Link href="/blog/best-mouse-trap-canada">Best Mouse Trap Canada — Snap vs Electronic vs Catch-and-Release</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-mice-canada">How to Get Rid of Mice in Canada — Full Playbook</Link></li>
            <li><Link href="/blog/best-dehumidifier-for-cold-garage-canada">Best Dehumidifier for a Cold Garage in Canada</Link></li>
            <li><Link href="/pest-control-cost-canada">Pest Control Cost Canada — What Professionals Charge</Link></li>
          </ul>

          <div className="not-prose mt-10 rounded-xl border border-navy-100 bg-brand-50 px-5 py-4">
            <p className="text-sm text-brand-900">
              <Link href="/pest-product-guides" className="font-bold text-emerald-700 hover:text-emerald-800 underline">More independent Canadian pest product research &rarr;</Link>
            </p>
          </div>
        </div>
        <AdjacentPestCTA pest="rodents" />
      </article>
    </>
  )
}
