import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import BuyLink from '@/components/BuyLink'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import FreshnessStamp from '@/components/FreshnessStamp'
import AuthorByline from '@/components/AuthorByline'
import TopPick from '@/components/TopPick'
import StickyBuyBar from '@/components/StickyBuyBar'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { TICK_BLOGS } from '@/lib/constants'
import { tagForSlug } from '@/lib/amazon-clusters'

const POST = TICK_BLOGS.supporting[1]
const UPDATED = '2026-07-12'

export const metadata: Metadata = buildMetadata({
  title: 'Tick Identification Ontario: 3 Species + Sizes',
  description:
    'Tick identification in Ontario: blacklegged, American dog and lone star ticks by colour, field marks and size in mm — and which one actually carries Lyme.',
  canonical: `/blog/${POST.slug}`,
  type: 'article',
  publishedTime: POST.date,
})

const FAQS = [
  { question: 'How small is a deer tick nymph?', answer: 'A blacklegged tick nymph is approximately 1–1.5 mm — roughly the size of a poppy seed. They are extremely difficult to spot on skin, hair, or clothing, which is why they are responsible for the majority of Lyme disease transmissions in Ontario. Adults are larger (3–5 mm) and somewhat easier to detect.' },
  { question: 'What does a blacklegged tick look like compared to a dog tick?', answer: 'The blacklegged tick (deer tick) is smaller and has a distinctive reddish-orange body with black legs and a black scutum (shield) behind the head on females. The American dog tick is larger, with a mottled brown/cream pattern. After feeding, both species become significantly larger and more round — an engorged blacklegged tick can reach the size of a raisin.' },
  { question: 'Can I tell if a tick is carrying Lyme disease by looking at it?', answer: 'No. You cannot determine whether a tick is infected with Lyme disease or other pathogens by visual inspection alone. If you\'re concerned about a tick bite, contact your healthcare provider. Some provinces offer tick testing services; check with your local public health unit.' },
  { question: 'What does a tick look like to the naked eye?', answer: 'A tick looks like a small, flat, oval, eight-legged bug — closer to a tiny spider than an insect. Unfed adults are 3–5 mm (sesame-seed size); nymphs are 1–2 mm (poppy-seed size); larvae are under 1 mm with only six legs. After feeding, a tick swells, rounds out, and turns grey-blue, reaching up to 10 mm — about the size of a small raisin or grape. They have no wings and do not jump or fly.' },
  { question: 'How can I tell a deer tick from a dog tick?', answer: 'Colour, size, and pattern. The blacklegged (deer) tick is small (3–5 mm) with a plain reddish-orange body, a solid black shield, and no markings — it is the main Lyme disease carrier. The American dog tick is larger (5 mm) with an ornamental mottled grey-and-white patterned shield and does not typically carry Lyme. If the tick has decorative markings on its back, it is almost certainly a dog tick. See our deer tick vs dog tick comparison for a full side-by-side.' },
  { question: 'What is the lone star tick and how do I identify it?', answer: 'The lone star tick (Amblyomma americanum) is reddish-brown, and adult females have a single bright white or silver dot — the "lone star" — in the centre of the back. It is an emerging species in southwestern Ontario and is still rare in the GTA. It does not transmit Lyme disease but is associated with alpha-gal syndrome (a red-meat allergy) and ehrlichiosis.' },
  { question: 'What tool should I use to remove a tick?', answer: 'Use fine-tipped tweezers or a purpose-built tick-removal tool (a Tick Twister-style hook or a tick key). Grasp the tick at the head, as close to the skin as possible, and pull straight up with steady, even pressure — do not twist, squeeze the body, or use heat, petroleum jelly, or nail polish. A dedicated tool slides under the head and gives the cleanest pull, which matters because a feeding nymph can be smaller than a sesame seed. Our tick-removal tool guide compares the options.' },
]

const AMZ_TAG = tagForSlug('what-ticks-look-like-ontario')

