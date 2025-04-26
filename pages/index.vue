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
  <div class="border-b-1 border-gray-700"></div>
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
    image: "https://picsum.photos/600/300",
  },
  {
    title: "Software Engineer",
    company: "Facilita SPA",
    date: "Mar, 2019 - Jan, 2024",
    description:
      "Lead of the digital transformation of several of the company products. Making the transition from desktop to web applications.",
    image: "https://picsum.photos/600/300",
  },
  {
    title: "Tech Lead",
    company: "CronApp - Chile",
    date: "May, 2022 - Aug, 2023",
    description:
      "Team lead of the development team that launched the first functional product. Actively involved on the decision making and architecture of the medical tracking for diabetes and hearth diseases on Chilean CESFAM.",
    image: "https://picsum.photos/600/300",
  },
];
</script>
