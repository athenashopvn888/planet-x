import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SeoMesh from "../components/SeoMesh";
import { jsonLdScript, storeNap } from "../lib/storeNap";
import { MESH, TIER_MESH, TWENTY_FOUR_FAQS } from "../lib/seoMesh";
import styles from "../visit/visit.module.css";

const PAGE_PATH = MESH.hours24;
const PAGE_URL = `${storeNap.origin}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: {
    absolute: "24 Hour Dispensary Open Now Near Islington & Steeles | Planet X",
  },
  description:
    "Open now: 24-hour cannabis dispensary at 3005 Islington Ave unit 1, North York — Islington & Steeles / Humber Summit walk-in. Adults 19+. Call +1 (289) 217-2773.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    url: PAGE_URL,
    title: "24 Hour Dispensary Open Now Near Islington & Steeles | Planet X",
    description:
      "The Planet X Cannabis is open 24 hours at 3005 Islington Ave unit 1 in Humber Summit, North York. Open-now / 24h-near-me walk-in at Islington & Steeles. Adults 19+.",
    images: [
      {
        url: storeNap.imageUrl,
        width: 1200,
        height: 630,
        alt: "24-hour Planet X Cannabis walk-in at 3005 Islington Ave unit 1, North York",
      },
    ],
  },
};

function twentyFourJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: "Open now: 24-hour dispensary near Islington & Steeles — unit 1",
        description:
          "Open-now and 24h-near-me guide for The Planet X Cannabis at 3005 Islington Ave unit 1, North York. Open 24 hours on Islington Avenue and Steeles Avenue West in Humber Summit.",
        isPartOf: { "@id": `${storeNap.origin}/#website` },
        about: { "@id": `${storeNap.origin}/#store` },
        primaryImageOfPage: storeNap.imageUrl,
      },
      {
        "@type": "FAQPage",
        "@id": `${PAGE_URL}#faq`,
        url: PAGE_URL,
        mainEntity: TWENTY_FOUR_FAQS.map((faq) => ({
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

export default function TwentyFourHourIslingtonSteelesPage() {
  return (
    <main className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(twentyFourJsonLd()) }}
      />
      <Navbar />
      <section className={styles.hero}>
        <p className={styles.kicker}>Open now · Open 24 Hours · Islington &amp; Steeles · Adults 19+</p>
        <h1>Open now: 24-hour dispensary near Islington &amp; Steeles — unit 1</h1>
        <p>
          <strong>{storeNap.brand}</strong> is a 24-hour walk-in at{" "}
          {storeNap.streetAddress}, {storeNap.city}, {storeNap.region}{" "}
          {storeNap.postalCode} — {storeNap.hoursDetail}. This page is the
          first-class open-now / 24h-near-me owner for the Islington &amp;
          Steeles door in Humber Summit, equal with corridor delivery, Native
          cigarettes, and nicotine vape. The{" "}
          <Link href={MESH.home}>homepage</Link> remains the NAP, hours, and map
          hub. <Link href={MESH.visit}>How to find unit 1</Link> covers plaza
          entrance, TTC, and parking.
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
        <SeoMesh current={PAGE_PATH} heading="Mesh — hub, visit, geo, Big Three, tiers" />
      </section>

      <section className={styles.section}>
        <h2>Overnight at unit 1 on Islington</h2>
        <p>
          The 24-hour door is the same plaza entrance marked unit 1 — not a
          back-lot bay and not a second storefront. Late Steeles West buses,
          York University night runs, and Humber Summit shift changes all land
          at 3005 Islington Ave. Adults 19+ with ID walk in; no appointment.
        </p>
        <p>
          If a maps pin drops you in the wider plaza after dark, stay on
          Islington Avenue until you see unit 1. Calling{" "}
          <a href={`tel:${storeNap.phoneIntl}`}>{storeNap.phoneDisplay}</a> is
          faster than circling the lot at 3 a.m.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Open now / near me on this corridor</h2>
        <p>
          Searching “dispensary open now” or “weed near me” from Islington
          Avenue, Steeles Avenue West, or Humber Summit? This URL is the
          overnight / open-now owner for unit 1 — not a Toronto city-wide
          open-now page. Adults 19+ with ID walk in any hour the site lists:{" "}
          {storeNap.hoursDetail}.
        </p>
        <p>
          Want a drop instead of the door? Corridor cannabis delivery from this
          same North York store lives on the{" "}
          <Link href={MESH.delivery}>Islington &amp; Steeles delivery</Link>{" "}
          page. Confirm the street before you wait. Cigarettes and nicotine
          vapes sold at this door have their own neighbourhood guides:{" "}
          <Link href={MESH.nativeCigs}>Native cigarettes</Link> and{" "}
          <Link href={MESH.nicotineVape}>nicotine vape</Link> (menu:{" "}
          <Link href={MESH.vapesMenu}>/items/vapes</Link>).
        </p>
      </section>

      <section className={styles.section}>
        <h2>Who this 24-hour North York door is for</h2>
        <p>
          This is a neighbourhood overnight walk-in: Islington Avenue, Steeles
          Avenue West, Humber Summit, and trips toward York University /
          Steeles West. It is not a downtown Toronto 24-hour landing and not a
          city-wide open-now page.
        </p>
        <ul>
          <li>Pin: 3005 Islington Ave unit 1, North York, ON M9L 2K9</li>
          <li>Corridor: {storeNap.intersection}</li>
          <li>Neighbourhood: {storeNap.neighbourhood}</li>
          <li>Hours: {storeNap.hoursDetail}</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>What stays on the overnight menu</h2>
        <p>
          Flower stays sorted into five tiers around the clock. This 24-hour
          page does not replace those collection URLs — it only answers “are
          you open now?” for Islington &amp; Steeles.
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
          sit on the same live menu. Confirm a named SKU by phone before a
          special late trip. Neighbourhood weed copy lives on the{" "}
          <Link href={MESH.geo}>North York dispensary</Link> page.
        </p>
      </section>

      <section className={styles.section}>
        <h2>How this page fits the visit hub</h2>
        <p>
          Homepage = address, phone, hours, map. /visit = plaza door, TTC,
          parking. North York geo = weed corridor owner. This URL = 24-hour /
          open-now intent for Islington &amp; Steeles. Google Business Profile
          should keep pointing at the homepage root — not this overnight slug.
        </p>
        <SeoMesh current={PAGE_PATH} heading="Back to hub, visit, geo, Big Three, and tiers" />
      </section>

      <section className={styles.section}>
        <h2>24-hour FAQs — Islington &amp; Steeles</h2>
        {TWENTY_FOUR_FAQS.map((faq) => (
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
