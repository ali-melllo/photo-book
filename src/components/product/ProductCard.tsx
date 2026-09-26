"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Star } from "lucide-react";
import { useState } from "react";
import { Product } from "@/types/product";
import { formatToman, cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export function ProductCard({ product }: { product: Product }) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Link
      href={`/shop/${product.slug}`}
      className="group block overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-shadow hover:shadow-soft"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-muted">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {product.badge && (
          <Badge variant="lavender" className="absolute top-3 right-3">
            {product.badge}
          </Badge>
        )}
        <button
          type="button"
          aria-label={isFavorite ? "حذف از علاقه‌مندی‌ها" : "افزودن به علاقه‌مندی‌ها"}
          aria-pressed={isFavorite}
          onClick={(e) => {
            e.preventDefault();
            setIsFavorite((v) => !v);
          }}
          className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-navy shadow-sm transition-colors hover:bg-white"
        >
          <Heart className={cn("h-4 w-4 transition-colors", isFavorite && "fill-destructive text-destructive")} />
        </button>
      </div>

      <div className="p-4">
        <p className="text-xs text-muted-foreground">{product.category}</p>
        <h3 className="mt-1 text-[15px] font-semibold text-foreground">{product.title}</h3>

        <div className="mt-2 flex items-center justify-between">
          <span className="text-sm font-bold text-foreground">{formatToman(product.price)}</span>
          {product.rating && (
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              {product.rating}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
