"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Menu, Video, Users, Users2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Clips", href: "/clips", icon: Video },
  { name: "Streamers", href: "/streamers", icon: Users },
  { name: "Our Team", href: "/team", icon: Users2 },
]

export function MobileNav() {
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="mr-4">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] p-0">
        <SheetHeader className="border-b p-4">
          <SheetTitle>Navigation</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-2 p-4">
          {navigation.map((item) => (
            <Button
              key={item.name}
              asChild
              variant={pathname === item.href ? "secondary" : "ghost"}
              className="justify-start"
              onClick={() => setOpen(false)}
            >
              <Link href={item.href}>
                <item.icon className="mr-2 h-4 w-4" />
                {item.name}
              </Link>
            </Button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}

