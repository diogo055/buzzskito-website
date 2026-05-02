'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { BUSINESS } from '@/lib/constants'
import AddressAutocomplete, { type ParsedAddress } from './AddressAutocomplete'
import {
  scoreYard,
  YARD_FEATURES,
  GOAL_OPTIONS,
  TRIED_OPTIONS,
  type QuizAnswers,
  type YardRiskResult,
  type LotSize,
  type FamilySituation,
  type SeverityLevel,
  type Timing,
  type BudgetTier,
} from '@/lib/yard-risk-scoring'

const HUB_API_URL = process.env.NEXT_PUBLIC_HUB_API_URL || 'https://app.buzzskito.ca'

const TOTAL_STEPS = 10

export default function YardRiskQuiz() {
  const [step, setStep] = useState(0)
  const [parsedAddress, setParsedAddress] = useState<ParsedAddress | null>(null)
  const [addressTyped, setAddressTyped] = useState('')
  const [lotSize, setLotSize] = useState<LotSize | null>(null)
  const [features, setFeatures] = useState<string[]>([])
  const [family, setFamily] = useState<FamilySituation | null>(null)
  const [severity, setSeverity] = useState<SeverityLevel | null>(null)
  const [tried, setTried] = useState<string[]>([])
  const [goals, setGoals] = useState<string[]>([])
  const [timing, setTiming] = useState<Timing | null>(null)
  const [budget, setBudget] = useState<BudgetTier | null>(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [callbackRequested, setCallbackRequested] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const answers: QuizAnswers = useMemo(() => ({
    city: parsedAddress?.city || null,
    neighbourhood: parsedAddress?.neighbourhood || null,
    postalCode: parsedAddress?.postalCode || null,
    formattedAddress: parsedAddress?.formatted || addressTyped,
    lotSize, features, family, severity, tried, goals, timing, budget,
  }), [parsedAddress, addressTyped, lotSize, features, family, severity, tried, goals, timing, budget])

  const result: YardRiskResult | null = useMemo(() => {
    // Compute preliminary score even mid-quiz once address + lot + features known
    if (!parsedAddress?.city || !lotSize || features.length === 0) return null
    return scoreYard(answers)
  }, [answers, parsedAddress?.city, lotSize, features.length])

  const next = () => setStep((s) => Math.min(s + 1, TOTAL_STEPS))
  const back = () => setStep((s) => Math.max(s - 1, 0))

  const toggleArrayValue = (arr: string[], value: string, max?: number) => {
    if (arr.includes(value)) return arr.filter((v) => v !== value)
    if (max && arr.length >= max) return [...arr.slice(1), value]
    return [...arr, value]
  }

  async function handleSubmit() {
    if (!name || !email) {
      setError('Please add your name and email so we can send your report.')
      return
    }
    setSubmitting(true)
    setError('')
    try {
      const res = await fetch(`${HUB_API_URL}/api/yard-risk-report`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim().toLowerCase(),
          phone: phone.trim() || null,
          callbackRequested,
          answers,
          result,
        }),
      })
      if (!res.ok) throw new Error('Failed')
      setSubmitted(true)
      setStep(TOTAL_STEPS + 1)
    } catch {
      setError('Something went wrong. Please call (289) 216-5030 — Alex will help you directly.')
    } finally {
      setSubmitting(false)
    }
  }

  // ── PROGRESS ──
  const progress = Math.min(100, Math.round(((step) / TOTAL_STEPS) * 100))

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 sm:py-12">
      {step <= TOTAL_STEPS && step !== TOTAL_STEPS + 1 && (
        <div className="mb-8">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-amber-500 h-2 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">Step {Math.min(step + 1, TOTAL_STEPS)} of {TOTAL_STEPS}</p>
        </div>
      )}

      {/* ── Step 0: Address ── */}
      {step === 0 && (
        <div className="space-y-6">
          <div className="text-center">
            <p className="text-xs font-extrabold text-amber-700 uppercase tracking-wider mb-2">Free Yard Risk Report · 60 seconds</p>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-900 mb-3">What&rsquo;s your yard&rsquo;s mosquito &amp; tick risk score?</h1>
            <p className="text-gray-600 leading-relaxed">Enter your GTA address — we&rsquo;ll calculate your custom risk profile using neighbourhood data, ravine proximity, water sources, and family factors. Then we&rsquo;ll show you your score and email you a custom treatment plan.</p>
          </div>
          <div className="bg-white rounded-2xl border border-brand-100 p-6 shadow-sm">
            <label htmlFor="quiz-addr" className="block text-sm font-bold text-brand-900 mb-2">Your address</label>
            <AddressAutocomplete
              id="quiz-addr"
              required
              value={addressTyped}
              onChange={setAddressTyped}
              onSelect={(p) => { setParsedAddress(p); setTimeout(() => next(), 250) }}
              placeholder="Start typing — we&rsquo;ll auto-complete"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-brand-900 placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
            />
            <p className="text-xs text-gray-500 mt-2">🔒 We service the GTA only. Address is used to calculate your local pressure score — never sold or shared.</p>
          </div>
          <div className="grid grid-cols-3 gap-3 text-center text-xs">
            <div className="rounded-xl bg-brand-50 border border-brand-100 p-3"><div className="font-extrabold text-brand-900">129</div><div className="text-gray-600">5-star reviews</div></div>
            <div className="rounded-xl bg-brand-50 border border-brand-100 p-3"><div className="font-extrabold text-brand-900">19</div><div className="text-gray-600">cities served</div></div>
            <div className="rounded-xl bg-brand-50 border border-brand-100 p-3"><div className="font-extrabold text-brand-900">L-240</div><div className="text-gray-600">Ontario licensed</div></div>
          </div>
        </div>
      )}

      {/* ── Step 1: Lot size ── */}
      {step === 1 && (
        <StepShell back={back} title="What&rsquo;s your lot size?" subtitle={parsedAddress?.city ? `Got it — your property in ${parsedAddress.neighbourhood ? `${parsedAddress.neighbourhood}, ` : ''}${parsedAddress.city}.` : ''}>
          <div className="grid grid-cols-2 gap-3">
            {([
              { id: 'standard', label: 'Standard lot', sub: 'Under 6,000 sq ft · most semis & detached' },
              { id: 'midsize', label: 'Mid-size', sub: '6,000–10,000 sq ft · larger detached' },
              { id: 'large', label: 'Large', sub: '10,000–20,000 sq ft · estate / corner lot' },
              { id: 'acreage', label: 'Acreage / rural', sub: '20,000+ sq ft' },
            ] as const).map((o) => (
              <button key={o.id} onClick={() => { setLotSize(o.id); setTimeout(next, 200) }}
                className={`p-4 rounded-xl border-2 text-left transition-all ${lotSize === o.id ? 'border-brand-600 bg-brand-50 shadow' : 'border-gray-200 bg-white hover:border-gray-300'}`}>
                <div className="font-bold text-brand-900">{o.label}</div>
                <div className="text-xs text-gray-600 mt-1">{o.sub}</div>
              </button>
            ))}
          </div>
        </StepShell>
      )}

      {/* ── Step 2: Yard features ── */}
      {step === 2 && (
        <StepShell back={back} title="Does your yard back onto any of these?" subtitle="Select all that apply — every feature changes the score.">
          <div className="grid grid-cols-2 gap-3 mb-4">
            {YARD_FEATURES.map((f) => (
              <button key={f.id} onClick={() => setFeatures((cur) => toggleArrayValue(cur, f.id))}
                className={`p-4 rounded-xl border-2 text-left transition-all ${features.includes(f.id) ? 'border-brand-600 bg-brand-50 shadow' : 'border-gray-200 bg-white hover:border-gray-300'}`}>
                <div className="font-bold text-brand-900 text-sm">{f.label}</div>
                {f.weight > 0 && <div className="text-[10px] text-amber-700 mt-1 font-semibold">+{f.weight} pressure pts</div>}
              </button>
            ))}
          </div>
          <button onClick={next} disabled={features.length === 0}
            className="w-full bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-white font-extrabold px-6 py-3 rounded-full transition-colors">Continue →</button>
        </StepShell>
      )}

      {/* ── Step 3: Family situation ── */}
      {step === 3 && (
        <StepShell back={back} title="Who uses the yard?" subtitle="Stakes matter — we adjust the recommendation accordingly.">
          <div className="space-y-2">
            {([
              { id: 'kids-young', label: 'Kids under 10', sub: 'Highest stakes — every bite matters' },
              { id: 'kids-older', label: 'Kids 10+', sub: 'Active outdoor play' },
              { id: 'pets', label: 'Pets (dogs especially)', sub: 'Tick exposure is the top concern' },
              { id: 'elderly', label: 'Elderly household members', sub: 'West Nile / Lyme = serious risk' },
              { id: 'no-special', label: 'Adults only — no special concerns', sub: '' },
            ] as const).map((o) => (
              <button key={o.id} onClick={() => { setFamily(o.id); setTimeout(next, 200) }}
                className={`w-full p-4 rounded-xl border-2 text-left transition-all ${family === o.id ? 'border-brand-600 bg-brand-50 shadow' : 'border-gray-200 bg-white hover:border-gray-300'}`}>
                <div className="font-bold text-brand-900">{o.label}</div>
                {o.sub && <div className="text-xs text-gray-600 mt-1">{o.sub}</div>}
              </button>
            ))}
          </div>
        </StepShell>
      )}

      {/* ── Step 4: Last summer severity ── */}
      {step === 4 && (
        <StepShell back={back} title="How was last summer for mosquitoes &amp; ticks?" subtitle="Honest answers help us calibrate the report.">
          <div className="space-y-2">
            {([
              { id: 'unbearable', label: 'Couldn&rsquo;t enjoy the yard at all', emoji: '😤' },
              { id: 'annoying', label: 'Annoying — limited what we did outside', emoji: '😬' },
              { id: 'manageable', label: 'Manageable — some bites here and there', emoji: '😐' },
              { id: 'no-issue', label: 'No real issue', emoji: '😎' },
            ] as const).map((o) => (
              <button key={o.id} onClick={() => { setSeverity(o.id); setTimeout(next, 200) }}
                className={`w-full p-4 rounded-xl border-2 text-left transition-all ${severity === o.id ? 'border-brand-600 bg-brand-50 shadow' : 'border-gray-200 bg-white hover:border-gray-300'}`}>
                <div className="font-bold text-brand-900"><span className="mr-2 text-xl">{o.emoji}</span><span dangerouslySetInnerHTML={{ __html: o.label }} /></div>
              </button>
            ))}
          </div>
        </StepShell>
      )}

      {/* ── Step 5: What you've tried ── */}
      {step === 5 && (
        <StepShell back={back} title="What have you tried before?" subtitle="Pick anything you&rsquo;ve actually used.">
          <div className="grid grid-cols-2 gap-2 mb-4">
            {TRIED_OPTIONS.map((o) => (
              <button key={o.id} onClick={() => setTried((cur) => toggleArrayValue(cur, o.id))}
                className={`p-3 rounded-xl border-2 text-left transition-all ${tried.includes(o.id) ? 'border-brand-600 bg-brand-50 shadow' : 'border-gray-200 bg-white hover:border-gray-300'}`}>
                <div className="font-semibold text-brand-900 text-sm">{o.label}</div>
              </button>
            ))}
          </div>
          <button onClick={next} className="w-full bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-6 py-3 rounded-full transition-colors">Continue →</button>
        </StepShell>
      )}

      {/* ── Step 6: Goals ── */}
      {step === 6 && (
        <StepShell back={back} title="What do you want this season?" subtitle="Pick up to 2 — we&rsquo;ll prioritize them.">
          <div className="space-y-2 mb-4">
            {GOAL_OPTIONS.map((o) => (
              <button key={o.id} onClick={() => setGoals((cur) => toggleArrayValue(cur, o.id, 2))}
                className={`w-full p-4 rounded-xl border-2 text-left transition-all ${goals.includes(o.id) ? 'border-brand-600 bg-brand-50 shadow' : 'border-gray-200 bg-white hover:border-gray-300'}`}>
                <div className="font-bold text-brand-900">{o.label}</div>
              </button>
            ))}
          </div>
          <p className="text-xs text-gray-500 mb-3 text-center">{goals.length}/2 selected</p>
          <button onClick={next} disabled={goals.length === 0} className="w-full bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-white font-extrabold px-6 py-3 rounded-full transition-colors">Continue →</button>
        </StepShell>
      )}

      {/* ── Step 7: Timing ── */}
      {step === 7 && (
        <StepShell back={back} title="When do you want this handled?" subtitle="No pressure — honest timing helps us prioritize.">
          <div className="space-y-2">
            {([
              { id: 'now', label: 'Need help now', sub: 'Mosquitoes are already biting' },
              { id: 'two-weeks', label: 'Within 2 weeks', sub: 'Want it done before peak' },
              { id: 'this-season', label: 'This season at some point', sub: 'Just gathering info' },
              { id: 'researching', label: 'Just researching', sub: 'Maybe next year' },
            ] as const).map((o) => (
              <button key={o.id} onClick={() => { setTiming(o.id); setTimeout(next, 200) }}
                className={`w-full p-4 rounded-xl border-2 text-left transition-all ${timing === o.id ? 'border-brand-600 bg-brand-50 shadow' : 'border-gray-200 bg-white hover:border-gray-300'}`}>
                <div className="font-bold text-brand-900">{o.label}</div>
                <div className="text-xs text-gray-600 mt-1">{o.sub}</div>
              </button>
            ))}
          </div>
        </StepShell>
      )}

      {/* ── Step 8: Budget comfort ── */}
      {step === 8 && (
        <StepShell back={back} title="What&rsquo;s your monthly budget comfort?" subtitle="Used internally — we won&rsquo;t pitch outside your range.">
          <div className="space-y-2">
            {([
              { id: 'under-100', label: 'Under $100/month', sub: 'DIY-leaning · Hybrid plan options' },
              { id: '100-200', label: '$100 – $200/month', sub: 'Most popular range' },
              { id: '200-400', label: '$200 – $400/month', sub: 'Premium / weekly coverage' },
              { id: 'whatever', label: 'Whatever it costs to fix it', sub: 'Top-tier protection' },
            ] as const).map((o) => (
              <button key={o.id} onClick={() => { setBudget(o.id); setTimeout(next, 200) }}
                className={`w-full p-4 rounded-xl border-2 text-left transition-all ${budget === o.id ? 'border-brand-600 bg-brand-50 shadow' : 'border-gray-200 bg-white hover:border-gray-300'}`}>
                <div className="font-bold text-brand-900">{o.label}</div>
                <div className="text-xs text-gray-600 mt-1">{o.sub}</div>
              </button>
            ))}
          </div>
        </StepShell>
      )}

      {/* ── Step 9: Score reveal + email gate ── */}
      {step === 9 && result && (
        <ScoreRevealStep
          result={result}
          name={name} setName={setName}
          email={email} setEmail={setEmail}
          phone={phone} setPhone={setPhone}
          callbackRequested={callbackRequested} setCallbackRequested={setCallbackRequested}
          back={back} onSubmit={handleSubmit}
          submitting={submitting} error={error}
        />
      )}

      {/* ── Confirmation ── */}
      {step === TOTAL_STEPS + 1 && submitted && result && (
        <ConfirmationStep result={result} name={name} email={email} callbackRequested={callbackRequested} />
      )}

      {/* Out of service area fallback */}
      {step >= 1 && parsedAddress && !result?.isInServiceArea && parsedAddress.city && (
        <div className="mt-6 rounded-2xl bg-amber-50 border border-amber-200 p-5">
          <p className="text-sm text-amber-900">
            <strong>Heads up — {parsedAddress.city} is outside our GTA service area.</strong> You can still complete the quiz to get a free general report by email, but we won&rsquo;t be able to schedule service. <Link href="/" className="underline">Back to home</Link>
          </p>
        </div>
      )}
    </div>
  )
}

