export type StrapiResponse<T> = { data: T; meta: unknown };
export type StrapiImage = {
  attributes: {
    url: string;
  };
};

export type MediaAudioItem = {
  id: number;
  attributes: {
    Title: string;
    Artist: string;
    Album: string;
    HostLink: string;
    BandcampLink: string;
    Index: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    Cover: StrapiResponse<StrapiImage>;
  };
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

export type XYCoord = { x: number; y: number };
export type HTMLString = string;
