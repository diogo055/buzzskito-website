import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema, howToSchema } from '@/lib/seo'
import { BUSINESS, CITIES } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito & Tick Control Near Me | GTA | BuzzSkito',
  description:
    'Mosquito control near you in the GTA. BuzzSkito serves Mississauga, Toronto, Brampton, Oakville, Burlington & Hamilton. From $99.',
  canonical: '/mosquito-control-near-me',
})

const FAQS = [
  {
    question: 'How do I know if BuzzSkito serves my area?',
    answer: "BuzzSkito serves approximately a 50 km radius from Mississauga, covering most of the GTA and York Region. Our confirmed service areas include Mississauga, Toronto, Brampton, Oakville, Burlington, Hamilton, Vaughan, Richmond Hill, Markham, Etobicoke, Scarborough, North York, Caledon, Milton, Georgetown, Halton Hills, King City, Woodbridge, Thornhill, and Kleinburg. Call (289) 216-5030 or use our contact form to confirm availability at your specific address.",
  },
  {
    question: 'Do you provide tick control near me as well as mosquito control?',
    answer: "Yes — we provide both mosquito and tick control across all 19+ GTA service areas. Many homeowners bundle both services in a single visit: the same barrier spray that eliminates mosquitoes also kills ticks at all life stages, including nymphs. Tick treatment is especially important for properties in York Region, near the Oak Ridges Moraine, and along the Credit, Humber, and Don River corridors.",
  },
  {
    question: 'How quickly can BuzzSkito treat my property?',
    answer: "In most cases we can schedule your first treatment within 3–5 business days. During peak season (June–July) availability may be slightly longer. Call (289) 216-5030 to check current availability in your area and get on the schedule.",
  },
  {
    question: 'Is mosquito and tick spray safe for children and pets?',
    answer: "Yes. Our Health Canada–approved formula is safe for children and pets once dry — approximately 30 minutes after application. During that window, keep kids and pets off the treated area. After 30 minutes, the yard is fully safe for normal use. We observe buffer zones around vegetable gardens, sandboxes, and water features on every property.",
  },
  {
    question: 'Is there a minimum property size for treatment?',
    answer: "No. We treat properties of all sizes — from compact urban lots and townhome backyards to large estate properties and acreages. Pricing is based on treated area. Call (289) 216-5030 for a quote based on your specific property.",
  },
  {
    question: 'Do I need to do anything to prepare for treatment?',
    answer: "Before your treatment, please: pick up any toys, cushions, or items on the lawn that would block access to vegetation; move any pets indoors or to the front yard; ensure your technician has access to the backyard gate or side yards. You don't need to be home, and no other preparation is needed.",
  },
  {
    question: 'Can I get a same-day or next-day treatment?',
    answer: "In some cases, yes — particularly early in the season or for locations where we already have technicians in the area. Call (289) 216-5030 directly to check same-day or next-day availability. Online booking requests typically confirm within 24 hours.",
  },
]

