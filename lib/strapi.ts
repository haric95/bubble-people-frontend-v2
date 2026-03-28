import { CMSImage, SiteData } from "@/types";

// ─── Constants ────────────────────────────────────────────────────────────────

export const STRAPI_BASE_URL = "https://bubblepeoplecms.haric.dev";

export const HOME_POPULATE_QUERY =
  "populate[0]=Gallery&populate[1]=Upcoming&populate[2]=Notable.Image&populate[3]=Past&populate[4]=Supporters.Logo";

export const SHOP_POPULATE_QUERY = "populate[0]=BubblePeopleShopItems.Image";

export const MUSIC_POPULATE_QUERY =
  "populate[0]=Player.Cover&populate[1]=BubblePeopleLPReleases.Cover&populate[2]=BubblePeopleEPReleases.Cover&populate[3]=BubblePeopleAVReleases.Cover";

// ─── Raw Strapi response types ────────────────────────────────────────────────

type StrapiGalleryItem = {
  url: string;
  alternativeText: string | null;
};

type StrapiUpcomingItem = {
  Title: string;
  Date: string;
  URL: string;
};

type StrapiNotableItem = {
  Title: string;
  Description: string;
  Image: {
    url: string;
    alternativeText: string | null;
  };
};

type StrapiPastItem = {
  Title: string;
  URL: string;
};

type StrapiSupporterItem = {
  Name: string;
  URL: string;
  Logo: Array<{
    url: string;
    alternativeText: string | null;
  }>;
};

export type StrapiHomeData = {
  bio: string;
  Gallery: StrapiGalleryItem[];
  Upcoming: StrapiUpcomingItem[];
  Notable: StrapiNotableItem[];
  Past: StrapiPastItem[];
  Supporters: StrapiSupporterItem[];
};

export type StrapiHomeResponse = {
  data: StrapiHomeData;
  meta: unknown;
};

// ─── Shop types ───────────────────────────────────────────────────────────────

type StrapiShopItem = {
  Title: string;
  Description: string;
  Price: number;
  Link: string;
  Image: {
    url: string;
    alternativeText: string | null;
  };
};

export type StrapiShopData = {
  BubblePeopleShopItems: StrapiShopItem[];
};

export type StrapiShopResponse = {
  data: StrapiShopData;
  meta: unknown;
};

// ─── Music types ──────────────────────────────────────────────────────────────

type StrapiPlayerItem = {
  Title: string;
  Artist: string;
  Cover: {
    url: string;
    alternativeText: string | null;
  };
  HostLink: string;
};

type StrapiReleaseItem = {
  Title: string;
  Year: number;
  Cover: {
    url: string;
    alternativeText: string | null;
  };
  Link: string;
};

export type StrapiMusicData = {
  Player: StrapiPlayerItem[];
  BubblePeopleLPReleases: StrapiReleaseItem[];
  BubblePeopleEPReleases: StrapiReleaseItem[];
  BubblePeopleAVReleases: StrapiReleaseItem[];
};

export type StrapiMusicResponse = {
  data: StrapiMusicData;
  meta: unknown;
};

// ─── Translators ──────────────────────────────────────────────────────────────

export function translateHomePage(raw: StrapiHomeData): SiteData["home"] {
  const gallery: CMSImage[] = raw.Gallery.map((item) => ({
    url: STRAPI_BASE_URL + item.url,
    alt: item.alternativeText ?? "",
  }));

  const upcoming: SiteData["home"]["upcoming"] = raw.Upcoming.map((item) => ({
    title: item.Title,
    date: item.Date,
    url: item.URL ?? "",
  }));

  const notable: SiteData["home"]["notable"] = raw.Notable.map((item) => ({
    title: item.Title,
    description: item.Description,
    image: {
      url: STRAPI_BASE_URL + item.Image.url,
      alt: item.Image.alternativeText ?? "",
    },
  }));

  const past: SiteData["home"]["past"] = raw.Past.map((item) => ({
    title: item.Title,
    url: item.URL ?? "",
  }));

  const supporters: SiteData["home"]["supporters"] = raw.Supporters.map(
    (item) => ({
      name: item.Name,
      logo: STRAPI_BASE_URL + item.Logo[0].url,
      link: item.URL ?? "",
    }),
  );

  return {
    bio: raw.bio,
    gallery,
    upcoming,
    notable,
    past,
    supporters,
  };
}

export function translateShopPage(raw: StrapiShopData): SiteData["shop"] {
  return {
    items: raw.BubblePeopleShopItems.map((item) => ({
      title: item.Title,
      description: item.Description,
      price: item.Price,
      link: item.Link,
      image: {
        url: STRAPI_BASE_URL + item.Image.url,
        alt: item.Image.alternativeText ?? "",
      },
    })),
  };
}

export function translateMusicPage(raw: StrapiMusicData): SiteData["music"] {
  const mapRelease = (item: StrapiReleaseItem) => ({
    title: item.Title,
    year: item.Year,
    cover: STRAPI_BASE_URL + item.Cover.url,
    link: item.Link,
  });

  return {
    player: raw.Player.map((item) => ({
      title: item.Title,
      artist: item.Artist,
      cover: STRAPI_BASE_URL + item.Cover.url,
      hostLink: item.HostLink,
    })),
    LP: raw.BubblePeopleLPReleases.map(mapRelease),
    EP: raw.BubblePeopleEPReleases.map(mapRelease),
    AV: raw.BubblePeopleAVReleases.map(mapRelease),
  };
}
