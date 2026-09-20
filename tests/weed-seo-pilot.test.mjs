import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const landing = readFileSync("app/weed-dispensary-north-york/page.tsx", "utf8");
const discovery = readFileSync("app/lib/weedDiscovery.ts", "utf8");
const home = readFileSync("app/page.tsx", "utf8");

test("protected owner renders exactly one H1 and approved content", () => {
  assert.equal((landing.match(/<h1>/g) || []).length, 1);
  assert.match(discovery, /Weed dispensary at unit 1 — Islington, Steeles, Humber Summit/);
  assert.match(landing, /Find your weed at unit 1/);
  assert.match(landing, /Islington, Steeles, Humber Summit/);
});

test("homepage has one bounded Weed bridge", () => {
  assert.equal((home.match(/<WeedDiscoveryModule \/>/g) || []).length, 1);
});

test("unsafe implementation claims stay absent", () => {
  assert.doesNotMatch(discovery, /now in stock|sale price|free delivery/i);
  assert.doesNotMatch(discovery, /\/exotics(?:["/])/);
});
