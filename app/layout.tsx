import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import { ConsentBanner, ConsentProvider } from 'react-hook-consent';
import 'react-hook-consent/dist/styles/style.css';
import Script from 'next/script';
const inter = Inter_Tight({ subsets: ["latin"] });
import GoogleAnalytics from "./GoogleAnalytics";


export const metadata: Metadata = {
  title: "Bottomup Waitlist",
  description: "Sign in for the future of Communication"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <html lang="en">
       <GoogleAnalytics />
      <body className={inter.className}>{children}</body>
    </html>

  );
}
