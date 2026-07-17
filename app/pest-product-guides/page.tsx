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
  icon: string
  count: string
  tone: 'treat' | 'research'
  blurb: string
  posts: Post[]
}

const CATEGORIES: Category[] = [
  {
    hub: '/pest-product-guides/mosquito-gear',
    name: 'Mosquito Gear',
    icon: '🦟',
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
    icon: '🕷️',
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
    icon: '🛏️',
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
    icon: '🐭',
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

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white">
        <div className="absolute inset-0 opacity-[0.07]" aria-hidden="true"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, #fff 1px, transparent 1px), radial-gradient(circle at 70% 60%, #fff 1px, transparent 1px)', backgroundSize: '46px 46px, 64px 64px' }} />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
          <nav aria-label="Breadcrumb" className="text-brand-300 text-sm mb-5 flex gap-1.5 items-center">
            <Link href="/" className="hover:text-white transition-colors">Home</Link><span className="text-brand-600">/</span>
            <span className="text-white">Recommended Products</span>
          </nav>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider px-3 py-1 mb-4">🛒 Recommended Products</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.08] max-w-4xl">BuzzSkito Recommended Products</h1>
          <p className="mt-4 text-lg sm:text-xl text-brand-100 max-w-3xl leading-relaxed">For mosquitoes &amp; ticks, this is the gear our licensed GTA technicians actually recommend. For every other household pest, it&rsquo;s independent Canadian product research — we don&rsquo;t treat those, we just help you find what works and what&rsquo;s legal in Canada.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            {[{ v: '4', l: 'Product categories' }, { v: '80+', l: 'Independent guides' }, { v: 'PMRA-legal', l: 'Canadian picks only' }].map((s) => (
              <div key={s.l} className="rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 backdrop-blur-sm">
                <div className="text-xl font-extrabold text-white leading-none">{s.v}</div>
                <div className="text-[11px] uppercase tracking-wide text-brand-300 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick answer + disclosure */}
      <section className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm speakable">
            <p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-3">
              <span className="grid place-items-center w-5 h-5 rounded-full bg-emerald-600 text-white text-[11px]" aria-hidden="true">✓</span>Quick Answer
            </p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">This is BuzzSkito&rsquo;s master product hub. It splits in two: mosquito and tick gear picked by our licensed GTA technicians (the two pests we actually treat), and independent, PMRA-legal Canadian research for household pests we do not treat — bed bugs, mice and rats. Every recommendation is available on amazon.ca, with grey-market US products excluded by rule.</p>
            <ul className="mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-700">
              {[
                'Four categories: Mosquito Gear, Tick Gear, Bed Bug Control and Rodent Control.',
                'Mosquito & tick picks reflect thousands of real GTA treatments; other pests are neutral research.',
                'Every pesticide holds a Health Canada PMRA domestic-class registration — no grey-market US products.',
                'Second-gen anticoagulant rat poisons are not consumer-legal in Canada; bromethalin stations are.',
                'Professional bed bug treatment in Canada runs roughly $300–$3,000+ depending on method.',
                'The only two pests BuzzSkito treats as a service are mosquitoes and ticks, across 19+ GTA cities.',
              ].map((b) => (<li key={b} className="flex gap-2"><span className="text-emerald-500 mt-0.5" aria-hidden="true">▸</span><span>{b}</span></li>))}
            </ul>
            <p className="mt-4 text-xs text-gray-500">— BuzzSkito Mosquito &amp; Tick Control · 129 five-star Google reviews · independent product research</p>
          </div>
          <div className="mt-5"><SpecialistDisclosure pest="most household pests" /></div>
        </div>
      </section>

      {/* Two buckets explainer */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-1">Two kinds of guide, one honest rule</h2>
          <p className="text-sm text-gray-500 mb-6 max-w-2xl">We keep them clearly labelled so you always know which one you&rsquo;re reading.</p>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="rounded-2xl border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-6">
              <div className="flex items-center gap-2 mb-3"><span className="grid place-items-center w-10 h-10 rounded-xl bg-emerald-100 text-2xl" aria-hidden="true">🛡️</span><span className="text-xs font-extrabold uppercase tracking-wider text-emerald-700">Mosquitoes &amp; ticks — we treat these</span></div>
              <p className="text-sm text-gray-700 leading-relaxed">BuzzSkito is a licensed GTA mosquito &amp; tick control service with 129 five-star reviews. When our guides rate a Thermacell, a propane trap or a permethrin spray, it&rsquo;s from what our technicians see work (and fail) in real backyards. Where a product can&rsquo;t match professional barrier spray, we say so.</p>
            </div>
            <div className="rounded-2xl border-2 border-brand-200 bg-gradient-to-br from-brand-50 to-white p-6">
              <div className="flex items-center gap-2 mb-3"><span className="grid place-items-center w-10 h-10 rounded-xl bg-brand-100 text-2xl" aria-hidden="true">🔬</span><span className="text-xs font-extrabold uppercase tracking-wider text-brand-700">Every other pest — independent research</span></div>
              <p className="text-sm text-gray-700 leading-relaxed">We don&rsquo;t treat bed bugs, mice or rats — and never will — so this research stays neutral with no service upsell. One hard rule: every pesticide must hold a Health Canada <strong>PMRA domestic-class</strong> registration (or be a device), and be genuinely available on amazon.ca. Grey-market US products get excluded.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Browse by category */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">Browse by category</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {CATEGORIES.map((cat) => (
              <div key={cat.hub} className="hover-lift group rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden flex flex-col">
                <div className={`h-1.5 bg-gradient-to-r ${cat.tone === 'treat' ? 'from-brand-500 to-emerald-500' : 'from-brand-400 to-brand-600'}`} aria-hidden="true" />
                <div className="p-6 flex-1">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="grid place-items-center w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 text-2xl shrink-0" aria-hidden="true">{cat.icon}</span>
                      <div>
                        <h3 className="text-xl font-extrabold text-brand-900 leading-none"><Link href={cat.hub} className="hover:text-emerald-700">{cat.name}</Link></h3>
                        <span className="text-xs font-semibold text-gray-400">{cat.count}</span>
                      </div>
                    </div>
                    <span className={`shrink-0 inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${cat.tone === 'treat' ? 'bg-emerald-100 text-emerald-800' : 'bg-brand-50 text-brand-700 border border-brand-200'}`}>{cat.tone === 'treat' ? 'We treat this' : 'Research only'}</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{cat.blurb}</p>
                  <ul className="space-y-1.5">
                    {cat.posts.map((post) => (
                      <li key={post.href} className="text-sm flex gap-2">
                        <span className="text-emerald-400 mt-0.5" aria-hidden="true">›</span>
                        <span><Link href={post.href} className="font-semibold text-brand-800 hover:text-emerald-700">{post.label}</Link><span className="text-gray-400"> — {post.note}</span></span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-6 py-3.5 bg-gray-50 border-t border-gray-100">
                  <Link href={cat.hub} className="arrow-nudge inline-flex items-center gap-1 text-sm font-bold text-brand-800 group-hover:text-emerald-700 transition-colors">All {cat.name.toLowerCase()} guides →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service tie-in */}
      <section className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <aside aria-label="Services BuzzSkito provides" className="rounded-2xl border-2 border-emerald-300 bg-gradient-to-br from-emerald-50 to-white p-6 sm:p-8 shadow-sm">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">The pests we actually treat</p>
            <h2 className="text-2xl font-extrabold text-brand-900 mb-3">Want it handled for you? We treat mosquitoes and ticks.</h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-5 max-w-2xl">Product guides are great for DIY. But for whole-yard mosquito and tick coverage across a full season, BuzzSkito&rsquo;s licensed barrier spray does what no consumer product can — same-day protection with weeks of residual, backed by 129 five-star reviews across 19+ GTA cities.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/mosquito-control" className="btn-primary-sm">Professional mosquito control →</Link>
              <Link href="/tick-control" className="btn-primary-sm">Professional tick control →</Link>
            </div>
          </aside>
          <p className="mt-6 text-sm text-gray-600 leading-relaxed">Trying to price a professional job instead? A single visit averages roughly $414–$617 nationally, with bed bugs the most expensive at $300–$3,000+. Our <Link href="/pest-control-cost-canada" className="font-semibold text-brand-700 hover:text-emerald-700 underline underline-offset-2">Canadian pest control cost guide</Link> breaks down real 2026 price bands by pest, city and method.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {FAQS.map(({ question, answer }) => (
              <details key={question} className="group bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
                <summary className="font-bold text-brand-900 cursor-pointer list-none flex justify-between items-center gap-3">
                  {question}
                  <span className="text-emerald-600 group-open:rotate-45 transition-transform text-2xl leading-none shrink-0">+</span>
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
