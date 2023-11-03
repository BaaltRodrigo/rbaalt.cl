<template>
  <v-card
    class="d-flex align-center justify-center inline-flex flex-wrap pa-4"
    color="red-lighten-3"
    height="100%"
  >
    <v-icon
      class="mx-2"
      v-for="icon in icons"
      :key="'tech-tool-' + icon"
      size="28"
    >
      {{ icon }}
    </v-icon>
    <p class="text-h6 mx-2">🥋</p>
  </v-card>
</template>

<script setup>
import { ref } from "vue";

const icons = ref([
  "mdi-github",
  "mdi-git",
  "mdi-language-php",
  "mdi-laravel",
  "mdi-vuejs",
  "mdi-vuetify",
  "mdi-language-javascript",
  "mdi-angular",
  "mdi-ubuntu",
  "mdi-firebase",
  "mdi-language-python",
  "mdi-nodejs",
  "mdi-microsoft-excel",
]);
</script>
