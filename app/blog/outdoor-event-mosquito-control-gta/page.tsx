import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { NEW_BLOGS_3, MOSQUITO_BLOGS } from '@/lib/constants'

const POST = NEW_BLOGS_3[1]

export const metadata: Metadata = buildMetadata({
  title: 'Outdoor Event Mosquito Control GTA',
  description:
    'Book pre-event barrier spray for GTA backyard weddings, graduations, parties. One treatment keeps mosquitoes away 21–30 days. Timing guide.',
  canonical: `/blog/${POST.slug}`,
  type: 'article',
  publishedTime: POST.date,
})

const FAQS = [
  {
    question: 'How far in advance should I book a mosquito spray before my outdoor event?',
    answer:
      'Book at least 5–7 days before your event. The ideal timing is 3–5 days prior — this allows the barrier spray to fully bond to vegetation surfaces and reach peak residual effectiveness. Booking same-day is sometimes possible but not guaranteed; early scheduling means you have time to re-treat if heavy rain falls immediately after the application.',
  },
  {
    question: 'How long does a pre-event mosquito spray last?',
    answer:
      'Professional barrier spray provides 21–30 days of residual protection under normal conditions. A treatment applied on Tuesday will be at full effectiveness by Friday and remain active well past your weekend event. After heavy or sustained rainfall, some residual is lost but protection typically persists for 2–3 weeks.',
  },
  {
    question: 'Is the spray safe for wedding guests, children, and catered food?',
    answer:
      'BuzzSkito uses Health Canada–approved formulas that are safe for people and pets once dry — typically 30 minutes after application. For outdoor events with catering, we recommend treating the property at least 48 hours before food setup to ensure all surfaces are fully dry. Your guests will not smell or see any residue.',
  },
  {
    question: 'Does BuzzSkito treat commercial event venues in addition to residential backyards?',
    answer:
      'Yes. BuzzSkito provides pre-event mosquito spray for residential backyard events, commercial outdoor venues, golf courses, and corporate outdoor spaces across the GTA. Contact us at (289) 216-5030 to discuss larger venue requirements.',
  },
  {
    question: 'What if it rains after the treatment?',
    answer:
      "Light rain after the spray has dried (30+ minutes post-application) does not significantly reduce effectiveness. Heavy sustained rain within the first 30 minutes can reduce residual and may warrant a re-treat. BuzzSkito's guarantee covers re-treatment if mosquito activity returns within 21 days of any application.",
  },
]

