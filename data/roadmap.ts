// Fases do roadmap, na ordem de estudo.
// Texto entre crases (`assim`) aparece formatado como código.

export type Level = "essencial" | "importante" | "diferencial";

export type Topic = {
  name: string;
  hint?: string;
  level: Level;
};

export type StudyLink = {
  label: string;
  url: string;
};

export type Phase = {
  title: string;
  description: string;
  links: StudyLink[];
  topics: Topic[];
};

export const levels: Record<Level, string> = {
  essencial: "cai em quase toda entrevista",
  importante: "esperado de pleno",
  diferencial: "destaca o currículo",
};

export const phases: Phase[] = [
  {
    title: "Fundamentos de Kotlin",
    description: "A linguagem antes do framework. Sem isso, o resto vira copiar e colar.",
    links: [
      { label: "W3Schools Kotlin", url: "https://www.w3schools.com/KOTLIN/" },
      { label: "Kotlin Koans", url: "https://play.kotlinlang.org/koans/overview" },
      { label: "Docs: sintaxe básica", url: "https://kotlinlang.org/docs/basic-syntax.html" },
    ],
    topics: [
      { name: "Sintaxe, `val` vs `var`, tipos e funções", level: "essencial" },
      { name: "Null safety: `?`, `?.`, `?:` e `!!`", hint: "Pergunta clássica de entrevista", level: "essencial" },
      { name: "`data class`, `sealed class`, `object` e `enum`", level: "essencial" },
      { name: "Coleções e lambdas: `map`, `filter`, `fold`", level: "essencial" },
      { name: "Scope functions: `let`, `apply`, `run`, `also`, `with`", level: "importante" },
      { name: "Extension functions e higher-order functions", level: "importante" },
      { name: "Generics e variância (`in` / `out`)", level: "diferencial" },
    ],
  },
  {
    title: "Kotlin assíncrono",
    description: "Coroutines e Flow aparecem em todo app moderno e em quase toda entrevista técnica.",
    links: [
      { label: "Guia de Coroutines", url: "https://kotlinlang.org/docs/coroutines-guide.html" },
      { label: "Flow no Android", url: "https://developer.android.com/kotlin/flow?hl=pt-br" },
      { label: "Boas práticas de coroutines", url: "https://developer.android.com/kotlin/coroutines/coroutines-best-practices?hl=pt-br" },
    ],
    topics: [
      { name: "Coroutines: `suspend`, `launch`, `async`", level: "essencial" },
      { name: "Dispatchers e troca de contexto", hint: "Main, IO, Default", level: "essencial" },
      { name: "Structured concurrency, Job e cancelamento", level: "importante" },
      { name: "Flow, `StateFlow` e `SharedFlow`", hint: "Cold vs hot flows", level: "essencial" },
      { name: "Operadores de Flow: `map`, `combine`, `flatMapLatest`", level: "importante" },
      { name: "Tratamento de exceções em coroutines", hint: "`CoroutineExceptionHandler`, `supervisorScope`", level: "diferencial" },
    ],
  },
  {
    title: "Fundamentos do Android",
    description: "Como o sistema operacional enxerga o seu app.",
    links: [
      { label: "Ciclo de vida da Activity", url: "https://developer.android.com/guide/components/activities/activity-lifecycle?hl=pt-br" },
      { label: "Permissões", url: "https://developer.android.com/training/permissions/requesting?hl=pt-br" },
      { label: "WorkManager", url: "https://developer.android.com/topic/libraries/architecture/workmanager?hl=pt-br" },
    ],
    topics: [
      { name: "Ciclo de vida de Activity e Fragment", level: "essencial" },
      { name: "Context, Intents e AndroidManifest", level: "essencial" },
      { name: "Permissões em tempo de execução", level: "importante" },
      { name: "Mudança de configuração, process death e `SavedStateHandle`", level: "importante" },
      { name: "Trabalho em segundo plano com WorkManager", level: "importante" },
      { name: "Views e XML (o básico, para manter apps legados)", level: "diferencial" },
    ],
  },
  {
    title: "UI com Jetpack Compose",
    description: "O padrão atual de UI no Android.",
    links: [
      { label: "Android Basics with Compose", url: "https://developer.android.com/courses/android-basics-compose/course?hl=pt-br" },
      { label: "Estado no Compose", url: "https://developer.android.com/develop/ui/compose/state?hl=pt-br" },
      { label: "Navigation Compose", url: "https://developer.android.com/develop/ui/compose/navigation?hl=pt-br" },
    ],
    topics: [
      { name: "Composables, layouts e modifiers", level: "essencial" },
      { name: "Estado: `remember`, `mutableStateOf` e state hoisting", level: "essencial" },
      { name: "Recomposição e estabilidade", hint: "Por que a tela recompõe sem parar?", level: "importante" },
      { name: "Side effects: `LaunchedEffect`, `DisposableEffect`", level: "importante" },
      { name: "Listas com `LazyColumn` e keys", level: "essencial" },
      { name: "Navigation Compose", level: "essencial" },
      { name: "Material 3, temas e dark mode", level: "importante" },
      { name: "Animações em Compose", level: "diferencial" },
    ],
  },
  {
    title: "Arquitetura",
    description: "O que separa um app de estudo de um app de produção.",
    links: [
      { label: "Guia de arquitetura", url: "https://developer.android.com/topic/architecture?hl=pt-br" },
      { label: "ViewModel", url: "https://developer.android.com/topic/libraries/architecture/viewmodel?hl=pt-br" },
      { label: "Hilt", url: "https://developer.android.com/training/dependency-injection/hilt-android?hl=pt-br" },
      { label: "Now in Android", url: "https://github.com/android/nowinandroid" },
    ],
    topics: [
      { name: "MVVM com ViewModel", level: "essencial" },
      { name: "Unidirectional Data Flow e MVI", level: "importante" },
      { name: "Camadas: UI, domain e data (Clean Architecture)", level: "importante" },
      { name: "Injeção de dependência com Hilt", hint: "Ou Koin", level: "essencial" },
      { name: "Modularização por feature", level: "diferencial" },
    ],
  },
  {
    title: "Dados e rede",
    description: "Buscar, guardar e sincronizar dados.",
    links: [
      { label: "Retrofit", url: "https://square.github.io/retrofit/" },
      { label: "Room", url: "https://developer.android.com/training/data-storage/room?hl=pt-br" },
      { label: "DataStore", url: "https://developer.android.com/topic/libraries/architecture/datastore?hl=pt-br" },
      { label: "Offline-first", url: "https://developer.android.com/topic/architecture/data-layer/offline-first?hl=pt-br" },
    ],
    topics: [
      { name: "Retrofit + OkHttp", hint: "Interceptors, timeouts", level: "essencial" },
      { name: "kotlinx.serialization ou Moshi", level: "importante" },
      { name: "Banco local com Room", level: "essencial" },
      { name: "Preferências com DataStore", level: "importante" },
      { name: "Repository pattern e offline-first", level: "importante" },
      { name: "Paginação com Paging 3", level: "diferencial" },
    ],
  },
  {
    title: "Testes",
    description: "Quase toda vaga pleno pede. Pouca gente mostra no portfólio.",
    links: [
      { label: "Fundamentos de testes", url: "https://developer.android.com/training/testing/fundamentals?hl=pt-br" },
      { label: "Testar coroutines", url: "https://developer.android.com/kotlin/coroutines/test?hl=pt-br" },
      { label: "Testes no Compose", url: "https://developer.android.com/develop/ui/compose/testing?hl=pt-br" },
      { label: "MockK", url: "https://mockk.io/" },
    ],
    topics: [
      { name: "Testes unitários com JUnit", level: "essencial" },
      { name: "Mocks com MockK", level: "essencial" },
      { name: "Testar coroutines e Flow", hint: "`runTest` e Turbine", level: "importante" },
      { name: "Testes de UI em Compose", level: "importante" },
      { name: "Testes instrumentados com Espresso", level: "diferencial" },
    ],
  },
  {
    title: "Build e publicação",
    description: "Levar o app até a loja.",
    links: [
      { label: "Configurar o build", url: "https://developer.android.com/build?hl=pt-br" },
      { label: "Version catalogs", url: "https://developer.android.com/build/migrate-to-catalogs?hl=pt-br" },
      { label: "Publicar o app", url: "https://developer.android.com/studio/publish?hl=pt-br" },
      { label: "Baseline Profiles", url: "https://developer.android.com/topic/performance/baselineprofiles/overview?hl=pt-br" },
    ],
    topics: [
      { name: "Gradle com Kotlin DSL e version catalog", level: "importante" },
      { name: "Build variants e product flavors", level: "importante" },
      { name: "R8 / ProGuard e assinatura do app", level: "importante" },
      { name: "CI com GitHub Actions", hint: "Build e testes a cada push", level: "diferencial" },
      { name: "Publicar um app na Play Store", hint: "Nada vale mais no currículo", level: "diferencial" },
      { name: "Performance: Baseline Profiles e Android Profiler", level: "diferencial" },
    ],
  },
  {
    title: "Preparação para entrevistas",
    description: "Juntar tudo e treinar o formato da entrevista.",
    links: [
      { label: "Android Interview Questions", url: "https://github.com/amitshekhariitbhu/android-interview-questions" },
      { label: "LeetCode", url: "https://leetcode.com/" },
      { label: "Now in Android (referência de projeto)", url: "https://github.com/android/nowinandroid" },
    ],
    topics: [
      { name: "2 ou 3 projetos completos no GitHub com README", level: "essencial" },
      { name: "Perguntas técnicas de Android e Kotlin", level: "essencial" },
      { name: "Live coding de algoritmos em Kotlin", hint: "LeetCode, nível fácil e médio", level: "importante" },
      { name: "System design mobile", hint: "Ex.: projetar um feed offline-first", level: "diferencial" },
      { name: "Perguntas comportamentais (método STAR)", level: "importante" },
      { name: "Inglês técnico para vagas internacionais", level: "diferencial" },
    ],
  },
];

// Id estável de cada tópico, usado para salvar o progresso.
export const topicId = (phaseIndex: number, topicIndex: number) => `p${phaseIndex}-i${topicIndex}`;
