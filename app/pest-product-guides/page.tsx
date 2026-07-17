import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { SITE_URL } from '@/lib/constants'
import SpecialistDisclosure from '@/components/SpecialistDisclosure'

const SLUG = 'pest-product-guides'
const DATE = '2026-07-16'
const TITLE = 'Canadian Pest Product Guides — Independent Research by BuzzSkito'

const FAQS = [
  {
    question: 'Does BuzzSkito treat bed bugs, mice, or cockroaches?',
    answer: 'No. BuzzSkito is a mosquito and tick control service operating in 19 GTA cities — those are the only two pests we treat. For every other household pest, our publishing team researches consumer products the same way an independent review site would: we check what is actually registered for consumer use with Health Canada\'s PMRA, what is genuinely available on amazon.ca, and what the evidence says works. We never sell or apply any of the products we review.',
  },
  {
    question: 'What does "PMRA domestic-class" mean?',
    answer: 'The Pest Management Regulatory Agency (PMRA) is the Health Canada branch that registers every pesticide legally sold in Canada. Each registered product is assigned a class: "Domestic" products can be sold to and used by ordinary consumers, while "Commercial" products require a licensed applicator. A pesticide with no Canadian registration at all cannot legally be sold or imported for use in Canada — no matter how popular it is on American websites. Our guides only recommend domestic-class registered products or non-pesticide devices.',
  },
  {
    question: 'Why can\'t Canadians buy the products American pest sites recommend?',
    answer: 'Because US and Canadian pesticide law are different. The US EPA registers many consumer products — Advion gel baits, Talstar-style bifenthrin concentrates, second-generation anticoagulant rodenticides — that Health Canada has either never registered or restricts to licensed commercial applicators. Importing an unregistered pesticide into Canada is prohibited under the Pest Control Products Act, and border seizures do happen. Most US-focused "best of" lists are simply illegal shopping lists for a Canadian reader, which is the gap these guides exist to fill.',
  },
  {
    question: 'What rat and mouse poison is actually legal for consumers in Canada?',
    answer: 'Second-generation anticoagulants (brodifacoum, bromadiolone, difethialone) are not sold as domestic-class products in Canada — after Health Canada\'s rodenticide re-evaluation they are restricted to commercial use. The main PMRA-registered consumer option is bromethalin sold in pre-loaded, tamper-resistant disposable bait stations, such as the Tomcat disposable line. Our rat poison legality guide covers exactly what is and is not on the shelf, and when traps are the better call anyway.',
  },
  {
    question: 'Is Advion gel bait legal in Canada?',
    answer: 'Advion cockroach and ant gels (indoxacarb) are not registered as domestic-class products in Canada, so the listings Canadians find on US sites or grey-market resellers are not a legal consumer purchase here. Buying pesticides that are not registered in Canada is an offence under the Pest Control Products Act. Our upcoming ant and cockroach guides (fall 2026) will cover the PMRA-registered consumer baits that are legitimately sold at Canadian retailers.',
  },
  {
    question: 'Do ultrasonic pest repellers actually work?',
    answer: 'The evidence says no. Controlled studies have repeatedly failed to show that ultrasonic devices drive out mice, rats, or insects, and the US FTC has taken action against manufacturers over unsupported claims. They are legal to sell in Canada because they contain no pesticide — but legal is not the same as effective. Our full ultrasonic repeller review walks through the research and what to spend the money on instead.',
  },
  {
    question: 'Is diatomaceous earth legal and effective in Canada?',
    answer: 'Yes on both counts, with caveats. Diatomaceous earth insecticide dusts are PMRA-registered domestic-class products in Canada — but only products sold and labelled as insecticides carry that registration; generic "food-grade" DE sold as a supplement is not labelled for pest use. It kills crawling insects mechanically by abrading their waxy coating, works slowly (days, not hours), and must stay dry. Our buyers guide covers registered Canadian options and correct application.',
  },
  {
    question: 'How do these guides make money?',
    answer: 'Through clearly disclosed Amazon Associates affiliate links. If you buy through a link on a product guide, we may earn a small commission at no extra cost to you. No manufacturer pays for placement, no review is sponsored, and products that fail the Canadian-legality check get excluded no matter how well they would convert. The disclosure appears on every page that carries affiliate links.',
  },
  {
    question: 'How do you decide which products to recommend?',
    answer: 'Three filters, applied in order. First, legality: pesticide products must hold a PMRA domestic-class registration (we verify against Health Canada\'s public registry); devices must be non-pesticide. Second, availability: the product must be genuinely purchasable on amazon.ca — not a US-only listing with import problems. Third, evidence: we prioritize product categories with published efficacy research (steamers, encasements, interceptors, snap traps) over gadget categories that test poorly (ultrasonic repellers, foggers for bed bugs).',
  },
  {
    question: 'When are the ant, wasp, cockroach, and fly guides coming?',
    answer: 'Fall 2026. Bed bugs, mice and rats, and diatomaceous earth were prioritized first because they are the categories where US advice most often points Canadians at products they cannot legally buy — grey-market gel baits and restricted rodenticides in particular. Ants, wasps, cockroaches, and flies follow the same playbook: PMRA domestic-class registrations verified first, amazon.ca availability second, evidence third.',
  },
]

