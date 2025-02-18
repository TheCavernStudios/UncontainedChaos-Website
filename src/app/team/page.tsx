"use client"

import { StreamHero } from "@/components/stream-hero"
import { TeamGrid } from "@/components/team-grid"

export default function TeamPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <StreamHero />
      <TeamGrid />
    </div>
  )
}

