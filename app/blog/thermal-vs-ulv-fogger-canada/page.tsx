import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import BuyLink from '@/components/BuyLink'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import SpecialistDisclosure from '@/components/SpecialistDisclosure'
import AwardRow from '@/components/AwardRow'
import TopPick from '@/components/TopPick'
import StickyBuyBar from '@/components/StickyBuyBar'
import FreshnessStamp from '@/components/FreshnessStamp'
import AuthorByline from '@/components/AuthorByline'

const SLUG = 'thermal-vs-ulv-fogger-canada'
const DATE = '2026-07-21'
const UPDATED = '2026-07-21'
const TITLE = 'Thermal vs ULV Fogger Canada 2026 — Droplet Size, Use Case & Which to Buy'
const META_TITLE = 'Thermal vs ULV Fogger Canada 2026: Which to Buy'

const FAQS = [
  {
    question: 'What is the difference between a thermal fogger and a ULV fogger?',
    answer: 'A thermal fogger uses heat — a propane flame or an electric coil — to flash a liquid into an ultra-fine, dense, visible cloud, with droplets typically around 0.5 to 10 microns. A ULV (ultra-low volume) fogger, sometimes called a cold fogger, uses a high-pressure air stream from a motor to shear the same liquid into a nearly invisible mist, with adjustable droplets typically around 5 to 50 microns. The practical result: thermal makes a thick fog that penetrates dense outdoor spaces and drifts a long way, while ULV makes a controllable, low-drift mist you can dial in and use safely indoors. The heat-versus-air distinction is the whole story — everything else follows from it.',
  },
  {
    question: 'Which produces smaller droplets, thermal or ULV?',
    answer: 'Thermal foggers produce the smallest droplets. Because heat flash-vaporizes the carrier liquid, a thermal unit like a Longray can put out droplets in the roughly 0.5 to 10 micron range — small enough to hang in the air as a dense fog and drift into vegetation, cracks, and voids. A ULV cold fogger like a PetraTools unit produces a coarser mist, roughly 5 to 50 microns, but its key advantage is that the droplet size is adjustable at the nozzle. So thermal wins on raw fineness, but ULV wins on control — you can set a ULV to a fine 15-micron space fog or a wetter 40-micron surface application, whereas a thermal fogger is essentially locked into ultra-fine.',
  },
  {
    question: 'Why does droplet size matter so much when fogging?',
    answer: 'Droplet size decides where your solution ends up. Very fine droplets below about 15 microns stay airborne for a long time, drift on air currents, and are ideal for filling a space or reaching flying insects and hidden voids — but they wet surfaces poorly and drift off-target easily. Mid-range droplets around 20 to 30 microns settle in a reasonable time and coat both air and nearby surfaces, which is the sweet spot for disinfection and general insect work. Larger droplets above 40 microns fall fast and wet surfaces like a light spray, giving better residual coverage but little airborne reach. Matching droplet size to the job is the single most important fogging decision, which is exactly why the adjustable ULV appeals to so many buyers.',
  },
  {
    question: 'Can you use a thermal fogger indoors?',
    answer: 'Generally, no — and this is one of the biggest reasons buyers choose ULV instead. Thermal foggers run on an open propane flame or a very hot electric element, produce a huge volume of dense visible fog, and usually rely on oil-based carriers, all of which make them a poor and often unsafe choice for enclosed indoor spaces. The fog can set off smoke alarms, reduce visibility to near zero, leave an oily film, and the heat source is a fire consideration in a confined room. ULV cold foggers, by contrast, run cold, use water-based solutions, and put out a controllable low-volume mist, which is why they became the standard tool for indoor disinfection, mould remediation, and odour work.',
  },
  {
    question: 'Is a Longray thermal fogger or a PetraTools ULV fogger better?',
    answer: 'They are built for different jobs, so the honest answer is: it depends on where and what you are fogging. A Longray-style gas thermal fogger is the specialist tool for large outdoor areas and dense vegetation — its ultra-fine, high-volume fog penetrates shrubs, tree lines, barns, and greenhouses better than anything else, and the visible cloud confirms your coverage. A PetraTools-style electric ULV fogger is the versatile all-rounder — it handles indoor disinfection, greenhouses, and light outdoor work, runs safely on battery or cord, uses water-based products, and lets you adjust droplet size. For most buyers who want one machine that does the widest range of jobs safely, the ULV is the better default; for pure large-area outdoor knockdown, thermal wins.',
  },
  {
    question: 'What carrier liquids can each fogger use — oil or water?',
    answer: 'Traditional thermal foggers are designed primarily for oil-based (or specialised fog-fluid) carriers, because the heat needs a carrier that vaporizes cleanly into a persistent visible fog; running plain water through a hot thermal fogger produces a thin, short-lived steam rather than a proper fog. Some modern thermal units accept both oil and water-based solutions, but oil-based is where they shine. ULV cold foggers are built for water-based solutions — disinfectants, water-diluted insecticide concentrates, sanitizers, and deodorizers — because they shear the liquid mechanically rather than boiling it. Always match the carrier to the machine and, critically, to what the product label permits.',
  },
  {
    question: 'How big an area can each type of fogger cover?',
    answer: 'Thermal foggers cover far more area per minute because they aerosolize a high volume of liquid into a fog that travels on the air. A single gas thermal fogger can treat a large yard, an orchard row, a barn, or a greenhouse quickly, which is why municipalities and large operations favour thermal or truck-mounted units for outdoor pest programs. ULV foggers cover less area per pass because their output is lower and their coarser droplets travel shorter distances, making them ideal for rooms, vehicles, small greenhouses, and targeted outdoor patches rather than acreage. If your job is measured in acres of open or vegetated land, lean thermal; if it is measured in rooms or a modest yard, ULV is plenty.',
  },
  {
    question: 'Are foggers regulated in Canada, and does the machine need registration?',
    answer: 'The fogger itself is a device, not a pesticide, so the machine does not require PMRA (Health Canada Pest Management Regulatory Agency) registration — you can freely buy a thermal or ULV fogger in Canada. What is regulated is the product you put through it. Any insecticide, disinfectant, or sanitizer you fog must be registered for use in Canada and legal to apply by fogging: pesticides need a PCP registration number and disinfectants need a DIN, and you must follow the label, including whether fogging is an approved application method. This is where many US-bought concentrates fall down — a product legal south of the border may not be PMRA-registered here, so it is not the right choice no matter how good the fogger is.',
  },
  {
    question: 'Should I buy a battery ULV fogger or a corded one?',
    answer: 'It comes down to where you work and how long you fog at a stretch. A cordless battery ULV fogger — the format PetraTools is known for — gives you the freedom to walk a whole property, a greenhouse, or multiple rooms without hunting for outlets, at the cost of runtime limits and the need to manage charged batteries. A corded ULV fogger never stops for a battery and is well suited to a fixed indoor space, a commercial cleaning routine, or long continuous sessions where an outlet is always in reach. If your work is mobile and varied, buy cordless (and a spare battery); if it is stationary and long-running, corded is simpler and cheaper.',
  },
  {
    question: 'Do I need a mask or PPE when fogging?',
    answer: 'Yes — regardless of which fogger you choose, treat the fine aerosol as something you must not breathe. Because both thermal and ULV foggers create droplets small enough to inhale deep into the lungs, the label on whatever you are applying will specify respiratory protection, eye protection, and often gloves and coveralls. Fine aerosols hang in the air far longer than a coarse spray, so ventilation timing and re-entry intervals on the product label matter as much as the mask. Never fog a space you or others will occupy without following the product label re-entry guidance, and never assume a water-based product is harmless just because it is not oil-based.',
  },
  {
    question: 'Can one fogger do both indoor disinfection and outdoor insect control?',
    answer: 'A ULV cold fogger is the closest thing to a do-everything machine, which is a big part of why it outsells thermal for general buyers. Because it runs cold, uses water-based products, and lets you adjust droplet size, a single quality ULV unit can disinfect a room at one setting and knock down insects in a small yard or greenhouse at another. A thermal fogger cannot really cross over the other way — it is superb outdoors but impractical and often unsafe indoors. So if versatility across indoor and outdoor jobs is your priority, the ULV is the one machine to own; buy a thermal fogger only when large-area outdoor penetration is the specific problem you need solved.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'Thermal vs ULV fogger for Canadian buyers: how droplet size, coverage, indoor vs outdoor use, carrier liquid, and safety differ — a Longray thermal vs PetraTools ULV comparison with a clear pick and PMRA-legal buying advice. Updated 2026.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

export default function ThermalVsUlvFoggerCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Independent Canadian comparison of thermal vs ULV foggers — droplet size, coverage, indoor vs outdoor use, carrier liquid, safety, and which to buy, with a Longray thermal vs PetraTools ULV verdict.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Thermal vs ULV Fogger Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Thermal vs ULV Fogger</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">Heat versus air, dense fog versus adjustable mist &mdash; the thermal-vs-ULV decision comes down to droplet size and where you fog. Here is the honest breakdown, a Longray thermal vs PetraTools ULV comparison, and which one most Canadian buyers should actually own.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <StickyBuyBar name="PetraTools cordless ULV cold fogger" search="petratools ulv cordless fogger" label="Best all-round pick" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">A <strong>thermal fogger</strong> uses heat to make an ultra-fine, dense, visible fog (roughly 0.5&ndash;10 microns) that penetrates dense outdoor spaces &mdash; think a <strong>Longray</strong> gas unit. A <strong>ULV cold fogger</strong> uses an air stream to make an adjustable, low-drift mist (roughly 5&ndash;50 microns) that is safe indoors &mdash; think a <strong>PetraTools</strong> electric unit. For pure large-area outdoor knockdown, buy thermal. For a versatile machine that does indoor disinfection and light outdoor work safely, the ULV is the better default &mdash; and it is the one most buyers should own.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>Thermal = heat + oil-based carrier + ultra-fine fog; ULV = cold air shear + water-based + adjustable droplets.</li>
              <li>Thermal makes the smallest droplets and the most drift; ULV lets you dial droplet size to the job.</li>
              <li>Thermal covers far more area outdoors; ULV is safe and controllable indoors where thermal is not.</li>
              <li>Droplet size decides everything: under 15 microns floats and drifts, over 40 microns wets surfaces.</li>
              <li>The fogger is just a device &mdash; what you fog must be PMRA-registered (or carry a DIN) and legal to fog in Canada.</li>
              <li>Want one machine for the widest range of jobs? A cordless ULV cold fogger is the all-rounder.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito Pest Product Guides &middot; independent Canadian research</p>
          </div>
          <SpecialistDisclosure pest="the flies, mould, and general pests people buy foggers for" />
        </div>
      </section>

      <section className="bg-white px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <AwardRow
            heading="Our Picks — Thermal & ULV Foggers for Canadian Buyers"
            awards={[
              {
                badge: 'Best All-Round',
                name: 'PetraTools Cordless ULV Cold Fogger',
                why: 'The most versatile machine to own: it runs cold on water-based products, adjusts droplet size at the nozzle, and moves between indoor disinfection, greenhouses, and light outdoor work on battery power. For buyers who want one fogger that does the widest range of jobs safely, this is it.',
                search: 'petratools ulv cordless fogger',
                score: 8.9,
                featured: true,
                pros: ['Indoor-safe cold operation', 'Adjustable droplet size', 'Cordless — walk the whole property'],
                cons: ['Less outdoor reach than thermal', 'Battery runtime to manage'],
              },
              {
                badge: 'Best Outdoor Penetration',
                name: 'Longray Gas Thermal Fogger',
                why: 'The specialist tool for large outdoor areas and dense vegetation. Its ultra-fine, high-volume fog drives deep into shrubs, tree lines, barns, and greenhouses, and the visible cloud confirms your coverage where a ULV mist would vanish.',
                search: 'longray thermal fogger',
                score: 8.6,
                pros: ['Unmatched outdoor penetration', 'Huge area coverage per pass', 'Visible fog confirms coverage'],
                cons: ['Not for indoor use', 'Propane + oil-based carrier logistics'],
              },
              {
                badge: 'Best Corded ULV',
                name: 'Corded Electric ULV Fogger',
                why: 'For a fixed indoor space or a long commercial cleaning routine, a corded ULV never stops for a battery. Same cold, water-based, adjustable-droplet operation as the cordless pick, with unlimited runtime wherever an outlet is in reach.',
                search: 'corded electric ulv fogger disinfectant',
                score: 8.1,
                pros: ['Unlimited runtime on mains', 'Ideal for stationary indoor work', 'Simple and lower cost'],
                cons: ['Tethered to an outlet', 'Less mobile than cordless'],
              },
              {
                badge: 'Best Value Entry',
                name: 'Compact Handheld ULV Fogger',
                why: 'A wallet-friendly cold fogger for rooms, vehicles, and small jobs. Lighter output and a smaller tank than the pro units, but a genuine adjustable ULV that covers occasional disinfection and small-space insect work without the premium price.',
                search: 'handheld ulv fogger machine',
                score: 7.3,
                pros: ['Affordable entry point', 'Light and easy to handle', 'Still adjustable and cold-running'],
                cons: ['Small tank and lower output', 'Not for large areas'],
              },
            ]}
            whichToBuy={
              <>
                <strong>Want one machine that does the most jobs safely?</strong> The <em>Best All-Round</em> cordless ULV is the default buy &mdash; indoor-safe, adjustable, and mobile. <strong>Fogging acreage, dense vegetation, or barns?</strong> The <em>Best Outdoor Penetration</em> Longray thermal is the specialist that nothing else replaces. <strong>Long stationary indoor sessions?</strong> The <em>Best Corded ULV</em> never stops for a battery. <strong>Occasional small-space use on a budget?</strong> The <em>Best Value Entry</em> handheld ULV covers it.
              </>
            }
          />
        </div>
      </section>

      <section className="bg-gradient-to-br from-emerald-50 to-white border-b border-emerald-200 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Thermal vs ULV · Head to Head · Updated July 2026</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">Thermal Fogger vs ULV Cold Fogger — The Honest Comparison</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            Both machines turn liquid into fog, but they do it in opposite ways and suit opposite jobs. Here is how they compare on the factors that actually decide the purchase, with a live Amazon.ca availability check for each type.
          </p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Factor</th>
                  <th className="px-4 py-3 text-left">Thermal fogger <span className="font-normal text-brand-200">(Longray)</span></th>
                  <th className="px-4 py-3 text-left">ULV cold fogger <span className="font-normal text-brand-200">(PetraTools)</span></th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">How it works</td>
                  <td className="px-4 py-3 text-gray-700">Heat (flame or coil) flash-vaporizes liquid into fog</td>
                  <td className="px-4 py-3 text-gray-700">High-pressure air shears liquid into a cold mist</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Droplet size</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Ultra-fine</strong> &mdash; ~0.5&ndash;10 microns, fixed</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Adjustable</strong> &mdash; ~5&ndash;50 microns, dial-in</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Indoor use</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">No</strong> &mdash; heat, oil film, smoke-alarm risk</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Yes</strong> &mdash; cold, water-based, controllable</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Outdoor coverage</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Best</strong> &mdash; huge area, deep penetration</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">Good</strong> &mdash; smaller patches, less drift</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Carrier liquid</td>
                  <td className="px-4 py-3 text-gray-700">Mainly oil-based fog fluids</td>
                  <td className="px-4 py-3 text-gray-700">Water-based solutions</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Power</td>
                  <td className="px-4 py-3 text-gray-700">Propane / gas or hot electric coil</td>
                  <td className="px-4 py-3 text-gray-700">Battery (cordless) or corded electric</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Relative price</td>
                  <td className="px-4 py-3 text-gray-700">Premium &mdash; specialist outdoor tool</td>
                  <td className="px-4 py-3 text-gray-700">Broad range &mdash; budget to professional</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Best for</td>
                  <td className="px-4 py-3 text-gray-700">Acreage, vegetation, barns, greenhouses</td>
                  <td className="px-4 py-3 text-gray-700">Disinfection, indoors, versatility, small yards</td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Availability</td>
                  <td className="px-4 py-3"><BuyLink search="longray thermal fogger" block>Check price →</BuyLink></td>
                  <td className="px-4 py-3"><BuyLink search="petratools ulv cordless fogger" block>Check price →</BuyLink></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            A fogger is a device, not a pesticide &mdash; neither type requires PMRA registration to buy. What you fog through it, however, must be a Health-Canada-registered product (a PCP number for pesticides, a DIN for disinfectants) applied strictly to its label.
          </p>
          <div className="mt-5 rounded-xl bg-amber-50 border-l-4 border-amber-400 p-4">
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong className="text-amber-900">⚠️ The machine is the easy part.</strong> The wrong droplet size or an unregistered concentrate wastes product and can be unsafe or illegal to apply. Choose the fogger for where you work &mdash; then choose a PMRA-legal product and follow its label. For a backpack-style liquid applicator instead of a fogger, see our <Link href="/blog/backpack-sprayer-canada" className="text-emerald-700 underline font-semibold">backpack sprayer guide</Link>.
            </p>
          </div>
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />

          <h2>Thermal vs ULV Fogger: What Actually Separates Them</h2>
          <p>Strip away the marketing and the thermal-versus-ULV choice reduces to one physical difference: <strong>how the machine turns liquid into fog</strong>. A thermal fogger uses <em>heat</em> &mdash; a propane flame or a glowing electric coil &mdash; to flash the carrier liquid into vapour that instantly condenses into a dense, visible cloud of ultra-fine droplets. A ULV (ultra-low volume) fogger uses <em>cold air</em> &mdash; a powerful motor drives a high-pressure air stream that mechanically shears the liquid into a mist at the nozzle. Heat versus air. Everything else about these machines &mdash; droplet size, where you can use them, what liquids they take, how much they cost &mdash; flows directly from that one design decision.</p>
          <p>That is why there is no single &ldquo;better&rdquo; fogger, only a better fit for your job. A <Link href="/blog/best-gas-backpack-fogger-canada">gas thermal fogger</Link> like a Longray is a specialist built to blanket large outdoor areas with penetrating fog. A ULV cold fogger like a PetraTools unit is a generalist built to apply water-based products precisely and safely, indoors or out. The rest of this guide walks through the factors that decide which one belongs in your shed, then names the pick that suits the most buyers.</p>

          <AffiliateDisclosure />
          <p className="not-prose text-sm text-gray-600 mb-1">Check current Canadian availability of the two types:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink search="longray thermal fogger">Longray thermal fogger →</BuyLink>
            <BuyLink search="petratools ulv cordless fogger">PetraTools ULV fogger →</BuyLink>
            <BuyLink search="handheld ulv fogger machine">Handheld ULV fogger →</BuyLink>
          </div>

          <h2>Droplet Size: The Number That Decides Everything</h2>
          <p>If you understand nothing else about fogging, understand droplet size, because it dictates where your solution lands and therefore whether the job works. Fog droplets are measured in microns (millionths of a metre), and the size band you choose changes the physics entirely:</p>
          <ul>
            <li><strong>Under ~15 microns &mdash; airborne, drifting fog.</strong> These droplets hang in the air for a long time, follow air currents, and drift into voids, foliage, and cracks. Ideal for filling a space or reaching flying insects; poor at wetting surfaces and prone to drifting off-target. This is thermal-fogger territory.</li>
            <li><strong>~20&ndash;30 microns &mdash; the balanced middle.</strong> Settles in a reasonable time, coats both the air and nearby surfaces. The sweet spot for indoor disinfection and general insect work &mdash; and a common default ULV setting.</li>
            <li><strong>Over ~40 microns &mdash; wetting, near-spray.</strong> Falls quickly and coats surfaces like a light spray, giving better residual coverage but little airborne reach. The wet end of a ULV&rsquo;s adjustable range.</li>
          </ul>
          <p>A thermal fogger is essentially locked into the ultra-fine end &mdash; roughly 0.5 to 10 microns &mdash; which is exactly what makes it a penetration and coverage champion outdoors, and exactly what makes it drift-prone and unsuitable indoors. A ULV cold fogger typically runs coarser, roughly 5 to 50 microns, but its decisive advantage is that <strong>you adjust the droplet size at the nozzle</strong>. That single dial is why one ULV machine can disinfect a room at a fine setting in the morning and knock down insects in the greenhouse at a wetter setting in the afternoon. Thermal wins on raw fineness; ULV wins on control.</p>

          <h2>Thermal Foggers: Built for the Great Outdoors</h2>
          <p>A gas thermal fogger is the tool you reach for when the problem is <em>big and outside</em>. Because heat flash-vaporizes the carrier, a thermal unit like a Longray produces an enormous volume of ultra-fine fog that behaves almost like smoke &mdash; it rolls into dense shrubs, along tree lines, through barns and greenhouses, and into the harbourage that a coarser mist never reaches. The fog is visible, which is genuinely useful: you can see exactly where your coverage is going and where it thins out. For orchards, large yards, agricultural buildings, and any sizeable vegetated area, nothing consumer-grade matches thermal for penetration and area-per-minute.</p>
          <p>The trade-offs are the flip side of those strengths. Thermal foggers usually run on propane or a very hot coil and are designed around oil-based fog fluids, which means an open heat source, fuel to manage, and an oily residue you would never want indoors. The dense fog can reduce visibility to near zero and will trip smoke alarms in an enclosed space. And that ultra-fine, drifting cloud demands attention to wind and neighbouring properties. These are outdoor machines, full stop &mdash; superb at their job and impractical outside it. If your fogging is essentially a mobile outdoor liquid application, also weigh a <Link href="/blog/best-gas-backpack-fogger-canada">gas backpack fogger</Link> and, for reference on the fuel question, our <Link href="/blog/propane-vs-electric-fogger-canada">propane vs electric fogger comparison</Link>.</p>

          <h2>ULV Cold Foggers: The Versatile All-Rounder</h2>
          <p>A ULV cold fogger is the machine most buyers should look at first, precisely because it refuses to be a specialist. Running cold on water-based solutions, it is safe to use indoors, which is why ULV became the default tool for the wave of disinfection, sanitizing, mould-remediation, and odour-control work that a thermal fogger simply cannot touch. Dial the nozzle to a fine mist and it fills a room with disinfectant; open it up to a wetter setting and it lays down a coating on surfaces or knocks down insects in a small greenhouse or yard. One machine, many jobs, no flame.</p>
          <p>PetraTools built its reputation on cordless ULV units, and the battery format is a real advantage for anyone who moves around &mdash; you can walk an entire property, a multi-room building, or a greenhouse without dragging a cord or hunting for an outlet. The cost is the usual cordless tax: runtime limits and batteries to keep charged. A corded ULV trades that mobility for unlimited runtime, which suits a fixed indoor space or a long commercial cleaning routine better. Either way, the ULV&rsquo;s honest limitation is outdoor reach: its coarser, lower-volume mist will not blanket acreage or drive deep into a hedgerow the way a thermal fog does. For most homeowners and small operators, though, that ceiling is far above what they will ever need.</p>

          <TopPick
            label="Overall Pick for Most Buyers"
            name="PetraTools-style Cordless ULV Cold Fogger"
            blurb="For the widest range of jobs with the fewest compromises, a cordless ULV cold fogger is the one to own. It runs cold and safe indoors, uses water-based products, lets you dial droplet size from a fine disinfecting mist to a wetter surface coat, and goes cordless so you can cover a whole property. It gives up outdoor penetration to a thermal fogger — but unless large-area vegetation is your specific problem, its versatility wins. Buy a Longray-style thermal fogger as a second, specialist machine only when acreage and dense foliage demand it."
            search="petratools ulv cordless fogger"
            score={8.9}
            pros={['Indoor-safe cold operation on water-based products', 'Adjustable droplet size for many jobs', 'Cordless mobility across a whole property', 'Broad price range from entry to professional']}
            cons={['Less outdoor reach and penetration than thermal', 'Battery runtime to plan around']}
          />

          <h2>How to Choose: Sizing and What You Are Actually Paying For</h2>
          <p>Foggers span a wide price range, and on the high-ticket end it is worth being clear about which features earn their cost for <em>your</em> job versus which are premium you can skip. Work through these in order:</p>
          <ul>
            <li><strong>Where you fog (decide this first).</strong> Indoors or mixed indoor/outdoor points to ULV; large outdoor or vegetated areas points to thermal. This single answer eliminates half the market before you compare specs.</li>
            <li><strong>Droplet adjustability (pay for it on a ULV).</strong> The nozzle dial is what makes a ULV a multi-job machine. A fixed-droplet cheap unit is far less useful than one you can tune from fine mist to wet coat.</li>
            <li><strong>Tank capacity and output (match to job size).</strong> A bigger tank and higher flow rate mean fewer refills on large jobs, but add weight. Size it to the area you actually treat &mdash; an oversized tank is dead weight on small indoor work.</li>
            <li><strong>Power source (match to how you move).</strong> Cordless ULV for mobile, varied work; corded ULV for stationary long sessions; propane/gas thermal for outdoor coverage where no outlet reaches. Buy a spare battery if you go cordless.</li>
            <li><strong>Build quality and serviceability (pay for it if you use it often).</strong> A frequently used pro unit justifies metal components and replaceable parts; occasional use does not. Do not buy commercial durability you will never exercise.</li>
            <li><strong>Carrier compatibility (confirm before you buy).</strong> Make sure the machine takes the type of product you intend to run &mdash; water-based for ULV, oil-based fog fluid for most thermal units &mdash; because mismatching the carrier ruins performance and can damage the fogger.</li>
          </ul>
          <p>Read that as a spending map: put your money into the fit-for-purpose factors &mdash; the right type, adjustability, and the tank and power that match your job &mdash; and treat commercial-grade extras as optional. The most common way to overspend is buying a big professional thermal fogger for what is really an indoor disinfection need, or a premium high-output ULV for occasional small-room use. Buy the type your job demands, size it honestly, and stop there. If you are still weighing a fogger against a pressurized liquid sprayer, our <Link href="/blog/best-pump-pressure-sprayer-canada">pump pressure sprayer guide</Link> and <Link href="/blog/field-king-backpack-sprayer-review-canada">Field King backpack sprayer review</Link> cover the alternatives.</p>

          <h2>The Part Nobody Reads: What You Are Allowed to Fog in Canada</h2>
          <p>Here is the compliance reality that matters more than any spec sheet. The fogger itself is a device, so it needs no Health Canada registration &mdash; you can buy a thermal or ULV fogger freely. But <strong>the product you put through it is regulated</strong>, and this is where DIY fogging most often goes wrong. Any pesticide you fog must carry a Canadian PCP (Pest Control Products) registration number from the PMRA, and any disinfectant must carry a DIN &mdash; and, crucially, the label must permit application by fogging. A product that is perfectly legal to spray is not automatically legal to fog.</p>
          <p>This is exactly where grey-market imports fall down. A fogging concentrate that is popular and legal in the United States may have no PMRA registration in Canada, which makes it not the right choice no matter how well it pairs with your machine. The safe, legal path is simple: pick the fogger for where you work, then choose a Canadian-registered product whose label approves fogging, and follow that label on dilution, droplet size, ventilation, personal protective equipment, and re-entry time. The machine is the easy purchase; the product and the label are what keep the job effective and legal.</p>

          <h2>So, Thermal or ULV? The Short Version</h2>
          <p>If you need to blanket a large outdoor area or drive fog deep into dense vegetation, buy a <strong>thermal fogger</strong> &mdash; a Longray-style gas unit is the specialist that nothing else replaces, and its visible, ultra-fine, high-volume fog is purpose-built for exactly that job. If you want <strong>one machine that safely handles the widest range of work</strong> &mdash; indoor disinfection, greenhouses, odour control, and light outdoor insect knockdown &mdash; buy a <strong>ULV cold fogger</strong>, and lean cordless for mobility. For most Canadian homeowners and small operators, the ULV is the smarter first (and often only) purchase; the thermal fogger is the second machine you add when large-area outdoor penetration becomes a specific, recurring problem. Match the tool to the place, match the product to the label, and either machine will earn its keep.</p>

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

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/best-gas-backpack-fogger-canada">Best Gas Backpack Fogger Canada — Outdoor Fogging Power</Link></li>
            <li><Link href="/blog/propane-vs-electric-fogger-canada">Propane vs Electric Fogger Canada — Which Power Source</Link></li>
            <li><Link href="/blog/backpack-sprayer-canada">Best Backpack Sprayer Canada — Liquid Application</Link></li>
            <li><Link href="/blog/best-pump-pressure-sprayer-canada">Best Pump Pressure Sprayer Canada</Link></li>
            <li><Link href="/blog/field-king-backpack-sprayer-review-canada">Field King Backpack Sprayer Review Canada</Link></li>
            <li><Link href="/blog/best-ozone-generator-canada">Best Ozone Generator Canada — The No-Liquid Alternative</Link></li>
            <li><Link href="/blog/best-pest-control-equipment-canada">Best Pest Control Equipment Canada — The Full Device Hub</Link></li>
          </ul>

          <div className="not-prose mt-10 rounded-xl border border-navy-100 bg-brand-50 px-5 py-4">
            <p className="text-sm text-brand-900">
              <Link href="/pest-product-guides" className="font-bold text-emerald-700 hover:text-emerald-800 underline">More independent Canadian pest product research →</Link>
            </p>
          </div>
        </div>
      </article>
    </>
  )
}
