export interface TierSeoData {
  seoTitle: string;
  h1: string;
  seoIntro: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
}

export const TIER_SEO: Record<string, TierSeoData> = {
  EXOTIC: {
    seoTitle: "Exotic Weed & Cannabis Flower North York | Planet X Cannabis",
    h1: "Exotic Weed & Cannabis Flower in North York",
    seoIntro: "Planet X Cannabis brings Exotic Weed together as one of its Cannabis Flower collections for shoppers exploring flower in North York. Browse the products presented in the collection, review the information provided with individual items and compare Exotic Weed with other Planet X flower selections that interest you.",
    sections: [
      { heading: "Explore Exotic Weed at Planet X Cannabis", body: "Exotic Weed gives shoppers a focused Cannabis Flower collection to browse at Planet X Cannabis. Explore the selection and learn more from the information presented with individual products." },
      { heading: "Compare Exotic Weed with Other Flower Collections", body: "Planet X Cannabis also organizes flower into Premium Weed, AAA+ Weed, AA Weed and Budget Weed. Explore more than one collection when you want to compare different parts of the flower selection." },
    ],
    faqs: [
      { q: "What is Exotic Weed at Planet X Cannabis?", a: "Exotic Weed is one of Planet X Cannabis’s Cannabis Flower collections." },
      { q: "Can I compare Exotic Weed with other flower collections?", a: "Yes. You can also explore Premium Weed, AAA+ Weed, AA Weed and Budget Weed." },
    ],
  },
  PREMIUM: {
    seoTitle: "Premium Weed & Cannabis Flower North York | Planet X Cannabis",
    h1: "Premium Weed & Cannabis Flower in North York",
    seoIntro: "Premium Weed is a Planet X Cannabis Flower collection for shoppers who want to explore this part of the broader Weed selection. Browse the products presented within the collection and compare Premium Weed with other Planet X flower collections as you explore.",
    sections: [
      { heading: "Browse Premium Weed at Planet X Cannabis", body: "Explore the Cannabis Flower products presented in the Premium Weed collection and use the product information shown while browsing to learn more about individual selections." },
      { heading: "Explore Premium Weed Alongside Other Collections", body: "Premium Weed can be explored alongside Exotic Weed, AAA+ Weed, AA Weed and Budget Weed. Each collection gives shoppers another part of the Planet X flower selection to consider." },
    ],
    faqs: [
      { q: "What can I explore in Premium Weed?", a: "Premium Weed brings together the Cannabis Flower products presented within Planet X Cannabis’s Premium collection." },
      { q: "What other flower collections can I browse?", a: "You can also explore Exotic Weed, AAA+ Weed, AA Weed and Budget Weed." },
    ],
  },
  "AAA+": {
    seoTitle: "AAA+ Weed & Cannabis Flower North York | Planet X Cannabis",
    h1: "AAA+ Weed & Cannabis Flower in North York",
    seoIntro: "Planet X Cannabis AAA+ Weed gives shoppers a focused Cannabis Flower collection to explore in North York. Browse the products presented within this collection and compare AAA+ Weed with other Planet X flower selections that catch your interest.",
    sections: [
      { heading: "Explore AAA+ Weed at Planet X Cannabis", body: "AAA+ Weed brings together a distinct section of the Planet X Cannabis Flower selection. Explore individual products and the information presented with them as you browse." },
      { heading: "Compare AAA+ Weed with Other Planet X Flower Collections", body: "AAA+ Weed can be explored alongside Exotic Weed, Premium Weed, AA Weed and Budget Weed. Moving between collections gives you more of the Planet X flower selection to consider." },
    ],
    faqs: [
      { q: "What is AAA+ Weed at Planet X Cannabis?", a: "AAA+ Weed is one of Planet X Cannabis’s Cannabis Flower collections." },
      { q: "Can I browse other flower collections after AAA+ Weed?", a: "Yes. Exotic Weed, Premium Weed, AA Weed and Budget Weed are also available to explore." },
    ],
  },
  AA: {
    seoTitle: "AA Weed & Cannabis Flower North York | Planet X Cannabis",
    h1: "AA Weed & Cannabis Flower in North York",
    seoIntro: "AA Weed is one of the Planet X Cannabis Flower collections available for shoppers exploring the broader Weed selection. Browse this collection and compare it with the other Planet X flower selections that interest you.",
    sections: [
      { heading: "Explore AA Weed Cannabis Flower", body: "Browse the Cannabis Flower products presented within Planet X Cannabis’s AA Weed collection and use the information shown with individual items as you explore." },
      { heading: "Compare AA Weed with Other Flower Collections", body: "AA Weed sits alongside Budget Weed, AAA+ Weed, Premium Weed and Exotic Weed. Shoppers can explore several collections to see different parts of the Planet X flower selection." },
    ],
    faqs: [
      { q: "What is AA Weed at Planet X Cannabis?", a: "AA Weed is one of Planet X Cannabis’s Cannabis Flower collections." },
      { q: "What can I compare with AA Weed?", a: "You can also explore Budget Weed, AAA+ Weed, Premium Weed and Exotic Weed." },
    ],
  },
  BUDGET: {
    seoTitle: "Budget Weed & Cannabis Flower North York | Planet X Cannabis",
    h1: "Budget Weed & Cannabis Flower in North York",
    seoIntro: "Planet X Cannabis Budget Weed gives shoppers a dedicated Cannabis Flower collection to explore within the wider Weed selection. Browse the products presented within this collection and compare Budget Weed with other Planet X flower selections as you explore.",
    sections: [
      { heading: "Explore Budget Weed at Planet X Cannabis", body: "Budget Weed brings together a focused part of the Planet X Cannabis Flower selection. Explore the products presented and use the available product information as you browse." },
      { heading: "Compare Budget Weed with Other Weed Flower Collections", body: "Planet X Cannabis also organizes flower into AA Weed, AAA+ Weed, Premium Weed and Exotic Weed. Explore whichever collections interest you and compare more than one when useful." },
    ],
    faqs: [
      { q: "What is Budget Weed at Planet X Cannabis?", a: "Budget Weed is one of Planet X Cannabis’s dedicated Cannabis Flower collections." },
      { q: "Can I explore other flower collections as well?", a: "Yes. You can also browse AA Weed, AAA+ Weed, Premium Weed and Exotic Weed." },
    ],
  },
};
