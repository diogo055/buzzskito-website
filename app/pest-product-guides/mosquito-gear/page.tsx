import type { Metadata } from 'next'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { SITE_URL } from '@/lib/constants'
import GuideHub, { type HubSection } from '@/components/GuideHub'
import Link from 'next/link'

const SLUG = 'pest-product-guides/mosquito-gear'
const DATE = '2026-07-17'
const TITLE = 'Best Mosquito Control Products in Canada — The Gear Our Technicians Recommend'

const SECTIONS: HubSection[] = [
  {
    name: 'Traps & Zappers',
    icon: '⚡',
    intro: 'Devices that lure and kill flying insects. CO₂-baited traps can genuinely thin a mosquito population on a large lot; electric zappers mostly kill harmless bugs. We separate the two here.',
    guides: [
      { href: '/blog/best-mosquito-trap', title: 'Best Mosquito Trap Canada', blurb: 'Our overall trap rankings — which units catch mosquitoes and which just catch moths.', tone: 'top' },
      { href: '/blog/mosquito-magnet-canada', title: 'Mosquito Magnet Canada', blurb: 'The premium propane CO₂ trap — where to buy in Canada and whether it earns its price.' },
      { href: '/blog/dynatrap-canada-review', title: 'DynaTrap Canada Review', blurb: 'The popular UV + CO₂ trap tested — what it actually catches in a real backyard.' },
      { href: '/blog/propane-mosquito-trap-canada', title: 'Propane Mosquito Traps Canada', blurb: 'How propane CO₂ traps work, real running costs, and which units are worth it.' },
      { href: '/blog/co2-mosquito-trap-canada', title: 'CO₂ Mosquito Traps Canada', blurb: 'CO₂-baited traps explained — tank, tablet, and propane options compared.' },
      { href: '/blog/bug-zappers-canada-do-they-work', title: 'Bug Zappers Canada — Do They Work?', blurb: 'The research on electric zappers — spoiler: they kill mostly non-biting insects.', tone: 'skip' },
      { href: '/blog/flowtron-bug-zapper-canada', title: 'Flowtron Bug Zapper Canada', blurb: 'Canada\'s best-known zapper brand reviewed against the actual evidence.' },
      { href: '/blog/best-solar-bug-zapper-canada', title: 'Best Solar Bug Zapper Canada', blurb: 'Cordless solar zappers ranked — and why their coverage claims run optimistic.' },
      { href: '/blog/electric-fly-swatter', title: 'Electric Fly Swatter Canada', blurb: 'The cheap electric racket that genuinely works indoors — our top picks.' },
      { href: '/blog/laser-mosquito-killer-photon-matrix-review', title: 'Laser Mosquito Killer — Photon Matrix Review', blurb: 'The viral laser \'mosquito turret\' — is Photon Matrix real or pure hype?' },
      { href: '/blog/best-indoor-fly-mosquito-trap-canada', title: 'Best Indoor Fly & Mosquito Trap Canada', blurb: 'Plug-in indoor traps that quietly clear flying insects out of a room.' },
    ],
  },
  {
    name: 'Repellent Devices',
    icon: '🛡️',
    intro: 'Spatial repellents create a protected bubble around a seating area rather than killing anything. Thermacell is the category leader, and it is the one device we consistently recommend for a patio or deck.',
    guides: [
      { href: '/blog/thermacell-e90-canada-review', title: 'Thermacell E90 Canada Review', blurb: 'Thermacell\'s rechargeable E90 tested — the 20-foot zone of protection reviewed.', tone: 'top' },
      { href: '/blog/thermacell-canada-where-to-buy', title: 'Thermacell Canada — Where to Buy', blurb: 'Every Canadian retailer that stocks Thermacell, with current pricing.' },
      { href: '/blog/thermacell-refills-recharge-canada', title: 'Thermacell Refills & Recharge Canada', blurb: 'Refill and recharge costs, run-time per cartridge, and where to buy them.' },
      { href: '/blog/best-mosquito-repellent-device-canada', title: 'Best Mosquito Repellent Device Canada', blurb: 'Thermacell vs clip-ons vs coils — which spatial repellent actually works.' },
    ],
  },
  {
    name: 'Foggers & Sprayers',
    icon: '💨',
    intro: 'The application tools for DIY treatment. Foggers knock down adults for an evening, backpack sprayers apply barrier product to vegetation, and misting setups target a patio perimeter.',
    guides: [
      { href: '/blog/mosquito-fogger-canada', title: 'Mosquito Fogger Canada', blurb: 'Thermal and cold foggers for yards — what is legal and effective in Canada.' },
      { href: '/blog/backpack-sprayer-canada', title: 'Backpack Sprayer Canada', blurb: 'The sprayers the pros use — how to pick one for DIY barrier treatments.' },
      { href: '/blog/misting-fan-canada', title: 'Misting Fan Canada', blurb: 'Outdoor misting fans for patios — cooling plus a light bug deterrent.' },
      { href: '/blog/patio-misting-system-canada', title: 'Patio Misting System Canada', blurb: 'Automated perimeter misting systems — cost, coverage, and the caveats.' },
    ],
  },
  {
    name: 'Screens & Nets',
    icon: '🕸️',
    intro: 'Physical barriers are the only mosquito control that works 100% of the time — nothing gets through mesh. Screens, nets, and tight-weave clothing keep bites off without any chemistry at all.',
    guides: [
      { href: '/blog/mosquito-net', title: 'Mosquito Net Canada', blurb: 'Bed nets, canopy nets, and gazebo nets that actually seal mosquitoes out.' },
      { href: '/blog/best-screen-tent-canada', title: 'Best Screen Tent Canada', blurb: 'Screen houses and gazebos to reclaim the deck on peak-season evenings.' },
      { href: '/blog/mosquito-screens-patio-canada', title: 'Mosquito Screens for Patios Canada', blurb: 'Retractable and magnetic screens for patios, porches, and doorways.' },
      { href: '/blog/bug-protective-clothing-canada', title: 'Bug Protective Clothing Canada', blurb: 'Permethrin-treated and tight-weave clothing for serious bug country.' },
    ],
  },
  {
    name: 'Repellents & Sprays',
    icon: '🧴',
    intro: 'What goes on your skin, burns on the table, or sprays around the perimeter. DEET and icaridin are the two on-skin actives Health Canada rates for real protection hours; most of the rest are convenience products.',
    guides: [
      { href: '/blog/off-deep-woods-deet-bug-spray-canada', title: 'OFF! Deep Woods DEET Bug Spray Canada', blurb: 'Canada\'s DEET benchmark — concentrations, protection hours, and safety.', tone: 'top' },
      { href: '/blog/best-bug-spray-for-kids-canada', title: 'Best Bug Spray for Kids Canada', blurb: 'Health Canada age rules and the safest repellent picks for children.' },
      { href: '/blog/mosquito-repellent-for-dogs', title: 'Mosquito Repellent for Dogs Canada', blurb: 'Dog-safe repellents — what is approved and what is toxic to pets.' },
      { href: '/blog/citronella-candles-canada-do-they-work', title: 'Citronella Candles Canada — Do They Work?', blurb: 'The honest answer on citronella — modest, close-range, and easily overrated.' },
      { href: '/blog/mosquito-coils-canada', title: 'Mosquito Coils Canada', blurb: 'Burning coils reviewed — how well they work and the smoke trade-off.' },
      { href: '/blog/mosquito-repellent-bracelets-canada', title: 'Mosquito Repellent Bracelets Canada', blurb: 'Wearable bands tested — why they protect a wrist, not a whole body.', tone: 'skip' },
      { href: '/blog/mosquito-repellent-stickers-patches-canada', title: 'Mosquito Repellent Stickers & Patches Canada', blurb: 'Repellent patches and stickers — cute, but do they actually do anything?', tone: 'skip' },
      { href: '/blog/ortho-home-defense-canada-review', title: 'Ortho Home Defense Canada Review', blurb: 'The perimeter insect spray reviewed for Canadian availability and use.' },
    ],
  },
  {
    name: 'Larvicide',
    icon: '💧',
    intro: 'The highest-leverage product on this whole page. Killing larvae in standing water stops mosquitoes before they ever fly — one dunk treats a lot for roughly 30 days and is safe around pets, fish, and wildlife.',
    guides: [
      { href: '/blog/mosquito-dunks-canada-guide', title: 'Mosquito Dunks Canada Guide', blurb: 'BTI dunks kill larvae in standing water — the one product every yard should use.', tone: 'top' },
    ],
  },
]

