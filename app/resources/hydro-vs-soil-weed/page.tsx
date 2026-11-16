import type { ReactNode } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { jsonLdScript } from "../../lib/storeNap";
import styles from "./article.module.css";

const TITLE = "Hydro vs Soil Weed: What the Grow Words on a Menu Actually Mean";
const CANONICAL = "https://www.theplanetx.ca/resources/hydro-vs-soil-weed";
const DESCRIPTION = "Hydro vs soil weed is really a question about how a plant was fed, so you can read a menu without getting swept up in the hype.";
const ALLOWED_HREFS = new Set(["/resources/terpenes-on-cannabis-labels", "/visit"]);

const ARTICLE_MARKDOWN = `# Hydro vs Soil Weed: What the Grow Words on a Menu Actually Mean

Last checked: November 10, 2026

Menus love a grow word. "Hydro." "Soil-grown." "Living soil." Sometimes it's the first thing printed after the strain name, like it settles everything. It doesn't. **Hydro vs soil weed** is really a question about *how a plant was fed*, and once you know what each word means, you can read a menu without getting swept up in the hype. The Planet x Cannabis keeps a record-first habit, so here's the dated, plain-language version: what the terms mean, why growers choose one, and what a label can and can't tell you. Adults 19+ only.

## What is hydro weed?

Hydro weed is cannabis grown hydroponically, meaning the plant gets its nutrients from a water-based solution instead of from soil. The USDA's National Agricultural Library defines hydroponics as growing plants "using a water-based nutrient solution rather than soil," sometimes with a growing medium such as vermiculite, coconut coir or perlite holding the roots in place.

That last part trips people up. **Coco** (coconut coir) looks like dirt, but it isn't soil in the grower sense. It's a support material, and the feeding still comes through the water. Growers often lump coco in with hydro for exactly that reason.

## What does "soil" mean on a menu?

"Soil" on a menu means the plant was grown in a soil or soil-based mix, where the growing material itself holds and releases nutrients to the roots. The grower still waters and feeds, but the soil sits between the feed and the plant like a buffer.

### What is living soil cannabis?

Living soil cannabis is grown in a soil mix that's kept biologically active, alive with microbes and fungi. Leafly's glossary describes it as relying on compost and soil amendments rather than bottled nutrients, and many growers reuse the same beds cycle after cycle (often called **no-till**).

## Hydro, soil and living soil, side by side

| | Hydro (incl. coco) | Soil | Living soil |
|---|---|---|---|
| **What holds the roots** | Water, or an inert medium like coco or perlite | Soil or soil-based mix | Biologically active soil |
| **How nutrients arrive** | Dissolved in the water the grower mixes | Through the soil plus the grower's feed | Released by soil life breaking down organic matter |
| **The grower's job** | Measure and adjust the solution closely | Manage watering and feeding | Feed the soil, then let it work |
| **Common grower word** | Control | Tradition | Ecosystem |

Status check, record-style: **what a grow word does tell you** is the method the grower says they used. **What it doesn't tell you** is anything about how a particular batch will look or smell once it's on a shelf. That's not what the word is for.

## Why do growers pick hydro or soil?

Growers pick hydro or soil mostly for control versus tradition. In grower words:

- **Hydro growers** like that they set the feed. They mix the nutrient solution, check it, adjust it, and see the plant respond. More dials, more data, more to manage.
- **Soil growers** like the buffer. Soil holds nutrients and moisture, so small mistakes don't hit the plant as fast. It's the older, more forgiving way to grow.
- **Living soil growers** want the soil to do the feeding. Build it right, keep it alive, and step back.

None of these is "cleaner," "purer" or "stronger." They're different workflows. Good and bad growers exist in every camp, and the method on its own doesn't decide anything about the flower in the jar.

**Indoor vs outdoor, one line:** that's a separate question about *where* the plant grew, not what fed it. A hydro or soil plant can both be grown indoors. **Craft, one line:** "craft" describes a grower's scale and approach, not a growing medium.

## What does "BC hydro weed" mean?

"BC hydro weed" is a nickname you'll still see in searches and old-school chatter. Whatever its backstory, it's a nickname, not a grade, not a guarantee, and not a label term. That's the whole entry.

## Can a cannabis label tell you if it's hydro or soil?

Usually not, because grow method isn't one of the label items Health Canada lists. Its consumer label guide sets out what's **required** (class of cannabis, Total THC and Total CBD on the front, packaging date and lot number, brand name, recommended storage conditions) and what's **optional** (such as strain name or an expiry date). Hydro, soil and living soil aren't on either list.

So if a menu or package mentions the grow method, that's the producer choosing to share it. Treat it as information, not a promise. For the label lines that *are* there, our guide to [terpenes on cannabis labels](/resources/terpenes-on-cannabis-labels) walks through how to read the aroma side of the package.

## Hydro vs soil weed: quick answers

**Is coco the same as soil?** No. Coco is a growing medium usually treated like hydro, because the nutrients come through the water.

**Does "living soil" mean organic?** Not automatically. It describes an active soil ecosystem; "organic" is a separate claim.

**Is the grow method printed on the label?** Not as a required item. Ask, and read whatever the producer chose to include.

## Talk hydro vs soil weed at The Planet x Cannabis

Want to talk hydro vs soil weed with the actual products in front of you? Come by The Planet x Cannabis at 3005 Islington Ave in Toronto's Humber Summit, ask what the producer shares about grow method, and read the label with us. Find us through our [visit page](/visit). Adults 19+ only. Bring government-issued photo ID.`;

