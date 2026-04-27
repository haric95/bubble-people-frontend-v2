"use client";

import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";

export const MarcoLogo = () => {
  const pathname = usePathname();

  return pathname === "/" ? (
    <button
      className="absolute bottom-0 right-0 w-fit h-24 md:h-32 p-4 mix-blend-difference opacity-90"
      onClick={() => {
        if (pathname === "/") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }}
    >
      <img
        src="/images/marco-logo.webp"
        className="h-full animate-rotate-y"
        style={{ animation: "rotateY 8000ms linear infinite" }}
      />
    </button>
  ) : (
    <Link
      href={"/"}
      className="absolute bottom-0 right-0 w-fit h-24 md:h-32 p-4 mix-blend-difference opacity-90"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <img
        src="/images/marco-logo.webp"
        className="h-full animate-rotate-y"
        style={{ animation: "rotateY 8000ms linear infinite" }}
      />
    </Link>
  );
};
