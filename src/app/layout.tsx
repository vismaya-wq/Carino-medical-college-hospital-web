import type { Metadata } from "next";
import { Manrope, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { PageShell } from "@/components/PageShell";
import { site } from "@/data/site";

const display = Source_Serif_4({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.institutionName} | ${site.descriptor}`,
    template: `%s | ${site.institutionName}`,
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
      <body className="flex min-h-full flex-col bg-white font-sans antialiased text-[#26343d]">
        <PageShell>{children}</PageShell>
      </body>
    </html>
  );
}
