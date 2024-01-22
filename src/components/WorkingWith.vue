<template>
  <v-sheet
    class="rounded-xl pt-md-4 pb-md-8 py-8 px-md-0 px-6 text-md-center h-100"
    color="grey-darken-3 text-grey-lighten-2"
  >
    <!-- Background image -->
    <v-row justify-sm="space-between" justify-md="center">
      <v-col cols="8" md="12">
        <h3 class="text-h5 text-amber-lighten-3">{{ company }}</h3>
        <h4 class="text-subtitle-2 font-weight-bold">{{ position }}</h4>
        <span class="text-body-2">{{ dates }}</span>
      </v-col>
      <v-col cols="3" md="7">
        <v-img :src="image"></v-img>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  company: {
    type: String,
    default: "Company",
  },
  position: {
    type: String,
    default: "Position/Role",
  },
  dates: {
    type: String,
    default: "Start - End",
  },
  image: {
    type: String,
    default: "/lerasium.png",
  },
});
</script>
