import type { Metadata } from "next";
import { PageShell } from "@/components/shared/PageShell";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({ title: "ورود به حساب کاربری", path: "/login" });

export default function LoginPage() {
  return (
    <PageShell
      eyebrow="حساب کاربری"
      title="ورود یا ثبت‌نام"
      description="فرم ورود با کد یکبار مصرف و ورود با گوگل به‌زودی در این صفحه فعال می‌شود."
    />
  );
}
