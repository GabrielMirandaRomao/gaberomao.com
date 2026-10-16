import { profile } from "@/data/profile";
import { Rich } from "./Rich";

export function About() {
  return (
    <section className="mb-16">
      <h2 className="text-left text-2xl font-bold text-foreground">Sobre mim:</h2>
      <div className="my-8 flex max-w-3xl flex-col gap-5 text-base leading-7">
        {profile.about.map((paragraph, i) => (
          <p key={i}>
            <Rich text={paragraph} />
          </p>
        ))}
      </div>
    </section>
  );
}
