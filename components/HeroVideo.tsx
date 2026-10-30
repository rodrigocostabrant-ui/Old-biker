"use client";

import { useEffect, useRef, useState } from "react";

// Hero: só o vídeo (8 s, sem som). Quando ele termina, fica parado no último
// quadro e o espaço do H1 e da headline aparece no centro da tela.
export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [fim, setFim] = useState(false);
  const [semVideo, setSemVideo] = useState(false);

  useEffect(() => {
    if (fim) document.documentElement.dataset.intro = "fim";
  }, [fim]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Quem pediu menos movimento, ou navegador que bloqueou o autoplay
    // (ex.: modo economia do iPhone), vê direto o quadro final.
    const reduz = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    video.muted = true;
    (reduz ? Promise.reject() : video.play()).catch(() => {
      video.pause();
      setSemVideo(true);
      setFim(true);
    });
  }, []);

  return (
    <section id="topo" className="hero" data-fim={fim}>
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
        {/* Espaço reservado: H1 e headline ainda não definidos. */}
        <div className="hero-slot-h1" />
        <div className="hero-slot-headline" />
      </div>
    </section>
  );
}
