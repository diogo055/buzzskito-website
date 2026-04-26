import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'

const SLUG = 'what-does-tick-look-like-on-dog'
const DATE = '2026-04-26'
const TITLE = 'What Does a Tick Look Like on a Dog? (Ontario Field Guide 2026)'

const FAQS = [
  {
    question: 'What does a tick on a dog look like?',
    answer: 'An unfed tick on a dog looks like a small, flat, oval-shaped bug — about the size of a sesame seed (1–3 mm). It has eight legs visible near the head end (this is how you tell it apart from insects like fleas, which have six). Colour varies: blacklegged ticks (the Lyme carrier) are reddish-brown with darker legs; American dog ticks are larger and have a mottled grey-brown patterned shield on the back. Once attached and feeding, ticks engorge with blood, becoming pea or grape-sized, grey-blue, or olive-coloured. Many owners initially mistake an engorged tick for a skin tag, mole, or wart.',
  },
  {
    question: 'How can I tell a tick from a skin tag on my dog?',
    answer: 'Three quick checks: (1) Look for legs — a tick will have visible legs at the base where it meets the skin; a skin tag won\'t. (2) Look for movement — gently part the fur and watch; a tick may move slightly, a skin tag won\'t. (3) Touch carefully — a tick has a hard, somewhat brittle body; a skin tag is soft and fleshy. If you\'re still unsure, gently nudge the bump with a Q-tip or fingernail. A tick is firmly attached but distinct from the skin; a skin tag is part of the skin itself. When in doubt, treat it as a tick and remove it carefully — there\'s no harm in removing a skin tag (you can\'t, actually — it stays put).',
  },
  {
    question: 'How can I tell a tick from a flea on my dog?',
    answer: 'Easy distinction: ticks are arachnids with 8 legs and don\'t move much; fleas are insects with 6 legs and jump aggressively. Fleas are smaller (1–4 mm), darker brown, narrow side-to-side, and very fast. Ticks are flatter, oval, larger when engorged, and stay attached to one spot. Fleas leave black "flea dirt" (digested blood) on the dog\'s skin. Ticks don\'t. If you part the fur and the bug is moving fast or jumping — flea. If it\'s stuck in one spot — tick.',
  },
  {
    question: 'What\'s the difference between a deer tick and a dog tick on my dog?',
    answer: 'Two key Ontario species: (1) Blacklegged tick (deer tick / Ixodes scapularis) — small (sesame-seed sized when unfed), reddish-brown body, dark legs, NO patterned shield. Carries Lyme disease, anaplasmosis. (2) American dog tick (Dermacentor variabilis) — larger (apple-seed sized), brown body, distinctive mottled grey-and-brown patterned shield (scutum) on the back. Generally does NOT carry Lyme but can transmit Rocky Mountain spotted fever (rare in Canada) and tularemia. The medically critical distinction: if it\'s small, plain, and reddish-black, treat as a potential Lyme carrier.',
  },
  {
    question: 'Where do ticks attach on a dog?',
    answer: 'Ticks prefer warm, hidden, hard-to-groom spots where the skin is thin. The most common attachment sites: inside and behind the ears, around the eyelids, under the collar, in the armpits, between toes and around paw pads, around the tail base and groin, at the base of the head and neck. After every walk in tick habitat (tall grass, woods, leaf litter), run your hands slowly through your dog\'s fur, feeling for small bumps in these zones.',
  },
  {
    question: 'What does an embedded tick look like?',
    answer: 'An embedded tick has its mouthparts (head and capitulum) buried in the skin while its body sticks out. From above, you typically see only the body — flat and oval if just attached, or rounded and engorged if it\'s been feeding for hours or days. The legs may or may not be visible from above depending on angle. Underneath, the head is hidden in the skin. Don\'t try to pull the body off without proper technique — twisting or squeezing can leave the mouthparts behind. Use fine-tipped tweezers at the base, against the skin, and pull straight up.',
  },
  {
    question: 'Do all ticks carry diseases?',
    answer: 'No. Most ticks in any given location are not carrying disease. In Ontario, only 10–30% of blacklegged ticks actually carry Borrelia burgdorferi (Lyme bacteria), and the percentage carrying anaplasmosis or other co-infections is even lower. American dog ticks rarely transmit disease in Canada. The risk per individual tick bite is low — but because tick populations have grown so dramatically, the cumulative risk over a dog\'s lifetime in southern Ontario is real and growing.',
  },
  {
    question: 'How big does a tick get when fed?',
    answer: 'A fully engorged adult female tick can swell to 50–100 times her unfed weight. Visually: a sesame-seed-sized blacklegged tick becomes pea-sized after 5+ days of feeding. An apple-seed-sized American dog tick becomes grape-sized. Engorged ticks typically turn from their original colour to grey-blue, olive, or pale tan. They look bloated and balloon-like. Many owners initially mistake an engorged tick for a skin growth, wart, or cyst — until they look more closely and see the legs.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: 'What Does a Tick Look Like on a Dog? · Ontario Guide',
  description: 'Photos and descriptions to identify ticks on dogs in Ontario. Tick vs skin tag vs flea, deer tick vs dog tick, embedded vs engorged.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
})

export default function WhatDoesTickLookLikeOnDogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Visual identification guide for ticks on dogs in Ontario.', slug: SLUG, datePublished: DATE })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'What Tick Looks Like on Dog', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-amber-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">What Tick Looks Like on Dog</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">A practical Ontario field guide to identifying ticks on dogs. How to tell a tick from a skin tag, flea, or scab — and which species carry Lyme.</p>
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <p className="lead text-xl text-gray-700 leading-relaxed mb-6">You found a small bump on your dog and you&rsquo;re trying to figure out if it&rsquo;s a tick. The fastest test: ticks have <strong>8 legs</strong>, are <strong>oval and flat</strong> when unfed, and <strong>swell up like a balloon</strong> when full of blood. Here&rsquo;s how to identify them with confidence.</p>

          <h2>The Quick Identification Checklist</h2>
          <p>Before reading further, run through these 4 quick checks:</p>
          <ol>
            <li><strong>Eight legs?</strong> → Likely a tick (or spider, but spiders aren&rsquo;t attached to your dog)</li>
            <li><strong>Six legs and jumping?</strong> → Flea, not tick</li>
            <li><strong>No legs visible at all and soft?</strong> → Probably a skin tag</li>
            <li><strong>Hard, oval, attached firmly?</strong> → Treat as a tick</li>
          </ol>

          <h2>What an Unfed Tick Looks Like</h2>
          <p>A tick that has just attached or been feeding less than 12 hours is <strong>flat, oval, and small</strong> — about the size of a sesame seed (1–3 mm). It has 8 legs visible near the front (head) end and a hard outer shield. Colour depends on species:</p>
          <ul>
            <li><strong>Blacklegged tick (deer tick)</strong> — reddish-brown body, dark/black legs, NO patterned shield. The Lyme carrier in Ontario.</li>
            <li><strong>American dog tick</strong> — larger (5 mm), brown body, distinctive mottled grey-and-brown patterned shield (called a scutum) on the back.</li>
            <li><strong>Lone star tick</strong> (rare in Ontario) — brown with a single white spot on the back of females.</li>
          </ul>

          <h2>What an Engorged Tick Looks Like</h2>
          <p>After 24+ hours of feeding, ticks swell to 50–100 times their original weight. They become:</p>
          <ul>
            <li><strong>Pea or grape-sized</strong> (5–15 mm)</li>
            <li><strong>Grey-blue, olive, or pale tan</strong> in colour (the original colour fades as the body distends)</li>
            <li><strong>Round and balloon-like</strong> rather than flat</li>
            <li><strong>Legs harder to see</strong> because they&rsquo;re under the engorged body</li>
          </ul>
          <p>This is the form most owners discover — and most often mistake for a skin tag, wart, or cyst.</p>

          <h2>Tick vs Skin Tag — How to Tell</h2>
          <p>This is the most common mix-up. Three reliable distinctions:</p>
          <ol>
            <li><strong>Legs</strong> — A tick will have visible legs at the base where it meets the skin. Even on engorged ticks, you can usually spot the legs by gently parting the fur. Skin tags don&rsquo;t have legs.</li>
            <li><strong>Texture</strong> — Ticks have a hard, somewhat brittle outer shell. Skin tags are soft and fleshy.</li>
            <li><strong>Attachment</strong> — Skin tags are <em>part of the skin</em>; they&rsquo;re a continuous tissue with the dog. Ticks are foreign objects firmly attached but distinct from the skin.</li>
          </ol>
          <p>If you&rsquo;re unsure: gently part the fur and look from multiple angles with a flashlight or magnifying glass. When in doubt, treat as a tick and remove with tweezers — there&rsquo;s no harm in &ldquo;removing&rdquo; a skin tag (you literally can&rsquo;t pull off a skin tag with tweezers).</p>

          <h2>Tick vs Flea — How to Tell</h2>
          <p>Both are bloodsucking pests but very different:</p>
          <table>
            <thead>
              <tr><th>Trait</th><th>Tick</th><th>Flea</th></tr>
            </thead>
            <tbody>
              <tr><td>Type</td><td>Arachnid</td><td>Insect</td></tr>
              <tr><td>Legs</td><td>8</td><td>6</td></tr>
              <tr><td>Movement</td><td>Slow / stationary</td><td>Jumps aggressively</td></tr>
              <tr><td>Shape</td><td>Flat oval</td><td>Narrow, side-flattened</td></tr>
              <tr><td>Attachment</td><td>Embeds in skin</td><td>Hops on/off</td></tr>
              <tr><td>Evidence</td><td>Stays in one spot</td><td>Black flea dirt on skin</td></tr>
            </tbody>
          </table>

          <h2>Where on Your Dog to Look</h2>
          <p>Ticks prefer warm, hidden, hard-to-groom spots. Check these zones after every walk in tick habitat:</p>
          <ul>
            <li>Inside and behind the <strong>ears</strong></li>
            <li>Around the <strong>eyelids</strong></li>
            <li>Under the <strong>collar</strong></li>
            <li>In the <strong>armpits</strong></li>
            <li>Between <strong>toes and paw pads</strong></li>
            <li>At the <strong>tail base and groin</strong></li>
            <li>At the <strong>base of the head and neck</strong></li>
          </ul>
          <p>Use both hands to slowly run through your dog&rsquo;s fur, feeling for bumps. Once you find one, separate the fur to look at it directly.</p>

          <h2>What to Do When You Find One</h2>
          <p>Don&rsquo;t panic. See our two complete guides:</p>
          <ul>
            <li><Link href="/blog/i-found-tick-on-my-dog-what-to-do">I Found a Tick on My Dog — What to Do</Link></li>
            <li><Link href="/blog/how-to-remove-tick-from-dog-ontario">Step-by-Step Tick Removal</Link></li>
          </ul>

          <h2>Stop Finding Ticks in the First Place</h2>
          <p>Once you&rsquo;ve found one tick, you&rsquo;ll likely find more — they don&rsquo;t travel alone. The most efficient solution is reducing the tick population in your yard, which is where dogs spend most of their outdoor time. <Link href="/tick-control">BuzzSkito&rsquo;s 5-spray season program</Link> targets leaf litter, lawn edges, and fence-line zones — the micro-habitats where 95% of yard ticks live. Most customers stop finding ticks within 2 weeks of the first treatment.</p>

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/what-ticks-look-like-ontario">What Ticks Look Like — Ontario Species Guide</Link></li>
            <li><Link href="/blog/bugs-that-look-like-ticks">5 Bugs That Look Like Ticks</Link></li>
            <li><Link href="/blog/tick-bite-on-dog-symptoms">Tick Bite Symptoms on Dogs</Link></li>
            <li><Link href="/blog/lyme-disease-tick-prevention-ontario">Lyme Disease Prevention</Link></li>
            <li><Link href="/tick-control">Tick Control Services</Link></li>
          </ul>
        </div>
      </article>

      <CTASection heading="Tired of Finding Ticks on Your Dog?" subtext="Yard tick barrier spray reduces tick populations 90%+. From $597/season — $497 bundled with mosquito plan." variant="dark" />
    </>
  )
}
