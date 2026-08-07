"use client";

import React from "react";
import { motion } from "framer-motion";
import { PawPrint, CheckCircle2, Calendar, Droplets, Dumbbell, Brain, Users } from "lucide-react";
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

export default function School() {
  return (
    <section id="escola" className="relative py-16 sm:py-24 overflow-hidden bg-slate-50">
      {/* Elementos decorativos das flores de fundo com mix-blend-multiply para apagar o fundo */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-15">
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
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div {...fadeUp} className="order-2 lg:order-1 relative">
            <div className="aspect-[3/4] w-full max-w-md mx-auto rounded-[40px] overflow-hidden bg-white shadow-lg border border-slate-100 flex items-center justify-center p-2">
              <img 
                src="images/aucademia.png" 
                alt="Escola para cães Ohana" 
                className="w-full h-full object-cover rounded-[32px]"
              />
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 min-w-[200px] z-10">
              <p className="text-sm font-bold text-slate-900 mb-1">Planos Flexíveis</p>
              <p className="text-sm text-primary font-semibold">Pacotes de 1 a 3x por semana</p>
            </div>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary mb-6">
              <PawPrint className="h-4 w-4" />
              <span>Escola para cães</span>
            </motion.div>
            
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              Escola
            </motion.h2>
            
            <motion.p variants={fadeUp} className="text-lg text-slate-600 mb-8 leading-relaxed">
              Na Ohana Dog School, os cães participam de uma rotina planejada de socialização monitorada, atividades físicas e mentais, natação, academia, enriquecimento ambiental e desenvolvimento comportamental, promovendo mais equilíbrio, bem-estar e qualidade de vida, sempre respeitando a individualidade de cada aluno.
            </motion.p>
            
            <motion.div variants={fadeUp} className="space-y-4 mb-10">
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Brain className="h-5 w-5 text-primary" /> Treinos Especializados
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Trabalhamos com treinos estruturados de <strong>autocontrole, obediência, controle referencial e caça lúdica</strong>, tanto em sessões individuais para foco total quanto em grupos para praticar o comportamento em situações reais.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4 mb-10">
              {[
                { icon: Users, label: "Socialização" },
                { icon: Droplets, label: "Natação" },
                { icon: Dumbbell, label: "Aucademia" },
                { icon: PawPrint, label: "Enriquecimento" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                  <item.icon className="h-5 w-5 text-primary" />
                  <span className="text-sm font-bold text-slate-700">{item.label}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp}>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-8 py-4 text-base font-bold text-white shadow-lg shadow-primary/30 hover:bg-primary/90 transition-all"
              >
                <Calendar className="h-5 w-5" />
                Matricular meu Cão
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}