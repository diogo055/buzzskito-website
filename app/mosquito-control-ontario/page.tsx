import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema, howToSchema } from '@/lib/seo'
import { BUSINESS, CITIES } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Control Ontario | From $99 · No Contracts',
  description:
    'Professional mosquito and tick barrier spray across Ontario\'s Greater Toronto Area. Serving 19 cities in Southern Ontario including Mississauga, Toronto, Brampton, Oakville, Vaughan, Hamilton & more. Health Canada–approved. Call (289) 216-5030.',
  canonical: '/mosquito-control-ontario',
})

const FAQS = [
  {
    question: 'What is professional mosquito control in Ontario?',
    answer: 'Professional mosquito control in Ontario involves applying a Health Canada–approved residual insecticide to the vegetation on your residential property — shrubs, hedges, garden beds, fence lines, and leaf undersides where mosquitoes rest during the day. The formula kills mosquitoes on contact and provides up to 30 days of continuous protection. Licensed Ontario technicians apply it as a fine mist using backpack precision sprayers. It is safe for children and pets once dry, typically within 30 minutes.',
  },
  {
    question: 'Is professional mosquito spray legal and safe in Ontario?',
    answer: 'Yes. All products BuzzSkito uses are registered with Health Canada under the Pest Control Products Act — the federal regulatory framework governing pesticide safety in Canada. Our technicians are licensed under Ontario\'s Pesticides Act, which requires training and certification for all commercial pesticide applications. Ontario\'s provincial regulations are among the strictest in North America, and the products we use meet all requirements for residential use.',
  },
  {
    question: 'What Ontario cities does BuzzSkito serve for mosquito and tick control?',
    answer: 'BuzzSkito serves 19 cities across the Greater Toronto Area and Southern Ontario: Mississauga, Toronto, Brampton, Oakville, Burlington, Hamilton, Vaughan, Richmond Hill, Markham, Etobicoke, Scarborough, North York, Caledon, Milton, Georgetown, Halton Hills, King City, Woodbridge, and Thornhill. We also serve communities including Kleinburg, Nobleton, Ancaster, Dundas, Stoney Creek, and Flamborough. Call (289) 216-5030 to confirm service at your specific address.',
  },
  {
    question: 'When does mosquito season start and end in Ontario?',
    answer: 'Mosquito season in Ontario typically begins in late April or early May when temperatures consistently exceed 10°C. Peak activity runs from June through August. The season extends into September and sometimes early October in southern Ontario, particularly in years with warm falls. We recommend starting treatments in early May to establish a protective barrier before populations peak, with five seasonal visits (May–September) for continuous coverage.',
  },
  {
    question: 'What is tick season in Ontario?',
    answer: 'Blacklegged tick nymphs — the most dangerous stage for Lyme disease transmission — are most active from May through July in Ontario. Adult ticks are active from early spring (March–April) through late fall (October–November) whenever temperatures are above 4°C. Unlike mosquitoes, blacklegged ticks remain active on warm winter days. The highest-risk window for Lyme transmission is May through July during nymph season.',
  },
  {
    question: 'Does mosquito spray work against ticks in Ontario?',
    answer: 'Yes. BuzzSkito\'s barrier spray eliminates both mosquitoes and blacklegged ticks in a single treatment. The same active formula that kills mosquitoes on contact is also effective against ticks at all life stages — adults, nymphs, and larvae. Many Ontario homeowners bundle both services for complete yard protection. One visit, one treatment, covers both pests.',
  },
  {
    question: 'What Ontario areas have the highest mosquito and tick risk?',
    answer: 'The highest mosquito and tick risk in Ontario\'s GTA region is found near: the Oak Ridges Moraine (King City, Kleinburg, Caledon, Richmond Hill) — Ontario\'s most significant tick corridor; the Humber River valley (Vaughan, Woodbridge, Etobicoke); Rouge National Urban Park (Scarborough, Markham); Credit River corridor (Mississauga, Georgetown, Halton Hills); Don River headwaters (Richmond Hill, Markham); Cootes Paradise wetlands (Hamilton); and Bronte Creek Provincial Park (Oakville). All 19 cities we serve in Southern Ontario have meaningful mosquito and tick pressure during the active season.',
  },
]

