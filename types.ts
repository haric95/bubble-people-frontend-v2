export type StrapiResponse<T> = { data: T; meta: unknown };
export type StrapiImage = {
  attributes: {
    url: string;
  };
};

export type CMSImage = { url: string; alt: string };

export type MusicItem = {
  title: string;
  year: number;
  cover: string;
  link: string;
};

export type MediaAudioItem = {
  title: string;
  artist: string;
  cover: string;
  hostLink: string;
};

export type ShopItem = {
  attributes: {
    createdAt: string;
    description: string;
    images: { data: StrapiImage[] };
    price: number;
    publishedAt: string;
    title: string;
    updatedAt: string;
    link: string;
  };
};

export type SiteData = {
  home: {
    bio: string;
    gallery: CMSImage[];
    upcoming: { title: string; date: string; url: string }[];
    notable: { title: string; description: string; image: CMSImage }[];
    past: { title: string; url: string }[];
    supporters: { name: string; logo: string; link: string }[];
  };
  shop: {
    items: {
      title: string;
      description: string;
      price: number;
      link: string;
      image: CMSImage;
    }[];
  };
  music: {
    player: MediaAudioItem[];
    LP: MusicItem[];
    EP: MusicItem[];
    AV: MusicItem[];
  };
};

export type XYCoord = { x: number; y: number };
export type HTMLString = string;
