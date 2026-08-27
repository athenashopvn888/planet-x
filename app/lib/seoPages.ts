const NATIVE_HERO_DISCLOSURE = "Brand preview only. Selection varies by store; check the current cigarette menu before visiting.";
const NATIVE_HERO_PRODUCTS = [
  { name: "BB Lights", image: "/products/1001-BB-LIGHTS-CARTONS.webp" },
  { name: "BB Full", image: "/products/1003-BB-FULL-CARTON.webp" },
  { name: "Canadian Lights", image: "/products/1005-CANADIAN-LIGHTS.webp" },
  { name: "Canadian Full", image: "/products/1006-CANADIAN-FULL.webp" },
  { name: "Canadian Classics Silver", image: "/products/1015-CANADIAN-CLASSICS-SILVER.webp" },
  { name: "Canadian Menthol", image: "/products/1013-CANADIAN-MENTHOL.webp" },
] as const;

export interface SeoPageData {
  slug: string;
  title: string;
  absoluteTitle?: boolean;
  metaDescription: string;
  h1: string;
  icon: string;
  heroTagline: string;
  heroPreview?: {
    eyebrow: string;
    intro: string;
    products: readonly { name: string; image: string; sourceSlug?: string }[];
    disclosure: string;
    theme?: "cigarettes" | "nicotine";
    menuHref?: string;
    primaryLabel?: string;
    secondaryLabel?: string;
    secondaryHref?: string;
    identityStrip?: string;
    featuredHeading?: string;
    featuredIntro?: string;
    warning?: string;
  };
  banner?: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
}

