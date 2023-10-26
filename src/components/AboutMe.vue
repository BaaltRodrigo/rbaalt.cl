<template>
  <v-card
    variant="tonal"
    class="rounded-xl px-2"
    :height="height"
    color="light-green-darken-4"
  >
    <v-container>
      <v-toolbar-title>More about me</v-toolbar-title>
      <p class="text-subtitle-1 my-2">
        My name is Rodrigo, I'm a developer from Chile. I discover programming
        at the university and that unfold a world of infinite possibilities.
      </p>
      <p class="text-subtitle-1">
        I'm a Judoka, I practice this sport since 2015 and also love to read
        fantasy books. Big fan of The Stormlight Archive. And sometimes I built
        model kits of Gundams.
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
