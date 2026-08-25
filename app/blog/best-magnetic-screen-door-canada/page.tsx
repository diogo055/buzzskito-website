import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import BuyLink from '@/components/BuyLink'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import AwardRow from '@/components/AwardRow'
import StickyBuyBar from '@/components/StickyBuyBar'
import FreshnessStamp from '@/components/FreshnessStamp'
import AuthorByline from '@/components/AuthorByline'
import CTASection from '@/components/CTASection'
import { tagForSlug } from '@/lib/amazon-clusters'

const SLUG = 'best-magnetic-screen-door-canada'
const DATE = '2026-07-30'
const UPDATED = '2026-07-30'
// NOTE: no <SpecialistDisclosure> on this page. That component states BuzzSkito
// does NOT treat the pest in question — true for every adjacent-pest guide, and
// false here: a magnetic screen door is a mosquito barrier and mosquitoes are the
// licensed service. The disclosed-bias box below replaces it, and states the
// commercial interest plainly instead of claiming a distance that doesn't exist.
// Sibling page /blog/mosquito-screens-patio-canada is the "which TYPE of screen"
// comparison; this page is the single-product depth (sizing, mesh, mounting).
const TITLE = 'Best Magnetic Screen Door in Canada — How to Size It, Which Mesh to Buy, and Why Most of Them Fail at the Top'
const META_TITLE = 'Magnetic Screen Doors Canada: Sizing and Mesh'

