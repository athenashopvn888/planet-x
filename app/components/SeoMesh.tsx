"use client";

import Link from "next/link";
import { CORE_MESH, TIER_MESH, VERTICAL_MESH } from "../lib/seoMesh";
import styles from "./SeoMesh.module.css";

type SeoMeshProps = {
  current?: string;
  includeTiers?: boolean;
  includeVerticals?: boolean;
  heading?: string;
  variant?: "panel" | "onPage";
};

export default function SeoMesh({
  current,
  includeTiers = true,
  includeVerticals = true,
  heading = "Store pages",
  variant = "panel",
}: SeoMeshProps) {
  const links = [
    ...CORE_MESH,
    ...(includeVerticals ? VERTICAL_MESH : []),
    ...(includeTiers ? TIER_MESH.map((tier) => ({ href: tier.href, label: tier.label })) : []),
  ].filter((link) => link.href !== current);

  return (
    <div className={styles.wrap}>
      <p className={`${styles.heading} ${variant === "onPage" ? styles.darkHeading : ""}`}>
        {heading}
      </p>
      <nav className={styles.nav} aria-label={heading}>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${styles.link} ${variant === "onPage" ? styles.darkLink : ""}`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
