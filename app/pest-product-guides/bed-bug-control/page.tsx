import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { SITE_URL } from '@/lib/constants'
import SpecialistDisclosure from '@/components/SpecialistDisclosure'

const SLUG = 'pest-product-guides/bed-bug-control'
const DATE = '2026-07-17'
const TITLE = 'Bed Bug Products in Canada — What Actually Works & What’s PMRA-Legal'

const GUIDES = [
  {
    href: '/blog/bed-bug-spray-canada',
    title: 'Bed Bug Spray Canada — What Is PMRA-Registered',
    blurb: 'The contact and residual sprays that hold a Canadian PCP registration, and why US picks like Crossfire and Temprid FX are illegal here.',
  },
  {
    href: '/blog/best-bed-bug-steamer-canada',
    title: 'Best Bed Bug Steamer Canada',
    blurb: 'Steam kills every life stage on contact — which steamers actually reach the temperatures that matter.',
  },
  {
    href: '/blog/bed-bug-mattress-encasement-canada',
    title: 'Bed Bug Mattress Encasements Canada',
    blurb: 'Certified encasements trap the bugs already inside your mattress and keep new ones out.',
  },
  {
    href: '/blog/bed-bug-interceptor-traps-canada',
    title: 'Bed Bug Interceptor Traps Canada',
    blurb: 'Cheap under-the-leg cups that isolate the bed and confirm whether an infestation is still active.',
  },
  {
    href: '/blog/how-to-check-for-bed-bugs-canada',
    title: 'How to Check for Bed Bugs',
    blurb: 'The signs — fecal spotting, shed skins, live bugs — and how to confirm before you spend a dollar.',
  },
  {
    href: '/blog/do-bed-bug-sprays-actually-work',
    title: 'Do Bed Bug Sprays Actually Work?',
    blurb: 'The honest answer on resistance, egg survival, and why spray alone almost always rebounds.',
  },
  {
    href: '/blog/diatomaceous-earth-for-bed-bugs',
    title: 'Diatomaceous Earth for Bed Bugs',
    blurb: 'Using registered, insecticide-labelled DE dust as a slow, dry-only supporting tool — not the food-grade version.',
  },
]

