import type { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "Cannabis Blog & Guides — Planet x Cannabis | North York",
  description: "Read the latest strain reviews, dosing guides, and cannabis news from Planet x Cannabis in North York.",
  alternates: {
    canonical: "https://theplanetx.ca/blog",
  },
};

export default function BlogPage() {
  return <BlogContent />;
}
