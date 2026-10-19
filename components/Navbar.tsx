"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, MessageCircle, PawPrint } from "lucide-react";
import { whatsappLink } from "../lib/whatsapp";

const navItems = [
  { id: "inicio", label: "Início" },
  { id: "quem-somos", label: "Quem Somos" },
  { id: "como-funciona", label: "Como Funciona" },
  { id: "escola", label: "Escola" },
  { id: "hospedagem", label: "Hospedagem" },
  { id: "banho-tosa", label: "Banho & Tosa" },
  { id: "galeria", label: "Galeria" },
  { id: "faq", label: "FAQ" },
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Trava a rolagem da página e fecha com Esc enquanto o menu está aberto
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function goTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <motion.header
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" as const }}
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-slate-200 shadow-sm"
            : "bg-transparent border-transparent"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 sm:py-4 transition-all duration-300">
          <div className="flex items-center justify-between">
            <a
              href="#inicio"
              aria-label="Ir para início"
              className="flex items-center gap-2.5 group hover:opacity-90 transition-all duration-300"
              onClick={(e) => {
                e.preventDefault();
                goTo("inicio");
              }}
            >
              <div className="bg-primary/10 p-2 rounded-2xl text-primary group-hover:scale-105 transition-transform">
                <PawPrint className="h-5 w-5" />
              </div>
              <span className="font-extrabold text-slate-900 text-2xl sm:text-3xl tracking-tight leading-none">
                Ohana
              </span>
            </a>

            {/* Menu desktop: só a partir de lg (1024px), porque são 8 itens + botão */}
            <div className="hidden lg:flex items-center gap-5 xl:gap-6">
              {navItems.map((it) => (
                <a
                  key={it.id}
                  href={`#${it.id}`}
                  className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors whitespace-nowrap"
                  onClick={(e) => {
                    e.preventDefault();
                    goTo(it.id);
                  }}
                >
                  {it.label}
                </a>
              ))}

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                aria-label="Abrir WhatsApp"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>

            <button
              type="button"
              className="lg:hidden inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white/80 p-2.5 hover:bg-slate-50 transition"
              aria-label="Abrir menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Menu mobile fora do <header>: o backdrop-blur do header prenderia o "fixed" dentro dele */}
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="lg:hidden fixed inset-0 z-[60]"
        >
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute right-4 top-4 w-[calc(100%-2rem)] max-w-sm max-h-[calc(100dvh-2rem)] overflow-y-auto rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-bold text-2xl text-slate-900">
                <span>Ohana</span>
              </div>

              <button
                type="button"
                aria-label="Fechar menu"
                onClick={() => setOpen(false)}
                className="rounded-xl border border-slate-200 p-2.5 hover:bg-slate-50 transition"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-4 flex flex-col gap-1">
              {navItems.map((it) => (
                <a
                  key={it.id}
                  href={`#${it.id}`}
                  className="rounded-xl px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 transition"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(false);
                    goTo(it.id);
                  }}
                >
                  {it.label}
                </a>
              ))}

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white hover:bg-emerald-700 transition-colors"
                aria-label="Falar no WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}