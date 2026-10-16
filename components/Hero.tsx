import Image from "next/image";
import { profile } from "@/data/profile";
import { Rich } from "./Rich";
import { Tilt } from "./Tilt";
import { TypingName } from "./TypingName";

const initials = profile.name
  .split(" ")
  .map((w) => w[0])
  .slice(0, 2)
  .join("");

export function Hero() {
  return (
    <div className="flex min-h-[85vh] flex-col items-center justify-center gap-8 pt-16 sm:pt-20 lg:flex-row lg:gap-14 lg:pt-0">
      <div className="flex shrink-0 flex-row items-center gap-4 sm:flex-col sm:gap-6">
        <Tilt>
          {profile.photo ? (
            <Image
              src={profile.photo}
              alt={profile.name}
              width={880}
              height={1100}
              sizes="(max-width: 640px) 96px, 288px"
              priority
              className="aspect-[4/5] w-24 rounded-2xl object-cover shadow-md sm:w-72 sm:rounded-3xl sm:shadow-xl"
            />
          ) : (
            // Sem foto ainda: mostra as iniciais.
            <div className="grid aspect-[4/5] w-24 place-items-center rounded-2xl bg-blue-fantastic text-3xl font-bold text-flame shadow-md sm:w-72 sm:rounded-3xl sm:text-7xl sm:shadow-xl">
              {initials}
            </div>
          )}
        </Tilt>
        <div className="flex flex-col items-start gap-0.5 text-left sm:items-center sm:gap-1 sm:text-center">
          <span className="text-xs sm:text-sm">Oi! Eu sou</span>
          <h1 className="text-xl whitespace-nowrap text-foreground sm:text-3xl">
            <TypingName text={`${profile.name} :)`} />
          </h1>
          <span className="text-xs text-muted sm:text-sm">{profile.tagline}</span>
        </div>
      </div>

      <div className="flex w-full max-w-2xl min-w-0 flex-col items-center gap-5">
        <p className="text-center text-sm leading-7 sm:text-base sm:leading-8">
          <Rich text={profile.intro} />
          <br />
          {profile.introAfter}
        </p>
        <a
          href="#roadmap"
          className="group flex items-center gap-2 rounded-full bg-blue-fantastic px-5 py-2.5 text-sm font-semibold text-palladian shadow-md transition hover:-translate-y-0.5 hover:shadow-lg dark:bg-palladian dark:text-blue-fantastic"
        >
          Ver meu roadmap
          <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-y-0.5">
            ↓
          </span>
        </a>
        <p className="text-center text-xs text-muted sm:text-sm">
          Me acompanhe no{" "}
          {profile.links.map((link, i) => (
            <span key={link.url}>
              {i > 0 && (i === profile.links.length - 1 ? " e " : ", ")}
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-accent underline decoration-current/40 underline-offset-4 transition-colors hover:decoration-current"
              >
                {link.label}
              </a>
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
