import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, speakableSchema, howToSchema } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Wedding Mosquito Control GTA · Event Spray',
  description:
    'Mosquito-free weddings & outdoor events in the GTA. BuzzSkito treats venues 24-48 hours before your event. Health Canada-approved. Call (289) 216-5030.',
  canonical: '/wedding-mosquito-control',
})

const FAQS = [
  {
    question: 'How far in advance should I book mosquito treatment before my wedding?',
    answer: 'We recommend booking at least two weeks before your event date to guarantee availability. The actual treatment is applied 24-48 hours before the event for optimal results. During peak wedding season (June-September), earlier booking is strongly recommended. Call (289) 216-5030 to reserve your date.',
  },
  {
    question: 'What happens if it rains after the treatment but before my event?',
    answer: "BuzzSkito's rain-back guarantee covers you. If significant rain falls within one hour of application — before the product has fully cured — we return and re-treat at no additional cost. Once the product dries (approximately 30 minutes), it bonds to vegetation and is rain-resistant. If rain is forecast within 24 hours of your event, we'll coordinate timing to ensure maximum protection.",
  },
  {
    question: 'Is the treatment safe for wedding guests, children, and pets?',
    answer: 'Yes. We use a Health Canada-approved, water-based formula that is safe for people and pets once dry — approximately 30 minutes after application. Since we treat 24-48 hours before your event, the product is fully cured well before guests arrive. There is no visible residue or odour by event time.',
  },
  {
    question: 'How much does event mosquito treatment cost?',
    answer: "Event treatments start from $99 for standard-size venues. Pricing depends on the size of the outdoor area being treated and the complexity of the landscape. Large estate venues, waterfront properties, and venues with extensive gardens may require a custom quote. Call (289) 216-5030 for a free, no-obligation quote for your specific venue.",
  },
  {
    question: 'Can you treat a venue I don\'t own, like a rented estate or park pavilion?',
    answer: "Yes, we regularly treat rented venues, estate properties, and private event spaces. You'll need to coordinate access with the venue owner or manager. We recommend confirming with the venue that third-party pest treatment is permitted. Many GTA wedding venues already work with professional pest control providers and will readily approve treatment.",
  },
]

