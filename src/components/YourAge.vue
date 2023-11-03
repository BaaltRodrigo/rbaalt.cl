<template>
  <v-card
    class="d-flex flex-column justify-center align-center"
    :height="height"
    color="green-lighten-2"
  >
    <p class="text-subtitle-1">{{ $t("age.title") }}</p>
    <v-card-title class="text-h4">{{ currentAge }}</v-card-title>
  </v-card>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  height: {
    type: String,
    default: "100%",
  },
});

const birthDate = ref(new Date("1995-11-07"));

const currentAge = computed(() => {
  const timeDiff = Date.now() - birthDate.value.getTime();
  const ageDate = new Date(timeDiff);
  // 1970 is the year of the Unix Epoch. Need to subtract it to get the correct age.
  return Math.abs(ageDate.getUTCFullYear() - 1970);
});
</script>
