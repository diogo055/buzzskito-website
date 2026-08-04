import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import BlogPostCTA from '@/components/BlogPostCTA'
import BuyLink from '@/components/BuyLink'
import StickyBuyBar from '@/components/StickyBuyBar'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import FreshnessStamp from '@/components/FreshnessStamp'
import AuthorByline from '@/components/AuthorByline'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { MOSQUITO_BLOGS } from '@/lib/constants'
import { tagForSlug } from '@/lib/amazon-clusters'

const POST = MOSQUITO_BLOGS.supporting[1]
const UPDATED = '2026-07-12'

export const metadata: Metadata = buildMetadata({
  title: 'How Long Does Mosquito Spray Last? Pro vs DIY',
  description:
    'How long does mosquito spray last? A 5-treatment chart — barrier spray, foggers, DEET, citronella, dunks — with rain resistance and GTA re-treat timing.',
  canonical: `/blog/${POST.slug}`,
  type: 'article',
  publishedTime: POST.date,
  modifiedTime: '2026-07-12',
})

const FAQS = [
  {
    question: 'How long does mosquito spray last?',
    answer: 'Professional barrier spray lasts up to 30 days per application. Consumer yard foggers last 1–7 days depending on weather and vegetation density. Personal repellents like DEET last 4–8 hours on skin. The difference is the concentration of active ingredients and the adhesion chemistry in professional-grade products that bonds to leaf surfaces as it dries.',
  },
  {
    question: 'How long does backyard mosquito protection last after professional treatment?',
    answer: 'A professional barrier spray treatment applied to your yard\'s vegetation provides up to 30 days of residual protection. For GTA properties, we recommend re-application every 21–28 days to maintain a continuous barrier throughout the May-to-September active season. Properties near ravines or with heavy vegetation may benefit from more frequent visits.',
  },
  {
    question: 'Does spraying for mosquitoes work, or do they come right back?',
    answer: 'Professional barrier spray works — but it treats your property, not the regional source. Mosquitoes from nearby ravines, parks, or neighbouring properties will continue to fly toward your yard. The spray kills them when they land on treated vegetation to rest. This is why the treatment lasts weeks rather than permanently: it creates an ongoing kill zone rather than eliminating the source population. Re-application every 21–28 days maintains this effect all season.',
  },
  {
    question: 'Is it better to spray in the morning or evening?',
    answer: 'Morning application (after dew has dried, typically 9–11 AM) is generally optimal. This gives the product maximum time to dry and bond to leaf surfaces before any evening humidity or dew. Mosquitoes are most active at dusk and dawn, so a morning application ensures protection is fully cured before peak activity. We avoid midday applications in direct intense sun, which can accelerate breakdown before the product fully cures.',
  },
  {
    question: 'How long after mosquito spray can you go outside?',
    answer: 'Once the spray has dried — approximately 30 minutes after application under normal conditions — it is safe for people and pets to re-enter the treated area. During application and while the product is wet, we ask that people and pets stay indoors or away from the yard. There is no lingering residue or off-gassing once dry.',
  },
  {
    question: 'Does rain wash away mosquito spray?',
    answer: 'Heavy rain within the first 30–60 minutes after application — before the product has fully cured — can wash it off. Once dried and bonded to leaf surfaces, the barrier is highly rain-resistant and will persist through normal Ontario rainfall. At BuzzSkito, we monitor weather forecasts before scheduling treatments, and if significant rain falls within one hour of application, we return and re-treat at no charge.',
  },
  {
    question: 'How many mosquito treatments do I need per season in Ontario?',
    answer: 'For continuous protection through the GTA mosquito season (May through September), 4–5 treatments spaced 21–28 days apart is the standard schedule. Properties near ravines, rivers, or wetlands typically need 5 treatments. Properties in lower-pressure areas may be well-protected with 3–4 visits. A single one-time treatment before a specific event (wedding, party) provides up to 30 days of protection for that window.',
  },
  {
    question: 'How long does DIY or store-bought mosquito spray last compared to professional?',
    answer: 'Store-bought yard sprays and foggers typically deliver just 1–2 days of real protection before mosquitoes return, because consumer formulas are heavily diluted and lack the leaf-bonding adhesion chemistry of professional products. A professional barrier spray lasts 3–4 weeks — up to 30 days — per application. That gap is why a single professional visit replaces roughly a dozen DIY spray sessions over the same month.',
  },
  {
    question: 'How long after mosquito spray can dogs go outside?',
    answer: 'Dogs can go back outside once the barrier spray has fully dried — about 30 minutes after application under normal conditions. While the product is still wet, keep pets indoors or off the treated area. Once dry, the residue is bonded to the vegetation, and there is no off-gassing or re-entry restriction for dogs. If your dog tends to chew or graze on plants, waiting an extra hour is a safe precaution.',
  },
  {
    question: 'How long should you stay off the lawn after mosquito spray?',
    answer: 'Stay off the lawn until the spray has dried — roughly 30 minutes after application in normal conditions. Once dry, the treated area is safe to walk, play, and garden on with no lingering restriction. Barrier spray targets the shaded shrubs and vegetation where mosquitoes rest rather than the open lawn, but the same 30-minute drying rule applies to any treated surface. Damp or overcast weather can extend drying time slightly.',
  },
  {
    question: 'How long does mosquito fogging last?',
    answer: 'Mosquito fogging provides only short-term knockdown — typically a few hours up to about 1–3 days. Fogging (thermal or ULV) kills the adult mosquitoes flying at the moment of application but leaves little residual, so new mosquitoes move back in quickly. A residual barrier spray that bonds to leaf surfaces lasts far longer — up to 30 days per treatment — which is why we use barrier spray rather than fogging for lasting GTA protection.',
  },
  {
    question: 'How long does a mosquito barrier treatment last?',
    answer: 'A professional mosquito barrier treatment lasts up to 30 days (3–4 weeks) per application. The residual insecticide bonds to leaf and shrub surfaces as it dries, killing mosquitoes that land to rest for the full window. Heavy rain within the first hour, intense heat and UV, and dense untreated vegetation nearby can shorten it, so most GTA yards are re-treated every 21–28 days from May through September for continuous protection.',
  },
]

