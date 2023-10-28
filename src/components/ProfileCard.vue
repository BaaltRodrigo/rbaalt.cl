<template>
  <v-card class="pt-8 px-4" color="deep-purple-lighten-4" :height="height">
    <v-card-title class="text-h4">{{ $t("profile.welcome") }}</v-card-title>
    <v-card-text>
      <p class="my-1 text-body-1">
        {{ $t("profile.shortDescription") }}
      </p>
      <p class="my-1 text-body-1">{{ $t("profile.workingAt") }}</p>
    </v-card-text>
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
