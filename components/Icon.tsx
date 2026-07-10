/**
 * Inline SVG stroke icon set — replaces OS emojis sitewide.
 *
 * Hand-tuned 24×24 Lucide-style paths (stroke 1.75, round caps). Server
 * component, zero JS cost. Use with an optional wrapper chip:
 *
 *   <IconChip name="mosquito" tone="brand" />   → 44px rounded chip
 *   <Icon name="shield-check" className="w-5 h-5 text-emerald-600" />
 */

const PATHS: Record<string, React.ReactNode> = {
  // Mosquito — slender body, angled wings
  mosquito: (
    <>
      <path d="M12 5v13" />
      <path d="M12 8 4.5 3.5" />
      <path d="M12 8l7.5-4.5" />
      <path d="M12 10 5 13.5" />
      <path d="M12 10l7 3.5" />
      <path d="M12 13l-5 5.5" />
      <path d="M12 13l5 5.5" />
      <circle cx="12" cy="6" r="1.4" fill="currentColor" stroke="none" />
    </>
  ),
  // Tick — rounded body, 8 legs
  tick: (
    <>
      <ellipse cx="12" cy="13" rx="4.5" ry="5.5" />
      <circle cx="12" cy="6.5" r="1.6" />
      <path d="M8 9.5 4.5 7" />
      <path d="M16 9.5 19.5 7" />
      <path d="M7.5 13H3.5" />
      <path d="M16.5 13h4" />
      <path d="M8 16.5 5 19.5" />
      <path d="M16 16.5l3 3" />
    </>
  ),
  'shield-check': (
    <>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  phone: (
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  ),
  message: (
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  ),
  'file-check': (
    <>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="m9 15 2 2 4-4" />
    </>
  ),
  'cloud-rain': (
    <>
      <path d="M4 14.9A7 7 0 1 1 15.7 8h1.8a4.5 4.5 0 0 1 2.5 8.2" />
      <path d="M16 14v6" />
      <path d="M8 14v6" />
      <path d="M12 16v6" />
    </>
  ),
  gift: (
    <>
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <path d="M12 8v13" />
      <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
      <path d="M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 0 1 0 5" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="8" r="6" />
      <path d="M15.5 13 17 22l-5-3-5 3 1.5-9" />
    </>
  ),
  refresh: (
    <>
      <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
      <path d="M3 21v-5h5" />
    </>
  ),
  'map-pin': (
    <>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  star: (
    <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  ),
  check: <path d="M20 6 9 17l-5-5" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </>
  ),
  'arrow-right': (
    <>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </>
  ),
  lock: (
    <>
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </>
  ),
  spray: (
    <>
      <path d="M9 8h6l1 13H8L9 8z" />
      <path d="M10 8V6a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v2" />
      <path d="M17 4h.01" />
      <path d="M20 6h.01" />
      <path d="M19 9h.01" />
    </>
  ),
  leaf: (
    <>
      <path d="M11 20A7 7 0 0 1 4 13C4 7 9 3 20 4c1 11-3 16-9 16z" />
      <path d="M4 21c4-4 6-6 9-9" />
    </>
  ),
  zap: <path d="M13 2 3 14h8l-1 8 11-13h-8l1-7z" />,
  tag: (
    <>
      <path d="M12 2H2v10l9.3 9.3a2 2 0 0 0 2.8 0l7.2-7.2a2 2 0 0 0 0-2.8L12 2z" />
      <circle cx="7" cy="7" r="1.5" />
    </>
  ),
  home: (
    <>
      <path d="m3 10 9-7 9 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <path d="M9 22V12h6v10" />
    </>
  ),
  user: (
    <>
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </>
  ),
}

export function Icon({
  name,
  className = 'w-5 h-5',
  strokeWidth = 1.75,
}: {
  name: keyof typeof PATHS | string
  className?: string
  strokeWidth?: number
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {PATHS[name] ?? PATHS['check']}
    </svg>
  )
}

/** 44px rounded icon chip — the standard card-icon treatment. */
export function IconChip({
  name,
  tone = 'brand',
  className = '',
}: {
  name: keyof typeof PATHS | string
  tone?: 'brand' | 'amber' | 'emerald' | 'ink'
  className?: string
}) {
  const tones: Record<string, string> = {
    brand: 'bg-brand-100 text-brand-700',
    amber: 'bg-amber-100 text-amber-700',
    emerald: 'bg-emerald-100 text-emerald-700',
    ink: 'bg-white/10 text-amber-400',
  }
  return (
    <span
      className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${tones[tone]} ${className}`}
      aria-hidden="true"
    >
      <Icon name={name} className="h-6 w-6" />
    </span>
  )
}

export default Icon
