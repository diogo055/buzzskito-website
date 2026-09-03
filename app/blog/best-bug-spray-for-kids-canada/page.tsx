import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import BuyLink from '@/components/BuyLink'
import AwardRow from '@/components/AwardRow'
import StickyBuyBar from '@/components/StickyBuyBar'
import FreshnessStamp from '@/components/FreshnessStamp'
import AuthorByline from '@/components/AuthorByline'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import { tagForSlug } from '@/lib/amazon-clusters'

const SLUG = 'best-bug-spray-for-kids-canada'
const DATE = '2026-07-12'
const UPDATED = '2026-07-12'
const TITLE = 'Best Bug Spray for Kids in Canada 2026 — Safe Picks by Age'
const META_TITLE = 'Best Bug Spray for Kids Canada 2026: DEET Ages'

const FAQS = [
  {
    question: 'What is the best bug spray for kids in Canada?',
    answer: 'For most Canadian children aged 6 months and older, Health Canada\'s preferred choice is a 20% icaridin (picaridin) repellent — brands like Natrapel, PiActive, and Sawyer. Icaridin 20% protects against both mosquitoes and ticks for up to 7–12 hours, has almost no odour, is non-greasy, and won\'t damage plastics, clothing, or sunscreen the way DEET can. If you prefer DEET, choose a low-concentration product (10% or less) rated for children. For babies under 6 months, Health Canada advises using no chemical repellent at all — rely on mosquito netting over the stroller or playpen and lightweight long-sleeved clothing instead.',
  },
  {
    question: 'What DEET concentration is safe for kids in Canada?',
    answer: 'Health Canada sets age-based DEET limits. Under 6 months: do not use DEET. Ages 6 months to 2 years: products with 10% DEET or less, applied no more than once per day. Ages 2 to 12 years: 10% DEET or less, applied up to three times per day. Age 12 and older (and adults): up to 30% DEET, the maximum concentration registered for consumer sale in Canada. A 10% DEET product still gives a child roughly 3 hours of protection, which covers most backyard playtime and evening walks.',
  },
  {
    question: 'At what age can babies use bug spray?',
    answer: 'Chemical insect repellents are not recommended for infants under 6 months in Canada — that applies to DEET, icaridin, and oil of lemon eucalyptus alike. From 6 months, icaridin 20% and low-concentration DEET (10% or less) become options. Oil of lemon eucalyptus (PMD) products carry a Health Canada label warning against use in children under 3 years. For a baby younger than 6 months, protect them physically: fine mesh mosquito netting over the stroller, car seat, or playpen, plus loose long-sleeved clothing and long pants in light colours.',
  },
  {
    question: 'Is picaridin (icaridin) safe for children?',
    answer: 'Yes — icaridin (the Canadian spelling of picaridin) is widely regarded as the best-tolerated repellent for kids and is Health Canada\'s preferred recommendation for children over 6 months. A 20% icaridin formula works against mosquitoes and ticks, is nearly odourless, feels light on skin, and does not dissolve plastics or synthetic fabrics. Unlike DEET, Health Canada does not cap the number of daily applications for icaridin in children over 6 months, though you should always follow the specific product label. It is the repellent many Canadian paediatricians suggest first for family use.',
  },
  {
    question: 'What are the best DEET-free bug sprays for kids?',
    answer: 'The strongest DEET-free option is icaridin (picaridin) 20% — technically a synthetic compound but not DEET, and the top pick for families. For plant-derived choices: oil of lemon eucalyptus (PMD), sold as OFF! Botanicals, works well but is labelled for ages 3 and up only. Soybean-oil repellents (Bite Blocker style) are gentle enough for younger toddlers but protect for a shorter window (about 2 hours) and need frequent reapplication. Citronella products give the shortest and least reliable protection. For kids, icaridin 20% gives you DEET-free performance closest to DEET without the drawbacks.',
  },
  {
    question: 'How do I protect a baby under 6 months from mosquitoes without spray?',
    answer: 'Physical barriers are the standard approach. Drape fine-mesh mosquito netting over the stroller, bassinet, playpen, or car seat — inexpensive, reusable, and completely non-toxic. Dress the baby in loose, light-coloured long sleeves and long pants (mosquitoes are drawn to dark colours and can bite through tight fabric). Avoid peak mosquito hours at dawn and dusk, remove standing water around your property so mosquitoes don\'t breed near the house, and keep window and door screens intact. A professionally treated yard removes the pressure at the source so there are far fewer mosquitoes to guard against in the first place.',
  },
  {
    question: 'How do I apply bug spray on a child safely?',
    answer: 'Spray into your own hands first, then rub it onto the child — never spray directly at their face. Keep repellent away from eyes, mouth, and any cuts or irritated skin, and apply only a thin layer to exposed skin, not under clothing. Do not use it on young children\'s hands (they put them in their mouths). Apply sunscreen first and let it absorb, then the repellent — never a combined sunscreen-plus-DEET product, because sunscreen needs frequent reapplication while DEET should not be over-applied. Wash the child\'s skin with soap and water once you are back indoors, and wash treated clothing before it is worn again.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'Best bug spray for kids in Canada: Health Canada age limits for DEET and icaridin, DEET-free picks, baby vs toddler guidance, and a safe-pick table with where to buy. Updated 2026.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug('best-bug-spray-for-kids-canada')

export default function BestBugSprayForKidsCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'A Canadian parent\'s 2026 guide to choosing safe, effective bug spray for kids by age.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Best Bug Spray for Kids', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Best Bug Spray for Kids</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">Health Canada age limits for DEET and icaridin, the best kid-safe picks, DEET-free options, and how to protect a baby too young for any repellent.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <AffiliateDisclosure />
      <StickyBuyBar tag={AMZ_TAG} name="Natrapel Icaridin 20% insect repellent" search="natrapel icaridin 20%" label="Best for kids" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">For children 6 months and older, Health Canada&rsquo;s preferred choice is a 20% icaridin (picaridin) repellent &mdash; brands like Natrapel, PiActive, or Sawyer &mdash; which protects against both mosquitoes and ticks for up to 7&ndash;12 hours. For babies under 6 months, use no chemical repellent at all; rely on mosquito netting and light long-sleeved clothing instead.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>Icaridin 20% protects against mosquitoes and ticks for up to 7&ndash;12 hours and is approved by Health Canada for children 6 months and older.</li>
              <li>Health Canada advises no chemical repellent at all for babies under 6 months.</li>
              <li>For ages 6 months to 2 years, DEET is limited to 10% or less, applied once per day.</li>
              <li>For ages 2 to 12, DEET at 10% or less may be applied up to 3 times per day.</li>
              <li>Adults and children 12 and older can use DEET up to 30%.</li>
              <li>Oil of lemon eucalyptus (PMD) is not recommended for children under 3 years old.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito, GTA mosquito &amp; tick control &middot; 150+ five-star Google reviews</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <AwardRow tag={AMZ_TAG}
            heading="Our Picks — Best Kid-Safe Bug Sprays in Canada"
            awards={[
              {
                badge: 'Best Overall',
                name: 'Natrapel Icaridin 20% (spray/wipes)',
                why: 'Health Canada’s preferred pick for children over 6 months — icaridin 20% covers mosquitoes and ticks for up to 12 hours, is nearly odourless, and won’t cloud sunglasses or soften stroller plastics the way DEET can.',
                search: 'natrapel icaridin 20%',
                score: 9.3,
                featured: true,
                pros: ['Mosquitoes + ticks in one bottle', 'No daily-application cap for 6 mo+', 'Won’t damage plastics or fabric'],
                cons: ['Costs more than low-DEET sprays', 'Still not for babies under 6 months'],
              },
              {
                badge: 'Best Canadian Brand',
                name: 'PiActive Icaridin 20%',
                why: 'A widely stocked Canadian icaridin 20% at the same safety tier as Natrapel — approved for kids 6 months and up, with up to 7 hours of mosquito and tick protection per application.',
                search: 'piactive icaridin repellent',
                score: 8.7,
                pros: ['Same icaridin 20% active', 'Easy to find in Canada', 'Light, non-greasy feel'],
                cons: ['Shorter protection window than some', 'Reapply for long days out'],
              },
              {
                badge: 'Best Long-Lasting Lotion',
                name: 'Sawyer Picaridin 20% Lotion',
                why: 'A lotion format that’s easy to rub on squirming kids without overspray, giving up to 12 hours of icaridin coverage for hikes and cottage days.',
                search: 'sawyer picaridin lotion',
                score: 8.5,
                pros: ['Up to 12 h coverage', 'Lotion = no aerosol overspray', 'Good for face-adjacent application by parents'],
                cons: ['Slower to apply than a spray', 'Lotion can feel heavier'],
              },
              {
                badge: 'Best DEET-Free Plant Option',
                name: 'OFF! Botanicals (Oil of Lemon Eucalyptus / PMD)',
                why: 'The strongest plant-derived choice for families who want a botanical repellent — solid 4–6 hour protection, but note the Health Canada label caps it at 3 years and up.',
                search: 'off botanicals repellent',
                score: 7.3,
                pros: ['Plant-derived (PMD)', '4–6 h protection', 'DEET-free'],
                cons: ['Not for children under 3', 'Weaker against ticks'],
              },
              {
                badge: 'Best for Toddlers',
                name: 'Bite Blocker Soybean-Oil Repellent',
                why: 'The gentlest option for younger toddlers over 6 months — soybean-oil based and low-irritation, though it wears off in about 2 hours so you’ll reapply often.',
                search: 'bite blocker soybean repellent',
                score: 6.9,
                pros: ['Gentle for young toddlers', 'Soybean-oil base', 'DEET-free'],
                cons: ['Only ~2 h protection', 'Frequent reapplication', 'Weak on ticks'],
              },
            ]}
            whichToBuy={
              <>
                <strong>One bottle for the whole family?</strong> The <em>Best Overall</em> icaridin 20% spray is the easiest kid-safe choice for anyone 6 months and up. <strong>Prefer a lotion for younger kids?</strong> The <em>Best Long-Lasting Lotion</em> avoids aerosol overspray. <strong>Want a plant-based option?</strong> The <em>Best DEET-Free</em> PMD spray works for ages 3+. And to cut the bites at the source so you reach for spray far less, a whole-yard <Link href="/mosquito-control">professional barrier spray</Link> keeps mosquitoes and ticks off the property in the first place.
              </>
            }
          />
        </div>
      </section>

      <section id="ages" className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Bug Spray Age Limits for Kids (Health Canada)</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            Health Canada registers personal insect repellents and sets age-based rules for how strong they can be and how often they can be used. Here is the plain-English version parents actually need at the cottage.
          </p>
          <div className="rounded-xl border border-navy-100 overflow-x-auto bg-white shadow-sm overflow-x-auto">
            <table className="min-w-[560px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Age</th>
                  <th className="px-4 py-3 text-left">DEET</th>
                  <th className="px-4 py-3 text-left">Icaridin (picaridin)</th>
                  <th className="px-4 py-3 text-left">Oil of lemon eucalyptus (PMD)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { age: 'Under 6 months', deet: 'Do not use', ica: 'Do not use', pmd: 'Do not use' },
                  { age: '6 months – 2 years', deet: '≤10%, once per day', ica: '20% OK', pmd: 'Not under 3 yr' },
                  { age: '2 – 12 years', deet: '≤10%, up to 3× per day', ica: '20% OK', pmd: '3 yr and up' },
                  { age: '12+ and adults', deet: 'Up to 30%', ica: '20%', pmd: 'Yes' },
                ].map(({ age, deet, ica, pmd }) => (
                  <tr key={age} className="border-b border-navy-50 last:border-0">
                    <td className="px-4 py-3 font-bold text-brand-800">{age}</td>
                    <td className="px-4 py-3 text-gray-800">{deet}</td>
                    <td className="px-4 py-3 text-gray-800">{ica}</td>
                    <td className="px-4 py-3 text-xs text-gray-600">{pmd}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Reflects Health Canada personal-insect-repellent guidance as of 2026. Always follow the specific product label &mdash; concentrations and age statements vary by product. Under 6 months means physical protection only.
          </p>
          <div className="mt-5 rounded-xl bg-emerald-50 border-l-4 border-emerald-500 p-4">
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong className="text-emerald-900">The short version:</strong> icaridin 20% is the easiest choice for kids over 6 months &mdash; one product covers mosquitoes and ticks, no daily-application cap, and no melted sunglasses. Save DEET for older kids and adults, keep it to 10% or less for anyone under 12, and go barrier-only for babies. For a deeper DEET-vs-icaridin breakdown, see our <Link href="/blog/picaridin-vs-deet" className="text-emerald-700 underline font-semibold">picaridin vs DEET guide</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Kid-Safe Repellents at a Glance</h2>
          <div className="rounded-xl border border-navy-100 overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Best overall for kids', 'Icaridin (picaridin) 20% — mosquitoes + ticks'],
                  ['Preferred by Health Canada', 'Icaridin for children over 6 months'],
                  ['Youngest age for repellent', '6 months (icaridin or ≤10% DEET)'],
                  ['Best DEET-free plant option', 'Oil of lemon eucalyptus (PMD) — 3 yr and up'],
                  ['Gentlest for toddlers', 'Soybean-oil (Bite Blocker style) — shorter protection'],
                  ['Max DEET for under-12s', '10% (up to 3× per day, ages 2–12)'],
                  ['Ticks covered?', 'Yes — by DEET and icaridin (not citronella)'],
                  ['Under 6 months', 'Netting + clothing only — no chemical repellent'],
                  ['Where to apply', 'Exposed skin only — never face or hands of young kids'],
                  ['Safe-for-kids yard option', 'Professional barrier spray — kid/pet-safe once dry'],
                ].map(([k, v]) => (
                  <tr key={k} className="border-b border-navy-50 last:border-0">
                    <td className="px-4 py-2 font-semibold text-brand-800 bg-brand-50 w-1/3">{k}</td>
                    <td className="px-4 py-2 text-gray-700">{v}</td>
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
          <p className="not-prose text-sm text-gray-600 mb-1">Compare current Canadian prices on the kid-safe repellents below:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="natrapel icaridin 20%">Icaridin 20% for kids on Amazon.ca →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="off familycare deet">Low-DEET FamilyCare →</BuyLink>
          </div>

          <h2 id="picks">Best Bug Spray for Kids: Safe Picks Compared</h2>
          <p>Every product below is registered with Health Canada and appropriate for children of the listed age. Where a plastic or fabric matters (car seats, sunglasses, rain jackets), remember that <strong>icaridin and DEET-free options don&rsquo;t damage synthetics</strong> — DEET does. Prices are 2026 Canadian ranges from Canadian Tire, Home Depot Canada, MEC, and Amazon.ca.</p>
          <div className="not-prose my-6 overflow-x-auto rounded-xl border border-navy-100 shadow-sm">
            <table className="min-w-[560px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Product</th>
                  <th className="px-4 py-3 text-left">Active ingredient</th>
                  <th className="px-4 py-3 text-left">Ages</th>
                  <th className="px-4 py-3 text-left">Protects for</th>
                  <th className="px-4 py-3 text-left">Price check</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">Natrapel <span className="font-normal text-xs text-gray-500">(spray/wipes)</span></td>
                  <td className="px-4 py-3 text-gray-700">Icaridin 20%</td>
                  <td className="px-4 py-3 text-gray-700">6 months+</td>
                  <td className="px-4 py-3 text-gray-700">Up to 12 h</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="natrapel icaridin" block>Check price on Amazon.ca →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">PiActive <span className="font-normal text-xs text-gray-500">(Canadian brand)</span></td>
                  <td className="px-4 py-3 text-gray-700">Icaridin 20%</td>
                  <td className="px-4 py-3 text-gray-700">6 months+</td>
                  <td className="px-4 py-3 text-gray-700">Up to 7 h</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="piactive icaridin repellent" block>Check price on Amazon.ca →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">Sawyer Picaridin <span className="font-normal text-xs text-gray-500">(lotion)</span></td>
                  <td className="px-4 py-3 text-gray-700">Icaridin 20%</td>
                  <td className="px-4 py-3 text-gray-700">6 months+</td>
                  <td className="px-4 py-3 text-gray-700">Up to 12 h</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="sawyer picaridin lotion" block>Check price on Amazon.ca →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">OFF! FamilyCare <span className="font-normal text-xs text-gray-500">(low DEET)</span></td>
                  <td className="px-4 py-3 text-gray-700">DEET 5–10%</td>
                  <td className="px-4 py-3 text-gray-700">6 months+ *</td>
                  <td className="px-4 py-3 text-gray-700">~2–3 h</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="off familycare insect repellent" block>Check price on Amazon.ca →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">OFF! Botanicals <span className="font-normal text-xs text-gray-500">(DEET-free)</span></td>
                  <td className="px-4 py-3 text-gray-700">Oil of lemon eucalyptus (PMD)</td>
                  <td className="px-4 py-3 text-gray-700">3 years+</td>
                  <td className="px-4 py-3 text-gray-700">~4–6 h</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="off botanicals repellent" block>Check price on Amazon.ca →</BuyLink></td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-bold text-brand-800">Bite Blocker <span className="font-normal text-xs text-gray-500">(toddler-gentle)</span></td>
                  <td className="px-4 py-3 text-gray-700">Soybean oil 2%</td>
                  <td className="px-4 py-3 text-gray-700">6 months+</td>
                  <td className="px-4 py-3 text-gray-700">~2 h</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="bite blocker soybean repellent" block>Check price on Amazon.ca →</BuyLink></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="not-prose text-xs text-gray-500 mb-6">* Under 2 years, DEET products should be applied no more than once per day. Protection times are approximate and drop with sweat, water, and heat. For ticks specifically, choose DEET or icaridin — the plant-based and soybean options are weaker against ticks.</p>

          <h3>Why icaridin 20% is the parent&rsquo;s pick</h3>
          <p>If you only want to buy one bottle for the whole family, make it icaridin (picaridin) 20%. It matches DEET for mosquito and tick protection, it&rsquo;s the repellent Health Canada highlights for children over 6 months, and it fixes DEET&rsquo;s two everyday annoyances: the smell and the way DEET can cloud sunglasses, soften stroller plastics, and mark synthetic jackets. A 20% icaridin spray gives a child several hours of coverage from one application — enough for a soccer game, a hike, or an evening on the deck.</p>

          <h3>When a low-DEET product still makes sense</h3>
          <p>DEET is not the villain it&rsquo;s sometimes made out to be — it&rsquo;s the most-studied repellent in the world and is safe for kids over 6 months at 10% or less. If you already own a bottle of OFF! FamilyCare, it&rsquo;s perfectly reasonable for a 2-to-12-year-old at up to three light applications a day. Just keep the concentration low, keep it off their hands and face, and don&rsquo;t combine it with sunscreen in a single product.</p>

          <h3>DEET-free and plant-based options</h3>
          <p>Beyond icaridin, oil of lemon eucalyptus (PMD) is the strongest plant-derived choice, but note the Health Canada label: <strong>not for children under 3</strong>. Soybean-oil repellents (Bite Blocker style) are gentle enough for younger toddlers but wear off in about two hours, so you&rsquo;ll reapply often. Citronella products give the shortest, least reliable protection and aren&rsquo;t a good bet where ticks are a concern.</p>

          <div className="not-prose my-6 rounded-xl bg-emerald-50 border-l-4 border-emerald-500 p-5">
            <p className="text-sm font-extrabold text-emerald-900 mb-1">Protecting a baby under 6 months</p>
            <p className="text-sm text-gray-800 leading-relaxed">No spray of any kind — DEET, icaridin, or plant-based. Use fine-mesh mosquito netting over the stroller, car seat, bassinet, or playpen; dress the baby in loose, light-coloured long sleeves and pants; and avoid dawn and dusk outings. The most effective step is removing the mosquitoes before they reach the yard — see <Link href="/mosquito-control">professional barrier spray</Link>, which is safe for kids and pets once it has dried.</p>
          </div>

          <h2>How to Apply Bug Spray on Kids Safely</h2>
          <ul>
            <li><strong>Spray your hands, then rub it on</strong> — never spray toward a child&rsquo;s face.</li>
            <li><strong>Exposed skin only</strong> — not under clothing, and never on cuts or irritated skin.</li>
            <li><strong>Keep it off little hands</strong> — young kids put fingers in their mouths and eyes.</li>
            <li><strong>Sunscreen first, then repellent</strong> — apply sunscreen, let it absorb, then the repellent. Avoid all-in-one sunscreen-plus-DEET products.</li>
            <li><strong>Wash it off indoors</strong> — soap and water when playtime ends, and wash treated clothing before it&rsquo;s worn again.</li>
            <li><strong>Do a tick check</strong> — after any time in tall grass or wooded areas, check kids (and pets) head to toe.</li>
          </ul>
          <p>Parents usually want to know whether DEET itself is the problem or just the dose. It is the dose — Health Canada holds children aged 2 to 12 to a maximum of 10% while allowing adults up to 30%, and we explain where those age limits come from in <Link href="/blog/is-deet-safe">our plain-language look at DEET safety</Link>.</p>

          <aside aria-label="Professional mosquito control" className="not-prose my-8 rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-white p-6 sm:p-7 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-extrabold text-brand-900 mb-2 leading-tight">Fewer bites means less bug spray</h3>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">BuzzSkito&rsquo;s professional barrier spray knocks down mosquitoes and ticks across your whole yard from $99 — safe for kids and pets once dry, backed by 150+ five-star reviews across 19 GTA cities.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/free-yard-assessment" className="btn-primary-sm">Get a Free Quote →</Link>
              <a href="tel:+12892165030" className="font-bold text-brand-800 hover:text-brand-600 transition-colors">(289) 216-5030</a>
            </div>
          </aside>

          <h2>Repellent vs a Treated Yard: Use Both</h2>
          <p>Bug spray protects the child; a treated yard protects the space. Repellent is essential for hikes, cottages, sports, and travel — but reapplying it on a wriggling toddler every couple of hours gets old fast. A whole-yard <Link href="/mosquito-control">barrier treatment</Link> cuts the number of mosquitoes and ticks near the house so your backyard needs far less spray in the first place. The two work together: treat the yard for everyday home use, and keep a bottle of icaridin 20% by the door for everywhere else.</p>
          <p>Parents in the GTA regularly ask us whether yard treatment itself is safe around children and pets. The short answer is yes, once it has dried — we cover the details in our guide to <Link href="/blog/is-mosquito-spray-safe-kids-pets">whether mosquito spray is safe for kids and pets</Link>.</p>

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/is-mosquito-spray-safe-kids-pets">Is Mosquito Spray Safe for Kids and Pets?</Link></li>
            <li><Link href="/blog/picaridin-vs-deet">Picaridin vs DEET in Canada — Which Repellent Wins?</Link></li>
            <li><Link href="/mosquito-control">BuzzSkito Professional Mosquito Control Service</Link></li>
            <li><Link href="/free-yard-assessment">Book a Free Yard Assessment</Link></li>
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

        </div>
      </article>

      <CTASection heading="A Kid-Safe Backyard Starts at the Source" subtext="Get a free quote for licensed barrier spray. From $99. Safe for kids and pets once dry. 30-day residual." variant="dark" />
    </>
  )
}
