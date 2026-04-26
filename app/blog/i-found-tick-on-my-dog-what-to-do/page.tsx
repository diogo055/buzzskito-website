import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'

const SLUG = 'i-found-tick-on-my-dog-what-to-do'
const DATE = '2026-04-26'
const TITLE = 'I Found a Tick on My Dog — What to Do (Ontario 2026)'

const FAQS = [
  {
    question: 'I found a tick on my dog — should I be worried?',
    answer: 'Don\'t panic, but act quickly. The risk of disease transmission depends on three things: how long the tick was attached (24+ hours raises Lyme risk significantly), what species it is (blacklegged ticks transmit Lyme disease, dog ticks generally do not), and whether your dog has up-to-date tick preventatives. Most single tick bites do not cause illness if removed properly. Remove the tick within minutes using fine-tipped tweezers, save it in a sealed bag, and watch your dog for symptoms over the next 2–5 months.',
  },
  {
    question: 'How do I know if a tick has been on my dog for too long?',
    answer: 'Look at the tick\'s body. An unfed tick is small, flat, and oval — about the size of a sesame seed (1–3 mm). A tick that has been feeding for 12–24 hours is partly engorged and looks rounder. A tick that has been attached for 36+ hours is grape- or pea-sized, grey-blue or olive coloured, and clearly bloated. The 24-hour mark is the key threshold for Lyme disease transmission risk in Ontario.',
  },
  {
    question: 'What should I do immediately after finding a tick on my dog?',
    answer: 'Step 1: Get fine-tipped tweezers or a tick-removal tool. Step 2: Grasp the tick at the head, as close to your dog\'s skin as possible. Step 3: Pull straight up with steady pressure — no twisting, no squeezing the body. Step 4: Clean the bite with rubbing alcohol or soap and water. Step 5: Save the tick in a sealed plastic bag with a damp paper towel for identification. Step 6: Note the date and watch for symptoms over the next 5 months. Step 7: Consider calling your vet if the tick was attached for 24+ hours.',
  },
  {
    question: 'Do I need to take my dog to the vet after finding a tick?',
    answer: 'Not always. Most single tick bites resolve without any veterinary intervention if the tick is removed promptly and your dog is on monthly tick preventatives. However, you should call your vet if: the tick was attached for 24+ hours, you find multiple ticks, you see a bullseye rash, your dog develops symptoms like fever, lameness, lethargy, or loss of appetite, the mouthparts broke off and the bite area is becoming infected, or you live in an Ontario tick hotspot and want a Lyme/4DX screening.',
  },
  {
    question: 'How long can a tick live on a dog?',
    answer: 'A feeding female tick will stay attached for 5–10 days, slowly engorging with blood, before dropping off to lay eggs. Male ticks may attach briefly to feed but typically don\'t engorge to the same size. The key point: every additional hour a tick remains attached increases disease transmission risk. Daily tick checks during tick season (April–November in Ontario) are the most effective prevention against missed attachments.',
  },
  {
    question: 'Can ticks jump from my dog to me?',
    answer: 'Ticks do not jump or fly. However, an unattached tick that crawled onto your dog from grass or vegetation can crawl from your dog onto you while you\'re petting them or while they\'re on the couch. After removing a tick from your dog, wash your hands thoroughly. Adult blacklegged ticks bite humans and transmit Lyme disease just as they do to dogs. Always check yourself for ticks after handling a dog that\'s been in tick habitat.',
  },
  {
    question: 'Should I have the tick tested for Lyme disease?',
    answer: 'You can submit ticks for testing in Ontario through the eTick.ca program (free, run by Bishop\'s University) or through some private labs. The tick is photographed and identified, and you\'re told if it\'s a species that can carry Lyme. eTick is fast and free. However, knowing a tick was a blacklegged species doesn\'t mean it transmitted Lyme — only 10–30% of blacklegged ticks in Ontario actually carry Borrelia bacteria. The more reliable approach is monitoring your dog for symptoms over the next 5 months and getting a 4DX blood test from your vet if anything unusual develops.',
  },
  {
    question: 'How do I prevent finding ticks on my dog again?',
    answer: 'A combined approach works best: (1) Monthly vet-prescribed tick preventative for your dog. (2) Keep your lawn mowed short and clear leaf litter from edges. (3) Avoid tall grass and brushy areas during walks. (4) Daily tick checks after every outdoor walk in tick season. (5) Professional tick barrier spray for your yard — BuzzSkito\'s 5-spray season program reduces tick populations by 90%+ in treated yards across the GTA.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: 'Found a Tick on Your Dog? Do This Now (Ontario)',
  description: 'Step-by-step what to do when you find a tick on your dog. How long is too long, when to call the vet, Lyme disease risk, prevention tips for Ontario.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
})

