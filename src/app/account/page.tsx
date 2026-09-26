import type { Metadata } from "next";
import { PageShell } from "@/components/shared/PageShell";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({ title: "حساب کاربری", path: "/account" });

export default function AccountPage() {
  return (
    <PageShell
      eyebrow="حساب کاربری"
      title="پروفایل من"
      description="خلاصه حساب کاربری، سفارش‌ها و اطلاعات پروفایل به‌زودی در این بخش نمایش داده می‌شود."
    />
  );
}
