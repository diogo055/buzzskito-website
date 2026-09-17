import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import CityHero from '@/components/CityHero'
import TypicalPrices from '@/components/TypicalPrices'
import CityPriceCard from '@/components/CityPriceCard'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema, howToSchema } from '@/lib/seo'
import { BUSINESS, CITIES, PROMISES } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Control Ontario | From $99',
  description:
    'Mosquito and tick barrier spray across Ontario\'s GTA. 19 cities — Mississauga, Toronto, Brampton, Oakville, Vaughan, Hamilton. From $99. (289) 216-5030.',
  canonical: '/mosquito-control-ontario',
})

const FAQS = [
  {
    question: 'What is professional mosquito control in Ontario?',
    answer: 'Professional mosquito control in Ontario involves a licensed technician applying a residual insecticide, according to its label directions, to the vegetation on your residential property — shrubs, hedges, garden beds, fence lines, and leaf undersides where mosquitoes rest during the day. Licensed Ontario technicians apply it as a fine mist using backpack precision sprayers, and treatments are repeated on a schedule through the season. Keep children and pets off treated areas until the spray has dried, as the product label directs.',
  },
  {
    question: 'Is professional mosquito spray legal and safe in Ontario?',
    answer: 'Professional mosquito spraying is legal in Ontario when it is done by a licensed operator. Pest control products in Canada are regulated federally under the Pest Control Products Act, and Ontario\'s Pesticides Act requires training and a licence for all commercial pesticide applications. BuzzSkito holds Ontario Pesticide Operator Licence L-240-2436835197, and our technicians apply every product according to its label directions. Keep children and pets off treated areas until the spray has dried, as the label directs.',
  },
  {
    question: 'What Ontario cities does BuzzSkito serve for mosquito and tick control?',
    answer: 'BuzzSkito serves 19 cities across the Greater Toronto Area and Southern Ontario: Mississauga, Toronto, Brampton, Oakville, Burlington, Hamilton, Vaughan, Richmond Hill, Markham, Etobicoke, Scarborough, North York, Caledon, Milton, Georgetown, Halton Hills, King City, Woodbridge, and Thornhill. We also serve communities including Kleinburg, Nobleton, Ancaster, Dundas, Stoney Creek, and Flamborough. Call (289) 216-5030 to confirm service at your specific address.',
  },
  {
    question: 'When does mosquito season start and end in Ontario?',
    answer: 'Mosquito season in Ontario typically begins in late April or early May when temperatures consistently exceed 10°C. Peak activity runs from June through August. The season extends into September and sometimes early October in southern Ontario, particularly in years with warm falls. We recommend starting treatments in early May, before populations peak, with season plans of 5, 10, or 20+ visits from May to September.',
  },
  {
    question: 'What is tick season in Ontario?',
    answer: 'Blacklegged tick nymphs — the most dangerous stage for Lyme disease transmission — are most active from May through July in Ontario. Adult ticks are active from early spring (March–April) through late fall (October–November) whenever temperatures are above 4°C. Unlike mosquitoes, blacklegged ticks remain active on warm winter days. The highest-risk window for Lyme transmission is May through July during nymph season.',
  },
  {
    question: 'Does mosquito spray work against ticks in Ontario?',
    answer: 'Tick control is its own application. Ticks wait in different places from mosquitoes — lawn-to-woods edges, leaf litter, and low vegetation along fence lines — so BuzzSkito treats those zones specifically, with 5 tick sprays per season. Tick control is $597 on its own or $497 when added to any mosquito plan, and a bundled tick treatment is done on the same visit as your mosquito spray. Many Ontario homeowners bundle both services.',
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/mosquito-control-ontario', '2026-07-01')) }} />

      <CityHero
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Mosquito Control', href: '/mosquito-control' }, { label: 'Ontario' }]}
        title={<>Mosquito &amp; Tick Control</>}
        titleAccent={<>across Ontario</>}
        subtitle={<>Licensed Ontario pesticide operator treating yards for mosquitoes and ticks across 19 cities in Southern Ontario&apos;s Greater Toronto Area. Treatments applied according to label directions, no contracts.</>}
        image="/spray-backyard.webp"
      />

      <section className="bg-brand-900 text-white py-4 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-medium text-brand-200">
          <span>✓ Ontario Pesticides Act Licensed</span>
          <span>✓ Mississauga-Based &amp; Owner-Operated</span>
          <span>✓ 19 GTA Cities</span>
          <span>✓ 150+ Five-Star Reviews</span>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-brand-900 text-white py-4 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-medium text-brand-200">
          <span>✓ {PROMISES.licence}</span>
          <span>✓ {PROMISES.labelLine}</span>
          <span>✓ {PROMISES.rainBackShort}</span>
          <span>✓ {PROMISES.biteFreeScope}</span>
          <span>✓ 5-Star Rated · 150+ Reviews</span>
        </div>
      </section>

      <TypicalPrices service="mosquito" city="Ontario" />

      {/* How It Works */}
      <section className="py-12 px-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-8 text-center">How BuzzSkito Mosquito Control Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Free Property Assessment', desc: 'We evaluate your property — identifying water features, dense vegetation, and mosquito pressure zones specific to your area.' },
              { step: '2', title: 'Professional Barrier Spray', desc: 'Our licensed technician applies a barrier product, according to its label directions, to vegetation, shrub interiors, leaf undersides, and fence lines using a precision backpack sprayer.' },
              { step: '3', title: 'Rain-Back Guarantee', desc: 'Rain within 1 hour of your treatment? We come back and re-treat free, on every plan. Standard & Exclusive plans also carry the Bite-Free Guarantee.' },
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
          <p>BuzzSkito is a Mississauga-based mosquito and tick control company serving residential homeowners across the Greater Toronto Area and surrounding Southern Ontario communities. We specialize exclusively in barrier spray treatments — a fine residual insecticide mist applied to your property&apos;s vegetation, shrubs, and lawn edges where mosquitoes rest and ticks wait, re-applied on a set schedule through the season.</p>
          <p>Our technicians are licensed under Ontario&apos;s Pesticides Act (Ontario Pesticide Operator Licence {BUSINESS.licenseNumber}), and every product is applied according to its label directions. Every treatment includes a written service log delivered by SMS after each visit.</p>

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
            <li><strong>Residual barrier</strong> — the product dries onto leaf surfaces, and scheduled repeat visits keep it in place through the season</li>
            <li><strong>Label-directed application</strong> — products applied according to label directions; stay off treated areas until the spray has dried</li>
            <li><strong>Rain-back guarantee</strong> — rain within 1 hour of your treatment? We come back and re-treat free, on every plan</li>
            <li><strong>Bite-Free Guarantee on Standard &amp; Exclusive plans</strong> — if mosquitoes come back between scheduled treatments, we re-treat at no charge</li>
            <li><strong>SMS service log</strong> — written documentation delivered after every visit</li>
          </ul>
        </div>
      </section>


      {/* Testimonials */}
      <section className="py-12 px-4 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-2 text-center">What GTA Homeowners Say</h2>
          <p className="text-center text-gray-500 text-sm mb-8">From our 150+ five-star Google reviews</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { author: 'Katharine M.', text: 'Fantastic experience with the mosquito control last summer! We\u2019re re-signing for this season once again \u2014 we can finally enjoy our yard again in Mississauga.' },
              { author: 'Anthony', text: 'Highly recommend this company for mosquito control. I got my house in Milton serviced recently and loved the end result!' },
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
            <a href="https://g.page/r/CYytaw5LxucdEAE/review" target="_blank" rel="noopener noreferrer" className="text-brand-700 font-semibold text-sm hover:underline">Read all 150+ reviews on Google &rarr;</a>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4">
        <CityPriceCard city="Ontario" service="mosquito" />
      </div>

      <section className="py-10 px-4 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">FAQ – Mosquito &amp; Tick Control in Ontario</h2>
          <div className="space-y-3">
            {FAQS.map(({ question, answer }) => (
              <details key={question} className="bg-white rounded-xl border border-brand-100 group open:shadow-md transition-shadow">
                <summary className="cursor-pointer px-5 py-4 font-semibold text-brand-900 list-none flex justify-between items-center rounded-xl hover:bg-brand-100/60 transition-colors">
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

      <CTASection heading="Get a Free Quote for Your Ontario Property" subtext="Serving 19 GTA cities. No contracts, rain-back guarantee on every plan, licensed Ontario operator." />
    </>
  )
}
