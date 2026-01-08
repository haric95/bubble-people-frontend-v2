"use client";

import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import React from "react";

export const Header = () => {
  const pathname = usePathname();
  return (
    <header className="flex py-4 w-full items-center font-title">
      <div className="flex justify-center h-full items-center grow">
        <Link href="/music" className="cursor-pointer h-full flex items-center">
          <h1
            className="tracking-wide text-lg hover:scale-105 transition-all duration-500 cursor-pointer"
            style={{
              backgroundClip: "text",
              backgroundImage: "url(/images/mask-2.jpg)",
              color: pathname === "/music" ? "#d4de1477" : "#1CAFC488",
              filter:
                pathname === "/music"
                  ? "brightness(1) contrast(1) brightness(1.8)"
                  : "brightness(2) contrast(0.4) brightness(1.5)",
              backgroundSize: "400% 200%",
              backgroundPosition: pathname === "/music" ? "50% 50%" : "0% 0%",
            }}
          >
            Music
          </h1>
        </Link>
      </div>
      <div>
        <Link
          href="/"
          className="cursor-pointer flex w-fit h-fit hover:scale-105 transition-all duration-500"
        >
          <div
            className="mask-[url(/images/logo-transparent.webp)] bg-[url(/images/mask-1.jpg)] h-64 w-64 hover-rotate"
            style={{
              maskImage: "url(/images/logo-test-3.png)",
              maskSize: "100% 100%",
              filter:
                "brightness(3) contrast(0.2) sepia(60%) hue-rotate(130deg) brightness(1.6)",
              backgroundSize: "200% 200%",
              backgroundPosition: "50% 50%",
            }}
          />
          {/*<img
            src="/images/logo-transparent.webp"
            className="h-64"
            style={{ maskImage: "url(/images/mask-1.jpg)" }}
          />*/}
        </Link>
      </div>
      <div className="flex justify-center h-full items-center grow">
        <Link href="/shop" className="cursor-pointer">
          <h1
            className="tracking-wide text-lg hover:scale-105 transition-all duration-500 cursor-pointer"
            style={{
              backgroundClip: "text",
              backgroundImage: "url(/images/mask-3.jpg)",
              color: pathname === "/shop" ? "#d4de1477" : "#1CAFC488",
              filter:
                pathname === "/shop"
                  ? "brightness(1) contrast(1) brightness(1.8)"
                  : "brightness(2) contrast(0.4) brightness(1.5)",
              backgroundSize: "400% 200%",
              backgroundPosition: pathname === "/shop" ? "0% 0%" : "50% 50%",
            }}
          >
            Shop
          </h1>
        </Link>
      </div>
      {/*<Link href="/about">
                <button
                  className={`mr-4 text-glow-button transition-all text-[24px] ${
                    router.asPath === "/about" ? "!text-white" : ""
                  }`}
                >
                  about
                </button>
              </Link>
              <Link href="/store">
                <button
                  className={`mr-4 text-glow-button transition-all text-[24px] ${
                    router.asPath === "/store" ? "!text-white" : ""
                  }`}
                >
                  store
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>*/}
    </header>
  );
};
