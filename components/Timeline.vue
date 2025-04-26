<template>
  <div
    class="hidden md:flex gap-8 py-8 border-l border-gray-700 relative items-start"
  >
    <!-- Left -->
    <header class="sticky top-25 md:min-w-xs">
      <div class="pl-4 relative">
        <div
          class="absolute -left-1.25 top-[0.25rem] w-2.25 h-2.25 bg-white rounded-full"
        ></div>
        <div class="flex flex-col gap-2">
          <p class="text-sm text-gray-400">Aug, 2020 – Oct, 2022</p>
          <h3 class="text-2xl line-clamp-2 font-semibold text-white">
            Acme Corp
          </h3>
          <p class="text-sm text-gray-400">Software Engineer</p>
        </div>
      </div>
    </header>

    <!-- Right: Image & Description -->
    <div
      class="flex-1"
      :class="[hideSeparator ? 'border-b-0' : 'border-b border-gray-700 pb-5']"
    >
      <img
        src="https://picsum.photos/600/300"
        alt="Project screenshot"
        class="rounded-lg mb-4 border border-gray-700 aspect-16/9 w-full object-cover bg-gray-700"
      />
      <p class="text-gray-300">
        Led the frontend development of a complex financial dashboard using Vue
        and TailwindCSS. Collaborated with backend engineers to design and
        implement secure API integrations. Also contributed to component library
        used across the company’s internal tools.
      </p>
    </div>
  </div>

  <!-- Mobile Version -->
  <div
    class="md:hidden flex flex-col gap-2 my-8"
    :class="[hideSeparator ? 'border-b-0' : 'border-b border-gray-700']"
  >
    <p class="text-sm text-gray-400">Aug, 2020 – Oct, 2022</p>
    <h3 class="text-xl font-semibold text-white">Acme Corp</h3>
    <p class="text-sm text-gray-400 -mt-1">Software Engineer</p>

    <img
      src="https://picsum.photos/600/300"
      alt="Project screenshot"
      class="rounded-lg border border-gray-700 aspect-16/9 object-cover"
    />
    <p class="text-gray-300" :class="[hideSeparator ? 'pb-0' : 'pb-8']">
      Led the frontend development of a complex financial dashboard using Vue
      and TailwindCSS. Collaborated with backend engineers to design and
      implement secure API integrations. Also contributed to component library
      used across the company’s internal tools.
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  hideSeparator: {
    type: Boolean,
    default: false,
  },
});

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
