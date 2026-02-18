"use client";

import { useCallback, useEffect, useState } from "react";
const BREAKPOINT = 768;

export const useIsMobile = () => {
  const getSize = useCallback(() => {
    if (window) {
      return window.innerWidth < BREAKPOINT;
    }
    return false;
  }, []);
  const [isMobile, setIsMobile] = useState<boolean | null>(getSize);

  const handleSizeChange = () => {
    if (window.innerWidth >= BREAKPOINT) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleSizeChange);

    return () => {
      window.removeEventListener("resize", handleSizeChange);
    };
  }, []);

  return { isMobile };
};
