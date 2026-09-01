import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'

const SLUG = 'is-deet-safe'
const DATE = '2026-07-15'
const TITLE = 'Is DEET Safe? What It Is, Cancer Myths & Health Canada Limits (2026)'
const META_TITLE = 'Is DEET Safe in 2026? Health Canada Limits'

const FAQS = [
  {
    question: 'What does DEET stand for?',
    answer: 'DEET stands for N,N-diethyl-meta-toluamide (also written N,N-diethyl-3-methylbenzamide). It is the chemical name of the active ingredient in most conventional insect repellents. DEET was developed by the U.S. Army in 1946 and registered for public use in 1957. It has been used by an estimated 200 million-plus people worldwide each year for decades, making it one of the most-studied insect repellents in existence.',
  },
  {
    question: 'What is DEET made of?',
    answer: 'DEET is a single synthetic organic compound — N,N-diethyl-meta-toluamide — a colourless-to-pale-yellow oily liquid manufactured from meta-toluic acid and diethylamine. In a bottle of bug spray, the DEET is dissolved in a carrier (alcohol, water, or a gel/lotion base) at a stated concentration, commonly 5% to 30% in Canada. DEET is not a pesticide that poisons insects; it works by disrupting the receptors mosquitoes and ticks use to smell you, so they cannot locate you to bite.',
  },
  {
    question: 'Is DEET bad for you?',
    answer: 'For the vast majority of people, DEET is not bad for you when used as directed on the label. Health Canada and the U.S. Centers for Disease Control and Prevention (CDC) both endorse DEET as a safe, effective repellent. Reported problems are almost always tied to misuse — swallowing it, spraying it in eyes, applying under clothing, or using it on infants. Rare skin irritation can occur in sensitive people. The far greater everyday risk in Ontario is the mosquito or tick bite DEET prevents, which can transmit West Nile virus or Lyme disease.',
  },
  {
    question: 'Does DEET cause cancer?',
    answer: 'There is no established link between DEET and cancer. The U.S. Environmental Protection Agency (EPA) classifies DEET as "not classifiable as to human carcinogenicity" — meaning the evidence does not show it causes cancer. Health Canada, which re-evaluated DEET and continues to register it, and the CDC, which recommends it, have not identified a cancer risk from normal use. The viral claims linking DEET to cancer are not supported by the toxicology data reviewed by these agencies.',
  },
  {
    question: 'Why is DEET banned?',
    answer: 'DEET is not banned in Canada. It is fully registered by Health Canada and sold in pharmacies, hardware stores, and outdoor retailers nationwide. What Health Canada does is cap the concentration sold to consumers — a maximum of 30% for adults and 10% for children aged 2 to 12 — and it removed some very high-concentration products (formerly up to 95–100%) from the consumer market because they offered no extra protection, only longer duration. So the rule is a concentration limit, not a ban. A few individual parks or products worldwide restrict it, but DEET remains legal and recommended across Canada and the U.S.',
  },
  {
    question: 'Is DEET safe for dogs and pets?',
    answer: 'No — do not apply DEET (or any human insect repellent) to dogs, cats, or other pets. DEET is formulated and approved for human skin only, and pets can ingest it by licking their fur, which may cause vomiting, drooling, tremors, or worse. If your pet needs mosquito, flea, or tick protection, use a product made for animals and prescribed or recommended by your veterinarian. Keep pets away from freshly applied repellent on people until it dries.',
  },
  {
    question: 'Is DEET safe during pregnancy and breastfeeding?',
    answer: 'Major health authorities consider DEET acceptable during pregnancy and breastfeeding when used as directed, and studies have not found harm to the baby. Because pregnancy raises the stakes of mosquito-borne illness, the CDC specifically advises pregnant people in areas with mosquito-borne disease to use an approved repellent such as DEET. As always, this is general information — apply to exposed skin only, follow the label, and speak with your own healthcare provider or midwife about your situation.',
  },
  {
    question: 'What is the maximum DEET concentration allowed for kids in Canada?',
    answer: 'Health Canada limits DEET for children to a maximum of 10%. For children aged 2 to 12, use up to 10% DEET no more than three times per day. For children aged 6 months to 2 years, use up to 10% DEET no more than once per day. For infants under 6 months, Health Canada advises against DEET entirely — use a mosquito net over the stroller or crib and physical barriers instead. Adults and children over 12 may use up to 30%.',
  },
  {
    question: 'Does DEET expire?',
    answer: 'DEET itself is a chemically stable molecule and does not readily break down, so pure DEET has a very long shelf life. What ages is the finished product around it: the propellant in aerosols can weaken, alcohol carriers evaporate if the cap is loose, and lotions can separate. Most manufacturers suggest replacing a bottle after a few years or by any printed expiry date. If a spray has separated, smells off, or no longer atomizes properly, replace it rather than risk uneven, unreliable coverage.',
  },
  {
    question: 'What does DEET-free mean?',
    answer: '"DEET-free" simply means the product contains no N,N-diethyl-meta-toluamide — it does not automatically mean safer or more effective. DEET-free repellents use a different active ingredient, most often picaridin (icaridin), oil of lemon eucalyptus (PMD), or a plant-oil blend. Picaridin is the strongest DEET-free alternative and matches DEET for mosquito and tick protection. Some plant-oil "DEET-free" sprays offer only short protection. Always check the active ingredient and its concentration, not just the "DEET-free" badge on the front label.',
  },
  {
    question: 'Is a higher percentage of DEET more dangerous?',
    answer: 'Higher-percentage DEET is not proportionally more dangerous, but it also is not more protective — the concentration controls how long protection lasts, not how strong it is. Roughly, 10% DEET protects for about 2 hours, 20–30% for around 5 to 6 hours, and concentrations above 30% add little extra duration. That is why Health Canada caps consumer products at 30% for adults: going higher raises exposure with no meaningful benefit. Pick the lowest concentration that covers your time outdoors.',
  },
  {
    question: 'Can DEET be absorbed through the skin?',
    answer: 'A small amount of DEET can be absorbed through the skin, but studies show most of it is metabolized and eliminated quickly, and normal labelled use has not been linked to harm in the general population. To keep absorption low, apply only to exposed skin (not under clothing), use just enough to lightly cover, avoid broken or irritated skin, do not reapply more often than the label allows, and wash it off with soap and water once you are back indoors.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'Is DEET safe, and is it bad for you? What DEET is (N,N-diethyl-meta-toluamide), Health Canada concentration limits, the cancer myth, pregnancy and pet safety, why it is not banned, and expiry — attributed to Health Canada and the CDC. Updated 2026.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
})

