"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, Camera, ShieldCheck, Store, Dumbbell, Droplets, Home, MessageCircle } from "lucide-react";
import { whatsappLink } from "../lib/whatsapp";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true, margin: "-10% 0px -10% 0px" },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const visitItems = [
  { icon: Store, text: "Nossa recepção com lojinha" },
  { icon: Droplets, text: "O SPA Pet" },
  { icon: Dumbbell, text: "A Aucademia" },
  { icon: Home, text: "Um de nossos pátios de atividades (quando disponível)" },
  { icon: ShieldCheck, text: "Nosso escritório administrativo" },
];

export default function VisitSection() {

  return (
    <section id="conheca-a-ohana" className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden">
      
      {/* Elementos decorativos das flores de fundo com mix-blend-multiply para apagar o branco */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-15">
        <img 
          src="/images/flores1.jpeg" 
          alt="" 
          className="absolute top-[10%] -left-16 w-64 h-auto rotate-[15deg] mix-blend-multiply"
        />
        <img 
          src="/images/flores1.jpeg" 
          alt="" 
          className="absolute bottom-[10%] -right-16 w-72 h-auto -rotate-[15deg] mix-blend-multiply"
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho */}
        <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-4 py-2 text-sm font-semibold text-primary mb-6 shadow-sm">
            <MapPin className="h-4 w-4" />
            <span>São João del-Rei</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">
            Conheça a <span className="text-primary">Ohana</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Nada substitui a experiência de conhecer pessoalmente nossa estrutura. Realizamos visitas mediante agendamento prévio.
          </p>
        </motion.div>

        {/* Grid Principal: O que você vai conhecer + Câmeras */}
        <div className="grid lg:grid-cols-2 gap-10 items-stretch mb-12">
          
          {/* Card Esquerdo: O que você pode conhecer */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-white rounded-[32px] p-8 sm:p-10 border border-slate-100 shadow-sm flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <div className="bg-primary/10 p-2.5 rounded-xl text-primary">
                  <Calendar className="h-5 w-5" />
                </div>
                Durante a visita, você poderá conhecer:
              </h3>

              <ul className="space-y-4 mb-8">
                {visitItems.map((item, idx) => (
                  <motion.li key={idx} variants={fadeUp} className="flex items-center gap-3 text-slate-700 font-medium text-base">
                    <div className="h-8 w-8 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-primary shrink-0">
                      <item.icon className="h-4 w-4" />
                    </div>
                    <span>{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Card Direito: Câmeras e Transparência */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-slate-900 text-white rounded-[32px] p-8 sm:p-10 shadow-xl relative overflow-hidden flex flex-col justify-between"
          >
            {/* Brilho decorativo no card escuro */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="relative z-10">
              <div className="h-14 w-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 border border-white/10 text-primary">
                <Camera className="h-7 w-7" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Acompanhamento em Tempo Real</h3>
              
              <p className="text-slate-300 leading-relaxed mb-6 text-base">
                No escritório, você poderá acompanhar em tempo real, através de nossas câmeras internas, a rotina dos cães nos pátios e na piscina, conhecendo de forma transparente o ambiente onde nossos alunos passam o dia.
              </p>
            </div>

            {/* Alerta de Segurança integrado */}
            <div className="relative z-10 bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-sm mt-6">
              <div className="flex gap-3 items-start">
                <ShieldCheck className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Para garantir a segurança e preservar a rotina, não realizamos visitas em áreas que estejam sendo utilizadas pelos cães no momento.
                </p>
              </div>
            </div>

          </motion.div>

        </div>

        {/* Botão de Agendamento Final */}
        <motion.div {...fadeUp} className="text-center">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-green-600/20 transition-all transform hover:-translate-y-0.5"
          >
            <MessageCircle className="h-6 w-6" />
            Agende sua visita pelo WhatsApp: (32) 99142-4044
          </a>
        </motion.div>

      </div>
    </section>
  );
}