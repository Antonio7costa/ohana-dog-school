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

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled 
          ? "bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-slate-200 shadow-sm" 
          : "bg-transparent border-transparent"
      }`}
    >

      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 transition-all duration-300">
        <div className="flex items-center justify-between">
          <a
            href="#inicio"
            aria-label="Ir para início"
            className="flex items-center gap-2.5 group hover:opacity-90 transition-all duration-300"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("inicio")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <div className="bg-primary/10 p-2 rounded-2xl text-primary group-hover:scale-105 transition-transform">
              <PawPrint className="h-5 w-5" />
            </div>
            <span className="font-extrabold text-slate-900 text-3xl tracking-tight leading-none">
              Ohana
            </span>
          </a>

          {/* Links do Menu Desktop */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((it) => (
              <a
                key={it.id}
                href={`#${it.id}`}
                className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(it.id)?.scrollIntoView({ behavior: "smooth" });
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
            className="md:hidden inline-flex items-center justify-center rounded-xl border border-slate-200 p-2 hover:bg-slate-50 transition"
            aria-label="Abrir menu"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="md:hidden"
        >
          <div
            className="fixed inset-0 bg-black/30"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div className="fixed right-4 top-4 w-[90vw] max-w-sm rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
            <div className="flex items-center justify-between">
              
              {/* Logo Mobile */}
              <div className="flex items-center gap-2 font-bold text-2xl text-slate-900">
                <span>Ohana</span>
                <img 
                  src="/images/flores.png" 
                  alt="Flores Ohana" 
                  className="h-8 w-auto object-contain" 
                />
              </div>

              <button
                type="button"
                aria-label="Fechar menu"
                onClick={() => setOpen(false)}
                className="rounded-xl border border-slate-200 p-2 hover:bg-slate-50 transition"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-4 flex flex-col gap-3">
              {navItems.map((it) => (
                <a
                  key={it.id}
                  href={`#${it.id}`}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(false);
                    document.getElementById(it.id)?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {it.label}
                </a>
              ))}

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white hover:bg-emerald-700 transition-colors"
                aria-label="Falar no WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}