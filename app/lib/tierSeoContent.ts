export interface TierSeoData {
  seoTitle: string;
  seoIntro: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
}

export const TIER_SEO: Record<string, TierSeoData> = {
  EXOTIC: {
    seoTitle: "Exotic Cannabis Flower North York | Planet X Cannabis",
    seoIntro:
      "Browse top-tier flower category browsing at Planet X Cannabis near Islington Avenue and Steeles Avenue West. Confirm current menu items and prices before visiting.",
    sections: [
      {
        heading: "Exotic Flower At Planet X Cannabis",
        body: "Planet X Cannabis lists Exotic flower as part of its tiered cannabis menu. Use this page for category context, then check the current menu for exact strain listings, THC details, and package pricing.",
      },
      {
        heading: "Pricing Context From $20/g",
        body: "The Exotic tier is presented with clear menu pricing and deal context where listed. Prices and stock can change, so confirm the current menu or ask in store before purchase.",
      },
      {
        heading: "Local Store Context",
        body: "Planet X Cannabis is located at 3005 Islington Ave unit 1, North York, ON M9L 2K9, serving shoppers around Islington Avenue, Steeles Avenue West, Humber Summit, York University, Humber College, North York, TTC.",
      },
    ],
    faqs: [
      {
        q: "What is Exotic flower?",
        a: "Exotic is one of the flower tiers shown on the Planet X Cannabis menu. It helps shoppers compare category and price context before visiting.",
      },
      {
        q: "Does this page guarantee current Exotic stock?",
        a: "No. Use the current menu or ask in store for exact listings.",
      },
      {
        q: "Where is the store?",
        a: "3005 Islington Ave unit 1, North York, ON M9L 2K9",
      },
    ],
  },

  PREMIUM: {
    seoTitle: "Premium Cannabis Flower North York | Planet X Cannabis",
    seoIntro:
      "Browse premium flower category browsing at Planet X Cannabis near Islington Avenue and Steeles Avenue West. Confirm current menu items and prices before visiting.",
    sections: [
      {
        heading: "Premium Flower At Planet X Cannabis",
        body: "Planet X Cannabis lists Premium flower as part of its tiered cannabis menu. Use this page for category context, then check the current menu for exact strain listings, THC details, and package pricing.",
      },
      {
        heading: "Pricing Context From $15/g",
        body: "The Premium tier is presented with clear menu pricing and deal context where listed. Prices and stock can change, so confirm the current menu or ask in store before purchase.",
      },
      {
        heading: "Local Store Context",
        body: "Planet X Cannabis is located at 3005 Islington Ave unit 1, North York, ON M9L 2K9, serving shoppers around Islington Avenue, Steeles Avenue West, Humber Summit, York University, Humber College, North York, TTC.",
      },
    ],
    faqs: [
      {
        q: "What is Premium flower?",
        a: "Premium is one of the flower tiers shown on the Planet X Cannabis menu. It helps shoppers compare category and price context before visiting.",
      },
      {
        q: "Does this page guarantee current Premium stock?",
        a: "No. Use the current menu or ask in store for exact listings.",
      },
      {
        q: "Where is the store?",
        a: "3005 Islington Ave unit 1, North York, ON M9L 2K9",
      },
    ],
  },

  "AAA+": {
    seoTitle: "AAA+ Cannabis Flower North York | Planet X Cannabis",
    seoIntro:
      "Browse the AAA+ flower tier at Planet X Cannabis near Islington Avenue and Steeles Avenue West. Confirm current menu items and prices before visiting.",
    sections: [
      {
        heading: "AAA+ Flower At Planet X Cannabis",
        body: "Planet X Cannabis lists AAA+ flower as part of its tiered cannabis menu. Use this page for category context, then check the current menu for exact strain listings, THC details, and package pricing.",
      },
      {
        heading: "Pricing Context From $10/g",
        body: "The AAA+ tier is presented with clear menu pricing and deal context where listed. Prices and stock can change, so confirm the current menu or ask in store before purchase.",
      },
      {
        heading: "Local Store Context",
        body: "Planet X Cannabis is located at 3005 Islington Ave unit 1, North York, ON M9L 2K9, serving shoppers around Islington Avenue, Steeles Avenue West, Humber Summit, York University, Humber College, North York, TTC.",
      },
    ],
    faqs: [
      {
        q: "What is AAA+ flower?",
        a: "AAA+ is one of the flower tiers shown on the Planet X Cannabis menu. It helps shoppers compare category and price context before visiting.",
      },
      {
        q: "Does this page guarantee current AAA+ stock?",
        a: "No. Use the current menu or ask in store for exact listings.",
      },
      {
        q: "Where is the store?",
        a: "3005 Islington Ave unit 1, North York, ON M9L 2K9",
      },
    ],
  },

  AA: {
    seoTitle: "AA Cannabis Flower North York | Planet X Cannabis",
    seoIntro:
      "Browse daily-driver flower category browsing at Planet X Cannabis near Islington Avenue and Steeles Avenue West. Confirm current menu items and prices before visiting.",
    sections: [
      {
        heading: "AA Flower At Planet X Cannabis",
        body: "Planet X Cannabis lists AA flower as part of its tiered cannabis menu. Use this page for category context, then check the current menu for exact strain listings, THC details, and package pricing.",
      },
      {
        heading: "Pricing Context From $4/g",
        body: "The AA tier is presented with clear menu pricing and deal context where listed. Prices and stock can change, so confirm the current menu or ask in store before purchase.",
      },
      {
        heading: "Local Store Context",
        body: "Planet X Cannabis is located at 3005 Islington Ave unit 1, North York, ON M9L 2K9, serving shoppers around Islington Avenue, Steeles Avenue West, Humber Summit, York University, Humber College, North York, TTC.",
      },
    ],
    faqs: [
      {
        q: "What is AA flower?",
        a: "AA is one of the flower tiers shown on the Planet X Cannabis menu. It helps shoppers compare category and price context before visiting.",
      },
      {
        q: "Does this page guarantee current AA stock?",
        a: "No. Use the current menu or ask in store for exact listings.",
      },
      {
        q: "Where is the store?",
        a: "3005 Islington Ave unit 1, North York, ON M9L 2K9",
      },
    ],
  },

  BUDGET: {
    seoTitle: "Budget Cannabis North York | Planet X Cannabis",
    seoIntro:
      "Browse value flower category browsing at Planet X Cannabis near Islington Avenue and Steeles Avenue West. Confirm current menu items and prices before visiting.",
    sections: [
      {
        heading: "Budget Flower At Planet X Cannabis",
        body: "Planet X Cannabis lists Budget flower as part of its tiered cannabis menu. Use this page for category context, then check the current menu for exact strain listings, THC details, and package pricing.",
      },
      {
        heading: "Pricing Context From $3/g",
        body: "The Budget tier is presented with clear menu pricing and deal context where listed. Prices and stock can change, so confirm the current menu or ask in store before purchase.",
      },
      {
        heading: "Local Store Context",
        body: "Planet X Cannabis is located at 3005 Islington Ave unit 1, North York, ON M9L 2K9, serving shoppers around Islington Avenue, Steeles Avenue West, Humber Summit, York University, Humber College, North York, TTC.",
      },
    ],
    faqs: [
      {
        q: "What is Budget flower?",
        a: "Budget is one of the flower tiers shown on the Planet X Cannabis menu. It helps shoppers compare category and price context before visiting.",
      },
      {
        q: "Does this page guarantee current Budget stock?",
        a: "No. Use the current menu or ask in store for exact listings.",
      },
      {
        q: "Where is the store?",
        a: "3005 Islington Ave unit 1, North York, ON M9L 2K9",
      },
    ],
  },
};
