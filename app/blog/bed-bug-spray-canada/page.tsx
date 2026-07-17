import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import BuyLink from '@/components/BuyLink'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import SpecialistDisclosure from '@/components/SpecialistDisclosure'

const SLUG = 'bed-bug-spray-canada'
const DATE = '2026-07-16'
const TITLE = 'Best Bed Bug Spray Canada 2026 — What’s Actually PMRA-Legal (and What Isn’t)'

const FAQS = [
  {
    question: 'What is the best bed bug spray in Canada?',
    answer: 'For most Canadian households the best combination is Doktor Doom Sleep Tight for direct contact spraying on mattresses, box springs, and bed frames, paired with a permethrin-based residual like Doktor Doom Pro Max for baseboards, bed legs, and furniture perimeters. Both are PMRA domestic-class registered, meaning they carry a Pest Control Products (PCP) registration number and are legal for consumer use in Canada. Knock Down Bed Bug Killer and Konk bed bug sprays are solid PMRA-registered alternatives when Doktor Doom is out of stock. No spray alone eliminates an infestation — pair any spray with steam, mattress encasements, and interceptor traps.',
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
  title: TITLE,
  description: 'The PMRA-legal bed bug sprays you can actually buy in Canada — Doktor Doom Sleep Tight, Pro Max, Knock Down, Konk — plus why US picks like Crossfire and Temprid are illegal here, and what sprays can and cannot do.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
})

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
        </div>
      </section>

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">The best bed bug spray legally available in Canada is Doktor Doom Sleep Tight — it&rsquo;s PMRA-registered, labelled for direct use on mattresses and box springs, and widely stocked on Amazon.ca. Pair it with a permethrin-based residual (Doktor Doom Pro Max) for baseboards and bed frames, and treat every spray as a supporting tool: steam, encasements, and interceptor traps do the heavy lifting.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>Legal Canadian sprays carry a Pest Control Products (PCP) registration number on the label — no PCP number means it is not legal to sell or use in Canada.</li>
              <li>US favourites like Crossfire, Temprid FX, and Bedlam Plus have zero PMRA registration — importing them violates the federal Pest Control Products Act.</li>
              <li>Resistance surveys have found pyrethroid knockdown-resistance genes in over 80% of tested North American bed bug populations, which is why contact sprays alone routinely fail.</li>
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

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AffiliateDisclosure />
          <p className="not-prose text-sm text-gray-600 mb-1">Compare current Canadian availability on Amazon.ca:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink search="doktor doom sleep tight bed bug spray">Doktor Doom Sleep Tight &rarr;</BuyLink>
            <BuyLink search="doktor doom pro max">Doktor Doom Pro Max &rarr;</BuyLink>
            <BuyLink search="knock down bed bug killer">Knock Down Bed Bug Killer &rarr;</BuyLink>
            <BuyLink search="konk bed bug spray">Konk Bed Bug Spray &rarr;</BuyLink>
          </div>

          <h2>What Bed Bug Sprays Are Actually Legal in Canada?</h2>
          <p>Only products registered with Health Canada&rsquo;s Pest Management Regulatory Agency (PMRA) as <strong>domestic class</strong> are legal for consumers to buy and use in Canada — and every legal can displays a Pest Control Products (PCP) registration number on the label. That single number is the fastest legality check you can run: no PCP number, not legal here, full stop.</p>
          <p>This matters for bed bugs more than almost any other pest, because the internet&rsquo;s bed bug advice is overwhelmingly American. US sites recommend products registered with the US EPA under completely different rules, in concentrations and active-ingredient combinations that Health Canada has never reviewed for Canadian consumer use. The four products above — Doktor Doom Sleep Tight, Doktor Doom Pro Max, Knock Down Bed Bug Killer, and Konk — are the PMRA-registered options you can actually walk out of a Canadian store with (or have shipped from Amazon.ca) without breaking federal law.</p>
          <p>The trade-off is real and we won&rsquo;t hide it: domestic-class products are deliberately limited to lower-risk actives, which for bed bugs means pyrethrins and pyrethroids almost across the board. That has consequences for effectiveness, covered honestly below.</p>

          <h2>Which Bed Bug Spray Should You Buy in Canada?</h2>
          <p>Buy Doktor Doom Sleep Tight first — it is the only widely stocked Canadian spray specifically labelled for direct application to mattresses and box springs, which is exactly where the bugs are. Its pyrethrin formulation kills on contact, it&rsquo;s water-based so it won&rsquo;t stain most fabrics, and it dries fast enough to re-make the bed the same day.</p>
          <p>Add Doktor Doom Pro Max as your second can if the infestation extends beyond the bed. Pro Max is a permethrin residual: sprayed along baseboards, bed frames, headboard backs, and the undersides of furniture, it keeps killing bugs that walk across treated surfaces for weeks — the piece a contact-only spray is missing. Do <em>not</em> use it on the mattress or bedding; that&rsquo;s not what its label permits.</p>
          <p>Knock Down Bed Bug Killer and Konk are legitimate PMRA-registered alternates. Their formulations are similar contact-kill pyrethrin/pyrethroid aerosols, so treat them as substitutes when Doktor Doom is out of stock rather than upgrades. Whatever you buy, read the current label — Canadian formulations get revised, and the label is the law.</p>
          <div className="not-prose my-4 flex flex-wrap gap-3">
            <BuyLink search="doktor doom sleep tight bed bug spray">Check Sleep Tight on Amazon.ca &rarr;</BuyLink>
            <BuyLink search="doktor doom pro max">Check Pro Max on Amazon.ca &rarr;</BuyLink>
          </div>

          <h2>Why Won&rsquo;t We Recommend Crossfire, Temprid, or Other US Sprays?</h2>
          <p>Because they are not registered in Canada, and recommending them would mean recommending you break the Pest Control Products Act. This is where most bed bug content online quietly fails Canadian readers, so let&rsquo;s be specific about the products US sites push hardest:</p>
          <ul>
            <li><strong>Crossfire Bed Bug Concentrate</strong> (clothianidin + metofluthrin) — the darling of US bed bug forums. No PMRA registration. Not legal to import, sell, or use in Canada.</li>
            <li><strong>Temprid FX</strong> (imidacloprid + beta-cyfluthrin) — a US professional product that shows up on grey-market listings. Not registered for any Canadian consumer use.</li>
            <li><strong>Bedlam Plus</strong> — US aerosol with an added insect growth regulator combination not approved here. No Canadian registration.</li>
            <li><strong>Transport GHP</strong> and other US commercial concentrates — restricted even in the US to licensed applicators, and entirely unregistered in Canada.</li>
          </ul>
          <p>The law is only half the argument. An unregistered product means no Canadian label, so there are no PMRA-reviewed directions for safe use in your home; no Health Canada assessment of the formulation you&rsquo;re spraying a metre from where you sleep; and no recourse whatsoever if it damages your health, your pets, or your property. Cross-border sellers who ship these to Canadian addresses are doing so illegally, and packages do get seized. When a US blog tells you Crossfire is &ldquo;the only thing that works,&rdquo; remember it was written under a different country&rsquo;s law — and that even Crossfire fails against heavy infestations without the non-chemical work below.</p>

          <h2>Do Bed Bug Sprays Actually Work?</h2>
          <p>Partially — and anyone telling you otherwise is selling something. Contact sprays reliably kill the bed bugs you directly hit, and residuals kill a portion of the bugs that later cross treated surfaces. But three hard limits keep sprays in the supporting-tool category:</p>
          <ul>
            <li><strong>Resistance.</strong> Modern bed bugs are the survivors of decades of pyrethroid exposure. Resistance surveys keep finding knockdown-resistance (kdr) mutations in the large majority of North American populations tested — figures above 80 percent appear in the published literature. A resistant bug can walk across a treated baseboard and live.</li>
            <li><strong>Eggs.</strong> Most domestic-class sprays don&rsquo;t reliably penetrate the egg shell. Eggs laid before you sprayed hatch 6&ndash;10 days later into an apparently &ldquo;treated&rdquo; room.</li>
            <li><strong>Hiding depth.</strong> Bed bugs harbour inside box spring frames, behind baseboards, in wall voids, and inside electronics — places aerosol simply never reaches.</li>
          </ul>
          <p>That is why the effective plan is a stack, not a can: steam and heat kill all life stages on contact regardless of resistance, encasements permanently remove the mattress and box spring as harbourage, interceptors isolate and monitor the bed, and spray mops up around the edges. We go deeper on the evidence — including the fogger studies and what the failure data actually shows — in <Link href="/blog/do-bed-bug-sprays-actually-work">do bed bug sprays actually work?</Link></p>

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
