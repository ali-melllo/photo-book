import Link from "next/link";
import { ArrowLeft, HelpCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/shared/Reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqItems } from "@/data/faq";

export function FAQSection() {
  return (
    <section id="faq" className="container-px mx-auto max-w-7xl py-16 sm:py-20">
      <Reveal className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <Badge variant="lavender">سوالات متداول</Badge>
          <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">سوالات متداول کاربران</h2>
          <p className="mt-3 max-w-xl leading-7 text-muted-foreground">
            پاسخ پرتکرارترین سوالات کاربران درباره سفارش، چاپ و ارسال.
          </p>
        </div>
        <Link
          href="/about"
          className="flex shrink-0 items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
        >
          مشاهده همه سوالات
          <ArrowLeft className="h-4 w-4" />
        </Link>
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <Reveal className="flex flex-col justify-between rounded-3xl bg-lavender/70 p-8" delay={0.05}>
          <div>
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/70 text-primary">
              <HelpCircle className="h-5 w-5" />
            </span>
            <h3 className="mt-6 text-xl font-bold leading-snug text-foreground">
              هر سوالی داری، ما در کنارت هستیم
            </h3>
          </div>
          <Link href="/about" className="mt-8 text-sm font-medium text-primary hover:underline">
            تماس با پشتیبانی ←
          </Link>
        </Reveal>

        <Reveal className="lg:col-span-2" delay={0.1}>
          <Accordion type="single" collapsible className="rounded-3xl border border-border bg-card px-6 sm:px-8">
            {faqItems.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
