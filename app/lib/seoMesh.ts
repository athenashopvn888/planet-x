/** Internal-link mesh for PLX01 Wave 1 Organic floor. Standalone brand only. */
export const MESH = {
  home: "/",
  visit: "/visit",
  geo: "/weed-dispensary-north-york/",
  hours24: "/24-hour-islington-steeles-dispensary",
  exotic: "/exotic-weed",
  premium: "/premium-weed",
  aaa: "/aaa-weed",
  aa: "/aa-weed",
  budget: "/budget-weed",
} as const;

export const TIER_MESH = [
  { key: "EXOTIC", href: MESH.exotic, label: "Exotic Weed" },
  { key: "PREMIUM", href: MESH.premium, label: "Premium Weed" },
  { key: "AAA+", href: MESH.aaa, label: "AAA+ Weed" },
  { key: "AA", href: MESH.aa, label: "AA Weed" },
  { key: "BUDGET", href: MESH.budget, label: "Budget Weed" },
] as const;

export const CORE_MESH = [
  { href: MESH.home, label: "Homepage visit hub" },
  { href: MESH.visit, label: "How to find unit 1" },
  { href: MESH.geo, label: "North York dispensary" },
  { href: MESH.hours24, label: "24-hour Islington & Steeles" },
] as const;

export const TWENTY_FOUR_FAQS: { q: string; a: string }[] = [
  {
    q: "Is The Planet X Cannabis open 24 hours at Islington & Steeles?",
    a: "Yes. The Planet X Cannabis at 3005 Islington Ave unit 1, North York is open 24 hours a day, 7 days a week. The overnight door is the same unit 1 plaza entrance on the Islington and Steeles edge of Humber Summit.",
  },
  {
    q: "Can I walk into unit 1 after midnight?",
    a: "Yes. Adults 19+ with ID can walk in after midnight, on late Steeles West runs, and between night-shift changes. No appointment. If you need one specific SKU, call +1 (289) 217-2773 before you leave — overnight stock is not listed as a live claim on this page.",
  },
  {
    q: "Do overnight hours change on weekends or holidays?",
    a: "Listed hours stay Open 24 Hours a day, 7 days a week, including weekends. This page does not invent holiday closures. Call +1 (289) 217-2773 if a holiday trip is the only reason you are heading to unit 1.",
  },
  {
    q: "How do I reach the 24-hour door on late TTC runs?",
    a: "TTC buses run Islington Avenue and Steeles Avenue West, including trips toward York University / Steeles West. After you step off, walk to 3005 Islington Ave and use the plaza entrance marked unit 1. Parking, TTC, and the last hundred metres live on the how-to-reach page; NAP stays on the homepage.",
  },
  {
    q: "What flower can I browse overnight at Planet X?",
    a: "The same five flower tiers sit on the live menu around the clock: Exotic, Premium, AAA+, AA, and Budget. Pre-rolls, edibles, vapes, concentrates, cigarettes, and accessories are on that menu too. Confirm a particular item by phone or in store.",
  },
  {
    q: "Is this a downtown Toronto 24-hour dispensary?",
    a: "No. This is the North York / Humber Summit walk-in at 3005 Islington Ave unit 1, on Islington Avenue and Steeles Avenue West — not a downtown Toronto or city-wide landing. Stay on this neighbourhood pin for overnight hours.",
  },
];
