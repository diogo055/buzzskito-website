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

const SLUG = 'how-to-get-rid-of-voles-canada'
const DATE = '2026-07-30'
const UPDATED = '2026-07-30'
// ONE page covering vole ID (vole vs mouse vs mole vs shrew) AND control. Mole
// removal is deliberately NOT targeted here — only the ID disambiguation — so
// this does not split intent with the existing rodent cluster.
const TITLE = 'How to Get Rid of Voles in Canada — Vole vs Mouse, and Why the Damage Only Shows Up at Snowmelt'
const META_TITLE = 'Get Rid of Voles Canada: Vole vs Mouse ID'

const FAQS = [
  {
    question: 'What is the difference between a vole and a mouse?',
    answer: 'Look at the tail, the ears, and the snout. A meadow vole is stocky and chunky with a blunt, rounded snout, small eyes, and short ears that are mostly buried in its fur — and its tail is short, closer to the length of its hind foot than to the length of its body. A house mouse is slender with a sharply pointed snout, large prominent ears that stand clear of the head, big eyes, and a long scaly tail roughly as long as its head and body combined. Behaviour separates them just as reliably: voles live outdoors in lawns, meadows, and garden beds and only very rarely come inside a house, while house mice are the ones in your pantry and your garage. If it is running along your kitchen baseboard, it is almost certainly not a vole.',
  },
  {
    question: 'Is it voles or moles wrecking my lawn?',
    answer: 'They leave completely different damage, and the fix is completely different too. Voles are rodents that eat plants, and they leave narrow surface runways — winding trails of grass clipped right down to the soil, roughly two to five centimetres wide, with small burrow openings along them. Moles are insectivores that eat earthworms and grubs, and they leave raised soil ridges where they tunnel just under the surface, plus conical mounds of pushed-up soil. So: trails of clipped grass on top of the lawn means voles; pushed-up soil and heaved ridges means moles. It matters because a mole is not eating your plants at all, and every product aimed at voles is aimed at the wrong animal.',
  },
  {
    question: 'How do I get rid of voles in my yard?',
    answer: 'Take away the cover first, protect the plants you cannot afford to lose second, and trap third. Voles depend on dense ground cover to hide from hawks, owls, foxes, and cats, so mowing short into late fall, clearing tall grass and weedy fence lines, thinning dense ground cover around young trees, and pulling mulch back off trunks removes the habitat that makes a lawn worth living in. Then protect the assets: quarter-inch hardware cloth cylinders around the trunks of young trees and shrubs, and wire baskets under valuable bulbs. Trapping with ordinary mouse snap traps set across active runways works well on a small suburban lot and will not clear a large property. Poison bait is the wrong tool outdoors and is covered separately below.',
  },
  {
    question: 'Why did all the vole damage appear at once in the spring?',
    answer: 'Because voles are active all winter under the snow, where you cannot see them. Voles do not hibernate. Once snow covers the ground it creates an insulated space between the snowpack and the soil, and voles spend the winter travelling, feeding, and gnawing bark in that hidden layer — protected from cold and from every predator that hunts by sight. All of that work is invisible until the snow goes, at which point a Canadian homeowner walks out in late March or April and finds a lawn covered in runways and a young maple girdled at the base. Nothing happened overnight. It happened over four months, under a metre of snow, which is exactly why the useful work happens in October and November rather than in April.',
  },
  {
    question: 'Will my lawn recover from vole runways?',
    answer: 'In most cases yes, and this is the part where you should be careful not to spend money you do not need to spend. Vole runways are surface damage — the grass is clipped and matted, but the crowns and roots are usually intact, so with a spring rake to pull out the dead thatch, a light overseed on the bare strips, and normal spring growth, the lines typically green over within a few weeks. What does not recover on its own is a girdled tree or shrub. If bark has been chewed all the way around the base of a young tree, the tree may fail even though it leafs out that spring, and that is where a real loss happens. Repair the lawn, protect the trunks, and do not buy a vole product for cosmetic turf lines.',
  },
  {
    question: 'Do vole repellents actually work?',
    answer: 'Castor-oil based granules and liquids are the mainstream repellent option, and they are best understood as displacement rather than removal. The mechanism is to make treated soil and turf unpleasant to travel through and feed in, which pushes voles toward untreated ground. That is a genuine result if the untreated ground is off your property and a pointless one if it is the other side of your own lawn. Practical limits matter as much as the mechanism: the product has to be watered in to reach where voles actually travel, it needs re-application after heavy rain and after mowing, and it does nothing about the dense cover that made your yard attractive in the first place. Use one as a supplement to habitat work and trunk guards, never as a substitute — and do not expect a repellent to save a tree that is not physically guarded. One buying check before you spend anything: a lawn or garden repellent is a regulated pest control product in Canada and needs a PCP registration number on the Canadian label, and a great deal of the castor-oil product that surfaces in online searches is US stock with no Canadian registration behind it. Buy it where you can read the Canadian label first.',
  },
  {
    question: 'Should I use poison bait for voles in Canada?',
    answer: 'For a homeowner in an open yard, no. Two reasons, and the first is regulatory: Health Canada’s Pest Management Regulatory Agency has been tightening the rules around anticoagulant rodenticides and moving the stronger second-generation products away from general homeowner use, so before you buy anything you need to confirm what is currently registered for domestic use and read the label’s use sites — many rodenticide labels are written for indoor or in-structure placement, not for broadcasting across a lawn. The second reason is the food chain. Voles are a staple prey animal for hawks, owls, foxes, coyotes, and outdoor cats, so poisoning voles in an open yard puts poisoned prey directly into the mouths of the predators that were controlling them for free. Bait left outdoors is also available to dogs and to non-target wildlife. Traps, guards, and mowing do the job without that exposure.',
  },
  {
    question: 'What kind of trap works for voles?',
    answer: 'An ordinary wooden or plastic mouse snap trap, set the right way. Voles run repeatedly along their own established runways, so the trap goes directly in an active runway, set perpendicular to it with the trigger sitting in the path — that alone catches voles even without bait, because the animal walks into the trigger on its regular commute. If you do bait, peanut butter rolled in oatmeal is the standard. Cover each set with an upturned bucket, a board, or a shingle propped to leave a gap: it keeps rain, birds, pets, and children off the trap, and voles actually prefer running through the dark tunnel it creates. Check daily. Trapping is genuinely effective on a small suburban lot; on a large property with meadow next door, treat it as spot control rather than elimination.',
  },
  {
    question: 'How do I stop voles from killing my young trees?',
    answer: 'Physically, with a barrier — no repellent and no bait substitutes for this. Wrap the trunk in a cylinder of quarter-inch galvanised hardware cloth or a purpose-made tree guard, set it a few centimetres into the soil so nothing can tunnel under it, and make it tall enough to clear the deepest snow you expect, because voles gnaw from the top of the snowpack, not from ground level. Leave a gap between the guard and the bark so the trunk can expand, and check the fit every year as the tree grows. Then clear the base: pull mulch back to leave a bare collar around the trunk, keep grass mown short around young trees, and do not pile shovelled snow against trunks. A mulch volcano heaped against a young tree is a heated, hidden vole den built directly on top of the bark you are trying to protect.',
  },
  {
    question: 'Which bulbs and plants do voles leave alone?',
    answer: 'Voles are hard on tulips, crocus, and hosta, and are generally not interested in daffodils and ornamental alliums, which is why gardeners with a chronic vole problem quietly shift toward those. If you want to keep planting tulips anyway, plant them inside wire baskets or under a sheet of hardware cloth pinned over the bed — the shoots come up through the mesh and the bulbs stay unreachable. The same protection handles squirrels, which dig for bulbs from above rather than tunnelling to them. Beyond bulbs, dense low ground cover such as thick periwinkle or ivy against a foundation or around young trees is worth thinning regardless of species, because the cover matters more to voles than the menu does.',
  },
  {
    question: 'Do voles get into houses?',
    answer: 'Very rarely, and this is one of the more useful things to know before you spend anything. Voles are outdoor animals adapted to runways in grass and shallow burrows in soil, and they have little reason to enter a heated building — they are not looking for your pantry the way a house mouse is. If something is chewing inside your kitchen, in the attic, or in the garage, work on the assumption that it is a mouse or a rat and treat it as an indoor exclusion problem instead: seal entry points, then trap indoors. Buying an outdoor vole product for an indoor rodent is a common and completely avoidable mistake, and the reverse is just as wasteful.',
  },
  {
    question: 'Is it worth paying someone to get rid of voles?',
    answer: 'For a typical Canadian suburban lot, no — the work that matters is mowing, raking, mulch pullback, and a roll of hardware cloth, and none of that needs a licence. There are three situations where paying makes sense. A large property, orchard, nursery, or acreage backing onto meadow, where the pressure is continuous and a professional programme is genuinely a different scale of job. A yard with many young or newly planted trees, where an arborist or landscaper guarding all of them properly in one visit is faster and better than a homeowner doing it badly over three weekends. And any case where you are not sure whether you have voles or moles, since the two are handled completely differently and a wrong diagnosis wastes an entire season. Be sceptical of any vole quote that leads with bait rather than with a walk around your fence line.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'Voles in Canada: how to tell a vole from a mouse or a mole, why the runways appear at snowmelt, and the trapping, guards and habitat fixes that work.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug(SLUG)

export default function HowToGetRidOfVolesCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Independent Canadian guide to voles: telling a vole from a house mouse, a mole and a shrew, reading surface runways and girdled bark, why winter damage under snow only appears at snowmelt, habitat and mowing work, hardware-cloth trunk guards, snap-trap technique, the honest limits of castor-oil repellents, and why rodenticide is the wrong outdoor tool.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'How to Get Rid of Voles in Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Get Rid of Voles</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">Winding trails of clipped grass across the lawn in April, and bark chewed off the base of a young tree. That is a vole &mdash; not a mouse, and not a mole. The lawn will recover on its own. The tree will not, which is where your money should go.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <AffiliateDisclosure />
      <StickyBuyBar tag={AMZ_TAG} name="Quarter-inch galvanised hardware cloth (trunk guards)" search="hardware cloth 1 4 inch galvanized mesh" label="The buy that prevents real loss" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">To get rid of voles in Canada, remove the cover they hide in, physically guard the trees and bulbs you cannot afford to lose, and trap with ordinary mouse snap traps set across their runways. Voles are outdoor lawn and meadow rodents &mdash; blunt-nosed, short-tailed, small-eared &mdash; and they almost never come indoors. The turf damage you find at snowmelt is cosmetic and usually grows back. Bark chewed all the way around a young tree is not, and that is the damage worth spending on.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li><strong>Vole, not mouse:</strong> blunt snout, tiny hidden ears, short tail. A mouse has a pointed nose, big ears and a long tail &mdash; and lives indoors.</li>
              <li><strong>Vole, not mole:</strong> trails of clipped grass on the surface are voles. Pushed-up soil ridges and mounds are moles, which eat grubs, not plants.</li>
              <li><strong>The damage happened under the snow.</strong> Voles are active all winter in the space between snowpack and soil &mdash; you just could not see it.</li>
              <li><strong>Mow short into late fall</strong> and pull mulch off tree trunks. Cover is what makes a yard liveable for a vole.</li>
              <li><strong>Guard the trunks</strong> with quarter-inch hardware cloth, set into the soil and taller than your deepest snow.</li>
              <li><strong>Skip poison bait outdoors.</strong> Voles are staple prey for hawks, owls and foxes, and Canadian rodenticide rules have been tightening.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito Pest Product Guides &middot; independent Canadian research</p>
          </div>

          <SpecialistDisclosure pest="voles" />
        </div>
      </section>

      <section className="bg-gradient-to-br from-emerald-50 to-white border-b border-emerald-200 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Identification &middot; Updated July 2026</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">Vole vs Mouse vs Mole vs Shrew &mdash; The Table That Saves You a Season</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            This is the single highest-value thirty seconds on the page. Four small mammals get called &ldquo;the thing wrecking my lawn,&rdquo; and only one of them is actually eating your plants. Getting it wrong means buying a product aimed at an animal you do not have.
          </p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm">
            <table className="min-w-[560px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Animal</th>
                  <th className="px-4 py-3 text-left">How it looks</th>
                  <th className="px-4 py-3 text-left">Where it lives</th>
                  <th className="px-4 py-3 text-left">Damage it leaves</th>
                  <th className="px-4 py-3 text-left">What to do</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Meadow vole<br /><span className="font-normal text-xs text-gray-500">Microtus pennsylvanicus</span></td>
                  <td className="px-4 py-3 text-gray-700">Stocky and chunky, <strong>blunt rounded snout</strong>, small eyes, ears mostly hidden in fur, <strong>short tail</strong></td>
                  <td className="px-4 py-3 text-gray-700">Lawns, meadows, garden beds, mulch, dense ground cover. Outdoors &mdash; rarely indoors</td>
                  <td className="px-4 py-3 text-gray-700">Surface runways of clipped grass; gnawed bark at the base of trees; eaten bulbs and hosta</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">This page.</strong> Cover, guards, traps</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">House mouse<br /><span className="font-normal text-xs text-gray-500">Mus musculus</span></td>
                  <td className="px-4 py-3 text-gray-700">Slender, <strong>pointed snout</strong>, big prominent ears and eyes, <strong>long scaly tail</strong></td>
                  <td className="px-4 py-3 text-gray-700">Inside houses, garages, sheds, vehicles &mdash; wherever there is shelter and food</td>
                  <td className="px-4 py-3 text-gray-700">Droppings indoors, chewed packaging, chewed wiring, nesting material</td>
                  <td className="px-4 py-3 text-gray-700">Indoor exclusion + indoor trapping</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Mole<br /><span className="font-normal text-xs text-gray-500">not a rodent at all</span></td>
                  <td className="px-4 py-3 text-gray-700">Cylindrical, velvety, <strong>huge paddle-shaped front feet</strong>, no visible eyes or ears</td>
                  <td className="px-4 py-3 text-gray-700">Underground, in soil with a good worm and grub population</td>
                  <td className="px-4 py-3 text-gray-700"><strong>Raised soil ridges</strong> and conical mounds. Eats no plants</td>
                  <td className="px-4 py-3 text-gray-700">A different job &mdash; nothing on this page applies</td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Shrew<br /><span className="font-normal text-xs text-gray-500">also not a rodent</span></td>
                  <td className="px-4 py-3 text-gray-700">Very small, <strong>long pointed snout</strong>, minute eyes, frantic movement</td>
                  <td className="px-4 py-3 text-gray-700">Leaf litter, mulch, and often inside vole runways it did not dig</td>
                  <td className="px-4 py-3 text-gray-700">None to plants &mdash; it is hunting insects and worms</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Leave it.</strong> It is on your side</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-5 rounded-xl bg-amber-50 border-l-4 border-amber-400 p-4">
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong className="text-amber-900">One more look-alike, on the bark itself.</strong> Rabbits and voles both chew young trees in winter, and the marks tell you which. A rabbit clips twigs and small stems with a clean, angled cut and browses at whatever height the snowpack lets it reach. A vole gnaws the bark surface in irregular patches of small tooth marks running in every direction, concentrated at ground level or just above the old snow line. Clean angled cuts high up mean you need a rabbit guard; scraped, patchy bark at the base means voles, and the guard needs to start below the soil.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Decision Table</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">Pick in 60 Seconds: Your Situation &rarr; What to Do</h2>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm">
            <table className="min-w-[560px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Your situation</th>
                  <th className="px-4 py-3 text-left">Do this</th>
                  <th className="px-4 py-3 text-left">Do not do this</th>
                  <th className="px-4 py-3 text-left">Get it</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Runway lines all over the lawn in April</td>
                  <td className="px-4 py-3 text-gray-700">Rake out the dead thatch, overseed the bare strips, wait. It usually grows back</td>
                  <td className="px-4 py-3 text-gray-700">Buy a product for cosmetic turf damage</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="grass seed overseed lawn repair" block>Overseed &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Bark chewed off a young tree at the base</td>
                  <td className="px-4 py-3 text-gray-700">Guard every young trunk with quarter-inch hardware cloth, set into the soil</td>
                  <td className="px-4 py-3 text-gray-700">Spray or bait and hope</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="hardware cloth 1 4 inch galvanized mesh" block>Hardware cloth &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Small yard, active runways, want them gone</td>
                  <td className="px-4 py-3 text-gray-700">Mouse snap traps set perpendicular in the runways, covered, checked daily</td>
                  <td className="px-4 py-3 text-gray-700">Scatter bait across an open lawn</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="victor wooden mouse trap multi pack" block>Snap traps &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Tulips and crocus eaten underground every year</td>
                  <td className="px-4 py-3 text-gray-700">Plant in wire bulb baskets, or switch the planting to daffodils and alliums</td>
                  <td className="px-4 py-3 text-gray-700">Replant the same bulbs unprotected</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="wire bulb planting basket cage" block>Bulb cages &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Backing onto a field, meadow or ravine</td>
                  <td className="px-4 py-3 text-gray-700">Mow a wide short strip along that edge and keep it short into November</td>
                  <td className="px-4 py-3 text-gray-700">Buy a repellent for that edge instead of mowing it, or expect to eliminate the source population</td>
                  <td className="px-4 py-3 text-xs text-gray-400">Nothing to buy &mdash; this row is mower work</td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Something is chewing inside the house</td>
                  <td className="px-4 py-3 text-gray-700">It is almost certainly not a vole &mdash; treat it as mice and seal the entry points</td>
                  <td className="px-4 py-3 text-gray-700">Buy outdoor vole products</td>
                  <td className="px-4 py-3 text-xs text-gray-400">See our mouse guides below</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <AwardRow tag={AMZ_TAG}
            heading="What Is Actually Worth Buying for Voles in Canada"
            awards={[
              {
                badge: 'Prevents the Real Loss',
                name: 'Quarter-Inch Galvanised Hardware Cloth Trunk Guards',
                why: 'Turf grows back; a girdled tree often does not. A cylinder of quarter-inch mesh around each young trunk, pushed a few centimetres into the soil and standing taller than the deepest snow you expect, is the only thing on this list that physically stops the damage that actually costs money. Leave a gap between guard and bark so the trunk can expand, and check the fit each autumn as the tree grows.',
                search: 'hardware cloth 1 4 inch galvanized mesh',
                featured: true,
                pros: ['Physical barrier — nothing to reapply, nothing to wear off', 'One roll guards many trees and lasts years', 'Also screens vents and protects raised beds'],
                cons: ['Only protects what you actually wrap', 'Must reach above snow line, or voles simply start higher'],
              },
              {
                badge: 'Best for Removing Them',
                name: 'Wooden Mouse Snap Traps (Multi-Pack)',
                why: 'The correct vole trap is an ordinary mouse snap trap, and the technique matters more than the brand: set it perpendicular across an active runway with the trigger sitting in the path, so the animal walks into it on its normal commute. Bait with peanut butter rolled in oatmeal if you like, cover each set with an upturned bucket or a propped board, and check daily. Genuinely effective on a small lot; spot control on a large one.',
                search: 'victor wooden mouse trap multi pack',
                pros: ['Cheap, reusable, and no toxicant anywhere in the yard', 'Confirms you have voles rather than something else', 'Works unbaited when set correctly in a runway'],
                cons: ['Will not clear a property backing onto meadow', 'Must be covered to keep birds, pets and children off'],
              },
              {
                badge: 'Best for One or Two Trees',
                name: 'Ready-Made Mesh Trunk Guard',
                why: 'A roll of hardware cloth plus tin snips is the right call for a yard full of young trees. For one new maple or a pair of fruit trees it is overkill, and a ready-made open-mesh trunk protector does the same job without the offcuts. Same three rules apply: set it into the soil, stand it taller than your deepest snow, and leave a gap so the trunk can expand. Choose open mesh, not a solid non-ventilated sleeve left on year round.',
                search: 'tree trunk protector mesh guard',
                pros: ['No cutting, no sharp edges, no leftover roll', 'Sized for a single trunk — sensible for one or two trees', 'Reusable and adjustable as the tree grows'],
                cons: ['Costs more per tree than cutting your own from a roll', 'Many are too short for deep snow — check the height before ordering', 'Protects the trunk only, not bulbs or turf'],
              },
              {
                badge: 'Best for Bulbs',
                name: 'Wire Bulb Baskets and Planting Cages',
                why: 'Voles reach tulips and crocus from below, through their own tunnels, which is why surface repellents disappoint bulb growers. A wire basket or a pinned sheet of hardware cloth over the bed lets shoots come up through the mesh and keeps the bulb itself out of reach. It also handles squirrels, which dig from above. If you would rather not fuss, plant daffodils and alliums instead, which voles generally leave alone.',
                search: 'wire bulb planting basket cage',
                pros: ['Solves the below-ground attack no spray reaches', 'Also stops squirrels digging bulbs from above', 'Reusable season after season'],
                cons: ['Slower to plant than dropping bulbs in a hole', 'Only protects what is inside the cage'],
              },
              {
                badge: 'Best Lawn Repair',
                name: 'Overseed and a Landscape Rake',
                why: 'The right response to a lawn full of April runways is usually not a pest product at all. Rake out the matted dead thatch so light and air reach the crowns, drop seed on the bare strips, keep them damp, and let spring growth close the lines. This is the honest cheapest fix on the page, and for a lot of Canadian households it is the only purchase the whole problem justifies.',
                search: 'grass seed overseed lawn repair',
                pros: ['Fixes the damage you can actually see, for very little', 'No chemistry, no traps, no label to read', 'Thicker turf is also less attractive cover long term'],
                cons: ['Does nothing about next winter’s voles', 'Useless if the runways are a symptom of an unmown fence line'],
              },
            ]}
            whichToBuy={
              <>
                <strong>Young trees or new plantings?</strong> Buy the <em>Prevents the Real Loss</em> hardware cloth first and do the wrapping in October, before snow. <strong>Only one or two trees to protect?</strong> The <em>Best for One or Two Trees</em> ready-made guard saves you a full roll and a pair of tin snips. <strong>Small lot with visible runways?</strong> Add the <em>Best for Removing Them</em> snap traps &mdash; the same traps that work on mice, set differently. <strong>Losing tulips underground?</strong> <em>Best for Bulbs</em> cages are the only thing that reaches that attack. <strong>Just cosmetic turf lines?</strong> The <em>Best Lawn Repair</em> route is the correct answer, and it is the cheapest one here on purpose. <strong>Backing onto a field or ravine?</strong> There is deliberately no product here for that &mdash; the mower does that job, and we do not link a lawn repellent for reasons set out in the label section below.
              </>
            }
          />
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Vole Control &mdash; Quick Reference</h2>
          <div className="rounded-xl border border-navy-100 overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Most common Canadian species', 'Meadow vole (Microtus pennsylvanicus) — sometimes called a field mouse or meadow mouse'],
                  ['Fastest ID', 'Blunt snout, hidden ears, short tail. A mouse has a pointed nose, big ears and a long tail'],
                  ['Vole vs mole', 'Clipped-grass surface runways = voles. Raised soil ridges and mounds = moles'],
                  ['Signature damage', 'Winding surface runways roughly 2.5–5 cm wide with small burrow openings along them'],
                  ['Tree damage', 'Irregular patches of small gnaw marks on bark at ground level or just above the old snow line'],
                  ['Rabbit damage instead', 'Clean angled cuts on twigs and stems, higher up — a different guard'],
                  ['Winter behaviour', 'Active all winter in the insulated space between snowpack and soil. No hibernation'],
                  ['Why damage appears in spring', 'Four months of feeding under snow becomes visible the week the snow goes'],
                  ['Do they come indoors', 'Very rarely — indoor rodents are almost always mice or rats'],
                  ['Highest-value free action', 'Mow short into late fall and clear tall grass along fence lines and ravine edges'],
                  ['Second free action', 'Pull mulch back off tree trunks — a mulch volcano is a vole den on top of the bark'],
                  ['Best physical fix', 'Quarter-inch hardware cloth cylinders, set into the soil, taller than expected snow'],
                  ['Correct trap', 'Ordinary mouse snap trap, perpendicular in an active runway, covered, checked daily'],
                  ['Repellent reality', 'Castor oil displaces rather than removes; water it in, reapply after rain and mowing — and buy only with a PCP number on the Canadian label'],
                  ['Poison bait outdoors', 'Wrong tool — check current PMRA domestic registration, and note voles are staple raptor prey'],
                  ['Best months to act', 'October–November for guards and mowing; early spring for trapping and lawn repair'],
                  ['Waste of money', 'Ultrasonic or vibrating stakes, whole-lawn broadcast bait, repellents used instead of guards'],
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

          <h2>What a Vole Actually Is, and Why That Changes the Plan</h2>
          <p>A vole is a small, stocky, plant-eating rodent that lives its whole life outdoors in grass, meadow, mulch, and garden beds. The meadow vole is the one most Canadians meet, and its everyday nicknames &mdash; field mouse, meadow mouse &mdash; are exactly what make the problem so easy to misdiagnose. It is not a mouse. It is built differently and it behaves differently, and almost every wasted dollar in vole control traces back to treating it like one.</p>
          <p>The build is the tell. A vole is chunky and compact with a blunt, rounded snout, small eyes, and ears so short they are largely buried in fur, and its tail is short &mdash; nearer the length of its hind foot than the length of its body. A house mouse is the opposite in every one of those features: slender, sharply pointed nose, big ears standing clear of the head, and a long scaly tail as long as the rest of it. The behaviour follows the anatomy. Voles are adapted for pushing through grass at ground level and tunnelling shallowly in soil, not for climbing into a pantry, and they are near-permanently outdoors.</p>
          <p>What they eat matters just as much. Voles are herbivores: grasses, roots, seeds, bulbs, hosta, and &mdash; the expensive one &mdash; the inner bark of young trees and shrubs, particularly in winter when nothing green is available. And because they are near the bottom of the food chain, they live under constant predation pressure from hawks, owls, foxes, coyotes, weasels, and cats, which is the single most useful fact in this entire guide. <strong>Voles need cover.</strong> An open, short-mown lawn is dangerous ground for them. Tall grass, a weedy fence line, thick ground cover, a heap of mulch against a trunk, or a snowpack are what make a yard survivable. Take that away and you have done more than any product does.</p>

          <p className="not-prose text-sm text-gray-600 mb-1">Check current Canadian availability of the short list:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="hardware cloth 1 4 inch galvanized mesh">Hardware cloth &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="victor wooden mouse trap multi pack">Snap traps &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="wire bulb planting basket cage">Bulb cages &rarr;</BuyLink>
          </div>

          <h2>Reading the Damage: Runways, Bark, and Bulbs</h2>
          <p>Voles leave three distinctive signatures, and being able to name which one you have decides where the money goes.</p>
          <p><strong>Surface runways.</strong> The classic snowmelt discovery: winding trails through the turf where the grass has been clipped down to the soil, roughly two to five centimetres wide, connecting small burrow openings. They look like someone has drawn a maze across the lawn with a narrow mower. These are travel corridors that voles use repeatedly, which is exactly why trapping works &mdash; the animal has committed to a route.</p>
          <p><strong>Gnawed bark.</strong> The damage that actually costs you something. Voles strip the bark from the base of young trees and shrubs, leaving irregular patches of small tooth marks running in various directions, concentrated at ground level or just above where the old snow line sat. If the bark is removed all the way around the trunk, the tree has been girdled, and it may leaf out that spring on stored energy and then fail. Fruit trees, young maples, birches, and newly planted ornamentals are the usual casualties.</p>
          <p><strong>Missing bulbs and eaten crowns.</strong> Tulips that never come up, crocus that vanish, hosta crowns hollowed out from below. This is the attack no surface treatment reaches, because it happens underground.</p>
          <p>Note what is <em>not</em> on that list: pushed-up soil. Ridges of heaved earth and conical mounds are mole work, and a mole is an insectivore hunting worms and grubs. It is not eating a single plant of yours. If that is what your lawn looks like, everything on this page is aimed at the wrong animal.</p>

          <h2>Why It All Appears at Snowmelt &mdash; and Why That Means Acting in October</h2>
          <p>Voles do not hibernate. Once snow covers the ground it forms an insulated layer over the soil, and voles spend the entire Canadian winter living and feeding in that hidden space: travelling in tunnels through the base of the snowpack, out of the wind, at a temperature that barely moves, and invisible to every predator that hunts by sight. Four months of feeding happen in there, including the bark chewing, and none of it is visible from a kitchen window.</p>
          <p>Then the snow goes, usually over a week or two in March or April, and it all appears at once. Homeowners describe this as a sudden infestation. It is a reveal, not an event.</p>
          <p>The practical consequence is the calendar. The work that decides how bad next April looks is done in <strong>October and November</strong>: mow the lawn short and keep it short into late fall so there is no tall grass to over-winter in, clear the weedy strip along fences and ravine edges, pull mulch back from every trunk, and get the hardware cloth guards on before the first lasting snow. Spring is for trapping the survivors and repairing the turf. If you are reading this in April, do the repair now and put a note in your calendar for October &mdash; that note is worth more than anything you can buy today.</p>

          <h2>Step 1 &mdash; Take Away the Cover (This Is the Free Part That Works)</h2>
          <p>Habitat is the lever, because cover is the thing voles cannot do without. Working roughly in order of return:</p>
          <ul>
            <li><strong>Mow short into late fall.</strong> A short lawn going into winter denies voles the tall matted grass they otherwise fold down into runways under the snow.</li>
            <li><strong>Clear the boundary strip.</strong> The unmown metre along a back fence, a ravine edge, or a field line is usually the source population. Widening the mown strip along that edge does more than treating the middle of the lawn ever will.</li>
            <li><strong>Pull mulch off trunks.</strong> Mulch heaped against a tree &mdash; the &ldquo;mulch volcano&rdquo; &mdash; is warm, hidden, moist habitat sitting directly on the bark you want protected. Leave a bare collar around every trunk.</li>
            <li><strong>Thin dense ground cover</strong> around young trees and against foundations. Thick periwinkle, ivy, and low junipers are excellent vole housing.</li>
            <li><strong>Do not pile shovelled snow against trunks,</strong> and keep firewood, brush piles, and stored lumber off the ground and away from the plantings you care about.</li>
          </ul>
          <p>There is a bonus here that matters more in Ontario than most homeowners realise. The same unmown grass, leaf litter, and dense shaded edge that shelters voles is prime habitat for blacklegged ticks, and the same mowing and edge work reduces both at once. If that boundary strip is a regular part of your yard, our guide to <Link href="/blog/how-to-keep-ticks-out-of-yard-ontario">keeping ticks out of an Ontario yard</Link> covers the same edge in more detail &mdash; and that one is squarely in our own lane.</p>

          <h2>Step 2 &mdash; Guard What You Cannot Afford to Lose</h2>
          <p>Everything else on this page is optional. This part is not, if you have young trees.</p>
          <p>Wrap each trunk in a cylinder of quarter-inch galvanised hardware cloth, or a purpose-made tree guard of similar mesh. Three details decide whether it works. <strong>Push it into the soil</strong> a few centimetres so nothing can simply tunnel under the edge. <strong>Make it tall enough</strong> to clear the deepest snow you realistically get, because voles gnaw from wherever the snow surface happens to be &mdash; a guard that ends at 20 cm protects nothing in a metre of snow. And <strong>leave a gap</strong> between the mesh and the bark so the trunk can expand, then check the fit each autumn as the tree grows, because a guard that becomes tight is a girdling device of its own.</p>
          <p>For bulbs, the equivalent is a wire basket or a pinned sheet of hardware cloth over the planting: shoots grow up through the mesh, the bulb stays unreachable from below, and squirrels digging from above are blocked at the same time. If you would rather not fuss with cages, plant daffodils and ornamental alliums, which voles generally leave alone.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="hardware cloth 1 4 inch galvanized mesh">Check hardware cloth on Amazon.ca &rarr;</BuyLink>
          </div>

          <h2>Step 3 &mdash; Trapping, Done Properly</h2>
          <p>The right trap for a vole is an ordinary mouse snap trap, and technique beats equipment by a wide margin.</p>
          <p>Find an active runway &mdash; the grass will be freshly clipped and the soil packed &mdash; and set the trap <em>perpendicular</em> across it, with the trigger sitting in the path itself. Voles commute along their runways constantly, so a correctly placed trap catches them on their normal route whether or not it is baited. If you want to bait, peanut butter rolled in oatmeal is the standard, and a smear of it on the trigger pan works fine.</p>
          <p>Then cover every set. An upturned bucket with a notch cut in the rim, a propped board, or a shingle laid over the trap does three jobs at once: it keeps rain, birds, pets, and curious children away from a snapping trap, it stops a hawk or a cat taking your catch before you find it, and it creates the dark enclosed tunnel voles actively prefer to travel through. Check daily, wear gloves when handling, and move any trap that has gone three days without a catch &mdash; that runway is not as active as you thought.</p>
          <p>Be realistic about scale. On a suburban lot with a handful of runways, persistent trapping over a few weeks genuinely knocks the population down. On an acre backing onto a meadow, trapping is spot control around specific plantings and the habitat work is doing the real job. Setting three traps on a large property and declaring the method a failure is the most common mistake in the category. If you want the general mechanics of snap-trap placement, our <Link href="/blog/best-mouse-trap-canada">mouse trap comparison for Canada</Link> covers the hardware itself in more detail, and <Link href="/blog/how-to-get-rid-of-mice-canada">how to get rid of mice in Canada</Link> is the right page if it turns out the animal is indoors.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="victor wooden mouse trap multi pack">Check mouse snap traps on Amazon.ca &rarr;</BuyLink>
          </div>

          <h2>Repellents: What They Do and What They Do Not</h2>
          <p>Castor-oil granules and concentrates are the mainstream vole repellent, and the honest description is <em>displacement</em>. The product makes treated turf and soil unpleasant to move through and feed in, and the voles respond by going somewhere else. Whether that is useful depends entirely on where &ldquo;somewhere else&rdquo; is: a treated boundary band along a field edge can genuinely push pressure off your property, while a treated patch in the middle of a lawn mostly relocates runways within the same yard.</p>
          <p>Three practical limits, stated plainly. It has to be watered in to reach the soil and thatch layer where voles actually travel, or it sits on top of the grass doing nothing. It needs re-application after heavy rain and after mowing. And it does nothing whatever about the cover that made your yard attractive, which means a repellent used <em>instead of</em> mowing and guarding is money spent on a symptom. We are not going to put a number on how well it works, because the honest answer is that it varies with the product, the rain, and how badly the voles want your yard.</p>
          <p><strong>One label check before you buy.</strong> An animal repellent sold for use on a lawn or garden is a pest control product in Canada, which means it needs a <strong>PCP registration number</strong> printed on the Canadian label, and the uses printed there are the legal ones. Marketplace listings blur this constantly, and plenty of US-registered repellents surface in Canadian search results without a Canadian registration behind them. Before buying, confirm the PCP number is on the label and that the item is sold and shipped from within Canada &mdash; a US granule shipped north is an unregistered pesticide here, whatever the listing says.</p>
          <p><strong>Which is why there is no buy button in this section.</strong> Every other recommendation on this page has a link under it. This one does not, and the paragraph above is the reason: a general search for castor-oil vole granules returns mostly US-market brands with no Canadian registration behind them, so pointing you at that search would hand you the exact thing we just told you to check for and reject. We are not going to do that to make a commission. If you want to try a repellent, buy it somewhere you can read the Canadian label before it goes in the cart &mdash; a Canadian garden centre, or a Canadian retailer&rsquo;s own site &mdash; and confirm two things on the label itself: a PCP registration number, and lawns or turf listed among the use sites. No PCP number means it is not a legal lawn repellent in Canada, however good the reviews look. And it stays a supplement either way; nothing in this category replaces the mowing and the trunk guards.</p>
          <p>What is not worth buying at all: ultrasonic and vibrating &ldquo;sonic stake&rdquo; repellers sold for voles, moles, and gophers. There is no credible evidence base for the category across household and yard pests, and we took it apart in our <Link href="/blog/ultrasonic-pest-repellers-do-they-work">ultrasonic pest repeller review</Link>.</p>

          <h2>Why Poison Bait Is the Wrong Answer in a Canadian Yard</h2>
          <p>This is the point where most vole articles quietly recommend a rodenticide, and we are going to argue against it for two separate reasons.</p>
          <p><strong>The regulatory reason.</strong> Health Canada&rsquo;s Pest Management Regulatory Agency has been tightening the rules around anticoagulant rodenticides and moving the stronger second-generation products away from general homeowner use. Before buying anything, confirm what is currently registered for domestic use, and then read the label&rsquo;s use sites &mdash; many rodenticide labels are written for placement in or immediately around a structure in tamper-resistant stations, not for distribution across an open lawn or garden bed. In Canada the label is legally binding, and a product being sold somewhere does not mean the use you have in mind is on it. Our guide to <Link href="/blog/rat-poison-canada-what-is-legal">what rodenticide is actually legal in Canada</Link> covers the current picture in more detail.</p>
          <p><strong>The food-chain reason, which is the stronger one.</strong> Voles are a staple prey species. Hawks, owls, foxes, coyotes, weasels, and outdoor cats eat them constantly, and a red-tailed hawk sitting on your neighbour&rsquo;s hydro pole is doing vole control on your property for free. Putting an anticoagulant into that prey base means putting poisoned animals into the predators that were suppressing the population, and it is a genuinely counterproductive trade: kill the raptors and next year&rsquo;s voles arrive into an emptier field. Bait broadcast in an open yard is also directly available to dogs, and to every non-target small mammal and ground-feeding bird that finds it.</p>
          <p>Traps, guards, and a mower do the same job without any of that.</p>

          <h2>When to Call Someone &mdash; and Which Trade</h2>
          <p>For a typical Canadian suburban lot, nobody needs to be called. BuzzSkito treats mosquitoes and ticks and does not sell vole service, so there is no upside here in pretending otherwise: the work that matters is a mower, a rake, a roll of hardware cloth, and a dozen snap traps, and a company that quotes a recurring programme without first walking your fence line, your mulch beds, and the base of your young trees is selling the wrong thing.</p>
          <p>Three situations do justify paying someone. A <strong>large property, orchard, nursery, or acreage backing onto meadow</strong>, where pressure is continuous and the scale is genuinely beyond a weekend. A yard with <strong>many young or newly planted trees</strong>, where a landscaper or arborist guarding all of them correctly in one visit beats a homeowner doing it badly across three weekends &mdash; and note that the right trade there is a landscaper, not an exterminator. And <strong>any case where you cannot tell voles from moles</strong>, because a wrong diagnosis costs you an entire season. Our <Link href="/pest-control-cost-canada">Canadian pest control cost guide</Link> gives you a baseline for sanity-checking any quote you do get.</p>

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
            <li><strong>Turns out it is indoors?</strong> <Link href="/blog/how-to-get-rid-of-mice-canada">How to Get Rid of Mice in Canada</Link></li>
            <li><Link href="/blog/best-mouse-trap-canada">Best Mouse Trap in Canada — Snap, Electronic and Live Traps Compared</Link></li>
            <li><Link href="/blog/how-to-keep-mice-out-of-your-house-winter">How to Keep Mice Out of Your House in Winter</Link></li>
            <li><Link href="/blog/rodent-exclusion-kit-canada">Rodent Exclusion Kit Canada — Sealing the Entry Points</Link></li>
            <li><Link href="/blog/rat-poison-canada-what-is-legal">Rat Poison in Canada — What Is Actually Legal</Link></li>
            <li><Link href="/blog/best-live-animal-trap-canada">Best Live Animal Trap in Canada</Link></li>
            <li><Link href="/blog/how-to-keep-ticks-out-of-yard-ontario">How to Keep Ticks Out of Your Yard in Ontario — The Same Edge, Different Pest</Link></li>
            <li><Link href="/blog/ultrasonic-pest-repellers-do-they-work">Do Ultrasonic Pest Repellers Work? The Honest Answer</Link></li>
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
        heading="The Same Overgrown Edge Is a Tick Problem Too"
        subtext="We don't treat voles — but the unmown fence line and leaf litter they live in is exactly where blacklegged ticks wait. Free yard assessment across 19 GTA cities."
      />
    </>
  )
}
