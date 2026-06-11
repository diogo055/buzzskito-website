import { BUSINESS } from '@/lib/constants'

// Real Google reviews (verbatim from the BuzzSkito GBP, lightly capitalized
// for display). Geo-specific (Mississauga, Milton) — strong local social proof
// at the conversion moment. Add to high-value commercial pages.
const REVIEWS = [
  {
    name: 'Katharine M.',
    city: 'Mississauga',
    text: 'Fantastic experience with the mosquito control last summer! We’re re-signing for this season once again — we can finally enjoy our yard again in Mississauga.',
  },
  {
    name: 'Anthony',
    city: 'Milton',
    text: 'Highly recommend this company for mosquito control. I got my house in Milton serviced recently and loved the end result!',
  },
  {
    name: 'Matt Santos',
    city: 'Mississauga',
    text: 'I got my house serviced last summer and I’d highly recommend this service to anyone in the Mississauga area. Great job!',
  },
]

export default function ReviewQuotes({
  heading = 'What GTA homeowners are saying',
}: { heading?: string }) {
  return (
    <section className="py-14 px-4 bg-brand-50" aria-label="Customer reviews">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="star-shimmer text-amber-500 text-xl">★★★★★</span>
            <span className="font-extrabold text-brand-900">5.0</span>
            <span className="text-brand-600 text-sm">· 150+ verified Google reviews</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-900">{heading}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {REVIEWS.map((r) => (
            <div key={r.name} className="hover-lift bg-white rounded-2xl border border-brand-100 p-5 shadow-sm flex flex-col">
              <div className="text-amber-500 text-base mb-2">★★★★★</div>
              <p className="text-sm text-gray-700 leading-relaxed flex-1">&ldquo;{r.text}&rdquo;</p>
              <div className="mt-4 pt-3 border-t border-gray-100">
                <p className="text-sm font-bold text-brand-900">{r.name}</p>
                <p className="text-xs text-brand-600">{r.city}, ON · Verified Google review</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-7">
          <a
            href={BUSINESS.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-brand-700 font-bold hover:text-brand-900 text-sm"
          >
            Read all 150+ reviews on Google →
          </a>
        </div>
      </div>
    </section>
  )
}
