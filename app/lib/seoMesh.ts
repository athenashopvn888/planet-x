/** Internal-link mesh for PLX01 Wave 1 Organic floor. Standalone brand only. */
export const MESH = {
  home: "/",
  visit: "/visit",
  geo: "/weed-dispensary-north-york/",
  hours24: "/24-hour-islington-steeles-dispensary",
  delivery: "/cannabis-delivery-islington-steeles",
  nativeCigs: "/info/native-cigarettes-islington-steeles",
  nicotineVape: "/info/nicotine-vapes-islington-steeles",
  vapesMenu: "/items/vapes",
  cigsMenu: "/items/cigarettes",
  deliveryMenu: "/delivery",
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

export const VERTICAL_MESH = [
  { href: MESH.delivery, label: "Cannabis delivery Islington & Steeles" },
  { href: MESH.nativeCigs, label: "Native cigarettes unit 1" },
  { href: MESH.nicotineVape, label: "Nicotine vape Islington & Steeles" },
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
  {
    q: "Is Planet X a dispensary open now near me in Humber Summit?",
    a: "If you are on Islington Avenue, Steeles Avenue West, or in Humber Summit and searching open now / near me, unit 1 is the 24-hour walk-in at 3005 Islington Ave. This is a corridor door, not a Toronto city-wide open-now page. NAP and the map stay on the homepage.",
  },
  {
    q: "Can I walk in now or should I request cannabis delivery instead?",
    a: "Adults 19+ can walk in any hour the site lists: Open 24 Hours. Corridor delivery from this same North York store is a separate path — confirm your street on the Islington & Steeles delivery page before you wait on a drop. Overnight stock is still confirmed by phone or in store.",
  },
  {
    q: "Is there a 24 hour dispensary near me on Steeles West?",
    a: "The Planet X Cannabis at 3005 Islington Ave unit 1 is the 24-hour door on the Islington and Steeles West edge of Humber Summit, North York. Hours listed on this site are Open 24 Hours a day, 7 days a week. This is not a downtown Toronto 24-hour page.",
  },
];

export const DELIVERY_FAQS: { q: string; a: string }[] = [
  {
    q: "Does The Planet X Cannabis deliver near Islington and Steeles?",
    a: "Yes. Delivery is coordinated from 3005 Islington Ave unit 1 when a driver can take the order. Plan around Islington Avenue, Steeles Avenue West, Humber Summit, and York University area streets — not a city-wide Toronto drop.",
  },
  {
    q: "What is the delivery minimum from unit 1?",
    a: "The live delivery menu lists a $60 product minimum. The dispatcher confirms the street, timing, and that minimum before anything leaves the North York store.",
  },
  {
    q: "How do I place a cannabis delivery order from this corridor?",
    a: "Browse the North York delivery menu, note the product names and weights, then use LIVE ORDER / Web Chat so the Planet X dispatcher can confirm availability. New customers complete the private selfie-with-ID step in chat. Adults 19+ only.",
  },
  {
    q: "Is this weed delivery across all of Toronto?",
    a: "No. This page only covers the Islington–Steeles / Humber Summit / North York corridor from unit 1. If your address sits outside that area, walk in instead — the store is Open 24 Hours.",
  },
  {
    q: "What if I would rather pick up at the 24-hour door?",
    a: "Walk in at 3005 Islington Ave unit 1. Overnight / open-now intent lives on the 24-hour Islington & Steeles page. How to find the plaza entrance lives on /visit. NAP stays on the homepage.",
  },
];

export const NATIVE_CIG_FAQS: { q: string; a: string }[] = [
  {
    q: "Does Planet X at Islington & Steeles sell cigarettes?",
    a: "Yes. Adults 19+ can browse the cigarette category at 3005 Islington Ave unit 1. This neighbourhood page is the Islington & Steeles guide; the live cigarette menu is the place to check current brands. Confirm prices and pack sizes in store.",
  },
  {
    q: "Are the brand cards on this page a live inventory list?",
    a: "No. The preview cards are brand guidance only. Selection varies by store and by day. Open the cigarette menu or ask at unit 1 before a special trip.",
  },
  {
    q: "Is this a medical or ceremonial page?",
    a: "No. This is an adult 19+ retail cigarette category page for the North York walk-in. It does not make health, ceremonial, or cultural claims.",
  },
  {
    q: "Can I buy cigarettes after midnight at unit 1?",
    a: "The store is Open 24 Hours. Cigarette availability overnight still has to be confirmed in store or by calling +1 (289) 217-2773. The 24-hour page owns open-now hours; this page owns the cigarette category for the corridor.",
  },
];

export const NICOTINE_VAPE_FAQS: { q: string; a: string }[] = [
  {
    q: "Where should I check Planet X Cannabis’s current nicotine selection?",
    a: "Browse the relevant menu category for current product information.",
  },
  {
    q: "Does every featured item use the same format?",
    a: "No format should be assumed. One featured page explicitly identifies an OVNS disposable. Read each current product page for its supported format and details.",
  },
  {
    q: "Does this page include cannabis vapes?",
    a: "No. It covers six nicotine products from the VAPE PENS category for adults 19+. THC and cannabis vape products are excluded.",
  },
  {
    q: "Is this a city-wide Toronto nicotine vape shop page?",
    a: "No. This is the Islington Avenue, Steeles Avenue West, and Humber Summit neighbourhood guide for the North York store at 3005 Islington Ave unit 1. The live nicotine category stays at /items/vapes.",
  },
  {
    q: "Who can buy nicotine vapes at unit 1?",
    a: "Adults 19+ with valid ID. Nicotine is addictive. This page does not make health or cessation claims.",
  },
];
