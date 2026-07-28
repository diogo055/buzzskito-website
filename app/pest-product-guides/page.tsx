import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { SITE_URL } from '@/lib/constants'
import SpecialistDisclosure from '@/components/SpecialistDisclosure'

const SLUG = 'pest-product-guides'
const DATE = '2026-07-17'
const UPDATED = '2026-07-22'
const TITLE = 'BuzzSkito Recommended Products — Canadian Pest Gear Guides'

type Post = { href: string; label: string; note: string }
type Category = {
  href: string
  name: string
  icon: string
  count: string
  tone: 'treat' | 'research'
  blurb: string
  posts: Post[]
}

// The two pests BuzzSkito actually treats — technician-picked gear.
const FEATURED: Category[] = [
  {
    href: '/pest-product-guides/mosquito-gear',
    name: 'Mosquito Gear',
    icon: '🦟',
    count: '80+ guides',
    tone: 'treat',
    blurb: 'The repellents, traps, foggers and area devices we recommend after spraying real GTA backyards for mosquitoes — what holds up on an actual property, what wastes money, and what you can legally buy in Canada.',
    posts: [
      { href: '/blog/best-mosquito-trap-canada', label: 'Best Mosquito Traps', note: 'What actually catches them' },
      { href: '/blog/mosquito-magnet-canada', label: 'Mosquito Magnet', note: 'Propane CO₂ traps — do they work?' },
      { href: '/blog/thermacell-canada-where-to-buy', label: 'Thermacell Canada', note: 'Best patio repellent device' },
      { href: '/blog/best-mosquito-repellent-device-canada', label: 'Repellent Devices', note: 'Zone protection compared' },
    ],
  },
  {
    href: '/pest-product-guides/tick-gear',
    name: 'Tick Gear',
    icon: '🕷️',
    count: '60+ guides',
    tone: 'treat',
    blurb: 'Yard treatments, permethrin clothing sprays and removal tools — the tick gear we recommend to the same GTA homeowners we treat for Lyme-risk properties.',
    posts: [
      { href: '/blog/best-tick-repellent-yard-canada', label: 'Best Yard Tick Repellent', note: 'Keep ticks off the lawn' },
      { href: '/blog/permethrin-canada-yard-clothing-spray', label: 'Permethrin Canada', note: 'Treat clothing the right way' },
      { href: '/blog/best-tick-control-yard-treatment', label: 'Yard Tick Treatment', note: 'Barrier options that work' },
      { href: '/blog/best-atv-sprayer-for-tick-yard-canada', label: 'ATV & Tow Sprayers', note: 'For acreage tick control' },
    ],
  },
]

