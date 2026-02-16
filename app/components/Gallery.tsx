"use client";
import Image from "next/image";
import { StrapiImage } from "@/types";
import { useCallback, useEffect, useRef, useState } from "react";
import { usePrefetchImages } from "../hooks/usePrefetchImages";

type GalleryProps = {
  images: StrapiImage[];
};

export const Gallery = (props: GalleryProps) => {
  usePrefetchImages(props.images);
  const [visibleImageIndex, setVisibleImageIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout>(null);

  const handleNext = useCallback(() => {
    setVisibleImageIndex((old) => (old + 1) % props.images.length);
  }, [props.images]);

  const handleClick = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    const i = setInterval(handleNext, 6000);
    intervalRef.current = i;
    handleNext();
  }, [handleNext]);

  useEffect(() => {
    const i = setInterval(handleNext, 6000);
    intervalRef.current = i;

    return () => {
      clearInterval(i);
    };
  }, [handleNext]);

  return (
    <div className="w-full h-full object-cover relative shadow-2xl rounded-xl overflow-hidden">
      <button
        className="cursor-pointer relative w-full h-full flex items-center justify-center overflow-hidden"
        onClick={handleClick}
      >
        {props.images.map((image, index) => (
          <Image
            src={image.attributes.url}
            alt={"image"}
            width={600}
            height={400}
            key={image.attributes.url}
            className="transition-opacity duration-1000 absolute w-full h-fill object-cover object-center"
            style={{
              opacity: index === visibleImageIndex ? "100%" : "0%",
            }}
          />
        ))}
      </button>
    </div>
  );
};
