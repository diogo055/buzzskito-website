import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { SITE_URL } from '@/lib/constants'
import GuideHub, { type HubSection } from '@/components/GuideHub'

const SLUG = 'pest-product-guides/rodent-control'
const DATE = '2026-07-17'
const TITLE = 'Mouse & Rat Control Products in Canada — Traps, Baits & What\'s Legal'

const SECTIONS: HubSection[] = [
  {
    name: 'Traps',
    icon: '🪤',
    intro: 'The trap-first strategy starts here. For mice, a modern plastic-jaw snap trap or a battery-powered electronic unit beats the old wooden classic on both catch rate and safety; for rats you need a heavier snap trap or a rat-rated electronic unit with the jaw strength to deliver a clean kill.',
    guides: [
      { href: '/blog/best-mouse-trap-canada', title: 'Best Mouse Trap Canada', blurb: 'Snap, electronic, and glue traps compared — which designs actually catch mice and which waste your money.', tone: 'top' },
      { href: '/blog/victor-electronic-mouse-trap-review-canada', title: 'Victor Electronic Mouse Trap Review', blurb: 'A hands-on look at the battery-powered high-voltage trap that kills on contact and flags each catch.' },
      { href: '/blog/best-rat-trap-canada', title: 'Best Rat Trap Canada', blurb: 'Heavy-duty snap and electronic traps sized for Norway and roof rats — the ones with the jaw strength to work.' },
    ],
  },
  {
    name: 'Legal Bait & Poison',
    icon: '☠️',
    intro: 'When trapping cannot keep up, bait can supplement it — but only within the narrow set of products legally registered for Canadian consumers. Second-generation anticoagulants are commercial-only here, so the legal consumer choice is a non-anticoagulant bait sold pre-loaded inside a tamper-resistant disposable station.',
    guides: [
      { href: '/blog/mouse-bait-station-canada', title: 'Mouse Bait Stations Canada', blurb: 'Tamper-resistant stations and the pre-loaded, PMRA-registered bait format that is actually legal for consumers.' },
      { href: '/blog/rat-poison-canada-what-is-legal', title: 'Rat Poison in Canada — What Is Actually Legal', blurb: 'Why second-generation anticoagulants are commercial-only here, and what is left on the consumer shelf.' },
    ],
  },
  {
    name: 'Removal & Winter Exclusion',
    icon: '❄️',
    intro: 'Rodent problems peak in the opposite season to mosquitoes and ticks: as outdoor temperatures fall, mice and rats move toward the warmth, food, and shelter of a house. Sealing entry points before the first cold snap is the highest-return work in all of rodent control.',
    guides: [
      { href: '/blog/how-to-get-rid-of-mice-canada', title: 'How to Get Rid of Mice in Canada', blurb: 'The full trap-first removal playbook — sanitation, sealing, trap placement, and when to escalate.' },
      { href: '/blog/how-to-keep-mice-out-of-your-house-winter', title: 'Keeping Mice Out of Your House in Winter', blurb: 'Exclusion and sealing before the first cold snap drives mice indoors looking for warmth and food.' },
    ],
  },
  {
    name: 'What Doesn\'t Work',
    icon: '🚫',
    intro: 'Two products that show up constantly in rodent searches but do not remove mice: ultrasonic plug-in repellers, which have failed controlled studies, and diatomaceous earth, a crawling-insect dust that does nothing to mammals. They are here so you can skip them with confidence.',
    guides: [
      { href: '/blog/ultrasonic-pest-repellers-do-they-work', title: 'Ultrasonic Pest Repellers — Do They Work?', blurb: 'What controlled studies and the US FTC say about the plug-in devices that promise to drive rodents out.', tone: 'skip' },
      { href: '/blog/diatomaceous-earth-canada-buyers-guide', title: 'Diatomaceous Earth Canada — Buyers Guide', blurb: 'A related crawling-insect product — the mechanical dust that abrades insects but does nothing to mice or rats.', tone: 'skip' },
    ],
  },
]