// Every other household pest — independent, PMRA-legal research (we don't treat these).
const RESEARCH: Category[] = [
  {
    href: '/pest-product-guides/bed-bug-control',
    name: 'Bed Bug Control',
    icon: '🛏️',
    count: '45+ guides',
    tone: 'research',
    blurb: 'Our biggest research library. The evidence-backed DIY stack — heat chambers, steamers, encasements and interceptors — with PMRA-registered sprays in a supporting role.',
    posts: [
      { href: '/blog/bed-bug-control-canada-hub', label: 'Bed Bug Control Hub', note: 'The full DIY treatment plan' },
      { href: '/blog/best-bed-bug-heat-chamber-canada', label: 'Heat Chambers', note: 'Kills every life stage' },
      { href: '/blog/best-bed-bug-detector-canada', label: 'Detectors & Interceptors', note: 'Confirm before you treat' },
      { href: '/blog/best-bed-bug-steamer-canada', label: 'Bed Bug Steamers', note: 'Dry vapour, contact kill' },
    ],
  },
  {
    href: '/pest-product-guides/rodent-control',
    name: 'Rodent & Attic',
    icon: '🐭',
    count: '13 guides',
    tone: 'research',
    blurb: 'Canadian rodenticide law is stricter than most US advice assumes, so traps and exclusion do the real work. Mice, rats and attic-proofing.',
    posts: [
      { href: '/blog/best-mouse-trap-canada', label: 'Best Mouse Traps', note: 'The traps that test best' },
      { href: '/blog/best-rat-trap-canada', label: 'Best Rat Traps', note: 'Snap, electronic & live' },
      { href: '/blog/rat-poison-canada-what-is-legal', label: 'Rat Poison — What’s Legal', note: 'The one legal format' },
      { href: '/blog/how-to-get-rid-of-mice-canada', label: 'Get Rid of Mice', note: 'Trap, seal, keep out' },
    ],
  },
  {
    href: '/blog/best-raccoon-live-trap-canada',
    name: 'Wildlife & Yard Animals',
    icon: '🦝',
    count: '4 guides',
    tone: 'research',
    blurb: 'Our smallest library, and deliberately so — raccoons are the one yard animal we cover in depth: humane live traps, electric fencing and deterrents, with Ontario relocation law explained.',
    posts: [
      { href: '/blog/best-raccoon-live-trap-canada', label: 'Raccoon Live Traps', note: 'Large humane cage traps' },
      { href: '/blog/best-electric-fence-for-raccoons-canada', label: 'Electric Fencing', note: 'What actually stops them' },
      { href: '/blog/raccoon-deterrent-canada', label: 'Raccoon Deterrents', note: 'Try these before trapping' },
      { href: '/blog/best-live-animal-trap-canada', label: 'Live Animal Traps', note: 'Sized by animal' },
    ],
  },
  {
    href: '/blog/best-fruit-fly-trap-canada',
    name: 'Flies & Gnats',
    icon: '🪰',
    count: '13 guides',
    tone: 'research',
    blurb: 'Fruit flies, cluster flies, fungus gnats and commercial fly problems — the traps and UV lights that clear each one.',
    posts: [
      { href: '/blog/best-fruit-fly-trap-canada', label: 'Best Fruit Fly Traps', note: 'Kitchen fly control' },
      { href: '/blog/best-commercial-fly-light-trap-canada', label: 'Commercial Fly Lights', note: 'UV glue-board traps' },
      { href: '/blog/how-to-get-rid-of-cluster-flies-canada', label: 'Cluster Flies', note: 'Fall invaders, solved' },
      { href: '/blog/how-to-get-rid-of-fungus-gnats-houseplants', label: 'Fungus Gnats', note: 'Save your houseplants' },
    ],
  },
  {
    href: '/blog/how-to-get-rid-of-wasps-canada',
    name: 'Wasps, Hornets & Bees',
    icon: '🐝',
    count: '5 guides',
    tone: 'research',
    blurb: 'Traps, nest sprays and the safe way to deal with a nest — plus when a wasp is actually a protected pollinator worth leaving alone.',
    posts: [
      { href: '/blog/how-to-get-rid-of-wasps-canada', label: 'Get Rid of Wasps', note: 'The safe playbook' },
      { href: '/blog/best-wasp-trap-canada', label: 'Best Wasp Traps', note: 'Lure traps compared' },
      { href: '/blog/best-wasp-nest-spray-canada', label: 'Nest Sprays', note: 'Jet-distance knockdown' },
      { href: '/blog/best-yellow-jacket-trap-canada', label: 'Yellow Jacket Traps', note: 'For the aggressive ones' },
    ],
  },
  {
    href: '/blog/how-to-get-rid-of-cockroaches-canada',
    name: 'Roaches, Spiders & Crawlers',
    icon: '🪳',
    count: '15 guides',
    tone: 'research',
    blurb: 'Cockroach gel baits, spider sprays and crawling-pest gear (silverfish, earwigs, centipedes and more) that’s actually PMRA-legal here — not the US shopping list.',
    posts: [
      { href: '/blog/how-to-get-rid-of-cockroaches-canada', label: 'Get Rid of Cockroaches', note: 'The gel-bait method' },
      { href: '/blog/best-cockroach-spray-canada', label: 'Cockroach Sprays', note: 'Why spraying often backfires' },
      { href: '/blog/best-roach-traps-canada', label: 'Roach Traps', note: 'Glue boards find, baits kill' },
      { href: '/blog/advion-cockroach-gel-bait-canada', label: 'Advion Gel Bait', note: 'Is it legal in Canada?' },
      { href: '/blog/best-spider-spray-canada', label: 'Best Spider Sprays', note: 'Perimeter control' },
      { href: '/blog/how-to-get-rid-of-silverfish-canada', label: 'Silverfish', note: 'Dry them out' },
      { href: '/blog/best-silverfish-traps-canada', label: 'Silverfish Traps', note: 'Catching vs. only counting' },
      { href: '/blog/best-earwig-killer-canada', label: 'Earwig Killers', note: 'Dusts and traps, not baits' },
      { href: '/blog/best-centipede-killer-canada', label: 'Centipede Killers', note: 'Dry air beats any chemical' },
    ],
  },
  {
    href: '/blog/how-to-get-rid-of-ants-canada',
    name: 'Ants & Carpenter Ants',
    icon: '🐜',
    count: '4 guides',
    tone: 'research',
    blurb: 'Ants are a baiting problem, not a spraying problem — the colony sits somewhere you can’t reach, so contact killers only remove foragers. Carpenter ants get their own treatment: they’re a structural issue, not a kitchen one.',
    posts: [
      { href: '/blog/how-to-get-rid-of-ants-canada', label: 'Get Rid of Ants', note: 'Why baiting beats every spray' },
      { href: '/blog/carpenter-ants-canada', label: 'Carpenter Ants', note: 'Find the nest, or you’re just killing ants' },
      { href: '/blog/best-ant-traps-canada', label: 'Best Ant Traps', note: 'Bait stations vs glue traps' },
      { href: '/blog/best-ant-killer-canada', label: 'Best Ant Killer', note: 'What actually kills the colony' },
    ],
  },
  {
    href: '/blog/best-flea-spray-for-home-canada',
    name: 'Fleas',
    icon: '🐕',
    count: '4 guides',
    tone: 'research',
    blurb: 'Most of a flea population is eggs and larvae in the carpet, not adults on the pet — which is why an IGR spray plus a sealed-HEPA vacuum does more than the total-release fogger most people reach for first.',
    posts: [
      { href: '/blog/flea-bites-on-humans', label: 'Flea Bites on Humans', note: 'Confirm it’s fleas first' },
      { href: '/blog/best-flea-spray-for-home-canada', label: 'Home Flea Sprays', note: 'The IGR matters more than the kill' },
      { href: '/blog/best-flea-bomb-canada', label: 'Flea Bombs & Foggers', note: 'Why an IGR spray beats a fogger' },
      { href: '/blog/best-hepa-vacuum-for-bed-bugs-and-fleas-canada', label: 'Sealed-HEPA Vacuums', note: 'Canister vs stick vs handheld' },
    ],
  },
  {
    href: '/blog/best-pest-control-equipment-canada',
    name: 'DIY Pest-Control Equipment',
    icon: '🛠️',
    count: '20+ guides',
    tone: 'research',
    blurb: 'The heavy gear — foggers, backpack sprayers, dehumidifiers and steamers — sized and compared for Canadian buyers.',
    posts: [
      { href: '/blog/best-thermal-fogger-canada', label: 'Thermal & ULV Foggers', note: 'Pulse-jet vs cold fog' },
      { href: '/blog/best-battery-backpack-sprayer-canada', label: 'Backpack Sprayers', note: 'Battery vs manual' },
      { href: '/blog/best-dehumidifier-for-basement-canada', label: 'Basement Dehumidifiers', note: 'Sizing, drainage & the pest angle' },
      { href: '/blog/best-steam-cleaner-for-pest-control-canada', label: 'Steam Cleaners', note: 'Chemical-free heat' },
    ],
  },
]

