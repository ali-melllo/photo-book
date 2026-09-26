import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/shared/Reveal";
import { ProductCarousel } from "@/components/product/ProductCarousel";
import { products } from "@/data/products";

export function FeaturedBooksSection() {
  return (
    <section className="container-px mx-auto max-w-7xl py-16 sm:py-20">
      <Reveal className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <Badge variant="lavender">قالب‌های آماده</Badge>
          <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">کتاب‌های آماده را ببینید</h2>
          <p className="mt-3 max-w-xl leading-7 text-muted-foreground">
            از میان قالب‌های متنوع و زیبای ما، قالب مورد علاقه‌تان را انتخاب کنید و در کمترین زمان، کتاب عکس
            خود را سفارش دهید.
          </p>
        </div>
        <Link
          href="/shop"
          className="flex shrink-0 items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
        >
          مشاهده همه قالب‌ها
          <ArrowLeft className="h-4 w-4" />
        </Link>
      </Reveal>

      <Reveal className="mt-10" delay={0.1}>
        <ProductCarousel products={products} />
      </Reveal>
    </section>
  );
}
