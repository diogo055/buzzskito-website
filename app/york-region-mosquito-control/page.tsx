import type { Metadata } from 'next'
import Link from 'next/link'
import CrewVideo from '@/components/CrewVideo'
import { CREW_CLIPS } from '@/lib/crew-videos'
import CTASection from '@/components/CTASection'
import CityHero from '@/components/CityHero'
import TypicalPrices from '@/components/TypicalPrices'
import CityPriceCard from '@/components/CityPriceCard'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS, MOSQUITO_BLOGS, TICK_BLOGS, PROMISES } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Control York Region · From $99',
  description:
    'York Region mosquito and tick control · 150+ five-star reviews. Vaughan, Richmond Hill, Markham, Aurora, King City. From $99, no contracts. (289) 216-5030.',
  canonical: '/york-region-mosquito-control',
})

const CITIES = [
  { name: 'Vaughan', mosquitoSlug: '/vaughan-mosquito-control', tickSlug: '/vaughan-tick-spray' },
  { name: 'Richmond Hill', mosquitoSlug: '/richmond-hill-mosquito-control', tickSlug: '/richmond-hill-tick-spray' },
  { name: 'Markham', mosquitoSlug: '/markham-mosquito-control', tickSlug: '/markham-tick-spray' },
  { name: 'Thornhill', mosquitoSlug: '/thornhill-mosquito-control', tickSlug: '/thornhill-tick-spray' },
  { name: 'Woodbridge', mosquitoSlug: '/woodbridge-mosquito-control', tickSlug: '/woodbridge-tick-spray' },
  { name: 'King City', mosquitoSlug: '/king-city-mosquito-control', tickSlug: '/king-city-tick-spray' },
  { name: 'Kleinburg', mosquitoSlug: '/kleinburg-mosquito-control', tickSlug: '/vaughan-tick-spray' },
]

const FAQS = [
  {
    question: 'Is York Region a high-risk area for ticks and mosquitoes?',
    answer: "Yes. York Region Public Health says all of York Region is now an estimated Lyme disease risk area, with more than 20 percent of its blacklegged ticks carrying the Lyme bacteria, and the region had 18 human West Nile virus cases (confirmed or probable) in 2025. The Oak Ridges Moraine, which runs east–west through the northern tier of York Region (Richmond Hill, King City, Kleinburg, Whitchurch-Stouffville), holds blacklegged tick habitat; in 2017 the Region identified a Lyme disease risk area near Joker's Hill in King Township. The Humber River valley (Vaughan, Woodbridge, Kleinburg) and Don River headwaters (Richmond Hill, Markham) create extensive mosquito breeding habitat throughout the region. Homeowners in York Region face a longer active season and higher pest pressure than most of the GTA.",
  },
  {
    question: 'Which York Region cities have the highest tick risk?',
    answer: "York Region Public Health publishes no city-by-city ranking: it says all of York Region is an estimated Lyme disease risk area. It has named a risk area in the Humber Valley near the Boyd and Kortright conservation areas in Vaughan (2018), and its 2018 tick dragging found blacklegged ticks at Happy Valley Forest, King Trails at Centennial and Cold Creek Conservation Area in King Township and at Bindertwine Park in Kleinburg. Properties backing onto the Oak Ridges Moraine (King City, Kleinburg, Nobleton, northern Richmond Hill) or the Humber River valley (Vaughan, Woodbridge) sit right beside wooded tick habitat. The Region advises everyone to use a repellent with DEET or icaridin and to check for ticks after time outdoors.",
  },
  {
    question: 'Does BuzzSkito serve all York Region communities?',
    answer: "Yes. BuzzSkito serves all York Region communities including Vaughan, Woodbridge, Kleinburg, Maple, Concord, Richmond Hill, Markham, Thornhill, King City, Nobleton, and Schomberg. We also cover the surrounding areas of Caledon, Brampton, North York, Etobicoke, and Scarborough. Call (289) 216-5030 to confirm service at your specific address.",
  },
  {
    question: 'Can I bundle mosquito and tick control in York Region?',
    answer: "Yes. Many York Region homeowners — especially those near the Oak Ridges Moraine, Humber River valley, or Don River headwaters — bundle mosquito and tick control so both are done on the same visits. Tick control is a different application, aimed at the lawn edges, leaf litter, and fence lines where blacklegged ticks wait. It is 5 sprays per season: $497 when added to any mosquito plan, or $597 on its own, plus HST.",
  },
  {
    question: 'When should York Region homeowners start mosquito and tick treatments?',
    answer: "For mosquito control, start in early May — mosquitoes begin emerging in York Region once temperatures consistently exceed 10°C, typically in late April or early May. For tick control, the highest-risk period for nymph ticks (the most dangerous stage for Lyme disease transmission) is May through July, with a second adult tick activity peak in September–October. Our tick program is 5 treatments per season, roughly one a month from May through September, so both the nymph peak and late-season adult activity fall inside the treatment schedule.",
  },
]

