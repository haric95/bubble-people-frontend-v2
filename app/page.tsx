import {
  STRAPI_BASE_URL,
  HOME_POPULATE_QUERY,
  StrapiHomeResponse,
  translateHomePage,
} from "@/lib/strapi";
import { HomePageContent } from "./pageContent";

export default async function Home() {
  const raw = (await fetch(
    `${STRAPI_BASE_URL}/api/bubble-people-home?${HOME_POPULATE_QUERY}`,
  ).then((res) => res.json())) as StrapiHomeResponse;

  const data = translateHomePage(raw.data);

  return (
    <div>
      <HomePageContent data={data} />
    </div>
  );
}
