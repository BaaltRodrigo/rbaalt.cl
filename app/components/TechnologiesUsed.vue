<template>
  <article class="bg-surface-light border-t-sm border-s-sm">
    <v-row dense no-gutters>
      <v-col v-for="t in technologies" :key="t.name" cols="12" sm="4">
        <v-card
          class="py-4 px-6 rounded-0 border-b-sm border-e-sm"
          variant="flat"
          :href="t.link"
          target="_blank"
        >
          <span class="border-0 border-b-md">
            {{ t.name }}
          </span>
        </v-card>
      </v-col>
    </v-row>
  </article>
</template>

<script setup lang="ts">
const technologies = [
  { name: "Laravel", link: "https://laravel.com" },
  { name: "Nuxt", link: "https://nuxt.com" },
  { name: "Django", link: "https://djangoproject.com" },
  { name: "Azure", link: "https://azure.microsoft.com" },
  { name: "Cloudflare", link: "https://cloudflare.com" },
  { name: "Vercel", link: "https://vercel.com" },
  { name: "Postgres", link: "https://postgres.org" },
  { name: "MongoDB", link: "https://mongodb.com" },
  { name: "Firebase", link: "https://firebase.google.com" },
];
</script>
