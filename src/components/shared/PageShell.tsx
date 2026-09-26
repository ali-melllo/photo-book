import { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";

type PageShellProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
};

/**
 * Shared shell for routes that only need to prove out the routing architecture
 * (shop, editor, checkout, account, ...). Full designs for these pages come later —
 * this keeps them on-brand (header/footer, typography, spacing) in the meantime.
 */
export function PageShell({ eyebrow, title, description, children }: PageShellProps) {
  return (
    <div className="container-px mx-auto max-w-3xl py-24 text-center sm:py-32">
      {eyebrow && <Badge>{eyebrow}</Badge>}
      <h1 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">{title}</h1>
      {description && <p className="mx-auto mt-4 max-w-xl leading-8 text-muted-foreground">{description}</p>}
      {children && <div className="mt-10">{children}</div>}
    </div>
  );
}
