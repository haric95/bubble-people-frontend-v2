import { ShopItem } from "@/types";
import Link from "next/link";
import React from "react";

type ShopCardProps = {
  item: ShopItem;
  direction: "left" | "right";
  index: number;
};

export const ShopCard: React.FC<ShopCardProps> = ({
  direction,
  item,
  index,
}) => {
  return (
    <Link
      target="_blank"
      href={item.attributes.link}
      className={`w-full h-full text-white flex transition-all duration-500 ${
        direction === "right" && "flex-row-reverse"
      } flex-col md:flex-row`}
    >
      <div
        className={`h-full md:h-64 w-full md:w-64 relative shrink-0 content-box border-main`}
      >
        <img
          src={item.attributes.images.data[0].attributes.url}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="grow relative">
        <div
          className="w-full h-full absolute bg-[#000000cc] -hue-rotate-60"
          style={{}}
        />
        <div
          className={`top-0 relative p-4 flex flex-col justify-between h-full ${
            direction === "left" ? "items-end text-right" : "items-start"
          }`}
        >
          <div className="mb-2 md:mb-0">
            <h4 className="font-title font-weight-500 tracking-wider mb-4 text-md md:text-2xl heading-text-shadow">
              {item.attributes.title}
            </h4>
            <p className="text-sm md:text-md">{item.attributes.description}</p>
          </div>
          <div
            className={`flex items-center ${
              direction === "left" && "flex-row-reverse"
            }`}
          >
            <button className="flex items-center font-title text-md mr-2 text-highlight-3 cursor-pointer hover:scale-102 transition-transform duration-500">
              Buy
            </button>
            <p className="mr-4 text-md">£{item.attributes.price}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
