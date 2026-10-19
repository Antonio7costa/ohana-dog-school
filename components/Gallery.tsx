"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PlayCircle, Camera } from "lucide-react";

type GalleryItem = {
  type: "image" | "video";
  src: string;
  alt: string;
};

// Basta adicionar os caminhos aqui!
// Troque cada "alt" por uma descrição do que a foto realmente mostra.
const items: GalleryItem[] = [
  { type: "image", src: "/images/1.jpg", alt: "Cães brincando na Ohana" },
  { type: "image", src: "/images/5.jpeg", alt: "Aluno da Ohana em atividade" },
  { type: "image", src: "/images/6.jpg", alt: "Momento de socialização entre os cães" },
  { type: "image", src: "/images/7.jpg", alt: "Cão na rotina da escola" },
  { type: "image", src: "/images/cromoterapia.jpg", alt: "Cromoterapia no SPA" },
  { type: "image", src: "/images/8.jpg", alt: "Cães descansando na Ohana" },
  { type: "image", src: "/images/banho1.jpeg", alt: "Cão no banho e tosa" },
  { type: "image", src: "/images/13.jpg", alt: "Dia a dia na Ohana" },
];

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const },
  viewport: { once: true, margin: "-10% 0px -10% 0px" },
};

export default function Gallery() {
  return (
    <section id="galeria" className="py-14 sm:py-24 relative scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-4 py-2 text-sm font-semibold text-primary shadow-sm mb-5">
            <Camera className="h-4 w-4 shrink-0" />
            <span>Momentos do nosso dia a dia</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            <span className="text-primary">Galeria</span>
          </h2>

          <div className="mx-auto mt-4 h-1.5 w-16 rounded-full bg-primary" />

          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
            Cada foto mostra um pouco da rotina, das brincadeiras e do carinho que nossos alunos recebem na Ohana.
          </p>
        </motion.div>

        {/* Grade responsiva que aceita qualquer quantidade de itens */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {items.map((it, idx) => (
            <motion.div
              key={it.src}
              {...fadeUp}
              transition={{ duration: 0.6, ease: "easeOut", delay: (idx % 4) * 0.04 }}
              className="group relative overflow-hidden rounded-[20px] sm:rounded-[24px] border border-slate-200 bg-white shadow-sm"
            >
              <Image
                src={it.src}
                alt={it.alt}
                width={600}
                height={600}
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                className="h-44 sm:h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {it.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayCircle className="h-12 w-12 text-white/80" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}