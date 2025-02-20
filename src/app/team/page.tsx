import StreamHero from "@/components/stream-hero";
import { TeamGrid } from "@/components/team-grid";

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0a0a0a] to-[#111827]">
      <main className="w-full flex flex-col items-center">
        <div className="w-full">
          <StreamHero />
        </div>
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <TeamGrid />
        </div>
      </main>
    </div>
  )
}

