import type { Metadata } from "next";

// Troque pelo domínio real quando publicar (ou defina NEXT_PUBLIC_SITE_URL na hospedagem)
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://seusite.com";

export const siteMetadata: Metadata = {
  title: "Ohana SJDR | Escola, Hospedagem, Banho e Tosa em São João del-Rei",
  description:
    "Escola para cães, hospedagem especializada e banho e tosa em São João del-Rei. Educação, socialização e rotina supervisionada para o seu melhor amigo. Agende uma avaliação pelo WhatsApp.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ohana SJDR | Agende no WhatsApp",
    description:
      "Treinamento com equipe especializada, ambiente seguro e atendimento humanizado.",
    url: "/",
    siteName: "Ohana SJDR",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Cães felizes na Ohana Dog School, em São João del-Rei",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ohana SJDR | Agende no WhatsApp",
    description:
      "Educação, cuidado e amor para o seu melhor amigo. Fale conosco agora!",
    images: ["/images/og-cover.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};