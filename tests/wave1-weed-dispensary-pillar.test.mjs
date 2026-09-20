import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const geoPage = readFileSync("app/weed-dispensary-north-york/page.tsx", "utf8");
const discovery = readFileSync("app/lib/weedDiscovery.ts", "utf8");
const mesh = readFileSync("app/lib/seoMesh.ts", "utf8");
const sitemap = readFileSync("app/sitemap.ts", "utf8");
const home = readFileSync("app/page.tsx", "utf8");
const visit = readFileSync("app/visit/page.tsx", "utf8");
const hours24 = readFileSync("app/24-hour-islington-steeles-dispensary/page.tsx", "utf8");
const delivery = readFileSync("app/cannabis-delivery-islington-steeles/page.tsx", "utf8");
const city = readFileSync("app/weed-dispensary-toronto/page.tsx", "utf8");
const redirects = readFileSync("next.config.ts", "utf8");

const publicSrc = [geoPage, discovery, mesh, home, visit, hours24, delivery].join("\n");

test("fifth neighbourhood pillar keeps one corridor owner, not a new city/slug war", () => {
  assert.match(sitemap, /weed-dispensary-north-york\//);
  assert.doesNotMatch(geoPage, /weed-dispensary-islington-steeles/);
  assert.doesNotMatch(redirects, /source: "\/weed-dispensary-islington-steeles"/);
  assert.match(city, /index: false/);
  assert.match(city, /not a Toronto city/i);
});

test("geo LP has unique H1, title, FAQPage schema, and 19+ corridor copy", () => {
  assert.match(geoPage, /<h1>Weed dispensary at unit 1 — Islington, Steeles, Humber Summit<\/h1>/);
  assert.match(discovery, /Weed Dispensary at Islington & Steeles, Humber Summit \| Planet X/);
  assert.match(geoPage, /GEO_FAQS/);
  assert.match(geoPage, /FAQPage/);
  assert.match(geoPage, /Adults 19\+/);
  assert.match(geoPage, /Humber Summit/);
  assert.match(geoPage, /3005 Islington Ave unit 1/);
  assert.match(geoPage, /not a Toronto city landing/);
  assert.match(mesh, /GEO_FAQS/);
  assert.match(mesh, /Is The Planet X Cannabis a weed dispensary for North York/);
});

test("geo pillar meshes hub, visit, 24h, Big Three, and five tiers", () => {
  assert.match(geoPage, /MESH\.home/);
  assert.match(geoPage, /MESH\.visit/);
  assert.match(geoPage, /MESH\.hours24/);
  assert.match(geoPage, /MESH\.delivery/);
  assert.match(geoPage, /MESH\.nativeCigs/);
  assert.match(geoPage, /MESH\.nicotineVape/);
  assert.match(geoPage, /MESH\.vapesMenu/);
  assert.match(geoPage, /TIER_MESH/);
  assert.match(home, /MESH\.geo/);
  assert.match(visit, /MESH\.geo/);
  assert.match(hours24, /MESH\.geo/);
  assert.match(delivery, /MESH\.geo|North York geo/);
});

test("no medical, fleet, inventory-file, or Toronto city-spam language on the geo owner", () => {
  assert.doesNotMatch(publicSrc, /flowers\.json|items\.json|prebuild-stock|adcInventory/);
  assert.match(mesh, /not a medical cannabis clinic/);
  assert.doesNotMatch(geoPage, /we treat|we diagnose|fill your prescription|safer than smoking/i);
  assert.doesNotMatch(geoPage, /sister store|our other locations|fleet store|Aggressive Six/i);
  assert.doesNotMatch(geoPage, /weed dispensary toronto|city-wide Toronto dispensary landing/i);
});
