<template>
  <v-btn
    :href="link"
    variant="tonal"
    target="_blank"
    class="rounded-xl"
    :color="color"
    block
    height="100%"
    min-height="150"
  >
    <v-icon size="84">{{ icon }}</v-icon>
  </v-btn>
</template>

<script setup>
const props = defineProps({
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
