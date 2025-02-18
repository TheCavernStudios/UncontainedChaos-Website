"use client"

import { StreamHero } from "@/components/stream-hero"
import { StreamerGrid } from "@/components/streamer-grid"

export default function StreamersPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <StreamHero />
      <StreamerGrid />
    </div>
  )
}

