"use client";

import { useEffect, useState } from "react";

// Digita o texto letra por letra. O texto completo reserva o espaço para a linha não pular.
export function TypingName({ text }: { text: string }) {
  const [count, setCount] = useState(text.length);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let i = 0;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- reinicia a animação ao montar
    setCount(0);
    const id = setInterval(() => {
      i += 1;
      setCount(i);
      if (i >= text.length) clearInterval(id);
    }, 90);
    return () => clearInterval(id);
  }, [text]);

  return (
    <span className="relative inline-block">
      <span className="invisible whitespace-pre" aria-hidden="true">
        {text}
      </span>
      <span className="absolute inset-0 whitespace-pre" aria-label={text}>
        {text.slice(0, count)}
        <span aria-hidden="true" className="animate-blink">
          |
        </span>
      </span>
    </span>
  );
}
