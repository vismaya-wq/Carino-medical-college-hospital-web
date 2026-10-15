import type { Metadata } from "next";
import { DM_Sans, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { PageShell } from "@/components/PageShell";
import { site } from "@/data/site";

const display = Source_Serif_4({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const body = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `Proposed ${site.projectName}`,
    template: `%s · ${site.institutionShort}`,
  },
  description: site.heroIntro,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-paper font-sans antialiased text-charcoal">
        <PageShell>{children}</PageShell>
      </body>
    </html>
  );
}
