import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const products = readFileSync("app/lib/products.ts", "utf8");
const tiers = readFileSync("app/lib/tierSeoContent.ts", "utf8");
const redirects = readFileSync("next.config.ts", "utf8");
const sitemap = readFileSync("app/sitemap.ts", "utf8");
const resources = readFileSync("app/resources/resourceData.ts", "utf8");
const navbar = readFileSync("app/components/Navbar.tsx", "utf8");

const tierSlugs = ["exotic-weed", "premium-weed", "aaa-weed", "aa-weed", "budget-weed"];

test("V2 tier owners keep live -weed slugs with unique H1s and titles", () => {
  for (const slug of tierSlugs) assert.match(products, new RegExp(`slug: "${slug}"`));
  assert.match(tiers, /Exotic cannabis flower at unit 1, Islington & Steeles/);
  assert.match(tiers, /Premium flower for Humber Summit regulars/);
  assert.match(tiers, /AAA\+ weed at Planet X — mid-shelf on Islington Ave/);
  assert.match(tiers, /AA flower near Steeles West — \$4\/g at unit 1/);
  assert.match(tiers, /Budget cannabis flower from \$3\/g at Islington & Steeles/);
  assert.match(tiers, /Exotic Flower at Islington & Steeles/);
  assert.match(tiers, /Premium Weed in Humber Summit/);
});

test("legacy tier and Weed resource routes redirect directly to V2 owners", () => {
  for (const source of ["/exotic", "/exotics", "/premium", "/aaa", "/aa", "/budget", "/resources", "/resources/menu-guide", "/resources/flower-guide", "/resources/value-guide", "/resources/islington-north-york-visit-guide"]) {
    assert.match(redirects, new RegExp(`source: "${source.replaceAll("/", "\\/")}"`));
  }
  assert.match(sitemap, /weed-resources/);
  assert.match(resources, /slug: "weed-flower-guide"/);
  assert.match(resources, /slug: "cannabis-menu-guide"/);
  assert.match(resources, /slug: "weed-value-guide"/);
  assert.match(resources, /slug: "islington-north-york-weed-visit-guide"/);
});

test("Nicotine Vape and THC Vape remain distinct while delivery stays unmodified", () => {
  assert.match(products, /name: "Nicotine Vape"[\s\S]*slug: "vapes"/);
  assert.match(products, /name: "THC Vape"[\s\S]*slug: "vape-disposables"/);
  assert.match(navbar, /href: "\/items\/vapes", label: "Nicotine Vape"/);
  assert.doesNotMatch(redirects, /source: "\/delivery"/);
});
