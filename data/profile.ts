// Seus dados pessoais. Troque os textos e links pelos seus.
// Texto entre **asteriscos duplos** aparece destacado.

export type Experience = {
  company: string;
  role: string;
  period: string;
  highlights: string[];
};

export const profile = {
  name: "Gabriel Mirando",
  // Coloque sua foto em public/ (ex.: public/foto.jpg) e troque para "/foto.jpg".
  photo: null as string | null,
  tagline: "estudando Android 📱",
  intro: "Estou estudando **Android com Kotlin** para conquistar minha primeira vaga como dev mobile,",
  introAfter: "e registrando tudo o que aprendo neste roadmap.",
  links: [
    { label: "GitHub", url: "https://github.com/" },
    { label: "LinkedIn", url: "https://www.linkedin.com/" },
  ],
  about: [
    "Escreva aqui um parágrafo curto contando **quem você é** e como chegou na programação.",
    "Conte por que escolheu **Android** e o que quer construir.",
    "Uma curiosidade sobre você: de onde é, hobbies, **o que te move**.",
  ],
  experience: [
    {
      company: "Estudos",
      role: "Desenvolvedor Android em formação",
      period: "2026 - AGORA",
      highlights: [
        "Seguindo o roadmap desta página, do Kotlin básico até a preparação para entrevistas.",
        "Publicando os projetos de estudo no GitHub com README e testes.",
      ],
    },
    {
      company: "Sua empresa",
      role: "Seu cargo",
      period: "JAN 20XX - DEZ 20XX",
      highlights: [
        "Uma conquista com número: o que você fez e qual foi o resultado.",
        "As tecnologias que usou nesse trabalho.",
      ],
    },
  ] satisfies Experience[],
};
