import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0F172A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Isham Care | Professional Home Caregiving Services",
  description: "Certified professional home caregiving visits in Colombo and suburbs, Sri Lanka. Providing compassion, dignity, and clinical precision for recovery and elderly care.",
  icons: {
    icon: "/favicon.ico", // Standard Next.js favicon path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-[#FAF6F0] text-[#0F172A] selection:bg-[#C4A882]/20 selection:text-[#0F172A]">
        {children}
      </body>
    </html>
  );
}
