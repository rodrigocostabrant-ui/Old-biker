"use client";

import { useEffect, useRef } from "react";

const TOTAL = 210;
const limitar = (v: number) => Math.min(1, Math.max(0, v));

// Moto desmontando conforme a rolagem: 210 quadros JPG desenhados num canvas
// preso na tela. Quadros em public/frames/moto (1280 px) e
// public/frames/moto-720 (celular). Quem pediu menos movimento vê um quadro só.
export default function SequenciaMoto({ legendas }: { legendas: { de: number; ate: number; titulo: string; texto: string }[] }) {
  const secRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const barraRef = useRef<HTMLSpanElement>(null);
  const legRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const sec = secRef.current;
    const canvas = canvasRef.current;
    if (!sec || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduz = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pasta = window.innerWidth < 800 ? "moto-720" : "moto";
    const nome = (i: number) => `/frames/${pasta}/frame-${String(i + 1).padStart(4, "0")}.jpg`;
    const imgs: HTMLImageElement[] = new Array(TOTAL);
    let atual = -1;
    let raf = 0;

    const ajustar = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(canvas.clientWidth * dpr);
      canvas.height = Math.round(canvas.clientHeight * dpr);
      atual = -1;
      desenhar();
    };

    // Desenha o quadro carregado mais próximo do pedido, mantendo a proporção:
    // preenche a tela deitada e mostra a moto inteira com o celular em pé.
    const pintar = (i: number) => {
      let k = i;
      for (let d = 0; d < TOTAL; d++) {
        const a = imgs[i - d], b = imgs[i + d];
        if (a?.complete && a.naturalWidth) { k = i - d; break; }
        if (b?.complete && b.naturalWidth) { k = i + d; break; }
      }
      const img = imgs[k];
      if (!img?.complete || !img.naturalWidth) return;
      const cw = canvas.width, ch = canvas.height;
      const r = img.naturalWidth / img.naturalHeight;
      const emPe = cw / ch < 1;
      let w = cw, h = cw / r;
      if (emPe ? h > ch : h < ch) { h = ch; w = ch * r; }
      ctx.fillStyle = "#0b0a09";
      ctx.fillRect(0, 0, cw, ch);
      ctx.drawImage(img, (cw - w) / 2, (ch - h) / 2, w, h);
      atual = i;
    };

    const desenhar = () => {
      raf = 0;
      const vh = window.innerHeight;
      const total = sec.offsetHeight - vh;
      const p = reduz ? 0.72 : limitar((window.scrollY - sec.offsetTop) / Math.max(1, total));
      const i = Math.min(TOTAL - 1, Math.round(p * (TOTAL - 1)));
      if (i !== atual) pintar(i);
      if (barraRef.current) barraRef.current.style.transform = `scaleX(${p})`;
      sec.style.setProperty("--seq-p", p.toFixed(4));
      legendas.forEach((l, k) => {
        const el = legRefs.current[k];
        if (el) el.dataset.on = String(reduz || (p >= l.de && p < l.ate));
      });
    };
    const pedir = () => { if (!raf) raf = requestAnimationFrame(desenhar); };

    // Pré-carrega: primeiro um quadro a cada 10 (a animação já anda),
    // depois o resto, para a troca ficar suave.
    const ordem = [...Array(TOTAL).keys()].sort((a, b) => (a % 10 === 0 ? 0 : 1) - (b % 10 === 0 ? 0 : 1) || a - b);
    const lista = reduz ? [Math.round(0.72 * (TOTAL - 1))] : ordem;
    lista.forEach((i) => {
      const img = new Image();
      img.decoding = "async";
      img.src = nome(i);
      img.onload = () => { if (Math.abs(i - atual) < 12 || atual === -1) { atual = -1; pedir(); } };
      imgs[i] = img;
    });

    ajustar();
    window.addEventListener("scroll", pedir, { passive: true });
    window.addEventListener("resize", ajustar);
    return () => {
      window.removeEventListener("scroll", pedir);
      window.removeEventListener("resize", ajustar);
      cancelAnimationFrame(raf);
    };
  }, [legendas]);

  return (
    <section ref={secRef} id="por-dentro" className="seq">
      <div className="seq-preso">
        <canvas ref={canvasRef} className="seq-canvas" aria-label="Moto clássica sendo desmontada peça por peça" role="img" />
        <div className="seq-veu" />
        <div className="seq-topo caixa">
          <p className="eyebrow">04 · Peça por peça</p>
          <h2 className="h2">A gente desmonta <em>para entender.</em></h2>
        </div>
        <div className="seq-legendas caixa">
          {legendas.map((l, k) => (
            <div key={l.titulo} ref={(el) => { legRefs.current[k] = el; }} className="seq-leg" data-on="false">
              <span className="seq-leg-n">0{k + 1}</span>
              <div>
                <strong>{l.titulo}</strong>
                <span>{l.texto}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="seq-progresso caixa" aria-hidden="true">
          <span ref={barraRef} />
        </div>
      </div>
    </section>
  );
}
