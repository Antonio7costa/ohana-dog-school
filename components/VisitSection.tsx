"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, Camera, ShieldCheck, Store, Dumbbell, Droplets, Home, MessageCircle } from "lucide-react";
import { whatsappLink } from "../lib/whatsapp";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const },
  viewport: { once: true, margin: "-10% 0px -10% 0px" },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

// Variante para os filhos do staggerContainer (o fadeUp não tem hidden/show)
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const visitItems = [
  { icon: Store, text: "Nossa recepção com lojinha" },
  { icon: Droplets, text: "O SPA Pet" },
  { icon: Dumbbell, text: "A Aucademia" },
  { icon: Home, text: "Um de nossos pátios de atividades (quando disponível)" },
  { icon: ShieldCheck, text: "Nosso escritório administrativo" },
];

export default function VisitSection() {
  return (
    <section id="conheca-a-ohana" className="py-14 sm:py-24 relative scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Cabeçalho */}
        <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-4 py-2 text-sm font-semibold text-primary mb-5 sm:mb-6 shadow-sm">
            <MapPin className="h-4 w-4 shrink-0" />
            <span>São João del-Rei</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-5 sm:mb-6">
            Conheça a <span className="text-primary">Ohana</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Nada substitui a experiência de conhecer pessoalmente nossa estrutura. Realizamos visitas mediante agendamento prévio.
          </p>
        </motion.div>

        {/* Grid Principal: O que você vai conhecer + Câmeras */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-stretch mb-10 sm:mb-12">

          {/* Card Esquerdo: O que você pode conhecer */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-white rounded-[28px] sm:rounded-[32px] p-6 sm:p-10 border border-slate-100 shadow-sm flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <div className="bg-primary/10 p-2.5 rounded-xl text-primary shrink-0">
                  <Calendar className="h-5 w-5" />
                </div>
                <span>Durante a visita, você poderá conhecer:</span>
              </h3>

              <ul className="space-y-4">
                {visitItems.map((it, idx) => (
                  <motion.li key={idx} variants={item} className="flex items-center gap-3 text-slate-700 font-medium text-sm sm:text-base">
                    <div className="h-8 w-8 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-primary shrink-0">
                      <it.icon className="h-4 w-4" />
                    </div>
                    <span>{it.text}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Card Direito: Câmeras e Transparência */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-slate-900 text-white rounded-[28px] sm:rounded-[32px] p-6 sm:p-10 shadow-xl relative overflow-hidden flex flex-col justify-between"
          >
            {/* Brilho decorativo no card escuro */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="relative z-10">
              <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-white/10 flex items-center justify-center mb-5 sm:mb-6 border border-white/10 text-primary">
                <Camera className="h-6 w-6 sm:h-7 sm:w-7" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-4">Acompanhamento em Tempo Real</h3>

              <p className="text-slate-300 leading-relaxed mb-6 text-sm sm:text-base">
                No escritório, você poderá acompanhar em tempo real, através de nossas câmeras internas, a rotina dos cães nos pátios e na piscina, conhecendo de forma transparente o ambiente onde nossos alunos passam o dia.
              </p>
            </div>

            {/* Alerta de Segurança integrado */}
            <div className="relative z-10 bg-white/5 border border-white/10 p-4 sm:p-5 rounded-2xl backdrop-blur-sm mt-2 sm:mt-6">
              <div className="flex gap-3 items-start">
                <ShieldCheck className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Para garantir a segurança e preservar a rotina, não realizamos visitas em áreas que estejam sendo utilizadas pelos cães, mas você poderá
                  ver o ambiente e funcionamento pelas câmeras.
                </p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Botão de Agendamento Final */}
        <motion.div {...fadeUp} className="text-center">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-4 rounded-2xl font-bold text-base sm:text-lg shadow-lg shadow-green-600/20 transition-all transform hover:-translate-y-0.5"
          >
            <MessageCircle className="h-6 w-6 shrink-0" />
            <span className="text-left sm:text-center">
              Agende sua visita pelo WhatsApp:
              <span className="block sm:inline"> (32) 99142-4044</span>
            </span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}