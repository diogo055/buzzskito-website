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
import ReadNext from '@/components/ReadNext'
import NextUp from '@/components/NextUp'
import RelatedLinks from '@/components/RelatedLinks'
import Photo from '@/components/Photo'
import { shareImage } from '@/lib/photos'

const SLUG = 'best-tick-repellent'
// DRAFT (Nov 6, 2026): set DATE and UPDATED to the real release day before this ships (a lastmod must be a true date).
const DATE = '2026-11-06'
const UPDATED = '2026-11-06'
const TITLE = 'Best Tick Repellent in Canada 2026 — DEET vs Icaridin for Ticks'
const META_TITLE = 'Best Tick Repellent in Canada: DEET vs Icaridin'
// REGISTRY NOTE (Nov 6, 2026, owner's rule: recommend and link only products registered in Canada): every product with
// a button on this page has a current registration in Health Canada's Pesticide Product Information Database and an
// approved Canadian label that names ticks; that label was read for each featured product. Reg. Nos., label document ids
// and what each label says are in this page's notes.md. Buttons are search links built from the registered product names;
// no ASIN was added, because none was checked against a Canadian-labelled listing.
const CHECKED = 'November 6, 2026'

const FAQS = [
  {
    question: 'What is the best tick repellent in Canada?',
    answer: 'For most people, a 20% icaridin (picaridin) spray whose Canadian label names ticks. Natrapel Icaridin (Reg. No. 34244 or 34555) and Ben’s Tick Repellent (33704) both claim 12 hours against mosquitoes and ticks and can be used from 6 months of age, and OFF! Deep Woods Insect Repellent 9 (30155) claims up to 8 hours against ticks. Adults who prefer DEET can use a 25 to 30% product such as Ben’s 30 Wilderness Formula (27406) or OFF! Deep Woods 3 (24723); their labels list ticks but say not to use them on children under 12. Whatever you buy, look for the PCP registration number on the label: Health Canada says every pesticide registered in Canada has an approved label with a registration number.',
  },
  {
    question: 'Does DEET repel ticks?',
    answer: 'Yes. The Public Health Agency of Canada’s 2015 review of Lyme disease prevention says DEET protects against tick bites, the Canadian Paediatric Society lists ticks among the pests DEET protects against, and Canadian DEET labels such as Ben’s 30 and OFF! Deep Woods name ticks. In a lab study on volunteers, 20% DEET gave a median of 4 to 4.5 hours of complete protection against blacklegged tick nymphs (Büchel and colleagues, 2015). Health Canada allows up to 30% DEET for adults and children over 12, and up to 10% for children 6 months to 12 years.',
  },
  {
    question: 'DEET or icaridin: which is better for ticks?',
    answer: 'Both are recommended by the Public Health Agency of Canada, and the studies do not crown a clear winner. In one lab study, 10% icaridin protected for a median of 5 hours against blacklegged tick nymphs and 20% DEET for 4 to 4.5 hours (Büchel and colleagues, 2015). In Consumer Reports’ small 2024 test of four US repellents, the two DEET products lasted longest, and CR said that was not enough data to say every DEET product beats every picaridin product. The Canadian labels decide it for most families: 20% icaridin labels claim 8 to 12 hours against ticks and can be used from 6 months of age, and most say they will not damage plastics or synthetic materials, while 25 to 30% DEET labels say not to use them on children under 12 and warn they may damage synthetic fabrics and plastics.',
  },
  {
    question: 'What is the best tick repellent for kids?',
    answer: 'For children 6 months and older, a 20% icaridin product. The Canadian Paediatric Society says repellents with up to 20% icaridin can be used from 6 months and protect against ticks, and the labels of Natrapel Icaridin and Ben’s Tick Repellent claim 12 hours. If you use DEET on a child, Health Canada’s limit is 10% from 6 months to 12 years: no more than once a day under age 2, up to 3 times a day from 2 to 12, and not daily for more than a month. Do not use DEET or icaridin on babies under 6 months. Apply the repellent yourself, never to a child’s hands, and do a full-body tick check after outdoor play.',
  },
  {
    question: 'Is there a natural tick repellent that works?',
    answer: 'Oil of lemon eucalyptus, hydrated, cyclized (Citriodiol) at 30% is a plant-derived active registered in Canada with ticks on its labels. Murphy’s Outdoors Lemon Eucalyptus Oil Mosquito & Tick Repellent (Reg. No. 35409) and Natrapel’s lemon eucalyptus Insect Repellent (30823) both claim up to 5 hours against ticks and allow no more than two applications a day. Health Canada’s repellent page says lemon-eucalyptus products should not be used on children under 3. Cedar-oil sprays such as Wondercide and Cedarcide, homemade essential-oil sprays and any “natural” spray without a PCP number are not registered tick repellents in Canada, and the Canadian Paediatric Society says natural repellents may not protect against tick bites.',
  },
  {
    question: 'How long does tick repellent last?',
    answer: 'As long as its Canadian label says, which varies by product: 12 hours against ticks for Natrapel Icaridin, Ben’s Tick Repellent and Sawyer Icaridin (all 20% icaridin), up to 8 hours for OFF! Deep Woods Insect Repellent 9, 7 hours for Avon’s 10% icaridin spray, up to 5 hours for 30% lemon-eucalyptus products, about 6 hours for Ben’s 30% DEET and 2 hours for 10% PMD (OFF! Botanicals). Some labels also cap the number of applications: Sawyer and the lemon-eucalyptus products say no more than twice a day. Re-apply only as your label directs.',
  },
  {
    question: 'Should I spray tick repellent on my clothes?',
    answer: 'The Public Health Agency of Canada advises applying a DEET or icaridin repellent to clothing and exposed skin, following the label directions. Never apply it under clothing. DEET labels warn it may damage synthetic fabrics and plastics, while icaridin labels such as Natrapel’s say it will not damage plastic or other synthetic materials. If you want a spray made for clothing, Doktor Doom Tick Repellent for Clothing + (30% DEET, Reg. No. 34725) is labelled for clothing and exposed skin, for ages 12 and up. Permethrin sprays for treating your own clothes are not approved in Canada.',
  },
  {
    question: 'Can I buy permethrin spray for clothing in Canada?',
    answer: 'Not as a registered consumer product: the Public Health Agency of Canada says permethrin liquids or sprays for consumers to treat their own clothing are not approved for use in Canada. What is approved is clothing treated at the factory, for people over 16. Look for the PCP number on the garment’s label, such as No Fly Zone (Reg. No. 32757), which Mark’s imports and whose label says the treatment lasts 70 washings. PHAC says treated clothing does not give complete protection and should be combined with a DEET or icaridin repellent on exposed skin.',
  },
  {
    question: 'Can I use tick repellent while pregnant?',
    answer: 'The Public Health Agency of Canada lists approved insect repellent containing DEET or icaridin, used as the label directs, among the things it says are safe to use during pregnancy, along with permethrin-treated clothing. Its permethrin page recommends not wearing treated clothing while nursing, because it puts the baby in close contact with the fabric. PHAC also says tick-bite precautions remain important during pregnancy.',
  },
  {
    question: 'What should I do after being in tick habitat?',
    answer: 'Before going inside, check yourself, your clothing, your gear and your pets. Then put dry clothes in the dryer on high heat for at least 10 minutes, shower as soon as you can, and do a full-body tick check on yourself and your children (Public Health Agency of Canada). The CDC’s list of places to look: under the arms, in and around the ears, inside the belly button, behind the knees, in and around the hair, between the legs and around the waist. In a Connecticut study, bathing within 2 hours and checking for ticks within 36 hours of time in the yard were both linked with lower odds of Lyme disease. If you find an attached tick, remove it promptly with fine-tipped tweezers.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'Best tick repellent in Canada: 20% icaridin (Natrapel, Ben’s Tick) or DEET up to 30%. PCP numbers, which labels name ticks, kids’ age rules, what to skip.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
  image: shareImage('blacklegged-tick-questing-grass'),
})

