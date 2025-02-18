"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

interface TwitchClip {
  id: string
  title: string
  thumbnail_url: string
  creator_name: string
  view_count: number
  created_at: string
}

export function ClipsGrid() {
  const [clips,] = useState<TwitchClip[]>([])
  const [loading, setLoading] = useState(true)

  // TODO: Implement Twitch API integration
  useEffect(() => {
    // Fetch featured clips
    setLoading(false)
  }, [])

  if (loading) {
    return (
      <div className="container py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <Card key={i}>
              <CardContent className="p-0">
                <Skeleton className="aspect-video" />
                <div className="p-4">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="mt-2 h-4 w-1/2" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  if (clips.length === 0) {
    return (
      <div className="container py-8">
        <div className="flex justify-center items-center h-64">
          <p className="text-xl text-muted-foreground">No clips yet!</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-8">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {clips.map((clip) => (
          <Card key={clip.id}>
            <CardContent className="p-0">
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <img src={clip.thumbnail_url || "/placeholder.svg"} alt={clip.title} className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{clip.title}</h3>
                <p className="text-sm text-muted-foreground">
                  Clipped by {clip.creator_name} • {clip.view_count.toLocaleString()} views
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