const BED_BUG_GUIDES = [
  { href: '/blog/bed-bug-spray-canada', label: 'Bed Bug Spray Canada — What Is PMRA-Registered' },
  { href: '/blog/best-bed-bug-steamer-canada', label: 'Best Bed Bug Steamer Canada' },
  { href: '/blog/bed-bug-mattress-encasement-canada', label: 'Bed Bug Mattress Encasements Canada' },
  { href: '/blog/bed-bug-interceptor-traps-canada', label: 'Bed Bug Interceptor Traps Canada' },
  { href: '/blog/how-to-check-for-bed-bugs-canada', label: 'How to Check for Bed Bugs' },
  { href: '/blog/do-bed-bug-sprays-actually-work', label: 'Do Bed Bug Sprays Actually Work?' },
  { href: '/blog/diatomaceous-earth-for-bed-bugs', label: 'Diatomaceous Earth for Bed Bugs' },
]

const RODENT_GUIDES = [
  { href: '/blog/best-mouse-trap-canada', label: 'Best Mouse Trap Canada' },
  { href: '/blog/victor-electronic-mouse-trap-review-canada', label: 'Victor Electronic Mouse Trap Review' },
  { href: '/blog/best-rat-trap-canada', label: 'Best Rat Trap Canada' },
  { href: '/blog/mouse-bait-station-canada', label: 'Mouse Bait Stations Canada' },
  { href: '/blog/rat-poison-canada-what-is-legal', label: 'Rat Poison in Canada — What Is Actually Legal' },
  { href: '/blog/how-to-get-rid-of-mice-canada', label: 'How to Get Rid of Mice in Canada' },
  { href: '/blog/how-to-keep-mice-out-of-your-house-winter', label: 'Keeping Mice Out of Your House in Winter' },
  { href: '/blog/ultrasonic-pest-repellers-do-they-work', label: 'Ultrasonic Pest Repellers — Do They Work?' },
]

