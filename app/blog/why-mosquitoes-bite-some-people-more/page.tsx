import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { MOSQUITO_BLOGS } from '@/lib/constants'

const SLUG = 'why-mosquitoes-bite-some-people-more'
const DATE = '2026-04-26'
const TITLE = 'Why Mosquitoes Bite Some People More Than Others (Science-Backed)'
const EXCERPT = 'Blood type, body heat, CO2 output, lactic acid, pregnancy, alcohol, dark clothing — what the research actually shows about why mosquitoes prefer some people. Plus the one thing that protects everyone equally.'

const FAQS = [
  {
    question: 'Why don’t mosquitoes bite me?',
    answer: 'If you rarely get bitten, you likely have a combination of lower-attractant traits: type A blood, lower body temperature, lower carbon dioxide output (smaller body size, lower metabolism), low lactic acid skin chemistry, and a skin microbiome that produces fewer mosquito-attracting volatile compounds. You may also be unconsciously avoiding peak biting times (dusk/dawn) or wearing lighter colours that mosquitoes find less attractive. None of this makes you immune — mosquitoes will still bite you in high-pressure conditions — it just makes you less attractive than the person standing next to you.',
  },
  {
    question: 'Does blood type affect mosquito attraction?',
    answer: 'Yes — research has consistently shown that mosquitoes have measurable preferences by blood type. A 2004 Japanese study by Shirai et al. found that Aedes albopictus mosquitoes landed on people with type O blood roughly twice as often as people with type A blood. The mechanism is partly genetic: about 80% of people are &quot;secretors&quot; who excrete blood-type antigens through their skin, and these antigens influence how attractive their skin is to mosquitoes. Type O secretors are typically the most attractive, followed by type B, AB, and A.',
  },
  {
    question: 'Does drinking alcohol attract mosquitoes?',
    answer: 'Yes — there is evidence that alcohol consumption increases mosquito attraction. A 2002 study in the Journal of the American Mosquito Control Association found that drinking just one 350 ml beer measurably increased mosquito landing rates on volunteers. The proposed mechanisms include increased skin temperature, increased sweat output, increased ethanol in sweat, and slight changes in CO2 output. The effect is real but modest — alcohol does not turn you into a magnet, but it nudges you up the attractiveness scale.',
  },
  {
    question: 'Why are pregnant women bitten more by mosquitoes?',
    answer: 'Pregnant women in late pregnancy attract roughly twice as many mosquitoes as non-pregnant women, according to research published in The Lancet in 2000 by Lindsay et al. Two main factors drive this: pregnant women exhale approximately 21% more carbon dioxide per breath, and their average body temperature is slightly higher (around 0.7°C). Both signals are primary mosquito attractants. This is medically relevant in malaria-endemic regions; in Ontario the increased exposure mainly elevates nuisance and West Nile Virus risk.',
  },
  {
    question: 'Can I really make myself less attractive to mosquitoes?',
    answer: 'You can make small differences — wear light colours, avoid scented products, shower before going outdoors, reduce alcohol — but you cannot meaningfully change your blood type, body size, metabolism, or genetic skin chemistry. The most reliable strategy is to address the environment instead of the person. Eliminating breeding sites, using DEET or picaridin repellent on skin, and applying professional barrier spray to your yard will protect every member of the household — including the high-attraction person who would otherwise be eaten alive — far more than any personal-attractiveness adjustment.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: 'Why Mosquitoes Bite Some People More (Science)',
  description: 'Blood type, CO2, body heat, lactic acid, pregnancy, alcohol, dark clothing — research-backed reasons mosquitoes prefer some people, and what helps.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
})

export default function WhyMosquitoesBiteSomeMorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: EXCERPT, slug: SLUG, datePublished: DATE })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Why Mosquitoes Bite Some People More', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Why Mosquitoes Bite Some People More</span>
          </nav>
          <span className="bg-brand-800 text-brand-200 text-xs px-3 py-1 rounded-full mb-4 inline-block">Mosquito Control</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-brand-300 text-sm">Published {new Date(DATE).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })} · By BuzzSkito</p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12 prose-brand">
        <p className="text-lg text-gray-600 not-prose border-l-4 border-amber-400 pl-5 py-2 mb-8">
          You and your partner sit on the same patio for the same hour. You walk back inside with 14 bites. They have none. This is not in your head — it is real, and there is a sizeable body of peer-reviewed research explaining why. Here is what the science actually shows about mosquito attraction, plus the one thing the most-bitten and least-bitten people have in common: barrier spray treatment is the only intervention that protects everyone equally.
        </p>

        <h2>How Mosquitoes Find You: The Three-Stage Search</h2>
        <p>Before getting into individual differences, it helps to understand how mosquitoes hunt. They use a layered system that works at progressively shorter ranges:</p>
        <ul>
          <li><strong>Long range (10–50 metres):</strong> Carbon dioxide. Female mosquitoes detect CO<sub>2</sub> exhaled by mammals using receptors on their antennae. This is the primary signal that says &quot;there is a warm-blooded animal somewhere upwind.&quot;</li>
          <li><strong>Mid range (1–10 metres):</strong> Body heat and visual cues. As the mosquito gets closer, it follows thermal gradients and visual silhouettes — particularly dark colours against contrasting backgrounds.</li>
          <li><strong>Close range (within ~1 metre):</strong> Skin chemistry. Lactic acid, ammonia, fatty acids, and dozens of other volatile organic compounds released from your skin determine whether the mosquito actually lands and bites.</li>
        </ul>
        <p>Individual differences in attractiveness come from variation at every stage — but especially the third one. Research summarized in <em>Current Biology</em> (Coetzee et al., 2022) found that the difference between the most and least attractive person in a small group can be roughly 100-fold. Yes — one hundred times.</p>

        <h2>Factor 1: Blood Type</h2>
        <p>One of the most-cited findings in mosquito attraction research. A 2004 study by Shirai et al. published in the <em>Journal of Medical Entomology</em> exposed volunteers of different blood types to <em>Aedes albopictus</em> (Asian tiger mosquito) and measured landing rates. The results:</p>
        <ul>
          <li><strong>Type O</strong> — landed on roughly 83% of the time</li>
          <li><strong>Type A</strong> — landed on roughly 47% of the time</li>
          <li><strong>Type B and AB</strong> — intermediate values</li>
        </ul>
        <p>The mechanism is partly genetic. About 80% of people are &quot;secretors&quot; — they excrete blood-type-specific saccharides (the H, A, or B antigens) through their saliva, sweat, and skin secretions. Mosquitoes can detect these. Type O secretors are reliably the most attractive group across multiple studies. If you have type O blood and feel like you are bitten more than everyone around you, you probably are.</p>

        <h2>Factor 2: Carbon Dioxide Output</h2>
        <p>Mosquitoes use CO<sub>2</sub> as their primary long-range targeting signal. Anything that increases your CO<sub>2</sub> output makes you a brighter beacon. The biggest drivers:</p>
        <ul>
          <li><strong>Body size.</strong> Larger people exhale more CO<sub>2</sub> per minute. This is why adults are bitten more than small children at the same campfire.</li>
          <li><strong>Metabolic rate.</strong> Higher metabolism means more CO<sub>2</sub>. Pregnant women, athletes during recovery, and people with higher resting metabolic rates all produce more CO<sub>2</sub>.</li>
          <li><strong>Exercise.</strong> Recently active people exhale far more CO<sub>2</sub> than sedentary people. The runner who just finished a 5K is a much bigger target than the spectator who just watched.</li>
          <li><strong>Pregnancy.</strong> Lindsay et al. (<em>The Lancet</em>, 2000) showed that pregnant women in late pregnancy exhale about 21% more CO<sub>2</sub> per breath than non-pregnant women — and attracted roughly twice as many mosquitoes in field conditions.</li>
        </ul>

        <h2>Factor 3: Body Heat</h2>
        <p>Mosquitoes detect thermal gradients at close range and use them to home in on a landing target. Anyone with elevated body temperature is more visible to a searching mosquito:</p>
        <ul>
          <li>Recent exercise raises core body temperature by 1–2°C.</li>
          <li>Pregnancy raises body temperature by approximately 0.7°C.</li>
          <li>Alcohol consumption causes peripheral vasodilation, increasing skin temperature.</li>
          <li>Hot weather and direct sun raise skin temperature dramatically.</li>
        </ul>
        <p>This factor combines with CO<sub>2</sub> output — the recently-active or pregnant person is hotter <em>and</em> producing more CO<sub>2</sub>, compounding the attraction signal.</p>

        <h2>Factor 4: Lactic Acid and Skin Chemistry</h2>
        <p>The single most studied class of mosquito attractants is the cocktail of volatile organic compounds (VOCs) emitted from human skin. Lactic acid, ammonia, sulcatone, and various fatty acids all play measurable roles. The work of Leslie Vosshall&apos;s lab at Rockefeller University, including the landmark 2022 <em>Cell</em> paper by De Obaldia et al., found that one specific class of skin compounds — carboxylic acids — was the strongest predictor of mosquito preference between volunteers.</p>
        <p>The most-attractive volunteers in those studies produced 50 to 100 times more carboxylic acid output through their skin than the least-attractive volunteers. The differences appeared to be largely stable over time — meaning they were genetically determined, not behavioural. People who emit more carboxylic acids are essentially permanent mosquito magnets.</p>
        <p>Lactic acid output specifically is elevated by:</p>
        <ul>
          <li>Recent exercise</li>
          <li>High-intensity activity (anaerobic metabolism)</li>
          <li>Genetics (some people simply produce more)</li>
        </ul>

        <h2>Factor 5: The Skin Microbiome</h2>
        <p>Many of the volatile compounds mosquitoes detect are not directly produced by you — they are produced by the bacteria living on your skin. Research published by Verhulst et al. in <em>PLoS ONE</em> (2011) found that skin bacterial communities had a major impact on mosquito attraction. People with a more diverse skin microbiome were generally less attractive, while those with high abundances of certain Staphylococcus and Brevibacterium species were dramatically more attractive.</p>
        <p>Foot odour, in particular, comes mostly from skin bacteria — and is highly attractive to malaria-vector mosquitoes. This is why the &quot;limburger cheese&quot; smell of feet has been used in mosquito traps in malaria research. The same effect applies, more weakly, to North American mosquitoes.</p>

        <h2>Factor 6: Pregnancy</h2>
        <p>Lindsay et al. (2000) is one of the cleanest pieces of mosquito-preference research ever published. The study compared pregnant and non-pregnant women in The Gambia in identical environmental conditions. The pregnant women attracted approximately <strong>twice as many</strong> mosquitoes as the non-pregnant women.</p>
        <p>The two key drivers were CO<sub>2</sub> output (about 21% higher) and body temperature (about 0.7°C higher). Both increase as pregnancy progresses, with the strongest effects in the third trimester. In Ontario, the elevated attraction is mainly a quality-of-life issue, but it is also worth noting because pregnant women are advised to be cautious about insect repellents and West Nile Virus exposure.</p>

        <h2>Factor 7: Alcohol Consumption</h2>
        <p>A 2002 paper in the <em>Journal of the American Mosquito Control Association</em> by Lefèvre et al. tested whether drinking beer increased mosquito attraction. They had volunteers drink one 350 ml beer and measured mosquito landing rates before and after. The result: a measurable, statistically significant increase in mosquito landings after drinking.</p>
        <p>The mechanism is not entirely settled. Likely contributors:</p>
        <ul>
          <li>Increased skin temperature from peripheral vasodilation</li>
          <li>Increased ethanol in sweat (mosquitoes can detect it)</li>
          <li>Slight changes in respiratory rate and CO<sub>2</sub> output</li>
          <li>Increased perspiration</li>
        </ul>
        <p>The effect is real but modest. Drinking a beer does not turn you into a flying-insect target the way being pregnant or having type O blood does, but it nudges you up the attraction scale at the worst possible moment — sitting on a patio at dusk during peak mosquito activity.</p>

        <h2>Factor 8: Dark Clothing</h2>
        <p>Mosquitoes are visual hunters at mid range. They are strongly drawn to dark colours that contrast against the background — black, navy, dark red, dark green. Light colours — white, beige, light grey, pale yellow — are dramatically less attractive.</p>
        <p>Research from the University of Washington (Alonso San Alberto et al., 2022) using <em>Aedes aegypti</em> showed that mosquitoes flew toward dark targets and ignored white targets in controlled wind tunnel experiments. The researchers proposed that the colour preference is partly tied to skin tone detection — but the effect applies to clothing as well.</p>
        <p>Practical takeaway: if you are sitting outside on a summer evening in a black t-shirt, you are visually broadcasting your location. A white t-shirt or light beige shirt makes you considerably harder to find at the visual stage of the search.</p>

        <h2>Factor 9: Scented Products</h2>
        <p>Floral perfumes, scented sunscreens, scented body lotions, and scented hair products all add to your VOC signature in ways mosquitoes can detect. Floral scents in particular mimic plant cues that some mosquito species also use. Going outside on a summer evening in heavy floral perfume is essentially advertising.</p>
        <p>Switch to unscented sunscreens and minimize fragrances during peak mosquito hours (dusk especially). It is one of the easier behavioural levers to pull.</p>

        <h2>The Honest Conclusion: Attractiveness Is Mostly Genetic</h2>
        <p>If you read the literature carefully, the depressing truth is that most of what determines your attraction to mosquitoes is genetic and unchangeable:</p>
        <ul>
          <li>Blood type — fixed</li>
          <li>Body size and metabolism — mostly fixed</li>
          <li>Skin carboxylic acid output — largely genetic</li>
          <li>Skin microbiome — partly genetic, partly stable over time</li>
          <li>Pregnancy — temporary but unmodifiable</li>
        </ul>
        <p>You can make modest improvements with behaviour: wear light colours, skip the perfume, shower before going outside, ease up on the beer, avoid peak mosquito hours. These are all real interventions backed by research. But they will not turn a Type-O carboxylic-acid producer into a person mosquitoes ignore. The genetics outweigh the behaviour.</p>

        <h2>The One Thing That Works for Everyone: Treat the Environment, Not the Person</h2>
        <p>This is the part most articles do not say plainly. <strong>You cannot win the personal-attractiveness battle.</strong> What you can do is make sure there are no mosquitoes around in the first place. The yard environment is what determines whether the most-attractive person in your household gets eaten alive on a Tuesday evening.</p>
        <p>Two interventions actually work at this level:</p>
        <ul>
          <li><strong>Eliminate breeding sites</strong> — every standing-water source on your property is producing mosquitoes that will preferentially target the most attractive person in the household. See our <Link href="/blog/hidden-mosquito-breeding-spots-backyard" className="text-brand-700 underline">hidden mosquito breeding spots guide</Link> for the 12 most common sources homeowners miss.</li>
          <li><strong>Apply professional barrier spray</strong> — treats the resting habitat where mosquitoes shelter during the day, knocking down the adult population that is searching for hosts each evening. A properly applied <Link href="/mosquito-control" className="text-brand-700 underline">professional mosquito treatment</Link> protects every person in the household equally — your blood type does not matter to a yard with no mosquitoes in it.</li>
        </ul>

        <h2>The Real Strategy: Stack Personal &amp; Environmental Protection</h2>
        <p>Realistically, the people who get bitten the least in Ontario are not the lucky genetic outliers — they are the people who do all the boring environmental work. Their yards are treated. Their breeding sites are eliminated. They wear DEET or picaridin when they are in higher-pressure areas. They wear light colours during peak mosquito hours. Layered, the effect is dramatic.</p>
        <p>For the unlucky high-attraction person in your household — the type-O, post-workout, pregnant-or-just-had-a-beer-on-the-patio person — environment-level protection is not optional. It is the only intervention that meaningfully reduces their bite count. See our <Link href="/blog/how-to-prevent-mosquitoes-in-your-backyard" className="text-brand-700 underline">12 ways to prevent mosquitoes in your backyard guide</Link> for the layered approach.</p>

        <h2>Get Your Yard Treated</h2>
        <p>If someone in your household is the &quot;mosquito magnet&quot; of the family, the answer is not to keep them indoors all summer — it is to make sure the yard does not have mosquitoes for them to attract. Book a <Link href="/free-yard-assessment" className="text-brand-700 underline">free yard assessment</Link> and we will walk the property, identify the breeding and resting sources, and give you an honest quote. We service 19 cities across the GTA and most new customers are scheduled within the same week.</p>

        <h2>Related Guides</h2>
        <ul>
          <li><Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{MOSQUITO_BLOGS.pillar.title}</Link></li>
          <li><Link href="/blog/how-to-prevent-mosquitoes-in-your-backyard" className="text-brand-700 hover:underline">12 Ways to Prevent Mosquitoes in Your Backyard</Link></li>
          <li><Link href="/blog/hidden-mosquito-breeding-spots-backyard" className="text-brand-700 hover:underline">Hidden Mosquito Breeding Spots in Your Backyard</Link></li>
          <li><Link href="/blog/how-long-does-mosquito-spray-last" className="text-brand-700 hover:underline">How Long Does Mosquito Spray Last?</Link></li>
          <li><Link href="/mosquito-control" className="text-brand-700 hover:underline">BuzzSkito Mosquito Control Services</Link></li>
        </ul>
      </article>

      <section className="py-10 px-4 bg-brand-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {FAQS.map(({ question, answer }) => (
              <details key={question} className="bg-white rounded-xl border border-brand-100 group">
                <summary className="cursor-pointer px-5 py-4 font-semibold text-brand-900 list-none flex justify-between items-center">
                  <span>{question}</span>
                  <svg className="w-5 h-5 shrink-0 group-open:rotate-180 transition-transform text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-5 pb-4 text-gray-600 text-sm">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="The Mosquito Magnet of the House Deserves Better" subtext="Barrier spray makes the yard mosquito-free for everyone — regardless of blood type, body heat, or beer consumption." />
    </>
  )
}
