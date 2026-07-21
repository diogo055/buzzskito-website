import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import AuthorByline from '@/components/AuthorByline'
import BuyLink from '@/components/BuyLink'
import TopPick from '@/components/TopPick'
import FreshnessStamp from '@/components/FreshnessStamp'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'

const SLUG = 'how-to-do-a-tick-check'
const DATE = '2026-07-12'
const UPDATED = '2026-07-12'
const TITLE = 'How to Do a Tick Check: Full-Body Checklist (Ontario)'

const FAQS = [
  {
    question: 'How do you do a proper tick check?',
    answer: 'Do a full-body tick check within two hours of coming indoors. Undress and, using a mirror and good light, run your fingers over every part of your body feeling for a tiny bump the size of a poppy seed or sesame seed. Check the hidden, warm spots first — in and around the hair and scalp, behind and inside the ears, the back of the neck, under the arms, inside the belly button, around the waist, the groin, and behind the knees. A shower right after also helps rinse off unattached ticks and gives you a reason to check.',
  },
  {
    question: 'Where do ticks hide on the body?',
    answer: 'Ticks crawl upward and settle in warm, moist, hidden folds of skin. The most common attachment spots are the scalp and hairline, behind and inside the ears, the back of the neck, the armpits, inside the belly button, around the waistband, the groin and between the legs, and behind the knees. On children, check the head, neck, and behind the ears especially carefully because kids are shorter and ticks reach those areas more easily.',
  },
  {
    question: 'How long do I have to find a tick before it transmits disease?',
    answer: 'In Ontario, a blacklegged (deer) tick generally must stay attached for about 24 to 36 hours before it can transmit the bacteria that cause Lyme disease. That window is exactly why a same-day tick check works so well — a tick that has just latched on has usually not fed long enough to pass anything on. Finding and removing it within 24 hours dramatically lowers your risk. Check the Government of Canada Lyme disease resource for current guidance.',
  },
  {
    question: 'How do I check my kids for ticks?',
    answer: 'Make it part of the routine after any time in grass or woods. Have the child undress and check the whole body, paying extra attention to the scalp and hairline, behind and inside the ears, the back of the neck, the armpits, the belly button, and behind the knees — the spots ticks reach fastest on a smaller body. Use your fingertips to feel for a tiny bump, and use a bright light. Turning it into a quick, calm game (a "tick patrol") keeps kids from being frightened while still getting a thorough look.',
  },
  {
    question: 'How do I check my dog for ticks?',
    answer: 'Run your hands slowly over your dog\'s whole body, pressing gently to feel for small bumps. Concentrate on the ears and inside the ear flaps, around the eyes and muzzle, under the collar, the armpits and groin, between the toes, and under the tail. Long or thick coats hide ticks, so part the fur and look at the skin. Ask your veterinarian about tick-prevention products for pets — the product a dog uses is different from what people use, so never apply human repellents to pets.',
  },
  {
    question: 'What should I do if I find a tick attached?',
    answer: 'Remove it promptly. Use fine-tipped tweezers or a dedicated tick-removal tool to grip the tick as close to the skin as possible, then pull straight up with steady, even pressure — do not twist, jerk, or crush it. Clean the bite and your hands with soap and water or rubbing alcohol. Do not use petroleum jelly, nail polish, or a hot match; those old methods can make the tick release more saliva. Note the date, and watch the bite for 30 days for an expanding rash or flu-like symptoms.',
  },
  {
    question: 'Should I do a tick check after every time outside?',
    answer: 'Do a full check after any time spent in tall grass, leaf litter, brush, or wooded areas — the places ticks quest. For a quick walk on a mowed lawn or paved path the risk is lower, but a fast look at the lower legs, waistband, and hairline is still worthwhile in tick season (roughly April through November in Ontario). During peak months, a daily check after outdoor time is the single most reliable way to prevent tick-borne illness.',
  },
  {
    question: 'Can ticks be too small to see?',
    answer: 'Nymph-stage blacklegged ticks are only about the size of a poppy seed, so they are easy to miss — which is why so many tick checks rely on touch as much as sight. Run your fingertips slowly over the skin; a nymph feels like a tiny new freckle or scab that was not there before. Good lighting, a hand mirror for hard-to-see areas, and a shower right after coming inside all make small ticks far easier to catch.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: 'How to Do a Tick Check: Full-Body Checklist (Ontario 2026)',
  description: 'A step-by-step full-body tick check: where ticks hide (scalp, ears, armpits, groin, behind knees), how to check kids and pets, your after-hike routine, and what to do if you find one attached.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

export default function HowToDoATickCheckPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'A full-body tick-check checklist for people, kids, and pets in Ontario.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'How to Do a Tick Check', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-amber-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">How to Do a Tick Check</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">A full-body checklist for you, your kids, and your pets — plus exactly what to do if you find one attached.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      {/* Quick Answer — AI-extraction block */}
      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">To do a tick check, undress within two hours of coming indoors and, using a mirror and good light, feel over your whole body for a bump the size of a poppy seed &mdash; checking the scalp, ears, neck, armpits, belly button, waist, groin, and behind the knees. If you find one attached, grip it close to the skin with fine-tipped tweezers and pull straight out.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>In Ontario, a blacklegged (deer) tick generally must stay attached about 24 to 36 hours before it can transmit Lyme disease bacteria, per the CDC and Government of Canada.</li>
              <li>Nymph-stage ticks are only about the size of a poppy seed, so check by touch as much as by sight.</li>
              <li>Ticks crawl upward and settle in warm folds &mdash; scalp and hairline, behind the ears, neck, armpits, belly button, waistband, groin, and behind the knees.</li>
              <li>Tumble-drying clothes on high heat for 10 minutes kills ticks still on the fabric before they reach skin.</li>
              <li>Remove an attached tick by pulling straight up with fine-tipped tweezers &mdash; do not twist, crush, or use petroleum jelly, nail polish, or a lit match.</li>
              <li>Watch the bite for 30 days and see a doctor if an expanding rash, fever, or joint aches appear.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito, GTA mosquito &amp; tick control &middot; 150+ five-star Google reviews</p>
          </div>
        </div>
      </section>

      {/* Where-to-check table */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Where to Check for Ticks: Full-Body Map</h2>
          <div className="rounded-xl border border-gray-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-brand-50">
                <tr>
                  <th className="px-3 py-2 text-left">Body area</th>
                  <th className="px-3 py-2 text-left">Why ticks go there</th>
                  <th className="px-3 py-2 text-left">How to check</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Scalp & hairline', 'Warm, dense, easy to miss in hair', 'Part hair in sections; feel with fingertips'],
                  ['In & behind the ears', 'Sheltered, moist skin folds', 'Check the ear canal rim and behind the lobe'],
                  ['Back of the neck', 'Common landing spot after climbing', 'Use a hand mirror or ask someone to look'],
                  ['Underarms (armpits)', 'Warm, humid, hidden', 'Raise each arm and inspect the fold'],
                  ['Belly button', 'Deep fold, often overlooked', 'Look inside with good light'],
                  ['Waist & beltline', 'Ticks stop where clothing is snug', 'Run fingers along the waistband line'],
                  ['Groin & between legs', 'Warmest, most sheltered area', 'Check carefully — a frequent attachment site'],
                  ['Behind the knees', 'Skin fold that traps crawling ticks', 'Bend the knee and inspect the crease'],
                  ['Between the toes & ankles', 'Where ticks first board from grass', 'Check socks line and between toes'],
                ].map(([area, why, how]) => (
                  <tr key={area} className="border-t border-gray-100 align-top">
                    <td className="px-3 py-2 font-semibold text-brand-800">{area}</td>
                    <td className="px-3 py-2 text-gray-700">{why}</td>
                    <td className="px-3 py-2 text-gray-700">{how}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">Attachment sites and the 24-hour transmission window per the <a href="https://www.cdc.gov/ticks/" target="_blank" rel="noopener" className="underline hover:text-brand-700">U.S. Centers for Disease Control and Prevention (CDC) — Ticks</a> and the <a href="https://www.canada.ca/en/public-health/services/diseases/lyme-disease.html" target="_blank" rel="noopener" className="underline hover:text-brand-700">Government of Canada — Lyme disease</a>.</p>
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />

          <AffiliateDisclosure />

          <h2>Why the Tick Check Matters So Much</h2>
          <p>A tick check is the last and most reliable line of defence against tick-borne illness. In Ontario the tick that matters most is the blacklegged tick (also called the deer tick), the species that can carry the bacteria responsible for Lyme disease. What makes the check so powerful is timing: a blacklegged tick generally has to stay attached for roughly <strong>24 to 36 hours</strong> before it can transmit anything. A tick you find and remove the same day has almost always not fed long enough to pass on disease. In other words, a two-minute check tonight can prevent months of illness.</p>
          <p>The challenge is size. Adult ticks are about the size of a sesame seed, but the nymphs responsible for most Lyme cases are only as big as a poppy seed. That is why a good tick check is done as much by <strong>touch</strong> as by sight — you are feeling for a tiny bump that was not there this morning.</p>

          <h2>Step-by-Step: The Full-Body Tick Check</h2>
          <p>Do this within two hours of coming inside, ideally right before or during a shower:</p>
          <ol>
            <li><strong>Toss your clothes in a hot dryer.</strong> Ten minutes on high heat kills any ticks still on your clothing before they find you.</li>
            <li><strong>Undress in a well-lit room</strong> and grab a full-length mirror plus a hand mirror for the spots you cannot see.</li>
            <li><strong>Start at the head.</strong> Run your fingers through your hair and over your scalp and hairline, then check behind and inside the ears and the back of the neck.</li>
            <li><strong>Work downward.</strong> Underarms, belly button, waistband and beltline, then the groin and between the legs — the warm, hidden folds ticks prefer.</li>
            <li><strong>Finish at the legs and feet.</strong> Behind the knees, down the shins, around the ankles and sock line, and between the toes.</li>
            <li><strong>Shower.</strong> A shower within two hours rinses off unattached ticks and gives you a natural moment to feel for anything new.</li>
          </ol>

          <h2>Checking Kids</h2>
          <p>Children are closer to the ground and often the first in the household to pick up a tick, so make the check part of the after-outdoors routine. Look over the whole body, but spend extra time on the <strong>scalp and hairline, behind and inside the ears, the back of the neck, the armpits, the belly button, and behind the knees</strong> — the areas a tick reaches quickest on a smaller frame. Keeping it light (a quick &ldquo;tick patrol&rdquo;) helps kids stay calm while you get a thorough look. Use your fingertips and a bright light, since a nymph can look like nothing more than a new freckle.</p>

          <h2>Checking Dogs and Cats</h2>
          <p>Pets bring ticks indoors, so they need a check too. Slowly run your hands over the whole animal, pressing gently to feel for bumps under the fur. Concentrate on the <strong>ears and inside the ear flaps, around the eyes and muzzle, under the collar, the armpits and groin, between the toes, and under the tail</strong>. Part thick coats to see the skin. Talk to your veterinarian about tick-prevention products made for pets — and never apply human repellents to animals.</p>

          <aside aria-label="Professional tick control" className="not-prose my-8 rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-white p-6 sm:p-7 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-extrabold text-brand-900 mb-2 leading-tight">The best tick check is the one you never need</h3>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">Ticks quest from lawn edges, leaf litter, and shaded borders. A seasonal barrier spray removes them where they wait, so far fewer ever reach you. BuzzSkito protects GTA yards with tick programs and single treatments from $99.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/tick-control" className="btn-primary-sm">Explore Tick Control →</Link>
              <a href="tel:+12892165030" className="font-bold text-brand-800 hover:text-brand-600 transition-colors">(289) 216-5030</a>
            </div>
          </aside>

          <h2>Your After-Hike Routine (In Order)</h2>
          <ol>
            <li><strong>Before you go:</strong> tuck pants into socks, wear light colours so ticks show up, and treat footwear and pant legs with permethrin. Use a DEET or icaridin (picaridin) repellent on exposed skin.</li>
            <li><strong>Leaving the trail:</strong> do a quick visual sweep of your lower legs, waistband, and each other in the group.</li>
            <li><strong>Reaching the car:</strong> brush off pants and check the seats — do not carry a hitchhiker home.</li>
            <li><strong>Within two hours home:</strong> clothes in the hot dryer, then a shower and the full-body check above.</li>
            <li><strong>Check your gear and pets:</strong> backpacks, blankets, and the dog all catch ticks that later crawl onto people.</li>
          </ol>

          <h2>What to Do If You Find a Tick Attached</h2>
          <p>Do not panic and do not use old folk remedies (petroleum jelly, nail polish, or a lit match) — those can make the tick release more saliva and raise your risk. Instead, remove it promptly and cleanly:</p>
          <ol>
            <li>Grip the tick as close to the skin as possible with <strong>fine-tipped tweezers</strong> or a dedicated <Link href="/blog/tick-removal-tool-guide">tick-removal tool</Link>.</li>
            <li>Pull <strong>straight up</strong> with steady, even pressure. Do not twist or jerk — that can leave mouthparts behind.</li>
            <li>Clean the bite area and your hands with soap and water or rubbing alcohol.</li>
            <li>Note the date. If you can, save the tick in a sealed bag or take a clear photo — it helps if symptoms appear.</li>
            <li>Watch the bite for 30 days. See a doctor if you develop an expanding (often bull&rsquo;s-eye) rash, fever, fatigue, or joint aches.</li>
          </ol>
          <p>Keeping a proper tool by the door makes removal quick and clean when it counts. <BuyLink search="tick removal tool tweezers">Check tick-removal tools on Amazon.ca →</BuyLink></p>

          <TopPick
            label="Our Top Pick"
            name="Fine-Tipped Tick-Removal Tool"
            blurb="A dedicated tick tool grips right at the skin and lifts the whole tick out cleanly — the single most useful thing to keep by the door in tick season, so you are never improvising with fingernails at the moment it matters."
            search="tick removal tool tweezers"
            score={8.7}
            pros={['Grips close to the skin to avoid leaving mouthparts', 'Removes even poppy-seed-sized nymphs', 'Compact — lives by the door or in a pack']}
            cons={['Fine tips can bend if forced', 'Still need soap or alcohol to clean the bite after']}
          />

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/tick-removal-tool-guide">Tick Removal Tool Guide — Best Tools + How to Use Them</Link></li>
            <li><Link href="/blog/how-to-keep-ticks-out-of-yard-ontario">How to Keep Ticks Out of Your Yard (Ontario)</Link></li>
            <li><Link href="/blog/what-ticks-look-like-ontario">What Ticks Look Like in Ontario</Link></li>
            <li><Link href="/blog/tick-season-ontario-when-are-ticks-active">Tick Season in Ontario — When Ticks Are Active</Link></li>
            <li><Link href="/blog/are-ticks-dangerous-ontario">Are Ticks Dangerous in Ontario?</Link></li>
            <li><Link href="/tick-control">BuzzSkito Tick Control Service</Link></li>
          </ul>
        </div>
      </article>

      <CTASection heading="Fewer Ticks in the Yard Means Fewer Tick Checks" subtext="A seasonal barrier spray removes ticks where they wait — lawn edges, leaf litter, and shaded borders. From $99." variant="dark" />
    </>
  )
}
