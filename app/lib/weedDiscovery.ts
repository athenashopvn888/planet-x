import { GEO_FAQS } from "./seoMesh";

export type WeedDiscoveryLink = { label: string; description: string; href: string };
export type WeedFaq = { question: string; answer: string };

export const weedOwner = {
  storeName: "The Planet X Cannabis",
  domain: "www.theplanetx.ca",
  ownerPath: "/weed-dispensary-north-york/",
  city: "North York",
  streetAddress: "3005 Islington Ave Unit 1",
  postalCode: "M9L 2K9",
  phoneDisplay: "+1 (289) 217-2773",
  phoneIntl: "+12892172773",
  hoursLabel: "Open 24 Hours · 7 Days a Week",
  openingHours: "Mo-Su 00:00-23:59",
  seoTitle: "Weed Dispensary at Islington & Steeles, Humber Summit | Planet X",
  metaDescription:
    "Weed dispensary at 3005 Islington Ave unit 1, North York — Islington & Steeles / Humber Summit walk-in. Adults 19+. Flower tiers on site. Not a Toronto city landing.",
  h1: "Weed dispensary at unit 1 — Islington, Steeles, Humber Summit",
  introTitle: "Weed dispensary for the Islington–Steeles corridor",
  intro: [
    "The Planet X Cannabis is the walk-in weed dispensary at 3005 Islington Ave unit 1 in North York — Islington Avenue and Steeles Avenue West on the Humber Summit edge.",
    "This page owns neighbourhood weed-dispensary intent for that corridor. Adults 19+ can start with the five flower tiers, then confirm a named SKU by calling +1 (289) 217-2773. Transit, parking, and unit 1 notes live on /visit. Overnight / open-now intent lives on the 24-hour Islington & Steeles page. NAP, hours, and the map stay on the homepage. This is not a Toronto city page.",
  ],
  findTitle: "Find Your Weed at Planet X",
  discoveryLinks: [
    { label: "Exotic Flower", description: "Top-shelf Exotic collection at unit 1.", href: "/exotic-weed" },
    { label: "Premium Flower", description: "Humber Summit Premium lane — $7–$10/g.", href: "/premium-weed" },
    { label: "AAA+ Flower", description: "Mid-shelf AAA+ at 3005 Islington Ave unit 1.", href: "/aaa-weed" },
    { label: "AA Flower", description: "Steeles West daily-driver grams at $4/g.", href: "/aa-weed" },
    { label: "Budget Flower", description: "Cheapest published lane from $3/g.", href: "/budget-weed" },
    { label: "24-Hour Islington & Steeles", description: "Overnight / open-now walk-in at unit 1.", href: "/24-hour-islington-steeles-dispensary" },
    { label: "Cannabis Delivery Islington & Steeles", description: "Corridor delivery from unit 1 — not city-wide Toronto.", href: "/cannabis-delivery-islington-steeles" },
  ] satisfies WeedDiscoveryLink[],
  guides: [
    { label: "Homepage Visit Hub", description: "NAP, hours, and the map stay on the homepage.", href: "/" },
    { label: "How to Find Unit 1", description: "Plaza entrance, TTC on Islington and Steeles, parking.", href: "/visit" },
    { label: "24-Hour Islington & Steeles", description: "Overnight and open-now intent for this door.", href: "/24-hour-islington-steeles-dispensary" },
    { label: "Cannabis Delivery Islington & Steeles", description: "Neighbourhood delivery from unit 1. Confirm the street.", href: "/cannabis-delivery-islington-steeles" },
    { label: "Native Cigarettes", description: "Adult 19+ cigarette category for this corridor.", href: "/info/native-cigarettes-islington-steeles" },
    { label: "Nicotine Vape Islington & Steeles", description: "Neighbourhood nicotine guide — live category /items/vapes.", href: "/info/nicotine-vapes-islington-steeles" },
    { label: "Islington North York Visit Guide", description: "Store-specific visit information.", href: "/resources/islington-north-york-weed-visit-guide" },
    { label: "Flower Guide", description: "Learn more about cannabis flower.", href: "/resources/weed-flower-guide" },
    { label: "Value Guide", description: "Explore value-oriented shopping.", href: "/resources/weed-value-guide" },
  ] satisfies WeedDiscoveryLink[],
  faq: GEO_FAQS.map((item) => ({ question: item.q, answer: item.a })) satisfies WeedFaq[],
  home: {
    title: "Weed dispensary — Islington, Steeles, Humber Summit",
    text: "The Planet X Cannabis is the walk-in weed dispensary at 3005 Islington Ave unit 1 in Humber Summit, North York — Islington & Steeles. Adults 19+. Use this North York corridor page for neighbourhood weed intent, /visit for unit 1, transit, and parking, and the 24-hour Islington & Steeles page for overnight / open-now. NAP stays on the homepage. Not a Toronto city landing.",
    primaryLabel: "Weed dispensary at unit 1",
    secondaryLabel: "Explore the Flower Guide",
    secondaryHref: "/resources/weed-flower-guide",
  },
};