export default function WhatTicksLookLikePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: POST.title, description: POST.excerpt, slug: POST.slug, datePublished: POST.date })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Identify Ticks Ontario', url: `/blog/${POST.slug}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${POST.slug}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-amber-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Identify Ticks Ontario</span>
          </nav>
          <span className="bg-brand-800 text-brand-200 text-xs px-3 py-1 rounded-full mb-4 inline-block">Tick Control</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight">{POST.title}</h1>
          <p className="text-brand-300 text-sm">Published {new Date(POST.date).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })} · Updated July 2026 · By BuzzSkito</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12 prose-brand">
        <AuthorByline datePublished={POST.date} dateModified={UPDATED} />
        <div className="not-prose bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
          <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
          <p className="text-base text-gray-800 leading-relaxed">
            <strong>A tick looks like a small, flat, eight-legged spider — 3–5 mm long (sesame-seed size) before feeding and swelling to 10 mm when engorged.</strong> The blacklegged (deer) tick is reddish-orange with a solid black shield; the American dog tick is larger with an ornamental mottled grey pattern; the lone star tick is reddish-brown with one white dot. Larvae have 6 legs; nymphs and adults have 8.
          </p>
          <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
            <li>An unfed adult tick is 3&ndash;5 mm (sesame-seed size) and swells to about 10 mm when fully engorged.</li>
            <li>A blacklegged (deer) tick nymph is only 1&ndash;1.5 mm &mdash; poppy-seed size &mdash; and nearly impossible to spot without magnification.</li>
            <li>The blacklegged tick is reddish-orange with a solid black scutum and is Ontario&rsquo;s primary Lyme carrier.</li>
            <li>The American dog tick is larger (females about 5 mm) with white or cream mottled markings and does not transmit Lyme.</li>
            <li>The lone star tick is reddish-brown with a single white dot and is emerging in southwestern Ontario.</li>
            <li>Tick larvae have 6 legs; nymphs and adults have 8 legs.</li>
          </ul>
          <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito, GTA mosquito &amp; tick control &middot; 150+ five-star Google reviews</p>
        </div>
        <p className="text-lg text-gray-600 not-prose border-l-4 border-amber-400 pl-5 py-2 mb-8">
          Knowing what ticks look like — and how small they can be — is the first step in protecting your family. Part of our <Link href={`/blog/${TICK_BLOGS.pillar.slug}`} className="text-brand-700 underline">Ultimate Tick Control Guide for Ontario Homeowners</Link>.
        </p>

        <h2>The Three Ticks Ontario Homeowners Need to Know</h2>

        <h3>1. Blacklegged Tick (Deer Tick) — <em>Ixodes scapularis</em></h3>
        <p><strong>Why it matters:</strong> The primary carrier of Lyme disease in Ontario. Population is established and expanding across Southern Ontario.</p>
        <p><strong>Identification:</strong></p>
        <ul>
          <li><strong>Nymph:</strong> ~1–1.5 mm (poppy seed size). Translucent to light brown. 8 legs. Almost impossible to spot without magnification.</li>
          <li><strong>Adult female:</strong> ~3–4 mm unfed. Reddish-orange body with a black scutum (dorsal shield) and dark legs. After feeding: up to 10 mm, dark blue-grey.</li>
          <li><strong>Adult male:</strong> ~2–3 mm. Uniformly dark brown. Males feed less and are less commonly found attached to humans.</li>
        </ul>

        <h3>2. American Dog Tick — <em>Dermacentor variabilis</em></h3>
        <p><strong>Why it matters:</strong> Does not transmit Lyme disease, but can transmit Rocky Mountain Spotted Fever (rare in Ontario) and cause tick paralysis. Commonly found across GTA.</p>
        <p><strong>Identification:</strong></p>
        <ul>
          <li>Larger than blacklegged tick: females ~5 mm unfed, males ~3–4 mm</li>
          <li>Brown with distinctive white/cream mottled markings on the scutum (females) or across entire back (males)</li>
          <li>More likely to be found in open, grassy areas rather than wooded edges</li>
        </ul>

        <h3>3. Lone Star Tick — <em>Amblyomma americanum</em></h3>
        <p><strong>Why it matters:</strong> An emerging species in southwestern Ontario associated with warming temperatures. Can cause alpha-gal syndrome (red meat allergy).</p>
        <p><strong>Identification:</strong></p>
        <ul>
          <li>Medium-sized, reddish-brown</li>
          <li>Adult females have a distinctive single white or silver spot (the "lone star") in the centre of the back</li>
          <li>Currently rare in the GTA; more common in southwestern Ontario</li>
        </ul>

        <h2>Tick Species Comparison Chart</h2>
        <p>Use this at-a-glance table to tell the three ticks apart by colour, size, and — most importantly — whether they can transmit Lyme disease. For a deeper side-by-side, see our <Link href="/blog/deer-tick-vs-dog-tick-canada" className="text-brand-700 underline">deer tick vs dog tick comparison</Link>.</p>
        <div className="not-prose rounded-xl border border-brand-100 overflow-x-auto my-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-brand-50 text-left">
                <th className="px-4 py-2 font-bold text-brand-900">Species</th>
                <th className="px-4 py-2 font-bold text-brand-900">Colour &amp; field marks</th>
                <th className="px-4 py-2 font-bold text-brand-900">Adult unfed size</th>
                <th className="px-4 py-2 font-bold text-brand-900">Carries Lyme?</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Blacklegged / deer tick (Ixodes scapularis)', 'Reddish-orange body, solid black scutum (shield), black legs, no pattern', '3–5 mm (sesame seed)', 'YES — primary Lyme vector'],
                ['American dog tick (Dermacentor variabilis)', 'Brown with an ornamental mottled grey/white shield; long visible mouthparts', '5 mm (apple seed)', 'No (RMSF/tularemia, both rare)'],
                ['Lone star tick (Amblyomma americanum)', 'Reddish-brown; females have one bright white "lone star" dot on the back', '3–4 mm', 'No (alpha-gal syndrome, ehrlichiosis)'],
              ].map(([sp, marks, size, lyme]) => (
                <tr key={sp} className="border-t border-brand-100 align-top">
                  <td className="px-4 py-2 font-semibold text-brand-800">{sp}</td>
                  <td className="px-4 py-2 text-gray-700">{marks}</td>
                  <td className="px-4 py-2 text-gray-700">{size}</td>
                  <td className="px-4 py-2 text-gray-700">{lyme}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500">Species identification and field marks cross-referenced with the <a href="https://www.cdc.gov/ticks/" target="_blank" rel="noopener" className="text-brand-700 underline">CDC tick guide</a> and <a href="https://www.canada.ca/en/public-health/services/diseases/lyme-disease.html" target="_blank" rel="noopener" className="text-brand-700 underline">the Government of Canada&rsquo;s Lyme disease resource</a>.</p>

        <h2>Size Comparison: Why Nymphs Are So Dangerous</h2>
        <div className="not-prose bg-brand-50 border border-brand-100 rounded-2xl p-6 my-6">
          <h3 className="font-bold text-brand-900 mb-4 text-base">Blacklegged Tick Size Reference</h3>
          <div className="grid grid-cols-3 gap-4 text-center text-sm">
            {[
              { stage: 'Larva', size: '< 1 mm', ref: 'Period (.)' },
              { stage: 'Nymph', size: '~1.5 mm', ref: 'Poppy seed' },
              { stage: 'Adult (unfed)', size: '~3–4 mm', ref: 'Sesame seed' },
              { stage: 'Adult (fed)', size: 'Up to 10 mm', ref: 'Small raisin' },
            ].map(({ stage, size, ref }) => (
              <div key={stage} className="bg-white rounded-xl p-3 border border-brand-200">
                <div className="font-bold text-brand-900">{stage}</div>
                <div className="text-amber-700 font-semibold">{size}</div>
                <div className="text-gray-400 text-xs mt-1">{ref}</div>
              </div>
            ))}
          </div>
        </div>

        <h3>Tick Size by Life Stage (in mm)</h3>
        <p>Ticks grow through four stages, and each looks different. This is why a tick can look like anything from a fleck of dirt to a small grape depending on its age and whether it has fed:</p>
        <div className="not-prose rounded-xl border border-brand-100 overflow-x-auto my-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-brand-50 text-left">
                <th className="px-4 py-2 font-bold text-brand-900">Life stage</th>
                <th className="px-4 py-2 font-bold text-brand-900">Legs</th>
                <th className="px-4 py-2 font-bold text-brand-900">Size (blacklegged tick)</th>
                <th className="px-4 py-2 font-bold text-brand-900">Everyday comparison</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Larva', '6', '< 1 mm', 'Period at the end of a sentence'],
                ['Nymph', '8', '1–2 mm', 'Poppy seed'],
                ['Adult (unfed)', '8', '3–5 mm', 'Sesame seed'],
                ['Adult (engorged)', '8', 'Up to 10 mm', 'Small raisin or grape'],
              ].map(([stage, legs, size, ref]) => (
                <tr key={stage} className="border-t border-brand-100">
                  <td className="px-4 py-2 font-semibold text-brand-800">{stage}</td>
                  <td className="px-4 py-2 text-gray-700">{legs}</td>
                  <td className="px-4 py-2 text-amber-700 font-semibold">{size}</td>
                  <td className="px-4 py-2 text-gray-700">{ref}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500">Tip: a six-legged tick is a larva; nymphs and adults have eight legs. Larvae almost never carry Lyme, but nymphs — active in late spring and summer — cause most human infections precisely because they are so tiny.</p>
        <p>That leg count is more than a field mark. Eight legs, no wings, and no antennae are the reason <Link href="/blog/are-ticks-arachnids-or-insects" className="text-brand-700 underline">ticks are classified as arachnids rather than insects</Link> — which is also why bug zappers and CO₂ traps built for flying insects do nothing about them.</p>

        <h2>Found a Tick? Have the Right Removal Tool Ready</h2>
        <AffiliateDisclosure />
        <p>Because a feeding tick can be smaller than a sesame seed, a purpose-built removal tool that slides under the head gives a far cleaner pull than fingers. Fine-tipped tweezers, Tick Twister-style hooks, and tick keys all work — keep one in your first-aid kit and one in your car. <BuyLink tag={AMZ_TAG} search="tick removal tool tweezers">Check tick-removal tools on Amazon.ca &rarr;</BuyLink></p>
        <TopPick tag={AMZ_TAG}
          label="Our Top Pick"
          name="Tick Twister-style removal hook set"
          blurb="A curved hook slides under the tick's head and lifts it out with a gentle twist — no squeezing the body, which is what pushes pathogens back into the bite. The best keep-in-your-kit tool for the sesame-seed-sized adults and near-invisible nymphs this guide describes."
          search="tick twister removal tool"
          score={8.7}
          pros={['Grips at the head, so the body is never squeezed', 'Works on tiny nymphs and larger engorged adults', 'Cheap, reusable, and pocket-sized for the car or first-aid kit']}
          cons={['Very small — easy to misplace without a keyring loop', 'Fine-tipped tweezers are still handy as a backup']}
        />
        <p>Not sure which style to pick? Our <Link href="/blog/tick-removal-tool-guide" className="text-brand-700 underline">tick-removal tool guide</Link> compares fine-tipped tweezers, hooks, and tick keys so you have the right one before the next bite. Then follow our step-by-step <Link href="/blog/how-to-remove-tick-safely" className="text-brand-700 underline">safe tick-removal instructions</Link>.</p>

        <h2>Where Ticks Are Found in Ontario Yards</h2>
        <p>Knowing where to look is as important as knowing what to look for. Ticks concentrate at specific microhabitats:</p>
        <ul>
          <li><strong>Lawn/forest edge:</strong> The single most important zone — ticks quest (wait for hosts) on vegetation at the transition between maintained lawn and any naturalized area</li>
          <li><strong>Leaf litter and mulch beds:</strong> Ticks overwinter in leaf litter and emerge from these sites in spring</li>
          <li><strong>Woodpiles:</strong> Mice that carry Lyme disease live near woodpiles, and ticks cluster around these areas</li>
          <li><strong>Under decks and porches:</strong> Dark, humid zones that ticks use when conditions are dry or hot</li>
          <li><strong>Dense shrubs and ground cover:</strong> Ticks rest in humid vegetation between questing periods</li>
        </ul>

        <h2>Frequently Asked Questions</h2>
        <div className="not-prose space-y-3 my-6">
          {FAQS.map(({ question, answer }) => (
            <details key={question} className="bg-brand-50 rounded-xl border border-brand-100 group">
              <summary className="cursor-pointer px-5 py-4 font-semibold text-brand-900 list-none flex justify-between items-center">
                <span>{question}</span>
                <svg className="w-5 h-5 shrink-0 group-open:rotate-180 transition-transform text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <p className="px-5 pb-4 text-gray-600 text-sm">{answer}</p>
            </details>
          ))}
        </div>

        <h2>Related Guides</h2>
        <ul>
          <li><Link href={`/blog/${TICK_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{TICK_BLOGS.pillar.title}</Link></li>
          <li><Link href="/blog/deer-tick-vs-dog-tick-canada" className="text-brand-700 hover:underline">Deer Tick vs Dog Tick — Canada Comparison</Link></li>
          <li><Link href="/blog/tick-removal-tool-guide" className="text-brand-700 hover:underline">Best Tick-Removal Tools Compared</Link></li>
          <li><Link href="/blog/lyme-disease-tick-prevention-ontario" className="text-brand-700 hover:underline">Lyme Disease Prevention in Ontario</Link></li>
          <li><Link href="/blog/how-to-remove-tick-safely" className="text-brand-700 hover:underline">How to Remove a Tick Safely</Link></li>
          <li><Link href="/blog/tick-season-ontario-when-are-ticks-active" className="text-brand-700 hover:underline">When Are Ticks Active in Ontario?</Link></li>
          <li><Link href="/tick-control" className="text-brand-700 hover:underline">BuzzSkito Tick Control Services</Link></li>
        </ul>
      </article>

      <StickyBuyBar tag={AMZ_TAG} name="Tick Twister-style removal hook" search="tick twister removal tool" label="For removal" />

      <CTASection heading="Protect Your Yard from Ticks This Season" subtext="Professional tick spray kills ticks at all life stages. Free quote for your GTA property." variant="dark" />
    </>
  )
}
