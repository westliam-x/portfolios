import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "William “West” — Full‑Stack Engineer",
  description: "Portfolio of William (West): full‑stack engineer building web, mobile, and backend systems.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className + " text-ink bg-bg"}>{children}</body>
    </html>
  );
}