const CHOICES = [
  { n: '1', icon: '⚖️', title: 'Legal in Canada', body: 'Every pesticide holds a Health Canada PMRA domestic-class registration — verified against the public registry. Devices are non-pesticide. Grey-market US products are excluded, full stop.' },
  { n: '2', icon: '🛒', title: 'Actually buyable', body: 'The product has to be genuinely available on amazon.ca, at a fair price — not a US-only listing that arrives with duties, or never arrives at all.' },
  { n: '3', icon: '🔬', title: 'Backed by evidence', body: 'We prioritise categories with published efficacy — heat, encasements, interceptors, snap traps, barrier sprays — over gadget categories that test poorly, like ultrasonic repellers.' },
]

const FAQS = [
  {
    question: 'What is the difference between BuzzSkito\'s mosquito/tick guides and the other pest guides?',
    answer: 'It comes down to whether we treat the pest. For mosquitoes and ticks, BuzzSkito is a licensed GTA control service, so those gear guides reflect what we actually recommend from treating real GTA yards, season after season. For every other household pest — bed bugs, mice, rats, ants, fleas, wildlife, flies, wasps, roaches and more — we do not offer any service, so those pages are independent product research written the same way a neutral review site would, with no service upsell riding on what you buy.',
  },
  {
    question: 'Which pests does BuzzSkito actually treat?',
    answer: 'Only two: mosquitoes and ticks. BuzzSkito is a mosquito and tick control service operating across 19+ GTA cities from Mississauga to Toronto, Oakville, Vaughan and beyond. If you want your yard professionally treated, those are the two services we provide. Everything else on this hub is research to help you buy the right product yourself.',
  },
  {
    question: 'How many product guides are there, and how are they organised?',
    answer: 'There are 280+ individual guides across eleven categories: two we treat (Mosquito Gear and Tick Gear, picked from our own GTA treatment work) and nine independent research libraries — Bed Bug Control, Rodent & Attic, Wildlife & Yard Animals, Flies & Gnats, Wasps/Hornets & Bees, Roaches/Spiders & Crawlers, Ants & Carpenter Ants, Fleas, and DIY Pest-Control Equipment. Mosquito gear is the largest library overall at 80+ guides; bed bugs is the largest of the independent research libraries at 45+. Every one links only to products available on amazon.ca.',
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
    question: 'What does professional pest control cost in Canada?',
    answer: 'A single professional visit averages roughly $414–$617 nationally, with bed bugs the most expensive common pest at $300–$3,000+ depending on method and severity. When an infestation outgrows DIY products, our Canadian pest control cost guide breaks down real 2026 price bands by pest type, city and treatment method so you can sanity-check any quote before you sign.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: 'The gear BuzzSkito recommends from treating GTA yards for mosquitoes and ticks, plus independent, PMRA-legal Canadian product guides for bed bugs, rodents, ants, fleas, wildlife, flies, wasps and more — 280+ guides across eleven categories. Every pick is available on amazon.ca, with no grey-market US products.',
  canonical: `/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
})

function CategoryCard({ cat }: { cat: Category }) {
  const treat = cat.tone === 'treat'
  return (
    <div className="hover-lift group flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
      <div className={`h-1.5 bg-gradient-to-r ${treat ? 'from-emerald-500 to-brand-500' : 'from-brand-400 to-brand-600'}`} aria-hidden="true" />
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl border text-2xl ${treat ? 'border-emerald-100 bg-emerald-50' : 'border-brand-100 bg-brand-50'}`} aria-hidden="true">{cat.icon}</span>
            <div>
              <h3 className="text-lg font-extrabold leading-tight text-brand-900">
                <Link href={cat.href} className="hover:text-emerald-700">{cat.name}</Link>
              </h3>
              <span className="text-xs font-bold uppercase tracking-wide text-gray-400">{cat.count}</span>
            </div>
          </div>
          <span className={`inline-flex shrink-0 items-center rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${treat ? 'bg-emerald-100 text-emerald-800' : 'border border-brand-200 bg-brand-50 text-brand-700'}`}>{treat ? 'We treat this' : 'Research only'}</span>
        </div>
        <p className="mb-4 text-sm leading-relaxed text-gray-600">{cat.blurb}</p>
        <ul className="mb-4 space-y-1.5">
          {cat.posts.map((post) => (
            <li key={post.href} className="flex gap-2 text-sm">
              <span className="mt-0.5 text-emerald-400" aria-hidden="true">›</span>
              <span><Link href={post.href} className="font-semibold text-brand-800 hover:text-emerald-700">{post.label}</Link><span className="text-gray-400"> — {post.note}</span></span>
            </li>
          ))}
        </ul>
        <div className="mt-auto border-t border-gray-100 pt-3.5">
          <Link href={cat.href} className="arrow-nudge inline-flex items-center gap-1 text-sm font-bold text-brand-800 transition-colors group-hover:text-emerald-700">All {cat.name.toLowerCase()} guides →</Link>
        </div>
      </div>
    </div>
  )
}

