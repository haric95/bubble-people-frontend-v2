import { StrapiImage } from "@/types";
import { useEffect } from "react";

export const usePrefetchImages = (images: StrapiImage[]) => {
  useEffect(() => {
    images.map((image) => {
      const i = new Image();
      i.url = image.attributes.url;
    });
  }, [images]);
};
