"use client";

import { useEffect, useRef, useState } from "react";
import { levels, type Level } from "@/data/roadmap";
import { LevelTag } from "./LevelTag";
import { ProgressBar } from "./ProgressBar";

type Props = { checked: number; total: number; onReset: () => void };

export function OverallProgress({ checked, total, onReset }: Props) {
  const pct = total ? Math.round((checked / total) * 100) : 0;
  const [armed, setArmed] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  // Primeiro clique pede confirmação; o segundo limpa.
  const handleReset = () => {
    clearTimeout(timer.current);
    if (!armed) {
      setArmed(true);
      timer.current = setTimeout(() => setArmed(false), 3000);
      return;
    }
    setArmed(false);
    onReset();
  };

  return (
    <div aria-label="Progresso geral" className="grid gap-3 border-b border-line p-5 sm:p-8">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs text-muted uppercase">Progresso geral</p>
          <p className="mt-1 text-3xl font-bold text-foreground tabular-nums">
            {pct}% <small className="text-sm font-normal text-muted">{checked} de {total} tópicos</small>
          </p>
        </div>
        <button
          type="button"
          onClick={handleReset}
          className={`cursor-pointer rounded-full px-3 py-1.5 text-xs ring-1 transition ${
            armed ? "text-accent ring-accent" : "text-muted ring-line hover:text-foreground hover:ring-oatmeal"
          }`}
        >
          {armed ? "Clique de novo para confirmar" : "Limpar progresso"}
        </button>
      </div>
      <ProgressBar value={pct} />
      <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted">
        {(Object.keys(levels) as Level[]).map((level) => (
          <span key={level} className="flex items-center gap-1.5">
            <LevelTag level={level} /> {levels[level]}
          </span>
        ))}
      </div>
    </div>
  );
}
