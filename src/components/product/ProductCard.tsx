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
      className="group flex flex-col min-h-[18em] md:min-h-[22em] shadow-lg mb-5 overflow-hidden relative rounded-2xl border border-border transition-shadow hover:shadow-soft"
    >
      <div className="relative aspect-[4/5] overflow-hidden ">
        <Image
          src={"/assets/images/sample.webp"}
          alt={product.title}
          fill
          sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {product.badge && (
          <Badge className="absolute bg-gradient-to-r from-primary/60 to-primary/40 !pt-2 top-2 text-white font-bold shadow left-2">
            {product.badge}
          </Badge>
        )}
        
      </div>

      <div className="p-4 bg-gradient-to-t from-red-400/30 to-transparent w-full bottom-0 absolute z-20">
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
