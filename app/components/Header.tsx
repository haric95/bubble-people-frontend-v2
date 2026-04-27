"use client";

import { Link } from "next-view-transitions";

export const Header = () => {
  return (
    <header className="flex py-4 w-full items-center font-title">
      <div className="flex justify-center h-full items-center grow text-white">
        <Link
          href="/music"
          className="cursor-pointer h-full flex items-center text-effect"
        >
          <h1 className="tracking-wide text-md md:text-xl w-16 md:w-24 text-center hover:scale-105 transition-all duration-500 cursor-pointer heading-text-shadow">
            Music
          </h1>
        </Link>
      </div>
      <div>
        <Link
          href="/"
          className="cursor-pointer flex w-fit h-fit hover:scale-105 transition-all duration-500"
        >
          <div className="h-32 w-32 md:h-64 md:w-64 opacity-95">
            <img
              src="/images/logo-header.webp"
              className="w-full h-full drop-shadow-2xl"
              style={{ imageOrientation: "none" }}
            />
          </div>
        </Link>
      </div>
      <div className="flex justify-center h-full items-center grow">
        <Link href="/store" className="cursor-pointer">
          <h1 className="tracking-wide text-md md:text-xl w-16 md:w-24 text-center hover:scale-105 transition-all duration-500 cursor-pointer heading-text-shadow text-white">
            Store
          </h1>
        </Link>
      </div>
    </header>
  );
};
