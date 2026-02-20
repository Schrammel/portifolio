"use client";

import * as React from "react";
import * as RechartsPrimitive from "recharts";

import { cn } from "~/lib/utils";

export type ChartConfig = Record<
  string,
  {
    label?: React.ReactNode;
    color?: string;
    theme?: {
      light: string;
      dark: string;
    };
  }
>;

type ChartContextProps = {
  config: ChartConfig;
};

const ChartContext = React.createContext<ChartContextProps | null>(null);

export function useChart() {
  const context = React.useContext(ChartContext);

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }

  return context;
}

function ChartContainer({
  id,
  className,
  children,
  config,
  ...props
}: React.ComponentProps<"div"> & {
  config: ChartConfig;
  children: React.ComponentProps<
    typeof RechartsPrimitive.ResponsiveContainer
  >["children"];
}) {
  const uniqueId = React.useId();
  const chartId = `chart-${id ?? uniqueId.replace(/:/g, "")}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-slot="chart"
        data-chart={chartId}
        className={cn(
          "flex aspect-[16/9] items-center justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-[var(--text-muted)] [&_.recharts-cartesian-grid_line]:stroke-[var(--card-border)] [&_.recharts-tooltip-cursor]:stroke-[var(--chip-border)]",
          className,
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
}

function ChartStyle({ id, config }: { id: string; config: ChartConfig }) {
  const colorConfig = Object.entries(config).filter(
    ([, configItem]) => configItem.theme ?? configItem.color,
  );

  if (!colorConfig.length) {
    return null;
  }

  const lightVars = colorConfig
    .map(([key, item]) => {
      const color = item.color ?? item.theme?.light;
      return color ? `--color-${key}: ${color};` : null;
    })
    .filter(Boolean)
    .join("\n");

  const darkVars = colorConfig
    .map(([key, item]) => {
      const color = item.theme?.dark ?? item.color;
      return color ? `--color-${key}: ${color};` : null;
    })
    .filter(Boolean)
    .join("\n");

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
[data-chart=${id}] {
${lightVars}
}
[data-theme="dark"] [data-chart=${id}] {
${darkVars}
}
`,
      }}
    />
  );
}

const ChartTooltip = RechartsPrimitive.Tooltip;
const ChartLegend = RechartsPrimitive.Legend;

export { ChartContainer, ChartTooltip, ChartLegend };
