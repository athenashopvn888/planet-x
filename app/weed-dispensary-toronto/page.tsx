import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { storeNap } from "../lib/storeNap";
import styles from "../visit/visit.module.css";

export const metadata: Metadata = {
  title: "North York Walk-In | Planet X Cannabis",
  description:
    "The Planet X Cannabis is a North York walk-in at 3005 Islington Ave unit 1, near Islington and Steeles in Humber Summit — not a Toronto city dispensary landing.",
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
  alternates: {
    canonical: storeNap.origin,
  },
  openGraph: {
    url: storeNap.origin,
    title: "24 Hour North York Dispensary | Planet X Cannabis",
    images: [
      {
        url: storeNap.imageUrl,
        width: 1200,
        height: 630,
        alt: "The Planet X Cannabis — North York dispensary",
      },
    ],
  },
};

export default function TorontoCityLandingDemoted() {
  return (
    <main className={styles.main}>
      <Navbar />
      <section className={styles.hero}>
        <p className={styles.kicker}>City landing demoted · North York first</p>
        <h1>This is not a Toronto city dispensary page</h1>
        <p>
          <strong>{storeNap.brand}</strong> is a 24-hour walk-in at{" "}
          {storeNap.addressLine}, on the Islington / Steeles edge of Humber
          Summit. Toronto-wide head terms are the wrong war for this pin.
        </p>
        <p>
          Use the homepage visit hub for NAP, hours, and the map. Phone{" "}
          <a href={`tel:${storeNap.phoneIntl}`}>{storeNap.phoneDisplay}</a> only.
        </p>
        <div className={styles.actions}>
          <Link className={styles.primary} href="/">
            North York homepage
          </Link>
          <Link className={styles.secondary} href="/visit">
            How to find unit 1
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
