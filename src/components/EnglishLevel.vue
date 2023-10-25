<template>
  <v-card
    class="d-flex flex-column justify-center align-center rounded-xl"
    variant="tonal"
    :height="height"
    color="deep-purple-accent-4"
  >
    <p class="text-subtitle-1">English level</p>
    <v-card-title class="text-h4">B2</v-card-title>
  </v-card>
</template>

<script setup>
const props = defineProps({
  height: {
    type: String,
    default: "100%",
  },
});
</script>
