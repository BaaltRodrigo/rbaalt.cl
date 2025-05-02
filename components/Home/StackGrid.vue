<template>
  <div class="grid grid-cols-3 grid-rows-1 gap-4">
    <div v-for="logo in logos" class="flex items-center justify-center">
      <img
        :src="logo.src"
        :alt="logo.name"
        class="max-h-20 object-cover opacity-75"
      />
    </div>
  </div>
</template>

<script setup>
const logos = [
  {
    src: "/images/django-logo-white.svg",
    alt: "Django Logo",
  },
  {
    src: "/images/laravel-logo-white.svg",
    alt: "Laravel Logo",
  },
  {
    src: "/images/nuxt-logo-white.svg",
    alt: "Nuxt Logo",
  },
];
</script>
