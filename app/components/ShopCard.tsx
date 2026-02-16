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
      className={`w-full h-full text-white border border-white flex transition-all duration-500 rounded-xl ${
        direction === "right" && "flex-row-reverse"
      } flex-col md:flex-row`}
    >
      <div
        className={`h-64 w-full md:w-64 md:h-full relative shrink-0 content-box border-main`}
      >
        <img
          src={item.attributes.images.data[0].attributes.url}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="grow relative">
        <div
          className="w-full h-full absolute bg-black mix-blend-hue -hue-rotate-60"
          style={{}}
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
            <p className="text-sm">{item.attributes.description}</p>
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
