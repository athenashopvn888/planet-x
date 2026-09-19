import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const mesh = readFileSync("app/lib/seoMesh.ts", "utf8");
const seoPages = readFileSync("app/lib/seoPages.ts", "utf8");
const delivery = readFileSync("app/cannabis-delivery-islington-steeles/page.tsx", "utf8");
const hours24 = readFileSync("app/24-hour-islington-steeles-dispensary/page.tsx", "utf8");
const home = readFileSync("app/page.tsx", "utf8");
const visit = readFileSync("app/visit/page.tsx", "utf8");
const footer = readFileSync("app/components/Footer.tsx", "utf8");
const navbar = readFileSync("app/components/Navbar.tsx", "utf8");
const sitemap = readFileSync("app/sitemap.ts", "utf8");
const geo = readFileSync("app/lib/weedDiscovery.ts", "utf8");
const info = readFileSync("app/info/[seoPage]/page.tsx", "utf8");
const items = readFileSync("app/items/[category]/page.tsx", "utf8");
const seoMeshComponent = readFileSync("app/components/SeoMesh.tsx", "utf8");

const publicSrc = [mesh, seoPages, delivery, hours24, home, visit, footer, navbar, sitemap, geo, info, items].join("\n");

test("Big Three neighbourhood slugs stay corridor-scoped, not city-wide Toronto", () => {
  assert.match(mesh, /delivery: "\/cannabis-delivery-islington-steeles"/);
  assert.match(mesh, /nativeCigs: "\/info\/native-cigarettes-islington-steeles"/);
  assert.match(mesh, /nicotineVape: "\/info\/nicotine-vapes-islington-steeles"/);
  assert.match(mesh, /vapesMenu: "\/items\/vapes"/);
  assert.match(sitemap, /\/cannabis-delivery-islington-steeles/);
  assert.doesNotMatch(delivery, /weed delivery toronto|city-wide Toronto delivery landing/i);
  assert.match(delivery, /not a city-wide Toronto delivery/);
  assert.match(delivery, /Humber Summit/);
  assert.match(delivery, /3005 Islington Ave unit 1/);
  assert.doesNotMatch(publicSrc, /\/cannabis-delivery-toronto/);
});

test("delivery LP has unique H1, title, FAQ, and meshes hub visit geo 24h Big Three tiers", () => {
  assert.match(delivery, /<h1>\s*Cannabis delivery from unit 1 — Islington, Steeles, Humber Summit\s*<\/h1>/);
  assert.match(delivery, /Cannabis Delivery Islington & Steeles \| Planet X Cannabis/);
  assert.match(delivery, /DELIVERY_FAQS/);
  assert.match(delivery, /FAQPage/);
  assert.match(delivery, /Adults 19\+/);
  assert.match(delivery, /\$60 product minimum/);
  assert.match(delivery, /MESH\.home/);
  assert.match(delivery, /MESH\.visit/);
  assert.match(delivery, /MESH\.hours24/);
  assert.match(delivery, /MESH\.nativeCigs/);
  assert.match(delivery, /MESH\.nicotineVape/);
  assert.match(delivery, /MESH\.vapesMenu/);
  assert.match(mesh, /DELIVERY_FAQS/);
});

test("native cigarette LP is strengthened with unique H1/title/FAQ and 19+ care", () => {
  assert.match(seoPages, /h1: "Native cigarettes at 3005 Islington Ave unit 1"/);
  assert.match(seoPages, /Native Cigarettes at Islington & Steeles Unit 1/);
  assert.match(seoPages, /Does Planet X at Islington & Steeles sell cigarettes\?/);
  assert.match(seoPages, /does not make health, ceremonial, or cultural claims/);
  assert.match(seoPages, /menuHref: "\/items\/cigarettes"/);
  assert.match(seoPages, /Adults 19\+/);
  assert.doesNotMatch(seoPages, /ceremonial tobacco|sacred|traditional healing/i);
});

test("nicotine neighbourhood LP still funnels to /items/vapes with unique corridor FAQ", () => {
  assert.match(seoPages, /slug: "nicotine-vapes-islington-steeles"/);
  assert.match(seoPages, /menuHref: "\/items\/vapes"/);
  assert.match(seoPages, /Is this a city-wide Toronto nicotine vape shop page\?/);
  assert.match(seoPages, /not a city-wide Toronto vape landing/);
  assert.match(seoPages, /Nicotine is addictive/);
  assert.match(items, /MESH\.nicotineVape/);
  assert.match(items, /\/items\/vapes/);
});

test("24h door-test owns open-now / near-me and meshes Big Three", () => {
  assert.match(hours24, /<h1>Open now: 24-hour dispensary near Islington &amp; Steeles — unit 1<\/h1>/);
  assert.match(hours24, /first-class open-now \/ 24h-near-me owner/);
  assert.match(hours24, /Open now \/ near me on this corridor/);
  assert.match(hours24, /MESH\.delivery/);
  assert.match(hours24, /MESH\.nativeCigs/);
  assert.match(hours24, /MESH\.nicotineVape/);
  assert.match(mesh, /dispensary open now near me in Humber Summit/);
  assert.match(hours24, /not a downtown Toronto/);
});

test("hub visit geo footer nav mesh include Big Three", () => {
  assert.match(seoMeshComponent, /VERTICAL_MESH/);
  assert.match(home, /MESH\.delivery/);
  assert.match(home, /MESH\.nativeCigs/);
  assert.match(visit, /MESH\.delivery/);
  assert.match(geo, /\/cannabis-delivery-islington-steeles/);
  assert.match(geo, /\/info\/native-cigarettes-islington-steeles/);
  assert.match(geo, /\/info\/nicotine-vapes-islington-steeles/);
  assert.match(footer, /cannabis-delivery-islington-steeles/);
  assert.match(navbar, /cannabis-delivery-islington-steeles/);
  assert.match(info, /SeoMesh/);
});

test("unique FAQ questions across 24h, delivery, native, and nicotine", () => {
  const extractQs = (block, name) => {
    const start = block.indexOf(`export const ${name}`);
    assert.notEqual(start, -1, name);
    const slice = block.slice(start, block.indexOf("];", start) + 2);
    return [...slice.matchAll(/q: "([^"]+)"/g)].map((match) => match[1]);
  };
  const all = [
    ...extractQs(mesh, "TWENTY_FOUR_FAQS"),
    ...extractQs(mesh, "DELIVERY_FAQS"),
    ...extractQs(mesh, "NATIVE_CIG_FAQS"),
    ...extractQs(mesh, "NICOTINE_VAPE_FAQS"),
  ];
  assert.equal(all.length >= 18, true);
  assert.equal(new Set(all).size, all.length);
});

test("no menu swimlane churn and no medical claims on Big Three", () => {
  assert.doesNotMatch(publicSrc, /flowers\.json|items\.json|prebuild-stock|adcInventory/);
  assert.doesNotMatch(delivery, /treat|diagnos|prescription|medical cannabis/i);
  assert.doesNotMatch(seoPages, /quit smoking|cessation device|safer than/i);
});
