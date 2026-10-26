import type { ReactNode } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { jsonLdScript } from "../../lib/storeNap";
import styles from "./article.module.css";

const TITLE = "Cannabis Terpenes Explained: How to Read the Aroma Line on a Label";
const CANONICAL = "https://www.theplanetx.ca/resources/terpenes-on-cannabis-labels";
const DESCRIPTION = "Pop the lid and you smell it before you see anything: pine, citrus, pepper, something floral.";

const ARTICLE_MARKDOWN = "# Cannabis Terpenes Explained: How to Read the Aroma Line on a Label\n\nLast checked: October 21, 2026\n\nPop the lid and you smell it before you see anything: pine, citrus, pepper, something floral. That smell has chemistry behind it, and sometimes the label names that chemistry. Search **cannabis terpenes explained** and you'll land in a swamp of big promises. This isn't that. It's a straight read of what terpenes are, where they turn up on a legal Canadian label, and what those names actually tell you, which is mostly how something smells.\n\nAdults 19 and over only. This is about aroma and labels. We won't claim that any terpene does anything to you, and we won't name strains.\n\n## Cannabis terpenes explained in one paragraph\n\nTerpenes are aromatic compounds that plants make. Pine trees, lemon peel and lavender all have them, and so does cannabis. In cannabis, they're made and stored in the tiny resin glands called trichomes, along with cannabinoids and flavonoids, according to a 2021 review in *Frontiers in Plant Science*. The same review notes that terpenes such as α-pinene and limonene help protect the plant by deterring insects. That's their job for the plant. For you, the practical part is simple: terpenes are a big part of why one jar smells different from the next.\n\n## Where terpenes show up on a label (and where they don't)\n\nHere's what most people don't realize: **terpenes aren't a required label line in Canada.** Health Canada's packaging and labelling guide lists the terpene profile as *optional* information. A producer can choose to include it or leave it off.\n\n| Where you might see terpenes | What Health Canada's guide says |\n|---|---|\n| **On the label** | The terpene profile is optional information. It's allowed, not required. |\n| **Behind a QR code** | A QR code on the package may lead to information like the terpene profile or the certificate of analysis. Whatever it links to still has to follow the promotion rules. |\n| **On an insert** | A leaflet inside the package may include terpene amounts. |\n\nAnd one rule covers all three: **false or misleading information is prohibited.** Whatever a label, insert or QR page says about terpenes has to be accurate.\n\nCompare that with the lines that *are* required on a dried cannabis label under the federal Cannabis Regulations: the class of cannabis, the packaging date, recommended storage conditions, net weight in grams, Total THC and Total CBD in mg/g, the \"KEEP OUT OF REACH OF CHILDREN\" warning, a health warning, and the standardized THC symbol where it applies. Terpenes are a bonus line, if they appear at all.\n\n## The aroma glossary: what the names usually smell like\n\nWhen a terpene does appear on a label or insert, it's usually listed by its chemical name. Here's how the U.S. National Library of Medicine's PubChem database describes the odour of the most common ones. These are **aroma descriptions only**. They don't predict how a product will feel.\n\n- **Limonene**: described as \"pleasant lemon-like\". Think citrus peel.\n- **Myrcene**: described as having a \"sweet balsamic\" aroma.\n- **Beta-caryophyllene**: described as \"woody-spicy, dry, clove-like\". The peppery one.\n- **Alpha-pinene**: described as having the \"characteristic odor of pine\". Exactly what it sounds like.\n- **Linalool**: described as floral, with notes compared to bergamot and French lavender.\n- **Terpinolene**: described as a \"sweet, pine odor\".\n\nSo if an insert lists limonene and alpha-pinene near the top, the most you can fairly read from that is \"probably smells citrusy and piney\". That's it, and that's honestly useful.\n\n## Cannabis terpenes explained: three reading rules\n\n1. **Treat terpene names as an aroma note, not a promise.** Nothing in a terpene line makes a legal claim about how a product will feel, and you shouldn't read one into it.\n2. **Missing doesn't mean absent.** Since the terpene profile is optional, a label without terpenes just means the producer didn't list them.\n3. **Read the whole pack, not just the aroma line.** Recommended storage conditions and the packaging date are required, so the producer tells you how the product should be kept and when it was packed.\n\n## Quick answers\n\n**Are terpenes required on Canadian cannabis labels?**\nNo. Health Canada's guide lists the terpene profile as optional information.\n\n**What does limonene smell like?**\nPubChem describes it as \"pleasant lemon-like\".\n\n**Can a QR code show terpenes?**\nYes. Health Canada says a QR code may lead to information like the terpene profile, and that content still has to follow the promotion rules.\n\n**Do terpenes only come from cannabis?**\nNo. They're common in plants. The pine and lemon descriptions above come from the same compounds you'd find in those plants.\n\n## The Planet x Cannabis: follow your nose, then read the label\n\nThe Planet x Cannabis is at **3005 Islington Ave, Toronto**. Come in 19+, ask whether a product lists its terpene profile, and read it as an aroma guide. That's cannabis terpenes explained the honest way. Directions are on our [visit page](/visit).";

if (!ARTICLE_MARKDOWN.startsWith(`# ${TITLE}\n`)) {
  throw new Error("Article H1 does not match the title");
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
  datePublished: "2026-10-26",
  dateModified: "2026-10-26",
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
      if (href !== "/visit") throw new Error(`Unexpected article link: ${href}`);
      nodes.push(<Link key={key} href="/visit">{label}</Link>);
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
  const [head, ...body] = parsed;
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
        {body.map((row, rowIndex) => (
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

export default function TerpenesOnCannabisLabelsPage() {
  return (
    <main className={styles.main}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(articleJsonLd) }} />
      <Navbar />
      <article className={styles.article} data-article="terpenes-on-cannabis-labels">
        <ArticleBody markdown={ARTICLE_MARKDOWN} />
      </article>
      <Footer />
    </main>
  );
}