export default function OutdoorEventMosquitoPage() {
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
              { name: 'Outdoor Event Mosquito Control GTA', url: `/blog/${POST.slug}` },
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
            <span className="text-white">Outdoor Event Mosquito Control GTA</span>
          </nav>
          <span className="bg-brand-800 text-brand-200 text-xs px-3 py-1 rounded-full mb-4 inline-block">Mosquito Control</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">{POST.title}</h1>
          <p className="text-brand-300 text-sm">
            Published {new Date(POST.date).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })} · By BuzzSkito
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12 prose-brand">
        <p className="text-lg text-gray-600 not-prose border-l-4 border-brand-400 pl-5 py-2 mb-8">
          You&apos;ve spent months planning your backyard wedding or party. The last thing you want is mosquitoes turning the evening into a disaster. A single professional barrier spray, timed correctly, will keep your guests comfortable for the entire event — and for weeks after. Here&apos;s exactly how it works.
        </p>

        <h2>Why GTA Outdoor Events and Mosquitoes Are a Real Problem</h2>
        <p>The GTA mosquito season runs from early May through late September. Peak biting activity occurs at dawn and dusk — which happen to coincide with cocktail hours, outdoor ceremony timings, and evening receptions. Properties in Mississauga, Oakville, Burlington, and anywhere near a ravine, creek, or conservation area face the most intense pressure.</p>
        <p>We&apos;ve treated backyards in Lorne Park hours before a wedding rehearsal dinner, sprayed Glen Abbey properties the week of graduation parties, and pre-treated commercial venues in Etobicoke before corporate outdoor events. The pattern is always the same: homeowners who plan ahead have completely mosquito-free events. Those who don&apos;t often spend the evening watching guests retreat inside by 8 pm.</p>

        <h2>How Pre-Event Barrier Spray Works</h2>
        <p>Professional barrier spray is applied to the foliage, fence lines, tree trunks, shaded lawn edges, and perimeter vegetation of your property — the places where mosquitoes rest during the day before they become active at dusk. The formula bonds to leaf surfaces and continues releasing a contact repellent for 21–30 days after application.</p>
        <p>Unlike the citronella candles and DEET sprays your guests would need to apply themselves, barrier spray treats the <em>environment</em> rather than individuals. It creates a chemical boundary around your property that mosquitoes actively avoid. For an outdoor event, this is the only method that provides whole-property protection without requiring any action from your guests.</p>

        <h2>The Right Timing: When to Book Your Pre-Event Treatment</h2>
        <div className="not-prose overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-brand-800 text-white">
                <th className="px-4 py-2 text-left">Timing Before Event</th>
                <th className="px-4 py-2 text-left">Outcome</th>
                <th className="px-4 py-2 text-left">Recommendation</th>
              </tr>
            </thead>
            <tbody>
              {[
                { timing: '7–10 days before', outcome: 'Full residual at peak effectiveness', rec: 'Ideal — provides buffer for re-treat if needed' },
                { timing: '3–5 days before', outcome: 'Spray fully dry, strong residual', rec: 'Best timing for most events' },
                { timing: '1–2 days before', outcome: 'Spray dry, good residual', rec: 'Acceptable — confirm dry time before décor setup' },
                { timing: 'Same day (morning)', outcome: 'Spray may still be drying', rec: 'Not recommended unless venue has full-sun exposure' },
              ].map(({ timing, outcome, rec }) => (
                <tr key={timing} className="border-b border-gray-200 even:bg-gray-50">
                  <td className="px-4 py-2 font-medium text-gray-800">{timing}</td>
                  <td className="px-4 py-2 text-gray-700">{outcome}</td>
                  <td className="px-4 py-2 text-brand-700 font-semibold">{rec}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>Types of GTA Outdoor Events That Benefit Most</h2>

        <h3>Backyard Weddings and Wedding Receptions</h3>
        <p>Evening receptions in Mississauga, Oakville, and Burlington are particularly vulnerable — lakefront and ravine properties draw mosquitoes from adjacent natural areas that no amount of personal repellent can address. A property treatment three to five days before the ceremony date is standard practice for couples hosting outdoor weddings in the GTA. We can treat in coordination with tent installation and catering setup.</p>

        <h3>Graduation and Summer Parties</h3>
        <p>Graduation parties in May and June land directly in peak mosquito season. New-build neighbourhoods in Brampton, Milton, and north Burlington — with retention pond systems nearby — face especially high pressure. Parents hosting grad parties consistently tell us the pre-treatment was the single best decision they made in the planning process.</p>

        <h3>Corporate Outdoor Events and Team Gatherings</h3>
        <p>Companies hosting outdoor team events, client barbecues, or off-site meetings in properties with significant green space around the GTA use pre-event treatments to ensure attendee comfort. BuzzSkito serves commercial properties and larger venues across the service area.</p>

        <h3>Cottage and Rural Property Events</h3>
        <p>Caledon, King City, Georgetown, and rural Halton Hills properties hosting summer events face heavy mosquito pressure from surrounding agricultural land, ponds, and creek systems. Rural event treatments often require a higher-density application to address the broader perimeter — call us with your property details for an accurate quote.</p>

        <h2>What to Tell Your Guests</h2>
        <p>After a BuzzSkito barrier spray, your property is safe for re-entry 30 minutes after application. By the time your event occurs (3–7 days post-treatment), there is no detectable residue on surfaces. You can honestly tell guests that you&apos;ve had the property professionally treated for mosquitoes and that no spray will be on surfaces — the treatment is entirely integrated into the vegetation, not on tables, chairs, or décor.</p>

        <h2>Combining Pre-Event Treatment with Your Seasonal Package</h2>
        <p>The most cost-effective approach for GTA homeowners who host regular outdoor events is a full seasonal package. Five treatments from May through September provide continuous protection — your summer parties, your everyday evenings, and your kids&apos; outdoor time are all covered without needing to schedule separate event treatments. The per-visit cost drops significantly when booked as a season, and the property stays consistently protected between visits.</p>
        <p>See our <Link href="/mosquito-control-cost" className="text-brand-700 underline">full Ontario pricing guide</Link> for package cost ranges.</p>

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
          <li><Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{MOSQUITO_BLOGS.pillar.title}</Link></li>
          <li><Link href="/mosquito-control-cost" className="text-brand-700 hover:underline">How Much Does Mosquito Control Cost in Ontario?</Link></li>
          <li><Link href="/blog/how-long-does-mosquito-spray-last" className="text-brand-700 hover:underline">How Long Does Mosquito Spray Last?</Link></li>
          <li><Link href="/blog/is-mosquito-spray-safe-kids-pets" className="text-brand-700 hover:underline">Is Professional Mosquito Spray Safe for Kids and Pets?</Link></li>
          <li><Link href="/mosquito-control" className="text-brand-700 hover:underline">View Our Mosquito Control Services</Link></li>
        </ul>
      </article>

      <CTASection
        heading="Book Your Pre-Event Mosquito Treatment"
        subtext="Serving Mississauga, Toronto, Brampton, Oakville, Burlington, Hamilton and the GTA. Call (289) 216-5030 — book early, events fill the calendar fast."
      />
    </>
  )
}