export default function IFoundTickOnMyDogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Emergency guide for Ontario dog owners who just found a tick.', slug: SLUG, datePublished: DATE })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Found Tick on Dog', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-amber-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Found Tick on Dog</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">A clear, fast Ontario field guide for the moment of panic. What to do in the next 5 minutes, what to watch for, and what NOT to worry about.</p>
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <p className="lead text-xl text-gray-700 leading-relaxed mb-6">First — take a breath. You have time. Most blacklegged ticks need to be attached for <strong>24 hours or more</strong> before they can transmit Lyme disease. Removing the tick correctly within the first day dramatically reduces any risk. Here&rsquo;s exactly what to do, in order.</p>

          <div className="not-prose bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl mb-8">
            <p className="font-extrabold text-amber-900 text-lg mb-2">⏱️ Do This in the Next 5 Minutes</p>
            <ol className="list-decimal pl-6 space-y-1 text-amber-900 text-sm">
              <li>Find fine-tipped tweezers (eyebrow tweezers work).</li>
              <li>Grasp the tick at the HEAD, as close to your dog&rsquo;s skin as possible.</li>
              <li>Pull straight up — slow, steady pressure. No twisting.</li>
              <li>Clean the bite with rubbing alcohol or soap and water.</li>
              <li>Save the tick in a sealed plastic bag (label with date).</li>
            </ol>
          </div>

          <h2>Step 1: Don&rsquo;t Use Old Wives&rsquo; Tales</h2>
          <p>Before you do anything else, please <strong>do not</strong> try to suffocate the tick with petroleum jelly, kill it with rubbing alcohol while it&rsquo;s still attached, or burn it off with a hot match. These methods don&rsquo;t kill the tick fast enough — they cause it to regurgitate stomach contents into your dog, increasing the chance of disease transmission. Modern veterinary guidance is unanimous: mechanical removal with tweezers is the only correct method.</p>

          <h2>Step 2: Estimate How Long the Tick Has Been Attached</h2>
          <p>This is the most important detail for assessing risk. Look at the tick&rsquo;s body:</p>
          <ul>
            <li><strong>Flat and small (1–3 mm), sesame-seed sized</strong> → Just attached or feeding less than 12 hours. Lyme risk is very low.</li>
            <li><strong>Slightly rounded, pea-sized darker red</strong> → 12–24 hours. Risk still low but rising.</li>
            <li><strong>Engorged, grape-shaped, grey-blue or olive coloured</strong> → 36+ hours. Lyme transmission window has passed.</li>
          </ul>
          <p>If the tick is engorged, call your vet and mention it. If it&rsquo;s flat and small, you almost certainly caught it in time.</p>

          <h2>Step 3: Remove the Tick</h2>
          <p>See our detailed <Link href="/blog/how-to-remove-tick-from-dog-ontario">step-by-step removal guide</Link> for the exact technique. The short version: tweezers at the head, pull straight up, save the tick in a bag, clean the bite, wash your hands.</p>

          <h2>Step 4: Note the Date and Location</h2>
          <p>Write down the date you found the tick and where on your dog&rsquo;s body it was attached. If your dog develops symptoms in the next 5 months, your vet will want this information. Lyme disease symptoms in dogs typically appear <strong>2 to 5 months after the bite</strong> — not immediately.</p>

          <h2>Step 5: Watch for Symptoms (For 5 Months)</h2>
          <p>Most tick bites are uneventful. But if Lyme disease was transmitted, you may see one or more of these symptoms in the months that follow:</p>
          <ul>
            <li><strong>Lameness</strong> that shifts from one leg to another (the most common Lyme sign in dogs)</li>
            <li>Lethargy and reduced energy</li>
            <li>Loss of appetite</li>
            <li>Fever</li>
            <li>Swollen lymph nodes (under the jaw or behind the knee)</li>
            <li>Joint stiffness or reluctance to jump on furniture</li>
          </ul>
          <p>If any of these appear, see your vet and mention the tick. A 4DX SNAP test takes 8 minutes and screens for Lyme, ehrlichiosis, anaplasmosis, and heartworm.</p>

          <h2>Should You Take the Tick to a Vet or Lab?</h2>
          <p>Two free options exist in Ontario:</p>
          <ol>
            <li><strong>eTick.ca</strong> — submit a photo of the tick. Bishop&rsquo;s University identifies the species and tells you if it&rsquo;s a Lyme-carrier (blacklegged). Free, takes 1–3 days.</li>
            <li><strong>Public Health Ontario</strong> — accepts physical tick submissions through public health units in some regions.</li>
          </ol>
          <p>However: knowing the tick was a blacklegged species does NOT mean Lyme was transmitted. Only 10–30% of blacklegged ticks in Ontario actually carry the bacterium, and most attached ticks are removed before transmission. The most reliable approach is monitoring your dog and testing if anything unusual develops.</p>

          <h2>How to Stop Finding More Ticks on Your Dog</h2>
          <p>Finding one tick usually means there are more in your dog&rsquo;s environment. The four-layer prevention strategy:</p>
          <ol>
            <li><strong>Vet-prescribed monthly preventative</strong> (oral like Bravecto, Simparica, NexGard or topical like K9 Advantix). These kill ticks before they can transmit disease.</li>
            <li><strong>Daily tick checks</strong> after walks. Ears, armpits, paws, tail base, neck.</li>
            <li><strong>Yard maintenance</strong>: short grass, no leaf litter at lawn edges, 3-foot gravel barrier between lawn and woods.</li>
            <li><strong>Professional yard tick spray</strong>: <Link href="/tick-control">BuzzSkito&rsquo;s 5-spray season program</Link> targets the leaf-litter and lawn-edge zones where 95%+ of ticks live. Most customers stop finding ticks within 2 weeks of the first treatment.</li>
          </ol>

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/how-to-remove-tick-from-dog-ontario">Detailed Tick Removal Step-by-Step</Link></li>
            <li><Link href="/blog/lyme-disease-tick-prevention-ontario">Lyme Disease Prevention</Link></li>
            <li><Link href="/blog/tick-bite-symptoms-what-to-do-ontario">Tick Bite Symptoms</Link></li>
            <li><Link href="/blog/spring-tick-season-ontario">Spring Tick Season in Ontario</Link></li>
            <li><Link href="/blog/lyme-disease-risk-areas-ontario-2026">Ontario Lyme Risk Areas Map</Link></li>
          </ul>
        </div>
      </article>

      <CTASection heading="One Tick Today. How Many Tomorrow?" subtext="Most homeowners who find a tick on their dog find another within 2 weeks. Get tick barrier spray for your yard — from $99." variant="dark" />
    </>
  )
}
