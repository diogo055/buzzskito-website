import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, faqSchema, blogPostingSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Tick Prevention Yard Ontario | Kids Safe | BuzzSkito',
  description:
    'How to make your Ontario backyard safe from ticks. Kid-safe yard treatment strategies, prevention tips. From $99.',
  canonical: '/blog/tick-prevention-yard-ontario-safe-for-kids',
})

const POST = {
  title: 'Tick Prevention in Your Yard: Ontario Safe-for-Kids Guide (2026)',
  slug: 'tick-prevention-yard-ontario-safe-for-kids',
  date: '2026-04-07',
  description: 'How to make your Ontario backyard safe from ticks — yard modifications, DIY measures, and professional barrier spray that is safe for children and pets.',
}

const FAQS = [
  {
    question: 'Is professional tick spray safe for children in Ontario?',
    answer: "Yes. Health Canada–approved tick barrier spray formulas are safe for children after the product has dried — typically 30 minutes after application. Health Canada's registration under the Pest Control Products Act requires safety testing for children and sensitive populations before any pesticide can be sold in Canada. Once the product is dry, your children can use the yard as normal. Keep kids off the treated area during application and for the 30-minute drying window.",
  },
  {
    question: 'Is tick spray safe for dogs and cats?',
    answer: "Yes, with the same 30-minute drying caveat that applies to children. Health Canada–approved water-based formulas used by licensed Ontario technicians do not pose a residual risk to pets once dry. Cats should not walk through wet product and should stay inside during application. Dogs can return to the yard after 30 minutes. If you have fish ponds or birdbaths, alert your technician so they can maintain the appropriate buffer zone.",
  },
  {
    question: 'What parts of a backyard are highest risk for ticks in Ontario?',
    answer: "Ticks concentrate at the transition zone between maintained lawn and any natural vegetation — the first 1–3 metres where grass meets garden beds, mulched borders, hedges, leaf litter, woodpiles, or the base of fences. Ticks do not thrive in short, dry, sunny grass — they need moisture and humidity. The edges of your property, not the centre of the lawn, are where your children are most likely to encounter a tick.",
  },
  {
    question: 'Can I reduce tick risk without spraying anything?',
    answer: "Yes, but physical yard modifications only go so far. Effective low-chemical measures include: mowing grass short and regularly, removing leaf litter from property edges, placing a 1-metre dry wood-chip or gravel barrier between your lawn and any wooded or naturalized border, moving woodpiles away from play areas, installing deer fencing to reduce deer-carried tick introduction, and trimming low-hanging vegetation where ticks quest from. These reduce risk but do not eliminate it — professional barrier spray remains the most effective single intervention for high-risk properties.",
  },
  {
    question: 'When is the most dangerous tick season for children in Ontario?',
    answer: "May through July is the highest-risk period — this is when blacklegged tick nymphs are active. Nymphs are the size of a poppy seed: tiny enough that even diligent parents will miss them on a skin check. They carry the same Lyme disease risk as adult ticks. The nymph stage is responsible for the majority of Lyme disease cases in Ontario each year. Adult ticks are also active in spring (March–May) and fall (October–November) whenever temperatures exceed 4°C.",
  },
  {
    question: 'How many tick treatments does a family yard need per season?',
    answer: "For a property with moderate risk (backing onto a ravine, creek, or naturalized area), two treatments per season is the standard recommendation: one in late May targeting nymphs, and one in August or September before fall adult tick emergence. High-exposure properties adjacent to conservation lands, woodlands, or confirmed deer movement corridors may benefit from three treatments for continuous protection through the season.",
  },
  {
    question: 'What is the best tick prevention strategy for a family with young children?',
    answer: "A layered approach gives the best protection: (1) professional barrier spray applied to your yard before peak nymph season (late May), (2) physical barriers like a mulch or gravel strip at your property edge, (3) regular lawn mowing, (4) tick checks after outdoor play — especially the hairline, behind knees, and in armpits. Teaching children to stay out of tall grass and leaf litter areas also helps. No single measure is 100% effective; combining yard treatment with personal checks is the safest approach.",
  },
]

