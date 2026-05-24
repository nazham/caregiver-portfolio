import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#2563eb",
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
    <html lang="en" className={`${plusJakartaSans.variable}`}>
      <body className="font-sans antialiased bg-slate-50 text-slate-900 selection:bg-blue-200 selection:text-blue-900">
        {children}
      </body>
    </html>
  );
}
