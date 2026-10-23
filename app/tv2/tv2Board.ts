import { isPreservedSmokeItem } from "../lib/siteConfig.ts";

export type Tv2BoardItem = { category?: string; name?: string | null; slug?: string | null };

export type Tv2BoardCard = {
  id: string;
  title: string;
  accent: string;
  preset: string;
  filter: (item: Tv2BoardItem) => boolean;
};

const CARD_CONFIG: Tv2BoardCard[] = [
  { id: "PREROLLS_ADDONS", title: "🔥 PREROLLS & ADD ONS", accent: "#dc2626", filter: (it) => it.category === "PREROLLS" || it.category === "ADD ONS", preset: "🔥 START SLOW · 2–3 PUFFS · WAIT 5 MIN" },
  { id: "VAPES", title: "💨 VAPES", accent: "#0284c7", filter: (it) => it.category === "VAPE PENS" || it.category === "VAPE DISPOSABLE", preset: "💨 1–2 PUFFS · WAIT 2–3 MIN · REPEAT" },
  { id: "EDIBLES", title: "🍬 EDIBLES", accent: "#7c3aed", filter: (it) => it.category === "EDIBLES", preset: "🍬 START SMALL · WAIT 45 MIN · THEN MORE" },
  { id: "CONCENTRATES", title: "⚗️ CONCENTRATES", accent: "#b45309", filter: (it) => it.category === "CONCENTRATES", preset: "⚠️ VERY STRONG · TINY AMOUNT · WAIT 10–15 MIN" },
  { id: "CIGARETTES", title: "🚬 CIGARETTES", accent: "#78350f", filter: (it) => it.category === "CIGARETTES", preset: "" },
  { id: "MAGIC", title: "🍄 MAGIC & OTHERS", accent: "#9333ea", filter: (it) => it.category === "MAGIC & OTHERS", preset: "🍫 START SMALL · WAIT 45 MIN · THEN MORE" },
];

/** Cigarettes card follows the live TV flag. Off keeps today's hidden card and moves preserved smokes onto pre-rolls. */
export function tv2CardsForFlag(showCigarettes: boolean): Tv2BoardCard[] {
  if (showCigarettes) return CARD_CONFIG;
  return CARD_CONFIG.filter((card) => card.id !== "CIGARETTES").map((card) => card.id === "PREROLLS_ADDONS"
    ? { ...card, filter: (it) => it.category === "PREROLLS" || it.category === "ADD ONS" || isPreservedSmokeItem(it) }
    : card);
}

/** /tv add-ons rail. Preserved smokes stay on this rail only while the cigarette card is off. */
export function tvAddonItems<T extends Tv2BoardItem>(items: T[], showCigarettes: boolean): T[] {
  return items.filter((item) => item.category === "ADD ONS" || item.category === "PREROLLS" || (!showCigarettes && isPreservedSmokeItem(item)));
}
