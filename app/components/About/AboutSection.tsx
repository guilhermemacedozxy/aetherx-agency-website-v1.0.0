"use client";

import Image from "next/image";

const FEATURES = [
  {
    icon: "/images/icons/ruler-triangle.svg",
    title: "DESENVOLVIMENTO PROFISSIONAL",
    description:
      "Desenvolvemos sites e sistemas modernos, rápidos e funcionais, focados em performance, segurança e experiência do usuário.",
  },
  {
    icon: "/images/icons/palette.svg",
    title: "DESIGN MODERNO",
    description:
      "Criamos interfaces atuais e estratégicas que fortalecem sua marca e transmitem mais profissionalismo ao seu negócio.",
  },
  {
    icon: "/images/icons/career-growth.svg",
    title: "PLANEJAMENTO ESTRATÉGICO",
    description:
      "Cada projeto é planejado para unir design, tecnologia e objetivos de forma inteligente e eficiente.",
  },
  {
    icon: "/images/icons/financial-protection.svg",
    title: "ORÇAMENTO SIMPLES",
    description:
      "Um processo transparente e descomplicado para você entender exatamente cada etapa do projeto.",
  },
];

function FeatureIcon({ src }: { src: string }) {
  return (
    <div
      className="w-8 h-8 shrink-0"
      style={{
        WebkitMaskImage: `url('${src}')`,
        maskImage: `url('${src}')`,
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        backgroundImage: 'url("/images/background-gui-macedo-1-opt.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );
}

export default function AboutSection() {
  return (
    <section
      id="sobre"
      className="bg-white py-10 lg:py-16"
      style={{
        paddingLeft: "var(--panel-h-padding)",
        paddingRight: "var(--panel-h-padding)",
      }}
    >
      <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-20">
        {/* Coluna esquerda — texto */}
        <div className="flex-1 flex flex-col justify-center gap-8">
          <h2 className="btn-p1-text text-[clamp(2rem,3.5vw,3rem)] leading-[1.1] font-light">
            Sua empresa merece <br />
            mais do que um{" "}
            <strong className="font-bold">visual.</strong>
          </h2>

          <p
            className="text-black/50 max-w-full"
            style={{ fontSize: "18px", lineHeight: "33px", width: "753px", height: "99px" }}
          >
            Criamos identidades visuais, sites e sistemas que unem design
            estratégico e tecnologia para fortalecer sua marca, transmitir
            profissionalismo e transformar visitantes em clientes.
          </p>

          <div className="flex flex-col gap-7">
            {FEATURES.map((feature) => (
              <div key={feature.title} className="flex items-start gap-4">
                <FeatureIcon src={feature.icon} />
                <div className="flex flex-col gap-1">
                  <h3 className="text-[0.7rem] font-bold tracking-[0.1em] text-black uppercase">
                    {feature.title}
                  </h3>
                  <p className="text-black/50 text-[0.8125rem] leading-[1.55]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coluna direita — imagem */}
        <div className="hidden lg:block relative shrink-0 w-[42%] rounded-2xl overflow-hidden min-h-[28rem]">
          <Image
            src="/images/background-gui-macedo-2-opt.jpg"
            alt="AetherX — design e tecnologia"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
