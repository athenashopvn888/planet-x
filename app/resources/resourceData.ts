export interface ResourceCard {
  title: string;
  href: string;
  text: string;
}

export interface ResourceSection {
  heading: string;
  body: string;
  bullets?: string[];
}

export interface ResourcePage {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  eyebrow: string;
  intro: string;
  cards: ResourceCard[];
  sections: ResourceSection[];
}

export const RESOURCE_PAGES: ResourcePage[] = [
  {
    slug: "",
    title: "Planet X Cannabis Weed & Cannabis Resources",
    seoTitle: "Weed & Cannabis Resources North York | Planet X Cannabis",
    description: "Explore Planet X Cannabis Weed resources for flower collections, menu browsing, value-focused shopping and local North York guidance.",
    eyebrow: "Weed Resources",
    intro: "Planet X Cannabis brings together practical Weed and Cannabis guides for shoppers exploring flower, menu categories and local North York options. Choose the topic that interests you, compare different parts of the selection or start with the broader Planet X Weed selection.",
    cards: [
      { title: "Explore Planet X Cannabis Weed in North York", href: "/weed-dispensary-north-york/", text: "Start with the broader Planet X Weed selection." },
      { title: "Weed Flower Guide", href: "/resources/weed-flower-guide", text: "Compare Exotic Weed, Premium Weed, AAA+ Weed, AA Weed and Budget Weed." },
      { title: "Cannabis Menu Guide", href: "/resources/cannabis-menu-guide", text: "Explore different parts of the Planet X Cannabis selection and find the categories that interest you." },
      { title: "Weed Value Guide", href: "/resources/weed-value-guide", text: "Use a simple framework for comparing the current information presented while you browse Planet X Weed collections." },
      { title: "Islington & North York Weed Guide", href: "/resources/islington-north-york-weed-visit-guide", text: "Explore Planet X Cannabis with a local North York and Islington focus." }
    ],
    sections: [
      {
        heading: "Explore Planet X Weed Flower Collections",
        body: "Explore the five Planet X Cannabis Flower collections and choose the ones that interest you.",
        bullets: ["Exotic Weed", "Premium Weed", "AAA+ Weed", "AA Weed", "Budget Weed"]
      }
    ],
  },
  {
    slug: "islington-north-york-weed-visit-guide",
    title: "Planet X Weed Guide for Islington & North York",
    seoTitle: "Islington & North York Weed Guide | Planet X Cannabis",
    description: "Explore Planet X Cannabis Weed in North York with a local guide connecting broader Weed browsing, flower collections and helpful cannabis resources.",
    eyebrow: "Islington & North York Weed Guide",
    intro: "Planet X Cannabis serves shoppers exploring Weed and cannabis in North York, including those searching around the Islington area. Use this guide to explore the broader Weed selection, compare flower collections and discover supporting Planet X resources.",
    cards: [
      { title: "Browse Planet X Cannabis Weed in North York", href: "/weed-dispensary-north-york/", text: "Explore the broader Planet X Weed selection." },
      { title: "Weed Flower Guide", href: "/resources/weed-flower-guide", text: "Compare the five Planet X Weed flower collections." },
      { title: "Cannabis Menu Guide", href: "/resources/cannabis-menu-guide", text: "Explore Planet X Cannabis categories and guides." },
      { title: "Weed Value Guide", href: "/resources/weed-value-guide", text: "Compare the information presented across Weed flower collections." }
    ],
    sections: [
      {
        heading: "Explore Planet X Weed in North York",
        body: "Begin with the broader Planet X Cannabis Weed selection, then continue into the flower collections or guides that interest you."
      },
      {
        heading: "Compare Weed Flower Collections",
        body: "Explore Exotic Weed, Premium Weed, AAA+ Weed, AA Weed and Budget Weed as distinct Planet X Cannabis Flower collections."
      },
      {
        heading: "Explore Planet X Cannabis Guides",
        body: "Continue with the Weed Flower Guide, Cannabis Menu Guide or Weed Value Guide for more browsing context."
      }
    ],
  },
  {
    slug: "cannabis-menu-guide",
    title: "Planet X Cannabis Menu Guide",
    seoTitle: "Cannabis Menu Guide North York | Planet X Cannabis",
    description: "Explore the Planet X Cannabis menu through Weed flower collections, product categories and shopper guides for North York.",
    eyebrow: "Cannabis Menu Guide",
    intro: "Planet X Cannabis offers several ways to explore Weed, Cannabis Flower and other product categories. Start broadly, choose a flower collection that interests you or use one of the supporting guides when you want more context while browsing.",
    cards: [
      { title: "Explore Planet X Weed", href: "/weed-dispensary-north-york/", text: "Begin with broader Weed browsing in North York." },
      { title: "Weed Flower Guide", href: "/resources/weed-flower-guide", text: "Explore all five Planet X Weed flower collections." },
      { title: "Weed Value Guide", href: "/resources/weed-value-guide", text: "Use a practical framework while comparing flower collections." }
    ],
    sections: [
      {
        heading: "Explore Planet X Weed",
        body: "For broader Weed browsing, explore Planet X Cannabis Weed in North York before narrowing your selection."
      },
      {
        heading: "Browse Cannabis Flower by Collection",
        body: "The five flower collections give shoppers different parts of the Planet X selection to explore. Start with one or compare several based on the product information presented while you browse.",
        bullets: ["Exotic Weed", "Premium Weed", "AAA+ Weed", "AA Weed", "Budget Weed"]
      },
      {
        heading: "Explore More Planet X Guides",
        body: "Continue with the Weed Flower Guide or Weed Value Guide when you want more context while browsing."
      }
    ],
  },
  {
    slug: "weed-flower-guide",
    title: "Planet X Weed & Cannabis Flower Guide",
    seoTitle: "Weed & Cannabis Flower Guide North York | Planet X Cannabis",
    description: "Explore Exotic Weed, Premium Weed, AAA+ Weed, AA Weed and Budget Weed from Planet X Cannabis in one North York flower guide.",
    eyebrow: "Weed & Cannabis Flower Guide",
    intro: "Planet X Cannabis brings five Weed flower collections together for shoppers who want to compare different parts of the selection: Exotic Weed, Premium Weed, AAA+ Weed, AA Weed and Budget Weed. Explore whichever collections catch your interest or begin with the broader North York Weed selection.",
    cards: [
      { title: "Exotic Weed", href: "/exotic-weed", text: "Explore the Planet X Exotic Weed flower collection." },
      { title: "Premium Weed", href: "/premium-weed", text: "Browse the Premium Weed flower collection." },
      { title: "AAA+ Weed", href: "/aaa-weed", text: "Explore the Planet X AAA+ Weed collection." },
      { title: "AA Weed", href: "/aa-weed", text: "Browse the AA Weed flower collection." },
      { title: "Budget Weed", href: "/budget-weed", text: "Explore the Budget Weed flower collection." },
      { title: "Explore Planet X Cannabis Weed in North York", href: "/weed-dispensary-north-york/", text: "Begin with the broader North York Weed selection." }
    ],
    sections: [
      {
        heading: "Explore Five Weed Flower Collections",
        body: "Browse one collection or compare several to see different parts of the Planet X Cannabis Flower selection."
      },
      {
        heading: "Weed, Cannabis and Flower at Planet X",
        body: "Weed, cannabis, bud and flower are familiar terms shoppers use while exploring dispensary selections. Planet X Cannabis uses those terms naturally while offering five distinct flower collections to browse."
      },
      {
        heading: "Find a Collection That Interests You",
        body: "Start with whichever collection catches your attention, then explore another whenever you want to compare more of the Planet X flower selection."
      }
    ],
  },
  {
    slug: "weed-value-guide",
    title: "Planet X Cannabis Weed Value Guide",
    seoTitle: "Weed Value Guide North York | Planet X Cannabis",
    description: "Explore Planet X Cannabis Weed flower collections with a practical guide to comparing the current product information presented as you browse.",
    eyebrow: "Weed Value Guide",
    intro: "Different shoppers may focus on different details when exploring Cannabis Flower. This guide offers a practical way to compare Planet X Weed collections using the current product information presented while you browse, without relying on fixed prices or temporary promotions.",
    cards: [
      { title: "Exotic Weed", href: "/exotic-weed", text: "Explore the Exotic Weed flower collection." },
      { title: "Premium Weed", href: "/premium-weed", text: "Explore the Premium Weed flower collection." },
      { title: "AAA+ Weed", href: "/aaa-weed", text: "Explore the AAA+ Weed flower collection." },
      { title: "AA Weed", href: "/aa-weed", text: "Explore the AA Weed flower collection." },
      { title: "Budget Weed", href: "/budget-weed", text: "Explore the Budget Weed flower collection." }
    ],
    sections: [
      {
        heading: "Choose a Weed Flower Collection to Explore",
        body: "Explore Exotic Weed, Premium Weed, AAA+ Weed, AA Weed or Budget Weed based on the collection that interests you."
      },
      {
        heading: "Compare the Information That Matters to You",
        body: "As you explore, consider which flower collection you are browsing, the product information shown with individual items and which other collections interest you."
      },
      {
        heading: "Explore Planet X Weed More Broadly",
        body: "Browse Planet X Cannabis Weed in North York or continue with the Weed Flower Guide for a broader view of the five collections."
      }
    ],
  },
  {
    slug: "pre-roll-guide",
    title: "Planet x Cannabis Pre-Roll And Quick Trip Guide",
    seoTitle: "Planet x Cannabis Pre-Roll Guide | Ready-To-Smoke Menu Tips",
    description: "A pre-roll guide for Planet x Cannabis, with quick-trip tips for ready-to-smoke options, flower cross-shopping, edibles, vapes, concentrates, and accessories.",
    eyebrow: "Pre-Roll Guide",
    intro: "Pre-roll shoppers usually want a faster path than loose flower shoppers. Use this page when the goal is ready-to-smoke options, a quick stop, or a small add-on beside another category.",
    cards: [
      { title: "Pre-Rolls", href: "/items/prerolls", text: "Open the current pre-roll category." },
      { title: "Flower Tiers", href: "/resources/weed-flower-guide", text: "Switch here if the visit turns into loose flower." },
      { title: "Menu Guide", href: "/resources/cannabis-menu-guide", text: "Use this if the stop includes edibles, vapes, concentrates, or accessories." }
    ],
    sections: [
      {
        heading: "Keep Pre-Rolls In Their Own Lane",
        body: "Pre-rolls should be compared by format, pack size, posted notes, and current price. Do not force loose-flower tier logic onto pre-roll shopping unless the visit actually changes categories."
      },
      {
        heading: "Useful For Local Quick Stops",
        body: "For North York, Islington, and Steeles shoppers, pre-rolls offer a direct category to check before heading through Islington Avenue, Steeles Avenue West, North York, Humber Summit, York University, Humber College, and TTC routes. Use the current category page for current details."
      }
    ],
  },
  {
    slug: "native-smokes",
    title: "Planet x Cannabis Native Smokes Price Guide",
    seoTitle: "Planet x Cannabis Native Smokes Prices | Cigarettes, Backwoods And Grabba",
    description: "Planet x Cannabis Native smokes resource with cigarette brands and listed prices for Canadian, Putters, Canadian Goose, Nexus, Time, Backwoods, grabba, pouches, and mixed smoke items where shown.",
    eyebrow: "Native Smokes",
    intro: "This page gives cigarette shoppers a real starting point instead of a vague category page. Use it for Native cigarettes, Canadian brands, Backwoods, grabba, nicotine pouches, and mixed smoke item price checks at Planet x Cannabis.",
    cards: [
      { title: "$25 Cigarette Brands", href: "/items/cigarettes", text: "The cigarette category lists CANADIAN LIGHTS, CANADIAN FULL, PUTTERS, CANADIAN GOOSE FULL, CANADIAN GOOSE LIGHTS, CANADIAN MENTHOL, CANADIAN CLASSICS ORIGINAL, CANADIAN CLASSICS SILVER, ROLLED GOLD LIGHTS, NEXUS FULL, NEXUS LIGHTS, TIME FULL at $25 where shown." },
      { title: "Backwoods And Grabba", href: "/items/cigarettes", text: "NICOTINE POUCHES , VELO, PABLO, KILLA at $20; GRABBA at $5; GRABBA SHAKER *RedRose / Red Herring* at $19; BACKWOODS ASSORTED FLAVORS $20-$25 at $20; NEW BACKWOODS FLAVORS at $25; 10 X PREMIUM MIX CIGARETTES at $3" },
      { title: "Native Cigarettes Guide", href: "/resources/native-smokes/native-cigarettes-guide", text: "A fuller brand and price breakdown for cigarette shoppers." }
    ],
    sections: [
      {
        heading: "$25 Cigarette Brand List",
        body: "The cigarette category lists CANADIAN LIGHTS, CANADIAN FULL, PUTTERS, CANADIAN GOOSE FULL, CANADIAN GOOSE LIGHTS, CANADIAN MENTHOL, CANADIAN CLASSICS ORIGINAL, CANADIAN CLASSICS SILVER, ROLLED GOLD LIGHTS, NEXUS FULL, NEXUS LIGHTS, TIME FULL at $25 where shown.",
        bullets: ["CANADIAN LIGHTS - $25", "CANADIAN FULL - $25", "PUTTERS - $25", "CANADIAN GOOSE FULL - $25", "CANADIAN GOOSE LIGHTS - $25", "CANADIAN MENTHOL - $25", "CANADIAN CLASSICS ORIGINAL - $25", "CANADIAN CLASSICS SILVER - $25", "ROLLED GOLD LIGHTS - $25", "NEXUS FULL - $25", "NEXUS LIGHTS - $25", "TIME FULL - $25"]
      },
      {
        heading: "Backwoods, Grabba, Pouches, And Mix Items",
        body: "NICOTINE POUCHES , VELO, PABLO, KILLA at $20; GRABBA at $5; GRABBA SHAKER *RedRose / Red Herring* at $19; BACKWOODS ASSORTED FLAVORS $20-$25 at $20; NEW BACKWOODS FLAVORS at $25; 10 X PREMIUM MIX CIGARETTES at $3"
      },
      {
        heading: "Confirm The Current Shelf",
        body: "Cigarette inventory, flavors, and brand mix can change. Use the cigarette category for the current public list, then confirm in store when one exact brand, full/light/menthol style, pouch, grabba, or Backwoods flavor matters."
      }
    ],
  },
  {
    slug: "native-smokes/native-cigarettes-guide",
    title: "Planet x Cannabis Native Cigarettes Brand Guide",
    seoTitle: "Planet x Cannabis Native Cigarettes Guide | Brand And Price List",
    description: "A detailed Native cigarettes brand guide for Planet x Cannabis, including $25 cigarette listings and smoke add-on prices where shown.",
    eyebrow: "Native Cigarettes",
    intro: "If the trip includes cigarettes, start with brand and price first. This guide keeps Native cigarettes, Backwoods, grabba, pouches, and mixed smoke items separate from flower, pre-rolls, edibles, THC vapes, and concentrates.",
    cards: [
      { title: "Cigarette Category", href: "/items/cigarettes", text: "Open the current cigarette category." },
      { title: "Native Smokes Overview", href: "/resources/native-smokes", text: "Return to the shorter price guide." },
      { title: "Local Visit Guide", href: "/resources/islington-north-york-weed-visit-guide", text: "Plan the store stop around the local area." }
    ],
    sections: [
      {
        heading: "Brand Names To Check",
        body: "The cigarette category lists CANADIAN LIGHTS, CANADIAN FULL, PUTTERS, CANADIAN GOOSE FULL, CANADIAN GOOSE LIGHTS, CANADIAN MENTHOL, CANADIAN CLASSICS ORIGINAL, CANADIAN CLASSICS SILVER, ROLLED GOLD LIGHTS, NEXUS FULL, NEXUS LIGHTS, TIME FULL at $25 where shown.",
        bullets: ["CANADIAN LIGHTS - $25", "CANADIAN FULL - $25", "PUTTERS - $25", "CANADIAN GOOSE FULL - $25", "CANADIAN GOOSE LIGHTS - $25", "CANADIAN MENTHOL - $25", "CANADIAN CLASSICS ORIGINAL - $25", "CANADIAN CLASSICS SILVER - $25", "ROLLED GOLD LIGHTS - $25", "NEXUS FULL - $25", "NEXUS LIGHTS - $25", "TIME FULL - $25"]
      },
      {
        heading: "Smoke Category Add-Ons",
        body: "NICOTINE POUCHES , VELO, PABLO, KILLA at $20; GRABBA at $5; GRABBA SHAKER *RedRose / Red Herring* at $19; BACKWOODS ASSORTED FLAVORS $20-$25 at $20; NEW BACKWOODS FLAVORS at $25; 10 X PREMIUM MIX CIGARETTES at $3"
      },
      {
        heading: "Separate The Smoke Shelf From Cannabis Shopping",
        body: "When the same visit includes flower, pre-rolls, edibles, THC vapes, concentrates, or accessories, keep cigarettes as their own lane. It makes the category easier for both cannabis shoppers and Native smokes shoppers."
      }
    ],
  },
  {
    slug: "resource-centre-launch",
    title: "Planet X Cannabis Resource Hub Update",
    seoTitle: "Planet X Cannabis Resource Hub Update | Local Menu Guides",
    description: "Planet X Cannabis resource hub update with local visit planning, menu guide pages, flower tier pricing, value shopping, pre-roll tips, and Native smokes prices.",
    eyebrow: "Resource Update",
    intro: "The resource centre has been rebuilt around real customer visit steps: local visit planning, category-based browsing, flower tier math, value shopping, pre-roll shortcuts, and cigarette price notes.",
    cards: [
      { title: "Resource Home", href: "/weed-resources", text: "Start at the main Weed resource hub." },
      { title: "Local Visit Guide", href: "/resources/islington-north-york-weed-visit-guide", text: "Explore the local Islington and North York Weed guide." },
      { title: "Flower Tier Guide", href: "/resources/weed-flower-guide", text: "Explore the five Weed flower collections." },
      { title: "Native Smokes Prices", href: "/resources/native-smokes", text: "Check brand and price notes." }
    ],
    sections: [
      {
        heading: "What Changed",
        body: "The resources now focus on Planet X Cannabis and North York. Each page answers a specific customer question and points back to the matching category or local store page."
      },
      {
        heading: "What Stayed Protected",
        body: "The established broad Weed owner and distinct pre-roll and Native Smokes resources remain available, while the Weed campaign guides use their current canonical destinations."
      }
    ],
  }
];

export const RESOURCE_HOME = RESOURCE_PAGES[0];

export function getResourcePage(slug: string) {
  const cleanSlug = slug.replace(/^\/+|\/+$/g, "");
  return RESOURCE_PAGES.find((page) => page.slug === cleanSlug);
}
