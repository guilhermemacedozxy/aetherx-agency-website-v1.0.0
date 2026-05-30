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
      initial={{ clipPath: "inset(0 0 100% 0 round 0 0 32px 32px)", opacity: 0 }}
      animate={{ clipPath: "inset(0 0 0% 0 round 0 0 32px 32px)", opacity: 1 }}
      exit={{ clipPath: "inset(0 0 100% 0 round 0 0 32px 32px)", opacity: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 w-screen z-40 bg-[rgba(255,255,255,0.97)] backdrop-blur-[10px]"
      style={{
        top: "calc(var(--navbar-top) + var(--navbar-height))",
        boxShadow: "0 13px 9px rgba(0,0,0,0.22)",
        borderRadius: "0 0 32px 32px",
      }}
    >
      <div className="max-w-335 mx-auto px-8 py-5 flex gap-8">

        {/* Div 1 — Para você */}
        <div className="w-66.25 shrink-0 flex flex-col pr-6 border-r border-gray-100">
          <span className="text-[16px] font-[200] text-black">
            Para você
          </span>
          <h3 className="text-[24px] font-semibold text-gray-900 leading-snug mt-1 mb-4">
            Fortaleça sua marca com mais presença digital
          </h3>

          {/* Botão estilo PremiumButton2 com background-gui-macedo-1.svg */}
          <Link href="#servicos" className="inline-flex no-underline self-start">
            <span className="relative inline-flex rounded-[8px]">
              <span className="btn-dropdown-border absolute inset-0 rounded-[8px] pointer-events-none" />
              <span className="rounded-[6.5px] inline-flex items-center justify-center bg-transparent cursor-pointer select-none">
                <span className="btn-p1-text text-sm font-semibold py-[14px] px-[48px]">
                  Saiba mais
                </span>
              </span>
            </span>
          </Link>
        </div>

        {/* Div 2 — Colunas de serviços */}
        <div className="flex gap-6">
          {CATEGORIES.map((category, idx) => (
            <div
              key={category.title}
              className={`${idx === CATEGORIES.length - 1 ? "w-77" : "w-61.75"} flex flex-col ${idx < CATEGORIES.length - 1 ? "border-r border-gray-100" : ""}`}
            >
              <span className="text-[12px] text-black/60 mb-3">
                {category.title}
              </span>
              <div className="flex flex-col gap-6">
                {category.items.map((item, itemIdx) => (
                  <Link
                    key={item.title}
                    href="#servicos"
                    className={`flex items-center gap-2.5 ${idx === CATEGORIES.length - 1 ? "w-77" : "w-61.75"} h-11 rounded-[7px] hover:bg-black/3 transition-colors duration-150 group${itemIdx === category.items.length - 1 ? " mb-14" : ""}`}
                  >
                    <div
                      className="w-11.5 h-11 rounded-lg shrink-0"
                      style={{
                        backgroundImage: "url('/images/background-gui-macedo-1.svg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                    <div className="flex flex-col min-w-0">
                      <span className="text-[14px] font-semibold text-black leading-tight">
                        {item.title}
                      </span>
                      <span className="text-[10px] text-black/40 leading-tight line-clamp-2">
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
