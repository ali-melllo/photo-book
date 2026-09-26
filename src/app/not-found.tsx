import Link from "next/link";
import { BookX } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container-px mx-auto flex min-h-[70vh] max-w-lg flex-col items-center justify-center text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-primary">
        <BookX className="h-8 w-8" />
      </span>
      <h1 className="mt-6 text-2xl font-bold text-foreground sm:text-3xl">این صفحه پیدا نشد</h1>
      <p className="mt-3 leading-7 text-muted-foreground">
        صفحه‌ای که به دنبال آن بودید وجود ندارد یا جابه‌جا شده است.
      </p>
      <Button asChild size="lg" className="mt-8">
        <Link href="/">بازگشت به صفحه اصلی</Link>
      </Button>
    </div>
  );
}
