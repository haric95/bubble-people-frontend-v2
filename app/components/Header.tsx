"use client";

import { Link } from "next-view-transitions";

export const Header = () => {
  return (
    <header className="flex py-4 w-full items-center font-title hue-rotate-90">
      <div className="flex justify-center h-full items-center grow">
        <Link href="/music" className="cursor-pointer h-full flex items-center">
          <h1 className="tracking-wide text-md hover:scale-105 transition-all duration-500 cursor-pointer">
            Music
          </h1>
        </Link>
      </div>
      <div>
        <Link
          href="/"
          className="cursor-pointer flex w-fit h-fit hover:scale-105 transition-all duration-500"
        >
          <div className="h-64 w-64 hover-rotate">
            <img src="/images/logo-test-3.png" className="w-full h-full" />
          </div>
        </Link>
      </div>
      <div className="flex justify-center h-full items-center grow">
        <Link href="/shop" className="cursor-pointer">
          <h1 className="tracking-wide text-md hover:scale-105 transition-all duration-500 cursor-pointer">
            Shop
          </h1>
        </Link>
      </div>
    </header>
  );
};
