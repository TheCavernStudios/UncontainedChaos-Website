"use client"

import { Home, Menu, Video, Users, Users2 } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Clips", href: "/clips", icon: Video },
  { name: "Streamers", href: "/streamers", icon: Users },
  { name: "Our Team", href: "/team", icon: Users2 },
]

export function MainNav() {
  const pathname = usePathname()

  return (
    <Sidebar className="hidden md:flex">
      <SidebarHeader>
        <div className="p-4">
          <h2 className="text-2xl font-bold tracking-tight">UncontainedChaos</h2>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navigation.map((item) => (
            <SidebarMenuItem key={item.name}>
              <SidebarMenuButton asChild isActive={pathname === item.href}>
                <Link href={item.href}>
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  )
}

MainNav.Mobile = function MobileNav() {
  const pathname = usePathname()
  const { toggleSidebar } = useSidebar()

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] p-0">
          <SheetHeader className="border-b p-4">
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <div className="px-2 py-4">
            <nav className="flex flex-col gap-1">
              {navigation.map((item) => (
                <Button
                  key={item.name}
                  asChild
                  variant={pathname === item.href ? "secondary" : "ghost"}
                  className="justify-start"
                >
                  <Link href={item.href}>
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.name}
                  </Link>
                </Button>
              ))}
            </nav>
          </div>
        </SheetContent>
      </Sheet>
      <Button variant="ghost" size="icon" className="hidden md:flex" onClick={toggleSidebar}>
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle sidebar</span>
      </Button>
    </>
  )
}

        