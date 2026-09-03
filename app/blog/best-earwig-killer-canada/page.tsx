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

const SLUG = 'best-earwig-killer-canada'
const DATE = '2026-07-28'
const UPDATED = '2026-07-30'
// This page is deliberately the SHELF half of the earwig pair: what is legally sold
// in Canada, what to buy, what to build instead, and what the label must say. The ear
// myth, the life cycle, the Ontario timing and the full protocol live on
// how-to-get-rid-of-earwigs-canada. SERP title trimmed to 44 chars.
const TITLE = 'Earwig Traps and Killers in Canada — What to Buy, What to Make Instead, and What the Shelf Will Not Sell You'
const META_TITLE = 'Earwig Traps and Killers Canada: What to Buy'

const FAQS = [
  {
    question: 'What should I buy to kill earwigs in Canada?',
    answer: 'A short list: a PMRA-registered insecticidal diatomaceous earth (Safer’s Diatomaceous Earth is widely stocked, with Knock Down and Doktor Doom Be Green as registered alternatives), a bulb duster to apply it, door sweeps and a garage door bottom seal, and — if a wave is crossing the foundation right now — a Canadian-registered residual labelled for the outside of a building. That is genuinely the whole list. The catch worth knowing before you order: the single most effective earwig killer is not a product at all. A shallow tin of vegetable oil with a splash of soy sauce, sunk flush to soil level in the bed, out-kills anything on the shelf because it works on the insect where it lives, at night, rather than where you happen to spray.',
  },
  {
    question: 'Is a commercial earwig trap worth buying?',
    answer: 'Not really, and we would rather say so than sell you one. There is no widely available consumer trap engineered specifically for earwigs the way the wasp market has purpose-built lure traps, and the generic crawling-insect traps marketed for the job are doing exactly what a rolled newspaper tube or an oil-filled tin does — offering a tight dark space or a drowning liquid — for considerably more money. Spend the money on a bulb duster, a door sweep, and a downspout extension instead. If you want an off-the-shelf item that helps, buy flat glue boards, but treat them as instrumentation: they tell you which entry point is live and whether your sealing worked, rather than reducing the population.',
  },
  {
    question: 'Which diatomaceous earth should I buy, and what else do I need with it?',
    answer: 'Buy DE that is sold as an insecticide and carries a PCP registration number on the Canadian label — the registered consumer brands you will actually find here are Safer’s Diatomaceous Earth, Knock Down and Doktor Doom Be Green — and budget for a bulb or hand duster in the same order. The duster is not an accessory: what kills is a barely visible film, insects walk around visible piles, and you cannot lay a thin film out of the bag. Quantity is rarely the constraint; one consumer bag will treat a house many times over. Avoid "food-grade" DE, which is sold as an anti-caking agent or feed additive with no pesticide registration and no legal pest-use directions, and never buy pool-grade for pest control — it has been calcined, contains crystalline silica, and is both a genuine respiratory hazard and worse at absorbing insect wax.',
  },
  {
    question: 'Will Ortho Home Defense or Raid kill earwigs in Canada?',
    answer: 'The Canadian versions will kill the earwigs they contact; the famous American version is not sold here. Ortho’s bifenthrin "Home Defense Max Insect Killer for Indoor & Perimeter" — the product most Canadians are actually searching for — is not PMRA-registered, and Ontario now limits cosmetic lawn and garden use to a permitted list of lower-risk active ingredients that does not include synthetic pyrethroids such as bifenthrin. (Quebec restricts lawn-use ingredients separately, under its own Code de gestion des pesticides, so the rule is provincial rather than national.) What is legally sold in Canada for crawling insects around a home is a narrower set than the American aisle, and the use site on the label matters as much as the pest list: Doktor Doom Residual, Wilson One Shot and Raid Bug Barrier are sold here and labelled for treating the outside of a building. Ortho’s Canadian Bug B Gon ECO line is registered too, but its Canadian SKUs are directed at plants — ornamentals, vegetables, fruit trees, greenhouse plants — rather than at a foundation wall, so it belongs in the garden and not in your perimeter band. All of them will drop an earwig on contact. None of them fixes the damp harbourage that is producing the earwigs in the first place.',
  },
  {
    question: 'Is there an earwig bait like there is for ants and cockroaches?',
    answer: 'No, and understanding why saves you a lot of shopping. Ant and cockroach baits work because those insects share food socially — a forager carries a slow-acting toxicant home and it moves through the colony. Earwigs are not eusocial. A female guards her own eggs and early nymphs, but there is no colony, no trophallaxis, and no food-sharing network for a bait to travel through. Every earwig has to individually contact or eat the product, which is why the entire earwig market is contact products, dusts, and traps, and why no manufacturer has ever produced the earwig equivalent of a roach gel. It also means that trapping — which removes individuals one by one — is not the weak option here; it is structurally the same mechanism every product on the shelf uses.',
  },
  {
    question: 'Do earwig perimeter granules work, and can I buy them here?',
    answer: 'Granules are a delivery format, not a magic active — a carrier pellet coated with an insecticide that releases when it gets wet from dew, rain, or watering-in. Spread in a band at the foundation they can knock down a heavy wave of earwigs crossing that band. Three honest caveats for Canada. First, the granular crawling-insect market here is much thinner than in the US, because the long-residual pyrethroids that dominate American granules are largely unavailable to Canadian consumers. Second, a granule that gets watered in still does nothing about the mulch bed producing the earwigs. Third, check the label for a PCP registration number and confirm the product is sold and shipped within Canada before you buy — a marketplace listing shipping a US granule north is an unregistered pesticide here.',
  },
  {
    question: 'What kills earwigs instantly, and is it worth buying?',
    answer: 'A contact spray or a boot kills the individual earwig in front of you instantly. Nothing kills an earwig population instantly, and that gap is where most money gets wasted. Any PMRA-registered crawling-insect aerosol will drop an earwig it directly wets within seconds — but earwigs are nocturnal and spend the day packed into damp mulch, soil chambers, and gaps you cannot reach, so the ones you kill on the patio at noon are a fraction of those living under the bed a few feet away. If you want a number that actually moves, buy traps and hardware, not a faster knockdown. Indoors there is a better move than buying an aerosol at all: vacuum them and empty the canister outside. It leaves no residue in a room where nothing is breeding, and it avoids the foul-smelling defensive fluid a crushed earwig releases onto grout and carpet.',
  },
  {
    question: 'Does soapy water or vinegar work, and should I buy anything for that?',
    answer: 'Soapy water works on direct contact and has exactly one worthwhile role: it is the bucket you drop your traps into. Soap breaks surface tension and disrupts the cuticle, so an earwig knocked from a newspaper tube into soapy water dies quickly and cannot climb out. What it is not is a treatment — sprayed on a plant or a foundation it kills only what it directly wets while still wet, leaves no residual, and evaporates within the hour. Vinegar and essential oils are not earwig killers at all, and the "smells earwigs hate" lists circulating online are mostly invention; vinegar sprayed on plants can also burn foliage. If you want a smell-based approach that genuinely works, run it in the other direction: earwigs are strongly attracted to fermenting and oily food odours, which is why a tin of oil with soy sauce in it is the most effective earwig device in this guide. Buy dish soap you already own; buy nothing else for this.',
  },
  {
    question: 'What can I use around vegetables, pets and children?',
    answer: 'Trapping is the only method with essentially no chemical exposure at all, which is why it is the right default around vegetable beds, herb planters, and dog runs. Oil tins should be covered versions — a lidded container with entry holes punched at soil level — if you have a curious dog or a toddler. Beyond trapping, PMRA-registered diatomaceous earth is the lowest-concern product, but the label still governs it: DE is a registered pesticide in Canada, it should be kept out of the airway during application, and only the uses printed on the label are legal ones. If you reach for a registered product near edibles, first check that edible plantings are actually a use site on that label — a product labelled for the outside of a building is not the same as one labelled for a vegetable bed, and the use site is as binding as the pest list. Then follow the setback and pre-harvest directions printed there, keep pets and children off treated surfaces until fully dry, and never assume a "reduced-risk" or "ECO" line means no precautions.',
  },
  {
    question: 'When should I apply what I bought?',
    answer: 'At dusk, and in the right month — the single change worth more than switching brands. Earwigs are strictly nocturnal, so a product applied in the morning has spent an entire day degrading in sun and heat before the target ever moves; the same product laid down at dusk meets them at full strength. On the calendar, southern Ontario activity runs from roughly late June to first hard frost and peaks from late July through September, because the European earwig produces a single generation a year that matures all at once in midsummer. Hardware you buy in May and June — door sweeps, downspout extensions, a rake for the mulch line — is prevention. Anything you apply in August is damage control on a population already at its annual maximum.',
  },
  {
    question: 'Is it worth paying a pest company for earwigs?',
    answer: 'For the overwhelming majority of Canadian households, no, and hiring anyone is money badly spent. A registered bag of DE, a bulb duster, a couple of door sweeps and a tube of exterior silicone is a modest hardware-store run, and the traps that do the heaviest lifting are made from tins you already have. A recurring spray program to solve a dozen earwigs in the bathtub in August is a subscription, not a solution. The genuine exceptions are worth naming: dozens entering daily for weeks despite proper exclusion (usually a moisture or drainage fault, where the right contractor may be a waterproofer rather than an exterminator), a food premises where any insect presence is a compliance issue, or a nursery or market garden taking real crop loss. Be suspicious of any earwig quote that does not begin with someone walking your mulch beds, window wells, downspouts, and eavestroughs.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'What to buy for earwigs in Canada: which registered dust and duster, why no commercial earwig trap is worth buying, and the perimeter products sold here.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug(SLUG)

export default function BestEarwigKillerCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Independent Canadian shopping guide for earwig products: what the Canadian shelf legally carries and what it does not, which registered diatomaceous earth and duster to buy, why commercial earwig traps are not worth the money, the exclusion hardware list, the PCP registration-number and use-site label checks, and the products to skip.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Earwig Traps and Killers Canada — What to Buy', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Earwig Traps and Killers — What to Buy</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">The shelf, honestly: there is no earwig bait, no purpose-built earwig trap worth paying for, and the bifenthrin barrier spray American guides recommend is not sold in Canada. Here is the short list that is worth buying, and the two-minute build that beats all of it.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <AffiliateDisclosure />
      <StickyBuyBar tag={AMZ_TAG} name="Safer's Diatomaceous Earth (PMRA-registered insect dust)" search="safers diatomaceous earth" label="Best product you can buy" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">The short shopping list for earwigs in Canada is four items: a PMRA-registered insecticidal diatomaceous earth (Safer&rsquo;s, Knock Down, or Doktor Doom Be Green), a bulb duster to lay it thin, door sweeps and a garage door bottom seal, and downspout extensions. A Canadian-registered residual labelled for the outside of a building is an optional fifth for a heavy wave. What you should <em>not</em> buy is a commercial &ldquo;earwig trap&rdquo; &mdash; there is no consumer trap engineered for this insect, and what gets sold under the name is a tin of oil or a rolled newspaper at a markup. Build that instead; it out-kills the shelf.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>There is <strong>no earwig bait</strong> to buy &mdash; earwigs are not social insects, so nothing carries a toxicant back to a colony. Every product is contact-only.</li>
              <li>The bifenthrin &ldquo;Ortho Home Defense Max&rdquo; most Canadians search for is <strong>not PMRA-registered</strong>, and Ontario&rsquo;s permitted list for cosmetic lawn and garden use does not include a synthetic pyrethroid like it.</li>
              <li><strong>Buy the duster with the dust.</strong> A barely visible film is what kills, and you cannot lay one from the bag.</li>
              <li><strong>Two label checks:</strong> a PCP registration number, and a use site that matches your job &mdash; a plant-directed product is not a foundation product.</li>
              <li><strong>Apply at dusk.</strong> Earwigs are nocturnal; a morning application degrades all day before the target moves.</li>
              <li><strong>Do not buy:</strong> commercial earwig traps, ultrasonic repellers, bug zappers, essential-oil sprays, indoor foggers, grey-market US pesticides.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito Pest Product Guides &middot; independent Canadian research</p>
          </div>

          <div className="not-prose rounded-xl border-l-4 border-brand-500 bg-brand-50 p-5 mb-6">
            <p className="text-xs font-extrabold uppercase tracking-wider text-brand-700 mb-2">Two pages, two jobs</p>
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong>This page is the shelf</strong> &mdash; what Canada legally sells, what is worth buying, what to build instead of buying, and the label checks to run before you order.
              <br className="hidden sm:block" />
              <strong className="block mt-2">If you want the problem understood rather than shopped</strong> &mdash; the ear myth, the European earwig life cycle and why Ontario gets hit in late July, the moisture and harbourage root cause, and the full trapping protocol step by step &mdash; read <Link href="/blog/how-to-get-rid-of-earwigs-canada" className="text-emerald-700 underline font-semibold">how to get rid of earwigs in Canada</Link>. Most of that job is free, which is exactly why it deserves its own page.
            </p>
          </div>

          <SpecialistDisclosure pest="earwigs" />
        </div>
      </section>

      <section className="bg-white px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Decision Table</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">Pick in 60 Seconds: Your Situation &rarr; What to Buy</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            Earwig spending goes wrong in a predictable way &mdash; people buy a knockdown for a harbourage problem. Find your row instead.
          </p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm">
            <table className="min-w-[560px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Your situation</th>
                  <th className="px-4 py-3 text-left">Buy this</th>
                  <th className="px-4 py-3 text-left">Do not buy</th>
                  <th className="px-4 py-3 text-left">Get it</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">A few in the bathtub or by the back door</td>
                  <td className="px-4 py-3 text-gray-700">Door sweeps and a garage door bottom seal. This is an entry problem, not an infestation</td>
                  <td className="px-4 py-3 text-gray-700">A contact aerosol</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="door sweep garage door bottom seal weatherstrip" block>Sweeps and seals &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Something is chewing the dahlias or the lettuce</td>
                  <td className="px-4 py-3 text-gray-700">Nothing yet &mdash; build oil tins, and check with a flashlight at 10 p.m. that it is not slugs</td>
                  <td className="px-4 py-3 text-gray-700">A foliar spray at midday</td>
                  <td className="px-4 py-3 text-xs text-gray-400">Free &mdash; a tin and cooking oil</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">You want one product that genuinely kills</td>
                  <td className="px-4 py-3 text-gray-700">Registered insecticidal DE plus a bulb duster &mdash; dry crossing zones only</td>
                  <td className="px-4 py-3 text-gray-700">Food-grade or pool-grade DE</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="safers diatomaceous earth" block>Registered DE &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Dozens crossing the foundation nightly, right now</td>
                  <td className="px-4 py-3 text-gray-700">A Canadian-registered residual labelled for the outside of a building, applied at dusk to the foundation band</td>
                  <td className="px-4 py-3 text-gray-700">Whole-lawn broadcast</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="doktor doom residual insecticide" block>Registered residual &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Same problem every single August</td>
                  <td className="px-4 py-3 text-gray-700">Downspout extensions and gutter guards. The eavestrough is the nursery</td>
                  <td className="px-4 py-3 text-gray-700">Another season of spray</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="downspout extension gutter guard" block>Drainage kit &rarr;</BuyLink></td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">You cannot tell which entry point is live</td>
                  <td className="px-4 py-3 text-gray-700">Flat glue boards as instrumentation &mdash; the catch pattern points at the gap</td>
                  <td className="px-4 py-3 text-gray-700">A commercial &ldquo;earwig trap&rdquo;</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="insect glue board traps multi pack" block>Glue boards &rarr;</BuyLink></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <AwardRow tag={AMZ_TAG}
            heading="Our Picks — The Earwig Kit Worth Buying in Canada"
            awards={[
              {
                badge: 'Best Overall Killer',
                name: 'Safer’s Diatomaceous Earth + Bulb Duster',
                why: 'The registered earwig product that kills mechanically rather than chemically — an earwig that crosses a dry film loses moisture it cannot replace — so no earwig can develop resistance to it and the powder never expires. Buy the duster with it; a barely visible film is what kills, and you cannot lay one from the bag.',
                search: 'safers diatomaceous earth',
                featured: true,
                pros: ['Registered for domestic use in Canada — the PCP number is on the bag', 'Mechanical kill, so resistance cannot develop', 'One bag treats a whole house many times over'],
                cons: ['Goes inert the moment it is damp — reapply after rain', 'Wrong tool for wet mulch beds, which is where earwigs live'],
              },
              {
                badge: 'Best Knockdown for a Wave',
                name: 'Doktor Doom Residual Insecticide Spray',
                why: 'When dozens are crossing the foundation nightly, a Canadian-registered residual applied at dusk to the bottom of the wall and the band of ground in front of it buys you relief while the harbourage work catches up. Wilson One Shot and Raid Bug Barrier are the other Canadian options labelled for the outside of a building — confirm the PCP number and the use sites on whichever you pick.',
                search: 'doktor doom residual insecticide',
                pros: ['Labelled for the outside of a building, not only for plants', 'Drops the earwigs that cross the treated band that same night', 'Treats the band earwigs cross, not the whole lawn'],
                cons: ['Fixes nothing — the mulch bed keeps producing earwigs', 'Short residual here; the US long-residual chemistry is not on our shelves'],
              },
              {
                badge: 'Best Permanent Fix',
                name: 'Door Sweeps + Garage Door Bottom Seal',
                why: 'Kills nothing, ends more indoor earwig sightings than any product on this page. Earwigs are outdoor insects walking in through gaps, and a flat insect needs only a few millimetres — which makes the space under an exterior or garage door a primary entry route into a Canadian home.',
                search: 'door sweep garage door bottom seal weatherstrip',
                pros: ['One afternoon, permanent, zero chemicals', 'Also blocks spiders, cluster flies and winter heat loss', 'Cheapest genuinely permanent item in this guide'],
                cons: ['Does nothing about the population outside', 'Older or settled doors need a yearly check'],
              },
              {
                badge: 'Best Root-Cause Buy',
                name: 'Downspout Extensions + Gutter Guards',
                why: 'Nobody shopping for an earwig killer pictures this, and it is the buy that treats the cause. A clogged eavestrough is an elevated earwig nursery and a downspout dumping at the foundation keeps the bed below it permanently saturated — which is precisely the damp harbourage the whole population depends on. Fix the water and the population falls without a single pesticide.',
                search: 'downspout extension gutter guard',
                pros: ['Attacks the moisture source rather than the insect', 'One-time purchase that keeps paying every season', 'Also reduces basement damp, mould and silverfish pressure'],
                cons: ['Ladder work — not for everyone', 'Slower payoff than a knockdown spray'],
              },
              {
                badge: 'Best Monitoring',
                name: 'Flat Insect Glue Boards (Multi-Pack)',
                why: 'Instrumentation, not a cure. Boards laid tight against the baseboard in the basement, garage and behind exterior doors tell you which entry point is actually live and whether your sealing work succeeded — instead of guessing from how many you spotted in the bathtub.',
                search: 'insect glue board traps multi pack',
                pros: ['Catch pattern points straight at the live entry', 'A device, not a pesticide — kid and pet friendly placement', 'Cheap enough to lay a dozen at once'],
                cons: ['Measures the problem, does not solve it', 'Stops catching once dusty'],
              },
            ]}
            whichToBuy={
              <>
                <strong>Want the one product that genuinely kills earwigs?</strong> The <em>Best Overall</em> registered DE plus a bulb duster &mdash; full grade and technique detail in our <Link href="/blog/diatomaceous-earth-canada-buyers-guide">diatomaceous earth buyer&rsquo;s guide</Link>. <strong>Dozens crossing the foundation right now?</strong> Add the <em>Best Knockdown</em> residual at dusk, on the foundation band only &mdash; and check the use sites on the label, because Ortho&rsquo;s Canadian ECO line is directed at plants rather than at a house. Our <Link href="/blog/ortho-home-defense-canada-review">Ortho Home Defense Canada review</Link> covers what Americans recommend that you cannot buy or legally use here. <strong>Finding them indoors?</strong> The <em>Best Permanent Fix</em> sweeps end that outright. <strong>Same problem every single August?</strong> The <em>Best Root-Cause Buy</em> is the one that stops it recurring.
              </>
            }
          />
        </div>
      </section>

      <section className="bg-gradient-to-br from-emerald-50 to-white border-b border-emerald-200 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Shelf Check &middot; Updated July 2026</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">What the Canadian Shelf Actually Sells &mdash; and What It Does Not</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            &ldquo;Earwig killer&rdquo; is not one product category &mdash; it is seven different mechanisms sold under one search term, and most of the disappointment comes from buying a mechanism that cannot physically reach the insect. Here is what each one is, plus the Canadian availability note that decides whether you can legally buy it at all.
          </p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm">
            <table className="min-w-[560px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Method</th>
                  <th className="px-4 py-3 text-left">How it kills</th>
                  <th className="px-4 py-3 text-left">Reaches the population?</th>
                  <th className="px-4 py-3 text-left">Canada</th>
                  <th className="px-4 py-3 text-left">Verdict</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Oil pitfall trap<br /><span className="font-normal text-xs text-gray-500">tin + oil + soy sauce</span></td>
                  <td className="px-4 py-3 text-gray-700">Attracts by odour, drowns on contact &mdash; no chemistry involved</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Yes</strong> &mdash; it works where they forage, at night</td>
                  <td className="px-4 py-3 text-gray-700">No registration needed &mdash; it is a device</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Best overall.</strong> Costs nothing</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Insecticidal DE<br /><span className="font-normal text-xs text-gray-500">Safer&rsquo;s, Knock Down, Doktor Doom</span></td>
                  <td className="px-4 py-3 text-gray-700">Abrades and absorbs the waxy cuticle &mdash; the insect dries out</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">Partly</strong> &mdash; only on dry crossings</td>
                  <td className="px-4 py-3 text-gray-700">PMRA-registered, sold nationally</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Best purchase.</strong> Dry zones only</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Perimeter liquid / RTU<br /><span className="font-normal text-xs text-gray-500">Doktor Doom Residual, One Shot, Bug Barrier</span></td>
                  <td className="px-4 py-3 text-gray-700">Contact toxicant on a treated band, with short residual</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">Partly</strong> &mdash; only the ones that cross it</td>
                  <td className="px-4 py-3 text-gray-700">Reduced-risk lines only &mdash; check the label&rsquo;s use sites</td>
                  <td className="px-4 py-3 text-gray-700">Useful knockdown, fixes nothing</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Perimeter granules<br /><span className="font-normal text-xs text-gray-500">carrier pellet + active</span></td>
                  <td className="px-4 py-3 text-gray-700">Active releases as the granule wets, treating a band of ground</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">Partly</strong> &mdash; band only</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">Thin market</strong> &mdash; verify the PCP number</td>
                  <td className="px-4 py-3 text-gray-700">Fine if registered; not a priority buy</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Contact aerosol<br /><span className="font-normal text-xs text-gray-500">crawling-insect spray</span></td>
                  <td className="px-4 py-3 text-gray-700">Kills what it directly wets, in seconds</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-red-700">No</strong> &mdash; one insect at a time</td>
                  <td className="px-4 py-3 text-gray-700">Widely available and registered</td>
                  <td className="px-4 py-3 text-gray-700">For the one in the bathtub. Vacuum instead</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Soapy water<br /><span className="font-normal text-xs text-gray-500">dish soap in a bucket or sprayer</span></td>
                  <td className="px-4 py-3 text-gray-700">Breaks surface tension and the cuticle on direct contact</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-red-700">No</strong> as a spray &mdash; <strong className="text-emerald-700">yes</strong> as a kill bucket</td>
                  <td className="px-4 py-3 text-gray-700">Free</td>
                  <td className="px-4 py-3 text-gray-700">Your trap-emptying bucket, not a treatment</td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Exclusion hardware<br /><span className="font-normal text-xs text-gray-500">sweeps, seals, silicone, downspouts</span></td>
                  <td className="px-4 py-3 text-gray-700">Kills nothing &mdash; removes the entry and the moisture</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Ends the indoor problem entirely</strong></td>
                  <td className="px-4 py-3 text-gray-700">Hardware &mdash; no rules at all</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">The only permanent fix</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Availability accurate as of July 2026. Before buying any pesticide, confirm the Amazon.ca listing is sold and shipped within Canada and that the label shows a PCP (Pest Control Products) registration number.
          </p>
          <div className="mt-5 rounded-xl bg-amber-50 border-l-4 border-amber-400 p-4">
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong className="text-amber-900">⚠️ Notice what is missing from that table: bait.</strong> Ants and cockroaches have baits because they share food socially and carry a toxicant home. Earwigs do not &mdash; there is no colony to poison. That is why every earwig product is contact-only, and why trapping is not the &ldquo;weak&rdquo; option here: it uses the same one-insect-at-a-time mechanism every product does, for free. The biology behind that, and the full nightly trapping protocol, is in our <Link href="/blog/how-to-get-rid-of-earwigs-canada" className="text-emerald-700 underline font-semibold">how to get rid of earwigs guide</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Earwig Buying Checklist &mdash; Quick Reference</h2>
          <div className="rounded-xl border border-navy-100 overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Best product you can buy', 'PMRA-registered insecticidal DE (Safer’s, Knock Down, Doktor Doom Be Green) + bulb duster'],
                  ['Buy the duster too', 'Not optional — a barely visible film kills, and you cannot lay one from the bag'],
                  ['Best method overall', 'Oil pitfall trap — a tin sunk to soil level, run nightly for 2–3 weeks. Free'],
                  ['Do not buy', 'Commercial “earwig traps” — a tin of oil does the same job for nothing'],
                  ['Is there an earwig bait', 'No — earwigs are not social insects, so no product travels through a colony'],
                  ['Label check #1', 'A PCP registration number printed on the Canadian label'],
                  ['Label check #2', 'A use site that matches your job — plant-directed is not foundation-directed'],
                  ['Canadian lines labelled for a building perimeter', 'Doktor Doom Residual, Wilson One Shot, Raid Bug Barrier — Ortho Bug B Gon ECO is plant-directed here'],
                  ['Not available in Canada', 'Ortho Home Defense Max (bifenthrin) — not registered here, and not on Ontario’s permitted list for cosmetic lawn and garden use'],
                  ['DE limitation', 'Inert once damp — dry crossings only, reapply after rain'],
                  ['Granule reality check', 'Thin Canadian consumer market; verify the PCP number before buying'],
                  ['Best time of day to apply', 'Dusk — earwigs are strictly nocturnal'],
                  ['Peak season (southern Ontario)', 'Late July through September; first sightings from late June'],
                  ['Ends indoor sightings', 'Door sweeps, garage door bottom seal, exterior silicone'],
                  ['Ends the recurrence', 'Downspout extensions, clear eavestroughs, mulch pulled 15–30 cm off the foundation'],
                  ['Waste of money', 'Ultrasonic repellers, bug zappers, essential-oil sprays, indoor foggers, grey-market US pesticides'],
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

          <h2>Why the Earwig Aisle Is So Thin</h2>
          <p>Shopping for an earwig killer feels strangely bare compared with the ant and cockroach sections, and there is a structural reason worth understanding before you spend anything: <strong>there is no earwig bait, and there never will be.</strong></p>
          <p>Ant and cockroach control is dominated by baiting because those insects share food socially &mdash; a forager takes a slow-acting toxicant back and it moves through the colony, killing insects you never see. Earwigs are not eusocial. A female earwig guards her own eggs and tends her own first-stage nymphs, but there is no colony, no food-sharing network, and nothing for a bait to travel through. Every single earwig has to individually contact the thing that kills it.</p>
          <p>That one fact reorganises the entire shelf. Every earwig product is a one-insect-at-a-time mechanism, which means the only two questions worth asking about anything in your cart are <em>how many earwigs will physically touch this</em> and <em>how long does it stay lethal</em>. A dry film of diatomaceous earth across a threshold scores well on both. A contact aerosol scores well on the first, for the seconds it stays wet. And an oil tin sunk into the bed &mdash; which pulls earwigs in by odour, at night, in the exact place they live &mdash; quietly outscores nearly everything you can buy, which is why the honest version of this page has to start by talking you out of a purchase.</p>

          <p className="not-prose text-sm text-gray-600 mb-1">Check current Canadian availability of the short list that is genuinely worth buying:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="safers diatomaceous earth">Safer&rsquo;s DE &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="diatomaceous earth duster applicator">Bulb duster &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="door sweep garage door bottom seal weatherstrip">Door sweeps &rarr;</BuyLink>
          </div>

          <h2>The Purchase to Skip: Commercial &ldquo;Earwig Traps&rdquo;</h2>
          <p>We are an affiliate publisher and we will still say it plainly: do not buy an earwig trap. There is no widely available consumer trap engineered for this insect the way the wasp market has genuine lure traps. What gets sold under the name is a tight dark space or a drowning liquid &mdash; which is a rolled newspaper tube or a tin of cooking oil, priced up.</p>
          <p>Build the tin instead. Sink a shallow can &mdash; tuna or cat food &mdash; so the rim sits flush with soil level, add a centimetre or two of vegetable oil plus a splash of soy sauce or bacon grease, and place it between the harbourage and whatever you are protecting. The fermented, oily odour is the attractant; the oil defeats surface tension so nothing climbs out. Use a lidded container with entry holes at soil level if you have a curious dog or a toddler. Full technique &mdash; rim height, placement, the rolled-newspaper variant, and why running traps for two to three consecutive nights is worthless while two to three consecutive <em>weeks</em> works &mdash; is in <Link href="/blog/how-to-get-rid-of-earwigs-canada">our earwig guide</Link>.</p>
          <p>The one off-the-shelf trap worth money is a multi-pack of flat glue boards, and you buy those as instrumentation rather than control: laid tight to the baseboard in the basement, garage and behind exterior doors, the catch pattern tells you which gap is actually live and whether your sealing worked.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="insect glue board traps multi pack">Check glue board multi-packs on Amazon.ca &rarr;</BuyLink>
          </div>

          <h2>The Product Worth Buying: Which DE, and What Goes With It</h2>
          <p>If you want a product that genuinely kills earwigs, this is it. Diatomaceous earth is fossilised diatom silica ground into an abrasive, ultra-absorbent powder that scours and soaks up the waxy cuticle layer holding an insect&rsquo;s moisture in. An earwig that crosses a dry film loses water it cannot replace and dies, typically within a day or two rather than instantly. Because nothing is being metabolised, no earwig can develop resistance, and the powder does not expire.</p>
          <p><strong>The buying decision here is legal, not mineralogical.</strong> Insecticidal DE is a registered pesticide in Canada, and the registered consumer brands you will actually find are <strong>Safer&rsquo;s Diatomaceous Earth</strong>, <strong>Knock Down</strong>, and <strong>Doktor Doom Be Green</strong>. Each carries a PCP registration number and label directions that legally govern where and how you may apply it. &ldquo;Food-grade&rdquo; DE sold as an anti-caking agent or feed additive is chemically similar and legally different: no registration, no PCP number, no pest-use directions. Never buy pool-grade DE for pest control &mdash; it has been calcined, which converts much of the silica to a crystalline form that is a genuine respiratory hazard, and which also makes it worse at absorbing insect wax.</p>
          <p><strong>Budget for the duster in the same order.</strong> What kills is a thin, barely visible film; insects detect and walk around a visible pile, so a heavy application is worse than a light one, and you cannot lay a light one out of the bag. A bulb or hand duster is inexpensive and it is the difference between a bag that works and a bag that sits in the garage. Wear a dust mask while applying.</p>
          <p><strong>Where it may legally and usefully go</strong> &mdash; and this is a severe, pest-specific limit rather than a footnote, because DE stops working the instant it is damp and earwigs live in wet mulch and dew-soaked soil. Dry crossings only: under exterior door thresholds and along garage sill plates; inside crawl spaces and along unfinished basement perimeters; under decks, porches and overhangs the rain does not reach; window wells once the leaves are out of them; and the bare gravel band at the foundation, which is exactly why creating that band is worth the hour with a rake. Reapply after rain and heavy dew. Grade differences and full registered-brand comparison are in our <Link href="/blog/diatomaceous-earth-canada-buyers-guide">Canadian diatomaceous earth buyer&rsquo;s guide</Link>.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="safers diatomaceous earth">Check Safer&rsquo;s DE and duster kits on Amazon.ca &rarr;</BuyLink>
          </div>

          <h2>Perimeter Sprays and Granules: What Canada Actually Allows You to Buy</h2>
          <p>This is where most people arrive after searching &ldquo;earwig killer,&rdquo; and it is where the Canadian shelf diverges hardest from the American one. The product most Canadians are actually looking for &mdash; the bifenthrin <strong>Ortho Home Defense Max Insect Killer for Indoor &amp; Perimeter</strong> that dominates US hardware stores &mdash; is <strong>not registered with Health Canada&rsquo;s Pest Management Regulatory Agency</strong>, so it is not legally sold at Canadian Tire, Home Depot Canada, or Amazon.ca. Provincial rules narrow it further, and they are not one national rule. Ontario limits cosmetic lawn and garden use to a permitted list of lower-risk active ingredients &mdash; the old Class 7-to-11 lettering has been retired in favour of that list &mdash; and a synthetic pyrethroid like bifenthrin is not on it. Quebec runs a separate regime entirely, under its own <em>Code de gestion des pesticides</em>, which restricts a narrower, lawn-focused set of ingredients rather than using Ontario&rsquo;s classes. The practical result for a homeowner is the same in both: a product that is an ordinary hardware-store buy in Buffalo is unregistered here, and that kind of chemistry is not something you may apply cosmetically to a lawn or garden in Mississauga.</p>
          <p>What you can legally buy here for crawling insects around a home is the reduced-risk end of the market &mdash; and the shortlist is narrower than it first looks, because the <em>use site</em> printed on the label matters as much as the pest list. <strong>Doktor Doom Residual</strong>, <strong>Wilson One Shot</strong>, and <strong>Raid Bug Barrier</strong> are sold in Canada and labelled for treating the outside of a building, which is the job here. Ortho&rsquo;s Canadian <strong>Bug B Gon ECO</strong> line is registered too, but read what it is actually for: the Canadian ECO products are directed at plants &mdash; garden and ornamental plants, vegetables, fruit trees, greenhouse ornamentals &mdash; not at a foundation wall. It belongs in a garden bed, not in your perimeter band, and putting it there anyway is exactly the label violation this guide keeps telling you to avoid. Whichever registered structural product you use, it will kill earwigs it contacts and give a short residual on a treated band. None will give you the multi-week barrier that American guides describe, because that chemistry is not on our consumer shelves. We break the whole line down brand by brand in our <Link href="/blog/ortho-home-defense-canada-review">Ortho Home Defense Canada review</Link>.</p>
          <p>Granules deserve a specific note because the brief people arrive with is usually &ldquo;spread granules around the foundation.&rdquo; A granule is a delivery format, not an active ingredient &mdash; a carrier pellet coated with insecticide that releases as it wets from dew, rain, or watering-in. In principle it is a sensible way to treat a band of ground you cannot easily spray. In Canadian practice, the consumer granular crawling-insect market is thin for exactly the reason above: the long-residual pyrethroids that make American granules effective are largely unavailable to homeowners here. If you find one, the test is the same as for anything else &mdash; a <strong>PCP registration number on the label</strong>, a listing that is sold and shipped within Canada, and a use printed on the label that matches what you intend to do.</p>
          <p>If you do buy a registered perimeter product, three rules decide whether it does anything: <strong>apply at dusk</strong>, because earwigs are strictly nocturnal and a morning application spends the day degrading before the target moves; <strong>treat the band, not the lawn</strong> &mdash; the bottom 30&ndash;45 cm of the foundation wall, the ground 30&ndash;60 cm out from it, door thresholds and around window wells; and remember that <strong>the label is the law</strong>, overriding every tip online including ours. The use sites, setbacks from water features and edible beds, re-entry intervals for children and pets, and the approved pest list are all binding. A product can be perfectly legal and still be the wrong product, because the pest is on the label and the place you want to spray is not.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="doktor doom residual insecticide">Check Doktor Doom Residual on Amazon.ca &rarr;</BuyLink>
          </div>

          <h2>The Hardware List: What Ends It Instead of Killing It</h2>
          <p>The highest-return item most Canadians can buy for earwigs kills nothing at all, and it belongs on a page about killers for a specific reason: earwigs cannot establish indoors. A heated Canadian house is far too dry, and there is no food base comparable to the decaying matter, algae and small insects they eat outside. Every earwig in your bathtub is an incidental invader that walked in through a gap and would have died or left within days anyway. You are not buying a treatment. You are buying a door.</p>
          <ul>
            <li><strong>Door sweeps for every exterior door, plus a garage door bottom seal.</strong> Measure the door width and check the threshold type before ordering. A flat insect needs a few millimetres, which makes this the highest-yield purchase on this page for indoor sightings.</li>
            <li><strong>Exterior-grade silicone.</strong> For hose bibs, dryer vents, AC line sets, cable and gas entries, foundation cracks, and the seam where a deck ledger meets the wall.</li>
            <li><strong>Window-well covers, and clean gravel.</strong> Empty the leaves, add gravel so the well drains, fit a cover. In a finished basement this is frequently the entire fix by itself.</li>
            <li><strong>Downspout extensions and gutter guards.</strong> The genuine root-cause buy. A packed eavestrough is an elevated earwig nursery, and a downspout dumping at the wall keeps the bed below it saturated all season.</li>
            <li><strong>Nothing, for the mulch line.</strong> Pulling mulch back 15&ndash;30 cm from the foundation and leaving a bare band of gravel or stone is the single change that outranks every product here, and it needs a rake you already own. It is also the one outdoor location where a DE treatment actually stays dry enough to work.</li>
          </ul>
          <p>If earwigs keep appearing indoors for weeks despite good sealing, stop buying pest products and start looking for water &mdash; a wet crawl space, a leaking foundation wall, a slow plumbing drip. In a chronically damp basement a dehumidifier does the same structural favour it does against <Link href="/blog/how-to-get-rid-of-silverfish-canada">silverfish</Link>; our <Link href="/blog/best-dehumidifier-for-basement-canada">basement dehumidifier guide</Link> covers sizing for Canadian basements.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="downspout extension gutter guard">Check downspout extensions and gutter guards &rarr;</BuyLink>
          </div>

          <h2>Buying for a Garden, Where the Label Points the Other Way</h2>
          <p>If earwigs are chewing dahlias, marigolds, zinnias, lettuce, basil or seedlings, the purchase decision changes &mdash; and the first thing to buy is nothing. Slugs produce almost identical ragged holes, and the reliable diagnosis is a flashlight at ten or eleven at night rather than a product. Whatever is on the leaf is your answer.</p>
          <p>If it is earwigs, trapping is the right response here specifically because it puts no chemistry near your food: ring the affected plants with oil tins and newspaper tubes for two to three weeks, water in the morning so the bed is at its driest during the hours earwigs forage, and use collars on vulnerable seedlings. If you do reach for a registered product in a bed, note that the label points the opposite way from the perimeter section above. Ortho&rsquo;s Canadian <strong>Bug B Gon ECO</strong> line is the plant-directed one &mdash; its Canadian labels name garden and ornamental plants, vegetables, fruit trees and greenhouse ornamentals as use sites &mdash; while the structural products above are labelled for the outside of a building and not for your lettuce. And temper the expectation even where it is the right product: the ECO line is a potassium-salt soap or a canola-oil-and-pyrethrin contact spray, so it kills what it directly wets while it is wet and leaves essentially nothing behind, which is why a spray over a plant an earwig will not visit until midnight mostly waters the plant.</p>
          <p>One argument against the sale, because it is true: <strong>you may not want to eliminate them.</strong> European earwigs are meaningful predators of aphids, mites and insect eggs, and in commercial pear and apple production they are deliberately conserved because they help suppress pests like pear psylla and woolly apple aphid. Trap hard where they are chewing your dahlias; leave the ones living in the shrub border to work.</p>

          <h2>What Not to Buy at All</h2>
          <p>Not buying these is worth more than most of what you could buy:</p>
          <ul>
            <li><strong>Purpose-marketed &ldquo;earwig traps.&rdquo;</strong> A tight dark space or a drowning liquid &mdash; a rolled newspaper and a tin of oil, priced up.</li>
            <li><strong>Ultrasonic plug-in repellers.</strong> No credible evidence for any household pest. We took this apart in our <Link href="/blog/ultrasonic-pest-repellers-do-they-work">ultrasonic pest repeller review</Link>.</li>
            <li><strong>Bug zappers.</strong> They electrocute flying insects drawn to UV. Earwigs are ground-crawling nocturnal insects that never approach one, while the zapper kills large numbers of harmless moths and beetles. See <Link href="/blog/bug-zappers-canada-do-they-work">do bug zappers work in Canada</Link>.</li>
            <li><strong>Essential-oil and vinegar sprays.</strong> A few hours of repellency while the surface stays wet, no residual, no effect on the population under the mulch, and a real risk of burning foliage.</li>
            <li><strong>Indoor total-release foggers.</strong> The earwigs are produced outside. Fogging the basement treats the wrong building &mdash; all of the residue, none of the source.</li>
            <li><strong>Grey-market US pesticides.</strong> A marketplace listing shipping an unregistered American formula into Canada is not a bargain: it is an unregistered pesticide with a US-only label, it can be held at the border, and its cosmetic outdoor use may be prohibited in your province regardless.</li>
            <li><strong>Whole-lawn broadcast insecticide.</strong> Ineffective against an insect that lives at the foundation and in beds, wasteful, and restricted for cosmetic use across much of Canada.</li>
          </ul>

          <h2>When to Stop Buying and Call Someone</h2>
          <p>For the overwhelming majority of Canadian households, earwigs do not warrant a paid pest-control program, and we would rather lose the referral than pretend otherwise &mdash; BuzzSkito treats mosquitoes and ticks and does not sell earwig service. A registered bag of DE, a bulb duster, two door sweeps and a tube of exterior silicone is a single modest hardware run, and the traps doing the heaviest lifting are made from tins already in your recycling. Any company that quotes a recurring spray schedule without first walking your mulch beds, window wells, downspouts and eavestroughs is selling the wrong thing.</p>
          <p>The situations that genuinely justify a call: earwigs entering by the dozens daily for weeks despite proper sweeps, caulking and mulch pullback &mdash; a pattern that usually points at a structural moisture or drainage fault, where the right professional may be a waterproofing contractor rather than an exterminator; a food premises where any insect presence is a health-inspection issue; a nursery or market garden taking real crop loss; or ladder work on eavestroughs and window wells you should not be doing yourself. For what general-pest work typically costs in Canada, so you can sanity-check a quote, see our <Link href="/pest-control-cost-canada">Canadian pest control cost guide</Link>.</p>

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
            <li><strong>Start here for the method rather than the shopping:</strong> <Link href="/blog/how-to-get-rid-of-earwigs-canada">How to Get Rid of Earwigs in Canada — Traps, Moisture, and the Ear Myth</Link></li>
            <li><Link href="/blog/diatomaceous-earth-canada-buyers-guide">Diatomaceous Earth in Canada — Which Brands Are PMRA-Registered</Link></li>
            <li><Link href="/blog/ortho-home-defense-canada-review">Ortho Home Defense Canada — What You Can Actually Buy Here</Link></li>
            <li><Link href="/blog/best-silverfish-traps">Silverfish Traps in Canada — Which Type, How Many, Where They Go</Link></li>
            <li><Link href="/blog/best-centipede-killer-canada">Centipede Killer Canada — What to Buy, and in What Order</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-silverfish-canada">How to Get Rid of Silverfish in Canada — The Humidity Fix</Link></li>
            <li><Link href="/blog/best-dehumidifier-for-basement-canada">Best Basement Dehumidifier in Canada — Sizing Guide</Link></li>
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
        heading="Mosquitoes and Ticks Are Our Actual Job"
        subtext="We don't treat earwigs — but the damp harbourage and drainage faults behind them are the same ones driving mosquito and tick pressure in your yard. Get a free assessment across 19 GTA cities."
      />
    </>
  )
}