function StepShell({ back, title, subtitle, children }: { back: () => void; title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <div className="space-y-5">
      <div>
        <button onClick={back} className="text-sm text-brand-600 hover:underline mb-3">← Back</button>
        <h2 className="text-xl sm:text-2xl font-extrabold text-brand-900" dangerouslySetInnerHTML={{ __html: title }} />
        {subtitle && <p className="text-sm text-gray-600 mt-1">{subtitle}</p>}
      </div>
      {children}
    </div>
  )
}

function ScoreRevealStep(props: {
  result: import('@/lib/yard-risk-scoring').YardRiskResult
  name: string; setName: (v: string) => void
  email: string; setEmail: (v: string) => void
  phone: string; setPhone: (v: string) => void
  callbackRequested: boolean; setCallbackRequested: (v: boolean) => void
  back: () => void; onSubmit: () => void
  submitting: boolean; error: string
}) {
  const { result, name, setName, email, setEmail, phone, setPhone, callbackRequested, setCallbackRequested, back, onSubmit, submitting, error } = props
  const colorMap = { green: 'from-green-500 to-emerald-600', amber: 'from-amber-500 to-orange-500', red: 'from-orange-500 to-red-600', crimson: 'from-red-600 to-rose-700' }
  const gradient = colorMap[result.tierColor]

  return (
    <div className="space-y-5">
      <button onClick={back} className="text-sm text-brand-600 hover:underline">← Back</button>

      {/* Score badge */}
      <div className={`rounded-3xl bg-gradient-to-br ${gradient} text-white p-7 shadow-2xl`}>
        <p className="text-xs uppercase tracking-widest opacity-80 font-semibold mb-1">Preliminary Yard Risk Score</p>
        <div className="flex items-baseline gap-3 mb-2">
          <span className="text-7xl font-black leading-none">{result.score}</span>
          <span className="text-2xl font-bold opacity-80">/ 100</span>
        </div>
        <p className="text-2xl font-extrabold mb-1">{result.tierLabel}</p>
        <p className="text-sm opacity-90">{result.cityName}{result.neighbourhoodName ? ` · ${result.neighbourhoodName}` : ''}</p>
      </div>

      {/* Drivers */}
      <div className="rounded-2xl bg-white border border-brand-100 p-5">
        <h3 className="font-extrabold text-brand-900 text-sm mb-3">What&rsquo;s driving your score</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          {result.driverList.slice(0, 4).map((d, i) => (
            <li key={i} className="flex gap-2"><span className="text-amber-500 mt-0.5">●</span><span>{d}</span></li>
          ))}
        </ul>
      </div>

      {/* Peak weeks */}
      <div className="rounded-2xl bg-amber-50 border border-amber-200 p-5">
        <p className="text-xs font-extrabold text-amber-700 uppercase tracking-wider mb-1">Your specific peak risk window</p>
        <p className="text-lg font-bold text-brand-900">{result.peakRiskWeeks.startLabel} – {result.peakRiskWeeks.endLabel}</p>
        <p className="text-xs text-gray-600 mt-1">First serious mosquito emergence: ~{result.peakRiskWeeks.daysFromNow === 0 ? 'now' : `${result.peakRiskWeeks.daysFromNow} days from today`}</p>
      </div>

      {/* Social proof */}
      {result.isInServiceArea && (
        <div className="rounded-xl bg-brand-50 border border-brand-100 p-4 flex items-center gap-3">
          <span className="text-2xl">🏡</span>
          <p className="text-sm text-brand-800"><strong>{result.socialProofCount} properties</strong> in your area assessed by BuzzSkito this week.</p>
        </div>
      )}

      {/* Estimated investment range */}
      {result.isInServiceArea && (
        <div className="rounded-2xl bg-white border-2 border-brand-200 p-5">
          <p className="text-xs font-extrabold text-brand-700 uppercase tracking-wider mb-2">Estimated season investment for your property</p>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-3xl font-black text-brand-900">${result.estimatedSeasonInvestmentLow.toLocaleString()}</span>
            <span className="text-lg text-gray-500">–</span>
            <span className="text-3xl font-black text-brand-900">${result.estimatedSeasonInvestmentHigh.toLocaleString()}</span>
            <span className="text-sm text-gray-500">/ season</span>
          </div>
          <p className="text-sm font-semibold text-brand-700 mb-1">Recommended: {result.recommendedTierLabel}</p>
          <p className="text-xs text-gray-600">{result.treatmentVisits}</p>
          <p className="text-[10px] text-gray-400 mt-2">Final pricing confirmed during your call with Alex.</p>
        </div>
      )}

      {/* Email gate */}
      <div className="rounded-2xl bg-gradient-to-br from-brand-900 to-brand-950 text-white p-6 shadow-xl">
        <h3 className="text-xl font-extrabold mb-2">Get your full custom report</h3>
        <p className="text-sm text-brand-200 mb-4">Personalized PDF-style email with your annotated risk map, peak-weeks calendar, top 5 things to fix in your yard, and your custom protection plan. No spam — Alex sends one email.</p>
        <div className="space-y-2">
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" required
            className="w-full rounded-xl border border-brand-700 bg-brand-900/50 px-4 py-3 text-white placeholder:text-brand-400 focus:border-amber-400 focus:outline-none" />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" required
            className="w-full rounded-xl border border-brand-700 bg-brand-900/50 px-4 py-3 text-white placeholder:text-brand-400 focus:border-amber-400 focus:outline-none" />
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone (optional — get priority callback)"
            className="w-full rounded-xl border border-brand-700 bg-brand-900/50 px-4 py-3 text-white placeholder:text-brand-400 focus:border-amber-400 focus:outline-none" />
          {phone && (
            <label className="flex items-center gap-2 text-sm text-brand-100 mt-2 cursor-pointer">
              <input type="checkbox" checked={callbackRequested} onChange={(e) => setCallbackRequested(e.target.checked)} className="w-4 h-4 rounded" />
              ⚡ <strong>Have Alex personally call me back within 30 minutes</strong> to walk through my yard
            </label>
          )}
          {error && <p className="text-amber-300 text-xs">{error}</p>}
          <button onClick={onSubmit} disabled={submitting || !name || !email}
            className="w-full bg-amber-500 hover:bg-amber-400 disabled:opacity-60 text-white font-extrabold px-6 py-4 rounded-full text-lg shadow-xl transition-colors mt-2">
            {submitting ? 'Generating your report…' : '📧 Send My Custom Report'}
          </button>
        </div>
        <p className="text-[10px] text-brand-300 mt-3 text-center">🔒 We never sell your info. Used only to send your report and follow up if you want.</p>
      </div>
    </div>
  )
}