const FAQS = [
  {
    question: 'What bed bug products are actually legal to buy in Canada?',
    answer: 'Any pesticide sold for bed bugs in Canada must hold a Health Canada PMRA domestic-class registration, meaning it carries a Pest Control Products (PCP) registration number on the label. Registered consumer options include Doktor Doom Sleep Tight and Pro Max, Knock Down Bed Bug Killer, Konk sprays, and insecticide-labelled diatomaceous earth dusts. Non-pesticide devices — steamers, certified mattress encasements, and interceptor traps — need no registration and are legal anywhere. The popular US concentrates (Crossfire, Temprid FX, Bedlam Plus, Transport GHP) have no Canadian registration and cannot legally be bought, imported, or used here.',
  },
  {
    question: 'What is the best bed bug spray in Canada?',
    answer: 'For most households the best legal combination is Doktor Doom Sleep Tight for direct contact spraying on mattress seams, box springs, and bed frames, paired with a permethrin-based residual like Doktor Doom Pro Max for baseboards, bed legs, and furniture perimeters. Both are PMRA domestic-class registered. No spray alone eliminates an infestation, however — resistance and protected eggs mean you should pair any spray with steam, encasements, and interceptor traps. Our full bed bug spray Canada guide covers the registered options and exactly how to use them.',
  },
  {
    question: 'Do bed bug sprays actually work?',
    answer: 'Only as a supporting tool, not a standalone fix. Resistance surveys have found knockdown-resistance (kdr) gene mutations in the large majority of North American bed bug populations — some studies above 80 percent — making domestic-class pyrethroids far less lethal than they were two decades ago. Most contact sprays also penetrate bed bug eggs poorly, so a single treatment typically rebounds as eggs hatch a week or two later. Heat, steam, encasements, and interceptor traps work regardless of resistance status, which is why they anchor the stack and spray backs them up.',
  },
  {
    question: 'Why are US bed bug products like Crossfire and Temprid illegal in Canada?',
    answer: 'Because US and Canadian pesticide law are different. The US EPA registers many consumer bed bug concentrates that Health Canada has never registered, and importing, selling, or using an unregistered pesticide is an offence under the federal Pest Control Products Act. Crossfire, Temprid FX, Bedlam Plus, and Transport GHP are all common US recommendations, and none are PMRA-registered for Canadian consumers. Grey-market listings will ship some north, but the product can be seized at the border and you carry the legal risk — the exact gap these guides fill.',
  },
  {
    question: 'Does diatomaceous earth work on bed bugs?',
    answer: 'Yes, slowly and only in the right conditions. Diatomaceous earth kills bed bugs mechanically by abrading their waxy outer layer so they dehydrate, but it works over days rather than hours and stops working entirely if it gets damp or is applied in thick, visible piles that bugs simply walk around. It is a supporting tool for cracks, voids, and bed-leg zones — not a primary treatment. Crucially, only DE products actually labelled and registered as insecticides carry a PMRA registration; generic food-grade DE sold as a supplement is not labelled for pest use.',
  },
  {
    question: 'How much does professional bed bug treatment cost in Canada?',
    answer: 'Typical Canadian pricing runs roughly $300 to $600 per room for conventional chemical treatment (usually two to three visits) and about $700 to $1,500 or more for whole-unit heat treatment, depending on the city and the size of the home. Bed bugs are the most expensive common household pest to treat professionally. For established infestations — bugs in multiple rooms, bugs inside walls, or repeated DIY failures — a licensed structural exterminator is usually cheaper than months of failed DIY rounds. Our Canadian pest control cost guide breaks down current price bands by pest, method, and city.',
  },
  {
    question: 'Does BuzzSkito treat bed bugs?',
    answer: 'No. BuzzSkito is a mosquito and tick control service in the GTA — those are the only two pests we treat, and we never sell or apply any bed bug product. This library is independent research from our publishing team, written the way a review site would: we verify PMRA domestic-class registration against Health Canada’s public registry, confirm genuine amazon.ca availability, then rank by published evidence. If your infestation has outgrown DIY products, call a licensed structural exterminator.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: 'Independent Canadian bed bug product research: PMRA-legal sprays, steamers, mattress encasements, interceptor traps, and diatomaceous earth. Every recommendation is Health Canada domestic-class registered or a non-pesticide device — no grey-market US products.',
  canonical: `/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
})

export default function BedBugControlHubPage() {
  const postingSchema = {
    ...blogPostingSchema({
      title: TITLE,
      description: 'Hub for BuzzSkito\'s independent Canadian bed bug product research — what actually works against bed bugs and what is actually PMRA-legal to buy in Canada.',
      slug: SLUG,
      datePublished: DATE,
    }),
    url: `${SITE_URL}/${SLUG}`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/${SLUG}` },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(postingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Pest Product Guides', url: '/pest-product-guides' }, { name: 'Bed Bug Control', url: `/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/${SLUG}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1 flex-wrap">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/pest-product-guides" className="hover:text-white">Pest Product Guides</Link><span>/</span>
            <span className="text-white">Bed Bug Control</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">Independent research on the bed bug products Canadian homeowners can actually buy — every spray checked against Health Canada&rsquo;s PMRA registry, and every device weighed on published evidence.</p>
        </div>
      </section>

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">The evidence-backed bed bug stack in Canada is physical and heat control — a steamer, certified mattress encasements, and interceptor traps — with PMRA domestic-class registered sprays and diatomaceous earth in supporting roles, not starring ones. Every product below is checked against Health Canada&rsquo;s PMRA registry; popular US sprays like Crossfire and Temprid FX have no Canadian registration and are illegal to import or use here.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>Heat is the only method that kills every bed bug life stage — adults, nymphs, and eggs — on contact.</li>
              <li>PMRA domestic-class sprays (Doktor Doom Sleep Tight, Pro Max, Knock Down, Konk) are legal for consumers; US picks like Crossfire and Temprid FX are not registered in Canada.</li>
              <li>Over 80% of North American bed bug populations carry pyrethroid-resistance genes, so spray used alone usually rebounds within 1&ndash;2 weeks.</li>
              <li>Interceptor traps under the bed legs are the cheapest way to confirm whether an infestation is still active.</li>
              <li>Professional bed bug treatment in Canada runs roughly $300&ndash;$600 per room (chemical) to $700&ndash;$1,500+ (whole-unit heat).</li>
              <li>Importing an unregistered pesticide violates the federal Pest Control Products Act, and border seizures do happen.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito Pest Product Guides &middot; independent Canadian research</p>
          </div>

          <SpecialistDisclosure pest="bed bugs" />
        </div>
      </section>

      <article className="py-10 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <h2>Which bed bug products are legal to buy in Canada?</h2>
          <p>This is the question most US-written bed bug advice gets wrong for a Canadian reader. Health Canada&rsquo;s Pest Management Regulatory Agency (PMRA) registers every pesticide sold here and assigns it a class: <strong>domestic</strong> products are legal for consumers, <strong>commercial</strong> products require a licensed applicator, and anything unregistered cannot legally be sold, imported, or used at all. The famous American bed bug concentrates &mdash; Crossfire, Temprid FX, Bedlam Plus, Transport GHP &mdash; are simply not on the Canadian registry, so the &ldquo;best bed bug spray&rdquo; lists that headline them are illegal shopping lists north of the border.</p>
          <p>Every recommendation in this cluster passes the same three filters, in order: <strong>PMRA legality first, amazon.ca availability second, published evidence third.</strong> Pesticide products must carry a domestic-class Pest Control Products (PCP) registration number; devices like steamers, encasements, and interceptor traps carry no pesticide, so they only need to be genuinely purchasable and actually effective. When a popular US product fails the legality filter, we say so plainly and name the registered Canadian alternative instead.</p>

          <h2>What actually works against bed bugs?</h2>
          <p>The honest, evidence-led answer is that <strong>heat and physical control do the real work, and chemicals support them.</strong> Sustained heat kills every life stage on contact, which is why a proper steamer is the centrepiece of any DIY plan. Certified bed-bug-proof mattress encasements trap the bugs already inside your mattress and box spring while keeping new ones out. Interceptor traps under each bed leg isolate the bed and double as a monitoring system so you can tell whether an infestation is still active. PMRA-registered sprays and insecticide-labelled diatomaceous earth then handle the cracks, seams, and perimeters &mdash; as a residual backstop, not the front line. Spray-first plans fail so often because most North American bed bug populations are now pyrethroid-resistant and bed bug eggs shrug off most contact sprays, so a single spray treatment almost always rebounds a week or two later.</p>

          <h2>The Canadian bed bug product guides</h2>
          <p>Seven independent guides, each verified against the PMRA registry and amazon.ca availability. Start with how to confirm you actually have bed bugs, then work down the stack from steam and encasements to sprays and dusts.</p>
          <div className="not-prose grid gap-4 sm:grid-cols-2 my-6">
            {GUIDES.map(({ href, title, blurb }) => (
              <Link
                key={href}
                href={href}
                className="group block rounded-xl border border-navy-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md hover:border-emerald-300"
              >
                <p className="font-bold text-brand-900 group-hover:text-emerald-700 leading-snug">{title}</p>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{blurb}</p>
                <span className="mt-3 inline-block text-sm font-semibold text-emerald-700">Read the guide &rarr;</span>
              </Link>
            ))}
          </div>

          <h2>When DIY is not enough</h2>
          <p>Bed bugs are the most expensive common household pest to treat professionally, and there is a point where DIY stops being the cheaper option. If bugs have spread across multiple rooms, retreated inside walls, or survived several honest DIY rounds, a licensed structural exterminator with commercial-class products and heat equipment is usually the faster and cheaper path. Before you sign any quote, our <Link href="/pest-control-cost-canada">Canadian pest control cost guide</Link> breaks down real 2026 price bands by pest, method, and city. For the full library beyond bed bugs &mdash; mice, rats, and diatomaceous earth &mdash; head back to the <Link href="/pest-product-guides">pest product guides hub</Link>.</p>

          <hr />
          <p className="text-sm text-gray-600">A note on independence: BuzzSkito&rsquo;s operating business treats only mosquitoes and ticks, so nothing above is a service we sell. Guides that carry affiliate links disclose it on the page, no placement is paid, and any product that fails the PMRA legality check is excluded regardless of commission.</p>
        </div>
      </article>

      <section className="py-12 px-4 bg-brand-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQS.map(({ question, answer }) => (
              <details key={question} className="group bg-white rounded-xl border border-navy-100 p-5">
                <summary className="font-bold text-brand-900 cursor-pointer list-none flex justify-between items-center gap-3">
                  {question}
                  <span className="text-emerald-600 group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                </summary>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
