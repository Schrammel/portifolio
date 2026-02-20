import { cn } from "~/lib/cn";

type SectionHeadingProps = {
  title: string;
  description?: string;
  as?: "h1" | "h2";
  className?: string;
};

export function SectionHeading({
  title,
  description,
  as = "h2",
  className,
}: SectionHeadingProps) {
  const HeadingTag = as;

  return (
    <header className={cn("space-y-2", className)}>
      <HeadingTag className="font-[var(--font-display)] text-2xl font-semibold text-[var(--text-strong)] md:text-3xl">
        {title}
      </HeadingTag>
      {description ? (
        <p className="max-w-3xl text-sm leading-6 text-[var(--text-muted)] md:text-base">
          {description}
        </p>
      ) : null}
    </header>
  );
}
