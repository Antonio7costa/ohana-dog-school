"use client";

import React from "react";
import { MapPin, Clock, MessageCircle, Navigation, PawPrint } from "lucide-react";
import { whatsappLink } from "../lib/whatsapp";

export default function Footer() {
  return (
    <footer className="bg-slate-900 pt-16 pb-8 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-16">
          
          {/* COLUNA 1: A Marca e os Serviços */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 font-bold text-3xl text-white">
              <span>Ohana</span>
            </div>
            <p className="text-slate-300 font-medium leading-relaxed">
              Ohana: a segunda família do seu cão.
            </p>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <PawPrint className="h-4 w-4 text-primary" /> Escola para cães
              </li>
              <li className="flex items-center gap-2">
                <PawPrint className="h-4 w-4 text-primary" /> Hospedagem especializada
              </li>
              <li className="flex items-center gap-2">
                <PawPrint className="h-4 w-4 text-primary" /> Banho & Tosa
              </li>
              <li className="flex items-center gap-2">
                <PawPrint className="h-4 w-4 text-primary" /> Transporte
              </li>
            </ul>
          </div>

          {}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" /> São João del-Rei
            </h3>
            <div className="text-sm text-slate-400 space-y-1">
              <p>Rua Imigrante Giovane Longatti, 99</p>
              <p>Colônia do Giarola</p>
              <p>CEP 36302-482</p>
            </div>
            <a 
              href="{whatsappLink}" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center gap-2 bg-primary/10 text-primary hover:bg-primary hover:text-white px-4 py-2.5 rounded-xl transition-all duration-300 font-semibold text-sm border border-primary/20"
            >
              <MessageCircle className="h-4 w-4" /> (32) 99142-4044
            </a>
          </div>

          {}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" /> Barbacena
            </h3>
            <div className="text-sm text-slate-400 space-y-1">
              <p>Rua Chico Xavier, 46</p>
              <p>Quintas da Maniqueísta</p>
              <p>Barbacena – MG</p>
            </div>
            
            <div className="flex flex-col gap-3 items-start">
              <a 
                href="https://wa.me/5532987191328" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-2 bg-primary/10 text-primary hover:bg-primary hover:text-white px-4 py-2.5 rounded-xl transition-all duration-300 font-semibold text-sm border border-primary/20"
              >
                <MessageCircle className="h-4 w-4" /> (32) 98719-1328
              </a>
            </div>
          </div>

          {}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" /> Funcionamento
            </h3>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
              <p className="font-bold text-white mb-1">Todos os dias</p>
              <p className="text-slate-300">08h às 18h</p>
            </div>
          </div>

        </div>

        {}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500 text-center md:text-left">
            © {new Date().getFullYear()} Ohana Dog School. Todos os direitos reservados.
          </p>
          
          <div className="flex items-center gap-3 text-sm font-semibold text-slate-400 tracking-wide uppercase">
            <span>São João del-Rei</span>
            <span className="text-primary">•</span>
            <span>Barbacena</span>
          </div>
        </div>

      </div>
    </footer>
  );
}