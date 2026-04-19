import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { TICK_BLOGS } from '@/lib/constants'

const POST = {
  title: 'Every Tick-Borne Disease in Ontario — Complete Guide',
  slug: 'tick-borne-diseases-ontario-complete-list',
  date: '2026-04-12',
  excerpt: 'Complete guide to every tick-borne disease found in Ontario: Lyme disease, Anaplasmosis, Babesiosis, Powassan virus, and more. Risk levels, symptoms, and prevention for GTA homeowners.',
}

export const metadata: Metadata = buildMetadata({
  title: 'Tick-Borne Diseases Ontario | Complete List | BuzzSkito',
  description:
    'Every tick-borne disease in Ontario: Lyme, Anaplasmosis, Babesiosis, Powassan virus. Symptoms, risk, and professional tick control for GTA homeowners.',
  canonical: `/blog/${POST.slug}`,
  type: 'article',
  publishedTime: POST.date,
})

const FAQS = [
  {
    question: 'How many tick-borne diseases are found in Ontario?',
    answer:
      'At least five tick-borne diseases have been documented in Ontario: Lyme disease (Borrelia burgdorferi), Anaplasmosis (Anaplasma phagocytophilum), Babesiosis (Babesia microti), Powassan virus, and Borrelia miyamotoi disease (tick-borne relapsing fever). Lyme disease is by far the most common, but the other infections are increasingly detected in Ontario tick populations and human cases as the blacklegged tick range expands.',
  },
  {
    question: 'Can one tick bite transmit multiple diseases?',
    answer:
      'Yes. A single blacklegged tick can carry more than one pathogen simultaneously. Co-infection with Lyme disease and Anaplasmosis, or Lyme disease and Babesiosis, has been documented in Ontario. Co-infections can produce more severe or unusual symptoms and may require different treatment approaches than a single infection. This is another reason why tick bite prevention and prompt removal are so important.',
  },
  {
    question: 'Which tick-borne disease is most dangerous?',
    answer:
      'Powassan virus is the most dangerous tick-borne disease in Ontario. It can be transmitted in as little as 15 minutes of tick attachment (unlike Lyme disease, which requires 24-36 hours), has no specific treatment, and causes severe neurological illness (encephalitis) in approximately 10% of symptomatic cases with a case fatality rate of roughly 10-15%. However, Powassan virus is rare — Lyme disease is far more common and is the primary tick-borne disease risk for most Ontario residents.',
  },
  {
    question: 'Are tick-borne diseases treatable?',
    answer:
      'Lyme disease and Anaplasmosis are highly treatable with antibiotics (doxycycline is the standard treatment for both) when caught early. Babesiosis is treated with a combination of atovaquone and azithromycin for mild cases or clindamycin and quinine for severe cases. Powassan virus has no specific antiviral treatment — care is supportive. Early detection through awareness of symptoms and prompt medical consultation after tick bites gives the best outcomes for all tick-borne infections.',
  },
  {
    question: 'Does tick spray protect against all tick-borne diseases?',
    answer:
      'Yes. Professional tick barrier spray reduces overall tick populations in your yard by up to 90%, which reduces your exposure to all tick species and all pathogens they carry — including Lyme disease, Anaplasmosis, Babesiosis, and Powassan virus. Because tick spray targets the ticks themselves rather than a specific pathogen, it provides broad protection against the full spectrum of tick-borne diseases present in Ontario.',
  },
]

