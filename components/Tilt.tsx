"use client";

import { useRef } from "react";

const MAX_TILT = 12;

// Inclina o conteúdo seguindo o mouse (desligado no toque e com movimento reduzido).
export function Tilt({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(e: React.PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el || e.pointerType === "touch") return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    el.style.transform = `perspective(800px) rotateX(${(0.5 - y) * MAX_TILT * 2}deg) rotateY(${(x - 0.5) * MAX_TILT * 2}deg) scale(1.03)`;
  }

  return (
    <div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={() => ref.current && (ref.current.style.transform = "")}
      className="shrink-0 transition-transform duration-200 ease-out will-change-transform motion-reduce:transform-none!"
    >
      {children}
    </div>
  );
}
