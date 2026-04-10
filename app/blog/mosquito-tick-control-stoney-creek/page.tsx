import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { NEW_BLOGS_3, MOSQUITO_BLOGS, TICK_BLOGS } from '@/lib/constants'

const POST = NEW_BLOGS_3[2]

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito & Tick Control Stoney Creek | BuzzSkito',
  description:
    "Stoney Creek's Red Hill Creek corridor, lakeshore fringe, and Escarpment ravines create year-round mosquito and tick pressure. Professional barrier spray for Stoney Creek homeowners.",
  canonical: `/blog/${POST.slug}`,
  type: 'article',
  publishedTime: POST.date,
})

const FAQS = [
  {
    question: 'Does BuzzSkito serve Stoney Creek?',
    answer:
      'Yes. BuzzSkito provides professional mosquito and tick barrier spray services across Stoney Creek, including Heritage Green, Winona, Fruitland, Battlefield, and all residential neighbourhoods throughout the community. Call (289) 216-5030 for a free quote.',
  },
  {
    question: 'Are ticks a problem in Stoney Creek?',
    answer:
      "Yes. Stoney Creek's proximity to the Niagara Escarpment, Fifty Point Conservation Area, and the Stoney Creek ravine system puts many properties at real tick risk. Hamilton Conservation Authority surveillance has confirmed blacklegged tick populations along Escarpment trails and conservation lands bordering residential areas in Stoney Creek.",
  },
  {
    question: 'Why are mosquitoes worse near the Red Hill Creek in Stoney Creek?',
    answer:
      "Red Hill Creek and its tributaries create a continuous band of shaded, moist vegetation ideal for mosquito breeding and resting. Properties within 500 metres of the creek corridor — especially those with low-lying lots, mature trees, or fence lines backing onto the ravine — experience significantly higher mosquito pressure than properties further from the waterway.",
  },
  {
    question: 'When is the best time to start mosquito treatment in Stoney Creek?',
    answer:
      'Early May is the ideal start. Stoney Creek\'s Lake Ontario moderating influence means spring temperatures warm relatively early compared to inland GTA areas — mosquito activity often begins building in late April. Starting barrier spray in the first week of May catches populations before they reach peak levels in June and July.',
  },
  {
    question: 'Do I need mosquito AND tick control, or just one?',
    answer:
      "For Stoney Creek properties near conservation lands, ravines, or the Escarpment, we recommend combined mosquito and tick treatment. Properties in newer subdivisions away from natural corridors may only need mosquito control. When in doubt, call us — we'll assess your specific property and recommend the right approach.",
  },
]

