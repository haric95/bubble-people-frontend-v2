import { SiteData } from "@/types";
import { ShopCard } from "../components/ShopCard";

const Shop = async () => {
  const data = (await fetch(`${process.env.DATA_SOURCE_URI}/shop.json`).then(
    (data) => data.json(),
  )) as SiteData["shop"];
  return (
    <div className="w-full flex flex-col items-center">
      {data &&
        data.items.map((shopItem, index) => (
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
