import type { Nap, ResolvedBanner, ResolvedPage } from "./types.ts";

/**
 * The only store-specific fleet file. Other stores replace this module
 * and leave the rest of app/lib/fleet and app/components/fleet as-is.
 */
export const FLEET_STORE_CODE = "PLX01";
export const FLEET_STORE_NAME = "The Planet X Cannabis";
export const FLEET_AREA = "North York";
export const FLEET_DOMAIN = "www.theplanetx.ca";
export const FLEET_DOMAINS = ["www.theplanetx.ca", "theplanetx.ca"] as const;
export const FLEET_ORIGIN = "https://www.theplanetx.ca";

/** Public blob origin. Objects live at /{storeCode}/manifest.json and /{storeCode}/articles/. */
export const FLEET_BLOB_ORIGIN = "https://dhaah0upvlpukv56.public.blob.vercel-storage.com";

export const FLEET_COLORS = {
  banner: "#111827",
  bannerText: "#ffffff",
} as const;

/**
 * Article text containing any of these tokens is dropped.
 * The word blocks dispatch-vendor copy. The store's own public line is not listed.
 */
export const FLEET_BLOCKED_PHONES: readonly string[] = ["telnyx"];

export const FLEET_ARTICLES_PATH = "/articles";

/** Page and spot names for the six TV2 category cards. Spot is the card name. */
export const TV2_PAGE = "TV2";
export const TV2_CARDS = [
  "PREROLLS_ADDONS",
  "VAPES",
  "EDIBLES",
  "CONCENTRATES",
  "CIGARETTES",
  "MAGIC",
] as const;

export const TV_PAGE = "TV";
export const TV_FULLSCREEN_SPOTS = [
  "Fullscreen promo 1",
  "Fullscreen promo 2",
  "Fullscreen promo 3",
] as const;

/** Fort York Cannabis takeover defaults: 5s on screen, once a minute, 5s first preview, 650ms slide. */
export const TV_PROMO_SHOW_SECONDS = 5;
export const TV_PROMO_EVERY_MINUTES = 1;
export const TV_PROMO_INITIAL_DELAY_MS = 5_000;
export const TV_PROMO_SLIDE_MS = 650;

export function defaultManifestUrl(storeCode = FLEET_STORE_CODE): string {
  return `${FLEET_BLOB_ORIGIN}/${storeCode}/manifest.json`;
}

export function articlesIndexUrl(storeCode = FLEET_STORE_CODE): string {
  return `${FLEET_BLOB_ORIGIN}/${storeCode}/articles/index.json`;
}

export function articleBodyUrl(slug: string, storeCode = FLEET_STORE_CODE): string {
  return `${FLEET_BLOB_ORIGIN}/${storeCode}/articles/${encodeURIComponent(slug)}.json`;
}

export const CODED_NAP: Nap = {
  name: "The Planet X Cannabis",
  street: "3005 Islington Ave unit 1",
  city: "North York",
  province: "ON",
  postalCode: "M9L 2K9",
  cityLine: "North York, ON M9L 2K9",
  area: "North York",
  intersection: "Islington Ave & Steeles Ave W",
  areaLine: "Islington Ave & Steeles Ave W, North York",
  phoneDisplay: "+1 (289) 217-2773",
  phoneTel: "+12892172773",
  hours: "Open 24 Hours",
  mapsSearchUrl: "https://www.google.com/maps?cid=1981746911459908853",
  mapsEmbedUrl: "https://maps.google.com/maps?q=3005+Islington+Ave+unit+1,+North+York,+ON+M9L+2K9&z=16&output=embed",
  lat: "43.7596082",
  lng: "-79.5708883",
  schemaName: "The Planet X Cannabis Dispensary Weed Delivery",
  website: "https://www.theplanetx.ca",
};

