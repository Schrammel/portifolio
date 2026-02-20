"use client";

import { cn } from "~/lib/cn";

type ToggleChipProps = {
  active: boolean;
  label: string;
  onClick: () => void;
};

export function ToggleChip({ active, label, onClick }: ToggleChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-3 py-1.5 text-xs font-semibold tracking-wide transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]",
        active
          ? "border-[var(--chip-active-border)] bg-[var(--chip-active-bg)] text-[var(--chip-active-fg)]"
          : "border-[var(--chip-border)] bg-[var(--chip-bg)] text-[var(--chip-fg)] hover:bg-[var(--chip-hover)]",
      )}
      aria-pressed={active}
    >
      {label}
    </button>
  );
}
