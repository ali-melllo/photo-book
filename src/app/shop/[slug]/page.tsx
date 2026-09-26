import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/shared/PageShell";
import { products } from "@/data/products";
import { buildMetadata } from "@/lib/seo";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const product = products.find((p) => p.slug === params.slug);
  return buildMetadata({
    title: product?.title ?? "محصول",
    path: `/shop/${params.slug}`,
  });
}

export default function ProductPage({ params }: Props) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) notFound();

  return (
    <PageShell
      eyebrow={product.category}
      title={product.title}
      description="صفحه اختصاصی این محصول به‌زودی با جزئیات کامل، گالری تصاویر و گزینه‌های سفارشی‌سازی در دسترس قرار می‌گیرد."
    />
  );
}
