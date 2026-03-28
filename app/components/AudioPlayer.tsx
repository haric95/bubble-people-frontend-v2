"use client";
import { MediaAudioItem } from "@/types";
import Image from "next/image";
import { useRef, useState } from "react";
import {
  IoMdPause,
  IoMdPlay,
  IoMdSkipBackward,
  IoMdSkipForward,
} from "react-icons/io";
import ReactPlayer from "react-player";

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
        url={audioItems[playIndex].hostLink}
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
        <div className="w-full h-full flex flex-col md:flex-row items-stretch p-2">
          <button
            className="relative aspect-square h-full flex items-center justify-center shrink-0 mb-2 md:mb-0 cursor-pointer"
            onClick={() => {
              setIsPlaying((old) => !old);
            }}
          >
            <Image
              alt="Image"
              src={audioItems[playIndex].cover}
              layout="fill"
              objectFit="cover"
              className="h-full w-auto rounded-lg"
            />
          </button>
          <div className="flex flex-col justify-between h-full md:ml-2 w-full mix-blend-difference">
            <p
              className="text-md text-white font-title"
              style={{ filter: "brightness(1)" }}
            >
              {audioItems[playIndex].title} - {audioItems[playIndex].artist}
            </p>
            <p className="text-sm">
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
                  className={`h-full absolute bg-white rounded-xl`}
                  style={{
                    width: duration ? `${(seekTime / duration) * 100}%` : 0,
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
