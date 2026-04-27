"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export const Loader = () => {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsActive(false);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          className="fixed z-1000 w-screen h-screen flex items-center justify-center bg-black top-0 left-0"
          exit={{ opacity: 0 }}
        >
          <motion.img
            src="/images/logo-header.webp"
            className="w-64 h-64 animate-pulse duration-300"
            exit={{ translateY: "-100vh" }}
            transition={{ ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
