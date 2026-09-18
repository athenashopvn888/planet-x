import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StoreMap from "../components/StoreMap";
import SeoMesh from "../components/SeoMesh";
import { jsonLdScript, storeNap, visitJsonLd, VISIT_FAQS } from "../lib/storeNap";
import { MESH } from "../lib/seoMesh";
import styles from "./visit.module.css";

export const metadata: Metadata = {
  title: "How to Reach Unit 1 on Islington",
  description:
    "How to find The Planet X Cannabis at 3005 Islington Ave unit 1, North York: plaza entrance, TTC on Islington and Steeles, parking, and Humber Summit landmarks. Homepage remains the visit hub.",
  alternates: {
    canonical: storeNap.origin,
  },
  openGraph: {
    url: storeNap.origin,
    title: "24 Hour North York Dispensary | Planet X Cannabis",
    description:
      "Planet X Cannabis is a North York dispensary near Islington Ave and Steeles Ave W with flower, pre-rolls, vapes, edibles, concentrates, accessories, and adult 19+ info. Open 24 Hours.",
    images: [
      {
        url: storeNap.imageUrl,
        width: 1200,
        height: 630,
        alt: "The Planet X Cannabis — 24-hour North York dispensary at 3005 Islington Ave unit 1",
      },
    ],
  },
};

export default function VisitPage() {
  return (
    <main className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(visitJsonLd()) }}
      />
      <Navbar />
      <section className={styles.hero}>
        <p className={styles.kicker}>Supporting how-to-reach · Adults 19+</p>
        <h1>Find unit 1 at The Planet X Cannabis — Islington &amp; Steeles</h1>
        <p>
          This page is only the door-finding guide for{" "}
          <strong>{storeNap.brand}</strong>. NAP, hours, and the map hub stay on
          the <Link href="/">North York homepage</Link>. Google Business Profile
          should keep pointing at that homepage root — not this URL.
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
          <Link className={styles.secondary} href="/#contact">
            Homepage visit hub
          </Link>
        </div>
        <SeoMesh current={MESH.visit} heading="Mesh — homepage, geo, 24-hour, tiers" />
      </section>

      <section className={styles.section}>
        <h2>Unit 1 in the Islington plaza</h2>
        <p>
          {storeNap.brand} is <strong>unit 1</strong> at 3005 Islington Avenue in
          North York, on the {storeNap.intersection} edge of Humber Summit. The
          walk-in is the unit 1 plaza entrance — look for the Planet X
          storefront on the Islington frontage, not a numbered bay behind the
          lot. Adults 19+ with ID can walk in any hour the site lists:{" "}
          {storeNap.hoursDetail}.
        </p>
        <p>
          If a maps pin drops you in the wider plaza, stay on Islington Avenue
          until you see unit 1. Calling{" "}
          <a href={`tel:${storeNap.phoneIntl}`}>{storeNap.phoneDisplay}</a> is
          faster than circling the lot after dark.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Steeles, Islington, and Humber Summit context</h2>
        <p>
          This is a North York neighbourhood walk-in — Islington, Steeles,
          Humber Summit, and trips toward York University / Steeles West — not
          a Toronto city-head dispensary page. Drivers usually approach on
          Islington Avenue or Steeles Avenue West and turn into the plaza at
          3005.
        </p>
        <ul>
          <li>
            Neighbourhood: Humber Summit, North York, postal code M9L 2K9
          </li>
          <li>Corridor: Islington Avenue at Steeles Avenue West</li>
          <li>Nearby orientation: York University / Steeles West, Humber College</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>TTC along Islington and Steeles</h2>
        <p>{storeNap.transitNote}</p>
        <p>
          After you step off along Islington or Steeles, walk to 3005 Islington
          Ave and look for unit 1. The homepage keeps the live NAP block; this
          page only explains the last hundred metres.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Parking</h2>
        <p>{storeNap.parkingNote}</p>
        <p>
          Overnight and late-shift visits still need a legal stall. Plaza spaces
          closest to unit 1 fill first; if you use the street, read the signs
          before you lock the car.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Map and visit hub</h2>
        <p>
          The map below is the same 3005 Islington Ave unit 1 pin used on the
          homepage. Use it to confirm the plaza, then walk to unit 1.
        </p>
        <StoreMap className={styles.mapFrame} />
        <p className={styles.note}>
          GBP Website stays <strong>{storeNap.origin}/</strong>. /visit supports
          reach only. Browse the{" "}
          <Link href={MESH.geo}>North York dispensary</Link> corridor page, the{" "}
          <Link href={MESH.hours24}>24-hour Islington &amp; Steeles</Link>{" "}
          overnight guide, or the <Link href="/delivery">North York delivery menu</Link>{" "}
          after you know the door.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Visit FAQs</h2>
        {VISIT_FAQS.map((faq) => (
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
