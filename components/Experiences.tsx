import { profile } from "@/data/profile";
import { Rich } from "./Rich";

// Linha do tempo: no desktop a coluna da empresa fica fixa enquanto o bloco rola.
export function Experiences() {
  return (
    <section id="experiencia" className="scroll-mt-10">
      <h2 className="mb-10 text-left text-2xl font-bold text-foreground">Minha experiência:</h2>
      <ol className="flex flex-col">
        {profile.experience.map((exp) => (
          <li
            key={exp.company + exp.period}
            className="group relative grid gap-4 border-l-2 border-line pb-14 pl-6 last:pb-0 sm:pl-8 md:grid-cols-[14rem_1fr] md:gap-10 md:border-l-0 md:pb-0 md:pl-0"
          >
            <span
              aria-hidden="true"
              className="absolute top-2.5 -left-[7px] size-3 rounded-full bg-flame ring-4 ring-ring-bg md:hidden"
            />
            <div className="md:sticky md:top-24 md:self-start md:text-right">
              <h3 className="text-xl font-bold text-accent">{exp.company}</h3>
              <div className="mt-1 text-xs text-muted sm:text-sm">{exp.period}</div>
            </div>

            <div className="relative min-w-0 border-line md:border-l-2 md:pb-16 md:pl-8 md:group-last:pb-0">
              <span
                aria-hidden="true"
                className="absolute top-2.5 -left-[7px] hidden size-3 rounded-full bg-flame ring-4 ring-ring-bg md:block"
              />
              <h4 className="text-lg font-bold text-foreground">{exp.role}</h4>
              <div className="mb-3 text-xs text-muted sm:text-sm">{exp.period}</div>
              <ul className="space-y-3 text-sm leading-7">
                {exp.highlights.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-3 text-flame">▸</span>
                    <span>
                      <Rich text={item} />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
