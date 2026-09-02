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

test("V2 tier owners use Weed names, titles, H1s and canonical slugs", () => {
  for (const slug of tierSlugs) assert.match(products, new RegExp(`slug: "${slug}"`));
  for (const label of ["Exotic", "Premium", "AAA\\+", "AA", "Budget"]) {
    assert.match(tiers, new RegExp(`${label} Weed & Cannabis Flower North York`));
    assert.match(tiers, new RegExp(`${label} Weed & Cannabis Flower in North York`));
  }
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
