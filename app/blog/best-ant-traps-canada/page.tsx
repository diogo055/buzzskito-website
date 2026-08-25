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

const SLUG = 'best-ant-traps-canada'
const DATE = '2026-07-28'
const UPDATED = '2026-07-28'
const TITLE = 'Best Ant Traps in Canada 2026 — Bait Stations vs Glue Traps, and What Actually Kills the Colony'
const META_TITLE = 'Best Ant Traps Canada 2026: Bait Stations'

const FAQS = [
  {
    question: 'What is the best ant trap in Canada?',
    answer: 'An enclosed liquid bait station is the best ant trap for an ordinary nuisance-ant trail in a Canadian home. It is not a trap in the sense of catching anything — it is a feeding station holding a sweet liquid laced with a slow-acting borax-family active. Foragers drink, survive the walk home, and share the bait through the colony by mouth-to-mouth feeding, which is the only mechanism available to a consumer that reaches the queen. Liquid stations are widely stocked by Canadian hardware, grocery and big-box retailers, they are among the cheapest things in the pest aisle, and the enclosed plastic housing is what makes them the sensible format in a home with kids or a dog. Check the pack for a Canadian PCP registration number before you buy.',
  },
  {
    question: 'Do ant traps actually work?',
    answer: 'Bait stations work; glue traps do not. That distinction is the whole answer. A bait station works because it exploits ant biology — the colony distributes your active ingredient for you, so a station that looks like it is doing nothing on day one can collapse an entire nest over the following weeks. A glue board catches individual foragers, which are a small and constantly replaced fraction of a colony, so the queen never notices. If someone tells you ant traps do not work, the usual explanations are the sticky kind, spraying near the bait, or throwing the station out during the recruitment surge on day two.',
  },
  {
    question: 'Ant traps or ant spray — which is better?',
    answer: 'Traps, and it is not close for the indoor case. A contact spray kills the ants it wets and leaves a repellent residue behind, which does three things you do not want: it removes the foragers that would have carried bait home, it makes ants refuse bait placed anywhere near the treated surface, and in multi-queen species such as odorous house ants and pharaoh ants the residue can trigger budding, where the colony splits into several new nests elsewhere in the building. Spraying a trail feels productive and frequently converts one problem into three. Bait first, do not spray, and if you have already sprayed, wash the surface with soap and water, wait a day, then bait.',
  },
  {
    question: 'Are ant traps safe around dogs, cats and children?',
    answer: 'Enclosed, child-resistant bait stations are specifically the format designed for occupied homes, and they are far safer than an aerosol or an exposed gel. That is not the same as harmless. A determined dog can chew a plastic station open, and the bait inside is sweet syrup, which is exactly what makes it interesting. Place stations where the animal physically cannot go — inside a cabinet, behind the fridge, under the sink behind a closed door, on top of the counter backsplash rather than the floor — rather than relying on the housing alone. Gel bait is not child-resistant at all; it belongs in cracks and voids out of reach. Read and follow the Canadian label, which is the legal instruction set, and if a pet gets into a station, call your vet or a pet poison line rather than waiting to see what happens.',
  },
  {
    question: 'Where should I put ant traps?',
    answer: 'Directly on the live trail, and in more places than feels necessary. Ants forage in narrow corridors, so a station a metre off the route is furniture. Get down at counter level, follow the line back to where it disappears into a gap, and place stations at that entry point, along the trail, under the sink, behind the stove, and in the cupboard corner nearest the activity. Set them beside the line rather than on top of it so you are not disturbing traffic. Then leave the trail alone — do not wipe it with vinegar or cleaner, because that pheromone path is the delivery route your bait depends on.',
  },
  {
    question: 'How many ant traps do I need?',
    answer: 'For a typical kitchen or bathroom trail, plan on four to six placements rather than one, which is why baits are sold in multi-packs. One station is a point defence against an insect that travels in fixed corridors. Coverage matters more than quantity of bait: a station at the entry gap, one mid-trail, one under the sink, one behind the appliance, and one in the nearest cupboard gives foragers several chances to find the offer. If you have trails in two rooms, treat them as two separate jobs with their own placements.',
  },
  {
    question: 'Do sticky traps and glue boards catch ants?',
    answer: 'They catch ants and control nothing. A glue board is excellent instrumentation for cockroaches and useful for silverfish, because in both cases the catch tells you something you could not otherwise see. For ants it is neither control nor information: the colony replaces trapped foragers faster than the board fills, and you already know where the trail is — you can see it on the counter. Sticky boards also collect dust and pet hair and go dead fast. If a product marketed as an ant trap has no active ingredient and no PCP registration number, it is a glue board with ambitions, and your money belongs in bait.',
  },
  {
    question: 'Why are there more ants after I put out ant traps?',
    answer: 'Because it is working, and this is the moment a lot of DIY ant jobs get abandoned. A forager that finds a rich food source lays a recruitment pheromone on the way home, and within hours the colony sends dozens more workers down that chemical highway. A station swarming with ants on day two is the single best sign you can get: the bait is palatable, the trail is intact, and the active ingredient is being carried underground. The surge usually peaks in the first few days and then falls away as the colony declines. Reaching for a spray at exactly this point kills the delivery drivers and ends the treatment.',
  },
  {
    question: 'How long do ant traps take to work?',
    answer: 'Expect a visible drop in trail activity within days to a couple of weeks for a typical pavement-ant or odorous-house-ant kitchen trail, with full colony collapse taking several weeks. The delay is deliberate and it is a feature: a bait that killed on contact would never get carried home, so the actives used are chosen to be slow. Larger, multi-queen or multi-nest infestations — pharaoh ants especially — can need months of continuous baiting because you have to reach several queens. Judge progress by whether the trail is thinning, not by whether an ant still exists.',
  },
  {
    question: 'Do ant bait stations need to be replaced?',
    answer: 'Yes, and dried-out bait is an easily missed reason a treatment stalls. Liquid bait evaporates and crusts over, and crusted bait is invisible to an ant — the station is still sitting there looking like a treatment while offering nothing. Check placements every few days during an active job and swap any station that is drained or dry; during a heavy recruitment surge that can happen quickly. Solid and gel formats last longer but also dry, harden, or collect dust. Once activity has fully stopped for several consecutive days, remove the stations and wash the trail route with hot soapy water so no pheromone map is left behind.',
  },
  {
    question: 'Are ant traps regulated in Canada?',
    answer: 'The bait inside them is. Any product making a pest-kill claim that is sold or used in Canada must generally be registered by Health Canada’s Pest Management Regulatory Agency and carry a PCP registration number on its label — so a bait station is a regulated pesticide product, while a plain glue board, being a device with no active ingredient, is not. That number is your one-glance test at the shelf or in a listing photo. It matters most for the imported gels and concentrates that dominate American ant advice: much of what reaches Canadian buyers through cross-border marketplace listings is US-market product labelled under US EPA registration, with no Canadian directions standing behind how you use it.',
  },
  {
    question: 'Can I use indoor ant traps outdoors?',
    answer: 'Only if the label says so. Indoor stations are not weatherproof — rain dilutes and floods liquid bait, sun degrades it, and a housing designed for a dry cupboard turns into litter in a flower bed. Outdoor bait stakes and weather-resistant stations exist precisely because the exposure problem is real. There is also a regulatory layer outdoors that does not apply in your kitchen: Ontario restricts pesticide use for cosmetic purposes on lawns and gardens, and other provinces have their own versions of those rules. The practical habit that keeps you compliant is to buy outdoor pesticide products off a physical shelf in your own province, because retailers stock to provincial rules, and then follow the label.',
  },
  {
    question: 'When are ant traps the wrong purchase?',
    answer: 'Three situations. Large black ants plus coarse sawdust-like frass and hollow-sounding wood means carpenter ants, which is a moisture-and-structure diagnosis with an insect attached — bait may be part of the job, but finding the leak is the job. Tiny pale ants in an apartment or condo means pharaoh ants, which bud through wall voids and wiring chases, so treating one unit relocates the problem and the building needs coordinated treatment. And stinging reddish ants in a damp GTA garden are likely European fire ants, which are genuinely hard to eradicate and usually a multi-season professional commitment. In all three, a pack of traps is money spent on the wrong problem.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'Best ant traps in Canada 2026: liquid bait stations beat glue boards because the colony carries the bait to the queen. Placement, pet safety, PCP rules.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug(SLUG)

export default function BestAntTrapsCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Independent Canadian buyer’s guide to ant traps: why enclosed bait stations beat glue traps and sprays, liquid vs solid vs gel bait, indoor and outdoor placement, pet and child safety, PMRA/PCP registration, and the three situations where buying traps is the wrong move.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Best Ant Traps Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Best Ant Traps Canada</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">Much of what is sold as an &ldquo;ant trap&rdquo; cannot end an ant problem, because it was never designed to reach the nest. Here is the difference between the two categories, which one to buy in Canada, and where to put it.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <AffiliateDisclosure />
      <StickyBuyBar tag={AMZ_TAG} name="Enclosed liquid ant bait stations" search="terro liquid ant baits" label="Best overall" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">The best ant trap in Canada is an enclosed liquid bait station &mdash; the sweet borax-type stations sold in multi-packs at Canadian hardware, grocery and big-box stores. They work because they are not really traps: foragers drink, walk home alive, and share the slow-acting bait with the brood and the queen by mouth-to-mouth feeding, which is the only consumer mechanism that reaches the part of the colony you cannot see. Glue-board &ldquo;ant traps&rdquo; catch foragers and change nothing. Place stations directly on the live trail, expect more ants for a few days, and do not spray or wipe the trail while the bait is working.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>Two products share the name: <strong>bait stations</strong> (kill the colony) and <strong>sticky traps</strong> (kill the ant stuck to them). Only one ends the problem.</li>
              <li>Liquid sugar bait first &mdash; pavement and odorous house ants are strong carbohydrate feeders. Add a solid protein bait if the sugar is ignored.</li>
              <li>Four to six placements beats one. Ants travel in narrow corridors; a station a metre off the trail is invisible.</li>
              <li>More ants on day two is the treatment working. Spraying that surge is a classic way these jobs fail.</li>
              <li>Enclosed child-resistant stations are the right format for homes with pets and kids &mdash; but place them where a dog physically cannot reach, not just where the housing looks tough.</li>
              <li>Check the pack for a Canadian <strong>PCP registration number</strong>. Imported gels from marketplace listings are frequently US-labelled product.</li>
              <li>Outdoor stakes are a different product with a provincial rules layer &mdash; buy them off a physical shelf in your own province.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito Pest Product Guides &middot; independent Canadian research</p>
          </div>
          <SpecialistDisclosure pest="ants" />
        </div>
      </section>

      <section className="bg-white px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <AwardRow tag={AMZ_TAG}
            heading="Our Pick — Best Ant Trap in Canada"
            awards={[
              {
                badge: 'Best Overall',
                name: 'Enclosed Liquid Ant Bait Stations (TERRO-style, domestic class)',
                why: 'The format that reaches the queen instead of the trail. Sweet liquid with a slow-acting borax-family active, held inside a child-resistant plastic housing you set directly on the marching line. Widely stocked by Canadian hardware, grocery and big-box retailers, and sold in multi-packs because coverage is what actually matters. Check the pack for a Canadian PCP registration number.',
                search: 'terro liquid ant baits',
                featured: true,
                pros: ['Reaches the colony by trophallaxis — the only outcome that counts', 'Liquid is the format pavement and odorous house ants prefer', 'Enclosed housing suits kitchens, homes with kids and pets', 'Among the least expensive products in the pest aisle'],
                cons: ['Ants get worse before better — the recruitment surge scares people into spraying', 'Bait dries out; stations need swapping every few weeks in use', 'Useless against carpenter ants nesting in damp structural wood'],
              },
            ]}
            whichToBuy={
              <>
                <strong>Ordinary trail of small dark ants across a kitchen or bathroom?</strong> Buy the <em>Best Overall</em> liquid stations, put four to six of them on the trail tonight, and buy nothing else. <strong>Ants walked past the sweet bait?</strong> Put a solid grease/protein station beside it and let the colony choose &mdash; a format we describe below but do not link. <strong>Same colony back every few weeks from under the patio slab?</strong> That is a source problem &mdash; outdoor bait stakes at the nest side are the answer, bought in your own province after you have checked the provincial rules. <strong>Trail disappearing into a cabinet seam or pipe collar?</strong> A gel syringe reaches it, bought somewhere you can read the Canadian label first. The liquid stations are the only thing we link &mdash; the panel directly below explains why the other three are shelf purchases. <strong>Large black ants and coarse sawdust?</strong> Stop shopping &mdash; that is a structural problem, see our <Link href="/blog/carpenter-ants-canada">carpenter ant guide</Link>. And for the full treatment sequence behind all of this, read <Link href="/blog/how-to-get-rid-of-ants-canada">how to get rid of ants in Canada</Link>.
              </>
            }
          />

          {/* Three product formats this page recommends but deliberately does NOT monetise.
              Each collides with the page's own advice — "buy outdoor pesticide products off a
              physical shelf in your own province" and "anything imported without a PCP number"
              is on the do-not-buy list — so a keyword-search affiliate link for any of them would
              contradict the guidance above it. The protein-disc CTA came out for the same reason:
              we could not name a solid/protein bait we were confident carries a Canadian PCP
              registration, and a search-results link cannot be label-checked from here.
              Editorial content kept in full; CTA removed. */}
          <div className="not-prose mt-8 rounded-2xl border border-amber-300 bg-amber-50 p-5">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-amber-700">Three formats we deliberately do not link</p>
            <h3 className="mt-1 text-xl font-extrabold text-brand-900">Protein discs, outdoor stakes and gel syringes &mdash; buy these off a Canadian shelf, not out of a search box</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-gray-700">
              All three are real products that solve real problems, and all three belong in this guide. None of them gets a buy button, because on each one this page&rsquo;s own advice points away from an online keyword search. It would be incoherent to tell you to check a Canadian label and then hand you a link to a results page full of listings whose labels you cannot check. Here is what each one does and where to get it.
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl border border-amber-200 bg-white p-4">
                <p className="text-[11px] font-extrabold uppercase tracking-wider text-brand-600">Grease and protein format</p>
                <p className="mt-1 text-lg font-extrabold leading-tight text-brand-900">Enclosed Solid / Protein Ant Bait Discs</p>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-600">Colonies swing between carbohydrate and protein depending on whether they are fuelling workers or rearing brood, and a colony in a protein phase will walk straight past a sugar station. Solid enclosed discs cover the other half of the menu, sit flat under a sink or behind a stove without mess, and do not evaporate the way liquid does.</p>
                <ul className="mt-3 space-y-1 text-sm text-gray-700 list-disc pl-5">
                  <li>Covers the grease and protein preference liquid bait misses</li>
                  <li>Long shelf life &mdash; does not dry out like liquid</li>
                  <li>Flat, enclosed and unobtrusive in a cupboard or behind an appliance</li>
                  <li>Ignored outright by a colony in a sugar-feeding phase</li>
                  <li>Slower uptake than liquid for most Canadian house ants</li>
                </ul>
                <p className="mt-3 rounded-lg bg-amber-100 px-3 py-2 text-sm font-semibold text-amber-900">Where to buy: a Canadian hardware, grocery or big-box shelf where you can turn the pack over. We link the liquid stations because we can point at a brand line stocked here under a Canadian label; for solid and protein discs we cannot, and pointing you at a search box while telling you to check for a PCP number we cannot see would be the same contradiction. Look for &ldquo;Reg. No. XXXXX P.C.P. Act&rdquo; on the box.</p>
              </div>
              <div className="rounded-xl border border-amber-200 bg-white p-4">
                <p className="text-[11px] font-extrabold uppercase tracking-wider text-brand-600">Outdoor format</p>
                <p className="mt-1 text-lg font-extrabold leading-tight text-brand-900">Weather-Resistant Outdoor Ant Bait Stakes</p>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-600">Purpose-built for the case indoor stations cannot handle: a colony nesting under a patio slab, driveway edge or garden bed that keeps re-supplying your kitchen. Stakes push into soil, shield the bait from rain and sun, and let foragers take it underground.</p>
                <ul className="mt-3 space-y-1 text-sm text-gray-700 list-disc pl-5">
                  <li>Treats the source nest rather than the indoor symptom</li>
                  <li>Weather-shielded &mdash; indoor stations flood or degrade outside</li>
                  <li>Pairs well with indoor stations during a heavy season</li>
                  <li>Needs re-siting after heavy rain or lawn work</li>
                  <li>Wrong tool entirely if the nest is inside the building envelope</li>
                </ul>
                <p className="mt-3 rounded-lg bg-amber-100 px-3 py-2 text-sm font-semibold text-amber-900">Where to buy: a hardware, garden or big-box store in your own province. Outdoor pesticide use on lawns and gardens is restricted in Ontario and in several other provinces, retailers stock to the rules where they trade, and the label in your hand is the legal instruction set.</p>
              </div>
              <div className="rounded-xl border border-amber-200 bg-white p-4">
                <p className="text-[11px] font-extrabold uppercase tracking-wider text-brand-600">Precision format</p>
                <p className="mt-1 text-lg font-extrabold leading-tight text-brand-900">Ant Gel Bait Syringe</p>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-600">Not a station at all, but the tool that finishes jobs stations cannot: a pinhead dab placed inside the cabinet seam, the hinge void, the gap where the water line enters the wall. It is the format to reach for when a trail vanishes into a crack.</p>
                <ul className="mt-3 space-y-1 text-sm text-gray-700 list-disc pl-5">
                  <li>Crack-and-crevice placement no plastic station can match</li>
                  <li>A very small amount covers a lot of ground</li>
                  <li>Useful follow-up when ants ignore an open station</li>
                  <li>Exposed gel is not child-resistant like an enclosed station</li>
                  <li>Easy to over-apply, which reduces uptake rather than increasing it</li>
                </ul>
                <p className="mt-3 rounded-lg bg-amber-100 px-3 py-2 text-sm font-semibold text-amber-900">Where to buy: anywhere you can read the actual pack before you pay. Gels marketed to Canadian buyers through online marketplaces are often US-market product labelled under US EPA registration &mdash; the exact thing this page&rsquo;s do-not-buy list warns against. Look for &ldquo;Reg. No. XXXXX P.C.P. Act&rdquo; on the unit itself.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-emerald-50 to-white border-b border-emerald-200 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Trap Types Compared &middot; Updated July 2026</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">Every Product Sold as an &ldquo;Ant Trap&rdquo;, Ranked Honestly</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            Search &ldquo;ant traps&rdquo; on any Canadian retail site and you get several different product categories in one results page, only some of which can end an infestation. Here is what each one actually does, with an availability check only where a purchase makes sense.
          </p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm">
            <table className="min-w-[560px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Product</th>
                  <th className="px-4 py-3 text-left">How it works</th>
                  <th className="px-4 py-3 text-left">Kills the colony?</th>
                  <th className="px-4 py-3 text-left">Verdict</th>
                  <th className="px-4 py-3 text-left">Availability</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Liquid bait station<br /><span className="font-normal text-xs text-gray-500">Enclosed, borax-type active</span></td>
                  <td className="px-4 py-3 text-gray-700">Foragers drink and survive the trip home; bait is shared with brood and queens by mouth-to-mouth feeding</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Yes</strong></td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Best consumer option</strong> &mdash; buy this first</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="terro liquid ant baits" block>Check price on Amazon.ca →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Solid / protein bait disc<br /><span className="font-normal text-xs text-gray-500">Enclosed, child-resistant</span></td>
                  <td className="px-4 py-3 text-gray-700">Same carry-it-home mechanism, aimed at colonies feeding on grease and protein rather than sugar</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Yes</strong></td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Essential backup</strong> &mdash; run alongside liquid</td>
                  <td className="px-4 py-3 text-xs text-gray-500">Buy where you can read the pack</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Outdoor bait stakes<br /><span className="font-normal text-xs text-gray-500">Weather-shielded</span></td>
                  <td className="px-4 py-3 text-gray-700">Pushed into soil near the nest or trail; rain- and sun-protected bait carried underground</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Yes</strong> &mdash; at the source</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">Check provincial rules</strong> before outdoor use</td>
                  <td className="px-4 py-3 text-xs text-gray-500">Buy in-province, off a shelf</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Gel bait syringe<br /><span className="font-normal text-xs text-gray-500">Crack-and-crevice format</span></td>
                  <td className="px-4 py-3 text-gray-700">Pinhead dabs placed inside seams, hinges and pipe collars where a station physically cannot sit</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Yes</strong></td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">Powerful, with a catch</strong> &mdash; verify a Canadian PCP number</td>
                  <td className="px-4 py-3 text-xs text-gray-500">Buy where you can read the pack</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Glue board / sticky trap<br /><span className="font-normal text-xs text-gray-500">No active ingredient</span></td>
                  <td className="px-4 py-3 text-gray-700">Catches the foragers that walk onto the adhesive surface</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-red-700">No</strong></td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-red-700">Skip for ants</strong> &mdash; the colony out-produces the board</td>
                  <td className="px-4 py-3 text-xs text-gray-400">Save your money</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Contact aerosol &amp; perimeter spray<br /><span className="font-normal text-xs text-gray-500">Sold beside the traps</span></td>
                  <td className="px-4 py-3 text-gray-700">Kills the ants it wets; leaves a repellent residue on every treated surface</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-red-700">No</strong> &mdash; and can cause budding</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-red-700">Avoid as a first move</strong> &mdash; it sabotages your bait</td>
                  <td className="px-4 py-3 text-xs text-gray-400">Skip these</td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Ultrasonic &ldquo;ant repeller&rdquo;<br /><span className="font-normal text-xs text-gray-500">Plug-in device</span></td>
                  <td className="px-4 py-3 text-gray-700">Claims high-frequency sound drives ants away</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-red-700">No</strong></td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-red-700">No credible evidence</strong> &mdash; ants navigate chemically</td>
                  <td className="px-4 py-3 text-xs text-gray-400">Skip these</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-5 rounded-xl bg-amber-50 border-l-4 border-amber-400 p-4">
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong className="text-amber-900">The one-glance Canadian test.</strong> Any ant product that claims to kill is a regulated pesticide here and should carry a <strong>PCP registration number</strong> on its label. A glue board has none because it has no active ingredient &mdash; which is also why it cannot do the job. If a listing shows an American label and no PCP number, close the tab; you can buy an equivalent registered product off a Canadian shelf instead.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Ant Traps in Canada — Key Facts</h2>
          <div className="rounded-xl border border-navy-100 overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Best format for most homes', 'Enclosed liquid bait station, placed on the live trail'],
                  ['Why it works', 'Trophallaxis — foragers share the slow-acting bait with brood and queens'],
                  ['What a glue board does', 'Catches foragers; the colony replaces them faster than the board fills'],
                  ['Placements for one kitchen trail', 'Four to six, not one — ants forage in narrow corridors'],
                  ['Expect', 'MORE ants for the first few days (recruitment) — that means it is working'],
                  ['Time to visible decline', 'Days to a couple of weeks; several weeks for full colony collapse'],
                  ['Common failure', 'Bait dried out and crusted over — replace stations during an active job'],
                  ['Another common failure', 'Wiping the trail, which erases the delivery route the bait depends on'],
                  ['If sugar bait is ignored', 'Offer a grease/protein station alongside and let the colony choose'],
                  ['Pet and child format', 'Enclosed child-resistant stations, placed out of physical reach anyway'],
                  ['Legal test in Canada', 'A PCP registration number on the label (PMRA-registered product)'],
                  ['Imported gels and concentrates', 'Frequently US-labelled — no Canadian directions behind the use'],
                  ['Outdoor products', 'Provincial cosmetic-pesticide rules apply — buy in-province, read the label'],
                  ['Do not buy', 'Glue boards for ants, ultrasonic repellers, insecticide ant chalk, foggers'],
                  ['Traps are the wrong purchase for', 'Carpenter ants, pharaoh ants in multi-unit buildings, European fire ants'],
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

          <h2>What Is the Best Ant Trap in Canada?</h2>
          <p>An enclosed liquid bait station &mdash; the small plastic multi-packs of sweet borax-type bait widely stocked by Canadian hardware, grocery and big-box retailers &mdash; is the best ant trap for an ordinary nuisance-ant trail in a Canadian home. It is also, strictly speaking, not a trap. Nothing gets caught. The station is a feeding platform, and the ants leave alive on purpose.</p>
          <p>That design choice is the entire reason it works. The ants marching across your counter are foragers, a small and constantly replaced fraction of a colony that lives somewhere you cannot see: under the patio slab, in the void behind the dishwasher, beneath the front step. Kill every visible ant tonight and the queen replaces them within days. A bait station inverts the problem by turning the foragers into unpaid couriers &mdash; they drink, walk home, and are tapped for food by nestmates, larvae and the queen through the mouth-to-mouth food sharing that entomologists call trophallaxis. Over the following days the active ingredient distributes itself through the colony, including to the individuals no consumer product can otherwise touch.</p>
          <p>Everything else marketed as an ant trap is a variation on catching the couriers, which is why so many people conclude that ant traps do not work. They bought the wrong category. If you take one thing from this page: <strong>buy the trap that feeds ants, not the one that catches them.</strong></p>

          <p className="not-prose text-sm text-gray-600 mb-1">Check current Canadian availability of the one format we link &mdash; the protein discs, the outdoor stakes and the gel are the in-store purchases described above:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="terro liquid ant baits">Liquid bait stations →</BuyLink>
          </div>

          <h2>&ldquo;Ant Trap&rdquo; Describes Two Opposite Products</h2>
          <p>The retail category is a mess, and the confusion costs Canadian homeowners entire summers. Two fundamentally different products share the shelf label.</p>
          <p><strong>Bait stations</strong> contain a food matrix mixed with a slow-acting insecticide. They are pesticides: in Canada they must be registered by Health Canada&rsquo;s Pest Management Regulatory Agency and carry a PCP registration number on the label. They are designed around delayed action &mdash; a bait that dropped ants on contact would never reach the nest &mdash; so they look ineffective for the first day or two and then quietly dismantle a colony.</p>
          <p><strong>Sticky traps and glue boards</strong> contain no active ingredient at all. They are devices, which is why they need no registration, and they work exactly as advertised: an ant walks on, an ant stays on. Against cockroaches a glue board is genuinely valuable, because it is diagnostic instrumentation that tells you where the population is and whether it is shrinking. Against ants it is neither control nor information. The colony out-produces the board without effort, and you already know where the trail is &mdash; it is the black line on your counter.</p>
          <p>A third category muddies things further: contact aerosols and perimeter sprays merchandised in the same aisle. They belong to the same failure mode as glue boards, only worse, because they leave a repellent residue that makes ants refuse any bait placed nearby.</p>

          <h2>Why Bait Beats Spraying (and Why Spraying Can Multiply the Problem)</h2>
          <p>Three things happen when a Canadian homeowner reaches for the aerosol first, and they compound.</p>
          <p><strong>It kills the couriers.</strong> Bait depends on foragers surviving long enough to walk home and share. A contact spray removes the delivery fleet you are about to depend on.</p>
          <p><strong>It poisons the ground the bait needs.</strong> Ants avoid surfaces carrying repellent pyrethroid residue, so a station placed on or near a previously sprayed counter, baseboard or door frame gets ignored. Spray for two weeks, switch to bait, conclude that bait does not work &mdash; the bait never got a fair test. If you have already sprayed, wash the area with soap and water, let it dry for a day, then bait.</p>
          <p><strong>It can split the colony.</strong> Repellent residue reads as a stress signal. Single-queen species mostly shift their trail. Multi-queen species &mdash; odorous house ants, pharaoh ants &mdash; respond by budding: queens and brood relocate to new sites and one nest becomes three or four scattered through the structure. The population has not gone down. It has been distributed, and it is now much harder to find.</p>
          <p>Licensed operators do use liquid products against ants, but the professional versions are typically <em>non-repellent</em> &mdash; ants cannot detect them, walk through the treated zone, and carry the active back to the nest exactly as they do with bait. That is a different class of product applied under a licence with a Canadian label behind it, and it is not what is sitting next to the barbecue supplies. The full sequence &mdash; identify, bait, wait, exclude &mdash; is laid out step by step in our companion guide, <Link href="/blog/how-to-get-rid-of-ants-canada">how to get rid of ants in Canada</Link>.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="terro liquid ant baits">Check liquid ant bait stations on Amazon.ca →</BuyLink>
          </div>

          <h2>Liquid, Solid or Gel: Choosing What Is Inside the Trap</h2>
          <p><strong>Liquid is the right default for Canadian house ants.</strong> Pavement ants and odorous house ants &mdash; two species that turn up on Ontario kitchen counters &mdash; are strong carbohydrate feeders. Liquid is easy to carry in a social stomach and easy to pass around, and an enclosed liquid station keeps the bait moist and away from small hands and paws. The borax-family actives used in Canadian domestic liquid baits are deliberately slow, because the whole design goal is that the forager gets home first.</p>
          <p><strong>Solid and protein discs cover the other half of the menu.</strong> Colonies shift their nutritional demand through the season: heavy on sugar when workers are fuelling themselves, heavier on protein and fat when there is brood to raise. A colony in a protein phase will march straight past a sweet station, and homeowners read that as &ldquo;the bait does not work.&rdquo; The standard approach is to offer both and let the ants vote &mdash; put a liquid station and a solid station a hand&rsquo;s width apart on the trail and see which draws traffic within a day. That one trick often explains bait that looked like it was being refused.</p>
          <p><strong>Gel is the precision instrument.</strong> A syringe places a pinhead dab exactly where ants travel and where no plastic housing can sit: the seam behind a cabinet hinge, the gap where the water line enters the wall, the crack at the base of a door frame. Two cautions. First, more is not better &mdash; over-applying gel reduces uptake and leaves a mess. Second, the Canadian regulatory catch: many gels sold to Canadian buyers through online marketplaces are US-market product labelled under US EPA registration, with no Canadian directions behind their use. We walk through that exact situation for the cockroach equivalent in our <Link href="/blog/advion-cockroach-gel-bait-canada">Advion gel Canada guide</Link>, and the reasoning transfers directly to ant gels. That caveat is also why this page describes the gel format but does not link one: buy it somewhere you can turn the pack over and find &ldquo;Reg. No. XXXXX P.C.P. Act&rdquo; before you pay.</p>

          <h2>Indoor Placement: Where Ant Traps Actually Go</h2>
          <p>Placement decides more outcomes than product choice does. Ants forage along fixed, narrow corridors, so a station set on the far side of the kitchen is a piece of plastic furniture.</p>
          <ul>
            <li><strong>Follow the trail before you place anything.</strong> Get down at counter level and track the line back to where it disappears into a gap. That entry point is your primary placement &mdash; and later, your primary caulking target.</li>
            <li><strong>Place beside the line, not on it.</strong> Set the station a couple of centimetres to the side so foragers meet it without you disturbing traffic.</li>
            <li><strong>Use more placements than feels reasonable.</strong> Four to six for a single kitchen trail: at the entry gap, mid-trail, under the sink, behind the stove, and in the nearest cupboard corner.</li>
            <li><strong>Offer both menus on night one.</strong> A liquid station and a solid station side by side tells you within 24 hours what this colony is feeding on.</li>
            <li><strong>Do not spray, dust or clean near placements.</strong> That includes essential-oil sprays, which are also repellent, and diatomaceous earth, which ants detour around. Dusts belong in dry hidden voids, well away from the bait route.</li>
            <li><strong>Leave the trail alone.</strong> Wiping it with vinegar or cleaner erases the pheromone map, scatters the foragers, and often produces a new route into the house that bypasses your bait entirely &mdash; one you cannot see, because it now runs behind the toe-kick.</li>
            <li><strong>Clean everything else aggressively.</strong> Crumbs, grease film on the stove hood, an unwashed pet bowl and a sticky recycling bin are competing offers. Your bait needs to be the most attractive thing in the room.</li>
            <li><strong>Refresh on a schedule.</strong> Check placements every few days and swap anything drained or crusted; during a heavy surge liquid stations empty fast.</li>
          </ul>

          <h2>Outdoor Traps and Stakes &mdash; and the Rules That Apply Outside</h2>
          <p>If the same trail reappears every few weeks, the nest is usually outside and the indoor stations are treating a symptom. Pavement ants nesting under a driveway, walkway or patio slab announce themselves with little volcano-shaped piles of excavated sand at the cracks; treating at that source is what ends the cycle.</p>
          <p>Outdoor bait stakes are the purpose-built product for this. They shield the bait from rain and sun, which indoor stations do not survive, and they sit at the nest side of the trail rather than at your kitchen end of it. Two practical notes: reposition after heavy rain or lawn work, and never assume an indoor station is fit for outdoor use unless its label says so.</p>
          <p>The bigger consideration outdoors is legal rather than mechanical. Ontario restricts the use and sale of pesticides for cosmetic purposes on lawns, gardens, parks and school grounds, with a lower-risk class exempted and specific carve-outs; several other provinces run their own versions of the same idea. That is exactly the terrain an outdoor ant product describes. The habit that keeps you compliant with almost no effort is to buy outdoor pesticide products off a physical shelf in your own province &mdash; retailers stock to provincial rules &mdash; and then follow the label, which is the legal instruction set. None of this touches the indoor half of the job: the cosmetic rules are about lawns and gardens, not your kitchen cupboard.</p>
          <p className="not-prose my-4 rounded-xl border-l-4 border-amber-400 bg-amber-50 p-4 text-sm leading-relaxed text-gray-800">
            <strong className="text-amber-900">Why there is no buy button in this section.</strong> We link the liquid bait stations on this page because we can point at a brand line stocked here under a Canadian label &mdash; and we do not link outdoor stakes, because the advice in the paragraph above is to buy that category off a shelf in your own province. Selling you an online search result for the one product we just told you to buy in person would make the advice worthless. Pick them up where you can read the label and where the retailer is stocking to your province&rsquo;s rules.
          </p>

          <h2>Pet and Child Safety: An Honest Assessment</h2>
          <p>This is the question that sends a lot of people to a glue board, and the honest answer is that the glue board is the worse choice on safety grounds too &mdash; it fails to solve the problem, so the ants and the products stay in the house longer.</p>
          <p>Enclosed, child-resistant bait stations are the format designed for occupied homes. The bait is held inside a plastic housing, there is no propellant, nothing to inhale, and no residue coating your counters. Compared with fogging a kitchen or spraying baseboards where a toddler crawls, a sealed station is a substantially more contained way to deliver a very small amount of active ingredient.</p>
          <p>&ldquo;Child-resistant&rdquo; is not &ldquo;dog-proof&rdquo;, though, and the sensible approach is to make reach the safeguard rather than the housing:</p>
          <ul>
            <li><strong>Place where the animal physically cannot go.</strong> Inside a closed cabinet, behind the fridge, at the back of the under-sink cupboard, on the counter backsplash rather than the floor. A determined dog will chew a plastic station, and the sweet syrup inside is precisely what makes it interesting.</li>
            <li><strong>Treat gel as an out-of-reach-only product.</strong> Exposed dabs are not child-resistant in any sense. They belong inside cracks, hinge voids and pipe collars &mdash; not along an open baseboard.</li>
            <li><strong>Count your stations in and out.</strong> Write down how many you placed and where, so nothing gets discovered months later behind an appliance by a curious toddler.</li>
            <li><strong>Read the Canadian label before placing.</strong> In Canada the label is the law: it states where the product may be used and what precautions apply, and following it is both the safest and the legally correct approach.</li>
            <li><strong>Have a plan, not a guess.</strong> If a pet chews into a station or a child handles bait, contact your veterinarian, a pet poison line, or your regional poison centre with the product name and label in hand rather than waiting to see what happens.</li>
          </ul>
          <p>One product to refuse outright on safety grounds: insecticidal <strong>ant chalk</strong>, the imported stick you draw lines with. It is not PMRA-registered, it has no legal Canadian label, and it is designed to look exactly like the chalk a child would put in their mouth. Regulators on both sides of the border have warned about it for years. There is no scenario in which it beats an ordinary enclosed bait station.</p>

          <h2>What Makes an Ant Trap Legal in Canada</h2>
          <p>Two layers of regulation apply, and knowing them makes you much harder to sell junk to.</p>
          <p><strong>Federal.</strong> Health Canada&rsquo;s PMRA registers the pesticides that may legally be sold or used in Canada, with narrow exemptions for a listed set of minimum-risk products, and a registered product carries a PCP registration number on its label. That number is your one-glance test on a shelf or in a listing photo. It is also why so much American ant advice fails Canadians: a large share of the products named in a US forum thread simply are not registered here, and the cross-border marketplace listings that appear to solve that are usually US-labelled stock. Glue boards sit outside this system entirely &mdash; no active ingredient, no registration, and no ability to end an infestation.</p>
          <p><strong>Provincial.</strong> Cosmetic-use rules narrow the outdoor selection further, as described above, and vary by province. Indoor baiting is unaffected.</p>
          <p>The practical upshot for a buyer is refreshingly simple. Buy indoor bait stations from a Canadian retailer, glance for the PCP number, and ignore every recommendation that requires importing something.</p>

          <h2>What Not to Buy</h2>
          <p>Being straight about this is more useful than another recommendation.</p>
          <p><strong>Glue boards and sticky traps for ants.</strong> They catch foragers and control nothing. Buy them for cockroach monitoring, where they earn their keep, and not for this.</p>
          <p><strong>Ultrasonic ant repellers.</strong> No credible evidence, and the premise does not match the animal &mdash; ants navigate by chemical trail and physical contact, not by hearing. The US Federal Trade Commission has taken action over unsupported claims in this device category. Our broader verdict is in <Link href="/blog/ultrasonic-pest-repellers-do-they-work">do ultrasonic pest repellers work?</Link></p>
          <p><strong>Total-release foggers.</strong> A fogger coats open surfaces &mdash; precisely where the colony is not &mdash; and leaves a repellent film across every spot you might otherwise have baited. Add the fire and inhalation hazards of propellant cans in a closed kitchen and there is no version of an ant problem a fogger improves.</p>
          <p><strong>Electronic or &ldquo;zapper&rdquo; ant traps.</strong> Same flaw as glue: even a device that kills every ant that enters it is killing couriers, not colonies.</p>
          <p><strong>Homemade borax-and-sugar recipes, mostly.</strong> The chemistry is real &mdash; that is roughly what a commercial liquid bait is &mdash; but the concentration is the entire trick. Mixed too strong, foragers die before they get home, converting a colony-killing bait into an expensive contact spray. Commercial baits solved that problem, are child-resistant, and are inexpensive. If you insist on homemade, err far weaker than the internet recipes suggest.</p>
          <p><strong>Anything imported without a PCP number.</strong> Including the gels and concentrates that American threads treat as the obvious answer.</p>
          <p><strong>And, honestly, a second product when the first is working.</strong> If a multi-pack of liquid stations has your trail thinning, you do not need the gel, the stakes, the dust, and the perimeter spray. Ant control is one of the few pest problems where the cheapest correct product is also the best one, and the upsell is genuinely unnecessary.</p>

          <h2>How Long Before Ant Traps Work?</h2>
          <p>Expect a visible drop in trail traffic within days to a couple of weeks for a typical kitchen trail, and several weeks for the colony to collapse fully. Pharaoh ants and large multi-nest infestations can take considerably longer, because you have to reach multiple queens through multiple nests.</p>
          <p>The first 48 hours will look like failure or worse. A scout that finds your station lays a recruitment pheromone, and within hours the colony floods the corridor &mdash; a bait station can look like a small black stain on day two. That is the strongest confirmation available to you: the bait is palatable, the trail is intact, and the active is moving underground. The temptation to spray at exactly this moment is enormous, and giving in is a common reason these treatments fail.</p>
          <p>When a job stalls, check these six things before you change products: the bait dried out, you sprayed nearby, you wiped the trail, competing food out-ranked the bait, there were too few placements, or the colony is feeding on the menu you did not offer. Every one of those is fixable in an evening. Once activity has stopped for several consecutive days, remove the stations, wash the trail route with hot soapy water so no chemical map remains, and spend the afternoon on exclusion &mdash; caulk on foundation cracks and utility penetrations, a door sweep on any exterior door with daylight under it. That same pass also blocks the autumn invaders, which is why we recommend it for <Link href="/blog/how-to-keep-spiders-out-of-your-house">keeping spiders out</Link> as well. For dry, hidden voids, a barely visible film of PCP-registered insecticidal diatomaceous earth is a durable supplement &mdash; the registered insecticidal grade, not the food-grade bag, which carries no Canadian pesticide label and no directions for this use &mdash; and it belongs well away from bait placements, since ants detour around visible dust. Technique and the Canadian registration detail are in our <Link href="/blog/diatomaceous-earth-canada-buyers-guide">diatomaceous earth buyer&rsquo;s guide</Link>.</p>

          <h2>When Buying Ant Traps Is the Wrong Move</h2>
          <p>Start with the honest half: <strong>a nuisance-ant trail in a Canadian kitchen is genuinely a DIY job.</strong> A multi-pack of liquid bait stations costs a fraction of a service call and does the same thing a technician would do for a pavement-ant trail. Paying someone to place the same bait is a poor trade, and any operator unwilling to say so is not one to hire.</p>
          <p>Three situations invert that arithmetic, and in each one a pack of traps is money spent on the wrong problem:</p>
          <ul>
            <li><strong>Carpenter ants with structural signs.</strong> Large black ants (roughly 6&ndash;13 mm) plus coarse, pencil-shaving-like frass and hollow-sounding wood is a moisture-intrusion diagnosis with an insect attached. Bait can be part of the program, but finding the leak and assessing the damaged wood is the actual job &mdash; often needing a contractor as well. Full playbook: <Link href="/blog/carpenter-ants-canada">carpenter ants in Canada</Link>.</li>
            <li><strong>Pharaoh ants in an apartment or condo.</strong> Tiny, pale amber, indoor-only ants that bud through wall voids and wiring chases. Treating one unit relocates the problem; the building needs coordinated baiting. In most provinces, including Ontario, pest control in rental housing is the landlord&rsquo;s responsibility &mdash; report it in writing with photos and a date, because a verbal word to the superintendent starts no clock.</li>
            <li><strong>European fire ants in the yard.</strong> Reddish, roughly 4&ndash;5 mm, and they sting repeatedly when a nest in damp soil or mulch is disturbed. They are established in pockets of the GTA, they are difficult to eradicate, and they are usually a multi-season professional commitment rather than a shopping problem.</li>
          </ul>
          <p>Add a fourth trigger that is less about the species than the situation: if you have baited correctly for several weeks and activity continues, or ants are appearing on an upper floor with no traceable trail, the nest is somewhere a homeowner inspection will not reach. Our <Link href="/pest-control-cost-canada">Canadian pest control cost guide</Link> covers what that work typically runs so you can sanity-check a quote &mdash; and be appropriately suspicious of anyone who proposes to fix nuisance ants by spraying your baseboards and leaving.</p>

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

          <h2>Related Ant &amp; Pest Guides</h2>
          <ul>
            <li><Link href="/blog/how-to-get-rid-of-ants-canada">How to Get Rid of Ants in Canada — The Full Bait-First Plan</Link></li>
            <li><Link href="/blog/carpenter-ants-canada">Carpenter Ants in Canada — Find the Nest, or You Are Just Killing Ants</Link></li>
            <li><Link href="/blog/advion-cockroach-gel-bait-canada">Advion Gel Bait in Canada — The PCP Registration Question</Link></li>
            <li><Link href="/blog/diatomaceous-earth-canada-buyers-guide">Diatomaceous Earth in Canada — Buyer&rsquo;s Guide and Application Technique</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-cockroaches-canada">How to Get Rid of Cockroaches in Canada — The Bait-First Plan</Link></li>
            <li><Link href="/blog/ultrasonic-pest-repellers-do-they-work">Do Ultrasonic Pest Repellers Work? The Honest Verdict</Link></li>
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
        heading="Ants Are Not Our Department — Mosquitoes and Ticks Are"
        subtext="BuzzSkito is a licensed GTA mosquito and tick control company serving 19 cities. If ants are the problem, bait them yourself with the plan above — it is cheaper than any service call. If it is mosquitoes or ticks making your yard unusable, that is what we do."
      />
    </>
  )
}
