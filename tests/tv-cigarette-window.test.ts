import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import test from "node:test";
import {
  cigarettePublicHeaders,
  decideCigaretteSurface,
  reconcileSurfaceItems,
} from "../app/lib/cigDecision.ts";
import { isRealCigaretteItem } from "../app/lib/cigMarkers.ts";
import { filterCigaretteItems, SHOW_CIGARETTES } from "../app/lib/siteConfig.ts";
import { tv2CardsForFlag, tvAddonItems } from "../app/tv2/tv2Board.ts";

const require = createRequire(import.meta.url);
const { getCigaretteDataset, resetTvStockCache } = require("../app/lib/tvStock.js");

const carton = { category: "CIGARETTES", name: "BB FULL CARTON", slug: "bb-full-carton" };
const backwoods = { category: "CIGARETTES", name: "BACKWOODS ASSORTED", slug: "backwoods" };
const cigarillo = { category: "CIGARETTES", name: "CIGARILLO", slug: "cigarillo" };
const paper = { category: "ADD ONS", name: "RAW PAPER KING SIZE", slug: "raw-paper" };
const pouch = { category: "CIGARETTES", name: "NICOTINE POUCHES , VELO", slug: "pouches" };
const zyn = { category: "CIGARETTES", name: "ZYN", slug: "zyn" };
const velo = { category: "CIGARETTES", name: "VELO", slug: "velo" };
const wrap = { category: "CIGARETTES", name: "HEMP WRAP", slug: "wrap" };
const kept = [backwoods, cigarillo, paper, pouch, zyn, velo, wrap];

const flowers = JSON.parse(readFileSync(new URL("../app/lib/flowers.json", import.meta.url), "utf8"));
const shelf = JSON.parse(readFileSync(new URL("../app/lib/items.json", import.meta.url), "utf8"));

async function feedFor(cig: Record<string, unknown>) {
  resetTvStockCache();
  const dataset = await getCigaretteDataset({
    staticFlowers: flowers,
    staticItems: shelf,
    fetchImpl: async () => ({
      ok: true,
      status: 200,
      json: async () => ({
        flowers,
        items: shelf,
        stockDate: "2026-10-23T08:00:00.000Z",
        cig,
      }),
    }),
  });
  resetTvStockCache();
  return dataset;
}

test("tvOn shows the cigarettes card and items; tv off hides the card and real cigarettes", () => {
  const onCards = tv2CardsForFlag(true);
  const cigCard = onCards.find((card) => card.id === "CIGARETTES");
  assert.ok(cigCard);
  assert.equal(onCards.length, 6);
  assert.equal(cigCard.filter(carton), true);
  assert.equal(cigCard.filter(backwoods), true);
  assert.equal(cigCard.filter(pouch), true);

  const offCards = tv2CardsForFlag(false);
  assert.equal(offCards.some((card) => card.id === "CIGARETTES"), false);
  const prerolls = offCards.find((card) => card.id === "PREROLLS_ADDONS");
  assert.ok(prerolls);
  assert.equal(prerolls.filter(backwoods), true);
  assert.equal(prerolls.filter(paper), true);
  assert.equal(prerolls.filter(carton), false);
  assert.deepEqual(tvAddonItems([carton, backwoods, paper], false).map((item) => item.slug), [backwoods.slug, paper.slug]);
  assert.deepEqual(tvAddonItems([carton, backwoods, paper], true).map((item) => item.slug), [paper.slug]);

  const hidden = reconcileSurfaceItems([carton, ...kept], [carton, ...kept], false);
  assert.deepEqual(hidden.map((item) => item.slug), kept.map((item) => item.slug));
  const shown = reconcileSurfaceItems([paper], [carton, ...kept], true);
  assert.equal(shown.some((item) => item.slug === carton.slug), true);
  assert.equal(shown.filter((item) => isRealCigaretteItem(item)).length, 1);
});

