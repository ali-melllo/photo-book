"use client"

import Link from "next/link";
import { BookImage, Instagram, Twitter, Youtube } from "lucide-react";
import { footerLinkGroups } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-px mx-auto max-w-7xl py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2" aria-label="مهرورو، صفحه اصلی">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10">
                <BookImage className="h-5 w-5" />
              </span>
              <span className="text-lg font-bold">مهرورو</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-7 text-white/60">خاطرات، همیشه با تو.</p>
            <div className="mt-6 flex items-center gap-3">
              {[Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="شبکه اجتماعی مهرورو"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-white/20 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {footerLinkGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold text-white/90">{group.title}</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-white/60 transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold text-white/90">مشترک در خبرنامه</h3>
            <p className="mt-4 text-sm leading-7 text-white/60">از تخفیف‌ها و ویژگی‌های تازه مهرورو باخبر شوید.</p>
            <form className="mt-4 flex items-center gap-2" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="newsletter-email" className="sr-only">
                ایمیل شما
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="ایمیل خود را وارد کنید"
                className="h-11 w-full min-w-0 rounded-full border border-white/15 bg-white/5 px-4 text-sm text-white placeholder:text-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              />
              <Button type="submit" size="icon" className="shrink-0">
                <span className="sr-only">ثبت ایمیل</span>
                <BookImage className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} مهرورو. تمامی حقوق محفوظ است.</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-white">
              قوانین و مقررات
            </Link>
            <Link href="/about" className="hover:text-white">
              حریم خصوصی
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
