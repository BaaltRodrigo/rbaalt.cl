<template>
  <v-card
    height="100%"
    class="rounded-xl text-center pa-8"
    variant="tonal"
    color="green"
  >
    <p class="text-subtitle-1">My Age</p>
    <v-card-title class="text-h4">{{ currentAge }}</v-card-title>
  </v-card>
</template>

<script setup>
import { ref, computed } from "vue";

const birthDate = ref(new Date("1995-11-07"));

const currentAge = computed(() => {
  const today = new Date();
  let age = today.getFullYear() - birthDate.value.getFullYear();
  const month = today.getMonth() - birthDate.value.getMonth();
  // current day correction
  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
});
</script>
