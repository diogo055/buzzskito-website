import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import BuyLink from '@/components/BuyLink'
import AwardRow from '@/components/AwardRow'
import StickyBuyBar from '@/components/StickyBuyBar'
import FreshnessStamp from '@/components/FreshnessStamp'
import AuthorByline from '@/components/AuthorByline'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import SpecialistDisclosure from '@/components/SpecialistDisclosure'
import { tagForSlug } from '@/lib/amazon-clusters'

const SLUG = 'bed-bug-spray-canada'
const DATE = '2026-07-16'
const UPDATED = '2026-07-16'
const TITLE = 'Best Bed Bug Spray & Killer in Canada (2026)'
const META_TITLE = 'Best Bed Bug Spray & Killer Canada 2026 (PMRA)'

const FAQS = [
  {
    question: 'What is the best bed bug spray in Canada?',
    answer: 'For most Canadian households the best combination is Doktor Doom Sleep Tight for direct contact spraying on mattresses, box springs, and bed frames, paired with a permethrin-based residual like Doktor Doom Pro Max for baseboards, bed legs, and furniture perimeters. Both are PMRA domestic-class registered, meaning they carry a Pest Control Products (PCP) registration number and are legal for consumer use in Canada. Knock Down Bed Bug Killer and Konk bed bug sprays are solid PMRA-registered alternatives when Doktor Doom is out of stock. No spray alone eliminates an infestation — pair any spray with steam, mattress encasements, and interceptor traps.',
  },
  {
    question: 'What is the strongest bed bug killer available in Canada?',
    answer: 'The strongest legal chemical option for a Canadian consumer is a permethrin residual such as Doktor Doom Pro Max applied to bed frames, baseboards, and furniture perimeters — but no domestic-class spray sold in Canada is dramatically more potent than the others, because PMRA domestic-class registration caps which actives and concentrations a homeowner may buy, and nearly all of them are pyrethrins or pyrethroids. The genuinely strongest tools are not sprays at all: heat kills every life stage including eggs within minutes at a sustained 50 degrees Celsius, and desiccant dusts such as amorphous silica gel kill by dehydration, a physical mechanism bed bugs cannot become resistant to. The US products marketed online as the strongest bed bug killer — Crossfire, Temprid FX, Bedlam Plus — carry no PMRA registration and are not legal to buy or use in Canada.',
  },
  {
    question: 'What chemical kills bed bugs and their eggs?',
    answer: 'Very few chemicals do both. The pyrethrins and pyrethroids in nearly every PMRA-registered Canadian bed bug spray kill adults and nymphs on contact but do not reliably penetrate the egg shell, which is why eggs laid before treatment hatch six to ten days later into an apparently treated room. The exception among consumer sprays is EcoRaider, a plant-oil formulation with independent Rutgers University testing behind it that kills eggs on direct contact. Desiccant dusts such as amorphous silica gel and diatomaceous earth kill crawling bugs by dehydration but do not kill eggs either. The only method that reliably kills every life stage, eggs included, is heat: surface steam or a sustained core temperature near 50 degrees Celsius kills adults, nymphs, and eggs within minutes.',
  },
  {
    question: 'Is Crossfire bed bug spray legal in Canada?',
    answer: 'No. Crossfire Bed Bug Concentrate (clothianidin + metofluthrin) is a US-registered product with no PMRA registration in Canada. Importing, selling, or using an unregistered pesticide violates the federal Pest Control Products Act. The same applies to Temprid FX, Bedlam Plus, and Transport GHP — all common recommendations on US websites, none of them legal for consumer purchase or use in Canada. If a listing ships one of these to a Canadian address, it is grey-market and the product can be seized at the border.',
  },
  {
    question: 'Do bed bug sprays kill eggs?',
    answer: 'Mostly no. Contact sprays kill the bugs they directly wet, but bed bug eggs have a protective shell that most domestic-class pyrethrin and pyrethroid formulations penetrate poorly. Eggs hatch in 6 to 10 days at room temperature, which is why a single spray treatment almost always sees a rebound one to two weeks later. Steam at the surface (typically 70 to 100 degrees Celsius from a proper steamer) kills eggs on contact, which is why steam plus repeat spraying every 7 to 14 days beats spray alone.',
  },
  {
    question: 'Can I import bed bug spray from the United States?',
    answer: 'No. Under the Pest Control Products Act it is illegal to import or use pest control products that are not registered with Health Canada’s PMRA, with only narrow exemptions that do not cover US consumer insecticides. Border seizures of pesticides do happen, and using an unregistered product means no Canadian label directions, no PMRA safety review of that formulation, and no recourse if something goes wrong. Every product we recommend is registered and available from Canadian retailers.',
  },
  {
    question: 'Are bed bug foggers or bug bombs a good idea?',
    answer: 'No — even the PMRA-registered ones. Total-release foggers rarely penetrate the cracks, seams, and voids where bed bugs actually hide, and research published in the Journal of Economic Entomology found foggers had little to no effect on bed bugs, partly because the fine mist does not reach harbourages. Worse, the repellent effect of the pyrethroid mist can scatter bed bugs deeper into walls and into adjoining rooms, turning one infested bedroom into three. Targeted crack-and-crevice spraying plus steam is safer and far more effective.',
  },
  {
    question: 'Does rubbing alcohol kill bed bugs?',
    answer: 'Isopropyl alcohol kills some bed bugs on direct contact, but studies from Rutgers University found even 91 percent alcohol killed only about half of sprayed bugs, it has zero residual effect, and it is a serious fire hazard — there are documented house fires started by alcohol-based DIY bed bug treatments near pilot lights and cigarettes. A PMRA-registered spray costs a similar amount per can and is both safer and more effective. Skip the alcohol.',
  },
  {
    question: 'How often should I reapply bed bug spray?',
    answer: 'Follow the label on your specific product, but the practical rhythm for domestic-class sprays is a full re-treatment every 7 to 14 days until you have gone at least four to six weeks with no live bugs, no fresh fecal spotting, and no new bites. The interval matters because eggs laid before your first treatment hatch over the following 6 to 10 days, and the newly hatched nymphs must contact fresh product. Interceptor traps under the bed legs are the cheapest way to verify whether each round is still catching bugs.',
  },
  {
    question: 'Is it safe to spray a mattress you sleep on?',
    answer: 'Only with a product whose label explicitly permits mattress application — Doktor Doom Sleep Tight is labelled for direct use on mattresses and box springs, which is a big part of why we recommend it. Spray seams, tufts, and edges (not the whole sleeping surface), let it dry completely before remaking the bed, and then install a certified bed-bug-proof encasement over the mattress and box spring so you never need to spray the sleeping surface again. Never use a general residual yard or perimeter spray on bedding.',
  },
  {
    question: 'Do bed bugs become resistant to sprays?',
    answer: 'Yes, and it is the biggest weakness of every consumer spray. Published resistance surveys have found knockdown-resistance (kdr) gene mutations in the large majority of North American bed bug populations tested — some studies put it above 80 percent — which makes pyrethrins and pyrethroids far less lethal than they were 20 years ago. This is exactly why our honest position is that sprays are a supporting tool: heat, steam, encasements, and interceptors work regardless of resistance status.',
  },
  {
    question: 'How much does professional bed bug treatment cost in Canada?',
    answer: 'Typical Canadian pricing runs roughly $300 to $600 per room for conventional chemical treatment (usually two to three visits) and about $700 to $1,500 or more for whole-unit heat treatment, depending on the city and the size of the home. That sounds steep next to a $15 to $35 can of spray, but for established infestations — bugs in multiple rooms, bugs inside walls, or repeated DIY failures — a licensed structural exterminator with commercial-class products and heat equipment is usually cheaper than months of failed DIY rounds.',
  },
  {
    question: 'What kills bed bugs permanently?',
    answer: 'Heat is the only thing that kills every life stage — adults, nymphs, and eggs — on contact: sustained core temperatures of about 50 degrees Celsius kill all stages within minutes, which is why professional heat treatments and steamers are so effective. A permanent result comes from stacking methods: steam the bed and furniture, encase the mattress and box spring, isolate the bed with interceptor traps, launder and hot-dry fabrics, and use PMRA-registered spray as the residual backstop. Any single method used alone, spray included, has a high failure rate.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'The strongest PMRA-legal bed bug sprays and killers sold in Canada, what each one actually kills, and why US picks like Crossfire are illegal here.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
})

