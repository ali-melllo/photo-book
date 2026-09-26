"use client";

import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <div className="container-px mx-auto flex min-h-[70vh] max-w-lg flex-col items-center justify-center text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10 text-destructive">
        <AlertTriangle className="h-8 w-8" />
      </span>
      <h1 className="mt-6 text-2xl font-bold text-foreground sm:text-3xl">مشکلی پیش آمد</h1>
      <p className="mt-3 leading-7 text-muted-foreground">
        متأسفانه در بارگذاری این صفحه خطایی رخ داد. لطفاً دوباره تلاش کنید.
      </p>
      <Button size="lg" className="mt-8" onClick={() => reset()}>
        تلاش مجدد
      </Button>
    </div>
  );
}
