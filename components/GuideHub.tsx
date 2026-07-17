import Link from 'next/link'
import type { ReactNode } from 'react'
import CTASection from '@/components/CTASection'
import SpecialistDisclosure from '@/components/SpecialistDisclosure'
import GuideCard from '@/components/GuideCard'

export type HubGuide = { href: string; title: string; blurb: string; tone?: 'default' | 'top' | 'skip' }
export type HubSection = { name: string; icon: string; intro: string; guides: HubGuide[] }

type Crumb = { name: string; href?: string }

export type GuideHubProps = {
  breadcrumb: Crumb[]
  badge?: string
  title: string
  subtitle: string
  heroStats?: { value: string; label: string }[]
  quickAnswer: { lead: ReactNode; bullets: ReactNode[]; attribution?: string }
  /** On-brand pages pass a service tie-in card. */
  serviceTieIn?: {
    heading: string
    body: ReactNode
    primaryHref: string
    primaryLabel: string
    secondaryHref: string
    secondaryLabel: string
  }
  /** Adjacent-pest pages pass the pest name → renders the specialist disclosure instead. */
  adjacentPest?: string
  howWeRank?: { title: string; body: ReactNode }
  sections: HubSection[]
  bottomLine?: { title: string; body: ReactNode }
  faqs: { question: string; answer: string }[]
  cta: { heading: string; subtext: string }
}

const anchor = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

