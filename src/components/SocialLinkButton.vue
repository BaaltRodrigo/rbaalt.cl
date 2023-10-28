<template>
  <v-btn :href="link" target="_blank" block :color="color" :height="height">
    <v-icon size="72">{{ icon }}</v-icon>
  </v-btn>
</template>

<script setup>
const props = defineProps({
  height: {
    type: String,
    default: "100%",
  },
  icon: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: "white",
  },
});
</script>
