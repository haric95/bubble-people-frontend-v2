"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import {
  IoMdPause,
  IoMdPlay,
  IoMdSkipBackward,
  IoMdSkipForward,
} from "react-icons/io";
import ReactPlayer from "react-player";

type MediaVideoItem = {
  id: number;
  attributes: {
    title: string;
    link: string;
    index: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
};

type MediaAudioItem = {
  id: number;
  attributes: {
    Title: string;
    Artist: string;
    Album: string;
    HostLink: string;
    BandcampLink: string;
    Index: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
};

const videoItems: MediaVideoItem[] = [
  {
    id: 6,
    attributes: {
      title: "Infinite Functions",
      link: "https://www.youtube.com/watch?v=Hs9F7cvk0kU",
      index: 2,
      createdAt: "2023-01-04T11:37:25.389Z",
      updatedAt: "2024-01-30T05:29:09.066Z",
      publishedAt: "2023-01-04T11:37:26.425Z",
    },
  },
  {
    id: 4,
    attributes: {
      title: "Dry Land Swimming",
      link: "https://www.youtube.com/watch?v=1hzPL6r75mg",
      index: 5,
      createdAt: "2023-01-04T11:35:16.863Z",
      updatedAt: "2024-01-30T05:31:29.018Z",
      publishedAt: "2023-01-04T11:35:24.240Z",
    },
  },
  {
    id: 3,
    attributes: {
      title: "The Eternal Optimist",
      link: "https://youtu.be/CFE8724yL7U",
      index: 6,
      createdAt: "2023-01-04T11:34:43.960Z",
      updatedAt: "2024-01-30T05:33:07.902Z",
      publishedAt: "2023-01-04T11:35:21.688Z",
    },
  },
  {
    id: 5,
    attributes: {
      title: "Escape Plane",
      link: "https://www.youtube.com/watch?v=xJLdaPm8jco",
      index: 3,
      createdAt: "2023-01-04T11:37:01.278Z",
      updatedAt: "2024-01-30T05:42:58.644Z",
      publishedAt: "2023-01-04T11:37:02.326Z",
    },
  },
  {
    id: 2,
    attributes: {
      title: "Rotator",
      link: "https://www.youtube.com/watch?v=WmvDbUARYRc",
      index: 1,
      createdAt: "2023-01-04T11:34:18.613Z",
      updatedAt: "2024-01-30T05:47:58.750Z",
      publishedAt: "2023-01-04T11:34:19.542Z",
    },
  },
  {
    id: 1,
    attributes: {
      title: "Cracking Wise",
      link: "https://www.youtube.com/watch?v=08FblpL1ptQ",
      index: 4,
      createdAt: "2023-01-04T11:33:43.910Z",
      updatedAt: "2024-01-30T21:21:40.427Z",
      publishedAt: "2023-01-04T11:33:46.778Z",
    },
  },
];

const audioItems: MediaAudioItem[] = [
  {
    id: 9,
    attributes: {
      Title: "Duplicate",
      Artist: "Bubble People",
      Album: "Duplicate",
      HostLink:
        "https://soundcloud.com/bubblepeopleofficial/bubble-people-duplicate-wmv2",
      BandcampLink: "https://bubblepeople.bandcamp.com/track/duplicate-2",
      Index: 1,
      createdAt: "2023-09-06T22:05:12.104Z",
      updatedAt: "2024-01-29T22:14:44.967Z",
      publishedAt: "2023-09-06T22:06:32.146Z",
    },
  },
  {
    id: 8,
    attributes: {
      Title: "Whiplash",
      Artist: "Bubble People",
      Album: "Rotator",
      HostLink: "https://soundcloud.com/bubblepeopleofficial/whiplash",
      BandcampLink: "https://bubblepeople.bandcamp.com/track/whiplash",
      Index: 2,
      createdAt: "2023-01-27T13:56:33.303Z",
      updatedAt: "2024-01-29T22:14:53.129Z",
      publishedAt: "2023-01-27T13:56:44.853Z",
    },
  },
  {
    id: 1,
    attributes: {
      Title: "Steal A Look",
      Artist: "Bubble People",
      Album: "Old Habits",
      HostLink: "https://soundcloud.com/bubblepeopleofficial/steal-a-look",
      BandcampLink: "https://bubblepeople.bandcamp.com/album/old-habits",
      Index: 3,
      createdAt: "2023-01-04T11:40:14.822Z",
      updatedAt: "2024-01-29T22:15:01.940Z",
      publishedAt: "2023-01-04T11:40:17.648Z",
    },
  },
  {
    id: 2,
    attributes: {
      Title: "Tendrils (Dream)",
      Artist: "Bubble People",
      Album: "Infinite Functions",
      HostLink: "https://soundcloud.com/bubblepeopleofficial/tendrils-dream",
      BandcampLink:
        "https://bubblepeople.bandcamp.com/album/infinite-functions",
      Index: 4,
      createdAt: "2023-01-04T11:41:33.109Z",
      updatedAt: "2024-01-29T22:15:06.671Z",
      publishedAt: "2023-09-06T22:07:11.090Z",
    },
  },
];

export const AudioPlayer = () => {
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
              src={"/images/cover-1.jpg"}
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
                  className="!p-0 w-8 h-8 flex items-center justify-center shrink-0 cursor-pointer"
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
