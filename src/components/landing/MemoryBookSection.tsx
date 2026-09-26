import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/Reveal";

export function MemoryBookSection() {
  return (
    <section className="container-px mx-auto max-w-7xl py-8 sm:py-12">
      <div className="grid items-center gap-10 overflow-hidden rounded-3xl bg-card lg:grid-cols-2">
        <Reveal className="relative aspect-[4/3] w-full lg:aspect-auto lg:h-full lg:min-h-[380px]">
          <Image
            src="https://images.unsplash.com/photo-1531685250784-7569952593d2?q=80&w=1200&auto=format&fit=crop"
            alt="کتاب‌های عکس روی هم چیده شده کنار دوربین و فنجان قهوه"
            fill
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="object-cover"
          />
        </Reveal>

        <Reveal className="container-px py-8 lg:py-0 lg:pl-4 lg:pr-0" delay={0.1}>
          <Badge variant="lavender">قالب‌های آماده</Badge>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            کتاب خاطراتت را سفارش بده
          </h2>
          <p className="mt-4 max-w-md leading-8 text-muted-foreground">
            از انتخاب یکی از قالب‌های آماده، تا سفارش‌سازی و در چند کلیک، کتاب خاطراتتان را سفارش دهید.
          </p>
          <Button asChild size="lg" variant="navy" className="mt-7 gap-2">
            <Link href="/shop">
              مشاهده قالب‌ها
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
