import { ShopItem, XYCoord } from "@/types";
import React, { useEffect, useMemo, useState } from "react";

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
    <div
      className={`w-full h-full bg-black text-white flex opacity-80 hover:opacity-100 transition-all duration-500 rounded-xl ${
        direction === "right" && "flex-row-reverse"
      } flex-col md:flex-row`}
    >
      <div
        className={`h-64 w-full md:w-64 md:h-full bg-black relative shrink-0 content-box border-main`}
      >
        <img
          src={item.attributes.images.data[0].attributes.url}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="grow bg-black relative">
        <div
          className="w-full h-full absolute opacity-15"
          style={{
            filter:
              "brightness(2) contrast(0.7) sepia(60%) hue-rotate(125deg) brightness(1.6)",
            backgroundImage: "url(/images/mask-1.jpg)",
            backgroundSize: "200% 900%",
            backgroundPosition: `330% ${index * 10}%`,
          }}
        />
        <div
          className={`top-0 relative p-4 flex flex-col justify-between h-full ${
            direction === "left" ? "items-end text-right" : "items-start"
          }`}
        >
          <div className="mb-2 md:mb-0">
            <h4 className="font-title font-weight-500 tracking-wider mb-4 text-2xl">
              {item.attributes.title}
            </h4>
            <p className="text-md">{item.attributes.description}</p>
          </div>
          <div
            className={`flex items-center ${
              direction === "left" && "flex-row-reverse"
            }`}
          >
            <a href={item.attributes.link} target="_blank" rel="noreferrer">
              <button className="mr-2 text-highlight-3 cursor-pointer hover:scale-102 transition-transform duration-500">
                Buy
              </button>
            </a>
            <p className="mr-2">£{item.attributes.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
