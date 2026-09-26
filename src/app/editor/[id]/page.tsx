import type { Metadata } from "next";
import { PageShell } from "@/components/shared/PageShell";
import { buildMetadata } from "@/lib/seo";

type Props = { params: { id: string } };

export function generateMetadata({ params }: Props): Metadata {
  return buildMetadata({ title: "ویرایش کتاب", path: `/editor/${params.id}` });
}

export default function EditorInstancePage({ params }: Props) {
  return (
    <PageShell
      eyebrow="سازنده اختصاصی"
      title={`ویرایش کتاب #${params.id}`}
      description="این پروژه هنوز در حال بارگذاری داخل ویرایشگر نیست — این صفحه فقط ساختار مسیر را آماده می‌کند."
    />
  );
}
