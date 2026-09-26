import type { Metadata } from "next";
import { PageShell } from "@/components/shared/PageShell";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({ title: "تسویه‌حساب", path: "/checkout" });

export default function CheckoutPage() {
  return (
    <PageShell
      eyebrow="تسویه‌حساب"
      title="نهایی‌سازی سفارش"
      description="فرآیند تکمیل آدرس، روش ارسال و پرداخت به‌زودی در این صفحه پیاده‌سازی می‌شود."
    />
  );
}
