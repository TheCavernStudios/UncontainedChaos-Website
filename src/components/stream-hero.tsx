"use client"

import { useEffect, useState } from "react"
import { CalendarDays } from "lucide-react"
import axios from "axios"
import Link from "next/link"

interface StreamSchedule {
  title: string
  startTime: string
  category: string
}

export function StreamHero() {
  const [isLive,] = useState(false)
  const [schedule, setSchedule] = useState<StreamSchedule[]>([])

  // TODO: Implement Twitch API integration
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('https://api.thecavern.dev/api/twitch/uc/schedule');
      const data = res.data;
      const alreadyDoneTitles: string[] = [];
      const schedule: StreamSchedule[] = [];
      data.forEach((segment: StreamSchedule) => {
        if (alreadyDoneTitles.includes(segment.title)) return;
        alreadyDoneTitles.push(segment.title);
        schedule.push({
          title: segment.title,
          startTime: segment.startTime,
          category: segment.category
        });
      });
      setSchedule(schedule);
    }
    fetchData()
  }, [])

  return (
    <div className="relative overflow-hidden">
      {/* Background with grid effect */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-primary/20 to-background"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230ea5e9' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Stream Status */}
          <div className="flex flex-col justify-center">
            <div className="mb-4 inline-flex items-center rounded-full border border-primary/50 bg-primary/5 px-3 py-1 text-sm text-primary">
              {isLive ? "LIVE" : "OFFLINE"}
            </div>
            <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              UncontainedChaos
            </h1>
            <p className="text-base text-muted-foreground md:text-lg">
              Howdy! We&apos;re a group of nerds that suck at games and often end up in weird and chaotic situations!
            </p>
          </div>

          {/* Schedule */}
          <div className="rounded-lg border bg-card p-4 md:p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="flex items-center gap-2 font-semibold">
                <CalendarDays className="h-5 w-5" />
                Upcoming Streams
              </h2>
              <Link className="hidden sm:inline-flex" href="https://www.twitch.tv/uncontainedchaos/schedule">
                Full Schedule
              </Link>
            </div>
            <div className="space-y-4">
              {schedule.length === 0 ? (
                <p className="text-sm text-muted-foreground">No upcoming streams scheduled.</p>
              ) : (
                schedule.map((stream, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="truncate font-medium">{stream.title}</h3>
                      <p className="truncate text-sm text-muted-foreground">{stream.category}</p>
                    </div>
                    <time className="text-sm text-muted-foreground whitespace-nowrap">
                      {new Date(stream.startTime).toLocaleString()}
                    </time>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

