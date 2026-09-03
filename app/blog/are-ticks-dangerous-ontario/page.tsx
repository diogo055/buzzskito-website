import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import BuyLink from '@/components/BuyLink'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import AuthorByline from '@/components/AuthorByline'
import FreshnessStamp from '@/components/FreshnessStamp'
import TopPick from '@/components/TopPick'
import StickyBuyBar from '@/components/StickyBuyBar'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { TICK_BLOGS } from '@/lib/constants'
import { tagForSlug } from '@/lib/amazon-clusters'

const POST = {
  title: 'Are Ticks Dangerous in Ontario?',
  slug: 'are-ticks-dangerous-ontario',
  date: '2026-04-10',
  excerpt: 'Are ticks dangerous in Ontario? Yes — and the risk is growing. This guide covers which ticks carry disease, how common tick-borne illness is in the GTA, and what homeowners can do to protect their families.',
}

const UPDATED = POST.date

export const metadata: Metadata = buildMetadata({
  title: 'Worst Areas for Ticks in Ontario + GTA Lyme Risk',
  description:
    'Where ticks are worst in Ontario: ravine edges, conservation lands, escarpment woodlots. In risk areas 20–40% of adult blacklegged ticks carry Lyme.',
  canonical: `/blog/${POST.slug}`,
  type: 'article',
  publishedTime: POST.date,
})

