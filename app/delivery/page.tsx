import type { Metadata } from "next";
import DeliveryContent from "./DeliveryContent";

export const metadata: Metadata = {
  title: "Delivery Coming Soon Planet X Cannabis | North York",
  description:
    "Get notified when Planet X Cannabis prepares delivery updates for Islington Avenue and Steeles Avenue West, North York, and nearby local areas.",
  alternates: {
    canonical: "https://theplanetx.ca/delivery",
  },
};

export default function DeliveryPage() {
  return <DeliveryContent />;
}
