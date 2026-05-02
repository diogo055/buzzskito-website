'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { BUSINESS } from '@/lib/constants'
import {
  scoreMagnet,
  type MagnetAnswers,
  type MagnetResult,
  type BloodType,
  type BodyType,
  type ExerciseFrequency,
  type Temperature,
  type AlcoholHabits,
  type DuskExposure,
  type ClothingPreference,
  type FragranceUse,
} from '@/lib/mosquito-magnet-scoring'

const HUB_API_URL = process.env.NEXT_PUBLIC_HUB_API_URL || 'https://app.buzzskito.ca'
const TOTAL_STEPS = 10

export default function MosquitoMagnetQuiz() {
  const [step, setStep] = useState(0)
  const [bloodType, setBloodType] = useState<BloodType | null>(null)
  const [bodyType, setBodyType] = useState<BodyType | null>(null)
  const [exercise, setExercise] = useState<ExerciseFrequency | null>(null)
  const [temperature, setTemperature] = useState<Temperature | null>(null)
  const [alcohol, setAlcohol] = useState<AlcoholHabits | null>(null)
  const [pregnant, setPregnant] = useState<boolean | null>(null)
  const [duskExposure, setDuskExposure] = useState<DuskExposure | null>(null)
  const [clothing, setClothing] = useState<ClothingPreference | null>(null)
  const [fragrance, setFragrance] = useState<FragranceUse | null>(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const answers: MagnetAnswers = useMemo(() => ({
    bloodType, bodyType, exercise, temperature, alcohol, pregnant, duskExposure, clothing, fragrance,
  }), [bloodType, bodyType, exercise, temperature, alcohol, pregnant, duskExposure, clothing, fragrance])

  const result: MagnetResult | null = useMemo(() => {
    if (step < 9) return null
    return scoreMagnet(answers)
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
      const res = await fetch(`${HUB_API_URL}/api/mosquito-magnet`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim().toLowerCase(),
          answers,
          result,
        }),
      })
      if (!res.ok) throw new Error('Failed')
      setSubmitted(true)
      setStep(TOTAL_STEPS + 1)
    } catch {
      setError('Something went wrong. Just call (289) 216-5030 — we\'ll send your report manually.')
    } finally {
      setSubmitting(false)
    }
  }

  const progress = Math.min(100, Math.round((step / TOTAL_STEPS) * 100))

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 sm:py-12">
      {step <= TOTAL_STEPS && step !== TOTAL_STEPS + 1 && (
        <div className="mb-8">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-amber-500 h-2 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">Question {Math.min(step + 1, TOTAL_STEPS)} of {TOTAL_STEPS}</p>
        </div>
      )}

      {step === 0 && (
        <Step title="What&rsquo;s your blood type?" subtitle="Type O is mosquito catnip — Type AB barely registers. Wild but real (Smith et al. 2002).">
          {(['O', 'A', 'B', 'AB', 'unknown'] as const).map((bt) => (
            <Btn key={bt} selected={bloodType === bt} onClick={() => { setBloodType(bt); setTimeout(next, 200) }}>
              {bt === 'unknown' ? "Don't know" : `Type ${bt}`}
            </Btn>
          ))}
        </Step>
      )}

      {step === 1 && (
        <Step back={back} title="Your body frame?" subtitle="Bigger bodies = more CO2 = bigger detection radius (mosquitoes find you from 50m away by CO2 alone).">
          {([
            { id: 'slim',    label: 'Slim / petite' },
            { id: 'average', label: 'Average build' },
            { id: 'larger', label: 'Larger frame / tall' },
          ] as const).map((o) => (
            <Btn key={o.id} selected={bodyType === o.id} onClick={() => { setBodyType(o.id); setTimeout(next, 200) }}>{o.label}</Btn>
          ))}
        </Step>
      )}

      {step === 2 && (
        <Step back={back} title="How often do you exercise outdoors?" subtitle="Lactic acid in your sweat is one of the most powerful mosquito attractants known.">
          {([
            { id: 'daily', label: 'Daily — running, cycling, sports' },
            { id: 'weekly', label: 'A few times a week' },
            { id: 'rarely', label: 'Rarely / mostly indoors' },
          ] as const).map((o) => (
            <Btn key={o.id} selected={exercise === o.id} onClick={() => { setExercise(o.id); setTimeout(next, 200) }}>{o.label}</Btn>
          ))}
        </Step>
      )}

      {step === 3 && (
        <Step back={back} title="Do you tend to run hot or cold?" subtitle="Mosquitoes have infrared-sensitive antennae. Warmer skin = brighter target.">
          {([
            { id: 'hot', label: '🔥 Always warm — first to take off layers' },
            { id: 'average', label: '🌡️ About average' },
            { id: 'cold', label: '🧊 Always cold — last to take off layers' },
          ] as const).map((o) => (
            <Btn key={o.id} selected={temperature === o.id} onClick={() => { setTemperature(o.id); setTimeout(next, 200) }}>{o.label}</Btn>
          ))}
        </Step>
      )}

      {step === 4 && (
        <Step back={back} title="Beer or cocktail with sunset?" subtitle="Lefèvre et al. (2010): one beer measurably increases mosquito landings within 15 minutes. Yes, really.">
          {([
            { id: 'often', label: 'Often / regularly' },
            { id: 'sometimes', label: 'Sometimes' },
            { id: 'rarely', label: 'Rarely / never' },
          ] as const).map((o) => (
            <Btn key={o.id} selected={alcohol === o.id} onClick={() => { setAlcohol(o.id); setTimeout(next, 200) }}>{o.label}</Btn>
          ))}
        </Step>
      )}

      {step === 5 && (
        <Step back={back} title="Are you currently pregnant?" subtitle="Pregnant women are bitten 2x more (CO2 + body temp both increase). Crucial protection variable.">
          <Btn selected={pregnant === true} onClick={() => { setPregnant(true); setTimeout(next, 200) }}>Yes</Btn>
          <Btn selected={pregnant === false} onClick={() => { setPregnant(false); setTimeout(next, 200) }}>No / Not applicable</Btn>
        </Step>
      )}

      {step === 6 && (
        <Step back={back} title="Time outdoors at dusk in summer?" subtitle="Most GTA mosquito species are crepuscular — they hunt hardest in the 2 hours around sunset.">
          {([
            { id: 'hours', label: 'Hours — patio, gardening, dog walks' },
            { id: 'thirty-min', label: '~30 minutes — usually inside by dark' },
            { id: 'almost-never', label: 'Almost never outside at dusk' },
          ] as const).map((o) => (
            <Btn key={o.id} selected={duskExposure === o.id} onClick={() => { setDuskExposure(o.id); setTimeout(next, 200) }}>{o.label}</Btn>
          ))}
        </Step>
      )}

      {step === 7 && (
        <Step back={back} title="Outdoor clothing colour preference?" subtitle="Mosquitoes use visual contrast to locate. Dark colours stand out; light blends in.">
          {([
            { id: 'dark', label: '🖤 Dark — black, navy, deep colours' },
            { id: 'mixed', label: '🌗 Mixed — depends on the day' },
            { id: 'light', label: '🤍 Light — white, beige, pastels' },
          ] as const).map((o) => (
            <Btn key={o.id} selected={clothing === o.id} onClick={() => { setClothing(o.id); setTimeout(next, 200) }}>{o.label}</Btn>
          ))}
        </Step>
      )}

      {step === 8 && (
        <Step back={back} title="Heavy on lotions / perfume / scented products?" subtitle="Floral fragrances mimic flower nectar — adult mosquitoes feed on nectar, so you smell like food.">
          {([
            { id: 'heavy', label: 'Yes — body lotion, perfume, scented sunscreen' },
            { id: 'some', label: 'Some — sunscreen, occasional perfume' },
            { id: 'minimal', label: 'Minimal — unscented or none' },
          ] as const).map((o) => (
            <Btn key={o.id} selected={fragrance === o.id} onClick={() => { setFragrance(o.id); setTimeout(next, 200) }}>{o.label}</Btn>
          ))}
        </Step>
      )}

      {step === 9 && result && (
        <ScoreReveal
          result={result}
          back={back}
          name={name} setName={setName}
          email={email} setEmail={setEmail}
          submitting={submitting}
          error={error}
          onSubmit={handleSubmit}
        />
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
        {subtitle && <p className="text-sm text-gray-600 mt-2 italic">{subtitle}</p>}
      </div>
      <div className="space-y-2">{children}</div>
    </div>
  )
}

