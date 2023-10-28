<template>
  <v-card class="px-2 bg-lime-lighten-1 text-black" :height="height">
    <v-container>
      <v-toolbar-title>{{ $t("about.title") }}</v-toolbar-title>
      <p class="text-body-1 my-2">{{ $t("about.description") }}</p>
      <p class="text-body-1">
        {{ $t("about.interests") }}
      </p>
    </v-container>
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