const POSTS_LINKED = SECTIONS.reduce((n, s) => n + s.guides.length, 0)

const FAQS = [
  { question: 'What is the single most effective mosquito control product for a backyard?', answer: 'There is no single winner — the best results come from stacking two low-cost products. First, drop BTI mosquito dunks in any standing water to kill larvae before they hatch (about $30 covers a season). Second, run a Thermacell or similar spatial repellent device wherever you sit, for a roughly 20-foot protected zone. That combination out-performs any single trap, candle, or bracelet, and both are widely available on amazon.ca and at Canadian Tire. For whole-yard, tick-inclusive coverage that lasts weeks per application, professional barrier spray is the step up from consumer gear.' },
  { question: 'Do bug zappers actually kill mosquitoes?', answer: 'Barely. Multiple independent studies — including a widely cited University of Delaware analysis — found that mosquitoes make up only a tiny fraction of what electric bug zappers kill, typically under 5%. The vast majority of the catch is harmless moths, beetles, and other night-flying insects, some of which are beneficial predators of mosquitoes. Zappers use UV light, but mosquitoes home in on CO₂ and body heat rather than light, so they largely ignore the device. If you want a light-and-fan device that works, a CO₂-baited trap is the category to look at, not a zapper.' },
  { question: 'What is the best mosquito repellent to put on your skin in Canada?', answer: 'Health Canada recognises DEET and icaridin (also called picaridin) as the two most effective personal repellent actives for the general public. A 20–30% DEET product such as OFF! Deep Woods gives several hours of protection per application; 20% icaridin is comparable and less greasy with no plastic-melting issues. For children, Health Canada sets age-based concentration limits, so check the label — our kids bug spray guide breaks those down. Plant-based options like oil of lemon eucalyptus work but need reapplication far more often.' },
  { question: 'Do mosquito traps like DynaTrap or Mosquito Magnet actually reduce mosquitoes?', answer: 'It depends on the trap and the property. CO₂-baited propane traps such as the Mosquito Magnet can cut local populations 70–90% over 4–8 weeks of continuous running — but only on larger, isolated lots not constantly re-supplied by a neighbour\'s breeding sources. On a small suburban lot, adjacent yards refill the population faster than the trap removes it. UV-plus-CO₂ traps like DynaTrap perform less consistently against mosquitoes. For chronic pressure on rural or cottage acreage a trap can be worth it; for a typical GTA backyard, barrier spray plus dunks usually delivers more for less.' },
  { question: 'What can I put in standing water to stop mosquitoes from breeding?', answer: 'Use a BTI larvicide — Bacillus thuringiensis israelensis, the active in Mosquito Dunks and Mosquito Bits. BTI is a naturally occurring soil bacterium that kills mosquito and black-fly larvae but is harmless to pets, fish, birds, and beneficial insects, which is why Health Canada registers it for consumer use in ponds, rain barrels, and any standing water you cannot drain. One dunk treats about 100 square feet of surface water for roughly 30 days. It is the cheapest and highest-leverage mosquito product most homeowners never buy.' },
  { question: 'Is professional barrier spray better than buying these products myself?', answer: 'For whole-yard coverage that also handles ticks, yes — but the two approaches solve different problems. Consumer gear is great for targeted jobs: a Thermacell on the deck, dunks in the rain barrel, DEET on your skin for a hike. A professional barrier spray treats every surface mosquitoes rest on across your property, kills on contact, and leaves a residual that lasts up to 30 days — and unlike traps or repellents, it also controls ticks. BuzzSkito treats mosquitoes and ticks across 19 GTA cities, with single treatments from $99 and seasonal programs from $549. Many customers still run dunks and a Thermacell alongside our service.' },
]

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: 'The mosquito control gear that actually works in Canadian backyards, ranked by BuzzSkito\'s licensed technicians: traps, zappers, Thermacell devices, foggers, screens, repellents, and BTI larvicide. 32 independent guides, plus when to skip the gear and book a pro.',
  canonical: `/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
})

export default function MosquitoGearHubPage() {
  const postingSchema = {
    ...blogPostingSchema({ title: TITLE, description: 'BuzzSkito\'s technician-recommended guide to the best mosquito control products in Canada, organised by category with 32 independent product guides.', slug: SLUG, datePublished: DATE }),
    url: `${SITE_URL}/${SLUG}`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/${SLUG}` },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(postingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Recommended Products', url: '/pest-product-guides' }, { name: 'Mosquito Gear', url: `/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/${SLUG}`)) }} />

      <GuideHub
        breadcrumb={[{ name: 'Home', href: '/' }, { name: 'Recommended Products', href: '/pest-product-guides' }, { name: 'Mosquito Gear' }]}
        badge="Mosquito Gear"
        title="The Best Mosquito Control Gear for Canadian Backyards"
        subtitle="Mosquitoes are the pest we treat every day — so unlike a generic review site, we know which backyard gear actually earns its shelf space and which is a waste of money."
        heroStats={[{ value: `${POSTS_LINKED}`, label: 'Independent guides' }, { value: `${SECTIONS.length}`, label: 'Categories' }, { value: 'Licensed', label: 'Technician-reviewed' }]}
        quickAnswer={{
          lead: <>For most Canadian backyards, the gear that genuinely works falls into four buckets: a <strong>BTI larvicide</strong> (mosquito dunks) for any standing water, a <strong>spatial repellent device</strong> (Thermacell) for the patio, <strong>DEET or icaridin</strong> on your skin, and — for large or rural lots only — a <strong>CO₂ propane trap</strong>. Electric bug zappers and repellent bracelets test poorly and are the two categories we steer readers away from.</>,
          bullets: [
            <><strong>Best larvicide:</strong> BTI mosquito dunks — ~30 days per dunk, safe around pets and fish.</>,
            <><strong>Best patio device:</strong> Thermacell — a ~20-foot repellent zone, no smoke or spray.</>,
            <><strong>Best on-skin repellent:</strong> DEET or icaridin — hours of Health-Canada-rated protection.</>,
            <><strong>Best trap (big/rural lots only):</strong> a propane CO₂ trap like Mosquito Magnet.</>,
            <><strong>Skip these:</strong> bug zappers &amp; repellent bracelets — minimal real mosquito control.</>,
            <><strong>Prefer we handle it?</strong> Barrier spray from $99 treats the whole yard and covers ticks.</>,
          ],
          attribution: '— BuzzSkito, GTA mosquito & tick control · 150 five-star Google reviews',
        }}
        serviceTieIn={{
          heading: 'Prefer we just handle it?',
          body: <>All the gear below works, but it is a job you have to keep doing. BuzzSkito&rsquo;s licensed technicians spray a professional barrier across your whole yard — mosquitoes <em>and</em> ticks — from <strong>$99</strong> per treatment, with up to 30 days of residual protection and a free re-spray guarantee.</>,
          primaryHref: '/free-yard-assessment', primaryLabel: 'Get a free yard assessment →',
          secondaryHref: '/mosquito-control', secondaryLabel: 'See professional mosquito control →',
        }}
        howWeRank={{
          title: 'How we rank backyard mosquito gear',
          body: <>Most &ldquo;best mosquito product&rdquo; lists are written by people who have never watched a population rebound three days after a treatment. We have — BuzzSkito is a licensed mosquito and tick control service across 19 GTA cities, and every product here is judged against what we see work (and fail) in real yards. Three filters decide the rankings: <strong>does the science support it</strong>, <strong>is it genuinely available to Canadian buyers</strong>, and <strong>does it solve a problem worth solving</strong>. That last one is why we praise a $12 pack of dunks and warn you off a $60 zapper.</>,
        }}
        sections={SECTIONS}
        bottomLine={{
          title: 'The honest bottom line',
          body: <>If you buy nothing else, buy a bag of <Link href="/blog/mosquito-dunks-canada-guide">BTI mosquito dunks</Link> and a <Link href="/blog/thermacell-canada-where-to-buy">Thermacell</Link>. Dunks stop mosquitoes breeding for pennies; the Thermacell keeps the patio usable while you sit there. Add <Link href="/blog/off-deep-woods-deet-bug-spray-canada">DEET or icaridin</Link> on your skin and you have covered most of the problem for under $80. When the gear becomes more hassle than it is worth, compare the DIY route against a <Link href="/mosquito-control">professional barrier spray program</Link> — for many GTA families a season of technician-applied protection is cheaper and far less fiddly than a garage full of gadgets.</>,
        }}
        faqs={FAQS}
        cta={{ heading: 'Skip the gadget graveyard — let a pro handle the bugs', subtext: 'Free yard assessment. Mosquito & tick barrier spray from $99. Same-day protection, 30-day residual, free re-spray guarantee.' }}
      />
    </>
  )
}
