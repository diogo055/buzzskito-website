/**
 * The backdrop of the one-canvas world: a summer evening backyard at dusk.
 *
 * Seven fixed layers behind all content (research-derived from Linear's
 * shipped CSS + the Firewatch-lineage landscape pattern):
 *   1. Sky ramp        — 9-stop night→indigo→warm-horizon gradient (oklab)
 *   2. Horizon aura    — amber glow with hand-eased exponential falloff
 *   3. Star field      — two tiled dot layers, masked to the upper sky
 *   4. Treelines ×3    — SVG silhouettes, atmospheric perspective + parallax
 *   5. Fireflies       — a few embers confined to the treeline band
 *   6. Vignette        — pulls the eye centre-frame, hides scene edges
 *   7. Grain           — 256px overlay-blend noise (banding killer)
 *
 * Everything is static CSS or compositor-only animation; scroll parallax on
 * the treelines is scroll-driven CSS behind @supports. aria-hidden, fixed,
 * zero layout cost. Content scrolls over the scene.
 */

const TREE_PATHS = {
  // Rolling mixed canopy — far ridge
  back: 'M0 200 L0 96 Q 40 78 90 88 Q 120 70 160 84 L 200 60 L 216 84 Q 260 66 310 82 Q 350 60 400 78 L 440 52 L 458 80 Q 510 64 560 80 Q 610 58 660 76 Q 700 62 750 78 L 790 50 L 808 78 Q 860 62 910 78 Q 960 58 1010 76 L 1050 52 L 1068 78 Q 1120 64 1170 80 Q 1220 60 1270 78 Q 1320 64 1370 80 Q 1410 70 1440 88 L 1440 200 Z',
  // Mid canopy with a few spruce spikes
  mid: 'M0 200 L0 110 Q 50 92 100 104 L 150 66 L 170 100 Q 220 86 270 100 Q 320 80 370 96 L 415 58 L 435 96 Q 490 82 540 98 Q 590 78 640 94 L 690 62 L 710 96 Q 760 84 810 98 Q 860 80 910 96 L 955 60 L 975 96 Q 1030 84 1080 98 Q 1130 80 1180 96 L 1230 64 L 1250 98 Q 1300 86 1350 100 Q 1400 92 1440 104 L 1440 200 Z',
  // Near hedge/shrub line — closest, darkest
  front: 'M0 200 L0 138 Q 60 122 120 134 Q 180 118 240 132 Q 300 116 360 130 Q 420 118 480 132 Q 540 116 600 130 Q 660 120 720 132 Q 780 116 840 130 Q 900 118 960 132 Q 1020 116 1080 130 Q 1140 120 1200 132 Q 1260 118 1320 130 Q 1380 122 1440 134 L 1440 200 Z',
} as const

const FIREFLIES = [
  { left: '10%', bottom: '16vh', dur: '18s', tw: '3.6s' },
  { left: '28%', bottom: '11vh', dur: '22s', tw: '4.4s' },
  { left: '55%', bottom: '18vh', dur: '19s', tw: '3.1s' },
  { left: '74%', bottom: '9vh', dur: '24s', tw: '4.9s' },
  { left: '89%', bottom: '15vh', dur: '20s', tw: '3.8s' },
] as const

export default function DuskScene() {
  return (
    <div className="dusk-scene fixed inset-0 -z-10 pointer-events-none" aria-hidden="true">
      {/* 1 — Sky ramp */}
      <div className="absolute inset-0 dusk-sky" />
      {/* 2 — Horizon aura */}
      <div className="absolute inset-0 dusk-horizon" />
      {/* 3 — Stars (upper sky only) */}
      <div className="absolute inset-0 dusk-stars" />
      {/* 4 — Treelines (back → front) */}
      <svg className="dusk-tree dusk-tree-back absolute inset-x-0 bottom-0 h-[26vh] w-full" viewBox="0 0 1440 200" preserveAspectRatio="none">
        <path d={TREE_PATHS.back} fill="#131c33" fillOpacity="0.7" />
      </svg>
      <svg className="dusk-tree dusk-tree-mid absolute inset-x-0 bottom-0 h-[19vh] w-full" viewBox="0 0 1440 200" preserveAspectRatio="none">
        <path d={TREE_PATHS.mid} fill="#0a1122" fillOpacity="0.9" />
      </svg>
      <svg className="dusk-tree dusk-tree-front absolute inset-x-0 bottom-0 h-[12vh] w-full" viewBox="0 0 1440 200" preserveAspectRatio="none">
        <path d={TREE_PATHS.front} fill="#04060d" />
      </svg>
      {/* 5 — Fireflies, confined to the treeline band */}
      {FIREFLIES.map((f, i) => (
        <span key={i} className="ff" style={{ left: f.left, bottom: f.bottom, animationDuration: `${f.dur}, ${f.tw}` }} />
      ))}
      {/* 6 — Vignette */}
      <div className="absolute inset-0 dusk-vignette" />
      {/* 7 — Grain */}
      <div className="absolute inset-0 dusk-grain" />
    </div>
  )
}
