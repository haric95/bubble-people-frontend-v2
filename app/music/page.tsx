"use client";
import Link from "next/link";
import { AudioPlayer } from "../components/AudioPlayer";
import { useStrapi } from "../hooks/useStrapi";
import { MediaAudioItem } from "@/types";
import { VideoPlayer } from "../components/VideoPlayer";
import { useCallback, useState } from "react";
import { motion } from "motion/react";
import { useIsMobile } from "../hooks/useIsMobile";

const MUSIC_DUMMY_DATA = {
  LP: [
    {
      title: "Color Dome",
      year: 2022,
      cover: "/images/cover-1.jpg",
      link: "https://bandcamp.com",
    },
    {
      title: "Consequence Unknown",
      year: 2012,
      cover: "/images/cover-2.jpg",
      link: "https://bandcamp.com",
    },
    {
      title: "Old Habits",
      year: 2016,
      cover: "/images/cover-3.jpg",
      link: "https://bandcamp.com",
    },
    {
      title: "Escape Plane",
      year: 2025,
      cover: "/images/cover-4.jpg",
      link: "https://bandcamp.com",
    },
  ],
  EP: [
    {
      title: "Color Dome",
      year: 2022,
      cover: "/images/cover-1.jpg",
      link: "https://bandcamp.com",
    },
    {
      title: "Consequence Unknown",
      year: 2012,
      cover: "/images/cover-2.jpg",
      link: "https://bandcamp.com",
    },
    {
      title: "Old Habits",
      year: 2016,
      cover: "/images/cover-3.jpg",
      link: "https://bandcamp.com",
    },
    {
      title: "Escape Plane",
      year: 2025,
      cover: "/images/cover-4.jpg",
      link: "https://bandcamp.com",
    },
  ],
  AV: [
    {
      title: "M.O.B CORE",
      year: 2025,
      cover: "/images/MOB.webp",
      link: "https://www.youtube.com/watch?v=qbyZbwMOXAI",
    },
  ],
};

const Music = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const { isMobile } = useIsMobile();

  const data = useStrapi<MediaAudioItem[]>("/media-audio-items");

  const handleClose = useCallback(() => {
    setActiveVideo(null);
  }, []);

  return (
    <div>
      <div className="w-full flex flex-col items-center">
        <div className="w-full md:w-full md:h-32 mb-16 relative shadow-2xl">
          <div
            className="h-full w-full absolute top-0 pointer-events-none mix-blend-hue bg-black filter-hue-rotate-180 brightness-150 custom-box-shadow"
            style={{ filter: "hue-rotate(280deg) brightness(1.5)" }}
          />
          {data && <AudioPlayer audioItems={data} />}
        </div>
        <div className="w-full mb-8">
          <h2
            className="font-title mb-4 text-highlight-3 text-lg heading-text-shadow"
            style={{
              backgroundClip: "text",
              backgroundImage: "url(/images/mask-1.jpg)",
              color: "var(--color-highlight-3)",
              filter: "brightness(1.5) contrast(0.8) brightness(1.3)",
              backgroundSize: "200% 400%",
            }}
          >
            LP
          </h2>
          <div className="flex flex-wrap justify-between">
            {MUSIC_DUMMY_DATA.LP.map((item, index) => (
              <Link
                key={item.title}
                href={item.link}
                className={`w-1/2 md:w-1/3 mb-8 hover:scale-101 transition-transform duration-500 ${!isMobile && (index % 3 === 0 ? "md:pr-[2%]" : index % 3 === 1 ? "md:px-[1%]" : "md:pl-[2%]")} ${isMobile && (index % 2 === 1 ? "pl-[1%]" : "pr-[1%]")}`}
                target={"_blank"}
              >
                <img
                  src={item.cover}
                  className="mb-2 w-full shadow-2xl rounded-xl"
                />
                <p>{item.title}</p>
                <p>{item.year}</p>
              </Link>
            ))}
          </div>
        </div>
        <div className="w-full mb-8">
          <h2
            className="font-title mb-4 text-highlight-3 text-lg heading-text-shadow"
            style={{
              backgroundClip: "text",
              backgroundImage: "url(/images/mask-1.jpg)",
              color: "var(--color-highlight-3)",
              filter: "brightness(1.5) contrast(0.8) brightness(1.3)",
              backgroundSize: "300% 40%",
            }}
          >
            EP
          </h2>
          <div className="flex flex-wrap justify-between">
            {MUSIC_DUMMY_DATA.EP.map((item, index) => (
              <Link
                key={item.title}
                href={item.link}
                className={`w-1/2 md:w-1/3 mb-8 hover:scale-101 transition-transform duration-500 ${!isMobile && (index % 3 === 0 ? "md:pr-[2%]" : index % 3 === 1 ? "md:px-[1%]" : "md:pl-[2%]")} ${isMobile && (index % 2 === 1 ? "pl-[1%]" : "pr-[1%]")}`}
                target={"_blank"}
              >
                <img
                  src={item.cover}
                  className="mb-2 w-full shadow-2xl rounded-xl"
                />
                <p>{item.title}</p>
                <p>{item.year}</p>
              </Link>
            ))}
          </div>
        </div>
        <div className="w-full mb-8">
          <h2
            className="font-title mb-4 text-highlight-3 text-lg heading-text-shadow"
            style={{
              backgroundClip: "text",
              backgroundImage: "url(/images/mask-1.jpg)",
              color: "var(--color-highlight-3)",
              filter: "brightness(1.5) contrast(0.8) brightness(1.3)",
              backgroundSize: "100% 120%",
            }}
          >
            AV
          </h2>
          <motion.div className="flex flex-wrap justify-between">
            {MUSIC_DUMMY_DATA.AV.map((item, index) => (
              <button
                key={item.title}
                onClick={() => {
                  setActiveVideo(item.link);
                }}
                className={`w-1/2 md:w-1/3 mb-8 hover:scale-101 transition-transform duration-500 ${!isMobile && (index % 3 === 0 ? "md:pr-[2%]" : index % 3 === 1 ? "md:px-[1%]" : "md:pl-[2%]")} ${isMobile && (index % 2 === 1 ? "pl-[1%]" : "pr-[1%]")}`}
              >
                <img
                  src={item.cover}
                  className="b-2 w-full shadow-2xl rounded-xl"
                />
                <p>{item.title}</p>
                <p>{item.year}</p>
              </button>
            ))}
            <VideoPlayer url={activeVideo} handleClose={handleClose} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Music;
