import type { Metadata } from "next";
import { PageShell } from "@/components/shared/PageShell";
import { Button } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "طراحی کتاب سفارشی",
  description: "کتاب عکس اختصاصی خود را با ویرایشگر آنلاین مهرورو طراحی کنید.",
  path: "/editor",
});

export default function EditorPage() {
  return (
    <PageShell
      eyebrow="سازنده اختصاصی"
      title="ویرایشگر کتاب عکس"
      description="ویرایشگر آنلاین مهرورو — برای آپلود عکس، چیدمان صفحات، افزودن متن و طراحی کاور — به‌زودی در این مسیر راه‌اندازی می‌شود."
    >
      <Button asChild size="lg" variant="outline">
        <a href="/shop">مشاهده قالب‌های آماده</a>
      </Button>
    </PageShell>
  );
}
