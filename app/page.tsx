"use client";
import { Gallery } from "@/app/components/Gallery";
import Lenis from "lenis";
import Link from "next/link";
import { useEffect } from "react";

type Show = { title: string; date: string; url: string };
const UPCOMING_SHOWS: Show[] = [
  {
    title: "Live @ Taco Stand In Gabby's Yard",
    date: "2027-02-16T16:27:19.034Z",
    url: "https://bandcamp.com",
  },
  {
    title: "Live @ Madison Square Gardens",
    date: "2028-02-16T16:27:19.034Z",
    url: "https://bandcamp.com/",
  },
  {
    title: "Live @ GATE Presents: Bubble People 12h Live Set",
    date: "2029-02-16T16:27:19.034Z",
    url: "https://bandcamp.com//",
  },
];

export default function Home() {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div>
      <div className="p-4 md:p-8 flex flex-col items-center">
        <h1 className="font-title mb-4 text-white text-xl" style={{}}>
          Upcoming
        </h1>
        <div className="w-full">
          {UPCOMING_SHOWS.map((show) => (
            <div
              className="flex justify-center items-center mb-4"
              key={show.url}
            >
              <p className="grow-1 text-center">{show.title}</p>
              <Link href={show.url} target="_blank" className="g">
                <div className="mx-8 font-title border-2 border-white rounded-lg px-2 py-1 text-highlight-2">
                  <p>INFO</p>
                </div>
              </Link>
            </div>
          ))}
          {/*<div className="flex items-center mb-4">
            <p>Live @ Madison Square Gardens - 16th Jan 2026</p>
            <Link href="" className="g">
              <div className="mx-8 font-title border-2 border-white rounded-lg px-2 py-1 text-highlight-2">
                <p>INFO</p>
              </div>
            </Link>
          </div>
          <div className="flex items-center">
            <p>
              Live @ GATE Presents: Bubble People 12h Live Set - 17th Jan 2026
            </p>
            <Link href="" className="g">
              <div className="mx-8 font-title border-2 border-white rounded-lg px-2 py-1 text-highlight-2">
                <p>INFO</p>
              </div>
            </Link>
            </div>*/}
        </div>
      </div>
      <div className="w-full mt-8 flex justify-center">
        <div className="w-full md:w-full aspect-[1.77]">
          <Gallery
            images={[
              {
                attributes: {
                  url: "https://picsum.photos/500/400",
                },
              },
              {
                attributes: {
                  url: "https://picsum.photos/640/400",
                },
              },
              {
                attributes: {
                  url: "https://picsum.photos/650/400",
                },
              },
              {
                attributes: {
                  url: "https://picsum.photos/680/400",
                },
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
