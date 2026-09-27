<script setup lang="ts">
import EXPERIENCE from "~/data/experience.json";

const pageTitle = "Rodrigo Pizarro - Software Engineer";
const pageDescription =
  "Rodrigo Pizarro, Software Engineer focused on deliver user friendly solutions. I have been working with web technologies for more than 7 years.";

useSeoMeta({
  title: pageTitle,
  ogTitle: pageTitle,
  description: pageDescription,
  ogDescription: pageDescription,
});

const workingIds = ["Lifebox", "Facilita"];
const showCaseExperience = EXPERIENCE.work.filter((exp) =>
  workingIds.includes(exp.name),
);
</script>

<template>
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
        to="/working-experience"
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
      I have use lots of different technologies over the years. Here is a short
      selection of the ones I consider the most relevant.
    </p>
    <TechnologiesUsed />
  </section>

  <v-divider class="my-6" />

  <section style="text-wrap: pretty">
    <h2 class="text-headline-small font-weight-bold mb-2">How to reach me</h2>
    <p class="text-body-medium text-medium-emphasis">
      If you want to get in touch with me, you can find me on linkedin or
      github.
    </p>
    <p class="text-body-medium mb-4 text-medium-emphasis">
      Linkedin is the best way to get in touch with me.
    </p>

    <v-btn
      class="rounded-0"
      variant="outlined"
      href="https://www.linkedin.com/in/baaltrodrigo/"
      target="_blank"
      prepend-icon="mdi-linkedin"
    >
      LinkedIn
    </v-btn>
    <v-btn
      class="rounded-0"
      variant="text"
      href="https://github.com/baaltrodrigo"
      target="_blank"
      prepend-icon="mdi-github"
    >
      Github
    </v-btn>
  </section>
</template>
