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

const SLUG = 'best-flea-bomb-canada'
const DATE = '2026-07-28'
const UPDATED = '2026-07-28'
const TITLE = 'Best Flea Bomb in Canada 2026 — Why a Hand-Applied IGR Spray Reaches What a Fogger Cannot'
const META_TITLE = 'Best Flea Bomb Canada 2026 — Do You Need One?'

const FAQS = [
  {
    question: 'Do flea bombs actually work?',
    answer: 'Poorly, and for a structural reason. A total-release fogger discharges its entire can as an aerosol that drifts and settles on upward-facing, exposed surfaces. Flea larvae are negatively phototactic — they actively burrow down into the base of carpet pile, into floor cracks, and under furniture, away from light — so the one place the fog reliably lands is the one place the immature fleas are not. Add the pupal cocoon, which is essentially insecticide-proof, and a bomb typically kills a share of the adult fleas that happen to be exposed while leaving the 95% of the population that is eggs, larvae and pupae untouched. Two weeks later you are being bitten again and you conclude the fleas are "resistant." They were mostly just out of reach.',
  },
  {
    question: 'What should I use instead of a flea bomb?',
    answer: 'A targeted household flea spray containing an insect growth regulator (IGR), applied by hand to the places fleas actually develop — carpet edges, under and behind furniture, along baseboards, and the spots where your pet sleeps — plus daily vacuuming and hot-water washing. A hand-applied spray goes where you point it; a fogger goes where gravity points it. The IGR is the part that matters most: methoprene and pyriproxyfen stop larvae from ever becoming breeding adults, which breaks the cycle rather than trimming it. In Canada, check the label for a PCP registration number and confirm fleas are listed before you buy.',
  },
  {
    question: 'Are flea bombs dangerous?',
    answer: 'They carry two real risks that a pump spray does not. First, ignition: total-release fogger propellants are flammable, and the documented failure mode is a fire or explosion when the aerosol cloud reaches a pilot light, water heater, furnace, or an electrical spark — almost always after someone used more cans than the label allows for the space. Second, exposure: public-health surveillance has repeatedly recorded acute illness — respiratory irritation, headaches, nausea — connected to fogger use, usually from re-entering too early or skipping ventilation. Neither risk is exotic. Both are avoided entirely by choosing a hand-applied product.',
  },
  {
    question: 'Are flea bombs legal in Canada?',
    answer: 'Total-release foggers as a category are legal in Canada, but each individual product must be registered with Health Canada\'s Pest Management Regulatory Agency (PMRA) and carry a Canadian PCP registration number on the label. That is the catch that trips people up: a great deal of online flea advice names US-market products that hold US EPA registrations and have no Canadian registration, which means they are not labelled for legal sale or use here and come with no Canadian directions behind them. Before buying any fogger or premise spray from a marketplace listing, look for the PCP number on the label itself, not in the listing copy.',
  },
  {
    question: 'What is an IGR and why does it matter for fleas?',
    answer: 'An insect growth regulator is a synthetic analogue of the juvenile hormone that tells an immature insect to keep being immature. Methoprene and pyriproxyfen — the two used against fleas — do not kill anything quickly. What they do is prevent larvae from ever moulting into breeding adults, and they interfere with egg viability, which collapses the pipeline that keeps re-supplying the adults biting your ankles. That is the opposite of a fogger, which kills some adults today and does nothing about tomorrow. The trade-off is patience: an IGR-only product will not stop bites this week, which is why the good household products pair an IGR with an adulticide.',
  },
  {
    question: 'Methoprene or pyriproxyfen — which is better?',
    answer: 'Indoors, either works and the choice usually comes down to what is registered and available. The practical difference is light stability: methoprene breaks down relatively quickly under ultraviolet light, so it is best suited to carpets, baseboards, and shaded interior surfaces, while pyriproxyfen is more photostable and holds up better where sunlight reaches — a sunny room, a doorway, or an outdoor pet-resting area. Pyriproxyfen is also active at very low concentrations. Neither kills adult fleas, so neither is a standalone answer to an active infestation.',
  },
  {
    question: 'How long does it take to get rid of fleas in a house?',
    answer: 'Plan for two to eight weeks of consistent work, not a weekend. The reason is the pupal stage: a flea pupa sits inside a sticky, debris-coated silk cocoon that shields it from insecticide, and it can remain dormant for weeks to months, emerging only when it senses the vibration, warmth, and carbon dioxide of a passing host. That is why fleas reappear days after a treatment that "worked" — a fresh cohort simply hatched. Seeing new adults in weeks two through four is normal. Keep vacuuming, keep washing, keep the traps running, and judge success by trap counts hitting zero for two straight weeks, not by how the first weekend went.',
  },
  {
    question: 'Do I have to treat my pet as well as the house?',
    answer: 'Yes, and the pet comes first. Adult fleas live on the animal; the eggs they lay roll off wherever it walks and rests, seeding the whole house. Treat the environment while the pet stays untreated and you are draining a bathtub with the tap running. Pet products are a veterinary decision, not a blog-post decision — the safe option differs by species, age and weight, and several dog products are dangerous to cats. Modern veterinary flea products are also the quiet reason many households never need a premise insecticide at all: some include an IGR or kill fleas fast enough to stop egg production, which breaks the household cycle from the pet outward.',
  },
  {
    question: 'Can I use a flea bomb if I have a fish tank, birds, or reptiles?',
    answer: 'This is one of the clearest reasons to skip the fogger. Pyrethroid and pyrethrin insecticides are acutely toxic to fish and to many invertebrates, and birds and reptiles are highly sensitive to airborne exposure in an enclosed space. An aerosol released into a sealed room reaches every surface, including the water surface of an aquarium and the air in a cage. If you cannot remove the animals from the building entirely, do not fog. A hand-applied spray in specific rooms is far more controllable — and vacuuming plus hot washing carries no exposure risk at all.',
  },
  {
    question: 'Does vacuuming really kill fleas?',
    answer: 'It does more than most people expect. Ohio State University research found vacuuming killed roughly 96% of adult fleas and virtually all eggs and larvae — the mechanical action of the brush roll and the trip through the airflow is lethal to soft-bodied immature stages. Vacuum vibration also triggers dormant pupae to emerge into the open, where insecticide and further vacuuming can actually reach them, which is why vacuuming immediately before and after any chemical treatment improves the result. Vacuum daily during an active infestation: carpets, rugs, baseboards, upholstery, under furniture, and the car if the pet rides in it. Empty the canister or bag into an outdoor bin every time.',
  },
  {
    question: 'Do I need to treat the yard for fleas too?',
    answer: 'Usually only a small part of it. Fleas do not thrive in open, sunny, mown turf — it is too hot and too dry for larvae. Outdoor flea development concentrates in shaded, humid, organic-debris zones: under decks and porches, in crawl space entries, along foundation shrubs, in the dog run, and anywhere wildlife or feral cats rest. Treating the whole lawn is wasted product; treating those specific microhabitats, and physically excluding wildlife from under decks and sheds, is what changes anything. If pets are re-infesting immediately after every indoor clean-up, the yard harbourage or a wildlife host is usually the missing piece.',
  },
  {
    question: 'When is a professional cheaper than DIY flea treatment?',
    answer: 'Three situations, and the arithmetic is usually not close. In a multi-unit building, fleas travel between units and single-unit DIY rarely holds — that is a landlord and licensed-operator matter. In a heavy, long-running infestation, two months of cans, sprays and lost weekends routinely exceeds the cost of one professional visit with a follow-up. And where occupants are pregnant, immunocompromised, asthmatic or very young, the exposure control a licensed applicator brings is worth paying for. Our Canadian pest control cost guide shows what general-pest interior work typically runs so you can sanity-check a quote.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description:
    'Flea bomb guide for Canada: total-release foggers miss the 95% of fleas living as eggs, larvae and pupae in carpet base — here is what to buy instead.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug(SLUG)

export default function BestFleaBombCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Independent Canadian research on flea bombs and total-release foggers: why aerosol foggers fail against flea larvae and pupae, the ignition and exposure risks, how methoprene and pyriproxyfen IGRs break the life cycle instead, PMRA registration rules, and when a professional is cheaper.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Best Flea Bomb Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Best Flea Bomb Canada</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">This is a buying guide that mostly tells you not to buy the thing. Total-release foggers settle on the surfaces fleas avoid, cannot touch the cocooned pupae, and carry an ignition risk a pump bottle does not. Here is what actually clears a Canadian house &mdash; and the narrow case where a fogger still earns its place.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <AffiliateDisclosure />
      <StickyBuyBar tag={AMZ_TAG} name="Pet-hair vacuum with a beater bar and sealed filtration" search="upright vacuum pet hair carpet sealed hepa" label="The buy that always helps" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">For most Canadian households, the best flea bomb is no flea bomb. A total-release fogger drifts down onto exposed, upward-facing surfaces &mdash; but flea larvae burrow <em>away</em> from light into the base of carpet pile, floor cracks, and the space under furniture, and flea pupae sit inside insecticide-proof cocoons. Buy a hand-applied household flea spray containing an <strong>insect growth regulator (methoprene or pyriproxyfen)</strong> instead, pair it with daily vacuuming and 60&deg;C washing, and treat the pet through your veterinarian.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>Adults are only about <strong>5%</strong> of a flea population &mdash; the other 95% are eggs, larvae and pupae a fogger never reaches.</li>
              <li>An IGR stops larvae from ever becoming breeding adults; that breaks the cycle, where a bomb only trims the visible end of it.</li>
              <li>Fogger propellants are <strong>flammable</strong> &mdash; the classic accident is a pilot light plus too many cans for the room.</li>
              <li>In Canada, every insecticide needs a <strong>PCP registration number</strong> from Health Canada&rsquo;s PMRA. Many US-famous flea products do not have one.</li>
              <li>Ohio State research found vacuuming killed roughly 96% of adult fleas and nearly all eggs and larvae &mdash; and its vibration flushes dormant pupae into the open.</li>
              <li>Expect <strong>2&ndash;8 weeks</strong>, not a weekend. The pupal window is why fleas &ldquo;come back&rdquo; after any single treatment.</li>
              <li>Untreated pet = permanent re-infestation. That part is a veterinary decision, not a hardware-store one.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito Pest Product Guides &middot; independent Canadian research</p>
          </div>
          <SpecialistDisclosure pest="fleas" />
        </div>
      </section>

      <section className="bg-white px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <AwardRow tag={AMZ_TAG}
            heading="Our Picks — What to Buy for a Flea Infestation in Canada"
            awards={[
              {
                badge: 'Best Non-Chemical Move',
                name: 'High-Suction Vacuum With a Beater Bar and Sealed Filtration',
                why: 'The single highest-impact tool on this page, and the only one that removes eggs, larvae, adults and the organic debris larvae feed on in one pass. Vacuum vibration also triggers dormant pupae to hatch into the open, where they can finally be killed — which is why vacuuming before and after any treatment measurably improves it.',
                search: 'upright vacuum pet hair carpet sealed hepa',
                featured: true,
                pros: ['Ohio State research found vacuuming removed ~96% of adults and effectively all eggs and larvae', 'Flushes the pupal stage that no insecticide can reach', 'Zero exposure risk — safe around kids, cats, birds and fish'],
                cons: ['Only works if you do it daily for weeks', 'Must empty the canister or bag outdoors every single time'],
              },
              {
                badge: 'Best Monitor',
                name: 'Plug-In Light Flea Trap',
                why: 'Cheap, quiet, and the only way to know whether you are winning. A warm light lures adult fleas onto a sticky pad overnight, so a falling nightly count is objective proof the vacuuming and washing campaign is working — and a flat count tells you something in the plan is broken before you waste another month.',
                search: 'flea trap plug in',
                pros: ['Confirms an active infestation in one night', 'Turns a guessing game into a measurable one', 'Runs unattended, no chemicals, safe in any room'],
                cons: ['Catches adult fleas only — it is a meter, not a cure', 'One per affected room, away from competing light, or the reading is useless'],
              },
              {
                badge: 'If You Still Want a Fogger',
                name: 'Doktor Doom Total-Release Fogger (PCP-registered Canadian brand)',
                why: 'This page is not pretending nobody buys these. If you have an empty property, a vacant basement, or a room you can seal and evacuate completely, a fogger does knock down exposed adult fleas fast. Doktor Doom and Konk are Canadian-registered fogger brands to shop, because a can bought off the Canadian shelf carries a PCP number rather than a US EPA one — then read the label and confirm fleas are on the pest list before you use it. Understand you are buying a knockdown, not a solution.',
                search: 'doktor doom total release fogger',
                pros: ['Fast knockdown of exposed adult fleas', 'Genuinely useful in an empty, sealable, unfurnished space', 'Cheap per can'],
                cons: ['Misses larvae in carpet base, pupae in cocoons, and anything under furniture', 'Flammable propellant — real fire and explosion risk if over-used', 'No residual control of the next generation; re-infestation in days to weeks'],
              },
            ]}
            whichToBuy={
              <>
                <strong>Typical furnished home with a pet?</strong> Skip the bomb entirely. Run the <em>Best Non-Chemical</em> vacuum daily, put a <em>Best Monitor</em> trap in each affected room so you can see the population fall, and add a hand-applied IGR premise spray bought where you can read the Canadian label &mdash; that one is the most important product on this page and the one with no buy button, for the reason set out in the panel directly below. <strong>Bites but no pet, or an apartment you just moved into?</strong> Start with the trap &mdash; confirm it is fleas before you buy any chemical, and check our <Link href="/blog/flea-bites-on-humans">flea bites identification guide</Link>, because bed bug and chigger bites are easily mistaken for flea bites. <strong>Empty unit, vacant basement, or a sealed unfurnished room?</strong> That is the one scenario where the <em>If You Still Want a Fogger</em> pick makes sense &mdash; buy the Canadian-registered can, check the PCP number and the pest list on the label, and still follow it with an IGR treatment before anyone moves back in.
              </>
            }
          />

          {/* The product this page recommends most, and deliberately does NOT monetise.
              A bare "flea spray … igr" keyword search returns Canadian- and US-labelled stock
              in the same results page, which collides head-on with this page's own rule —
              find the PCP registration number on the label and confirm fleas are on the pest
              list. We cannot name a Canadian-registered IGR premise spray we are confident is
              stocked here (the page says as much further down), so the CTA is removed and the
              editorial content kept in full. Same treatment the ant-traps guide gives outdoor
              stakes and gel syringes. */}
          <div id="igr-spray" className="not-prose mt-8 rounded-2xl border border-amber-300 bg-amber-50 p-5">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-amber-700">The pick we deliberately do not link</p>
            <h3 className="mt-1 text-xl font-extrabold text-brand-900">Household Flea Spray With an Insect Growth Regulator &mdash; buy this one off a Canadian shelf, not out of a search box</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-gray-700">
              This is the direct replacement for a fogger, and a better one: a hand-applied spray goes exactly where fleas develop &mdash; carpet edges, baseboards, under and behind furniture, pet resting spots &mdash; instead of wherever the aerosol drifts, and the IGR (methoprene or pyriproxyfen) stops larvae from ever maturing, which ends the cycle rather than thinning the adults. It is also the one product on this page with no buy button. A generic &ldquo;flea spray with IGR&rdquo; search puts Canadian- and US-labelled cans side by side, and the US ones hold EPA registrations that carry no legal standing here &mdash; precisely the products this guide warns you about. Telling you to read a PCP number and then handing you a results page whose labels you cannot see would be incoherent, so here is what to look for instead.
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-amber-200 bg-white p-4">
                <p className="text-[11px] font-extrabold uppercase tracking-wider text-brand-600">Why it beats a bomb</p>
                <ul className="mt-2 space-y-1 text-sm text-gray-700 list-disc pl-5">
                  <li>You aim it &mdash; foggers cannot be aimed</li>
                  <li>The IGR breaks the egg-to-adult pipeline, not just today&rsquo;s adults</li>
                  <li>No propellant cloud, no ignition risk, no whole-house evacuation</li>
                  <li>Slower than you want &mdash; it is not a same-day fix</li>
                </ul>
              </div>
              <div className="rounded-xl border border-amber-200 bg-white p-4">
                <p className="text-[11px] font-extrabold uppercase tracking-wider text-brand-600">What to check on the pack</p>
                <ul className="mt-2 space-y-1 text-sm text-gray-700 list-disc pl-5">
                  <li>A <strong>PCP registration number</strong> and a DOMESTIC class designation</li>
                  <li><strong>Fleas</strong> named on the pest list &mdash; not just &ldquo;crawling insects&rdquo;</li>
                  <li>An IGR (methoprene or pyriproxyfen) in the ingredients, not an adulticide alone</li>
                  <li>Carpet and upholstery cleared for use on the label</li>
                </ul>
                <p className="mt-3 rounded-lg bg-amber-100 px-3 py-2 text-sm font-semibold text-amber-900">Where to buy: a Canadian hardware, pet or big-box retailer, where the can in your hand carries the Canadian label. Canadian IGR premise products are thinner on the ground than in the US &mdash; if you cannot find a registered one, do not import a US can. Go harder on vacuuming, hot washing and steam, and treat the pet through your vet.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-emerald-50 to-white border-b border-emerald-200 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Flea Treatments Compared &middot; Updated July 2026</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">Five Ways to Treat Fleas &mdash; and What Each One Actually Reaches</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            Every flea method should be judged on one question: <em>which life stages does it touch?</em> A flea population is roughly 5% adults and 95% eggs, larvae and pupae, so anything that only handles adults is buying you days, not weeks. Here is the honest comparison.
          </p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm">
            <table className="min-w-[560px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Method</th>
                  <th className="px-4 py-3 text-left">How it works</th>
                  <th className="px-4 py-3 text-left">Life stages reached</th>
                  <th className="px-4 py-3 text-left">Main weakness</th>
                  <th className="px-4 py-3 text-left">Price check</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">Total-release fogger<br /><span className="font-normal text-xs text-gray-500">the &ldquo;flea bomb&rdquo;</span></td>
                  <td className="px-4 py-3 text-gray-700">Discharges the whole can as an aerosol that drifts and settles by gravity</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-red-700">Exposed adults only</strong></td>
                  <td className="px-4 py-3 text-gray-700">Cannot be aimed; misses carpet base, under furniture and all cocooned pupae; flammable</td>
                  <td className="px-4 py-3"><a href="#fog-anyway" className="text-xs font-semibold text-emerald-700 underline">Not recommended &mdash; read the conditions first &rarr;</a></td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">IGR premise spray<br /><span className="font-normal text-xs text-gray-500">methoprene / pyriproxyfen</span></td>
                  <td className="px-4 py-3 text-gray-700">Hand-applied to carpet edges, baseboards and pet zones; hormone analogue blocks larval development</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Eggs + larvae</strong> (plus adults if combined with an adulticide)</td>
                  <td className="px-4 py-3 text-gray-700">Slow &mdash; kills nothing today; Canadian availability is patchier than the US</td>
                  <td className="px-4 py-3"><a href="#igr-spray" className="text-xs font-semibold text-emerald-700 underline">Buy off a Canadian shelf &mdash; why we do not link it &rarr;</a></td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">Vacuum + hot wash<br /><span className="font-normal text-xs text-gray-500">the unglamorous one</span></td>
                  <td className="px-4 py-3 text-gray-700">Mechanical removal and kill; heat and agitation destroy every soft-bodied stage</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Eggs, larvae, adults</strong> &mdash; and flushes pupae out of dormancy</td>
                  <td className="px-4 py-3 text-gray-700">Requires daily discipline for weeks; nobody wants to hear it</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="upright vacuum pet hair carpet sealed hepa" block>Check price on Amazon.ca →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">Plug-in light trap<br /><span className="font-normal text-xs text-gray-500">monitor first, kill second</span></td>
                  <td className="px-4 py-3 text-gray-700">Warm light lures host-seeking adults onto a sticky pad overnight</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">Adults only</strong> &mdash; but gives you a measurable trend line</td>
                  <td className="px-4 py-3 text-gray-700">Never a cure on its own; useless if placed near a competing light</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="flea trap plug in" block>Check price on Amazon.ca →</BuyLink></td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-bold text-brand-800">Vet-directed pet treatment<br /><span className="font-normal text-xs text-gray-500">the actual source</span></td>
                  <td className="px-4 py-3 text-gray-700">Kills fleas on the animal, often before they can lay viable eggs</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Cuts off egg production at source</strong></td>
                  <td className="px-4 py-3 text-gray-700">Does nothing about the eggs and larvae already in your carpet</td>
                  <td className="px-4 py-3 text-xs text-gray-400">Ask your veterinarian</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-5 rounded-xl bg-amber-50 border-l-4 border-amber-400 p-4">
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong className="text-amber-900">⚠️ The honest verdict.</strong> No single row in this table solves fleas. The combination that does is: <strong>vet-treated pet + daily vacuuming + hot washing + a hand-applied IGR product</strong>, run for two to eight weeks with a trap on the floor telling you whether it is working. A fogger is not in that list, and adding one does not speed it up.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Flea Bomb Buying &mdash; Key Facts</h2>
          <div className="rounded-xl border border-navy-100 overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Best choice for most homes', 'Hand-applied flea spray with an IGR — not a fogger'],
                  ['Share of population that is adults', 'About 5% — the other 95% are eggs, larvae and pupae'],
                  ['Why foggers fail on fleas', 'Aerosol settles on exposed surfaces; larvae burrow away from light'],
                  ['The stage nothing reaches', 'Pupae — sealed in a debris-coated silk cocoon, dormant for weeks to months'],
                  ['IGR actives to look for', 'Methoprene (best indoors/shade) or pyriproxyfen (more light-stable)'],
                  ['What an IGR does not do', 'Kill adult fleas — pair it with an adulticide or vacuuming'],
                  ['Canadian legality test', 'A PCP registration number on the label. No PCP number = not legal here'],
                  ['Fogger safety rule', 'Flammable propellant — kill pilot lights, never exceed the label can count'],
                  ['Vacuuming effectiveness', 'Ohio State research: ~96% of adults, nearly all eggs and larvae — plus flushes pupae'],
                  ['Laundry temperature', '60°C (140°F) wash, high-heat dry, for all pet and human bedding'],
                  ['Realistic timeline', '2–8 weeks; new adults in weeks 2–4 are normal, not failure'],
                  ['Yard treatment', 'Only shaded, damp harbourage — decks, crawl spaces, dog runs. Not open lawn'],
                  ['Call a pro when', 'Multi-unit building, 2+ months of failed DIY, or vulnerable occupants'],
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

          <h2>Should You Buy a Flea Bomb at All?</h2>
          <p>Probably not &mdash; and it is worth being blunt about that at the top of a page that could very easily just sell you one. &ldquo;Flea bomb&rdquo; is the search people reach for at 9 p.m. in a hallway, holding a can and wondering whether to set it off. The answer, for a normal furnished house with a pet and carpet, is that a total-release fogger will cost you an evening out of the house, a full re-clean of every kitchen surface, and a fortnight of false hope.</p>
          <p>The reason is not that foggers use bad insecticide. The actives inside them are, in most cases, the same pyrethrins and pyrethroids you would find in a pump bottle. The problem is <em>delivery</em>. A fogger discharges the entire can into the air, the droplets drift on room currents, and gravity takes over &mdash; leaving a thin deposit on every upward-facing, unobstructed surface: the top of the couch, exposed carpet pile, the counter you forgot to cover, the kids&rsquo; toys. That is a reasonable way to kill a flying insect that lands in the open. It is close to the worst possible way to kill a flea.</p>

          <p className="not-prose text-sm text-gray-600 mb-1">Check current Canadian availability of the two tools you can simply buy &mdash; a vacuum and a light trap are unregulated hardware with no label to verify. The third thing that works, an IGR premise spray, is a registered pesticide and gets no link from us: the listing copy is not the label, so buy that one where you can read the PCP registration number and confirm fleas are on the pest list.</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="upright vacuum pet hair carpet sealed hepa">Pet-hair vacuum →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="flea trap plug in">Plug-in flea trap →</BuyLink>
          </div>

          <h2>The 95/5 Rule: Why Life-Stage Coverage Decides Everything</h2>
          <p>If you take one idea from this page, take this one. At any given moment, the adult fleas you can see &mdash; on the pet, jumping onto your ankles, caught in a comb &mdash; represent roughly <strong>5% of the flea population living in your house</strong>. The remaining 95% are eggs, larvae and pupae, and they are not on the pet. They are in the carpet, in the cracks between floorboards, in the seams of the couch, and in the fibres of whatever the animal sleeps on.</p>
          <p>The cycle runs like this. A female cat flea &mdash; <em>Ctenocephalides felis</em>, a species commonly found in Canadian homes regardless of whether you own a cat &mdash; feeds on the host and begins laying within about a day. The eggs are smooth and non-sticky by design: they roll straight off the animal and land wherever it walks, sleeps and shakes itself, which is why the dog bed and the corner of the couch are always the hottest zones in a house.</p>
          <p>Those eggs hatch into larvae, and larvae behave in a way that is fatal to the whole fogger concept: they are <strong>negatively phototactic</strong>. They actively avoid light. A flea larva does not sit on exposed carpet waiting to be misted &mdash; it wriggles <em>down</em>, to the base of the pile, into the gap under the baseboard, into the crack at the edge of the hardwood, under the couch, beneath the dresser, feeding on organic debris and the dried blood in adult flea faeces. Everything about a larva&rsquo;s life is oriented away from the surfaces a settling aerosol can reach.</p>
          <p>Then comes the stage that defeats every chemical ever made. The larva spins a silk cocoon and coats it in dust, carpet fibre, and debris, producing a camouflaged, sticky, semi-sealed capsule. Inside, the pupa can wait. If conditions are right it emerges in a week or so; if they are not, it can stay dormant for <strong>weeks to months</strong>, waiting for the vibration, body heat, and exhaled carbon dioxide that signal a host has walked past. That cocoon is highly resistant to insecticide. No fogger, no spray, and no dust penetrates it reliably.</p>
          <p>So when a household sets off a bomb, feels triumphant for four days, and then gets bitten again, nothing mysterious has happened. The bomb killed some exposed adults. The eggs kept hatching, the larvae kept feeding in the carpet base, and a cohort of pupae &mdash; woken by the vibration of everyone walking back in &mdash; emerged into a house where the insecticide deposit had already degraded. This is a well-documented flea-control failure mode, and it is entirely predictable.</p>

          <h2>The Three Things a Flea Bomb Cannot Do</h2>
          <p><strong>1. It cannot be aimed.</strong> With a trigger bottle you deliberately soak the six inches of carpet at the baseboard, the underside of the couch, the crack behind the dresser and the pet bed &mdash; the exact microhabitats where larvae live. A fogger&rsquo;s deposit is dictated by air currents and gravity instead, and the fraction landing where flea larvae actually are is small.</p>
          <p><strong>2. It cannot penetrate.</strong> University extension entomologists have said this for decades: total-release foggers do not drive insecticide into carpet pile, cracks and crevices, or wall voids. Furniture, rugs, closed closet doors and anything with a lid all shadow the surfaces beneath them &mdash; and shielded floor is exactly where fleas develop.</p>
          <p><strong>3. It cannot touch the pupae.</strong> The cocoon is a physical barrier, not a dosage problem, so it is not solved by a stronger chemical, a second can, or a longer closed-up period. The only reliable way to deal with the pupal stage is to make it hatch &mdash; through vacuuming vibration, foot traffic and warmth &mdash; and kill what emerges. That is a process over weeks, and no aerosol device can deliver a process.</p>
          <p>A fourth issue gets less attention and deserves more: many pyrethroid formulations are <strong>repellent</strong>. Against cockroaches this is well documented &mdash; foggers drive roaches deeper into wall voids and adjacent rooms rather than killing them, which is why professionals use non-repellent gels instead. The same irritancy pushes surviving fleas further into the structure, and in a semi-detached house or apartment it can push the problem sideways into a neighbouring unit. Our <Link href="/blog/advion-cockroach-gel-bait">cockroach gel bait guide</Link> covers that trap in detail, and the <Link href="/blog/best-bed-bug-fogger-canada">bed bug fogger guide</Link> documents the identical failure pattern against a different pest.</p>

          <h2>The Safety Problem: Flammable Propellant, and What Actually Goes Wrong</h2>
          <p>A total-release fogger is a pressurised can that empties itself. To do that it needs a propellant, and those propellants are flammable. The documented accident pattern is depressingly consistent: someone sets off several cans in a small space &mdash; a basement, a bedsit, a closed apartment &mdash; the vapour concentration climbs, and it reaches an ignition source. A furnace pilot light. A water heater. A refrigerator compressor kicking on. A light switch being flipped by someone coming back in. The result is a flash fire or an explosion capable of blowing out windows and, in the worst cases, structural damage.</p>
          <p>The multiplier is almost always over-use. Foggers are labelled for a specific cubic volume &mdash; one can per stated room size &mdash; and the instinctive move of a frustrated homeowner is to use more, not fewer, because the last round did not work. That instinct is what turns an ineffective treatment into a dangerous one.</p>
          <p>The second, quieter risk is exposure. Public-health surveillance in North America has repeatedly logged acute illness connected to total-release fogger use: respiratory irritation, headache, nausea, eye and throat irritation. The causes are mundane &mdash; re-entering before the label&rsquo;s stated time, not ventilating afterwards, not covering food-contact surfaces, children and pets returning to a room that still holds residue. A hand-applied spray does not create a whole-room aerosol cloud, which removes the entire category of risk. And if you keep fish, birds or reptiles, treat fogging as disqualified outright: pyrethroids are acutely toxic to fish, caged birds are extremely sensitive to airborne insecticide, and an aerosol in a sealed room reaches the water surface of an aquarium and the air inside a cage.</p>

          <h2>What to Buy Instead: IGRs, and Why They Are the Real Answer</h2>
          <p>An <strong>insect growth regulator</strong> is not an insecticide in the way people usually mean the word. It is a synthetic analogue of the juvenile hormone that tells an immature insect to stay immature. The two used against fleas are <strong>methoprene</strong> (usually as S-methoprene) and <strong>pyriproxyfen</strong>. Neither drops an adult flea. What they do is prevent larvae from ever moulting into breeding adults, and interfere with the viability of eggs &mdash; which means they attack the 95% of the population that every other consumer product misses.</p>
          <p>That is the whole argument. A fogger reduces today&rsquo;s adults and does nothing about tomorrow&rsquo;s; an IGR barely touches today&rsquo;s and dismantles tomorrow&rsquo;s entirely. Since fleas re-supply adults from the carpet continuously, the second is what ends an infestation &mdash; which is why professional flea programs have been built around IGRs for decades.</p>
          <p>Choosing between the two is simpler than the internet suggests: methoprene degrades relatively fast under ultraviolet light, so it belongs on carpets, in baseboard cracks, under furniture and in shaded interior spaces, which is most of a flea problem. Pyriproxyfen is more photostable, making it the better choice for a sunroom, doorway, garage or outdoor pet-resting area. Neither is a fast fix, which is why the household products worth buying combine an IGR with an adulticide &mdash; the adulticide handles the fleas biting you this week, the IGR guarantees no cohort behind them.</p>
          <div className="not-prose my-4 rounded-xl border-l-4 border-amber-400 bg-amber-50 px-4 py-3">
            <p className="text-sm leading-relaxed text-gray-800"><strong className="text-amber-900">No buy button on this one, on purpose.</strong> A keyword search for &ldquo;flea spray with IGR&rdquo; returns Canadian- and US-labelled cans in the same results page, and the US ones carry EPA registrations that mean nothing here. Buy this product where the label is in your hand and you can confirm three things: a <strong>PCP registration number</strong>, a DOMESTIC class designation, and <strong>fleas</strong> named on the pest list.</p>
          </div>
          <p>Picking between specific sprays is a longer conversation than this page should have &mdash; active ingredients, residual length, carpet safety, and which ones actually carry an IGR rather than just an adulticide. We work through it product by product in our <Link href="/blog/best-flea-spray-for-home-canada">best flea spray for home in Canada</Link> guide; this page&rsquo;s job is simply to get you out of the fogger aisle and into that one.</p>
          <p>One honest Canadian caveat before you shop. Consumer premise sprays that combine an adulticide with an IGR are far more common in the United States than here, and a lot of the flea advice you will read was written for that market. If you cannot find a Canadian-registered IGR premise product, do not import one &mdash; go harder on the mechanical side (vacuuming, hot washing, steam) and lean on the veterinary route, because several modern pet products either contain an IGR themselves or kill fleas fast enough on the animal to stop viable egg production. That approach breaks the household cycle from the source outward, and it is frequently the cheapest total solution available to a Canadian household.</p>

          <h2>The Canadian Legality Trap: PCP Numbers and US Product Names</h2>
          <p>Under Canada&rsquo;s <em>Pest Control Products Act</em>, any insecticide sold or used in Canada must be registered with Health Canada&rsquo;s Pest Management Regulatory Agency (PMRA) and must carry a <strong>PCP registration number</strong> on its label. That number is the entire test. It is not a formality, and it is not something a marketplace listing can substitute for.</p>
          <p>This matters for fleas specifically because a great deal of the flea advice online is written for the US market. Search any flea forum and you will find confident recommendations for US-market premise sprays, foggers and carpet treatments &mdash; products holding US EPA registrations, which have no legal standing in Canada. Some of those brands also sell separate Canadian-registered products under similar names, which makes the confusion worse rather than better. The rule that survives all of it: <strong>look at the label, find the PCP registration number, and confirm fleas are on the pest list.</strong> If the listing photo does not show a label you can read, treat that as a no.</p>
          <p>Practically, that means shopping the Canadian-market shelf. Domestic brands selling PMRA-registered household insecticides through Canadian retail &mdash; Doktor Doom and Konk among them &mdash; are where to start, because there is no cross-border registration question with a can bought off a Canadian shelf. Still verify the pest list on the specific product: a brand having a registered fogger does not mean every product in the line is labelled for fleas. See the <Link href="/blog/how-to-get-rid-of-silverfish-canada">silverfish guide</Link> for the identical Dekko-packet version of this trap, and the <Link href="/blog/diatomaceous-earth-canada-buyers-guide">diatomaceous earth buyer&rsquo;s guide</Link> for how the PCP rule applies even to ground rock dust.</p>

          <h2>The Protocol That Actually Clears a Canadian House</h2>
          <p>Here is the sequence, in the order that matters. Doing steps three and four without step one is the reason most DIY flea campaigns stall.</p>
          <ol>
            <li><strong>Treat every pet in the home &mdash; through your veterinarian, first.</strong> Adult fleas live on the animal and lay the eggs that seed everything else. Until the host is treated, you are removing fleas from a room that is being resupplied hourly. This is a veterinary decision because the safe product differs by species, age and weight, and several dog products are genuinely dangerous to cats. Treat <em>all</em> animals, not just the itchy one.</li>
            <li><strong>Strip and hot-wash everything washable.</strong> Pet bedding, human bedding, throw blankets, cushion covers, the mat by the door: 60&deg;C (140&deg;F) wash, high-heat dry. Heat kills every life stage including eggs. Anything that cannot be washed &mdash; a dog bed with a foam core, say &mdash; is often cheaper to replace than to salvage during an active infestation.</li>
            <li><strong>Vacuum daily, and aggressively.</strong> Carpets, rugs, baseboards, under and behind furniture, upholstery seams, the closet floor, and the car if the pet rides in it. Use a beater bar on carpet &mdash; the agitation does as much work as the suction. Empty the canister or bag into an outdoor bin every single time; a full canister in a warm utility room is a nursery.</li>
            <li><strong>Apply an IGR product to the zones that matter.</strong> Not the whole floor &mdash; the specific microhabitats: the carpet strip along baseboards, under and behind furniture, the pet&rsquo;s resting spots, and any floor crack or transition strip. Follow the Canadian label exactly on re-entry time and keeping cats off treated surfaces until dry. Vacuum immediately before treating, so the deposit lands on lifted pile rather than matted debris.</li>
            <li><strong>Deploy monitors and measure.</strong> One plug-in light trap per affected room, at floor level, away from competing light. Write down the nightly count &mdash; tracked across weeks, it is the only objective feedback you will get.</li>
            <li><strong>Keep going through the pupal window.</strong> Weeks two through four will produce new adults. That is cocoons hatching, not failure. Success is trap counts at zero for two consecutive weeks with a treated pet in the house.</li>
          </ol>
          <p>Two optional additions genuinely earn their place. A <strong>steam cleaner</strong> on carpet and upholstery adds the one thing neither a vacuum nor a spray delivers &mdash; heat down in the pile, which kills larvae and eggs and the moisture and vibration flush pupae; our <Link href="/blog/best-steam-cleaner-for-pest-control-canada">steam cleaner guide for pest control</Link> covers what temperature actually matters. And a thin, barely visible film of <strong>diatomaceous earth</strong> in dry cracks, along baseboard gaps, and under appliances kills by desiccation and does not degrade while it stays dry &mdash; useful in exactly the crevices the vacuum cannot fully clear.</p>
          <p>One caveat decides which bag of DE you buy, and it is the same PCP rule as everything else on this page. Only <em>insecticidal</em> diatomaceous earth is registered as a pesticide in Canada &mdash; Safer&rsquo;s, Knock Down and Doktor Doom Be Green carry a PCP registration number and legal application directions on the bag. The cheaper food-grade DE that dominates search results is sold as an anti-caking agent or animal feed additive: no pesticide registration, no PCP number, and no lawful pesticidal use here. Buy the registered product by name, and apply it with a bulb duster rather than a spoon.</p>
          <div className="not-prose my-4 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="safers diatomaceous earth">Safer&rsquo;s DE (PMRA-registered) →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="diatomaceous earth duster applicator">Bulb duster →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="upright vacuum pet hair carpet sealed hepa">Check pet-hair vacuums →</BuyLink>
          </div>
          <p>On the vacuum specifically: this is the one purchase on this page where spending more genuinely changes the outcome, because suction, brush-roll agitation, and sealed filtration all matter when you are removing eggs and larvae from carpet base every day for a month. Our <Link href="/blog/best-hepa-vacuum-for-bed-bugs-and-fleas-canada">HEPA vacuum guide for bed bugs and fleas</Link> breaks down what to look for on a spec sheet, and why a sealed filtration path matters more than a raw suction number.</p>

          <h2 id="fog-anyway">If You Are Going to Fog Anyway, Do It Properly</h2>
          <p>There is one scenario where a total-release fogger is a defensible tool: a space that is <strong>empty, sealable, and unfurnished</strong>. A vacant apartment between tenants. A cleared basement. A storage room. In those cases most of the floor is genuinely exposed, there is nothing to shadow the deposit, and there is no one to expose. Even then, the fog handles adults only, so an IGR treatment before anyone moves back in is not optional.</p>
          <p>If that is your situation, the label is the law and these are the non-negotiables:</p>
          <ul>
            <li><strong>Buy Canadian-registered product only.</strong> PCP registration number on the label, fleas on the pest list. No PCP number, no purchase. Doktor Doom and Konk are Canadian brands whose total-release foggers carry a PCP number &mdash; start there rather than with a generic search, because an open marketplace search will put US-registered cans in front of you that have no Canadian label behind them.</li>
            <li><strong>Use the number of cans the label states for the space &mdash; never more.</strong> This is the single rule that separates an ineffective treatment from a dangerous one.</li>
            <li><strong>Extinguish every pilot light and shut off the gas to appliances</strong> in the treatment area. Unplug what you can. Do not flip a light switch on the way out.</li>
            <li><strong>Remove or seal everything that touches food or skin:</strong> dishes, utensils, food, cutting boards, toys, toothbrushes, pet bowls. Cover what cannot be removed.</li>
            <li><strong>Remove every animal from the building</strong> &mdash; not to another room. Fish, birds and reptiles included; if the tank cannot leave, do not fog.</li>
            <li><strong>Respect the re-entry time, then ventilate hard.</strong> Open everything, run fans, and give it longer than you think. Then wipe down every food-contact surface before use.</li>
            <li><strong>Never fog in a crawl space, attic, or any tight enclosed volume.</strong> That is where the vapour concentration climbs fastest.</li>
          </ul>
          <div className="not-prose my-4 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="doktor doom total release fogger">Doktor Doom fogger →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="konk total release fogger">Konk fogger →</BuyLink>
          </div>
          <p className="not-prose text-sm text-gray-600 mb-6">Both are Canadian brands that register their foggers with the PMRA, which is why they are named here instead of a generic &ldquo;flea bomb&rdquo; search. Confirm the PCP number and the pest list on the can you actually receive &mdash; a brand holding registrations does not mean every product in its line is labelled for fleas.</p>

          <h2>Fleas Outdoors: Treat the Harbourage, Not the Lawn</h2>
          <p>People routinely spend money treating an entire yard for fleas, and it is almost entirely wasted. Fleas do not develop in open, sunny, mown turf &mdash; it is too hot, too dry and too exposed for larvae to survive. Outdoor development concentrates in a handful of shaded, humid, organic-debris microhabitats: under decks and porches, in crawl space entries, along the mulched bed beside the foundation, in the dog run, in the shady spot where the animal actually lies down, and anywhere raccoons, skunks, squirrels or feral cats are resting. That last item is the one most homeowners miss &mdash; if pets re-infest within days of every indoor clean-up, the source is often a wildlife host denning under a deck or shed, and the fix there is physical exclusion, not more insecticide.</p>

          <h2>When a Professional Is the Cheaper Answer</h2>
          <p>There are three flea situations where DIY is the expensive option.</p>
          <p><strong>Multi-unit buildings.</strong> Fleas travel between apartments, and so do the wildlife and stray-cat hosts that seed them. Treating one unit while the next stays untreated is money poured into a shared wall. Notify the landlord or property manager in writing and push for a coordinated licensed treatment.</p>
          <p><strong>Two months of disciplined DIY with no downward trend.</strong> If trap counts are flat after eight weeks of daily vacuuming, hot washing, a treated pet and an IGR product, something structural is wrong &mdash; an untreated animal, a wildlife host under the deck, a room nobody has been vacuuming. A licensed operator brings professional-tier IGR and adulticide combinations plus the diagnostic eye to find what you are missing, usually for less than another two months of cans. Our <Link href="/pest-control-cost-canada">Canadian pest control cost guide</Link> shows what general-pest interior work typically runs.</p>
          <p><strong>Vulnerable occupants.</strong> Pregnancy, asthma or other respiratory conditions, immunocompromise, infants, or a household that cannot vacate for a treatment window. Targeted crack-and-crevice application instead of a whole-room aerosol is the entire point of paying for the service.</p>
          <p>To be transparent about our own position: that referral is not to us. BuzzSkito treats mosquitoes and ticks, not fleas, so there is nothing to sell you at the end of it. And if you are not certain the bites are even fleas &mdash; several unrelated bites present the same way on skin &mdash; work through our <Link href="/blog/flea-bites-on-humans">flea bites on humans</Link> guide first and compare against <Link href="/blog/bed-bug-bites">bed bug bites</Link>, a frequent mix-up.</p>

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
            <li><Link href="/blog/best-flea-spray-for-home-canada">Best Flea Spray for Home Canada &mdash; Picking the Right IGR Product</Link></li>
            <li><Link href="/blog/flea-bites-on-humans">Flea Bites on Humans &mdash; How to Tell It Is Actually Fleas</Link></li>
            <li><Link href="/blog/best-hepa-vacuum-for-bed-bugs-and-fleas-canada">Best HEPA Vacuum for Bed Bugs and Fleas in Canada</Link></li>
            <li><Link href="/blog/best-steam-cleaner-for-pest-control-canada">Best Steam Cleaner for Pest Control in Canada</Link></li>
            <li><Link href="/blog/diatomaceous-earth-canada-buyers-guide">Diatomaceous Earth in Canada &mdash; Buyer&rsquo;s Guide and Technique</Link></li>
            <li><Link href="/blog/best-bed-bug-fogger-canada">Best Bed Bug Fogger Canada &mdash; The Same Fogger Problem, Different Pest</Link></li>
            <li><Link href="/blog/advion-cockroach-gel-bait">Advion Cockroach Gel Bait &mdash; Why Baits Beat Foggers</Link></li>
            <li><Link href="/pest-control-cost-canada">Pest Control Cost Canada &mdash; What Professionals Charge</Link></li>
          </ul>

          <div className="not-prose mt-10 rounded-xl border border-navy-100 bg-brand-50 px-5 py-4">
            <p className="text-sm text-brand-900">
              <Link href="/pest-product-guides" className="font-bold text-emerald-700 hover:text-emerald-800 underline">More independent Canadian pest product research →</Link>
            </p>
          </div>
        </div>
        <AdjacentPestCTA pest="fleas" />
      </article>
    </>
  )
}