export default function TickBorneDiseasesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: POST.title, description: POST.excerpt, slug: POST.slug, datePublished: POST.date })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Tick-Borne Diseases Ontario', url: `/blog/${POST.slug}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${POST.slug}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-amber-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Tick-Borne Diseases Ontario</span>
          </nav>
          <span className="bg-brand-800 text-brand-200 text-xs px-3 py-1 rounded-full mb-4 inline-block">Tick Control</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight">{POST.title}</h1>
          <p className="text-brand-300 text-sm">Published {new Date(POST.date).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })} · By BuzzSkito</p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12 prose-brand">
        <p className="text-lg text-gray-600 not-prose border-l-4 border-amber-400 pl-5 py-2 mb-8">
          <strong>Medical disclaimer:</strong> This article provides general public health information about tick-borne diseases in Ontario. Always consult a licensed healthcare provider for diagnosis and treatment of any suspected tick-borne infection. Part of our <Link href={`/blog/${TICK_BLOGS.pillar.slug}`} className="text-brand-700 underline">Ultimate Tick Control Guide for Ontario Homeowners</Link>.
        </p>

        <h2>The Growing Threat of Tick-Borne Disease in Ontario</h2>
        <p>When most Ontario residents think about tick-borne disease, Lyme disease comes to mind first — and for good reason. It is by far the most common tick-borne infection in the province. However, Lyme disease is not the only pathogen carried by ticks in Ontario. The expanding range of the blacklegged tick (<em>Ixodes scapularis</em>) has brought a wider spectrum of tick-borne diseases into Southern Ontario, including several that were previously considered rare or absent in the province.</p>
        <p>Understanding the full range of tick-borne diseases helps homeowners appreciate why tick prevention matters and why prompt tick removal after any bite is critical — regardless of whether the tick &quot;looks infected.&quot;</p>

        <h2>1. Lyme Disease (<em>Borrelia burgdorferi</em>)</h2>
        <h3>The Most Common Tick-Borne Disease in Ontario</h3>
        <p>Lyme disease is caused by the spirochete bacterium <em>Borrelia burgdorferi</em>, transmitted by the blacklegged tick. It is the most frequently reported tick-borne disease in Canada and Ontario, with cases increasing significantly each year as tick populations expand northward.</p>

        <h3>Transmission</h3>
        <ul>
          <li><strong>Vector:</strong> Blacklegged tick (<em>Ixodes scapularis</em>)</li>
          <li><strong>Attachment time required:</strong> Generally 24 to 36 hours — prompt tick removal within 24 hours of attachment significantly reduces transmission risk</li>
          <li><strong>Reservoir hosts:</strong> White-footed mice are the primary reservoir; deer are important for adult tick feeding but do not carry the bacteria efficiently</li>
        </ul>

        <h3>Symptoms</h3>
        <p>Lyme disease progresses through stages if untreated:</p>
        <ul>
          <li><strong>Early localized (3-30 days):</strong> Expanding bull&apos;s-eye rash (erythema migrans) at the bite site (occurs in approximately 70-80% of cases), fever, fatigue, headache, muscle and joint aches</li>
          <li><strong>Early disseminated (weeks to months):</strong> Multiple rashes, facial paralysis (Bell&apos;s palsy), heart palpitations, nerve pain, meningitis symptoms</li>
          <li><strong>Late disseminated (months to years):</strong> Arthritis (particularly in large joints like the knee), chronic neurological symptoms, cognitive difficulties</li>
        </ul>

        <h3>Treatment</h3>
        <p>Early Lyme disease is highly treatable with antibiotics — typically doxycycline for adults or amoxicillin for children and pregnant women. A 2-4 week course resolves the infection in the vast majority of cases when caught early. Later stages may require longer or intravenous antibiotic courses.</p>
        <p>See: <Link href="/blog/lyme-disease-tick-prevention-ontario" className="text-brand-700 hover:underline">Lyme Disease Prevention in Ontario</Link> | <Link href="/blog/lyme-disease-risk-areas-ontario-2026" className="text-brand-700 hover:underline">Lyme Disease Risk Areas 2026</Link></p>

        <h2>2. Anaplasmosis (<em>Anaplasma phagocytophilum</em>)</h2>
        <h3>An Emerging Concern in Ontario</h3>
        <p>Anaplasmosis (formerly known as human granulocytic anaplasmosis or HGA) is caused by the bacterium <em>Anaplasma phagocytophilum</em>. It is transmitted by the same blacklegged tick that carries Lyme disease, and Ontario has seen increasing detections of this pathogen in tick populations as the blacklegged tick range expands.</p>

        <h3>Transmission</h3>
        <ul>
          <li><strong>Vector:</strong> Blacklegged tick (<em>Ixodes scapularis</em>)</li>
          <li><strong>Attachment time required:</strong> As few as 12 to 24 hours — shorter than Lyme disease</li>
          <li><strong>Co-infection risk:</strong> Because the same tick species carries both Anaplasmosis and Lyme disease, co-infection from a single tick bite is possible and documented in Ontario</li>
        </ul>

        <h3>Symptoms</h3>
        <p>Symptoms typically appear 1 to 2 weeks after a tick bite and include:</p>
        <ul>
          <li>Fever and chills</li>
          <li>Severe headache</li>
          <li>Muscle aches (myalgia)</li>
          <li>Nausea, vomiting, diarrhea</li>
          <li>Confusion or cognitive difficulties (in severe cases)</li>
        </ul>
        <p>Anaplasmosis does not produce a rash, which distinguishes it from Lyme disease. Blood tests show characteristic drops in white blood cell count and platelet count.</p>

        <h3>Treatment</h3>
        <p>Doxycycline is the standard treatment and is highly effective when started early. Untreated Anaplasmosis can cause serious complications, particularly in immunocompromised individuals and the elderly.</p>

        <h2>3. Babesiosis (<em>Babesia microti</em>)</h2>
        <h3>A Parasitic Infection Emerging in Ontario</h3>
        <p>Babesiosis is caused by the parasite <em>Babesia microti</em>, which infects and destroys red blood cells. Like Lyme disease and Anaplasmosis, it is transmitted by the blacklegged tick. Babesiosis has been documented in Ontario tick populations, and human cases in the province are expected to increase as the tick range expands.</p>

        <h3>Transmission</h3>
        <ul>
          <li><strong>Vector:</strong> Blacklegged tick (<em>Ixodes scapularis</em>)</li>
          <li><strong>Attachment time required:</strong> Generally 36 to 54 hours — longer than Lyme disease, providing more time for tick removal to prevent transmission</li>
          <li><strong>Also transmissible through:</strong> Blood transfusion (this is why blood banks screen for Babesia in endemic areas)</li>
        </ul>

        <h3>Symptoms</h3>
        <p>Many people infected with Babesia have no symptoms. When symptoms occur, they include:</p>
        <ul>
          <li>High fever with sweats</li>
          <li>Chills and body aches</li>
          <li>Fatigue and malaise</li>
          <li>Hemolytic anemia (destruction of red blood cells) — can cause jaundice, dark urine</li>
          <li>Enlarged spleen</li>
        </ul>
        <p>Babesiosis can be severe or fatal in immunocompromised individuals, the elderly, or those without a spleen (asplenic patients).</p>

        <h3>Treatment</h3>
        <p>Mild Babesiosis is treated with atovaquone plus azithromycin. Severe cases require clindamycin plus quinine, and may require exchange blood transfusion in life-threatening situations.</p>

        <h2>4. Powassan Virus</h2>
        <h3>The Most Dangerous — But Rarest — Tick-Borne Disease in Ontario</h3>
        <p>Powassan virus (POW) is the only tick-borne virus (as opposed to bacteria or parasite) currently documented in Ontario. It was first identified in 1958 in a young boy in Powassan, Ontario, and causes the most severe outcomes of any tick-borne disease in the province.</p>

        <h3>Transmission</h3>
        <ul>
          <li><strong>Vector:</strong> Blacklegged tick (<em>Ixodes scapularis</em>) — specifically the deer tick lineage (lineage II, sometimes called &quot;deer tick virus&quot;)</li>
          <li><strong>Attachment time required:</strong> As few as 15 minutes — dramatically shorter than any other tick-borne pathogen. This means prompt tick removal may not prevent transmission</li>
          <li><strong>Incidence:</strong> Rare — typically fewer than 5 confirmed cases per year across Ontario — but case numbers have been increasing</li>
        </ul>

        <h3>Symptoms</h3>
        <p>Most Powassan virus infections produce mild or no symptoms. However, when neurological illness develops, it can be devastating:</p>
        <ul>
          <li>High fever, severe headache</li>
          <li>Vomiting</li>
          <li>Confusion, disorientation</li>
          <li>Seizures</li>
          <li>Encephalitis (brain inflammation) — occurs in approximately 10% of symptomatic cases</li>
          <li>Meningitis</li>
        </ul>
        <p>The case fatality rate for Powassan virus neurological disease is approximately 10-15%, and about half of survivors have permanent neurological effects.</p>

        <h3>Treatment</h3>
        <p>There is no specific antiviral treatment for Powassan virus. Care is supportive — hospitalization, IV fluids, anti-inflammatory medications, and respiratory support as needed. There is no vaccine.</p>

        <h2>5. Borrelia miyamotoi Disease (Tick-Borne Relapsing Fever)</h2>
        <h3>A Newly Recognized Infection</h3>
        <p><em>Borrelia miyamotoi</em> is a relapsing fever spirochete carried by blacklegged ticks. It was first confirmed as a human pathogen in 2011 and has since been detected in Ontario tick populations. Unlike <em>Borrelia burgdorferi</em> (Lyme disease), <em>B. miyamotoi</em> can be transmitted by larval ticks and may require shorter attachment times.</p>

        <h3>Symptoms</h3>
        <ul>
          <li>Recurrent episodes of high fever (relapsing pattern)</li>
          <li>Headache, body aches, fatigue</li>
          <li>Nausea</li>
          <li>No rash (unlike Lyme disease)</li>
        </ul>

        <h3>Treatment</h3>
        <p>Doxycycline or amoxicillin, similar to Lyme disease treatment. Diagnosis can be challenging because standard Lyme disease blood tests do not detect <em>B. miyamotoi</em>.</p>

        <h2>Other Tick Species and Associated Diseases in Ontario</h2>
        <p>While the blacklegged tick is the primary disease vector in Ontario, other tick species are present and can cause health issues:</p>
        <ul>
          <li><strong>American dog tick (<em>Dermacentor variabilis</em>):</strong> Can transmit Rocky Mountain Spotted Fever (RMSF) and tularemia, though these are extremely rare in Ontario. This is the most commonly encountered tick species across the province</li>
          <li><strong>Lone star tick (<em>Amblyomma americanum</em>):</strong> Occasionally found in Southern Ontario, likely transported by migratory birds. Associated with alpha-gal syndrome (red meat allergy), ehrlichiosis, and Southern Tick-Associated Rash Illness (STARI). Not yet considered established in Ontario</li>
          <li><strong>Groundhog tick (<em>Ixodes cookei</em>):</strong> Can transmit Powassan virus (lineage I). Found primarily on groundhogs but occasionally bites humans</li>
        </ul>

        <h2>Protection Against All Tick-Borne Diseases</h2>
        <p>The best defence against the full spectrum of tick-borne diseases is preventing tick bites in the first place. A layered approach provides the most effective protection:</p>
        <ul>
          <li><strong>Professional tick yard treatment:</strong> <Link href="/tick-control" className="text-brand-700 hover:underline">Barrier spray</Link> reduces tick populations by up to 90% across all species and all pathogens they carry</li>
          <li><strong>Habitat modification:</strong> Remove leaf litter, keep lawns short, create gravel barriers at wood edges</li>
          <li><strong>Personal protection:</strong> DEET repellent, light-coloured clothing, tucked pants</li>
          <li><strong>Tick checks:</strong> Full-body checks within 2 hours of outdoor activity — especially critical for Powassan virus, which can transmit in under 15 minutes</li>
          <li><strong>Prompt removal:</strong> <Link href="/blog/how-to-remove-tick-safely" className="text-brand-700 hover:underline">Remove ticks</Link> with fine-tipped tweezers as soon as they are found — every hour counts</li>
        </ul>

        <h2>Frequently Asked Questions</h2>
        <div className="not-prose space-y-3 my-6">
          {FAQS.map(({ question, answer }) => (
            <details key={question} className="bg-brand-50 rounded-xl border border-brand-100 group">
              <summary className="cursor-pointer px-5 py-4 font-semibold text-brand-900 list-none flex justify-between items-center">
                <span>{question}</span>
                <svg className="w-5 h-5 shrink-0 group-open:rotate-180 transition-transform text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <p className="px-5 pb-4 text-gray-600 text-sm">{answer}</p>
            </details>
          ))}
        </div>

        <h2>Related Guides</h2>
        <ul>
          <li><Link href={`/blog/${TICK_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{TICK_BLOGS.pillar.title}</Link></li>
          <li><Link href="/blog/lyme-disease-tick-prevention-ontario" className="text-brand-700 hover:underline">Lyme Disease Prevention in Ontario</Link></li>
          <li><Link href="/blog/lyme-disease-risk-areas-ontario-2026" className="text-brand-700 hover:underline">Lyme Disease Risk Areas Ontario 2026</Link></li>
          <li><Link href="/blog/are-ticks-dangerous-ontario" className="text-brand-700 hover:underline">Are Ticks Dangerous in Ontario?</Link></li>
          <li><Link href="/blog/tick-bite-symptoms-what-to-do-ontario" className="text-brand-700 hover:underline">Tick Bite Symptoms & What to Do in Ontario</Link></li>
          <li><Link href="/blog/what-ticks-look-like-ontario" className="text-brand-700 hover:underline">How to Identify Ticks in Ontario</Link></li>
          <li><Link href="/tick-control" className="text-brand-700 hover:underline">BuzzSkito Tick Control Services</Link></li>
        </ul>
      </article>

      <CTASection heading="Protect Your Family From Every Tick-Borne Disease" subtext="Professional tick barrier spray reduces exposure to Lyme disease, Anaplasmosis, Babesiosis, and Powassan virus. Free quote for all GTA properties." variant="dark" />
    </>
  )
}