export const CODED_BANNERS: ResolvedBanner[] = [
  {
    id: "weed",
    page: "Home",
    spot: "Top banner",
    href: "/exotic-weed",
    categoryName: "Exotic Weed",
    hidden: false,
    render: "image",
    image: "/banners/core-top-weed-tier.webp",
    codedImage: "/banners/core-top-weed-tier.webp",
    alt: `${FLEET_STORE_NAME} in ${FLEET_AREA} — Exotic, Premium and AAA+ top weed tiers`,
    title: `${FLEET_STORE_NAME} top weed tiers — Exotic, Premium and AAA+`,
    textBar: "Top 3 tiers only (Exotic, Premium, AAA+): Buy 2g Get 1g FREE · Buy 3g Get 3g FREE (6g)",
    caption: "Top 3 tiers only (Exotic, Premium, AAA+): Buy 2g Get 1g FREE · Buy 3g Get 3g FREE (6g)",
  },
  {
    id: "vapes",
    page: "Home",
    spot: "Promo banner 2",
    href: "/items/vapes",
    categoryName: "Nicotine Vapes",
    hidden: false,
    render: "image",
    image: "/banners/core-vapes-nicotine-thc.webp",
    codedImage: "/banners/core-vapes-nicotine-thc.webp",
    alt: `${FLEET_STORE_NAME} in ${FLEET_AREA} — nicotine vapes and THC vapes`,
    title: `${FLEET_STORE_NAME} nicotine vapes and THC vapes`,
    textBar: "Nicotine + THC vapes",
    caption: "Nicotine + THC vapes",
  },
  {
    id: "cigarettes",
    page: "Home",
    spot: "Promo banner 3",
    href: "/items/cigarettes",
    categoryName: "Cigarettes",
    hidden: false,
    render: "image",
    image: "/banners/native-cigarette-offer-20260822.webp",
    codedImage: "/banners/native-cigarette-offer-20260822.webp",
    alt: `${FLEET_STORE_NAME} in ${FLEET_AREA} — 2 packs for $5 mix and match and $25 carton cigarette offer`,
    title: `${FLEET_STORE_NAME} cigarette offer — 2 packs $5 mix and match, $25 carton`,
    textBar: "2 PACKS $5 / $25 CARTON",
    caption: "2 PACKS $5 / $25 CARTON",
  },
  {
    id: "premium-cigarettes",
    page: "Home",
    spot: "Promo banner 4",
    href: "/items/cigarettes",
    categoryName: "Premium Cigarettes",
    hidden: false,
    render: "image",
    image: "/banners/core-premium-bb-marlboro-belmont.webp",
    codedImage: "/banners/core-premium-bb-marlboro-belmont.webp",
    alt: `${FLEET_STORE_NAME} in ${FLEET_AREA} — BB Full Flavor and Lights, Marlboro and Belmont premium cigarettes`,
    title: `${FLEET_STORE_NAME} premium cigarettes — BB, Marlboro and Belmont`,
    textBar: "BB Full Flavor + Lights 2 packs $5 · Marlboro & Belmont $10/pack",
    caption: "BB Full Flavor + Lights 2 packs $5 · Marlboro & Belmont $10/pack",
  },
];

export const CODED_PAGES: Record<string, ResolvedPage> = {
  Home: {
    description: "Open 24 hours, 7 days a week. Visit The Planet X Cannabis at 3005 Islington Ave unit 1 in North York, near Islington and Steeles. Adults 19+.",
    metaTitle: "",
    metaDescription: "Open 24 hours, 7 days a week. Visit The Planet X Cannabis at 3005 Islington Ave unit 1 in North York, near Islington and Steeles. Adults 19+.",
  },
  Contact: {
    description: "Visit Planet x Cannabis at 3005 Islington Ave unit 1, North York, ON M9L 2K9. Open 24 hours, 7 days a week. Walk-ins welcome.",
    metaTitle: "Contact Us — Planet x Cannabis | 3005 Islington Ave unit 1, North York",
    metaDescription: "Visit Planet x Cannabis at 3005 Islington Ave unit 1, North York, ON M9L 2K9. Open 24 hours, 7 days a week. Walk-ins welcome.",
  },
};