const AMZ_TAG = tagForSlug('bed-bug-spray-canada')

export default function BedBugSprayCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Independent Canadian guide to PMRA domestic-class bed bug sprays — what is legal, what actually works, and what to use alongside them.', slug: SLUG, datePublished: DATE })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Bed Bug Spray Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Bed Bug Spray Canada</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">Every spray on this page is PMRA domestic-class registered and sold in Canada. We also cover the US products we refuse to recommend — and what sprays honestly can and can&rsquo;t do against a bed bug infestation.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <StickyBuyBar tag={AMZ_TAG} name="Doktor Doom Sleep Tight bed bug spray" search="doktor doom sleep tight bed bug spray" label="Best PMRA-legal pick" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">The best bed bug spray legally available in Canada is Doktor Doom Sleep Tight — it&rsquo;s PMRA-registered, labelled for direct use on mattresses and box springs, and widely stocked on Amazon.ca. Pair it with a permethrin-based residual (Doktor Doom Pro Max) for baseboards and bed frames, and treat every spray as a supporting tool: steam, encasements, and interceptor traps do the heavy lifting.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>Legal Canadian sprays carry a Pest Control Products (PCP) registration number on the label — no PCP number means it is not legal to sell or use in Canada.</li>
              <li>US favourites like Crossfire, Temprid FX, and Bedlam Plus have zero PMRA registration — importing them violates the federal Pest Control Products Act.</li>
              <li>Resistance surveys have found pyrethroid knockdown-resistance genes in over 80% of tested North American bed bug populations, which is why contact sprays alone routinely fail.</li>
              <li>There is no &ldquo;strongest bed bug killer&rdquo; sold to Canadian consumers — every registered domestic-class spray is a pyrethrin or a pyrethroid, and heat out-kills all of them.</li>
              <li>Bed bug eggs hatch in 6&ndash;10 days and most domestic sprays don&rsquo;t kill them — plan on re-treating every 7&ndash;14 days for 4&ndash;6 weeks.</li>
              <li>All life stages, eggs included, die within minutes at a sustained 50&deg;C — heat and steam kill what sprays miss.</li>
              <li>Canadian market range: about $12&ndash;$35 per can for domestic-class sprays; professional treatment runs roughly $300&ndash;$600 per room (chemical) or $700&ndash;$1,500+ (heat).</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito Pest Product Guides &middot; independent Canadian research</p>
          </div>
          <SpecialistDisclosure pest="bed bugs" />
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">PMRA-Registered Bed Bug Sprays Compared</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">All four products below are domestic-class registered with Health Canada&rsquo;s Pest Management Regulatory Agency and available from Canadian retailers. Actives and label directions change between formulation updates — always confirm the PCP number and directions on the can you actually buy.</p>
          <div className="rounded-xl border border-navy-100 overflow-hidden bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Product</th>
                  <th className="px-4 py-3 text-left">Active class</th>
                  <th className="px-4 py-3 text-left">Kill type</th>
                  <th className="px-4 py-3 text-left">Mattress use</th>
                  <th className="px-4 py-3 text-left">Best for</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Doktor Doom Sleep Tight', active: 'Pyrethrins (plant-derived)', kill: 'Contact + short residual', mattress: 'Yes — labelled for mattresses & box springs', best: 'Direct treatment of the bed itself' },
                  { name: 'Doktor Doom Pro Max', active: 'Permethrin (pyrethroid)', kill: 'Residual (weeks on surfaces)', mattress: 'No — perimeter surfaces only', best: 'Baseboards, bed legs, frames, furniture perimeters' },
                  { name: 'Knock Down Bed Bug Killer', active: 'Pyrethrin/pyrethroid aerosol', kill: 'Contact + short residual', mattress: 'Check current label', best: 'Crack-and-crevice spot treatment' },
                  { name: 'Konk Bed Bug Spray', active: 'Pyrethrin-based aerosol', kill: 'Contact', mattress: 'Check current label', best: 'Backup contact spray when others are out of stock' },
                ].map(({ name, active, kill, mattress, best }) => (
                  <tr key={name} className="border-b border-navy-50 last:border-0">
                    <td className="px-4 py-3 font-bold text-brand-800">{name}</td>
                    <td className="px-4 py-3 text-gray-800">{active}</td>
                    <td className="px-4 py-3 text-gray-800">{kill}</td>
                    <td className="px-4 py-3 text-xs text-gray-600">{mattress}</td>
                    <td className="px-4 py-3 text-xs text-gray-600">{best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">Domestic-class bed bug sprays in Canada generally run $12&ndash;$35 per can at retail. None of them kill eggs reliably — budget for repeat applications.</p>
        </div>
      </section>

      <section className="bg-white px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <AwardRow tag={AMZ_TAG}
            heading="Our Picks — PMRA-Legal Bed Bug Sprays in Canada"
            awards={[
              {
                badge: 'Best Overall',
                name: 'Doktor Doom Sleep Tight',
                why: 'The only widely stocked Canadian spray labelled for direct use on mattresses and box springs — a plant-derived pyrethrin that kills on contact, dries fast, and won’t stain most fabrics.',
                search: 'doktor doom sleep tight bed bug spray',
                score: 8.6,
                featured: true,
                pros: ['Labelled for mattresses & box springs', 'PMRA domestic-class registered', 'Water-based, fast-drying'],
                cons: ['Contact kill with short residual', 'Won’t reliably kill eggs'],
              },
              {
                badge: 'Best Residual',
                name: 'Doktor Doom Pro Max',
                why: 'A permethrin residual for baseboards, bed legs, frames, and furniture perimeters — it keeps killing bugs that cross treated surfaces for weeks, the piece a contact-only spray misses.',
                search: 'doktor doom pro max',
                score: 8.0,
                pros: ['Weeks of surface residual', 'Great for perimeters & frames', 'Pairs with Sleep Tight'],
                cons: ['Not for mattresses or bedding', 'Pyrethroid resistance can blunt it'],
              },
              {
                badge: 'Best Alternate',
                name: 'Knock Down Bed Bug Killer',
                why: 'A legitimate PMRA-registered pyrethrin/pyrethroid aerosol for crack-and-crevice spot treatment — a solid substitute when Doktor Doom is out of stock.',
                search: 'knock down bed bug killer',
                score: 7.4,
                pros: ['PMRA-registered', 'Good for cracks & crevices', 'Widely available'],
                cons: ['Confirm current mattress label', 'Short residual'],
              },
              {
                badge: 'Best Backup',
                name: 'Konk Bed Bug Spray',
                why: 'A pyrethrin-based contact aerosol to keep on hand as a backup can — reach for it when the others are unavailable rather than as an upgrade.',
                search: 'konk bed bug spray',
                score: 7.0,
                pros: ['PMRA-registered', 'Easy contact spot spray', 'Inexpensive backup'],
                cons: ['Contact-only, no lasting residual', 'Confirm current mattress label'],
              },
            ]}
            whichToBuy={
              <>
                <strong>Start with the <em>Best Overall</em> Sleep Tight</strong> for the bed itself, then add the <em>Best Residual</em> Pro Max for baseboards and frames. The <em>Best Alternate</em> and <em>Best Backup</em> cans are stock-out substitutes, not upgrades. Remember: no spray clears an infestation alone — pair any of these with steam, encasements, and interceptor traps.
              </>
            }
          />
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AffiliateDisclosure />
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />
          <p className="not-prose text-sm text-gray-600 mb-1">Compare current Canadian availability on Amazon.ca:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="doktor doom sleep tight bed bug spray">Doktor Doom Sleep Tight &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="doktor doom pro max">Doktor Doom Pro Max &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="knock down bed bug killer">Knock Down Bed Bug Killer &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="konk bed bug spray">Konk Bed Bug Spray &rarr;</BuyLink>
          </div>

          <h2>What Bed Bug Sprays Are Actually Legal in Canada?</h2>
          <p>Only products registered with Health Canada&rsquo;s Pest Management Regulatory Agency (PMRA) as <strong>domestic class</strong> are legal for consumers to buy and use in Canada — and every legal can displays a Pest Control Products (PCP) registration number on the label. That single number is the fastest legality check you can run: no PCP number, not legal here, full stop.</p>
          <p>This matters for bed bugs more than almost any other pest, because the internet&rsquo;s bed bug advice is overwhelmingly American. US sites recommend products registered with the US EPA under completely different rules, in concentrations and active-ingredient combinations that Health Canada has never reviewed for Canadian consumer use. The four products above — Doktor Doom Sleep Tight, Doktor Doom Pro Max, Knock Down Bed Bug Killer, and Konk — are the PMRA-registered options you can actually walk out of a Canadian store with (or have shipped from Amazon.ca) without breaking federal law.</p>
          <p>The trade-off is real and we won&rsquo;t hide it: domestic-class products are deliberately limited to lower-risk actives, which for bed bugs means pyrethrins and pyrethroids almost across the board. That has consequences for effectiveness, covered honestly below.</p>

          <h2>Which Bed Bug Spray Should You Buy in Canada?</h2>
          <p>Buy Doktor Doom Sleep Tight first — it is the only widely stocked Canadian spray specifically labelled for direct application to mattresses and box springs, which is exactly where the bugs are. Its pyrethrin formulation kills on contact, it&rsquo;s water-based so it won&rsquo;t stain most fabrics, and it dries fast enough to re-make the bed the same day.</p>
          <p>Add Doktor Doom Pro Max as your second can if the infestation extends beyond the bed. Pro Max is a permethrin residual: sprayed along baseboards, bed frames, headboard backs, and the undersides of furniture, it keeps killing bugs that walk across treated surfaces for weeks — the piece a contact-only spray is missing. Do <em>not</em> use it on the mattress or bedding; that&rsquo;s not what its label permits.</p>
          <p>Knock Down Bed Bug Killer and Konk are legitimate PMRA-registered alternates. Their formulations are similar contact-kill pyrethrin/pyrethroid aerosols, so treat them as substitutes when Doktor Doom is out of stock rather than upgrades. Whatever you buy, read the current label — Canadian formulations get revised, and the label is the law.</p>
          <p>If you want the longer write-up on either alternate before you commit, we tested them individually: <Link href="/blog/knock-down-bed-bug-killer-review-canada">our full Knock Down Bed Bug Killer review</Link> covers the water-based residual and where it runs out, and <Link href="/blog/konk-bed-bug-killer-review-canada">the Konk bed bug aerosol, reviewed</Link> explains why a Canadian-made contact can scores well on legality and availability but not on eggs.</p>
          <p>Two more sprays worth knowing before you buy: EcoRaider is the one botanical product with independent Rutgers University testing behind it and the unusual ability to kill eggs on direct contact — see <Link href="/blog/ecoraider-bed-bug-spray-review-canada">EcoRaider, the plant-based spray with Rutgers testing behind it</Link>. And if you only need to treat the bed itself, <Link href="/blog/best-bed-bug-spray-for-mattress-canada">which sprays are actually labelled for mattress use</Link> narrows the field to the few products whose labels explicitly permit a sleeping surface.</p>
          <div className="not-prose my-4 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="doktor doom sleep tight bed bug spray">Check Sleep Tight on Amazon.ca &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="doktor doom pro max">Check Pro Max on Amazon.ca &rarr;</BuyLink>
          </div>

          <h2>What Is the Strongest Bed Bug Killer You Can Buy in Canada?</h2>
          <p>The strongest <em>legal</em> chemical option for a Canadian consumer is a permethrin residual — Doktor Doom Pro Max — applied to bed frames, baseboards, and furniture perimeters. But &ldquo;strongest&rdquo; is close to the wrong question, and chasing it is one of the more expensive ways to lose a bed bug fight.</p>
          <p>Every domestic-class bed bug spray registered in Canada sits in the same chemical family: pyrethrins and pyrethroids. There is no consumer-grade can on the Canadian market that is dramatically more potent than the others, because PMRA domestic-class registration deliberately limits which actives and concentrations a homeowner may buy. Searching for the strongest bed bug killer and expecting a single can that ends an infestation is searching for a product that does not legally exist here.</p>
          <p>What <em>is</em> stronger, in the only sense that matters — killing the bugs that shrug off everything else:</p>
          <ul>
            <li><strong>Heat, by a wide margin.</strong> Every life stage, eggs included, dies within minutes at a sustained 50&deg;C. Resistance genes are irrelevant to physics. A proper steamer is the strongest thing most homeowners can bring into a bedroom.</li>
            <li><strong>Desiccant dusts.</strong> Amorphous silica gel and diatomaceous earth kill by stripping the waxy cuticle so the insect dehydrates — a physical mechanism, not a nerve toxin, so bed bugs cannot evolve around it. A barely visible film in a wall void or outlet box stays lethal for months.</li>
            <li><strong>Permethrin residual.</strong> The strongest of the legal sprays for hard surfaces, because it keeps killing bugs that cross treated baseboards and frames long after you have left the room.</li>
            <li><strong>A botanical with egg activity.</strong> EcoRaider is the unusual exception among consumer sprays: a plant-oil formulation with independent Rutgers University testing behind it, including kill on eggs it directly wets.</li>
          </ul>
          <p>If a page tells you the strongest bed bug killer is Crossfire, Temprid FX, or Bedlam Plus, it was written for an American reader under American law. None of those are options in Canada — the table below shows exactly which side of the line each product falls on.</p>

          <h2>Why Won&rsquo;t We Recommend Crossfire, Temprid, or Other US Sprays?</h2>
          <p>Because they are not registered in Canada, and recommending them would mean recommending you break the Pest Control Products Act. This is where most bed bug content online quietly fails Canadian readers, so let&rsquo;s be specific about the products US sites push hardest:</p>
          <ul>
            <li><strong>Crossfire Bed Bug Concentrate</strong> (clothianidin + metofluthrin) — the darling of US bed bug forums. No PMRA registration. Not legal to import, sell, or use in Canada.</li>
            <li><strong>Temprid FX</strong> (imidacloprid + beta-cyfluthrin) — a US professional product that shows up on grey-market listings. Not registered for any Canadian consumer use.</li>
            <li><strong>Bedlam Plus</strong> — US aerosol with an added insect growth regulator combination not approved here. No Canadian registration.</li>
            <li><strong>Transport GHP</strong> and other US commercial concentrates — restricted even in the US to licensed applicators, and entirely unregistered in Canada.</li>
          </ul>
          <p>The trickier cases are the brands that sell under one name on both sides of the border, where the US formula and the Canadian-registered formula are different products in near-identical packaging. Ortho is the classic example — we unpack <Link href="/blog/ortho-home-defense-bed-bug-review-canada">the two-cans-one-name Ortho Home Defense problem</Link> and why the PCP number is the only reliable test. Harris has the same trap, so check <Link href="/blog/harris-bed-bug-killer-review-canada">whether the Harris bed bug spray you found is the Canadian version</Link> before you order.</p>
          <p>The law is only half the argument. An unregistered product means no Canadian label, so there are no PMRA-reviewed directions for safe use in your home; no Health Canada assessment of the formulation you&rsquo;re spraying a metre from where you sleep; and no recourse whatsoever if it damages your health, your pets, or your property. Cross-border sellers who ship these to Canadian addresses are doing so illegally, and packages do get seized. When a US blog tells you Crossfire is &ldquo;the only thing that works,&rdquo; remember it was written under a different country&rsquo;s law — and that even Crossfire fails against heavy infestations without the non-chemical work below.</p>

          <h2>PMRA-Legal vs Not Legal in Canada: The Product List</h2>
          <p>There is one test, and it takes five seconds: find the Pest Control Products (PCP) registration number on the label. Products in the green block below carry a Canadian registration. Products in the red block have none, in any Canadian formulation, which makes importing, selling, or using them a breach of the federal Pest Control Products Act. Registrations and formulations do get revised — confirm the PCP number on the can actually in front of you.</p>
          <div className="not-prose my-6 overflow-x-auto rounded-xl border border-navy-100 shadow-sm">
            <table className="w-full text-sm min-w-[640px]">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Product</th>
                  <th className="px-4 py-3 text-left">Active class</th>
                  <th className="px-4 py-3 text-left">Canadian status</th>
                  <th className="px-4 py-3 text-left">What that means for you</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-emerald-50">
                  <td colSpan={4} className="px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-emerald-800">Legal to buy and use in Canada &mdash; PCP-registered</td>
                </tr>
                {[
                  { p: 'Doktor Doom Sleep Tight', a: 'Pyrethrins (plant-derived)', s: 'PMRA domestic class', m: 'Legal; the one widely stocked spray labelled for mattresses and box springs' },
                  { p: 'Doktor Doom Pro Max', a: 'Permethrin (pyrethroid)', s: 'PMRA domestic class', m: 'Legal; surfaces and perimeters only — never bedding or a sleeping surface' },
                  { p: 'Knock Down Bed Bug Killer', a: 'Pyrethrin / pyrethroid aerosol', s: 'PMRA domestic class', m: 'Legal; the hardware-store value can for crack-and-crevice work' },
                  { p: 'Konk Bed Bug Spray', a: 'Pyrethrin-based aerosol', s: 'PMRA domestic class', m: 'Legal; a contact knockdown backup when the others are out of stock' },
                  { p: 'EcoRaider Bed Bug Killer', a: 'Plant-oil botanical', s: 'Sold in Canada — confirm the PCP number', m: 'The one botanical with independent Rutgers testing, including egg kill on contact' },
                  { p: 'Ortho Home Defense (Canadian SKU)', a: 'Pyrethroid', s: 'Canadian version registered; US version is not', m: 'Same brand name, two different products — the PCP number is the only reliable test' },
                  { p: 'Harris Bed Bug Killer (Canadian SKU)', a: 'Pyrethroid', s: 'Canadian listings vary — verify the SKU', m: 'A US pedigree brand; confirm the exact SKU is registered before you order' },
                ].map(({ p, a, s, m }) => (
                  <tr key={p} className="border-b border-navy-50">
                    <td className="px-4 py-3 font-bold text-brand-800">{p}</td>
                    <td className="px-4 py-3 text-gray-800">{a}</td>
                    <td className="px-4 py-3 text-emerald-800 font-semibold text-xs">{s}</td>
                    <td className="px-4 py-3 text-xs text-gray-600">{m}</td>
                  </tr>
                ))}
                <tr className="bg-red-50">
                  <td colSpan={4} className="px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-red-800">Not legal in Canada &mdash; no PMRA registration</td>
                </tr>
                {[
                  { p: 'Crossfire Bed Bug Concentrate', a: 'Clothianidin + metofluthrin', s: 'No PMRA registration', m: 'Illegal to import, sell, or use here — the single most-recommended product on US forums' },
                  { p: 'Temprid FX', a: 'Imidacloprid + beta-cyfluthrin', s: 'No Canadian consumer registration', m: 'US professional product; anything shipping it to a Canadian address is grey-market' },
                  { p: 'Bedlam Plus', a: 'Pyrethroid + insect growth regulator', s: 'No Canadian registration', m: 'The combination has not been approved for Canadian consumer use' },
                  { p: 'Transport GHP', a: 'US commercial concentrate', s: 'No Canadian registration', m: 'Restricted to licensed applicators even in the US; not a consumer option here' },
                ].map(({ p, a, s, m }) => (
                  <tr key={p} className="border-b border-navy-50 last:border-0">
                    <td className="px-4 py-3 font-bold text-brand-800">{p}</td>
                    <td className="px-4 py-3 text-gray-800">{a}</td>
                    <td className="px-4 py-3 text-red-700 font-semibold text-xs">{s}</td>
                    <td className="px-4 py-3 text-xs text-gray-600">{m}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 not-prose">Registrations and formulations change between label revisions, and Health Canada&rsquo;s PMRA public registry is the authoritative source. The PCP number printed on the can you actually buy is always the final word.</p>

          <h2>Do Bed Bug Sprays Actually Work?</h2>
          <p>Partially — and anyone telling you otherwise is selling something. Contact sprays reliably kill the bed bugs you directly hit, and residuals kill a portion of the bugs that later cross treated surfaces. But three hard limits keep sprays in the supporting-tool category:</p>
          <ul>
            <li><strong>Resistance.</strong> Modern bed bugs are the survivors of decades of pyrethroid exposure. Resistance surveys keep finding knockdown-resistance (kdr) mutations in the large majority of North American populations tested — figures above 80 percent appear in the published literature. A resistant bug can walk across a treated baseboard and live.</li>
            <li><strong>Eggs.</strong> Most domestic-class sprays don&rsquo;t reliably penetrate the egg shell. Eggs laid before you sprayed hatch 6&ndash;10 days later into an apparently &ldquo;treated&rdquo; room.</li>
            <li><strong>Hiding depth.</strong> Bed bugs harbour inside box spring frames, behind baseboards, in wall voids, and inside electronics — places aerosol simply never reaches.</li>
          </ul>
          <p>That is why the effective plan is a stack, not a can: steam and heat kill all life stages on contact regardless of resistance, encasements permanently remove the mattress and box spring as harbourage, interceptors isolate and monitor the bed, and spray mops up around the edges. We go deeper on the evidence — including the fogger studies and what the failure data actually shows — in <Link href="/blog/do-bed-bug-sprays-actually-work">do bed bug sprays actually work?</Link></p>

          <h2>What Chemical Kills Bed Bugs and Their Eggs?</h2>
          <p>Almost none of them kill both — and the gap between &ldquo;kills the bugs&rdquo; and &ldquo;kills the eggs&rdquo; is the single most useful thing to understand before you spend a dollar. Bed bug eggs are cemented to fabric, wood, and seams inside a shell that most domestic-class actives penetrate poorly. A treatment that wipes out every visible bug in the room still leaves the next generation intact for the 6&ndash;10 days it takes them to hatch, which is exactly why week-two rebounds are so common.</p>
          <div className="not-prose my-6 overflow-x-auto rounded-xl border border-navy-100 shadow-sm">
            <table className="w-full text-sm min-w-[620px]">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Chemical or method</th>
                  <th className="px-4 py-3 text-left">Kills adults &amp; nymphs</th>
                  <th className="px-4 py-3 text-left">Kills eggs</th>
                  <th className="px-4 py-3 text-left">Resistance a factor?</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { c: 'Pyrethrins (Sleep Tight, Konk)', b: 'Yes — on direct contact', e: 'No', r: 'Yes' },
                  { c: 'Pyrethroids: permethrin, deltamethrin, cyfluthrin (Pro Max, Knock Down, Ortho, Harris)', b: 'Yes — contact plus surface residual', e: 'No', r: 'Yes — kdr mutations are widespread' },
                  { c: 'Plant-oil botanicals (EcoRaider)', b: 'Yes — on direct contact', e: 'Yes — on direct contact', r: 'No known resistance' },
                  { c: 'Silica gel and diatomaceous earth dusts', b: 'Yes — slowly, over days', e: 'No', r: 'No — physical mechanism' },
                  { c: 'Steam and heat', b: 'Yes — on contact', e: 'Yes — on contact', r: 'None — physical' },
                  { c: 'Rubbing alcohol', b: 'Partially', e: 'No', r: 'Not applicable — and a documented fire hazard' },
                ].map(({ c, b, e, r }) => (
                  <tr key={c} className="border-b border-navy-50 last:border-0">
                    <td className="px-4 py-3 font-bold text-brand-800 text-xs">{c}</td>
                    <td className="px-4 py-3 text-xs text-gray-700">{b}</td>
                    <td className="px-4 py-3 text-xs font-semibold text-gray-800">{e}</td>
                    <td className="px-4 py-3 text-xs text-gray-600">{r}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>So the honest answer to &ldquo;what chemical kills bed bugs and their eggs&rdquo; is that among PMRA-registered consumer products, only EcoRaider does both — and only on the eggs its spray directly wets, which in practice means the ones you can see and reach. Everything else on the Canadian shelf kills bugs and leaves eggs.</p>
          <p>The reliable egg-killer is not a chemical at all. It is heat: surface steam or a sustained core temperature near 50&deg;C kills adults, nymphs, and eggs alike, and no resistance gene changes that. This is the entire argument for building your plan around a steamer and treating spray as the residual backstop — and it is why the reapplication schedule below matters more than which can you picked.</p>

          <h2>How Do You Use a Bed Bug Spray Properly?</h2>
          <p>The label on your specific can is the final word, but this sequence is how sprays earn their keep instead of just scattering bugs:</p>
          <ol>
            <li><strong>Confirm it&rsquo;s actually bed bugs first.</strong> Fecal spotting, shed skins, and live bugs along mattress seams are the tells — our guide on <Link href="/blog/how-to-check-for-bed-bugs-canada">how to check for bed bugs</Link> walks through the full inspection.</li>
            <li><strong>Strip and bag bedding</strong>, launder hot, and dry on high for at least 30 minutes — the dryer alone kills all life stages in fabric.</li>
            <li><strong>Steam first if you have a steamer.</strong> Slow passes over seams, tufts, frame joints, and baseboards kill bugs and eggs sprays will miss.</li>
            <li><strong>Spray the bed with a mattress-labelled contact product</strong> (Sleep Tight): seams, piping, tufts, box spring underside, frame joints. Let everything dry completely.</li>
            <li><strong>Apply residual to the perimeter</strong> (Pro Max): baseboards, bed legs, headboard wall side, furniture undersides — never the sleeping surface.</li>
            <li><strong>Encase and isolate.</strong> Certified encasements on mattress and box spring, interceptor cups under all bed legs, bed pulled 15 cm off the wall, no bedding touching the floor.</li>
            <li><strong>Repeat every 7&ndash;14 days</strong> until interceptors stay empty and no new signs appear for four to six weeks.</li>
          </ol>

          <h2>What Should You Use Alongside Spray?</h2>
          <p>Non-chemical tools carry most of the weight in a successful DIY bed bug program, precisely because they don&rsquo;t care whether the local bugs are pyrethroid-resistant:</p>
          <ul>
            <li><strong>A proper steamer</strong> — surface temperatures of 70&ndash;100&deg;C kill adults, nymphs, and eggs instantly on contact. Our roundup of the <Link href="/blog/best-bed-bug-steamer-canada">best bed bug steamers in Canada</Link> covers which units hold lethal temperature at the nozzle.</li>
            <li><strong>Mattress and box spring encasements</strong> — bugs inside are trapped and starve; new bugs can&rsquo;t colonize the mattress. See our <Link href="/blog/bed-bug-mattress-encasement-canada">Canadian mattress encasement guide</Link> for certified options.</li>
            <li><strong>Interceptor traps</strong> — under $30 for a set, they both protect the bed and tell you objectively whether your treatment is working. Full details in our <Link href="/blog/bed-bug-interceptor-traps-canada">interceptor trap guide</Link>.</li>
            <li><strong>Diatomaceous earth</strong> — a slow but resistance-proof desiccant dust for wall voids and under baseboards; how to apply it safely is covered in <Link href="/blog/diatomaceous-earth-for-bed-bugs">diatomaceous earth for bed bugs</Link>.</li>
          </ul>
          <p>One tool people reach for that we would skip entirely is the total-release fogger. Even the PMRA-registered Canadian ones only settle mist on exposed surfaces, which is a different place from the seams and voids the bugs are in — <Link href="/blog/best-bed-bug-fogger-canada">why bed bug foggers cannot reach the harbourages</Link> lays out the evidence and what to spend the money on instead.</p>
          <p>If you would rather see all of this sequenced as one campaign — heat first, then steam, dust, encase and monitor — <Link href="/blog/bed-bug-control-canada-hub">the full layered bed-bug control plan for Canada</Link> is the parent guide these product pages hang off.</p>

          <h2>When Should You Call a Professional Instead?</h2>
          <p>Call a licensed structural pest control operator when the infestation has spread beyond one room, when you&rsquo;re still catching bugs in interceptors after three or four full DIY rounds, or when you live in a multi-unit building where bugs migrate between units through walls — DIY simply can&rsquo;t win that fight alone. Professionals have access to commercial-class products, and heat-treatment crews can take an entire unit to lethal temperature in a single day.</p>
          <p>Expect roughly $300&ndash;$600 per room for conventional chemical treatment over two to three visits, and about $700&ndash;$1,500+ for whole-unit heat, varying by city and home size. For context on what pest control services cost across categories in Canada, see our <Link href="/pest-control-cost-canada">Canadian pest control cost guide</Link>. Tenants in Ontario should also know that landlords are generally responsible for arranging and paying for bed bug treatment under the Residential Tenancies Act — document everything and notify your landlord in writing.</p>

          <h2>FAQs</h2>
          <div className="not-prose space-y-4">
            {FAQS.map(({ question, answer }) => (
              <details key={question} className="rounded-xl border border-navy-100 bg-white p-4 group">
                <summary className="font-bold text-brand-900 cursor-pointer list-none">{question}</summary>
                <p className="mt-2 text-sm text-gray-700 leading-relaxed">{answer}</p>
              </details>
            ))}
          </div>

          <h2>Every Bed Bug Spray We&rsquo;ve Reviewed, Brand by Brand</h2>
          <p>Each product in the tables above &mdash; including the US names we tell you to skip &mdash; has a full standalone review. Start here if you want the long version on one specific can before you commit.</p>
          <ul>
            <li><Link href="/blog/doktor-doom-sleep-tight-review-canada">Doktor Doom Sleep Tight review</Link> &mdash; the mattress-labelled contact spray, and our overall pick.</li>
            <li><Link href="/blog/knock-down-bed-bug-killer-review-canada">Knock Down Bed Bug Killer review</Link> &mdash; the hardware-store PMRA-registered value can.</li>
            <li><Link href="/blog/konk-bed-bug-killer-review-canada">Konk Bed Bug Killer review</Link> &mdash; Canadian-made contact aerosol: strong on legality, weak on eggs.</li>
            <li><Link href="/blog/ecoraider-bed-bug-spray-review-canada">EcoRaider review</Link> &mdash; the plant-based spray with independent Rutgers testing behind it.</li>
            <li><Link href="/blog/harris-bed-bug-killer-review-canada">Harris Bed Bug Killer review</Link> &mdash; how to tell the Canadian SKU from the US one.</li>
            <li><Link href="/blog/ortho-home-defense-bed-bug-review-canada">Ortho Home Defense review</Link> &mdash; two cans, one name, and the PCP number that settles it.</li>
            <li><Link href="/blog/crossfire-bed-bug-concentrate-review-canada">Crossfire Bed Bug Concentrate review</Link> &mdash; good chemistry, wrong country: why we can&rsquo;t recommend it here.</li>
          </ul>

          <h2>Related Bed Bug Guides</h2>
          <ul>
            <li><Link href="/blog/do-bed-bug-sprays-actually-work">Do Bed Bug Sprays Actually Work? The Honest Evidence</Link></li>
            <li><Link href="/blog/best-bed-bug-steamer-canada">Best Bed Bug Steamer Canada</Link></li>
            <li><Link href="/blog/bed-bug-mattress-encasement-canada">Bed Bug Mattress Encasements Canada</Link></li>
            <li><Link href="/blog/bed-bug-interceptor-traps-canada">Bed Bug Interceptor Traps Canada</Link></li>
            <li><Link href="/blog/how-to-check-for-bed-bugs-canada">How to Check for Bed Bugs</Link></li>
            <li><Link href="/blog/diatomaceous-earth-for-bed-bugs">Diatomaceous Earth for Bed Bugs</Link></li>
          </ul>
        </div>
      </article>

      <section className="py-10 px-4 bg-brand-50 border-t border-navy-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-gray-700">This guide is part of our independent, PMRA-focused product research for Canadian homeowners.</p>
          <Link href="/pest-product-guides" className="mt-2 inline-block font-bold text-emerald-700 hover:text-emerald-800">More independent Canadian pest product research &rarr;</Link>
        </div>
      </section>
    </>
  )
}
