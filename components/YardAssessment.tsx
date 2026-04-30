'use client'

import { useState } from 'react'
import Link from 'next/link'
import { BUSINESS } from '@/lib/constants'
import AddressAutocomplete, { type ParsedAddress } from './AddressAutocomplete'
import { matchServiceAreaFeature, neighboursUsingBuzzSkito } from '@/lib/service-area-features'

const HUB_API_URL = process.env.NEXT_PUBLIC_HUB_API_URL || 'https://app.buzzskito.ca'

type ServiceType = 'mosquito' | 'tick' | 'both'
type RiskLevel = 'high' | 'moderate' | 'at_risk'

interface Answers {
  service_type: ServiceType | null
  adjacent_features: string | null
  severity: string | null
  previous_attempts: string | null
  kids_pets: string | null
}

// ── Risk scoring ──
function calculateRisk(answers: Answers): RiskLevel {
  let score = 0

  // Adjacent features
  const highFeatures = ['Ravine', 'Creek or River', 'Forest or woodlot', 'Trail (Bruce Trail, etc.)']
  const medFeatures = ['Pond or Lake', 'Conservation Area', 'Conservation area']
  const lowFeatures = ['Golf Course', 'Open field or farmland']
  if (highFeatures.includes(answers.adjacent_features || '')) score += 3
  else if (medFeatures.includes(answers.adjacent_features || '')) score += 2
  else if (lowFeatures.includes(answers.adjacent_features || '')) score += 1

  // Severity
  const highSeverity = ["Can't enjoy the yard after 6pm", 'Found ticks on family members']
  const medSeverity = ['BBQs and parties get ruined', 'Found ticks on pets']
  const lowSeverity = ['Occasional bites, want it fixed', 'No, but worried about Lyme disease']
  if (highSeverity.includes(answers.severity || '')) score += 3
  else if (medSeverity.includes(answers.severity || '')) score += 2
  else if (lowSeverity.includes(answers.severity || '')) score += 1

  // Kids/pets
  if (answers.kids_pets === 'Yes, both') score += 2
  else if (answers.kids_pets === 'Kids only' || answers.kids_pets === 'Pets only') score += 1

  if (score >= 6) return 'high'
  if (score >= 3) return 'moderate'
  return 'at_risk'
}

function getRiskConfig(level: RiskLevel) {
  switch (level) {
    case 'high': return { label: 'HIGH RISK', color: 'bg-red-600', text: 'text-red-600', border: 'border-red-200', bg: 'bg-red-50' }
    case 'moderate': return { label: 'MODERATE RISK', color: 'bg-amber-500', text: 'text-amber-600', border: 'border-amber-200', bg: 'bg-amber-50' }
    case 'at_risk': return { label: 'AT RISK', color: 'bg-blue-600', text: 'text-blue-600', border: 'border-blue-200', bg: 'bg-blue-50' }
  }
}

function getInsight(answers: Answers, risk: RiskLevel, name: string): string {
  const feature = answers.adjacent_features || 'standard GTA conditions'
  const hasKidsPets = answers.kids_pets === 'Yes, both' ? 'kids and pets' : answers.kids_pets === 'Kids only' ? 'kids' : answers.kids_pets === 'Pets only' ? 'pets' : 'your family'

  if (risk === 'high') {
    return `Your property backs onto a ${feature.toLowerCase()}, which means mosquitoes and ticks have a continuous breeding source within metres of your yard. Combined with ${hasKidsPets} using the outdoor space, professional barrier spray is the most effective protection available.`
  }
  if (risk === 'moderate') {
    return `Your property has features that attract mosquito and tick activity — and with ${hasKidsPets} using the outdoor space, seasonal protection ensures your family can enjoy the yard all summer without interruption.`
  }
  return `While your property doesn't border major natural features, every yard in the GTA is within range of mosquito breeding sources — stormwater ponds, neighbourhood ravines, and even clogged gutters on nearby homes. A seasonal prevention program keeps your yard protected before problems start.`
}

function getRecommendedPlan(answers: Answers): string {
  if (answers.service_type === 'tick') return 'Tick Protection Program'
  if (answers.service_type === 'both') return 'Combined Mosquito & Tick Program'
  return 'Standard Protection Program'
}

// ── Question configs ──
const MOSQUITO_QUESTIONS = {
  adjacent: {
    question: 'Does your property back onto any of these?',
    options: ['Ravine', 'Creek or River', 'Pond or Lake', 'Conservation Area', 'Golf Course', 'None of these'],
  },
  severity: {
    question: 'How bad is your mosquito problem?',
    options: ["Can't enjoy the yard after 6pm", 'BBQs and parties get ruined', 'Occasional bites, want it fixed', 'Just want prevention before season starts'],
  },
  previous: {
    question: 'Have you tried anything before?',
    options: ['Store-bought sprays', 'Citronella candles/torches', 'Bug zappers', 'Nothing yet', 'Had professional service before'],
  },
}

