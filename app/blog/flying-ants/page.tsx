import type { Metadata } from 'next'
import GuidePage from '@/components/GuidePage'
import { guideMetadata, type Guide } from '@/lib/guides'
import data from '@/content/guides/flying-ants.json'

// North American guide (Oct 2026). The words live in content/guides/flying-ants.json: edit them there.
// This file only connects that content to the shared template (components/GuidePage.tsx).
const guide = data as unknown as Guide

export const metadata: Metadata = guideMetadata(guide)

export default function FlyingAntsGuidePage() {
  return <GuidePage guide={guide} />
}
