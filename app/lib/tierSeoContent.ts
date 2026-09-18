export interface TierSeoData {
  seoTitle: string;
  h1: string;
  seoIntro: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
}

export const TIER_SEO: Record<string, TierSeoData> = {
  EXOTIC: {
    seoTitle: "Exotic Flower at Islington & Steeles | Planet X Cannabis",
    h1: "Exotic cannabis flower at unit 1, Islington & Steeles",
    seoIntro:
      "Exotic is the top-shelf flower lane at The Planet X Cannabis — 3005 Islington Ave unit 1 in Humber Summit, North York. This page only owns the Exotic collection ($10–$12/g on the published menu). Broad North York weed intent stays on the corridor page; overnight walk-ins use the 24-hour Islington & Steeles guide; NAP, hours, and the map stay on the homepage.",
    sections: [
      {
        heading: "What Exotic means at this Islington door",
        body: "Exotic is for shoppers who want the loudest, most limited flower on the current unit 1 menu — terpene-forward jars, not the $3/g value lane. Starting prices on the site sit at $10–$12/g. That is a menu range, not a live inventory promise. Call +1 (289) 217-2773 before a special overnight trip for one named cultivar.",
      },
      {
        heading: "Where Exotic sits beside the other four tiers",
        body: "Premium ($7–$10/g) is the step under Exotic for regular Humber Summit pickups. AAA+ ($5–$6/g) is mid-shelf volume. AA ($4/g) is the daily driver. Budget ($3/g) is the cheapest published gram. Compare sibling tiers from this page, then walk in at unit 1 — open 24 hours on Islington & Steeles.",
      },
    ],
    faqs: [
      {
        q: "What is Exotic flower at The Planet X Cannabis?",
        a: "Exotic is the top published flower tier at 3005 Islington Ave unit 1, listed around $10–$12/g. It is a North York / Humber Summit collection, not a city-wide Toronto exotic shop.",
      },
      {
        q: "Should I call before coming for a specific Exotic strain?",
        a: "Yes. Overnight and late Steeles West visits still need a phone check for one named SKU. Call +1 (289) 217-2773. How to find unit 1, parking, and TTC live on the visit page.",
      },
      {
        q: "How is Exotic different from Premium at this store?",
        a: "Exotic is the highest published gram range. Premium is the $7–$10/g lane for shoppers who want quality without the Exotic ticket. Both are on the same 24-hour unit 1 menu.",
      },
    ],
  },
  PREMIUM: {
    seoTitle: "Premium Weed in Humber Summit | Planet X Cannabis",
    h1: "Premium flower for Humber Summit regulars — $7–$10/g",
    seoIntro:
      "Premium is the everyday quality flower lane at The Planet X Cannabis in Humber Summit — unit 1 at 3005 Islington Ave, on Islington Avenue and Steeles Avenue West. Use this page to compare Premium against Exotic above and AAA+ below. The homepage keeps address, phone +1 (289) 217-2773, hours, and the map.",
    sections: [
      {
        heading: "Premium as the Humber Summit regular pick",
        body: "Premium ($7–$10/g on the published menu) is the lane most Islington & Steeles regulars land on when they want bag appeal and a cleaner smoke than mid-shelf, without paying Exotic. It is a collection page, not a live stock ticker. Ask at unit 1 or call before you cross Steeles for one jar.",
      },
      {
        heading: "Premium versus Exotic, AAA+, AA, and Budget",
        body: "Exotic sits above Premium on price and limited drops. AAA+ is the $5–$6/g mid-shelf. AA is $4/g daily-driver. Budget starts at $3/g. All five stay on the 24-hour North York walk-in menu. Corridor weed copy lives on the North York dispensary page.",
      },
    ],
    faqs: [
      {
        q: "What does Premium weed cost at Planet X in North York?",
        a: "Premium is listed around $7–$10/g on the published menu at 3005 Islington Ave unit 1. Confirm today's jars in store or by calling +1 (289) 217-2773.",
      },
      {
        q: "Is Premium the right lane if Exotic feels too expensive?",
        a: "Usually yes. Premium is the step under Exotic for Humber Summit shoppers who still want a quality flower pick. AAA+ and AA sit lower if you are stretching a gram budget.",
      },
      {
        q: "Can I buy Premium flower overnight at Islington & Steeles?",
        a: "The store is open 24 hours, so Premium is on the same overnight menu as the other tiers. Use the 24-hour Islington & Steeles page for late-night intent and the visit page for the unit 1 door.",
      },
    ],
  },
  "AAA+": {
    seoTitle: "AAA+ Flower at 3005 Islington Ave Unit 1 | Planet X",
    h1: "AAA+ weed at Planet X — mid-shelf on Islington Ave",
    seoIntro:
      "AAA+ is the mid-shelf flower owner at The Planet X Cannabis, 3005 Islington Ave unit 1, North York. The published range is $5–$6/g. This route is AAA+ (not a separate AAA-plus URL). Homepage NAP and 24-hour hours stay on the root; this page stays the AAA+ lane.",
    sections: [
      {
        heading: "AAA+ as volume mid-shelf at unit 1",
        body: "AAA+ is for shoppers who want more flower for the dollar than Premium, with a step up from AA. $5–$6/g is the published band. It is the workhorse mid-shelf on the Islington frontage — useful for Steeles West commuters who refill without jumping to Exotic.",
      },
      {
        heading: "AAA+ is not Exotic, and it is not Budget",
        body: "Do not treat AAA+ as the top-shelf Exotic lane or the $3/g Budget lane. Sibling pages: Exotic, Premium, AA, and Budget. For neighbourhood weed intent use the North York dispensary page. For after-midnight walk-ins use the 24-hour Islington & Steeles page.",
      },
    ],
    faqs: [
      {
        q: "Is AAA+ the same as AAA flower at Planet X?",
        a: "This store's mid-shelf owner is AAA+. The live URL is /aaa-weed (short /aaa redirects here). There is no separate AAA-plus product page. Published grams sit around $5–$6.",
      },
      {
        q: "Who usually shops AAA+ at 3005 Islington Ave unit 1?",
        a: "Humber Summit and Steeles West shoppers who want mid-shelf volume — more gram for the dollar than Premium, louder than AA. Confirm today's list in store.",
      },
      {
        q: "Does AAA+ stay on the overnight menu?",
        a: "Yes. Unit 1 is open 24 hours. AAA+ is a flower lane, not a hours page — overnight how-to lives on the 24-hour Islington & Steeles guide.",
      },
    ],
  },
  AA: {
    seoTitle: "AA Daily-Driver Weed near Steeles West | Planet X",
    h1: "AA flower near Steeles West — $4/g at unit 1",
    seoIntro:
      "AA is the $4/g daily-driver flower lane at The Planet X Cannabis, on the Steeles West / Islington edge of Humber Summit. Address: 3005 Islington Ave unit 1, North York, ON M9L 2K9. This page does not own cheap-weed SEO (that is Budget) and does not own 24-hour intent (that is the dedicated overnight LP).",
    sections: [
      {
        heading: "AA for Steeles West daily drivers",
        body: "AA is the simple $4/g pick when you want a reliable gram without mid-shelf AAA+ or Premium pricing. It is the lane for commuters coming down Islington or along Steeles Avenue West who already know the unit 1 door. Menu range is published, not a guarantee of a named strain.",
      },
      {
        heading: "AA versus Budget and AAA+",
        body: "Budget starts at $3/g for the cheapest published flower. AAA+ steps up to $5–$6/g. AA sits between them at $4/g. Exotic and Premium remain the top two quality lanes. Find unit 1 on the visit page; keep NAP on the homepage.",
      },
    ],
    faqs: [
      {
        q: "What is AA weed at The Planet X Cannabis?",
        a: "AA is the $4/g daily-driver collection at 3005 Islington Ave unit 1, North York. It is for regular Steeles West / Humber Summit grams, not the Exotic top shelf.",
      },
      {
        q: "Is AA the cheapest flower at this North York store?",
        a: "No. Budget is the cheapest published lane at $3/g. AA is one step up at $4/g. Use the Budget page if price is the only filter.",
      },
      {
        q: "Can I pick up AA flower on a late TTC run?",
        a: "Yes — the walk-in is 24 hours. Use the 24-hour Islington & Steeles page for overnight intent and the visit page for TTC along Islington and Steeles.",
      },
    ],
  },
  BUDGET: {
    seoTitle: "Budget Weed from $3/g — 24h North York Walk-In | Planet X",
    h1: "Budget cannabis flower from $3/g at Islington & Steeles",
    seoIntro:
      "Budget is the lowest published flower lane at The Planet X Cannabis — from $3/g at 3005 Islington Ave unit 1, North York. It is the cheap-gram owner for this Humber Summit door, not a Toronto city bargain page. Overnight hours are explained on the 24-hour Islington & Steeles LP; this page stays the $3/g collection.",
    sections: [
      {
        heading: "Budget grams at the 24-hour unit 1 door",
        body: "Budget is for shoppers stretching a gram: published start at $3/g, with value ounces called out on the tier card when listed. It is still adult 19+ flower at the same plaza entrance as Exotic. Do not treat this page as a coupon or a live sale board — confirm today's value jars in store or at +1 (289) 217-2773.",
      },
      {
        heading: "Budget versus AA and the rest of the wall",
        body: "AA is $4/g daily-driver. AAA+ is $5–$6/g mid-shelf. Premium and Exotic sit above. If you only need the cheapest published gram on Islington & Steeles, stay here. If you want neighbourhood weed context, use the North York dispensary page. If you need the plaza door after midnight, use the 24-hour guide.",
      },
    ],
    faqs: [
      {
        q: "What is the cheapest weed at The Planet X Cannabis?",
        a: "Budget flower starts at $3/g on the published menu at 3005 Islington Ave unit 1. AA starts at $4/g. Call +1 (289) 217-2773 if you need today's value list before you ride over.",
      },
      {
        q: "Is Budget flower only sold during the day?",
        a: "No. Unit 1 is open 24 hours, so Budget stays on the overnight menu with the other four tiers. Late-night how-to is on the 24-hour Islington & Steeles page, not this collection.",
      },
      {
        q: "Does Budget mean low-quality shake only?",
        a: "Budget is the value lane — including shreds and value ounces when those SKUs are listed — not a quality claim. Ask at unit 1 what is in the Budget jars today. Adults 19+ with ID.",
      },
    ],
  },
};
