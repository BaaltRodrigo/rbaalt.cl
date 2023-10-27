<template>
  <v-card
    variant="tonal"
    class="rounded-xl px-2"
    :height="height"
    color="light-green-darken-4"
  >
    <v-container>
      <v-toolbar-title>{{ $t("about.title") }}</v-toolbar-title>
      <p class="text-subtitle-1 my-2">{{ $t("about.description") }}</p>
      <p class="text-subtitle-1">
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
