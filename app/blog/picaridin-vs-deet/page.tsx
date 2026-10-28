import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import BuyLink from '@/components/BuyLink'
import TopPick from '@/components/TopPick'
import StickyBuyBar from '@/components/StickyBuyBar'
import TopBox from '@/components/TopBox'
import FreshnessStamp from '@/components/FreshnessStamp'
import AuthorByline from '@/components/AuthorByline'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import { tagForSlug } from '@/lib/amazon-clusters'
import { PROMISES } from '@/lib/constants'
import ReadNext from '@/components/ReadNext'
import NextUp from '@/components/NextUp'
import RelatedLinks from '@/components/RelatedLinks'
import Photo from '@/components/Photo'
import { shareImage } from '@/lib/photos'

const SLUG = 'picaridin-vs-deet'
const DATE = '2026-05-01'
const UPDATED = '2026-10-28'
const TITLE = 'Picaridin vs DEET Canada 2026 — Which Repellent Wins?'

const FAQS = [
  {
    question: 'Picaridin vs DEET — which works better?',
    answer: 'Both are highly effective. CATMAT, the Public Health Agency of Canada\'s travel-medicine committee, names DEET (20–30%) or icaridin (20%) the first choice for adults. The Canadian Paediatric Society puts icaridin (up to 20%) at about 5 to 7 hours against mosquitoes and DEET (up to 30%) at 5 to 8 hours, and lists both as protecting against ticks. Practical differences: picaridin is non-greasy, odourless, doesn\'t damage plastics or synthetic fabrics, and is more pleasant to apply. DEET has decades of safety data and slightly better black fly performance. For most Canadian outdoor activities — hiking, camping, evening BBQs, dog-walking — picaridin 20% is the modern go-to. DEET 30% remains the choice for blackfly-heavy cottage country.',
  },
  {
    question: 'Where to buy picaridin in Canada?',
    answer: 'Picaridin, labelled icaridin in Canada, is sold over the counter at pharmacies, big-box and outdoor stores and on Amazon.ca. Health Canada\'s registry listed 84 current domestic icaridin repellents on October 28, 2026, including Natrapel Icaridin (PCP 34244) and Natrapel Icaridin Spray (34555), Sawyer Icaridin pump spray (33032) and pressurized spray (33177), and S.C. Johnson\'s OFF! Deep Woods Insect Repellent 9 (30155) and 10 (33575), all 20%, plus Muskol, Coleman, Ben\'s and store brands. Whichever store you use, check the label for a PCP number.',
  },
  {
    question: 'How much do picaridin and DEET cost in Canada?',
    answer: 'We do not quote prices: they change by store, size and season, and a stale price is a wrong price. Compare like with like instead: the active ingredient and its strength (20% icaridin against up to 30% DEET for adults), the format (pump, aerosol or lotion) and the volume. For children, look for icaridin up to 20% or DEET at no more than 10%, the limits the Canadian Paediatric Society gives for kids 6 months and older.',
  },
  {
    question: 'Is picaridin safe for kids?',
    answer: 'Picaridin (icaridin) 20% products are labelled for children 6 months and older, and CATMAT, the Public Health Agency of Canada\'s travel-medicine committee, says 20% icaridin should be the first choice for children aged six months to 12 years. For children under 6 months, use physical barriers (mosquito netting on strollers, long sleeves) instead of any chemical repellent. Picaridin is preferred by many parents over DEET because it doesn\'t cause skin reactions in some children, doesn\'t have the strong DEET smell, and won\'t damage plastic toys, sunglasses, or watches that kids touch. Follow the label for how many applications a day are allowed for your child\'s age.',
  },
  {
    question: 'Is picaridin safe for pets and dogs?',
    answer: 'Picaridin is made for human skin, so incidental contact (e.g., a dog brushing against a person who has picaridin on their skin) is very different from applying it to the animal. Do NOT apply picaridin or DEET directly to your dog\'s coat for tick/flea prevention — these are formulated for human use. Dogs need pet-specific tick prevention (oral medications like NexGard or Bravecto, or vet-prescribed topicals). Cats are particularly sensitive — keep cats away from any freshly-applied repellent on humans until it dries. Picaridin is significantly less toxic to cats than permethrin (which is fatal to cats).',
  },
  {
    question: 'Does picaridin work against ticks?',
    answer: 'Yes. The Canadian Paediatric Society lists icaridin as protecting against ticks, including the blacklegged ticks that transmit Lyme disease in Ontario, and CATMAT names 20% icaridin a first-choice repellent alongside DEET. The label on your bottle gives its protection time against ticks. For maximum tick protection during Ontario hiking, layer picaridin or DEET on exposed skin PLUS permethrin on clothing. Permethrin actually kills ticks that contact treated fabric, while picaridin/DEET only repel those targeting bare skin. The combination cuts tick bites at more than one point.',
  },
  {
    question: 'How long does picaridin last vs DEET?',
    answer: 'The Canadian Paediatric Society puts icaridin (up to 20%) at about 5 to 7 hours against mosquitoes, and DEET at 5 to 8 hours at up to 30% (2.5 to 4.5 hours at the 10% strength used for children). HealthLink BC says icaridin may protect against mosquitoes for up to 7 hours. Health Canada\'s limit for adults and children over 12 is up to 30% DEET. Re-apply only as the label directs, and after swimming, heavy sweating, or rain.',
  },
  {
    question: 'Does picaridin damage clothing or sunglasses?',
    answer: 'No — this is one of picaridin\'s major advantages over DEET. Picaridin does not damage synthetic fabrics, plastics, painted surfaces, sunglasses, watches, or electronics. DEET (especially at 30%+) actively dissolves plastics — it can damage sunglass coatings, melt plastic watch straps, ruin synthetic clothing fibres, and damage rubber and silicone (think hiking gear, water bottles, phone cases). Anyone who hikes with high-end gear, takes photos outdoors, or uses prescription glasses should choose picaridin over DEET for that reason alone.',
  },
  {
    question: 'Can I use picaridin and DEET together?',
    answer: 'No reason to. They both work the same way (repelling biting insects via skin scent disruption) and using both doesn\'t increase protection. Pick ONE for skin application. The genuinely effective stacking strategy is: skin repellent (picaridin OR DEET) + clothing treatment (permethrin) + environmental control (BTI dunks for water + professional barrier spray for vegetation + Thermacell for stationary use). Each layer addresses a different vector — using two skin repellents at once just doubles the cost without improving results.',
  },
  {
    question: 'Why are picaridin and DEET still effective if mosquitoes have evolved resistance to insecticides?',
    answer: 'Picaridin and DEET don\'t kill mosquitoes — they REPEL them by interfering with the mosquito\'s ability to detect human scent (specifically, the lactic acid and CO₂ cues mosquitoes use to find blood meals). Resistance to insecticides happens when populations evolve enzymes that break down the chemical — but you can\'t evolve resistance to "I can\'t smell you anymore." Both compounds have been in use since the 1950s (DEET) and 1990s (picaridin) with no documented resistance. They\'re among the most reliable insect repellents in modern use.',
  },
  {
    question: 'What is picaridin?',
    answer: 'Picaridin is a synthetic insect repellent developed in the 1980s that repels mosquitoes, ticks, and black flies by blocking their ability to smell you — the same mechanism DEET uses. At up to 20% it protects against mosquitoes for about 5 to 7 hours and repels ticks (Canadian Paediatric Society), close to DEET while staying non-greasy, odourless, and gentle on plastics, sunglasses, and synthetic clothing. It is sold in Canada under PCP registration numbers and recommended by the World Health Organization for travel to disease-endemic regions. In Canada, picaridin is officially labelled "icaridin" — same molecule, different name.',
  },
  {
    question: 'Is icaridin the same as picaridin?',
    answer: 'Yes — icaridin and picaridin are two names for the exact same active ingredient (KBR 3023). "Icaridin" is the official name adopted by Health Canada and the World Health Organization, so Canadian product labels — Natrapel, OFF!, Sawyer — often read "icaridin 20%." "Picaridin" is the common name used in the United States and in everyday conversation. If a Canadian repellent lists icaridin, you are buying picaridin.',
  },
  {
    question: 'Is picaridin safe?',
    answer: 'Picaridin (icaridin) has been in wide use for decades. Products carry Canadian PCP registration numbers and US EPA registrations, and Canadian labels allow use on adults and children 6 months and older. It is less likely than DEET to irritate skin, and does not damage plastics or fabric. As with any repellent, apply only to exposed skin (not under clothing), avoid eyes and mouth, wash it off once indoors, and use physical barriers instead of chemical repellent for infants under 6 months.',
  },
  {
    question: 'Is Sawyer Picaridin sold in Canada?',
    answer: 'Yes, labelled as icaridin. Health Canada\'s registry lists Sawyer Icaridin Insect Repellent Pump Spray (PCP 33032) and Sawyer Icaridin Insect Repellent Pressurized Spray (PCP 33177), both 20% icaridin and current domestic registrations (searched October 28, 2026). When you buy online, check that the bottle shows one of those PCP numbers: a US-market Sawyer Picaridin bottle carries a US EPA registration number instead, and Health Canada says not to buy or use a pesticide whose label has no PCP number.',
  },
]

