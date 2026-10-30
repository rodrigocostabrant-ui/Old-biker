"use client";

import { useEffect, useRef, useState } from "react";
import Cta from "@/components/Cta";
import { links } from "@/content/site";

const limitar = (v: number) => Math.min(1, Math.max(0, v));
const suave = (t: number) => 1 - Math.pow(1 - t, 3);

// Hero em três tempos:
// 1. o vídeo (8 s, sem som) roda com a rolagem travada;
// 2. ao terminar, a logo aparece no centro;
// 3. a seção fica presa e, conforme a pessoa rola, a logo voa para o canto
//    superior esquerdo (vira a logo do cabeçalho) e o H1 e a headline entram.
export default function HeroIntro() {
  const secRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const [fim, setFim] = useState(false);
  const [semVideo, setSemVideo] = useState(false);

  // Começa sempre do topo, com a rolagem travada enquanto o vídeo roda.
  useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    const root = document.documentElement;
    if (window.scrollY > 0 || location.hash) {
      queueMicrotask(() => setFim(true));
      return;
    }
    root.classList.add("travado");
    const video = videoRef.current;
    const reduz = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!video) return;
    video.muted = true;
    (reduz ? Promise.reject() : video.play()).catch(() => {
      video.pause();
      setSemVideo(true);
      setFim(true);
    });
  }, []);

  useEffect(() => {
    if (!fim) return;
    const root = document.documentElement;
    root.classList.remove("travado");
    root.dataset.intro = "fim";
  }, [fim]);

  // Rolagem presa: progresso de 0 a 1 enquanto a seção alta passa.
  useEffect(() => {
    const sec = secRef.current;
    const logo = logoRef.current;
    if (!sec || !logo) return;
    const root = document.documentElement;
    let raf = 0;

    const desenhar = () => {
      raf = 0;
      const vh = window.innerHeight;
      const vw = window.innerWidth;
      const total = sec.offsetHeight - vh;
      const p = limitar((window.scrollY - sec.offsetTop) / Math.max(1, total));
      root.style.setProperty("--hero-p", p.toFixed(4));

      // Logo: do centro (grande) até o lugar dela no cabeçalho.
      const alvo = document.querySelector(".marca-lugar")?.getBoundingClientRect();
      const grande = Math.min(vw * 0.46, vh * 0.42, 340);
      const pequeno = alvo?.width ?? 46;
      const e = suave(limitar(p / 0.45));
      const x0 = (vw - grande) / 2;
      const y0 = (vh - grande) / 2;
      const x1 = alvo?.left ?? 20;
      const y1 = alvo?.top ?? 12;
      const x = x0 + (x1 - x0) * e;
      const y = y0 + (y1 - y0) * e;
      const s = 1 + (pequeno / grande - 1) * e;
      logo.style.width = `${grande}px`;
      logo.style.height = `${grande}px`;
      logo.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${s})`;
      root.dataset.logoNoTopo = String(e > 0.98);
    };

    const pedir = () => {
      if (!raf) raf = requestAnimationFrame(desenhar);
    };
    desenhar();
    window.addEventListener("scroll", pedir, { passive: true });
    window.addEventListener("resize", pedir);
    return () => {
      window.removeEventListener("scroll", pedir);
      window.removeEventListener("resize", pedir);
      cancelAnimationFrame(raf);
    };
  }, []);

  const pular = () => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      if (video.duration) video.currentTime = video.duration;
    }
    setFim(true);
  };

  return (
    <section ref={secRef} id="topo" className="hero" data-fim={fim}>
      <div className="hero-preso">
        {semVideo ? (
          <img className="hero-midia" src="/video/hero-fim.jpg" alt="" />
        ) : (
          <video
            ref={videoRef}
            className="hero-midia"
            src="/video/hero.mp4"
            poster="/video/hero-inicio.jpg"
            muted
            playsInline
            autoPlay
            preload="auto"
            onEnded={() => setFim(true)}
            aria-hidden="true"
          />
        )}
        <div className="hero-veu" />

        <div className="hero-texto">
          <h1 className="hero-h1">
            <span className="hero-linha"><span>A essência</span></span>
            <span className="hero-linha"><span>do <em>motociclismo</em></span></span>
          </h1>
          <p className="hero-headline">Oficina especializada em motos clássicas</p>
          <div className="hero-cta">
            <Cta href={links.geral}>Agendar avaliação</Cta>
            <span className="mono-mini">Rua Lignito, 33 · Santa Efigênia · BH</span>
          </div>
        </div>

        <div className="hero-rolar" aria-hidden="true">
          <span>Role</span>
          <i />
        </div>

        {!fim && (
          <button type="button" className="hero-pular" onClick={pular}>
            Pular intro
          </button>
        )}
      </div>

      {/* A logo que voa: no fim do hero ela é a logo do cabeçalho. */}
      <a ref={logoRef} href="#topo" className="logo-voa" aria-label="Old Biker, voltar ao topo" data-cursor="Topo">
        <img src="/fotos/logo-old-biker.png" alt="Old Biker" />
      </a>
    </section>
  );
}
