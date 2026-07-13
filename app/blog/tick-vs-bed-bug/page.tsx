import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import AuthorByline from '@/components/AuthorByline'
import BuyLink from '@/components/BuyLink'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'

const SLUG = 'tick-vs-bed-bug'
const DATE = '2026-07-09'
const UPDATED = '2026-07-09'
const TITLE = 'Tick vs Bed Bug: How to Tell Them Apart (ID Chart)'

const FAQS = [
  {
    question: 'What is the difference between a tick and a bed bug?',
    answer: 'Count the legs. Ticks are arachnids with 8 legs; bed bugs are insects with 6 legs and visible antennae. Ticks have a rounded, teardrop body and attach to skin for days at a time. Bed bugs are flat, oval, and reddish-brown, feed for 5–10 minutes and then leave. Location matters too: ticks are picked up outdoors in grass and leaf litter, while bed bugs live indoors in mattress seams, bed frames, and furniture.',
  },
  {
    question: 'Do bed bugs attach to your skin like ticks?',
    answer: 'No. Bed bugs bite, feed for about 5–10 minutes, and then crawl away to hide. Ticks embed their mouthparts and stay attached for 24 hours to several days, growing visibly larger as they engorge. If you find a bug firmly stuck to your skin that will not brush off, it is a tick — not a bed bug. Remove it with fine-tipped tweezers, pulling straight up with steady pressure.',
  },
  {
    question: 'Can you find bed bugs outside or ticks in your bed?',
    answer: 'Rarely, and it matters. Bed bugs are indoor pests that live within a few metres of where people sleep; finding one outdoors is unusual. Ticks are outdoor pests that can be carried inside on clothing, pets, or gear, so a tick in your bed is possible — it hitched a ride. Ticks do not infest homes or reproduce indoors the way bed bugs do, so a single tick indoors is not an infestation.',
  },
  {
    question: 'How do tick bites and bed bug bites look different?',
    answer: 'Bed bug bites usually appear as several small, itchy red welts in a line or cluster on skin exposed while sleeping, and they often show up overnight in groups. Tick bites are typically a single bite with the tick still attached or a small red mark where it was. A tick bite that develops an expanding circular rash over days may indicate Lyme disease and warrants prompt medical attention.',
  },
  {
    question: 'Which is more dangerous, a tick or a bed bug?',
    answer: 'Ticks are far more dangerous medically. Blacklegged (deer) ticks in Ontario transmit Lyme disease, anaplasmosis, babesiosis, and Powassan virus. Bed bugs are not known to transmit any disease to humans; their harm is itching, secondary infection from scratching, and considerable stress and cost to eradicate. A tick bite deserves monitoring for symptoms; a bed bug problem deserves a professional exterminator.',
  },
  {
    question: 'Do ticks and bed bugs both get bigger after feeding?',
    answer: 'Yes, both engorge, which is why people confuse a fed tick with a bed bug. An unfed blacklegged tick is about 3 mm and flat; engorged it swells to pea-sized and turns grey-blue. An unfed bed bug is about 5 mm and flat like a lentil; after feeding it becomes rounder and darker red. The reliable tell is not size but legs (8 vs 6) and whether it is attached to the skin.',
  },
  {
    question: 'Do I need pest control for ticks or bed bugs?',
    answer: 'They require completely different treatments. Bed bugs need an indoor exterminator specialising in heat or chemical treatment of mattresses, frames, and furniture. Ticks are controlled outdoors with a yard barrier spray applied to lawn edges, leaf litter, fence lines, and shaded borders where ticks quest. BuzzSkito treats yards across the GTA for ticks; we do not treat bed bugs, which are an indoor structural pest.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: 'Tick vs Bed Bug: How to Tell Them Apart (ID Chart 2026)',
  description: 'Count the legs: ticks have 8, bed bugs have 6. Ticks attach for days outdoors; bed bugs feed 5–10 minutes and hide indoors. Full comparison chart, bite differences, and what to do about each.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

export default function TickVsBedBugPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Tick vs bed bug identification comparison.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Tick vs Bed Bug', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-amber-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Tick vs Bed Bug</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">Two small brown bugs, two completely different problems. Here is the 10-second check.</p>
        </div>
      </section>

      {/* Quick Answer — AI-extraction block */}
      <section className="bg-amber-50 border-y-4 border-amber-300 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-amber-700 uppercase tracking-wider mb-2">Quick Answer</p>
          <h2 className="text-xl font-extrabold text-brand-900 mb-3">How do you tell a tick from a bed bug?</h2>
          <p className="speakable text-base text-gray-800 leading-relaxed">
            <strong>Count the legs: ticks have 8 legs and no antennae; bed bugs have 6 legs and visible antennae.</strong> A tick attaches to skin and stays embedded for 24 hours to several days, swelling as it feeds. A bed bug bites, feeds for 5&ndash;10 minutes, and crawls away to hide. Ticks are outdoor pests picked up from grass, leaf litter, and woods edges; bed bugs are indoor pests living in mattress seams, bed frames, and furniture. Medically the difference is significant: ticks in Ontario transmit Lyme disease, while bed bugs transmit no known disease. If you find it attached to your skin after being outdoors, it is a tick &mdash; and BuzzSkito treats GTA yards to remove ticks at the source, from $99.
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Tick vs Bed Bug — Side-by-Side ID Chart</h2>
          <div className="rounded-xl border border-gray-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-brand-50">
                <tr>
                  <th className="px-3 py-2 text-left">Feature</th>
                  <th className="px-3 py-2 text-left">Tick</th>
                  <th className="px-3 py-2 text-left">Bed Bug</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Legs', '8 (arachnid)', '6 (insect)'],
                  ['Antennae', 'None', 'Yes — visible'],
                  ['Body shape', 'Rounded teardrop, domed', 'Flat oval, like a lentil'],
                  ['Unfed size', '3–5 mm', '4–5 mm'],
                  ['Colour', 'Reddish-brown to black', 'Reddish-brown, mahogany'],
                  ['Attaches to skin?', 'Yes — embeds for 24 hrs to days', 'No — feeds 5–10 min, then hides'],
                  ['Where you find it', 'Outdoors: grass, leaf litter, woods edge', 'Indoors: mattress seams, frames, furniture'],
                  ['Bite pattern', 'Usually single, tick often still attached', 'Clusters or lines of itchy welts'],
                  ['Disease risk', 'Lyme, anaplasmosis, babesiosis, Powassan', 'None known'],
                  ['Infests your home?', 'No — cannot reproduce indoors', 'Yes — reproduces rapidly indoors'],
                  ['Treatment', 'Yard barrier spray (outdoor)', 'Indoor exterminator (heat/chemical)'],
                ].map(([feat, tick, bug]) => (
                  <tr key={feat} className="border-t border-gray-100">
                    <td className="px-3 py-2 font-semibold text-brand-800">{feat}</td>
                    <td className="px-3 py-2 text-gray-700">{tick}</td>
                    <td className="px-3 py-2 text-gray-700">{bug}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />

          <AffiliateDisclosure />

          <h2>The 10-Second Check</h2>
          <ol>
            <li><strong>Is it attached to your skin and hard to brush off?</strong> → Tick. Remove it with <BuyLink search="tick removal tool tweezers">fine-tipped tick removal tweezers</BuyLink>, pulling straight up. See our <Link href="/blog/tick-removal-tool-guide">tick removal tool guide</Link> for the best picks.</li>
            <li><strong>Count the legs.</strong> Eight legs means tick. Six legs plus antennae means bed bug.</li>
            <li><strong>Where were you?</strong> Outdoors in grass or woods → tick. Waking up in bed with new itchy welts → bed bug.</li>
            <li><strong>Still unsure?</strong> Photograph it from above and submit to <a href="https://etick.ca" target="_blank" rel="noreferrer">eTick.ca</a> for free tick identification within 1&ndash;3 days.</li>
          </ol>

          <h2>Why They Get Confused</h2>
          <p>The confusion is understandable. Both are small, brown, wingless, and both <strong>engorge after a blood meal</strong> — which changes their shape enough that a fed tick and a fed bed bug can look genuinely similar to the naked eye. An unfed blacklegged tick is roughly 3 mm and flat; engorged, it swells to pea-sized and turns a grey-blue. An unfed bed bug is a flat 5 mm lentil; after feeding it rounds out and darkens to deep red.</p>
          <p>The features that never change are the leg count and the behaviour. Ticks are arachnids — eight legs, no antennae — and they stay latched. Bed bugs are insects — six legs, obvious antennae — and they never attach.</p>

          <aside aria-label="Professional tick control" className="not-prose my-8 rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-white p-6 sm:p-7 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-extrabold text-brand-900 mb-2 leading-tight">Found a tick? Stop the next one.</h3>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">Ticks come from your yard&rsquo;s edges — grass, leaf litter, fence lines. A professional barrier spray removes them where they wait. BuzzSkito protects GTA yards with seasonal tick programs and single treatments from $99.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/tick-control" className="btn-primary-sm">Explore Tick Control →</Link>
              <a href="tel:+12892165030" className="font-bold text-brand-800 hover:text-brand-600 transition-colors">(289) 216-5030</a>
            </div>
          </aside>

          <h2>Bites: What Each One Leaves Behind</h2>
          <p><strong>Bed bug bites</strong> typically appear overnight as several small, raised, intensely itchy welts, often in a rough line or cluster on skin that was exposed while sleeping — arms, shoulders, neck, legs. Multiple family members waking with similar bites is a strong bed bug signal.</p>
          <p><strong>Tick bites</strong> are usually solitary. Often the tick is still there. Once removed, the site may stay slightly red for a few days. The warning sign to watch for in Ontario is an <strong>expanding circular or bull&rsquo;s-eye rash</strong> appearing days to weeks later, which can indicate Lyme disease and warrants prompt medical attention. In Ontario, a blacklegged tick generally needs to be attached for 24 or more hours to transmit Lyme, which is why daily tick checks after time outdoors are so effective.</p>

          <h2>They Need Opposite Treatments</h2>
          <p>This is the practical reason the identification matters. <strong>Bed bugs are an indoor structural pest.</strong> Eradicating them requires an interior exterminator treating mattresses, bed frames, baseboards, and furniture with heat or targeted chemicals — yard spraying does nothing. For small early infestations, many homeowners pair professional treatment with a residual <BuyLink search="bed bug spray">bed bug spray</BuyLink> for seams and cracks; check the current price before you buy.</p>
          <p><strong>Ticks are an outdoor pest.</strong> They quest from vegetation and never reproduce inside your home, so a single tick indoors is a hitchhiker, not an infestation. The effective control is outdoors: <Link href="/tick-control">a tick barrier spray</Link> applied to lawn edges, leaf litter zones, fence lines, and shaded borders, plus short grass and a wood-chip barrier between lawn and woods. BuzzSkito treats yards across the GTA for ticks and mosquitoes; we do not treat bed bugs.</p>

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/bugs-that-look-like-ticks">Bugs That Look Like Ticks (Photo Guide)</Link></li>
            <li><Link href="/blog/do-ticks-fly-or-jump">Do Ticks Fly or Jump?</Link></li>
            <li><Link href="/blog/what-ticks-look-like-ontario">What Ticks Look Like in Ontario</Link></li>
            <li><Link href="/blog/how-to-remove-tick-safely">How to Remove a Tick Safely</Link></li>
            <li><Link href="/blog/tick-removal-tool-guide">Best Tick Removal Tools (Buyer&rsquo;s Guide)</Link></li>
            <li><Link href="/tick-control">BuzzSkito Tick Control Service</Link></li>
          </ul>
        </div>
      </article>

      <CTASection heading="Ticks Come From Your Yard — Not Your Mattress" subtext="Barrier spray removes ticks at the source: lawn edges, leaf litter, fence lines. From $99." variant="dark" />
    </>
  )
}