// TITLE NOTE (Oct 28, 2026): was 'Picaridin Insect Repellent Canada vs DEET (2026)'; top queries, 90 days to Oct 28: picaridin bug spray 54 at 8.4, picaridin 49 at 8.1, picaridin insect repellent canada 46 at 3.1 (2 clicks), sawyer picaridin insect repellent canada 37 at 6.2, picaridin insect repellent 31 at 6.6, best picaridin insect repellent canada 24 at 3.5 (430 impressions, 7 clicks).
export const metadata: Metadata = buildMetadata({
  title: 'Best Picaridin Insect Repellent Canada (vs DEET)',
  description: 'Picaridin (icaridin) 20% in Canada: Natrapel, Sawyer and OFF! carry PCP numbers. About 5-7 hours on mosquitoes, repels ticks, first choice for kids 6 months+.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  image: shareImage('mosquito-bites-forearm'),
})

const AMZ_TAG = tagForSlug('picaridin-vs-deet-canada')

export default function PicaridinVsDeetPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: '2026 head-to-head comparison: picaridin vs DEET in Canada.', slug: SLUG, datePublished: DATE, image: shareImage('mosquito-bites-forearm') })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Picaridin vs DEET Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Picaridin vs DEET</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">For most Canadians the repellent to buy is a 20% picaridin (labelled icaridin here): about 5 to 7 hours against mosquitoes, it repels ticks, it is the first choice for children 6 months to 12 years, and it will not damage plastics the way DEET does. Natrapel, Sawyer and OFF! all sell 20% icaridin repellents with Canadian PCP numbers.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <AffiliateDisclosure />
      <StickyBuyBar tag={AMZ_TAG} name="Picaridin 20% insect repellent (Natrapel / OFF! Defense / Sawyer)" search="natrapel picaridin insect repellent" label="Our top pick" />
      <TopBox tag={AMZ_TAG} name="Picaridin 20% insect repellent (Natrapel / OFF! Defense / Sawyer)" search="natrapel picaridin insect repellent" label="Our top pick" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">For most Canadian outdoor use, picaridin 20% is the best repellent to buy &mdash; it matches DEET&rsquo;s protection but is non-greasy, odourless, and won&rsquo;t damage plastics or synthetic clothing. Choose DEET 30% only for blackfly-heavy cottage country.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>Icaridin (picaridin) up to 20% protects against mosquitoes for about 5&ndash;7 hours and repels ticks (Canadian Paediatric Society).</li>
              <li>DEET up to 30% protects for about 5&ndash;8 hours and also covers ticks and biting flies (Canadian Paediatric Society).</li>
              <li>Canadian label limits allow both on children 6 months and older (DEET at 10% or less for children).</li>
              <li>Picaridin won&rsquo;t damage plastics, sunglasses, or synthetic fabrics; DEET 30%+ dissolves them.</li>
              <li>Natrapel (PCP 34244), Sawyer (33032) and OFF! Deep Woods 9 (30155) are current 20% icaridin registrations in Canada.</li>
              <li>Skin repellent lasts hours; licensed barrier spray treats the whole yard, from $99.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito, GTA mosquito &amp; tick control · 150+ five-star Google reviews</p>
          </div>
          <TopPick tag={AMZ_TAG}
            label="Our Top Pick"
            name="Picaridin 20% (Natrapel, OFF! Defense, or Sawyer)"
            blurb="The winner for most Canadians — the same 5–8 hour mosquito and 8-hour tick protection as DEET 30%, but non-greasy, odourless, and won’t damage plastics, sunglasses, or synthetic clothing."
            search="natrapel picaridin insect repellent"
            score={9.0}
            pros={['Matches DEET protection at 20%', 'Non-greasy, odourless, dries fast', 'Won’t damage plastics, sunglasses, or synthetic fabrics', 'Labelled for children from 6 months']}
            cons={['DEET slightly better on heavy blackflies', 'Protects skin only — not the whole yard']}
          />
        </div>
      </section>

      <section className="bg-gradient-to-br from-emerald-50 to-white border-b border-emerald-200 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Where to Buy in Canada · Registry checked October 2026</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">Picaridin and DEET: Where to Buy in Canada</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            Both are widely stocked across pharmacies, big-box retailers, and outdoor stores, so the brand matters less than the PCP number on the label. Health Canada&rsquo;s registry listed 84 current domestic icaridin repellents on October 28, 2026; these are the brands this page names. Choose by application preference (greasy vs non-greasy, scent, plastic compatibility) and format.
          </p>
          <div className="rounded-xl border border-navy-100 overflow-x-auto bg-white shadow-sm">
            <table className="min-w-[560px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Product (as registered)</th>
                  <th className="px-4 py-3 text-left">PCP no.</th>
                  <th className="px-4 py-3 text-left">Icaridin</th>
                  <th className="px-4 py-3 text-left">Registrant</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Natrapel Icaridin', pcp: '34244', pct: '20%', who: 'Tender Corporation' },
                  { name: 'Natrapel Icaridin Spray', pcp: '34555', pct: '20%', who: 'Tender Corporation' },
                  { name: 'Sawyer Icaridin Insect Repellent Pump Spray', pcp: '33032', pct: '20%', who: 'Sawyer Products' },
                  { name: 'Sawyer Icaridin Insect Repellent Pressurized Spray', pcp: '33177', pct: '20%', who: 'Sawyer Products' },
                  { name: 'OFF! Deep Woods Insect Repellent 9', pcp: '30155', pct: '20%', who: 'S. C. Johnson' },
                  { name: 'OFF! Deep Woods Insect Repellent 10', pcp: '33575', pct: '20%', who: 'S. C. Johnson' },
                  { name: 'OFF! FamilyCare Insect Repellent 8 Family', pcp: '30154', pct: '10%', who: 'S. C. Johnson' },
                ].map(({ name, pcp, pct, who }) => (
                  <tr key={pcp} className="border-b border-navy-50 last:border-0">
                    <td className="px-4 py-3 font-bold text-brand-800">{name}</td>
                    <td className="px-4 py-3 font-mono text-gray-800">{pcp}</td>
                    <td className="px-4 py-3 font-mono text-gray-800">{pct}</td>
                    <td className="px-4 py-3 text-xs text-gray-600">{who}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Current domestic registrations in Health Canada&rsquo;s <a href="https://pest-control.canada.ca/pesticide-registry/en/product-search.html" target="_blank" rel="noopener noreferrer" className="underline">Pesticide Product Information Database</a>, searched October 28, 2026; the registry has no product named &ldquo;OFF! Defense&rdquo;. Other Canadian brands with current icaridin registrations include Muskol, Coleman, Ben&rsquo;s, Mosquito Shield PiACTIVE and store brands; OFF!, Muskol, Ben&rsquo;s and Coleman also have current DEET registrations.
          </p>
          <div className="mt-5 rounded-xl bg-amber-50 border-l-4 border-amber-400 p-4">
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong className="text-amber-900">⚠️ Skin repellents protect YOU — not your yard.</strong> Picaridin and DEET work for roughly 5–8 hours of active outdoor use. For whole-yard mosquito and tick treatment that doesn&rsquo;t require re-applying every few hours, <Link href="/mosquito-control" className="text-emerald-700 underline font-semibold">professional barrier spray</Link> treats vegetation surfaces and is re-applied on a schedule.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-white border-b border-navy-100">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Repellent Explainer</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-3">What Is Picaridin (a.k.a. Icaridin in Canada)?</h2>
          <p className="text-base text-gray-800 leading-relaxed mb-4">
            <strong>Picaridin is a synthetic insect repellent that keeps mosquitoes, ticks, and black flies from biting by blocking their ability to smell you &mdash; as effective as DEET, but non-greasy, odourless, and gentle on plastics and clothing.</strong> It was developed in the 1980s, is sold in Canada under PCP registration numbers, and is recommended by the World Health Organization for travel to mosquito-borne-disease regions. At up to 20% it protects against mosquitoes for about 5&ndash;7 hours and repels ticks (Canadian Paediatric Society), and Canada&rsquo;s travel-medicine committee, CATMAT, names 20% icaridin the first choice for children six months to 12 years &mdash; the modern go-to for most Canadian outdoor activity.
          </p>
          <div className="rounded-xl bg-emerald-50 border-l-4 border-emerald-400 p-4">
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong className="text-emerald-900">Icaridin = picaridin.</strong> If you&rsquo;re shopping in Canada and see &ldquo;icaridin 20%&rdquo; on the label, that&rsquo;s the same molecule as picaridin. &ldquo;Icaridin&rdquo; is the official name adopted by Health Canada and the World Health Organization; &ldquo;picaridin&rdquo; is the common U.S. name. Canadian packaging for Natrapel, OFF!, and Sawyer often reads icaridin &mdash; you&rsquo;re still buying picaridin.
            </p>
          </div>
          <p className="text-sm text-gray-600 mt-4 leading-relaxed">
            Comparing it to the clothing-treatment option instead? See how <Link href="/blog/permethrin-canada-yard-clothing-spray" className="text-emerald-700 underline font-semibold">picaridin stacks up against permethrin</Link>, or read the full <Link href="/blog/mosquito-repellent-guide-ontario-2026" className="text-emerald-700 underline font-semibold">Ontario mosquito repellent guide</Link> for every layer that works.
          </p>
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Picaridin vs DEET — Side-by-Side Comparison</h2>
          <div className="rounded-xl border border-navy-100 overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Factor</th>
                  <th className="px-4 py-3 text-left">Picaridin 20%</th>
                  <th className="px-4 py-3 text-left">DEET 30%</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Mosquito protection', 'About 5–7 hours (up to 20%)', 'About 5–8 hours (up to 30%)'],
                  ['Tick protection', '✓ Repels ticks', '✓ Repels ticks'],
                  ['Blackfly protection', 'Good', 'Slightly better'],
                  ['Skin feel', 'Non-greasy, dries fast', 'Slightly greasy'],
                  ['Odour', 'Nearly odourless', 'Distinct chemical smell'],
                  ['Plastic / synthetic compatibility', '✓ No damage', '✗ Damages plastics'],
                  ['Sunglasses', '✓ No damage', '✗ Can damage coatings'],
                  ['Synthetic clothing', '✓ No damage', '✗ Damages nylon, spandex'],
                  ['Children (6+ months)', '✓ Labelled for use; first choice from 6 months to 12 years (CATMAT)', '✓ Max 10% DEET (Health Canada limit); once a day under 2, up to 3 times a day from 2 to 12'],
                  ['Years in market', '~30 (1990s)', '~70 (1950s)'],
                  ['Resistance', 'None documented', 'None documented'],
                  ['Best for', 'Daily outdoor use, hiking', 'Cottage country blackflies'],
                ].map(([k, pic, deet]) => (
                  <tr key={k} className="border-b border-navy-50 last:border-0">
                    <td className="px-4 py-2 font-semibold text-brand-800 bg-brand-50 w-1/3">{k}</td>
                    <td className="px-4 py-2 text-gray-700">{pic}</td>
                    <td className="px-4 py-2 text-gray-700">{deet}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-gray-500">Protection times and children&rsquo;s limits: Canadian Paediatric Society, <a href="https://caringforkids.cps.ca/handouts/safety-and-injury-prevention/insect_repellents" target="_blank" rel="noopener noreferrer" className="underline">Insect repellents</a> (July 2023); first-choice advice: CATMAT, <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6802427/" target="_blank" rel="noopener noreferrer" className="underline">Statement on personal protective measures to prevent arthropod bites</a> (Canada Communicable Disease Report, 2012). Product labels may claim longer protection; follow the label on your bottle.</p>
          <p className="mt-4 text-sm text-gray-600 flex flex-wrap items-center gap-2">
            <span>Compare live Canadian prices:</span>
            <BuyLink tag={AMZ_TAG} search="natrapel picaridin insect repellent" className="!px-3 !py-1.5 !text-xs">Picaridin 20% on Amazon.ca</BuyLink>
            <BuyLink tag={AMZ_TAG} search="off deep woods deet insect repellent" className="!px-3 !py-1.5 !text-xs">DEET 30% on Amazon.ca</BuyLink>
          </p>
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />
          <p className="not-prose text-sm text-gray-600 mb-1">Popular options with Canadian PCP registration numbers for each (Natrapel/OFF! picaridin, Muskol/OFF! DEET):</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="natrapel picaridin insect repellent">Check picaridin repellents on Amazon.ca →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="off deep woods deet insect repellent">Check DEET repellents →</BuyLink>
          </div>

          <h2>Best Picaridin Repellents in Canada</h2>
          <p>All three of these are 20% picaridin (often labelled &ldquo;icaridin 20%&rdquo; on Canadian packaging), sold with Canadian PCP registration numbers, and labelled for kids 6 months and older. Any one of them gives you about 5&ndash;7 hours against mosquitoes and repels ticks (Canadian Paediatric Society) &mdash; pick the format you like best. One naming note: Health Canada&rsquo;s registry has no product called OFF! Defense; S.&nbsp;C. Johnson&rsquo;s current 20% icaridin registrations include OFF! Deep Woods Insect Repellent 9 (PCP 30155) and 10 (33575), so check the PCP number on the OFF! bottle you buy.</p>
          <div className="not-prose grid gap-4 sm:grid-cols-3 my-6">
            <div className="rounded-xl border border-navy-100 bg-white p-4 shadow-sm flex flex-col">
              <p className="font-extrabold text-brand-900">Natrapel 20% Picaridin</p>
              <p className="text-sm text-gray-600 mt-1 mb-3 flex-1">Outdoor-store favourite &mdash; pump or continuous spray, travel-friendly, stocked at MEC and Atmosphere.</p>
              <BuyLink tag={AMZ_TAG} search="natrapel picaridin 20 percent">Check price on Amazon.ca →</BuyLink>
            </div>
            <div className="rounded-xl border border-navy-100 bg-white p-4 shadow-sm flex flex-col">
              <p className="font-extrabold text-brand-900">OFF! Defense Picaridin</p>
              <p className="text-sm text-gray-600 mt-1 mb-3 flex-1">Most-stocked pharmacy pick &mdash; lotion or spray, budget-friendly, easy to find at Shoppers and Canadian Tire.</p>
              <BuyLink tag={AMZ_TAG} search="off defense picaridin insect repellent">Check price on Amazon.ca →</BuyLink>
            </div>
            <div className="rounded-xl border border-navy-100 bg-white p-4 shadow-sm flex flex-col">
              <p className="font-extrabold text-brand-900">Sawyer Picaridin</p>
              <p className="text-sm text-gray-600 mt-1 mb-3 flex-1">Long-lasting lotion loved by hikers and travellers &mdash; one application covers a full day outdoors.</p>
              <BuyLink tag={AMZ_TAG} search="sawyer picaridin insect repellent">Check price on Amazon.ca →</BuyLink>
            </div>
          </div>
          <p className="text-sm text-gray-600">Skin repellent keeps bites off you for a few hours &mdash; it won&rsquo;t clear your yard. For hands-off, whole-property coverage, layer in <Link href="/mosquito-control">professional barrier spray</Link>, re-applied on a schedule.</p>
          <Photo id="mosquito-bites-forearm" alt="Several swollen mosquito bites fusing together on a forearm" caption="Several swollen mosquito bites fusing together on a forearm (CDC photograph, 2024). A repellent on exposed skin is the first defence against bites like these; re-apply only as the label directs." />

          <div className="not-prose my-6 rounded-xl border border-emerald-200 bg-emerald-50 p-5">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Buyer&rsquo;s checklist for a picaridin repellent</p>
            <ul className="space-y-1.5 text-sm text-gray-800 list-disc pl-5">
              <li><strong>A PCP number</strong> on the label. A US bottle carries an EPA number instead, and Health Canada says not to buy or use a pesticide with no PCP number.</li>
              <li><strong>&ldquo;Icaridin&rdquo; on the label</strong> is picaridin under its Canadian name.</li>
              <li><strong>20% for adults and children 6 months and older</strong> (Canadian Paediatric Society: up to 20% icaridin); a 10% bottle protects for a shorter time.</li>
              <li><strong>Labelled for use on people</strong> as an insect repellent (Health Canada&rsquo;s advice for choosing one).</li>
              <li><strong>The format you will actually use:</strong> pump, aerosol, lotion or towelette.</li>
              <li><strong>Nothing under 6 months:</strong> Health Canada says icaridin products should not be used on infants that young.</li>
            </ul>
          </div>

          <NextUp path="/blog/picaridin-vs-deet" />
          <h2>What Each Compound Actually Does</h2>
          <p><strong>DEET</strong> (N,N-Diethyl-meta-toluamide) was developed by the US military in 1946 and registered for civilian use in 1957. It works by interfering with mosquitoes&rsquo; olfactory receptors — they essentially can&rsquo;t smell you when DEET is on your skin. Eight decades of human use have produced extensive safety data; rare side effects include skin irritation in sensitive individuals.</p>
          <p>The questions readers ask next are almost always about safety — Health Canada&rsquo;s 30% adult and 10% child concentration caps, the cancer claims that circulate online, and whether it is acceptable in pregnancy. We work through each of those in <Link href="/blog/is-deet-safe">our DEET safety explainer</Link>.</p>
          <p><strong>Picaridin</strong> (also called icaridin) was developed in the 1980s and is now sold in Canada under PCP registration numbers. It works similarly to DEET — disrupting the mosquito&rsquo;s ability to detect human scent compounds (lactic acid, CO₂, octenol). Modern formulations are odourless, non-sticky, and gentle on plastics and synthetic fabrics. The World Health Organization recommends picaridin for travel to disease-endemic regions.</p>
          <Photo id="culex-pipiens" alt="Northern house mosquito, Culex pipiens, photographed in Ontario" caption="A northern house mosquito, Culex pipiens, photographed in Ontario, Canada. DEET and picaridin both work by interfering with how mosquitoes like this one detect you, not by killing them." />

          <h2>The Plastic-Damage Problem with DEET</h2>
          <p>If you&rsquo;ve ever applied DEET spray and accidentally got it on your sunglasses, watch, or hiking gear, you may have noticed coatings clouding or plastics turning sticky. DEET is a known plasticizer — it actively breaks down many synthetic materials. Specifically affected:</p>
          <ul>
            <li>Polycarbonate sunglasses (anti-reflective coatings dissolve)</li>
            <li>Nylon hiking pants and shirts</li>
            <li>Spandex/Lycra athletic wear</li>
            <li>Plastic watch straps and silicone bands</li>
            <li>Phone cases (especially TPU)</li>
            <li>Vinyl and PVC (camping gear, raincoats)</li>
            <li>Some painted surfaces (kayaks, gear)</li>
          </ul>
          <p>Picaridin doesn&rsquo;t damage any of these materials. For Ontario hikers with $200 sunglasses or a $400 rain jacket, that alone is reason enough to choose picaridin.</p>

          <RelatedLinks path="/blog/picaridin-vs-deet" />
          <h2>The Smart Layered Strategy for Canadian Outdoor Activity</h2>
          <p>Skin repellent alone is rarely the complete answer. The best protection layers multiple tools that each address a different vector:</p>
          <ol>
            <li><strong>Skin: Picaridin 20% or DEET 30%</strong> — apply to exposed skin before going outdoors</li>
            <li><strong>Clothing: <Link href="/blog/permethrin-canada-yard-clothing-spray">Permethrin-treated clothing</Link></strong> — factory pre-treated hiking pants, socks, hat (kills ticks on contact)</li>
            <li><strong>Patio: <Link href="/blog/thermacell-canada-where-to-buy">Thermacell</Link></strong> — 4.5m repellent zone around your seating area</li>
            <li><strong>Yard vegetation: <Link href="/mosquito-control">Professional barrier spray</Link></strong> — targets mosquitoes and ticks where they rest, re-applied on a schedule</li>
            <li><strong>Standing water: <Link href="/blog/mosquito-dunks-canada-guide">BTI dunks</Link></strong> — kills larvae before they become biting adults</li>
          </ol>
          <Photo id="blacklegged-tick-adult-nymph-fingertip" alt="Blacklegged tick adult and nymph on a fingertip" caption="A blacklegged tick adult female (left) and nymph (right) on a fingertip (CDC). Picaridin and DEET both repel ticks on skin; ticks this small are why the layers above add treated clothing." />

          <h2>For Children and Pets — Safety Reminders</h2>
          <p><strong>Children 6 months+:</strong> Health Canada&rsquo;s label limits allow picaridin (icaridin) 20% and DEET at no more than 10% for this age group, and CATMAT, the Public Health Agency of Canada&rsquo;s travel-medicine committee, names 20% icaridin the first choice from six months to 12 years. Apply to your hands first, then rub onto the child&rsquo;s exposed skin (not face — apply to your hands, rub on the back of their neck and ears). Avoid hands and around eyes/mouth.</p>
          <p><strong>Children under 6 months:</strong> No chemical repellents. Use mosquito netting on strollers and physical barriers (long sleeves, lightweight pants).</p>
          <p><strong>Dogs:</strong> Don&rsquo;t apply human repellents directly. Use vet-prescribed oral or topical tick/flea prevention. Neither is made for animals, so keep pets from licking treated skin.</p>
          <p><strong>Cats:</strong> Keep away from freshly-applied repellent on humans until it dries. NEVER apply permethrin near cats — it&rsquo;s fatal to them.</p>

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/off-deep-woods-deet-bug-spray-canada">OFF! Deep Woods DEET Bug Spray — Canada Review</Link></li>
            <li><Link href="/blog/best-bug-spray-for-kids-canada">Best Bug Spray for Kids in Canada</Link></li>
            <li><Link href="/blog/permethrin-canada-yard-clothing-spray">Permethrin Canada — Clothing Spray Guide</Link></li>
            <li><Link href="/blog/thermacell-canada-where-to-buy">Thermacell Canada Guide</Link></li>
            <li><Link href="/blog/mosquito-repellent-guide-ontario-2026">Complete Ontario Mosquito Repellent Guide 2026</Link></li>
            <li><Link href="/blog/natural-mosquito-repellent-ontario">Natural Mosquito Repellent — What Actually Works</Link></li>
            <li><Link href="/mosquito-control">BuzzSkito Professional Mosquito Control Service</Link></li>
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

      <ReadNext path="/blog/picaridin-vs-deet" standalone />
    </>
  )
}