const TICK_QUESTIONS = {
  adjacent: {
    question: 'Does your property back onto any of these?',
    options: ['Forest or woodlot', 'Trail (Bruce Trail, etc.)', 'Conservation area', 'Ravine', 'Open field or farmland', 'None of these'],
  },
  severity: {
    question: 'Have you or your family encountered ticks?',
    options: ['Found ticks on family members', 'Found ticks on pets', 'No, but worried about Lyme disease', 'Just want prevention'],
  },
  previous: {
    question: "What's your yard like?",
    options: ['Lots of trees and shade', 'Garden beds, shrubs, leaf litter', 'Mostly open lawn', 'Mix of everything'],
  },
}

const KIDS_PETS = {
  question: 'Do you have kids or pets that use the yard?',
  options: ['Yes, both', 'Kids only', 'Pets only', 'Neither'],
}

// ── Main Component ──
export default function YardAssessment() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Answers>({
    service_type: null,
    adjacent_features: null,
    severity: null,
    previous_attempts: null,
    kids_pets: null,
  })
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [parsedAddress, setParsedAddress] = useState<ParsedAddress | null>(null)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [riskLevel, setRiskLevel] = useState<RiskLevel | null>(null)
  const [error, setError] = useState('')

  const questions = answers.service_type === 'tick' ? TICK_QUESTIONS : MOSQUITO_QUESTIONS
  const totalSteps = 6

  function selectAnswer(field: keyof Answers, value: string) {
    setAnswers(prev => ({ ...prev, [field]: value }))
    // Auto-advance after selection
    setTimeout(() => setStep(s => s + 1), 200)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name || !email || !address) return
    setLoading(true)
    setError('')

    const risk = calculateRisk(answers)
    setRiskLevel(risk)

    try {
      const res = await fetch(`${HUB_API_URL}/api/quiz-lead`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim() || null,
          address: address.trim(),
          service_type: answers.service_type,
          risk_level: risk,
          answers,
          // Geo data from Google Maps autocomplete (null if user typed manually)
          geo: parsedAddress ? {
            street: parsedAddress.street,
            city: parsedAddress.city,
            neighbourhood: parsedAddress.neighbourhood,
            province: parsedAddress.province,
            postal_code: parsedAddress.postalCode,
            country: parsedAddress.country,
            lat: parsedAddress.lat,
            lng: parsedAddress.lng,
            formatted: parsedAddress.formatted,
          } : null,
        }),
      })

      if (!res.ok) throw new Error('Failed')
      setSubmitted(true)
      setStep(7)
    } catch {
      setError('Something went wrong. Please call (289) 216-5030 instead.')
    } finally {
      setLoading(false)
    }
  }

  // ── Progress Bar ──
  function ProgressBar() {
    if (step >= 7) return null
    const progress = Math.round(((step + 1) / totalSteps) * 100)
    return (
      <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
        <div
          className="bg-amber-500 h-2 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
        <p className="text-xs text-gray-500 mt-2 text-center">Step {Math.min(step + 1, 6)} of 6</p>
      </div>
    )
  }

  // ── Option Card ──
  function OptionCard({ label, selected, onClick, icon }: { label: string; selected: boolean; onClick: () => void; icon?: string }) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`w-full text-left rounded-xl border-2 p-4 sm:p-5 transition-all duration-150 ${
          selected
            ? 'border-brand-600 bg-brand-50 ring-2 ring-brand-500/20 shadow-md'
            : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
        }`}
      >
        <div className="flex items-center gap-3">
          {icon && <span className="text-2xl">{icon}</span>}
          <span className={`font-semibold text-sm sm:text-base ${selected ? 'text-brand-800' : 'text-gray-700'}`}>{label}</span>
          {selected && (
            <svg className="ml-auto h-5 w-5 text-brand-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
      </button>
    )
  }

  // ── Render Steps ──
  return (
    <div className="max-w-xl mx-auto px-4 py-8 sm:py-12">
      <ProgressBar />

      {/* ── Step 0: Service Selection ── */}
      {step === 0 && (
        <div className="space-y-6 animate-in fade-in">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-900 mb-2">Is Your Yard at Risk?</h1>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-900 mb-3">Find Out in 60 Seconds</h2>
            <p className="text-gray-600">Answer 5 quick questions and get a free personalized yard risk assessment.</p>
          </div>
          <div className="space-y-3">
            <OptionCard
              label="Mosquito Control"
              icon="🦟"
              selected={answers.service_type === 'mosquito'}
              onClick={() => { setAnswers(a => ({ ...a, service_type: 'mosquito' })); setTimeout(() => setStep(1), 200) }}
            />
            <OptionCard
              label="Tick Control"
              icon="🛡️"
              selected={answers.service_type === 'tick'}
              onClick={() => { setAnswers(a => ({ ...a, service_type: 'tick' })); setTimeout(() => setStep(1), 200) }}
            />
            <OptionCard
              label="Both — Mosquito & Tick"
              icon="✨"
              selected={answers.service_type === 'both'}
              onClick={() => { setAnswers(a => ({ ...a, service_type: 'both' })); setTimeout(() => setStep(1), 200) }}
            />
          </div>
        </div>
      )}

      {/* ── Step 1: Adjacent Features ── */}
      {step === 1 && (
        <div className="space-y-6">
          <div>
            <button onClick={() => setStep(0)} className="text-sm text-brand-600 hover:underline mb-3">&larr; Back</button>
            <h2 className="text-xl sm:text-2xl font-extrabold text-brand-900">{questions.adjacent.question}</h2>
          </div>
          <div className="space-y-2.5">
            {questions.adjacent.options.map(opt => (
              <OptionCard key={opt} label={opt} selected={answers.adjacent_features === opt} onClick={() => selectAnswer('adjacent_features', opt)} />
            ))}
          </div>
        </div>
      )}

      {/* ── Step 2: Severity ── */}
      {step === 2 && (
        <div className="space-y-6">
          <div>
            <button onClick={() => setStep(1)} className="text-sm text-brand-600 hover:underline mb-3">&larr; Back</button>
            <h2 className="text-xl sm:text-2xl font-extrabold text-brand-900">{questions.severity.question}</h2>
          </div>
          <div className="space-y-2.5">
            {questions.severity.options.map(opt => (
              <OptionCard key={opt} label={opt} selected={answers.severity === opt} onClick={() => selectAnswer('severity', opt)} />
            ))}
          </div>
        </div>
      )}

      {/* ── Step 3: Previous Attempts / Yard Type ── */}
      {step === 3 && (
        <div className="space-y-6">
          <div>
            <button onClick={() => setStep(2)} className="text-sm text-brand-600 hover:underline mb-3">&larr; Back</button>
            <h2 className="text-xl sm:text-2xl font-extrabold text-brand-900">{questions.previous.question}</h2>
          </div>
          <div className="space-y-2.5">
            {questions.previous.options.map(opt => (
              <OptionCard key={opt} label={opt} selected={answers.previous_attempts === opt} onClick={() => selectAnswer('previous_attempts', opt)} />
            ))}
          </div>
        </div>
      )}

      {/* ── Step 4: Kids / Pets ── */}
      {step === 4 && (
        <div className="space-y-6">
          <div>
            <button onClick={() => setStep(3)} className="text-sm text-brand-600 hover:underline mb-3">&larr; Back</button>
            <h2 className="text-xl sm:text-2xl font-extrabold text-brand-900">{KIDS_PETS.question}</h2>
          </div>
          <div className="space-y-2.5">
            {KIDS_PETS.options.map(opt => (
              <OptionCard key={opt} label={opt} selected={answers.kids_pets === opt} onClick={() => selectAnswer('kids_pets', opt)} />
            ))}
          </div>
        </div>
      )}

      {/* ── Step 5: Contact Form ── */}
      {step === 5 && (
        <div className="space-y-6">
          <div>
            <button onClick={() => setStep(4)} className="text-sm text-brand-600 hover:underline mb-3">&larr; Back</button>
            <h2 className="text-xl sm:text-2xl font-extrabold text-brand-900">Almost done — where should we send your free assessment?</h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="quiz-name" className="block text-sm font-bold text-brand-900 mb-1">Full Name <span className="text-red-500">*</span></label>
              <input id="quiz-name" type="text" required value={name} onChange={e => setName(e.target.value)} placeholder="John Smith"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-brand-900 placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" />
            </div>
            <div>
              <label htmlFor="quiz-email" className="block text-sm font-bold text-brand-900 mb-1">Email Address <span className="text-red-500">*</span></label>
              <input id="quiz-email" type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="john@example.com"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-brand-900 placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" />
            </div>
            <div>
              <label htmlFor="quiz-phone" className="block text-sm font-bold text-brand-900 mb-1">Phone <span className="text-gray-400 font-normal">(for fastest response)</span></label>
              <input id="quiz-phone" type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="(416) 555-0123"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-brand-900 placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" />
            </div>
            <div>
              <label htmlFor="quiz-address" className="block text-sm font-bold text-brand-900 mb-1">Street Address <span className="text-red-500">*</span><span className="text-gray-400 font-normal text-xs ml-1">(start typing — we&rsquo;ll auto-complete)</span></label>
              <AddressAutocomplete
                id="quiz-address"
                required
                value={address}
                onChange={setAddress}
                onSelect={setParsedAddress}
                placeholder="123 Maple Street, Mississauga"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-brand-900 placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
              />
            </div>
            {error && <div className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600">{error}</div>}
            <button type="submit" disabled={loading}
              className="w-full bg-amber-500 hover:bg-amber-400 disabled:opacity-60 text-white font-extrabold px-6 py-4 rounded-full text-lg shadow-xl transition-colors">
              {loading ? 'Analyzing your yard...' : 'See My Risk Level →'}
            </button>
          </form>
        </div>
      )}

      {/* ── Step 6 (Results): Risk Assessment ── */}
      {step === 7 && riskLevel && submitted && (
        <div className="space-y-6">
          {/* Risk Badge */}
          {(() => {
            const config = getRiskConfig(riskLevel)
            return (
              <div className={`rounded-2xl border-2 ${config.border} ${config.bg} p-6 text-center`}>
                <p className="text-sm text-gray-500 mb-2">{name.split(' ')[0]}, here&rsquo;s your yard risk assessment</p>
                <div className={`inline-block ${config.color} text-white text-xl sm:text-2xl font-black px-6 py-2 rounded-full mb-4`}>
                  {config.label}
                </div>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  {getInsight(answers, riskLevel, name)}
                </p>
              </div>
            )
          })()}

          {/* Recommended Plan — personalized via geo data */}
          {(() => {
            const featureMatch = matchServiceAreaFeature({
              city: parsedAddress?.city ?? null,
              neighbourhood: parsedAddress?.neighbourhood ?? null,
            })
            const neighbours = neighboursUsingBuzzSkito(parsedAddress?.formatted || address || email)
            const showLocalContext = featureMatch.isInServiceArea && featureMatch.feature
            // Build a precise location label: "Neighbourhood, City" when a known
            // neighbourhood matched, otherwise just the city. This makes the
            // personalization explicit so customers can verify it matches their area.
            const cityName = parsedAddress?.city || null
            const hoodName = featureMatch.neighbourhoodMatch || null
            const locationLabel = hoodName && cityName && hoodName.toLowerCase() !== cityName.toLowerCase()
              ? `${hoodName}, ${cityName}`
              : (cityName || hoodName)
            return (
              <div className="rounded-2xl border border-brand-100 bg-white p-6">
                <h3 className="text-lg font-extrabold text-brand-900 mb-2">Your Personalized Protection Plan</h3>
                {showLocalContext && locationLabel ? (
                  <p className="text-gray-700 text-sm mb-4">
                    Based on your property in <strong>{locationLabel}</strong>, we recommend our <strong>Standard Protection Plan</strong>. <strong>{featureMatch.feature}</strong> — {featureMatch.reason}, so continuous bi-weekly coverage from May through September is the most effective protection for your yard.
                  </p>
                ) : (
                  <p className="text-gray-600 text-sm mb-4">
                    Based on your assessment, we recommend our <strong>{getRecommendedPlan(answers)}</strong> for your property.
                  </p>
                )}
                {showLocalContext && locationLabel && (
                  <div className="rounded-xl bg-amber-50 border border-amber-200 p-4 mb-4">
                    <p className="text-sm text-amber-900">
                      🏘️ <strong>{neighbours} of your neighbours</strong> in {locationLabel} already use BuzzSkito.
                    </p>
                  </div>
                )}
                <div className="rounded-xl bg-brand-50 border border-brand-100 p-4 mb-4">
                  <p className="text-sm text-brand-800">
                    📧 A personalized quote based on your yard size and protection needs will be sent to <strong>{email}</strong> within the next few minutes.
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-2">Want to talk to someone right now?</p>
                  <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-2 bg-brand-800 hover:bg-brand-700 text-white font-bold px-6 py-3 rounded-full transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                    {BUSINESS.phone}
                  </a>
                </div>
              </div>
            )
          })()}

          {/* Trust Signals */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: '✓', label: '100% Satisfaction Guarantee' },
              { icon: '🍁', label: 'Health Canada-Approved' },
              { icon: '👶', label: 'Safe for Kids & Pets (30 min)' },
              { icon: '⭐', label: '5.0 ★★★★★ — 129 Reviews' },
            ].map(({ icon, label }) => (
              <div key={label} className="rounded-xl bg-brand-50 border border-brand-100 p-3 text-center">
                <span className="text-lg">{icon}</span>
                <p className="text-xs font-semibold text-brand-800 mt-1">{label}</p>
              </div>
            ))}
          </div>

          {/* Back to home */}
          <div className="text-center">
            <Link href="/" className="text-sm text-brand-600 hover:underline">← Back to buzzskito.ca</Link>
          </div>
        </div>
      )}
    </div>
  )
}
