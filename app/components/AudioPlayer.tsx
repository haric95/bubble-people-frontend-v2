"use client";
import { MediaAudioItem, StrapiImage } from "@/types";
import Image from "next/image";
import { useRef, useState } from "react";
import {
  IoMdPause,
  IoMdPlay,
  IoMdSkipBackward,
  IoMdSkipForward,
} from "react-icons/io";
import ReactPlayer from "react-player";

// type MediaVideoItem = {
//   id: number;
//   attributes: {
//     title: string;
//     link: string;
//     index: number;
//     createdAt: string;
//     updatedAt: string;
//     publishedAt: string;
//   };
// };
type AudioPlayerProps = { audioItems: MediaAudioItem[] };

export const AudioPlayer = ({ audioItems }: AudioPlayerProps) => {
  const playerRef = useRef<ReactPlayer | null>(null);
  const barRef = useRef<HTMLDivElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState<number | null>(null);
  const [seekTime, setSeekTime] = useState(0);
  const [playIndex, setPlayIndex] = useState(0);

  return (
    <>
      <ReactPlayer
        key={playIndex}
        ref={playerRef}
        url={audioItems[playIndex].attributes.HostLink}
        width="100%"
        height="0px"
        playing={isPlaying}
        onProgress={(time) => setSeekTime(time.playedSeconds)}
        onDuration={(duration) => setDuration(duration)}
        onEnded={() => {
          setSeekTime(0);
          if (playIndex + 1 < audioItems.length) {
            setPlayIndex((old) => old + 1);
          } else {
            setPlayIndex(0);
            setIsPlaying(false);
          }
        }}
      />
      <div className="w-full h-full">
        <div className="w-full h-full flex flex-col md:flex-row items-stretch p-2 rounded-xl">
          <button
            className="relative aspect-square h-full flex items-center justify-center shrink-0 mb-2 md:mb-0 cursor-pointer"
            onClick={() => {
              setIsPlaying((old) => !old);
            }}
          >
            <Image
              alt="Image"
              src={audioItems[playIndex].attributes.Cover.data.attributes.url}
              layout="fill"
              objectFit="cover"
              className="rounded-lg h-full w-auto"
            />
          </button>
          <div className="flex flex-col justify-between h-full md:ml-2 w-full">
            <p className="text-[16px]">
              {audioItems[playIndex].attributes.Title} -{" "}
              {audioItems[playIndex].attributes.Artist}
            </p>
            <p className="text-[12px]">
              {playIndex + 1} / {audioItems.length}
            </p>
            <div className="flex w-full justify-between mb-2">
              <button
                className="!p-0 w-8 h-8 flex items-center justify-start shrink-0 mr-4 cursor-pointer"
                onClick={() => {
                  setIsPlaying((old) => !old);
                }}
              >
                {isPlaying ? <IoMdPause /> : <IoMdPlay />}
              </button>
              <div className="flex justify-end">
                <button
                  className="!p-0 w-8 h-8 flex items-center justify-center shrink-0 mr-4 cursor-pointer"
                  onClick={() => {
                    setSeekTime(0);
                    setDuration(null);
                    setPlayIndex(
                      (old) =>
                        (old - 1 + audioItems.length) % audioItems.length,
                    );
                  }}
                >
                  <IoMdSkipBackward className="" />
                </button>
                <button
                  className="!p-0 w-8 h-8 flex items-center justify-center shrink-0 cursor-pointer hover:scale-102 transition-transform"
                  onClick={() => {
                    setSeekTime(0);
                    setDuration(null);
                    setPlayIndex((old) => (old + 1) % audioItems.length);
                  }}
                >
                  <IoMdSkipForward className="" />
                </button>
              </div>
            </div>
            <div className="w-full">
              <div
                className="h-2 w-full bg-bg-blue relative cursor-pointer rounded-xl"
                ref={barRef}
                onClick={(e) => {
                  if (barRef.current) {
                    const boundingRect = barRef.current.getBoundingClientRect();
                    const clickPercentage =
                      (e.clientX - boundingRect.left) / boundingRect.width;
                    duration && setSeekTime(duration * clickPercentage);
                    playerRef.current?.seekTo(clickPercentage);
                  }
                }}
              >
                <div
                  className={`h-full absolute rounded-xl`}
                  style={{
                    width: duration ? `${(seekTime / duration) * 100}%` : 0,
                    backgroundColor: "#d4de14bb",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
