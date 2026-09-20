<script setup lang="ts">
import WORK_EXPERIENCE from "~/data/work.json";

const pageTitle = "Rodrigo Pizarro - Software Engineer";
const pageDescription =
  "Rodrigo Pizarro, Software Engineer focused on deliver user friendly solutions. I have been working with web technologies for more than 5 years.";

useSeoMeta({
  title: pageTitle,
  ogTitle: pageTitle,
  description: pageDescription,
  ogDescription: pageDescription,
  ogImage: "https://pub-093c41e779424af8817602feb96299c4.r2.dev/ogImage.jpg",
});

const workingIds = ["Lifebox", "Facilita", "Chilean Army"];
const showCaseExperience = WORK_EXPERIENCE.filter((exp) =>
  workingIds.includes(exp.name),
);
</script>

<template>
  <v-app>
    <v-main>
      <AppHeader />
      <v-container class="border-none pb-16">
        <AboutMe class="my-4" />

        <v-divider class="my-6" />

        <section>
          <h2 class="text-headline-small font-weight-bold mb-2">
            Working Experience
          </h2>
          <p class="text-body-medium mb-4 text-medium-emphasis">
            A selection of my most relevant experiences.
          </p>
          <WorkingExperience :experiences="showCaseExperience" />
          <v-container class="d-flex justify-end pa-0 border-none">
            <v-btn
              class="w-100 rounded-0 border-sm"
              max-width="300"
              variant="text"
            >
              See more
            </v-btn>
          </v-container>
        </section>

        <v-divider class="my-6" />

        <section style="text-wrap: pretty">
          <h2 class="text-headline-small font-weight-bold mb-2">
            Technologies I have used
          </h2>
          <p class="text-body-medium mb-4 text-medium-emphasis">
            I have use lots of different technologies over the years. Here is a
            short selection of the ones I consider the most relevant.
          </p>
          <TechnologiesUsed />
        </section>
      </v-container>
    </v-main>
  </v-app>
</template>
