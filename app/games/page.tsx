import type { Metadata } from "next";
import GamesContent from "./GamesContent";
import { resolveDocumentTitle } from "../lib/storeNap";

export const metadata: Metadata = {
  title: resolveDocumentTitle("Cannabis Arcade Games — Planet x Cannabis | North York"),
  description: "Play free online cannabis-themed games like Flappy Bud and Snake Munchies while you wait at Planet x Cannabis.",
  alternates: {
    canonical: "https://www.theplanetx.ca/games",
  },
};

export default function GamesPage() {
  return <GamesContent />;
}
