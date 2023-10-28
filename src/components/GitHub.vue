<template>
  <a
    href="https://github.com/BaaltRodrigo"
    target="_blank"
    class="rounded-xl text-decoration-none"
  >
    <v-card @click="" :height="height">
      <v-img cover width="100%" src="coding-guy.gif" class="text-black">
        <v-toolbar color="transparent" class="px-2">
          <template #prepend>
            <v-icon size="28">mdi-github</v-icon>
          </template>
          <v-toolbar-title>{{ $t("github.title") }}</v-toolbar-title>
        </v-toolbar>
      </v-img>
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
