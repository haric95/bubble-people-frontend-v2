"use client";
import { ShopItem } from "@/types";
import { useStrapi } from "../hooks/useStrapi";
import { ShopCard } from "../components/ShopCard";

const Shop = () => {
  const data = useStrapi<ShopItem[]>("/shop-items");
  return (
    <div className="w-full py-16 flex flex-col items-center">
      <h1
        className="font-title mb-8 text-highlight text-[64px]"
        style={{
          backgroundClip: "text",
          backgroundImage: "url(/images/mask-1.jpg)",
          color: "#1CAFC488",
          filter: "brightness(1.5) contrast(0.8) brightness(1.3)",
          backgroundSize: "400% 400%",
        }}
      >
        Shop
      </h1>
      {data &&
        data.map((shopItem, index) => (
          <div
            key={index}
            className="md: h-64 w-full mb-4 rounded-xl overflow-hidden"
          >
            <ShopCard item={shopItem} direction={"left"} index={index} />
          </div>
        ))}
    </div>
  );
};

export default Shop;
