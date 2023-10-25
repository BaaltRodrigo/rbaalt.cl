<template>
  <v-card
    variant="flat"
    color="red"
    :height="height"
    :width="width"
    class="rounded-xl"
  >
    <v-card-text class="text-center">{{ message }}</v-card-text>
  </v-card>
</template>

<script setup>
const props = defineProps({
  height: {
    type: String,
    default: "100%",
  },
  width: {
    type: String,
    default: "100%",
  },
  message: {
    type: String,
    default: "Bento Box",
  },
});
</script>
