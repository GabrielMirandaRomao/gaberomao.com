// Fontes gerais de estudo, exibidas em "Como estou estudando".

export type Resource = {
  site: string;
  title: string;
  description: string;
  url: string;
};

export const resources: Resource[] = [
  {
    site: "w3schools.com",
    title: "W3Schools Kotlin",
    description: "Tutorial da linguagem em passos curtos, com exemplos para rodar no navegador.",
    url: "https://www.w3schools.com/KOTLIN/",
  },
  {
    site: "developer.android.com",
    title: "Android Developers",
    description: "Portal oficial do Google em português: guias, referência de APIs e novidades.",
    url: "https://developer.android.com/?hl=pt-br",
  },
  {
    site: "developer.android.com",
    title: "Android Basics with Compose",
    description: "Curso oficial e gratuito do Google. Ponto de partida.",
    url: "https://developer.android.com/courses/android-basics-compose/course?hl=pt-br",
  },
  {
    site: "kotlinlang.org",
    title: "Kotlin Koans",
    description: "Exercícios curtos no navegador para fixar a linguagem.",
    url: "https://play.kotlinlang.org/koans/overview",
  },
  {
    site: "github.com/android",
    title: "Now in Android",
    description: "App de referência do Google: arquitetura, módulos e testes reais.",
    url: "https://github.com/android/nowinandroid",
  },
  {
    site: "kotlinlang.org",
    title: "Guia de Coroutines",
    description: "Documentação oficial de coroutines e Flow.",
    url: "https://kotlinlang.org/docs/coroutines-guide.html",
  },
  {
    site: "developer.android.com",
    title: "Guia de arquitetura",
    description: "Camadas, UDF e as recomendações atuais do Google.",
    url: "https://developer.android.com/topic/architecture?hl=pt-br",
  },
  {
    site: "youtube.com",
    title: "Philipp Lackner",
    description: "Vídeos práticos de Compose, arquitetura e testes.",
    url: "https://www.youtube.com/@PhilippLackner",
  },
];