test("web stays hidden when tvOn is true, including the static website gate", async () => {
  const items = [carton, ...kept];
  assert.equal(decideCigaretteSurface({ cig: { on: true, webOn: false, tvOn: true }, items, surface: "web" }).show, false);
  assert.equal(decideCigaretteSurface({ cig: { on: true, webOn: false, tvOn: true }, items, surface: "tv" }).show, true);
  assert.equal(SHOW_CIGARETTES, false);
  assert.equal(filterCigaretteItems(items).some((item) => isRealCigaretteItem(item)), false);
  assert.equal(filterCigaretteItems(items).some((item) => item.slug === backwoods.slug), true);

  const layout = readFileSync(new URL("../app/layout.tsx", import.meta.url), "utf8");
  const route = readFileSync(new URL("../app/api/tv-data/route.ts", import.meta.url), "utf8");
  const tv2 = readFileSync(new URL("../app/tv2/page.tsx", import.meta.url), "utf8");
  const tv = readFileSync(new URL("../app/tv/page.tsx", import.meta.url), "utf8");
  assert.match(layout, /web: SHOW_CIGARETTES \? fromFeed\.web : false/);
  assert.match(layout, /tv: fromFeed\.tv/);
  assert.match(route, /snapshotHeaders/);
  assert.match(route, /reconcileSurfaceItems/);
  assert.match(tv2, /readCigaretteTvHeader/);
  assert.match(tv, /readCigaretteTvHeader/);
  assert.doesNotMatch(tv2, /SHOW_CIGARETTES/);
  assert.doesNotMatch(tv, /SHOW_CIGARETTES/);
  for (const file of ["app/sitemap.ts", "app/components/Footer.tsx", "app/components/Navbar.tsx", "app/faq/page.tsx"]) {
    const source = readFileSync(new URL(`../${file}`, import.meta.url), "utf8");
    assert.match(source, /SHOW_CIGARETTES|filterCigaretteEntries|cigaretteSafeContent/);
  }

  const feedSource = readFileSync(new URL("../app/lib/cigaretteFeed.ts", import.meta.url), "utf8");
  assert.doesNotMatch(feedSource, /!SHOW_CIGARETTES|SHOW_CIGARETTES\s*\|\|/);
  assert.match(feedSource, /getCigaretteDataset/);

  const live = await feedFor({ on: true, webOn: false, tvOn: true });
  const tvOn = decideCigaretteSurface({ cig: live.cig, items: live.items, surface: "tv" });
  const webOff = decideCigaretteSurface({ cig: live.cig, items: live.items, surface: "web" });
  assert.equal(live.source, "live");
  assert.equal(tvOn.show, true);
  assert.equal(webOff.show, false);
  assert.equal(live.items.some((item: { category?: string; name?: string; slug?: string }) => isRealCigaretteItem(item)), true);
  const headers = cigarettePublicHeaders({ web: webOff.show, tv: tvOn.show, wording: tvOn.wording });
  assert.equal(headers["x-tv-data-cig-tv"], "1");
  assert.equal(headers["x-tv-data-cig-web"], "0");
  const visible = reconcileSurfaceItems(live.items, live.items, tvOn.show);
  assert.equal(visible.some((item) => isRealCigaretteItem(item)), true);

  const closed = await feedFor({ on: true, webOn: false, tvOn: false });
  const tvOff = decideCigaretteSurface({ cig: closed.cig, items: closed.items, surface: "tv" });
  const webStillOff = decideCigaretteSurface({ cig: closed.cig, items: closed.items, surface: "web" });
  assert.equal(tvOff.show, false);
  assert.equal(webStillOff.show, false);
  const hiddenItems = reconcileSurfaceItems(closed.items, closed.items, tvOff.show);
  assert.equal(hiddenItems.some((item) => isRealCigaretteItem(item)), false);
  assert.equal(hiddenItems.some((item) => /backwoods/i.test(item.name || "")), true);
  assert.equal(hiddenItems.some((item) => /pouch|velo/i.test(item.name || "")), true);
});