const POSTS_LINKED = SECTIONS.reduce((n, s) => n + s.guides.length, 0)

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

      <GuideHub
        breadcrumb={[{ name: 'Home', href: '/' }, { name: 'Pest Product Guides', href: '/pest-product-guides' }, { name: 'Mouse & Rat Control' }]}
        badge="Rodent Control"
        title="Mouse & Rat Control for Canadian Homes — Trap-First & PMRA-Legal"
        subtitle="The traps that actually catch mice and rats, the one poison format that is legal for Canadian consumers, and how to seal a house before winter drives rodents indoors. Every recommendation checked against Health Canada’s PMRA registry."
        heroStats={[{ value: `${POSTS_LINKED}`, label: 'Research guides' }, { value: `${SECTIONS.length}`, label: 'Categories' }, { value: 'PMRA-legal', label: 'Picks only' }]}
        adjacentPest="mice or rats"
        quickAnswer={{
          lead: <>For a home mouse or rat problem in Canada, start with <strong>traps, not poison</strong>: a good snap or electronic trap gives you a confirmed kill, works the first night, and avoids the secondary-poisoning risk bait poses to pets and wildlife. Poison is the narrower option here anyway — second-generation anticoagulants are restricted to commercial applicators, so the legal consumer choice is a non-anticoagulant bait sold pre-loaded inside a tamper-resistant disposable station.</>,
          bullets: [
            <>Second-generation anticoagulants (brodifacoum, bromadiolone, difethialone) are <strong>commercial-only</strong> in Canada after Health Canada&rsquo;s rodenticide re-evaluation.</>,
            <>The main PMRA-registered consumer poison is a bromethalin bait pre-loaded in tamper-resistant disposable stations (e.g. the Tomcat disposable line).</>,
            <>Traps are the recommended first move — confirmed catches, no dead-in-the-wall smell, no poisoned-predator risk.</>,
            <>An adult house mouse can enter through a gap about 6&nbsp;mm wide — the width of a pencil.</>,
            <>Ultrasonic plug-in repellers have failed controlled studies; the US FTC has acted against unsupported claims.</>,
            <>Fall and winter are peak indoor-rodent season, which is why exclusion and sealing matter most before the first cold snap.</>,
          ],
          attribution: '— BuzzSkito Pest Product Guides · independent Canadian research',
        }}
        howWeRank={{
          title: 'Why mouse and rat control in Canada needs its own guide',
          body: <>Most rodent advice Canadians read online is written for an American reader, and a large share of it recommends products that are either illegal to buy here or restricted to licensed professionals. The single biggest gap is poison: after Health Canada&rsquo;s Pest Management Regulatory Agency (PMRA) re-evaluated rodenticides, the strongest US consumer baits — the second-generation anticoagulants brodifacoum, bromadiolone, and difethialone — were pulled from the domestic shelf and restricted to commercial and agricultural applicators. That reshapes the whole strategy toward <strong>trap-first</strong> control. Every guide in this cluster applies the same three filters as the rest of our library: <strong>PMRA legality first</strong>, <strong>real amazon.ca availability second</strong>, and <strong>published evidence third</strong> — which is why we lead with traps and flag the gadgets that fail.</>,
        }}
        sections={SECTIONS}
        bottomLine={{
          title: 'Related research and costs',
          body: <>This rodent cluster is one section of our broader <Link href="/pest-product-guides">Canadian pest product guides</Link> library, which applies the same PMRA-legality-first method to bed bugs, diatomaceous earth, and more. When a rodent problem outgrows DIY traps and bait, our <Link href="/pest-control-cost-canada">Canadian pest control cost guide</Link> breaks down 2026 price bands by pest type and treatment method so you can sanity-check any quote. A reminder on scope: everything here is independent research from BuzzSkito&rsquo;s publishing team — our operating business treats mosquitoes and ticks only, and we do not remove mice or rats or sell any product reviewed here.</>,
        }}
        faqs={FAQS}
        cta={{ heading: 'While you rodent-proof, don’t forget mosquito season', subtext: 'BuzzSkito treats mosquitoes and ticks across 19 GTA cities — book a free yard assessment before the summer bite season starts.' }}
      />
    </>
  )
}
