"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bus, ShieldCheck, Music, Info } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const },
  viewport: { once: true, margin: "-10% 0px -10% 0px" },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

// Variante para os filhos do staggerContainer (o fadeUp não tem hidden/show)
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Transport() {
  return (
    <section id="transporte" className="relative py-14 sm:py-24 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* CABEÇALHO (só no celular): selo + título acima da foto */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:hidden order-1"
          >
            <motion.div variants={item} className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary mb-5">
              <Bus className="h-4 w-4" />
              <span>Leva e Traz</span>
            </motion.div>

            <motion.h2 variants={item} className="text-3xl font-extrabold text-slate-900 leading-tight">
              Transporte <span className="text-primary">Seguro</span>
            </motion.h2>
          </motion.div>

          {/* FOTO: no celular logo abaixo do título, no desktop à direita */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" as const }}
            viewport={{ once: true }}
            className="order-2 lg:order-2 relative"
          >
            <div className="aspect-[4/3] rounded-[28px] sm:rounded-[40px] overflow-hidden shadow-2xl border-4 sm:border-8 border-white bg-slate-200 relative group">
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10 pointer-events-none transition-opacity group-hover:opacity-0" />

              <img
                src="/images/transporte.jpg"
                alt="Kombi de Transporte Ohana"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

          {/* TEXTOS: no celular vêm depois da foto, no desktop à esquerda */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="order-3 lg:order-1 lg:row-start-1"
          >
            {/* Cabeçalho (só no desktop) */}
            <div className="hidden lg:block">
              <motion.div variants={item} className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary mb-6">
                <Bus className="h-4 w-4" />
                <span>Leva e Traz</span>
              </motion.div>

              <motion.h2 variants={item} className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                Transporte <span className="text-primary">Seguro</span>
              </motion.h2>
            </div>

            <motion.div variants={item} className="space-y-5 sm:space-y-6 mb-6 sm:mb-8">
              {/* Ponto 1: Segurança */}
              <div className="flex gap-4">
                <div className="bg-white border border-slate-100 shadow-sm w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Segurança em 1º Lugar</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Os cães são transportados utilizando cinto de segurança ou caixa de transporte adequada ao seu porte.
                  </p>
                </div>
              </div>

              {/* Ponto 2: Relaxamento */}
              <div className="flex gap-4">
                <div className="bg-white border border-slate-100 shadow-sm w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                  <Music className="h-6 w-6 text-indigo-500" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Volta Relaxante</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Após as atividades, o retorno para casa acontece em um ambiente tranquilo, com cromoterapia e musicoterapia, proporcionando uma experiência relaxante.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Aviso Rodapé */}
            <motion.div variants={item} className="flex items-center gap-2 text-sm font-medium text-slate-500 bg-white border border-slate-200 px-4 py-3 rounded-lg w-fit max-w-full shadow-sm">
              <Info className="h-4 w-4 shrink-0 text-slate-400" />
              <p>Serviço opcional contratado à parte.</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}