export const SEO_PAGES: SeoPageData[] = [
  {
    slug: "islington-steeles-weed-dispensary",
    title:
      "Islington and Steeles Weed Dispensary Planet X Cannabis | Open 24 Hours",
    metaDescription:
      "Planet X Cannabis is a local cannabis dispensary at 3005 Islington Ave unit 1, North York, ON M9L 2K9. Browse flower tiers, edibles, vapes, concentrates, pre-rolls, cigarettes, and accessories before visiting.",
    h1: "Islington and Steeles Weed Dispensary Planet X Cannabis",
    icon: "",
    heroTagline:
      "Local cannabis near Islington Avenue and Steeles Avenue West - Open 24 Hours - Walk-in welcome",
    banner: "",
    sections: [
      {
        heading:
          "A Local Cannabis Stop Near Islington Avenue and Steeles Avenue West",
        body: "Planet X Cannabis is located at 3005 Islington Ave unit 1, North York, ON M9L 2K9. This page is built for shoppers around Islington Avenue, Steeles Avenue West, Humber Summit, York University, Humber College, North York, TTC who want clear store information and simple menu categories before visiting.",
      },
      {
        heading: "Flower Tiers And Menu Categories",
        body: "Planet X Cannabis organizes flower into clear tiers, from Exotic and Premium to AAA+, AA, and Budget. You can also browse edibles, vapes, concentrates, pre-rolls, cigarettes, and accessories through the live menu before stopping in.",
      },
      {
        heading: "Useful Local Search Without The Template Noise",
        body: "The store identity here is Islington Avenue and Steeles Avenue West, not a copied city page. Use this page for local context, then jump into the category pages or Resources hub for menu decisions.",
      },
      {
        heading: "Open 24 Hours Near Islington and Steeles",
        body: "Planet X Cannabis is open 24 hours. Walk in when the shop is open, check the menu first, or call +1 (289) 217-2773 if you need current in-store details.",
      },
    ],
    faqs: [
      {
        q: "Where is Planet X Cannabis located?",
        a: "Planet X Cannabis is located at 3005 Islington Ave unit 1, North York, ON M9L 2K9, near Islington Avenue and Steeles Avenue West.",
      },
      {
        q: "What products can I browse?",
        a: "You can browse flower, pre-rolls, edibles, vapes, concentrates, cigarettes, and accessories before visiting.",
      },
      {
        q: "How do I check current menu listings?",
        a: "Use the current menu or ask in store for today's exact listings.",
      },
      {
        q: "What areas does this store naturally serve?",
        a: "Planet X Cannabis is useful for shoppers around Islington Avenue, Steeles Avenue West, Humber Summit, York University, Humber College, North York, TTC.",
      },
    ],
  },

  {
    slug: "cheap-weed-islington-steeles",
    title: "Cheap Weed Near Islington and Steeles | Planet X Cannabis",
    metaDescription:
      "Looking for affordable cannabis near Islington and Steeles? Planet X Cannabis at 3005 Islington Ave unit 1 has Budget, AA, AAA+, Premium, and Exotic flower tiers with clear menu browsing.",
    h1: "Cheap Weed Near Islington and Steeles",
    icon: "",
    heroTagline:
      "Budget flower, value ounces, and clear tier pricing near Islington Avenue and Steeles Avenue West",
    banner: "",
    sections: [
      {
        heading: "Value Flower Without Fake Claims",
        body: "Planet X Cannabis uses clear flower tiers so shoppers can compare Budget, AA, AAA+, Premium, and Exotic options before visiting. This page is for value-oriented browsing near Islington Avenue and Steeles Avenue West.",
      },
      {
        heading: "Bundle Pricing Context",
        body: "Flower deal details can vary by current menu and tier. Check the live menu or ask in store before purchase so the price and package size are clear.",
      },
      {
        heading: "Local Value Search",
        body: "If you are searching for affordable cannabis around Islington Avenue, Steeles Avenue West, Humber Summit, York University, Humber College, North York, TTC, start here and move into the flower tier pages for current category details.",
      },
    ],
    faqs: [
      {
        q: "Where can I find affordable cannabis near Islington and Steeles?",
        a: "Planet X Cannabis at 3005 Islington Ave unit 1 is a local option for value-focused shoppers near Islington Avenue and Steeles Avenue West.",
      },
      {
        q: "Does this page guarantee current prices?",
        a: "No. Prices and menu listings should be confirmed on the current menu or in store.",
      },
      {
        q: "Which flower tiers should value shoppers compare?",
        a: "Budget, AA, and AAA+ are usually the first tiers to compare when shopping for value.",
      },
    ],
  },

  {
    slug: "native-cigarettes-islington-steeles",
    title: "Native Cigarettes Near Islington and Steeles | Planet X Cannabis",
    metaDescription:
      "Browse native cigarette category information for Planet X Cannabis at 3005 Islington Ave unit 1. Confirm current brands, varieties, and pricing in store.",
    h1: "Native Cigarettes Near Islington and Steeles",
    icon: "",
    heroTagline:
      "Cigarettes, accessories, and cannabis category browsing near Islington Avenue and Steeles Avenue West",
    heroPreview: {
      eyebrow: "Planet X Cannabis · 3005 Islington Ave Unit 1, North York",
      intro: "Cigarette category guidance near Islington and Steeles",
      products: NATIVE_HERO_PRODUCTS,
      disclosure: NATIVE_HERO_DISCLOSURE,
    },
    banner: "",
    sections: [
      {
        heading: "Cigarette Category Information",
        body: "Planet X Cannabis includes cigarette category browsing alongside cannabis categories. Use this page to find the right store path, then confirm current brand selection and prices in store.",
      },
      {
        heading: "One Stop For Category Browsing",
        body: "Shoppers near Islington Avenue and Steeles Avenue West can browse cigarettes, flower, pre-rolls, edibles, vapes, concentrates, and accessories before visiting 3005 Islington Ave unit 1.",
      },
      {
        heading: "Local Context",
        body: "This page is centered on Islington Avenue and Steeles Avenue West and nearby areas like Islington Avenue, Steeles Avenue West, Humber Summit, York University, Humber College, North York, TTC. It does not reuse unrelated city copy.",
      },
    ],
    faqs: [
      {
        q: "Does Planet X Cannabis list cigarette information?",
        a: "Yes. The site includes cigarette category information, but current brands and prices should be confirmed in store.",
      },
      {
        q: "Can I browse cannabis and cigarettes together?",
        a: "Yes. The site has category paths for cannabis products, cigarettes, and accessories.",
      },
      {
        q: "Where is the store?",
        a: "3005 Islington Ave unit 1, North York, ON M9L 2K9.",
      },
    ],
  },

  {
    slug: "weed-store-near-north-york",
    title: "Weed Store Near North York | Planet X Cannabis",
    metaDescription:
      "Planet X Cannabis is a local weed store at 3005 Islington Ave unit 1, North York, ON M9L 2K9, useful for shoppers around Islington Avenue and Steeles Avenue West and nearby North York.",
    h1: "Weed Store Near North York",
    icon: "",
    heroTagline:
      "Local cannabis browsing near Islington Avenue and Steeles Avenue West and North York",
    banner: "",
    sections: [
      {
        heading: "A Nearby Weed Store Path",
        body: "Planet X Cannabis is anchored at 3005 Islington Ave unit 1. This page is for shoppers looking around Islington Avenue and Steeles Avenue West, North York, and nearby routes.",
      },
      {
        heading: "Why Start With The Menu",
        body: "The menu helps you compare flower tiers and category paths before visiting. It is a cleaner next step than a generic city page.",
      },
      {
        heading: "Directions Context",
        body: "Use Islington Avenue and Steeles Avenue West as the local anchor. Nearby shoppers may also recognize Islington Avenue, Steeles Avenue West, Humber Summit, York University, Humber College, North York, TTC.",
      },
    ],
    faqs: [
      {
        q: "Is this store near North York?",
        a: "Planet X Cannabis is located at 3005 Islington Ave unit 1, North York, ON M9L 2K9, with local context around Islington Avenue and Steeles Avenue West.",
      },
      {
        q: "Can I check categories before visiting?",
        a: "Yes. Use the flower and item category pages to browse before you go.",
      },
      {
        q: "Does this page promise delivery?",
        a: "No. Delivery pages are marked coming soon unless the store has launched delivery.",
      },
    ],
  },

  {
    slug: "dispensary-near-me-islington-steeles",
    title:
      "Cannabis Dispensary Near Me Islington and Steeles | Planet X Cannabis",
    metaDescription:
      "Find Planet X Cannabis at 3005 Islington Ave unit 1, North York, ON M9L 2K9. Browse cannabis flower, edibles, vapes, concentrates, pre-rolls, cigarettes, and accessories before visiting.",
    h1: "Cannabis Dispensary Near Me Islington and Steeles",
    icon: "",
    heroTagline:
      "Walk-in friendly cannabis browsing near Islington Avenue and Steeles Avenue West",
    banner: "",
    sections: [
      {
        heading: "Find Cannabis Near Islington and Steeles",
        body: "If you are searching for a cannabis dispensary near Islington and Steeles, Planet X Cannabis is located at 3005 Islington Ave unit 1, North York, ON M9L 2K9.",
      },
      {
        heading: "Browse Before You Visit",
        body: "Use the menu and Resources hub to compare product categories, value options, flower tiers, and visit planning details.",
      },
      {
        heading: "Areas We Naturally Reference",
        body: "Planet X Cannabis is associated with Islington Avenue, Steeles Avenue West, Humber Summit, York University, Humber College, North York, TTC. These local references keep the site identity specific and useful.",
      },
    ],
    faqs: [
      {
        q: "Where is the closest local page for this store?",
        a: "Start with /weed-dispensary-north-york for GBP-style address and visit details.",
      },
      {
        q: "Is walk-in shopping supported?",
        a: "The site is built around browsing before visiting. Confirm current shopping details with the store when needed.",
      },
      {
        q: "What neighbourhoods does this page focus on?",
        a: "Islington Avenue, Steeles Avenue West, Humber Summit, York University, Humber College, North York, TTC",
      },
    ],
  },
  {
    slug: "nicotine-vapes-islington-steeles",
    title: "Nicotine Vapes Near Islington and Steeles | Planet X Cannabis",
    absoluteTitle: true,
    metaDescription: "Adults 19+: review six nicotine vape product pages from Planet X Cannabis in North York, then check /items/vapes for the current category. Nicotine is addictive.",
    h1: "Nicotine Vapes at Planet X Cannabis in North York",
    icon: "NV",
    heroTagline: "Adults 19+ · Nicotine is addictive.",
    heroPreview: {
      eyebrow: "PLANET X CANNABIS • ISLINGTON / STEELES / NORTH YORK • ADULTS 19+",
      intro: "Searching for nicotine vapes near me around Islington, Steeles or North York? This adult-only Planet X Cannabis guide features six live-checked VAPE PENS product pages. Compare their supported names, then use /items/vapes for the current nicotine category. Product details can change. Nicotine is addictive.",
      products: [
        { name: "ENVI DRIP’N – 5% | 28K PUFFS", image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/1092-Envi-Dripn-28K.webp", sourceSlug: "envi-dripn-5-28k-puffs" },
        { name: "GEEK PROMAX – 5% | 30K PUFFS", image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/GEEK-PROMAX.jpg", sourceSlug: "geek-promax-5-30k-puffs" },
        { name: "GEEK UNIVERSE 25k PUFFS", image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/geek_universe_pulse_x_25k.webp", sourceSlug: "geek-universe-25k-puffs" },
        { name: "OVNS 10000 – 5% | 10K PUFFS", image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/1081OVNS10000.jpg", sourceSlug: "ovns-10000-5-10k-puffs" },
        { name: "OVNS DISPOSABLE – 5% | 8ML | MANY FLAVORS", image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/OVNS500x500HQ.webp", sourceSlug: "ovns-disposable-5-8ml-many-flavors" },
        { name: "OVNS PIONEER – 5% | 22K PUFFS", image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/OVNS_PIONEER_5_22K_PUFFS.webp", sourceSlug: "ovns-pioneer-5-22k-puffs" },
      ],
      disclosure: "Featured cards are live-checked starting points, not guarantees of current stock, price or availability.",
      theme: "nicotine",
      menuHref: "/items/vapes",
      primaryLabel: "Browse Nicotine Vapes",
      secondaryLabel: "Compare the Six Featured Items",
      secondaryHref: "#featured-vapes",
      identityStrip: "Planet X Cannabis | Islington / Steeles / North York | Adults 19+ | Nicotine is addictive.",
      featuredHeading: "Six Live-Checked Planet X Vape Cards",
      featuredIntro: "This shortlist contains six live-checked ENVI, Geek and OVNS VAPE PENS product pages. Use each card for its supported display name, then rely on /items/vapes for the current Planet X Cannabis category listing.",
      warning: "Adults 19+. Nicotine is addictive.",
    },
    sections: [
      { heading: "Read Each Product Format Carefully", body: "One featured page explicitly identifies an OVNS disposable. Keep that description attached only to that product and do not apply the disposable label to another featured item by assumption." },
      { heading: "Puff Counts Identify Listings", body: "Several featured names include puff counts. Use those numbers to distinguish the listings, not as guarantees of duration, performance or superiority." },
      { heading: "Keep Nicotine and Cannabis Vape Routes Separate", body: "This adult-only Planet X Cannabis guide uses six nicotine VAPE PENS products under /items/vapes. THC and cannabis vape products are excluded. The separate /items/vape-disposables route is not used on this page." },
      { heading: "Review the Current North York Category", body: "Before choosing, open /items/vapes and the individual product page for current supported details. This guide does not claim prices, stock or guaranteed availability." },
    ],
    faqs: [
      { q: "Where should I check Planet X Cannabis’s current nicotine selection?", a: "Use /items/vapes. The six featured cards are live-checked starting points while the current category listing controls selection information." },
      { q: "Does every featured item use the same format?", a: "No format should be assumed. One featured page explicitly identifies an OVNS disposable. Read each current product page for its supported format and details." },
      { q: "Does this page include cannabis vapes?", a: "No. It covers six nicotine products from the VAPE PENS category for adults 19+. THC and cannabis vape products are excluded." },
    ],
  },
];

export function getSeoPageBySlug(slug: string): SeoPageData | undefined {
  return SEO_PAGES.find((p) => p.slug === slug);
}
