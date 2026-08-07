"use client";

import { motion } from "framer-motion";
import { Calendar, MessageCircle, MapPin, CheckCircle2 } from "lucide-react";
import { whatsappLink } from "../lib/whatsapp";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true, margin: "-10% 0px -10% 0px" },
};

export default function Hero() {

  return (
    <section id="inicio" className="relative overflow-hidden pt-6 pb-16 lg:pb-20 scroll-mt-24 bg-slate-50">
      
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
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          
          <motion.div {...fadeUp}>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-bold text-primary shadow-sm">
              <MapPin className="h-4 w-4" />
              <span>São João del-Rei</span>
            </div>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Educação, Cuidado e Amor para o seu melhor amigo.
            </h1>

            <p className="mt-6 text-lg sm:text-xl font-medium leading-relaxed text-slate-600 max-w-xl">
              Socialização monitorada, desenvolvimento comportamental, hospedagem premium e bem-estar para cães.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-y-3 gap-x-4">
              {[
                "Hospedagem sem canis ou gaiolas",
                "Avaliação comportamental individual",
                "Equipe especializada",
                "Monitoramento humano 24 horas",
                "App com acompanhamento real",
                "Grupos por perfil e afinidade"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-slate-700 font-semibold text-sm">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href={whatsappLink} className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 text-base font-bold text-white shadow-lg shadow-primary/30 hover:bg-primary/90 transition-all">
                <Calendar className="h-5 w-5" /> Agendar Avaliação
              </a>
            </div>
          </motion.div>

          {/* Imagem do Logo */}
          <motion.div {...fadeUp} className="relative mt-10 lg:mt-0 flex justify-center">
            <div className="relative w-full max-w-sm rounded-[40px] border border-white/50 bg-white/60 p-6 shadow-2xl backdrop-blur-sm">
                <img 
                  src="/images/logo.png" 
                  alt="Destaque Ohana" 
                  className="w-full h-auto object-contain"
                />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}