export default function IsDeetSafePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: 'Is DEET Safe? What It Is, Cancer Myths & Health Canada Limits (2026)', description: 'A hedged, authority-attributed safety explainer on DEET for Canadian readers — what it is, whether it is bad for you, cancer myths, Health Canada limits, pregnancy and pet safety.', slug: SLUG, datePublished: DATE })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Is DEET Safe?', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Is DEET Safe?</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">Is DEET Safe? What It Is, Cancer Myths &amp; Health Canada Limits (2026)</h1>
          <p className="text-xl text-brand-100 max-w-3xl">A calm, evidence-based look at the most-asked repellent safety questions in Canada — what DEET is, whether it is bad for you, the cancer myth, pregnancy and pet safety, and why it is not banned.</p>
        </div>
      </section>

      <section className="bg-white pt-8 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
              DEET is considered safe when used as directed. Health Canada and the U.S. CDC endorse it as a reliable mosquito and tick repellent, with no established link to cancer. Health Canada caps over-the-counter concentrations at 30% for adults and 10% for children aged 2 to 12. Apply only to exposed skin, avoid infants under 6 months, and wash it off once indoors.
            </p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>Health Canada caps consumer DEET at 30% for adults and children over 12.</li>
              <li>For children aged 2 to 12, the limit is 10% DEET, up to three applications per day.</li>
              <li>For infants under 6 months, Health Canada advises against DEET — use netting or physical barriers instead.</li>
              <li>The U.S. EPA classifies DEET as &ldquo;not classifiable as to human carcinogenicity&rdquo; — no established cancer link.</li>
              <li>DEET is not banned in Canada; it is fully registered and sold nationwide.</li>
              <li>Roughly 10% DEET protects for about 2 hours and 20–30% for about 5 to 6 hours — higher % lasts longer, not stronger.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">— BuzzSkito, GTA mosquito &amp; tick control · 150+ five-star Google reviews</p>
          </div>
        </div>
      </section>

      <section className="py-6 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-3">Health Canada DEET Concentration Limits</h2>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">
            Health Canada regulates DEET as a personal insect repellent and sets age-based concentration and frequency limits. These are the current Canadian guidelines for over-the-counter DEET products.
          </p>
          <div className="rounded-xl border border-navy-100 overflow-x-auto bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Age group</th>
                  <th className="px-4 py-3 text-left">Max DEET %</th>
                  <th className="px-4 py-3 text-left">How often</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { age: 'Adults & children 12+', pct: 'Up to 30%', freq: 'As per label' },
                  { age: 'Children 2 – 12 years', pct: 'Up to 10%', freq: 'Max 3 applications/day' },
                  { age: 'Children 6 months – 2 years', pct: 'Up to 10%', freq: 'Max 1 application/day' },
                  { age: 'Infants under 6 months', pct: 'Not recommended', freq: 'Use netting / physical barriers' },
                ].map(({ age, pct, freq }) => (
                  <tr key={age} className="border-b border-navy-50 last:border-0">
                    <td className="px-4 py-3 font-bold text-brand-800">{age}</td>
                    <td className="px-4 py-3 font-mono text-gray-800">{pct}</td>
                    <td className="px-4 py-3 text-xs text-gray-600">{freq}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Source: Health Canada consumer guidance on personal insect repellents. Always follow the specific directions on the product you buy. Higher concentration means longer protection, not stronger protection.
          </p>
        </div>
      </section>

      <article className="py-8 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">

          <h2>What is DEET?</h2>
          <p>DEET is the active ingredient in most conventional insect repellents — a synthetic compound that keeps mosquitoes, ticks, and biting flies from landing on and biting you. It has been the benchmark repellent for more than 60 years, and both Health Canada and the U.S. Centers for Disease Control and Prevention (CDC) list it among the ingredients proven to work. Importantly, DEET does not kill insects. It confuses the sensors mosquitoes and ticks use to detect the carbon dioxide, heat, and skin compounds that reveal a nearby host, so they effectively cannot find you.</p>
          <p>In Canada, DEET is one of a small handful of repellent actives that Health Canada has reviewed and registered as both safe and effective when used as directed. The others include picaridin (icaridin) and oil of lemon eucalyptus. If you want a side-by-side of the two most popular options, our <Link href="/blog/picaridin-vs-deet-canada">picaridin vs DEET comparison</Link> breaks down which one wins for different Canadian activities.</p>

          <h2>What does DEET stand for?</h2>
          <p>DEET stands for <strong>N,N-diethyl-meta-toluamide</strong> — sometimes written N,N-diethyl-3-methylbenzamide. It is simply the abbreviation of a long chemical name, not an acronym for anything descriptive. The compound was developed by the U.S. Army in 1946 to protect soldiers in insect-heavy regions and was released for civilian use in 1957. That long track record is a big reason toxicologists regard it as one of the most thoroughly studied repellents available.</p>

          <h2>What is DEET made of?</h2>
          <p>DEET is a single man-made organic molecule — N,N-diethyl-meta-toluamide — produced by combining meta-toluic acid with diethylamine. On its own it is a nearly colourless, slightly oily liquid. What you actually buy in a store is that molecule dissolved into a carrier at a labelled strength: an alcohol or water base for sprays, or a gel or lotion base for creams, typically at 5% to 30% DEET in Canada. The rest of the bottle is carrier and, in aerosols, propellant. There is nothing exotic hiding in it — the safety questions all come down to the DEET concentration and how you apply it.</p>

          <h2>Is DEET bad for you?</h2>
          <p>For nearly everyone, DEET is not bad for you when you follow the label. Decades of use by hundreds of millions of people, plus repeated safety reviews by Health Canada and the U.S. EPA, have not turned up evidence that ordinary repellent use causes lasting harm. The problems that do get reported are overwhelmingly linked to misuse: swallowing it, getting it in the eyes, applying heavy amounts under clothing, or using adult-strength product on babies. A small number of people experience skin irritation, which is a reason to patch-test and to choose a lower concentration.</p>
          <p>It is also worth weighing the other side of the ledger. In Ontario, the realistic day-to-day danger is the bite DEET prevents. Mosquitoes here can carry West Nile virus, and blacklegged ticks can transmit Lyme disease — both tracked by Public Health Ontario and the Public Health Agency of Canada (PHAC). Used sensibly, a proven repellent lowers a real risk.</p>

          <h2>Does DEET cause cancer?</h2>
          <p>There is no established link between DEET and cancer. The U.S. Environmental Protection Agency classifies DEET as &ldquo;not classifiable as to human carcinogenicity,&rdquo; which is regulator language meaning the available evidence does not show it causes cancer. Health Canada, which re-evaluated DEET and keeps it registered for sale, and the CDC, which actively recommends it, have not flagged a cancer risk from normal use. The alarming posts that circulate online linking bug spray to cancer are not backed by the toxicology these agencies reviewed. If you ever have a specific health concern, the right move is to raise it with your own healthcare provider rather than rely on social media.</p>

          <h2>Why is DEET banned?</h2>
          <p>DEET is <strong>not</strong> banned in Canada — this is one of the most persistent myths about it. It is fully registered by Health Canada and sold across the country in pharmacies, hardware stores, grocery chains, and outdoor retailers. What can look like a &ldquo;ban&rdquo; is actually a concentration cap: Health Canada limits consumer DEET to 30% for adults and 10% for children aged 2 to 12, and it phased out the old ultra-high-concentration products (once sold at up to 95–100%) because they added exposure without adding meaningful protection. A handful of individual parks or specialty products elsewhere restrict DEET, but as a rule it remains legal and recommended throughout Canada and the United States.</p>

          <h2>Is DEET safe for dogs and pets?</h2>
          <p>No — do not put DEET, or any human bug spray, on your dog, cat, or other pets. These products are formulated and approved for human skin only. A pet will lick treated fur and swallow the repellent, which can cause drooling, vomiting, tremors, or more serious effects depending on the amount. If your animal needs protection from mosquitoes, fleas, or ticks, use a product designed for pets and cleared by your veterinarian. It is also good practice to let repellent dry on your own skin before letting a pet nuzzle you.</p>

          <h2>Is DEET safe during pregnancy?</h2>
          <p>Health authorities generally consider DEET acceptable during pregnancy and while breastfeeding when it is used as directed, and studies to date have not found harm to the baby. Because mosquito-borne infections can be especially serious in pregnancy, the CDC specifically advises pregnant people in areas with mosquito-borne disease to use an approved repellent, and DEET is on that list. Apply it only to exposed skin, follow the label, and wash it off indoors. This is general information rather than personal medical advice — talk with your own doctor, midwife, or pharmacist about what is right for you.</p>

          <h2>Does DEET expire?</h2>
          <p>DEET the molecule is chemically stable and does not break down easily, so it has a very long shelf life. What actually ages is the product built around it. Aerosol propellant can lose pressure over the years, alcohol carriers slowly evaporate if the cap is not tight, and lotions can separate into layers. Manufacturers usually recommend replacing a bottle after a few years or by any printed date. If your spray has separated, smells off, or no longer sprays a fine even mist, replace it — uneven coverage leaves gaps where mosquitoes and ticks get through.</p>

          <h2>What does DEET-free mean?</h2>
          <p>&ldquo;DEET-free&rdquo; on a label means only one thing: the product contains no N,N-diethyl-meta-toluamide. It is a marketing statement about what is absent, not a promise that the product is safer or works better. DEET-free repellents rely on a different active ingredient — most commonly picaridin (icaridin), oil of lemon eucalyptus (PMD), or a blend of plant oils. Picaridin is the strongest DEET-free option and matches DEET for mosquito and tick protection with less odour and no damage to plastics or synthetic fabric. Some plant-oil sprays, by contrast, protect for only a short time. The takeaway: read the active ingredient and its concentration, not just the &ldquo;DEET-free&rdquo; badge. If you want to go the plant-based route, see what actually holds up in our <Link href="/blog/natural-mosquito-repellent-ontario">natural mosquito repellent guide for Ontario</Link>.</p>

          <h2>DEET Myths vs Facts</h2>
          <table className="not-prose w-full text-sm border-collapse border border-navy-100 rounded-lg overflow-hidden my-4">
            <thead className="bg-brand-50">
              <tr><th className="px-3 py-2 text-left">Claim you hear</th><th className="px-3 py-2 text-left">What the authorities say</th></tr>
            </thead>
            <tbody>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">&ldquo;DEET causes cancer&rdquo;</td><td className="px-3 py-2">No established link (U.S. EPA: &ldquo;not classifiable&rdquo;; Health Canada &amp; CDC: no cancer risk from normal use)</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">&ldquo;DEET is banned in Canada&rdquo;</td><td className="px-3 py-2">False — registered and sold nationwide; concentration capped at 30% for adults</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">&ldquo;Higher % is stronger&rdquo;</td><td className="px-3 py-2">Higher % lasts longer, not stronger; protection plateaus above ~30%</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">&ldquo;DEET-free means safer&rdquo;</td><td className="px-3 py-2">Not necessarily — just means no DEET; check the alternative active and its %</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">&ldquo;You can spray it on your dog&rdquo;</td><td className="px-3 py-2">No — human repellent only; use vet-approved products for pets</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">&ldquo;It soaks dangerously into your blood&rdquo;</td><td className="px-3 py-2">Minimal absorption; rapidly metabolized and eliminated under labelled use</td></tr>
            </tbody>
          </table>

          <h2>How to Use DEET Safely</h2>
          <p>Getting the safety right is mostly about application habits:</p>
          <ul>
            <li>Choose the lowest concentration that covers your time outdoors — 20–30% for a long evening, less for a quick outing.</li>
            <li>Apply to exposed skin and the outside of clothing only — never under clothes.</li>
            <li>Do not spray directly on the face; spray your hands and pat it on, avoiding eyes and mouth.</li>
            <li>Keep it off cuts, wounds, and irritated skin.</li>
            <li>For kids, an adult should apply it, following the 10% and frequency limits in the table above.</li>
            <li>Wash treated skin with soap and water once you are back indoors, and wash treated clothing before wearing it again.</li>
            <li>For infants under 6 months, skip DEET entirely and use a mosquito net over the stroller or crib. Our guide to the <Link href="/blog/best-bug-spray-for-kids-canada">best bug spray for kids in Canada</Link> covers age-appropriate choices.</li>
          </ul>

          <p>Curious how DEET performs in an actual product? Our hands-on <Link href="/blog/off-deep-woods-deet-bug-spray-canada">OFF! Deep Woods DEET review for Canada</Link> looks at concentration, duration, and where it fits.</p>

          <aside aria-label="Professional mosquito and tick control" className="not-prose my-8 rounded-2xl border-2 border-emerald-300 bg-gradient-to-br from-emerald-50 to-white p-6 sm:p-7 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-extrabold text-brand-900 mb-2 leading-tight">Repellent protects you — not your yard</h3>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">DEET keeps bites off your skin for a few hours. To knock down the mosquitoes and ticks living in your vegetation so you need less spray on your body, BuzzSkito&rsquo;s licensed barrier spray covers your whole yard from $99, with a dedicated tick program at $597/season (or $497 bundled with a mosquito plan).</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/free-yard-assessment" className="btn-primary-sm">Get a Free Quote →</Link>
              <a href="tel:+12892165030" className="font-bold text-brand-800 hover:text-brand-600 transition-colors">(289) 216-5030</a>
            </div>
          </aside>

          <div className="not-prose my-8 rounded-xl bg-gray-50 border border-gray-200 p-5">
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong className="text-gray-800">This article is general information, not medical advice.</strong> It summarizes public guidance from Health Canada, the Public Health Agency of Canada, Public Health Ontario, the U.S. CDC, and the U.S. EPA. It does not diagnose, treat, or replace personalized advice. For any reaction, health concern, or question about your situation, contact your healthcare provider or pharmacist. In an emergency, or if a repellent is swallowed or gets in the eyes, call your local poison control centre or 911.
            </p>
          </div>

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/picaridin-vs-deet-canada">Picaridin vs DEET Canada — Which Repellent Wins?</Link></li>
            <li><Link href="/blog/best-bug-spray-for-kids-canada">Best Bug Spray for Kids in Canada</Link></li>
            <li><Link href="/blog/off-deep-woods-deet-bug-spray-canada">OFF! Deep Woods DEET Bug Spray — Canada Review</Link></li>
            <li><Link href="/blog/natural-mosquito-repellent-ontario">Natural Mosquito Repellent for Ontario — What Actually Works</Link></li>
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

      <CTASection heading="Fewer Bites, Less Spray on Your Skin" subtext="Get a free quote for licensed barrier spray. From $99. Health Canada approved. 30-day residual." variant="dark" />
    </>
  )
}
