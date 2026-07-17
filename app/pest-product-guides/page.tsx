import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { SITE_URL } from '@/lib/constants'
import SpecialistDisclosure from '@/components/SpecialistDisclosure'

const SLUG = 'pest-product-guides'
const DATE = '2026-07-17'
const TITLE = 'BuzzSkito Recommended Products — Gear Guides for Canadian Homes'

type Post = { href: string; label: string; note: string }
type Category = {
  hub: string
  name: string
  count: string
  tone: 'treat' | 'research'
  blurb: string
  posts: Post[]
}

const CATEGORIES: Category[] = [
  {
    hub: '/pest-product-guides/mosquito-gear',
    name: 'Mosquito Gear',
    count: '32 guides',
    tone: 'treat',
    blurb: 'The repellents, traps, foggers and area devices our licensed GTA technicians rate for real backyards — what works, what wastes money, and what to buy in Canada.',
    posts: [
      { href: '/blog/thermacell-canada-where-to-buy', label: 'Thermacell Canada — Where to Buy', note: 'Best patio repellent device' },
      { href: '/blog/best-mosquito-trap-canada', label: 'Best Mosquito Trap Canada', note: 'Which traps actually catch mosquitoes' },
      { href: '/blog/mosquito-magnet-canada', label: 'Mosquito Magnet Canada', note: 'Propane CO₂ traps, tested' },
      { href: '/blog/mosquito-dunks-canada-guide', label: 'Mosquito Dunks Canada Guide', note: 'BTI for standing water' },
    ],
  },
  {
    hub: '/pest-product-guides/tick-gear',
    name: 'Tick Gear',
    count: 'Tick guides',
    tone: 'treat',
    blurb: 'Yard treatments, permethrin clothing sprays and removal tools — the tick gear we recommend to the same GTA homeowners we treat for Lyme-risk properties.',
    posts: [
      { href: '/blog/best-tick-repellent-yard-canada', label: 'Best Tick Repellent for Your Yard', note: 'What keeps ticks off the lawn' },
      { href: '/blog/permethrin-canada-yard-clothing-spray', label: 'Permethrin Canada — Clothing & Yard', note: 'Treat clothing the right way' },
      { href: '/blog/tick-removal-tool-guide', label: 'Tick Removal Tool Guide', note: 'Tweezers, keys and hooks compared' },
      { href: '/blog/how-to-remove-tick-safely', label: 'How to Remove a Tick Safely', note: 'Step-by-step, no folk remedies' },
    ],
  },
  {
    hub: '/pest-product-guides/bed-bug-control',
    name: 'Bed Bug Control',
    count: 'Independent research',
    tone: 'research',
    blurb: 'We do not treat bed bugs — this is independent product research. The evidence-backed DIY stack is heat, encasements and interceptors, with PMRA-registered sprays in a supporting role.',
    posts: [
      { href: '/blog/bed-bug-spray-canada', label: 'Bed Bug Spray Canada', note: 'What is PMRA-registered here' },
      { href: '/blog/best-bed-bug-steamer-canada', label: 'Best Bed Bug Steamer Canada', note: 'Heat is the evidence-backed tool' },
      { href: '/blog/bed-bug-mattress-encasement-canada', label: 'Mattress Encasements Canada', note: 'Trap what is already inside' },
      { href: '/blog/bed-bug-interceptor-traps-canada', label: 'Interceptor Traps Canada', note: 'Monitor and confirm the problem' },
    ],
  },
  {
    hub: '/pest-product-guides/rodent-control',
    name: 'Rodent Control',
    count: 'Independent research',
    tone: 'research',
    blurb: 'We do not treat mice or rats — this is independent product research. Canadian rodenticide law is stricter than most US advice assumes, so traps and exclusion do the real work.',
    posts: [
      { href: '/blog/best-mouse-trap-canada', label: 'Best Mouse Trap Canada', note: 'The traps that test best' },
      { href: '/blog/best-rat-trap-canada', label: 'Best Rat Trap Canada', note: 'Snap, electronic and live options' },
      { href: '/blog/rat-poison-canada-what-is-legal', label: 'Rat Poison Canada — What Is Legal', note: 'The one legal consumer format' },
      { href: '/blog/how-to-get-rid-of-mice-canada', label: 'How to Get Rid of Mice in Canada', note: 'Trap, seal and keep them out' },
    ],
  },
]

