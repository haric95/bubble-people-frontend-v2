import react from "react";
import { StrapiImage } from "@/types";
import Link from "next/link";

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
};

const Music = () => {
  return (
    <div>
      {" "}
      <div className="w-full py-16 flex flex-col items-center">
        <h1
          className="font-title mb-4 text-highlight text-[64px]"
          style={{
            backgroundClip: "text",
            backgroundImage: "url(/images/mask-1.jpg)",
            color: "#1CAFC488",
            filter: "brightness(1.5) contrast(0.8) brightness(1.3)",
            backgroundSize: "200% 400%",
          }}
        >
          Music
        </h1>
        <div className="w-full px-16 mb-8">
          <h2
            className="font-title mb-4 text-highlight-3 text-[48px]"
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
                className={`w-1/3 mb-8 hover:scale-101 transition-transform duration-500 ${index % 3 === 0 ? "pr-[2%]" : index % 3 === 1 ? "px-[1%]" : "pl-[2%]"}`}
                target={"_blank"}
              >
                <img
                  src={item.cover}
                  className="rounded-lg mb-2 w-full shadow-2xl"
                />
                <p>{item.title}</p>
                <p>{item.year}</p>
              </Link>
            ))}
          </div>
        </div>
        <div className="w-full px-16 mb-8">
          <h2
            className="font-title mb-4 text-highlight-3 text-[48px]"
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
                className={`w-1/3 mb-8 hover:scale-101 transition-transform duration-500 ${index % 3 === 0 ? "pr-[2%]" : index % 3 === 1 ? "px-[1%]" : "pl-[2%]"}`}
                target={"_blank"}
              >
                <img
                  src={item.cover}
                  className="rounded-lg mb-2 w-full shadow-2xl"
                />
                <p>{item.title}</p>
                <p>{item.year}</p>
              </Link>
            ))}
          </div>
        </div>
        <div className="w-full px-16 mb-8">
          <h2
            className="font-title mb-4 text-highlight-3 text-[48px]"
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
          <div className="flex flex-wrap justify-between">
            {MUSIC_DUMMY_DATA.AV.map((item, index) => (
              <Link
                key={item.title}
                href={item.link}
                className={`w-1/3 mb-8 hover:scale-101 transition-transform duration-500 ${index % 3 === 0 ? "pr-[2%]" : index % 3 === 1 ? "px-[1%]" : "pl-[2%]"}`}
                target={"_blank"}
              >
                <img
                  src={item.cover}
                  className="rounded-lg mb-2 w-full shadow-2xl"
                />
                <p>{item.title}</p>
                <p>{item.year}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Music;
