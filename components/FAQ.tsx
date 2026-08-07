"use client";

import React, { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, MessageCircle, MapPin } from "lucide-react";
import { whatsappLink } from "../lib/whatsapp";

type FaqItem = {
  question: string;
  answer: React.ReactNode;
};

const itemVariants = {
  hidden: { opacity: 0, height: 0, marginTop: 0 },
  shown: { opacity: 1, height: "auto", marginTop: 12 },
};

const faqItems: FaqItem[] = [
  {
    question: "1. O que é a Ohana Dog School?",
    answer: (
      <p>
        A Ohana é uma escola para cães que trabalha desenvolvimento comportamental, socialização, enriquecimento ambiental, atividades físicas e cognitivas, sempre respeitando a individualidade de cada aluno.
      </p>
    ),
  },
  {
    question: "2. Meu cão pode frequentar a escola mesmo sem apresentar problemas de comportamento?",
    answer: (
      <div className="space-y-3">
        <p><strong>Sim!</strong></p>
        <p>Apesar de recebermos muitos cães com problemas comportamentais — desde que esses comportamentos não coloquem em risco a segurança da matilha ou de nossa equipe — e realizarmos um importante trabalho de reabilitação comportamental, esse não é o principal objetivo da escola.</p>
        <p>A Ohana existe para suprir necessidades básicas dos cães que muitas famílias desconhecem ou, devido à rotina do dia a dia, não conseguem atender plenamente.</p>
        <p>Por meio de atividades físicas, estímulos mentais, socialização adequada, enriquecimento ambiental e momentos de descanso, proporcionamos mais qualidade de vida e bem-estar aos nossos alunos.</p>
        <p>Nosso objetivo é que os cães tenham uma vida mais equilibrada, feliz e saudável, prevenindo o surgimento de muitos problemas comportamentais antes mesmo que eles apareçam.</p>
      </div>
    ),
  },
  {
    question: "3. Meu cão destrói objetos quando fica sozinho. A escola pode ajudar?",
    answer: (
      <div className="space-y-3">
        <p><strong>Em muitos casos, sim.</strong></p>
        <p>Com frequência, comportamentos como destruir objetos, vocalizar excessivamente ou desenvolver outros hábitos indesejados estão relacionados ao acúmulo de energia ou à falta de oportunidades para expressar comportamentos naturais da espécie de forma adequada.</p>
        <p>A rotina da escola oferece atividades físicas, estímulos mentais, socialização, enriquecimento ambiental e momentos de descanso, ajudando a suprir necessidades importantes do cão.</p>
        <p>Além disso, orientamos as famílias sobre manejo e rotina em casa. Os melhores resultados acontecem quando a escola e a família caminham juntas.</p>
      </div>
    ),
  },
  {
    question: "4. Cães idosos podem frequentar a escola?",
    answer: (
      <div className="space-y-3">
        <p><strong>Sim!</strong></p>
        <p>Os cães idosos continuam possuindo as mesmas necessidades básicas de um cão jovem, como socialização, estímulos mentais, atividades físicas e interação com o ambiente. A diferença é que, muitas vezes, apresentam algumas limitações que precisam ser respepidas.</p>
        <p>Por isso, adaptamos a rotina individualmente para cada aluno, oferecendo atividades compatíveis com sua condição física e seu perfil.</p>
        <p>Manter-se ativo, estimulado e socialmente integrado contribui significativamente para a qualidade de vida e pode até aumentar a expectativa de vida dos cães idosos.</p>
      </div>
    ),
  },
  {
    question: "5. Meu cão nunca conviveu com outros cães. Ele pode participar?",
    answer: (
      <div className="space-y-3">
        <p><strong>Possivelmente sim.</strong></p>
        <p>A socialização é uma necessidade básica dos cães e deve fazer parte de uma vida equilibrada e saudável.</p>
        <p>No entanto, antes de ingressar na escola, todos os cães passam por uma avaliação comportamental criteriosa. Essa avaliação nos permite entender seu perfil, suas experiências anteriores, suas dificuldades e verificar se ele está apto a participar das atividades em grupo com segurança.</p>
        <p>Cada caso é analisado individualmente, sempre priorizando o bem-estar do próprio cão, dos demais alunos e da equipe.</p>
      </div>
    ),
  },
  {
    question: "6. Qual é o protocolo de saúde para um cão frequentar a escola?",
    answer: (
      <div className="space-y-4">
        <p>A saúde e a segurança de nossos alunos são prioridades na Ohana. Por isso, para frequentar a escola ou a hospedagem, os cães devem atender aos seguintes requisitos:</p>
        
        <div>
          <p className="font-semibold text-slate-900 flex items-center gap-2"><span className="text-lg">💉</span> Vacinação em dia</p>
          <ul className="list-disc pl-8 mt-2 space-y-1 text-slate-700">
            <li>Vacina múltipla (V8 ou V10);</li>
            <li>Vacina antirrábica;</li>
            <li>Vacina contra gripe canina (utilizamos como exigência as vacinas importadas).</li>
          </ul>
        </div>

        <div>
          <p className="font-semibold text-slate-900 flex items-center gap-2"><span className="text-lg">🦟</span> Controle de parasitas</p>
          <ul className="list-disc pl-8 mt-2 space-y-1 text-slate-700">
            <li>O antipulgas deve ser mantido rigorosamente em dia durante todo o período em que o cão frequentar a escola.</li>
          </ul>
        </div>

        <div>
          <p className="font-semibold text-slate-900 flex items-center gap-2"><span className="text-lg">🛡️</span> Prevenção da leishmaniose</p>
          <ul className="list-disc pl-8 mt-2 space-y-1 text-slate-700">
            <li>Recomendamos o uso de coleiras repelentes para leishmaniose, especialmente em regiões de risco.</li>
            <li>O uso da coleira não é obrigatório, mas é uma importante medida de proteção para o cão.</li>
          </ul>
        </div>

        <p>Esses cuidados ajudam a proteger não apenas cada aluno individualmente, mas toda a nossa comunidade canina, contribuindo para um ambiente mais seguro e saudável para todos.</p>
      </div>
    ),
  },
  {
    question: "7. Meu cão precisa ser castrado para frequentar a escola?",
    answer: (
      <div className="space-y-3">
        <p><strong>Os cães machos precisam obrigatoriamente ser castrados para frequentar a escola.</strong></p>
        <p>Essa exigência faz parte do nosso protocolo de segurança e bem-estar, contribuindo para uma convivência mais equilibrada entre os alunos e para a formação de grupos mais estáveis e harmoniosos.</p>
        <p>Cada cão é um indivíduo e diversos fatores influenciam seu comportamento. No entanto, a castração dos machos é um dos critérios adotados pela Ohana para garantir um ambiente mais seguro e adequado para as atividades em grupo.</p>
        <p>Caso tenha dúvidas sobre essa política, nossa equipe terá prazer em esclarecê-las.</p>
      </div>
    ),
  },
  {
    question: "8. Posso visitar a estrutura antes de matricular meu cão?",
    answer: (
      <div className="space-y-3">
        <p><strong>Sim.</strong> Na unidade de São João del-Rei, realizamos visitas mediante agendamento prévio para que você possa conhecer de perto nossa proposta e tirar todas as suas dúvidas.</p>
        <p>Durante a visita, você poderá conhecer:</p>
        <ul className="list-none space-y-1 text-slate-700">
          <li>🐾 Nossa recepção com lojinha;</li>
          <li>🐾 O SPA Pet;</li>
          <li>🐾 A Aucademia;</li>
          <li>🐾 Um de nossos pátios de atividades (quando disponível para visitação);</li>
          <li>🐾 Nosso escritório administrativo.</li>
        </ul>
        <p>Além disso, no escritório, você poderá acompanhar em tempo real, através de nossas câmeras internas, a rotina dos cães nos pátios e na piscina, conhecendo de forma transparente o ambiente onde nossos alunos passam o dia.</p>
        <p>Para garantir a segurança e o bem-estar dos cães e dos visitantes, bem como preservar a rotina de atividades da escola, não realizamos visitas em áreas que estejam sendo utilizadas pelos cães no momento da visita.</p>
        <p>As visitas são realizadas exclusivamente na unidade de São João del-Rei e mediante agendamento prévio.</p>
      </div>
    ),
  },
  {
    question: "9. Por que algumas áreas não podem ser visitadas?",
    answer: (
      <div className="space-y-3">
        <p>Para garantir a segurança e o bem-estar dos cães e dos visitantes, bem como preservar a rotina de atividades da escola, não realizamos visitas em áreas que estejam sendo utilizadas pelos cães no momento da visita.</p>
        <p>Essa medida permite que nossos alunos continuem suas atividades com tranquilidade, enquanto os visitantes conhecem nossa estrutura de forma segura e organizada.</p>
      </div>
    ),
  },
  {
    question: "10. A família pode acompanhar a avaliação comportamental?",
    answer: (
      <div className="space-y-3">
        <p><strong>Não.</strong></p>
        <p>Durante a avaliação, mantemos a família informada por meio de mensagens, fotos e atualizações sobre o processo.</p>
        <p>A ausência da família é importante porque sua presença pode influenciar significativamente o comportamento do cão. Em alguns casos, o cão pode apresentar comportamentos de posse em relação aos seus familiares, enquanto em outros pode reagir à insegurança, ansiedade ou tensão transmitidas involuntariamente pelas pessoas de referência.</p>
        <p>Além disso, parte da avaliação é realizada em contato com nossos alunos e com os ambientes da escola. Para preservar a segurança e a qualidade da avaliação, não recebemos visitantes nas áreas utilizadas pelos cães.</p>
        <p>A presença de pessoas desconhecidas pode alterar o comportamento não apenas do cão avaliado, mas também dos demais alunos, especialmente porque recebemos cães com diferentes perfis comportamentais, incluindo alguns que apresentam reatividade a determinados tipos de pessoas ou situações.</p>
        <p>Nosso objetivo é observar o comportamento mais natural possível do cão, permitindo uma avaliação mais precisa e segura para todos os envolvidos.</p>
      </div>
    ),
  },
];

