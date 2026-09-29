import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";
import { renderedDocumentTitle, storeClaimsOpen24Hours } from "../app/lib/storeNap.ts";

const read = (file) => readFileSync(new URL(`../${file}`, import.meta.url), "utf8");

const tierCopy = read("app/lib/tierSeoContent.ts");
const tierPage = read("app/[tier]/page.tsx");
const home = read("app/page.tsx");
const layout = read("app/layout.tsx");
const visit = read("app/visit/page.tsx");
const city = read("app/weed-dispensary-toronto/page.tsx");
const robots = read("app/robots.ts");
const sitemap = read("app/sitemap.ts");
const config = read("next.config.ts");
const cigs = read("app/native-cigarettes-islington-steeles/page.tsx");
const vapes = read("app/nicotine-vape-islington-steeles/page.tsx");
const hours = read("app/24-hour-islington-steeles-dispensary/page.tsx");
const nav = read("app/components/Navbar.tsx");
const ageCss = read("app/components/AgeGate.module.css");
const ageGate = read("app/components/AgeGate.tsx");
const footer = read("app/components/Footer.tsx");
const local = read("app/lib/storeNap.ts");

const CORRIDOR = /Islington|Steeles|Humber Summit/;
const WEIGHT_FAIL = /(?<![0-9.])(?:3\.5|7)\s?g\b/i;

const SISTER_SENTENCE_DENYLIST = [
  "A carton is a different sales unit from a pack — do not compare a pack price with a carton price as if they were the same item.",
  "This page does not name a locked-in brand list or invent a price.",
  "Adults 19+ show government-issued photo ID at the Queen Street door.",
  "When a listing name includes a puff count or a kit versus pod label, use that text only to tell products apart.",
  "The same Junction shop that stocks flower tiers also lists cigarettes.",
  "Brand images or names you see elsewhere on the site are previews, not a promise that a specific pack is in the drawer tonight.",
  "The numbered bay, not the arterial After you park in the Torbram-facing lot at civic 8500, walk the unit numbers until the bay marked 59.",
  "One civic address, two vape lists The nicotine shelf is a walk-up counter inside Unit 59, on the Torbram plaza face and west of the Airport Road industrial spine.",
  "Brand preview only. Selection varies by store; check the current cigarette menu before visiting.",
];

function brandCount(title) {
  return title.split(/planet x cannabis/i).length - 1;
}

function walk(dir, acc = []) {
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry);
    if (statSync(full).isDirectory()) {
      walk(full, acc);
    } else if (/\.(tsx|ts)$/.test(entry)) {
      acc.push(full);
    }
  }
  return acc;
}

test("G1 corridor tokens are in every flower tier title and H1, and in cig and vape owners", () => {
  const titles = [...tierCopy.matchAll(/seoTitle: "([^"]+)"/g)].map((match) => match[1]);
  const h1s = [...tierCopy.matchAll(/h1: "([^"]+)"/g)].map((match) => match[1]);
  assert.equal(titles.length, 5);
  assert.equal(h1s.length, 5);
  for (const title of titles) {
    assert.match(title, CORRIDOR, title);
    assert.doesNotMatch(title, /\bToronto\b/, title);
    assert.equal(brandCount(title), 1, title);
  }
  for (const h1 of h1s) {
    assert.match(h1, CORRIDOR, h1);
    assert.doesNotMatch(h1, /\bToronto\b/, h1);
  }
  assert.match(cigs, /Native Cigarettes Islington & Steeles \| Planet X Cannabis/);
  assert.match(cigs, /<h1>Native cigarettes at unit 1 on Islington &amp; Steeles<\/h1>/);
  assert.match(vapes, /Nicotine Vape Islington & Steeles \| Planet X Cannabis/);
  assert.match(vapes, /<h1>Nicotine vapes at the Humber Summit plaza on Islington &amp; Steeles<\/h1>/);
  assert.doesNotMatch(cigs, /<h1[^>]*>\s*Native [Cc]igarettes\s*</);
  assert.doesNotMatch(vapes, /<h1[^>]*>\s*Nicotine Vape\s*</);
});

