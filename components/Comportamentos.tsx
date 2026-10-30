"use client";

import { useEffect } from "react";

// Cabeçalho sólido depois do hero, barra fixa no celular e entrada leve das
// seções (opacidade + 24px, uma vez).
export default function Comportamentos() {
  useEffect(() => {
    const root = document.documentElement;
    const hero = document.getElementById("topo");

    const onScroll = () => {
      const fimHero = hero ? hero.offsetTop + hero.offsetHeight - window.innerHeight : 0;
      root.dataset.solido = String(window.scrollY > fimHero - 10);
      root.dataset.passouHero = String(window.scrollY > fimHero + window.innerHeight * 0.4);
    };
    document.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();

    let io: IntersectionObserver | undefined;
    const reduz = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduz && "IntersectionObserver" in window) {
      const ease = "cubic-bezier(.2,.65,.2,1)";
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (!e.isIntersecting) return;
            const el = e.target as HTMLElement;
            el.style.opacity = "1";
            el.style.translate = "0 0";
            io?.unobserve(el);
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
      );
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
        const d = parseInt(el.dataset.reveal ?? "0", 10) || 0;
        el.style.opacity = "0";
        el.style.translate = "0 24px";
        el.style.transition = `opacity 700ms ${ease} ${d}ms, translate 700ms ${ease} ${d}ms, transform .5s ${ease}`;
        io?.observe(el);
      });
    }

    return () => {
      document.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      io?.disconnect();
    };
  }, []);

  return null;
}