export default function FAQ() {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number>(0); // Primeira aba aberta por padrão

  function toggleIndex(index: number) {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  }

  return (
    <section id="faq" className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-4 py-2 text-sm font-semibold text-primary mb-6 shadow-sm">
            <span>Dúvidas Comuns</span>
          </div>
          <h2 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
            Perguntas Frequentes (FAQ)
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Tudo o que você precisa saber sobre a nossa rotina, regras e cuidados antes de matricular o seu melhor amigo.
          </p>
        </motion.div>

        {/* Lista de Perguntas (Accordion) */}
        <div className="grid gap-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            const qId = `${baseId}-q-${index}`;
            const aId = `${baseId}-a-${index}`;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen 
                    ? "bg-white border-primary/30 shadow-md" 
                    : "bg-white/60 border-slate-200 hover:border-primary/30 hover:bg-white"
                } px-5 py-4 sm:px-6 sm:py-5`}
              >
                <h3 className="m-0">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 text-left"
                    aria-expanded={isOpen}
                    aria-controls={aId}
                    id={qId}
                    onClick={() => toggleIndex(index)}
                  >
                    <span className={`text-base sm:text-lg font-bold transition-colors ${isOpen ? "text-primary" : "text-slate-900"}`}>
                      {item.question}
                    </span>

                    <motion.span
                      aria-hidden="true"
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                        isOpen ? "bg-primary/10 text-primary" : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      <ChevronDown className="h-5 w-5" />
                    </motion.span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={aId}
                      role="region"
                      aria-labelledby={qId}
                      variants={itemVariants}
                      initial="hidden"
                      animate="shown"
                      exit="hidden"
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="text-sm sm:text-base leading-relaxed text-slate-600 pb-2">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Rodapé do FAQ: Contato */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 bg-white rounded-[32px] p-8 sm:p-12 border border-slate-100 shadow-xl text-center relative overflow-hidden"
        >
          {/* Fundo decorativo sutil */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

          <h3 className="text-2xl font-extrabold text-slate-900 mb-2 relative z-10">
            Não encontrou sua dúvida?
          </h3>
          <p className="text-slate-600 mb-8 relative z-10">
            Nossa equipe terá prazer em ajudar e orientar você sobre a melhor opção para o seu cão.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            {/* Botão SJDR */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 bg-primary text-white px-6 py-4 rounded-2xl font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all w-full sm:w-auto"
            >
              <MessageCircle className="h-5 w-5" />
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-wider text-primary-foreground/80 leading-none mb-1">São João del-Rei</p>
                <p className="leading-none">(32) 99142-4044</p>
              </div>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}