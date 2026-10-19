"use client";

import { Star, MessageCircleHeart } from "lucide-react";
import type { Testimonial } from "../types/ui";
import { motion } from "framer-motion";

// ATENÇÃO: estes depoimentos são de TESTE (placeholders).
// Antes de publicar o site, troque pelos reais ou remova <Testimonials /> do app/page.tsx.
const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Mariana S.",
    rating: 5,
    comment: "O atendimento foi incrível. Meu cachorro parou de puxar na guia e ficou muito mais confiante.",
    avatarUrl: "",
  },
  {
    id: "t2",
    name: "Carlos A.",
    rating: 5,
    comment: "Metodologia clara e acompanhamento de verdade. A diferença no comportamento foi visível já nas primeiras semanas.",
    avatarUrl: "",
  },
  {
    id: "t3",
    name: "Patrícia R.",
    rating: 4,
    comment: "A equipe é super atenciosa. Me orientaram como agir no dia a dia e ajudou muito na socialização.",
    avatarUrl: "",
  },
  {
    id: "t4",
    name: "Fernanda L.",
    rating: 5,
    comment: "Levei para banho e fiquei impressionada com o cuidado. Ambiente organizado e equipe profissional.",
    avatarUrl: "",
  },
  {
    id: "t5",
    name: "Bruno T.",
    rating: 5,
    comment: "Hospedagem segura, com monitoramento. Recebi atualizações e meu pet voltou tranquilo.",
    avatarUrl: "",
  },
  {
    id: "t6",
    name: "Aline P.",
    rating: 4,
    comment: "Tosa impecável e processo bem explicado. Recomendo para quem busca qualidade e carinho.",
    avatarUrl: "",
  },
];

// Cores do círculo com a inicial (alternam entre os cards)
const avatarColors = [
  "bg-blue-50 text-blue-600",
  "bg-amber-50 text-amber-600",
  "bg-rose-50 text-rose-600",
  "bg-emerald-50 text-emerald-600",
  "bg-purple-50 text-purple-600",
  "bg-cyan-50 text-cyan-600",
];

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const },
  viewport: { once: true, margin: "-10% 0px -10% 0px" },
};

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-14 sm:py-24 relative scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-4 py-2 text-sm font-semibold text-primary shadow-sm mb-5">
            <MessageCircleHeart className="h-4 w-4 shrink-0" />
            <span>Quem confia na Ohana</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            <span className="text-primary">Depoimentos</span>
          </h2>

          <div className="mx-auto mt-4 h-1.5 w-16 rounded-full bg-primary" />
        </motion.div>

        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              {...fadeUp}
              transition={{ duration: 0.6, ease: "easeOut", delay: (idx % 3) * 0.05 }}
              className="rounded-[24px] sm:rounded-[28px] border border-slate-200 bg-white p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-lg font-extrabold ${avatarColors[idx % avatarColors.length]}`}
                  aria-hidden="true"
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-extrabold text-slate-900">{t.name}</div>
                  <div
                    className="flex items-center gap-1 mt-1"
                    role="img"
                    aria-label={`Nota ${t.rating} de 5`}
                  >
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={i < t.rating ? "h-4 w-4 fill-amber-400 text-amber-400" : "h-4 w-4 text-slate-300"}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <p className="mt-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                “{t.comment}”
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}