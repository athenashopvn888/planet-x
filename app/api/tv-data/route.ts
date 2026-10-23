import { NextResponse } from "next/server";
import { getCigaretteSnapshot, reconcileSurfaceItems, snapshotHeaders } from "../../lib/cigaretteFeed";
import { allFlowers, catalogItems } from "../../lib/products";
import { getTvData } from "../../lib/tvStock";

export const runtime = "nodejs";

// Always run the handler. Upstream Apps Script reads are cached for ~300s
// inside getTvData. Cigarette on/off is re-read about every 60s inside the
// shared feed cache. This response itself is not cached (Cache-Control: no-store).
export const revalidate = 0;

export async function GET(request: Request) {
  const type = new URL(request.url).searchParams.get("type") || "flowers";
  const snap = await getCigaretteSnapshot();
  const cigHeaders = snapshotHeaders(snap);
  const { body, headers } = await getTvData({
    type,
    staticFlowers: allFlowers,
    staticItems: catalogItems,
  });

  if (type === "items" && Array.isArray(body)) {
    const items = reconcileSurfaceItems(body, snap.items, snap.tv.show);
    headers["x-tv-data-item-count"] = String(items.length);
    return NextResponse.json(items, { headers: { ...headers, ...cigHeaders } });
  }

  return NextResponse.json(body, { headers: { ...headers, ...cigHeaders } });
}
