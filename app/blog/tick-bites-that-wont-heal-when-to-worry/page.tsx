import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import AuthorByline from '@/components/AuthorByline'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { MOSQUITO_BLOGS, TICK_BLOGS } from '@/lib/constants'

const SLUG = 'tick-bites-that-wont-heal-when-to-worry'
const DATE = '2026-04-29'
const TITLE = 'Tick Bites That Won\'t Heal: When to Worry (Ontario)'

const FAQS = [
  { question: `Bull's-Eye Rash (Erythema Migrans)`, answer: `A red rash with concentric rings — looking like a bull's-eye or target — is the classic early Lyme disease sign. It typically appears 3–30 days after a tick bite, expands over days, and may be warm but usually not painful or itchy. Roughly 70–80% of Lyme cases show this rash; about 20–30% don't, so absence of rash doesn't mean absence of Lyme. See a doctor immediately if you see this pattern.` },
  { question: `Bite That Expands or Spreads After 3–4 Days`, answer: `A normal tick bite reaction is a small red bump (similar to a mosquito bite) that fades within 7–10 days. A bite that gets larger after 3–4 days — even without the classic bull's-eye pattern — could signal early Lyme disease or another tick-borne infection. Photograph the bite daily for documentation.` },
  { question: `Bite Site That Feels Hot, Hard, or Painful Beyond 1 Week`, answer: `A tick bite that becomes increasingly painful, develops surrounding heat, or forms a hard lump beyond the first week may be infected. Secondary bacterial infection at the bite site is uncommon but happens when tick mouthparts are left behind during removal. May require antibiotic treatment.` },
  { question: `Persistent Tick Bite Granuloma`, answer: `A small firm nodule at the tick bite site that persists for weeks or months — without other Lyme symptoms — is a tick bite granuloma. It's an immune response to retained tick saliva or mouthparts. Most resolve on their own; persistent or growing nodules should be evaluated by a doctor.` },
  { question: `Flu-Like Symptoms 1–4 Weeks After Bite`, answer: `Fever, fatigue, muscle aches, joint pain, headache, swollen lymph nodes — appearing 1–4 weeks after a known or suspected tick bite — are Lyme disease early symptoms even without a rash. These can be subtle and easily mistaken for summer flu or COVID. Tell your doctor about the tick bite specifically.` },
  { question: `Bell's Palsy (Facial Drooping)`, answer: `A sudden facial drooping on one side, especially in late summer or fall in Ontario, can be late-stage Lyme disease (Lyme neuroborreliosis). One of the more serious untreated-Lyme complications. Emergency department visit if facial weakness develops.` },
]

export const metadata: Metadata = buildMetadata({
  title: `Tick Bites That Won't Heal: When to Worry (Ontario)`,
  description: `A tick bite that doesn't heal could signal Lyme disease, alpha-gal syndrome, or secondary infection. Ontario guide to symptoms, when to see a doctor, and what to do next.`,
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
})

export default function TickBitesThatWontHealWhenToWorryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: `A tick bite that doesn't heal could signal Lyme disease, alpha-gal syndrome, or secondary infection. Ontario guide to symptoms, when to see a doctor, and what to do next.`, slug: SLUG, datePublished: DATE })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: TITLE, url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-amber-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1 flex-wrap">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Tick Bites That Won't Heal</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">Tick Bites That Won't Heal — When to Worry (Ontario 2026 Guide)</h1>
          <p className="text-brand-300 text-sm">Practical, evidence-backed Ontario homeowner guide.</p>
        </div>
      </section>

      {/* QUICK ANSWER */}
      <section className="bg-amber-50 border-y-4 border-amber-300 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-amber-700 uppercase tracking-wider mb-2">Quick Answer</p>
          <h2 className="text-xl font-extrabold text-brand-900 mb-3">Tick Bites That Won't Heal — When to Worry (Ontario 2026 Guide)</h2>
          <p className="text-base text-gray-800 leading-relaxed">A tick bite that doesn&apos;t heal within 2 weeks, expands into a bull&apos;s-eye rash, or comes with fever, fatigue, joint pain, or muscle aches needs urgent medical attention — these are early Lyme disease warning signs. Ontario&apos;s blacklegged tick populations are now established across the GTA, and Lyme disease cases have increased tenfold over the past decade. The standard treatment (doxycycline) works best when started early, so don&apos;t wait. Take a photo of the bite, note the date you found the tick, and see a doctor or use Public Health Ontario&apos;s tick-testing program (etick.ca). Most non-Lyme tick bites resolve in 7–10 days; anything beyond 2 weeks warrants medical review.</p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12 prose-brand">
        <AuthorByline datePublished={DATE} />

        <h3>1. Bull's-Eye Rash (Erythema Migrans)</h3>
        <p>A red rash with concentric rings — looking like a bull&apos;s-eye or target — is the classic early Lyme disease sign. It typically appears 3–30 days after a tick bite, expands over days, and may be warm but usually not painful or itchy. Roughly 70–80% of Lyme cases show this rash; about 20–30% don&apos;t, so absence of rash doesn&apos;t mean absence of Lyme. See a doctor immediately if you see this pattern.</p>

        <h3>2. Bite That Expands or Spreads After 3–4 Days</h3>
        <p>A normal tick bite reaction is a small red bump (similar to a mosquito bite) that fades within 7–10 days. A bite that gets larger after 3–4 days — even without the classic bull&apos;s-eye pattern — could signal early Lyme disease or another tick-borne infection. Photograph the bite daily for documentation.</p>

        <h3>3. Bite Site That Feels Hot, Hard, or Painful Beyond 1 Week</h3>
        <p>A tick bite that becomes increasingly painful, develops surrounding heat, or forms a hard lump beyond the first week may be infected. Secondary bacterial infection at the bite site is uncommon but happens when tick mouthparts are left behind during removal. May require antibiotic treatment.</p>

        <h3>4. Persistent Tick Bite Granuloma</h3>
        <p>A small firm nodule at the tick bite site that persists for weeks or months — without other Lyme symptoms — is a tick bite granuloma. It&apos;s an immune response to retained tick saliva or mouthparts. Most resolve on their own; persistent or growing nodules should be evaluated by a doctor.</p>

        <h3>5. Flu-Like Symptoms 1–4 Weeks After Bite</h3>
        <p>Fever, fatigue, muscle aches, joint pain, headache, swollen lymph nodes — appearing 1–4 weeks after a known or suspected tick bite — are Lyme disease early symptoms even without a rash. These can be subtle and easily mistaken for summer flu or COVID. Tell your doctor about the tick bite specifically.</p>

        <h3>6. Bell's Palsy (Facial Drooping)</h3>
        <p>A sudden facial drooping on one side, especially in late summer or fall in Ontario, can be late-stage Lyme disease (Lyme neuroborreliosis). One of the more serious untreated-Lyme complications. Emergency department visit if facial weakness develops.</p>

        <h3>7. Joint Pain or Swelling, Especially Knees</h3>
        <p>Lyme disease commonly causes "Lyme arthritis" — typically affecting one or both knees with significant swelling. Appears weeks to months after untreated infection. Distinguishable from regular arthritis by sudden onset, often unilateral, and history of outdoor activity in tick zones.</p>

        <h3>8. Itchy or Painful Reaction to Red Meat (Alpha-Gal Syndrome)</h3>
        <p>Alpha-gal syndrome — a delayed allergic reaction to red meat (beef, pork, lamb) developing 3–8 hours after eating — can be triggered by lone star tick bites. Lone star ticks are uncommon in Ontario but increasingly reported. Symptoms include hives, GI distress, and in severe cases anaphylaxis. Allergist evaluation needed.</p>

        <h3>9. Heart Symptoms (Lyme Carditis)</h3>
        <p>Rare but serious. Untreated Lyme disease can cause heart-rhythm problems weeks to months post-infection. Symptoms: chest pain, palpitations, shortness of breath, fainting. Emergency department visit immediately if these occur after a known or suspected tick bite.</p>

        <h3>10. When in Doubt — Use Ontario's Tick Testing Program</h3>
        <p>Public Health Ontario operates etick.ca — a free tick identification and disease-testing service. Submit a photo of the tick (and the actual tick if you have it) for free identification and assessment of disease risk. Faster and more accurate than guessing. If the tick is identified as a blacklegged tick that has fed (engorged), see a doctor immediately about preventive antibiotics.</p>


        <h2>Bottom Line</h2>
        <p>In Ontario in 2026, every persistent tick bite warrants attention. Lyme disease is treatable — and treatment is dramatically more effective when started in the first few weeks. The cost of a false alarm (one doctor visit) is much lower than the cost of late-stage Lyme (months of antibiotics, possible permanent symptoms, lost income). When in doubt, document and see a doctor. And prevent next time with professional tick barrier spray on yard transition zones — Lyme disease prevention starts at the property line.</p>

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
