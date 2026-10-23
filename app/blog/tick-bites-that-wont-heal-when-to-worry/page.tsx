import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorByline from '@/components/AuthorByline'
import BuyLink from '@/components/BuyLink'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { MOSQUITO_BLOGS, TICK_BLOGS } from '@/lib/constants'
import { tagForSlug } from '@/lib/amazon-clusters'
import StickyBuyBar from '@/components/StickyBuyBar'
import ReadNext from '@/components/ReadNext'
import FreshnessStamp from '@/components/FreshnessStamp'
import Photo from '@/components/Photo'
import QuickIdTable from '@/components/QuickIdTable'
import ConfusedWith from '@/components/ConfusedWith'

const SLUG = 'tick-bites-that-wont-heal-when-to-worry'
const AMZ_TAG = tagForSlug('tick-bites-that-wont-heal-when-to-worry')
const DATE = '2026-04-29'
// Oct 20, 2026: rebuilt to the photo-ID formula (quick-ID table, photos, look-alike cards, four FAQs)
const UPDATED = '2026-10-20'
const TITLE = 'Tick Bites That Won\'t Heal: When to Worry (Ontario)'
const META_TITLE = 'Tick Bite Not Healing: When to Worry (Ontario)'

const FAQS = [
  { question: `Bull's-Eye Rash (Erythema Migrans)`, answer: `A red rash with concentric rings — looking like a bull's-eye or target — is the classic early Lyme disease sign. It typically appears 3–30 days after a tick bite, expands over days, and may be warm but usually not painful or itchy. Roughly 70–80% of Lyme cases show this rash; about 20–30% don't, so absence of rash doesn't mean absence of Lyme. See a doctor immediately if you see this pattern.` },
  { question: `Bite That Expands or Spreads After 3–4 Days`, answer: `A normal tick bite reaction is a small red bump (similar to a mosquito bite) that, according to the CDC, generally goes away in 1–2 days. A bite that gets larger after 3–4 days — even without the classic bull's-eye pattern — could signal early Lyme disease or another tick-borne infection. Photograph the bite daily for documentation.` },
  { question: `Bite Site That Feels Hot, Hard, or Painful Beyond 1 Week`, answer: `A tick bite that becomes increasingly painful, develops surrounding heat, or forms a hard lump beyond the first week may be infected. Secondary bacterial infection at the bite site is uncommon but happens when tick mouthparts are left behind during removal. May require antibiotic treatment.` },
  { question: `Persistent Tick Bite Granuloma`, answer: `A small firm nodule at the tick bite site that persists for weeks or months — without other Lyme symptoms — is a tick bite granuloma. It's an immune response to retained tick saliva or mouthparts. Most resolve on their own; persistent or growing nodules should be evaluated by a doctor.` },
  { question: `Flu-Like Symptoms 1–4 Weeks After Bite`, answer: `Fever, fatigue, muscle aches, joint pain, headache, swollen lymph nodes — appearing 1–4 weeks after a known or suspected tick bite — are Lyme disease early symptoms even without a rash. These can be subtle and easily mistaken for summer flu or COVID. Tell your doctor about the tick bite specifically.` },
  { question: `Bell's Palsy (Facial Drooping)`, answer: `A sudden facial drooping on one side, especially in late summer or fall in Ontario, can be a sign that Lyme disease has spread (Lyme neuroborreliosis): the CDC lists facial palsy among the later signs, which can appear days to months after the bite. One of the more serious untreated-Lyme complications. Emergency department visit if facial weakness develops.` },
  { question: `How long does a tick bite take to heal?`, answer: `A normal reaction to a tick bite is a small red bump, similar to a mosquito bite, that the CDC says generally goes away in 1 to 2 days and is not a sign of Lyme disease. A red mark that is still there after a few days, or that keeps growing, deserves a medical review. Keep watching the spot for a month, because the bull's-eye rash of Lyme disease can appear 3 to 30 days after the bite, and flu-like symptoms can start one to four weeks after it.` },
  { question: `Why is my tick bite not healing after months?`, answer: `A small, firm lump that stays at the bite for weeks or months, with no other symptoms, is often a tick bite granuloma: the immune system's response to tick saliva or mouthparts left in the skin. Most go away on their own, but a lump that persists or grows should be checked by a doctor. A bite that becomes hot, hard or more painful after the first week may be infected, and an expanding rash, flu-like symptoms or a swollen knee can be signs of Lyme disease. Each of these is a reason to see a doctor rather than wait.` },
  { question: `Is a tick bite granuloma dangerous?`, answer: `A tick bite granuloma is a small, firm nodule left by the body's immune response to tick saliva or mouthparts that stayed in the skin. It can last weeks or months, and most resolve on their own. It is not the same as the rash and flu-like symptoms of Lyme disease, which need prompt medical attention. Have a doctor look at a nodule that keeps growing or will not go away, and see one sooner if the bite turns hot, hard and painful, which can mean an infection.` },
  { question: `What should a tick bite look like after 3 weeks?`, answer: `By three weeks, a normal tick bite has usually faded: the small red bump of an ordinary reaction generally goes away in 1 to 2 days (CDC), so a mark still there after three weeks deserves a medical review. Three weeks is also inside the 3 to 30 day window for the Lyme disease rash, so a red patch or ring that is growing, or fever, fatigue and aches, are reasons to see a doctor. A small, firm lump with no other symptoms may be a tick bite granuloma, which should be checked if it persists or grows.` },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: `A tick bite that doesn't heal could signal Lyme disease, alpha-gal syndrome, or secondary infection. Ontario guide to symptoms, when to see a doctor, and what to do next.`,
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

export default function TickBitesThatWontHealWhenToWorryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: `A tick bite that doesn't heal could signal Lyme disease, alpha-gal syndrome, or secondary infection. Ontario guide to symptoms, when to see a doctor, and what to do next.`, slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
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
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      {/* QUICK ANSWER */}
      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">A tick bite that doesn&apos;t heal within 2 weeks, expands into a bull&apos;s-eye rash, or comes with fever, fatigue, joint pain, or muscle aches needs urgent medical attention &mdash; these are early Lyme disease warning signs. Most non-Lyme tick bites resolve in 7&ndash;10 days.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>A normal tick-bite reaction fades within 7&ndash;10 days; anything beyond 2 weeks warrants medical review.</li>
              <li>The bull&apos;s-eye rash (erythema migrans) appears 3&ndash;30 days after a bite in roughly 70&ndash;80% of Lyme cases.</li>
              <li>About 20&ndash;30% of Lyme cases show no rash, so absence of a rash doesn&apos;t rule it out.</li>
              <li>Flu-like symptoms 1&ndash;4 weeks after a bite can be early Lyme even without a rash.</li>
              <li>eTick (etick.ca) identifies ticks for free from a photo; it does not test them for disease.</li>
              <li>Doxycycline works best started early &mdash; document the bite and see a doctor if in doubt.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito, GTA mosquito &amp; tick control · 150+ five-star Google reviews</p>
          </div>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12 prose-brand">
        <AuthorByline datePublished={DATE} dateModified={UPDATED} />

        {/* Service arm first: the quote CTA and phone number sit above every affiliate element on this page. */}

        <AffiliateDisclosure />

        <div className="not-prose my-6 rounded-2xl border border-navy-100 bg-white p-5 shadow-sm">
          <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">What to do right now</p>
          <ol className="space-y-3 text-[15px] text-gray-800 list-decimal pl-5">
            <li><strong>If the tick is still attached, get it off now &mdash; this step costs nothing.</strong> Grip it at the skin line, as close to the head as you can reach, and pull straight up. No twisting, no petroleum jelly, no match. Then photograph the bite, note the date, and keep the tick.</li>
            <li><strong>A fine-tipped tick tool, so the next one comes out whole.</strong> Blunt tweezers are too wide to take hold of the head, so they grip the body and tear the mouthparts off in the skin &mdash; the fragment behind the granuloma at number 4 below. A pointed tool reaches in at the skin line. <BuyLink tag={AMZ_TAG} search="fine tip tick removal tool tweezers">Check price on Amazon.ca &rarr;</BuyLink></li>
            <li><strong>A small screw-top vial and a permanent marker.</strong> etick.ca needs a clear photo of an intact tick to identify the species, and a crushed one is far harder to work with. Drop it in the vial, write the date and the bite location on the lid, and you are holding the one piece of evidence a doctor cannot reconstruct from memory three weeks later. <BuyLink tag={AMZ_TAG} search="small screw top specimen vials">Check price on Amazon.ca &rarr;</BuyLink></li>
          </ol>
        </div>

        <QuickIdTable
          title="Healing normally, or time to see a doctor? Quick ID"
          head={['What you see', 'What it looks like', 'When', 'What to do']}
          rows={[
            ['Normal bite reaction', 'A small red bump, like a mosquito bite', 'Generally gone in 1–2 days (CDC)', 'Watch it; if it lasts or grows, get it checked'],
            ['Bite that grows', 'Gets bigger instead of smaller, with or without a bull’s-eye pattern', 'After 3–4 days', 'Photograph it daily and see a doctor'],
            ['Bull’s-eye rash (erythema migrans)', 'Red rings like a target that expand over days; may be warm, usually not painful or itchy', '3–30 days after the bite', 'See a doctor right away'],
            ['Hot, hard or painful bite', 'Increasing pain, heat around the bite, or a hard lump forming', 'Beyond the first week', 'See a doctor: it may be infected'],
            ['Tick bite granuloma', 'A small, firm lump at the bite, with no other symptoms', 'Lasts weeks or months', 'Most go away on their own; see a doctor if it persists or grows'],
            ['Flu-like symptoms', 'Fever, fatigue, aches, joint pain, headache, swollen lymph nodes, even with no rash', '1–4 weeks after the bite', 'See a doctor and mention the tick bite'],
            ['Later Lyme signs', 'Drooping on one side of the face; chest pain, palpitations or fainting; a swollen knee', 'Days to months after the bite', 'Face or heart symptoms: emergency department. Swollen knee: see a doctor'],
          ]}
          caption={<>Restated from the ten signs below; timing of the later signs from the <a href="https://www.cdc.gov/lyme/signs-symptoms/index.html" target="_blank" rel="noopener noreferrer" className="underline">CDC</a>. For what a normal bite looks like day by day, see <Link href="/blog/what-does-a-tick-bite-look-like">what a tick bite looks like</Link>. General information, not a diagnosis: when in doubt, see a doctor.</>}
        />

        <h3>1. Bull's-Eye Rash (Erythema Migrans)</h3>
        <p>A red rash with concentric rings — looking like a bull&apos;s-eye or target — is the classic early Lyme disease sign. It typically appears 3–30 days after a tick bite, expands over days, and may be warm but usually not painful or itchy. Roughly 70–80% of Lyme cases show this rash; about 20–30% don&apos;t, so absence of rash doesn&apos;t mean absence of Lyme. See a doctor immediately if you see this pattern.</p>
        <Photo
          id="erythema-migrans-rash"
          alt="A bull's-eye rash with a red centre and an outer red ring on a woman's upper arm"
          caption="Erythema migrans, the bull's-eye rash of Lyme disease, at the site of a tick bite on a woman's upper arm. A bite that is healing shrinks; this rash grows outward over days."
        />

        <h3>2. Bite That Expands or Spreads After 3–4 Days</h3>
        <p>A normal tick bite reaction is a small red bump (similar to a mosquito bite) that, <a href="https://www.cdc.gov/lyme/signs-symptoms/index.html" target="_blank" rel="noopener noreferrer">according to the CDC</a>, generally goes away in 1&ndash;2 days. A bite that gets larger after 3–4 days — even without the classic bull&apos;s-eye pattern — could signal early Lyme disease or another tick-borne infection. Photograph the bite daily for documentation.</p>

        <h3>3. Bite Site That Feels Hot, Hard, or Painful Beyond 1 Week</h3>
        <p>A tick bite that becomes increasingly painful, develops surrounding heat, or forms a hard lump beyond the first week may be infected. Secondary bacterial infection at the bite site is uncommon but happens when tick mouthparts are left behind during removal. May require antibiotic treatment.</p>

        <h3>4. Persistent Tick Bite Granuloma</h3>
        <p>A small firm nodule at the tick bite site that persists for weeks or months — without other Lyme symptoms — is a tick bite granuloma. It&apos;s an immune response to retained tick saliva or mouthparts. Most resolve on their own; persistent or growing nodules should be evaluated by a doctor.</p>

        <h3>5. Flu-Like Symptoms 1–4 Weeks After Bite</h3>
        <p>Fever, fatigue, muscle aches, joint pain, headache, swollen lymph nodes — appearing 1–4 weeks after a known or suspected tick bite — are Lyme disease early symptoms even without a rash. These can be subtle and easily mistaken for summer flu or COVID. Tell your doctor about the tick bite specifically.</p>

        <h3>6. Bell's Palsy (Facial Drooping)</h3>
        <p>A sudden facial drooping on one side, especially in late summer or fall in Ontario, can be a sign that Lyme disease has spread (Lyme neuroborreliosis): the <a href="https://www.cdc.gov/lyme/signs-symptoms/index.html" target="_blank" rel="noopener noreferrer">CDC</a> lists facial palsy among the later signs, which can appear days to months after the bite. One of the more serious untreated-Lyme complications. Emergency department visit if facial weakness develops.</p>

        <h3>7. Joint Pain or Swelling, Especially Knees</h3>
        <p>Lyme disease commonly causes "Lyme arthritis" — typically affecting one or both knees with significant swelling. Appears weeks to months after untreated infection. Distinguishable from regular arthritis by sudden onset, often unilateral, and history of outdoor activity in tick zones.</p>

        <h3>8. Itchy or Painful Reaction to Red Meat (Alpha-Gal Syndrome)</h3>
        <p>Alpha-gal syndrome — a delayed allergic reaction to red meat (beef, pork, lamb) developing 3–8 hours after eating — can be triggered by lone star tick bites. Lone star ticks are uncommon in Ontario but increasingly reported. Symptoms include hives, GI distress, and in severe cases anaphylaxis. Allergist evaluation needed.</p>

        <h3>9. Heart Symptoms (Lyme Carditis)</h3>
        <p>Rare but serious. Untreated Lyme disease can cause heart-rhythm problems weeks to months post-infection. Symptoms: chest pain, palpitations, shortness of breath, fainting. Emergency department visit immediately if these occur after a known or suspected tick bite.</p>

        <h3>10. When in Doubt — Use Ontario's Tick Testing Program</h3>
        <p><a href="https://www.etick.ca" target="_blank" rel="noopener noreferrer">eTick (etick.ca)</a> is a free tick identification service whose partners include Bishop&apos;s University and provincial health departments. Submit a photo of the tick and an expert identifies the species, which tells you whether it is a kind that can carry Lyme disease. It does not test the tick for disease. Faster and more accurate than guessing. If the tick is identified as a blacklegged tick that has fed (engorged), see a doctor immediately about preventive antibiotics.</p>
        <Photo
          id="blacklegged-tick-adult-nymph-fingertip"
          alt="A blacklegged tick adult female and a much smaller nymph on a person's fingertip"
          caption="A blacklegged (deer) tick adult female (left) and nymph (right) on a fingertip, for size. Photograph and keep any tick you remove, so it can be identified."
        />
        <ConfusedWith
          title="Which tick was it? It changes what to watch for"
          items={[
            { href: '/blog/blacklegged-deer-tick-ontario', name: 'Blacklegged (deer) tick', photo: 'blacklegged-tick-female', note: 'If one has fed on you and looks swollen with blood, see a doctor promptly' },
            { href: '/blog/lone-star-tick-alpha-gal-canada', name: 'Lone star tick', photo: 'lone-star-tick-female', note: 'Uncommon in Ontario; its bite can trigger alpha-gal syndrome, a delayed allergy to red meat' },
          ]}
        />
        <p>If you never found a tick and are not sure one made the bite, our <Link href="/tools/bug-bite-identifier">tool for identifying bug bites</Link> asks six quick questions about where you were, when the bite appeared, its pattern and whether you felt it, then shows the two or three most likely biters with a real photo of each, how to confirm it and the signs that mean you should see a doctor.</p>

        <h2>Getting the Next One Out Cleanly</h2>
        <p>Two of the problems on this page &mdash; the persistent granuloma at number 4, and the hot, hard bite site at number 3 &mdash; trace back to the same moment, and it is not the bite. It is the removal. Blunt household tweezers are too wide at the tip to grip a tick at the head, so they take hold of the body instead, squeeze it, and tear the mouthparts off in the skin. That retained fragment is what the immune system then walls off into a nodule, or what a secondary infection gets going around.</p>
        <p>If the mouthparts do break off in the skin, the <a href="https://www.cdc.gov/ticks/after-a-tick-bite/index.html" target="_blank" rel="noopener noreferrer">CDC</a> advises removing them with tweezers if that is easy, and otherwise leaving them alone: the body usually pushes them out as the skin heals. It also advises cleaning the bite and your hands with soap and water, rubbing alcohol or hand sanitizer after removing a tick. Our guide to a <Link href="/blog/tick-head-stuck-in-skin">tick head stuck in the skin</Link> covers this step by step.</p>
        <p>A fine-tipped tick tool or pointed tweezers gets in at the skin line and lifts the whole tick straight out, which also leaves you with an intact specimen &mdash; the thing etick.ca needs to identify the species from a photo. A crushed tick is much harder to identify and no use for testing. It is worth having one in the house before the evening you need it.</p>
        <AffiliateDisclosure />
        <p className="not-prose"><BuyLink tag={AMZ_TAG} search="tick removal tool tweezers">Check tick-removal tools on Amazon.ca &rarr;</BuyLink></p>

        <h2>Bottom Line</h2>
        <p>In Ontario in 2026, every persistent tick bite warrants attention. Lyme disease is treatable — and treatment is dramatically more effective when started in the first few weeks. The cost of a false alarm (one doctor visit) is much lower than the cost of late-stage Lyme (months of antibiotics, possible permanent symptoms, lost income). When in doubt, document and see a doctor. And prevent next time with professional tick barrier spray on yard transition zones — the lawn-to-woods edge where ticks wait is where the barrier goes down.</p>

        <p className="not-prose text-gray-700">Before the next walk in long grass, two of the three useful steps cost nothing: tuck trousers into socks so a questing tick has to climb the outside of the fabric, and do a full body check within a couple of hours of coming back inside &mdash; the check is what stops a bite from becoming one of the ten problems listed above. The third is repellent on exposed skin. Icaridin (the Canadian name for picaridin) and DEET are the two actives Canadian public-health guidance points to for personal protection against ticks and mosquitoes; check for the PCP registration number on the bottle and follow the age directions printed on the label. <BuyLink tag={AMZ_TAG} search="icaridin insect repellent">Check price on Amazon.ca &rarr;</BuyLink></p>

        <h2>Related Guides</h2>
        <ul>
          <li><Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{MOSQUITO_BLOGS.pillar.title}</Link></li>
          <li><Link href={`/blog/${TICK_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{TICK_BLOGS.pillar.title}</Link></li>
          <li><Link href="/blog/hidden-mosquito-breeding-spots-backyard" className="text-brand-700 hover:underline">Hidden Mosquito Breeding Spots in Your GTA Backyard</Link></li>
          <li><Link href="/blog/lyme-disease-tick-prevention-ontario" className="text-brand-700 hover:underline">Lyme Disease Prevention in Ontario</Link></li>
          <li><Link href="/mosquito-control" className="text-brand-700 hover:underline">View Our Mosquito Control Services</Link></li>
          <li><Link href="/tick-control" className="text-brand-700 hover:underline">View Our Tick Control Services</Link></li>
        </ul>
        <h2>Frequently Asked Questions</h2>
        <div className="not-prose space-y-4">
          {FAQS.map(({ question, answer }) => (
            <details key={question} className="group rounded-xl border border-navy-100 bg-white p-4">
              <summary className="cursor-pointer font-bold text-brand-900 list-none flex justify-between items-center gap-3">
                {question}
                <span className="text-emerald-600 group-open:rotate-45 transition-transform text-xl leading-none">+</span>
              </summary>
              <p className="mt-3 text-sm text-gray-700 leading-relaxed">{answer}</p>
            </details>
          ))}
        </div>

      </article>

      <ReadNext path="/blog/tick-bites-that-wont-heal-when-to-worry" standalone />
      <StickyBuyBar tag={AMZ_TAG} name="Tick-removal tool kit" search="tick removal tool tweezers" label="For removal" />
    </>
  )
}
