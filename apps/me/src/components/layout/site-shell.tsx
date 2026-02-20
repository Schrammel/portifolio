import Link from "next/link";

import { profileData } from "~/data/profile";
import { SiteNav } from "./site-nav";
import { ThemeToggle } from "./theme-toggle";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-0 top-0 h-[28rem] w-[32rem] rounded-full bg-[var(--bg-accent)] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[24rem] w-[24rem] rounded-full bg-[var(--bg-accent-2)] blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-[var(--card-border)] bg-[var(--bg)] backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-4 md:px-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/"
              className="font-[var(--font-display)] text-lg font-semibold tracking-tight text-[var(--text-strong)]"
            >
              {profileData.identity.name}
            </Link>
            <ThemeToggle />
          </div>
          <SiteNav />
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-8 md:px-6 md:pt-12">
        {children}
      </main>
    </div>
  );
}
