'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { BUSINESS } from '@/lib/constants'
import AddressAutocomplete, { type ParsedAddress } from './AddressAutocomplete'
import {
  scoreLyme,
  type LymeAnswers,
  type LymeResult,
  type DogWalking,
  type KidsOutdoor,
  type HikingHabits,
  type TickChecks,
  type PastExposure,
  type YardFeatures,
} from '@/lib/lyme-risk-scoring'

const HUB_API_URL = process.env.NEXT_PUBLIC_HUB_API_URL || 'https://app.buzzskito.ca'
const TOTAL_STEPS = 8

export default function LymeRiskCalculator() {
  const [step, setStep] = useState(0)
  const [parsedAddress, setParsedAddress] = useState<ParsedAddress | null>(null)
  const [addressTyped, setAddressTyped] = useState('')
  const [yardFeatures, setYardFeatures] = useState<YardFeatures | null>(null)
  const [dogWalking, setDogWalking] = useState<DogWalking | null>(null)
  const [kidsOutdoor, setKidsOutdoor] = useState<KidsOutdoor | null>(null)
  const [hiking, setHiking] = useState<HikingHabits | null>(null)
  const [tickChecks, setTickChecks] = useState<TickChecks | null>(null)
  const [pastExposure, setPastExposure] = useState<PastExposure | null>(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const answers: LymeAnswers = useMemo(() => ({
    city: parsedAddress?.city || null,
    neighbourhood: parsedAddress?.neighbourhood || null,
    postalCode: parsedAddress?.postalCode || null,
    formattedAddress: parsedAddress?.formatted || addressTyped,
    yardFeatures, dogWalking, kidsOutdoor, hiking, tickChecks, pastExposure,
  }), [parsedAddress, addressTyped, yardFeatures, dogWalking, kidsOutdoor, hiking, tickChecks, pastExposure])

  const result: LymeResult | null = useMemo(() => {
    if (step < TOTAL_STEPS - 1) return null
    return scoreLyme(answers)
  }, [answers, step])

  const next = () => setStep((s) => Math.min(s + 1, TOTAL_STEPS))
  const back = () => setStep((s) => Math.max(s - 1, 0))

  async function handleSubmit() {
    if (!name || !email) {
      setError('Add your name and email to get the full report.')
      return
    }
    setSubmitting(true)
    setError('')
    try {
      const res = await fetch(`${HUB_API_URL}/api/lyme-risk`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), email: email.trim().toLowerCase(), answers, result }),
      })
      if (!res.ok) throw new Error('Failed')
      setSubmitted(true)
      setStep(TOTAL_STEPS + 1)
    } catch {
      setError('Something went wrong. Just call (289) 216-5030 — Alex will help.')
    } finally {
      setSubmitting(false)
    }
  }

  const progress = Math.min(100, Math.round((step / TOTAL_STEPS) * 100))

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 sm:py-12">
      {step <= TOTAL_STEPS && step !== TOTAL_STEPS + 1 && (
        <div className="mb-8">
          <div className="w-full bg-gray-200 rounded-full h-2"><div className="bg-amber-500 h-2 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} /></div>
          <p className="text-xs text-gray-500 mt-2 text-center">Question {Math.min(step + 1, TOTAL_STEPS)} of {TOTAL_STEPS}</p>
        </div>
      )}

      {step === 0 && (
        <Step title="Where do you live?" subtitle="GTA-only — we use your specific neighbourhood&rsquo;s tick surveillance data.">
          <div className="bg-white rounded-2xl border border-brand-100 p-5">
            <AddressAutocomplete
              required
              value={addressTyped}
              onChange={setAddressTyped}
              onSelect={(p) => { setParsedAddress(p); setTimeout(next, 250) }}
              placeholder="Start typing your GTA address"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-brand-900 placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
            />
          </div>
        </Step>
      )}

      {step === 1 && (
        <Step back={back} title="What does your yard look like?" subtitle="Tick habitat varies dramatically by yard type.">
          {([
            { id: 'wooded', label: '🌳 Wooded / mature trees', sub: 'Tick reservoir territory' },
            { id: 'leafy', label: '🍂 Some trees + leafy perimeter', sub: 'Leaf litter is #1 tick habitat' },
            { id: 'open', label: '🌱 Mostly open lawn', sub: 'Lower baseline tick risk' },
            { id: 'unknown', label: '🤷 Not sure', sub: '' },
          ] as const).map((o) => (
            <Btn key={o.id} selected={yardFeatures === o.id} onClick={() => { setYardFeatures(o.id); setTimeout(next, 200) }}>
              <div className="font-bold text-brand-900">{o.label}</div>
              {o.sub && <div className="text-xs text-gray-600 mt-1">{o.sub}</div>}
            </Btn>
          ))}
        </Step>
      )}

      {step === 2 && (
        <Step back={back} title="Do you have a dog?" subtitle="Daily trail walks are the #1 GTA tick exposure path.">
          {([
            { id: 'daily-trails', label: 'Yes — daily walks on trails / off-leash' },
            { id: 'daily-streets', label: 'Yes — mostly streets/sidewalks' },
            { id: 'occasional', label: 'Yes — occasional walks' },
            { id: 'no-dog', label: 'No dog' },
          ] as const).map((o) => (
            <Btn key={o.id} selected={dogWalking === o.id} onClick={() => { setDogWalking(o.id); setTimeout(next, 200) }}>{o.label}</Btn>
          ))}
        </Step>
      )}

      {step === 3 && (
        <Step back={back} title="Do kids play outside in your yard?" subtitle="Kids notice bites less and check themselves less thoroughly.">
          {([
            { id: 'every-day', label: 'Yes — every day in summer' },
            { id: 'few-times-week', label: 'Yes — a few times a week' },
            { id: 'rarely', label: 'Rarely / mostly indoors' },
            { id: 'no-kids', label: 'No kids in household' },
          ] as const).map((o) => (
            <Btn key={o.id} selected={kidsOutdoor === o.id} onClick={() => { setKidsOutdoor(o.id); setTimeout(next, 200) }}>{o.label}</Btn>
          ))}
        </Step>
      )}

      {step === 4 && (
        <Step back={back} title="How often do you hike or walk in conservation areas?" subtitle="Bruce Trail, Don Valley trails, Rouge Park, Niagara Escarpment, etc.">
          {([
            { id: 'weekly', label: 'Weekly or more' },
            { id: 'monthly', label: 'A few times a month' },
            { id: 'rarely', label: 'Rarely — once or twice a year' },
            { id: 'never', label: 'Never' },
          ] as const).map((o) => (
            <Btn key={o.id} selected={hiking === o.id} onClick={() => { setHiking(o.id); setTimeout(next, 200) }}>{o.label}</Btn>
          ))}
        </Step>
      )}

      {step === 5 && (
        <Step back={back} title="Do you check for ticks after outdoor activities?" subtitle="Ticks need 24-36 hours attached to transmit Lyme. Finding them early prevents transmission entirely.">
          {([
            { id: 'every-time', label: '✓ Every time — body check after every outing' },
            { id: 'sometimes', label: 'Sometimes — when I remember' },
            { id: 'never', label: 'Never / rarely' },
            { id: 'no-exposure', label: 'No real outdoor exposure' },
          ] as const).map((o) => (
            <Btn key={o.id} selected={tickChecks === o.id} onClick={() => { setTickChecks(o.id); setTimeout(next, 200) }}>{o.label}</Btn>
          ))}
        </Step>
      )}

      {step === 6 && (
        <Step back={back} title="Has anyone in your household been bitten by a tick before?">
          {([
            { id: 'multiple', label: 'Yes — multiple times over the years' },
            { id: 'one', label: 'Yes — once that I know of' },
            { id: 'family-member', label: 'A family member or pet was bitten' },
            { id: 'never', label: 'Never (or not that I know of)' },
          ] as const).map((o) => (
            <Btn key={o.id} selected={pastExposure === o.id} onClick={() => { setPastExposure(o.id); setTimeout(next, 200) }}>{o.label}</Btn>
          ))}
        </Step>
      )}

      {step === 7 && result && (
        <ScoreReveal result={result} back={back} name={name} setName={setName} email={email} setEmail={setEmail} submitting={submitting} error={error} onSubmit={handleSubmit} />
      )}

      {step === TOTAL_STEPS + 1 && submitted && result && (
        <Confirmation result={result} name={name} email={email} />
      )}
    </div>
  )
}

