import { NextRequest, NextResponse } from "next/server";

enum Page {
  HOME = "home",
  SHOP = "shop",
  MUSIC = "music",
}

const PAGES = new Set<Page>([Page.HOME, Page.SHOP, Page.MUSIC]);

export async function GET(request: NextRequest) {
  // Restrict to same-origin requests only
  const origin = request.headers.get("origin");
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (origin && siteUrl && origin !== siteUrl) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const uri = process.env.DATA_SOURCE_URI;
  const page = request.nextUrl.searchParams.get("page") as Page;

  if (!uri) {
    return NextResponse.json(
      { error: "Data source not configured" },
      { status: 500 },
    );
  }

  if (!page || (page && !PAGES.has(page))) {
    return NextResponse.json({ error: "Page does not exist" }, { status: 404 });
  }
  const fetchURL = `${uri}/${page}.json`;
  const res = await fetch(fetchURL, { cache: "no-store" });

  if (!res.ok) {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 502 },
    );
  }

  const json = await res.json();
  return NextResponse.json(json);
}
