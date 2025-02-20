"use client";

import { useEffect, useState } from "react";
import { CalendarDays, Star } from "lucide-react";
import axios from "axios";
import Link from "next/link";
import { motion } from "framer-motion";

interface StreamSchedule {
  title: string;
  startTime: string;
  category: string;
}

export function StreamHero() {
  const [isLive, setIsLive] = useState(false);
  const [schedule, setSchedule] = useState<StreamSchedule[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://api.thecavern.dev/api/twitch/uc/schedule"
        );
        const data = res.data;
        const uniqueSchedule = data.reduce(
          (acc: StreamSchedule[], segment: StreamSchedule) => {
            if (!acc.some((item) => item.title === segment.title)) {
              acc.push(segment);
            }
            return acc;
          },
          []
        );
        setSchedule(uniqueSchedule.slice(0, 3));
      } catch (error) {
        console.error("Failed to fetch schedule:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://api.thecavern.dev/api/twitch/uc/is_live"
        );
        setIsLive(res.data.data);
      } catch (error) {
        console.error("Failed to fetch live status:", error);
      }
    };
    fetchData();
  });

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[2fr,1fr]">
          {/* Main Content Card */}
          <motion.a
            href="https://www.twitch.tv/uncontainedchaos"
            className="lg:col-span-1"
          >
            <div className="relative overflow-hidden rounded-2xl bg-gray-800/50 p-8 shadow-2xl backdrop-blur-sm">
              <div className="flex flex-col justify-center">
                <motion.div
                  animate={isLive ? { scale: [1, 1.1, 1] } : {}}
                  transition={{
                    duration: 1,
                    repeat: isLive ? Number.POSITIVE_INFINITY : 0,
                    repeatDelay: 1,
                  }}
                  className={`mb-6 inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-sm font-bold ${
                    isLive
                      ? "border border-red-500 bg-red-500/20 text-red-400"
                      : "border border-gray-600 bg-gray-700/50 text-gray-400"
                  }`}
                >
                  {isLive ? (
                    <>
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
                      </span>
                      LIVE
                      <small>Click to Watch</small>
                    </>
                  ) : (
                    "OFFLINE"
                  )}
                </motion.div>
                <motion.h1
                  animate={isLive ? { y: [0, -5, 0] } : {}}
                  transition={{
                    duration: 2,
                    repeat: isLive ? Number.POSITIVE_INFINITY : 0,
                    repeatDelay: 1,
                  }}
                  className="mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl lg:text-7xl"
                >
                  Uncontained
                  <br />
                  Chaos
                </motion.h1>
                <motion.p
                  animate={isLive ? { opacity: [0.7, 1, 0.7] } : {}}
                  transition={{
                    duration: 3,
                    repeat: isLive ? Number.POSITIVE_INFINITY : 0,
                  }}
                  className="max-w-2xl text-lg text-gray-300"
                >
                  Howdy! We&apos;re a group of nerds that suck at games
                  <br />
                  and often end up in weird and chaotic situations!
                </motion.p>
              </div>

              {/* Animated Logo */}
              <div className="mt-8 flex items-center justify-center lg:absolute lg:right-8 lg:top-1/2 lg:-translate-y-1/2">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className="relative h-48 w-48 lg:h-64 lg:w-64"
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-75 blur-xl"
                  />
                  <div className="absolute inset-4 rounded-full bg-black">
                    <Star
                      className={`h-full w-full p-6 ${
                        isLive ? "text-yellow-300" : "text-gray-600"
                      }`}
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.a>

          {/* Upcoming Streams Card */}
          <div className="relative overflow-hidden rounded-2xl bg-gray-800/50 p-4 shadow-2xl backdrop-blur-sm lg:col-span-1">
            <h2 className="mb-6 flex items-center gap-2 text-xl font-semibold text-white">
              <CalendarDays className="h-6 w-6" />
              Upcoming Streams
            </h2>
            <div className="space-y-4">
              {schedule.length === 0 ? (
                <p className="text-gray-400">No upcoming streams scheduled.</p>
              ) : (
                schedule.map((stream, i) => (
                  <div
                    key={i}
                    className="flex items-start justify-between gap-4 rounded-lg bg-gray-700/50 p-4 transition-colors hover:bg-gray-600/50"
                  >
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-white truncate">
                        {stream.title}
                      </h3>
                      <p className="text-sm text-gray-400 truncate">
                        {stream.category} -{" "}
                        <time className="text-sm text-gray-400 whitespace-nowrap">
                          {new Date(stream.startTime).toLocaleString(
                            undefined,
                            {
                              weekday: "short",
                              month: "short",
                              day: "numeric",
                              hour: "numeric",
                              minute: "2-digit",
                            }
                          )}
                        </time>
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
            <Link
              href="https://www.twitch.tv/uncontainedchaos/schedule"
              className="mt-6 inline-block text-sm text-gray-400 hover:text-white transition-colors"
            >
              View Full Schedule
            </Link>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <motion.div
        className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-pink-500/20 blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
    </div>
  );
}

export default StreamHero;