function Step({ title, subtitle, back, children }: { title: string; subtitle?: string; back?: () => void; children: React.ReactNode }) {
  return (
    <div className="space-y-4">
      <div>
        {back && <button onClick={back} className="text-sm text-brand-600 hover:underline mb-3">← Back</button>}
        <h2 className="text-xl sm:text-2xl font-extrabold text-brand-900" dangerouslySetInnerHTML={{ __html: title }} />
        {subtitle && <p className="text-sm text-gray-600 mt-2">{subtitle}</p>}
      </div>
      <div className="space-y-2">{children}</div>
    </div>
  )
}

function Btn({ selected, onClick, children }: { selected: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button onClick={onClick} className={`w-full p-4 rounded-xl border-2 text-left transition-all ${selected ? 'border-brand-600 bg-brand-50 shadow' : 'border-gray-200 bg-white hover:border-gray-300'}`}>{children}</button>
  )
}

function ScoreReveal({ result, back, name, setName, email, setEmail, submitting, error, onSubmit }: { result: LymeResult; back: () => void; name: string; setName: (v: string) => void; email: string; setEmail: (v: string) => void; submitting: boolean; error: string; onSubmit: () => void }) {
  const colors = { red: 'from-red-600 to-rose-700', orange: 'from-orange-500 to-amber-600', amber: 'from-amber-500 to-yellow-500', emerald: 'from-emerald-500 to-green-600' }[result.tierColor]

  return (
    <div className="space-y-5">
      <button onClick={back} className="text-sm text-brand-600 hover:underline">← Back</button>

      <div className={`rounded-3xl bg-gradient-to-br ${colors} text-white p-8 shadow-2xl text-center`}>
        <p className="text-xs uppercase tracking-widest opacity-80 font-semibold mb-2">Your Household Lyme Risk</p>
        <div className="text-7xl font-black leading-none mb-1">{result.score}<span className="text-3xl opacity-70 font-bold"> / 100</span></div>
        <p className="text-2xl font-extrabold">{result.tierLabel}</p>
        {result.isLymeEndemic && (
          <div className="mt-4 inline-block bg-black/20 rounded-full px-4 py-2 text-xs font-bold backdrop-blur">⚠️ {result.cityName} is in a Public Health Ontario Lyme-endemic zone</div>
        )}
      </div>

      <div className="rounded-2xl bg-white border border-brand-100 p-5">
        <h3 className="font-extrabold text-brand-900 text-base mb-3">What&rsquo;s driving your risk</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          {result.driverList.map((d, i) => (<li key={i} className="flex gap-2"><span className="text-amber-500 mt-0.5">●</span><span>{d}</span></li>))}
        </ul>
      </div>

      <div className="rounded-2xl bg-blue-50 border-l-4 border-blue-500 p-5">
        <p className="text-xs font-extrabold text-blue-700 uppercase tracking-wider mb-2">⚕️ Medical guidance for your risk level</p>
        <p className="text-sm text-gray-800 leading-relaxed">{result.doctorAdvice}</p>
      </div>

      <div className="rounded-2xl bg-rose-50 border-l-4 border-rose-500 p-5">
        <p className="text-xs font-extrabold text-rose-700 uppercase tracking-wider mb-2">⚠️ The yard factor</p>
        <p className="text-sm text-gray-800 leading-relaxed">{result.yardPivot}</p>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-brand-900 to-brand-950 text-white p-6 shadow-xl">
        <h3 className="text-xl font-extrabold mb-2">Get your full Lyme prevention plan</h3>
        <p className="text-sm text-brand-200 mb-4">Custom email with your full risk breakdown, evidence-based prevention checklist for your specific household, and your custom yard treatment plan.</p>
        <div className="space-y-2">
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" required className="w-full rounded-xl border border-brand-700 bg-brand-900/50 px-4 py-3 text-white placeholder:text-brand-400 focus:border-amber-400 focus:outline-none" />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" required className="w-full rounded-xl border border-brand-700 bg-brand-900/50 px-4 py-3 text-white placeholder:text-brand-400 focus:border-amber-400 focus:outline-none" />
          {error && <p className="text-amber-300 text-xs">{error}</p>}
          <button onClick={onSubmit} disabled={submitting || !name || !email} className="w-full bg-amber-500 hover:bg-amber-400 disabled:opacity-60 text-white font-extrabold px-6 py-4 rounded-full text-lg shadow-xl transition-colors mt-2">{submitting ? 'Generating your report…' : '📧 Send My Lyme Prevention Plan'}</button>
        </div>
        <p className="text-[10px] text-brand-300 mt-3 text-center">🔒 We never sell your info.</p>
      </div>
    </div>
  )
}

