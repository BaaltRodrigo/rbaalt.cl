<script setup>
const LINKS = {
  linkedin: "https://www.linkedin.com/in/baaltrodrigo/",
  github: "https://github.com/baaltrodrigo",
  originalLayout: "https://erickvpomie.vercel.app/",
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
  <div class="w-screen bg-lime-600">
    <nuxt-page></nuxt-page>
  </div>
</template>
