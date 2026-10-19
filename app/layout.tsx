import "../styles/globals.css";
import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import { siteMetadata } from "../lib/seo";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`scroll-smooth ${fredoka.variable}`}>
      <body className="bg-amber-50/30 text-slate-800 antialiased">
        {children}
      </body>
    </html>
  );
}