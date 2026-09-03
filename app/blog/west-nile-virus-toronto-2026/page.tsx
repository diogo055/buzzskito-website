import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import AuthorByline from '@/components/AuthorByline'
import BuyLink from '@/components/BuyLink'
import TopPick from '@/components/TopPick'
import StickyBuyBar from '@/components/StickyBuyBar'
import FreshnessStamp from '@/components/FreshnessStamp'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { tagForSlug } from '@/lib/amazon-clusters'

const SLUG = 'west-nile-virus-toronto-2026'
const DATE = '2026-07-09'
const UPDATED = '2026-07-09'
const TITLE = 'West Nile Virus in Toronto: 2026 Risk, Symptoms & Prevention'
const META_TITLE = 'West Nile Virus Toronto 2026: Peak Is August'

const FAQS = [
  {
    question: 'Is West Nile virus in Toronto?',
    answer: 'Yes. West Nile virus has been established in Toronto since 2001 and circulates every summer between mosquitoes and birds. Toronto Public Health traps and tests mosquitoes across the city each season and publishes positive-pool results weekly. Human cases in Ontario typically begin appearing in late July and August, peaking through early September, because that is when infected Culex mosquito populations reach their highest levels.',
  },
  {
    question: 'When is West Nile virus season in Toronto?',
    answer: 'Risk runs from roughly mid-July through late September, peaking in August and early September. This lags the general mosquito season because the Culex mosquitoes that spread West Nile need weeks of warm weather to build up virus levels in the local bird population first. Cool, wet Augusts reduce risk; hot, dry Augusts increase it, because Culex mosquitoes breed in stagnant, nutrient-rich water such as catch basins and neglected containers rather than in fresh rainwater pools.',
  },
  {
    question: 'What are the symptoms of West Nile virus?',
    answer: 'About 80% of people infected with West Nile virus have no symptoms at all. Roughly 20% develop West Nile fever: headache, fever, body aches, fatigue, sometimes a rash on the chest or back, and swollen lymph nodes, usually appearing 2 to 14 days after the bite. Fewer than 1% develop neuroinvasive disease — encephalitis or meningitis — with high fever, neck stiffness, confusion, tremors, muscle weakness, or seizures. Neuroinvasive disease is a medical emergency; seek immediate care. Adults over 50 and people who are immunocompromised are at highest risk.',
  },
  {
    question: 'Which mosquitoes carry West Nile virus in Ontario?',
    answer: 'Culex pipiens and Culex restuans are the primary West Nile vectors in southern Ontario. They differ from the aggressive daytime biters most people notice: Culex mosquitoes bite mainly at dusk, night, and dawn, they prefer birds but will bite humans, and they breed in stagnant, organically rich water — storm catch basins, clogged gutters, old tires, unused birdbaths, and neglected containers — not in clean fresh rainwater. This is why targeting stagnant standing water matters more than eliminating every puddle.',
  },
  {
    question: 'How do you prevent West Nile virus?',
    answer: 'There is no human vaccine for West Nile virus, so prevention means avoiding mosquito bites. Empty and scrub any container holding stagnant water at least weekly, clean clogged gutters, and treat water you cannot drain with a BTI larvicide. Wear long sleeves and use a Health Canada-approved repellent containing DEET or icaridin, especially at dusk and dawn when Culex mosquitoes feed. Repair window and door screens. A professional barrier spray reduces the resting adult mosquito population on your property through the peak August risk window.',
  },
  {
    question: 'How many West Nile cases are there in Toronto this year?',
    answer: 'Case counts change weekly through the season. Toronto Public Health publishes confirmed human cases and positive mosquito-pool results during the surveillance period, and Public Health Ontario publishes province-wide figures. For current numbers, check those official sources directly rather than relying on any static page — including this one. We track the provincial picture on our Ontario West Nile virus tracker, updated through the season.',
  },
  {
    question: 'Can you get West Nile virus from another person or a pet?',
    answer: 'No. West Nile virus does not spread through casual contact with an infected person or animal. It is transmitted by the bite of an infected mosquito. Rare exceptions exist through blood transfusion, organ transplant, and from mother to baby during pregnancy or breastfeeding. Horses can develop severe West Nile disease and there is an equine vaccine; dogs and cats are very rarely affected and do not pass the virus to people.',
  },
  {
    question: 'Does mosquito spraying help with West Nile virus?',
    answer: 'Yes, as part of a layered approach. Municipal programs larvicide storm catch basins, which is where Culex mosquitoes breed heavily in urban Toronto. On a residential property, a barrier spray applied to shrubs, hedges, fence lines, and shaded vegetation kills adult mosquitoes resting there during the day and suppresses the population for up to 30 days. Combined with eliminating stagnant water and using repellent at dusk, it meaningfully reduces bite exposure during the August peak. BuzzSkito treats yards across Toronto and the GTA from $99.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'West Nile risk in Toronto peaks August–early September. Symptoms, which mosquitoes carry it, why stagnant water matters more than puddles, and how to protect your yard.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug('west-nile-virus-toronto-2026')

export default function WestNileTorontoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'West Nile virus risk, symptoms, and prevention in Toronto for the 2026 season.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'West Nile Virus Toronto 2026', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">West Nile Virus Toronto 2026</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">The risk window is August. Here is what actually raises it, and what lowers it.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      {/* Quick Answer — AI-extraction capsule */}
      <section className="bg-white pt-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-base text-gray-800 leading-relaxed">
              <strong>Yes. West Nile virus has circulated in Toronto every summer since 2001, and human risk peaks in August and early September.</strong> It is spread by <em>Culex</em> mosquitoes, which bite at dusk, night, and dawn and breed in stagnant, organically rich water &mdash; storm catch basins, clogged gutters, old tires, and neglected containers &mdash; not in clean rain puddles. About <strong>80% of infected people have no symptoms</strong>, roughly 20% develop West Nile fever, and fewer than 1% develop serious neuroinvasive disease, with adults over 50 at highest risk. There is no human vaccine, so prevention is bite avoidance: eliminate stagnant water weekly, use a DEET or icaridin repellent at dusk, and reduce the adult mosquito population resting on your property. BuzzSkito treats Toronto and GTA yards with barrier spray from $99.
            </p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>West Nile virus has circulated in Toronto every summer since 2001; human risk peaks in August and early September.</li>
              <li>The vector is the Culex mosquito, which bites at dusk, night, and dawn and breeds in stagnant, organically rich water.</li>
              <li>About 80% of infected people have no symptoms at all.</li>
              <li>Roughly 20% develop West Nile fever, and fewer than 1% develop serious neuroinvasive disease.</li>
              <li>Adults over 50 face the highest risk of severe illness.</li>
              <li>There is no human vaccine, so prevention is bite avoidance and reducing standing water and adult mosquitoes.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito, GTA mosquito &amp; tick control &middot; 150+ five-star Google reviews</p>
            <p className="mt-1.5 text-xs text-gray-500">Health information for general education, not medical advice. Consult Toronto Public Health or a healthcare provider about West Nile symptoms.</p>
          </div>
        </div>
      </section>

      {/* Risk timeline table */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Toronto West Nile Risk Through the Season</h2>
          <div className="rounded-xl border border-gray-200 overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-brand-50">
                <tr>
                  <th className="px-3 py-2 text-left">Period</th>
                  <th className="px-3 py-2 text-left">What is happening</th>
                  <th className="px-3 py-2 text-left">Human risk</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['May–June', 'Culex populations building; virus cycling in birds', 'Very low'],
                  ['Early July', 'First positive mosquito pools typically detected', 'Low'],
                  ['Late July', 'Virus amplifying; first human cases often reported', 'Rising'],
                  ['August', 'Peak infected-mosquito density', 'Highest'],
                  ['Early September', 'Still elevated; warm nights sustain Culex', 'High'],
                  ['Late September–October', 'Cooling nights collapse Culex activity', 'Falling'],
                  ['After first hard frost', 'Adult Culex die off', 'Effectively none'],
                ].map(([p, w, r]) => (
                  <tr key={p} className="border-t border-gray-100">
                    <td className="px-3 py-2 font-semibold text-brand-800">{p}</td>
                    <td className="px-3 py-2 text-gray-700">{w}</td>
                    <td className="px-3 py-2 text-gray-700">{r}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">General seasonal pattern for southern Ontario. For confirmed case counts and positive mosquito pools this season, consult Toronto Public Health and Public Health Ontario directly.</p>
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />

          <h2>Why August, Not July</h2>
          <p>Most people assume West Nile risk tracks with how many mosquitoes are biting them. It does not. The virus cycles between <em>Culex</em> mosquitoes and birds, and it takes weeks of warm weather for enough infected birds and mosquitoes to accumulate before human infections appear. That amplification is why the mosquitoes are worst in June but the <strong>virus</strong> is worst in August.</p>
          <p>Counter-intuitively, a <strong>hot, dry August raises risk</strong>. Drought concentrates stagnant, nutrient-rich water in catch basins and containers &mdash; exactly what <em>Culex</em> prefers &mdash; while flushing rains would otherwise wash larvae out. Heat also speeds virus replication inside the mosquito.</p>

          <h2>The Mosquito That Matters Is Not the One Biting You at the Barbecue</h2>
          <p>The aggressive daytime mosquito chasing you around the yard is usually an <em>Aedes</em> species, and it is a poor West Nile vector. The mosquito that matters, <strong><em>Culex pipiens</em></strong>, behaves differently:</p>
          <ul>
            <li>It bites mainly at <strong>dusk, through the night, and at dawn</strong>.</li>
            <li>It <strong>prefers birds</strong> and bites humans opportunistically &mdash; which is exactly how the virus jumps species.</li>
            <li>It breeds in <strong>stagnant, organically rich water</strong>: catch basins, clogged gutters full of leaf sludge, old tires, unused birdbaths, and forgotten buckets. It does <em>not</em> favour clean fresh rainwater.</li>
          </ul>
          <p>This changes your priorities. Dumping the clean puddle on the patio does little. <strong>Scrubbing out the gutter and the old bucket behind the shed does a lot.</strong></p>

          <aside aria-label="Professional mosquito control" className="not-prose my-8 rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-white p-6 sm:p-7 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-extrabold text-brand-900 mb-2 leading-tight">Cut the adult mosquito population before the August peak</h3>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">Barrier spray targets the shaded shrubs, hedges, and fence lines where adult mosquitoes rest during the day &mdash; suppressing the population for up to 30 days through peak West Nile season. Health Canada-approved, safe for kids and pets in 30 minutes. BuzzSkito treats Toronto and the GTA from $99.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/toronto-mosquito-control" className="btn-primary-sm">Toronto Mosquito Control →</Link>
              <a href="tel:+12892165030" className="font-bold text-brand-800 hover:text-brand-600 transition-colors">(289) 216-5030</a>
            </div>
          </aside>

          <h2>Symptoms: What to Watch For</h2>
          <p>Symptoms, when they appear at all, begin <strong>2 to 14 days</strong> after an infected bite.</p>
          <ol>
            <li><strong>No symptoms (~80%).</strong> Most infections pass entirely unnoticed.</li>
            <li><strong>West Nile fever (~20%).</strong> Headache, fever, body aches, fatigue, sometimes a rash on the chest or back, swollen lymph nodes. Fatigue can linger for weeks.</li>
            <li><strong>Neuroinvasive disease (&lt;1%).</strong> Encephalitis or meningitis: high fever, severe headache, neck stiffness, confusion, tremors, muscle weakness, vision loss, or seizures. <strong>This is a medical emergency.</strong> Adults over 50 and immunocompromised people carry the highest risk.</li>
          </ol>
          <p>There is <strong>no human vaccine and no specific antiviral treatment</strong> for West Nile virus. Care is supportive. That makes bite prevention the entire strategy.</p>

          <h2>What Actually Lowers Your Risk</h2>
          <AffiliateDisclosure />
          <ol>
            <li><strong>Kill the stagnant water weekly.</strong> Scrub gutters clear of leaf sludge, tip and scrub birdbaths and buckets, and remove old tires. Scrubbing matters &mdash; mosquito eggs stick to container walls and survive drying.</li>
            <li><strong>Larvicide what you cannot drain.</strong> A BTI dunk in a rain barrel or ornamental pond kills larvae within 24&ndash;48 hours and is harmless to fish, pets, birds, and people. See our <Link href="/blog/mosquito-dunks-canada-guide">Mosquito Dunks guide</Link>. <BuyLink tag={AMZ_TAG} search="summit mosquito dunks">Check Mosquito Dunks on Amazon.ca →</BuyLink> Granular Mosquito Bits give a faster knockdown using the same Bti active. <BuyLink tag={AMZ_TAG} search="summit mosquito bits">Check Mosquito Bits on Amazon.ca →</BuyLink></li>
            <li><strong>Cover up at dusk and dawn</strong>, when <em>Culex</em> feeds. Long sleeves, and a Health Canada-approved repellent with <strong>DEET or icaridin</strong>. See our <Link href="/blog/picaridin-vs-deet">icaridin vs DEET comparison</Link>.</li>
            <li><strong>Fix screens</strong> on windows and doors.</li>
            <li><strong>Reduce the resting adult population.</strong> <Link href="/mosquito-control">A professional barrier spray</Link> treats the shaded vegetation, hedge interiors, and fence lines where adult mosquitoes spend the day, with up to 30 days of residual protection through the August peak.</li>
          </ol>

          <TopPick tag={AMZ_TAG}
            label="Best for the Culex breeding sites you can't drain"
            name="Summit Mosquito Dunks (BTI Larvicide)"
            blurb="The single most West Nile–specific product a homeowner can use: a floating Bti dunk that kills Culex larvae in the stagnant, organically rich water they breed in — rain barrels, ornamental ponds, clogged low spots. Harmless to fish, pets, birds, and people, and one dunk keeps working for about 30 days."
            search="summit mosquito dunks"
            score={8.7}
            pros={['Targets the exact stagnant water Culex prefer', 'Safe around fish, pets, birds, and people', 'One dunk lasts ~30 days']}
            cons={['Larvicide only — no effect on adult biters', 'Needs replacing monthly through the season']}
          />

          <h2>Where to Get Live Case Numbers</h2>
          <p>Case counts change weekly and any static article &mdash; this one included &mdash; goes stale fast. For current confirmed cases and positive mosquito-pool results, go to the primary sources:</p>
          <ul>
            <li><a href="https://www.toronto.ca/community-people/health-wellness-care/health-programs-advice/west-nile-virus/" target="_blank" rel="noreferrer">Toronto Public Health &mdash; West Nile Virus</a></li>
            <li><a href="https://www.publichealthontario.ca/en/Diseases-and-Conditions/Infectious-Diseases/Vector-Borne-Zoonotic-Diseases/West-Nile-Virus" target="_blank" rel="noreferrer">Public Health Ontario &mdash; West Nile Virus surveillance</a></li>
            <li><Link href="/west-nile-virus-ontario-tracker">BuzzSkito Ontario West Nile Virus Tracker</Link> &mdash; our seasonal summary of the provincial picture</li>
          </ul>

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/west-nile-virus-ontario-2026">West Nile Virus in Ontario 2026</Link></li>
            <li><Link href="/blog/west-nile-virus-mosquito-risk-ontario">West Nile Virus Mosquito Risk in Ontario</Link></li>
            <li><Link href="/blog/mosquito-larvae-identification">Mosquito Larvae: Identification and Removal</Link></li>
            <li><Link href="/blog/hidden-mosquito-breeding-spots-backyard">Hidden Mosquito Breeding Spots</Link></li>
            <li><Link href="/toronto-mosquito-control">Toronto Mosquito Control Service</Link></li>
          </ul>

          <p className="text-xs text-gray-500 mt-8">This article is general health information, not medical advice. If you have symptoms of neuroinvasive illness &mdash; high fever with neck stiffness, confusion, or seizures &mdash; seek emergency care immediately.</p>
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

      <StickyBuyBar tag={AMZ_TAG} name="Summit Mosquito Dunks (Bti larvicide)" search="summit mosquito dunks" label="For water you can't drain" />

      <CTASection heading="Peak West Nile Season Is August. Treat Before It." subtext="Barrier spray suppresses the adult mosquito population for up to 30 days. Toronto & GTA, from $99." variant="dark" />
    </>
  )
}
