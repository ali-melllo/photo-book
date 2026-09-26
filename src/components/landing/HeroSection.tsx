import Image from "next/image";
import Link from "next/link";
import { Layers, Truck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/shared/Reveal";

const features = [
  { icon: Layers, label: "تنوع طرح‌ها و سایزها" },
  { icon: Truck, label: "ارسال به سراسر کشور" },
  { icon: Sparkles, label: "چاپ باکیفیت و بادوام" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden ">
      <div className="container-px mx-auto grid max-w-7xl items-center gap-10 py-14 sm:py-20 lg:grid-cols-2 lg:py-24">
        <Reveal className="order-2 lg:order-1" delay={0.05}>
          <Badge variant="lavender">✦ خاطرات رو ماندگار کن</Badge>
          <h1 className="mt-5 md:text-nowrap text-2xl md:text-4xl font-extrabold leading-[1.25] text-foreground sm:text-5xl">
            کتاب‌های عکس  <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
               لحظات
            </span> زندگی شما
          </h1>
          <p className="mt-5 max-w-lg leading-8 text-muted-foreground">
            با کتاب‌های عکس مهرورو، خاطرات خاص خود را به زیباترین شکل به چاپ برسانید. از طرح‌های آماده
            انتخاب کنید یا کتاب سفارشی خودتان را طراحی کنید تا لحظات ماندگارتان جاودان شوند.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/editor">ساخت کتاب سفارشی</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/shop">مشاهده قالب‌های آماده</Link>
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-7 border-t border-border pt-8 sm:grid-cols-3">
            {features.map((f) => (
              <div key={f.label} className="flex items-center gap-2">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                  <f.icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium text-nowrap text-foreground">{f.label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="order-1 lg:order-2" delay={0.15}>
          <div className="relative mx-auto aspect-[6/4] w-full max-w-xl rounded-3xl">
            <Image
              src="/assets/images/hero.png"
              alt="کتاب‌های عکس چاپ‌شده مهرورو کنار دوربین و گیاه، روی میز چوبی"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="rounded-3xl md:mt-20"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
