<template>
  <article class="border-none position-relative" style="text-wrap: pretty">
    <section v-for="exp in experiences" :key="exp.name" class="my-3">
      <v-list-item class="pl-0" :title="exp.name" :subtitle="exp.position">
        <template #append>
          <span class="text-label-medium">
            {{ exp.startDate }} - {{ exp.endDate ?? "Present" }}
          </span>
        </template>
      </v-list-item>
      <p class="text-body-medium mt-2 mb-4">
        {{ exp.summary }}
      </p>

      <template v-for="highlight in exp.highlights" :key="highlight">
        <article class="d-flex align-start ga-2">
          <v-icon>mdi-circle-small</v-icon>
          <p class="text-body-medium mb-2">
            {{ highlight }}
          </p>
        </article>
      </template>
    </section>
  </article>
</template>

<script setup lang="ts">
interface Experience {
  name: string;
  position: string;
  startDate: string;
  endDate?: string;
  summary: string;
  highlights: string[];
}

const props = defineProps<{
  experiences?: Experience[];
}>();
</script>
