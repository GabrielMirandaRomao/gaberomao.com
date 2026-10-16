import type { Level } from "@/data/roadmap";

const styles: Record<Level, string> = {
  essencial: "bg-accent/12 text-accent",
  importante: "bg-foreground/8 text-foreground",
  diferencial: "bg-flame/20 text-foreground",
};

export function LevelTag({ level }: { level: Level }) {
  return (
    <span className={`rounded-full px-2 py-1 text-[0.68rem] leading-none font-semibold whitespace-nowrap uppercase ${styles[level]}`}>
      {level}
    </span>
  );
}
