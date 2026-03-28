import { SiteData } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type ShopCardProps = {
  item: SiteData["shop"]["items"][0];
  direction: "left" | "right";
  index: number;
};

export const ShopCard: React.FC<ShopCardProps> = ({ direction, item }) => {
  return (
    <Link
      target="_blank"
      href={item.link}
      className={`w-full h-full text-white flex flex-col md:flex-row transition-all duration-500 bg-[#ffffff08] ${
        direction === "right" && "flex-row-reverse"
      } flex-col md:flex-row`}
    >
      <div
        className={`h-64 md:h-full w-full md:w-64 relative shrink-0 content-box border-main`}
      >
        <Image
          src={item.image.url}
          alt="cover"
          fill
          className="w-full h-full object-cover rounded-t-xl md:rounded-t-none md:rounded-l-xl opacity-95"
        />
      </div>
      <div className="grow relative">
        <div
          className="w-full h-full absolute bg-[#ffffff11] mix-blend-difference border-2 border-white rounded-b-xl md:rounded-bl-none md:rounded-r-xl border-t-4 md:border-t-2 md:border-l-4"
          style={{}}
        />
        <div
          className={`top-0 relative p-4 flex flex-col justify-between h-full ${
            direction === "left" ? "items-end text-right" : "items-start"
          }`}
        >
          <div className="mb-2 md:mb-0 mix-blend-difference">
            <h4 className="font-title font-weight-500 tracking-wider mb-4 text-md md:text-lg heading-text-shadow">
              {item.title}
            </h4>
            <p className="text-sm md:text-sm">{item.description}</p>
          </div>
          <div
            className={`flex items-center ${
              direction === "left" && "flex-row-reverse"
            }`}
          >
            <button className="flex items-center translate-y-px font-title text-lg mr-2 text-white cursor-pointer duration-500 border-2 border-white rounded-xl px-2 mix-blend-difference bg-[#00000022] button-effect transform-all">
              Buy
            </button>
            <p className="mr-4 text-md md:text-md mix-blend-difference">
              £{item.price}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