export default function PestProductGuidesPage() {
  const postingSchema = {
    ...blogPostingSchema({
      title: TITLE,
      description: 'The master hub for BuzzSkito\'s recommended products — mosquito and tick gear picked from real GTA treatment work, plus independent, PMRA-legal Canadian guides for other household pests. 280+ guides across eleven categories.',
      slug: SLUG,
      datePublished: DATE,
    }),
    dateModified: UPDATED,
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
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-950 text-white">
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-16 top-10 h-64 w-64 rounded-full bg-brand-500/20 blur-3xl" aria-hidden="true" />
        <div className="absolute inset-0 opacity-[0.06]" aria-hidden="true"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, #fff 1px, transparent 1px), radial-gradient(circle at 70% 60%, #fff 1px, transparent 1px)', backgroundSize: '46px 46px, 64px 64px' }} />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <nav aria-label="Breadcrumb" className="mb-5 flex items-center gap-1.5 text-sm text-brand-300">
            <Link href="/" className="transition-colors hover:text-white">Home</Link><span className="text-brand-600">/</span>
            <span className="text-white">Recommended Products</span>
          </nav>
          <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-300">🛒 Recommended Products</span>
          <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.06] sm:text-5xl lg:text-6xl">
            The gear that actually works —{' '}
            <span className="bg-gradient-to-r from-emerald-300 to-amber-200 bg-clip-text text-transparent">and is legal in Canada</span>
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-brand-100 sm:text-xl">For mosquitoes &amp; ticks, this is the gear we actually recommend after treating GTA yards ourselves. For every other household pest, it&rsquo;s independent Canadian product research — we don&rsquo;t treat those, we just help you find what works and what&rsquo;s legal here.</p>
          <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-brand-200">
            <span className="inline-flex items-center gap-1.5"><span className="text-amber-300">★★★★★</span> 150 five-star reviews</span>
            <span className="text-brand-600">·</span>
            <span>Licensed GTA mosquito &amp; tick control</span>
            <span className="text-brand-600">·</span>
            <span>Every pick on amazon.ca</span>
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {[{ v: '280+', l: 'Product guides' }, { v: '11', l: 'Categories' }, { v: 'PMRA-legal', l: 'Canadian picks only' }].map((s) => (
              <div key={s.l} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-sm">
                <div className="text-2xl font-extrabold leading-none text-white">{s.v}</div>
                <div className="mt-1.5 text-[11px] uppercase tracking-wide text-brand-300">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick answer + disclosure */}
      <section className="border-b border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
          <div className="speakable rounded-2xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm">
            <p className="mb-3 flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-emerald-700">
              <span className="grid h-5 w-5 place-items-center rounded-full bg-emerald-600 text-[11px] text-white" aria-hidden="true">✓</span>Quick Answer
            </p>
            <p className="text-[15px] font-medium leading-relaxed text-gray-800">This is BuzzSkito&rsquo;s master product hub — 280+ guides across eleven categories. It splits in two: mosquito and tick gear picked from our own licensed GTA treatment work (the two pests we actually treat), and independent, PMRA-legal Canadian research for the household pests we don&rsquo;t — bed bugs, rodents, ants, fleas, wildlife, flies, wasps, roaches and the DIY equipment behind them. Every recommendation is available on amazon.ca, with grey-market US products excluded by rule.</p>
            <ul className="mt-4 grid gap-x-6 gap-y-2 text-sm text-gray-700 sm:grid-cols-2">
              {[
                'Eleven categories: Mosquito, Tick, Bed Bug, Rodent, Wildlife, Flies, Wasps, Roaches/Crawlers, Ants, Fleas and Equipment.',
                'Mosquito & tick picks come from the yards we actually treat; every other pest is neutral research.',
                'Every pesticide holds a Health Canada PMRA domestic-class registration — no grey-market US products.',
                'Mosquito gear is the biggest library at 80+ guides; bed bugs leads the research side at 45+.',
                'Second-gen anticoagulant rat poisons are not consumer-legal in Canada; bromethalin stations are.',
                'The only two pests BuzzSkito treats as a service are mosquitoes and ticks, across 19+ GTA cities.',
              ].map((b) => (<li key={b} className="flex gap-2"><span className="mt-0.5 text-emerald-500" aria-hidden="true">▸</span><span>{b}</span></li>))}
            </ul>
            <p className="mt-4 text-xs text-gray-500">— BuzzSkito Mosquito &amp; Tick Control · 150 five-star Google reviews · independent product research</p>
          </div>
          <div className="mt-5"><SpecialistDisclosure pest="most household pests" /></div>
        </div>
      </section>

      {/* How we choose */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 pt-14 sm:px-6">
          <h2 className="mb-1 text-2xl font-extrabold text-brand-900">How every pick earns its spot</h2>
          <p className="mb-7 max-w-2xl text-sm text-gray-500">Three filters, applied in order. Anything that fails one is out — no matter how well it would sell.</p>
          <div className="grid gap-4 md:grid-cols-3">
            {CHOICES.map((c) => (
              <div key={c.n} className="relative rounded-2xl border border-gray-100 bg-gradient-to-b from-gray-50 to-white p-6 shadow-sm">
                <div className="mb-3 flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-emerald-50 text-2xl" aria-hidden="true">{c.icon}</span>
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-900 text-sm font-extrabold text-white">{c.n}</span>
                </div>
                <h3 className="mb-1.5 text-base font-extrabold text-brand-900">{c.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured — the pests we treat */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-emerald-100 text-lg" aria-hidden="true">🛡️</span>
            <h2 className="text-2xl font-extrabold text-brand-900">The two pests we treat</h2>
            <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-800">Technician-picked</span>
          </div>
          <p className="mb-6 max-w-2xl text-sm text-gray-500">BuzzSkito is a licensed GTA mosquito &amp; tick service. These picks come from what we see work — and fail — on the properties we treat.</p>
          <div className="grid gap-6 md:grid-cols-2">
            {FEATURED.map((cat) => (<CategoryCard key={cat.href} cat={cat} />))}
          </div>
        </div>
      </section>

      {/* Research grid — every other pest */}
      <section className="border-t border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-100 text-lg" aria-hidden="true">🔬</span>
            <h2 className="text-2xl font-extrabold text-brand-900">Every other pest — independent research</h2>
            <span className="rounded-full border border-brand-200 bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-brand-700">PMRA-legal · amazon.ca only</span>
          </div>
          <p className="mb-6 max-w-2xl text-sm text-gray-500">We don&rsquo;t treat these — and never will — so the research stays neutral, with no service upsell riding on what you buy. Newest in the library: <Link href="/blog/how-to-get-rid-of-ants-canada" className="font-semibold text-brand-700 underline underline-offset-2 hover:text-emerald-700">why ant bait beats every spray on the shelf</Link>, and the structural side of the same pest in <Link href="/blog/carpenter-ants-canada" className="font-semibold text-brand-700 underline underline-offset-2 hover:text-emerald-700">finding a carpenter ant nest</Link>. Damp-basement and fall-invader problems get their own pages too — <Link href="/blog/how-to-get-rid-of-centipedes-canada" className="font-semibold text-brand-700 underline underline-offset-2 hover:text-emerald-700">house centipedes</Link>, <Link href="/blog/how-to-get-rid-of-earwigs-canada" className="font-semibold text-brand-700 underline underline-offset-2 hover:text-emerald-700">earwigs</Link>, and the late-August sealing window that stops <Link href="/blog/how-to-get-rid-of-boxelder-bugs-canada" className="font-semibold text-brand-700 underline underline-offset-2 hover:text-emerald-700">boxelder bugs</Link>.</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {RESEARCH.map((cat) => (<CategoryCard key={cat.href} cat={cat} />))}
          </div>
        </div>
      </section>

      {/* Service tie-in */}
      <section className="border-y border-gray-100 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
          <aside aria-label="Services BuzzSkito provides" className="rounded-3xl border-2 border-emerald-300 bg-gradient-to-br from-emerald-50 to-white p-6 shadow-sm sm:p-8">
            <p className="mb-2 text-xs font-extrabold uppercase tracking-wider text-emerald-700">The pests we actually treat</p>
            <h2 className="mb-3 text-2xl font-extrabold text-brand-900">Want it handled for you? We treat mosquitoes and ticks.</h2>
            <p className="mb-5 max-w-2xl text-sm leading-relaxed text-gray-700">Product guides are great for DIY. But for whole-yard mosquito and tick coverage across a full season, BuzzSkito&rsquo;s licensed barrier spray does what no consumer product can — same-day protection with weeks of residual, backed by 150 five-star reviews across 19+ GTA cities.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/mosquito-control" className="btn-primary-sm">Professional mosquito control →</Link>
              <Link href="/tick-control" className="btn-primary-sm">Professional tick control →</Link>
            </div>
          </aside>
          <p className="mt-6 text-sm leading-relaxed text-gray-600">Trying to price a professional job instead? A single visit averages roughly $414–$617 nationally, with bed bugs the most expensive at $300–$3,000+. Our <Link href="/pest-control-cost-canada" className="font-semibold text-brand-700 underline underline-offset-2 hover:text-emerald-700">Canadian pest control cost guide</Link> breaks down real 2026 price bands by pest, city and method.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
          <h2 className="mb-6 text-2xl font-extrabold text-brand-900">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {FAQS.map(({ question, answer }) => (
              <details key={question} className="group rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
                <summary className="flex list-none cursor-pointer items-center justify-between gap-3 font-bold text-brand-900">
                  {question}
                  <span className="shrink-0 text-2xl leading-none text-emerald-600 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-gray-700">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
