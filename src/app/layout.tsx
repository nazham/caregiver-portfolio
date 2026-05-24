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
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const savedTheme = localStorage.getItem('theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (_) {}
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased bg-[#FAF6F0] text-[#0F172A] selection:bg-[#C4A882]/20 selection:text-[#0F172A] dark:bg-[#0B0F19] dark:text-slate-100 dark:selection:bg-[#C4A882]/30 dark:selection:text-slate-100 transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
