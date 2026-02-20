import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold tracking-wide transition-colors",
  {
    variants: {
      variant: {
        default:
          "border-[var(--badge-border)] bg-[var(--badge-bg)] text-[var(--badge-fg)]",
        secondary:
          "border-[var(--chip-border)] bg-[var(--chip-bg)] text-[var(--chip-fg)]",
        emphasis:
          "border-[var(--chip-active-border)] bg-[var(--chip-active-bg)] text-[var(--chip-active-fg)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return (
    <span
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
