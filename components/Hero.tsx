"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { whatsappLink } from "../lib/whatsapp";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const },
  viewport: { once: true, margin: "-10% 0px -10% 0px" },
};

const destaques = [
  "Hospedagem sem canis ou gaiolas",
  "Avaliação comportamental individual",
  "Equipe capacitada",
  "Monitoramento humano 24 horas",
  "App com acompanhamento real",
  "Grupos por porte e nível de energia",
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative pt-8 sm:pt-10 pb-14 lg:pb-20 scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid items-center gap-8 lg:gap-12 lg:grid-cols-2">

          {/* CABEÇALHO (só no celular): selo + título acima da logo */}
          <motion.div {...fadeUp} className="lg:hidden order-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-bold text-primary shadow-sm">
              <MapPin className="h-4 w-4" />
              <span>São João del-Rei</span>
            </div>

            <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-slate-900">
              Educação, Cuidado e Amor para o seu melhor amigo.
            </h1>
          </motion.div>

          {/* LOGO: no celular logo abaixo do título, no desktop à direita */}
          <motion.div {...fadeUp} className="order-2 lg:order-2 relative flex justify-center">
            <div className="relative w-full max-w-[220px] sm:max-w-sm rounded-[32px] sm:rounded-[40px] border border-white/50 bg-white/60 p-4 sm:p-6 shadow-2xl backdrop-blur-sm">
              <img
                src="/images/logo.png"
                alt="Logo da Ohana Dog School"
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>

          {/* TEXTO: no celular vem depois da logo, no desktop à esquerda */}
          <motion.div {...fadeUp} className="order-3 lg:order-1 lg:row-start-1">
            {/* Cabeçalho (só no desktop) */}
            <div className="hidden lg:block">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-bold text-primary shadow-sm">
                <MapPin className="h-4 w-4" />
                <span>São João del-Rei</span>
              </div>

              <h1 className="mt-6 text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-slate-900">
                Educação, Cuidado e Amor para o seu melhor amigo.
              </h1>
            </div>

            <p className="lg:mt-6 text-base sm:text-xl font-medium leading-relaxed text-slate-600 max-w-xl">
              Socialização monitorada, desenvolvimento comportamental, hospedagem premium e bem-estar para cães.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-y-3 gap-x-4">
              {destaques.map((item) => (
                <div key={item} className="flex items-start gap-2 text-slate-700 font-semibold text-sm">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 text-base font-bold text-white shadow-lg shadow-primary/30 hover:bg-primary/90 transition-all"
              >
                <Calendar className="h-5 w-5" /> Agendar Avaliação
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}