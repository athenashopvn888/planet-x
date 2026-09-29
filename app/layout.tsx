import { HOME_TITLE } from "./lib/homeDelivery";
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import AgeGate from "./components/AgeGate";
import { jsonLdScript, storeJsonLd, storeNap } from "./lib/storeNap";

export const metadata: Metadata = {
  metadataBase: new URL(storeNap.origin),
  title: {
    default: HOME_TITLE,
    // Child titles that already include the brand must use resolveDocumentTitle()
    // so this template does not append "Planet X Cannabis" a second time.
    template: "%s | Planet X Cannabis",
  },
  description:
    "Open 24 hours, 7 days a week. Visit The Planet X Cannabis at 3005 Islington Ave unit 1 in North York, near Islington and Steeles. Adults 19+.",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: storeNap.origin,
    siteName: "Planet X Cannabis",
    title: HOME_TITLE,
    description:
      "Planet X Cannabis is a North York dispensary near Islington Ave and Steeles Ave W with flower, pre-rolls, vapes, edibles, concentrates, accessories, and adult 19+ info. Open 24 Hours.",
    images: [
      {
        url: storeNap.imageUrl,
        width: 1200,
        height: 630,
        alt: "The Planet X Cannabis — Premium Cannabis Dispensary North York",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description:
      "Planet X Cannabis is a North York dispensary near Islington Ave and Steeles Ave W with flower, pre-rolls, vapes, edibles, concentrates, accessories, and adult 19+ info. Open 24 Hours.",
    images: [storeNap.imageUrl],
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
    canonical: storeNap.origin,
  },
  verification: {
    // google: "your-google-verification-code",
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
        <meta name="geo.position" content={`${storeNap.latitude};${storeNap.longitude}`} />
        <meta name="ICBM" content={`${storeNap.latitude}, ${storeNap.longitude}`} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdScript(storeJsonLd()) }}
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-MMF97NLZZP"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-MMF97NLZZP');
            `,
          }}
        />
      </head>
      <body>
        <Link className="deliveryAnnouncement" href="/delivery">
          NEW DELIVERY MENU IS HERE — CLICK TO EXPLORE
        </Link>
        {children}
        <AgeGate />
      </body>
    </html>
  );
}
