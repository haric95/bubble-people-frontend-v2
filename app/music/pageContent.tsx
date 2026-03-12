"use client";
import { SiteData } from "@/types";
import { motion } from "motion/react";
import Link from "next/link";
import { useCallback, useState } from "react";
import { VideoPlayer } from "../components/VideoPlayer";

type MusicPageContentProps = {
  data: SiteData["music"];
};

export const MusicPageContent = ({ data }: MusicPageContentProps) => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const handleClose = useCallback(() => {
    setActiveVideo(null);
  }, []);

  return (
    <>
      <div className="w-full mb-8">
        <h2
          className="font-title mb-4 text-highlight-3 text-xl heading-text-shadow"
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
        <div className="flex flex-wrap justify-between gap-[1%] md:gap-[1%]">
          {data.LP.map((item, index) => (
            <Link
              key={item.title}
              href={item.link}
              className={`w-[48%] md:w-[32%] mb-8 hover:scale-101 transition-transform duration-500`}
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
          className="font-title mb-4 text-highlight-3 text-xl heading-text-shadow"
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
        <div className="flex flex-wrap justify-between gap-[1%] md:gap-[1%]">
          {data.EP.map((item, index) => (
            <Link
              key={item.title}
              href={item.link}
              className={`w-[48%] md:w-[32%] mb-8 hover:scale-101 transition-transform duration-500`}
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
          className="font-title mb-4 text-highlight-3 text-xl heading-text-shadow"
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
        <motion.div className="flex flex-wrap justify-between gap-[1%] md:gap-[1%]">
          {data.AV.map((item, index) => (
            <button
              key={item.title}
              onClick={() => {
                setActiveVideo(item.link);
              }}
              className={`w-[48%] md:w-[32%] mb-8 hover:scale-101 transition-transform duration-500`}
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
    </>
  );
};
