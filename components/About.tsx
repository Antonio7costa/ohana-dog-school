"use client";

import { motion } from "framer-motion";
import { Target, Lightbulb, Heart, Sparkles } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
  viewport: { once: true, margin: "-10% 0px -10% 0px" },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export default function About() {
  return (
    <section id="quem-somos" className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden">
      
      {/* Elementos decorativos das flores de fundo */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-15">
        <img 
          src="/images/flores1.jpeg" 
          alt="" 
          className="absolute top-[20%] -left-16 w-64 h-auto rotate-[20deg]"
        />
        <img 
          src="/images/flores1.jpeg" 
          alt="" 
          className="absolute bottom-[10%] -right-16 w-80 h-auto -rotate-[20deg]"
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16 space-y-6 text-slate-700 leading-relaxed"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-2">
            <Sparkles className="h-4 w-4" />
            Nossa História
          </motion.div>
          
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6">
            A realização de um <span className="text-primary">sonho de infância.</span>
          </motion.h2>
          
          <motion.p variants={fadeUp} className="text-lg">
            Desde muito nova, Larissa sonhava em criar um espaço dedicado aos cães, onde eles pudessem receber cuidados de qualidade e ser tratados com respeito e carinho. Em 2021, esse sonho começou em Barbacena e, no ano seguinte, nasceu a unidade de <strong>São João del-Rei</strong>.
          </motion.p>
          
          <motion.p variants={fadeUp}>
            Foi durante essa trajetória que Larissa conheceu Otávio, que se tornou seu noivo, sócio e parceiro. Desde então, os dois seguem juntos em uma busca constante por conhecimento no estudo do comportamento canino e do bem-estar animal.
          </motion.p>

          <motion.p variants={fadeUp} className="font-medium text-slate-900 bg-white p-4 rounded-2xl shadow-sm border border-slate-100 inline-block mt-4">
            Somos adestradores, psicólogos caninos, comportamentalistas, banhistas e tosadores, sempre buscando oferecer a melhor experiência aos nossos alunos e suas famílias.
          </motion.p>
        </motion.div>

        {/* Cards de Missão, Filosofia e Movimentação */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {/* Card Missão */}
          <motion.div variants={fadeUp} className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100 hover:shadow-md transition-shadow hover:border-primary/30">
            <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Nossa Missão</h3>
            <p className="text-slate-600 text-sm space-y-3 flex flex-col">
              <span>Proporcionar mais qualidade de vida e bem-estar para os cães e suas famílias.</span>
              <span>Acreditamos que problemas comportamentais surgem quando necessidades básicas não são atendidas.</span>
            </p>
          </motion.div>

          {/* Card Filosofia */}
          <motion.div variants={fadeUp} className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100 hover:shadow-md transition-shadow hover:border-primary/30">
            <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
              <Lightbulb className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Nossa Filosofia</h3>
            <p className="text-slate-600 text-sm space-y-3 flex flex-col">
              <span>Criamos o lugar que gostaríamos de encontrar para os nossos próprios cães.</span>
              <span>Um espaço ético, planejado para a segurança e feito com respeito à individualidade de cada aluno.</span>
            </p>
          </motion.div>

          {/* Card Motivação */}
          <motion.div variants={fadeUp} className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100 hover:shadow-md transition-shadow hover:border-primary/30">
            <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
              <Heart className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">O Que Nos Move</h3>
            <p className="text-slate-600 text-sm space-y-3 flex flex-col">
              <span>Vê-los aprender a lidar com as emoções, conquistar independência e voltar a ter qualidade de vida é nossa maior recompensa.</span>
              <span>São essas histórias que nos motivam a evoluir todos os dias.</span>
            </p>
          </motion.div>
        </motion.div>

        {/* Banner de Encerramento */}
        <motion.div 
          variants={fadeUp}
          className="bg-primary text-white p-10 sm:p-12 rounded-[40px] text-center relative overflow-hidden shadow-xl shadow-primary/20"
        >
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-4">Ohana significa família.</h3>
            <p className="text-primary-foreground/90 text-lg mb-6 leading-relaxed">
              Mais do que um espaço para cães, somos uma escola dedicada à construção de uma convivência harmoniosa.
            </p>
            <p className="text-xl font-semibold bg-white/20 inline-block px-6 py-3 rounded-full backdrop-blur-sm border border-white/30">
              Sejam bem-vindos à família Ohana. 🐾❤️
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}