const AMZ_TAG = tagForSlug('how-long-does-mosquito-spray-last')

export default function MosquitoSprayLastPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: POST.title, description: POST.excerpt, slug: POST.slug, datePublished: POST.date, dateModified: '2026-07-12' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'How Long Does Mosquito Spray Last', url: `/blog/${POST.slug}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${POST.slug}`, '2026-07-12')) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Mosquito Spray Duration</span>
          </nav>
          <span className="bg-brand-800 text-brand-200 text-xs px-3 py-1 rounded-full mb-4 inline-block">Mosquito Control</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">{POST.title}</h1>
          <p className="text-brand-300 text-sm">Published {new Date(POST.date).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })} · By BuzzSkito</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
          <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
          <p className="text-gray-800 text-[15px] leading-relaxed font-medium">A professional mosquito barrier spray lasts 3&ndash;4 weeks (up to 30 days) per application, while DIY store-bought sprays and foggers last just 1&ndash;2 days. Rain within the first hour and stretches of intense heat and UV shorten it, so most GTA yards need re-treating every 3&ndash;4 weeks from May through September.</p>
          <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
            <li>Professional barrier spray lasts up to 30 days (3&ndash;4 weeks) per application.</li>
            <li>Consumer store-bought yard sprays and foggers deliver just 1&ndash;2 days of real protection.</li>
            <li>DEET personal repellent lasts 4&ndash;8 hours on skin; citronella candles only while burning.</li>
            <li>The treated yard is safe to re-enter about 30 minutes after application, once the spray has dried.</li>
            <li>Most GTA yards need 4&ndash;5 treatments per season, re-applied every 21&ndash;28 days from May through September.</li>
            <li>Heavy rain within the first 30&ndash;60 minutes can wash it off, but once cured the barrier is highly rain-resistant.</li>
          </ul>
          <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito, GTA mosquito &amp; tick control &middot; 150+ five-star Google reviews</p>
        </div>
        <BlogPostCTA />
      </div>

      <article className="max-w-3xl mx-auto px-4 py-12 prose-brand">
        <AuthorByline datePublished={POST.date} dateModified={UPDATED} />
        <p className="text-lg text-gray-600 not-prose border-l-4 border-brand-400 pl-5 py-2 mb-8">
          This guide breaks down exactly how long different mosquito treatments last, what shortens or extends protection, and how to build a schedule that keeps your GTA yard covered all season. Part of our <Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 underline">Ultimate Mosquito Control Guide</Link>.
        </p>

        <h2>How Long Each Type of Mosquito Spray Lasts</h2>
        <div className="not-prose overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-brand-800 text-white">
                <th className="px-4 py-2 text-left">Treatment Type</th>
                <th className="px-4 py-2 text-left">Duration</th>
                <th className="px-4 py-2 text-left">Rain Resistant?</th>
              </tr>
            </thead>
            <tbody>
              {[
                { type: 'Professional barrier spray (BuzzSkito)', duration: 'Up to 30 days', rain: 'Yes (after 30 min)' },
                { type: 'Consumer yard fogger spray', duration: '1–7 days', rain: 'Partially' },
                { type: 'Citronella candles/torches', duration: 'While burning only', rain: 'No' },
                { type: 'DEET personal repellent', duration: '4–8 hours (on skin)', rain: 'Minimal' },
                { type: 'Mosquito dunks (standing water)', duration: '30 days in water', rain: 'N/A' },
              ].map(({ type, duration, rain }) => (
                <tr key={type} className="border-b border-gray-200 even:bg-gray-50">
                  <td className="px-4 py-2 font-medium text-gray-800">{type}</td>
                  <td className="px-4 py-2 text-brand-700 font-semibold">{duration}</td>
                  <td className="px-4 py-2 text-gray-600">{rain}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <AffiliateDisclosure />
        <p>The one DIY item from that table worth pairing with professional treatment: BTi mosquito dunks for any standing water you cannot drain (rain barrels, pond edges). They stop larvae for 30 days and complement — rather than replace — the barrier spray doing the yard-wide work. <BuyLink tag={AMZ_TAG} search="summit mosquito dunks">Check Mosquito Dunks on Amazon.ca →</BuyLink></p>

        <h2>Why Professional Spray Lasts Longer Than DIY Options</h2>
        <p>Professional-grade residual insecticides used by BuzzSkito are formulated to bond tightly to vegetation surfaces as they dry. This creates a durable coating that persists through normal weather conditions for up to 30 days. Consumer products, which are diluted for safety in non-professional contexts, typically have much lower active ingredient concentrations and lack the adhesion chemistry that enables long-lasting residual protection. Fogging sits at the far end of that scale: a thermal or ULV fogger kills the mosquitoes flying at the moment of application and leaves essentially no residual behind, so the yard is open again within hours instead of the 3–4 weeks a barrier spray holds — our guide to <Link href="/blog/mosquito-fogger-canada" className="text-brand-700 hover:underline">mosquito fogging</Link> covers when that short-term knockdown is still worth doing. For a full side-by-side breakdown, see our guide on <Link href="/blog/mosquito-vs-diy-vs-professional-control" className="text-brand-700 hover:underline">DIY vs. professional mosquito control</Link>.</p>

        <h2>Does Spraying for Mosquitoes Actually Work?</h2>
        <p>Yes — with an important clarification. Barrier spray works by creating a kill zone on your property, not by eliminating the source. Mosquitoes breed in standing water — ravines, ditches, neighbours' yards — and fly to your property looking for a place to rest and feed. When they land on treated vegetation, the residual insecticide kills them.</p>
        <p>This is why re-application every 21–28 days is necessary: you're maintaining an ongoing barrier against a continuous source, not making a one-time fix. The barrier also only ever deals with the mosquitoes that reach your yard, so any standing water you do control — rain barrels, clogged gutters, plant saucers — is worth treating with a BTI larvicide such as granular <Link href="/blog/mosquito-bits-canada-vs-dunks" className="text-brand-700 hover:underline">BTI mosquito bits</Link>, which kill the larvae before they ever emerge as adults. Homeowners near Toronto's ravines, Mississauga's Credit River, or any natural watercourse will see the most dramatic results because their mosquito pressure is highest and the treated barrier makes the biggest difference.</p>

        <h2>What Affects How Long Mosquito Spray Lasts?</h2>

        <h3>Rainfall</h3>
        <p>Heavy rain within the first 30–60 minutes after application, before the product has fully dried, can wash it off. Once dried, the barrier is highly rain-resistant. At BuzzSkito, we monitor weather forecasts and won't apply before heavy rain. If rain does fall within one hour of application, we reapply at no cost.</p>

        <h3>Temperature and UV Exposure</h3>
        <p>Extended periods of intense heat and direct sunlight can accelerate the breakdown of residual insecticides. Areas of your property in full sun may see slightly shorter protection windows than shaded areas. This is why we apply thorough coverage to all vegetation, including shaded areas where breakdown is slower.</p>

        <h3>Best Time to Spray: Morning vs. Evening</h3>
        <p>Morning application — after dew has dried, typically between 9 and 11 AM — gives the best results. This allows maximum drying time before evening humidity. We avoid direct midday sun applications in peak summer as intense UV can interfere with the curing process. Evening application is possible but leaves less drying time before overnight dew.</p>

        <h3>Vegetation Density</h3>
        <p>Dense shrubs and thick plant canopy require more product to achieve thorough coverage. Properties with heavy landscaping may need more frequent treatments to maintain effective protection through the vegetation.</p>

        <h3>Mosquito Pressure from Neighbouring Properties</h3>
        <p>If adjacent properties have significant mosquito breeding or have dense untreated vegetation, you may experience more pressure at your property boundaries. This is normal — barrier spray is most effective when applied comprehensively, including property perimeters.</p>

        <h2>Re-Application Schedule for GTA Properties</h2>
        <div className="not-prose overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-brand-800 text-white">
                <th className="px-4 py-2 text-left">Treatment</th>
                <th className="px-4 py-2 text-left">Timing</th>
                <th className="px-4 py-2 text-left">Why</th>
              </tr>
            </thead>
            <tbody>
              {[
                { treatment: 'Treatment 1', timing: 'Mid-May', why: 'Mosquito season onset — establish barrier before populations peak' },
                { treatment: 'Treatment 2', timing: 'Early June', why: 'Tick nymph peak overlaps — ideal for combo treatment' },
                { treatment: 'Treatment 3', timing: 'Early July', why: 'Peak mosquito season — highest activity period' },
                { treatment: 'Treatment 4', timing: 'Early August', why: 'Late summer pressure, especially near water' },
                { treatment: 'Treatment 5', timing: 'Early September', why: 'Extended season — GTA mosquitoes active into early fall' },
              ].map(({ treatment, timing, why }) => (
                <tr key={treatment} className="border-b border-gray-200 even:bg-gray-50">
                  <td className="px-4 py-2 font-medium text-brand-700">{treatment}</td>
                  <td className="px-4 py-2 text-gray-800">{timing}</td>
                  <td className="px-4 py-2 text-gray-600">{why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>For continuous protection, re-application every 21–28 days is optimal for GTA conditions. This accounts for the 30-day maximum protection window and provides a buffer for weather or application variability. Timing your first spray to the local <Link href="/blog/mosquito-season-gta-when-does-it-start" className="text-brand-700 hover:underline">start of mosquito season</Link> keeps the barrier ahead of peak populations.</p>

        <h2>How Long After Mosquito Spray Can You Go Outside?</h2>
        <p>The treated area is safe to re-enter approximately 30 minutes after application — once the spray has fully dried. During application and while the product is wet, people and pets should remain indoors or away from the yard. There's no lingering off-gassing once dry, and no re-entry restriction beyond that initial drying period.</p>

        <p>For reference, the <Link href="/blog/is-mosquito-spray-safe-kids-pets" className="text-brand-700 hover:underline">full safety guide for mosquito spray around kids and pets</Link> covers all re-entry protocols in detail.</p>

        <h2>Related Guides</h2>
        <ul>
          <li><Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{MOSQUITO_BLOGS.pillar.title}</Link></li>
          <li><Link href="/blog/mosquito-vs-diy-vs-professional-control" className="text-brand-700 hover:underline">DIY vs. Professional Mosquito Control: What Actually Works</Link></li>
          <li><Link href="/blog/mosquito-season-gta-when-does-it-start" className="text-brand-700 hover:underline">When Does Mosquito Season Start in the GTA?</Link></li>
          <li><Link href="/mosquito-control-cost" className="text-brand-700 hover:underline">How Much Does Mosquito Control Cost in Ontario? (2026 Pricing Guide)</Link></li>
          <li><Link href="/mosquito-control" className="text-brand-700 hover:underline">View Our Mosquito Control Services</Link></li>
        </ul>
      </article>

      <section className="py-10 px-4 bg-brand-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {FAQS.map(({ question, answer }) => (
              <details key={question} className="bg-white rounded-xl border border-brand-100 group">
                <summary className="cursor-pointer px-5 py-4 font-semibold text-brand-900 list-none flex justify-between items-center">
                  <span>{question}</span>
                  <svg className="w-5 h-5 shrink-0 group-open:rotate-180 transition-transform text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-5 pb-4 text-gray-600 text-sm">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <StickyBuyBar tag={AMZ_TAG} name="Summit Mosquito Dunks (BTi larvicide)" search="summit mosquito dunks" label="For standing water" />

      <CTASection heading="Professional Spray with 30-Day Guaranteed Protection" subtext="BuzzSkito backs every treatment with a free reapplication guarantee." />
    </>
  )
}
