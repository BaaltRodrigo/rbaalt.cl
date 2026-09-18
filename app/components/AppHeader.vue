<template>
  <v-container min-height="60px" class="border-sm d-flex align-center pa-0">
    <section>
      <v-avatar size="60" class="rounded-0 h-100">
        <img src="/myself.jpg" alt="Rodrigo Pizarro" class="h-100" />
      </v-avatar>
      <span class="pl-1 text-body-large"> Rodrigo Pizarro </span>
    </section>

    <v-spacer />

    <section class="h-100">
      <v-btn
        variant="text"
        class="rounded-0 h-100 border-s-sm"
        prepend-icon="mdi-linkedin"
      >
        LinkedIn
      </v-btn>
      <v-btn
        variant="text"
        class="rounded-0 h-100 border-s-sm"
        prepend-icon="mdi-github"
      >
        Github
      </v-btn>
    </section>
  </v-container>
</template>
