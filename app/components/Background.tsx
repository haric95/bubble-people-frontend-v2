"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { useIsMobile } from "../hooks/useIsMobile";

export const Background = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const positionHome = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const positionShop = useTransform(scrollYProgress, [0, 1], ["20%", "40%"]);
  const positionMusic = useTransform(scrollYProgress, [0, 1], ["50%", "80%"]);
  const pathname = usePathname();
  const { isMobile } = useIsMobile();

  console.log(isMobile);

  return (
    <motion.div
      ref={backgroundRef}
      className="w-screen h-screen fixed"
      style={{
        backgroundImage: "url(/images/background.webp)",
        // backgroundSize: `${isMobile ? "200%" : "100%"} auto`,
        backgroundPositionY:
          pathname === "/"
            ? positionHome
            : pathname === "/shop"
              ? positionShop
              : pathname === "/music"
                ? positionMusic
                : "0% 0%",
      }}
    ></motion.div>
  );
};