export default function MosquitoControlNearMePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: 'Greater Toronto Area, Ontario' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: 'Mosquito Control Near Me', description: 'Professional mosquito and tick barrier spray serving the Greater Toronto Area — Mississauga, Toronto, Brampton, Oakville, Burlington, Hamilton, and surrounding GTA cities.', slug: '/mosquito-control-near-me' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: 'Near Me', url: '/mosquito-control-near-me' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema({ service: 'mosquito' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/mosquito-control-near-me')) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/mosquito-control" className="hover:text-white">Mosquito Control</Link><span>/</span>
            <span className="text-white">Near Me</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Mosquito &amp; Tick Control Near You — GTA &amp; York Region</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            BuzzSkito serves 19+ cities across the Greater Toronto Area and York Region. Health Canada–approved barrier spray eliminates both mosquitoes and ticks — up to 30-day protection, safe for kids and pets. Free quotes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get a Free Quote</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

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
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">Cities We Serve</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {CITIES.map((city) => (
              <Link
                key={city.name}
                href={city.mosquitoSlug}
                className="flex items-center gap-3 bg-brand-50 hover:bg-brand-100 border border-brand-200 text-brand-700 hover:text-brand-900 px-4 py-3 rounded-xl text-sm font-medium transition-colors"
              >
                <svg className="w-4 h-4 text-amber-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Mosquito Control — {city.name}
              </Link>
            ))}
          </div>

          <div className="mt-10 bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <h2 className="text-xl font-extrabold text-brand-900 mb-3">Don't See Your City?</h2>
            <p className="text-gray-600 text-sm mb-4">Our service area covers approximately 50 km from Mississauga. If your city isn't listed, call us — we may still be able to serve you, particularly for larger properties or areas on the edge of our coverage zone.</p>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-bold px-6 py-3 rounded-full text-sm transition-colors">
              Call to Check Your Area — {BUSINESS.phone}
            </a>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-extrabold text-brand-900 mb-4">Tick Control Near Me — Also Available Across the GTA</h2>
            <p className="text-gray-600 mb-4">BuzzSkito provides tick control alongside mosquito control in all service areas. One visit covers both — the same barrier spray that eliminates mosquitoes also kills blacklegged ticks at all life stages, including the tiny nymphs responsible for most Lyme disease cases in Ontario.</p>
            <p className="text-gray-600 mb-4">Tick risk is highest in York Region (Vaughan, Kleinburg, King City, Richmond Hill, Markham), near the Oak Ridges Moraine, and along the Humber, Credit, and Don River corridors. Properties near conservation areas, ravines, or farmland edges in any GTA city benefit from professional tick treatment each season.</p>
            <p className="text-gray-600">The tick spray is safe for children and pets 30 minutes after application. Many homeowners bundle mosquito and tick treatments for complete protection in one visit — ask about bundle pricing when you call.</p>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-extrabold text-brand-900 mb-4">Mosquito Removal &amp; Lawn Spraying Services Near You</h2>
            <p className="text-gray-600 mb-4">Whether you call it mosquito removal, mosquito lawn spraying, yard fogging, or barrier spray — BuzzSkito provides the same professional-grade service: a residual insecticide mist applied to all vegetation on your property that eliminates mosquitoes on contact and keeps them away for up to 30 days. We serve all 19 GTA cities and can typically schedule within 3–5 business days.</p>
            <p className="text-gray-600 mb-6">We also provide tick removal and tick yard treatment across the same service area. Many homeowners book mosquito and tick lawn spraying together for complete protection in a single visit.</p>
          </div>

          <div className="mt-4">
            <h2 className="text-2xl font-extrabold text-brand-900 mb-4">Why GTA Homeowners Need Professional Mosquito &amp; Tick Control</h2>
            <p className="text-gray-600 mb-4">The Greater Toronto Area has one of the most extensive urban ravine and green corridor networks in North America. The Don Valley, Humber River, Highland Creek, Bronte Creek, and dozens of smaller tributaries create persistent, high-volume mosquito breeding habitat throughout the region. Neighbourhood properties adjacent to these corridors experience seasonal mosquito pressure that significantly exceeds what source reduction alone can address.</p>
            <p className="text-gray-600">BuzzSkito's barrier spray creates a treated perimeter around your property — targeting the resting vegetation where mosquitoes and ticks spend most of their time — eliminating active populations and providing up to 30 days of residual protection per visit.</p>
          </div>

          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <h2 className="text-xl font-extrabold text-brand-900 mb-2">How Much Does Mosquito Control Cost Near You?</h2>
            <p className="text-gray-600 text-sm mb-3">BuzzSkito mosquito treatments start from <strong className="text-brand-700">$99 per treatment</strong> across all GTA service areas. No contracts, rain-back guarantee included.</p>
            <Link href="/mosquito-control-cost" className="inline-block text-sm font-bold text-brand-700 underline hover:text-brand-900">See our full 2026 Ontario pricing guide →</Link>
          </div>
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

      <CTASection heading="Find Mosquito &amp; Tick Control Near You" subtext="Serving 19+ GTA cities and York Region. Free quotes. No contracts. Call or book online today." />
    </>
  )
}
