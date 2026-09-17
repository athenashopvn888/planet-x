import { storeNap } from "../lib/storeNap";

type StoreMapProps = {
  className?: string;
  title?: string;
};

export default function StoreMap({
  className,
  title = `${storeNap.brand} map at ${storeNap.streetAddress}`,
}: StoreMapProps) {
  return (
    <iframe
      className={className}
      title={title}
      src={storeNap.mapEmbedUrl}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  );
}
