import CigaretteStateProvider from "./components/CigaretteStateProvider";
import FleetContentProvider from "./components/FleetContentProvider";
import { cigaretteSafeContent, SHOW_CIGARETTES } from "./lib/siteConfig";
import { getCigaretteSnapshot, toPublicCigaretteState } from "./lib/cigaretteFeed";
import { getFleetContent } from "./lib/fleetContent";
import FullNameNap from "./components/FullNameNap";
import MobileBottomBar from "./components/MobileBottomBar";
import PinnedNavClearance from "./components/PinnedNavClearance";
import { HOME_DOC_TITLE } from "./lib/homeDelivery";
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { jsonLdScript, storeJsonLd, storeNap } from "./lib/storeNap";

const ROOT_METADATA: Metadata = {
  metadataBase: new URL(storeNap.origin),
  title: {
    default: HOME_DOC_TITLE,
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
    title: HOME_DOC_TITLE,
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
    title: HOME_DOC_TITLE,
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

export async function generateMetadata(): Promise<Metadata> {
  const fleet = await getFleetContent();
  if (!fleet.active) return ROOT_METADATA;
  const description = fleet.pages.Home?.metaDescription || "";
  if (!description || description === ROOT_METADATA.description) return ROOT_METADATA;
  return {
    ...ROOT_METADATA,
    description,
    openGraph: { ...ROOT_METADATA.openGraph, description },
    twitter: { ...ROOT_METADATA.twitter, description },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [cigaretteSnapshot, fleet] = await Promise.all([getCigaretteSnapshot(), getFleetContent()]);
  const fromFeed = toPublicCigaretteState(cigaretteSnapshot);
  // Website stays on the static gate (and webOn). TV follows the feed flag.
  const cigarettes = {
    web: SHOW_CIGARETTES ? fromFeed.web : false,
    tv: fromFeed.tv,
    wording: fromFeed.wording,
  };
  return (
    <html lang="en">
      <head>
        <meta name="fleet-content-version" content={fleet.version} />
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
          dangerouslySetInnerHTML={{ __html: jsonLdScript(cigaretteSafeContent(storeJsonLd())) }}
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
        <FleetContentProvider value={{ active: fleet.active, version: fleet.version, nap: fleet.nap }}>
          <CigaretteStateProvider value={cigarettes}>
            {children}
            <FullNameNap />
            <PinnedNavClearance />
            <MobileBottomBar />
          </CigaretteStateProvider>
        </FleetContentProvider>
      </body>
    </html>
  );
}
