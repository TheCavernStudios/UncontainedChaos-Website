"use client"

import { StreamHero } from "@/components/stream-hero"
import { ClipsGrid } from "@/components/clips-grid"

export default function ClipsPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <StreamHero />
      <ClipsGrid />
    </div>
  )
}