export default function YorkRegionMosquitoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: 'Mosquito & Tick Control York Region', description: 'Professional mosquito and tick barrier spray service across York Region, Ontario.', slug: '/york-region-mosquito-control' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: 'York Region', url: '/york-region-mosquito-control' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/york-region-mosquito-control', '2026-07-01')) }} />

      <CityHero
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Mosquito Control', href: '/mosquito-control' },
          { label: 'York Region' },
        ]}
        title={<>Mosquito &amp; Tick Control</>}
        titleAccent={<>Across York Region</>}
        subtitle={<>Licensed Ontario pesticide operator serving every York Region community, where the Oak Ridges Moraine, Humber River valley, and Don River headwaters drive heavy mosquito and blacklegged tick pressure. Treatments applied according to label directions.</>}
        image="/spray-backyard.webp"
      />

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

      {/* REAL JOB FOOTAGE right after the top of the page (owner, Nov 13, 2026: every city page should open with
          one of the crew's clips). No place is claimed for the footage. It waits for the page to finish loading
          (afterLoad), so it never slows the page. */}
      <section className="pt-8 pb-4 px-4 bg-white" aria-label="Our crew at work">
        <div className="max-w-3xl mx-auto">
          <CrewVideo
            clip={CREW_CLIPS.underDeck}
            afterLoad
            sizes="(max-width: 768px) 100vw, 768px"
            className="rounded-2xl ring-1 ring-brand-200"
            caption="Filmed on one of our jobs: misting the shaded space under a deck, one of the places mosquitoes rest during the day."
          />
        </div>
      </section>

      
      <TypicalPrices service="mosquito" city="York Region" />

      {/* How It Works */}
      <section className="py-12 px-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <p className="kicker mb-3 text-center">Our Process</p>
          <h2 className="h2-display text-brand-900 mb-8 text-center">How BuzzSkito Mosquito Control Works</h2>
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
          <h2>Why Tick and Mosquito Risk Runs High in York Region</h2>
          <p>York Region sits at the intersection of three major natural systems that drive pest pressure throughout the GTA. The Oak Ridges Moraine — one of Ontario&apos;s most significant ecological features — runs east–west through the northern tier of York Region, providing the forested upland habitat, extensive wetlands, and wildlife corridors that support large deer populations. Deer are the primary host for adult blacklegged ticks, and the Moraine&apos;s deer population carries blacklegged ticks from the woodlands around King City, Kleinburg, and Richmond Hill into residential neighbourhoods throughout the region every season.</p>
          <p>The Humber River originates in the Oak Ridges Moraine and flows south through Vaughan, Woodbridge, and Kleinburg before continuing through Etobicoke to Lake Ontario. This continuous watershed corridor carries ticks from the Moraine into residential properties throughout Vaughan and provides extensive mosquito breeding habitat in the floodplain. The Don River headwaters originate in Richmond Hill and Markham, providing a second major mosquito source corridor on the eastern side of York Region.</p>
          <p>The region&apos;s combination of mature conservation land, urban wildlife, and residential properties creates conditions where many families with children and pets who use the yard choose professional mosquito and tick control.</p>

          <h2>What York Region Public Health Reports</h2>
          <p>As of September 3, 2026, York Region Public Health had found West Nile virus in mosquitoes from 14 traps: Markham 4, Vaughan 4, East Gwillimbury 2, Newmarket 2, Richmond Hill 1 and Whitchurch-Stouffville 1. By then it had reported two human cases, one confirmed and one probable, after 18 human cases in 2025. On ticks, the Region says all of York Region is now an estimated Lyme disease risk area, and it counted 85 Lyme disease cases among residents in 2025. Its mosquito control is larviciding of public catch basins (107,770 treated in 2024) and other standing water on public property; on private land it treats only a catch basin, on request.</p>
          <p className="text-sm text-gray-500">Sources: <a href="https://www.york.ca/health/infectious-diseases-and-prevention/west-nile-virus" target="_blank" rel="noopener noreferrer" className="text-brand-700 hover:underline">York Region, West Nile virus</a> · <a href="https://www.york.ca/health/infectious-diseases-and-prevention/lyme-disease" target="_blank" rel="noopener noreferrer" className="text-brand-700 hover:underline">York Region, Lyme disease</a> · <a href="https://www.york.ca/newsroom/media-release/strengthening-healthy-communities-york-region-public-health-2024-update" target="_blank" rel="noopener noreferrer" className="text-brand-700 hover:underline">York Region Public Health, 2024 update</a></p>

          <h2>York Region Cities We Serve</h2>
          <div className="not-prose grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
            {CITIES.map((city) => (
              <div key={city.name} className="bg-brand-50 border border-brand-200 rounded-xl p-4">
                <div className="font-bold text-brand-900 mb-2">{city.name}</div>
                <div className="flex flex-col gap-1">
                  <Link href={city.mosquitoSlug} className="text-xs text-brand-700 hover:underline">Mosquito control →</Link>
                  <Link href={city.tickSlug} className="text-xs text-amber-700 hover:underline">Tick spray →</Link>
                </div>
              </div>
            ))}
          </div>
          <p>Also serving Maple, Concord, North Vaughan, Nobleton, Schomberg, and all rural King Township communities. Call <a href={BUSINESS.phoneHref} className="text-brand-700 hover:underline font-semibold">{BUSINESS.phone}</a> to confirm service at your specific address.</p>

          <h2>Oak Ridges Moraine Tick Risk</h2>
          <p>The Oak Ridges Moraine is prime blacklegged tick habitat. The Moraine&apos;s forested uplands, headwater wetlands, and meadow edges provide the exact combination of habitat that blacklegged ticks need to complete their three-stage life cycle: ground-level leaf litter and moisture for overwintering eggs and larvae, small mammal hosts (mice, voles, chipmunks) for larval and nymphal feeding, and deer for adult female feeding and reproduction. Properties in King City, Kleinburg, Nobleton, and northern Richmond Hill that back onto Moraine-adjacent conservation land sit right beside that habitat.</p>

          <h2>Our York Region Mosquito and Tick Service</h2>
          <ul>
            <li>Professional barrier spray applied to all vegetation, shrubs, fence lines, and canopy edges on your property</li>
            <li>{PROMISES.labelLine}, by a licensed operator — stay off treated areas until the spray has dried</li>
            <li>Season mosquito plans: 5 (monthly), 10 (every 2 weeks) or 20+ (weekly) treatments May through September</li>
            <li>Tick program: 5 treatments per season, roughly monthly from May through September, covering nymph emergence and adult activity</li>
            <li>Bundle both services so tick treatment is done on your mosquito visits ($497 tick season with any mosquito plan)</li>
            <li>{PROMISES.rainBack} Standard &amp; Exclusive plans also carry the Bite-Free Guarantee.</li>
          </ul>
        </div>
      </section>

      <section aria-labelledby="york-region-guides" className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 id="york-region-guides" className="text-2xl font-extrabold text-brand-900 mb-6">Related Guides for York Region Homeowners</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href={`/blog/${TICK_BLOGS.pillar.slug}`} className="block bg-white border border-amber-200 rounded-xl p-5 hover:border-amber-400 transition-colors">
              <div className="text-xs font-bold text-amber-600 uppercase mb-1">Tick Control</div>
              <div className="font-bold text-brand-900">{TICK_BLOGS.pillar.title}</div>
            </Link>
            <Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="block bg-white border border-brand-200 rounded-xl p-5 hover:border-brand-400 transition-colors">
              <div className="text-xs font-bold text-brand-600 uppercase mb-1">Mosquito Control</div>
              <div className="font-bold text-brand-900">{MOSQUITO_BLOGS.pillar.title}</div>
            </Link>
            {TICK_BLOGS.supporting.slice(0, 2).map(b => (
              <Link key={b.slug} href={`/blog/${b.slug}`} className="block bg-white border border-amber-200 rounded-xl p-5 hover:border-amber-400 transition-colors">
                <div className="text-xs font-bold text-amber-600 uppercase mb-1">Tick Guide</div>
                <div className="font-bold text-brand-900">{b.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4">
        <CityPriceCard city="York Region" service="mosquito" location="price_card_faq" />
      </div>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">FAQ – Mosquito &amp; Tick Control in York Region</h2>
          <div className="space-y-3">
            {FAQS.map(({ question, answer }) => (
              <details key={question} className="bg-brand-50 rounded-xl border border-brand-100 group open:shadow-md transition-shadow">
                <summary className="cursor-pointer px-5 py-4 font-semibold text-brand-900 list-none flex justify-between items-center rounded-xl hover:bg-brand-100/60 transition-colors">
                  <span>{question}</span>
                  <svg className="w-5 h-5 shrink-0 group-open:rotate-180 transition-transform text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <p className="px-5 pb-4 text-gray-600 text-sm">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Protect Your York Region Yard This Season" subtext="Free quote for mosquito and tick control. Serving all York Region communities." variant="dark" />
    </>
  )
}
