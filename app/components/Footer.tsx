import React from "react";
import { AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";
import { FaBandcamp } from "react-icons/fa";
import { ImSoundcloud } from "react-icons/im";

export const Footer = () => {
  return (
    <footer className="w-fit p-8 flex justify-start fixed bottom-0 mix-blend-difference">
      <div className="flex flex-row md:flex-col">
        <button className="mr-4 md:mb-2 w-8 h-8 hover:scale-105 transition-transform duration-500">
          <a href={"https://www.instagram.com/jasper_drifts/"} target="_blank">
            <AiOutlineInstagram color="white" className="w-full h-full" />
          </a>
        </button>
        <button className="mr-4 md:mb-2 w-8 h-8 hover:scale-105 transition-transform duration-500">
          <a href={"https://bubblepeople.bandcamp.com/music"} target="_blank">
            <FaBandcamp color="white" className="w-full h-full" />
          </a>
        </button>
        <button className="mr-4 md:mb-2 w-8 h-8 hover:scale-105 transition-transform duration-500">
          <a href="https://soundcloud.com/bubblepeopleofficial" target="_blank">
            <ImSoundcloud color="white" className="w-full h-full" />
          </a>
        </button>
        <button className="w-8 h-8 hover:scale-105 transition-transform duration-500">
          <a href="mailto:bubblepeopleofficial@hotmail.com" target="_blank">
            <AiOutlineMail color="white" className="w-full h-full" />
          </a>
        </button>
      </div>
    </footer>
  );
};
