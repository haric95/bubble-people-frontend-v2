import { SiteData } from "@/types";
import { AudioPlayer } from "../components/AudioPlayer";
import { MusicPageContent } from "./pageContent";

const Music = async () => {
  const data = (await fetch(`${process.env.DATA_SOURCE_URI}/music.json`).then(
    (data) => data.json(),
  )) as SiteData["music"];

  return (
    <div>
      <div className="w-full flex flex-col items-center">
        <div className="w-full md:w-full md:h-32 mb-16 relative shadow-2xl">
          <div className="h-full w-full absolute top-0 pointer-events-none bg-[#000000cc] custom-box-shadow" />
          {data && <AudioPlayer audioItems={data.player} />}
        </div>
        <MusicPageContent data={data} />
      </div>
    </div>
  );
};

export default Music;
