/** Single-store NAP for The Planet X Cannabis (PLX01). Do not invent hours. */
export const STORE_ORIGIN = "https://www.theplanetx.ca";

export const storeNap = {
  brand: "The Planet X Cannabis",
  shortBrand: "Planet X Cannabis",
  domain: "www.theplanetx.ca",
  origin: STORE_ORIGIN,
  streetAddress: "3005 Islington Ave unit 1",
  city: "North York",
  region: "ON",
  postalCode: "M9L 2K9",
  country: "CA",
  addressLine: "3005 Islington Ave unit 1, North York, ON M9L 2K9",
  phoneDisplay: "+1 (289) 217-2773",
  phoneIntl: "+12892172773",
  hoursLabel: "Open 24 Hours",
  hoursDetail: "Open 24 Hours a day, 7 days a week",
  intersection: "Islington Ave & Steeles Ave W",
  neighbourhood: "Humber Summit",
  imagePath: "/banners/welcome_banner.webp",
  imageUrl: `${STORE_ORIGIN}/banners/welcome_banner.webp`,
  mapsCid: "https://www.google.com/maps?cid=1981746911459908853",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=3005+Islington+Ave+unit+1,+North+York,+ON+M9L+2K9&z=16&output=embed",
  latitude: 43.7596082,
  longitude: -79.5708883,
  parkingNote:
    "Free plaza parking is available on-site. Free evening street parking is available; check local signs near 3005 Islington Ave unit 1.",
  transitNote:
    "Accessible via TTC bus routes along Islington Avenue and Steeles Avenue West, including trips toward York University / Steeles West.",
} as const;

/** Must match the root layout title template suffix exactly. */
export const DOCUMENT_TITLE_BRAND = "Planet X Cannabis";
const DOCUMENT_TITLE_SUFFIX = ` | ${DOCUMENT_TITLE_BRAND}`;
const BRAND_PATTERN = /planet x cannabis/gi;

function brandMentions(value: string) {
  return value.match(BRAND_PATTERN)?.length ?? 0;
}

/**
 * Root layout title template is `%s | Planet X Cannabis`.
 * A child title that already names the brand must be absolute, or the
 * template appends the brand a second time (`Brand | Brand`).
 */
export function resolveDocumentTitle(
  title: string,
  options?: { absolute?: boolean },
): string | { absolute: string } {
  let normalized = title.replace(/\s+/g, " ").trim();
  while (brandMentions(normalized) > 1 && /\|\s*planet x cannabis\s*$/i.test(normalized)) {
    normalized = normalized.replace(/\s*\|\s*planet x cannabis\s*$/i, "").trim();
  }
  if (options?.absolute || brandMentions(normalized) > 0) {
    return { absolute: normalized };
  }
  return normalized;
}

/** Title text after the root template is applied. Brand appears at most once. */
export function renderedDocumentTitle(
  title: string,
  options?: { absolute?: boolean },
): string {
  const resolved = resolveDocumentTitle(title, options);
  if (typeof resolved === "string") return `${resolved}${DOCUMENT_TITLE_SUFFIX}`;
  return resolved.absolute;
}

export const HOME_FAQS: { q: string; a: string }[] = [
  {
    q: "What are the hours for The Planet X Cannabis?",
    a: "The Planet X Cannabis at 3005 Islington Ave unit 1, North York is Open 24 Hours a day, 7 days a week. Walk in anytime — no appointment needed. Overnight / open-now detail for Islington & Steeles lives on the dedicated 24-hour page; this homepage keeps NAP, hours, and the map.",
  },
  {
    q: "Where is unit 1 at 3005 Islington Ave?",
    a: "The Planet X Cannabis is unit 1 at 3005 Islington Ave, North York, ON M9L 2K9, on the Islington Avenue and Steeles Avenue West edge of Humber Summit. Use the plaza entrance marked unit 1 — that door is the walk-in, not a back-lot bay.",
  },
  {
    q: "Is there parking at The Planet X Cannabis?",
    a: "Free plaza parking is available on-site. Free evening street parking is also available around the block; read posted signs before you leave the car.",
  },
  {
    q: "How do I reach The Planet X Cannabis on transit?",
    a: "TTC bus routes run along Islington Avenue and Steeles Avenue West. The store is a North York walk-in near Steeles West / York University trips, not a downtown Toronto pin. Full how-to-reach notes live on the visit page; NAP, hours, and the map stay on the homepage.",
  },
  {
    q: "What cannabis products do you carry?",
    a: "We carry five tiers of flower: Exotic ($10-$12/g), Premium ($7-$10/g), AAA+ ($5-$6/g), AA ($4/g), and Budget ($3/g), plus edibles, prerolls, vapes, concentrates, cigarettes, and accessories. Adults 19+ with valid ID.",
  },
  {
    q: "What is the cheapest weed at The Planet X Cannabis?",
    a: "Budget flower starts at $3/g. AA daily drivers start at $4/g and AAA+ from $5-$6/g. Check the live menu or ask in store for today's listings.",
  },
  {
    q: "Do you deliver across Toronto?",
    a: "Delivery is confirmed from this North York store for nearby Islington, Steeles, Humber Summit, and York University area addresses when a driver can take the order. It is not a city-wide Toronto delivery service. The neighbourhood delivery page is /cannabis-delivery-islington-steeles; the live catalog is /delivery. Call +1 (289) 217-2773 to confirm your street before you wait on a drop.",
  },
  {
    q: "What phone number should directories use?",
    a: "Only +1 (289) 217-2773. Ignore leftover 416 or 226 numbers on third-party listings — those are not this store's line.",
  },
];

