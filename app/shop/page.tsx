"use client";
import { ShopItem } from "@/types";
import { useStrapi } from "../hooks/useStrapi";
import { ShopCard } from "../components/ShopCard";

const Shop = () => {
  const data = useStrapi<ShopItem[]>("/shop-items");
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="font-title mb-8 text-white text-lg text-outline mix-blend-lighten tracking-widest">
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
