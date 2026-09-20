<template>
  <v-container min-height="60px" class="border-sm d-flex align-center pa-0">
    <section>
      <v-avatar size="60" class="rounded-0 h-100">
        <img src="/myself.jpg" alt="Rodrigo Pizarro" class="h-100" />
      </v-avatar>
      <span class="pl-1 text-body-large"> Rodrigo </span>
    </section>

    <v-spacer />

    <section>
      <v-btn
        v-for="link in LINKS"
        :key="link.name"
        variant="text"
        height="60"
        class="rounded-0 border-s-sm"
        :href="link.url"
        target="_blank"
        :prepend-icon="link.icon"
        :text="link.name"
      />
    </section>
  </v-container>
</template>

<script setup lang="ts">
const LINKS = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/baaltrodrigo/",
    icon: "mdi-linkedin",
  },
  {
    name: "Github",
    url: "https://github.com/baaltrodrigo",
    icon: "mdi-github",
  },
];
</script>
