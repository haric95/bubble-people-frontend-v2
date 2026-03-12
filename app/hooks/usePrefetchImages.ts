import { CMSImage } from "@/types";
import { useEffect } from "react";

export const usePrefetchImages = (images: CMSImage[]) => {
  useEffect(() => {
    images.map((image) => {
      const i = new Image();
      i.src = image.url;
    });
  }, [images]);
};
