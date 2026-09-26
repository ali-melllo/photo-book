import type { Metadata } from "next";
import { PageShell } from "@/components/shared/PageShell";
import { ProductGrid } from "@/components/product/ProductGrid";
import { products } from "@/data/products";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "فروشگاه",
  description: "قالب‌های آماده کتاب عکس مهرورو را مرور و سفارش دهید.",
  path: "/shop",
});

export default function ShopPage() {
  return (
    <div className="container-px mx-auto max-w-7xl py-16">
      <PageShell
        eyebrow="فروشگاه"
        title="فروشگاه مهرورو"
        description="این صفحه به‌زودی با طراحی کامل فروشگاه جایگزین می‌شود. در همین حال می‌توانید قالب‌های فعلی را مشاهده کنید."
      />
      <div className="mt-4">
        <ProductGrid products={products} />
      </div>
    </div>
  );
}
