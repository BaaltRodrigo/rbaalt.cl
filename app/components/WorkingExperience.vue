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
import WORK_EXPERIENCE from "~/data/work.json";
</script>