function ConfirmationStep({ result, name, email, callbackRequested }: { result: import('@/lib/yard-risk-scoring').YardRiskResult; name: string; email: string; callbackRequested: boolean }) {
  return (
    <div className="space-y-6 text-center py-8">
      <div className="text-7xl mb-2">✅</div>
      <h2 className="text-3xl font-extrabold text-brand-900">{name.split(' ')[0]}, your report is on its way!</h2>
      <p className="text-gray-600 max-w-md mx-auto">Check <strong>{email}</strong> in the next 60 seconds. Your full custom yard risk report — including your annotated map, peak-weeks calendar, and protection plan — is being delivered now.</p>
      {callbackRequested && (
        <div className="rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 text-white p-6 max-w-md mx-auto shadow-xl">
          <p className="text-sm font-bold mb-1">⚡ Priority Callback Confirmed</p>
          <p className="text-2xl font-extrabold mb-2">Alex will call you within 30 minutes</p>
          <p className="text-sm opacity-90">Score: {result.score}/100 · {result.tierLabel}</p>
        </div>
      )}
      <div className="text-sm text-gray-500 space-y-1">
        <p>Want to talk now? Call <a href={BUSINESS.phoneHref} className="text-brand-700 underline font-semibold">{BUSINESS.phone}</a></p>
        <p><Link href="/" className="text-brand-600 hover:underline">← Back to BuzzSkito home</Link></p>
      </div>
    </div>
  )
}
