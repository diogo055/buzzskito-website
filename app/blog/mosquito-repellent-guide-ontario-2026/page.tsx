import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'

const SLUG = 'mosquito-repellent-guide-ontario-2026'
const DATE = '2026-04-26'
const TITLE = 'Mosquito Repellent Guide — Ontario 2026 (What Actually Works)'

const FAQS = [
  {
    question: 'What is the most effective mosquito repellent in 2026?',
    answer: 'For personal skin protection, DEET (20–30%) and picaridin (20%) remain the gold standard, providing 6–10 hours of effective coverage. Oil of Lemon Eucalyptus (OLE / PMD) is the most effective natural option with 4–6 hour duration. For yard-wide protection, professional barrier spray applied to vegetation is dramatically more effective than personal repellents because it controls the population in your space rather than just on your skin.',
  },
  {
    question: 'Is DEET safe?',
    answer: 'Yes. DEET has been used for over 60 years and is the most extensively studied insect repellent. Health Canada approves DEET for use on adults and children 6 months and older, with concentration limits by age (10% max for children 6 months–12 years, up to 30% for adults). Despite long-standing internet myths, peer-reviewed research consistently shows DEET is safe when used as directed.',
  },
  {
    question: 'Picaridin vs DEET — which is better?',
    answer: 'Picaridin offers similar duration to DEET (6–10 hours at 20% concentration) without DEET\'s plastic/fabric-melting side effects. It\'s odourless and non-greasy. Many people prefer picaridin for everyday use; DEET still wins in extreme conditions (tropical jungles, dense bug pressure) at 30%+ concentration. For Ontario backyard use, 20% picaridin is excellent.',
  },
  {
    question: 'What about ultrasonic mosquito repellent devices?',
    answer: 'Multiple peer-reviewed studies have shown ultrasonic mosquito repellent devices have no measurable effect. The frequencies they produce do not deter mosquitoes. Save your money — these are marketing, not science.',
  },
  {
    question: 'Do mosquito-repellent bracelets work?',
    answer: 'No. Mosquito-repellent bracelets protect a few centimetres of skin around the wrist. Mosquitoes will simply bite your ankles, neck, or anywhere else exposed. Studies show they fail in real-world conditions despite marketing claims.',
  },
  {
    question: 'What\'s the cheapest effective mosquito repellent?',
    answer: 'For personal use, generic 20% picaridin or 20–30% DEET in spray form is around $8–$15 for a 200ml bottle that lasts a season. For yard-level control, BTI Mosquito Dunks ($15 for a season supply) treat standing water at the source. For full yard protection without personal repellent, professional barrier spray costs $99 per visit and controls the population for up to 30 days.',
  },
  {
    question: 'Are there mosquito repellents safe for babies?',
    answer: 'Health Canada does not recommend any chemical insect repellent for babies under 6 months. For infants, use physical barriers: mosquito netting over strollers, long sleeves and pants, and avoid peak biting hours (dawn and dusk). For children 6 months to 2 years, only one application per day of 10% DEET or equivalent is permitted. Older children can use higher concentrations more frequently.',
  },
  {
    question: 'When should I use repellent vs barrier spray?',
    answer: 'Personal repellent is for active outdoor activities (hiking, camping, evening walks). Barrier spray is for your home yard where you want continuous protection without re-applying repellent every time you step outside. The two strategies are complementary — most Ontario homeowners use barrier spray for their yard and personal repellent for off-property activities.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Repellent Guide Ontario · What Works in 2026',
  description: 'Evidence-based 2026 mosquito repellent guide for Ontario. DEET, picaridin, OLE, natural options, scams to avoid. What works and what does not.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
})

