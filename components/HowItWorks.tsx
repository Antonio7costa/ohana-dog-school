"use client";

import React from "react";
import { motion } from "framer-motion";
import { ClipboardCheck, Brain, PawPrint } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const },
  viewport: { once: true },
};

const pilares = [
  "Os cães possuem necessidades físicas, mentais, sociais e emocionais.",
  "A prevenção é tão importante quanto a reabilitação.",
  "Cada cão é um indivíduo e merece uma rotina adaptada ao seu perfil.",
  "A família faz parte do processo.",
  "Segurança e bem-estar vêm sempre em primeiro lugar.",
  "Transparência é um valor da empresa.",
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-14 sm:py-24 scroll-mt-16 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Título */}
        <motion.div {...fadeUp} className="flex flex-col items-center text-center mb-8 sm:mb-12">
          <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-white border border-primary/20 shadow-sm flex items-center justify-center text-primary mb-4">
            <PawPrint className="h-6 w-6 sm:h-7 sm:w-7" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Como funciona
          </h2>
          <div className="mt-4 h-1.5 w-16 rounded-full bg-primary" />
        </motion.div>

        {/* Avaliação Comportamental */}
        <div className="grid lg:grid-cols-2 gap-5 sm:gap-8 mb-12 sm:mb-16 items-start">
          <motion.div {...fadeUp} className="bg-white p-6 sm:p-10 rounded-[28px] sm:rounded-[32px] border border-slate-100 shadow-sm">
            <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-5 sm:mb-6">
              <ClipboardCheck className="h-6 w-6 sm:h-7 sm:w-7" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">Avaliação Comportamental</h3>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Antes de ingressar na escola ou hospedagem, todos os cães passam por uma avaliação individual,
              que nos permite conhecer cada aluno de perto e identificar suas necessidades e eventuais
              dificuldades comportamentais.
            </p>
            <p className="text-slate-600 leading-relaxed">
              É a partir dela que montamos grupos compatíveis para uma convivência segura e saudável,
              além de traçar o plano de treino individual de cada cão.
            </p>
          </motion.div>

          <motion.div {...fadeUp} className="bg-white p-6 sm:p-10 rounded-[28px] sm:rounded-[32px] border border-slate-100 shadow-sm">
            <h4 className="font-bold text-lg text-slate-900 mb-4 flex items-center gap-2">
              <Brain className="h-5 w-5 text-primary" /> O que avaliamos
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-600">
              <p>• Sociabilidade</p>
              <p>• Nível de energia</p>
              <p>• Posse por recursos</p>
              <p>• Latido excessivo</p>
              <p>• Dependência emocional</p>
              <p>• Ansiedade por separação</p>
              <p>• Territorialismo</p>
              <p>• Insegurança</p>
              <p>• Reatividade / Agressividade</p>
              <p>• Humanização</p>
            </div>
          </motion.div>
        </div>

        {/* Nossos Princípios */}
        <motion.div {...fadeUp} className="max-w-4xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 sm:mb-8 text-center">Nossos Princípios</h3>
          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
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