const AMZ_TAG = tagForSlug('best-tick-repellent')

// One row per current Canadian registration whose approved label names ticks (Health Canada registry, checked Nov 6, 2026).
// `search` empty = no button (house brand, clothing, or not our pick); `note` is shown instead.
const REPELLENTS = [
  { name: 'Natrapel Icaridin (continuous spray) and Natrapel Icaridin Spray (pump)', reg: '34244, 34555', active: 'Icaridin 20%', ticks: 'Yes: 12 hours', age: '6 months', search: 'natrapel icaridin', note: '' },
  { name: 'Ben’s Tick Repellent (pump)', reg: '33704', active: 'Icaridin 20%', ticks: 'Yes: 12 hours', age: '6 months', search: "ben's tick repellent icaridin", note: '' },
  { name: 'Sawyer Icaridin Insect Repellent (pump; pressurized spray is 33177)', reg: '33032', active: 'Icaridin 20%', ticks: 'Yes: 12 hours; no more than 2 applications a day', age: '6 months', search: '', note: 'Buy only a bottle that shows Reg. No. 33032 or 33177' },
  { name: 'OFF! Deep Woods Insect Repellent 9', reg: '30155', active: 'Icaridin 20%', ticks: 'Yes: up to 8 hours (7 for mosquitoes)', age: '6 months', search: 'off deep woods icaridin insect repellent', note: '' },
  { name: 'Avon Skin-So-Soft Bug Guard Plus Icaridin Spray', reg: '30152', active: 'Icaridin 10%', ticks: 'Deer ticks: re-apply after 7 hours', age: '6 months', search: '', note: 'Sold by Avon representatives and avon.ca' },
  { name: 'Ben’s 30 Wilderness Formula (Eco-Spray version: 28547)', reg: '27406', active: 'DEET 30%', ticks: 'Yes: re-apply after 6 hours', age: '12 years', search: "ben's 30 wilderness formula", note: '' },
  { name: 'Ben’s Tick & Insect Repellent Wipes', reg: '27614', active: 'DEET 30%', ticks: 'Yes: re-apply after about 6 hours', age: '12 years', search: "ben's tick and insect repellent wipes", note: '' },
  { name: 'OFF! Deep Woods 3 (aerosol)', reg: '24723', active: 'DEET 25%', ticks: 'Yes, but no tick time given (8 hours for mosquitoes)', age: '12 years', search: 'off deep woods deet insect repellent', note: '' },
  { name: 'Muskol Backcountry Tick Repellent', reg: '33873', active: 'DEET 30%', ticks: 'Yes (registry pest list)', age: 'Over 12 (Health Canada’s limit for 30% DEET)', search: '', note: 'Registered to Canadian Tire' },
  { name: 'Doktor Doom Tick Repellent for Clothing +', reg: '34725', active: 'DEET 30%', ticks: 'Yes, but no tick time given (6 hours for mosquitoes); for clothing and skin', age: '12 years', search: 'doktor doom tick repellent for clothing', note: '' },
  { name: 'Ben’s Family Spray', reg: '28903', active: 'DEET 10%', ticks: 'Yes, but no tick time given (3 hours for mosquitoes)', age: '6 months (once a day under 2)', search: "ben's family spray deet", note: '' },
  { name: 'Murphy’s Outdoors Lemon Eucalyptus Oil Mosquito & Tick Repellent', reg: '35409', active: 'Oil of lemon eucalyptus 30%', ticks: 'Yes: up to 5 hours; no more than twice a day', age: 'Label: 6 months (Health Canada’s page: 3 years)', search: '', note: 'Buy only a bottle that shows Reg. No. 35409' },
  { name: 'Natrapel Insect Repellent (lemon eucalyptus)', reg: '30823', active: 'Oil of lemon eucalyptus 30%', ticks: 'Yes: up to 5 hours; no more than twice a day', age: '3 years', search: 'natrapel lemon eucalyptus insect repellent', note: '' },
  { name: 'OFF! Botanicals Insect Repellent', reg: '34594', active: 'PMD 10%', ticks: 'Yes: re-apply after 2 hours; no more than twice a day', age: '3 years', search: '', note: 'Not our pick: 2-hour tick label' },
  { name: 'No Fly Zone treated clothing', reg: '32757', active: 'Permethrin 0.52% (in the fabric)', ticks: 'Yes: treatment lasts 70 washings', age: 'Not for children under 16 (Health Canada)', search: '', note: 'Clothing, imported by Mark’s' },
]

