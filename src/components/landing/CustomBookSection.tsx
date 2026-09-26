import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/Reveal";

export function CustomBookSection() {
  return (
    <section className="container-px mx-auto max-w-7xl py-8 sm:py-12">
      <div className="grid items-center gap-10 overflow-hidden rounded-3xl bg-lavender/70 px-6 py-10 sm:px-10 lg:grid-cols-2 lg:py-14">
        <Reveal>
          <Badge variant="outline" className="border-primary/30 bg-white/60 text-primary">
            سازنده اختصاصی
          </Badge>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            خاطراتت را خودت بساز
          </h2>
          <p className="mt-4 max-w-md leading-8 text-muted-foreground">
            با ابزار ویرایشگر آنلاین ما، عکس‌های خود را آپلود کنید، متن اضافه کنید و کتاب عکس اختصاصی خود
            را با چیدمان دلخواه طراحی کنید.
          </p>
          <Button asChild size="lg" variant="navy" className="mt-7 gap-2">
            <Link href="/editor">
              شروع طراحی کتاب
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
        </Reveal>

        <Reveal delay={0.1} className="relative">
          <div className="relative mx-auto aspect-[16/11] w-full max-w-lg overflow-hidden rounded-2xl border border-white/40 bg-card shadow-soft">
            <Image
              src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200&auto=format&fit=crop"
              alt="پیش‌نمایش ویرایشگر آنلاین کتاب عکس روی صفحه لپ‌تاپ"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
