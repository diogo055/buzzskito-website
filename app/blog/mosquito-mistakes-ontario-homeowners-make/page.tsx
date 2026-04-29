import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import AuthorByline from '@/components/AuthorByline'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { MOSQUITO_BLOGS, TICK_BLOGS } from '@/lib/constants'

const SLUG = 'mosquito-mistakes-ontario-homeowners-make'
const DATE = '2026-04-29'
const TITLE = '12 Mosquito Mistakes Ontario Homeowners Make'

const FAQS = [
  { question: `Waiting Until July to Start Treatment`, answer: `Most mosquito control failures start with timing, not product choice. By July, mosquito populations are 5–10× larger than they were in May. Starting treatment in May (when populations are tiny) keeps them tiny all season. Starting in July means playing catch-up against an established population that takes weeks to bring under control.` },
  { question: `Trusting Citronella Candles for Full-Yard Protection`, answer: `Citronella candles work in a 2–3 foot bubble around the candle — not for the yard. Multiple research studies confirm this. They're ambiance, not protection. If you want yard-wide mosquito control, you need barrier spray + source elimination, not candles.` },
  { question: `Ignoring Rain Barrels and Birdbaths as Breeding Sites`, answer: `A single uncovered rain barrel or birdbath can produce thousands of mosquitoes per week. Many Ontario homeowners think they've eliminated standing water because the lawn drains well — without realizing their rain barrel and birdbath are pumping out mosquitoes daily. Cover the barrel, change birdbath water weekly, or use BTI dunks.` },
  { question: `Spraying Grass Instead of Leaf Undersides`, answer: `Mosquitoes don't rest on grass during the day. They rest on shaded undersides of leaves, in shrub interiors, on fence-line vegetation, and on the underside of deck joists. DIY sprays applied to lawns hit nothing. Professional barrier spray applied with backpack sprayers reaches actual resting surfaces — that's why it works and DIY doesn't.` },
  { question: `Stopping Treatments After One Bad Weekend`, answer: `A single rainy weekend doesn't mean treatments aren't working — it means mosquitoes that were already present took advantage of the humidity spike. Continued treatment through that week eliminates the population. Stopping treatments hands them a week to multiply.` },
  { question: `Using Consumer Foggers Expecting 30-Day Protection`, answer: `Hardware-store foggers (Black Flag, Cutter, etc.) provide 1–6 hours of relief — they kill mosquitoes flying through the fog at the moment of application. Professional barrier spray bonds to leaf surfaces and provides up to 30 days of residual protection. They're different products. Comparing them by price is comparing a band-aid to a vaccine.` },
]

export const metadata: Metadata = buildMetadata({
  title: `12 Mosquito Mistakes Ontario Homeowners Make`,
  description: `The 12 most common mosquito-control mistakes Ontario homeowners make — citronella candles, late-season treatment, ignoring rain barrels, and more. Avoid these for a mosquito-free yard.`,
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
})

