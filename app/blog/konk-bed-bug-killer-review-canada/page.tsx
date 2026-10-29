import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import BuyLink from '@/components/BuyLink'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import SpecialistDisclosure from '@/components/SpecialistDisclosure'
import TopPick from '@/components/TopPick'
import StickyBuyBar from '@/components/StickyBuyBar'
import TopBox from '@/components/TopBox'
import FreshnessStamp from '@/components/FreshnessStamp'
import AuthorByline from '@/components/AuthorByline'
import AdjacentPestCTA from '@/components/AdjacentPestCTA'
import { tagForSlug } from '@/lib/amazon-clusters'
import ReadNext from '@/components/ReadNext'
import NextUp from '@/components/NextUp'
import RelatedLinks from '@/components/RelatedLinks'
import QuickIdTable from '@/components/QuickIdTable'
import Photo from '@/components/Photo'

const SLUG = 'konk-bed-bug-killer-review-canada'
const DATE = '2026-07-21'
const UPDATED = '2026-10-28'
const TITLE = 'Konk Bed Bug Killer Review Canada 2026 — The Legal, In-Store Aerosol, Honestly Assessed'
// TITLE NOTE (Oct 28, 2026): was 'Konk Bed Bug Killer Review: Canada 2026 Verdict'; top queries, Jul 28-Oct 25 (all countries): konk bug spray 591 at 11.2, konk bed bug killer 114 at 5.6, best bed bug killer in canada 69 at 10.2 (owned by /blog/bed-bug-spray-canada, not targeted), bed bug spray reviews 11 at 8.0, konk spray canadian tire 4 at 6.0 (retailer-named, not targeted) (12 clicks).
const META_TITLE = 'KONK Bed Bug Killer Canada: Review & Label Facts'

