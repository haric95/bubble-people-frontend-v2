"use client";
import { StrapiResponse } from "@/types";
import qs from "qs";
import { useEffect, useState } from "react";

export function getStrapiURL(path = "") {
  return `${"https://bubble-people-backend-v2.herokuapp.com"}${path}`;
}

export const useStrapi = <T>(
  path: string,
  urlParamsObject = {},
  options = {},
) => {
  const [data, setData] = useState<null | T>(null);

  useEffect(() => {
    // Merge default and user options
    const mergedOptions = {
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    };

    // Build request URL
    const queryString = qs.stringify(urlParamsObject);
    const requestUrl = `${getStrapiURL(
      `/api${path}${queryString ? `?${queryString}` : ""}`,
    )}`;

    const getData = async () => {
      const data = await fetch(requestUrl, mergedOptions);
      const jsonData = (await data.json()) as StrapiResponse<T>;
      setData(jsonData.data);
    };
    getData();
  }, [options, urlParamsObject, path]);

  return data;
};
