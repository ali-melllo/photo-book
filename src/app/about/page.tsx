import type { Metadata } from "next";
import { PageShell } from "@/components/shared/PageShell";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "درباره ما",
  description: "با تیم و داستان مهرورو بیشتر آشنا شوید.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="درباره ما"
      title="داستان مهرورو"
      description="محتوای کامل این صفحه — تیم، داستان برند و اطلاعات تماس — به‌زودی اضافه می‌شود."
    />
  );
}