const FAQS = [
  {
    question: 'Does Konk Bed Bug Killer actually work?',
    answer: 'Yes, within a clearly defined lane. KONK Bed Bug Killer is a contact aerosol (PCP 31110) that kills the bed bugs it directly wets — spray a bug you can see and it will go down. Where honest expectations matter is the residual and the resistant population: its label says insects must be contacted to be killed, it uses pyrethrins with piperonyl butoxide, and EPA says some bed bug populations have become resistant to pyrethrins and pyrethroids, so the bugs you do not directly hit, and the ones sheltering deep in a seam, are far less reliably killed. So Konk is a genuinely useful contact-and-spot tool that you can buy legally off a Canadian shelf — but it is a knockdown aid inside a larger plan, not a standalone cure for an established infestation. We score it 7.4/10 on that basis.',
  },
  {
    question: 'Is Konk Bed Bug Killer registered for sale in Canada?',
    answer: 'Yes — that is the single biggest point in its favour. KONK Bed Bug Killer is PCP 31110 in Health Canada’s registry: domestic class, full registration, current, expiring 2027-12-31, registered to Acuity Holdings, Inc. (KONK Commercial Bed Bug Killer, PCP 31111, is the commercial-class version.) That means you can buy it legally at Canadian retail and hardware stores without importing anything. That sounds mundane until you realize how much of the online bed bug advice aimed at Canadians points them toward US-only concentrates — Crossfire, Temprid FX, and similar — that are not PMRA-registered for Canadian consumers and are illegal to bring across the border. Konk sits on the right side of that line. You are buying a labelled, registered, Canadian-legal product and following Canadian label directions, which is exactly what you want when you are putting an insecticide in a bedroom.',
  },
  {
    question: 'What is the active ingredient in Konk Bed Bug Killer?',
    answer: 'Pyrethrins 0.50% and piperonyl butoxide 5.00%, according to the approved Canadian label for PCP 31110 (updated in December 2023 under the pyrethrins and piperonyl butoxide re-evaluation decisions, RVD2023-06 and RVD2023-07). Pyrethrins come from chrysanthemum flowers; piperonyl butoxide is a synergist that boosts them. Other KONK cans use other actives, so read the can you buy. The practical takeaway: this is fast contact chemistry, good at knocking down bugs it touches, with the well-known category limitation that EPA describes, some bed bug populations being resistant to pyrethrins and pyrethroids. That is not a knock on Konk specifically — it is true of most consumer bed bug sprays — but it is why the label, the technique, and the wider plan all matter more than the brand on the can.',
  },
  {
    question: 'Does Konk kill bed bug eggs?',
    answer: 'Not reliably, and you should not count on it to. Bed bug eggs are cemented into fabric seams and crevices with a tough protective coating, and most contact aerosols — Konk included — do a poor job penetrating that coating or even reaching the eggs tucked deep in a mattress seam. KONK’s label makes no egg claim at all and says insects must be contacted to be killed, so there is no residual waiting for nymphs as they hatch. The dependable way to kill bed bug eggs is heat: a steamer or a heat chamber. Treat egg-killing as a job for heat and use Konk for the mobile bugs you can hit and the surfaces they travel across.',
  },
  {
    question: 'How do I use Konk Bed Bug Killer correctly?',
    answer: 'Read the label first — that is not a formality with a registered pesticide, it tells you where the product is and is not approved for use, dwell times, and ventilation. Then work methodically: strip the bed, spray directly onto bugs you can see for immediate knockdown, and treat the harbourage and travel routes — bed-frame joints and bolt holes, the box-spring staple line and fabric edge, cracks in the headboard, baseboard gaps, and the wall-floor junction around the bed. Do not saturate the mattress surface you sleep on beyond what the label permits, and never spray it on bedding you will lie against without following the label to the letter. Ventilate the room, keep people and pets out until it dries, and repeat only as the label allows (after 7 days, if the problem persists), because one pass will not reach everything.',
  },
  {
    question: 'Konk vs a desiccant dust like CimeXa or diatomaceous earth — which is better?',
    answer: 'They do opposite jobs and a strong plan uses both. Konk is a fast contact spray: it kills the bugs it wets right now, leaves no residual to speak of, and resistant bugs may survive it. A desiccant dust — in Canada, a diatomaceous earth dust with a PCP number, since CimeXa silica gel has no Canadian registration — gives you no instant knockdown but a long-lasting, resistance-proof barrier in the cracks and voids the spray cannot coat well, because it kills by physically drying insects out rather than by chemistry they can evolve around. The professional pattern is to knock down the visible population with a contact product, then dust the voids as the long-term backstop that keeps killing survivors for months. If you can only own one and the infestation is established, the dust is the more durable investment; if you want to hit bugs you can see today at a Canadian store shelf, Konk earns its place.',
  },
  {
    question: 'Why do people say bed bug sprays do not work?',
    answer: 'Because they are usually judging the wrong expectation. Contact sprays including Konk absolutely work at what they are designed for — killing bugs they directly wet — but people buy a can expecting it to clear a whole infestation, spray a few visible bugs, and are then blindsided when the population rebounds. Three things drive that: pyrethroid resistance means the bugs you do not hit directly often survive, the eggs are untouched and keep hatching, and bugs harbour in places a surface spray never reaches. None of that means the spray failed — it means a spray alone was never enough. Bed bugs are beaten with layers: heat for the eggs, dust for the voids, encasements to seal the mattress, interceptors to monitor, and a contact spray for knockdown. Our companion piece on whether bed bug sprays actually work walks through this in detail.',
  },
  {
    question: 'Can I use Konk Bed Bug Killer around people and pets?',
    answer: 'Only by its Canadian label, which is strict. It says DO NOT apply when people or pets are present, and do not let people or pets into treated areas until sprays have settled and dried; ventilate treated rooms by opening windows and doors or using fans. It also says DO NOT use it on items that can be laundered, such as pillows, bedding, toys and clothing, and to remove bedding before treating a mattress. It is toxic to aquatic organisms, so keep spray well away from fish tanks. If anyone in the home has respiratory sensitivity, ventilate generously and consider heat for the areas closest to sleeping.',
  },
  {
    question: 'Will Konk get rid of bed bugs on its own?',
    answer: 'For a tiny, caught-immediately problem — a bug or two brought home from travel, hit on sight and followed up — a contact spray plus vigilance can sometimes be enough. For anything established, no, and no honest review says otherwise. A can of Konk kills what you spray and little else: the eggs survive, the resistant bugs you miss survive, and the harbourage you cannot reach keeps the infestation alive. Every serious bed bug protocol layers tools, and a contact spray is one layer. Pair Konk with heat for the eggs, a desiccant dust for the voids, encasements for the mattress and box spring, and interceptor traps to monitor — and for a spreading infestation, be honest with yourself about calling a professional. The spray is a helper, not the whole answer.',
  },
  {
    question: 'How does Konk compare to Raid, Ortho, Harris, or EcoRaider bed bug sprays?',
    answer: 'They occupy the same shelf but split along chemistry and legality. Konk’s selling point is being a Canadian-registered aerosol you can buy without any grey-market fuss. Harris has no product in Health Canada’s registry at all, and Ortho’s registered Canadian bed bug cans are Bed Bug B Gon, such as the MAX aerosol (PCP 33722, d-phenothrin and tetramethrin), not Home Defense. EcoRaider, the plant-oil option that appeals to people avoiding synthetic pyrethroids, has no Canadian registration either. Raid Bed Bug Killer (PCP 31897) is the closest match: pyrethrins with piperonyl butoxide, like KONK, at half the pyrethrin strength (0.25% against 0.50%), and it shares the same resistance limitation. There is no single winner: the honest framing is that these are all contact/spot tools with similar real-world ceilings, and the meaningful differences are chemistry preference, residual claims, price, and — the one Canadians should not skip — whether the exact product is legal and registered for sale here.',
  },
  {
    question: 'How many cans of Konk do I need for a bedroom?',
    answer: 'Fewer than you might fear for a spot-treatment approach, but budget for repeat applications rather than a single pass. One aerosol can typically covers the harbourage and travel routes of a single bedroom for an initial treatment, but bed bugs demand follow-up: the label rate is 6 to 10 seconds of spray per square metre, the label allows a repeat only after 7 days if the problem persists, and because eggs keep hatching you will be spraying again a week or two later, and likely again after that. Plan on at least two to three treatments per room over several weeks, which for most people means keeping more than one can on hand. If you find yourself buying cans by the case for a large or spreading problem, that is a signal the infestation has outgrown a consumer aerosol and a layered plan — or a professional — will cost you less in the end than a shelf of spent cans.',
  },
  {
    question: 'Why does the PMRA registration matter so much for bed bug products in Canada?',
    answer: 'Because the bed bug corner of the internet is a firehose of advice to buy illegal, unregistered US chemicals, and Konk’s registration is the clean alternative. Health Canada’s PMRA assesses a pesticide’s health and environmental risks and its value before it can be registered for sale here, and a PCP number on the can shows that it is registered, with label directions that set the conditions of use. Products like CrossFire and Temprid FX that Canadians are constantly told to import have no Canadian registration (Temprid is registered here only as commercial-class Temprid SC and ReadySpray), and bringing them across the border violates the Pest Control Products Act. They pair a neonicotinoid with a pyrethroid (CrossFire’s US label lists clothianidin, metofluthrin and piperonyl butoxide), but stronger chemistry does not make an unregistered import legal. Choosing a PMRA-registered product like Konk means no border risk, a reviewed label you can actually follow, and clarity about what is going into your home.',
  },
  {
    question: 'Is KONK bug spray the same as KONK Bed Bug Killer?',
    answer: 'Not necessarily: KONK is a family of cans. Health Canada’s registry lists four current domestic KONK products with bed bugs on their pest lists: KONK Bed Bug Killer (PCP 31110) and KONK House & Garden Bug Killer (26669), both pyrethrins with piperonyl butoxide; KONK Insect Killer (32616), d-phenothrin with tetramethrin; and KONK Spider & Tick II (32619), permethrin, whose registered indoor sites exclude the mattress, headboard, footboard and other furniture. Only 31110 is named for bed bugs, so check the PCP number on the can you pick up.',
  },
  {
    question: 'Can you spray KONK Bed Bug Killer on a mattress?',
    answer: 'Yes, lightly. The label says to spray the mattress lightly, particularly around seams and tufts, then take the bed apart and spray the frames, springs and all joints, plus cracks, crevices and baseboards around the room. Remove bedding first, and let the treated mattress dry before you put laundered bedding back. Do not spray pillows, bedding, toys or clothing, and do not use it as an indoor space spray. A zippered encasement over the dry mattress then traps anything the spray missed.',
  },
  {
    question: 'Does KONK Bed Bug Killer leave a residual?',
    answer: 'No residual is claimed. The label says insects must be contacted to be killed, so KONK works only on the bugs the spray actually hits, and a bug that walks across the dried surface later is not covered by anything on the label. That is why it pairs with a diatomaceous earth dust that has a PCP number in cracks and voids, and with interceptor traps under the bed legs to show whether bugs are still moving.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'KONK Bed Bug Killer (PCP 31110) is a pyrethrin contact aerosol: what its Canadian label lets you spray, the 7-day repeat rule, and what to pair it with.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug('konk-bed-bug-killer-review-canada')

export default function KonkBedBugKillerReviewCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Independent Canadian review of Konk Bed Bug Killer aerosol (PCP 31110): contact-kill performance, resistance limits, what its Canadian label allows, correct application technique, and where a contact spray fits in a layered bed bug plan.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Konk Bed Bug Killer Review Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Konk Bed Bug Killer Review Canada</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">KONK Bed Bug Killer is a domestic-class pyrethrin aerosol (pyrethrins 0.50% with piperonyl butoxide 5.00%) that carries PCP&nbsp;31110 in Health Canada&rsquo;s registry. Its label lets you spray mattress seams and tufts lightly, bed frames, springs, joints, cracks and baseboards, and it kills only the bugs it contacts. It suits someone who wants a legal can off a Canadian shelf for spot work, alongside heat for the eggs.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <AffiliateDisclosure />
      <StickyBuyBar tag={AMZ_TAG} name="Konk Bed Bug Killer aerosol" search="konk bed bug killer aerosol" asin="B07CGRLRNV" label="Our verdict: 7.4/10" />
      <TopBox tag={AMZ_TAG} name="Konk Bed Bug Killer aerosol" search="konk bed bug killer aerosol" asin="B07CGRLRNV" label="Our verdict: 7.4/10" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">Konk Bed Bug Killer is the best pick when what you want is a <strong>Canadian-legal contact aerosol you can buy today</strong> without importing anything grey-market. We score it 7.4/10: it carries PCP 31110 in Health Canada&rsquo;s registry and is genuinely effective at knocking down the bugs it directly wets. Its limits are the whole category&rsquo;s limits &mdash; it is a pyrethrin spray, so resistant bugs you don&rsquo;t hit directly may survive, its label makes no egg claim, and it can&rsquo;t reach deep harbourage. Use it as the knockdown-and-spot layer in a plan that also includes heat for eggs and a desiccant dust for the voids &mdash; not as a standalone cure.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>PCP 31110, domestic class, current in Health Canada&rsquo;s registry &mdash; buy it legally at retail, no illegal US importing.</li>
              <li>Fast contact knockdown on bugs you spray directly; that is its real strength.</li>
              <li>Pyrethrins with piperonyl butoxide &mdash; EPA says some bed bug populations have become resistant to pyrethrins and pyrethroids.</li>
              <li>Does not reliably kill eggs &mdash; that is a job for a steamer or heat chamber.</li>
              <li>Read the label: insects must be contacted to be killed, and a repeat is allowed only after 7 days.</li>
              <li>A knockdown layer, not a whole plan &mdash; pair with heat, dust, encasements, and interceptors.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito Pest Product Guides &middot; independent Canadian research</p>
          </div>
          <SpecialistDisclosure pest="bed bugs" />
        </div>
      </section>

      <section className="bg-white px-4 py-2">
        <div className="max-w-4xl mx-auto">
          <TopPick tag={AMZ_TAG}
            label="Our Verdict"
            name="Konk Bed Bug Killer — the Canadian-legal contact aerosol"
            blurb="Konk is the aerosol to reach for when your priority is a registered, Canadian-made product you can actually buy off a shelf rather than smuggle across the border. As a contact insecticide it does its core job well: spray a bed bug you can see and it goes down fast. What holds the score back is nothing unique to Konk and everything about the category — it is pyrethrin/pyrethroid chemistry, so the resistant bugs you don't hit directly may shrug it off, it won't reliably kill eggs cemented in seams, and a surface spray can't reach the harbourage where an infestation actually lives. Bought and used for what it is — legal knockdown and spot treatment inside a layered plan — it is a sound, honest pick. Bought as a one-can cure for an established infestation, it will disappoint, as every consumer spray does."
            search="konk bed bug killer aerosol"
            asin="B07CGRLRNV"
            cta="Check price on Amazon.ca"
            score={7.4}
            pros={['PMRA-registered and Canadian-made — fully legal retail purchase', 'Fast, effective contact knockdown on bugs you spray directly', 'Widely available at Canadian stores — no grey-market importing', 'A reviewed label with defined safe-use directions to follow']}
            cons={['Pyrethroid chemistry — resistant bugs you miss may survive', 'Does not reliably kill eggs (heat is the answer there)', 'Short residual and no reach into deep harbourage', 'A knockdown layer only — never a standalone cure for an infestation']}
          />
        </div>
      </section>

      <section className="bg-gradient-to-br from-emerald-50 to-white border-b border-emerald-200 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Bed Bug Sprays &amp; Dusts Compared &middot; Updated July 2026</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">Konk vs Other Contact Sprays vs a Desiccant Dust</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            &ldquo;Bed bug spray&rdquo; hides real differences in chemistry, residual, and &mdash; the one Canadians should not skip &mdash; legality. Here is where Konk sits against the other options you will see on the shelf and in the forums, with a live Amazon.ca availability check per row.
          </p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm">
            <table className="min-w-[560px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Product</th>
                  <th className="px-4 py-3 text-left">Type &amp; chemistry</th>
                  <th className="px-4 py-3 text-left">Strength / limit</th>
                  <th className="px-4 py-3 text-left">Canadian legality</th>
                  <th className="px-4 py-3 text-left">Price check</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Konk Bed Bug Killer<br /><span className="font-normal text-xs text-gray-500">Our pick &mdash; 7.4/10</span></td>
                  <td className="px-4 py-3 text-gray-700">Contact aerosol &mdash; pyrethrins 0.50% + piperonyl butoxide 5.00%</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Legal &amp; handy</strong> &mdash; fast knockdown, category-normal resistance limit</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">PCP 31110</strong>, domestic class, current</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="konk bed bug killer aerosol" block>Check price on Amazon.ca &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Other consumer aerosols<br /><span className="font-normal text-xs text-gray-500">Harris, Ortho, Raid-style</span></td>
                  <td className="px-4 py-3 text-gray-700">Contact/residual sprays &mdash; mostly pyrethroid</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">Similar ceiling</strong> &mdash; same resistance limitation across the category</td>
                  <td className="px-4 py-3 text-gray-700">Raid Bed Bug Killer (31897) and Ortho Bed Bug B Gon MAX (33722) carry PCP numbers; no Harris product does</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="bed bug killer spray canada" block>Check price on Amazon.ca &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Plant-oil spray<br /><span className="font-normal text-xs text-gray-500">e.g. EcoRaider</span></td>
                  <td className="px-4 py-3 text-gray-700">Botanical &mdash; geraniol/cedar-type actives</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">No pyrethroid</strong> &mdash; appeals to chem-avoiders; residual &amp; cost trade-offs</td>
                  <td className="px-4 py-3 text-gray-700">Not in Health Canada&rsquo;s registry; no geraniol bed bug spray is registered</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="ecoraider bed bug spray" block>Check price on Amazon.ca &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Desiccant dust<br /><span className="font-normal text-xs text-gray-500">CimeXa / diatomaceous earth</span></td>
                  <td className="px-4 py-3 text-gray-700">Silica desiccant &mdash; kills by drying insects out</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Resistance-proof</strong> &mdash; slow, but near-permanent void barrier</td>
                  <td className="px-4 py-3 text-gray-700">CimeXa has no Canadian registration; diatomaceous earth dusts with PCP numbers exist, such as Wilson Bed Bug Out (26679), and Ortho Bed Bug B Gon Diatom (32674) is a diatomaceous earth aerosol</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="cimexa insecticide dust" block>Check price on Amazon.ca &rarr;</BuyLink></td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Grey-market US concentrates<br /><span className="font-normal text-xs text-gray-500">Crossfire, Temprid FX</span></td>
                  <td className="px-4 py-3 text-gray-700">Liquid concentrates pushed in online forums</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-red-600">Not the pick</strong> &mdash; lean on chemistry bugs already resist</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-red-600">No CrossFire registration</strong>; Temprid only as commercial-class Temprid SC and ReadySpray &mdash; illegal to import</td>
                  <td className="px-4 py-3 text-xs text-gray-500">Not recommended &mdash; not legal here</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Availability and registration status change &mdash; always confirm a product is cleared for Canadian sale before buying. Full landscape in our <Link href="/blog/bed-bug-control-canada-hub" className="text-emerald-700 underline">Canadian bed bug control hub</Link> and <Link href="/blog/bed-bug-spray-canada" className="text-emerald-700 underline">bed bug spray guide</Link>.
          </p>
          <div className="mt-5 rounded-xl bg-amber-50 border-l-4 border-amber-400 p-4">
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong className="text-amber-900">&#9888;&#65039; A contact spray kills what it wets &mdash; not the eggs, not the bugs you miss.</strong> Konk knocks down bugs you spray directly, but it does nothing for eggs cemented in a seam or the harbourage you can&rsquo;t reach. Pair it with a <Link href="/blog/best-bed-bug-steamer-canada" className="text-emerald-700 underline font-semibold">steamer</Link> for the eggs, a <Link href="/blog/cimexa-bed-bug-review-canada" className="text-emerald-700 underline font-semibold">desiccant dust</Link> for the voids, and <Link href="/blog/bed-bug-interceptor-traps-canada" className="text-emerald-700 underline font-semibold">interceptor traps</Link> to monitor.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Konk Bed Bug Killer &mdash; Key Facts</h2>
          <div className="rounded-xl border border-navy-100 overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['What it is', 'Domestic-class pressurized spray (PCP 31110) for bed bugs and other indoor insects'],
                  ['Chemistry', 'Pyrethrins 0.50% + piperonyl butoxide 5.00% (approved label, Dec 2023)'],
                  ['Kill mechanism', 'Contact knockdown — kills bugs it directly wets'],
                  ['Eggs', 'No egg claim on the label — use heat (steamer / heat chamber)'],
                  ['Residual', 'None claimed: "Insects must be contacted to be killed"'],
                  ['Resistance', 'Category limit — EPA: some bed bug populations resist pyrethrins and pyrethroids'],
                  ['Where to spray', 'Mattress lightly (seams, tufts); frames, springs, joints; cracks, crevices, baseboards'],
                  ['Repeat', 'Only after 7 days, if the problem persists; rate 6-10 seconds per m²'],
                  ['Hazard', 'DANGER: extremely flammable, explosive; contains petroleum distillate'],
                  ['PMRA status', 'PCP 31110: domestic, full registration, current, expires 2027-12-31'],
                  ['Label address', 'Acuity Holdings, Inc., Edmonton, Alberta'],
                  ['Best used as', 'The knockdown/spot layer inside a layered plan'],
                  ['Not for', 'Clearing an established infestation on its own'],
                  ['Canadian availability', 'Amazon.ca + Canadian hardware/retail — confirm current listing'],
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

          <h2>What Is Konk Bed Bug Killer, and Why Does It Stand Out in Canada?</h2>
          <p>Konk is a brand with a long Canadian registration history (the oldest KONK records in Health Canada&rsquo;s registry date from 1983, several of them under Air Guard Control (Canada) Limited), and its bed bug can is a contact insecticide you can buy legally off a shelf here &mdash; which, in the strange landscape of bed bug shopping, is genuinely its headline feature. Most reviews of a spray would open with how hard it hits. We are going to open somewhere more useful for a Canadian reader: KONK Bed Bug Killer carries <strong>PCP 31110</strong>, a current domestic registration whose label lists Acuity Holdings, Inc. at an Edmonton, Alberta address, and that single fact resolves a problem that trips up a huge number of people fighting bed bugs in this country. Spend an hour in any bed bug forum and you will be steered toward American concentrates &mdash; Crossfire, Temprid FX, and their cousins &mdash; that are not registered for consumer sale in Canada and are illegal to import. Konk is the product that lets you skip that entire minefield and buy something registered, labelled, and lawful.</p>
          <p>As an insecticide, Konk is a pyrethrin contact aerosol (pyrethrins with the synergist piperonyl butoxide): fast chemistry that knocks down the bugs it directly wets. That is a real capability and it is worth having. But it is also chemistry the whole category shares, and the whole category shares its ceiling &mdash; which is exactly why the rest of this review spends as much time on where Konk stops as on what it does. An honest review of a bed bug spray is mostly a review of expectations.</p>
          <p>This review sits alongside our broader <Link href="/blog/bed-bug-control-canada-hub">Canadian bed bug control hub</Link> and our <Link href="/blog/best-pest-control-equipment-canada">pest control equipment guide</Link>; here we focus on one registered can and exactly what it is and is not good for.</p>

          <QuickIdTable
            title="KONK beside two other Canadian bed bug cans, label by label"
            head={['Label fact', 'KONK Bed Bug Killer', 'Raid Bed Bug Killer', 'Ortho Bed Bug B Gon MAX']}
            rows={[
              ['PCP number and class', '31110, domestic', '31897, domestic', '33722, domestic'],
              ['Active ingredients', 'Pyrethrins 0.50%, piperonyl butoxide 5.00%', 'Pyrethrins 0.25%, piperonyl butoxide 1.01%', 'D-phenothrin 0.20%, tetramethrin 0.20%'],
              ['Mattress', 'Spray lightly, particularly around seams and tufts', 'Spray mattresses, particularly around tufts and seams', 'Spot treatment to mattresses and box springs, particularly seams and tufts'],
              ['Couch (upholstered furniture)', 'Tuft and seam treatment is defined for mattresses and upholstered furniture', 'No: furniture treatment is limited to pet bedding, mattresses, box springs and bed frames', 'Limited to tufts and seams or spot treatment'],
              ['Frames, cracks, baseboards', 'Frames, springs and all joints; cracks, crevices, baseboards', 'Bed frame, spring and joints; cracks, crevices, baseboards and mouldings', 'Cracks and crevices on and around baseboards, bed frames, closets, door and window frames'],
              ['Residual', 'None claimed: insects must be contacted to be killed', 'None claimed', 'None claimed: a contact and spot spray'],
              ['Repeat', 'Only after 7 days if the problem persists', 'Only after 7 days if the problem persists', 'No interval stated; test a hidden spot for staining first'],
              ['Signal words', 'DANGER, extremely flammable, explosive', 'CAUTION, explosive', 'CAUTION, explosive'],
            ]}
            caption={<>From the approved Canadian labels in Health Canada&rsquo;s <a href="https://pest-control.canada.ca/pesticide-registry/en/product-search.html" target="_blank" rel="noopener noreferrer" className="underline">Pesticide Product Information Database</a>, opened October 28, 2026: KONK Bed Bug Killer (PCP 31110, label of December 21, 2023), Raid Bed Bug Killer (31897) and Ortho Bed Bug B Gon MAX Bed Bug Killer I (33722). None of the three labels makes an egg claim.</>}
          />

          <p className="not-prose text-sm text-gray-600 mb-1">Check current Canadian availability:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="konk bed bug killer aerosol">Konk on Amazon.ca &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="cimexa insecticide dust">Desiccant dust &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="bed bug steamer">Bed bug steamer &rarr;</BuyLink>
          </div>

          <NextUp path="/blog/konk-bed-bug-killer-review-canada" />
          <h2>What Konk Does Well: Legal, Available, Fast on Contact</h2>
          <p>Give Konk credit for the things it actually delivers, because they matter. First, contact knockdown: if you can see a bed bug and spray it directly, Konk kills it quickly. For the person who lifts a mattress corner, spots a cluster, and wants them dead <em>now</em>, a fast contact aerosol is the right tool and Konk performs. Second, availability: it is stocked through Canadian retail and hardware channels, so you are not waiting on a cross-border shipment while bugs multiply. Third &mdash; and this is the one that separates it from half the internet&rsquo;s advice &mdash; it is <strong>registered</strong>. You are buying a registered product with a Canadian label, which means when you follow the label you are on solid, legal ground.</p>
          <p>That legality is not a small thing dressed up to fill a review. Importing an unregistered pesticide breaches the Pest Control Products Act, and the products Canadians are most often told to smuggle lean on the very pyrethroid chemistry resistant bed bugs already survive &mdash; so the legal risk frequently buys no extra performance. Konk lets you have the legal, labelled option and spend your energy on technique and the wider plan instead of on border roulette.</p>

          <h2>Where Konk Hits the Wall: Resistance, Eggs, and Reach</h2>
          <p>Now the honest part, and it applies to nearly every consumer bed bug spray, not just this one. Konk has three structural limits you need to plan around rather than be surprised by.</p>
          <ul>
            <li><strong>Resistance.</strong> EPA says some bed bug populations have become resistant to pyrethrins and pyrethroids. A direct hit at close range still overwhelms many bugs, but the ones you do not wet head-on &mdash; the ones that merely cross a treated surface later &mdash; are far less reliably killed.</li>
            <li><strong>Eggs survive.</strong> Bed bug eggs are cemented into seams under a tough coating, and a contact aerosol neither penetrates that coating well nor reaches most of the eggs in the first place. A mattress you have sprayed can still be studded with viable eggs waiting to hatch.</li>
            <li><strong>Reach and residual.</strong> A surface spray coats surfaces. It does not travel into the bolt holes, deep frame joints, and wall voids where an infestation actually shelters, and KONK&rsquo;s label claims no residual at all (&ldquo;Insects must be contacted to be killed&rdquo;) &mdash; so bugs emerging later from untreated harbourage walk out into a home that is no longer hostile to them.</li>
          </ul>
          <Photo id="bed-bugs-eggs-mattress-seam" alt="Bed bugs and their white eggs along a seam of a bed" caption="Bed bugs and their white eggs along a seam of a bed (the photographer's description). KONK's label sends the spray to seams and tufts like these, but it makes no egg claim, so the eggs need heat." />
          <p>Put those three together and you get the phenomenon behind every &ldquo;bed bug sprays don&rsquo;t work&rdquo; complaint: someone sprays the visible bugs, the population appears to drop, and two weeks later it rebounds from eggs and survivors the can never touched. The spray did not fail at its job &mdash; it was asked to do four other jobs it was never built for. Our companion piece on <Link href="/blog/do-bed-bug-sprays-actually-work">whether bed bug sprays actually work</Link> unpacks this dynamic in full.</p>

          <h2>How to Use Konk Correctly</h2>
          <p>Because Konk is a registered pesticide, the label is not fine print &mdash; it is the set of directions that makes using the product legal, and it tells you where you may and may not apply it. Read it before you spray. With that established, the technique that gets the most out of a contact aerosol looks like this:</p>
          <ul>
            <li><strong>Strip and expose first.</strong> Pull bedding, tip the mattress, and get eyes on the harbourage so you can spray bugs directly rather than blindly misting fabric.</li>
            <li><strong>Hit visible bugs head-on.</strong> Direct contact is where the aerosol is strongest &mdash; spray clusters and individuals you can see for immediate knockdown.</li>
            <li><strong>Treat harbourage and travel routes.</strong> Bed-frame joints and bolt holes, the box-spring staple line and fabric edge, cracks in the headboard, baseboard gaps, and the wall-floor junction around the bed &mdash; within what the label permits.</li>
            <li><strong>Respect the label on sleeping surfaces.</strong> The label says to spray the mattress lightly, particularly around seams and tufts, to remove bedding first, and to let the mattress dry before laundered bedding goes back; it says DO NOT use the spray on pillows, bedding, toys or clothing.</li>
            <li><strong>Ventilate and keep others out.</strong> The label says DO NOT apply when people or pets are present and keep them out until sprays have settled and dried; it is toxic to aquatic organisms, so keep it away from fish tanks.</li>
            <li><strong>Skip closets and attics.</strong> The label says DO NOT apply to overhead areas or in confined spaces such as attics, crawlspaces, small storage rooms and closets, and never as an indoor space spray.</li>
            <li><strong>Keep it away from flame.</strong> The can reads DANGER: extremely flammable, explosive. Do not spray near an open flame or spark, or while smoking.</li>
            <li><strong>Repeat on schedule.</strong> One pass never reaches everything; the label allows a repeat only after 7 days if the problem persists, so expect to spray again as eggs hatch.</li>
          </ul>
          <Photo id="bed-bug-fecal-spots-bed-frame" alt="Black bed bug fecal spots on a wooden bed frame" caption="Black bed bug fecal spots on a wooden bed frame near where the bugs hid, photographed by the New York State IPM Program at Cornell University. Stains like these mark the frame joints the label tells you to take apart and spray." />
          <p>None of this makes a spray reach the eggs or the deep voids &mdash; it simply makes the contact tool as effective as a contact tool can be. For the jobs it cannot do, you bring other tools.</p>

          <RelatedLinks path="/blog/konk-bed-bug-killer-review-canada" />
          <h2>How to Choose: Which Spray, and When a Spray Is the Wrong Buy</h2>
          <p>Bed bug sprays cost real money by the time you have bought the several cans an infestation demands, so it is worth being clear-eyed about which product to pick and, more importantly, when a spray should not be your main purchase at all. Sort your decision this way:</p>
          <ul>
            <li><strong>If your priority is a legal, in-store Canadian product &mdash; pick Konk.</strong> Its registration and availability are exactly what you are paying the shelf price for, and its contact performance is solid. This is the case where Konk is genuinely the right answer.</li>
            <li><strong>If you want to avoid synthetic pyrethroids &mdash; know what is actually registered.</strong> KONK itself is pyrethrins, not a synthetic pyrethroid. The plant-oil spray people ask about, <Link href="/blog/ecoraider-bed-bug-spray-review-canada">EcoRaider</Link>, has no Canadian registration; the one domestic spray that lists bed bugs and is neither a pyrethrin, a pyrethroid nor diatomaceous earth is d-limonene (ProCitra-DL, PCP 29811).</li>
            <li><strong>If you need lasting protection in the cracks and voids &mdash; buy a dust, not a spray.</strong> A <Link href="/blog/diatomaceous-earth-for-bed-bugs">diatomaceous earth</Link> dust with a PCP number is resistance-proof and long-lasting, doing the durable work no aerosol can; <Link href="/blog/cimexa-bed-bug-review-canada">CimeXa</Link> has no Canadian registration.</li>
            <li><strong>If the eggs are the problem &mdash; buy heat.</strong> A <Link href="/blog/best-bed-bug-steamer-canada">steamer</Link> or <Link href="/blog/bed-bug-heater-canada">heat chamber</Link> kills eggs a spray leaves untouched.</li>
            <li><strong>If the infestation is established or spreading &mdash; no single consumer product is the buy.</strong> That is a layered-plan or professional situation, and pouring money into cans of any spray is how people spend the most for the least.</li>
          </ul>
          <p>The recurring mistake is treating a spray as the whole solution because it is the cheapest, most familiar-looking option on the shelf. A can of Konk is a good <em>component</em>. As a standalone strategy against anything beyond a trivial, caught-immediately problem, it is a slow way to lose the fight and your money at the same time.</p>

          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="konk bed bug killer aerosol">Check Konk on Amazon.ca &rarr;</BuyLink>
          </div>

          <h2>Before You Buy KONK: A 7-Point Label Check</h2>
          <ol>
            <li><strong>The name and number:</strong> the bed bug can is KONK Bed Bug Killer, PCP 31110. Other KONK cans list bed bugs too, with different actives and sites.</li>
            <li><strong>The class:</strong> DOMESTIC on the label. KONK Commercial Bed Bug Killer (31111) is the commercial version.</li>
            <li><strong>Your site:</strong> mattress seams and tufts, frames, springs, joints, cracks, crevices and baseboards are on the label; closets, attics and other confined spaces are excluded.</li>
            <li><strong>Contact only:</strong> the label says insects must be contacted to be killed, so plan a dust with a PCP number for the voids.</li>
            <li><strong>No egg claim:</strong> plan heat for the eggs. Health Canada says bed bugs die at 50&deg;C.</li>
            <li><strong>The repeat rule:</strong> only after 7 days, if the problem persists.</li>
            <li><strong>The room:</strong> nobody, pets included, in the room while you spray or until it has settled and dried; windows open or fans on afterwards.</li>
          </ol>

          <h2>Where Konk Fits in a Real Bed Bug Plan</h2>
          <p>No spray clears an established infestation alone, and Konk is honest company in a layered plan rather than a substitute for one. Think of it as the knockdown-and-spot layer, with the other layers covering the jobs it structurally cannot:</p>
          <ul>
            <li><strong>Knock down and spot-treat &mdash; Konk&rsquo;s job.</strong> Kill the visible bugs on contact and treat harbourage surfaces as you work.</li>
            <li><strong>Heat for the eggs.</strong> A <Link href="/blog/best-bed-bug-steamer-canada">steamer</Link> reaches into seams and folds and kills the eggs no spray reliably touches, and a <Link href="/blog/bed-bug-heater-canada">heater or heat chamber</Link> sterilizes belongings.</li>
            <li><strong>Dust the voids.</strong> A desiccant <Link href="/blog/best-bed-bug-powder-canada">bed bug powder</Link> with a PCP number, such as a diatomaceous earth dust, is the resistance-proof, long-lasting barrier in cracks and travel routes the spray cannot coat (<Link href="/blog/cimexa-bed-bug-review-canada">CimeXa</Link> has no Canadian registration).</li>
            <li><strong>Seal the mattress.</strong> A zippered <Link href="/blog/bed-bug-mattress-encasement-canada">encasement</Link> traps anything inside and removes the seams bugs love.</li>
            <li><strong>Monitor with interceptors.</strong> <Link href="/blog/bed-bug-interceptor-traps-canada">Interceptor cups</Link> under the bed legs catch travellers and show you, week over week, whether the numbers are actually falling.</li>
            <li><strong>Remove the visible population.</strong> A <Link href="/blog/best-hepa-vacuum-for-bed-bugs-and-fleas-canada">sealed-HEPA vacuum</Link> physically lifts adults and nymphs before you spray, dust, and steam.</li>
          </ul>
          <p>For anything beyond a caught-early, localized problem &mdash; a spreading infestation in an apartment, or bugs established in furniture and walls &mdash; a professional treatment is the honest answer. Our guides on <Link href="/blog/how-to-get-rid-of-bed-bugs-canada">how to get rid of bed bugs in Canada</Link> and <Link href="/blog/how-to-get-rid-of-bed-bugs-in-apartment-canada">bed bugs in an apartment</Link> walk through how the pieces fit together, and <Link href="/blog/heat-vs-chemical-bed-bug-treatment-canada">heat vs chemical treatment</Link> covers the bigger strategic choice a spray like Konk sits inside.</p>

          <h2>The Regulatory Angle: The Legal Choice, Clearly</h2>
          <p>It is worth restating plainly, because it is the reason to prefer Konk over much of what the internet pushes. Health Canada&rsquo;s PMRA assesses a pesticide&rsquo;s health and environmental risks and its value before it can be registered for sale here, and the PCP number on a KONK can shows that it is registered, with a label that sets the conditions of use. The US concentrates Canadians are constantly told to import &mdash; CrossFire, Temprid FX, and similar &mdash; have no Canadian registration (Temprid is registered here only as commercial-class Temprid SC and ReadySpray), and bringing them across the border violates the Pest Control Products Act. They pair a neonicotinoid with a pyrethroid, but whatever they do in the US, they are not legal to use in a Canadian home.</p>
          <p>Choosing a registered aerosol like Konk gives you a reviewed label you can actually follow, no border risk, and clarity about what is going into your bedroom. That does not make a contact spray more powerful than it is &mdash; the resistance, the eggs, and the reach limits are all still real &mdash; but it means the tool you are working with is legal, labelled, and honest about itself. In a category full of grey-market temptation, that is worth a lot.</p>

          <h2>Verdict: 7.4/10 &mdash; A Sound Legal Knockdown Tool, Not a Cure</h2>
          <p>Konk Bed Bug Killer earns its 7.4 by being a good, honest version of a limited tool. As a Canadian-registered contact aerosol it does exactly what a contact aerosol should: it knocks down the bugs you spray, it is available without any grey-market fuss, and it comes with a reviewed label you can follow with confidence. The score sits where it does not because Konk is worse than its rivals &mdash; it is squarely competitive with them &mdash; but because the whole consumer-spray category shares a hard ceiling: pyrethroid resistance, untouched eggs, and no reach into deep harbourage.</p>
          <p>Buy it for what it is: the legal knockdown-and-spot layer in a plan that also brings heat for the eggs, dust for the voids, encasements for the mattress, and interceptors to monitor. Used that way it is a genuinely useful purchase and the right call over anything you would have to smuggle. Bought as a one-can answer to an established infestation, it will let you down &mdash; not because it is a bad spray, but because no spray is a plan.</p>
          <p>Not settled on Konk yet? Our <Link href="/blog/bed-bug-spray-canada">bed bug spray and killer guide for Canada</Link> ranks it against every other PMRA-registered can, shows which US &ldquo;strongest bed bug killer&rdquo; picks are illegal here, and breaks down which chemicals kill eggs as well as bugs.</p>

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
            <li><Link href="/blog/bed-bug-control-canada-hub">Bed Bug Control Canada — The Complete Plan</Link></li>
            <li><Link href="/blog/bed-bug-spray-canada">Bed Bug Spray Canada — What Actually Works</Link></li>
            <li><Link href="/blog/do-bed-bug-sprays-actually-work">Do Bed Bug Sprays Actually Work?</Link></li>
            <li><Link href="/blog/ecoraider-bed-bug-spray-review-canada">EcoRaider Bed Bug Spray Review Canada</Link></li>
            <li><Link href="/blog/harris-bed-bug-killer-review-canada">Harris Bed Bug Killer Review Canada</Link></li>
            <li><Link href="/blog/ortho-home-defense-bed-bug-review-canada">Ortho Home Defense Bed Bug Review Canada</Link></li>
            <li><Link href="/blog/cimexa-bed-bug-review-canada">CimeXa Bed Bug Review Canada — The Pro-Grade Dust</Link></li>
            <li><Link href="/blog/best-bed-bug-steamer-canada">Best Bed-Bug Steamer Canada — Heat That Kills the Eggs</Link></li>
            <li><Link href="/blog/heat-vs-chemical-bed-bug-treatment-canada">Heat vs Chemical Bed Bug Treatment Canada</Link></li>
            <li><Link href="/blog/best-pest-control-equipment-canada">Best Pest Control Equipment in Canada — The Full Kit</Link></li>
          </ul>

          <div className="not-prose mt-10 rounded-xl border border-navy-100 bg-brand-50 px-5 py-4">
            <p className="text-sm text-brand-900">
              <Link href="/pest-product-guides" className="font-bold text-emerald-700 hover:text-emerald-800 underline">More independent Canadian pest product research &rarr;</Link>
            </p>
          </div>
        </div>
        <AdjacentPestCTA pest="bed bugs" />
        <ReadNext path="/blog/konk-bed-bug-killer-review-canada" />
      </article>
    </>
  )
}
