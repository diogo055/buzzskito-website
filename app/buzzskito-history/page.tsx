import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'About BuzzSkito | Ontario Mosquito & Tick Control Experts',
  description:
    'BuzzSkito has over 25 years of combined pest control expertise serving the GTA. Learn about our mission, team, and commitment to protecting Ontario families from mosquitoes and ticks.',
  canonical: '/buzzskito-history',
})

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'About BuzzSkito', url: '/buzzskito-history' }])) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex items-center gap-1">
            <Link href="/" className="hover:text-white">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white">About BuzzSkito</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Ontario's Trusted Mosquito &amp; Tick Control Experts</h1>
          <p className="text-xl text-brand-100 max-w-2xl">Over 25 years of combined pest control expertise. Serving GTA families from Mississauga to Hamilton.</p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-14 prose-brand">
        <h2>About BuzzSkito</h2>
        <p>
          BuzzSkito was founded with a single mission: to give Greater Toronto Area families their backyards back. Mosquitoes and ticks aren't just a nuisance — they carry serious diseases including West Nile Virus and Lyme disease. Our team brings over <strong>25 years of combined pest control expertise</strong> to every property we treat.
        </p>
        <p>
          We specialize exclusively in mosquito and tick barrier spray for residential properties. That focus makes us better — our technicians know exactly where mosquitoes breed, where ticks hide, and how to apply professional-grade treatments efficiently and safely.
        </p>

        <h2>Our Service Area</h2>
        <p>
          BuzzSkito serves residential homeowners across Southern Ontario's most populated communities:
        </p>
        <ul>
          <li><Link href="/mosquito-control-sauga" className="text-brand-700 hover:underline">Mississauga</Link> — our home base, serving all neighbourhoods from Port Credit to Meadowvale</li>
          <li><Link href="/toronto-mosquito-control" className="text-brand-700 hover:underline">Toronto</Link> — including High Park, Scarborough, Etobicoke, and North York</li>
          <li><Link href="/brampton-mosquito-control" className="text-brand-700 hover:underline">Brampton</Link> — including Castlemore, Mount Pleasant, and Fletcher's Meadow</li>
          <li><Link href="/oakville-mosquito-control" className="text-brand-700 hover:underline">Oakville</Link> — including Glen Abbey, Joshua Creek, and Bronte</li>
          <li><Link href="/burlington-mosquito-spray" className="text-brand-700 hover:underline">Burlington</Link> — including Alton Village, The Orchard, and Millcroft</li>
          <li><Link href="/hamilton-mosquito-control" className="text-brand-700 hover:underline">Hamilton</Link> — including Ancaster, Dundas, and Stoney Creek</li>
        </ul>

        <h2>What Sets Us Apart</h2>
        <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
          {[
            { icon: '🏅', title: 'Health Canada–Approved', desc: 'Every formula we use is certified safe for residential use in Ontario.' },
            { icon: '📝', title: 'No Contracts', desc: 'No lock-in, no cancellation fees. Book individual treatments or a full season package — your choice.' },
            { icon: '📱', title: 'SMS Alerts', desc: 'We text you before we arrive and send a complete service log after every visit.' },
            { icon: '🔄', title: '100% Satisfaction Guarantee', desc: 'If pests return within the protection window, we re-treat at no cost.' },
            { icon: '🌧️', title: 'Rain-Resistant Formula', desc: 'Rain within one hour of application? We\'ll come back and reapply for free.' },
            { icon: '🎁', title: 'Referral Program', desc: 'Refer a friend — you both get 20% off your first season. Ask us for details.' },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="bg-brand-50 rounded-xl p-5 border border-brand-100 flex gap-4">
              <span className="text-2xl shrink-0" aria-hidden="true">{icon}</span>
              <div>
                <div className="font-bold text-brand-900 mb-1">{title}</div>
                <div className="text-gray-600 text-sm">{desc}</div>
              </div>
            </div>
          ))}
        </div>

        <h2>Our Services</h2>
        <p>
          We offer two core services: <Link href="/mosquito-control" className="text-brand-700 hover:underline">mosquito control</Link> with up to 30 days of protection per treatment, and <Link href="/tick-control" className="text-brand-700 hover:underline">tick control</Link> with up to 30 days of protection. Most customers bundle both services for complete backyard protection.
        </p>
        <p>
          Our mosquito treatments are most effective as a seasonal program — five visits from May through September maintain continuous protection throughout peak season. Our tick treatments require just two seasonal applications (spring and late summer) to cover the full tick activity calendar in Ontario.
        </p>

        <h2>Contact BuzzSkito</h2>
        <p>
          Ready to reclaim your outdoor space? Call us at <a href={BUSINESS.phoneHref} className="text-brand-700 font-semibold hover:underline">{BUSINESS.phone}</a> or email <a href={`mailto:${BUSINESS.email}`} className="text-brand-700 hover:underline">{BUSINESS.email}</a>. We're available Monday–Friday 8am–6pm and Saturday 9am–4pm during the service season.
        </p>
      </article>

      <CTASection heading="Ready to Work with BuzzSkito?" subtext="Get a free quote and take back your backyard this season." />
    </>
  )
}
