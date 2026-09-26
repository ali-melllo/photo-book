import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/shared/Reveal";
import { TestimonialCard } from "./TestimonialCard";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <section className="container-px mx-auto max-w-7xl py-16 sm:py-20">
      <Reveal className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <Badge variant="lavender">نظرات مشتریان</Badge>
          <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">مشتریان ما چه می‌گویند؟</h2>
        </div>
        <Link
          href="/about"
          className="flex shrink-0 items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
        >
          مشاهده همه نظرات
          <ArrowLeft className="h-4 w-4" />
        </Link>
      </Reveal>

      <StaggerContainer className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {testimonials.map((t) => (
          <StaggerItem key={t.id}>
            <TestimonialCard testimonial={t} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
