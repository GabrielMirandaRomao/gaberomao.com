import { topicId, type Phase } from "@/data/roadmap";
import { LevelTag } from "./LevelTag";
import { ProgressBar } from "./ProgressBar";
import { Rich } from "./Rich";

type Props = {
  phase: Phase;
  index: number;
  done: Record<string, true>;
  onToggle: (id: string) => void;
};

export function PhaseCard({ phase, index, done, onToggle }: Props) {
  const ids = phase.topics.map((_, i) => topicId(index, i));
  const checked = ids.filter((id) => done[id]).length;
  const complete = checked === ids.length;

  return (
    <article
      id={`fase-${index + 1}`}
      className="grid gap-x-5 gap-y-3 border-b border-line p-5 last:border-b-0 sm:grid-cols-[2.75rem_1fr] sm:p-8"
    >
      <div
        className={`grid size-11 place-items-center rounded-full text-sm font-bold tabular-nums transition-colors ${
          complete ? "bg-flame text-blue-fantastic" : "bg-surface-soft text-foreground ring-1 ring-line"
        }`}
      >
        {complete ? "✓" : String(index + 1).padStart(2, "0")}
      </div>

      <div className="grid min-w-0 gap-3">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h3 className="text-lg font-bold text-foreground">{phase.title}</h3>
          <span className="text-xs text-muted tabular-nums">
            {checked}/{ids.length}
          </span>
        </div>
        <p className="text-sm leading-6 text-muted">{phase.description}</p>
        <ProgressBar value={(checked / ids.length) * 100} thin />

        <div className="flex flex-wrap items-center gap-x-2 gap-y-2 text-xs">
          <span className="mr-1 text-muted uppercase">Onde estudar:</span>
          {phase.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-full bg-surface px-3 py-1.5 text-foreground ring-1 ring-line transition hover:-translate-y-0.5 hover:text-accent hover:shadow-md"
            >
              {link.label}{" "}
              <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </a>
          ))}
        </div>

        <ul className="mt-1 grid gap-0.5">
          {phase.topics.map((topic, i) => {
            const id = ids[i];
            const isDone = !!done[id];
            return (
              <li key={id}>
                <label
                  htmlFor={id}
                  className="-mx-3 grid cursor-pointer grid-cols-[1.25rem_1fr] items-start gap-x-3 gap-y-1 rounded-xl px-3 py-2 text-sm transition-colors hover:bg-surface-soft sm:grid-cols-[1.25rem_1fr_auto]"
                >
                  <input id={id} type="checkbox" checked={isDone} onChange={() => onToggle(id)} className="peer sr-only" />
                  <span
                    aria-hidden="true"
                    className="mt-0.5 grid size-5 place-items-center rounded-md ring-1 ring-oatmeal transition-colors peer-checked:bg-flame peer-checked:ring-flame peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-flame"
                  >
                    <svg viewBox="0 0 12 12" fill="none" className={`size-3 ${isDone ? "opacity-100" : "opacity-0"}`}>
                      <path
                        d="M2.5 6.2l2.3 2.3 4.7-5"
                        stroke="var(--blue-fantastic)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="grid min-w-0 gap-0.5 leading-6">
                    <span className={isDone ? "text-muted line-through decoration-oatmeal" : "text-foreground"}>
                      <Rich text={topic.name} />
                    </span>
                    {topic.hint && (
                      <span className="text-xs text-muted">
                        <span className="mr-1.5 text-flame">▸</span>
                        <Rich text={topic.hint} />
                      </span>
                    )}
                  </span>
                  <span className="col-start-2 mt-0.5 justify-self-start sm:col-start-3">
                    <LevelTag level={topic.level} />
                  </span>
                </label>
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
}