export default function StoneyCeekMosquitoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            blogPostingSchema({
              title: POST.title,
              description: POST.excerpt,
              slug: POST.slug,
              datePublished: POST.date,
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Blog', url: '/blog' },
              { name: 'Mosquito & Tick Control Stoney Creek', url: `/blog/${POST.slug}` },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }}
      />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Mosquito & Tick Control Stoney Creek</span>
          </nav>
          <span className="bg-brand-800 text-brand-200 text-xs px-3 py-1 rounded-full mb-4 inline-block">Mosquito & Tick Control</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">{POST.title}</h1>
          <p className="text-brand-300 text-sm">
            Published {new Date(POST.date).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })} · By BuzzSkito
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12 prose-brand">
        <p className="text-lg text-gray-600 not-prose border-l-4 border-brand-400 pl-5 py-2 mb-8">
          Stoney Creek sits at the intersection of three distinct pest pressure zones: the Red Hill Creek and Lake Ontario lakeshore to the north, the Niagara Escarpment rising to the south, and a growing patchwork of newer subdivisions and mature residential neighbourhoods in between. Understanding which zone you live in determines how urgently you need professional mosquito and tick control.
        </p>

        <h2>Stoney Creek&apos;s Geography: Why Pest Pressure Is High</h2>
        <p>Stoney Creek is not a uniform community — it spans from the Lake Ontario waterfront in the north to the steep forested face of the Niagara Escarpment in the south. That geographic range means pest pressure varies significantly by neighbourhood, but it also means there are very few residential areas that are entirely free of mosquito or tick risk.</p>

        <h3>The Lake Ontario Waterfront and Lakeshore Fringe</h3>
        <p>The waterfront strip — running through Fifty Point, Winona, and the eastern lakeshore communities — faces mosquito pressure from both the lake shoreline wetland margin and the warm, humid air that settles over lakefront properties on summer evenings. Lake-effect humidity keeps lakeshore vegetation moist and provides ideal resting conditions for adult mosquitoes from May through September.</p>
        <p>Fifty Point Conservation Area, located directly on the Stoney Creek waterfront, is a documented blacklegged tick habitat. The Hamilton Conservation Authority has confirmed tick activity in its managed lands, and properties adjacent to the park boundary face genuine tick exposure risk throughout the spring and fall peak seasons.</p>

        <h3>Red Hill Creek and its Ravine Corridor</h3>
        <p>The Red Hill Valley is one of Hamilton&apos;s most significant mosquito corridors, and Stoney Creek sits directly at its southern extent. The creek and its tributaries — including Battlefield Creek and Green Mountain Creek — cut through the lower portions of Stoney Creek, creating shaded, moist ravine habitat that serves as a continuous mosquito breeding and resting zone throughout the season.</p>
        <p>Properties in Heritage Green, Battlefield, and the older residential neighbourhoods adjacent to the Red Hill Valley experience the most intense mosquito pressure in Stoney Creek. Homeowners backing directly onto the ravine or creek corridor routinely report that their yards become unusable in the evenings by mid-June without professional treatment.</p>

        <h3>The Niagara Escarpment Edge</h3>
        <p>The Escarpment face rises sharply at the south end of Stoney Creek, and the forested properties along this edge — including communities on and around the &ldquo;mountain brow&rdquo; — face a distinct combination of challenges: shade and moisture from the forested slope create persistent mosquito resting habitat, while the thick leaf litter, forested edges, and proximity to Escarpment trail systems create the exact conditions blacklegged ticks require to establish and sustain populations.</p>
        <p>The Bruce Trail and Devil&apos;s Punch Bowl Conservation Area both run through this zone, and Hamilton Conservation Authority tick surveillance has confirmed blacklegged tick activity at multiple points along the Stoney Creek Escarpment. If your backyard backs onto the escarpment forest or trail system, professional tick treatment is not optional — it&apos;s essential.</p>

        <h2>Stoney Creek Neighbourhoods: Mosquito and Tick Risk by Area</h2>
        <div className="not-prose overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-brand-800 text-white">
                <th className="px-4 py-2 text-left">Neighbourhood</th>
                <th className="px-4 py-2 text-left">Mosquito Risk</th>
                <th className="px-4 py-2 text-left">Tick Risk</th>
                <th className="px-4 py-2 text-left">Primary Driver</th>
              </tr>
            </thead>
            <tbody>
              {[
                { n: 'Battlefield / Heritage Green', mosquito: 'High', tick: 'Moderate', driver: 'Red Hill Creek ravine' },
                { n: 'Winona / Fifty Point', mosquito: 'High', tick: 'High', driver: 'Lakeshore + Conservation Area' },
                { n: 'Escarpment brow (upper)', mosquito: 'Moderate', tick: 'High', driver: 'Escarpment trails, forested edges' },
                { n: 'Fruitland / Lakeshore Rd area', mosquito: 'High', tick: 'Moderate', driver: 'Lakeshore humidity, mature tree canopy' },
                { n: 'Central Stoney Creek', mosquito: 'Moderate', tick: 'Low–Moderate', driver: 'Residential ponding, low-lying lots' },
                { n: 'New-build subdivisions (east)', mosquito: 'Moderate', tick: 'Low', driver: 'Construction drainage, young plantings' },
              ].map(({ n, mosquito, tick, driver }) => (
                <tr key={n} className="border-b border-gray-200 even:bg-gray-50">
                  <td className="px-4 py-2 font-medium text-gray-800">{n}</td>
                  <td className="px-4 py-2 font-semibold text-brand-700">{mosquito}</td>
                  <td className="px-4 py-2 font-semibold text-amber-700">{tick}</td>
                  <td className="px-4 py-2 text-gray-600 text-xs">{driver}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>What Professional Mosquito and Tick Control Does for Stoney Creek Properties</h2>
        <p>Barrier spray for mosquitoes targets the foliage, fence lines, shaded vegetation, and perimeter plantings where adult mosquitoes rest during the day. The formula bonds to leaf surfaces and provides 21–30 days of residual protection per application. For a standard Stoney Creek residential property, five treatments from May through September maintain consistent coverage through the entire active season.</p>
        <p>Tick control uses a targeted perimeter application — focused on the leaf litter zone, grass-to-garden border, and vegetation edges where blacklegged ticks wait for passing hosts. The treatment specifically targets the 1–2 metre &ldquo;interface zone&rdquo; between maintained lawn and natural vegetation, which is where the overwhelming majority of tick encounters occur. Two treatments per season — timed to nymph activity in spring and adult activity in fall — provide the most effective coverage.</p>

        <h2>Recommended Treatment Schedule for Stoney Creek</h2>
        <div className="not-prose overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-brand-800 text-white">
                <th className="px-4 py-2 text-left">Treatment</th>
                <th className="px-4 py-2 text-left">Timing</th>
                <th className="px-4 py-2 text-left">Target</th>
              </tr>
            </thead>
            <tbody>
              {[
                { t: 'Mosquito Treatment 1', timing: 'Early May', target: 'First-generation adults before population builds' },
                { t: 'Tick Treatment 1', timing: 'Late May', target: 'Peak nymph activity — highest Lyme transmission risk' },
                { t: 'Mosquito Treatment 2', timing: 'Early June', target: 'Bridge into peak season' },
                { t: 'Mosquito Treatment 3', timing: 'Early July', target: 'Peak mosquito pressure' },
                { t: 'Mosquito Treatment 4', timing: 'Early August', target: 'Late-season sustained pressure' },
                { t: 'Tick Treatment 2', timing: 'Late August / September', target: 'Adult tick activity, fall peak' },
                { t: 'Mosquito Treatment 5', timing: 'Early September', target: 'Season close-out' },
              ].map(({ t, timing, target }) => (
                <tr key={t} className="border-b border-gray-200 even:bg-gray-50">
                  <td className="px-4 py-2 font-medium text-gray-800">{t}</td>
                  <td className="px-4 py-2 text-brand-700 font-semibold">{timing}</td>
                  <td className="px-4 py-2 text-gray-600">{target}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>Frequently Asked Questions</h2>
        <div className="not-prose space-y-4 my-6">
          {FAQS.map(({ question, answer }) => (
            <details key={question} className="bg-brand-50 rounded-xl border border-brand-100">
              <summary className="cursor-pointer px-5 py-3 font-semibold text-brand-900 list-none">{question}</summary>
              <p className="px-5 pb-4 text-gray-600 text-sm">{answer}</p>
            </details>
          ))}
        </div>

        <h2>Related Guides</h2>
        <ul>
          <li><Link href="/hamilton-mosquito-control" className="text-brand-700 hover:underline">Hamilton Mosquito Control Services</Link></li>
          <li><Link href="/blog/mosquito-tick-control-hamilton-burlington" className="text-brand-700 hover:underline">Mosquito & Tick Control in Hamilton & Burlington</Link></li>
          <li><Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{MOSQUITO_BLOGS.pillar.title}</Link></li>
          <li><Link href={`/blog/${TICK_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{TICK_BLOGS.pillar.title}</Link></li>
          <li><Link href="/blog/lyme-disease-tick-prevention-ontario" className="text-brand-700 hover:underline">Lyme Disease Prevention in Ontario</Link></li>
        </ul>
      </article>

      <CTASection
        heading="Serving Stoney Creek — Free Quotes Available"
        subtext="Professional mosquito and tick barrier spray for Heritage Green, Winona, Fruitland, Battlefield and all Stoney Creek neighbourhoods. Call (289) 216-5030."
      />
    </>
  )
}