test("G2 every tier route builds CollectionPage and a stocked ItemList plus FAQ", () => {
  assert.match(tierPage, /"@type": "CollectionPage"/);
  assert.match(tierPage, /"@type": "ItemList"/);
  assert.match(tierPage, /itemListElement: flowers\.map/);
  assert.match(tierPage, /numberOfItems: flowers\.length/);
  assert.match(tierPage, /"@type": "FAQPage"/);
  assert.match(tierPage, /about: \{ "@id": `\$\{storeNap\.origin\}\/#store` \}/);
  assert.match(local, /"@type": "CannabisStore"/);
  assert.doesNotMatch(tierPage, /"@type": "Offer"/);
});

test("G3 homepage hub cards follow the site's own 24-hour claim", () => {
  assert.equal(storeClaimsOpen24Hours(), true);
  assert.match(home, /className=\{styles\.hubCard\}/);
  assert.match(home, /onlyWhen24h: true/);
  assert.match(home, /storeClaimsOpen24Hours\(\)/);
  for (const token of ["MESH.geo", "MESH.hours24", "MESH.delivery", "MESH.nativeCigs", "MESH.nicotineVape", "MESH.visit"]) {
    assert.match(home, new RegExp(token.replace(".", "\\.")));
  }
  assert.match(hours, /if \(!storeClaimsOpen24Hours\(\)\) notFound\(\)/);
});

test("G4 Islington cig and vape copy does not reuse sister-store sentences", () => {
  const corpus = `${cigs}\n${vapes}\n${read("app/lib/seoMesh.ts")}`;
  let shared = 0;
  for (const sentence of SISTER_SENTENCE_DENYLIST) {
    assert.ok(sentence.length >= 60, sentence);
    if (corpus.includes(sentence)) shared += 1;
    assert.equal(corpus.includes(sentence), false, `shared sentence: ${sentence}`);
  }
  assert.ok(shared < 4);
  assert.doesNotMatch(corpus, /Queen Lansdowne|Gas Junction|PLANETS 59|Green Pentagon|Kensington Green|King Rock|Jane Finch|Ottawa|Gatineau|ByWard/i);
});

