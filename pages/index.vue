<template>
  <!-- <app-header class="z-0"></app-header> -->

  <section
    id="home"
    class="relative w-full h-dvh grid grid-rows-2 bg-slate-200"
  >
    <!-- <svg
      class="w-full h-full px-10 hidden md:block"
      viewBox="0 0 310 50"
      fill="none"
    >
      <text
        x="50%"
        y="50%"
        text-anchor="middle"
        dominant-baseline="middle"
        font-size="45"
        fill="#1e293b"
      >
        Rodrigo Pizarro
      </text>
    </svg> -->
    <!-- <h1 class="text-9xl px-5 text-slate-800 md:hidden">
      <p>Rodrigo</p>
      <p>Pizarro</p>
    </h1> -->
    <div></div>
    <section class="content-end justify-self-end">
      <div class="grid md:grid-cols-3 gap-5 p-5 md:p-10">
        <div class="md:col-span-2 content-end justify-self-end">
          <h2 class="text-5xl md:text-6xl">A software artisan</h2>
          <p class="md:text-2xl text-lg text-slate-600 text-balance">
            Judoka and software
            <span class="line-through">engineer</span> artisan from Chile with
            +7 years of experience on software development. Crafting user
            friendly solutions.
          </p>
        </div>
        <div class="md:col-span-1 content-end justify-self-end">
          <p class="text-slate-600 text-right md:text-2xl text-lg">
            Currently at
          </p>
          <h3 class="md:text-5xl text-3xl text-right text-slate-800">
            Lifebox Chile
          </h3>
        </div>
      </div>
    </section>
  </section>

  <section id="experience" class="w-full h-dvh bg-slate-300 p-5 md:p-10">
    <div class="grid md:grid-cols-2 h-full">
      <article class="col-span-1 col-start-2 flex flex-col h-full">
        <h2 class="text-5xl mb-5">Last working experiences</h2>
        <div class="flex-1 flex flex-col justify-end gap-5">
          <div v-for="experience in experiences" :key="experience.company">
            <p class="text-xl opacity-70">{{ experience.date }}</p>
            <div class="flex items-center gap-2 text-3xl">
              <p class="">{{ experience.company }}</p>
              <p class="opacity-50">{{ experience.title }}</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>

  <section id="about-me" class="w-full h-dvh bg-slate-200 p-5 md:p-10">
    <div class="grid md:grid-cols-2 h-full">
      <article class="col-span-1 flex flex-col h-full">
        <h2 class="text-5xl mb-5">Something about me</h2>
      </article>
    </div>
  </section>
  <section id="contact" class="w-full h-screen bg-slate-600"></section>

  <section class="w-full mx-auto border-y border-gray-700">
    <div class="max-w-5xl mx-auto px-5 py-10">
      <h2 class="text-3xl text-slate-200 text-center mb-5">
        My top tech stack
      </h2>
      <home-stack-grid></home-stack-grid>
    </div>
  </section>

  <section class="h-screen">
    <div class="flex flex-col items-center justify-end h-full px-5 pb-12">
      <p class="text-gray-400 text-lg mb-4">
        Did you keep scrolling to reach this point? Just contact me on LinkedIn.
      </p>
      <a
        href="https://www.linkedin.com/in/baaltrodrigo"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-block px-6 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-lg font-semibold transition-colors duration-200 shadow"
      >
        Contact me
      </a>
    </div>
  </section>
</template>

<script setup>
const experiences = [
  {
    title: "Software Engineer",
    company: "Lifebox",
    date: "Mar, 2024 - Present",
    description:
      "Part of the Digital and Innovation team to develop better learning experiences inside our LMS platform. Mainly focused on the frontend development of the different products and services for clients and internal teams.",
    image: "./working-with/lifebox-image.webp",
  },
  {
    title: "Software Engineer",
    company: "Facilita SPA",
    date: "Mar, 2019 - Jan, 2024",
    description:
      "In charge of the digital transformation on several of the company products. Making the transition from desktop applications to web applications.",
    image: "./working-with/facilita.png",
  },
  {
    title: "Tech Lead",
    company: "CronApp - Chile",
    date: "May, 2022 - Aug, 2023",
    description:
      "Tech lead of the team that launched the first functional product. Actively involved on the decision making and architecture design of the medical tracking app for diabetes and hearth diseases on Chilean CESFAM.",
    image: "./working-with/cronapp.png",
  },
  {
    title: "Software Engineer",
    company: "Chilean Army",
    date: "Sept, 2019 - Mar, 2020",
    description: "",
    image: "./working-with/chilean-army.png",
  },
];
</script>
