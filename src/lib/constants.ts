export type NavItem = {
  label: string;
  href: string;
};

/** Single source of truth for main navigation — used by both desktop Header and MobileNav. */
export const navigationItems: NavItem[] = [
  { label: "صفحه اصلی", href: "/" },
  { label: "فروشگاه", href: "/shop" },
  { label: "درباره ما", href: "/about" },
  { label: "وبلاگ", href: "/blog" },
];

export const footerLinkGroups: { title: string; links: NavItem[] }[] = [
  {
    title: "راهنما",
    links: [
      { label: "تماس با ما", href: "/about" },
      { label: "راهنمای سفارش", href: "/about" },
      { label: "شرایط بازگشت کالا", href: "/about" },
      { label: "حریم خصوصی", href: "/about" },
    ],
  },
  {
    title: "دسترسی سریع",
    links: [
      { label: "صفحه اصلی", href: "/" },
      { label: "فروشگاه", href: "/shop" },
      { label: "قالب‌های آماده", href: "/shop" },
      { label: "ساخت کتاب سفارشی", href: "/editor" },
    ],
  },
  {
    title: "پشتیبانی",
    links: [
      { label: "سوالات متداول", href: "/#faq" },
      { label: "پیگیری سفارش", href: "/account/orders" },
      { label: "وضعیت ارسال", href: "/about" },
    ],
  },
];
