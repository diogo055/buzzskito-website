/**
 * Hero background video (Nov 13, 2026). Research and rules: reports/Hero video for service pages.md.
 *
 * Photo first: the hero photo stays the page's LCP element and the indexed image; the clip is attached only
 * after the photo has decoded, the page has loaded (or 4 s later) and the browser is idle, then fades in on
 * its first frame (components/HeroVideo.tsx). No VideoObject markup, same HTML for every visitor and for
 * Googlebot, no autoplay/poster/src in the server HTML (`npm run check:hero-video` fails the build otherwise).
 *
 * Switches, modelled on ADS_ENABLED. Owner's plan (Nov 13): homepage first; the city pages are built but stay
 * OFF until the May-June 2027 coin-flip check. Turning one off brings back the plain photo hero everywhere
 * that template is used, with nothing else changed.
 */
export const HERO_VIDEO = {
  home: true,
  city: false,
} as const

export interface HeroClip {
  id: string
  /** 1280x720 H.264, for screens 768 px and wider */
  landscape: { src: string; type: string }
  /** 432x768 H.264, a 608x1080 crop of the same footage, for phones */
  portrait: { src: string; type: string }
  /** The stills are cut from the same original frame as each file's first frame */
  stillLandscape: { src: string; width: number; height: number }
  stillPortrait: { src: string; width: number; height: number }
  alt: string
}

/**
 * Owner's pick (Nov 13, option B): IMG_1362, a technician misting the shrubs beside a backyard play set.
 * The loop starts at the frame he picked (4.0 s into the original) and wraps through the rest of the clip, so
 * the loop seam is continuous footage. AV1 versions were tried and were no smaller than H.264 for this clip
 * (1.45 MB vs 1.37 MB landscape, 0.51 vs 0.53 MB portrait), so only H.264 ships.
 * Files are cached for a year: a new cut gets a new file name.
 */
export const HERO_CLIPS = {
  playSet: {
    id: 'play-set',
    landscape: { src: '/videos/hero/play-set-l.h264.mp4', type: 'video/mp4; codecs="avc1.64001F"' },
    portrait: { src: '/videos/hero/play-set-p.h264.mp4', type: 'video/mp4; codecs="avc1.64001E"' },
    stillLandscape: { src: '/hero/crew-play-set.jpg', width: 1920, height: 1080 },
    stillPortrait: { src: '/hero/crew-play-set-phone.jpg', width: 608, height: 1080 },
    alt: 'BuzzSkito technician misting the shrubs beside a backyard play set',
  },
} satisfies Record<string, HeroClip>
