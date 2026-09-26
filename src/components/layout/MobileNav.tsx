"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X, User, ShoppingBag } from "lucide-react";
import { navigationItems } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { closeMobileNav, openMobileNav, toggleMobileNav } from "@/store/slices/uiSlice";

export function MobileNav() {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((s) => s.ui.isMobileNavOpen);

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => dispatch(open ? openMobileNav() : closeMobileNav())}>
      <Dialog.Trigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          aria-label="باز کردن منو"
          onClick={() => dispatch(toggleMobileNav())}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[110] bg-navy/40 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in" />
        <Dialog.Content
          dir="rtl"
          className="fixed inset-y-0 right-0 z-[120] flex h-full w-[85vw] max-w-sm flex-col bg-background p-6 shadow-2xl focus:outline-none"
        >
          <div className="flex items-center justify-between">
            <Dialog.Title className="text-lg font-bold">منو</Dialog.Title>
            <Dialog.Close asChild>
              <Button variant="ghost" size="icon" aria-label="بستن منو">
                <X className="h-5 w-5" />
              </Button>
            </Dialog.Close>
          </div>

          <nav className="mt-8 flex flex-col gap-1" aria-label="ناوبری موبایل">
            {navigationItems.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
              return (
                <Dialog.Close asChild key={item.label + item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "rounded-2xl px-4 py-3 text-base font-medium",
                      active ? "bg-secondary text-primary" : "text-foreground hover:bg-muted"
                    )}
                  >
                    {item.label}
                  </Link>
                </Dialog.Close>
              );
            })}
          </nav>

          <div className="mt-auto flex flex-col gap-3 border-t border-border pt-6">
            <Dialog.Close asChild>
              <Button variant="outline" size="lg" className="justify-start gap-3" asChild>
                <Link href="/login">
                  <User className="h-5 w-5" /> حساب کاربری
                </Link>
              </Button>
            </Dialog.Close>
            <Dialog.Close asChild>
              <Button variant="outline" size="lg" className="justify-start gap-3" asChild>
                <Link href="/cart">
                  <ShoppingBag className="h-5 w-5" /> سبد خرید
                </Link>
              </Button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
