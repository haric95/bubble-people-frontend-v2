"use client";
import { useCallback, useEffect, useState } from "react";
const BREAKPOINT = 768;

export const useIsMobile = () => {
  const getSize = useCallback(() => {
    if (typeof window !== "undefined") {
      return window?.innerWidth < BREAKPOINT;
    }
    return false;
  }, []);
  const [isMobile, setIsMobile] = useState<boolean | null>(getSize);

  const handleSizeChange = () => {
    if (typeof window !== "undefined" && window.innerWidth >= BREAKPOINT) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window?.addEventListener("resize", handleSizeChange);
    }

    return () => {
      if (typeof window !== "undefined") {
        window?.removeEventListener("resize", handleSizeChange);
      }
    };
  }, []);

  return { isMobile };
};