test("G5 document title guard keeps the brand to one occurrence", () => {
  assert.match(layout, /template: "%s \| Planet X Cannabis"/);
  assert.match(layout, /resolveDocumentTitle\(\)/);
  const samples = [
    "FAQ Planet X Cannabis | North York Dispensary Questions",
    "Contact Us — Planet x Cannabis | 3005 Islington Ave unit 1, North York",
    "Cannabis Flower | Planet X Cannabis",
    "Pink Joker | Premium Weed | Planet X Cannabis",
    "Native Cigarettes Islington & Steeles | Planet X Cannabis",
    "Foo | Planet X Cannabis | Planet X Cannabis",
    "Planet X Cannabis | Planet X Cannabis",
  ];
  for (const sample of samples) {
    const rendered = renderedDocumentTitle(sample);
    assert.equal(brandCount(rendered), 1, rendered);
  }
  assert.equal(
    renderedDocumentTitle("Application Review"),
    "Application Review | Planet X Cannabis",
  );
  for (const file of [
    "app/faq/page.tsx",
    "app/contact/page.tsx",
    "app/flower/[slug]/page.tsx",
    "app/item/[slug]/page.tsx",
    "app/items/[category]/page.tsx",
    "app/info/[seoPage]/page.tsx",
    "app/[tier]/page.tsx",
  ]) {
    assert.match(read(file), /resolveDocumentTitle\(/, file);
  }
});

test("G6 mobile age gate stays inside the viewport and the menu has a hamburger label", () => {
  assert.match(ageCss, /max-width:\s*100vw/);
  assert.match(ageCss, /max-height:\s*calc\(100dvh - 32px\)/);
  assert.match(ageCss, /overscroll-behavior:\s*contain/);
  assert.match(ageCss, /\.btnRow > \*/);
  assert.match(ageGate, /document\.body\.style\.overflow = "hidden"/);
  assert.match(nav, /aria-label=\{menuOpen \? "Close menu" : "Open menu"\}/);
  assert.match(nav, /aria-controls="mobile-store-menu"/);
  assert.match(nav, /d="M4 6h16M4 12h16M4 18h16"/);
  assert.match(nav, /aria-label="Site menu"/);
});

test("G7 flower copy does not use 3.5g or 7g", () => {
  const root = fileURLToPath(new URL("../app", import.meta.url));
  const files = walk(root);
  assert.ok(files.length > 20);
  for (const file of files) {
    if (/flowers\.json|items\.json|delivery-menu\.json/.test(file)) continue;
    const source = readFileSync(file, "utf8");
    assert.equal(WEIGHT_FAIL.test(source), false, file);
  }
});

test("G8 apex redirects to www and visit canonical plus NAP stay on the current hours", () => {
  assert.match(config, /type: "host", value: "theplanetx\.ca"/);
  assert.match(config, /destination: "https:\/\/www\.theplanetx\.ca\/:path\*"/);
  assert.match(layout, /canonical: storeNap\.origin/);
  assert.match(visit, /canonical: `\$\{storeNap\.origin\}\/visit`/);
  assert.match(visit, /parking/i);
  assert.match(visit, /TTC|transit/i);
  assert.match(footer, /\+1 \(289\) 217-2773/);
  assert.match(footer, /3005 Islington Ave unit 1/);
  assert.match(footer, /Open 24 Hours/);
  assert.match(local, /streetAddress: "3005 Islington Ave unit 1"/);
  assert.match(local, /opens: "00:00"/);
  assert.match(local, /closes: "23:59"/);
  assert.equal(storeClaimsOpen24Hours(), true);
});

test("G9 generic Toronto dispensary URL is noindex with a canonical away from itself", () => {
  assert.match(city, /index:\s*false/);
  assert.match(city, /follow:\s*true/);
  assert.match(city, /canonical: `\$\{storeNap\.origin\}\$\{MESH\.geo\}`/);
  assert.doesNotMatch(city, /weed-dispensary-toronto/);
  assert.doesNotMatch(sitemap, /\/weed-dispensary-toronto/);
  assert.match(robots, /allow: "\/"/);
  assert.match(robots, /disallow: \["\/api\/", "\/staff-photo", "\/staff-photo\/"\]/);
  assert.match(robots, /sitemap: "https:\/\/www\.theplanetx\.ca\/sitemap\.xml"/);
  assert.match(sitemap, /theplanetx\.ca/);
});

test("public pages do not use sister-store, fleet, Athena, or invented Nation claims", () => {
  const publicFiles = [
    "app/page.tsx",
    "app/visit/page.tsx",
    "app/components/Footer.tsx",
    "app/components/Navbar.tsx",
    "app/careers/budtender/page.tsx",
    "app/native-cigarettes-islington-steeles/page.tsx",
    "app/nicotine-vape-islington-steeles/page.tsx",
    "app/weed-dispensary-north-york/page.tsx",
    "app/weed-dispensary-toronto/page.tsx",
    "app/lib/storeNap.ts",
    "app/lib/tierSeoContent.ts",
    "app/lib/seoPages.ts",
    "app/lib/seoMesh.ts",
  ];
  const banned = /Athena|sister store|our other locations|fleet of stores|our fleet|Queen Lansdowne|Gas Junction|Green Pentagon|Kensington Green|King Rock|Ottawa|Gatineau|ByWard|Jane Finch|reserve|First Nation|healing ceremony/i;
  for (const file of publicFiles) {
    assert.doesNotMatch(read(file), banned, file);
  }
});
