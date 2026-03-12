import { SiteData } from "@/types";
import { HomePageContent } from "./pageContent";

export default async function Home() {
  const data = (await fetch(`${process.env.DATA_SOURCE_URI}/home.json`).then(
    (data) => data.json(),
  )) as SiteData["home"];

  return (
    <div>
      <HomePageContent data={data} />
    </div>
  );
}
