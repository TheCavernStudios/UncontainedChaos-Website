import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from "lucide-react"
import Image from 'next/image'

interface Team {
  name: string
  image: string
  role: string
  about: string
  link?: string
}

const team: Team[] = [
  {
    name: "Cam",
    image: "/assets/img/team/cam.jpg",
    role: "Manager",
    about: "Hey! I run basically the entire show here. I'm the one who makes sure everything is running smoothly and that everyone is happy.",
    link: "https://expx.dev"
  },
  {
    name: "Jay",
    image: "/assets/img/team/jayjfn.png",
    role: "Long Form Editor",
    about: "The Editor; always watching, always lurking."
  },
  {
    name: "Sickmixlovespine",
    image: "/assets/img/team/sickmix.webp",
    role: "Long Form Editor",
    about: ""
  },
  {
    name: "Tkj",
    image: "/assets/img/team/tkj100.png",
    role: "Short Form Editor",
    about: "Hello I'm Tkj100 or Tk for short. I'm the short form editor for the channel. I'm here to make sure the short form content is up to par and ready for the channel."
  },
  {
    name: "Pitu",
    image: "/assets/img/team/pitu.png",
    role: "Short Form Editor",
    about: ""
  }
]

export function TeamGrid() {
  if (team.length === 0) {
    return (
      <div className="container py-8">
        <div className="flex justify-center items-center h-64" style={{ paddingLeft: "20px" }}>
          <p className="text-xl text-muted-foreground">No team members added yet!</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-8">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" style={{ paddingLeft: "20px" }}>
        {team.map((member) => (
          <Card key={member.name}>
            <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="h-24 w-24 rounded-full"
                  width={96}
                  height={96}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-sm font-medium text-primary">{member.role}</p>
                </div>
                <p className="mb-4 text-sm text-muted-foreground">{member.about}</p>
                {member.link && (
                  <Button asChild variant="outline" className="w-full">
                    <a href={member.link} target="_blank" rel="noopener noreferrer">
                      <Link className="mr-2 h-4 w-4" />
                      Connect
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
        ))}
      </div>
    </div>
  )
}

