"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, User, ShoppingBag, BookImage } from "lucide-react";
import { navigationItems } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { MobileNav } from "./MobileNav";
import { cn } from "@/lib/utils";
import { useAppSelector } from "@/store/hooks";
import { selectCartCount } from "@/store/slices/cartSlice";
import { useEffect, useState } from "react";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const cartCount = useAppSelector(selectCartCount);

  return (
    <header
      className={cn(
        "sticky top-0 md:top-2 z-50 mx-auto w-full",
        "bg-gradient-to-b from-secondary/60 via-background to-background backdrop-blur-md",
        "border rounded-md",
        scrolled
          ? [
            "max-w-7xl border-border/70",
            "shadow-[0_20px_25px_-5px_rgba(16,19,31,0.12),0_8px_10px_-6px_rgba(16,19,31,0.10)]",
          ]
          : [
            "max-w-full border-transparent",
            "shadow-[0_20px_25px_-5px_rgba(16,19,31,0),0_8px_10px_-6px_rgba(16,19,31,0)]",
          ],
        "transition-[max-width,border-color,box-shadow,padding] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
        "will-change-[max-width,box-shadow]"
      )}
    >
      <div className="container-px mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4">
        {/* Logo — rightmost in RTL reading order */}
        <Link href="/" className="flex items-center w-3/12 gap-2 shrink-0" aria-label="مهرورو، صفحه اصلی">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-navy text-white">
            <BookImage className="h-5 w-5" />
          </span>
          <span className="text-lg font-bold text-foreground">مهرورو</span>
        </Link>

        {/* Main navigation */}
        <nav className="hidden w-6/12 justify-center items-center gap-1 lg:flex" aria-label="ناوبری اصلی">
          {navigationItems.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
            return (
              <Link
                key={item.label + item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  active ? "bg-secondary text-primary" : "text-foreground/80 hover:text-primary"
                )}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex w-3/12 items-center gap-1.5 sm:gap-2">
          <ThemeToggle />
          <Button variant="ghost" size="icon" aria-label="جستجو" className="hidden sm:inline-flex">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="حساب کاربری" className="hidden sm:inline-flex" asChild>
            <Link href="/login">
              <User className="h-5 w-5" />
            </Link>
          </Button>
          <Button size="default" className="hidden gap-2 sm:inline-flex mr-auto" asChild>
            <Link href="/cart">
              <ShoppingBag className="h-4 w-4" />
              <span>ثبت خرید</span>
              {cartCount > 0 && (
                <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[11px] font-bold text-primary-foreground">
                  {cartCount}
                </span>
              )}
            </Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
