import type { Metadata } from "next";

export const siteMetadata: Metadata = {
  title: "Ohana SJDR | Escola, Hospedagem, Banho e Tosa",
  description:
    "Educação, socialização e rotina supervisionada para o seu melhor amigo. Agende uma avaliação e fale com um especialista no WhatsApp.",
  metadataBase: new URL("https://seusite.com"), 
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ohana SJDR | Agende no WhatsApp",
    description:
      "Treinamento com equipe especializada, ambiente seguro e atendimento humanizado.",
    url: "https://seusite.com/",
    siteName: "Ohana SJDR",
    type: "website",
    images: [
      {
        url: "https://seusite.com/images/og-cover.jpg", 
        width: 1200,
        height: 630,
        alt: "Cachorro feliz aprendendo com equipe especializada na Ohana SJDR",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ohana SJDR | Agende no WhatsApp",
    description:
      "Educação, cuidado e amor para o seu melhor amigo. Fale conosco agora!",
    creator: "@ohanasjdr",
    images: ["https://seusite.com/images/og-cover.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};