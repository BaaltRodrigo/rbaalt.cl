<template>
  <article class="border-none position-relative" style="text-wrap: pretty">
    <h2 class="text-headline-small font-weight-bold mb-4">
      Working experience
    </h2>

    <section
      v-for="experience in WORK_EXPERIENCE"
      :key="experience.name"
      class="my-3"
    >
      <v-list-item
        class="pl-0"
        :title="experience.name"
        :subtitle="experience.position"
      >
        <template #append>
          <span class="text-label-medium">
            {{ experience.startDate }} - {{ experience.endDate ?? "Present" }}
          </span>
        </template>
      </v-list-item>
      <p class="text-body-medium mt-2 mb-4">
        {{ experience.summary }}
      </p>

      <template v-for="highlight in experience.highlights" :key="highlight">
        <article class="d-flex align-start ga-2">
          <v-icon>mdi-circle-small</v-icon>
          <p class="text-body-medium mb-2">
            {{ highlight }}
          </p>
        </article>
      </template>
    </section>
  </article>

  <v-container class="d-flex justify-end pa-0 border-none">
    <v-btn class="w-100 rounded-0 border-sm" max-width="300" variant="text">
      See more
    </v-btn>
  </v-container>
</template>

<script setup>
/**
 * This working experiences are the "work" field into the JsonResume schema.
 * {
 *  "name": "Company",
 *  "position": "President",
 *  "url": "https://company.com",
 *  "startDate": "2013-01-01",
 *  "endDate": "2014-01-01",
 *  "summary": "Description…",
 *  "highlights": [
 *    "Started the company"
 *  ],
 * },
 */
const WORK_EXPERIENCE = [
  {
    name: "Lifebox",
    url: "https://lifebox.cl",
    position: "Senior Software Engineer",
    startDate: "2024-03-01",
    summary:
      "An startup company that provides a Learning Management System (LMS) for companies to train their employees and develop Power Skills. The skills of the future.",
    highlights: [
      "Implementation of the MCP Server (Model context protocol) of the company for internal usage. Allowing to connect the company's information and products to different LLMs.",
      "Integration and data analysis of the usage of the platform using Posthog.",
      "Leader of the responsive design of the Power Skills Platform, our LMS, allowing to have a consistent experience across all devices.",
      "Optimization of the performance of the platform, allowing ~5000 users to use our LMS simultaneously.",
    ],
  },
  {
    name: "Facilita",
    url: "https://facilita.cl",
    position: "Software Engineer",
    startDate: "2019-03-01",
    endDate: "2023-12-01",
    summary:
      "A company that specializes in cloud-based management and human resources software tailored for Chilean business compliance.",
    highlights: [
      "Migrated desktop applications to a web platform with Laravel and Vue.js, enabling cloud-based access for clients",
      "Refactored the database schema to address performance and scalability issues.",
    ],
  },
  {
    name: "Chilean Army",
    position: "Developer",
    startDate: "2019-09-01",
    endDate: "2020-03-01",
    summary:
      "Due to a NDA, I cannot say what I was doing here. But it was a great experience.",
    highlights: ["[REDACTED]", "[REDACTED]"],
  },
];
</script>
