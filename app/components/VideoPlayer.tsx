"use client";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("reactplayer3"), { ssr: false });

type VideoPlayerProps = {
  url: string | null;
  handleClose: () => void;
};

export const VideoPlayer = (props: VideoPlayerProps) => {
  return (
    <div
      className={`fixed z-1000 w-screen h-screen top-0 left-0 select-none transition-opacity duration-500 ${props.url ? "" : "pointer-events-none opacity-0"}`}
    >
      <div className="w-full h-full p-8 relative">
        <div className="w-full h-full absolute bg-black opacity-90 top-0 left-0" />
        <div
          className="w-full h-full absolute top-0 left-0 flex justify-center items-center cursor-pointer"
          onClick={props.handleClose}
        >
          <div
            className="w-full md:w-3/4 aspect-[1.77] flex justify-center items-center cursor-pointer"
            style={{ aspectRatio: 1.77 }}
            onClick={props.handleClose}
          >
            {props.url && (
              <ReactPlayer
                src={props.url}
                className="w-full h-full"
                height="100%"
                width="100%"
                controls
                autoPlay
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