export default function TickPreventionYardKidsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Tick Prevention in Your Yard', url: '/blog/tick-prevention-yard-ontario-safe-for-kids' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: POST.title, slug: POST.slug, datePublished: POST.date, description: POST.description })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${POST.slug}`)) }} />

      <section className="bg-gradient-to-br from-amber-950 to-amber-800 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-amber-300 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Tick Prevention</span>
          </nav>
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-amber-700 text-amber-100 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Tick Control</span>
            <span className="text-amber-300 text-sm">{POST.date}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5 leading-tight">
            Tick Prevention in Your Yard:<br />
            <span className="text-amber-300">Ontario Safe-for-Kids Guide (2026)</span>
          </h1>
          <p className="text-xl text-amber-100 max-w-2xl leading-relaxed">
            How to make your Ontario backyard safe from ticks — yard modifications, DIY measures, and professional barrier spray that protects children and pets without keeping them indoors all summer.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">

          <h2>Why Ontario Backyards Are the #1 Tick Exposure Site for Children</h2>
          <p>Most Ontario families assume the biggest tick risk is on hiking trails. The data says otherwise. Research from Ontario public health agencies consistently finds that <strong>the majority of Lyme disease exposures happen in or immediately adjacent to residential properties</strong> — not on remote trails. For children especially, the backyard is where they spend the most unstructured outdoor time.</p>
          <p>This matters because ticks don't roam across open lawn. They <em>quest</em> — clinging to low grass blades and leaf tips with their front legs extended, waiting for a warm body to brush past. The edge of your property — where maintained lawn meets the garden border, the fence line, the hedgerow, the neighbour's naturalized strip — is where children are most likely to make that contact.</p>

          <h2>Understanding Tick Risk by Life Stage</h2>
          <p>Ontario has two main tick seasons, corresponding to two active life stages of the blacklegged tick:</p>

          <div className="not-prose overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-amber-700 text-white">
                  <th className="text-left px-4 py-3 font-bold">Life Stage</th>
                  <th className="text-left px-4 py-3 font-bold">Active Period (Ontario)</th>
                  <th className="text-left px-4 py-3 font-bold">Size</th>
                  <th className="text-left px-4 py-3 font-bold">Lyme Risk</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-amber-50 border-b border-amber-100">
                  <td className="px-4 py-3 font-semibold text-amber-900">Nymph</td>
                  <td className="px-4 py-3 text-gray-700">May – July (peak)</td>
                  <td className="px-4 py-3 text-gray-700">Poppy seed (1–2mm)</td>
                  <td className="px-4 py-3 font-bold text-red-700">Highest (hardest to spot)</td>
                </tr>
                <tr className="bg-white border-b border-amber-100">
                  <td className="px-4 py-3 font-semibold text-amber-900">Adult</td>
                  <td className="px-4 py-3 text-gray-700">Mar–May + Oct–Nov</td>
                  <td className="px-4 py-3 text-gray-700">Sesame seed (3–5mm)</td>
                  <td className="px-4 py-3 font-semibold text-orange-700">High (but visible)</td>
                </tr>
                <tr className="bg-amber-50">
                  <td className="px-4 py-3 font-semibold text-amber-900">Larva</td>
                  <td className="px-4 py-3 text-gray-700">Late summer</td>
                  <td className="px-4 py-3 text-gray-700">Pinhead (&lt;1mm)</td>
                  <td className="px-4 py-3 text-gray-700">Low (rarely infected)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>The nymph stage is the most dangerous for children for three compounding reasons: it is active during prime outdoor play season (May–July), it is small enough to be missed even during careful skin checks, and it carries the same Lyme disease infection rate as adult ticks.</p>

          <h2>Tick Hotspots on Your Property: Where Children Are Most Exposed</h2>
          <p>Professional tick treatment works best when it targets the specific zones where ticks aggregate. If you have children, keep them away from these areas without treatment:</p>
          <ul>
            <li><strong>The 1–3 metre lawn edge</strong> — the transition between your maintained grass and any garden bed, hedge, fence line, or natural vegetation is the primary tick questing zone</li>
            <li><strong>Leaf litter accumulation</strong> — fallen leaves retain moisture and create the humid microclimate ticks need to survive; unmulched leaves against fences or house foundations are a hotspot</li>
            <li><strong>Woodpiles</strong> — stacked wood against the house or fence creates tick-friendly habitat and attracts mice (the primary Lyme reservoir host)</li>
            <li><strong>Under decks and porches</strong> — shaded, humid, and rarely disturbed — ideal tick habitat</li>
            <li><strong>Low ornamental plantings</strong> — dense ground-level shrubs like juniper, euonymus, or boxwood in mulched beds harbour ticks throughout the season</li>
            <li><strong>Play structures near edges</strong> — if a swing set or play structure is positioned near a garden border or fence, it places children consistently at the highest-exposure zone</li>
          </ul>

          <h2>Physical Yard Modifications That Reduce Tick Risk</h2>
          <p>These low-chemical measures are complementary to professional treatment and reduce tick survival on your property:</p>
          <ul>
            <li><strong>Mow short and often</strong> — ticks avoid dry, sunny, short grass; keeping grass below 7–8cm creates an inhospitable microclimate</li>
            <li><strong>Install a dry barrier strip</strong> — a 1-metre band of wood chips, pea gravel, or rubber mulch between lawn and any wooded/naturalized border creates a desiccating zone that ticks are reluctant to cross</li>
            <li><strong>Remove leaf litter</strong> — bag and remove fallen leaves from property edges; don't leave them piled against fences through winter</li>
            <li><strong>Move woodpiles</strong> — relocate any stacked wood away from the house, play structures, and lawn edges; ideally elevate it off the ground</li>
            <li><strong>Trim low branches and shrubs</strong> — reduce shaded, humid zones along fences and borders; increase sunlight penetration to ground level</li>
            <li><strong>Relocate play structures</strong> — if possible, move swings and play areas to the sunniest, most central part of the yard, away from borders</li>
          </ul>

          <h2>Is Professional Barrier Spray Safe for Children and Pets?</h2>
          <p>This is the question BuzzSkito gets most often from parents, and it deserves a direct answer: <strong>yes, Health Canada–approved tick barrier spray is safe for children and pets after a 30-minute drying period.</strong></p>
          <p>Here's the regulatory context. In Canada, all pesticides must be registered with Health Canada under the <em>Pest Control Products Act</em> before they can be sold or applied commercially. Registration requires rigorous safety testing including exposure scenarios for children and sensitive populations. The active ingredients in professional tick barrier spray — pyrethrins or synthetic pyrethroids like bifenthrin — are the same chemical class used in many common household products, including head lice treatments for children.</p>
          <p>The 30-minute re-entry interval is a conservative safety buffer for drying time — not a hazard window. Once dry, the formula is bound to the leaf surfaces it was applied to. It does not float, migrate, or pose inhalation risk to people in the yard.</p>
          <p>Practical guidance for families:</p>
          <ul>
            <li>Keep children and pets inside or away from treated areas during application</li>
            <li>Wait 30 minutes after the technician leaves before resuming outdoor activity</li>
            <li>If it rains heavily within an hour, contact us — we have a rain-back guarantee and will re-treat at no cost</li>
            <li>No special cleanup of outdoor furniture or toys is needed</li>
          </ul>

          <h2>Recommended Tick Treatment Schedule for Ontario Families</h2>
          <p>The standard recommendation for a residential property in Ontario with children is two treatments per season:</p>
          <ol>
            <li><strong>Late May or early June</strong> — targets emerging nymphs before peak activity begins; this is the most important treatment of the year for families with young children</li>
            <li><strong>August or September</strong> — targets fall adult tick emergence, which extends risk into October on warm years</li>
          </ol>
          <p>Properties with higher exposure — backing onto conservation land, ravines, creek valleys, or with confirmed deer movement — benefit from a third treatment in late June or early July to maintain continuous coverage through peak nymph season. High-risk GTA zones include the Oak Ridges Moraine corridor (Richmond Hill, Vaughan, King City, Caledon), the Humber River valley, Credit River watershed, and any property adjacent to naturalized green space.</p>

          <h2>Post-Outdoor Tick Checks for Children</h2>
          <p>Even with a professionally treated yard, teaching children and adults to do tick checks after outdoor time is part of a complete prevention strategy:</p>
          <ul>
            <li>Check within 2–3 hours of coming inside (ticks take several hours to attach fully)</li>
            <li>Focus on hairline, behind ears, back of neck, underarms, belly button, groin, and behind knees</li>
            <li>Use a hand mirror or ask a partner to check the back, scalp, and between toes</li>
            <li>Check children and pets before they come inside</li>
          </ul>
          <p>If you find an attached tick, use fine-tipped tweezers to grasp as close to the skin as possible and pull upward with steady, even pressure. Don't twist, squeeze the body, or use heat. After removal, clean the site with rubbing alcohol. Monitor for a bullseye rash (erythema migrans) and fever over the next 30 days — and contact a physician if symptoms develop.</p>

          <h2>Ticks in the GTA: Cities and Communities Most at Risk</h2>
          <p>If you live in any of the following areas, your children face elevated tick exposure and professional yard treatment is strongly recommended before peak nymph season:</p>
          <ul>
            <li><Link href="/vaughan-tick-spray" className="text-brand-700 hover:underline">Vaughan</Link> — Boyd Conservation Area, Kortright Centre, Humber River corridor</li>
            <li><Link href="/richmond-hill-tick-spray" className="text-brand-700 hover:underline">Richmond Hill</Link> — Oak Ridges Moraine, Lake Wilcox, Jefferson Forest</li>
            <li><Link href="/king-city-tick-spray" className="text-brand-700 hover:underline">King City / King Township</Link> — forest edges throughout, highest confirmed activity in York Region</li>
            <li><Link href="/caledon-tick-spray" className="text-brand-700 hover:underline">Caledon</Link> — Oak Ridges Moraine, Credit River upper reaches, rural property edges</li>
            <li><Link href="/oakville-tick-spray" className="text-brand-700 hover:underline">Oakville</Link> — Bronte Creek Provincial Park, 16 Mile Creek corridor</li>
            <li><Link href="/hamilton-tick-spray" className="text-brand-700 hover:underline">Hamilton</Link> — Niagara Escarpment, Cootes Paradise, Spencer Creek</li>
            <li><Link href="/markham-tick-spray" className="text-brand-700 hover:underline">Markham</Link> — Rouge National Urban Park boundary, Don River headwaters</li>
            <li><Link href="/brampton-tick-spray" className="text-brand-700 hover:underline">Brampton</Link> — Heart Lake Conservation Area, Etobicoke Creek valley</li>
          </ul>

          <h2>Related Tick Control Guides</h2>
          <ul>
            <li><Link href="/blog/ultimate-tick-control-guide-ontario" className="text-brand-700 hover:underline">The Ultimate Tick Control Guide for Ontario Homeowners</Link></li>
            <li><Link href="/blog/lyme-disease-tick-prevention-ontario" className="text-brand-700 hover:underline">Lyme Disease Prevention in Ontario: A Complete Homeowner Guide</Link></li>
            <li><Link href="/blog/tick-season-ontario-when-are-ticks-active" className="text-brand-700 hover:underline">When Are Ticks Active in Ontario? Seasonal Activity Calendar</Link></li>
            <li><Link href="/blog/tick-bite-symptoms-what-to-do-ontario" className="text-brand-700 hover:underline">Tick Bite Symptoms &amp; What to Do in Ontario</Link></li>
            <li><Link href="/blog/tick-bite-vs-mosquito-bite" className="text-brand-700 hover:underline">Tick Bite vs Mosquito Bite: How to Tell the Difference</Link></li>
          </ul>
        </div>
      </section>

      <section className="py-10 px-4 bg-amber-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">FAQ – Tick Prevention for Ontario Families</h2>
          <div className="space-y-3">
            {FAQS.map(({ question, answer }) => (
              <details key={question} className="bg-white rounded-xl border border-amber-100 group">
                <summary className="cursor-pointer px-5 py-4 font-semibold text-brand-900 list-none flex justify-between items-center">
                  <span>{question}</span>
                  <svg className="w-5 h-5 shrink-0 group-open:rotate-180 transition-transform text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-5 pb-4 text-gray-600 text-sm">{answer}</p>
              </details>
            ))}
          </div>
          <p className="text-center mt-6 text-sm text-gray-500">
            More questions? Call <a href={BUSINESS.phoneHref} className="text-amber-700 underline">{BUSINESS.phone}</a> or see our <Link href="/frequently-asked-question" className="text-amber-700 underline">full FAQ</Link>.
          </p>
        </div>
      </section>

      <CTASection heading="Protect Your Family from Ticks This Season" subtext="Health Canada–approved barrier spray safe for children and pets after 30 minutes. No contracts." variant="dark" />
    </>
  )
}
