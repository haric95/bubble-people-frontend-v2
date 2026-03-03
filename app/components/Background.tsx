"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useIsMobile } from "../hooks/useIsMobile";

// Background moves this many px for every 1px the user scrolls.
// Constant across all pages regardless of page height.
const PARALLAX_RATE = 0.05;

// How far up (px) the background image is offset at the bottom of the scroll
// (most "settled" position). Each page shows a unique slice of the image.
const BASE_Y: Record<string, number> = {
  "/": -160,    // upper portion of the image
  "/shop": -80, // middle portion
  "/music": 0,  // lower portion
};

export const Background = () => {
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const { isMobile } = useIsMobile();

  const [dimensions, setDimensions] = useState({ pageHeight: 0, windowHeight: 0 });

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

  // Translate the image element rather than animating background-position.
  // translateY is GPU-composited and never triggers a repaint.
  const y = useTransform(
    scrollY,
    [0, maxScroll],
    [`${baseY - parallaxTravel}px`, `${baseY}px`]
  );

  return (
    // Fixed, full-screen clipping container — overflow hidden keeps the
    // oversized image from spilling outside the viewport.
    <div className="w-screen h-screen fixed inset-0 overflow-hidden -z-10">
      <motion.div
        style={{
          y,
          height: `calc(100% + ${Math.abs(baseY - parallaxTravel)}px)`,
          backgroundImage: "url(/images/background.webp)",
          backgroundSize: isMobile ? "cover" : "100% auto",
          backgroundPosition: "center top",
          width: "100%",
          willChange: "transform",
        }}
      />
    </div>
  );
};
