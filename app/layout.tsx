import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agência Aetherx | Design & Desenvolvimento",
  description:
    "Fortaleça sua presença digital com design estratégico, tecnologia e soluções criadas para destacar sua marca no mercado.",
  icons: {
    icon: "/images/faviconAetherx.svg",
    shortcut: "/images/faviconAetherx.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="dns-prefetch" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="" />
      </head>
      <body>{children}</body>
    </html>
  );
}
