import type { ReactNode } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { jsonLdScript } from "../../lib/storeNap";
import styles from "./article.module.css";

const TITLE = "Full Spectrum vs Broad Spectrum vs Isolate: What These Label Words Really Mean";
const CANONICAL = "https://www.theplanetx.ca/resources/full-spectrum-vs-broad-spectrum-vs-isolate";
const DESCRIPTION = "Three phrases show up on oils, capsules and vapes again and again: full spectrum, broad spectrum and isolate.";
const ALLOWED_HREFS = new Set(["/visit", "/weed-dispensary-north-york"]);

const ARTICLE_MARKDOWN = `# Full Spectrum vs Broad Spectrum vs Isolate: What These Label Words Really Mean

Last checked: October 25, 2026

Three phrases show up on oils, capsules and vapes again and again: full spectrum, broad spectrum and isolate. They sound scientific. They're actually marketing descriptions of how much of the plant's chemistry made it into the product. The Planet x Cannabis, at 3005 Islington Ave in Toronto's Humber Summit, breaks down **full spectrum vs broad spectrum** vs isolate for adults 19+, with no effect claims attached.

## Full spectrum vs broad spectrum vs isolate: definitions

**Full spectrum**: an extract that keeps a wide range of the plant's compounds, including multiple cannabinoids and aroma compounds (terpenes), with THC included.

**Broad spectrum**: similar to full spectrum, but with THC removed or reduced to very low levels.

**Isolate**: a single purified compound, usually CBD, with almost everything else removed. Often a white crystalline powder before it's mixed into a product.

## Side by side

| | Full spectrum | Broad spectrum | Isolate |
|---|---|---|---|
| Multiple cannabinoids | Yes | Yes | No |
| Terpenes | Often | Often | No |
| THC | Present | Removed or very low | Typically none |
| Typical form | Oil | Oil | Powder or crystals |

## Are these regulated label terms?

Not in the way Total THC is. Canadian labels must show the class, net weight, Total THC and Total CBD, lot number, packaging date, storage conditions and the health warning. "Full spectrum" and "broad spectrum" are producer descriptions. That makes the Total THC and Total CBD lines the place to confirm what's actually in the product.

## Reading the label with these words in mind

1. Read the class line. Oils and capsules are generally cannabis extracts.
2. Read Total THC and Total CBD.
3. If a product says broad spectrum or isolate, check that Total THC reflects that.
4. Read the ingredient list for carrier oils and added flavours.
5. Check the packaging date and storage conditions.

## Why "spectrum" products often list extra cannabinoids

Some full or broad spectrum products list minor cannabinoids like CBG or CBN, or terpenes. That's optional information. It shows what's in the product. It doesn't rank it.

## Isolate vs distillate

People mix these up. Distillate is a refined oil, usually high in one cannabinoid but still a liquid. Isolate goes a step further: a solid, purified single compound. Different form, different label wording.

## Common myths, corrected

**"Full spectrum is always better."** It's a description of composition, not a ranking.

**"Broad spectrum means zero THC."** It usually means reduced THC. Read the Total THC line.

**"Isolate products have nothing in them."** They contain the purified compound, plus whatever carrier or ingredients the label lists.

**"These words are federal categories."** They're producer descriptions. The class line is the federal category.

## Why the terminology exists

Producers use these words to tell shoppers how the extract was processed. More processing generally narrows the range of compounds. Less processing keeps more of them. That's the whole idea: a quick shorthand for extraction and refinement.

## Storage

Oils and capsules should stay in their original child-resistant packaging, sealed, cool and dark, and away from kids and pets. Isolate powder should stay sealed and dry.

## Spectrum vocabulary

| Word | Meaning |
|---|---|
| Full spectrum | Wide range of plant compounds, THC included |
| Broad spectrum | Wide range, THC removed or very low |
| Isolate | Single purified compound |
| Distillate | Refined oil, usually high in one cannabinoid |
| Carrier oil | Oil used to dilute or deliver an extract |
| Terpenes | Aroma compounds |

## A worked label check

Say a bottle says broad spectrum on the front. Here's how to confirm it on the label:

1. Find Total THC. It should be low, as broad spectrum suggests.
2. Find Total CBD. Note the amount and unit.
3. Read the ingredient list for the carrier oil.
4. Note any optional cannabinoid or terpene lines.
5. Check the packaging date.

If the front description and the label numbers don't seem to match, ask staff to walk you through it.

## Why the descriptions vary between producers

Because these terms aren't defined on the regulated label, different producers may use them slightly differently. That's normal, and it's why the numbers matter more than the words.

## One-line summary for the counter

If you remember one thing: the front of the box describes, the label measures. Read Total THC and Total CBD before anything else.

## Visit and learn

Store details are on our [Islington Avenue weed dispensary](/weed-dispensary-north-york) page, and the [visit page](/visit) has the rest.

Full spectrum vs broad spectrum vs isolate: lots of compounds, lots minus THC, or one purified compound. The label numbers confirm which. The Planet x Cannabis is for adults 19 and over. Staff ask for ID from anyone who looks under 25.`;

if (!ARTICLE_MARKDOWN.startsWith(`# ${TITLE}\n`)) {
  throw new Error("Article H1 does not match the title");
}
if (!ARTICLE_MARKDOWN.includes("Last checked: October 25, 2026")) {
  throw new Error("Missing visible Last checked line");
}
if (DESCRIPTION.length > 155) {
  throw new Error("Meta description is too long");
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
  datePublished: "2026-11-02",
  dateModified: "2026-11-02",
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

export default function FullSpectrumArticlePage() {
  return (
    <main className={styles.main}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(articleJsonLd) }} />
      <Navbar />
      <article className={styles.article} data-article="full-spectrum-vs-broad-spectrum-vs-isolate">
        <ArticleBody markdown={ARTICLE_MARKDOWN} />
      </article>
      <Footer />
    </main>
  );
}
