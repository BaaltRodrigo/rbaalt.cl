<script setup lang="ts">
import WORK_EXPERIENCE from "~/data/work.json";

const pageTitle = "Working Experience - Rodrigo Pizarro";
const pageDescription =
  "Work history of Rodrigo Pizarro, including roles at Lifebox, Facilita, CronApp Chile, and the Chilean Army.";

useSeoMeta({
  title: pageTitle,
  ogTitle: pageTitle,
  description: pageDescription,
  ogDescription: pageDescription,
});
</script>

<template>
  <section>
    <h1 class="text-headline-small font-weight-bold mb-2">
      Working Experience
    </h1>
    <p class="text-body-medium mb-4 text-medium-emphasis">
      A complete list of my professional experience.
    </p>
    <WorkingExperience :experiences="WORK_EXPERIENCE" />
  </section>
</template>
