import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import BuyLink from '@/components/BuyLink'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import SpecialistDisclosure from '@/components/SpecialistDisclosure'
import FreshnessStamp from '@/components/FreshnessStamp'
import AuthorByline from '@/components/AuthorByline'
import TopPick from '@/components/TopPick'
import { tagForSlug } from '@/lib/amazon-clusters'

const SLUG = 'diatomaceous-earth-for-bed-bugs'
const DATE = '2026-07-16'
const UPDATED = '2026-07-16'
const TITLE = 'Diatomaceous Earth for Bed Bugs — Does It Work? (Canada 2026)'

const FAQS = [
  {
    question: 'Does diatomaceous earth actually kill bed bugs?',
    answer: 'Yes, but slowly and mechanically rather than instantly. The microscopic edges of the fossil-diatom powder abrade and absorb the waxy outer layer of a bed bug\'s exoskeleton, so the insect dies of dehydration over several days. Lab studies show it kills a high proportion of bugs that walk through a treated band — but only when the dust is dry, undisturbed, and applied as a barely-visible film. It is a slow desiccant, not a knockdown killer, which is why it works as one layer of a plan and almost never as a standalone cure.',
  },
  {
    question: 'How long does diatomaceous earth take to kill bed bugs?',
    answer: 'Typically 4 to 10 days of exposure in controlled lab conditions, and often longer in a real home. Because DE dries the insect out rather than poisoning it, a bed bug has to pick up enough dust and then lose water over time; a bug that only skirts the edge of a patch may barely be dusted at all. Treat it as constant background pressure that grinds a population down over weeks, and keep the dust in place and dry the entire time.',
  },
  {
    question: 'Which diatomaceous earth is legal to use for bed bugs in Canada?',
    answer: 'Only DE registered as a pesticide with Health Canada\'s Pest Management Regulatory Agency (PMRA) is legal to apply for insect control. A registered product like Safer\'s Diatomaceous Earth carries a Pest Control Products (PCP) registration number and label directions on the package. Food-grade DE sold as a supplement, anti-caking agent, or garden amendment is not registered as an insecticide, so using it on bed bugs is an off-label, unregistered pesticide use. The rule: buy the version with a PCP number and use it exactly as the label says.',
  },
  {
    question: 'What is the difference between food-grade and pool-grade diatomaceous earth?',
    answer: 'Crystalline silica content. Food-grade and pesticide-registered DE is amorphous silica with a very low percentage of crystalline silica, which is why it can be labelled for use around homes. Pool-grade (filter-grade) DE has been calcined — heat-treated — which converts much of it to crystalline silica, a known respiratory hazard. Pool-grade is made for swimming-pool filters, kills insects poorly, and must never be used indoors. If a bag does not clearly say food-grade or PMRA-registered insecticide, do not use it against bed bugs.',
  },
  {
    question: 'Can you put diatomaceous earth on your mattress?',
    answer: 'Not on the open sleeping surface. The right move for the mattress and box spring is a certified bed-bug-proof encasement, which traps bugs inside and removes the mattress as a hiding place. If you treat the bed area with DE, keep it to the frame joints, the underside of the box spring, and the floor around the bed legs — never a dusting across the top where you sleep, which is both ineffective and an inhalation nuisance.',
  },
  {
    question: 'How much diatomaceous earth should you apply?',
    answer: 'Far less than most people think — a thin, barely-visible film you can just see when you tilt the surface to the light. A visible pile or white line of powder is too much: bed bugs detect thick dust and walk around it rather than through it, so heavy application actually lowers the kill rate. Use a bulb or puffer duster to lay a light haze inside cracks and crevices, then tap away any obvious mounds.',
  },
  {
    question: 'Do bed bugs become resistant to diatomaceous earth?',
    answer: 'No, and this is DE\'s single biggest advantage. Because it kills physically — scratching and absorbing the waxy cuticle so the insect desiccates — there is no metabolic pathway for a bed bug to evolve around it. That matters in Canada, where resistance surveys have found pyrethroid knockdown-resistance genes in the majority of North American bed bug populations tested, often above 80 percent. A bug that shrugs off a spray still dries out and dies in DE. The trade-off is speed: resistance-proof but slow.',
  },
  {
    question: 'Is diatomaceous earth safe around pets and children?',
    answer: 'Food-grade and PMRA-registered DE is low-toxicity, but it is still a fine dust you should not breathe in quantity. Apply it into cracks, crevices, voids, and under furniture rather than in exposed layers where kids and pets travel. Wear a dust mask when puffing it, keep people and animals out until the airborne dust settles, and follow the registered product\'s label. Never substitute pool-grade DE, which is a genuine respiratory hazard.',
  },
  {
    question: 'Is diatomaceous earth better than bed bug spray?',
    answer: 'They solve different problems, so use both rather than picking one. Registered sprays act faster and treat surfaces directly, but modern bed bugs are widely resistant to the pyrethroids most domestic-class Canadian sprays rely on. DE is slower and only works in dry, undisturbed cracks, but it is completely resistance-proof. A strong plan uses spray for quick knockdown on visible bugs and DE as a long-lasting desiccant barrier in voids and runways the spray cannot durably coat.',
  },
  {
    question: 'How long do you leave diatomaceous earth down?',
    answer: 'As long as it stays dry and undisturbed — check and re-dust every couple of weeks through a cycle of at least six to eight weeks. DE loses effect the moment it gets wet, clumped, or vacuumed up, so any cleaning near a treated crack means re-applying. Use interceptor traps under the bed legs to track catches; once they stay empty and no new signs appear for several weeks, clean up and shift to monitoring.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: 'Does diatomaceous earth kill bed bugs? Honest lab-vs-field efficacy, exactly where to apply it (and where never to), food-grade vs pool-grade vs PMRA-registered, and the US desiccant dusts we won\'t recommend in Canada. Updated 2026.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
})

