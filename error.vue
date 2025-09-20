<template>
  <app-header class="z-0"></app-header>

  <section class="max-w-5xl mx-auto px-5 py-10 mt-30">
    <h1 class="text-3xl text-slate-200 mb-5">This page just doesn't exist</h1>
    <p class="text-slate-300 mb-5">
      The page you are looking for does not exist. Please check the URL and try
      again.
    </p>
    <a
      href="/"
      class="inline-block px-6 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-lg font-semibold transition-colors duration-200 shadow"
    >
      Go to home
    </a>
  </section>
</template>

<script setup>
// Set the error status code
defineProps({
  error: Object,
});

// Set the page title
useHead({
  title: "404 - Page Not Found | rbaalt",
});
</script>
