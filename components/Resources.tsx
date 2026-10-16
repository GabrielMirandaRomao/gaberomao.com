import { resources } from "@/data/resources";
import { SectionTitle } from "./SectionTitle";

export function Resources() {
  return (
    <section id="como-estudo" className="mb-20 scroll-mt-10">
      <SectionTitle title="Como estou estudando" subtitle="Onde eu aprendo, quase tudo de graça." />
      <ul className="grid gap-4 sm:grid-cols-2">
        {resources.map((r) => (
          <li key={r.url}>
            <a
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col gap-2 rounded-2xl bg-surface p-5 ring-1 ring-line transition-all hover:-translate-y-0.5 hover:shadow-lg hover:ring-oatmeal"
            >
              {/* Monograma no lugar do logo */}
              <span
                aria-hidden="true"
                className="grid size-10 place-items-center rounded-lg bg-surface-soft text-base font-bold text-accent ring-1 ring-line"
              >
                {r.title[0]}
              </span>
              <span className="text-base font-semibold text-foreground transition-colors group-hover:text-accent">
                {r.title}{" "}
                <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
              <span className="text-sm leading-6 text-muted">{r.description}</span>
              <span className="mt-auto text-xs text-muted/80">{r.site}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
