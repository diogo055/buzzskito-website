import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import AuthorByline from '@/components/AuthorByline'
import BuyLink from '@/components/BuyLink'
import TopPick from '@/components/TopPick'
import FreshnessStamp from '@/components/FreshnessStamp'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { tagForSlug } from '@/lib/amazon-clusters'

const SLUG = 'types-of-ticks-identification'
const DATE = '2026-07-13'
const UPDATED = '2026-07-13'
const TITLE = 'Types of Ticks: Identification Chart, Size & ID Guide'

const FAQS = [
  {
    question: 'What are the main types of ticks?',
    answer: 'The tick types most people in North America encounter are the blacklegged (deer) tick, the American dog tick, the lone star tick, the brown dog tick, and the Rocky Mountain wood tick. They differ in size, colour, scutum (back-plate) markings, geographic range, and the diseases they carry. The blacklegged tick spreads Lyme disease; the American dog tick and Rocky Mountain wood tick can spread Rocky Mountain spotted fever; the lone star tick is linked to alpha-gal syndrome and STARI.',
  },
  {
    question: 'How do you identify a tick?',
    answer: 'Identify a tick by four features: overall size and life stage (larvae are ~1 mm, nymphs ~1–2 mm poppy-seed-sized, unfed adults ~3–5 mm), body colour, the pattern on the scutum (the hard shield behind the head), and leg count (all adult and nymph ticks have 8 legs; larvae have 6). A reddish-brown body with solid black legs and no back markings usually means a blacklegged/deer tick, while a brown tick with white or grey mottling on the scutum points to an American dog tick or wood tick.',
  },
  {
    question: 'Which tick carries Lyme disease?',
    answer: 'In North America, Lyme disease is spread almost exclusively by the blacklegged tick (Ixodes scapularis) in the east and Midwest, and the western blacklegged tick (Ixodes pacificus) on the Pacific coast. The American dog tick, lone star tick, and Rocky Mountain wood tick do NOT transmit Lyme. That is why identifying the tick matters: a blacklegged nymph attached 24+ hours is the main Lyme risk, whereas a dog tick bite carries different (still serious) disease risks.',
  },
  {
    question: 'What does a deer tick look like versus a dog tick?',
    answer: 'A deer (blacklegged) tick is small — an unfed adult female is about 3–4 mm — with a reddish-orange rear body, a solid dark scutum, and uniformly dark, black legs, and NO white markings. An American dog tick is larger (adult ~5 mm, up to 10–15 mm engorged) with a brown body and distinctive white or greyish marbling on the scutum. If the tick has ornate white patterning on its back, it is not a deer tick.',
  },
  {
    question: 'How big is a tick?',
    answer: 'Tick size depends on life stage and whether it has fed. Larvae are about 0.5–1 mm (like a grain of sand), nymphs about 1–2 mm (like a poppy seed), and unfed adults about 3–5 mm (like a sesame seed to a small apple seed). After a full blood meal a tick can swell to 10 mm or more — an engorged female looks like a grey or brown bean. This is why nymphs cause most disease transmission: they are small enough to go unnoticed for days.',
  },
  {
    question: 'What is the difference between a nymph tick and an adult tick?',
    answer: 'A nymph is the immature stage between larva and adult. Nymphs are roughly poppy-seed-sized (1–2 mm), have 8 legs, and are responsible for most Lyme disease cases because they are hard to spot. Adults are larger (3–5 mm unfed, 8 legs) and easier to find and remove. Larvae, the earliest stage, have only 6 legs and are about 0.5–1 mm. See our guide to baby ticks, nymphs and seed ticks for close-up comparisons.',
  },
  {
    question: 'Are all ticks dangerous?',
    answer: 'Not every tick carries disease, and not every bite transmits infection — but you cannot tell an infected tick from a clean one by looking. Disease risk depends on the tick species, whether it carries a pathogen, and how long it stays attached (a blacklegged tick generally needs 24+ hours to transmit Lyme). The safest approach is to identify the tick, remove it promptly with fine-tipped tweezers, and watch the bite site for a rash or symptoms.',
  },
  {
    question: 'What should I do if I find a tick on me?',
    answer: 'Remove it promptly: grip the tick with fine-tipped tweezers as close to the skin as possible and pull straight up with steady pressure — do not twist, burn, or smother it. Clean the bite with soap and water or antiseptic. Note the date, and if you can, identify the tick species and save it in a sealed bag or photo. Watch for an expanding erythema migrans (bull’s-eye) rash, fever, or fatigue over the following weeks, and see a doctor if symptoms appear.',
  },
  {
    question: 'What does a deer tick look like?',
    answer: 'A deer (blacklegged) tick is small and plain — an unfed adult is about 3–4 mm with a reddish-orange rear body, a solid dark scutum (back-plate), and uniformly dark, almost black legs, with no white or ornate markings. Nymphs are far smaller, roughly poppy-seed sized (1–2 mm), which is why they cause most Lyme cases. After feeding, the body swells and turns greyish. If a tick is tiny, plain, and dark-legged, treat it as a deer tick.',
  },
  {
    question: 'What does a lone star tick look like, and is it in Ontario?',
    answer: 'The lone star tick (Amblyomma americanum) is reddish-brown with notably long mouthparts; the adult female has a single distinctive white dot on her back, while males show scattered white streaks. It is mainly a southeastern and eastern US tick whose range is expanding northward, and it turns up in Ontario only occasionally rather than being firmly established. It does not spread Lyme, but is linked to ehrlichiosis, STARI, and alpha-gal (red-meat) allergy, per the CDC.',
  },
  {
    question: 'What colour are ticks?',
    answer: 'Tick colour varies by species and by how much they have fed. Blacklegged (deer) ticks have a reddish-orange body with a dark scutum and black legs; American dog and Rocky Mountain wood ticks are brown with white or grey marbling; lone star ticks are reddish-brown; brown dog ticks are a uniform reddish-brown. Once engorged with blood, most ticks darken to a grey, blue-grey, or tan bean-like colour regardless of species.',
  },
  {
    question: 'What does an engorged tick look like?',
    answer: 'An engorged tick — one that has fed — looks like a smooth, swollen, greyish or brown bean or small grape attached to the skin, quite different from a flat unfed tick. A fully fed adult can reach 10 mm or more, with the legs and tiny head appearing small against the ballooned body. Colour typically shifts to grey, blue-grey, or tan. Roughly, the more engorged the tick, the longer it has been attached.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: 'Tick identification chart for the common North American ticks — blacklegged/deer, American dog, lone star, brown dog and Rocky Mountain wood tick. Compare size by life stage, colour, markings, range and disease risk, with photos and an ID FAQ.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug('types-of-ticks-identification')

export default function TypesOfTicksIdentificationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Identification chart and ID guide for the common North American tick types, by size, colour, markings, range and disease risk.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Types of Ticks: Identification', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-amber-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Types of Ticks: Identification</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">Your master ID guide to the common North American ticks — sorted by size, colour, markings, range, and the diseases each one carries.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      {/* Quick Answer — AI-extraction capsule */}
      <section className="bg-white pt-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-base text-gray-800 leading-relaxed">
              <strong>Identify a tick by its size, colour, back-plate markings, and range.</strong> The five ticks most people meet in North America are the blacklegged (deer) tick, American dog tick, lone star tick, brown dog tick, and Rocky Mountain wood tick. A small reddish-brown tick with solid black legs and no back markings is usually a blacklegged (deer) tick — the one that spreads Lyme disease. A larger brown tick with white or grey marbling on its scutum is an American dog tick or wood tick. A brown tick with a single white dot is a female lone star tick. Life stage matters as much as species: larvae are about 1 mm, nymphs are poppy-seed-sized (1&ndash;2 mm) and cause most Lyme cases, and unfed adults are 3&ndash;5 mm. Because you cannot tell an infected tick from a clean one by sight, identify it, remove it promptly, and watch the bite.
            </p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>The five ticks most North Americans encounter are the blacklegged (deer), American dog, lone star, brown dog, and Rocky Mountain wood tick.</li>
              <li>A small reddish-brown tick with solid black legs and no back markings is a blacklegged (deer) tick &mdash; the Lyme carrier.</li>
              <li>An American dog tick or wood tick is larger with white or grey marbling on its scutum; a female lone star tick has a single white dot.</li>
              <li>Larvae are about 1 mm, nymphs are poppy-seed-sized (1&ndash;2 mm), and unfed adults are 3&ndash;5 mm.</li>
              <li>Poppy-seed-sized nymphs cause most Lyme cases because they are so easily missed.</li>
              <li>Engorged ticks swell to 10 mm or more, and you cannot tell an infected tick from a clean one by sight.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito, GTA mosquito &amp; tick control &middot; 150+ five-star Google reviews</p>
          </div>
        </div>
      </section>

      {/* Master ID table */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-1">Tick Identification Chart — 5 Common North American Ticks</h2>
          <p className="text-sm text-gray-600 mb-4">Sizes are for unfed ticks; engorged ticks swell to 10 mm or more. Scroll sideways on mobile.</p>
          <div className="rounded-xl border border-gray-200 overflow-x-auto">
            <table className="w-full text-sm min-w-[720px]">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-3 py-3 text-left">Tick (species)</th>
                  <th className="px-3 py-3 text-left">Unfed adult size</th>
                  <th className="px-3 py-3 text-left">Colour &amp; markings</th>
                  <th className="px-3 py-3 text-left">Range</th>
                  <th className="px-3 py-3 text-left">Main disease risk</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: 'Blacklegged / deer tick',
                    sci: 'Ixodes scapularis',
                    size: '~3–4 mm (nymph ~1.5 mm)',
                    look: 'Reddish-orange rear body, solid dark scutum, uniformly black legs, NO back markings',
                    range: 'Eastern & Midwest US, Ontario, Quebec, Maritimes',
                    risk: 'Lyme disease, anaplasmosis, babesiosis',
                  },
                  {
                    name: 'Western blacklegged tick',
                    sci: 'Ixodes pacificus',
                    size: '~3–4 mm',
                    look: 'Very similar to eastern deer tick — dark legs, reddish body, no ornamentation',
                    range: 'US Pacific coast, southern BC',
                    risk: 'Lyme disease, anaplasmosis',
                  },
                  {
                    name: 'American dog tick',
                    sci: 'Dermacentor variabilis',
                    size: '~5 mm (up to 10–15 mm engorged)',
                    look: 'Brown body with white/grey marbling on the scutum; ornate patterning',
                    range: 'Eastern US, parts of the Prairies & Ontario',
                    risk: 'Rocky Mountain spotted fever, tularemia',
                  },
                  {
                    name: 'Lone star tick',
                    sci: 'Amblyomma americanum',
                    size: '~4–6 mm',
                    look: 'Reddish-brown; female has a single white dot on the scutum; long mouthparts',
                    range: 'Southeastern & eastern US, expanding north',
                    risk: 'Ehrlichiosis, STARI, alpha-gal (red-meat) allergy',
                  },
                  {
                    name: 'Brown dog tick',
                    sci: 'Rhipicephalus sanguineus',
                    size: '~3 mm (up to 12 mm engorged)',
                    look: 'Uniform reddish-brown, elongated body, no clear back pattern; hexagonal base',
                    range: 'Worldwide; indoors/kennels across US & Canada',
                    risk: 'Rocky Mountain spotted fever (in some regions)',
                  },
                  {
                    name: 'Rocky Mountain wood tick',
                    sci: 'Dermacentor andersoni',
                    size: '~5 mm (up to 15 mm engorged)',
                    look: 'Brown with grey/white mottled scutum; very similar to American dog tick',
                    range: 'Western US & Canada (BC, Alberta, Saskatchewan)',
                    risk: 'Rocky Mountain spotted fever, Colorado tick fever, tick paralysis',
                  },
                ].map((t) => (
                  <tr key={t.name} className="border-t border-gray-100 align-top">
                    <td className="px-3 py-2 font-semibold text-brand-800">{t.name}<br /><span className="italic font-normal text-gray-500">{t.sci}</span></td>
                    <td className="px-3 py-2 text-gray-700">{t.size}</td>
                    <td className="px-3 py-2 text-gray-700">{t.look}</td>
                    <td className="px-3 py-2 text-gray-700">{t.range}</td>
                    <td className="px-3 py-2 text-gray-700">{t.risk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">Species ranges and disease associations per the <a href="https://www.cdc.gov/ticks/" target="_blank" rel="noopener" className="underline hover:text-brand-700">U.S. Centers for Disease Control and Prevention (CDC) — Ticks</a> and <a href="https://www.publichealthontario.ca/en/Diseases-and-Conditions/Infectious-Diseases/Vector-Borne-Zoonotic-Diseases/Lyme-Disease" target="_blank" rel="noopener" className="underline hover:text-brand-700">Public Health Ontario — Lyme Disease</a>.</p>
        </div>
      </section>

      {/* Size by life stage table */}
      <section className="py-10 px-4 bg-brand-50/40">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Tick Size by Life Stage</h2>
          <div className="rounded-xl border border-gray-200 overflow-hidden bg-white">
            <table className="w-full text-sm">
              <thead className="bg-brand-50">
                <tr>
                  <th className="px-3 py-2 text-left">Life stage</th>
                  <th className="px-3 py-2 text-left">Legs</th>
                  <th className="px-3 py-2 text-left">Approx. size (unfed)</th>
                  <th className="px-3 py-2 text-left">Everyday comparison</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Larva (seed tick)', '6', '0.5–1 mm', 'Grain of sand / period on this page'],
                  ['Nymph', '8', '1–2 mm', 'Poppy seed — causes most Lyme cases'],
                  ['Adult (unfed)', '8', '3–5 mm', 'Sesame to small apple seed'],
                  ['Adult (engorged)', '8', '10 mm+', 'Grey or brown bean / small grape'],
                ].map(([stage, legs, size, cmp]) => (
                  <tr key={stage} className="border-t border-gray-100">
                    <td className="px-3 py-2 font-semibold text-brand-800">{stage}</td>
                    <td className="px-3 py-2 text-gray-700">{legs}</td>
                    <td className="px-3 py-2 text-gray-700">{size}</td>
                    <td className="px-3 py-2 text-gray-700">{cmp}</td>
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

          <p>Finding a tick is unsettling — but the species you are looking at changes everything about the risk and what you should do next. This hub is the master identification page: use the chart above to narrow it down fast, then follow the links to a detailed close-up guide for each specific tick. Below, we walk through the four features that actually let you tell ticks apart, then hit each common North American species one by one.</p>

          <h2>The 4 Features That Identify Any Tick</h2>
          <p>You do not need to be an entomologist. Nearly every backyard tick ID comes down to four things:</p>
          <ol>
            <li><strong>Size &amp; life stage.</strong> Is it sand-grain small (larva), poppy-seed small (nymph), or sesame-seed sized (adult)? A swollen, bean-like body means it has already fed. See <Link href="/blog/baby-ticks-nymphs-seed-ticks-ontario">baby ticks, nymphs &amp; seed ticks</Link> for the tiny stages.</li>
            <li><strong>Body colour.</strong> Reddish-orange, chocolate brown, or grey. Blacklegged ticks skew reddish; Dermacentor ticks (dog and wood ticks) are brown.</li>
            <li><strong>Scutum markings.</strong> The scutum is the hard shield just behind the head. A plain, unmarked scutum points to a blacklegged tick; white or grey marbling points to an American dog or wood tick; a single white dot means a female lone star tick.</li>
            <li><strong>Legs &amp; mouthparts.</strong> Adults and nymphs have 8 legs; larvae have 6. Blacklegged ticks have distinctly dark (&ldquo;black&rdquo;) legs. Lone star ticks have noticeably long mouthparts.</li>
          </ol>

          <aside aria-label="Professional tick control" className="not-prose my-8 rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-white p-6 sm:p-7 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-extrabold text-brand-900 mb-2 leading-tight">Found ticks in your yard? We treat where they hide.</h3>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">Ticks wait in tall grass, leaf litter, and shaded yard edges. BuzzSkito&rsquo;s barrier treatment targets those exact zones across 19+ GTA cities, with single treatments from $99 and licensed, family-safe application.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/tick-control" className="btn-primary-sm">Explore Tick Control →</Link>
              <a href="tel:+12892165030" className="font-bold text-brand-800 hover:text-brand-600 transition-colors">(289) 216-5030</a>
            </div>
          </aside>

          <h2>Blacklegged (Deer) Tick — Ixodes scapularis</h2>
          <p>This is the tick that spreads <strong>Lyme disease</strong>, and the one to learn best. Adults are small (about 3&ndash;4 mm unfed), with a reddish-orange rear half, a solid dark scutum, and uniformly dark legs — hence &ldquo;blacklegged.&rdquo; There is <em>no</em> white or ornate patterning on the back. The nymph, active in late spring and summer, is only about the size of a poppy seed and is responsible for the majority of Lyme cases because it goes unnoticed. A blacklegged tick generally needs to be attached for 24 hours or more to transmit Lyme, so prompt removal matters. For a full close-up and range map, see our <Link href="/blog/blacklegged-deer-tick-ontario">blacklegged / deer tick guide</Link>, and to tell it apart from the look-alike dog tick, our <Link href="/blog/deer-tick-vs-dog-tick-canada">deer tick vs dog tick comparison</Link>.</p>

          <h2>American Dog Tick — Dermacentor variabilis</h2>
          <p>Larger and easier to spot than the deer tick, the American dog tick has a brown body with distinctive <strong>white or greyish marbling on the scutum</strong>. Unfed adults are about 5 mm; a fully engorged female can reach 10&ndash;15 mm and look like a grey bean. It does <em>not</em> spread Lyme, but it can transmit Rocky Mountain spotted fever and tularemia. This is the tick people most often mistake for a deer tick — the giveaway is the ornate back pattern, which a blacklegged tick never has. Full details in our <Link href="/blog/american-dog-tick-canada">American dog tick guide</Link>.</p>

          <h2>Lone Star Tick — Amblyomma americanum</h2>
          <p>Named for the single white dot on the female&rsquo;s back (males have scattered white streaks instead), the lone star tick is reddish-brown, aggressive, and has notably long mouthparts. Historically a southeastern US tick, its range is expanding northward and it now turns up in the northeastern states and, increasingly, parts of Ontario. It is associated with ehrlichiosis, Southern tick-associated rash illness (STARI), and <strong>alpha-gal syndrome</strong> — a delayed red-meat allergy triggered by its bite. It does not spread Lyme.</p>

          <h2>Brown Dog Tick — Rhipicephalus sanguineus</h2>
          <p>The brown dog tick is unusual: it can complete its entire life cycle indoors, which means infestations in homes, kennels, and dog runs across both the US and Canada. It is a uniform reddish-brown, elongated when unfed, roughly 3 mm, swelling to about 12 mm when engorged, with no clear back pattern and a hexagonal base to the mouthparts. It strongly prefers dogs as hosts but will bite people. In some regions it can transmit Rocky Mountain spotted fever.</p>

          <h2>Rocky Mountain Wood Tick — Dermacentor andersoni</h2>
          <p>A western counterpart to the American dog tick, the Rocky Mountain wood tick is brown with a grey/white mottled scutum and is found in the western US and Canada (British Columbia, Alberta, Saskatchewan). Adults are about 5 mm unfed. It can transmit Rocky Mountain spotted fever, Colorado tick fever, and — in rare cases — <strong>tick paralysis</strong>, a temporary paralysis caused by a toxin in the tick&rsquo;s saliva that resolves once the tick is removed. Under a hand lens it is hard to separate from the American dog tick; range is the easiest clue.</p>

          <h2>Not Sure It&rsquo;s Even a Tick?</h2>
          <p>Plenty of harmless bugs get mistaken for ticks — from engorged bed bugs and poppy-seed-sized beetles to spider beetles and even clumps of dirt. Legs are the fastest test: ticks have 8 (6 as larvae) and no wings or antennae. If yours has wings, more than 8 legs, or long antennae, it is not a tick. Compare side-by-side in our <Link href="/blog/bugs-that-look-like-ticks">bugs that look like ticks</Link> photo guide, and see the full visual reference in <Link href="/blog/what-ticks-look-like-ontario">what ticks look like</Link>.</p>

          <h2>If You Found a Tick on You</h2>
          <p>Regardless of species, act the same way: grip the tick with fine-tipped tweezers as close to the skin as possible and pull straight up with steady, even pressure — no twisting, burning, or smothering with petroleum jelly. Clean the bite, then note the date and, if you can, the species. Keeping a proper removal tool on hand makes this cleaner and reduces the chance of leaving mouthparts behind. <BuyLink tag={AMZ_TAG} search="tick removal tool fine tip tweezers">Check tick-removal tools on Amazon →</BuyLink></p>

          <TopPick tag={AMZ_TAG}
            label="Our Top Pick — Tick Removal Tool"
            name="Fine-Tipped Tick Removal Tool Set"
            blurb="For a tick already attached, a dedicated fine-tipped remover grips right at the skin and lifts straight out — cleaner and safer than fingernails, and far less likely to crush the tick or leave mouthparts behind. A cheap, keep-it-in-the-first-aid-kit essential for anyone in tick country."
            search="tick removal tool fine tip tweezers"
            score={8.7}
            pros={['Grips at skin level to lift the whole tick', 'Reduces the chance of leaving mouthparts', 'Inexpensive first-aid-kit staple']}
            cons={['Not a substitute for prompt yard treatment', 'Fine tips need steady hands on tiny nymphs']}
          />
          <p>Watch the bite site over the following days and weeks for an expanding <strong>erythema migrans</strong> (bull&rsquo;s-eye) rash, fever, aches, or fatigue, and see a doctor if any appear — early treatment is highly effective. For prevention on skin and clothing, EPA- and Health-Canada-registered repellents containing <strong>DEET</strong> or <strong>picaridin</strong>, and <strong>permethrin</strong> applied to clothing and gear, are the evidence-backed choices. <BuyLink tag={AMZ_TAG} search="permethrin clothing spray tick">Compare permethrin clothing spray →</BuyLink></p>

          <h2>Explore Each Tick in Detail</h2>
          <ul>
            <li><Link href="/blog/blacklegged-deer-tick-ontario">Blacklegged / Deer Tick — full ID &amp; range</Link></li>
            <li><Link href="/blog/american-dog-tick-canada">American Dog Tick — identification guide</Link></li>
            <li><Link href="/blog/deer-tick-vs-dog-tick-canada">Deer Tick vs Dog Tick — side-by-side</Link></li>
            <li><Link href="/blog/baby-ticks-nymphs-seed-ticks-ontario">Baby Ticks, Nymphs &amp; Seed Ticks</Link></li>
            <li><Link href="/blog/what-ticks-look-like-ontario">What Ticks Look Like (photo reference)</Link></li>
            <li><Link href="/blog/bugs-that-look-like-ticks">Bugs That Look Like Ticks</Link></li>
            <li><Link href="/blog/are-ticks-dangerous-ontario">Are Ticks Dangerous? Disease Risk Explained</Link></li>
            <li><Link href="/tick-control">BuzzSkito Professional Tick Control</Link></li>
          </ul>
        </div>
      </article>

      <CTASection heading="Identified a Tick in Your Yard? Stop the Next One." subtext="BuzzSkito&rsquo;s licensed barrier treatment targets the grass, leaf litter, and shaded edges where ticks wait. From $99." variant="dark" />
    </>
  )
}