const DE_GUIDES = [
  { href: '/blog/diatomaceous-earth-canada-buyers-guide', label: 'Diatomaceous Earth Canada — Buyers Guide' },
  { href: '/blog/diatomaceous-earth-for-bed-bugs', label: 'Diatomaceous Earth for Bed Bugs' },
]

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: 'Independent Canadian pest product research hub: bed bugs, mice & rats, diatomaceous earth. Every recommendation is PMRA domestic-class registered and available on amazon.ca — no grey-market US products.',
  canonical: `/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
})

export default function PestProductGuidesPage() {
  const postingSchema = {
    ...blogPostingSchema({
      title: TITLE,
      description: 'Hub for BuzzSkito\'s independent Canadian pest product research — what actually works and what is actually legal (PMRA domestic-class) in Canada.',
      slug: SLUG,
      datePublished: DATE,
    }),
    url: `${SITE_URL}/${SLUG}`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/${SLUG}` },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(postingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Pest Product Guides', url: `/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/${SLUG}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <span className="text-white">Pest Product Guides</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">What actually works — and what is actually legal to buy — for Canadian homeowners dealing with bed bugs, mice, rats, and other household pests. Every recommendation checked against Health Canada&rsquo;s PMRA registry.</p>
        </div>
      </section>

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">BuzzSkito Pest Product Guides is an independent Canadian research library covering household pests we do not treat. Our service business handles mosquitoes and ticks in the GTA; for everything else, we publish product research with one hard rule — every recommendation must be PMRA domestic-class registered (or a non-pesticide device) and genuinely available on amazon.ca.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>16 guides live today across 3 categories: bed bugs (7), mice &amp; rats (8), and diatomaceous earth (2, one shared with the bed bug cluster).</li>
              <li>Every pesticide we recommend holds a Health Canada PMRA domestic-class registration — commercial-only and unregistered US products are excluded by rule.</li>
              <li>Second-generation anticoagulant rodenticides (brodifacoum, bromadiolone) are not sold to Canadian consumers; bromethalin disposable bait stations are the legal option.</li>
              <li>Advion gel baits and high-strength US concentrates are not domestic-class in Canada — importing unregistered pesticides violates the Pest Control Products Act.</li>
              <li>Professional bed bug treatment in Canada runs roughly $300–$3,000+ depending on method and severity, per HomeStars and PestQuotes data.</li>
              <li>4 more categories — ants, wasps, cockroaches, flies — arrive fall 2026.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">— BuzzSkito Pest Product Guides · independent Canadian research</p>
          </div>

          <SpecialistDisclosure pest="most household pests" />
        </div>
      </section>

      <article className="py-10 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <h2>Why does Canada need its own pest product research?</h2>
          <p>Because most of the pest advice Canadians read is written for Americans, and a surprising amount of it recommends products that are illegal to buy or use in Canada. Health Canada&rsquo;s Pest Management Regulatory Agency (PMRA) registers every pesticide sold here and assigns it a class: <strong>domestic</strong> products are legal for consumers, <strong>commercial</strong> products require a licensed applicator, and anything unregistered cannot legally be sold or imported at all.</p>
          <p>That single distinction invalidates a large share of US &ldquo;best of&rdquo; lists for Canadian readers. Advion gel baits, Talstar-style bifenthrin concentrates, and second-generation anticoagulant rodenticides are staples of American DIY pest forums — and none of them are domestic-class in Canada. Grey-market sellers will still ship some of them north, but importing an unregistered pesticide is an offence under the Pest Control Products Act, and you carry the risk.</p>
          <p>So every guide in this library applies the same three filters, in order: <strong>PMRA legality first, amazon.ca availability second, published evidence third.</strong> When a popular US product fails the first filter, we say so explicitly and name the registered Canadian alternative — that comparison is usually the most useful part of the page.</p>

          <h2>What do US sites push that we won&rsquo;t recommend?</h2>
          <p>These are the most common grey-market recommendations Canadian readers encounter, and what our guides point to instead.</p>
          <div className="not-prose rounded-xl border border-navy-100 overflow-hidden bg-white shadow-sm my-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Pushed by US sites</th>
                  <th className="px-4 py-3 text-left">Canadian legal status</th>
                  <th className="px-4 py-3 text-left">Best for / what we recommend instead</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { us: 'Advion gel baits (indoxacarb)', status: 'Not domestic-class — no legal consumer purchase', instead: 'PMRA-registered consumer baits; full roach/ant guides coming fall 2026' },
                  { us: 'Second-gen anticoagulant rodenticides (brodifacoum, bromadiolone)', status: 'Commercial-only after Health Canada’s rodenticide re-evaluation', instead: 'Bromethalin disposable bait stations (PMRA-registered) or snap/electronic traps' },
                  { us: 'High-strength US concentrates (Talstar P, 36.8% permethrin)', status: 'Not domestic-class — licensed applicators only', instead: 'Registered domestic ready-to-use sprays and insecticide dusts' },
                  { us: 'Total-release foggers for bed bugs', status: 'Registered products exist, but evidence shows they fail on bed bugs', instead: 'Steam + mattress encasements + interceptor traps (evidence-backed)' },
                  { us: 'Ultrasonic plug-in repellers', status: 'Legal (non-pesticide device) — but efficacy unsupported', instead: 'Exclusion + trapping; see our ultrasonic repeller review' },
                ].map(({ us, status, instead }) => (
                  <tr key={us} className="border-b border-navy-50 last:border-0 align-top">
                    <td className="px-4 py-3 font-semibold text-brand-800">{us}</td>
                    <td className="px-4 py-3 text-gray-700">{status}</td>
                    <td className="px-4 py-3 text-gray-700">{instead}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>Which bed bug products actually work in Canada?</h2>
          <p>The evidence-backed consumer stack is heat and physical control — a steamer, mattress encasements, and interceptor traps — with PMRA-registered sprays and diatomaceous earth in supporting roles, not starring ones. Bed bugs are also the category where professional treatment costs the most (roughly $300–$3,000+ in Canada), so knowing what DIY gear genuinely helps before you spend is worth real money.</p>
          <ul>
            {BED_BUG_GUIDES.map(({ href, label }) => (
              <li key={href}><Link href={href}>{label}</Link></li>
            ))}
          </ul>

          <h2>What works for mice and rats in Canada?</h2>
          <p>Traps and exclusion do most of the real work, and Canadian rodenticide law is stricter than most US advice assumes — second-generation anticoagulants are off the consumer shelf entirely. This cluster covers the traps that test best, the one legal consumer poison format, and the winter-proofing that stops mice getting in at all.</p>
          <ul>
            {RODENT_GUIDES.map(({ href, label }) => (
              <li key={href}><Link href={href}>{label}</Link></li>
            ))}
          </ul>

          <h2>Is diatomaceous earth worth buying?</h2>
          <p>Yes — as a slow, dry-conditions-only mechanical insecticide, and only if you buy a product actually registered and labelled for pest control in Canada. It is one of the few DIY pest products that is simultaneously PMRA-registered, cheap, and supported by evidence, provided you apply it correctly.</p>
          <ul>
            {DE_GUIDES.map(({ href, label }) => (
              <li key={href}><Link href={href}>{label}</Link></li>
            ))}
          </ul>

          <h2>Which categories are coming next?</h2>
          <p><strong>Ants, wasps, cockroaches, and flies are coming this fall.</strong> Each will follow the same template: verify PMRA domestic-class registrations against Health Canada&rsquo;s public registry, confirm real amazon.ca availability, then rank by published evidence — and call out the US grey-market products we deliberately exclude.</p>
          <div className="not-prose my-4 flex flex-wrap gap-2">
            {['Ants', 'Wasps & Hornets', 'Cockroaches', 'Flies'].map((cat) => (
              <span key={cat} className="inline-flex items-center rounded-full bg-brand-50 border border-brand-200 px-3 py-1 text-xs font-semibold text-brand-800">{cat} · coming fall 2026</span>
            ))}
          </div>

          <h2>What does professional pest control cost in Canada?</h2>
          <p>A single professional visit averages $414–$617 nationally, with bed bugs the most expensive common pest at $300–$3,000+ depending on method. When an infestation outgrows DIY products, our <Link href="/pest-control-cost-canada">Canadian pest control cost guide</Link> breaks down real 2026 price bands by pest type, city, and treatment method — so you can sanity-check any quote before you sign.</p>

          <h2>Who writes these guides?</h2>
          <p>BuzzSkito&rsquo;s publishing team, based in Mississauga, Ontario. Our operating business treats exactly two pests — mosquitoes and ticks — which is precisely why this research can stay independent: we have no service upsell riding on whether you buy a mouse trap or a steamer. Guides that carry affiliate links disclose it on the page, no placement is paid, and any product that fails the PMRA legality check is excluded regardless of commission.</p>

          <hr />
          <p className="text-sm text-gray-600">The pests we actually treat: BuzzSkito provides professional <Link href="/mosquito-control">mosquito control</Link> and <Link href="/tick-control">tick control</Link> across 19 GTA cities — everything above is independent research, not a service we offer.</p>
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
