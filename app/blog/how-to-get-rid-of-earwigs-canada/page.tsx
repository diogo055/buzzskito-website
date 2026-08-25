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

const SLUG = 'how-to-get-rid-of-earwigs-canada'
const DATE = '2026-07-27'
const UPDATED = '2026-07-27'
const TITLE = 'How to Get Rid of Earwigs in Canada — Traps, Moisture, and the Ear Myth'
const META_TITLE = 'How to Get Rid of Earwigs in Canada (2026)'

const FAQS = [
  {
    question: 'Do earwigs actually crawl into your ears?',
    answer: 'No. There is no biological basis for it. Earwigs do not seek out ear canals, do not lay eggs in human heads, and have no venom — the story is folklore attached to an old name (Old English ēarwicga, roughly “ear insect”), reinforced by the fact that an earwig’s folded hind wing is shaped a bit like a human ear. Any small insect can wander into an ear canal while someone sleeps on the ground or on a basement floor, and earwigs are no more likely to do it than a beetle or an ant. If you have earwigs in the house, the real consequence is a startle in the bathtub and a foul smell if you squash one — not a medical problem.',
  },
  {
    question: 'Do earwigs bite or pinch, and are they dangerous?',
    answer: 'They pinch, they do not bite, and they are not dangerous. Those forceps on the rear end (cerci) are used for defence, for grabbing prey, for courtship, and for helping to fold the hind wings back under the short wing covers. A large male can produce a pinch you would feel, and occasionally one breaks skin — but there is no venom, no disease transmission, and nothing to treat beyond soap and water. Earwigs also do not damage the structure of a house, do not chew wiring, and do not infest stored food the way pantry pests do. In a Canadian home they are a nuisance and a nerve problem, not a hazard.',
  },
  {
    question: 'What causes earwigs in the house?',
    answer: 'Moisture and harbourage right outside the wall, plus a gap to walk through. Earwigs are outdoor insects that live in damp, tight spaces — mulch pushed up against the siding, damp leaf litter, a board or patio stone lying on soil, potted plants sitting flat on a deck, a leaf-packed window well, a clogged eavestrough. They forage at night and follow the coolest, dampest edge of the property, which is very often your foundation. Once at the wall, a 3 mm gap under an exterior door or a crack at a hose bib is all they need. That is why the house side of the fix is almost entirely mechanical: door sweeps, caulk, screen repair, and pulling mulch back from the wall.',
  },
  {
    question: 'What is the best earwig trap?',
    answer: 'The two best earwig traps cost almost nothing. First, the oil trap: sink a shallow tin (a tuna or cat-food can) to soil level in the bed, put a centimetre or two of vegetable oil in it, and add a splash of soy sauce, bacon grease, or fish oil as the attractant — earwigs go in for the smell and the oil drowns them. Second, the rolled-newspaper trap: roll a section of damp newspaper into a loose tube about the width of a toilet-roll core, band it, and lay it in the bed at dusk. Earwigs are thigmotactic — they actively seek tight spaces that touch them on all sides — so the tube collects them overnight, and you drop the whole thing into a bucket of soapy water. Both work by exploiting the same nocturnal, tight-space behaviour that commercial earwig traps are built around, and both need to run for two or three consecutive weeks during the late-summer peak to actually dent the population.',
  },
  {
    question: 'Does diatomaceous earth kill earwigs?',
    answer: 'Yes, but with a limitation that matters more for earwigs than for almost any other pest. DE kills mechanically — it abrades and absorbs the waxy layer that holds an insect’s moisture in, and an earwig that crosses a dry film dehydrates and dies. The problem is that earwigs live in exactly the wet places DE stops working: damp mulch, wet soil, and dew-soaked ground turn it inert and caked. So use DE where it stays dry — under a door threshold, along the sill plate in a garage, in a crawl space, under a deck the rain does not reach, in the dry gravel band at the foundation — apply a thin, barely visible film with a hand duster rather than a pile, and expect to reapply after every rain. In Canada, insecticidal DE should carry a PCP registration number on the label; never use pool-grade DE, which is a genuine respiratory hazard.',
  },
  {
    question: 'Why do I suddenly have so many earwigs?',
    answer: 'Usually a wet stretch followed by a weather flip. A rainy spring and early summer means high nymph survival and abundant food — decaying plant matter, algae, mould, aphids — so by late July a big new generation of adults matures at once. Then one of two triggers pushes them at your house: a hot dry spell that dries out their damp harbourage, so they follow the moisture gradient to the coolest damp edge available (your foundation, your basement), or a heavy downpour that floods the soil chambers and mulch layers and drives them up and out. Both produce the same experience — nothing for weeks, then dozens overnight — which is why “suddenly” is almost always a weather story rather than something you did wrong.',
  },
  {
    question: 'When is earwig season in Ontario?',
    answer: 'Activity runs from roughly late June to the first hard frost and peaks from late July through September, and the reason is the life cycle rather than the calendar. The European earwig — the introduced species most often reported in Canadian homes — overwinters as an adult in a chamber in the soil. The female lays a clutch of eggs in late winter or early spring and then does something genuinely unusual for an insect: she guards them, cleans fungus off them, and tends the first-stage nymphs after they hatch. Those nymphs moult through four stages during spring and early summer, so the new adult generation floods the yard in midsummer. That timing is why perimeter work in May and June is prevention and work in August is damage control.',
  },
  {
    question: 'How do I get rid of earwigs in the garden without killing my plants?',
    answer: 'Trap around the specific plants being chewed instead of treating the whole garden. Put oil traps and rolled-newspaper traps in a ring between the harbourage (mulch, groundcover, the fence line) and the dahlias, marigolds, zinnias, lettuce, or seedlings taking damage, and run them nightly for two to three weeks. Pull mulch back from plant stems, water in the morning rather than the evening so the bed is dry at night when earwigs forage, and use collars around vulnerable seedlings. Before you escalate, confirm it is earwigs at all: slugs leave the same ragged holes but also leave slime trails, and the only reliable diagnosis is a flashlight walk at 10 or 11 p.m. to see what is actually on the leaf.',
  },
  {
    question: 'Are earwigs good for anything?',
    answer: 'Yes, which is the part most guides leave out. European earwigs are meaningful predators of aphids, mites, and insect eggs, and in commercial pear and apple orchards they are actively conserved because they help suppress pear psylla and woolly apple aphid. In a home garden with aphid pressure, a blanket war on earwigs can leave you with a worse aphid problem than the one you started with. The sensible position is targeted: trap hard around the ornamentals and seedlings actually being damaged, exclude them from the house, and otherwise leave the population in the shrub beds alone.',
  },
  {
    question: 'Can earwigs breed and infest inside my house?',
    answer: 'Not in any meaningful way. A heated Canadian house is far too dry for earwigs, and there is no food base indoors comparable to what they have outside. The earwigs you find in the bathtub, the basement, or under a doormat are incidental invaders that came in through a gap — they will die or leave within days, and they will not establish a breeding population in your walls. That reframes the whole job: you are not fighting an indoor infestation, you are plugging a doorway and fixing a wet zone outside it. If earwigs keep appearing indoors for weeks despite good exclusion, that points to a genuine moisture source — a wet crawl space, a leaking foundation wall, a plumbing drip — and the fix is a contractor or a dehumidifier, not an insecticide.',
  },
  {
    question: 'Do ultrasonic repellers, bug zappers, or essential-oil sprays work on earwigs?',
    answer: 'No, no, and barely. Ultrasonic plug-in repellers have no credible evidence behind them for any household pest, earwigs included. Bug zappers electrocute flying insects attracted to UV light — earwigs are ground-crawling nocturnal insects, so a zapper never encounters them, and it kills a great many harmless moths and beetles in the process. Essential-oil and vinegar sprays can repel an individual earwig for as long as the surface stays wet and smelly, which is a few hours, with no residual and no effect on the population living under your mulch. Indoor bug bombs are the worst of the lot for this pest: the earwigs are being produced outside, so you are fumigating the wrong building.',
  },
  {
    question: 'When should I call a professional about earwigs?',
    answer: 'Honestly, most of the time you should not — a handful of earwigs indoors in August is a door sweep and a weekend of yard work, and paying for a recurring spray program to solve it is money badly spent. Call a licensed professional when earwigs keep entering by the dozens daily for weeks despite sweeps, caulking, and mulch pullback (that pattern usually means a structural moisture or drainage fault worth diagnosing), when you run a food premises or commercial kitchen where any insect presence is a compliance issue, or when a market garden or nursery is taking real crop loss. And be suspicious of any quote for earwigs that does not start with someone walking your mulch beds, window wells, downspouts, and eavestroughs — that walk is the treatment.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'How to get rid of earwigs in Canada: the ear myth debunked, why they surge in late summer, and the free oil-tin and newspaper traps that do the work.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug('how-to-get-rid-of-earwigs-canada')

export default function HowToGetRidOfEarwigsCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Independent Canadian earwig guide: the ear myth, European earwig life cycle and Ontario timing, the moisture and harbourage root cause, free rolled-newspaper and oil traps, diatomaceous earth technique and its dry-only limit, perimeter timing under Canadian pesticide rules, garden damage vs household nuisance, and exclusion.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'How to Get Rid of Earwigs in Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Get Rid of Earwigs</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">They don&rsquo;t crawl into ears, they can&rsquo;t breed in your house, and the two best traps for them cost nothing. What earwigs actually need is damp, tight harbourage &mdash; so this guide is about mulch, eavestroughs, door sweeps, and a tin of oil.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <AffiliateDisclosure />
      <StickyBuyBar tag={AMZ_TAG} name="Door sweeps + exterior caulk (exclusion kit)" search="door sweep silicone caulk gap sealant" label="Best first move" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">To get rid of earwigs in Canada, take away the damp hiding places right against your house and trap the survivors. Pull mulch back 15&ndash;30 cm from the foundation and leave a bare gravel band, clear leaf-packed window wells and eavestroughs, extend downspouts, and lift boards, pots, and debris off the soil. Then run cheap traps &mdash; a shallow tin of vegetable oil with a splash of soy sauce sunk to soil level, and damp rolled newspaper laid out at dusk &mdash; nightly for two to three weeks through the late-summer peak. Finish with door sweeps and caulk so the ones that remain outside stay outside.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>The ear myth is folklore: earwigs do not enter ears, lay eggs in heads, or carry venom. They pinch; they do not bite.</li>
              <li>Earwigs cannot establish indoors &mdash; a heated Canadian house is too dry. Indoor earwigs are incidental invaders that die or leave.</li>
              <li>The two traps worth running (oil tin, rolled newspaper) cost pennies and work on the same nocturnal, tight-space behaviour commercial traps are built around.</li>
              <li>Diatomaceous earth genuinely kills earwigs, but only while dry &mdash; which is the opposite of where earwigs live. Dry, sheltered runs only.</li>
              <li>Peak season in southern Ontario is late July through September &mdash; one generation a year, so a wet spring builds the adults you meet in August.</li>
              <li>Perimeter spray is the weakest lever here. If mulch touches your siding and the eavestrough is packed with leaves, no product substitutes for fixing that.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito Pest Product Guides &middot; independent Canadian research</p>
          </div>
          <div className="not-prose rounded-xl border-l-4 border-emerald-500 bg-emerald-50/60 p-5 mb-6">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Shopping instead?</p>
            <p className="text-sm text-gray-800 leading-relaxed">
              This page is the method &mdash; the biology, the Ontario timing, and the free traps that do most of the work. If you have already decided to spend money, <Link href="/blog/best-earwig-killer-canada" className="text-emerald-700 underline font-semibold">earwig traps and killers in Canada: what to buy</Link> covers what the Canadian shelf legally carries (and the famous American barrier spray it does not), which registered diatomaceous earth to buy and why the duster is not optional, why no commercial earwig trap is worth the money, and the two label checks &mdash; PCP number and use site &mdash; to run before you order.
            </p>
          </div>

          <SpecialistDisclosure pest="earwigs" />
        </div>
      </section>

      <section className="bg-white px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <AwardRow tag={AMZ_TAG}
            heading="Our Picks — The Earwig Kit (Short, Because Most of the Job Is Free)"
            awards={[
              {
                badge: 'Best Overall',
                name: 'Door Sweeps + Exterior Silicone Caulk',
                why: 'Earwigs are outdoor insects walking in through gaps, and a flat insect only needs a few millimetres — so the space under an exterior door is a common entry point. A sweep plus an afternoon of caulking at hose bibs, dryer vents, and foundation cracks ends most indoor sightings outright.',
                search: 'door sweep silicone caulk gap sealant',
                featured: true,
                pros: ['Attacks the actual mechanism — entry, not population', 'One afternoon, permanent, no chemicals', 'Also blocks spiders, cluster flies, and winter heat loss'],
                cons: ['Does nothing about the population in the mulch bed', 'Older foundations need a yearly touch-up'],
              },
              {
                badge: 'Best Dry-Zone Treatment',
                name: 'Diatomaceous Earth + Hand Duster',
                why: 'A thin film across dry crossing points — thresholds, sill plates, garage edges, crawl spaces, the gravel band at the foundation — dehydrates earwigs mechanically. Honest limit: it goes inert the moment it gets wet, which is most of where earwigs actually live.',
                search: 'diatomaceous earth insect duster',
                pros: ['Mechanical kill — no resistance possible', 'One bag treats a whole house many times over', 'Safe placement in voids and under thresholds'],
                cons: ['Useless damp — needs reapplying after every rain', 'Wrong tool for mulch beds and wet soil'],
              },
              {
                badge: 'Best Indoor Monitor',
                name: 'Flat Insect Glue Boards (Multi-Pack)',
                why: 'Not a cure — instrumentation. Boards tight against the baseboard in the basement, garage, and behind doors tell you which entry point is live, and whether your sealing work actually worked, instead of relying on how many you happened to spot in the tub.',
                search: 'insect glue board traps multi pack',
                pros: ['Catch pattern points at the live entry instead of guesswork', 'No pesticide at all — a device, kid-and-pet friendly', 'Cheap enough to lay a dozen at once'],
                cons: ['Measures the problem; does not solve it', 'Stops catching once dusty'],
              },
              {
                badge: 'Perimeter Spray (Label-Check First)',
                name: 'Crawling-Insect Perimeter Product — Check the PCP Number First',
                why: 'A registered perimeter product applied at dusk to the foundation band can knock down a heavy wave — but it is the least valuable lever on this page, and Canadian rules matter: Ontario and Quebec restrict many synthetic actives for cosmetic outdoor use, and several famous US perimeter products are not registered here at all.',
                search: 'ant and crawling insect killer perimeter',
                pros: ['Useful as a short-term knockdown during a heavy wave', 'Targets the band earwigs cross, not the whole yard'],
                cons: ['Fixes nothing — the harbourage keeps producing earwigs', 'Confirm a Canadian PCP number and provincial legality before buying'],
              },
            ]}
            whichToBuy={
              <>
                <strong>Earwigs turning up indoors?</strong> Buy the <em>Best Overall</em> sweeps and caulk and nothing else &mdash; that is the fix, and the free traps below handle the yard. <strong>Earwigs crossing a dry threshold, garage, or crawl space?</strong> Add the <em>Best Dry-Zone</em> DE and duster; full technique in our <Link href="/blog/diatomaceous-earth-canada-buyers-guide">diatomaceous earth buyer&rsquo;s guide</Link>. <strong>Not sure where they are getting in?</strong> A run of <em>Best Indoor Monitor</em> glue boards answers it. <strong>Tempted by a perimeter spray?</strong> Read the <em>Label-Check First</em> caveat and our <Link href="/blog/ortho-home-defense-canada-review">Ortho Home Defense Canada review</Link> first &mdash; a lot of what Americans recommend is not legal to use here.
              </>
            }
          />
        </div>
      </section>

      <section className="bg-gradient-to-br from-emerald-50 to-white border-b border-emerald-200 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Know Your Insect &middot; Updated July 2026</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">Earwig, or Something Else? The Four Look-Alikes</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            Plenty of insects get called earwigs when they are not, and two of the common look-alikes are beneficial insects you should leave alone. The forceps at the back end are the tell &mdash; nothing else on this list has them.
          </p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm">
            <table className="min-w-[560px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Insect</th>
                  <th className="px-4 py-3 text-left">Looks like</th>
                  <th className="px-4 py-3 text-left">Where you find it</th>
                  <th className="px-4 py-3 text-left">Threat</th>
                  <th className="px-4 py-3 text-left">What to do</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">European earwig<br /><span className="font-normal text-xs text-gray-500">Forficula auricularia</span></td>
                  <td className="px-4 py-3 text-gray-700">Flat reddish-brown body, roughly 12&ndash;15 mm, short wing covers, unmistakable pincers at the rear</td>
                  <td className="px-4 py-3 text-gray-700">Damp mulch, leaf litter, under boards and pots; indoors at thresholds and tubs at night</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">Nuisance + light plant damage</strong> &mdash; no bite, no disease</td>
                  <td className="px-4 py-3 text-gray-700">Clear harbourage, run oil/newspaper traps, seal doors</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Rove beetle<br /><span className="font-normal text-xs text-gray-500">Staphylinidae</span></td>
                  <td className="px-4 py-3 text-gray-700">Same slim shape and short wing covers &mdash; but <strong>no pincers</strong>; often lifts its abdomen when disturbed</td>
                  <td className="px-4 py-3 text-gray-700">Compost, leaf litter, garden soil, under stones</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Beneficial predator</strong></td>
                  <td className="px-4 py-3 text-gray-700">Leave it alone &mdash; it hunts the pests you want gone</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Silverfish<br /><span className="font-normal text-xs text-gray-500">Lepisma saccharinum</span></td>
                  <td className="px-4 py-3 text-gray-700">Silver-grey, teardrop shape, three thin tail bristles instead of forceps</td>
                  <td className="px-4 py-3 text-gray-700">Indoors only &mdash; damp basements, bathrooms, storage boxes</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">Eats paper and fabric</strong></td>
                  <td className="px-4 py-3 text-gray-700">A humidity problem &mdash; see our <Link href="/blog/how-to-get-rid-of-silverfish-canada" className="text-emerald-700 underline">silverfish guide</Link></td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Oriental cockroach<br /><span className="font-normal text-xs text-gray-500">Blatta orientalis</span></td>
                  <td className="px-4 py-3 text-gray-700">Glossy near-black, broader and bulkier, long antennae, no forceps, moves faster</td>
                  <td className="px-4 py-3 text-gray-700">Floor drains, crawl spaces, under concrete steps, damp basements</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-red-700">Real pest</strong> &mdash; contaminates, needs a proper program</td>
                  <td className="px-4 py-3 text-gray-700">Bait, not traps &mdash; see our <Link href="/blog/how-to-get-rid-of-cockroaches-canada" className="text-emerald-700 underline">cockroach guide</Link></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-5 rounded-xl bg-amber-50 border-l-4 border-amber-400 p-4">
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong className="text-amber-900">Don&rsquo;t squash them indoors.</strong> Earwigs release a foul-smelling yellowish-brown fluid from glands on the abdomen when threatened or crushed, and it stains light grout, caulk, and carpet. Vacuum them up instead and empty the canister outside &mdash; you get the same result without the smell or the mark.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Earwig Control in Canada — Key Facts</h2>
          <div className="rounded-xl border border-navy-100 overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Species you have', 'European earwig (Forficula auricularia) — an introduced species, established across southern Canada'],
                  ['The root cause', 'Damp, tight harbourage against the house: mulch, leaf litter, boards, pots, window wells'],
                  ['Do they enter ears', 'No — folklore. No venom, no biting, no eggs in heads'],
                  ['Can they breed indoors', 'No — a heated Canadian house is far too dry. Indoor earwigs are incidental invaders'],
                  ['Peak season (southern Ontario)', 'Late July through September, once the year’s single generation of adults matures; first sightings from late June'],
                  ['Why the sudden surge', 'A wet spring builds the generation; a hot dry spell or a downpour then pushes them at the house'],
                  ['Best free trap', 'Shallow tin of vegetable oil + soy sauce, sunk to soil level, emptied every few days'],
                  ['Second-best free trap', 'Damp rolled newspaper laid out at dusk — they seek tight contact on all sides'],
                  ['Diatomaceous earth', 'Kills them, but only while bone dry — reapply after rain, dry zones only'],
                  ['Perimeter spray timing', 'At dusk, on the foundation band and 30–60 cm out — never a whole-lawn application'],
                  ['Canadian legal note', 'Check the label for a PCP number; Ontario and Quebec restrict many synthetic actives for cosmetic outdoor use'],
                  ['Garden damage tell', 'Ragged holes in petals and soft leaves, no slime trail — confirm with a 10 p.m. flashlight check'],
                  ['The overlooked upside', 'Earwigs eat aphids, mites, and insect eggs — worth sparing outside the beds they damage'],
                  ['Highest-value yard change', 'Pull mulch back 15–30 cm from the foundation; leave a bare gravel band'],
                  ['Call a pro when', 'Dozens daily for weeks despite exclusion — usually a moisture or drainage fault, not a pest problem'],
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

          <h2>How Do You Actually Get Rid of Earwigs?</h2>
          <p>You take away the damp, tight places they live in, and you trap what is left. That is the whole strategy, and it is unusually satisfying because &mdash; unlike cockroaches or bed bugs &mdash; earwigs cannot hide from it. An earwig has no water-tight armour and no ability to establish inside a dry heated house. It is an outdoor insect that spends the daylight hours wedged into something damp and narrow, comes out after dark to feed, and dies fast if it cannot find its way back to moisture before the sun comes up. Remove the damp narrow places along your foundation and you have removed the population, not annoyed it.</p>
          <p>That is also why this guide recommends so little to buy. The two most reliable earwig traps are a tin of cooking oil and a rolled-up newspaper, and the highest-value change you can make to a property is dragging mulch away from the siding with a rake. The only purchase that reliably earns its money is a door sweep &mdash; because the last mile of the problem is a 3 mm gap under a door, and no spray, trap, or powder solves a gap.</p>
          <p>The order matters: clear the harbourage first (trapping into a yard that is still producing earwigs is a treadmill), trap hard for two to three weeks during the peak, then seal the building so the survivors stay outside.</p>
          <p>If you have already decided you want to buy something and just need to know <em>what</em>, our companion <Link href="/blog/best-earwig-killer-canada">guide to the best earwig killer in Canada</Link> ranks every method by what it physically does &mdash; including why no earwig bait exists, which perimeter products are actually PMRA-registered here, and which shelf items to skip.</p>

          <p className="not-prose text-sm text-gray-600 mb-1">Check current Canadian availability of the small kit that is actually worth buying:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="door sweep silicone caulk gap sealant">Door sweeps + caulk →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="diatomaceous earth insect duster">DE + duster →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="insect glue board traps multi pack">Glue boards →</BuyLink>
          </div>

          <h2>First, the Ear Myth — Because It Is Why You Are Here</h2>
          <p>The ear story is the first thing most people bring up about this insect, usually with a nervous laugh. So: no. Earwigs do not crawl into human ears, do not burrow into brains, and do not lay eggs in heads. There is no venom, no disease transmission, and no documented behaviour that draws them toward ear canals. The name is old &mdash; Old English <em>ēarwicga</em>, roughly &ldquo;ear insect&rdquo; &mdash; and the most plausible explanation has nothing to do with people at all: an earwig&rsquo;s hind wing, when you unfold it, is a delicate fan shaped remarkably like a human ear. A thousand years of folklore grew out of a shape.</p>
          <p>The honest caveat, which is the same for every insect on Earth: any small crawling thing can end up in an ear canal if you sleep on the ground, on a basement floor, or in a tent. Physicians remove all sorts of insects from ears. There is nothing about an earwig that makes it more likely than an ant, a small beetle, or a moth &mdash; and if it ever happens, it is an inconvenient trip to a clinic, not the horror-movie scenario.</p>
          <p>What earwigs actually do to you is pinch. The forceps (properly, cerci) on the tail end are a genuine tool: they are used to grab prey, to fend off rivals and predators, in courtship, and to help fold those fan-shaped hind wings back under the stubby wing covers. Males have strongly curved forceps; females&rsquo; are straighter and closer to parallel. A big male can deliver a pinch you will feel and, rarely, one that breaks skin. There is nothing in it &mdash; wash it and move on. Earwigs also do no structural damage: they do not chew wood, wiring, or insulation, and they do not infest stored food the way pantry moths and beetles do.</p>

          <h2>Why Earwigs Explode in Ontario in Late July and August</h2>
          <p>The earwig in a Canadian yard is normally the European earwig, <em>Forficula auricularia</em> &mdash; an introduced species that has been established across southern Canada for the better part of a century. Its life cycle is what makes late summer feel like an invasion.</p>
          <p>Adults overwinter in the soil, typically in a small chamber a few centimetres down, often as a pair. In late winter or early spring the female lays a clutch of several dozen eggs in that chamber &mdash; and then does something almost unheard of among insects: she stays. She guards the eggs, moves them, and cleans fungus off them, and she continues to tend the first-stage nymphs after they hatch. Maternal care of this kind is rare enough in the insect world that entomologists have studied earwigs specifically for it. The nymphs then moult through four stages over spring and early summer, feeding on decaying plant material, algae, fungi, and small insects, and by midsummer the new adults are out. In most of Canada that is one generation a year, all maturing at roughly the same time.</p>
          <p>So the population curve is not gradual. It is flat through spring, then it steps up sharply in July as the new adults emerge, and it stays high until frost. Overlay Ontario weather on that and you get the two patterns homeowners actually experience:</p>
          <ul>
            <li><strong>A wet spring and early summer sets up a big August.</strong> Rain keeps the soil, mulch, and leaf litter damp, which is exactly what nymphs need to survive, and it grows the decaying-matter and aphid food supply at the same time. More nymphs surviving through June means more adults foraging in August &mdash; the whole schedule is driven by temperature and moisture rather than by anything you did or failed to do. This is why the surge feels weather-driven &mdash; because it is.</li>
            <li><strong>A weather flip is what pushes them at your house.</strong> Two opposite triggers produce the same result. A hot dry spell after a wet stretch dries out their harbourage, and they follow the moisture gradient to the coolest, dampest edge available &mdash; which on a suburban lot is the shaded mulch bed against your north foundation wall, and then the threshold behind it. A heavy downpour does the reverse: it floods the soil chambers and saturates the mulch, and they come up and out looking for somewhere drier and tighter. Either way, you get nothing for weeks and then dozens overnight.</li>
          </ul>
          <p>Then autumn arrives, temperatures drop, and the survivors start hunting for overwintering shelter &mdash; which is when the sill plate, the window well, and the gap under the garage door start looking attractive. This is the same September pattern that drives <Link href="/blog/how-to-get-rid-of-cluster-flies-canada">cluster flies</Link> and <Link href="/blog/how-to-keep-spiders-out-of-your-house">spiders</Link> indoors, and the exclusion work you do for one buys you all three.</p>

          <h2>The Real Root Cause: Moisture and Harbourage, Not Housekeeping</h2>
          <p>Earwigs are thigmotactic &mdash; a useful word that means they seek out spaces that touch their bodies on all sides. Combine that with a hard requirement for moisture and you can predict, almost perfectly, where they are on any Canadian property. Walk your lot on an August morning and lift things. Here is what to check, starting with the places that stay dampest and sit closest to the wall:</p>
          <ul>
            <li><strong>Shredded bark or cedar mulch banked against the foundation.</strong> The harbourage most often responsible when earwigs keep turning up at the wall. Deep mulch touching the siding stays damp all season and is tight, dark, and continuous &mdash; the perfect harbourage, sitting directly against the wall you are trying to keep them out of.</li>
            <li><strong>Leaf-packed window wells.</strong> If you have earwigs in a finished basement, check the window wells before anything else. A well full of last autumn&rsquo;s leaves is a damp, dark chamber pressed against a basement window with a gap in its frame.</li>
            <li><strong>Clogged eavestroughs and short downspouts.</strong> A trough packed with rotting leaf mulch is an elevated earwig nursery, and a downspout that dumps at the foundation keeps the bed below it permanently saturated. Extending downspouts a metre or two is one of the cheapest fixes on this page.</li>
            <li><strong>Boards, patio stones, plywood, and flattened cardboard lying on soil.</strong> Any flat object on damp ground becomes an earwig hotel.</li>
            <li><strong>Potted plants and planters sitting flat on a deck or patio.</strong> Lift one in August and there is often a colony pressed to the underside of the pot. Pot feet or a couple of scrap tiles that let air under the pot fix it permanently.</li>
            <li><strong>Damp leaf litter, un-cut-back perennials, dense groundcover, and ivy on walls.</strong> Especially on the shaded side of the house.</li>
            <li><strong>Woodpiles, compost bins, grass-clipping piles, tarps, and stored patio cushions</strong> stacked against the house.</li>
          </ul>
          <p>None of that is about being a tidy person &mdash; a beautifully landscaped property with deep mulch beds and mature groundcover produces far more earwigs than a scruffy one with bare soil. It is about where water sits and where tight, dark spaces touch your walls. Which is why the highest-value change on this entire page costs nothing but an hour with a rake: <strong>pull mulch back 15&ndash;30 cm from the foundation on every side of the house and leave a bare band of gravel or stone.</strong> That dry strip is a barrier earwigs genuinely dislike crossing, it dries fast after rain, it is the one place a dust treatment stays effective, and it makes every other step on this page work better.</p>
          <p>Two free habits go with it: water the lawn and beds in the morning rather than the evening, so the ground is at its driest during the hours earwigs forage, and fix the low spot beside the walkway where water pools after every storm.</p>

          <h2>The $0 Traps That Actually Work (and Earn Us Nothing)</h2>
          <p>We are an affiliate publisher and we will say this plainly: the two traps worth your time are homemade, and they work on exactly the same behaviour the products marketed for the job are built around. Earwig biology hands you the mechanism for free. They are nocturnal, they are drawn to fermenting and oily food smells, and they will crawl into any snug tube or crevice they find before dawn. Both classic traps exploit exactly that.</p>

          <div className="not-prose my-6 rounded-xl border-l-4 border-emerald-500 bg-emerald-50 p-5">
            <p className="text-sm font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Trap 1 — The Oil Tin (the classic)</p>
            <ul className="space-y-2 text-sm text-gray-800 leading-relaxed list-disc pl-5">
              <li>Take a shallow tin &mdash; an empty tuna or cat-food can is the classic &mdash; and sink it into the soil so the rim sits <strong>flush with ground level</strong>. A rim sitting above grade cuts the catch.</li>
              <li>Add one to two centimetres of plain vegetable oil, then a splash of soy sauce, bacon grease, or fish oil as the attractant. The smell brings them in; the oil defeats surface tension and they cannot climb out.</li>
              <li>Place tins <strong>between the harbourage and what you are protecting</strong> &mdash; along the foundation, at the edge of the mulch bed, beside the dahlias or lettuce taking damage.</li>
              <li>Empty and refresh every few days. It gets unpleasant fast, which is the only real downside.</li>
              <li>If you have curious dogs or toddlers, use a covered version: a lidded container with 1&ndash;2 cm entry holes punched in the sides at soil level.</li>
            </ul>
          </div>

          <div className="not-prose my-6 rounded-xl border-l-4 border-emerald-500 bg-emerald-50 p-5">
            <p className="text-sm font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Trap 2 — The Rolled Newspaper (cheapest, zero mess)</p>
            <ul className="space-y-2 text-sm text-gray-800 leading-relaxed list-disc pl-5">
              <li>Roll a section of newspaper into a loose tube roughly the diameter of a toilet-roll core, dampen it lightly, and band it so it holds shape.</li>
              <li>Lay the tubes out <strong>at dusk</strong> in the beds, along the foundation, and under affected plants. They should be holding earwigs by dawn &mdash; that thigmotactic instinct is doing all the work.</li>
              <li>Collect them <strong>early in the morning, before the sun moves them out</strong>, and drop each tube whole into a bucket of soapy water, or bag it and bin it. Do not shake them out on the lawn.</li>
              <li>Corrugated cardboard tubes or short lengths of bamboo do the same job and survive rain far better than newspaper.</li>
              <li>A wet board or a scrap of plywood laid flat on soil is the same trick at larger scale &mdash; flip it in the morning and knock the contents into soapy water.</li>
            </ul>
          </div>

          <p>The discipline that decides whether trapping works is duration, not cleverness. One night of traps removes one night&rsquo;s foragers and changes nothing. <strong>Run traps every night for two to three consecutive weeks</strong> through the late-July-to-September peak, resetting each morning, and the population in the treated zone falls away. Log roughly how many you are collecting; when the count falls to near nothing for several nights running, you are done for the season.</p>
          <p>One more free lever most people miss: <strong>lighting</strong>. Earwigs are drawn to lights at night, and a bright fixture directly above a back door delivers them straight to the threshold every evening. Move fixtures away from doorways where you can, switch to warm or amber-toned bulbs, and put decorative landscape lighting on motion sensors. It costs nothing and it stops delivering foragers to the one spot you least want them.</p>

          <h2>Diatomaceous Earth: Genuinely Effective, With One Big Catch</h2>
          <p>Diatomaceous earth kills earwigs, and the mechanism is honest and mechanical: DE is a fine abrasive powder that scours and absorbs the waxy layer holding an insect&rsquo;s moisture in. An earwig that walks through a dry film loses water it cannot replace and dies. There is no resistance to develop, no bait acceptance required, and no expiry date as long as the dust stays dry.</p>
          <p>That last clause is the whole problem. Earwigs live in damp mulch, wet soil, and dew-soaked ground &mdash; the exact conditions that turn DE into inert paste. Anyone who tells you to &ldquo;dust the mulch beds with DE&rdquo; has not watched it cake after one heavy rain. Use it where it can stay dry:</p>
          <p>The same damp-basement conditions that keep DE from working are what put earwigs, silverfish and centipedes in the same rooms every August, so the products overlap more than the pest names suggest &mdash; our <Link href="/blog/best-silverfish-traps-canada">silverfish trap comparison</Link> and <Link href="/blog/best-centipede-killer-canada">centipede killer breakdown</Link> both come back to the same humidity target. For the earwig-specific shelf, the ranked picks live in <Link href="/blog/best-earwig-killer-canada">what actually kills earwigs in Canada</Link>.</p>
          <ul>
            <li>The bare gravel band at the foundation you created earlier &mdash; a strip that dries quickly after rain, which is precisely why the band is worth making.</li>
            <li>Under exterior door thresholds and along garage sill plates.</li>
            <li>Inside crawl spaces and unfinished basement perimeters.</li>
            <li>Under decks and porches where rain does not reach.</li>
            <li>Window wells, after you have cleared the leaves out.</li>
          </ul>
          <p>Technique matters as much as placement: use a hand duster to lay a <em>thin, barely visible film</em>, because insects detect and walk around a visible pile. Reapply after rain and heavy dew &mdash; outdoors this is a maintenance product, not a one-time treatment.</p>
          <p>The Canadian compliance note: when DE is sold as an insecticide here it is a registered pesticide, and the label should carry a PCP (Pest Control Products) registration number whose directions govern how you may legally use it. &ldquo;Food-grade&rdquo; DE sold as a feed additive is a different product category with no pest-use directions on it. And never use pool-grade DE for pest control &mdash; it is calcined and contains crystalline silica, which is a real respiratory hazard, not a scare story. Product selection, the grade distinctions, and full application technique are in our <Link href="/blog/diatomaceous-earth-canada-buyers-guide">diatomaceous earth buyer&rsquo;s guide for Canada</Link>.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="diatomaceous earth insect duster">Check DE + duster kits on Amazon.ca →</BuyLink>
          </div>

          <h2>Perimeter Treatment: Timing, and What Canadian Rules Actually Allow</h2>
          <p>Let us be blunt about where a chemical perimeter treatment sits in the hierarchy for earwigs: near the bottom. It is a knockdown for a bad wave, not a solution, and if mulch is still banked against your siding and your eavestrough is full of leaf mulch, no product on any shelf in Canada substitutes for moving it. We would rather you spent the money on a downspout extension.</p>
          <p>That said, if you are going to do it, do it properly. <strong>Timing is the difference between working and wasting the product.</strong> Earwigs are nocturnal, so apply <em>at dusk</em>, when they are about to become active and the residue is fresh &mdash; a morning application has spent the whole day in the sun before the target ever moves. <strong>Target the band they cross</strong>, not the lawn: the bottom 30&ndash;45 cm of the foundation wall, the ground 30&ndash;60 cm out from it, door thresholds, and around window wells. Whole-lawn broadcast treatment for earwigs is both ineffective and, in much of Canada, not something you are permitted to do.</p>
          <p>Which brings up the part American guides never mention. Conventional insecticides sold in Canada must be registered with Health Canada&rsquo;s Pest Management Regulatory Agency and carry a PCP registration number on the label &mdash; that number is your one-glance test, and its absence means the product is not registered for sale here regardless of what a marketplace listing implies. On top of federal registration, <strong>Ontario and Quebec (among others) restrict a range of synthetic pesticides for cosmetic outdoor use</strong>, which is why a product that is an ordinary hardware-store purchase in Ohio can be both unregistered and prohibited for garden use in Mississauga. What you will actually find on Canadian shelves for crawling insects tends to be lower-risk formulations that are permitted for cosmetic outdoor use here. Read the label, confirm the PCP number, and confirm the use you have in mind is one the label lists &mdash; the label is the law, and it overrides any advice online, ours included. We go through this in detail, brand by brand, in our <Link href="/blog/ortho-home-defense-canada-review">Ortho Home Defense Canada review</Link>.</p>
          <h2>Garden Damage vs Household Nuisance — Two Different Problems</h2>
          <p>Earwigs generate two completely separate complaints, and confusing them wastes effort.</p>
          <p><strong>The household complaint</strong> is that they turn up in the bathtub, under the doormat, in the basement, or scattering when you move a recycling bin. This is a nuisance problem with a purely mechanical solution &mdash; harbourage plus exclusion &mdash; and it is genuinely reassuring how limited the stakes are. Earwigs cannot establish indoors: a heated Canadian house runs far too dry, and there is no food base indoors comparable to the decaying matter, algae, and small insects they eat outside. The ones inside are incidental invaders that will die or leave within days. You are not fighting an infestation; you are closing a door.</p>
          <p><strong>The garden complaint</strong> is real damage: ragged, irregular holes chewed in soft leaves and flower petals. Dahlias, marigolds, zinnias, and other soft-petalled ornamentals take the most visible hits, along with lettuce, basil, tender seedlings, corn silk, and soft fruit like strawberries (usually after a bird or another pest opened it first). The classic mistake here is misdiagnosis: <strong>slugs produce almost identical ragged holes</strong>, and the two need different responses. The tell is the slime trail &mdash; slugs leave one, earwigs do not &mdash; but the only genuinely reliable diagnosis is to go out at 10 or 11 at night with a flashlight and look at the plant. Whatever is on the leaf is your answer. Do that once and you will save yourself a season of treating the wrong thing.</p>
          <p>If it is earwigs, the response is targeted, not total: a ring of oil tins and newspaper tubes around the affected plants for two to three weeks, mulch pulled back from plant stems, morning watering instead of evening, and collars around vulnerable seedlings.</p>
          <p>And here is the part that separates a real garden guide from a product page: <strong>you may not want to eliminate them.</strong> European earwigs are meaningful predators of aphids, mites, and insect eggs. In commercial pear and apple production they are actively conserved because they help suppress pests like pear psylla and woolly apple aphid, and growers deliberately provide them with shelters. A blanket war on earwigs in a home garden with aphid pressure can leave you worse off than you started. Trap hard where they are chewing your dahlias; leave the ones living in the shrub border to do their job.</p>

          <h2>Exclusion: The Part That Ends Indoor Sightings for Good</h2>
          <p>Once the yard is producing fewer earwigs, close the building. This is a weekend, most of it with a caulk gun, and it is the only work on this page that keeps paying every year.</p>
          <ul>
            <li><strong>Door sweeps on every exterior door, including the garage.</strong> A gap of a few millimetres under a door is a boulevard for a flat insect. This is the highest-yield item on the list and the reason it is our top pick above.</li>
            <li><strong>Caulk the foundation.</strong> Exterior-grade silicone into cracks in the foundation wall, at the sill plate, and around every penetration: hose bibs, dryer vents, AC line sets, cable and gas entries, and the gaps where the deck ledger meets the wall.</li>
            <li><strong>Clear and cover window wells.</strong> Empty the leaves, add a few centimetres of clean gravel at the bottom so it drains, and fit a proper cover. In a finished basement, a cleared and covered well is often the whole fix on its own.</li>
            <li><strong>Repair screens and reseal basement window frames.</strong> Old wood-framed basement windows are often the actual entry point people blame on &ldquo;cracks in the walls.&rdquo;</li>
            <li><strong>Move the storage.</strong> Woodpiles, compost bins, stacked pots, bagged soil, and tarps go off the wall and preferably off bare soil.</li>
            <li><strong>Check the garage.</strong> Attached garages are a common indoor staging area, and a worn garage-door bottom seal is an easy gap to overlook.</li>
          </ul>
          <p>Indoors, do not spray and do not squash. Vacuum earwigs up and empty the canister outside &mdash; crushing them releases that foul-smelling defensive fluid, which stains grout, caulk, and light carpet. If they keep appearing indoors for weeks after good exclusion work, stop treating and start looking for water: a wet crawl space, a leaking foundation wall, a slow plumbing drip, a chronically damp cold room, or a potted plant recently brought in from the patio. Persistent indoor earwigs are a moisture symptom, and in a chronically damp basement a dehumidifier does the same structural favour it does against <Link href="/blog/how-to-get-rid-of-silverfish-canada">silverfish</Link> &mdash; our <Link href="/blog/best-dehumidifier-for-basement-canada">basement dehumidifier guide</Link> covers sizing for Canadian basements.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="door sweep silicone caulk gap sealant">Check door sweeps and exterior sealant on Amazon.ca →</BuyLink>
          </div>

          <h2>What Does Not Work — Save Your Money</h2>
          <p>The earwig aisle and the internet both sell a lot of nothing. Skipping these is worth more than most of what you could buy:</p>
          <ul>
            <li><strong>Ultrasonic plug-in repellers.</strong> There is no credible evidence they repel any household pest, and earwigs are no exception. We took this apart in detail in our <Link href="/blog/ultrasonic-pest-repellers-do-they-work">ultrasonic pest repeller review</Link>.</li>
            <li><strong>Bug zappers.</strong> They electrocute flying insects drawn to UV light. Earwigs are ground-crawling nocturnal insects that never approach one, and meanwhile the zapper kills large numbers of harmless moths and beetles. See <Link href="/blog/bug-zappers-canada-do-they-work">do bug zappers work in Canada</Link>.</li>
            <li><strong>Essential-oil and vinegar sprays.</strong> They may repel an individual earwig for as long as the surface is wet and pungent &mdash; a few hours &mdash; with no residual and zero effect on the population living under your mulch.</li>
            <li><strong>Indoor total-release foggers.</strong> Earwigs are produced outside your house, so fogging the basement treats the wrong building &mdash; all the residue, none of the source.</li>
            <li><strong>Coffee grounds, eggshells, and the rest of the folk-remedy list.</strong> Nothing. Eggshells do not deter earwigs and barely deter slugs.</li>
            <li><strong>Whole-lawn insecticide broadcast.</strong> Ineffective against an insect that lives at the foundation and in beds, wasteful, and restricted for cosmetic use across much of Canada anyway.</li>
          </ul>

          <h2>When to Call a Professional (and When It Is a Waste of Money)</h2>
          <p>We will argue against the sale here, because it is true: for the overwhelming majority of Canadian homeowners, earwigs do not warrant a paid pest-control program. A dozen earwigs in the house in August is a door sweep, an afternoon with a rake, and two weeks of oil tins. Paying for a recurring spray schedule to solve that is money spent on the wrong thing, and any company that quotes one without first inspecting your mulch beds, window wells, downspouts, and eavestroughs is selling a subscription rather than a solution.</p>
          <p>The situations that genuinely justify a call: earwigs entering by the dozens daily for weeks despite proper sweeps, caulking, and mulch pullback &mdash; that pattern usually points to a structural moisture or drainage fault, and the right professional may well be a waterproofing or drainage contractor rather than an exterminator; a food premises, restaurant, or commercial kitchen where any insect presence is a health-inspection issue; a market garden, nursery, or greenhouse taking real crop loss; or a physical-limitation situation where the ladder work on eavestroughs and window wells is not something you should be doing yourself. For what general-pest interior and perimeter work typically costs in Canada, so you can sanity-check any quote you are given, see our <Link href="/pest-control-cost-canada">Canadian pest control cost guide</Link>.</p>
          <p>For the record on who is telling you this: BuzzSkito treats mosquitoes and ticks across 19 GTA cities &mdash; we do not sell earwig service. But the yard walk described on this page is the same walk we do on a property before a mosquito or tick treatment, because standing water, dense damp harbourage, deep mulch, leaf litter, and blocked drainage drive mosquito and tick pressure for exactly the same reasons they drive earwigs. Fix the moisture map of a property and several pest problems improve at once.</p>

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
            <li><Link href="/blog/best-earwig-killer-canada">Best Earwig Killer in Canada — What Actually Kills Them, and What Just Sells</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-silverfish-canada">How to Get Rid of Silverfish in Canada — The Humidity Fix</Link></li>
            <li><Link href="/blog/diatomaceous-earth-canada-buyers-guide">Diatomaceous Earth in Canada — Buyer&rsquo;s Guide and Application Technique</Link></li>
            <li><Link href="/blog/how-to-keep-spiders-out-of-your-house">How to Keep Spiders Out of Your House</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-cluster-flies-canada">How to Get Rid of Cluster Flies in Canada</Link></li>
            <li><Link href="/blog/ortho-home-defense-canada-review">Ortho Home Defense Canada — What You Can Actually Buy Here</Link></li>
            <li><Link href="/blog/ultrasonic-pest-repellers-do-they-work">Do Ultrasonic Pest Repellers Work? The Honest Answer</Link></li>
            <li><Link href="/blog/june-bugs-ontario">June Bugs in Ontario — Why They Swarm Your Porch Light</Link></li>
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
        heading="Mosquitoes and Ticks Are Our Actual Job"
        subtext="We don't treat earwigs — but the damp harbourage and drainage problems behind them are the same ones driving mosquito and tick pressure in your yard. Get a free assessment across 19 GTA cities."
      />
    </>
  )
}
