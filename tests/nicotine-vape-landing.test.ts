import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const page = readFileSync(new URL("../app/nicotine-vape-islington-steeles/page.tsx", import.meta.url), "utf8");
const slugs = ["envi-dripn-5-28k-puffs","geek-promax-5-30k-puffs","geek-universe-25k-puffs","ovns-10000-5-10k-puffs","ovns-disposable-5-8ml-many-flavors","ovns-pioneer-5-22k-puffs"];

test("Planet X nicotine page uses six live-checked products and excludes GOOBER", () => {
  for (const slug of slugs) {
    assert.match(page, new RegExp(slug));
  }
  assert.match(page, /href=\{MESH\.vapesMenu\}/);
  assert.match(page, /id="featured-vapes"/);
  assert.match(page, /Adults 19\+\. Nicotine is addictive\./);
  assert.equal(/goober/i.test(page), false);
  assert.match(page, /\/items\/vape-disposables/);
});