export function storeJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CannabisStore",
        "@id": `${STORE_ORIGIN}/#store`,
        name: "The Planet X Cannabis Dispensary Weed Delivery",
        description:
          "24-hour cannabis dispensary at 3005 Islington Ave unit 1 in North York, on the Islington and Steeles edge of Humber Summit. Walk-in flower, pre-rolls, edibles, vapes, and concentrates for adults 19+.",
        url: STORE_ORIGIN,
        telephone: storeNap.phoneIntl,
        image: storeNap.imageUrl,
        priceRange: "$3 - $12/g",
        address: {
          "@type": "PostalAddress",
          streetAddress: storeNap.streetAddress,
          addressLocality: storeNap.city,
          addressRegion: storeNap.region,
          postalCode: storeNap.postalCode,
          addressCountry: storeNap.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: storeNap.latitude,
          longitude: storeNap.longitude,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        ],
        areaServed: {
          "@type": "AdministrativeArea",
          name: "North York",
        },
        sameAs: [storeNap.mapsCid],
        hasMap: storeNap.mapsCid,
      },
      {
        "@type": "WebSite",
        "@id": `${STORE_ORIGIN}/#website`,
        url: `${STORE_ORIGIN}/`,
        name: "The Planet X Cannabis Dispensary Weed Delivery",
        publisher: { "@id": `${STORE_ORIGIN}/#store` },
      },
      {
        "@type": "FAQPage",
        "@id": `${STORE_ORIGIN}/#faq`,
        url: STORE_ORIGIN,
        mainEntity: HOME_FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
    ],
  };
}

export const VISIT_FAQS = HOME_FAQS.slice(0, 4);

export function visitJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${STORE_ORIGIN}/visit#webpage`,
        url: `${STORE_ORIGIN}/visit`,
        name: "Find unit 1 at The Planet X Cannabis — Islington & Steeles",
        description:
          "How to find The Planet X Cannabis at 3005 Islington Ave unit 1, North York: plaza entrance, TTC on Islington and Steeles, parking, and Humber Summit landmarks. Homepage remains the visit hub.",
        isPartOf: { "@id": `${STORE_ORIGIN}/#website` },
        about: { "@id": `${STORE_ORIGIN}/#store` },
        primaryImageOfPage: storeNap.imageUrl,
        mentions: [
          {
            "@type": "CannabisStore",
            "@id": `${STORE_ORIGIN}/#store`,
            name: storeNap.brand,
            telephone: storeNap.phoneIntl,
            image: storeNap.imageUrl,
            address: {
              "@type": "PostalAddress",
              streetAddress: storeNap.streetAddress,
              addressLocality: storeNap.city,
              addressRegion: storeNap.region,
              postalCode: storeNap.postalCode,
              addressCountry: storeNap.country,
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: storeNap.latitude,
              longitude: storeNap.longitude,
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "00:00",
                closes: "23:59",
              },
            ],
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${STORE_ORIGIN}/visit#faq`,
        url: `${STORE_ORIGIN}/visit`,
        mainEntity: VISIT_FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
    ],
  };
}

export function jsonLdScript(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function faqPageJsonLd(faqs: { q: string; a: string }[], pageUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    url: pageUrl,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

/** True only when this site's own hours label, detail, and schema all say 24 hours. */
export function storeClaimsOpen24Hours() {
  const graph = storeJsonLd()["@graph"] as {
    openingHoursSpecification?: { opens: string; closes: string }[];
  }[];
  const spec = graph[0]?.openingHoursSpecification?.[0];
  const labelIs24 = /open 24 hours/i.test(storeNap.hoursLabel);
  const detailIs24 = /open 24 hours/i.test(storeNap.hoursDetail);
  const schemaIs24 = spec?.opens === "00:00" && spec?.closes === "23:59";
  return labelIs24 && detailIs24 && schemaIs24;
}
