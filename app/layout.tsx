import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar'/navbar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ToasterProvider } from "@/providers/ToastProvider";
import { Analytics } from "@vercel/analytics/react";
import Favicon from "./favicon.png";
import Footer from "@/components/footer/footer";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Vishal Karangale",
  description: "Personal website of Vishal Karangale",
  icons: [
    {
      rel: "icon",
      url: Favicon.src,
    },
  ],
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
        <TooltipProvider delayDuration={100}>
          <Navbar />
          {children}
          <Analytics />
          <Footer />
        </TooltipProvider>
      </body>
    </html>
  );
}