const AMZ_TAG = tagForSlug('diatomaceous-earth-for-bed-bugs')

export default function DiatomaceousEarthForBedBugsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Independent Canadian guide to using diatomaceous earth against bed bugs — real efficacy, the application map, and which DE is actually PMRA-legal.', slug: SLUG, datePublished: DATE })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Diatomaceous Earth for Bed Bugs', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Diatomaceous Earth for Bed Bugs</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">A resistance-proof desiccant that works &mdash; slowly, and only where you place it right. The honest efficacy, the exact application map, and which diatomaceous earth is actually legal to use for pest control in Canada.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">Diatomaceous earth does kill bed bugs &mdash; but slowly, by drying them out, so it&rsquo;s a resistance-proof <em>supplement</em> to a real plan, never a standalone cure. In Canada, use a PMRA-registered product like Safer&rsquo;s Diatomaceous Earth (it carries a Pest Control Products registration number), applied as a barely-visible dust with a bulb duster into cracks, frame joints, and along baseboards &mdash; never as a layer on open mattress surfaces where you sleep.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>DE kills by desiccation &mdash; abrading the waxy cuticle so the bug loses water &mdash; taking about 4&ndash;10 days in lab tests, not on contact.</li>
              <li>Bed bugs cannot develop resistance to a physical desiccant, unlike the pyrethroid sprays over 80% of North American populations already resist.</li>
              <li>Only DE registered as a pesticide (with a PCP number) is legal to use on bed bugs in Canada &mdash; food-grade &ldquo;supplement&rdquo; DE is not a registered insecticide.</li>
              <li>Apply a thin, barely-visible film &mdash; a visible pile is too much, because bed bugs walk <em>around</em> thick powder.</li>
              <li>Field results show DE alone rarely clears an infestation in a reasonable time &mdash; pair it with steam, encasements, and interceptor traps.</li>
              <li>Pool- or filter-grade DE is heat-treated, high in crystalline silica, and an inhalation hazard &mdash; never use it indoors.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito Pest Product Guides &middot; independent Canadian research</p>
          </div>
          <SpecialistDisclosure pest="bed bugs" />
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">Food-Grade vs Pool-Grade vs PMRA-Registered DE</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">Not all diatomaceous earth is the same product, and in Canada the grade decides both whether it is <em>legal</em> to use on pests and whether it is <em>safe</em> to breathe. Only the registered-insecticide grade belongs on bed bugs &mdash; always confirm the grade and any PCP number on the bag you buy.</p>
          <div className="rounded-xl border border-navy-100 overflow-hidden bg-white shadow-sm overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Grade</th>
                  <th className="px-4 py-3 text-left">Silica type</th>
                  <th className="px-4 py-3 text-left">Legal to use on bed bugs in Canada?</th>
                  <th className="px-4 py-3 text-left">Verdict</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { grade: 'PMRA-registered DE insecticide (e.g. Safer’s)', silica: 'Amorphous, very low crystalline', legal: 'Yes — carries a PCP registration number', verdict: 'The only grade to buy for pest control' },
                  { grade: 'Food-grade DE (supplement / anti-caking / garden)', silica: 'Amorphous, low crystalline', legal: 'Not registered as a pesticide — off-label to use as one', verdict: 'Not for bed bug treatment in Canada' },
                  { grade: 'Pool- / filter-grade (calcined) DE', silica: 'High crystalline silica (heat-treated)', legal: 'No — not a pest product', verdict: 'Never indoors — respiratory hazard, poor kill' },
                ].map(({ grade, silica, legal, verdict }) => (
                  <tr key={grade} className="border-b border-navy-50 last:border-0 align-top">
                    <td className="px-4 py-3 font-bold text-brand-800">{grade}</td>
                    <td className="px-4 py-3 text-gray-700">{silica}</td>
                    <td className="px-4 py-3 text-xs text-gray-600">{legal}</td>
                    <td className="px-4 py-3 text-xs text-gray-600">{verdict}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">DE is a mechanical desiccant, not a nerve agent &mdash; which is exactly why bed bugs can&rsquo;t evolve resistance to it, and exactly why it works far too slowly to be your only tool.</p>
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AffiliateDisclosure />
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />
          <p className="not-prose text-sm text-gray-600 mb-1">Check current Canadian availability of the registered dust and a proper applicator:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="safers diatomaceous earth">Safer&rsquo;s Diatomaceous Earth &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="diatomaceous earth duster applicator">Bulb duster applicator &rarr;</BuyLink>
          </div>

          <TopPick tag={AMZ_TAG}
            label="Our Top Pick — the DE to actually buy"
            name="Safer’s Diatomaceous Earth (PMRA-registered insecticide)"
            blurb="The one grade that’s legal to use on bed bugs in Canada — it carries a Pest Control Products (PCP) registration number, so its label directions are the rules you follow. Amorphous, low-crystalline-silica dust: resistance-proof, and safe to apply into cracks and voids when used as a barely-visible film with a bulb duster. Pair it with a proper puffer applicator for the light, even haze that actually kills."
            search="safers diatomaceous earth"
            score={8.2}
            pros={['The only PMRA-registered DE grade for pest use', 'Resistance-proof — bed bugs can’t adapt to a desiccant', 'Low crystalline silica, safe applied to label into cracks and voids']}
            cons={['Slow — works over days, not on contact', 'Only works dry, undisturbed, and thinly applied', 'Not a standalone cure — one layer of a full plan']}
          />

          <h2>Does Diatomaceous Earth Actually Kill Bed Bugs?</h2>
          <p>Yes &mdash; mechanically, and on a timescale of days rather than seconds. Diatomaceous earth is a powder milled from fossilized diatom shells; under magnification each particle is a jagged, porous fragment. When a bed bug crawls through a thin film of it, those particles scratch and absorb the waxy layer that seals moisture inside the insect&rsquo;s exoskeleton. Stripped of that waterproofing, the bug dehydrates and dies &mdash; no poison involved, just death by drying out.</p>
          <p>That mechanism is the source of both DE&rsquo;s biggest strength and its biggest weakness. The strength: because the kill is physical, a bed bug cannot develop biochemical resistance to it the way it has to pyrethroids. The weakness: desiccation is slow, and only happens to bugs that pick up enough dust and stay alive long enough to dry out.</p>
          <p><strong>The lab-versus-field gap is the whole story.</strong> In controlled tests, DE applied as a clean, dry, thin layer kills a high proportion of bed bugs forced to walk across it. In real bedrooms &mdash; where dust gets disturbed, humidity varies, and bugs hide in places you never treated &mdash; the same product performs far more modestly. Both facts are true at once: genuinely effective in the exact conditions of a lab, genuinely insufficient as a lone treatment in the messy conditions of a home.</p>

          <h2>How Long Does Diatomaceous Earth Take to Kill Bed Bugs?</h2>
          <p>Roughly 4 to 10 days of exposure in lab conditions, and frequently longer in practice. This is the number that trips people up: they expect a bug to hit the powder and drop, then conclude it doesn&rsquo;t work when bugs are still around the next morning. A bed bug has to accumulate dust on its body and then lose enough water over subsequent days to die.</p>
          <p>Because of that lag, DE functions as constant background pressure rather than a quick knockdown, grinding a population down as bugs repeatedly cross treated runways over weeks. That only helps if the infestation isn&rsquo;t breeding faster than the dust is killing &mdash; which is exactly why DE needs faster-acting partners like steam and a registered spray doing the heavy lifting up front.</p>

          <h2>Where Do You Apply Diatomaceous Earth for Bed Bugs?</h2>
          <p>DE only works where bed bugs are forced to walk through it and where it can sit dry and undisturbed &mdash; cracks, crevices, voids, and runways, not open surfaces. Use a bulb or puffer duster to lay down a light haze in these zones:</p>
          <ul>
            <li><strong>Bed frame and headboard joints.</strong> Puff into every screw hole, joint, and hollow tube &mdash; classic daytime harbourage right next to the host.</li>
            <li><strong>Box spring interior and underside.</strong> Dust the internal frame, joints, and stapled-fabric perimeter, not the fabric you press against.</li>
            <li><strong>Baseboard cracks and the floor-wall gap.</strong> A thin line into the crack where baseboard meets floor, especially behind and beside the bed.</li>
            <li><strong>Electrical outlet and switch plates.</strong> With the power off, puff a small amount into the gap behind cover plates &mdash; a common in-wall travel route. Do not overload the box.</li>
            <li><strong>Under and behind furniture.</strong> Nightstand joints, dresser undersides, and the backs of built-ins near the bed.</li>
            <li><strong>Around bed legs and under interceptor cups.</strong> A light film beneath each leg backs up your interceptor traps.</li>
          </ul>
          <p><strong>The rule that matters more than location:</strong> a thin, barely-visible film only. A white line or a pile of powder is too much &mdash; bed bugs sense heavy dust and detour around it, so over-application lowers your kill rate. Tap any visible mound down into a haze.</p>

          <h2>Where Should You Never Put Diatomaceous Earth?</h2>
          <p>The guardrails here are just as important as the application map, because misusing DE is either useless or unsafe:</p>
          <ul>
            <li><strong>Never on open mattress surfaces or bedding you sleep against.</strong> Loose powder there does nothing useful and becomes an inhalation nuisance all night. The mattress and box spring belong in a certified <Link href="/blog/bed-bug-mattress-encasement-canada">bed-bug-proof encasement</Link>, which traps bugs inside and removes the mattress as harbourage entirely.</li>
            <li><strong>Never in thick, visible layers across the floor.</strong> It repels bugs and puts dust where pets and kids travel.</li>
            <li><strong>Never pool- or filter-grade DE indoors.</strong> Calcined pool DE is high in crystalline silica &mdash; a real respiratory hazard &mdash; and kills insects poorly.</li>
            <li><strong>Never where it will get damp.</strong> DE stops working the moment it clumps or gets wet.</li>
          </ul>

          <h2>Which Diatomaceous Earth Is Legal &mdash; and Which US Products We Won&rsquo;t Recommend</h2>
          <p>This is where Canadian buyers get steered wrong by American content. In Canada, a product is only legal to <em>use as a pesticide</em> if it is registered with Health Canada&rsquo;s PMRA and carries a Pest Control Products (PCP) registration number on the label. A registered DE insecticide such as Safer&rsquo;s Diatomaceous Earth meets that bar, and its label directions are, legally, the rules you follow.</p>
          <p>Food-grade DE sold as a supplement, anti-caking agent, or garden amendment is a different regulatory animal: it is <em>not</em> registered as an insecticide, so applying it to bed bugs is an off-label, unregistered pesticide use. Same broad material, but the pest-registration framework is what makes the registered version the one to buy for this job.</p>
          <p>We also flag the grey-market desiccants US bed bug forums push hardest, because none are PMRA-registered domestic products for Canadian consumers:</p>
          <ul>
            <li><strong>CimeXa</strong> &mdash; a synthetic amorphous silica gel dust that dominates US advice. It is not diatomaceous earth and not a PMRA-registered domestic-class product here; we won&rsquo;t recommend importing it.</li>
            <li><strong>MotherEarth D</strong> and similar US &ldquo;pro&rdquo; dusts &mdash; marketed to American applicators, not registered for Canadian consumer use.</li>
            <li><strong>Any bag lacking a food-grade statement or a PCP number</strong> &mdash; if you can&rsquo;t confirm the grade, treat it as pool-grade and keep it out of the house.</li>
          </ul>
          <p>The honest Canadian recommendation is the registered dust, used to the label &mdash; not the strongest thing a cross-border seller will ship you.</p>
          <div className="not-prose my-4 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="safers diatomaceous earth">Check Safer&rsquo;s DE on Amazon.ca &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="diatomaceous earth duster applicator">Bulb duster applicator &rarr;</BuyLink>
          </div>

          <h2>How Does DE Fit Into a Real Bed Bug Plan?</h2>
          <p>As one durable, resistance-proof layer &mdash; not the plan itself. Bed bug control succeeds when several methods overlap, each covering a gap the others leave, and DE&rsquo;s role is the slow desiccant barrier in cracks and voids that faster tools can&rsquo;t durably coat. Here is where it sits in the full stack:</p>
          <ul>
            <li><strong>Steam</strong> for instant, all-life-stage kills on the bed and furniture &mdash; see the <Link href="/blog/best-bed-bug-steamer-canada">best bed bug steamer in Canada</Link>.</li>
            <li><strong>Encasements</strong> to seal the mattress and box spring so they never need dusting again &mdash; the <Link href="/blog/bed-bug-mattress-encasement-canada">mattress encasement guide</Link> covers certified options.</li>
            <li><strong>Interceptor traps</strong> under every bed leg to isolate the bed and measure whether you&rsquo;re still catching bugs &mdash; the <Link href="/blog/bed-bug-interceptor-traps-canada">interceptor trap guide</Link>.</li>
            <li><strong>Registered spray</strong> for quick knockdown, with honest limits in <Link href="/blog/do-bed-bug-sprays-actually-work">do bed bug sprays actually work?</Link> and legal options in the <Link href="/blog/bed-bug-spray-canada">bed bug spray guide</Link>.</li>
            <li><strong>DE</strong> as the long-lasting desiccant in frame joints, baseboards, and outlet gaps &mdash; the resistance-proof backstop.</li>
          </ul>
          <p>Before any of it, confirm you&rsquo;re actually dealing with bed bugs and map where they&rsquo;re hiding &mdash; our walkthrough on <Link href="/blog/how-to-check-for-bed-bugs-canada">how to check for bed bugs in Canada</Link> shows the evidence to look for. And if you&rsquo;re weighing a full DIY stack against hiring a pro, the <Link href="/pest-control-cost-canada">Canadian pest control cost guide</Link> breaks down what professional bed bug work actually runs.</p>
          <p>For the wider picture on diatomaceous earth beyond bed bugs &mdash; grades, garden and crawling-insect uses, and how to buy it &mdash; see our <Link href="/blog/diatomaceous-earth-canada-buyers-guide">diatomaceous earth Canada buyer&rsquo;s guide</Link>.</p>

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

          <h2>Related Bed Bug Guides</h2>
          <ul>
            <li><Link href="/blog/diatomaceous-earth-canada-buyers-guide">Diatomaceous Earth Canada &mdash; Full Buyer&rsquo;s Guide</Link></li>
            <li><Link href="/blog/bed-bug-spray-canada">Best Bed Bug Spray Canada &mdash; What&rsquo;s PMRA-Legal</Link></li>
            <li><Link href="/blog/do-bed-bug-sprays-actually-work">Do Bed Bug Sprays Actually Work? The Honest Evidence</Link></li>
            <li><Link href="/blog/best-bed-bug-steamer-canada">Best Bed Bug Steamer Canada</Link></li>
            <li><Link href="/blog/bed-bug-mattress-encasement-canada">Bed Bug Mattress Encasements Canada</Link></li>
            <li><Link href="/blog/bed-bug-interceptor-traps-canada">Bed Bug Interceptor Traps Canada</Link></li>
            <li><Link href="/blog/how-to-check-for-bed-bugs-canada">How to Check for Bed Bugs in Canada</Link></li>
          </ul>

          <div className="not-prose mt-10 rounded-xl border border-navy-100 bg-brand-50 px-5 py-4">
            <p className="text-sm text-brand-900">
              <Link href="/pest-product-guides" className="font-bold text-emerald-700 hover:text-emerald-800 underline">More independent Canadian pest product research &rarr;</Link>
            </p>
          </div>
        </div>
      </article>
    </>
  )
}
