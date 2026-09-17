import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const layout = readFileSync("app/layout.tsx", "utf8");
const storeNap = readFileSync("app/lib/storeNap.ts", "utf8");
const home = readFileSync("app/page.tsx", "utf8");
const visit = readFileSync("app/visit/page.tsx", "utf8");
const city = readFileSync("app/weed-dispensary-toronto/page.tsx", "utf8");
const delivery = readFileSync("app/delivery/DeliveryContent.tsx", "utf8");
const deliveryPage = readFileSync("app/delivery/page.tsx", "utf8");
const footer = readFileSync("app/components/Footer.tsx", "utf8");
const sitemap = readFileSync("app/sitemap.ts", "utf8");
const northYork = readFileSync("app/lib/weedDiscovery.ts", "utf8");
const coverage = readFileSync("app/components/DeliveryCoverage.tsx", "utf8");

const publicHtml = [layout, storeNap, home, visit, city, delivery, footer, northYork].join("\n");

test("homepage schema is CannabisStore + FAQPage with FMD phone and live image", () => {
  assert.match(storeNap, /"@type": "CannabisStore"/);
  assert.match(storeNap, /"@type": "FAQPage"/);
  assert.match(storeNap, /telephone: storeNap\.phoneIntl|"\+12892172773"/);
  assert.match(storeNap, /phoneIntl: "\+12892172773"/);
  assert.match(storeNap, /3005 Islington Ave unit 1/);
  assert.match(storeNap, /banners\/welcome_banner\.webp/);
  assert.doesNotMatch(layout, /7Clmh\.jpg|46Oi5\.jpg|wp-content\/uploads/);
  assert.doesNotMatch(storeNap, /7Clmh\.jpg|46Oi5\.jpg/);
  assert.match(layout, /canonical: storeNap\.origin/);
  assert.match(layout, /24 Hour North York Dispensary/);
});

test("/visit is supporting how-to-reach with NAP, transit, parking, homepage canonical", () => {
  assert.match(visit, /canonical: storeNap\.origin/);
  assert.match(visit, /openGraph:[\s\S]*url: storeNap\.origin/);
  assert.match(visit, /3005 Islington Ave unit 1/);
  assert.match(visit, /\+1 \(289\) 217-2773|storeNap\.phoneDisplay/);
  assert.match(visit, /TTC/);
  assert.match(visit, /parking/i);
  assert.match(visit, /unit 1/i);
  assert.match(visit, /Humber Summit/);
  assert.match(visit, /homepage remains the visit hub|Homepage remains the visit hub|homepage visit hub/i);
  assert.match(sitemap, /\/visit/);
  assert.match(footer, /href="\/visit"/);
});

test("city Toronto landing is noindexed and canonicalized to homepage", () => {
  assert.match(city, /index: false/);
  assert.match(city, /canonical: storeNap\.origin/);
  assert.match(city, /not a Toronto city/i);
});

test("North York corridor and delivery stay neighbourhood-scoped", () => {
  assert.match(northYork, /Humber Summit/);
  assert.match(northYork, /href: "\/visit"/);
  assert.match(deliveryPage, /North York Delivery Menu/);
  assert.match(delivery, /\+1 \(289\) 217-2773/);
  assert.doesNotMatch(delivery, /\(226\) 545-3005/);
  assert.match(coverage, /Humber Summit/);
  assert.doesNotMatch(coverage, /Brampton|Mississauga|Vaughan/);
});

test("public copy stays standalone Planet X with existing 24h hours", () => {
  assert.match(home, /Open 24 Hours/);
  assert.match(storeNap, /opens: "00:00"/);
  assert.doesNotMatch(publicHtml, /Pleasant Cannabis|Native Medicine Garden|Main Kingston|Fogtown|Athena|sister store|our other locations/i);
});
