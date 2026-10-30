"use client";

import { useEffect } from "react";

// Cabeçalho sólido ao rolar, barra fixa no celular depois do hero e entrada
// leve das seções (opacidade + 20px, 560ms, uma vez).
export default function Comportamentos() {
  useEffect(() => {
    const root = document.documentElement;

    const onScroll = () => {
      const y = window.scrollY;
      root.dataset.solido = String(y > 30);
      root.dataset.passouHero = String(y > window.innerHeight * 0.75);
      if (y > 30) root.dataset.intro = "fim";
    };
    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    let io: IntersectionObserver | undefined;
    const reduz = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduz && "IntersectionObserver" in window) {
      const vh = window.innerHeight;
      const ease = "cubic-bezier(.2,.65,.2,1)";
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (!e.isIntersecting) return;
            const el = e.target as HTMLElement;
            el.style.opacity = "1";
            el.style.transform = "none";
            io?.unobserve(el);
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
      );
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
        if (el.getBoundingClientRect().top < vh * 0.92) return;
        const d = parseInt(el.dataset.reveal ?? "0", 10) || 0;
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = `opacity 560ms ${ease} ${d}ms, transform 560ms ${ease} ${d}ms`;
        io?.observe(el);
      });
    }

    return () => {
      document.removeEventListener("scroll", onScroll);
      io?.disconnect();
    };
  }, []);

  return null;
}
