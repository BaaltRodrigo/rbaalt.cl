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
    company: "Company A",
    date: "2022 - Present",
    description: "Description of the job and responsibilities.",
    image: "https://picsum.photos/600/300",
  },
  {
    title: "Software Engineer",
    company: "Company B",
    date: "2021 - 2022",
    description: "Description of the job and responsibilities.",
    image: "https://picsum.photos/600/300",
  },
  {
    title: "Software Engineer",
    company: "Company C",
    date: "2020 - 2021",
    description: "Description of the job and responsibilities.",
    image: "https://picsum.photos/600/300",
  },
];
</script>
