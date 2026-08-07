"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

// Basta adicionar os 14 caminhos aqui!
const items = [
  { type: "image" as const, src: "/images/1.png", alt: "Galeria 1" },
  { type: "image" as const, src: "/images/2.jpeg", alt: "Galeria 2" },
  { type: "image" as const, src: "/images/5.jpeg", alt: "Galeria 5" },
  { type: "image" as const, src: "/images/6.png", alt: "Galeria 6" },
  { type: "image" as const, src: "/images/7.png", alt: "Galeria 7" },
  { type: "image" as const, src: "/images/8.png", alt: "Galeria 8" },
  { type: "image" as const, src: "/images/10.jpeg", alt: "Galeria 10" },
  { type: "image" as const, src: "/images/12.png", alt: "Galeria 12" },
  { type: "image" as const, src: "/images/13.png", alt: "Galeria 13" },
  { type: "image" as const, src: "/images/14.png", alt: "Galeria 14" },
];

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true, margin: "-10% 0px -10% 0px" },
};

export default function Gallery() {
  return (
    <section id="galeria" className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp} className="mb-10">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Galeria</h2>
          <p className="mt-3 text-slate-700">Momentos do nosso dia a dia.</p>
        </motion.div>

        {/* Grade responsiva que aceita qualquer quantidade de itens */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((it, idx) => (
            <motion.div
              key={idx}
              {...fadeUp}
              transition={{ delay: idx * 0.03 }}
              className="group relative overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm"
            >
              <Image
                src={it.src}
                alt={it.alt}
                width={600}
                height={600}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
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