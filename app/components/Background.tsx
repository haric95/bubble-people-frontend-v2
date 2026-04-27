"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useIsMobile } from "../hooks/useIsMobile";

const PARALLAX_RATE = 0.05;

const BASE_Y: Record<string, number> = {
  "/": 0,
  "/shop": 0,
  "/music": 0,
};

export const Background = () => {
  const pathname = usePathname();

  const { scrollY } = useScroll();
  const { isMobile } = useIsMobile();

  const [dimensions, setDimensions] = useState({
    pageHeight: 0,
    windowHeight: 0,
  });

  useEffect(() => {
    const update = () =>
      setDimensions({
        pageHeight: document.documentElement.scrollHeight,
        windowHeight: window.innerHeight,
      });

    update();
    const ro = new ResizeObserver(update);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, []);

  const maxScroll = dimensions.pageHeight - dimensions.windowHeight;
  const parallaxTravel = PARALLAX_RATE * maxScroll;
  const baseY = BASE_Y[pathname] ?? 0;

  const y = useTransform(
    scrollY,
    [0, maxScroll],
    [`${baseY - parallaxTravel}px`, `${baseY}px`],
  );

  return (
    <div className="w-screen h-lvh fixed inset-0 overflow-hidden -z-10">
      <motion.div
        style={{
          y,
          height: `calc(100%+ ${Math.abs(baseY - parallaxTravel)}px)`,
          backgroundImage: "url(/images/background.webp)",
          backgroundSize: isMobile ? "cover" : "100% auto",
          backgroundPosition: "center top",
          width: "auto",
          willChange: "transform",
        }}
      />
    </div>
  );
};
