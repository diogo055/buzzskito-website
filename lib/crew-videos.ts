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
 * Encoding: 960x540 H.264, CRF 27-29, 30 fps, no audio, faststart; posters are the first frame
 * (WebP). The background montage is 1280x720 + 854x480 at CRF 33, 24 fps, lightly denoised,
 * because it always sits under a dark scrim.
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
    src: '/videos/crew/crew-montage-720.mp4',
    srcSmall: '/videos/crew/crew-montage-480.mp4',
    poster: '/videos/crew/crew-montage.webp',
    width: 1280,
    height: 720,
    label: 'A BuzzSkito technician misting hedges, trees and a shaded woodland edge on real jobs',
  },
  /** IMG_1344: kneeling, misting the shaded space under a backyard deck. */
  underDeck: {
    id: 'under-deck',
    src: '/videos/crew/under-deck.mp4',
    poster: '/videos/crew/under-deck.webp',
    width: 960,
    height: 540,
    label: 'A BuzzSkito technician in a respirator and gloves kneels to mist under a backyard deck',
  },
  /** IMG_1357: walking a driveway, misting the shrubs and beds beside it. */
  drivewayShrubs: {
    id: 'driveway-shrubs',
    src: '/videos/crew/driveway-shrubs.mp4',
    poster: '/videos/crew/driveway-shrubs.webp',
    width: 960,
    height: 540,
    label: 'A BuzzSkito technician walks a driveway, misting the shrubs and garden beds beside it',
  },
  /** IMG_1363: misting the shrub and grass border at the edge of a lawn. */
  lawnEdge: {
    id: 'lawn-edge',
    src: '/videos/crew/lawn-edge.mp4',
    poster: '/videos/crew/lawn-edge.webp',
    width: 960,
    height: 540,
    label: 'A BuzzSkito technician mists the shrub and grass border at the edge of a backyard lawn',
  },
  /** IMG_1353: misting the shrubs where a lawn meets the woods. */
  woodlandEdge: {
    id: 'woodland-edge',
    src: '/videos/crew/woodland-edge.mp4',
    poster: '/videos/crew/woodland-edge.webp',
    width: 960,
    height: 540,
    label: 'A BuzzSkito technician mists the shrubs where a backyard lawn meets the woods',
  },
} satisfies Record<string, CrewClip>
