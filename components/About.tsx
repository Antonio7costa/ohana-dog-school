"use client";

import { motion } from "framer-motion";
import { Target, Lightbulb, Heart, Sparkles, PawPrint } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" as const },
  viewport: { once: true, margin: "-10% 0px -10% 0px" },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

// Variante para os filhos do staggerContainer (o fadeUp não tem hidden/show)
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function About() {
  return (
    <section id="quem-somos" className="py-14 sm:py-24 relative scroll-mt-16">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Introdução: título + foto + texto */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-16 items-center mb-14 sm:mb-16"
        >
          {/* CABEÇALHO (só no celular): selo + título acima da foto */}
          <div className="lg:hidden order-1 space-y-4">
            <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm">
              <Sparkles className="h-4 w-4" />
              Nossa história
            </motion.div>

            <motion.h2 variants={item} className="text-2xl font-extrabold text-slate-900 leading-tight">
              A realização de um sonho de infância
            </motion.h2>
          </div>

          {/* FOTO: no celular logo abaixo do título, no desktop à direita */}
          <motion.div variants={item} className="relative order-2 lg:order-2 w-full max-w-sm sm:max-w-md mx-auto lg:max-w-none">
            {/* Foto principal */}
            <div className="relative aspect-[4/5] rounded-[32px] sm:rounded-[40px] overflow-hidden shadow-xl shadow-primary/10">
              <img
                src="/images/quem_somos.jpeg"
                alt="Larissa e Otávio, fundadores da Ohana, com um dos alunos"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Legenda flutuante (dentro da foto no celular, para não vazar da tela) */}
            <div className="absolute top-4 right-3 sm:top-6 sm:right-6 bg-white pl-2.5 pr-4 py-2.5 sm:pl-3 sm:pr-5 sm:py-3 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-2.5 sm:gap-3">
              <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <PawPrint className="h-4 w-4" />
              </div>
              <div className="leading-tight">
                <p className="text-xs sm:text-sm font-bold text-slate-900">Larissa & Otávio</p>
                <p className="text-[11px] sm:text-xs text-slate-500">Fundadores da Ohana</p>
              </div>
            </div>
          </motion.div>

          {/* TEXTO: no celular vem depois da foto, no desktop à esquerda */}
          <div className="space-y-5 sm:space-y-6 text-slate-700 leading-relaxed order-3 lg:order-1 lg:row-start-1">
            {/* Cabeçalho (só no desktop) */}
            <div className="hidden lg:block space-y-6">
              <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                <Sparkles className="h-4 w-4" />
                Nossa história
              </motion.div>

              <motion.h2 variants={item} className="text-4xl font-extrabold text-slate-900 leading-tight">
                A realização de um sonho de infância
              </motion.h2>
            </div>

            <motion.p variants={item} className="text-base sm:text-lg">
              Desde muito nova, Larissa sonhava em criar um espaço dedicado aos cães, onde eles pudessem receber cuidados de qualidade e ser tratados com respeito e carinho. Em 2021, esse sonho começou em Barbacena e, no ano seguinte, nasceu a unidade de <strong>São João del-Rei</strong>.
            </motion.p>

            <motion.p variants={item}>
              Foi durante essa trajetória que Larissa conheceu Otávio, que se tornou seu noivo, sócio e parceiro. Desde então, os dois seguem juntos em uma busca constante por conhecimento no estudo do comportamento canino e do bem-estar animal,
              e hoje contam com uma equipe de monitores bem treinados que colaboram para que esse sonho continue sendo realidade para dezenas de cães todos os dias.
            </motion.p>

            <motion.p variants={item} className="font-medium text-slate-900 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
              Somos adestradores, psicólogos caninos, comportamentalistas, banhistas e tosadores, sempre buscando oferecer a melhor experiência aos nossos alunos e suas famílias.
            </motion.p>
          </div>
        </motion.div>

        {/* Cards de Missão, Filosofia e Motivação */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-5 sm:gap-6 mb-14 sm:mb-16"
        >
          {/* Card Missão */}
          <motion.div variants={item} className="bg-white p-6 sm:p-8 rounded-[28px] sm:rounded-[32px] shadow-sm border border-slate-100 hover:shadow-md transition-shadow hover:border-primary/30">
            <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 sm:mb-6 text-primary">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 sm:mb-4">Nossa missão</h3>
            <p className="text-slate-600 text-sm space-y-3 flex flex-col">
              <span>Proporcionar mais qualidade de vida e bem-estar para os cães e suas famílias.</span>
              <span>Os problemas comportamentais surgem quando necessidades básicas não são atendidas.</span>
            </p>
          </motion.div>

          {/* Card Filosofia */}
          <motion.div variants={item} className="bg-white p-6 sm:p-8 rounded-[28px] sm:rounded-[32px] shadow-sm border border-slate-100 hover:shadow-md transition-shadow hover:border-primary/30">
            <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 sm:mb-6 text-primary">
              <Lightbulb className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 sm:mb-4">Nossa filosofia</h3>
            <p className="text-slate-600 text-sm space-y-3 flex flex-col">
              <span>Criamos o lugar que gostaríamos de encontrar para os nossos próprios cães.</span>
              <span>Um espaço ético, planejado para a segurança e feito com respeito à individualidade de cada aluno.</span>
            </p>
          </motion.div>

          {/* Card Motivação */}
          <motion.div variants={item} className="bg-white p-6 sm:p-8 rounded-[28px] sm:rounded-[32px] shadow-sm border border-slate-100 hover:shadow-md transition-shadow hover:border-primary/30">
            <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 sm:mb-6 text-primary">
              <Heart className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 sm:mb-4">O que nos move</h3>
            <p className="text-slate-600 text-sm space-y-3 flex flex-col">
              <span>Vê-los aprender a lidar com as emoções, conquistar independência e voltar a ter qualidade de vida é nossa maior recompensa.</span>
              <span>São essas histórias que nos motivam a evoluir todos os dias.</span>
            </p>
          </motion.div>
        </motion.div>

        {/* Banner de Encerramento */}
        <motion.div
          {...fadeUp}
          className="bg-primary text-white p-7 sm:p-12 rounded-[32px] sm:rounded-[40px] text-center relative overflow-hidden shadow-xl shadow-primary/20"
        >
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-4">Ohana significa família.</h3>
            <p className="text-primary-foreground/90 text-base sm:text-lg mb-6 leading-relaxed">
              Mais do que um espaço para cães, somos uma escola dedicada à construção de uma convivência harmoniosa.
            </p>
            <p className="text-base sm:text-xl font-semibold bg-white/20 inline-block px-5 py-3 sm:px-6 rounded-3xl backdrop-blur-sm border border-white/30">
              Sejam bem-vindos à família Ohana. 🐾❤️
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}