import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SeoMesh from "../components/SeoMesh";
import { jsonLdScript, storeNap } from "../lib/storeNap";
import { GEO_FAQS, MESH, TIER_MESH } from "../lib/seoMesh";
import { weedOwner } from "../lib/weedDiscovery";
import styles from "../visit/visit.module.css";

const PAGE_PATH = MESH.geo;
const PAGE_URL = `${storeNap.origin}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: {
    absolute: weedOwner.seoTitle,
  },
  description: weedOwner.metaDescription,
  alternates: {
    canonical: `${storeNap.origin}/weed-dispensary-north-york`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    url: PAGE_URL,
    title: weedOwner.seoTitle,
    description: weedOwner.metaDescription,
    images: [
      {
        url: storeNap.imageUrl,
        width: 1200,
        height: 630,
        alt: "Weed dispensary at 3005 Islington Ave unit 1 — Islington, Steeles, Humber Summit",
      },
    ],
  },
};

function geoJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: weedOwner.h1,
        description: weedOwner.metaDescription,
        isPartOf: { "@id": `${storeNap.origin}/#website` },
        about: { "@id": `${storeNap.origin}/#store` },
        primaryImageOfPage: storeNap.imageUrl,
      },
      {
        "@type": "FAQPage",
        "@id": `${PAGE_URL}#faq`,
        url: PAGE_URL,
        mainEntity: GEO_FAQS.map((faq) => ({
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

export default function WeedDispensaryNorthYorkPage() {
  return (
    <main className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(geoJsonLd()) }}
      />
      <Navbar />
      <section className={styles.hero}>
        <p className={styles.kicker}>
          Weed dispensary · Islington &amp; Steeles · Humber Summit · Adults 19+
        </p>
        <h1>Weed dispensary at unit 1 — Islington, Steeles, Humber Summit</h1>
        <p>
          <strong>{storeNap.brand}</strong> is the walk-in weed dispensary at{" "}
          {storeNap.streetAddress}, {storeNap.city}, {storeNap.region}{" "}
          {storeNap.postalCode}. This page owns neighbourhood weed-dispensary
          intent for the Islington–Steeles / Humber Summit / North York
          corridor — one unit 1 door, not a Toronto city landing. The{" "}
          <Link href={MESH.home}>homepage</Link> remains the NAP, hours, and map
          hub. <Link href={MESH.visit}>How to find unit 1</Link> covers the
          plaza entrance, TTC, and parking. Overnight / open-now lives on the{" "}
          <Link href={MESH.hours24}>24-hour Islington &amp; Steeles</Link> page.
        </p>
        <address className={styles.nap}>
          <div>
            <strong>Store</strong>
            <div>{storeNap.brand}</div>
          </div>
          <div>
            <strong>Address</strong>
            <div>{storeNap.streetAddress}</div>
            <div>
              {storeNap.city}, {storeNap.region} {storeNap.postalCode}
            </div>
          </div>
          <div>
            <strong>Phone</strong>
            <div>
              <a href={`tel:${storeNap.phoneIntl}`}>{storeNap.phoneDisplay}</a>
            </div>
          </div>
          <div>
            <strong>Hours</strong>
            <div>{storeNap.hoursDetail}</div>
          </div>
        </address>
        <div className={styles.actions}>
          <a className={styles.primary} href={`tel:${storeNap.phoneIntl}`}>
            Call {storeNap.phoneDisplay}
          </a>
          <Link className={styles.secondary} href={MESH.visit}>
            Unit 1 door guide
          </Link>
        </div>
        <SeoMesh
          current={PAGE_PATH}
          heading="Mesh — hub, visit, 24-hour, Big Three, tiers"
        />
      </section>

      <section className={styles.section}>
        <h2>Who this Islington &amp; Steeles weed dispensary is for</h2>
        <p>
          Shoppers on Islington Avenue, Steeles Avenue West, Humber Summit, and
          trips toward York University / Steeles West. Adults 19+ with ID walk
          in at the plaza entrance marked unit 1. This is not a downtown
          Toronto dispensary page and not a city-wide “weed near me” landing.
        </p>
        <ul>
          <li>Pin: 3005 Islington Ave unit 1, North York, ON M9L 2K9</li>
          <li>Corridor: {storeNap.intersection}</li>
          <li>Neighbourhood: {storeNap.neighbourhood}</li>
          <li>Hours: {storeNap.hoursDetail}</li>
        </ul>
      </section>

      <section className={styles.section} id="find-your-weed">
        <h2>Find your weed at unit 1 — five published flower tiers</h2>
        <p>
          Flower on the live menu stays sorted into five lanes. This corridor
          page points at those collection URLs; it does not replace them and
          does not claim current stock, prices, or deals. Call{" "}
          <a href={`tel:${storeNap.phoneIntl}`}>{storeNap.phoneDisplay}</a>{" "}
          before a special trip for one named SKU.
        </p>
        <ul>
          {TIER_MESH.map((tier) => (
            <li key={tier.href}>
              <Link href={tier.href}>{tier.label}</Link>
            </li>
          ))}
        </ul>
        <p>
          Pre-rolls, edibles, vapes, concentrates, cigarettes, and accessories
          sit on the same walk-in menu. Cigarettes and nicotine vapes have
          their own neighbourhood guides:{" "}
          <Link href={MESH.nativeCigs}>Native cigarettes</Link> and{" "}
          <Link href={MESH.nicotineVape}>nicotine vape</Link> (menu:{" "}
          <Link href={MESH.vapesMenu}>/items/vapes</Link>).
        </p>
      </section>

      <section className={styles.section}>
        <h2>Walk-in first — delivery is a separate corridor page</h2>
        <p>
          Prefer the door? Unit 1 is {storeNap.hoursDetail}. Overnight and
          open-now intent stays on the{" "}
          <Link href={MESH.hours24}>24-hour Islington &amp; Steeles</Link>{" "}
          page. Want a drop instead? Corridor cannabis delivery from this same
          North York store lives on the{" "}
          <Link href={MESH.delivery}>Islington &amp; Steeles delivery</Link>{" "}
          page — confirm the street before you wait. The live catalog is{" "}
          <Link href={MESH.deliveryMenu}>/delivery</Link>.
        </p>
      </section>

      <section className={styles.section}>
        <h2>How this page fits the visit hub</h2>
        <p>
          Homepage = address, phone, hours, map. /visit = plaza door, TTC,
          parking. This URL = weed dispensary corridor owner for Islington,
          Steeles, and Humber Summit. 24-hour URL = open-now walk-in. Big Three
          = corridor delivery, Native cigarettes, nicotine vape. Google
          Business Profile should keep pointing at the homepage root — not this
          geo slug.
        </p>
        <SeoMesh
          current={PAGE_PATH}
          heading="Back to hub, visit, 24-hour, Big Three, and tiers"
        />
      </section>

      <section className={styles.section}>
        <h2>Weed dispensary FAQs — Islington, Steeles, Humber Summit</h2>
        {GEO_FAQS.map((faq) => (
          <div key={faq.q}>
            <h3>{faq.q}</h3>
            <p>{faq.a}</p>
          </div>
        ))}
      </section>
      <Footer />
    </main>
  );
}
