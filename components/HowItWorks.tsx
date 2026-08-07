"use client";

import React from "react";
import { motion } from "framer-motion";
import { ClipboardCheck, Brain, PawPrint, ShieldCheck } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true },
};

const pilares = [
  "Os cães possuem necessidades físicas, mentais, sociais e emocionais.",
  "A prevenção é tão importante quanto a reabilitação.",
  "Cada cão é um indivíduo e merece uma rotina adaptada ao seu perfil.",
  "A família faz parte do processo.",
  "Segurança e bem-estar vêm sempre em primeiro lugar.",
  "Transparência é um valor da empresa."
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-10 bg-slate-50 scroll-mt-16 relative overflow-hidden">
      
      {/* Elementos decorativos das flores de fundo */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-15">
        <img 
          src="/images/flores1.jpeg" 
          alt="" 
          className="absolute top-[15%] -left-16 w-64 h-auto rotate-[10deg]"
        />
        <img 
          src="/images/flores1.jpeg" 
          alt="" 
          className="absolute bottom-[10%] -right-16 w-72 h-auto -rotate-[10deg]"
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Título */}
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Como funciona</h2>
        </motion.div>

        {/* Avaliação Comportamental */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20 items-start">
          <motion.div {...fadeUp} className="bg-white p-8 sm:p-10 rounded-[32px] border border-slate-100 shadow-sm">
            <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
              <ClipboardCheck className="h-7 w-7" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Avaliação Comportamental</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Antes de ingressar na escola ou hospedagem, todos os cães passam por uma avaliação individual. 
              Esse processo permite conhecer melhor cada aluno, identificar suas necessidades e garantir grupos compatíveis, 
              promovendo uma convivência segura e saudável.
            </p>
          </motion.div>

          <motion.div {...fadeUp} className="bg-white p-8 sm:p-10 rounded-[32px] border border-slate-100 shadow-sm">
            <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Brain className="h-5 w-5 text-primary" /> O que avaliamos
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-600">
              <p>• Sociabilidade</p>
              <p>• Nível de energia</p>
              <p>• Posse por recursos</p>
              <p>• Latido excessivo</p>
              <p>• Dependência emocional</p>
              <p>• Ansiedade por separação</p>
              <p>• Territorialidade</p>
              <p>• Insegurança</p>
              <p>• Reatividade / Agressividade</p>
              <p>• Humanização</p>
            </div>
          </motion.div>
        </div>

        {/* Nossos Princípios */}
        <motion.div {...fadeUp} className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Nossos Princípios</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {pilares.map((pilar, i) => (
              <div key={i} className="flex gap-3 bg-white p-4 rounded-xl border border-slate-100 items-start">
                <PawPrint className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700 font-medium">{pilar}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}