export default function WeddingMosquitoControlPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: 'Wedding & Event Mosquito Control', description: 'Professional mosquito barrier spray for weddings, garden parties, corporate events, and outdoor gatherings across the Greater Toronto Area.', slug: '/wedding-mosquito-control' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: 'Wedding & Event', url: '/wedding-mosquito-control' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema({ service: 'mosquito' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/wedding-mosquito-control')) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/mosquito-control" className="hover:text-white">Mosquito Control</Link><span>/</span>
            <span className="text-white">Wedding &amp; Event</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Wedding &amp; Outdoor Event Mosquito Control in the GTA</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            Don&rsquo;t let mosquitoes ruin your big day. BuzzSkito treats your venue 24&ndash;48 hours before your wedding, garden party, or corporate event with Health Canada&ndash;approved barrier spray &mdash; up to 30 days of protection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/free-yard-assessment" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Book Your Event Treatment</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-brand-900 text-white py-4 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-medium text-brand-200">
          <span>&#10003; Health Canada&ndash;Approved Formula</span>
          <span>&#10003; Treat 24&ndash;48 Hours Before Your Event</span>
          <span>&#10003; Rain-Back Guarantee</span>
          <span>&#10003; Safe for Guests, Kids &amp; Pets</span>
          <span>&#10003; 5-Star Rated &middot; 126 Reviews</span>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 px-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-8 text-center">How Event Mosquito Treatment Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Book Your Event Date', desc: 'Tell us your event date, venue location, and the outdoor areas you need protected. We recommend booking at least two weeks ahead.' },
              { step: '2', title: 'Pre-Event Barrier Spray', desc: 'Our licensed technician treats all vegetation, shrub interiors, fence lines, and perimeter areas 24-48 hours before your event using Health Canada-approved formula.' },
              { step: '3', title: 'Mosquito-Free Celebration', desc: 'The barrier kills mosquitoes on contact and repels new ones for up to 30 days. Your guests enjoy the outdoors without swatting or spraying themselves.' },
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

      {/* Main content */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Why GTA Weddings Need Mosquito Control</h2>
          <p>The Greater Toronto Area is home to some of Ontario&rsquo;s most beautiful outdoor wedding venues &mdash; many of them near the exact water features and ravines that produce heavy mosquito activity from June through September. Venues along the Credit River, Humber River valley, Lake Ontario waterfront, and Niagara Escarpment offer stunning settings, but without professional treatment, guests spend the evening swatting rather than celebrating.</p>
          <p>A single professional barrier spray applied 24&ndash;48 hours before your event eliminates active mosquito populations and creates a residual barrier across all treated vegetation. The result: dramatically reduced mosquito activity throughout your entire outdoor celebration.</p>

          <h2>Common GTA Wedding Venues Near Water &amp; Ravines</h2>
          <p>These types of GTA venues are particularly prone to mosquito pressure and benefit most from pre-event treatment:</p>
          <ul>
            <li><strong>Waterfront estates</strong> &mdash; Lake Ontario shoreline venues in Oakville, Burlington, Port Credit, and Toronto&rsquo;s waterfront</li>
            <li><strong>Ravine properties</strong> &mdash; Don Valley, Humber Valley, and Credit River corridor venues surrounded by mature tree canopy</li>
            <li><strong>Garden estates</strong> &mdash; Large properties in King City, Caledon, and Halton Hills with extensive landscaping and naturalized areas</li>
            <li><strong>Golf course event spaces</strong> &mdash; Clubhouse patios and ceremony areas adjacent to ponds and irrigation features</li>
            <li><strong>Conservation area venues</strong> &mdash; Properties near Rattray Marsh, Bronte Creek, and Rouge Valley conservation lands</li>
            <li><strong>Backyard weddings</strong> &mdash; Private residences in any GTA neighbourhood, especially those backing onto green corridors or stormwater ponds</li>
          </ul>

          <h2>Events We Treat</h2>
          <div className="not-prose grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { title: 'Outdoor Weddings', desc: 'Ceremony sites, cocktail areas, reception tents, and surrounding gardens. Treated 24-48 hours before your event.' },
              { title: 'Garden Parties & Showers', desc: 'Bridal showers, baby showers, anniversary parties, and private garden events on residential properties.' },
              { title: 'Corporate Events', desc: 'Outdoor corporate gatherings, team-building events, product launches, and company picnics at commercial venues.' },
              { title: 'Backyard Celebrations', desc: 'Birthday parties, graduation parties, barbecues, and family reunions. Any gathering where guests will be outdoors.' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-brand-50 rounded-xl p-5 border border-brand-100">
                <h3 className="font-bold text-brand-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>

          <h2>Treatment Timing &amp; What to Expect</h2>
          <p>For optimal results, we apply the barrier spray 24&ndash;48 hours before your event. Here&rsquo;s the timeline:</p>
          <ul>
            <li><strong>2+ weeks before</strong> &mdash; Book your treatment date. Confirm venue access and any restrictions with the property owner.</li>
            <li><strong>24&ndash;48 hours before</strong> &mdash; Our technician arrives and treats all outdoor vegetation, perimeter areas, and gathering zones. Treatment takes 30&ndash;60 minutes depending on venue size.</li>
            <li><strong>30 minutes after treatment</strong> &mdash; Product is dry and safe for foot traffic. No visible residue, no odour.</li>
            <li><strong>Event day</strong> &mdash; Your guests enjoy a mosquito-free outdoor celebration. Protection lasts up to 30 days from treatment.</li>
          </ul>

          <h2>Why Not Just Use Citronella Candles or Bug Spray?</h2>
          <p>Citronella candles and personal insect repellent are the most common &ldquo;solutions&rdquo; for outdoor events &mdash; and the least effective. Candles protect a radius of only a few feet and only while burning. Asking wedding guests to apply DEET before a formal event is impractical. Neither approach addresses the source: mosquitoes resting in surrounding vegetation.</p>
          <p>Professional barrier spray treats the actual resting sites &mdash; the undersides of leaves, shrub interiors, and fence lines where mosquitoes spend 90% of their time. One treatment eliminates the population around your venue and creates a barrier that repels new mosquitoes for weeks.</p>

          <h2>Pricing for Event Treatments</h2>
          <p>Event mosquito treatments start from <strong>$99</strong> for standard venues. Final pricing depends on:</p>
          <ul>
            <li>Size of the outdoor treatment area</li>
            <li>Complexity of landscaping and vegetation</li>
            <li>Proximity to water features or natural areas</li>
            <li>Whether combined mosquito and tick treatment is needed</li>
          </ul>
          <p>Call <a href={BUSINESS.phoneHref} className="text-brand-700 hover:underline">{BUSINESS.phone}</a> or use our <Link href="/free-yard-assessment" className="text-brand-700 hover:underline">contact form</Link> for a free quote specific to your venue. See our <Link href="/mosquito-control-pricing" className="text-brand-700 hover:underline">full pricing page</Link> for more details.</p>

          <h2>Related Services</h2>
          <ul>
            <li><Link href="/commercial-mosquito-control" className="text-brand-700 hover:underline">Commercial Mosquito Control</Link> &mdash; for venues and event spaces with ongoing programs</li>
            <li><Link href="/mosquito-control" className="text-brand-700 hover:underline">Residential Mosquito Control</Link> &mdash; for backyard weddings and home celebrations</li>
            <li><Link href="/tick-control" className="text-brand-700 hover:underline">Tick Control</Link> &mdash; add tick treatment for venues near wooded areas</li>
            <li><Link href="/service-areas" className="text-brand-700 hover:underline">Service Areas</Link> &mdash; see all 19+ GTA cities we serve</li>
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
              { author: 'Mike T.', text: 'Second year using BuzzSkito for the season package. Consistent, reliable, and actually works. Our backyard used to be unbearable by July \u2014 now we\u2019re out there every evening.' },
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

      {/* FAQ */}
      <section className="py-10 px-4 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">Wedding &amp; Event Mosquito Control FAQ</h2>
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

      <CTASection heading="Book Mosquito Control for Your Event" subtext="Treat your venue 24-48 hours before the big day. Health Canada-approved, safe for guests. Free quotes." />
    </>
  )
}
