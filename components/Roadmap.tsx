"use client";

import { phases } from "@/data/roadmap";
import { useProgress } from "@/lib/useProgress";
import { OverallProgress } from "./OverallProgress";
import { PhaseCard } from "./PhaseCard";
import { SectionTitle } from "./SectionTitle";

const total = phases.reduce((sum, p) => sum + p.topics.length, 0);

export function Roadmap() {
  const { done, toggle, reset } = useProgress();
  const checked = Object.keys(done).length;

  return (
    <section id="roadmap" className="mt-16 mb-20 scroll-mt-10 lg:mt-0">
      <SectionTitle title="Meu roadmap de estudos" subtitle="Tudo o que estou estudando pra entrevistas de Android com Kotlin." />
      <div className="overflow-hidden rounded-2xl bg-surface text-left shadow-lg ring-1 ring-line">
        <OverallProgress checked={checked} total={total} onReset={reset} />
        {phases.map((phase, i) => (
          <PhaseCard key={phase.title} phase={phase} index={i} done={done} onToggle={toggle} />
        ))}
      </div>
    </section>
  );
}
