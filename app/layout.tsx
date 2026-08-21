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
  title: "De Zine — Creative Design Studio",
  description:
    "De Zine is a creative design studio helping brands and businesses build identities, experiences, and digital products that stand out and stick around.",
  keywords: ["De Zine", "Design Studio", "Branding", "Web Design", "UI/UX", "Creative Studio Bangkok"],
  openGraph: {
    title: "De Zine — Creative Design Studio",
    description:
      "We design brands people actually remember — from identity, to websites, to digital campaigns.",
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
