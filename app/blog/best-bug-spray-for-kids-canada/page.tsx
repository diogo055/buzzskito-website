import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import BuyLink from '@/components/BuyLink'
import AwardRow from '@/components/AwardRow'
import StickyBuyBar from '@/components/StickyBuyBar'
import TopBox from '@/components/TopBox'
import FreshnessStamp from '@/components/FreshnessStamp'
import AuthorByline from '@/components/AuthorByline'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import { tagForSlug } from '@/lib/amazon-clusters'
import { PROMISES } from '@/lib/constants'
import ReadNext from '@/components/ReadNext'
import NextUp from '@/components/NextUp'
import QuickIdTable from '@/components/QuickIdTable'
import Photo from '@/components/Photo'

const SLUG = 'best-bug-spray-for-kids-canada'
const DATE = '2026-07-12'
const UPDATED = '2026-10-28'
const TITLE = 'Best Bug Spray for Kids in Canada: Picks by Age'
// TITLE NOTE (Oct 28, 2026): kept as is (47 characters, already leads with the top query); top queries, Jul 28-Oct 25 (all countries): best bug spray for kids 183 at 8.2, best bug 34 at 9.4, best mosquito repellent for kids 22 at 9.2, mosquito repellent kids 16 at 12.9, best kids bug spray 8 at 10.9 (6 clicks). Adult picaridin searches stay with picaridin-vs-deet, DEET safety with is-deet-safe.
const META_TITLE = 'Best Bug Spray for Kids in Canada: Picks by Age'

