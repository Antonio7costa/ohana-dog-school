"use client";

import React from "react";
import { motion } from "framer-motion";
import { PawPrint, Calendar, Droplets, Dumbbell, Brain, Users, Sparkles, Bone, Search, Award, Activity } from "lucide-react";
import { whatsappLink } from "../lib/whatsapp";

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

const DESCRICAO =
  "Na Ohana Dog School, os cães participam de uma rotina planejada com socialização monitorada, atividades físicas e mentais, natação, academia, caça lúdica, agility, enriquecimento ambiental e desenvolvimento comportamental, promovendo mais equilíbrio, bem-estar e qualidade de vida, sempre respeitando a individualidade de cada aluno.";

export default function School() {
  return (
    <section id="escola" className="relative py-14 sm:py-24 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">

          {/* CABEÇALHO (só no celular): selo + título + descrição acima das fotos */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:hidden order-1 flex flex-col"
          >
            <motion.div variants={item} className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary mb-5 w-fit">
              <PawPrint className="h-4 w-4" />
              <span>Escola para cães</span>
            </motion.div>

            <motion.h2 variants={item} className="text-3xl font-extrabold text-slate-900 mb-5 leading-tight">
              Escola
            </motion.h2>

            <motion.p variants={item} className="text-base text-slate-600 leading-relaxed">
              {DESCRICAO}
            </motion.p>
          </motion.div>

          {/* FOTOS: no celular logo abaixo da descrição, no desktop à esquerda */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" as const }}
            viewport={{ once: true }}
            className="w-full max-w-md sm:max-w-none mx-auto order-2 lg:order-1 lg:col-span-5 lg:row-start-1 relative h-[360px] min-[420px]:h-[420px] sm:h-[540px]"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-sky-100/60 rounded-full blur-3xl -z-10" />

            {/* Foto 1 (Principal Superior Direita) */}
            <div className="absolute top-0 right-0 w-[68%] h-[58%] rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-2xl border-4 border-white z-20 bg-white">
              <img
                src="/images/aucademia.jpg"
                alt="Aucademia Ohana"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Foto 2 (Inferior Esquerda) */}
            <div className="absolute bottom-4 left-0 w-[60%] h-[52%] rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-xl border-4 border-white z-30 bg-white group">
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10 pointer-events-none" />
              <img
                src="/images/piscina.jpg"
                alt="Natação e atividades na escola"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Foto 3 (Detalhe Superior Esquerda) */}
            <div className="absolute top-8 left-2 sm:left-4 w-[42%] h-[38%] rounded-2xl overflow-hidden shadow-xl border-4 border-white z-40 bg-white">
              <img
                src="/images/piscina1.jpg"
                alt="Socialização monitorada"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Foto 4 (Detalhe Inferior Direita) */}
            <div className="absolute bottom-0 right-2 sm:right-4 w-[44%] h-[40%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-50 bg-white">
              <img
                src="/images/aucademia1.jpeg"
                alt="Enriquecimento ambiental"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Distintivo flutuante */}
            <div className="absolute top-2 right-2 sm:right-4 z-50 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-2xl shadow-md border border-slate-100 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-xs font-bold text-slate-800">Estrutura Completa</span>
            </div>
          </motion.div>

          {/* TEXTOS E ESTRUTURA: no celular vêm depois das fotos, no desktop à direita */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="order-3 lg:order-2 lg:col-span-7 lg:row-start-1 w-full flex flex-col"
          >
            {/* Cabeçalho (só no desktop) */}
            <div className="hidden lg:block">
              <motion.div variants={item} className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary mb-6">
                <PawPrint className="h-4 w-4" />
                <span>Escola para cães</span>
              </motion.div>

              <motion.h2 variants={item} className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                Escola
              </motion.h2>

              <motion.p variants={item} className="text-lg text-slate-600 mb-8 leading-relaxed">
                {DESCRICAO}
              </motion.p>
            </div>

            <div className="space-y-5 sm:space-y-6">
              <motion.div variants={item} className="bg-white p-5 sm:p-8 rounded-3xl border border-slate-100 shadow-sm">
                <h4 className="font-bold text-lg sm:text-xl text-slate-900 mb-3 flex items-center gap-2">
                  <Brain className="h-6 w-6 text-primary shrink-0" /> Treinos Especializados
                </h4>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Trabalhamos com treinos estruturados de <strong>obediência, limite, autocontrole</strong>, tanto em sessões individuais para foco total quanto em grupos para praticar o comportamento em situações reais.
                </p>
              </motion.div>

              <motion.div variants={item} className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {[
                  { icon: Users, label: "Socialização" },
                  { icon: Droplets, label: "Natação" },
                  { icon: Dumbbell, label: "Aucademia" },
                  { icon: Bone, label: "Enriquecimento ambiental" },
                  { icon: Sparkles, label: "SPA" },
                  { icon: Search, label: "Caça lúdica" },
                  { icon: Award, label: "Treinos Comportamentais" },
                  { icon: Activity, label: "Agility" },
                ].map((it, idx) => (
                  <div key={idx} className="flex items-center gap-2 sm:gap-3 bg-white p-3 sm:p-3.5 rounded-xl border border-slate-100 shadow-sm justify-center text-center sm:text-left">
                    <it.icon className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-xs sm:text-sm font-bold text-slate-700 leading-tight">{it.label}</span>
                  </div>
                ))}
              </motion.div>

              {/* CARD "MATRICULAR": um só, vale para celular e desktop */}
              <motion.div
                variants={item}
                className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-5 sm:p-6 rounded-2xl border border-slate-100 shadow-sm"
              >
                <div className="text-center sm:text-left">
                  <p className="text-sm font-bold text-slate-900 mb-0.5">Planos Flexíveis</p>
                  <p className="text-sm text-primary font-semibold">Pacotes de 1 a 3x por semana</p>
                </div>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 sm:px-8 py-4 text-sm font-bold text-white shadow-lg shadow-primary/30 hover:bg-primary/90 transition-all w-full sm:w-auto"
                >
                  <Calendar className="h-5 w-5" />
                  Matricular meu Cão
                </a>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}