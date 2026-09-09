import Link from "next/link";

const areas = ["North York", "Toronto", "Vaughan", "Brampton", "Etobicoke", "Mississauga"];

export function DeliveryCoverage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.theplanetx.ca/weed-dispensary-north-york#delivery-service",
    name: "The Planet X Cannabis delivery coverage",
    serviceType: "Cannabis delivery information",
    provider: { "@id": "https://www.theplanetx.ca/#store" },
    url: "https://www.theplanetx.ca/delivery",
    areaServed: [
      { "@type": "GeoCircle", geoMidpoint: { "@type": "GeoCoordinates", latitude: 43.7596082, longitude: -79.5708883 }, geoRadius: 50000 },
      ...areas.map((name) => ({ "@type": "City", name })),
    ],
  };

  return <section style={{ maxWidth: 1040, margin: "0 auto", padding: "24px 24px 64px" }}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <h2>Delivery Coverage from The Planet X Cannabis</h2>
    <p>Delivery is coordinated from the North York store and confirmed when an order is placed. A practical planning area is approximately 50 km from Islington Avenue, including North York, Toronto, Vaughan, Brampton, Etobicoke and Mississauga.</p>
    <p>Longer trips toward Barrie, Kitchener or Hamilton may be available when a driver is already positioned in that area. Extended coverage is not guaranteed, so confirm the destination and timing with the dispatcher before relying on delivery.</p>
    <p><Link href="/delivery">Check current North York delivery information</Link></p>
  </section>;
}
