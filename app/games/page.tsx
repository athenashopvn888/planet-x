import type { Metadata } from "next";
import GamesContent from "./GamesContent";

export const metadata: Metadata = {
  title: "Cannabis Arcade Games — Planet x Cannabis | North York",
  description: "Play free online cannabis-themed games like Flappy Bud and Snake Munchies while you wait at Planet x Cannabis.",
  alternates: {
    canonical: "https://theplanetx.ca/games",
  },
};

export default function GamesPage() {
  return <GamesContent />;
}