export default function MosquitoControlOntarioPage() {
  const primaryCities = CITIES.slice(0, 6)
  const extendedCities = CITIES.slice(6)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: 'Mosquito & Tick Control Ontario', description: 'Professional mosquito and tick barrier spray service across Southern Ontario\'s Greater Toronto Area.', slug: '/mosquito-control-ontario' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: 'Ontario', url: '/mosquito-control-ontario' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema({ service: 'mosquito' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/mosquito-control-ontario')) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/mosquito-control" className="hover:text-white">Mosquito Control</Link><span>/</span>
            <span className="text-white">Ontario</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">
            Mosquito &amp; Tick Control<br />
            <span className="text-amber-400">across Ontario</span>
          </h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            BuzzSkito provides Health Canada–approved mosquito and tick barrier spray across 19 cities in Southern Ontario&apos;s Greater Toronto Area. Licensed technicians, guaranteed results, no contracts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/free-yard-assessment" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get a Free Quote</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      <section className="bg-brand-900 text-white py-4 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-medium text-brand-200">
          <span>✓ Health Canada–Approved Formula</span>
          <span>✓ Ontario Pesticides Act Licensed</span>
          <span>✓ Safe for Kids &amp; Pets (30 min)</span>
          <span>✓ Up to 30-Day Protection</span>
          <span>✓ 126 Five-Star Reviews</span>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-brand-900 text-white py-4 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-medium text-brand-200">
          <span>✓ Health Canada–Approved Formula</span>
          <span>✓ Safe for Kids &amp; Pets (30 min dry)</span>
          <span>✓ Up to 30-Day Protection</span>
          <span>✓ Rain-Back Guarantee</span>
          <span>✓ 5-Star Rated · 126 Reviews</span>
        </div>
      </section>

      
      {/* How It Works */}
      <section className="py-12 px-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-8 text-center">How BuzzSkito Mosquito Control Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Free Property Assessment', desc: 'We evaluate your property — identifying water features, dense vegetation, and mosquito pressure zones specific to your area.' },
              { step: '2', title: 'Professional Barrier Spray', desc: 'Our licensed technician applies Health Canada-approved formula to all vegetation, shrub interiors, leaf undersides, and fence lines using a precision backpack sprayer.' },
              { step: '3', title: '30-Day Protection Guarantee', desc: 'The barrier kills mosquitoes on contact and repels new ones for up to 30 days. If pests return within the window, we re-treat at no cost.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="text-center">
                <div className="w-14 h-14 bg-brand-800 text-white rounded-full flex items-center justify-center text-2xl font-extrabold mx-auto mb-4">{step}</div>
                <h3 className="font-bold text-brand-900 text-lg mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto prose-brand">
          <h2>Professional Mosquito and Tick Control across Southern Ontario</h2>
          <p>BuzzSkito is a Mississauga-based mosquito and tick control company serving residential homeowners across the Greater Toronto Area and surrounding Southern Ontario communities. We specialize exclusively in barrier spray treatments — a fine residual insecticide mist applied to your property&apos;s vegetation, shrubs, and lawn edges that eliminates mosquitoes and ticks on contact and provides up to 30 days of continuous protection per treatment.</p>
          <p>Our technicians are licensed under Ontario&apos;s Pesticides Act and all products are registered with Health Canada under the Pest Control Products Act. Every treatment includes a written service log delivered by SMS after each visit.</p>

          <h2>Ontario Mosquito and Tick Season</h2>
          <p>Southern Ontario has one of the longer active pest seasons in Canada due to its temperate climate and significant natural features. Mosquito season runs from early May through late September — five full months when outdoor living is impacted without treatment. Blacklegged ticks (the species that carries Lyme disease) are active from early spring through late fall, with nymph tick season peaking from May through July being the highest-risk period for Lyme disease transmission.</p>
          <p>The Oak Ridges Moraine, Humber River valley, Credit River watershed, Don River headwaters, and Niagara Escarpment — all within the GTA service area — create the natural conditions that sustain large mosquito and tick populations adjacent to residential neighbourhoods throughout the season.</p>

          <h2>Mosquito and Tick Control by City</h2>
          <div className="not-prose grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
            {primaryCities.map((city) => (
              <div key={city.name} className="bg-brand-50 border border-brand-200 rounded-xl p-4">
                <div className="font-bold text-brand-900 mb-2">{city.name}</div>
                <div className="flex flex-col gap-1">
                  <Link href={city.mosquitoSlug} className="text-xs text-brand-700 hover:underline">Mosquito control →</Link>
                  <Link href={city.tickSlug} className="text-xs text-amber-700 hover:underline">Tick spray →</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="not-prose flex flex-wrap gap-2 mb-6">
            {extendedCities.map((city) => (
              <Link key={city.name} href={city.mosquitoSlug} className="text-sm bg-brand-50 border border-brand-200 text-brand-700 hover:bg-brand-700 hover:text-white px-3 py-1.5 rounded-full transition-colors font-medium">{city.name}</Link>
            ))}
          </div>
          <p>Also serving <Link href="/york-region-mosquito-control" className="text-brand-700 hover:underline">all York Region communities</Link> including Kleinburg, Nobleton, and Schomberg. See our <Link href="/service-areas" className="text-brand-700 hover:underline">full service areas page</Link> for the complete list, or see the <Link href="/tick-control-ontario" className="text-amber-700 hover:underline">Ontario tick control hub</Link>.</p>

          <h2>What&apos;s Included in Every Ontario Treatment</h2>
          <ul>
            <li><strong>Full-yard barrier spray</strong> — All vegetation, shrubs, garden beds, fence lines, and canopy edges treated up to 10 feet high</li>
            <li><strong>Up to 30-day residual protection</strong> — formula bonds to leaf surfaces and works continuously between visits</li>
            <li><strong>Health Canada–approved formula</strong> — registered under the Pest Control Products Act, safe for children and pets after 30 minutes</li>
            <li><strong>Rain-back guarantee</strong> — significant rain within one hour of treatment? We return and re-treat at no cost</li>
            <li><strong>Free re-spray guarantee</strong> — if pests return within the protection window, we come back at no charge</li>
            <li><strong>SMS service log</strong> — written documentation delivered after every visit</li>
          </ul>
        </div>
      </section>


      {/* Testimonials */}
      <section className="py-12 px-4 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-2 text-center">What GTA Homeowners Say</h2>
          <p className="text-center text-gray-500 text-sm mb-8">From our 126 five-star Google reviews</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { author: 'Sarah M.', text: 'BuzzSkito treated our backyard and we noticed a huge difference immediately. No mosquitoes at our outdoor birthday party! The technician was professional and on time. Highly recommend.' },
              { author: 'Mike T.', text: 'Second year using BuzzSkito for the season package. Consistent, reliable, and actually works. Our backyard used to be unbearable by July — now we\u2019re out there every evening.' },
            ].map(({ author, text }) => (
              <div key={author} className="bg-brand-50 rounded-2xl p-6 border border-brand-100">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-gray-700 text-sm mb-3 italic">&ldquo;{text}&rdquo;</p>
                <p className="text-brand-800 font-semibold text-sm">{author}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <a href="https://g.page/r/CYytaw5LxucdEAE/review" target="_blank" rel="noopener noreferrer" className="text-brand-700 font-semibold text-sm hover:underline">Read all 126 reviews on Google &rarr;</a>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">FAQ – Mosquito &amp; Tick Control in Ontario</h2>
          <div className="space-y-3">
            {FAQS.map(({ question, answer }) => (
              <details key={question} className="bg-white rounded-xl border border-brand-100 group">
                <summary className="cursor-pointer px-5 py-4 font-semibold text-brand-900 list-none flex justify-between items-center">
                  <span>{question}</span>
                  <svg className="w-5 h-5 shrink-0 group-open:rotate-180 transition-transform text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <p className="px-5 pb-4 text-gray-600 text-sm">{answer}</p>
              </details>
            ))}
          </div>
          <p className="text-center mt-6 text-sm text-gray-500">
            More questions? Call <a href={BUSINESS.phoneHref} className="text-brand-700 underline">{BUSINESS.phone}</a> or see our <Link href="/frequently-asked-question" className="text-brand-700 underline">full FAQ</Link>.
          </p>
        </div>
      </section>

      <CTASection heading="Get a Free Quote for Your Ontario Property" subtext="Serving 19 GTA cities. No contracts, guaranteed results, Health Canada–approved." />
    </>
  )
}
