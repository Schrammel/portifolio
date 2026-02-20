import "~/styles/globals.css";

import { type Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import Script from "next/script";

import { SiteShell } from "~/components/layout/site-shell";
import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  metadataBase: new URL("https://schrammel.xyz"),
  title: {
    default: "David Schrammel | Career Dashboard",
    template: "%s | David Schrammel",
  },
  description:
    "Read-only career dashboard visualizing David Schrammel's professional profile, timeline, skills, and Web3 work.",
  openGraph: {
    title: "David Schrammel | Career Dashboard",
    description:
      "Read-only career dashboard visualizing profile data, experience timeline, skills emphasis, and Web3 feature work.",
    url: "https://schrammel.xyz",
    siteName: "David Schrammel Career Dashboard",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-placeholder.svg",
        width: 1200,
        height: 630,
        alt: "Placeholder OpenGraph image for David Schrammel Career Dashboard.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "David Schrammel | Career Dashboard",
    description:
      "Read-only career dashboard with timeline, skills visualizations, and Web3 highlights.",
    images: ["/og-placeholder.svg"],
  },
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const themeInitScript = `
(() => {
  try {
    const key = "career-dashboard-theme";
    const stored = window.localStorage.getItem(key);
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = stored === "dark" || stored === "light" ? stored : prefersDark ? "dark" : "light";
    document.documentElement.dataset.theme = theme;
  } catch {
    document.documentElement.dataset.theme = "light";
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <TRPCReactProvider>
          <SiteShell>{children}</SiteShell>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
