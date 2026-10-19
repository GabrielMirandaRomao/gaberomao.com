// Fases do roadmap, na ordem de estudo.
// Texto entre crases (`assim`) aparece formatado como código.

export type Level = "essencial" | "importante" | "diferencial";

export type Topic = {
  name: string;
  hint?: string;
  url?: string; // link direto para estudar o tópico
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
      { name: "Sintaxe, `val` vs `var`, tipos e funções", url: "https://kotlinlang.org/docs/basic-syntax.html", level: "essencial" },
      { name: "Null safety: `?`, `?.`, `?:` e `!!`", hint: "Pergunta clássica de entrevista", url: "https://kotlinlang.org/docs/null-safety.html", level: "essencial" },
      { name: "`data class`, `sealed class`, `object` e `enum`", url: "https://kotlinlang.org/docs/sealed-classes.html", level: "essencial" },
      { name: "Coleções e lambdas: `map`, `filter`, `fold`", url: "https://kotlinlang.org/docs/collection-transformations.html", level: "essencial" },
      { name: "Scope functions: `let`, `apply`, `run`, `also`, `with`", url: "https://kotlinlang.org/docs/scope-functions.html", level: "importante" },
      { name: "Extension functions e higher-order functions", url: "https://kotlinlang.org/docs/lambdas.html", level: "importante" },
      { name: "Generics e variância (`in` / `out`)", url: "https://kotlinlang.org/docs/generics.html", level: "diferencial" },
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
      { name: "Coroutines: `suspend`, `launch`, `async`", url: "https://kotlinlang.org/docs/coroutines-basics.html", level: "essencial" },
      { name: "Dispatchers e troca de contexto", hint: "Main, IO, Default", url: "https://kotlinlang.org/docs/coroutine-context-and-dispatchers.html", level: "essencial" },
      { name: "Structured concurrency, Job e cancelamento", url: "https://kotlinlang.org/docs/cancellation-and-timeouts.html", level: "importante" },
      { name: "Flow, `StateFlow` e `SharedFlow`", hint: "Cold vs hot flows", url: "https://developer.android.com/kotlin/flow/stateflow-and-sharedflow?hl=pt-br", level: "essencial" },
      { name: "Operadores de Flow: `map`, `combine`, `flatMapLatest`", url: "https://kotlinlang.org/docs/flow.html", level: "importante" },
      { name: "Tratamento de exceções em coroutines", hint: "`CoroutineExceptionHandler`, `supervisorScope`", url: "https://kotlinlang.org/docs/exception-handling.html", level: "diferencial" },
    ],
  },
  {
    title: "Fundamentos do Android",
    description: "Como o sistema operacional enxerga o seu app.",
    links: [
      { label: "Ciclo de vida da Activity", url: "https://developer.android.com/guide/components/activities/activity-lifecycle?hl=pt-br" },
      { label: "Permissões", url: "https://developer.android.com/training/permissions/requesting?hl=pt-br" },
      { label: "WorkManager", url: "https://developer.android.com/develop/background-work/background-tasks/persistent?hl=pt-br" },
    ],
    topics: [
      { name: "Ciclo de vida de Activity e Fragment", url: "https://developer.android.com/guide/fragments/lifecycle?hl=pt-br", level: "essencial" },
      { name: "Context, Intents e AndroidManifest", url: "https://developer.android.com/guide/components/intents-filters?hl=pt-br", level: "essencial" },
      { name: "Permissões em tempo de execução", url: "https://developer.android.com/training/permissions/requesting?hl=pt-br", level: "importante" },
      { name: "Mudança de configuração, process death e `SavedStateHandle`", url: "https://developer.android.com/topic/libraries/architecture/saving-states?hl=pt-br", level: "importante" },
      { name: "Trabalho em segundo plano com WorkManager", url: "https://developer.android.com/develop/background-work/background-tasks/persistent/getting-started?hl=pt-br", level: "importante" },
      { name: "Views e XML (o básico, para manter apps legados)", url: "https://developer.android.com/develop/ui/views/layout/declaring-layout?hl=pt-br", level: "diferencial" },
    ],
  },
  {
    title: "UI com Jetpack Compose",
    description: "O padrão atual de UI no Android.",
    links: [
      { label: "Android Basics with Compose", url: "https://developer.android.com/courses/android-basics-compose/course?hl=pt-br" },
      { label: "Estado no Compose", url: "https://developer.android.com/develop/ui/compose/state?hl=pt-br" },
      { label: "Navigation Compose", url: "https://developer.android.com/guide/navigation?hl=pt-br" },
    ],
    topics: [
      { name: "Composables, layouts e modifiers", url: "https://developer.android.com/develop/ui/compose/modifiers?hl=pt-br", level: "essencial" },
      { name: "Estado: `remember`, `mutableStateOf` e state hoisting", url: "https://developer.android.com/develop/ui/compose/state-hoisting?hl=pt-br", level: "essencial" },
      { name: "Recomposição e estabilidade", hint: "Por que a tela recompõe sem parar?", url: "https://developer.android.com/develop/ui/compose/performance/stability?hl=pt-br", level: "importante" },
      { name: "Side effects: `LaunchedEffect`, `DisposableEffect`", url: "https://developer.android.com/develop/ui/compose/side-effects?hl=pt-br", level: "importante" },
      { name: "Listas com `LazyColumn` e keys", url: "https://developer.android.com/develop/ui/compose/lists?hl=pt-br", level: "essencial" },
      { name: "Navigation Compose", url: "https://developer.android.com/guide/navigation?hl=pt-br", level: "essencial" },
      { name: "Material 3, temas e dark mode", url: "https://developer.android.com/develop/ui/compose/designsystems/material3?hl=pt-br", level: "importante" },
      { name: "Animações em Compose", url: "https://developer.android.com/develop/ui/compose/animation/introduction?hl=pt-br", level: "diferencial" },
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
      { name: "MVVM com ViewModel", url: "https://developer.android.com/topic/libraries/architecture/viewmodel?hl=pt-br", level: "essencial" },
      { name: "Unidirectional Data Flow e MVI", url: "https://developer.android.com/topic/architecture/ui-layer?hl=pt-br", level: "importante" },
      { name: "Camadas: UI, domain e data (Clean Architecture)", url: "https://developer.android.com/topic/architecture/domain-layer?hl=pt-br", level: "importante" },
      { name: "Injeção de dependência com Hilt", hint: "Ou Koin", url: "https://developer.android.com/training/dependency-injection/hilt-android?hl=pt-br", level: "essencial" },
      { name: "Modularização por feature", url: "https://developer.android.com/topic/modularization?hl=pt-br", level: "diferencial" },
    ],
  },
  {
    title: "Dados e rede",
    description: "Buscar, guardar e sincronizar dados.",
    links: [
      { label: "Retrofit", url: "https://lysine.dev/retrofit/" },
      { label: "Room", url: "https://developer.android.com/training/data-storage/room?hl=pt-br" },
      { label: "DataStore", url: "https://developer.android.com/topic/libraries/architecture/datastore?hl=pt-br" },
      { label: "Offline-first", url: "https://developer.android.com/topic/architecture/data-layer/offline-first?hl=pt-br" },
    ],
    topics: [
      { name: "Retrofit + OkHttp", hint: "Interceptors, timeouts", url: "https://lysine.dev/okhttp/features/interceptors/", level: "essencial" },
      { name: "kotlinx.serialization ou Moshi", url: "https://kotlinlang.org/docs/serialization.html", level: "importante" },
      { name: "Banco local com Room", url: "https://developer.android.com/training/data-storage/room?hl=pt-br", level: "essencial" },
      { name: "Preferências com DataStore", url: "https://developer.android.com/topic/libraries/architecture/datastore?hl=pt-br", level: "importante" },
      { name: "Repository pattern e offline-first", url: "https://developer.android.com/topic/architecture/data-layer?hl=pt-br", level: "importante" },
      { name: "Paginação com Paging 3", url: "https://developer.android.com/topic/libraries/architecture/paging/v3-overview?hl=pt-br", level: "diferencial" },
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
      { name: "Testes unitários com JUnit", url: "https://developer.android.com/training/testing/local-tests?hl=pt-br", level: "essencial" },
      { name: "Mocks com MockK", url: "https://mockk.io/", level: "essencial" },
      { name: "Testar coroutines e Flow", hint: "`runTest` e Turbine", url: "https://developer.android.com/kotlin/coroutines/test?hl=pt-br", level: "importante" },
      { name: "Testes de UI em Compose", url: "https://developer.android.com/develop/ui/compose/testing?hl=pt-br", level: "importante" },
      { name: "Testes instrumentados com Espresso", url: "https://developer.android.com/training/testing/espresso?hl=pt-br", level: "diferencial" },
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
      { name: "Gradle com Kotlin DSL e version catalog", url: "https://developer.android.com/build/migrate-to-catalogs?hl=pt-br", level: "importante" },
      { name: "Build variants e product flavors", url: "https://developer.android.com/build/build-variants?hl=pt-br", level: "importante" },
      { name: "R8 / ProGuard e assinatura do app", url: "https://developer.android.com/topic/performance/app-optimization/enable-app-optimization?hl=pt-br", level: "importante" },
      { name: "CI com GitHub Actions", hint: "Build e testes a cada push", url: "https://docs.github.com/pt/actions/tutorials/build-and-test-code/java-with-gradle", level: "diferencial" },
      { name: "Publicar um app na Play Store", hint: "Nada vale mais no currículo", url: "https://developer.android.com/studio/publish?hl=pt-br", level: "diferencial" },
      { name: "Performance: Baseline Profiles e Android Profiler", url: "https://developer.android.com/topic/performance/baselineprofiles/overview?hl=pt-br", level: "diferencial" },
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
      { name: "2 ou 3 projetos completos no GitHub com README", url: "https://docs.github.com/pt/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes", level: "essencial" },
      { name: "Perguntas técnicas de Android e Kotlin", url: "https://github.com/amitshekhariitbhu/android-interview-questions", level: "essencial" },
      { name: "Live coding de algoritmos em Kotlin", hint: "LeetCode, nível fácil e médio", url: "https://leetcode.com/studyplan/top-interview-150/", level: "importante" },
      { name: "System design mobile", hint: "Ex.: projetar um feed offline-first", url: "https://github.com/weeeBox/mobile-system-design", level: "diferencial" },
      { name: "Perguntas comportamentais (método STAR)", level: "importante" },
      { name: "Inglês técnico para vagas internacionais", level: "diferencial" },
    ],
  },
];

// Id estável de cada tópico, usado para salvar o progresso.
export const topicId = (phaseIndex: number, topicIndex: number) => `p${phaseIndex}-i${topicIndex}`;
