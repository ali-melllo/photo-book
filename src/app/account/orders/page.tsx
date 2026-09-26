import type { Metadata } from "next";
import { PackageSearch } from "lucide-react";
import { EmptyState } from "@/components/shared/EmptyState";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({ title: "سفارش‌های من", path: "/account/orders" });

export default function AccountOrdersPage() {
  return (
    <div className="container-px mx-auto max-w-3xl py-20">
      <EmptyState
        icon={PackageSearch}
        title="هنوز سفارشی ثبت نکرده‌اید"
        description="پس از ثبت اولین سفارش، وضعیت و تاریخچه آن در همین صفحه نمایش داده می‌شود."
        actionLabel="مشاهده فروشگاه"
        actionHref="/shop"
      />
    </div>
  );
}
