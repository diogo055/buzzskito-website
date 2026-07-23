import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { SITE_URL } from '@/lib/constants'
import GuideHub, { type HubSection } from '@/components/GuideHub'

const SLUG = 'pest-product-guides/tick-gear'
const DATE = '2026-07-17'
const TITLE = 'Best Tick Control Products in Canada — Tick Gear Guide (2026)'

const SECTIONS: HubSection[] = [
  {
    name: 'Yard Treatments',
    icon: '🌿',
    intro: 'The sprays, granules, and tubes that reduce the tick population on your land. Blacklegged ticks quest at the shaded, humid edges of your property, so the goal is to hit the lawn-to-woods edges, leaf litter, and fence lines — not the open, sunny turf.',
    guides: [
      {
        href: '/blog/best-tick-control-yard-treatment',
        title: 'Best Tick Control for Yards in Ontario 2026 (6 Methods Compared)',
        blurb: 'The master comparison — professional barrier spray, consumer sprays, granular, cedar mulch, permethrin tubes, and DIY foggers rated on what actually works against blacklegged ticks.',
        tone: 'top',
      },
      {
        href: '/blog/tick-tubes-canada',
        title: 'Tick Tubes in Canada 2026: Do They Actually Work?',
        blurb: 'How permethrin-cotton tubes use mice to kill larval ticks before they ever reach your yard — plus correct placement, timing, and where to buy in Canada.',
      },
    ],
  },
  {
    name: 'Repellents & Sprays',
    icon: '🧴',
    intro: 'What you put on the perimeter, the lawn, and yourself to keep ticks from latching on. Cedar-oil and barrier options compared — which genuinely keep ticks off the grass, and which just smell nice.',
    guides: [
      {
        href: '/blog/best-tick-repellent-yard-canada',
        title: 'Best Tick Repellent for Yards — Canada 2026',
        blurb: 'Cedar oil, permethrin, and barrier options compared for Ontario lawns — which repellents genuinely keep ticks off the grass and which just smell nice.',
      },
      {
        href: '/blog/wondercide-canada-review',
        title: 'Wondercide Canada 2026 — Honest Review + Where to Buy',
        blurb: 'The cedar-oil flea and tick spray, reviewed without the hype: Canadian availability, real Amazon.ca pricing, and whether it holds up on an Ontario property.',
      },
    ],
  },
  {
    name: 'Tick Removal',
    icon: '🩹',
    intro: 'The tools you keep on hand for when one gets through — because in Ontario, one eventually will. The right tool pulls the whole tick out without leaving mouthparts behind.',
    guides: [
      {
        href: '/blog/tick-removal-tool-guide',
        title: 'Best Tick Removal Tools — Tested for Ontario 2026',
        blurb: 'Tick Twister vs TickKey vs fine-tipped tweezers, plus the step-by-step removal method that pulls the whole tick without leaving mouthparts behind.',
      },
    ],
  },
]

const POSTS_LINKED = SECTIONS.reduce((n, s) => n + s.guides.length, 0)

