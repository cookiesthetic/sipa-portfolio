"use client";

import { useEffect, useRef } from "react";
import cloverImg from "@/assets/cloverpng.png";

export default function FallingClover() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createClover = () => {
      if (!container) return;

      const img = document.createElement("img");
      img.src = typeof cloverImg === "string" ? cloverImg : cloverImg.src;
      img.alt = "";

      // Ukuran acak antara 15px hingga 35px
      const size = Math.floor(Math.random() * (35 - 15 + 1)) + 15;

      // Posisi horizontal acak (0% hingga 100% dari lebar layar)
      const leftPos = Math.random() * 100;

      // Durasi jatuh acak antara 8 hingga 16 detik
      const duration = Math.random() * (16 - 8) + 8;

      // Goyangan ke kiri/kanan (drift) acak
      const driftX = (Math.random() - 0.5) * 80;

      // Rotasi awal dan total rotasi saat jatuh
      const startRotation = Math.random() * 360;
      const spinDirection = Math.random() > 0.5 ? 1 : -1;
      const totalSpin = spinDirection * (180 + Math.random() * 540);

      // Styling elemen clover
      img.style.position = "absolute";
      img.style.left = `${leftPos}vw`;
      img.style.top = "-50px";
      img.style.width = `${size}px`;
      img.style.height = "auto";
      img.style.pointerEvents = "none";
      img.style.userSelect = "none";
      img.style.willChange = "transform, opacity";
      img.style.opacity = "0";

      container.appendChild(img);

      // Animasi jatuh, berotasi, dan bergoyang dengan Web Animations API
      const animation = img.animate(
        [
          {
            transform: `translate3d(0, 0, 0) rotate(${startRotation}deg)`,
            opacity: 0,
            offset: 0,
          },
          {
            opacity: 0.85,
            offset: 0.05,
          },
          {
            transform: `translate3d(${driftX}px, 50vh, 0) rotate(${startRotation + totalSpin / 2}deg)`,
            opacity: 0.9,
            offset: 0.5,
          },
          {
            opacity: 0.85,
            offset: 0.95,
          },
          {
            transform: `translate3d(${-driftX / 2}px, calc(100vh + 80px), 0) rotate(${startRotation + totalSpin}deg)`,
            opacity: 0,
            offset: 1,
          },
        ],
        {
          duration: duration * 1000,
          easing: "linear",
          fill: "forwards",
        }
      );

      // Hapus elemen dari DOM setelah animasi selesai agar performa tidak terbeban
      animation.onfinish = () => {
        if (img && img.parentNode) {
          img.remove();
        }
      };
      animation.oncancel = () => {
        if (img && img.parentNode) {
          img.remove();
        }
      };
    };

    // Munculkan 1 clover secara berkala setiap 1000ms (1 detik)
    createClover();
    const interval = setInterval(createClover, 1000);

    return () => {
      clearInterval(interval);
      if (container) {
        container.innerHTML = "";
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 0,
        overflow: "hidden",
      }}
      aria-hidden="true"
    />
  );
}