export default function GuideHub(p: GuideHubProps) {
  const showJump = p.sections.length > 2

  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white">
        <div className="absolute inset-0 opacity-[0.07]" aria-hidden="true"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, #fff 1px, transparent 1px), radial-gradient(circle at 70% 60%, #fff 1px, transparent 1px)', backgroundSize: '46px 46px, 64px 64px' }} />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
          <nav aria-label="Breadcrumb" className="text-brand-300 text-sm mb-5 flex gap-1.5 flex-wrap">
            {p.breadcrumb.map((c, i) => (
              <span key={c.name} className="flex gap-1.5 items-center">
                {c.href ? <Link href={c.href} className="hover:text-white transition-colors">{c.name}</Link> : <span className="text-white">{c.name}</span>}
                {i < p.breadcrumb.length - 1 && <span className="text-brand-600">/</span>}
              </span>
            ))}
          </nav>
          {p.badge && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider px-3 py-1 mb-4">
              🛒 {p.badge}
            </span>
          )}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.08] max-w-4xl">{p.title}</h1>
          <p className="mt-4 text-lg sm:text-xl text-brand-100 max-w-3xl leading-relaxed">{p.subtitle}</p>
          {p.heroStats && p.heroStats.length > 0 && (
            <div className="mt-7 flex flex-wrap gap-3">
              {p.heroStats.map((s) => (
                <div key={s.label} className="rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 backdrop-blur-sm">
                  <div className="text-xl font-extrabold text-white leading-none">{s.value}</div>
                  <div className="text-[11px] uppercase tracking-wide text-brand-300 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Category jump nav ──────────────────────────────────────────── */}
      {showJump && (
        <nav aria-label="Jump to category" className="sticky top-0 z-20 border-b border-gray-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/75">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex gap-2 overflow-x-auto py-3 no-scrollbar">
              {p.sections.map((s) => (
                <a key={s.name} href={`#${anchor(s.name)}`}
                  className="shrink-0 inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3.5 py-1.5 text-sm font-medium text-brand-800 hover:border-emerald-300 hover:text-emerald-700 transition-colors">
                  <span aria-hidden="true">{s.icon}</span>{s.name}
                </a>
              ))}
            </div>
          </div>
        </nav>
      )}

      {/* ── Quick answer + tie-in / disclosure ─────────────────────────── */}
      <section className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm speakable">
            <p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-3">
              <span className="grid place-items-center w-5 h-5 rounded-full bg-emerald-600 text-white text-[11px]" aria-hidden="true">✓</span>
              Quick Answer
            </p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">{p.quickAnswer.lead}</p>
            <ul className="mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-700">
              {p.quickAnswer.bullets.map((b, i) => (
                <li key={i} className="flex gap-2"><span className="text-emerald-500 mt-0.5" aria-hidden="true">▸</span><span>{b}</span></li>
              ))}
            </ul>
            {p.quickAnswer.attribution && <p className="mt-4 text-xs text-gray-500">{p.quickAnswer.attribution}</p>}
          </div>

          {p.adjacentPest && (
            <div className="mt-5"><SpecialistDisclosure pest={p.adjacentPest} /></div>
          )}

          {p.serviceTieIn && (
            <aside className="mt-5 rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-white p-6 sm:p-7 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="hidden sm:grid place-items-center w-12 h-12 rounded-xl bg-amber-400/20 text-2xl shrink-0" aria-hidden="true">🛡️</div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-brand-900 mb-2 leading-tight">{p.serviceTieIn.heading}</h2>
                  <p className="text-sm text-gray-700 mb-4 leading-relaxed">{p.serviceTieIn.body}</p>
                  <div className="flex flex-wrap items-center gap-4">
                    <Link href={p.serviceTieIn.primaryHref} className="btn-primary-sm">{p.serviceTieIn.primaryLabel}</Link>
                    <Link href={p.serviceTieIn.secondaryHref} className="font-bold text-brand-800 hover:text-brand-600 transition-colors">{p.serviceTieIn.secondaryLabel}</Link>
                  </div>
                </div>
              </div>
            </aside>
          )}
        </div>
      </section>

      {/* ── How we rank ────────────────────────────────────────────────── */}
      {p.howWeRank && (
        <section className="bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-10">
            <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 p-6 sm:p-7 shadow-sm">
              <h2 className="text-lg font-extrabold text-brand-900 mb-2">{p.howWeRank.title}</h2>
              <div className="text-sm text-gray-600 leading-relaxed">{p.howWeRank.body}</div>
            </div>
          </div>
        </section>
      )}

      {/* ── Category sections ──────────────────────────────────────────── */}
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-14">
          {p.sections.map((section) => (
            <section key={section.name} id={anchor(section.name)} className="scroll-mt-20">
              <div className="flex items-center gap-3 mb-2">
                <div className="grid place-items-center w-11 h-11 rounded-2xl bg-emerald-50 border border-emerald-100 text-2xl shrink-0" aria-hidden="true">{section.icon}</div>
                <div>
                  <h2 className="text-2xl font-extrabold text-brand-900 leading-none">{section.name}</h2>
                  <span className="text-xs font-semibold uppercase tracking-wide text-gray-400">{section.guides.length} {section.guides.length === 1 ? 'guide' : 'guides'}</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed max-w-3xl">{section.intro}</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {section.guides.map((g) => <GuideCard key={g.href} {...g} />)}
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* ── Bottom line ────────────────────────────────────────────────── */}
      {p.bottomLine && (
        <section className="bg-brand-950 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
            <h2 className="text-2xl font-extrabold mb-3 text-white">{p.bottomLine.title}</h2>
            <div className="text-brand-100 leading-relaxed [&_a]:text-amber-300 [&_a:hover]:text-amber-200 [&_a]:underline [&_a]:underline-offset-2">{p.bottomLine.body}</div>
          </div>
        </section>
      )}

      {/* ── FAQ ────────────────────────────────────────────────────────── */}
      {p.faqs.length > 0 && (
        <section className="bg-gray-50 border-t border-gray-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
            <h2 className="text-2xl font-extrabold text-brand-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {p.faqs.map(({ question, answer }) => (
                <details key={question} className="group bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
                  <summary className="font-bold text-brand-900 cursor-pointer list-none flex justify-between items-center gap-3">
                    {question}
                    <span className="text-emerald-600 group-open:rotate-45 transition-transform text-2xl leading-none shrink-0">+</span>
                  </summary>
                  <p className="mt-3 text-sm text-gray-700 leading-relaxed">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Firewall: adjacent-pest hubs never render the service CTA — they get a
          neutral publishing-arm band pointing back to the master hub instead. */}
      {p.adjacentPest ? (
        <section className="bg-brand-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 text-center">
            <h2 className="text-2xl font-extrabold mb-2 text-white">{p.cta.heading}</h2>
            <p className="text-brand-200 mb-6 max-w-2xl mx-auto">{p.cta.subtext}</p>
            <Link href="/pest-product-guides" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors">
              More independent Canadian pest product research →
            </Link>
          </div>
        </section>
      ) : (
        <CTASection heading={p.cta.heading} subtext={p.cta.subtext} variant="dark" />
      )}
    </>
  )
}
