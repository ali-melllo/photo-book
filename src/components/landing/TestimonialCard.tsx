import { Star } from "lucide-react";
import { Testimonial } from "@/types/product";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
      <div className="flex items-center gap-1" aria-label={`${testimonial.rating} از ۵ ستاره`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < testimonial.rating ? "fill-amber-400 text-amber-400" : "text-border"}`}
          />
        ))}
      </div>
      <p className="mt-4 flex-1 text-[15px] leading-8 text-foreground/90">{testimonial.text}</p>
      <div className="mt-6 flex items-center gap-3">
        <Avatar>
          <AvatarImage src={testimonial.avatar} alt="" />
          <AvatarFallback>{testimonial.name.slice(0, 1)}</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
          {testimonial.role && <p className="text-xs text-muted-foreground">{testimonial.role}</p>}
        </div>
      </div>
    </div>
  );
}
