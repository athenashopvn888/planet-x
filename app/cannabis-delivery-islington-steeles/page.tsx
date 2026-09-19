import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SeoMesh from "../components/SeoMesh";
import { jsonLdScript, storeNap } from "../lib/storeNap";
import { DELIVERY_FAQS, MESH, TIER_MESH } from "../lib/seoMesh";
import styles from "../visit/visit.module.css";

const PAGE_PATH = MESH.delivery;
const PAGE_URL = `${storeNap.origin}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: {
    absolute: "Cannabis Delivery Islington & Steeles | Planet X Cannabis",
  },
  description:
    "Cannabis delivery from 3005 Islington Ave unit 1 for Islington, Steeles, Humber Summit, and York University area streets. $60 product minimum. Adults 19+. Not city-wide Toronto delivery.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    url: PAGE_URL,
    title: "Cannabis Delivery Islington & Steeles | Planet X Cannabis",
    description:
      "Neighbourhood cannabis delivery from The Planet X Cannabis at unit 1 — Islington & Steeles / Humber Summit / North York corridor. Adults 19+.",
    images: [
      {
        url: storeNap.imageUrl,
        width: 1200,
        height: 630,
        alt: "Cannabis delivery from Planet X Cannabis at 3005 Islington Ave unit 1, North York",
      },
    ],
  },
};

function deliveryJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: "Cannabis delivery from unit 1 — Islington, Steeles, Humber Summit",
        description:
          "Corridor cannabis delivery from The Planet X Cannabis at 3005 Islington Ave unit 1, North York. Islington Avenue, Steeles Avenue West, Humber Summit, and York University area streets only.",
        isPartOf: { "@id": `${storeNap.origin}/#website` },
        about: { "@id": `${storeNap.origin}/#store` },
        primaryImageOfPage: storeNap.imageUrl,
      },
      {
        "@type": "FAQPage",
        "@id": `${PAGE_URL}#faq`,
        url: PAGE_URL,
        mainEntity: DELIVERY_FAQS.map((faq) => ({
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

export default function CannabisDeliveryIslingtonSteelesPage() {
  return (
    <main className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(deliveryJsonLd()) }}
      />
      <Navbar />
      <section className={styles.hero}>
        <p className={styles.kicker}>
          Corridor delivery · Islington &amp; Steeles · Adults 19+
        </p>
        <h1>
          Cannabis delivery from unit 1 — Islington, Steeles, Humber Summit
        </h1>
        <p>
          <strong>{storeNap.brand}</strong> coordinates delivery from{" "}
          {storeNap.streetAddress}, {storeNap.city}, {storeNap.region}{" "}
          {storeNap.postalCode} when a driver can take the order. This page owns
          neighbourhood weed-delivery intent for the Islington–Steeles / Humber
          Summit / North York corridor. It is not a city-wide Toronto delivery
          landing. The live catalog stays on the{" "}
          <Link href={MESH.deliveryMenu}>North York delivery menu</Link>. The{" "}
          <Link href={MESH.home}>homepage</Link> remains the NAP, hours, and map
          hub.
        </p>
        <address className={styles.nap}>
          <div>
            <strong>Dispatch from</strong>
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
            <strong>Walk-in hours</strong>
            <div>{storeNap.hoursDetail}</div>
          </div>
        </address>
        <div className={styles.actions}>
          <Link className={styles.primary} href={MESH.deliveryMenu}>
            Open delivery menu
          </Link>
          <a className={styles.secondary} href={`tel:${storeNap.phoneIntl}`}>
            Call {storeNap.phoneDisplay}
          </a>
        </div>
        <SeoMesh
          current={PAGE_PATH}
          heading="Mesh — hub, visit, geo, 24-hour, Big Three, tiers"
        />
      </section>

      <section className={styles.section}>
        <h2>Which streets this corridor delivery covers</h2>
        <p>
          Plan around Islington Avenue, Steeles Avenue West, Humber Summit, and
          York University area addresses. The dispatcher confirms the street
          before you wait on a drop. If the pin is outside that corridor, walk
          in at unit 1 instead — {storeNap.hoursDetail}.
        </p>
        <ul>
          <li>Dispatch pin: 3005 Islington Ave unit 1, North York, ON M9L 2K9</li>
          <li>Corridor: {storeNap.intersection}</li>
          <li>Neighbourhood: {storeNap.neighbourhood}</li>
          <li>Product minimum on the live menu: $60</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>How a drop from unit 1 actually works</h2>
        <p>
          Browse the <Link href={MESH.deliveryMenu}>delivery menu</Link>, note
          names and weights, then use LIVE ORDER / Web Chat so the Planet X
          dispatcher can confirm availability, timing, and the $60 product
          minimum. New customers complete the private selfie-with-ID step in
          chat. Adults 19+ only. This page does not invent stock, prices, or
          arrival windows beyond that live process.
        </p>
        <p>
          Prefer the door? Overnight and open-now walk-ins use the{" "}
          <Link href={MESH.hours24}>24-hour Islington &amp; Steeles</Link> page.
          Plaza entrance, TTC, and parking live on{" "}
          <Link href={MESH.visit}>how to find unit 1</Link>.
        </p>
      </section>

      <section className={styles.section}>
        <h2>What the delivery catalog sits beside</h2>
        <p>
          Flower on the walk-in menu is still sorted into five published tiers.
          Delivery catalog labels can differ from those in-store lane names —
          confirm the item with the dispatcher. This neighbourhood page does not
          replace the collection URLs.
        </p>
        <ul>
          {TIER_MESH.map((tier) => (
            <li key={tier.href}>
              <Link href={tier.href}>{tier.label}</Link>
            </li>
          ))}
        </ul>
        <p>
          Cigarettes and nicotine vapes are sold at this door too. Use the{" "}
          <Link href={MESH.nativeCigs}>Native cigarettes</Link> neighbourhood
          guide or the <Link href={MESH.nicotineVape}>nicotine vape</Link> page
          (live category: <Link href={MESH.vapesMenu}>/items/vapes</Link>) if
          that is the trip — then confirm in store or with the dispatcher.
        </p>
      </section>

      <section className={styles.section}>
        <h2>How this page fits the visit hub</h2>
        <p>
          Homepage = address, phone, hours, map. /visit = plaza door, TTC,
          parking. North York geo = weed corridor owner. 24-hour URL = open-now
          walk-in. This URL = corridor cannabis delivery. Google Business
          Profile should keep pointing at the homepage root — not this delivery
          slug.
        </p>
        <SeoMesh
          current={PAGE_PATH}
          heading="Back to hub, visit, geo, 24-hour, Big Three, and tiers"
        />
      </section>

      <section className={styles.section}>
        <h2>Delivery FAQs — Islington &amp; Steeles corridor</h2>
        {DELIVERY_FAQS.map((faq) => (
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
