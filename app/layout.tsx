import type { Metadata } from "next";
import { Prompt, Sarabun } from "next/font/google";
import "./globals.css";

const prompt = Prompt({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-prompt",
  display: "swap",
});

const sarabun = Sarabun({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sarabun",
  display: "swap",
});

export const metadata: Metadata = {
  title: "De Zine Studio — Creative Content, Advertising & Performance",
  description:
    "De Zine Studio is built for brands and marketing teams looking for a creative partner who takes real ownership of results. Creative content, online & OOH advertising, ads optimization, website design, and Arabic localization.",
  keywords: ["De Zine Studio", "Creative Content", "Motion Graphics", "3D Animation", "OOH Advertising", "Ads Optimization", "Arabic Localization", "Website Design", "Static Post Content", "MENA"],
  openGraph: {
    title: "De Zine Studio — Creative Content, Advertising & Performance",
    description:
      "A creative partner who takes real ownership of results — creative content, advertising, ads optimization, and more.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${prompt.variable} ${sarabun.variable}`}>
      <body className="font-body bg-ink text-paper antialiased selection:bg-accent selection:text-ink">
        {children}
      </body>
    </html>
  );
}
