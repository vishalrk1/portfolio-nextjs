import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar'/navbar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ToasterProvider } from "@/providers/ToastProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vishal Karangale",
  description: "Personal website of Vishal Karangale",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToasterProvider />
        <TooltipProvider delayDuration={200}>
          <Navbar />
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
