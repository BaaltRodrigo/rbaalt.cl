<template>
  <v-card color="red-lighten-3" height="100%">
    <v-toolbar color="transparent">
      <v-toolbar-title>{{ $t("techIcons.title") }}</v-toolbar-title>
    </v-toolbar>
    <v-card-item>
      <v-row justify="center" class="text-center">
        <v-col cols="3" v-for="icon in icons" :key="'tech-tool-' + icon">
          <v-icon size="28">{{ icon }}</v-icon>
        </v-col>
        <v-col cols="3">
          <p class="text-h6">🥋</p>
        </v-col>
      </v-row>
    </v-card-item>
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
