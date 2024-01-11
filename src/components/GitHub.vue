<template>
  <a
    href="https://github.com/BaaltRodrigo"
    target="_blank"
    class="rounded-xl text-decoration-none"
  >
    <v-card @click="" :height="height">
      <v-toolbar color="transparent" class="px-2 text-black" style="position: absolute;">
        <template #prepend>
          <v-icon size="28">mdi-github</v-icon>
        </template>
        <v-toolbar-title>
          <h3 class="text-h6">
            {{ $t("github.title") }}
          </h3>
        </v-toolbar-title>
      </v-toolbar>
      <video src="coding-guy-min.mp4" autoplay muted class="w-100" loop />
    </v-card>
  </a>
</template>

<script setup>
const props = defineProps({
  height: {
    type: String,
    default: "100%",
  },
});
</script>
