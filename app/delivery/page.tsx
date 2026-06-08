import type { Metadata } from "next";
import DeliveryContent from "./DeliveryContent";

export const metadata: Metadata = {
  title: "Delivery Coming Soon — Planet x Cannabis | North York",
  description: "Get notified when Planet x Cannabis launches same-day weed delivery across North York and surrounding areas.",
  alternates: {
    canonical: "https://theplanetx.ca/delivery",
  },
};

export default function DeliveryPage() {
  return <DeliveryContent />;
}
