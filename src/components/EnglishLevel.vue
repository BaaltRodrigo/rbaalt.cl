<template>
  <v-card
    class="d-flex flex-column justify-center align-center"
    :height="height"
    color="deep-purple-lighten-4"
  >
    <p class="text-subtitle-1">{{ $t("english.title") }}</p>
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
