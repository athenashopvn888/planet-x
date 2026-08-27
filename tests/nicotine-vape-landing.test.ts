import assert from "node:assert/strict";
import test from "node:test";
import { SEO_PAGES } from "../app/lib/seoPages.ts";

const page = SEO_PAGES.find((entry) => entry.slug === "nicotine-vapes-islington-steeles");
const slugs = ["envi-dripn-5-28k-puffs","geek-promax-5-30k-puffs","geek-universe-25k-puffs","ovns-10000-5-10k-puffs","ovns-disposable-5-8ml-many-flavors","ovns-pioneer-5-22k-puffs"];

test("Planet X nicotine page uses six live-checked products and excludes GOOBER", () => {
  assert.ok(page?.heroPreview);
  assert.deepEqual(page.heroPreview.products.map((product) => product.sourceSlug), slugs);
  assert.equal(page.heroPreview.menuHref, "/items/vapes");
  assert.equal(page.heroPreview.secondaryHref, "#featured-vapes");
  assert.equal(page.heroPreview.warning, "Adults 19+. Nicotine is addictive.");
  assert.equal(page.heroPreview.products.some((product) => /goober/i.test(product.name)), false);
  assert.match(page.sections[2].body, /\/items\/vape-disposables/);
});