export default function MosquitoRepellentGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Comprehensive 2026 guide to mosquito repellents for Ontario homeowners.', slug: SLUG, datePublished: DATE })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Mosquito Repellent Guide', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Mosquito Repellent Guide</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">An evidence-based 2026 buyer&rsquo;s guide. What actually repels mosquitoes, what&rsquo;s marketing, and which option fits your specific situation.</p>
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <p className="lead text-xl text-gray-700 leading-relaxed mb-6">There are dozens of mosquito repellents on shelves at Canadian Tire, Home Depot, and Shoppers Drug Mart. Most don&rsquo;t work as advertised. Here&rsquo;s what the peer-reviewed research and Health Canada approvals tell us about what actually keeps mosquitoes off you in Ontario in 2026.</p>

          <h2>The Tier System — Ranked by Evidence</h2>

          <h3>🟢 Tier 1: Gold Standard (Health Canada-approved, peer-reviewed)</h3>
          <ul>
            <li><strong>DEET (20–30%)</strong> — 6–10 hours of protection. The most-studied repellent in history. Brands: Off Deep Woods, Watkins.</li>
            <li><strong>Picaridin (20%)</strong> — 6–10 hours, no plastic/fabric damage, odourless. Brands: Sawyer, Natrapel.</li>
            <li><strong>IR3535 (15–20%)</strong> — 4–8 hours. Less common in Canadian retail but evidence-backed.</li>
          </ul>

          <h3>🟡 Tier 2: Effective natural options</h3>
          <ul>
            <li><strong>Oil of Lemon Eucalyptus (OLE / PMD, 30%)</strong> — 4–6 hours. The only natural option with DEET-comparable evidence. Brands: Off Botanicals, Repel Lemon Eucalyptus.</li>
            <li><strong>2-Undecanone (BioUD)</strong> — Comparable to OLE, less common in Canadian retail.</li>
          </ul>

          <h3>🟠 Tier 3: Real but short-duration</h3>
          <ul>
            <li><strong>Citronella oil sprays</strong> — 30–60 minutes.</li>
            <li><strong>Soybean oil products</strong> (Bite Blocker) — ~1.5 hours.</li>
            <li><strong>Geraniol</strong> — 1–2 hours.</li>
          </ul>

          <h3>🔴 Tier 4: Marketing more than mosquitoes (avoid)</h3>
          <ul>
            <li><strong>Ultrasonic devices</strong> — Studies confirm: zero effect.</li>
            <li><strong>Bracelets and wristbands</strong> — Protects only the wrist.</li>
            <li><strong>Generic essential oil blends</strong> — 15–60 minutes weak repellency.</li>
            <li><strong>Bug zappers</strong> — Kill mostly beneficial insects, not biting mosquitoes.</li>
            <li><strong>Mosquito-repelling plant beds</strong> — Tiny effect; oils only release when leaves are crushed.</li>
          </ul>

          <h2>What to Buy for What Situation</h2>
          <ul>
            <li><strong>Backyard BBQ (2–3 hours):</strong> 20% picaridin spray.</li>
            <li><strong>Long hike or camping:</strong> 30% DEET or 20% picaridin.</li>
            <li><strong>Kids 2–12 years:</strong> 10% DEET or 20% picaridin (one application per day max for under 2).</li>
            <li><strong>Babies under 6 months:</strong> No chemical repellent. Use mosquito netting + long sleeves.</li>
            <li><strong>Pregnant women:</strong> Picaridin or DEET both Health Canada-approved during pregnancy.</li>
            <li><strong>Pets in yard:</strong> Don&rsquo;t apply human repellents to pets. Use vet-prescribed flea/tick preventatives + professional yard barrier spray.</li>
          </ul>

          <h2>The Strategy Most Ontario Homeowners Miss</h2>
          <p>Personal repellent is for outdoor activities <em>away</em> from your property. For your own backyard, a much better strategy is <strong>professional barrier spray</strong> — applied to vegetation perimeters and shrub interiors where mosquitoes rest. This controls the population in your yard for 21–30 days at a time, so you don&rsquo;t need to apply repellent every time you step outside.</p>
          <p>Most homeowners think the choice is between DIY repellent or nothing. The third option — and usually the best one — is professional yard treatment so personal repellent becomes unnecessary at home.</p>

          <h2>Cost Comparison (per Ontario season)</h2>
          <ul>
            <li><strong>DIY personal repellent only:</strong> $30–$60/season for sprays + reapplications</li>
            <li><strong>BTI Mosquito Dunks (water source treatment):</strong> $15/season</li>
            <li><strong>BuzzSkito Basic seasonal (5 sprays):</strong> $549</li>
            <li><strong>BuzzSkito Standard seasonal (10 sprays):</strong> $994</li>
          </ul>
          <p>For most Ontario yards, the Standard plan delivers a continuously bug-free yard from May through September. The cost works out to ~$100/month for full-yard control — comparable to monthly grocery spend on patio dinners that are now actually enjoyable.</p>

          <h2>What to Skip</h2>
          <ul>
            <li>Ultrasonic plug-ins or yard devices (zero evidence)</li>
            <li>Mosquito-repelling bracelets/wristbands</li>
            <li>Citronella tiki torches (1-metre downwind effect only)</li>
            <li>Bug zappers (kill the wrong insects)</li>
            <li>&ldquo;DIY essential oil&rdquo; sprays from Pinterest (most don&rsquo;t work)</li>
          </ul>

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/natural-mosquito-repellent-ontario">Natural Mosquito Repellent — Honest Guide</Link></li>
            <li><Link href="/blog/mosquito-repellent-plants-ontario">10 Mosquito-Repelling Plants for Ontario</Link></li>
            <li><Link href="/blog/is-mosquito-spray-safe-kids-pets">Is Mosquito Spray Safe for Kids and Pets?</Link></li>
            <li><Link href="/mosquito-control">Professional Yard Barrier Spray</Link></li>
          </ul>
        </div>
      </article>

      <CTASection heading="Skip Personal Repellent in Your Own Yard" subtext="Professional barrier spray controls the population, not just what's on your skin. From $99." variant="dark" />
    </>
  )
}