const FAQS = [
  {
    question: 'What size magnetic screen door do I need?',
    answer: 'Measure the door frame opening, not the door itself, and buy a screen at or slightly above that size. This is the single most common ordering mistake. The mesh panels are meant to hang over the front of the frame and overlap its edges, with the hook-and-loop strip running along the trim — so a curtain that exactly matches the door slab will end up narrower than the opening and leave gaps at both sides. Measure the width and the height of the opening at the widest and tallest points, write both numbers down, and pick the listed size that is equal to or a little larger. Excess width is trimmable or simply hangs; a shortfall of even a couple of centimetres is a permanent gap that mosquitoes will find within a day.',
  },
  {
    question: 'Do magnetic screen doors actually keep mosquitoes out?',
    answer: 'Yes, for the specific job of a doorway people walk through — that is all they are. A magnetic screen door is a split mesh curtain with a line of magnets down the centre seam, so you pass through hands-free carrying a tray and the seam snaps closed behind you, instead of a patio door standing open for twenty seconds while everyone files in. Whether it performs depends almost entirely on installation, not brand: a curtain that seals across the top and along both sides works, and one whose top hem has peeled away from the trim is a decorative mesh with a gap over it. It is also strictly a barrier for the opening. It does nothing about mosquitoes in the yard itself, and nothing for ticks.',
  },
  {
    question: 'Will a magnetic screen door keep out no-see-ums and black flies?',
    answer: 'Not the standard mesh, no. Ordinary fibreglass insect mesh — the same weave used on most window and patio screens — reliably blocks mosquitoes and house flies, but no-see-ums (biting midges) and black flies are small enough to pass straight through it. If you are near water, a marsh, a river, or in Ontario cottage country where midges are the real problem, look specifically for a curtain sold with no-see-um mesh, which is a noticeably tighter weave. The trade-offs are honest ones: finer mesh cuts airflow, dims the view, and shows dirt sooner. For a typical suburban GTA back door, standard mesh is enough; near the lake, it is not.',
  },
  {
    question: 'Why does my magnetic screen door keep falling down?',
    answer: 'Almost always the top hem, and almost always a surface problem rather than a product problem. These curtains hang from adhesive-backed hook-and-loop tape, and that adhesive needs a clean, dry, non-dusty, non-chalky surface at a reasonable temperature to bond. Wipe the trim with isopropyl alcohol and let it dry fully before you stick anything to it. Use every push pin that came in the box — into wood trim they are not optional, they carry the load that the tape alone will eventually lose. Do not install on a cold day, because the adhesive will not tack below roughly ten degrees. And be aware that vinyl, aluminium-clad, freshly painted, or textured frames hold adhesive poorly; on those, screwing or pinning a thin wood strip to the trim first and mounting to that is the fix that lasts.',
  },
  {
    question: 'Do magnetic screen doors work on sliding patio doors?',
    answer: 'Yes, with one sizing subtlety that catches people out. On a slider, the opening you need to cover is the part you actually walk through — the gap left when the moving panel is pushed fully open — not the whole glass assembly including the fixed panel. Measure that walk-through opening, then mount the curtain on the exterior trim so the panels overlap it. Two practical notes: many sliders already have a factory screen panel in a track, and if yours is intact you may not need a curtain at all, only new mesh in the existing frame. And on a slider you generally want to keep the glass panel fully open behind the curtain, because a half-open door leaves the curtain hanging over a solid surface it cannot seal against.',
  },
  {
    question: 'Will a magnetic screen door hold up to a dog?',
    answer: 'Partly, and you should set expectations before you buy. Dogs and cats learn the centre seam quickly, which is a feature — most pets will push through hands-free within a few days — but repeated nosing and clawing at the same spot stretches the seam and eventually leaves a magnet section that no longer closes cleanly. Heavier mesh and a denser line of magnets extend the life considerably, and pet-oriented versions with reinforced lower panels exist for exactly this. If you have a large dog that charges the door, treat a magnetic curtain as a consumable that will need replacing more often than in a pet-free household, or step up to a proper hinged or retractable screen door with a pet flap.',
  },
  {
    question: 'Should I buy a magnetic screen door or repair my existing screen?',
    answer: 'If your existing screen door or slider screen is structurally sound and just has a hole or a sagging patch of mesh, repair it — that is genuinely the cheaper and better outcome, and we would rather say so. A screen repair kit is a roll of replacement mesh, a length of rubber spline, and a spline roller, and rescreening a frame is a fifteen-minute job that anyone can do on a picnic table. A magnetic curtain is the right buy when there is no screen at all, when the existing screen door is broken beyond a rescreen, when you rent and cannot modify the building, or when you want hands-free passage through a door you carry things through constantly. Buying a curtain to hang in front of a perfectly good screen door is redundant.',
  },
  {
    question: 'Can I leave a magnetic screen door up all winter in Canada?',
    answer: 'You can, but it will cost you the screen. UV exposure degrades the mesh and the stitching over a season, freeze-thaw cycles work at the adhesive bond, and wind on a stiff frozen curtain pulls at exactly the top hem that was already the weak point. Take it down in the fall, fold it loosely rather than creasing it into a hard fold that will not hang flat next spring, and store it dry and indoors. You can leave the hook-and-loop strip on the trim over winter if you like, though a fresh strip in spring is a small price for a curtain that stays up. In Canada that also means the honest buying window is spring — this is a product you install in May and take down in October.',
  },
  {
    question: 'What should I look for when comparing magnetic screen doors?',
    answer: 'Four things, roughly in order of how much they matter. First, the magnet line: how many magnets and how far down toward the floor they run, because the seam only self-closes where there are magnets and the bottom is where gaps appear. Second, the mesh weight and weave — heavier mesh survives pets and wind, and a fine no-see-um weave is a separate decision from durability. Third, the mounting kit: full-length hook-and-loop for both sides and the top, plus enough push pins to actually carry the load. Fourth, a weighted or magnet-loaded bottom hem, which is what stops the panels blowing apart and gaping in a breeze. Brand names change constantly on marketplaces; those four features do not.',
  },
  {
    question: 'Does a magnetic screen door help with mosquitoes in the yard?',
    answer: 'No, and being clear about that is more useful than a sales pitch. A screen protects the space it encloses — in this case, one doorway. It stops mosquitoes streaming into the house behind you, which is a real and specific win if your evenings involve carrying food in and out. It does absolutely nothing about mosquitoes on the deck, on the lawn, around the pool, or on the walk to the shed, and it does nothing for ticks, which live in grass and leaf litter and never approach a door. If the actual problem is that the yard is unusable in June and July, the doorway is not the thing to spend money on. We run a mosquito and tick service in the GTA, so treat that as a disclosed interest and judge the reasoning on its own.',
  },
  {
    question: 'Is a retractable screen door worth it instead?',
    answer: 'For a high-traffic main door that you use every day for years, often yes. A retractable screen mounts in a cassette on the door frame and pulls across on a track, then rolls away out of sight and out of the weather when you do not want it — which removes the two things that kill magnetic curtains, namely UV exposure all season and an adhesive top hem. It costs meaningfully more, and it usually wants a square, sound frame and either a careful DIY installation or a trade. The straight comparison is: a magnetic curtain is the cheap, renter-friendly, no-modification option that you replace every couple of seasons, and a retractable screen is the fitted upgrade you buy once for the door you use most.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'Magnetic screen doors in Canada: how to measure the frame so it actually seals, standard vs no-see-um mesh, and the mounting failure that kills most of them.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug(SLUG)

export default function BestMagneticScreenDoorCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Independent Canadian buyer’s guide to magnetic screen doors: how to measure a frame opening so the curtain actually seals, standard fibreglass mesh versus no-see-um weave, magnet count and bottom-hem gaping, the adhesive and push-pin mounting failures that account for most complaints, sliding and French door fitment, pets, winter storage, and when rescreening an existing door or fitting a retractable screen is the better buy.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Best Magnetic Screen Door in Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Magnetic Screen Doors</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">Almost every bad review of a magnetic screen door is a sizing or mounting problem wearing a product&rsquo;s name. Measure the frame opening rather than the door, mount it properly, and pick the right mesh for your bugs &mdash; and it does the one job it is actually for.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <AffiliateDisclosure />
      <StickyBuyBar tag={AMZ_TAG} name="Heavy-duty magnetic screen door with a full magnet line" search="magnetic screen door heavy duty mesh" label="Best overall" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">Buy a magnetic screen door by measuring the <strong>frame opening</strong> &mdash; not the door slab &mdash; and choosing a curtain equal to or slightly larger than that, so the mesh overlaps the trim rather than sitting inside it. Then judge products on four features: how many magnets and how far down they run, the mesh weight and weave, whether the mounting kit includes full-length hook-and-loop plus enough push pins, and whether the bottom hem is weighted. Standard mesh stops mosquitoes and house flies; you need a finer no-see-um weave for biting midges and black flies.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li><strong>Measure the opening, not the door.</strong> Too small is a permanent gap; slightly too large just hangs.</li>
              <li><strong>The top hem is where they fail.</strong> Wipe the trim with alcohol, install above about 10&deg;C, and use every push pin in the box.</li>
              <li><strong>Magnets low down matter most</strong> &mdash; the bottom of the seam is where the gap opens in a breeze.</li>
              <li><strong>Near water or in cottage country?</strong> Standard mesh will not stop no-see-ums. Buy the fine weave.</li>
              <li><strong>Already have a screen with a hole in it?</strong> A spline roller and a roll of mesh is the cheaper, better fix.</li>
              <li><strong>It protects one doorway.</strong> It does nothing for mosquitoes in the yard, and nothing at all for ticks.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito Pest Product Guides &middot; independent Canadian research</p>
          </div>

          <div className="not-prose my-6 rounded-xl border border-brand-200 bg-brand-50 px-5 py-4">
            <p className="text-sm leading-relaxed text-brand-900">
              <strong>Where our interest lies, stated plainly:</strong> BuzzSkito is a licensed <strong>mosquito &amp; tick control</strong> company operating across 19 GTA cities, so unlike most pest guides this one is written by a business with something to sell in the same category. That cuts both ways and you should know it. A magnetic screen door competes with nothing we do &mdash; it protects a doorway, we treat yards &mdash; and where this page says a screen is the wrong purchase for your problem, or that repairing the screen you already own beats buying anything, that is the recommendation regardless of what it does for us.
            </p>
          </div>

          <div className="not-prose rounded-xl border-l-4 border-brand-500 bg-brand-50 p-5 mb-6">
            <p className="text-xs font-extrabold uppercase tracking-wider text-brand-700 mb-2">Two pages, two jobs</p>
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong>This page is the doorway.</strong> Sizing, mesh grade, magnet lines, mounting, pets, and when to buy something else entirely.
              <br className="hidden sm:block" />
              <strong className="block mt-2">Still deciding what kind of screen you need?</strong> If the question is really &ldquo;screen house, gazebo, curtain panels, window kit or door curtain,&rdquo; start with <Link href="/blog/mosquito-screens-patio-canada" className="text-emerald-700 underline font-semibold">mosquito screens for your patio</Link>, which compares the five formats side by side. Come back here once the answer is a door.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Decision Table</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">Pick in 60 Seconds: Your Door &rarr; What to Buy</h2>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm">
            <table className="min-w-[560px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Your situation</th>
                  <th className="px-4 py-3 text-left">Buy this</th>
                  <th className="px-4 py-3 text-left">Do not buy</th>
                  <th className="px-4 py-3 text-left">Get it</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Standard back or side door, no screen at all</td>
                  <td className="px-4 py-3 text-gray-700">A heavy-mesh curtain with a full magnet line and a weighted bottom hem</td>
                  <td className="px-4 py-3 text-gray-700">The thinnest option in the listing</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="magnetic screen door heavy duty mesh" block>Heavy-duty curtain &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Sliding patio door with no factory screen</td>
                  <td className="px-4 py-3 text-gray-700">A curtain sized to the walk-through opening, not to the whole glass assembly</td>
                  <td className="px-4 py-3 text-gray-700">A standard door size, guessed</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="magnetic screen door sliding patio door large" block>Slider size &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Near a lake, marsh, river or in cottage country</td>
                  <td className="px-4 py-3 text-gray-700">A no-see-um weave &mdash; standard mesh lets biting midges and black flies through</td>
                  <td className="px-4 py-3 text-gray-700">Standard fibreglass mesh</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="no see um mesh screen door fine mesh" block>Fine mesh &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">You already have a screen door with a hole in it</td>
                  <td className="px-4 py-3 text-gray-700">A spline roller and replacement mesh. Rescreening is a fifteen-minute job</td>
                  <td className="px-4 py-3 text-gray-700">A curtain to hang in front of it</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="window screen repair kit spline roller mesh" block>Repair kit &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Main door, used constantly, want it to last years</td>
                  <td className="px-4 py-3 text-gray-700">A retractable screen in a cassette &mdash; it rolls away out of the sun and weather</td>
                  <td className="px-4 py-3 text-gray-700">A third replacement curtain</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="retractable screen door" block>Retractable &rarr;</BuyLink></td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">The yard is unusable, not just the doorway</td>
                  <td className="px-4 py-3 text-gray-700">Nothing on this page fixes that &mdash; a screen only protects what it encloses</td>
                  <td className="px-4 py-3 text-gray-700">A screen, expecting yard relief</td>
                  <td className="px-4 py-3 text-xs text-gray-400">See the yard section below</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <AwardRow tag={AMZ_TAG}
            heading="Our Picks — Magnetic Screen Doors and the Alternatives Worth Considering"
            awards={[
              {
                badge: 'Best Overall',
                name: 'Heavy-Mesh Magnetic Screen Door with a Full Magnet Line',
                why: 'The version worth buying has three things the bargain version does not: heavier mesh that survives a season of wind and pets, a magnet line that runs far enough down toward the floor that the seam actually closes at the bottom, and a mounting kit with full-length hook-and-loop for the top and both sides plus enough push pins to carry the load. Those three features, not the brand on the packet, decide whether it is still hanging in August.',
                search: 'magnetic screen door heavy duty mesh',
                featured: true,
                pros: ['Hands-free passage — the reason to buy one at all', 'No tools, no drilling, renter- and landlord-friendly', 'Nothing to plug in, no chemistry, nothing to reapply'],
                cons: ['Adhesive top hem is a genuine weak point in heat and wind', 'A seasonal item in Canada — down in fall, up in spring'],
              },
              {
                badge: 'Best for Sliding Doors',
                name: 'Oversized Curtain Sized to the Walk-Through Opening',
                why: 'Sliders are where sizing goes wrong. The opening to cover is the gap the moving panel leaves when pushed fully open, not the width of the whole glass assembly including the fixed panel. Measure that, buy at or just above it, mount on the exterior trim, and keep the glass panel fully open behind it so the curtain is not trying to seal against a solid surface.',
                search: 'magnetic screen door sliding patio door large',
                pros: ['Covers the one opening most Canadian homes actually use in summer', 'Works where a factory screen panel is missing or beyond repair', 'Hands-free with a tray, which is the whole point on a patio door'],
                cons: ['Wide spans catch more wind — the bottom hem weight matters more', 'Redundant if your factory screen panel is intact'],
              },
              {
                badge: 'Best Near Water',
                name: 'No-See-Um Fine-Mesh Screen Curtain',
                why: 'Standard fibreglass insect mesh blocks mosquitoes and house flies and lets no-see-ums and black flies straight through, which is why a lakeside or cottage-country install so often feels like it failed. A no-see-um weave is a tighter mesh built for exactly that gap. Buy it deliberately: it is a different purchase, not an upgrade tier.',
                search: 'no see um mesh screen door fine mesh',
                pros: ['Blocks the small biters standard mesh cannot', 'The right call anywhere near a lake, marsh, river or ravine'],
                cons: ['Noticeably less airflow and a dimmer view', 'Shows dust and pollen sooner'],
              },
              {
                badge: 'Cheaper and Often Better',
                name: 'Screen Repair Kit (Replacement Mesh + Spline + Roller)',
                why: 'The purchase we would rather you make when it applies. If your existing screen door or slider screen panel is sound and simply has a tear, rescreening it on a picnic table takes about fifteen minutes with a roll of mesh, a length of rubber spline and a spline roller — and it leaves you with a proper framed screen rather than a curtain to replace in two years.',
                search: 'window screen repair kit spline roller mesh',
                pros: ['Restores a real framed screen for very little', 'One kit does several windows and doors', 'No adhesive, no seasonal removal, no sagging hem'],
                cons: ['Only helps if you already own a sound frame', 'Not hands-free — you still open and close a door'],
              },
              {
                badge: 'Best Permanent Upgrade',
                name: 'Retractable Screen Door in a Cassette',
                why: 'For the door you actually use every day, this is the buy-once answer. The mesh rolls into a housing on the frame when it is not in use, which removes the two things that kill magnetic curtains — a full season of UV and an adhesive hem holding up the weight. It costs meaningfully more and it wants a square, sound frame and a careful installation.',
                search: 'retractable screen door',
                pros: ['Out of the sun and weather when not in use — much longer life', 'No hanging curtain, no seasonal take-down', 'Looks like part of the house rather than a hack'],
                cons: ['Real installation, and a fussy one on an out-of-square frame', 'The premium option here by a wide margin'],
              },
            ]}
            whichToBuy={
              <>
                <strong>No screen on a normal hinged door?</strong> The <em>Best Overall</em> heavy-mesh curtain, sized to the frame opening. <strong>Patio slider?</strong> Measure the walk-through gap and buy the <em>Best for Sliding Doors</em> size &mdash; this is where most returns come from. <strong>Cottage, lakefront, or a ravine lot?</strong> Go straight to the <em>Best Near Water</em> fine weave, and see our guides to <Link href="/blog/no-see-ums-biting-midges-ontario">no-see-ums in Ontario</Link> and <Link href="/blog/black-flies-ontario-when-they-come-out">black fly season</Link> for what you are actually up against. <strong>Existing screen with a hole?</strong> The <em>Cheaper and Often Better</em> repair kit, and keep your money. <strong>High-traffic main door?</strong> The <em>Best Permanent Upgrade</em> retractable screen is the one you buy once instead of three times.
              </>
            }
          />
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Magnetic Screen Doors &mdash; Quick Reference</h2>
          <div className="rounded-xl border border-navy-100 overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['What to measure', 'The frame OPENING — width and height at the widest and tallest points'],
                  ['What not to measure', 'The door slab. A curtain matched to the door will be narrower than the opening'],
                  ['If between sizes', 'Go up. Excess hangs or trims; a shortfall is a permanent gap'],
                  ['Number one failure', 'The adhesive top hem peeling off the trim'],
                  ['Fix for that', 'Alcohol-wipe the trim, install above about 10°C, and use every push pin supplied'],
                  ['Frames adhesive struggles with', 'Vinyl, aluminium-clad, freshly painted, textured, brick or stucco surrounds'],
                  ['Workaround for those', 'Fasten a thin wood strip to the trim and mount the hook-and-loop to that'],
                  ['Feature that matters most', 'Magnet count and how far down the seam they run — the bottom is where gaps open'],
                  ['Second most', 'A weighted or magnet-loaded bottom hem, so the panels do not gape in a breeze'],
                  ['Standard mesh blocks', 'Mosquitoes and house flies'],
                  ['Standard mesh does NOT block', 'No-see-ums (biting midges) and black flies — buy a no-see-um weave for those'],
                  ['Sliding doors', 'Size to the walk-through gap, and keep the glass panel fully open behind it'],
                  ['French doors', 'Use a version whose seam sits centred on the pair, not offset to one leaf'],
                  ['Outward-opening doors', 'Generally the wrong product — the door swings into where the curtain hangs'],
                  ['Pets', 'They learn the seam in days, then stretch it. Heavier mesh and more magnets buy time'],
                  ['Canadian season', 'Up in May, down in October. UV and freeze-thaw destroy one left out all year'],
                  ['What it does not do', 'Anything for mosquitoes in the yard, and nothing at all for ticks'],
                ].map(([k, v]) => (
                  <tr key={k} className="border-b border-navy-50 last:border-0">
                    <td className="px-4 py-2 font-semibold text-brand-800 bg-brand-50 w-1/3">{k}</td>
                    <td className="px-4 py-2 text-gray-700">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />

          <h2>What a Magnetic Screen Door Is For &mdash; and What It Is Not For</h2>
          <p>A magnetic screen door is a split mesh curtain hung over the outside of a doorway, with a line of magnets running down the centre seam. You walk into it, the panels part, and the magnets pull the seam shut behind you. That is the entire mechanism, and it solves one very specific problem: <strong>a door that stands open while people carry things through it.</strong></p>
          <p>That problem is worth solving. On a summer evening a patio door gets opened dozens of times, and each time it stands open for ten or twenty seconds with the interior lights on behind it. A curtain turns that into a sealed opening you can pass through with a tray in both hands. Nothing else in the category does that, and it is why the product exists rather than a hinged screen door.</p>
          <p>What it is not is a solution to mosquitoes. It is a solution to mosquitoes <em>coming inside through that door</em>. It does nothing for the deck, the lawn, the pool, the walk to the shed, or the hour you actually wanted to spend outside &mdash; and it does nothing at all for ticks, which live in grass and leaf litter and never approach a doorway. Every honest screen guide has to make that distinction up front, because a household buying a curtain to fix an unusable yard is going to be disappointed by a product that worked exactly as designed.</p>

          <p className="not-prose text-sm text-gray-600 mb-1">Check current Canadian availability:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="magnetic screen door heavy duty mesh">Heavy-duty curtain &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="no see um mesh screen door fine mesh">No-see-um mesh &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="window screen repair kit spline roller mesh">Screen repair kit &rarr;</BuyLink>
          </div>

          <h2>Sizing: Measure the Opening, Not the Door</h2>
          <p>This is the single most common ordering error, and it produces most of the one-star reviews in the category. The mesh panels are designed to hang <em>over the front of the frame</em> and overlap its edges, with the hook-and-loop strip attached to the trim around the opening. A curtain matched to the door slab therefore ends up narrower than the opening it is meant to cover, leaving a gap down each side that mosquitoes find within a day.</p>
          <p>Do it this way. Open the door fully and measure the width of the opening between the inside faces of the frame, at the top, middle and bottom, and take the largest number &mdash; older Canadian houses are rarely square. Measure the height the same way, floor or threshold to the underside of the head trim, at both sides. Then buy the listed size that is <strong>equal to or slightly larger</strong> than those numbers. Extra width hangs harmlessly at the sides or can be trimmed and re-hemmed; extra height puddles slightly at the floor, which is generally fine and sometimes helpful. A shortfall of even a couple of centimetres, in either direction, is a permanent gap that no amount of adjustment closes.</p>
          <p>Three special cases worth calling out. On a <strong>sliding patio door</strong>, the opening is the gap the moving panel leaves when pushed fully open, not the width of the whole glass assembly &mdash; measuring the assembly is how people end up with a curtain nearly twice the width they needed. On a <strong>French or double door</strong>, you want a version whose seam sits centred on the pair, so that the natural walk-through line and the magnet line agree. And on an <strong>outward-opening door</strong>, a magnetic curtain is usually the wrong product entirely, because the door swings into the space the curtain occupies.</p>

          <h2>Mounting: Where They Actually Fail</h2>
          <p>Read enough complaints about magnetic screen doors and a pattern emerges: it is almost never the magnets and almost never the mesh. It is the top hem coming away from the trim, and that is a surface-preparation problem rather than a product defect.</p>
          <p>The curtain hangs from adhesive-backed hook-and-loop tape, and that adhesive needs four things to bond properly. <strong>A clean surface</strong> &mdash; wipe the trim with isopropyl alcohol and let it dry completely, because dust, pollen, cobwebs and the chalky bloom on old paint all defeat it. <strong>A dry surface</strong>, which in practice means not the morning after rain. <strong>Temperature</strong> &mdash; most pressure-sensitive adhesives will not tack below roughly ten degrees, so a keen April install on a cold day is one that peels in May. And <strong>mechanical backup</strong>: use every push pin that came in the box, driven through the tape into wood trim. The pins are not decoration; they carry the load the tape will eventually surrender, particularly at the top corners where wind loads concentrate.</p>
          <p>Some frames simply will not hold adhesive well: vinyl, aluminium-clad, freshly painted, heavily textured, or a brick or stucco surround with no wood trim at all. The reliable workaround is to fasten a thin wood strip around the opening first and mount the hook-and-loop to that. It takes twenty minutes and it converts an annual frustration into a curtain that stays up.</p>
          <p>One more mounting note that costs nothing: hang the curtain so it clears the floor by a whisker rather than dragging, and let the bottom hem sit against the threshold. A curtain hemmed too high leaves a permanent gap at ankle level, which is exactly where mosquitoes drift in.</p>

          <h2>Magnets, Mesh and Hems: The Three Specs That Decide Everything</h2>
          <p><strong>The magnet line.</strong> The seam self-closes only where there are magnets, so both the number of magnets and how far down toward the floor they run matter more than any other spec. Curtains that gape at the bottom are curtains whose magnet line stopped at knee height. If a listing shows the magnet placement, look for a line that continues into the lower third.</p>
          <p><strong>The mesh.</strong> Two separate decisions live here and they get conflated. The first is <em>weight</em>: heavier mesh survives wind, pets, and a season of being pushed through. The second is <em>weave</em>: standard fibreglass insect mesh, the same grade used on most window and patio screens, reliably stops mosquitoes and house flies, and does not stop no-see-ums or black flies, which pass straight through. If you are near a lake, a marsh, a river, or in cottage country, buy a no-see-um weave deliberately, and accept the honest costs &mdash; less airflow, a dimmer view, and dirt showing sooner. For a typical suburban GTA back door where mosquitoes are the problem, standard mesh is sufficient.</p>
          <p><strong>The bottom hem.</strong> A weighted or magnet-loaded bottom hem is what keeps the panels hanging straight and stops them blowing apart in a breeze. On a wide slider opening this matters considerably more than it does on a narrow side door, because a wide span catches far more wind.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="magnetic screen door heavy duty mesh">Check heavy-duty magnetic screen doors on Amazon.ca &rarr;</BuyLink>
          </div>

          <h2>Pets, Children, and the Realistic Lifespan</h2>
          <p>Dogs and cats work out the centre seam within days, which is genuinely part of the appeal &mdash; the animal lets itself in and out without a door being left open. The cost is that repeated nosing and clawing at the same point stretches the seam, and eventually a section stops closing cleanly. Heavier mesh and a denser magnet line extend that considerably, and pet-oriented versions with reinforced lower panels exist. If you have a large dog that charges the door, budget for a curtain as a consumable rather than a fixture, or move up to a hinged or retractable screen with a proper pet flap.</p>
          <p>Children are a smaller problem than people expect, provided the magnets are strong enough to close behind someone moving quickly. A weak magnet line and a running six-year-old leave the seam half open for a minute at a time, which is a mosquito door rather than a mosquito screen.</p>
          <p>On lifespan generally: treat a magnetic curtain as a seasonal Canadian item. Put it up in spring, take it down in the fall, fold it loosely rather than creasing it hard, and store it dry indoors. Leaving one up through a Canadian winter puts UV, freeze-thaw, and wind on a stiff frozen panel to work on the adhesive and stitching, and the thing that goes first is the top hem that was already carrying all the load.</p>

          <h2>The Cheaper Answer We Would Rather You Take</h2>
          <p>If you already have a screen door, or a slider with a factory screen panel in its track, and the only problem is a hole or a sagging patch of mesh &mdash; repair it. A screen repair kit is a roll of replacement mesh, a length of rubber spline, and a spline roller, and rescreening a frame on a picnic table takes about fifteen minutes with no particular skill. You end up with a proper framed screen, which is a better product than a curtain in every respect except hands-free passage, and there is nothing to take down in October.</p>
          <p>The genuine cases for buying a curtain instead are: there is no screen on that doorway at all; the existing screen door is broken beyond a rescreen; you rent and cannot modify the building; or you want hands-free passage on a door you carry things through constantly. Hanging a curtain in front of a perfectly good screen door is redundant, and we would rather say that than sell you one.</p>
          <p>At the other end, if this is the door your household uses every single day, a <strong>retractable screen</strong> in a cassette is the buy-once option: the mesh rolls out of the sun and the weather when it is not in use, which removes both of the failure modes above. It costs meaningfully more, it wants a square and sound frame, and it is a real installation &mdash; but for a main entrance it usually outlasts three curtains.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="window screen repair kit spline roller mesh">Check screen repair kits on Amazon.ca &rarr;</BuyLink>
          </div>

          <h2>Installation Checklist</h2>
          <ul>
            <li>Measure the frame <strong>opening</strong> &mdash; width and height, at the widest and tallest points. Write both down.</li>
            <li>Buy at or slightly above those numbers. Never below.</li>
            <li>Wipe the trim with isopropyl alcohol; let it dry fully. Skip this and you will redo the job in June.</li>
            <li>Install on a day above roughly ten degrees, out of direct blazing sun.</li>
            <li>Tape across the top first, then down both sides, keeping the panels hanging plumb.</li>
            <li>Drive every supplied push pin, concentrating on the top corners.</li>
            <li>Check the seam closes fully from top to bottom. If it gapes low down, the magnet line is short &mdash; that is a product limit, not an adjustment.</li>
            <li>Set the hem so it just clears the floor. A high hem is an ankle-height gap.</li>
            <li>Take it down in October, fold loosely, store dry.</li>
          </ul>

          <h2>What Not to Buy for This Job</h2>
          <ul>
            <li><strong>A curtain to hang in front of a working screen door.</strong> Rescreen the one you own.</li>
            <li><strong>The thinnest mesh in the listing,</strong> if you have pets, wind, or a wide slider. It is the part that fails.</li>
            <li><strong>Standard mesh for a lakefront or cottage property.</strong> Wrong weave for the insects you actually have.</li>
            <li><strong>Ultrasonic plug-in repellers,</strong> sold alongside screens as a &ldquo;bug barrier.&rdquo; We took that category apart in our <Link href="/blog/ultrasonic-pest-repellers-do-they-work">ultrasonic pest repeller review</Link>.</li>
            <li><strong>A bug zapper for the porch.</strong> It draws insects toward the doorway and kills mostly harmless moths and beetles &mdash; see <Link href="/blog/bug-zappers-canada-do-they-work">do bug zappers work in Canada</Link>.</li>
            <li><strong>Any screen at all,</strong> if the real problem is that the yard is unusable. That is the next section.</li>
          </ul>

          <h2>If the Problem Is the Yard, Not the Doorway</h2>
          <p>Here is the boundary of this product, stated as plainly as we can manage given that we sell the alternative. A screen protects the space it encloses. A magnetic screen door encloses one opening, roughly a metre wide. If your complaint is &ldquo;mosquitoes get into the house every time we come in from the deck,&rdquo; a curtain is a genuinely good, cheap fix and you can stop reading. If your complaint is &ldquo;we cannot sit on the deck at all after seven o&rsquo;clock,&rdquo; no screen door addresses that, and a screen house or gazebo only addresses the square metres under it.</p>
          <p>Yard-scale mosquito pressure is a habitat and treatment problem: standing water removed, dense shaded vegetation where adults rest during the day, and &mdash; if you want the whole property usable rather than one netted zone &mdash; barrier treatment of that vegetation. Ticks are a separate matter again, and screens are irrelevant to them entirely. Our comparison of <Link href="/blog/mosquito-netting-vs-barrier-spray">netting versus barrier spray</Link> lays out where each one genuinely wins, and <Link href="/blog/how-to-prevent-mosquitoes-in-your-backyard">preventing mosquitoes in your backyard</Link> covers the free habitat work first, because that part costs nothing and we would rather you did it before hiring anyone.</p>
          <p>BuzzSkito is a mosquito and tick control company serving 19 GTA cities, which is exactly why the recommendation above is worth reading sceptically &mdash; and exactly why the rest of this page has been so specific about when a screen curtain is the right purchase and when a roll of mesh and a spline roller is.</p>

          <h2>Frequently Asked Questions</h2>
          <div className="not-prose space-y-4">
            {FAQS.map(({ question, answer }) => (
              <details key={question} className="group rounded-xl border border-navy-100 bg-white p-4">
                <summary className="cursor-pointer font-bold text-brand-900 list-none flex justify-between items-center gap-3">
                  {question}
                  <span className="text-emerald-600 group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                </summary>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed">{answer}</p>
              </details>
            ))}
          </div>

          <h2>Related Guides</h2>
          <ul>
            <li><strong>Not sure which kind of screen you need?</strong> <Link href="/blog/mosquito-screens-patio-canada">Mosquito Screens for Your Patio &mdash; Five Formats Compared</Link></li>
            <li><Link href="/blog/best-screen-tent-canada">Best Screen Tent in Canada &mdash; Pop-Up Screen Houses</Link></li>
            <li><Link href="/blog/best-gazebo-with-mosquito-net-canada">Best Gazebo with Mosquito Netting in Canada</Link></li>
            <li><Link href="/blog/mosquito-net-canada">Mosquito Netting in Canada &mdash; Mesh Grades and Where Each Works</Link></li>
            <li><Link href="/blog/no-see-ums-biting-midges-ontario">No-See-Ums and Biting Midges in Ontario</Link></li>
            <li><Link href="/blog/black-flies-ontario-when-they-come-out">Black Fly Season in Ontario &mdash; When They Come Out</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-mosquitoes-in-the-house">How to Get Rid of Mosquitoes Inside the House</Link></li>
            <li><Link href="/blog/mosquito-netting-vs-barrier-spray">Mosquito Netting vs Barrier Spray &mdash; What Each One Actually Covers</Link></li>
            <li><Link href="/blog/how-to-prevent-mosquitoes-in-your-backyard">How to Prevent Mosquitoes in Your Backyard &mdash; The Free Work First</Link></li>
          </ul>

          <div className="not-prose mt-10 rounded-xl border border-navy-100 bg-brand-50 px-5 py-4">
            <p className="text-sm text-brand-900">
              <Link href="/pest-product-guides" className="font-bold text-emerald-700 hover:text-emerald-800 underline">More independent Canadian pest product research &rarr;</Link>
            </p>
          </div>
        </div>
      </article>

      <CTASection
        heading="A Screen Protects a Doorway. We Treat the Whole Yard."
        subtext="If the deck is unusable rather than the kitchen, that is our actual job — licensed mosquito and tick control across 19 GTA cities. Free assessment, no obligation."
      />
    </>
  )
}
