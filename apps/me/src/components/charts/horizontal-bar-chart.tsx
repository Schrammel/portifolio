import { cn } from "~/lib/cn";

type HorizontalBarChartProps = {
  data: Array<{
    label: string;
    value: number;
  }>;
  max?: number;
  className?: string;
  valueLabel?: string;
};

export function HorizontalBarChart({
  data,
  max,
  className,
  valueLabel = "mentions",
}: HorizontalBarChartProps) {
  const maxValue = max ?? Math.max(...data.map((item) => item.value), 1);

  return (
    <div className={cn("space-y-3", className)}>
      {data.map((item) => {
        const width = maxValue === 0 ? 0 : (item.value / maxValue) * 100;

        return (
          <div key={item.label} className="grid gap-2 md:grid-cols-[180px_1fr_auto] md:items-center">
            <p className="text-sm font-semibold text-[var(--text)]">{item.label}</p>
            <div className="h-3 overflow-hidden rounded-full bg-[var(--chip-hover)]">
              <div
                className="h-full rounded-full bg-[var(--chart-emphasis)] transition-all duration-500"
                style={{ width: `${Math.max(4, width)}%` }}
                aria-hidden="true"
              />
            </div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">
              {item.value} {valueLabel}
            </p>
          </div>
        );
      })}
    </div>
  );
}
