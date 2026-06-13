/**
 * Illustrated hero scene — fully vector, no photography.
 *
 * An isometric backyard (board fence, lawn slab, garden, dusk sky) with a clean
 * mascot BuzzSkito technician — royal-blue shirt + yellow logo badge, khaki
 * pants, orange backpack mist-blower, cap + respirator — spraying. A protective
 * barrier sweeps around the whole yard perimeter while mosquitoes bounce off.
 *
 * Scroll-driven groups (sc-barrier, sc-mosq) read --barrier / --repel from
 * CinematicHero's rAF driver. Perimeter sweep, mist, wing-flap, dome pulse, and
 * the mascot's idle bob loop ambiently (gated behind prefers-reduced-motion in
 * globals.css). Compositor-only.
 */

// Lawn diamond vertices (isometric)
const TOP = [640, 300]
const RIGHT = [1010, 415]
const BOTTOM = [640, 545]
const LEFT = [270, 415]
const lerp = (a: number[], b: number[], t: number) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t]

// Fence pickets along the two back edges
const FENCE_H = 60
const pickets = (a: number[], b: number[]) =>
  Array.from({ length: 9 }, (_, i) => {
    const [x, y] = lerp(a, b, 0.05 + i * 0.115)
    return { x, y }
  })

export default function HeroScene() {
  return (
    <svg className="cine-scene-svg" viewBox="0 0 1200 760" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="hsSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#16365f" />
          <stop offset="0.6" stopColor="#102a47" />
          <stop offset="1" stopColor="#0c2236" />
        </linearGradient>
        <radialGradient id="hsGlow" cx="0.5" cy="0.1" r="0.6">
          <stop offset="0" stopColor="#2f6bb0" stopOpacity="0.5" />
          <stop offset="1" stopColor="#2f6bb0" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hsLawn" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0" stopColor="#2f8451" />
          <stop offset="1" stopColor="#256b41" />
        </linearGradient>
        <radialGradient id="hsTreat" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#7ef0d6" stopOpacity="0.5" />
          <stop offset="1" stopColor="#7ef0d6" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="hsMist" cx="0.7" cy="0.4" r="0.7">
          <stop offset="0" stopColor="#dff5ff" stopOpacity="0.75" />
          <stop offset="1" stopColor="#dff5ff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hsWall" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#6ee7d2" stopOpacity="0.30" />
          <stop offset="1" stopColor="#6ee7d2" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Sky */}
      <rect x="0" y="0" width="1200" height="760" fill="url(#hsSky)" />
      <rect x="0" y="0" width="1200" height="430" fill="url(#hsGlow)" />
      <circle cx="640" cy="120" r="60" fill="#e6eef8" opacity="0.10" />

      {/* Trees behind the fence */}
      <g>
        <ellipse cx="430" cy="250" rx="58" ry="66" fill="#0e3325" />
        <ellipse cx="478" cy="262" rx="44" ry="50" fill="#11402d" />
        <rect x="424" y="300" width="10" height="40" fill="#3a2a18" />
        <path d="M840 300 l-26 -92 l17 0 l-22 -74 l15 0 l-25 -64 l-25 64 l15 0 l-22 74 l17 0 l-26 92 Z" fill="#0d2f21" />
        <ellipse cx="970" cy="268" rx="50" ry="56" fill="#0e3526" />
      </g>

      {/* ── Board fence along the two back edges ── */}
      <g>
        {/* back-left run */}
        <polygon points={`${LEFT[0]},${LEFT[1]} ${TOP[0]},${TOP[1]} ${TOP[0]},${TOP[1] - FENCE_H} ${LEFT[0]},${LEFT[1] - FENCE_H}`} fill="#163a55" />
        <polygon points={`${LEFT[0]},${LEFT[1] - FENCE_H} ${TOP[0]},${TOP[1] - FENCE_H} ${TOP[0]},${TOP[1] - FENCE_H + 8} ${LEFT[0]},${LEFT[1] - FENCE_H + 8}`} fill="#1d4a6b" />
        {pickets(LEFT, TOP).map((p, i) => (
          <line key={`l${i}`} x1={p.x} y1={p.y} x2={p.x} y2={p.y - FENCE_H} stroke="#0f2c43" strokeWidth="2" />
        ))}
        {/* back-right run */}
        <polygon points={`${TOP[0]},${TOP[1]} ${RIGHT[0]},${RIGHT[1]} ${RIGHT[0]},${RIGHT[1] - FENCE_H} ${TOP[0]},${TOP[1] - FENCE_H}`} fill="#123349" />
        <polygon points={`${TOP[0]},${TOP[1] - FENCE_H} ${RIGHT[0]},${RIGHT[1] - FENCE_H} ${RIGHT[0]},${RIGHT[1] - FENCE_H + 8} ${TOP[0]},${TOP[1] - FENCE_H + 8}`} fill="#1a405d" />
        {pickets(TOP, RIGHT).map((p, i) => (
          <line key={`r${i}`} x1={p.x} y1={p.y} x2={p.x} y2={p.y - FENCE_H} stroke="#0d2638" strokeWidth="2" />
        ))}
      </g>

      {/* ── Lawn slab (top + front faces for thickness) ── */}
      <polygon points={`${LEFT[0]},${LEFT[1]} ${BOTTOM[0]},${BOTTOM[1]} ${BOTTOM[0]},${BOTTOM[1] + 26} ${LEFT[0]},${LEFT[1] + 26}`} fill="#1c5230" />
      <polygon points={`${BOTTOM[0]},${BOTTOM[1]} ${RIGHT[0]},${RIGHT[1]} ${RIGHT[0]},${RIGHT[1] + 26} ${BOTTOM[0]},${BOTTOM[1] + 26}`} fill="#174526" />
      <polygon points={`${TOP[0]},${TOP[1]} ${RIGHT[0]},${RIGHT[1]} ${BOTTOM[0]},${BOTTOM[1]} ${LEFT[0]},${LEFT[1]}`} fill="url(#hsLawn)" />
      {/* mowing stripes */}
      <g stroke="#3a9460" strokeWidth="2" opacity="0.35">
        <line x1={lerp(LEFT, TOP, 0.3)[0]} y1={lerp(LEFT, TOP, 0.3)[1]} x2={lerp(BOTTOM, RIGHT, 0.3)[0]} y2={lerp(BOTTOM, RIGHT, 0.3)[1]} />
        <line x1={lerp(LEFT, TOP, 0.6)[0]} y1={lerp(LEFT, TOP, 0.6)[1]} x2={lerp(BOTTOM, RIGHT, 0.6)[0]} y2={lerp(BOTTOM, RIGHT, 0.6)[1]} />
      </g>
      {/* garden bed front-left */}
      <polygon points={`${LEFT[0]},${LEFT[1]} ${lerp(LEFT, BOTTOM, 0.42)[0]},${lerp(LEFT, BOTTOM, 0.42)[1]} ${lerp(LEFT, BOTTOM, 0.42)[0] + 36},${lerp(LEFT, BOTTOM, 0.42)[1] - 10} ${LEFT[0] + 36},${LEFT[1] - 10}`} fill="#3a2c1a" opacity="0.8" />
      <circle cx={LEFT[0] + 26} cy={LEFT[1] + 6} r="9" fill="#2c7a46" />
      <circle cx={LEFT[0] + 50} cy={LEFT[1] + 22} r="8" fill="#2c7a46" />

      {/* treated-grass glow under the spray */}
      <ellipse cx="470" cy="470" rx="150" ry="46" fill="url(#hsTreat)" />

      {/* ── Barrier around the whole yard (scroll-driven via --barrier) ── */}
      <g className="sc-barrier">
        {/* protected-lawn wash */}
        <polygon points={`${TOP[0]},${TOP[1]} ${RIGHT[0]},${RIGHT[1]} ${BOTTOM[0]},${BOTTOM[1]} ${LEFT[0]},${LEFT[1]}`} fill="#6ee7d2" opacity="0.13" />
        {/* translucent barrier walls rising from the two back edges */}
        <polygon points={`${LEFT[0]},${LEFT[1]} ${TOP[0]},${TOP[1]} ${TOP[0]},${TOP[1] - 95} ${LEFT[0]},${LEFT[1] - 95}`} fill="url(#hsWall)" />
        <polygon points={`${TOP[0]},${TOP[1]} ${RIGHT[0]},${RIGHT[1]} ${RIGHT[0]},${RIGHT[1] - 95} ${TOP[0]},${TOP[1] - 95}`} fill="url(#hsWall)" />
        {/* glowing perimeter base + amber sweep */}
        <polygon className="sc-perim" points={`${TOP[0]},${TOP[1]} ${RIGHT[0]},${RIGHT[1]} ${BOTTOM[0]},${BOTTOM[1]} ${LEFT[0]},${LEFT[1]}`} fill="none" stroke="#7ef0d6" strokeWidth="4.5" opacity="0.9" strokeLinejoin="round" />
        <polygon className="sc-perim r2" points={`${TOP[0]},${TOP[1]} ${RIGHT[0]},${RIGHT[1]} ${BOTTOM[0]},${BOTTOM[1]} ${LEFT[0]},${LEFT[1]}`} fill="none" stroke="#ffd57a" strokeWidth="3" opacity="0.85" strokeLinejoin="round" />
        {/* corner glow nodes */}
        {[TOP, RIGHT, BOTTOM, LEFT].map((v, i) => (
          <circle key={i} cx={v[0]} cy={v[1]} r="5" fill="#aef6e4" opacity="0.8" />
        ))}
      </g>

      {/* ── Mosquitoes at the corners, bouncing off ── */}
      <g className="sc-mosq">
        {[
          { x: LEFT[0] - 6, y: LEFT[1] }, { x: RIGHT[0] + 6, y: RIGHT[1] },
          { x: TOP[0], y: TOP[1] - 18 }, { x: BOTTOM[0], y: BOTTOM[1] + 18 },
        ].map((m, i) => (
          <g key={i} transform={`translate(${m.x},${m.y})`}>
            <ellipse className="sc-wing" cx="-4" cy="-2" rx="5" ry="2.6" fill="#aebfd2" opacity="0.7" />
            <ellipse className="sc-wing" cx="4" cy="-2" rx="5" ry="2.6" fill="#aebfd2" opacity="0.7" />
            <ellipse cx="0" cy="1" rx="3.4" ry="3.4" fill="#0b1320" />
          </g>
        ))}
      </g>

      {/* ── Mascot technician (3/4 view, spraying down-left) ── */}
      <g className="cine-figure">
        <g transform="translate(648,300)">
          <ellipse cx="0" cy="172" rx="52" ry="11" fill="#0a1a10" opacity="0.4" />

          {/* Backpack (behind, right shoulder) */}
          <rect x="26" y="40" width="40" height="74" rx="15" fill="#cf531f" />
          <rect x="30" y="44" width="32" height="66" rx="12" fill="#ef6c2a" />
          <rect x="34" y="30" width="26" height="18" rx="6" fill="#28323d" />
          <rect x="60" y="46" width="12" height="30" rx="5" fill="#3a4652" />

          {/* Legs (khaki) */}
          <rect x="-22" y="118" width="20" height="50" rx="9" fill="#cbb487" />
          <rect x="4" y="118" width="20" height="50" rx="9" fill="#b89f6f" />
          <rect x="-25" y="162" width="26" height="14" rx="5" fill="#222b38" />
          <rect x="3" y="162" width="26" height="14" rx="5" fill="#1a222d" />

          {/* Torso (royal blue shirt) */}
          <path d="M-30 48 q30 -14 62 0 l5 64 q-36 14 -72 0 Z" fill="#2563eb" />
          <path d="M20 44 l8 68 q9 -3 13 -8 l-6 -60 Z" fill="#1d4ed8" opacity="0.9" />
          {/* backpack straps */}
          <path d="M22 42 q-20 30 -30 70" stroke="#16233a" strokeWidth="8" fill="none" />
          <path d="M-18 40 q-4 36 0 72" stroke="#16233a" strokeWidth="7" fill="none" opacity="0.85" />
          {/* yellow logo badge */}
          <rect x="-20" y="64" width="26" height="20" rx="6" fill="#fbbf24" />
          <circle cx="-7" cy="74" r="5" fill="#1e3a8a" />

          {/* Far arm (right, at side) */}
          <path d="M28 52 q22 14 24 50 q-12 6 -22 2 q-6 -28 -16 -44 Z" fill="#1d4ed8" />
          <circle cx="50" cy="104" r="9" fill="#e7b48f" />

          {/* Near arm (left) holding the wand, spraying down-left */}
          <path d="M-28 52 q-34 18 -64 56 q8 14 22 16 q34 -34 64 -50 Z" fill="#2563eb" />
          <circle cx="-86" cy="118" r="11" fill="#e7b48f" />
          {/* wand + nozzle */}
          <line x1="-86" y1="118" x2="-140" y2="150" stroke="#2f3e4c" strokeWidth="7" strokeLinecap="round" />
          <rect x="-156" y="142" width="22" height="11" rx="5" transform="rotate(28 -156 142)" fill="#44586b" />

          {/* Head: neck, face, cap, mask */}
          <rect x="-10" y="26" width="20" height="20" rx="8" fill="#d89f76" />
          <circle cx="0" cy="12" r="22" fill="#e7b48f" />
          {/* respirator mask */}
          <path d="M-15 14 q15 14 30 0 q-2 12 -15 14 q-13 -2 -15 -14 Z" fill="#e2e8f0" />
          <path d="M-15 14 q15 6 30 0" stroke="#c5cdd8" strokeWidth="2" fill="none" />
          {/* eyes */}
          <circle cx="-8" cy="6" r="2.8" fill="#1e293b" />
          <circle cx="8" cy="6" r="2.8" fill="#1e293b" />
          {/* cap */}
          <path d="M-22 0 q2 -26 22 -26 q22 0 22 24 q-22 -12 -44 2 Z" fill="#1e293b" />
          <rect x="-22" y="-4" width="44" height="7" rx="3" fill="#fbbf24" />
          <path d="M-22 0 q-16 2 -22 8 q14 4 24 -2 Z" fill="#16202c" />
        </g>
      </g>

      {/* Mist from the nozzle */}
      <g transform="translate(498,452)">
        <g className="sc-mist"><path d="M0 0 Q-44 8 -78 36 Q-44 22 -10 16 Z" fill="url(#hsMist)" /></g>
        <g className="sc-mist d2"><path d="M0 0 Q-38 -4 -66 18 Q-36 10 -8 8 Z" fill="url(#hsMist)" /></g>
        <g className="sc-mist d3"><path d="M0 0 Q-48 18 -82 48 Q-44 30 -10 20 Z" fill="url(#hsMist)" /></g>
      </g>
    </svg>
  )
}
