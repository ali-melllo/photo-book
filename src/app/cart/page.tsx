"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Minus, Plus, Trash2 } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { removeItem, selectCartItems, selectCartSubtotal, setQuantity } from "@/store/slices/cartSlice";
import { EmptyState } from "@/components/shared/EmptyState";
import { Button } from "@/components/ui/button";
import { formatToman } from "@/lib/utils";

export default function CartPage() {
  const items = useAppSelector(selectCartItems);
  const subtotal = useAppSelector(selectCartSubtotal);
  const dispatch = useAppDispatch();

  if (items.length === 0) {
    return (
      <div className="container-px mx-auto max-w-3xl py-20">
        <EmptyState
          icon={ShoppingBag}
          title="سبد خرید شما خالی است"
          description="هنوز محصولی به سبد خرید خود اضافه نکرده‌اید. قالب‌های آماده را مشاهده کنید."
          actionLabel="مشاهده فروشگاه"
          actionHref="/shop"
        />
      </div>
    );
  }

  return (
    <div className="container-px mx-auto max-w-4xl py-16">
      <h1 className="text-2xl font-bold text-foreground sm:text-3xl">سبد خرید</h1>

      <div className="mt-8 flex flex-col gap-4">
        {items.map((item) => (
          <div key={item.productId} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4">
            <div className="relative h-20 w-16 shrink-0 overflow-hidden rounded-xl bg-muted">
              <Image src={item.image} alt={item.title} fill sizes="80px" className="object-cover" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate font-semibold text-foreground">{item.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{formatToman(item.price)}</p>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-border px-1">
              <Button
                variant="ghost"
                size="icon"
                aria-label="کاهش تعداد"
                onClick={() => dispatch(setQuantity({ productId: item.productId, quantity: item.quantity - 1 }))}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-6 text-center text-sm font-medium">{item.quantity}</span>
              <Button
                variant="ghost"
                size="icon"
                aria-label="افزایش تعداد"
                onClick={() => dispatch(setQuantity({ productId: item.productId, quantity: item.quantity + 1 }))}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <Button
              variant="ghost"
              size="icon"
              aria-label="حذف از سبد خرید"
              onClick={() => dispatch(removeItem(item.productId))}
            >
              <Trash2 className="h-4 w-4 text-destructive" />
            </Button>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between rounded-2xl bg-secondary px-6 py-5">
        <span className="font-semibold text-foreground">جمع کل</span>
        <span className="text-lg font-bold text-foreground">{formatToman(subtotal)}</span>
      </div>

      <Button asChild size="lg" className="mt-6 w-full sm:w-auto">
        <Link href="/checkout">ادامه فرآیند خرید</Link>
      </Button>
    </div>
  );
}
