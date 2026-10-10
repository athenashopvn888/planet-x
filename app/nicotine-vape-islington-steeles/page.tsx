import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SeoMesh from "../components/SeoMesh";
import { faqPageJsonLd, jsonLdScript, storeNap } from "../lib/storeNap";
import { MESH, NICOTINE_VAPE_FAQS } from "../lib/seoMesh";
import styles from "../visit/visit.module.css";
import VapeActionPanel from "../components/VapeActionPanel";

const PAGE_URL = `${storeNap.origin}${MESH.nicotineVape}`;

const FEATURED_NICOTINE_VAPES = [
  { name: "ENVI DRIP’N – 5% | 28K PUFFS", image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/1092-Envi-Dripn-28K.webp", sourceSlug: "envi-dripn-5-28k-puffs" },
  { name: "GEEK PROMAX – 5% | 30K PUFFS", image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/GEEK-PROMAX.jpg", sourceSlug: "geek-promax-5-30k-puffs" },
  { name: "GEEK UNIVERSE 25k PUFFS", image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/geek_universe_pulse_x_25k.webp", sourceSlug: "geek-universe-25k-puffs" },
  { name: "OVNS 10000 – 5% | 10K PUFFS", image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/1081OVNS10000.jpg", sourceSlug: "ovns-10000-5-10k-puffs" },
  { name: "OVNS DISPOSABLE – 5% | 8ML | MANY FLAVORS", image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/OVNS500x500HQ.webp", sourceSlug: "ovns-disposable-5-8ml-many-flavors" },
  { name: "OVNS PIONEER – 5% | 22K PUFFS", image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/OVNS_PIONEER_5_22K_PUFFS.webp", sourceSlug: "ovns-pioneer-5-22k-puffs" },
] as const;

export const metadata: Metadata = {
  title: { absolute: "Nicotine Vape Islington & Steeles | Planet X Cannabis" },
  description:
    "Adults 19+: nicotine vapes at The Planet X Cannabis, 3005 Islington Ave unit 1, Humber Summit. The live category is /items/vapes. Nicotine is addictive.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    url: PAGE_URL,
    title: "Nicotine Vape Islington & Steeles | Planet X Cannabis",
    description:
      "Corridor nicotine-vape page for the unit 1 door on Islington & Steeles. THC vapes stay on a separate menu. Nicotine is addictive.",
  },
};

export default function NicotineVapeIslingtonSteelesPage() {
  return (
    <main className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(faqPageJsonLd(NICOTINE_VAPE_FAQS, PAGE_URL)) }}
      />
      <Navbar />
      <section className={styles.hero}>
        <p className={styles.kicker}>Islington &amp; Steeles · Nicotine only · Adults 19+</p>
        <h1>Nicotine vapes at the Humber Summit plaza on Islington &amp; Steeles</h1>
        <p>
          <strong>{storeNap.brand}</strong> lists nicotine vapes at {storeNap.streetAddress},
          the plaza walk-in where Islington Avenue meets Steeles Avenue West in Humber Summit.
          This URL is the neighbourhood owner for that nicotine shelf. Current devices stay on{" "}
          <Link href={MESH.vapesMenu}>/items/vapes</Link>.
        </p>
        <p>Adults 19+. Nicotine is addictive.</p>
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
          <Link className={styles.primary} href={MESH.vapesMenu}>
            Browse nicotine vapes
          </Link>
          <Link className={styles.secondary} href="/items/vape-disposables">
            THC vape category
          </Link>
          <Link className={styles.secondary} href={MESH.visit}>
            How to find unit 1
          </Link>
        </div>
        <VapeActionPanel compact />
      </section>

      <section className={styles.section} id="featured-vapes">
        <h2>Six named nicotine listings from the unit 1 menu</h2>
        <p>
          These six item pages have been checked against the nicotine menu at this store:
          ENVI, Geek, and OVNS names, including one OVNS listing that identifies itself as a
          disposable. That disposable wording stays attached to that one item. A puff count in
          a name only separates listings. It is not a lifespan, strength, or superiority claim.
          Nothing here is a stock promise or a price.
        </p>
        <ul>
          {FEATURED_NICOTINE_VAPES.map((product) => (
            <li key={product.sourceSlug}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={product.image} alt={product.name} width={72} height={72} />
              <Link href={`/item/${product.sourceSlug}`}>{product.name}</Link>
            </li>
          ))}
        </ul>
        <p>
          Open <Link href={MESH.vapesMenu}>/items/vapes</Link> before you ride to the plaza.
          THC and cannabis vapour products are excluded from this page and live under{" "}
          <Link href="/items/vape-disposables">/items/vape-disposables</Link>.
        </p>
      </section>

      <section className={styles.section}>
        <h2>One civic door in Humber Summit</h2>
        <p>
          People searching nicotine vapes around Islington Avenue, Steeles Avenue West, or the
          York University / Steeles West buses should finish at unit 1, not at a downtown
          Toronto vape result. The nicotine list and the THC disposable list share this one
          address and stay separate in the menu. A city-wide page is the wrong owner for this pin.
        </p>
        <p>
          Adults 19+ bring government-issued photo ID. Listed hours are {storeNap.hoursDetail}.
          The <Link href={MESH.hours24}>24-hour Islington &amp; Steeles</Link> page owns
          open-now questions. The <Link href={MESH.visit}>visit page</Link> owns plaza parking
          and the walk from the Islington or Steeles stop. This page does not make health or
          cessation claims.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Nicotine questions for this corridor</h2>
        {NICOTINE_VAPE_FAQS.map((faq) => (
          <div key={faq.q}>
            <h3>{faq.q}</h3>
            <p>{faq.a}</p>
          </div>
        ))}
        <SeoMesh current={MESH.nicotineVape} heading="Mesh — hub, visit, geo, 24-hour, tiers" />
      </section>
      <Footer />
    </main>
  );
}
