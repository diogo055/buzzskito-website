import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { SITE_URL } from '@/lib/constants'
import SpecialistDisclosure from '@/components/SpecialistDisclosure'

const SLUG = 'pest-product-guides/rodent-control'
const DATE = '2026-07-17'
const TITLE = 'Mouse & Rat Control Products in Canada — Traps, Baits & What\'s Legal'

const RODENT_GUIDES = [
  {
    href: '/blog/best-mouse-trap-canada',
    title: 'Best Mouse Trap Canada',
    blurb: 'Snap, electronic, and glue traps compared — which designs actually catch mice and which waste your money.',
  },
  {
    href: '/blog/victor-electronic-mouse-trap-review-canada',
    title: 'Victor Electronic Mouse Trap Review',
    blurb: 'A hands-on look at the battery-powered high-voltage trap that kills on contact and flags each catch.',
  },
  {
    href: '/blog/best-rat-trap-canada',
    title: 'Best Rat Trap Canada',
    blurb: 'Heavy-duty snap and electronic traps sized for Norway and roof rats — the ones with the jaw strength to work.',
  },
  {
    href: '/blog/mouse-bait-station-canada',
    title: 'Mouse Bait Stations Canada',
    blurb: 'Tamper-resistant stations and the pre-loaded, PMRA-registered bait format that is actually legal for consumers.',
  },
  {
    href: '/blog/rat-poison-canada-what-is-legal',
    title: 'Rat Poison in Canada — What Is Actually Legal',
    blurb: 'Why second-generation anticoagulants are commercial-only here, and what is left on the consumer shelf.',
  },
  {
    href: '/blog/how-to-get-rid-of-mice-canada',
    title: 'How to Get Rid of Mice in Canada',
    blurb: 'The full trap-first removal playbook — sanitation, sealing, trap placement, and when to escalate.',
  },
  {
    href: '/blog/how-to-keep-mice-out-of-your-house-winter',
    title: 'Keeping Mice Out of Your House in Winter',
    blurb: 'Exclusion and sealing before the first cold snap drives mice indoors looking for warmth and food.',
  },
  {
    href: '/blog/ultrasonic-pest-repellers-do-they-work',
    title: 'Ultrasonic Pest Repellers — Do They Work?',
    blurb: 'What controlled studies and the US FTC say about the plug-in devices that promise to drive rodents out.',
  },
  {
    href: '/blog/diatomaceous-earth-canada-buyers-guide',
    title: 'Diatomaceous Earth Canada — Buyers Guide',
    blurb: 'A related crawling-insect product — the mechanical dust that abrades insects but does nothing to mice or rats.',
  },
]

