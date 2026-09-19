import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const home = readFileSync("app/page.tsx", "utf8");
const visit = readFileSync("app/visit/page.tsx", "utf8");
const storeNap = readFileSync("app/lib/storeNap.ts", "utf8");
const footer = readFileSync("app/components/Footer.tsx", "utf8");
const sitemap = readFileSync("app/sitemap.ts", "utf8");
const navbar = readFileSync("app/components/Navbar.tsx", "utf8");
const geo = readFileSync("app/lib/weedDiscovery.ts", "utf8");
const landing = readFileSync("app/components/GBPLandingPage.tsx", "utf8");
const hours24 = readFileSync("app/24-hour-islington-steeles-dispensary/page.tsx", "utf8");
const tierPage = readFileSync("app/[tier]/page.tsx", "utf8");
const tiers = readFileSync("app/lib/tierSeoContent.ts", "utf8");
const mesh = readFileSync("app/lib/seoMesh.ts", "utf8");
const redirects = readFileSync("next.config.ts", "utf8");
const meshSrc = [home, visit, geo, landing, hours24, footer, navbar, sitemap, storeNap, mesh].join("\n");

test("homepage stays NAP hours map hub and meshes to visit geo 24h tiers", () => {
  assert.match(home, /Visit hub — unit 1, North York/);
  assert.match(home, /NAP and hours stay on this homepage/);
  assert.match(home, /href=\{MESH\.visit\}/);
  assert.match(home, /href=\{MESH\.hours24\}/);
  assert.match(home, /href=\{MESH\.geo\}/);
  assert.match(home, /href=\{MESH\.exotic\}/);
  assert.match(home, /href=\{MESH\.budget\}/);
  assert.match(home, /Open 24 Hours/);
  assert.doesNotMatch(home, /Google Business Profile Website|gbp website/i);
});

test("/visit keeps supporting hub role plus schema matching visible unit-1 copy", () => {
  assert.match(visit, /canonical: storeNap\.origin/);
  assert.match(visit, /visitJsonLd\(\)/);
  assert.match(storeNap, /export function visitJsonLd/);
  assert.match(storeNap, /\/visit#webpage/);
  assert.match(storeNap, /streetAddress: storeNap\.streetAddress/);
  assert.match(storeNap, /telephone: storeNap\.phoneIntl/);
  assert.match(visit, /VISIT_FAQS/);
  assert.match(visit, /MESH\.hours24/);
  assert.match(visit, /MESH\.geo/);
  assert.match(visit, /3005 Islington Ave unit 1/);
});

test("dedicated 24h LP is area-true Islington-Steeles / North York, not Toronto city spam", () => {
  assert.match(hours24, /<h1>Open now: 24-hour dispensary near Islington &amp; Steeles — unit 1<\/h1>/);
  assert.match(hours24, /24 Hour Dispensary Open Now Near Islington & Steeles/);
  assert.match(hours24, /3005 Islington Ave unit 1/);
  assert.match(hours24, /Humber Summit/);
  assert.match(hours24, /Open 24 Hours/);
  assert.match(hours24, /\+1 \(289\) 217-2773|storeNap\.phoneDisplay/);
  assert.match(hours24, /canonical: PAGE_URL/);
  assert.match(hours24, /FAQPage/);
  assert.match(hours24, /not a downtown Toronto/);
  assert.match(hours24, /MESH\.home/);
  assert.match(hours24, /MESH\.visit/);
  assert.match(hours24, /MESH\.geo/);
  assert.match(mesh, /TWENTY_FOUR_FAQS/);
  assert.match(sitemap, /\/24-hour-islington-steeles-dispensary/);
  assert.match(footer, /24-hour-islington-steeles-dispensary/);
  assert.doesNotMatch(hours24, /Ottawa|Gatineau|ByWard|Dalhousie/i);
});

test("five flower tiers have unique H1, title, and FAQ owners plus mesh", () => {
  const h1s = [...tiers.matchAll(/h1: "([^"]+)"/g)].map((match) => match[1]);
  const titles = [...tiers.matchAll(/seoTitle: "([^"]+)"/g)].map((match) => match[1]);
  const faqQs = [...tiers.matchAll(/q: "([^"]+)"/g)].map((match) => match[1]);
  assert.equal(h1s.length, 5);
  assert.equal(titles.length, 5);
  assert.equal(new Set(h1s).size, 5);
  assert.equal(new Set(titles).size, 5);
  assert.equal(new Set(faqQs).size, faqQs.length);
  assert.equal(faqQs.length >= 15, true);
  assert.match(tiers, /Exotic cannabis flower at unit 1, Islington & Steeles/);
  assert.match(tiers, /Premium flower for Humber Summit regulars/);
  assert.match(tiers, /AAA\+ weed at Planet X — mid-shelf on Islington Ave/);
  assert.match(tiers, /AA flower near Steeles West — \$4\/g at unit 1/);
  assert.match(tiers, /Budget cannabis flower from \$3\/g at Islington & Steeles/);
  assert.match(tierPage, /SeoMesh/);
  assert.match(tierPage, /FAQPage/);
});

test("geo owner meshes all five tiers plus visit, homepage, and 24h", () => {
  for (const href of [
    "/exotic-weed",
    "/premium-weed",
    "/aaa-weed",
    "/aa-weed",
    "/budget-weed",
    "/visit",
    "/24-hour-islington-steeles-dispensary",
  ]) {
    assert.match(geo, new RegExp(href.replaceAll("/", "\\/")));
  }
  assert.match(landing, /Homepage visit hub/);
  assert.match(landing, /24-hour-islington-steeles-dispensary/);
  assert.match(navbar, /24-hour-islington-steeles-dispensary/);
});

test("short tier routes stay 301 to live -weed owners; no new smoke SEO LPs", () => {
  for (const source of ["/exotic", "/premium", "/aaa", "/aa", "/budget"]) {
    assert.match(redirects, new RegExp(`source: "${source}"`));
  }
  assert.match(mesh, /exotic: "\/exotic-weed"/);
  assert.doesNotMatch(sitemap, /\/native-cigarettes-north-york/);
  assert.doesNotMatch(sitemap, /\/nicotine-pouches-north-york/);
});

test("public Wave 1 copy stays standalone Planet X with unit-1 NAP", () => {
  assert.match(meshSrc, /3005 Islington Ave unit 1|3005 Islington Ave Unit 1/);
  assert.doesNotMatch(meshSrc, /sister store|our other locations|fleet store|Aggressive Six|Spirit Corner|ByWard/i);
  assert.doesNotMatch(hours24, /Ottawa|Gatineau/i);
});
