import type { Metadata, ResolvingMetadata } from "next";
import HomePageClient from "./HomePageClient";
import { CODED_BANNERS } from "./lib/fleet/config";
import { getFleetContent } from "./lib/fleetContent";
import { HOME_DOC_TITLE } from "./lib/homeDelivery";
import { getLiveMenu } from "./lib/liveMenu";

export const dynamic = "force-dynamic";

export async function generateMetadata(
  _props: {
    params: Promise<Record<string, never>>;
    searchParams: Promise<Record<string, string | string[] | undefined>>;
  },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const previous = await parent;
  const openGraph = previous.openGraph;
  const twitter = previous.twitter;
  return {
    title: { absolute: HOME_DOC_TITLE },
    openGraph: openGraph
      ? {
          type: "type" in openGraph ? openGraph.type : "website",
          locale: openGraph.locale,
          url: openGraph.url ?? undefined,
          siteName: openGraph.siteName,
          title: HOME_DOC_TITLE,
          description: openGraph.description,
          images: openGraph.images,
        }
      : { title: HOME_DOC_TITLE },
    twitter: twitter
      ? {
          card: twitter.card,
          title: HOME_DOC_TITLE,
          description: twitter.description ?? undefined,
          images: twitter.images,
        }
      : { title: HOME_DOC_TITLE },
  };
}

export default async function Page() {
  const [{ flowers }, fleet] = await Promise.all([getLiveMenu(), getFleetContent()]);
  const contentBanners = fleet.active && fleet.banners.some((banner, index) => banner !== CODED_BANNERS[index]) ? fleet.banners : undefined;
  return <HomePageClient initialFlowers={flowers} contentBanners={contentBanners} />;
}
