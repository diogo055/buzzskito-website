import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import BuyLink from '@/components/BuyLink'
import AwardRow from '@/components/AwardRow'
import StickyBuyBar from '@/components/StickyBuyBar'
import TopBox from '@/components/TopBox'
import FreshnessStamp from '@/components/FreshnessStamp'
import AuthorByline from '@/components/AuthorByline'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import AdjacentPestCTA from '@/components/AdjacentPestCTA'
import { tagForSlug } from '@/lib/amazon-clusters'
import ReadNext from '@/components/ReadNext'
import NextUp from '@/components/NextUp'
import RelatedLinks from '@/components/RelatedLinks'
import QuickIdTable from '@/components/QuickIdTable'
import Photo from '@/components/Photo'

const SLUG = 'biogents-bg-mosquitaire-mosquito-trap-canada'
const DATE = '2026-08-22'
const UPDATED = '2026-10-28'
const TITLE = 'Biogents BG-Mosquitaire in Canada: CO2 vs Lure-Only, and What It Costs to Run'
// TITLE NOTE (Oct 28, 2026): was 'Biogents BG-Mosquitaire Trap in Canada'; top queries, 90 days to Oct 28 (all countries): biogents canada 11 at 5.8, biogents mosquito trap canada 10 at 8.1, "bg-home" mosquito trap study 6 at 8.8, biogents 3 at 7.0, mosquitaires 3 at 10.3, bg mosquitaire trap 2 at 6.0 (1 click). co2 mosquito trap stays with co2-mosquito-trap-canada, propane traps with propane-mosquito-trap-canada and best-professional-mosquito-trap-canada.
const META_TITLE = 'Biogents Mosquito Trap Canada: BG-Mosquitaire'

