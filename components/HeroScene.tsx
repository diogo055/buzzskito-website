/**
 * Illustrated hero scene — fully vector, no photography.
 *
 * A detailed, characterful BuzzSkito technician (blue shirt, orange backpack
 * mist-blower, respirator, cap) spraying a dusk backyard. Scroll-driven groups
 * (sc-barrier, sc-mosq) read the --barrier / --repel custom properties set by
 * CinematicHero's rAF driver; ambient loops (mist, wing-flap, ring pulse) live
 * in globals.css gated behind prefers-reduced-motion. Compositor-only.
 *
 * preserveAspectRatio keeps the technician (right of frame) visible while the
 * HTML copy sits over the calmer left third.
 */
export default function HeroScene() {
  return (
    <svg
      className="cine-scene-svg"
      viewBox="0 0 1200 760"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="hsSky" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0" stopColor="#16365f" />
          <stop offset="0.55" stopColor="#102a47" />
          <stop offset="1" stopColor="#0c2236" />
        </linearGradient>
        <radialGradient id="hsGlow" cx="0.78" cy="0.2" r="0.5">
          <stop offset="0" stopColor="#2f6bb0" stopOpacity="0.55" />
          <stop offset="1" stopColor="#2f6bb0" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hsLawn" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#16432e" />
          <stop offset="1" stopColor="#1f5836" />
        </linearGradient>
        <linearGradient id="hsTank" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f4793a" />
          <stop offset="1" stopColor="#d4541d" />
        </linearGradient>
        <linearGradient id="hsShirt" x1="0" y1="0" x2="1" y2="0.4">
          <stop offset="0" stopColor="#2f74cf" />
          <stop offset="1" stopColor="#1d4f99" />
        </linearGradient>
        <linearGradient id="hsPants" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#d9cca6" />
          <stop offset="1" stopColor="#b6a47c" />
        </linearGradient>
        <radialGradient id="hsMist" cx="0.7" cy="0.4" r="0.7">
          <stop offset="0" stopColor="#d8f1ff" stopOpacity="0.7" />
          <stop offset="1" stopColor="#d8f1ff" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Sky + glow */}
      <rect x="0" y="0" width="1200" height="760" fill="url(#hsSky)" />
      <rect x="0" y="0" width="1200" height="500" fill="url(#hsGlow)" />
      <circle cx="930" cy="120" r="56" fill="#dfeaf6" opacity="0.10" />

      {/* Distant tree silhouettes */}
      <g fill="#0c2a1d" opacity="0.9">
        <path d="M120 452 l-22 -78 l15 0 l-18 -60 l13 0 l-21 -52 l-21 52 l13 0 l-18 60 l15 0 l-22 78 Z" />
        <path d="M250 452 l-16 -58 l11 0 l-13 -44 l9 0 l-15 -36 l-15 36 l9 0 l-13 44 l11 0 l-16 58 Z" opacity="0.8" />
        <ellipse cx="560" cy="430" rx="80" ry="40" />
        <ellipse cx="640" cy="438" rx="60" ry="34" opacity="0.85" />
        <path d="M1050 452 l-20 -70 l14 0 l-16 -54 l12 0 l-19 -48 l-19 48 l12 0 l-16 54 l14 0 l-20 70 Z" opacity="0.8" />
      </g>

      {/* Shed (back-left, faint) */}
      <g opacity="0.7">
        <rect x="330" y="372" width="150" height="86" rx="3" fill="#163a55" />
        <path d="M330 372 l75 -34 l75 34 Z" fill="#1a4163" />
        <rect x="386" y="404" width="38" height="54" fill="#0f2c45" />
      </g>

      {/* Fence */}
      <g>
        <rect x="0" y="430" width="1200" height="11" fill="#163a54" />
        <rect x="0" y="452" width="1200" height="9" fill="#123048" />
        {[40, 250, 1080, 1160].map((x) => (
          <rect key={x} x={x} y="416" width="9" height="52" fill="#1b3f5b" />
        ))}
      </g>

      {/* Lawn */}
      <path d="M0 452 Q600 432 1200 452 L1200 760 L0 760 Z" fill="url(#hsLawn)" />
      <path d="M0 540 Q600 520 1200 540 L1200 760 L0 760 Z" fill="#1f5836" opacity="0.6" />

      {/* Barrier (scroll-driven via .sc-barrier) */}
      <g className="sc-barrier">
        <ellipse cx="470" cy="566" rx="186" ry="58" fill="#6ee7d2" opacity="0.07" />
        <g className="sc-ring">
          <ellipse cx="470" cy="566" rx="186" ry="58" fill="none" stroke="#6ee7d2" strokeWidth="3" opacity="0.7" />
        </g>
        <g className="sc-ring r2">
          <ellipse cx="470" cy="566" rx="146" ry="46" fill="none" stroke="#8defd9" strokeWidth="2.2" opacity="0.6" />
        </g>
        <g className="sc-ring r3">
          <ellipse cx="470" cy="566" rx="106" ry="34" fill="none" stroke="#f5b942" strokeWidth="1.8" opacity="0.5" />
        </g>
        <path d="M284 566 a186 120 0 0 1 372 0" fill="none" stroke="#6ee7d2" strokeWidth="1.5" opacity="0.28" />
      </g>

      {/* Mosquitoes (scroll-driven via .sc-mosq) */}
      <g className="sc-mosq">
        {[
          { x: 360, y: 520 }, { x: 330, y: 560 }, { x: 390, y: 580 }, { x: 300, y: 540 },
        ].map((m, i) => (
          <g key={i} transform={`translate(${m.x},${m.y})`}>
            <ellipse className="sc-wing" cx="-4" cy="-2" rx="5" ry="2.6" fill="#aebfd2" opacity="0.7" />
            <ellipse className="sc-wing" cx="4" cy="-2" rx="5" ry="2.6" fill="#aebfd2" opacity="0.7" />
            <ellipse cx="0" cy="1" rx="3.4" ry="3.4" fill="#0b1320" />
            <line x1="2" y1="2" x2="9" y2="6" stroke="#0b1320" strokeWidth="1.2" />
          </g>
        ))}
      </g>

      {/* ── Technician (facing left, mid-spray) ── */}
      <g className="cine-figure">
        <ellipse cx="772" cy="624" rx="96" ry="15" fill="#08160e" opacity="0.42" />

        {/* Backpack frame + tank (his back / right side) */}
        <rect x="800" y="392" width="70" height="118" rx="20" fill="#0f2c3d" />
        <rect x="806" y="398" width="58" height="104" rx="16" fill="url(#hsTank)" />
        <rect x="810" y="380" width="48" height="26" rx="7" fill="#cf531f" />
        <rect x="816" y="386" width="20" height="12" rx="3" fill="#7e2f12" />
        <rect x="858" y="404" width="16" height="40" rx="6" fill="#26333d" />
        <circle cx="852" cy="396" r="6" fill="#1c2731" />

        {/* Far leg (back) */}
        <path d="M788 486 q14 60 10 110 l-26 0 q-6 -56 -2 -110 Z" fill="#b6a47c" />
        <path d="M768 592 l30 0 l4 30 q-22 6 -40 0 Z" fill="#121e29" />
        <path d="M762 618 l46 0 l0 8 l-48 2 Z" fill="#0b141d" />

        {/* Near leg (front, stepping left) */}
        <path d="M738 486 q-16 56 -22 104 l28 6 q16 -52 24 -104 Z" fill="url(#hsPants)" />
        <path d="M708 584 l34 8 l-6 30 q-24 0 -40 -8 Z" fill="#16242f" />
        <path d="M700 612 l44 10 l-2 8 l-46 -8 Z" fill="#0b141d" />

        {/* Torso — blue shirt, leaning forward-left */}
        <path d="M745 372 q44 -14 86 6 q10 64 -6 116 q-44 16 -92 2 q-6 -64 12 -124 Z" fill="url(#hsShirt)" />
        <path d="M812 380 q14 56 4 110 q12 -2 19 -8 q12 -52 4 -104 Z" fill="#1a4585" opacity="0.85" />
        {/* chest mark */}
        <circle cx="772" cy="430" r="10" fill="#0e3a73" />
        <circle cx="772" cy="430" r="5" fill="#f5b942" />
        {/* shoulder straps */}
        <path d="M812 384 q-24 40 -34 104" stroke="#14202c" strokeWidth="9" fill="none" />
        <path d="M828 392 q6 50 -2 96" stroke="#11202b" strokeWidth="7" fill="none" opacity="0.8" />

        {/* Far arm (back) tucked */}
        <path d="M806 398 q26 14 30 52 q-12 8 -24 6 q-10 -30 -22 -48 Z" fill="#1d4f99" />

        {/* Near arm (front) extended down-left to the wand */}
        <path d="M756 392 q-44 26 -86 74 q8 16 22 20 q44 -44 84 -66 Z" fill="url(#hsShirt)" />
        <path d="M690 470 q-14 14 -22 30 q12 10 26 8 q8 -16 18 -26 Z" fill="#1a4585" />
        <circle cx="668" cy="500" r="13" fill="#e0b896" />

        {/* Wand + nozzle (down-left from hand) */}
        <line x1="668" y1="500" x2="600" y2="548" stroke="#2a3a47" strokeWidth="7" strokeLinecap="round" />
        <rect x="582" y="540" width="26" height="11" rx="5" transform="rotate(28 582 540)" fill="#33485b" />
        <circle cx="582" cy="552" r="5" fill="#445c70" />

        {/* Head — neck, face, respirator, glasses, cap */}
        <rect x="760" y="352" width="22" height="22" rx="8" fill="#cf9f7f" />
        <circle cx="763" cy="338" r="29" fill="#e0b896" />
        <path d="M736 340 q2 26 22 32 q-2 -16 0 -30 Z" fill="#3a4a5c" />
        <rect x="734" y="330" width="40" height="12" rx="6" fill="#22384f" />
        <circle cx="746" cy="336" r="3.4" fill="#3a5068" />
        <path d="M734 318 q4 -28 40 -24 q24 4 26 22 q-30 -14 -66 2 Z" fill="#16273a" />
        <path d="M700 320 l44 -6 q2 8 -2 14 l-44 2 Z" fill="#1d3149" />
        <rect x="734" y="312" width="60" height="7" rx="3" fill="#f5b942" />
      </g>

      {/* Mist from nozzle (ambient, in front of figure) */}
      <g transform="translate(578,552)">
        <g className="sc-mist">
          <path d="M0 0 Q-44 8 -78 38 Q-44 24 -10 18 Z" fill="url(#hsMist)" />
        </g>
        <g className="sc-mist d2">
          <path d="M0 0 Q-38 -4 -66 20 Q-36 12 -8 10 Z" fill="url(#hsMist)" />
        </g>
        <g className="sc-mist d3">
          <path d="M0 0 Q-48 18 -82 50 Q-44 32 -10 22 Z" fill="url(#hsMist)" />
        </g>
      </g>
    </svg>
  )
}
