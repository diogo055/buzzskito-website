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

const SLUG = 'bed-bug-equipment-kit-for-landlords-canada'
const DATE = '2026-08-22'
const UPDATED = '2026-08-22'
const TITLE = 'Bed Bug Equipment Kit for Landlords in Canada — What to Stock for a Multi-Unit Building'
const META_TITLE = 'Bed Bug Kit for Landlords in Canada'

const FAQS = [
  {
    question: 'What should a Canadian landlord keep in a bed bug kit?',
    answer: 'Split it in two. Consumables scale with the number of beds you are responsible for: certified six-sided encasements for every mattress and box spring, a minimum of four interceptor traps under each bed, and passive monitors for common areas and units you are watching. Capital equipment does not scale and is bought once for the whole building: one dry-vapour steamer, one sealed-HEPA vacuum with disposable bags, an infrared thermometer to verify you are actually hitting a lethal surface temperature, and heavy-duty disposal bags for anything leaving a unit. Keep the whole thing in one labelled bin so a call-out does not turn into a shopping trip.',
  },
  {
    question: 'How many interceptor traps do I need for a six-unit building?',
    answer: 'At least four per bed, one under each leg, so budget on beds rather than doors. A six-unit building where each unit has one bed needs a minimum of 24, and realistically more, because you also want two to four under couches and armchairs in any unit you are actively monitoring, plus a reserve so you are never rationing them. Interceptors are the cheapest line in the entire kit and the one that tells you whether anything else is working, so under-buying them is a false economy. Buy them in multi-packs, label each set by unit number, and log what you find with a date.',
  },
  {
    question: 'Am I legally responsible for bed bugs in my Ontario rental?',
    answer: 'In broad terms yes — under Ontario’s Residential Tenancies Act a landlord is responsible for maintaining a rental unit in a good state of repair, fit for habitation, and compliant with health, safety and housing standards, and municipal property standards bylaws across Ontario commonly require premises to be kept free of pests. In practice that means responding promptly, treating the affected unit and inspecting its neighbours, and being able to show what you did and when. This is general information rather than legal advice: confirm your obligations with your municipality, and speak to a paralegal or lawyer about any specific dispute or Landlord and Tenant Board matter.',
  },
  {
    question: 'Can a landlord treat bed bugs themselves instead of hiring an exterminator?',
    answer: 'You can do the non-chemical half yourself, and you should — encasing, interceptor monitoring, steaming and HEPA vacuuming involve no pesticide, no PMRA registration and no licensing question at all. That is exactly why this kit is built the way it is. The pesticide half is different: structural pesticide application in residential rental housing is work to put on a licensed exterminator, both because of Ontario’s licensing framework and because a mis-applied product in a shared building is a liability you do not want. The realistic model is a licensed professional doing the treatments while your kit does the detection, containment and preparation between visits.',
  },
  {
    question: 'Should I buy a fogger for my rental units?',
    answer: 'No — of every purchase available to a landlord, this is the worst one. Total-release foggers do not penetrate the harbourages bed bugs actually use, and the repellent action drives them outward along wall voids, plumbing chases and baseboards. In a detached house that spreads a problem across rooms. In a multi-unit building it spreads your problem into your neighbouring tenants’ units, which converts one complaint into three and one treatment invoice into several. There is also a real ignition risk with aerosol foggers near pilot lights. Spend the money on encasements and interceptors instead; they work, and they cannot make things worse.',
  },
  {
    question: 'Do I need a commercial steamer, or will a consumer one do?',
    answer: 'It depends entirely on how many doors you have. The thing that kills bed bugs — hot, low-moisture vapour applied slowly — is identical on a consumer boiler steamer and a four-figure commercial one. What the commercial machine buys is uptime: a boiler you can feed without stopping to cool and depressurise, and a duty cycle built for daily use. Below roughly six to eight units, a good consumer boiler steamer is the correct buy and the money saved is better spent on encasements. Above that, or if you are turning units weekly, the refill architecture starts genuinely paying for itself.',
  },
  {
    question: 'Can I use a shop vac or a regular vacuum for bed bugs?',
    answer: 'Not safely. A standard vacuum without a sealed HEPA path leaks fine material — including allergens, shed skins and, in poor cases, live first-instar nymphs — back into the room through the exhaust and the body seams, and a bagless canister means you are emptying an open bin of live bed bugs somewhere. What you want is a sealed-HEPA machine that takes a disposable bag: vacuum the seams and cracks, then immediately remove the bag, seal it in a heavy-duty plastic bag, and put it in an outdoor bin. One machine can serve a whole building provided you re-bag between units and never carry a used bag through a hallway loose.',
  },
  {
    question: 'How long do encasements have to stay on?',
    answer: 'Twelve to eighteen months, unopened. Adult bed bugs can survive well over a year without feeding — laboratory work records 400-plus days at cooler temperatures — so an encasement zipped for three months and then removed has simply released whatever it trapped. For a landlord this is actually an advantage rather than a burden: an encasement is a one-time install that keeps protecting the mattress through tenant turnover, makes future inspections dramatically faster because the mattress surface is smooth and readable, and is far cheaper than replacing a mattress you had no obligation to replace. Install them and leave them.',
  },
  {
    question: 'When is the best time to use the kit?',
    answer: 'At turnover, while the unit is empty. An empty unit is the only time you can inspect frames, baseboards, outlet plates and closet edges without working around furniture and around a tenant’s schedule, and it is the cheapest possible moment to install encasements and set interceptors. A ninety-minute pass at turnover — inspect, steam the frame and baseboard edge, encase, set four interceptors, log it with dated photos — costs you almost nothing and is the single highest-return use of the equipment. Landlords who only open the bin during a complaint are always paying more than landlords who open it between tenancies.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'The bed bug equipment kit for Canadian landlords: what scales per unit, what you buy once for the whole building, and the multi-unit mistakes to avoid.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug(SLUG)

export default function BedBugEquipmentKitForLandlordsCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'An independent Canadian guide to the bed bug equipment a landlord or property manager should stock for a multi-unit building — what scales per door, what is bought once, and the multi-unit mistakes that cost the most.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Bed Bug Kit for Landlords', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Bed Bug Kit for Landlords</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">Every bed-bug guide is written for one household with one infestation. A landlord has a different problem: several doors, shared walls, tenant turnover, and a paper trail. Here is what to stock, what scales per unit, what you buy once, and the multi-unit mistakes that cost the most.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <StickyBuyBar tag={AMZ_TAG} name="Bed bug encasements and interceptors (multi-pack)" search="bed bug mattress encasement multi pack" label="Start here" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">A landlord&rsquo;s bed bug kit splits into two halves. <strong>Consumables scale with beds</strong> &mdash; a certified six-sided encasement for every mattress and box spring, a minimum of four interceptor traps under each bed, plus passive monitors. <strong>Machines are bought once for the whole building</strong> &mdash; one dry-vapour steamer, one sealed-HEPA vacuum that takes disposable bags, an infrared thermometer, and heavy-duty disposal bags. The kit is deliberately non-chemical, which is what keeps it entirely legal for you to run yourself while a licensed exterminator handles any pesticide work.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>Budget on <strong>beds, not doors</strong> &mdash; a six-unit building is 6 mattress + 6 box spring encasements and 24+ interceptors.</li>
              <li>Encasements stay zipped <strong>12&ndash;18 months</strong>; adults survive 400+ days without feeding at cooler temperatures.</li>
              <li>Never fog a multi-unit building &mdash; it drives bed bugs along wall voids <strong>into your neighbouring tenants&rsquo; units</strong>.</li>
              <li>The vacuum must be <strong>sealed HEPA with a disposable bag</strong>. A bagless shop vac is a live-bug container you then open.</li>
              <li>One treated unit is not a treated building &mdash; <strong>inspect both sides, above and below</strong> every time.</li>
              <li>The highest-return 90 minutes in the whole kit is <strong>turnover</strong>, while the unit is empty.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito Pest Product Guides &middot; independent Canadian research</p>
          </div>
          <SpecialistDisclosure pest="bed bugs" />
        </div>
      </section>

      <section className="bg-white px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <AwardRow tag={AMZ_TAG}
            heading="The Four Things Actually Worth Stocking"
            awards={[
              {
                badge: 'Buy First — Per Bed',
                name: 'Six-sided zippered encasements (multi-pack)',
                why: 'A lab-tested encasement seals all six sides with a secured micro-zipper, which is the exact point cheap “protectors” fail. One install per mattress and per box spring protects the asset through every future tenancy and makes later inspections readable at a glance.',
                search: 'bed bug mattress encasement multi pack',
                score: 9.4,
                featured: true,
                pros: ['Protects the mattress through turnover', 'Makes future inspection fast', 'No pesticide, no licence, no PMRA'],
                cons: ['Must stay zipped 12–18 months', 'Measure depth before ordering in bulk'],
              },
              {
                badge: 'Cheapest Line, Highest Value',
                name: 'Interceptor traps (bulk, 4 per bed)',
                why: 'Passive cups under each bed leg are the only thing that tells you whether a unit is clear, still active, or newly re-infested — and they cost less per unit than a single service call. They are also your dated evidence when a tenancy turns into a dispute.',
                search: 'climbup insect interceptor multi pack',
                score: 9.2,
                pros: ['Confirms or clears a unit in 14 nights', 'Pesticide-free, no regulatory strings', 'Doubles as a dated record'],
                cons: ['Needs a logging habit to be worth anything', 'Four per bed is a minimum, not a target'],
              },
              {
                badge: 'Buy Once — Whole Building',
                name: 'Dry-vapour boiler steamer',
                why: 'Heat is the one thing that kills eggs a vacuum cannot lift, and steam is the version of heat you can point at a frame joint, a baseboard edge or a headboard crack. One good machine serves an entire building; below six to eight doors a consumer boiler unit is genuinely enough.',
                search: 'dupray neat steam cleaner',
                score: 8.9,
                pros: ['Kills eggs on contact', 'No chemical, no re-entry interval', 'One machine covers the building'],
                cons: ['Slow, disciplined technique or it does nothing', 'Feed it distilled water in hard-water regions'],
              },
              {
                badge: 'Buy Once — Non-Negotiable',
                name: 'Sealed-HEPA vacuum with disposable bags',
                why: 'Physical removal before steaming, and the only safe way to move live bed bugs out of a unit. Sealed HEPA with a disposable bag means you remove and seal the bag on the spot rather than opening a bagless canister full of live insects.',
                search: 'sealed hepa canister vacuum bagged',
                score: 8.6,
                pros: ['Removes adults and nymphs instantly', 'Bag is sealed and binned on site', 'Useful across every unit you own'],
                cons: ['Bagless and shop vacs are not substitutes', 'Ongoing bag cost per unit treated'],
              },
            ]}
            whichToBuy={
              <>
                <strong>Buying in order on a limited budget?</strong> Encasements and interceptors first &mdash; they are cheap, they scale, and they are the two that protect the asset and produce evidence. <strong>Then</strong> the sealed-HEPA vacuum, because you cannot treat a unit safely without it. <strong>The steamer last</strong>, and only a consumer-tier one until your door count justifies more. Anything else on the shelf is optional; a fogger is actively harmful.
              </>
            }
          />
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />

          <h2>What a landlord&rsquo;s bed bug kit actually is</h2>
          <p>It is a bin, in a locked storage room, containing the equipment needed to inspect, contain, monitor and prepare a unit &mdash; and it is deliberately not a chemical kit. That distinction is the entire design principle. Everything in this list is a physical tool or a barrier: encasements, interceptors, monitors, a steamer, a HEPA vacuum, disposal bags. None of it is a pest control product, so none of it carries a PMRA registration, a licence requirement, or a re-entry interval, and there is no question about whether you are allowed to use it in your own building.</p>
          <p>The pesticide half of bed bug control belongs to a licensed exterminator, and for a landlord that is not a cost-saving compromise, it is the correct division of labour. A mis-applied product in a building with shared walls is a liability event. Your kit&rsquo;s job is everything around the treatment: finding the problem early, proving what you found, containing what you have, preparing the unit so the professional&rsquo;s visit actually works, and monitoring afterwards so you know whether it did.</p>

          <AffiliateDisclosure />
          <p className="not-prose text-sm text-gray-600 mb-1">Check current Canadian availability for the kit lines:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="bed bug mattress encasement multi pack">Encasements (multi-pack) &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="climbup insect interceptor multi pack">Interceptors (bulk) &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="sealed hepa canister vacuum bagged">Sealed-HEPA vacuum &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="dupray neat steam cleaner">Boiler steamer &rarr;</BuyLink>
          </div>

          <h2>Consumables scale with beds. Machines do not.</h2>
          <p>This is the sentence that makes a landlord&rsquo;s shopping list different from a homeowner&rsquo;s, and it is worth being precise about, because the two halves behave completely differently when you multiply them.</p>
          <p><strong>Consumables scale, and they scale on beds rather than doors.</strong> A six-unit building with one bed per unit is six mattress encasements plus six box-spring encasements, and a minimum of twenty-four interceptor traps &mdash; four under each bed. A two-bedroom unit is two of everything. Encasements typically run $40&ndash;$90 for a queen in Canada, so the encasement line on a six-unit building is a real number worth planning for rather than an impulse purchase during a complaint. Buy them in multi-packs, measure depths first &mdash; standard mattresses are 20&ndash;30 cm and pillow-tops need a deep-pocket size &mdash; and label each set by unit.</p>
          <p><strong>Machines do not scale.</strong> One steamer and one sealed-HEPA vacuum serve an entire building, and they keep serving it for years. That asymmetry is why the correct buying order is consumables first: the encasements and interceptors are the cheap, high-multiplicity items that protect your mattresses and produce your evidence, and they are also the ones landlords chronically under-buy because a bulk order looks expensive next to a single machine.</p>

          <div className="not-prose rounded-xl border border-navy-100 overflow-hidden bg-white shadow-sm my-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Kit line</th>
                  <th className="px-4 py-3 text-left">Scales with</th>
                  <th className="px-4 py-3 text-left">4-unit building</th>
                  <th className="px-4 py-3 text-left">6-unit building</th>
                  <th className="px-4 py-3 text-left">12-unit building</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { l: 'Mattress encasements', s: 'Beds', a: '4+', b: '6+', c: '12+' },
                  { l: 'Box-spring encasements', s: 'Beds', a: '4+', b: '6+', c: '12+' },
                  { l: 'Interceptor traps', s: 'Bed legs', a: '16+', b: '24+', c: '48+' },
                  { l: 'Passive monitors', s: 'Units watched', a: '4–8', b: '6–12', c: '12–24' },
                  { l: 'Boiler steamer', s: 'Nothing — buy one', a: '1 consumer', b: '1 consumer', c: '1, consider commercial' },
                  { l: 'Sealed-HEPA vacuum', s: 'Nothing — buy one', a: '1', b: '1', c: '1' },
                  { l: 'Vacuum bags', s: 'Units treated', a: 'Stock a box', b: 'Stock a box', c: 'Stock two' },
                  { l: 'Heavy-duty disposal bags', s: 'Items removed', a: 'Stock a roll', b: 'Stock a roll', c: 'Stock two' },
                ].map(({ l, s, a, b, c }) => (
                  <tr key={l} className="border-b border-navy-50 last:border-0 align-top">
                    <td className="px-4 py-3 font-bold text-brand-800">{l}</td>
                    <td className="px-4 py-3 text-xs text-gray-600">{s}</td>
                    <td className="px-4 py-3 font-mono text-gray-800">{a}</td>
                    <td className="px-4 py-3 font-mono text-gray-800">{b}</td>
                    <td className="px-4 py-3 font-mono text-gray-800">{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 not-prose">Counts assume one bed per unit and are minimums. Add two to four interceptors per unit for couches and armchairs in any unit under active monitoring, and hold a reserve so you are never rationing them mid-complaint.</p>

          <h2>The line items, and what to look for in each</h2>
          <h3>Encasements — the asset protection line</h3>
          <p>An encasement seals all six sides of a mattress with a zipper and a secured end-stop; a &ldquo;mattress cover&rdquo; or protector covers the top surface only and does nothing against bed bugs. The failure point on cheap versions is always the zipper end: a first-instar nymph is around a millimetre wide, so a zipper that gapes two or three teeth defeats the whole purchase. Encase the box spring as well &mdash; it is the harbourage people forget, and the interior is out of reach of any steamer. Once fitted, they stay zipped for 12 to 18 months, which for a landlord is not a burden but a feature: it survives tenant turnover, protects the mattress you own, and makes every future inspection a two-minute look at a smooth surface. Our <Link href="/blog/bed-bug-mattress-encasement-canada">mattress encasement guide</Link> covers what a certified seal looks like, and the <Link href="/blog/best-bed-bug-box-spring-encasement-canada">box spring encasement guide</Link> covers the half people skip.</p>
          <h3>Interceptors — the evidence line</h3>
          <p>Four under each bed leg, minimum, and two to four more under couches and chairs in any unit you are watching. Fourteen consecutive nights is the honest monitoring window because bed bugs feed only every three to seven days, so a three-night check proves nothing. For a landlord the interceptor does double duty: it is a detection tool and it is a dated record. Photograph each set with the unit number and the date when you install it and when you check it. That habit costs nothing and is the difference between &ldquo;we responded promptly&rdquo; and being able to show it. The <Link href="/blog/bed-bug-interceptor-traps-canada">interceptor trap guide</Link> covers the monitoring protocol in full.</p>
          <h3>Steamer — the egg line</h3>
          <p>Heat kills the eggs a vacuum cannot lift, and steam is the version of heat you can aim into a frame joint, a headboard crack or the carpet edge along a baseboard. The technique matters far more than the machine: move at roughly two to three centimetres per second with a concentrator tip, and verify with an infrared thermometer rather than trusting the feel of it. On machine tier, be honest with yourself about door count &mdash; the thing that kills bed bugs is identical on a consumer boiler unit and a four-figure commercial one, and what the expensive machine buys is uptime, not lethality. We break that decision down in <Link href="/blog/dupray-neat-vs-hill-injection-canada">Dupray Neat vs Hill Injection</Link>, and the <Link href="/blog/best-bed-bug-steamer-canada">bed-bug steamer guide</Link> covers the slow-pass protocol.</p>
          <h3>Vacuum — the removal line</h3>
          <p>Sealed HEPA, with a disposable bag, full stop. A bagless canister is a container of live bed bugs that you then have to open somewhere, and a vacuum without a sealed exhaust path pushes fine material back into the room. Vacuum the seams and cracks first so the steam is not simply cooking a crowd, then remove the bag on the spot, seal it inside a heavy-duty plastic bag, and put it straight into an outdoor bin &mdash; never carry a used bag loose through a shared hallway. Our <Link href="/blog/best-hepa-vacuum-for-bed-bugs-and-fleas-canada">sealed-HEPA vacuum guide</Link> covers what &ldquo;sealed&rdquo; actually means on a spec sheet.</p>
          <div className="not-prose my-4 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="bed bug box spring encasement">Box-spring encasements &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="infrared thermometer">Infrared thermometer &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="heavy duty mattress disposal bag">Mattress disposal bags &rarr;</BuyLink>
          </div>

          <h2>The mistakes landlords make that homeowners do not</h2>
          <p>A homeowner has one problem in one place. A landlord has a problem with neighbours, a schedule and a paper trail, and the failure modes are different.</p>
          <ul>
            <li><strong>Treating the reported unit and nothing else.</strong> Bed bugs travel along shared walls, plumbing chases, baseboards and outlet boxes. One treated unit in an untreated building is a unit that will be re-infested from next door. Inspect both neighbours, above and below, every single time &mdash; and set interceptors in those units rather than relying on tenants noticing bites.</li>
            <li><strong>Reaching for a fogger.</strong> This is the most expensive mistake available. Foggers do not reach the harbourages that matter and their repellent action drives bed bugs outward through voids into adjacent units, converting one complaint into three. We are blunt about it in <Link href="/blog/best-bed-bug-fogger-canada">the bed bug fogger guide</Link>.</li>
            <li><strong>Buying &ldquo;mattress protectors&rdquo; in bulk.</strong> They are cheaper per unit and they do nothing. The saving is entirely illusory because you will buy the real encasements anyway, later, under pressure.</li>
            <li><strong>Monitoring without logging.</strong> An interceptor you did not photograph and date is worth a fraction of one you did. Your log is how you demonstrate a prompt, competent response.</li>
            <li><strong>Waiting for a complaint.</strong> By the time a tenant reports bites the population has usually been building for weeks. Turnover inspections are cheaper than everything that follows.</li>
          </ul>

          <h2>Where the licensed-exterminator line sits</h2>
          <p>Under Ontario&rsquo;s Residential Tenancies Act, a landlord is responsible for maintaining a rental unit in a good state of repair and fit for habitation, and municipal property standards bylaws across the province commonly require premises to be kept free of pests. What that means practically is speed and documentation: respond quickly, treat and inspect properly, keep records. Treat this as general information rather than legal advice &mdash; confirm your own obligations with your municipality, and take any Landlord and Tenant Board matter to a paralegal or lawyer.</p>
          <p>The operational split that works is simple. The licensed exterminator does the pesticide treatments. Your kit does everything else: the inspection that finds it, the interceptors that confirm it, the vacuum and steam that prepare the unit and knock the population down before the professional arrives, the encasements that contain what survives, and the monitoring afterwards that tells you whether the treatment held. That preparation is not busywork &mdash; a properly prepped unit measurably improves what a treatment achieves, and it is the part a landlord controls entirely. For the cost side of the professional half, our <Link href="/blog/bed-bug-treatment-cost-canada">Canadian bed bug treatment cost guide</Link> lays out the published ranges and what makes quotes vary.</p>

          <h2>Turnover: the highest-return ninety minutes in the kit</h2>
          <p>An empty unit is the only time you can read a building honestly. Nobody&rsquo;s furniture is in the way, nobody&rsquo;s schedule has to be accommodated, and nothing you find is anyone&rsquo;s embarrassment. Run the same pass every time:</p>
          <ol>
            <li><strong>Inspect.</strong> Mattress seams and piping, box spring dust cover, frame joints and screw holes, headboard, baseboard edges, closet corners, and behind loose outlet plates. Our <Link href="/blog/how-to-check-for-bed-bugs-canada">inspection guide</Link> covers what the evidence actually looks like.</li>
            <li><strong>Vacuum, then steam.</strong> Physical removal first, then a slow pass with the concentrator tip over every seam, joint and baseboard edge. Bag and bin the vacuum bag on the spot.</li>
            <li><strong>Encase.</strong> Mattress and box spring, both, zipped and left alone.</li>
            <li><strong>Set four interceptors</strong> under the bed legs, and photograph them with the unit number and date.</li>
            <li><strong>Log it.</strong> Dated photos into a folder per unit. Ninety minutes, once per tenancy.</li>
          </ol>
          <p>If a unit is currently occupied and active, the same sequence applies with an exterminator handling the chemical layer &mdash; and the apartment-specific realities of shared walls and neighbouring units are covered in <Link href="/blog/how-to-get-rid-of-bed-bugs-in-apartment-canada">our apartment bed bug guide</Link>.</p>

          <h2>What not to buy</h2>
          <p>Skip the fogger, and skip bulk cases of consumer bed bug spray &mdash; residual performance against bed bugs is poor and resistance is widespread, so the money is better spent on barriers. Skip whole-room heaters unless you genuinely know what you are doing; they are a four-figure purchase with a real fire risk in untrained hands and a potential insurance conversation you do not want to have. Skip anything sold as a bed bug repellent, an ultrasonic device, or a &ldquo;bed bug detector&rdquo; that plugs in &mdash; a four-dollar interceptor cup outperforms all of them. Everything you actually need is in the table above, and it is a smaller list than the shelf suggests.</p>
          <p>On sourcing: encasements, interceptors, monitors and disposal bags are straightforward multi-pack buys on Amazon.ca, which is also where the price break for quantity actually shows up. Canadian Tire, Home Depot and Rona are good for the disposal and storage side and for shop-grade tools, but note that a shop vac from any of them is not a sealed-HEPA machine no matter what the filter box says. Commercial-tier steamers are generally a direct or dealer purchase rather than an in-store item in Canada. For the wider picture of how these pieces fit together, our <Link href="/blog/bed-bug-control-canada-hub">Canadian bed bug control hub</Link> is the map.</p>

          <h2>Frequently Asked Questions</h2>
          <div className="not-prose space-y-4 my-6">
            {FAQS.map(({ question, answer }) => (
              <details key={question} className="group rounded-xl border border-navy-100 bg-white p-5">
                <summary className="cursor-pointer font-bold text-brand-900 list-none flex justify-between items-center gap-3">
                  {question}
                  <span className="text-emerald-600 group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                </summary>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed">{answer}</p>
              </details>
            ))}
          </div>

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/bed-bug-mattress-encasement-canada">Bed Bug Mattress Encasement Canada — What a Certified Seal Looks Like</Link></li>
            <li><Link href="/blog/bed-bug-interceptor-traps-canada">Bed Bug Interceptor Traps Canada — The 14-Night Monitoring Protocol</Link></li>
            <li><Link href="/blog/best-hepa-vacuum-for-bed-bugs-and-fleas-canada">Best Sealed-HEPA Vacuum for Bed Bugs &amp; Fleas Canada</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-bed-bugs-in-apartment-canada">How to Get Rid of Bed Bugs in an Apartment — Shared Walls and Neighbours</Link></li>
            <li><Link href="/blog/bed-bug-treatment-cost-canada">Bed Bug Treatment Cost in Canada — What Decides the Number</Link></li>
            <li><Link href="/blog/dupray-neat-vs-hill-injection-canada">Dupray Neat vs Hill Injection — Consumer or Commercial Steamer?</Link></li>
          </ul>

          <div className="not-prose mt-10 rounded-xl border border-navy-100 bg-brand-50 px-5 py-4">
            <p className="text-sm text-brand-900">
              <Link href="/pest-product-guides" className="font-bold text-emerald-700 hover:text-emerald-800 underline">More independent Canadian pest product research &rarr;</Link>
            </p>
          </div>
        </div>
        <AdjacentPestCTA pest="bed bugs" />
      </article>
    </>
  )
}
