import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturedBooksSection } from "@/components/landing/FeaturedBooksSection";
import { MemoryBookSection } from "@/components/landing/MemoryBookSection";
import { CustomBookSection } from "@/components/landing/CustomBookSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedBooksSection />
      <MemoryBookSection />
      <CustomBookSection />
      <FeaturesSection />
      <FAQSection />
      <TestimonialsSection />
    </>
  );
}
