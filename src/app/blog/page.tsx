import type { Metadata } from "next";
import { PageShell } from "@/components/shared/PageShell";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "وبلاگ",
  description: "مقالات و راهنماهای مهرورو درباره چاپ و طراحی کتاب عکس.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <PageShell
      eyebrow="وبلاگ"
      title="وبلاگ مهرورو"
      description="فهرست مقالات به‌زودی در این صفحه منتشر می‌شود."
    />
  );
}
