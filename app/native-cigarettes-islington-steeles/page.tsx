import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SeoMesh from "../components/SeoMesh";
import { faqPageJsonLd, jsonLdScript, storeNap } from "../lib/storeNap";
import { MESH, NATIVE_CIG_FAQS } from "../lib/seoMesh";
import styles from "../visit/visit.module.css";

const PAGE_URL = `${storeNap.origin}${MESH.nativeCigs}`;

export const metadata: Metadata = {
  title: { absolute: "Native Cigarettes Islington & Steeles | Planet X Cannabis" },
  description:
    "Adults 19+: Native cigarettes at The Planet X Cannabis, 3005 Islington Ave unit 1, Humber Summit. Check /items/cigarettes for the current shelf. No health claims.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    url: PAGE_URL,
    title: "Native Cigarettes Islington & Steeles | Planet X Cannabis",
    description:
      "Cigarette category for the unit 1 plaza door on Islington Avenue at Steeles Avenue West. Confirm the live menu before you visit.",
  },
};

export default function NativeCigarettesIslingtonSteelesPage() {
  return (
    <main className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(faqPageJsonLd(NATIVE_CIG_FAQS, PAGE_URL)) }}
      />
      <Navbar />
      <section className={styles.hero}>
        <p className={styles.kicker}>Islington &amp; Steeles · Humber Summit · Adults 19+</p>
        <h1>Native cigarettes at unit 1 on Islington &amp; Steeles</h1>
        <p>
          <strong>{storeNap.brand}</strong> keeps a retail cigarette category at{" "}
          {storeNap.addressLine}. This page owns that category for the Humber Summit plaza —
          the unit 1 door on the Islington Avenue frontage, where Steeles Avenue West meets the
          lot. It is a merchandise page for one walk-in. It is not a city tobacco directory,
          not a clinic, and not a cultural or Nation statement.
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
          <Link className={styles.primary} href={MESH.cigsMenu}>
            Open the cigarette menu
          </Link>
          <Link className={styles.secondary} href={MESH.visit}>
            How to find unit 1
          </Link>
          <Link className={styles.secondary} href="/">
            Homepage visit hub
          </Link>
        </div>
      </section>

      <section className={styles.section}>
        <h2>The plaza counter, not a second shop</h2>
        <p>
          After you turn into the lot at 3005 Islington Ave, stay on the Islington-facing
          storefront until the door marked unit 1. That single bay is the cigarette counter
          this page describes. A pin that lands deeper in the plaza, or on a neighbouring
          unit, is the wrong door. Steeles Avenue West gets you to the intersection; it does
          not add another Planet X cigarette counter.
        </p>
        <p>
          The live names, pack sizes, and posted prices sit on{" "}
          <Link href={MESH.cigsMenu}>/items/cigarettes</Link>. Use that category as the
          planning list, then match the pack at the counter. This page does not freeze a
          brand lineup or a price. If one carton matters, call{" "}
          <a href={`tel:${storeNap.phoneIntl}`}>{storeNap.phoneDisplay}</a> before you leave
          Humber Summit.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Who walks in from Steeles West</h2>
        <p>
          Shoppers already on Islington Avenue, coming along Steeles Avenue West, or finishing
          a York University / Steeles West bus trip use this same unit 1 entrance. Adults 19+
          show government-issued photo ID. Staff can point at the current cigarette shelf the
          same way they point at flower. They do not give health advice.
        </p>
        <p>
          Listed hours are {storeNap.hoursDetail}. A late bus still uses the same plaza door.
          Selection overnight is confirmed on the shelf, not by this page. Open-now questions
          belong on the <Link href={MESH.hours24}>24-hour Islington &amp; Steeles</Link> guide.
          Plaza parking and the TTC walk from the stop belong on the{" "}
          <Link href={MESH.visit}>visit page</Link>. Nicotine vapes are a separate corridor
          page.
        </p>
        <p>
          This copy does not make health, ceremonial, or cultural claims. “Native cigarettes”
          is the retail category name only.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Cigarette questions for this corridor</h2>
        {NATIVE_CIG_FAQS.map((faq) => (
          <div key={faq.q}>
            <h3>{faq.q}</h3>
            <p>{faq.a}</p>
          </div>
        ))}
        <SeoMesh current={MESH.nativeCigs} heading="Mesh — hub, visit, geo, 24-hour, tiers" />
      </section>
      <Footer />
    </main>
  );
}
