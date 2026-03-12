import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Surya Figs Garden",
  description: "Landing page tanaman",
  icons: {
    icon: "/icon-SFG.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-white text-black`}>
        <Navbar />

        {/* offset navbar fixed */}
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
