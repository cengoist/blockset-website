import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://blockset.online";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "BlockSet: Neon Puzzle Game",
    template: "%s · BlockSet",
  },
  description:
    "BlockSet is a relaxing neon block puzzle. Hit massive combos, train your brain, and play offline at a buttery 60fps. No time limits, just pure puzzle flow.",
  keywords: [
    "BlockSet",
    "block puzzle",
    "neon puzzle game",
    "offline puzzle",
    "brain training",
    "combo puzzle",
  ],
  applicationName: "BlockSet",
  authors: [{ name: "Cengiz Şen" }],
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "BlockSet: Neon Puzzle Game",
    description:
      "Relax, hit massive combos, and train your brain. No time limits, just pure puzzle flow.",
    siteName: "BlockSet",
  },
  twitter: {
    card: "summary_large_image",
    title: "BlockSet: Neon Puzzle Game",
    description:
      "Relax, hit massive combos, and train your brain. No time limits, just pure puzzle flow.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased selection:bg-electric/30">
        {children}
      </body>
    </html>
  );
}
