import { ShopItem } from "@/types";
import { ShopCard } from "../components/ShopCard";
import { fetchStrapi } from "../hooks/fetchStrapi";

const Shop = async () => {
  const data = await fetchStrapi<ShopItem[]>("/shop-items");

  return (
    <div className="w-full flex flex-col items-center">
      {data &&
        data.data.map((shopItem, index) => (
          <div
            key={index}
            className="h-auto md:h-64 w-full mb-4 overflow-hidden"
            style={{ boxShadow: "4px 4px 4px #00000088" }}
          >
            <ShopCard item={shopItem} direction={"left"} index={index} />
          </div>
        ))}
    </div>
  );
};

export default Shop;
