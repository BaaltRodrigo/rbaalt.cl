<template>
  <a
    href="https://maps.app.goo.gl/CyTW59qagg2KyoR76"
    target="_blank"
    class="rounded-xl"
  >
    <v-card :height="height" variant="flat" class="rounded-xl">
      <v-img
        src="santiago.jpg"
        cover
        class="d-flex justify-center align-center text-center"
        width="100%"
      >
        <v-avatar size="68" image="spren.png"></v-avatar>
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
