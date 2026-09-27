<script setup lang="ts">
import EXPERIENCE from "~/data/experience.json";

const pageTitle = "Working Experience - Rodrigo Pizarro";
const pageDescription =
  "Work history of Rodrigo Pizarro, including roles at Lifebox, Facilita, the Chilean Army and more.";

useSeoMeta({
  title: pageTitle,
  ogTitle: pageTitle,
  description: pageDescription,
  ogDescription: pageDescription,
});
</script>

<template>
  <section class="my-4">
    <h1 class="text-headline-small font-weight-bold mb-2">
      Working Experience
    </h1>
    <p class="text-body-medium mb-4 text-medium-emphasis">
      A complete list of my professional experience.
    </p>
    <WorkingExperience :experiences="EXPERIENCE.work" />
  </section>

  <v-divider class="my-6" />

  <section class="my-4">
    <h2 class="text-headline-small font-weight-bold mb-2">
      Volunteer Experience
    </h2>
    <p class="text-body-medium mb-4 text-medium-emphasis">
      Civic work I have done alongside my professional roles.
    </p>
    <WorkingExperience :experiences="EXPERIENCE.volunteer" />
  </section>
</template>
