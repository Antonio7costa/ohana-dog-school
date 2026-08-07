import "./../styles/globals.css";
import type { Metadata } from "next";
import { siteMetadata } from "../lib/seo";

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="bg-amber-50/30 text-slate-800 antialiased">
        {children}
      </body>
    </html>
  );
}