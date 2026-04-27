"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useState } from "react";
import { useIsMobile } from "../hooks/useIsMobile";

const PARALLAX_RATE = 0.05;

export const Background = () => {
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

  const y = useTransform(
    scrollY,
    [0, maxScroll],
    [`-${parallaxTravel}px`, `0px`],
  );

  return (
    <div className="w-screen h-lvh fixed inset-0 overflow-hidden -z-10">
      <motion.div
        style={{
          y,
          height: `calc(130% + ${parallaxTravel}px)`,
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
