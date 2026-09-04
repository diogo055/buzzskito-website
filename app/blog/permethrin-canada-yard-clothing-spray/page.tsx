import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import BuyLink from '@/components/BuyLink'
import AwardRow from '@/components/AwardRow'
import StickyBuyBar from '@/components/StickyBuyBar'
import FreshnessStamp from '@/components/FreshnessStamp'
import AuthorByline from '@/components/AuthorByline'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import { tagForSlug } from '@/lib/amazon-clusters'

const SLUG = 'permethrin-canada-yard-clothing-spray'
const DATE = '2026-05-01'
const UPDATED = '2026-07-12'
const TITLE = 'Permethrin Canada: Where to Buy + Is It Legal? (2026)'

const FAQS = [
  {
    question: 'Is permethrin legal in Canada?',
    answer: 'Yes — permethrin is legal in Canada and registered by Health Canada\'s Pest Management Regulatory Agency (PMRA). The catch is the format: low-concentration permethrin CLOTHING spray (Sawyer 0.5%) is legal to buy and use as a consumer product, and permethrin-treated clothing is legal to buy and wear. However, higher-concentration permethrin YARD/lawn concentrates are classified as commercial or restricted-class products and can only be legally applied by a licensed pest control operator. The nuance most guides miss: Health Canada states that permethrin liquids and sprays for consumers to treat their OWN clothing are not approved for use in Canada. Factory pre-treated permethrin clothing IS approved here, for ages 16 and over. A homeowner also may not spray concentrated permethrin on their own lawn.',
  },
  {
    question: 'Where to buy permethrin spray in Canada?',
    answer: 'This is where most guides, including an earlier version of this one, get Canada wrong. Health Canada has not approved consumer permethrin liquids or sprays for treating your own clothing, so a spray-on clothing treatment is not a PMRA-registered Canadian retail product and should not be expected on a Canadian shelf. What IS approved and sold here is factory pre-treated permethrin clothing, for ages 16 and over. Permethrin yard concentrate (for outdoor application) is more restricted in Canada — Health Canada PCP regulations limit residential availability. Most yard-application permethrin in Canada is restricted to licensed pest control operators using commercial concentrations.',
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
    answer: 'Sawyer permethrin clothing spray (24 oz, the standard consumer size) runs $24–$38 across Canadian retailers in 2026. Smaller 12-oz bottles are $18–$28. Permethrin-treated clothing (Sawyer Insect Shield brand) costs $40–$120 per garment depending on style. Yard-application permethrin concentrate is mostly NOT available to Canadian consumers — Health Canada restricts higher-concentration formulations to licensed applicators. Professional barrier spray treatments by licensed Ontario operators (which use bifenthrin-based formulations approved by Health Canada) start from $99 per treatment.',
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
  {
    question: 'Where can I buy permethrin near me in Canada?',
    answer: 'Locally, the permethrin option Health Canada actually approves is factory pre-treated clothing — the Wind River No Fly Zone line sold through Mark\'s is the established Canadian example. Consumer spray-on clothing treatments are not approved for use in Canada, so a Canadian shelf is not where you will find them. Yard-application permethrin concentrate is not sold to consumers anywhere in Canada — Health Canada PMRA restricts it to licensed applicators. For whole-yard tick and mosquito treatment, hire a licensed Ontario operator instead.',
  },
  {
    question: 'Where do you buy Sawyer permethrin spray in Canada?',
    answer: 'Consumer permethrin clothing sprays are not approved for use in Canada, so Canadian chains do not stock them as a registered consumer product. The approved Canadian route is factory pre-treated clothing, which carries a PMRA-required lining between the treated fabric and your skin and is marketed here for mosquitoes. It is a clothing-and-gear spray — never apply it to your lawn or skin.',
  },
  {
    question: 'How do you get permethrin in Canada?',
    answer: 'For clothing use, simply buy ready-to-use Sawyer 0.5% permethrin spray at Canadian outdoor retailers, or buy factory-treated Insect Shield garments — both are legal consumer products. What you cannot legally get in Canada is yard/turf permethrin concentrate: Health Canada PMRA classifies it as commercial- or restricted-class, so only a licensed applicator can obtain and apply it. For whole-yard protection, book a licensed Ontario operator like BuzzSkito.',
  },
  {
    question: 'Why is permethrin not on Canadian store shelves?',
    answer: 'Permethrin clothing SPRAY is not approved for consumer use in Canada, so it is not a registered product on Canadian shelves — pre-treated clothing is the approved format here. What you also will not find is yard/turf permethrin concentrate: Health Canada\'s Pest Management Regulatory Agency (PMRA) classifies higher-concentration formulations as commercial- or restricted-class, so they are kept off consumer shelves and reserved for licensed applicators. The US EPA allows the same concentrations in retail packaging, which is why they appear at US stores but not Canadian ones.',
  },
  {
    question: 'Is permethrin illegal in Canada?',
    answer: 'No — permethrin is not illegal in Canada, and that is the wrong question to ask. Permethrin is registered by Health Canada\'s Pest Management Regulatory Agency (PMRA) across structural, garden, agricultural and veterinary uses, and PMRA re-confirmed those registrations in Re-evaluation Decision RVD2019-11 (26 August 2019). The right question is which FORMAT is approved for which USE. Health Canada has not approved any permethrin liquid or spray sold for consumers to treat their own clothing, and per RVD2019-11 the household permethrin products that ARE registered here are expressly not labelled for clothing, furniture, mattresses, linens or toys. So permethrin is legal; consumer clothing-treatment spray is the specific thing Canada has not approved.',
  },
  {
    question: 'Can you buy permethrin spray in Canada?',
    answer: 'You can buy permethrin sprays in Canada — just not the clothing kind. PMRA-registered, ready-to-use permethrin sprays for structural and garden use are sold at Canadian retail (Wilson CrawlOut Indoor/Outdoor at Canadian Tire is the most widely stocked example), and Canadian-made permethrin concentrates such as Garden+ Protector from Superior Control Products are sold direct to consumers through garden retailers. What Health Canada has not approved is a permethrin liquid or spray sold for you to treat your own clothing — which is why Sawyer is not on a Canadian shelf. Always check for a Canadian PCP registration number on the label and confirm your use site is listed before you buy.',
  },
  {
    question: 'Does Canadian Tire sell permethrin?',
    answer: 'Yes. Canadian Tire stocks Wilson CrawlOut Indoor/Outdoor, a ready-to-use permethrin spray in a 1 L bottle, alongside other domestic-class insecticides. It is labelled for crawling insects using perimeter, spot, and crack-and-crevice application — the application patterns PMRA left registered in Re-evaluation Decision RVD2019-11. It is not labelled for treating clothing, and it is not a mosquito or tick clothing product. Stock is seasonal and varies by store, so check the label for the PCP registration number and the listed pests before you buy.',
  },
  {
    question: 'Does Home Depot sell permethrin?',
    answer: 'Yes — Home Depot Canada lists Wilson CrawlOut, the same 1 L ready-to-use permethrin spray sold at Canadian Tire, Home Hardware and RONA. Stock varies by location and season, so call ahead rather than driving over. What you will not find at any Canadian Home Depot is a permethrin clothing spray or a high-concentration yard concentrate. Note that homedepot.com (US) listings for permethrin concentrate such as Permethrin SFR or Martin\'s 10% are US-registered products; they are not legal to import and apply on a Canadian residential property, and CBSA can refuse entry to unregistered pest control products under the Pest Control Products Act.',
  },
  {
    question: 'Is permethrin really safe for humans?',
    answer: 'At the exposures involved in treated clothing, the toxicology is reassuring. The National Pesticide Information Center (NPIC, Oregon State University) Permethrin General Fact Sheet notes that very little permethrin is absorbed through human skin, and that what does get absorbed is broken down and excreted quickly rather than stored. The realistic human hazards are irritation — skin, eyes and airway from spraying liquid indoors or without ventilation. Health Canada sets its own conditions for permethrin-treated clothing sold in Canada: it is intended for people 16 and older, it is permitted for pregnant women but not recommended while nursing, and it should be kept away from young children who might chew treated fabric.',
  },
  {
    question: 'Is DEET or permethrin better?',
    answer: 'They are not substitutes — they work on different surfaces and the correct answer is usually both. Permethrin is a contact insecticide for FABRIC: it kills ticks and mosquitoes that land on treated cloth and it survives washing. DEET is a repellent for SKIN: it stops insects landing on the skin you cannot cover, and it wears off in hours. Neither protects a yard. In Canada the choice is partly made for you: Health Canada registers DEET as a personal repellent with clear age limits (none under 6 months; 10% for ages 6 months to 12 years; up to 30% for 12 and older), while it has not approved any consumer permethrin clothing spray, so the Canadian permethrin route is factory-treated garments rather than spray-on treatment.',
  },
  {
    question: 'Can I bring Sawyer permethrin back from the US into Canada?',
    answer: 'Sawyer permethrin clothing spray is a US-registered pest control product with no Canadian PCP registration. Under the Pest Control Products Act, unregistered pest control products may be refused entry or seized at the border, and most US retailers will not ship pesticides across it. Even where shipping exists, the economics are punishing — hazardous-goods surcharges, brokerage and duty are largely fixed costs that do not scale down for one small bottle, so the landed total is typically a multiple of the US shelf price. Already-treated garments are a different category from a bottle of pesticide, and Health Canada\'s own travel health advice recommends permethrin-treated clothing for travel to mosquito-borne-disease regions. Declare anything you carry and expect the bottle, not the clothing, to be the problem.',
  },
  {
    question: 'What is Wind River No Fly Zone clothing?',
    answer: 'Wind River No Fly Zone is the permethrin-treated clothing line sold at Mark\'s, built on Burlington\'s No Fly Zone treatment technology and approved for Canadian sale in 2018 after years of work with PMRA. It is the practical domestic answer for Canadians who want permethrin protection they can legally buy in a Canadian store — shirts, pants, hoodies and socks with the permethrin bonded at the factory rather than sprayed on at home. Under Canadian rules the garments carry a lining between the treated fabric and your skin — a condition PMRA attached to the registration and one that no other jurisdiction imposes. PMRA also barred tick claims at launch, but that restriction has since been relaxed and Mark\'s now markets the line as tick and mosquito repellent clothing.',
  },
  {
    question: 'Is permethrin-treated clothing in Canada allowed to claim protection against ticks?',
    answer: 'Yes, now — but not at first, and that history explains a lot of confusing Canadian coverage. When PMRA approved permethrin-treated clothing for Canadian sale in 2018, it permitted marketing against mosquitoes but would not allow claims about effectiveness against ticks. That is why Canadian articles from that period describe mosquito protection and go quiet about blacklegged ticks, while American articles on the same garments lead with Lyme disease. The restriction has since been relaxed: Mark\'s now markets its Wind River No Fly Zone line explicitly as tick and mosquito repellent clothing. The condition that has not gone away is the lining — PMRA still requires a layer of untreated fabric between the permethrin-treated cloth and your skin, which no other jurisdiction demands.',
  },
  {
    question: 'What did PMRA decision RVD2019-11 change about permethrin?',
    answer: 'Health Canada\'s Re-evaluation Decision RVD2019-11, Permethrin and Its Associated End-use Products (published 26 August 2019), is the document that set today\'s rules. Cancelled as of 26 August 2021: electric mistblower application in attics, total-release fumigating foggers, and indoor residential broadcast application. Cancelled as of 26 August 2022: the Raid Fumigator Fumigating Fogger (PCP Reg. No. 25167). Left registered with conditions: indoor residential use limited to perimeter, spot and crack-and-crevice treatment; reduced application rates for residential yards; a maximum spray pressure of 50 psi; and no application to furniture, mattresses, linens, toys or clothing.',
  },
  {
    question: 'Can I use livestock or horse permethrin on my clothes or lawn?',
    answer: 'No. Products such as Boss Pour-On 5%, Permectrin II, Country Vet FarmGard, Absorbine UltraShield EX and Bronco are permethrin formulations registered for livestock, horses and barns, and farm supply stores sell them to the public. Using one on clothing, on a lawn, or on a patio is off-label use: under the Pest Control Products Act you must follow the label, and the label defines both the target pest and the use site. These products are also formulated with carriers and concentrations chosen for animal coats and barn surfaces, not for fabric you will wear against your skin. If a livestock permethrin is the only permethrin you can find locally, that is a signal to change strategy, not to change the label.',
  },
  {
    question: 'What insect repellents does Health Canada actually register for skin?',
    answer: 'Health Canada registers five personal repellent actives, each with its own age rules. DEET: none under 6 months, 10% for ages 6 months to 12 years, up to 30% for 12 and older. Icaridin (picaridin): none under 6 months; Health Canada sets no upper age or concentration limit, and the Canadian Paediatric Society recommends icaridin as the first choice for children 6 months to 12 years. Oil of lemon eucalyptus / p-menthane-3,8-diol (PMD): not for children under 3 years. Soybean oil: no age restriction, but short duration. Metofluthrin: an area/spatial repellent used in devices rather than a skin product. Concentration caps in Canada are lower than the US equivalents, so a repellent bought south of the border may be a strength Health Canada does not register here.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: 'Permethrin Spray Canada: Legal? Where to Buy',
  description: 'Permethrin is registered in Canada, but consumer clothing sprays are not approved — pre-treated clothing is. Yard concentrate is licensed applicators only.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug('permethrin-canada-yard-clothing-spray')

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
            <p className="text-base sm:text-lg text-white leading-relaxed">Permethrin is registered in Canada, but the format decides what you may actually buy. Health Canada states that permethrin liquids and sprays for consumers to treat their own clothing are NOT approved here; factory pre-treated permethrin clothing IS approved, for ages 16 and over. Higher-concentration yard and turf concentrate is restricted &mdash; only a licensed Ontario applicator may spray it on your lawn.</p>
          </div>
          <p className="text-xl text-brand-100 max-w-3xl">Where to buy Sawyer permethrin clothing spray in Canada, why yard-application is restricted by Health Canada, and the licensed Ontario alternative for whole-yard tick and mosquito control.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <AffiliateDisclosure />
      <StickyBuyBar tag={AMZ_TAG} name="Permethrin-treated clothing (Insect Shield)" search="insect shield permethrin treated clothing" label="Legal ready-to-wear option" />

      {/* ANSWER CAPSULE */}
      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">For most Canadians the approved permethrin option is factory pre-treated clothing, not a spray you apply yourself: Health Canada has not approved consumer permethrin liquids or sprays for treating your own clothing. Higher-concentration yard concentrate is restricted to licensed applicators, so whole-yard protection means hiring a licensed Ontario operator.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>Sawyer permethrin clothing spray (24 oz) costs $24&ndash;$38 in Canada; the 12 oz runs $18&ndash;$28.</li>
              <li>Permethrin bonds to fabric and stays effective through 6 wash cycles or about 6 weeks of wear.</li>
              <li>CDC research shows 95%+ fewer tick bites for people in permethrin-treated clothing.</li>
              <li>10%&ndash;36.8% yard/turf concentrate is not sold to Canadian consumers &mdash; it is restricted to licensed applicators.</li>
              <li>Permethrin is highly toxic to cats &mdash; let treated clothing dry 24+ hours before it enters a cat household.</li>
              <li>Licensed Ontario barrier spray (bifenthrin/deltamethrin) starts at $99 and holds a 21&ndash;30 day residual.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito, GTA mosquito &amp; tick control · 150+ five-star Google reviews</p>
          </div>
          <AwardRow tag={AMZ_TAG}
            heading="Our Picks — The Permethrin You Can Actually Buy in Canada"
            awards={[
              {
                badge: 'Best Set-and-Forget',
                name: 'Insect Shield Permethrin-Treated Clothing',
                why: 'Factory-treated garments from outdoor brands (ExOfficio, Orvis, Columbia) whose bonded permethrin survives 70 wash cycles — versus 6 for spray-on. Higher upfront cost, far lower long-term cost for frequent hikers.',
                search: 'insect shield permethrin treated clothing',
                score: 8.4,
                pros: ['Protection lasts 70 wash cycles — no annual respray', 'No handling of liquid permethrin at all', 'Sold for kids as well as adults'],
                cons: ['$40–$120 per garment adds up across a wardrobe', 'Covers only the garments you buy — the spray also treats boots, packs, and tents'],
              },
              {
                badge: 'Best Overall',
                name: 'Sawyer Permethrin Clothing + Gear Spray (24 oz)',
                why: 'The only consumer permethrin you can legally buy in Canada — spray it on pants, socks, and boots (never skin, never your lawn) and it keeps killing ticks on contact for 6 weeks or 6 wash cycles. One 24-oz bottle treats about two full outfits. Not stocked on Amazon.ca — buy it from the Canadian outdoor retailers priced in the table below.',
                score: 8.7,
                featured: true,
                pros: ['Kills ticks on contact through treated fabric', 'One application lasts 6 weeks or 6 wash cycles', 'Legal consumer product, widely stocked in Canada'],
                cons: ['Clothing and gear only — never skin, never your lawn', 'Highly toxic to cats until fully dry — air it out 24+ hours'],
              },
              {
                badge: 'Best Starter Size',
                name: 'Sawyer Permethrin Spray (12 oz)',
                why: 'The same 0.5% Sawyer formula in the smaller $18–$28 bottle — enough to treat roughly one full hiking outfit for a season of weekend trips before you commit to the big bottle. Also a Canadian-retailer buy, not an Amazon one.',
                score: 8.0,
                pros: ['Cheapest way to try permethrin-treated clothing', 'Same 6-week / 6-wash protection as the 24 oz', 'Small enough to stash in a gear bin'],
                cons: ['Runs out fast treating a family’s gear — the 24 oz costs less per ounce', 'Same rules apply: clothing only, and cats need it fully dry'],
              },
            ]}
            whichToBuy={
              <>
                <strong>Hiking or working in tick country most weekends?</strong> The <em>Best Overall</em> 24-oz Sawyer bottle treats about two full outfits and re-treats them all season. <strong>Want zero maintenance?</strong> <em>Best Set-and-Forget</em> Insect Shield clothing is factory-bonded for 70 wash cycles &mdash; buy it as the pants and socks you hike in most. <strong>Just trying permethrin out?</strong> Start with the 12-oz bottle. And if you came here for <strong>yard permethrin concentrate</strong>: it is not sold to Canadian consumers at any price &mdash; whole-yard treatment legally requires a licensed applicator, which is what our <Link href="/mosquito-control">licensed barrier spray service</Link> covers from $99.
              </>
            }
          />
        </div>
      </section>

      {/* REGULATORY RECORD — WHAT HEALTH CANADA SAYS */}
      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-xl border-2 border-amber-300 bg-amber-50 p-5 sm:p-6 my-6">
            <p className="text-xs font-extrabold uppercase tracking-wider text-amber-800 mb-2">The regulatory record · Read before you shop</p>
            <h2 className="text-xl sm:text-2xl font-extrabold text-brand-900 mb-3 leading-tight">Health Canada has not approved a consumer permethrin clothing spray</h2>
            <p className="text-[15px] text-gray-800 leading-relaxed mb-3">
              This is the single fact that separates the Canadian permethrin question from the American one, and it is worth stating before anything else on this page. The Public Health Agency of Canada&rsquo;s guidance document <em>Permethrin-treated clothing</em> (canada.ca, published 14 August 2020) is explicit: <strong>permethrin products in liquid or spray form, sold for consumers to treat their own clothing, are not approved for use in Canada.</strong> There is no Canadian PCP registration number for that format, which is why Sawyer permethrin has never had a settled place on a Canadian shelf and why &ldquo;where do I get permethrin in Canada&rdquo; is a perennial thread on Canadian hiking and camping forums rather than a solved shopping question.
            </p>
            <p className="text-[15px] text-gray-800 leading-relaxed mb-3">
              Two things follow, and both cut against the way this subject is usually written up:
            </p>
            <ul className="space-y-2 text-[15px] text-gray-800 list-disc pl-5 mb-3">
              <li><strong>Permethrin is not banned here.</strong> It is registered across structural, garden, agricultural and veterinary uses, and several permethrin products are sold to Canadian consumers today &mdash; they are simply labelled for baseboards, foundations, gardens and barns rather than for hiking pants. The <a href="#permethrin-canada-shelf" className="text-emerald-700 underline font-semibold">table of what you can actually buy</a> further down this page names them.</li>
              <li><strong>The legal Canadian route to permethrin protection is factory-treated clothing, not spray-on treatment.</strong> Garments are a different regulatory object from a bottle of pesticide, and Canada approves them under a condition that exists nowhere else in the world: a mandatory lining between the treated cloth and your skin, required by PMRA as a condition of registration.</li>
            </ul>
            <p className="text-sm text-gray-700 leading-relaxed">
              We are a licensed Ontario pesticide operator, so we will say the uncomfortable part plainly: if a page tells you to buy a permethrin clothing spray at a named Canadian retailer, check for a Canadian PCP registration number on the label before you trust it. Sections below set out PMRA&rsquo;s governing decision (RVD2019-11), the three Canadian rules for treated clothing, the permethrin products that genuinely are on Canadian shelves, and the cross-border reality &mdash; each with the authority named.
            </p>
            <p className="text-xs text-gray-500 mt-3">Sources: Public Health Agency of Canada, <em>Permethrin-treated clothing</em> (14 August 2020); Health Canada Pest Management Regulatory Agency, <em>Re-evaluation Decision RVD2019-11: Permethrin and Its Associated End-use Products</em> (26 August 2019).</p>
          </div>
        </div>
      </section>

      {/* WHERE TO BUY */}
      <section className="bg-gradient-to-br from-emerald-50 to-white border-b border-emerald-200 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Where to Buy in Canada · Updated July 2026</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">Permethrin Spray: Where to Buy in Canada</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            Health Canada has <strong>not approved</strong> permethrin liquids or sprays for consumers to treat their own clothing, so a spray-on treatment is not a registered Canadian consumer product and Canadian chains do not stock it as one. What IS approved here is <strong>factory pre-treated permethrin clothing</strong>, for ages 16 and over. Permethrin <strong>YARD concentrate</strong> is separately restricted to licensed pest control operators under PMRA regulations.
          </p>
          <div className="rounded-xl border border-navy-100 overflow-x-auto bg-white shadow-sm">
            <table className="min-w-[560px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Format</th>
                  <th className="px-4 py-3 text-left">Approved for consumers in Canada?</th>
                  <th className="px-4 py-3 text-left">Where it comes from</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Factory pre-treated clothing', ok: 'Yes \u2014 ages 16+', where: 'Canadian retail (e.g. the Wind River No Fly Zone line at Mark\u2019s); also sold online' },
                  { name: 'Consumer spray-on clothing treatment', ok: 'No \u2014 not approved', where: 'Health Canada has not registered this format for consumer use' },
                  { name: 'Yard / turf concentrate', ok: 'No \u2014 licensed applicators only', where: 'Commercial and restricted class under PMRA' },
                ].map(({ name, ok, where }) => (
                  <tr key={name} className="border-b border-navy-50 last:border-0">
                    <td className="px-4 py-3 font-bold text-brand-800">{name}</td>
                    <td className="px-4 py-3 text-gray-800">{ok}</td>
                    <td className="px-4 py-3 text-xs text-gray-600">{where}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <BuyLink tag={AMZ_TAG} search="insect shield permethrin treated clothing">Shop permethrin-treated clothing on Amazon.ca →</BuyLink>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Source: Public Health Agency of Canada, <em>Permethrin-treated clothing</em>. Pre-treated garments sold in Canada carry a PMRA-required lining between the treated fabric and the skin, and are marketed here for mosquitoes.
          </p>
          <div className="mt-5 rounded-xl bg-rose-50 border-l-4 border-rose-400 p-4">
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong className="text-rose-900">⚠️ Permethrin yard spray is RESTRICTED in Canada.</strong> Health Canada PMRA limits yard-application permethrin concentrations to licensed applicators. For whole-yard tick and mosquito treatment, you need either: (1) a licensed Ontario operator using approved residential formulations, or (2) BTI bits/dunks for standing-water larvae plus a Thermacell for personal repellent zones. <Link href="/mosquito-control" className="text-emerald-700 underline font-semibold">Get a quote for licensed barrier spray</Link> from BuzzSkito (Ontario Pesticide Operator Licence #L-240-2436835197).
            </p>
          </div>
        </div>
      </section>

      {/* KEY FACTS */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Permethrin Key Facts (Canada)</h2>
          <div className="rounded-xl border border-navy-100 overflow-x-auto">
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
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />
          <p className="not-prose text-sm text-gray-600 mb-1">The permethrin brand you will find in Canadian stores is Sawyer — for clothing, gear, and tents (never skin):</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="insect shield permethrin treated clothing">Shop permethrin-treated clothing on Amazon.ca →</BuyLink>
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
              <tr className="border-t border-navy-50"><td className="px-3 py-2">Consumer 0.5% clothing/gear spray</td><td className="px-3 py-2 text-rose-700 font-semibold">Not approved in Canada</td><td className="px-3 py-2">Pre-treated clothing is the approved format</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">Insect Shield treated clothing</td><td className="px-3 py-2 text-emerald-700 font-semibold">Yes — buy &amp; wear</td><td className="px-3 py-2">Outdoor apparel brands, Amazon.ca</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">10%–36.8% yard/turf concentrate</td><td className="px-3 py-2 text-rose-700 font-semibold">No — licensed applicator only</td><td className="px-3 py-2">Not sold to Canadian consumers</td></tr>
            </tbody>
          </table>
          <p>So if you are searching &ldquo;is permethrin legal in Canada,&rdquo; the honest answer is: yes for your clothes, no for your lawn. For whole-yard protection you legally need a licensed operator — see our <Link href="/tick-control">tick control</Link> and <Link href="/mosquito-control">mosquito control</Link> services below.</p>

          <h2>Why Yard-Application Permethrin Is Restricted in Canada</h2>
          <p>Health Canada&rsquo;s Pest Management Regulatory Agency (PMRA) classifies pesticides into Domestic, Commercial, and Restricted use categories. Higher-concentration permethrin products intended for yard application — the kind you can buy at a US Home Depot — fall under Commercial or Restricted classification in Canada, requiring a licensed applicator.</p>
          <p>The same one-glance test applies to every household insecticide you buy online, not just permethrin: look for a Canadian PCP registration number on the label photo, and then check that your pest and your intended use site both appear on that label. Cross-border marketplace listings surface US-registered stock to Canadian buyers constantly, and it is the single most common way a Canadian ends up with a product they cannot legally use. We apply that check product by product in our Canadian buying guides for <Link href="/blog/best-cockroach-spray-canada">cockroach spray</Link>, <Link href="/blog/best-earwig-killer-canada">earwig traps and killers</Link>, and <Link href="/blog/best-centipede-killer-canada">centipede products</Link> &mdash; the last two include the American perimeter sprays that have no Canadian counterpart at all.</p>
          <p>This is partly because PMRA is more conservative about residential exposure than the US EPA, and partly because Ontario has additional Cosmetic Pesticides legislation limiting which products can be applied to residential lawns at all. The result: most yard-application permethrin you see online or in US retailers cannot be legally imported and applied to a Canadian residential property.</p>
          <p className="text-sm text-gray-600">Source: <a href="https://www.canada.ca/en/health-canada/services/consumer-product-safety/pesticides-pest-management.html" rel="noopener" target="_blank" className="text-emerald-700 underline">Health Canada &mdash; Pest Management Regulatory Agency (PMRA), Pesticides and Pest Management</a>.</p>

          <h2>The PMRA Decision Behind Today&rsquo;s Rules: RVD2019-11</h2>
          <p>Almost everything you can and cannot do with permethrin in Canada traces back to one document, and it is worth knowing by name because nobody else in the search results will hand it to you. Health Canada&rsquo;s Pest Management Regulatory Agency published <strong>Re-evaluation Decision RVD2019-11, <em>Permethrin and Its Associated End-use Products</em></strong>, on <strong>26 August 2019</strong>. It is the regulatory backbone of every answer on this page.</p>
          <p><strong>Cancelled as of 26 August 2021:</strong></p>
          <ul>
            <li>Electric mistblower application of permethrin in attics</li>
            <li>Total-release fumigating foggers &mdash; the &ldquo;bug bomb&rdquo; format</li>
            <li>Indoor residential <em>broadcast</em> application, meaning general spraying of whole floors, rooms or open surfaces</li>
          </ul>
          <p><strong>Cancelled as of 26 August 2022:</strong> the Raid Fumigator Fumigating Fogger, PCP Registration No. 25167.</p>
          <p><strong>Left registered, with conditions attached:</strong></p>
          <ul>
            <li>Indoor residential use restricted to <em>perimeter, spot, and crack-and-crevice</em> treatment only</li>
            <li>Reduced application rates for residential yards</li>
            <li>A maximum spray pressure of 50 psi</li>
            <li>No application to furniture, mattresses, linens, toys &mdash; or clothing</li>
          </ul>
          <p>That last condition is the one Canadians trip over, and it explains a lot of confusion. A permethrin product legally registered in Canada for household use is <strong>expressly not labelled for clothing</strong>. Reading the back of a Canadian permethrin bottle and finding instructions about baseboards and foundations rather than hiking pants is not a manufacturer oversight &mdash; it is the label PMRA approved.</p>
          <p className="text-sm text-gray-600">Source: Health Canada Pest Management Regulatory Agency, <em>Re-evaluation Decision RVD2019-11: Permethrin and Its Associated End-use Products</em> (26 August 2019).</p>

          <h2>Permethrin-Treated Clothing: Three Canadian Rules Nobody Explains</h2>
          <p>Factory-treated garments and home spray-on treatment are two different regulatory objects in Canada, and Health Canada treats them very differently. One rule comes from the Public Health Agency of Canada&rsquo;s published guidance; the other two are conditions PMRA attached to the registration that first brought treated clothing to Canadian retail, and they are documented in the trade and outdoor press rather than in a consumer-facing canada.ca page. Taken together they are, as far as we can establish, unique to this country:</p>
          <ol>
            <li><strong>Consumer spray-on treatment is not approved.</strong> Health Canada has not approved any permethrin liquid or spray sold for consumers to treat their own clothing. This one sentence is the origin of every &ldquo;why can&rsquo;t I buy this here&rdquo; thread on Canadian outdoor forums, and it is the reason the honest Canadian answer is a garment rather than a bottle.</li>
            <li><strong>Treated garments must carry a lining.</strong> PMRA requires a second layer of fabric between the permethrin-treated cloth and the wearer&rsquo;s skin. No other jurisdiction imposes this. It is why Canadian-approved permethrin garments are built with the treated layer on the outside and a liner inboard of it, and why they can feel heavier than an American equivalent in the same weight class.</li>
            <li><strong>The tick claim was originally withheld &mdash; and has since been allowed.</strong> When PMRA approved treated clothing for Canadian sale in 2018, it permitted marketing against mosquitoes but not against ticks, which is why early Canadian coverage of these garments talks about mosquitoes and goes conspicuously quiet about blacklegged ticks. That restriction has since been relaxed: Mark&rsquo;s now markets the Wind River No Fly Zone line explicitly as tick and mosquito repellent clothing. If you are reading an older Canadian article that says the tick claim is forbidden, it is describing the 2018 position rather than today&rsquo;s.</li>
          </ol>
          <p>Health Canada attaches use conditions as well: permethrin-treated clothing is intended for people <strong>16 and older</strong>; it is permitted for pregnant women but not recommended while nursing; and it should be kept away from young children who might chew treated fabric. On pets, Health Canada&rsquo;s position is narrower and more precise than the general warning you will see repeated everywhere &mdash; the safety of permethrin-treated clothing <strong>has not been evaluated for pets in Canada at all</strong>. That is a statement about absent data rather than about measured risk, and if you own a cat it should be read as a reason for more caution, not less. Cats metabolise pyrethroids poorly, which is covered in the toxicology section below.</p>
          <p className="text-sm text-gray-600">Sources: rule 1 and the use conditions &mdash; Public Health Agency of Canada, <em>Permethrin-treated clothing</em> (canada.ca, published 14 August 2020), and Health Canada, <em>Personal insect repellents</em>. Rules 2 and 3 &mdash; the lining requirement and the original tick-claim restriction &mdash; are conditions PMRA attached to the 2018 Canadian registration; they are not set out on a consumer-facing canada.ca page, and are documented in contemporaneous outdoor and trade reporting on that approval.</p>

          <h2>Permethrin Concentrate: Dilution &amp; Coverage (Reference)</h2>
          <p>If you have researched permethrin <strong>concentrate</strong> — the 10% to 36.8% liquids sold to US homeowners under names like Permethrin SFR, Martin&rsquo;s 10%, or GordonV — this is what the dilution and coverage math looks like. Important: these concentrates are <strong>not sold to Canadian consumers</strong> and cannot be legally applied to a residential lawn in Canada. The table is a reference only so you understand what a licensed applicator is metering when they treat your yard.</p>
          <div className="not-prose rounded-xl border border-navy-100 overflow-x-auto my-4">
            <table className="min-w-[560px] w-full text-sm">
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
            <BuyLink tag={AMZ_TAG} search="insect shield permethrin treated clothing">Shop permethrin-treated clothing on Amazon.ca →</BuyLink>
          </div>
          <h3>2. Insect Shield Factory-Treated Clothing</h3>
          <p>Pre-treated clothing from outdoor brands (ExOfficio, Orvis, Columbia, etc.) using a proprietary permethrin-bonding process. Lasts 70 wash cycles vs 6 for spray-on. Higher upfront cost ($40–$120 per garment) but far lower long-term cost for frequent hikers.</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="insect shield permethrin treated clothing">Shop permethrin-treated clothing on Amazon.ca →</BuyLink>
          </div>
          <h3>3. Permethrin-Treated Pet Products (Dogs Only)</h3>
          <p>Some flea/tick collars and topical treatments for dogs use permethrin-based formulations. Veterinarian prescription typically required. NEVER use on cats — even passive exposure to permethrin is fatal to cats.</p>
          <h3>4. Permethrin Indoor Residuals (Bed Bugs)</h3>
          <p>Permethrin&rsquo;s other legal Canadian consumer route is indoors: PMRA domestic-class bed bug residuals such as Doktor Doom Pro Max use permethrin on baseboards, bed frames, and furniture perimeters, where a surface residual is exactly the right tool. Same active, entirely different label and directions from anything you would put on clothing — see our <Link href="/blog/bed-bug-spray-canada">guide to the best bed bug sprays and killers in Canada</Link> for which products carry a Canadian PCP number and which US names are not legal here.</p>

          <h2 id="permethrin-canada-shelf">Permethrin Products That Genuinely Are on Canadian Shelves</h2>
          <p>Here is where most coverage of this subject goes wrong in the opposite direction. It is not true that permethrin is absent from Canadian retail. Several PMRA-registered permethrin products are sold to Canadian consumers right now, including a Canadian-made concentrate &mdash; they are simply labelled for <em>structural, garden, and livestock</em> use rather than for clothing. If your search was &ldquo;where to buy permethrin&rdquo; and you wanted something you could put in a cart today, this is that list.</p>
          <div className="not-prose rounded-xl border border-navy-100 overflow-x-auto my-4">
            <table className="min-w-[640px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-3 py-2 text-left">Product</th>
                  <th className="px-3 py-2 text-left">Format</th>
                  <th className="px-3 py-2 text-left">Typically sold at</th>
                  <th className="px-3 py-2 text-left">What the label covers</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Wilson CrawlOut Indoor/Outdoor', 'Ready-to-use 1 L spray', 'Canadian Tire', 'Crawling insects — perimeter, spot, crack-and-crevice'],
                  ['Garden+ Protector Permethrin', 'Concentrate, 500 mL, 12.5 g/L (~1.25%)', 'Urban Nature Store, garden retailers', 'Listed garden and perimeter pests — made in Canada by Superior Control Products'],
                  ['Doktor Doom PM 50', 'Concentrate, 1 L', 'Growing-supply and farm retailers', 'Listed pests on fruit trees, vegetables and ornamental plants grown outdoors'],
                  ['ECOPEST Total Insect Killer', 'Ready-to-use / concentrate', 'Canadian hardware and garden retail', 'Listed household and perimeter insects'],
                  ['OnGuard Pro-Perm', 'Concentrate', 'Pro and agricultural supply', 'Commercial-class label — read the classification'],
                  ['Boss Pour-On, Permectrin II, Country Vet FarmGard, UltraShield EX, Bronco', 'Pour-on, spray, wipe', 'Farm and equine supply', 'Livestock, horses, and barns only'],
                ].map(([p, f, w, l]) => (
                  <tr key={p} className="border-b border-navy-50 last:border-0 align-top">
                    <td className="px-3 py-2 font-bold text-brand-800">{p}</td>
                    <td className="px-3 py-2 text-gray-800">{f}</td>
                    <td className="px-3 py-2 text-gray-700">{w}</td>
                    <td className="px-3 py-2 text-xs text-gray-600">{l}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500">Stock, pack sizes and formulations change between seasons and provinces. Before you buy any of these, do the two-second check that settles the whole question: find the <strong>Canadian PCP registration number</strong> printed on the label, then confirm that both your pest and your use site are named on that label. If either is missing, the product is not legal for what you have in mind, whatever the shelf tag says.</p>
          <p><strong>The livestock row deserves a warning of its own.</strong> Farm supply stores will sell you Boss Pour-On or Permectrin II without a licence, and it is a common workaround for Canadians who cannot find permethrin anywhere else. Using one on clothing, a lawn, or a patio is off-label. Under the Pest Control Products Act the label is the law, and the label defines both the target pest and the use site. These formulations were also built around carriers and concentrations chosen for animal coats and barn surfaces &mdash; not for fabric worn against skin. If a livestock permethrin is the only permethrin you can find locally, treat that as a signal to change strategy rather than to reinterpret the label.</p>

          <h3>Wind River No Fly Zone: the treated-clothing line Canada actually approved</h3>
          <p>The gap in most Canadian permethrin coverage is a brand nobody mentions. Mark&rsquo;s carries <strong>Wind River No Fly Zone</strong> &mdash; shirts, pants, hoodies and socks built on Burlington&rsquo;s No Fly Zone permethrin treatment technology, approved for Canadian sale in 2018 after years of work with PMRA. It is the practical domestic answer for someone who wants permethrin protection they can legally buy in a Canadian store, and under the rules above the garments carry the PMRA-required lining. The line is now marketed as tick and mosquito repellent clothing, notwithstanding the mosquitoes-only restriction PMRA imposed at launch.</p>
          <p>Insect Shield, the American factory-treatment brand that dominates every US article on this topic, reaches Canadian buyers through cross-border retail rather than through domestic PMRA-approved distribution. That distinction matters for warranty, returns and duty, and it is worth knowing which side of the border a garment is shipping from before you order it.</p>
          <p>Whichever route you take, treated clothing protects the person wearing it and nothing else. If the exposure you are actually worried about is children or a dog on the lawn, that is a different problem with a different answer &mdash; our guides to <Link href="/blog/how-to-keep-ticks-out-of-yard-ontario">keeping ticks out of an Ontario yard</Link> and <Link href="/blog/tick-prevention-yard-ontario-safe-for-kids">kid-safe tick prevention in the yard</Link> cover the ground-level version, and <Link href="/blog/do-ticks-die-in-the-washing-machine">whether ticks survive the washing machine</Link> matters more than most people expect once treated clothing comes off.</p>

          <h2>The Licensed-Applicator Alternative for Whole-Yard Treatment</h2>
          <p>If you want yard-wide tick and mosquito protection (not just clothing), the only legal residential option in Ontario is hiring a licensed pesticide operator. Licensed Ontario applicators use Health Canada-approved formulations (typically bifenthrin or deltamethrin-based) that provide 21–30 days of residual yard protection per treatment.</p>
          <p>BuzzSkito is licensed under Ontario Pesticide Operator Licence #L-240-2436835197 and provides residential mosquito and tick barrier spray across the GTA. Single treatments start at $99; seasonal mosquito programs cover the full May–September season with bi-weekly or weekly applications, and the seasonal tick program runs 5 sprays. The properties that need it most are the ones backing onto the same escarpment and moraine habitat you would spray your hiking pants for &mdash; our <Link href="/caledon-tick-spray">tick spray in Caledon</Link> and <Link href="/burlington-tick-spray">Burlington tick control</Link> pages show what a yard treatment covers on those lots. <Link href="/mosquito-control">Get a free quote for your property →</Link></p>

          <aside aria-label="Professional mosquito control" className="not-prose my-8 rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-white p-6 sm:p-7 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-extrabold text-brand-900 mb-2 leading-tight">Or let us handle it</h3>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">BuzzSkito&rsquo;s professional barrier spray covers your whole yard from $99 — backed by 150+ five-star reviews and serving 19 GTA cities.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/free-yard-assessment" className="btn-primary-sm">Get a Free Quote →</Link>
              <a href="tel:+12892165030" className="font-bold text-brand-800 hover:text-brand-600 transition-colors">(289) 216-5030</a>
            </div>
          </aside>

          <h2>Permethrin vs Other Repellents — Side-by-Side</h2>
          <table className="min-w-[560px] not-prose w-full text-sm border-collapse border border-navy-100 rounded-lg overflow-hidden my-4">
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
          <p>Layer five is the only one that protects the ground rather than the person walking over it. Where a ravine or woodlot runs right behind the fence line &mdash; the highest-exposure setup our <Link href="/toronto-tick-spray">Toronto tick spray</Link> page describes &mdash; permethrin-treated clothing keeps the hiker safe but does nothing for kids playing on the lawn.</p>
          <p>Each of those five layers is its own buying decision, and the products we have vetted for Canadian availability and PMRA registration — skin repellents, treated clothing, larvicides, area devices — are sorted by pest in our <Link href="/pest-product-guides">guide to Canadian pest control products</Link>.</p>
          <p>There is a sixth layer that uses no chemistry at all: a physical barrier. Permethrin protects the clothing you are wearing, but it does nothing for the two hours you sit still at a picnic table — and mesh does that job perfectly, with nothing to reapply and no PMRA registration to think about. If you eat outdoors at a campsite, a dock, or a cottage deck, a <Link href="/blog/best-screen-tent-canada">screen tent or screen house</Link> is the cheapest reliable bite-free zone you can buy, and it works on black flies too, which repellents handle noticeably worse.</p>
          <p>Notice what is <em>not</em> on that list: a UV bug trap. They are the most-advertised backyard device in Canada and the least useful layer here — independent trap studies put mosquitoes under 5% of a UV trap&rsquo;s catch, and ticks are not attracted to light at all. If one is on your shortlist anyway, read <Link href="/blog/dynatrap-canada-review">whether DynaTraps actually work on mosquitoes</Link> before you spend the money.</p>

          <h2>&ldquo;Is Permethrin Banned in Canada?&rdquo; &mdash; Why the Question Keeps Getting Asked</h2>
          <p>Of all the ways Canadians phrase this search, <em>banned</em> is the one that comes up when someone has already tried to buy the stuff and failed. The word is wrong but the frustration behind it is entirely reasonable, and the resolution is worth spelling out because no result on page one currently does it cleanly.</p>
          <p>Permethrin is not banned in Canada. It is registered, re-evaluated, and actively sold. PMRA reviewed it in full and re-confirmed its registrations in RVD2019-11. Farm supply stores sell it by the jug for barns. Canadian Tire sells a ready-to-use bottle of it. A Canadian company manufactures a consumer garden concentrate of it. What Canada has not approved is one narrow, specific thing: <strong>a permethrin liquid or spray sold to consumers for treating their own clothing.</strong></p>
          <p>The tension people notice is real, though. The Government of Canada&rsquo;s own travel health advice recommends permethrin-treated clothing for travellers heading to regions with mosquito-borne disease &mdash; advice a Canadian cannot fully act on with a product bought in a Canadian store, because the spray-on format does not exist here and the approved garments may not be marketed against ticks. That is not hypocrisy so much as two regulatory regimes, travel health and pesticide registration, arriving at different places. But it is why the search results for this topic are full of forum threads rather than product pages, and why an American article on permethrin is close to useless to a Canadian reader.</p>
          <p>If your underlying question is really &ldquo;how do I not get a tick bite in Ontario,&rdquo; the honest ranking of what is available to you domestically is: treated clothing where you can buy it, a Health Canada-registered skin repellent for what the clothing does not cover, a disciplined <Link href="/blog/how-to-do-a-tick-check">tick check</Link> every time you come in, and a treated yard if the exposure is at home rather than on the trail. Our <Link href="/blog/best-tick-repellent-yard-canada">guide to yard tick repellents available in Canada</Link> works through the products for that last layer, and the <Link href="/blog/ultimate-tick-control-guide-ontario">complete Ontario tick control guide</Link> puts the whole sequence in order.</p>

          <h2>Buying Permethrin Across the Border: What Actually Happens</h2>
          <p>Every Canadian discussion of permethrin arrives here eventually, so it is worth being concrete rather than coy. The typical plan is to order a US clothing spray online, or to pick one up on a trip south and bring it home. Three things get in the way.</p>
          <p><strong>Most US retailers will not ship it.</strong> Pesticides are a restricted shipping category, and the large outdoor retailers generally block them at the Canadian address stage rather than at checkout. The marketplace listings that appear to solve this are usually third-party resellers, which is a different transaction with different recourse.</p>
          <p><strong>The landed cost is not the shelf price.</strong> Where cross-border shipping is available at all, hazardous-goods surcharges, brokerage fees and duty stack on top of a small bottle. On a single small bottle those fixed fees do not scale down, so the delivered cost commonly lands at a multiple of the US shelf price rather than a small premium over it. Price the whole landed total before you order, not the listing.</p>
          <p><strong>The product has no Canadian registration.</strong> This is the part that is not merely inconvenient. A US-registered pest control product with no Canadian PCP number is an unregistered pest control product here, and under the Pest Control Products Act unregistered products may be refused entry or seized at the border. Declare what you are carrying. In practice the bottle of pesticide is the exposure; garments that have already been treated are a different category from a container of concentrate, which is one more reason the treated-clothing route is the cleaner one for a Canadian.</p>
          <p>None of that is legal advice, and border outcomes vary. The practical read is simply that importing is an expensive and uncertain route to a protection level you can reach domestically with a treated garment plus a registered skin repellent.</p>

          <h2>What Health Canada Does Register: Repellents by Active Ingredient</h2>
          <p>Because the permethrin spray route is closed, the Canadian shopping decision moves to skin and area repellents &mdash; and Canada&rsquo;s age limits and concentration caps differ from the American ones badly enough that a repellent bought on a US trip may be a strength Health Canada does not register here. These are the five personal repellent actives Health Canada registers, with the age guidance that goes with them.</p>
          <div className="not-prose rounded-xl border border-navy-100 overflow-x-auto my-4">
            <table className="min-w-[640px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-3 py-2 text-left">Active ingredient</th>
                  <th className="px-3 py-2 text-left">Health Canada age guidance</th>
                  <th className="px-3 py-2 text-left">Applied to</th>
                  <th className="px-3 py-2 text-left">Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['DEET', 'None under 6 months · 10% for 6 months–12 years · up to 30% for 12+', 'Skin', 'Canada caps consumer DEET at 30% — US products go far higher'],
                  ['Icaridin (picaridin)', 'None under 6 months · Health Canada sets no upper age or concentration limit', 'Skin', 'The Canadian Paediatric Society recommends icaridin as first choice for children 6 months to 12 years'],
                  ['Oil of lemon eucalyptus / PMD', 'Not for children under 3 years', 'Skin', 'Plant-derived but genuinely age-restricted — not a “natural means safe” product'],
                  ['Soybean oil', 'No age restriction', 'Skin', 'Shortest duration of the five; reapplication-heavy'],
                  ['Metofluthrin', 'No age restriction stated', 'Area / device', 'A spatial repellent used in devices rather than a skin product'],
                ].map(([a, g, s, n]) => (
                  <tr key={a} className="border-b border-navy-50 last:border-0 align-top">
                    <td className="px-3 py-2 font-bold text-brand-800">{a}</td>
                    <td className="px-3 py-2 text-gray-800">{g}</td>
                    <td className="px-3 py-2 text-gray-700">{s}</td>
                    <td className="px-3 py-2 text-xs text-gray-600">{n}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600">Source: Health Canada, <em>Personal insect repellents</em> (canada.ca). Age and concentration guidance is periodically revised &mdash; check the current canada.ca page and the product label before treating a child.</p>
          <p>Two of these have their own decisions attached. Whether DEET is the right call for your household is covered in <Link href="/blog/is-deet-safe">our look at whether DEET is actually safe</Link>, and the head-to-head that most Canadian parents end up making is set out in <Link href="/blog/picaridin-vs-deet">picaridin versus DEET</Link>. For the metofluthrin row &mdash; the device rather than the lotion &mdash; <Link href="/blog/best-mosquito-repellent-device-canada">the mosquito repellent devices available in Canada</Link> compares what the spatial approach can and cannot do.</p>

          <h2>Permethrin Toxicology, Attributed</h2>
          <p>The toxicology on this page should come from somewhere you can check, so here it is from the National Pesticide Information Center (NPIC), a cooperative of Oregon State University and the US EPA, in its <em>Permethrin General Fact Sheet</em>.</p>
          <ul>
            <li><strong>Human skin absorption is low.</strong> Very little permethrin passes through human skin, and what is absorbed is metabolised and excreted rather than stored in tissue. The realistic human hazard from a liquid product is irritation &mdash; skin, eyes and airway &mdash; from spraying it indoors or without ventilation.</li>
            <li><strong>Cats are the exception, and there is a mechanism.</strong> Cats metabolise pyrethroids poorly, so a dose an adult dog tolerates without incident can cause tremors and seizures in a cat. This is a species difference in liver metabolism, not a dosing question, which is why the guidance for cat households is absolute rather than proportional. Health Canada adds its own point: the safety of permethrin-treated clothing for pets has not been evaluated in Canada at all.</li>
            <li><strong>It is highly toxic to fish and aquatic invertebrates</strong>, at concentrations well below anything that troubles a mammal. Keep it away from ponds, streams, storm drains and aquariums, and be aware that runoff carries it.</li>
            <li><strong>It binds tightly to soil and does not move far.</strong> Permethrin adheres to soil particles and organic matter rather than leaching toward groundwater, and it breaks down over weeks. Its persistence risk is on the surface, not in the aquifer.</li>
            <li><strong>Bees are highly susceptible.</strong> Any permethrin application near flowering plants should be timed for when pollinators are not active, and never applied to bloom.</li>
          </ul>
          <p className="text-sm text-gray-600">Source: National Pesticide Information Center (Oregon State University), <em>Permethrin General Fact Sheet</em>. NPIC is the source Google currently seats on page one for this query, and it is a better authority for the toxicology than any retailer or blog &mdash; ours included.</p>

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/mosquito-dunks-canada-guide">Mosquito Dunks Canada — Where to Buy + How They Work</Link></li>
            <li><Link href="/blog/thermacell-canada-where-to-buy">Thermacell Canada — Where to Buy + Do They Work</Link></li>
            <li><Link href="/blog/mosquito-bits-canada-vs-dunks">Mosquito Bits Canada vs Dunks</Link></li>
            <li><Link href="/blog/mosquito-repellent-guide-ontario-2026">Mosquito Repellent Guide — Ontario 2026</Link></li>
            <li><Link href="/blog/best-screen-tent-canada">Best Screen Tents &amp; Screen Houses in Canada</Link></li>
            <li><Link href="/blog/dynatrap-canada-review">Do DynaTraps Actually Work on Mosquitoes?</Link></li>
            <li><Link href="/blog/best-wasp-trap">Best Wasp Traps in Canada — Bag, Sticky &amp; Reusable Compared</Link></li>
            <li><Link href="/tick-control">BuzzSkito Tick Control Service</Link></li>
            <li><Link href="/blog/best-tick-repellent-yard-canada">Best Tick Repellents for Your Yard in Canada</Link> &mdash; the ground-level layer permethrin-treated clothing cannot cover</li>
            <li><Link href="/blog/how-to-keep-ticks-out-of-yard-ontario">How to Keep Ticks Out of Your Yard in Ontario</Link> &mdash; the habitat changes that reduce exposure before any product is involved</li>
            <li><Link href="/blog/tick-prevention-yard-ontario-safe-for-kids">Kid-Safe Tick Prevention for Ontario Yards</Link> &mdash; because treated clothing is rated for ages 16 and up in Canada</li>
            <li><Link href="/blog/is-deet-safe">Is DEET Safe?</Link> &mdash; the skin repellent that covers what treated fabric does not</li>
            <li><Link href="/blog/picaridin-vs-deet">Picaridin vs DEET</Link> &mdash; the Canadian Paediatric Society&rsquo;s first choice for children, compared</li>
            <li><Link href="/blog/do-ticks-die-in-the-washing-machine">Do Ticks Die in the Washing Machine?</Link> &mdash; what to do with hiking clothes once they come off</li>
            <li><Link href="/blog/how-to-do-a-tick-check">How to Do a Tick Check</Link> &mdash; the free layer that outperforms most products</li>
            <li><Link href="/blog/ultimate-tick-control-guide-ontario">The Complete Ontario Tick Control Guide</Link> &mdash; every layer in order, from clothing to yard</li>
          </ul>
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

        </div>
      </article>

      <CTASection heading="Permethrin Protects Your Clothing · Barrier Spray Protects Your Yard" subtext="Get a free quote for licensed barrier spray. From $99. Health Canada approved. Ontario Licence #L-240-2436835197." variant="dark" />
    </>
  )
}
