const links = [
  { href: "#overview", label: "Overview" },
  { href: "#timeline", label: "Timeline" },
  { href: "#skills", label: "Skills" },
  { href: "#web3", label: "Web3" },
  { href: "#open-source", label: "Open Source" },
];

export function SiteNav() {
  return (
    <nav aria-label="Section navigation" className="flex flex-wrap gap-2">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="rounded-full border border-[var(--chip-border)] bg-[var(--chip-bg)] px-4 py-2 text-xs font-semibold tracking-wide text-[var(--chip-fg)] transition-colors hover:bg-[var(--chip-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
