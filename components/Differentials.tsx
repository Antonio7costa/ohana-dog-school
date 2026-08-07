"use client";

import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Building2, 
  HeartHandshake, 
  ShieldCheck, 
  Smartphone, 
  Settings, 
  UserSearch,  Coffee 
} from "lucide-react";

const items = [
  { 
    icon: GraduationCap, 
    title: "Escola Comportamental", 
    desc: "Muito mais que apenas recreação. Focamos no desenvolvimento contínuo do seu cão.",
    color: "text-blue-500",
    bg: "bg-blue-50"
  },
  { 
    icon: Building2, 
    title: "Hospedagem Profissional", 
    desc: "Infraestrutura dedicada e segura, superando as limitações da hospedagem domiciliar.",
    color: "text-amber-500",
    bg: "bg-amber-50"
  },
  { 
    icon: HeartHandshake, 
    title: "Bem-estar Integral", 
    desc: "Cuidamos das necessidades físicas e emocionais, garantindo equilíbrio e felicidade.",
    color: "text-rose-500",
    bg: "bg-rose-50"
  },
  { 
    icon: ShieldCheck, 
    title: "Segurança Absoluta", 
    desc: "Monitoramento constante e protocolos rigorosos para a tranquilidade da sua família.",
    color: "text-emerald-500",
    bg: "bg-emerald-50"
  },
  { 
    icon: Smartphone, 
    title: "Transparência via App", 
    desc: "Acompanhe rotina, serviços e agendamentos diretamente pelo nosso aplicativo.",
    color: "text-purple-500",
    bg: "bg-purple-50"
  },
  { 
    icon: Settings, 
    title: "Metodologia Própria", 
    desc: "Estrutura própria aliada a um método de trabalho testado e comprovado.",
    color: "text-indigo-500",
    bg: "bg-indigo-50"
  },
  { 
    icon: UserSearch,    title: "Atendimento Único", 
    desc: "Atenção individualizada, respeitando os limites e características de cada aluno.",
    color: "text-cyan-500",
    bg: "bg-cyan-50"
  },
  { 
    icon: Coffee, 
    title: "Profissional & Acolhedor", 
    desc: "Um ambiente carinhoso que não perde o rigor e a imagem profissional de uma escola.",
    color: "text-orange-500",
    bg: "bg-orange-50"
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: "easeOut" },
  viewport: { once: true, margin: "-10% 0px -10% 0px" },
};

export default function Differentials() {
  return (
    <section id="pilares" className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden">
      {/* Elementos decorativos das flores de fundo com mix-blend-multiply */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <img 
          src="/images/flores1.jpeg" 
          alt="" 
          className="absolute top-[15%] -left-34 w-64 h-auto rotate-[10deg] mix-blend-multiply"
        />
        <img 
          src="/images/flores1.jpeg" 
          alt="" 
          className="absolute bottom-[10%] -right-4 w-72 h-auto -rotate-[10deg] mix-blend-multiply"
        />
      </div>
      {/* Brilho decorativo de fundo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/2 pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 mb-6 shadow-sm">
            <span>Os Nossos Pilares</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
            Diferenciais que fazem a <span className="text-primary">diferença</span>.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Uma estrutura pensada para entregar excelência. Não somos apenas um espaço para deixar o seu cão, somos uma instituição dedicada ao desenvolvimento canino.
          </p>
        </motion.div>

        {/* 
          Grid de cartões. 
          Usando 4 colunas em telas grandes (lg), 2 em médias (sm) e 1 em celulares. 
        */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, idx) => (
            <motion.div
              key={it.title}
              {...fadeUp}
              transition={{ delay: idx * 0.05 }}
              className="rounded-[32px] border border-slate-100 bg-white p-6 sm:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${it.bg} ${it.color} mb-6 transition-transform group-hover:scale-110 duration-300`}>
                <it.icon className="h-7 w-7" strokeWidth={1.5} />
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