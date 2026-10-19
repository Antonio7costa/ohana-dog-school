"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Building2,
  HeartHandshake,
  ShieldCheck,
  Smartphone,
  Settings,
  UserSearch,
  Coffee,
} from "lucide-react";

const items = [
  {
    icon: GraduationCap,
    title: "Escola Comportamental",
    desc: "Muito mais que apenas recreação. Focamos no desenvolvimento contínuo do seu cão e correção de problemas comportamentais.",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: Building2,
    title: "Hospedagem Profissional",
    desc: "Infraestrutura dedicada e segura, superando as limitações da hospedagem domiciliar.",
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    icon: HeartHandshake,
    title: "Bem-estar Integral",
    desc: "Cuidamos das necessidades físicas e emocionais, garantindo equilíbrio e qualidade de vida.",
    color: "text-rose-500",
    bg: "bg-rose-50",
  },
  {
    icon: ShieldCheck,
    title: "Segurança Absoluta",
    desc: "Monitoramento constante e protocolos rigorosos para a tranquilidade da sua família.",
    color: "text-emerald-500",
    bg: "bg-emerald-50",
  },
  {
    icon: Smartphone,
    title: "Transparência via App",
    desc: "Acompanhe rotina, serviços e agendamentos diretamente pelo nosso aplicativo.",
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
  {
    icon: Settings,
    title: "Metodologia Própria",
    desc: "Estrutura própria aliada a um método de trabalho testado e comprovado.",
    color: "text-indigo-500",
    bg: "bg-indigo-50",
  },
  {
    icon: UserSearch,
    title: "Atendimento Único",
    desc: "Atenção individualizada, respeitando os limites e características de cada aluno.",
    color: "text-cyan-500",
    bg: "bg-cyan-50",
  },
  {
    icon: Coffee,
    title: "Profissional & Acolhedor",
    desc: "Um ambiente carinhoso que não perde o rigor e a imagem profissional de uma escola.",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: "easeOut" as const },
  viewport: { once: true, margin: "-10% 0px -10% 0px" },
};

export default function Differentials() {
  return (
    <section id="pilares" className="py-14 sm:py-24 relative scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

        <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 mb-5 sm:mb-6 shadow-sm">
            <span>Os Nossos Pilares</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-5 sm:mb-6">
            <span className="text-primary">Diferenciais</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Uma estrutura pensada para entregar excelência. Não somos apenas um espaço para deixar o seu cão, somos uma instituição dedicada ao desenvolvimento canino.
          </p>
        </motion.div>

        {/* 4 colunas em telas grandes (lg), 2 em médias (sm) e 1 em celulares */}
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, idx) => (
            <motion.div
              key={it.title}
              {...fadeUp}
              transition={{ duration: 0.55, ease: "easeOut", delay: (idx % 4) * 0.05 }}
              className="rounded-[28px] sm:rounded-[32px] border border-slate-100 bg-white p-6 sm:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className={`inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl ${it.bg} ${it.color} mb-5 sm:mb-6 transition-transform group-hover:scale-110 duration-300`}>
                <it.icon className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-3 leading-tight">{it.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {it.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}