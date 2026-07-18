<template>
  <v-card
    class="rounded-xl py-4 h-100 noise-background"
    color="purple-darken-3 text-grey-lighten-2"
  >
    <!-- Logo of the company -->
    <template #prepend>
      <v-avatar rounded="0" size="75">
        <v-img :src="image" alt="Logo of a company I have worked with"></v-img>
      </v-avatar>
    </template>
    <template #title>
      <h4 class="text-body-1 font-weight-medium">{{ position }}</h4>
      <h3 class="text-h5 text-amber-lighten-3">{{ company }}</h3>
      <p class="text-body-2">{{ dates }}</p>
    </template>
  </v-card>
</template>

<script setup>
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
