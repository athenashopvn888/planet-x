import { cache } from "react";
import {
  CIG_WORDING_FALLBACK,
  decideCigaretteGuide,
  decideCigaretteSurface,
  reconcileSurfaceItems,
  type CigaretteSurfaceDecision,
  type CigaretteWording,
} from "./cigDecision";
import { allItems, type ItemProduct } from "./products";
import { SHOW_CIGARETTES, cigaretteEnvHardOff } from "./siteConfig";

export type CigaretteSnapshot = {
  web: CigaretteSurfaceDecision;
  tv: CigaretteSurfaceDecision;
  guides: CigaretteSurfaceDecision;
  wording: CigaretteWording;
  live: boolean;
  items: ItemProduct[];
};

export type PublicCigaretteState = {
  web: boolean;
  tv: boolean;
  wording: CigaretteWording;
};

function snapshotFrom(cig: unknown, items: ItemProduct[], live: boolean, errored: boolean): CigaretteSnapshot {
  const web = decideCigaretteSurface({ cig, items, surface: "web", errored });
  const tv = decideCigaretteSurface({ cig, items, surface: "tv", errored });
  const guides = decideCigaretteGuide({ cig, items, errored });
  return { web, tv, guides, wording: web.wording, live, items };
}

function codedOff(): CigaretteSnapshot {
  const wording = CIG_WORDING_FALLBACK;
  const off = { show: false, reason: "env" as const, wording };
  return {
    web: off,
    tv: off,
    guides: { show: false, reason: "env" },
    wording,
    live: false,
    items: [],
  };
}

type CigaretteDataset = {
  source?: string;
  items?: ItemProduct[];
  cig?: unknown;
};

export async function readCigaretteFeed(): Promise<CigaretteSnapshot> {
  // Coded behaviour is the build switch. An unset or non-true value keeps
  // cigarettes hidden, which is what the existing redirects already do.
  if (!SHOW_CIGARETTES || cigaretteEnvHardOff()) return codedOff();
  try {
    const tvStock = await import("./tvStock.js") as { getCigaretteDataset?: (options: { staticFlowers: unknown[]; staticItems: ItemProduct[] }) => Promise<CigaretteDataset> };
    if (typeof tvStock.getCigaretteDataset !== "function") {
      return snapshotFrom(null, allItems, false, true);
    }
    const dataset = await tvStock.getCigaretteDataset({ staticFlowers: [], staticItems: allItems });
    const live = dataset?.source === "live";
    const items = Array.isArray(dataset?.items) && dataset.items.length ? dataset.items : allItems;
    const cig = dataset?.cig ?? null;
    return snapshotFrom(cig, items, live, !live && !cig);
  } catch {
    return snapshotFrom(null, allItems, false, true);
  }
}

export const getCigaretteSnapshot = cache(readCigaretteFeed);

export function toPublicCigaretteState(snap: CigaretteSnapshot): PublicCigaretteState {
  return { web: snap.web.show, tv: snap.tv.show, wording: snap.wording };
}

export { reconcileSurfaceItems };