const FAQS = [
  {
    question: 'What mouse and rat poison is actually legal for consumers in Canada?',
    answer: 'Second-generation anticoagulants (brodifacoum, bromadiolone, difethialone) are no longer sold as domestic-class products in Canada — after Health Canada\'s rodenticide re-evaluation they are restricted to licensed commercial and agricultural use. The main PMRA-registered consumer option is a non-anticoagulant bait such as bromethalin, sold pre-loaded inside tamper-resistant disposable bait stations (the Tomcat disposable line is the most widely stocked example). Loose pellets and the high-potency concentrates you see on US sites are not a legal consumer purchase here. Our rat poison legality guide covers exactly what is and is not on the shelf.',
  },
  {
    question: 'Are traps or poison better for getting rid of mice?',
    answer: 'For a household mouse problem, traps are almost always the better first move. A snap or electronic trap gives you a confirmed kill you can see and remove, works the same night you set it, and carries no risk of a poisoned mouse dying inside a wall and stinking for weeks. Bait also creates a secondary-poisoning risk for pets, owls, and hawks that eat a dosed rodent. Reserve bait stations for situations where trapping alone cannot keep up, and even then choose the legal, tamper-resistant, pre-loaded format.',
  },
  {
    question: 'Why do your guides recommend traps before bait?',
    answer: 'Three reasons: confirmation, safety, and Canadian law. Traps let you confirm each catch and gauge whether the problem is shrinking; bait leaves you guessing. Traps avoid the secondary-poisoning risk that bait poses to pets and predatory birds. And because Canada restricts the strongest rodenticides to commercial applicators, the consumer poison options are narrower than most US advice assumes — so a trap-first strategy is both safer and more practical for a homeowner working with what is legally available.',
  },
  {
    question: 'Do ultrasonic repellers actually get rid of mice?',
    answer: 'The evidence says no. Controlled studies have repeatedly failed to show that ultrasonic plug-in devices drive mice or rats out of a home, and the US FTC has taken action against manufacturers over unsupported claims. Rodents habituate to the sound quickly and simply nest around it. The devices are legal to sell in Canada because they contain no pesticide, but legal is not the same as effective. Spend the money on traps, sealing gaps, and removing food sources instead.',
  },
  {
    question: 'How do mice get into a Canadian house in winter?',
    answer: 'When outdoor temperatures drop, mice look for warmth, food, and shelter — and a house is all three. An adult house mouse can squeeze through a gap the width of a pencil (about 6 mm), so the common entry points are gaps around dryer vents, utility and cable penetrations, garage door corners, weep holes, and the base of exterior doors. Fall is the highest-value time to seal those openings, which is exactly why the winter-exclusion guide in this cluster focuses on stopping mice before they get in rather than trapping them after.',
  },
  {
    question: 'Does diatomaceous earth kill mice?',
    answer: 'No. Diatomaceous earth is a mechanical insecticide dust — it works by abrading the waxy coating of crawling insects so they dehydrate. It does nothing to mammals like mice or rats. We include the diatomaceous earth buyers guide in this cluster only as a related crawling-insect reference, not as a rodent product. For mice, the effective tools are traps, exclusion, and (as a last resort) legally registered bait stations.',
  },
  {
    question: 'Does BuzzSkito remove mice or rats?',
    answer: 'No. BuzzSkito is a mosquito and tick control service operating in the GTA — those are the only two pests we treat. We do not do rodent removal, and we do not sell or apply any of the products reviewed here. This cluster is independent research from our publishing team, focused on what is genuinely available and PMRA-legal for Canadian homeowners. If a rodent infestation is beyond DIY, a licensed pest control operator is the right call.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: 'Independent Canadian guide to mouse and rat control products: the traps that actually catch, which rodent poisons are legal (second-generation anticoagulants are commercial-only), and how to keep mice out in winter. Trap-first, PMRA-checked.',
  canonical: `/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
})

export default function RodentControlHubPage() {
  const postingSchema = {
    ...blogPostingSchema({
      title: TITLE,
      description: 'Independent Canadian mouse and rat control product research — trap-first, with the compliance picture on what rodenticides are legal for consumers (second-generation anticoagulants are commercial-only in Canada).',
      slug: SLUG,
      datePublished: DATE,
    }),
    url: `${SITE_URL}/${SLUG}`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/${SLUG}` },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(postingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Pest Product Guides', url: '/pest-product-guides' }, { name: 'Mouse & Rat Control', url: `/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/${SLUG}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex flex-wrap gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/pest-product-guides" className="hover:text-white">Pest Product Guides</Link><span>/</span>
            <span className="text-white">Mouse &amp; Rat Control</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">The traps that actually catch mice and rats, the one poison format that is legal for Canadian consumers, and how to seal a house before winter drives rodents indoors. Every recommendation checked against Health Canada&rsquo;s PMRA registry.</p>
        </div>
      </section>

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">For a home mouse or rat problem in Canada, start with traps, not poison: a good snap or electronic trap gives you a confirmed kill, works the first night, and avoids the secondary-poisoning risk bait poses to pets and wildlife. Poison is the narrower option here anyway — second-generation anticoagulants are restricted to commercial applicators, so the legal consumer choice is a non-anticoagulant bait sold pre-loaded inside a tamper-resistant disposable station.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>Second-generation anticoagulants (brodifacoum, bromadiolone, difethialone) are <strong>commercial-only</strong> in Canada after Health Canada&rsquo;s rodenticide re-evaluation.</li>
              <li>The main PMRA-registered consumer poison is a bromethalin bait pre-loaded in tamper-resistant disposable stations (e.g. the Tomcat disposable line).</li>
              <li>Traps are the recommended first move — confirmed catches, no dead-in-the-wall smell, no poisoned-predator risk.</li>
              <li>An adult house mouse can enter through a gap about 6&nbsp;mm wide — the width of a pencil.</li>
              <li>Ultrasonic plug-in repellers have failed controlled studies; the US FTC has acted against unsupported claims.</li>
              <li>Fall and winter are peak indoor-rodent season, which is why exclusion and sealing matter most before the first cold snap.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">— BuzzSkito Pest Product Guides · independent Canadian research</p>
          </div>

          <SpecialistDisclosure pest="mice or rats" />
        </div>
      </section>

      <article className="py-10 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <h2>Why mouse and rat control in Canada needs its own guide</h2>
          <p>Most of the rodent advice Canadians read online is written for an American reader, and a large share of it recommends products that are either illegal to buy here or restricted to licensed professionals. The single biggest gap is poison. After Health Canada&rsquo;s Pest Management Regulatory Agency (PMRA) re-evaluated rodenticides, the strongest and most popular US consumer baits — the second-generation anticoagulants brodifacoum, bromadiolone, and difethialone — were pulled from the domestic (consumer) shelf and restricted to commercial and agricultural applicators. The loose pellets and high-potency blocks that dominate American &ldquo;best rat poison&rdquo; lists are simply not a legal consumer purchase in Canada.</p>
          <p>That reshapes the whole strategy. When the strongest poisons are off the table for a homeowner, the smart approach is <strong>trap-first</strong>: mechanical control does the heavy lifting, and the narrow set of legally registered consumer baits plays a supporting role only when trapping cannot keep up. Every guide in this cluster is built around that reality and applies the same filters as the rest of our library — PMRA legality first, real amazon.ca availability second, and published evidence third.</p>

          <h2>The guides in this cluster</h2>
          <p>Nine research guides covering traps, the legal bait picture, winter exclusion, and the gadgets that do not work. Each one is written for Canadian availability and Canadian law.</p>
          <div className="not-prose grid gap-4 sm:grid-cols-2 my-6">
            {RODENT_GUIDES.map(({ href, title, blurb }) => (
              <Link
                key={href}
                href={href}
                className="group block rounded-xl border border-navy-100 bg-white p-5 shadow-sm transition-colors hover:border-emerald-300 hover:bg-emerald-50/40"
              >
                <span className="block font-bold text-brand-900 group-hover:text-emerald-700">{title}</span>
                <span className="mt-1.5 block text-sm text-gray-600 leading-relaxed">{blurb}</span>
              </Link>
            ))}
          </div>

          <h2>Start with traps, not poison</h2>
          <p>For a typical household infestation, a well-chosen trap beats bait on almost every axis that matters. You get a <strong>confirmed kill</strong> you can see and remove, so you actually know whether the problem is shrinking. There is no risk of a poisoned mouse crawling into a wall cavity to die and stink for a fortnight. And you avoid the secondary-poisoning hazard that anticoagulant bait poses to the cats, dogs, owls, and hawks that might eat a dosed rodent — a documented problem that was part of Health Canada&rsquo;s reasoning for tightening the rules in the first place.</p>
          <p>The trap that wins depends on the target. For mice, a modern plastic-jaw snap trap or a battery-powered electronic trap outperforms the old wooden classic on both catch rate and safety. For rats, you need a heavier snap trap or a rat-rated electronic unit with the jaw strength to deliver a clean kill — an undersized mouse trap will only injure a Norway rat and teach the colony to avoid your setups. Glue boards are legal but widely criticised on welfare grounds and tend to catch non-target wildlife; our trap guides explain where each type fits.</p>

          <h2>What rodent poison is actually legal in Canada</h2>
          <p>If trapping is not enough on its own, bait can supplement it — but only within the narrow set of products that are legally registered for consumer use. Because the second-generation anticoagulants are now commercial-only, the primary PMRA-registered consumer option is a <strong>non-anticoagulant bait such as bromethalin, sold pre-loaded inside a tamper-resistant disposable station</strong> (the Tomcat disposable line is the most widely stocked example on amazon.ca). The tamper-resistant, pre-loaded design is not a marketing gimmick — it is the format the registration is tied to, because it keeps children, pets, and non-target animals away from the bait.</p>
          <p>What you cannot legally buy as a consumer here: loose second-generation anticoagulant pellets and blocks, and the concentrated professional products that US pest forums recommend. Importing an unregistered pesticide is an offence under the Pest Control Products Act, and grey-market listings do not change that. The rat poison legality guide in this cluster lays out the full picture, and — just as importantly — flags the situations where traps are still the better call even when bait is available.</p>

          <h2>Winter is when rodents move indoors</h2>
          <p>Rodent problems are seasonal in the opposite direction to mosquitoes and ticks. As outdoor temperatures fall, mice and rats move toward the warmth, food, and shelter a house provides, which makes late autumn and winter the peak of indoor-rodent complaints across Ontario and the rest of Canada. An adult house mouse can squeeze through a gap roughly 6&nbsp;mm wide — about the width of a pencil — so the highest-return work is sealing entry points before the first cold snap: gaps around dryer and utility vents, cable and pipe penetrations, garage-door corners, weep holes, and the base of exterior doors.</p>
          <p>That is why this cluster treats <Link href="/blog/how-to-keep-mice-out-of-your-house-winter">winter exclusion</Link> as a first-class topic rather than an afterthought. Stopping mice from getting in is cheaper, cleaner, and more durable than trapping them once they have already established a nest indoors — and it is the one piece of rodent control that pays off year after year.</p>

          <h2>Related research and costs</h2>
          <p>This rodent cluster is one section of our broader <Link href="/pest-product-guides">Canadian pest product guides</Link> library, which applies the same PMRA-legality-first method to bed bugs, diatomaceous earth, and more. And when a rodent problem outgrows DIY traps and bait, it helps to know what a professional should cost before you sign anything — our <Link href="/pest-control-cost-canada">Canadian pest control cost guide</Link> breaks down 2026 price bands by pest type and treatment method so you can sanity-check any quote.</p>

          <hr />
          <p className="text-sm text-gray-600">A reminder on scope: everything above is independent research from BuzzSkito&rsquo;s publishing team. Our operating business treats mosquitoes and ticks only — we do not remove mice or rats, and we do not sell or apply any of the products reviewed here.</p>
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
