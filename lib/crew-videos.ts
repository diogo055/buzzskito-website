/**
 * Real job footage of the BuzzSkito crew (owner's clips, Sep 2026, sent Nov 13, 2026).
 *
 * Rules (owner + site promises):
 * - Real footage only. Never AI or stock.
 * - No place names in captions or labels. The owner said the phone's location tags are not reliable
 *   ("ignore the tags"), so no clip claims a city.
 * - Never show the mist going at or beside open blooms or into a pool: /mosquito-control,
 *   /how-it-works and /mosquito-spray-safety promise "we do not spray open blooms" and list open
 *   water as untreated. The stone-house clip (first 12 s) and IMG_1346, 1348, 1351, 1352, 1359
 *   and 1364 were left out for that reason.
 * - Every published file is re-encoded with `-map_metadata -1`: the iPhone originals carry the
 *   customer's yard to within a few metres.
 *
 * Originals: Documents/BuzzSkito media/Crew clips 2026/Originals (not in git).
 * Encoding (v2, Nov 13, 2026): every file is made from the iPhone original, converted from HDR (HLG,
 * BT.2020) to standard colour and tagged BT.709, 960x540 H.264 (x264 veryslow, CRF 28-29), 30 fps, a
 * keyframe every 2 s, no audio, faststart. The still is frame 0 of the finished file (PNG; next/image
 * serves AVIF/WebP), so still and video match. v1 files were tagged HDR while their stills were not,
 * which made the picture jump when the video started. The background montage is 1280x720 + 854x480,
 * both from the originals, at CRF 33, 24 fps, lightly denoised, because it always sits under a dark
 * scrim. Recipe: scratchpad clips_nov13/encode_v2.sh, also in reports/Hero video for service pages.md.
 * A new cut always gets a new file name: mp4 and images are cached for a year.
 */

export interface CrewClip {
  id: string
  /** MP4 for every screen, or for screens 768px and wider when `srcSmall` is set */
  src: string
  /** Lighter MP4 for screens up to 767px wide */
  srcSmall?: string
  /** First frame, shown until the clip plays (and instead of it for reduced motion / Save-Data) */
  poster: string
  width: number
  height: number
  /** What the footage shows, for screen readers. True to the clip, no place names. */
  label: string
}

export const CREW_CLIPS = {
  /** Three calm clips with dissolves: an estate driveway, trees beside a stone house, a fern-covered woodland edge. */
  montage: {
    id: 'crew-montage',
    src: '/videos/crew/crew-montage-v2-720.mp4',
    srcSmall: '/videos/crew/crew-montage-v2-480.mp4',
    poster: '/videos/crew/crew-montage-v2.png',
    width: 1280,
    height: 720,
    label: 'A BuzzSkito technician misting hedges, trees and a shaded woodland edge on real jobs',
  },
  /** IMG_1344: kneeling, misting the shaded space under a backyard deck. */
  underDeck: {
    id: 'under-deck',
    src: '/videos/crew/under-deck-v2.mp4',
    poster: '/videos/crew/under-deck-v2.png',
    width: 960,
    height: 540,
    label: 'A BuzzSkito technician in a respirator and gloves kneels to mist under a backyard deck',
  },
  /** IMG_1357: walking a driveway, misting the shrubs and beds beside it. */
  drivewayShrubs: {
    id: 'driveway-shrubs',
    src: '/videos/crew/driveway-shrubs-v2.mp4',
    poster: '/videos/crew/driveway-shrubs-v2.png',
    width: 960,
    height: 540,
    label: 'A BuzzSkito technician walks a driveway, misting the shrubs and garden beds beside it',
  },
  /** IMG_1363: misting the shrub and grass border at the edge of a lawn. */
  lawnEdge: {
    id: 'lawn-edge',
    src: '/videos/crew/lawn-edge-v2.mp4',
    poster: '/videos/crew/lawn-edge-v2.png',
    width: 960,
    height: 540,
    label: 'A BuzzSkito technician mists the shrub and grass border at the edge of a backyard lawn',
  },
  /** IMG_1353: misting the shrubs where a lawn meets the woods. */
  woodlandEdge: {
    id: 'woodland-edge',
    src: '/videos/crew/woodland-edge-v2.mp4',
    poster: '/videos/crew/woodland-edge-v2.png',
    width: 960,
    height: 540,
    label: 'A BuzzSkito technician mists the shrubs where a backyard lawn meets the woods',
  },
} satisfies Record<string, CrewClip>
