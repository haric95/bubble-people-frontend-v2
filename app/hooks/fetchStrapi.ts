import { StrapiResponse } from "@/types";
import qs from "qs";

function getStrapiURL(path = "") {
  return `${"https://bubble-people-backend-v2.herokuapp.com"}${path}`;
}

export const fetchStrapi = async <T>(
  path: string,
  // urlParamsObject = {},
  // options = {},
) => {
  const queryString = qs.stringify({ populate: "*" });
  const requestUrl = `${getStrapiURL(
    `/api${path}${queryString ? `?${queryString}` : ""}`,
  )}`;

  const data = await fetch(requestUrl);
  const jsonData = (await data.json()) as StrapiResponse<T>;
  return jsonData;
};
