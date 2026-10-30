import type { Metadata } from "next";
import { Archivo, Big_Shoulders, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const display = Big_Shoulders({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--f-display",
  // O Next não tem medidas de ajuste para esta fonte; sem isso o build avisa.
  adjustFontFallback: false,
  fallback: ["Impact", "Arial Narrow", "sans-serif"],
});
const texto = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--f-texto",
});
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--f-mono",
});

export const metadata: Metadata = {
  title: "Old Biker · Oficina de motos clássicas em BH",
  description:
    "Restauração e manutenção de motos clássicas e antigas em Santa Efigênia, Belo Horizonte.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${texto.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
