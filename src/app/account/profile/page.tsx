import type { Metadata } from "next";
import { PageShell } from "@/components/shared/PageShell";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({ title: "ویرایش پروفایل", path: "/account/profile" });

export default function AccountProfilePage() {
  return (
    <PageShell
      eyebrow="حساب کاربری"
      title="ویرایش اطلاعات پروفایل"
      description="فرم ویرایش نام، شماره تماس و آدرس‌ها به‌زودی در این صفحه اضافه می‌شود."
    />
  );
}