function Btn({ selected, onClick, children }: { selected: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button onClick={onClick}
      className={`w-full p-4 rounded-xl border-2 text-left transition-all ${selected ? 'border-brand-600 bg-brand-50 shadow' : 'border-gray-200 bg-white hover:border-gray-300'}`}>
      <span className="font-bold text-brand-900">{children}</span>
    </button>
  )
}

function ScoreReveal({ result, back, name, setName, email, setEmail, submitting, error, onSubmit }: {
  result: MagnetResult
  back: () => void
  name: string; setName: (v: string) => void
  email: string; setEmail: (v: string) => void
  submitting: boolean; error: string
  onSubmit: () => void
}) {
  const colors = {
    red: 'from-red-600 to-rose-700',
    orange: 'from-orange-500 to-amber-600',
    amber: 'from-amber-500 to-yellow-500',
    emerald: 'from-emerald-500 to-green-600',
  }[result.tierColor]

  return (
    <div className="space-y-5">
      <button onClick={back} className="text-sm text-brand-600 hover:underline">← Back</button>

      <div className={`rounded-3xl bg-gradient-to-br ${colors} text-white p-8 shadow-2xl text-center`}>
        <p className="text-xs uppercase tracking-widest opacity-80 font-semibold mb-2">Your Mosquito Magnet Score</p>
        <div className="text-7xl mb-2">{result.tierEmoji}</div>
        <div className="text-7xl font-black leading-none mb-1">{result.score}<span className="text-3xl opacity-70 font-bold"> / 100</span></div>
        <p className="text-2xl font-extrabold mb-3">{result.tierLabel}</p>
        <p className="text-base opacity-90 leading-relaxed max-w-md mx-auto">{result.tierTagline}</p>
      </div>

      <div className="rounded-2xl bg-white border border-brand-100 p-5">
        <h3 className="font-extrabold text-brand-900 text-base mb-3">Why mosquitoes target YOU</h3>
        <div className="space-y-3">
          {result.topDrivers.map((d, i) => (
            <div key={i} className="border-l-4 border-amber-400 pl-4">
              <p className="font-bold text-brand-900 text-sm">{d.driver}</p>
              <p className="text-xs text-gray-700 mt-1 leading-relaxed">{d.explanation}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl bg-rose-50 border-l-4 border-rose-500 p-5">
        <p className="text-xs font-extrabold text-rose-700 uppercase tracking-wider mb-2">⚠️ The bigger problem</p>
        <p className="text-sm text-gray-800 leading-relaxed">{result.yardPivot}</p>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-brand-900 to-brand-950 text-white p-6 shadow-xl">
        <h3 className="text-xl font-extrabold mb-2">Get your full magnet report + protection plan</h3>
        <p className="text-sm text-brand-200 mb-4">Custom email from Alex with your full breakdown, the science behind every factor, and a personalized protection plan based on your specific magnet profile. No spam.</p>
        <div className="space-y-2">
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" required
            className="w-full rounded-xl border border-brand-700 bg-brand-900/50 px-4 py-3 text-white placeholder:text-brand-400 focus:border-amber-400 focus:outline-none" />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" required
            className="w-full rounded-xl border border-brand-700 bg-brand-900/50 px-4 py-3 text-white placeholder:text-brand-400 focus:border-amber-400 focus:outline-none" />
          {error && <p className="text-amber-300 text-xs">{error}</p>}
          <button onClick={onSubmit} disabled={submitting || !name || !email}
            className="w-full bg-amber-500 hover:bg-amber-400 disabled:opacity-60 text-white font-extrabold px-6 py-4 rounded-full text-lg shadow-xl transition-colors mt-2">
            {submitting ? 'Generating your report…' : '📧 Send My Magnet Report'}
          </button>
        </div>
        <p className="text-[10px] text-brand-300 mt-3 text-center">🔒 We never sell your info.</p>
      </div>
    </div>
  )
}

function Confirmation({ result, name, email }: { result: MagnetResult; name: string; email: string }) {
  const shareText = `My mosquito magnet score is ${result.score}/100 — ${result.tierLabel}. Take the test: buzzskito.ca/am-i-a-mosquito-magnet`
  return (
    <div className="space-y-6 text-center py-8">
      <div className="text-7xl">{result.tierEmoji}</div>
      <h2 className="text-3xl font-extrabold text-brand-900">{name.split(' ')[0]}, your magnet report is on its way!</h2>
      <p className="text-gray-600 max-w-md mx-auto">Check <strong>{email}</strong> in the next 60 seconds. The full breakdown is being delivered now.</p>

      <div className="rounded-2xl bg-amber-50 border border-amber-200 p-5 max-w-md mx-auto">
        <p className="text-sm font-bold text-amber-900 mb-2">Brag about your score</p>
        <p className="text-sm text-gray-700 mb-3">Your score: <strong>{result.score}/100 — {result.tierLabel}</strong></p>
        <button
          onClick={() => navigator.clipboard?.writeText(shareText)}
          className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-bold px-5 py-2 rounded-full text-sm transition-colors"
        >📋 Copy share text</button>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-brand-900 to-brand-950 text-white p-6 max-w-md mx-auto shadow-xl">
        <p className="text-xs font-extrabold text-amber-400 uppercase tracking-widest mb-2">Next step</p>
        <h3 className="text-xl font-extrabold mb-2">Now check what your YARD scores</h3>
        <p className="text-sm text-brand-200 mb-4">Personal protection only solves half of it. Want to know how bad your specific yard&rsquo;s mosquito pressure is?</p>
        <Link href="/yard-risk-report" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-6 py-3 rounded-full text-sm transition-colors">Get My Free Yard Risk Score →</Link>
      </div>

      <p className="text-sm text-gray-500">Or call <a href={BUSINESS.phoneHref} className="text-brand-700 underline font-semibold">{BUSINESS.phone}</a></p>
    </div>
  )
}
