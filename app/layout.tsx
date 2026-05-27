import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Urban Atlas | Verified Resale Plot Intelligence in Lucknow",
  description:
    "Discover verified resale LDA & Awas Vikas plots across Gomti Nagar, Jankipuram, Shaheed Path, and other prime residential localities in Lucknow. Private residential inventory network for serious buyers.",
  keywords: [
    "Lucknow real estate",
    "LDA plots Lucknow",
    "Awas Vikas plots Lucknow",
    "resale plots Gomti Nagar",
    "Jankipuram resale plots",
    "Lucknow resale land",
    "private property intelligence Lucknow",
  ],
  authors: [{ name: "Urban Atlas" }],
  openGraph: {
    title: "Urban Atlas | Verified Resale Plot Intelligence in Lucknow",
    description:
      "Private residential resale intelligence focused on verified opportunities, locality insights, and serious buyers in Lucknow.",
    url: "https://urbanatlas.in",
    siteName: "Urban Atlas",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth`}>
      <body className="min-h-full bg-white text-[#222222] antialiased font-sans flex flex-col selection:bg-[#FF385C]/10 selection:text-[#FF385C]">
        {children}
      </body>
    </html>
  );
}