const FAQS = [
  {
    question: 'What is the best tick control product for a Canadian yard?',
    answer: 'It depends how much of the work you want to do yourself. For hands-off, whole-property control, a professional barrier spray to the lawn edges, leaf litter, and fence lines is the most reliable option — it kills ticks at every life stage and lasts about 30 days. For the DIY route, the evidence-backed stack is permethrin-treated clothing, a perimeter repellent or ready-to-use yard spray, and permethrin tick tubes to hit the larval ticks feeding on mice. Cedar-oil products like Wondercide are the gentlest option but need frequent reapplication.',
  },
  {
    question: 'Do DIY tick products work as well as professional treatment?',
    answer: 'For a small, well-defined problem, good DIY gear helps — permethrin on your clothing, a repellent barrier at the lawn-to-woods edge, and tick tubes can meaningfully cut your exposure. Where DIY falls short is coverage and residual: consumer sprays break down faster, are easy to under-apply, and rarely reach the shaded, humid microhabitats at fence lines and garden edges where ticks actually rest. Professional barrier spray hits those exact zones with a precision sprayer and holds a residual for roughly 30 days, which is why most homeowners with real tick pressure layer a professional treatment under their DIY habits.',
  },
  {
    question: 'Are tick tubes worth it in Ontario?',
    answer: 'They can be a smart part of a layered plan, but not a standalone fix. Tick tubes are packed with permethrin-treated cotton that mice collect for nesting material; the permethrin kills the larval ticks feeding on those mice, cutting the next generation at the wildlife-reservoir source. The catch is they only target the larval stage on rodents — they do nothing about the nymphs and adults already questing in your grass. Tubes placed in spring and mid-summer, combined with perimeter barrier spray, outperform either method alone.',
  },
  {
    question: 'Does Wondercide actually kill ticks?',
    answer: 'Yes, with caveats. Wondercide is a cedar-oil spray that kills and repels ticks on contact and is legitimately available in Canada — but like any essential-oil product, the knockdown is real only while it is wet, the residual is short, and it needs frequent reapplication after rain or heavy dew (which Ontario yards get plenty of). It is a reasonable pick if you specifically want a plant-based, pet-friendly option and are willing to spray often. Our Wondercide Canada review breaks down the products and pricing.',
  },
  {
    question: 'What is the safest way to remove a tick?',
    answer: 'Use fine-tipped tweezers or a dedicated tick tool (Tick Twister, TickKey), grasp the tick as close to the skin as possible, and pull straight up with steady, even pressure — no twisting, squeezing, burning, or smothering with petroleum jelly, all of which can make the tick regurgitate into the bite. Clean the area with soap and water or alcohol afterward, and save the tick in a sealed bag if you want it identified. Our tick removal tool guide compares the tools and walks through the full method.',
  },
  {
    question: 'What tick species should GTA homeowners worry about?',
    answer: 'The two that matter most in Ontario are the blacklegged tick (deer tick), which transmits Lyme disease and is expanding across the GTA, and the American dog tick. Blacklegged nymphs — active in late spring and summer and no bigger than a poppy seed — are the highest-risk stage because they are hard to spot and readily bite people. Risk is concentrated near conservation lands like the Oak Ridges Moraine, Rouge Park, and the Humber and Credit River corridors. Aim any tick product at the shaded, leaf-littered edges where these ticks actually live.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: 'The best tick control products for Canadian yards, reviewed by a GTA tick control specialist: yard treatments, repellents, permethrin tick tubes, Wondercide, and tick removal tools — with a clear DIY-vs-professional breakdown.',
  canonical: `/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
})

export default function TickGearGuidePage() {
  const postingSchema = {
    ...blogPostingSchema({
      title: TITLE,
      description: 'Category hub for BuzzSkito\'s tick control product guides — yard treatments, repellents, tick tubes, Wondercide, and removal tools for Canadian properties.',
      slug: SLUG,
      datePublished: DATE,
    }),
    url: `${SITE_URL}/${SLUG}`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/${SLUG}` },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(postingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Pest Product Guides', url: '/pest-product-guides' }, { name: 'Tick Gear', url: `/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/${SLUG}`)) }} />

      <GuideHub
        breadcrumb={[{ name: 'Home', href: '/' }, { name: 'Pest Product Guides', href: '/pest-product-guides' }, { name: 'Tick Gear' }]}
        badge="Tick Gear"
        title="The Tick Control Gear That Actually Works in Ontario Yards"
        subtitle="The tick control products that actually work on Canadian properties — yard treatments, repellents, permethrin tick tubes, Wondercide, and removal tools — reviewed by a GTA tick control specialist, with a straight answer on when DIY is enough and when it is not."
        heroStats={[{ value: `${POSTS_LINKED}`, label: 'In-depth guides' }, { value: `${SECTIONS.length}`, label: 'Categories' }, { value: 'Licensed', label: 'Technician-reviewed' }]}
        quickAnswer={{
          lead: <>The best tick control for most Canadian yards is a <strong>layered approach</strong>: treat the shaded lawn edges, leaf litter, and fence lines where blacklegged ticks actually live, and protect yourself with permethrin-treated gear. DIY products &mdash; repellent yard sprays, permethrin tick tubes, and cedar-oil sprays like Wondercide &mdash; genuinely help, but they need frequent reapplication and careful coverage; a <strong>professional barrier spray</strong> does the same job for about 30 days with far less effort.</>,
          bullets: [
            <>Ticks concentrate at lawn-to-woods edges, leaf litter, and fence lines &mdash; not open, sunny turf, so treat the edges.</>,
            <>Permethrin tick tubes target only larval ticks on mice; they cut next year&rsquo;s population but do nothing about the nymphs and adults already in your yard.</>,
            <>Wondercide and other cedar-oil sprays kill ticks on contact but have a short residual and need reapplying after rain.</>,
            <>Blacklegged (deer) tick nymphs are poppy-seed sized, active in summer, and the highest-risk stage for Lyme disease.</>,
            <>Remove an attached tick with fine-tipped tweezers or a tick tool, pulling straight up &mdash; never twist, burn, or smother it.</>,
            <>Professional barrier spray reaches the exact edge microhabitats DIY sprays miss and holds a residual for roughly 30 days.</>,
          ],
          attribution: '— BuzzSkito, GTA mosquito & tick control · 150 five-star Google reviews',
        }}
        serviceTieIn={{
          heading: 'We actually treat ticks',
          body: <>Rather handle the DIY yourself? Fair. But if you want it off your plate, BuzzSkito runs a licensed seasonal tick program across 19 GTA cities &mdash; <strong>$597/season standalone, or $497 bundled</strong> with any mosquito plan. Five treatments, Health Canada-approved, with a residual that holds for roughly 30 days.</>,
          primaryHref: '/free-yard-assessment', primaryLabel: 'Get a free yard assessment →',
          secondaryHref: '/tick-control', secondaryLabel: 'See professional tick control →',
        }}
        howWeRank={{
          title: 'How we build these tick gear guides',
          body: <>
            <p>Every tick gear guide applies the same test: is the product genuinely available to Canadian buyers, is the pricing we quote real, and does the evidence support the claims on the label? We treat ticks for a living across the GTA, so we know which products hold up in the field and which are marketing. Tick control is also a different problem from mosquito control &mdash; mosquitoes fly to you, but ticks quest at the shaded, humid edges of your property and wait, so the goal is to hit the lawn-to-woods edges and fence lines, not fog the open air over your patio. When DIY is the right call we say so plainly &mdash; and when a professional treatment would save you money and effort, we say that too.</p>
            <p className="mt-3">This cluster is one branch of our wider <Link href="/pest-product-guides" className="text-emerald-700 font-semibold hover:text-emerald-800">Canadian pest product guides</Link> library, where our publishing team researches products for the household pests we don&rsquo;t treat &mdash; bed bugs, mice, rats, and more. Ticks are the one category on that hub where we also do the hands-on work, which is why these guides go deeper than a typical review site.</p>
          </>,
        }}
        sections={SECTIONS}
        bottomLine={{
          title: 'DIY or call a pro? The honest bottom line',
          body: <>
            <p>If your property is small, mostly open and sunny, and set back from woods or conservation land, a disciplined DIY routine can carry you through the season &mdash; permethrin on your clothing, a repellent barrier at the lawn-to-woods edge, <Link href="/blog/tick-tubes-canada">tick tubes</Link> in spring and mid-summer, and a tick check every time you come inside.</p>
            <p className="mt-4">If your yard backs onto a ravine, a wooded lot, a park, or tall grass &mdash; or you have already been finding ticks &mdash; the math shifts. A licensed technician applies a Health Canada-approved barrier spray to the one-to-three-metre edge zones where blacklegged ticks live, with a residual that holds for roughly 30 days and kills ticks at every life stage. Most homeowners with real tick pressure end up doing both: professional treatment for the property, DIY habits for the people.</p>
            <p className="mt-4">BuzzSkito provides professional <Link href="/tick-control">tick control</Link> and <Link href="/mosquito-control">mosquito control</Link> across 19 GTA cities. The tick program runs $597 per season standalone, or $497 when bundled with any mosquito plan &mdash; five treatments, Health Canada-approved, backed by our Bite-Free Guarantee.</p>
          </>,
        }}
        faqs={FAQS}
        cta={{ heading: 'Tick Season Doesn’t Wait — Neither Should You', subtext: 'Get a free quote for licensed tick barrier spray across the GTA. Tick program from $597/season, or $497 bundled with any mosquito plan. Five treatments, 30-day residual, Bite-Free Guarantee.' }}
      />
    </>
  )
}
