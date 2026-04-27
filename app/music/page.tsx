import {
  STRAPI_BASE_URL,
  MUSIC_POPULATE_QUERY,
  StrapiMusicResponse,
  translateMusicPage,
} from "@/lib/strapi";
import { AudioPlayer } from "../components/AudioPlayer";
import { MusicPageContent } from "./pageContent";
import Link from "next/link";

const Music = async () => {
  const raw = (await fetch(
    `${STRAPI_BASE_URL}/api/bubble-people-music?${MUSIC_POPULATE_QUERY}`,
  ).then((res) => res.json())) as StrapiMusicResponse;

  const data = translateMusicPage(raw.data);

  return (
    <div>
      <div className="w-full flex flex-col items-center">
        <div className="w-full md:w-full md:h-32 mb-16 relative shadow-2xl border-white border-2 bg-[#e0b66522] rounded-xl">
          <div className="h-full w-full absolute top-0 pointer-events-none custom-box-shadow rounded-lg" />
          {data && <AudioPlayer audioItems={data.player} />}
        </div>
        <MusicPageContent data={data} />
      </div>
    </div>
  );
};

export default Music;
