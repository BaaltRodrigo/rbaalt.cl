<template>
  <section class="mt-16">
    <h1 class="text-h3">
      {{ $t("HOME.WELCOME") }}
    </h1>
    <h3
      style="text-wrap: pretty"
      class="font-weight-regular text-grey-lighten-2 mt-2 w-75"
    >
      {{ $t("profile.shortDescription") }}
    </h3>
  </section>
  <!-- Social buttons -->
  <div class="d-flex flex-wrap mt-3 mb-8">
    <v-btn
      class="expandable text-none"
      prepend-icon="mdi-linkedin"
      href="https://www.linkedin.com/in/baaltrodrigo/"
      target="_blank"
      append-icon="mdi-open-in-new"
    >
      LinkedIn
    </v-btn>
    <v-btn
      class="expandable text-none mx-4"
      prepend-icon="mdi-github"
      href="https://github.com/BaaltRodrigo"
      target="_blank"
      append-icon="mdi-open-in-new"
    >
      GitHub
    </v-btn>
  </div>
</template>