export default function MosquitoMistakesOntarioHomeownersMakePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: `The 12 most common mosquito-control mistakes Ontario homeowners make — citronella candles, late-season treatment, ignoring rain barrels, and more. Avoid these for a mosquito-free yard.`, slug: SLUG, datePublished: DATE })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: TITLE, url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-amber-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1 flex-wrap">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">12 Mosquito Mistakes Ontario Homeowners Make Every Summer</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">12 Mosquito Mistakes Ontario Homeowners Make Every Summer</h1>
          <p className="text-brand-300 text-sm">Practical, evidence-backed Ontario homeowner guide.</p>
        </div>
      </section>

      {/* QUICK ANSWER */}
      <section className="bg-amber-50 border-y-4 border-amber-300 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-amber-700 uppercase tracking-wider mb-2">Quick Answer</p>
          <h2 className="text-xl font-extrabold text-brand-900 mb-3">12 Mosquito Mistakes Ontario Homeowners Make Every Summer</h2>
          <p className="text-base text-gray-800 leading-relaxed">The most common mosquito-control mistakes Ontario homeowners make: (1) waiting until July to start treatment instead of mid-May, (2) trusting citronella candles for full-yard protection, (3) ignoring rain barrels and birdbaths as breeding sites, (4) applying barrier spray to grass instead of leaf undersides where mosquitoes rest, (5) stopping treatments after one bad weekend, (6) using consumer foggers expecting 30-day protection, (7) trusting "mosquito plants" alone, (8) overlooking pool covers and tarps, (9) hiring generalist pest control instead of specialists, (10) not bundling tick control when properties are near ravines, (11) treating only the deck while leaving fence-line vegetation untreated, and (12) cancelling treatments after a cold week thinking the season is over.</p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12 prose-brand">
        <AuthorByline datePublished={DATE} />

        <h3>1. Waiting Until July to Start Treatment</h3>
        <p>Most mosquito control failures start with timing, not product choice. By July, mosquito populations are 5–10× larger than they were in May. Starting treatment in May (when populations are tiny) keeps them tiny all season. Starting in July means playing catch-up against an established population that takes weeks to bring under control.</p>

        <h3>2. Trusting Citronella Candles for Full-Yard Protection</h3>
        <p>Citronella candles work in a 2–3 foot bubble around the candle — not for the yard. Multiple research studies confirm this. They&apos;re ambiance, not protection. If you want yard-wide mosquito control, you need barrier spray + source elimination, not candles.</p>

        <h3>3. Ignoring Rain Barrels and Birdbaths as Breeding Sites</h3>
        <p>A single uncovered rain barrel or birdbath can produce thousands of mosquitoes per week. Many Ontario homeowners think they&apos;ve eliminated standing water because the lawn drains well — without realizing their rain barrel and birdbath are pumping out mosquitoes daily. Cover the barrel, change birdbath water weekly, or use BTI dunks.</p>

        <h3>4. Spraying Grass Instead of Leaf Undersides</h3>
        <p>Mosquitoes don&apos;t rest on grass during the day. They rest on shaded undersides of leaves, in shrub interiors, on fence-line vegetation, and on the underside of deck joists. DIY sprays applied to lawns hit nothing. Professional barrier spray applied with backpack sprayers reaches actual resting surfaces — that&apos;s why it works and DIY doesn&apos;t.</p>

        <h3>5. Stopping Treatments After One Bad Weekend</h3>
        <p>A single rainy weekend doesn&apos;t mean treatments aren&apos;t working — it means mosquitoes that were already present took advantage of the humidity spike. Continued treatment through that week eliminates the population. Stopping treatments hands them a week to multiply.</p>

        <h3>6. Using Consumer Foggers Expecting 30-Day Protection</h3>
        <p>Hardware-store foggers (Black Flag, Cutter, etc.) provide 1–6 hours of relief — they kill mosquitoes flying through the fog at the moment of application. Professional barrier spray bonds to leaf surfaces and provides up to 30 days of residual protection. They&apos;re different products. Comparing them by price is comparing a band-aid to a vaccine.</p>

        <h3>7. Trusting "Mosquito Plants" as a Standalone Solution</h3>
        <p>Lavender, citronella plants, and basil have mild mosquito-repellent properties. They reduce ambient mosquito pressure within 1–3 metres of the plant — which is genuinely useful near a patio or doorway. They&apos;re not a yard-wide solution. Plants + barrier spray = good. Plants alone = not enough.</p>

        <h3>8. Overlooking Pool Covers and Tarps</h3>
        <p>Active chlorinated pools can&apos;t breed mosquitoes — chlorine kills larvae. But pool covers that collect rainwater can produce mosquitoes for weeks. Tarps with creases, kiddie pool covers, hot tub covers — all major breeding sites that get overlooked. Drain weekly or treat with BTI dunks.</p>

        <h3>9. Hiring a Generalist Pest Control Company</h3>
        <p>General pest control companies cover 10–20 pests. Their technicians rotate between ant jobs, mouse jobs, mosquito jobs, etc. Specialist mosquito-and-tick companies (like BuzzSkito) do nothing else — meaning their technicians know exactly where mosquitoes rest in your specific Ontario neighborhood and exactly where ticks concentrate in your specific lawn-to-woods transition. Specialization compounds.</p>

        <h3>10. Not Bundling Tick Control When Near Ravines</h3>
        <p>Ontario homeowners whose properties back onto ravines, conservation areas, or wooded edges have confirmed blacklegged tick exposure. Treating mosquitoes alone leaves the bigger health risk (Lyme disease) unaddressed. Bundling tick control adds modest cost but addresses both pests simultaneously.</p>

        <h3>11. Treating Only the Deck While Leaving Fence-Line Vegetation Untreated</h3>
        <p>Mosquitoes spend the day in fence-line vegetation, shrub interiors, and shaded perimeter areas — then move to the deck at dusk. Treating only the deck means the mosquitoes are still arriving from the perimeter. Full-yard barrier spray treats the resting habitat AND the activity zone.</p>

        <h3>12. Cancelling Treatments After a Cold Week Thinking the Season Is Over</h3>
        <p>Ontario mosquito season runs through mid-September in normal years. A cold snap in mid-August doesn&apos;t end the season — it pauses it. Mosquitoes return immediately when temperatures rebound. Final treatment of the season should be early September minimum, sometimes late September for ravine-adjacent properties.</p>


        <h2>Bottom Line</h2>
        <p>Most Ontario mosquito-control failures aren&apos;t product failures — they&apos;re strategy failures. A homeowner doing the right things in the wrong order, on the wrong surfaces, at the wrong times, will spend money and still have mosquitoes. The pattern that works is consistent across every successful yard: start in May, eliminate breeding sources, apply professional barrier spray to actual resting surfaces, maintain through September, and don&apos;t cancel during temporary dips.</p>

        <h2>Related Guides</h2>
        <ul>
          <li><Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{MOSQUITO_BLOGS.pillar.title}</Link></li>
          <li><Link href={`/blog/${TICK_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{TICK_BLOGS.pillar.title}</Link></li>
          <li><Link href="/blog/hidden-mosquito-breeding-spots-backyard" className="text-brand-700 hover:underline">Hidden Mosquito Breeding Spots in Your GTA Backyard</Link></li>
          <li><Link href="/blog/lyme-disease-tick-prevention-ontario" className="text-brand-700 hover:underline">Lyme Disease Prevention in Ontario</Link></li>
          <li><Link href="/mosquito-control" className="text-brand-700 hover:underline">View Our Mosquito Control Services</Link></li>
          <li><Link href="/tick-control" className="text-brand-700 hover:underline">View Our Tick Control Services</Link></li>
        </ul>
      </article>

      <CTASection heading="Specialist Mosquito & Tick Control for Ontario" subtext="From $99 per treatment. BuzzSkito Bite-Free Guarantee. 129 five-star reviews." />
    </>
  )
}
