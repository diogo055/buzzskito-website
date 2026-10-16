import type { Metadata } from 'next'
import GuidePage from '@/components/GuidePage'
import { guideMetadata, type Guide } from '@/lib/guides'
import data from '@/content/guides/ticks-in-new-york.json'

// North American guide (Oct 2026). The words live in content/guides/ticks-in-new-york.json: edit them there.
// This file only connects that content to the shared template (components/GuidePage.tsx).
const guide = data as unknown as Guide

export const metadata: Metadata = guideMetadata(guide)

export default function TicksInNewYorkGuidePage() {
  return <GuidePage guide={guide} />
}
