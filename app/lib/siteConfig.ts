const cigaretteSwitch = process.env.NEXT_PUBLIC_SHOW_CIGARETTES?.trim().toLowerCase();
export const SHOW_CIGARETTES = cigaretteSwitch === "true";
export const isCigaretteCategory = (value: string | null | undefined) => ["cigarettes", "tobacco"].includes(value?.trim().toLowerCase() ?? "");
export const isCigarettePath = (value: string | null | undefined) => { const path = value?.trim().toLowerCase() ?? ""; return path === "cigarettes" || path.startsWith("cigarettes/") || path.includes("/cigarettes") ||
    path === "tobacco" ||
    path.startsWith("tobacco/") ||
    path.includes("/tobacco") || path.includes("native-cigarette") || path.includes("grabba") || path.includes("native-smokes/native-cigarettes-guide"); };
const PRESERVED_SMOKE = /(?:backwoods|cigarillos?|rolling[- ]?papers?|raw[- ]?papers?)/i;
const isPreservedSmokeAccessory = (values: Array<string | null | undefined>) =>
  values.some((value) => PRESERVED_SMOKE.test(value ?? ""));
const isPreservedSmokeAccessoryEntry = (value: Record<string, unknown>) =>
  isPreservedSmokeAccessory(Object.values(value).filter((entry): entry is string => typeof entry === "string"));
export const isPreservedSmokeItem = (item: { name?: string | null; slug?: string | null }) =>
  PRESERVED_SMOKE.test(`${item.name ?? ""} ${item.slug ?? ""}`);
export const isGrabbaItem = (item: { name?: string | null; slug?: string | null }) =>
  /grabba/i.test(`${item.name ?? ""} ${item.slug ?? ""}`);
export function omitGrabbaCopy(value: string): string {
  if (SHOW_CIGARETTES || !/grabba/i.test(value)) return value;
  const lines = value.split("\n").flatMap((line) => {
    if (!/grabba/i.test(line)) return [line];
    if (line.includes(";")) {
      const kept = line.split(";").map((part) => part.trim()).filter((part) => part && !/grabba/i.test(part));
      return kept.length ? [kept.join("; ")] : [];
    }
    if (!PRESERVED_SMOKE.test(line)) return [];
    const cleaned = line
      .replace(/\s*(?:,|&|\/|and|or)?\s*\bgrabba(?:\s+shaker)?(?:\s*\*[^*]*\*)?\b/gi, "")
      .replace(/\s{2,}/g, " ")
      .replace(/\s+([,.;:!?])/g, "$1")
      .replace(/^[,\s]+|[,\s]+$/g, "")
      .trim();
    return cleaned ? [cleaned] : [];
  });
  return lines.join("\n").replace(/\n{3,}/g, "\n\n").trim();
}
function omitGrabbaFromValue<T>(value: T): T {
  if (typeof value === "string") return omitGrabbaCopy(value) as T;
  if (Array.isArray(value)) return value.map((entry) => omitGrabbaFromValue(entry)) as T;
  if (value && typeof value === "object") {
    const prototype = Object.getPrototypeOf(value);
    if (prototype !== Object.prototype && prototype !== null) return value;
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>).map(([key, entry]) => [key, omitGrabbaFromValue(entry)]),
    ) as T;
  }
  return value;
}
export const isCigaretteGuide = (value: { lane?: string; slug?: string; preferredCategoryPath?: string }) => {
  const candidates = [value.slug, value.preferredCategoryPath];
  if (isPreservedSmokeAccessory(candidates)) return false;
  return value.lane === "native_cig" || candidates.some(isCigarettePath);
};
export const isCigaretteEntry = (value: Record<string, unknown>) => {
  const category = typeof value.category === "string" ? value.category : undefined;
  const lane = typeof value.lane === "string" ? value.lane : undefined;
  const candidates = [value.slug, value.href, value.path, value.url, value.key, value.name, value.label, value.q, value.question, value.heading, value.eyebrow]
    .filter((entry): entry is string => typeof entry === "string");
  if (isPreservedSmokeAccessory(candidates)) return false;
  return lane === "native_cig" || isCigaretteCategory(category) || candidates.some(isCigarettePath);
};

export const filterCigaretteItems = <T extends { category?: string; name?: string | null; slug?: string | null }>(items: readonly T[]): T[] =>
  SHOW_CIGARETTES ? [...items] : items.filter((item) => !isGrabbaItem(item) && (isPreservedSmokeItem(item) || !isCigaretteCategory(item.category)));

export const filterCigaretteEntries = <T extends Record<string, unknown>>(entries: readonly T[]): T[] =>
  SHOW_CIGARETTES ? [...entries] : entries.filter((entry) => !isCigaretteEntry(entry));
function stripCigaretteMentions(value: string) {
  return value
    .replace(/(?:(?:native\s+)?(?:cigarettes?|tobacco)|grabba(?:\s+shaker)?)\s*,\s*/gi, "")
    .replace(/\s*,\s*(?:and\s+)?(?:(?:native\s+)?(?:cigarettes?|tobacco)|grabba(?:\s+shaker)?)/gi, "")
    .replace(/\s+(?:and|or)\s+(?:(?:native\s+)?(?:cigarettes?|tobacco)|grabba(?:\s+shaker)?)/gi, "")
    .replace(/(?:(?:native\s+)?(?:cigarettes?|tobacco)|grabba(?:\s+shaker)?)/gi, "")
    .replace(/\s{2,}/g, " ")
    .replace(/\s+([,.;:!?])/g, "$1")
    .trim();
}

export function cigaretteSafeContent<T>(value: T): T {
  if (SHOW_CIGARETTES) return value;
  if (typeof value === "string") return stripCigaretteMentions(value) as T;
  if (Array.isArray(value)) {
    const visibleEntries = value.filter((entry) =>
      !(entry && typeof entry === "object" && isCigaretteEntry(entry as Record<string, unknown>)),
    );
    return visibleEntries.map((entry) =>
      entry && typeof entry === "object" && isPreservedSmokeAccessoryEntry(entry as Record<string, unknown>)
        ? omitGrabbaFromValue(entry)
        : cigaretteSafeContent(entry),
    ) as T;
  }
  if (value && typeof value === "object") {
    const prototype = Object.getPrototypeOf(value);
    if (prototype !== Object.prototype && prototype !== null) return value;
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>).map(([key, entry]) => [key, cigaretteSafeContent(entry)]),
    ) as T;
  }
  return value;
}
