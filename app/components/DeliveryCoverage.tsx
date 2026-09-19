import Link from "next/link";
import { storeNap } from "../lib/storeNap";

const areas = ["North York", "Humber Summit", "Islington Avenue", "Steeles Avenue West", "York University"];

export function DeliveryCoverage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.theplanetx.ca/weed-dispensary-north-york#delivery-service",
    name: "The Planet X Cannabis North York delivery",
    serviceType: "Cannabis delivery information",
    provider: { "@id": "https://www.theplanetx.ca/#store" },
    url: "https://www.theplanetx.ca/delivery",
    areaServed: [
      { "@type": "GeoCircle", geoMidpoint: { "@type": "GeoCoordinates", latitude: storeNap.latitude, longitude: storeNap.longitude }, geoRadius: 12000 },
      ...areas.map((name) => ({ "@type": "AdministrativeArea", name })),
    ],
  };

  return <section style={{ maxWidth: 1040, margin: "0 auto", padding: "24px 24px 64px" }}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <h2>North York delivery from The Planet X Cannabis</h2>
    <p>Delivery is coordinated from unit 1 at 3005 Islington Ave when a driver can take the order. Plan around the Islington / Steeles / Humber Summit / York University area — not a city-wide Toronto drop.</p>
    <p>The dispatcher confirms the street, timing, and $60 product minimum before anything leaves the North York store. If your address sits outside that corridor, walk in instead: Open 24 Hours at {storeNap.addressLine}.</p>
    <p><Link href="/cannabis-delivery-islington-steeles">Islington &amp; Steeles delivery corridor</Link> · <Link href="/delivery">Check current North York delivery information</Link> · <Link href="/visit">How to find unit 1</Link></p>
  </section>;
}
