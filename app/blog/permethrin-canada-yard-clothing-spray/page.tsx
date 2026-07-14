import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import BuyLink from '@/components/BuyLink'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'

const SLUG = 'permethrin-canada-yard-clothing-spray'
const DATE = '2026-05-01'
const UPDATED = '2026-07-12'
const TITLE = 'Permethrin Canada: Where to Buy + Is It Legal? (2026)'

const FAQS = [
  {
    question: 'Is permethrin legal in Canada?',
    answer: 'Yes — permethrin is legal in Canada and registered by Health Canada\'s Pest Management Regulatory Agency (PMRA). The catch is the format: low-concentration permethrin CLOTHING spray (Sawyer 0.5%) is legal to buy and use as a consumer product, and permethrin-treated clothing is legal to buy and wear. However, higher-concentration permethrin YARD/lawn concentrates are classified as commercial or restricted-class products and can only be legally applied by a licensed pest control operator. So it is legal to buy Sawyer permethrin at Canadian Tire, MEC, Cabela\'s, and Amazon.ca for clothing — it is NOT legal for a homeowner to spray concentrated permethrin on their own lawn.',
  },
  {
    question: 'Where to buy permethrin spray in Canada?',
    answer: 'Permethrin clothing spray (Sawyer brand, the most popular) is widely available in Canada at Cabela\'s Canada, Bass Pro Shops Canada, MEC, Canadian Tire, and Atmosphere. Pricing for the 24-oz Sawyer permethrin clothing spray runs $24–$38 in Canadian retailers. Permethrin yard concentrate (for outdoor application) is more restricted in Canada — Health Canada PCP regulations limit residential availability. Most yard-application permethrin in Canada is restricted to licensed pest control operators using commercial concentrations.',
  },
  {
    question: 'Where can I buy permethrin concentrate in Canada?',
    answer: 'Concentrated permethrin (10%–36.8% formulations like Permethrin SFR or Martin\'s 10%) that you dilute for yard spraying is NOT sold to consumers in Canada — Health Canada PMRA classifies these as commercial-class or restricted-class products that require a licensed applicator. US retailers such as Home Depot, Tractor Supply, and DoMyOwn stock permethrin concentrate for homeowners, but those products cannot be legally imported and applied to a Canadian residential lawn. The only permethrin a Canadian consumer can legally buy is the ready-to-use 0.5% Sawyer clothing spray. For diluted-concentrate-style whole-yard coverage, hire a licensed Ontario applicator who uses Health Canada-approved barrier-spray formulations.',
  },
  {
    question: 'Can you spray permethrin on your yard or lawn in Canada?',
    answer: 'Not as a homeowner. Consumer permethrin in Canada (Sawyer 0.5% spray) is labelled for clothing and gear only — applying it to your lawn is an off-label use, and the concentrated yard formulations that ARE labelled for turf are restricted to licensed applicators. Ontario\'s Cosmetic Pesticides rules further limit what can be applied to residential lawns. To legally treat your whole yard for mosquitoes and ticks you must hire a licensed Ontario pesticide operator (like BuzzSkito, Licence #L-240-2436835197), who applies Health Canada-approved barrier-spray products that deliver 21–30 days of residual protection per treatment.',
  },
  {
    question: 'How much does permethrin cost in Canada?',
    answer: 'Sawyer permethrin clothing spray (24 oz, the most common consumer product) runs $24–$38 across Canadian retailers in 2026. Smaller 12-oz bottles are $18–$28. Permethrin-treated clothing (Sawyer Insect Shield brand) costs $40–$120 per garment depending on style. Yard-application permethrin concentrate is mostly NOT available to Canadian consumers — Health Canada restricts higher-concentration formulations to licensed applicators. Professional barrier spray treatments by licensed Ontario operators (which use bifenthrin-based formulations approved by Health Canada) start from $99 per treatment.',
  },
  {
    question: 'Can I buy permethrin yard spray in Canada?',
    answer: 'Mostly no — Health Canada (PMRA) restricts higher-concentration permethrin yard products to licensed pest control operators in most provinces. The over-the-counter products available in Canadian retailers are clothing/gear sprays (Sawyer brand, 0.5% permethrin) intended for treating fabrics, not lawns. For residential yard treatment using approved active ingredients, you have two options: (1) hire a licensed Ontario pesticide applicator like BuzzSkito for professional barrier spray, or (2) use approved consumer alternatives like BTI (mosquito dunks/bits) for larvae and Thermacell devices for personal repellent zones.',
  },
  {
    question: 'Is permethrin safe for kids, pets, and skin?',
    answer: 'Permethrin is safe for HUMANS and DOGS when used as directed (skin contact via treated clothing is fine — Sawyer Insect Shield clothing is sold for kids). However, permethrin is HIGHLY TOXIC to CATS — even small exposure can cause tremors, seizures, and death. If you have cats, do not apply liquid permethrin spray indoors and let treated clothing fully dry (24+ hours) before bringing it into a cat-occupied home. Permethrin is also toxic to fish — keep away from ponds, streams, and aquariums. Pollinators (bees) are sensitive — apply only when bees are not active and never spray directly on flowering plants.',
  },
  {
    question: 'How long does permethrin clothing spray last?',
    answer: 'Sawyer permethrin clothing spray bonds to fabric fibres and remains effective through 6 wash cycles or approximately 6 weeks of daily wear. For weekend hikers in the GTA who wash hiking gear after each trip, one application typically lasts the full April–October outdoor season. Permethrin-treated clothing manufactured by Insect Shield (factory-treated) lasts up to 70 wash cycles. After the protection wears off, the clothing is safe to keep wearing — you simply lose the tick/mosquito repellent benefit.',
  },
  {
    question: 'Is permethrin effective against ticks?',
    answer: 'Yes — permethrin is one of the most effective tick deterrents available. Unlike DEET (which repels), permethrin kills ticks on contact with treated clothing. CDC research consistently shows 95%+ reduction in tick bites for hikers wearing permethrin-treated pants, socks, and boots compared to untreated clothing. For Ontario hikers in tick-active areas (Oak Ridges Moraine, Niagara Escarpment, Bruce Trail, Algonquin), permethrin-treated pants and socks are the gold standard for personal tick prevention. Apply to clothing before hiking, NOT directly to skin.',
  },
  {
    question: 'Permethrin vs DEET vs Picaridin — what is the difference?',
    answer: 'Different applications, different chemistry. PERMETHRIN goes on CLOTHING (not skin) — kills ticks and mosquitoes on contact through fabric. DEET (20–30%) goes on SKIN — repels biting insects but doesn\'t kill them. PICARIDIN (20%) also goes on SKIN — similar repellent effect to DEET, less greasy, doesn\'t damage plastics or fabrics. Best combination for Ontario hiking: permethrin on clothing + DEET or picaridin on exposed skin. For sitting on a patio, neither permethrin nor DEET is ideal — Thermacell or professional yard barrier spray is more effective for stationary outdoor use.',
  },
  {
    question: 'Why is permethrin yard spray restricted in Canada but available in the US?',
    answer: 'Health Canada\'s Pest Management Regulatory Agency (PMRA) takes a more restrictive approach to homeowner pesticide concentrations than the US EPA. PMRA classifies higher-concentration permethrin yard products as "commercial-class" or "restricted-class" requiring a licensed applicator. The US EPA allows the same concentrations to be sold to consumers in retail packaging. This means yard-application permethrin you might see at a US Home Depot or Walmart is not legally importable for residential application in Canada. Ontario specifically has additional Cosmetic Pesticides regulations limiting which products can be applied to residential lawns.',
  },
  {
    question: 'Can a licensed Ontario applicator use permethrin on my yard?',
    answer: 'Some licensed applicators use permethrin-based products for specific commercial applications (mosquito abatement contracts, golf course turf), but the most common active ingredient used in Ontario residential mosquito barrier spray is bifenthrin or deltamethrin — both Health Canada-approved for residential use, both highly effective against mosquitoes and ticks, and both with residual activity of 21–30 days per application. BuzzSkito uses Health Canada-approved formulations for all residential applications, applied by a licensed Ontario Pesticide Operator (Licence #L-240-2436835197).',
  },
]

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: 'Where to buy permethrin in Canada: Sawyer clothing spray at Cabela\'s, MEC & Amazon.ca, is it legal, concentrate dilution rates, and clothing vs yard use.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

