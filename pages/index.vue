<template>
  <app-header class="z-0"></app-header>
  <section class="max-w-5xl mx-auto grid grid-cols-1 gap-3 mt-30 px-5">
    <home-hero></home-hero>
  </section>
  <section class="max-w-5xl mx-auto mt-10 px-5">
    <h2 class="text-3xl text-slate-200 my-5">Last working experiences</h2>
    <timeline
      v-for="(experience, index) in experiences"
      :key="'experience-' + index"
      :company="experience.company"
      :position="experience.title"
      :dates="experience.date"
      :image="experience.image"
      :description="experience.description"
      :hide-separator="index === experiences.length - 1"
    ></timeline>
  </section>

  <section class="w-full mx-auto border-y border-gray-700">
    <div class="max-w-5xl mx-auto px-5 py-10">
      <h2 class="text-3xl text-slate-200 text-center mb-5">
        My top tech stack
      </h2>
      <home-stack-grid></home-stack-grid>
    </div>
  </section>

  <!-- <div class="border-b-1 border-gray-700"></div> -->
  <!-- <section class="w-full grid grid-cols-1 border-t border-b border-gray-700">
    <a
      :class="[
        'text-slate-200 font-medium hover:text-sky-200',
        'py-4 w-full text-center',
        'hover:bg-gray-700 transition-colors duration-200',
        'hover:cursor-pointer',
      ]"
    >
      Check out more experiences
    </a>
  </section> -->

  <section class="h-screen"></section>
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
];
</script>
