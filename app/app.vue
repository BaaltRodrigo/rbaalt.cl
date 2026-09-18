<script setup>
const LINKS = {
  linkedin: "https://www.linkedin.com/in/baaltrodrigo/",
  github: "https://github.com/baaltrodrigo",
};

const pageTitle = "Rodrigo Pizarro - Software Engineer";
const pageDescription =
  "Rodrigo Pizarro, Software Engineer focused on deliver user friendly solutions. I have been working with web technologies for more than 5 years.";

useSeoMeta({
  title: pageTitle,
  ogTitle: pageTitle,
  description: pageDescription,
  ogDescription: pageDescription,
  ogImage: "https://pub-093c41e779424af8817602feb96299c4.r2.dev/ogImage.jpg",
});
</script>

<template>
  <v-app>
    <v-main class="d-flex flex-column ga-4">
      <AppHeader />

      <AboutMe />
    </v-main>
  </v-app>
</template>
