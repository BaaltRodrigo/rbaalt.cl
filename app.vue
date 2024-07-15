<script setup lang="ts">
const pageTitle = "Rodrigo Pizarro - Software Engineer";
const pageDescription =
  "Rodrigo Pizarro, Software Engineer focused on deliver user friendly solutions. I have been working with web technologies for more than 5 years.";

useHead({
  meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
  htmlAttrs: {
    lang: "en",
    "data-theme": "coffee",
  },
});

useSeoMeta({
  title: pageTitle,
  ogTitle: pageTitle,
  description: pageDescription,
  ogDescription: pageDescription,
  ogImage: "https://pub-093c41e779424af8817602feb96299c4.r2.dev/ogImage.jpg",
});
</script>

<template>
  <UMain>
    <nuxt-page></nuxt-page>
  </UMain>
</template>
