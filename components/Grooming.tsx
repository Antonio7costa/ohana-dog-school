"use client";

import React from "react";
import { motion } from "framer-motion";
import { Droplets, Sparkles, ShieldCheck, Smartphone, MessageCircle } from "lucide-react";
import { whatsappLink } from "../lib/whatsapp";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true, margin: "-10% 0px -10% 0px" },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const diferenciais = [
  { emoji: "🐾", text: "Atendimento individualizado e respeitoso" },
  { emoji: "🎵", text: "Musicoterapia" },
  { emoji: "💙", text: "Cromoterapia" },
  { emoji: "🌿", text: "Aromaterapia" },
  { emoji: "🐶", text: "Feromonioterapia para cães sensíveis" },
  { emoji: "🤲", text: "Massagem relaxante" },
  { emoji: "🔊", text: "Dessensibilização tátil e sonora" },
  { emoji: "⭐", text: "Associação positiva aos equipamentos" },
];

// ... existing code ...
export default function Grooming() {
  return (
    <section id="banho-tosa" className="relative py-16 sm:py-24 overflow-hidden bg-slate-50">
      
      {/* Elementos decorativos das flores de fundo */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <img 
          src="/images/flores1.jpeg" 
          alt="" 
          className="absolute top-[15%] -left-34 w-64 h-auto rotate-[10deg] mix-blend-multiply"
        />
        <img 
          src="/images/flores1.jpeg" 
          alt="" 
          className="absolute bottom-[10%] -right-4 w-72 h-auto -rotate-[10deg] mix-blend-multiply"
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LADO ESQUERDO: TEXTOS E DIFERENCIAIS (Dividido para a foto encaixar no meio no celular) */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-600 mb-6 w-fit">
              <Droplets className="h-4 w-4" />
              <span>Estética Animal</span>
            </motion.div>
            
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
              Banho & Tosa
            </motion.h2>
            
            <motion.h3 variants={fadeUp} className="text-xl sm:text-2xl font-semibold text-sky-600 mb-6">
              Muito mais do que estética. Um momento de cuidado e bem-estar.
            </motion.h3>
            
            <motion.div variants={fadeUp} className="bg-white border border-slate-100 p-5 rounded-2xl mb-8 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <ShieldCheck className="h-5 w-5 text-sky-600" />
                <strong className="text-slate-900">Serviço Exclusivo</strong>
              </div>
              <p className="text-slate-600 leading-relaxed text-sm">
                Oferecido exclusivamente para <strong>alunos da escola e para hóspedes</strong> durante sua hospedagem, permitindo que os cães retornem para casa limpos, cheirosos e relaxados após um dia repleto de atividades.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="mb-8">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-amber-400" />
                Nossos Diferenciais
              </h3>
              <ul className="grid sm:grid-cols-2 gap-y-3 gap-x-4">
                {diferenciais.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 font-medium bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                    <span className="text-base leading-none">{item.emoji}</span>
                    <span className="leading-tight">{item.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* FOTO COMPOSIÇÃO: Ordem 2 no mobile (fica abaixo dos diferenciais), e Direita (lg:order-2) no notebook */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="order-2 lg:order-2 relative h-[420px] sm:h-[600px] w-full my-4 lg:my-0"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-sky-50 rounded-full blur-3xl -z-10" />

            <div className="absolute top-0 right-0 w-[75%] h-[65%] rounded-[40px] overflow-hidden shadow-2xl border-8 border-white z-20 bg-white">
              <img src="images/4.jpeg" alt="Cachorro feliz e limpo após o banho" className="w-full h-full object-cover" />
            </div>

            <div className="absolute bottom-10 left-0 w-[65%] h-[55%] rounded-[40px] overflow-hidden shadow-xl border-8 border-white z-30 bg-white group">
              <div className="absolute inset-0 bg-blue-500/20 mix-blend-multiply z-10 pointer-events-none" />
              <img src="images/9.jpeg" alt="Banho relaxante com cromoterapia" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>

            </motion.div>

          {/* OBJETIVO E WHATSAPP: Ordem 3 (Ficam obrigatoriamente ABAIXO da foto no mobile) */}
          <div className="order-3 lg:order-3 col-span-1 lg:col-span-2 flex flex-col gap-6">
            <motion.p variants={fadeUp} className="text-slate-700 font-medium bg-white p-4 rounded-xl border border-slate-100 italic shadow-sm">
              "Nosso objetivo não é apenas deixar o cão bonito, mas fazer com que ele se sinta seguro, confortável e confiante durante todo o processo."
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-4">
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