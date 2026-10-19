"use client";

import React from "react";
import { motion } from "framer-motion";
import { Home, Moon, ShieldCheck, Calendar, Sun, Sparkles, Smartphone, Camera, MessageCircle } from "lucide-react";
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

export default function Boarding() {
  return (
    <section id="hospedagem" className="py-14 sm:py-24 relative scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

        {/* CABEÇALHO */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <motion.h2 {...fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Hospedagem Especializada
          </motion.h2>
        </div>

        <div className="space-y-12 sm:space-y-16">

          {/* 1. QUARTOS + INTEGRAÇÃO COM A ESCOLA */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">

            {/* INTRODUÇÃO (só no celular): selo + descrição acima das fotos */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="lg:hidden order-1 space-y-5"
            >
              <motion.div variants={item} className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-4 py-2 text-sm font-semibold text-primary">
                <Home className="h-4 w-4 shrink-0" />
                <span>Sem canis, baias ou gaiolas</span>
              </motion.div>

              <motion.p variants={item} className="text-base text-slate-600 leading-relaxed">
                Quartos temáticos amplos e confortáveis, separados de acordo com porte,
                perfil comportamental e compatibilidade social.
                <span className="text-sm italic text-slate-500 mt-2 block">* Contamos com quarto exclusivo para cães grandes.</span>
              </motion.p>
            </motion.div>

            {/* FOTOS: no celular logo abaixo da introdução, no desktop à esquerda */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" as const }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 lg:col-span-5 lg:row-start-1 relative h-[360px] min-[420px]:h-[420px] sm:h-[500px] w-full max-w-md sm:max-w-none mx-auto"
            >
              {/* Foto 1 (Principal Superior Direita) */}
              <div className="absolute top-0 right-0 w-[72%] h-[62%] rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-2xl border-4 border-white z-20 bg-white">
                <img
                  src="/images/quarto1.jpeg"
                  alt="Quarto temático principal Ohana"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Foto 2 (Inferior Esquerda) */}
              <div className="absolute bottom-4 left-0 w-[62%] h-[56%] rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-xl border-4 border-white z-30 bg-white group">
                <div className="absolute inset-0 bg-indigo-500/10 mix-blend-multiply z-10 pointer-events-none" />
                <img
                  src="/images/quarto2.jpeg"
                  alt="Quarto temático aconchegante"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Foto 3 (Detalhe Inferior Direita) */}
              <div className="absolute bottom-0 right-2 sm:right-4 w-[46%] h-[42%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-40 bg-white">
                <img
                  src="/images/quarto3.jpg"
                  alt="Detalhe do quarto temático"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Distintivo flutuante estético */}
              <div className="absolute top-4 left-2 sm:top-6 sm:left-4 z-50 bg-white/90 backdrop-blur-md px-3 sm:px-3.5 py-2 rounded-2xl shadow-md border border-slate-100 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-indigo-600" />
                <span className="text-xs font-bold text-slate-800">Quartos Exclusivos</span>
              </div>
            </motion.div>

            {/* TEXTOS: no celular vêm depois das fotos, no desktop à direita */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="order-3 lg:order-2 lg:col-span-7 lg:row-start-1 space-y-5 sm:space-y-6"
            >
              {/* Selo + descrição (só no desktop) */}
              <motion.div variants={item} className="hidden lg:inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-4 py-2 text-sm font-semibold text-primary">
                <Home className="h-4 w-4 shrink-0" />
                <span>Sem canis, baias ou gaiolas</span>
              </motion.div>

              <motion.p variants={item} className="hidden lg:block text-lg text-slate-600 leading-relaxed">
                Quartos temáticos amplos e confortáveis, separados de acordo com porte,
                perfil comportamental e compatibilidade social. <br />
                <span className="text-sm italic text-slate-500 mt-2 block">* Contamos com quarto exclusivo para cães grandes.</span>
              </motion.p>

              <motion.div variants={item} className="bg-white p-5 sm:p-8 rounded-[28px] sm:rounded-[32px] shadow-sm border border-slate-100 relative overflow-hidden">
                <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3.5 py-1.5 text-xs font-semibold text-amber-600 mb-4">
                  <Sun className="h-3.5 w-3.5" />
                  <span>Rotina Ativa</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3">
                  Integração total com a Escola
                </h3>

                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Nossos hóspedes não ficam parados. Durante o dia, os cães participam da rotina da escola, com <strong>socialização monitorada, atividades físicas e mentais, enriquecimento ambiental, natação e caça lúdica.</strong>
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* 2. MONITORAMENTO 24 HORAS */}
          <motion.div
            {...fadeUp}
            className="bg-slate-900 rounded-[28px] sm:rounded-[32px] p-6 sm:p-10 shadow-xl relative overflow-hidden flex flex-col lg:flex-row items-center gap-6 sm:gap-8 border border-slate-800 max-w-5xl mx-auto"
          >
            <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

            <div className="h-14 w-14 sm:h-16 sm:w-16 shrink-0 rounded-2xl bg-white/10 flex items-center justify-center border border-white/10 shadow-inner relative z-10">
              <ShieldCheck className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
            </div>

            <div className="flex-1 text-center lg:text-left relative z-10">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Monitoramento 24 horas</h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-4">
                Um dos nossos monitores profissionais permanece hospedado junto aos cães durante toda a noite, garantindo supervisão contínua.
              </p>

              <div className="flex flex-col sm:flex-row sm:flex-wrap items-center lg:items-start sm:justify-center lg:justify-start gap-x-5 gap-y-2">
                <div className="flex items-center gap-2 text-slate-300 text-sm">
                  <Smartphone className="h-4 w-4 text-primary shrink-0" />
                  Acompanhamento em tempo real pelo app
                </div>
                <div className="flex items-center gap-2 text-slate-300 text-sm">
                  <Camera className="h-4 w-4 text-primary shrink-0" />
                  Fotos diárias do seu cão
                </div>
                <div className="flex items-center gap-2 text-slate-300 text-sm">
                  <MessageCircle className="h-4 w-4 text-primary shrink-0" />
                  Chat direto com a equipe
                </div>
              </div>
            </div>

            <div className="shrink-0 w-full lg:w-auto relative z-10">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-8 py-4 text-sm sm:text-base font-bold text-white hover:bg-primary/90 transition-all w-full shadow-lg shadow-primary/20"
              >
                <Calendar className="h-5 w-5" />
                Agendar Vaga
              </a>
            </div>
          </motion.div>

          {/* 3. SPA NOTURNO & CROMOTERAPIA (Fechamento da seção) */}
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-16 items-center">

            {/* TÍTULO (só no celular): selo + SPA acima da foto */}
            <motion.div
              {...fadeUp}
              className="lg:hidden order-1"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3.5 py-1.5 text-xs font-semibold text-indigo-600 mb-3">
                <Moon className="h-3.5 w-3.5" />
                <span>Rotina do Sono</span>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">SPA</h3>
            </motion.div>

            {/* FOTO ÚNICA: no celular fica no meio, no desktop fica à direita */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" as const }}
              viewport={{ once: true }}
              className="order-2 lg:order-2 lg:col-span-5 relative w-full max-w-sm sm:max-w-md lg:max-w-none mx-auto"
            >
              <div className="relative aspect-[4/5] rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-xl border-4 border-white">
                <img
                  src="/images/spa.jpeg"
                  alt="Ambiente do SPA noturno Ohana"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute top-5 left-3 sm:top-6 sm:-left-6 z-10 bg-white/90 backdrop-blur-md px-3 sm:px-3.5 py-2 rounded-2xl shadow-md border border-slate-100 flex items-center gap-2">
                <Moon className="h-4 w-4 text-indigo-600" />
                <span className="text-xs font-bold text-slate-800">Ambiente calmo</span>
              </div>
            </motion.div>

            {/* TEXTO: no celular vem depois da foto, no desktop fica à esquerda */}
            <motion.div
              {...fadeUp}
              className="order-3 lg:order-1 lg:col-span-7 lg:row-start-1"
            >
              <div className="bg-white p-5 sm:p-8 rounded-[28px] sm:rounded-[32px] shadow-sm border border-slate-100 relative overflow-hidden">
                {/* Selo + título dentro do card: só no desktop */}
                <div className="hidden lg:block">
                  <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3.5 py-1.5 text-xs font-semibold text-indigo-600 mb-4">
                    <Moon className="h-3.5 w-3.5" />
                    <span>Rotina do Sono</span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-3">SPA</h3>
                </div>

                <p className="text-slate-600 mb-6 leading-relaxed text-sm sm:text-base">
                  O SPA é utilizado esporadicamente à noite quando há dificuldade na adaptação, a fim de promover relaxamento profundo tranquilizando os cães.
                  Já na rotina da escola o SPA tem mais finalidades para além de promover relaxamento, utilizamos o SPA para dessensibilização sonora principalmente
                  em épocas de chuva com trovões ou épocas de fogos de artifícios.
                </p>

                <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                  {[
                    { name: "Cromoterapia", color: "bg-blue-400" },
                    { name: "Musicoterapia", color: "bg-purple-400" },
                    { name: "Aromaterapia", color: "bg-emerald-400" },
                    { name: "Feromonioterapia", color: "bg-rose-400" },
                    { name: "Massagem Relaxante", color: "bg-yellow-400" },
                  ].map((it, idx) => (
                    <div key={idx} className="flex items-center gap-2 sm:gap-3 bg-slate-50 p-2.5 sm:p-3 rounded-2xl border border-slate-100">
                      <div className={`h-3.5 w-3.5 rounded-full ${it.color} shadow-sm shrink-0`} />
                      <span className="font-semibold text-xs sm:text-sm text-slate-700 leading-tight">{it.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}