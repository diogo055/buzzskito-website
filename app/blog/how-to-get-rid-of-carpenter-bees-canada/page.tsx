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

const SLUG = 'how-to-get-rid-of-carpenter-bees-canada'
const DATE = '2026-07-30'
const UPDATED = '2026-07-30'
// ONE page only — the trap buyer's-guide intent is folded in as an H2 rather than
// minted as a second URL. At DR 0.5 a "best carpenter bee trap" sibling would
// split the cluster against itself.
const TITLE = 'How to Get Rid of Carpenter Bees in Canada — Treat the Gallery, Plug It, Then Paint'
const META_TITLE = 'Carpenter Bees Canada: Treat, Plug, Then Paint'

const FAQS = [
  {
    question: 'How do I get rid of carpenter bees?',
    answer: 'In a specific order, and the order is the whole trick. First treat the open gallery — puff a registered insect dust into the entrance hole with a bulb duster and then leave the hole open for several days, so returning females walk through it and carry it into the tunnel. Second, plug the hole once activity has stopped, ideally in autumn: drive a snug wooden dowel or exterior wood filler into the entrance and seal it flush. Third, paint the surface. If you skip straight to plugging an active gallery you will usually get a fresh hole a few centimetres away, because the bee inside tunnels with the grain and can simply chew around your plug. And if you skip the paint, next spring a new female will find the same bare, weathered board that attracted the first one.',
  },
  {
    question: 'Are carpenter bees even found in Canada?',
    answer: 'Yes, but not everywhere, and this is worth checking before you buy anything. The eastern carpenter bee is a southern species whose Canadian range is limited and concentrated in southern Ontario. Across most of the Prairies, the North, and much of Atlantic Canada, a large black-and-yellow bee hovering around a deck is far more likely to be a bumblebee — which does not bore into wood at all, nests in the ground or in existing cavities, and is a valuable pollinator you should leave completely alone. The decisive check takes two seconds: look at the top of the abdomen. Carpenter bees have a shiny, hairless, almost polished black abdomen. Bumblebees are densely furry all over.',
  },
  {
    question: 'Do carpenter bees sting?',
    answer: 'The one dive-bombing your head almost certainly cannot. That aggressive hovering, territorial behaviour is the male, and male bees have no stinger at all — the sting is a modified egg-laying structure, so only females have one. Males are all display: they hover, they chase other insects and people who walk under their patch of fascia, and they are physically incapable of stinging. Females can sting and are notably reluctant to, generally only doing so if handled or trapped against skin. In practice carpenter bees are a property problem rather than a safety problem, which is a genuinely different situation from a wasp or hornet nest by a doorway. If you can tell males from females, the white or pale patch on the face is the male.',
  },
  {
    question: 'Do carpenter bees actually eat wood?',
    answer: 'No — they excavate it, which is why the damage looks so different from termite or carpenter ant work. A female chews a nearly round entrance hole roughly a centimetre and a bit across, then turns about ninety degrees and tunnels along the grain to create a gallery where she builds a row of cells and provisions each with pollen. The wood she removes is discarded as coarse sawdust, which is why you find a small pile of it on the deck below a fresh hole, often with yellowish staining streaked down the boards beneath the entrance. The reason it becomes serious is reuse: galleries are re-occupied and extended year after year by successive generations, so a fascia board with one hole in it can quietly become a honeycombed board over several seasons.',
  },
  {
    question: 'What wood do carpenter bees attack, and what stops them?',
    answer: 'They strongly prefer bare, unfinished, weathered softwood — cedar, pine, fir and similar — which in a Canadian yard means deck railings and joists, fascia and soffit boards, pergolas, fence posts, shed trim, playsets, and unpainted outdoor furniture. What genuinely deters them is a sound coat of exterior paint on the surface. Stain and clear sealers are much weaker deterrents because they soak in rather than forming a film, and bare wood is an open invitation. That single fact reorganises the whole job: the durable fix for carpenter bees is a painting task, not a spraying task. Hardwoods and properly painted surfaces are far less attractive, and aluminium or vinyl-capped trim is not attackable at all.',
  },
  {
    question: 'Why are woodpeckers tearing up my fascia?',
    answer: 'Because there are carpenter bee larvae inside it, and this is very often the largest part of the damage bill. A woodpecker can hear or detect the larvae in the gallery and will chisel the board open along the tunnel to get at them, converting a neat one-centimetre hole into a long ragged trench. If you are seeing woodpecker damage on a fascia or a soffit, treat it as a carpenter bee diagnosis rather than a bird problem — deterring the bird while leaving the larvae in place solves nothing, and the bird is only there because of the food. Deal with the galleries, plug them, paint the board, and the woodpecker loses interest. Capping the repaired area with aluminium trim is a durable answer where the same board keeps getting opened up.',
  },
  {
    question: 'What can I legally use on carpenter bees in Canada?',
    answer: 'Whatever you use has to be registered by Health Canada’s Pest Management Regulatory Agency, carry a PCP registration number on the Canadian label, and list on that label both the pest and the site you intend to treat. This matters more than usual here because the product every American guide recommends for carpenter bees is a deltamethrin dust, and a US registration does not make a pesticide legal to sell or use in Canada. Before ordering anything from a marketplace listing, check for a Canadian PCP number and confirm the item ships from within Canada. On the domestic shelf here, PMRA-registered insecticidal diatomaceous earth — Safer’s Diatomaceous Earth is the most widely stocked, with Knock Down and Doktor Doom Be Green as registered alternatives — is the desiccant dust a homeowner can actually buy, applied with a bulb duster. Read that label’s pest list and use sites rather than assuming the mechanism makes the application legal.',
  },
  {
    question: 'Do carpenter bee traps work?',
    answer: 'They work on a real behaviour, which puts them well ahead of most novelty pest products, and they are still a supplement rather than a cure. The design mimics what a female is looking for: a wooden box with angled entrance holes bored at roughly the diameter and angle of a natural gallery, and a clear jar below. A bee enters the hole, moves down toward the light in the jar, and cannot find its way back out. They catch best when hung early, at emergence in spring, high up at a roof peak or corner near known activity and in the sun. What they will not do is clear an established gallery system in a fascia board — the bees already tunnelling in your wood have somewhere better to be. Hang traps as a supplement to treating, plugging and painting, never as a replacement for it.',
  },
  {
    question: 'Can I just plug the holes?',
    answer: 'Timing decides whether that works or backfires. Plugging an active gallery in mid-season generally produces a fresh hole a short distance away, because the occupant tunnels along the grain and can chew around a plug — and sealing developing larvae inside a board is exactly the situation that draws a woodpecker to open it up for you. The reliable sequence is to treat the open hole first, leave it open for a few days so returning bees pick the material up, and then plug it. If you would rather not use any product at all, wait until autumn when the season’s activity has finished, then plug and paint. Use a snug wooden dowel driven in with glue, or an exterior-grade wood filler, seal it flush, and then paint over the repair — the paint is what stops next spring’s female choosing the same board.',
  },
  {
    question: 'Should I kill carpenter bees at all?',
    answer: 'Sometimes the honest answer is no, and it is worth thinking about for thirty seconds before you buy a trap. Carpenter bees are native pollinators — they visit a wide range of flowers and can buzz-pollinate, which some plants depend on. If the holes are in an old fence post, the back of a shed, a woodpile, or a pergola you do not particularly care about, leaving them alone is a legitimate choice and costs you nothing. The case for intervening is structural: galleries in fascia, soffit, deck framing, railings, or any load-carrying member will be extended year on year, will attract woodpeckers, and will let water into the wood. Treat the wood you need to protect, paint it, and consider leaving the ones in the far fence line to get on with it.',
  },
  {
    question: 'When do carpenter bees show up in Ontario?',
    answer: 'They overwinter as adults inside old galleries and emerge in spring as the weather warms — in southern Ontario, generally from around May, with the conspicuous hovering, chasing and boring activity running through late spring and early summer. That is when you see the males patrolling and the fresh sawdust appearing. New adults emerge later in the summer, feed, and then return to tunnels to overwinter, which is why activity around the same fascia board tapers off and then resumes. The practical calendar: hang traps and inspect for fresh holes in spring at emergence; treat galleries during the active season if you are going to; and do the plugging and painting in autumn, when activity has finished and the repair will not be chewed around.',
  },
  {
    question: 'Do I need a pest control company for carpenter bees?',
    answer: 'Usually the trade you actually need is a painter or a carpenter, not an exterminator, and saying so saves people a recurring bill. The durable fix is filling the galleries and putting a sound coat of exterior paint on the wood, and no spray programme substitutes for that. Bring in a professional in three situations: galleries in structural members such as rafters, headers, beams or deck framing, where somebody needs to assess whether the wood is still sound; extensive woodpecker damage that has opened up a fascia or soffit run and needs proper repair and capping; and any job that means working at height on a two-storey fascia, which is genuinely the most dangerous part of this whole project and not worth a fall. Be sceptical of a quote that is only a spray schedule and never mentions filling or painting the wood.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'Carpenter bees in Canada: how to tell them from bumblebees, why the males cannot sting, and the treat-plug-paint order that stops the holes returning.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug(SLUG)

export default function HowToGetRidOfCarpenterBeesCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Independent Canadian guide to carpenter bees: telling them from bumblebees by the shiny hairless abdomen, why the hovering male has no stinger, how a gallery is excavated rather than eaten, the woodpecker damage that follows, the treat-then-plug-then-paint sequence and why plugging first fails, what is actually PCP-registered and buyable in Canada, honest limits of carpenter bee traps, and why the right trade is often a painter.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'How to Get Rid of Carpenter Bees in Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Get Rid of Carpenter Bees</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">A neat round hole in bare fascia, a small pile of sawdust below it, and a big shiny-bottomed bee hovering at your head that physically cannot sting you. The order of operations is what decides whether the holes come back next May.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <AffiliateDisclosure />
      <StickyBuyBar tag={AMZ_TAG} name="Hanging wooden carpenter bee trap" search="carpenter bee trap wooden hanging" label="Best supplement — paint is the fix" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">To get rid of carpenter bees, work in this order: <strong>treat the open gallery</strong> with a registered insect dust puffed in with a bulb duster and left open for several days, <strong>plug the hole</strong> with a dowel or exterior wood filler once activity stops, and then <strong>paint the wood</strong>. Plugging an active hole first usually produces a new hole a few centimetres away, because the bee tunnels along the grain and chews around the plug. Skipping the paint guarantees a return, because bare weathered softwood is what attracted the first female.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li><strong>Shiny black abdomen = carpenter bee.</strong> Furry all over = bumblebee, which bores nothing and should be left alone.</li>
              <li><strong>The one dive-bombing you is a male</strong> &mdash; males have no stinger. Females can sting and rarely do.</li>
              <li><strong>They excavate, they do not eat wood.</strong> Round hole, ninety-degree turn, gallery with the grain, sawdust below.</li>
              <li><strong>Woodpecker damage is the expensive part</strong> &mdash; the bird is opening the board to eat the larvae.</li>
              <li><strong>Paint is the actual fix.</strong> Stain and clear sealers are much weaker deterrents; bare weathered softwood is an invitation.</li>
              <li><strong>The American answer is a US product.</strong> Anything you use here needs a Canadian PCP registration number on the label.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito Pest Product Guides &middot; independent Canadian research</p>
          </div>

          <SpecialistDisclosure pest="carpenter bees" />
        </div>
      </section>

      <section className="bg-gradient-to-br from-emerald-50 to-white border-b border-emerald-200 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Identification &middot; Updated July 2026</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">Carpenter Bee or Bumblebee? Look at the Abdomen</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            This is the check that decides whether you have a building problem or a beneficial insect, and it takes two seconds. Carpenter bees have a <strong>shiny, hairless, almost polished black abdomen</strong>. Bumblebees are densely furry from head to tail. Everything else follows from that.
          </p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm">
            <table className="min-w-[560px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Insect</th>
                  <th className="px-4 py-3 text-left">The tell</th>
                  <th className="px-4 py-3 text-left">Where it nests</th>
                  <th className="px-4 py-3 text-left">Sting risk</th>
                  <th className="px-4 py-3 text-left">What to do</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Carpenter bee<br /><span className="font-normal text-xs text-gray-500">Xylocopa virginica</span></td>
                  <td className="px-4 py-3 text-gray-700">Large, fuzzy thorax but a <strong>bare, glossy black abdomen</strong>. Males have a pale face patch</td>
                  <td className="px-4 py-3 text-gray-700">Bores its own gallery into bare softwood &mdash; fascia, railings, pergolas, fence posts</td>
                  <td className="px-4 py-3 text-gray-700">Males <strong className="text-emerald-700">cannot sting</strong>. Females can, and seldom do</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">This page</strong> &mdash; treat, plug, paint</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Bumblebee<br /><span className="font-normal text-xs text-gray-500">Bombus species</span></td>
                  <td className="px-4 py-3 text-gray-700"><strong>Densely furry all over</strong>, including the abdomen, usually with clear yellow banding</td>
                  <td className="px-4 py-3 text-gray-700">Ground cavities, old rodent burrows, under sheds &mdash; never bores wood</td>
                  <td className="px-4 py-3 text-gray-700">Can sting, very rarely does unless the nest is disturbed</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Leave it.</strong> Some Canadian species are assessed as at risk</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Honey bee<br /><span className="font-normal text-xs text-gray-500">Apis mellifera</span></td>
                  <td className="px-4 py-3 text-gray-700">Smaller and slimmer, amber-and-brown banding, less bulky than either of the above</td>
                  <td className="px-4 py-3 text-gray-700">Hives and cavities &mdash; a colony, not a single female in a tunnel</td>
                  <td className="px-4 py-3 text-gray-700">Can sting, defensive near the colony</td>
                  <td className="px-4 py-3 text-gray-700">Call a beekeeper, not an exterminator</td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Paper wasp or hornet<br /><span className="font-normal text-xs text-gray-500">the actual sting risk</span></td>
                  <td className="px-4 py-3 text-gray-700">Slim waist, smooth and shiny rather than furry, legs dangling in flight</td>
                  <td className="px-4 py-3 text-gray-700">Builds a papery nest under eaves, in soffits, in shrubs or in the ground</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-red-700">Genuinely defensive</strong> near the nest</td>
                  <td className="px-4 py-3 text-gray-700">A different job &mdash; see our wasp guides</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-5 rounded-xl bg-amber-50 border-l-4 border-amber-400 p-4">
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong className="text-amber-900">The hovering bee is not the dangerous one.</strong> That aggressive patrol behaviour &mdash; the bee that hangs in the air in front of your face and chases you along the deck &mdash; is the male, and male bees have no stinger at all, because the sting is a modified egg-laying organ that only females possess. He is defending airspace and he is entirely bluff. If a stinging insect near a doorway is your real worry, you probably have wasps rather than carpenter bees: start with <Link href="/blog/how-to-get-rid-of-wasps-canada" className="text-emerald-700 underline font-semibold">how to get rid of wasps in Canada</Link> or, for a nest in the ground, <Link href="/blog/how-to-get-rid-of-ground-wasps-canada" className="text-emerald-700 underline font-semibold">ground wasps and yellow jackets</Link>.
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
                  <td className="px-4 py-3 font-bold text-brand-800">One or two fresh holes in a deck rail, mid-season</td>
                  <td className="px-4 py-3 text-gray-700">Dust the open hole, leave it open a few days, plug in the fall, then paint</td>
                  <td className="px-4 py-3 text-gray-700">Plug it today</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="safers diatomaceous earth" block>Registered dust &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Bees patrolling the eaves every spring</td>
                  <td className="px-4 py-3 text-gray-700">Hang traps at the roof peak at emergence, and get the fascia painted</td>
                  <td className="px-4 py-3 text-gray-700">Rely on traps alone</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="carpenter bee trap wooden hanging" block>Carpenter bee traps &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Woodpeckers ripping open the fascia</td>
                  <td className="px-4 py-3 text-gray-700">Treat the galleries, repair and plug, then cap or paint the board</td>
                  <td className="px-4 py-3 text-gray-700">Buy a bird deterrent</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="exterior wood filler epoxy dowel" block>Filler and dowels &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">New deck, pergola or shed in bare softwood</td>
                  <td className="px-4 py-3 text-gray-700">Paint it before the first spring. Prevention here is a painting job, not pest control</td>
                  <td className="px-4 py-3 text-gray-700">Leave it bare and wait</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="exterior wood primer oil based" block>Exterior primer &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Holes in an old fence post at the back of the lot</td>
                  <td className="px-4 py-3 text-gray-700">Consider leaving them &mdash; they are native pollinators and nothing structural is at risk</td>
                  <td className="px-4 py-3 text-gray-700">Spend money on it</td>
                  <td className="px-4 py-3 text-xs text-gray-400">Free &mdash; do nothing</td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Galleries in rafters, headers or deck framing</td>
                  <td className="px-4 py-3 text-gray-700">Get the wood assessed. This is a carpenter&rsquo;s call, not a spray decision</td>
                  <td className="px-4 py-3 text-gray-700">Fill and forget</td>
                  <td className="px-4 py-3 text-xs text-gray-400">Call a trade</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <AwardRow tag={AMZ_TAG}
            heading="What Is Worth Buying for Carpenter Bees in Canada"
            awards={[
              {
                badge: 'Best Supplement',
                name: 'Hanging Wooden Carpenter Bee Trap',
                why: 'Unlike most novelty pest traps, this one is built on a real behaviour: angled entrance holes bored at roughly the diameter and pitch of a natural gallery, with a clear jar below that a bee enters and cannot leave. Hang them early, at spring emergence, high at a roof peak or corner near known activity and in the sun. Buy it knowing what it is — a supplement that intercepts prospecting females, not something that clears a fascia board already full of galleries.',
                search: 'carpenter bee trap wooden hanging',
                featured: true,
                pros: ['Targets the actual nesting behaviour, not a generic lure', 'No chemistry — usable where you would not spray', 'Cheap enough to hang several along one elevation'],
                cons: ['Does nothing about existing galleries in your wood', 'Kills a native pollinator — worth a thought before hanging six'],
              },
              {
                badge: 'Best Canada-Legal Dust',
                name: 'Safer’s Diatomaceous Earth + Bulb Duster',
                why: 'The dust every American guide names for carpenter bees is a US product, and a US registration means nothing here. PMRA-registered insecticidal diatomaceous earth is the desiccant a Canadian homeowner can actually buy — Safer’s is the most widely stocked, with Knock Down and Doktor Doom Be Green as registered alternatives. Puff it into the open entrance with a bulb duster and leave the hole open for several days. Read the label’s pest list and use sites first: the mechanism being right does not make every application legal.',
                search: 'safers diatomaceous earth',
                pros: ['PMRA-registered — the PCP number is printed on the bag', 'A dry gallery is exactly the condition DE needs to keep working', 'Mechanical kill, so no resistance can develop'],
                cons: ['Goes inert once damp — useless on a rain-exposed surface', 'The label governs; check that your intended use is on it'],
              },
              {
                badge: 'Best Permanent Fix',
                name: 'Wooden Dowels + Exterior Wood Filler',
                why: 'This is the part that ends it, and it is carpentry rather than pest control. Once activity has stopped, drive a snug dowel into each entrance with exterior glue, or pack the hole with an exterior-grade filler, seal flush, sand, and paint over the repair. Doing this in autumn avoids the classic failure of plugging an active gallery and getting a fresh hole beside it.',
                search: 'exterior wood filler epoxy dowel',
                pros: ['Removes the reusable gallery instead of just the occupant', 'Keeps water out of a board that is now full of tunnels', 'No label, no restrictions, no re-application'],
                cons: ['Timing-dependent — plug too early and they chew around it', 'Ladder work on fascia, which is the risky part of this job'],
              },
              {
                badge: 'Best Prevention',
                name: 'Exterior Primer and Paint for Bare Softwood',
                why: 'The single highest-return action on this page kills nothing. Carpenter bees strongly prefer bare, weathered, unfinished softwood, and a sound film of exterior paint is what actually deters them — stains and clear sealers soak in rather than forming a film and are much weaker. Paint the fascia, the railings, the pergola and the shed trim, and the reason a female chose your house disappears. A paint store will serve you better than a marketplace listing here, and we would rather say that than pretend otherwise.',
                search: 'exterior wood primer oil based',
                pros: ['Removes the attractant rather than the insect', 'Protects the wood from water and rot at the same time', 'One job that covers every board on that elevation'],
                cons: ['A real weekend of work, and height work on fascia', 'Needs maintaining — weathered bare patches invite them back'],
              },
              {
                badge: 'Best for Woodpecker Damage',
                name: 'Quarter-Inch Hardware Cloth and Metal Trim',
                why: 'Where a woodpecker has already opened a fascia or soffit run chasing larvae, repairing and then capping is what stops the cycle. Quarter-inch galvanised mesh closes off open soffit and eave gaps, and metal or aluminium trim over a repaired board removes the surface entirely. This is also the right material for the soffit and gable-vent gaps that let other things into a Canadian roof space.',
                search: 'hardware cloth 1 4 inch galvanized mesh',
                pros: ['Ends the repeat-damage cycle rather than deterring the bird', 'Also closes gaps used by wasps, birds and rodents', 'One roll covers a lot of soffit'],
                cons: ['Only useful after the galleries are dealt with', 'Cutting and fitting mesh at height is fiddly'],
              },
            ]}
            whichToBuy={
              <>
                <strong>Active holes right now?</strong> Start with the <em>Best Canada-Legal Dust</em>, left open for several days &mdash; technique and grade detail in our <Link href="/blog/diatomaceous-earth-canada-buyers-guide">diatomaceous earth buyer&rsquo;s guide</Link>. <strong>Bees patrolling every spring?</strong> Hang the <em>Best Supplement</em> traps at emergence, with no illusions that they clear the fascia. <strong>Want it to stop for good?</strong> The <em>Best Permanent Fix</em> plugs plus the <em>Best Prevention</em> paint, done in that order in autumn, is the pairing that actually ends it. <strong>Woodpeckers already at the board?</strong> Add the <em>Best for Woodpecker Damage</em> mesh and trim once the galleries are handled.
              </>
            }
          />
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Carpenter Bee Control &mdash; Quick Reference</h2>
          <div className="rounded-xl border border-navy-100 overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Fastest ID', 'Shiny hairless black abdomen = carpenter bee. Furry abdomen = bumblebee'],
                  ['Canadian range', 'A southern species — concentrated in southern Ontario, not a countrywide pest'],
                  ['Can it sting you', 'The hovering, dive-bombing one is a male and has no stinger. Females can, and rarely do'],
                  ['What the damage looks like', 'A near-round hole about a centimetre and a bit across, then a 90° turn along the grain'],
                  ['Other signs', 'Coarse sawdust below the hole; yellowish staining streaked down the board'],
                  ['Do they eat the wood', 'No — they excavate it and discard it. Nothing is digested'],
                  ['Why it gets serious', 'Galleries are reused and extended year after year by successive generations'],
                  ['The expensive secondary damage', 'Woodpeckers chiselling the board open to eat the larvae'],
                  ['Preferred wood', 'Bare, unfinished, weathered softwood — cedar, pine, fir'],
                  ['What deters them', 'A sound film of exterior paint. Stain and clear sealer are much weaker'],
                  ['Correct order', 'Treat the open hole → leave it open a few days → plug → paint'],
                  ['Why not plug first', 'They tunnel with the grain and chew around a plug, giving you a fresh hole'],
                  ['Best month to plug', 'Autumn, after the season’s activity has finished'],
                  ['Ontario timing', 'Adults emerge in spring, generally from around May; new adults appear late summer'],
                  ['Canadian legal check', 'PCP registration number on the label, plus your pest and site actually listed on it'],
                  ['The US product problem', 'The deltamethrin dust American guides name is not automatically legal to use here'],
                  ['Right trade to call', 'A painter or carpenter for the wood; a pro only for structural members or height work'],
                  ['Waste of money', 'Ultrasonic repellers, bug zappers, WD-40 or fuel in the holes, foam without treating first'],
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

          <h2>What a Carpenter Bee Is Doing to Your House</h2>
          <p>A female carpenter bee does not eat wood. She excavates it, and understanding that changes what you should do about it. She chews a nearly perfect round entrance hole, roughly a centimetre and a bit across, into a piece of bare softwood; then she turns about ninety degrees and tunnels along the grain, hollowing out a gallery in which she builds a row of brood cells, each provisioned with pollen and sealed. The wood she removes is discarded, which is why a fresh hole has a small heap of coarse sawdust on the deck beneath it, and often a streak of yellowish staining running down the boards below the entrance.</p>
          <p>One hole in one railing is not a structural event. The reason carpenter bees earn a page is <strong>reuse</strong>. Galleries are re-occupied and extended year after year by successive generations, so a fascia board that had one entrance in it three summers ago can now have a branching tunnel system inside it and half a dozen entrances along its length. Water gets into a board like that. And in a member that is carrying load &mdash; a rafter tail, a header, a deck beam &mdash; the accumulated hollowing is worth having somebody look at properly.</p>
          <p>The second reason is the bird. Woodpeckers detect larvae inside the galleries and will chisel the board open along the tunnel to reach them, turning a tidy one-centimetre hole into a long ragged trench. In many Canadian yards that woodpecker damage is far more expensive than anything the bees did directly. If you are looking at a shredded fascia and blaming the bird, the bird is a symptom.</p>

          <p className="not-prose text-sm text-gray-600 mb-1">Check current Canadian availability of the short list:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="carpenter bee trap wooden hanging">Carpenter bee traps &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="safers diatomaceous earth">Registered dust &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="exterior wood filler epoxy dowel">Filler and dowels &rarr;</BuyLink>
          </div>

          <h2>The Order of Operations, and Why Getting It Wrong Costs You a Season</h2>
          <p>Almost every failed carpenter bee job is a sequencing error rather than a product error. Here is the sequence that works.</p>
          <p><strong>1. Treat the open gallery.</strong> Puff a registered insect dust into the entrance hole with a bulb duster &mdash; a small squeeze, not a packed hole &mdash; and then <em>leave the hole open</em> for several days. This is the counter-intuitive part. The point is that returning females and emerging adults walk through the material and carry it into the tunnel, which reaches the parts of the gallery your duster tip never will. Sealing immediately after treating throws away most of the benefit.</p>
          <p><strong>2. Plug once activity has stopped.</strong> The safest window is autumn, after the season is over. Drive a snug wooden dowel into the entrance with exterior glue, or pack it with an exterior-grade wood filler, then seal it flush and sand it. Plugging an active mid-season gallery is the classic mistake: the occupant tunnels along the grain and can simply chew around your plug, giving you a fresh hole a few centimetres away, and sealing developing larvae into a board is exactly what brings the woodpecker.</p>
          <p><strong>3. Paint the wood.</strong> This is the step people skip and it is the one that decides next May. Carpenter bees strongly prefer bare, unfinished, weathered softwood. A sound film of exterior paint is a real deterrent; stain and clear sealer soak into the wood rather than forming a film and are much weaker. Painting the whole elevation &mdash; not just the patch you filled &mdash; is what stops a new female choosing the board next to the repaired one.</p>
          <p>If you would rather use no product at all, that is a legitimate plan: skip step one, wait for autumn, and do steps two and three. You will lose that season&rsquo;s brood to nothing, but the durable fix is the carpentry and the paint regardless.</p>

          <h2>What You Can Legally Buy in Canada &mdash; and the American Advice Problem</h2>
          <p>Search this topic in English and nearly every result is written for a US reader, and nearly every one of them names a deltamethrin dust. That is genuinely the standard American recommendation, and it is not a Canadian one, because a pesticide registered in the United States is not thereby legal to sell or use in Canada.</p>
          <p>The rule here is simple and it is worth applying before you add anything to a cart. Any product sold or used as a pesticide in Canada must be registered with Health Canada&rsquo;s Pest Management Regulatory Agency and carry a <strong>PCP registration number</strong> on the Canadian label. That label is legally binding: the pests it lists and the sites it names are the uses you may legally make of it. So there are two checks, not one &mdash; is there a PCP number, and does the label actually cover this pest and this site?</p>
          <p>On the domestic Canadian shelf, the dust a homeowner can genuinely buy is PMRA-registered insecticidal diatomaceous earth: <strong>Safer&rsquo;s Diatomaceous Earth</strong> is the most widely stocked, with <strong>Knock Down</strong> and <strong>Doktor Doom Be Green</strong> as registered alternatives. It kills mechanically, by abrading and absorbing the waxy layer that holds an insect&rsquo;s moisture in, which means nothing develops resistance to it and the powder does not expire. A carpenter bee gallery in weathered fascia is a dry, enclosed space, which happens to be the condition DE needs &mdash; its normal weakness, going inert when damp, matters much less inside a tunnel than it does on an exposed surface. Buy a bulb duster with it, wear a dust mask while applying, and read the label&rsquo;s pest list and use sites before you start, because the mechanism being right does not make every application a legal one. Our <Link href="/blog/diatomaceous-earth-canada-buyers-guide">Canadian diatomaceous earth buyer&rsquo;s guide</Link> covers grades, the food-grade and pool-grade distinction, and application technique in full.</p>
          <p>Do not buy a US-only formula from a marketplace seller shipping north. It is an unregistered pesticide in Canada, it carries a US-only label that gives you no Canadian directions to rely on, and it can be stopped at the border.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="safers diatomaceous earth">Check Safer&rsquo;s DE and duster kits on Amazon.ca &rarr;</BuyLink>
          </div>

          <h2>Carpenter Bee Traps: What They Do, and What They Cannot Do</h2>
          <p>Carpenter bee traps deserve better than the blanket scepticism most novelty pest traps earn, because unlike an &ldquo;earwig trap&rdquo; or an ultrasonic plug-in, this one is engineered around a behaviour that genuinely exists. The trap is a small wooden box with entrance holes bored at approximately the diameter and upward angle of a real gallery. A prospecting female investigates the hole, moves inward and downward toward the light coming from a clear jar fixed below, and cannot find the small dark entrance again to get out.</p>
          <p>Where they earn their place: hung <em>early</em>, at spring emergence, high up at a roof peak, a gable end, or a corner near where you saw activity last year, in the sun rather than in shade. Several along one elevation beat one in the middle of a wall. They intercept females that are shopping for a nest site, which is exactly the moment you want to intervene.</p>
          <p>Where they disappoint, and why the honest verdict is &ldquo;supplement&rdquo;: a trap does nothing about the galleries already in your fascia. A bee with an established, provisioned tunnel has no reason to investigate a box hanging two metres away. Nobody clears an infested board with traps, and a household that hangs six traps and does no filling or painting will be doing the same thing next May. Hang them alongside the treat-plug-paint work, not instead of it.</p>
          <p>One more consideration that belongs on an honest page: carpenter bees are native pollinators. They visit a wide range of flowers and can buzz-pollinate, which some plants rely on. Hanging traps is a lethal control, and it is worth aiming it at the wood you actually need to protect rather than blanketing a property.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="carpenter bee trap wooden hanging">Check carpenter bee traps on Amazon.ca &rarr;</BuyLink>
          </div>

          <h2>Prevention Is a Painting Job</h2>
          <p>If you take one thing from this page, take this: the durable answer to carpenter bees is not a pesticide, it is a coat of exterior paint, and the trade you may actually need is a painter.</p>
          <ul>
            <li><strong>Paint the vulnerable softwood.</strong> Fascia, soffit boards, railings, deck framing that shows, pergola beams, shed trim, playsets, and outdoor furniture. A sound film is the deterrent. Bare weathered cedar and pine is what they are looking for.</li>
            <li><strong>Understand the paint-versus-stain gap.</strong> Stains and clear sealers penetrate rather than forming a surface film, and are correspondingly weaker here. If your deck is stained and being bored, that is not a failure of the stain &mdash; it is the wrong tool for this particular job.</li>
            <li><strong>Cap what keeps getting hit.</strong> Aluminium or vinyl-clad trim over a repeatedly attacked fascia removes the surface from the equation entirely, and it is a common answer where woodpeckers have already opened a board.</li>
            <li><strong>Close the gaps while you are up there.</strong> Quarter-inch galvanised hardware cloth over open soffit and gable-vent gaps stops birds and wasps taking up residence in the same roof space, and it is the same material and the same ladder trip.</li>
            <li><strong>Replace the wood that is past saving.</strong> A fascia board that is more tunnel than timber is not a filling job.</li>
            <li><strong>Maintain it.</strong> Bare weathered patches where paint has failed are exactly where next year&rsquo;s female will start.</li>
          </ul>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="hardware cloth 1 4 inch galvanized mesh">Check hardware cloth on Amazon.ca &rarr;</BuyLink>
          </div>

          <h2>What Not to Do</h2>
          <ul>
            <li><strong>Do not pour WD-40, gasoline, diesel, or any other non-pesticide into the holes.</strong> It is a fire hazard on a wooden structure, it is using a product as a pesticide in a way no label authorises, and it does not solve the gallery.</li>
            <li><strong>Do not foam or caulk an active gallery and walk away.</strong> Either they chew around it or you have sealed larvae into a board and given a woodpecker a reason to open it.</li>
            <li><strong>Do not buy an ultrasonic repeller.</strong> There is no credible evidence base for the category across household pests &mdash; see our <Link href="/blog/ultrasonic-pest-repellers-do-they-work">ultrasonic pest repeller review</Link>.</li>
            <li><strong>Do not buy a bug zapper for this.</strong> Carpenter bees are day-flying and are not drawn to UV light; a zapper kills large numbers of harmless moths and beetles instead. Our <Link href="/blog/bug-zappers-canada-do-they-work">bug zapper review for Canada</Link> covers what they actually catch.</li>
            <li><strong>Do not treat bumblebees by mistake.</strong> Furry abdomen, nests in the ground, bores nothing &mdash; and some Canadian species are assessed as at risk. If it is not making holes in your wood, it is not the animal on this page.</li>
            <li><strong>Do not work at height without proper footing.</strong> The most dangerous part of this entire project is the ladder, not the bee.</li>
          </ul>

          <h2>When to Call Someone &mdash; and Which Trade</h2>
          <p>BuzzSkito treats mosquitoes and ticks and does not sell carpenter bee service, so there is nothing here to protect: for most southern Ontario homeowners this is a weekend of dusting, filling, and painting, and a recurring spray programme that never fills a hole or paints a board is a subscription rather than a fix.</p>
          <p>Three situations justify paying someone, and in two of them the right trade is not an exterminator. <strong>Galleries in structural members</strong> &mdash; rafters, headers, beams, deck framing &mdash; want a carpenter or a building inspector to judge whether the wood is still sound before anything is filled and hidden. <strong>Extensive woodpecker damage</strong> that has opened a fascia or soffit run wants proper repair and capping, which is again carpentry. And <strong>any work at height on a two-storey fascia</strong> is worth paying for on safety grounds alone. For sanity-checking a quote from a pest company if you do get one, our <Link href="/pest-control-cost-canada">Canadian pest control cost guide</Link> gives you a baseline &mdash; and be sceptical of any quote that is a spray schedule with no mention of filling or painting the wood.</p>

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
            <li><strong>Actually a stinging problem?</strong> <Link href="/blog/how-to-get-rid-of-wasps-canada">How to Get Rid of Wasps in Canada</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-ground-wasps-canada">Ground Wasps and Yellow Jackets &mdash; Nests in the Lawn</Link></li>
            <li><Link href="/blog/best-wasp-nest-spray-canada">Best Wasp Nest Spray in Canada &mdash; PMRA-Registered Options</Link></li>
            <li><Link href="/blog/best-wasp-trap-canada">Best Wasp Trap in Canada &mdash; When a Trap Helps and When It Does Not</Link></li>
            <li><Link href="/blog/carpenter-ants-canada">Carpenter Ants in Canada &mdash; The Other Insect Hollowing Out Your Wood</Link></li>
            <li><Link href="/blog/diatomaceous-earth-canada-buyers-guide">Diatomaceous Earth in Canada &mdash; Which Brands Are PMRA-Registered</Link></li>
            <li><Link href="/blog/june-bugs-ontario">June Bugs in Ontario &mdash; The Other Loud Summer Beetle</Link></li>
            <li><Link href="/blog/ultrasonic-pest-repellers-do-they-work">Do Ultrasonic Pest Repellers Work? The Honest Answer</Link></li>
            <li><Link href="/pest-control-cost-canada">Pest Control Cost Canada &mdash; What Professionals Charge</Link></li>
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
        subtext="We don't treat carpenter bees — but if the yard itself is unusable in June and July, that is what we are licensed for. Free assessment across 19 GTA cities."
      />
    </>
  )
}
