"use client";

import { useEffect, useRef } from "react";

// Cursor da marca (só em computador com mouse):
// - ponto + anel que segue com atraso e mostra um rótulo em [data-cursor];
// - botões [data-magnetic] puxados pelo mouse;
// - fotos [data-tilt] que inclinam em 3D;
// - seções [data-luz] com uma lanterna que acompanha o mouse.
export default function Cursor() {
  const anelRef = useRef<HTMLDivElement>(null);
  const pontoRef = useRef<HTMLDivElement>(null);
  const rotuloRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const fino = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduz = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fino) return;
    const root = document.documentElement;
    root.classList.add("cursor-on");

    const anel = anelRef.current!;
    const ponto = pontoRef.current!;
    const rotulo = rotuloRef.current!;
    let mx = innerWidth / 2, my = innerHeight / 2, ax = mx, ay = my;
    let raf = 0;
    let magneto: HTMLElement | null = null;
    let tilt: HTMLElement | null = null;

    const loop = () => {
      const k = reduz ? 1 : 0.18;
      ax += (mx - ax) * k;
      ay += (my - ay) * k;
      anel.style.transform = `translate3d(${ax}px, ${ay}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const mover = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
      ponto.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
      root.dataset.cursorVisivel = "true";

      const alvo = e.target as HTMLElement;
      const rot = alvo.closest<HTMLElement>("[data-cursor]");
      const clicavel = alvo.closest("a, button");
      anel.dataset.modo = rot ? "rotulo" : clicavel ? "link" : "";
      rotulo.textContent = rot?.dataset.cursor ?? "";

      if (reduz) return;

      const m = alvo.closest<HTMLElement>("[data-magnetic]");
      if (magneto && magneto !== m) magneto.style.transform = "";
      magneto = m;
      if (m) {
        const r = m.getBoundingClientRect();
        const dx = mx - (r.left + r.width / 2);
        const dy = my - (r.top + r.height / 2);
        m.style.transform = `translate(${dx * 0.22}px, ${dy * 0.3}px)`;
      }

      const t = alvo.closest<HTMLElement>("[data-tilt]");
      if (tilt && tilt !== t) tilt.style.transform = "";
      tilt = t;
      if (t) {
        const r = t.getBoundingClientRect();
        const px = (mx - r.left) / r.width - 0.5;
        const py = (my - r.top) / r.height - 0.5;
        t.style.transform = `perspective(900px) rotateX(${(-py * 7).toFixed(2)}deg) rotateY(${(px * 9).toFixed(2)}deg) scale(1.015)`;
        t.style.setProperty("--brilho-x", `${(px + 0.5) * 100}%`);
        t.style.setProperty("--brilho-y", `${(py + 0.5) * 100}%`);
      }

      const luz = alvo.closest<HTMLElement>("[data-luz]");
      if (luz) {
        const r = luz.getBoundingClientRect();
        luz.style.setProperty("--luz-x", `${mx - r.left}px`);
        luz.style.setProperty("--luz-y", `${my - r.top}px`);
      }
    };

    const sair = () => { root.dataset.cursorVisivel = "false"; };
    const apertar = () => anel.classList.add("apertado");
    const soltar = () => anel.classList.remove("apertado");

    window.addEventListener("pointermove", mover, { passive: true });
    document.addEventListener("pointerleave", sair);
    window.addEventListener("pointerdown", apertar);
    window.addEventListener("pointerup", soltar);
    return () => {
      cancelAnimationFrame(raf);
      root.classList.remove("cursor-on");
      window.removeEventListener("pointermove", mover);
      document.removeEventListener("pointerleave", sair);
      window.removeEventListener("pointerdown", apertar);
      window.removeEventListener("pointerup", soltar);
    };
  }, []);

  return (
    <>
      <div ref={anelRef} className="cursor-anel" aria-hidden="true"><span ref={rotuloRef} /></div>
      <div ref={pontoRef} className="cursor-ponto" aria-hidden="true" />
    </>
  );
}
