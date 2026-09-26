"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "./ThemeProvider";
import { StoreProvider } from "@/store/provider";
import { Toaster } from "sonner";
import { RouteProgress } from "./RouteProgress";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <StoreProvider>
        <RouteProgress />
        {children}
        <Toaster position="top-center" richColors dir="rtl" />
      </StoreProvider>
    </ThemeProvider>
  );
}
