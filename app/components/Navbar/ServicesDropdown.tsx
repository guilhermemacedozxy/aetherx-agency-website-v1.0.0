"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const CATEGORIES = [
  {
    title: "Designer Gráfico",
    items: [
      { title: "Identidade Visual", description: "Logo, Paleta de Cores, Elementos Gráficos, entre outros serviços." },
      { title: "Cartão de visita e papelaria", description: "Cartão de visita, papéis timbrados personalizados, entre outros serviços." },
      { title: "Flyers, panfletos e cartazes", description: "Flyers, panfletos, cartazes, entre outros serviços." },
      { title: "Revistas e catálogos", description: "Revistas personalizadas, criação de ebooks personalizados, entre outros." },
      { title: "Logotipo", description: "Logotipo Nominativo, Logotipo figurativo, Logotipo misto, entre outros." },
    ],
  },
  {
    title: "Designer Digital",
    items: [
      { title: "Landing pages", description: "Landing pages de Vendas, Tráfego Pago, Serviço, Produto, Portfólio." },
      { title: "Design de sites", description: "Institucional, Blog, E-commerce, Sistema Web, Site Estacionário." },
      { title: "Design responsivo", description: "Adaptações para diferentes modelos de dispositivos." },
      { title: "Posts para redes sociais", description: "Artes para feed, Carrosséis, Stories, Capas de destaque." },
      { title: "Criativos para anúncios", description: "Artes para tráfego pago, Design com CTA, Carrosséis." },
    ],
  },
  {
    title: "Desenvolvimento Web",
    items: [
      { title: "Criação de sites (institucionais, portfólio)", description: "Projetado e desenvolvido por um especialista em desenvolvimento web e engenharia de software." },
      { title: "Desenvolvimento de sistemas web", description: "Projetado e desenvolvido por um especialista em desenvolvimento web e engenharia de software." },
      { title: "Landing pages", description: "Projetada e desenvolvida por um especialista em desenvolvimento web e engenharia de software." },
      { title: "E-commerces", description: "Desenvolvido por um especialista em desenvolvimento web e engenharia de software." },
      { title: "Dashboards", description: "Projetado e desenvolvido por um especialista em desenvolvimento web e engenharia de software." },
    ],
  },
];

interface ServicesDropdownProps {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export default function ServicesDropdown({ onMouseEnter, onMouseLeave }: ServicesDropdownProps) {
  return (
    <motion.div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 w-screen z-40 bg-[rgba(255,255,255,0.97)] backdrop-blur-[10px]"
      style={{
        top: "calc(var(--navbar-top) + var(--navbar-height))",
        boxShadow: "0 13px 9px rgba(0,0,0,0.10)",
        borderRadius: "0 0 32px 32px",
      }}
    >
      <div className="max-w-5xl mx-auto px-8 py-5 flex gap-8">

        {/* Div 1 — Para você */}
        <div className="w-[200px] shrink-0 flex flex-col pr-6 border-r border-gray-100">
          <div className="flex flex-col gap-2">
            <span className="text-[11px] text-gray-400 font-medium tracking-wide uppercase">
              Para você
            </span>
            <h3 className="text-[15px] font-semibold text-gray-900 leading-snug">
              Fortaleça sua marca com mais presença digital
            </h3>
          </div>

          {/* Botão estilo PremiumButton2 com background-gui-macedo-1.svg */}
          <Link href="#servicos" className="mt-4 inline-flex no-underline self-start">
            <span className="relative inline-flex rounded-[8px]">
              <span className="btn-dropdown-border absolute inset-0 rounded-[8px] pointer-events-none" />
              <span className="rounded-[6.5px] inline-flex items-center justify-center bg-transparent cursor-pointer select-none">
                <span className="btn-p1-text text-sm font-semibold py-[10px] px-[22px]">
                  Saiba mais
                </span>
              </span>
            </span>
          </Link>
        </div>

        {/* Div 2 — Colunas de serviços */}
        <div className="flex flex-1 gap-0">
          {CATEGORIES.map((category, idx) => (
            <div
              key={category.title}
              className={`flex-1 flex flex-col ${idx < CATEGORIES.length - 1 ? "border-r border-gray-100 pr-5 mr-5" : ""}`}
            >
              <span className="text-[10.5px] font-semibold text-gray-400 uppercase tracking-[0.07em] mb-3 px-1">
                {category.title}
              </span>
              <div className="flex flex-col gap-0.5">
                {category.items.map((item) => (
                  <Link
                    key={item.title}
                    href="#servicos"
                    className="flex items-start gap-2.5 p-1.5 rounded-[7px] hover:bg-black/[0.03] transition-colors duration-150 group"
                  >
                    <div
                      className="w-[38px] h-[38px] rounded-[6px] shrink-0"
                      style={{
                        backgroundImage: "url('/images/background-gui-macedo-1.svg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                    <div className="flex flex-col min-w-0 pt-0.5">
                      <span className="text-[12px] font-medium text-gray-800 leading-tight group-hover:text-gray-900 transition-colors">
                        {item.title}
                      </span>
                      <span className="text-[10.5px] text-gray-400 leading-tight mt-[3px] line-clamp-2">
                        {item.description}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </motion.div>
  );
}
