<template>
  <article class="bg-surface-light border-t-sm border-s-sm">
    <v-row dense no-gutters>
      <v-col v-for="t in technologies" :key="t.name" cols="12" sm="4">
        <v-card
          class="py-4 px-6 rounded-0 border-b-sm border-e-sm"
          variant="flat"
          :href="t.link"
          target="_blank"
        >
          <span class="border-0 border-b-md">
            {{ t.name }}
          </span>
        </v-card>
      </v-col>
    </v-row>
  </article>
</template>

<script setup lang="ts">
import technologies from "~/data/technologies.json";
</script>
