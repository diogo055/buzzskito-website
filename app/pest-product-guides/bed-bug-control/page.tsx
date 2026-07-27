import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { SITE_URL } from '@/lib/constants'
import GuideHub, { type HubSection } from '@/components/GuideHub'

const SLUG = 'pest-product-guides/bed-bug-control'
const DATE = '2026-07-17'
const TITLE = 'Bed Bug Products in Canada — What Actually Works & What’s PMRA-Legal'

const SECTIONS: HubSection[] = [
  {
    name: 'Confirm It’s Bed Bugs',
    icon: '🔍',
    intro: 'Before you spend a dollar, confirm you actually have bed bugs. Start with how to confirm you have them, then work down the stack from steam and encasements to sprays and dusts.',
    guides: [
      {
        href: '/blog/how-to-check-for-bed-bugs-canada',
        title: 'How to Check for Bed Bugs',
        blurb: 'The signs — fecal spotting, shed skins, live bugs — and how to confirm before you spend a dollar.',
      },
    ],
  },
  {
    name: 'Heat & Physical Control',
    icon: '🔥',
    intro: 'Heat and physical control do the real work. Sustained heat kills every life stage on contact, which is why a proper steamer is the centrepiece of any DIY plan. Certified bed-bug-proof mattress encasements trap the bugs already inside your mattress and box spring while keeping new ones out, and interceptor traps under each bed leg isolate the bed and double as a monitoring system.',
    guides: [
      {
        href: '/blog/best-bed-bug-steamer-canada',
        title: 'Best Bed Bug Steamer Canada',
        blurb: 'Steam kills every life stage on contact — which steamers actually reach the temperatures that matter.',
        tone: 'top',
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
    ],
  },
  {
    name: 'Sprays & Dusts',
    icon: '🧴',
    intro: 'PMRA-registered sprays and insecticide-labelled diatomaceous earth handle the cracks, seams, and perimeters — as a residual backstop, not the front line. Spray-first plans fail so often because most North American bed bug populations are now pyrethroid-resistant and bed bug eggs shrug off most contact sprays, so a single spray treatment almost always rebounds a week or two later.',
    guides: [
      {
        href: '/blog/bed-bug-spray-canada',
        title: 'Bed Bug Spray Canada — What Is PMRA-Registered',
        blurb: 'The contact and residual sprays that hold a Canadian PCP registration, and why US picks like Crossfire and Temprid FX are illegal here.',
      },
      {
        href: '/blog/do-bed-bug-sprays-actually-work',
        title: 'Do Bed Bug Sprays Actually Work?',
        blurb: 'The honest answer on resistance, egg survival, and why spray alone almost always rebounds.',
        tone: 'skip',
      },
      {
        href: '/blog/diatomaceous-earth-for-bed-bugs',
        title: 'Diatomaceous Earth for Bed Bugs',
        blurb: 'Using registered, insecticide-labelled DE dust as a slow, dry-only supporting tool — not the food-grade version.',
      },
    ],
  },
  {
    name: 'Step-by-Step Treatment Plans',
    icon: '📋',
    intro: 'Bed bugs are beaten by a protocol, not a product. Start with the plan that matches your situation — a whole house, a rented apartment where the building controls treatment, or a single infested couch — then buy only the gear that plan calls for.',
    guides: [
      {
        href: '/blog/how-to-get-rid-of-bed-bugs-canada',
        title: 'How to Get Rid of Bed Bugs in Canada',
        blurb: 'The complete step-by-step plan, start to finish.',
        tone: 'top',
      },
      {
        href: '/blog/how-to-get-rid-of-bed-bugs-yourself-diy-canada',
        title: 'The Full DIY Protocol',
        blurb: 'Every step of a self-managed treatment, in order.',
      },
      {
        href: '/blog/how-to-get-rid-of-bed-bugs-in-apartment-canada',
        title: 'Bed Bugs in an Apartment',
        blurb: 'A renter’s containment-first plan when the building controls treatment.',
      },
      {
        href: '/blog/how-to-get-rid-of-bed-bugs-in-couch-canada',
        title: 'Bed Bugs in a Couch',
        blurb: 'The steamer, spray and encasement protocol for upholstery.',
      },
      {
        href: '/blog/how-to-kill-bed-bug-eggs-canada',
        title: 'How to Kill Bed Bug Eggs',
        blurb: 'Why heat wins on eggs and most sprays miss them entirely.',
      },
      {
        href: '/blog/bed-bug-control-canada-hub',
        title: 'Bed Bug Control Canada — Treatment Hub',
        blurb: 'The full DIY treatment library in one place.',
      },
    ],
  },
  {
    name: 'Heat Chambers & Room Heaters',
    icon: '🌡️',
    intro: 'Sustained heat is the only method that kills every life stage including eggs. Portable chambers handle luggage, bedding and small furniture; whole-room heaters treat an entire bedroom. This is the most expensive category, so compare before you commit.',
    guides: [
      {
        href: '/blog/best-whole-room-bed-bug-heater-canada',
        title: 'Best Whole-Room Bed Bug Heater',
        blurb: 'DIY heat-treatment equipment compared for full-room jobs.',
        tone: 'top',
      },
      {
        href: '/blog/bed-bug-heat-treatment-diy-canada',
        title: 'DIY Bed Bug Heat Treatment',
        blurb: 'The temperatures, gear and protocol that actually kill.',
      },
      {
        href: '/blog/heat-vs-chemical-bed-bug-treatment-canada',
        title: 'Heat vs Chemical Treatment',
        blurb: 'Which approach actually works, and when to choose each.',
      },
      {
        href: '/blog/steamer-vs-heater-for-bed-bugs-canada',
        title: 'Steamer vs Heater — Which First?',
        blurb: 'Dupray steam against ZappBug heat, and which to buy first.',
      },
      {
        href: '/blog/packtite-vs-zappbug-canada',
        title: 'PackTite Closet vs ZappBug Room',
        blurb: 'Head-to-head on the two big heater chambers.',
      },
      {
        href: '/blog/packtite-closet-review-canada',
        title: 'PackTite Closet Review',
        blurb: 'Is the big heat chamber worth it?',
      },
      {
        href: '/blog/packtite-portable-review-canada',
        title: 'PackTite Portable Review',
        blurb: 'The small folding heater — worth it for travellers?',
      },
      {
        href: '/blog/zappbug-oven-2-review-canada',
        title: 'ZappBug Oven 2 Review',
        blurb: 'Is the large bed bug heat box worth the money?',
      },
      {
        href: '/blog/zappbug-room-review-canada',
        title: 'ZappBug Room Review',
        blurb: 'The whole-room heater, honestly assessed.',
      },
      {
        href: '/blog/thermalstrike-ranger-review-canada',
        title: 'ThermalStrike Ranger Review',
        blurb: 'Does the heated bed bug suitcase actually work?',
      },
    ],
  },
  {
    name: 'Steamers Tested',
    icon: '💨',
    intro: 'A steamer is the single most useful tool in a DIY bed bug kit — but only if it holds a high enough temperature at the nozzle. These are the two workhorses most Canadian buyers land on.',
    guides: [
      {
        href: '/blog/vapamore-mr100-steamer-review-canada',
        title: 'Vapamore MR-100 Primo Review',
        blurb: 'The dry-steam workhorse for bed bugs, tested.',
        tone: 'top',
      },
      {
        href: '/blog/mcculloch-mc1275-steamer-review-canada',
        title: 'McCulloch MC1275 Review',
        blurb: 'Is the budget heavy-duty steamer good enough for bed bugs?',
      },
    ],
  },
  {
    name: 'Sprays, Dusts & Foggers — Reviewed',
    icon: '🔬',
    intro: 'Individual product reviews, with Canadian legality checked first. Several popular US bed bug products have no PMRA registration and cannot legally be sold or used here — those reviews say so plainly rather than sending you to a grey-market listing.',
    guides: [
      {
        href: '/blog/cimexa-bed-bug-review-canada',
        title: 'CimeXa Review',
        blurb: 'Does the silica dust actually work?',
        tone: 'top',
      },
      {
        href: '/blog/doktor-doom-sleep-tight-review-canada',
        title: 'Doktor Doom Sleep Tight Review',
        blurb: 'The PMRA-registered mattress spray, tested against the grey market.',
      },
      {
        href: '/blog/konk-bed-bug-killer-review-canada',
        title: 'Konk Bed Bug Killer Review',
        blurb: 'The legal, in-store aerosol, honestly assessed.',
      },
      {
        href: '/blog/knock-down-bed-bug-killer-review-canada',
        title: 'Knock Down Bed Bug Killer Review',
        blurb: 'The hardware-store registered spray, and where it fits.',
      },
      {
        href: '/blog/harris-bed-bug-killer-review-canada',
        title: 'Harris Bed Bug Killer Review',
        blurb: 'Does it work — and is it even legal here?',
      },
      {
        href: '/blog/ortho-home-defense-bed-bug-review-canada',
        title: 'Ortho Home Defense Review',
        blurb: 'Is the US formula PMRA-legal in Canada?',
      },
      {
        href: '/blog/crossfire-bed-bug-concentrate-review-canada',
        title: 'MGK Crossfire Concentrate Review',
        blurb: 'Why it is not the pick in Canada.',
        tone: 'skip',
      },
      {
        href: '/blog/ecoraider-bed-bug-spray-review-canada',
        title: 'EcoRaider Review',
        blurb: 'Does the plant-based killer actually work?',
      },
      {
        href: '/blog/best-natural-bed-bug-spray-canada',
        title: 'Best Natural Bed Bug Spray',
        blurb: 'Plant-based, non-toxic and PMRA-legal picks.',
      },
      {
        href: '/blog/best-bed-bug-spray-for-mattress-canada',
        title: 'Best Spray for a Mattress',
        blurb: 'Mattress-safe, PMRA-registered picks.',
      },
      {
        href: '/blog/best-bed-bug-spray-for-travel-canada',
        title: 'Best Spray for Travel',
        blurb: 'Carry-on-legal luggage and hotel picks.',
      },
      {
        href: '/blog/best-bed-bug-powder-canada',
        title: 'Best Bed Bug Powder',
        blurb: 'Silica gel against diatomaceous earth, compared.',
      },
      {
        href: '/blog/best-bed-bug-fogger-canada',
        title: 'Best Bed Bug Fogger',
        blurb: 'Registered total-release options — and their real limits.',
      },
    ],
  },
  {
    name: 'Detection, Traps & Encasements',
    icon: '🛏️',
    intro: 'Monitoring tells you whether treatment is working and when it is finally over. Encasements seal what you cannot treat directly, and interceptors under each bed leg double as an early-warning system.',
    guides: [
      {
        href: '/blog/best-bed-bug-detector-canada',
        title: 'Best Bed Bug Detector',
        blurb: 'Passive interceptors against active monitors, compared.',
      },
      {
        href: '/blog/best-bed-bug-trap-canada',
        title: 'Best Bed Bug Trap',
        blurb: 'Passive interceptors against active lure traps.',
      },
      {
        href: '/blog/best-bed-bug-box-spring-encasement-canada',
        title: 'Best Box Spring Encasement',
        blurb: 'SureGuard against SafeRest against Utopia.',
      },
      {
        href: '/blog/sureguard-mattress-encasement-review-canada',
        title: 'SureGuard Encasement Review',
        blurb: 'Is the Invisi-Zip seal actually bed-bug proof?',
      },
    ],
  },
]

const POSTS_LINKED = SECTIONS.reduce((n, s) => n + s.guides.length, 0)

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

      <GuideHub
        breadcrumb={[{ name: 'Home', href: '/' }, { name: 'Pest Product Guides', href: '/pest-product-guides' }, { name: 'Bed Bug Control' }]}
        badge="Bed Bug Control"
        title="The Bed Bug Products That Actually Work in Canada"
        subtitle="Independent research on the bed bug products Canadian homeowners can actually buy — every spray checked against Health Canada's PMRA registry, and every device weighed on published evidence."
        heroStats={[
          { value: `${POSTS_LINKED}`, label: 'Independent guides' },
          { value: `${SECTIONS.length}`, label: 'Categories' },
          { value: 'PMRA-legal', label: 'Picks only' },
        ]}
        quickAnswer={{
          lead: <>The evidence-backed bed bug stack in Canada is physical and heat control — a steamer, certified mattress encasements, and interceptor traps — with PMRA domestic-class registered sprays and diatomaceous earth in supporting roles, not starring ones. Every product below is checked against Health Canada&rsquo;s PMRA registry; popular US sprays like Crossfire and Temprid FX have no Canadian registration and are illegal to import or use here.</>,
          bullets: [
            'Heat is the only method that kills every bed bug life stage — adults, nymphs, and eggs — on contact.',
            'PMRA domestic-class sprays (Doktor Doom Sleep Tight, Pro Max, Knock Down, Konk) are legal for consumers; US picks like Crossfire and Temprid FX are not registered in Canada.',
            'Over 80% of North American bed bug populations carry pyrethroid-resistance genes, so spray used alone usually rebounds within 1–2 weeks.',
            'Interceptor traps under the bed legs are the cheapest way to confirm whether an infestation is still active.',
            'Professional bed bug treatment in Canada runs roughly $300–$600 per room (chemical) to $700–$1,500+ (whole-unit heat).',
            'Importing an unregistered pesticide violates the federal Pest Control Products Act, and border seizures do happen.',
          ],
          attribution: '— BuzzSkito Pest Product Guides · independent Canadian research',
        }}
        adjacentPest="bed bugs"
        howWeRank={{
          title: 'How we rank bed bug products',
          body: (
            <>
              <p className="mb-3">This is the question most US-written bed bug advice gets wrong for a Canadian reader. Health Canada&rsquo;s Pest Management Regulatory Agency (PMRA) registers every pesticide sold here and assigns it a class: <strong>domestic</strong> products are legal for consumers, <strong>commercial</strong> products require a licensed applicator, and anything unregistered cannot legally be sold, imported, or used at all. The famous American bed bug concentrates — Crossfire, Temprid FX, Bedlam Plus, Transport GHP — are simply not on the Canadian registry, so the &ldquo;best bed bug spray&rdquo; lists that headline them are illegal shopping lists north of the border.</p>
              <p>Every recommendation in this cluster passes the same three filters, in order: <strong>PMRA legality first, amazon.ca availability second, published evidence third.</strong> Pesticide products must carry a domestic-class Pest Control Products (PCP) registration number; devices like steamers, encasements, and interceptor traps carry no pesticide, so they only need to be genuinely purchasable and actually effective. When a popular US product fails the legality filter, we say so plainly and name the registered Canadian alternative instead.</p>
            </>
          ),
        }}
        sections={SECTIONS}
        bottomLine={{
          title: 'When DIY is not enough',
          body: (
            <>
              <p>Bed bugs are the most expensive common household pest to treat professionally, and there is a point where DIY stops being the cheaper option. If bugs have spread across multiple rooms, retreated inside walls, or survived several honest DIY rounds, a licensed structural exterminator with commercial-class products and heat equipment is usually the faster and cheaper path. Before you sign any quote, our <Link href="/pest-control-cost-canada">Canadian pest control cost guide</Link> breaks down real 2026 price bands by pest, method, and city. For the full library beyond bed bugs — mice, rats, and diatomaceous earth — head back to the <Link href="/pest-product-guides">pest product guides hub</Link>.</p>
              <p className="mt-4 text-sm text-brand-300">A note on independence: BuzzSkito&rsquo;s operating business treats only mosquitoes and ticks, so nothing above is a service we sell. Guides that carry affiliate links disclose it on the page, no placement is paid, and any product that fails the PMRA legality check is excluded regardless of commission.</p>
            </>
          ),
        }}
        faqs={FAQS}
        cta={{
          heading: 'We treat mosquitoes and ticks — not bed bugs',
          subtext: 'BuzzSkito is a GTA mosquito & tick control service. If biting bugs in your yard are the problem, book a free yard assessment.',
        }}
      />
    </>
  )
}
