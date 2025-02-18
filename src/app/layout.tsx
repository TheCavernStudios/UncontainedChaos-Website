import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { MobileNav } from "@/components/mobile-nav"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "UncontainedChaos",
  description: "A group of nerds that suck at games and often end up in weird and chaotic situations!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <div className="relative min-h-screen">
            <header className="sticky top-0 z-50 w-full border-b bg-background">
              <div className="container flex h-16 items-center">
                <MobileNav />
                <div className="flex flex-1 items-center justify-between">
                  <h1 className="text-lg font-semibold">UncontainedChaos</h1>
                </div>
              </div>
            </header>
            <main>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

