"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import type { Testimonial } from "../types/ui";
import { motion } from "framer-motion";

const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Mariana S.",
    rating: 5,
    comment: "O atendimento foi incrível. Meu cachorro parou de puxar na guia e ficou muito mais confiante.",
    avatarUrl: "/images/about-1.jpg",
  },
  {
    id: "t2",
    name: "Carlos A.",
    rating: 5,
    comment: "Metodologia clara e acompanhamento de verdade. A diferença no comportamento foi visível já nas primeiras semanas.",
    avatarUrl: "/images/about-2.jpg",
  },
  {
    id: "t3",
    name: "Patrícia R.",
    rating: 4,
    comment: "A equipe é super atenciosa. Me orientaram como agir no dia a dia e ajudou muito na socialização.",
    avatarUrl: "/images/about-3.jpg",
  },
  {
    id: "t4",
    name: "Fernanda L.",
    rating: 5,
    comment: "Levei para banho e fiquei impressionada com o cuidado. Ambiente organizado e equipe profissional.",
    avatarUrl: "/images/gallery-4.jpg",
  },
  {
    id: "t5",
    name: "Bruno T.",
    rating: 5,
    comment: "Hospedagem segura, com monitoramento. Recebi atualizações e meu pet voltou tranquilo.",
    avatarUrl: "/images/gallery-2.jpg",
  },
  {
    id: "t6",
    name: "Aline P.",
    rating: 4,
    comment: "Tosa impecável e processo bem explicado. Recomendo para quem busca qualidade e carinho.",
    avatarUrl: "/images/gallery-5.jpg",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true, margin: "-10% 0px -10% 0px" },
};

export default function Testimonials() {
  return (
    <section id="depoimentos" className="relative py-16 sm:py-24 overflow-hidden bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 flex-col md:flex-row">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
              Depoimentos
            </h2>
            <p className="mt-3 text-slate-700 max-w-2xl">
              Avaliações fictícias (placeholders). Substitua pelas reais para aumentar ainda mais a confiança.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              {...fadeUp}
              transition={{ delay: idx * 0.05 }}
              className="rounded-[28px] border border-slate-200 bg-white/80 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-slate-200">
                  <Image
                    src={t.avatarUrl}
                    alt={`Foto de ${t.name}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-extrabold text-slate-900">{t.name}</div>
                  <div className="flex items-center gap-1 mt-1">
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

              <p className="mt-4 text-sm text-slate-700 leading-relaxed">
                “{t.comment}”
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}