const FAQS = [
  {
    question: 'Is the Biogents BG-Mosquitaire worth it in Canada?',
    answer: 'For the right property, yes. The BG-Mosquitaire is the consumer version of the BG-Sentinel, the trap design mosquito researchers and public-health surveillance programs actually deploy, and it lands in the $300 to $600 range in Canada. It earns that on a property with chronic, all-season pressure — backing onto a ravine, a pond, a wetland, or a wooded lot line — where you will run it continuously from May to September and give it weeks to draw the local biting population down. It does not earn it if you want tonight fixed, if you only use the yard a few evenings a summer, or if the mosquitoes are being produced by standing water on your own property that you could empty for free. It is a population tool with a slow fuse, not a switch.',
  },
  {
    question: 'Do I need the CO2 version of the BG-Mosquitaire?',
    answer: 'Most GTA homeowners should start without it. The standard BG-Mosquitaire runs on mains power plus BG-Sweetscent, Biogents’ artificial skin-scent lure, and catches mosquitoes with no added CO2 at all; Biogents aims that set-up at tiger mosquitoes. The CO2 version adds a carbon-dioxide plume, which Biogents says broadens the catch to nearly every species, including those that home in on exhaled breath from a distance rather than on skin scent up close — Culex, the West Nile group, most obviously. That extra reach costs you a CO2 tank you source locally, plus refills; Biogents includes the regulator, tubing and nozzle. Our advice: buy the standard trap, run it properly for a full season, and add CO2 only if the property genuinely backs onto a wetland or ravine and the lure-only setup has plainly not been enough.',
  },
  {
    question: 'BG-Mosquitaire vs Mosquito Magnet — which is better?',
    answer: 'They are built for different lots. A propane trap like the Mosquito Magnet burns fuel to make a large CO2 plume and reaches across acreage, which is why it belongs on a rural or cottage property. The price of that reach is a mandatory 20 lb propane tank swapped roughly every three weeks through the season, plus attractant cartridges. The BG-Mosquitaire covers a smaller zone — think a suburban backyard rather than a field — but it plugs into a wall outlet and runs on a lure, so there is no tank to haul, nothing burning, and no mid-July fuel run. For a Mississauga or Oakville backyard, the electric trap is the more sensible machine. For a 1+ acre rural lot, propane wins on reach.',
  },
  {
    question: 'What does it cost to run a BG-Mosquitaire for an Ontario season?',
    answer: 'Very little compared with propane, which is the whole point of the design. Running lure-only, your season costs are a few dollars of electricity for a low-wattage fan running continuously from May through September, plus BG-Sweetscent lures — Biogents says each sachet lasts up to two months, so a May-to-September Ontario season takes about three — plus the odd replacement catch bag or gauze. That is a modest consumables bill measured in tens of dollars, not hundreds. A propane trap over the same five months means roughly six tank refills plus cartridges every three weeks, which is a several-hundred-dollar season. If you run the CO2 version, add cylinder refills and you land somewhere in between.',
  },
  {
    question: 'Where should I put a BG-Mosquitaire in my yard?',
    answer: 'Between the mosquitoes and you, never beside you. The trap is an attractant, so siting it next to the patio pulls host-seeking females toward the exact area you are trying to protect. Place it on the side of the property the mosquitoes are coming from — the ravine edge, the fence line by the neighbour\'s pond, the shaded corner of the garden — in shade, out of direct wind, low to the ground rather than up on a deck rail, and near vegetation where mosquitoes rest during the day. Then leave it there. Moving a trap around the yard every week resets the process; the effect comes from continuous operation in one place over weeks.',
  },
  {
    question: 'How long does the BG-Mosquitaire take to work?',
    answer: 'Weeks, not days, and being told otherwise is how people end up disappointed. What the trap does is remove host-seeking and egg-laying females from the local population one at a time, continuously. The result compounds — each female removed is also the eggs she was going to lay — but it is a gradual draw-down, not a knockdown. Expect to notice a difference across two to six weeks of uninterrupted running, and expect that difference to be largest late in the season if you started in May. If you need the yard usable this Saturday for a party, a trap is the wrong tool and a barrier treatment is the right one.',
  },
  {
    question: 'Does the BG-Mosquitaire catch ticks?',
    answer: 'No. Ticks do not fly, so a suction trap never intercepts them — they quest from grass and low vegetation and latch onto a host that brushes past. No mosquito trap of any kind, electric, propane or UV, reduces the tick load on a property. Tick control is a ground-level job: keep the grass short, clear leaf litter along fence lines and the lawn-to-woods edge, and treat those transition zones. BuzzSkito runs a dedicated tick program at $597 per season standalone, or $497 per season bundled with any mosquito plan, at five sprays across the season.',
  },
  {
    question: 'Where can I buy Biogents traps in Canada?',
    answer: 'Check the registration first: Health Canada’s pesticide registry lists no Biogents trap or lure (searched October 28, 2026), and devices sold to attract or destroy flying insects come under the Pest Control Products Act. Amazon.ca is the most reliable Canadian channel for the Biogents line — the BG-Mosquitaire and its CO2 variant, BG-Sweetscent lures, catch bags and gauze, and the passive BG-GAT. Biogents also sells direct and through specialty pest-supply distributors. Canadian Tire, Home Depot Canada, Rona and Costco stock propane traps, UV zappers and cheap combination units seasonally rather than research-grade Biogents equipment, so if the BG design is specifically what you want, order it online. Buy a spare lure at the same time as the trap so you are not caught without an attractant in the middle of July.',
  },
  {
    question: 'Is the Biogents BG-Mosquitaire registered in Canada?',
    answer: 'No Biogents product turns up in Health Canada’s pesticide registry. We searched it on October 28, 2026, by product name, by registrant and in the label text, and found no BG-Mosquitaire, BG-Sweetscent or other Biogents trap or lure. That matters because Schedule 1 of the Pest Control Products Regulations keeps devices sold to attract or destroy flying insects under the Pest Control Products Act, which bars using an unregistered pest control product, and Health Canada says to buy only pesticides registered for use in Canada, including online. Registered mosquito traps do exist, such as the propane Mosquito Magnet Patriot Plus (Reg. No. 32375).',
  },
  {
    question: 'How long does a BG-Sweetscent lure last?',
    answer: 'Biogents says each BG-Sweetscent sachet lasts up to two months, so a May-to-September season in Ontario takes about three, which is why Biogents sells a three-sachet Season Pack. The sachet is the BG-Mosquitaire’s skin-scent lure, and one of Biogents’ tips for a trap that is catching little is to make sure the Sweetscent is fresh. Adding CO2 does not replace the lure: the BG-Booster CO2 kit is added to the trap alongside it.',
  },
  {
    question: 'Will a BG-Mosquitaire work on Canadian mosquitoes?',
    answer: 'Partly, and less than the marketing suggests. Biogents aims the lure-only trap at tiger mosquitoes and says adding CO2 broadens the catch to nearly every species, while the common GTA biters described on this page are floodwater Aedes vexans and the Culex house mosquitoes that carry West Nile virus. The “up to 87% fewer bites” figure Biogents quotes comes from a study of BG-Sentinel traps against the Asian tiger mosquito in Italy, not from Canada. Health Canada also lists odour-baited mosquito traps among products that do not protect well against bites, so keep a registered repellent for evenings outside.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'Biogents BG-Mosquitaire in Canada: lure-only vs CO2, the BG-Sweetscent lure, siting and running costs, and why no Biogents trap is on Canada’s register.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug(SLUG)

export default function BiogentsBgMosquitaireCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'A GTA mosquito-control operator on the Biogents BG-Mosquitaire in Canada: how the research-grade design works, CO2 versus lure-only, season running costs against a propane trap, siting rules, and when a cheaper option is the better buy.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Biogents BG-Mosquitaire Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Biogents BG-Mosquitaire Canada</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">The BG-Mosquitaire is Biogents&rsquo; plug-in garden trap: a fan on a 5-watt power supply sends air upward like the warmth off a body while a BG-Sweetscent skin-scent lure (up to two months per sachet) draws mosquitoes in, and it suits a no-spray buyer with an outdoor outlet and weeks of patience. Biogents aims the lure-only version at tiger mosquitoes and says adding CO&#8322; broadens the catch to nearly every species. Before you buy it for a Canadian yard, know that Health Canada&rsquo;s pesticide registry lists no Biogents trap or lure, while propane traps such as the Mosquito Magnet Patriot Plus are registered devices here.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <AffiliateDisclosure />
      <StickyBuyBar tag={AMZ_TAG} name="Biogents BG-Mosquitaire mosquito trap" search="biogents bg-mosquitaire mosquito trap" label="The version most people should buy" />
      <TopBox tag={AMZ_TAG} name="Biogents BG-Mosquitaire mosquito trap" search="biogents bg-mosquitaire mosquito trap" label="The version most people should buy" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">In Canada, buy the <strong>standard BG-Mosquitaire</strong>, not the CO2 version, if you buy one. It runs on a wall outlet (a 5-watt power supply, per Biogents) and the BG-Sweetscent skin-scent lure, needs no cylinder or propane tank, and Biogents says it uses the same patented capture technology as all its traps. Expect the <strong>$300&ndash;$600 range</strong> for the trap and a modest consumables bill for a May&ndash;September Ontario season. Add CO2 only if the property backs onto a ravine, pond or wetland and lure-only has already proven not to be enough.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>Lure-only is the default. Biogents aims it at tiger mosquitoes and says CO2 broadens the catch to nearly every species, breath-seeking <em>Culex</em> included; you supply the CO2 tank, and Biogents includes the regulator.</li>
              <li>Running cost is the real advantage over propane: no 20&nbsp;lb tank swapped every three weeks, no cartridges on the same clock.</li>
              <li>Site it <strong>between the mosquitoes and your patio</strong> &mdash; shaded, low, out of wind, near vegetation. Never beside the seating area.</li>
              <li>It works over <strong>weeks, not days</strong>. Run it continuously from May; do not move it around the yard.</li>
              <li>It catches <strong>no ticks</strong>. Nothing that flies to a trap explains a tick problem.</li>
              <li>Bring it indoors for the winter. It is a multi-season machine only if you store it like one.</li>
              <li>Health Canada&rsquo;s pesticide registry lists <strong>no Biogents trap or lure</strong> (searched October 28, 2026), and Health Canada lists odour-baited mosquito traps among products that do not protect well against bites.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito, GTA mosquito &amp; tick control &middot; 150 five-star Google reviews</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <AwardRow tag={AMZ_TAG}
            heading="Our Picks — Biogents Traps &amp; Consumables in Canada"
            awards={[
              {
                badge: 'Best Overall',
                name: 'Biogents BG-Mosquitaire (lure-only)',
                why: 'The version most Canadian homeowners should actually buy. Mains power, a fan, the BG-Lure, and a catch bag — no cylinder, no tank, no combustion. Same airflow design as the BG-Sentinel research trap, in a housing meant to live in a garden rather than a field study.',
                search: 'biogents bg-mosquitaire mosquito trap',
                score: 9.1,
                featured: true,
                pros: ['No propane tank or CO2 cylinder', 'Research-grade design lineage', 'Very low season running cost'],
                cons: ['Needs a continuous outdoor outlet', 'Works over weeks, not overnight'],
              },
              {
                badge: 'Best for Heavy Pressure',
                name: 'Biogents BG-Mosquitaire CO2',
                why: 'The same trap with a carbon-dioxide plume added, which extends its pull against species that home in on exhaled breath rather than skin scent. Worth it on a property that genuinely backs onto a ravine, pond or wetland — and only after lure-only has proven insufficient.',
                search: 'biogents bg-mosquitaire co2 mosquito trap',
                score: 8.5,
                pros: ['Greater reach against Culex and similar', 'Still no propane, no flame'],
                cons: ['Needs a cylinder plus a regulator', 'Ongoing refill cost and a tank to store'],
              },
              {
                badge: 'Best Running Cost',
                name: 'BG-Lure Cartridge Multipack',
                why: 'The consumable that keeps the trap honest. Biogents rates a lure for months rather than weeks, so a multipack covers an Ontario season with a spare. Buying one with the trap is the single best thing you can do to avoid a dead trap in the middle of July.',
                search: 'biogents bg-lure replacement cartridge',
                score: 8.9,
                pros: ['One season, one or two cartridges', 'Scent lure, no insecticide in the trap'],
                cons: ['Store sealed and cool or it degrades early'],
              },
              {
                badge: 'Best Add-On Lure',
                name: 'Biogents BG-Sweetscent',
                why: 'A complementary attractant designed to be used alongside the BG-Lure rather than instead of it. Short-lived by design, so treat it as a boost during peak weeks — June and July in the GTA — rather than a season-long consumable.',
                search: 'biogents bg-sweetscent lure',
                score: 7.9,
                pros: ['Stacks with the standard lure', 'Cheap way to lift peak-season catch'],
                cons: ['Shorter life than the BG-Lure', 'Not a substitute for the main lure'],
              },
              {
                badge: 'Best for Cottages',
                name: 'Biogents BG-GAT (no power required)',
                why: 'The passive trap that targets pregnant females looking for somewhere to lay. No electricity, no CO2, no fan. Deployed in clusters of three or more it is the right Biogents product for a dock, a cottage, an off-grid site, or anywhere running a mains cord is impractical.',
                search: 'biogents bg-gat gravid aedes trap',
                score: 8.3,
                pros: ['Zero power, zero cord', 'Kills egg-laying females — cancels the next generation'],
                cons: ['Needs several units to matter', 'Targets container-breeding Aedes specifically'],
              },
              {
                badge: 'Best Indoors',
                name: 'Biogents BG-Home',
                why: 'The indoor sibling, for the mosquitoes that get inside the house rather than the ones in the yard. Different job, same lure family. Relevant if your actual complaint is being bitten in the living room at 11 p.m. rather than on the deck at dusk.',
                search: 'biogents bg-home indoor mosquito trap',
                score: 7.6,
                pros: ['Quiet enough for a living space', 'Uses the same lure ecosystem'],
                cons: ['Solves an indoor problem, not a yard problem'],
              },
            ]}
            whichToBuy={
              <>
                <strong>Suburban GTA backyard with real, all-season pressure?</strong> The <em>Best Overall</em> lure-only BG-Mosquitaire, plus a <em>Best Running Cost</em> lure multipack in the same order. <strong>Backing onto a ravine, pond or wetland, and lure-only was not enough last year?</strong> Step up to <em>Best for Heavy Pressure</em> and budget for the cylinder and regulator too. <strong>Cottage, dock, or nowhere to plug in?</strong> A cluster of <em>Best for Cottages</em> BG-GATs, not a powered trap. <strong>Getting bitten indoors?</strong> That is the <em>Best Indoors</em> BG-Home, a different problem entirely. And if what you actually need is the yard usable <em>this weekend</em>, no trap does that &mdash; that is what <Link href="/mosquito-control">professional barrier spray</Link> is for.
              </>
            }
          />
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">BG-Mosquitaire vs the Alternatives — Canada 2026</h2>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm">
            <table className="w-full min-w-[760px] text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Option</th>
                  <th className="px-4 py-3 text-left">How it attracts</th>
                  <th className="px-4 py-3 text-left">What you feed it</th>
                  <th className="px-4 py-3 text-left">Best for</th>
                  <th className="px-4 py-3 text-left">Buy</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { opt: 'BG-Mosquitaire (lure-only)', how: 'Skin-scent lure + convection-style airflow', feed: 'BG-Lure cartridges, wall power', best: 'Suburban yards with chronic pressure', search: 'biogents bg-mosquitaire mosquito trap' },
                  { opt: 'BG-Mosquitaire CO2', how: 'Skin-scent lure + CO2 plume', feed: 'Lure, CO2 cylinder refills, wall power', best: 'Ravine, pond and wetland-adjacent lots', search: 'biogents bg-mosquitaire co2 mosquito trap' },
                  { opt: 'CO2 regulator / pressure reducer', how: 'Meters the cylinder into the trap', feed: 'One-time purchase', best: 'Required for the CO2 version', search: 'co2 regulator pressure reducer for mosquito trap' },
                  { opt: 'Refillable CO2 cylinder', how: 'Supplies the CO2', feed: 'Refills through the season', best: 'CO2 setups only', search: 'refillable co2 cylinder tank' },
                  { opt: 'Replacement catch bag', how: 'Holds the catch', feed: 'Replace when worn', best: 'Every multi-season owner', search: 'biogents replacement catch bag mosquitaire' },
                  { opt: 'Replacement gauze', how: 'Covers the catch bag opening', feed: 'Consumable', best: 'Keeping the trap serviceable', search: 'biogents replacement gauze mosquito trap' },
                  { opt: 'Outdoor extension cord (12-gauge)', how: 'Gets mains power to the siting spot', feed: 'One-time purchase', best: 'Almost every real install', search: 'outdoor extension cord 12 gauge heavy duty' },
                  { opt: 'Weatherproof outdoor cord cover', how: 'Keeps the connection dry', feed: 'One-time purchase', best: 'Ontario rain, all season', search: 'weatherproof outdoor extension cord cover box' },
                  { opt: 'Propane trap (Mosquito Magnet type)', how: 'Burns propane for a large CO2 plume', feed: '20 lb tank roughly every 3 weeks + cartridges', best: 'Rural acreage and cottage lots', search: 'mosquito magnet propane mosquito trap' },
                ].map(({ opt, how, feed, best, search }) => (
                  <tr key={opt} className="border-b border-navy-50 last:border-0">
                    <td className="px-4 py-3 font-bold text-brand-800">{opt}</td>
                    <td className="px-4 py-3 text-gray-700">{how}</td>
                    <td className="px-4 py-3 text-gray-700">{feed}</td>
                    <td className="px-4 py-3 text-xs text-gray-600">{best}</td>
                    <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search={search} block>Check price on Amazon.ca &rarr;</BuyLink></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Biogents equipment sits at the top of the consumer trap market &mdash; generally the $300&ndash;$600 range in Canada for the trap itself. Use the links for what is actually listed on amazon.ca today rather than budgeting from a figure quoted last season.
          </p>

          <QuickIdTable
            title="BG-Mosquitaire: What Biogents and Health Canada Say"
            head={['Question', 'What the record shows']}
            rows={[
              ['Lure', 'BG-Sweetscent, a patented lure that mimics human skin scent; Biogents says each sachet lasts up to two months'],
              ['Target species, lure only', 'Biogents: “biting tiger mosquitoes” (its EU shop names the Asian tiger and yellow fever mosquitoes)'],
              ['With CO₂ added', 'Biogents says CO₂ broadens the catch to nearly every species and can raise the catch rate by up to 400%; you add the CO₂ tank, Biogents includes the regulator, tubing and nozzle'],
              ['Coverage', 'Up to 300 m² without CO₂ and up to 700 m² with it (Biogents EU shop)'],
              ['Power', 'A 5-watt outdoor power supply and a 33 ft extension cord come in the box; the fan runs on 12 V'],
              ['Siting', 'At least 15 ft from people; shady, humid and out of the wind; near where mosquitoes rest and breed'],
              ['Running it', 'Plugged in 24/7, unplugged in a thunderstorm; Biogents says it needs about a week to start working effectively'],
              ['The “87% fewer bites” claim', 'Biogents cites Englbrecht et al. (2015), a study of BG-Sentinel traps against the Asian tiger mosquito in Italy'],
              ['Canadian registration', 'None found: no Biogents trap or lure in Health Canada’s registry (October 28, 2026); devices sold to attract or destroy flying insects are prescribed devices'],
              ['Health Canada on traps', 'Odour-baited mosquito traps are listed among products that do not protect well against biting insects'],
            ]}
            caption={<>From Biogents&rsquo; <a href="https://us-shop.biogents.com/products/bg-mosquitaire" target="_blank" rel="noopener noreferrer" className="underline">BG-Mosquitaire page</a> and <a href="https://us-shop.biogents.com/pages/faqs" target="_blank" rel="noopener noreferrer" className="underline">FAQs</a> (US shop), its <a href="https://eu-shop.biogents.com/en/mosquito-traps/tiger-mosquito-trap-bg-mosquitaire-outdoors" target="_blank" rel="noopener noreferrer" className="underline">EU shop page</a>, Health Canada&rsquo;s <a href="https://pest-control.canada.ca/pesticide-registry/en/product-search.html" target="_blank" rel="noopener noreferrer" className="underline">pesticide registry</a> and <a href="https://www.canada.ca/en/health-canada/services/about-pesticides/insect-repellents.html" target="_blank" rel="noopener noreferrer" className="underline">Personal insect repellents</a> page, and <a href="https://laws-lois.justice.gc.ca/eng/regulations/SOR-2006-124/page-10.html" target="_blank" rel="noopener noreferrer" className="underline">Schedule 1</a> of the Pest Control Products Regulations, all checked October 28, 2026. The species, coverage and catch figures are the maker&rsquo;s claims.</>}
          />

          <h2 className="text-xl font-extrabold text-brand-900 mt-8 mb-4">Which Trap, If Any, for Your Situation?</h2>
          <ul className="space-y-2 text-sm text-gray-700 list-disc pl-5">
            <li><strong>You want a trap with a Canadian registration number:</strong> the registered outdoor mosquito traps are propane models: Mosquito Magnet Patriot Plus (Reg. No. 32375) and Executive (29944), SkeeterVac SV-15 (28452) and SV-3100C (31703), and the MK12 Guardian (28460).</li>
            <li><strong>Daytime biters around planters and containers:</strong> that is the tiger-mosquito pattern Biogents designs the lure-only set-up for, but tip out the containers first.</li>
            <li><strong>Dusk biters coming from a ravine, pond or wetland:</strong> Biogents says CO&#8322; broadens the catch, so lure-only is the weaker choice there.</li>
            <li><strong>Nowhere to plug in:</strong> the BG-Mosquitaire needs mains power for its 5-watt supply.</li>
            <li><strong>The yard has to work this weekend:</strong> no trap does that; a barrier treatment goes onto the foliage on the day of the visit.</li>
            <li><strong>Ticks:</strong> no mosquito trap catches them.</li>
          </ul>
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />
          <p className="not-prose text-sm text-gray-600 mb-1">The two orders that matter &mdash; the trap, and the lure you will need before August:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="biogents bg-mosquitaire mosquito trap">Check the BG-Mosquitaire on Amazon.ca &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="biogents bg-lure replacement cartridge">Check BG-Lure cartridges &rarr;</BuyLink>
          </div>

          <h2>What the BG-Mosquitaire Actually Is</h2>
          <p>Biogents is a German company whose BG-Sentinel trap became the standard surveillance tool for monitoring <em>Aedes</em> and <em>Culex</em> populations &mdash; the thing public-health programs and academic entomologists deploy when they need to know what is flying. The BG-Mosquitaire is Biogents&rsquo; garden trap: Biogents says it uses the same patented capture technology as all its traps, here with the BG-Sweetscent skin-scent lure, in a housing meant to sit in a garden bed rather than a field study.</p>
          <p>Mechanically it is unglamorous, which is the point. A quiet fan draws air through the trap and pushes a plume upward in a pattern that imitates the convection currents rising off a warm human body. The BG-Sweetscent lure adds the chemical half of the signal &mdash; an artificial imitation of human skin scent. A host-seeking female flies in along that plume, gets pulled through the funnel by the suction, and ends up in a catch bag she cannot leave. There is no electrocution grid, no chemical, and nothing applied to the yard.</p>
          <p>That last part matters more than it sounds: no residue lands on your grass or your patio furniture. It is the no-spray end of mosquito control, which is exactly why a certain kind of homeowner is willing to spend $400 on one. It is not outside the rules, though. Schedule 1 of the Pest Control Products Regulations keeps devices sold to attract or destroy flying insects under the Pest Control Products Act, and Health Canada&rsquo;s pesticide registry lists no Biogents trap or lure (searched October 28, 2026).</p>
          <NextUp path="/blog/biogents-bg-mosquitaire-mosquito-trap-canada" />
          <p>If you are still at the category stage &mdash; deciding whether a CO2 trap of any kind is the right approach &mdash; start with our overview of <Link href="/blog/co2-mosquito-trap-canada">CO2 mosquito traps in Canada</Link>. This page assumes you have already landed on Biogents and are choosing between its versions.</p>

          <h2>CO2 or Lure-Only? The Decision That Costs the Most Money</h2>
          <p>Biogents sells the BG-Mosquitaire two ways, and the price gap between them is not trivial once you count the cylinder and the regulator you will also have to buy.</p>
          <p><strong>The standard trap runs on the lure alone.</strong> No cylinder, no tank, no combustion &mdash; you plug it in, seat a BG-Sweetscent sachet, and it works. Skin scent is a short-range, high-specificity signal: it is what a mosquito follows over the last stretch, and it is particularly effective on the container-breeding <em>Aedes</em> that make a suburban backyard miserable during the day. Biogents aims the lure-only trap at one of them, the tiger mosquito.</p>
          <Photo id="aedes-albopictus-biting-leg" alt="Asian tiger mosquito on a person's leg" caption="An Asian tiger mosquito, Aedes albopictus, on the photographer’s leg, which the observer says it bit (Savannah, Georgia). It is the daytime, container-breeding species Biogents aims the lure-only BG-Mosquitaire at." />
          <p><strong>The CO2 version adds a carbon-dioxide plume</strong> fed from a cylinder through a pressure regulator. CO2 is the long-range signal &mdash; it is how a mosquito notices there is a mammal in the vicinity at all, before scent ever comes into it. Adding it extends the trap&rsquo;s reach and helps disproportionately against species that hunt by breath more than by skin, <em>Culex pipiens</em> being the obvious Ontario example, and the one that matters for <Link href="/blog/west-nile-virus-mosquito-risk-ontario">West Nile virus risk</Link>.</p>
          <Photo id="culex-pipiens" alt="Northern house mosquito, Culex pipiens, photographed in Ontario" caption="A northern house mosquito, Culex pipiens, photographed in Ontario, Canada. Biogents says adding CO₂ broadens the catch to nearly every species, not just the tiger mosquitoes the lure-only trap is aimed at." />
          <p>So which do you buy? Our position, based on what actually happens in GTA backyards: <strong>start lure-only.</strong> A standard suburban lot with a fence line and some shrubs is a small enough area that the extra reach buys less than the extra hardware costs, and every CO2 setup adds a cylinder to store, a regulator to fit, and refills to remember. Move up to the CO2 version if your property genuinely backs onto a ravine, a stormwater pond, a creek or a wetland &mdash; a source big enough that you are fighting an incoming population rather than a resident one &mdash; and preferably after a season of lure-only has shown you it is not enough.</p>
          <div className="not-prose my-4 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="biogents bg-mosquitaire co2 mosquito trap">Check the CO2 version &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="co2 regulator pressure reducer for mosquito trap">Check CO2 regulators &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="refillable co2 cylinder tank">Check refillable cylinders &rarr;</BuyLink>
          </div>

          <h2>Running Cost: This Is Where It Beats Propane</h2>
          <p>The strongest argument for a Biogents trap in Canada is not catch performance, it is the feeding schedule. Compare the two across a single May-to-September Ontario season:</p>
          <ul>
            <li><strong>BG-Mosquitaire, lure-only.</strong> A low-wattage fan running continuously for about five months, which is a few dollars of electricity. About three BG-Sweetscent sachets, since Biogents says each lasts up to two months. An occasional replacement catch bag or gauze. That is a consumables bill in the tens of dollars.</li>
            <li><strong>Propane trap.</strong> A 20 lb tank that needs swapping roughly every three weeks &mdash; call it six refills across a season &mdash; plus attractant cartridges on a similar clock. That is a several-hundred-dollar season, every season, and it is six trips to exchange a tank during the months you are least inclined to run errands.</li>
            <li><strong>BG-Mosquitaire CO2.</strong> Somewhere in between: the lure cost plus cylinder refills, with no combustion and no 20 lb tank to lift.</li>
          </ul>
          <p>Amortised over three or four seasons, the electric trap&rsquo;s higher purchase price is repaid by the propane trap&rsquo;s fuel bill. That is the honest financial case, and it is the reason we point suburban clients at Biogents even though a <Link href="/blog/mosquito-magnet-canada">Mosquito Magnet</Link> covers more ground. Where propane still wins is reach: on a rural acreage or a cottage lot, no lure-only electric trap covers what a <Link href="/blog/propane-mosquito-trap-canada">propane trap</Link> does, and that is worth the tank swaps.</p>

          <h2>Siting: The Part Everyone Gets Wrong</h2>
          <p>A trap is an attractant. Put it beside the patio and you have installed a device whose job is to pull biting females toward the exact chairs you sit in. We see this constantly, and it is the single most common reason a $400 trap gets called useless.</p>
          <p>Six rules that decide whether the machine works:</p>
          <ul>
            <li><strong>Put it between the mosquitoes and you.</strong> Identify the source direction &mdash; the ravine edge, the wooded lot line, the neighbour&rsquo;s pond, the drainage swale &mdash; and site the trap on that side of the yard, well away from the seating area.</li>
            <li><strong>Shade, not sun.</strong> Mosquitoes rest in shaded, humid vegetation during the day. A trap baking in the middle of a sunny lawn is in the wrong microclimate entirely.</li>
            <li><strong>Low, not high.</strong> These are low-flying insects. Ground level or just above it, not up on a deck rail.</li>
            <li><strong>Out of the wind.</strong> A steady breeze shreds the plume the trap depends on. Sheltered corners work; exposed open ground does not.</li>
            <li><strong>Near vegetation, not in the open.</strong> Beside a shrub line, a hedge, or the treed edge of the property.</li>
            <li><strong>Then leave it alone.</strong> Continuous operation in one location for weeks is the mechanism. Moving it around the yard chasing results resets the clock every time.</li>
          </ul>
          <Photo id="mosquito-on-jeans" alt="Woodland pool mosquito resting on blue denim jeans" caption="A woodland pool mosquito, Aedes canadensis, on blue denim jeans (Blendon Woods Metro Park, Columbus, Ohio). Mosquitoes rest in shaded, humid vegetation by day, which is why the trap belongs on the shaded side of the yard they come from." />
          <p>One practical Canadian footnote: you will need power out there. Most people discover at install time that the nearest exterior outlet is thirty or forty feet from the correct siting spot. Buy a proper heavy-gauge outdoor extension cord rather than running an indoor cord out a window, and cover the connection &mdash; it will sit through an Ontario summer of thunderstorms.</p>
          <div className="not-prose my-4 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="outdoor extension cord 12 gauge heavy duty">Check outdoor extension cords &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="weatherproof outdoor extension cord cover box">Check weatherproof cord covers &rarr;</BuyLink>
          </div>

          <RelatedLinks path="/blog/biogents-bg-mosquitaire-mosquito-trap-canada" />
          <h2>The Mistake Most Canadian Buyers Make</h2>
          <p>They buy it in mid-July, after three bad weekends in a row, and expect the yard to be different by Saturday.</p>
          <p>A trap removes host-seeking and egg-laying females one at a time, continuously. The effect compounds &mdash; every gravid female caught is also the batch of eggs she was about to lay &mdash; but it is a draw-down curve, not a knockdown. Realistically you notice a difference across two to six weeks of uninterrupted running, and the benefit is largest late in the season if you started early. A trap bought on July 15th and judged on July 20th will be judged as a failure regardless of how good it is.</p>
          <p>The fix is a calendar one: put it out in early May, before the first generation is established, and run it straight through to September. That is also why the lure multipack is a smart same-cart purchase &mdash; the trap that sits idle for two weeks in August because nobody ordered a cartridge loses more ground than the cartridge costs.</p>

          <h2>When Something Cheaper Is the Right Answer</h2>
          <p>We would rather tell you not to buy this than have you buy it for the wrong yard. Four cases where the money is better spent elsewhere:</p>
          <ul>
            <li><strong>You need the yard usable this Saturday.</strong> No trap does that. A barrier treatment goes onto the foliage where adults rest on the day of the visit and is repeated through the season; that is a different tool for a different question.</li>
            <li><strong>You use the yard a handful of evenings a summer.</strong> A Thermacell-style personal repellent zone costs a fraction of a Biogents trap and protects the patio for the hours you are actually in it. Our <Link href="/blog/thermacell-canada-where-to-buy">Thermacell guide for Canada</Link> covers that end of the market.</li>
            <li><strong>Your yard is making its own mosquitoes.</strong> If there is standing water on the property &mdash; a saucer under a planter, a clogged eaves trough, a tarp with a puddle, an untreated rain barrel &mdash; you are breeding the problem faster than any trap removes it. Ten minutes with the checklist in <Link href="/blog/hidden-mosquito-breeding-spots-backyard">hidden mosquito breeding spots</Link> costs nothing and often outperforms a $400 machine.</li>
            <li><strong>You have an acre or more, rural.</strong> Lure-only reach is not the answer at that scale. Read the acreage comparison in our <Link href="/blog/best-mosquito-trap">best mosquito traps in Canada</Link> roundup before spending here.</li>
          </ul>

          <h2>What It Will and Will Not Catch in Ontario</h2>
          <p>Three groups dominate a GTA backyard, and the trap treats them differently:</p>
          <ul>
            <li><strong>Container-breeding <em>Aedes</em></strong> &mdash; the aggressive daytime biters that breed in a saucer of water and never leave your property. Skin-scent lures work well on this group, which is the case for the lure-only trap.</li>
            <li><strong><em>Culex pipiens</em></strong> &mdash; the dusk-active house mosquito, and the West Nile vector. More CO2-driven, which is the specific argument for the CO2 version on a property near stagnant water.</li>
            <li><strong>Floodwater <em>Aedes vexans</em></strong> &mdash; the wave that appears a few days after heavy rain, hatching from ground that was dry a week ago. Nothing traps its way out of that pulse alone; it is a volume problem.</li>
          </ul>
          <p>And to be unambiguous about the thing homeowners most often hope for: it catches no ticks whatsoever. Ticks do not fly, are not drawn to a plume, and are never intercepted by a suction trap. Tick pressure in the GTA has been rising for years, and it is a ground-level problem solved at the lawn-to-woods edge, in leaf litter and along fence lines &mdash; not in the air.</p>

          <h2>Canadian Ownership: Power, Winter, and Where to Buy</h2>
          <p>The trap&rsquo;s 5-watt outdoor power supply plugs into an ordinary household outlet (Biogents ships a 33&nbsp;ft extension cord with it), and the trap wants to be on continuously, so plan the outlet before it arrives. Use an outdoor-rated heavy-gauge cord, keep the connection covered and off the ground, and put it on a GFCI-protected circuit like any other outdoor appliance.</p>
          <p>At the end of the season &mdash; late September or early October in the GTA &mdash; unplug it, empty and wash the catch bag, dry everything completely, and store the unit indoors in a sealed bin. Ontario winters end outdoor electronics, and a fabric catch bag left in a shed becomes rodent nesting material by February. Store spare lures sealed and cool so they are still good in May.</p>
          <p>Before purchasing, look for a Canadian registration number on the box: Health Canada&rsquo;s registry lists no Biogents product, and Health Canada says to buy only pesticides registered for use in Canada, including online.</p>
          <p>For purchasing: amazon.ca is the most reliable Canadian channel for the whole Biogents ecosystem &mdash; the trap, both versions, lure cartridges, BG-Sweetscent, catch bags, gauze, and the passive BG-GAT. Big-box retailers here stock propane traps, UV zappers, and cheap combination units seasonally, not research-grade equipment, so ordering online is generally the only route. Buy a spare lure in the same cart.</p>
          <div className="not-prose my-4 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="biogents replacement catch bag mosquitaire">Check replacement catch bags &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="biogents replacement gauze mosquito trap">Check replacement gauze &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="biogents bg-sweetscent lure">Check BG-Sweetscent &rarr;</BuyLink>
          </div>

          <h2>BG-Mosquitaire Buyer&rsquo;s Checklist</h2>
          <ol>
            <li><strong>Registration:</strong> look for &ldquo;Reg. No. &hellip; P.C.P. Act&rdquo; on the box. Health Canada&rsquo;s registry lists no Biogents trap or lure, so weigh that before ordering.</li>
            <li><strong>Lure-only or CO&#8322;:</strong> Biogents aims lure-only at tiger mosquitoes; CO&#8322; broadens the catch, and you supply the tank.</li>
            <li><strong>Lure supply:</strong> about three BG-Sweetscent sachets for May to September, at up to two months each.</li>
            <li><strong>Power:</strong> an outdoor outlet within reach of the 33&nbsp;ft cord that comes in the box.</li>
            <li><strong>The spot:</strong> at least 15&nbsp;ft from where people sit, shady, humid and out of the wind (Biogents).</li>
            <li><strong>The schedule:</strong> plugged in 24/7 from early in the season, unplugged during thunderstorms.</li>
            <li><strong>Winter:</strong> stored somewhere enclosed, and not below freezing for long stretches (Biogents).</li>
            <li><strong>Expectations:</strong> Health Canada lists odour-baited traps among products that do not protect well against bites, so keep a registered personal repellent for evenings outside.</li>
          </ol>

          <h2>The Bottom Line</h2>
          <p>The Biogents BG-Mosquitaire is the best consumer mosquito trap a Canadian can buy online, and the lure-only version is the one to get. It has the research lineage, it costs almost nothing to feed compared with a propane trap, and it does its work without putting anything on your lawn. Site it between the source and your patio, in shade, low, out of the wind. Run it from early May to late September without moving it. Buy the lure multipack in the same order. Bring it inside for winter.</p>
          <p>What it will not do is fix a bad Saturday, cover an acre, out-run standing water on your own property, or touch a tick. If any of those is your actual problem, spend the money somewhere else &mdash; and if what you want is a yard that is usable tonight and stays that way, a trap belongs alongside a barrier treatment rather than instead of one.</p>

          <h2>Frequently Asked Questions</h2>
          <div className="not-prose space-y-4 my-6">
            {FAQS.map(({ question, answer }) => (
              <details key={question} className="bg-brand-50 rounded-xl border border-brand-100">
                <summary className="cursor-pointer px-5 py-3 font-semibold text-brand-900 list-none">{question}</summary>
                <p className="px-5 pb-4 text-gray-600 text-sm">{answer}</p>
              </details>
            ))}
          </div>

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/co2-mosquito-trap-canada">CO2 Mosquito Traps in Canada &mdash; The Category Overview</Link></li>
            <li><Link href="/blog/best-mosquito-trap">Best Mosquito Traps in Canada &mdash; Every Type Compared</Link></li>
            <li><Link href="/blog/mosquito-magnet-canada">Mosquito Magnet in Canada &mdash; The Propane Alternative</Link></li>
            <li><Link href="/blog/propane-mosquito-trap-canada">Propane Mosquito Traps &mdash; Reach, Tanks &amp; Real Costs</Link></li>
            <li><Link href="/blog/west-nile-virus-mosquito-risk-ontario">West Nile Virus &amp; Mosquito Risk in Ontario</Link></li>
            <li><Link href="/mosquito-control">BuzzSkito Professional Mosquito Control Service</Link></li>
          </ul>
        </div>
        <div className="max-w-3xl mx-auto">
          <AdjacentPestCTA variant="equipment" />
        </div>
      </article>

      <ReadNext path="/blog/biogents-bg-mosquitaire-mosquito-trap-canada" standalone />
    </>
  )
}