const FAQS = [
  {
    question: 'What is the best bug spray for kids in Canada?',
    answer: 'For most Canadian children aged 6 months and older, a strong choice is a 20% icaridin (picaridin) repellent, which Health Canada\'s age rules permit from 6 months — brands like Natrapel, PiActive, and Sawyer. Icaridin 20% protects against both mosquitoes and ticks for up to 7–12 hours, has almost no odour, is non-greasy, and won\'t damage plastics, clothing, or sunscreen the way DEET can. If you prefer DEET, choose a low-concentration product (10% or less) rated for children. For babies under 6 months, Health Canada says not to use DEET or icaridin and to use a mosquito net when they are outdoors in a crib or stroller — rely on that netting and lightweight long-sleeved clothing instead.',
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
    answer: 'Health Canada\'s repellent guidance allows icaridin (the Canadian spelling of picaridin) on children 6 months and older, and it is widely regarded as the best-tolerated repellent for kids. A 20% icaridin formula works against mosquitoes and ticks, is nearly odourless, feels light on skin, and does not dissolve plastics or synthetic fabrics. Unlike DEET, Health Canada does not cap the number of daily applications for icaridin in children over 6 months, though you should always follow the specific product label. CATMAT, the Public Health Agency of Canada’s travel advisory committee, says repellents with 20% icaridin should be the first choice for children six months to twelve years.',
  },
  {
    question: 'What are the best DEET-free bug sprays for kids?',
    answer: 'The strongest DEET-free option is icaridin (picaridin) 20% — technically a synthetic compound but not DEET, and the top pick for families. For plant-derived choices: oil of lemon eucalyptus (PMD), sold as OFF! Botanicals, works well but is labelled for ages 3 and up only. Soybean-oil repellents (Bite Blocker style) have no age restriction in Health Canada’s guidance and protect for up to 3½ hours against mosquitoes, according to the Canadian Paediatric Society, but no soybean-oil personal repellent is currently on Health Canada’s register, so a Bite Blocker bottle bought online has no Canadian number. Citronella products give the shortest protection, and none is currently registered in Canada. For kids, icaridin 20% gives you DEET-free performance closest to DEET without the drawbacks.',
  },
  {
    question: 'How do I protect a baby under 6 months from mosquitoes without spray?',
    answer: 'Physical barriers are the standard approach. Drape fine-mesh mosquito netting over the stroller, bassinet, playpen, or car seat — inexpensive, reusable, and uses no repellent at all. Dress the baby in loose, light-coloured long sleeves and long pants (mosquitoes are drawn to dark colours and can bite through tight fabric). Avoid peak mosquito hours at dawn and dusk, remove standing water around your property so mosquitoes don\'t breed near the house, and keep window and door screens intact. A professionally treated yard reduces the number of mosquitoes around the house in the first place.',
  },
  {
    question: 'How do I apply bug spray on a child safely?',
    answer: 'Spray into your own hands first, then rub it onto the child — never spray directly at their face. Keep repellent away from eyes, mouth, and any cuts or irritated skin, and apply only a thin layer to exposed skin, not under clothing. Do not use it on young children\'s hands (they put them in their mouths). Apply sunscreen first and let it absorb, then the repellent — never a combined sunscreen-plus-DEET product, because sunscreen needs frequent reapplication while DEET should not be over-applied. Wash the child\'s skin with soap and water once you are back indoors, and wash treated clothing before it is worn again.',
  },
  {
    question: 'What is the best bug spray for toddlers?',
    answer: 'For a toddler over 6 months, a registered 20% icaridin repellent is the first choice of CATMAT, the Public Health Agency of Canada’s travel advisory committee, for children six months to twelve years. If you use DEET instead, Health Canada limits children aged 6 months to 2 years to products with up to 10% DEET, applied no more than once a day; the label of the OFF! FamilyCare kids’ lotion (Reg. No. 21299, 7.5% DEET) adds “Not for daily use.” Oil of lemon eucalyptus (PMD) waits until age 3. Put it on with your hands, never on a toddler’s hands.',
  },
  {
    question: 'What is the best bug spray for kids against ticks?',
    answer: 'Choose icaridin or DEET. Health Canada says icaridin products repel mosquitoes and ticks, and Natrapel Icaridin’s Canadian label (Reg. No. 34244) claims 12 hours against both; DEET kids’ lotions such as OFF! FamilyCare (Reg. No. 21299) list ticks on the label too. The Canadian Paediatric Society gives no tick protection figure for oil of lemon eucalyptus, soybean oil or citronella. Permethrin-treated clothing is not available for children under 16, according to Health Canada, so a tick check after long grass or woods matters more for kids than for adults.',
  },
  {
    question: 'Is there a bug spray for babies under 6 months?',
    answer: 'Health Canada says not to use DEET or icaridin on babies younger than 6 months and to use a mosquito net when they are outdoors in a crib or stroller. Soybean-oil repellents have no age restriction in Health Canada’s guidance, but none is currently on Health Canada’s register. So for a baby that young the practical answer is fine-mesh netting over the stroller, car seat or playpen, loose light-coloured long sleeves and pants, and staying indoors at dawn and dusk.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'Best bug spray for kids in Canada: 20% icaridin from 6 months (Natrapel, PiActive), DEET limits by age, which picks are registered, and babies under 6 months.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug('best-bug-spray-for-kids-canada')

export default function BestBugSprayForKidsCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'A Canadian parent\'s 2026 guide to choosing bug spray for kids by age.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
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
          <p className="text-xl text-brand-100 max-w-3xl">For most children 6 months and older, the best bug spray in Canada is a 20% icaridin (picaridin) repellent with a Canadian registration number, such as Natrapel Icaridin (Reg. No. 34244), whose label claims 12 hours against mosquitoes and ticks; CATMAT, the Public Health Agency of Canada&rsquo;s travel advisory committee, calls 20% icaridin the first choice for ages 6 months to 12 years. It suits families who want one bottle from 6 months up. For a baby under 6 months, Health Canada says not to use DEET or icaridin: put a mosquito net over the stroller or crib instead.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <AffiliateDisclosure />
      <StickyBuyBar tag={AMZ_TAG} name="Natrapel Icaridin 20% insect repellent" search="natrapel icaridin 20%" label="Best for kids" />
      <TopBox tag={AMZ_TAG} name="Natrapel Icaridin 20% insect repellent" search="natrapel icaridin 20%" label="Best for kids" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">For children 6 months and older, a strong choice is a 20% icaridin (picaridin) repellent, which Health Canada&rsquo;s age rules permit from 6 months &mdash; brands like Natrapel, PiActive, or Sawyer &mdash; and which protects against both mosquitoes and ticks for up to 7&ndash;12 hours. For babies under 6 months, use no chemical repellent at all; rely on mosquito netting and light long-sleeved clothing instead.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>Icaridin 20% protects against mosquitoes and ticks for up to 7&ndash;12 hours and Health Canada&rsquo;s age rules permit it for children 6 months and older.</li>
              <li>Health Canada says not to use DEET or icaridin on babies under 6 months; use a mosquito net instead.</li>
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
            heading="Our Picks — Best Bug Sprays for Kids in Canada"
            awards={[
              {
                badge: 'Best Overall',
                name: 'Natrapel Icaridin 20% (spray/wipes)',
                why: '20% icaridin is CATMAT’s first choice for children 6 months to 12 years, and Natrapel’s label (Reg. No. 34244) claims up to 12 hours against mosquitoes and ticks — it is nearly odourless and won’t cloud sunglasses or soften stroller plastics the way DEET can.',
                search: 'natrapel icaridin 20%',
                score: 9.3,
                featured: true,
                pros: ['Mosquitoes + ticks in one bottle', 'No daily-application cap for 6 mo+', 'Won’t damage plastics or fabric'],
                cons: ['Costs more than low-DEET sprays', 'Still not for babies under 6 months'],
              },
              {
                badge: 'Best Canadian Brand',
                name: 'PiActive Icaridin 20%',
                why: 'A widely stocked Canadian icaridin 20% with the same active as Natrapel, giving up to 7 hours of mosquito and tick protection per application. PiActive Kids is registered here (Reg. No. 31457); Health Canada says icaridin should not be used on infants under 6 months.',
                search: 'piactive icaridin repellent',
                score: 8.7,
                pros: ['Same icaridin 20% active', 'Easy to find in Canada', 'Light, non-greasy feel'],
                cons: ['Shorter protection window than some', 'Reapply for long days out'],
              },
              {
                badge: 'Best Lotion',
                name: 'PiActive Insect Repellent Lotion (icaridin 20%, Reg. No. 33411)',
                why: 'No Sawyer lotion is registered in Canada (Sawyer’s Canadian registrations are a pump spray, 33032, and a pressurized spray, 33177), so the lotion pick is PiActive’s registered icaridin lotion (Reg. No. 33411). A lotion is easy to rub on squirming kids without overspray; the Canadian Paediatric Society gives icaridin up to 20% about 5 to 7 hours against mosquitoes.',
                search: 'piactive icaridin repellent',
                score: 8.7,
                pros: ['Registered icaridin 20% lotion (33411)', 'Lotion = no aerosol overspray', 'About 5 to 7 h against mosquitoes (CPS)'],
                cons: ['Slower to apply than a spray', 'Lotion can feel heavier'],
              },
              {
                badge: 'Best DEET-Free Plant Option',
                name: 'OFF! Botanicals (Oil of Lemon Eucalyptus / PMD)',
                why: 'The registered plant-derived choice for families who want a botanical repellent — the Canadian Paediatric Society gives PMD up to 2 hours against mosquitoes, and Health Canada says not to use it on children under 3.',
                search: 'off botanicals repellent',
                score: 7.3,
                pros: ['Plant-derived (PMD)', 'Registered (spray 34594, lotion 34008)', 'DEET-free'],
                cons: ['Not for children under 3', 'Weaker against ticks'],
              },
              {
                badge: 'Best for Toddlers',
                name: 'OFF! FamilyCare Lotion for use on Kids (DEET 7.5%, Reg. No. 21299)',
                why: 'Bite Blocker and other soybean-oil repellents have no current Canadian registration, so the toddler pick is a registered low-DEET lotion. Its label: not on infants under 6 months; from 6 months to 2 years no more than once a day and not for daily use; from 2 to 12 years up to 3 times a day; reapply after 3 hours if necessary.',
                search: 'off familycare deet',
                score: 6.9,
                pros: ['Labelled for children from 6 months', 'Low DEET (7.5%)', 'Ticks are on the label'],
                cons: ['Under 2: once a day at most, not daily (label)', 'Reapply after 3 hours if necessary (label)'],
              },
            ]}
            whichToBuy={
              <>
                <strong>One bottle for the whole family?</strong> The <em>Best Overall</em> icaridin 20% spray is the easiest choice labelled for anyone 6 months and up. <strong>Prefer a lotion for younger kids?</strong> The <em>Best Lotion</em>, PiActive&rsquo;s registered icaridin lotion (Reg. No. 33411), avoids aerosol overspray. <strong>Want a plant-based option?</strong> The <em>Best DEET-Free</em> PMD spray works for ages 3+. And to cut the bites at the source so you reach for spray far less, a whole-yard <Link href="/mosquito-control">professional barrier spray</Link> keeps mosquitoes and ticks off the property in the first place.
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
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Kids&rsquo; Repellents at a Glance</h2>
          <div className="rounded-xl border border-navy-100 overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Best overall for kids', 'Icaridin (picaridin) 20% — mosquitoes + ticks'],
                  ['Health Canada age rule', 'Icaridin 20% permitted from 6 months'],
                  ['Youngest age for repellent', '6 months (icaridin or ≤10% DEET)'],
                  ['Best DEET-free plant option', 'Oil of lemon eucalyptus (PMD) — 3 yr and up'],
                  ['Soybean-oil option', 'Bite Blocker style — up to 3½ h (CPS), but no soybean-oil repellent is registered in Canada now'],
                  ['Max DEET for under-12s', '10% (up to 3× per day, ages 2–12)'],
                  ['Ticks covered?', 'Yes — by DEET and icaridin (not citronella)'],
                  ['Under 6 months', 'Netting + clothing only — no chemical repellent'],
                  ['Where to apply', 'Exposed skin only — never face or hands of young kids'],
                  ['Yard option', 'Professional barrier spray — stay off treated areas until dry, as the label directs'],
                ].map(([k, v]) => (
                  <tr key={k} className="border-b border-navy-50 last:border-0">
                    <td className="px-4 py-2 font-semibold text-brand-800 bg-brand-50 w-1/3">{k}</td>
                    <td className="px-4 py-2 text-gray-700">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <QuickIdTable
            title="Kids’ Bug Sprays on Health Canada’s Register (October 28, 2026)"
            head={['Product as registered', 'Reg. No.', 'Active', 'Age and use, from the label or Health Canada']}
            rows={[
              ['Natrapel Icaridin (aerosol)', '34244', 'Icaridin 20%', 'Not on infants under 6 months; label claims 12 h against mosquitoes and ticks, 10 h against black flies; not on small children’s hands'],
              ['Natrapel Icaridin Spray', '34555', 'Icaridin 20%', 'Health Canada: icaridin not for infants under 6 months'],
              ['Mosquito Shield PiActive Kids', '31457', 'Icaridin 20%', 'Health Canada: icaridin not for infants under 6 months'],
              ['PiActive Insect Repellent Lotion', '33411', 'Icaridin 20%', 'A registered icaridin lotion'],
              ['Sawyer Icaridin pump spray and pressurized spray', '33032 and 33177', 'Icaridin 20%', 'No Sawyer lotion is registered in Canada'],
              ['OFF! FamilyCare Lotion for use on Kids', '21299', 'DEET 7.5%', 'Not under 6 months; 6 months to 2 years no more than once a day, not for daily use; 2 to 12 up to 3 times a day; reapply after 3 h if necessary'],
              ['OFF! FamilyCare Spray for use on Kids (Floral Fresh)', '33752', 'DEET 5%', 'Health Canada’s DEET rules by age apply'],
              ['OFF! FamilyCare Insect Repellent 8', '30154', 'Icaridin 10%', 'Health Canada: icaridin not for infants under 6 months'],
              ['OFF! Botanicals (spray and lotion)', '34594 and 34008', 'PMD 10%', 'Not on children under 3 (Health Canada)'],
              ['Bite Blocker and other soybean-oil repellents', 'None current', 'Soybean oil', 'Health Canada sets no age limit for soybean oil, but no soybean-oil personal repellent is on the register'],
            ]}
            caption={<>From Health Canada&rsquo;s <a href="https://pest-control.canada.ca/pesticide-registry/en/product-search.html" target="_blank" rel="noopener noreferrer" className="underline">pesticide registry</a> (searched October 28, 2026), the Natrapel Icaridin and OFF! FamilyCare kids&rsquo; lotion labels filed there, and Health Canada&rsquo;s <a href="https://www.canada.ca/en/health-canada/services/about-pesticides/insect-repellents.html" target="_blank" rel="noopener noreferrer" className="underline">Personal insect repellents</a> page. Health Canada also says children under 12 should not use a DEET product daily for more than a month.</>}
          />

          <h2 className="text-xl font-extrabold text-brand-900 mt-8 mb-4">Which Repellent for Your Child&rsquo;s Age and Plans?</h2>
          <ul className="space-y-2 text-sm text-gray-700 list-disc pl-5">
            <li><strong>Under 6 months:</strong> no DEET or icaridin (Health Canada). A mosquito net over the stroller, crib or playpen, and loose long sleeves.</li>
            <li><strong>6 months to 2 years:</strong> icaridin, or DEET up to 10% no more than once a day.</li>
            <li><strong>2 to 12 years:</strong> icaridin, or DEET up to 10% up to three times a day, and not daily for more than a month.</li>
            <li><strong>Over 12 and adults:</strong> DEET up to 30%, or icaridin.</li>
            <li><strong>A hike or cottage weekend with ticks:</strong> icaridin or DEET on exposed skin, then a tick check; permethrin-treated clothing is not available for children under 16.</li>
            <li><strong>A DEET-free family:</strong> icaridin covers ages 6 months and up; OFF! Botanicals (PMD) is for ages 3 and up.</li>
          </ul>
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />
          <p className="not-prose text-sm text-gray-600 mb-1">Compare current Canadian prices on the kids&rsquo; repellents below:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="natrapel icaridin 20%">Icaridin 20% for kids on Amazon.ca →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="off familycare deet">Low-DEET FamilyCare →</BuyLink>
          </div>

          <h2 id="picks">Best Bug Spray for Kids: Picks Compared</h2>
          <p>Most products below carry a Canadian PCP registration number (the registry table above lists each one), and the Ages column follows the label&rsquo;s age directions. The two exceptions: Sawyer&rsquo;s Canadian registrations are a pump spray and a pressurized spray, not the lotion, and no soybean-oil repellent such as Bite Blocker is currently on Health Canada&rsquo;s register. Where a plastic or fabric matters (car seats, sunglasses, rain jackets), remember that <strong>icaridin and DEET-free options don&rsquo;t damage synthetics</strong> — DEET does. Prices are 2026 Canadian ranges from Canadian Tire, Home Depot Canada, MEC, and Amazon.ca.</p>
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
                  <td className="px-4 py-3 font-bold text-brand-800">Sawyer Picaridin <span className="font-normal text-xs text-gray-500">(lotion; not registered in Canada)</span></td>
                  <td className="px-4 py-3 text-gray-700">Icaridin 20%</td>
                  <td className="px-4 py-3 text-gray-700">6 months+</td>
                  <td className="px-4 py-3 text-gray-700">No Canadian label</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="piactive icaridin repellent" block>Registered lotion instead (Reg. No. 33411) →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">OFF! FamilyCare <span className="font-normal text-xs text-gray-500">(low DEET)</span></td>
                  <td className="px-4 py-3 text-gray-700">DEET 5% or 7.5%</td>
                  <td className="px-4 py-3 text-gray-700">6 months+ *</td>
                  <td className="px-4 py-3 text-gray-700">~2–3 h</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="off familycare insect repellent" block>Check price on Amazon.ca →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">OFF! Botanicals <span className="font-normal text-xs text-gray-500">(DEET-free)</span></td>
                  <td className="px-4 py-3 text-gray-700">Oil of lemon eucalyptus (PMD)</td>
                  <td className="px-4 py-3 text-gray-700">3 years+</td>
                  <td className="px-4 py-3 text-gray-700">Up to 2 h on mosquitoes (CPS)</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="off botanicals repellent" block>Check price on Amazon.ca →</BuyLink></td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-bold text-brand-800">Bite Blocker <span className="font-normal text-xs text-gray-500">(plant-based)</span></td>
                  <td className="px-4 py-3 text-gray-700">Soybean oil 2%</td>
                  <td className="px-4 py-3 text-gray-700">No age limit (Health Canada); not registered in Canada</td>
                  <td className="px-4 py-3 text-gray-700">Up to 3½ h (CPS)</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="off familycare deet" block>Registered kids’ lotion instead (Reg. No. 21299) →</BuyLink></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="not-prose text-xs text-gray-500 mb-6">* Under 2 years, DEET products should be applied no more than once per day. Protection times are approximate and drop with sweat, water, and heat. For ticks specifically, choose DEET or icaridin — the Canadian Paediatric Society gives no tick protection figure for the plant-based and soybean options.</p>

          <h3>Why icaridin 20% is the parent&rsquo;s pick</h3>
          <p>If you only want to buy one bottle for the whole family, make it icaridin (picaridin) 20%. It matches DEET for mosquito and tick protection, Health Canada&rsquo;s age rules permit it for children from 6 months, and it fixes DEET&rsquo;s two everyday annoyances: the smell and the way DEET can cloud sunglasses, soften stroller plastics, and mark synthetic jackets. A 20% icaridin spray gives a child several hours of coverage from one application — enough for a soccer game, a hike, or an evening on the deck.</p>
          <Photo id="mosquito-bites-forearm" alt="Several swollen mosquito bites fusing together on a forearm" caption="Several swollen mosquito bites fusing together on a forearm (CDC photograph, 2024). A registered icaridin or DEET repellent on exposed skin is what prevents bites like these on a child." />

          <h3>When a low-DEET product still makes sense</h3>
          <p>DEET is not the villain it&rsquo;s sometimes made out to be — it&rsquo;s the most-studied repellent in the world, and Health Canada&rsquo;s age rules permit it for kids over 6 months at 10% or less. If you already own a bottle of OFF! FamilyCare, it&rsquo;s perfectly reasonable for a 2-to-12-year-old at up to three light applications a day. Just keep the concentration low, keep it off their hands and face, and don&rsquo;t combine it with sunscreen in a single product.</p>

          <h3>DEET-free and plant-based options</h3>
          <p>Beyond icaridin, oil of lemon eucalyptus (PMD) is the strongest plant-derived choice, but note the Health Canada label: <strong>not for children under 3</strong>. Soybean-oil repellents (Bite Blocker style) have no age limit in Health Canada&rsquo;s guidance and last up to 3&frac12; hours against mosquitoes, according to the Canadian Paediatric Society, but no soybean-oil personal repellent is currently on Health Canada&rsquo;s register. Citronella products give the shortest, least reliable protection, none is currently registered in Canada, and they aren&rsquo;t a good bet where ticks are a concern.</p>

          <div className="not-prose my-6 rounded-xl bg-emerald-50 border-l-4 border-emerald-500 p-5">
            <p className="text-sm font-extrabold text-emerald-900 mb-1">Protecting a baby under 6 months</p>
            <p className="text-sm text-gray-800 leading-relaxed">No spray of any kind — DEET, icaridin, or plant-based. Use fine-mesh mosquito netting over the stroller, car seat, bassinet, or playpen; dress the baby in loose, light-coloured long sleeves and pants; and avoid dawn and dusk outings. Another step is reducing the mosquitoes in the yard itself — see <Link href="/mosquito-control">professional barrier spray</Link>; kids and pets stay off treated areas until the spray has dried, as the product label directs.</p>
            <p className="mt-3 text-sm text-gray-800 leading-relaxed">The netting is the whole strategy for this age group, so it is worth buying one that fits your stroller and pram properly rather than a generic square of mesh that gaps at the corners.</p>
            <div className="mt-3">
              <BuyLink tag={AMZ_TAG} search="stroller mosquito net">Check stroller mosquito nets on Amazon.ca →</BuyLink>
            </div>
          </div>

          <NextUp path="/blog/best-bug-spray-for-kids-canada" />
          <h2>How to Apply Bug Spray on Kids Safely</h2>
          <ul>
            <li><strong>Spray your hands, then rub it on</strong> — never spray toward a child&rsquo;s face.</li>
            <li><strong>Exposed skin only</strong> — not under clothing, and never on cuts or irritated skin.</li>
            <li><strong>Keep it off little hands</strong> — young kids put fingers in their mouths and eyes.</li>
            <li><strong>Sunscreen first, then repellent</strong> — apply sunscreen, let it absorb, then the repellent. Avoid all-in-one sunscreen-plus-DEET products.</li>
            <li><strong>Wash it off indoors</strong> — soap and water when playtime ends, and wash treated clothing before it&rsquo;s worn again.</li>
            <li><strong>Do a tick check</strong> — after any time in tall grass or wooded areas, check kids (and pets) head to toe.</li>
          </ul>
          <p className="not-prose text-sm text-gray-600 mb-2">That last bullet is the one that needs a tool rather than a technique. A fine-point tick remover or a tick hook gets a small nymph off a child cleanly; household tweezers usually do not, and a squeezed tick is the outcome you are trying to avoid.</p>
          <div className="not-prose mb-6">
            <BuyLink tag={AMZ_TAG} search="tick remover tool">Check tick removal tools on Amazon.ca →</BuyLink>
          </div>
          <Photo id="blacklegged-tick-nymph-fingernail" alt="Blacklegged tick nymph crawling beside a fingernail" caption="A blacklegged tick nymph crawling beside a person’s fingernail, for size (CDC photograph). A nymph this small is why the tick check after tall grass or woods needs a close, head-to-toe look." />
          <p>Parents usually want to know whether DEET itself is the problem or just the dose. It is the dose — Health Canada holds children aged 2 to 12 to a maximum of 10% while allowing adults up to 30%, and we explain where those age limits come from in <Link href="/blog/is-deet-safe">our plain-language look at DEET safety</Link>.</p>

          <h2>Kids&rsquo; Bug Spray Buyer&rsquo;s Checklist</h2>
          <ol>
            <li><strong>A Canadian registration number</strong> (&ldquo;Reg. No. &hellip; P.C.P. Act&rdquo;) on the bottle. An EPA number on a US bottle is not a Canadian registration.</li>
            <li><strong>The active and its strength:</strong> icaridin up to 20%, or DEET up to 10% for children under 12.</li>
            <li><strong>The age line on the label:</strong> DEET and icaridin not under 6 months; oil of lemon eucalyptus (PMD) from 3 years.</li>
            <li><strong>How often:</strong> DEET no more than once a day under 2, up to three times a day from 2 to 12, and not daily for more than a month (Health Canada).</li>
            <li><strong>The format:</strong> a lotion or wipe for the face area, applied by your hands, never sprayed at the face.</li>
            <li><strong>Ticks listed on the label</strong> if you are heading into long grass or woods.</li>
            <li><strong>A separate sunscreen:</strong> combination sunscreen-repellent products are no longer available in Canada, so apply sunscreen first, then the repellent.</li>
            <li><strong>A net, not a spray,</strong> for a baby under 6 months.</li>
          </ol>

          <h2>Repellent vs a Treated Yard: Use Both</h2>
          <p>Bug spray protects the child; a treated yard protects the space. Repellent is essential for hikes, cottages, sports, and travel — but reapplying it on a wriggling toddler every couple of hours gets old fast. A whole-yard <Link href="/mosquito-control">barrier treatment</Link> cuts the number of mosquitoes and ticks near the house so your backyard needs less spray in the first place. The two work together: treat the yard for everyday home use, and keep a bottle of icaridin 20% by the door for everywhere else.</p>
          <p>Parents in the GTA regularly ask us whether yard treatment itself is safe around children and pets. Our answer is to follow the product label: kids and pets stay off treated areas until the spray has dried — we cover the details in our guide to <Link href="/blog/is-mosquito-spray-safe-kids-pets">whether mosquito spray is safe for kids and pets</Link>.</p>
          <p className="not-prose text-sm text-gray-600 mb-2">For everywhere else, the format matters as much as the active ingredient. Repellent wipes live in a diaper bag or a glovebox without leaking, and they let you do a face-adjacent application by hand with no aerosol anywhere near a child&rsquo;s eyes.</p>
          <div className="not-prose mb-6">
            <BuyLink tag={AMZ_TAG} search="insect repellent wipes">Check repellent wipes on Amazon.ca →</BuyLink>
          </div>

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

      <ReadNext path="/blog/best-bug-spray-for-kids-canada" standalone />
    </>
  )
}