if (!ARTICLE_MARKDOWN.startsWith(`# ${TITLE}\n`)) {
  throw new Error("Article H1 does not match the title");
}
if (!ARTICLE_MARKDOWN.includes("Last checked: November 10, 2026")) {
  throw new Error("Missing visible Last checked line");
}
if (DESCRIPTION.length > 155) {
  throw new Error("Meta description is too long");
}

const linkedHrefs = [...ARTICLE_MARKDOWN.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)].map((match) => match[1]);
if (linkedHrefs.length !== 2 || linkedHrefs.some((href) => !ALLOWED_HREFS.has(href))) {
  throw new Error(`Unexpected article links: ${linkedHrefs.join(", ")}`);
}

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: CANONICAL,
    type: "article",
    locale: "en_CA",
    siteName: "Planet X Cannabis",
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": CANONICAL,
  },
  url: CANONICAL,
  datePublished: "2026-11-16",
  dateModified: "2026-11-16",
  author: { "@type": "Organization", name: "The Planet x Cannabis" },
  publisher: { "@type": "Organization", name: "The Planet x Cannabis" },
};

function inline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const pattern = /\*\*([^*]+)\*\*|\*([^*]+)\*|\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let index = 0;
  while ((match = pattern.exec(text)) !== null) {
    if (match.index > last) nodes.push(text.slice(last, match.index));
    const key = `${keyPrefix}-${index++}`;
    if (match[1] != null) nodes.push(<strong key={key}>{match[1]}</strong>);
    else if (match[2] != null) nodes.push(<em key={key}>{match[2]}</em>);
    else {
      const label = match[3] ?? "";
      const href = match[4] ?? "";
      if (!ALLOWED_HREFS.has(href)) throw new Error(`Unexpected article link: ${href}`);
      nodes.push(<Link key={key} href={href}>{label}</Link>);
    }
    last = match.index + match[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

function cells(row: string) {
  return row.split("|").slice(1, -1).map((cell) => cell.trim());
}

function isSeparator(row: string) {
  const parsed = cells(row);
  return parsed.length > 0 && parsed.every((cell) => /^:?-+:?$/.test(cell));
}

function renderTable(rows: string[], key: string) {
  const parsed = rows.filter((row) => !isSeparator(row)).map(cells);
  const [head, ...bodyRows] = parsed;
  if (!head) return null;
  return (
    <table key={key}>
      <thead>
        <tr>
          {head.map((cell, index) => (
            <th key={index} scope="col">{inline(cell, `${key}-h${index}`)}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {bodyRows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{inline(cell, `${key}-r${rowIndex}c${cellIndex}`)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function ArticleBody({ markdown }: { markdown: string }) {
  const lines = markdown.split("\n");
  const blocks: ReactNode[] = [];
  let index = 0;
  while (index < lines.length) {
    const line = lines[index];
    if (!line.trim()) {
      index += 1;
      continue;
    }
    if (line.startsWith("### ")) {
      blocks.push(<h3 key={index}>{inline(line.slice(4), `h3-${index}`)}</h3>);
      index += 1;
      continue;
    }
    if (line.startsWith("## ")) {
      blocks.push(<h2 key={index}>{inline(line.slice(3), `h2-${index}`)}</h2>);
      index += 1;
      continue;
    }
    if (line.startsWith("# ")) {
      blocks.push(<h1 key={index}>{inline(line.slice(2), `h1-${index}`)}</h1>);
      index += 1;
      continue;
    }
    if (line.startsWith("|")) {
      const rows: string[] = [];
      const key = `table-${index}`;
      while (index < lines.length && lines[index].startsWith("|")) {
        rows.push(lines[index]);
        index += 1;
      }
      blocks.push(renderTable(rows, key));
      continue;
    }
    if (line.startsWith("- ")) {
      const items: string[] = [];
      const key = `ul-${index}`;
      while (index < lines.length && lines[index].startsWith("- ")) {
        items.push(lines[index].slice(2));
        index += 1;
      }
      blocks.push(
        <ul key={key}>
          {items.map((item, itemIndex) => (
            <li key={itemIndex}>{inline(item, `${key}-${itemIndex}`)}</li>
          ))}
        </ul>,
      );
      continue;
    }
    if (/^\d+\. /.test(line)) {
      const items: string[] = [];
      const key = `ol-${index}`;
      while (index < lines.length && /^\d+\. /.test(lines[index])) {
        items.push(lines[index].replace(/^\d+\. /, ""));
        index += 1;
      }
      blocks.push(
        <ol key={key}>
          {items.map((item, itemIndex) => (
            <li key={itemIndex}>{inline(item, `${key}-${itemIndex}`)}</li>
          ))}
        </ol>,
      );
      continue;
    }
    const paragraph = [line];
    const key = `p-${index}`;
    index += 1;
    while (
      index < lines.length &&
      lines[index].trim() &&
      !lines[index].startsWith("#") &&
      !lines[index].startsWith("|") &&
      !lines[index].startsWith("- ") &&
      !/^\d+\. /.test(lines[index])
    ) {
      paragraph.push(lines[index]);
      index += 1;
    }
    blocks.push(
      <p key={key}>
        {paragraph.map((part, partIndex) => (
          <span key={partIndex}>
            {partIndex > 0 ? <br /> : null}
            {inline(part, `${key}-${partIndex}`)}
          </span>
        ))}
      </p>,
    );
  }
  return <>{blocks}</>;
}

export default function HydroVsSoilWeedPage() {
  return (
    <main className={styles.main}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(articleJsonLd) }} />
      <Navbar />
      <article className={styles.article} data-article="hydro-vs-soil-weed">
        <ArticleBody markdown={ARTICLE_MARKDOWN} />
      </article>
      <Footer />
    </main>
  );
}
