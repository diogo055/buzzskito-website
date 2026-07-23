import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'

const SLUG = 'what-percentage-of-ticks-carry-lyme-ontario'
const DATE = '2026-07-16'
const TITLE = 'What Percentage of Ticks Carry Lyme Disease in Ontario? (2026 Data)'

const FAQS = [
  {
    question: 'What percentage of ticks carry Lyme disease in Ontario?',
    answer: 'In Ontario, roughly 20% of blacklegged ticks (Ixodes scapularis) in established risk areas carry the Lyme bacterium Borrelia burgdorferi, based on Public Health Ontario passive surveillance. That figure is a province-wide average — in the most endemic pockets of southern and northwestern Ontario, 20-40% of adult blacklegged ticks test positive, while nymphs generally run lower (roughly 10-25%). Prevalence has climbed sharply over time: PHO surveillance found 8.4% infected in 2008, 19.1% by 2012, and over 20% in established areas by 2023. Only blacklegged ticks transmit Lyme — American dog ticks, the other common Ontario species, carry a 0% Lyme rate. Consult Public Health Ontario for current local figures.',
  },
  {
    question: 'How many ticks have Lyme disease in the GTA?',
    answer: 'In the Greater Toronto Area, which now sits inside an established blacklegged tick risk area, roughly 1 in 5 blacklegged ticks (about 20%) carries Borrelia burgdorferi according to Public Health Ontario. That means a majority of blacklegged ticks — around 4 in 5 — are NOT infected. However, the infected share has been rising as the tick population expands, so the GTA is treated as an endemic zone by public health units. Because American dog ticks (which do not carry Lyme) also circulate here, the share of ALL ticks submitted that carry Lyme is lower than the blacklegged-only rate.',
  },
  {
    question: 'What are the chances of getting Lyme disease from a tick bite?',
    answer: 'The chance of getting Lyme disease from a single tick bite is low — the U.S. CDC estimates roughly 1-3% even in highly endemic areas. That is because three things all have to line up: the tick must be a blacklegged tick (not an American dog tick), it must be infected (about 20% in Ontario risk areas), and it must stay attached long enough to transmit — generally 24-36 hours or more. If you find and remove a tick within 24 hours, the transmission risk is very low. This is a general estimate, not medical advice — see a healthcare provider or Public Health Ontario if you develop a rash or flu-like symptoms after a bite.',
  },
  {
    question: 'Are all ticks infected with Lyme disease?',
    answer: 'No. Most ticks are not infected, and most tick species cannot carry Lyme at all. In Ontario, only the blacklegged tick (Ixodes scapularis) transmits Borrelia burgdorferi, and only about 20% of blacklegged ticks in established risk areas are infected. The American dog tick (Dermacentor variabilis) — the second most commonly submitted tick in Ontario — does NOT carry Lyme disease. So even in a high-risk area, the majority of ticks you might encounter are either the wrong species or an uninfected blacklegged tick.',
  },
  {
    question: 'What is the blacklegged tick infection rate in Ontario?',
    answer: 'The blacklegged tick infection rate in Ontario is approximately 20% for Borrelia burgdorferi in established risk areas, per Public Health Ontario passive surveillance, with adult ticks in endemic pockets reaching 20-40% and nymphs generally lower (10-25%). The rate has more than doubled since 2008, when PHO surveillance recorded 8.4%. Infection rates also vary by pathogen — a smaller share of blacklegged ticks carry Anaplasma, Babesia, or Powassan virus, all of which are monitored separately by public health.',
  },
  {
    question: 'How long does a tick have to be attached to transmit Lyme disease?',
    answer: 'A blacklegged tick generally must be attached for 24-36 hours or longer before it can transmit Borrelia burgdorferi, according to the CDC and Public Health Ontario. The bacterium lives in the tick gut and needs time to migrate to the salivary glands during feeding. This is why prompt tick checks and removal matter so much: finding and removing an attached tick within 24 hours makes Lyme transmission unlikely even if that tick was infected. Powassan virus, though, can transmit far faster — within hours — which is one reason no attached tick should be ignored.',
  },
  {
    question: 'Which ticks in Ontario carry Lyme disease?',
    answer: 'Only the blacklegged tick, also called the deer tick (Ixodes scapularis), carries and transmits Lyme disease in Ontario. It is now established across most of southern Ontario, including the GTA, and in pockets of the northwest. The American dog tick (Dermacentor variabilis) is common in Ontario but does not transmit Lyme — though it can carry other, rarer pathogens. Correct species identification matters: you can submit a photo of any tick you find to the free eTick.ca identification service or check with your local public health unit.',
  },
  {
    question: 'Has the tick Lyme infection rate in Ontario been increasing?',
    answer: 'Yes. Public Health Ontario passive surveillance recorded the share of blacklegged ticks infected with Borrelia burgdorferi rising from 8.4% in 2008 to 19.1% in 2012, and over 20% in established risk areas by 2023. At the same time, the geographic range of infected ticks has expanded northward across the province with warming winters. Human case counts reflect the same trend: Ontario reported 2,369 Lyme disease cases in 2024, up 27% over 2023 and the most of any province, per the Public Health Agency of Canada.',
  },
  {
    question: 'How many people get Lyme disease in Ontario and Canada each year?',
    answer: 'Ontario reported 2,369 confirmed and probable Lyme disease cases in 2024, an increase of about 27% over 2023 and the highest of any province, according to the Public Health Agency of Canada (PHAC). Canada as a whole recorded roughly 5,809 cases in 2024, up from fewer than 150 a decade earlier. Because milder infections often go undiagnosed, the true totals are believed to be higher. PHAC and Public Health Ontario publish annual surveillance updates; case counts lag behind actual infections.',
  },
  {
    question: 'If a tick that bit me tests positive for Lyme, will I get Lyme disease?',
    answer: 'Not necessarily. A positive tick test means the tick carried Borrelia burgdorferi, but transmission still depends on how long the tick was attached — generally 24-36 hours or more is needed. Many people bitten by an infected tick do not develop Lyme, especially if the tick was removed early. Tick testing is not a substitute for medical evaluation, because a tick can carry the bacterium without having transmitted it, and results can be slow. Public Health Ontario and the CDC advise watching for symptoms and consulting a healthcare provider rather than relying on tick testing alone.',
  },
  {
    question: 'Can I get Lyme disease in the GTA and Toronto specifically?',
    answer: 'Yes. Toronto and the broader GTA are now within an established blacklegged tick risk area, and roughly 20% of blacklegged ticks in these established zones carry Borrelia burgdorferi. Ravine systems, wooded trails, tall grass, and leaf-litter edges are the highest-risk micro-habitats. The risk is real but manageable: wear repellent, do tick checks after time outdoors, and reduce tick habitat in your own yard. See our Ontario Lyme disease tracker for the latest local surveillance picture.',
  },
  {
    question: 'How can I lower my familys Lyme disease risk in Ontario?',
    answer: 'The most effective steps are: do full-body tick checks within a few hours of being outdoors, remove any attached tick promptly with fine-tipped tweezers (before the 24-36 hour transmission window), use a Health Canada-approved repellent containing DEET or icaridin, wear light-coloured clothing and tuck pants into socks on trails, and reduce tick habitat around your home by keeping grass short and clearing leaf litter along wood edges. Professional yard tick control can reduce yard tick populations substantially. This is general prevention guidance — consult Public Health Ontario or a healthcare provider for personal medical advice.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: 'What percentage of ticks carry Lyme disease in Ontario? About 20% of blacklegged ticks in established risk areas carry Borrelia burgdorferi (Public Health Ontario). Infection rates by species and life stage, transmission time, and your real chance of Lyme from a bite. Updated 2026.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
})

export default function TicksCarryLymeOntarioPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Data-backed 2026 answer to what percentage of ticks carry Lyme disease in Ontario, citing Public Health Ontario and PHAC surveillance.', slug: SLUG, datePublished: DATE })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'What Percentage of Ticks Carry Lyme in Ontario', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, DATE)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Ticks &amp; Lyme in Ontario</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">The share of blacklegged ticks carrying Lyme in established Ontario risk areas, how it varies by species and life stage, how long a tick must feed to infect you, and your real-world chance of Lyme from a single bite.</p>
          <p className="text-sm text-brand-300 mt-4">By Alex Francisco, Founder &amp; Owner-Operator, BuzzSkito Mosquito &amp; Tick Control · Updated July 16, 2026 · Reviewed against Public Health Ontario &amp; PHAC data</p>
        </div>
      </section>

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-base text-gray-800 leading-relaxed mb-3">
              BuzzSkito&rsquo;s GTA tick technicians: in Ontario, about <strong>20% of blacklegged ticks in established risk areas carry the Lyme bacterium</strong> (Borrelia burgdorferi), per Public Health Ontario — meaning most ticks are not infected, and most tick species cannot carry Lyme at all.
            </p>
            <ul className="space-y-2 text-sm text-gray-800">
              <li className="flex gap-2"><span className="text-emerald-600 font-bold">&bull;</span><span>Roughly <strong>20% of blacklegged ticks</strong> (Ixodes scapularis) in established Ontario risk areas carry Borrelia burgdorferi, the Lyme bacterium (Public Health Ontario passive surveillance).</span></li>
              <li className="flex gap-2"><span className="text-emerald-600 font-bold">&bull;</span><span>In the most endemic pockets, <strong>20-40% of adult blacklegged ticks</strong> test positive; nymphs generally run lower, around 10-25%.</span></li>
              <li className="flex gap-2"><span className="text-emerald-600 font-bold">&bull;</span><span>Infection prevalence has more than doubled: <strong>8.4% in 2008 to 19.1% in 2012 to over 20% by 2023</strong> in established areas (PHO).</span></li>
              <li className="flex gap-2"><span className="text-emerald-600 font-bold">&bull;</span><span>The <strong>American dog tick carries a 0% Lyme rate</strong> — only blacklegged ticks transmit Lyme in Ontario.</span></li>
              <li className="flex gap-2"><span className="text-emerald-600 font-bold">&bull;</span><span>A tick must usually stay attached <strong>24-36 hours or longer</strong> to transmit Lyme; removal within 24 hours makes transmission unlikely (CDC / PHO).</span></li>
              <li className="flex gap-2"><span className="text-emerald-600 font-bold">&bull;</span><span>Your chance of Lyme from a single tick bite is low — the <strong>CDC estimates about 1-3%</strong> even in highly endemic areas.</span></li>
            </ul>
            <p className="text-xs text-gray-500 mt-3">&mdash; BuzzSkito, GTA mosquito &amp; tick control &middot; 150+ five-star Google reviews</p>
            <p className="text-xs text-gray-500 mt-1.5">Health information for general education, not medical advice. See a healthcare provider or Public Health Ontario if you develop symptoms after a tick bite.</p>
          </div>
        </div>
      </section>

      <article className="pb-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">

          <h2>What percentage of ticks carry Lyme disease in Ontario?</h2>
          <p><strong>About 20% of blacklegged ticks in established Ontario risk areas carry the Lyme bacterium, Borrelia burgdorferi, according to Public Health Ontario (PHO).</strong> That is a province-wide average for the one species that can actually transmit Lyme — the blacklegged tick, also called the deer tick (<em>Ixodes scapularis</em>). It is not a figure for every tick you might find, because Ontario&rsquo;s other common tick, the American dog tick, cannot carry Lyme at all.</p>
          <p>The 20% headline hides real variation. In the most endemic pockets of southern and northwestern Ontario, roughly <strong>20-40% of adult blacklegged ticks</strong> test positive for <em>B. burgdorferi</em>, while immature nymphs generally carry lower infection rates, in the range of 10-25%. Local public health units in the highest-risk zones — including parts of Toronto and Northwestern Ontario — have reported infection rates above 20%.</p>
          <p>The trend matters as much as the number. PHO passive surveillance found the infected share of blacklegged ticks rising from <strong>8.4% in 2008 to 19.1% in 2012</strong>, and past 20% in established areas by 2023. As blacklegged ticks spread northward with milder winters, both the infection rate and the size of the at-risk area have grown. For the current local surveillance picture, see our <Link href="/ontario-lyme-disease-tracker-2026">Ontario Lyme disease tracker for 2026</Link> and the full data set on our <Link href="/ticks-in-ontario-statistics">ticks in Ontario statistics page</Link>.</p>

          <h2>How many ticks have Lyme disease?</h2>
          <p><strong>Roughly 1 in 5 blacklegged ticks in Ontario&rsquo;s established risk areas is infected — so about 4 in 5 are not.</strong> Framed as a fraction, the 20% average means that even in an endemic zone, most blacklegged ticks you encounter are carrying no Lyme bacterium at all. When you also account for American dog ticks (which never carry Lyme) mixed into the population, the share of <em>all</em> ticks that carry Lyme is lower still.</p>
          <p>Here is how Ontario&rsquo;s blacklegged tick infection prevalence has changed over time, drawn from Public Health Ontario passive surveillance:</p>

          <table className="not-prose w-full text-sm border-collapse border border-navy-100 rounded-lg overflow-hidden my-5">
            <thead className="bg-brand-50">
              <tr>
                <th className="px-3 py-2 text-left">Year / area</th>
                <th className="px-3 py-2 text-left">Blacklegged ticks infected with B. burgdorferi</th>
                <th className="px-3 py-2 text-left">Source / note</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">2008 (province-wide)</td><td className="px-3 py-2 font-mono">8.4%</td><td className="px-3 py-2 text-xs text-gray-600">PHO passive surveillance</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">2012 (province-wide)</td><td className="px-3 py-2 font-mono">19.1%</td><td className="px-3 py-2 text-xs text-gray-600">More than doubled in 4 years</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">2023 (established risk areas)</td><td className="px-3 py-2 font-mono">&gt;20%</td><td className="px-3 py-2 text-xs text-gray-600">Toronto, NW Ontario endemic zones</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">Adult ticks (endemic pockets)</td><td className="px-3 py-2 font-mono">20-40%</td><td className="px-3 py-2 text-xs text-gray-600">Adults feed longer, higher prevalence</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">Nymphs (typical)</td><td className="px-3 py-2 font-mono">~10-25%</td><td className="px-3 py-2 text-xs text-gray-600">Lower rate but harder to spot</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">American dog tick</td><td className="px-3 py-2 font-mono">0%</td><td className="px-3 py-2 text-xs text-gray-600">Does not transmit Lyme</td></tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500">Figures are approximate and vary by year, life stage, and location. Consult Public Health Ontario for current local data.</p>

          <h2>What are the chances of getting Lyme from a tick bite?</h2>
          <p><strong>The chance of developing Lyme disease from a single tick bite is low — the U.S. CDC estimates roughly 1-3%, even in highly endemic areas.</strong> That may sound surprisingly small given a 20% tick infection rate, but three separate conditions all have to line up before a bite becomes an infection.</p>
          <ul>
            <li><strong>Right species:</strong> the tick must be a blacklegged tick, not an American dog tick. A large share of ticks people find are dog ticks, which cannot transmit Lyme.</li>
            <li><strong>Infected tick:</strong> the blacklegged tick must actually carry <em>B. burgdorferi</em> — about a 1-in-5 chance in established Ontario risk areas.</li>
            <li><strong>Long enough attachment:</strong> the tick must stay attached long enough to transmit, generally <strong>24-36 hours or more</strong>. Many ticks are found and removed before that window closes.</li>
          </ul>
          <p>Because those factors compound, the real-world per-bite risk stays low — <em>provided you check for and remove ticks promptly</em>. If an infected tick feeds undisturbed for two or three days, the risk rises considerably, which is why the single most protective habit is a thorough tick check within a few hours of coming indoors. This is a general population estimate, not a personal medical assessment — if you were bitten and develop an expanding rash or flu-like symptoms, contact a healthcare provider or Public Health Ontario.</p>

          <aside aria-label="Professional tick control" className="not-prose my-8 rounded-2xl border-2 border-emerald-300 bg-gradient-to-br from-emerald-50 to-white p-6 sm:p-7 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-extrabold text-brand-900 mb-2 leading-tight">Cut the ticks in your own yard</h3>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">You can&rsquo;t change the infection rate, but you can shrink how many ticks live where your family walks. BuzzSkito&rsquo;s professional tick barrier spray targets the lawn-to-woods edges, leaf litter, and fence lines where blacklegged ticks concentrate — backed by 150 five-star reviews across 19 GTA cities.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/free-yard-assessment" className="btn-primary-sm">Get a Free Quote →</Link>
              <a href="tel:+12892165030" className="font-bold text-brand-800 hover:text-brand-600 transition-colors">(289) 216-5030</a>
            </div>
          </aside>

          <h2>Are all ticks infected with Lyme disease?</h2>
          <p><strong>No — most ticks are not infected, and most tick species cannot carry Lyme at all.</strong> In Ontario, only the blacklegged tick transmits <em>B. burgdorferi</em>, and only about 20% of blacklegged ticks in established risk areas are actually infected. The American dog tick (<em>Dermacentor variabilis</em>), the second most commonly submitted tick in the province, does not carry Lyme disease.</p>
          <p>This is why correct identification matters so much. A dog tick bite carries no Lyme risk, while a blacklegged tick bite carries a possible — but far from certain — risk. If you find a tick, you can photograph it and submit it to the free <em>eTick.ca</em> public identification service, or contact your local public health unit. Knowing which species bit you, and how long it was attached, tells you far more about your real risk than the raw infection percentage alone. Our guide on whether <Link href="/blog/are-ticks-dangerous-ontario">ticks are dangerous in Ontario</Link> walks through the species and the diseases they can and cannot spread.</p>

          <h2>What is the blacklegged tick infection rate, and why does attachment time matter?</h2>
          <p><strong>The blacklegged tick infection rate in Ontario is approximately 20% for Lyme in established risk areas, but the bacterium still needs 24-36 hours of feeding to reach you.</strong> The Lyme bacterium lives in the tick&rsquo;s gut. During a blood meal it slowly migrates to the tick&rsquo;s salivary glands, and only then can it pass into a host. That biological delay is the reason prompt removal is so protective: even an infected tick is unlikely to transmit Lyme if you pull it off within the first day.</p>
          <p>Infection rates also differ by pathogen. A smaller share of Ontario blacklegged ticks carry Anaplasma, Babesia, or Powassan virus — all monitored separately by public health, and some (notably Powassan) able to transmit far faster than Lyme. That is one more reason not to ignore any attached tick, regardless of how long you think it has been there. For a full prevention routine — repellents, tick checks, clothing, and yard steps — see our <Link href="/blog/lyme-disease-tick-prevention-ontario">Lyme disease and tick prevention guide for Ontario</Link>.</p>

          <h2>How this compares to human Lyme case counts</h2>
          <p>Tick infection rates and human case counts move together. As the infected share of blacklegged ticks has climbed, so have diagnosed infections in people. Ontario reported <strong>2,369 confirmed and probable Lyme disease cases in 2024</strong>, up about 27% over 2023 and the most of any province, according to the Public Health Agency of Canada (PHAC). Canada as a whole recorded roughly <strong>5,809 cases in 2024</strong>, up from fewer than 150 a decade earlier.</p>
          <p>Because milder infections often go undiagnosed and reporting lags behind actual exposure, public health agencies treat these counts as underestimates. The direction, though, is consistent: more infected ticks, over a wider area, producing more human cases each year. That is the practical takeaway behind the percentage — the odds on any single bite are low, but the total exposure across a GTA summer is real and rising.</p>

          <h2>The bottom line for GTA households</h2>
          <p>About one in five blacklegged ticks in Ontario&rsquo;s established risk areas carries Lyme, the rate has doubled since 2008, and the GTA is firmly inside the risk zone. Yet your chance of Lyme from any single bite stays low if you check for ticks and remove them within 24 hours. The most effective response is simple and layered: reduce tick habitat in your yard, use repellent and do tick checks after time outdoors, and remove any attached tick promptly with fine-tipped tweezers. None of this replaces medical advice — it lowers the number of chances a tick ever gets.</p>

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/ontario-lyme-disease-tracker-2026">Ontario Lyme Disease Tracker 2026 — Live Surveillance Data</Link></li>
            <li><Link href="/ticks-in-ontario-statistics">Ticks in Ontario — Statistics &amp; Infection Prevalence</Link></li>
            <li><Link href="/blog/are-ticks-dangerous-ontario">Are Ticks Dangerous in Ontario?</Link></li>
            <li><Link href="/blog/lyme-disease-tick-prevention-ontario">Lyme Disease &amp; Tick Prevention in Ontario</Link></li>
            <li><Link href="/tick-control">BuzzSkito Professional Tick Control Service</Link></li>
          </ul>

          <p className="text-xs text-gray-500 mt-8 border-t border-gray-200 pt-4">Sources: Public Health Ontario (passive tick surveillance, <em>B. burgdorferi</em> prevalence); Public Health Agency of Canada (Lyme disease surveillance, 2024); U.S. Centers for Disease Control and Prevention (tick attachment and transmission risk). This article is general health education, not medical advice. Consult a healthcare provider or your local public health unit for guidance specific to your situation.</p>
        </div>
      </article>

      <CTASection heading="Fewer Ticks Where Your Family Walks" subtext="Professional tick barrier spray targets the yard edges where blacklegged ticks concentrate. Free quote for all GTA properties." variant="dark" />
    </>
  )
}
