"use client";

import React from "react";
import { motion } from "framer-motion";
import { Droplets, Sparkles, ShieldCheck, MessageCircle } from "lucide-react";
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

const diferenciais = [
  { emoji: "🐾", text: "Atendimento individualizado e respeitoso" },
  { emoji: "🎵", text: "Musicoterapia" },
  { emoji: "💙", text: "Cromoterapia" },
  { emoji: "🌿", text: "Aromaterapia" },
  { emoji: "🐶", text: "Feromonioterapia para cães traumatizados ou inseguros" },
  { emoji: "🤲", text: "Massagem relaxante" },
  { emoji: "🔊", text: "Dessensibilização tátil e sonora" },
  { emoji: "⭐", text: "Associação positiva aos equipamentos" },
];

export default function Grooming() {
  return (
    <section id="banho-tosa" className="relative py-14 sm:py-24 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* CABEÇALHO (só no celular): selo + título + subtítulo acima das fotos */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:hidden order-1 flex flex-col"
          >
            <motion.div variants={item} className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-600 mb-5 w-fit">
              <Droplets className="h-4 w-4" />
              <span>Estética Animal</span>
            </motion.div>

            <motion.h2 variants={item} className="text-3xl font-extrabold text-slate-900 mb-4 leading-tight">
              Banho & Tosa
            </motion.h2>

            <motion.h3 variants={item} className="text-lg font-semibold text-sky-600">
              Muito mais do que estética. Um momento de cuidado e bem-estar.
            </motion.h3>
          </motion.div>

          {/* FOTO COMPOSIÇÃO: no celular fica logo abaixo do cabeçalho, no desktop à direita */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" as const }}
            viewport={{ once: true }}
            className="order-2 lg:order-2 lg:row-span-1 relative h-[360px] min-[420px]:h-[420px] sm:h-[600px] w-full max-w-md sm:max-w-none mx-auto"
          >
            {/* Foto de trás: shih-tzu, horizontal */}
            <div className="absolute top-0 right-0 w-[78%] h-[55%] rounded-[28px] sm:rounded-[40px] overflow-hidden shadow-2xl border-4 sm:border-8 border-white z-20 bg-white">
              <img
                src="/images/banho2.jpeg"
                alt="Cão após o banho e tosa"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Foto da frente: banho, vertical */}
            <div className="absolute bottom-4 sm:bottom-8 left-0 w-[52%] h-[68%] rounded-[28px] sm:rounded-[40px] overflow-hidden shadow-xl border-4 sm:border-8 border-white z-30 bg-white">
              <img
                src="/images/cromoterapia1.jpeg"
                alt="Cromoterapia durante o banho"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </motion.div>

          {/* TEXTOS E DIFERENCIAIS: no celular vêm depois das fotos, no desktop à esquerda */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="order-3 lg:order-1 lg:row-start-1 flex flex-col"
          >
            {/* Cabeçalho (só no desktop) */}
            <div className="hidden lg:flex flex-col">
              <motion.div variants={item} className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-600 mb-6 w-fit">
                <Droplets className="h-4 w-4" />
                <span>Estética Animal</span>
              </motion.div>

              <motion.h2 variants={item} className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
                Banho & Tosa
              </motion.h2>

              <motion.h3 variants={item} className="text-2xl font-semibold text-sky-600 mb-6">
                Muito mais do que estética. Um momento de cuidado e bem-estar.
              </motion.h3>
            </div>

            <motion.div variants={item} className="bg-white border border-slate-100 p-5 rounded-2xl mb-6 sm:mb-8 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <ShieldCheck className="h-5 w-5 text-sky-600 shrink-0" />
                <strong className="text-slate-900">Serviço Exclusivo</strong>
              </div>
              <p className="text-slate-600 leading-relaxed text-sm">
                Oferecido exclusivamente para <strong>alunos da escola e para hóspedes</strong> durante sua hospedagem, permitindo que os cães retornem para casa limpos, cheirosos e relaxados após um dia repleto de atividades.
              </p>
            </motion.div>

            <motion.div variants={item}>
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-amber-400" />
                Nossos Diferenciais
              </h3>
              <ul className="grid sm:grid-cols-2 gap-y-2.5 sm:gap-y-3 gap-x-4">
                {diferenciais.map((d, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 font-medium bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                    <span className="text-base leading-none">{d.emoji}</span>
                    <span className="leading-tight">{d.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* OBJETIVO E WHATSAPP: ficam por último */}
          <div className="order-4 col-span-1 lg:col-span-2 flex flex-col gap-5 sm:gap-6">
            <motion.p {...fadeUp} className="text-slate-700 font-medium bg-white p-4 rounded-xl border border-slate-100 italic shadow-sm text-sm sm:text-base">
              "Nosso objetivo não é apenas deixar o cão bonito, mas fazer com que ele se sinta seguro, confortável e confiante durante todo o processo."
            </motion.p>

            <motion.div {...fadeUp} className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 hover:bg-emerald-700 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-emerald-600/25 transition-all w-full sm:w-auto transform hover:-translate-y-0.5"
              >
                <MessageCircle className="h-5 w-5" />
                Tirar Dúvidas no WhatsApp
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}