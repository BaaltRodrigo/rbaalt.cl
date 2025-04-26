<template>
  <div class="border-l-1 border-slate-400 pl-1">
    <template v-for="experience in experiences" :key="experience.id">
      <section class="flex gap-5 mb-10">
        <header class="flex flex-col gap-2 w-sm pl-6">
          <span
            class="block w-3 h-3 bg-white border-2 rounded-full absolute mt-1 -ml-7"
          ></span>

          <p class="text-slate-400">{{ experience.date }}</p>
          <h4 class="text-2xl text-slate-100">{{ experience.company }}</h4>
        </header>

        <article></article>
      </section>
    </template>
  </div>
</template>

<script setup>
const experiences = [
  {
    title: "Software Engineer",
    company: "Company A",
    date: "2022 - Present",
    description: "Description of the job and responsibilities.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Software Engineer",
    company: "Company B",
    date: "2021 - 2022",
    description: "Description of the job and responsibilities.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Software Engineer",
    company: "Company C",
    date: "2020 - 2021",
    description: "Description of the job and responsibilities.",
    image: "https://via.placeholder.com/150",
  },
];
</script>
