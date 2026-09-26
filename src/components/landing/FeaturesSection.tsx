import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StaggerContainer, StaggerItem } from "@/components/shared/Reveal";

const cards = [
  {
    eyebrow: "سریع و آسان",
    title: "ویرایشگر ساده و قدرتمند",
    description: "با چند کلیک ساده، به‌راحتی و به‌صورت آنلاین کتاب عکس خود را طراحی کنید.",
    cta: "شروع طراحی",
    href: "/editor",
    bg: "bg-lavender/70",
  },
  {
    eyebrow: "سایزها و قالب‌های متنوع",
    title: "انتخاب از میان طرح‌های مختلف",
    description: "مجموعه‌ای متنوع برای هر سلیقه و مناسب برای هر نوع خاطره‌ای.",
    cta: "مشاهده قالب‌ها",
    href: "/shop",
    bg: "bg-mint/70",
  },
];

export function FeaturesSection() {
  return (
    <section className="container-px mx-auto max-w-7xl py-8 sm:py-12">
      <StaggerContainer className="grid gap-6 sm:grid-cols-2">
        {cards.map((card) => (
          <StaggerItem key={card.title}>
            <div className={`flex h-full flex-col rounded-3xl px-7 py-8 ${card.bg}`}>
              <Badge variant="outline" className="w-fit border-navy/10 bg-white/60 text-foreground">
                {card.eyebrow}
              </Badge>
              <h3 className="mt-4 text-xl font-bold text-foreground sm:text-2xl">{card.title}</h3>
              <p className="mt-3 max-w-sm leading-7 text-muted-foreground">{card.description}</p>
              <Button asChild variant="navy" className="mt-6 w-fit gap-2">
                <Link href={card.href}>
                  {card.cta}
                  <ArrowLeft className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
