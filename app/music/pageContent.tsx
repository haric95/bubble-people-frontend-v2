"use client";
import { SiteData } from "@/types";
import { motion } from "motion/react";
import Link from "next/link";
import { useCallback, useMemo, useState } from "react";
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
          className="font-title mb-4 text-white text-xl heading-text-shadow"
          style={{}}
        >
          LP
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-[2%]">
          {data.LP.map((item, index) => (
            <Link
              key={item.title}
              href={item.link}
              className={`mb-8 hover:scale-101 transition-transform duration-500`}
              target={"_blank"}
            >
              <img
                src={item.cover}
                className="mb-2 w-full shadow-2xl rounded-xl aspect-square"
              />
              <p>{item.title}</p>
              <p>{item.year}</p>
            </Link>
          ))}
        </div>
      </div>
      <div className="w-full mb-8">
        <h2
          className="font-title mb-4 text-white text-xl heading-text-shadow"
          style={{}}
        >
          EP
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-[2%]">
          {data.EP.map((item, index) => (
            <Link
              key={item.title}
              href={item.link}
              className={`mb-8 hover:scale-101 transition-transform duration-500`}
              target={"_blank"}
            >
              <img
                src={item.cover}
                className="mb-2 w-full shadow-2xl rounded-xl aspect-square"
              />
              <p>{item.title}</p>
              <p>{item.year}</p>
            </Link>
          ))}
        </div>
      </div>
      <div className="w-full mb-8">
        <h2
          className="font-title mb-4 text-white text-xl heading-text-shadow"
          style={{}}
        >
          AV
        </h2>
        <motion.div className="grid grid-cols-2 md:grid-cols-3 gap-x-[2%]">
          {data.AV.map((item, index) => (
            <button
              key={item.title}
              onClick={() => {
                setActiveVideo(item.link);
              }}
              className={`mb-8 hover:scale-101 transition-transform duration-500 text-left`}
            >
              <img
                src={item.cover}
                className="b-2 w-full shadow-2xl rounded-xl mb-2 aspect-square"
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
