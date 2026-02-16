"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export const Background = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const position = useTransform(scrollYProgress, [0, 1], ["50%", "60%"]);

  return (
    <motion.div
      ref={backgroundRef}
      className="w-screen h-screen fixed"
      style={{
        backgroundImage: "url(/images/background.webp)",
        backgroundSize: "100% auto",
        backgroundPositionY: position,
      }}
    ></motion.div>
  );
};
