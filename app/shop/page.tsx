import {
  STRAPI_BASE_URL,
  SHOP_POPULATE_QUERY,
  StrapiShopResponse,
  translateShopPage,
} from "@/lib/strapi";
import { ShopCard } from "../components/ShopCard";

const Shop = async () => {
  const raw = (await fetch(
    `${STRAPI_BASE_URL}/api/bubble-people-shop?${SHOP_POPULATE_QUERY}`,
  ).then((res) => res.json())) as StrapiShopResponse;

  const data = translateShopPage(raw.data);
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
