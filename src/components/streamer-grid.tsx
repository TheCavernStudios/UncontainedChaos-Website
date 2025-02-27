import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Twitch } from "lucide-react";
import Image from "next/image";

interface Streamer {
  name: string;
  image: string;
  about: string;
  twitchUrl: string;
}

const streamers: Streamer[] = [
  {
    name: "Fuzzy",
    image: "/assets/img/streamer/awsumfuzzy.jpg",
    about: "I'm a gamer and artist, mostly streaming Minecraft",
    twitchUrl: "https://www.twitch.tv/heyofuzzy",
  },
  {
    name: "Cav",
    image: "/assets/img/streamer/cavv.png",
    about: "Hello, I'm Carolyn (she/her), I'm an game developer, gamer, streamer; and I'm the founder of Gamer Dorks, an indie game development studio.",
    twitchUrl: "https://www.twitch.tv/realgamerdorks",
  },
  {
    name: "Painted",
    image: "/assets/img/streamer/paintedd.png",
    about: "Hey, my name is painted. I'm a youtuber/streamer/creator that is just happy to be here, i want to eventually play a variety of games but my main focus currently is on minecraft",
    twitchUrl: "https://youtube.com/@paintedbypaint",
  },
  {
    name: "Rogerian",
    image: "/assets/img/streamer/rogerian.png",
    about: "I Am A Variety Streamer. Streaming since September 2021.",
    twitchUrl: "https://www.twitch.tv/rogerian_e",
  },
  {
    name: "Tkj100",
    image: "/assets/img/streamer/tkj100.png",
    about: "",
    twitchUrl: "https://www.twitch.tv/tkj100live",
  },
  {
    name: "Sr_Sockman",
    image: "/assets/img/streamer/sr_sockman.png",
    about: "I'm just your typical neighborhood sentient sock with his army of rats. Just trying to make people on the internet smile and have a good time while playing video games or working on projects. At least when I'm not experimenting on the D-class that is.",
    twitchUrl: "https://www.twitch.tv/sr_sockman",
  },
];

export function StreamerGrid() {
  if (streamers.length === 0) {
    return (
      <div className="container py-8">
        <div className="flex justify-center items-center h-64">
          <p className="text-xl text-muted-foreground">
            No streamers added yet!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-8 flex justify-center">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center mx-auto">
        {streamers.map((streamer) => (
          <Card key={streamer.name} className="w-full max-w-xs">
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 mr-4 overflow-hidden rounded-full flex-shrink-0">
          <Image
            src={streamer.image || "/placeholder.svg"}
            alt={streamer.name}
            className="object-cover w-full h-full"
            width={64}
            height={64}
          />
            </div>
            <div>
          <h3 className="text-xl font-semibold">{streamer.name}</h3>
            </div>
          </div>
          <p className="mb-4 text-sm text-muted-foreground">
            {streamer.about}
          </p>
          <div className="mt-auto">
            <Button asChild className="w-full" variant="secondary">
          <a
            href={streamer.twitchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            <Twitch className="mr-2 h-4 w-4" />
            Follow on Twitch
          </a>
            </Button>
          </div>
        </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
