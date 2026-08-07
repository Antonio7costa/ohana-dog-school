"use client";

import React from "react";
import { motion } from "framer-motion";
import { Home, Moon, ShieldCheck, Calendar, Sun } from "lucide-react";
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

export default function Boarding() {
  return (
    <section id="hospedagem" className="relative py-16 sm:py-24 overflow-hidden bg-slate-50">
      {/* Container das Flores de Fundo */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <img 
          src="/images/flores1.jpeg" 
          alt="Decoração flores Ohana" 
          className="absolute -top-10 -right-10 w-96 h-auto rotate-12"
        />
        <img 
          src="/images/flores1.jpeg" 
          alt="Decoração flores Ohana" 
          className="absolute bottom-0 left-0 w-72 h-auto -rotate-12"
        />
        <img 
          src="/images/flores1.jpeg" 
          alt="Flores Ohana" 
          className="w-48 h-auto -rotate-12"
        />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* CABEÇALHO */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <motion.div {...fadeUp} className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-4 py-2 text-sm font-semibold text-primary mb-6 shadow-sm">
            <Home className="h-4 w-4" />
            <span>Sem canis, baias ou gaiolas</span>
          </motion.div>
          
          <motion.h2 {...fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">
            Hospedagem Especializada
          </motion.h2>
          
          <motion.p {...fadeUp} className="text-lg text-slate-600 leading-relaxed">
            Quartos temáticos amplos e confortáveis, separados de acordo com porte, 
            perfil comportamental e compatibilidade social. <br className="hidden sm:block"/>
            <span className="text-sm italic text-slate-500 mt-2 block">* Contamos com quarto exclusivo para cães grandes.</span>
          </motion.p>
        </div>

        <div className="space-y-20 sm:space-y-32">
          
          {/* 1. ROTINA DIURNA (Texto na Esquerda, Foto na Direita) */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="order-1 lg:order-1"
            >
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-600 mb-6">
                <Sun className="h-4 w-4" />
                <span>Rotina Ativa</span>
              </motion.div>
              
              <motion.h3 variants={fadeUp} className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                Integração total com <br/><span className="text-amber-500">a Escola</span>
              </motion.h3>
              
              <motion.p variants={fadeUp} className="text-lg text-slate-600 mb-8 leading-relaxed">
                Nossos hóspedes não ficam parados. Durante o dia, os cães participam da rotina da escola, com <strong>socialização monitorada, atividades físicas e enriquecimento ambiental.</strong>
              </motion.p>
            </motion.div>

            <motion.div {...fadeUp} className="order-2 lg:order-2 relative">
              <div className="aspect-[4/3] rounded-[40px] overflow-hidden bg-white shadow-xl border border-slate-100 flex items-center justify-center p-2 relative">
                {/* ALTERE AQUI A FOTO DO DIA/ESCOLA */}
                <img 
                  src="images/piscina.png" 
                  alt="Cães brincando durante o dia" 
                  className="w-full h-full object-cover rounded-[32px]"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-amber-400/20 rounded-full blur-2xl -z-10" />
            </motion.div>
          </div>

          {/* 2. SPA NOTURNO (Foto na Esquerda, Texto na Direita) */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp} className="order-2 lg:order-1 relative">
              <div className="aspect-[4/3] rounded-[40px] overflow-hidden bg-white shadow-xl border border-slate-100 flex items-center justify-center p-2 relative group">
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10 pointer-events-none transition-opacity group-hover:opacity-50" />
                
                {/* ALTERE AQUI A FOTO DA CROMOTERAPIA */}
                <img 
                  src="images/cromoterapia.png" 
                  alt="Sala azul com cromoterapia para cães" 
                  className="w-full h-full object-cover rounded-[32px]"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl -z-10" />
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-600 mb-6">
                <Moon className="h-4 w-4" />
                <span>Rotina do Sono</span>
              </motion.div>
              
              <motion.h3 variants={fadeUp} className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                SPA Noturno & <br/><span className="text-indigo-600">Cromoterapia</span>
              </motion.h3>
              
              <motion.p variants={fadeUp} className="text-lg text-slate-600 mb-8 leading-relaxed">
                Antes do descanso, nossos hóspedes participam de uma rotina de relaxamento profundo, projetada para oferecer <strong>conforto emocional e facilitar a adaptação.</strong>
              </motion.p>
              
              <ul className="space-y-4">
                {[
                  { name: "Cromoterapia", color: "bg-blue-400" },
                  { name: "Musicoterapia", color: "bg-purple-400" },
                  { name: "Aromaterapia", color: "bg-emerald-400" },
                  { name: "Feromonioterapia", color: "bg-rose-400" },
                ].map((item, idx) => (
                  <motion.li key={idx} variants={fadeUp} className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                    <div className={`h-4 w-4 rounded-full ${item.color} shadow-sm`} />
                    <span className="font-semibold text-slate-700">{item.name}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* 3. MONITORAMENTO 24 HORAS (Compacto e Horizontal) */}
          <motion.div 
            {...fadeUp}
            className="bg-slate-900 rounded-[32px] p-8 sm:p-10 shadow-xl relative overflow-hidden flex flex-col lg:flex-row items-center gap-8 border border-slate-800"
          >
            {/* Efeito de luz sutil no fundo */}
            <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
            
            <div className="h-20 w-20 shrink-0 rounded-3xl bg-white/10 flex items-center justify-center border border-white/10 shadow-inner">
              <ShieldCheck className="h-10 w-10 text-primary" />
            </div>
            
            <div className="flex-1 text-center lg:text-left relative z-10">
              <h3 className="text-2xl font-bold text-white mb-2">Monitoramento 24 horas</h3>
              <p className="text-slate-300 leading-relaxed">
                Um dos nossos monitores profissionais permanece hospedado junto aos cães durante toda a noite, garantindo supervisão contínua e pronta resposta imediata.
              </p>
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

        </div>
      </div>
    </section>
  );
}