export default function PermethrinCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Comprehensive 2026 guide to permethrin in Canada — where to buy, legal status, clothing spray vs restricted yard concentrate.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Permethrin Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Permethrin Canada</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <div className="speakable rounded-xl bg-white/10 border border-white/20 p-4 mb-4 max-w-3xl">
            <p className="text-xs font-extrabold text-amber-300 uppercase tracking-wider mb-1">Is permethrin legal in Canada?</p>
            <p className="text-base sm:text-lg text-white leading-relaxed">Yes &mdash; permethrin is legal in Canada. Health Canada&rsquo;s PMRA registers low-concentration Sawyer 0.5% clothing spray as a consumer product you can buy at Cabela&rsquo;s, MEC, Canadian Tire and Amazon.ca. Higher-concentration yard/turf concentrate is restricted &mdash; only a licensed Ontario applicator may spray it on your lawn.</p>
          </div>
          <p className="text-xl text-brand-100 max-w-3xl">Where to buy Sawyer permethrin clothing spray in Canada, why yard-application is restricted by Health Canada, and the licensed Ontario alternative for whole-yard tick and mosquito control.</p>
        </div>
      </section>

      {/* WHERE TO BUY */}
      <section className="bg-gradient-to-br from-emerald-50 to-white border-b border-emerald-200 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Where to Buy in Canada · Updated July 2026</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">Permethrin Spray: Where to Buy in Canada</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            Sawyer permethrin <strong>CLOTHING spray</strong> is widely available across Canadian outdoor and big-box retailers. Permethrin <strong>YARD concentrate</strong> is restricted to licensed pest control operators under Health Canada PMRA regulations.
          </p>
          <div className="rounded-xl border border-navy-100 overflow-hidden bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Retailer</th>
                  <th className="px-4 py-3 text-left">12 oz Sawyer</th>
                  <th className="px-4 py-3 text-left">24 oz Sawyer</th>
                  <th className="px-4 py-3 text-left">Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Cabela\'s Canada',  small: '$22 – $28',     large: '$28 – $38',     note: 'Best stock · outdoor specialty' },
                  { name: 'Bass Pro Canada',  small: '$22 – $28',     large: '$29 – $36',     note: 'Outdoor focus' },
                  { name: 'MEC',              small: '$22 – $26',     large: '$28 – $34',     note: 'Hiking + camping audience' },
                  { name: 'Canadian Tire',    small: '$19.99 – $26.99', large: '$26.99 – $36.99', note: 'Spring/summer stock' },
                  { name: 'Atmosphere',       small: '$22 – $28',     large: '$30 – $38',     note: 'Limited stock summer only' },
                ].map(({ name, small, large, note }) => (
                  <tr key={name} className="border-b border-navy-50 last:border-0">
                    <td className="px-4 py-3 font-bold text-brand-800">{name}</td>
                    <td className="px-4 py-3 font-mono text-gray-800">{small}</td>
                    <td className="px-4 py-3 font-mono text-gray-800">{large}</td>
                    <td className="px-4 py-3 text-xs text-gray-600">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Prices accurate as of July 2026. Sawyer permethrin clothing spray is the only widely-stocked option in Canada — Insect Shield factory-treated clothing is also available at $40–$120 per garment.
          </p>
          <div className="mt-5 rounded-xl bg-rose-50 border-l-4 border-rose-400 p-4">
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong className="text-rose-900">⚠️ Permethrin yard spray is RESTRICTED in Canada.</strong> Health Canada PMRA limits yard-application permethrin concentrations to licensed applicators. For whole-yard tick and mosquito treatment, you need either: (1) a licensed Ontario operator using approved residential formulations, or (2) BTI bits/dunks for standing-water larvae plus a Thermacell for personal repellent zones. <Link href="/mosquito-control" className="text-emerald-700 underline font-semibold">Get a quote for licensed barrier spray</Link> from BuzzSkito (Ontario Pesticide Operator Licence #L-240-2436835197).
            </p>
          </div>
        </div>
      </section>

      {/* QUICK ANSWER */}
      <section className="bg-amber-50 border-y-4 border-amber-300 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-amber-700 uppercase tracking-wider mb-2">Quick Answer</p>
          <h2 className="text-xl font-extrabold text-brand-900 mb-3">Where can I buy permethrin in Canada?</h2>
          <p className="text-base text-gray-800 leading-relaxed">
            <strong>Sawyer permethrin clothing spray (the only widely-available consumer permethrin in Canada) is sold at Cabela&rsquo;s Canada, Bass Pro, MEC, and Canadian Tire for $24–$38 per 24-oz bottle.</strong> Permethrin yard concentrate is restricted to licensed pest control operators under Health Canada PMRA regulations — most US-style yard-spray permethrin products you see at US Home Depots are not legally importable for residential use in Canada. For whole-yard tick + mosquito control, you have three options: (1) hire a licensed Ontario applicator using approved barrier-spray formulations, (2) use BTI (mosquito dunks/bits) for standing-water larvae, or (3) treat your hiking clothing with Sawyer permethrin and use a Thermacell on the patio.
          </p>
        </div>
      </section>

      {/* KEY FACTS */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Permethrin Key Facts (Canada)</h2>
          <div className="rounded-xl border border-navy-100 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Active ingredient class', 'Synthetic pyrethroid'],
                  ['Source', 'Synthesized from chrysanthemum-derived pyrethrin'],
                  ['Targets', 'Mosquitoes, ticks, blackflies, fleas, mites — kills on contact'],
                  ['Mode of action', 'Disrupts nervous system on contact (knockdown then kill)'],
                  ['Sold in Canada', 'Sawyer 0.5% clothing spray (consumer), restricted concentrations to licensed applicators'],
                  ['Tick effectiveness', '95%+ reduction in bites with treated clothing (CDC data)'],
                  ['Skin application', 'NO — clothing only (does not bond to skin proteins, breaks down)'],
                  ['Cat toxicity', 'HIGH — never apply liquid permethrin near cats'],
                  ['Dog toxicity', 'Low at clothing-application concentrations'],
                  ['Bee toxicity', 'High — never spray during pollinator activity'],
                  ['Fish toxicity', 'High — never use near ponds/streams'],
                  ['Treated clothing duration', '6 wash cycles (~6 weeks daily wear)'],
                  ['Insect Shield clothing duration', '70 wash cycles (factory-bonded)'],
                  ['Health Canada status', 'Approved for clothing application, restricted for yard'],
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
          <AffiliateDisclosure />
          <p className="not-prose text-sm text-gray-600 mb-1">The most-recommended permethrin brand in Canada is Sawyer — for clothing, gear, and tents (never skin):</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink search="sawyer permethrin clothing spray">Check Sawyer Permethrin price on Amazon.ca →</BuyLink>
          </div>
          <h2>What Permethrin Does (and Why It&rsquo;s Different from DEET)</h2>
          <p>Permethrin is a synthetic version of pyrethrin, the natural insecticide found in chrysanthemum flowers. Unlike DEET and picaridin (which are <strong>repellents</strong> applied to skin), permethrin is a <strong>contact insecticide</strong> applied to clothing. When a tick or mosquito lands on permethrin-treated fabric, the chemical disrupts its nervous system within seconds — the insect either falls off or dies before biting through the fabric.</p>
          <p>This is why permethrin is the gold standard for hikers, military personnel, and outdoor workers — DEET only works while it&rsquo;s wet on your skin (a few hours), while permethrin-treated clothing remains active for 6 weeks of wear or 6 wash cycles.</p>

          <h2>Is Permethrin Legal in Canada?</h2>
          <p className="speakable"><strong>Yes — permethrin is legal in Canada</strong>, but the legal format depends on how you use it. Low-concentration permethrin <strong>clothing spray</strong> (Sawyer 0.5%) and factory <strong>permethrin-treated clothing</strong> are fully legal to buy and use as consumer products. What is <em>not</em> legal for a homeowner is spraying concentrated permethrin on your own lawn — higher-concentration <strong>yard/turf concentrates</strong> are classified by Health Canada as commercial- or restricted-class products that only a licensed applicator may apply.</p>
          <table className="not-prose w-full text-sm border-collapse border border-navy-100 rounded-lg overflow-hidden my-4">
            <thead className="bg-brand-50">
              <tr><th className="px-3 py-2 text-left">Permethrin format</th><th className="px-3 py-2 text-left">Legal for consumers in Canada?</th><th className="px-3 py-2 text-left">Where</th></tr>
            </thead>
            <tbody>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">Sawyer 0.5% clothing/gear spray</td><td className="px-3 py-2 text-emerald-700 font-semibold">Yes — buy &amp; use freely</td><td className="px-3 py-2">Cabela&rsquo;s, MEC, Canadian Tire, Amazon.ca</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">Insect Shield treated clothing</td><td className="px-3 py-2 text-emerald-700 font-semibold">Yes — buy &amp; wear</td><td className="px-3 py-2">Outdoor apparel brands, Amazon.ca</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">10%–36.8% yard/turf concentrate</td><td className="px-3 py-2 text-rose-700 font-semibold">No — licensed applicator only</td><td className="px-3 py-2">Not sold to Canadian consumers</td></tr>
            </tbody>
          </table>
          <p>So if you are searching &ldquo;is permethrin legal in Canada,&rdquo; the honest answer is: yes for your clothes, no for your lawn. For whole-yard protection you legally need a licensed operator — see our <Link href="/tick-control">tick control</Link> and <Link href="/mosquito-control">mosquito control</Link> services below.</p>

          <h2>Why Yard-Application Permethrin Is Restricted in Canada</h2>
          <p>Health Canada&rsquo;s Pest Management Regulatory Agency (PMRA) classifies pesticides into Domestic, Commercial, and Restricted use categories. Higher-concentration permethrin products intended for yard application — the kind you can buy at a US Home Depot — fall under Commercial or Restricted classification in Canada, requiring a licensed applicator.</p>
          <p>This is partly because PMRA is more conservative about residential exposure than the US EPA, and partly because Ontario has additional Cosmetic Pesticides legislation limiting which products can be applied to residential lawns at all. The result: most yard-application permethrin you see online or in US retailers cannot be legally imported and applied to a Canadian residential property.</p>
          <p className="text-sm text-gray-600">Source: <a href="https://www.canada.ca/en/health-canada/services/consumer-product-safety/pesticides-pest-management.html" rel="noopener" target="_blank" className="text-emerald-700 underline">Health Canada &mdash; Pest Management Regulatory Agency (PMRA), Pesticides and Pest Management</a>.</p>

          <h2>Permethrin Concentrate: Dilution &amp; Coverage (Reference)</h2>
          <p>If you have researched permethrin <strong>concentrate</strong> — the 10% to 36.8% liquids sold to US homeowners under names like Permethrin SFR, Martin&rsquo;s 10%, or GordonV — this is what the dilution and coverage math looks like. Important: these concentrates are <strong>not sold to Canadian consumers</strong> and cannot be legally applied to a residential lawn in Canada. The table is a reference only so you understand what a licensed applicator is metering when they treat your yard.</p>
          <div className="not-prose rounded-xl border border-navy-100 overflow-hidden my-4">
            <table className="w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-3 py-2 text-left">Concentrate</th>
                  <th className="px-3 py-2 text-left">Typical dilution</th>
                  <th className="px-3 py-2 text-left">Finished %</th>
                  <th className="px-3 py-2 text-left">Coverage per gallon mixed</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Permethrin SFR 36.8%', '1.5 oz per gal water', '~0.5%', '~1,000 sq ft (turf/foliage)'],
                  ['Permethrin 13.3% (10% AI)', '4 oz per gal water', '~0.5%', '~1,000 sq ft'],
                  ['Martin’s 10%', '5 oz per gal water', '~0.5%', '~1,000 sq ft'],
                  ['Sawyer 0.5% (clothing, ready-to-use)', 'No dilution — RTU', '0.5%', '1 bottle ≈ 2 full outfits'],
                ].map(([c, d, f, cov]) => (
                  <tr key={c} className="border-b border-navy-50 last:border-0">
                    <td className="px-3 py-2 font-bold text-brand-800">{c}</td>
                    <td className="px-3 py-2 font-mono text-gray-800">{d}</td>
                    <td className="px-3 py-2 font-mono text-gray-800">{f}</td>
                    <td className="px-3 py-2 text-xs text-gray-600">{cov}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500">Coverage is approximate and varies with foliage density and sprayer calibration. In Canada, only the ready-to-use Sawyer 0.5% row is a legal consumer purchase — the concentrate rows require a licensed applicator. For a legal whole-yard treatment, <Link href="/free-yard-assessment">get a free yard assessment</Link>.</p>

          <h2>What You CAN Buy as a Canadian Consumer</h2>
          <h3>1. Sawyer Permethrin Clothing Spray (0.5%)</h3>
          <p>The standard product. Apply to outdoor clothing — pants, shirts, socks, hat, hiking boots, gear bags. Let dry 24 hours before wearing. Re-apply after 6 wash cycles. Effective against ticks, mosquitoes, blackflies, and chiggers.</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink search="sawyer permethrin clothing spray">Check Sawyer Permethrin spray price on Amazon.ca →</BuyLink>
          </div>
          <h3>2. Insect Shield Factory-Treated Clothing</h3>
          <p>Pre-treated clothing from outdoor brands (ExOfficio, Orvis, Columbia, etc.) using a proprietary permethrin-bonding process. Lasts 70 wash cycles vs 6 for spray-on. Higher upfront cost ($40–$120 per garment) but far lower long-term cost for frequent hikers.</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink search="insect shield permethrin treated clothing">Shop permethrin-treated clothing on Amazon.ca →</BuyLink>
          </div>
          <h3>3. Permethrin-Treated Pet Products (Dogs Only)</h3>
          <p>Some flea/tick collars and topical treatments for dogs use permethrin-based formulations. Veterinarian prescription typically required. NEVER use on cats — even passive exposure to permethrin is fatal to cats.</p>

          <h2>The Licensed-Applicator Alternative for Whole-Yard Treatment</h2>
          <p>If you want yard-wide tick and mosquito protection (not just clothing), the only legal residential option in Ontario is hiring a licensed pesticide operator. Licensed Ontario applicators use Health Canada-approved formulations (typically bifenthrin or deltamethrin-based) that provide 21–30 days of residual yard protection per treatment.</p>
          <p>BuzzSkito is licensed under Ontario Pesticide Operator Licence #L-240-2436835197 and provides residential mosquito and tick barrier spray across the GTA. Single treatments start at $99; seasonal programs cover the full May–September season with bi-weekly or weekly applications. <Link href="/mosquito-control">Get a free quote for your property →</Link></p>

          <aside aria-label="Professional mosquito control" className="not-prose my-8 rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-white p-6 sm:p-7 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-extrabold text-brand-900 mb-2 leading-tight">Or let us handle it</h3>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">BuzzSkito&rsquo;s professional barrier spray covers your whole yard from $99 — backed by 150+ five-star reviews and serving 19 GTA cities.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/free-yard-assessment" className="btn-primary-sm">Get a Free Quote →</Link>
              <a href="tel:+12892165030" className="font-bold text-brand-800 hover:text-brand-600 transition-colors">(289) 216-5030</a>
            </div>
          </aside>

          <h2>Permethrin vs Other Repellents — Side-by-Side</h2>
          <table className="not-prose w-full text-sm border-collapse border border-navy-100 rounded-lg overflow-hidden my-4">
            <thead className="bg-brand-50">
              <tr><th className="px-3 py-2 text-left">Compound</th><th className="px-3 py-2 text-left">Application</th><th className="px-3 py-2 text-left">Duration</th><th className="px-3 py-2 text-left">Best For</th></tr>
            </thead>
            <tbody>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Permethrin</strong></td><td className="px-3 py-2">Clothing (NOT skin)</td><td className="px-3 py-2">6 weeks / 6 washes</td><td className="px-3 py-2">Hiking, ticks, hardcore outdoors</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">DEET 30%</td><td className="px-3 py-2">Skin</td><td className="px-3 py-2">5–8 hours</td><td className="px-3 py-2">Active outdoor use</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">Picaridin 20%</td><td className="px-3 py-2">Skin</td><td className="px-3 py-2">5–7 hours</td><td className="px-3 py-2">DEET alternative, kid-friendly</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><Link href="/blog/thermacell-canada-where-to-buy">Thermacell</Link></td><td className="px-3 py-2">4.5m radius</td><td className="px-3 py-2">4 hr per mat</td><td className="px-3 py-2">Stationary patio use</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">Bifenthrin (Pro)</td><td className="px-3 py-2">Whole yard</td><td className="px-3 py-2">21–30 days</td><td className="px-3 py-2">Licensed barrier spray</td></tr>
            </tbody>
          </table>

          <h2>Stacking Permethrin with Other Strategies</h2>
          <p>Smart Ontario hikers and homeowners use permethrin as ONE layer of a multi-tool strategy:</p>
          <ol>
            <li><strong>Permethrin clothing spray</strong> for hiking, yard work in tick zones, evening walks</li>
            <li><strong>DEET or picaridin on exposed skin</strong> for active outdoor use</li>
            <li><strong>Thermacell on the patio</strong> for stationary repellent zone</li>
            <li><strong>BTI dunks/bits</strong> in any standing water on your property</li>
            <li><strong>Professional barrier spray</strong> for whole-yard residual protection</li>
          </ol>

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/mosquito-dunks-canada-guide">Mosquito Dunks Canada — Where to Buy + How They Work</Link></li>
            <li><Link href="/blog/thermacell-canada-where-to-buy">Thermacell Canada — Where to Buy + Do They Work</Link></li>
            <li><Link href="/blog/mosquito-bits-canada-vs-dunks">Mosquito Bits Canada vs Dunks</Link></li>
            <li><Link href="/blog/mosquito-repellent-guide-ontario-2026">Mosquito Repellent Guide — Ontario 2026</Link></li>
            <li><Link href="/tick-control">BuzzSkito Tick Control Service</Link></li>
          </ul>
        </div>
      </article>

      <CTASection heading="Permethrin Protects Your Clothing · Barrier Spray Protects Your Yard" subtext="Get a free quote for licensed barrier spray. From $99. Health Canada approved. Ontario Licence #L-240-2436835197." variant="dark" />
    </>
  )
}