const FAQS = [
  {
    question: 'What is the difference between BuzzSkito\'s mosquito/tick guides and the other pest guides?',
    answer: 'It comes down to whether we treat the pest. For mosquitoes and ticks, BuzzSkito is a licensed GTA control service, so those gear guides reflect what our technicians actually recommend after treating thousands of real backyards. For every other household pest — bed bugs, mice, rats and more — we do not offer any service, so those pages are independent product research written the same way a neutral review site would, with no service upsell riding on what you buy.',
  },
  {
    question: 'Which pests does BuzzSkito actually treat?',
    answer: 'Only two: mosquitoes and ticks. BuzzSkito is a mosquito and tick control service operating across 19+ GTA cities from Mississauga to Toronto, Oakville, Vaughan and beyond. If you want your yard professionally treated, those are the two services we provide. Everything else on this hub is research to help you buy the right product yourself.',
  },
  {
    question: 'What does "PMRA domestic-class" mean, and why does it matter?',
    answer: 'The Pest Management Regulatory Agency (PMRA) is the Health Canada branch that registers every pesticide legally sold in Canada. Registered products are assigned a class: "domestic" products can be sold to and used by ordinary consumers, while "commercial" products require a licensed applicator. Anything with no Canadian registration cannot legally be sold or imported for use here. Our product guides only point to domestic-class registered pesticides or non-pesticide devices, which is where a lot of US "best of" lists steer Canadians wrong.',
  },
  {
    question: 'Why can\'t Canadians buy the products American pest sites recommend?',
    answer: 'Because US and Canadian pesticide law are different. The US EPA registers many consumer products — Advion gel baits, high-strength bifenthrin concentrates, second-generation anticoagulant rodenticides — that Health Canada has either never registered or restricts to licensed applicators. Importing an unregistered pesticide into Canada is an offence under the Pest Control Products Act, and seizures do happen. Most US-focused lists are effectively illegal shopping lists for a Canadian reader, which is the gap these guides exist to fill.',
  },
  {
    question: 'How do these guides make money?',
    answer: 'Through clearly disclosed Amazon Associates affiliate links on the individual product pages. If you buy through a link, we may earn a small commission at no extra cost to you. No manufacturer pays for placement, no review is sponsored, and any product that fails the Canadian-legality check is excluded no matter how well it would convert. The disclosure appears on every page that carries affiliate links.',
  },
  {
    question: 'How do you decide which products to recommend?',
    answer: 'Three filters, applied in order. First, legality: pesticide products must hold a PMRA domestic-class registration, which we verify against Health Canada\'s public registry; devices must be non-pesticide. Second, availability: the product must be genuinely purchasable on amazon.ca, not a US-only listing with import problems. Third, evidence: we prioritize categories with published efficacy research — steamers, encasements, interceptors, snap traps, barrier sprays — over gadget categories that test poorly, such as ultrasonic repellers.',
  },
  {
    question: 'What does professional pest control cost in Canada?',
    answer: 'A single professional visit averages roughly $414–$617 nationally, with bed bugs the most expensive common pest at $300–$3,000+ depending on method and severity. When an infestation outgrows DIY products, our Canadian pest control cost guide breaks down real 2026 price bands by pest type, city and treatment method so you can sanity-check any quote before you sign.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: 'The gear BuzzSkito\'s licensed GTA technicians recommend for mosquitoes and ticks, plus independent, PMRA-legal Canadian product research for bed bugs, mice and rats. Every recommendation is available on amazon.ca — no grey-market US products.',
  canonical: `/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
})

export default function PestProductGuidesPage() {
  const postingSchema = {
    ...blogPostingSchema({
      title: TITLE,
      description: 'The master hub for BuzzSkito\'s recommended products — technician-picked mosquito and tick gear plus independent, PMRA-legal Canadian research for other household pests.',
      slug: SLUG,
      datePublished: DATE,
    }),
    url: `${SITE_URL}/${SLUG}`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/${SLUG}` },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(postingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Recommended Products', url: `/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/${SLUG}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <span className="text-white">Recommended Products</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">For mosquitoes &amp; ticks, this is the gear our licensed GTA technicians actually recommend. For every other household pest, it&rsquo;s independent Canadian product research — we don&rsquo;t treat those, we just help you find what works and what&rsquo;s legal in Canada.</p>
        </div>
      </section>

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">This is BuzzSkito&rsquo;s master product hub. It splits in two: mosquito and tick gear picked by our licensed GTA technicians (the two pests we actually treat), and independent, PMRA-legal Canadian research for household pests we do not treat — bed bugs, mice and rats. Every recommendation is available on amazon.ca, with grey-market US products excluded by rule.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>Four categories: Mosquito Gear (32 guides), Tick Gear, Bed Bug Control, and Rodent Control.</li>
              <li>Mosquito and tick guides reflect what our technicians recommend after treating thousands of GTA backyards; other pests are neutral product research.</li>
              <li>Every pesticide we recommend holds a Health Canada PMRA domestic-class registration — commercial-only and unregistered US products are excluded.</li>
              <li>Second-generation anticoagulant rodenticides (brodifacoum, bromadiolone) are not sold to Canadian consumers; bromethalin bait stations are the legal option.</li>
              <li>Professional bed bug treatment in Canada runs roughly $300–$3,000+ depending on method and severity.</li>
              <li>The only two pests BuzzSkito treats as a service are mosquitoes and ticks, across 19+ GTA cities.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">— BuzzSkito Mosquito &amp; Tick Control · 129 five-star Google reviews · independent product research</p>
          </div>

          <SpecialistDisclosure pest="most household pests" />
        </div>
      </section>

      <article className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Two kinds of guide, one honest rule</h2>
          <p>Everything on this hub falls into one of two buckets, and we keep them clearly labelled so you always know which one you&rsquo;re reading.</p>
          <p><strong>Mosquitoes and ticks — gear we recommend as the people who treat them.</strong> BuzzSkito is a licensed GTA mosquito and tick control service with 129 five-star reviews, so when our guides rate a Thermacell, a propane trap or a permethrin clothing spray, that&rsquo;s based on what our technicians see work (and fail) in real backyards. Where a product genuinely can&rsquo;t match a professional barrier spray, we say so — that&rsquo;s the honest version, not a sales pitch.</p>
          <p><strong>Every other household pest — independent product research.</strong> We do not treat bed bugs, mice, rats, or anything else, and we never will. That&rsquo;s exactly why this research can stay neutral: there&rsquo;s no service upsell riding on whether you buy a steamer or a mouse trap. Each of those guides applies one hard rule — every pesticide must hold a Health Canada <strong>PMRA domestic-class</strong> registration (or be a non-pesticide device), and every product must be genuinely available on amazon.ca. Grey-market US products that Canadians can&rsquo;t legally buy get excluded, no matter how often American sites recommend them.</p>

        </div>
      </article>

      <section className="py-4 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">Browse by category</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {CATEGORIES.map((cat) => (
              <div key={cat.hub} className="rounded-2xl border border-navy-100 bg-white shadow-sm overflow-hidden flex flex-col">
                <div className="p-6 flex-1">
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <h3 className="text-xl font-extrabold text-brand-900">
                      <Link href={cat.hub} className="hover:text-emerald-700">{cat.name}</Link>
                    </h3>
                    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide ${cat.tone === 'treat' ? 'bg-emerald-100 text-emerald-800' : 'bg-brand-50 text-brand-700 border border-brand-200'}`}>
                      {cat.tone === 'treat' ? 'We treat this' : 'Research only'}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-gray-500 mb-3">{cat.count}</p>
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">{cat.blurb}</p>
                  <ul className="space-y-2">
                    {cat.posts.map((post) => (
                      <li key={post.href} className="text-sm">
                        <Link href={post.href} className="font-semibold text-emerald-700 hover:text-emerald-800">{post.label}</Link>
                        <span className="text-gray-500"> — {post.note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-6 py-3 bg-brand-50 border-t border-navy-100">
                  <Link href={cat.hub} className="text-sm font-bold text-brand-800 hover:text-emerald-700">
                    All {cat.name.toLowerCase()} guides →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <aside aria-label="Services BuzzSkito provides" className="rounded-2xl border-2 border-emerald-300 bg-gradient-to-br from-emerald-50 to-white p-6 sm:p-7 shadow-sm">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">The pests we actually treat</p>
            <h2 className="text-2xl font-extrabold text-brand-900 mb-3 mt-0">Want it handled for you? We treat mosquitoes and ticks.</h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">Product guides are great for DIY. But for whole-yard mosquito and tick coverage across a full season, BuzzSkito&rsquo;s licensed barrier spray does what no consumer product can — same-day protection with weeks of residual, backed by 129 five-star reviews across 19+ GTA cities.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/mosquito-control" className="btn-primary-sm">Professional mosquito control →</Link>
              <Link href="/tick-control" className="btn-primary-sm">Professional tick control →</Link>
            </div>
          </aside>
        </div>
      </section>

      <article className="pb-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Trying to price a professional job instead?</h2>
          <p>When an infestation outgrows DIY products, the next question is usually cost. A single professional visit averages roughly $414–$617 nationally, with bed bugs the most expensive common pest at $300–$3,000+ depending on method. Our <Link href="/pest-control-cost-canada">Canadian pest control cost guide</Link> breaks down real 2026 price bands by pest type, city and treatment method — so you can sanity-check any quote before you sign, whether it&rsquo;s for a pest we treat or one we don&rsquo;t.</p>

          <hr />
          <p className="text-sm text-gray-600">The pests we actually treat: BuzzSkito provides professional <Link href="/mosquito-control">mosquito control</Link> and <Link href="/tick-control">tick control</Link> across 19+ GTA cities. Everything else on this hub is independent research — not a service we offer.</p>
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
