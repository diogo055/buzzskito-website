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

const SLUG = 'best-silverfish-traps-canada'
const DATE = '2026-07-28'
const UPDATED = '2026-07-28'
// H1 keeps the full descriptive form. SERP title is trimmed to 48 chars so it
// survives Google's ~60-char cap once the " | BuzzSkito" template (12 chars) is
// appended. Head term: "silverfish traps" (1,100/mo CA, KD 3).
const TITLE = 'Best Silverfish Traps in Canada 2026 — What Catches Them, and What Only Counts Them'
const META_TITLE = 'Best Silverfish Traps Canada 2026 (Honest Guide)'

const FAQS = [
  {
    question: 'Do silverfish traps actually work?',
    answer: 'They work at catching silverfish, and they mostly fail at ending an infestation — and it is worth being clear about the difference before you spend money. A flat glue board laid tight against a baseboard sits directly in silverfish traffic, because silverfish run wall edges at night with their bodies in contact with a surface, so a well-placed board catches reliably. What it cannot do is reach the breeding population, which lives inside wall voids, under sill plates, behind built-ins, and in the gap above a finished ceiling. Adults live 2–8 years and can go months without food, so a trap line that removes a handful of foragers a week is trimming, not solving. Use traps as your monitoring layer and your progress meter; use humidity control as the actual cure.',
  },
  {
    question: 'What is the best silverfish trap in Canada?',
    answer: 'For most Canadian homes it is an ordinary flat insect glue board bought in a multi-pack — not a product with the word "silverfish" printed on the box at four times the price. Silverfish have no commercially validated pheromone lure, so a trap has essentially one working mechanism: sticky surface, placed where they already walk. That means you are buying glue area and quantity, and the cheapest per-board multi-pack that lays flat against a baseboard wins. If your damp basement chews through open boards with dust and moisture, step up to a covered or tented glue station, which shelters the adhesive and keeps it out of reach of pets and curious hands.',
  },
  {
    question: 'Where should I place silverfish traps?',
    answer: 'Flat against the wall, in the dark, in the damp — never in the middle of a floor. Silverfish are nocturnal, light-averse, and thigmotactic, meaning they prefer to travel with their bodies touching a surface, so a board pressed tight into the wall-floor junction intercepts them and a board in open floor does not. The productive spots in a Canadian house: basement storage corners, behind and under the laundry tub, beside the sump pit, under the bathroom vanity, behind the toilet, inside the linen closet, along the furnace-room wall (that one is checking for firebrats), and behind bookshelves or boxes in any room where you have seen one. Number every board, mark its location on a scrap of paper, and check weekly.',
  },
  {
    question: 'How long do sticky traps last for silverfish?',
    answer: 'Less time than the package implies, and the reason is the cruel irony of this whole product category: glue boards die in exactly the conditions silverfish love. Adhesive loses grip when it collects dust, and it loses grip when the air is humid — and a silverfish room is a dusty, damp basement. In a dry, clean closet a board can stay effective for months; in a damp unfinished basement corner, expect to be replacing boards on the order of weeks to a couple of months, and treat any board with a dulled, fuzzy-looking surface as spent. Two fixes: use a covered station that shields the glue, and run a dehumidifier — the same machine that ends the infestation also makes your traps last longer.',
  },
  {
    question: 'Do silverfish traps use a bait or lure?',
    answer: 'Not in any validated commercial sense, and this is where a lot of marketing overpromises. There is no consumer silverfish pheromone lure with credible evidence behind it the way heptyl butyrate works for yellowjackets, so "attractant" claims on a silverfish trap deserve scepticism. What does modestly help is what silverfish actually eat — starch and cellulose. A pinch of flour, a few rolled oats, or a scrap of dry bread placed on or beside a board gives a passing silverfish a reason to stop, and it costs nothing. But placement beats bait every single time: an unbaited board on the right baseboard will out-catch a baited board in the wrong room by a wide margin.',
  },
  {
    question: 'Does the DIY glass jar trap work for silverfish?',
    answer: 'Yes, and it is the one DIY pest trap on this site that genuinely earns its reputation — because it exploits a real physical limitation. Silverfish cannot climb smooth vertical surfaces like glass; that is why you find them stranded in a bathtub or sink in the morning. Wrap the outside of a glass jar with masking tape so they can grip and climb up, put a starchy bait in the bottom, and leave it standing against a wall overnight. They climb the tape, drop in, and cannot get back out. It costs nothing, it does not dry out or dust over like glue, and it is excellent for confirming whether you have silverfish at all. Its limits are the same as every trap: it catches foragers, not the breeding population, and one jar covers one spot.',
  },
  {
    question: 'Are Dekko Silverfish Paks legal in Canada?',
    answer: 'Check the label before you buy, because the answer is not automatic. Dekko Silverfish Paks — the boric-acid paper packets that dominate American silverfish advice — are a US EPA-registered product. Under Canada’s Pest Control Products Act, any insecticide sold or used in Canada must be registered with Health Canada’s PMRA and carry a Canadian PCP registration number on its label. Marketplace listings routinely cross-list US-registered products to Canadian buyers without that number, and the label, not the listing, is the test: no PCP number means the product is not labelled for legal sale and use here, and you have no Canadian directions standing behind how you use it. Note that a bait packet is an insecticide, while a glue board is a device — which is why traps carry no such requirement at all.',
  },
  {
    question: 'How many silverfish traps do I need?',
    answer: 'Think in rooms, not in bugs. A useful starting layout for a typical Canadian house is six to ten boards: three or four through the basement (storage corner, laundry area, sump or floor drain, furnace wall), two in bathrooms (behind the toilet, under the vanity), one in the kitchen under the sink, and one in each room where you have actually seen a silverfish. That is one multi-pack. Buying more than that at the start is wasted money — the first week of catch data tells you which two or three rooms matter, and that is where every board and every dollar should concentrate from then on.',
  },
  {
    question: 'How do I know when the silverfish are gone?',
    answer: 'Four consecutive weeks of empty boards in the rooms that were previously catching, with your humidity holding at 45–50%, is a defensible all-clear. That combination matters: empty boards alone can just mean your adhesive died, which is why you replace boards on schedule and confirm with a hygrometer reading rather than trusting a quiet trap. If catches drop sharply and then rebound six or eight weeks later, you almost certainly have a humid pocket you have not found — a crawl space, a cold room, a sweating pipe, a bathroom with a weak exhaust fan — and the rebound is a new generation, not the old one.',
  },
  {
    question: 'Do silverfish traps need PMRA registration in Canada?',
    answer: 'No, and that is a quiet advantage of choosing traps first. Glue boards, covered glue stations, and jar traps are devices, not pesticides: they kill mechanically rather than chemically, so they require no registration from Health Canada’s Pest Management Regulatory Agency and carry no label restrictions on where you may use them. Apartments, condos, rentals, kitchens, nurseries — all fine. Every insecticide legally sold in Canada is the opposite: it must be PMRA-registered and display a PCP registration number, including boric acid baits, insecticidal diatomaceous earth, and residual crawling-insect sprays. If regulatory simplicity matters to you, traps are the zero-paperwork move.',
  },
  {
    question: 'Will a trap catch the silverfish inside my walls?',
    answer: 'Only the ones that come out, which is the structural limit of trapping. Silverfish harbour in wall voids, under sill plates, behind baseboard trim, and in the dead space around plumbing penetrations, and they lay eggs in those same cracks. A glue board on the floor intercepts individuals commuting between harbourage and food; it never touches the eggs or the sheltering population. That is why the honest hierarchy on this page is humidity first, traps second: dry air reaches every void in the room whether you can access it or not, while a trap only ever samples the traffic in front of it.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'Silverfish traps compared for Canada: flat glue boards vs covered stations vs the free jar trap, why glue dies in damp basements, and the 45–50% humidity fix.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug(SLUG)

export default function BestSilverfishTrapsCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Independent Canadian comparison of silverfish traps: flat glue boards, covered glue stations, DIY jar and newspaper traps, and boric-acid bait packets — with placement technique, why adhesive fails in damp basements, PMRA/PCP context, and the humidity fix traps cannot replace.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Best Silverfish Traps Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Best Silverfish Traps</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">Glue boards, covered stations, jar traps and boric-acid packets &mdash; compared honestly for Canadian homes, including the part most buying guides skip: a silverfish trap is a measuring instrument first and a control tool second.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <StickyBuyBar tag={AMZ_TAG} name="Flat insect glue board traps (multi-pack)" search="insect glue board traps multi pack silverfish" label="Best overall trap" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">The best silverfish trap for most Canadian homes is a plain flat insect glue board bought in a multi-pack and laid tight against baseboards in damp, dark rooms &mdash; not a premium-priced product with &ldquo;silverfish&rdquo; on the label, because no consumer silverfish lure has credible evidence behind it and you are really buying glue area. Use a covered glue station where dust, damp, or pets are a problem, and the free DIY tape-wrapped jar trap to confirm what you have. But be clear on what traps are: silverfish need roughly 75&ndash;95% relative humidity to breed, so holding a room at 45&ndash;50% RH is what actually ends an infestation. Traps tell you where they are and whether you are winning.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>Traps monitor more than they solve &mdash; the breeding population lives in wall voids no board can reach, and adults live 2&ndash;8 years.</li>
              <li>Placement beats bait: silverfish travel along wall-floor junctions at night, so a board pressed into the baseboard out-catches anything in open floor.</li>
              <li>The category&rsquo;s cruel irony: glue fails fastest in dust and damp, which is exactly where silverfish live. Replace boards on schedule, or use covered stations.</li>
              <li>No validated consumer silverfish lure exists &mdash; a pinch of flour or oats helps a little; scepticism about &ldquo;attractant&rdquo; claims helps more.</li>
              <li>Traps are devices, so no PMRA registration applies. Boric-acid bait packets are insecticides and need a Canadian PCP number on the label.</li>
              <li>Four consecutive weeks of empty boards at 45&ndash;50% RH is a defensible all-clear.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito Pest Product Guides &middot; independent Canadian research</p>
          </div>
          <SpecialistDisclosure pest="silverfish" />
        </div>
      </section>

      <section className="bg-white px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <AwardRow tag={AMZ_TAG}
            heading="Our Picks — Silverfish Traps and the Tool That Ends It"
            awards={[
              {
                badge: 'Best Overall Trap',
                name: 'Flat Insect Glue Board Traps (Multi-Pack)',
                why: 'The workhorse. Silverfish run wall-floor junctions at night, and a flat board pressed into the baseboard sits directly in that traffic. Since no validated silverfish lure exists, you are buying glue area and quantity — which makes the cheapest per-board multi-pack the rational pick.',
                search: 'insect glue board traps multi pack silverfish',
                featured: true,
                pros: ['Catches reliably when placed on wall edges', 'Multi-packs let you map every room at once', 'No chemicals — fine for kitchens, nurseries and rentals'],
                cons: ['Adhesive dies in dust and damp — the exact silverfish habitat', 'A monitor, not a cure: breeders stay in wall voids'],
              },
              {
                badge: 'Best for Damp Rooms',
                name: 'Covered / Tented Glue Station',
                why: 'A housing over the adhesive keeps dust and airborne moisture off the sticky surface, which is the single biggest reason open boards stop catching in a Canadian basement. It also puts the glue out of reach of pets and small hands.',
                search: 'covered insect glue trap station tented',
                pros: ['Adhesive stays live longer in dusty basements', 'Hides the catch — no dead insects on display', 'Safer around pets and toddlers than an open board'],
                cons: ['Costs more per catch surface than plain boards', 'Bulkier — will not slide under every appliance'],
              },
              {
                badge: 'Best Actual Fix',
                name: 'Energy Star 50-Pint Dehumidifier (Humidistat + Drain)',
                why: 'Not a trap, and the honest headline of this page: silverfish need roughly 75–95% RH to reproduce. Holding a basement at 45–50% removes the condition they require, reaches every wall void no board can, and makes your remaining traps last longer.',
                search: '50 pint dehumidifier basement energy star',
                pros: ['Ends the breeding cycle instead of thinning foragers', 'Also suppresses mould, dust mites and musty smell', 'Set the humidistat, run a drain hose, forget it'],
                cons: ['By far the biggest spend on this page', 'Needs emptying unless you rig a floor-drain hose'],
              },
              {
                badge: 'Best Supporting Buy',
                name: 'Diatomaceous Earth + Hand Duster',
                why: 'A thin dust film reaches the cracks, voids and appliance gaps a trap physically cannot, and it kills by drying insects out — a fitting end for something already living on a moisture knife-edge. It works indefinitely while it stays dry.',
                search: 'diatomaceous earth insect duster',
                pros: ['Treats the harbourage, not just the traffic', 'No resistance possible — it kills mechanically', 'One bag treats a whole house repeatedly'],
                cons: ['Inert the moment it gets damp', 'Insecticidal DE in Canada needs a PCP number on the label'],
              },
            ]}
            whichToBuy={
              <>
                <strong>Just want to know what you have and where?</strong> Buy the <em>Best Overall Trap</em> multi-pack, lay six to ten boards tonight, and read them in a week &mdash; that catch map decides everything else. <strong>Basement so damp your boards go fuzzy?</strong> Switch that room to a <em>Best for Damp Rooms</em> covered station and stop replacing dead adhesive. <strong>Want the problem gone rather than measured?</strong> The <em>Best Actual Fix</em> dehumidifier is the only item here that removes what silverfish need to breed &mdash; full sizing and drainage detail in our <Link href="/blog/best-dehumidifier-for-basement-canada">basement dehumidifier guide</Link>, and the whole strategy in <Link href="/blog/how-to-get-rid-of-silverfish-canada">how to get rid of silverfish in Canada</Link>. <strong>Seeing them stream out of a crack?</strong> Add the <em>Best Supporting Buy</em> duster and treat the void itself.
              </>
            }
          />
        </div>
      </section>

      <section className="bg-gradient-to-br from-emerald-50 to-white border-b border-emerald-200 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Trap Types Compared &middot; Updated July 2026</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">The 5 Kinds of Silverfish Trap (and What Each One Is Actually For)</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            &ldquo;Silverfish trap&rdquo; covers five quite different things, and only three of them are traps at all. Here is the honest breakdown, with a live Amazon.ca price check where a purchase makes sense.
          </p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Trap type</th>
                  <th className="px-4 py-3 text-left">How it works</th>
                  <th className="px-4 py-3 text-left">Best job</th>
                  <th className="px-4 py-3 text-left">Weak point</th>
                  <th className="px-4 py-3 text-left">Price check</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Flat glue board<br /><span className="font-normal text-xs text-gray-500">Multi-pack insect boards</span></td>
                  <td className="px-4 py-3 text-gray-700">Adhesive sheet laid in the wall-floor junction where silverfish walk at night</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Mapping the house</strong> &mdash; which rooms, how many, trending which way</td>
                  <td className="px-4 py-3 text-gray-700">Glue dies in dust and humidity</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="insect glue board traps multi pack silverfish" block>Check price →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Covered glue station<br /><span className="font-normal text-xs text-gray-500">Tented / housed trap</span></td>
                  <td className="px-4 py-3 text-gray-700">Same adhesive, sheltered inside a housing with entry openings</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Damp basements</strong> and homes with pets or toddlers</td>
                  <td className="px-4 py-3 text-gray-700">More money per unit of sticky surface</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="covered insect glue trap station tented" block>Check price →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">DIY jar trap<br /><span className="font-normal text-xs text-gray-500">Tape-wrapped glass jar</span></td>
                  <td className="px-4 py-3 text-gray-700">They climb the taped outside, fall in, and cannot climb smooth glass to get out</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Confirming an ID</strong> for free, and it never dries out</td>
                  <td className="px-4 py-3 text-gray-700">One jar covers one spot; awkward to place</td>
                  <td className="px-4 py-3 text-xs text-gray-400">Free &mdash; and genuinely works</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Rolled newspaper<br /><span className="font-normal text-xs text-gray-500">Damp paper roll</span></td>
                  <td className="px-4 py-3 text-gray-700">A damp rolled paper is food plus harbourage; you bin the whole roll after a few nights</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">Marginal</strong> &mdash; a folk method, not a plan</td>
                  <td className="px-4 py-3 text-gray-700">You are adding damp cellulose to a damp room</td>
                  <td className="px-4 py-3 text-xs text-gray-400">Free &mdash; and we would skip it</td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Boric-acid bait packets<br /><span className="font-normal text-xs text-gray-500">e.g. US-market Dekko Paks</span></td>
                  <td className="px-4 py-3 text-gray-700">Not a trap &mdash; an insecticide bait they feed on and carry away</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-red-700">Check the label first</strong> &mdash; a Canadian PCP number is required</td>
                  <td className="px-4 py-3 text-gray-700">Popular US products are often not PMRA-registered here</td>
                  <td className="px-4 py-3 text-xs text-gray-400">See the legality note below</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Glue boards and covered stations are widely stocked in Canada &mdash; Amazon.ca, Canadian Tire, Home Depot Canada and Home Hardware all carry general insect glue traps. Buy the multi-pack; a single board tells you almost nothing.
          </p>
          <div className="mt-5 rounded-xl bg-amber-50 border-l-4 border-amber-400 p-4">
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong className="text-amber-900">⚠️ Traps measure, humidity cures.</strong> Silverfish need roughly 75&ndash;95% relative humidity to reproduce, adults live 2&ndash;8 years, and the breeding population sits inside wall voids a board will never touch. If you buy traps and nothing else, you have bought a very good thermometer for a fever you are not treating &mdash; the full root-cause plan is in our <Link href="/blog/how-to-get-rid-of-silverfish-canada" className="text-emerald-700 underline font-semibold">how to get rid of silverfish guide</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Silverfish Trapping — Key Facts</h2>
          <div className="rounded-xl border border-navy-100 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Best all-round trap', 'Plain flat insect glue boards in a multi-pack'],
                  ['Best in damp or pet households', 'Covered / tented glue station'],
                  ['Best free option', 'Tape-wrapped glass jar with a starch bait'],
                  ['What traps are really for', 'Finding the hot rooms and proving the population is falling'],
                  ['What ends an infestation', 'Holding indoor RH at 45–50% with a dehumidifier'],
                  ['Breeding humidity', 'Roughly 75–95% RH — below ~50% reproduction effectively stops'],
                  ['Placement rule', 'Flat against the wall-floor junction, in the dark, never open floor'],
                  ['Starting quantity', '6–10 boards for a typical house — one multi-pack'],
                  ['Check interval', 'Weekly, with each board numbered and mapped'],
                  ['Board lifespan', 'Weeks to a couple of months in damp basements; longer in dry closets'],
                  ['Lure reality', 'No validated consumer silverfish pheromone lure — placement beats bait'],
                  ['Regulatory status', 'Traps are devices (no PMRA registration); baits are insecticides (PCP number required)'],
                  ['All-clear signal', '4 consecutive weeks of empty boards at 45–50% RH'],
                  ['Not worth buying', 'Ultrasonic repellers, "silverfish-branded" boards at a premium, mothballs used off-label'],
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

          <h2>What Is the Best Silverfish Trap in Canada?</h2>
          <p>A plain flat insect glue board, bought in a multi-pack, laid tight against the baseboards of your dampest, darkest rooms. That is the whole answer, and the reason it is so unglamorous is worth understanding before you spend money on something fancier.</p>
          <p>Most successful insect traps work because of chemistry. A yellowjacket trap works because heptyl butyrate smells like food to a yellowjacket from metres away; a pantry moth trap works because a synthetic sex pheromone pulls males in from across a kitchen. Silverfish traps have nothing comparable. There is no consumer silverfish lure with credible evidence behind it, which means a silverfish trap has exactly one working mechanism: a sticky surface, sitting in a place a silverfish was going to walk anyway.</p>
          <p>Once you accept that, the shopping decision collapses into two variables &mdash; how much adhesive area you get, and how many boards you can afford to place. A product with &ldquo;silverfish&rdquo; printed on the box and a premium price attached is selling you a word, not a mechanism. Buy general insect glue boards, buy enough of them to cover every candidate room at once, and spend the money you saved on the thing that actually ends the problem.</p>

          <AffiliateDisclosure />
          <p className="not-prose text-sm text-gray-600 mb-1">Check current Canadian availability of the kit:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="insect glue board traps multi pack silverfish">Glue board multi-pack →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="covered insect glue trap station tented">Covered glue station →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="50 pint dehumidifier basement energy star">50-pint dehumidifier →</BuyLink>
          </div>

          <h2>The Honest Part: Traps Monitor, Humidity Cures</h2>
          <p>Here is the sentence most silverfish-trap articles will not write: <strong>a trap line, on its own, will almost never clear a silverfish infestation.</strong> It is not that traps do not catch &mdash; they catch well. It is that what they catch is the wrong fraction of the population.</p>
          <p>Silverfish are among the most ancient insects alive, older than winged insects, and they never evolved the water-tight cuticle that lets a beetle cross a dry patio. That leaves them permanently dependent on humid air: reproduction requires roughly 75&ndash;95% relative humidity, and eggs and nymphs simply dry out in sustained dry conditions. So the population organizes itself around moisture and shelter &mdash; inside wall voids, under the sill plate, behind baseboard trim, in the dead space around plumbing penetrations, beneath a bathroom vanity kick plate. Eggs are laid in those cracks. Nymphs develop there.</p>
          <p>A glue board on the floor intercepts the individuals commuting between that harbourage and a food source. It never touches the eggs, and it never touches the sheltering population. Meanwhile the arithmetic works against you: silverfish adults live somewhere in the range of two to eight years, keep moulting throughout adult life (unusual among insects, and the reason you find shed skins from full-grown animals), and can survive months without eating anything at all. A trap that removes a few foragers per week from a population like that is trimming hedges, not felling a tree.</p>
          <p>Change the air, though, and every hidden individual is losing the same fight regardless of which void it is sitting in. That is why the structure we recommend is: <strong>humidity first, traps second, dust third.</strong> The dehumidifier is the treatment. The trap line is the instrument that tells you the treatment is working. Our <Link href="/blog/how-to-get-rid-of-silverfish-canada">how to get rid of silverfish in Canada</Link> guide walks the whole protocol, and the <Link href="/blog/best-dehumidifier-for-basement-canada">basement dehumidifier guide</Link> covers pint sizing, continuous drainage and cold-basement performance if you are buying one.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="50 pint dehumidifier basement energy star">Check 50-pint dehumidifiers on Amazon.ca →</BuyLink>
          </div>

          <h2>Placement: the Only Variable That Really Matters</h2>
          <p>With no lure doing any work, placement <em>is</em> the product. Get this right and cheap boards perform; get it wrong and no trap on the market will catch anything.</p>
          <ul>
            <li><strong>Flat against the wall-floor junction.</strong> Silverfish are thigmotactic &mdash; they prefer moving with their bodies in contact with a surface &mdash; so they run wall edges rather than crossing open floor. A board pressed into the baseboard is in the traffic lane; the same board a hand&rsquo;s width out into the room is not.</li>
            <li><strong>Dark and undisturbed.</strong> They are strongly light-averse and nocturnal. Behind the toilet, under the vanity, behind the laundry tub, behind boxes and bookshelves, along the back wall of a storage room.</li>
            <li><strong>Damp before dry.</strong> Prioritize the rooms that smell musty: basement storage corners, the sump or floor-drain area, cold rooms, the wall shared with a crawl space, unvented bathrooms.</li>
            <li><strong>One board in the furnace room.</strong> Not for silverfish &mdash; for firebrats, their heat-loving cousins, which look similar but live at 32&deg;C and up. If your catch is beside the water heater and mottled brown rather than uniform silver, you are hunting firebrats and should be searching the utility room, not the basement.</li>
            <li><strong>Number every board and draw a map.</strong> Twenty seconds with a marker converts a pile of sticky rectangles into data. Board 4 catching six a week and board 7 catching none is the single most actionable thing you will learn all month.</li>
            <li><strong>Keep them out of pet and toddler traffic.</strong> Open adhesive is unpleasant to remove from fur and skin, and a glue board can catch a mouse &mdash; a messy and inhumane outcome nobody wants. Use covered stations where anything with fur roams.</li>
          </ul>
          <p>A pinch of bait is optional and mildly helpful: silverfish eat starch and cellulose, so a few rolled oats, a dusting of flour, or a corner of dry bread on the board gives a passer-by a reason to stop. Do not expect it to pull insects across a room. Placement beats bait, every time.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="insect glue board traps multi pack silverfish">Check glue board multi-packs on Amazon.ca →</BuyLink>
          </div>

          <h2>Why Your Glue Boards Stop Catching (the Category&rsquo;s Cruel Irony)</h2>
          <p>Adhesive traps have two enemies: dust and moisture. Airborne dust settles on the glue and gives an insect a dry, walkable crust; humidity softens and clouds the surface. Now consider where silverfish live &mdash; a damp, dusty, unfinished basement. The category&rsquo;s core product fails fastest in precisely the environment it is bought for.</p>
          <p>Practically, this means three things. First, a board that looks fuzzy, greyed, or gritty is spent, no matter how new it is; do not read an empty spent board as good news. Second, replacement intervals in a damp basement run on the order of weeks to a couple of months, while the same board in a dry upstairs closet can stay live for many months. Third &mdash; and this is the part worth internalizing &mdash; a running dehumidifier makes your traps last longer <em>and</em> reduces what they need to catch, which is one more reason the machine is the better half of this budget.</p>
          <p>Where dust and damp are unavoidable, a covered or tented glue station is the right upgrade. The housing shelters the adhesive, hides the catch from view, and keeps sticky surfaces away from pets and small hands. You pay more per unit of sticky area, and it will not slide under every appliance, but in a basement it earns the difference back in service life.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="covered insect glue trap station tented">Check covered glue stations on Amazon.ca →</BuyLink>
          </div>

          <h2>Reading the Trap Line: Three Questions Worth Answering</h2>
          <p>A numbered trap line, checked weekly, answers the three questions that decide everything else you do.</p>
          <p><strong>1. Where is the population?</strong> The hot boards identify the two or three rooms that matter. That is where the dehumidifier goes, where the diatomaceous earth goes, where the cardboard-to-tote storage overhaul happens, and where you stop wasting attention on rooms that were never involved.</p>
          <p><strong>2. Is the plan working?</strong> Once your humidity holds at 45&ndash;50%, the catch curve should bend down over roughly four to six weeks. If it does not, you have missed a humid pocket &mdash; a crawl space, a cold room, a sweating cold-water pipe, a bathroom whose exhaust fan does not actually move air. Silverfish are excellent leak detectors; a stubborn hot board is telling you something about your building, not about your trap.</p>
          <p><strong>3. Am I done?</strong> Four consecutive weeks of empty boards in previously active rooms, with a hygrometer confirming 45&ndash;50% RH, is a defensible all-clear. Both halves matter, because empty boards alone might just mean your glue died. An inexpensive two-pack of digital hygrometers &mdash; one in the basement, one in the worst bathroom &mdash; is the cheapest instrument on this page and the one that keeps you honest.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="digital hygrometer indoor humidity monitor 2 pack">Check hygrometer 2-packs on Amazon.ca →</BuyLink>
          </div>

          <h2>The DIY Jar Trap: the One Free Method That Genuinely Works</h2>
          <p>Most DIY pest traps are folk remedies that underperform the commercial product badly. The silverfish jar trap is the exception, because it exploits a real physical limitation rather than hoping an insect finds sugar water appealing.</p>
          <p>Silverfish cannot climb smooth vertical surfaces. That is why people find them stranded in a bathtub or a porcelain sink in the morning &mdash; they got in, and the walls defeated them. To weaponize that: wrap the outside of a straight-sided glass jar with masking tape or fabric tape so there is something to grip, drop a starchy bait in the bottom (flour, oats, a crust of bread), and stand the jar upright against a wall in a room you suspect. They climb the tape, tip in, and cannot climb back out.</p>
          <p>It costs nothing, it does not dust over or lose tack, and it is the fastest way to confirm you actually have silverfish rather than <Link href="/blog/how-to-get-rid-of-earwigs-canada">earwigs</Link> or something else entirely. Its limits are honest ones: one jar covers one spot, it is awkward to place under a vanity, and like every trap here it catches foragers rather than the breeding population. Use it as an ID tool and a supplement, not a substitute for a proper board line.</p>
          <p>The rolled-newspaper method &mdash; dampen a rolled newspaper, leave it out for a few nights, bin the whole thing &mdash; is the DIY option we would skip. It does attract them, but you are deliberately adding damp cellulose to a room whose entire problem is damp cellulose, and if you forget to throw it out you have built a nursery.</p>

          <h2>Boric-Acid Bait Packets and the Canadian Legality Question</h2>
          <p>Search silverfish advice in English and you will hit American recommendations for boric-acid bait packets, usually Dekko Silverfish Paks: small paper packets tucked into closets and bookshelves that silverfish feed on. They are genuinely popular in the US, and the mechanism targets what silverfish already do.</p>
          <p>Two things change north of the border. First, a bait packet is not a trap &mdash; it is an insecticide, which puts it in an entirely different regulatory category. Under Canada&rsquo;s Pest Control Products Act, any insecticide sold or used in Canada must be registered with Health Canada&rsquo;s PMRA and carry a Canadian PCP registration number on its label. Dekko Paks are a US EPA-registered product. Marketplace listings cross-list US-registered pest products to Canadian buyers constantly, so the check that matters is the label, not the listing: if there is no PCP number, the product is not labelled for legal sale and use here, and there are no Canadian directions standing behind how you use it.</p>
          <p>Second, you do not need it. Glue boards do the intercepting, a dehumidifier does the eliminating, and if you want a chemical layer for cracks and voids, insecticidal diatomaceous earth with a PCP number on the label covers that ground legally &mdash; our <Link href="/blog/diatomaceous-earth-canada-buyers-guide">diatomaceous earth buyer&rsquo;s guide</Link> covers grade selection (never pool-grade) and application technique. A packet quietly killing some silverfish in a closet was never going to beat air they cannot breed in.</p>

          <h2>What Not to Buy</h2>
          <p>Three categories of silverfish spending we would talk you out of:</p>
          <ul>
            <li><strong>Ultrasonic repellers.</strong> The claim is that high-frequency sound drives insects out. Independent testing has repeatedly failed to support it for household pests, and there is no plausible mechanism for an insect that navigates by touch and smell in wall voids. We go through the evidence in <Link href="/blog/ultrasonic-pest-repellers-do-they-work">do ultrasonic pest repellers actually work</Link>. Save the money for the dehumidifier.</li>
            <li><strong>&ldquo;Silverfish&rdquo;-branded glue boards at a premium.</strong> With no validated lure in the category, a silverfish-labelled board is the same adhesive as a general insect board wearing a costume. Compare on glue area and price per board and buy accordingly.</li>
            <li><strong>Mothballs used as a silverfish repellent.</strong> Mothballs are registered pesticides whose labels direct them to sealed containers for fabric pests. Scattering them in a basement, closet or wall cavity is off-label use, it fills living space with volatile chemical vapour, and it is not an effective silverfish strategy. Skip it.</li>
          </ul>
          <p>And a fourth honest note: <strong>buying more traps is the most common way people waste money on this problem.</strong> Ten boards tell you what twenty tell you. Once the map is drawn, additional boards add cost, not information.</p>

          <h2>When Trapping Is the Wrong Call Entirely</h2>
          <p>Silverfish are one of the most DIY-solvable pests in a Canadian house, because the root cause is environmental and the tools are hardware-store items. There are three situations where continuing to buy traps is throwing good money after bad.</p>
          <p><strong>You have run 45&ndash;50% RH for six-plus weeks and the boards are still catching.</strong> That is not a trap problem or a product problem &mdash; it is a building problem. A hidden leak, a wet wall assembly, a failed crawl-space vapour barrier, or a grading and drainage issue is feeding moisture faster than the machine removes it. The right next call is often a contractor or a building inspector before a pest professional, because until the water stops, nothing else holds.</p>
          <p><strong>You have something valuable to lose.</strong> A serious book collection, archives, artwork, or stored documents change the calculation: targeted professional treatment costs less than discovering grazing damage on irreplaceable paper. Silverfish damage is distinctive &mdash; surface grazing and notched edges rather than tunnels &mdash; and by the time you can see it, it has been happening a while.</p>
          <p><strong>You do not control the moisture source.</strong> In a rental, a condo, or a semi-detached with a shared wall, the humid space may not be yours. Traps in your unit will keep catching indefinitely while the source sits next door. That is a landlord or property-manager conversation, and a documented trap-catch log with dates is unusually persuasive evidence to bring to it.</p>
          <p>If you do bring in a professional, our <Link href="/pest-control-cost-canada">Canadian pest control cost guide</Link> shows what general interior pest work typically runs so you can sanity-check a quote &mdash; and be politely suspicious of anyone proposing a spray program with no mention of moisture at all.</p>

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
            <li><Link href="/blog/how-to-get-rid-of-silverfish-canada">How to Get Rid of Silverfish in Canada — The Humidity Fix That Actually Works</Link></li>
            <li><Link href="/blog/best-dehumidifier-for-basement-canada">Best Dehumidifier for a Basement in Canada — Sizing &amp; Drainage</Link></li>
            <li><Link href="/blog/best-large-capacity-dehumidifier-canada">Best Large-Capacity Dehumidifier Canada — For Big or Wet Basements</Link></li>
            <li><Link href="/blog/diatomaceous-earth-canada-buyers-guide">Diatomaceous Earth in Canada — Buyer&rsquo;s Guide &amp; Technique</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-centipedes-canada">How to Get Rid of House Centipedes — the Predator That Eats Silverfish</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-earwigs-canada">How to Get Rid of Earwigs in Canada</Link></li>
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
        subtext="Silverfish we research; mosquitoes and ticks we treat. If your yard in the GTA is unusable in summer, we spray it — 150 five-star reviews and a free re-spray guarantee."
      />
    </>
  )
}
