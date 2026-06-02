import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agência Aetherx | Design & Desenvolvimento",
  description:
    "Fortaleça sua presença digital com design estratégico, tecnologia e soluções criadas para destacar sua marca no mercado.",
  icons: {
    icon: "/images/logo.svg",
    shortcut: "/images/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
