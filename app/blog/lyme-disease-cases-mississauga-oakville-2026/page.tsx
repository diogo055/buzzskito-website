import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import BlogPostCTA from '@/components/BlogPostCTA'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'

const POST = {
  title: 'Lyme Disease Cases in Mississauga and Oakville 2026: What the Numbers Show and What It Means for Your Family',
  slug: 'lyme-disease-cases-mississauga-oakville-2026',
  date: '2026-05-26',
  excerpt: 'Lyme cases in Peel and Halton have climbed steadily since 2020. What the Public Health surveillance numbers say, what they don\'t capture, and the practical homeowner playbook for Mississauga and Oakville families in 2026.',
}

const FAQS = [
  {
    question: 'How many Lyme disease cases are reported in Mississauga?',
    answer: 'Peel Public Health — which covers Mississauga, Brampton, and Caledon — has reported a steady increase in lab-confirmed Lyme disease cases since 2020. Annual reported cases in the Peel region are tracked through the integrated Public Health Information System (iPHIS) and reported to Public Health Ontario. The Peel numbers have roughly tripled over the past five years, with the strongest growth coming from cases linked to local exposure rather than travel. Mississauga specifically accounts for the majority of Peel cases because of its population density and the Credit River ravine corridor running through the city. Public Health Ontario classifies the Credit River watershed as an established blacklegged tick surveillance area.',
  },
  {
    question: 'Has Lyme increased in Oakville?',
    answer: 'Yes — Halton Region Public Health has reported a sustained year-over-year increase in Lyme cases since 2020, and Oakville accounts for a significant share of Halton\'s caseload. The 16 Mile Creek corridor, the Bronte Creek watershed, and the Iroquois Shoreline forested areas are all established blacklegged tick zones with confirmed Borrelia burgdorferi prevalence. Active tick surveillance — dragging for ticks and testing them in lab — has detected positive ticks in Oakville for multiple consecutive years. The clinical case numbers lag the actual tick density by 1-2 years because diagnosis takes time, so the reported cases for 2026 likely understate true exposure in 2024 and 2025.',
  },
  {
    question: 'Is Halton Region a Lyme hot spot?',
    answer: 'Halton Region — Oakville, Burlington, Milton, and Halton Hills — is now classified by Public Health Ontario as an established Lyme disease risk area. This is the highest tier of risk designation and means blacklegged ticks carrying Borrelia burgdorferi have been confirmed through active surveillance in the area. The Niagara Escarpment corridor running through Burlington and Milton, the Bronte Creek and 16 Mile Creek systems, and the conservation lands of Halton Hills all support stable tick populations. Halton was not on this list five years ago. Its addition reflects genuine, measurable tick range expansion documented by health unit field collections.',
  },
  {
    question: 'What should I do if I find a tick on my child in Mississauga?',
    answer: 'Stay calm and act quickly. Use fine-tipped tweezers to grasp the tick as close to the skin as possible, pull straight up with steady pressure (do not twist), and clean the bite site with rubbing alcohol or soap and water. Save the tick in a sealed plastic bag or container — Peel Public Health and several local clinics will accept submitted ticks for identification (though routine testing has been discontinued in Ontario, identification still confirms species). Note the date and time of removal. Watch the bite site for 30 days. Any expanding red rash (erythema migrans), fever, fatigue, joint pain, or facial drooping warrants immediate medical attention. Tell your doctor where the tick was acquired so they can assess local Lyme risk accurately.',
  },
  {
    question: 'How can I get my tick tested in Halton?',
    answer: 'Routine free public tick testing was discontinued in Ontario in 2019, but the eTick.ca service — operated by Bishop\'s University — provides free photo-based tick identification within 1-2 days. This tells you the species (blacklegged ticks vs other species) and gives a guidance flag for medical follow-up. Halton Region Public Health no longer accepts ticks for testing as a routine service, but they do track confirmed Lyme cases through the iPHIS system. For paid testing, Geneticks (geneticks.ca) offers PCR-based testing for Borrelia burgdorferi for around $90, with results in 3-5 business days. The clinical recommendation, however, has shifted: doctors are increasingly using exposure history plus symptoms to drive prophylactic doxycycline decisions rather than waiting for tick test results.',
  },
  {
    question: 'Are there Lyme cases in Mississauga from local tick exposure or just travel?',
    answer: 'Both, but the share from local exposure has grown substantially since 2020. Five years ago, most Peel and Halton Lyme cases involved exposure outside the region — cottages in Muskoka, hiking in eastern Ontario, or travel to the United States. The 2026 case mix is different. A meaningful portion of newly reported cases now involve documented exposure inside Mississauga, Oakville, Burlington, or Milton — backyard ticks, neighbourhood park exposure, or hiking in local conservation lands. This shift is consistent with the active tick surveillance data showing established Borrelia-positive tick populations in the Credit River and 16 Mile Creek corridors specifically.',
  },
  {
    question: 'Which Mississauga and Oakville neighbourhoods are highest risk for Lyme?',
    answer: 'In Mississauga: properties bordering the Credit River corridor (Streetsville, Erindale, Mississauga Valleys, Riverwood, Meadowvale), Rattray Marsh and the Iroquois Shoreline, Cooksville Creek properties, and any backyard adjacent to conservation lands or naturalized ravine. In Oakville: properties along 16 Mile Creek (Bronte, Old Oakville, Glen Abbey, Joshua Creek, West Oak Trails), the Iroquois Shoreline forested zones, and Bronte Creek-adjacent areas. The general rule applies: if your backyard borders forest, ravine, or naturalized green space, treat your property as elevated tick risk regardless of the specific neighbourhood label.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: 'Lyme Disease Cases in Mississauga & Oakville 2026 — Peel + Halton Data',
  description:
    'Lyme cases in Peel and Halton have climbed since 2020. What the Public Health surveillance shows for Mississauga and Oakville, what the numbers miss, and the practical 2026 protection playbook.',
  canonical: `/blog/${POST.slug}`,
  type: 'article',
  publishedTime: POST.date,
})

export default function LymeMississaugaOakvillePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: POST.title, description: POST.excerpt, slug: POST.slug, datePublished: POST.date })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Lyme Cases Mississauga & Oakville 2026', url: `/blog/${POST.slug}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${POST.slug}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-amber-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1 flex-wrap">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Lyme Cases Mississauga &amp; Oakville 2026</span>
          </nav>
          <span className="bg-amber-500 text-white text-xs px-3 py-1 rounded-full mb-4 inline-block font-bold uppercase tracking-wider">Peel + Halton · 2026 Update</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">{POST.title}</h1>
          <p className="text-brand-300 text-sm">Published {new Date(POST.date).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })} · By Alex &amp; The BuzzSkito Team</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 -mt-6 sm:-mt-8 relative z-10">
        <BlogPostCTA />
      </div>

      <article className="max-w-3xl mx-auto px-4 py-12 prose-brand">
        <div className="not-prose bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
          <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
          <p className="text-gray-800 text-[15px] leading-relaxed font-medium">Lyme disease cases in Peel (Mississauga) and Halton (Oakville) have climbed steadily since 2020, and both are now Public Health Ontario–designated established risk areas. If your GTA property borders forest, ravine, or conservation land, treat it as elevated tick risk.</p>
          <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
            <li>Both Peel and Halton are classified by Public Health Ontario as established Lyme disease risk areas — the highest risk tier.</li>
            <li>Peel reported single-digit annual Lyme cases as recently as 2018; by 2025 the count was several multiples higher.</li>
            <li>The Credit River corridor (Mississauga) and 16 Mile Creek corridor (Oakville) are confirmed Borrelia-positive blacklegged tick zones.</li>
            <li>Reported cases capture only an estimated 10–20% of true infections and lag actual exposure by 1 to 2 years (US CDC).</li>
            <li>A blacklegged tick usually must stay attached 24–36 hours before it can transmit Lyme, so removal within 24 hours sharply lowers risk.</li>
            <li>The erythema migrans (bull&rsquo;s-eye) rash appears in only 70–80% of cases — its absence does not rule Lyme out.</li>
          </ul>
          <p className="mt-3 text-xs text-gray-500">— BuzzSkito, GTA mosquito &amp; tick control · 150+ five-star Google reviews. General information, not medical advice.</p>
        </div>
        <aside className="not-prose mb-6 rounded-xl bg-brand-50 border-l-4 border-brand-700 px-5 py-4">
          <p className="text-xs font-extrabold text-brand-700 uppercase tracking-wider mb-1.5">★ Cited as a source by</p>
          <p className="text-sm text-brand-900 leading-relaxed">
            <strong>Toronto Star</strong> · <strong>CityNews Toronto</strong> · <strong>TorontoToday</strong> — covering Ontario&rsquo;s 2026 tick surge and rising Lyme cases across Peel, Halton, and the GTA.
          </p>
        </aside>

        <p className="text-lg text-gray-700 not-prose border-l-4 border-amber-400 pl-5 py-2 mb-8 leading-relaxed">
          <strong>TL;DR:</strong> Lyme cases in Peel (Mississauga, Brampton, Caledon) and Halton (Oakville, Burlington, Milton, Halton Hills) have climbed steadily since 2020. The Credit River corridor in Mississauga and the 16 Mile Creek corridor in Oakville are established blacklegged tick zones with confirmed Borrelia. The reported case numbers lag actual exposure by 1-2 years and miss asymptomatic infections entirely. Treat your property as elevated risk if you back onto forest, ravine, or conservation land.
        </p>

        <h2>What the Public Health data actually shows</h2>
        <p>Ontario tracks Lyme disease as a reportable communicable disease. When a doctor diagnoses a confirmed case — based on lab-confirmed Borrelia burgdorferi antibody testing plus clinical symptoms — that case is reported through the integrated Public Health Information System (iPHIS) to the local Public Health Unit, then aggregated by Public Health Ontario.</p>
        <p>Peel Public Health covers Mississauga, Brampton, and Caledon. Halton Region Public Health covers Oakville, Burlington, Milton, and Halton Hills. Both health units publish annual data on Lyme case counts, and the trend lines are clear: cases have climbed steadily since 2020, with the rate of increase accelerating in 2023, 2024, and 2025.</p>
        <p>Peel reported single-digit annual Lyme cases as recently as 2018. The 2025 case count was several multiples higher. Halton&rsquo;s case progression mirrors Peel&rsquo;s closely. Both regions are now classified by Public Health Ontario as established Lyme disease risk areas — the highest tier of designation, indicating that blacklegged ticks carrying Borrelia have been confirmed in the area through active surveillance.</p>

        <h3>The Peel numbers (Mississauga)</h3>
        <p>Mississauga accounts for the majority of Peel&rsquo;s reported cases simply by population — Mississauga is the largest municipality in Peel by a wide margin. The Credit River corridor is the documented epicentre. Public Health Ontario surveillance — including drag sampling, deer-collected ticks, and homeowner-submitted ticks via eTick.ca — has confirmed established blacklegged tick populations along the full length of the Credit. The watershed includes Erindale Park, Riverwood, Streetsville, Meadowvale, and the conservation lands upstream into Caledon. Rattray Marsh on the Lake Ontario shoreline also supports a tick population.</p>
        <p>What this means in practice: a Mississauga homeowner backing onto the Credit River, Cooksville Creek, Etobicoke Creek, or any of the secondary ravines should treat their property as elevated risk regardless of the postal code. The <Link href="/mississauga-tick-spray" className="text-brand-700 underline">Mississauga tick spray</Link> calendar starts in late April for these properties — well before most homeowners think to act.</p>

        <h3>The Halton numbers (Oakville and Burlington)</h3>
        <p>Halton&rsquo;s case progression has tracked Peel&rsquo;s closely since 2020. Oakville accounts for a disproportionate share of Halton&rsquo;s Lyme cases relative to its population — this is consistent with tick density mapping showing 16 Mile Creek and Bronte Creek as established blacklegged tick zones. Active surveillance teams have documented positive Borrelia ticks in Oakville for multiple consecutive years.</p>
        <p>Burlington adds significant pressure through the Royal Botanical Gardens, Aldershot ravine system, and the Niagara Escarpment foot. Properties in Aldershot, Tyandaga, Burlington Heights, and the Lakeshore corridor all see elevated risk. Milton&rsquo;s growth into the escarpment corridor — Bronte Creek headwaters, Crawford Lake area, Kelso Conservation — has added a new exposure surface that did not exist as a residential concern a decade ago.</p>
        <p>The <Link href="/oakville-tick-spray" className="text-brand-700 underline">Oakville tick spray</Link> and <Link href="/burlington-tick-spray" className="text-brand-700 underline">Burlington tick spray</Link> service calendars reflect this: late April starts, mid-June nymph peak coverage, and a mid-August adult peak treatment for properties scoring 70+ on the risk index.</p>

        <h2>What the surveillance numbers do NOT capture</h2>
        <p>The reported case numbers are real, but they substantially understate true Lyme exposure for three reasons.</p>

        <h3>Asymptomatic and atypical infections</h3>
        <p>Not everyone bitten by an infected tick develops symptoms — and not everyone who develops symptoms develops the bull&rsquo;s-eye rash that drives doctor visits. Estimates from US Centers for Disease Control suggest reported cases capture only 10-20% of actual infections in established Lyme areas. The asymptomatic and atypical cases never make it into the iPHIS data. They exist; they just are not counted.</p>

        <h3>Diagnosis lag</h3>
        <p>Clinical Lyme diagnosis can take weeks or months. The two-tier serological testing (ELISA followed by Western blot) has a meaningful false-negative rate in early infection. Patients with non-specific symptoms (fatigue, joint pain, brain fog) are often misdiagnosed for months before Lyme is considered. The result: the 2025 reported case numbers reflect 2023 and 2024 exposure to a substantial degree. The 2026 reported cases will reflect 2024-2025 exposure. The lag is real and it always understates the current-year tick risk.</p>

        <h3>Out-of-region reporting</h3>
        <p>If a Mississauga family camps in Algonquin Park, gets bitten there, and is diagnosed back home — the case appears in the Peel data but the exposure was elsewhere. Conversely, a tourist exposed in Mississauga but treated in their home region would not appear in Peel data. Health Public Ontario does ask diagnosing physicians for likely-exposure location, but the data quality on this question is uneven.</p>
        <p>What this means for a Mississauga or Oakville homeowner: the reported case numbers should be read as a floor on local risk, not a ceiling. The actual exposure pressure in your neighbourhood is almost certainly higher than the public data suggests.</p>

        <h2>How tick surveillance actually works</h2>
        <p>Public Health Ontario, in partnership with local Public Health Units, runs two surveillance streams that drive the risk-area classification.</p>
        <ul>
          <li><strong>Active surveillance.</strong> Teams drag white flannel cloths through grass and leaf litter in suspected tick habitat. Collected ticks are identified to species and tested for Borrelia burgdorferi. The Credit River conservation lands and 16 Mile Creek corridor have been sampled for multiple consecutive years.</li>
          <li><strong>Passive surveillance.</strong> Homeowners submit ticks through eTick.ca for photo-based identification. This stream is faster (1-2 days) but less reliable for prevalence estimates because submitters are self-selected (more rural, more outdoor-active).</li>
        </ul>
        <p>A region gets classified as an &quot;established risk area&quot; when at least one positive blacklegged tick is found through active surveillance, indicating the species is present and infected with Borrelia. Both Peel (Mississauga) and Halton (Oakville, Burlington) have crossed this threshold.</p>

        <h2>What this means for your family</h2>
        <p>The headline message is straightforward: <strong>if you live in Mississauga or Oakville and your property borders forest, ravine, or naturalized green space, you should treat your yard as elevated tick risk.</strong> The case data, the surveillance data, and the geography all point in the same direction.</p>

        <h3>The practical protection layer</h3>
        <p>Tick risk management is a layered defence. No single intervention eliminates risk; the combination drives it down to acceptable levels.</p>
        <ul>
          <li><strong>Professional tick barrier spray on the yard.</strong> A late-April or early-May application followed by a mid-June top-up covers both the nymph peak (highest disease transmission risk) and the adult fall peak. The treatment focuses on the lawn-to-forest transition zone, leaf litter areas, garden bed edges, and fence lines — the precise locations where ticks ambush hosts.</li>
          <li><strong>Habitat modification.</strong> Rake out leaf litter from yard edges. Install a 3-foot gravel or wood-chip buffer between lawn and any adjacent forest. Keep grass tight. Move woodpiles away from house and play areas.</li>
          <li><strong>Daily tick checks.</strong> After any outdoor activity — even gardening. Check children behind ears, hairline, neck, armpits, waistline, behind knees. Check dogs after every walk in tick habitat.</li>
          <li><strong>Permethrin-treated clothing for outdoor activity.</strong> If your family hikes the Credit River trails, 16 Mile Creek conservation areas, Bronte Creek Provincial Park, or any forested area — treat pants and socks with 0.5% permethrin spray. One application lasts six weeks or six washes.</li>
          <li><strong>Know the 24-36 hour transmission window.</strong> Lyme transmission typically requires 24-36 hours of attached tick feeding. A tick found and removed within 24 hours dramatically reduces — but does not eliminate — Lyme risk. Daily checks matter for exactly this reason.</li>
        </ul>

        <h3>The cost question</h3>
        <p>Professional tick treatment costs less than most families assume. A standalone tick season program runs $597, while bundling tick with mosquito coverage drops the tick add-on to $497 — about $100 per month across the May-September season for both pests on a standard lot. Lot-size scaling applies for larger properties. For a fuller cost breakdown, see <Link href="/blog/how-much-does-tick-treatment-cost-ontario" className="text-brand-700 underline">how much does tick treatment cost in Ontario</Link>.</p>

        <h2>The 2026 news momentum — Toronto Star, CityNews, TorontoToday</h2>
        <p>In May 2026, Toronto Star ran a feature confirming Toronto as a tick hot spot, with follow-on coverage from CityNews and TorontoToday across the same weeks. The headline focus was Toronto itself, but the underlying surveillance data the journalists drew on extends across the GTA — and Peel and Halton numbers are part of the same trend the Toronto coverage was reporting. If you live in Mississauga or Oakville and read the Toronto Star tick coverage thinking &quot;that&rsquo;s a Toronto problem,&quot; the data does not support that read. Peel and Halton are in the same risk band and have been climbing on the same trajectory for the same reasons.</p>
        <p>Three drivers are pushing the case curve up across the western GTA. First, climate: warmer winters and earlier springs have extended the blacklegged tick active season by roughly four weeks since 2010, with adult ticks now active in any month above 4°C. Second, host species: white-tailed deer populations have stabilized year-round across the Credit River conservation lands, the 16 Mile Creek corridor, and Bronte Creek Provincial Park, providing reliable hosts for adult ticks. Third, physician awareness: GPs in Peel and Halton are catching more cases earlier because Lyme is now on the differential diagnosis for non-specific symptoms in a way it was not five years ago. The case numbers reflect all three drivers compounding.</p>

        <h2>What to watch in your child or family member after a tick bite</h2>
        <p>The classic erythema migrans rash (the bull&rsquo;s-eye) appears in 70-80% of Lyme cases — meaning 20-30% of infections show no rash. That is critical to understand. The absence of a rash does not rule out infection. Symptoms typically emerge 3-30 days after the tick bite, with most cases showing up at the 7-14 day mark.</p>
        <p>Early-stage symptoms to watch: an expanding red area at the bite site (often warm, may or may not have a central clearing), flu-like symptoms including fever, chills, muscle aches, fatigue, and headache, swollen lymph nodes near the bite site, and joint pain or stiffness without obvious cause. Later-stage symptoms (weeks to months after untreated infection) include migrating joint pain, facial drooping (Bell&rsquo;s palsy), heart palpitations or chest pain, severe headaches with neck stiffness, and shooting pains or numbness in extremities. Children are particularly vulnerable to the joint and neurological symptoms because they may not be able to articulate what they are feeling.</p>
        <p>If you observe any of these symptoms in someone with known or possible tick exposure, see a doctor and explicitly mention the tick exposure plus the geographic context (Credit River, 16 Mile Creek, Bronte Creek, any conservation land). For more on tick danger and what symptoms warrant immediate medical attention, see <Link href="/blog/are-ticks-dangerous-ontario" className="text-brand-700 underline">are ticks dangerous in Ontario</Link>.</p>

        <h2>Beyond Mississauga and Oakville — the broader Lyme picture</h2>
        <p>The Peel and Halton trends are part of a larger Ontario-wide expansion. Toronto Public Health classifies the city itself as an established Lyme risk area as of 2025. Hamilton, York Region, Durham, and the Niagara Region all show the same upward trend in confirmed cases. The <Link href="/blog/lyme-disease-cases-ontario-2026" className="text-brand-700 underline">Ontario-wide Lyme case picture for 2026</Link> covers the full provincial trend, and the <Link href="/blog/lyme-disease-risk-areas-ontario-2026" className="text-brand-700 underline">Ontario Lyme risk areas map</Link> shows the geographic spread.</p>
        <p>For Mississauga and Oakville specifically, the local picture is this: blacklegged ticks carrying Lyme bacteria are now established in the Credit River and 16 Mile Creek watersheds. Cases will continue to rise as the tick range expands and as physician awareness improves diagnosis rates. The properties getting protected now are insulated from the bulk of that pressure.</p>

        <h2>What to do this week</h2>
        <p>If you live in Mississauga or Oakville and have not yet treated your yard for ticks in 2026:</p>
        <ol>
          <li><strong>Run the <Link href="/yard-risk-report" className="text-brand-700 underline">free yard risk report</Link>.</strong> It calculates an address-specific 1-100 score in under 90 seconds using neighbourhood data, water and forest proximity, lot characteristics, and family situation. Properties scoring 70+ should be treated.</li>
          <li><strong>Book your first treatment.</strong> Same-week service is available across the GTA. <Link href="/mississauga-tick-spray" className="text-brand-700 underline">Mississauga tick spray</Link>, <Link href="/oakville-tick-spray" className="text-brand-700 underline">Oakville tick spray</Link>, and <Link href="/burlington-tick-spray" className="text-brand-700 underline">Burlington tick spray</Link> service pages have local availability.</li>
          <li><strong>Set up the family tick-check habit.</strong> After every outdoor activity through October. The habit matters more than the equipment.</li>
        </ol>

        <h2>Related guides</h2>
        <ul>
          <li><Link href="/blog/lyme-disease-risk-areas-ontario-2026" className="text-brand-700 underline">Lyme Disease Risk Areas Ontario 2026</Link></li>
          <li><Link href="/blog/lyme-disease-cases-ontario-2026" className="text-brand-700 underline">Lyme Disease Cases Ontario 2026</Link></li>
          <li><Link href="/blog/are-ticks-dangerous-ontario" className="text-brand-700 underline">Are Ticks Dangerous in Ontario?</Link></li>
          <li><Link href="/blog/ultimate-tick-control-guide-ontario" className="text-brand-700 underline">Ultimate Tick Control Guide Ontario</Link></li>
          <li><Link href="/ontario-lyme-disease-tracker-2026" className="text-brand-700 underline">Ontario Lyme Disease Tracker 2026</Link></li>
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

      <CTASection heading="Mississauga + Oakville Lyme risk is real — protect your yard now" subtext="Free custom quote based on your address and lot. Sent within 24 hours. Same-week service in Peel and Halton." />
    </>
  )
}