function Confirmation({ result, name, email }: { result: LymeResult; name: string; email: string }) {
  return (
    <div className="space-y-6 text-center py-8">
      <div className="text-7xl">⚕️</div>
      <h2 className="text-3xl font-extrabold text-brand-900">{name.split(' ')[0]}, your Lyme prevention plan is on its way!</h2>
      <p className="text-gray-600 max-w-md mx-auto">Check <strong>{email}</strong> in the next 60 seconds. Your full breakdown is being delivered now.</p>

      <div className="rounded-2xl bg-gradient-to-br from-brand-900 to-brand-950 text-white p-6 max-w-md mx-auto shadow-xl">
        <p className="text-xs font-extrabold text-amber-400 uppercase tracking-widest mb-2">Next step</p>
        <h3 className="text-xl font-extrabold mb-2">Get your full yard pressure score</h3>
        <p className="text-sm text-brand-200 mb-4">Your Lyme risk is <strong>{result.score}/100</strong>. The biggest variable is your yard. Get a free 1-100 yard mosquito + tick pressure score for your specific property.</p>
        <Link href="/yard-risk-report" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-6 py-3 rounded-full text-sm transition-colors">Get My Free Yard Score →</Link>
      </div>

      <p className="text-sm text-gray-500">Or call <a href={BUSINESS.phoneHref} className="text-brand-700 underline font-semibold">{BUSINESS.phone}</a></p>
    </div>
  )
}
