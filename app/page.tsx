import { About } from "@/components/About";
import { Experiences } from "@/components/Experiences";
import { Hero } from "@/components/Hero";
import { Resources } from "@/components/Resources";
import { Roadmap } from "@/components/Roadmap";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <div className="px-4 pb-10 font-mono tracking-wide md:px-10 lg:px-20">
      <main className="mx-auto flex max-w-4xl min-w-0 flex-col">
        <Hero />
        <Roadmap />
        <Resources />
        {/* <About /> */}
        {/* <Experiences /> */}
        <footer className="mt-20 text-center text-sm text-muted">
          Criado por {profile.name} usando Next.js e TailwindCSS.
        </footer>
      </main>
    </div>
  );
}