const FAQS = [
  {
    question: 'What are the worst areas for ticks in Ontario?',
    answer:
      'The worst tick areas are habitat types rather than particular towns: ravine slopes and valley trails, conservation-area and greenbelt boundaries, Niagara Escarpment and Oak Ridges Moraine woodlots, and any lot line where mowed lawn meets tall grass, brush, or leaf litter. Public Health Ontario publishes an estimated Lyme disease risk-area map each year, and blacklegged ticks have been documented in every GTA municipality — so the practical question is not which city you live in but whether your property touches naturalized ground. Within a yard, the highest-risk band is the first few metres of the lawn-to-wild transition edge.',
  },
  {
    question: 'Are all ticks in Ontario dangerous?',
    answer:
      'Not all Ontario tick species carry the same risk. The blacklegged tick (Ixodes scapularis) is the most dangerous because it transmits Lyme disease, Anaplasmosis, Babesiosis, and Powassan virus. The American dog tick — the most commonly encountered species — can transmit Rocky Mountain Spotted Fever and tularemia, but these are extremely rare in Ontario. Regardless of species, any tick bite should be taken seriously: remove the tick promptly, save it for identification if possible, and monitor for symptoms.',
  },
  {
    question: 'How likely am I to get Lyme disease from a tick bite in Ontario?',
    answer:
      'Not every blacklegged tick carries Lyme disease — infection rates vary by location and year, but in established risk areas of Southern Ontario, roughly 20-40% of adult blacklegged ticks test positive for Borrelia burgdorferi. However, transmission generally requires 24-36 hours of attachment. If you find and remove a tick within 24 hours of attachment, your risk of Lyme disease transmission is very low. This is why tick checks and prompt removal are so important.',
  },
  {
    question: 'Can my dog or cat get sick from ticks in Ontario?',
    answer:
      'Yes. Dogs can contract Lyme disease, Anaplasmosis, and Ehrlichiosis from tick bites in Ontario. Cats are less commonly affected but can also be bitten by ticks. Dogs that spend time in wooded or grassy areas should be on veterinarian-prescribed tick prevention medication year-round (or at minimum from March through November). Professional yard treatment further reduces the tick population your pets encounter on your property.',
  },
  {
    question: 'Are ticks dangerous to children?',
    answer:
      'Children are at elevated risk for tick bites because they play in grass, gardens, and wooded areas where ticks are most active. Tick-borne diseases like Lyme disease affect children the same as adults. The key difference is that children are less likely to notice a tick on their body and less likely to report a bite. Parents should do thorough tick checks after any outdoor play, paying special attention to the scalp, behind ears, armpits, waistline, and behind knees.',
  },
  {
    question: 'When are ticks most dangerous in Ontario?',
    answer:
      'Ticks are most dangerous during two peak windows in Ontario. The first is May through July, when nymph-stage blacklegged ticks emerge — nymphs are tiny (poppy-seed sized), difficult to detect, and responsible for the majority of human Lyme disease cases. The second peak is September through November, when adult blacklegged ticks are most active. However, blacklegged ticks can be active on any day when temperatures exceed 4°C, including mid-winter warm spells.',
  },
  {
    question: 'What percentage of ticks carry Lyme disease in southern Ontario?',
    answer:
      'In established Lyme risk areas of southern Ontario, roughly 20–40% of adult blacklegged ticks (Ixodes scapularis) carry Borrelia burgdorferi, the bacterium that causes Lyme disease, according to Public Health Ontario surveillance. The rate varies by location and year. Importantly, only blacklegged ticks transmit Lyme — the more commonly seen American dog tick does not. Even in high-carriage areas, prompt removal within 24 hours makes transmission unlikely. For any bite, consult a healthcare provider.',
  },
  {
    question: 'How many Lyme disease cases are there in Ontario each year?',
    answer:
      'Ontario now reports over a thousand confirmed and probable Lyme disease cases in a typical recent year, and the count has climbed steadily as blacklegged ticks spread across the province, per Public Health Ontario reportable-disease data. Exact totals vary year to year and lag behind actual infections, since many cases go unreported. For current figures, see Public Health Ontario, and see a healthcare provider if you develop symptoms after a tick bite.',
  },
  {
    question: 'How many people get Lyme disease each year in Canada?',
    answer:
      'Canada reported 5,809 confirmed and probable Lyme disease cases in 2024 — the most recent year published — up from fewer than 150 a decade earlier, according to the Public Health Agency of Canada (PHAC). That is a national incidence of 14.1 per 100,000, up from 11.9 in 2023. Cases have risen sharply as warming winters expand blacklegged tick range. Because milder infections often go undiagnosed, the true number is believed to be higher. PHAC publishes annual surveillance updates; consult a healthcare provider if you suspect a tick-borne illness.',
  },
  {
    question: 'How common is Lyme disease in Ontario?',
    answer:
      'Lyme disease is now well established across southern Ontario and increasingly common, with the GTA firmly inside the risk zone. Public Health Ontario has documented blacklegged ticks in every GTA municipality, and confirmed case counts have risen year over year. It remains far less common than everyday illnesses, and it is highly preventable with tick checks, prompt removal, and yard treatment. If symptoms like a bull\'s-eye rash or fever appear, see a healthcare provider.',
  },
]

const AMZ_TAG = tagForSlug('are-ticks-dangerous-ontario')

