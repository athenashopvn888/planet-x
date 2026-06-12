import type { Metadata } from "next";
import "./globals.css";
import AgeGate from "./components/AgeGate";

export const metadata: Metadata = {
  metadataBase: new URL("https://theplanetx.ca"),
  title: {
    default: "Planet x Cannabis — Premium Cannabis Dispensary, North York",
    template: "%s | Planet x Cannabis",
  },
  description:
    "Shop 200+ premium cannabis strains at Planet x Cannabis. Exotic, Premium, AAA+, AA & Budget flower from $3/g. North York's uplifting dispensary at 3005 Islington Ave unit 1. Open 24 Hours.",
  keywords: [
    "cannabis dispensary North York",
    "weed store North York",
    "exotic flower North York",
    "premium cannabis",
    "Planet x Cannabis",
    "cheap weed North York",
    "dispensary near me",
    "THC flower",
    "indica sativa hybrid",
    "edibles North York",
    "vapes",
    "pre-rolls",
    "native cigarettes North York",
    "weed store Mississauga",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://theplanetx.ca",
    siteName: "Planet x Cannabis",
    title: "Planet x Cannabis — Premium North York Cannabis Dispensary",
    description:
      "200+ strains from $3/g. Exotic to Budget. North York's uplifting dispensary at 3005 Islington Ave unit 1. Open 24 Hours.",
    images: [
      {
        url: "https://theplanetx.ca/wp-content/uploads/2026/04/46Oi5.jpg",
        width: 1200,
        height: 630,
        alt: "Planet x Cannabis — Premium Cannabis Dispensary North York",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Planet x Cannabis — North York's Uplifting Dispensary",
    description: "200+ strains from $3/g. Open 24 Hours at 3005 Islington Ave unit 1, North York.",
    images: ["https://theplanetx.ca/wp-content/uploads/2026/04/46Oi5.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://theplanetx.ca",
  },
  verification: {
    // google: "your-google-verification-code",
  },
};

/* ── JSON-LD Structured Data ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  additionalType: "https://schema.org/Store",
  "@id": "https://theplanetx.ca",
  name: "Planet x Cannabis",
  description: "Cannabis dispensary at 3005 Islington Ave unit 1 in North York, ON. Shop exotic, premium, AAA+, AA, and budget flower tiers plus edibles, prerolls, and vapes. Open 24 Hours.",
  url: "https://theplanetx.ca",
  telephone: "+12265453005",
  image: "https://theplanetx.ca/wp-content/uploads/2026/04/7Clmh.jpg",
  priceRange: "$3 - $12/g",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3005 Islington Ave unit 1",
    addressLocality: "North York",
    addressRegion: "ON",
    postalCode: "M9L 2K9",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.7554,
    longitude: -79.5645,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  sameAs: [
    "https://maps.google.com/?q=3005+Islington+Ave+unit+1,+North+York,+ON+M9L+2K9",
    "https://maps.google.com/?q=3005+Islington+Ave+unit+1,+North+York,+ON+M9L+2K9",
  ],
  hasMap: "https://maps.google.com/?q=3005+Islington+Ave+unit+1,+North+York,+ON+M9L+2K9",
  areaServed: {
    "@type": "City",
    name: "North York",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "15",
    bestRating: "5",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="North York" />
        <meta name="geo.position" content="43.7554;-79.5645" />
        <meta name="ICBM" content="43.7554, -79.5645" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-MMF97NLZZP"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-MMF97NLZZP');
            `
          }}
        />
      </head>
      <body>
        {children}
        <AgeGate />
      </body>
    </html>
  );
}