export default function BestTickRepellentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Tick repellents registered in Canada, which labels name ticks, and how DEET and icaridin compare for ticks.', slug: SLUG, datePublished: DATE, dateModified: UPDATED, image: shareImage('blacklegged-tick-questing-grass') })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Best Tick Repellent in Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-amber-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Best Tick Repellent</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">The best tick repellent for most Canadians is a 20% icaridin (picaridin) spray whose Canadian label names ticks: Natrapel Icaridin and Ben&rsquo;s Tick Repellent both claim 12 hours against ticks and can be used from 6 months of age. Adults who prefer DEET can use 25 to 30%, the top of Health Canada&rsquo;s range. Every product we recommend on this page has a current Health Canada registration, and we give the number so you can check the bottle.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <AffiliateDisclosure />
      <StickyBuyBar tag={AMZ_TAG} name="Natrapel 20% Icaridin Tick and Insect Repellent" asin="B0BYFF3S3V" search="natrapel icaridin" label="Best overall tick repellent" />
      <TopBox tag={AMZ_TAG} name="Natrapel 20% Icaridin Tick and Insect Repellent" asin="B0BYFF3S3V" search="natrapel icaridin" label="Best overall tick repellent" />

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />
          <div className="not-prose bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">Use a registered repellent with DEET or icaridin on exposed skin and clothing, as the Public Health Agency of Canada advises. For most people the best choice is 20% icaridin: the Canadian labels of Natrapel Icaridin, Ben&rsquo;s Tick Repellent and Sawyer Icaridin claim 12 hours against ticks, from 6 months of age. DEET at 25 to 30% (Ben&rsquo;s 30, OFF! Deep Woods) also lists ticks, for ages 12 and up.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>Health Canada: &ldquo;Icaridin products repel mosquitoes and ticks.&rdquo; Not for infants under 6 months.</li>
              <li>DEET: up to 30% for adults and children over 12; up to 10% from 6 months to 12 years (once a day under 2, up to 3 times a day from 2 to 12); none under 6 months.</li>
              <li>Plant-derived options with ticks on Canadian labels: 30% oil of lemon eucalyptus (up to 5 hours) and 10% PMD (re-apply after 2 hours).</li>
              <li>Permethrin sprays for treating your own clothes are not approved in Canada; factory-treated clothing such as No Fly Zone (Reg. No. 32757) is, for people over 16.</li>
              <li>Repellent wristbands, ankle bands and ultrasonic devices are on Health Canada&rsquo;s list of products that do not protect well.</li>
              <li>After time in tick habitat: dry clothes on high heat for 10 minutes, shower, and do a full-body tick check (Public Health Agency of Canada).</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito, GTA mosquito &amp; tick control &middot; 150+ five-star Google reviews</p>
          </div>

          <TopPick tag={AMZ_TAG}
            label="Our Top Pick"
            asin="B0BYFF3S3V"
            name="Natrapel 20% Icaridin (Reg. No. 34244 or 34555)"
            blurb="The pick for most Canadian families: 20% icaridin with a Canadian label that claims 12 hours against mosquitoes and ticks, for use from 6 months of age. Its label says it is not greasy and will not damage plastic or other synthetic materials."
            search="natrapel icaridin"
            pros={['12-hour tick claim on the Canadian label', 'For use from 6 months of age', 'Label: will not damage plastic or synthetics', 'Continuous spray (34244) or pump (34555)']}
            cons={['Protects only the skin you treat, not your yard', 'The continuous spray is extremely flammable']}
          />

          <p className="not-prose text-sm text-gray-600 mb-1">Want a bottle that says &ldquo;tick&rdquo; on the front, or an OFF! formula? These are 20% icaridin with ticks on their Canadian labels too:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="ben's tick repellent icaridin">Ben&rsquo;s Tick Repellent on Amazon.ca →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="off deep woods icaridin insect repellent">OFF! Deep Woods icaridin →</BuyLink>
          </div>

          <p className="lead text-xl text-gray-700 leading-relaxed mb-6">Many &ldquo;best tick repellent&rdquo; lists are written for American shoppers and recommend products that are not registered here: permethrin clothing sprays, Cutter, Repel, and bottles that carry only a US EPA number. This is the Canadian version. Every product we recommend has a current Health Canada registration and an approved label that names ticks, and every rule comes from Health Canada, the Public Health Agency of Canada or the Canadian Paediatric Society. We did not test these products; the protection times are the labels&rsquo; own claims.</p>

          <h2>Tick Repellents Registered in Canada, Compared</h2>
          <p>Every row is a current registration in Health Canada&rsquo;s Pesticide Product Information Database, checked {CHECKED}, with ticks on its approved label. The times are what each label claims for ticks; where a label gives a time only for mosquitoes, the table says so.</p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm my-6">
            <table className="min-w-[820px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-3 py-3 text-left">Product (as registered)</th>
                  <th className="px-3 py-3 text-left">Reg. No.</th>
                  <th className="px-3 py-3 text-left">Active</th>
                  <th className="px-3 py-3 text-left">Ticks on the label</th>
                  <th className="px-3 py-3 text-left">Youngest age</th>
                  <th className="px-3 py-3 text-left">Buy</th>
                </tr>
              </thead>
              <tbody>
                {REPELLENTS.map(({ name, reg, active, ticks, age, search, note }) => (
                  <tr key={reg} className="border-b border-navy-50 last:border-0 align-top">
                    <td className="px-3 py-3 font-bold text-brand-800">{name}</td>
                    <td className="px-3 py-3 font-mono text-gray-800 whitespace-nowrap">{reg}</td>
                    <td className="px-3 py-3 text-gray-700">{active}</td>
                    <td className="px-3 py-3 text-gray-700">{ticks}</td>
                    <td className="px-3 py-3 text-gray-700">{age}</td>
                    <td className="px-3 py-3 min-w-[170px]">{search ? <BuyLink tag={AMZ_TAG} search={search} block>Check price on Amazon.ca →</BuyLink> : <span className="text-xs text-gray-500">{note}</span>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="not-prose text-xs text-gray-500 mb-6">Sources: the approved Canadian label of each product in Health Canada&rsquo;s <a href="https://pest-control.canada.ca/pesticide-registry/en/product-search.html" target="_blank" rel="noopener noreferrer" className="underline">Pesticide Product Information Database</a>, read {CHECKED}; for Muskol Backcountry Tick Repellent, the registry&rsquo;s pest list. Health Canada&rsquo;s age limits for DEET and lemon eucalyptus: <a href="https://www.canada.ca/en/health-canada/services/about-pesticides/insect-repellents.html" target="_blank" rel="noopener noreferrer" className="underline">Personal insect repellents</a>. Registrations change: check the number on the bottle you buy.</p>

          <NextUp path="/blog/best-tick-repellent" />
          <h2>What Health Canada and the Public Health Agency of Canada Recommend</h2>
          <p>The Public Health Agency of Canada (PHAC) keeps its advice for tick areas short. Before you go, it says to &ldquo;apply insect repellent containing DEET or Icaridin to clothing and exposed skin&rdquo; and to follow the label, to wear closed-toe shoes and light-coloured long sleeves and pants, to tuck your shirt into your pants and your pants into your socks, and to consider permethrin-treated clothing. Ontario&rsquo;s tick page gives the same advice: a repellent that says DEET or icaridin, on your clothes and exposed skin.</p>
          <p>Health Canada sets the rules for each active ingredient. Its personal insect repellents page says to use a registered product labelled as an insect repellent for use on people, which you can recognize by the PCP (Pest Control Products) registration number on the label, and that &ldquo;Icaridin products repel mosquitoes and ticks.&rdquo; The page does not list pests for DEET; the label does. PHAC&rsquo;s 2015 review of Lyme disease prevention says DEET protects against tick bites, that 20 to 30% products generally protect longer, and that icaridin gives levels and periods of protection similar to DEET.</p>
          <ul>
            <li><strong>DEET:</strong> up to 30% for adults and children over 12; up to 10% for children 2 to 12 (up to 3 times a day) and for children 6 months to 2 years (no more than once a day); none under 6 months. For children under 12, Health Canada also says not to use a DEET product daily for more than a month.</li>
            <li><strong>Icaridin (picaridin):</strong> repels mosquitoes and ticks; not for infants under 6 months. The icaridin repellents named on this page are 10% or 20%.</li>
            <li><strong>Oil of lemon eucalyptus and PMD:</strong> Health Canada&rsquo;s page lists them for mosquitoes (some also black flies) and says not to use them on children under 3. Several Canadian labels now add ticks; see the natural section below.</li>
            <li><strong>Soybean oil and metofluthrin clip-ons:</strong> soybean oil is listed for mosquitoes and black flies, metofluthrin for mosquitoes; neither for ticks.</li>
            <li><strong>Permethrin:</strong> only as factory-treated clothing, which is not available for children under 16.</li>
          </ul>
          <Photo id="blacklegged-tick-questing-grass" alt="Blacklegged (deer) tick questing on a blade of grass, side view" caption="A blacklegged (deer) tick questing on a blade of grass (CDC photograph). PHAC’s 2015 review describes blacklegged ticks waiting in leaf litter and on low vegetation, grabbing passing hosts and then crawling to find a place to feed." />

          <h2>DEET vs Icaridin for Ticks: What the Evidence Says</h2>
          <p>Both work on ticks, and the studies do not crown a clear winner:</p>
          <ul>
            <li><strong>A lab test on volunteers.</strong> Against blacklegged tick nymphs, 20% DEET gave a median of 4 to 4.5 hours of complete protection and 10% icaridin a median of 5 hours (Büchel and colleagues, 2015). The same 10% icaridin lasted 8 hours against the European castor bean tick. These were plain solutions of each ingredient on forearms, not the bottles sold in Canada.</li>
            <li><strong>Consumer Reports, 2024.</strong> In a small test of four US repellents against blacklegged ticks, the two DEET products protected longest, then 30% oil of lemon eucalyptus, then 20% picaridin. All four generally gave at least several hours, and CR cautioned that this was not enough data to say every DEET product beats every picaridin or lemon-eucalyptus product.</li>
            <li><strong>PHAC&rsquo;s review, 2015.</strong> Icaridin provides levels and periods of protection similar to DEET, and, unlike DEET, its use at 20% is not limited to older children.</li>
            <li><strong>Real-world disease.</strong> In a Connecticut case-control study, routine use of tick repellent on skin or clothing was 20% effective against Lyme disease, and protective clothing 40% (Vázquez and colleagues, 2008). A 2022 review by a CDC scientist found the results for each personal protection measure mixed across studies. Repellent can lower the odds; it does not replace the tick check.</li>
          </ul>
          <p>So the choice comes down to what the Canadian labels allow:</p>
          <div className="not-prose rounded-xl border border-navy-100 overflow-x-auto my-6">
            <table className="min-w-[560px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">On the Canadian label</th>
                  <th className="px-4 py-3 text-left">20% icaridin (picaridin)</th>
                  <th className="px-4 py-3 text-left">25&ndash;30% DEET</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Tick time', 'Up to 8 hours (OFF! Deep Woods 9) to 12 hours (Natrapel, Ben’s Tick Repellent, Sawyer)', 'Ticks listed; Ben’s 30 says re-apply after 6 hours; OFF! Deep Woods 3 gives 8 hours for mosquitoes only'],
                  ['Youngest age', '6 months', '12 years (Health Canada allows 10% DEET from 6 months)'],
                  ['Plastics and synthetic fabrics', 'Natrapel, Ben’s Tick and Sawyer labels: will not damage plastic or synthetic materials', 'Ben’s 30: may damage plastic, painted surfaces, synthetic fabrics or leather; OFF! Deep Woods 3: avoid rayon, dynel and acetate'],
                  ['Applications a day', 'Sawyer: no more than 2; Natrapel and Ben’s: re-apply after 12 hours if needed', 'As the label directs; Health Canada’s limits apply to children'],
                  ['Pregnancy', 'PHAC lists DEET or icaridin repellents, used as labelled, as safe to use during pregnancy', 'Same'],
                  ['Best for', 'Families, children from 6 months, long days outside, technical clothing and gear', 'Adults and teens over 12 who prefer DEET'],
                ].map(([k, ica, deet]) => (
                  <tr key={k} className="border-b border-navy-50 last:border-0 align-top">
                    <td className="px-4 py-2 font-semibold text-brand-800 bg-brand-50 w-1/4">{k}</td>
                    <td className="px-4 py-2 text-gray-700">{ica}</td>
                    <td className="px-4 py-2 text-gray-700">{deet}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>For most families, 20% icaridin wins on the labels: the longest tick claims we found on Canadian labels, use from 6 months, and, on most of them, no harm to gear. DEET at 25 to 30% is a sound choice for anyone over 12 who prefers it: PHAC&rsquo;s 2015 review called it the most widely available repellent in Canada, and it did best in Consumer Reports&rsquo; small tick test. Our <Link href="/blog/picaridin-vs-deet">picaridin vs DEET comparison</Link> covers mosquitoes and black flies as well, and <Link href="/blog/is-deet-safe">is DEET safe?</Link> goes through the concentration caps and the health questions.</p>
          <Photo id="blacklegged-tick-adult-nymph-fingertip" alt="Blacklegged tick adult female and a much smaller nymph on a fingertip" caption="A blacklegged tick adult female (left) and nymph (right) on a fingertip (CDC photograph). The lab test above used nymphs, the small stage PHAC’s review says is harder to find and remove before it can transmit Lyme disease bacteria." />

          <h2>The Best Tick Repellents in Canada, by Need</h2>
          <p>Every product in this section has a current Canadian registration and a label that names ticks. The times are the labels&rsquo; claims. OFF!&rsquo;s own Botanicals label notes that swimming, sweating, vigorous activity or towelling can mean re-applying sooner, so re-apply as your label allows.</p>

          <h3>Best overall: Natrapel 20% Icaridin</h3>
          <p>Natrapel&rsquo;s 20% icaridin has two Canadian registrations: Natrapel Icaridin, a continuous spray (Reg. No. 34244), and Natrapel Icaridin Spray, a pump (34555). Both labels claim 12 hours against mosquitoes and ticks and 10 hours against black flies, say to re-apply after 12 hours if necessary, and say not to use it on infants under 6 months or on the hands of smaller children. The label also says it will not damage fishing line, plastic or other synthetic materials, which matters if you wear a rain shell or sunglasses. The continuous spray is pressurized and extremely flammable, so keep it away from heat and flame.</p>
          <p className="not-prose mb-6"><BuyLink tag={AMZ_TAG} search="natrapel icaridin">Check Natrapel 20% icaridin on Amazon.ca →</BuyLink></p>

          <h3>Best &ldquo;tick&rdquo; bottle: Ben&rsquo;s Tick Repellent (20% icaridin)</h3>
          <p>Ben&rsquo;s Tick Repellent (Reg. No. 33704) has the same registrant as Natrapel, Tender Corporation, and its pump-spray label makes the same claims: 12 hours against mosquitoes and ticks, 10 hours against black flies, use from 6 months of age, and no damage to plastic or synthetic materials. Do not confuse it with Ben&rsquo;s Tick &amp; Insect Repellent Wipes (27614): those are 30% DEET and are for ages 12 and up.</p>
          <p className="not-prose mb-6"><BuyLink tag={AMZ_TAG} search="ben's tick repellent icaridin">Check Ben&rsquo;s Tick Repellent on Amazon.ca →</BuyLink></p>

          <h3>From OFF!: Deep Woods Insect Repellent 9 (20% icaridin)</h3>
          <p>S. C. Johnson&rsquo;s OFF! Deep Woods Insect Repellent 9 (Reg. No. 30155) is 20% icaridin, and its label gives separate times: up to 8 hours against ticks and 7 against mosquitoes, from 6 months of age. OFF! Deep Woods Insect Repellent 10 (33575) is also 20% icaridin, with ticks on its registry entry. Health Canada&rsquo;s registry has no product called OFF! Defense, so check the bottle for one of these numbers; a bottle made for the US market shows a US EPA registration number instead of a PCP number.</p>
          <p className="not-prose mb-6"><BuyLink tag={AMZ_TAG} search="off deep woods icaridin insect repellent">Check OFF! Deep Woods icaridin on Amazon.ca →</BuyLink></p>

          <h3>For hikers and anglers: Sawyer Icaridin (20%)</h3>
          <p>Sawyer&rsquo;s Canadian registrations are a 20% icaridin pump spray (Reg. No. 33032) and a pressurized spray (33177). The pump label claims up to 12 hours against mosquitoes and ticks, allows no more than two applications a day, and its approved claims include that it will not harm plastics, fabric, gear or fishing line. Sawyer&rsquo;s US bottles are sold as &ldquo;picaridin&rdquo; with a US EPA number; Health Canada says online purchases of unregistered pesticides shipped to Canada are not permitted, so look for 33032 or 33177 on the label.</p>

          <h3>Best DEET: Ben&rsquo;s 30 (30% DEET)</h3>
          <p>For adults and teens over 12 who prefer DEET, Ben&rsquo;s 30 sits at the top of Health Canada&rsquo;s range. Ben&rsquo;s 30 Wilderness Formula (Reg. No. 27406; the Eco-Spray version is 28547) and Ben&rsquo;s Tick &amp; Insect Repellent Wipes (27614) list ticks along with mosquitoes, black flies and other biting insects; both say to re-apply after about 6 hours if necessary and not to use them on children under 12. Both labels also warn that DEET may damage furniture finishes, plastic, painted surfaces, synthetic fabrics and leather, so keep it off rain shells, sunglasses and car seats. The individually wrapped wipes fit in a pocket for the trail.</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="ben's 30 wilderness formula">Ben&rsquo;s 30 Wilderness Formula on Amazon.ca →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="ben's tick and insect repellent wipes">Ben&rsquo;s Tick &amp; Insect wipes →</BuyLink>
          </div>

          <h3>Widely stocked DEET: OFF! Deep Woods 3 (25% DEET)</h3>
          <p>OFF! Deep Woods 3 (Reg. No. 24723) is a 25% DEET aerosol. Its label claims 8 hours against mosquitoes and says it also repels black flies, deer flies and ticks, without a separate tick time; re-apply after 8 hours if necessary. It is not for children under 12, its label says to avoid contact with rayon, dynel and acetate, and it may damage plastics and painted surfaces. Muskol Backcountry Tick Repellent (Reg. No. 33873), registered to Canadian Tire, is another 30% DEET product with ticks on its registry entry.</p>
          <p className="not-prose mb-6"><BuyLink tag={AMZ_TAG} search="off deep woods deet insect repellent">Check OFF! Deep Woods DEET on Amazon.ca →</BuyLink></p>

          <h3>Lower-strength icaridin: Avon Skin-So-Soft Bug Guard Plus (10%)</h3>
          <p>Avon&rsquo;s Skin-So-Soft Bug Guard Plus Icaridin spray (Reg. No. 30152; the towelettes are 32048) is 10% icaridin, half the strength of the picks above. Its label names deer ticks: re-apply after 7 hours for deer ticks and 5 hours for mosquitoes, from 6 months of age, and it says it will not harm most plastics or synthetic fabrics. Avon sells it through its representatives and avon.ca; wherever you buy it, check for Reg. No. 30152.</p>

          <h3>Best plant-based: Murphy&rsquo;s Outdoors Lemon Eucalyptus (30%)</h3>
          <p>Murphy&rsquo;s Outdoors Lemon Eucalyptus Oil Mosquito &amp; Tick Repellent (Reg. No. 35409, registered in 2025) is 30% oil of lemon eucalyptus, hydrated, cyclized (Citriodiol). Its label claims 4 to 6 hours against mosquitoes and up to 5 hours against ticks, and says not to apply it more than twice a day: a shorter claim than 20% icaridin, so it suits shorter outings. The label allows use from 6 months, while Health Canada&rsquo;s repellent page says lemon-eucalyptus products should not be used on children under 3; for a toddler, choose 20% icaridin.</p>

          <p><strong>Other bottles with ticks on their registry entry</strong> include Coleman Tick (10% icaridin, Reg. No. 34943), Coleman 20% Icaridin Insect Repellent Spray (34161), Muskol DEET Free Insect Repellent 20% Icaridin V (33867), Mosquito Shield PiACTIVE (20% icaridin, 31463), Care Plus Tick Repellent (20% icaridin, 33611), OFF! Insect Repellent 2 (20% icaridin, 34238), Emzone 12 Hour Mosquito &amp; Tick Repellent (20% icaridin, 32131), Great Value Tick Repellent (25% DEET, 33587) and Canadian Shield Tick Repellent (30% DEET, 34630). For these we read the registry&rsquo;s pest list rather than the full label, so check the label for times and ages.</p>

          <h2>Tick Repellent for Kids: Canada&rsquo;s Age Rules</h2>
          <p>Children pick up ticks where they play: long grass, leaf piles and the edge of the woods. Here is what Health Canada and the Canadian Paediatric Society (CPS) allow at each age:</p>
          <div className="not-prose rounded-xl border border-navy-100 overflow-x-auto my-6">
            <table className="min-w-[620px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Age</th>
                  <th className="px-4 py-3 text-left">Icaridin</th>
                  <th className="px-4 py-3 text-left">DEET</th>
                  <th className="px-4 py-3 text-left">Other</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Under 6 months', 'No', 'No', 'None of the tick repellents on this page: dress them in long, light-coloured clothing, stay on cleared paths, and do a full-body tick check afterward'],
                  ['6 months to 2 years', 'Yes, up to 20% (CPS)', 'Up to 10%, no more than once a day', 'No lemon eucalyptus or PMD (Health Canada: not under 3)'],
                  ['2 to 12 years', 'Yes, up to 20%', 'Up to 10%, up to 3 times a day; not daily for more than a month', 'Lemon eucalyptus or PMD from age 3'],
                  ['Over 12', 'Yes', 'Up to 30%', 'Lemon eucalyptus or PMD; permethrin-treated clothing from 16'],
                ].map(([agegroup, ica, deet, other]) => (
                  <tr key={agegroup} className="border-b border-navy-50 last:border-0 align-top">
                    <td className="px-4 py-2 font-semibold text-brand-800 bg-brand-50">{agegroup}</td>
                    <td className="px-4 py-2 text-gray-700">{ica}</td>
                    <td className="px-4 py-2 text-gray-700">{deet}</td>
                    <td className="px-4 py-2 text-gray-700">{other}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="not-prose text-xs text-gray-500 mb-6">Sources: Health Canada, <a href="https://www.canada.ca/en/health-canada/services/about-pesticides/insect-repellents.html" target="_blank" rel="noopener noreferrer" className="underline">Personal insect repellents</a>; Canadian Paediatric Society, <a href="https://caringforkids.cps.ca/handouts/safety-and-injury-prevention/insect_repellents" target="_blank" rel="noopener noreferrer" className="underline">Insect repellents</a> (last updated July 2023); Public Health Agency of Canada, <a href="https://www.canada.ca/en/public-health/services/diseases/ticks-tick-borne-diseases/prevent-tick-bites.html" target="_blank" rel="noopener noreferrer" className="underline">How to prevent tick bites</a>. Always follow the label on the bottle: some labels are stricter than these limits.</p>
          <p>Three handling rules matter as much as the product. Health Canada says not to apply repellent to a child&rsquo;s hands, because it can get into their eyes or mouth, and the CPS says children under 10 should not put on their own repellent. Spray it on your hands, then apply it to your child&rsquo;s face, avoiding the eyes and mouth. If your child also needs sunscreen, the CPS says to put the sunscreen on first, wait 20 minutes, then apply the repellent, and Health Canada lists combined sunscreen-and-repellent products among those that do not protect well.</p>
          <p>For children from 6 months, the simplest choice is one of the 20% icaridin picks above; the CPS lists icaridin as protecting against ticks. If you prefer DEET for a child, Ben&rsquo;s Family Spray (Reg. No. 28903) is 10% DEET with ticks on its label. It says no more than once a day for children 6 months to 2 years, and not for daily use at that age, and up to 3 times a day from 2 to 12; its label gives a time only for mosquitoes (up to 3 hours). More on children&rsquo;s products in our guide to the <Link href="/blog/best-bug-spray-for-kids-canada">best bug spray for kids in Canada</Link>.</p>
          <p className="not-prose mb-6"><BuyLink tag={AMZ_TAG} search="ben's family spray deet">Check Ben&rsquo;s Family 10% DEET on Amazon.ca →</BuyLink></p>

          <RelatedLinks path="/blog/best-tick-repellent" />
          <h2>How to Apply Tick Repellent</h2>
          <ol>
            <li><strong>Read the label first.</strong> Health Canada points out that it names the pests, any age limits and how often to apply.</li>
            <li><strong>Use a small amount</strong> on exposed skin, and on top of clothing where the label allows. Labels say not to apply it under clothing.</li>
            <li><strong>Do not skip your ankles, lower legs and sock tops.</strong> Ticks wait in leaf litter and on low plants and climb on from there (PHAC&rsquo;s 2015 review).</li>
            <li><strong>For your face,</strong> spray your hands and apply it, avoiding the eyes and mouth, and go sparingly around the ears.</li>
            <li><strong>Skip cuts, wounds and irritated or sunburned skin,</strong> and do not spray indoors, in enclosed spaces or near food (Health Canada).</li>
            <li><strong>Sunscreen first,</strong> then repellent 20 minutes later (Canadian Paediatric Society).</li>
            <li><strong>Re-apply only as the label directs:</strong> after 12 hours for Natrapel and Ben&rsquo;s Tick Repellent; Sawyer and the lemon-eucalyptus products allow no more than two applications a day.</li>
            <li><strong>Wash it off</strong> with soap and water when you are back indoors (Health Canada).</li>
            <li><strong>Worried about a reaction?</strong> Health Canada suggests trying it on a small area of skin on your arm and waiting 24 hours.</li>
          </ol>

          <h2>What to Wear in Tick Country</h2>
          <p>Clothing is the cheapest tick repellent you own. PHAC&rsquo;s list: closed-toe shoes; light-coloured, long-sleeved shirts and long pants, so ticks are easier to spot; your shirt tucked into your pants and your pants into your socks; and cleared paths rather than trails made by deer or moose. PHAC&rsquo;s 2015 review explains why tucking works: a tick that climbs onto your shoe has to travel further over your clothes to reach skin, which gives you more chances to see it and brush it off.</p>
          <Photo id="blacklegged-tick-on-clothing-seam" alt="Adult male blacklegged tick on the seam of camouflage clothing, circled in red" caption="An adult male blacklegged tick on the seam of camouflage clothing, circled in red (CDC photograph). On a pattern like this a tick is easy to miss, which is why PHAC recommends light-coloured clothing." />
          <p><strong>Permethrin clothing, the Canadian way.</strong> PHAC says permethrin liquids or sprays for consumers to treat their own clothing &ldquo;are not approved for use in Canada,&rdquo; so the American advice to spray your own pants does not apply here. What is approved is clothing treated at the factory, for people over 16: look for the PCP number on the garment&rsquo;s label. The home-use line registered here is No Fly Zone (Reg. No. 32757), imported by Mark&rsquo;s. Its label says the treatment lasts 70 washings, that the inner liner must stay in, and that it protects only the areas the garment covers, so it recommends tucking in and a skin repellent as well. PHAC says treated clothing does not give complete protection and recommends not wearing it while nursing. Our <Link href="/blog/permethrin-canada-yard-clothing-spray">permethrin guide for Canada</Link> has the details.</p>
          <p><strong>A registered spray for clothing.</strong> If you want to spray your clothes, a registered Canadian option is DEET, not permethrin. Doktor Doom Tick Repellent for Clothing + (Reg. No. 34725), from Edmonton&rsquo;s Ultrasol Industries, is 30% DEET. Its label says to spray clothing and exposed skin except the face, to re-apply after 6 hours if necessary and not to use it on children under 12, and warns to avoid contact with plastic and fabrics such as acetate, rayon and dynel.</p>
          <p className="not-prose mb-6"><BuyLink tag={AMZ_TAG} search="doktor doom tick repellent for clothing">Check Doktor Doom clothing tick repellent on Amazon.ca →</BuyLink></p>

          <h2>Natural Tick Repellent: The Honest Answer</h2>
          <p>If &ldquo;natural&rdquo; means plant-derived and registered, Canada has a real answer, with shorter protection than icaridin or DEET:</p>
          <ul>
            <li><strong>Oil of lemon eucalyptus, 30% (Citriodiol).</strong> Murphy&rsquo;s Outdoors (Reg. No. 35409) and Natrapel&rsquo;s lemon-eucalyptus Insect Repellent (30823) both claim up to 5 hours against ticks and allow no more than two applications a day; Natrapel&rsquo;s label says not under 3, Murphy&rsquo;s not under 6 months. Mosi-Guard (30822), Biome Elements (35160) and Tick Attack (34641) also list ticks in the registry.</li>
            <li><strong>PMD, 10%.</strong> OFF! Botanicals Insect Repellent (Reg. No. 34594) lists ticks but says to re-apply after 2 hours and no more than twice a day, and its own label suggests a DEET product for protection beyond 2 hours. Not for children under 3.</li>
            <li><strong>Labels that name mosquitoes only.</strong> Druide&rsquo;s lemon-eucalyptus repellent (32998) and Ecotrail (32825) are registered, but their labels name mosquitoes only, so we do not count them as tick repellents.</li>
          </ul>
          <p className="not-prose mb-6"><BuyLink tag={AMZ_TAG} search="natrapel lemon eucalyptus insect repellent">Check Natrapel lemon eucalyptus on Amazon.ca →</BuyLink></p>
          <p>A &ldquo;natural&rdquo; tick spray without a PCP number on its label is not registered here. No cedar-oil product, Wondercide and Cedarcide included, has a current Canadian registration, and a homemade essential-oil spray has no registration or label claim at all. The Canadian Paediatric Society says natural repellents may not protect against tick bites and lists PMD&rsquo;s protection against ticks as unknown. Health Canada says any pesticide imported into Canada must be registered, apart from a limited personal-use exemption, and that online purchases of unregistered pesticides shipped to Canada are not permitted. For mosquitoes, our <Link href="/blog/natural-mosquito-repellent-ontario">natural mosquito repellent guide</Link> covers the rest.</p>

          <h2>What Doesn&rsquo;t Work, and What We Left Out</h2>
          <p>Health Canada lists these among products that do not protect well against insect bites: wristbands, neckbands and ankle bands that contain repellents; electronic and ultrasonic devices; bug zappers; odour-baited traps; citrosa houseplants; and skin moisturizer or sunscreen combined with insect repellent. A band on one wrist does nothing for the ankle a tick climbs onto. Patches and stickers appear nowhere in the Canadian public-health tick advice cited here either; our <Link href="/blog/mosquito-repellent-stickers-patches-canada">guide to repellent stickers and patches</Link> explains what they do.</p>
          <p><strong>What we checked in the registry and left out:</strong></p>
          <ul>
            <li><strong>Permethrin clothing sprays and Insect Shield clothing:</strong> consumer permethrin sprays are not approved in Canada, and Insect Shield has no Canadian registration.</li>
            <li><strong>Cutter:</strong> every Cutter repellent registration in Health Canada&rsquo;s registry is historical.</li>
            <li><strong>Watkins insect repellent:</strong> its Canadian registration is historical.</li>
            <li><strong>Repel lemon eucalyptus and Grand Tongo:</strong> no Canadian registration found.</li>
            <li><strong>IR3535 and 2-undecanone repellents,</strong> which the US CDC lists: no Canadian personal insect repellent with either active was found. 2-undecanone (methyl nonyl ketone) is registered here only in dog and cat repellents.</li>
            <li><strong>Wondercide and Cedarcide:</strong> not registered in Canada; our <Link href="/blog/wondercide-canada-review">Wondercide review</Link> explains.</li>
          </ul>

          <h2>The Tick Check Routine</h2>
          <p>Repellent cuts the number of bites; the tick check catches the ones that get through. PHAC&rsquo;s routine after time in tick habitat:</p>
          <ol>
            <li>Before going inside, check yourself, your clothing, your gear (such as backpacks) and your pets.</li>
            <li>Put dry clothes in the dryer on high heat for at least 10 minutes; damp clothes need longer. Ticks can survive a cold-warm wash, so if clothes need washing first, use hot water and dry on high heat.</li>
            <li>Shower as soon as you can: it can wash off ticks that have not attached.</li>
            <li>Do a full-body tick check on yourself, your children and anyone in your care. The CDC&rsquo;s list of places to look: under the arms, in and around the ears, inside the belly button, behind the knees, in and around the hair, between the legs and around the waist.</li>
          </ol>
          <Photo id="tick-check-sock-ankle" alt="A sock folded down during a tick check reveals a blacklegged tick attached at the ankle" caption="A tick check: folding down a sock reveals an adult female blacklegged tick attached at the ankle (CDC photograph)." />
          <p>Why it works: PHAC says that in most cases an infected tick needs to be attached for at least 24 hours to transmit the bacteria that cause Lyme disease. In a Connecticut study, people who bathed within 2 hours of time in their yard had lower odds of Lyme disease (odds ratio 0.42), and so did people who checked for ticks within 36 hours (0.55). Not every study agrees: a 2008 Connecticut study found no benefit from body checks. The steps cost nothing.</p>
          <p>Found one attached? Remove it promptly with fine-tipped tweezers, gripping it close to the skin and pulling straight out: see <Link href="/blog/how-to-remove-tick-safely">how to remove a tick safely</Link> and our <Link href="/blog/tick-removal-tool-guide">tick removal tool guide</Link>. The full routine, with children and pets, is in <Link href="/blog/how-to-do-a-tick-check">how to do a tick check</Link>.</p>

          <h2>Repellent Protects You, Not Your Yard</h2>
          <p>Skin repellent protects the person wearing it, for hours. Around a home, ticks live in leaf litter, long grass and the shaded edge where lawn meets woods, and PHAC&rsquo;s review notes they are rarely found on lawns kept short. PHAC&rsquo;s yard steps: mow often, prune shrubs and trees to let sunlight in, and keep a border at least 1 metre wide of wood chips, mulch or gravel between the lawn and the woods. For products that treat the yard itself, see our guide to the <Link href="/blog/best-tick-repellent-yard-canada">best tick repellent for yards in Canada</Link>. In the Greater Toronto Area, BuzzSkito&rsquo;s licensed <Link href="/tick-control">tick control program</Link> treats those edges 5 times a season.</p>

          <h2>How We Chose These Products</h2>
          <p>We did not test these products. On {CHECKED} we searched Health Canada&rsquo;s Pesticide Product Information Database for personal repellents, kept only current registrations, and read the approved Canadian label of each product featured above for its active ingredient, the pests it names, its re-application time and its age limits. A product had to name ticks on its label to be recommended here. For the bottles listed under &ldquo;other bottles,&rdquo; we used the registry&rsquo;s pest list. Registrations change, and some expire at the end of a year, so check the number on your bottle in the <a href="https://pest-control.canada.ca/pesticide-registry/en/product-search.html" target="_blank" rel="noopener noreferrer">registry</a> before you buy.</p>

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/picaridin-vs-deet">Picaridin vs DEET in Canada</Link></li>
            <li><Link href="/blog/best-bug-spray-for-kids-canada">Best Bug Spray for Kids in Canada</Link></li>
            <li><Link href="/blog/permethrin-canada-yard-clothing-spray">Permethrin in Canada: Clothing and Yard</Link></li>
            <li><Link href="/blog/how-to-do-a-tick-check">How to Do a Tick Check</Link></li>
            <li><Link href="/blog/how-to-remove-tick-safely">How to Remove a Tick Safely</Link></li>
            <li><Link href="/blog/tick-removal-tool-guide">Best Tick Removal Tools</Link></li>
            <li><Link href="/blog/best-tick-repellent-yard-canada">Best Tick Repellent for Yards in Canada</Link></li>
            <li><Link href="/blog/tick-repellent-for-dogs-ontario">Tick Repellent for Dogs</Link></li>
            <li><Link href="/blog/lyme-disease-risk-areas-ontario-2026">Lyme Disease Risk Areas in Ontario</Link></li>
            <li><Link href="/tick-control">BuzzSkito Tick Control</Link></li>
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

          <h2>Sources</h2>
          <ul className="text-sm">
            <li>Public Health Agency of Canada, <a href="https://www.canada.ca/en/public-health/services/diseases/ticks-tick-borne-diseases/prevent-tick-bites.html" target="_blank" rel="noopener noreferrer">How to prevent tick bites</a> (page dated 2025-09-09).</li>
            <li>Public Health Agency of Canada, <a href="https://www.canada.ca/en/public-health/services/diseases/lyme-disease/prevention-lyme-disease.html" target="_blank" rel="noopener noreferrer">Lyme disease: Spread, prevention and risks</a> (page dated 2026-07-03).</li>
            <li>Public Health Agency of Canada, <a href="https://www.canada.ca/en/public-health/services/publications/diseases-conditions/permethrin-treated-clothing.html" target="_blank" rel="noopener noreferrer">Permethrin-treated clothing</a> (page dated 2020-08-14).</li>
            <li>Health Canada, <a href="https://www.canada.ca/en/health-canada/services/about-pesticides/insect-repellents.html" target="_blank" rel="noopener noreferrer">Personal insect repellents</a> (page dated 2021-06-02).</li>
            <li>Health Canada, <a href="https://www.canada.ca/en/health-canada/services/publications/product-safety/importing-pesticides-personal-use.html" target="_blank" rel="noopener noreferrer">Importing pesticides for personal use</a> (page dated 2025-10-22).</li>
            <li>Health Canada, <a href="https://pest-control.canada.ca/pesticide-registry/en/product-search.html" target="_blank" rel="noopener noreferrer">Pesticide Product Information Database</a>: approved labels for each registration number on this page, read {CHECKED}.</li>
            <li>Lindsay LR, Ogden NH, Schofield SW. <a href="https://doi.org/10.14745/ccdr.v41i06a04" target="_blank" rel="noopener noreferrer">Review of methods to prevent and reduce the risk of Lyme disease</a>. Canada Communicable Disease Report 2015;41(6):146&ndash;153.</li>
            <li>Canadian Paediatric Society, <a href="https://caringforkids.cps.ca/handouts/safety-and-injury-prevention/insect_repellents" target="_blank" rel="noopener noreferrer">Insect repellents</a> (Caring for Kids, last updated July 2023).</li>
            <li>Government of Ontario, <a href="https://www.ontario.ca/page/tick-borne-diseases" target="_blank" rel="noopener noreferrer">Tick-borne diseases</a> (updated February 4, 2026).</li>
            <li>US Centers for Disease Control and Prevention, <a href="https://www.cdc.gov/ticks/prevention/index.html" target="_blank" rel="noopener noreferrer">Preventing tick bites</a> (August 28, 2024).</li>
            <li>Büchel K, Bendin J, Gharbi A, Rahlenbeck S, Dautel H. <a href="https://doi.org/10.1016/j.ttbdis.2015.03.019" target="_blank" rel="noopener noreferrer">Repellent efficacy of DEET, Icaridin, and EBAAP against Ixodes ricinus and Ixodes scapularis nymphs</a>. Ticks and Tick-borne Diseases 2015;6(4):494&ndash;498.</li>
            <li>Connally NP, Durante AJ, Yousey-Hindes KM, Meek JI, Nelson RS, Heimer R. <a href="https://doi.org/10.1016/j.amepre.2009.04.026" target="_blank" rel="noopener noreferrer">Peridomestic Lyme disease prevention: results of a population-based case-control study</a>. American Journal of Preventive Medicine 2009;37(3):201&ndash;206.</li>
            <li>Vázquez M, Muehlenbein C, Cartter M, Hayes EB, Ertel S, Shapiro ED. <a href="https://doi.org/10.3201/eid1402.070725" target="_blank" rel="noopener noreferrer">Effectiveness of personal protective measures to prevent Lyme disease</a>. Emerging Infectious Diseases 2008;14(2):210&ndash;216.</li>
            <li>Eisen L. <a href="https://doi.org/10.1016/j.ttbdis.2022.101944" target="_blank" rel="noopener noreferrer">Personal protection measures to prevent tick bites in the United States: knowledge gaps, challenges, and opportunities</a>. Ticks and Tick-borne Diseases 2022;13(4):101944.</li>
            <li>Consumer Reports, <a href="https://www.consumerreports.org/health/insect-repellent/best-insect-repellents-for-ticks-a7939259965" target="_blank" rel="noopener noreferrer">How some of CR&rsquo;s top insect repellents fare against ticks</a> (Kevin Loria, June 13, 2024).</li>
          </ul>
        </div>
      </article>

      <ReadNext path="/blog/best-tick-repellent" standalone />
    </>
  )
}