export default function AreTicksDangerousPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: POST.title, description: POST.excerpt, slug: POST.slug, datePublished: POST.date })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Are Ticks Dangerous Ontario', url: `/blog/${POST.slug}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${POST.slug}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-amber-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Are Ticks Dangerous Ontario</span>
          </nav>
          <span className="bg-brand-800 text-brand-200 text-xs px-3 py-1 rounded-full mb-4 inline-block">Tick Control</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight">{POST.title}</h1>
          <p className="text-brand-300 text-sm">Published {new Date(POST.date).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })} · By BuzzSkito</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12 prose-brand">
        <AuthorByline datePublished={POST.date} dateModified={UPDATED} />
        <div className="not-prose bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
          <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
          <p className="text-gray-800 text-[15px] leading-relaxed font-medium">Yes &mdash; ticks are dangerous in Ontario. The blacklegged tick (<em>Ixodes scapularis</em>), now established across the GTA, can transmit Lyme disease, Anaplasmosis, Babesiosis, and Powassan virus. Remove any attached tick within 24 hours using fine-tipped tweezers or a tick-removal tool, save it for identification, and monitor for symptoms.</p>
          <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
            <li>Canada reported 5,809 confirmed and probable Lyme disease cases in 2024 &mdash; the newest year published &mdash; up from fewer than 150 a decade earlier, per the Public Health Agency of Canada.</li>
            <li>Ontario accounted for 2,369 of those cases in 2024, about 41% of the national total and up 27% over 2023 (PHAC).</li>
            <li>Public Health Ontario has documented blacklegged ticks in every GTA municipality.</li>
            <li>Powassan virus is rare but can transmit in as little as 15 minutes after a tick attaches.</li>
            <li>Removing an attached tick within 24 hours sharply lowers the risk of Lyme transmission.</li>
            <li>The American dog tick is the most commonly encountered tick in Ontario but rarely transmits disease here.</li>
          </ul>
          <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito, GTA mosquito &amp; tick control &middot; 150+ five-star Google reviews</p>
        </div>
        <p className="text-lg text-gray-600 not-prose border-l-4 border-amber-400 pl-5 py-2 mb-8">
          <strong>Medical disclaimer:</strong> This article provides general public health information about tick risks in Ontario. Always consult a licensed healthcare provider for medical advice. Part of our <Link href={`/blog/${TICK_BLOGS.pillar.slug}`} className="text-brand-700 underline">Ultimate Tick Control Guide for Ontario Homeowners</Link>.
        </p>

        <h2>The Short Answer: Yes, Ticks Are Dangerous in Ontario</h2>
        <p>Ticks in Ontario are not just a nuisance — they are a legitimate health risk. The blacklegged tick (<em>Ixodes scapularis</em>), now established across virtually all of Southern Ontario, can transmit Lyme disease, Anaplasmosis, Babesiosis, and Powassan virus. The number of confirmed Lyme disease cases in Canada has increased more than tenfold over the past decade, and the geographic range of disease-carrying ticks continues to expand northward every year.</p>
        <p>For GTA homeowners, the days of dismissing ticks as a &quot;cottage country problem&quot; are over. The worst areas for ticks in Ontario are not remote &mdash; they are <strong>edge habitats</strong>: ravine slopes, conservation-land trails, escarpment woodlots, and any lot line where mowed grass meets naturalized growth. Toronto ravines, Mississauga conservation areas, Hamilton escarpment trails, and suburban backyards across the region now harbour established blacklegged tick populations.</p>
        <p>That same logic picks out the highest-risk addresses in our service area. Properties pressed against the Niagara Escarpment and the greenbelt corridors are the reason <Link href="/burlington-tick-spray" className="text-brand-700 hover:underline">tick spray in Burlington</Link> concentrates on those boundary edges, and the Oak Ridges Moraine and Credit River headwaters running through Caledon are why <Link href="/caledon-tick-spray" className="text-brand-700 hover:underline">Caledon tick control</Link> targets woodlot margins and fence rows rather than open lawn.</p>

        <h2>Which Ticks in Ontario Are Dangerous?</h2>
        <p>Ontario is home to several tick species, but they carry very different levels of risk:</p>

        <h3>Blacklegged Tick (<em>Ixodes scapularis</em>) — Highest Risk</h3>
        <p>The blacklegged tick (also called the deer tick) is the most medically significant tick in Ontario. It carries:</p>
        <ul>
          <li><strong>Lyme disease</strong> (<em>Borrelia burgdorferi</em>) — the most common tick-borne disease in Ontario</li>
          <li><strong>Anaplasmosis</strong> — an emerging bacterial infection that can cause severe flu-like symptoms</li>
          <li><strong>Babesiosis</strong> — a parasitic infection that destroys red blood cells</li>
          <li><strong>Powassan virus</strong> — rare but potentially fatal, can transmit in as little as 15 minutes</li>
          <li><strong><em>Borrelia miyamotoi</em></strong> — tick-borne relapsing fever</li>
        </ul>
        <p>See: <Link href="/blog/tick-borne-diseases-ontario-complete-list" className="text-brand-700 hover:underline">Complete List of Tick-Borne Diseases in Ontario</Link></p>

        <h3>American Dog Tick (<em>Dermacentor variabilis</em>) — Lower Risk</h3>
        <p>The American dog tick is the most commonly encountered tick species in Ontario. It is larger and more visible than the blacklegged tick. While it can theoretically transmit Rocky Mountain Spotted Fever and tularemia, these diseases are extremely rare in Ontario. The primary concern with dog ticks is nuisance biting and the potential for allergic reactions at the bite site.</p>

        <h3>Lone Star Tick (<em>Amblyomma americanum</em>) — Emerging</h3>
        <p>The lone star tick is occasionally found in Southern Ontario, likely transported by migratory birds from the eastern United States. It is associated with alpha-gal syndrome (a red meat allergy triggered by tick saliva), ehrlichiosis, and STARI. The lone star tick is not yet considered established in Ontario, but detections are increasing.</p>
        <p>See: <Link href="/blog/what-ticks-look-like-ontario" className="text-brand-700 hover:underline">How to Identify Ticks in Ontario</Link></p>

        <h2>How Common Is Tick-Borne Disease in the GTA?</h2>
        <p>Lyme disease is a reportable disease in Ontario, meaning every confirmed case must be reported to public health authorities. The numbers tell a clear story of escalating risk:</p>
        <ul>
          <li>Confirmed Lyme disease cases in Canada have risen from fewer than 150 per year a decade ago to well over 2,000 per year — Ontario accounts for a significant share</li>
          <li>Blacklegged ticks have been confirmed through active surveillance in every GTA municipality</li>
          <li>Infection rates in blacklegged tick populations in established Southern Ontario risk areas range from approximately 20% to 40%</li>
          <li>Cases of Anaplasmosis and Babesiosis, while still uncommon, are being detected with increasing frequency</li>
        </ul>
        <p>The risk is not theoretical — people in the GTA are contracting Lyme disease from tick bites acquired in their own backyards, local parks, and neighbourhood trails.</p>
        <p className="text-sm text-gray-500">Sources: <a href="https://www.canada.ca/en/public-health/services/diseases/lyme-disease.html" target="_blank" rel="noopener" className="text-brand-700 hover:underline">Government of Canada — Lyme disease</a> and <a href="https://www.publichealthontario.ca/" target="_blank" rel="noopener" className="text-brand-700 hover:underline">Public Health Ontario</a>.</p>

        <aside aria-label="Professional tick control" className="not-prose my-8 rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-white p-6 sm:p-7 shadow-sm">
          <h3 className="text-xl sm:text-2xl font-extrabold text-brand-900 mb-2 leading-tight">Skip the tick worry entirely</h3>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">Professional tick barrier treatment targets the zones where ticks actually wait — garden edges, fence lines, and shaded borders. BuzzSkito protects GTA yards with seasonal programs and single treatments from $99.</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/tick-control" className="btn-primary-sm">Explore Tick Control →</Link>
            <a href="tel:+12892165030" className="font-bold text-brand-800 hover:text-brand-600 transition-colors">(289) 216-5030</a>
          </div>
        </aside>

        <h2>Why the Risk Is Growing</h2>
        <p>Several converging factors are making ticks more dangerous in Ontario with each passing year:</p>
        <ul>
          <li><strong>Climate change:</strong> Warmer winters allow blacklegged ticks to survive and reproduce further north. Ticks that could not overwinter in central Ontario a decade ago now thrive year-round across the GTA</li>
          <li><strong>Geographic expansion:</strong> The blacklegged tick range expands approximately 35-55 km northward per decade, driven by warming temperatures and bird-mediated dispersal</li>
          <li><strong>Suburban encroachment:</strong> New housing developments at the urban-rural interface bring humans into direct contact with tick habitat</li>
          <li><strong>Deer population growth:</strong> White-tailed deer — the primary host for adult blacklegged ticks — have thrived in suburban environments across Southern Ontario</li>
          <li><strong>Longer active season:</strong> Blacklegged ticks are active on any day above 4°C, and Ontario is experiencing more warm days earlier in spring and later into fall</li>
        </ul>

        <h2>Ticks in Your Own Backyard</h2>
        <p>One of the most important things GTA homeowners need to understand is that tick exposure does not require a hike in a provincial park. Ticks live in:</p>
        <ul>
          <li>Leaf litter along fence lines and garden borders</li>
          <li>Tall grass and unmowed field edges</li>
          <li>Shaded areas under shrubs and low branches</li>
          <li>Stone walls, wood piles, and garden beds</li>
          <li>The transition zone between lawn and wooded or naturalized areas</li>
        </ul>
        <p>Any GTA property that borders a ravine, conservation area, woodlot, or naturalized landscape has potential tick habitat within the property boundary. Even properties without direct woodland borders can have ticks introduced by deer, rodents, or birds passing through the yard. That is as true in the ravine-laced inner suburbs — the Don and West Don valleys thread through residential streets, which is why <Link href="/north-york-tick-spray" className="text-brand-700 hover:underline">North York tick spray</Link> targets the ravine-facing edge of a lot — as it is on a rural acreage.</p>

        <h2>How to Protect Your Family</h2>

        <h3>Professional Tick Treatment</h3>
        <p><Link href="/tick-control" className="text-brand-700 hover:underline">Professional tick barrier spray</Link> is the most effective way to reduce tick populations on your property. Treatment puts a Health Canada-registered residual acaricide on the high-risk perimeter zones — garden edges, fence lines, shaded vegetation, stone walls, and the lawn-to-woods transition — because that is where ticks quest, not the middle of the lawn. It lowers the number of ticks in those zones rather than clearing the property, so it is paired with tick checks. The BuzzSkito tick program is 5 sprays across the May-to-September season — spaced so the questing zones are re-treated as spring nymphs give way to fall adults — at $597 standalone, or $497 when added to any mosquito plan.</p>
        <p>Homeowners who apply their own registered product are aiming at that same narrow band, and it is the shape of the target that decides the equipment. The zone is a low, shaded, roughly one-metre strip of leaf litter, fence line and stone wall that can run the entire boundary of the lot, and it has to be wetted evenly down at ground level rather than misted from standing height. A one-litre trigger bottle holds neither the pressure nor the volume to cover that distance, which is why perimeter work is done with a <Link href="/blog/backpack-sprayer-canada" className="text-brand-700 hover:underline">backpack sprayer</Link>.</p>

        <h3>Yard Modifications</h3>
        <ul>
          <li>Remove leaf litter — the most critical overwintering habitat for ticks</li>
          <li>Mow your lawn regularly (under 3 inches)</li>
          <li>Create a 1-metre gravel or wood chip barrier between your lawn and any wooded border</li>
          <li>Stack firewood in dry, sunny locations away from the house</li>
          <li>Clear brush and overgrown vegetation along fence lines</li>
        </ul>

        <h3>Personal Protection</h3>
        <ul>
          <li>Wear light-coloured clothing when walking in wooded or grassy areas</li>
          <li>Apply DEET (20-30%) or icaridin repellent to exposed skin</li>
          <li>Tuck pants into socks in tick-prone areas</li>
          <li>Do full-body tick checks within 2 hours of outdoor activity</li>
          <li>Shower promptly after being outdoors</li>
        </ul>

        <h3>Know What to Do After a Tick Bite</h3>
        <p>If you find a tick attached to your skin:</p>
        <ul>
          <li>Remove it immediately with fine-tipped tweezers — grasp as close to the skin as possible and pull straight up with steady pressure</li>
          <li>Clean the bite area with rubbing alcohol or soap and water</li>
          <li>Save the tick (in a sealed bag or container) for identification</li>
          <li>Note the date and location of the bite</li>
          <li>Monitor for symptoms for 30 days — especially a bull&apos;s-eye rash, fever, or joint pain</li>
          <li>Consult your doctor if any symptoms develop</li>
        </ul>
        <p>See: <Link href="/blog/how-to-remove-tick-safely" className="text-brand-700 hover:underline">How to Remove a Tick Safely</Link> | <Link href="/blog/tick-bite-symptoms-what-to-do-ontario" className="text-brand-700 hover:underline">Tick Bite Symptoms &amp; What to Do</Link> | <Link href="/blog/tick-removal-tool-guide" className="text-brand-700 hover:underline">Best Tick-Removal Tools Compared</Link></p>
        <AffiliateDisclosure />
        <p className="not-prose text-gray-700">A dedicated tick-removal tool grips the head close to the skin more reliably than household tweezers, reducing the chance of leaving mouthparts behind. See how the options compare in our <Link href="/blog/tick-removal-tool-guide" className="text-brand-700 underline">tick-removal tool guide</Link>, or <BuyLink tag={AMZ_TAG} search="tick removal tool tweezers">check tick-removal tools on Amazon.ca →</BuyLink></p>
        <TopPick tag={AMZ_TAG}
          label="Our Top Pick — Tick Removal"
          name="Tick-Removal Tool Kit (fine-tip tweezers + tick key)"
          blurb="If you only keep one thing on hand for tick season, make it a dedicated remover. A fine-tipped tool grips right at the skin and lifts the tick straight out — head and all — so you are far less likely to leave mouthparts behind or squeeze the tick's gut contents into the bite. Cheap enough to keep one in the car, one in the hiking bag, and one by the back door."
          search="tick removal tool tweezers"
          score={8.7}
          pros={['Grips the head close to the skin, whole-tick removal', 'Pocket-sized — keep several around the house and car', 'Far safer than fingernails or blunt tweezers']}
          cons={['Small enough to misplace', 'Still requires a careful, steady straight pull']}
        />

        <h2>Protecting Pets</h2>
        <p>Dogs are highly susceptible to tick bites and can contract Lyme disease, Anaplasmosis, and Ehrlichiosis. Every GTA dog that spends time outdoors should be on year-round tick prevention medication prescribed by a veterinarian. Professional yard treatment provides an additional layer of protection by reducing the tick population your pets encounter in their own yard.</p>
        <p>Cats can also be bitten by ticks but are less commonly affected by tick-borne diseases. Consult your veterinarian about feline tick prevention options if your cat goes outdoors.</p>

        <h2>The Bottom Line</h2>
        <p>Ticks are dangerous in Ontario — and the risk is not decreasing. The geographic range of disease-carrying blacklegged ticks expands every year, infection rates in tick populations are significant, and Lyme disease cases continue to climb. The GTA is firmly within the established risk zone.</p>
        <p>The good news is that tick-borne disease is highly preventable through a combination of professional yard treatment, habitat modification, personal protection, and prompt tick removal. The key is taking the risk seriously and acting before tick season peaks.</p>

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
          <li><Link href="/blog/tick-borne-diseases-ontario-complete-list" className="text-brand-700 hover:underline">Every Tick-Borne Disease in Ontario</Link></li>
          <li><Link href="/blog/lyme-disease-risk-areas-ontario-2026" className="text-brand-700 hover:underline">Lyme Disease Risk Areas Ontario 2026</Link></li>
          <li><Link href="/blog/spring-tick-season-ontario" className="text-brand-700 hover:underline">Spring Tick Season Ontario</Link></li>
          <li><Link href="/blog/how-much-does-tick-treatment-cost-ontario" className="text-brand-700 hover:underline">How Much Does Tick Treatment Cost?</Link></li>
          <li><Link href="/tick-control" className="text-brand-700 hover:underline">BuzzSkito Tick Control Services</Link></li>
        </ul>
      </article>

      <StickyBuyBar tag={AMZ_TAG} name="Tick-removal tool kit" search="tick removal tool tweezers" label="For removal" />

      <CTASection heading="Don't Wait Until Someone Gets Bitten" subtext="Professional tick barrier spray targets the shaded edges and leaf litter where ticks wait. Free quote for all GTA properties." variant="dark" />
    </>
  )
}
