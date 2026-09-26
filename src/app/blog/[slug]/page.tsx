import type { Metadata } from "next";
import { PageShell } from "@/components/shared/PageShell";
import { buildMetadata } from "@/lib/seo";

type Props = { params: { slug: string } };

export function generateMetadata({ params }: Props): Metadata {
  return buildMetadata({ title: "مقاله وبلاگ", path: `/blog/${params.slug}` });
}

export default function BlogPostPage({ params }: Props) {
  return (
    <PageShell
      eyebrow="وبلاگ"
      title={`مقاله: ${params.slug}`}
      description="محتوای این مقاله هنوز آماده نشده است."
    />
  );
}
