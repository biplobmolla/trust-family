import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trust Family - Educational Services in Russia",
  description:
    "Comprehensive support for international students pursuing education in Russia. University admissions, visa assistance, accommodation, and academic support services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
